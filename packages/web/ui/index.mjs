import { jsx as J, Fragment as nf } from "react/jsx-runtime";
import { ConfigProvider as of, Button as af, theme as sf, Select as uf } from "antd";
import * as Ye from "react";
import ge, { createContext as Ru, useRef as sa, useEffect as _i, useMemo as cf, useContext as vu, createElement as lf, useState as bu, useCallback as ff, useLayoutEffect as _f } from "react";
import { createPortal as df } from "react-dom";
import hf from "react-smooth-scrollbar";
const Wv = ({ children: e, override: r, ...t }) => /* @__PURE__ */ J(of, { theme: {
  token: { colorPrimary: r }
}, children: /* @__PURE__ */ J(
  af,
  {
    ...t,
    style: { minWidth: "85px" },
    "data-testid": "color-button",
    children: e
  }
) });
var mo = function(e, r) {
  return mo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, mo(e, r);
};
function Ee(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  mo(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var E = function() {
  return E = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, E.apply(this, arguments);
};
function ye(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
}
function ke(e, r, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(l) {
      try {
        u(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(s, c);
    }
    u((n = n.apply(e, r || [])).next());
  });
}
function Le(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (t = 0)), t; )
      try {
        if (n = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = u;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(u);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = r.call(e, t);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        n = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ee(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, i; n < o; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
var Rn = "Invariant Violation", ua = Object.setPrototypeOf, pf = ua === void 0 ? function(e, r) {
  return e.__proto__ = r, e;
} : ua, gu = (
  /** @class */
  function(e) {
    Ee(r, e);
    function r(t) {
      t === void 0 && (t = Rn);
      var n = e.call(this, typeof t == "number" ? Rn + ": " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
      return n.framesToPop = 1, n.name = Rn, pf(n, r.prototype), n;
    }
    return r;
  }(Error)
);
function qe(e, r) {
  if (!e)
    throw new gu(r);
}
var Iu = ["debug", "log", "warn", "error", "silent"], mf = Iu.indexOf("log");
function pt(e) {
  return function() {
    if (Iu.indexOf(e) >= mf) {
      var r = console[e] || console.log;
      return r.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = pt("debug"), e.log = pt("log"), e.warn = pt("warn"), e.error = pt("error");
})(qe || (qe = {}));
var di = "3.8.5";
function ie(e) {
  try {
    return e();
  } catch {
  }
}
const ca = ie(function() {
  return globalThis;
}) || ie(function() {
  return window;
}) || ie(function() {
  return self;
}) || ie(function() {
  return global;
}) || ie(function() {
  return ie.constructor("return this")();
});
var la = /* @__PURE__ */ new Map();
function Eo(e) {
  var r = la.get(e) || 1;
  return la.set(e, r + 1), "".concat(e, ":").concat(r, ":").concat(Math.random().toString(36).slice(2));
}
function yu(e, r) {
  r === void 0 && (r = 0);
  var t = Eo("stringifyForDisplay");
  return JSON.stringify(e, function(n, o) {
    return o === void 0 ? t : o;
  }, r).split(JSON.stringify(t)).join("<undefined>");
}
function mt(e) {
  return function(r) {
    for (var t = [], n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
    if (typeof r == "number") {
      var o = r;
      r = hi(o), r || (r = pi(o, t), t = []);
    }
    e.apply(void 0, [r].concat(t));
  };
}
var S = Object.assign(function(r, t) {
  for (var n = [], o = 2; o < arguments.length; o++)
    n[o - 2] = arguments[o];
  r || qe(r, hi(t, n) || pi(t, n));
}, {
  debug: mt(qe.debug),
  log: mt(qe.log),
  warn: mt(qe.warn),
  error: mt(qe.error)
});
function z(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return new gu(hi(e, r) || pi(e, r));
}
var fa = Symbol.for("ApolloErrorMessageHandler_" + di);
function Nu(e) {
  return typeof e == "string" ? e : yu(e, 2).slice(0, 1e3);
}
function hi(e, r) {
  if (r === void 0 && (r = []), !!e)
    return ca[fa] && ca[fa](e, r.map(Nu));
}
function pi(e, r) {
  if (r === void 0 && (r = []), !!e)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: di,
      message: e,
      args: r.map(Nu)
    })));
}
function Ef(e, r) {
  if (!!!e)
    throw new Error(r);
}
const Au = {
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
}, Tf = new Set(Object.keys(Au));
function _a(e) {
  const r = e == null ? void 0 : e.kind;
  return typeof r == "string" && Tf.has(r);
}
var da;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(da || (da = {}));
var q;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(q || (q = {}));
function ha(e) {
  return e === 9 || e === 32;
}
function Of(e, r) {
  const t = e.replace(/"""/g, '\\"""'), n = t.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((d) => d.length === 0 || ha(d.charCodeAt(0))), a = t.endsWith('\\"""'), s = e.endsWith('"') && !a, c = e.endsWith("\\"), u = s || c, l = !(r != null && r.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || u || i || a);
  let f = "";
  const _ = o && ha(e.charCodeAt(0));
  return (l && !_ || i) && (f += `
`), f += t, (l || u) && (f += `
`), '"""' + f + '"""';
}
const Rf = 10, Su = 2;
function vf(e) {
  return zt(e, []);
}
function zt(e, r) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return bf(e, r);
    default:
      return String(e);
  }
}
function bf(e, r) {
  if (e === null)
    return "null";
  if (r.includes(e))
    return "[Circular]";
  const t = [...r, e];
  if (gf(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : zt(n, t);
  } else if (Array.isArray(e))
    return yf(e, t);
  return If(e, t);
}
function gf(e) {
  return typeof e.toJSON == "function";
}
function If(e, r) {
  const t = Object.entries(e);
  return t.length === 0 ? "{}" : r.length > Su ? "[" + Nf(e) + "]" : "{ " + t.map(
    ([o, i]) => o + ": " + zt(i, r)
  ).join(", ") + " }";
}
function yf(e, r) {
  if (e.length === 0)
    return "[]";
  if (r.length > Su)
    return "[Array]";
  const t = Math.min(Rf, e.length), n = e.length - t, o = [];
  for (let i = 0; i < t; ++i)
    o.push(zt(e[i], r));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function Nf(e) {
  const r = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (r === "Object" && typeof e.constructor == "function") {
    const t = e.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return r;
}
function Af(e) {
  return `"${e.replace(Sf, Df)}"`;
}
const Sf = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Df(e) {
  return Uf[e.charCodeAt(0)];
}
const Uf = [
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
], mi = Object.freeze({});
function Ne(e, r, t = Au) {
  const n = /* @__PURE__ */ new Map();
  for (const p of Object.values(q))
    n.set(p, Pf(r, p));
  let o, i = Array.isArray(e), a = [e], s = -1, c = [], u = e, l, f;
  const _ = [], d = [];
  do {
    s++;
    const p = s === a.length, R = p && c.length !== 0;
    if (p) {
      if (l = d.length === 0 ? void 0 : _[_.length - 1], u = f, f = d.pop(), R)
        if (i) {
          u = u.slice();
          let b = 0;
          for (const [y, g] of c) {
            const I = y - b;
            g === null ? (u.splice(I, 1), b++) : u[I] = g;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [b, y] of c)
            u[b] = y;
        }
      s = o.index, a = o.keys, c = o.edits, i = o.inArray, o = o.prev;
    } else if (f) {
      if (l = i ? s : a[s], u = f[l], u == null)
        continue;
      _.push(l);
    }
    let O;
    if (!Array.isArray(u)) {
      var h, m;
      _a(u) || Ef(!1, `Invalid AST Node: ${vf(u)}.`);
      const b = p ? (h = n.get(u.kind)) === null || h === void 0 ? void 0 : h.leave : (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (O = b == null ? void 0 : b.call(r, u, l, f, _, d), O === mi)
        break;
      if (O === !1) {
        if (!p) {
          _.pop();
          continue;
        }
      } else if (O !== void 0 && (c.push([l, O]), !p))
        if (_a(O))
          u = O;
        else {
          _.pop();
          continue;
        }
    }
    if (O === void 0 && R && c.push([l, u]), p)
      _.pop();
    else {
      var T;
      o = {
        inArray: i,
        index: s,
        keys: a,
        edits: c,
        prev: o
      }, i = Array.isArray(u), a = i ? u : (T = t[u.kind]) !== null && T !== void 0 ? T : [], s = -1, c = [], f && d.push(f), f = u;
    }
  } while (o !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : e;
}
function Pf(e, r) {
  const t = e[r];
  return typeof t == "object" ? t : typeof t == "function" ? {
    enter: t,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function wf(e) {
  return Ne(e, Gf);
}
const Hf = 80, Gf = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => N(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const r = U("(", N(e.variableDefinitions, ", "), ")"), t = N(
        [
          e.operation,
          N([e.name, r]),
          N(e.directives, " ")
        ],
        " "
      );
      return (t === "query" ? "" : t + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: r, defaultValue: t, directives: n }) => e + ": " + r + U(" = ", t) + U(" ", N(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => oe(e)
  },
  Field: {
    leave({ alias: e, name: r, arguments: t, directives: n, selectionSet: o }) {
      const i = U("", e, ": ") + r;
      let a = i + U("(", N(t, ", "), ")");
      return a.length > Hf && (a = i + U(`(
`, Nt(N(t, `
`)), `
)`)), N([a, N(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: r }) => e + ": " + r
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: r }) => "..." + e + U(" ", N(r, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: r, selectionSet: t }) => N(
      [
        "...",
        U("on ", e),
        N(r, " "),
        t
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: r, variableDefinitions: t, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${U("(", N(t, ", "), ")")} on ${r} ${U("", N(n, " "), " ")}` + o
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: r }) => r ? Of(e) : Af(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + N(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + N(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: r }) => e + ": " + r
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: r }) => "@" + e + U("(", N(r, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: r, operationTypes: t }) => U("", e, `
`) + N(["schema", N(r, " "), oe(t)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: r }) => e + ": " + r
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: r, directives: t }) => U("", e, `
`) + N(["scalar", r, N(t, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: r, interfaces: t, directives: n, fields: o }) => U("", e, `
`) + N(
      [
        "type",
        r,
        U("implements ", N(t, " & ")),
        N(n, " "),
        oe(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: r, arguments: t, type: n, directives: o }) => U("", e, `
`) + r + (pa(t) ? U(`(
`, Nt(N(t, `
`)), `
)`) : U("(", N(t, ", "), ")")) + ": " + n + U(" ", N(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: r, type: t, defaultValue: n, directives: o }) => U("", e, `
`) + N(
      [r + ": " + t, U("= ", n), N(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: r, interfaces: t, directives: n, fields: o }) => U("", e, `
`) + N(
      [
        "interface",
        r,
        U("implements ", N(t, " & ")),
        N(n, " "),
        oe(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, types: n }) => U("", e, `
`) + N(
      ["union", r, N(t, " "), U("= ", N(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, values: n }) => U("", e, `
`) + N(["enum", r, N(t, " "), oe(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: r, directives: t }) => U("", e, `
`) + N([r, N(t, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, fields: n }) => U("", e, `
`) + N(["input", r, N(t, " "), oe(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: r, arguments: t, repeatable: n, locations: o }) => U("", e, `
`) + "directive @" + r + (pa(t) ? U(`(
`, Nt(N(t, `
`)), `
)`) : U("(", N(t, ", "), ")")) + (n ? " repeatable" : "") + " on " + N(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: r }) => N(
      ["extend schema", N(e, " "), oe(r)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: r }) => N(["extend scalar", e, N(r, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: r, directives: t, fields: n }) => N(
      [
        "extend type",
        e,
        U("implements ", N(r, " & ")),
        N(t, " "),
        oe(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: r, directives: t, fields: n }) => N(
      [
        "extend interface",
        e,
        U("implements ", N(r, " & ")),
        N(t, " "),
        oe(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: r, types: t }) => N(
      [
        "extend union",
        e,
        N(r, " "),
        U("= ", N(t, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: r, values: t }) => N(["extend enum", e, N(r, " "), oe(t)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: r, fields: t }) => N(["extend input", e, N(r, " "), oe(t)], " ")
  }
};
function N(e, r = "") {
  var t;
  return (t = e == null ? void 0 : e.filter((n) => n).join(r)) !== null && t !== void 0 ? t : "";
}
function oe(e) {
  return U(`{
`, Nt(N(e, `
`)), `
}`);
}
function U(e, r, t = "") {
  return r != null && r !== "" ? e + r + t : "";
}
function Nt(e) {
  return U("  ", e.replace(/\n/g, `
  `));
}
function pa(e) {
  var r;
  return (r = e == null ? void 0 : e.some((t) => t.includes(`
`))) !== null && r !== void 0 ? r : !1;
}
function ma(e) {
  return e.kind === q.FIELD || e.kind === q.FRAGMENT_SPREAD || e.kind === q.INLINE_FRAGMENT;
}
function nt(e, r) {
  var t = e.directives;
  return !t || !t.length ? !0 : Lf(t).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = r && r[i.value.name.value], S(a !== void 0, 64, o.name.value)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function Jr(e, r, t) {
  var n = new Set(e), o = n.size;
  return Ne(r, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!t || !n.size))
        return mi;
    }
  }), t ? !n.size : n.size < o;
}
function Cf(e) {
  return e && Jr(["client", "export"], e, !0);
}
function kf(e) {
  var r = e.name.value;
  return r === "skip" || r === "include";
}
function Lf(e) {
  var r = [];
  return e && e.length && e.forEach(function(t) {
    if (kf(t)) {
      var n = t.arguments, o = t.name.value;
      S(n && n.length === 1, 65, o);
      var i = n[0];
      S(i.name && i.name.value === "if", 66, o);
      var a = i.value;
      S(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 67, o), r.push({ directive: t, ifArgument: i });
    }
  }), r;
}
const Bf = () => /* @__PURE__ */ Object.create(null), { forEach: Mf, slice: xf } = Array.prototype, { hasOwnProperty: Ff } = Object.prototype;
class We {
  constructor(r = !0, t = Bf) {
    this.weakness = r, this.makeData = t;
  }
  lookup(...r) {
    return this.lookupArray(r);
  }
  lookupArray(r) {
    let t = this;
    return Mf.call(r, (n) => t = t.getChildTrie(n)), Ff.call(t, "data") ? t.data : t.data = this.makeData(xf.call(r));
  }
  peek(...r) {
    return this.peekArray(r);
  }
  peekArray(r) {
    let t = this;
    for (let n = 0, o = r.length; t && n < o; ++n) {
      const i = this.weakness && Ea(r[n]) ? t.weak : t.strong;
      t = i && i.get(r[n]);
    }
    return t && t.data;
  }
  getChildTrie(r) {
    const t = this.weakness && Ea(r) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = t.get(r);
    return n || t.set(r, n = new We(this.weakness, this.makeData)), n;
  }
}
function Ea(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Ae = typeof WeakMap == "function" && ie(function() {
  return navigator.product;
}) !== "ReactNative", Du = typeof WeakSet == "function", Uu = typeof Symbol == "function" && typeof Symbol.for == "function", Zt = Uu && Symbol.asyncIterator;
ie(function() {
  return window.document.createElement;
});
ie(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function L(e) {
  return e !== null && typeof e == "object";
}
function jf(e, r) {
  var t = r, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw z(
        68,
        i.operation,
        i.name ? " named '".concat(i.name.value, "'") : ""
      );
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof t > "u" && (S(n.length === 1, 69, n.length), t = n[0].name.value);
  var o = E(E({}, e), { definitions: ee([
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
              value: t
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return o;
}
function en(e) {
  e === void 0 && (e = []);
  var r = {};
  return e.forEach(function(t) {
    r[t.name.value] = t;
  }), r;
}
function rn(e, r) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var t = e.name.value;
      if (typeof r == "function")
        return r(t);
      var n = r && r[t];
      return S(n, 70, t), n || null;
    }
    default:
      return null;
  }
}
function hr(e) {
  return { __ref: String(e) };
}
function G(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Vf(e) {
  return L(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Wf(e) {
  return e.kind === "StringValue";
}
function Xf(e) {
  return e.kind === "BooleanValue";
}
function Kf(e) {
  return e.kind === "IntValue";
}
function $f(e) {
  return e.kind === "FloatValue";
}
function qf(e) {
  return e.kind === "Variable";
}
function Yf(e) {
  return e.kind === "ObjectValue";
}
function Jf(e) {
  return e.kind === "ListValue";
}
function Qf(e) {
  return e.kind === "EnumValue";
}
function zf(e) {
  return e.kind === "NullValue";
}
function Er(e, r, t, n) {
  if (Kf(t) || $f(t))
    e[r.value] = Number(t.value);
  else if (Xf(t) || Wf(t))
    e[r.value] = t.value;
  else if (Yf(t)) {
    var o = {};
    t.fields.map(function(a) {
      return Er(o, a.name, a.value, n);
    }), e[r.value] = o;
  } else if (qf(t)) {
    var i = (n || {})[t.name.value];
    e[r.value] = i;
  } else if (Jf(t))
    e[r.value] = t.values.map(function(a) {
      var s = {};
      return Er(s, r, a, n), s[r.value];
    });
  else if (Qf(t))
    e[r.value] = t.value;
  else if (zf(t))
    e[r.value] = null;
  else
    throw z(79, r.value, t.kind);
}
function Zf(e, r) {
  var t = null;
  e.directives && (t = {}, e.directives.forEach(function(o) {
    t[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return Er(t[o.name.value], a, s, r);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return Er(n, i, a, r);
  })), Ei(e.name.value, n, t);
}
var e_ = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], Ei = Object.assign(function(e, r, t) {
  if (r && t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var n = t.connection.filter ? t.connection.filter : [];
      n.sort();
      var o = {};
      return n.forEach(function(s) {
        o[s] = r[s];
      }), "".concat(t.connection.key, "(").concat(Lr(o), ")");
    } else
      return t.connection.key;
  var i = e;
  if (r) {
    var a = Lr(r);
    i += "(".concat(a, ")");
  }
  return t && Object.keys(t).forEach(function(s) {
    e_.indexOf(s) === -1 && (t[s] && Object.keys(t[s]).length ? i += "@".concat(s, "(").concat(Lr(t[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var r = Lr;
    return Lr = e, r;
  }
}), Lr = function(r) {
  return JSON.stringify(r, r_);
};
function r_(e, r) {
  return L(r) && !Array.isArray(r) && (r = Object.keys(r).sort().reduce(function(t, n) {
    return t[n] = r[n], t;
  }, {})), r;
}
function tn(e, r) {
  if (e.arguments && e.arguments.length) {
    var t = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return Er(t, o, i, r);
    }), t;
  }
  return null;
}
function Me(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function To(e, r, t) {
  for (var n, o = 0, i = r.selections; o < i.length; o++) {
    var a = i[o];
    if (xe(a)) {
      if (a.name.value === "__typename")
        return e[Me(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, c = n; s < c.length; s++) {
      var a = c[s], u = To(e, rn(a, t).selectionSet, t);
      if (typeof u == "string")
        return u;
    }
}
function xe(e) {
  return e.kind === "Field";
}
function t_(e) {
  return e.kind === "InlineFragment";
}
function ot(e) {
  S(e && e.kind === "Document", 71);
  var r = e.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw z(72, t.kind);
    return t;
  });
  return S(r.length <= 1, 73, r.length), e;
}
function it(e) {
  return ot(e), e.definitions.filter(function(r) {
    return r.kind === "OperationDefinition";
  })[0];
}
function Oo(e) {
  return e.definitions.filter(function(r) {
    return r.kind === "OperationDefinition" && !!r.name;
  }).map(function(r) {
    return r.name.value;
  })[0] || null;
}
function nn(e) {
  return e.definitions.filter(function(r) {
    return r.kind === "FragmentDefinition";
  });
}
function Pu(e) {
  var r = it(e);
  return S(r && r.operation === "query", 74), r;
}
function n_(e) {
  S(e.kind === "Document", 75), S(e.definitions.length <= 1, 76);
  var r = e.definitions[0];
  return S(r.kind === "FragmentDefinition", 77), r;
}
function at(e) {
  ot(e);
  for (var r, t = 0, n = e.definitions; t < n.length; t++) {
    var o = n[t];
    if (o.kind === "OperationDefinition") {
      var i = o.operation;
      if (i === "query" || i === "mutation" || i === "subscription")
        return o;
    }
    o.kind === "FragmentDefinition" && !r && (r = o);
  }
  if (r)
    return r;
  throw z(78);
}
function Ti(e) {
  var r = /* @__PURE__ */ Object.create(null), t = e && e.variableDefinitions;
  return t && t.length && t.forEach(function(n) {
    n.defaultValue && Er(r, n.variable.name, n.defaultValue);
  }), r;
}
function o_(e) {
  return e;
}
var wu = function() {
  function e(r, t) {
    t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = Du ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = r, t.getCacheKey && (this.getCacheKey = t.getCacheKey), t.cache !== !1 && (this.stableCacheKeys = new We(Ae, function(n) {
      return { key: n };
    }));
  }
  return e.prototype.getCacheKey = function(r) {
    return [r];
  }, e.identity = function() {
    return new e(o_, { cache: !1 });
  }, e.split = function(r, t, n) {
    return n === void 0 && (n = e.identity()), new e(function(o) {
      var i = r(o) ? t : n;
      return i.transformDocument(o);
    }, { cache: !1 });
  }, e.prototype.transformDocument = function(r) {
    if (this.resultCache.has(r))
      return r;
    var t = this.getStableCacheEntry(r);
    if (t && t.value)
      return t.value;
    ot(r);
    var n = this.transform(r);
    return this.resultCache.add(n), t && (t.value = n), n;
  }, e.prototype.concat = function(r) {
    var t = this;
    return new e(function(n) {
      return r.transformDocument(t.transformDocument(n));
    }, { cache: !1 });
  }, e.prototype.getStableCacheEntry = function(r) {
    if (this.stableCacheKeys) {
      var t = this.getCacheKey(r);
      if (t)
        return S(Array.isArray(t), 63), this.stableCacheKeys.lookupArray(t);
    }
  }, e;
}(), nr = Ae ? /* @__PURE__ */ new WeakMap() : void 0, Hu = function(e) {
  var r;
  return r = nr == null ? void 0 : nr.get(e), r || (r = wf(e), nr == null || nr.set(e, r)), r;
}, F = Array.isArray;
function me(e) {
  return Array.isArray(e) && e.length > 0;
}
var Ta = {
  kind: q.FIELD,
  name: {
    kind: q.NAME,
    value: "__typename"
  }
};
function Gu(e, r) {
  return !e || e.selectionSet.selections.every(function(t) {
    return t.kind === q.FRAGMENT_SPREAD && Gu(r[t.name.value], r);
  });
}
function i_(e) {
  return Gu(it(e) || n_(e), en(nn(e))) ? null : e;
}
function a_(e) {
  var r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? r.set(n.name, n) : n.test && t.set(n.test, n));
  }), function(n) {
    var o = r.get(n.name.value);
    return !o && t.size && t.forEach(function(i, a) {
      a(n) && (o = i);
    }), o;
  };
}
function Oa(e) {
  var r = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var o = r.get(n);
    return o || r.set(n, o = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), o;
  };
}
function Cu(e, r) {
  ot(r);
  for (var t = Oa(""), n = Oa(""), o = function(p) {
    for (var R = 0, O = void 0; R < p.length && (O = p[R]); ++R)
      if (!F(O)) {
        if (O.kind === q.OPERATION_DEFINITION)
          return t(O.name && O.name.value);
        if (O.kind === q.FRAGMENT_DEFINITION)
          return n(O.name.value);
      }
    return globalThis.__DEV__ !== !1 && S.error(80), null;
  }, i = 0, a = r.definitions.length - 1; a >= 0; --a)
    r.definitions[a].kind === q.OPERATION_DEFINITION && ++i;
  var s = a_(e), c = function(p) {
    return me(p) && p.map(s).some(function(R) {
      return R && R.remove;
    });
  }, u = /* @__PURE__ */ new Map(), l = !1, f = {
    enter: function(p) {
      if (c(p.directives))
        return l = !0, null;
    }
  }, _ = Ne(r, {
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(p, R, O, b, y) {
        var g = o(y);
        g && g.variables.add(p.name.value);
      }
    },
    FragmentSpread: {
      enter: function(p, R, O, b, y) {
        if (c(p.directives))
          return l = !0, null;
        var g = o(y);
        g && g.fragmentSpreads.add(p.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(p, R, O, b) {
        u.set(JSON.stringify(b), p);
      },
      leave: function(p, R, O, b) {
        var y = u.get(JSON.stringify(b));
        if (p === y)
          return p;
        if (i > 0 && p.selectionSet.selections.every(function(g) {
          return g.kind === q.FIELD && g.name.value === "__typename";
        }))
          return n(p.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(p) {
        if (s(p))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return r;
  var d = function(p) {
    return p.transitiveVars || (p.transitiveVars = new Set(p.variables), p.removed || p.fragmentSpreads.forEach(function(R) {
      d(n(R)).transitiveVars.forEach(function(O) {
        p.transitiveVars.add(O);
      });
    })), p;
  }, h = /* @__PURE__ */ new Set();
  _.definitions.forEach(function(p) {
    p.kind === q.OPERATION_DEFINITION ? d(t(p.name && p.name.value)).fragmentSpreads.forEach(function(R) {
      h.add(R);
    }) : p.kind === q.FRAGMENT_DEFINITION && i === 0 && !n(p.name.value).removed && h.add(p.name.value);
  }), h.forEach(function(p) {
    d(n(p)).fragmentSpreads.forEach(function(R) {
      h.add(R);
    });
  });
  var m = function(p) {
    return !!(!h.has(p) || n(p).removed);
  }, T = {
    enter: function(p) {
      if (m(p.name.value))
        return null;
    }
  };
  return i_(Ne(_, {
    FragmentSpread: T,
    FragmentDefinition: T,
    OperationDefinition: {
      leave: function(p) {
        if (p.variableDefinitions) {
          var R = d(t(p.name && p.name.value)).transitiveVars;
          if (R.size < p.variableDefinitions.length)
            return E(E({}, p), { variableDefinitions: p.variableDefinitions.filter(function(O) {
              return R.has(O.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Oi = Object.assign(function(e) {
  return Ne(e, {
    SelectionSet: {
      enter: function(r, t, n) {
        if (!(n && n.kind === q.OPERATION_DEFINITION)) {
          var o = r.selections;
          if (o) {
            var i = o.some(function(s) {
              return xe(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(xe(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return E(E({}, r), { selections: ee(ee([], o, !0), [Ta], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === Ta;
  }
});
function s_(e) {
  var r = at(e), t = r.operation;
  if (t === "query")
    return e;
  var n = Ne(e, {
    OperationDefinition: {
      enter: function(o) {
        return E(E({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function ku(e) {
  ot(e);
  var r = Cu([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return r;
}
var u_ = Object.prototype.hasOwnProperty;
function Ra() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return Ri(e);
}
function Ri(e) {
  var r = e[0] || {}, t = e.length;
  if (t > 1)
    for (var n = new Fe(), o = 1; o < t; ++o)
      r = n.merge(r, e[o]);
  return r;
}
var c_ = function(e, r, t) {
  return this.merge(e[t], r[t]);
}, Fe = function() {
  function e(r) {
    r === void 0 && (r = c_), this.reconciler = r, this.isObject = L, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(r, t) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return L(t) && L(r) ? (Object.keys(t).forEach(function(a) {
      if (u_.call(r, a)) {
        var s = r[a];
        if (t[a] !== s) {
          var c = n.reconciler.apply(n, ee([
            r,
            t,
            a
          ], o, !1));
          c !== s && (r = n.shallowCopyForMerge(r), r[a] = c);
        }
      } else
        r = n.shallowCopyForMerge(r), r[a] = t[a];
    }), r) : t;
  }, e.prototype.shallowCopyForMerge = function(r) {
    return L(r) && (this.pastCopies.has(r) || (Array.isArray(r) ? r = r.slice(0) : r = E({ __proto__: Object.getPrototypeOf(r) }, r), this.pastCopies.add(r))), r;
  }, e;
}();
function l_(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = f_(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f_(e, r) {
  if (e) {
    if (typeof e == "string")
      return va(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return va(e, r);
  }
}
function va(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function ba(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function vi(e, r, t) {
  return r && ba(e.prototype, r), t && ba(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var bi = function() {
  return typeof Symbol == "function";
}, gi = function(e) {
  return bi() && !!Symbol[e];
}, Ii = function(e) {
  return gi(e) ? Symbol[e] : "@@" + e;
};
bi() && !gi("observable") && (Symbol.observable = Symbol("observable"));
var __ = Ii("iterator"), Ro = Ii("observable"), Lu = Ii("species");
function Ft(e, r) {
  var t = e[r];
  if (t != null) {
    if (typeof t != "function")
      throw new TypeError(t + " is not a function");
    return t;
  }
}
function Br(e) {
  var r = e.constructor;
  return r !== void 0 && (r = r[Lu], r === null && (r = void 0)), r !== void 0 ? r : C;
}
function d_(e) {
  return e instanceof C;
}
function Tr(e) {
  Tr.log ? Tr.log(e) : setTimeout(function() {
    throw e;
  });
}
function At(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (r) {
      Tr(r);
    }
  });
}
function Bu(e) {
  var r = e._cleanup;
  if (r !== void 0 && (e._cleanup = void 0, !!r))
    try {
      if (typeof r == "function")
        r();
      else {
        var t = Ft(r, "unsubscribe");
        t && t.call(r);
      }
    } catch (n) {
      Tr(n);
    }
}
function vo(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function h_(e) {
  var r = e._queue;
  if (r) {
    e._queue = void 0, e._state = "ready";
    for (var t = 0; t < r.length && (Mu(e, r[t].type, r[t].value), e._state !== "closed"); ++t)
      ;
  }
}
function Mu(e, r, t) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = Ft(n, r);
    switch (r) {
      case "next":
        o && o.call(n, t);
        break;
      case "error":
        if (vo(e), o)
          o.call(n, t);
        else
          throw t;
        break;
      case "complete":
        vo(e), o && o.call(n);
        break;
    }
  } catch (i) {
    Tr(i);
  }
  e._state === "closed" ? Bu(e) : e._state === "running" && (e._state = "ready");
}
function vn(e, r, t) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: r,
        value: t
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: r,
        value: t
      }], At(function() {
        return h_(e);
      });
      return;
    }
    Mu(e, r, t);
  }
}
var p_ = /* @__PURE__ */ function() {
  function e(t, n) {
    this._cleanup = void 0, this._observer = t, this._queue = void 0, this._state = "initializing";
    var o = new m_(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var r = e.prototype;
  return r.unsubscribe = function() {
    this._state !== "closed" && (vo(this), Bu(this));
  }, vi(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), m_ = /* @__PURE__ */ function() {
  function e(t) {
    this._subscription = t;
  }
  var r = e.prototype;
  return r.next = function(n) {
    vn(this._subscription, "next", n);
  }, r.error = function(n) {
    vn(this._subscription, "error", n);
  }, r.complete = function() {
    vn(this._subscription, "complete");
  }, vi(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), C = /* @__PURE__ */ function() {
  function e(t) {
    if (!(this instanceof e))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof t != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = t;
  }
  var r = e.prototype;
  return r.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new p_(n, this._subscriber);
  }, r.forEach = function(n) {
    var o = this;
    return new Promise(function(i, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        c.unsubscribe(), i();
      }
      var c = o.subscribe({
        next: function(u) {
          try {
            n(u, s);
          } catch (l) {
            a(l), c.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
    });
  }, r.map = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Br(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            s = n(s);
          } catch (c) {
            return a.error(c);
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
  }, r.filter = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Br(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            if (!n(s))
              return;
          } catch (c) {
            return a.error(c);
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
  }, r.reduce = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Br(this), a = arguments.length > 1, s = !1, c = arguments[1], u = c;
    return new i(function(l) {
      return o.subscribe({
        next: function(f) {
          var _ = !s;
          if (s = !0, !_ || a)
            try {
              u = n(u, f);
            } catch (d) {
              return l.error(d);
            }
          else
            u = f;
        },
        error: function(f) {
          l.error(f);
        },
        complete: function() {
          if (!s && !a)
            return l.error(new TypeError("Cannot reduce an empty sequence"));
          l.next(u), l.complete();
        }
      });
    });
  }, r.concat = function() {
    for (var n = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    var s = Br(this);
    return new s(function(c) {
      var u, l = 0;
      function f(_) {
        u = _.subscribe({
          next: function(d) {
            c.next(d);
          },
          error: function(d) {
            c.error(d);
          },
          complete: function() {
            l === i.length ? (u = void 0, c.complete()) : f(s.from(i[l++]));
          }
        });
      }
      return f(n), function() {
        u && (u.unsubscribe(), u = void 0);
      };
    });
  }, r.flatMap = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Br(this);
    return new i(function(a) {
      var s = [], c = o.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (_) {
              return a.error(_);
            }
          var f = i.from(l).subscribe({
            next: function(_) {
              a.next(_);
            },
            error: function(_) {
              a.error(_);
            },
            complete: function() {
              var _ = s.indexOf(f);
              _ >= 0 && s.splice(_, 1), u();
            }
          });
          s.push(f);
        },
        error: function(l) {
          a.error(l);
        },
        complete: function() {
          u();
        }
      });
      function u() {
        c.closed && s.length === 0 && a.complete();
      }
      return function() {
        s.forEach(function(l) {
          return l.unsubscribe();
        }), c.unsubscribe();
      };
    });
  }, r[Ro] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = Ft(n, Ro);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return d_(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (gi("iterator") && (i = Ft(n, __), i))
      return new o(function(s) {
        At(function() {
          if (!s.closed) {
            for (var c = l_(i.call(n)), u; !(u = c()).done; ) {
              var l = u.value;
              if (s.next(l), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new o(function(s) {
        At(function() {
          if (!s.closed) {
            for (var c = 0; c < n.length; ++c)
              if (s.next(n[c]), s.closed)
                return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, e.of = function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = typeof this == "function" ? this : e;
    return new a(function(s) {
      At(function() {
        if (!s.closed) {
          for (var c = 0; c < o.length; ++c)
            if (s.next(o[c]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, vi(e, null, [{
    key: Lu,
    get: function() {
      return this;
    }
  }]), e;
}();
bi() && Object.defineProperty(C, Symbol("extensions"), {
  value: {
    symbol: Ro,
    hostReportError: Tr
  },
  configurable: !0
});
function E_(e) {
  var r, t = e.Symbol;
  if (typeof t == "function")
    if (t.observable)
      r = t.observable;
    else {
      typeof t.for == "function" ? r = t.for("https://github.com/benlesh/symbol-observable") : r = t("https://github.com/benlesh/symbol-observable");
      try {
        t.observable = r;
      } catch {
      }
    }
  else
    r = "@@observable";
  return r;
}
var ur;
typeof self < "u" ? ur = self : typeof window < "u" ? ur = window : typeof global < "u" ? ur = global : typeof module < "u" ? ur = module : ur = Function("return this")();
E_(ur);
var ga = C.prototype, Ia = "@@observable";
ga[Ia] || (ga[Ia] = function() {
  return this;
});
var T_ = Object.prototype.toString;
function xu(e) {
  return bo(e);
}
function bo(e, r) {
  switch (T_.call(e)) {
    case "[object Array]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(e))
        return r.get(e);
      var t = e.slice(0);
      return r.set(e, t), t.forEach(function(o, i) {
        t[i] = bo(o, r);
      }), t;
    }
    case "[object Object]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(e))
        return r.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return r.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = bo(e[o], r);
      }), n;
    }
    default:
      return e;
  }
}
function O_(e) {
  var r = /* @__PURE__ */ new Set([e]);
  return r.forEach(function(t) {
    L(t) && R_(t) === t && Object.getOwnPropertyNames(t).forEach(function(n) {
      L(t[n]) && r.add(t[n]);
    });
  }), e;
}
function R_(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (r) {
      if (r instanceof TypeError)
        return null;
      throw r;
    }
  return e;
}
function go(e) {
  return globalThis.__DEV__ !== !1 && O_(e), e;
}
function Kr(e, r, t) {
  var n = [];
  e.forEach(function(o) {
    return o[r] && n.push(o);
  }), n.forEach(function(o) {
    return o[r](t);
  });
}
function bn(e, r, t) {
  return new C(function(n) {
    var o = {
      then: function(c) {
        return new Promise(function(u) {
          return u(c());
        });
      }
    };
    function i(c, u) {
      return function(l) {
        if (c) {
          var f = function() {
            return n.closed ? 0 : c(l);
          };
          o = o.then(f, f).then(function(_) {
            return n.next(_);
          }, function(_) {
            return n.error(_);
          });
        } else
          n[u](l);
      };
    }
    var a = {
      next: i(r, "next"),
      error: i(t, "error"),
      complete: function() {
        o.then(function() {
          return n.complete();
        });
      }
    }, s = e.subscribe(a);
    return function() {
      return s.unsubscribe();
    };
  });
}
function Fu(e) {
  function r(t) {
    Object.defineProperty(e, t, { value: C });
  }
  return Uu && Symbol.species && r(Symbol.species), r("@@species"), e;
}
function ya(e) {
  return e && typeof e.then == "function";
}
var cr = function(e) {
  Ee(r, e);
  function r(t) {
    var n = e.call(this, function(o) {
      return n.addObserver(o), function() {
        return n.removeObserver(o);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(o, i) {
      n.resolve = o, n.reject = i;
    }), n.handlers = {
      next: function(o) {
        n.sub !== null && (n.latest = ["next", o], n.notify("next", o), Kr(n.observers, "next", o));
      },
      error: function(o) {
        var i = n.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), n.sub = null, n.latest = ["error", o], n.reject(o), n.notify("error", o), Kr(n.observers, "error", o));
      },
      complete: function() {
        var o = n, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var c = s.shift();
          c ? ya(c) ? c.then(function(u) {
            return n.sub = u.subscribe(n.handlers);
          }) : n.sub = c.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Kr(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof t == "function" && (t = [new C(t)]), ya(t) ? t.then(function(o) {
      return n.start(o);
    }, n.handlers.error) : n.start(t), n;
  }
  return r.prototype.start = function(t) {
    this.sub === void 0 && (this.sources = Array.from(t), this.handlers.complete());
  }, r.prototype.deliverLastMessage = function(t) {
    if (this.latest) {
      var n = this.latest[0], o = t[n];
      o && o.call(t, this.latest[1]), this.sub === null && n === "next" && t.complete && t.complete();
    }
  }, r.prototype.addObserver = function(t) {
    this.observers.has(t) || (this.deliverLastMessage(t), this.observers.add(t));
  }, r.prototype.removeObserver = function(t) {
    this.observers.delete(t) && this.observers.size < 1 && this.handlers.complete();
  }, r.prototype.notify = function(t, n) {
    var o = this.nextResultListeners;
    o.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), o.forEach(function(i) {
      return i(t, n);
    }));
  }, r.prototype.beforeNext = function(t) {
    var n = !1;
    this.nextResultListeners.add(function(o, i) {
      n || (n = !0, t(o, i));
    });
  }, r;
}(C);
Fu(cr);
function pr(e) {
  return "incremental" in e;
}
function v_(e) {
  return "hasNext" in e && "data" in e;
}
function b_(e) {
  return pr(e) || v_(e);
}
function g_(e) {
  return L(e) && "payload" in e;
}
function ju(e, r) {
  var t = e, n = new Fe();
  return pr(r) && me(r.incremental) && r.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var c = a[s], u = !isNaN(+c), l = u ? [] : {};
      l[c] = i, i = l;
    }
    t = n.merge(t, i);
  }), t;
}
function St(e) {
  var r = Io(e);
  return me(r);
}
function Io(e) {
  var r = me(e.errors) ? e.errors.slice(0) : [];
  return pr(e) && me(e.incremental) && e.incremental.forEach(function(t) {
    t.errors && r.push.apply(r, t.errors);
  }), r;
}
function Or() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(o) {
      var i = n[o];
      i !== void 0 && (t[o] = i);
    });
  }), t;
}
function gn(e, r) {
  return Or(e, r, r.variables && {
    variables: Or(E(E({}, e && e.variables), r.variables))
  });
}
function In(e) {
  return new C(function(r) {
    r.error(e);
  });
}
var yo = function(e, r, t) {
  var n = new Error(t);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = r, n;
};
function I_(e) {
  for (var r = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, n = Object.keys(e); t < n.length; t++) {
    var o = n[t];
    if (r.indexOf(o) < 0)
      throw z(41, o);
  }
  return e;
}
function y_(e, r) {
  var t = E({}, e), n = function(i) {
    typeof i == "function" ? t = E(E({}, t), i(t)) : t = E(E({}, t), i);
  }, o = function() {
    return E({}, t);
  };
  return Object.defineProperty(r, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(r, "getContext", {
    enumerable: !1,
    value: o
  }), r;
}
function N_(e) {
  var r = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return r.operationName || (r.operationName = typeof r.query != "string" ? Oo(r.query) || void 0 : ""), r;
}
function A_(e, r) {
  var t = E({}, e), n = new Set(Object.keys(e));
  return Ne(r, {
    Variable: function(o, i, a) {
      a && a.kind !== "VariableDefinition" && n.delete(o.name.value);
    }
  }), n.forEach(function(o) {
    delete t[o];
  }), t;
}
function Na(e, r) {
  return r ? r(e) : C.of();
}
function Mr(e) {
  return typeof e == "function" ? new Ar(e) : e;
}
function Et(e) {
  return e.request.length <= 1;
}
var Ar = function() {
  function e(r) {
    r && (this.request = r);
  }
  return e.empty = function() {
    return new e(function() {
      return C.of();
    });
  }, e.from = function(r) {
    return r.length === 0 ? e.empty() : r.map(Mr).reduce(function(t, n) {
      return t.concat(n);
    });
  }, e.split = function(r, t, n) {
    var o = Mr(t), i = Mr(n || new e(Na));
    return Et(o) && Et(i) ? new e(function(a) {
      return r(a) ? o.request(a) || C.of() : i.request(a) || C.of();
    }) : new e(function(a, s) {
      return r(a) ? o.request(a, s) || C.of() : i.request(a, s) || C.of();
    });
  }, e.execute = function(r, t) {
    return r.request(y_(t.context, N_(I_(t)))) || C.of();
  }, e.concat = function(r, t) {
    var n = Mr(r);
    if (Et(n))
      return globalThis.__DEV__ !== !1 && S.warn(33, n), n;
    var o = Mr(t);
    return Et(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || C.of();
      }) || C.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || C.of();
      }) || C.of();
    });
  }, e.prototype.split = function(r, t, n) {
    return this.concat(e.split(r, t, n || new e(Na)));
  }, e.prototype.concat = function(r) {
    return e.concat(this, r);
  }, e.prototype.request = function(r, t) {
    throw z(34);
  }, e.prototype.onError = function(r, t) {
    if (t && t.error)
      return t.error(r), !1;
    throw r;
  }, e.prototype.setOnError = function(r) {
    return this.onError = r, this;
  }, e;
}(), No = Ar.execute;
function S_(e) {
  var r, t = e[Symbol.asyncIterator]();
  return r = {
    next: function() {
      return t.next();
    }
  }, r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
}
function D_(e) {
  var r = null, t = null, n = !1, o = [], i = [];
  function a(f) {
    if (!t) {
      if (i.length) {
        var _ = i.shift();
        if (Array.isArray(_) && _[0])
          return _[0]({ value: f, done: !1 });
      }
      o.push(f);
    }
  }
  function s(f) {
    t = f;
    var _ = i.slice();
    _.forEach(function(d) {
      d[1](f);
    }), !r || r();
  }
  function c() {
    n = !0;
    var f = i.slice();
    f.forEach(function(_) {
      _[0]({ value: void 0, done: !0 });
    }), !r || r();
  }
  r = function() {
    r = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c);
  }, e.on("data", a), e.on("error", s), e.on("end", c), e.on("finish", c), e.on("close", c);
  function u() {
    return new Promise(function(f, _) {
      if (t)
        return _(t);
      if (o.length)
        return f({ value: o.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      i.push([f, _]);
    });
  }
  var l = {
    next: function() {
      return u();
    }
  };
  return Zt && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function U_(e) {
  var r = !1, t = {
    next: function() {
      return r ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (r = !0, new Promise(function(n, o) {
        e.then(function(i) {
          n({ value: i, done: !1 });
        }).catch(o);
      }));
    }
  };
  return Zt && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Aa(e) {
  var r = {
    next: function() {
      return e.read();
    }
  };
  return Zt && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function P_(e) {
  return !!e.body;
}
function w_(e) {
  return !!e.getReader;
}
function H_(e) {
  return !!(Zt && e[Symbol.asyncIterator]);
}
function G_(e) {
  return !!e.stream;
}
function C_(e) {
  return !!e.arrayBuffer;
}
function k_(e) {
  return !!e.pipe;
}
function L_(e) {
  var r = e;
  if (P_(e) && (r = e.body), H_(r))
    return S_(r);
  if (w_(r))
    return Aa(r.getReader());
  if (G_(r))
    return Aa(r.stream().getReader());
  if (C_(r))
    return U_(r.arrayBuffer());
  if (k_(r))
    return D_(r);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var yi = Symbol();
function B_(e) {
  return e.extensions ? Array.isArray(e.extensions[yi]) : !1;
}
function M_(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var x_ = function(e) {
  var r = ee(ee(ee([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && r.push(e.networkError), r.map(function(t) {
    return L(t) && t.message || "Error message not found.";
  }).join(`
`);
}, or = function(e) {
  Ee(r, e);
  function r(t) {
    var n = t.graphQLErrors, o = t.protocolErrors, i = t.clientErrors, a = t.networkError, s = t.errorMessage, c = t.extraInfo, u = e.call(this, s) || this;
    return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = o || [], u.clientErrors = i || [], u.networkError = a || null, u.message = s || x_(u), u.extraInfo = c, u.__proto__ = r.prototype, u;
  }
  return r;
}(Error), Sa = Object.prototype.hasOwnProperty;
function F_(e, r) {
  var t;
  return ke(this, void 0, void 0, function() {
    var n, o, i, a, s, c, u, l, f, _, d, h, m, T, p, R, O, b, y, g, I, A, M;
    return Le(this, function(x) {
      switch (x.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          n = new TextDecoder("utf-8"), o = (t = e.headers) === null || t === void 0 ? void 0 : t.get("content-type"), i = "boundary=", a = o != null && o.includes(i) ? o == null ? void 0 : o.substring((o == null ? void 0 : o.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), c = "", u = L_(e), l = !0, x.label = 1;
        case 1:
          return l ? [4, u.next()] : [3, 3];
        case 2:
          for (f = x.sent(), _ = f.value, d = f.done, h = typeof _ == "string" ? _ : n.decode(_), m = c.length - s.length + 1, l = !d, c += h, T = c.indexOf(s, m); T > -1; ) {
            if (p = void 0, A = [
              c.slice(0, T),
              c.slice(T + s.length)
            ], p = A[0], c = A[1], R = p.indexOf(`\r
\r
`), O = j_(p.slice(0, R)), b = O["content-type"], b && b.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (y = p.slice(R), y) {
              if (g = Vu(e, y), Object.keys(g).length > 1 || "data" in g || "incremental" in g || "errors" in g || "payload" in g)
                g_(g) ? (I = {}, "payload" in g && (I = E({}, g.payload)), "errors" in g && (I = E(E({}, I), { extensions: E(E({}, "extensions" in I ? I.extensions : null), (M = {}, M[yi] = g.errors, M)) })), r(I)) : r(g);
              else if (Object.keys(g).length === 1 && "hasNext" in g && !g.hasNext)
                return [2];
            }
            T = c.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function j_(e) {
  var r = {};
  return e.split(`
`).forEach(function(t) {
    var n = t.indexOf(":");
    if (n > -1) {
      var o = t.slice(0, n).trim().toLowerCase(), i = t.slice(n + 1).trim();
      r[o] = i;
    }
  }), r;
}
function Vu(e, r) {
  if (e.status >= 300) {
    var t = function() {
      try {
        return JSON.parse(r);
      } catch {
        return r;
      }
    };
    yo(e, t(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(r);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = r, n;
  }
}
function V_(e, r) {
  e.result && e.result.errors && e.result.data && r.next(e.result), r.error(e);
}
function W_(e) {
  return function(r) {
    return r.text().then(function(t) {
      return Vu(r, t);
    }).then(function(t) {
      return r.status >= 300 && yo(r, t, "Response not successful: Received status code ".concat(r.status)), !Array.isArray(t) && !Sa.call(t, "data") && !Sa.call(t, "errors") && yo(r, t, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), t;
    });
  };
}
var Ao = function(e, r) {
  var t;
  try {
    t = JSON.stringify(e);
  } catch (o) {
    var n = z(37, r, o.message);
    throw n.parseError = o, n;
  }
  return t;
}, X_ = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, K_ = {
  accept: "*/*",
  "content-type": "application/json"
}, $_ = {
  method: "POST"
}, q_ = {
  http: X_,
  headers: K_,
  options: $_
}, Y_ = function(e, r) {
  return r(e);
};
function J_(e, r) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  var o = {}, i = {};
  t.forEach(function(f) {
    o = E(E(E({}, o), f.options), { headers: E(E({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = E(E({}, i), f.http);
  }), o.headers && (o.headers = Q_(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, c = e.variables, u = e.query, l = { operationName: a, variables: c };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = r(u, Hu)), {
    options: o,
    body: l
  };
}
function Q_(e, r) {
  if (!r) {
    var t = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(i) {
      t[i.toLowerCase()] = e[i];
    }), t;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(i) {
    n[i.toLowerCase()] = {
      originalName: i,
      value: e[i]
    };
  });
  var o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(i) {
    o[n[i].originalName] = n[i].value;
  }), o;
}
var z_ = function(e) {
  if (!e && typeof fetch > "u")
    throw z(35);
}, Z_ = function(e, r) {
  var t = e.getContext(), n = t.uri;
  return n || (typeof r == "function" ? r(e) : r || "/graphql");
};
function ed(e, r) {
  var t = [], n = function(f, _) {
    t.push("".concat(f, "=").concat(encodeURIComponent(_)));
  };
  if ("query" in r && n("query", r.query), r.operationName && n("operationName", r.operationName), r.variables) {
    var o = void 0;
    try {
      o = Ao(r.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (r.extensions) {
    var i = void 0;
    try {
      i = Ao(r.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", i);
  }
  var a = "", s = e, c = e.indexOf("#");
  c !== -1 && (a = e.substr(c), s = e.substr(0, c));
  var u = s.indexOf("?") === -1 ? "?" : "&", l = s + u + t.join("&") + a;
  return { newURI: l };
}
var Da = ie(function() {
  return fetch;
}), Wu = function(e) {
  e === void 0 && (e = {});
  var r = e.uri, t = r === void 0 ? "/graphql" : r, n = e.fetch, o = e.print, i = o === void 0 ? Y_ : o, a = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, u = e.includeUnusedVariables, l = u === void 0 ? !1 : u, f = ye(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && z_(n || Da);
  var _ = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new Ar(function(d) {
    var h = Z_(d, t), m = d.getContext(), T = {};
    if (m.clientAwareness) {
      var p = m.clientAwareness, R = p.name, O = p.version;
      R && (T["apollographql-client-name"] = R), O && (T["apollographql-client-version"] = O);
    }
    var b = E(E({}, T), m.headers), y = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: b
    };
    if (Jr(["client"], d.query)) {
      var g = ku(d.query);
      if (!g)
        return In(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      d.query = g;
    }
    var I = J_(d, i, q_, _, y), A = I.options, M = I.body;
    M.variables && !l && (M.variables = A_(M.variables, d.query));
    var x;
    !A.signal && typeof AbortController < "u" && (x = new AbortController(), A.signal = x.signal);
    var W = function(X) {
      return X.kind === "OperationDefinition" && X.operation === "mutation";
    }, ne = function(X) {
      return X.kind === "OperationDefinition" && X.operation === "subscription";
    }, wr = ne(at(d.query)), Hr = Jr(["defer"], d.query);
    if (c && !d.query.definitions.some(W) && (A.method = "GET"), Hr || wr) {
      A.headers = A.headers || {};
      var Gr = "multipart/mixed;";
      wr && Hr && globalThis.__DEV__ !== !1 && S.warn(36), wr ? Gr += "boundary=graphql;subscriptionSpec=1.0,application/json" : Hr && (Gr += "deferSpec=20220824,application/json"), A.headers.accept = Gr;
    }
    if (A.method === "GET") {
      var tr = ed(h, M), ce = tr.newURI, Ke = tr.parseError;
      if (Ke)
        return In(Ke);
      h = ce;
    } else
      try {
        A.body = Ao(M, "Payload");
      } catch (X) {
        return In(X);
      }
    return new C(function(X) {
      var le = n || ie(function() {
        return fetch;
      }) || Da, Cr = X.next.bind(X);
      return le(h, A).then(function(fe) {
        var Ue;
        d.setContext({ response: fe });
        var Pe = (Ue = fe.headers) === null || Ue === void 0 ? void 0 : Ue.get("content-type");
        return Pe !== null && /^multipart\/mixed/i.test(Pe) ? F_(fe, Cr) : W_(d)(fe).then(Cr);
      }).then(function() {
        x = void 0, X.complete();
      }).catch(function(fe) {
        x = void 0, V_(fe, X);
      }), function() {
        x && x.abort();
      };
    });
  });
}, rd = function(e) {
  Ee(r, e);
  function r(t) {
    t === void 0 && (t = {});
    var n = e.call(this, Wu(t).request) || this;
    return n.options = t, n;
  }
  return r;
}(Ar);
const { toString: Ua, hasOwnProperty: td } = Object.prototype, Pa = Function.prototype.toString, So = /* @__PURE__ */ new Map();
function B(e, r) {
  try {
    return Do(e, r);
  } finally {
    So.clear();
  }
}
function Do(e, r) {
  if (e === r)
    return !0;
  const t = Ua.call(e), n = Ua.call(r);
  if (t !== n)
    return !1;
  switch (t) {
    case "[object Array]":
      if (e.length !== r.length)
        return !1;
    case "[object Object]": {
      if (Ha(e, r))
        return !0;
      const o = wa(e), i = wa(r), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!td.call(r, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const c = o[s];
        if (!Do(e[c], r[c]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === r.name && e.message === r.message;
    case "[object Number]":
      if (e !== e)
        return r !== r;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +r;
    case "[object RegExp]":
    case "[object String]":
      return e == `${r}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== r.size)
        return !1;
      if (Ha(e, r))
        return !0;
      const o = e.entries(), i = t === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, c] = a.value;
        if (!r.has(s) || i && !Do(c, r.get(s)))
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
      e = new Uint8Array(e), r = new Uint8Array(r);
    case "[object DataView]": {
      let o = e.byteLength;
      if (o === r.byteLength)
        for (; o-- && e[o] === r[o]; )
          ;
      return o === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const o = Pa.call(e);
      return o !== Pa.call(r) ? !1 : !id(o, od);
    }
  }
  return !1;
}
function wa(e) {
  return Object.keys(e).filter(nd, e);
}
function nd(e) {
  return this[e] !== void 0;
}
const od = "{ [native code] }";
function id(e, r) {
  const t = e.length - r.length;
  return t >= 0 && e.indexOf(r, t) === t;
}
function Ha(e, r) {
  let t = So.get(e);
  if (t) {
    if (t.has(r))
      return !0;
  } else
    So.set(e, t = /* @__PURE__ */ new Set());
  return t.add(r), !1;
}
function ad() {
}
class sd {
  constructor(r = 1 / 0, t = ad) {
    this.max = r, this.dispose = t, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(r) {
    return this.map.has(r);
  }
  get(r) {
    const t = this.getNode(r);
    return t && t.value;
  }
  getNode(r) {
    const t = this.map.get(r);
    if (t && t !== this.newest) {
      const { older: n, newer: o } = t;
      o && (o.older = n), n && (n.newer = o), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = o);
    }
    return t;
  }
  set(r, t) {
    let n = this.getNode(r);
    return n ? n.value = t : (n = {
      key: r,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(r, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(r) {
    const t = this.map.get(r);
    return t ? (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(r), this.dispose(t.value, r), !0) : !1;
  }
}
let Y = null;
const Ga = {};
let ud = 1;
const cd = () => class {
  constructor() {
    this.id = [
      "slot",
      ud++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let r = Y; r; r = r.parent)
      if (this.id in r.slots) {
        const t = r.slots[this.id];
        if (t === Ga)
          break;
        return r !== Y && (Y.slots[this.id] = t), !0;
      }
    return Y && (Y.slots[this.id] = Ga), !1;
  }
  getValue() {
    if (this.hasValue())
      return Y.slots[this.id];
  }
  withValue(r, t, n, o) {
    const i = {
      __proto__: null,
      [this.id]: r
    }, a = Y;
    Y = { parent: a, slots: i };
    try {
      return t.apply(o, n);
    } finally {
      Y = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(r) {
    const t = Y;
    return function() {
      const n = Y;
      try {
        return Y = t, r.apply(this, arguments);
      } finally {
        Y = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(r, t, n) {
    if (Y) {
      const o = Y;
      try {
        return Y = null, r.apply(n, t);
      } finally {
        Y = o;
      }
    } else
      return r.apply(n, t);
  }
};
function Ca(e) {
  try {
    return e();
  } catch {
  }
}
const yn = "@wry/context:Slot", ld = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Ca(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Ca(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), ka = ld, Xu = ka[yn] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[yn] || function(e) {
  try {
    Object.defineProperty(ka, yn, {
      value: e,
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
    return e;
  }
}(cd()), on = new Xu(), { hasOwnProperty: fd } = Object.prototype, Ni = Array.from || function(e) {
  const r = [];
  return e.forEach((t) => r.push(t)), r;
};
function jt(e) {
  const { unsubscribe: r } = e;
  typeof r == "function" && (e.unsubscribe = void 0, r());
}
const Qr = [], _d = 100;
function Rr(e, r) {
  if (!e)
    throw new Error(r || "assertion failure");
}
function dd(e, r) {
  const t = e.length;
  return (
    // Unknown values are not equal to each other.
    t > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    t === r.length && // The underlying value or exception must be the same.
    e[t - 1] === r[t - 1]
  );
}
function Ku(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function hd(e) {
  return e.slice(0);
}
class an {
  constructor(r) {
    this.fn = r, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++an.count;
  }
  peek() {
    if (this.value.length === 1 && !je(this))
      return La(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(r) {
    return Rr(!this.recomputing, "already recomputing"), La(this), je(this) ? pd(this, r) : Ku(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, this.value.length = 0, $u(this), jt(this));
  }
  dispose() {
    this.setDirty(), zu(this), Ai(this, (r, t) => {
      r.setDirty(), Zu(r, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(r) {
    r.add(this), this.deps || (this.deps = Qr.pop() || /* @__PURE__ */ new Set()), this.deps.add(r);
  }
  forgetDeps() {
    this.deps && (Ni(this.deps).forEach((r) => r.delete(this)), this.deps.clear(), Qr.push(this.deps), this.deps = null);
  }
}
an.count = 0;
function La(e) {
  const r = on.getValue();
  if (r)
    return e.parents.add(r), r.childValues.has(e) || r.childValues.set(e, []), je(e) ? Yu(r, e) : Ju(r, e), r;
}
function pd(e, r) {
  return zu(e), on.withValue(e, md, [e, r]), Td(e, r) && Ed(e), Ku(e.value);
}
function md(e, r) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, r);
  } catch (t) {
    e.value[1] = t;
  }
  e.recomputing = !1;
}
function je(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Ed(e) {
  e.dirty = !1, !je(e) && qu(e);
}
function $u(e) {
  Ai(e, Yu);
}
function qu(e) {
  Ai(e, Ju);
}
function Ai(e, r) {
  const t = e.parents.size;
  if (t) {
    const n = Ni(e.parents);
    for (let o = 0; o < t; ++o)
      r(n[o], e);
  }
}
function Yu(e, r) {
  Rr(e.childValues.has(r)), Rr(je(r));
  const t = !je(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = Qr.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(r))
    return;
  e.dirtyChildren.add(r), t && $u(e);
}
function Ju(e, r) {
  Rr(e.childValues.has(r)), Rr(!je(r));
  const t = e.childValues.get(r);
  t.length === 0 ? e.childValues.set(r, hd(r.value)) : dd(t, r.value) || e.setDirty(), Qu(e, r), !je(e) && qu(e);
}
function Qu(e, r) {
  const t = e.dirtyChildren;
  t && (t.delete(r), t.size === 0 && (Qr.length < _d && Qr.push(t), e.dirtyChildren = null));
}
function zu(e) {
  e.childValues.size > 0 && e.childValues.forEach((r, t) => {
    Zu(e, t);
  }), e.forgetDeps(), Rr(e.dirtyChildren === null);
}
function Zu(e, r) {
  r.parents.delete(e), e.childValues.delete(r), Qu(e, r);
}
function Td(e, r) {
  if (typeof e.subscribe == "function")
    try {
      jt(e), e.unsubscribe = e.subscribe.apply(null, r);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const Od = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function ec(e) {
  const r = /* @__PURE__ */ new Map(), t = e && e.subscribe;
  function n(o) {
    const i = on.getValue();
    if (i) {
      let a = r.get(o);
      a || r.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof t == "function" && (jt(a), a.unsubscribe = t(o));
    }
  }
  return n.dirty = function(i, a) {
    const s = r.get(i);
    if (s) {
      const c = a && fd.call(Od, a) ? a : "setDirty";
      Ni(s).forEach((u) => u[c]()), r.delete(i), jt(s);
    }
  }, n;
}
let Ba;
function Rd(...e) {
  return (Ba || (Ba = new We(typeof WeakMap == "function"))).lookupArray(e);
}
const Nn = /* @__PURE__ */ new Set();
function Vt(e, { max: r = Math.pow(2, 16), makeCacheKey: t = Rd, keyArgs: n, subscribe: o } = /* @__PURE__ */ Object.create(null)) {
  const i = new sd(r, (l) => l.dispose()), a = function() {
    const l = t.apply(null, n ? n.apply(null, arguments) : arguments);
    if (l === void 0)
      return e.apply(null, arguments);
    let f = i.get(l);
    f || (i.set(l, f = new an(e)), f.subscribe = o, f.forget = () => i.delete(l));
    const _ = f.recompute(Array.prototype.slice.call(arguments));
    return i.set(l, f), Nn.add(i), on.hasValue() || (Nn.forEach((d) => d.clean()), Nn.clear()), _;
  };
  Object.defineProperty(a, "size", {
    get() {
      return i.map.size;
    },
    configurable: !1,
    enumerable: !1
  }), Object.freeze(a.options = {
    max: r,
    makeCacheKey: t,
    keyArgs: n,
    subscribe: o
  });
  function s(l) {
    const f = i.get(l);
    f && f.setDirty();
  }
  a.dirtyKey = s, a.dirty = function() {
    s(t.apply(null, arguments));
  };
  function c(l) {
    const f = i.get(l);
    if (f)
      return f.peek();
  }
  a.peekKey = c, a.peek = function() {
    return c(t.apply(null, arguments));
  };
  function u(l) {
    return i.delete(l);
  }
  return a.forgetKey = u, a.forget = function() {
    return u(t.apply(null, arguments));
  }, a.makeCacheKey = t, a.getKey = n ? function() {
    return t.apply(null, n.apply(null, arguments));
  } : t, Object.freeze(a);
}
var vd = function() {
  function e() {
    this.assumeImmutableResults = !1, this.getFragmentDoc = Vt(jf);
  }
  return e.prototype.batch = function(r) {
    var t = this, n = typeof r.optimistic == "string" ? r.optimistic : r.optimistic === !1 ? null : void 0, o;
    return this.performTransaction(function() {
      return o = r.update(t);
    }, n), o;
  }, e.prototype.recordOptimisticTransaction = function(r, t) {
    this.performTransaction(r, t);
  }, e.prototype.transformDocument = function(r) {
    return r;
  }, e.prototype.transformForLink = function(r) {
    return r;
  }, e.prototype.identify = function(r) {
  }, e.prototype.gc = function() {
    return [];
  }, e.prototype.modify = function(r) {
    return !1;
  }, e.prototype.readQuery = function(r, t) {
    return t === void 0 && (t = !!r.optimistic), this.read(E(E({}, r), { rootId: r.id || "ROOT_QUERY", optimistic: t }));
  }, e.prototype.readFragment = function(r, t) {
    return t === void 0 && (t = !!r.optimistic), this.read(E(E({}, r), { query: this.getFragmentDoc(r.fragment, r.fragmentName), rootId: r.id, optimistic: t }));
  }, e.prototype.writeQuery = function(r) {
    var t = r.id, n = r.data, o = ye(r, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: t || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(r) {
    var t = r.id, n = r.data, o = r.fragment, i = r.fragmentName, a = ye(r, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: t,
      result: n
    }));
  }, e.prototype.updateQuery = function(r, t) {
    return this.batch({
      update: function(n) {
        var o = n.readQuery(r), i = t(o);
        return i == null ? o : (n.writeQuery(E(E({}, r), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(r, t) {
    return this.batch({
      update: function(n) {
        var o = n.readFragment(r), i = t(o);
        return i == null ? o : (n.writeFragment(E(E({}, r), { data: i })), i);
      }
    });
  }, e;
}(), rc = function(e) {
  Ee(r, e);
  function r(t, n, o, i) {
    var a, s = e.call(this, t) || this;
    if (s.message = t, s.path = n, s.query = o, s.variables = i, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var c = s.path.length - 1; c >= 0; --c)
        s.missing = (a = {}, a[s.path[c]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = r.prototype, s;
  }
  return r;
}(Error), K = Object.prototype.hasOwnProperty;
function xr(e) {
  return e == null;
}
function tc(e, r) {
  var t = e.__typename, n = e.id, o = e._id;
  if (typeof t == "string" && (r && (r.keyObject = xr(n) ? xr(o) ? void 0 : { _id: o } : { id: n }), xr(n) && !xr(o) && (n = o), !xr(n)))
    return "".concat(t, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var nc = {
  dataIdFromObject: tc,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function bd(e) {
  return Or(nc, e);
}
function oc(e) {
  var r = e.canonizeResults;
  return r === void 0 ? nc.canonizeResults : r;
}
function gd(e, r) {
  return G(r) ? e.get(r.__ref, "__typename") : r && r.__typename;
}
var ic = /^[_a-z][_0-9a-z]*/i;
function Ve(e) {
  var r = e.match(ic);
  return r ? r[0] : e;
}
function Uo(e, r, t) {
  return L(r) ? F(r) ? r.every(function(n) {
    return Uo(e, n, t);
  }) : e.selections.every(function(n) {
    if (xe(n) && nt(n, t)) {
      var o = Me(n);
      return K.call(r, o) && (!n.selectionSet || Uo(n.selectionSet, r[o], t));
    }
    return !0;
  }) : !1;
}
function lr(e) {
  return L(e) && !G(e) && !F(e);
}
function Id() {
  return new Fe();
}
function ac(e, r) {
  var t = en(nn(e));
  return {
    fragmentMap: t,
    lookupFragment: function(n) {
      var o = t[n];
      return !o && r && (o = r.lookup(n)), o || null;
    }
  };
}
var Dt = /* @__PURE__ */ Object.create(null), An = function() {
  return Dt;
}, Ma = /* @__PURE__ */ Object.create(null), zr = function() {
  function e(r, t) {
    var n = this;
    this.policies = r, this.group = t, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return go(G(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return G(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return hr(o);
      if (G(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = hr(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return E({}, this.data);
  }, e.prototype.has = function(r) {
    return this.lookup(r, !0) !== void 0;
  }, e.prototype.get = function(r, t) {
    if (this.group.depend(r, t), K.call(this.data, r)) {
      var n = this.data[r];
      if (n && K.call(n, t))
        return n[t];
    }
    if (t === "__typename" && K.call(this.policies.rootTypenamesById, r))
      return this.policies.rootTypenamesById[r];
    if (this instanceof Ge)
      return this.parent.get(r, t);
  }, e.prototype.lookup = function(r, t) {
    if (t && this.group.depend(r, "__exists"), K.call(this.data, r))
      return this.data[r];
    if (this instanceof Ge)
      return this.parent.lookup(r, t);
    if (this.policies.rootTypenamesById[r])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(r, t) {
    var n = this, o;
    G(r) && (r = r.__ref), G(t) && (t = t.__ref);
    var i = typeof r == "string" ? this.lookup(o = r) : r, a = typeof t == "string" ? this.lookup(o = t) : t;
    if (a) {
      S(typeof o == "string", 1);
      var s = new Fe(Nd).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var c = /* @__PURE__ */ Object.create(null);
        i || (c.__exists = 1), Object.keys(a).forEach(function(u) {
          if (!i || i[u] !== s[u]) {
            c[u] = 1;
            var l = Ve(u);
            l !== u && !n.policies.hasKeyArgs(s.__typename, l) && (c[l] = 1), s[u] === void 0 && !(n instanceof Ge) && delete s[u];
          }
        }), c.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[o] === s.__typename && delete c.__typename, Object.keys(c).forEach(function(u) {
          return n.group.dirty(o, u);
        });
      }
    }
  }, e.prototype.modify = function(r, t) {
    var n = this, o = this.lookup(r);
    if (o) {
      var i = /* @__PURE__ */ Object.create(null), a = !1, s = !0, c = {
        DELETE: Dt,
        INVALIDATE: Ma,
        isReference: G,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(u, l) {
          return n.policies.readField(typeof u == "string" ? {
            fieldName: u,
            from: l || hr(r)
          } : u, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(u) {
        var l = Ve(u), f = o[u];
        if (f !== void 0) {
          var _ = typeof t == "function" ? t : t[u] || t[l];
          if (_) {
            var d = _ === An ? Dt : _(go(f), E(E({}, c), { fieldName: l, storeFieldName: u, storage: n.getStorage(r, u) }));
            d === Ma ? n.group.dirty(r, u) : (d === Dt && (d = void 0), d !== f && (i[u] = d, a = !0, f = d));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(r, i), s && (this instanceof Ge ? this.data[r] = void 0 : delete this.data[r], this.group.dirty(r, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(r, t, n) {
    var o, i = this.lookup(r);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = t && n ? this.policies.getStoreFieldName({ typename: a, fieldName: t, args: n }) : t;
      return this.modify(r, s ? (o = {}, o[s] = An, o) : An);
    }
    return !1;
  }, e.prototype.evict = function(r, t) {
    var n = !1;
    return r.id && (K.call(this.data, r.id) && (n = this.delete(r.id, r.fieldName, r.args)), this instanceof Ge && this !== t && (n = this.parent.evict(r, t) || n), (r.fieldName || n) && this.group.dirty(r.id, r.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var r = this, t = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      K.call(r.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (t.__META = { extraRootIds: n.sort() }), t;
  }, e.prototype.replace = function(r) {
    var t = this;
    if (Object.keys(this.data).forEach(function(i) {
      r && K.call(r, i) || t.delete(i);
    }), r) {
      var n = r.__META, o = ye(r, ["__META"]);
      Object.keys(o).forEach(function(i) {
        t.merge(i, o[i]);
      }), n && n.extraRootIds.forEach(this.retain, this);
    }
  }, e.prototype.retain = function(r) {
    return this.rootIds[r] = (this.rootIds[r] || 0) + 1;
  }, e.prototype.release = function(r) {
    if (this.rootIds[r] > 0) {
      var t = --this.rootIds[r];
      return t || delete this.rootIds[r], t;
    }
    return 0;
  }, e.prototype.getRootIdSet = function(r) {
    return r === void 0 && (r = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(r.add, r), this instanceof Ge ? this.parent.getRootIdSet(r) : Object.keys(this.policies.rootTypenamesById).forEach(r.add, r), r;
  }, e.prototype.gc = function() {
    var r = this, t = this.getRootIdSet(), n = this.toObject();
    t.forEach(function(a) {
      K.call(n, a) && (Object.keys(r.findChildRefIds(a)).forEach(t.add, t), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof Ge; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(r) {
    if (!K.call(this.refs, r)) {
      var t = this.refs[r] = /* @__PURE__ */ Object.create(null), n = this.data[r];
      if (!n)
        return t;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        G(i) && (t[i.__ref] = !0), L(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          L(s) && o.add(s);
        });
      });
    }
    return this.refs[r];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), sc = function() {
  function e(r, t) {
    t === void 0 && (t = null), this.caching = r, this.parent = t, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? ec() : null, this.keyMaker = new We(Ae);
  }, e.prototype.depend = function(r, t) {
    if (this.d) {
      this.d(Sn(r, t));
      var n = Ve(t);
      n !== t && this.d(Sn(r, n)), this.parent && this.parent.depend(r, t);
    }
  }, e.prototype.dirty = function(r, t) {
    this.d && this.d.dirty(Sn(r, t), t === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Sn(e, r) {
  return r + "#" + e;
}
function xa(e, r) {
  $r(e) && e.group.depend(r, "__exists");
}
(function(e) {
  var r = function(t) {
    Ee(n, t);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, c = o.seed, u = t.call(this, i, new sc(s)) || this;
      return u.stump = new yd(u), u.storageTrie = new We(Ae), c && u.replace(c), u;
    }
    return n.prototype.addLayer = function(o, i) {
      return this.stump.addLayer(o, i);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(e);
  e.Root = r;
})(zr || (zr = {}));
var Ge = function(e) {
  Ee(r, e);
  function r(t, n, o, i) {
    var a = e.call(this, n.policies, i) || this;
    return a.id = t, a.parent = n, a.replay = o, a.group = i, o(a), a;
  }
  return r.prototype.addLayer = function(t, n) {
    return new r(t, this, n, this.group);
  }, r.prototype.removeLayer = function(t) {
    var n = this, o = this.parent.removeLayer(t);
    return t === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(i) {
      var a = n.data[i], s = o.lookup(i);
      s ? a ? a !== s && Object.keys(a).forEach(function(c) {
        B(a[c], s[c]) || n.group.dirty(i, c);
      }) : (n.group.dirty(i, "__exists"), Object.keys(s).forEach(function(c) {
        n.group.dirty(i, c);
      })) : n.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, r.prototype.toObject = function() {
    return E(E({}, this.parent.toObject()), this.data);
  }, r.prototype.findChildRefIds = function(t) {
    var n = this.parent.findChildRefIds(t);
    return K.call(this.data, t) ? E(E({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
  }, r.prototype.getStorage = function() {
    for (var t = this.parent; t.parent; )
      t = t.parent;
    return t.getStorage.apply(t, arguments);
  }, r;
}(zr), yd = function(e) {
  Ee(r, e);
  function r(t) {
    return e.call(this, "EntityStore.Stump", t, function() {
    }, new sc(t.group.caching, t.group)) || this;
  }
  return r.prototype.removeLayer = function() {
    return this;
  }, r.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, r;
}(Ge);
function Nd(e, r, t) {
  var n = e[t], o = r[t];
  return B(n, o) ? n : o;
}
function $r(e) {
  return !!(e instanceof zr && e.group.caching);
}
function Ad(e) {
  return L(e) ? F(e) ? e.slice(0) : E({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Po = function() {
  function e() {
    this.known = new (Du ? WeakSet : Set)(), this.pool = new We(Ae), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(r) {
    return L(r) && this.known.has(r);
  }, e.prototype.pass = function(r) {
    if (L(r)) {
      var t = Ad(r);
      return this.passes.set(t, r), t;
    }
    return r;
  }, e.prototype.admit = function(r) {
    var t = this;
    if (L(r)) {
      var n = this.passes.get(r);
      if (n)
        return n;
      var o = Object.getPrototypeOf(r);
      switch (o) {
        case Array.prototype: {
          if (this.known.has(r))
            return r;
          var i = r.map(this.admit, this), a = this.pool.lookupArray(i);
          return a.array || (this.known.add(a.array = i), globalThis.__DEV__ !== !1 && Object.freeze(i)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(r))
            return r;
          var s = Object.getPrototypeOf(r), c = [s], u = this.sortedKeys(r);
          c.push(u.json);
          var l = c.length;
          u.sorted.forEach(function(d) {
            c.push(t.admit(r[d]));
          });
          var a = this.pool.lookupArray(c);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), u.sorted.forEach(function(d, h) {
              f[d] = c[l + h];
            }), globalThis.__DEV__ !== !1 && Object.freeze(f);
          }
          return a.object;
        }
      }
    }
    return r;
  }, e.prototype.sortedKeys = function(r) {
    var t = Object.keys(r), n = this.pool.lookupArray(t);
    if (!n.keys) {
      t.sort();
      var o = JSON.stringify(t);
      (n.keys = this.keysByJSON.get(o)) || this.keysByJSON.set(o, n.keys = { sorted: t, json: o });
    }
    return n.keys;
  }, e;
}(), Qe = Object.assign(function(e) {
  if (L(e)) {
    wo === void 0 && Fa();
    var r = wo.admit(e), t = Ho.get(r);
    return t === void 0 && Ho.set(r, t = JSON.stringify(r)), t;
  }
  return JSON.stringify(e);
}, {
  reset: Fa
}), wo, Ho;
function Fa() {
  wo = new Po(), Ho = new (Ae ? WeakMap : Map)();
}
function ja(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var Sd = function() {
  function e(r) {
    var t = this;
    this.knownResults = new (Ae ? WeakMap : Map)(), this.config = Or(r, {
      addTypename: r.addTypename !== !1,
      canonizeResults: oc(r)
    }), this.canon = r.canon || new Po(), this.executeSelectionSet = Vt(function(n) {
      var o, i = n.context.canonizeResults, a = ja(n);
      a[3] = !i;
      var s = (o = t.executeSelectionSet).peek.apply(o, a);
      return s ? i ? E(E({}, s), { result: t.canon.admit(s.result) }) : s : (xa(n.context.store, n.enclosingRef.__ref), t.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: ja,
      makeCacheKey: function(n, o, i, a) {
        if ($r(i.store))
          return i.store.makeCacheKey(n, G(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = Vt(function(n) {
      return xa(n.context.store, n.enclosingRef.__ref), t.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var o = n.field, i = n.array, a = n.context;
        if ($r(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Po();
  }, e.prototype.diffQueryAgainstStore = function(r) {
    var t = r.store, n = r.query, o = r.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = r.variables, s = r.returnPartialData, c = s === void 0 ? !0 : s, u = r.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
    a = E(E({}, Ti(Pu(n))), a);
    var _ = hr(i), d = this.executeSelectionSet({
      selectionSet: at(n).selectionSet,
      objectOrReference: _,
      enclosingRef: _,
      context: E({ store: t, query: n, policies: f, variables: a, varString: Qe(a), canonizeResults: l }, ac(n, this.config.fragments))
    }), h;
    if (d.missing && (h = [
      new rc(Dd(d.missing), d.missing, n, a)
    ], !c))
      throw h[0];
    return {
      result: d.result,
      complete: !h,
      missing: h
    };
  }, e.prototype.isFresh = function(r, t, n, o) {
    if ($r(o.store) && this.knownResults.get(r) === n) {
      var i = this.executeSelectionSet.peek(n, t, o, this.canon.isKnown(r));
      if (i && r === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(r) {
    var t = this, n = r.selectionSet, o = r.objectOrReference, i = r.enclosingRef, a = r.context;
    if (G(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, c = a.policies, u = a.store, l = u.getFieldValue(o, "__typename"), f = [], _, d = new Fe();
    this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && f.push({ __typename: l });
    function h(O, b) {
      var y;
      return O.missing && (_ = d.merge(_, (y = {}, y[b] = O.missing, y))), O.result;
    }
    var m = new Set(n.selections);
    m.forEach(function(O) {
      var b, y;
      if (nt(O, s))
        if (xe(O)) {
          var g = c.readField({
            fieldName: O.name.value,
            field: O,
            variables: a.variables,
            from: o
          }, a), I = Me(O);
          g === void 0 ? Oi.added(O) || (_ = d.merge(_, (b = {}, b[I] = "Can't find field '".concat(O.name.value, "' on ").concat(G(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), b))) : F(g) ? g = h(t.executeSubSelectedArray({
            field: O,
            array: g,
            enclosingRef: i,
            context: a
          }), I) : O.selectionSet ? g != null && (g = h(t.executeSelectionSet({
            selectionSet: O.selectionSet,
            objectOrReference: g,
            enclosingRef: G(g) ? g : i,
            context: a
          }), I)) : a.canonizeResults && (g = t.canon.pass(g)), g !== void 0 && f.push((y = {}, y[I] = g, y));
        } else {
          var A = rn(O, a.lookupFragment);
          if (!A && O.kind === q.FRAGMENT_SPREAD)
            throw z(7, O.name.value);
          A && c.fragmentMatches(A, l) && A.selectionSet.selections.forEach(m.add, m);
        }
    });
    var T = Ri(f), p = { result: T, missing: _ }, R = a.canonizeResults ? this.canon.admit(p) : go(p);
    return R.result && this.knownResults.set(R.result, n), R;
  }, e.prototype.execSubSelectedArrayImpl = function(r) {
    var t = this, n = r.field, o = r.array, i = r.enclosingRef, a = r.context, s, c = new Fe();
    function u(l, f) {
      var _;
      return l.missing && (s = c.merge(s, (_ = {}, _[f] = l.missing, _))), l.result;
    }
    return n.selectionSet && (o = o.filter(a.store.canRead)), o = o.map(function(l, f) {
      return l === null ? null : F(l) ? u(t.executeSubSelectedArray({
        field: n,
        array: l,
        enclosingRef: i,
        context: a
      }), f) : n.selectionSet ? u(t.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: l,
        enclosingRef: G(l) ? l : i,
        context: a
      }), f) : (globalThis.__DEV__ !== !1 && Ud(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function Dd(e) {
  try {
    JSON.stringify(e, function(r, t) {
      if (typeof t == "string")
        throw t;
      return t;
    });
  } catch (r) {
    return r;
  }
}
function Ud(e, r, t) {
  if (!r.selectionSet) {
    var n = /* @__PURE__ */ new Set([t]);
    n.forEach(function(o) {
      L(o) && (S(
        !G(o),
        8,
        gd(e, o),
        r.name.value
      ), Object.values(o).forEach(n.add, n));
    });
  }
}
var Si = new Xu(), Va = /* @__PURE__ */ new WeakMap();
function qr(e) {
  var r = Va.get(e);
  return r || Va.set(e, r = {
    vars: /* @__PURE__ */ new Set(),
    dep: ec()
  }), r;
}
function Wa(e) {
  qr(e).vars.forEach(function(r) {
    return r.forgetCache(e);
  });
}
function Pd(e) {
  qr(e).vars.forEach(function(r) {
    return r.attachCache(e);
  });
}
function wd(e) {
  var r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, r.forEach(function(c) {
          qr(c).dep.dirty(n), Hd(c);
        });
        var a = Array.from(t);
        t.clear(), a.forEach(function(c) {
          return c(e);
        });
      }
    } else {
      var s = Si.getValue();
      s && (o(s), qr(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(i) {
    return t.add(i), function() {
      t.delete(i);
    };
  };
  var o = n.attachCache = function(i) {
    return r.add(i), qr(i).vars.add(n), n;
  };
  return n.forgetCache = function(i) {
    return r.delete(i);
  }, n;
}
function Hd(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Xa = /* @__PURE__ */ Object.create(null);
function Di(e) {
  var r = JSON.stringify(e);
  return Xa[r] || (Xa[r] = /* @__PURE__ */ Object.create(null));
}
function Ka(e) {
  var r = Di(e);
  return r.keyFieldsFn || (r.keyFieldsFn = function(t, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = Ui(e, function(a) {
      var s = mr(n.storeObject, a, o);
      return s === void 0 && t !== n.storeObject && K.call(t, a[0]) && (s = mr(t, a, cc)), S(s !== void 0, 2, a.join("."), t), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function $a(e) {
  var r = Di(e);
  return r.keyArgsFn || (r.keyArgsFn = function(t, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = Ui(e, function(u) {
      var l = u[0], f = l.charAt(0);
      if (f === "@") {
        if (o && me(o.directives)) {
          var _ = l.slice(1), d = o.directives.find(function(p) {
            return p.name.value === _;
          }), h = d && tn(d, i);
          return h && mr(h, u.slice(1));
        }
        return;
      }
      if (f === "$") {
        var m = l.slice(1);
        if (i && K.call(i, m)) {
          var T = u.slice(0);
          return T[0] = m, mr(i, T);
        }
        return;
      }
      if (t)
        return mr(t, u);
    }), c = JSON.stringify(s);
    return (t || c !== "{}") && (a += ":" + c), a;
  });
}
function Ui(e, r) {
  var t = new Fe();
  return uc(e).reduce(function(n, o) {
    var i, a = r(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = t.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function uc(e) {
  var r = Di(e);
  if (!r.paths) {
    var t = r.paths = [], n = [];
    e.forEach(function(o, i) {
      F(o) ? (uc(o).forEach(function(a) {
        return t.push(n.concat(a));
      }), n.length = 0) : (n.push(o), F(e[i + 1]) || (t.push(n.slice(0)), n.length = 0));
    });
  }
  return r.paths;
}
function cc(e, r) {
  return e[r];
}
function mr(e, r, t) {
  return t = t || cc, lc(r.reduce(function n(o, i) {
    return F(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && t(o, i);
  }, e));
}
function lc(e) {
  return L(e) ? F(e) ? e.map(lc) : Ui(Object.keys(e).sort(), function(r) {
    return mr(e, r);
  }) : e;
}
Ei.setStringify(Qe);
function Go(e) {
  return e.args !== void 0 ? e.args : e.field ? tn(e.field, e.variables) : null;
}
var Gd = function() {
}, qa = function(e, r) {
  return r.fieldName;
}, Ya = function(e, r, t) {
  var n = t.mergeObjects;
  return n(e, r);
}, Ja = function(e, r) {
  return r;
}, Cd = function() {
  function e(r) {
    this.config = r, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = E({ dataIdFromObject: tc }, r), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), r.possibleTypes && this.addPossibleTypes(r.possibleTypes), r.typePolicies && this.addTypePolicies(r.typePolicies);
  }
  return e.prototype.identify = function(r, t) {
    var n, o = this, i = t && (t.typename || ((n = t.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || r.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = t && t.storeObject || r, s = E(E({}, t), { typename: i, storeObject: a, readField: t && t.readField || function() {
      var _ = Pi(arguments, a);
      return o.readField(_, {
        store: o.cache.data,
        variables: _.variables
      });
    } }), c, u = i && this.getTypePolicy(i), l = u && u.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(E(E({}, r), a), s);
      if (F(f))
        l = Ka(f);
      else {
        c = f;
        break;
      }
    }
    return c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
  }, e.prototype.addTypePolicies = function(r) {
    var t = this;
    Object.keys(r).forEach(function(n) {
      var o = r[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, c = ye(o, ["queryType", "mutationType", "subscriptionType"]);
      i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), s && t.setRootTypename("Subscription", n), K.call(t.toBeAdded, n) ? t.toBeAdded[n].push(c) : t.toBeAdded[n] = [c];
    });
  }, e.prototype.updateTypePolicy = function(r, t) {
    var n = this, o = this.getTypePolicy(r), i = t.keyFields, a = t.fields;
    function s(c, u) {
      c.merge = typeof u == "function" ? u : u === !0 ? Ya : u === !1 ? Ja : c.merge;
    }
    s(o, t.merge), o.keyFn = i === !1 ? Gd : F(i) ? Ka(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(c) {
      var u = n.getFieldPolicy(r, c, !0), l = a[c];
      if (typeof l == "function")
        u.read = l;
      else {
        var f = l.keyArgs, _ = l.read, d = l.merge;
        u.keyFn = f === !1 ? qa : F(f) ? $a(f) : typeof f == "function" ? f : u.keyFn, typeof _ == "function" && (u.read = _), s(u, d);
      }
      u.read && u.merge && (u.keyFn = u.keyFn || qa);
    });
  }, e.prototype.setRootTypename = function(r, t) {
    t === void 0 && (t = r);
    var n = "ROOT_" + r.toUpperCase(), o = this.rootTypenamesById[n];
    t !== o && (S(!o || o === r, 3, r), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
  }, e.prototype.addPossibleTypes = function(r) {
    var t = this;
    this.usingPossibleTypes = !0, Object.keys(r).forEach(function(n) {
      t.getSupertypeSet(n, !0), r[n].forEach(function(o) {
        t.getSupertypeSet(o, !0).add(n);
        var i = o.match(ic);
        (!i || i[0] !== o) && t.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(r) {
    var t = this;
    if (!K.call(this.typePolicies, r)) {
      var n = this.typePolicies[r] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(r);
      !o && this.fuzzySubtypes.size && (o = this.getSupertypeSet(r, !0), this.fuzzySubtypes.forEach(function(a, s) {
        if (a.test(r)) {
          var c = t.supertypeMap.get(s);
          c && c.forEach(function(u) {
            return o.add(u);
          });
        }
      })), o && o.size && o.forEach(function(a) {
        var s = t.getTypePolicy(a), c = s.fields, u = ye(s, ["fields"]);
        Object.assign(n, u), Object.assign(n.fields, c);
      });
    }
    var i = this.toBeAdded[r];
    return i && i.length && i.splice(0).forEach(function(a) {
      t.updateTypePolicy(r, a);
    }), this.typePolicies[r];
  }, e.prototype.getFieldPolicy = function(r, t, n) {
    if (r) {
      var o = this.getTypePolicy(r).fields;
      return o[t] || n && (o[t] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(r, t) {
    var n = this.supertypeMap.get(r);
    return !n && t && this.supertypeMap.set(r, n = /* @__PURE__ */ new Set()), n;
  }, e.prototype.fragmentMatches = function(r, t, n, o) {
    var i = this;
    if (!r.typeCondition)
      return !0;
    if (!t)
      return !1;
    var a = r.typeCondition.name.value;
    if (t === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(t, !0), c = [s], u = function(h) {
        var m = i.getSupertypeSet(h, !1);
        m && m.size && c.indexOf(m) < 0 && c.push(m);
      }, l = !!(n && this.fuzzySubtypes.size), f = !1, _ = 0; _ < c.length; ++_) {
        var d = c[_];
        if (d.has(a))
          return s.has(a) || (f && globalThis.__DEV__ !== !1 && S.warn(4, t, a), s.add(a)), !0;
        d.forEach(u), l && _ === c.length - 1 && Uo(r.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(h, m) {
          var T = t.match(h);
          T && T[0] === t && u(m);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(r, t) {
    var n = this.getFieldPolicy(r, t, !1);
    return !!(n && n.keyFn);
  }, e.prototype.getStoreFieldName = function(r) {
    var t = r.typename, n = r.fieldName, o = this.getFieldPolicy(t, n, !1), i, a = o && o.keyFn;
    if (a && t)
      for (var s = {
        typename: t,
        fieldName: n,
        field: r.field || null,
        variables: r.variables
      }, c = Go(r); a; ) {
        var u = a(c, s);
        if (F(u))
          a = $a(u);
        else {
          i = u || n;
          break;
        }
      }
    return i === void 0 && (i = r.field ? Zf(r.field, r.variables) : Ei(n, Go(r))), i === !1 ? n : n === Ve(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(r, t) {
    var n = r.from;
    if (n) {
      var o = r.field || r.fieldName;
      if (o) {
        if (r.typename === void 0) {
          var i = t.store.getFieldValue(n, "__typename");
          i && (r.typename = i);
        }
        var a = this.getStoreFieldName(r), s = Ve(a), c = t.store.getFieldValue(n, a), u = this.getFieldPolicy(r.typename, s, !1), l = u && u.read;
        if (l) {
          var f = Qa(this, n, r, t, t.store.getStorage(G(n) ? n.__ref : n, a));
          return Si.withValue(this.cache, l, [
            c,
            f
          ]);
        }
        return c;
      }
    }
  }, e.prototype.getReadFunction = function(r, t) {
    var n = this.getFieldPolicy(r, t, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(r, t, n) {
    var o = this.getFieldPolicy(r, t, !1), i = o && o.merge;
    return !i && n && (o = this.getTypePolicy(n), i = o && o.merge), i;
  }, e.prototype.runMergeFunction = function(r, t, n, o, i) {
    var a = n.field, s = n.typename, c = n.merge;
    return c === Ya ? fc(o.store)(r, t) : c === Ja ? t : (o.overwrite && (r = void 0), c(r, t, Qa(this, void 0, {
      typename: s,
      fieldName: a.name.value,
      field: a,
      variables: o.variables
    }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function Qa(e, r, t, n, o) {
  var i = e.getStoreFieldName(t), a = Ve(i), s = t.variables || n.variables, c = n.store, u = c.toReference, l = c.canRead;
  return {
    args: Go(t),
    field: t.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: G,
    toReference: u,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Pi(arguments, r, s), n);
    },
    mergeObjects: fc(n.store)
  };
}
function Pi(e, r, t) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : r
  } : (a = E({}, n), K.call(a, "from") || (a.from = r)), globalThis.__DEV__ !== !1 && a.from === void 0 && globalThis.__DEV__ !== !1 && S.warn(5, yu(Array.from(e))), a.variables === void 0 && (a.variables = t), a;
}
function fc(e) {
  return function(t, n) {
    if (F(t) || F(n))
      throw z(6);
    if (L(t) && L(n)) {
      var o = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (G(t) && lr(n))
        return e.merge(t.__ref, n), t;
      if (lr(t) && G(n))
        return e.merge(t, n.__ref), n;
      if (lr(t) && lr(n))
        return E(E({}, t), n);
    }
    return n;
  };
}
function Dn(e, r, t) {
  var n = "".concat(r).concat(t), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === r && e.deferred === t ? e : E(E({}, e), { clientOnly: r, deferred: t })), o;
}
var kd = function() {
  function e(r, t, n) {
    this.cache = r, this.reader = t, this.fragments = n;
  }
  return e.prototype.writeToStore = function(r, t) {
    var n = this, o = t.query, i = t.result, a = t.dataId, s = t.variables, c = t.overwrite, u = it(o), l = Id();
    s = E(E({}, Ti(u)), s);
    var f = E(E({ store: r, written: /* @__PURE__ */ Object.create(null), merge: function(d, h) {
      return l.merge(d, h);
    }, variables: s, varString: Qe(s) }, ac(o, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), _ = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: u.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!G(_))
      throw z(9, i);
    return f.incomingById.forEach(function(d, h) {
      var m = d.storeObject, T = d.mergeTree, p = d.fieldNodeSet, R = hr(h);
      if (T && T.map.size) {
        var O = n.applyMerges(T, R, m, f);
        if (G(O))
          return;
        m = O;
      }
      if (globalThis.__DEV__ !== !1 && !f.overwrite) {
        var b = /* @__PURE__ */ Object.create(null);
        p.forEach(function(I) {
          I.selectionSet && (b[I.name.value] = !0);
        });
        var y = function(I) {
          return b[Ve(I)] === !0;
        }, g = function(I) {
          var A = T && T.map.get(I);
          return !!(A && A.info && A.info.merge);
        };
        Object.keys(m).forEach(function(I) {
          y(I) && !g(I) && Ld(R, m, I, f.store);
        });
      }
      r.merge(h, m);
    }), r.retain(_.__ref), _;
  }, e.prototype.processSelectionSet = function(r) {
    var t = this, n = r.dataId, o = r.result, i = r.selectionSet, a = r.context, s = r.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = n && c.rootTypenamesById[n] || To(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (u.__typename = l);
    var f = function() {
      var O = Pi(arguments, u, a.variables);
      if (G(O.from)) {
        var b = a.incomingById.get(O.from.__ref);
        if (b) {
          var y = c.readField(E(E({}, O), { from: b.storeObject }), a);
          if (y !== void 0)
            return y;
        }
      }
      return c.readField(O, a);
    }, _ = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(O, b) {
      var y, g = Me(b), I = o[g];
      if (_.add(b), I !== void 0) {
        var A = c.getStoreFieldName({
          typename: l,
          fieldName: b.name.value,
          field: b,
          variables: O.variables
        }), M = za(s, A), x = t.processFieldValue(I, b, b.selectionSet ? Dn(O, !1, !1) : O, M), W = void 0;
        b.selectionSet && (G(x) || lr(x)) && (W = f("__typename", x));
        var ne = c.getMergeFunction(l, b.name.value, W);
        ne ? M.info = {
          field: b,
          typename: l,
          merge: ne
        } : Za(s, A), u = O.merge(u, (y = {}, y[A] = x, y));
      } else
        globalThis.__DEV__ !== !1 && !O.clientOnly && !O.deferred && !Oi.added(b) && !c.getReadFunction(l, b.name.value) && globalThis.__DEV__ !== !1 && S.error(10, Me(b), o);
    });
    try {
      var d = c.identify(o, {
        typename: l,
        selectionSet: i,
        fragmentMap: a.fragmentMap,
        storeObject: u,
        readField: f
      }), h = d[0], m = d[1];
      n = n || h, m && (u = a.merge(u, m));
    } catch (O) {
      if (!n)
        throw O;
    }
    if (typeof n == "string") {
      var T = hr(n), p = a.written[n] || (a.written[n] = []);
      if (p.indexOf(i) >= 0 || (p.push(i), this.reader && this.reader.isFresh(o, T, i, a)))
        return T;
      var R = a.incomingById.get(n);
      return R ? (R.storeObject = a.merge(R.storeObject, u), R.mergeTree = Co(R.mergeTree, s), _.forEach(function(O) {
        return R.fieldNodeSet.add(O);
      })) : a.incomingById.set(n, {
        storeObject: u,
        mergeTree: Wt(s) ? void 0 : s,
        fieldNodeSet: _
      }), T;
    }
    return u;
  }, e.prototype.processFieldValue = function(r, t, n, o) {
    var i = this;
    return !t.selectionSet || r === null ? globalThis.__DEV__ !== !1 ? xu(r) : r : F(r) ? r.map(function(a, s) {
      var c = i.processFieldValue(a, t, n, za(o, s));
      return Za(o, s), c;
    }) : this.processSelectionSet({
      result: r,
      selectionSet: t.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(r, t, n, o) {
    o === void 0 && (o = To(t, r, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new We(!1);
    return function c(u, l) {
      var f = s.lookup(u, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, u.selections.forEach(function(_) {
        if (nt(_, n.variables)) {
          var d = l.clientOnly, h = l.deferred;
          if (!(d && h) && me(_.directives) && _.directives.forEach(function(p) {
            var R = p.name.value;
            if (R === "client" && (d = !0), R === "defer") {
              var O = tn(p, n.variables);
              (!O || O.if !== !1) && (h = !0);
            }
          }), xe(_)) {
            var m = i.get(_);
            m && (d = d && m.clientOnly, h = h && m.deferred), i.set(_, Dn(n, d, h));
          } else {
            var T = rn(_, n.lookupFragment);
            if (!T && _.kind === q.FRAGMENT_SPREAD)
              throw z(11, _.name.value);
            T && a.fragmentMatches(T, o, t, n.variables) && c(T.selectionSet, Dn(n, d, h));
          }
        }
      }));
    }(r, n), i;
  }, e.prototype.applyMerges = function(r, t, n, o, i) {
    var a, s = this;
    if (r.map.size && !G(n)) {
      var c = !F(n) && (G(t) || lr(t)) ? t : void 0, u = n;
      c && !i && (i = [G(c) ? c.__ref : c]);
      var l, f = function(_, d) {
        return F(_) ? typeof d == "number" ? _[d] : void 0 : o.store.getFieldValue(_, String(d));
      };
      r.map.forEach(function(_, d) {
        var h = f(c, d), m = f(u, d);
        if (m !== void 0) {
          i && i.push(d);
          var T = s.applyMerges(_, h, m, o, i);
          T !== m && (l = l || /* @__PURE__ */ new Map(), l.set(d, T)), i && S(i.pop() === d);
        }
      }), l && (n = F(u) ? u.slice(0) : E({}, u), l.forEach(function(_, d) {
        n[d] = _;
      }));
    }
    return r.info ? this.cache.policies.runMergeFunction(t, n, r.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), _c = [];
function za(e, r) {
  var t = e.map;
  return t.has(r) || t.set(r, _c.pop() || { map: /* @__PURE__ */ new Map() }), t.get(r);
}
function Co(e, r) {
  if (e === r || !r || Wt(r))
    return e;
  if (!e || Wt(e))
    return r;
  var t = e.info && r.info ? E(E({}, e.info), r.info) : e.info || r.info, n = e.map.size && r.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : r.map, i = { info: t, map: o };
  if (n) {
    var a = new Set(r.map.keys());
    e.map.forEach(function(s, c) {
      i.map.set(c, Co(s, r.map.get(c))), a.delete(c);
    }), a.forEach(function(s) {
      i.map.set(s, Co(r.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function Wt(e) {
  return !e || !(e.info || e.map.size);
}
function Za(e, r) {
  var t = e.map, n = t.get(r);
  n && Wt(n) && (_c.push(n), t.delete(r));
}
var es = /* @__PURE__ */ new Set();
function Ld(e, r, t, n) {
  var o = function(f) {
    var _ = n.getFieldValue(f, t);
    return typeof _ == "object" && _;
  }, i = o(e);
  if (i) {
    var a = o(r);
    if (a && !G(i) && !B(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(r, "__typename"), c = Ve(t), u = "".concat(s, ".").concat(c);
      if (!es.has(u)) {
        es.add(u);
        var l = [];
        !F(i) && !F(a) && [i, a].forEach(function(f) {
          var _ = n.getFieldValue(f, "__typename");
          typeof _ == "string" && !l.includes(_) && l.push(_);
        }), globalThis.__DEV__ !== !1 && S.warn(12, c, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", u, i, a);
      }
    }
  }
}
var Bd = function(e) {
  Ee(r, e);
  function r(t) {
    t === void 0 && (t = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new wu(Oi), n.assumeImmutableResults = !0, n.makeVar = wd, n.txCount = 0, n.config = bd(t), n.addTypename = !!n.config.addTypename, n.policies = new Cd({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return r.prototype.init = function() {
    var t = this.data = new zr.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = t.stump, this.resetResultCache();
  }, r.prototype.resetResultCache = function(t) {
    var n = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new kd(this, this.storeReader = new Sd({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: oc(this.config),
      canon: t ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = Vt(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if ($r(s)) {
          var c = a.optimistic, u = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, Qe({ optimistic: c, id: u, variables: l }));
        }
      }
    }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(a) {
      return a.resetCaching();
    });
  }, r.prototype.restore = function(t) {
    return this.init(), t && this.data.replace(t), this;
  }, r.prototype.extract = function(t) {
    return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).extract();
  }, r.prototype.read = function(t) {
    var n = t.returnPartialData, o = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(E(E({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof rc)
        return null;
      throw i;
    }
  }, r.prototype.write = function(t) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, t);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.modify = function(t) {
    if (K.call(t, "id") && !t.id)
      return !1;
    var n = t.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(t.id || "ROOT_QUERY", t.fields);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.diff = function(t) {
    return this.storeReader.diffQueryAgainstStore(E(E({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
  }, r.prototype.watch = function(t) {
    var n = this;
    return this.watches.size || Pd(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
      n.watches.delete(t) && !n.watches.size && Wa(n), n.maybeBroadcastWatch.forget(t);
    };
  }, r.prototype.gc = function(t) {
    Qe.reset();
    var n = this.optimisticData.gc();
    return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, r.prototype.retain = function(t, n) {
    return (n ? this.optimisticData : this.data).retain(t);
  }, r.prototype.release = function(t, n) {
    return (n ? this.optimisticData : this.data).release(t);
  }, r.prototype.identify = function(t) {
    if (G(t))
      return t.__ref;
    try {
      return this.policies.identify(t)[0];
    } catch (n) {
      globalThis.__DEV__ !== !1 && S.warn(n);
    }
  }, r.prototype.evict = function(t) {
    if (!t.id) {
      if (K.call(t, "id"))
        return !1;
      t = E(E({}, t), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(t, this.data);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.reset = function(t) {
    var n = this;
    return this.init(), Qe.reset(), t && t.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), Wa(this)) : this.broadcastWatches(), Promise.resolve();
  }, r.prototype.removeOptimistic = function(t) {
    var n = this.optimisticData.removeLayer(t);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, r.prototype.batch = function(t) {
    var n = this, o = t.update, i = t.optimistic, a = i === void 0 ? !0 : i, s = t.removeOptimistic, c = t.onWatchUpdated, u, l = function(_) {
      var d = n, h = d.data, m = d.optimisticData;
      ++n.txCount, _ && (n.data = n.optimisticData = _);
      try {
        return u = o(n);
      } finally {
        --n.txCount, n.data = h, n.optimisticData = m;
      }
    }, f = /* @__PURE__ */ new Set();
    return c && !this.txCount && this.broadcastWatches(E(E({}, t), { onWatchUpdated: function(_) {
      return f.add(_), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), c && f.size ? (this.broadcastWatches(E(E({}, t), { onWatchUpdated: function(_, d) {
      var h = c.call(this, _, d);
      return h !== !1 && f.delete(_), h;
    } })), f.size && f.forEach(function(_) {
      return n.maybeBroadcastWatch.dirty(_);
    })) : this.broadcastWatches(t), u;
  }, r.prototype.performTransaction = function(t, n) {
    return this.batch({
      update: t,
      optimistic: n || n !== null
    });
  }, r.prototype.transformDocument = function(t) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(t));
  }, r.prototype.broadcastWatches = function(t) {
    var n = this;
    this.txCount || this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch(o, t);
    });
  }, r.prototype.addFragmentsToDocument = function(t) {
    var n = this.config.fragments;
    return n ? n.transform(t) : t;
  }, r.prototype.addTypenameToDocument = function(t) {
    return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
  }, r.prototype.broadcastWatch = function(t, n) {
    var o = t.lastDiff, i = this.diff(t);
    n && (t.optimistic && typeof n.optimistic == "string" && (i.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, t, i, o) === !1) || (!o || !B(o.result, i.result)) && t.callback(t.lastDiff = i, o);
  }, r;
}(vd), H;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(H || (H = {}));
function Zr(e) {
  return e ? e < 7 : !1;
}
function Md(e, r, t, n) {
  var o = r.data, i = ye(r, ["data"]), a = t.data, s = ye(t, ["data"]);
  return B(i, s) && Ut(at(e).selectionSet, o, a, {
    fragmentMap: en(nn(e)),
    variables: n
  });
}
function Ut(e, r, t, n) {
  if (r === t)
    return !0;
  var o = /* @__PURE__ */ new Set();
  return e.selections.every(function(i) {
    if (o.has(i) || (o.add(i), !nt(i, n.variables)) || rs(i))
      return !0;
    if (xe(i)) {
      var a = Me(i), s = r && r[a], c = t && t[a], u = i.selectionSet;
      if (!u)
        return B(s, c);
      var l = Array.isArray(s), f = Array.isArray(c);
      if (l !== f)
        return !1;
      if (l && f) {
        var _ = s.length;
        if (c.length !== _)
          return !1;
        for (var d = 0; d < _; ++d)
          if (!Ut(u, s[d], c[d], n))
            return !1;
        return !0;
      }
      return Ut(u, s, c, n);
    } else {
      var h = rn(i, n.fragmentMap);
      if (h)
        return rs(h) ? !0 : Ut(h.selectionSet, r, t, n);
    }
  });
}
function rs(e) {
  return !!e.directives && e.directives.some(xd);
}
function xd(e) {
  return e.name.value === "nonreactive";
}
var ts = Object.assign, Fd = Object.hasOwnProperty, ko = function(e) {
  Ee(r, e);
  function r(t) {
    var n = t.queryManager, o = t.queryInfo, i = t.options, a = e.call(this, function(T) {
      try {
        var p = T._subscription._observer;
        p && !p.error && (p.error = jd);
      } catch {
      }
      var R = !a.observers.size;
      a.observers.add(T);
      var O = a.last;
      return O && O.error ? T.error && T.error(O.error) : O && O.result && T.next && T.next(O.result), R && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(T) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = Un(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, c = s === void 0 ? {} : s, u = c.fetchPolicy, l = u === void 0 ? "cache-first" : u, f = i.fetchPolicy, _ = f === void 0 ? l : f, d = i.initialFetchPolicy, h = d === void 0 ? _ === "standby" ? l : _ : d;
    a.options = E(E({}, i), { initialFetchPolicy: h, fetchPolicy: _ }), a.queryId = o.queryId || n.generateQueryId();
    var m = it(a.query);
    return a.queryName = m && m.name && m.name.value, a;
  }
  return Object.defineProperty(r.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.result = function() {
    var t = this;
    return new Promise(function(n, o) {
      var i = {
        next: function(s) {
          n(s), t.observers.delete(i), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: o
      }, a = t.subscribe(i);
    });
  }, r.prototype.getCurrentResult = function(t) {
    t === void 0 && (t = !0);
    var n = this.getLastResult(!0), o = this.queryInfo.networkStatus || n && n.networkStatus || H.ready, i = E(E({}, n), { loading: Zr(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Un(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (i.data = c.result), B(i.data, {}) && (i.data = void 0), c.complete ? (delete i.partial, c.complete && i.networkStatus === H.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = H.ready, i.loading = !1)) : i.partial = !0, globalThis.__DEV__ !== !1 && !c.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && hc(c.missing);
      }
    return t && this.updateLastResult(i), i;
  }, r.prototype.isDifferentFromLastResult = function(t, n) {
    if (!this.last)
      return !0;
    var o = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !Md(this.query, this.last.result, t, this.variables) : !B(this.last.result, t);
    return o || n && !B(this.last.variables, n);
  }, r.prototype.getLast = function(t, n) {
    var o = this.last;
    if (o && o[t] && (!n || B(o.variables, this.variables)))
      return o[t];
  }, r.prototype.getLastResult = function(t) {
    return this.getLast("result", t);
  }, r.prototype.getLastError = function(t) {
    return this.getLast("error", t);
  }, r.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, r.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, r.prototype.refetch = function(t) {
    var n, o = {
      pollInterval: 0
    }, i = this.options.fetchPolicy;
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && Fd.call(t, "variables")) {
      var a = Pu(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(c) {
        return c.variable.name.value === "variables";
      })) && globalThis.__DEV__ !== !1 && S.warn(
        18,
        t,
        ((n = a.name) === null || n === void 0 ? void 0 : n.value) || a
      );
    }
    return t && !B(this.options.variables, t) && (o.variables = this.options.variables = E(E({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(o, H.refetch);
  }, r.prototype.fetchMore = function(t) {
    var n = this, o = E(E({}, t.query ? t : E(E(E(E({}, this.options), { query: this.options.query }), t), { variables: E(E({}, this.options.variables), t.variables) })), { fetchPolicy: "no-cache" });
    o.query = this.transformDocument(o.query);
    var i = this.queryManager.generateQueryId();
    this.lastQuery = t.query ? this.transformDocument(this.options.query) : o.query;
    var a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = H.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var c = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, H.fetchMore).then(function(u) {
      return n.queryManager.removeQuery(i), a.networkStatus === H.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(l) {
          var f = t.updateQuery;
          f ? l.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(_) {
            return f(_, {
              fetchMoreResult: u.data,
              variables: o.variables
            });
          }) : l.writeQuery({
            query: o.query,
            variables: o.variables,
            data: u.data
          });
        },
        onWatchUpdated: function(l) {
          c.add(l.query);
        }
      }), u;
    }).finally(function() {
      c.has(n.query) || dc(n);
    });
  }, r.prototype.subscribeToMore = function(t) {
    var n = this, o = this.queryManager.startGraphQLSubscription({
      query: t.document,
      variables: t.variables,
      context: t.context
    }).subscribe({
      next: function(i) {
        var a = t.updateQuery;
        a && n.updateQuery(function(s, c) {
          var u = c.variables;
          return a(s, {
            subscriptionData: i,
            variables: u
          });
        });
      },
      error: function(i) {
        if (t.onError) {
          t.onError(i);
          return;
        }
        globalThis.__DEV__ !== !1 && S.error(19, i);
      }
    });
    return this.subscriptions.add(o), function() {
      n.subscriptions.delete(o) && o.unsubscribe();
    };
  }, r.prototype.setOptions = function(t) {
    return this.reobserve(t);
  }, r.prototype.silentSetOptions = function(t) {
    var n = Or(this.options, t || {});
    ts(this.options, n);
  }, r.prototype.setVariables = function(t) {
    return B(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: t
    }, H.setVariables) : Promise.resolve());
  }, r.prototype.updateQuery = function(t) {
    var n = this.queryManager, o = n.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, i = t(o, {
      variables: this.variables
    });
    i && (n.cache.writeQuery({
      query: this.options.query,
      data: i,
      variables: this.variables
    }), n.broadcastQueries());
  }, r.prototype.startPolling = function(t) {
    this.options.pollInterval = t, this.updatePolling();
  }, r.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, r.prototype.applyNextFetchPolicy = function(t, n) {
    if (n.nextFetchPolicy) {
      var o = n.fetchPolicy, i = o === void 0 ? "cache-first" : o, a = n.initialFetchPolicy, s = a === void 0 ? i : a;
      i === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(i, {
        reason: t,
        options: n,
        observable: this,
        initialFetchPolicy: s
      }) : t === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
    }
    return n.fetchPolicy;
  }, r.prototype.fetch = function(t, n, o) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, n, o);
  }, r.prototype.updatePolling = function() {
    var t = this;
    if (!this.queryManager.ssrMode) {
      var n = this, o = n.pollingInfo, i = n.options.pollInterval;
      if (!i) {
        o && (clearTimeout(o.timeout), delete this.pollingInfo);
        return;
      }
      if (!(o && o.interval === i)) {
        S(i, 20);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          t.pollingInfo && (Zr(t.queryInfo.networkStatus) ? c() : t.reobserve({
            fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, H.poll).then(c, c));
        }, c = function() {
          var u = t.pollingInfo;
          u && (clearTimeout(u.timeout), u.timeout = setTimeout(s, u.interval));
        };
        c();
      }
    }
  }, r.prototype.updateLastResult = function(t, n) {
    n === void 0 && (n = this.variables);
    var o = this.getLastError();
    return o && this.last && !B(n, this.last.variables) && (o = void 0), this.last = E({ result: this.queryManager.assumeImmutableResults ? t : xu(t), variables: n }, o ? { error: o } : null);
  }, r.prototype.reobserveAsConcast = function(t, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === H.refetch || n === H.fetchMore || n === H.poll, a = this.options.variables, s = this.options.fetchPolicy, c = Or(this.options, t || {}), u = i ? c : ts(this.options, c), l = this.transformDocument(u.query);
    this.lastQuery = l, i || (this.updatePolling(), t && t.variables && !B(t.variables, a) && u.fetchPolicy !== "standby" && u.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = H.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Un(u.fetchPolicy));
    var f = function() {
      o.concast === h && (o.waitForOwnResult = !1);
    }, _ = u.variables && E({}, u.variables), d = this.fetch(u, n, l), h = d.concast, m = d.fromLink, T = {
      next: function(p) {
        f(), o.reportResult(p, _);
      },
      error: function(p) {
        f(), o.reportError(p, _);
      }
    };
    return !i && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = T), h.addObserver(T), h;
  }, r.prototype.reobserve = function(t, n) {
    return this.reobserveAsConcast(t, n).promise;
  }, r.prototype.resubscribeAfterError = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var o = this.last;
    this.resetLastResults();
    var i = this.subscribe.apply(this, t);
    return this.last = o, i;
  }, r.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, r.prototype.reportResult = function(t, n) {
    var o = this.getLastError(), i = this.isDifferentFromLastResult(t, n);
    (o || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, n), (o || i) && Kr(this.observers, "next", t);
  }, r.prototype.reportError = function(t, n) {
    var o = E(E({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: H.error, loading: !1 });
    this.updateLastResult(o, n), Kr(this.observers, "error", this.last.error = t);
  }, r.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, r.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
      return t.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, r.prototype.transformDocument = function(t) {
    return this.queryManager.transform(t);
  }, r;
}(C);
Fu(ko);
function dc(e) {
  var r = e.options, t = r.fetchPolicy, n = r.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : t;
    }
  }) : e.reobserve();
}
function jd(e) {
  globalThis.__DEV__ !== !1 && S.error(21, e.message, e.stack);
}
function hc(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && S.debug(22, e);
}
function Un(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var pc = function() {
  function e(r) {
    var t = r.cache, n = r.client, o = r.resolvers, i = r.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(r) {
    var t = this;
    this.resolvers = this.resolvers || {}, Array.isArray(r) ? r.forEach(function(n) {
      t.resolvers = Ra(t.resolvers, n);
    }) : this.resolvers = Ra(this.resolvers, r);
  }, e.prototype.setResolvers = function(r) {
    this.resolvers = {}, this.addResolvers(r);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(r) {
    var t = r.document, n = r.remoteResult, o = r.context, i = r.variables, a = r.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return ke(this, void 0, void 0, function() {
      return Le(this, function(c) {
        return t ? [2, this.resolveDocument(t, n.data, o, i, this.fragmentMatcher, s).then(function(u) {
          return E(E({}, n), { data: u.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(r) {
    this.fragmentMatcher = r;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(r) {
    return Jr(["client"], r) && this.resolvers ? r : null;
  }, e.prototype.serverQuery = function(r) {
    return ku(r);
  }, e.prototype.prepareContext = function(r) {
    var t = this.cache;
    return E(E({}, r), { cache: t, getCacheKey: function(n) {
      return t.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(r, t, n) {
    return t === void 0 && (t = {}), n === void 0 && (n = {}), ke(this, void 0, void 0, function() {
      return Le(this, function(o) {
        return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, t) || {}, this.prepareContext(n), t).then(function(i) {
          return E(E({}, t), i.exportedVariables);
        })] : [2, E({}, t)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(r) {
    var t = !1;
    return Ne(r, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (t = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), t))
            return mi;
        }
      }
    }), t;
  }, e.prototype.buildRootValueFromCache = function(r, t) {
    return this.cache.diff({
      query: s_(r),
      variables: t,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(r, t, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), ke(this, void 0, void 0, function() {
      var s, c, u, l, f, _, d, h, m, T, p;
      return Le(this, function(R) {
        return s = at(r), c = nn(r), u = en(c), l = this.collectSelectionsToResolve(s, u), f = s.operation, _ = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", d = this, h = d.cache, m = d.client, T = {
          fragmentMap: u,
          context: E(E({}, n), { cache: h, client: m }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: _,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, p = !1, [2, this.resolveSelectionSet(s.selectionSet, p, t, T).then(function(O) {
          return {
            result: O,
            exportedVariables: T.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(r, t, n, o) {
    return ke(this, void 0, void 0, function() {
      var i, a, s, c, u, l = this;
      return Le(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, c = [n], u = function(_) {
          return ke(l, void 0, void 0, function() {
            var d, h;
            return Le(this, function(m) {
              return !t && !o.selectionsToResolve.has(_) ? [2] : nt(_, s) ? xe(_) ? [2, this.resolveField(_, t, n, o).then(function(T) {
                var p;
                typeof T < "u" && c.push((p = {}, p[Me(_)] = T, p));
              })] : (t_(_) ? d = _ : (d = i[_.name.value], S(d, 16, _.name.value)), d && d.typeCondition && (h = d.typeCondition.name.value, o.fragmentMatcher(n, h, a)) ? [2, this.resolveSelectionSet(d.selectionSet, t, n, o).then(function(T) {
                c.push(T);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(r.selections.map(u)).then(function() {
          return Ri(c);
        })];
      });
    });
  }, e.prototype.resolveField = function(r, t, n, o) {
    return ke(this, void 0, void 0, function() {
      var i, a, s, c, u, l, f, _, d, h = this;
      return Le(this, function(m) {
        return n ? (i = o.variables, a = r.name.value, s = Me(r), c = a !== s, u = n[s] || n[a], l = Promise.resolve(u), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(r)) && (f = n.__typename || o.defaultOperationType, _ = this.resolvers && this.resolvers[f], _ && (d = _[c ? a : s], d && (l = Promise.resolve(Si.withValue(this.cache, d, [
          n,
          tn(r, i),
          o.context,
          { field: r, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(T) {
          var p, R;
          if (T === void 0 && (T = u), r.directives && r.directives.forEach(function(b) {
            b.name.value === "export" && b.arguments && b.arguments.forEach(function(y) {
              y.name.value === "as" && y.value.kind === "StringValue" && (o.exportedVariables[y.value.value] = T);
            });
          }), !r.selectionSet || T == null)
            return T;
          var O = (R = (p = r.directives) === null || p === void 0 ? void 0 : p.some(function(b) {
            return b.name.value === "client";
          })) !== null && R !== void 0 ? R : !1;
          if (Array.isArray(T))
            return h.resolveSubSelectedArray(r, t || O, T, o);
          if (r.selectionSet)
            return h.resolveSelectionSet(r.selectionSet, t || O, T, o);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(r, t, n, o) {
    var i = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return i.resolveSubSelectedArray(r, t, a, o);
      if (r.selectionSet)
        return i.resolveSelectionSet(r.selectionSet, t, a, o);
    }));
  }, e.prototype.collectSelectionsToResolve = function(r, t) {
    var n = function(a) {
      return !Array.isArray(a);
    }, o = this.selectionsToResolveCache;
    function i(a) {
      if (!o.has(a)) {
        var s = /* @__PURE__ */ new Set();
        o.set(a, s), Ne(a, {
          Directive: function(c, u, l, f, _) {
            c.name.value === "client" && _.forEach(function(d) {
              n(d) && ma(d) && s.add(d);
            });
          },
          FragmentSpread: function(c, u, l, f, _) {
            var d = t[c.name.value];
            S(d, 17, c.name.value);
            var h = i(d);
            h.size > 0 && (_.forEach(function(m) {
              n(m) && ma(m) && s.add(m);
            }), s.add(c), h.forEach(function(m) {
              s.add(m);
            }));
          }
        });
      }
      return o.get(a);
    }
    return i(r);
  }, e;
}(), fr = new (Ae ? WeakMap : Map)();
function Pn(e, r) {
  var t = e[r];
  typeof t == "function" && (e[r] = function() {
    return fr.set(e, (fr.get(e) + 1) % 1e15), t.apply(this, arguments);
  });
}
function ns(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var wn = function() {
  function e(r, t) {
    t === void 0 && (t = r.generateQueryId()), this.queryId = t, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = r.cache;
    fr.has(n) || (fr.set(n, 0), Pn(n, "evict"), Pn(n, "modify"), Pn(n, "reset"));
  }
  return e.prototype.init = function(r) {
    var t = r.networkStatus || H.loading;
    return this.variables && this.networkStatus !== H.loading && !B(this.variables, r.variables) && (t = H.setVariables), B(r.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: r.document,
      variables: r.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: t
    }), r.observableQuery && this.setObservableQuery(r.observableQuery), r.lastRequestId && (this.lastRequestId = r.lastRequestId), this;
  }, e.prototype.reset = function() {
    ns(this), this.dirty = !1;
  }, e.prototype.getDiff = function() {
    var r = this.getDiffOptions();
    if (this.lastDiff && B(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables);
    var t = this.observableQuery;
    if (t && t.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var n = this.cache.diff(r);
    return this.updateLastDiff(n, r), n;
  }, e.prototype.updateLastDiff = function(r, t) {
    this.lastDiff = r ? {
      diff: r,
      options: t || this.getDiffOptions()
    } : void 0;
  }, e.prototype.getDiffOptions = function(r) {
    var t;
    return r === void 0 && (r = this.variables), {
      query: this.document,
      variables: r,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (t = this.observableQuery) === null || t === void 0 ? void 0 : t.options.canonizeResults
    };
  }, e.prototype.setDiff = function(r) {
    var t = this, n = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(r), !this.dirty && !B(n && n.result, r && r.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return t.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(r) {
    var t = this;
    r !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = r, r ? (r.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = t.getDiff();
      n.fromOptimisticTransaction ? r.observe() : dc(r);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var r = this;
    ns(this), this.shouldNotify() && this.listeners.forEach(function(t) {
      return t(r);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Zr(this.networkStatus) && this.observableQuery) {
      var r = this.observableQuery.options.fetchPolicy;
      if (r !== "cache-only" && r !== "cache-and-network")
        return !1;
    }
    return !0;
  }, e.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel;
      var r = this.observableQuery;
      r && r.stopPolling();
    }
  }, e.prototype.cancel = function() {
  }, e.prototype.updateWatch = function(r) {
    var t = this;
    r === void 0 && (r = this.variables);
    var n = this.observableQuery;
    if (!(n && n.options.fetchPolicy === "no-cache")) {
      var o = E(E({}, this.getDiffOptions(r)), { watcher: this, callback: function(i) {
        return t.setDiff(i);
      } });
      (!this.lastWatch || !B(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(r, t) {
    var n = this.lastWrite;
    return !(n && n.dmCount === fr.get(this.cache) && B(t, n.variables) && B(r.data, n.result.data));
  }, e.prototype.markResult = function(r, t, n, o) {
    var i = this, a = new Fe(), s = me(r.errors) ? r.errors.slice(0) : [];
    if (this.reset(), "incremental" in r && me(r.incremental)) {
      var c = ju(this.getDiff().result, r);
      r.data = c;
    } else if ("hasNext" in r && r.hasNext) {
      var u = this.getDiff();
      r.data = a.merge(u.result, r.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: r.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (Lo(r, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(r, n.variables))
        l.writeQuery({
          query: t,
          data: r.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: r,
          variables: n.variables,
          dmCount: fr.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        r.data = i.lastDiff.diff.result;
        return;
      }
      var f = i.getDiffOptions(n.variables), _ = l.diff(f);
      !i.stopped && B(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(_, f), _.complete && (r.data = _.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = H.ready;
  }, e.prototype.markError = function(r) {
    return this.networkStatus = H.error, this.lastWrite = void 0, this.reset(), r.graphQLErrors && (this.graphQLErrors = r.graphQLErrors), r.networkError && (this.networkError = r.networkError), r;
  }, e;
}();
function Lo(e, r) {
  r === void 0 && (r = "none");
  var t = r === "ignore" || r === "all", n = !St(e);
  return !n && t && e.data && (n = !0), n;
}
var Vd = Object.prototype.hasOwnProperty, Wd = function() {
  function e(r) {
    var t = this, n = r.cache, o = r.link, i = r.defaultOptions, a = r.documentTransform, s = r.queryDeduplication, c = s === void 0 ? !1 : s, u = r.onBroadcast, l = r.ssrMode, f = l === void 0 ? !1 : l, _ = r.clientAwareness, d = _ === void 0 ? {} : _, h = r.localState, m = r.assumeImmutableResults, T = m === void 0 ? !!n.assumeImmutableResults : m;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Ae ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var p = new wu(function(R) {
      return t.cache.transformDocument(R);
    }, { cache: !1 });
    this.cache = n, this.link = o, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = c, this.clientAwareness = d, this.localState = h || new pc({ cache: n }), this.ssrMode = f, this.assumeImmutableResults = T, this.documentTransform = a ? p.concat(a).concat(p) : p, (this.onBroadcast = u) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var r = this;
    this.queries.forEach(function(t, n) {
      r.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(z(23));
  }, e.prototype.cancelPendingFetches = function(r) {
    this.fetchCancelFns.forEach(function(t) {
      return t(r);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(r) {
    var t, n, o = r.mutation, i = r.variables, a = r.optimisticResponse, s = r.updateQueries, c = r.refetchQueries, u = c === void 0 ? [] : c, l = r.awaitRefetchQueries, f = l === void 0 ? !1 : l, _ = r.update, d = r.onQueryUpdated, h = r.fetchPolicy, m = h === void 0 ? ((t = this.defaultOptions.mutate) === null || t === void 0 ? void 0 : t.fetchPolicy) || "network-only" : h, T = r.errorPolicy, p = T === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : T, R = r.keepRootFields, O = r.context;
    return ke(this, void 0, void 0, function() {
      var b, y, g, I;
      return Le(this, function(A) {
        switch (A.label) {
          case 0:
            return S(o, 24), S(m === "network-only" || m === "no-cache", 25), b = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), y = this.getDocumentInfo(o).hasClientExports, i = this.getVariables(o, i), y ? [4, this.localState.addExportedVariables(o, i, O)] : [3, 2];
          case 1:
            i = A.sent(), A.label = 2;
          case 2:
            return g = this.mutationStore && (this.mutationStore[b] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: b,
              document: o,
              variables: i,
              fetchPolicy: m,
              errorPolicy: p,
              context: O,
              updateQueries: s,
              update: _,
              keepRootFields: R
            }), this.broadcastQueries(), I = this, [2, new Promise(function(M, x) {
              return bn(I.getObservableFromLink(o, E(E({}, O), { optimisticResponse: a }), i, !1), function(W) {
                if (St(W) && p === "none")
                  throw new or({
                    graphQLErrors: Io(W)
                  });
                g && (g.loading = !1, g.error = null);
                var ne = E({}, W);
                return typeof u == "function" && (u = u(ne)), p === "ignore" && St(ne) && delete ne.errors, I.markMutationResult({
                  mutationId: b,
                  result: ne,
                  document: o,
                  variables: i,
                  fetchPolicy: m,
                  errorPolicy: p,
                  context: O,
                  update: _,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: u,
                  removeOptimistic: a ? b : void 0,
                  onQueryUpdated: d,
                  keepRootFields: R
                });
              }).subscribe({
                next: function(W) {
                  I.broadcastQueries(), (!("hasNext" in W) || W.hasNext === !1) && M(W);
                },
                error: function(W) {
                  g && (g.loading = !1, g.error = W), a && I.cache.removeOptimistic(b), I.broadcastQueries(), x(W instanceof or ? W : new or({
                    networkError: W
                  }));
                }
              });
            })];
        }
      });
    });
  }, e.prototype.markMutationResult = function(r, t) {
    var n = this;
    t === void 0 && (t = this.cache);
    var o = r.result, i = [], a = r.fetchPolicy === "no-cache";
    if (!a && Lo(o, r.errorPolicy)) {
      if (pr(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: r.document,
        variables: r.variables
      }), pr(o) && me(o.incremental)) {
        var s = t.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(r.document).asQuery,
          variables: r.variables,
          optimistic: !1,
          returnPartialData: !0
        }), c = void 0;
        s.result && (c = ju(s.result, o)), typeof c < "u" && (o.data = c, i.push({
          result: c,
          dataId: "ROOT_MUTATION",
          query: r.document,
          variables: r.variables
        }));
      }
      var u = r.updateQueries;
      u && this.queries.forEach(function(f, _) {
        var d = f.observableQuery, h = d && d.queryName;
        if (!(!h || !Vd.call(u, h))) {
          var m = u[h], T = n.queries.get(_), p = T.document, R = T.variables, O = t.diff({
            query: p,
            variables: R,
            returnPartialData: !0,
            optimistic: !1
          }), b = O.result, y = O.complete;
          if (y && b) {
            var g = m(b, {
              mutationResult: o,
              queryName: p && Oo(p) || void 0,
              queryVariables: R
            });
            g && i.push({
              result: g,
              dataId: "ROOT_QUERY",
              query: p,
              variables: R
            });
          }
        }
      });
    }
    if (i.length > 0 || r.refetchQueries || r.update || r.onQueryUpdated || r.removeOptimistic) {
      var l = [];
      if (this.refetchQueries({
        updateCache: function(f) {
          a || i.forEach(function(m) {
            return f.write(m);
          });
          var _ = r.update, d = !b_(o) || pr(o) && !o.hasNext;
          if (_) {
            if (!a) {
              var h = f.diff({
                id: "ROOT_MUTATION",
                query: n.getDocumentInfo(r.document).asQuery,
                variables: r.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              h.complete && (o = E(E({}, o), { data: h.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            d && _(f, o, {
              context: r.context,
              variables: r.variables
            });
          }
          !a && !r.keepRootFields && d && f.modify({
            id: "ROOT_MUTATION",
            fields: function(m, T) {
              var p = T.fieldName, R = T.DELETE;
              return p === "__typename" ? m : R;
            }
          });
        },
        include: r.refetchQueries,
        optimistic: !1,
        removeOptimistic: r.removeOptimistic,
        onQueryUpdated: r.onQueryUpdated || null
      }).forEach(function(f) {
        return l.push(f);
      }), r.awaitRefetchQueries || r.onQueryUpdated)
        return Promise.all(l).then(function() {
          return o;
        });
    }
    return Promise.resolve(o);
  }, e.prototype.markMutationOptimistic = function(r, t) {
    var n = this, o = typeof r == "function" ? r(t.variables) : r;
    return this.cache.recordOptimisticTransaction(function(i) {
      try {
        n.markMutationResult(E(E({}, t), { result: { data: o } }), i);
      } catch (a) {
        globalThis.__DEV__ !== !1 && S.error(a);
      }
    }, t.mutationId);
  }, e.prototype.fetchQuery = function(r, t, n) {
    return this.fetchConcastWithInfo(r, t, n).concast.promise;
  }, e.prototype.getQueryStore = function() {
    var r = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(t, n) {
      r[n] = {
        variables: t.variables,
        networkStatus: t.networkStatus,
        networkError: t.networkError,
        graphQLErrors: t.graphQLErrors
      };
    }), r;
  }, e.prototype.resetErrors = function(r) {
    var t = this.queries.get(r);
    t && (t.networkError = void 0, t.graphQLErrors = []);
  }, e.prototype.transform = function(r) {
    return this.documentTransform.transformDocument(r);
  }, e.prototype.getDocumentInfo = function(r) {
    var t = this.transformCache;
    if (!t.has(r)) {
      var n = {
        hasClientExports: Cf(r),
        hasForcedResolvers: this.localState.shouldForceResolvers(r),
        hasNonreactiveDirective: Jr(["nonreactive"], r),
        clientQuery: this.localState.clientQuery(r),
        serverQuery: Cu([
          { name: "client", remove: !0 },
          { name: "connection" },
          { name: "nonreactive" }
        ], r),
        defaultVars: Ti(it(r)),
        asQuery: E(E({}, r), { definitions: r.definitions.map(function(o) {
          return o.kind === "OperationDefinition" && o.operation !== "query" ? E(E({}, o), { operation: "query" }) : o;
        }) })
      };
      t.set(r, n);
    }
    return t.get(r);
  }, e.prototype.getVariables = function(r, t) {
    return E(E({}, this.getDocumentInfo(r).defaultVars), t);
  }, e.prototype.watchQuery = function(r) {
    var t = this.transform(r.query);
    r = E(E({}, r), { variables: this.getVariables(t, r.variables) }), typeof r.notifyOnNetworkStatusChange > "u" && (r.notifyOnNetworkStatusChange = !1);
    var n = new wn(this), o = new ko({
      queryManager: this,
      queryInfo: n,
      options: r
    });
    return o.lastQuery = t, this.queries.set(o.queryId, n), n.init({
      document: t,
      observableQuery: o,
      variables: o.variables
    }), o;
  }, e.prototype.query = function(r, t) {
    var n = this;
    return t === void 0 && (t = this.generateQueryId()), S(r.query, 26), S(r.query.kind === "Document", 27), S(!r.returnPartialData, 28), S(!r.pollInterval, 29), this.fetchQuery(t, E(E({}, r), { query: this.transform(r.query) })).finally(function() {
      return n.stopQuery(t);
    });
  }, e.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, e.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, e.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, e.prototype.stopQueryInStore = function(r) {
    this.stopQueryInStoreNoBroadcast(r), this.broadcastQueries();
  }, e.prototype.stopQueryInStoreNoBroadcast = function(r) {
    var t = this.queries.get(r);
    t && t.stop();
  }, e.prototype.clearStore = function(r) {
    return r === void 0 && (r = {
      discardWatches: !0
    }), this.cancelPendingFetches(z(30)), this.queries.forEach(function(t) {
      t.observableQuery ? t.networkStatus = H.loading : t.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(r);
  }, e.prototype.getObservableQueries = function(r) {
    var t = this;
    r === void 0 && (r = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(r) && r.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : Vf(a) ? o.set(t.transform(a), !1) : L(a) && a.query && i.add(a);
    }), this.queries.forEach(function(a, s) {
      var c = a.observableQuery, u = a.document;
      if (c) {
        if (r === "all") {
          n.set(s, c);
          return;
        }
        var l = c.queryName, f = c.options.fetchPolicy;
        if (f === "standby" || r === "active" && !c.hasObservers())
          return;
        (r === "active" || l && o.has(l) || u && o.has(u)) && (n.set(s, c), l && o.set(l, !0), u && o.set(u, !0));
      }
    }), i.size && i.forEach(function(a) {
      var s = Eo("legacyOneTimeQuery"), c = t.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), u = new ko({
        queryManager: t,
        queryInfo: c,
        options: E(E({}, a), { fetchPolicy: "network-only" })
      });
      S(u.queryId === s), c.setObservableQuery(u), n.set(s, u);
    }), globalThis.__DEV__ !== !1 && o.size && o.forEach(function(a, s) {
      a || globalThis.__DEV__ !== !1 && S.warn(typeof s == "string" ? 31 : 32, s);
    }), n;
  }, e.prototype.reFetchObservableQueries = function(r) {
    var t = this;
    r === void 0 && (r = !1);
    var n = [];
    return this.getObservableQueries(r ? "all" : "active").forEach(function(o, i) {
      var a = o.options.fetchPolicy;
      o.resetLastResults(), (r || a !== "standby" && a !== "cache-only") && n.push(o.refetch()), t.getQuery(i).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, e.prototype.setObservableQuery = function(r) {
    this.getQuery(r.queryId).setObservableQuery(r);
  }, e.prototype.startGraphQLSubscription = function(r) {
    var t = this, n = r.query, o = r.fetchPolicy, i = r.errorPolicy, a = i === void 0 ? "none" : i, s = r.variables, c = r.context, u = c === void 0 ? {} : c;
    n = this.transform(n), s = this.getVariables(n, s);
    var l = function(_) {
      return t.getObservableFromLink(n, u, _).map(function(d) {
        o !== "no-cache" && (Lo(d, a) && t.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: _
        }), t.broadcastQueries());
        var h = St(d), m = B_(d);
        if (h || m) {
          var T = {};
          if (h && (T.graphQLErrors = d.errors), m && (T.protocolErrors = d.extensions[yi]), a === "none" || m)
            throw new or(T);
        }
        return a === "ignore" && delete d.errors, d;
      });
    };
    if (this.getDocumentInfo(n).hasClientExports) {
      var f = this.localState.addExportedVariables(n, s, u).then(l);
      return new C(function(_) {
        var d = null;
        return f.then(function(h) {
          return d = h.subscribe(_);
        }, _.error), function() {
          return d && d.unsubscribe();
        };
      });
    }
    return l(s);
  }, e.prototype.stopQuery = function(r) {
    this.stopQueryNoBroadcast(r), this.broadcastQueries();
  }, e.prototype.stopQueryNoBroadcast = function(r) {
    this.stopQueryInStoreNoBroadcast(r), this.removeQuery(r);
  }, e.prototype.removeQuery = function(r) {
    this.fetchCancelFns.delete(r), this.queries.has(r) && (this.getQuery(r).stop(), this.queries.delete(r));
  }, e.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(r) {
      return r.notify();
    });
  }, e.prototype.getLocalState = function() {
    return this.localState;
  }, e.prototype.getObservableFromLink = function(r, t, n, o) {
    var i = this, a;
    o === void 0 && (o = (a = t == null ? void 0 : t.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, c = this.getDocumentInfo(r), u = c.serverQuery, l = c.clientQuery;
    if (u) {
      var f = this, _ = f.inFlightLinkObservables, d = f.link, h = {
        query: u,
        variables: n,
        operationName: Oo(u) || void 0,
        context: this.prepareContext(E(E({}, t), { forceFetch: !o }))
      };
      if (t = h.context, o) {
        var m = Hu(u), T = _.get(m) || /* @__PURE__ */ new Map();
        _.set(m, T);
        var p = Qe(n);
        if (s = T.get(p), !s) {
          var R = new cr([
            No(d, h)
          ]);
          T.set(p, s = R), R.beforeNext(function() {
            T.delete(p) && T.size < 1 && _.delete(m);
          });
        }
      } else
        s = new cr([
          No(d, h)
        ]);
    } else
      s = new cr([C.of({ data: {} })]), t = this.prepareContext(t);
    return l && (s = bn(s, function(O) {
      return i.localState.runResolvers({
        document: l,
        remoteResult: O,
        context: t,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(r, t, n) {
    var o = r.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
    return bn(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = Io(a), c = s.length > 0;
      if (o >= r.lastRequestId) {
        if (c && n.errorPolicy === "none")
          throw r.markError(new or({
            graphQLErrors: s
          }));
        r.markResult(a, i, n, t), r.markReady();
      }
      var u = {
        data: a.data,
        loading: !1,
        networkStatus: H.ready
      };
      return c && n.errorPolicy !== "ignore" && (u.errors = s, u.networkStatus = H.error), u;
    }, function(a) {
      var s = M_(a) ? a : new or({ networkError: a });
      throw o >= r.lastRequestId && r.markError(s), s;
    });
  }, e.prototype.fetchConcastWithInfo = function(r, t, n, o) {
    var i = this;
    n === void 0 && (n = H.loading), o === void 0 && (o = t.query);
    var a = this.getVariables(o, t.variables), s = this.getQuery(r), c = this.defaultOptions.watchQuery, u = t.fetchPolicy, l = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, f = t.errorPolicy, _ = f === void 0 ? c && c.errorPolicy || "none" : f, d = t.returnPartialData, h = d === void 0 ? !1 : d, m = t.notifyOnNetworkStatusChange, T = m === void 0 ? !1 : m, p = t.context, R = p === void 0 ? {} : p, O = Object.assign({}, t, {
      query: o,
      variables: a,
      fetchPolicy: l,
      errorPolicy: _,
      returnPartialData: h,
      notifyOnNetworkStatusChange: T,
      context: R
    }), b = function(M) {
      O.variables = M;
      var x = i.fetchQueryByPolicy(s, O, n);
      return O.fetchPolicy !== "standby" && x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", t), x;
    }, y = function() {
      return i.fetchCancelFns.delete(r);
    };
    this.fetchCancelFns.set(r, function(M) {
      y(), setTimeout(function() {
        return g.cancel(M);
      });
    });
    var g, I;
    if (this.getDocumentInfo(O.query).hasClientExports)
      g = new cr(this.localState.addExportedVariables(O.query, O.variables, O.context).then(b).then(function(M) {
        return M.sources;
      })), I = !0;
    else {
      var A = b(O.variables);
      I = A.fromLink, g = new cr(A.sources);
    }
    return g.promise.then(y, y), {
      concast: g,
      fromLink: I
    };
  }, e.prototype.refetchQueries = function(r) {
    var t = this, n = r.updateCache, o = r.include, i = r.optimistic, a = i === void 0 ? !1 : i, s = r.removeOptimistic, c = s === void 0 ? a ? Eo("refetchQueries") : void 0 : s, u = r.onQueryUpdated, l = /* @__PURE__ */ new Map();
    o && this.getObservableQueries(o).forEach(function(_, d) {
      l.set(d, {
        oq: _,
        lastDiff: t.getQuery(d).getDiff()
      });
    });
    var f = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && c || !1,
      removeOptimistic: c,
      onWatchUpdated: function(_, d, h) {
        var m = _.watcher instanceof wn && _.watcher.observableQuery;
        if (m) {
          if (u) {
            l.delete(m.queryId);
            var T = u(m, d, h);
            return T === !0 && (T = m.refetch()), T !== !1 && f.set(m, T), T;
          }
          u !== null && l.set(m.queryId, { oq: m, lastDiff: h, diff: d });
        }
      }
    }), l.size && l.forEach(function(_, d) {
      var h = _.oq, m = _.lastDiff, T = _.diff, p;
      if (u) {
        if (!T) {
          var R = h.queryInfo;
          R.reset(), T = R.getDiff();
        }
        p = u(h, T, m);
      }
      (!u || p === !0) && (p = h.refetch()), p !== !1 && f.set(h, p), d.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(d);
    }), c && this.cache.removeOptimistic(c), f;
  }, e.prototype.fetchQueryByPolicy = function(r, t, n) {
    var o = this, i = t.query, a = t.variables, s = t.fetchPolicy, c = t.refetchWritePolicy, u = t.errorPolicy, l = t.returnPartialData, f = t.context, _ = t.notifyOnNetworkStatusChange, d = r.networkStatus;
    r.init({
      document: i,
      variables: a,
      networkStatus: n
    });
    var h = function() {
      return r.getDiff();
    }, m = function(b, y) {
      y === void 0 && (y = r.networkStatus || H.loading);
      var g = b.result;
      globalThis.__DEV__ !== !1 && !l && !B(g, {}) && hc(b.missing);
      var I = function(A) {
        return C.of(E({ data: A, loading: Zr(y), networkStatus: y }, b.complete ? null : { partial: !0 }));
      };
      return g && o.getDocumentInfo(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: g },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(A) {
        return I(A.data || void 0);
      }) : u === "none" && y === H.refetch && Array.isArray(b.missing) ? I(void 0) : I(g);
    }, T = s === "no-cache" ? 0 : n === H.refetch && c !== "merge" ? 1 : 2, p = function() {
      return o.getResultsFromLink(r, T, {
        query: i,
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: u
      });
    }, R = _ && typeof d == "number" && d !== n && Zr(n);
    switch (s) {
      default:
      case "cache-first": {
        var O = h();
        return O.complete ? {
          fromLink: !1,
          sources: [m(O, r.markReady())]
        } : l || R ? {
          fromLink: !0,
          sources: [m(O), p()]
        } : { fromLink: !0, sources: [p()] };
      }
      case "cache-and-network": {
        var O = h();
        return O.complete || l || R ? {
          fromLink: !0,
          sources: [m(O), p()]
        } : { fromLink: !0, sources: [p()] };
      }
      case "cache-only":
        return {
          fromLink: !1,
          sources: [m(h(), r.markReady())]
        };
      case "network-only":
        return R ? {
          fromLink: !0,
          sources: [m(h()), p()]
        } : { fromLink: !0, sources: [p()] };
      case "no-cache":
        return R ? {
          fromLink: !0,
          sources: [m(r.getDiff()), p()]
        } : { fromLink: !0, sources: [p()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(r) {
    return r && !this.queries.has(r) && this.queries.set(r, new wn(this, r)), this.queries.get(r);
  }, e.prototype.prepareContext = function(r) {
    r === void 0 && (r = {});
    var t = this.localState.prepareContext(r);
    return E(E({}, t), { clientAwareness: this.clientAwareness });
  }, e;
}(), os = !1, Xd = function() {
  function e(r) {
    var t = this;
    if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !r.cache)
      throw z(13);
    var n = r.uri, o = r.credentials, i = r.headers, a = r.cache, s = r.documentTransform, c = r.ssrMode, u = c === void 0 ? !1 : c, l = r.ssrForceFetchDelay, f = l === void 0 ? 0 : l, _ = r.connectToDevTools, d = _ === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : _, h = r.queryDeduplication, m = h === void 0 ? !0 : h, T = r.defaultOptions, p = r.assumeImmutableResults, R = p === void 0 ? a.assumeImmutableResults : p, O = r.resolvers, b = r.typeDefs, y = r.fragmentMatcher, g = r.name, I = r.version, A = r.link;
    A || (A = n ? new rd({ uri: n, credentials: o, headers: i }) : Ar.empty()), this.link = A, this.cache = a, this.disableNetworkFetches = u || f > 0, this.queryDeduplication = m, this.defaultOptions = T || /* @__PURE__ */ Object.create(null), this.typeDefs = b, f && setTimeout(function() {
      return t.disableNetworkFetches = !1;
    }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = di, this.localState = new pc({
      cache: a,
      client: this,
      resolvers: O,
      fragmentMatcher: y
    }), this.queryManager = new Wd({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform: s,
      queryDeduplication: m,
      ssrMode: u,
      clientAwareness: {
        name: g,
        version: I
      },
      localState: this.localState,
      assumeImmutableResults: R,
      onBroadcast: d ? function() {
        t.devToolsHookCb && t.devToolsHookCb({
          action: {},
          state: {
            queries: t.queryManager.getQueryStore(),
            mutations: t.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: t.cache.extract(!0)
        });
      } : void 0
    }), d && this.connectToDevTools();
  }
  return e.prototype.connectToDevTools = function() {
    if (typeof window == "object") {
      var r = window, t = Symbol.for("apollo.devtools");
      (r[t] = r[t] || []).push(this), r.__APOLLO_CLIENT__ = this;
    }
    !os && globalThis.__DEV__ !== !1 && (os = !0, setTimeout(function() {
      if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var n = window.navigator, o = n && n.userAgent, i = void 0;
        typeof o == "string" && (o.indexOf("Chrome/") > -1 ? i = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : o.indexOf("Firefox/") > -1 && (i = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), i && globalThis.__DEV__ !== !1 && S.log("Download the Apollo DevTools for a better development experience: %s", i);
      }
    }, 1e4));
  }, Object.defineProperty(e.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(r) {
    return this.defaultOptions.watchQuery && (r = gn(this.defaultOptions.watchQuery, r)), this.disableNetworkFetches && (r.fetchPolicy === "network-only" || r.fetchPolicy === "cache-and-network") && (r = E(E({}, r), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(r);
  }, e.prototype.query = function(r) {
    return this.defaultOptions.query && (r = gn(this.defaultOptions.query, r)), S(r.fetchPolicy !== "cache-and-network", 14), this.disableNetworkFetches && r.fetchPolicy === "network-only" && (r = E(E({}, r), { fetchPolicy: "cache-first" })), this.queryManager.query(r);
  }, e.prototype.mutate = function(r) {
    return this.defaultOptions.mutate && (r = gn(this.defaultOptions.mutate, r)), this.queryManager.mutate(r);
  }, e.prototype.subscribe = function(r) {
    return this.queryManager.startGraphQLSubscription(r);
  }, e.prototype.readQuery = function(r, t) {
    return t === void 0 && (t = !1), this.cache.readQuery(r, t);
  }, e.prototype.readFragment = function(r, t) {
    return t === void 0 && (t = !1), this.cache.readFragment(r, t);
  }, e.prototype.writeQuery = function(r) {
    var t = this.cache.writeQuery(r);
    return r.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, e.prototype.writeFragment = function(r) {
    var t = this.cache.writeFragment(r);
    return r.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, e.prototype.__actionHookForDevTools = function(r) {
    this.devToolsHookCb = r;
  }, e.prototype.__requestRaw = function(r) {
    return No(this.link, r);
  }, e.prototype.resetStore = function() {
    var r = this;
    return Promise.resolve().then(function() {
      return r.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(r.resetStoreCallbacks.map(function(t) {
        return t();
      }));
    }).then(function() {
      return r.reFetchObservableQueries();
    });
  }, e.prototype.clearStore = function() {
    var r = this;
    return Promise.resolve().then(function() {
      return r.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(r.clearStoreCallbacks.map(function(t) {
        return t();
      }));
    });
  }, e.prototype.onResetStore = function(r) {
    var t = this;
    return this.resetStoreCallbacks.push(r), function() {
      t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(n) {
        return n !== r;
      });
    };
  }, e.prototype.onClearStore = function(r) {
    var t = this;
    return this.clearStoreCallbacks.push(r), function() {
      t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(n) {
        return n !== r;
      });
    };
  }, e.prototype.reFetchObservableQueries = function(r) {
    return this.queryManager.reFetchObservableQueries(r);
  }, e.prototype.refetchQueries = function(r) {
    var t = this.queryManager.refetchQueries(r), n = [], o = [];
    t.forEach(function(a, s) {
      n.push(s), o.push(a);
    });
    var i = Promise.all(o);
    return i.queries = n, i.results = o, i.catch(function(a) {
      globalThis.__DEV__ !== !1 && S.debug(15, a);
    }), i;
  }, e.prototype.getObservableQueries = function(r) {
    return r === void 0 && (r = "active"), this.queryManager.getObservableQueries(r);
  }, e.prototype.extract = function(r) {
    return this.cache.extract(r);
  }, e.prototype.restore = function(r) {
    return this.cache.restore(r);
  }, e.prototype.addResolvers = function(r) {
    this.localState.addResolvers(r);
  }, e.prototype.setResolvers = function(r) {
    this.localState.setResolvers(r);
  }, e.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, e.prototype.setLocalStateFragmentMatcher = function(r) {
    this.localState.setFragmentMatcher(r);
  }, e.prototype.setLink = function(r) {
    this.link = this.queryManager.link = r;
  }, e;
}();
function Kd(e) {
  return new Ar(function(r, t) {
    var n = ye(r, []);
    return new C(function(o) {
      var i, a = !1;
      return Promise.resolve(n).then(function(s) {
        return e(s, r.getContext());
      }).then(r.setContext).then(function() {
        a || (i = t(r).subscribe({
          next: o.next.bind(o),
          error: o.error.bind(o),
          complete: o.complete.bind(o)
        }));
      }).catch(o.error.bind(o)), function() {
        a = !0, i && i.unsubscribe();
      };
    });
  });
}
const $d = "code_gear", mc = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", qd = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
}, Yd = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, Jd = (e) => typeof e == "string";
class Qd {
  constructor(r) {
    this.isDisabled = !1, this.isDisabled = r ?? this.isDisabled;
  }
  get(r, t) {
    if (this.isDisabled)
      return t;
    const n = localStorage.getItem(this.withPrefix(r));
    return n ? zd(n) ? JSON.parse(n) : n : t;
  }
  set(r, t) {
    if (!(this.isDisabled || !(r in Yd))) {
      if (Jd(t))
        return localStorage.setItem(this.withPrefix(r), t);
      localStorage.setItem(this.withPrefix(r), JSON.stringify(t));
    }
  }
  clear(r) {
    if (r)
      return localStorage.removeItem(this.withPrefix(r));
    localStorage.clear();
  }
  withPrefix(r) {
    return `${$d}__${r}`;
  }
}
const zd = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, Zd = `${mc}/${qd._GRAPHQL}`, eh = new Qd(), rh = Wu({
  uri: Zd
}), th = Kd((e, { headers: r }) => {
  const t = eh.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...r,
      Authorization: `Bearer ${t}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
});
new Xd({
  cache: new Bd(),
  link: th.concat(rh)
});
function Ec(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: nh } = Object.prototype, { getPrototypeOf: wi } = Object, sn = ((e) => (r) => {
  const t = nh.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Te = (e) => (e = e.toLowerCase(), (r) => sn(r) === e), un = (e) => (r) => typeof r === e, { isArray: Sr } = Array, et = un("undefined");
function oh(e) {
  return e !== null && !et(e) && e.constructor !== null && !et(e.constructor) && re(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Tc = Te("ArrayBuffer");
function ih(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Tc(e.buffer), r;
}
const ah = un("string"), re = un("function"), Oc = un("number"), cn = (e) => e !== null && typeof e == "object", sh = (e) => e === !0 || e === !1, Pt = (e) => {
  if (sn(e) !== "object")
    return !1;
  const r = wi(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, uh = Te("Date"), ch = Te("File"), lh = Te("Blob"), fh = Te("FileList"), _h = (e) => cn(e) && re(e.pipe), dh = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || re(e.append) && ((r = sn(e)) === "formdata" || // detect form-data instance
  r === "object" && re(e.toString) && e.toString() === "[object FormData]"));
}, hh = Te("URLSearchParams"), ph = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function st(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Sr(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], r.call(null, e[s], s, e);
  }
}
function Rc(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const vc = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), bc = (e) => !et(e) && e !== vc;
function Bo() {
  const { caseless: e } = bc(this) && this || {}, r = {}, t = (n, o) => {
    const i = e && Rc(r, o) || o;
    Pt(r[i]) && Pt(n) ? r[i] = Bo(r[i], n) : Pt(n) ? r[i] = Bo({}, n) : Sr(n) ? r[i] = n.slice() : r[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && st(arguments[n], t);
  return r;
}
const mh = (e, r, t, { allOwnKeys: n } = {}) => (st(r, (o, i) => {
  t && re(o) ? e[i] = Ec(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), Eh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Th = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, Oh = (e, r, t, n) => {
  let o, i, a;
  const s = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, r)) && !s[a] && (r[a] = e[a], s[a] = !0);
    e = t !== !1 && wi(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, Rh = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, vh = (e) => {
  if (!e)
    return null;
  if (Sr(e))
    return e;
  let r = e.length;
  if (!Oc(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, bh = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && wi(Uint8Array)), gh = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, Ih = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, yh = Te("HTMLFormElement"), Nh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), is = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Ah = Te("RegExp"), gc = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  st(t, (o, i) => {
    let a;
    (a = r(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, Sh = (e) => {
  gc(e, (r, t) => {
    if (re(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (re(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Dh = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Sr(e) ? n(e) : n(String(e).split(r)), t;
}, Uh = () => {
}, Ph = (e, r) => (e = +e, Number.isFinite(e) ? e : r), Hn = "abcdefghijklmnopqrstuvwxyz", as = "0123456789", Ic = {
  DIGIT: as,
  ALPHA: Hn,
  ALPHA_DIGIT: Hn + Hn.toUpperCase() + as
}, wh = (e = 16, r = Ic.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function Hh(e) {
  return !!(e && re(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Gh = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (cn(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const i = Sr(n) ? [] : {};
        return st(n, (a, s) => {
          const c = t(a, o + 1);
          !et(c) && (i[s] = c);
        }), r[o] = void 0, i;
      }
    }
    return n;
  };
  return t(e, 0);
}, Ch = Te("AsyncFunction"), kh = (e) => e && (cn(e) || re(e)) && re(e.then) && re(e.catch), v = {
  isArray: Sr,
  isArrayBuffer: Tc,
  isBuffer: oh,
  isFormData: dh,
  isArrayBufferView: ih,
  isString: ah,
  isNumber: Oc,
  isBoolean: sh,
  isObject: cn,
  isPlainObject: Pt,
  isUndefined: et,
  isDate: uh,
  isFile: ch,
  isBlob: lh,
  isRegExp: Ah,
  isFunction: re,
  isStream: _h,
  isURLSearchParams: hh,
  isTypedArray: bh,
  isFileList: fh,
  forEach: st,
  merge: Bo,
  extend: mh,
  trim: ph,
  stripBOM: Eh,
  inherits: Th,
  toFlatObject: Oh,
  kindOf: sn,
  kindOfTest: Te,
  endsWith: Rh,
  toArray: vh,
  forEachEntry: gh,
  matchAll: Ih,
  isHTMLForm: yh,
  hasOwnProperty: is,
  hasOwnProp: is,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gc,
  freezeMethods: Sh,
  toObjectSet: Dh,
  toCamelCase: Nh,
  noop: Uh,
  toFiniteNumber: Ph,
  findKey: Rc,
  global: vc,
  isContextDefined: bc,
  ALPHABET: Ic,
  generateString: wh,
  isSpecCompliantForm: Hh,
  toJSONObject: Gh,
  isAsyncFn: Ch,
  isThenable: kh
};
function P(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
v.inherits(P, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yc = P.prototype, Nc = {};
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
  Nc[e] = { value: e };
});
Object.defineProperties(P, Nc);
Object.defineProperty(yc, "isAxiosError", { value: !0 });
P.from = (e, r, t, n, o, i) => {
  const a = Object.create(yc);
  return v.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), P.call(a, e.message, r, t, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Lh = null;
function Mo(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Ac(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ss(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = Ac(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function Bh(e) {
  return v.isArray(e) && !e.some(Mo);
}
const Mh = v.toFlatObject(v, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function ln(e, r, t) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = v.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, T) {
    return !v.isUndefined(T[m]);
  });
  const n = t.metaTokens, o = t.visitor || l, i = t.dots, a = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(r);
  if (!v.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null)
      return "";
    if (v.isDate(h))
      return h.toISOString();
    if (!c && v.isBlob(h))
      throw new P("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(h) || v.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, m, T) {
    let p = h;
    if (h && !T && typeof h == "object") {
      if (v.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (v.isArray(h) && Bh(h) || (v.isFileList(h) || v.endsWith(m, "[]")) && (p = v.toArray(h)))
        return m = Ac(m), p.forEach(function(O, b) {
          !(v.isUndefined(O) || O === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ss([m], b, i) : a === null ? m : m + "[]",
            u(O)
          );
        }), !1;
    }
    return Mo(h) ? !0 : (r.append(ss(T, m, i), u(h)), !1);
  }
  const f = [], _ = Object.assign(Mh, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Mo
  });
  function d(h, m) {
    if (!v.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(h), v.forEach(h, function(p, R) {
        (!(v.isUndefined(p) || p === null) && o.call(
          r,
          p,
          v.isString(R) ? R.trim() : R,
          m,
          _
        )) === !0 && d(p, m ? m.concat(R) : [R]);
      }), f.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return d(e), r;
}
function us(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function Hi(e, r) {
  this._pairs = [], e && ln(e, this, r);
}
const Sc = Hi.prototype;
Sc.append = function(r, t) {
  this._pairs.push([r, t]);
};
Sc.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, us);
  } : us;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function xh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dc(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || xh, o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = v.isURLSearchParams(r) ? r.toString() : new Hi(r, t).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Fh {
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
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
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
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    v.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const cs = Fh, Uc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jh = typeof URLSearchParams < "u" ? URLSearchParams : Hi, Vh = typeof FormData < "u" ? FormData : null, Wh = typeof Blob < "u" ? Blob : null, Xh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Kh = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), pe = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jh,
    FormData: Vh,
    Blob: Wh
  },
  isStandardBrowserEnv: Xh,
  isStandardBrowserWebWorkerEnv: Kh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function $h(e, r) {
  return ln(e, new pe.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, i) {
      return pe.isNode && v.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function qh(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Yh(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let i;
  for (n = 0; n < o; n++)
    i = t[n], r[i] = e[i];
  return r;
}
function Pc(e) {
  function r(t, n, o, i) {
    let a = t[i++];
    const s = Number.isFinite(+a), c = i >= t.length;
    return a = !a && v.isArray(o) ? o.length : a, c ? (v.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !v.isObject(o[a])) && (o[a] = []), r(t, n, o[a], i) && v.isArray(o[a]) && (o[a] = Yh(o[a])), !s);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const t = {};
    return v.forEachEntry(e, (n, o) => {
      r(qh(n), o, t, 0);
    }), t;
  }
  return null;
}
function Jh(e, r, t) {
  if (v.isString(e))
    try {
      return (r || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const Gi = {
  transitional: Uc,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = v.isObject(r);
    if (i && v.isHTMLForm(r) && (r = new FormData(r)), v.isFormData(r))
      return o && o ? JSON.stringify(Pc(r)) : r;
    if (v.isArrayBuffer(r) || v.isBuffer(r) || v.isStream(r) || v.isFile(r) || v.isBlob(r))
      return r;
    if (v.isArrayBufferView(r))
      return r.buffer;
    if (v.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return $h(r, this.formSerializer).toString();
      if ((s = v.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ln(
          s ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), Jh(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || Gi.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && v.isString(r) && (n && !this.responseType || o)) {
      const a = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? P.from(s, P.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return r;
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
    FormData: pe.classes.FormData,
    Blob: pe.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Gi.headers[e] = {};
});
const Ci = Gi, Qh = v.toObjectSet([
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
]), zh = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), t = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!t || r[t] && Qh[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, ls = Symbol("internals");
function Fr(e) {
  return e && String(e).trim().toLowerCase();
}
function wt(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(wt) : String(e);
}
function Zh(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const ep = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Gn(e, r, t, n, o) {
  if (v.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!v.isString(r)) {
    if (v.isString(n))
      return r.indexOf(n) !== -1;
    if (v.isRegExp(n))
      return n.test(r);
  }
}
function rp(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function tp(e, r) {
  const t = v.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, i, a) {
        return this[n].call(this, r, o, i, a);
      },
      configurable: !0
    });
  });
}
class fn {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function i(s, c, u) {
      const l = Fr(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = v.findKey(o, l);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = wt(s));
    }
    const a = (s, c) => v.forEach(s, (u, l) => i(u, l, c));
    return v.isPlainObject(r) || r instanceof this.constructor ? a(r, t) : v.isString(r) && (r = r.trim()) && !ep(r) ? a(zh(r), t) : r != null && i(t, r, n), this;
  }
  get(r, t) {
    if (r = Fr(r), r) {
      const n = v.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return Zh(o);
        if (v.isFunction(t))
          return t.call(this, o, n);
        if (v.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = Fr(r), r) {
      const n = v.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || Gn(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Fr(a), a) {
        const s = v.findKey(n, a);
        s && (!t || Gn(n, n[s], s, t)) && (delete n[s], o = !0);
      }
    }
    return v.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const i = t[n];
      (!r || Gn(this, this[i], i, r, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return v.forEach(this, (o, i) => {
      const a = v.findKey(n, i);
      if (a) {
        t[a] = wt(o), delete t[i];
        return;
      }
      const s = r ? rp(i) : String(i).trim();
      s !== i && delete t[i], t[s] = wt(o), n[s] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && v.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[ls] = this[ls] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Fr(a);
      n[s] || (tp(o, a), n[s] = !0);
    }
    return v.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
fn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(fn.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
v.freezeMethods(fn);
const Ie = fn;
function Cn(e, r) {
  const t = this || Ci, n = r || t, o = Ie.from(n.headers);
  let i = n.data;
  return v.forEach(e, function(s) {
    i = s.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function wc(e) {
  return !!(e && e.__CANCEL__);
}
function ut(e, r, t) {
  P.call(this, e ?? "canceled", P.ERR_CANCELED, r, t), this.name = "CanceledError";
}
v.inherits(ut, P, {
  __CANCEL__: !0
});
function np(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new P(
    "Request failed with status code " + t.status,
    [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const op = pe.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, n, o, i, a, s) {
        const c = [];
        c.push(t + "=" + encodeURIComponent(n)), v.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), v.isString(i) && c.push("path=" + i), v.isString(a) && c.push("domain=" + a), s === !0 && c.push("secure"), document.cookie = c.join("; ");
      },
      read: function(t) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
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
function ip(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ap(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Hc(e, r) {
  return e && !ip(r) ? ap(e, r) : r;
}
const sp = pe.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return r && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
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
    return n = o(window.location.href), function(a) {
      const s = v.isString(a) ? o(a) : a;
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
function up(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function cp(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(c) {
    const u = Date.now(), l = n[i];
    a || (a = u), t[o] = c, n[o] = u;
    let f = i, _ = 0;
    for (; f !== o; )
      _ += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < r)
      return;
    const d = l && u - l;
    return d ? Math.round(_ * 1e3 / d) : void 0;
  };
}
function fs(e, r) {
  let t = 0;
  const n = cp(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - t, c = n(s), u = i <= a;
    t = i;
    const l = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && u ? (a - i) / c : void 0,
      event: o
    };
    l[r ? "download" : "upload"] = !0, e(l);
  };
}
const lp = typeof XMLHttpRequest < "u", fp = lp && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const i = Ie.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    let u;
    v.isFormData(o) && (pe.isStandardBrowserEnv || pe.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? v.isString(u = i.getContentType()) && i.setContentType(u.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const f = Hc(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Dc(f, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function _() {
      if (!l)
        return;
      const h = Ie.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: h,
        config: e,
        request: l
      };
      np(function(R) {
        t(R), c();
      }, function(R) {
        n(R), c();
      }, T), l = null;
    }
    if ("onloadend" in l ? l.onloadend = _ : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, l.onabort = function() {
      l && (n(new P("Request aborted", P.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new P("Network Error", P.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Uc;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new P(
        m,
        T.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
        e,
        l
      )), l = null;
    }, pe.isStandardBrowserEnv) {
      const h = (e.withCredentials || sp(f)) && e.xsrfCookieName && op.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in l && v.forEach(i.toJSON(), function(m, T) {
      l.setRequestHeader(T, m);
    }), v.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), a && a !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", fs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", fs(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      l && (n(!h || h.type ? new ut(null, e, l) : h), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = up(f);
    if (d && pe.protocols.indexOf(d) === -1) {
      n(new P("Unsupported protocol " + d + ":", P.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(o || null);
  });
}, xo = {
  http: Lh,
  xhr: fp
};
v.forEach(xo, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const _s = (e) => `- ${e}`, _p = (e) => v.isFunction(e) || e === null || e === !1, Gc = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    const o = {};
    for (let i = 0; i < r; i++) {
      t = e[i];
      let a;
      if (n = t, !_p(t) && (n = xo[(a = String(t)).toLowerCase()], n === void 0))
        throw new P(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = r ? i.length > 1 ? `since :
` + i.map(_s).join(`
`) : " " + _s(i[0]) : "as no adapter specified";
      throw new P(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: xo
};
function kn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ut(null, e);
}
function ds(e) {
  return kn(e), e.headers = Ie.from(e.headers), e.data = Cn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gc.getAdapter(e.adapter || Ci.adapter)(e).then(function(n) {
    return kn(e), n.data = Cn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ie.from(n.headers), n;
  }, function(n) {
    return wc(n) || (kn(e), n && n.response && (n.response.data = Cn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ie.from(n.response.headers))), Promise.reject(n);
  });
}
const hs = (e) => e instanceof Ie ? e.toJSON() : e;
function vr(e, r) {
  r = r || {};
  const t = {};
  function n(u, l, f) {
    return v.isPlainObject(u) && v.isPlainObject(l) ? v.merge.call({ caseless: f }, u, l) : v.isPlainObject(l) ? v.merge({}, l) : v.isArray(l) ? l.slice() : l;
  }
  function o(u, l, f) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(u))
        return n(void 0, u, f);
    } else
      return n(u, l, f);
  }
  function i(u, l) {
    if (!v.isUndefined(l))
      return n(void 0, l);
  }
  function a(u, l) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function s(u, l, f) {
    if (f in r)
      return n(u, l);
    if (f in e)
      return n(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
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
    headers: (u, l) => o(hs(u), hs(l), !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, r)), function(l) {
    const f = c[l] || o, _ = f(e[l], r[l], l);
    v.isUndefined(_) && f !== s || (t[l] = _);
  }), t;
}
const Cc = "1.5.1", ki = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ki[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const ps = {};
ki.transitional = function(r, t, n) {
  function o(i, a) {
    return "[Axios v" + Cc + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (r === !1)
      throw new P(
        o(a, " has been removed" + (t ? " in " + t : "")),
        P.ERR_DEPRECATED
      );
    return t && !ps[a] && (ps[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, a, s) : !0;
  };
};
function dp(e, r, t) {
  if (typeof e != "object")
    throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = r[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new P("option " + i + " must be " + c, P.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new P("Unknown option " + i, P.ERR_BAD_OPTION);
  }
}
const Fo = {
  assertOptions: dp,
  validators: ki
}, He = Fo.validators;
class Xt {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new cs(),
      response: new cs()
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
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = vr(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: i } = t;
    n !== void 0 && Fo.assertOptions(n, {
      silentJSONParsing: He.transitional(He.boolean),
      forcedJSONParsing: He.transitional(He.boolean),
      clarifyTimeoutError: He.transitional(He.boolean)
    }, !1), o != null && (v.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Fo.assertOptions(o, {
      encode: He.function,
      serialize: He.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && v.merge(
      i.common,
      i[t.method]
    );
    i && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), t.headers = Ie.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (c = c && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, _;
    if (!c) {
      const h = [ds.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, u), _ = h.length, l = Promise.resolve(t); f < _; )
        l = l.then(h[f++], h[f++]);
      return l;
    }
    _ = s.length;
    let d = t;
    for (f = 0; f < _; ) {
      const h = s[f++], m = s[f++];
      try {
        d = h(d);
      } catch (T) {
        m.call(this, T);
        break;
      }
    }
    try {
      l = ds.call(this, d);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, _ = u.length; f < _; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(r) {
    r = vr(this.defaults, r);
    const t = Hc(r.baseURL, r.url);
    return Dc(t, r.params, r.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function(r) {
  Xt.prototype[r] = function(t, n) {
    return this.request(vr(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, a, s) {
      return this.request(vr(s || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Xt.prototype[r] = t(), Xt.prototype[r + "Form"] = t(!0);
});
const Ht = Xt;
class Li {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, r(function(i, a, s) {
      n.reason || (n.reason = new ut(i, a, s), t(n.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Li(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const hp = Li;
function pp(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function mp(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const jo = {
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
Object.entries(jo).forEach(([e, r]) => {
  jo[r] = e;
});
const Ep = jo;
function kc(e) {
  const r = new Ht(e), t = Ec(Ht.prototype.request, r);
  return v.extend(t, Ht.prototype, r, { allOwnKeys: !0 }), v.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return kc(vr(e, o));
  }, t;
}
const V = kc(Ci);
V.Axios = Ht;
V.CanceledError = ut;
V.CancelToken = hp;
V.isCancel = wc;
V.VERSION = Cc;
V.toFormData = ln;
V.AxiosError = P;
V.Cancel = V.CanceledError;
V.all = function(r) {
  return Promise.all(r);
};
V.spread = pp;
V.isAxiosError = mp;
V.mergeConfig = vr;
V.AxiosHeaders = Ie;
V.formToJSON = (e) => Pc(v.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = Gc.getAdapter;
V.HttpStatusCode = Ep;
V.default = V;
const Tp = V;
Tp.create({
  baseURL: mc,
  withCredentials: !0
});
const Lc = ({ when: e, children: r }) => e ? r : null, Bc = Ru({}), Op = async () => Promise.all([
  import("./react-spring_web.modern-61edb6fc.mjs"),
  import("./use-gesture-react.esm-51ac5389.mjs")
]), Mc = ({ children: e }) => {
  const r = sa(), t = sa(), n = Nv(), o = async () => {
    const [a, s] = await Op();
    r.current = a, t.current = s, n.on();
  };
  _i(() => {
    o();
  }, []);
  const i = cf(
    () => ({
      Spring: r.current,
      Gesture: t.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ J(Bc.Provider, { value: i, children: /* @__PURE__ */ J(Lc, { when: n.val, children: e }) });
}, xc = () => vu(Bc);
var Q;
Q = { __e: function(e, r, t, n) {
  for (var o, i, a; r = r.__; )
    if ((o = r.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var de, Ln, ms, Fc = [], Bn = [], Es = Q.__b, Ts = Q.__r, Os = Q.diffed, Rs = Q.__c, vs = Q.unmount;
function Rp() {
  for (var e; e = Fc.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Gt), e.__H.__h.forEach(Vo), e.__H.__h = [];
      } catch (r) {
        e.__H.__h = [], Q.__e(r, e.__v);
      }
}
Q.__b = function(e) {
  de = null, Es && Es(e);
}, Q.__r = function(e) {
  Ts && Ts(e);
  var r = (de = e.__c).__H;
  r && (Ln === de ? (r.__h = [], de.__h = [], r.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Bn, t.__N = t.i = void 0;
  })) : (r.__h.forEach(Gt), r.__h.forEach(Vo), r.__h = [])), Ln = de;
}, Q.diffed = function(e) {
  Os && Os(e);
  var r = e.__c;
  r && r.__H && (r.__H.__h.length && (Fc.push(r) !== 1 && ms === Q.requestAnimationFrame || ((ms = Q.requestAnimationFrame) || vp)(Rp)), r.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Bn && (t.__ = t.__V), t.i = void 0, t.__V = Bn;
  })), Ln = de = null;
}, Q.__c = function(e, r) {
  r.some(function(t) {
    try {
      t.__h.forEach(Gt), t.__h = t.__h.filter(function(n) {
        return !n.__ || Vo(n);
      });
    } catch (n) {
      r.some(function(o) {
        o.__h && (o.__h = []);
      }), r = [], Q.__e(n, t.__v);
    }
  }), Rs && Rs(e, r);
}, Q.unmount = function(e) {
  vs && vs(e);
  var r, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      Gt(n);
    } catch (o) {
      r = o;
    }
  }), t.__H = void 0, r && Q.__e(r, t.__v));
};
var bs = typeof requestAnimationFrame == "function";
function vp(e) {
  var r, t = function() {
    clearTimeout(n), bs && cancelAnimationFrame(r), setTimeout(e);
  }, n = setTimeout(t, 100);
  bs && (r = requestAnimationFrame(t));
}
function Gt(e) {
  var r = de, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), de = r;
}
function Vo(e) {
  var r = de;
  e.__c = e.__(), de = r;
}
Ru(
  {}
);
var k = "-ms-", Yr = "-moz-", w = "-webkit-", jc = "comm", _n = "rule", Bi = "decl", bp = "@import", Vc = "@keyframes", gp = "@layer", Ip = Math.abs, Mi = String.fromCharCode, Wo = Object.assign;
function yp(e, r) {
  return $(e, 0) ^ 45 ? (((r << 2 ^ $(e, 0)) << 2 ^ $(e, 1)) << 2 ^ $(e, 2)) << 2 ^ $(e, 3) : 0;
}
function Wc(e) {
  return e.trim();
}
function be(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function D(e, r, t) {
  return e.replace(r, t);
}
function Ct(e, r) {
  return e.indexOf(r);
}
function $(e, r) {
  return e.charCodeAt(r) | 0;
}
function br(e, r, t) {
  return e.slice(r, t);
}
function he(e) {
  return e.length;
}
function Xc(e) {
  return e.length;
}
function Wr(e, r) {
  return r.push(e), e;
}
function Np(e, r) {
  return e.map(r).join("");
}
function gs(e, r) {
  return e.filter(function(t) {
    return !be(t, r);
  });
}
var dn = 1, gr = 1, Kc = 0, te = 0, j = 0, Dr = "";
function hn(e, r, t, n, o, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: dn, column: gr, length: a, return: "", siblings: s };
}
function Ce(e, r) {
  return Wo(hn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function ir(e) {
  for (; e.root; )
    e = Ce(e.root, { children: [e] });
  Wr(e, e.siblings);
}
function Ap() {
  return j;
}
function Sp() {
  return j = te > 0 ? $(Dr, --te) : 0, gr--, j === 10 && (gr = 1, dn--), j;
}
function se() {
  return j = te < Kc ? $(Dr, te++) : 0, gr++, j === 10 && (gr = 1, dn++), j;
}
function ze() {
  return $(Dr, te);
}
function kt() {
  return te;
}
function pn(e, r) {
  return br(Dr, e, r);
}
function Xo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Dp(e) {
  return dn = gr = 1, Kc = he(Dr = e), te = 0, [];
}
function Up(e) {
  return Dr = "", e;
}
function Mn(e) {
  return Wc(pn(te - 1, Ko(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pp(e) {
  for (; (j = ze()) && j < 33; )
    se();
  return Xo(e) > 2 || Xo(j) > 3 ? "" : " ";
}
function wp(e, r) {
  for (; --r && se() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97); )
    ;
  return pn(e, kt() + (r < 6 && ze() == 32 && se() == 32));
}
function Ko(e) {
  for (; se(); )
    switch (j) {
      case e:
        return te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ko(j);
        break;
      case 40:
        e === 41 && Ko(e);
        break;
      case 92:
        se();
        break;
    }
  return te;
}
function Hp(e, r) {
  for (; se() && e + j !== 47 + 10; )
    if (e + j === 42 + 42 && ze() === 47)
      break;
  return "/*" + pn(r, te - 1) + "*" + Mi(e === 47 ? e : se());
}
function Gp(e) {
  for (; !Xo(ze()); )
    se();
  return pn(e, te);
}
function Cp(e) {
  return Up(Lt("", null, null, null, [""], e = Dp(e), 0, [0], e));
}
function Lt(e, r, t, n, o, i, a, s, c) {
  for (var u = 0, l = 0, f = a, _ = 0, d = 0, h = 0, m = 1, T = 1, p = 1, R = 0, O = "", b = o, y = i, g = n, I = O; T; )
    switch (h = R, R = se()) {
      case 40:
        if (h != 108 && $(I, f - 1) == 58) {
          Ct(I += D(Mn(R), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Mn(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += Pp(h);
        break;
      case 92:
        I += wp(kt() - 1, 7);
        continue;
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            Wr(kp(Hp(se(), kt()), r, t, c), c);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * m:
        s[u++] = he(I) * p;
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            T = 0;
          case 59 + l:
            p == -1 && (I = D(I, /\f/g, "")), d > 0 && he(I) - f && Wr(d > 32 ? ys(I + ";", n, t, f - 1, c) : ys(D(I, " ", "") + ";", n, t, f - 2, c), c);
            break;
          case 59:
            I += ";";
          default:
            if (Wr(g = Is(I, r, t, u, l, o, s, O, b = [], y = [], f, i), i), R === 123)
              if (l === 0)
                Lt(I, r, g, g, b, i, f, s, y);
              else
                switch (_ === 99 && $(I, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lt(e, g, g, n && Wr(Is(e, g, g, 0, 0, o, s, O, o, b = [], f, y), y), o, y, f, s, n ? b : y);
                    break;
                  default:
                    Lt(I, g, g, g, [""], y, 0, s, y);
                }
        }
        u = l = d = 0, m = p = 1, O = I = "", f = a;
        break;
      case 58:
        f = 1 + he(I), d = h;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && Sp() == 125)
            continue;
        }
        switch (I += Mi(R), R * m) {
          case 38:
            p = l > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            s[u++] = (he(I) - 1) * p, p = 1;
            break;
          case 64:
            ze() === 45 && (I += Mn(se())), _ = ze(), l = f = he(O = I += Gp(kt())), R++;
            break;
          case 45:
            h === 45 && he(I) == 2 && (m = 0);
        }
    }
  return i;
}
function Is(e, r, t, n, o, i, a, s, c, u, l, f) {
  for (var _ = o - 1, d = o === 0 ? i : [""], h = Xc(d), m = 0, T = 0, p = 0; m < n; ++m)
    for (var R = 0, O = br(e, _ + 1, _ = Ip(T = a[m])), b = e; R < h; ++R)
      (b = Wc(T > 0 ? d[R] + " " + O : D(O, /&\f/g, d[R]))) && (c[p++] = b);
  return hn(e, r, t, o === 0 ? _n : s, c, u, l, f);
}
function kp(e, r, t, n) {
  return hn(e, r, t, jc, Mi(Ap()), br(e, 2, -2), 0, n);
}
function ys(e, r, t, n, o) {
  return hn(e, r, t, Bi, br(e, 0, n), br(e, n + 1, -1), n, o);
}
function $c(e, r, t) {
  switch (yp(e, r)) {
    case 5103:
      return w + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return w + e + e;
    case 4789:
      return Yr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + Yr + e + k + e + e;
    case 5936:
      switch ($(e, r + 11)) {
        case 114:
          return w + e + k + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return w + e + k + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return w + e + k + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return w + e + k + e + e;
    case 6165:
      return w + e + k + "flex-" + e + e;
    case 5187:
      return w + e + D(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + k + "flex-$1$2") + e;
    case 5443:
      return w + e + k + "flex-item-" + D(e, /flex-|-self/g, "") + (be(e, /flex-|baseline/) ? "" : k + "grid-row-" + D(e, /flex-|-self/g, "")) + e;
    case 4675:
      return w + e + k + "flex-line-pack" + D(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return w + e + k + D(e, "shrink", "negative") + e;
    case 5292:
      return w + e + k + D(e, "basis", "preferred-size") + e;
    case 6060:
      return w + "box-" + D(e, "-grow", "") + w + e + k + D(e, "grow", "positive") + e;
    case 4554:
      return w + D(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, w + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + w + e + e;
    case 4200:
      if (!be(e, /flex-|baseline/))
        return k + "grid-column-align" + br(e, r) + e;
      break;
    case 2592:
    case 3360:
      return k + D(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, be(n.props, /grid-\w+-end/);
      }) ? ~Ct(e + (t = t[r].value), "span") ? e : k + D(e, "-start", "") + e + k + "grid-row-span:" + (~Ct(t, "span") ? be(t, /\d+/) : +be(t, /\d+/) - +be(e, /\d+/)) + ";" : k + D(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return be(n.props, /grid-\w+-start/);
      }) ? e : k + D(D(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (he(e) - 1 - r > 6)
        switch ($(e, r + 1)) {
          case 109:
            if ($(e, r + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + Yr + ($(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ct(e, "stretch") ? $c(D(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return D(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, c, u) {
        return k + o + ":" + i + u + (a ? k + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if ($(e, r + 6) === 121)
        return D(e, ":", ":" + w) + e;
      break;
    case 6444:
      switch ($(e, $(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return D(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + ($(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + k + "$2box$3") + e;
        case 100:
          return D(e, ":", ":" + k) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return D(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Kt(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function Lp(e, r, t, n) {
  switch (e.type) {
    case gp:
      if (e.children.length)
        break;
    case bp:
    case Bi:
      return e.return = e.return || e.value;
    case jc:
      return "";
    case Vc:
      return e.return = e.value + "{" + Kt(e.children, n) + "}";
    case _n:
      if (!he(e.value = e.props.join(",")))
        return "";
  }
  return he(t = Kt(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Bp(e) {
  var r = Xc(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function Mp(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function xp(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bi:
        e.return = $c(e.value, e.length, t);
        return;
      case Vc:
        return Kt([Ce(e, { value: D(e.value, "@", "@" + w) })], n);
      case _n:
        if (e.length)
          return Np(t = e.props, function(o) {
            switch (be(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ir(Ce(e, { props: [D(o, /:(read-\w+)/, ":" + Yr + "$1")] })), ir(Ce(e, { props: [o] })), Wo(e, { props: gs(t, n) });
                break;
              case "::placeholder":
                ir(Ce(e, { props: [D(o, /:(plac\w+)/, ":" + w + "input-$1")] })), ir(Ce(e, { props: [D(o, /:(plac\w+)/, ":" + Yr + "$1")] })), ir(Ce(e, { props: [D(o, /:(plac\w+)/, k + "input-$1")] })), ir(Ce(e, { props: [o] })), Wo(e, { props: gs(t, n) });
                break;
            }
            return "";
          });
    }
}
var Fp = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
}, Ir = typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_ATTR) || "data-styled", xi = typeof window < "u" && "HTMLElement" in window, jp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_077857c1-e32e-42ee-a7aa-9447e17eedde", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_077857c1-e32e-42ee-a7aa-9447e17eedde", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-8b3e9261/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "develop", SYSTEMD_EXEC_PID: "576", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17745", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6510972989", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "8584985938763768423", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/39/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-8b3e9261:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_e1028ac3-326d-4f53-8713-a2b69566cb23", INVOCATION_ID: "740d7f98c06b4be9be800c77ce4397f5", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "72", GITHUB_TRIGGERING_ACTOR: "Gearonix", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-ui", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "39/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ef562b5ab2913f763dcd95e3678d612572378773", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/39/merge", GITHUB_ACTOR: "Gearonix", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-ui", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_077857c1-e32e-42ee-a7aa-9447e17eedde", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "74734213", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-8b3e9261", npm_execpath: "/tmp/xfs-8b3e9261/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_077857c1-e32e-42ee-a7aa-9447e17eedde", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_077857c1-e32e-42ee-a7aa-9447e17eedde", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/8584985938763768423", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY), Vp = {}, mn = Object.freeze([]), yr = Object.freeze({});
function qc(e, r, t) {
  return t === void 0 && (t = yr), e.theme !== t.theme && e.theme || r || t.theme;
}
var Yc = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Wp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xp = /(^-|-$)/g;
function Ns(e) {
  return e.replace(Wp, "-").replace(Xp, "");
}
var Kp = /(a)(d)/gi, As = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $o(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = As(r % 52) + t;
  return (As(r % 52) + t).replace(Kp, "$1-$2");
}
var xn, _r = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Jc = function(e) {
  return _r(5381, e);
};
function Qc(e) {
  return $o(Jc(e) >>> 0);
}
function $p(e) {
  return e.displayName || e.name || "Component";
}
function Fn(e) {
  return typeof e == "string" && !0;
}
var zc = typeof Symbol == "function" && Symbol.for, Zc = zc ? Symbol.for("react.memo") : 60115, qp = zc ? Symbol.for("react.forward_ref") : 60112, Yp = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Jp = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, el = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qp = ((xn = {})[qp] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, xn[Zc] = el, xn);
function Ss(e) {
  return ("type" in (r = e) && r.type.$$typeof) === Zc ? el : "$$typeof" in e ? Qp[e.$$typeof] : Yp;
  var r;
}
var zp = Object.defineProperty, Zp = Object.getOwnPropertyNames, Ds = Object.getOwnPropertySymbols, em = Object.getOwnPropertyDescriptor, rm = Object.getPrototypeOf, Us = Object.prototype;
function rl(e, r, t) {
  if (typeof r != "string") {
    if (Us) {
      var n = rm(r);
      n && n !== Us && rl(e, n, t);
    }
    var o = Zp(r);
    Ds && (o = o.concat(Ds(r)));
    for (var i = Ss(e), a = Ss(r), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Jp || t && t[c] || a && c in a || i && c in i)) {
        var u = em(r, c);
        try {
          zp(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function Nr(e) {
  return typeof e == "function";
}
function Fi(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Je(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function qo(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], n = 1; n < e.length; n++)
    t += r ? r + e[n] : e[n];
  return t;
}
function rt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Yo(e, r, t) {
  if (t === void 0 && (t = !1), !t && !rt(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      e[n] = Yo(e[n], r[n]);
  else if (rt(r))
    for (var n in r)
      e[n] = Yo(e[n], r[n]);
  return e;
}
function ji(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
function ct(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : ""));
}
var tm = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++)
      t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; )
        if ((i <<= 1) < 0)
          throw ct(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(r + 1), c = (a = 0, t.length); a < c; a++)
      this.tag.insertRule(s, t[a]) && (this.groupSizes[r]++, s++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var i = n; i < o; i++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, a = o; a < i; a++)
      t += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return t;
  }, e;
}(), Bt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), jn = 1, Tt = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; $t.has(jn); )
    jn++;
  var r = jn++;
  return Bt.set(e, r), $t.set(r, e), r;
}, nm = function(e, r) {
  Bt.set(e, r), $t.set(r, e);
}, om = "style[".concat(Ir, "][").concat("data-styled-version", '="').concat("6.0.8", '"]'), im = new RegExp("^".concat(Ir, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), am = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(r, n);
}, sm = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(`/*!sc*/
`), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var c = s.match(im);
      if (c) {
        var u = 0 | parseInt(c[1], 10), l = c[2];
        u !== 0 && (nm(l, u), am(e, l, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function um() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var tl = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(Ir, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ir, "active"), n.setAttribute("data-styled-version", "6.0.8");
  var a = um();
  return a && n.setAttribute("nonce", a), t.insertBefore(n, i), n;
}, cm = function() {
  function e(r) {
    this.element = tl(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === t)
          return a;
      }
      throw ct(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), lm = function() {
  function e(r) {
    this.element = tl(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), fm = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ps = xi, _m = { isServer: !xi, useCSSOMInjection: !jp }, qt = function() {
  function e(r, t, n) {
    r === void 0 && (r = yr), t === void 0 && (t = {});
    var o = this;
    this.options = E(E({}, _m), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && xi && Ps && (Ps = !1, function(i) {
      for (var a = document.querySelectorAll(om), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(Ir) !== "active" && (sm(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), ji(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(f) {
          var _ = function(p) {
            return $t.get(p);
          }(f);
          if (_ === void 0)
            return "continue";
          var d = i.names.get(_), h = a.getGroup(f);
          if (d === void 0 || h.length === 0)
            return "continue";
          var m = "".concat(Ir, ".g").concat(f, '[id="').concat(_, '"]'), T = "";
          d !== void 0 && d.forEach(function(p) {
            p.length > 0 && (T += "".concat(p, ","));
          }), c += "".concat(h).concat(m, '{content:"').concat(T, '"}').concat(`/*!sc*/
`);
        }, l = 0; l < s; l++)
          u(l);
        return c;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return Tt(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(E(E({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new fm(o) : n ? new cm(o) : new lm(o);
    }(this.options), new tm(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Tt(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(Tt(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Tt(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), dm = /&/g, hm = /^\s*\/\/.*$/gm;
function nl(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = nl(t.children, r)), t;
  });
}
function pm(e) {
  var r, t, n, o = e === void 0 ? yr : e, i = o.options, a = i === void 0 ? yr : i, s = o.plugins, c = s === void 0 ? mn : s, u = function(_, d, h) {
    return h === t || h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(r) : _;
  }, l = c.slice();
  l.push(function(_) {
    _.type === _n && _.value.includes("&") && (_.props[0] = _.props[0].replace(dm, t).replace(n, u));
  }), a.prefix && l.push(xp), l.push(Lp);
  var f = function(_, d, h, m) {
    d === void 0 && (d = ""), h === void 0 && (h = ""), m === void 0 && (m = "&"), r = m, t = d, n = new RegExp("\\".concat(t, "\\b"), "g");
    var T = _.replace(hm, ""), p = Cp(h || d ? "".concat(h, " ").concat(d, " { ").concat(T, " }") : T);
    a.namespace && (p = nl(p, a.namespace));
    var R = [];
    return Kt(p, Bp(l.concat(Mp(function(O) {
      return R.push(O);
    })))), R;
  };
  return f.hash = c.length ? c.reduce(function(_, d) {
    return d.name || ct(15), _r(_, d.name);
  }, 5381).toString() : "", f;
}
var mm = new qt(), Jo = pm(), ol = ge.createContext({ shouldForwardProp: void 0, styleSheet: mm, stylis: Jo });
ol.Consumer;
ge.createContext(void 0);
function Qo() {
  return vu(ol);
}
var Em = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Jo);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, ji(this, function() {
      throw ct(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Jo), this.name + r.hash;
  }, e;
}(), Tm = function(e) {
  return e >= "A" && e <= "Z";
};
function ws(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-")
      return e;
    Tm(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var il = function(e) {
  return e == null || e === !1 || e === "";
}, al = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !il(i) && (Array.isArray(i) && i.isCss || Nr(i) ? n.push("".concat(ws(o), ":"), i, ";") : rt(i) ? n.push.apply(n, ee(ee(["".concat(o, " {")], al(i), !1), ["}"], !1)) : n.push("".concat(ws(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Fp || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Be(e, r, t, n) {
  if (il(e))
    return [];
  if (Fi(e))
    return [".".concat(e.styledComponentId)];
  if (Nr(e)) {
    if (!Nr(i = e) || i.prototype && i.prototype.isReactComponent || !r)
      return [e];
    var o = e(r);
    return Be(o, r, t, n);
  }
  var i;
  return e instanceof Em ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : rt(e) ? al(e) : Array.isArray(e) ? Array.prototype.concat.apply(mn, e.map(function(a) {
    return Be(a, r, t, n);
  })) : [e.toString()];
}
function sl(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Nr(t) && !Fi(t))
      return !1;
  }
  return !0;
}
var Om = Jc("6.0.8"), Rm = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && sl(r), this.componentId = t, this.baseHash = _r(Om, t), this.baseStyle = n, qt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        o = Je(o, this.staticRulesId);
      else {
        var i = qo(Be(this.rules, r, t, n)), a = $o(_r(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = n(i, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        o = Je(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = _r(this.baseHash, n.hash), u = "", l = 0; l < this.rules.length; l++) {
        var f = this.rules[l];
        if (typeof f == "string")
          u += f;
        else if (f) {
          var _ = qo(Be(f, r, t, n));
          c = _r(c, _ + l), u += _;
        }
      }
      if (u) {
        var d = $o(c >>> 0);
        t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(u, ".".concat(d), void 0, this.componentId)), o = Je(o, d);
      }
    }
    return o;
  }, e;
}(), Vi = ge.createContext(void 0);
Vi.Consumer;
var Vn = {};
function vm(e, r, t) {
  var n = Fi(e), o = e, i = !Fn(e), a = r.attrs, s = a === void 0 ? mn : a, c = r.componentId, u = c === void 0 ? function(O, b) {
    var y = typeof O != "string" ? "sc" : Ns(O);
    Vn[y] = (Vn[y] || 0) + 1;
    var g = "".concat(y, "-").concat(Qc("6.0.8" + y + Vn[y]));
    return b ? "".concat(b, "-").concat(g) : g;
  }(r.displayName, r.parentComponentId) : c, l = r.displayName;
  l === void 0 && function(O) {
    return Fn(O) ? "styled.".concat(O) : "Styled(".concat($p(O), ")");
  }(e);
  var f = r.displayName && r.componentId ? "".concat(Ns(r.displayName), "-").concat(r.componentId) : r.componentId || u, _ = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, d = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var m = r.shouldForwardProp;
      d = function(O, b) {
        return h(O, b) && m(O, b);
      };
    } else
      d = h;
  }
  var T = new Rm(t, f, n ? o.componentStyle : void 0);
  function p(O, b) {
    return function(y, g, I) {
      var A = y.attrs, M = y.componentStyle, x = y.defaultProps, W = y.foldedComponentIds, ne = y.styledComponentId, wr = y.target, Hr = ge.useContext(Vi), Gr = Qo(), tr = y.shouldForwardProp || Gr.shouldForwardProp, ce = function(Ue, Pe, dt) {
        for (var kr, $e = E(E({}, Pe), { className: void 0, theme: dt }), On = 0; On < Ue.length; On += 1) {
          var ht = Nr(kr = Ue[On]) ? kr($e) : kr;
          for (var we in ht)
            $e[we] = we === "className" ? Je($e[we], ht[we]) : we === "style" ? E(E({}, $e[we]), ht[we]) : ht[we];
        }
        return Pe.className && ($e.className = Je($e.className, Pe.className)), $e;
      }(A, g, qc(g, Hr, x) || yr), Ke = ce.as || wr, X = {};
      for (var le in ce)
        ce[le] === void 0 || le[0] === "$" || le === "as" || le === "theme" || (le === "forwardedAs" ? X.as = ce.forwardedAs : tr && !tr(le, Ke) || (X[le] = ce[le]));
      var Cr = function(Ue, Pe) {
        var dt = Qo(), kr = Ue.generateAndInjectStyles(Pe, dt.styleSheet, dt.stylis);
        return kr;
      }(M, ce), fe = Je(W, ne);
      return Cr && (fe += " " + Cr), ce.className && (fe += " " + ce.className), X[Fn(Ke) && !Yc.has(Ke) ? "class" : "className"] = fe, X.ref = I, lf(Ke, X);
    }(R, O, b);
  }
  var R = ge.forwardRef(p);
  return R.attrs = _, R.componentStyle = T, R.shouldForwardProp = d, R.foldedComponentIds = n ? Je(o.foldedComponentIds, o.styledComponentId) : "", R.styledComponentId = f, R.target = n ? o.target : e, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = n ? function(b) {
      for (var y = [], g = 1; g < arguments.length; g++)
        y[g - 1] = arguments[g];
      for (var I = 0, A = y; I < A.length; I++)
        Yo(b, A[I], !0);
      return b;
    }({}, o.defaultProps, O) : O;
  } }), ji(R, function() {
    return ".".concat(R.styledComponentId);
  }), i && rl(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), R;
}
function Hs(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}
var Gs = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Oe(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if (Nr(e) || rt(e)) {
    var n = e;
    return Gs(Be(Hs(mn, ee([n], r, !0))));
  }
  var o = e;
  return r.length === 0 && o.length === 1 && typeof o[0] == "string" ? Be(o) : Gs(Be(Hs(o, r)));
}
function zo(e, r, t) {
  if (t === void 0 && (t = yr), !r)
    throw ct(1, r);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(r, t, Oe.apply(void 0, ee([o], i, !1)));
  };
  return n.attrs = function(o) {
    return zo(e, r, E(E({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return zo(e, r, E(E({}, t), o));
  }, n;
}
var ul = function(e) {
  return zo(vm, e);
}, rr = ul;
Yc.forEach(function(e) {
  rr[e] = ul(e);
});
var bm = function() {
  function e(r, t) {
    this.rules = r, this.componentId = t, this.isStatic = sl(r), qt.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(r, t, n, o) {
    var i = o(qo(Be(this.rules, t, n, o)), ""), a = this.componentId + r;
    n.insertRules(a, a, i);
  }, e.prototype.removeStyles = function(r, t) {
    t.clearRules(this.componentId + r);
  }, e.prototype.renderStyles = function(r, t, n, o) {
    r > 2 && qt.registerId(this.componentId + r), this.removeStyles(r, n), this.createStyles(r, t, n, o);
  }, e;
}();
function gm(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = Oe.apply(void 0, ee([e], r, !1)), o = "sc-global-".concat(Qc(JSON.stringify(n))), i = new bm(n, o), a = function(c) {
    var u = Qo(), l = ge.useContext(Vi), f = ge.useRef(u.styleSheet.allocateGSInstance(o)).current;
    return u.styleSheet.server && s(f, c, u.styleSheet, l, u.stylis), ge.useLayoutEffect(function() {
      if (!u.styleSheet.server)
        return s(f, c, u.styleSheet, l, u.stylis), function() {
          return i.removeStyles(f, u.styleSheet);
        };
    }, [f, c, u.styleSheet, l, u.stylis]), null;
  };
  function s(c, u, l, f, _) {
    if (i.isStatic)
      i.renderStyles(c, Vp, l, _);
    else {
      var d = E(E({}, u), { theme: qc(u, f, a.defaultProps) });
      i.renderStyles(c, d, l, _);
    }
  }
  return ge.memo(a);
}
const Wi = (e = "100%", r = e) => Oe`
  width: ${e};
  height: ${r};
`;
Oe`
  border: 1px solid red;
`;
const Im = (e = "flex-start", r = "stretch", t = "row") => Oe`
  display: flex;
  justify-content: ${e};
  align-items: ${r};
  flex-direction: ${t};
`, ym = (e) => Oe`
  font-family: '${e}', sans-serif;
`, Xi = (e = "&") => Oe`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: r }) => r.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Ze = (e) => Oe`
  ${({ theme: r }) => r[e]}
`, Nm = (e) => Oe`
  position: absolute;
  ${Object.entries(e).map(([r, t]) => `${r}: ${t};`).join(`
`)}
`, Am = Oe`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, Sm = "1px solid";
gm`
  body {
    background: ${({ theme: e }) => e.default};
    ${ym("Poppins")}
    overflow-x: hidden;
    user-select: none;
  }

  p, h2, h3, h4 {
    font-size: ${({ theme: e }) => e.fz6};
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
  }


  ${Xi("body")}

  .ant-popconfirm {
    z-index: 2;
  }
`;
const ar = {
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
sf.darkAlgorithm, ar.grey, ar.light, ar.lightGrey, ar.light, ar.light, ar.light;
var Wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Re = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, Dm = Re, cl = !Dm(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), ll = cl, fl = Function.prototype, Zo = fl.call, Um = ll && fl.bind.bind(Zo, Zo), ve = ll ? Um : function(e) {
  return function() {
    return Zo.apply(e, arguments);
  };
}, _l = ve, Pm = _l({}.toString), wm = _l("".slice), Hm = function(e) {
  return wm(Pm(e), 8, -1);
}, Gm = ve, Cm = Re, km = Hm, Xn = Object, Lm = Gm("".split), Bm = Cm(function() {
  return !Xn("z").propertyIsEnumerable(0);
}) ? function(e) {
  return km(e) == "String" ? Lm(e, "") : Xn(e);
} : Xn, dl = function(e) {
  return e == null;
}, Mm = dl, xm = TypeError, hl = function(e) {
  if (Mm(e))
    throw xm("Can't call method on " + e);
  return e;
}, Fm = Bm, jm = hl, lt = function(e) {
  return Fm(jm(e));
}, Ot = function(e) {
  return e && e.Math == Math && e;
}, ue = (
  // eslint-disable-next-line es/no-global-this -- safe
  Ot(typeof globalThis == "object" && globalThis) || Ot(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Ot(typeof self == "object" && self) || Ot(typeof Wn == "object" && Wn) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Wn || Function("return this")()
), Ki = { exports: {} }, Cs = ue, Vm = Object.defineProperty, $i = function(e, r) {
  try {
    Vm(Cs, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    Cs[e] = r;
  }
  return r;
}, Wm = ue, Xm = $i, ks = "__core-js_shared__", Km = Wm[ks] || Xm(ks, {}), qi = Km, Ls = qi;
(Ki.exports = function(e, r) {
  return Ls[e] || (Ls[e] = r !== void 0 ? r : {});
})("versions", []).push({
  version: "3.30.2",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var $m = hl, qm = Object, pl = function(e) {
  return qm($m(e));
}, Ym = ve, Jm = pl, Qm = Ym({}.hasOwnProperty), Se = Object.hasOwn || function(r, t) {
  return Qm(Jm(r), t);
}, zm = ve, Zm = 0, eE = Math.random(), rE = zm(1 .toString), ml = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + rE(++Zm + eE, 36);
}, tE = typeof navigator < "u" && String(navigator.userAgent) || "", El = ue, Kn = tE, Bs = El.process, Ms = El.Deno, xs = Bs && Bs.versions || Ms && Ms.version, Fs = xs && xs.v8, ae, Yt;
Fs && (ae = Fs.split("."), Yt = ae[0] > 0 && ae[0] < 4 ? 1 : +(ae[0] + ae[1]));
!Yt && Kn && (ae = Kn.match(/Edge\/(\d+)/), (!ae || ae[1] >= 74) && (ae = Kn.match(/Chrome\/(\d+)/), ae && (Yt = +ae[1])));
var nE = Yt, js = nE, oE = Re, iE = ue, aE = iE.String, Tl = !!Object.getOwnPropertySymbols && !oE(function() {
  var e = Symbol();
  return !aE(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && js && js < 41;
}), sE = Tl, Ol = sE && !Symbol.sham && typeof Symbol.iterator == "symbol", uE = ue, cE = Ki.exports, Vs = Se, lE = ml, fE = Tl, _E = Ol, dr = uE.Symbol, $n = cE("wks"), dE = _E ? dr.for || dr : dr && dr.withoutSetter || lE, Ur = function(e) {
  return Vs($n, e) || ($n[e] = fE && Vs(dr, e) ? dr[e] : dE("Symbol." + e)), $n[e];
}, ei = typeof document == "object" && document.all, hE = typeof ei > "u" && ei !== void 0, Rl = {
  all: ei,
  IS_HTMLDDA: hE
}, vl = Rl, pE = vl.all, Z = vl.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === pE;
} : function(e) {
  return typeof e == "function";
}, Ws = Z, bl = Rl, mE = bl.all, Pr = bl.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : Ws(e) || e === mE;
} : function(e) {
  return typeof e == "object" ? e !== null : Ws(e);
}, EE = Pr, TE = String, OE = TypeError, ft = function(e) {
  if (EE(e))
    return e;
  throw OE(TE(e) + " is not an object");
}, gl = {}, RE = Re, De = !RE(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), vE = De, bE = Re, Il = vE && bE(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), Xe = {}, gE = ue, Xs = Pr, ri = gE.document, IE = Xs(ri) && Xs(ri.createElement), Yi = function(e) {
  return IE ? ri.createElement(e) : {};
}, yE = De, NE = Re, AE = Yi, yl = !yE && !NE(function() {
  return Object.defineProperty(AE("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), SE = cl, Rt = Function.prototype.call, En = SE ? Rt.bind(Rt) : function() {
  return Rt.apply(Rt, arguments);
}, qn = ue, DE = Z, UE = function(e) {
  return DE(e) ? e : void 0;
}, Ji = function(e, r) {
  return arguments.length < 2 ? UE(qn[e]) : qn[e] && qn[e][r];
}, PE = ve, wE = PE({}.isPrototypeOf), HE = Ji, GE = Z, CE = wE, kE = Ol, LE = Object, Nl = kE ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = HE("Symbol");
  return GE(r) && CE(r.prototype, LE(e));
}, BE = String, ME = function(e) {
  try {
    return BE(e);
  } catch {
    return "Object";
  }
}, xE = Z, FE = ME, jE = TypeError, Al = function(e) {
  if (xE(e))
    return e;
  throw jE(FE(e) + " is not a function");
}, VE = Al, WE = dl, XE = function(e, r) {
  var t = e[r];
  return WE(t) ? void 0 : VE(t);
}, Yn = En, Jn = Z, Qn = Pr, KE = TypeError, $E = function(e, r) {
  var t, n;
  if (r === "string" && Jn(t = e.toString) && !Qn(n = Yn(t, e)) || Jn(t = e.valueOf) && !Qn(n = Yn(t, e)) || r !== "string" && Jn(t = e.toString) && !Qn(n = Yn(t, e)))
    return n;
  throw KE("Can't convert object to primitive value");
}, qE = En, Ks = Pr, $s = Nl, YE = XE, JE = $E, QE = Ur, zE = TypeError, ZE = QE("toPrimitive"), eT = function(e, r) {
  if (!Ks(e) || $s(e))
    return e;
  var t = YE(e, ZE), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = qE(t, e, r), !Ks(n) || $s(n))
      return n;
    throw zE("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), JE(e, r);
}, rT = eT, tT = Nl, Sl = function(e) {
  var r = rT(e, "string");
  return tT(r) ? r : r + "";
}, nT = De, oT = yl, iT = Il, vt = ft, qs = Sl, aT = TypeError, zn = Object.defineProperty, sT = Object.getOwnPropertyDescriptor, Zn = "enumerable", eo = "configurable", ro = "writable";
Xe.f = nT ? iT ? function(r, t, n) {
  if (vt(r), t = qs(t), vt(n), typeof r == "function" && t === "prototype" && "value" in n && ro in n && !n[ro]) {
    var o = sT(r, t);
    o && o[ro] && (r[t] = n.value, n = {
      configurable: eo in n ? n[eo] : o[eo],
      enumerable: Zn in n ? n[Zn] : o[Zn],
      writable: !1
    });
  }
  return zn(r, t, n);
} : zn : function(r, t, n) {
  if (vt(r), t = qs(t), vt(n), oT)
    try {
      return zn(r, t, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw aT("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var uT = Math.ceil, cT = Math.floor, lT = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? cT : uT)(t);
}, fT = lT, Dl = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : fT(r);
}, _T = Dl, dT = Math.max, hT = Math.min, pT = function(e, r) {
  var t = _T(e);
  return t < 0 ? dT(t + r, 0) : hT(t, r);
}, mT = Dl, ET = Math.min, TT = function(e) {
  return e > 0 ? ET(mT(e), 9007199254740991) : 0;
}, OT = TT, RT = function(e) {
  return OT(e.length);
}, vT = lt, bT = pT, gT = RT, Ys = function(e) {
  return function(r, t, n) {
    var o = vT(r), i = gT(o), a = bT(n, i), s;
    if (e && t != t) {
      for (; i > a; )
        if (s = o[a++], s != s)
          return !0;
    } else
      for (; i > a; a++)
        if ((e || a in o) && o[a] === t)
          return e || a || 0;
    return !e && -1;
  };
}, IT = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Ys(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Ys(!1)
}, Qi = {}, yT = ve, to = Se, NT = lt, AT = IT.indexOf, ST = Qi, Js = yT([].push), Ul = function(e, r) {
  var t = NT(e), n = 0, o = [], i;
  for (i in t)
    !to(ST, i) && to(t, i) && Js(o, i);
  for (; r.length > n; )
    to(t, i = r[n++]) && (~AT(o, i) || Js(o, i));
  return o;
}, zi = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], DT = Ul, UT = zi, PT = Object.keys || function(r) {
  return DT(r, UT);
}, wT = De, HT = Il, GT = Xe, CT = ft, kT = lt, LT = PT;
gl.f = wT && !HT ? Object.defineProperties : function(r, t) {
  CT(r);
  for (var n = kT(t), o = LT(t), i = o.length, a = 0, s; i > a; )
    GT.f(r, s = o[a++], n[s]);
  return r;
};
var BT = Ji, MT = BT("document", "documentElement"), xT = Ki.exports, FT = ml, Qs = xT("keys"), Zi = function(e) {
  return Qs[e] || (Qs[e] = FT(e));
}, jT = ft, VT = gl, zs = zi, WT = Qi, XT = MT, KT = Yi, $T = Zi, Zs = ">", eu = "<", ti = "prototype", ni = "script", Pl = $T("IE_PROTO"), no = function() {
}, wl = function(e) {
  return eu + ni + Zs + e + eu + "/" + ni + Zs;
}, ru = function(e) {
  e.write(wl("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, qT = function() {
  var e = KT("iframe"), r = "java" + ni + ":", t;
  return e.style.display = "none", XT.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(wl("document.F=Object")), t.close(), t.F;
}, bt, Mt = function() {
  try {
    bt = new ActiveXObject("htmlfile");
  } catch {
  }
  Mt = typeof document < "u" ? document.domain && bt ? ru(bt) : qT() : ru(bt);
  for (var e = zs.length; e--; )
    delete Mt[ti][zs[e]];
  return Mt();
};
WT[Pl] = !0;
var Hl = Object.create || function(r, t) {
  var n;
  return r !== null ? (no[ti] = jT(r), n = new no(), no[ti] = null, n[Pl] = r) : n = Mt(), t === void 0 ? n : VT.f(n, t);
}, YT = Ur, JT = Hl, QT = Xe.f, oi = YT("unscopables"), ii = Array.prototype;
ii[oi] == null && QT(ii, oi, {
  configurable: !0,
  value: JT(null)
});
var zT = function(e) {
  ii[oi][e] = !0;
}, ea = {}, ZT = ue, eO = Z, tu = ZT.WeakMap, rO = eO(tu) && /native code/.test(String(tu)), ra = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, tO = De, nO = Xe, oO = ra, Tn = tO ? function(e, r, t) {
  return nO.f(e, r, oO(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, iO = rO, Gl = ue, aO = Pr, sO = Tn, oo = Se, io = qi, uO = Zi, cO = Qi, nu = "Object already initialized", ai = Gl.TypeError, lO = Gl.WeakMap, Jt, tt, Qt, fO = function(e) {
  return Qt(e) ? tt(e) : Jt(e, {});
}, _O = function(e) {
  return function(r) {
    var t;
    if (!aO(r) || (t = tt(r)).type !== e)
      throw ai("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (iO || io.state) {
  var _e = io.state || (io.state = new lO());
  _e.get = _e.get, _e.has = _e.has, _e.set = _e.set, Jt = function(e, r) {
    if (_e.has(e))
      throw ai(nu);
    return r.facade = e, _e.set(e, r), r;
  }, tt = function(e) {
    return _e.get(e) || {};
  }, Qt = function(e) {
    return _e.has(e);
  };
} else {
  var sr = uO("state");
  cO[sr] = !0, Jt = function(e, r) {
    if (oo(e, sr))
      throw ai(nu);
    return r.facade = e, sO(e, sr, r), r;
  }, tt = function(e) {
    return oo(e, sr) ? e[sr] : {};
  }, Qt = function(e) {
    return oo(e, sr);
  };
}
var Cl = {
  set: Jt,
  get: tt,
  has: Qt,
  enforce: fO,
  getterFor: _O
}, ta = {}, kl = {}, Ll = {}.propertyIsEnumerable, Bl = Object.getOwnPropertyDescriptor, dO = Bl && !Ll.call({ 1: 2 }, 1);
kl.f = dO ? function(r) {
  var t = Bl(this, r);
  return !!t && t.enumerable;
} : Ll;
var hO = De, pO = En, mO = kl, EO = ra, TO = lt, OO = Sl, RO = Se, vO = yl, ou = Object.getOwnPropertyDescriptor;
ta.f = hO ? ou : function(r, t) {
  if (r = TO(r), t = OO(t), vO)
    try {
      return ou(r, t);
    } catch {
    }
  if (RO(r, t))
    return EO(!pO(mO.f, r, t), r[t]);
};
var Ml = { exports: {} }, si = De, bO = Se, xl = Function.prototype, gO = si && Object.getOwnPropertyDescriptor, na = bO(xl, "name"), IO = na && (function() {
}).name === "something", yO = na && (!si || si && gO(xl, "name").configurable), Fl = {
  EXISTS: na,
  PROPER: IO,
  CONFIGURABLE: yO
}, NO = ve, AO = Z, ui = qi, SO = NO(Function.toString);
AO(ui.inspectSource) || (ui.inspectSource = function(e) {
  return SO(e);
});
var DO = ui.inspectSource, oa = ve, UO = Re, PO = Z, gt = Se, ci = De, wO = Fl.CONFIGURABLE, HO = DO, jl = Cl, GO = jl.enforce, CO = jl.get, iu = String, xt = Object.defineProperty, kO = oa("".slice), LO = oa("".replace), BO = oa([].join), MO = ci && !UO(function() {
  return xt(function() {
  }, "length", { value: 8 }).length !== 8;
}), xO = String(String).split("String"), FO = Ml.exports = function(e, r, t) {
  kO(iu(r), 0, 7) === "Symbol(" && (r = "[" + LO(iu(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!gt(e, "name") || wO && e.name !== r) && (ci ? xt(e, "name", { value: r, configurable: !0 }) : e.name = r), MO && t && gt(t, "arity") && e.length !== t.arity && xt(e, "length", { value: t.arity });
  try {
    t && gt(t, "constructor") && t.constructor ? ci && xt(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = GO(e);
  return gt(n, "source") || (n.source = BO(xO, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = FO(function() {
  return PO(this) && CO(this).source || HO(this);
}, "toString");
var jO = Z, VO = Xe, WO = Ml.exports, XO = $i, ia = function(e, r, t, n) {
  n || (n = {});
  var o = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (jO(t) && WO(t, i, n), n.global)
    o ? e[r] = t : XO(r, t);
  else {
    try {
      n.unsafe ? e[r] && (o = !0) : delete e[r];
    } catch {
    }
    o ? e[r] = t : VO.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Vl = {}, KO = Ul, $O = zi, qO = $O.concat("length", "prototype");
Vl.f = Object.getOwnPropertyNames || function(r) {
  return KO(r, qO);
};
var Wl = {};
Wl.f = Object.getOwnPropertySymbols;
var YO = Ji, JO = ve, QO = Vl, zO = Wl, ZO = ft, eR = JO([].concat), rR = YO("Reflect", "ownKeys") || function(r) {
  var t = QO.f(ZO(r)), n = zO.f;
  return n ? eR(t, n(r)) : t;
}, au = Se, tR = rR, nR = ta, oR = Xe, iR = function(e, r, t) {
  for (var n = tR(r), o = oR.f, i = nR.f, a = 0; a < n.length; a++) {
    var s = n[a];
    !au(e, s) && !(t && au(t, s)) && o(e, s, i(r, s));
  }
}, aR = Re, sR = Z, uR = /#|\.prototype\./, _t = function(e, r) {
  var t = lR[cR(e)];
  return t == _R ? !0 : t == fR ? !1 : sR(r) ? aR(r) : !!r;
}, cR = _t.normalize = function(e) {
  return String(e).replace(uR, ".").toLowerCase();
}, lR = _t.data = {}, fR = _t.NATIVE = "N", _R = _t.POLYFILL = "P", dR = _t, ao = ue, hR = ta.f, pR = Tn, mR = ia, ER = $i, TR = iR, OR = dR, RR = function(e, r) {
  var t = e.target, n = e.global, o = e.stat, i, a, s, c, u, l;
  if (n ? a = ao : o ? a = ao[t] || ER(t, {}) : a = (ao[t] || {}).prototype, a)
    for (s in r) {
      if (u = r[s], e.dontCallGetSet ? (l = hR(a, s), c = l && l.value) : c = a[s], i = OR(n ? s : t + (o ? "." : "#") + s, e.forced), !i && c !== void 0) {
        if (typeof u == typeof c)
          continue;
        TR(u, c);
      }
      (e.sham || c && c.sham) && pR(u, "sham", !0), mR(a, s, u, e);
    }
}, vR = Re, bR = !vR(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), gR = Se, IR = Z, yR = pl, NR = Zi, AR = bR, su = NR("IE_PROTO"), li = Object, SR = li.prototype, Xl = AR ? li.getPrototypeOf : function(e) {
  var r = yR(e);
  if (gR(r, su))
    return r[su];
  var t = r.constructor;
  return IR(t) && r instanceof t ? t.prototype : r instanceof li ? SR : null;
}, DR = Re, UR = Z, PR = Pr, uu = Xl, wR = ia, HR = Ur, fi = HR("iterator"), Kl = !1, er, so, uo;
[].keys && (uo = [].keys(), "next" in uo ? (so = uu(uu(uo)), so !== Object.prototype && (er = so)) : Kl = !0);
var GR = !PR(er) || DR(function() {
  var e = {};
  return er[fi].call(e) !== e;
});
GR && (er = {});
UR(er[fi]) || wR(er, fi, function() {
  return this;
});
var $l = {
  IteratorPrototype: er,
  BUGGY_SAFARI_ITERATORS: Kl
}, CR = Xe.f, kR = Se, LR = Ur, cu = LR("toStringTag"), ql = function(e, r, t) {
  e && !t && (e = e.prototype), e && !kR(e, cu) && CR(e, cu, { configurable: !0, value: r });
}, BR = $l.IteratorPrototype, MR = Hl, xR = ra, FR = ql, jR = ea, VR = function() {
  return this;
}, WR = function(e, r, t, n) {
  var o = r + " Iterator";
  return e.prototype = MR(BR, { next: xR(+!n, t) }), FR(e, o, !1), jR[o] = VR, e;
}, XR = ve, KR = Al, $R = function(e, r, t) {
  try {
    return XR(KR(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, qR = Z, YR = String, JR = TypeError, QR = function(e) {
  if (typeof e == "object" || qR(e))
    return e;
  throw JR("Can't set " + YR(e) + " as a prototype");
}, zR = $R, ZR = ft, ev = QR, rv = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = zR(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(o, i) {
    return ZR(o), ev(i), e ? t(o, i) : o.__proto__ = i, o;
  };
}() : void 0), tv = RR, nv = En, Yl = Fl, ov = Z, iv = WR, lu = Xl, fu = rv, av = ql, sv = Tn, co = ia, uv = Ur, cv = ea, Jl = $l, lv = Yl.PROPER, fv = Yl.CONFIGURABLE, _u = Jl.IteratorPrototype, It = Jl.BUGGY_SAFARI_ITERATORS, jr = uv("iterator"), du = "keys", Vr = "values", hu = "entries", _v = function() {
  return this;
}, dv = function(e, r, t, n, o, i, a) {
  iv(t, r, n);
  var s = function(p) {
    if (p === o && _)
      return _;
    if (!It && p in l)
      return l[p];
    switch (p) {
      case du:
        return function() {
          return new t(this, p);
        };
      case Vr:
        return function() {
          return new t(this, p);
        };
      case hu:
        return function() {
          return new t(this, p);
        };
    }
    return function() {
      return new t(this);
    };
  }, c = r + " Iterator", u = !1, l = e.prototype, f = l[jr] || l["@@iterator"] || o && l[o], _ = !It && f || s(o), d = r == "Array" && l.entries || f, h, m, T;
  if (d && (h = lu(d.call(new e())), h !== Object.prototype && h.next && (lu(h) !== _u && (fu ? fu(h, _u) : ov(h[jr]) || co(h, jr, _v)), av(h, c, !0))), lv && o == Vr && f && f.name !== Vr && (fv ? sv(l, "name", Vr) : (u = !0, _ = function() {
    return nv(f, this);
  })), o)
    if (m = {
      values: s(Vr),
      keys: i ? _ : s(du),
      entries: s(hu)
    }, a)
      for (T in m)
        (It || u || !(T in l)) && co(l, T, m[T]);
    else
      tv({ target: r, proto: !0, forced: It || u }, m);
  return l[jr] !== _ && co(l, jr, _, { name: o }), cv[r] = _, m;
}, hv = function(e, r) {
  return { value: e, done: r };
}, pv = lt, aa = zT, pu = ea, Ql = Cl, mv = Xe.f, Ev = dv, yt = hv, Tv = De, zl = "Array Iterator", Ov = Ql.set, Rv = Ql.getterFor(zl), vv = Ev(Array, "Array", function(e, r) {
  Ov(this, {
    type: zl,
    target: pv(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = Rv(this), r = e.target, t = e.kind, n = e.index++;
  return !r || n >= r.length ? (e.target = void 0, yt(void 0, !0)) : t == "keys" ? yt(n, !1) : t == "values" ? yt(r[n], !1) : yt([n, r[n]], !1);
}, "values"), mu = pu.Arguments = pu.Array;
aa("keys");
aa("values");
aa("entries");
if (Tv && mu.name !== "values")
  try {
    mv(mu, "name", { value: "values" });
  } catch {
  }
var bv = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, gv = Yi, lo = gv("span").classList, Eu = lo && lo.constructor && lo.constructor.prototype, Iv = Eu === Object.prototype ? void 0 : Eu, Tu = ue, Zl = bv, yv = Iv, Xr = vv, fo = Tn, ef = Ur, _o = ef("iterator"), Ou = ef("toStringTag"), ho = Xr.values, rf = function(e, r) {
  if (e) {
    if (e[_o] !== ho)
      try {
        fo(e, _o, ho);
      } catch {
        e[_o] = ho;
      }
    if (e[Ou] || fo(e, Ou, r), Zl[r]) {
      for (var t in Xr)
        if (e[t] !== Xr[t])
          try {
            fo(e, t, Xr[t]);
          } catch {
            e[t] = Xr[t];
          }
    }
  }
};
for (var po in Zl)
  rf(Tu[po] && Tu[po].prototype, po);
rf(yv, "DOMTokenList");
const Nv = (e = !1) => {
  const [r, t] = bu(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!r),
    val: r
  };
};
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
function Av() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sv() {
  let [, e] = bu(/* @__PURE__ */ Object.create(null));
  return ff(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var Dv = Av() ? _f : _i, Uv = ({
  children: e,
  type: r = "reach-portal",
  containerRef: t
}) => {
  let n = Ye.useRef(null), o = Ye.useRef(null), i = Sv();
  return Ye.useEffect(() => {
    t != null && (typeof t != "object" || !("current" in t) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : t.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [t]), Dv(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = (t == null ? void 0 : t.current) || a.body;
    return o.current = a == null ? void 0 : a.createElement(r), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [r, i, t]), o.current ? df(e, o.current) : /* @__PURE__ */ Ye.createElement("span", {
    ref: n
  });
}, tf = ({
  unstable_skipInitialRender: e,
  ...r
}) => {
  let [t, n] = Ye.useState(!1);
  return Ye.useEffect(() => {
    e && n(!0);
  }, [e]), e && !t ? null : /* @__PURE__ */ Ye.createElement(Uv, {
    ...r
  });
};
tf.displayName = "Portal";
const Pv = () => ({
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
}), wv = rr.div`
  ${Im("center", "center")};
  ${Nm({
  left: "0",
  top: "0"
})}
  ${Wi("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, Hv = rr.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${Ze("grey")};
  border: 2px solid ${Ze("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${Am};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Xi()};
`, Gv = rr.div`
  margin: 0 auto;
  margin-top: 18px;
  ${Wi("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${Ze("light")};
  }
`, Kv = rr.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${Sm} ${Ze("lightGrey")};
`, $v = rr.div`
  background: ${Ze("lightGrey")};
  ${Wi("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, Cv = ({
  onClose: e,
  isOpen: r,
  children: t,
  width: n,
  height: o
}) => {
  const { Spring: i, Gesture: a } = xc(), { opacity: s, transform: c } = Pv(), u = i.useTransition(r, {
    from: s.from(),
    enter: s.to(),
    leave: s.from(),
    config: i.config.stiff
  }), l = i.useSpring({
    from: c.from(),
    to: c.to(r),
    config: i.config.wobbly
  }), [f, _] = i.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: d, x: h, scale: m } = f, T = a.useDrag(
    ({ offset: [R, O], down: b }) => {
      _.start({
        y: b ? O : 0,
        immediate: !1,
        x: b ? R : 0,
        scale: b ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), p = (R) => {
    R.stopPropagation();
  };
  return /* @__PURE__ */ J(nf, { children: u((R, O) => /* @__PURE__ */ J(Lc, { when: O, children: /* @__PURE__ */ J(tf, { children: /* @__PURE__ */ J(
    wv,
    {
      style: R,
      onClick: e,
      as: i.a.div,
      "data-testid": "background",
      children: /* @__PURE__ */ J(
        Hv,
        {
          style: { ...l, x: h, y: d, scale: m },
          ...T(),
          onClick: p,
          as: i.a.div,
          $width: n,
          $height: o,
          "data-testid": "modal",
          children: /* @__PURE__ */ J(
            hf,
            {
              damping: 0.05,
              syncCallbacks: !0,
              alwaysShowTracks: !0,
              children: /* @__PURE__ */ J(Gv, { children: t })
            }
          )
        }
      )
    }
  ) }) })) });
}, qv = (e) => /* @__PURE__ */ J(Mc, { children: /* @__PURE__ */ J(Cv, { ...e }) }), kv = (e, r) => {
  const { Spring: t, Gesture: n } = xc(), [{ y: o }, i] = t.useSpring(() => ({ y: r })), a = () => {
    i.start({ y: 0, immediate: !1, config: t.config.gentle });
  }, s = (f = 0) => {
    e(), i.start({
      y: r,
      immediate: !1,
      config: { ...t.config.stiff, velocity: f }
    });
  }, c = n.useDrag(
    ({ last: f, velocity: [, _], direction: [, d], offset: [, h], cancel: m }) => {
      h < -70 && m(), f ? h > r * 0.5 || _ > 0.5 && d === 1 ? s(_) : a() : i.start({ y: h, immediate: d === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), u = o.to((f) => f < r ? "block" : "none");
  return {
    toggle: (f) => {
      f ? a() : s();
    },
    bind: c,
    div: t.a.div,
    springs: {
      display: u,
      y: o
    }
  };
}, Lv = rr.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${Ze("darkBlue")};
  border-top: 2px solid ${Ze("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Xi()};
`, Bv = ({
  children: e,
  onClose: r,
  isOpen: t,
  height: n
}) => {
  const o = kv(r, n);
  return _i(() => {
    o.toggle(t);
  }, [t]), /* @__PURE__ */ J(
    Lv,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      "data-testid": "popover",
      children: e
    }
  );
}, Yv = (e) => /* @__PURE__ */ J(Mc, { children: /* @__PURE__ */ J(Bv, { ...e }) }), Jv = ({
  onChange: e,
  value: r,
  options: t,
  defaultValue: n
}) => /* @__PURE__ */ J(
  uf,
  {
    size: "middle",
    onChange: e,
    value: r,
    style: { width: 200 },
    options: t,
    defaultValue: n,
    "data-testid": "select"
  }
);
export {
  Wv as ColoredButton,
  qv as Modal,
  $v as ModalSeparator,
  Kv as ModalTitle,
  Yv as Popover,
  Jv as Select
};
