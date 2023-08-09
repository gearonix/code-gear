import * as v from "react";
import Pe, { useState as fr, useEffect as Bt, useRef as De, createContext as Ei, useMemo as go, useContext as Gt, useLayoutEffect as Av, forwardRef as rl, Children as My, createRef as Ny, useCallback as _c, useDebugValue as Cf, createElement as Iy } from "react";
import { jsx as xt, jsxs as Dv, Fragment as nl } from "react/jsx-runtime";
import * as Ay from "react-dom";
import Dy, { createPortal as ol, unstable_batchedUpdates as Fy, flushSync as $y } from "react-dom";
import ky from "react-smooth-scrollbar";
const Ly = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, RI = (e) => typeof e == "object" && e !== null, jy = (e) => typeof e == "string", PI = (e) => typeof e == "function";
process.env.CLIENT_URL;
const Vy = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const Fv = process.env.SERVER_URL ?? "http://localhost:6868", zy = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class Hy {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? By(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in Ly))) {
      if (jy(r))
        return localStorage.setItem(this.withPrefix(t), r);
      localStorage.setItem(this.withPrefix(t), JSON.stringify(r));
    }
  }
  clear(t) {
    if (t)
      return localStorage.removeItem(this.withPrefix(t));
    localStorage.clear();
  }
  withPrefix(t) {
    return `${Vy}__${t}`;
  }
}
const By = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var Tc = function(e, t) {
  return Tc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Tc(e, t);
};
function $r(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Tc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var V = function() {
  return V = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Kr(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function on(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
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
    u((n = n.apply(e, t || [])).next());
  });
}
function an(e, t) {
  var r = { label: 0, sent: function() {
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
    for (; a && (a = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = u;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(u);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
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
function cn(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ks = "Invariant Violation", Of = Object.setPrototypeOf, Wy = Of === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Of, $v = (
  /** @class */
  function(e) {
    $r(t, e);
    function t(r) {
      r === void 0 && (r = ks);
      var n = e.call(this, typeof r == "number" ? ks + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = ks, Wy(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function Cn(e, t) {
  if (!e)
    throw new $v(t);
}
var kv = ["debug", "log", "warn", "error", "silent"], Uy = kv.indexOf("log");
function Bi(e) {
  return function() {
    if (kv.indexOf(e) >= Uy) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Bi("debug"), e.log = Bi("log"), e.warn = Bi("warn"), e.error = Bi("error");
})(Cn || (Cn = {}));
var il = "3.8.0";
function Tr(e) {
  try {
    return e();
  } catch {
  }
}
const xf = Tr(function() {
  return globalThis;
}) || Tr(function() {
  return window;
}) || Tr(function() {
  return self;
}) || Tr(function() {
  return global;
}) || Tr(function() {
  return Tr.constructor("return this")();
});
var _f = /* @__PURE__ */ new Map();
function Rc(e) {
  var t = _f.get(e) || 1;
  return _f.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Lv(e, t) {
  t === void 0 && (t = 0);
  var r = Rc("stringifyForDisplay");
  return JSON.stringify(e, function(n, o) {
    return o === void 0 ? r : o;
  }, t).split(JSON.stringify(r)).join("<undefined>");
}
function Wi(e) {
  return function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    e.apply(void 0, cn([typeof t == "number" ? al(t) : t], r, !1));
  };
}
var _e = Object.assign(function(t, r) {
  for (var n = [], o = 2; o < arguments.length; o++)
    n[o - 2] = arguments[o];
  t || Cn(t, al(r, n));
}, {
  debug: Wi(Cn.debug),
  log: Wi(Cn.log),
  warn: Wi(Cn.warn),
  error: Wi(Cn.error)
});
function tr(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new $v(al(e, t));
}
var Tf = Symbol.for("ApolloErrorMessageHandler_" + il);
function al(e, t) {
  if (t === void 0 && (t = []), !!e) {
    var r = t.map(function(n) {
      return typeof n == "string" ? n : Lv(n, 2).slice(0, 1e3);
    });
    return xf[Tf] && xf[Tf](e, r) || "An error occured! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: il,
      message: e,
      args: r
    })));
  }
}
function qy(e, t) {
  if (!!!e)
    throw new Error(t);
}
const jv = {
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
}, Qy = new Set(Object.keys(jv));
function Rf(e) {
  const t = e?.kind;
  return typeof t == "string" && Qy.has(t);
}
var Pf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Pf || (Pf = {}));
var Lt;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Lt || (Lt = {}));
function Mf(e) {
  return e === 9 || e === 32;
}
function Gy(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((h) => h.length === 0 || Mf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, c = e.endsWith("\\"), u = s || c, l = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || u || i || a);
  let f = "";
  const d = o && Mf(e.charCodeAt(0));
  return (l && !d || i) && (f += `
`), f += r, (l || u) && (f += `
`), '"""' + f + '"""';
}
const Ky = 10, Vv = 2;
function Yy(e) {
  return es(e, []);
}
function es(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Xy(e, t);
    default:
      return String(e);
  }
}
function Xy(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Jy(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : es(n, r);
  } else if (Array.isArray(e))
    return eb(e, r);
  return Zy(e, r);
}
function Jy(e) {
  return typeof e.toJSON == "function";
}
function Zy(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Vv ? "[" + tb(e) + "]" : "{ " + r.map(
    ([o, i]) => o + ": " + es(i, t)
  ).join(", ") + " }";
}
function eb(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Vv)
    return "[Array]";
  const r = Math.min(Ky, e.length), n = e.length - r, o = [];
  for (let i = 0; i < r; ++i)
    o.push(es(e[i], t));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function tb(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
function rb(e) {
  return `"${e.replace(nb, ob)}"`;
}
const nb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function ob(e) {
  return ib[e.charCodeAt(0)];
}
const ib = [
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
], sl = Object.freeze({});
function Yr(e, t, r = jv) {
  const n = /* @__PURE__ */ new Map();
  for (const y of Object.values(Lt))
    n.set(y, ab(t, y));
  let o, i = Array.isArray(e), a = [e], s = -1, c = [], u = e, l, f;
  const d = [], h = [];
  do {
    s++;
    const y = s === a.length, S = y && c.length !== 0;
    if (y) {
      if (l = h.length === 0 ? void 0 : d[d.length - 1], u = f, f = h.pop(), S)
        if (i) {
          u = u.slice();
          let w = 0;
          for (const [b, C] of c) {
            const O = b - w;
            C === null ? (u.splice(O, 1), w++) : u[O] = C;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [w, b] of c)
            u[w] = b;
        }
      s = o.index, a = o.keys, c = o.edits, i = o.inArray, o = o.prev;
    } else if (f) {
      if (l = i ? s : a[s], u = f[l], u == null)
        continue;
      d.push(l);
    }
    let E;
    if (!Array.isArray(u)) {
      var m, p;
      Rf(u) || qy(!1, `Invalid AST Node: ${Yy(u)}.`);
      const w = y ? (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.leave : (p = n.get(u.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (E = w?.call(t, u, l, f, d, h), E === sl)
        break;
      if (E === !1) {
        if (!y) {
          d.pop();
          continue;
        }
      } else if (E !== void 0 && (c.push([l, E]), !y))
        if (Rf(E))
          u = E;
        else {
          d.pop();
          continue;
        }
    }
    if (E === void 0 && S && c.push([l, u]), y)
      d.pop();
    else {
      var g;
      o = {
        inArray: i,
        index: s,
        keys: a,
        edits: c,
        prev: o
      }, i = Array.isArray(u), a = i ? u : (g = r[u.kind]) !== null && g !== void 0 ? g : [], s = -1, c = [], f && h.push(f), f = u;
    }
  } while (o !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : e;
}
function ab(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function sb(e) {
  return Yr(e, ub);
}
const cb = 80, ub = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => pe(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = Le("(", pe(e.variableDefinitions, ", "), ")"), r = pe(
        [
          e.operation,
          pe([e.name, t]),
          pe(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + Le(" = ", r) + Le(" ", pe(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Cr(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: o }) {
      const i = Le("", e, ": ") + t;
      let a = i + Le("(", pe(r, ", "), ")");
      return a.length > cb && (a = i + Le(`(
`, ca(pe(r, `
`)), `
)`)), pe([a, pe(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + Le(" ", pe(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => pe(
      [
        "...",
        Le("on ", e),
        pe(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${Le("(", pe(r, ", "), ")")} on ${t} ${Le("", pe(n, " "), " ")}` + o
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
    leave: ({ value: e, block: t }) => t ? Gy(e) : rb(e)
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
    leave: ({ values: e }) => "[" + pe(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + pe(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + Le("(", pe(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => Le("", e, `
`) + pe(["schema", pe(t, " "), Cr(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + pe(["scalar", t, pe(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => Le("", e, `
`) + pe(
      [
        "type",
        t,
        Le("implements ", pe(r, " & ")),
        pe(n, " "),
        Cr(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: o }) => Le("", e, `
`) + t + (Nf(r) ? Le(`(
`, ca(pe(r, `
`)), `
)`) : Le("(", pe(r, ", "), ")")) + ": " + n + Le(" ", pe(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: o }) => Le("", e, `
`) + pe(
      [t + ": " + r, Le("= ", n), pe(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => Le("", e, `
`) + pe(
      [
        "interface",
        t,
        Le("implements ", pe(r, " & ")),
        pe(n, " "),
        Cr(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => Le("", e, `
`) + pe(
      ["union", t, pe(r, " "), Le("= ", pe(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => Le("", e, `
`) + pe(["enum", t, pe(r, " "), Cr(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + pe([t, pe(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => Le("", e, `
`) + pe(["input", t, pe(r, " "), Cr(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: o }) => Le("", e, `
`) + "directive @" + t + (Nf(r) ? Le(`(
`, ca(pe(r, `
`)), `
)`) : Le("(", pe(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + pe(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => pe(
      ["extend schema", pe(e, " "), Cr(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => pe(["extend scalar", e, pe(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => pe(
      [
        "extend type",
        e,
        Le("implements ", pe(t, " & ")),
        pe(r, " "),
        Cr(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => pe(
      [
        "extend interface",
        e,
        Le("implements ", pe(t, " & ")),
        pe(r, " "),
        Cr(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => pe(
      [
        "extend union",
        e,
        pe(t, " "),
        Le("= ", pe(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => pe(["extend enum", e, pe(t, " "), Cr(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => pe(["extend input", e, pe(t, " "), Cr(r)], " ")
  }
};
function pe(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Cr(e) {
  return Le(`{
`, ca(pe(e, `
`)), `
}`);
}
function Le(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function ca(e) {
  return Le("  ", e.replace(/\n/g, `
  `));
}
function Nf(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function If(e) {
  return e.kind === Lt.FIELD || e.kind === Lt.FRAGMENT_SPREAD || e.kind === Lt.INLINE_FRAGMENT;
}
function wi(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : db(r).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = t && t[i.value.name.value], _e(a !== void 0, 64, o.name.value)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function si(e, t, r) {
  var n = new Set(e), o = n.size;
  return Yr(t, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!r || !n.size))
        return sl;
    }
  }), r ? !n.size : n.size < o;
}
function lb(e) {
  return e && si(["client", "export"], e, !0);
}
function fb(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function db(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (fb(r)) {
      var n = r.arguments, o = r.name.value;
      _e(n && n.length === 1, 65, o);
      var i = n[0];
      _e(i.name && i.name.value === "if", 66, o);
      var a = i.value;
      _e(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 67, o), t.push({ directive: r, ifArgument: i });
    }
  }), t;
}
const hb = () => /* @__PURE__ */ Object.create(null), { forEach: vb, slice: pb } = Array.prototype, { hasOwnProperty: mb } = Object.prototype;
class mn {
  constructor(t = !0, r = hb) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return vb.call(t, (n) => r = r.getChildTrie(n)), mb.call(r, "data") ? r.data : r.data = this.makeData(pb.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, o = t.length; r && n < o; ++n) {
      const i = this.weakness && Af(t[n]) ? r.weak : r.strong;
      r = i && i.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && Af(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new mn(this.weakness, this.makeData)), n;
  }
}
function Af(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Jr = typeof WeakMap == "function" && Tr(function() {
  return navigator.product;
}) !== "ReactNative", zv = typeof WeakSet == "function", Hv = typeof Symbol == "function" && typeof Symbol.for == "function", ts = Hv && Symbol.asyncIterator;
Tr(function() {
  return window.document.createElement;
});
Tr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function gt(e) {
  return e !== null && typeof e == "object";
}
function gb(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw tr(
        68,
        i.operation,
        i.name ? " named '".concat(i.name.value, "'") : ""
      );
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof r > "u" && (_e(n.length === 1, 69, n.length), r = n[0].name.value);
  var o = V(V({}, e), { definitions: cn([
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
  ], e.definitions, !0) });
  return o;
}
function rs(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function ns(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return _e(n, 70, r), n || null;
    }
    default:
      return null;
  }
}
function ho(e) {
  return { __ref: String(e) };
}
function ct(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function yb(e) {
  return gt(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function bb(e) {
  return e.kind === "StringValue";
}
function Sb(e) {
  return e.kind === "BooleanValue";
}
function Eb(e) {
  return e.kind === "IntValue";
}
function wb(e) {
  return e.kind === "FloatValue";
}
function Cb(e) {
  return e.kind === "Variable";
}
function Ob(e) {
  return e.kind === "ObjectValue";
}
function xb(e) {
  return e.kind === "ListValue";
}
function _b(e) {
  return e.kind === "EnumValue";
}
function Tb(e) {
  return e.kind === "NullValue";
}
function yo(e, t, r, n) {
  if (Eb(r) || wb(r))
    e[t.value] = Number(r.value);
  else if (Sb(r) || bb(r))
    e[t.value] = r.value;
  else if (Ob(r)) {
    var o = {};
    r.fields.map(function(a) {
      return yo(o, a.name, a.value, n);
    }), e[t.value] = o;
  } else if (Cb(r)) {
    var i = (n || {})[r.name.value];
    e[t.value] = i;
  } else if (xb(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return yo(s, t, a, n), s[t.value];
    });
  else if (_b(r))
    e[t.value] = r.value;
  else if (Tb(r))
    e[t.value] = null;
  else
    throw tr(79, t.value, r.kind);
}
function Rb(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(o) {
    r[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return yo(r[o.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return yo(n, i, a, t);
  })), cl(e.name.value, n, r);
}
var Pb = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], cl = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var o = {};
      return n.forEach(function(s) {
        o[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(Ho(o), ")");
    } else
      return r.connection.key;
  var i = e;
  if (t) {
    var a = Ho(t);
    i += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Pb.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? i += "@".concat(s, "(").concat(Ho(r[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var t = Ho;
    return Ho = e, t;
  }
}), Ho = function(t) {
  return JSON.stringify(t, Mb);
};
function Mb(e, t) {
  return gt(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function os(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return yo(r, o, i, t);
    }), r;
  }
  return null;
}
function fn(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Pc(e, t, r) {
  for (var n, o = 0, i = t.selections; o < i.length; o++) {
    var a = i[o];
    if (dn(a)) {
      if (a.name.value === "__typename")
        return e[fn(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, c = n; s < c.length; s++) {
      var a = c[s], u = Pc(e, ns(a, r).selectionSet, r);
      if (typeof u == "string")
        return u;
    }
}
function dn(e) {
  return e.kind === "Field";
}
function Nb(e) {
  return e.kind === "InlineFragment";
}
function Ci(e) {
  _e(e && e.kind === "Document", 71);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw tr(72, r.kind);
    return r;
  });
  return _e(t.length <= 1, 73, t.length), e;
}
function Oi(e) {
  return Ci(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function Mc(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function is(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Bv(e) {
  var t = Oi(e);
  return _e(t && t.operation === "query", 74), t;
}
function Ib(e) {
  _e(e.kind === "Document", 75), _e(e.definitions.length <= 1, 76);
  var t = e.definitions[0];
  return _e(t.kind === "FragmentDefinition", 77), t;
}
function xi(e) {
  Ci(e);
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var o = n[r];
    if (o.kind === "OperationDefinition") {
      var i = o.operation;
      if (i === "query" || i === "mutation" || i === "subscription")
        return o;
    }
    o.kind === "FragmentDefinition" && !t && (t = o);
  }
  if (t)
    return t;
  throw tr(78);
}
function ul(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && yo(t, n.variable.name, n.defaultValue);
  }), t;
}
function Ab(e) {
  return e;
}
var Wv = function() {
  function e(t, r) {
    r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = zv ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, r.getCacheKey && (this.getCacheKey = r.getCacheKey), r.cache !== !1 && (this.stableCacheKeys = new mn(Jr, function(n) {
      return { key: n };
    }));
  }
  return e.prototype.getCacheKey = function(t) {
    return [t];
  }, e.identity = function() {
    return new e(Ab, { cache: !1 });
  }, e.split = function(t, r, n) {
    return n === void 0 && (n = e.identity()), new e(function(o) {
      var i = t(o) ? r : n;
      return i.transformDocument(o);
    }, { cache: !1 });
  }, e.prototype.transformDocument = function(t) {
    if (this.resultCache.has(t))
      return t;
    var r = this.getStableCacheEntry(t);
    if (r && r.value)
      return r.value;
    Ci(t);
    var n = this.transform(t);
    return this.resultCache.add(n), r && (r.value = n), n;
  }, e.prototype.concat = function(t) {
    var r = this;
    return new e(function(n) {
      return t.transformDocument(r.transformDocument(n));
    }, { cache: !1 });
  }, e.prototype.getStableCacheEntry = function(t) {
    if (this.stableCacheKeys) {
      var r = this.getCacheKey(t);
      if (r)
        return _e(Array.isArray(r), 63), this.stableCacheKeys.lookupArray(r);
    }
  }, e;
}(), Gn = Jr ? /* @__PURE__ */ new WeakMap() : void 0, Uv = function(e) {
  var t;
  return t = Gn?.get(e), t || (t = sb(e), Gn?.set(e, t)), t;
}, wt = Array.isArray;
function Fr(e) {
  return Array.isArray(e) && e.length > 0;
}
var Df = {
  kind: Lt.FIELD,
  name: {
    kind: Lt.NAME,
    value: "__typename"
  }
};
function qv(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === Lt.FRAGMENT_SPREAD && qv(t[r.name.value], t);
  });
}
function Db(e) {
  return qv(Oi(e) || Ib(e), rs(is(e))) ? null : e;
}
function Fb(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? t.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var o = t.get(n.name.value);
    return !o && r.size && r.forEach(function(i, a) {
      a(n) && (o = i);
    }), o;
  };
}
function Ff(e) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var o = t.get(n);
    return o || t.set(n, o = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), o;
  };
}
function Qv(e, t) {
  Ci(t);
  for (var r = Ff(""), n = Ff(""), o = function(y) {
    for (var S = 0, E = void 0; S < y.length && (E = y[S]); ++S)
      if (!wt(E)) {
        if (E.kind === Lt.OPERATION_DEFINITION)
          return r(E.name && E.name.value);
        if (E.kind === Lt.FRAGMENT_DEFINITION)
          return n(E.name.value);
      }
    return globalThis.__DEV__ !== !1 && _e.error(80), null;
  }, i = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === Lt.OPERATION_DEFINITION && ++i;
  var s = Fb(e), c = function(y) {
    return Fr(y) && y.map(s).some(function(S) {
      return S && S.remove;
    });
  }, u = /* @__PURE__ */ new Map(), l = !1, f = {
    enter: function(y) {
      if (c(y.directives))
        return l = !0, null;
    }
  }, d = Yr(t, {
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, S, E, w, b) {
        var C = o(b);
        C && C.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, S, E, w, b) {
        if (c(y.directives))
          return l = !0, null;
        var C = o(b);
        C && C.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, S, E, w) {
        u.set(JSON.stringify(w), y);
      },
      leave: function(y, S, E, w) {
        var b = u.get(JSON.stringify(w));
        if (y === b)
          return y;
        if (i > 0 && y.selectionSet.selections.every(function(C) {
          return C.kind === Lt.FIELD && C.name.value === "__typename";
        }))
          return n(y.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(y) {
        if (s(y))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return t;
  var h = function(y) {
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(S) {
      h(n(S)).transitiveVars.forEach(function(E) {
        y.transitiveVars.add(E);
      });
    })), y;
  }, m = /* @__PURE__ */ new Set();
  d.definitions.forEach(function(y) {
    y.kind === Lt.OPERATION_DEFINITION ? h(r(y.name && y.name.value)).fragmentSpreads.forEach(function(S) {
      m.add(S);
    }) : y.kind === Lt.FRAGMENT_DEFINITION && i === 0 && !n(y.name.value).removed && m.add(y.name.value);
  }), m.forEach(function(y) {
    h(n(y)).fragmentSpreads.forEach(function(S) {
      m.add(S);
    });
  });
  var p = function(y) {
    return !!(!m.has(y) || n(y).removed);
  }, g = {
    enter: function(y) {
      if (p(y.name.value))
        return null;
    }
  };
  return Db(Yr(d, {
    FragmentSpread: g,
    FragmentDefinition: g,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var S = h(r(y.name && y.name.value)).transitiveVars;
          if (S.size < y.variableDefinitions.length)
            return V(V({}, y), { variableDefinitions: y.variableDefinitions.filter(function(E) {
              return S.has(E.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var ll = Object.assign(function(e) {
  return Yr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === Lt.OPERATION_DEFINITION)) {
          var o = t.selections;
          if (o) {
            var i = o.some(function(s) {
              return dn(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(dn(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return V(V({}, t), { selections: cn(cn([], o, !0), [Df], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === Df;
  }
});
function $b(e) {
  var t = xi(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Yr(e, {
    OperationDefinition: {
      enter: function(o) {
        return V(V({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function Gv(e) {
  Ci(e);
  var t = Qv([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var kb = Object.prototype.hasOwnProperty;
function $f() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return fl(e);
}
function fl(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new hn(), o = 1; o < r; ++o)
      t = n.merge(t, e[o]);
  return t;
}
var Lb = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, hn = function() {
  function e(t) {
    t === void 0 && (t = Lb), this.reconciler = t, this.isObject = gt, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return gt(r) && gt(t) ? (Object.keys(r).forEach(function(a) {
      if (kb.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var c = n.reconciler.apply(n, cn([t, r, a], o, !1));
          c !== s && (t = n.shallowCopyForMerge(t), t[a] = c);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return gt(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = V({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function jb(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Vb(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vb(e, t) {
  if (e) {
    if (typeof e == "string")
      return kf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kf(e, t);
  }
}
function kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Lf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function dl(e, t, r) {
  return t && Lf(e.prototype, t), r && Lf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var hl = function() {
  return typeof Symbol == "function";
}, vl = function(e) {
  return hl() && !!Symbol[e];
}, pl = function(e) {
  return vl(e) ? Symbol[e] : "@@" + e;
};
hl() && !vl("observable") && (Symbol.observable = Symbol("observable"));
var zb = pl("iterator"), Nc = pl("observable"), Kv = pl("species");
function Ta(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function Bo(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Kv], t === null && (t = void 0)), t !== void 0 ? t : ht;
}
function Hb(e) {
  return e instanceof ht;
}
function bo(e) {
  bo.log ? bo.log(e) : setTimeout(function() {
    throw e;
  });
}
function ua(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      bo(t);
    }
  });
}
function Yv(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = Ta(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      bo(n);
    }
}
function Ic(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Bb(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Xv(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Xv(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = Ta(n, t);
    switch (t) {
      case "next":
        o && o.call(n, r);
        break;
      case "error":
        if (Ic(e), o)
          o.call(n, r);
        else
          throw r;
        break;
      case "complete":
        Ic(e), o && o.call(n);
        break;
    }
  } catch (i) {
    bo(i);
  }
  e._state === "closed" ? Yv(e) : e._state === "running" && (e._state = "ready");
}
function Ls(e, t, r) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: r
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: r
      }], ua(function() {
        return Bb(e);
      });
      return;
    }
    Xv(e, t, r);
  }
}
var Wb = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var o = new Ub(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Ic(this), Yv(this));
  }, dl(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Ub = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Ls(this._subscription, "next", n);
  }, t.error = function(n) {
    Ls(this._subscription, "error", n);
  }, t.complete = function() {
    Ls(this._subscription, "complete");
  }, dl(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), ht = /* @__PURE__ */ function() {
  function e(r) {
    if (!(this instanceof e))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var t = e.prototype;
  return t.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new Wb(n, this._subscriber);
  }, t.forEach = function(n) {
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
  }, t.map = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Bo(this);
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
  }, t.filter = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Bo(this);
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
  }, t.reduce = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Bo(this), a = arguments.length > 1, s = !1, c = arguments[1], u = c;
    return new i(function(l) {
      return o.subscribe({
        next: function(f) {
          var d = !s;
          if (s = !0, !d || a)
            try {
              u = n(u, f);
            } catch (h) {
              return l.error(h);
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
  }, t.concat = function() {
    for (var n = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    var s = Bo(this);
    return new s(function(c) {
      var u, l = 0;
      function f(d) {
        u = d.subscribe({
          next: function(h) {
            c.next(h);
          },
          error: function(h) {
            c.error(h);
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
  }, t.flatMap = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = Bo(this);
    return new i(function(a) {
      var s = [], c = o.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (d) {
              return a.error(d);
            }
          var f = i.from(l).subscribe({
            next: function(d) {
              a.next(d);
            },
            error: function(d) {
              a.error(d);
            },
            complete: function() {
              var d = s.indexOf(f);
              d >= 0 && s.splice(d, 1), u();
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
  }, t[Nc] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = Ta(n, Nc);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return Hb(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (vl("iterator") && (i = Ta(n, zb), i))
      return new o(function(s) {
        ua(function() {
          if (!s.closed) {
            for (var c = jb(i.call(n)), u; !(u = c()).done; ) {
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
        ua(function() {
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
      ua(function() {
        if (!s.closed) {
          for (var c = 0; c < o.length; ++c)
            if (s.next(o[c]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, dl(e, null, [{
    key: Kv,
    get: function() {
      return this;
    }
  }]), e;
}();
hl() && Object.defineProperty(ht, Symbol("extensions"), {
  value: {
    symbol: Nc,
    hostReportError: bo
  },
  configurable: !0
});
var Ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qb(e) {
  var t, r = e.Symbol;
  if (typeof r == "function")
    if (r.observable)
      t = r.observable;
    else {
      typeof r.for == "function" ? t = r.for("https://github.com/benlesh/symbol-observable") : t = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = t;
      } catch {
      }
    }
  else
    t = "@@observable";
  return t;
}
var ro;
typeof self < "u" ? ro = self : typeof window < "u" ? ro = window : typeof global < "u" ? ro = global : typeof module < "u" ? ro = module : ro = Function("return this")();
qb(ro);
var jf = ht.prototype, Vf = "@@observable";
jf[Vf] || (jf[Vf] = function() {
  return this;
});
var Qb = Object.prototype.toString;
function Jv(e) {
  return Ac(e);
}
function Ac(e, t) {
  switch (Qb.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(o, i) {
        r[i] = Ac(o, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = Ac(e[o], t);
      }), n;
    }
    default:
      return e;
  }
}
function Gb(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    gt(r) && Kb(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      gt(r[n]) && t.add(r[n]);
    });
  }), e;
}
function Kb(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function Dc(e) {
  return globalThis.__DEV__ !== !1 && Gb(e), e;
}
function Jo(e, t, r) {
  var n = [];
  e.forEach(function(o) {
    return o[t] && n.push(o);
  }), n.forEach(function(o) {
    return o[t](r);
  });
}
function js(e, t, r) {
  return new ht(function(n) {
    var o = n.next, i = n.error, a = n.complete, s = 0, c = !1, u = {
      then: function(h) {
        return new Promise(function(m) {
          return m(h());
        });
      }
    };
    function l(h, m) {
      return h ? function(p) {
        ++s;
        var g = function() {
          return h(p);
        };
        u = u.then(g, g).then(function(y) {
          --s, o && o.call(n, y), c && f.complete();
        }, function(y) {
          throw --s, y;
        }).catch(function(y) {
          i && i.call(n, y);
        });
      } : function(p) {
        return m && m.call(n, p);
      };
    }
    var f = {
      next: l(t, o),
      error: l(r, i),
      complete: function() {
        c = !0, s || a && a.call(n);
      }
    }, d = e.subscribe(f);
    return function() {
      return d.unsubscribe();
    };
  });
}
function Zv(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: ht });
  }
  return Hv && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function zf(e) {
  return e && typeof e.then == "function";
}
var no = function(e) {
  $r(t, e);
  function t(r) {
    var n = e.call(this, function(o) {
      return n.addObserver(o), function() {
        return n.removeObserver(o);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(o, i) {
      n.resolve = o, n.reject = i;
    }), n.handlers = {
      next: function(o) {
        n.sub !== null && (n.latest = ["next", o], n.notify("next", o), Jo(n.observers, "next", o));
      },
      error: function(o) {
        var i = n.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), n.sub = null, n.latest = ["error", o], n.reject(o), n.notify("error", o), Jo(n.observers, "error", o));
      },
      complete: function() {
        var o = n, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var c = s.shift();
          c ? zf(c) ? c.then(function(u) {
            return n.sub = u.subscribe(n.handlers);
          }) : n.sub = c.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Jo(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof r == "function" && (r = [new ht(r)]), zf(r) ? r.then(function(o) {
      return n.start(o);
    }, n.handlers.error) : n.start(r), n;
  }
  return t.prototype.start = function(r) {
    this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
  }, t.prototype.deliverLastMessage = function(r) {
    if (this.latest) {
      var n = this.latest[0], o = r[n];
      o && o.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
    }
  }, t.prototype.addObserver = function(r) {
    this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
  }, t.prototype.removeObserver = function(r) {
    this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
  }, t.prototype.notify = function(r, n) {
    var o = this.nextResultListeners;
    o.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), o.forEach(function(i) {
      return i(r, n);
    }));
  }, t.prototype.beforeNext = function(r) {
    var n = !1;
    this.nextResultListeners.add(function(o, i) {
      n || (n = !0, r(o, i));
    });
  }, t;
}(ht);
Zv(no);
function vo(e) {
  return "incremental" in e;
}
function Yb(e) {
  return "hasNext" in e && "data" in e;
}
function Xb(e) {
  return vo(e) || Yb(e);
}
function Jb(e) {
  return gt(e) && "payload" in e;
}
function ep(e, t) {
  var r = e, n = new hn();
  return vo(t) && Fr(t.incremental) && t.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var c = a[s], u = !isNaN(+c), l = u ? [] : {};
      l[c] = i, i = l;
    }
    r = n.merge(r, i);
  }), r;
}
function la(e) {
  var t = Fc(e);
  return Fr(t);
}
function Fc(e) {
  var t = Fr(e.errors) ? e.errors.slice(0) : [];
  return vo(e) && Fr(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function So() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(o) {
      var i = n[o];
      i !== void 0 && (r[o] = i);
    });
  }), r;
}
function Vs(e, t) {
  return So(e, t, t.variables && {
    variables: So(V(V({}, e && e.variables), t.variables))
  });
}
function Zb(e) {
  return !!e.body;
}
function e1(e) {
  return !!e.getReader;
}
function t1(e) {
  return !!(ts && e[Symbol.asyncIterator]);
}
function r1(e) {
  return !!e.stream;
}
function n1(e) {
  return !!e.arrayBuffer;
}
function o1(e) {
  return !!e.pipe;
}
function zs(e) {
  return new ht(function(t) {
    t.error(e);
  });
}
var $c = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function i1(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var o = n[r];
    if (t.indexOf(o) < 0)
      throw tr(41, o);
  }
  return e;
}
function a1(e, t) {
  var r = V({}, e), n = function(i) {
    typeof i == "function" ? r = V(V({}, r), i(r)) : r = V(V({}, r), i);
  }, o = function() {
    return V({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: o
  }), t;
}
function s1(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? Mc(t.query) || void 0 : ""), t;
}
function c1(e, t) {
  var r = V({}, e), n = new Set(Object.keys(e));
  return Yr(t, {
    Variable: function(o, i, a) {
      a && a.kind !== "VariableDefinition" && n.delete(o.name.value);
    }
  }), n.forEach(function(o) {
    delete r[o];
  }), r;
}
function Hf(e, t) {
  return t ? t(e) : ht.of();
}
function Wo(e) {
  return typeof e == "function" ? new Po(e) : e;
}
function qi(e) {
  return e.request.length <= 1;
}
var Po = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return ht.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Wo).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var o = Wo(r), i = Wo(n || new e(Hf));
    return qi(o) && qi(i) ? new e(function(a) {
      return t(a) ? o.request(a) || ht.of() : i.request(a) || ht.of();
    }) : new e(function(a, s) {
      return t(a) ? o.request(a, s) || ht.of() : i.request(a, s) || ht.of();
    });
  }, e.execute = function(t, r) {
    return t.request(a1(r.context, s1(i1(r)))) || ht.of();
  }, e.concat = function(t, r) {
    var n = Wo(t);
    if (qi(n))
      return globalThis.__DEV__ !== !1 && _e.warn(33, n), n;
    var o = Wo(r);
    return qi(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || ht.of();
      }) || ht.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || ht.of();
      }) || ht.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(Hf)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw tr(34);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), kc = Po.execute;
function u1(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function l1(e) {
  var t = null, r = null, n = !1, o = [], i = [];
  function a(f) {
    if (!r) {
      if (i.length) {
        var d = i.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: f, done: !1 });
      }
      o.push(f);
    }
  }
  function s(f) {
    r = f;
    var d = i.slice();
    d.forEach(function(h) {
      h[1](f);
    }), !t || t();
  }
  function c() {
    n = !0;
    var f = i.slice();
    f.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c);
  }, e.on("data", a), e.on("error", s), e.on("end", c), e.on("finish", c), e.on("close", c);
  function u() {
    return new Promise(function(f, d) {
      if (r)
        return d(r);
      if (o.length)
        return f({ value: o.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      i.push([f, d]);
    });
  }
  var l = {
    next: function() {
      return u();
    }
  };
  return ts && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function f1(e) {
  var t = !1, r = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(n, o) {
        e.then(function(i) {
          n({ value: i, done: !1 });
        }).catch(o);
      }));
    }
  };
  return ts && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Bf(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return ts && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function d1(e) {
  var t = e;
  if (Zb(e) && (t = e.body), t1(t))
    return u1(t);
  if (e1(t))
    return Bf(t.getReader());
  if (r1(t))
    return Bf(t.stream().getReader());
  if (n1(t))
    return f1(t.arrayBuffer());
  if (o1(t))
    return l1(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var gl = Symbol();
function h1(e) {
  return e.extensions ? Array.isArray(e.extensions[gl]) : !1;
}
function v1(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var p1 = function(e) {
  var t = cn(cn(cn([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return gt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Kn = function(e) {
  $r(t, e);
  function t(r) {
    var n = r.graphQLErrors, o = r.protocolErrors, i = r.clientErrors, a = r.networkError, s = r.errorMessage, c = r.extraInfo, u = e.call(this, s) || this;
    return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = o || [], u.clientErrors = i || [], u.networkError = a || null, u.message = s || p1(u), u.extraInfo = c, u.__proto__ = t.prototype, u;
  }
  return t;
}(Error), Wf = Object.prototype.hasOwnProperty;
function m1(e, t) {
  var r;
  return on(this, void 0, void 0, function() {
    var n, o, i, a, s, c, u, l, f, d, h, m, p, g, y, S, E, w, b, C, O, R, M;
    return an(this, function(_) {
      switch (_.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          n = new TextDecoder("utf-8"), o = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), i = "boundary=", a = o?.includes(i) ? o?.substring(o?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), c = "", u = d1(e), l = !0, _.label = 1;
        case 1:
          return l ? [4, u.next()] : [3, 3];
        case 2:
          for (f = _.sent(), d = f.value, h = f.done, m = typeof d == "string" ? d : n.decode(d), p = c.length - s.length + 1, l = !h, c += m, g = c.indexOf(s, p); g > -1; ) {
            if (y = void 0, R = [
              c.slice(0, g),
              c.slice(g + s.length)
            ], y = R[0], c = R[1], S = y.indexOf(`\r
\r
`), E = g1(y.slice(0, S)), w = E["content-type"], w && w.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (b = y.slice(S), b) {
              if (C = tp(e, b), Object.keys(C).length > 1 || "data" in C || "incremental" in C || "errors" in C || "payload" in C)
                Jb(C) ? (O = {}, "payload" in C && (O = V({}, C.payload)), "errors" in C && (O = V(V({}, O), { extensions: V(V({}, "extensions" in O ? O.extensions : null), (M = {}, M[gl] = C.errors, M)) })), t(O)) : t(C);
              else if (Object.keys(C).length === 1 && "hasNext" in C && !C.hasNext)
                return [2];
            }
            g = c.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function g1(e) {
  var t = {};
  return e.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var o = r.slice(0, n).trim().toLowerCase(), i = r.slice(n + 1).trim();
      t[o] = i;
    }
  }), t;
}
function tp(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    $c(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function y1(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function b1(e) {
  return function(t) {
    return t.text().then(function(r) {
      return tp(t, r);
    }).then(function(r) {
      return t.status >= 300 && $c(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !Wf.call(r, "data") && !Wf.call(r, "errors") && $c(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var Lc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (o) {
    var n = tr(37, t, o.message);
    throw n.parseError = o, n;
  }
  return r;
}, S1 = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, E1 = {
  accept: "*/*",
  "content-type": "application/json"
}, w1 = {
  method: "POST"
}, C1 = {
  http: S1,
  headers: E1,
  options: w1
}, O1 = function(e, t) {
  return t(e);
};
function x1(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = {}, i = {};
  r.forEach(function(f) {
    o = V(V(V({}, o), f.options), { headers: V(V({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = V(V({}, i), f.http);
  }), o.headers && (o.headers = _1(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, c = e.variables, u = e.query, l = { operationName: a, variables: c };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = t(u, Uv)), {
    options: o,
    body: l
  };
}
function _1(e, t) {
  if (!t) {
    var r = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(i) {
      r[i.toLowerCase()] = e[i];
    }), r;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(i) {
    n[i.toLowerCase()] = { originalName: i, value: e[i] };
  });
  var o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(i) {
    o[n[i].originalName] = n[i].value;
  }), o;
}
var T1 = function(e) {
  if (!e && typeof fetch > "u")
    throw tr(35);
}, R1 = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function P1(e, t) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var o = void 0;
    try {
      o = Lc(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (t.extensions) {
    var i = void 0;
    try {
      i = Lc(t.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", i);
  }
  var a = "", s = e, c = e.indexOf("#");
  c !== -1 && (a = e.substr(c), s = e.substr(0, c));
  var u = s.indexOf("?") === -1 ? "?" : "&", l = s + u + r.join("&") + a;
  return { newURI: l };
}
var Uf = Tr(function() {
  return fetch;
}), rp = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, o = e.print, i = o === void 0 ? O1 : o, a = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, u = e.includeUnusedVariables, l = u === void 0 ? !1 : u, f = Kr(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && T1(n || Uf);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new Po(function(h) {
    var m = R1(h, r), p = h.getContext(), g = {};
    if (p.clientAwareness) {
      var y = p.clientAwareness, S = y.name, E = y.version;
      S && (g["apollographql-client-name"] = S), E && (g["apollographql-client-version"] = E);
    }
    var w = V(V({}, g), p.headers), b = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: w
    };
    if (si(["client"], h.query)) {
      var C = Gv(h.query);
      if (!C)
        return zs(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      h.query = C;
    }
    var O = x1(h, i, C1, d, b), R = O.options, M = O.body;
    M.variables && !l && (M.variables = c1(M.variables, h.query));
    var _;
    !R.signal && typeof AbortController < "u" && (_ = new AbortController(), R.signal = _.signal);
    var $ = function(q) {
      return q.kind === "OperationDefinition" && q.operation === "mutation";
    }, T = function(q) {
      return q.kind === "OperationDefinition" && q.operation === "subscription";
    }, x = T(xi(h.query)), P = si(["defer"], h.query);
    if (c && !h.query.definitions.some($) && (R.method = "GET"), P || x) {
      R.headers = R.headers || {};
      var A = "multipart/mixed;";
      x && P && globalThis.__DEV__ !== !1 && _e.warn(36), x ? A += "boundary=graphql;subscriptionSpec=1.0,application/json" : P && (A += "deferSpec=20220824,application/json"), R.headers.accept = A;
    }
    if (R.method === "GET") {
      var F = P1(m, M), D = F.newURI, B = F.parseError;
      if (B)
        return zs(B);
      m = D;
    } else
      try {
        R.body = Lc(M, "Payload");
      } catch (q) {
        return zs(q);
      }
    return new ht(function(q) {
      var ne = n || Tr(function() {
        return fetch;
      }) || Uf, se = q.next.bind(q);
      return ne(m, R).then(function(L) {
        var H;
        h.setContext({ response: L });
        var z = (H = L.headers) === null || H === void 0 ? void 0 : H.get("content-type");
        return z !== null && /^multipart\/mixed/i.test(z) ? m1(L, se) : b1(h)(L).then(se);
      }).then(function() {
        _ = void 0, q.complete();
      }).catch(function(L) {
        _ = void 0, y1(L, q);
      }), function() {
        _ && _.abort();
      };
    });
  });
}, M1 = function(e) {
  $r(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, rp(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(Po);
const { toString: qf, hasOwnProperty: N1 } = Object.prototype, Qf = Function.prototype.toString, jc = /* @__PURE__ */ new Map();
function St(e, t) {
  try {
    return Vc(e, t);
  } finally {
    jc.clear();
  }
}
function Vc(e, t) {
  if (e === t)
    return !0;
  const r = qf.call(e), n = qf.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Kf(e, t))
        return !0;
      const o = Gf(e), i = Gf(t), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!N1.call(t, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const c = o[s];
        if (!Vc(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e)
        return t !== t;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size)
        return !1;
      if (Kf(e, t))
        return !0;
      const o = e.entries(), i = r === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, c] = a.value;
        if (!t.has(s) || i && !Vc(c, t.get(s)))
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
      e = new Uint8Array(e), t = new Uint8Array(t);
    case "[object DataView]": {
      let o = e.byteLength;
      if (o === t.byteLength)
        for (; o-- && e[o] === t[o]; )
          ;
      return o === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const o = Qf.call(e);
      return o !== Qf.call(t) ? !1 : !D1(o, A1);
    }
  }
  return !1;
}
function Gf(e) {
  return Object.keys(e).filter(I1, e);
}
function I1(e) {
  return this[e] !== void 0;
}
const A1 = "{ [native code] }";
function D1(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Kf(e, t) {
  let r = jc.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    jc.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
function F1() {
}
class $1 {
  constructor(t = 1 / 0, r = F1) {
    this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: o } = r;
      o && (o.older = n), n && (n.newer = o), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = o);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
  }
}
let zt = null;
const Yf = {};
let k1 = 1;
const L1 = () => class {
  constructor() {
    this.id = [
      "slot",
      k1++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = zt; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Yf)
          break;
        return t !== zt && (zt.slots[this.id] = r), !0;
      }
    return zt && (zt.slots[this.id] = Yf), !1;
  }
  getValue() {
    if (this.hasValue())
      return zt.slots[this.id];
  }
  withValue(t, r, n, o) {
    const i = {
      __proto__: null,
      [this.id]: t
    }, a = zt;
    zt = { parent: a, slots: i };
    try {
      return r.apply(o, n);
    } finally {
      zt = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = zt;
    return function() {
      const n = zt;
      try {
        return zt = r, t.apply(this, arguments);
      } finally {
        zt = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (zt) {
      const o = zt;
      try {
        return zt = null, t.apply(n, r);
      } finally {
        zt = o;
      }
    } else
      return t.apply(n, r);
  }
};
function Xf(e) {
  try {
    return e();
  } catch {
  }
}
const Hs = "@wry/context:Slot", j1 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Xf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Xf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Jf = j1, np = Jf[Hs] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Hs] || function(e) {
  try {
    Object.defineProperty(Jf, Hs, {
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
}(L1()), as = new np(), { hasOwnProperty: V1 } = Object.prototype, yl = Array.from || function(e) {
  const t = [];
  return e.forEach((r) => t.push(r)), t;
};
function Ra(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const ci = [], z1 = 100;
function Eo(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function H1(e, t) {
  const r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function op(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function B1(e) {
  return e.slice(0);
}
class ss {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++ss.count;
  }
  peek() {
    if (this.value.length === 1 && !vn(this))
      return Zf(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return Eo(!this.recomputing, "already recomputing"), Zf(this), vn(this) ? W1(this, t) : op(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, this.value.length = 0, ip(this), Ra(this));
  }
  dispose() {
    this.setDirty(), lp(this), bl(this, (t, r) => {
      t.setDirty(), fp(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = ci.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (yl(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), ci.push(this.deps), this.deps = null);
  }
}
ss.count = 0;
function Zf(e) {
  const t = as.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), vn(e) ? sp(t, e) : cp(t, e), t;
}
function W1(e, t) {
  return lp(e), as.withValue(e, U1, [e, t]), Q1(e, t) && q1(e), op(e.value);
}
function U1(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function vn(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function q1(e) {
  e.dirty = !1, !vn(e) && ap(e);
}
function ip(e) {
  bl(e, sp);
}
function ap(e) {
  bl(e, cp);
}
function bl(e, t) {
  const r = e.parents.size;
  if (r) {
    const n = yl(e.parents);
    for (let o = 0; o < r; ++o)
      t(n[o], e);
  }
}
function sp(e, t) {
  Eo(e.childValues.has(t)), Eo(vn(t));
  const r = !vn(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = ci.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && ip(e);
}
function cp(e, t) {
  Eo(e.childValues.has(t)), Eo(!vn(t));
  const r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, B1(t.value)) : H1(r, t.value) || e.setDirty(), up(e, t), !vn(e) && ap(e);
}
function up(e, t) {
  const r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (ci.length < z1 && ci.push(r), e.dirtyChildren = null));
}
function lp(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, r) => {
    fp(e, r);
  }), e.forgetDeps(), Eo(e.dirtyChildren === null);
}
function fp(e, t) {
  t.parents.delete(e), e.childValues.delete(t), up(e, t);
}
function Q1(e, t) {
  if (typeof e.subscribe == "function")
    try {
      Ra(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const G1 = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function dp(e) {
  const t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(o) {
    const i = as.getValue();
    if (i) {
      let a = t.get(o);
      a || t.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof r == "function" && (Ra(a), a.unsubscribe = r(o));
    }
  }
  return n.dirty = function(i, a) {
    const s = t.get(i);
    if (s) {
      const c = a && V1.call(G1, a) ? a : "setDirty";
      yl(s).forEach((u) => u[c]()), t.delete(i), Ra(s);
    }
  }, n;
}
let ed;
function K1(...e) {
  return (ed || (ed = new mn(typeof WeakMap == "function"))).lookupArray(e);
}
const Bs = /* @__PURE__ */ new Set();
function Pa(e, { max: t = Math.pow(2, 16), makeCacheKey: r = K1, keyArgs: n, subscribe: o } = /* @__PURE__ */ Object.create(null)) {
  const i = new $1(t, (l) => l.dispose()), a = function() {
    const l = r.apply(null, n ? n.apply(null, arguments) : arguments);
    if (l === void 0)
      return e.apply(null, arguments);
    let f = i.get(l);
    f || (i.set(l, f = new ss(e)), f.subscribe = o, f.forget = () => i.delete(l));
    const d = f.recompute(Array.prototype.slice.call(arguments));
    return i.set(l, f), Bs.add(i), as.hasValue() || (Bs.forEach((h) => h.clean()), Bs.clear()), d;
  };
  Object.defineProperty(a, "size", {
    get() {
      return i.map.size;
    },
    configurable: !1,
    enumerable: !1
  }), Object.freeze(a.options = {
    max: t,
    makeCacheKey: r,
    keyArgs: n,
    subscribe: o
  });
  function s(l) {
    const f = i.get(l);
    f && f.setDirty();
  }
  a.dirtyKey = s, a.dirty = function() {
    s(r.apply(null, arguments));
  };
  function c(l) {
    const f = i.get(l);
    if (f)
      return f.peek();
  }
  a.peekKey = c, a.peek = function() {
    return c(r.apply(null, arguments));
  };
  function u(l) {
    return i.delete(l);
  }
  return a.forgetKey = u, a.forget = function() {
    return u(r.apply(null, arguments));
  }, a.makeCacheKey = r, a.getKey = n ? function() {
    return r.apply(null, n.apply(null, arguments));
  } : r, Object.freeze(a);
}
var Y1 = function() {
  function e() {
    this.assumeImmutableResults = !1, this.getFragmentDoc = Pa(gb);
  }
  return e.prototype.batch = function(t) {
    var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, o;
    return this.performTransaction(function() {
      return o = t.update(r);
    }, n), o;
  }, e.prototype.recordOptimisticTransaction = function(t, r) {
    this.performTransaction(t, r);
  }, e.prototype.transformDocument = function(t) {
    return t;
  }, e.prototype.transformForLink = function(t) {
    return t;
  }, e.prototype.identify = function(t) {
  }, e.prototype.gc = function() {
    return [];
  }, e.prototype.modify = function(t) {
    return !1;
  }, e.prototype.readQuery = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(V(V({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(V(V({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
  }, e.prototype.writeQuery = function(t) {
    var r = t.id, n = t.data, o = Kr(t, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, o = t.fragment, i = t.fragmentName, a = Kr(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readQuery(t), i = r(o);
        return i == null ? o : (n.writeQuery(V(V({}, t), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readFragment(t), i = r(o);
        return i == null ? o : (n.writeFragment(V(V({}, t), { data: i })), i);
      }
    });
  }, e;
}(), hp = function(e) {
  $r(t, e);
  function t(r, n, o, i) {
    var a, s = e.call(this, r) || this;
    if (s.message = r, s.path = n, s.query = o, s.variables = i, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var c = s.path.length - 1; c >= 0; --c)
        s.missing = (a = {}, a[s.path[c]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = t.prototype, s;
  }
  return t;
}(Error), $t = Object.prototype.hasOwnProperty;
function Uo(e) {
  return e == null;
}
function vp(e, t) {
  var r = e.__typename, n = e.id, o = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Uo(n) ? Uo(o) ? void 0 : { _id: o } : { id: n }), Uo(n) && !Uo(o) && (n = o), !Uo(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var pp = {
  dataIdFromObject: vp,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function X1(e) {
  return So(pp, e);
}
function mp(e) {
  var t = e.canonizeResults;
  return t === void 0 ? pp.canonizeResults : t;
}
function J1(e, t) {
  return ct(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var gp = /^[_a-z][_0-9a-z]*/i;
function pn(e) {
  var t = e.match(gp);
  return t ? t[0] : e;
}
function zc(e, t, r) {
  return gt(t) ? wt(t) ? t.every(function(n) {
    return zc(e, n, r);
  }) : e.selections.every(function(n) {
    if (dn(n) && wi(n, r)) {
      var o = fn(n);
      return $t.call(t, o) && (!n.selectionSet || zc(n.selectionSet, t[o], r));
    }
    return !0;
  }) : !1;
}
function ao(e) {
  return gt(e) && !ct(e) && !wt(e);
}
function Z1() {
  return new hn();
}
function yp(e, t) {
  var r = rs(is(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var o = r[n];
      return !o && t && (o = t.lookup(n)), o || null;
    }
  };
}
var fa = /* @__PURE__ */ Object.create(null), Ws = function() {
  return fa;
}, td = /* @__PURE__ */ Object.create(null), ui = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return Dc(ct(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return ct(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return ho(o);
      if (ct(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = ho(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return V({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), $t.call(this.data, t)) {
      var n = this.data[t];
      if (n && $t.call(n, r))
        return n[r];
    }
    if (r === "__typename" && $t.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof nn)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), $t.call(this.data, t))
      return this.data[t];
    if (this instanceof nn)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, o;
    ct(t) && (t = t.__ref), ct(r) && (r = r.__ref);
    var i = typeof t == "string" ? this.lookup(o = t) : t, a = typeof r == "string" ? this.lookup(o = r) : r;
    if (a) {
      _e(typeof o == "string", 1);
      var s = new hn(tS).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var c = /* @__PURE__ */ Object.create(null);
        i || (c.__exists = 1), Object.keys(a).forEach(function(u) {
          if (!i || i[u] !== s[u]) {
            c[u] = 1;
            var l = pn(u);
            l !== u && !n.policies.hasKeyArgs(s.__typename, l) && (c[l] = 1), s[u] === void 0 && !(n instanceof nn) && delete s[u];
          }
        }), c.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[o] === s.__typename && delete c.__typename, Object.keys(c).forEach(function(u) {
          return n.group.dirty(o, u);
        });
      }
    }
  }, e.prototype.modify = function(t, r) {
    var n = this, o = this.lookup(t);
    if (o) {
      var i = /* @__PURE__ */ Object.create(null), a = !1, s = !0, c = {
        DELETE: fa,
        INVALIDATE: td,
        isReference: ct,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(u, l) {
          return n.policies.readField(typeof u == "string" ? {
            fieldName: u,
            from: l || ho(t)
          } : u, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(u) {
        var l = pn(u), f = o[u];
        if (f !== void 0) {
          var d = typeof r == "function" ? r : r[u] || r[l];
          if (d) {
            var h = d === Ws ? fa : d(Dc(f), V(V({}, c), { fieldName: l, storeFieldName: u, storage: n.getStorage(t, u) }));
            h === td ? n.group.dirty(t, u) : (h === fa && (h = void 0), h !== f && (i[u] = h, a = !0, f = h));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, i), s && (this instanceof nn ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var o, i = this.lookup(t);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (o = {}, o[s] = Ws, o) : Ws);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && ($t.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof nn && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      $t.call(t.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(i) {
      t && $t.call(t, i) || r.delete(i);
    }), t) {
      var n = t.__META, o = Kr(t, ["__META"]);
      Object.keys(o).forEach(function(i) {
        r.merge(i, o[i]);
      }), n && n.extraRootIds.forEach(this.retain, this);
    }
  }, e.prototype.retain = function(t) {
    return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
  }, e.prototype.release = function(t) {
    if (this.rootIds[t] > 0) {
      var r = --this.rootIds[t];
      return r || delete this.rootIds[t], r;
    }
    return 0;
  }, e.prototype.getRootIdSet = function(t) {
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof nn ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      $t.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof nn; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(t) {
    if (!$t.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        ct(i) && (r[i.__ref] = !0), gt(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          gt(s) && o.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), bp = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? dp() : null, this.keyMaker = new mn(Jr);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(Us(t, r));
      var n = pn(r);
      n !== r && this.d(Us(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(Us(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Us(e, t) {
  return t + "#" + e;
}
function rd(e, t) {
  Zo(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    $r(n, r);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, c = o.seed, u = r.call(this, i, new bp(s)) || this;
      return u.stump = new eS(u), u.storageTrie = new mn(Jr), c && u.replace(c), u;
    }
    return n.prototype.addLayer = function(o, i) {
      return this.stump.addLayer(o, i);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(e);
  e.Root = t;
})(ui || (ui = {}));
var nn = function(e) {
  $r(t, e);
  function t(r, n, o, i) {
    var a = e.call(this, n.policies, i) || this;
    return a.id = r, a.parent = n, a.replay = o, a.group = i, o(a), a;
  }
  return t.prototype.addLayer = function(r, n) {
    return new t(r, this, n, this.group);
  }, t.prototype.removeLayer = function(r) {
    var n = this, o = this.parent.removeLayer(r);
    return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(i) {
      var a = n.data[i], s = o.lookup(i);
      s ? a ? a !== s && Object.keys(a).forEach(function(c) {
        St(a[c], s[c]) || n.group.dirty(i, c);
      }) : (n.group.dirty(i, "__exists"), Object.keys(s).forEach(function(c) {
        n.group.dirty(i, c);
      })) : n.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return V(V({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return $t.call(this.data, r) ? V(V({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(ui), eS = function(e) {
  $r(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new bp(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(nn);
function tS(e, t, r) {
  var n = e[r], o = t[r];
  return St(n, o) ? n : o;
}
function Zo(e) {
  return !!(e instanceof ui && e.group.caching);
}
function rS(e) {
  return gt(e) ? wt(e) ? e.slice(0) : V({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Hc = function() {
  function e() {
    this.known = new (zv ? WeakSet : Set)(), this.pool = new mn(Jr), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return gt(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (gt(t)) {
      var r = rS(t);
      return this.passes.set(r, t), r;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var r = this;
    if (gt(t)) {
      var n = this.passes.get(t);
      if (n)
        return n;
      var o = Object.getPrototypeOf(t);
      switch (o) {
        case Array.prototype: {
          if (this.known.has(t))
            return t;
          var i = t.map(this.admit, this), a = this.pool.lookupArray(i);
          return a.array || (this.known.add(a.array = i), globalThis.__DEV__ !== !1 && Object.freeze(i)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(t))
            return t;
          var s = Object.getPrototypeOf(t), c = [s], u = this.sortedKeys(t);
          c.push(u.json);
          var l = c.length;
          u.sorted.forEach(function(h) {
            c.push(r.admit(t[h]));
          });
          var a = this.pool.lookupArray(c);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), u.sorted.forEach(function(h, m) {
              f[h] = c[l + m];
            }), globalThis.__DEV__ !== !1 && Object.freeze(f);
          }
          return a.object;
        }
      }
    }
    return t;
  }, e.prototype.sortedKeys = function(t) {
    var r = Object.keys(t), n = this.pool.lookupArray(r);
    if (!n.keys) {
      r.sort();
      var o = JSON.stringify(r);
      (n.keys = this.keysByJSON.get(o)) || this.keysByJSON.set(o, n.keys = { sorted: r, json: o });
    }
    return n.keys;
  }, e;
}(), Mn = Object.assign(function(e) {
  if (gt(e)) {
    Bc === void 0 && nd();
    var t = Bc.admit(e), r = Wc.get(t);
    return r === void 0 && Wc.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: nd
}), Bc, Wc;
function nd() {
  Bc = new Hc(), Wc = new (Jr ? WeakMap : Map)();
}
function od(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var nS = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (Jr ? WeakMap : Map)(), this.config = So(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: mp(t)
    }), this.canon = t.canon || new Hc(), this.executeSelectionSet = Pa(function(n) {
      var o, i = n.context.canonizeResults, a = od(n);
      a[3] = !i;
      var s = (o = r.executeSelectionSet).peek.apply(o, a);
      return s ? i ? V(V({}, s), { result: r.canon.admit(s.result) }) : s : (rd(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: od,
      makeCacheKey: function(n, o, i, a) {
        if (Zo(i.store))
          return i.store.makeCacheKey(n, ct(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = Pa(function(n) {
      return rd(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var o = n.field, i = n.array, a = n.context;
        if (Zo(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Hc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, o = t.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = t.variables, s = t.returnPartialData, c = s === void 0 ? !0 : s, u = t.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
    a = V(V({}, ul(Bv(n))), a);
    var d = ho(i), h = this.executeSelectionSet({
      selectionSet: xi(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: V({ store: r, query: n, policies: f, variables: a, varString: Mn(a), canonizeResults: l }, yp(n, this.config.fragments))
    }), m;
    if (h.missing && (m = [new hp(oS(h.missing), h.missing, n, a)], !c))
      throw m[0];
    return {
      result: h.result,
      complete: !m,
      missing: m
    };
  }, e.prototype.isFresh = function(t, r, n, o) {
    if (Zo(o.store) && this.knownResults.get(t) === n) {
      var i = this.executeSelectionSet.peek(n, r, o, this.canon.isKnown(t));
      if (i && t === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var r = this, n = t.selectionSet, o = t.objectOrReference, i = t.enclosingRef, a = t.context;
    if (ct(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, c = a.policies, u = a.store, l = u.getFieldValue(o, "__typename"), f = [], d, h = new hn();
    this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && f.push({ __typename: l });
    function m(E, w) {
      var b;
      return E.missing && (d = h.merge(d, (b = {}, b[w] = E.missing, b))), E.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(E) {
      var w, b;
      if (wi(E, s))
        if (dn(E)) {
          var C = c.readField({
            fieldName: E.name.value,
            field: E,
            variables: a.variables,
            from: o
          }, a), O = fn(E);
          C === void 0 ? ll.added(E) || (d = h.merge(d, (w = {}, w[O] = "Can't find field '".concat(E.name.value, "' on ").concat(ct(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), w))) : wt(C) ? C = m(r.executeSubSelectedArray({
            field: E,
            array: C,
            enclosingRef: i,
            context: a
          }), O) : E.selectionSet ? C != null && (C = m(r.executeSelectionSet({
            selectionSet: E.selectionSet,
            objectOrReference: C,
            enclosingRef: ct(C) ? C : i,
            context: a
          }), O)) : a.canonizeResults && (C = r.canon.pass(C)), C !== void 0 && f.push((b = {}, b[O] = C, b));
        } else {
          var R = ns(E, a.lookupFragment);
          if (!R && E.kind === Lt.FRAGMENT_SPREAD)
            throw tr(7, E.name.value);
          R && c.fragmentMatches(R, l) && R.selectionSet.selections.forEach(p.add, p);
        }
    });
    var g = fl(f), y = { result: g, missing: d }, S = a.canonizeResults ? this.canon.admit(y) : Dc(y);
    return S.result && this.knownResults.set(S.result, n), S;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, o = t.array, i = t.enclosingRef, a = t.context, s, c = new hn();
    function u(l, f) {
      var d;
      return l.missing && (s = c.merge(s, (d = {}, d[f] = l.missing, d))), l.result;
    }
    return n.selectionSet && (o = o.filter(a.store.canRead)), o = o.map(function(l, f) {
      return l === null ? null : wt(l) ? u(r.executeSubSelectedArray({
        field: n,
        array: l,
        enclosingRef: i,
        context: a
      }), f) : n.selectionSet ? u(r.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: l,
        enclosingRef: ct(l) ? l : i,
        context: a
      }), f) : (globalThis.__DEV__ !== !1 && iS(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function oS(e) {
  try {
    JSON.stringify(e, function(t, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (t) {
    return t;
  }
}
function iS(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(o) {
      gt(o) && (_e(
        !ct(o),
        8,
        J1(e, o),
        t.name.value
      ), Object.values(o).forEach(n.add, n));
    });
  }
}
var Sl = new np(), id = /* @__PURE__ */ new WeakMap();
function ei(e) {
  var t = id.get(e);
  return t || id.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: dp()
  }), t;
}
function ad(e) {
  ei(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function aS(e) {
  ei(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function sS(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, t.forEach(function(c) {
          ei(c).dep.dirty(n), cS(c);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(c) {
          return c(e);
        });
      }
    } else {
      var s = Sl.getValue();
      s && (o(s), ei(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(i) {
    return r.add(i), function() {
      r.delete(i);
    };
  };
  var o = n.attachCache = function(i) {
    return t.add(i), ei(i).vars.add(n), n;
  };
  return n.forgetCache = function(i) {
    return t.delete(i);
  }, n;
}
function cS(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var sd = /* @__PURE__ */ Object.create(null);
function El(e) {
  var t = JSON.stringify(e);
  return sd[t] || (sd[t] = /* @__PURE__ */ Object.create(null));
}
function cd(e) {
  var t = El(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = wl(e, function(a) {
      var s = po(n.storeObject, a, o);
      return s === void 0 && r !== n.storeObject && $t.call(r, a[0]) && (s = po(r, a, Ep)), _e(s !== void 0, 2, a.join("."), r), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function ud(e) {
  var t = El(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = wl(e, function(u) {
      var l = u[0], f = l.charAt(0);
      if (f === "@") {
        if (o && Fr(o.directives)) {
          var d = l.slice(1), h = o.directives.find(function(y) {
            return y.name.value === d;
          }), m = h && os(h, i);
          return m && po(m, u.slice(1));
        }
        return;
      }
      if (f === "$") {
        var p = l.slice(1);
        if (i && $t.call(i, p)) {
          var g = u.slice(0);
          return g[0] = p, po(i, g);
        }
        return;
      }
      if (r)
        return po(r, u);
    }), c = JSON.stringify(s);
    return (r || c !== "{}") && (a += ":" + c), a;
  });
}
function wl(e, t) {
  var r = new hn();
  return Sp(e).reduce(function(n, o) {
    var i, a = t(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Sp(e) {
  var t = El(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(o, i) {
      wt(o) ? (Sp(o).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(o), wt(e[i + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function Ep(e, t) {
  return e[t];
}
function po(e, t, r) {
  return r = r || Ep, wp(t.reduce(function n(o, i) {
    return wt(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && r(o, i);
  }, e));
}
function wp(e) {
  return gt(e) ? wt(e) ? e.map(wp) : wl(Object.keys(e).sort(), function(t) {
    return po(e, t);
  }) : e;
}
cl.setStringify(Mn);
function Uc(e) {
  return e.args !== void 0 ? e.args : e.field ? os(e.field, e.variables) : null;
}
var uS = function() {
}, ld = function(e, t) {
  return t.fieldName;
}, fd = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, dd = function(e, t) {
  return t;
}, lS = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = V({ dataIdFromObject: vp }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, o = this, i = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = V(V({}, r), { typename: i, storeObject: a, readField: r && r.readField || function() {
      var d = Cl(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), c, u = i && this.getTypePolicy(i), l = u && u.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(V(V({}, t), a), s);
      if (wt(f))
        l = cd(f);
      else {
        c = f;
        break;
      }
    }
    return c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var o = t[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, c = Kr(o, ["queryType", "mutationType", "subscriptionType"]);
      i && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), $t.call(r.toBeAdded, n) ? r.toBeAdded[n].push(c) : r.toBeAdded[n] = [c];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, o = this.getTypePolicy(t), i = r.keyFields, a = r.fields;
    function s(c, u) {
      c.merge = typeof u == "function" ? u : u === !0 ? fd : u === !1 ? dd : c.merge;
    }
    s(o, r.merge), o.keyFn = i === !1 ? uS : wt(i) ? cd(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(c) {
      var u = n.getFieldPolicy(t, c, !0), l = a[c];
      if (typeof l == "function")
        u.read = l;
      else {
        var f = l.keyArgs, d = l.read, h = l.merge;
        u.keyFn = f === !1 ? ld : wt(f) ? ud(f) : typeof f == "function" ? f : u.keyFn, typeof d == "function" && (u.read = d), s(u, h);
      }
      u.read && u.merge && (u.keyFn = u.keyFn || ld);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), o = this.rootTypenamesById[n];
    r !== o && (_e(!o || o === t, 3, t), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(o) {
        r.getSupertypeSet(o, !0).add(n);
        var i = o.match(gp);
        (!i || i[0] !== o) && r.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!$t.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(t);
      !o && this.fuzzySubtypes.size && (o = this.getSupertypeSet(t, !0), this.fuzzySubtypes.forEach(function(a, s) {
        if (a.test(t)) {
          var c = r.supertypeMap.get(s);
          c && c.forEach(function(u) {
            return o.add(u);
          });
        }
      })), o && o.size && o.forEach(function(a) {
        var s = r.getTypePolicy(a), c = s.fields, u = Kr(s, ["fields"]);
        Object.assign(n, u), Object.assign(n.fields, c);
      });
    }
    var i = this.toBeAdded[t];
    return i && i.length && i.splice(0).forEach(function(a) {
      r.updateTypePolicy(t, a);
    }), this.typePolicies[t];
  }, e.prototype.getFieldPolicy = function(t, r, n) {
    if (t) {
      var o = this.getTypePolicy(t).fields;
      return o[r] || n && (o[r] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(t, r) {
    var n = this.supertypeMap.get(t);
    return !n && r && this.supertypeMap.set(t, n = /* @__PURE__ */ new Set()), n;
  }, e.prototype.fragmentMatches = function(t, r, n, o) {
    var i = this;
    if (!t.typeCondition)
      return !0;
    if (!r)
      return !1;
    var a = t.typeCondition.name.value;
    if (r === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(r, !0), c = [s], u = function(m) {
        var p = i.getSupertypeSet(m, !1);
        p && p.size && c.indexOf(p) < 0 && c.push(p);
      }, l = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < c.length; ++d) {
        var h = c[d];
        if (h.has(a))
          return s.has(a) || (f && globalThis.__DEV__ !== !1 && _e.warn(4, r, a), s.add(a)), !0;
        h.forEach(u), l && d === c.length - 1 && zc(t.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(m, p) {
          var g = r.match(m);
          g && g[0] === r && u(p);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return !!(n && n.keyFn);
  }, e.prototype.getStoreFieldName = function(t) {
    var r = t.typename, n = t.fieldName, o = this.getFieldPolicy(r, n, !1), i, a = o && o.keyFn;
    if (a && r)
      for (var s = {
        typename: r,
        fieldName: n,
        field: t.field || null,
        variables: t.variables
      }, c = Uc(t); a; ) {
        var u = a(c, s);
        if (wt(u))
          a = ud(u);
        else {
          i = u || n;
          break;
        }
      }
    return i === void 0 && (i = t.field ? Rb(t.field, t.variables) : cl(n, Uc(t))), i === !1 ? n : n === pn(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var o = t.field || t.fieldName;
      if (o) {
        if (t.typename === void 0) {
          var i = r.store.getFieldValue(n, "__typename");
          i && (t.typename = i);
        }
        var a = this.getStoreFieldName(t), s = pn(a), c = r.store.getFieldValue(n, a), u = this.getFieldPolicy(t.typename, s, !1), l = u && u.read;
        if (l) {
          var f = hd(this, n, t, r, r.store.getStorage(ct(n) ? n.__ref : n, a));
          return Sl.withValue(this.cache, l, [c, f]);
        }
        return c;
      }
    }
  }, e.prototype.getReadFunction = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(t, r, n) {
    var o = this.getFieldPolicy(t, r, !1), i = o && o.merge;
    return !i && n && (o = this.getTypePolicy(n), i = o && o.merge), i;
  }, e.prototype.runMergeFunction = function(t, r, n, o, i) {
    var a = n.field, s = n.typename, c = n.merge;
    return c === fd ? Cp(o.store)(t, r) : c === dd ? r : (o.overwrite && (t = void 0), c(t, r, hd(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: o.variables }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function hd(e, t, r, n, o) {
  var i = e.getStoreFieldName(r), a = pn(i), s = r.variables || n.variables, c = n.store, u = c.toReference, l = c.canRead;
  return {
    args: Uc(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: ct,
    toReference: u,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Cl(arguments, t, s), n);
    },
    mergeObjects: Cp(n.store)
  };
}
function Cl(e, t, r) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : t
  } : (a = V({}, n), $t.call(a, "from") || (a.from = t)), globalThis.__DEV__ !== !1 && a.from === void 0 && globalThis.__DEV__ !== !1 && _e.warn(5, Lv(Array.from(e))), a.variables === void 0 && (a.variables = r), a;
}
function Cp(e) {
  return function(r, n) {
    if (wt(r) || wt(n))
      throw tr(6);
    if (gt(r) && gt(n)) {
      var o = e.getFieldValue(r, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (ct(r) && ao(n))
        return e.merge(r.__ref, n), r;
      if (ao(r) && ct(n))
        return e.merge(r, n.__ref), n;
      if (ao(r) && ao(n))
        return V(V({}, r), n);
    }
    return n;
  };
}
function qs(e, t, r) {
  var n = "".concat(t).concat(r), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === t && e.deferred === r ? e : V(V({}, e), { clientOnly: t, deferred: r })), o;
}
var fS = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, o = r.query, i = r.result, a = r.dataId, s = r.variables, c = r.overwrite, u = Oi(o), l = Z1();
    s = V(V({}, ul(u)), s);
    var f = V(V({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, m) {
      return l.merge(h, m);
    }, variables: s, varString: Mn(s) }, yp(o, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: u.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!ct(d))
      throw tr(9, i);
    return f.incomingById.forEach(function(h, m) {
      var p = h.storeObject, g = h.mergeTree, y = h.fieldNodeSet, S = ho(m);
      if (g && g.map.size) {
        var E = n.applyMerges(g, S, p, f);
        if (ct(E))
          return;
        p = E;
      }
      if (globalThis.__DEV__ !== !1 && !f.overwrite) {
        var w = /* @__PURE__ */ Object.create(null);
        y.forEach(function(O) {
          O.selectionSet && (w[O.name.value] = !0);
        });
        var b = function(O) {
          return w[pn(O)] === !0;
        }, C = function(O) {
          var R = g && g.map.get(O);
          return !!(R && R.info && R.info.merge);
        };
        Object.keys(p).forEach(function(O) {
          b(O) && !C(O) && dS(S, p, O, f.store);
        });
      }
      t.merge(m, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, o = t.result, i = t.selectionSet, a = t.context, s = t.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = n && c.rootTypenamesById[n] || Pc(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (u.__typename = l);
    var f = function() {
      var E = Cl(arguments, u, a.variables);
      if (ct(E.from)) {
        var w = a.incomingById.get(E.from.__ref);
        if (w) {
          var b = c.readField(V(V({}, E), { from: w.storeObject }), a);
          if (b !== void 0)
            return b;
        }
      }
      return c.readField(E, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(E, w) {
      var b, C = fn(w), O = o[C];
      if (d.add(w), O !== void 0) {
        var R = c.getStoreFieldName({
          typename: l,
          fieldName: w.name.value,
          field: w,
          variables: E.variables
        }), M = vd(s, R), _ = r.processFieldValue(O, w, w.selectionSet ? qs(E, !1, !1) : E, M), $ = void 0;
        w.selectionSet && (ct(_) || ao(_)) && ($ = f("__typename", _));
        var T = c.getMergeFunction(l, w.name.value, $);
        T ? M.info = {
          field: w,
          typename: l,
          merge: T
        } : pd(s, R), u = E.merge(u, (b = {}, b[R] = _, b));
      } else
        globalThis.__DEV__ !== !1 && !E.clientOnly && !E.deferred && !ll.added(w) && !c.getReadFunction(l, w.name.value) && globalThis.__DEV__ !== !1 && _e.error(10, fn(w), o);
    });
    try {
      var h = c.identify(o, {
        typename: l,
        selectionSet: i,
        fragmentMap: a.fragmentMap,
        storeObject: u,
        readField: f
      }), m = h[0], p = h[1];
      n = n || m, p && (u = a.merge(u, p));
    } catch (E) {
      if (!n)
        throw E;
    }
    if (typeof n == "string") {
      var g = ho(n), y = a.written[n] || (a.written[n] = []);
      if (y.indexOf(i) >= 0 || (y.push(i), this.reader && this.reader.isFresh(o, g, i, a)))
        return g;
      var S = a.incomingById.get(n);
      return S ? (S.storeObject = a.merge(S.storeObject, u), S.mergeTree = qc(S.mergeTree, s), d.forEach(function(E) {
        return S.fieldNodeSet.add(E);
      })) : a.incomingById.set(n, {
        storeObject: u,
        mergeTree: Ma(s) ? void 0 : s,
        fieldNodeSet: d
      }), g;
    }
    return u;
  }, e.prototype.processFieldValue = function(t, r, n, o) {
    var i = this;
    return !r.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? Jv(t) : t : wt(t) ? t.map(function(a, s) {
      var c = i.processFieldValue(a, r, n, vd(o, s));
      return pd(o, s), c;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(t, r, n, o) {
    o === void 0 && (o = Pc(r, t, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new mn(!1);
    return function c(u, l) {
      var f = s.lookup(u, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, u.selections.forEach(function(d) {
        if (wi(d, n.variables)) {
          var h = l.clientOnly, m = l.deferred;
          if (!(h && m) && Fr(d.directives) && d.directives.forEach(function(y) {
            var S = y.name.value;
            if (S === "client" && (h = !0), S === "defer") {
              var E = os(y, n.variables);
              (!E || E.if !== !1) && (m = !0);
            }
          }), dn(d)) {
            var p = i.get(d);
            p && (h = h && p.clientOnly, m = m && p.deferred), i.set(d, qs(n, h, m));
          } else {
            var g = ns(d, n.lookupFragment);
            if (!g && d.kind === Lt.FRAGMENT_SPREAD)
              throw tr(11, d.name.value);
            g && a.fragmentMatches(g, o, r, n.variables) && c(g.selectionSet, qs(n, h, m));
          }
        }
      }));
    }(t, n), i;
  }, e.prototype.applyMerges = function(t, r, n, o, i) {
    var a, s = this;
    if (t.map.size && !ct(n)) {
      var c = !wt(n) && (ct(r) || ao(r)) ? r : void 0, u = n;
      c && !i && (i = [ct(c) ? c.__ref : c]);
      var l, f = function(d, h) {
        return wt(d) ? typeof h == "number" ? d[h] : void 0 : o.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var m = f(c, h), p = f(u, h);
        if (p !== void 0) {
          i && i.push(h);
          var g = s.applyMerges(d, m, p, o, i);
          g !== p && (l = l || /* @__PURE__ */ new Map(), l.set(h, g)), i && _e(i.pop() === h);
        }
      }), l && (n = wt(u) ? u.slice(0) : V({}, u), l.forEach(function(d, h) {
        n[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), Op = [];
function vd(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, Op.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function qc(e, t) {
  if (e === t || !t || Ma(t))
    return e;
  if (!e || Ma(e))
    return t;
  var r = e.info && t.info ? V(V({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, i = { info: r, map: o };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, c) {
      i.map.set(c, qc(s, t.map.get(c))), a.delete(c);
    }), a.forEach(function(s) {
      i.map.set(s, qc(t.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function Ma(e) {
  return !e || !(e.info || e.map.size);
}
function pd(e, t) {
  var r = e.map, n = r.get(t);
  n && Ma(n) && (Op.push(n), r.delete(t));
}
var md = /* @__PURE__ */ new Set();
function dS(e, t, r, n) {
  var o = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(t);
    if (a && !ct(i) && !St(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), c = pn(r), u = "".concat(s, ".").concat(c);
      if (!md.has(u)) {
        md.add(u);
        var l = [];
        !wt(i) && !wt(a) && [i, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), globalThis.__DEV__ !== !1 && _e.warn(12, c, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", u, i, a);
      }
    }
  }
}
var hS = function(e) {
  $r(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Wv(ll), n.assumeImmutableResults = !0, n.makeVar = sS, n.txCount = 0, n.config = X1(r), n.addTypename = !!n.config.addTypename, n.policies = new lS({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new ui.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new fS(this, this.storeReader = new nS({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: mp(this.config),
      canon: r ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = Pa(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Zo(s)) {
          var c = a.optimistic, u = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, Mn({ optimistic: c, id: u, variables: l }));
        }
      }
    }), (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(a) {
      return a.resetCaching();
    });
  }, t.prototype.restore = function(r) {
    return this.init(), r && this.data.replace(r), this;
  }, t.prototype.extract = function(r) {
    return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
  }, t.prototype.read = function(r) {
    var n = r.returnPartialData, o = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(V(V({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof hp)
        return null;
      throw i;
    }
  }, t.prototype.write = function(r) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.modify = function(r) {
    if ($t.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(V(V({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || aS(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && ad(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    Mn.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (ct(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      globalThis.__DEV__ !== !1 && _e.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if ($t.call(r, "id"))
        return !1;
      r = V(V({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(r) {
    var n = this;
    return this.init(), Mn.reset(), r && r.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), ad(this)) : this.broadcastWatches(), Promise.resolve();
  }, t.prototype.removeOptimistic = function(r) {
    var n = this.optimisticData.removeLayer(r);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, t.prototype.batch = function(r) {
    var n = this, o = r.update, i = r.optimistic, a = i === void 0 ? !0 : i, s = r.removeOptimistic, c = r.onWatchUpdated, u, l = function(d) {
      var h = n, m = h.data, p = h.optimisticData;
      ++n.txCount, d && (n.data = n.optimisticData = d);
      try {
        return u = o(n);
      } finally {
        --n.txCount, n.data = m, n.optimisticData = p;
      }
    }, f = /* @__PURE__ */ new Set();
    return c && !this.txCount && this.broadcastWatches(V(V({}, r), { onWatchUpdated: function(d) {
      return f.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), c && f.size ? (this.broadcastWatches(V(V({}, r), { onWatchUpdated: function(d, h) {
      var m = c.call(this, d, h);
      return m !== !1 && f.delete(d), m;
    } })), f.size && f.forEach(function(d) {
      return n.maybeBroadcastWatch.dirty(d);
    })) : this.broadcastWatches(r), u;
  }, t.prototype.performTransaction = function(r, n) {
    return this.batch({
      update: r,
      optimistic: n || n !== null
    });
  }, t.prototype.transformDocument = function(r) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(r));
  }, t.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch(o, r);
    });
  }, t.prototype.addFragmentsToDocument = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, t.prototype.addTypenameToDocument = function(r) {
    return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
  }, t.prototype.broadcastWatch = function(r, n) {
    var o = r.lastDiff, i = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (i.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, i, o) === !1) || (!o || !St(o.result, i.result)) && r.callback(r.lastDiff = i, o);
  }, t;
}(Y1), st;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(st || (st = {}));
function li(e) {
  return e ? e < 7 : !1;
}
function vS(e, t, r, n) {
  var o = t.data, i = Kr(t, ["data"]), a = r.data, s = Kr(r, ["data"]);
  return St(i, s) && da(xi(e).selectionSet, o, a, {
    fragmentMap: rs(is(e)),
    variables: n
  });
}
function da(e, t, r, n) {
  if (t === r)
    return !0;
  var o = /* @__PURE__ */ new Set();
  return e.selections.every(function(i) {
    if (o.has(i) || (o.add(i), !wi(i, n.variables)) || gd(i))
      return !0;
    if (dn(i)) {
      var a = fn(i), s = t && t[a], c = r && r[a], u = i.selectionSet;
      if (!u)
        return St(s, c);
      var l = Array.isArray(s), f = Array.isArray(c);
      if (l !== f)
        return !1;
      if (l && f) {
        var d = s.length;
        if (c.length !== d)
          return !1;
        for (var h = 0; h < d; ++h)
          if (!da(u, s[h], c[h], n))
            return !1;
        return !0;
      }
      return da(u, s, c, n);
    } else {
      var m = ns(i, n.fragmentMap);
      if (m)
        return gd(m) ? !0 : da(m.selectionSet, t, r, n);
    }
  });
}
function gd(e) {
  return !!e.directives && e.directives.some(pS);
}
function pS(e) {
  return e.name.value === "nonreactive";
}
var yd = Object.assign, mS = Object.hasOwnProperty, Qc = function(e) {
  $r(t, e);
  function t(r) {
    var n = r.queryManager, o = r.queryInfo, i = r.options, a = e.call(this, function(g) {
      try {
        var y = g._subscription._observer;
        y && !y.error && (y.error = gS);
      } catch {
      }
      var S = !a.observers.size;
      a.observers.add(g);
      var E = a.last;
      return E && E.error ? g.error && g.error(E.error) : E && E.result && g.next && g.next(E.result), S && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(g) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = Qs(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, c = s === void 0 ? {} : s, u = c.fetchPolicy, l = u === void 0 ? "cache-first" : u, f = i.fetchPolicy, d = f === void 0 ? l : f, h = i.initialFetchPolicy, m = h === void 0 ? d === "standby" ? l : d : h;
    a.options = V(V({}, i), { initialFetchPolicy: m, fetchPolicy: d }), a.queryId = o.queryId || n.generateQueryId();
    var p = Oi(a.query);
    return a.queryName = p && p.name && p.name.value, a;
  }
  return Object.defineProperty(t.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.result = function() {
    var r = this;
    return new Promise(function(n, o) {
      var i = {
        next: function(s) {
          n(s), r.observers.delete(i), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: o
      }, a = r.subscribe(i);
    });
  }, t.prototype.getCurrentResult = function(r) {
    r === void 0 && (r = !0);
    var n = this.getLastResult(!0), o = this.queryInfo.networkStatus || n && n.networkStatus || st.ready, i = V(V({}, n), { loading: li(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Qs(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (i.data = c.result), St(i.data, {}) && (i.data = void 0), c.complete ? (delete i.partial, c.complete && i.networkStatus === st.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = st.ready, i.loading = !1)) : i.partial = !0, globalThis.__DEV__ !== !1 && !c.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && _p(c.missing);
      }
    return r && this.updateLastResult(i), i;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    if (!this.last)
      return !0;
    var o = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !vS(this.query, this.last.result, r, this.variables) : !St(this.last.result, r);
    return o || n && !St(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var o = this.last;
    if (o && o[r] && (!n || St(o.variables, this.variables)))
      return o[r];
  }, t.prototype.getLastResult = function(r) {
    return this.getLast("result", r);
  }, t.prototype.getLastError = function(r) {
    return this.getLast("error", r);
  }, t.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, t.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, t.prototype.refetch = function(r) {
    var n, o = {
      pollInterval: 0
    }, i = this.options.fetchPolicy;
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && mS.call(r, "variables")) {
      var a = Bv(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(c) {
        return c.variable.name.value === "variables";
      })) && globalThis.__DEV__ !== !1 && _e.warn(
        18,
        r,
        ((n = a.name) === null || n === void 0 ? void 0 : n.value) || a
      );
    }
    return r && !St(this.options.variables, r) && (o.variables = this.options.variables = V(V({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(o, st.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, o = V(V({}, r.query ? r : V(V(V(V({}, this.options), { query: this.options.query }), r), { variables: V(V({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" });
    o.query = this.transformDocument(o.query);
    var i = this.queryManager.generateQueryId();
    this.lastQuery = r.query ? this.transformDocument(this.options.query) : o.query;
    var a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = st.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var c = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, st.fetchMore).then(function(u) {
      return n.queryManager.removeQuery(i), a.networkStatus === st.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(l) {
          var f = r.updateQuery;
          f ? l.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(d) {
            return f(d, {
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
      c.has(n.query) || xp(n);
    });
  }, t.prototype.subscribeToMore = function(r) {
    var n = this, o = this.queryManager.startGraphQLSubscription({
      query: r.document,
      variables: r.variables,
      context: r.context
    }).subscribe({
      next: function(i) {
        var a = r.updateQuery;
        a && n.updateQuery(function(s, c) {
          var u = c.variables;
          return a(s, {
            subscriptionData: i,
            variables: u
          });
        });
      },
      error: function(i) {
        if (r.onError) {
          r.onError(i);
          return;
        }
        globalThis.__DEV__ !== !1 && _e.error(19, i);
      }
    });
    return this.subscriptions.add(o), function() {
      n.subscriptions.delete(o) && o.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.silentSetOptions = function(r) {
    var n = So(this.options, r || {});
    yd(this.options, n);
  }, t.prototype.setVariables = function(r) {
    return St(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, st.setVariables) : Promise.resolve());
  }, t.prototype.updateQuery = function(r) {
    var n = this.queryManager, o = n.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, i = r(o, {
      variables: this.variables
    });
    i && (n.cache.writeQuery({
      query: this.options.query,
      data: i,
      variables: this.variables
    }), n.broadcastQueries());
  }, t.prototype.startPolling = function(r) {
    this.options.pollInterval = r, this.updatePolling();
  }, t.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, t.prototype.applyNextFetchPolicy = function(r, n) {
    if (n.nextFetchPolicy) {
      var o = n.fetchPolicy, i = o === void 0 ? "cache-first" : o, a = n.initialFetchPolicy, s = a === void 0 ? i : a;
      i === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(i, {
        reason: r,
        options: n,
        observable: this,
        initialFetchPolicy: s
      }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
    }
    return n.fetchPolicy;
  }, t.prototype.fetch = function(r, n) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n);
  }, t.prototype.updatePolling = function() {
    var r = this;
    if (!this.queryManager.ssrMode) {
      var n = this, o = n.pollingInfo, i = n.options.pollInterval;
      if (!i) {
        o && (clearTimeout(o.timeout), delete this.pollingInfo);
        return;
      }
      if (!(o && o.interval === i)) {
        _e(i, 20);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          r.pollingInfo && (li(r.queryInfo.networkStatus) ? c() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, st.poll).then(c, c));
        }, c = function() {
          var u = r.pollingInfo;
          u && (clearTimeout(u.timeout), u.timeout = setTimeout(s, u.interval));
        };
        c();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    n === void 0 && (n = this.variables);
    var o = this.getLastError();
    return o && this.last && !St(n, this.last.variables) && (o = void 0), this.last = V({ result: this.queryManager.assumeImmutableResults ? r : Jv(r), variables: n }, o ? { error: o } : null);
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === st.refetch || n === st.fetchMore || n === st.poll, a = this.options.variables, s = this.options.fetchPolicy, c = So(this.options, r || {}), u = i ? c : yd(this.options, c), l = this.transformDocument(u.query);
    this.lastQuery = l, i || (this.updatePolling(), r && r.variables && !St(r.variables, a) && u.fetchPolicy !== "standby" && u.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = st.setVariables)));
    var f = l === u.query ? u : V(V({}, u), { query: l });
    this.waitForOwnResult && (this.waitForOwnResult = Qs(f.fetchPolicy));
    var d = function() {
      o.concast === p && (o.waitForOwnResult = !1);
    }, h = f.variables && V({}, f.variables), m = this.fetch(f, n), p = m.concast, g = m.fromLink, y = {
      next: function(S) {
        d(), o.reportResult(S, h);
      },
      error: function(S) {
        d(), o.reportError(S, h);
      }
    };
    return !i && (g || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = y), p.addObserver(y), p;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var o = this.getLastError(), i = this.isDifferentFromLastResult(r, n);
    (o || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (o || i) && Jo(this.observers, "next", r);
  }, t.prototype.reportError = function(r, n) {
    var o = V(V({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: st.error, loading: !1 });
    this.updateLastResult(o, n), Jo(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t.prototype.transformDocument = function(r) {
    return this.queryManager.transform(r);
  }, t;
}(ht);
Zv(Qc);
function xp(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function gS(e) {
  globalThis.__DEV__ !== !1 && _e.error(21, e.message, e.stack);
}
function _p(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && _e.debug(22, e);
}
function Qs(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Tp = function() {
  function e(t) {
    var r = t.cache, n = t.client, o = t.resolvers, i = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = $f(r.resolvers, n);
    }) : this.resolvers = $f(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, o = t.context, i = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return on(this, void 0, void 0, function() {
      return an(this, function(c) {
        return r ? [2, this.resolveDocument(r, n.data, o, i, this.fragmentMatcher, s).then(function(u) {
          return V(V({}, n), { data: u.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return si(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return Gv(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return V(V({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), on(this, void 0, void 0, function() {
      return an(this, function(o) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(i) {
          return V(V({}, r), i.exportedVariables);
        })] : [2, V({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return Yr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), r))
            return sl;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: $b(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), on(this, void 0, void 0, function() {
      var s, c, u, l, f, d, h, m, p, g, y;
      return an(this, function(S) {
        return s = xi(t), c = is(t), u = rs(c), l = this.collectSelectionsToResolve(s, u), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = this, m = h.cache, p = h.client, g = {
          fragmentMap: u,
          context: V(V({}, n), { cache: m, client: p }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, y = !1, [2, this.resolveSelectionSet(s.selectionSet, y, r, g).then(function(E) {
          return {
            result: E,
            exportedVariables: g.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, o) {
    return on(this, void 0, void 0, function() {
      var i, a, s, c, u, l = this;
      return an(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, c = [n], u = function(d) {
          return on(l, void 0, void 0, function() {
            var h, m;
            return an(this, function(p) {
              return !r && !o.selectionsToResolve.has(d) ? [2] : wi(d, s) ? dn(d) ? [2, this.resolveField(d, r, n, o).then(function(g) {
                var y;
                typeof g < "u" && c.push((y = {}, y[fn(d)] = g, y));
              })] : (Nb(d) ? h = d : (h = i[d.name.value], _e(h, 16, d.name.value)), h && h.typeCondition && (m = h.typeCondition.name.value, o.fragmentMatcher(n, m, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, o).then(function(g) {
                c.push(g);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(u)).then(function() {
          return fl(c);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, o) {
    return on(this, void 0, void 0, function() {
      var i, a, s, c, u, l, f, d, h, m = this;
      return an(this, function(p) {
        return n ? (i = o.variables, a = t.name.value, s = fn(t), c = a !== s, u = n[s] || n[a], l = Promise.resolve(u), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[c ? a : s], h && (l = Promise.resolve(Sl.withValue(this.cache, h, [
          n,
          os(t, i),
          o.context,
          { field: t, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(g) {
          var y, S;
          if (g === void 0 && (g = u), t.directives && t.directives.forEach(function(w) {
            w.name.value === "export" && w.arguments && w.arguments.forEach(function(b) {
              b.name.value === "as" && b.value.kind === "StringValue" && (o.exportedVariables[b.value.value] = g);
            });
          }), !t.selectionSet || g == null)
            return g;
          var E = (S = (y = t.directives) === null || y === void 0 ? void 0 : y.some(function(w) {
            return w.name.value === "client";
          })) !== null && S !== void 0 ? S : !1;
          if (Array.isArray(g))
            return m.resolveSubSelectedArray(t, r || E, g, o);
          if (t.selectionSet)
            return m.resolveSelectionSet(t.selectionSet, r || E, g, o);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(t, r, n, o) {
    var i = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return i.resolveSubSelectedArray(t, r, a, o);
      if (t.selectionSet)
        return i.resolveSelectionSet(t.selectionSet, r, a, o);
    }));
  }, e.prototype.collectSelectionsToResolve = function(t, r) {
    var n = function(a) {
      return !Array.isArray(a);
    }, o = this.selectionsToResolveCache;
    function i(a) {
      if (!o.has(a)) {
        var s = /* @__PURE__ */ new Set();
        o.set(a, s), Yr(a, {
          Directive: function(c, u, l, f, d) {
            c.name.value === "client" && d.forEach(function(h) {
              n(h) && If(h) && s.add(h);
            });
          },
          FragmentSpread: function(c, u, l, f, d) {
            var h = r[c.name.value];
            _e(h, 17, c.name.value);
            var m = i(h);
            m.size > 0 && (d.forEach(function(p) {
              n(p) && If(p) && s.add(p);
            }), s.add(c), m.forEach(function(p) {
              s.add(p);
            }));
          }
        });
      }
      return o.get(a);
    }
    return i(t);
  }, e;
}(), so = new (Jr ? WeakMap : Map)();
function Gs(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return so.set(e, (so.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function bd(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Ks = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    so.has(n) || (so.set(n, 0), Gs(n, "evict"), Gs(n, "modify"), Gs(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || st.loading;
    return this.variables && this.networkStatus !== st.loading && !St(this.variables, t.variables) && (r = st.setVariables), St(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    bd(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var r = this.getDiffOptions(t);
    if (this.lastDiff && St(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables = t);
    var n = this.observableQuery;
    if (n && n.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var o = this.cache.diff(r);
    return this.updateLastDiff(o, r), o;
  }, e.prototype.updateLastDiff = function(t, r) {
    this.lastDiff = t ? {
      diff: t,
      options: r || this.getDiffOptions()
    } : void 0;
  }, e.prototype.getDiffOptions = function(t) {
    var r;
    return t === void 0 && (t = this.variables), {
      query: this.document,
      variables: t,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
    };
  }, e.prototype.setDiff = function(t) {
    var r = this, n = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(t), !this.dirty && !St(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : xp(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    bd(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (li(this.networkStatus) && this.observableQuery) {
      var t = this.observableQuery.options.fetchPolicy;
      if (t !== "cache-only" && t !== "cache-and-network")
        return !1;
    }
    return !0;
  }, e.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      });
      var t = this.observableQuery;
      t && t.stopPolling();
    }
  }, e.prototype.cancel = function() {
  }, e.prototype.updateWatch = function(t) {
    var r = this;
    t === void 0 && (t = this.variables);
    var n = this.observableQuery;
    if (!(n && n.options.fetchPolicy === "no-cache")) {
      var o = V(V({}, this.getDiffOptions(t)), { watcher: this, callback: function(i) {
        return r.setDiff(i);
      } });
      (!this.lastWatch || !St(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === so.get(this.cache) && St(r, n.variables) && St(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, o) {
    var i = this, a = new hn(), s = Fr(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && Fr(t.incremental)) {
      var c = ep(this.getDiff().result, t);
      t.data = c;
    } else if ("hasNext" in t && t.hasNext) {
      var u = this.getDiff();
      t.data = a.merge(u.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (Gc(t, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(t, n.variables))
        l.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: so.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        t.data = i.lastDiff.diff.result;
        return;
      }
      var f = i.getDiffOptions(n.variables), d = l.diff(f);
      i.stopped || i.updateWatch(n.variables), i.updateLastDiff(d, f), d.complete && (t.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = st.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = st.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function Gc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !la(e);
  return !n && r && e.data && (n = !0), n;
}
var yS = Object.prototype.hasOwnProperty, bS = function() {
  function e(t) {
    var r = t.cache, n = t.link, o = t.defaultOptions, i = t.documentTransform, a = t.queryDeduplication, s = a === void 0 ? !1 : a, c = t.onBroadcast, u = t.ssrMode, l = u === void 0 ? !1 : u, f = t.clientAwareness, d = f === void 0 ? {} : f, h = t.localState, m = t.assumeImmutableResults, p = m === void 0 ? !!r.assumeImmutableResults : m, g = this;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Jr ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var y = new Wv(function(S) {
      return g.cache.transformDocument(S);
    }, { cache: !1 });
    this.cache = r, this.link = n, this.defaultOptions = o || /* @__PURE__ */ Object.create(null), this.queryDeduplication = s, this.clientAwareness = d, this.localState = h || new Tp({ cache: r }), this.ssrMode = l, this.assumeImmutableResults = p, this.documentTransform = i ? y.concat(i).concat(y) : y, (this.onBroadcast = c) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(tr(23));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, o = t.mutation, i = t.variables, a = t.optimisticResponse, s = t.updateQueries, c = t.refetchQueries, u = c === void 0 ? [] : c, l = t.awaitRefetchQueries, f = l === void 0 ? !1 : l, d = t.update, h = t.onQueryUpdated, m = t.fetchPolicy, p = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : m, g = t.errorPolicy, y = g === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : g, S = t.keepRootFields, E = t.context;
    return on(this, void 0, void 0, function() {
      var w, b, C, O;
      return an(this, function(R) {
        switch (R.label) {
          case 0:
            return _e(o, 24), _e(p === "network-only" || p === "no-cache", 25), w = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), b = this.getDocumentInfo(o).hasClientExports, i = this.getVariables(o, i), b ? [4, this.localState.addExportedVariables(o, i, E)] : [3, 2];
          case 1:
            i = R.sent(), R.label = 2;
          case 2:
            return C = this.mutationStore && (this.mutationStore[w] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: w,
              document: o,
              variables: i,
              fetchPolicy: p,
              errorPolicy: y,
              context: E,
              updateQueries: s,
              update: d,
              keepRootFields: S
            }), this.broadcastQueries(), O = this, [2, new Promise(function(M, _) {
              return js(O.getObservableFromLink(o, V(V({}, E), { optimisticResponse: a }), i, !1), function($) {
                if (la($) && y === "none")
                  throw new Kn({
                    graphQLErrors: Fc($)
                  });
                C && (C.loading = !1, C.error = null);
                var T = V({}, $);
                return typeof u == "function" && (u = u(T)), y === "ignore" && la(T) && delete T.errors, O.markMutationResult({
                  mutationId: w,
                  result: T,
                  document: o,
                  variables: i,
                  fetchPolicy: p,
                  errorPolicy: y,
                  context: E,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: u,
                  removeOptimistic: a ? w : void 0,
                  onQueryUpdated: h,
                  keepRootFields: S
                });
              }).subscribe({
                next: function($) {
                  O.broadcastQueries(), (!("hasNext" in $) || $.hasNext === !1) && M($);
                },
                error: function($) {
                  C && (C.loading = !1, C.error = $), a && O.cache.removeOptimistic(w), O.broadcastQueries(), _($ instanceof Kn ? $ : new Kn({
                    networkError: $
                  }));
                }
              });
            })];
        }
      });
    });
  }, e.prototype.markMutationResult = function(t, r) {
    var n = this;
    r === void 0 && (r = this.cache);
    var o = t.result, i = [], a = t.fetchPolicy === "no-cache";
    if (!a && Gc(o, t.errorPolicy)) {
      if (vo(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), vo(o) && Fr(o.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), c = void 0;
        s.result && (c = ep(s.result, o)), typeof c < "u" && (o.data = c, i.push({
          result: c,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var u = t.updateQueries;
      u && this.queries.forEach(function(f, d) {
        var h = f.observableQuery, m = h && h.queryName;
        if (!(!m || !yS.call(u, m))) {
          var p = u[m], g = n.queries.get(d), y = g.document, S = g.variables, E = r.diff({
            query: y,
            variables: S,
            returnPartialData: !0,
            optimistic: !1
          }), w = E.result, b = E.complete;
          if (b && w) {
            var C = p(w, {
              mutationResult: o,
              queryName: y && Mc(y) || void 0,
              queryVariables: S
            });
            C && i.push({
              result: C,
              dataId: "ROOT_QUERY",
              query: y,
              variables: S
            });
          }
        }
      });
    }
    if (i.length > 0 || t.refetchQueries || t.update || t.onQueryUpdated || t.removeOptimistic) {
      var l = [];
      if (this.refetchQueries({
        updateCache: function(f) {
          a || i.forEach(function(p) {
            return f.write(p);
          });
          var d = t.update, h = !Xb(o) || vo(o) && !o.hasNext;
          if (d) {
            if (!a) {
              var m = f.diff({
                id: "ROOT_MUTATION",
                query: n.getDocumentInfo(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              m.complete && (o = V(V({}, o), { data: m.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            h && d(f, o, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && f.modify({
            id: "ROOT_MUTATION",
            fields: function(p, g) {
              var y = g.fieldName, S = g.DELETE;
              return y === "__typename" ? p : S;
            }
          });
        },
        include: t.refetchQueries,
        optimistic: !1,
        removeOptimistic: t.removeOptimistic,
        onQueryUpdated: t.onQueryUpdated || null
      }).forEach(function(f) {
        return l.push(f);
      }), t.awaitRefetchQueries || t.onQueryUpdated)
        return Promise.all(l).then(function() {
          return o;
        });
    }
    return Promise.resolve(o);
  }, e.prototype.markMutationOptimistic = function(t, r) {
    var n = this, o = typeof t == "function" ? t(r.variables) : t;
    return this.cache.recordOptimisticTransaction(function(i) {
      try {
        n.markMutationResult(V(V({}, r), { result: { data: o } }), i);
      } catch (a) {
        globalThis.__DEV__ !== !1 && _e.error(a);
      }
    }, r.mutationId);
  }, e.prototype.fetchQuery = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast.promise;
  }, e.prototype.getQueryStore = function() {
    var t = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(r, n) {
      t[n] = {
        variables: r.variables,
        networkStatus: r.networkStatus,
        networkError: r.networkError,
        graphQLErrors: r.graphQLErrors
      };
    }), t;
  }, e.prototype.resetErrors = function(t) {
    var r = this.queries.get(t);
    r && (r.networkError = void 0, r.graphQLErrors = []);
  }, e.prototype.transform = function(t) {
    return this.documentTransform.transformDocument(t);
  }, e.prototype.getDocumentInfo = function(t) {
    var r = this.transformCache;
    if (!r.has(t)) {
      var n = {
        hasClientExports: lb(t),
        hasForcedResolvers: this.localState.shouldForceResolvers(t),
        hasNonreactiveDirective: si(["nonreactive"], t),
        clientQuery: this.localState.clientQuery(t),
        serverQuery: Qv([
          { name: "client", remove: !0 },
          { name: "connection" },
          { name: "nonreactive" }
        ], t),
        defaultVars: ul(Oi(t)),
        asQuery: V(V({}, t), { definitions: t.definitions.map(function(o) {
          return o.kind === "OperationDefinition" && o.operation !== "query" ? V(V({}, o), { operation: "query" }) : o;
        }) })
      };
      r.set(t, n);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return V(V({}, this.getDocumentInfo(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    var r = this.transform(t.query);
    t = V(V({}, t), { variables: this.getVariables(r, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var n = new Ks(this), o = new Qc({
      queryManager: this,
      queryInfo: n,
      options: t
    });
    return o.lastQuery = r, this.queries.set(o.queryId, n), n.init({
      document: r,
      observableQuery: o,
      variables: o.variables
    }), o;
  }, e.prototype.query = function(t, r) {
    var n = this;
    return r === void 0 && (r = this.generateQueryId()), _e(t.query, 26), _e(t.query.kind === "Document", 27), _e(!t.returnPartialData, 28), _e(!t.pollInterval, 29), this.fetchQuery(r, V(V({}, t), { query: this.transform(t.query) })).finally(function() {
      return n.stopQuery(r);
    });
  }, e.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, e.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, e.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, e.prototype.stopQueryInStore = function(t) {
    this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
  }, e.prototype.stopQueryInStoreNoBroadcast = function(t) {
    var r = this.queries.get(t);
    r && r.stop();
  }, e.prototype.clearStore = function(t) {
    return t === void 0 && (t = {
      discardWatches: !0
    }), this.cancelPendingFetches(tr(30)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = st.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : yb(a) ? o.set(r.transform(a), !1) : gt(a) && a.query && i.add(a);
    }), this.queries.forEach(function(a, s) {
      var c = a.observableQuery, u = a.document;
      if (c) {
        if (t === "all") {
          n.set(s, c);
          return;
        }
        var l = c.queryName, f = c.options.fetchPolicy;
        if (f === "standby" || t === "active" && !c.hasObservers())
          return;
        (t === "active" || l && o.has(l) || u && o.has(u)) && (n.set(s, c), l && o.set(l, !0), u && o.set(u, !0));
      }
    }), i.size && i.forEach(function(a) {
      var s = Rc("legacyOneTimeQuery"), c = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), u = new Qc({
        queryManager: r,
        queryInfo: c,
        options: V(V({}, a), { fetchPolicy: "network-only" })
      });
      _e(u.queryId === s), c.setObservableQuery(u), n.set(s, u);
    }), globalThis.__DEV__ !== !1 && o.size && o.forEach(function(a, s) {
      a || globalThis.__DEV__ !== !1 && _e.warn(typeof s == "string" ? 31 : 32, s);
    }), n;
  }, e.prototype.reFetchObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = !1);
    var n = [];
    return this.getObservableQueries(t ? "all" : "active").forEach(function(o, i) {
      var a = o.options.fetchPolicy;
      o.resetLastResults(), (t || a !== "standby" && a !== "cache-only") && n.push(o.refetch()), r.getQuery(i).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, e.prototype.setObservableQuery = function(t) {
    this.getQuery(t.queryId).setObservableQuery(t);
  }, e.prototype.startGraphQLSubscription = function(t) {
    var r = this, n = t.query, o = t.fetchPolicy, i = t.errorPolicy, a = t.variables, s = t.context, c = s === void 0 ? {} : s;
    n = this.transform(n), a = this.getVariables(n, a);
    var u = function(f) {
      return r.getObservableFromLink(n, c, f).map(function(d) {
        o !== "no-cache" && (Gc(d, i) && r.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var h = la(d), m = h1(d);
        if (h || m) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), m && (p.protocolErrors = d.extensions[gl]), new Kn(p);
        }
        return d;
      });
    };
    if (this.getDocumentInfo(n).hasClientExports) {
      var l = this.localState.addExportedVariables(n, a, c).then(u);
      return new ht(function(f) {
        var d = null;
        return l.then(function(h) {
          return d = h.subscribe(f);
        }, f.error), function() {
          return d && d.unsubscribe();
        };
      });
    }
    return u(a);
  }, e.prototype.stopQuery = function(t) {
    this.stopQueryNoBroadcast(t), this.broadcastQueries();
  }, e.prototype.stopQueryNoBroadcast = function(t) {
    this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
  }, e.prototype.removeQuery = function(t) {
    this.fetchCancelFns.delete(t), this.queries.has(t) && (this.getQuery(t).stop(), this.queries.delete(t));
  }, e.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(t) {
      return t.notify();
    });
  }, e.prototype.getLocalState = function() {
    return this.localState;
  }, e.prototype.getObservableFromLink = function(t, r, n, o) {
    var i = this, a;
    o === void 0 && (o = (a = r?.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, c = this.getDocumentInfo(t), u = c.serverQuery, l = c.clientQuery;
    if (u) {
      var f = this, d = f.inFlightLinkObservables, h = f.link, m = {
        query: u,
        variables: n,
        operationName: Mc(u) || void 0,
        context: this.prepareContext(V(V({}, r), { forceFetch: !o }))
      };
      if (r = m.context, o) {
        var p = Uv(u), g = d.get(p) || /* @__PURE__ */ new Map();
        d.set(p, g);
        var y = Mn(n);
        if (s = g.get(y), !s) {
          var S = new no([
            kc(h, m)
          ]);
          g.set(y, s = S), S.beforeNext(function() {
            g.delete(y) && g.size < 1 && d.delete(p);
          });
        }
      } else
        s = new no([
          kc(h, m)
        ]);
    } else
      s = new no([
        ht.of({ data: {} })
      ]), r = this.prepareContext(r);
    return l && (s = js(s, function(E) {
      return i.localState.runResolvers({
        document: l,
        remoteResult: E,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var o = t.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
    return js(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = Fc(a), c = s.length > 0;
      if (o >= t.lastRequestId) {
        if (c && n.errorPolicy === "none")
          throw t.markError(new Kn({
            graphQLErrors: s
          }));
        t.markResult(a, i, n, r), t.markReady();
      }
      var u = {
        data: a.data,
        loading: !1,
        networkStatus: st.ready
      };
      return c && n.errorPolicy !== "ignore" && (u.errors = s, u.networkStatus = st.error), u;
    }, function(a) {
      var s = v1(a) ? a : new Kn({ networkError: a });
      throw o >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var o = this;
    n === void 0 && (n = st.loading);
    var i = r.query, a = this.getVariables(i, r.variables), s = this.getQuery(t), c = this.defaultOptions.watchQuery, u = r.fetchPolicy, l = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, f = r.errorPolicy, d = f === void 0 ? c && c.errorPolicy || "none" : f, h = r.returnPartialData, m = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, g = p === void 0 ? !1 : p, y = r.context, S = y === void 0 ? {} : y, E = Object.assign({}, r, {
      query: i,
      variables: a,
      fetchPolicy: l,
      errorPolicy: d,
      returnPartialData: m,
      notifyOnNetworkStatusChange: g,
      context: S
    }), w = function(M) {
      E.variables = M;
      var _ = o.fetchQueryByPolicy(s, E, n);
      return E.fetchPolicy !== "standby" && _.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), _;
    }, b = function() {
      return o.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(M) {
      b(), setTimeout(function() {
        return C.cancel(M);
      });
    });
    var C, O;
    if (this.getDocumentInfo(E.query).hasClientExports)
      C = new no(this.localState.addExportedVariables(E.query, E.variables, E.context).then(w).then(function(M) {
        return M.sources;
      })), O = !0;
    else {
      var R = w(E.variables);
      O = R.fromLink, C = new no(R.sources);
    }
    return C.promise.then(b, b), {
      concast: C,
      fromLink: O
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, o = t.include, i = t.optimistic, a = i === void 0 ? !1 : i, s = t.removeOptimistic, c = s === void 0 ? a ? Rc("refetchQueries") : void 0 : s, u = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
    o && this.getObservableQueries(o).forEach(function(d, h) {
      l.set(h, {
        oq: d,
        lastDiff: r.getQuery(h).getDiff()
      });
    });
    var f = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && c || !1,
      removeOptimistic: c,
      onWatchUpdated: function(d, h, m) {
        var p = d.watcher instanceof Ks && d.watcher.observableQuery;
        if (p) {
          if (u) {
            l.delete(p.queryId);
            var g = u(p, h, m);
            return g === !0 && (g = p.refetch()), g !== !1 && f.set(p, g), g;
          }
          u !== null && l.set(p.queryId, { oq: p, lastDiff: m, diff: h });
        }
      }
    }), l.size && l.forEach(function(d, h) {
      var m = d.oq, p = d.lastDiff, g = d.diff, y;
      if (u) {
        if (!g) {
          var S = m.queryInfo;
          S.reset(), g = S.getDiff();
        }
        y = u(m, g, p);
      }
      (!u || y === !0) && (y = m.refetch()), y !== !1 && f.set(m, y), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), c && this.cache.removeOptimistic(c), f;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var o = this, i = r.query, a = r.variables, s = r.fetchPolicy, c = r.refetchWritePolicy, u = r.errorPolicy, l = r.returnPartialData, f = r.context, d = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: i,
      variables: a,
      networkStatus: n
    });
    var m = function() {
      return t.getDiff(a);
    }, p = function(w, b) {
      b === void 0 && (b = t.networkStatus || st.loading);
      var C = w.result;
      globalThis.__DEV__ !== !1 && !l && !St(C, {}) && _p(w.missing);
      var O = function(R) {
        return ht.of(V({ data: R, loading: li(b), networkStatus: b }, w.complete ? null : { partial: !0 }));
      };
      return C && o.getDocumentInfo(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: C },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(R) {
        return O(R.data || void 0);
      }) : u === "none" && b === st.refetch && Array.isArray(w.missing) ? O(void 0) : O(C);
    }, g = s === "no-cache" ? 0 : n === st.refetch && c !== "merge" ? 1 : 2, y = function() {
      return o.getResultsFromLink(t, g, {
        query: i,
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: u
      });
    }, S = d && typeof h == "number" && h !== n && li(n);
    switch (s) {
      default:
      case "cache-first": {
        var E = m();
        return E.complete ? { fromLink: !1, sources: [p(E, t.markReady())] } : l || S ? { fromLink: !0, sources: [p(E), y()] } : { fromLink: !0, sources: [y()] };
      }
      case "cache-and-network": {
        var E = m();
        return E.complete || l || S ? { fromLink: !0, sources: [p(E), y()] } : { fromLink: !0, sources: [y()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(m(), t.markReady())] };
      case "network-only":
        return S ? { fromLink: !0, sources: [p(m()), y()] } : { fromLink: !0, sources: [y()] };
      case "no-cache":
        return S ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            y()
          ]
        } : { fromLink: !0, sources: [y()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new Ks(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return V(V({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), Sd = !1, SS = function() {
  function e(t) {
    var r = this;
    if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
      throw tr(13);
    var n = t.uri, o = t.credentials, i = t.headers, a = t.cache, s = t.documentTransform, c = t.ssrMode, u = c === void 0 ? !1 : c, l = t.ssrForceFetchDelay, f = l === void 0 ? 0 : l, d = t.connectToDevTools, h = d === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : d, m = t.queryDeduplication, p = m === void 0 ? !0 : m, g = t.defaultOptions, y = t.assumeImmutableResults, S = y === void 0 ? a.assumeImmutableResults : y, E = t.resolvers, w = t.typeDefs, b = t.fragmentMatcher, C = t.name, O = t.version, R = t.link;
    if (R || (R = n ? new M1({ uri: n, credentials: o, headers: i }) : Po.empty()), this.link = R, this.cache = a, this.disableNetworkFetches = u || f > 0, this.queryDeduplication = p, this.defaultOptions = g || /* @__PURE__ */ Object.create(null), this.typeDefs = w, f && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), h && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !Sd && h && globalThis.__DEV__ !== !1 && (Sd = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var M = window.navigator, _ = M && M.userAgent, $ = void 0;
      typeof _ == "string" && (_.indexOf("Chrome/") > -1 ? $ = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : _.indexOf("Firefox/") > -1 && ($ = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), $ && globalThis.__DEV__ !== !1 && _e.log("Download the Apollo DevTools for a better development experience: %s", $);
    }
    this.version = il, this.localState = new Tp({
      cache: a,
      client: this,
      resolvers: E,
      fragmentMatcher: b
    }), this.queryManager = new bS({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform: s,
      queryDeduplication: p,
      ssrMode: u,
      clientAwareness: {
        name: C,
        version: O
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
  return Object.defineProperty(e.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(t) {
    return this.defaultOptions.watchQuery && (t = Vs(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = V(V({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Vs(this.defaultOptions.query, t)), _e(t.fetchPolicy !== "cache-and-network", 14), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = V(V({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Vs(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
  }, e.prototype.subscribe = function(t) {
    return this.queryManager.startGraphQLSubscription(t);
  }, e.prototype.readQuery = function(t, r) {
    return r === void 0 && (r = !1), this.cache.readQuery(t, r);
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !1), this.cache.readFragment(t, r);
  }, e.prototype.writeQuery = function(t) {
    var r = this.cache.writeQuery(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, e.prototype.writeFragment = function(t) {
    var r = this.cache.writeFragment(t);
    return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
  }, e.prototype.__actionHookForDevTools = function(t) {
    this.devToolsHookCb = t;
  }, e.prototype.__requestRaw = function(t) {
    return kc(this.link, t);
  }, e.prototype.resetStore = function() {
    var t = this;
    return Promise.resolve().then(function() {
      return t.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(t.resetStoreCallbacks.map(function(r) {
        return r();
      }));
    }).then(function() {
      return t.reFetchObservableQueries();
    });
  }, e.prototype.clearStore = function() {
    var t = this;
    return Promise.resolve().then(function() {
      return t.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(t.clearStoreCallbacks.map(function(r) {
        return r();
      }));
    });
  }, e.prototype.onResetStore = function(t) {
    var r = this;
    return this.resetStoreCallbacks.push(t), function() {
      r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e.prototype.onClearStore = function(t) {
    var r = this;
    return this.clearStoreCallbacks.push(t), function() {
      r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
        return n !== t;
      });
    };
  }, e.prototype.reFetchObservableQueries = function(t) {
    return this.queryManager.reFetchObservableQueries(t);
  }, e.prototype.refetchQueries = function(t) {
    var r = this.queryManager.refetchQueries(t), n = [], o = [];
    r.forEach(function(a, s) {
      n.push(s), o.push(a);
    });
    var i = Promise.all(o);
    return i.queries = n, i.results = o, i.catch(function(a) {
      globalThis.__DEV__ !== !1 && _e.debug(15, a);
    }), i;
  }, e.prototype.getObservableQueries = function(t) {
    return t === void 0 && (t = "active"), this.queryManager.getObservableQueries(t);
  }, e.prototype.extract = function(t) {
    return this.cache.extract(t);
  }, e.prototype.restore = function(t) {
    return this.cache.restore(t);
  }, e.prototype.addResolvers = function(t) {
    this.localState.addResolvers(t);
  }, e.prototype.setResolvers = function(t) {
    this.localState.setResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, e.prototype.setLocalStateFragmentMatcher = function(t) {
    this.localState.setFragmentMatcher(t);
  }, e.prototype.setLink = function(t) {
    this.link = this.queryManager.link = t;
  }, e;
}();
function ES(e) {
  return new Po(function(t, r) {
    var n = Kr(t, []);
    return new ht(function(o) {
      var i, a = !1;
      return Promise.resolve(n).then(function(s) {
        return e(s, t.getContext());
      }).then(t.setContext).then(function() {
        a || (i = r(t).subscribe({
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
const wS = `${Fv}/${zy._GRAPHQL}`, CS = new Hy(), OS = rp({
  uri: wS
}), xS = ES((e, { headers: t }) => {
  const r = CS.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), Ed = new SS({
  cache: new hS(),
  link: xS.concat(OS)
});
function Rp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _S } = Object.prototype, { getPrototypeOf: Ol } = Object, cs = ((e) => (t) => {
  const r = _S.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kr = (e) => (e = e.toLowerCase(), (t) => cs(t) === e), us = (e) => (t) => typeof t === e, { isArray: Mo } = Array, fi = us("undefined");
function TS(e) {
  return e !== null && !fi(e) && e.constructor !== null && !fi(e.constructor) && gr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pp = kr("ArrayBuffer");
function RS(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pp(e.buffer), t;
}
const PS = us("string"), gr = us("function"), Mp = us("number"), ls = (e) => e !== null && typeof e == "object", MS = (e) => e === !0 || e === !1, ha = (e) => {
  if (cs(e) !== "object")
    return !1;
  const t = Ol(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, NS = kr("Date"), IS = kr("File"), AS = kr("Blob"), DS = kr("FileList"), FS = (e) => ls(e) && gr(e.pipe), $S = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gr(e.append) && ((t = cs(e)) === "formdata" || // detect form-data instance
  t === "object" && gr(e.toString) && e.toString() === "[object FormData]"));
}, kS = kr("URLSearchParams"), LS = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _i(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Mo(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function Np(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Ip = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Ap = (e) => !fi(e) && e !== Ip;
function Kc() {
  const { caseless: e } = Ap(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Np(t, o) || o;
    ha(t[i]) && ha(n) ? t[i] = Kc(t[i], n) : ha(n) ? t[i] = Kc({}, n) : Mo(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && _i(arguments[n], r);
  return t;
}
const jS = (e, t, r, { allOwnKeys: n } = {}) => (_i(t, (o, i) => {
  r && gr(o) ? e[i] = Rp(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), VS = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zS = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, HS = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Ol(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, BS = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, WS = (e) => {
  if (!e)
    return null;
  if (Mo(e))
    return e;
  let t = e.length;
  if (!Mp(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, US = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ol(Uint8Array)), qS = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, QS = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, GS = kr("HTMLFormElement"), KS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), wd = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), YS = kr("RegExp"), Dp = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  _i(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, XS = (e) => {
  Dp(e, (t, r) => {
    if (gr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (gr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, JS = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Mo(e) ? n(e) : n(String(e).split(t)), r;
}, ZS = () => {
}, eE = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ys = "abcdefghijklmnopqrstuvwxyz", Cd = "0123456789", Fp = {
  DIGIT: Cd,
  ALPHA: Ys,
  ALPHA_DIGIT: Ys + Ys.toUpperCase() + Cd
}, tE = (e = 16, t = Fp.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function rE(e) {
  return !!(e && gr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const nE = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ls(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Mo(n) ? [] : {};
        return _i(n, (a, s) => {
          const c = r(a, o + 1);
          !fi(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, oE = kr("AsyncFunction"), iE = (e) => e && (ls(e) || gr(e)) && gr(e.then) && gr(e.catch), U = {
  isArray: Mo,
  isArrayBuffer: Pp,
  isBuffer: TS,
  isFormData: $S,
  isArrayBufferView: RS,
  isString: PS,
  isNumber: Mp,
  isBoolean: MS,
  isObject: ls,
  isPlainObject: ha,
  isUndefined: fi,
  isDate: NS,
  isFile: IS,
  isBlob: AS,
  isRegExp: YS,
  isFunction: gr,
  isStream: FS,
  isURLSearchParams: kS,
  isTypedArray: US,
  isFileList: DS,
  forEach: _i,
  merge: Kc,
  extend: jS,
  trim: LS,
  stripBOM: VS,
  inherits: zS,
  toFlatObject: HS,
  kindOf: cs,
  kindOfTest: kr,
  endsWith: BS,
  toArray: WS,
  forEachEntry: qS,
  matchAll: QS,
  isHTMLForm: GS,
  hasOwnProperty: wd,
  hasOwnProp: wd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dp,
  freezeMethods: XS,
  toObjectSet: JS,
  toCamelCase: KS,
  noop: ZS,
  toFiniteNumber: eE,
  findKey: Np,
  global: Ip,
  isContextDefined: Ap,
  ALPHABET: Fp,
  generateString: tE,
  isSpecCompliantForm: rE,
  toJSONObject: nE,
  isAsyncFn: oE,
  isThenable: iE
};
function He(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
U.inherits(He, Error, {
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
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const $p = He.prototype, kp = {};
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
  kp[e] = { value: e };
});
Object.defineProperties(He, kp);
Object.defineProperty($p, "isAxiosError", { value: !0 });
He.from = (e, t, r, n, o, i) => {
  const a = Object.create($p);
  return U.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), He.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const aE = null;
function Yc(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function Lp(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Od(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Lp(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function sE(e) {
  return U.isArray(e) && !e.some(Yc);
}
const cE = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function fs(e, t, r) {
  if (!U.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = U.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, g) {
    return !U.isUndefined(g[p]);
  });
  const n = r.metaTokens, o = r.visitor || l, i = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (U.isDate(m))
      return m.toISOString();
    if (!c && U.isBlob(m))
      throw new He("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(m) || U.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, p, g) {
    let y = m;
    if (m && !g && typeof m == "object") {
      if (U.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (U.isArray(m) && sE(m) || (U.isFileList(m) || U.endsWith(p, "[]")) && (y = U.toArray(m)))
        return p = Lp(p), y.forEach(function(E, w) {
          !(U.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Od([p], w, i) : a === null ? p : p + "[]",
            u(E)
          );
        }), !1;
    }
    return Yc(m) ? !0 : (t.append(Od(g, p, i), u(m)), !1);
  }
  const f = [], d = Object.assign(cE, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Yc
  });
  function h(m, p) {
    if (!U.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), U.forEach(m, function(y, S) {
        (!(U.isUndefined(y) || y === null) && o.call(
          t,
          y,
          U.isString(S) ? S.trim() : S,
          p,
          d
        )) === !0 && h(y, p ? p.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function xd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function xl(e, t) {
  this._pairs = [], e && fs(e, this, t);
}
const jp = xl.prototype;
jp.append = function(t, r) {
  this._pairs.push([t, r]);
};
jp.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, xd);
  } : xd;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function uE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Vp(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || uE, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = U.isURLSearchParams(t) ? t.toString() : new xl(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class lE {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    U.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const _d = lE, zp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fE = typeof URLSearchParams < "u" ? URLSearchParams : xl, dE = typeof FormData < "u" ? FormData : null, hE = typeof Blob < "u" ? Blob : null, vE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), pE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Dr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fE,
    FormData: dE,
    Blob: hE
  },
  isStandardBrowserEnv: vE,
  isStandardBrowserWebWorkerEnv: pE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function mE(e, t) {
  return fs(e, new Dr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Dr.isNode && U.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gE(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yE(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Hp(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), c = i >= r.length;
    return a = !a && U.isArray(o) ? o.length : a, c ? (U.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !U.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && U.isArray(o[a]) && (o[a] = yE(o[a])), !s);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const r = {};
    return U.forEachEntry(e, (n, o) => {
      t(gE(n), o, r, 0);
    }), r;
  }
  return null;
}
const bE = {
  "Content-Type": void 0
};
function SE(e, t, r) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const ds = {
  transitional: zp,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = U.isObject(t);
    if (i && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return o && o ? JSON.stringify(Hp(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mE(t, this.formSerializer).toString();
      if ((s = U.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return fs(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), SE(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || ds.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && U.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? He.from(s, He.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
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
    FormData: Dr.classes.FormData,
    Blob: Dr.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
U.forEach(["delete", "get", "head"], function(t) {
  ds.headers[t] = {};
});
U.forEach(["post", "put", "patch"], function(t) {
  ds.headers[t] = U.merge(bE);
});
const _l = ds, EE = U.toObjectSet([
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
]), wE = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && EE[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Td = Symbol("internals");
function qo(e) {
  return e && String(e).trim().toLowerCase();
}
function va(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(va) : String(e);
}
function CE(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const OE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xs(e, t, r, n, o) {
  if (U.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!U.isString(t)) {
    if (U.isString(n))
      return t.indexOf(n) !== -1;
    if (U.isRegExp(n))
      return n.test(t);
  }
}
function xE(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function _E(e, t) {
  const r = U.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class hs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, c, u) {
      const l = qo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = U.findKey(o, l);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = va(s));
    }
    const a = (s, c) => U.forEach(s, (u, l) => i(u, l, c));
    return U.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : U.isString(t) && (t = t.trim()) && !OE(t) ? a(wE(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = qo(t), t) {
      const n = U.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return CE(o);
        if (U.isFunction(r))
          return r.call(this, o, n);
        if (U.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = qo(t), t) {
      const n = U.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = qo(a), a) {
        const s = U.findKey(n, a);
        s && (!r || Xs(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return U.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Xs(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return U.forEach(this, (o, i) => {
      const a = U.findKey(n, i);
      if (a) {
        r[a] = va(o), delete r[i];
        return;
      }
      const s = t ? xE(i) : String(i).trim();
      s !== i && delete r[i], r[s] = va(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && U.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Td] = this[Td] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = qo(a);
      n[s] || (_E(o, a), n[s] = !0);
    }
    return U.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
hs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(hs.prototype);
U.freezeMethods(hs);
const Gr = hs;
function Js(e, t) {
  const r = this || _l, n = t || r, o = Gr.from(n.headers);
  let i = n.data;
  return U.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Bp(e) {
  return !!(e && e.__CANCEL__);
}
function Ti(e, t, r) {
  He.call(this, e ?? "canceled", He.ERR_CANCELED, t, r), this.name = "CanceledError";
}
U.inherits(Ti, He, {
  __CANCEL__: !0
});
function TE(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new He(
    "Request failed with status code " + r.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const RE = Dr.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), U.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), U.isString(i) && c.push("path=" + i), U.isString(a) && c.push("domain=" + a), s === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function PE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ME(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Wp(e, t) {
  return e && !PE(t) ? ME(e, t) : t;
}
const NE = Dr.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return n = o(window.location.href), function(a) {
      const s = U.isString(a) ? o(a) : a;
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
function IE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function AE(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), l = n[i];
    a || (a = u), r[o] = c, n[o] = u;
    let f = i, d = 0;
    for (; f !== o; )
      d += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < t)
      return;
    const h = l && u - l;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Rd(e, t) {
  let r = 0;
  const n = AE(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, c = n(s), u = i <= a;
    r = i;
    const l = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && u ? (a - i) / c : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const DE = typeof XMLHttpRequest < "u", FE = DE && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = Gr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    U.isFormData(o) && (Dr.isStandardBrowserEnv || Dr.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const l = Wp(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Vp(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const h = Gr.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      TE(function(y) {
        r(y), c();
      }, function(y) {
        n(y), c();
      }, p), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (n(new He("Request aborted", He.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new He("Network Error", He.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || zp;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new He(
        m,
        p.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Dr.isStandardBrowserEnv) {
      const h = (e.withCredentials || NE(l)) && e.xsrfCookieName && RE.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && U.forEach(i.toJSON(), function(m, p) {
      u.setRequestHeader(p, m);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Rd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Rd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      u && (n(!h || h.type ? new Ti(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = IE(l);
    if (d && Dr.protocols.indexOf(d) === -1) {
      n(new He("Unsupported protocol " + d + ":", He.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, pa = {
  http: aE,
  xhr: FE
};
U.forEach(pa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $E = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = U.isString(r) ? pa[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new He(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        U.hasOwnProp(pa, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!U.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: pa
};
function Zs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ti(null, e);
}
function Pd(e) {
  return Zs(e), e.headers = Gr.from(e.headers), e.data = Js.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $E.getAdapter(e.adapter || _l.adapter)(e).then(function(n) {
    return Zs(e), n.data = Js.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Gr.from(n.headers), n;
  }, function(n) {
    return Bp(n) || (Zs(e), n && n.response && (n.response.data = Js.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Gr.from(n.response.headers))), Promise.reject(n);
  });
}
const Md = (e) => e instanceof Gr ? e.toJSON() : e;
function wo(e, t) {
  t = t || {};
  const r = {};
  function n(u, l, f) {
    return U.isPlainObject(u) && U.isPlainObject(l) ? U.merge.call({ caseless: f }, u, l) : U.isPlainObject(l) ? U.merge({}, l) : U.isArray(l) ? l.slice() : l;
  }
  function o(u, l, f) {
    if (U.isUndefined(l)) {
      if (!U.isUndefined(u))
        return n(void 0, u, f);
    } else
      return n(u, l, f);
  }
  function i(u, l) {
    if (!U.isUndefined(l))
      return n(void 0, l);
  }
  function a(u, l) {
    if (U.isUndefined(l)) {
      if (!U.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, l);
  }
  function s(u, l, f) {
    if (f in t)
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
    headers: (u, l) => o(Md(u), Md(l), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = c[l] || o, d = f(e[l], t[l], l);
    U.isUndefined(d) && f !== s || (r[l] = d);
  }), r;
}
const Up = "1.4.0", Tl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nd = {};
Tl.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + Up + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new He(
        o(a, " has been removed" + (r ? " in " + r : "")),
        He.ERR_DEPRECATED
      );
    return r && !Nd[a] && (Nd[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function kE(e, t, r) {
  if (typeof e != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new He("option " + i + " must be " + c, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new He("Unknown option " + i, He.ERR_BAD_OPTION);
  }
}
const Xc = {
  assertOptions: kE,
  validators: Tl
}, tn = Xc.validators;
class Na {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new _d(),
      response: new _d()
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
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = wo(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Xc.assertOptions(n, {
      silentJSONParsing: tn.transitional(tn.boolean),
      forcedJSONParsing: tn.transitional(tn.boolean),
      clarifyTimeoutError: tn.transitional(tn.boolean)
    }, !1), o != null && (U.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Xc.assertOptions(o, {
      encode: tn.function,
      serialize: tn.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && U.merge(
      i.common,
      i[r.method]
    ), a && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = Gr.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (c = c && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let l, f = 0, d;
    if (!c) {
      const m = [Pd.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, u), d = m.length, l = Promise.resolve(r); f < d; )
        l = l.then(m[f++], m[f++]);
      return l;
    }
    d = s.length;
    let h = r;
    for (f = 0; f < d; ) {
      const m = s[f++], p = s[f++];
      try {
        h = m(h);
      } catch (g) {
        p.call(this, g);
        break;
      }
    }
    try {
      l = Pd.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = u.length; f < d; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(t) {
    t = wo(this.defaults, t);
    const r = Wp(t.baseURL, t.url);
    return Vp(r, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Na.prototype[t] = function(r, n) {
    return this.request(wo(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(wo(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Na.prototype[t] = r(), Na.prototype[t + "Form"] = r(!0);
});
const ma = Na;
class Rl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
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
    }, t(function(i, a, s) {
      n.reason || (n.reason = new Ti(i, a, s), r(n.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Rl(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const LE = Rl;
function jE(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function VE(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const Jc = {
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
Object.entries(Jc).forEach(([e, t]) => {
  Jc[t] = e;
});
const zE = Jc;
function qp(e) {
  const t = new ma(e), r = Rp(ma.prototype.request, t);
  return U.extend(r, ma.prototype, t, { allOwnKeys: !0 }), U.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return qp(wo(e, o));
  }, r;
}
const At = qp(_l);
At.Axios = ma;
At.CanceledError = Ti;
At.CancelToken = LE;
At.isCancel = Bp;
At.VERSION = Up;
At.toFormData = fs;
At.AxiosError = He;
At.Cancel = At.CanceledError;
At.all = function(t) {
  return Promise.all(t);
};
At.spread = jE;
At.isAxiosError = VE;
At.mergeConfig = wo;
At.AxiosHeaders = Gr;
At.formToJSON = (e) => Hp(U.isHTMLForm(e) ? new FormData(e) : e);
At.HttpStatusCode = zE;
At.default = At;
const HE = At, NI = HE.create({
  baseURL: Fv,
  withCredentials: !0
}), BE = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, II = [BE.PROFILE], AI = () => {
  const [e, t] = fr([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), o?.(), !1;
        };
        t([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, DI = (e, t) => {
  Bt(() => {
    e();
  }, t);
}, WE = (e = !1) => {
  const [t, r] = fr(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, FI = (e, t) => {
  const r = De();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, $I = (e, t) => {
  Bt(() => {
    for (const r of t)
      if (!r)
        return;
    return e();
  }, t);
}, kI = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Qp = ({ when: e, children: t }) => e ? t : null, Gp = Ei({}), UE = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Kp = ({ children: e }) => {
  const t = De(), r = De(), n = WE(), o = async () => {
    const [a, s] = await UE();
    t.current = a, r.current = s, n.on();
  };
  Bt(() => {
    o();
  }, []);
  const i = go(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ xt(Gp.Provider, { value: i, children: /* @__PURE__ */ xt(Qp, { when: n.val, children: e }) });
}, Yp = () => Gt(Gp);
var kt;
kt = { __e: function(e, t, r, n) {
  for (var o, i, a; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Ia, Et, ec, Id, Zc = 0, Xp = [], ga = [], Ad = kt.__b, Dd = kt.__r, Fd = kt.diffed, $d = kt.__c, kd = kt.unmount;
function Jp(e, t) {
  kt.__h && kt.__h(Et, e, Zc || t), Zc = 0;
  var r = Et.__H || (Et.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: ga }), r.__[e];
}
function qE(e) {
  return Zc = 1, QE(Zp, e);
}
function QE(e, t, r) {
  var n = Jp(Ia++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Zp(void 0, t), function(s) {
    var c = n.__N ? n.__N[0] : n.__[0], u = n.t(c, s);
    c !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = Et, !Et.u)) {
    var o = function(s, c, u) {
      if (!n.__c.__H)
        return !0;
      var l = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (l.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, s, c, u);
      var f = !1;
      return l.forEach(function(d) {
        if (d.__N) {
          var h = d.__[0];
          d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (f = !0);
        }
      }), !(!f && n.__c.props === s) && (!i || i.call(this, s, c, u));
    };
    Et.u = !0;
    var i = Et.shouldComponentUpdate, a = Et.componentWillUpdate;
    Et.componentWillUpdate = function(s, c, u) {
      if (this.__e) {
        var l = i;
        i = void 0, o(s, c, u), i = l;
      }
      a && a.call(this, s, c, u);
    }, Et.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function GE(e) {
  var t = Jp(Ia++, 10), r = qE();
  return t.__ = e, Et.componentDidCatch || (Et.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function KE() {
  for (var e; e = Xp.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ya), e.__H.__h.forEach(eu), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], kt.__e(t, e.__v);
      }
}
kt.__b = function(e) {
  Et = null, Ad && Ad(e);
}, kt.__r = function(e) {
  Dd && Dd(e), Ia = 0;
  var t = (Et = e.__c).__H;
  t && (ec === Et ? (t.__h = [], Et.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = ga, r.__N = r.i = void 0;
  })) : (t.__h.forEach(ya), t.__h.forEach(eu), t.__h = [], Ia = 0)), ec = Et;
}, kt.diffed = function(e) {
  Fd && Fd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Xp.push(t) !== 1 && Id === kt.requestAnimationFrame || ((Id = kt.requestAnimationFrame) || YE)(KE)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== ga && (r.__ = r.__V), r.i = void 0, r.__V = ga;
  })), ec = Et = null;
}, kt.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(ya), r.__h = r.__h.filter(function(n) {
        return !n.__ || eu(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], kt.__e(n, r.__v);
    }
  }), $d && $d(e, t);
}, kt.unmount = function(e) {
  kd && kd(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      ya(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && kt.__e(t, r.__v));
};
var Ld = typeof requestAnimationFrame == "function";
function YE(e) {
  var t, r = function() {
    clearTimeout(n), Ld && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  Ld && (t = requestAnimationFrame(r));
}
function ya(e) {
  var t = Et, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), Et = t;
}
function eu(e) {
  var t = Et;
  e.__c = e.__(), Et = t;
}
function Zp(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const XE = () => /* @__PURE__ */ Dv("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ xt("br", {})
] }), LI = ({ children: e }) => {
  const [t] = GE();
  return console.error(t), t ? /* @__PURE__ */ xt(XE, { errorInfo: t }) : /* @__PURE__ */ xt(nl, { children: e });
};
function br(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Be(e) {
  "@babel/helpers - typeof";
  return Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Be(e);
}
function JE(e, t) {
  if (Be(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Be(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function em(e) {
  var t = JE(e, "string");
  return Be(t) === "symbol" ? t : String(t);
}
function jd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, em(n.key), n);
  }
}
function Sr(e, t, r) {
  return t && jd(e.prototype, t), r && jd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function tu(e, t) {
  return tu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, tu(e, t);
}
function Ri(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && tu(e, t);
}
function Aa(e) {
  return Aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Aa(e);
}
function ZE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Da(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ew(e, t) {
  if (t && (Be(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Da(e);
}
function Pi(e) {
  var t = ZE();
  return function() {
    var n = Aa(e), o;
    if (t) {
      var i = Aa(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return ew(this, o);
  };
}
var tm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(tm);
var tw = tm.exports;
const Ne = /* @__PURE__ */ ml(tw);
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ze.apply(this, arguments);
}
var ru = { exports: {} }, Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function rw() {
  if (Vd)
    return Qe;
  Vd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var C = b.$$typeof;
      switch (C) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case l:
                case m:
                case h:
                case a:
                  return b;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function w(b) {
    return E(b) === u;
  }
  return Qe.AsyncMode = c, Qe.ConcurrentMode = u, Qe.ContextConsumer = s, Qe.ContextProvider = a, Qe.Element = t, Qe.ForwardRef = l, Qe.Fragment = n, Qe.Lazy = m, Qe.Memo = h, Qe.Portal = r, Qe.Profiler = i, Qe.StrictMode = o, Qe.Suspense = f, Qe.isAsyncMode = function(b) {
    return w(b) || E(b) === c;
  }, Qe.isConcurrentMode = w, Qe.isContextConsumer = function(b) {
    return E(b) === s;
  }, Qe.isContextProvider = function(b) {
    return E(b) === a;
  }, Qe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Qe.isForwardRef = function(b) {
    return E(b) === l;
  }, Qe.isFragment = function(b) {
    return E(b) === n;
  }, Qe.isLazy = function(b) {
    return E(b) === m;
  }, Qe.isMemo = function(b) {
    return E(b) === h;
  }, Qe.isPortal = function(b) {
    return E(b) === r;
  }, Qe.isProfiler = function(b) {
    return E(b) === i;
  }, Qe.isStrictMode = function(b) {
    return E(b) === o;
  }, Qe.isSuspense = function(b) {
    return E(b) === f;
  }, Qe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === a || b.$$typeof === s || b.$$typeof === l || b.$$typeof === g || b.$$typeof === y || b.$$typeof === S || b.$$typeof === p);
  }, Qe.typeOf = E, Qe;
}
var Ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function nw() {
  return zd || (zd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === f || N === d || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === h || N.$$typeof === a || N.$$typeof === s || N.$$typeof === l || N.$$typeof === g || N.$$typeof === y || N.$$typeof === S || N.$$typeof === p);
    }
    function w(N) {
      if (typeof N == "object" && N !== null) {
        var Z = N.$$typeof;
        switch (Z) {
          case t:
            var j = N.type;
            switch (j) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case f:
                return j;
              default:
                var ee = j && j.$$typeof;
                switch (ee) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case a:
                    return ee;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var b = c, C = u, O = s, R = a, M = t, _ = l, $ = n, T = m, x = h, P = r, A = i, F = o, D = f, B = !1;
    function q(N) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(N) || w(N) === c;
    }
    function ne(N) {
      return w(N) === u;
    }
    function se(N) {
      return w(N) === s;
    }
    function L(N) {
      return w(N) === a;
    }
    function H(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function z(N) {
      return w(N) === l;
    }
    function J(N) {
      return w(N) === n;
    }
    function I(N) {
      return w(N) === m;
    }
    function Q(N) {
      return w(N) === h;
    }
    function k(N) {
      return w(N) === r;
    }
    function X(N) {
      return w(N) === i;
    }
    function re(N) {
      return w(N) === o;
    }
    function Y(N) {
      return w(N) === f;
    }
    Ge.AsyncMode = b, Ge.ConcurrentMode = C, Ge.ContextConsumer = O, Ge.ContextProvider = R, Ge.Element = M, Ge.ForwardRef = _, Ge.Fragment = $, Ge.Lazy = T, Ge.Memo = x, Ge.Portal = P, Ge.Profiler = A, Ge.StrictMode = F, Ge.Suspense = D, Ge.isAsyncMode = q, Ge.isConcurrentMode = ne, Ge.isContextConsumer = se, Ge.isContextProvider = L, Ge.isElement = H, Ge.isForwardRef = z, Ge.isFragment = J, Ge.isLazy = I, Ge.isMemo = Q, Ge.isPortal = k, Ge.isProfiler = X, Ge.isStrictMode = re, Ge.isSuspense = Y, Ge.isValidElementType = E, Ge.typeOf = w;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? ru.exports = rw() : ru.exports = nw();
var rm = ru.exports;
function Dn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Dn(n)) : rm.isFragment(n) && n.props ? r = r.concat(Dn(n.props.children, t)) : r.push(n));
  }), r;
}
var nu = {}, Pl = [], ow = function(t) {
  Pl.push(t);
};
function di(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Pl.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function iw(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Pl.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function nm() {
  nu = {};
}
function om(e, t, r) {
  !t && !nu[r] && (e(!1, r), nu[r] = !0);
}
function ke(e, t) {
  om(di, e, t);
}
function ou(e, t) {
  om(iw, e, t);
}
ke.preMessage = ow;
ke.resetWarned = nm;
ke.noteOnce = ou;
function ye(e, t, r) {
  return t = em(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vs(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Ml(e, t) {
  typeof e == "function" ? e(t) : Be(e) === "object" && e && "current" in e && (e.current = t);
}
function No() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      Ml(i, o);
    });
  };
}
function Nl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return vs(function() {
    return No.apply(void 0, t);
  }, t, function(n, o) {
    return n.length === o.length && n.every(function(i, a) {
      return i === o[a];
    });
  });
}
function Mi(e) {
  var t, r, n = rm.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Fa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function $a(e) {
  return Fa(e) ? e : e instanceof Pe.Component ? Dy.findDOMNode(e) : null;
}
var im = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, i) {
      return o[0] === r ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), iu = typeof window < "u" && typeof document < "u" && window.document === document, ka = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), aw = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ka) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), sw = 2;
function cw(e, t) {
  var r = !1, n = !1, o = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    aw(i);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < sw)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    o = c;
  }
  return s;
}
var uw = 20, lw = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], fw = typeof MutationObserver < "u", dw = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = cw(this.refresh.bind(this), uw);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !iu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fw ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !iu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = lw.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), am = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Co = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ka;
}, sm = ps(0, 0, 0, 0);
function La(e) {
  return parseFloat(e) || 0;
}
function Bd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + La(i);
  }, 0);
}
function hw(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    r[i] = La(a);
  }
  return r;
}
function vw(e) {
  var t = e.getBBox();
  return ps(0, 0, t.width, t.height);
}
function pw(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return sm;
  var n = Co(e).getComputedStyle(e), o = hw(n), i = o.left + o.right, a = o.top + o.bottom, s = La(n.width), c = La(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Bd(n, "left", "right") + i), Math.round(c + a) !== r && (c -= Bd(n, "top", "bottom") + a)), !gw(e)) {
    var u = Math.round(s + i) - t, l = Math.round(c + a) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(l) !== 1 && (c -= l);
  }
  return ps(o.left, o.top, s, c);
}
var mw = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Co(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Co(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function gw(e) {
  return e === Co(e).document.documentElement;
}
function yw(e) {
  return iu ? mw(e) ? vw(e) : pw(e) : sm;
}
function bw(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return am(a, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), a;
}
function ps(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Sw = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ps(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yw(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Ew = (
  /** @class */
  function() {
    function e(t, r) {
      var n = bw(r);
      am(this, { target: t, contentRect: n });
    }
    return e;
  }()
), ww = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new im(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Co(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Sw(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Co(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Ew(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), cm = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new im(), um = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = dw.getInstance(), n = new ww(t, r, this);
      cm.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  um.prototype[e] = function() {
    var t;
    return (t = cm.get(this))[e].apply(t, arguments);
  };
});
var Cw = function() {
  return typeof ka.ResizeObserver < "u" ? ka.ResizeObserver : um;
}(), qr = /* @__PURE__ */ new Map();
function lm(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = qr.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var fm = new Cw(lm);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Ow(e, t) {
  qr.has(e) || (qr.set(e, /* @__PURE__ */ new Set()), fm.observe(e)), qr.get(e).add(t);
}
function xw(e, t) {
  qr.has(e) && (qr.get(e).delete(t), qr.get(e).size || (fm.unobserve(e), qr.delete(e)));
}
var _w = /* @__PURE__ */ function(e) {
  Ri(r, e);
  var t = Pi(r);
  function r() {
    return br(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), au = /* @__PURE__ */ v.createContext(null);
function Tw(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), o = v.useRef([]), i = v.useContext(au), a = v.useCallback(function(s, c, u) {
    n.current += 1;
    var l = n.current;
    o.current.push({
      size: s,
      element: c,
      data: u
    }), Promise.resolve().then(function() {
      l === n.current && (r?.(o.current), o.current = []);
    }), i?.(s, c, u);
  }, [r, i]);
  return /* @__PURE__ */ v.createElement(au.Provider, {
    value: a
  }, t);
}
function Rw(e, t) {
  var r = e.children, n = e.disabled, o = v.useRef(null), i = v.useRef(null), a = v.useContext(au), s = typeof r == "function", c = s ? r(o) : r, u = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ v.isValidElement(c) && Mi(c), f = l ? c.ref : null, d = v.useMemo(function() {
    return No(f, o);
  }, [f, o]), h = function() {
    return $a(o.current) || $a(i.current);
  };
  v.useImperativeHandle(t, function() {
    return h();
  });
  var m = v.useRef(e);
  m.current = e;
  var p = v.useCallback(function(g) {
    var y = m.current, S = y.onResize, E = y.data, w = g.getBoundingClientRect(), b = w.width, C = w.height, O = g.offsetWidth, R = g.offsetHeight, M = Math.floor(b), _ = Math.floor(C);
    if (u.current.width !== M || u.current.height !== _ || u.current.offsetWidth !== O || u.current.offsetHeight !== R) {
      var $ = {
        width: M,
        height: _,
        offsetWidth: O,
        offsetHeight: R
      };
      u.current = $;
      var T = O === Math.round(b) ? b : O, x = R === Math.round(C) ? C : R, P = W(W({}, $), {}, {
        offsetWidth: T,
        offsetHeight: x
      });
      a?.(P, g, E), S && Promise.resolve().then(function() {
        S(P, g);
      });
    }
  }, []);
  return v.useEffect(function() {
    var g = h();
    return g && !n && Ow(g, p), function() {
      return xw(g, p);
    };
  }, [o.current, n]), /* @__PURE__ */ v.createElement(_w, {
    ref: i
  }, l ? /* @__PURE__ */ v.cloneElement(c, {
    ref: d
  }) : c);
}
var dm = /* @__PURE__ */ v.forwardRef(Rw);
process.env.NODE_ENV !== "production" && (dm.displayName = "SingleObserver");
var Pw = "rc-observer-key";
function Mw(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Dn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? di(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && di(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = o?.key || "".concat(Pw, "-").concat(i);
    return /* @__PURE__ */ v.createElement(dm, Ze({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var kn = /* @__PURE__ */ v.forwardRef(Mw);
process.env.NODE_ENV !== "production" && (kn.displayName = "ResizeObserver");
kn.Collection = Tw;
function Il(e, t) {
  var r = W({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Nw(e) {
  if (Array.isArray(e))
    return su(e);
}
function hm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Al(e, t) {
  if (e) {
    if (typeof e == "string")
      return su(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return su(e, t);
  }
}
function Iw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function be(e) {
  return Nw(e) || hm(e) || Al(e) || Iw();
}
var vm = function(t) {
  return +setTimeout(t, 16);
}, pm = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (vm = function(t) {
  return window.requestAnimationFrame(t);
}, pm = function(t) {
  return window.cancelAnimationFrame(t);
});
var Wd = 0, Dl = /* @__PURE__ */ new Map();
function mm(e) {
  Dl.delete(e);
}
var Wt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Wd += 1;
  var n = Wd;
  function o(i) {
    if (i === 0)
      mm(n), t();
    else {
      var a = vm(function() {
        o(i - 1);
      });
      Dl.set(n, a);
    }
  }
  return o(r), n;
};
Wt.cancel = function(e) {
  var t = Dl.get(e);
  return mm(t), pm(t);
};
function Fl(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Aw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Mt(e, t) {
  if (e == null)
    return {};
  var r = Aw(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gm(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (ke(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === a)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(i);
    var u = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var l = 0; l < i.length; l++)
        if (!o(i[l], a[l], u))
          return !1;
      return !0;
    }
    if (i && a && Be(i) === "object" && Be(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return o(i[d], a[d], u);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Ud = "%", Dw = /* @__PURE__ */ function() {
  function e(t) {
    br(this, e), ye(this, "instanceId", void 0), ye(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Sr(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(Ud)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(Ud), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), cu = "data-token-hash", Nn = "data-css-hash", Fw = "data-cache-path", co = "__cssinjs_instance__";
function $w() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Nn, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[co] = o[co] || e, o[co] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Nn, "]"))).forEach(function(o) {
      var i = o.getAttribute(Nn);
      if (n[i]) {
        if (o[co] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Dw(e);
}
var $l = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: $w(),
  defaultCache: !0
});
function Kt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function kw(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var qd = "data-rc-order", Qd = "data-rc-priority", Lw = "rc-util-key", uu = /* @__PURE__ */ new Map();
function ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Lw;
}
function ms(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bm(e) {
  return Array.from((uu.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Sm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Kt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = jw(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(qd, a), s && i && c.setAttribute(Qd, "".concat(i)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var u = ms(t), l = u.firstChild;
  if (n) {
    if (s) {
      var f = bm(u).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(qd)))
          return !1;
        var h = Number(d.getAttribute(Qd) || 0);
        return i >= h;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, l);
  } else
    u.appendChild(c);
  return c;
}
function Em(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ms(t);
  return bm(r).find(function(n) {
    return n.getAttribute(ym(t)) === e;
  });
}
function ja(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Em(e, t);
  if (r) {
    var n = ms(t);
    n.removeChild(r);
  }
}
function Vw(e, t) {
  var r = uu.get(e);
  if (!r || !kw(document, r)) {
    var n = Sm("", t), o = n.parentNode;
    uu.set(e, o), e.removeChild(n);
  }
}
function hi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ms(r);
  Vw(n, r);
  var o = Em(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = Sm(e, r);
  return c.setAttribute(ym(r), t), c;
}
function wm(e) {
  if (Array.isArray(e))
    return e;
}
function zw(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (l) {
      u = !0, o = l;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function Cm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return wm(e) || zw(e, t) || Al(e, t) || Cm();
}
function Hw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var kl = /* @__PURE__ */ function() {
  function e() {
    br(this, e), ye(this, "cache", void 0), ye(this, "keys", void 0), ye(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Sr(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var c, u;
          a = (c = a) === null || c === void 0 || (u = c.map) === null || u === void 0 ? void 0 : u.get(s);
        }
      }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(u, l) {
            var f = G(u, 2), d = f[1];
            return o.internalGet(l)[1] < d ? [l, o.internalGet(l)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), a = G(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var c = this.cache;
      r.forEach(function(u, l) {
        if (l === r.length - 1)
          c.set(u, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = c.get(u);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(u, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Hw(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
ye(kl, "MAX_CACHE_SIZE", 20);
ye(kl, "MAX_CACHE_OFFSET", 5);
var Gd = 0, Om = /* @__PURE__ */ function() {
  function e(t) {
    br(this, e), ye(this, "derivatives", void 0), ye(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Gd, t.length === 0 && di(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Gd += 1;
  }
  return Sr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), tc = new kl();
function lu(e) {
  var t = Array.isArray(e) ? e : [e];
  return tc.has(t) || tc.set(t, new Om(t)), tc.get(t);
}
function Va(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Om ? t += n.id : n && Be(n) === "object" ? t += Va(n) : t += n;
  }), t;
}
function Bw(e, t) {
  return Fl("".concat(t, "_").concat(Va(e)));
}
var ti = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), xm = "_bAmBoO_";
function Ww(e, t, r) {
  if (Kt()) {
    var n, o;
    hi(e, ti);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(xm);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), ja(ti), a;
  }
  return !1;
}
var rc = void 0;
function Uw() {
  return rc === void 0 && (rc = Ww("@layer ".concat(ti, " { .").concat(ti, ' { content: "').concat(xm, '"!important; } }'), function(e) {
    e.className = ti;
  })), rc;
}
var Kd = process.env.NODE_ENV !== "test" && Kt() ? v.useLayoutEffect : v.useEffect, _t = function(t, r) {
  var n = v.useRef(!0);
  Kd(function() {
    return t(n.current);
  }, r), Kd(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Yd = function(t, r) {
  _t(function(n) {
    if (!n)
      return t();
  }, r);
}, qw = W({}, v), Xd = qw.useInsertionEffect, Qw = function(t, r, n) {
  v.useMemo(t, n), _t(function() {
    return r(!0);
  }, n);
}, Gw = Xd ? function(e, t, r) {
  return Xd(function() {
    return e(), t();
  }, r);
} : Qw;
function Kw() {
  return !1;
}
var fu = !1;
function Yw() {
  return fu;
}
const Xw = process.env.NODE_ENV === "production" ? Kw : Yw;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var nc = window;
  if (typeof nc.webpackHotUpdate == "function") {
    var Jw = nc.webpackHotUpdate;
    nc.webpackHotUpdate = function() {
      return fu = !0, setTimeout(function() {
        fu = !1;
      }, 0), Jw.apply(void 0, arguments);
    };
  }
}
function _m(e, t, r, n, o) {
  var i = v.useContext($l), a = i.cache, s = [e].concat(be(t)), c = s.join("_"), u = Xw(), l = function(m) {
    a.update(s, function(p) {
      var g = p || [], y = G(g, 2), S = y[0], E = S === void 0 ? 0 : S, w = y[1], b = w;
      process.env.NODE_ENV !== "production" && w && u && (n?.(b, u), b = null);
      var C = b || r(), O = [E, C];
      return m ? m(O) : O;
    });
  };
  v.useMemo(
    function() {
      l();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = a.get(s);
  process.env.NODE_ENV !== "production" && !f && (l(), f = a.get(s));
  var d = f[1];
  return Gw(function() {
    o?.(d);
  }, function(h) {
    return l(function(m) {
      var p = G(m, 2), g = p[0], y = p[1];
      return h && g === 0 && o?.(d), [g + 1, y];
    }), function() {
      a.update(s, function(m) {
        var p = m || [], g = G(p, 2), y = g[0], S = y === void 0 ? 0 : y, E = g[1], w = S - 1;
        return w === 0 ? (n?.(E, !1), null) : [S - 1, E];
      });
    };
  }, [c]), d;
}
var Zw = {}, eC = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", On = /* @__PURE__ */ new Map();
function tC(e) {
  On.set(e, (On.get(e) || 0) + 1);
}
function rC(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(cu, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[co] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var nC = 0;
function oC(e, t) {
  On.set(e, (On.get(e) || 0) - 1);
  var r = Array.from(On.keys()), n = r.filter(function(o) {
    var i = On.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > nC && n.forEach(function(o) {
    rC(o, t), On.delete(o);
  });
}
var iC = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = W(W({}, i), r);
  return o && (a = o(a)), a;
};
function aC(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Gt($l), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, c = s === void 0 ? Zw : s, u = r.formatToken, l = r.getComputedToken, f = v.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(be(t)));
  }, [t]), d = v.useMemo(function() {
    return Va(f);
  }, [f]), h = v.useMemo(function() {
    return Va(c);
  }, [c]), m = _m("token", [a, e.id, d, h], function() {
    var p = l ? l(f, c, e) : iC(f, c, e, u), g = Bw(p, a);
    p._tokenKey = g, tC(g);
    var y = "".concat(eC, "-").concat(Fl(g));
    return p._hashId = y, [p, y];
  }, function(p) {
    oC(p[0]._tokenKey, o);
  });
  return m;
}
var Tm = {
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
}, Rm = "comm", Pm = "rule", Mm = "decl", sC = "@import", cC = "@keyframes", uC = "@layer", lC = Math.abs, Ll = String.fromCharCode;
function Nm(e) {
  return e.trim();
}
function ba(e, t, r) {
  return e.replace(t, r);
}
function fC(e, t) {
  return e.indexOf(t);
}
function vi(e, t) {
  return e.charCodeAt(t) | 0;
}
function pi(e, t, r) {
  return e.slice(t, r);
}
function Ur(e) {
  return e.length;
}
function dC(e) {
  return e.length;
}
function Qi(e, t) {
  return t.push(e), e;
}
var gs = 1, Oo = 1, Im = 0, yr = 0, Pt = 0, Io = "";
function jl(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: gs, column: Oo, length: a, return: "", siblings: s };
}
function hC() {
  return Pt;
}
function vC() {
  return Pt = yr > 0 ? vi(Io, --yr) : 0, Oo--, Pt === 10 && (Oo = 1, gs--), Pt;
}
function Mr() {
  return Pt = yr < Im ? vi(Io, yr++) : 0, Oo++, Pt === 10 && (Oo = 1, gs++), Pt;
}
function In() {
  return vi(Io, yr);
}
function Sa() {
  return yr;
}
function ys(e, t) {
  return pi(Io, e, t);
}
function du(e) {
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
function pC(e) {
  return gs = Oo = 1, Im = Ur(Io = e), yr = 0, [];
}
function mC(e) {
  return Io = "", e;
}
function oc(e) {
  return Nm(ys(yr - 1, hu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gC(e) {
  for (; (Pt = In()) && Pt < 33; )
    Mr();
  return du(e) > 2 || du(Pt) > 3 ? "" : " ";
}
function yC(e, t) {
  for (; --t && Mr() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return ys(e, Sa() + (t < 6 && In() == 32 && Mr() == 32));
}
function hu(e) {
  for (; Mr(); )
    switch (Pt) {
      case e:
        return yr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hu(Pt);
        break;
      case 40:
        e === 41 && hu(e);
        break;
      case 92:
        Mr();
        break;
    }
  return yr;
}
function bC(e, t) {
  for (; Mr() && e + Pt !== 47 + 10; )
    if (e + Pt === 42 + 42 && In() === 47)
      break;
  return "/*" + ys(t, yr - 1) + "*" + Ll(e === 47 ? e : Mr());
}
function SC(e) {
  for (; !du(In()); )
    Mr();
  return ys(e, yr);
}
function EC(e) {
  return mC(Ea("", null, null, null, [""], e = pC(e), 0, [0], e));
}
function Ea(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, l = 0, f = a, d = 0, h = 0, m = 0, p = 1, g = 1, y = 1, S = 0, E = "", w = o, b = i, C = n, O = E; g; )
    switch (m = S, S = Mr()) {
      case 40:
        if (m != 108 && vi(O, f - 1) == 58) {
          fC(O += ba(oc(S), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += oc(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += gC(m);
        break;
      case 92:
        O += yC(Sa() - 1, 7);
        continue;
      case 47:
        switch (In()) {
          case 42:
          case 47:
            Qi(wC(bC(Mr(), Sa()), t, r, c), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        s[u++] = Ur(O) * y;
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            y == -1 && (O = ba(O, /\f/g, "")), h > 0 && Ur(O) - f && Qi(h > 32 ? Zd(O + ";", n, r, f - 1, c) : Zd(ba(O, " ", "") + ";", n, r, f - 2, c), c);
            break;
          case 59:
            O += ";";
          default:
            if (Qi(C = Jd(O, t, r, u, l, o, s, E, w = [], b = [], f, i), i), S === 123)
              if (l === 0)
                Ea(O, t, C, C, w, i, f, s, b);
              else
                switch (d === 99 && vi(O, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ea(e, C, C, n && Qi(Jd(e, C, C, 0, 0, o, s, E, o, w = [], f, b), b), o, b, f, s, n ? w : b);
                    break;
                  default:
                    Ea(O, C, C, C, [""], b, 0, s, b);
                }
        }
        u = l = h = 0, p = y = 1, E = O = "", f = a;
        break;
      case 58:
        f = 1 + Ur(O), h = m;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && vC() == 125)
            continue;
        }
        switch (O += Ll(S), S * p) {
          case 38:
            y = l > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[u++] = (Ur(O) - 1) * y, y = 1;
            break;
          case 64:
            In() === 45 && (O += oc(Mr())), d = In(), l = f = Ur(E = O += SC(Sa())), S++;
            break;
          case 45:
            m === 45 && Ur(O) == 2 && (p = 0);
        }
    }
  return i;
}
function Jd(e, t, r, n, o, i, a, s, c, u, l, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], m = dC(h), p = 0, g = 0, y = 0; p < n; ++p)
    for (var S = 0, E = pi(e, d + 1, d = lC(g = a[p])), w = e; S < m; ++S)
      (w = Nm(g > 0 ? h[S] + " " + E : ba(E, /&\f/g, h[S]))) && (c[y++] = w);
  return jl(e, t, r, o === 0 ? Pm : s, c, u, l, f);
}
function wC(e, t, r, n) {
  return jl(e, t, r, Rm, Ll(hC()), pi(e, 2, -2), 0, n);
}
function Zd(e, t, r, n, o) {
  return jl(e, t, r, Mm, pi(e, 0, n), pi(e, n + 1, -1), n, o);
}
function vu(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function CC(e, t, r, n) {
  switch (e.type) {
    case uC:
      if (e.children.length)
        break;
    case sC:
    case Mm:
      return e.return = e.return || e.value;
    case Rm:
      return "";
    case cC:
      return e.return = e.value + "{" + vu(e.children, n) + "}";
    case Pm:
      if (!Ur(e.value = e.props.join(",")))
        return "";
  }
  return Ur(r = vu(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Am(e, t) {
  var r = t.path, n = t.parentSelectors;
  ke(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var OC = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Am("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, xC = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Am("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, eh = "data-ant-cssinjs-cache-path", Dm = "_FILE_STYLE__", An, Fm = !0;
function _C() {
  if (!An && (An = {}, Kt())) {
    var e = document.createElement("div");
    e.className = eh, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = G(i, 2), s = a[0], c = a[1];
      An[s] = c;
    });
    var r = document.querySelector("style[".concat(eh, "]"));
    if (r) {
      var n;
      Fm = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function TC(e) {
  return _C(), !!An[e];
}
function RC(e) {
  var t = An[e], r = null;
  if (t && Kt())
    if (Fm)
      r = Dm;
    else {
      var n = document.querySelector("style[".concat(Nn, '="').concat(An[e], '"]'));
      n ? r = n.innerHTML : delete An[e];
    }
  return [r, t];
}
var th = Kt(), $m = "_skip_check_", km = "_multi_value_";
function rh(e) {
  var t = vu(EC(e), CC);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function PC(e) {
  return Be(e) === "object" && e && ($m in e || km in e);
}
function MC(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), u = c[0] || "", l = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(l).concat(o).concat(u.slice(l.length)), [u].concat(be(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var NC = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, c = r.layer, u = r.path, l = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, h = r.linters, m = h === void 0 ? [] : h, p = "", g = {};
  function y(C) {
    var O = C.getName(s);
    if (!g[O]) {
      var R = e(C.style, r, {
        root: !1,
        parentSelectors: a
      }), M = G(R, 1), _ = M[0];
      g[O] = "@keyframes ".concat(C.getName(s)).concat(_);
    }
  }
  function S(C) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(R) {
      Array.isArray(R) ? S(R, O) : R && O.push(R);
    }), O;
  }
  var E = S(Array.isArray(t) ? t : [t]);
  if (E.forEach(function(C) {
    var O = typeof C == "string" && !o ? {} : C;
    if (typeof O == "string")
      p += "".concat(O, `
`);
    else if (O._keyframe)
      y(O);
    else {
      var R = d.reduce(function(M, _) {
        var $;
        return (_ == null || ($ = _.visit) === null || $ === void 0 ? void 0 : $.call(_, M)) || M;
      }, O);
      Object.keys(R).forEach(function(M) {
        var _ = R[M];
        if (Be(_) === "object" && _ && (M !== "animationName" || !_._keyframe) && !PC(_)) {
          var $ = !1, T = M.trim(), x = !1;
          (o || i) && s ? T.startsWith("@") ? $ = !0 : T = MC(M, s, l) : o && !s && (T === "&" || T === "") && (T = "", x = !0);
          var P = e(_, r, {
            root: x,
            injectHash: $,
            parentSelectors: [].concat(be(a), [T])
          }), A = G(P, 2), F = A[0], D = A[1];
          g = W(W({}, g), D), p += "".concat(T).concat(F);
        } else {
          let ne = function(se, L) {
            process.env.NODE_ENV !== "production" && (Be(_) !== "object" || !(_ != null && _[$m])) && [OC, xC].concat(be(m)).forEach(function(J) {
              return J(se, L, {
                path: u,
                hashId: s,
                parentSelectors: a
              });
            });
            var H = se.replace(/[A-Z]/g, function(J) {
              return "-".concat(J.toLowerCase());
            }), z = L;
            !Tm[se] && typeof z == "number" && z !== 0 && (z = "".concat(z, "px")), se === "animationName" && L !== null && L !== void 0 && L._keyframe && (y(L), z = L.getName(s)), p += "".concat(H, ":").concat(z, ";");
          };
          var B, q = (B = _?.value) !== null && B !== void 0 ? B : _;
          Be(_) === "object" && _ !== null && _ !== void 0 && _[km] && Array.isArray(q) ? q.forEach(function(se) {
            ne(M, se);
          }) : ne(M, q);
        }
      });
    }
  }), !o)
    p = "{".concat(p, "}");
  else if (c && Uw()) {
    var w = c.split(","), b = w[w.length - 1].trim();
    p = "@layer ".concat(b, " {").concat(p, "}"), w.length > 1 && (p = "@layer ".concat(c, "{%%%:%}").concat(p));
  }
  return [p, g];
};
function IC(e, t) {
  return Fl("".concat(e.join("%")).concat(t));
}
function AC() {
  return null;
}
function pu(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, l = v.useContext($l), f = l.autoClear, d = l.mock, h = l.defaultCache, m = l.hashPriority, p = l.container, g = l.ssrInline, y = l.transformers, S = l.linters, E = l.cache, w = r._tokenKey, b = [w].concat(be(n)), C = th;
  process.env.NODE_ENV !== "production" && d !== void 0 && (C = d === "client");
  var O = _m(
    "style",
    b,
    // Create cache if needed
    function() {
      var T = b.join("|");
      if (TC(T)) {
        var x = RC(T), P = G(x, 2), A = P[0], F = P[1];
        if (A)
          return [A, w, F, {}, s, u];
      }
      var D = t(), B = NC(D, {
        hashId: o,
        hashPriority: m,
        layer: i,
        path: n.join("-"),
        transformers: y,
        linters: S
      }), q = G(B, 2), ne = q[0], se = q[1], L = rh(ne), H = IC(b, L);
      return [L, w, H, se, s, u];
    },
    // Remove cache if no need
    function(T, x) {
      var P = G(T, 3), A = P[2];
      (x || f) && th && ja(A, {
        mark: Nn
      });
    },
    // Effect: Inject style here
    function(T) {
      var x = G(T, 4), P = x[0];
      x[1];
      var A = x[2], F = x[3];
      if (C && P !== Dm) {
        var D = {
          mark: Nn,
          prepend: "queue",
          attachTo: p,
          priority: u
        }, B = typeof a == "function" ? a() : a;
        B && (D.csp = {
          nonce: B
        });
        var q = hi(P, A, D);
        q[co] = E.instanceId, q.setAttribute(cu, w), process.env.NODE_ENV !== "production" && q.setAttribute(Fw, b.join("|")), Object.keys(F).forEach(function(ne) {
          hi(rh(F[ne]), "_effect-".concat(ne), D);
        });
      }
    }
  ), R = G(O, 3), M = R[0], _ = R[1], $ = R[2];
  return function(T) {
    var x;
    if (!g || C || !h)
      x = /* @__PURE__ */ v.createElement(AC, null);
    else {
      var P;
      x = /* @__PURE__ */ v.createElement("style", Ze({}, (P = {}, ye(P, cu, _), ye(P, Nn, $), P), {
        dangerouslySetInnerHTML: {
          __html: M
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, x, T);
  };
}
var jt = /* @__PURE__ */ function() {
  function e(t, r) {
    br(this, e), ye(this, "name", void 0), ye(this, "style", void 0), ye(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Sr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Yn(e) {
  return e.notSplit = !0, e;
}
Yn(["borderTop", "borderBottom"]), Yn(["borderTop"]), Yn(["borderBottom"]), Yn(["borderLeft", "borderRight"]), Yn(["borderLeft"]), Yn(["borderRight"]);
const DC = /* @__PURE__ */ Ei({}), Vl = DC;
function Lm(e) {
  return wm(e) || hm(e) || Al(e) || Cm();
}
function Pr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function jm(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Lm(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = be(e) : s = W({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = jm(s[i], a, r, n), s;
}
function xr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Pr(e, t.slice(0, -1)) ? e : jm(e, t, r, n);
}
function FC(e) {
  return Be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function nh(e) {
  return Array.isArray(e) ? [] : {};
}
var $C = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function uo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = nh(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), u = Pr(o, a), l = Array.isArray(u);
      if (l || FC(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Pr(n, a);
          l ? n = xr(n, a, []) : (!f || Be(f) !== "object") && (n = xr(n, a, nh(u))), $C(u).forEach(function(d) {
            i([].concat(be(a), [d]), c);
          });
        }
      } else
        n = xr(n, a, u);
    }
    i([]);
  }), n;
}
function kC() {
}
let Vm = kC;
process.env.NODE_ENV !== "production" && (Vm = (e, t, r) => {
  ke(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && nm();
});
const dr = Vm, LC = /* @__PURE__ */ Ei(void 0), jC = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var VC = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const zC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, zm = zC, HC = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, VC),
  timePickerLocale: Object.assign({}, zm)
}, oh = HC, sr = "${label} is not a valid ${type}", BC = {
  locale: "en",
  Pagination: jC,
  DatePicker: oh,
  TimePicker: zm,
  Calendar: oh,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: sr,
        method: sr,
        array: sr,
        object: sr,
        number: sr,
        date: sr,
        boolean: sr,
        integer: sr,
        float: sr,
        regexp: sr,
        email: sr,
        url: sr,
        hex: sr
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
}, xo = BC;
Object.assign({}, xo.Modal);
let wa = [];
const ih = () => wa.reduce((e, t) => Object.assign(Object.assign({}, e), t), xo.Modal);
function WC(e) {
  if (e) {
    const t = Object.assign({}, e);
    return wa.push(t), ih(), () => {
      wa = wa.filter((r) => r !== t), ih();
    };
  }
  Object.assign({}, xo.Modal);
}
const UC = /* @__PURE__ */ Ei(void 0), zl = UC, qC = (e, t) => {
  const r = v.useContext(zl), n = v.useMemo(() => {
    var i;
    const a = t || xo[e], s = (i = r?.[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), o = v.useMemo(() => {
    const i = r?.locale;
    return r?.exist && !i ? xo.locale : i;
  }, [r]);
  return [n, o];
}, QC = qC, Hm = "internalMark", Bm = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && dr(n === Hm, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), v.useEffect(() => WC(t && t.Modal), [t]);
  const o = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(zl.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Bm.displayName = "LocaleProvider");
const GC = Bm, KC = "5.8.0";
function Ut(e, t) {
  YC(e) && (e = "100%");
  var r = XC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Gi(e) {
  return Math.min(1, Math.max(0, e));
}
function YC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function XC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Wm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ki(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function _n(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function JC(e, t, r) {
  return {
    r: Ut(e, 255) * 255,
    g: Ut(t, 255) * 255,
    b: Ut(r, 255) * 255
  };
}
function ah(e, t, r) {
  e = Ut(e, 255), t = Ut(t, 255), r = Ut(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, s = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var c = n - o;
    switch (a = s > 0.5 ? c / (2 - n - o) : c / (n + o), n) {
      case e:
        i = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / c + 2;
        break;
      case r:
        i = (e - t) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function ic(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function ZC(e, t, r) {
  var n, o, i;
  if (e = Ut(e, 360), t = Ut(t, 100), r = Ut(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = ic(s, a, e + 1 / 3), o = ic(s, a, e), i = ic(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function mu(e, t, r) {
  e = Ut(e, 255), t = Ut(t, 255), r = Ut(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, s = n - o, c = n === 0 ? 0 : s / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / s + 2;
        break;
      case r:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: a };
}
function e2(e, t, r) {
  e = Ut(e, 360) * 6, t = Ut(t, 100), r = Ut(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), c = n % 6, u = [r, a, i, i, s, r][c], l = [s, r, r, a, i, i][c], f = [i, i, s, r, r, a][c];
  return { r: u * 255, g: l * 255, b: f * 255 };
}
function gu(e, t, r, n) {
  var o = [
    _n(Math.round(e).toString(16)),
    _n(Math.round(t).toString(16)),
    _n(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function t2(e, t, r, n, o) {
  var i = [
    _n(Math.round(e).toString(16)),
    _n(Math.round(t).toString(16)),
    _n(Math.round(r).toString(16)),
    _n(r2(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function r2(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function sh(e) {
  return ur(e) / 255;
}
function ur(e) {
  return parseInt(e, 16);
}
function n2(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var yu = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function oo(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = a2(e)), typeof e == "object" && (Br(e.r) && Br(e.g) && Br(e.b) ? (t = JC(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Br(e.h) && Br(e.s) && Br(e.v) ? (n = Ki(e.s), o = Ki(e.v), t = e2(e.h, n, o), a = !0, s = "hsv") : Br(e.h) && Br(e.s) && Br(e.l) && (n = Ki(e.s), i = Ki(e.l), t = ZC(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Wm(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var o2 = "[-\\+]?\\d+%?", i2 = "[-\\+]?\\d*\\.\\d+%?", sn = "(?:".concat(i2, ")|(?:").concat(o2, ")"), ac = "[\\s|\\(]+(".concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")\\s*\\)?"), sc = "[\\s|\\(]+(".concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")[,|\\s]+(").concat(sn, ")\\s*\\)?"), Or = {
  CSS_UNIT: new RegExp(sn),
  rgb: new RegExp("rgb" + ac),
  rgba: new RegExp("rgba" + sc),
  hsl: new RegExp("hsl" + ac),
  hsla: new RegExp("hsla" + sc),
  hsv: new RegExp("hsv" + ac),
  hsva: new RegExp("hsva" + sc),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function a2(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (yu[e])
    e = yu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Or.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Or.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Or.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Or.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Or.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Or.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Or.hex8.exec(e), r ? {
    r: ur(r[1]),
    g: ur(r[2]),
    b: ur(r[3]),
    a: sh(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Or.hex6.exec(e), r ? {
    r: ur(r[1]),
    g: ur(r[2]),
    b: ur(r[3]),
    format: t ? "name" : "hex"
  } : (r = Or.hex4.exec(e), r ? {
    r: ur(r[1] + r[1]),
    g: ur(r[2] + r[2]),
    b: ur(r[3] + r[3]),
    a: sh(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Or.hex3.exec(e), r ? {
    r: ur(r[1] + r[1]),
    g: ur(r[2] + r[2]),
    b: ur(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Br(e) {
  return !!Or.CSS_UNIT.exec(String(e));
}
var Ht = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = n2(t)), this.originalInput = t;
      var o = oo(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, o, i = t.r / 255, a = t.g / 255, s = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? o = s / 12.92 : o = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Wm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = mu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = mu(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ah(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ah(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), gu(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), t2(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(Ut(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(Ut(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + gu(this.r, this.g, this.b, !1), r = 0, n = Object.entries(yu); r < n.length; r++) {
        var o = n[r], i = o[0], a = o[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, o = this.a < 1 && this.a >= 0, i = !r && o && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Gi(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Gi(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Gi(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Gi(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), o = new e(t).toRgb(), i = r / 100, a = {
        r: (o.r - n.r) * i + n.r,
        g: (o.g - n.g) * i + n.g,
        b: (o.b - n.b) * i + n.b,
        a: (o.a - n.a) * i + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), o = 360 / r, i = [this];
      for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + o) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, o = r.s, i = r.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: n, s: o, v: i })), i = (i + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), o = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1; a < t; a++)
        o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Yi = 2, ch = 0.16, s2 = 0.05, c2 = 0.05, u2 = 0.15, Um = 5, qm = 4, l2 = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function uh(e) {
  var t = e.r, r = e.g, n = e.b, o = mu(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Xi(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(gu(t, r, n, !1));
}
function f2(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function lh(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Yi * t : Math.round(e.h) + Yi * t : n = r ? Math.round(e.h) + Yi * t : Math.round(e.h) - Yi * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function fh(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - ch * t : t === qm ? n = e.s + ch : n = e.s + s2 * t, n > 1 && (n = 1), r && t === Um && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function dh(e, t, r) {
  var n;
  return r ? n = e.v + c2 * t : n = e.v - u2 * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Fn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = oo(e), o = Um; o > 0; o -= 1) {
    var i = uh(n), a = Xi(oo({
      h: lh(i, o, !0),
      s: fh(i, o, !0),
      v: dh(i, o, !0)
    }));
    r.push(a);
  }
  r.push(Xi(n));
  for (var s = 1; s <= qm; s += 1) {
    var c = uh(n), u = Xi(oo({
      h: lh(c, s),
      s: fh(c, s),
      v: dh(c, s)
    }));
    r.push(u);
  }
  return t.theme === "dark" ? l2.map(function(l) {
    var f = l.index, d = l.opacity, h = Xi(f2(oo(t.backgroundColor || "#141414"), oo(r[f]), d * 100));
    return h;
  }) : r;
}
var cc = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Ca = {}, uc = {};
Object.keys(cc).forEach(function(e) {
  Ca[e] = Fn(cc[e]), Ca[e].primary = Ca[e][5], uc[e] = Fn(cc[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), uc[e].primary = uc[e][5];
});
var d2 = Ca.blue;
const h2 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, v2 = h2;
function p2(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    sizeXL: t * (r + 4),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 1),
    sizeMS: t * r,
    size: t * r,
    sizeSM: t * (r - 1),
    sizeXS: t * (r - 2),
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Qm = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, m2 = Object.assign(Object.assign({}, Qm), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), bs = m2;
function g2(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: l
  } = e, f = r(c), d = r(o), h = r(i), m = r(a), p = r(s), g = n(u, l), y = e.colorLink || e.colorInfo, S = r(y);
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new Ht("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const y2 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, b2 = y2;
function S2(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, b2(n));
}
const Wr = (e, t) => new Ht(e).setAlpha(t).toRgbString(), Qo = (e, t) => new Ht(e).darken(t).toHexString(), E2 = (e) => {
  const t = Fn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, w2 = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Wr(n, 0.88),
    colorTextSecondary: Wr(n, 0.65),
    colorTextTertiary: Wr(n, 0.45),
    colorTextQuaternary: Wr(n, 0.25),
    colorFill: Wr(n, 0.15),
    colorFillSecondary: Wr(n, 0.06),
    colorFillTertiary: Wr(n, 0.04),
    colorFillQuaternary: Wr(n, 0.02),
    colorBgLayout: Qo(r, 4),
    colorBgContainer: Qo(r, 0),
    colorBgElevated: Qo(r, 0),
    colorBgSpotlight: Wr(n, 0.85),
    colorBorder: Qo(r, 15),
    colorBorderSecondary: Qo(r, 6)
  };
};
function C2(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const o = n - 1, i = e * Math.pow(2.71828, o / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((r) => {
    const n = r + 8;
    return {
      size: r,
      lineHeight: n / r
    };
  });
}
const O2 = (e) => {
  const t = C2(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: r[0],
    fontSize: r[1],
    fontSizeLG: r[2],
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: n[1],
    lineHeightLG: n[2],
    lineHeightSM: n[0],
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
}, x2 = O2;
function _2(e) {
  const t = Object.keys(Qm).map((r) => {
    const n = Fn(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), g2(e, {
    generateColorPalettes: E2,
    generateNeutralColorPalettes: w2
  })), x2(e.fontSize)), p2(e)), v2(e)), S2(e));
}
const Gm = lu(_2), Km = {
  token: bs,
  hashed: !0
}, Ym = /* @__PURE__ */ Pe.createContext(Km);
function lc(e) {
  return e >= 0 && e <= 255;
}
function Ji(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Ht(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Ht(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((r - a * (1 - u)) / u), f = Math.round((n - s * (1 - u)) / u), d = Math.round((o - c * (1 - u)) / u);
    if (lc(l) && lc(f) && lc(d))
      return new Ht({
        r: l,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Ht({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var T2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function R2(e) {
  const {
    override: t
  } = e, r = T2(e, ["override"]), n = Object.assign({}, t);
  Object.keys(bs).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, s = 768, c = 992, u = 1200, l = 1600;
  if (o.motion === !1) {
    const d = "0s";
    o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Ji(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: Ji(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ji(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 4,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: Ji(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: l - 1,
    screenXXL: l,
    screenXXLMin: l,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ht("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ht("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ht("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var hh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Xm = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = hh(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = R2(a), i && Object.entries(i).forEach((s) => {
    let [c, u] = s;
    const {
      theme: l
    } = u, f = hh(u, ["theme"]);
    let d = f;
    l && (d = Xm(Object.assign(Object.assign({}, a), f), {
      override: f
    }, l)), a[c] = d;
  }), a;
};
function Ln() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = Pe.useContext(Ym), o = `${KC}-${t || ""}`, i = r || Gm, [a, s] = aC(i, [bs, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    getComputedToken: Xm
  });
  return [i, a, t ? s : ""];
}
function Rr(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function mo(e) {
  var t = v.useRef(!1), r = v.useState(e), n = G(r, 2), o = n[0], i = n[1];
  v.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, c) {
    c && t.current || i(s);
  }
  return [o, a];
}
function fc(e) {
  return e !== void 0;
}
function za(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, a = r.postState, s = mo(function() {
    return fc(o) ? o : fc(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = G(s, 2), u = c[0], l = c[1], f = o !== void 0 ? o : u, d = a ? a(f) : f, h = Rr(i), m = mo([f]), p = G(m, 2), g = p[0], y = p[1];
  Yd(function() {
    var E = g[0];
    u !== E && h(u, E);
  }, [g]), Yd(function() {
    fc(o) || l(o);
  }, [o]);
  var S = Rr(function(E, w) {
    l(E, w), y([f], w);
  });
  return [d, S];
}
const Hl = "anticon", P2 = (e, t) => t || (e ? `ant-${e}` : "ant"), or = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: P2,
  iconPrefixCls: Hl
}), bu = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Ss = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), Bl = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), M2 = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), N2 = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, I2 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), A2 = (e) => ({
  "&:focus-visible": Object.assign({}, I2(e))
}), Jm = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Su = !0;
function er() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Jm)
    return Object.assign.apply(Object, [{}].concat(t));
  Su = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), Su = !0, n;
}
function D2() {
}
function F2(e) {
  let t, r = e, n = D2;
  return Jm && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return Su && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function Ni(e, t, r, n) {
  return (o) => {
    const [i, a, s] = Ln(), {
      getPrefixCls: c,
      iconPrefixCls: u,
      csp: l
    } = Gt(or), f = c(), d = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => l?.nonce,
      clientOnly: n?.clientOnly,
      // antd is always at top of styles
      order: -999
    };
    return pu(Object.assign(Object.assign({}, d), {
      clientOnly: !1,
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": M2(a)
    }]), [pu(Object.assign(Object.assign({}, d), {
      path: [e, o, u]
    }), () => {
      const {
        token: h,
        flush: m
      } = F2(a), p = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: b
        } = n;
        b.forEach((C) => {
          let [O, R] = C;
          var M;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ke(!p?.[O], `The token '${String(O)}' of ${e} had deprecated, use '${String(R)}' instead.`), (p?.[O] || p?.[R]) && ((M = p[R]) !== null && M !== void 0 || (p[R] = p?.[O]));
        });
      }
      const g = typeof r == "function" ? r(er(h, p ?? {})) : r, y = Object.assign(Object.assign({}, g), p), S = `.${o}`, E = er(h, {
        componentCls: S,
        prefixCls: o,
        iconCls: `.${u}`,
        antCls: `.${f}`
      }, y), w = t(E, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: u,
        overrideComponentToken: p
      });
      return m(e, y), [n?.resetStyle === !1 ? null : N2(a, o), w];
    }), s];
  };
}
const $2 = `-ant-${Date.now()}-${Math.random()}`;
function k2(e, t) {
  const r = {}, n = (a, s) => {
    let c = a.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (a, s) => {
    const c = new Ht(a), u = Fn(c.toRgbString());
    r[`${s}-color`] = n(c), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Ht(t.primaryColor), s = Fn(a.toRgbString());
    s.forEach((u, l) => {
      r[`primary-${l + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(a, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Ht(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function L2(e, t) {
  const r = k2(e, t);
  Kt() ? hi(r, `${$2}-dynamic-theme`) : process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Eu = /* @__PURE__ */ v.createContext(!1), j2 = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(Eu);
  return /* @__PURE__ */ v.createElement(Eu.Provider, {
    value: r ?? n
  }, t);
}, Wl = Eu, wu = /* @__PURE__ */ v.createContext(void 0), V2 = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(wu);
  return /* @__PURE__ */ v.createElement(wu.Provider, {
    value: r || n
  }, t);
}, Es = wu;
function z2() {
  const e = Gt(Wl), t = Gt(Es);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function H2(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Km : t;
  return vs(() => {
    if (!e)
      return t;
    const o = Object.assign({}, n.components);
    return Object.keys(e.components || {}).forEach((i) => {
      o[i] = Object.assign(Object.assign({}, o[i]), e.components[i]);
    }), Object.assign(Object.assign(Object.assign({}, n), r), {
      token: Object.assign(Object.assign({}, n.token), r.token),
      components: o
    });
  }, [r, n], (o, i) => o.some((a, s) => {
    const c = i[s];
    return !gm(a, c, !0);
  }));
}
var B2 = ["children"], Zm = /* @__PURE__ */ v.createContext({});
function W2(e) {
  var t = e.children, r = Mt(e, B2);
  return /* @__PURE__ */ v.createElement(Zm.Provider, {
    value: r
  }, t);
}
var U2 = /* @__PURE__ */ function(e) {
  Ri(r, e);
  var t = Pi(r);
  function r() {
    return br(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), wn = "none", Zi = "appear", ea = "enter", ta = "leave", vh = "none", _r = "prepare", lo = "start", fo = "active", Ul = "end", eg = "prepared";
function ph(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function q2(e, t) {
  var r = {
    animationend: ph("Animation", "AnimationEnd"),
    transitionend: ph("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Q2 = q2(Kt(), typeof window < "u" ? window : {}), tg = {};
if (Kt()) {
  var G2 = document.createElement("div");
  tg = G2.style;
}
var ra = {};
function rg(e) {
  if (ra[e])
    return ra[e];
  var t = Q2[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in tg)
        return ra[e] = t[i], ra[e];
    }
  return "";
}
var ng = rg("animationend"), og = rg("transitionend"), ig = !!(ng && og), mh = ng || "animationend", gh = og || "transitionend";
function yh(e, t) {
  if (!e)
    return null;
  if (Be(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const K2 = function(e) {
  var t = De(), r = De(e);
  r.current = e;
  var n = v.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(gh, n), a.removeEventListener(mh, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(gh, n), a.addEventListener(mh, n), t.current = a);
  }
  return v.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var ag = Kt() ? Av : Bt;
const Y2 = function() {
  var e = v.useRef(null);
  function t() {
    Wt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Wt(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return v.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var X2 = [_r, lo, fo, Ul], J2 = [_r, eg], sg = !1, Z2 = !0;
function cg(e) {
  return e === fo || e === Ul;
}
const eO = function(e, t, r) {
  var n = mo(vh), o = G(n, 2), i = o[0], a = o[1], s = Y2(), c = G(s, 2), u = c[0], l = c[1];
  function f() {
    a(_r, !0);
  }
  var d = t ? J2 : X2;
  return ag(function() {
    if (i !== vh && i !== Ul) {
      var h = d.indexOf(i), m = d[h + 1], p = r(i);
      p === sg ? a(m, !0) : m && u(function(g) {
        function y() {
          g.isCanceled() || a(m, !0);
        }
        p === !0 ? y() : Promise.resolve(p).then(y);
      });
    }
  }, [e, i]), v.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, i];
};
function tO(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, u = c === void 0 ? !0 : c, l = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, y = n.onLeaveStart, S = n.onAppearActive, E = n.onEnterActive, w = n.onLeaveActive, b = n.onAppearEnd, C = n.onEnterEnd, O = n.onLeaveEnd, R = n.onVisibleChanged, M = mo(), _ = G(M, 2), $ = _[0], T = _[1], x = mo(wn), P = G(x, 2), A = P[0], F = P[1], D = mo(null), B = G(D, 2), q = B[0], ne = B[1], se = De(!1), L = De(null);
  function H() {
    return r();
  }
  var z = De(!1);
  function J() {
    F(wn, !0), ne(null, !0);
  }
  function I(me) {
    var oe = H();
    if (!(me && !me.deadline && me.target !== oe)) {
      var fe = z.current, Me;
      A === Zi && fe ? Me = b?.(oe, me) : A === ea && fe ? Me = C?.(oe, me) : A === ta && fe && (Me = O?.(oe, me)), A !== wn && fe && Me !== !1 && J();
    }
  }
  var Q = K2(I), k = G(Q, 1), X = k[0], re = function(oe) {
    var fe, Me, Ie;
    switch (oe) {
      case Zi:
        return fe = {}, ye(fe, _r, d), ye(fe, lo, p), ye(fe, fo, S), fe;
      case ea:
        return Me = {}, ye(Me, _r, h), ye(Me, lo, g), ye(Me, fo, E), Me;
      case ta:
        return Ie = {}, ye(Ie, _r, m), ye(Ie, lo, y), ye(Ie, fo, w), Ie;
      default:
        return {};
    }
  }, Y = v.useMemo(function() {
    return re(A);
  }, [A]), N = eO(A, !e, function(me) {
    if (me === _r) {
      var oe = Y[_r];
      return oe ? oe(H()) : sg;
    }
    if (ee in Y) {
      var fe;
      ne(((fe = Y[ee]) === null || fe === void 0 ? void 0 : fe.call(Y, H(), null)) || null);
    }
    return ee === fo && (X(H()), l > 0 && (clearTimeout(L.current), L.current = setTimeout(function() {
      I({
        deadline: !0
      });
    }, l))), ee === eg && J(), Z2;
  }), Z = G(N, 2), j = Z[0], ee = Z[1], le = cg(ee);
  z.current = le, ag(function() {
    T(t);
    var me = se.current;
    se.current = !0;
    var oe;
    !me && t && s && (oe = Zi), me && t && i && (oe = ea), (me && !t && u || !me && f && !t && u) && (oe = ta);
    var fe = re(oe);
    oe && (e || fe[_r]) ? (F(oe), j()) : F(wn);
  }, [t]), Bt(function() {
    // Cancel appear
    (A === Zi && !s || // Cancel enter
    A === ea && !i || // Cancel leave
    A === ta && !u) && F(wn);
  }, [s, i, u]), Bt(function() {
    return function() {
      se.current = !1, clearTimeout(L.current);
    };
  }, []);
  var ce = v.useRef(!1);
  Bt(function() {
    $ && (ce.current = !0), $ !== void 0 && A === wn && ((ce.current || $) && R?.($), ce.current = !0);
  }, [$, A]);
  var de = q;
  return Y[_r] && ee === lo && (de = W({
    transition: "none"
  }, de)), [A, ee, de, $ ?? t];
}
function rO(e) {
  var t = e;
  Be(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, u = c === void 0 ? !0 : c, l = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, m = o.eventProps, p = v.useContext(Zm), g = p.motion, y = r(o, g), S = De(), E = De();
    function w() {
      try {
        return S.current instanceof HTMLElement ? S.current : $a(E.current);
      } catch {
        return null;
      }
    }
    var b = tO(y, s, w, o), C = G(b, 4), O = C[0], R = C[1], M = C[2], _ = C[3], $ = v.useRef(_);
    _ && ($.current = !0);
    var T = v.useCallback(function(ne) {
      S.current = ne, Ml(i, ne);
    }, [i]), x, P = W(W({}, m), {}, {
      visible: s
    });
    if (!f)
      x = null;
    else if (O === wn)
      _ ? x = f(W({}, P), T) : !u && $.current && h ? x = f(W(W({}, P), {}, {
        className: h
      }), T) : l || !u && !h ? x = f(W(W({}, P), {}, {
        style: {
          display: "none"
        }
      }), T) : x = null;
    else {
      var A, F;
      R === _r ? F = "prepare" : cg(R) ? F = "active" : R === lo && (F = "start");
      var D = yh(d, "".concat(O, "-").concat(F));
      x = f(W(W({}, P), {}, {
        className: Ne(yh(d, O), (A = {}, ye(A, D, D && F), ye(A, d, typeof d == "string"), A)),
        style: M
      }), T);
    }
    if (/* @__PURE__ */ v.isValidElement(x) && Mi(x)) {
      var B = x, q = B.ref;
      q || (x = /* @__PURE__ */ v.cloneElement(x, {
        ref: T
      }));
    }
    return /* @__PURE__ */ v.createElement(U2, {
      ref: E
    }, x);
  });
  return n.displayName = "CSSMotion", n;
}
const Ii = rO(ig);
var Cu = "add", Ou = "keep", xu = "remove", dc = "removed";
function nO(e) {
  var t;
  return e && Be(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, W(W({}, t), {}, {
    key: String(t.key)
  });
}
function _u() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(nO);
}
function oO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = _u(e), a = _u(t);
  i.forEach(function(u) {
    for (var l = !1, f = n; f < o; f += 1) {
      var d = a[f];
      if (d.key === u.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(h) {
          return W(W({}, h), {}, {
            status: Cu
          });
        })), n = f), r.push(W(W({}, d), {}, {
          status: Ou
        })), n += 1, l = !0;
        break;
      }
    }
    l || r.push(W(W({}, u), {}, {
      status: xu
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(u) {
    return W(W({}, u), {}, {
      status: Cu
    });
  })));
  var s = {};
  r.forEach(function(u) {
    var l = u.key;
    s[l] = (s[l] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return c.forEach(function(u) {
    r = r.filter(function(l) {
      var f = l.key, d = l.status;
      return f !== u || d !== xu;
    }), r.forEach(function(l) {
      l.key === u && (l.status = Ou);
    });
  }), r;
}
var iO = ["component", "children", "onVisibleChanged", "onAllRemoved"], aO = ["status"], sO = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function cO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ii, r = /* @__PURE__ */ function(n) {
    Ri(i, n);
    var o = Pi(i);
    function i() {
      var a;
      br(this, i);
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      return a = o.call.apply(o, [this].concat(c)), ye(Da(a), "state", {
        keyEntities: []
      }), ye(Da(a), "removeKey", function(l) {
        var f = a.state.keyEntities, d = f.map(function(h) {
          return h.key !== l ? h : W(W({}, h), {}, {
            status: dc
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(h) {
          var m = h.status;
          return m !== dc;
        }).length;
      }), a;
    }
    return Sr(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, u = this.props, l = u.component, f = u.children, d = u.onVisibleChanged, h = u.onAllRemoved, m = Mt(u, iO), p = l || v.Fragment, g = {};
        return sO.forEach(function(y) {
          g[y] = m[y], delete m[y];
        }), delete m.keys, /* @__PURE__ */ v.createElement(p, m, c.map(function(y) {
          var S = y.status, E = Mt(y, aO), w = S === Cu || S === Ou;
          return /* @__PURE__ */ v.createElement(t, Ze({}, g, {
            key: E.key,
            visible: w,
            eventProps: E,
            onVisibleChanged: function(C) {
              if (d?.(C, {
                key: E.key
              }), !C) {
                var O = s.removeKey(E.key);
                O === 0 && h && h();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var u = s.keys, l = c.keyEntities, f = _u(u), d = oO(l, f);
        return {
          keyEntities: d.filter(function(h) {
            var m = l.find(function(p) {
              var g = p.key;
              return h.key === g;
            });
            return !(m && m.status === dc && h.status === xu);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(v.Component);
  return ye(r, "defaultProps", {
    component: "div"
  }), r;
}
const uO = cO(ig);
function lO(e) {
  const {
    children: t
  } = e, [, r] = Ln(), {
    motion: n
  } = r, o = v.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ v.createElement(W2, {
    motion: n
  }, t) : t;
}
const fO = (e, t) => {
  const [r, n] = Ln();
  return pu({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Bl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, dO = fO;
var hO = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Tu = !1;
const vO = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && dr(!Tu, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), pO = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], mO = "ant";
let Ha, ug, lg;
function Oa() {
  return Ha || mO;
}
function gO() {
  return ug || Hl;
}
function yO(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const bO = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (Ha = t), r !== void 0 && (ug = r), n && (yO(n) ? (process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), L2(Oa(), n)) : lg = n);
}, fg = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Oa()}-${e}` : Oa()),
  getIconPrefixCls: gO,
  getRootPrefixCls: () => Ha || Oa(),
  getTheme: () => lg
}), SO = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: c,
    direction: u,
    space: l,
    virtual: f,
    dropdownMatchSelectWidth: d,
    popupMatchSelectWidth: h,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: g,
    iconPrefixCls: y,
    theme: S,
    componentDisabled: E,
    segmented: w,
    statistic: b,
    spin: C,
    calendar: O,
    carousel: R,
    cascader: M,
    collapse: _,
    typography: $,
    checkbox: T,
    descriptions: x,
    divider: P,
    drawer: A,
    skeleton: F,
    steps: D,
    image: B,
    layout: q,
    list: ne,
    mentions: se,
    modal: L,
    progress: H,
    result: z,
    slider: J,
    breadcrumb: I,
    menu: Q,
    pagination: k,
    input: X,
    empty: re,
    badge: Y,
    radio: N,
    rate: Z,
    switch: j,
    transfer: ee,
    avatar: le,
    message: ce,
    tag: de,
    table: me,
    card: oe,
    tabs: fe,
    timeline: Me,
    timePicker: Ie,
    upload: ie,
    notification: ve,
    tree: et,
    colorPicker: ot,
    datePicker: tt,
    wave: We
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && dr(d === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Ue = v.useCallback((xe, ze) => {
    const {
      prefixCls: lt
    } = e;
    if (ze)
      return ze;
    const vt = lt || g.getPrefixCls("");
    return xe ? `${vt}-${xe}` : vt;
  }, [g.getPrefixCls, e.prefixCls]), it = y || g.iconPrefixCls || Hl, Yt = it !== g.iconPrefixCls, rt = r || g.csp, he = dO(it, rt), Se = H2(S, g.theme);
  process.env.NODE_ENV !== "production" && (Tu = Tu || !!Se);
  const Ve = {
    csp: rt,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || p,
    direction: u,
    space: l,
    virtual: f,
    popupMatchSelectWidth: h ?? d,
    popupOverflow: m,
    getPrefixCls: Ue,
    iconPrefixCls: it,
    theme: Se,
    segmented: w,
    statistic: b,
    spin: C,
    calendar: O,
    carousel: R,
    cascader: M,
    collapse: _,
    typography: $,
    checkbox: T,
    descriptions: x,
    divider: P,
    drawer: A,
    skeleton: F,
    steps: D,
    image: B,
    input: X,
    layout: q,
    list: ne,
    mentions: se,
    modal: L,
    progress: H,
    result: z,
    slider: J,
    breadcrumb: I,
    menu: Q,
    pagination: k,
    empty: re,
    badge: Y,
    radio: N,
    rate: Z,
    switch: j,
    transfer: ee,
    avatar: le,
    message: ce,
    tag: de,
    table: me,
    card: oe,
    tabs: fe,
    timeline: Me,
    timePicker: Ie,
    upload: ie,
    notification: ve,
    tree: et,
    colorPicker: ot,
    datePicker: tt,
    wave: We
  }, pt = Object.assign({}, g);
  Object.keys(Ve).forEach((xe) => {
    Ve[xe] !== void 0 && (pt[xe] = Ve[xe]);
  }), pO.forEach((xe) => {
    const ze = e[xe];
    ze && (pt[xe] = ze);
  });
  const Fe = vs(() => pt, pt, (xe, ze) => {
    const lt = Object.keys(xe), vt = Object.keys(ze);
    return lt.length !== vt.length || lt.some((Ee) => xe[Ee] !== ze[Ee]);
  }), qe = v.useMemo(() => ({
    prefixCls: it,
    csp: rt
  }), [it, rt]);
  let Ce = Yt ? he(t) : t;
  const ut = v.useMemo(() => {
    var xe, ze, lt, vt;
    return uo(((xe = xo.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((lt = (ze = Fe.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || lt === void 0 ? void 0 : lt.defaultValidateMessages) || {}, ((vt = Fe.form) === null || vt === void 0 ? void 0 : vt.validateMessages) || {}, a?.validateMessages || {});
  }, [Fe, a?.validateMessages]);
  Object.keys(ut).length > 0 && (Ce = /* @__PURE__ */ v.createElement(LC.Provider, {
    value: ut
  }, t)), s && (Ce = /* @__PURE__ */ v.createElement(GC, {
    locale: s,
    _ANT_MARK__: Hm
  }, Ce)), (it || rt) && (Ce = /* @__PURE__ */ v.createElement(Vl.Provider, {
    value: qe
  }, Ce)), c && (Ce = /* @__PURE__ */ v.createElement(V2, {
    size: c
  }, Ce)), Ce = /* @__PURE__ */ v.createElement(lO, null, Ce);
  const Tt = v.useMemo(() => {
    const xe = Se || {}, {
      algorithm: ze,
      token: lt,
      components: vt
    } = xe, Ee = hO(xe, ["algorithm", "token", "components"]), K = ze && (!Array.isArray(ze) || ze.length > 0) ? lu(ze) : Gm, ae = {};
    return Object.entries(vt || {}).forEach((ue) => {
      let [ge, $e] = ue;
      const Te = Object.assign({}, $e);
      "algorithm" in Te && (Te.algorithm === !0 ? Te.theme = K : (Array.isArray(Te.algorithm) || typeof Te.algorithm == "function") && (Te.theme = lu(Te.algorithm)), delete Te.algorithm), ae[ge] = Te;
    }), Object.assign(Object.assign({}, Ee), {
      theme: K,
      token: Object.assign(Object.assign({}, bs), lt),
      components: ae
    });
  }, [Se]);
  return S && (Ce = /* @__PURE__ */ v.createElement(Ym.Provider, {
    value: Tt
  }, Ce)), E !== void 0 && (Ce = /* @__PURE__ */ v.createElement(j2, {
    disabled: E
  }, Ce)), /* @__PURE__ */ v.createElement(or.Provider, {
    value: Fe
  }, Ce);
}, jn = (e) => {
  const t = v.useContext(or), r = v.useContext(zl);
  return /* @__PURE__ */ v.createElement(SO, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
jn.ConfigContext = or;
jn.SizeContext = Es;
jn.config = bO;
jn.useConfig = z2;
Object.defineProperty(jn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Es)
});
process.env.NODE_ENV !== "production" && (jn.displayName = "ConfigProvider");
const ql = jn;
var dg = {};
Object.defineProperty(dg, "__esModule", { value: !0 });
var EO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, wO = dg.default = EO, CO = 1 / 0, OO = "[object Symbol]", xO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _O = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ws = "\\ud800-\\udfff", hg = "\\u0300-\\u036f\\ufe20-\\ufe23", vg = "\\u20d0-\\u20f0", pg = "\\u2700-\\u27bf", mg = "a-z\\xdf-\\xf6\\xf8-\\xff", TO = "\\xac\\xb1\\xd7\\xf7", RO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", PO = "\\u2000-\\u206f", MO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", gg = "A-Z\\xc0-\\xd6\\xd8-\\xde", yg = "\\ufe0e\\ufe0f", bg = TO + RO + PO + MO, Ql = "['’]", NO = "[" + ws + "]", bh = "[" + bg + "]", Ba = "[" + hg + vg + "]", Sg = "\\d+", IO = "[" + pg + "]", Eg = "[" + mg + "]", wg = "[^" + ws + bg + Sg + pg + mg + gg + "]", Ru = "\\ud83c[\\udffb-\\udfff]", AO = "(?:" + Ba + "|" + Ru + ")", Cg = "[^" + ws + "]", Gl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Kl = "[\\ud800-\\udbff][\\udc00-\\udfff]", io = "[" + gg + "]", Og = "\\u200d", Sh = "(?:" + Eg + "|" + wg + ")", DO = "(?:" + io + "|" + wg + ")", Eh = "(?:" + Ql + "(?:d|ll|m|re|s|t|ve))?", wh = "(?:" + Ql + "(?:D|LL|M|RE|S|T|VE))?", xg = AO + "?", _g = "[" + yg + "]?", FO = "(?:" + Og + "(?:" + [Cg, Gl, Kl].join("|") + ")" + _g + xg + ")*", Tg = _g + xg + FO, $O = "(?:" + [IO, Gl, Kl].join("|") + ")" + Tg, kO = "(?:" + [Cg + Ba + "?", Ba, Gl, Kl, NO].join("|") + ")", LO = RegExp(Ql, "g"), jO = RegExp(Ba, "g"), VO = RegExp(Ru + "(?=" + Ru + ")|" + kO + Tg, "g"), zO = RegExp([
  io + "?" + Eg + "+" + Eh + "(?=" + [bh, io, "$"].join("|") + ")",
  DO + "+" + wh + "(?=" + [bh, io + Sh, "$"].join("|") + ")",
  io + "?" + Sh + "+" + Eh,
  io + "+" + wh,
  Sg,
  $O
].join("|"), "g"), HO = RegExp("[" + Og + ws + hg + vg + yg + "]"), BO = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, WO = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "ss"
}, UO = typeof Ui == "object" && Ui && Ui.Object === Object && Ui, qO = typeof self == "object" && self && self.Object === Object && self, QO = UO || qO || Function("return this")();
function GO(e, t, r, n) {
  var o = -1, i = e ? e.length : 0;
  for (n && i && (r = e[++o]); ++o < i; )
    r = t(r, e[o], o, e);
  return r;
}
function KO(e) {
  return e.split("");
}
function YO(e) {
  return e.match(xO) || [];
}
function XO(e) {
  return function(t) {
    return e?.[t];
  };
}
var JO = XO(WO);
function Rg(e) {
  return HO.test(e);
}
function ZO(e) {
  return BO.test(e);
}
function ex(e) {
  return Rg(e) ? tx(e) : KO(e);
}
function tx(e) {
  return e.match(VO) || [];
}
function rx(e) {
  return e.match(zO) || [];
}
var nx = Object.prototype, ox = nx.toString, Ch = QO.Symbol, Oh = Ch ? Ch.prototype : void 0, xh = Oh ? Oh.toString : void 0;
function ix(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + t];
  return i;
}
function ax(e) {
  if (typeof e == "string")
    return e;
  if (fx(e))
    return xh ? xh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -CO ? "-0" : t;
}
function sx(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : ix(e, t, r);
}
function cx(e) {
  return function(t) {
    t = Cs(t);
    var r = Rg(t) ? ex(t) : void 0, n = r ? r[0] : t.charAt(0), o = r ? sx(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
function ux(e) {
  return function(t) {
    return GO(mx(vx(t).replace(LO, "")), e, "");
  };
}
function lx(e) {
  return !!e && typeof e == "object";
}
function fx(e) {
  return typeof e == "symbol" || lx(e) && ox.call(e) == OO;
}
function Cs(e) {
  return e == null ? "" : ax(e);
}
var dx = ux(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? hx(t) : t);
});
function hx(e) {
  return px(Cs(e).toLowerCase());
}
function vx(e) {
  return e = Cs(e), e && e.replace(_O, JO).replace(jO, "");
}
var px = cx("toUpperCase");
function mx(e, t, r) {
  return e = Cs(e), t = r ? void 0 : t, t === void 0 ? ZO(e) ? rx(e) : YO(e) : e.match(t) || [];
}
var gx = dx;
const yx = /* @__PURE__ */ ml(gx);
var Ai = {}, Pg = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Pg);
var bx = Pg.exports, Yl = {};
Object.defineProperty(Yl, "__esModule", {
  value: !0
});
Yl.default = Sx;
function Sx() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Xl = {};
Object.defineProperty(Xl, "__esModule", {
  value: !0
});
Xl.default = Ex;
function Ex(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Mg = bx.default;
Object.defineProperty(Ai, "__esModule", {
  value: !0
});
Ai.clearContainerCache = Px;
Ai.injectCSS = Jl;
Ai.removeCSS = Tx;
var wx = Ai.updateCSS = Mx, Cx = Mg(Yl), Ox = Mg(Xl), _h = "data-rc-order", Th = "data-rc-priority", xx = "rc-util-key", Wa = /* @__PURE__ */ new Map();
function Ng() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : xx;
}
function Os(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function _x(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ig(e) {
  return Array.from((Wa.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Jl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!(0, Cx.default)())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = _x(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(_h, a), s && i && c.setAttribute(Th, "".concat(i)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var u = Os(t), l = u.firstChild;
  if (n) {
    if (s) {
      var f = Ig(u).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(_h)))
          return !1;
        var h = Number(d.getAttribute(Th) || 0);
        return i >= h;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, l);
  } else
    u.appendChild(c);
  return c;
}
function Ag(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Os(t);
  return Ig(r).find(function(n) {
    return n.getAttribute(Ng(t)) === e;
  });
}
function Tx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ag(e, t);
  if (r) {
    var n = Os(t);
    n.removeChild(r);
  }
}
function Rx(e, t) {
  var r = Wa.get(e);
  if (!r || !(0, Ox.default)(document, r)) {
    var n = Jl("", t), o = n.parentNode;
    Wa.set(e, o), e.removeChild(n);
  }
}
function Px() {
  Wa.clear();
}
function Mx(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Os(r);
  Rx(n, r);
  var o = Ag(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = Jl(e, r);
  return c.setAttribute(Ng(r), t), c;
}
var Zl = {};
Object.defineProperty(Zl, "__esModule", {
  value: !0
});
var Nx = Zl.getShadowRoot = Ix;
Zl.inShadow = Fg;
function Dg(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Fg(e) {
  return Dg(e) !== e?.ownerDocument;
}
function Ix(e) {
  return Fg(e) ? Dg(e) : null;
}
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.call = tf;
var $g = Nr.default = void 0;
Nr.note = jg;
Nr.noteOnce = zg;
Nr.preMessage = void 0;
Nr.resetWarned = Vg;
Nr.warning = Lg;
Nr.warningOnce = Di;
var Pu = {}, ef = [], kg = function(t) {
  ef.push(t);
};
Nr.preMessage = kg;
function Lg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ef.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function jg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ef.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Vg() {
  Pu = {};
}
function tf(e, t, r) {
  !t && !Pu[r] && (e(!1, r), Pu[r] = !0);
}
function Di(e, t) {
  tf(Lg, e, t);
}
function zg(e, t) {
  tf(jg, e, t);
}
Di.preMessage = kg;
Di.resetWarned = Vg;
Di.noteOnce = zg;
var Ax = Di;
$g = Nr.default = Ax;
function Dx(e, t) {
  $g(e, `[@ant-design/icons] ${t}`);
}
function Rh(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ph(e = {}) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[yx(r)] = n;
    }
    return t;
  }, {});
}
function Mu(e, t, r) {
  return r ? Pe.createElement(e.tag, {
    key: t,
    ...Ph(e.attrs),
    ...r
  }, (e.children || []).map((n, o) => Mu(n, `${t}-${e.tag}-${o}`))) : Pe.createElement(e.tag, {
    key: t,
    ...Ph(e.attrs)
  }, (e.children || []).map((n, o) => Mu(n, `${t}-${e.tag}-${o}`)));
}
function Hg(e) {
  return Fn(e)[0];
}
function Bg(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
const Fx = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, $x = (e) => {
  const { csp: t, prefixCls: r } = Gt(Vl);
  let n = Fx;
  r && (n = n.replace(/anticon/g, r)), Bt(() => {
    const o = e.current, i = Nx(o);
    wx(n, "@ant-design-icons", {
      prepend: !0,
      csp: t,
      attachTo: i
    });
  }, []);
}, ri = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function kx({ primaryColor: e, secondaryColor: t }) {
  ri.primaryColor = e, ri.secondaryColor = t || Hg(e), ri.calculated = !!t;
}
function Lx() {
  return {
    ...ri
  };
}
const xs = (e) => {
  const { icon: t, className: r, onClick: n, style: o, primaryColor: i, secondaryColor: a, ...s } = e, c = v.useRef();
  let u = ri;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: a || Hg(i)
  }), $x(c), Dx(Rh(t), `icon should be icon definiton, but got ${t}`), !Rh(t))
    return null;
  let l = t;
  return l && typeof l.icon == "function" && (l = {
    ...l,
    icon: l.icon(u.primaryColor, u.secondaryColor)
  }), Mu(l.icon, `svg-${l.name}`, {
    className: r,
    onClick: n,
    style: o,
    "data-icon": l.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: c
  });
};
xs.displayName = "IconReact";
xs.getTwoToneColors = Lx;
xs.setTwoToneColors = kx;
const rf = xs;
function Wg(e) {
  const [t, r] = Bg(e);
  return rf.setTwoToneColors({
    primaryColor: t,
    secondaryColor: r
  });
}
function jx() {
  const e = rf.getTwoToneColors();
  return e.calculated ? [
    e.primaryColor,
    e.secondaryColor
  ] : e.primaryColor;
}
Wg(d2.primary);
const _s = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: r,
    // affect inner <svg>...</svg>
    icon: n,
    spin: o,
    rotate: i,
    tabIndex: a,
    onClick: s,
    // other
    twoToneColor: c,
    ...u
  } = e, { prefixCls: l = "anticon", rootClassName: f } = v.useContext(Vl), d = Ne(f, l, {
    [`${l}-${n.name}`]: !!n.name,
    [`${l}-spin`]: !!o || n.name === "loading"
  }, r);
  let h = a;
  h === void 0 && s && (h = -1);
  const m = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, g] = Bg(c);
  return /* @__PURE__ */ v.createElement("span", {
    role: "img",
    "aria-label": n.name,
    ...u,
    ref: t,
    tabIndex: h,
    onClick: s,
    className: d
  }, /* @__PURE__ */ v.createElement(rf, {
    icon: n,
    primaryColor: p,
    secondaryColor: g,
    style: m
  }));
});
_s.displayName = "AntdIcon";
_s.getTwoToneColor = jx;
_s.setTwoToneColor = Wg;
const Zr = _s, Ug = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: wO
});
process.env.NODE_ENV !== "production" && (Ug.displayName = "CheckCircleFilled");
const Vx = /* @__PURE__ */ v.forwardRef(Ug);
var qg = {};
Object.defineProperty(qg, "__esModule", { value: !0 });
var zx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Hx = qg.default = zx;
const Qg = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: Hx
});
process.env.NODE_ENV !== "production" && (Qg.displayName = "CloseCircleFilled");
const Gg = /* @__PURE__ */ v.forwardRef(Qg);
var Kg = {};
Object.defineProperty(Kg, "__esModule", { value: !0 });
var Bx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Wx = Kg.default = Bx;
const Yg = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: Wx
});
process.env.NODE_ENV !== "production" && (Yg.displayName = "CloseOutlined");
const Xg = /* @__PURE__ */ v.forwardRef(Yg);
var Jg = {};
Object.defineProperty(Jg, "__esModule", { value: !0 });
var Ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, qx = Jg.default = Ux;
const Zg = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: qx
});
process.env.NODE_ENV !== "production" && (Zg.displayName = "ExclamationCircleFilled");
const Qx = /* @__PURE__ */ v.forwardRef(Zg);
var e0 = {};
Object.defineProperty(e0, "__esModule", { value: !0 });
var Gx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Kx = e0.default = Gx;
const t0 = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: Kx
});
process.env.NODE_ENV !== "production" && (t0.displayName = "InfoCircleFilled");
const Yx = /* @__PURE__ */ v.forwardRef(t0);
var Xx = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Jx = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Zx = "".concat(Xx, " ").concat(Jx).split(/[\s\n]+/), e_ = "aria-", t_ = "data-";
function Mh(e, t) {
  return e.indexOf(t) === 0;
}
function Ua(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = W({}, t);
  var n = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (r.aria && (o === "role" || Mh(o, e_)) || // Data
    r.data && Mh(o, t_) || // Attr
    r.attr && Zx.includes(o)) && (n[o] = e[o]);
  }), n;
}
const {
  isValidElement: r0
} = v;
function r_(e) {
  return e && r0(e) && e.type === v.Fragment;
}
function n_(e, t, r) {
  return r0(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function n0(e, t) {
  return n_(e, e, t);
}
var te = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= te.F1 && r <= te.F12)
      return !1;
    switch (r) {
      case te.ALT:
      case te.CAPS_LOCK:
      case te.CONTEXT_MENU:
      case te.CTRL:
      case te.DOWN:
      case te.END:
      case te.ESC:
      case te.HOME:
      case te.INSERT:
      case te.LEFT:
      case te.MAC_FF_META:
      case te.META:
      case te.NUMLOCK:
      case te.NUM_CENTER:
      case te.PAGE_DOWN:
      case te.PAGE_UP:
      case te.PAUSE:
      case te.PRINT_SCREEN:
      case te.RIGHT:
      case te.SHIFT:
      case te.UP:
      case te.WIN_KEY:
      case te.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= te.ZERO && t <= te.NINE || t >= te.NUM_ZERO && t <= te.NUM_MULTIPLY || t >= te.A && t <= te.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case te.SPACE:
      case te.QUESTION_MARK:
      case te.NUM_PLUS:
      case te.NUM_MINUS:
      case te.NUM_PERIOD:
      case te.NUM_DIVISION:
      case te.SEMICOLON:
      case te.DASH:
      case te.EQUALS:
      case te.COMMA:
      case te.PERIOD:
      case te.SLASH:
      case te.APOSTROPHE:
      case te.SINGLE_QUOTE:
      case te.OPEN_SQUARE_BRACKET:
      case te.BACKSLASH:
      case te.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, o0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, c = e.content, u = e.closable, l = e.closeIcon, f = l === void 0 ? "x" : l, d = e.props, h = e.onClick, m = e.onNoticeClose, p = e.times, g = v.useState(!1), y = G(g, 2), S = y[0], E = y[1], w = function() {
    m(s);
  }, b = function(R) {
    (R.key === "Enter" || R.code === "Enter" || R.keyCode === te.ENTER) && w();
  };
  v.useEffect(function() {
    if (!S && a > 0) {
      var O = setTimeout(function() {
        w();
      }, a * 1e3);
      return function() {
        clearTimeout(O);
      };
    }
  }, [a, S, p]);
  var C = "".concat(r, "-notice");
  return /* @__PURE__ */ v.createElement("div", Ze({}, d, {
    ref: t,
    className: Ne(C, o, ye({}, "".concat(C, "-closable"), u)),
    style: n,
    onMouseEnter: function() {
      E(!0);
    },
    onMouseLeave: function() {
      E(!1);
    },
    onClick: h
  }), /* @__PURE__ */ v.createElement("div", {
    className: "".concat(C, "-content")
  }, c), u && /* @__PURE__ */ v.createElement("a", {
    tabIndex: 0,
    className: "".concat(C, "-close"),
    onKeyDown: b,
    onClick: function(R) {
      R.preventDefault(), R.stopPropagation(), w();
    }
  }, f));
}), i0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, c = e.style, u = e.onAllRemoved, l = v.useState([]), f = G(l, 2), d = f[0], h = f[1], m = function(O) {
    var R, M = d.find(function(_) {
      return _.key === O;
    });
    M == null || (R = M.onClose) === null || R === void 0 || R.call(M), h(function(_) {
      return _.filter(function($) {
        return $.key !== O;
      });
    });
  };
  v.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        h(function(R) {
          var M = be(R), _ = M.findIndex(function(x) {
            return x.key === O.key;
          }), $ = W({}, O);
          if (_ >= 0) {
            var T;
            $.times = (((T = R[_]) === null || T === void 0 ? void 0 : T.times) || 0) + 1, M[_] = $;
          } else
            $.times = 0, M.push($);
          return a > 0 && M.length > a && (M = M.slice(-a)), M;
        });
      },
      close: function(O) {
        m(O);
      },
      destroy: function() {
        h([]);
      }
    };
  });
  var p = v.useState({}), g = G(p, 2), y = g[0], S = g[1];
  v.useEffect(function() {
    var C = {};
    d.forEach(function(O) {
      var R = O.placement, M = R === void 0 ? "topRight" : R;
      M && (C[M] = C[M] || [], C[M].push(O));
    }), Object.keys(y).forEach(function(O) {
      C[O] = C[O] || [];
    }), S(C);
  }, [d]);
  var E = function(O) {
    S(function(R) {
      var M = W({}, R), _ = M[O] || [];
      return _.length || delete M[O], M;
    });
  }, w = v.useRef(!1);
  if (v.useEffect(function() {
    Object.keys(y).length > 0 ? w.current = !0 : w.current && (u?.(), w.current = !1);
  }, [y]), !o)
    return null;
  var b = Object.keys(y);
  return /* @__PURE__ */ ol(/* @__PURE__ */ v.createElement(v.Fragment, null, b.map(function(C) {
    var O = y[C], R = O.map(function(_) {
      return {
        config: _,
        key: _.key
      };
    }), M = typeof i == "function" ? i(C) : i;
    return /* @__PURE__ */ v.createElement(uO, Ze({
      key: C,
      className: Ne(n, "".concat(n, "-").concat(C), s?.(C)),
      style: c?.(C),
      keys: R,
      motionAppear: !0
    }, M, {
      onAllRemoved: function() {
        E(C);
      }
    }), function(_, $) {
      var T = _.config, x = _.className, P = _.style, A = T.key, F = T.times, D = T.className, B = T.style;
      return /* @__PURE__ */ v.createElement(o0, Ze({}, T, {
        ref: $,
        prefixCls: n,
        className: Ne(x, D),
        style: W(W({}, P), B),
        times: F,
        key: A,
        eventKey: A,
        onNoticeClose: m
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (i0.displayName = "Notifications");
var o_ = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], i_ = function() {
  return document.body;
}, Nh = 0;
function a_() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function s_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? i_ : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, c = e.onAllRemoved, u = Mt(e, o_), l = v.useState(), f = G(l, 2), d = f[0], h = f[1], m = v.useRef(), p = /* @__PURE__ */ v.createElement(i0, {
    container: d,
    ref: m,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: c
  }), g = v.useState([]), y = G(g, 2), S = y[0], E = y[1], w = v.useMemo(function() {
    return {
      open: function(C) {
        var O = a_(u, C);
        (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(Nh), Nh += 1), E(function(R) {
          return [].concat(be(R), [{
            type: "open",
            config: O
          }]);
        });
      },
      close: function(C) {
        E(function(O) {
          return [].concat(be(O), [{
            type: "close",
            key: C
          }]);
        });
      },
      destroy: function() {
        E(function(C) {
          return [].concat(be(C), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return v.useEffect(function() {
    h(r());
  }), v.useEffect(function() {
    m.current && S.length && (S.forEach(function(b) {
      switch (b.type) {
        case "open":
          m.current.open(b.config);
          break;
        case "close":
          m.current.close(b.key);
          break;
        case "destroy":
          m.current.destroy();
          break;
      }
    }), E(function(b) {
      return b.filter(function(C) {
        return !S.includes(C);
      });
    }));
  }, [S]), [w, p];
}
var a0 = {};
Object.defineProperty(a0, "__esModule", { value: !0 });
var c_ = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, u_ = a0.default = c_;
const s0 = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: u_
});
process.env.NODE_ENV !== "production" && (s0.displayName = "LoadingOutlined");
const nf = /* @__PURE__ */ v.forwardRef(s0), l_ = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    boxShadow: n,
    colorText: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: s,
    colorInfo: c,
    fontSizeLG: u,
    motionEaseInOutCirc: l,
    motionDurationSlow: f,
    marginXS: d,
    paddingXS: h,
    borderRadiusLG: m,
    zIndexPopup: p,
    // Custom token
    contentPadding: g,
    contentBg: y
  } = e, S = `${t}-notice`, E = new jt("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: h,
      transform: "translateY(0)",
      opacity: 1
    }
  }), w = new jt("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: h,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), b = {
    padding: h,
    textAlign: "center",
    [`${t}-custom-content > ${r}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: d,
      fontSize: u
    },
    [`${S}-content`]: {
      display: "inline-block",
      padding: g,
      background: y,
      borderRadius: m,
      boxShadow: n,
      pointerEvents: "all"
    },
    [`${t}-success > ${r}`]: {
      color: i
    },
    [`${t}-error > ${r}`]: {
      color: a
    },
    [`${t}-warning > ${r}`]: {
      color: s
    },
    [`${t}-info > ${r},
      ${t}-loading > ${r}`]: {
      color: c
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Ss(e)), {
        color: o,
        position: "fixed",
        top: d,
        width: "100%",
        pointerEvents: "none",
        zIndex: p,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: E,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: l
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: w,
          animationDuration: f,
          animationPlayState: "paused",
          animationTimingFunction: l
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [S]: Object.assign({}, b)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, b), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, c0 = Ni("Message", (e) => {
  const t = er(e, {
    height: 150
  });
  return [l_(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), {
  clientOnly: !0
});
var f_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const d_ = {
  info: /* @__PURE__ */ v.createElement(Yx, null),
  success: /* @__PURE__ */ v.createElement(Vx, null),
  error: /* @__PURE__ */ v.createElement(Gg, null),
  warning: /* @__PURE__ */ v.createElement(Qx, null),
  loading: /* @__PURE__ */ v.createElement(nf, null)
}, u0 = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ v.createElement("div", {
    className: Ne(`${t}-custom-content`, `${t}-${r}`)
  }, n || d_[r], /* @__PURE__ */ v.createElement("span", null, o));
}, h_ = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = f_(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = v.useContext(or), c = t || s("message"), [, u] = c0(c);
  return /* @__PURE__ */ v.createElement(o0, Object.assign({}, a, {
    prefixCls: c,
    className: Ne(r, u, `${c}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ v.createElement(u0, {
      prefixCls: c,
      type: n,
      icon: o
    }, i)
  }));
}, v_ = h_;
function p_(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function of(e) {
  let t;
  const r = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), n = () => {
    t?.();
  };
  return n.then = (o, i) => r.then(o, i), n.promise = r, n;
}
var m_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const g_ = 8, y_ = 3, b_ = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = y_,
    rtl: s,
    transitionName: c,
    onAllRemoved: u
  } = e, {
    getPrefixCls: l,
    getPopupContainer: f,
    message: d
  } = v.useContext(or), h = n || l("message"), [, m] = c0(h), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? g_
  }), g = () => Ne(m, {
    [`${h}-rtl`]: s
  }), y = () => p_(h, c), S = /* @__PURE__ */ v.createElement("span", {
    className: `${h}-close-x`
  }, /* @__PURE__ */ v.createElement(Xg, {
    className: `${h}-close-icon`
  })), [E, w] = s_({
    prefixCls: h,
    style: p,
    className: g,
    motion: y,
    closable: !1,
    closeIcon: S,
    duration: a,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: i,
    onAllRemoved: u
  });
  return v.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: h,
    hashId: m,
    message: d
  })), w;
});
let Ih = 0;
function l0(e) {
  const t = v.useRef(null);
  return [v.useMemo(() => {
    const n = (c) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(c);
    }, o = (c) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && dr(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const O = () => {
        };
        return O.then = () => {
        }, O;
      }
      const {
        open: u,
        prefixCls: l,
        hashId: f,
        message: d
      } = t.current, h = `${l}-notice`, {
        content: m,
        icon: p,
        type: g,
        key: y,
        className: S,
        style: E,
        onClose: w
      } = c, b = m_(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let C = y;
      return C == null && (Ih += 1, C = `antd-message-${Ih}`), of((O) => (u(Object.assign(Object.assign({}, b), {
        key: C,
        content: /* @__PURE__ */ v.createElement(u0, {
          prefixCls: l,
          type: g,
          icon: p
        }, m),
        placement: "top",
        className: Ne(g && `${h}-${g}`, f, S, d?.className),
        style: Object.assign(Object.assign({}, d?.style), E),
        onClose: () => {
          w?.(), O();
        }
      })), () => {
        n(C);
      }));
    }, a = {
      open: o,
      destroy: (c) => {
        var u;
        c !== void 0 ? n(c) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const u = (l, f, d) => {
        let h;
        l && typeof l == "object" && "content" in l ? h = l : h = {
          content: l
        };
        let m, p;
        typeof f == "function" ? p = f : (m = f, p = d);
        const g = Object.assign(Object.assign({
          onClose: p,
          duration: m
        }, h), {
          type: c
        });
        return o(g);
      };
      a[c] = u;
    }), a;
  }, []), /* @__PURE__ */ v.createElement(b_, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function S_(e) {
  return l0(e);
}
function hr() {
  hr = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(T, x, P) {
    T[x] = P.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(T, x, P) {
    return Object.defineProperty(T, x, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), T[x];
  }
  try {
    c({}, "");
  } catch {
    c = function(P, A, F) {
      return P[A] = F;
    };
  }
  function u(T, x, P, A) {
    var F = x && x.prototype instanceof d ? x : d, D = Object.create(F.prototype), B = new M(A || []);
    return n(D, "_invoke", {
      value: b(T, P, B)
    }), D;
  }
  function l(T, x, P) {
    try {
      return {
        type: "normal",
        arg: T.call(x, P)
      };
    } catch (A) {
      return {
        type: "throw",
        arg: A
      };
    }
  }
  e.wrap = u;
  var f = {};
  function d() {
  }
  function h() {
  }
  function m() {
  }
  var p = {};
  c(p, i, function() {
    return this;
  });
  var g = Object.getPrototypeOf, y = g && g(g(_([])));
  y && y !== t && r.call(y, i) && (p = y);
  var S = m.prototype = d.prototype = Object.create(p);
  function E(T) {
    ["next", "throw", "return"].forEach(function(x) {
      c(T, x, function(P) {
        return this._invoke(x, P);
      });
    });
  }
  function w(T, x) {
    function P(F, D, B, q) {
      var ne = l(T[F], T, D);
      if (ne.type !== "throw") {
        var se = ne.arg, L = se.value;
        return L && Be(L) == "object" && r.call(L, "__await") ? x.resolve(L.__await).then(function(H) {
          P("next", H, B, q);
        }, function(H) {
          P("throw", H, B, q);
        }) : x.resolve(L).then(function(H) {
          se.value = H, B(se);
        }, function(H) {
          return P("throw", H, B, q);
        });
      }
      q(ne.arg);
    }
    var A;
    n(this, "_invoke", {
      value: function(D, B) {
        function q() {
          return new x(function(ne, se) {
            P(D, B, ne, se);
          });
        }
        return A = A ? A.then(q, q) : q();
      }
    });
  }
  function b(T, x, P) {
    var A = "suspendedStart";
    return function(F, D) {
      if (A === "executing")
        throw new Error("Generator is already running");
      if (A === "completed") {
        if (F === "throw")
          throw D;
        return $();
      }
      for (P.method = F, P.arg = D; ; ) {
        var B = P.delegate;
        if (B) {
          var q = C(B, P);
          if (q) {
            if (q === f)
              continue;
            return q;
          }
        }
        if (P.method === "next")
          P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (A === "suspendedStart")
            throw A = "completed", P.arg;
          P.dispatchException(P.arg);
        } else
          P.method === "return" && P.abrupt("return", P.arg);
        A = "executing";
        var ne = l(T, x, P);
        if (ne.type === "normal") {
          if (A = P.done ? "completed" : "suspendedYield", ne.arg === f)
            continue;
          return {
            value: ne.arg,
            done: P.done
          };
        }
        ne.type === "throw" && (A = "completed", P.method = "throw", P.arg = ne.arg);
      }
    };
  }
  function C(T, x) {
    var P = x.method, A = T.iterator[P];
    if (A === void 0)
      return x.delegate = null, P === "throw" && T.iterator.return && (x.method = "return", x.arg = void 0, C(T, x), x.method === "throw") || P !== "return" && (x.method = "throw", x.arg = new TypeError("The iterator does not provide a '" + P + "' method")), f;
    var F = l(A, T.iterator, x.arg);
    if (F.type === "throw")
      return x.method = "throw", x.arg = F.arg, x.delegate = null, f;
    var D = F.arg;
    return D ? D.done ? (x[T.resultName] = D.value, x.next = T.nextLoc, x.method !== "return" && (x.method = "next", x.arg = void 0), x.delegate = null, f) : D : (x.method = "throw", x.arg = new TypeError("iterator result is not an object"), x.delegate = null, f);
  }
  function O(T) {
    var x = {
      tryLoc: T[0]
    };
    1 in T && (x.catchLoc = T[1]), 2 in T && (x.finallyLoc = T[2], x.afterLoc = T[3]), this.tryEntries.push(x);
  }
  function R(T) {
    var x = T.completion || {};
    x.type = "normal", delete x.arg, T.completion = x;
  }
  function M(T) {
    this.tryEntries = [{
      tryLoc: "root"
    }], T.forEach(O, this), this.reset(!0);
  }
  function _(T) {
    if (T) {
      var x = T[i];
      if (x)
        return x.call(T);
      if (typeof T.next == "function")
        return T;
      if (!isNaN(T.length)) {
        var P = -1, A = function F() {
          for (; ++P < T.length; )
            if (r.call(T, P))
              return F.value = T[P], F.done = !1, F;
          return F.value = void 0, F.done = !0, F;
        };
        return A.next = A;
      }
    }
    return {
      next: $
    };
  }
  function $() {
    return {
      value: void 0,
      done: !0
    };
  }
  return h.prototype = m, n(S, "constructor", {
    value: m,
    configurable: !0
  }), n(m, "constructor", {
    value: h,
    configurable: !0
  }), h.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(T) {
    var x = typeof T == "function" && T.constructor;
    return !!x && (x === h || (x.displayName || x.name) === "GeneratorFunction");
  }, e.mark = function(T) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(T, m) : (T.__proto__ = m, c(T, s, "GeneratorFunction")), T.prototype = Object.create(S), T;
  }, e.awrap = function(T) {
    return {
      __await: T
    };
  }, E(w.prototype), c(w.prototype, a, function() {
    return this;
  }), e.AsyncIterator = w, e.async = function(T, x, P, A, F) {
    F === void 0 && (F = Promise);
    var D = new w(u(T, x, P, A), F);
    return e.isGeneratorFunction(x) ? D : D.next().then(function(B) {
      return B.done ? B.value : D.next();
    });
  }, E(S), c(S, s, "Generator"), c(S, i, function() {
    return this;
  }), c(S, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(T) {
    var x = Object(T), P = [];
    for (var A in x)
      P.push(A);
    return P.reverse(), function F() {
      for (; P.length; ) {
        var D = P.pop();
        if (D in x)
          return F.value = D, F.done = !1, F;
      }
      return F.done = !0, F;
    };
  }, e.values = _, M.prototype = {
    constructor: M,
    reset: function(x) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(R), !x)
        for (var P in this)
          P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = void 0);
    },
    stop: function() {
      this.done = !0;
      var x = this.tryEntries[0].completion;
      if (x.type === "throw")
        throw x.arg;
      return this.rval;
    },
    dispatchException: function(x) {
      if (this.done)
        throw x;
      var P = this;
      function A(se, L) {
        return B.type = "throw", B.arg = x, P.next = se, L && (P.method = "next", P.arg = void 0), !!L;
      }
      for (var F = this.tryEntries.length - 1; F >= 0; --F) {
        var D = this.tryEntries[F], B = D.completion;
        if (D.tryLoc === "root")
          return A("end");
        if (D.tryLoc <= this.prev) {
          var q = r.call(D, "catchLoc"), ne = r.call(D, "finallyLoc");
          if (q && ne) {
            if (this.prev < D.catchLoc)
              return A(D.catchLoc, !0);
            if (this.prev < D.finallyLoc)
              return A(D.finallyLoc);
          } else if (q) {
            if (this.prev < D.catchLoc)
              return A(D.catchLoc, !0);
          } else {
            if (!ne)
              throw new Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc)
              return A(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(x, P) {
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var F = this.tryEntries[A];
        if (F.tryLoc <= this.prev && r.call(F, "finallyLoc") && this.prev < F.finallyLoc) {
          var D = F;
          break;
        }
      }
      D && (x === "break" || x === "continue") && D.tryLoc <= P && P <= D.finallyLoc && (D = null);
      var B = D ? D.completion : {};
      return B.type = x, B.arg = P, D ? (this.method = "next", this.next = D.finallyLoc, f) : this.complete(B);
    },
    complete: function(x, P) {
      if (x.type === "throw")
        throw x.arg;
      return x.type === "break" || x.type === "continue" ? this.next = x.arg : x.type === "return" ? (this.rval = this.arg = x.arg, this.method = "return", this.next = "end") : x.type === "normal" && P && (this.next = P), f;
    },
    finish: function(x) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var A = this.tryEntries[P];
        if (A.finallyLoc === x)
          return this.complete(A.completion, A.afterLoc), R(A), f;
      }
    },
    catch: function(x) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var A = this.tryEntries[P];
        if (A.tryLoc === x) {
          var F = A.completion;
          if (F.type === "throw") {
            var D = F.arg;
            R(A);
          }
          return D;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(x, P, A) {
      return this.delegate = {
        iterator: _(x),
        resultName: P,
        nextLoc: A
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function Ah(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (u) {
    r(u);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function Ao(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(c) {
        Ah(i, n, o, a, s, "next", c);
      }
      function s(c) {
        Ah(i, n, o, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var Fi = W({}, Ay), E_ = Fi.version, w_ = Fi.render, C_ = Fi.unmountComponentAtNode, Ts;
try {
  var O_ = Number((E_ || "").split(".")[0]);
  O_ >= 18 && (Ts = Fi.createRoot);
} catch {
}
function Dh(e) {
  var t = Fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Be(t) === "object" && (t.usingClientEntryPoint = e);
}
var qa = "__rc_react_root__";
function x_(e, t) {
  Dh(!0);
  var r = t[qa] || Ts(t);
  Dh(!1), r.render(e), t[qa] = r;
}
function __(e, t) {
  w_(e, t);
}
function f0(e, t) {
  if (Ts) {
    x_(e, t);
    return;
  }
  __(e, t);
}
function T_(e) {
  return Nu.apply(this, arguments);
}
function Nu() {
  return Nu = Ao(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[qa]) === null || o === void 0 || o.unmount(), delete t[qa];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Nu.apply(this, arguments);
}
function R_(e) {
  C_(e);
}
function P_(e) {
  return Iu.apply(this, arguments);
}
function Iu() {
  return Iu = Ao(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Ts === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", T_(t));
          case 2:
            R_(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Iu.apply(this, arguments);
}
const d0 = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, M_ = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, N_ = Ni("Wave", (e) => [M_(e)]);
function I_(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function hc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && I_(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function A_(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return hc(t) ? t : hc(r) ? r : hc(n) ? n : null;
}
function vc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const D_ = (e) => {
  const {
    className: t,
    target: r
  } = e, n = v.useRef(null), [o, i] = v.useState(null), [a, s] = v.useState([]), [c, u] = v.useState(0), [l, f] = v.useState(0), [d, h] = v.useState(0), [m, p] = v.useState(0), [g, y] = v.useState(!1), S = {
    left: c,
    top: l,
    width: d,
    height: m,
    borderRadius: a.map((w) => `${w}px`).join(" ")
  };
  o && (S["--wave-color"] = o);
  function E() {
    const w = getComputedStyle(r);
    i(A_(r));
    const b = w.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: O
    } = w;
    u(b ? r.offsetLeft : vc(-parseFloat(C))), f(b ? r.offsetTop : vc(-parseFloat(O))), h(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: R,
      borderTopRightRadius: M,
      borderBottomLeftRadius: _,
      borderBottomRightRadius: $
    } = w;
    s([R, M, $, _].map((T) => vc(parseFloat(T))));
  }
  return v.useEffect(() => {
    if (r) {
      const w = Wt(() => {
        E(), y(!0);
      });
      let b;
      return typeof ResizeObserver < "u" && (b = new ResizeObserver(E), b.observe(r)), () => {
        Wt.cancel(w), b?.disconnect();
      };
    }
  }, []), g ? /* @__PURE__ */ v.createElement(Ii, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, b) => {
      var C;
      if (b.deadline || b.propertyName === "opacity") {
        const O = (C = n.current) === null || C === void 0 ? void 0 : C.parentElement;
        P_(O).then(() => {
          O?.remove();
        });
      }
      return !1;
    }
  }, (w) => {
    let {
      className: b
    } = w;
    return /* @__PURE__ */ v.createElement("div", {
      ref: n,
      className: Ne(t, b),
      style: S
    });
  }) : null;
}, F_ = (e, t) => {
  let {
    className: r
  } = t;
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e?.insertBefore(n, e?.firstChild), f0(/* @__PURE__ */ v.createElement(D_, {
    target: e,
    className: r
  }), n);
}, $_ = F_;
function k_(e, t, r) {
  const {
    wave: n
  } = v.useContext(or), [, o] = Ln();
  return Rr((a) => {
    const s = e.current;
    if (n?.disabled || !s)
      return;
    const {
      showEffect: c
    } = n || {};
    (c || $_)(s, {
      className: t,
      token: o,
      component: r,
      event: a
    });
  });
}
const h0 = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = Gt(or), i = De(null), a = o("wave"), [, s] = N_(a), c = k_(i, Ne(a, s), n);
  if (Pe.useEffect(() => {
    const l = i.current;
    if (!l || l.nodeType !== 1 || r)
      return;
    const f = (d) => {
      d.target.tagName === "INPUT" || !d0(d.target) || // No need wave
      !l.getAttribute || l.getAttribute("disabled") || l.disabled || l.className.includes("disabled") || l.className.includes("-leave") || c(d);
    };
    return l.addEventListener("click", f, !0), () => {
      l.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ Pe.isValidElement(t))
    return t ?? null;
  const u = Mi(t) ? No(t.ref, i) : i;
  return n0(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (h0.displayName = "Wave");
const L_ = h0, j_ = (e) => {
  const t = Pe.useContext(Es);
  return Pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, v0 = j_;
globalThis && globalThis.__rest;
const V_ = /* @__PURE__ */ v.createContext(null), p0 = (e, t) => {
  const r = v.useContext(V_), n = v.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Ne(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r?.compactSize,
    compactDirection: r?.compactDirection,
    compactItemClassnames: n
  };
}, z_ = /* @__PURE__ */ rl((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = Ne(`${i}-icon`, r);
  return /* @__PURE__ */ Pe.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), m0 = z_, Fh = /* @__PURE__ */ rl((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Ne(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Pe.createElement(m0, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ Pe.createElement(nf, {
    className: i
  }));
}), pc = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), mc = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), H_ = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ Pe.createElement(Fh, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ Pe.createElement(Ii, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: pc,
    onAppearActive: mc,
    onEnterStart: pc,
    onEnterActive: mc,
    onLeaveStart: mc,
    onLeaveActive: pc
  }, (s, c) => {
    let {
      className: u,
      style: l
    } = s;
    return /* @__PURE__ */ Pe.createElement(Fh, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), l),
      ref: c,
      iconClassName: u
    });
  });
}, B_ = H_;
var W_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const g0 = /* @__PURE__ */ v.createContext(void 0), U_ = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(or), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = W_(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , c] = Ln();
  let u = "";
  switch (o) {
    case "large":
      u = "lg";
      break;
    case "small":
      u = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && dr(!o, "Button.Group", "Invalid prop `size`.");
  }
  const l = Ne(s, {
    [`${s}-${u}`]: u,
    [`${s}-rtl`]: r === "rtl"
  }, i, c);
  return /* @__PURE__ */ v.createElement(g0.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, a, {
    className: l
  })));
}, q_ = U_, $h = /^[\u4e00-\u9fa5]{2}$/, Au = $h.test.bind($h);
function Q_(e) {
  return typeof e == "string";
}
function na(e) {
  return e === "text" || e === "link";
}
function G_(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Q_(e.type) && Au(e.props.children) ? n0(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? Au(e) ? /* @__PURE__ */ Pe.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Pe.createElement("span", null, e) : r_(e) ? /* @__PURE__ */ Pe.createElement("span", null, e) : e;
}
function K_(e, t) {
  let r = !1;
  const n = [];
  return Pe.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (r && a) {
      const s = n.length - 1, c = n[s];
      n[s] = `${c}${o}`;
    } else
      n.push(o);
    r = a;
  }), Pe.Children.map(n, (o) => G_(o, t));
}
function Y_(e, t, r) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = r, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function X_(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function y0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Y_(e, n, t)), X_(r, n, t))
  };
}
function J_(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Z_(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function eT(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, J_(e, t)), Z_(e.componentCls, t))
  };
}
const kh = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), tT = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    colorPrimaryHover: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -n,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      kh(`${t}-primary`, o),
      kh(`${t}-danger`, i)
    ]
  };
}, rT = tT, nT = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    buttonFontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${r} + span, > span + ${r}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, A2(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Xr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), oT = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), iT = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), aT = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), mi = (e, t, r, n, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, Xr(e, Object.assign({
    backgroundColor: "transparent"
  }, i), Object.assign({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: n || void 0,
      borderColor: o || void 0
    }
  })
}), af = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, aT(e))
}), b0 = (e) => Object.assign({}, af(e)), Qa = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), S0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, b0(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Xr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), mi(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Xr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), mi(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), af(e))
}), sT = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, b0(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Xr(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), mi(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Xr(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), mi(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), af(e))
}), cT = (e) => Object.assign(Object.assign({}, S0(e)), {
  borderStyle: "dashed"
}), uT = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Xr(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Qa(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Xr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Qa(e))
}), lT = (e) => Object.assign(Object.assign(Object.assign({}, Xr(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Qa(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Qa(e)), Xr(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), fT = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: S0(e),
    [`${t}-primary`]: sT(e),
    [`${t}-dashed`]: cT(e),
    [`${t}-link`]: uT(e),
    [`${t}-text`]: lT(e),
    [`${t}-ghost`]: mi(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, sf = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    lineHeight: i,
    lineWidth: a,
    borderRadius: s,
    buttonPaddingHorizontal: c,
    iconCls: u
  } = e, l = Math.max(0, (n - o * i) / 2 - a), f = c - a, d = `${r}-icon-only`;
  return [
    // Size
    {
      [`${r}${t}`]: {
        fontSize: o,
        height: n,
        padding: `${l}px ${f}px`,
        borderRadius: s,
        [`&${d}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [u]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: oT(e)
    },
    {
      [`${r}${r}-round${t}`]: iT(e)
    }
  ];
}, dT = (e) => sf(e), hT = (e) => {
  const t = er(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return sf(t, `${e.componentCls}-sm`);
}, vT = (e) => {
  const t = er(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return sf(t, `${e.componentCls}-lg`);
}, pT = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, mT = Ni("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: r
  } = e, n = er(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: r,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    nT(n),
    // Size
    hT(n),
    dT(n),
    vT(n),
    // Block
    pT(n),
    // Group (type, ghost, danger, loading)
    fT(n),
    // Button Group
    rT(n),
    // Space Compact
    y0(e),
    eT(e)
  ];
});
var gT = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function yT(e) {
  if (typeof e == "object" && e) {
    const t = e?.delay;
    return {
      loading: !1,
      delay: !Number.isNaN(t) && typeof t == "number" ? t : 0
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const bT = (e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: i,
    type: a = "default",
    danger: s,
    shape: c = "default",
    size: u,
    styles: l,
    disabled: f,
    className: d,
    rootClassName: h,
    children: m,
    icon: p,
    ghost: g = !1,
    block: y = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: S = "button",
    classNames: E,
    style: w = {}
  } = e, b = gT(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: O,
    direction: R,
    button: M
  } = Gt(or), _ = C("btn", i), [$, T] = mT(_), x = Gt(Wl), P = f ?? x, A = Gt(g0), F = go(() => yT(o), [o]), [D, B] = fr(F.loading), [q, ne] = fr(!1), L = No(t, /* @__PURE__ */ Ny()), H = My.count(m) === 1 && !p && !na(a);
  Bt(() => {
    let oe = null;
    F.delay > 0 ? oe = setTimeout(() => {
      oe = null, B(!0);
    }, F.delay) : B(F.loading);
    function fe() {
      oe && (clearTimeout(oe), oe = null);
    }
    return fe;
  }, [F]), Bt(() => {
    if (!L || !L.current || O === !1)
      return;
    const oe = L.current.textContent;
    H && Au(oe) ? q || ne(!0) : q && ne(!1);
  }, [L]);
  const z = (oe) => {
    const {
      onClick: fe
    } = e;
    if (D || P) {
      oe.preventDefault();
      return;
    }
    fe?.(oe);
  };
  process.env.NODE_ENV !== "production" && dr(!(typeof p == "string" && p.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && dr(!(g && na(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const J = O !== !1, {
    compactSize: I,
    compactItemClassnames: Q
  } = p0(_, R), k = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, X = v0((oe) => {
    var fe, Me;
    return (Me = (fe = u ?? I) !== null && fe !== void 0 ? fe : A) !== null && Me !== void 0 ? Me : oe;
  }), re = X && k[X] || "", Y = D ? "loading" : p, N = Il(b, ["navigate"]), Z = Ne(_, T, {
    [`${_}-${c}`]: c !== "default" && c,
    [`${_}-${a}`]: a,
    [`${_}-${re}`]: re,
    [`${_}-icon-only`]: !m && m !== 0 && !!Y,
    [`${_}-background-ghost`]: g && !na(a),
    [`${_}-loading`]: D,
    [`${_}-two-chinese-chars`]: q && J && !D,
    [`${_}-block`]: y,
    [`${_}-dangerous`]: !!s,
    [`${_}-rtl`]: R === "rtl"
  }, Q, d, h, M?.className), j = Object.assign(Object.assign({}, M?.style), w), ee = Ne(E?.icon, (r = M?.classNames) === null || r === void 0 ? void 0 : r.icon), le = Object.assign(Object.assign({}, l?.icon || {}), ((n = M?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), ce = p && !D ? /* @__PURE__ */ Pe.createElement(m0, {
    prefixCls: _,
    className: ee,
    style: le
  }, p) : /* @__PURE__ */ Pe.createElement(B_, {
    existIcon: !!p,
    prefixCls: _,
    loading: !!D
  }), de = m || m === 0 ? K_(m, H && J) : null;
  if (N.href !== void 0)
    return $(/* @__PURE__ */ Pe.createElement("a", Object.assign({}, N, {
      className: Ne(Z, {
        [`${_}-disabled`]: P
      }),
      style: j,
      onClick: z,
      ref: L
    }), ce, de));
  let me = /* @__PURE__ */ Pe.createElement("button", Object.assign({}, b, {
    type: S,
    className: Z,
    style: j,
    onClick: z,
    disabled: P,
    ref: L
  }), ce, de);
  return na(a) || (me = /* @__PURE__ */ Pe.createElement(L_, {
    component: "Button",
    disabled: !!D
  }, me)), $(me);
}, Rs = /* @__PURE__ */ rl(bT);
process.env.NODE_ENV !== "production" && (Rs.displayName = "Button");
Rs.Group = q_;
Rs.__ANT_BUTTON = !0;
const ST = Rs, ET = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
var E0 = /* @__PURE__ */ v.createContext(null), Lh = [];
function wT(e, t) {
  var r = v.useState(function() {
    if (!Kt())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = G(r, 1), o = n[0], i = v.useRef(!1), a = v.useContext(E0), s = v.useState(Lh), c = G(s, 2), u = c[0], l = c[1], f = a || (i.current ? void 0 : function(m) {
    l(function(p) {
      var g = [m].concat(be(p));
      return g;
    });
  });
  function d() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function h() {
    var m;
    (m = o.parentElement) === null || m === void 0 || m.removeChild(o), i.current = !1;
  }
  return _t(function() {
    return e ? a ? a(d) : d() : h(), h;
  }, [e]), _t(function() {
    u.length && (u.forEach(function(m) {
      return m();
    }), l(Lh));
  }, [u]), [o, f];
}
var gc;
function CT(e) {
  if (typeof document > "u")
    return 0;
  if (e || gc === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var o = t.offsetWidth;
    r.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = r.clientWidth), document.body.removeChild(r), gc = o - i;
  }
  return gc;
}
function jh(e) {
  var t = e.match(/^(.*)px$/), r = Number(t?.[1]);
  return Number.isNaN(r) ? CT() : r;
}
function OT(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: jh(r),
    height: jh(n)
  };
}
function xT() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var _T = "rc-util-locker-".concat(Date.now()), Vh = 0;
function TT(e) {
  var t = !!e, r = v.useState(function() {
    return Vh += 1, "".concat(_T, "_").concat(Vh);
  }), n = G(r, 1), o = n[0];
  _t(function() {
    if (t) {
      var i = OT(document.body).width, a = xT();
      hi(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      ja(o);
    return function() {
      ja(o);
    };
  }, [t, o]);
}
var zh = !1;
function RT(e) {
  return typeof e == "boolean" && (zh = e), zh;
}
var Hh = function(t) {
  return t === !1 ? !1 : !Kt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, cf = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, u = v.useState(r), l = G(u, 2), f = l[0], d = l[1], h = f || r;
  process.env.NODE_ENV !== "production" && ke(Kt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && d(r);
  }, [r, s]);
  var m = v.useState(function() {
    return Hh(o);
  }), p = G(m, 2), g = p[0], y = p[1];
  v.useEffect(function() {
    var T = Hh(o);
    y(T ?? null);
  });
  var S = wT(h && !g, i), E = G(S, 2), w = E[0], b = E[1], C = g ?? w;
  TT(n && r && Kt() && (C === w || C === document.body));
  var O = null;
  if (c && Mi(c) && t) {
    var R = c;
    O = R.ref;
  }
  var M = Nl(O, t);
  if (!h || !Kt() || g === void 0)
    return null;
  var _ = C === !1 || RT(), $ = c;
  return t && ($ = /* @__PURE__ */ v.cloneElement(c, {
    ref: M
  })), /* @__PURE__ */ v.createElement(E0.Provider, {
    value: b
  }, _ ? $ : /* @__PURE__ */ ol($, C));
});
process.env.NODE_ENV !== "production" && (cf.displayName = "Portal");
function PT() {
  var e = W({}, v);
  return e.useId;
}
var Bh = 0;
function MT(e) {
  var t = v.useState("ssr-id"), r = G(t, 2), n = r[0], o = r[1], i = PT(), a = i?.();
  return v.useEffect(function() {
    if (!i) {
      var s = Bh;
      Bh += 1, o("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || n);
}
var Tn = "RC_FORM_INTERNAL_HOOKS", at = function() {
  ke(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, _o = /* @__PURE__ */ v.createContext({
  getFieldValue: at,
  getFieldsValue: at,
  getFieldError: at,
  getFieldWarning: at,
  getFieldsError: at,
  isFieldsTouched: at,
  isFieldTouched: at,
  isFieldValidating: at,
  isFieldsValidating: at,
  resetFields: at,
  setFields: at,
  setFieldValue: at,
  setFieldsValue: at,
  validateFields: at,
  submit: at,
  getInternalHooks: function() {
    return at(), {
      dispatch: at,
      initEntityValue: at,
      registerField: at,
      useSubscribe: at,
      setInitialValues: at,
      destroyForm: at,
      setCallbacks: at,
      registerWatch: at,
      getFields: at,
      setValidateMessages: at,
      setPreserve: at,
      getInitialValue: at
    };
  }
}), Ga = /* @__PURE__ */ v.createContext(null);
function Du(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function NT(e) {
  return e && !!e._init;
}
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rn.apply(this, arguments);
}
function IT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gi(e, t);
}
function Fu(e) {
  return Fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fu(e);
}
function gi(e, t) {
  return gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, gi(e, t);
}
function AT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xa(e, t, r) {
  return AT() ? xa = Reflect.construct.bind() : xa = function(o, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var c = Function.bind.apply(o, s), u = new c();
    return a && gi(u, a.prototype), u;
  }, xa.apply(null, arguments);
}
function DT(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function $u(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return $u = function(n) {
    if (n === null || !DT(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return xa(n, arguments, Fu(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), gi(o, n);
  }, $u(e);
}
var FT = /%[sdj%]/g, w0 = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (w0 = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function ku(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function lr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var a = e.replace(FT, function(s) {
      if (s === "%%")
        return "%";
      if (o >= i)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function $T(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Dt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || $T(t) && typeof e == "string" && !e);
}
function kT(e, t, r) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, s || []), o++, o === i && r(n);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function Wh(e, t, r) {
  var n = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], i) : r([]);
  }
  i([]);
}
function LT(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Uh = /* @__PURE__ */ function(e) {
  IT(t, e);
  function t(r, n) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o;
  }
  return t;
}(/* @__PURE__ */ $u(Error));
function jT(e, t, r, n, o) {
  if (t.first) {
    var i = new Promise(function(d, h) {
      var m = function(y) {
        return n(y), y.length ? h(new Uh(y, ku(y))) : d(o);
      }, p = LT(e);
      Wh(p, r, m);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, u = 0, l = [], f = new Promise(function(d, h) {
    var m = function(g) {
      if (l.push.apply(l, g), u++, u === c)
        return n(l), l.length ? h(new Uh(l, ku(l))) : d(o);
    };
    s.length || (n(l), d(o)), s.forEach(function(p) {
      var g = e[p];
      a.indexOf(p) !== -1 ? Wh(g, r, m) : kT(g, r, m);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function VT(e) {
  return !!(e && e.message !== void 0);
}
function zT(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function qh(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = zT(t, e.fullFields) : n = t[r.field || e.fullField], VT(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Qh(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = Rn({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var C0 = function(t, r, n, o, i, a) {
  t.required && (!n.hasOwnProperty(t.field) || Dt(r, a || t.type)) && o.push(lr(i.messages.required, t.fullField));
}, HT = function(t, r, n, o, i) {
  (/^\s+$/.test(r) || r === "") && o.push(lr(i.messages.whitespace, t.fullField));
}, oa, BT = function() {
  if (oa)
    return oa;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + r + "$)|(?:^" + o + "$)"), a = new RegExp("^" + r + "$"), s = new RegExp("^" + o + "$"), c = function(w) {
    return w && w.exact ? i : new RegExp("(?:" + t(w) + r + t(w) + ")|(?:" + t(w) + o + t(w) + ")", "g");
  };
  c.v4 = function(E) {
    return E && E.exact ? a : new RegExp("" + t(E) + r + t(E), "g");
  }, c.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + o + t(E), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, d = c.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', S = "(?:" + u + "|www\\.)" + l + "(?:localhost|" + f + "|" + d + "|" + h + m + p + ")" + g + y;
  return oa = new RegExp("(?:^" + S + "$)", "i"), oa;
}, Gh = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Xo = {
  integer: function(t) {
    return Xo.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Xo.number(t) && !Xo.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Xo.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Gh.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(BT());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Gh.hex);
  }
}, WT = function(t, r, n, o, i) {
  if (t.required && r === void 0) {
    C0(t, r, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Xo[s](r) || o.push(lr(i.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && o.push(lr(i.messages.types[s], t.fullField, t.type));
}, UT = function(t, r, n, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, f = null, d = typeof r == "number", h = typeof r == "string", m = Array.isArray(r);
  if (d ? f = "number" : h ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (l = r.length), h && (l = r.replace(u, "_").length), a ? l !== t.len && o.push(lr(i.messages[f].len, t.fullField, t.len)) : s && !c && l < t.min ? o.push(lr(i.messages[f].min, t.fullField, t.min)) : c && !s && l > t.max ? o.push(lr(i.messages[f].max, t.fullField, t.max)) : s && c && (l < t.min || l > t.max) && o.push(lr(i.messages[f].range, t.fullField, t.min, t.max));
}, Xn = "enum", qT = function(t, r, n, o, i) {
  t[Xn] = Array.isArray(t[Xn]) ? t[Xn] : [], t[Xn].indexOf(r) === -1 && o.push(lr(i.messages[Xn], t.fullField, t[Xn].join(", ")));
}, QT = function(t, r, n, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(lr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || o.push(lr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, je = {
  required: C0,
  whitespace: HT,
  type: WT,
  range: UT,
  enum: qT,
  pattern: QT
}, GT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "string") && !t.required)
      return n();
    je.required(t, r, o, a, i, "string"), Dt(r, "string") || (je.type(t, r, o, a, i), je.range(t, r, o, a, i), je.pattern(t, r, o, a, i), t.whitespace === !0 && je.whitespace(t, r, o, a, i));
  }
  n(a);
}, KT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, YT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, XT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, JT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), Dt(r) || je.type(t, r, o, a, i);
  }
  n(a);
}, ZT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, eR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, tR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    je.required(t, r, o, a, i, "array"), r != null && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, rR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, nR = "enum", oR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je[nR](t, r, o, a, i);
  }
  n(a);
}, iR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "string") && !t.required)
      return n();
    je.required(t, r, o, a, i), Dt(r, "string") || je.pattern(t, r, o, a, i);
  }
  n(a);
}, aR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "date") && !t.required)
      return n();
    if (je.required(t, r, o, a, i), !Dt(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), je.type(t, c, o, a, i), c && je.range(t, c.getTime(), o, a, i);
    }
  }
  n(a);
}, sR = function(t, r, n, o, i) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  je.required(t, r, o, a, i, s), n(a);
}, yc = function(t, r, n, o, i) {
  var a = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (Dt(r, a) && !t.required)
      return n();
    je.required(t, r, o, s, i, a), Dt(r, a) || je.type(t, r, o, s, i);
  }
  n(s);
}, cR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, o, a, i);
  }
  n(a);
}, ni = {
  string: GT,
  method: KT,
  number: YT,
  boolean: XT,
  regexp: JT,
  integer: ZT,
  float: eR,
  array: tR,
  object: rR,
  enum: oR,
  pattern: iR,
  date: aR,
  url: yc,
  hex: yc,
  email: yc,
  required: sR,
  any: cR
};
function Lu() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ju = Lu(), $i = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = ju, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var o = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var a = n[i];
      o.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(n) {
    return n && (this._messages = Qh(Lu(), n)), this._messages;
  }, t.validate = function(n, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var s = n, c = o, u = i;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function l(p) {
      var g = [], y = {};
      function S(w) {
        if (Array.isArray(w)) {
          var b;
          g = (b = g).concat.apply(b, w);
        } else
          g.push(w);
      }
      for (var E = 0; E < p.length; E++)
        S(p[E]);
      g.length ? (y = ku(g), u(g, y)) : u(null, s);
    }
    if (c.messages) {
      var f = this.messages();
      f === ju && (f = Lu()), Qh(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var d = {}, h = c.keys || Object.keys(this.rules);
    h.forEach(function(p) {
      var g = a.rules[p], y = s[p];
      g.forEach(function(S) {
        var E = S;
        typeof E.transform == "function" && (s === n && (s = Rn({}, s)), y = s[p] = E.transform(y)), typeof E == "function" ? E = {
          validator: E
        } : E = Rn({}, E), E.validator = a.getValidationMethod(E), E.validator && (E.field = p, E.fullField = E.fullField || p, E.type = a.getType(E), d[p] = d[p] || [], d[p].push({
          rule: E,
          value: y,
          source: s,
          field: p
        }));
      });
    });
    var m = {};
    return jT(d, c, function(p, g) {
      var y = p.rule, S = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      S = S && (y.required || !y.required && p.value), y.field = p.field;
      function E(C, O) {
        return Rn({}, O, {
          fullField: y.fullField + "." + C,
          fullFields: y.fullFields ? [].concat(y.fullFields, [C]) : [C]
        });
      }
      function w(C) {
        C === void 0 && (C = []);
        var O = Array.isArray(C) ? C : [C];
        !c.suppressWarning && O.length && e.warning("async-validator:", O), O.length && y.message !== void 0 && (O = [].concat(y.message));
        var R = O.map(qh(y, s));
        if (c.first && R.length)
          return m[y.field] = 1, g(R);
        if (!S)
          g(R);
        else {
          if (y.required && !p.value)
            return y.message !== void 0 ? R = [].concat(y.message).map(qh(y, s)) : c.error && (R = [c.error(y, lr(c.messages.required, y.field))]), g(R);
          var M = {};
          y.defaultField && Object.keys(p.value).map(function(T) {
            M[T] = y.defaultField;
          }), M = Rn({}, M, p.rule.fields);
          var _ = {};
          Object.keys(M).forEach(function(T) {
            var x = M[T], P = Array.isArray(x) ? x : [x];
            _[T] = P.map(E.bind(null, T));
          });
          var $ = new e(_);
          $.messages(c.messages), p.rule.options && (p.rule.options.messages = c.messages, p.rule.options.error = c.error), $.validate(p.value, p.rule.options || c, function(T) {
            var x = [];
            R && R.length && x.push.apply(x, R), T && T.length && x.push.apply(x, T), g(x.length ? x : null);
          });
        }
      }
      var b;
      if (y.asyncValidator)
        b = y.asyncValidator(y, p.value, w, p.source, c);
      else if (y.validator) {
        try {
          b = y.validator(y, p.value, w, p.source, c);
        } catch (C) {
          console.error?.(C), c.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), w(C.message);
        }
        b === !0 ? w() : b === !1 ? w(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : b instanceof Array ? w(b) : b instanceof Error && w(b.message);
      }
      b && b.then && b.then(function() {
        return w();
      }, function(C) {
        return w(C);
      });
    }, function(p) {
      l(p);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !ni.hasOwnProperty(n.type))
      throw new Error(lr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? ni.required : ni[this.getType(n)] || void 0;
  }, e;
}();
$i.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ni[t] = r;
};
$i.warning = w0;
$i.messages = ju;
$i.validators = ni;
var cr = "'${name}' is not a valid ${type}", O0 = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: cr,
    method: cr,
    array: cr,
    object: cr,
    number: cr,
    date: cr,
    boolean: cr,
    integer: cr,
    float: cr,
    regexp: cr,
    email: cr,
    url: cr,
    hex: cr
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Kh = $i;
function uR(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Yh = "CODE_LOGIC_ERROR";
function Vu(e, t, r, n, o) {
  return zu.apply(this, arguments);
}
function zu() {
  return zu = Ao(/* @__PURE__ */ hr().mark(function e(t, r, n, o, i) {
    var a, s, c, u, l, f, d, h, m;
    return hr().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return a = W({}, n), delete a.ruleIndex, Kh.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (y) {
                return console.error(y), Promise.reject(Yh);
              }
            }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), u = new Kh(ye({}, t, [a])), l = uo(O0, o.validateMessages), u.messages(l), f = [], g.prev = 10, g.next = 13, Promise.resolve(u.validate(ye({}, t, r), W({}, o)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(y, S) {
              var E = y.message, w = E === Yh ? l.default : E;
              return /* @__PURE__ */ v.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ v.cloneElement(w, {
                  key: "error_".concat(S)
                })
              ) : w;
            }));
          case 18:
            if (!(!f.length && c)) {
              g.next = 23;
              break;
            }
            return g.next = 21, Promise.all(r.map(function(y, S) {
              return Vu("".concat(t, ".").concat(S), y, c, o, i);
            }));
          case 21:
            return d = g.sent, g.abrupt("return", d.reduce(function(y, S) {
              return [].concat(be(y), be(S));
            }, []));
          case 23:
            return h = W(W({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), m = f.map(function(y) {
              return typeof y == "string" ? uR(y, h) : y;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), zu.apply(this, arguments);
}
function lR(e, t, r, n, o, i) {
  var a = e.join("."), s = r.map(function(l, f) {
    var d = l.validator, h = W(W({}, l), {}, {
      ruleIndex: f
    });
    return d && (h.validator = function(m, p, g) {
      var y = !1, S = function() {
        for (var b = arguments.length, C = new Array(b), O = 0; O < b; O++)
          C[O] = arguments[O];
        Promise.resolve().then(function() {
          ke(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || g.apply(void 0, C);
        });
      }, E = d(m, p, S);
      y = E && typeof E.then == "function" && typeof E.catch == "function", ke(y, "`callback` is deprecated. Please return a promise instead."), y && E.then(function() {
        g();
      }).catch(function(w) {
        g(w || " ");
      });
    }), h;
  }).sort(function(l, f) {
    var d = l.warningOnly, h = l.ruleIndex, m = f.warningOnly, p = f.ruleIndex;
    return !!d == !!m ? h - p : d ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var l = Ao(/* @__PURE__ */ hr().mark(function f(d, h) {
        var m, p, g;
        return hr().wrap(function(S) {
          for (; ; )
            switch (S.prev = S.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < s.length)) {
                  S.next = 12;
                  break;
                }
                return p = s[m], S.next = 5, Vu(a, t, p, n, i);
              case 5:
                if (g = S.sent, !g.length) {
                  S.next = 9;
                  break;
                }
                return h([{
                  errors: g,
                  rule: p
                }]), S.abrupt("return");
              case 9:
                m += 1, S.next = 1;
                break;
              case 12:
                d([]);
              case 13:
              case "end":
                return S.stop();
            }
        }, f);
      }));
      return function(f, d) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(l) {
      return Vu(a, t, l, n, i).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    c = (o ? dR(u) : fR(u)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function fR(e) {
  return Hu.apply(this, arguments);
}
function Hu() {
  return Hu = Ao(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(o) {
              var i, a = (i = []).concat.apply(i, be(o));
              return a;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Hu.apply(this, arguments);
}
function dR(e) {
  return Bu.apply(this, arguments);
}
function Bu() {
  return Bu = Ao(/* @__PURE__ */ hr().mark(function e(t) {
    var r;
    return hr().wrap(function(o) {
      for (; ; )
        switch (o.prev = o.next) {
          case 0:
            return r = 0, o.abrupt("return", new Promise(function(i) {
              t.forEach(function(a) {
                a.then(function(s) {
                  s.errors.length && i([s]), r += 1, r === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return o.stop();
        }
    }, e);
  })), Bu.apply(this, arguments);
}
function Ot(e) {
  return Du(e);
}
function Xh(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = Pr(e, n);
    r = xr(r, n, o);
  }), r;
}
function oi(e, t) {
  return e && e.some(function(r) {
    return x0(r, t);
  });
}
function x0(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
function hR(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Be(e) !== "object" || Be(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return be(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function vR(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Be(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Jh(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], i = t - r;
  return i > 0 ? [].concat(be(e.slice(0, r)), [o], be(e.slice(r, t)), be(e.slice(t + 1, n))) : i < 0 ? [].concat(be(e.slice(0, t)), be(e.slice(t + 1, r + 1)), [o], be(e.slice(r + 1, n))) : e;
}
var pR = ["name"], pr = [];
function Zh(e, t, r, n, o, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var uf = /* @__PURE__ */ function(e) {
  Ri(r, e);
  var t = Pi(r);
  function r(n) {
    var o;
    if (br(this, r), o = t.call(this, n), o.state = {
      resetCount: 0
    }, o.cancelRegisterFunc = null, o.mounted = !1, o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.prevValidating = void 0, o.errors = pr, o.warnings = pr, o.cancelRegister = function() {
      var c = o.props, u = c.preserve, l = c.isListField, f = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(l, u, Ot(f)), o.cancelRegisterFunc = null;
    }, o.getNamePath = function() {
      var c = o.props, u = c.name, l = c.fieldContext, f = l.prefixName, d = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(be(d), be(u)) : [];
    }, o.getRules = function() {
      var c = o.props, u = c.rules, l = u === void 0 ? [] : u, f = c.fieldContext;
      return l.map(function(d) {
        return typeof d == "function" ? d(f) : d;
      });
    }, o.refresh = function() {
      o.mounted && o.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }, o.metaCache = null, o.triggerMetaEvent = function(c) {
      var u = o.props.onMetaChange;
      if (u) {
        var l = W(W({}, o.getMeta()), {}, {
          destroy: c
        });
        gm(o.metaCache, l) || u(l), o.metaCache = l;
      } else
        o.metaCache = null;
    }, o.onStoreChange = function(c, u, l) {
      var f = o.props, d = f.shouldUpdate, h = f.dependencies, m = h === void 0 ? [] : h, p = f.onReset, g = l.store, y = o.getNamePath(), S = o.getValue(c), E = o.getValue(g), w = u && oi(u, y);
      switch (l.type === "valueUpdate" && l.source === "external" && S !== E && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = pr, o.warnings = pr, o.triggerMetaEvent()), l.type) {
        case "reset":
          if (!u || w) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = pr, o.warnings = pr, o.triggerMetaEvent(), p?.(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (d) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (w) {
            var b = l.data;
            "touched" in b && (o.touched = b.touched), "validating" in b && !("originRCField" in b) && (o.validatePromise = b.validating ? Promise.resolve([]) : null), "errors" in b && (o.errors = b.errors || pr), "warnings" in b && (o.warnings = b.warnings || pr), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          }
          if (d && !y.length && Zh(d, c, g, S, E, l)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = m.map(Ot);
          if (C.some(function(O) {
            return oi(l.relatedFields, O);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!m.length || y.length || d) && Zh(d, c, g, S, E, l)) {
            o.reRender();
            return;
          }
          break;
      }
      d === !0 && o.reRender();
    }, o.validateRules = function(c) {
      var u = o.getNamePath(), l = o.getValue(), f = c || {}, d = f.triggerName, h = f.validateOnly, m = h === void 0 ? !1 : h, p = Promise.resolve().then(function() {
        if (!o.mounted)
          return [];
        var g = o.props, y = g.validateFirst, S = y === void 0 ? !1 : y, E = g.messageVariables, w = o.getRules();
        d && (w = w.filter(function(C) {
          return C;
        }).filter(function(C) {
          var O = C.validateTrigger;
          if (!O)
            return !0;
          var R = Du(O);
          return R.includes(d);
        }));
        var b = lR(u, l, w, c, S, E);
        return b.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pr;
          if (o.validatePromise === p) {
            var O;
            o.validatePromise = null;
            var R = [], M = [];
            (O = C.forEach) === null || O === void 0 || O.call(C, function(_) {
              var $ = _.rule.warningOnly, T = _.errors, x = T === void 0 ? pr : T;
              $ ? M.push.apply(M, be(x)) : R.push.apply(R, be(x));
            }), o.errors = R, o.warnings = M, o.triggerMetaEvent(), o.reRender();
          }
        }), b;
      });
      return m || (o.validatePromise = p, o.dirty = !0, o.errors = pr, o.warnings = pr, o.triggerMetaEvent(), o.reRender()), p;
    }, o.isFieldValidating = function() {
      return !!o.validatePromise;
    }, o.isFieldTouched = function() {
      return o.touched;
    }, o.isFieldDirty = function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, u = c.getInternalHooks(Tn), l = u.getInitialValue;
      return l(o.getNamePath()) !== void 0;
    }, o.getErrors = function() {
      return o.errors;
    }, o.getWarnings = function() {
      return o.warnings;
    }, o.isListField = function() {
      return o.props.isListField;
    }, o.isList = function() {
      return o.props.isList;
    }, o.isPreserve = function() {
      return o.props.preserve;
    }, o.getMeta = function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }, o.getOnlyChild = function(c) {
      if (typeof c == "function") {
        var u = o.getMeta();
        return W(W({}, o.getOnlyChild(c(o.getControlled(), u, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Dn(c);
      return l.length !== 1 || !/* @__PURE__ */ v.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }, o.getValue = function(c) {
      var u = o.props.fieldContext.getFieldsValue, l = o.getNamePath();
      return Pr(c || u(!0), l);
    }, o.getControlled = function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.props, l = u.trigger, f = u.validateTrigger, d = u.getValueFromEvent, h = u.normalize, m = u.valuePropName, p = u.getValueProps, g = u.fieldContext, y = f !== void 0 ? f : g.validateTrigger, S = o.getNamePath(), E = g.getInternalHooks, w = g.getFieldsValue, b = E(Tn), C = b.dispatch, O = o.getValue(), R = p || function(T) {
        return ye({}, m, T);
      }, M = c[l], _ = W(W({}, c), R(O));
      _[l] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var T, x = arguments.length, P = new Array(x), A = 0; A < x; A++)
          P[A] = arguments[A];
        d ? T = d.apply(void 0, P) : T = vR.apply(void 0, [m].concat(P)), h && (T = h(T, O, w(!0))), C({
          type: "updateValue",
          namePath: S,
          value: T
        }), M && M.apply(void 0, P);
      };
      var $ = Du(y || []);
      return $.forEach(function(T) {
        var x = _[T];
        _[T] = function() {
          x && x.apply(void 0, arguments);
          var P = o.props.rules;
          P && P.length && C({
            type: "validateField",
            namePath: S,
            triggerName: T
          });
        };
      }), _;
    }, n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, a = i(Tn), s = a.initEntityValue;
      s(Da(o));
    }
    return o;
  }
  return Sr(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(Tn), u = c.registerField;
        this.cancelRegisterFunc = u(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, i = this.props.children, a = this.getOnlyChild(i), s = a.child, c = a.isFunction, u;
      return c ? u = s : /* @__PURE__ */ v.isValidElement(s) ? u = /* @__PURE__ */ v.cloneElement(s, this.getControlled(s.props)) : (ke(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ v.createElement(v.Fragment, {
        key: o
      }, u);
    }
  }]), r;
}(v.Component);
uf.contextType = _o;
uf.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function _0(e) {
  var t = e.name, r = Mt(e, pR), n = v.useContext(_o), o = v.useContext(Ga), i = t !== void 0 ? Ot(t) : void 0, a = "keep";
  return r.isListField || (a = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && ke(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(uf, Ze({
    key: a,
    name: i,
    isListField: !!o
  }, r, {
    fieldContext: n
  }));
}
function mR(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = v.useContext(_o), c = v.useContext(Ga), u = v.useRef({
    keys: [],
    id: 0
  }), l = u.current, f = v.useMemo(function() {
    var p = Ot(s.prefixName) || [];
    return [].concat(be(p), be(Ot(t)));
  }, [s.prefixName, t]), d = v.useMemo(function() {
    return W(W({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), h = v.useMemo(function() {
    return {
      getKey: function(g) {
        var y = f.length, S = g[y];
        return [l.keys[S], g.slice(y + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return ke(!1, "Form.List only accepts function as children."), null;
  var m = function(g, y, S) {
    var E = S.source;
    return E === "internal" ? !1 : g !== y;
  };
  return /* @__PURE__ */ v.createElement(Ga.Provider, {
    value: h
  }, /* @__PURE__ */ v.createElement(_o.Provider, {
    value: d
  }, /* @__PURE__ */ v.createElement(_0, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: a ?? !!c
  }, function(p, g) {
    var y = p.value, S = y === void 0 ? [] : y, E = p.onChange, w = s.getFieldValue, b = function() {
      var M = w(f || []);
      return M || [];
    }, C = {
      add: function(M, _) {
        var $ = b();
        _ >= 0 && _ <= $.length ? (l.keys = [].concat(be(l.keys.slice(0, _)), [l.id], be(l.keys.slice(_))), E([].concat(be($.slice(0, _)), [M], be($.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > $.length) && ke(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(be(l.keys), [l.id]), E([].concat(be($), [M]))), l.id += 1;
      },
      remove: function(M) {
        var _ = b(), $ = new Set(Array.isArray(M) ? M : [M]);
        $.size <= 0 || (l.keys = l.keys.filter(function(T, x) {
          return !$.has(x);
        }), E(_.filter(function(T, x) {
          return !$.has(x);
        })));
      },
      move: function(M, _) {
        if (M !== _) {
          var $ = b();
          M < 0 || M >= $.length || _ < 0 || _ >= $.length || (l.keys = Jh(l.keys, M, _), E(Jh($, M, _)));
        }
      }
    }, O = S || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && ke(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(O.map(function(R, M) {
      var _ = l.keys[M];
      return _ === void 0 && (l.keys[M] = l.id, _ = l.keys[M], l.id += 1), {
        name: M,
        key: _,
        isListField: !0
      };
    }), C, g);
  })));
}
function gR(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, s) {
      a.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        r -= 1, n[s] = c, !(r > 0) && (t && i(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var T0 = "__@field_split__";
function bc(e) {
  return e.map(function(t) {
    return "".concat(Be(t), ":").concat(t);
  }).join(T0);
}
var Jn = /* @__PURE__ */ function() {
  function e() {
    br(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return Sr(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(bc(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(bc(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), i = n(o);
      i ? this.set(r, i) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(bc(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return be(this.kvs.entries()).map(function(n) {
        var o = G(n, 2), i = o[0], a = o[1], s = i.split(T0);
        return r({
          key: s.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), l = G(u, 3), f = l[1], d = l[2];
            return f === "number" ? Number(d) : d;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, i = n.value;
        return r[o.join(".")] = i, null;
      }), r;
    }
  }]), e;
}(), yR = ["name"], bR = /* @__PURE__ */ Sr(function e(t) {
  var r = this;
  br(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }, this.getInternalHooks = function(n) {
    return n === Tn ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (ke(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(n) {
    r.subscribable = n;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, o) {
    if (r.initialValues = n || {}, o) {
      var i, a = uo(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = xr(a, c, Pr(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }, this.destroyForm = function() {
    var n = new Jn();
    r.getFieldEntities(!0).forEach(function(o) {
      r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var o = Pr(r.initialValues, n);
    return n.length ? uo(o) : o;
  }, this.setCallbacks = function(n) {
    r.callbacks = n;
  }, this.setValidateMessages = function(n) {
    r.validateMessages = n;
  }, this.setPreserve = function(n) {
    r.preserve = n;
  }, this.watchList = [], this.registerWatch = function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }, this.notifyWatch = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), i = r.getFieldsValue(!0);
      r.watchList.forEach(function(a) {
        a(o, i, n);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || ke(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(n) {
    r.store = n;
  }, this.getFieldEntities = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }, this.getFieldsMap = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Jn();
    return r.getFieldEntities(n).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }, this.getFieldEntitiesForNamePathList = function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(i) {
      var a = Ot(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: Ot(i)
      };
    });
  }, this.getFieldsValue = function(n, o) {
    r.warningUnhooked();
    var i, a, s;
    if (n === !0 || Array.isArray(n) ? (i = n, a = o) : n && Be(n) === "object" && (s = n.strict, a = n.filter), i === !0 && !a)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), u = [];
    return c.forEach(function(l) {
      var f, d = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var h;
        if (!((h = l.isList) === null || h === void 0) && h.call(l))
          return;
      } else if (!i && (!((f = l.isListField) === null || f === void 0) && f.call(l)))
        return;
      if (!a)
        u.push(d);
      else {
        var m = "getMeta" in l ? l.getMeta() : null;
        a(m) && u.push(d);
      }
    }), Xh(r.store, u.map(Ot));
  }, this.getFieldValue = function(n) {
    r.warningUnhooked();
    var o = Ot(n);
    return Pr(r.store, o);
  }, this.getFieldsError = function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(i, a) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: Ot(n[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(n) {
    r.warningUnhooked();
    var o = Ot(n), i = r.getFieldsError([o])[0];
    return i.errors;
  }, this.getFieldWarning = function(n) {
    r.warningUnhooked();
    var o = Ot(n), i = r.getFieldsError([o])[0];
    return i.warnings;
  }, this.isFieldsTouched = function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], c, u = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(a) ? (c = a.map(Ot), u = !1) : (c = null, u = a) : (c = a.map(Ot), u = s);
    var l = r.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!c)
      return u ? l.every(f) : l.some(f);
    var d = new Jn();
    c.forEach(function(p) {
      d.set(p, []);
    }), l.forEach(function(p) {
      var g = p.getNamePath();
      c.forEach(function(y) {
        y.every(function(S, E) {
          return g[E] === S;
        }) && d.update(y, function(S) {
          return [].concat(be(S), [p]);
        });
      });
    });
    var h = function(g) {
      return g.some(f);
    }, m = d.map(function(p) {
      var g = p.value;
      return g;
    });
    return u ? m.every(h) : m.some(h);
  }, this.isFieldTouched = function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }, this.isFieldsValidating = function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(a) {
        return a.isFieldValidating();
      });
    var i = n.map(Ot);
    return o.some(function(a) {
      var s = a.getNamePath();
      return oi(i, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Jn(), i = r.getFieldEntities(!0);
    i.forEach(function(c) {
      var u = c.props.initialValue, l = c.getNamePath();
      if (u !== void 0) {
        var f = o.get(l) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: u
        }), o.set(l, f);
      }
    });
    var a = function(u) {
      u.forEach(function(l) {
        var f = l.props.initialValue;
        if (f !== void 0) {
          var d = l.getNamePath(), h = r.getInitialValue(d);
          if (h !== void 0)
            ke(!1, "Form already set 'initialValues' with path '".concat(d.join("."), "'. Field can not overwrite it."));
          else {
            var m = o.get(d);
            if (m && m.size > 1)
              ke(!1, "Multiple Field with path '".concat(d.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var p = r.getFieldValue(d);
              (!n.skipExist || p === void 0) && r.updateStore(xr(r.store, d, be(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var u = o.get(c);
      if (u) {
        var l;
        (l = s).push.apply(l, be(be(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, a(s);
  }, this.resetFields = function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(uo(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(Ot);
    i.forEach(function(a) {
      var s = r.getInitialValue(a);
      r.updateStore(xr(r.store, a, s));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(o, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }, this.setFields = function(n) {
    r.warningUnhooked();
    var o = r.store, i = [];
    n.forEach(function(a) {
      var s = a.name, c = Mt(a, yR), u = Ot(s);
      i.push(u), "value" in c && r.updateStore(xr(r.store, u, c.value)), r.notifyObservers(o, [u], {
        type: "setField",
        data: a
      });
    }), r.notifyWatch(i);
  }, this.getFields = function() {
    var n = r.getFieldEntities(!0), o = n.map(function(i) {
      var a = i.getNamePath(), s = i.getMeta(), c = W(W({}, s), {}, {
        name: a,
        value: r.getFieldValue(a)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }, this.initEntityValue = function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var i = n.getNamePath(), a = Pr(r.store, i);
      a === void 0 && r.updateStore(xr(r.store, i, o));
    }
  }, this.isMergedPreserve = function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }, this.registerField = function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var i = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(f) {
        return f !== n;
      }), !r.isMergedPreserve(s) && (!a || c.length > 1)) {
        var u = a ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== u && r.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !x0(f.getNamePath(), o)
          );
        })) {
          var l = r.store;
          r.updateStore(xr(l, o, u, !0)), r.notifyObservers(l, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(l, o);
        }
      }
      r.notifyWatch([o]);
    };
  }, this.dispatch = function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, i = n.value;
        r.updateValue(o, i);
        break;
      }
      case "validateField": {
        var a = n.namePath, s = n.triggerName;
        r.validateFields([a], {
          triggerName: s
        });
        break;
      }
    }
  }, this.notifyObservers = function(n, o, i) {
    if (r.subscribable) {
      var a = W(W({}, i), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, o, a);
      });
    } else
      r.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(n, o) {
    var i = r.getDependencyChildrenFields(o);
    return i.length && r.validateFields(i), r.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(be(i))
    }), i;
  }, this.updateValue = function(n, o) {
    var i = Ot(n), a = r.store;
    r.updateStore(xr(r.store, i, o)), r.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(a, i), c = r.callbacks.onValuesChange;
    if (c) {
      var u = Xh(r.store, [i]);
      c(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(be(s)));
  }, this.setFieldsValue = function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var i = uo(r.store, n);
      r.updateStore(i);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }, this.setFieldValue = function(n, o) {
    r.setFields([{
      name: n,
      value: o
    }]);
  }, this.getDependencyChildrenFields = function(n) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new Jn();
    r.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(l) {
        var f = Ot(l);
        a.update(f, function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return d.add(c), d;
        });
      });
    });
    var s = function c(u) {
      var l = a.get(u) || /* @__PURE__ */ new Set();
      l.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var d = f.getNamePath();
          f.isFieldDirty() && d.length && (i.push(d), c(d));
        }
      });
    };
    return s(n), i;
  }, this.triggerOnFieldsChange = function(n, o) {
    var i = r.callbacks.onFieldsChange;
    if (i) {
      var a = r.getFields();
      if (o) {
        var s = new Jn();
        o.forEach(function(u) {
          var l = u.name, f = u.errors;
          s.set(l, f);
        }), a.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = a.filter(function(u) {
        var l = u.name;
        return oi(n, l);
      });
      c.length && i(c, a);
    }
  }, this.validateFields = function(n, o) {
    r.warningUnhooked();
    var i, a;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (i = n, a = o) : a = n;
    var s = !!i, c = s ? i.map(Ot) : [], u = [], l = String(Date.now()), f = /* @__PURE__ */ new Set();
    r.getFieldEntities(!0).forEach(function(p) {
      var g;
      if (s || c.push(p.getNamePath()), !((g = a) === null || g === void 0) && g.recursive && s) {
        var y = p.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        y.every(function(w, b) {
          return i[b] === w || i[b] === void 0;
        }) && c.push(y);
      }
      if (!(!p.props.rules || !p.props.rules.length)) {
        var S = p.getNamePath();
        if (f.add(S.join(l)), !s || oi(c, S)) {
          var E = p.validateRules(W({
            validateMessages: W(W({}, O0), r.validateMessages)
          }, a));
          u.push(E.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var b, C = [], O = [];
            return (b = w.forEach) === null || b === void 0 || b.call(w, function(R) {
              var M = R.rule.warningOnly, _ = R.errors;
              M ? O.push.apply(O, be(_)) : C.push.apply(C, be(_));
            }), C.length ? Promise.reject({
              name: S,
              errors: C,
              warnings: O
            }) : {
              name: S,
              errors: C,
              warnings: O
            };
          }));
        }
      }
    });
    var d = gR(u);
    r.lastValidatePromise = d, d.catch(function(p) {
      return p;
    }).then(function(p) {
      var g = p.map(function(y) {
        var S = y.name;
        return S;
      });
      r.notifyObservers(r.store, g, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(g, p);
    });
    var h = d.then(function() {
      return r.lastValidatePromise === d ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var g = p.filter(function(y) {
        return y && y.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(c),
        errorFields: g,
        outOfDate: r.lastValidatePromise !== d
      });
    });
    h.catch(function(p) {
      return p;
    });
    var m = c.filter(function(p) {
      return f.has(p.join(l));
    });
    return r.triggerOnFieldsChange(m), h;
  }, this.submit = function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }, this.forceRootUpdate = t;
});
function R0(e) {
  var t = v.useRef(), r = v.useState({}), n = G(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new bR(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Wu = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), SR = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, i = t.children, a = v.useContext(Wu), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(Wu.Provider, {
    value: W(W({}, a), {}, {
      validateMessages: W(W({}, a.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, l) {
        n && n(u, {
          changedFields: l,
          forms: s.current
        }), a.triggerFormChange(u, l);
      },
      triggerFormFinish: function(u, l) {
        o && o(u, {
          values: l,
          forms: s.current
        }), a.triggerFormFinish(u, l);
      },
      registerForm: function(u, l) {
        u && (s.current = W(W({}, s.current), {}, ye({}, u, l))), a.registerForm(u, l);
      },
      unregisterForm: function(u) {
        var l = W({}, s.current);
        delete l[u], s.current = l, a.unregisterForm(u);
      }
    })
  }, i);
}, ER = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], wR = function(t, r) {
  var n = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, c = t.children, u = t.component, l = u === void 0 ? "form" : u, f = t.validateMessages, d = t.validateTrigger, h = d === void 0 ? "onChange" : d, m = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, y = t.onFinishFailed, S = Mt(t, ER), E = v.useContext(Wu), w = R0(a), b = G(w, 1), C = b[0], O = C.getInternalHooks(Tn), R = O.useSubscribe, M = O.setInitialValues, _ = O.setCallbacks, $ = O.setValidateMessages, T = O.setPreserve, x = O.destroyForm;
  v.useImperativeHandle(r, function() {
    return C;
  }), v.useEffect(function() {
    return E.registerForm(n, C), function() {
      E.unregisterForm(n);
    };
  }, [E, C, n]), $(W(W({}, E.validateMessages), f)), _({
    onValuesChange: m,
    onFieldsChange: function(L) {
      if (E.triggerFormChange(n, L), p) {
        for (var H = arguments.length, z = new Array(H > 1 ? H - 1 : 0), J = 1; J < H; J++)
          z[J - 1] = arguments[J];
        p.apply(void 0, [L].concat(z));
      }
    },
    onFinish: function(L) {
      E.triggerFormFinish(n, L), g && g(L);
    },
    onFinishFailed: y
  }), T(s);
  var P = v.useRef(null);
  M(o, !P.current), P.current || (P.current = !0), v.useEffect(
    function() {
      return x;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var A, F = typeof c == "function";
  if (F) {
    var D = C.getFieldsValue(!0);
    A = c(D, C);
  } else
    A = c;
  R(!F);
  var B = v.useRef();
  v.useEffect(function() {
    hR(B.current || [], i || []) || C.setFields(i || []), B.current = i;
  }, [i, C]);
  var q = v.useMemo(function() {
    return W(W({}, C), {}, {
      validateTrigger: h
    });
  }, [C, h]), ne = /* @__PURE__ */ v.createElement(Ga.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(_o.Provider, {
    value: q
  }, A));
  return l === !1 ? ne : /* @__PURE__ */ v.createElement(l, Ze({}, S, {
    onSubmit: function(L) {
      L.preventDefault(), L.stopPropagation(), C.submit();
    },
    onReset: function(L) {
      var H;
      L.preventDefault(), C.resetFields(), (H = S.onReset) === null || H === void 0 || H.call(S, L);
    }
  }), ne);
};
function ev(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var CR = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = De(t);
  ke(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function OR() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = n === void 0 ? [] : n, i = t[1], a = i === void 0 ? {} : i, s = NT(a) ? {
    form: a
  } : a, c = s.form, u = fr(), l = G(u, 2), f = l[0], d = l[1], h = go(function() {
    return ev(f);
  }, [f]), m = De(h);
  m.current = h;
  var p = Gt(_o), g = c || p, y = g && g._init;
  process.env.NODE_ENV !== "production" && ke(t.length === 2 ? c ? y : !0 : y, "useWatch requires a form instance since it can not auto detect from context.");
  var S = Ot(o), E = De(S);
  return E.current = S, CR(S), Bt(
    function() {
      if (y) {
        var w = g.getFieldsValue, b = g.getInternalHooks, C = b(Tn), O = C.registerWatch, R = O(function(_, $) {
          var T = Pr(s.preserve ? $ : _, E.current), x = ev(T);
          m.current !== x && (m.current = x, d(T));
        }), M = Pr(s.preserve ? w(!0) : w(), E.current);
        return d(M), R;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), f;
}
var xR = /* @__PURE__ */ v.forwardRef(wR), ki = xR;
ki.FormProvider = SR;
ki.Field = _0;
ki.List = mR;
ki.useForm = R0;
ki.useWatch = OR;
const _R = /* @__PURE__ */ v.createContext({}), TR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), RR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), P0 = function(e, t, r, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, TR(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, RR(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, PR = new jt("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), MR = new jt("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), NR = new jt("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), IR = new jt("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), AR = new jt("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), DR = new jt("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), FR = new jt("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), $R = new jt("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), kR = {
  "move-up": {
    inKeyframes: FR,
    outKeyframes: $R
  },
  "move-down": {
    inKeyframes: PR,
    outKeyframes: MR
  },
  "move-left": {
    inKeyframes: NR,
    outKeyframes: IR
  },
  "move-right": {
    inKeyframes: AR,
    outKeyframes: DR
  }
}, tv = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = kR[t];
  return [P0(n, o, i, e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, M0 = new jt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), N0 = new jt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), I0 = new jt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), A0 = new jt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), LR = new jt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), jR = new jt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), VR = new jt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), zR = new jt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), HR = {
  "slide-up": {
    inKeyframes: M0,
    outKeyframes: N0
  },
  "slide-down": {
    inKeyframes: I0,
    outKeyframes: A0
  },
  "slide-left": {
    inKeyframes: LR,
    outKeyframes: jR
  },
  "slide-right": {
    inKeyframes: VR,
    outKeyframes: zR
  }
}, rv = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = HR[t];
  return [P0(n, o, i, e.motionDurationMid), {
    [`
      ${n}-enter,
      ${n}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function BR(e, t, r, n) {
  return function(i) {
    const {
      prefixCls: a,
      style: s
    } = i, c = v.useRef(null), [u, l] = v.useState(0), [f, d] = v.useState(0), [h, m] = za(!1, {
      value: i.open
    }), {
      getPrefixCls: p
    } = v.useContext(or), g = p(t || "select", a);
    v.useEffect(() => {
      if (m(!0), typeof ResizeObserver < "u") {
        const S = new ResizeObserver((w) => {
          const b = w[0].target;
          l(b.offsetHeight + 8), d(b.offsetWidth);
        }), E = setInterval(() => {
          var w;
          const b = r ? `.${r(g)}` : `.${g}-dropdown`, C = (w = c.current) === null || w === void 0 ? void 0 : w.querySelector(b);
          C && (clearInterval(E), S.observe(C));
        }, 10);
        return () => {
          clearInterval(E), S.disconnect();
        };
      }
    }, []);
    let y = Object.assign(Object.assign({}, i), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: h,
      visible: h,
      getPopupContainer: () => c.current
    });
    return n && (y = n(y)), /* @__PURE__ */ v.createElement(ql, {
      theme: {
        token: {
          motion: !1
        }
      }
    }, /* @__PURE__ */ v.createElement("div", {
      ref: c,
      style: {
        paddingBottom: u,
        position: "relative",
        minWidth: f
      }
    }, /* @__PURE__ */ v.createElement(e, Object.assign({}, y))));
  };
}
const D0 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var F0 = /* @__PURE__ */ v.createContext(null);
function WR() {
  return v.useContext(F0);
}
function UR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = v.useState(!1), r = G(t, 2), n = r[0], o = r[1], i = v.useRef(null), a = function() {
    window.clearTimeout(i.current);
  };
  v.useEffect(function() {
    return a;
  }, []);
  var s = function(u, l) {
    a(), i.current = window.setTimeout(function() {
      o(u), l && l();
    }, e);
  };
  return [n, s, a];
}
function $0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = v.useRef(null), r = v.useRef(null);
  v.useEffect(function() {
    return function() {
      window.clearTimeout(r.current);
    };
  }, []);
  function n(o) {
    (o || t.current === null) && (t.current = o), window.clearTimeout(r.current), r.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, n];
}
function qR(e, t, r, n) {
  var o = v.useRef(null);
  o.current = {
    open: t,
    triggerOpen: r,
    customizedTrigger: n
  }, v.useEffect(function() {
    function i(a) {
      var s;
      if (!((s = o.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var c = a.target;
        c.shadowRoot && a.composed && (c = a.composedPath()[0] || c), o.current.open && e().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(c) && u !== c;
        }) && o.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", i), function() {
      return window.removeEventListener("mousedown", i);
    };
  }, []);
}
var QR = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Zn = void 0;
function GR(e, t) {
  var r = e.prefixCls, n = e.invalidate, o = e.item, i = e.renderItem, a = e.responsive, s = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, l = e.className, f = e.style, d = e.children, h = e.display, m = e.order, p = e.component, g = p === void 0 ? "div" : p, y = Mt(e, QR), S = a && !h;
  function E(R) {
    c(u, R);
  }
  v.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var w = i && o !== Zn ? i(o) : d, b;
  n || (b = {
    opacity: S ? 0 : 1,
    height: S ? 0 : Zn,
    overflowY: S ? "hidden" : Zn,
    order: a ? m : Zn,
    pointerEvents: S ? "none" : Zn,
    position: S ? "absolute" : Zn
  });
  var C = {};
  S && (C["aria-hidden"] = !0);
  var O = /* @__PURE__ */ v.createElement(g, Ze({
    className: Ne(!n && r, l),
    style: W(W({}, b), f)
  }, C, y, {
    ref: t
  }), w);
  return a && (O = /* @__PURE__ */ v.createElement(kn, {
    onResize: function(M) {
      var _ = M.offsetWidth;
      E(_);
    },
    disabled: s
  }, O)), O;
}
var ii = /* @__PURE__ */ v.forwardRef(GR);
ii.displayName = "Item";
function KR(e) {
  if (typeof MessageChannel > "u")
    Wt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function YR() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], KR(function() {
      Fy(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Go(e, t) {
  var r = v.useState(t), n = G(r, 2), o = n[0], i = n[1], a = Rr(function(s) {
    e(function() {
      i(s);
    });
  });
  return [o, a];
}
var Ka = /* @__PURE__ */ Pe.createContext(null), XR = ["component"], JR = ["className"], ZR = ["className"], eP = function(t, r) {
  var n = v.useContext(Ka);
  if (!n) {
    var o = t.component, i = o === void 0 ? "div" : o, a = Mt(t, XR);
    return /* @__PURE__ */ v.createElement(i, Ze({}, a, {
      ref: r
    }));
  }
  var s = n.className, c = Mt(n, JR), u = t.className, l = Mt(t, ZR);
  return /* @__PURE__ */ v.createElement(Ka.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(ii, Ze({
    ref: r,
    className: Ne(s, u)
  }, c, l)));
}, k0 = /* @__PURE__ */ v.forwardRef(eP);
k0.displayName = "RawItem";
var tP = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], L0 = "responsive", j0 = "invalidate";
function rP(e) {
  return "+ ".concat(e.length, " ...");
}
function nP(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, o = e.data, i = o === void 0 ? [] : o, a = e.renderItem, s = e.renderRawItem, c = e.itemKey, u = e.itemWidth, l = u === void 0 ? 10 : u, f = e.ssr, d = e.style, h = e.className, m = e.maxCount, p = e.renderRest, g = e.renderRawRest, y = e.suffix, S = e.component, E = S === void 0 ? "div" : S, w = e.itemComponent, b = e.onVisibleChange, C = Mt(e, tP), O = f === "full", R = YR(), M = Go(R, null), _ = G(M, 2), $ = _[0], T = _[1], x = $ || 0, P = Go(R, /* @__PURE__ */ new Map()), A = G(P, 2), F = A[0], D = A[1], B = Go(R, 0), q = G(B, 2), ne = q[0], se = q[1], L = Go(R, 0), H = G(L, 2), z = H[0], J = H[1], I = Go(R, 0), Q = G(I, 2), k = Q[0], X = Q[1], re = fr(null), Y = G(re, 2), N = Y[0], Z = Y[1], j = fr(null), ee = G(j, 2), le = ee[0], ce = ee[1], de = v.useMemo(function() {
    return le === null && O ? Number.MAX_SAFE_INTEGER : le || 0;
  }, [le, $]), me = fr(!1), oe = G(me, 2), fe = oe[0], Me = oe[1], Ie = "".concat(n, "-item"), ie = Math.max(ne, z), ve = m === L0, et = i.length && ve, ot = m === j0, tt = et || typeof m == "number" && i.length > m, We = go(function() {
    var Ee = i;
    return et ? $ === null && O ? Ee = i : Ee = i.slice(0, Math.min(i.length, x / l)) : typeof m == "number" && (Ee = i.slice(0, m)), Ee;
  }, [i, l, $, m, et]), Ue = go(function() {
    return et ? i.slice(de + 1) : i.slice(We.length);
  }, [i, We, et, de]), it = _c(function(Ee, K) {
    var ae;
    return typeof c == "function" ? c(Ee) : (ae = c && Ee?.[c]) !== null && ae !== void 0 ? ae : K;
  }, [c]), Yt = _c(a || function(Ee) {
    return Ee;
  }, [a]);
  function rt(Ee, K, ae) {
    le === Ee && (K === void 0 || K === N) || (ce(Ee), ae || (Me(Ee < i.length - 1), b?.(Ee)), K !== void 0 && Z(K));
  }
  function he(Ee, K) {
    T(K.clientWidth);
  }
  function Se(Ee, K) {
    D(function(ae) {
      var ue = new Map(ae);
      return K === null ? ue.delete(Ee) : ue.set(Ee, K), ue;
    });
  }
  function Ve(Ee, K) {
    J(K), se(z);
  }
  function pt(Ee, K) {
    X(K);
  }
  function Fe(Ee) {
    return F.get(it(We[Ee], Ee));
  }
  _t(function() {
    if (x && typeof ie == "number" && We) {
      var Ee = k, K = We.length, ae = K - 1;
      if (!K) {
        rt(0, null);
        return;
      }
      for (var ue = 0; ue < K; ue += 1) {
        var ge = Fe(ue);
        if (O && (ge = ge || 0), ge === void 0) {
          rt(ue - 1, void 0, !0);
          break;
        }
        if (Ee += ge, // Only one means `totalWidth` is the final width
        ae === 0 && Ee <= x || // Last two width will be the final width
        ue === ae - 1 && Ee + Fe(ae) <= x) {
          rt(ae, null);
          break;
        } else if (Ee + ie > x) {
          rt(ue - 1, Ee - ge - k + z);
          break;
        }
      }
      y && Fe(0) + k > x && Z(null);
    }
  }, [x, F, z, k, it, We]);
  var qe = fe && !!Ue.length, Ce = {};
  N !== null && et && (Ce = {
    position: "absolute",
    left: N,
    top: 0
  });
  var ut = {
    prefixCls: Ie,
    responsive: et,
    component: w,
    invalidate: ot
  }, Tt = s ? function(Ee, K) {
    var ae = it(Ee, K);
    return /* @__PURE__ */ v.createElement(Ka.Provider, {
      key: ae,
      value: W(W({}, ut), {}, {
        order: K,
        item: Ee,
        itemKey: ae,
        registerSize: Se,
        display: K <= de
      })
    }, s(Ee, K));
  } : function(Ee, K) {
    var ae = it(Ee, K);
    return /* @__PURE__ */ v.createElement(ii, Ze({}, ut, {
      order: K,
      key: ae,
      item: Ee,
      renderItem: Yt,
      itemKey: ae,
      registerSize: Se,
      display: K <= de
    }));
  }, xe, ze = {
    order: qe ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ie, "-rest"),
    registerSize: Ve,
    display: qe
  };
  if (g)
    g && (xe = /* @__PURE__ */ v.createElement(Ka.Provider, {
      value: W(W({}, ut), ze)
    }, g(Ue)));
  else {
    var lt = p || rP;
    xe = /* @__PURE__ */ v.createElement(ii, Ze({}, ut, ze), typeof lt == "function" ? lt(Ue) : lt);
  }
  var vt = /* @__PURE__ */ v.createElement(E, Ze({
    className: Ne(!ot && n, h),
    style: d,
    ref: t
  }, C), We.map(Tt), tt ? xe : null, y && /* @__PURE__ */ v.createElement(ii, Ze({}, ut, {
    responsive: ve,
    responsiveDisabled: !et,
    order: de,
    className: "".concat(Ie, "-suffix"),
    registerSize: pt,
    display: !0,
    style: Ce
  }), y));
  return ve && (vt = /* @__PURE__ */ v.createElement(kn, {
    onResize: he,
    disabled: !et
  }, vt)), vt;
}
var Li = /* @__PURE__ */ v.forwardRef(nP);
Li.displayName = "Overflow";
Li.Item = k0;
Li.RESPONSIVE = L0;
Li.INVALIDATE = j0;
var Ps = function(t) {
  var r = t.className, n = t.customizeIcon, o = t.customizeIconProps, i = t.onMouseDown, a = t.onClick, s = t.children, c;
  return typeof n == "function" ? c = n(o) : c = n, /* @__PURE__ */ v.createElement("span", {
    className: r,
    onMouseDown: function(l) {
      l.preventDefault(), i && i(l);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: a,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ v.createElement("span", {
    className: Ne(r.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, s));
}, oP = function(t, r) {
  var n, o, i = t.prefixCls, a = t.id, s = t.inputElement, c = t.disabled, u = t.tabIndex, l = t.autoFocus, f = t.autoComplete, d = t.editable, h = t.activeDescendantId, m = t.value, p = t.maxLength, g = t.onKeyDown, y = t.onMouseDown, S = t.onChange, E = t.onPaste, w = t.onCompositionStart, b = t.onCompositionEnd, C = t.open, O = t.attrs, R = s || /* @__PURE__ */ v.createElement("input", null), M = R, _ = M.ref, $ = M.props, T = $.onKeyDown, x = $.onChange, P = $.onMouseDown, A = $.onCompositionStart, F = $.onCompositionEnd, D = $.style;
  return di(!("maxLength" in R.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), R = /* @__PURE__ */ v.cloneElement(R, W(W(W({
    type: "search"
  }, $), {}, {
    // Override over origin props
    id: a,
    ref: No(r, _),
    disabled: c,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: l,
    className: Ne("".concat(i, "-selection-search-input"), (n = R) === null || n === void 0 || (o = n.props) === null || o === void 0 ? void 0 : o.className),
    role: "combobox",
    "aria-expanded": C,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": C ? h : void 0
  }, O), {}, {
    value: d ? m : "",
    maxLength: p,
    readOnly: !d,
    unselectable: d ? null : "on",
    style: W(W({}, D), {}, {
      opacity: d ? null : 0
    }),
    onKeyDown: function(q) {
      g(q), T && T(q);
    },
    onMouseDown: function(q) {
      y(q), P && P(q);
    },
    onChange: function(q) {
      S(q), x && x(q);
    },
    onCompositionStart: function(q) {
      w(q), A && A(q);
    },
    onCompositionEnd: function(q) {
      b(q), F && F(q);
    },
    onPaste: E
  })), R;
}, lf = /* @__PURE__ */ v.forwardRef(oP);
lf.displayName = "Input";
function ff(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var iP = typeof window < "u" && window.document && window.document.documentElement, aP = process.env.NODE_ENV !== "test" && iP;
function sP(e) {
  return e != null;
}
function cP(e) {
  return !e && e !== 0;
}
function nv(e) {
  return ["string", "number"].includes(Be(e));
}
function V0(e) {
  var t = void 0;
  return e && (nv(e.title) ? t = e.title.toString() : nv(e.label) && (t = e.label.toString())), t;
}
function uP(e, t) {
  aP ? v.useLayoutEffect(e, t) : v.useEffect(e, t);
}
function lP(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var ov = function(t) {
  t.preventDefault(), t.stopPropagation();
}, fP = function(t) {
  var r = t.id, n = t.prefixCls, o = t.values, i = t.open, a = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, l = t.disabled, f = t.mode, d = t.showSearch, h = t.autoFocus, m = t.autoComplete, p = t.activeDescendantId, g = t.tabIndex, y = t.removeIcon, S = t.maxTagCount, E = t.maxTagTextLength, w = t.maxTagPlaceholder, b = w === void 0 ? function(Z) {
    return "+ ".concat(Z.length, " ...");
  } : w, C = t.tagRender, O = t.onToggleOpen, R = t.onRemove, M = t.onInputChange, _ = t.onInputPaste, $ = t.onInputKeyDown, T = t.onInputMouseDown, x = t.onInputCompositionStart, P = t.onInputCompositionEnd, A = v.useRef(null), F = fr(0), D = G(F, 2), B = D[0], q = D[1], ne = fr(!1), se = G(ne, 2), L = se[0], H = se[1], z = "".concat(n, "-selection"), J = i || f === "multiple" && s === !1 || f === "tags" ? a : "", I = f === "tags" || f === "multiple" && s === !1 || d && (i || L);
  uP(function() {
    q(A.current.scrollWidth);
  }, [J]);
  function Q(Z, j, ee, le, ce) {
    return /* @__PURE__ */ v.createElement("span", {
      className: Ne("".concat(z, "-item"), ye({}, "".concat(z, "-item-disabled"), ee)),
      title: V0(Z)
    }, /* @__PURE__ */ v.createElement("span", {
      className: "".concat(z, "-item-content")
    }, j), le && /* @__PURE__ */ v.createElement(Ps, {
      className: "".concat(z, "-item-remove"),
      onMouseDown: ov,
      onClick: ce,
      customizeIcon: y
    }, "×"));
  }
  function k(Z, j, ee, le, ce) {
    var de = function(oe) {
      ov(oe), O(!i);
    };
    return /* @__PURE__ */ v.createElement("span", {
      onMouseDown: de
    }, C({
      label: j,
      value: Z,
      disabled: ee,
      closable: le,
      onClose: ce
    }));
  }
  function X(Z) {
    var j = Z.disabled, ee = Z.label, le = Z.value, ce = !l && !j, de = ee;
    if (typeof E == "number" && (typeof ee == "string" || typeof ee == "number")) {
      var me = String(de);
      me.length > E && (de = "".concat(me.slice(0, E), "..."));
    }
    var oe = function(Me) {
      Me && Me.stopPropagation(), R(Z);
    };
    return typeof C == "function" ? k(le, de, j, ce, oe) : Q(Z, de, j, ce, oe);
  }
  function re(Z) {
    var j = typeof b == "function" ? b(Z) : b;
    return Q({
      title: j
    }, j, !1);
  }
  var Y = /* @__PURE__ */ v.createElement("div", {
    className: "".concat(z, "-search"),
    style: {
      width: B
    },
    onFocus: function() {
      H(!0);
    },
    onBlur: function() {
      H(!1);
    }
  }, /* @__PURE__ */ v.createElement(lf, {
    ref: c,
    open: i,
    prefixCls: n,
    id: r,
    inputElement: null,
    disabled: l,
    autoFocus: h,
    autoComplete: m,
    editable: I,
    activeDescendantId: p,
    value: J,
    onKeyDown: $,
    onMouseDown: T,
    onChange: M,
    onPaste: _,
    onCompositionStart: x,
    onCompositionEnd: P,
    tabIndex: g,
    attrs: Ua(t, !0)
  }), /* @__PURE__ */ v.createElement("span", {
    ref: A,
    className: "".concat(z, "-search-mirror"),
    "aria-hidden": !0
  }, J, " ")), N = /* @__PURE__ */ v.createElement(Li, {
    prefixCls: "".concat(z, "-overflow"),
    data: o,
    renderItem: X,
    renderRest: re,
    suffix: Y,
    itemKey: lP,
    maxCount: S
  });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, N, !o.length && !J && /* @__PURE__ */ v.createElement("span", {
    className: "".concat(z, "-placeholder")
  }, u));
}, dP = function(t) {
  var r = t.inputElement, n = t.prefixCls, o = t.id, i = t.inputRef, a = t.disabled, s = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, l = t.mode, f = t.open, d = t.values, h = t.placeholder, m = t.tabIndex, p = t.showSearch, g = t.searchValue, y = t.activeValue, S = t.maxLength, E = t.onInputKeyDown, w = t.onInputMouseDown, b = t.onInputChange, C = t.onInputPaste, O = t.onInputCompositionStart, R = t.onInputCompositionEnd, M = t.title, _ = v.useState(!1), $ = G(_, 2), T = $[0], x = $[1], P = l === "combobox", A = P || p, F = d[0], D = g || "";
  P && y && !T && (D = y), v.useEffect(function() {
    P && x(!1);
  }, [P, y]);
  var B = l !== "combobox" && !f && !p ? !1 : !!D, q = M === void 0 ? V0(F) : M, ne = function() {
    if (F)
      return null;
    var L = B ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ v.createElement("span", {
      className: "".concat(n, "-selection-placeholder"),
      style: L
    }, h);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-search")
  }, /* @__PURE__ */ v.createElement(lf, {
    ref: i,
    prefixCls: n,
    id: o,
    open: f,
    inputElement: r,
    disabled: a,
    autoFocus: s,
    autoComplete: c,
    editable: A,
    activeDescendantId: u,
    value: D,
    onKeyDown: E,
    onMouseDown: w,
    onChange: function(L) {
      x(!0), b(L);
    },
    onPaste: C,
    onCompositionStart: O,
    onCompositionEnd: R,
    tabIndex: m,
    attrs: Ua(t, !0),
    maxLength: P ? S : void 0
  })), !P && F ? /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: q,
    style: B ? {
      visibility: "hidden"
    } : void 0
  }, F.label) : null, ne());
};
function hP(e) {
  return ![
    // System function button
    te.ESC,
    te.SHIFT,
    te.BACKSPACE,
    te.TAB,
    te.WIN_KEY,
    te.ALT,
    te.META,
    te.WIN_KEY_RIGHT,
    te.CTRL,
    te.SEMICOLON,
    te.EQUALS,
    te.CAPS_LOCK,
    te.CONTEXT_MENU,
    // F1-F12
    te.F1,
    te.F2,
    te.F3,
    te.F4,
    te.F5,
    te.F6,
    te.F7,
    te.F8,
    te.F9,
    te.F10,
    te.F11,
    te.F12
  ].includes(e);
}
var vP = function(t, r) {
  var n = De(null), o = De(!1), i = t.prefixCls, a = t.open, s = t.mode, c = t.showSearch, u = t.tokenWithEnter, l = t.autoClearSearchValue, f = t.onSearch, d = t.onSearchSubmit, h = t.onToggleOpen, m = t.onInputKeyDown, p = t.domRef;
  v.useImperativeHandle(r, function() {
    return {
      focus: function() {
        n.current.focus();
      },
      blur: function() {
        n.current.blur();
      }
    };
  });
  var g = $0(0), y = G(g, 2), S = y[0], E = y[1], w = function(D) {
    var B = D.which;
    (B === te.UP || B === te.DOWN) && D.preventDefault(), m && m(D), B === te.ENTER && s === "tags" && !o.current && !a && d?.(D.target.value), hP(B) && h(!0);
  }, b = function() {
    E(!0);
  }, C = De(null), O = function(D) {
    f(D, !0, o.current) !== !1 && h(!0);
  }, R = function() {
    o.current = !0;
  }, M = function(D) {
    o.current = !1, s !== "combobox" && O(D.target.value);
  }, _ = function(D) {
    var B = D.target.value;
    if (u && C.current && /[\r\n]/.test(C.current)) {
      var q = C.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      B = B.replace(q, C.current);
    }
    C.current = null, O(B);
  }, $ = function(D) {
    var B = D.clipboardData, q = B.getData("text");
    C.current = q;
  }, T = function(D) {
    var B = D.target;
    if (B !== n.current) {
      var q = document.body.style.msTouchAction !== void 0;
      q ? setTimeout(function() {
        n.current.focus();
      }) : n.current.focus();
    }
  }, x = function(D) {
    var B = S();
    D.target !== n.current && !B && s !== "combobox" && D.preventDefault(), (s !== "combobox" && (!c || !B) || !a) && (a && l !== !1 && f("", !0, !1), h());
  }, P = {
    inputRef: n,
    onInputKeyDown: w,
    onInputMouseDown: b,
    onInputChange: _,
    onInputPaste: $,
    onInputCompositionStart: R,
    onInputCompositionEnd: M
  }, A = s === "multiple" || s === "tags" ? /* @__PURE__ */ v.createElement(fP, Ze({}, t, P)) : /* @__PURE__ */ v.createElement(dP, Ze({}, t, P));
  return /* @__PURE__ */ v.createElement("div", {
    ref: p,
    className: "".concat(i, "-selector"),
    onClick: T,
    onMouseDown: x
  }, A);
}, z0 = /* @__PURE__ */ v.forwardRef(vP);
z0.displayName = "Selector";
function H0(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function pP(e) {
  return H0(e) !== e?.ownerDocument;
}
function Uu(e) {
  return pP(e) ? H0(e) : null;
}
var iv = /* @__PURE__ */ v.createContext(null);
function av(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function mP(e, t, r, n) {
  return v.useMemo(function() {
    var o = av(r ?? t), i = av(n ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
function gP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function yP(e, t, r, n) {
  for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, c = i[a];
    if (gP((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function sv(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function ji(e) {
  return e.ownerDocument.defaultView;
}
function qu(e) {
  for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = ji(r).getComputedStyle(r), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function yi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Ko(e) {
  return yi(parseFloat(e), 0);
}
function cv(e, t) {
  var r = W({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement)) {
      var o = ji(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, u = o.borderLeftWidth, l = o.borderRightWidth, f = n.getBoundingClientRect(), d = n.offsetHeight, h = n.clientHeight, m = n.offsetWidth, p = n.clientWidth, g = Ko(s), y = Ko(c), S = Ko(u), E = Ko(l), w = yi(Math.round(f.width / m * 1e3) / 1e3), b = yi(Math.round(f.height / d * 1e3) / 1e3), C = (m - p - S - E) * w, O = (d - h - g - y) * b, R = g * b, M = y * b, _ = S * w, $ = E * w, T = 0, x = 0;
      if (i === "clip") {
        var P = Ko(a);
        T = P * w, x = P * b;
      }
      var A = f.x + _ - T, F = f.y + R - x, D = A + f.width + 2 * T - _ - $ - C, B = F + f.height + 2 * x - R - M - O;
      r.left = Math.max(r.left, A), r.top = Math.max(r.top, F), r.right = Math.min(r.right, D), r.bottom = Math.min(r.bottom, B);
    }
  }), r;
}
function uv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function lv(e, t) {
  var r = t || [], n = G(r, 2), o = n[0], i = n[1];
  return [uv(e.width, o), uv(e.height, i)];
}
function fv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function eo(e, t) {
  var r = t[0], n = t[1], o, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function rn(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === t ? r[n] || "c" : n;
  }).join("");
}
function bP(e, t, r, n, o, i, a) {
  var s = v.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), c = G(s, 2), u = c[0], l = c[1], f = v.useRef(0), d = v.useMemo(function() {
    return t ? qu(t) : [];
  }, [t]), h = v.useRef({}), m = function() {
    h.current = {};
  };
  e || m();
  var p = Rr(function() {
    if (t && r && e) {
      let nt = function(Jt, nr) {
        var Zt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ee, Hr = T.x + Jt, Vo = T.y + nr, zo = Hr + z, Vi = Vo + H, Is = Math.max(Hr, Zt.left), As = Math.max(Vo, Zt.top), Ds = Math.min(zo, Zt.right), Fs = Math.min(Vi, Zt.bottom);
        return Math.max(0, (Ds - Is) * (Fs - As));
      }, wr = function() {
        Te = T.y + Ce, qt = Te + H, Nt = T.x + qe, Vt = Nt + z;
      };
      var S = t, E = S.style.left, w = S.style.top, b = S.style.right, C = S.style.bottom, O = S.ownerDocument, R = ji(S), M = W(W({}, o[n]), i);
      S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto";
      var _;
      if (Array.isArray(r))
        _ = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var $ = r.getBoundingClientRect();
        _ = {
          x: $.x,
          y: $.y,
          width: $.width,
          height: $.height
        };
      }
      var T = S.getBoundingClientRect(), x = R.getComputedStyle(S), P = x.width, A = x.height, F = O.documentElement, D = F.clientWidth, B = F.clientHeight, q = F.scrollWidth, ne = F.scrollHeight, se = F.scrollTop, L = F.scrollLeft, H = T.height, z = T.width, J = _.height, I = _.width, Q = {
        left: 0,
        top: 0,
        right: D,
        bottom: B
      }, k = {
        left: -L,
        top: -se,
        right: q - L,
        bottom: ne - se
      }, X = M.htmlRegion, re = "visible", Y = "visibleFirst";
      X !== "scroll" && X !== Y && (X = re);
      var N = X === Y, Z = cv(k, d), j = cv(Q, d), ee = X === re ? j : Z, le = N ? j : ee;
      S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
      var ce = S.getBoundingClientRect();
      S.style.left = E, S.style.top = w, S.style.right = b, S.style.bottom = C;
      var de = yi(Math.round(z / parseFloat(P) * 1e3) / 1e3), me = yi(Math.round(H / parseFloat(A) * 1e3) / 1e3);
      if (de === 0 || me === 0 || Fa(r) && !d0(r))
        return;
      var oe = M.offset, fe = M.targetOffset, Me = lv(T, oe), Ie = G(Me, 2), ie = Ie[0], ve = Ie[1], et = lv(_, fe), ot = G(et, 2), tt = ot[0], We = ot[1];
      _.x -= tt, _.y -= We;
      var Ue = M.points || [], it = G(Ue, 2), Yt = it[0], rt = it[1], he = fv(rt), Se = fv(Yt), Ve = eo(_, he), pt = eo(T, Se), Fe = W({}, M), qe = Ve.x - pt.x + ie, Ce = Ve.y - pt.y + ve, ut = nt(qe, Ce), Tt = nt(qe, Ce, j), xe = eo(_, ["t", "l"]), ze = eo(T, ["t", "l"]), lt = eo(_, ["b", "r"]), vt = eo(T, ["b", "r"]), Ee = M.overflow || {}, K = Ee.adjustX, ae = Ee.adjustY, ue = Ee.shiftX, ge = Ee.shiftY, $e = function(nr) {
        return typeof nr == "boolean" ? nr : nr >= 0;
      }, Te, qt, Nt, Vt;
      wr();
      var dt = $e(ae), ar = Se[0] === he[0];
      if (dt && Se[0] === "t" && (qt > le.bottom || h.current.bt)) {
        var Qt = Ce;
        ar ? Qt -= H - J : Qt = xe.y - vt.y - ve;
        var Lr = nt(qe, Qt), zn = nt(qe, Qt, j);
        // Of course use larger one
        Lr > ut || Lr === ut && (!N || // Choose recommend one
        zn >= Tt) ? (h.current.bt = !0, Ce = Qt, Fe.points = [rn(Se, 0), rn(he, 0)]) : h.current.bt = !1;
      }
      if (dt && Se[0] === "b" && (Te < le.top || h.current.tb)) {
        var Ft = Ce;
        ar ? Ft += H - J : Ft = lt.y - ze.y - ve;
        var rr = nt(qe, Ft), Xt = nt(qe, Ft, j);
        // Of course use larger one
        rr > ut || rr === ut && (!N || // Choose recommend one
        Xt >= Tt) ? (h.current.tb = !0, Ce = Ft, Fe.points = [rn(Se, 0), rn(he, 0)]) : h.current.tb = !1;
      }
      var Er = $e(K), Hn = Se[1] === he[1];
      if (Er && Se[1] === "l" && (Vt > le.right || h.current.rl)) {
        var jr = qe;
        Hn ? jr -= z - I : jr = xe.x - vt.x - ie;
        var yn = nt(jr, Ce), Bn = nt(jr, Ce, j);
        // Of course use larger one
        yn > ut || yn === ut && (!N || // Choose recommend one
        Bn >= Tt) ? (h.current.rl = !0, qe = jr, Fe.points = [rn(Se, 1), rn(he, 1)]) : h.current.rl = !1;
      }
      if (Er && Se[1] === "r" && (Nt < le.left || h.current.lr)) {
        var Vr = qe;
        Hn ? Vr += z - I : Vr = lt.x - ze.x - ie;
        var Wn = nt(Vr, Ce), $o = nt(Vr, Ce, j);
        // Of course use larger one
        Wn > ut || Wn === ut && (!N || // Choose recommend one
        $o >= Tt) ? (h.current.lr = !0, qe = Vr, Fe.points = [rn(Se, 1), rn(he, 1)]) : h.current.lr = !1;
      }
      wr();
      var zr = ue === !0 ? 0 : ue;
      typeof zr == "number" && (Nt < j.left && (qe -= Nt - j.left, _.x + I < j.left + zr && (qe += _.x - j.left + I - zr)), Vt > j.right && (qe -= Vt - j.right, _.x > j.right - zr && (qe += _.x - j.right + zr)));
      var vr = ge === !0 ? 0 : ge;
      typeof vr == "number" && (Te < j.top && (Ce -= Te - j.top + ve, _.y + J < j.top + vr && (Ce += _.y - j.top + J - vr)), qt > j.bottom && (Ce -= qt - j.bottom - ve, _.y > j.bottom - vr && (Ce += _.y - j.bottom + vr)));
      var Ir = T.x + qe, Ar = Ir + z, en = T.y + Ce, Un = en + H, qn = _.x, Qn = qn + I, bn = _.y, ko = bn + J, Lo = Math.max(Ir, qn), jo = Math.min(Ar, Qn), Sn = (Lo + jo) / 2, En = Sn - Ir, Re = Math.max(en, bn), Oe = Math.min(Un, ko), Rt = (Re + Oe) / 2, It = Rt - en;
      a?.(t, Fe);
      var ft = ce.right - T.x - (qe + T.width), Ct = ce.bottom - T.y - (Ce + T.height);
      l({
        ready: !0,
        offsetX: qe / de,
        offsetY: Ce / me,
        offsetR: ft / de,
        offsetB: Ct / me,
        arrowX: En / de,
        arrowY: It / me,
        scaleX: de,
        scaleY: me,
        align: Fe
      });
    }
  }), g = function() {
    f.current += 1;
    var E = f.current;
    Promise.resolve().then(function() {
      f.current === E && p();
    });
  }, y = function() {
    l(function(E) {
      return W(W({}, E), {}, {
        ready: !1
      });
    });
  };
  return _t(y, [n]), _t(function() {
    e || y();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, g];
}
function SP(e, t, r, n) {
  _t(function() {
    if (e && t && r) {
      let l = function() {
        n();
      };
      var o = t, i = r, a = qu(o), s = qu(i), c = ji(i), u = new Set([c].concat(be(a), be(s)));
      return u.forEach(function(f) {
        f.addEventListener("scroll", l, {
          passive: !0
        });
      }), c.addEventListener("resize", l, {
        passive: !0
      }), n(), function() {
        u.forEach(function(f) {
          f.removeEventListener("scroll", l), c.removeEventListener("resize", l);
        });
      };
    }
  }, [e, t, r]);
}
function EP(e, t, r, n, o, i, a, s) {
  var c = v.useRef(e), u = v.useRef(!1);
  c.current !== e && (u.current = !0, c.current = e), v.useEffect(function() {
    var l = Wt(function() {
      u.current = !1;
    });
    return function() {
      Wt.cancel(l);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!o || i)) {
      var l = function() {
        var _ = !1, $ = function(P) {
          var A = P.target;
          _ = a(A);
        }, T = function(P) {
          var A = P.target;
          !u.current && c.current && !_ && !a(A) && s(!1);
        };
        return [$, T];
      }, f = l(), d = G(f, 2), h = d[0], m = d[1], p = l(), g = G(p, 2), y = g[0], S = g[1], E = ji(n);
      E.addEventListener("mousedown", h, !0), E.addEventListener("click", m, !0), E.addEventListener("contextmenu", m, !0);
      var w = Uu(r);
      if (w && (w.addEventListener("mousedown", y, !0), w.addEventListener("click", S, !0), w.addEventListener("contextmenu", S, !0)), process.env.NODE_ENV !== "production") {
        var b, C, O = r == null || (b = r.getRootNode) === null || b === void 0 ? void 0 : b.call(r), R = (C = n.getRootNode) === null || C === void 0 ? void 0 : C.call(n);
        ke(O === R, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        E.removeEventListener("mousedown", h, !0), E.removeEventListener("click", m, !0), E.removeEventListener("contextmenu", m, !0), w && (w.removeEventListener("mousedown", y, !0), w.removeEventListener("click", S, !0), w.removeEventListener("contextmenu", S, !0));
      };
    }
  }, [t, r, n, o, i]);
}
function wP(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, c = o.x, u = c === void 0 ? 0 : c, l = o.y, f = l === void 0 ? 0 : l, d = v.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var m = r.points[0], p = r.points[1], g = m[0], y = m[1], S = p[0], E = p[1];
    g === S || !["t", "b"].includes(g) ? h.top = f : g === "t" ? h.top = 0 : h.bottom = 0, y === E || !["l", "r"].includes(y) ? h.left = u : y === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: d,
    className: Ne("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function CP(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ v.createElement(Ii, Ze({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ v.createElement("div", {
      style: {
        zIndex: n
      },
      className: Ne("".concat(t, "-mask"), s)
    });
  }) : null;
}
var B0 = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (B0.displayName = "PopupContent");
var W0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, u = e.keepDom, l = e.onClick, f = e.mask, d = e.arrow, h = e.arrowPos, m = e.align, p = e.motion, g = e.maskMotion, y = e.forceRender, S = e.getPopupContainer, E = e.autoDestroy, w = e.portal, b = e.zIndex, C = e.onMouseEnter, O = e.onMouseLeave, R = e.onPointerEnter, M = e.ready, _ = e.offsetX, $ = e.offsetY, T = e.offsetR, x = e.offsetB, P = e.onAlign, A = e.onPrepare, F = e.stretch, D = e.targetWidth, B = e.targetHeight, q = typeof r == "function" ? r() : r, ne = c || u, se = S?.length > 0, L = v.useState(!S || !se), H = G(L, 2), z = H[0], J = H[1];
  if (_t(function() {
    !z && se && a && J(!0);
  }, [z, se, a]), !z)
    return null;
  var I = "auto", Q = {
    left: "-1000vw",
    top: "-1000vh",
    right: I,
    bottom: I
  };
  if (M || !c) {
    var k = m.points, X = m._experimental, re = X?.dynamicInset, Y = re && k[0][1] === "r", N = re && k[0][0] === "b";
    Y ? (Q.right = T, Q.left = I) : (Q.left = _, Q.right = I), N ? (Q.bottom = x, Q.top = I) : (Q.top = $, Q.bottom = I);
  }
  var Z = {};
  return F && (F.includes("height") && B ? Z.height = B : F.includes("minHeight") && B && (Z.minHeight = B), F.includes("width") && D ? Z.width = D : F.includes("minWidth") && D && (Z.minWidth = D)), c || (Z.pointerEvents = "none"), /* @__PURE__ */ v.createElement(w, {
    open: y || ne,
    getContainer: S && function() {
      return S(a);
    },
    autoDestroy: E
  }, /* @__PURE__ */ v.createElement(CP, {
    prefixCls: o,
    open: c,
    zIndex: b,
    mask: f,
    motion: g
  }), /* @__PURE__ */ v.createElement(kn, {
    onResize: P,
    disabled: !c
  }, function(j) {
    return /* @__PURE__ */ v.createElement(Ii, Ze({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(o, "-hidden")
    }, p, {
      onAppearPrepare: A,
      onEnterPrepare: A,
      visible: c,
      onVisibleChanged: function(le) {
        var ce;
        p == null || (ce = p.onVisibleChanged) === null || ce === void 0 || ce.call(p, le), s(le);
      }
    }), function(ee, le) {
      var ce = ee.className, de = ee.style, me = Ne(o, ce, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: No(j, t, le),
        className: me,
        style: W(W(W(W({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, Q), Z), de), {}, {
          boxSizing: "border-box",
          zIndex: b
        }, i),
        onMouseEnter: C,
        onMouseLeave: O,
        onPointerEnter: R,
        onClick: l
      }, d && /* @__PURE__ */ v.createElement(wP, {
        prefixCls: o,
        arrow: d,
        arrowPos: h,
        align: m
      }), /* @__PURE__ */ v.createElement(B0, {
        cache: !c
      }, q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (W0.displayName = "Popup");
var U0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Mi(r), i = v.useCallback(function(s) {
    Ml(t, n ? n(s) : s);
  }, [n]), a = Nl(i, r.ref);
  return o ? /* @__PURE__ */ v.cloneElement(r, {
    ref: a
  }) : r;
});
process.env.NODE_ENV !== "production" && (U0.displayName = "TriggerWrapper");
var OP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function xP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cf, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var o = r.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = r.children, s = r.action, c = s === void 0 ? "hover" : s, u = r.showAction, l = r.hideAction, f = r.popupVisible, d = r.defaultPopupVisible, h = r.onPopupVisibleChange, m = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, y = g === void 0 ? 0.1 : g, S = r.focusDelay, E = r.blurDelay, w = r.mask, b = r.maskClosable, C = b === void 0 ? !0 : b, O = r.getPopupContainer, R = r.forceRender, M = r.autoDestroy, _ = r.destroyPopupOnHide, $ = r.popup, T = r.popupClassName, x = r.popupStyle, P = r.popupPlacement, A = r.builtinPlacements, F = A === void 0 ? {} : A, D = r.popupAlign, B = r.zIndex, q = r.stretch, ne = r.getPopupClassNameFromAlign, se = r.alignPoint, L = r.onPopupClick, H = r.onPopupAlign, z = r.arrow, J = r.popupMotion, I = r.maskMotion, Q = r.popupTransitionName, k = r.popupAnimation, X = r.maskTransitionName, re = r.maskAnimation, Y = r.className, N = r.getTriggerDOMNode, Z = Mt(r, OP), j = M || _ || !1, ee = v.useState(!1), le = G(ee, 2), ce = le[0], de = le[1];
    _t(function() {
      de(D0());
    }, []);
    var me = v.useRef({}), oe = v.useContext(iv), fe = v.useMemo(function() {
      return {
        registerSubPopup: function(Ae, mt) {
          me.current[Ae] = mt, oe?.registerSubPopup(Ae, mt);
        }
      };
    }, [oe]), Me = MT(), Ie = v.useState(null), ie = G(Ie, 2), ve = ie[0], et = ie[1], ot = Rr(function(we) {
      Fa(we) && ve !== we && et(we), oe?.registerSubPopup(Me, we);
    }), tt = v.useState(null), We = G(tt, 2), Ue = We[0], it = We[1], Yt = Rr(function(we) {
      Fa(we) && Ue !== we && it(we);
    }), rt = v.Children.only(a), he = rt?.props || {}, Se = {}, Ve = Rr(function(we) {
      var Ae, mt, yt = Ue;
      return yt?.contains(we) || ((Ae = Uu(yt)) === null || Ae === void 0 ? void 0 : Ae.host) === we || we === yt || ve?.contains(we) || ((mt = Uu(ve)) === null || mt === void 0 ? void 0 : mt.host) === we || we === ve || Object.values(me.current).some(function(bt) {
        return bt?.contains(we) || we === bt;
      });
    }), pt = sv(i, J, k, Q), Fe = sv(i, I, re, X), qe = v.useState(d || !1), Ce = G(qe, 2), ut = Ce[0], Tt = Ce[1], xe = f ?? ut, ze = Rr(function(we) {
      f === void 0 && Tt(we);
    });
    _t(function() {
      Tt(f || !1);
    }, [f]);
    var lt = v.useRef(xe);
    lt.current = xe;
    var vt = Rr(function(we) {
      $y(function() {
        xe !== we && (ze(we), h?.(we));
      });
    }), Ee = v.useRef(), K = function() {
      clearTimeout(Ee.current);
    }, ae = function(Ae) {
      var mt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      K(), mt === 0 ? vt(Ae) : Ee.current = setTimeout(function() {
        vt(Ae);
      }, mt * 1e3);
    };
    v.useEffect(function() {
      return K;
    }, []);
    var ue = v.useState(!1), ge = G(ue, 2), $e = ge[0], Te = ge[1];
    _t(function(we) {
      (!we || xe) && Te(!0);
    }, [xe]);
    var qt = v.useState(null), Nt = G(qt, 2), Vt = Nt[0], dt = Nt[1], ar = v.useState([0, 0]), Qt = G(ar, 2), Lr = Qt[0], zn = Qt[1], Ft = function(Ae) {
      zn([Ae.clientX, Ae.clientY]);
    }, rr = bP(xe, ve, se ? Lr : Ue, P, F, D, H), Xt = G(rr, 11), Er = Xt[0], Hn = Xt[1], jr = Xt[2], yn = Xt[3], Bn = Xt[4], Vr = Xt[5], Wn = Xt[6], $o = Xt[7], zr = Xt[8], vr = Xt[9], Ir = Xt[10], Ar = Rr(function() {
      $e || Ir();
    });
    SP(xe, Ue, ve, Ar), _t(function() {
      Ar();
    }, [Lr, P]), _t(function() {
      xe && !(F != null && F[P]) && Ar();
    }, [JSON.stringify(D)]);
    var en = v.useMemo(function() {
      var we = yP(F, i, vr, se);
      return Ne(we, ne?.(vr));
    }, [vr, ne, F, i, se]);
    v.useImperativeHandle(n, function() {
      return {
        forceAlign: Ar
      };
    });
    var Un = function(Ae) {
      Te(!1), Ir(), m?.(Ae);
    }, qn = function() {
      return new Promise(function(Ae) {
        dt(function() {
          return Ae;
        });
      });
    };
    _t(function() {
      Vt && (Ir(), Vt(), dt(null));
    }, [Vt]);
    var Qn = v.useState(0), bn = G(Qn, 2), ko = bn[0], Lo = bn[1], jo = v.useState(0), Sn = G(jo, 2), En = Sn[0], Re = Sn[1], Oe = function(Ae, mt) {
      if (Ar(), q) {
        var yt = mt.getBoundingClientRect();
        Lo(yt.width), Re(yt.height);
      }
    }, Rt = mP(ce, c, u, l), It = G(Rt, 2), ft = It[0], Ct = It[1];
    function nt(we, Ae, mt, yt) {
      Se[we] = function(bt) {
        var zi;
        yt?.(bt), ae(Ae, mt);
        for (var $s = arguments.length, wf = new Array($s > 1 ? $s - 1 : 0), Hi = 1; Hi < $s; Hi++)
          wf[Hi - 1] = arguments[Hi];
        (zi = he[we]) === null || zi === void 0 || zi.call.apply(zi, [he, bt].concat(wf));
      };
    }
    var wr = ft.has("click"), Jt = Ct.has("click") || Ct.has("contextMenu");
    (wr || Jt) && (Se.onClick = function(we) {
      var Ae;
      lt.current && Jt ? ae(!1) : !lt.current && wr && (Ft(we), ae(!0));
      for (var mt = arguments.length, yt = new Array(mt > 1 ? mt - 1 : 0), bt = 1; bt < mt; bt++)
        yt[bt - 1] = arguments[bt];
      (Ae = he.onClick) === null || Ae === void 0 || Ae.call.apply(Ae, [he, we].concat(yt));
    }), EP(xe, Jt, Ue, ve, w, C, Ve, ae);
    var nr = ft.has("hover"), Zt = Ct.has("hover"), Hr, Vo;
    nr && (nt("onMouseEnter", !0, p, function(we) {
      Ft(we);
    }), nt("onPointerEnter", !0, p, function(we) {
      Ft(we);
    }), Hr = function() {
      (xe || $e) && ae(!0, p);
    }, se && (Se.onMouseMove = function(we) {
      var Ae;
      (Ae = he.onMouseMove) === null || Ae === void 0 || Ae.call(he, we);
    })), Zt && (nt("onMouseLeave", !1, y), nt("onPointerLeave", !1, y), Vo = function() {
      ae(!1, y);
    }), ft.has("focus") && nt("onFocus", !0, S), Ct.has("focus") && nt("onBlur", !1, E), ft.has("contextMenu") && (Se.onContextMenu = function(we) {
      var Ae;
      lt.current && Ct.has("contextMenu") ? ae(!1) : (Ft(we), ae(!0)), we.preventDefault();
      for (var mt = arguments.length, yt = new Array(mt > 1 ? mt - 1 : 0), bt = 1; bt < mt; bt++)
        yt[bt - 1] = arguments[bt];
      (Ae = he.onContextMenu) === null || Ae === void 0 || Ae.call.apply(Ae, [he, we].concat(yt));
    }), Y && (Se.className = Ne(he.className, Y));
    var zo = W(W({}, he), Se), Vi = {}, Is = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Is.forEach(function(we) {
      Z[we] && (Vi[we] = function() {
        for (var Ae, mt = arguments.length, yt = new Array(mt), bt = 0; bt < mt; bt++)
          yt[bt] = arguments[bt];
        (Ae = zo[we]) === null || Ae === void 0 || Ae.call.apply(Ae, [zo].concat(yt)), Z[we].apply(Z, yt);
      });
    });
    var As = /* @__PURE__ */ v.cloneElement(rt, W(W({}, zo), Vi)), Ds = {
      x: Vr,
      y: Wn
    }, Fs = z ? W({}, z !== !0 ? z : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(kn, {
      disabled: !xe,
      ref: Yt,
      onResize: Oe
    }, /* @__PURE__ */ v.createElement(U0, {
      getTriggerDOMNode: N
    }, As)), /* @__PURE__ */ v.createElement(iv.Provider, {
      value: fe
    }, /* @__PURE__ */ v.createElement(W0, {
      portal: e,
      ref: ot,
      prefixCls: i,
      popup: $,
      className: Ne(T, en),
      style: x,
      target: Ue,
      onMouseEnter: Hr,
      onMouseLeave: Vo,
      onPointerEnter: Hr,
      zIndex: B,
      open: xe,
      keepDom: $e,
      onClick: L,
      mask: w,
      motion: pt,
      maskMotion: Fe,
      onVisibleChanged: Un,
      onPrepare: qn,
      forceRender: R,
      autoDestroy: j,
      getPopupContainer: O,
      align: vr,
      arrow: Fs,
      arrowPos: Ds,
      ready: Er,
      offsetX: Hn,
      offsetY: jr,
      offsetR: yn,
      offsetB: Bn,
      onAlign: Ar,
      stretch: q,
      targetWidth: ko / $o,
      targetHeight: En / zr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const _P = xP(cf);
var TP = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], RP = function(t) {
  var r = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: r,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: r,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: r,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: r,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, PP = function(t, r) {
  var n = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, a = t.popupElement, s = t.containerWidth, c = t.animation, u = t.transitionName, l = t.dropdownStyle, f = t.dropdownClassName, d = t.direction, h = d === void 0 ? "ltr" : d, m = t.placement, p = t.builtinPlacements, g = t.dropdownMatchSelectWidth, y = t.dropdownRender, S = t.dropdownAlign, E = t.getPopupContainer, w = t.empty, b = t.getTriggerDOMNode, C = t.onPopupVisibleChange, O = t.onPopupMouseEnter, R = Mt(t, TP), M = "".concat(n, "-dropdown"), _ = a;
  y && (_ = y(a));
  var $ = v.useMemo(function() {
    return p || RP(g);
  }, [p, g]), T = c ? "".concat(M, "-").concat(c) : u, x = v.useRef(null);
  v.useImperativeHandle(r, function() {
    return {
      getPopupElement: function() {
        return x.current;
      }
    };
  });
  var P = W({
    minWidth: s
  }, l);
  return typeof g == "number" ? P.width = g : g && (P.width = s), /* @__PURE__ */ v.createElement(_P, Ze({}, R, {
    showAction: C ? ["click"] : [],
    hideAction: C ? ["click"] : [],
    popupPlacement: m || (h === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: $,
    prefixCls: M,
    popupTransitionName: T,
    popup: /* @__PURE__ */ v.createElement("div", {
      ref: x,
      onMouseEnter: O
    }, _),
    popupAlign: S,
    popupVisible: o,
    getPopupContainer: E,
    popupClassName: Ne(f, ye({}, "".concat(M, "-empty"), w)),
    popupStyle: P,
    getTriggerDOMNode: b,
    onPopupVisibleChange: C
  }), i);
}, q0 = /* @__PURE__ */ v.forwardRef(PP);
q0.displayName = "SelectTrigger";
function dv(e, t) {
  var r = e.key, n;
  return "value" in e && (n = e.value), r ?? (n !== void 0 ? n : "rc-index-key-".concat(t));
}
function Q0(e, t) {
  var r = e || {}, n = r.label, o = r.value, i = r.options, a = r.groupLabel, s = n || (t ? "children" : "label");
  return {
    label: s,
    value: o || "value",
    options: i || "options",
    groupLabel: a || s
  };
}
function MP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fieldNames, n = t.childrenAsData, o = [], i = Q0(r, !1), a = i.label, s = i.value, c = i.options, u = i.groupLabel;
  function l(f, d) {
    f.forEach(function(h) {
      if (d || !(c in h)) {
        var m = h[s];
        o.push({
          key: dv(h, o.length),
          groupOption: d,
          data: h,
          label: h[a],
          value: m
        });
      } else {
        var p = h[u];
        p === void 0 && n && (p = h.label), o.push({
          key: dv(h, o.length),
          group: !0,
          data: h,
          label: p
        }), l(h[c], !0);
      }
    });
  }
  return l(e, !1), o;
}
function Qu(e) {
  var t = W({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return ke(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function NP(e, t) {
  if (!t || !t.length)
    return null;
  var r = !1;
  function n(i, a) {
    var s = Lm(a), c = s[0], u = s.slice(1);
    if (!c)
      return [i];
    var l = i.split(c);
    return r = r || l.length > 1, l.reduce(function(f, d) {
      return [].concat(be(f), be(n(d, u)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var o = n(e, t);
  return r ? o : null;
}
function IP(e, t, r, n, o) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, a = arguments.length > 6 ? arguments[6] : void 0, s = arguments.length > 7 ? arguments[7] : void 0, c = Pe.useMemo(function() {
    if (Be(n) === "object")
      return n.clearIcon;
    if (o)
      return o;
  }, [n, o]), u = Pe.useMemo(function() {
    return !!(!i && n && (r.length || a) && !(s === "combobox" && a === ""));
  }, [n, i, r.length, a, s]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ Pe.createElement(Ps, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var AP = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], DP = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function Ya(e) {
  return e === "tags" || e === "multiple";
}
var G0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, o = e.id, i = e.prefixCls, a = e.className, s = e.showSearch, c = e.tagRender, u = e.direction, l = e.omitDomProps, f = e.displayValues, d = e.onDisplayValuesChange, h = e.emptyOptions, m = e.notFoundContent, p = m === void 0 ? "Not Found" : m, g = e.onClear, y = e.mode, S = e.disabled, E = e.loading, w = e.getInputElement, b = e.getRawInputElement, C = e.open, O = e.defaultOpen, R = e.onDropdownVisibleChange, M = e.activeValue, _ = e.onActiveValueChange, $ = e.activeDescendantId, T = e.searchValue, x = e.autoClearSearchValue, P = e.onSearch, A = e.onSearchSplit, F = e.tokenSeparators, D = e.allowClear, B = e.suffixIcon, q = e.clearIcon, ne = e.OptionList, se = e.animation, L = e.transitionName, H = e.dropdownStyle, z = e.dropdownClassName, J = e.dropdownMatchSelectWidth, I = e.dropdownRender, Q = e.dropdownAlign, k = e.placement, X = e.builtinPlacements, re = e.getPopupContainer, Y = e.showAction, N = Y === void 0 ? [] : Y, Z = e.onFocus, j = e.onBlur, ee = e.onKeyUp, le = e.onKeyDown, ce = e.onMouseDown, de = Mt(e, AP), me = Ya(y), oe = (s !== void 0 ? s : me) || y === "combobox", fe = W({}, de);
  DP.forEach(function(Re) {
    delete fe[Re];
  }), l?.forEach(function(Re) {
    delete fe[Re];
  });
  var Me = v.useState(!1), Ie = G(Me, 2), ie = Ie[0], ve = Ie[1];
  v.useEffect(function() {
    ve(D0());
  }, []);
  var et = v.useRef(null), ot = v.useRef(null), tt = v.useRef(null), We = v.useRef(null), Ue = v.useRef(null), it = UR(), Yt = G(it, 3), rt = Yt[0], he = Yt[1], Se = Yt[2];
  v.useImperativeHandle(t, function() {
    var Re, Oe;
    return {
      focus: (Re = We.current) === null || Re === void 0 ? void 0 : Re.focus,
      blur: (Oe = We.current) === null || Oe === void 0 ? void 0 : Oe.blur,
      scrollTo: function(It) {
        var ft;
        return (ft = Ue.current) === null || ft === void 0 ? void 0 : ft.scrollTo(It);
      }
    };
  });
  var Ve = v.useMemo(function() {
    var Re;
    if (y !== "combobox")
      return T;
    var Oe = (Re = f[0]) === null || Re === void 0 ? void 0 : Re.value;
    return typeof Oe == "string" || typeof Oe == "number" ? String(Oe) : "";
  }, [T, y, f]), pt = y === "combobox" && typeof w == "function" && w() || null, Fe = typeof b == "function" && b(), qe = Nl(ot, Fe == null || (r = Fe.props) === null || r === void 0 ? void 0 : r.ref), Ce = v.useState(!1), ut = G(Ce, 2), Tt = ut[0], xe = ut[1];
  _t(function() {
    xe(!0);
  }, []);
  var ze = za(!1, {
    defaultValue: O,
    value: C
  }), lt = G(ze, 2), vt = lt[0], Ee = lt[1], K = Tt ? vt : !1, ae = !p && h;
  (S || ae && K && y === "combobox") && (K = !1);
  var ue = ae ? !1 : K, ge = v.useCallback(function(Re) {
    var Oe = Re !== void 0 ? Re : !K;
    S || (Ee(Oe), K !== Oe && R?.(Oe));
  }, [S, K, Ee, R]), $e = v.useMemo(function() {
    return (F || []).some(function(Re) {
      return [`
`, `\r
`].includes(Re);
    });
  }, [F]), Te = function(Oe, Rt, It) {
    var ft = !0, Ct = Oe;
    _?.(null);
    var nt = It ? null : NP(Oe, F);
    return y !== "combobox" && nt && (Ct = "", A?.(nt), ge(!1), ft = !1), P && Ve !== Ct && P(Ct, {
      source: Rt ? "typing" : "effect"
    }), ft;
  }, qt = function(Oe) {
    !Oe || !Oe.trim() || P(Oe, {
      source: "submit"
    });
  };
  v.useEffect(function() {
    !K && !me && y !== "combobox" && Te("", !1, !1);
  }, [K]), v.useEffect(function() {
    vt && S && Ee(!1), S && he(!1);
  }, [S]);
  var Nt = $0(), Vt = G(Nt, 2), dt = Vt[0], ar = Vt[1], Qt = function(Oe) {
    var Rt = dt(), It = Oe.which;
    if (It === te.ENTER && (y !== "combobox" && Oe.preventDefault(), K || ge(!0)), ar(!!Ve), It === te.BACKSPACE && !Rt && me && !Ve && f.length) {
      for (var ft = be(f), Ct = null, nt = ft.length - 1; nt >= 0; nt -= 1) {
        var wr = ft[nt];
        if (!wr.disabled) {
          ft.splice(nt, 1), Ct = wr;
          break;
        }
      }
      Ct && d(ft, {
        type: "remove",
        values: [Ct]
      });
    }
    for (var Jt = arguments.length, nr = new Array(Jt > 1 ? Jt - 1 : 0), Zt = 1; Zt < Jt; Zt++)
      nr[Zt - 1] = arguments[Zt];
    if (K && Ue.current) {
      var Hr;
      (Hr = Ue.current).onKeyDown.apply(Hr, [Oe].concat(nr));
    }
    le?.apply(void 0, [Oe].concat(nr));
  }, Lr = function(Oe) {
    for (var Rt = arguments.length, It = new Array(Rt > 1 ? Rt - 1 : 0), ft = 1; ft < Rt; ft++)
      It[ft - 1] = arguments[ft];
    if (K && Ue.current) {
      var Ct;
      (Ct = Ue.current).onKeyUp.apply(Ct, [Oe].concat(It));
    }
    ee?.apply(void 0, [Oe].concat(It));
  }, zn = function(Oe) {
    var Rt = f.filter(function(It) {
      return It !== Oe;
    });
    d(Rt, {
      type: "remove",
      values: [Oe]
    });
  }, Ft = v.useRef(!1), rr = function() {
    he(!0), S || (Z && !Ft.current && Z.apply(void 0, arguments), N.includes("focus") && ge(!0)), Ft.current = !0;
  }, Xt = function() {
    he(!1, function() {
      Ft.current = !1, ge(!1);
    }), !S && (Ve && (y === "tags" ? P(Ve, {
      source: "submit"
    }) : y === "multiple" && P("", {
      source: "blur"
    })), j && j.apply(void 0, arguments));
  }, Er = [];
  v.useEffect(function() {
    return function() {
      Er.forEach(function(Re) {
        return clearTimeout(Re);
      }), Er.splice(0, Er.length);
    };
  }, []);
  var Hn = function(Oe) {
    var Rt, It = Oe.target, ft = (Rt = tt.current) === null || Rt === void 0 ? void 0 : Rt.getPopupElement();
    if (ft && ft.contains(It)) {
      var Ct = setTimeout(function() {
        var nr = Er.indexOf(Ct);
        if (nr !== -1 && Er.splice(nr, 1), Se(), !ie && !ft.contains(document.activeElement)) {
          var Zt;
          (Zt = We.current) === null || Zt === void 0 || Zt.focus();
        }
      });
      Er.push(Ct);
    }
    for (var nt = arguments.length, wr = new Array(nt > 1 ? nt - 1 : 0), Jt = 1; Jt < nt; Jt++)
      wr[Jt - 1] = arguments[Jt];
    ce?.apply(void 0, [Oe].concat(wr));
  }, jr = v.useState(null), yn = G(jr, 2), Bn = yn[0], Vr = yn[1], Wn = v.useState({}), $o = G(Wn, 2), zr = $o[1];
  function vr() {
    zr({});
  }
  _t(function() {
    if (ue) {
      var Re, Oe = Math.ceil((Re = et.current) === null || Re === void 0 ? void 0 : Re.getBoundingClientRect().width);
      Bn !== Oe && !Number.isNaN(Oe) && Vr(Oe);
    }
  }, [ue]);
  var Ir;
  Fe && (Ir = function(Oe) {
    ge(Oe);
  }), qR(function() {
    var Re;
    return [et.current, (Re = tt.current) === null || Re === void 0 ? void 0 : Re.getPopupElement()];
  }, ue, ge, !!Fe);
  var Ar = v.useMemo(function() {
    return W(W({}, e), {}, {
      notFoundContent: p,
      open: K,
      triggerOpen: ue,
      id: o,
      showSearch: oe,
      multiple: me,
      toggleOpen: ge
    });
  }, [e, p, ue, K, o, oe, me, ge]), en = !!B || E, Un;
  en && (Un = /* @__PURE__ */ v.createElement(Ps, {
    className: Ne("".concat(i, "-arrow"), ye({}, "".concat(i, "-arrow-loading"), E)),
    customizeIcon: B,
    customizeIconProps: {
      loading: E,
      searchValue: Ve,
      open: K,
      focused: rt,
      showSearch: oe
    }
  })), process.env.NODE_ENV !== "production" && ke(!e.clearIcon, "`clearIcon` will be removed in future. Please use `allowClear` instead.");
  var qn = function() {
    var Oe;
    g?.(), (Oe = We.current) === null || Oe === void 0 || Oe.focus(), d([], {
      type: "clear",
      values: f
    }), Te("", !1, !1);
  }, Qn = IP(i, qn, f, D, q, S, Ve, y), bn = Qn.allowClear, ko = Qn.clearIcon, Lo = /* @__PURE__ */ v.createElement(ne, {
    ref: Ue
  }), jo = Ne(i, a, (n = {}, ye(n, "".concat(i, "-focused"), rt), ye(n, "".concat(i, "-multiple"), me), ye(n, "".concat(i, "-single"), !me), ye(n, "".concat(i, "-allow-clear"), D), ye(n, "".concat(i, "-show-arrow"), en), ye(n, "".concat(i, "-disabled"), S), ye(n, "".concat(i, "-loading"), E), ye(n, "".concat(i, "-open"), K), ye(n, "".concat(i, "-customize-input"), pt), ye(n, "".concat(i, "-show-search"), oe), n)), Sn = /* @__PURE__ */ v.createElement(q0, {
    ref: tt,
    disabled: S,
    prefixCls: i,
    visible: ue,
    popupElement: Lo,
    containerWidth: Bn,
    animation: se,
    transitionName: L,
    dropdownStyle: H,
    dropdownClassName: z,
    direction: u,
    dropdownMatchSelectWidth: J,
    dropdownRender: I,
    dropdownAlign: Q,
    placement: k,
    builtinPlacements: X,
    getPopupContainer: re,
    empty: h,
    getTriggerDOMNode: function() {
      return ot.current;
    },
    onPopupVisibleChange: Ir,
    onPopupMouseEnter: vr
  }, Fe ? /* @__PURE__ */ v.cloneElement(Fe, {
    ref: qe
  }) : /* @__PURE__ */ v.createElement(z0, Ze({}, e, {
    domRef: ot,
    prefixCls: i,
    inputElement: pt,
    ref: We,
    id: o,
    showSearch: oe,
    autoClearSearchValue: x,
    mode: y,
    activeDescendantId: $,
    tagRender: c,
    values: f,
    open: K,
    onToggleOpen: ge,
    activeValue: M,
    searchValue: Ve,
    onSearch: Te,
    onSearchSubmit: qt,
    onRemove: zn,
    tokenWithEnter: $e
  }))), En;
  return Fe ? En = Sn : En = /* @__PURE__ */ v.createElement("div", Ze({
    className: jo
  }, fe, {
    ref: et,
    onMouseDown: Hn,
    onKeyDown: Qt,
    onKeyUp: Lr,
    onFocus: rr,
    onBlur: Xt
  }), rt && !K && /* @__PURE__ */ v.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Re) {
    var Oe = Re.label, Rt = Re.value;
    return ["number", "string"].includes(Be(Oe)) ? Oe : Rt;
  }).join(", "))), Sn, Un, bn && ko), /* @__PURE__ */ v.createElement(F0.Provider, {
    value: Ar
  }, En);
});
process.env.NODE_ENV !== "production" && (G0.displayName = "BaseSelect");
const FP = function(e, t) {
  var r = v.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), n = v.useMemo(function() {
    var i = r.current, a = i.values, s = i.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var d;
        return W(W({}, f), {}, {
          label: (d = a.get(f.value)) === null || d === void 0 ? void 0 : d.label
        });
      }
      return f;
    }), u = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      u.set(f.value, f), l.set(f.value, t.get(f.value) || s.get(f.value));
    }), r.current.values = u, r.current.options = l, c;
  }, [e, t]), o = v.useCallback(function(i) {
    return t.get(i) || r.current.options.get(i);
  }, [t]);
  return [n, o];
};
function Sc(e, t) {
  return ff(e).join("").toUpperCase().includes(t);
}
const $P = function(e, t, r, n, o) {
  return v.useMemo(function() {
    if (!r || n === !1)
      return e;
    var i = t.options, a = t.label, s = t.value, c = [], u = typeof n == "function", l = r.toUpperCase(), f = u ? n : function(h, m) {
      return o ? Sc(m[o], l) : m[i] ? Sc(m[a !== "children" ? a : "label"], l) : Sc(m[s], l);
    }, d = u ? function(h) {
      return Qu(h);
    } : function(h) {
      return h;
    };
    return e.forEach(function(h) {
      if (h[i]) {
        var m = f(r, d(h));
        if (m)
          c.push(h);
        else {
          var p = h[i].filter(function(g) {
            return f(r, d(g));
          });
          p.length && c.push(W(W({}, h), {}, ye({}, i, p)));
        }
        return;
      }
      f(r, d(h)) && c.push(h);
    }), c;
  }, [e, n, o, r, t]);
};
var hv = 0, kP = process.env.NODE_ENV !== "test" && Kt();
function LP() {
  var e;
  return kP ? (e = hv, hv += 1) : e = "TEST_OR_SSR", e;
}
function jP(e) {
  var t = v.useState(), r = G(t, 2), n = r[0], o = r[1];
  return v.useEffect(function() {
    o("rc_select_".concat(LP()));
  }, []), e || n;
}
var VP = ["children", "value"], zP = ["children"];
function HP(e) {
  var t = e, r = t.key, n = t.props, o = n.children, i = n.value, a = Mt(n, VP);
  return W({
    key: r,
    value: i !== void 0 ? i : r,
    children: o
  }, a);
}
function df(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Dn(e).map(function(r, n) {
    if (!/* @__PURE__ */ v.isValidElement(r) || !r.type)
      return null;
    var o = r, i = o.type.isSelectOptGroup, a = o.key, s = o.props, c = s.children, u = Mt(s, zP);
    return t || !i ? HP(r) : W(W({
      key: "__RC_SELECT_GRP__".concat(a === null ? n : a, "__"),
      label: a
    }, u), {}, {
      options: df(c)
    });
  }).filter(function(r) {
    return r;
  });
}
function BP(e, t, r, n, o) {
  return v.useMemo(function() {
    var i = e, a = !e;
    a && (i = df(t));
    var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = function(d, h, m) {
      m && typeof m == "string" && d.set(h[m], h);
    };
    function l(f) {
      for (var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = 0; h < f.length; h += 1) {
        var m = f[h];
        !m[r.options] || d ? (s.set(m[r.value], m), u(c, m, r.label), u(c, m, n), u(c, m, o)) : l(m[r.options], !0);
      }
    }
    return l(i), {
      options: i,
      valueOptions: s,
      labelOptions: c
    };
  }, [e, t, r, n, o]);
}
function vv(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return r;
}
var hf = function() {
  return null;
};
hf.isSelectOptGroup = !0;
var vf = function() {
  return null;
};
vf.isSelectOption = !0;
var K0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.height, n = e.offset, o = e.children, i = e.prefixCls, a = e.onInnerResize, s = e.innerProps, c = {}, u = {
    display: "flex",
    flexDirection: "column"
  };
  return n !== void 0 && (c = {
    height: r,
    position: "relative",
    overflow: "hidden"
  }, u = W(W({}, u), {}, {
    transform: "translateY(".concat(n, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), /* @__PURE__ */ v.createElement("div", {
    style: c
  }, /* @__PURE__ */ v.createElement(kn, {
    onResize: function(f) {
      var d = f.offsetHeight;
      d && a && a();
    }
  }, /* @__PURE__ */ v.createElement("div", Ze({
    style: u,
    className: Ne(ye({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), o)));
});
K0.displayName = "Filler";
var WP = 20;
function pv(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var UP = /* @__PURE__ */ function(e) {
  Ri(r, e);
  var t = Pi(r);
  function r() {
    var n;
    br(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), n.moveRaf = null, n.scrollbarRef = /* @__PURE__ */ v.createRef(), n.thumbRef = /* @__PURE__ */ v.createRef(), n.visibleTimeout = null, n.state = {
      dragging: !1,
      pageY: null,
      startTop: null,
      visible: !1
    }, n.delayHidden = function() {
      clearTimeout(n.visibleTimeout), n.setState({
        visible: !0
      }), n.visibleTimeout = setTimeout(function() {
        n.setState({
          visible: !1
        });
      }, 2e3);
    }, n.onScrollbarTouchStart = function(s) {
      s.preventDefault();
    }, n.onContainerMouseDown = function(s) {
      s.stopPropagation(), s.preventDefault();
    }, n.patchEvents = function() {
      window.addEventListener("mousemove", n.onMouseMove), window.addEventListener("mouseup", n.onMouseUp), n.thumbRef.current.addEventListener("touchmove", n.onMouseMove), n.thumbRef.current.addEventListener("touchend", n.onMouseUp);
    }, n.removeEvents = function() {
      window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("mouseup", n.onMouseUp), n.thumbRef.current && (n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove), n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)), Wt.cancel(n.moveRaf);
    }, n.onMouseDown = function(s) {
      var c = n.props.onStartMove;
      n.setState({
        dragging: !0,
        pageY: pv(s),
        startTop: n.getTop()
      }), c(), n.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, n.onMouseMove = function(s) {
      var c = n.state, u = c.dragging, l = c.pageY, f = c.startTop, d = n.props.onScroll;
      if (Wt.cancel(n.moveRaf), u) {
        var h = pv(s) - l, m = f + h, p = n.getEnableScrollRange(), g = n.getEnableHeightRange(), y = g ? m / g : 0, S = Math.ceil(y * p);
        n.moveRaf = Wt(function() {
          d(S);
        });
      }
    }, n.onMouseUp = function() {
      var s = n.props.onStopMove;
      n.setState({
        dragging: !1
      }), s(), n.removeEvents();
    }, n.getSpinHeight = function() {
      var s = n.props, c = s.height, u = s.count, l = c / u * 10;
      return l = Math.max(l, WP), l = Math.min(l, c / 2), Math.floor(l);
    }, n.getEnableScrollRange = function() {
      var s = n.props, c = s.scrollHeight, u = s.height;
      return c - u || 0;
    }, n.getEnableHeightRange = function() {
      var s = n.props.height, c = n.getSpinHeight();
      return s - c || 0;
    }, n.getTop = function() {
      var s = n.props.scrollTop, c = n.getEnableScrollRange(), u = n.getEnableHeightRange();
      if (s === 0 || c === 0)
        return 0;
      var l = s / c;
      return l * u;
    }, n.showScroll = function() {
      var s = n.props, c = s.height, u = s.scrollHeight;
      return u > c;
    }, n;
  }
  return Sr(r, [{
    key: "componentDidMount",
    value: function() {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      o.scrollTop !== this.props.scrollTop && this.delayHidden();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var o, i;
      this.removeEvents(), (o = this.scrollbarRef.current) === null || o === void 0 || o.removeEventListener("touchstart", this.onScrollbarTouchStart), (i = this.thumbRef.current) === null || i === void 0 || i.removeEventListener("touchstart", this.onMouseDown), clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: (
      // ====================== Render =======================
      function() {
        var o = this.state, i = o.dragging, a = o.visible, s = this.props, c = s.prefixCls, u = s.direction, l = this.getSpinHeight(), f = this.getTop(), d = this.showScroll(), h = d && a, m = u === "rtl" ? {
          left: 0
        } : {
          right: 0
        };
        return /* @__PURE__ */ v.createElement("div", {
          ref: this.scrollbarRef,
          className: Ne("".concat(c, "-scrollbar"), ye({}, "".concat(c, "-scrollbar-show"), d)),
          style: W(W({
            width: 8,
            top: 0,
            bottom: 0
          }, m), {}, {
            position: "absolute",
            display: h ? null : "none"
          }),
          onMouseDown: this.onContainerMouseDown,
          onMouseMove: this.delayHidden
        }, /* @__PURE__ */ v.createElement("div", {
          ref: this.thumbRef,
          className: Ne("".concat(c, "-scrollbar-thumb"), ye({}, "".concat(c, "-scrollbar-thumb-moving"), i)),
          style: {
            width: "100%",
            height: l,
            top: f,
            left: 0,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 99,
            cursor: "pointer",
            userSelect: "none"
          },
          onMouseDown: this.onMouseDown
        }));
      }
    )
  }]), r;
}(v.Component);
function qP(e) {
  var t = e.children, r = e.setRef, n = v.useCallback(function(o) {
    r(o);
  }, []);
  return /* @__PURE__ */ v.cloneElement(t, {
    ref: n
  });
}
function QP(e, t, r, n, o, i) {
  var a = i.getKey;
  return e.slice(t, r + 1).map(function(s, c) {
    var u = t + c, l = o(s, u, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), f = a(s);
    return /* @__PURE__ */ v.createElement(qP, {
      key: f,
      setRef: function(h) {
        return n(s, h);
      }
    }, l);
  });
}
var GP = /* @__PURE__ */ function() {
  function e() {
    br(this, e), this.maps = void 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Sr(e, [{
    key: "set",
    value: function(r, n) {
      this.maps[r] = n;
    }
  }, {
    key: "get",
    value: function(r) {
      return this.maps[r];
    }
  }]), e;
}();
function KP(e, t, r) {
  var n = v.useState(0), o = G(n, 2), i = o[0], a = o[1], s = De(/* @__PURE__ */ new Map()), c = De(new GP()), u = De();
  function l() {
    Wt.cancel(u.current);
  }
  function f() {
    l(), u.current = Wt(function() {
      s.current.forEach(function(h, m) {
        if (h && h.offsetParent) {
          var p = $a(h), g = p.offsetHeight;
          c.current.get(m) !== g && c.current.set(m, p.offsetHeight);
        }
      }), a(function(h) {
        return h + 1;
      });
    });
  }
  function d(h, m) {
    var p = e(h), g = s.current.get(p);
    m ? (s.current.set(p, m), f()) : s.current.delete(p), !g != !m && (m ? t?.(h) : r?.(h));
  }
  return Bt(function() {
    return l;
  }, []), [d, f, c.current, i];
}
function YP(e, t, r, n, o, i, a, s) {
  var c = v.useRef();
  return function(u) {
    if (u == null) {
      s();
      return;
    }
    if (Wt.cancel(c.current), typeof u == "number")
      a(u);
    else if (u && Be(u) === "object") {
      var l, f = u.align;
      "index" in u ? l = u.index : l = t.findIndex(function(p) {
        return o(p) === u.key;
      });
      var d = u.offset, h = d === void 0 ? 0 : d, m = function p(g, y) {
        if (!(g < 0 || !e.current)) {
          var S = e.current.clientHeight, E = !1, w = y;
          if (S) {
            for (var b = y || f, C = 0, O = 0, R = 0, M = Math.min(t.length, l), _ = 0; _ <= M; _ += 1) {
              var $ = o(t[_]);
              O = C;
              var T = r.get($);
              R = O + (T === void 0 ? n : T), C = R, _ === l && T === void 0 && (E = !0);
            }
            var x = null;
            switch (b) {
              case "top":
                x = O - h;
                break;
              case "bottom":
                x = R - S + h;
                break;
              default: {
                var P = e.current.scrollTop, A = P + S;
                O < P ? w = "top" : R > A && (w = "bottom");
              }
            }
            x !== null && x !== e.current.scrollTop && a(x);
          }
          c.current = Wt(function() {
            E && i(), p(g - 1, w);
          }, 2);
        }
      };
      m(3);
    }
  };
}
function XP(e, t, r) {
  var n = e.length, o = t.length, i, a;
  if (n === 0 && o === 0)
    return null;
  n < o ? (i = e, a = t) : (i = t, a = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function c(m) {
    return m !== void 0 ? r(m) : s;
  }
  for (var u = null, l = Math.abs(n - o) !== 1, f = 0; f < a.length; f += 1) {
    var d = c(i[f]), h = c(a[f]);
    if (d !== h) {
      u = f, l = l || d !== c(a[f + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: l
  };
}
function JP(e, t, r) {
  var n = v.useState(e), o = G(n, 2), i = o[0], a = o[1], s = v.useState(null), c = G(s, 2), u = c[0], l = c[1];
  return v.useEffect(function() {
    var f = XP(i || [], e || [], t);
    f?.index !== void 0 && (r?.(f.index), l(e[f.index])), a(e);
  }, [e]), [u];
}
var ZP = (typeof navigator > "u" ? "undefined" : Be(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Y0 = function(e, t) {
  var r = De(!1), n = De(null);
  function o() {
    clearTimeout(n.current), r.current = !0, n.current = setTimeout(function() {
      r.current = !1;
    }, 50);
  }
  var i = De({
    top: e,
    bottom: t
  });
  return i.current.top = e, i.current.bottom = t, function(a) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = (
      // Pass origin wheel when on the top
      a < 0 && i.current.top || // Pass origin wheel when on the bottom
      a > 0 && i.current.bottom
    );
    return s && c ? (clearTimeout(n.current), r.current = !1) : (!c || r.current) && o(), !r.current && c;
  };
};
function eM(e, t, r, n) {
  var o = De(0), i = De(null), a = De(null), s = De(!1), c = Y0(t, r);
  function u(f) {
    if (e) {
      Wt.cancel(i.current);
      var d = f.deltaY;
      o.current += d, a.current = d, !c(d) && (ZP || f.preventDefault(), i.current = Wt(function() {
        var h = s.current ? 10 : 1;
        n(o.current * h), o.current = 0;
      }));
    }
  }
  function l(f) {
    e && (s.current = f.detail === a.current);
  }
  return [u, l];
}
var tM = 14 / 15;
function rM(e, t, r) {
  var n = De(!1), o = De(0), i = De(null), a = De(null), s, c = function(d) {
    if (n.current) {
      var h = Math.ceil(d.touches[0].pageY), m = o.current - h;
      o.current = h, r(m) && d.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        m *= tM, (!r(m, !0) || Math.abs(m) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, u = function() {
    n.current = !1, s();
  }, l = function(d) {
    s(), d.touches.length === 1 && !n.current && (n.current = !0, o.current = Math.ceil(d.touches[0].pageY), i.current = d.target, i.current.addEventListener("touchmove", c), i.current.addEventListener("touchend", u));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", u));
  }, _t(function() {
    return e && t.current.addEventListener("touchstart", l), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", l), s(), clearInterval(a.current);
    };
  }, [e]);
}
var nM = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], oM = [], iM = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function aM(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-virtual-list" : r, o = e.className, i = e.height, a = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, u = e.style, l = e.data, f = e.children, d = e.itemKey, h = e.virtual, m = e.direction, p = e.component, g = p === void 0 ? "div" : p, y = e.onScroll, S = e.onVisibleChange, E = e.innerProps, w = Mt(e, nM), b = !!(h !== !1 && i && a), C = b && l && a * l.length > i, O = fr(0), R = G(O, 2), M = R[0], _ = R[1], $ = fr(!1), T = G($, 2), x = T[0], P = T[1], A = Ne(n, ye({}, "".concat(n, "-rtl"), m === "rtl"), o), F = l || oM, D = De(), B = De(), q = De(), ne = v.useCallback(function(he) {
    return typeof d == "function" ? d(he) : he?.[d];
  }, [d]), se = {
    getKey: ne
  };
  function L(he) {
    _(function(Se) {
      var Ve;
      typeof he == "function" ? Ve = he(Se) : Ve = he;
      var pt = fe(Ve);
      return D.current.scrollTop = pt, pt;
    });
  }
  var H = De({
    start: 0,
    end: F.length
  }), z = De(), J = JP(F, ne), I = G(J, 1), Q = I[0];
  z.current = Q;
  var k = KP(ne, null, null), X = G(k, 4), re = X[0], Y = X[1], N = X[2], Z = X[3], j = v.useMemo(function() {
    if (!b)
      return {
        scrollHeight: void 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    if (!C) {
      var he;
      return {
        scrollHeight: ((he = B.current) === null || he === void 0 ? void 0 : he.offsetHeight) || 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    }
    for (var Se = 0, Ve, pt, Fe, qe = F.length, Ce = 0; Ce < qe; Ce += 1) {
      var ut = F[Ce], Tt = ne(ut), xe = N.get(Tt), ze = Se + (xe === void 0 ? a : xe);
      ze >= M && Ve === void 0 && (Ve = Ce, pt = Se), ze > M + i && Fe === void 0 && (Fe = Ce), Se = ze;
    }
    return Ve === void 0 && (Ve = 0, pt = 0, Fe = Math.ceil(i / a)), Fe === void 0 && (Fe = F.length - 1), Fe = Math.min(Fe + 1, F.length), {
      scrollHeight: Se,
      start: Ve,
      end: Fe,
      offset: pt
    };
  }, [C, b, M, F, Z, i]), ee = j.scrollHeight, le = j.start, ce = j.end, de = j.offset;
  H.current.start = le, H.current.end = ce;
  var me = ee - i, oe = De(me);
  oe.current = me;
  function fe(he) {
    var Se = he;
    return Number.isNaN(oe.current) || (Se = Math.min(Se, oe.current)), Se = Math.max(Se, 0), Se;
  }
  var Me = M <= 0, Ie = M >= me, ie = Y0(Me, Ie);
  function ve(he) {
    var Se = he;
    L(Se);
  }
  function et(he) {
    var Se = he.currentTarget.scrollTop;
    Se !== M && L(Se), y?.(he);
  }
  var ot = eM(b, Me, Ie, function(he) {
    L(function(Se) {
      var Ve = Se + he;
      return Ve;
    });
  }), tt = G(ot, 2), We = tt[0], Ue = tt[1];
  rM(b, D, function(he, Se) {
    return ie(he, Se) ? !1 : (We({
      preventDefault: function() {
      },
      deltaY: he
    }), !0);
  }), _t(function() {
    function he(Se) {
      b && Se.preventDefault();
    }
    return D.current.addEventListener("wheel", We), D.current.addEventListener("DOMMouseScroll", Ue), D.current.addEventListener("MozMousePixelScroll", he), function() {
      D.current && (D.current.removeEventListener("wheel", We), D.current.removeEventListener("DOMMouseScroll", Ue), D.current.removeEventListener("MozMousePixelScroll", he));
    };
  }, [b]);
  var it = YP(D, F, N, a, ne, Y, L, function() {
    var he;
    (he = q.current) === null || he === void 0 || he.delayHidden();
  });
  v.useImperativeHandle(t, function() {
    return {
      scrollTo: it
    };
  }), _t(function() {
    if (S) {
      var he = F.slice(le, ce + 1);
      S(he, F);
    }
  }, [le, ce, F]);
  var Yt = QP(F, le, ce, re, f, se), rt = null;
  return i && (rt = W(ye({}, c ? "height" : "maxHeight", i), iM), b && (rt.overflowY = "hidden", x && (rt.pointerEvents = "none"))), /* @__PURE__ */ v.createElement("div", Ze({
    style: W(W({}, u), {}, {
      position: "relative"
    }),
    className: A
  }, w), /* @__PURE__ */ v.createElement(g, {
    className: "".concat(n, "-holder"),
    style: rt,
    ref: D,
    onScroll: et
  }, /* @__PURE__ */ v.createElement(K0, {
    prefixCls: n,
    height: ee,
    offset: de,
    onInnerResize: Y,
    ref: B,
    innerProps: E
  }, Yt)), b && /* @__PURE__ */ v.createElement(UP, {
    ref: q,
    prefixCls: n,
    scrollTop: M,
    height: i,
    scrollHeight: ee,
    count: F.length,
    direction: m,
    onScroll: ve,
    onStartMove: function() {
      P(!0);
    },
    onStopMove: function() {
      P(!1);
    }
  }));
}
var X0 = /* @__PURE__ */ v.forwardRef(aM);
X0.displayName = "List";
var J0 = /* @__PURE__ */ v.createContext(null);
function sM() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var cM = ["disabled", "title", "children", "style", "className"];
function mv(e) {
  return typeof e == "string" || typeof e == "number";
}
var uM = function(t, r) {
  var n = WR(), o = n.prefixCls, i = n.id, a = n.open, s = n.multiple, c = n.mode, u = n.searchValue, l = n.toggleOpen, f = n.notFoundContent, d = n.onPopupScroll, h = v.useContext(J0), m = h.flattenOptions, p = h.onActiveValue, g = h.defaultActiveFirstOption, y = h.onSelect, S = h.menuItemSelectedIcon, E = h.rawValues, w = h.fieldNames, b = h.virtual, C = h.direction, O = h.listHeight, R = h.listItemHeight, M = "".concat(o, "-item"), _ = vs(function() {
    return m;
  }, [a, m], function(Q, k) {
    return k[0] && Q[1] !== k[1];
  }), $ = v.useRef(null), T = function(k) {
    k.preventDefault();
  }, x = function(k) {
    $.current && $.current.scrollTo(typeof k == "number" ? {
      index: k
    } : k);
  }, P = function(k) {
    for (var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, re = _.length, Y = 0; Y < re; Y += 1) {
      var N = (k + Y * X + re) % re, Z = _[N], j = Z.group, ee = Z.data;
      if (!j && !ee.disabled)
        return N;
    }
    return -1;
  }, A = v.useState(function() {
    return P(0);
  }), F = G(A, 2), D = F[0], B = F[1], q = function(k) {
    var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B(k);
    var re = {
      source: X ? "keyboard" : "mouse"
    }, Y = _[k];
    if (!Y) {
      p(null, -1, re);
      return;
    }
    p(Y.value, k, re);
  };
  Bt(function() {
    q(g !== !1 ? P(0) : -1);
  }, [_.length, u]);
  var ne = v.useCallback(function(Q) {
    return E.has(Q) && c !== "combobox";
  }, [c, be(E).toString(), E.size]);
  Bt(function() {
    var Q = setTimeout(function() {
      if (!s && a && E.size === 1) {
        var X = Array.from(E)[0], re = _.findIndex(function(Y) {
          var N = Y.data;
          return N.value === X;
        });
        re !== -1 && (q(re), x(re));
      }
    });
    if (a) {
      var k;
      (k = $.current) === null || k === void 0 || k.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(Q);
    };
  }, [a, u, m.length]);
  var se = function(k) {
    k !== void 0 && y(k, {
      selected: !E.has(k)
    }), s || l(!1);
  };
  if (v.useImperativeHandle(r, function() {
    return {
      onKeyDown: function(k) {
        var X = k.which, re = k.ctrlKey;
        switch (X) {
          case te.N:
          case te.P:
          case te.UP:
          case te.DOWN: {
            var Y = 0;
            if (X === te.UP ? Y = -1 : X === te.DOWN ? Y = 1 : sM() && re && (X === te.N ? Y = 1 : X === te.P && (Y = -1)), Y !== 0) {
              var N = P(D + Y, Y);
              x(N), q(N, !0);
            }
            break;
          }
          case te.ENTER: {
            var Z = _[D];
            Z && !Z.data.disabled ? se(Z.value) : se(void 0), a && k.preventDefault();
            break;
          }
          case te.ESC:
            l(!1), a && k.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(k) {
        x(k);
      }
    };
  }), _.length === 0)
    return /* @__PURE__ */ v.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(M, "-empty"),
      onMouseDown: T
    }, f);
  var L = Object.keys(w).map(function(Q) {
    return w[Q];
  }), H = function(k) {
    return k.label;
  };
  function z(Q, k) {
    var X = Q.group;
    return {
      role: X ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(k)
    };
  }
  var J = function(k) {
    var X = _[k];
    if (!X)
      return null;
    var re = X.data || {}, Y = re.value, N = X.group, Z = Ua(re, !0), j = H(X);
    return X ? /* @__PURE__ */ v.createElement("div", Ze({
      "aria-label": typeof j == "string" && !N ? j : null
    }, Z, {
      key: k
    }, z(X, k), {
      "aria-selected": ne(Y)
    }), Y) : null;
  }, I = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, b && /* @__PURE__ */ v.createElement("div", Ze({}, I, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), J(D - 1), J(D), J(D + 1)), /* @__PURE__ */ v.createElement(X0, {
    itemKey: "key",
    ref: $,
    data: _,
    height: O,
    itemHeight: R,
    fullHeight: !1,
    onMouseDown: T,
    onScroll: d,
    virtual: b,
    direction: C,
    innerProps: b ? null : I
  }, function(Q, k) {
    var X, re = Q.group, Y = Q.groupOption, N = Q.data, Z = Q.label, j = Q.value, ee = N.key;
    if (re) {
      var le, ce = (le = N.title) !== null && le !== void 0 ? le : mv(Z) ? Z.toString() : void 0;
      return /* @__PURE__ */ v.createElement("div", {
        className: Ne(M, "".concat(M, "-group")),
        title: ce
      }, Z !== void 0 ? Z : ee);
    }
    var de = N.disabled, me = N.title;
    N.children;
    var oe = N.style, fe = N.className, Me = Mt(N, cM), Ie = Il(Me, L), ie = ne(j), ve = "".concat(M, "-option"), et = Ne(M, ve, fe, (X = {}, ye(X, "".concat(ve, "-grouped"), Y), ye(X, "".concat(ve, "-active"), D === k && !de), ye(X, "".concat(ve, "-disabled"), de), ye(X, "".concat(ve, "-selected"), ie), X)), ot = H(Q), tt = !S || typeof S == "function" || ie, We = typeof ot == "number" ? ot : ot || j, Ue = mv(We) ? We.toString() : void 0;
    return me !== void 0 && (Ue = me), /* @__PURE__ */ v.createElement("div", Ze({}, Ua(Ie), b ? {} : z(Q, k), {
      "aria-selected": ie,
      className: et,
      title: Ue,
      onMouseMove: function() {
        D === k || de || q(k);
      },
      onClick: function() {
        de || se(j);
      },
      style: oe
    }), /* @__PURE__ */ v.createElement("div", {
      className: "".concat(ve, "-content")
    }, We), /* @__PURE__ */ v.isValidElement(S) || ie, tt && /* @__PURE__ */ v.createElement(Ps, {
      className: "".concat(M, "-option-state"),
      customizeIcon: S,
      customizeIconProps: {
        isSelected: ie
      }
    }, ie ? "✓" : null));
  }));
}, Z0 = /* @__PURE__ */ v.forwardRef(uM);
Z0.displayName = "OptionList";
function lM(e) {
  var t = e.mode, r = e.options, n = e.children, o = e.backfill, i = e.allowClear, a = e.placeholder, s = e.getInputElement, c = e.showSearch, u = e.onSearch, l = e.defaultOpen, f = e.autoFocus, d = e.labelInValue, h = e.value, m = e.inputValue, p = e.optionLabelProp, g = Ya(t), y = c !== void 0 ? c : g || t === "combobox", S = r || df(n);
  if (ke(t !== "tags" || S.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var E = S.some(function(C) {
      return C.options ? C.options.some(function(O) {
        return typeof ("value" in O ? O.value : O.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    ke(!E, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (ke(t !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), ke(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), ke(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), ou(t !== "combobox" || !s || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !y && t !== "combobox" && t !== "tags" && ke(!1, "`onSearch` should work with `showSearch` instead of use alone."), ou(!l || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var w = ff(h);
    ke(!d || w.every(function(C) {
      return Be(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), ke(!g || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (n) {
    var b = null;
    Dn(n).some(function(C) {
      if (!/* @__PURE__ */ v.isValidElement(C) || !C.type)
        return !1;
      var O = C, R = O.type;
      if (R.isSelectOption)
        return !1;
      if (R.isSelectOptGroup) {
        var M = Dn(C.props.children).every(function(_) {
          return !/* @__PURE__ */ v.isValidElement(_) || !C.type || _.type.isSelectOption ? !0 : (b = _.type, !1);
        });
        return !M;
      }
      return b = R, !0;
    }), b && ke(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(b.displayName || b.name || b, "`.")), ke(m === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function fM(e, t) {
  if (e) {
    var r = function n(o) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < o.length; a++) {
        var s = o[a];
        if (s[t?.value] === null)
          return ke(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(s[t?.options]) && n(s[t?.options], !0))
          break;
      }
    };
    r(e);
  }
}
var dM = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], hM = ["inputValue"];
function vM(e) {
  return !e || Be(e) !== "object";
}
var ey = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.id, n = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, a = e.backfill, s = e.fieldNames, c = e.inputValue, u = e.searchValue, l = e.onSearch, f = e.autoClearSearchValue, d = f === void 0 ? !0 : f, h = e.onSelect, m = e.onDeselect, p = e.dropdownMatchSelectWidth, g = p === void 0 ? !0 : p, y = e.filterOption, S = e.filterSort, E = e.optionFilterProp, w = e.optionLabelProp, b = e.options, C = e.children, O = e.defaultActiveFirstOption, R = e.menuItemSelectedIcon, M = e.virtual, _ = e.direction, $ = e.listHeight, T = $ === void 0 ? 200 : $, x = e.listItemHeight, P = x === void 0 ? 20 : x, A = e.value, F = e.defaultValue, D = e.labelInValue, B = e.onChange, q = Mt(e, dM), ne = jP(r), se = Ya(n), L = !!(!b && C), H = v.useMemo(function() {
    return y === void 0 && n === "combobox" ? !1 : y;
  }, [y, n]), z = v.useMemo(
    function() {
      return Q0(s, L);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      L
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), J = za("", {
    value: u !== void 0 ? u : c,
    postState: function(ae) {
      return ae || "";
    }
  }), I = G(J, 2), Q = I[0], k = I[1], X = BP(b, C, z, E, w), re = X.valueOptions, Y = X.labelOptions, N = X.options, Z = v.useCallback(function(K) {
    var ae = ff(K);
    return ae.map(function(ue) {
      var ge, $e, Te, qt, Nt;
      if (vM(ue))
        ge = ue;
      else {
        var Vt;
        Te = ue.key, $e = ue.label, ge = (Vt = ue.value) !== null && Vt !== void 0 ? Vt : Te;
      }
      var dt = re.get(ge);
      if (dt) {
        var ar;
        if ($e === void 0 && ($e = dt?.[w || z.label]), Te === void 0 && (Te = (ar = dt?.key) !== null && ar !== void 0 ? ar : ge), qt = dt?.disabled, Nt = dt?.title, process.env.NODE_ENV !== "production" && !w) {
          var Qt = dt?.[z.label];
          Qt !== void 0 && !/* @__PURE__ */ v.isValidElement(Qt) && !/* @__PURE__ */ v.isValidElement($e) && Qt !== $e && ke(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: $e,
        value: ge,
        key: Te,
        disabled: qt,
        title: Nt
      };
    });
  }, [z, w, re]), j = za(F, {
    value: A
  }), ee = G(j, 2), le = ee[0], ce = ee[1], de = v.useMemo(function() {
    var K, ae = Z(le);
    return n === "combobox" && cP((K = ae[0]) === null || K === void 0 ? void 0 : K.value) ? [] : ae;
  }, [le, Z, n]), me = FP(de, re), oe = G(me, 2), fe = oe[0], Me = oe[1], Ie = v.useMemo(function() {
    if (!n && fe.length === 1) {
      var K = fe[0];
      if (K.value === null && (K.label === null || K.label === void 0))
        return [];
    }
    return fe.map(function(ae) {
      var ue;
      return W(W({}, ae), {}, {
        label: (ue = ae.label) !== null && ue !== void 0 ? ue : ae.value
      });
    });
  }, [n, fe]), ie = v.useMemo(function() {
    return new Set(fe.map(function(K) {
      return K.value;
    }));
  }, [fe]);
  v.useEffect(function() {
    if (n === "combobox") {
      var K, ae = (K = fe[0]) === null || K === void 0 ? void 0 : K.value;
      k(sP(ae) ? String(ae) : "");
    }
  }, [fe]);
  var ve = vv(function(K, ae) {
    var ue, ge = ae ?? K;
    return ue = {}, ye(ue, z.value, K), ye(ue, z.label, ge), ue;
  }), et = v.useMemo(function() {
    if (n !== "tags")
      return N;
    var K = be(N), ae = function(ge) {
      return re.has(ge);
    };
    return be(fe).sort(function(ue, ge) {
      return ue.value < ge.value ? -1 : 1;
    }).forEach(function(ue) {
      var ge = ue.value;
      ae(ge) || K.push(ve(ge, ue.label));
    }), K;
  }, [ve, N, re, fe, n]), ot = $P(et, z, Q, H, E), tt = v.useMemo(function() {
    return n !== "tags" || !Q || ot.some(function(K) {
      return K[E || "value"] === Q;
    }) ? ot : [ve(Q)].concat(be(ot));
  }, [ve, E, n, ot, Q]), We = v.useMemo(function() {
    return S ? be(tt).sort(function(K, ae) {
      return S(K, ae);
    }) : tt;
  }, [tt, S]), Ue = v.useMemo(function() {
    return MP(We, {
      fieldNames: z,
      childrenAsData: L
    });
  }, [We, z, L]), it = function(ae) {
    var ue = Z(ae);
    if (ce(ue), B && // Trigger event only when value changed
    (ue.length !== fe.length || ue.some(function(Te, qt) {
      var Nt;
      return ((Nt = fe[qt]) === null || Nt === void 0 ? void 0 : Nt.value) !== Te?.value;
    }))) {
      var ge = D ? ue : ue.map(function(Te) {
        return Te.value;
      }), $e = ue.map(function(Te) {
        return Qu(Me(Te.value));
      });
      B(
        // Value
        se ? ge : ge[0],
        // Option
        se ? $e : $e[0]
      );
    }
  }, Yt = v.useState(null), rt = G(Yt, 2), he = rt[0], Se = rt[1], Ve = v.useState(0), pt = G(Ve, 2), Fe = pt[0], qe = pt[1], Ce = O !== void 0 ? O : n !== "combobox", ut = v.useCallback(function(K, ae) {
    var ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ge = ue.source, $e = ge === void 0 ? "keyboard" : ge;
    qe(ae), a && n === "combobox" && K !== null && $e === "keyboard" && Se(String(K));
  }, [a, n]), Tt = function(ae, ue, ge) {
    var $e = function() {
      var Ft, rr = Me(ae);
      return [D ? {
        label: rr?.[z.label],
        value: ae,
        key: (Ft = rr?.key) !== null && Ft !== void 0 ? Ft : ae
      } : ae, Qu(rr)];
    };
    if (ue && h) {
      var Te = $e(), qt = G(Te, 2), Nt = qt[0], Vt = qt[1];
      h(Nt, Vt);
    } else if (!ue && m && ge !== "clear") {
      var dt = $e(), ar = G(dt, 2), Qt = ar[0], Lr = ar[1];
      m(Qt, Lr);
    }
  }, xe = vv(function(K, ae) {
    var ue, ge = se ? ae.selected : !0;
    ge ? ue = se ? [].concat(be(fe), [K]) : [K] : ue = fe.filter(function($e) {
      return $e.value !== K;
    }), it(ue), Tt(K, ge), n === "combobox" ? Se("") : (!Ya || d) && (k(""), Se(""));
  }), ze = function(ae, ue) {
    it(ae);
    var ge = ue.type, $e = ue.values;
    (ge === "remove" || ge === "clear") && $e.forEach(function(Te) {
      Tt(Te.value, !1, ge);
    });
  }, lt = function(ae, ue) {
    if (k(ae), Se(null), ue.source === "submit") {
      var ge = (ae || "").trim();
      if (ge) {
        var $e = Array.from(new Set([].concat(be(ie), [ge])));
        it($e), Tt(ge, !0), k("");
      }
      return;
    }
    ue.source !== "blur" && (n === "combobox" && it(ae), l?.(ae));
  }, vt = function(ae) {
    var ue = ae;
    n !== "tags" && (ue = ae.map(function($e) {
      var Te = Y.get($e);
      return Te?.value;
    }).filter(function($e) {
      return $e !== void 0;
    }));
    var ge = Array.from(new Set([].concat(be(ie), be(ue))));
    it(ge), ge.forEach(function($e) {
      Tt($e, !0);
    });
  }, Ee = v.useMemo(function() {
    var K = M !== !1 && g !== !1;
    return W(W({}, X), {}, {
      flattenOptions: Ue,
      onActiveValue: ut,
      defaultActiveFirstOption: Ce,
      onSelect: xe,
      menuItemSelectedIcon: R,
      rawValues: ie,
      fieldNames: z,
      virtual: K,
      direction: _,
      listHeight: T,
      listItemHeight: P,
      childrenAsData: L
    });
  }, [X, Ue, ut, Ce, xe, R, ie, z, M, g, T, P, L]);
  return process.env.NODE_ENV !== "production" && (lM(e), fM(N, z)), /* @__PURE__ */ v.createElement(J0.Provider, {
    value: Ee
  }, /* @__PURE__ */ v.createElement(G0, Ze({}, q, {
    // >>> MISC
    id: ne,
    prefixCls: i,
    ref: t,
    omitDomProps: hM,
    mode: n,
    displayValues: Ie,
    onDisplayValuesChange: ze,
    direction: _,
    searchValue: Q,
    onSearch: lt,
    autoClearSearchValue: d,
    onSearchSplit: vt,
    dropdownMatchSelectWidth: g,
    OptionList: Z0,
    emptyOptions: !Ue.length,
    activeValue: he,
    activeDescendantId: "".concat(ne, "_list_").concat(Fe)
  })));
});
process.env.NODE_ENV !== "production" && (ey.displayName = "Select");
var pf = ey;
pf.Option = vf;
pf.OptGroup = hf;
function pM(e, t, r) {
  return Ne({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const mM = (e, t) => t || e, ty = () => {
  const [, e] = Ln(), r = new Ht(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ v.createElement("svg", {
    style: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ v.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ v.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ v.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ v.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ v.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ v.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (ty.displayName = "EmptyImage");
const gM = ty, ry = () => {
  const [, e] = Ln(), {
    colorFill: t,
    colorFillTertiary: r,
    colorFillQuaternary: n,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: a,
    contentColor: s
  } = go(() => ({
    borderColor: new Ht(t).onBackground(o).toHexShortString(),
    shadowColor: new Ht(r).onBackground(o).toHexShortString(),
    contentColor: new Ht(n).onBackground(o).toHexShortString()
  }), [t, r, n, o]);
  return /* @__PURE__ */ v.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ v.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ v.createElement("ellipse", {
    fill: a,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ v.createElement("g", {
    fillRule: "nonzero",
    stroke: i
  }, /* @__PURE__ */ v.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: s
  }))));
};
process.env.NODE_ENV !== "production" && (ry.displayName = "SimpleImage");
const yM = ry, bM = (e) => {
  const {
    componentCls: t,
    margin: r,
    marginXS: n,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: n,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: n,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: r
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-description`]: {
          color: e.colorTextDisabled
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: n,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, SM = Ni("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: r
  } = e, n = er(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r * 2.5,
    emptyImgHeightMD: r,
    emptyImgHeightSM: r * 0.875
  });
  return [bM(n)];
});
var EM = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const ny = /* @__PURE__ */ v.createElement(gM, null), oy = /* @__PURE__ */ v.createElement(yM, null), Ms = (e) => {
  var {
    className: t,
    rootClassName: r,
    prefixCls: n,
    image: o = ny,
    description: i,
    children: a,
    imageStyle: s,
    style: c
  } = e, u = EM(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: l,
    direction: f,
    empty: d
  } = v.useContext(or), h = l("empty", n), [m, p] = SM(h), [g] = QC("Empty"), y = typeof i < "u" ? i : g?.description, S = typeof y == "string" ? y : "empty";
  let E = null;
  return typeof o == "string" ? E = /* @__PURE__ */ v.createElement("img", {
    alt: S,
    src: o
  }) : E = o, m(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: Ne(p, h, d?.className, {
      [`${h}-normal`]: o === oy,
      [`${h}-rtl`]: f === "rtl"
    }, t, r),
    style: Object.assign(Object.assign({}, d?.style), c)
  }, u), /* @__PURE__ */ v.createElement("div", {
    className: `${h}-image`,
    style: s
  }, E), y && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-description`
  }, y), a && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-footer`
  }, a)));
};
Ms.PRESENTED_IMAGE_DEFAULT = ny;
Ms.PRESENTED_IMAGE_SIMPLE = oy;
process.env.NODE_ENV !== "production" && (Ms.displayName = "Empty");
const Yo = Ms, wM = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: r
  } = Gt(or), n = r("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Pe.createElement(Yo, {
        image: Yo.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Pe.createElement(Yo, {
        image: Yo.PRESENTED_IMAGE_SIMPLE,
        className: `${n}-small`
      });
    default:
      return /* @__PURE__ */ Pe.createElement(Yo, null);
  }
}, CM = wM, OM = (e) => {
  const {
    controlPaddingHorizontal: t,
    controlHeight: r,
    fontSize: n,
    lineHeight: o
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: r,
    padding: `${(r - n * o) / 2}px ${t}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: o,
    boxSizing: "border-box"
  };
}, xM = (e) => {
  const {
    antCls: t,
    componentCls: r
  } = e, n = `${r}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, i = `&${t}-slide-up-appear${t}-slide-up-appear-active`, a = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${r}-dropdown-placement-`;
  return [
    {
      [`${r}-dropdown`]: Object.assign(Object.assign({}, Ss(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${o}${s}bottomLeft,
          ${i}${s}bottomLeft
        `]: {
          animationName: M0
        },
        [`
          ${o}${s}topLeft,
          ${i}${s}topLeft,
          ${o}${s}topRight,
          ${i}${s}topRight
        `]: {
          animationName: I0
        },
        [`${a}${s}bottomLeft`]: {
          animationName: N0
        },
        [`
          ${a}${s}topLeft,
          ${a}${s}topRight
        `]: {
          animationName: A0
        },
        "&-hidden": {
          display: "none"
        },
        [`${n}`]: Object.assign(Object.assign({}, OM(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, bu),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${n}-option-disabled)`]: {
              backgroundColor: e.controlItemBgHover
            },
            [`&-selected:not(${n}-option-disabled)`]: {
              color: e.colorText,
              fontWeight: e.fontWeightStrong,
              backgroundColor: e.controlItemBgActive,
              [`${n}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${n}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    rv(e, "slide-up"),
    rv(e, "slide-down"),
    tv(e, "move-up"),
    tv(e, "move-down")
  ];
}, _M = xM, to = 2, iy = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: r,
    lineWidth: n
  } = e;
  const o = (r - t) / 2 - n, i = Math.ceil(o / 2);
  return [o, i];
};
function Ec(e, t) {
  const {
    componentCls: r,
    iconCls: n
  } = e, o = `${r}-selection-overflow`, i = e.controlHeightSM, [a] = iy(e), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-multiple${s}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [o]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${r}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${a - to}px ${to * 2}px`,
        borderRadius: e.borderRadius,
        [`${r}-show-search&`]: {
          cursor: "text"
        },
        [`${r}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${to}px 0`,
          lineHeight: `${i}px`,
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${r}-show-arrow ${r}-selector,
        &${r}-allow-clear ${r}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${r}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: to,
        marginBottom: to,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: to * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${r}-disabled&`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Bl()), {
          display: "inline-flex",
          alignItems: "center",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: e.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${o}-item + ${o}-item`]: {
        [`${r}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${r}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - a,
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${r}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    }
  };
}
const TM = (e) => {
  const {
    componentCls: t
  } = e, r = er(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), n = er(e, {
    fontSize: e.fontSizeLG,
    controlHeight: e.controlHeightLG,
    controlHeightSM: e.controlHeight,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, o] = iy(e);
  return [
    Ec(e),
    // ======================== Small ========================
    Ec(r, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: o
        }
      }
    },
    // ======================== Large ========================
    Ec(n, "lg")
  ];
}, RM = TM;
function wc(e, t) {
  const {
    componentCls: r,
    inputPaddingHorizontalBase: n,
    borderRadius: o
  } = e, i = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${r}-selector`]: Object.assign(Object.assign({}, Ss(e)), {
        display: "flex",
        borderRadius: o,
        [`${r}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: n,
          insetInlineEnd: n,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${r}-selection-item,
          ${r}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${i}px`,
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${i}px`
          }
        },
        [`${r}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${r}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${r}-selection-item:after`,
          /* For undefined value baseline align */
          `${r}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${r}-show-arrow ${r}-selection-item,
        &${r}-show-arrow ${r}-selection-placeholder
      `]: {
        paddingInlineEnd: a
      },
      // Opacity selection if open
      [`&${r}-open ${r}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${r}-customize-input)`]: {
        [`${r}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${n}px`,
          [`${r}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: `${i}px`
          }
        }
      },
      [`&${r}-customize-input`]: {
        [`${r}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${r}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${r}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${n}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function PM(e) {
  const {
    componentCls: t
  } = e, r = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    wc(e),
    // ======================== Small ========================
    // Shared
    wc(er(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: r,
            insetInlineEnd: r
          },
          [`${t}-selector`]: {
            padding: `0 ${r}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: r + e.fontSize * 1.5
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    wc(er(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const MM = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    backgroundColor: e.colorBgContainer,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${t}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${t}-multiple&`]: {
        background: e.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, Cc = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: n,
    borderHoverColor: o,
    outlineColor: i,
    antCls: a
  } = t, s = r ? {
    [`${n}-selector`]: {
      borderColor: o
    }
  } : {};
  return {
    [e]: {
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${a}-pagination-size-changer)`]: Object.assign(Object.assign({}, s), {
        [`${n}-focused& ${n}-selector`]: {
          borderColor: o,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${i}`,
          outline: 0
        },
        [`&:hover ${n}-selector`]: {
          borderColor: o
        }
      })
    }
  };
}, NM = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, IM = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: r,
    iconCls: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ss(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, MM(e)), NM(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, bu),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, bu), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, Bl()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [n]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${t}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${t}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${t}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: e.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${t}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${t}-has-feedback`]: {
      [`${t}-clear`]: {
        insetInlineEnd: r + e.fontSize + e.paddingXS
      }
    }
  };
}, AM = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== BorderLess ====================
        [`&-borderless ${t}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    IM(e),
    // Single
    PM(e),
    // Multiple
    RM(e),
    // Dropdown
    _M(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    Cc(t, er(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    Cc(`${t}-status-error`, er(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    Cc(`${t}-status-warning`, er(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    y0(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, DM = Ni("Select", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = er(e, {
    rootPrefixCls: r,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [AM(n)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), FM = (e) => {
  const r = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    _experimental: {
      dynamicInset: !0
    }
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, r), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, r), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, r), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, r), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function $M(e, t) {
  return e || FM(t);
}
function kM(e, t) {
  return t !== void 0 ? t : e !== null;
}
var ay = {};
Object.defineProperty(ay, "__esModule", { value: !0 });
var LM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, jM = ay.default = LM;
const sy = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: jM
});
process.env.NODE_ENV !== "production" && (sy.displayName = "CheckOutlined");
const VM = /* @__PURE__ */ v.forwardRef(sy);
var cy = {};
Object.defineProperty(cy, "__esModule", { value: !0 });
var zM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, HM = cy.default = zM;
const uy = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: HM
});
process.env.NODE_ENV !== "production" && (uy.displayName = "DownOutlined");
const BM = /* @__PURE__ */ v.forwardRef(uy);
var ly = {};
Object.defineProperty(ly, "__esModule", { value: !0 });
var WM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, UM = ly.default = WM;
const fy = (e, t) => /* @__PURE__ */ v.createElement(Zr, {
  ...e,
  ref: t,
  icon: UM
});
process.env.NODE_ENV !== "production" && (fy.displayName = "SearchOutlined");
const qM = /* @__PURE__ */ v.forwardRef(fy);
function QM(e) {
  let {
    suffixIcon: t,
    clearIcon: r,
    menuItemSelectedIcon: n,
    removeIcon: o,
    loading: i,
    multiple: a,
    hasFeedback: s,
    prefixCls: c,
    showSuffixIcon: u,
    feedbackIcon: l,
    showArrow: f
  } = e;
  const d = r ?? /* @__PURE__ */ v.createElement(Gg, null), h = (y) => t === null && !s && !f ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, u !== !1 && y, s && l);
  let m = null;
  if (t !== void 0)
    m = h(t);
  else if (i)
    m = h(/* @__PURE__ */ v.createElement(nf, {
      spin: !0
    }));
  else {
    const y = `${c}-suffix`;
    m = (S) => {
      let {
        open: E,
        showSearch: w
      } = S;
      return h(E && w ? /* @__PURE__ */ v.createElement(qM, {
        className: y
      }) : /* @__PURE__ */ v.createElement(BM, {
        className: y
      }));
    };
  }
  let p = null;
  n !== void 0 ? p = n : a ? p = /* @__PURE__ */ v.createElement(VM, null) : p = null;
  let g = null;
  return o !== void 0 ? g = o : g = /* @__PURE__ */ v.createElement(Xg, null), {
    clearIcon: d,
    suffixIcon: m,
    itemIcon: p,
    removeIcon: g
  };
}
var GM = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const dy = "SECRET_COMBOBOX_MODE_DO_NOT_USE", hy = (e, t) => {
  var r, {
    prefixCls: n,
    bordered: o = !0,
    className: i,
    rootClassName: a,
    getPopupContainer: s,
    popupClassName: c,
    dropdownClassName: u,
    listHeight: l = 256,
    placement: f,
    listItemHeight: d = 24,
    size: h,
    disabled: m,
    notFoundContent: p,
    status: g,
    builtinPlacements: y,
    dropdownMatchSelectWidth: S,
    popupMatchSelectWidth: E,
    direction: w,
    style: b
  } = e, C = GM(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style"]);
  const {
    getPopupContainer: O,
    getPrefixCls: R,
    renderEmpty: M,
    direction: _,
    virtual: $,
    popupMatchSelectWidth: T,
    popupOverflow: x,
    select: P
  } = v.useContext(or), A = R("select", n), F = R(), D = w ?? _, {
    compactSize: B,
    compactItemClassnames: q
  } = p0(A, D), [ne, se] = DM(A), L = v.useMemo(() => {
    const {
      mode: ie
    } = C;
    if (ie !== "combobox")
      return ie === dy ? "combobox" : ie;
  }, [C.mode]), H = L === "multiple" || L === "tags", z = kM(C.suffixIcon, C.showArrow), J = (r = E ?? S) !== null && r !== void 0 ? r : T, {
    status: I,
    hasFeedback: Q,
    isFormItemInput: k,
    feedbackIcon: X
  } = v.useContext(_R), re = mM(I, g);
  let Y;
  p !== void 0 ? Y = p : L === "combobox" ? Y = null : Y = M?.("Select") || /* @__PURE__ */ v.createElement(CM, {
    componentName: "Select"
  });
  const {
    suffixIcon: N,
    itemIcon: Z,
    removeIcon: j,
    clearIcon: ee
  } = QM(Object.assign(Object.assign({}, C), {
    multiple: H,
    hasFeedback: Q,
    feedbackIcon: X,
    showSuffixIcon: z,
    prefixCls: A,
    showArrow: C.showArrow
  })), le = Il(C, ["suffixIcon", "itemIcon"]), ce = Ne(c || u, {
    [`${A}-dropdown-${D}`]: D === "rtl"
  }, a, se), de = v0((ie) => {
    var ve;
    return (ve = h ?? B) !== null && ve !== void 0 ? ve : ie;
  }), me = v.useContext(Wl), oe = m ?? me, fe = Ne({
    [`${A}-lg`]: de === "large",
    [`${A}-sm`]: de === "small",
    [`${A}-rtl`]: D === "rtl",
    [`${A}-borderless`]: !o,
    [`${A}-in-form-item`]: k
  }, pM(A, re, Q), q, P?.className, i, a, se), Me = v.useMemo(() => f !== void 0 ? f : D === "rtl" ? "bottomRight" : "bottomLeft", [f, D]), Ie = $M(y, x);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && dr(!u, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && dr(S === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead."), process.env.NODE_ENV !== "production" && dr(!("showArrow" in C), "Select", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.")), ne(/* @__PURE__ */ v.createElement(pf, Object.assign({
    ref: t,
    virtual: $,
    showSearch: P?.showSearch
  }, le, {
    style: Object.assign(Object.assign({}, P?.style), b),
    dropdownMatchSelectWidth: J,
    builtinPlacements: Ie,
    transitionName: ET(F, "slide-up", C.transitionName),
    listHeight: l,
    listItemHeight: d,
    mode: L,
    prefixCls: A,
    placement: Me,
    direction: D,
    suffixIcon: N,
    menuItemSelectedIcon: Z,
    removeIcon: j,
    clearIcon: ee,
    notFoundContent: Y,
    className: fe,
    getPopupContainer: s || O,
    dropdownClassName: ce,
    disabled: oe
  })));
};
process.env.NODE_ENV !== "production" && (hy.displayName = "Select");
const Vn = /* @__PURE__ */ v.forwardRef(hy), KM = BR(Vn);
Vn.SECRET_COMBOBOX_MODE_DO_NOT_USE = dy;
Vn.Option = vf;
Vn.OptGroup = hf;
Vn._InternalPanelDoNotUseOrYouWillBeFired = KM;
process.env.NODE_ENV !== "production" && (Vn.displayName = "Select");
const YM = Vn;
let mr = null, Pn = (e) => e(), bi = [], Xa = {};
function XM() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = Xa, a = e ?? fg().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const JM = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: d,
      container: h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: y
    } = XM();
    return {
      prefixCls: d,
      getContainer: () => h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: y
    };
  }, [n, o] = v.useState(r), [i, a] = l0(n), s = fg(), c = s.getRootPrefixCls(), u = s.getIconPrefixCls(), l = s.getTheme(), f = () => {
    o(r);
  };
  return v.useEffect(f, []), v.useImperativeHandle(t, () => {
    const d = Object.assign({}, i);
    return Object.keys(d).forEach((h) => {
      d[h] = function() {
        return f(), i[h].apply(i, arguments);
      };
    }), {
      instance: d,
      sync: f
    };
  }), /* @__PURE__ */ v.createElement(ql, {
    prefixCls: c,
    iconPrefixCls: u,
    theme: l
  }, a);
});
function Ns() {
  if (!mr) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    mr = t, Pn(() => {
      f0(/* @__PURE__ */ v.createElement(JM, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, Ns());
          });
        }
      }), e);
    });
    return;
  }
  mr.instance && (bi.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          Pn(() => {
            const n = mr.instance.open(Object.assign(Object.assign({}, Xa), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          Pn(() => {
            mr?.instance.destroy(e.key);
          });
          break;
        default:
          Pn(() => {
            var n;
            const o = (n = mr.instance)[t].apply(n, be(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), bi = []);
}
function ZM(e) {
  Xa = Object.assign(Object.assign({}, Xa), e), Pn(() => {
    var t;
    (t = mr?.sync) === null || t === void 0 || t.call(mr);
  });
}
function eN(e) {
  const t = of((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return bi.push(o), () => {
      n ? Pn(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return Ns(), t;
}
function tN(e, t) {
  process.env.NODE_ENV !== "production" && vO("message");
  const r = of((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return bi.push(i), () => {
      o ? Pn(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return Ns(), r;
}
function rN(e) {
  bi.push({
    type: "destroy",
    key: e
  }), Ns();
}
const nN = ["success", "info", "warning", "error", "loading"], oN = {
  open: eN,
  destroy: rN,
  config: ZM,
  useMessage: S_,
  _InternalPanelDoNotUseOrYouWillBeFired: v_
}, vy = oN;
nN.forEach((e) => {
  vy[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return tN(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const iN = vy, py = Ei(
  {}
), jI = ({ children: e }) => {
  const [t, r] = iN.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Dv(nl, { children: [
    r,
    /* @__PURE__ */ xt(py.Provider, { value: { open: n }, children: e })
  ] });
}, VI = () => Gt(py), zI = () => {
  Bt(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class HI {
  async operate(t, r, n = "query") {
    const o = {
      variables: r ? {
        payload: r
      } : void 0
    };
    let i;
    try {
      return n === "mutate" ? i = await Ed.mutate({
        mutation: t.gql,
        ...o
      }) : i = await Ed.query({
        query: t.gql,
        ...o
      }), [i?.data?.[t.method], null];
    } catch (a) {
      return _isDev_ && console.log(a), [null, a];
    }
  }
}
var my = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gv = Pe.createContext && Pe.createContext(my), un = globalThis && globalThis.__assign || function() {
  return un = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, un.apply(this, arguments);
}, aN = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function gy(e) {
  return e && e.map(function(t, r) {
    return Pe.createElement(t.tag, un({
      key: r
    }, t.attr), gy(t.child));
  });
}
function ir(e) {
  return function(t) {
    return Pe.createElement(sN, un({
      attr: un({}, e.attr)
    }, t), gy(e.child));
  };
}
function sN(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, i = e.title, a = aN(e, ["attr", "size", "title"]), s = o || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), Pe.createElement("svg", un({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: un(un({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Pe.createElement("title", null, i), e.children);
  };
  return gv !== void 0 ? Pe.createElement(gv.Consumer, null, function(r) {
    return t(r);
  }) : t(my);
}
function BI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function WI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function UI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function qI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function QI(e) {
  return ir({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function GI(e) {
  return ir({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function KI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function YI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function XI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function JI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function ZI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function eA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function tA(e) {
  return ir({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function rA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const nA = ({ children: e, override: t, ...r }) => /* @__PURE__ */ xt(ql, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ xt(ST, { ...r, style: { minWidth: "85px" }, children: e }) });
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
function cN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function uN() {
  let [, e] = fr(/* @__PURE__ */ Object.create(null));
  return _c(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var lN = cN() ? Av : Bt, fN = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = v.useRef(null), o = v.useRef(null), i = uN();
  return v.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), lN(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? ol(e, o.current) : /* @__PURE__ */ v.createElement("span", {
    ref: n
  });
}, yy = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = v.useState(!1);
  return v.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ v.createElement(fN, {
    ...t
  });
};
yy.displayName = "Portal";
const dN = () => ({
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
});
var Gu = { exports: {} }, Ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function hN() {
  if (yv)
    return Ke;
  yv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var y = g.$$typeof;
      switch (y) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case u:
            case l:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case a:
                case c:
                case d:
                case f:
                case i:
                  return g;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ke.ContextConsumer = a, Ke.ContextProvider = i, Ke.Element = e, Ke.ForwardRef = c, Ke.Fragment = r, Ke.Lazy = d, Ke.Memo = f, Ke.Portal = t, Ke.Profiler = o, Ke.StrictMode = n, Ke.Suspense = u, Ke.SuspenseList = l, Ke.isAsyncMode = function() {
    return !1;
  }, Ke.isConcurrentMode = function() {
    return !1;
  }, Ke.isContextConsumer = function(g) {
    return p(g) === a;
  }, Ke.isContextProvider = function(g) {
    return p(g) === i;
  }, Ke.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Ke.isForwardRef = function(g) {
    return p(g) === c;
  }, Ke.isFragment = function(g) {
    return p(g) === r;
  }, Ke.isLazy = function(g) {
    return p(g) === d;
  }, Ke.isMemo = function(g) {
    return p(g) === f;
  }, Ke.isPortal = function(g) {
    return p(g) === t;
  }, Ke.isProfiler = function(g) {
    return p(g) === o;
  }, Ke.isStrictMode = function(g) {
    return p(g) === n;
  }, Ke.isSuspense = function(g) {
    return p(g) === u;
  }, Ke.isSuspenseList = function(g) {
    return p(g) === l;
  }, Ke.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === l || g === h || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === i || g.$$typeof === a || g.$$typeof === c || g.$$typeof === m || g.getModuleId !== void 0);
  }, Ke.typeOf = p, Ke;
}
var Ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function vN() {
  return bv || (bv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, p = !1, g = !1, y = !1, S = !1, E;
    E = Symbol.for("react.module.reference");
    function w(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === o || S || j === n || j === u || j === l || y || j === h || m || p || g || typeof j == "object" && j !== null && (j.$$typeof === d || j.$$typeof === f || j.$$typeof === i || j.$$typeof === a || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === E || j.getModuleId !== void 0));
    }
    function b(j) {
      if (typeof j == "object" && j !== null) {
        var ee = j.$$typeof;
        switch (ee) {
          case e:
            var le = j.type;
            switch (le) {
              case r:
              case o:
              case n:
              case u:
              case l:
                return le;
              default:
                var ce = le && le.$$typeof;
                switch (ce) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case f:
                  case i:
                    return ce;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var C = a, O = i, R = e, M = c, _ = r, $ = d, T = f, x = t, P = o, A = n, F = u, D = l, B = !1, q = !1;
    function ne(j) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(j) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(j) {
      return b(j) === a;
    }
    function H(j) {
      return b(j) === i;
    }
    function z(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function J(j) {
      return b(j) === c;
    }
    function I(j) {
      return b(j) === r;
    }
    function Q(j) {
      return b(j) === d;
    }
    function k(j) {
      return b(j) === f;
    }
    function X(j) {
      return b(j) === t;
    }
    function re(j) {
      return b(j) === o;
    }
    function Y(j) {
      return b(j) === n;
    }
    function N(j) {
      return b(j) === u;
    }
    function Z(j) {
      return b(j) === l;
    }
    Ye.ContextConsumer = C, Ye.ContextProvider = O, Ye.Element = R, Ye.ForwardRef = M, Ye.Fragment = _, Ye.Lazy = $, Ye.Memo = T, Ye.Portal = x, Ye.Profiler = P, Ye.StrictMode = A, Ye.Suspense = F, Ye.SuspenseList = D, Ye.isAsyncMode = ne, Ye.isConcurrentMode = se, Ye.isContextConsumer = L, Ye.isContextProvider = H, Ye.isElement = z, Ye.isForwardRef = J, Ye.isFragment = I, Ye.isLazy = Q, Ye.isMemo = k, Ye.isPortal = X, Ye.isProfiler = re, Ye.isStrictMode = Y, Ye.isSuspense = N, Ye.isSuspenseList = Z, Ye.isValidElementType = w, Ye.typeOf = b;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? Gu.exports = hN() : Gu.exports = vN();
var mf = Gu.exports;
function pN(e) {
  function t(L, H, z, J, I) {
    for (var Q = 0, k = 0, X = 0, re = 0, Y, N, Z = 0, j = 0, ee, le = ee = Y = 0, ce = 0, de = 0, me = 0, oe = 0, fe = z.length, Me = fe - 1, Ie, ie = "", ve = "", et = "", ot = "", tt; ce < fe; ) {
      if (N = z.charCodeAt(ce), ce === Me && k + re + X + Q !== 0 && (k !== 0 && (N = k === 47 ? 10 : 47), re = X = Q = 0, fe++, Me++), k + re + X + Q === 0) {
        if (ce === Me && (0 < de && (ie = ie.replace(d, "")), 0 < ie.trim().length)) {
          switch (N) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += z.charAt(ce);
          }
          N = 59;
        }
        switch (N) {
          case 123:
            for (ie = ie.trim(), Y = ie.charCodeAt(0), ee = 1, oe = ++ce; ce < fe; ) {
              switch (N = z.charCodeAt(ce)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (N = z.charCodeAt(ce + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = ce + 1; le < Me; ++le)
                          switch (z.charCodeAt(le)) {
                            case 47:
                              if (N === 42 && z.charCodeAt(le - 1) === 42 && ce + 2 !== le) {
                                ce = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (N === 47) {
                                ce = le + 1;
                                break e;
                              }
                          }
                        ce = le;
                      }
                  }
                  break;
                case 91:
                  N++;
                case 40:
                  N++;
                case 34:
                case 39:
                  for (; ce++ < Me && z.charCodeAt(ce) !== N; )
                    ;
              }
              if (ee === 0)
                break;
              ce++;
            }
            switch (ee = z.substring(oe, ce), Y === 0 && (Y = (ie = ie.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < de && (ie = ie.replace(d, "")), N = ie.charCodeAt(1), N) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    de = H;
                    break;
                  default:
                    de = F;
                }
                if (ee = t(H, de, ee, N, I + 1), oe = ee.length, 0 < B && (de = r(F, ie, me), tt = s(3, ee, de, H, x, T, oe, N, I, J), ie = de.join(""), tt !== void 0 && (oe = (ee = tt.trim()).length) === 0 && (N = 0, ee = "")), 0 < oe)
                  switch (N) {
                    case 115:
                      ie = ie.replace(C, a);
                    case 100:
                    case 109:
                    case 45:
                      ee = ie + "{" + ee + "}";
                      break;
                    case 107:
                      ie = ie.replace(S, "$1 $2"), ee = ie + "{" + ee + "}", ee = A === 1 || A === 2 && i("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                      break;
                    default:
                      ee = ie + ee, J === 112 && (ee = (ve += ee, ""));
                  }
                else
                  ee = "";
                break;
              default:
                ee = t(H, r(H, ie, me), ee, J, I + 1);
            }
            et += ee, ee = me = de = le = Y = 0, ie = "", N = z.charCodeAt(++ce);
            break;
          case 125:
          case 59:
            if (ie = (0 < de ? ie.replace(d, "") : ie).trim(), 1 < (oe = ie.length))
              switch (le === 0 && (Y = ie.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (oe = (ie = ie.replace(" ", ":")).length), 0 < B && (tt = s(1, ie, H, L, x, T, ve.length, J, I, J)) !== void 0 && (oe = (ie = tt.trim()).length) === 0 && (ie = "\0\0"), Y = ie.charCodeAt(0), N = ie.charCodeAt(1), Y) {
                case 0:
                  break;
                case 64:
                  if (N === 105 || N === 99) {
                    ot += ie + z.charAt(ce);
                    break;
                  }
                default:
                  ie.charCodeAt(oe - 1) !== 58 && (ve += o(ie, Y, N, ie.charCodeAt(2)));
              }
            me = de = le = Y = 0, ie = "", N = z.charCodeAt(++ce);
        }
      }
      switch (N) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + Y === 0 && J !== 107 && 0 < ie.length && (de = 1, ie += "\0"), 0 < B * ne && s(0, ie, H, L, x, T, ve.length, J, I, J), T = 1, x++;
          break;
        case 59:
        case 125:
          if (k + re + X + Q === 0) {
            T++;
            break;
          }
        default:
          switch (T++, Ie = z.charAt(ce), N) {
            case 9:
            case 32:
              if (re + Q + k === 0)
                switch (Z) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = "";
                    break;
                  default:
                    N !== 32 && (Ie = " ");
                }
              break;
            case 0:
              Ie = "\\0";
              break;
            case 12:
              Ie = "\\f";
              break;
            case 11:
              Ie = "\\v";
              break;
            case 38:
              re + k + Q === 0 && (de = me = 1, Ie = "\f" + Ie);
              break;
            case 108:
              if (re + k + Q + P === 0 && 0 < le)
                switch (ce - le) {
                  case 2:
                    Z === 112 && z.charCodeAt(ce - 3) === 58 && (P = Z);
                  case 8:
                    j === 111 && (P = j);
                }
              break;
            case 58:
              re + k + Q === 0 && (le = ce);
              break;
            case 44:
              k + X + re + Q === 0 && (de = 1, Ie += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (re = re === N ? 0 : re === 0 ? N : re);
              break;
            case 91:
              re + k + X === 0 && Q++;
              break;
            case 93:
              re + k + X === 0 && Q--;
              break;
            case 41:
              re + k + Q === 0 && X--;
              break;
            case 40:
              if (re + k + Q === 0) {
                if (Y === 0)
                  switch (2 * Z + 3 * j) {
                    case 533:
                      break;
                    default:
                      Y = 1;
                  }
                X++;
              }
              break;
            case 64:
              k + X + re + Q + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + Q + X))
                switch (k) {
                  case 0:
                    switch (2 * N + 3 * z.charCodeAt(ce + 1)) {
                      case 235:
                        k = 47;
                        break;
                      case 220:
                        oe = ce, k = 42;
                    }
                    break;
                  case 42:
                    N === 47 && Z === 42 && oe + 2 !== ce && (z.charCodeAt(oe + 2) === 33 && (ve += z.substring(oe, ce + 1)), Ie = "", k = 0);
                }
          }
          k === 0 && (ie += Ie);
      }
      j = Z, Z = N, ce++;
    }
    if (oe = ve.length, 0 < oe) {
      if (de = H, 0 < B && (tt = s(2, ve, de, L, x, T, oe, J, I, J), tt !== void 0 && (ve = tt).length === 0))
        return ot + ve + et;
      if (ve = de.join(",") + "{" + ve + "}", A * P !== 0) {
        switch (A !== 2 || i(ve, 2) || (P = 0), P) {
          case 111:
            ve = ve.replace(w, ":-moz-$1") + ve;
            break;
          case 112:
            ve = ve.replace(E, "::-webkit-input-$1") + ve.replace(E, "::-moz-$1") + ve.replace(E, ":-ms-input-$1") + ve;
        }
        P = 0;
      }
    }
    return ot + ve + et;
  }
  function r(L, H, z) {
    var J = H.trim().split(g);
    H = J;
    var I = J.length, Q = L.length;
    switch (Q) {
      case 0:
      case 1:
        var k = 0;
        for (L = Q === 0 ? "" : L[0] + " "; k < I; ++k)
          H[k] = n(L, H[k], z).trim();
        break;
      default:
        var X = k = 0;
        for (H = []; k < I; ++k)
          for (var re = 0; re < Q; ++re)
            H[X++] = n(L[re] + " ", J[k], z).trim();
    }
    return H;
  }
  function n(L, H, z) {
    var J = H.charCodeAt(0);
    switch (33 > J && (J = (H = H.trim()).charCodeAt(0)), J) {
      case 38:
        return H.replace(y, "$1" + L.trim());
      case 58:
        return L.trim() + H.replace(y, "$1" + L.trim());
      default:
        if (0 < 1 * z && 0 < H.indexOf("\f"))
          return H.replace(y, (L.charCodeAt(0) === 58 ? "" : "$1") + L.trim());
    }
    return L + H;
  }
  function o(L, H, z, J) {
    var I = L + ";", Q = 2 * H + 3 * z + 4 * J;
    if (Q === 944) {
      L = I.indexOf(":", 9) + 1;
      var k = I.substring(L, I.length - 1).trim();
      return k = I.substring(0, L).trim() + k + ";", A === 1 || A === 2 && i(k, 1) ? "-webkit-" + k + k : k;
    }
    if (A === 0 || A === 2 && !i(I, 1))
      return I;
    switch (Q) {
      case 1015:
        return I.charCodeAt(10) === 97 ? "-webkit-" + I + I : I;
      case 951:
        return I.charCodeAt(3) === 116 ? "-webkit-" + I + I : I;
      case 963:
        return I.charCodeAt(5) === 110 ? "-webkit-" + I + I : I;
      case 1009:
        if (I.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + I + I;
      case 978:
        return "-webkit-" + I + "-moz-" + I + I;
      case 1019:
      case 983:
        return "-webkit-" + I + "-moz-" + I + "-ms-" + I + I;
      case 883:
        if (I.charCodeAt(8) === 45)
          return "-webkit-" + I + I;
        if (0 < I.indexOf("image-set(", 11))
          return I.replace($, "$1-webkit-$2") + I;
        break;
      case 932:
        if (I.charCodeAt(4) === 45)
          switch (I.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + I.replace("-grow", "") + "-webkit-" + I + "-ms-" + I.replace("grow", "positive") + I;
            case 115:
              return "-webkit-" + I + "-ms-" + I.replace("shrink", "negative") + I;
            case 98:
              return "-webkit-" + I + "-ms-" + I.replace("basis", "preferred-size") + I;
          }
        return "-webkit-" + I + "-ms-" + I + I;
      case 964:
        return "-webkit-" + I + "-ms-flex-" + I + I;
      case 1023:
        if (I.charCodeAt(8) !== 99)
          break;
        return k = I.substring(I.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + k + "-webkit-" + I + "-ms-flex-pack" + k + I;
      case 1005:
        return m.test(I) ? I.replace(h, ":-webkit-") + I.replace(h, ":-moz-") + I : I;
      case 1e3:
        switch (k = I.substring(13).trim(), H = k.indexOf("-") + 1, k.charCodeAt(0) + k.charCodeAt(H)) {
          case 226:
            k = I.replace(b, "tb");
            break;
          case 232:
            k = I.replace(b, "tb-rl");
            break;
          case 220:
            k = I.replace(b, "lr");
            break;
          default:
            return I;
        }
        return "-webkit-" + I + "-ms-" + k + I;
      case 1017:
        if (I.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = (I = L).length - 10, k = (I.charCodeAt(H) === 33 ? I.substring(0, H) : I).substring(L.indexOf(":", 7) + 1).trim(), Q = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8))
              break;
          case 115:
            I = I.replace(k, "-webkit-" + k) + ";" + I;
            break;
          case 207:
          case 102:
            I = I.replace(k, "-webkit-" + (102 < Q ? "inline-" : "") + "box") + ";" + I.replace(k, "-webkit-" + k) + ";" + I.replace(k, "-ms-" + k + "box") + ";" + I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45)
          switch (I.charCodeAt(6)) {
            case 105:
              return k = I.replace("-items", ""), "-webkit-" + I + "-webkit-box-" + k + "-ms-flex-" + k + I;
            case 115:
              return "-webkit-" + I + "-ms-flex-item-" + I.replace(R, "") + I;
            default:
              return "-webkit-" + I + "-ms-flex-line-pack" + I.replace("align-content", "").replace(R, "") + I;
          }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (_.test(L) === !0)
          return (k = L.substring(L.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(L.replace("stretch", "fill-available"), H, z, J).replace(":fill-available", ":stretch") : I.replace(k, "-webkit-" + k) + I.replace(k, "-moz-" + k.replace("fill-", "")) + I;
        break;
      case 962:
        if (I = "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I, z + J === 211 && I.charCodeAt(13) === 105 && 0 < I.indexOf("transform", 10))
          return I.substring(0, I.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + I;
    }
    return I;
  }
  function i(L, H) {
    var z = L.indexOf(H === 1 ? ":" : "{"), J = L.substring(0, H !== 3 ? z : 10);
    return z = L.substring(z + 1, L.length - 1), q(H !== 2 ? J : J.replace(M, "$1"), z, H);
  }
  function a(L, H) {
    var z = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return z !== H + ";" ? z.replace(O, " or ($1)").substring(4) : "(" + H + ")";
  }
  function s(L, H, z, J, I, Q, k, X, re, Y) {
    for (var N = 0, Z = H, j; N < B; ++N)
      switch (j = D[N].call(l, L, Z, z, J, I, Q, k, X, re, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Z = j;
      }
    if (Z !== H)
      return Z;
  }
  function c(L) {
    switch (L) {
      case void 0:
      case null:
        B = D.length = 0;
        break;
      default:
        if (typeof L == "function")
          D[B++] = L;
        else if (typeof L == "object")
          for (var H = 0, z = L.length; H < z; ++H)
            c(L[H]);
        else
          ne = !!L | 0;
    }
    return c;
  }
  function u(L) {
    return L = L.prefix, L !== void 0 && (q = null, L ? typeof L != "function" ? A = 1 : (A = 2, q = L) : A = 0), u;
  }
  function l(L, H) {
    var z = L;
    if (33 > z.charCodeAt(0) && (z = z.trim()), se = z, z = [se], 0 < B) {
      var J = s(-1, H, z, z, x, T, 0, 0, 0, 0);
      J !== void 0 && typeof J == "string" && (H = J);
    }
    var I = t(F, z, H, 0, 0);
    return 0 < B && (J = s(-2, I, z, z, x, T, I.length, 0, 0, 0), J !== void 0 && (I = J)), se = "", P = 0, T = x = 1, I;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, m = /zoo|gra/, p = /([,: ])(transform)/g, g = /,\r+?/g, y = /([\t\r\n ])*\f?&/g, S = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, w = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, R = /-self|flex-/g, M = /[^]*?(:[rp][el]a[\w-]+)[^]*/, _ = /stretch|:\s*\w+\-(?:conte|avail)/, $ = /([^-])(image-set\()/, T = 1, x = 1, P = 0, A = 1, F = [], D = [], B = 0, q = null, ne = 0, se = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
function mN(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var gN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sv = /* @__PURE__ */ mN(
  function(e) {
    return gN.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ku = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function yN() {
  if (Ev)
    return Xe;
  Ev = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var C = b.$$typeof;
      switch (C) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case l:
                case m:
                case h:
                case a:
                  return b;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function w(b) {
    return E(b) === u;
  }
  return Xe.AsyncMode = c, Xe.ConcurrentMode = u, Xe.ContextConsumer = s, Xe.ContextProvider = a, Xe.Element = t, Xe.ForwardRef = l, Xe.Fragment = n, Xe.Lazy = m, Xe.Memo = h, Xe.Portal = r, Xe.Profiler = i, Xe.StrictMode = o, Xe.Suspense = f, Xe.isAsyncMode = function(b) {
    return w(b) || E(b) === c;
  }, Xe.isConcurrentMode = w, Xe.isContextConsumer = function(b) {
    return E(b) === s;
  }, Xe.isContextProvider = function(b) {
    return E(b) === a;
  }, Xe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Xe.isForwardRef = function(b) {
    return E(b) === l;
  }, Xe.isFragment = function(b) {
    return E(b) === n;
  }, Xe.isLazy = function(b) {
    return E(b) === m;
  }, Xe.isMemo = function(b) {
    return E(b) === h;
  }, Xe.isPortal = function(b) {
    return E(b) === r;
  }, Xe.isProfiler = function(b) {
    return E(b) === i;
  }, Xe.isStrictMode = function(b) {
    return E(b) === o;
  }, Xe.isSuspense = function(b) {
    return E(b) === f;
  }, Xe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === a || b.$$typeof === s || b.$$typeof === l || b.$$typeof === g || b.$$typeof === y || b.$$typeof === S || b.$$typeof === p);
  }, Xe.typeOf = E, Xe;
}
var Je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wv;
function bN() {
  return wv || (wv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === f || N === d || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === h || N.$$typeof === a || N.$$typeof === s || N.$$typeof === l || N.$$typeof === g || N.$$typeof === y || N.$$typeof === S || N.$$typeof === p);
    }
    function w(N) {
      if (typeof N == "object" && N !== null) {
        var Z = N.$$typeof;
        switch (Z) {
          case t:
            var j = N.type;
            switch (j) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case f:
                return j;
              default:
                var ee = j && j.$$typeof;
                switch (ee) {
                  case s:
                  case l:
                  case m:
                  case h:
                  case a:
                    return ee;
                  default:
                    return Z;
                }
            }
          case r:
            return Z;
        }
      }
    }
    var b = c, C = u, O = s, R = a, M = t, _ = l, $ = n, T = m, x = h, P = r, A = i, F = o, D = f, B = !1;
    function q(N) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(N) || w(N) === c;
    }
    function ne(N) {
      return w(N) === u;
    }
    function se(N) {
      return w(N) === s;
    }
    function L(N) {
      return w(N) === a;
    }
    function H(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function z(N) {
      return w(N) === l;
    }
    function J(N) {
      return w(N) === n;
    }
    function I(N) {
      return w(N) === m;
    }
    function Q(N) {
      return w(N) === h;
    }
    function k(N) {
      return w(N) === r;
    }
    function X(N) {
      return w(N) === i;
    }
    function re(N) {
      return w(N) === o;
    }
    function Y(N) {
      return w(N) === f;
    }
    Je.AsyncMode = b, Je.ConcurrentMode = C, Je.ContextConsumer = O, Je.ContextProvider = R, Je.Element = M, Je.ForwardRef = _, Je.Fragment = $, Je.Lazy = T, Je.Memo = x, Je.Portal = P, Je.Profiler = A, Je.StrictMode = F, Je.Suspense = D, Je.isAsyncMode = q, Je.isConcurrentMode = ne, Je.isContextConsumer = se, Je.isContextProvider = L, Je.isElement = H, Je.isForwardRef = z, Je.isFragment = J, Je.isLazy = I, Je.isMemo = Q, Je.isPortal = k, Je.isProfiler = X, Je.isStrictMode = re, Je.isSuspense = Y, Je.isValidElementType = E, Je.typeOf = w;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Ku.exports = yN() : Ku.exports = bN();
var SN = Ku.exports, gf = SN, EN = {
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
}, wN = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, CN = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, by = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, yf = {};
yf[gf.ForwardRef] = CN;
yf[gf.Memo] = by;
function Cv(e) {
  return gf.isMemo(e) ? by : yf[e.$$typeof] || EN;
}
var ON = Object.defineProperty, xN = Object.getOwnPropertyNames, Ov = Object.getOwnPropertySymbols, _N = Object.getOwnPropertyDescriptor, TN = Object.getPrototypeOf, xv = Object.prototype;
function Sy(e, t, r) {
  if (typeof t != "string") {
    if (xv) {
      var n = TN(t);
      n && n !== xv && Sy(e, n, r);
    }
    var o = xN(t);
    Ov && (o = o.concat(Ov(t)));
    for (var i = Cv(e), a = Cv(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!wN[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = _N(t, c);
        try {
          ON(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var RN = Sy;
const PN = /* @__PURE__ */ ml(RN);
function Qr() {
  return (Qr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var _v = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Yu = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !mf.typeOf(e);
}, Ja = Object.freeze([]), ln = Object.freeze({});
function Si(e) {
  return typeof e == "function";
}
function Xu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function bf(e) {
  return e && typeof e.styledComponentId == "string";
}
var To = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Sf = typeof window < "u" && "HTMLElement" in window, MN = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), NN = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function IN() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Do(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(IN.apply(void 0, [NN[e]].concat(r)).trim());
}
var AN = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++)
      n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, a = i; r >= a; )
        (a <<= 1) < 0 && Do(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), u = 0, l = n.length; u < l; u++)
      this.tag.insertRule(c, n[u]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n;
      this.groupSizes[r] = 0;
      for (var a = o; a < i; a++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var o = this.groupSizes[r], i = this.indexOfGroup(r), a = i + o, s = i; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), _a = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map(), ai = 1, ia = function(e) {
  if (_a.has(e))
    return _a.get(e);
  for (; Za.has(ai); )
    ai++;
  var t = ai++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Do(16, "" + t), _a.set(e, t), Za.set(t, e), t;
}, DN = function(e) {
  return Za.get(e);
}, FN = function(e, t) {
  t >= ai && (ai = t + 1), _a.set(e, t), Za.set(t, e);
}, $N = "style[" + To + '][data-styled-version="5.3.6"]', kN = new RegExp("^" + To + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), LN = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, jN = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(kN);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[2];
        c !== 0 && (FN(u, c), LN(e, u, s[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, VN = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ey = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var c = s.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(To))
        return l;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(To, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = VN();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, zN = function() {
  function e(r) {
    var n = this.element = Ey(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var c = i[a];
        if (c.ownerNode === o)
          return c;
      }
      Do(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), HN = function() {
  function e(r) {
    var n = this.element = Ey(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), BN = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Tv = Sf, WN = { isServer: !Sf, useCSSOMInjection: !MN }, wy = function() {
  function e(r, n, o) {
    r === void 0 && (r = ln), n === void 0 && (n = {}), this.options = Qr({}, WN, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Sf && Tv && (Tv = !1, function(i) {
      for (var a = document.querySelectorAll($N), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(To) !== "active" && (jN(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ia(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Qr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new BN(a) : i ? new zN(a) : new HN(a), new AN(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ia(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(ia(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ia(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = DN(a);
        if (s !== void 0) {
          var c = r.names.get(s), u = n.getGroup(a);
          if (c && u && c.size) {
            var l = To + ".g" + a + '[id="' + s + '"]', f = "";
            c !== void 0 && c.forEach(function(d) {
              d.length > 0 && (f += d + ",");
            }), i += "" + u + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), UN = /(a)(d)/gi, Rv = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ju(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Rv(t % 52) + r;
  return (Rv(t % 52) + r).replace(UN, "$1-$2");
}
var xn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Cy = function(e) {
  return xn(5381, e);
};
function qN(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Si(r) && !bf(r))
      return !1;
  }
  return !0;
}
var QN = Cy("5.3.6"), GN = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qN(t), this.componentId = r, this.baseHash = xn(QN, r), this.baseStyle = n, wy.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = Ro(this.rules, t, r, n).join(""), s = Ju(xn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var c = n(a, "." + s, void 0, o);
          r.insertRules(o, s, c);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, l = xn(this.baseHash, n.hash), f = "", d = 0; d < u; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (l = xn(l, h + d));
        else if (h) {
          var m = Ro(h, t, r, n), p = Array.isArray(m) ? m.join("") : m;
          l = xn(l, p + d), f += p;
        }
      }
      if (f) {
        var g = Ju(l >>> 0);
        if (!r.hasNameForId(o, g)) {
          var y = n(f, "." + g, void 0, o);
          r.insertRules(o, g, y);
        }
        i.push(g);
      }
    }
    return i.join(" ");
  }, e;
}(), KN = /^\s*\/\/.*$/gm, YN = [":", "[", ".", "#"];
function XN(e) {
  var t, r, n, o, i = e === void 0 ? ln : e, a = i.options, s = a === void 0 ? ln : a, c = i.plugins, u = c === void 0 ? Ja : c, l = new pN(s), f = [], d = function(p) {
    function g(y) {
      if (y)
        try {
          p(y + "}");
        } catch {
        }
    }
    return function(y, S, E, w, b, C, O, R, M, _) {
      switch (y) {
        case 1:
          if (M === 0 && S.charCodeAt(0) === 64)
            return p(S + ";"), "";
          break;
        case 2:
          if (R === 0)
            return S + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return p(E[0] + S), "";
            default:
              return S + (_ === 0 ? "/*|*/" : "");
          }
        case -2:
          S.split("/*|*/}").forEach(g);
      }
    };
  }(function(p) {
    f.push(p);
  }), h = function(p, g, y) {
    return g === 0 && YN.indexOf(y[r.length]) !== -1 || y.match(o) ? p : "." + t;
  };
  function m(p, g, y, S) {
    S === void 0 && (S = "&");
    var E = p.replace(KN, ""), w = g && y ? y + " " + g + " { " + E + " }" : E;
    return t = S, r = g, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), l(y || !g ? "" : g, w);
  }
  return l.use([].concat(u, [function(p, g, y) {
    p === 2 && y.length && y[0].lastIndexOf(r) > 0 && (y[0] = y[0].replace(n, h));
  }, d, function(p) {
    if (p === -2) {
      var g = f;
      return f = [], g;
    }
  }])), m.hash = u.length ? u.reduce(function(p, g) {
    return g.name || Do(15), xn(p, g.name);
  }, 5381).toString() : "", m;
}
var Oy = Pe.createContext();
Oy.Consumer;
var xy = Pe.createContext(), JN = (xy.Consumer, new wy()), Zu = XN();
function ZN() {
  return Gt(Oy) || JN;
}
function eI() {
  return Gt(xy) || Zu;
}
var tI = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Zu);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Do(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Zu), this.name + t.hash;
  }, e;
}(), rI = /([A-Z])/, nI = /([A-Z])/g, oI = /^ms-/, iI = function(e) {
  return "-" + e.toLowerCase();
};
function Pv(e) {
  return rI.test(e) ? e.replace(nI, iI).replace(oI, "-ms-") : e;
}
var Mv = function(e) {
  return e == null || e === !1 || e === "";
};
function Ro(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Ro(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Mv(e))
    return "";
  if (bf(e))
    return "." + e.styledComponentId;
  if (Si(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && mf.isElement(c) && console.warn(Xu(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ro(c, t, r, n);
  }
  var u;
  return e instanceof tI ? r ? (e.inject(r, n), e.getName(n)) : e : Yu(e) ? function l(f, d) {
    var h, m, p = [];
    for (var g in f)
      f.hasOwnProperty(g) && !Mv(f[g]) && (Array.isArray(f[g]) && f[g].isCss || Si(f[g]) ? p.push(Pv(g) + ":", f[g], ";") : Yu(f[g]) ? p.push.apply(p, l(f[g], g)) : p.push(Pv(g) + ": " + (h = g, (m = f[g]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || h in Tm ? String(m).trim() : m + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Nv = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function gn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Si(e) || Yu(e) ? Nv(Ro(_v(Ja, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Nv(Ro(_v(e, r)));
}
var Iv = /invalid hook call/i, aa = /* @__PURE__ */ new Set(), aI = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Iv.test(i))
          o = !1, aa.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            s[c - 1] = arguments[c];
          n.apply(void 0, [i].concat(s));
        }
      }, De(), o && !aa.has(r) && (console.warn(r), aa.add(r));
    } catch (i) {
      Iv.test(i.message) && aa.delete(r);
    } finally {
      console.error = n;
    }
  }
}, sI = function(e, t, r) {
  return r === void 0 && (r = ln), e.theme !== r.theme && e.theme || t || r.theme;
}, cI = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uI = /(^-|-$)/g;
function Oc(e) {
  return e.replace(cI, "-").replace(uI, "");
}
var lI = function(e) {
  return Ju(Cy(e) >>> 0);
};
function sa(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var el = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, fI = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function dI(e, t, r) {
  var n = e[r];
  el(t) && el(n) ? _y(n, t) : e[r] = t;
}
function _y(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (el(a))
      for (var s in a)
        fI(s) && dI(e, a[s], s);
  }
  return e;
}
var Ty = Pe.createContext();
Ty.Consumer;
var xc = {};
function Ry(e, t, r) {
  var n = bf(e), o = !sa(e), i = t.attrs, a = i === void 0 ? Ja : i, s = t.componentId, c = s === void 0 ? function(S, E) {
    var w = typeof S != "string" ? "sc" : Oc(S);
    xc[w] = (xc[w] || 0) + 1;
    var b = w + "-" + lI("5.3.6" + w + xc[w]);
    return E ? E + "-" + b : b;
  }(t.displayName, t.parentComponentId) : s, u = t.displayName, l = u === void 0 ? function(S) {
    return sa(S) ? "styled." + S : "Styled(" + Xu(S) + ")";
  }(e) : u, f = t.displayName && t.componentId ? Oc(t.displayName) + "-" + t.componentId : t.componentId || c, d = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(S, E, w) {
    return e.shouldForwardProp(S, E, w) && t.shouldForwardProp(S, E, w);
  } : e.shouldForwardProp);
  var m, p = new GN(r, f, n ? e.componentStyle : void 0), g = p.isStatic && a.length === 0, y = function(S, E) {
    return function(w, b, C, O) {
      var R = w.attrs, M = w.componentStyle, _ = w.defaultProps, $ = w.foldedComponentIds, T = w.shouldForwardProp, x = w.styledComponentId, P = w.target;
      process.env.NODE_ENV !== "production" && Cf(x);
      var A = function(J, I, Q) {
        J === void 0 && (J = ln);
        var k = Qr({}, I, { theme: J }), X = {};
        return Q.forEach(function(re) {
          var Y, N, Z, j = re;
          for (Y in Si(j) && (j = j(k)), j)
            k[Y] = X[Y] = Y === "className" ? (N = X[Y], Z = j[Y], N && Z ? N + " " + Z : N || Z) : j[Y];
        }), [k, X];
      }(sI(b, Gt(Ty), _) || ln, b, R), F = A[0], D = A[1], B = function(J, I, Q, k) {
        var X = ZN(), re = eI(), Y = I ? J.generateAndInjectStyles(ln, X, re) : J.generateAndInjectStyles(Q, X, re);
        return process.env.NODE_ENV !== "production" && Cf(Y), process.env.NODE_ENV !== "production" && !I && k && k(Y), Y;
      }(M, O, F, process.env.NODE_ENV !== "production" ? w.warnTooManyClasses : void 0), q = C, ne = D.$as || b.$as || D.as || b.as || P, se = sa(ne), L = D !== b ? Qr({}, b, {}, D) : b, H = {};
      for (var z in L)
        z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? H.as = L[z] : (T ? T(z, Sv, ne) : !se || Sv(z)) && (H[z] = L[z]));
      return b.style && D.style !== b.style && (H.style = Qr({}, b.style, {}, D.style)), H.className = Array.prototype.concat($, x, B !== x ? B : null, b.className, D.className).filter(Boolean).join(" "), H.ref = q, Iy(ne, H);
    }(m, S, E, g);
  };
  return y.displayName = l, (m = Pe.forwardRef(y)).attrs = d, m.componentStyle = p, m.displayName = l, m.shouldForwardProp = h, m.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ja, m.styledComponentId = f, m.target = n ? e.target : e, m.withComponent = function(S) {
    var E = t.componentId, w = function(C, O) {
      if (C == null)
        return {};
      var R, M, _ = {}, $ = Object.keys(C);
      for (M = 0; M < $.length; M++)
        R = $[M], O.indexOf(R) >= 0 || (_[R] = C[R]);
      return _;
    }(t, ["componentId"]), b = E && E + "-" + (sa(S) ? S : Oc(Xu(S)));
    return Ry(S, Qr({}, w, { attrs: d, componentId: b }), r);
  }, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = n ? _y({}, e.defaultProps, S) : S;
  } }), process.env.NODE_ENV !== "production" && (aI(l, f), m.warnTooManyClasses = function(S, E) {
    var w = {}, b = !1;
    return function(C) {
      if (!b && (w[C] = !0, Object.keys(w).length >= 200)) {
        var O = E ? ' with the id of "' + E + '"' : "";
        console.warn("Over 200 classes were generated for component " + S + O + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, w = {};
      }
    };
  }(l, f)), m.toString = function() {
    return "." + m.styledComponentId;
  }, o && PN(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m;
}
var tl = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = ln), !mf.isValidElementType(n))
      return Do(1, String(n));
    var i = function() {
      return r(n, o, gn.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, Qr({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, Qr({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Ry, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  tl[e] = tl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Fo = tl, Ef = (e = "100%", t = e) => gn`
  width: ${e};
  height: ${t};
`;
gn`
  border: 1px solid red;
`;
const hI = (e = "flex-start", t = "stretch", r = "row") => gn`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, Py = (e = "&") => gn`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, $n = (e) => gn`
  ${({ theme: t }) => t[e]}
`, vI = (e) => gn`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, pI = gn`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, mI = "1px solid", gI = Fo.div`
  ${hI("center", "center")};
  ${vI({
  left: "0",
  top: "0"
})}
  ${Ef("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, yI = Fo.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${$n("grey")};
  border: 2px solid ${$n("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${pI};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${Py()};
`, bI = Fo.div`
  margin: 0 auto;
  margin-top: 18px;
  ${Ef("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${$n("light")};
  }
`, oA = Fo.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${mI} ${$n("lightGrey")};
`, iA = Fo.div`
  background: ${$n("lightGrey")};
  ${Ef("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, SI = ({
  onClose: e,
  isOpen: t,
  children: r,
  width: n,
  height: o
}) => {
  const { Spring: i, Gesture: a } = Yp(), { opacity: s, transform: c } = dN(), u = i.useTransition(t, {
    from: s.from(),
    enter: s.to(),
    leave: s.from(),
    config: i.config.stiff
  }), l = i.useSpring({
    from: c.from(),
    to: c.to(t),
    config: i.config.wobbly
  }), [f, d] = i.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: h, x: m, scale: p } = f, g = a.useDrag(
    ({ offset: [S, E], down: w }) => {
      d.start({
        y: w ? E : 0,
        immediate: !1,
        x: w ? S : 0,
        scale: w ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), y = (S) => {
    S.stopPropagation();
  };
  return /* @__PURE__ */ xt(nl, { children: u((S, E) => /* @__PURE__ */ xt(Qp, { when: E, children: /* @__PURE__ */ xt(yy, { children: /* @__PURE__ */ xt(gI, { style: S, onClick: e, as: i.a.div, children: /* @__PURE__ */ xt(
    yI,
    {
      style: { ...l, x: m, y: h, scale: p },
      ...g(),
      onClick: y,
      as: i.a.div,
      $width: n,
      $height: o,
      children: /* @__PURE__ */ xt(
        ky,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ xt(bI, { children: r })
        }
      )
    }
  ) }) }) })) });
}, aA = (e) => /* @__PURE__ */ xt(Kp, { children: /* @__PURE__ */ xt(SI, { ...e }) }), EI = (e, t) => {
  const { Spring: r, Gesture: n } = Yp(), [{ y: o }, i] = r.useSpring(() => ({ y: t })), a = () => {
    i.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (f = 0) => {
    e(), i.start({
      y: t,
      immediate: !1,
      config: { ...r.config.stiff, velocity: f }
    });
  }, c = n.useDrag(
    ({ last: f, velocity: [, d], direction: [, h], offset: [, m], cancel: p }) => {
      m < -70 && p(), f ? m > t * 0.5 || d > 0.5 && h === 1 ? s(d) : a() : i.start({ y: m, immediate: h === -1 });
    },
    {
      from: () => [0, o.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), u = o.to((f) => f < t ? "block" : "none");
  return {
    toggle: (f) => {
      f ? a() : s();
    },
    bind: c,
    div: r.a.div,
    springs: {
      display: u,
      y: o
    }
  };
}, wI = Fo.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${$n("darkBlue")};
  border-top: 2px solid ${$n("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${Py()};
`, CI = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const o = EI(t, n);
  return Bt(() => {
    o.toggle(r);
  }, [r]), /* @__PURE__ */ xt(
    wI,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, sA = (e) => /* @__PURE__ */ xt(Kp, { children: /* @__PURE__ */ xt(CI, { ...e }) }), cA = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ xt(
  YM,
  {
    size: "middle",
    onChange: e,
    value: t,
    style: { width: 200 },
    options: r,
    defaultValue: n
  }
);
export {
  BI as AiOutlineClose,
  WI as AiOutlineHtml5,
  UI as AiOutlineInfoCircle,
  qI as AiOutlineSwap,
  Kp as AnimationProvider,
  HI as ApolloMiddleware,
  QI as BsJournals,
  GI as BsSearch,
  nA as ColoredButton,
  Qp as Display,
  LI as ErrorBoundary,
  KI as GoTerminal,
  YI as GrClear,
  Ly as LocalStorage,
  Hy as LocalStorageClient,
  XI as LuTestTube2,
  JI as MdFindReplace,
  aA as Modal,
  iA as ModalSeparator,
  oA as ModalTitle,
  py as NotificationsContext,
  jI as NotificationsProvider,
  sA as Popover,
  II as PrivatePaths,
  BE as RoutePaths,
  cA as Select,
  ZI as SlInfo,
  eA as SlSizeFullscreen,
  tA as TfiSettings,
  rA as VscPlay,
  Ed as apolloClient,
  NI as httpService,
  PI as isFunction,
  RI as isObject,
  jy as isString,
  AI as useAltKeyDown,
  Yp as useAnimations,
  DI as useAsyncEffect,
  WE as useBooleanState,
  FI as useDebounce,
  $I as useFilteredEffect,
  kI as useFullScreen,
  VI as useNotifications,
  zI as useOverflow
};
