import * as v from "react";
import Pe, { useState as fr, useEffect as Wt, useRef as De, createContext as yi, useMemo as po, useContext as Kt, useLayoutEffect as Iv, forwardRef as Ju, Children as xy, createRef as Ry, useCallback as Ec, useDebugValue as wf, createElement as Ty } from "react";
import { jsx as _t, jsxs as Av, Fragment as Zu } from "react/jsx-runtime";
import * as Py from "react-dom";
import Ny, { createPortal as el, unstable_batchedUpdates as My, flushSync as Iy } from "react-dom";
import Ay from "react-smooth-scrollbar";
const Dy = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, kI = (e) => typeof e == "object" && e !== null, Fy = (e) => typeof e == "string", LI = (e) => typeof e == "function";
process.env.CLIENT_URL;
const $y = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const Dv = process.env.SERVER_URL ?? "http://localhost:6868", ky = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class Ly {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? jy(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in Dy))) {
      if (Fy(r))
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
    return `${$y}__${t}`;
  }
}
const jy = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var Sc = function(e, t) {
  return Sc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Sc(e, t);
};
function Mr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Sc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var z = function() {
  return z = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, z.apply(this, arguments);
};
function Pn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function rn(e, t, r, n) {
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
function nn(e, t) {
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
function On(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ns = "Invariant Violation", Cf = Object.setPrototypeOf, Vy = Cf === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Cf, Qe = (
  /** @class */
  function(e) {
    Mr(t, e);
    function t(r) {
      r === void 0 && (r = Ns);
      var n = e.call(this, typeof r == "number" ? Ns + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Ns, Vy(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function ue(e, t) {
  if (!e)
    throw new Qe(t);
}
var Fv = ["debug", "log", "warn", "error", "silent"], zy = Fv.indexOf("log");
function ki(e) {
  return function() {
    if (Fv.indexOf(e) >= zy) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = ki("debug"), e.log = ki("log"), e.warn = ki("warn"), e.error = ki("error");
})(ue || (ue = {}));
function gr(e) {
  try {
    return e();
  } catch {
  }
}
const Of = gr(function() {
  return globalThis;
}) || gr(function() {
  return window;
}) || gr(function() {
  return self;
}) || gr(function() {
  return global;
}) || gr(function() {
  return gr.constructor("return this")();
});
var _f = "__", xf = [_f, _f].join("DEV");
function Hy() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(Of, xf, {
      value: gr(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), Of[xf];
  }
}
const Ms = Hy();
function on(e) {
  try {
    return e();
  } catch {
  }
}
var wc = on(function() {
  return globalThis;
}) || on(function() {
  return window;
}) || on(function() {
  return self;
}) || on(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
on(function() {
  return on.constructor("return this")();
}), Cc = !1;
function By() {
  wc && !on(function() {
    return process.env.NODE_ENV;
  }) && !on(function() {
    return process;
  }) && (Object.defineProperty(wc, "process", {
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
  }), Cc = !0);
}
By();
function Rf() {
  Cc && (delete wc.process, Cc = !1);
}
function ta(e, t) {
  if (!!!e)
    throw new Error(t);
}
const $v = {
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
}, Wy = new Set(Object.keys($v));
function Tf(e) {
  const t = e?.kind;
  return typeof t == "string" && Wy.has(t);
}
var Pf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Pf || (Pf = {}));
var jt;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(jt || (jt = {}));
function Nf(e) {
  return e === 9 || e === 32;
}
function Uy(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((h) => h.length === 0 || Nf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, c = e.endsWith("\\"), u = s || c, l = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || u || i || a);
  let f = "";
  const d = o && Nf(e.charCodeAt(0));
  return (l && !d || i) && (f += `
`), f += r, (l || u) && (f += `
`), '"""' + f + '"""';
}
const qy = 10, kv = 2;
function Lv(e) {
  return Qa(e, []);
}
function Qa(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Qy(e, t);
    default:
      return String(e);
  }
}
function Qy(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Gy(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Qa(n, r);
  } else if (Array.isArray(e))
    return Yy(e, r);
  return Ky(e, r);
}
function Gy(e) {
  return typeof e.toJSON == "function";
}
function Ky(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > kv ? "[" + Xy(e) + "]" : "{ " + r.map(
    ([o, i]) => o + ": " + Qa(i, t)
  ).join(", ") + " }";
}
function Yy(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > kv)
    return "[Array]";
  const r = Math.min(qy, e.length), n = e.length - r, o = [];
  for (let i = 0; i < r; ++i)
    o.push(Qa(e[i], t));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function Xy(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class Jy {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || ta(!1, `Body must be a string. Received: ${Lv(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || ta(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || ta(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Zy(e) {
  return `"${e.replace(eb, tb)}"`;
}
const eb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function tb(e) {
  return rb[e.charCodeAt(0)];
}
const rb = [
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
], tl = Object.freeze({});
function Kr(e, t, r = $v) {
  const n = /* @__PURE__ */ new Map();
  for (const E of Object.values(jt))
    n.set(E, nb(t, E));
  let o, i = Array.isArray(e), a = [e], s = -1, c = [], u = e, l, f;
  const d = [], h = [];
  do {
    s++;
    const E = s === a.length, y = E && c.length !== 0;
    if (E) {
      if (l = h.length === 0 ? void 0 : d[d.length - 1], u = f, f = h.pop(), y)
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
    let S;
    if (!Array.isArray(u)) {
      var m, p;
      Tf(u) || ta(!1, `Invalid AST Node: ${Lv(u)}.`);
      const w = E ? (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.leave : (p = n.get(u.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (S = w?.call(t, u, l, f, d, h), S === tl)
        break;
      if (S === !1) {
        if (!E) {
          d.pop();
          continue;
        }
      } else if (S !== void 0 && (c.push([l, S]), !E))
        if (Tf(S))
          u = S;
        else {
          d.pop();
          continue;
        }
    }
    if (S === void 0 && y && c.push([l, u]), E)
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
function nb(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function ob(e) {
  return Kr(e, ab);
}
const ib = 80, ab = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => me(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = Le("(", me(e.variableDefinitions, ", "), ")"), r = me(
        [
          e.operation,
          me([e.name, t]),
          me(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + Le(" = ", r) + Le(" ", me(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Or(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: o }) {
      const i = Le("", e, ": ") + t;
      let a = i + Le("(", me(r, ", "), ")");
      return a.length > ib && (a = i + Le(`(
`, ra(me(r, `
`)), `
)`)), me([a, me(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + Le(" ", me(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => me(
      [
        "...",
        Le("on ", e),
        me(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${Le("(", me(r, ", "), ")")} on ${t} ${Le("", me(n, " "), " ")}` + o
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
    leave: ({ value: e, block: t }) => t ? Uy(e) : Zy(e)
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
    leave: ({ values: e }) => "[" + me(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + me(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + Le("(", me(t, ", "), ")")
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
`) + me(["schema", me(t, " "), Or(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + me(["scalar", t, me(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => Le("", e, `
`) + me(
      [
        "type",
        t,
        Le("implements ", me(r, " & ")),
        me(n, " "),
        Or(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: o }) => Le("", e, `
`) + t + (Mf(r) ? Le(`(
`, ra(me(r, `
`)), `
)`) : Le("(", me(r, ", "), ")")) + ": " + n + Le(" ", me(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: o }) => Le("", e, `
`) + me(
      [t + ": " + r, Le("= ", n), me(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => Le("", e, `
`) + me(
      [
        "interface",
        t,
        Le("implements ", me(r, " & ")),
        me(n, " "),
        Or(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => Le("", e, `
`) + me(
      ["union", t, me(r, " "), Le("= ", me(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => Le("", e, `
`) + me(["enum", t, me(r, " "), Or(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + me([t, me(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => Le("", e, `
`) + me(["input", t, me(r, " "), Or(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: o }) => Le("", e, `
`) + "directive @" + t + (Mf(r) ? Le(`(
`, ra(me(r, `
`)), `
)`) : Le("(", me(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + me(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => me(
      ["extend schema", me(e, " "), Or(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => me(["extend scalar", e, me(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => me(
      [
        "extend type",
        e,
        Le("implements ", me(t, " & ")),
        me(r, " "),
        Or(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => me(
      [
        "extend interface",
        e,
        Le("implements ", me(t, " & ")),
        me(r, " "),
        Or(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => me(
      [
        "extend union",
        e,
        me(t, " "),
        Le("= ", me(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => me(["extend enum", e, me(t, " "), Or(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => me(["extend input", e, me(t, " "), Or(r)], " ")
  }
};
function me(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Or(e) {
  return Le(`{
`, ra(me(e, `
`)), `
}`);
}
function Le(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function ra(e) {
  return Le("  ", e.replace(/\n/g, `
  `));
}
function Mf(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function If(e) {
  return e.kind === jt.FIELD || e.kind === jt.FRAGMENT_SPREAD || e.kind === jt.INLINE_FRAGMENT;
}
function sb() {
  return Rf();
}
function cb() {
  __DEV__ ? ue(typeof Ms == "boolean", Ms) : ue(typeof Ms == "boolean", 39);
}
sb();
cb();
function Ga(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : fb(r).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = t && t[i.value.name.value], __DEV__ ? ue(a !== void 0, "Invalid variable referenced in @".concat(o.name.value, " directive.")) : ue(a !== void 0, 40)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function rl(e, t, r) {
  var n = new Set(e), o = n.size;
  return Kr(t, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!r || !n.size))
        return tl;
    }
  }), r ? !n.size : n.size < o;
}
function ub(e) {
  return e && rl(["client", "export"], e, !0);
}
function lb(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function fb(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (lb(r)) {
      var n = r.arguments, o = r.name.value;
      __DEV__ ? ue(n && n.length === 1, "Incorrect number of arguments for the @".concat(o, " directive.")) : ue(n && n.length === 1, 41);
      var i = n[0];
      __DEV__ ? ue(i.name && i.name.value === "if", "Invalid argument for the @".concat(o, " directive.")) : ue(i.name && i.name.value === "if", 42);
      var a = i.value;
      __DEV__ ? ue(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(o, " directive must be a variable or a boolean value.")) : ue(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: r, ifArgument: i });
    }
  }), t;
}
function db(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw __DEV__ ? new Qe("Found a ".concat(i.operation, " operation").concat(i.name ? " named '".concat(i.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Qe(44);
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof r > "u" && (__DEV__ ? ue(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : ue(n.length === 1, 45), r = n[0].name.value);
  var o = z(z({}, e), { definitions: On([
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
function nl(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function ol(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return __DEV__ ? ue(n, "No fragment named ".concat(r)) : ue(n, 46), n || null;
    }
    default:
      return null;
  }
}
function yt(e) {
  return e !== null && typeof e == "object";
}
function lo(e) {
  return { __ref: String(e) };
}
function it(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function hb(e) {
  return yt(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function vb(e) {
  return e.kind === "StringValue";
}
function pb(e) {
  return e.kind === "BooleanValue";
}
function mb(e) {
  return e.kind === "IntValue";
}
function gb(e) {
  return e.kind === "FloatValue";
}
function yb(e) {
  return e.kind === "Variable";
}
function bb(e) {
  return e.kind === "ObjectValue";
}
function Eb(e) {
  return e.kind === "ListValue";
}
function Sb(e) {
  return e.kind === "EnumValue";
}
function wb(e) {
  return e.kind === "NullValue";
}
function mo(e, t, r, n) {
  if (mb(r) || gb(r))
    e[t.value] = Number(r.value);
  else if (pb(r) || vb(r))
    e[t.value] = r.value;
  else if (bb(r)) {
    var o = {};
    r.fields.map(function(a) {
      return mo(o, a.name, a.value, n);
    }), e[t.value] = o;
  } else if (yb(r)) {
    var i = (n || {})[r.name.value];
    e[t.value] = i;
  } else if (Eb(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return mo(s, t, a, n), s[t.value];
    });
  else if (Sb(r))
    e[t.value] = r.value;
  else if (wb(r))
    e[t.value] = null;
  else
    throw __DEV__ ? new Qe('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Qe(55);
}
function Cb(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(o) {
    r[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return mo(r[o.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return mo(n, i, a, t);
  })), il(e.name.value, n, r);
}
var Ob = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], il = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var o = {};
      return n.forEach(function(s) {
        o[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(Vo(o), ")");
    } else
      return r.connection.key;
  var i = e;
  if (t) {
    var a = Vo(t);
    i += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Ob.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? i += "@".concat(s, "(").concat(Vo(r[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var t = Vo;
    return Vo = e, t;
  }
}), Vo = function(t) {
  return JSON.stringify(t, _b);
};
function _b(e, t) {
  return yt(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function Ka(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return mo(r, o, i, t);
    }), r;
  }
  return null;
}
function Nn(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Oc(e, t, r) {
  for (var n, o = 0, i = t.selections; o < i.length; o++) {
    var a = i[o];
    if (Mn(a)) {
      if (a.name.value === "__typename")
        return e[Nn(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, c = n; s < c.length; s++) {
      var a = c[s], u = Oc(e, ol(a, r).selectionSet, r);
      if (typeof u == "string")
        return u;
    }
}
function Mn(e) {
  return e.kind === "Field";
}
function xb(e) {
  return e.kind === "InlineFragment";
}
function Ya(e) {
  __DEV__ ? ue(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : ue(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new Qe('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new Qe(48);
    return r;
  });
  return __DEV__ ? ue(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : ue(t.length <= 1, 49), e;
}
function bi(e) {
  return Ya(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function _c(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function al(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function jv(e) {
  var t = bi(e);
  return __DEV__ ? ue(t && t.operation === "query", "Must contain a query definition.") : ue(t && t.operation === "query", 50), t;
}
function Rb(e) {
  __DEV__ ? ue(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : ue(e.kind === "Document", 51), __DEV__ ? ue(e.definitions.length <= 1, "Fragment must have exactly one definition.") : ue(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? ue(t.kind === "FragmentDefinition", "Must be a fragment definition.") : ue(t.kind === "FragmentDefinition", 53), t;
}
function Xa(e) {
  Ya(e);
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
  throw __DEV__ ? new Qe("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Qe(54);
}
function sl(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && mo(t, n.variable.name, n.defaultValue);
  }), t;
}
var wt = Array.isArray;
function $r(e) {
  return Array.isArray(e) && e.length > 0;
}
var Af = {
  kind: jt.FIELD,
  name: {
    kind: jt.NAME,
    value: "__typename"
  }
};
function Vv(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === jt.FRAGMENT_SPREAD && Vv(t[r.name.value], t);
  });
}
function Tb(e) {
  return Vv(bi(e) || Rb(e), nl(al(e))) ? null : e;
}
function Pb(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.forEach(function(n) {
    n.name ? t.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return t.has(n.name.value) || r.some(function(o) {
      return o(n);
    });
  };
}
function Df(e) {
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
function zv(e, t) {
  for (var r = Df(""), n = Df(""), o = function(y) {
    for (var S = 0, w = void 0; S < y.length && (w = y[S]); ++S)
      if (!wt(w)) {
        if (w.kind === jt.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === jt.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return __DEV__ && ue.error("Could not find operation or fragment"), null;
  }, i = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === jt.OPERATION_DEFINITION && ++i;
  var s = Pb(e), c = e.some(function(y) {
    return y.remove;
  }), u = function(y) {
    return c && y && y.some(s);
  }, l = /* @__PURE__ */ new Map(), f = !1, d = {
    enter: function(y) {
      if (u(y.directives))
        return f = !0, null;
    }
  }, h = Kr(t, {
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, S, w, b, C) {
        var O = o(C);
        O && O.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, S, w, b, C) {
        if (u(y.directives))
          return f = !0, null;
        var O = o(C);
        O && O.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, S, w, b) {
        l.set(JSON.stringify(b), y);
      },
      leave: function(y, S, w, b) {
        var C = l.get(JSON.stringify(b));
        if (y === C)
          return y;
        if (i > 0 && y.selectionSet.selections.every(function(O) {
          return O.kind === jt.FIELD && O.name.value === "__typename";
        }))
          return n(y.name.value).removed = !0, f = !0, null;
      }
    },
    Directive: {
      leave: function(y) {
        if (s(y))
          return f = !0, null;
      }
    }
  });
  if (!f)
    return t;
  var m = function(y) {
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(S) {
      m(n(S)).transitiveVars.forEach(function(w) {
        y.transitiveVars.add(w);
      });
    })), y;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(y) {
    y.kind === jt.OPERATION_DEFINITION ? m(r(y.name && y.name.value)).fragmentSpreads.forEach(function(S) {
      p.add(S);
    }) : y.kind === jt.FRAGMENT_DEFINITION && i === 0 && !n(y.name.value).removed && p.add(y.name.value);
  }), p.forEach(function(y) {
    m(n(y)).fragmentSpreads.forEach(function(S) {
      p.add(S);
    });
  });
  var g = function(y) {
    return !!(!p.has(y) || n(y).removed);
  }, E = {
    enter: function(y) {
      if (g(y.name.value))
        return null;
    }
  };
  return Tb(Kr(h, {
    FragmentSpread: E,
    FragmentDefinition: E,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var S = m(r(y.name && y.name.value)).transitiveVars;
          if (S.size < y.variableDefinitions.length)
            return z(z({}, y), { variableDefinitions: y.variableDefinitions.filter(function(w) {
              return S.has(w.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var cl = Object.assign(function(e) {
  return Kr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === jt.OPERATION_DEFINITION)) {
          var o = t.selections;
          if (o) {
            var i = o.some(function(s) {
              return Mn(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(Mn(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return z(z({}, t), { selections: On(On([], o, !0), [Af], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === Af;
  }
}), Nb = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && ue.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function Mb(e) {
  return zv([Nb], Ya(e));
}
function Ib(e) {
  var t = Xa(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Kr(e, {
    OperationDefinition: {
      enter: function(o) {
        return z(z({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function Ab(e) {
  Ya(e);
  var t = zv([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var Db = Object.prototype.hasOwnProperty;
function Ff() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return ul(e);
}
function ul(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new un(), o = 1; o < r; ++o)
      t = n.merge(t, e[o]);
  return t;
}
var Fb = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, un = function() {
  function e(t) {
    t === void 0 && (t = Fb), this.reconciler = t, this.isObject = yt, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return yt(r) && yt(t) ? (Object.keys(r).forEach(function(a) {
      if (Db.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var c = n.reconciler.apply(n, On([t, r, a], o, !1));
          c !== s && (t = n.shallowCopyForMerge(t), t[a] = c);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return yt(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = z({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function $b(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = kb(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kb(e, t) {
  if (e) {
    if (typeof e == "string")
      return $f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $f(e, t);
  }
}
function $f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function kf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ll(e, t, r) {
  return t && kf(e.prototype, t), r && kf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var fl = function() {
  return typeof Symbol == "function";
}, dl = function(e) {
  return fl() && !!Symbol[e];
}, hl = function(e) {
  return dl(e) ? Symbol[e] : "@@" + e;
};
fl() && !dl("observable") && (Symbol.observable = Symbol("observable"));
var Lb = hl("iterator"), xc = hl("observable"), Hv = hl("species");
function Ea(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function zo(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Hv], t === null && (t = void 0)), t !== void 0 ? t : vt;
}
function jb(e) {
  return e instanceof vt;
}
function go(e) {
  go.log ? go.log(e) : setTimeout(function() {
    throw e;
  });
}
function na(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      go(t);
    }
  });
}
function Bv(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = Ea(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      go(n);
    }
}
function Rc(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Vb(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Wv(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Wv(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = Ea(n, t);
    switch (t) {
      case "next":
        o && o.call(n, r);
        break;
      case "error":
        if (Rc(e), o)
          o.call(n, r);
        else
          throw r;
        break;
      case "complete":
        Rc(e), o && o.call(n);
        break;
    }
  } catch (i) {
    go(i);
  }
  e._state === "closed" ? Bv(e) : e._state === "running" && (e._state = "ready");
}
function Is(e, t, r) {
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
      }], na(function() {
        return Vb(e);
      });
      return;
    }
    Wv(e, t, r);
  }
}
var zb = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var o = new Hb(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Rc(this), Bv(this));
  }, ll(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Hb = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Is(this._subscription, "next", n);
  }, t.error = function(n) {
    Is(this._subscription, "error", n);
  }, t.complete = function() {
    Is(this._subscription, "complete");
  }, ll(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), vt = /* @__PURE__ */ function() {
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
    }), new zb(n, this._subscriber);
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
    var i = zo(this);
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
    var i = zo(this);
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
    var i = zo(this), a = arguments.length > 1, s = !1, c = arguments[1], u = c;
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
    var s = zo(this);
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
    var i = zo(this);
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
  }, t[xc] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = Ea(n, xc);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return jb(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (dl("iterator") && (i = Ea(n, Lb), i))
      return new o(function(s) {
        na(function() {
          if (!s.closed) {
            for (var c = $b(i.call(n)), u; !(u = c()).done; ) {
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
        na(function() {
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
      na(function() {
        if (!s.closed) {
          for (var c = 0; c < o.length; ++c)
            if (s.next(o[c]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, ll(e, null, [{
    key: Hv,
    get: function() {
      return this;
    }
  }]), e;
}();
fl() && Object.defineProperty(vt, Symbol("extensions"), {
  value: {
    symbol: xc,
    hostReportError: go
  },
  configurable: !0
});
var Li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Bb(e) {
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
var eo;
typeof self < "u" ? eo = self : typeof window < "u" ? eo = window : typeof global < "u" ? eo = global : typeof module < "u" ? eo = module : eo = Function("return this")();
Bb(eo);
var Lf = vt.prototype, jf = "@@observable";
Lf[jf] || (Lf[jf] = function() {
  return this;
});
var Wb = Object.prototype.toString;
function Uv(e) {
  return Tc(e);
}
function Tc(e, t) {
  switch (Wb.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(o, i) {
        r[i] = Tc(o, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = Tc(e[o], t);
      }), n;
    }
    default:
      return e;
  }
}
function Ub(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    yt(r) && qb(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      yt(r[n]) && t.add(r[n]);
    });
  }), e;
}
function qb(e) {
  if (__DEV__ && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function Pc(e) {
  return __DEV__ && Ub(e), e;
}
function Yo(e, t, r) {
  var n = [];
  e.forEach(function(o) {
    return o[t] && n.push(o);
  }), n.forEach(function(o) {
    return o[t](r);
  });
}
function As(e, t, r) {
  return new vt(function(n) {
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
        u = u.then(g, g).then(function(E) {
          --s, o && o.call(n, E), c && f.complete();
        }, function(E) {
          throw --s, E;
        }).catch(function(E) {
          i && i.call(n, E);
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
var Fn = typeof WeakMap == "function" && gr(function() {
  return navigator.product;
}) !== "ReactNative", Qb = typeof WeakSet == "function", qv = typeof Symbol == "function" && typeof Symbol.for == "function", Ja = qv && Symbol.asyncIterator;
gr(function() {
  return window.document.createElement;
});
gr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Qv(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: vt });
  }
  return qv && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Vf(e) {
  return e && typeof e.then == "function";
}
var to = function(e) {
  Mr(t, e);
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
        n.sub !== null && (n.latest = ["next", o], n.notify("next", o), Yo(n.observers, "next", o));
      },
      error: function(o) {
        var i = n.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), n.sub = null, n.latest = ["error", o], n.reject(o), n.notify("error", o), Yo(n.observers, "error", o));
      },
      complete: function() {
        var o = n, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var c = s.shift();
          c ? Vf(c) ? c.then(function(u) {
            return n.sub = u.subscribe(n.handlers);
          }) : n.sub = c.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Yo(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof r == "function" && (r = [new vt(r)]), Vf(r) ? r.then(function(o) {
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
}(vt);
Qv(to);
function fo(e) {
  return "incremental" in e;
}
function Gb(e) {
  return "hasNext" in e && "data" in e;
}
function Kb(e) {
  return fo(e) || Gb(e);
}
function Yb(e) {
  return yt(e) && "payload" in e;
}
function Gv(e, t) {
  var r = e, n = new un();
  return fo(t) && $r(t.incremental) && t.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var c = a[s], u = !isNaN(+c), l = u ? [] : {};
      l[c] = i, i = l;
    }
    r = n.merge(r, i);
  }), r;
}
function oa(e) {
  var t = Nc(e);
  return $r(t);
}
function Nc(e) {
  var t = $r(e.errors) ? e.errors.slice(0) : [];
  return fo(e) && $r(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Za() {
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
var zf = /* @__PURE__ */ new Map();
function Mc(e) {
  var t = zf.get(e) || 1;
  return zf.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Xb(e) {
  var t = Mc("stringifyForDisplay");
  return JSON.stringify(e, function(r, n) {
    return n === void 0 ? t : n;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function Ds(e, t) {
  return Za(e, t, t.variables && {
    variables: z(z({}, e && e.variables), t.variables)
  });
}
function Hf(e) {
  return new vt(function(t) {
    t.error(e);
  });
}
var Ic = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function Jb(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var o = n[r];
    if (t.indexOf(o) < 0)
      throw __DEV__ ? new Qe("illegal argument: ".concat(o)) : new Qe(27);
  }
  return e;
}
function Zb(e, t) {
  var r = z({}, e), n = function(i) {
    typeof i == "function" ? r = z(z({}, r), i(r)) : r = z(z({}, r), i);
  }, o = function() {
    return z({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: o
  }), t;
}
function e1(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? _c(t.query) || void 0 : ""), t;
}
function Bf(e, t) {
  return t ? t(e) : vt.of();
}
function Ho(e) {
  return typeof e == "function" ? new xo(e) : e;
}
function ji(e) {
  return e.request.length <= 1;
}
var t1 = function(e) {
  Mr(t, e);
  function t(r, n) {
    var o = e.call(this, r) || this;
    return o.link = n, o;
  }
  return t;
}(Error), xo = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return vt.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Ho).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var o = Ho(r), i = Ho(n || new e(Bf));
    return ji(o) && ji(i) ? new e(function(a) {
      return t(a) ? o.request(a) || vt.of() : i.request(a) || vt.of();
    }) : new e(function(a, s) {
      return t(a) ? o.request(a, s) || vt.of() : i.request(a, s) || vt.of();
    });
  }, e.execute = function(t, r) {
    return t.request(Zb(r.context, e1(Jb(r)))) || vt.of();
  }, e.concat = function(t, r) {
    var n = Ho(t);
    if (ji(n))
      return __DEV__ && ue.warn(new t1("You are calling concat on a terminating link, which will have no effect", n)), n;
    var o = Ho(r);
    return ji(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || vt.of();
      }) || vt.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || vt.of();
      }) || vt.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(Bf)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw __DEV__ ? new Qe("request is not implemented") : new Qe(22);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), Ac = xo.execute, r1 = "3.7.17";
function n1(e) {
  return !!e.body;
}
function o1(e) {
  return !!e.getReader;
}
function i1(e) {
  return !!(Ja && e[Symbol.asyncIterator]);
}
function a1(e) {
  return !!e.stream;
}
function s1(e) {
  return !!e.arrayBuffer;
}
function c1(e) {
  return !!e.pipe;
}
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
  return Ja && (l[Symbol.asyncIterator] = function() {
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
  return Ja && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Wf(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return Ja && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function d1(e) {
  var t = e;
  if (n1(e) && (t = e.body), i1(t))
    return u1(t);
  if (o1(t))
    return Wf(t.getReader());
  if (a1(t))
    return Wf(t.stream().getReader());
  if (s1(t))
    return f1(t.arrayBuffer());
  if (c1(t))
    return l1(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var pl = Symbol();
function h1(e) {
  return e.extensions ? Array.isArray(e.extensions[pl]) : !1;
}
function v1(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var p1 = function(e) {
  var t = On(On(On([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return yt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Qn = function(e) {
  Mr(t, e);
  function t(r) {
    var n = r.graphQLErrors, o = r.protocolErrors, i = r.clientErrors, a = r.networkError, s = r.errorMessage, c = r.extraInfo, u = e.call(this, s) || this;
    return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = o || [], u.clientErrors = i || [], u.networkError = a || null, u.message = s || p1(u), u.extraInfo = c, u.__proto__ = t.prototype, u;
  }
  return t;
}(Error), Uf = Object.prototype.hasOwnProperty;
function m1(e, t) {
  var r, n, o, i, a;
  return rn(this, void 0, void 0, function() {
    var s, c, u, l, f, d, h, m, p, g, E, y, S, w, b, C, O, P, N, x, L, R, _;
    return nn(this, function(T) {
      switch (T.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), c = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), u = "boundary=", l = c?.includes(u) ? c?.substring(c?.indexOf(u) + u.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(l), d = "", h = d1(e), m = !0, T.label = 1;
        case 1:
          return m ? [4, h.next()] : [3, 3];
        case 2:
          for (p = T.sent(), g = p.value, E = p.done, y = typeof g == "string" ? g : s.decode(g), S = d.length - f.length + 1, m = !E, d += y, w = d.indexOf(f, S); w > -1; ) {
            if (b = void 0, R = [
              d.slice(0, w),
              d.slice(w + f.length)
            ], b = R[0], d = R[1], C = b.indexOf(`\r
\r
`), O = g1(b.slice(0, C)), P = O["content-type"], P && P.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (N = b.slice(C), N)
              try {
                x = Kv(e, N), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x ? Yb(x) ? (L = {}, "payload" in x && (L = z({}, x.payload)), "errors" in x && (L = z(z({}, L), { extensions: z(z({}, "extensions" in L ? L.extensions : null), (_ = {}, _[pl] = x.errors, _)) })), (n = t.next) === null || n === void 0 || n.call(t, L)) : (o = t.next) === null || o === void 0 || o.call(t, x) : Object.keys(x).length === 1 && "hasNext" in x && !x.hasNext && ((i = t.complete) === null || i === void 0 || i.call(t));
              } catch (A) {
                ml(A, t);
              }
            w = d.indexOf(f);
          }
          return [3, 1];
        case 3:
          return (a = t.complete) === null || a === void 0 || a.call(t), [2];
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
function Kv(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    Ic(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function ml(e, t) {
  var r, n;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((r = t.next) === null || r === void 0 || r.call(t, e.result)), (n = t.error) === null || n === void 0 || n.call(t, e));
}
function y1(e, t, r) {
  b1(t)(e).then(function(n) {
    var o, i;
    (o = r.next) === null || o === void 0 || o.call(r, n), (i = r.complete) === null || i === void 0 || i.call(r);
  }).catch(function(n) {
    return ml(n, r);
  });
}
function b1(e) {
  return function(t) {
    return t.text().then(function(r) {
      return Kv(t, r);
    }).then(function(r) {
      return t.status >= 300 && Ic(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !Uf.call(r, "data") && !Uf.call(r, "errors") && Ic(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var Dc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (o) {
    var n = __DEV__ ? new Qe("Network request failed. ".concat(t, " is not serializable: ").concat(o.message)) : new Qe(24);
    throw n.parseError = o, n;
  }
  return r;
}, E1 = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, S1 = {
  accept: "*/*",
  "content-type": "application/json"
}, w1 = {
  method: "POST"
}, C1 = {
  http: E1,
  headers: S1,
  options: w1
}, O1 = function(e, t) {
  return t(e);
};
function _1(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = {}, i = {};
  r.forEach(function(f) {
    o = z(z(z({}, o), f.options), { headers: z(z({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = z(z({}, i), f.http);
  }), o.headers && (o.headers = x1(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, c = e.variables, u = e.query, l = { operationName: a, variables: c };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = t(u, ob)), {
    options: o,
    body: l
  };
}
function x1(e, t) {
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
var R1 = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new Qe(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new Qe(23);
}, T1 = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, P1 = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function N1(e, t) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var o = void 0;
    try {
      o = Dc(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (t.extensions) {
    var i = void 0;
    try {
      i = Dc(t.extensions, "Extensions map");
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
var qf = gr(function() {
  return fetch;
}), Yv = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, o = e.print, i = o === void 0 ? O1 : o, a = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, u = e.includeUnusedVariables, l = u === void 0 ? !1 : u, f = Pn(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && R1(n || qf);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new xo(function(h) {
    var m = P1(h, r), p = h.getContext(), g = {};
    if (p.clientAwareness) {
      var E = p.clientAwareness, y = E.name, S = E.version;
      y && (g["apollographql-client-name"] = y), S && (g["apollographql-client-version"] = S);
    }
    var w = z(z({}, g), p.headers), b = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: w
    }, C = _1(h, i, C1, d, b), O = C.options, P = C.body;
    if (P.variables && !l) {
      var N = new Set(Object.keys(P.variables));
      Kr(h.query, {
        Variable: function($, H, j) {
          j && j.kind !== "VariableDefinition" && N.delete($.name.value);
        }
      }), N.size && (P.variables = z({}, P.variables), N.forEach(function($) {
        delete P.variables[$];
      }));
    }
    var x;
    if (!O.signal) {
      var L = T1(), R = L.controller, _ = L.signal;
      x = R, x && (O.signal = _);
    }
    var T = function($) {
      return $.kind === "OperationDefinition" && $.operation === "mutation";
    }, A = function($) {
      return $.kind === "OperationDefinition" && $.operation === "subscription";
    }, F = A(Xa(h.query)), D = rl(["defer"], h.query);
    if (c && !h.query.definitions.some(T) && (O.method = "GET"), D || F) {
      O.headers = O.headers || {};
      var B = "multipart/mixed;";
      F && D && __DEV__ && ue.warn("Multipart-subscriptions do not support @defer"), F ? B += "boundary=graphql;subscriptionSpec=1.0,application/json" : D && (B += "deferSpec=20220824,application/json"), O.headers.accept = B;
    }
    if (O.method === "GET") {
      var Q = N1(m, P), ne = Q.newURI, se = Q.parseError;
      if (se)
        return Hf(se);
      m = ne;
    } else
      try {
        O.body = Dc(P, "Payload");
      } catch ($) {
        return Hf($);
      }
    return new vt(function($) {
      var H = n || gr(function() {
        return fetch;
      }) || qf;
      return H(m, O).then(function(j) {
        var K;
        h.setContext({ response: j });
        var I = (K = j.headers) === null || K === void 0 ? void 0 : K.get("content-type");
        return I !== null && /^multipart\/mixed/i.test(I) ? m1(j, $) : y1(j, h, $);
      }).catch(function(j) {
        return ml(j, $);
      }), function() {
        x && x.abort();
      };
    });
  });
}, M1 = function(e) {
  Mr(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, Yv(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(xo);
const { toString: Qf, hasOwnProperty: I1 } = Object.prototype, Gf = Function.prototype.toString, Fc = /* @__PURE__ */ new Map();
function At(e, t) {
  try {
    return $c(e, t);
  } finally {
    Fc.clear();
  }
}
function $c(e, t) {
  if (e === t)
    return !0;
  const r = Qf.call(e), n = Qf.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Yf(e, t))
        return !0;
      const o = Kf(e), i = Kf(t), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!I1.call(t, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const c = o[s];
        if (!$c(e[c], t[c]))
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
      if (Yf(e, t))
        return !0;
      const o = e.entries(), i = r === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, c] = a.value;
        if (!t.has(s) || i && !$c(c, t.get(s)))
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
      const o = Gf.call(e);
      return o !== Gf.call(t) ? !1 : !F1(o, D1);
    }
  }
  return !1;
}
function Kf(e) {
  return Object.keys(e).filter(A1, e);
}
function A1(e) {
  return this[e] !== void 0;
}
const D1 = "{ [native code] }";
function F1(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Yf(e, t) {
  let r = Fc.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Fc.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
var $1 = function() {
  return /* @__PURE__ */ Object.create(null);
}, Xv = Array.prototype, k1 = Xv.forEach, L1 = Xv.slice, j1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !0), r === void 0 && (r = $1), this.weakness = t, this.makeData = r;
    }
    return e.prototype.lookup = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var r = this;
      return k1.call(t, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(L1.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var r = this.weakness && V1(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(t);
      return n || r.set(t, n = new e(this.weakness, this.makeData)), n;
    }, e;
  }()
);
function V1(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Ht = null;
const Xf = {};
let z1 = 1;
const H1 = () => class {
  constructor() {
    this.id = [
      "slot",
      z1++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Ht; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Xf)
          break;
        return t !== Ht && (Ht.slots[this.id] = r), !0;
      }
    return Ht && (Ht.slots[this.id] = Xf), !1;
  }
  getValue() {
    if (this.hasValue())
      return Ht.slots[this.id];
  }
  withValue(t, r, n, o) {
    const i = {
      __proto__: null,
      [this.id]: t
    }, a = Ht;
    Ht = { parent: a, slots: i };
    try {
      return r.apply(o, n);
    } finally {
      Ht = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Ht;
    return function() {
      const n = Ht;
      try {
        return Ht = r, t.apply(this, arguments);
      } finally {
        Ht = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Ht) {
      const o = Ht;
      try {
        return Ht = null, t.apply(n, r);
      } finally {
        Ht = o;
      }
    } else
      return t.apply(n, r);
  }
};
function Jf(e) {
  try {
    return e();
  } catch {
  }
}
const Fs = "@wry/context:Slot", B1 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Jf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Jf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Zf = B1, Jv = Zf[Fs] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Fs] || function(e) {
  try {
    Object.defineProperty(Zf, Fs, {
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
}(H1());
function W1() {
}
var U1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = 1 / 0), r === void 0 && (r = W1), this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return e.prototype.has = function(t) {
      return this.map.has(t);
    }, e.prototype.get = function(t) {
      var r = this.getNode(t);
      return r && r.value;
    }, e.prototype.getNode = function(t) {
      var r = this.map.get(t);
      if (r && r !== this.newest) {
        var n = r.older, o = r.newer;
        o && (o.older = n), n && (n.newer = o), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = o);
      }
      return r;
    }, e.prototype.set = function(t, r) {
      var n = this.getNode(t);
      return n ? n.value = r : (n = {
        key: t,
        value: r,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
    }, e.prototype.clean = function() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }, e.prototype.delete = function(t) {
      var r = this.map.get(t);
      return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
    }, e;
  }()
), es = new Jv(), $s, q1 = Object.prototype.hasOwnProperty, gl = ($s = Array.from, $s === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
} : $s);
function Sa(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var ii = [], Q1 = 100;
function yo(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function G1(e, t) {
  var r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function Zv(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function K1(e) {
  return e.slice(0);
}
var Y1 = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !ln(this))
        return ed(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return yo(!this.recomputing, "already recomputing"), ed(this), ln(this) ? X1(this, t) : Zv(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, ep(this), Sa(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), ip(this), yl(this, function(r, n) {
        r.setDirty(), ap(r, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = ii.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (gl(this.deps).forEach(function(r) {
        return r.delete(t);
      }), this.deps.clear(), ii.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function ed(e) {
  var t = es.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), ln(e) ? rp(t, e) : np(t, e), t;
}
function X1(e, t) {
  return ip(e), es.withValue(e, J1, [e, t]), eE(e, t) && Z1(e), Zv(e.value);
}
function J1(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function ln(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Z1(e) {
  e.dirty = !1, !ln(e) && tp(e);
}
function ep(e) {
  yl(e, rp);
}
function tp(e) {
  yl(e, np);
}
function yl(e, t) {
  var r = e.parents.size;
  if (r)
    for (var n = gl(e.parents), o = 0; o < r; ++o)
      t(n[o], e);
}
function rp(e, t) {
  yo(e.childValues.has(t)), yo(ln(t));
  var r = !ln(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = ii.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && ep(e);
}
function np(e, t) {
  yo(e.childValues.has(t)), yo(!ln(t));
  var r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, K1(t.value)) : G1(r, t.value) || e.setDirty(), op(e, t), !ln(e) && tp(e);
}
function op(e, t) {
  var r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (ii.length < Q1 && ii.push(r), e.dirtyChildren = null));
}
function ip(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
    ap(e, r);
  }), e.forgetDeps(), yo(e.dirtyChildren === null);
}
function ap(e, t) {
  t.parents.delete(e), e.childValues.delete(t), op(e, t);
}
function eE(e, t) {
  if (typeof e.subscribe == "function")
    try {
      Sa(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var tE = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function sp(e) {
  var t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(o) {
    var i = es.getValue();
    if (i) {
      var a = t.get(o);
      a || t.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof r == "function" && (Sa(a), a.unsubscribe = r(o));
    }
  }
  return n.dirty = function(i, a) {
    var s = t.get(i);
    if (s) {
      var c = a && q1.call(tE, a) ? a : "setDirty";
      gl(s).forEach(function(u) {
        return u[c]();
      }), t.delete(i), Sa(s);
    }
  }, n;
}
function cp() {
  var e = new j1(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
cp();
var ks = /* @__PURE__ */ new Set();
function wa(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var r = new U1(t.max || Math.pow(2, 16), function(u) {
    return u.dispose();
  }), n = t.keyArgs, o = t.makeCacheKey || cp(), i = function() {
    var u = o.apply(null, n ? n.apply(null, arguments) : arguments);
    if (u === void 0)
      return e.apply(null, arguments);
    var l = r.get(u);
    l || (r.set(u, l = new Y1(e)), l.subscribe = t.subscribe, l.forget = function() {
      return r.delete(u);
    });
    var f = l.recompute(Array.prototype.slice.call(arguments));
    return r.set(u, l), ks.add(r), es.hasValue() || (ks.forEach(function(d) {
      return d.clean();
    }), ks.clear()), f;
  };
  Object.defineProperty(i, "size", {
    get: function() {
      return r.map.size;
    },
    configurable: !1,
    enumerable: !1
  });
  function a(u) {
    var l = r.get(u);
    l && l.setDirty();
  }
  i.dirtyKey = a, i.dirty = function() {
    a(o.apply(null, arguments));
  };
  function s(u) {
    var l = r.get(u);
    if (l)
      return l.peek();
  }
  i.peekKey = s, i.peek = function() {
    return s(o.apply(null, arguments));
  };
  function c(u) {
    return r.delete(u);
  }
  return i.forgetKey = c, i.forget = function() {
    return c(o.apply(null, arguments));
  }, i.makeCacheKey = o, i.getKey = n ? function() {
    return o.apply(null, n.apply(null, arguments));
  } : o, Object.freeze(i);
}
var rE = function() {
  function e() {
    this.getFragmentDoc = wa(db);
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
    return r === void 0 && (r = !!t.optimistic), this.read(z(z({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(z(z({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
  }, e.prototype.writeQuery = function(t) {
    var r = t.id, n = t.data, o = Pn(t, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, o = t.fragment, i = t.fragmentName, a = Pn(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readQuery(t), i = r(o);
        return i == null ? o : (n.writeQuery(z(z({}, t), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readFragment(t), i = r(o);
        return i == null ? o : (n.writeFragment(z(z({}, t), { data: i })), i);
      }
    });
  }, e;
}(), up = function(e) {
  Mr(t, e);
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
}(Error);
const nE = () => /* @__PURE__ */ Object.create(null), { forEach: oE, slice: iE } = Array.prototype, { hasOwnProperty: aE } = Object.prototype;
class Ro {
  constructor(t = !0, r = nE) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return oE.call(t, (n) => r = r.getChildTrie(n)), aE.call(r, "data") ? r.data : r.data = this.makeData(iE.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, o = t.length; r && n < o; ++n) {
      const i = this.weakness && td(t[n]) ? r.weak : r.strong;
      r = i && i.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && td(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new Ro(this.weakness, this.makeData)), n;
  }
}
function td(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var kt = Object.prototype.hasOwnProperty;
function Bo(e) {
  return e == null;
}
function lp(e, t) {
  var r = e.__typename, n = e.id, o = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Bo(n) ? Bo(o) ? void 0 : { _id: o } : { id: n }), Bo(n) && !Bo(o) && (n = o), !Bo(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var fp = {
  dataIdFromObject: lp,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function sE(e) {
  return Za(fp, e);
}
function dp(e) {
  var t = e.canonizeResults;
  return t === void 0 ? fp.canonizeResults : t;
}
function cE(e, t) {
  return it(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var hp = /^[_a-z][_0-9a-z]*/i;
function fn(e) {
  var t = e.match(hp);
  return t ? t[0] : e;
}
function kc(e, t, r) {
  return yt(t) ? wt(t) ? t.every(function(n) {
    return kc(e, n, r);
  }) : e.selections.every(function(n) {
    if (Mn(n) && Ga(n, r)) {
      var o = Nn(n);
      return kt.call(t, o) && (!n.selectionSet || kc(n.selectionSet, t[o], r));
    }
    return !0;
  }) : !1;
}
function oo(e) {
  return yt(e) && !it(e) && !wt(e);
}
function uE() {
  return new un();
}
function vp(e, t) {
  var r = nl(al(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var o = r[n];
      return !o && t && (o = t.lookup(n)), o || null;
    }
  };
}
var ia = /* @__PURE__ */ Object.create(null), Ls = function() {
  return ia;
}, rd = /* @__PURE__ */ Object.create(null), ai = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return Pc(it(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return it(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return lo(o);
      if (it(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = lo(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return z({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), kt.call(this.data, t)) {
      var n = this.data[t];
      if (n && kt.call(n, r))
        return n[r];
    }
    if (r === "__typename" && kt.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof tn)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), kt.call(this.data, t))
      return this.data[t];
    if (this instanceof tn)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, o;
    it(t) && (t = t.__ref), it(r) && (r = r.__ref);
    var i = typeof t == "string" ? this.lookup(o = t) : t, a = typeof r == "string" ? this.lookup(o = r) : r;
    if (a) {
      __DEV__ ? ue(typeof o == "string", "store.merge expects a string ID") : ue(typeof o == "string", 1);
      var s = new un(fE).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var c = /* @__PURE__ */ Object.create(null);
        i || (c.__exists = 1), Object.keys(a).forEach(function(u) {
          if (!i || i[u] !== s[u]) {
            c[u] = 1;
            var l = fn(u);
            l !== u && !n.policies.hasKeyArgs(s.__typename, l) && (c[l] = 1), s[u] === void 0 && !(n instanceof tn) && delete s[u];
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
        DELETE: ia,
        INVALIDATE: rd,
        isReference: it,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(u, l) {
          return n.policies.readField(typeof u == "string" ? {
            fieldName: u,
            from: l || lo(t)
          } : u, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(u) {
        var l = fn(u), f = o[u];
        if (f !== void 0) {
          var d = typeof r == "function" ? r : r[u] || r[l];
          if (d) {
            var h = d === Ls ? ia : d(Pc(f), z(z({}, c), { fieldName: l, storeFieldName: u, storage: n.getStorage(t, u) }));
            h === rd ? n.group.dirty(t, u) : (h === ia && (h = void 0), h !== f && (i[u] = h, a = !0, f = h));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, i), s && (this instanceof tn ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var o, i = this.lookup(t);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (o = {}, o[s] = Ls, o) : Ls);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (kt.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof tn && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      kt.call(t.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(i) {
      t && kt.call(t, i) || r.delete(i);
    }), t) {
      var n = t.__META, o = Pn(t, ["__META"]);
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
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof tn ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      kt.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof tn; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(t) {
    if (!kt.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        it(i) && (r[i.__ref] = !0), yt(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          yt(s) && o.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), pp = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? sp() : null, this.keyMaker = new Ro(Fn);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(js(t, r));
      var n = fn(r);
      n !== r && this.d(js(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(js(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function js(e, t) {
  return t + "#" + e;
}
function nd(e, t) {
  Xo(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    Mr(n, r);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, c = o.seed, u = r.call(this, i, new pp(s)) || this;
      return u.stump = new lE(u), u.storageTrie = new Ro(Fn), c && u.replace(c), u;
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
})(ai || (ai = {}));
var tn = function(e) {
  Mr(t, e);
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
        At(a[c], s[c]) || n.group.dirty(i, c);
      }) : (n.group.dirty(i, "__exists"), Object.keys(s).forEach(function(c) {
        n.group.dirty(i, c);
      })) : n.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return z(z({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return kt.call(this.data, r) ? z(z({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(ai), lE = function(e) {
  Mr(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new pp(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(tn);
function fE(e, t, r) {
  var n = e[r], o = t[r];
  return At(n, o) ? n : o;
}
function Xo(e) {
  return !!(e instanceof ai && e.group.caching);
}
function dE(e) {
  return yt(e) ? wt(e) ? e.slice(0) : z({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Lc = function() {
  function e() {
    this.known = new (Qb ? WeakSet : Set)(), this.pool = new Ro(Fn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return yt(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (yt(t)) {
      var r = dE(t);
      return this.passes.set(r, t), r;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var r = this;
    if (yt(t)) {
      var n = this.passes.get(t);
      if (n)
        return n;
      var o = Object.getPrototypeOf(t);
      switch (o) {
        case Array.prototype: {
          if (this.known.has(t))
            return t;
          var i = t.map(this.admit, this), a = this.pool.lookupArray(i);
          return a.array || (this.known.add(a.array = i), __DEV__ && Object.freeze(i)), a.array;
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
            }), __DEV__ && Object.freeze(f);
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
}(), _n = Object.assign(function(e) {
  if (yt(e)) {
    jc === void 0 && od();
    var t = jc.admit(e), r = Vc.get(t);
    return r === void 0 && Vc.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: od
}), jc, Vc;
function od() {
  jc = new Lc(), Vc = new (Fn ? WeakMap : Map)();
}
function id(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var hE = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (Fn ? WeakMap : Map)(), this.config = Za(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: dp(t)
    }), this.canon = t.canon || new Lc(), this.executeSelectionSet = wa(function(n) {
      var o, i = n.context.canonizeResults, a = id(n);
      a[3] = !i;
      var s = (o = r.executeSelectionSet).peek.apply(o, a);
      return s ? i ? z(z({}, s), { result: r.canon.admit(s.result) }) : s : (nd(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: id,
      makeCacheKey: function(n, o, i, a) {
        if (Xo(i.store))
          return i.store.makeCacheKey(n, it(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = wa(function(n) {
      return nd(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var o = n.field, i = n.array, a = n.context;
        if (Xo(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Lc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, o = t.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = t.variables, s = t.returnPartialData, c = s === void 0 ? !0 : s, u = t.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
    a = z(z({}, sl(jv(n))), a);
    var d = lo(i), h = this.executeSelectionSet({
      selectionSet: Xa(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: z({ store: r, query: n, policies: f, variables: a, varString: _n(a), canonizeResults: l }, vp(n, this.config.fragments))
    }), m;
    if (h.missing && (m = [new up(vE(h.missing), h.missing, n, a)], !c))
      throw m[0];
    return {
      result: h.result,
      complete: !m,
      missing: m
    };
  }, e.prototype.isFresh = function(t, r, n, o) {
    if (Xo(o.store) && this.knownResults.get(t) === n) {
      var i = this.executeSelectionSet.peek(n, r, o, this.canon.isKnown(t));
      if (i && t === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var r = this, n = t.selectionSet, o = t.objectOrReference, i = t.enclosingRef, a = t.context;
    if (it(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, c = a.policies, u = a.store, l = u.getFieldValue(o, "__typename"), f = [], d, h = new un();
    this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && f.push({ __typename: l });
    function m(S, w) {
      var b;
      return S.missing && (d = h.merge(d, (b = {}, b[w] = S.missing, b))), S.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(S) {
      var w, b;
      if (Ga(S, s))
        if (Mn(S)) {
          var C = c.readField({
            fieldName: S.name.value,
            field: S,
            variables: a.variables,
            from: o
          }, a), O = Nn(S);
          C === void 0 ? cl.added(S) || (d = h.merge(d, (w = {}, w[O] = "Can't find field '".concat(S.name.value, "' on ").concat(it(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), w))) : wt(C) ? C = m(r.executeSubSelectedArray({
            field: S,
            array: C,
            enclosingRef: i,
            context: a
          }), O) : S.selectionSet ? C != null && (C = m(r.executeSelectionSet({
            selectionSet: S.selectionSet,
            objectOrReference: C,
            enclosingRef: it(C) ? C : i,
            context: a
          }), O)) : a.canonizeResults && (C = r.canon.pass(C)), C !== void 0 && f.push((b = {}, b[O] = C, b));
        } else {
          var P = ol(S, a.lookupFragment);
          if (!P && S.kind === jt.FRAGMENT_SPREAD)
            throw __DEV__ ? new Qe("No fragment named ".concat(S.name.value)) : new Qe(5);
          P && c.fragmentMatches(P, l) && P.selectionSet.selections.forEach(p.add, p);
        }
    });
    var g = ul(f), E = { result: g, missing: d }, y = a.canonizeResults ? this.canon.admit(E) : Pc(E);
    return y.result && this.knownResults.set(y.result, n), y;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, o = t.array, i = t.enclosingRef, a = t.context, s, c = new un();
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
        enclosingRef: it(l) ? l : i,
        context: a
      }), f) : (__DEV__ && pE(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function vE(e) {
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
function pE(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(o) {
      yt(o) && (__DEV__ ? ue(!it(o), "Missing selection set for object of type ".concat(cE(e, o), " returned for query field ").concat(t.name.value)) : ue(!it(o), 6), Object.values(o).forEach(n.add, n));
    });
  }
}
var bl = new Jv(), ad = /* @__PURE__ */ new WeakMap();
function Jo(e) {
  var t = ad.get(e);
  return t || ad.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: sp()
  }), t;
}
function sd(e) {
  Jo(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function mE(e) {
  Jo(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function gE(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, t.forEach(function(c) {
          Jo(c).dep.dirty(n), yE(c);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(c) {
          return c(e);
        });
      }
    } else {
      var s = bl.getValue();
      s && (o(s), Jo(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(i) {
    return r.add(i), function() {
      r.delete(i);
    };
  };
  var o = n.attachCache = function(i) {
    return t.add(i), Jo(i).vars.add(n), n;
  };
  return n.forgetCache = function(i) {
    return t.delete(i);
  }, n;
}
function yE(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var cd = /* @__PURE__ */ Object.create(null);
function El(e) {
  var t = JSON.stringify(e);
  return cd[t] || (cd[t] = /* @__PURE__ */ Object.create(null));
}
function ud(e) {
  var t = El(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = Sl(e, function(a) {
      var s = ho(n.storeObject, a, o);
      return s === void 0 && r !== n.storeObject && kt.call(r, a[0]) && (s = ho(r, a, gp)), __DEV__ ? ue(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : ue(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function ld(e) {
  var t = El(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = Sl(e, function(u) {
      var l = u[0], f = l.charAt(0);
      if (f === "@") {
        if (o && $r(o.directives)) {
          var d = l.slice(1), h = o.directives.find(function(E) {
            return E.name.value === d;
          }), m = h && Ka(h, i);
          return m && ho(m, u.slice(1));
        }
        return;
      }
      if (f === "$") {
        var p = l.slice(1);
        if (i && kt.call(i, p)) {
          var g = u.slice(0);
          return g[0] = p, ho(i, g);
        }
        return;
      }
      if (r)
        return ho(r, u);
    }), c = JSON.stringify(s);
    return (r || c !== "{}") && (a += ":" + c), a;
  });
}
function Sl(e, t) {
  var r = new un();
  return mp(e).reduce(function(n, o) {
    var i, a = t(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function mp(e) {
  var t = El(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(o, i) {
      wt(o) ? (mp(o).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(o), wt(e[i + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function gp(e, t) {
  return e[t];
}
function ho(e, t, r) {
  return r = r || gp, yp(t.reduce(function n(o, i) {
    return wt(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && r(o, i);
  }, e));
}
function yp(e) {
  return yt(e) ? wt(e) ? e.map(yp) : Sl(Object.keys(e).sort(), function(t) {
    return ho(e, t);
  }) : e;
}
il.setStringify(_n);
function zc(e) {
  return e.args !== void 0 ? e.args : e.field ? Ka(e.field, e.variables) : null;
}
var bE = function() {
}, fd = function(e, t) {
  return t.fieldName;
}, dd = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, hd = function(e, t) {
  return t;
}, EE = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = z({ dataIdFromObject: lp }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, o = this, i = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = z(z({}, r), { typename: i, storeObject: a, readField: r && r.readField || function() {
      var d = wl(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), c, u = i && this.getTypePolicy(i), l = u && u.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(z(z({}, t), a), s);
      if (wt(f))
        l = ud(f);
      else {
        c = f;
        break;
      }
    }
    return c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var o = t[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, c = Pn(o, ["queryType", "mutationType", "subscriptionType"]);
      i && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), kt.call(r.toBeAdded, n) ? r.toBeAdded[n].push(c) : r.toBeAdded[n] = [c];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, o = this.getTypePolicy(t), i = r.keyFields, a = r.fields;
    function s(c, u) {
      c.merge = typeof u == "function" ? u : u === !0 ? dd : u === !1 ? hd : c.merge;
    }
    s(o, r.merge), o.keyFn = i === !1 ? bE : wt(i) ? ud(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(c) {
      var u = n.getFieldPolicy(t, c, !0), l = a[c];
      if (typeof l == "function")
        u.read = l;
      else {
        var f = l.keyArgs, d = l.read, h = l.merge;
        u.keyFn = f === !1 ? fd : wt(f) ? ld(f) : typeof f == "function" ? f : u.keyFn, typeof d == "function" && (u.read = d), s(u, h);
      }
      u.read && u.merge && (u.keyFn = u.keyFn || fd);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), o = this.rootTypenamesById[n];
    r !== o && (__DEV__ ? ue(!o || o === t, "Cannot change root ".concat(t, " __typename more than once")) : ue(!o || o === t, 3), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(o) {
        r.getSupertypeSet(o, !0).add(n);
        var i = o.match(hp);
        (!i || i[0] !== o) && r.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!kt.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(t);
      o && o.size && o.forEach(function(a) {
        var s = r.getTypePolicy(a), c = s.fields, u = Pn(s, ["fields"]);
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
          return s.has(a) || (f && __DEV__ && ue.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(u), l && d === c.length - 1 && kc(t.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(m, p) {
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
      }, c = zc(t); a; ) {
        var u = a(c, s);
        if (wt(u))
          a = ld(u);
        else {
          i = u || n;
          break;
        }
      }
    return i === void 0 && (i = t.field ? Cb(t.field, t.variables) : il(n, zc(t))), i === !1 ? n : n === fn(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var o = t.field || t.fieldName;
      if (o) {
        if (t.typename === void 0) {
          var i = r.store.getFieldValue(n, "__typename");
          i && (t.typename = i);
        }
        var a = this.getStoreFieldName(t), s = fn(a), c = r.store.getFieldValue(n, a), u = this.getFieldPolicy(t.typename, s, !1), l = u && u.read;
        if (l) {
          var f = vd(this, n, t, r, r.store.getStorage(it(n) ? n.__ref : n, a));
          return bl.withValue(this.cache, l, [c, f]);
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
    return c === dd ? bp(o.store)(t, r) : c === hd ? r : (o.overwrite && (t = void 0), c(t, r, vd(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: o.variables }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function vd(e, t, r, n, o) {
  var i = e.getStoreFieldName(r), a = fn(i), s = r.variables || n.variables, c = n.store, u = c.toReference, l = c.canRead;
  return {
    args: zc(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: it,
    toReference: u,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(wl(arguments, t, s), n);
    },
    mergeObjects: bp(n.store)
  };
}
function wl(e, t, r) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : t
  } : (a = z({}, n), kt.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && ue.warn("Undefined 'from' passed to readField with arguments ".concat(Xb(Array.from(e)))), a.variables === void 0 && (a.variables = r), a;
}
function bp(e) {
  return function(r, n) {
    if (wt(r) || wt(n))
      throw __DEV__ ? new Qe("Cannot automatically merge arrays") : new Qe(4);
    if (yt(r) && yt(n)) {
      var o = e.getFieldValue(r, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (it(r) && oo(n))
        return e.merge(r.__ref, n), r;
      if (oo(r) && it(n))
        return e.merge(r, n.__ref), n;
      if (oo(r) && oo(n))
        return z(z({}, r), n);
    }
    return n;
  };
}
function Vs(e, t, r) {
  var n = "".concat(t).concat(r), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === t && e.deferred === r ? e : z(z({}, e), { clientOnly: t, deferred: r })), o;
}
var SE = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, o = r.query, i = r.result, a = r.dataId, s = r.variables, c = r.overwrite, u = bi(o), l = uE();
    s = z(z({}, sl(u)), s);
    var f = z(z({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, m) {
      return l.merge(h, m);
    }, variables: s, varString: _n(s) }, vp(o, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: u.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!it(d))
      throw __DEV__ ? new Qe("Could not identify object ".concat(JSON.stringify(i))) : new Qe(7);
    return f.incomingById.forEach(function(h, m) {
      var p = h.storeObject, g = h.mergeTree, E = h.fieldNodeSet, y = lo(m);
      if (g && g.map.size) {
        var S = n.applyMerges(g, y, p, f);
        if (it(S))
          return;
        p = S;
      }
      if (__DEV__ && !f.overwrite) {
        var w = /* @__PURE__ */ Object.create(null);
        E.forEach(function(O) {
          O.selectionSet && (w[O.name.value] = !0);
        });
        var b = function(O) {
          return w[fn(O)] === !0;
        }, C = function(O) {
          var P = g && g.map.get(O);
          return !!(P && P.info && P.info.merge);
        };
        Object.keys(p).forEach(function(O) {
          b(O) && !C(O) && wE(y, p, O, f.store);
        });
      }
      t.merge(m, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, o = t.result, i = t.selectionSet, a = t.context, s = t.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = n && c.rootTypenamesById[n] || Oc(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (u.__typename = l);
    var f = function() {
      var S = wl(arguments, u, a.variables);
      if (it(S.from)) {
        var w = a.incomingById.get(S.from.__ref);
        if (w) {
          var b = c.readField(z(z({}, S), { from: w.storeObject }), a);
          if (b !== void 0)
            return b;
        }
      }
      return c.readField(S, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(S, w) {
      var b, C = Nn(w), O = o[C];
      if (d.add(w), O !== void 0) {
        var P = c.getStoreFieldName({
          typename: l,
          fieldName: w.name.value,
          field: w,
          variables: S.variables
        }), N = pd(s, P), x = r.processFieldValue(O, w, w.selectionSet ? Vs(S, !1, !1) : S, N), L = void 0;
        w.selectionSet && (it(x) || oo(x)) && (L = f("__typename", x));
        var R = c.getMergeFunction(l, w.name.value, L);
        R ? N.info = {
          field: w,
          typename: l,
          merge: R
        } : md(s, P), u = S.merge(u, (b = {}, b[P] = x, b));
      } else
        __DEV__ && !S.clientOnly && !S.deferred && !cl.added(w) && !c.getReadFunction(l, w.name.value) && __DEV__ && ue.error("Missing field '".concat(Nn(w), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3));
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
    } catch (S) {
      if (!n)
        throw S;
    }
    if (typeof n == "string") {
      var g = lo(n), E = a.written[n] || (a.written[n] = []);
      if (E.indexOf(i) >= 0 || (E.push(i), this.reader && this.reader.isFresh(o, g, i, a)))
        return g;
      var y = a.incomingById.get(n);
      return y ? (y.storeObject = a.merge(y.storeObject, u), y.mergeTree = Hc(y.mergeTree, s), d.forEach(function(S) {
        return y.fieldNodeSet.add(S);
      })) : a.incomingById.set(n, {
        storeObject: u,
        mergeTree: Ca(s) ? void 0 : s,
        fieldNodeSet: d
      }), g;
    }
    return u;
  }, e.prototype.processFieldValue = function(t, r, n, o) {
    var i = this;
    return !r.selectionSet || t === null ? __DEV__ ? Uv(t) : t : wt(t) ? t.map(function(a, s) {
      var c = i.processFieldValue(a, r, n, pd(o, s));
      return md(o, s), c;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(t, r, n, o) {
    o === void 0 && (o = Oc(r, t, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Ro(!1);
    return function c(u, l) {
      var f = s.lookup(u, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, u.selections.forEach(function(d) {
        if (Ga(d, n.variables)) {
          var h = l.clientOnly, m = l.deferred;
          if (!(h && m) && $r(d.directives) && d.directives.forEach(function(E) {
            var y = E.name.value;
            if (y === "client" && (h = !0), y === "defer") {
              var S = Ka(E, n.variables);
              (!S || S.if !== !1) && (m = !0);
            }
          }), Mn(d)) {
            var p = i.get(d);
            p && (h = h && p.clientOnly, m = m && p.deferred), i.set(d, Vs(n, h, m));
          } else {
            var g = ol(d, n.lookupFragment);
            if (!g && d.kind === jt.FRAGMENT_SPREAD)
              throw __DEV__ ? new Qe("No fragment named ".concat(d.name.value)) : new Qe(8);
            g && a.fragmentMatches(g, o, r, n.variables) && c(g.selectionSet, Vs(n, h, m));
          }
        }
      }));
    }(t, n), i;
  }, e.prototype.applyMerges = function(t, r, n, o, i) {
    var a, s = this;
    if (t.map.size && !it(n)) {
      var c = !wt(n) && (it(r) || oo(r)) ? r : void 0, u = n;
      c && !i && (i = [it(c) ? c.__ref : c]);
      var l, f = function(d, h) {
        return wt(d) ? typeof h == "number" ? d[h] : void 0 : o.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var m = f(c, h), p = f(u, h);
        if (p !== void 0) {
          i && i.push(h);
          var g = s.applyMerges(d, m, p, o, i);
          g !== p && (l = l || /* @__PURE__ */ new Map(), l.set(h, g)), i && ue(i.pop() === h);
        }
      }), l && (n = wt(u) ? u.slice(0) : z({}, u), l.forEach(function(d, h) {
        n[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), Ep = [];
function pd(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, Ep.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Hc(e, t) {
  if (e === t || !t || Ca(t))
    return e;
  if (!e || Ca(e))
    return t;
  var r = e.info && t.info ? z(z({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, i = { info: r, map: o };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, c) {
      i.map.set(c, Hc(s, t.map.get(c))), a.delete(c);
    }), a.forEach(function(s) {
      i.map.set(s, Hc(t.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function Ca(e) {
  return !e || !(e.info || e.map.size);
}
function md(e, t) {
  var r = e.map, n = r.get(t);
  n && Ca(n) && (Ep.push(n), r.delete(t));
}
var gd = /* @__PURE__ */ new Set();
function wE(e, t, r, n) {
  var o = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(t);
    if (a && !it(i) && !At(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), c = fn(r), u = "".concat(s, ".").concat(c);
      if (!gd.has(u)) {
        gd.add(u);
        var l = [];
        !wt(i) && !wt(a) && [i, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), __DEV__ && ue.warn("Cache data may be lost when replacing the ".concat(c, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(u, ` field, so InMemoryCache can safely merge these objects:

  existing: `).concat(JSON.stringify(i).slice(0, 1e3), `
  incoming: `).concat(JSON.stringify(a).slice(0, 1e3), `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`));
      }
    }
  }
}
var CE = function(e) {
  Mr(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = gE, n.txCount = 0, n.config = sE(r), n.addTypename = !!n.config.addTypename, n.policies = new EE({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new ai.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new SE(this, this.storeReader = new hE({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: dp(this.config),
      canon: r ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = wa(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Xo(s)) {
          var c = a.optimistic, u = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, _n({ optimistic: c, id: u, variables: l }));
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
      return this.storeReader.diffQueryAgainstStore(z(z({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof up)
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
    if (kt.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(z(z({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || mE(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && sd(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    _n.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (it(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      __DEV__ && ue.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (kt.call(r, "id"))
        return !1;
      r = z(z({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(r) {
    var n = this;
    return this.init(), _n.reset(), r && r.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), sd(this)) : this.broadcastWatches(), Promise.resolve();
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
    return c && !this.txCount && this.broadcastWatches(z(z({}, r), { onWatchUpdated: function(d) {
      return f.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), c && f.size ? (this.broadcastWatches(z(z({}, r), { onWatchUpdated: function(d, h) {
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
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(r);
      return n || (n = cl(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
    }
    return r;
  }, t.prototype.transformForLink = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, t.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch(o, r);
    });
  }, t.prototype.broadcastWatch = function(r, n) {
    var o = r.lastDiff, i = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (i.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, i, o) === !1) || (!o || !At(o.result, i.result)) && r.callback(r.lastDiff = i, o);
  }, t;
}(rE), ut;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(ut || (ut = {}));
function si(e) {
  return e ? e < 7 : !1;
}
var OE = Object.assign, _E = Object.hasOwnProperty, Bc = function(e) {
  Mr(t, e);
  function t(r) {
    var n = r.queryManager, o = r.queryInfo, i = r.options, a = e.call(this, function(g) {
      try {
        var E = g._subscription._observer;
        E && !E.error && (E.error = xE);
      } catch {
      }
      var y = !a.observers.size;
      a.observers.add(g);
      var S = a.last;
      return S && S.error ? g.error && g.error(S.error) : S && S.result && g.next && g.next(S.result), y && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(g) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = zs(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, c = s === void 0 ? {} : s, u = c.fetchPolicy, l = u === void 0 ? "cache-first" : u, f = i.fetchPolicy, d = f === void 0 ? l : f, h = i.initialFetchPolicy, m = h === void 0 ? d === "standby" ? l : d : h;
    a.options = z(z({}, i), { initialFetchPolicy: m, fetchPolicy: d }), a.queryId = o.queryId || n.generateQueryId();
    var p = bi(a.query);
    return a.queryName = p && p.name && p.name.value, a;
  }
  return Object.defineProperty(t.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
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
    var n = this.getLastResult(!0), o = this.queryInfo.networkStatus || n && n.networkStatus || ut.ready, i = z(z({}, n), { loading: si(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(zs(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (i.data = c.result), At(i.data, {}) && (i.data = void 0), c.complete ? (delete i.partial, c.complete && i.networkStatus === ut.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = ut.ready, i.loading = !1)) : i.partial = !0, __DEV__ && !c.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && wp(c.missing);
      }
    return r && this.updateLastResult(i), i;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    return !this.last || !At(this.last.result, r) || n && !At(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var o = this.last;
    if (o && o[r] && (!n || At(o.variables, this.variables)))
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
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", __DEV__ && r && _E.call(r, "variables")) {
      var a = jv(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(c) {
        return c.variable.name.value === "variables";
      })) && __DEV__ && ue.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return r && !At(this.options.variables, r) && (o.variables = this.options.variables = z(z({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(o, ut.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, o = z(z({}, r.query ? r : z(z(z(z({}, this.options), { query: this.query }), r), { variables: z(z({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" }), i = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = ut.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var c = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, ut.fetchMore).then(function(u) {
      return n.queryManager.removeQuery(i), a.networkStatus === ut.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
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
      c.has(n.query) || Sp(n);
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
        __DEV__ && ue.error("Unhandled GraphQL subscription error", i);
      }
    });
    return this.subscriptions.add(o), function() {
      n.subscriptions.delete(o) && o.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.setVariables = function(r) {
    return At(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, ut.setVariables) : Promise.resolve());
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
        __DEV__ ? ue(i, "Attempted to start a polling query without a polling interval.") : ue(i, 13);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          r.pollingInfo && (si(r.queryInfo.networkStatus) ? c() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, ut.poll).then(c, c));
        }, c = function() {
          var u = r.pollingInfo;
          u && (clearTimeout(u.timeout), u.timeout = setTimeout(s, u.interval));
        };
        c();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    return n === void 0 && (n = this.variables), this.last = z(z({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : Uv(r), variables: n }), $r(r.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === ut.refetch || n === ut.fetchMore || n === ut.poll, a = this.options.variables, s = this.options.fetchPolicy, c = Za(this.options, r || {}), u = i ? c : OE(this.options, c);
    i || (this.updatePolling(), r && r.variables && !At(r.variables, a) && u.fetchPolicy !== "standby" && u.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = ut.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = zs(u.fetchPolicy));
    var l = function() {
      o.concast === h && (o.waitForOwnResult = !1);
    }, f = u.variables && z({}, u.variables), d = this.fetch(u, n), h = d.concast, m = d.fromLink, p = {
      next: function(g) {
        l(), o.reportResult(g, f);
      },
      error: function(g) {
        l(), o.reportError(g, f);
      }
    };
    return !i && m && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = p), h.addObserver(p), h;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var o = this.getLastError();
    (o || this.isDifferentFromLastResult(r, n)) && ((o || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), Yo(this.observers, "next", r));
  }, t.prototype.reportError = function(r, n) {
    var o = z(z({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: ut.error, loading: !1 });
    this.updateLastResult(o, n), Yo(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t;
}(vt);
Qv(Bc);
function Sp(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function xE(e) {
  __DEV__ && ue.error("Unhandled error", e.message, e.stack);
}
function wp(e) {
  __DEV__ && e && __DEV__ && ue.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function zs(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Cp = function() {
  function e(t) {
    var r = t.cache, n = t.client, o = t.resolvers, i = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = Ff(r.resolvers, n);
    }) : this.resolvers = Ff(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, o = t.context, i = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return rn(this, void 0, void 0, function() {
      return nn(this, function(c) {
        return r ? [2, this.resolveDocument(r, n.data, o, i, this.fragmentMatcher, s).then(function(u) {
          return z(z({}, n), { data: u.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return rl(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return Ab(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return z(z({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), rn(this, void 0, void 0, function() {
      return nn(this, function(o) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(i) {
          return z(z({}, r), i.exportedVariables);
        })] : [2, z({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return Kr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), r))
            return tl;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: Ib(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), rn(this, void 0, void 0, function() {
      var s, c, u, l, f, d, h, m, p, g, E;
      return nn(this, function(y) {
        return s = Xa(t), c = al(t), u = nl(c), l = this.collectSelectionsToResolve(s, u), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = this, m = h.cache, p = h.client, g = {
          fragmentMap: u,
          context: z(z({}, n), { cache: m, client: p }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, E = !1, [2, this.resolveSelectionSet(s.selectionSet, E, r, g).then(function(S) {
          return {
            result: S,
            exportedVariables: g.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, o) {
    return rn(this, void 0, void 0, function() {
      var i, a, s, c, u, l = this;
      return nn(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, c = [n], u = function(d) {
          return rn(l, void 0, void 0, function() {
            var h, m;
            return nn(this, function(p) {
              return !r && !o.selectionsToResolve.has(d) ? [2] : Ga(d, s) ? Mn(d) ? [2, this.resolveField(d, r, n, o).then(function(g) {
                var E;
                typeof g < "u" && c.push((E = {}, E[Nn(d)] = g, E));
              })] : (xb(d) ? h = d : (h = i[d.name.value], __DEV__ ? ue(h, "No fragment named ".concat(d.name.value)) : ue(h, 11)), h && h.typeCondition && (m = h.typeCondition.name.value, o.fragmentMatcher(n, m, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, o).then(function(g) {
                c.push(g);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(u)).then(function() {
          return ul(c);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, o) {
    return rn(this, void 0, void 0, function() {
      var i, a, s, c, u, l, f, d, h, m = this;
      return nn(this, function(p) {
        return n ? (i = o.variables, a = t.name.value, s = Nn(t), c = a !== s, u = n[s] || n[a], l = Promise.resolve(u), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[c ? a : s], h && (l = Promise.resolve(bl.withValue(this.cache, h, [
          n,
          Ka(t, i),
          o.context,
          { field: t, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(g) {
          var E, y;
          if (g === void 0 && (g = u), t.directives && t.directives.forEach(function(w) {
            w.name.value === "export" && w.arguments && w.arguments.forEach(function(b) {
              b.name.value === "as" && b.value.kind === "StringValue" && (o.exportedVariables[b.value.value] = g);
            });
          }), !t.selectionSet || g == null)
            return g;
          var S = (y = (E = t.directives) === null || E === void 0 ? void 0 : E.some(function(w) {
            return w.name.value === "client";
          })) !== null && y !== void 0 ? y : !1;
          if (Array.isArray(g))
            return m.resolveSubSelectedArray(t, r || S, g, o);
          if (t.selectionSet)
            return m.resolveSelectionSet(t.selectionSet, r || S, g, o);
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
        o.set(a, s), Kr(a, {
          Directive: function(c, u, l, f, d) {
            c.name.value === "client" && d.forEach(function(h) {
              n(h) && If(h) && s.add(h);
            });
          },
          FragmentSpread: function(c, u, l, f, d) {
            var h = r[c.name.value];
            __DEV__ ? ue(h, "No fragment named ".concat(c.name.value)) : ue(h, 12);
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
}(), io = new (Fn ? WeakMap : Map)();
function Hs(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return io.set(e, (io.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function yd(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Bs = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    io.has(n) || (io.set(n, 0), Hs(n, "evict"), Hs(n, "modify"), Hs(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || ut.loading;
    return this.variables && this.networkStatus !== ut.loading && !At(this.variables, t.variables) && (r = ut.setVariables), At(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    yd(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var r = this.getDiffOptions(t);
    if (this.lastDiff && At(r, this.lastDiff.options))
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
    this.updateLastDiff(t), !this.dirty && !At(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : Sp(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    yd(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (si(this.networkStatus) && this.observableQuery) {
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
      var o = z(z({}, this.getDiffOptions(t)), { watcher: this, callback: function(i) {
        return r.setDiff(i);
      } });
      (!this.lastWatch || !At(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === io.get(this.cache) && At(r, n.variables) && At(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, o) {
    var i = this, a = new un(), s = $r(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && $r(t.incremental)) {
      var c = Gv(this.getDiff().result, t);
      t.data = c;
    } else if ("hasNext" in t && t.hasNext) {
      var u = this.getDiff();
      t.data = a.merge(u.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (Wc(t, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(t, n.variables))
        l.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: io.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        t.data = i.lastDiff.diff.result;
        return;
      }
      var f = i.getDiffOptions(n.variables), d = l.diff(f);
      i.stopped || i.updateWatch(n.variables), i.updateLastDiff(d, f), d.complete && (t.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = ut.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = ut.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function Wc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !oa(e);
  return !n && r && e.data && (n = !0), n;
}
var RE = Object.prototype.hasOwnProperty, TE = function() {
  function e(t) {
    var r = t.cache, n = t.link, o = t.defaultOptions, i = t.queryDeduplication, a = i === void 0 ? !1 : i, s = t.onBroadcast, c = t.ssrMode, u = c === void 0 ? !1 : c, l = t.clientAwareness, f = l === void 0 ? {} : l, d = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Fn ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = o || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = f, this.localState = d || new Cp({ cache: r }), this.ssrMode = u, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(__DEV__ ? new Qe("QueryManager stopped while query was in flight") : new Qe(14));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, o = t.mutation, i = t.variables, a = t.optimisticResponse, s = t.updateQueries, c = t.refetchQueries, u = c === void 0 ? [] : c, l = t.awaitRefetchQueries, f = l === void 0 ? !1 : l, d = t.update, h = t.onQueryUpdated, m = t.fetchPolicy, p = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : m, g = t.errorPolicy, E = g === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : g, y = t.keepRootFields, S = t.context;
    return rn(this, void 0, void 0, function() {
      var w, b, C, O, P, N;
      return nn(this, function(x) {
        switch (x.label) {
          case 0:
            return __DEV__ ? ue(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : ue(o, 15), __DEV__ ? ue(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : ue(p === "network-only" || p === "no-cache", 16), w = this.generateMutationId(), b = this.transform(o), C = b.document, O = b.hasClientExports, o = this.cache.transformForLink(C), i = this.getVariables(o, i), O ? [4, this.localState.addExportedVariables(o, i, S)] : [3, 2];
          case 1:
            i = x.sent(), x.label = 2;
          case 2:
            return P = this.mutationStore && (this.mutationStore[w] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: w,
              document: o,
              variables: i,
              fetchPolicy: p,
              errorPolicy: E,
              context: S,
              updateQueries: s,
              update: d,
              keepRootFields: y
            }), this.broadcastQueries(), N = this, [2, new Promise(function(L, R) {
              return As(N.getObservableFromLink(o, z(z({}, S), { optimisticResponse: a }), i, !1), function(_) {
                if (oa(_) && E === "none")
                  throw new Qn({
                    graphQLErrors: Nc(_)
                  });
                P && (P.loading = !1, P.error = null);
                var T = z({}, _);
                return typeof u == "function" && (u = u(T)), E === "ignore" && oa(T) && delete T.errors, N.markMutationResult({
                  mutationId: w,
                  result: T,
                  document: o,
                  variables: i,
                  fetchPolicy: p,
                  errorPolicy: E,
                  context: S,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: u,
                  removeOptimistic: a ? w : void 0,
                  onQueryUpdated: h,
                  keepRootFields: y
                });
              }).subscribe({
                next: function(_) {
                  N.broadcastQueries(), (!("hasNext" in _) || _.hasNext === !1) && L(_);
                },
                error: function(_) {
                  P && (P.loading = !1, P.error = _), a && N.cache.removeOptimistic(w), N.broadcastQueries(), R(_ instanceof Qn ? _ : new Qn({
                    networkError: _
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
    if (!a && Wc(o, t.errorPolicy)) {
      if (fo(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), fo(o) && $r(o.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), c = void 0;
        s.result && (c = Gv(s.result, o)), typeof c < "u" && (o.data = c, i.push({
          result: c,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var u = t.updateQueries;
      u && this.queries.forEach(function(f, d) {
        var h = f.observableQuery, m = h && h.queryName;
        if (!(!m || !RE.call(u, m))) {
          var p = u[m], g = n.queries.get(d), E = g.document, y = g.variables, S = r.diff({
            query: E,
            variables: y,
            returnPartialData: !0,
            optimistic: !1
          }), w = S.result, b = S.complete;
          if (b && w) {
            var C = p(w, {
              mutationResult: o,
              queryName: E && _c(E) || void 0,
              queryVariables: y
            });
            C && i.push({
              result: C,
              dataId: "ROOT_QUERY",
              query: E,
              variables: y
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
          var d = t.update, h = !Kb(o) || fo(o) && !o.hasNext;
          if (d) {
            if (!a) {
              var m = f.diff({
                id: "ROOT_MUTATION",
                query: n.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              m.complete && (o = z(z({}, o), { data: m.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            h && d(f, o, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && f.modify({
            id: "ROOT_MUTATION",
            fields: function(p, g) {
              var E = g.fieldName, y = g.DELETE;
              return E === "__typename" ? p : y;
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
        n.markMutationResult(z(z({}, r), { result: { data: o } }), i);
      } catch (a) {
        __DEV__ && ue.error(a);
      }
    }, r.mutationId);
  }, e.prototype.fetchQuery = function(t, r, n) {
    return this.fetchQueryObservable(t, r, n).promise;
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
    var r = this.transformCache;
    if (!r.has(t)) {
      var n = this.cache.transformDocument(t), o = Mb(n), i = this.localState.clientQuery(n), a = o && this.localState.serverQuery(o), s = {
        document: n,
        hasClientExports: ub(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: i,
        serverQuery: a,
        defaultVars: sl(bi(n)),
        asQuery: z(z({}, n), { definitions: n.definitions.map(function(u) {
          return u.kind === "OperationDefinition" && u.operation !== "query" ? z(z({}, u), { operation: "query" }) : u;
        }) })
      }, c = function(u) {
        u && !r.has(u) && r.set(u, s);
      };
      c(t), c(n), c(i), c(a);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return z(z({}, this.transform(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    t = z(z({}, t), { variables: this.getVariables(t.query, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var r = new Bs(this), n = new Bc({
      queryManager: this,
      queryInfo: r,
      options: t
    });
    return this.queries.set(n.queryId, r), r.init({
      document: n.query,
      observableQuery: n,
      variables: n.variables
    }), n;
  }, e.prototype.query = function(t, r) {
    var n = this;
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? ue(t.query, "query option is required. You must specify your GraphQL document in the query option.") : ue(t.query, 17), __DEV__ ? ue(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : ue(t.query.kind === "Document", 18), __DEV__ ? ue(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : ue(!t.returnPartialData, 19), __DEV__ ? ue(!t.pollInterval, "pollInterval option only supported on watchQuery.") : ue(!t.pollInterval, 20), this.fetchQuery(r, t).finally(function() {
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
    }), this.cancelPendingFetches(__DEV__ ? new Qe("Store reset while query was in flight (not completed in link chain)") : new Qe(21)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = ut.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : hb(a) ? o.set(r.transform(a).document, !1) : yt(a) && a.query && i.add(a);
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
      var s = Mc("legacyOneTimeQuery"), c = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), u = new Bc({
        queryManager: r,
        queryInfo: c,
        options: z(z({}, a), { fetchPolicy: "network-only" })
      });
      ue(u.queryId === s), c.setObservableQuery(u), n.set(s, u);
    }), __DEV__ && o.size && o.forEach(function(a, s) {
      a || __DEV__ && ue.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
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
    n = this.transform(n).document, a = this.getVariables(n, a);
    var u = function(f) {
      return r.getObservableFromLink(n, c, f).map(function(d) {
        o !== "no-cache" && (Wc(d, i) && r.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var h = oa(d), m = h1(d);
        if (h || m) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), m && (p.protocolErrors = d.extensions[pl]), new Qn(p);
        }
        return d;
      });
    };
    if (this.transform(n).hasClientExports) {
      var l = this.localState.addExportedVariables(n, a, c).then(u);
      return new vt(function(f) {
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
    var s, c = this.transform(t).serverQuery;
    if (c) {
      var u = this, l = u.inFlightLinkObservables, f = u.link, d = {
        query: c,
        variables: n,
        operationName: _c(c) || void 0,
        context: this.prepareContext(z(z({}, r), { forceFetch: !o }))
      };
      if (r = d.context, o) {
        var h = l.get(c) || /* @__PURE__ */ new Map();
        l.set(c, h);
        var m = _n(n);
        if (s = h.get(m), !s) {
          var p = new to([
            Ac(f, d)
          ]);
          h.set(m, s = p), p.beforeNext(function() {
            h.delete(m) && h.size < 1 && l.delete(c);
          });
        }
      } else
        s = new to([
          Ac(f, d)
        ]);
    } else
      s = new to([
        vt.of({ data: {} })
      ]), r = this.prepareContext(r);
    var g = this.transform(t).clientQuery;
    return g && (s = As(s, function(E) {
      return i.localState.runResolvers({
        document: g,
        remoteResult: E,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var o = t.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(t.document).document);
    return As(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = Nc(a), c = s.length > 0;
      if (o >= t.lastRequestId) {
        if (c && n.errorPolicy === "none")
          throw t.markError(new Qn({
            graphQLErrors: s
          }));
        t.markResult(a, i, n, r), t.markReady();
      }
      var u = {
        data: a.data,
        loading: !1,
        networkStatus: ut.ready
      };
      return c && n.errorPolicy !== "ignore" && (u.errors = s, u.networkStatus = ut.error), u;
    }, function(a) {
      var s = v1(a) ? a : new Qn({ networkError: a });
      throw o >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var o = this;
    n === void 0 && (n = ut.loading);
    var i = this.transform(r.query).document, a = this.getVariables(i, r.variables), s = this.getQuery(t), c = this.defaultOptions.watchQuery, u = r.fetchPolicy, l = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, f = r.errorPolicy, d = f === void 0 ? c && c.errorPolicy || "none" : f, h = r.returnPartialData, m = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, g = p === void 0 ? !1 : p, E = r.context, y = E === void 0 ? {} : E, S = Object.assign({}, r, {
      query: i,
      variables: a,
      fetchPolicy: l,
      errorPolicy: d,
      returnPartialData: m,
      notifyOnNetworkStatusChange: g,
      context: y
    }), w = function(N) {
      S.variables = N;
      var x = o.fetchQueryByPolicy(s, S, n);
      return S.fetchPolicy !== "standby" && x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), x;
    }, b = function() {
      return o.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(N) {
      b(), setTimeout(function() {
        return C.cancel(N);
      });
    });
    var C, O;
    if (this.transform(S.query).hasClientExports)
      C = new to(this.localState.addExportedVariables(S.query, S.variables, S.context).then(w).then(function(N) {
        return N.sources;
      })), O = !0;
    else {
      var P = w(S.variables);
      O = P.fromLink, C = new to(P.sources);
    }
    return C.promise.then(b, b), {
      concast: C,
      fromLink: O
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, o = t.include, i = t.optimistic, a = i === void 0 ? !1 : i, s = t.removeOptimistic, c = s === void 0 ? a ? Mc("refetchQueries") : void 0 : s, u = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
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
        var p = d.watcher instanceof Bs && d.watcher.observableQuery;
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
      var m = d.oq, p = d.lastDiff, g = d.diff, E;
      if (u) {
        if (!g) {
          var y = m.queryInfo;
          y.reset(), g = y.getDiff();
        }
        E = u(m, g, p);
      }
      (!u || E === !0) && (E = m.refetch()), E !== !1 && f.set(m, E), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), c && this.cache.removeOptimistic(c), f;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var o = this, i = r.query, a = r.variables, s = r.fetchPolicy, c = r.refetchWritePolicy, u = r.errorPolicy, l = r.returnPartialData, f = r.context, d = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: this.transform(i).document,
      variables: a,
      networkStatus: n
    });
    var m = function() {
      return t.getDiff(a);
    }, p = function(w, b) {
      b === void 0 && (b = t.networkStatus || ut.loading);
      var C = w.result;
      __DEV__ && !l && !At(C, {}) && wp(w.missing);
      var O = function(P) {
        return vt.of(z({ data: P, loading: si(b), networkStatus: b }, w.complete ? null : { partial: !0 }));
      };
      return C && o.transform(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: C },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(P) {
        return O(P.data || void 0);
      }) : u === "none" && b === ut.refetch && Array.isArray(w.missing) ? O(void 0) : O(C);
    }, g = s === "no-cache" ? 0 : n === ut.refetch && c !== "merge" ? 1 : 2, E = function() {
      return o.getResultsFromLink(t, g, {
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: u
      });
    }, y = d && typeof h == "number" && h !== n && si(n);
    switch (s) {
      default:
      case "cache-first": {
        var S = m();
        return S.complete ? { fromLink: !1, sources: [p(S, t.markReady())] } : l || y ? { fromLink: !0, sources: [p(S), E()] } : { fromLink: !0, sources: [E()] };
      }
      case "cache-and-network": {
        var S = m();
        return S.complete || l || y ? { fromLink: !0, sources: [p(S), E()] } : { fromLink: !0, sources: [E()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(m(), t.markReady())] };
      case "network-only":
        return y ? { fromLink: !0, sources: [p(m()), E()] } : { fromLink: !0, sources: [E()] };
      case "no-cache":
        return y ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            E()
          ]
        } : { fromLink: !0, sources: [E()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new Bs(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return z(z({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), bd = !1, PE = function() {
  function e(t) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = t.uri, o = t.credentials, i = t.headers, a = t.cache, s = t.ssrMode, c = s === void 0 ? !1 : s, u = t.ssrForceFetchDelay, l = u === void 0 ? 0 : u, f = t.connectToDevTools, d = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : f, h = t.queryDeduplication, m = h === void 0 ? !0 : h, p = t.defaultOptions, g = t.assumeImmutableResults, E = g === void 0 ? !1 : g, y = t.resolvers, S = t.typeDefs, w = t.fragmentMatcher, b = t.name, C = t.version, O = t.link;
    if (O || (O = n ? new M1({ uri: n, credentials: o, headers: i }) : xo.empty()), !a)
      throw __DEV__ ? new Qe(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new Qe(9);
    if (this.link = O, this.cache = a, this.disableNetworkFetches = c || l > 0, this.queryDeduplication = m, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = S, l && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !bd && d && __DEV__ && (bd = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var P = window.navigator, N = P && P.userAgent, x = void 0;
      typeof N == "string" && (N.indexOf("Chrome/") > -1 ? x = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : N.indexOf("Firefox/") > -1 && (x = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), x && __DEV__ && ue.log("Download the Apollo DevTools for a better development experience: " + x);
    }
    this.version = r1, this.localState = new Cp({
      cache: a,
      client: this,
      resolvers: y,
      fragmentMatcher: w
    }), this.queryManager = new TE({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: m,
      ssrMode: c,
      clientAwareness: {
        name: b,
        version: C
      },
      localState: this.localState,
      assumeImmutableResults: E,
      onBroadcast: d ? function() {
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
  return e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(t) {
    return this.defaultOptions.watchQuery && (t = Ds(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = z(z({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Ds(this.defaultOptions.query, t)), __DEV__ ? ue(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : ue(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = z(z({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Ds(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
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
    return Ac(this.link, t);
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
      __DEV__ && ue.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
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
function NE(e) {
  return new xo(function(t, r) {
    var n = Pn(t, []);
    return new vt(function(o) {
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
const ME = `${Dv}/${ky._GRAPHQL}`, IE = new Ly(), AE = Yv({
  uri: ME
}), DE = NE((e, { headers: t }) => {
  const r = IE.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), Ed = new PE({
  cache: new CE(),
  link: DE.concat(AE)
});
function Op(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: FE } = Object.prototype, { getPrototypeOf: Cl } = Object, ts = ((e) => (t) => {
  const r = FE.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kr = (e) => (e = e.toLowerCase(), (t) => ts(t) === e), rs = (e) => (t) => typeof t === e, { isArray: To } = Array, ci = rs("undefined");
function $E(e) {
  return e !== null && !ci(e) && e.constructor !== null && !ci(e.constructor) && yr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _p = kr("ArrayBuffer");
function kE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _p(e.buffer), t;
}
const LE = rs("string"), yr = rs("function"), xp = rs("number"), ns = (e) => e !== null && typeof e == "object", jE = (e) => e === !0 || e === !1, aa = (e) => {
  if (ts(e) !== "object")
    return !1;
  const t = Cl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, VE = kr("Date"), zE = kr("File"), HE = kr("Blob"), BE = kr("FileList"), WE = (e) => ns(e) && yr(e.pipe), UE = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || yr(e.append) && ((t = ts(e)) === "formdata" || // detect form-data instance
  t === "object" && yr(e.toString) && e.toString() === "[object FormData]"));
}, qE = kr("URLSearchParams"), QE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ei(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), To(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function Rp(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Tp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pp = (e) => !ci(e) && e !== Tp;
function Uc() {
  const { caseless: e } = Pp(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && Rp(t, o) || o;
    aa(t[i]) && aa(n) ? t[i] = Uc(t[i], n) : aa(n) ? t[i] = Uc({}, n) : To(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Ei(arguments[n], r);
  return t;
}
const GE = (e, t, r, { allOwnKeys: n } = {}) => (Ei(t, (o, i) => {
  r && yr(o) ? e[i] = Op(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), KE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), YE = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, XE = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && Cl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, JE = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ZE = (e) => {
  if (!e)
    return null;
  if (To(e))
    return e;
  let t = e.length;
  if (!xp(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, eS = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Cl(Uint8Array)), tS = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, rS = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, nS = kr("HTMLFormElement"), oS = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), Sd = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), iS = kr("RegExp"), Np = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ei(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, aS = (e) => {
  Np(e, (t, r) => {
    if (yr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (yr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, sS = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return To(e) ? n(e) : n(String(e).split(t)), r;
}, cS = () => {
}, uS = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ws = "abcdefghijklmnopqrstuvwxyz", wd = "0123456789", Mp = {
  DIGIT: wd,
  ALPHA: Ws,
  ALPHA_DIGIT: Ws + Ws.toUpperCase() + wd
}, lS = (e = 16, t = Mp.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function fS(e) {
  return !!(e && yr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const dS = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ns(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = To(n) ? [] : {};
        return Ei(n, (a, s) => {
          const c = r(a, o + 1);
          !ci(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, hS = kr("AsyncFunction"), vS = (e) => e && (ns(e) || yr(e)) && yr(e.then) && yr(e.catch), U = {
  isArray: To,
  isArrayBuffer: _p,
  isBuffer: $E,
  isFormData: UE,
  isArrayBufferView: kE,
  isString: LE,
  isNumber: xp,
  isBoolean: jE,
  isObject: ns,
  isPlainObject: aa,
  isUndefined: ci,
  isDate: VE,
  isFile: zE,
  isBlob: HE,
  isRegExp: iS,
  isFunction: yr,
  isStream: WE,
  isURLSearchParams: qE,
  isTypedArray: eS,
  isFileList: BE,
  forEach: Ei,
  merge: Uc,
  extend: GE,
  trim: QE,
  stripBOM: KE,
  inherits: YE,
  toFlatObject: XE,
  kindOf: ts,
  kindOfTest: kr,
  endsWith: JE,
  toArray: ZE,
  forEachEntry: tS,
  matchAll: rS,
  isHTMLForm: nS,
  hasOwnProperty: Sd,
  hasOwnProp: Sd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Np,
  freezeMethods: aS,
  toObjectSet: sS,
  toCamelCase: oS,
  noop: cS,
  toFiniteNumber: uS,
  findKey: Rp,
  global: Tp,
  isContextDefined: Pp,
  ALPHABET: Mp,
  generateString: lS,
  isSpecCompliantForm: fS,
  toJSONObject: dS,
  isAsyncFn: hS,
  isThenable: vS
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
const Ip = He.prototype, Ap = {};
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
  Ap[e] = { value: e };
});
Object.defineProperties(He, Ap);
Object.defineProperty(Ip, "isAxiosError", { value: !0 });
He.from = (e, t, r, n, o, i) => {
  const a = Object.create(Ip);
  return U.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), He.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const pS = null;
function qc(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function Dp(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cd(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Dp(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function mS(e) {
  return U.isArray(e) && !e.some(qc);
}
const gS = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function os(e, t, r) {
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
    let E = m;
    if (m && !g && typeof m == "object") {
      if (U.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (U.isArray(m) && mS(m) || (U.isFileList(m) || U.endsWith(p, "[]")) && (E = U.toArray(m)))
        return p = Dp(p), E.forEach(function(S, w) {
          !(U.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Cd([p], w, i) : a === null ? p : p + "[]",
            u(S)
          );
        }), !1;
    }
    return qc(m) ? !0 : (t.append(Cd(g, p, i), u(m)), !1);
  }
  const f = [], d = Object.assign(gS, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: qc
  });
  function h(m, p) {
    if (!U.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), U.forEach(m, function(E, y) {
        (!(U.isUndefined(E) || E === null) && o.call(
          t,
          E,
          U.isString(y) ? y.trim() : y,
          p,
          d
        )) === !0 && h(E, p ? p.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Od(e) {
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
function Ol(e, t) {
  this._pairs = [], e && os(e, this, t);
}
const Fp = Ol.prototype;
Fp.append = function(t, r) {
  this._pairs.push([t, r]);
};
Fp.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Od);
  } : Od;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function yS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $p(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || yS, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = U.isURLSearchParams(t) ? t.toString() : new Ol(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class bS {
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
const _d = bS, kp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ES = typeof URLSearchParams < "u" ? URLSearchParams : Ol, SS = typeof FormData < "u" ? FormData : null, wS = typeof Blob < "u" ? Blob : null, CS = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), OS = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Fr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ES,
    FormData: SS,
    Blob: wS
  },
  isStandardBrowserEnv: CS,
  isStandardBrowserWebWorkerEnv: OS,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function _S(e, t) {
  return os(e, new Fr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Fr.isNode && U.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xS(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function RS(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Lp(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), c = i >= r.length;
    return a = !a && U.isArray(o) ? o.length : a, c ? (U.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !U.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && U.isArray(o[a]) && (o[a] = RS(o[a])), !s);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const r = {};
    return U.forEachEntry(e, (n, o) => {
      t(xS(n), o, r, 0);
    }), r;
  }
  return null;
}
const TS = {
  "Content-Type": void 0
};
function PS(e, t, r) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const is = {
  transitional: kp,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = U.isObject(t);
    if (i && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return o && o ? JSON.stringify(Lp(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return _S(t, this.formSerializer).toString();
      if ((s = U.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return os(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), PS(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || is.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: Fr.classes.FormData,
    Blob: Fr.classes.Blob
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
  is.headers[t] = {};
});
U.forEach(["post", "put", "patch"], function(t) {
  is.headers[t] = U.merge(TS);
});
const _l = is, NS = U.toObjectSet([
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
]), MS = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && NS[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, xd = Symbol("internals");
function Wo(e) {
  return e && String(e).trim().toLowerCase();
}
function sa(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(sa) : String(e);
}
function IS(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const AS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Us(e, t, r, n, o) {
  if (U.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!U.isString(t)) {
    if (U.isString(n))
      return t.indexOf(n) !== -1;
    if (U.isRegExp(n))
      return n.test(t);
  }
}
function DS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function FS(e, t) {
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
class as {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, c, u) {
      const l = Wo(c);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = U.findKey(o, l);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = sa(s));
    }
    const a = (s, c) => U.forEach(s, (u, l) => i(u, l, c));
    return U.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : U.isString(t) && (t = t.trim()) && !AS(t) ? a(MS(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Wo(t), t) {
      const n = U.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return IS(o);
        if (U.isFunction(r))
          return r.call(this, o, n);
        if (U.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Wo(t), t) {
      const n = U.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Us(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Wo(a), a) {
        const s = U.findKey(n, a);
        s && (!r || Us(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return U.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Us(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return U.forEach(this, (o, i) => {
      const a = U.findKey(n, i);
      if (a) {
        r[a] = sa(o), delete r[i];
        return;
      }
      const s = t ? DS(i) : String(i).trim();
      s !== i && delete r[i], r[s] = sa(o), n[s] = !0;
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
    const n = (this[xd] = this[xd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Wo(a);
      n[s] || (FS(o, a), n[s] = !0);
    }
    return U.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
as.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(as.prototype);
U.freezeMethods(as);
const Gr = as;
function qs(e, t) {
  const r = this || _l, n = t || r, o = Gr.from(n.headers);
  let i = n.data;
  return U.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function jp(e) {
  return !!(e && e.__CANCEL__);
}
function Si(e, t, r) {
  He.call(this, e ?? "canceled", He.ERR_CANCELED, t, r), this.name = "CanceledError";
}
U.inherits(Si, He, {
  __CANCEL__: !0
});
function $S(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new He(
    "Request failed with status code " + r.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const kS = Fr.isStandardBrowserEnv ? (
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
function LS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jS(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vp(e, t) {
  return e && !LS(t) ? jS(e, t) : t;
}
const VS = Fr.isStandardBrowserEnv ? (
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
function zS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function HS(e, t) {
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
  const n = HS(50, 250);
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
const BS = typeof XMLHttpRequest < "u", WS = BS && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = Gr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    U.isFormData(o) && (Fr.isStandardBrowserEnv || Fr.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const l = Vp(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), $p(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
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
      $S(function(E) {
        r(E), c();
      }, function(E) {
        n(E), c();
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
      const p = e.transitional || kp;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new He(
        m,
        p.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Fr.isStandardBrowserEnv) {
      const h = (e.withCredentials || VS(l)) && e.xsrfCookieName && kS.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && U.forEach(i.toJSON(), function(m, p) {
      u.setRequestHeader(p, m);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Rd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Rd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      u && (n(!h || h.type ? new Si(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = zS(l);
    if (d && Fr.protocols.indexOf(d) === -1) {
      n(new He("Unsupported protocol " + d + ":", He.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, ca = {
  http: pS,
  xhr: WS
};
U.forEach(ca, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const US = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = U.isString(r) ? ca[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new He(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        U.hasOwnProp(ca, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!U.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ca
};
function Qs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Si(null, e);
}
function Td(e) {
  return Qs(e), e.headers = Gr.from(e.headers), e.data = qs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), US.getAdapter(e.adapter || _l.adapter)(e).then(function(n) {
    return Qs(e), n.data = qs.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Gr.from(n.headers), n;
  }, function(n) {
    return jp(n) || (Qs(e), n && n.response && (n.response.data = qs.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Gr.from(n.response.headers))), Promise.reject(n);
  });
}
const Pd = (e) => e instanceof Gr ? e.toJSON() : e;
function bo(e, t) {
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
    headers: (u, l) => o(Pd(u), Pd(l), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = c[l] || o, d = f(e[l], t[l], l);
    U.isUndefined(d) && f !== s || (r[l] = d);
  }), r;
}
const zp = "1.4.0", xl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  xl[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Nd = {};
xl.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + zp + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
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
function qS(e, t, r) {
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
const Qc = {
  assertOptions: qS,
  validators: xl
}, Zr = Qc.validators;
class Oa {
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = bo(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Qc.assertOptions(n, {
      silentJSONParsing: Zr.transitional(Zr.boolean),
      forcedJSONParsing: Zr.transitional(Zr.boolean),
      clarifyTimeoutError: Zr.transitional(Zr.boolean)
    }, !1), o != null && (U.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Qc.assertOptions(o, {
      encode: Zr.function,
      serialize: Zr.function
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
      const m = [Td.bind(this), void 0];
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
      l = Td.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = u.length; f < d; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(t) {
    t = bo(this.defaults, t);
    const r = Vp(t.baseURL, t.url);
    return $p(r, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Oa.prototype[t] = function(r, n) {
    return this.request(bo(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(bo(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Oa.prototype[t] = r(), Oa.prototype[t + "Form"] = r(!0);
});
const ua = Oa;
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
      n.reason || (n.reason = new Si(i, a, s), r(n.reason));
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
const QS = Rl;
function GS(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function KS(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const Gc = {
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
Object.entries(Gc).forEach(([e, t]) => {
  Gc[t] = e;
});
const YS = Gc;
function Hp(e) {
  const t = new ua(e), r = Op(ua.prototype.request, t);
  return U.extend(r, ua.prototype, t, { allOwnKeys: !0 }), U.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Hp(bo(e, o));
  }, r;
}
const Dt = Hp(_l);
Dt.Axios = ua;
Dt.CanceledError = Si;
Dt.CancelToken = QS;
Dt.isCancel = jp;
Dt.VERSION = zp;
Dt.toFormData = os;
Dt.AxiosError = He;
Dt.Cancel = Dt.CanceledError;
Dt.all = function(t) {
  return Promise.all(t);
};
Dt.spread = GS;
Dt.isAxiosError = KS;
Dt.mergeConfig = bo;
Dt.AxiosHeaders = Gr;
Dt.formToJSON = (e) => Lp(U.isHTMLForm(e) ? new FormData(e) : e);
Dt.HttpStatusCode = YS;
Dt.default = Dt;
const XS = Dt, VI = XS.create({
  baseURL: Dv,
  withCredentials: !0
}), JS = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, zI = [JS.PROFILE], HI = () => {
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
}, BI = (e, t) => {
  Wt(() => {
    e();
  }, t);
}, ZS = (e = !1) => {
  const [t, r] = fr(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, WI = (e, t) => {
  const r = De();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, UI = (e, t) => {
  Wt(() => {
    for (const r of t)
      if (!r)
        return;
    return e();
  }, t);
}, qI = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Bp = ({ when: e, children: t }) => e ? t : null, Wp = yi({}), ew = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Up = ({ children: e }) => {
  const t = De(), r = De(), n = ZS(), o = async () => {
    const [a, s] = await ew();
    t.current = a, r.current = s, n.on();
  };
  Wt(() => {
    o();
  }, []);
  const i = po(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ _t(Wp.Provider, { value: i, children: /* @__PURE__ */ _t(Bp, { when: n.val, children: e }) });
}, qp = () => Kt(Wp);
var Lt;
Lt = { __e: function(e, t, r, n) {
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
var _a, St, Gs, Md, Kc = 0, Qp = [], la = [], Id = Lt.__b, Ad = Lt.__r, Dd = Lt.diffed, Fd = Lt.__c, $d = Lt.unmount;
function Gp(e, t) {
  Lt.__h && Lt.__h(St, e, Kc || t), Kc = 0;
  var r = St.__H || (St.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: la }), r.__[e];
}
function tw(e) {
  return Kc = 1, rw(Kp, e);
}
function rw(e, t, r) {
  var n = Gp(_a++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Kp(void 0, t), function(s) {
    var c = n.__N ? n.__N[0] : n.__[0], u = n.t(c, s);
    c !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
  }], n.__c = St, !St.u)) {
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
    St.u = !0;
    var i = St.shouldComponentUpdate, a = St.componentWillUpdate;
    St.componentWillUpdate = function(s, c, u) {
      if (this.__e) {
        var l = i;
        i = void 0, o(s, c, u), i = l;
      }
      a && a.call(this, s, c, u);
    }, St.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function nw(e) {
  var t = Gp(_a++, 10), r = tw();
  return t.__ = e, St.componentDidCatch || (St.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function ow() {
  for (var e; e = Qp.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(fa), e.__H.__h.forEach(Yc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], Lt.__e(t, e.__v);
      }
}
Lt.__b = function(e) {
  St = null, Id && Id(e);
}, Lt.__r = function(e) {
  Ad && Ad(e), _a = 0;
  var t = (St = e.__c).__H;
  t && (Gs === St ? (t.__h = [], St.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = la, r.__N = r.i = void 0;
  })) : (t.__h.forEach(fa), t.__h.forEach(Yc), t.__h = [], _a = 0)), Gs = St;
}, Lt.diffed = function(e) {
  Dd && Dd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Qp.push(t) !== 1 && Md === Lt.requestAnimationFrame || ((Md = Lt.requestAnimationFrame) || iw)(ow)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== la && (r.__ = r.__V), r.i = void 0, r.__V = la;
  })), Gs = St = null;
}, Lt.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(fa), r.__h = r.__h.filter(function(n) {
        return !n.__ || Yc(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], Lt.__e(n, r.__v);
    }
  }), Fd && Fd(e, t);
}, Lt.unmount = function(e) {
  $d && $d(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      fa(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && Lt.__e(t, r.__v));
};
var kd = typeof requestAnimationFrame == "function";
function iw(e) {
  var t, r = function() {
    clearTimeout(n), kd && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  kd && (t = requestAnimationFrame(r));
}
function fa(e) {
  var t = St, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), St = t;
}
function Yc(e) {
  var t = St;
  e.__c = e.__(), St = t;
}
function Kp(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const aw = () => /* @__PURE__ */ Av("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ _t("br", {})
] }), QI = ({ children: e }) => {
  const [t] = nw();
  return console.error(t), t ? /* @__PURE__ */ _t(aw, { errorInfo: t }) : /* @__PURE__ */ _t(Zu, { children: e });
};
function Er(e, t) {
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
function sw(e, t) {
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
function Yp(e) {
  var t = sw(e, "string");
  return Be(t) === "symbol" ? t : String(t);
}
function Ld(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Yp(n.key), n);
  }
}
function Sr(e, t, r) {
  return t && Ld(e.prototype, t), r && Ld(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xc(e, t) {
  return Xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Xc(e, t);
}
function wi(e, t) {
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
  }), t && Xc(e, t);
}
function xa(e) {
  return xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xa(e);
}
function cw() {
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
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uw(e, t) {
  if (t && (Be(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ra(e);
}
function Ci(e) {
  var t = cw();
  return function() {
    var n = xa(e), o;
    if (t) {
      var i = xa(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return uw(this, o);
  };
}
var Xp = { exports: {} };
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
})(Xp);
var lw = Xp.exports;
const Me = /* @__PURE__ */ vl(lw);
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, et.apply(this, arguments);
}
var Jc = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function fw() {
  if (jd)
    return Ge;
  jd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
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
    return S(b) === u;
  }
  return Ge.AsyncMode = c, Ge.ConcurrentMode = u, Ge.ContextConsumer = s, Ge.ContextProvider = a, Ge.Element = t, Ge.ForwardRef = l, Ge.Fragment = n, Ge.Lazy = m, Ge.Memo = h, Ge.Portal = r, Ge.Profiler = i, Ge.StrictMode = o, Ge.Suspense = f, Ge.isAsyncMode = function(b) {
    return w(b) || S(b) === c;
  }, Ge.isConcurrentMode = w, Ge.isContextConsumer = function(b) {
    return S(b) === s;
  }, Ge.isContextProvider = function(b) {
    return S(b) === a;
  }, Ge.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ge.isForwardRef = function(b) {
    return S(b) === l;
  }, Ge.isFragment = function(b) {
    return S(b) === n;
  }, Ge.isLazy = function(b) {
    return S(b) === m;
  }, Ge.isMemo = function(b) {
    return S(b) === h;
  }, Ge.isPortal = function(b) {
    return S(b) === r;
  }, Ge.isProfiler = function(b) {
    return S(b) === i;
  }, Ge.isStrictMode = function(b) {
    return S(b) === o;
  }, Ge.isSuspense = function(b) {
    return S(b) === f;
  }, Ge.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === a || b.$$typeof === s || b.$$typeof === l || b.$$typeof === g || b.$$typeof === E || b.$$typeof === y || b.$$typeof === p);
  }, Ge.typeOf = S, Ge;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function dw() {
  return Vd || (Vd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === u || M === i || M === o || M === f || M === d || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === h || M.$$typeof === a || M.$$typeof === s || M.$$typeof === l || M.$$typeof === g || M.$$typeof === E || M.$$typeof === y || M.$$typeof === p);
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var Z = M.$$typeof;
        switch (Z) {
          case t:
            var V = M.type;
            switch (V) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case f:
                return V;
              default:
                var ee = V && V.$$typeof;
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
    var b = c, C = u, O = s, P = a, N = t, x = l, L = n, R = m, _ = h, T = r, A = i, F = o, D = f, B = !1;
    function Q(M) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(M) || w(M) === c;
    }
    function ne(M) {
      return w(M) === u;
    }
    function se(M) {
      return w(M) === s;
    }
    function $(M) {
      return w(M) === a;
    }
    function H(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function j(M) {
      return w(M) === l;
    }
    function K(M) {
      return w(M) === n;
    }
    function I(M) {
      return w(M) === m;
    }
    function q(M) {
      return w(M) === h;
    }
    function k(M) {
      return w(M) === r;
    }
    function J(M) {
      return w(M) === i;
    }
    function re(M) {
      return w(M) === o;
    }
    function X(M) {
      return w(M) === f;
    }
    Ke.AsyncMode = b, Ke.ConcurrentMode = C, Ke.ContextConsumer = O, Ke.ContextProvider = P, Ke.Element = N, Ke.ForwardRef = x, Ke.Fragment = L, Ke.Lazy = R, Ke.Memo = _, Ke.Portal = T, Ke.Profiler = A, Ke.StrictMode = F, Ke.Suspense = D, Ke.isAsyncMode = Q, Ke.isConcurrentMode = ne, Ke.isContextConsumer = se, Ke.isContextProvider = $, Ke.isElement = H, Ke.isForwardRef = j, Ke.isFragment = K, Ke.isLazy = I, Ke.isMemo = q, Ke.isPortal = k, Ke.isProfiler = J, Ke.isStrictMode = re, Ke.isSuspense = X, Ke.isValidElementType = S, Ke.typeOf = w;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Jc.exports = fw() : Jc.exports = dw();
var Jp = Jc.exports;
function In(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(In(n)) : Jp.isFragment(n) && n.props ? r = r.concat(In(n.props.children, t)) : r.push(n));
  }), r;
}
var Zc = {}, Tl = [], hw = function(t) {
  Tl.push(t);
};
function ui(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Tl.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function vw(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Tl.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Zp() {
  Zc = {};
}
function em(e, t, r) {
  !t && !Zc[r] && (e(!1, r), Zc[r] = !0);
}
function ke(e, t) {
  em(ui, e, t);
}
function eu(e, t) {
  em(vw, e, t);
}
ke.preMessage = hw;
ke.resetWarned = Zp;
ke.noteOnce = eu;
function be(e, t, r) {
  return t = Yp(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zd(e, t) {
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
    t % 2 ? zd(Object(r), !0).forEach(function(n) {
      be(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ss(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Pl(e, t) {
  typeof e == "function" ? e(t) : Be(e) === "object" && e && "current" in e && (e.current = t);
}
function Po() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      Pl(i, o);
    });
  };
}
function Nl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ss(function() {
    return Po.apply(void 0, t);
  }, t, function(n, o) {
    return n.length === o.length && n.every(function(i, a) {
      return i === o[a];
    });
  });
}
function Oi(e) {
  var t, r, n = Jp.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Ta(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Pa(e) {
  return Ta(e) ? e : e instanceof Pe.Component ? Ny.findDOMNode(e) : null;
}
var tm = function() {
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
}(), tu = typeof window < "u" && typeof document < "u" && window.document === document, Na = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), pw = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Na) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), mw = 2;
function gw(e, t) {
  var r = !1, n = !1, o = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    pw(i);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < mw)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    o = c;
  }
  return s;
}
var yw = 20, bw = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ew = typeof MutationObserver < "u", Sw = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gw(this.refresh.bind(this), yw);
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
      !tu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ew ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !tu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = bw.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), rm = function(e, t) {
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
}, Eo = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Na;
}, nm = cs(0, 0, 0, 0);
function Ma(e) {
  return parseFloat(e) || 0;
}
function Hd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + Ma(i);
  }, 0);
}
function ww(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    r[i] = Ma(a);
  }
  return r;
}
function Cw(e) {
  var t = e.getBBox();
  return cs(0, 0, t.width, t.height);
}
function Ow(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return nm;
  var n = Eo(e).getComputedStyle(e), o = ww(n), i = o.left + o.right, a = o.top + o.bottom, s = Ma(n.width), c = Ma(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Hd(n, "left", "right") + i), Math.round(c + a) !== r && (c -= Hd(n, "top", "bottom") + a)), !xw(e)) {
    var u = Math.round(s + i) - t, l = Math.round(c + a) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(l) !== 1 && (c -= l);
  }
  return cs(o.left, o.top, s, c);
}
var _w = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Eo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Eo(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function xw(e) {
  return e === Eo(e).document.documentElement;
}
function Rw(e) {
  return tu ? _w(e) ? Cw(e) : Ow(e) : nm;
}
function Tw(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return rm(a, {
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
function cs(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Pw = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = cs(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Rw(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Nw = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Tw(r);
      rm(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Mw = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new tm(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Eo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Pw(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Eo(t).Element))
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
          return new Nw(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), om = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new tm(), im = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Sw.getInstance(), n = new Mw(t, r, this);
      om.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  im.prototype[e] = function() {
    var t;
    return (t = om.get(this))[e].apply(t, arguments);
  };
});
var Iw = function() {
  return typeof Na.ResizeObserver < "u" ? Na.ResizeObserver : im;
}(), qr = /* @__PURE__ */ new Map();
function am(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = qr.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var sm = new Iw(am);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Aw(e, t) {
  qr.has(e) || (qr.set(e, /* @__PURE__ */ new Set()), sm.observe(e)), qr.get(e).add(t);
}
function Dw(e, t) {
  qr.has(e) && (qr.get(e).delete(t), qr.get(e).size || (sm.unobserve(e), qr.delete(e)));
}
var Fw = /* @__PURE__ */ function(e) {
  wi(r, e);
  var t = Ci(r);
  function r() {
    return Er(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), ru = /* @__PURE__ */ v.createContext(null);
function $w(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), o = v.useRef([]), i = v.useContext(ru), a = v.useCallback(function(s, c, u) {
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
  return /* @__PURE__ */ v.createElement(ru.Provider, {
    value: a
  }, t);
}
function kw(e, t) {
  var r = e.children, n = e.disabled, o = v.useRef(null), i = v.useRef(null), a = v.useContext(ru), s = typeof r == "function", c = s ? r(o) : r, u = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ v.isValidElement(c) && Oi(c), f = l ? c.ref : null, d = v.useMemo(function() {
    return Po(f, o);
  }, [f, o]), h = function() {
    return Pa(o.current) || Pa(i.current);
  };
  v.useImperativeHandle(t, function() {
    return h();
  });
  var m = v.useRef(e);
  m.current = e;
  var p = v.useCallback(function(g) {
    var E = m.current, y = E.onResize, S = E.data, w = g.getBoundingClientRect(), b = w.width, C = w.height, O = g.offsetWidth, P = g.offsetHeight, N = Math.floor(b), x = Math.floor(C);
    if (u.current.width !== N || u.current.height !== x || u.current.offsetWidth !== O || u.current.offsetHeight !== P) {
      var L = {
        width: N,
        height: x,
        offsetWidth: O,
        offsetHeight: P
      };
      u.current = L;
      var R = O === Math.round(b) ? b : O, _ = P === Math.round(C) ? C : P, T = W(W({}, L), {}, {
        offsetWidth: R,
        offsetHeight: _
      });
      a?.(T, g, S), y && Promise.resolve().then(function() {
        y(T, g);
      });
    }
  }, []);
  return v.useEffect(function() {
    var g = h();
    return g && !n && Aw(g, p), function() {
      return Dw(g, p);
    };
  }, [o.current, n]), /* @__PURE__ */ v.createElement(Fw, {
    ref: i
  }, l ? /* @__PURE__ */ v.cloneElement(c, {
    ref: d
  }) : c);
}
var cm = /* @__PURE__ */ v.forwardRef(kw);
process.env.NODE_ENV !== "production" && (cm.displayName = "SingleObserver");
var Lw = "rc-observer-key";
function jw(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : In(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? ui(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && ui(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = o?.key || "".concat(Lw, "-").concat(i);
    return /* @__PURE__ */ v.createElement(cm, et({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var $n = /* @__PURE__ */ v.forwardRef(jw);
process.env.NODE_ENV !== "production" && ($n.displayName = "ResizeObserver");
$n.Collection = $w;
function Ml(e, t) {
  var r = W({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vw(e) {
  if (Array.isArray(e))
    return nu(e);
}
function um(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Il(e, t) {
  if (e) {
    if (typeof e == "string")
      return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nu(e, t);
  }
}
function zw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  return Vw(e) || um(e) || Il(e) || zw();
}
var lm = function(t) {
  return +setTimeout(t, 16);
}, fm = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (lm = function(t) {
  return window.requestAnimationFrame(t);
}, fm = function(t) {
  return window.cancelAnimationFrame(t);
});
var Bd = 0, Al = /* @__PURE__ */ new Map();
function dm(e) {
  Al.delete(e);
}
var Ut = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Bd += 1;
  var n = Bd;
  function o(i) {
    if (i === 0)
      dm(n), t();
    else {
      var a = lm(function() {
        o(i - 1);
      });
      Al.set(n, a);
    }
  }
  return o(r), n;
};
Ut.cancel = function(e) {
  var t = Al.get(e);
  return dm(t), fm(t);
};
function Dl(e) {
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
function Hw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Nt(e, t) {
  if (e == null)
    return {};
  var r = Hw(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hm(e, t) {
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
var Wd = "%", Bw = /* @__PURE__ */ function() {
  function e(t) {
    Er(this, e), be(this, "instanceId", void 0), be(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Sr(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(Wd)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(Wd), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), ou = "data-token-hash", xn = "data-css-hash", Ww = "data-cache-path", ao = "__cssinjs_instance__";
function Uw() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(xn, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[ao] = o[ao] || e, o[ao] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(xn, "]"))).forEach(function(o) {
      var i = o.getAttribute(xn);
      if (n[i]) {
        if (o[ao] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Bw(e);
}
var Fl = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: Uw(),
  defaultCache: !0
});
function Yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qw(e, t) {
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
var Ud = "data-rc-order", qd = "data-rc-priority", Qw = "rc-util-key", iu = /* @__PURE__ */ new Map();
function vm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Qw;
}
function us(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Gw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function pm(e) {
  return Array.from((iu.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Yt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = Gw(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(Ud, a), s && i && c.setAttribute(qd, "".concat(i)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var u = us(t), l = u.firstChild;
  if (n) {
    if (s) {
      var f = pm(u).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Ud)))
          return !1;
        var h = Number(d.getAttribute(qd) || 0);
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
function gm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = us(t);
  return pm(r).find(function(n) {
    return n.getAttribute(vm(t)) === e;
  });
}
function Ia(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = gm(e, t);
  if (r) {
    var n = us(t);
    n.removeChild(r);
  }
}
function Kw(e, t) {
  var r = iu.get(e);
  if (!r || !qw(document, r)) {
    var n = mm("", t), o = n.parentNode;
    iu.set(e, o), e.removeChild(n);
  }
}
function li(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = us(r);
  Kw(n, r);
  var o = gm(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = mm(e, r);
  return c.setAttribute(vm(r), t), c;
}
function ym(e) {
  if (Array.isArray(e))
    return e;
}
function Yw(e, t) {
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
function bm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return ym(e) || Yw(e, t) || Il(e, t) || bm();
}
function Xw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var $l = /* @__PURE__ */ function() {
  function e() {
    Er(this, e), be(this, "cache", void 0), be(this, "keys", void 0), be(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
          return !Xw(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
be($l, "MAX_CACHE_SIZE", 20);
be($l, "MAX_CACHE_OFFSET", 5);
var Qd = 0, Em = /* @__PURE__ */ function() {
  function e(t) {
    Er(this, e), be(this, "derivatives", void 0), be(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Qd, t.length === 0 && ui(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qd += 1;
  }
  return Sr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Ks = new $l();
function au(e) {
  var t = Array.isArray(e) ? e : [e];
  return Ks.has(t) || Ks.set(t, new Em(t)), Ks.get(t);
}
function Aa(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Em ? t += n.id : n && Be(n) === "object" ? t += Aa(n) : t += n;
  }), t;
}
function Jw(e, t) {
  return Dl("".concat(t, "_").concat(Aa(e)));
}
var Zo = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Sm = "_bAmBoO_";
function Zw(e, t, r) {
  if (Yt()) {
    var n, o;
    li(e, Zo);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(Sm);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Ia(Zo), a;
  }
  return !1;
}
var Ys = void 0;
function eC() {
  return Ys === void 0 && (Ys = Zw("@layer ".concat(Zo, " { .").concat(Zo, ' { content: "').concat(Sm, '"!important; } }'), function(e) {
    e.className = Zo;
  })), Ys;
}
var Gd = process.env.NODE_ENV !== "test" && Yt() ? v.useLayoutEffect : v.useEffect, xt = function(t, r) {
  var n = v.useRef(!0);
  Gd(function() {
    return t(n.current);
  }, r), Gd(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Kd = function(t, r) {
  xt(function(n) {
    if (!n)
      return t();
  }, r);
}, tC = W({}, v), Yd = tC.useInsertionEffect, rC = function(t, r, n) {
  v.useMemo(t, n), xt(function() {
    return r(!0);
  }, n);
}, nC = Yd ? function(e, t, r) {
  return Yd(function() {
    return e(), t();
  }, r);
} : rC;
function oC() {
  return !1;
}
var su = !1;
function iC() {
  return su;
}
const aC = process.env.NODE_ENV === "production" ? oC : iC;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Xs = window;
  if (typeof Xs.webpackHotUpdate == "function") {
    var sC = Xs.webpackHotUpdate;
    Xs.webpackHotUpdate = function() {
      return su = !0, setTimeout(function() {
        su = !1;
      }, 0), sC.apply(void 0, arguments);
    };
  }
}
function wm(e, t, r, n, o) {
  var i = v.useContext(Fl), a = i.cache, s = [e].concat(Ee(t)), c = s.join("_"), u = aC(), l = function(m) {
    a.update(s, function(p) {
      var g = p || [], E = G(g, 2), y = E[0], S = y === void 0 ? 0 : y, w = E[1], b = w;
      process.env.NODE_ENV !== "production" && w && u && (n?.(b, u), b = null);
      var C = b || r(), O = [S, C];
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
  return nC(function() {
    o?.(d);
  }, function(h) {
    return l(function(m) {
      var p = G(m, 2), g = p[0], E = p[1];
      return h && g === 0 && o?.(d), [g + 1, E];
    }), function() {
      a.update(s, function(m) {
        var p = m || [], g = G(p, 2), E = g[0], y = E === void 0 ? 0 : E, S = g[1], w = y - 1;
        return w === 0 ? (n?.(S, !1), null) : [y - 1, S];
      });
    };
  }, [c]), d;
}
var cC = {}, uC = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", yn = /* @__PURE__ */ new Map();
function lC(e) {
  yn.set(e, (yn.get(e) || 0) + 1);
}
function fC(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(ou, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[ao] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var dC = 0;
function hC(e, t) {
  yn.set(e, (yn.get(e) || 0) - 1);
  var r = Array.from(yn.keys()), n = r.filter(function(o) {
    var i = yn.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > dC && n.forEach(function(o) {
    fC(o, t), yn.delete(o);
  });
}
var vC = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = W(W({}, i), r);
  return o && (a = o(a)), a;
};
function pC(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Kt(Fl), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, c = s === void 0 ? cC : s, u = r.formatToken, l = r.getComputedToken, f = v.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Ee(t)));
  }, [t]), d = v.useMemo(function() {
    return Aa(f);
  }, [f]), h = v.useMemo(function() {
    return Aa(c);
  }, [c]), m = wm("token", [a, e.id, d, h], function() {
    var p = l ? l(f, c, e) : vC(f, c, e, u), g = Jw(p, a);
    p._tokenKey = g, lC(g);
    var E = "".concat(uC, "-").concat(Dl(g));
    return p._hashId = E, [p, E];
  }, function(p) {
    hC(p[0]._tokenKey, o);
  });
  return m;
}
var Cm = {
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
}, Om = "comm", _m = "rule", xm = "decl", mC = "@import", gC = "@keyframes", yC = "@layer", bC = Math.abs, kl = String.fromCharCode;
function Rm(e) {
  return e.trim();
}
function da(e, t, r) {
  return e.replace(t, r);
}
function EC(e, t) {
  return e.indexOf(t);
}
function fi(e, t) {
  return e.charCodeAt(t) | 0;
}
function di(e, t, r) {
  return e.slice(t, r);
}
function Ur(e) {
  return e.length;
}
function SC(e) {
  return e.length;
}
function Vi(e, t) {
  return t.push(e), e;
}
var ls = 1, So = 1, Tm = 0, br = 0, Pt = 0, No = "";
function Ll(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: ls, column: So, length: a, return: "", siblings: s };
}
function wC() {
  return Pt;
}
function CC() {
  return Pt = br > 0 ? fi(No, --br) : 0, So--, Pt === 10 && (So = 1, ls--), Pt;
}
function Nr() {
  return Pt = br < Tm ? fi(No, br++) : 0, So++, Pt === 10 && (So = 1, ls++), Pt;
}
function Rn() {
  return fi(No, br);
}
function ha() {
  return br;
}
function fs(e, t) {
  return di(No, e, t);
}
function cu(e) {
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
function OC(e) {
  return ls = So = 1, Tm = Ur(No = e), br = 0, [];
}
function _C(e) {
  return No = "", e;
}
function Js(e) {
  return Rm(fs(br - 1, uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xC(e) {
  for (; (Pt = Rn()) && Pt < 33; )
    Nr();
  return cu(e) > 2 || cu(Pt) > 3 ? "" : " ";
}
function RC(e, t) {
  for (; --t && Nr() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return fs(e, ha() + (t < 6 && Rn() == 32 && Nr() == 32));
}
function uu(e) {
  for (; Nr(); )
    switch (Pt) {
      case e:
        return br;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uu(Pt);
        break;
      case 40:
        e === 41 && uu(e);
        break;
      case 92:
        Nr();
        break;
    }
  return br;
}
function TC(e, t) {
  for (; Nr() && e + Pt !== 47 + 10; )
    if (e + Pt === 42 + 42 && Rn() === 47)
      break;
  return "/*" + fs(t, br - 1) + "*" + kl(e === 47 ? e : Nr());
}
function PC(e) {
  for (; !cu(Rn()); )
    Nr();
  return fs(e, br);
}
function NC(e) {
  return _C(va("", null, null, null, [""], e = OC(e), 0, [0], e));
}
function va(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, l = 0, f = a, d = 0, h = 0, m = 0, p = 1, g = 1, E = 1, y = 0, S = "", w = o, b = i, C = n, O = S; g; )
    switch (m = y, y = Nr()) {
      case 40:
        if (m != 108 && fi(O, f - 1) == 58) {
          EC(O += da(Js(y), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Js(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += xC(m);
        break;
      case 92:
        O += RC(ha() - 1, 7);
        continue;
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            Vi(MC(TC(Nr(), ha()), t, r, c), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        s[u++] = Ur(O) * E;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            E == -1 && (O = da(O, /\f/g, "")), h > 0 && Ur(O) - f && Vi(h > 32 ? Jd(O + ";", n, r, f - 1, c) : Jd(da(O, " ", "") + ";", n, r, f - 2, c), c);
            break;
          case 59:
            O += ";";
          default:
            if (Vi(C = Xd(O, t, r, u, l, o, s, S, w = [], b = [], f, i), i), y === 123)
              if (l === 0)
                va(O, t, C, C, w, i, f, s, b);
              else
                switch (d === 99 && fi(O, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    va(e, C, C, n && Vi(Xd(e, C, C, 0, 0, o, s, S, o, w = [], f, b), b), o, b, f, s, n ? w : b);
                    break;
                  default:
                    va(O, C, C, C, [""], b, 0, s, b);
                }
        }
        u = l = h = 0, p = E = 1, S = O = "", f = a;
        break;
      case 58:
        f = 1 + Ur(O), h = m;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && CC() == 125)
            continue;
        }
        switch (O += kl(y), y * p) {
          case 38:
            E = l > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[u++] = (Ur(O) - 1) * E, E = 1;
            break;
          case 64:
            Rn() === 45 && (O += Js(Nr())), d = Rn(), l = f = Ur(S = O += PC(ha())), y++;
            break;
          case 45:
            m === 45 && Ur(O) == 2 && (p = 0);
        }
    }
  return i;
}
function Xd(e, t, r, n, o, i, a, s, c, u, l, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], m = SC(h), p = 0, g = 0, E = 0; p < n; ++p)
    for (var y = 0, S = di(e, d + 1, d = bC(g = a[p])), w = e; y < m; ++y)
      (w = Rm(g > 0 ? h[y] + " " + S : da(S, /&\f/g, h[y]))) && (c[E++] = w);
  return Ll(e, t, r, o === 0 ? _m : s, c, u, l, f);
}
function MC(e, t, r, n) {
  return Ll(e, t, r, Om, kl(wC()), di(e, 2, -2), 0, n);
}
function Jd(e, t, r, n, o) {
  return Ll(e, t, r, xm, di(e, 0, n), di(e, n + 1, -1), n, o);
}
function lu(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function IC(e, t, r, n) {
  switch (e.type) {
    case yC:
      if (e.children.length)
        break;
    case mC:
    case xm:
      return e.return = e.return || e.value;
    case Om:
      return "";
    case gC:
      return e.return = e.value + "{" + lu(e.children, n) + "}";
    case _m:
      if (!Ur(e.value = e.props.join(",")))
        return "";
  }
  return Ur(r = lu(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Pm(e, t) {
  var r = t.path, n = t.parentSelectors;
  ke(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var AC = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Pm("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, DC = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Pm("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Zd = "data-ant-cssinjs-cache-path", Nm = "_FILE_STYLE__", Tn, Mm = !0;
function FC() {
  if (!Tn && (Tn = {}, Yt())) {
    var e = document.createElement("div");
    e.className = Zd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = G(i, 2), s = a[0], c = a[1];
      Tn[s] = c;
    });
    var r = document.querySelector("style[".concat(Zd, "]"));
    if (r) {
      var n;
      Mm = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function $C(e) {
  return FC(), !!Tn[e];
}
function kC(e) {
  var t = Tn[e], r = null;
  if (t && Yt())
    if (Mm)
      r = Nm;
    else {
      var n = document.querySelector("style[".concat(xn, '="').concat(Tn[e], '"]'));
      n ? r = n.innerHTML : delete Tn[e];
    }
  return [r, t];
}
var eh = Yt(), Im = "_skip_check_", Am = "_multi_value_";
function th(e) {
  var t = lu(NC(e), IC);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function LC(e) {
  return Be(e) === "object" && e && (Im in e || Am in e);
}
function jC(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), u = c[0] || "", l = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(l).concat(o).concat(u.slice(l.length)), [u].concat(Ee(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var VC = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, c = r.layer, u = r.path, l = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, h = r.linters, m = h === void 0 ? [] : h, p = "", g = {};
  function E(C) {
    var O = C.getName(s);
    if (!g[O]) {
      var P = e(C.style, r, {
        root: !1,
        parentSelectors: a
      }), N = G(P, 1), x = N[0];
      g[O] = "@keyframes ".concat(C.getName(s)).concat(x);
    }
  }
  function y(C) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(P) {
      Array.isArray(P) ? y(P, O) : P && O.push(P);
    }), O;
  }
  var S = y(Array.isArray(t) ? t : [t]);
  if (S.forEach(function(C) {
    var O = typeof C == "string" && !o ? {} : C;
    if (typeof O == "string")
      p += "".concat(O, `
`);
    else if (O._keyframe)
      E(O);
    else {
      var P = d.reduce(function(N, x) {
        var L;
        return (x == null || (L = x.visit) === null || L === void 0 ? void 0 : L.call(x, N)) || N;
      }, O);
      Object.keys(P).forEach(function(N) {
        var x = P[N];
        if (Be(x) === "object" && x && (N !== "animationName" || !x._keyframe) && !LC(x)) {
          var L = !1, R = N.trim(), _ = !1;
          (o || i) && s ? R.startsWith("@") ? L = !0 : R = jC(N, s, l) : o && !s && (R === "&" || R === "") && (R = "", _ = !0);
          var T = e(x, r, {
            root: _,
            injectHash: L,
            parentSelectors: [].concat(Ee(a), [R])
          }), A = G(T, 2), F = A[0], D = A[1];
          g = W(W({}, g), D), p += "".concat(R).concat(F);
        } else {
          let ne = function(se, $) {
            process.env.NODE_ENV !== "production" && (Be(x) !== "object" || !(x != null && x[Im])) && [AC, DC].concat(Ee(m)).forEach(function(K) {
              return K(se, $, {
                path: u,
                hashId: s,
                parentSelectors: a
              });
            });
            var H = se.replace(/[A-Z]/g, function(K) {
              return "-".concat(K.toLowerCase());
            }), j = $;
            !Cm[se] && typeof j == "number" && j !== 0 && (j = "".concat(j, "px")), se === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (E($), j = $.getName(s)), p += "".concat(H, ":").concat(j, ";");
          };
          var B, Q = (B = x?.value) !== null && B !== void 0 ? B : x;
          Be(x) === "object" && x !== null && x !== void 0 && x[Am] && Array.isArray(Q) ? Q.forEach(function(se) {
            ne(N, se);
          }) : ne(N, Q);
        }
      });
    }
  }), !o)
    p = "{".concat(p, "}");
  else if (c && eC()) {
    var w = c.split(","), b = w[w.length - 1].trim();
    p = "@layer ".concat(b, " {").concat(p, "}"), w.length > 1 && (p = "@layer ".concat(c, "{%%%:%}").concat(p));
  }
  return [p, g];
};
function zC(e, t) {
  return Dl("".concat(e.join("%")).concat(t));
}
function HC() {
  return null;
}
function fu(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, l = v.useContext(Fl), f = l.autoClear, d = l.mock, h = l.defaultCache, m = l.hashPriority, p = l.container, g = l.ssrInline, E = l.transformers, y = l.linters, S = l.cache, w = r._tokenKey, b = [w].concat(Ee(n)), C = eh;
  process.env.NODE_ENV !== "production" && d !== void 0 && (C = d === "client");
  var O = wm(
    "style",
    b,
    // Create cache if needed
    function() {
      var R = b.join("|");
      if ($C(R)) {
        var _ = kC(R), T = G(_, 2), A = T[0], F = T[1];
        if (A)
          return [A, w, F, {}, s, u];
      }
      var D = t(), B = VC(D, {
        hashId: o,
        hashPriority: m,
        layer: i,
        path: n.join("-"),
        transformers: E,
        linters: y
      }), Q = G(B, 2), ne = Q[0], se = Q[1], $ = th(ne), H = zC(b, $);
      return [$, w, H, se, s, u];
    },
    // Remove cache if no need
    function(R, _) {
      var T = G(R, 3), A = T[2];
      (_ || f) && eh && Ia(A, {
        mark: xn
      });
    },
    // Effect: Inject style here
    function(R) {
      var _ = G(R, 4), T = _[0];
      _[1];
      var A = _[2], F = _[3];
      if (C && T !== Nm) {
        var D = {
          mark: xn,
          prepend: "queue",
          attachTo: p,
          priority: u
        }, B = typeof a == "function" ? a() : a;
        B && (D.csp = {
          nonce: B
        });
        var Q = li(T, A, D);
        Q[ao] = S.instanceId, Q.setAttribute(ou, w), process.env.NODE_ENV !== "production" && Q.setAttribute(Ww, b.join("|")), Object.keys(F).forEach(function(ne) {
          li(th(F[ne]), "_effect-".concat(ne), D);
        });
      }
    }
  ), P = G(O, 3), N = P[0], x = P[1], L = P[2];
  return function(R) {
    var _;
    if (!g || C || !h)
      _ = /* @__PURE__ */ v.createElement(HC, null);
    else {
      var T;
      _ = /* @__PURE__ */ v.createElement("style", et({}, (T = {}, be(T, ou, x), be(T, xn, L), T), {
        dangerouslySetInnerHTML: {
          __html: N
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, _, R);
  };
}
var Vt = /* @__PURE__ */ function() {
  function e(t, r) {
    Er(this, e), be(this, "name", void 0), be(this, "style", void 0), be(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Sr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Gn(e) {
  return e.notSplit = !0, e;
}
Gn(["borderTop", "borderBottom"]), Gn(["borderTop"]), Gn(["borderBottom"]), Gn(["borderLeft", "borderRight"]), Gn(["borderLeft"]), Gn(["borderRight"]);
const BC = /* @__PURE__ */ yi({}), jl = BC;
function Dm(e) {
  return ym(e) || um(e) || Il(e) || bm();
}
function Pr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Fm(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Dm(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Ee(e) : s = W({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Fm(s[i], a, r, n), s;
}
function xr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Pr(e, t.slice(0, -1)) ? e : Fm(e, t, r, n);
}
function WC(e) {
  return Be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function rh(e) {
  return Array.isArray(e) ? [] : {};
}
var UC = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function so() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = rh(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), u = Pr(o, a), l = Array.isArray(u);
      if (l || WC(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Pr(n, a);
          l ? n = xr(n, a, []) : (!f || Be(f) !== "object") && (n = xr(n, a, rh(u))), UC(u).forEach(function(d) {
            i([].concat(Ee(a), [d]), c);
          });
        }
      } else
        n = xr(n, a, u);
    }
    i([]);
  }), n;
}
function qC() {
}
let $m = qC;
process.env.NODE_ENV !== "production" && ($m = (e, t, r) => {
  ke(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Zp();
});
const dr = $m, QC = /* @__PURE__ */ yi(void 0), GC = {
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
var KC = {
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
const YC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, km = YC, XC = {
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
  }, KC),
  timePickerLocale: Object.assign({}, km)
}, nh = XC, sr = "${label} is not a valid ${type}", JC = {
  locale: "en",
  Pagination: GC,
  DatePicker: nh,
  TimePicker: km,
  Calendar: nh,
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
}, wo = JC;
Object.assign({}, wo.Modal);
let pa = [];
const oh = () => pa.reduce((e, t) => Object.assign(Object.assign({}, e), t), wo.Modal);
function ZC(e) {
  if (e) {
    const t = Object.assign({}, e);
    return pa.push(t), oh(), () => {
      pa = pa.filter((r) => r !== t), oh();
    };
  }
  Object.assign({}, wo.Modal);
}
const e2 = /* @__PURE__ */ yi(void 0), Vl = e2, t2 = (e, t) => {
  const r = v.useContext(Vl), n = v.useMemo(() => {
    var i;
    const a = t || wo[e], s = (i = r?.[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), o = v.useMemo(() => {
    const i = r?.locale;
    return r?.exist && !i ? wo.locale : i;
  }, [r]);
  return [n, o];
}, r2 = t2, Lm = "internalMark", jm = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && dr(n === Lm, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), v.useEffect(() => ZC(t && t.Modal), [t]);
  const o = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(Vl.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (jm.displayName = "LocaleProvider");
const n2 = jm, o2 = "5.8.0";
function qt(e, t) {
  i2(e) && (e = "100%");
  var r = a2(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function zi(e) {
  return Math.min(1, Math.max(0, e));
}
function i2(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function a2(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Vm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Hi(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function En(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function s2(e, t, r) {
  return {
    r: qt(e, 255) * 255,
    g: qt(t, 255) * 255,
    b: qt(r, 255) * 255
  };
}
function ih(e, t, r) {
  e = qt(e, 255), t = qt(t, 255), r = qt(r, 255);
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
function Zs(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function c2(e, t, r) {
  var n, o, i;
  if (e = qt(e, 360), t = qt(t, 100), r = qt(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = Zs(s, a, e + 1 / 3), o = Zs(s, a, e), i = Zs(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function du(e, t, r) {
  e = qt(e, 255), t = qt(t, 255), r = qt(r, 255);
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
function u2(e, t, r) {
  e = qt(e, 360) * 6, t = qt(t, 100), r = qt(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), c = n % 6, u = [r, a, i, i, s, r][c], l = [s, r, r, a, i, i][c], f = [i, i, s, r, r, a][c];
  return { r: u * 255, g: l * 255, b: f * 255 };
}
function hu(e, t, r, n) {
  var o = [
    En(Math.round(e).toString(16)),
    En(Math.round(t).toString(16)),
    En(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function l2(e, t, r, n, o) {
  var i = [
    En(Math.round(e).toString(16)),
    En(Math.round(t).toString(16)),
    En(Math.round(r).toString(16)),
    En(f2(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function f2(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ah(e) {
  return ur(e) / 255;
}
function ur(e) {
  return parseInt(e, 16);
}
function d2(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var vu = {
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
function ro(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = p2(e)), typeof e == "object" && (Br(e.r) && Br(e.g) && Br(e.b) ? (t = s2(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Br(e.h) && Br(e.s) && Br(e.v) ? (n = Hi(e.s), o = Hi(e.v), t = u2(e.h, n, o), a = !0, s = "hsv") : Br(e.h) && Br(e.s) && Br(e.l) && (n = Hi(e.s), i = Hi(e.l), t = c2(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Vm(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var h2 = "[-\\+]?\\d+%?", v2 = "[-\\+]?\\d*\\.\\d+%?", an = "(?:".concat(v2, ")|(?:").concat(h2, ")"), ec = "[\\s|\\(]+(".concat(an, ")[,|\\s]+(").concat(an, ")[,|\\s]+(").concat(an, ")\\s*\\)?"), tc = "[\\s|\\(]+(".concat(an, ")[,|\\s]+(").concat(an, ")[,|\\s]+(").concat(an, ")[,|\\s]+(").concat(an, ")\\s*\\)?"), _r = {
  CSS_UNIT: new RegExp(an),
  rgb: new RegExp("rgb" + ec),
  rgba: new RegExp("rgba" + tc),
  hsl: new RegExp("hsl" + ec),
  hsla: new RegExp("hsla" + tc),
  hsv: new RegExp("hsv" + ec),
  hsva: new RegExp("hsva" + tc),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function p2(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (vu[e])
    e = vu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = _r.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = _r.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = _r.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = _r.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = _r.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = _r.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = _r.hex8.exec(e), r ? {
    r: ur(r[1]),
    g: ur(r[2]),
    b: ur(r[3]),
    a: ah(r[4]),
    format: t ? "name" : "hex8"
  } : (r = _r.hex6.exec(e), r ? {
    r: ur(r[1]),
    g: ur(r[2]),
    b: ur(r[3]),
    format: t ? "name" : "hex"
  } : (r = _r.hex4.exec(e), r ? {
    r: ur(r[1] + r[1]),
    g: ur(r[2] + r[2]),
    b: ur(r[3] + r[3]),
    a: ah(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = _r.hex3.exec(e), r ? {
    r: ur(r[1] + r[1]),
    g: ur(r[2] + r[2]),
    b: ur(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Br(e) {
  return !!_r.CSS_UNIT.exec(String(e));
}
var Bt = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = d2(t)), this.originalInput = t;
      var o = ro(t);
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
      return this.a = Vm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = du(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = du(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ih(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ih(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), hu(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), l2(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(qt(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(qt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + hu(this.r, this.g, this.b, !1), r = 0, n = Object.entries(vu); r < n.length; r++) {
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
      return r.l += t / 100, r.l = zi(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = zi(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = zi(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = zi(r.s), new e(r);
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
), Bi = 2, sh = 0.16, m2 = 0.05, g2 = 0.05, y2 = 0.15, zm = 5, Hm = 4, b2 = [{
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
function ch(e) {
  var t = e.r, r = e.g, n = e.b, o = du(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Wi(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(hu(t, r, n, !1));
}
function E2(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function uh(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Bi * t : Math.round(e.h) + Bi * t : n = r ? Math.round(e.h) + Bi * t : Math.round(e.h) - Bi * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function lh(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - sh * t : t === Hm ? n = e.s + sh : n = e.s + m2 * t, n > 1 && (n = 1), r && t === zm && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function fh(e, t, r) {
  var n;
  return r ? n = e.v + g2 * t : n = e.v - y2 * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function An(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = ro(e), o = zm; o > 0; o -= 1) {
    var i = ch(n), a = Wi(ro({
      h: uh(i, o, !0),
      s: lh(i, o, !0),
      v: fh(i, o, !0)
    }));
    r.push(a);
  }
  r.push(Wi(n));
  for (var s = 1; s <= Hm; s += 1) {
    var c = ch(n), u = Wi(ro({
      h: uh(c, s),
      s: lh(c, s),
      v: fh(c, s)
    }));
    r.push(u);
  }
  return t.theme === "dark" ? b2.map(function(l) {
    var f = l.index, d = l.opacity, h = Wi(E2(ro(t.backgroundColor || "#141414"), ro(r[f]), d * 100));
    return h;
  }) : r;
}
var rc = {
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
}, ma = {}, nc = {};
Object.keys(rc).forEach(function(e) {
  ma[e] = An(rc[e]), ma[e].primary = ma[e][5], nc[e] = An(rc[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), nc[e].primary = nc[e][5];
});
var S2 = ma.blue;
const w2 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, C2 = w2;
function O2(e) {
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
const Bm = {
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
}, _2 = Object.assign(Object.assign({}, Bm), {
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
}), ds = _2;
function x2(e, t) {
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
  } = e, f = r(c), d = r(o), h = r(i), m = r(a), p = r(s), g = n(u, l), E = e.colorLink || e.colorInfo, y = r(E);
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
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Bt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const R2 = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, T2 = R2;
function P2(e) {
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
  }, T2(n));
}
const Wr = (e, t) => new Bt(e).setAlpha(t).toRgbString(), Uo = (e, t) => new Bt(e).darken(t).toHexString(), N2 = (e) => {
  const t = An(e);
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
}, M2 = (e, t) => {
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
    colorBgLayout: Uo(r, 4),
    colorBgContainer: Uo(r, 0),
    colorBgElevated: Uo(r, 0),
    colorBgSpotlight: Wr(n, 0.85),
    colorBorder: Uo(r, 15),
    colorBorderSecondary: Uo(r, 6)
  };
};
function I2(e) {
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
const A2 = (e) => {
  const t = I2(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
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
}, D2 = A2;
function F2(e) {
  const t = Object.keys(Bm).map((r) => {
    const n = An(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), x2(e, {
    generateColorPalettes: N2,
    generateNeutralColorPalettes: M2
  })), D2(e.fontSize)), O2(e)), C2(e)), P2(e));
}
const Wm = au(F2), Um = {
  token: ds,
  hashed: !0
}, qm = /* @__PURE__ */ Pe.createContext(Um);
function oc(e) {
  return e >= 0 && e <= 255;
}
function Ui(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Bt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Bt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((r - a * (1 - u)) / u), f = Math.round((n - s * (1 - u)) / u), d = Math.round((o - c * (1 - u)) / u);
    if (oc(l) && oc(f) && oc(d))
      return new Bt({
        r: l,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Bt({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var $2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function k2(e) {
  const {
    override: t
  } = e, r = $2(e, ["override"]), n = Object.assign({}, t);
  Object.keys(ds).forEach((d) => {
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
    colorSplit: Ui(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Ui(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ui(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Ui(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Bt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Bt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Bt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var dh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Qm = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = dh(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = k2(a), i && Object.entries(i).forEach((s) => {
    let [c, u] = s;
    const {
      theme: l
    } = u, f = dh(u, ["theme"]);
    let d = f;
    l && (d = Qm(Object.assign(Object.assign({}, a), f), {
      override: f
    }, l)), a[c] = d;
  }), a;
};
function kn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = Pe.useContext(qm), o = `${o2}-${t || ""}`, i = r || Wm, [a, s] = pC(i, [ds, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    getComputedToken: Qm
  });
  return [i, a, t ? s : ""];
}
function Tr(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function vo(e) {
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
function ic(e) {
  return e !== void 0;
}
function Da(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, a = r.postState, s = vo(function() {
    return ic(o) ? o : ic(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = G(s, 2), u = c[0], l = c[1], f = o !== void 0 ? o : u, d = a ? a(f) : f, h = Tr(i), m = vo([f]), p = G(m, 2), g = p[0], E = p[1];
  Kd(function() {
    var S = g[0];
    u !== S && h(u, S);
  }, [g]), Kd(function() {
    ic(o) || l(o);
  }, [o]);
  var y = Tr(function(S, w) {
    l(S, w), E([f], w);
  });
  return [d, y];
}
const zl = "anticon", L2 = (e, t) => t || (e ? `ant-${e}` : "ant"), or = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: L2,
  iconPrefixCls: zl
}), pu = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, hs = (e) => ({
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
}), Hl = () => ({
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
}), j2 = (e) => ({
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
}), V2 = (e, t) => {
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
}, z2 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), H2 = (e) => ({
  "&:focus-visible": Object.assign({}, z2(e))
}), Gm = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let mu = !0;
function tr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Gm)
    return Object.assign.apply(Object, [{}].concat(t));
  mu = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), mu = !0, n;
}
function B2() {
}
function W2(e) {
  let t, r = e, n = B2;
  return Gm && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return mu && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function _i(e, t, r, n) {
  return (o) => {
    const [i, a, s] = kn(), {
      getPrefixCls: c,
      iconPrefixCls: u,
      csp: l
    } = Kt(or), f = c(), d = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => l?.nonce,
      clientOnly: n?.clientOnly,
      // antd is always at top of styles
      order: -999
    };
    return fu(Object.assign(Object.assign({}, d), {
      clientOnly: !1,
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": j2(a)
    }]), [fu(Object.assign(Object.assign({}, d), {
      path: [e, o, u]
    }), () => {
      const {
        token: h,
        flush: m
      } = W2(a), p = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: b
        } = n;
        b.forEach((C) => {
          let [O, P] = C;
          var N;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ke(!p?.[O], `The token '${String(O)}' of ${e} had deprecated, use '${String(P)}' instead.`), (p?.[O] || p?.[P]) && ((N = p[P]) !== null && N !== void 0 || (p[P] = p?.[O]));
        });
      }
      const g = typeof r == "function" ? r(tr(h, p ?? {})) : r, E = Object.assign(Object.assign({}, g), p), y = `.${o}`, S = tr(h, {
        componentCls: y,
        prefixCls: o,
        iconCls: `.${u}`,
        antCls: `.${f}`
      }, E), w = t(S, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: u,
        overrideComponentToken: p
      });
      return m(e, E), [n?.resetStyle === !1 ? null : V2(a, o), w];
    }), s];
  };
}
const U2 = `-ant-${Date.now()}-${Math.random()}`;
function q2(e, t) {
  const r = {}, n = (a, s) => {
    let c = a.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (a, s) => {
    const c = new Bt(a), u = An(c.toRgbString());
    r[`${s}-color`] = n(c), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Bt(t.primaryColor), s = An(a.toRgbString());
    s.forEach((u, l) => {
      r[`primary-${l + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(a, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Bt(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function Q2(e, t) {
  const r = q2(e, t);
  Yt() ? li(r, `${U2}-dynamic-theme`) : process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const gu = /* @__PURE__ */ v.createContext(!1), G2 = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(gu);
  return /* @__PURE__ */ v.createElement(gu.Provider, {
    value: r ?? n
  }, t);
}, Bl = gu, yu = /* @__PURE__ */ v.createContext(void 0), K2 = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(yu);
  return /* @__PURE__ */ v.createElement(yu.Provider, {
    value: r || n
  }, t);
}, vs = yu;
function Y2() {
  const e = Kt(Bl), t = Kt(vs);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function X2(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Um : t;
  return ss(() => {
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
    return !hm(a, c, !0);
  }));
}
var J2 = ["children"], Km = /* @__PURE__ */ v.createContext({});
function Z2(e) {
  var t = e.children, r = Nt(e, J2);
  return /* @__PURE__ */ v.createElement(Km.Provider, {
    value: r
  }, t);
}
var eO = /* @__PURE__ */ function(e) {
  wi(r, e);
  var t = Ci(r);
  function r() {
    return Er(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), gn = "none", qi = "appear", Qi = "enter", Gi = "leave", hh = "none", Rr = "prepare", co = "start", uo = "active", Wl = "end", Ym = "prepared";
function vh(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function tO(e, t) {
  var r = {
    animationend: vh("Animation", "AnimationEnd"),
    transitionend: vh("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var rO = tO(Yt(), typeof window < "u" ? window : {}), Xm = {};
if (Yt()) {
  var nO = document.createElement("div");
  Xm = nO.style;
}
var Ki = {};
function Jm(e) {
  if (Ki[e])
    return Ki[e];
  var t = rO[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Xm)
        return Ki[e] = t[i], Ki[e];
    }
  return "";
}
var Zm = Jm("animationend"), eg = Jm("transitionend"), tg = !!(Zm && eg), ph = Zm || "animationend", mh = eg || "transitionend";
function gh(e, t) {
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
const oO = function(e) {
  var t = De(), r = De(e);
  r.current = e;
  var n = v.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(mh, n), a.removeEventListener(ph, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(mh, n), a.addEventListener(ph, n), t.current = a);
  }
  return v.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var rg = Yt() ? Iv : Wt;
const iO = function() {
  var e = v.useRef(null);
  function t() {
    Ut.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Ut(function() {
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
var aO = [Rr, co, uo, Wl], sO = [Rr, Ym], ng = !1, cO = !0;
function og(e) {
  return e === uo || e === Wl;
}
const uO = function(e, t, r) {
  var n = vo(hh), o = G(n, 2), i = o[0], a = o[1], s = iO(), c = G(s, 2), u = c[0], l = c[1];
  function f() {
    a(Rr, !0);
  }
  var d = t ? sO : aO;
  return rg(function() {
    if (i !== hh && i !== Wl) {
      var h = d.indexOf(i), m = d[h + 1], p = r(i);
      p === ng ? a(m, !0) : m && u(function(g) {
        function E() {
          g.isCanceled() || a(m, !0);
        }
        p === !0 ? E() : Promise.resolve(p).then(E);
      });
    }
  }, [e, i]), v.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, i];
};
function lO(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, u = c === void 0 ? !0 : c, l = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, E = n.onLeaveStart, y = n.onAppearActive, S = n.onEnterActive, w = n.onLeaveActive, b = n.onAppearEnd, C = n.onEnterEnd, O = n.onLeaveEnd, P = n.onVisibleChanged, N = vo(), x = G(N, 2), L = x[0], R = x[1], _ = vo(gn), T = G(_, 2), A = T[0], F = T[1], D = vo(null), B = G(D, 2), Q = B[0], ne = B[1], se = De(!1), $ = De(null);
  function H() {
    return r();
  }
  var j = De(!1);
  function K() {
    F(gn, !0), ne(null, !0);
  }
  function I(ge) {
    var oe = H();
    if (!(ge && !ge.deadline && ge.target !== oe)) {
      var de = j.current, Ne;
      A === qi && de ? Ne = b?.(oe, ge) : A === Qi && de ? Ne = C?.(oe, ge) : A === Gi && de && (Ne = O?.(oe, ge)), A !== gn && de && Ne !== !1 && K();
    }
  }
  var q = oO(I), k = G(q, 1), J = k[0], re = function(oe) {
    var de, Ne, Ie;
    switch (oe) {
      case qi:
        return de = {}, be(de, Rr, d), be(de, co, p), be(de, uo, y), de;
      case Qi:
        return Ne = {}, be(Ne, Rr, h), be(Ne, co, g), be(Ne, uo, S), Ne;
      case Gi:
        return Ie = {}, be(Ie, Rr, m), be(Ie, co, E), be(Ie, uo, w), Ie;
      default:
        return {};
    }
  }, X = v.useMemo(function() {
    return re(A);
  }, [A]), M = uO(A, !e, function(ge) {
    if (ge === Rr) {
      var oe = X[Rr];
      return oe ? oe(H()) : ng;
    }
    if (ee in X) {
      var de;
      ne(((de = X[ee]) === null || de === void 0 ? void 0 : de.call(X, H(), null)) || null);
    }
    return ee === uo && (J(H()), l > 0 && (clearTimeout($.current), $.current = setTimeout(function() {
      I({
        deadline: !0
      });
    }, l))), ee === Ym && K(), cO;
  }), Z = G(M, 2), V = Z[0], ee = Z[1], fe = og(ee);
  j.current = fe, rg(function() {
    R(t);
    var ge = se.current;
    se.current = !0;
    var oe;
    !ge && t && s && (oe = qi), ge && t && i && (oe = Qi), (ge && !t && u || !ge && f && !t && u) && (oe = Gi);
    var de = re(oe);
    oe && (e || de[Rr]) ? (F(oe), V()) : F(gn);
  }, [t]), Wt(function() {
    // Cancel appear
    (A === qi && !s || // Cancel enter
    A === Qi && !i || // Cancel leave
    A === Gi && !u) && F(gn);
  }, [s, i, u]), Wt(function() {
    return function() {
      se.current = !1, clearTimeout($.current);
    };
  }, []);
  var ce = v.useRef(!1);
  Wt(function() {
    L && (ce.current = !0), L !== void 0 && A === gn && ((ce.current || L) && P?.(L), ce.current = !0);
  }, [L, A]);
  var he = Q;
  return X[Rr] && ee === co && (he = W({
    transition: "none"
  }, he)), [A, ee, he, L ?? t];
}
function fO(e) {
  var t = e;
  Be(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, u = c === void 0 ? !0 : c, l = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, m = o.eventProps, p = v.useContext(Km), g = p.motion, E = r(o, g), y = De(), S = De();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : Pa(S.current);
      } catch {
        return null;
      }
    }
    var b = lO(E, s, w, o), C = G(b, 4), O = C[0], P = C[1], N = C[2], x = C[3], L = v.useRef(x);
    x && (L.current = !0);
    var R = v.useCallback(function(ne) {
      y.current = ne, Pl(i, ne);
    }, [i]), _, T = W(W({}, m), {}, {
      visible: s
    });
    if (!f)
      _ = null;
    else if (O === gn)
      x ? _ = f(W({}, T), R) : !u && L.current && h ? _ = f(W(W({}, T), {}, {
        className: h
      }), R) : l || !u && !h ? _ = f(W(W({}, T), {}, {
        style: {
          display: "none"
        }
      }), R) : _ = null;
    else {
      var A, F;
      P === Rr ? F = "prepare" : og(P) ? F = "active" : P === co && (F = "start");
      var D = gh(d, "".concat(O, "-").concat(F));
      _ = f(W(W({}, T), {}, {
        className: Me(gh(d, O), (A = {}, be(A, D, D && F), be(A, d, typeof d == "string"), A)),
        style: N
      }), R);
    }
    if (/* @__PURE__ */ v.isValidElement(_) && Oi(_)) {
      var B = _, Q = B.ref;
      Q || (_ = /* @__PURE__ */ v.cloneElement(_, {
        ref: R
      }));
    }
    return /* @__PURE__ */ v.createElement(eO, {
      ref: S
    }, _);
  });
  return n.displayName = "CSSMotion", n;
}
const xi = fO(tg);
var bu = "add", Eu = "keep", Su = "remove", ac = "removed";
function dO(e) {
  var t;
  return e && Be(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, W(W({}, t), {}, {
    key: String(t.key)
  });
}
function wu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(dO);
}
function hO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = wu(e), a = wu(t);
  i.forEach(function(u) {
    for (var l = !1, f = n; f < o; f += 1) {
      var d = a[f];
      if (d.key === u.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(h) {
          return W(W({}, h), {}, {
            status: bu
          });
        })), n = f), r.push(W(W({}, d), {}, {
          status: Eu
        })), n += 1, l = !0;
        break;
      }
    }
    l || r.push(W(W({}, u), {}, {
      status: Su
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(u) {
    return W(W({}, u), {}, {
      status: bu
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
      return f !== u || d !== Su;
    }), r.forEach(function(l) {
      l.key === u && (l.status = Eu);
    });
  }), r;
}
var vO = ["component", "children", "onVisibleChanged", "onAllRemoved"], pO = ["status"], mO = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function gO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xi, r = /* @__PURE__ */ function(n) {
    wi(i, n);
    var o = Ci(i);
    function i() {
      var a;
      Er(this, i);
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      return a = o.call.apply(o, [this].concat(c)), be(Ra(a), "state", {
        keyEntities: []
      }), be(Ra(a), "removeKey", function(l) {
        var f = a.state.keyEntities, d = f.map(function(h) {
          return h.key !== l ? h : W(W({}, h), {}, {
            status: ac
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(h) {
          var m = h.status;
          return m !== ac;
        }).length;
      }), a;
    }
    return Sr(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, u = this.props, l = u.component, f = u.children, d = u.onVisibleChanged, h = u.onAllRemoved, m = Nt(u, vO), p = l || v.Fragment, g = {};
        return mO.forEach(function(E) {
          g[E] = m[E], delete m[E];
        }), delete m.keys, /* @__PURE__ */ v.createElement(p, m, c.map(function(E) {
          var y = E.status, S = Nt(E, pO), w = y === bu || y === Eu;
          return /* @__PURE__ */ v.createElement(t, et({}, g, {
            key: S.key,
            visible: w,
            eventProps: S,
            onVisibleChanged: function(C) {
              if (d?.(C, {
                key: S.key
              }), !C) {
                var O = s.removeKey(S.key);
                O === 0 && h && h();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var u = s.keys, l = c.keyEntities, f = wu(u), d = hO(l, f);
        return {
          keyEntities: d.filter(function(h) {
            var m = l.find(function(p) {
              var g = p.key;
              return h.key === g;
            });
            return !(m && m.status === ac && h.status === Su);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(v.Component);
  return be(r, "defaultProps", {
    component: "div"
  }), r;
}
const yO = gO(tg);
function bO(e) {
  const {
    children: t
  } = e, [, r] = kn(), {
    motion: n
  } = r, o = v.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ v.createElement(Z2, {
    motion: n
  }, t) : t;
}
const EO = (e, t) => {
  const [r, n] = kn();
  return fu({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Hl()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, SO = EO;
var wO = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Cu = !1;
const CO = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && dr(!Cu, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), OO = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], _O = "ant";
let Fa, ig, ag;
function ga() {
  return Fa || _O;
}
function xO() {
  return ig || zl;
}
function RO(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const TO = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (Fa = t), r !== void 0 && (ig = r), n && (RO(n) ? (process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Q2(ga(), n)) : ag = n);
}, sg = () => ({
  getPrefixCls: (e, t) => t || (e ? `${ga()}-${e}` : ga()),
  getIconPrefixCls: xO,
  getRootPrefixCls: () => Fa || ga(),
  getTheme: () => ag
}), PO = (e) => {
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
    iconPrefixCls: E,
    theme: y,
    componentDisabled: S,
    segmented: w,
    statistic: b,
    spin: C,
    calendar: O,
    carousel: P,
    cascader: N,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: T,
    drawer: A,
    skeleton: F,
    steps: D,
    image: B,
    layout: Q,
    list: ne,
    mentions: se,
    modal: $,
    progress: H,
    result: j,
    slider: K,
    breadcrumb: I,
    menu: q,
    pagination: k,
    input: J,
    empty: re,
    badge: X,
    radio: M,
    rate: Z,
    switch: V,
    transfer: ee,
    avatar: fe,
    message: ce,
    tag: he,
    table: ge,
    card: oe,
    tabs: de,
    timeline: Ne,
    timePicker: Ie,
    upload: ie,
    notification: pe,
    tree: tt,
    colorPicker: at,
    datePicker: rt,
    wave: We
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && dr(d === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Ue = v.useCallback((xe, ze) => {
    const {
      prefixCls: ft
    } = e;
    if (ze)
      return ze;
    const pt = ft || g.getPrefixCls("");
    return xe ? `${pt}-${xe}` : pt;
  }, [g.getPrefixCls, e.prefixCls]), st = E || g.iconPrefixCls || zl, Xt = st !== g.iconPrefixCls, nt = r || g.csp, ve = SO(st, nt), Se = X2(y, g.theme);
  process.env.NODE_ENV !== "production" && (Cu = Cu || !!Se);
  const Ve = {
    csp: nt,
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
    iconPrefixCls: st,
    theme: Se,
    segmented: w,
    statistic: b,
    spin: C,
    calendar: O,
    carousel: P,
    cascader: N,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: T,
    drawer: A,
    skeleton: F,
    steps: D,
    image: B,
    input: J,
    layout: Q,
    list: ne,
    mentions: se,
    modal: $,
    progress: H,
    result: j,
    slider: K,
    breadcrumb: I,
    menu: q,
    pagination: k,
    empty: re,
    badge: X,
    radio: M,
    rate: Z,
    switch: V,
    transfer: ee,
    avatar: fe,
    message: ce,
    tag: he,
    table: ge,
    card: oe,
    tabs: de,
    timeline: Ne,
    timePicker: Ie,
    upload: ie,
    notification: pe,
    tree: tt,
    colorPicker: at,
    datePicker: rt,
    wave: We
  }, mt = Object.assign({}, g);
  Object.keys(Ve).forEach((xe) => {
    Ve[xe] !== void 0 && (mt[xe] = Ve[xe]);
  }), OO.forEach((xe) => {
    const ze = e[xe];
    ze && (mt[xe] = ze);
  });
  const Fe = ss(() => mt, mt, (xe, ze) => {
    const ft = Object.keys(xe), pt = Object.keys(ze);
    return ft.length !== pt.length || ft.some((we) => xe[we] !== ze[we]);
  }), qe = v.useMemo(() => ({
    prefixCls: st,
    csp: nt
  }), [st, nt]);
  let Oe = Xt ? ve(t) : t;
  const lt = v.useMemo(() => {
    var xe, ze, ft, pt;
    return so(((xe = wo.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((ft = (ze = Fe.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || ft === void 0 ? void 0 : ft.defaultValidateMessages) || {}, ((pt = Fe.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, a?.validateMessages || {});
  }, [Fe, a?.validateMessages]);
  Object.keys(lt).length > 0 && (Oe = /* @__PURE__ */ v.createElement(QC.Provider, {
    value: lt
  }, t)), s && (Oe = /* @__PURE__ */ v.createElement(n2, {
    locale: s,
    _ANT_MARK__: Lm
  }, Oe)), (st || nt) && (Oe = /* @__PURE__ */ v.createElement(jl.Provider, {
    value: qe
  }, Oe)), c && (Oe = /* @__PURE__ */ v.createElement(K2, {
    size: c
  }, Oe)), Oe = /* @__PURE__ */ v.createElement(bO, null, Oe);
  const Rt = v.useMemo(() => {
    const xe = Se || {}, {
      algorithm: ze,
      token: ft,
      components: pt
    } = xe, we = wO(xe, ["algorithm", "token", "components"]), Y = ze && (!Array.isArray(ze) || ze.length > 0) ? au(ze) : Wm, ae = {};
    return Object.entries(pt || {}).forEach((le) => {
      let [ye, $e] = le;
      const Re = Object.assign({}, $e);
      "algorithm" in Re && (Re.algorithm === !0 ? Re.theme = Y : (Array.isArray(Re.algorithm) || typeof Re.algorithm == "function") && (Re.theme = au(Re.algorithm)), delete Re.algorithm), ae[ye] = Re;
    }), Object.assign(Object.assign({}, we), {
      theme: Y,
      token: Object.assign(Object.assign({}, ds), ft),
      components: ae
    });
  }, [Se]);
  return y && (Oe = /* @__PURE__ */ v.createElement(qm.Provider, {
    value: Rt
  }, Oe)), S !== void 0 && (Oe = /* @__PURE__ */ v.createElement(G2, {
    disabled: S
  }, Oe)), /* @__PURE__ */ v.createElement(or.Provider, {
    value: Fe
  }, Oe);
}, Ln = (e) => {
  const t = v.useContext(or), r = v.useContext(Vl);
  return /* @__PURE__ */ v.createElement(PO, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Ln.ConfigContext = or;
Ln.SizeContext = vs;
Ln.config = TO;
Ln.useConfig = Y2;
Object.defineProperty(Ln, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && dr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), vs)
});
process.env.NODE_ENV !== "production" && (Ln.displayName = "ConfigProvider");
const Ul = Ln;
var cg = {};
Object.defineProperty(cg, "__esModule", { value: !0 });
var NO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, MO = cg.default = NO, IO = 1 / 0, AO = "[object Symbol]", DO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, FO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ps = "\\ud800-\\udfff", ug = "\\u0300-\\u036f\\ufe20-\\ufe23", lg = "\\u20d0-\\u20f0", fg = "\\u2700-\\u27bf", dg = "a-z\\xdf-\\xf6\\xf8-\\xff", $O = "\\xac\\xb1\\xd7\\xf7", kO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", LO = "\\u2000-\\u206f", jO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hg = "A-Z\\xc0-\\xd6\\xd8-\\xde", vg = "\\ufe0e\\ufe0f", pg = $O + kO + LO + jO, ql = "['’]", VO = "[" + ps + "]", yh = "[" + pg + "]", $a = "[" + ug + lg + "]", mg = "\\d+", zO = "[" + fg + "]", gg = "[" + dg + "]", yg = "[^" + ps + pg + mg + fg + dg + hg + "]", Ou = "\\ud83c[\\udffb-\\udfff]", HO = "(?:" + $a + "|" + Ou + ")", bg = "[^" + ps + "]", Ql = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gl = "[\\ud800-\\udbff][\\udc00-\\udfff]", no = "[" + hg + "]", Eg = "\\u200d", bh = "(?:" + gg + "|" + yg + ")", BO = "(?:" + no + "|" + yg + ")", Eh = "(?:" + ql + "(?:d|ll|m|re|s|t|ve))?", Sh = "(?:" + ql + "(?:D|LL|M|RE|S|T|VE))?", Sg = HO + "?", wg = "[" + vg + "]?", WO = "(?:" + Eg + "(?:" + [bg, Ql, Gl].join("|") + ")" + wg + Sg + ")*", Cg = wg + Sg + WO, UO = "(?:" + [zO, Ql, Gl].join("|") + ")" + Cg, qO = "(?:" + [bg + $a + "?", $a, Ql, Gl, VO].join("|") + ")", QO = RegExp(ql, "g"), GO = RegExp($a, "g"), KO = RegExp(Ou + "(?=" + Ou + ")|" + qO + Cg, "g"), YO = RegExp([
  no + "?" + gg + "+" + Eh + "(?=" + [yh, no, "$"].join("|") + ")",
  BO + "+" + Sh + "(?=" + [yh, no + bh, "$"].join("|") + ")",
  no + "?" + bh + "+" + Eh,
  no + "+" + Sh,
  mg,
  UO
].join("|"), "g"), XO = RegExp("[" + Eg + ps + ug + lg + vg + "]"), JO = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ZO = {
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
}, e_ = typeof Li == "object" && Li && Li.Object === Object && Li, t_ = typeof self == "object" && self && self.Object === Object && self, r_ = e_ || t_ || Function("return this")();
function n_(e, t, r, n) {
  var o = -1, i = e ? e.length : 0;
  for (n && i && (r = e[++o]); ++o < i; )
    r = t(r, e[o], o, e);
  return r;
}
function o_(e) {
  return e.split("");
}
function i_(e) {
  return e.match(DO) || [];
}
function a_(e) {
  return function(t) {
    return e?.[t];
  };
}
var s_ = a_(ZO);
function Og(e) {
  return XO.test(e);
}
function c_(e) {
  return JO.test(e);
}
function u_(e) {
  return Og(e) ? l_(e) : o_(e);
}
function l_(e) {
  return e.match(KO) || [];
}
function f_(e) {
  return e.match(YO) || [];
}
var d_ = Object.prototype, h_ = d_.toString, wh = r_.Symbol, Ch = wh ? wh.prototype : void 0, Oh = Ch ? Ch.toString : void 0;
function v_(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + t];
  return i;
}
function p_(e) {
  if (typeof e == "string")
    return e;
  if (E_(e))
    return Oh ? Oh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -IO ? "-0" : t;
}
function m_(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : v_(e, t, r);
}
function g_(e) {
  return function(t) {
    t = ms(t);
    var r = Og(t) ? u_(t) : void 0, n = r ? r[0] : t.charAt(0), o = r ? m_(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
function y_(e) {
  return function(t) {
    return n_(__(C_(t).replace(QO, "")), e, "");
  };
}
function b_(e) {
  return !!e && typeof e == "object";
}
function E_(e) {
  return typeof e == "symbol" || b_(e) && h_.call(e) == AO;
}
function ms(e) {
  return e == null ? "" : p_(e);
}
var S_ = y_(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? w_(t) : t);
});
function w_(e) {
  return O_(ms(e).toLowerCase());
}
function C_(e) {
  return e = ms(e), e && e.replace(FO, s_).replace(GO, "");
}
var O_ = g_("toUpperCase");
function __(e, t, r) {
  return e = ms(e), t = r ? void 0 : t, t === void 0 ? c_(e) ? f_(e) : i_(e) : e.match(t) || [];
}
var x_ = S_;
const R_ = /* @__PURE__ */ vl(x_);
var Ri = {}, _g = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(_g);
var T_ = _g.exports, Kl = {};
Object.defineProperty(Kl, "__esModule", {
  value: !0
});
Kl.default = P_;
function P_() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Yl = {};
Object.defineProperty(Yl, "__esModule", {
  value: !0
});
Yl.default = N_;
function N_(e, t) {
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
var xg = T_.default;
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
Ri.clearContainerCache = L_;
Ri.injectCSS = Xl;
Ri.removeCSS = $_;
var M_ = Ri.updateCSS = j_, I_ = xg(Kl), A_ = xg(Yl), _h = "data-rc-order", xh = "data-rc-priority", D_ = "rc-util-key", ka = /* @__PURE__ */ new Map();
function Rg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : D_;
}
function gs(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function F_(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Tg(e) {
  return Array.from((ka.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Xl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!(0, I_.default)())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = F_(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(_h, a), s && i && c.setAttribute(xh, "".concat(i)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var u = gs(t), l = u.firstChild;
  if (n) {
    if (s) {
      var f = Tg(u).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(_h)))
          return !1;
        var h = Number(d.getAttribute(xh) || 0);
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
function Pg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = gs(t);
  return Tg(r).find(function(n) {
    return n.getAttribute(Rg(t)) === e;
  });
}
function $_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Pg(e, t);
  if (r) {
    var n = gs(t);
    n.removeChild(r);
  }
}
function k_(e, t) {
  var r = ka.get(e);
  if (!r || !(0, A_.default)(document, r)) {
    var n = Xl("", t), o = n.parentNode;
    ka.set(e, o), e.removeChild(n);
  }
}
function L_() {
  ka.clear();
}
function j_(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = gs(r);
  k_(n, r);
  var o = Pg(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = Xl(e, r);
  return c.setAttribute(Rg(r), t), c;
}
var Jl = {};
Object.defineProperty(Jl, "__esModule", {
  value: !0
});
var V_ = Jl.getShadowRoot = z_;
Jl.inShadow = Mg;
function Ng(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Mg(e) {
  return Ng(e) !== e?.ownerDocument;
}
function z_(e) {
  return Mg(e) ? Ng(e) : null;
}
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.call = ef;
var Ig = Ir.default = void 0;
Ir.note = Fg;
Ir.noteOnce = kg;
Ir.preMessage = void 0;
Ir.resetWarned = $g;
Ir.warning = Dg;
Ir.warningOnce = Ti;
var _u = {}, Zl = [], Ag = function(t) {
  Zl.push(t);
};
Ir.preMessage = Ag;
function Dg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Zl.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Fg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Zl.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function $g() {
  _u = {};
}
function ef(e, t, r) {
  !t && !_u[r] && (e(!1, r), _u[r] = !0);
}
function Ti(e, t) {
  ef(Dg, e, t);
}
function kg(e, t) {
  ef(Fg, e, t);
}
Ti.preMessage = Ag;
Ti.resetWarned = $g;
Ti.noteOnce = kg;
var H_ = Ti;
Ig = Ir.default = H_;
function B_(e, t) {
  Ig(e, `[@ant-design/icons] ${t}`);
}
function Rh(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Th(e = {}) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[R_(r)] = n;
    }
    return t;
  }, {});
}
function xu(e, t, r) {
  return r ? Pe.createElement(e.tag, {
    key: t,
    ...Th(e.attrs),
    ...r
  }, (e.children || []).map((n, o) => xu(n, `${t}-${e.tag}-${o}`))) : Pe.createElement(e.tag, {
    key: t,
    ...Th(e.attrs)
  }, (e.children || []).map((n, o) => xu(n, `${t}-${e.tag}-${o}`)));
}
function Lg(e) {
  return An(e)[0];
}
function jg(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
const W_ = `
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
`, U_ = (e) => {
  const { csp: t, prefixCls: r } = Kt(jl);
  let n = W_;
  r && (n = n.replace(/anticon/g, r)), Wt(() => {
    const o = e.current, i = V_(o);
    M_(n, "@ant-design-icons", {
      prepend: !0,
      csp: t,
      attachTo: i
    });
  }, []);
}, ei = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function q_({ primaryColor: e, secondaryColor: t }) {
  ei.primaryColor = e, ei.secondaryColor = t || Lg(e), ei.calculated = !!t;
}
function Q_() {
  return {
    ...ei
  };
}
const ys = (e) => {
  const { icon: t, className: r, onClick: n, style: o, primaryColor: i, secondaryColor: a, ...s } = e, c = v.useRef();
  let u = ei;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: a || Lg(i)
  }), U_(c), B_(Rh(t), `icon should be icon definiton, but got ${t}`), !Rh(t))
    return null;
  let l = t;
  return l && typeof l.icon == "function" && (l = {
    ...l,
    icon: l.icon(u.primaryColor, u.secondaryColor)
  }), xu(l.icon, `svg-${l.name}`, {
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
ys.displayName = "IconReact";
ys.getTwoToneColors = Q_;
ys.setTwoToneColors = q_;
const tf = ys;
function Vg(e) {
  const [t, r] = jg(e);
  return tf.setTwoToneColors({
    primaryColor: t,
    secondaryColor: r
  });
}
function G_() {
  const e = tf.getTwoToneColors();
  return e.calculated ? [
    e.primaryColor,
    e.secondaryColor
  ] : e.primaryColor;
}
Vg(S2.primary);
const bs = /* @__PURE__ */ v.forwardRef((e, t) => {
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
  } = e, { prefixCls: l = "anticon", rootClassName: f } = v.useContext(jl), d = Me(f, l, {
    [`${l}-${n.name}`]: !!n.name,
    [`${l}-spin`]: !!o || n.name === "loading"
  }, r);
  let h = a;
  h === void 0 && s && (h = -1);
  const m = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, g] = jg(c);
  return /* @__PURE__ */ v.createElement("span", {
    role: "img",
    "aria-label": n.name,
    ...u,
    ref: t,
    tabIndex: h,
    onClick: s,
    className: d
  }, /* @__PURE__ */ v.createElement(tf, {
    icon: n,
    primaryColor: p,
    secondaryColor: g,
    style: m
  }));
});
bs.displayName = "AntdIcon";
bs.getTwoToneColor = G_;
bs.setTwoToneColor = Vg;
const Xr = bs, zg = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: MO
});
process.env.NODE_ENV !== "production" && (zg.displayName = "CheckCircleFilled");
const K_ = /* @__PURE__ */ v.forwardRef(zg);
var Hg = {};
Object.defineProperty(Hg, "__esModule", { value: !0 });
var Y_ = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, X_ = Hg.default = Y_;
const Bg = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: X_
});
process.env.NODE_ENV !== "production" && (Bg.displayName = "CloseCircleFilled");
const Wg = /* @__PURE__ */ v.forwardRef(Bg);
var Ug = {};
Object.defineProperty(Ug, "__esModule", { value: !0 });
var J_ = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Z_ = Ug.default = J_;
const qg = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: Z_
});
process.env.NODE_ENV !== "production" && (qg.displayName = "CloseOutlined");
const Qg = /* @__PURE__ */ v.forwardRef(qg);
var Gg = {};
Object.defineProperty(Gg, "__esModule", { value: !0 });
var ex = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, tx = Gg.default = ex;
const Kg = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: tx
});
process.env.NODE_ENV !== "production" && (Kg.displayName = "ExclamationCircleFilled");
const rx = /* @__PURE__ */ v.forwardRef(Kg);
var Yg = {};
Object.defineProperty(Yg, "__esModule", { value: !0 });
var nx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, ox = Yg.default = nx;
const Xg = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: ox
});
process.env.NODE_ENV !== "production" && (Xg.displayName = "InfoCircleFilled");
const ix = /* @__PURE__ */ v.forwardRef(Xg);
var ax = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, sx = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, cx = "".concat(ax, " ").concat(sx).split(/[\s\n]+/), ux = "aria-", lx = "data-";
function Ph(e, t) {
  return e.indexOf(t) === 0;
}
function La(e) {
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
    (r.aria && (o === "role" || Ph(o, ux)) || // Data
    r.data && Ph(o, lx) || // Attr
    r.attr && cx.includes(o)) && (n[o] = e[o]);
  }), n;
}
const {
  isValidElement: Jg
} = v;
function fx(e) {
  return e && Jg(e) && e.type === v.Fragment;
}
function dx(e, t, r) {
  return Jg(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function Zg(e, t) {
  return dx(e, e, t);
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
}, e0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, c = e.content, u = e.closable, l = e.closeIcon, f = l === void 0 ? "x" : l, d = e.props, h = e.onClick, m = e.onNoticeClose, p = e.times, g = v.useState(!1), E = G(g, 2), y = E[0], S = E[1], w = function() {
    m(s);
  }, b = function(P) {
    (P.key === "Enter" || P.code === "Enter" || P.keyCode === te.ENTER) && w();
  };
  v.useEffect(function() {
    if (!y && a > 0) {
      var O = setTimeout(function() {
        w();
      }, a * 1e3);
      return function() {
        clearTimeout(O);
      };
    }
  }, [a, y, p]);
  var C = "".concat(r, "-notice");
  return /* @__PURE__ */ v.createElement("div", et({}, d, {
    ref: t,
    className: Me(C, o, be({}, "".concat(C, "-closable"), u)),
    style: n,
    onMouseEnter: function() {
      S(!0);
    },
    onMouseLeave: function() {
      S(!1);
    },
    onClick: h
  }), /* @__PURE__ */ v.createElement("div", {
    className: "".concat(C, "-content")
  }, c), u && /* @__PURE__ */ v.createElement("a", {
    tabIndex: 0,
    className: "".concat(C, "-close"),
    onKeyDown: b,
    onClick: function(P) {
      P.preventDefault(), P.stopPropagation(), w();
    }
  }, f));
}), t0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, c = e.style, u = e.onAllRemoved, l = v.useState([]), f = G(l, 2), d = f[0], h = f[1], m = function(O) {
    var P, N = d.find(function(x) {
      return x.key === O;
    });
    N == null || (P = N.onClose) === null || P === void 0 || P.call(N), h(function(x) {
      return x.filter(function(L) {
        return L.key !== O;
      });
    });
  };
  v.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        h(function(P) {
          var N = Ee(P), x = N.findIndex(function(_) {
            return _.key === O.key;
          }), L = W({}, O);
          if (x >= 0) {
            var R;
            L.times = (((R = P[x]) === null || R === void 0 ? void 0 : R.times) || 0) + 1, N[x] = L;
          } else
            L.times = 0, N.push(L);
          return a > 0 && N.length > a && (N = N.slice(-a)), N;
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
  var p = v.useState({}), g = G(p, 2), E = g[0], y = g[1];
  v.useEffect(function() {
    var C = {};
    d.forEach(function(O) {
      var P = O.placement, N = P === void 0 ? "topRight" : P;
      N && (C[N] = C[N] || [], C[N].push(O));
    }), Object.keys(E).forEach(function(O) {
      C[O] = C[O] || [];
    }), y(C);
  }, [d]);
  var S = function(O) {
    y(function(P) {
      var N = W({}, P), x = N[O] || [];
      return x.length || delete N[O], N;
    });
  }, w = v.useRef(!1);
  if (v.useEffect(function() {
    Object.keys(E).length > 0 ? w.current = !0 : w.current && (u?.(), w.current = !1);
  }, [E]), !o)
    return null;
  var b = Object.keys(E);
  return /* @__PURE__ */ el(/* @__PURE__ */ v.createElement(v.Fragment, null, b.map(function(C) {
    var O = E[C], P = O.map(function(x) {
      return {
        config: x,
        key: x.key
      };
    }), N = typeof i == "function" ? i(C) : i;
    return /* @__PURE__ */ v.createElement(yO, et({
      key: C,
      className: Me(n, "".concat(n, "-").concat(C), s?.(C)),
      style: c?.(C),
      keys: P,
      motionAppear: !0
    }, N, {
      onAllRemoved: function() {
        S(C);
      }
    }), function(x, L) {
      var R = x.config, _ = x.className, T = x.style, A = R.key, F = R.times, D = R.className, B = R.style;
      return /* @__PURE__ */ v.createElement(e0, et({}, R, {
        ref: L,
        prefixCls: n,
        className: Me(_, D),
        style: W(W({}, T), B),
        times: F,
        key: A,
        eventKey: A,
        onNoticeClose: m
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (t0.displayName = "Notifications");
var hx = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], vx = function() {
  return document.body;
}, Nh = 0;
function px() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function mx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? vx : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, c = e.onAllRemoved, u = Nt(e, hx), l = v.useState(), f = G(l, 2), d = f[0], h = f[1], m = v.useRef(), p = /* @__PURE__ */ v.createElement(t0, {
    container: d,
    ref: m,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: c
  }), g = v.useState([]), E = G(g, 2), y = E[0], S = E[1], w = v.useMemo(function() {
    return {
      open: function(C) {
        var O = px(u, C);
        (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(Nh), Nh += 1), S(function(P) {
          return [].concat(Ee(P), [{
            type: "open",
            config: O
          }]);
        });
      },
      close: function(C) {
        S(function(O) {
          return [].concat(Ee(O), [{
            type: "close",
            key: C
          }]);
        });
      },
      destroy: function() {
        S(function(C) {
          return [].concat(Ee(C), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return v.useEffect(function() {
    h(r());
  }), v.useEffect(function() {
    m.current && y.length && (y.forEach(function(b) {
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
    }), S(function(b) {
      return b.filter(function(C) {
        return !y.includes(C);
      });
    }));
  }, [y]), [w, p];
}
var r0 = {};
Object.defineProperty(r0, "__esModule", { value: !0 });
var gx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, yx = r0.default = gx;
const n0 = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: yx
});
process.env.NODE_ENV !== "production" && (n0.displayName = "LoadingOutlined");
const rf = /* @__PURE__ */ v.forwardRef(n0), bx = (e) => {
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
    contentBg: E
  } = e, y = `${t}-notice`, S = new Vt("MessageMoveIn", {
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
  }), w = new Vt("MessageMoveOut", {
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
    [`${y}-content`]: {
      display: "inline-block",
      padding: g,
      background: E,
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
      [t]: Object.assign(Object.assign({}, hs(e)), {
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
          animationName: S,
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
        [y]: Object.assign({}, b)
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
}, o0 = _i("Message", (e) => {
  const t = tr(e, {
    height: 150
  });
  return [bx(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), {
  clientOnly: !0
});
var Ex = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Sx = {
  info: /* @__PURE__ */ v.createElement(ix, null),
  success: /* @__PURE__ */ v.createElement(K_, null),
  error: /* @__PURE__ */ v.createElement(Wg, null),
  warning: /* @__PURE__ */ v.createElement(rx, null),
  loading: /* @__PURE__ */ v.createElement(rf, null)
}, i0 = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ v.createElement("div", {
    className: Me(`${t}-custom-content`, `${t}-${r}`)
  }, n || Sx[r], /* @__PURE__ */ v.createElement("span", null, o));
}, wx = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = Ex(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = v.useContext(or), c = t || s("message"), [, u] = o0(c);
  return /* @__PURE__ */ v.createElement(e0, Object.assign({}, a, {
    prefixCls: c,
    className: Me(r, u, `${c}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ v.createElement(i0, {
      prefixCls: c,
      type: n,
      icon: o
    }, i)
  }));
}, Cx = wx;
function Ox(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function nf(e) {
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
var _x = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const xx = 8, Rx = 3, Tx = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = Rx,
    rtl: s,
    transitionName: c,
    onAllRemoved: u
  } = e, {
    getPrefixCls: l,
    getPopupContainer: f,
    message: d
  } = v.useContext(or), h = n || l("message"), [, m] = o0(h), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? xx
  }), g = () => Me(m, {
    [`${h}-rtl`]: s
  }), E = () => Ox(h, c), y = /* @__PURE__ */ v.createElement("span", {
    className: `${h}-close-x`
  }, /* @__PURE__ */ v.createElement(Qg, {
    className: `${h}-close-icon`
  })), [S, w] = mx({
    prefixCls: h,
    style: p,
    className: g,
    motion: E,
    closable: !1,
    closeIcon: y,
    duration: a,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: i,
    onAllRemoved: u
  });
  return v.useImperativeHandle(t, () => Object.assign(Object.assign({}, S), {
    prefixCls: h,
    hashId: m,
    message: d
  })), w;
});
let Mh = 0;
function a0(e) {
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
        key: E,
        className: y,
        style: S,
        onClose: w
      } = c, b = _x(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let C = E;
      return C == null && (Mh += 1, C = `antd-message-${Mh}`), nf((O) => (u(Object.assign(Object.assign({}, b), {
        key: C,
        content: /* @__PURE__ */ v.createElement(i0, {
          prefixCls: l,
          type: g,
          icon: p
        }, m),
        placement: "top",
        className: Me(g && `${h}-${g}`, f, y, d?.className),
        style: Object.assign(Object.assign({}, d?.style), S),
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
  }, []), /* @__PURE__ */ v.createElement(Tx, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function Px(e) {
  return a0(e);
}
function hr() {
  hr = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(R, _, T) {
    R[_] = T.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(R, _, T) {
    return Object.defineProperty(R, _, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[_];
  }
  try {
    c({}, "");
  } catch {
    c = function(T, A, F) {
      return T[A] = F;
    };
  }
  function u(R, _, T, A) {
    var F = _ && _.prototype instanceof d ? _ : d, D = Object.create(F.prototype), B = new N(A || []);
    return n(D, "_invoke", {
      value: b(R, T, B)
    }), D;
  }
  function l(R, _, T) {
    try {
      return {
        type: "normal",
        arg: R.call(_, T)
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
  var g = Object.getPrototypeOf, E = g && g(g(x([])));
  E && E !== t && r.call(E, i) && (p = E);
  var y = m.prototype = d.prototype = Object.create(p);
  function S(R) {
    ["next", "throw", "return"].forEach(function(_) {
      c(R, _, function(T) {
        return this._invoke(_, T);
      });
    });
  }
  function w(R, _) {
    function T(F, D, B, Q) {
      var ne = l(R[F], R, D);
      if (ne.type !== "throw") {
        var se = ne.arg, $ = se.value;
        return $ && Be($) == "object" && r.call($, "__await") ? _.resolve($.__await).then(function(H) {
          T("next", H, B, Q);
        }, function(H) {
          T("throw", H, B, Q);
        }) : _.resolve($).then(function(H) {
          se.value = H, B(se);
        }, function(H) {
          return T("throw", H, B, Q);
        });
      }
      Q(ne.arg);
    }
    var A;
    n(this, "_invoke", {
      value: function(D, B) {
        function Q() {
          return new _(function(ne, se) {
            T(D, B, ne, se);
          });
        }
        return A = A ? A.then(Q, Q) : Q();
      }
    });
  }
  function b(R, _, T) {
    var A = "suspendedStart";
    return function(F, D) {
      if (A === "executing")
        throw new Error("Generator is already running");
      if (A === "completed") {
        if (F === "throw")
          throw D;
        return L();
      }
      for (T.method = F, T.arg = D; ; ) {
        var B = T.delegate;
        if (B) {
          var Q = C(B, T);
          if (Q) {
            if (Q === f)
              continue;
            return Q;
          }
        }
        if (T.method === "next")
          T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (A === "suspendedStart")
            throw A = "completed", T.arg;
          T.dispatchException(T.arg);
        } else
          T.method === "return" && T.abrupt("return", T.arg);
        A = "executing";
        var ne = l(R, _, T);
        if (ne.type === "normal") {
          if (A = T.done ? "completed" : "suspendedYield", ne.arg === f)
            continue;
          return {
            value: ne.arg,
            done: T.done
          };
        }
        ne.type === "throw" && (A = "completed", T.method = "throw", T.arg = ne.arg);
      }
    };
  }
  function C(R, _) {
    var T = _.method, A = R.iterator[T];
    if (A === void 0)
      return _.delegate = null, T === "throw" && R.iterator.return && (_.method = "return", _.arg = void 0, C(R, _), _.method === "throw") || T !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + T + "' method")), f;
    var F = l(A, R.iterator, _.arg);
    if (F.type === "throw")
      return _.method = "throw", _.arg = F.arg, _.delegate = null, f;
    var D = F.arg;
    return D ? D.done ? (_[R.resultName] = D.value, _.next = R.nextLoc, _.method !== "return" && (_.method = "next", _.arg = void 0), _.delegate = null, f) : D : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, f);
  }
  function O(R) {
    var _ = {
      tryLoc: R[0]
    };
    1 in R && (_.catchLoc = R[1]), 2 in R && (_.finallyLoc = R[2], _.afterLoc = R[3]), this.tryEntries.push(_);
  }
  function P(R) {
    var _ = R.completion || {};
    _.type = "normal", delete _.arg, R.completion = _;
  }
  function N(R) {
    this.tryEntries = [{
      tryLoc: "root"
    }], R.forEach(O, this), this.reset(!0);
  }
  function x(R) {
    if (R) {
      var _ = R[i];
      if (_)
        return _.call(R);
      if (typeof R.next == "function")
        return R;
      if (!isNaN(R.length)) {
        var T = -1, A = function F() {
          for (; ++T < R.length; )
            if (r.call(R, T))
              return F.value = R[T], F.done = !1, F;
          return F.value = void 0, F.done = !0, F;
        };
        return A.next = A;
      }
    }
    return {
      next: L
    };
  }
  function L() {
    return {
      value: void 0,
      done: !0
    };
  }
  return h.prototype = m, n(y, "constructor", {
    value: m,
    configurable: !0
  }), n(m, "constructor", {
    value: h,
    configurable: !0
  }), h.displayName = c(m, s, "GeneratorFunction"), e.isGeneratorFunction = function(R) {
    var _ = typeof R == "function" && R.constructor;
    return !!_ && (_ === h || (_.displayName || _.name) === "GeneratorFunction");
  }, e.mark = function(R) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(R, m) : (R.__proto__ = m, c(R, s, "GeneratorFunction")), R.prototype = Object.create(y), R;
  }, e.awrap = function(R) {
    return {
      __await: R
    };
  }, S(w.prototype), c(w.prototype, a, function() {
    return this;
  }), e.AsyncIterator = w, e.async = function(R, _, T, A, F) {
    F === void 0 && (F = Promise);
    var D = new w(u(R, _, T, A), F);
    return e.isGeneratorFunction(_) ? D : D.next().then(function(B) {
      return B.done ? B.value : D.next();
    });
  }, S(y), c(y, s, "Generator"), c(y, i, function() {
    return this;
  }), c(y, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(R) {
    var _ = Object(R), T = [];
    for (var A in _)
      T.push(A);
    return T.reverse(), function F() {
      for (; T.length; ) {
        var D = T.pop();
        if (D in _)
          return F.value = D, F.done = !1, F;
      }
      return F.done = !0, F;
    };
  }, e.values = x, N.prototype = {
    constructor: N,
    reset: function(_) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(P), !_)
        for (var T in this)
          T.charAt(0) === "t" && r.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = void 0);
    },
    stop: function() {
      this.done = !0;
      var _ = this.tryEntries[0].completion;
      if (_.type === "throw")
        throw _.arg;
      return this.rval;
    },
    dispatchException: function(_) {
      if (this.done)
        throw _;
      var T = this;
      function A(se, $) {
        return B.type = "throw", B.arg = _, T.next = se, $ && (T.method = "next", T.arg = void 0), !!$;
      }
      for (var F = this.tryEntries.length - 1; F >= 0; --F) {
        var D = this.tryEntries[F], B = D.completion;
        if (D.tryLoc === "root")
          return A("end");
        if (D.tryLoc <= this.prev) {
          var Q = r.call(D, "catchLoc"), ne = r.call(D, "finallyLoc");
          if (Q && ne) {
            if (this.prev < D.catchLoc)
              return A(D.catchLoc, !0);
            if (this.prev < D.finallyLoc)
              return A(D.finallyLoc);
          } else if (Q) {
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
    abrupt: function(_, T) {
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var F = this.tryEntries[A];
        if (F.tryLoc <= this.prev && r.call(F, "finallyLoc") && this.prev < F.finallyLoc) {
          var D = F;
          break;
        }
      }
      D && (_ === "break" || _ === "continue") && D.tryLoc <= T && T <= D.finallyLoc && (D = null);
      var B = D ? D.completion : {};
      return B.type = _, B.arg = T, D ? (this.method = "next", this.next = D.finallyLoc, f) : this.complete(B);
    },
    complete: function(_, T) {
      if (_.type === "throw")
        throw _.arg;
      return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && T && (this.next = T), f;
    },
    finish: function(_) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var A = this.tryEntries[T];
        if (A.finallyLoc === _)
          return this.complete(A.completion, A.afterLoc), P(A), f;
      }
    },
    catch: function(_) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var A = this.tryEntries[T];
        if (A.tryLoc === _) {
          var F = A.completion;
          if (F.type === "throw") {
            var D = F.arg;
            P(A);
          }
          return D;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(_, T, A) {
      return this.delegate = {
        iterator: x(_),
        resultName: T,
        nextLoc: A
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function Ih(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (u) {
    r(u);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function Mo(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(c) {
        Ih(i, n, o, a, s, "next", c);
      }
      function s(c) {
        Ih(i, n, o, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var Pi = W({}, Py), Nx = Pi.version, Mx = Pi.render, Ix = Pi.unmountComponentAtNode, Es;
try {
  var Ax = Number((Nx || "").split(".")[0]);
  Ax >= 18 && (Es = Pi.createRoot);
} catch {
}
function Ah(e) {
  var t = Pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Be(t) === "object" && (t.usingClientEntryPoint = e);
}
var ja = "__rc_react_root__";
function Dx(e, t) {
  Ah(!0);
  var r = t[ja] || Es(t);
  Ah(!1), r.render(e), t[ja] = r;
}
function Fx(e, t) {
  Mx(e, t);
}
function s0(e, t) {
  if (Es) {
    Dx(e, t);
    return;
  }
  Fx(e, t);
}
function $x(e) {
  return Ru.apply(this, arguments);
}
function Ru() {
  return Ru = Mo(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[ja]) === null || o === void 0 || o.unmount(), delete t[ja];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Ru.apply(this, arguments);
}
function kx(e) {
  Ix(e);
}
function Lx(e) {
  return Tu.apply(this, arguments);
}
function Tu() {
  return Tu = Mo(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Es === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", $x(t));
          case 2:
            kx(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Tu.apply(this, arguments);
}
const c0 = function(e) {
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
}, jx = (e) => {
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
}, Vx = _i("Wave", (e) => [jx(e)]);
function zx(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function sc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && zx(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Hx(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return sc(t) ? t : sc(r) ? r : sc(n) ? n : null;
}
function cc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Bx = (e) => {
  const {
    className: t,
    target: r
  } = e, n = v.useRef(null), [o, i] = v.useState(null), [a, s] = v.useState([]), [c, u] = v.useState(0), [l, f] = v.useState(0), [d, h] = v.useState(0), [m, p] = v.useState(0), [g, E] = v.useState(!1), y = {
    left: c,
    top: l,
    width: d,
    height: m,
    borderRadius: a.map((w) => `${w}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function S() {
    const w = getComputedStyle(r);
    i(Hx(r));
    const b = w.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: O
    } = w;
    u(b ? r.offsetLeft : cc(-parseFloat(C))), f(b ? r.offsetTop : cc(-parseFloat(O))), h(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: P,
      borderTopRightRadius: N,
      borderBottomLeftRadius: x,
      borderBottomRightRadius: L
    } = w;
    s([P, N, L, x].map((R) => cc(parseFloat(R))));
  }
  return v.useEffect(() => {
    if (r) {
      const w = Ut(() => {
        S(), E(!0);
      });
      let b;
      return typeof ResizeObserver < "u" && (b = new ResizeObserver(S), b.observe(r)), () => {
        Ut.cancel(w), b?.disconnect();
      };
    }
  }, []), g ? /* @__PURE__ */ v.createElement(xi, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, b) => {
      var C;
      if (b.deadline || b.propertyName === "opacity") {
        const O = (C = n.current) === null || C === void 0 ? void 0 : C.parentElement;
        Lx(O).then(() => {
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
      className: Me(t, b),
      style: y
    });
  }) : null;
}, Wx = (e, t) => {
  let {
    className: r
  } = t;
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e?.insertBefore(n, e?.firstChild), s0(/* @__PURE__ */ v.createElement(Bx, {
    target: e,
    className: r
  }), n);
}, Ux = Wx;
function qx(e, t, r) {
  const {
    wave: n
  } = v.useContext(or), [, o] = kn();
  return Tr((a) => {
    const s = e.current;
    if (n?.disabled || !s)
      return;
    const {
      showEffect: c
    } = n || {};
    (c || Ux)(s, {
      className: t,
      token: o,
      component: r,
      event: a
    });
  });
}
const u0 = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = Kt(or), i = De(null), a = o("wave"), [, s] = Vx(a), c = qx(i, Me(a, s), n);
  if (Pe.useEffect(() => {
    const l = i.current;
    if (!l || l.nodeType !== 1 || r)
      return;
    const f = (d) => {
      d.target.tagName === "INPUT" || !c0(d.target) || // No need wave
      !l.getAttribute || l.getAttribute("disabled") || l.disabled || l.className.includes("disabled") || l.className.includes("-leave") || c(d);
    };
    return l.addEventListener("click", f, !0), () => {
      l.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ Pe.isValidElement(t))
    return t ?? null;
  const u = Oi(t) ? Po(t.ref, i) : i;
  return Zg(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (u0.displayName = "Wave");
const Qx = u0, Gx = (e) => {
  const t = Pe.useContext(vs);
  return Pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, l0 = Gx;
globalThis && globalThis.__rest;
const Kx = /* @__PURE__ */ v.createContext(null), f0 = (e, t) => {
  const r = v.useContext(Kx), n = v.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Me(`${e}-compact${s}item`, {
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
}, Yx = /* @__PURE__ */ Ju((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = Me(`${i}-icon`, r);
  return /* @__PURE__ */ Pe.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), d0 = Yx, Dh = /* @__PURE__ */ Ju((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Me(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Pe.createElement(d0, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ Pe.createElement(rf, {
    className: i
  }));
}), uc = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), lc = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Xx = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ Pe.createElement(Dh, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ Pe.createElement(xi, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: uc,
    onAppearActive: lc,
    onEnterStart: uc,
    onEnterActive: lc,
    onLeaveStart: lc,
    onLeaveActive: uc
  }, (s, c) => {
    let {
      className: u,
      style: l
    } = s;
    return /* @__PURE__ */ Pe.createElement(Dh, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), l),
      ref: c,
      iconClassName: u
    });
  });
}, Jx = Xx;
var Zx = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const h0 = /* @__PURE__ */ v.createContext(void 0), eR = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(or), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = Zx(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , c] = kn();
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
  const l = Me(s, {
    [`${s}-${u}`]: u,
    [`${s}-rtl`]: r === "rtl"
  }, i, c);
  return /* @__PURE__ */ v.createElement(h0.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, a, {
    className: l
  })));
}, tR = eR, Fh = /^[\u4e00-\u9fa5]{2}$/, Pu = Fh.test.bind(Fh);
function rR(e) {
  return typeof e == "string";
}
function Yi(e) {
  return e === "text" || e === "link";
}
function nR(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && rR(e.type) && Pu(e.props.children) ? Zg(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? Pu(e) ? /* @__PURE__ */ Pe.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Pe.createElement("span", null, e) : fx(e) ? /* @__PURE__ */ Pe.createElement("span", null, e) : e;
}
function oR(e, t) {
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
  }), Pe.Children.map(n, (o) => nR(o, t));
}
function iR(e, t, r) {
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
function aR(e, t, r) {
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
function v0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, iR(e, n, t)), aR(r, n, t))
  };
}
function sR(e, t) {
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
function cR(e, t) {
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
function uR(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, sR(e, t)), cR(e.componentCls, t))
  };
}
const $h = (e, t) => ({
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
}), lR = (e) => {
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
      $h(`${t}-primary`, o),
      $h(`${t}-danger`, i)
    ]
  };
}, fR = lR, dR = (e) => {
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
      "&:not(:disabled)": Object.assign({}, H2(e)),
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
}, Yr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), hR = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), vR = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), pR = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), hi = (e, t, r, n, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, Yr(e, Object.assign({
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
}), of = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, pR(e))
}), p0 = (e) => Object.assign({}, of(e)), Va = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), m0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, p0(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Yr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), hi(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Yr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), hi(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), of(e))
}), mR = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, p0(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Yr(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), hi(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Yr(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), hi(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), of(e))
}), gR = (e) => Object.assign(Object.assign({}, m0(e)), {
  borderStyle: "dashed"
}), yR = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Yr(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Va(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Yr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Va(e))
}), bR = (e) => Object.assign(Object.assign(Object.assign({}, Yr(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Va(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Va(e)), Yr(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), ER = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: m0(e),
    [`${t}-primary`]: mR(e),
    [`${t}-dashed`]: gR(e),
    [`${t}-link`]: yR(e),
    [`${t}-text`]: bR(e),
    [`${t}-ghost`]: hi(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, af = function(e) {
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
      [`${r}${r}-circle${t}`]: hR(e)
    },
    {
      [`${r}${r}-round${t}`]: vR(e)
    }
  ];
}, SR = (e) => af(e), wR = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return af(t, `${e.componentCls}-sm`);
}, CR = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return af(t, `${e.componentCls}-lg`);
}, OR = (e) => {
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
}, _R = _i("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: r
  } = e, n = tr(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: r,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    dR(n),
    // Size
    wR(n),
    SR(n),
    CR(n),
    // Block
    OR(n),
    // Group (type, ghost, danger, loading)
    ER(n),
    // Button Group
    fR(n),
    // Space Compact
    v0(e),
    uR(e)
  ];
});
var xR = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function RR(e) {
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
const TR = (e, t) => {
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
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: S,
    style: w = {}
  } = e, b = xR(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: O,
    direction: P,
    button: N
  } = Kt(or), x = C("btn", i), [L, R] = _R(x), _ = Kt(Bl), T = f ?? _, A = Kt(h0), F = po(() => RR(o), [o]), [D, B] = fr(F.loading), [Q, ne] = fr(!1), $ = Po(t, /* @__PURE__ */ Ry()), H = xy.count(m) === 1 && !p && !Yi(a);
  Wt(() => {
    let oe = null;
    F.delay > 0 ? oe = setTimeout(() => {
      oe = null, B(!0);
    }, F.delay) : B(F.loading);
    function de() {
      oe && (clearTimeout(oe), oe = null);
    }
    return de;
  }, [F]), Wt(() => {
    if (!$ || !$.current || O === !1)
      return;
    const oe = $.current.textContent;
    H && Pu(oe) ? Q || ne(!0) : Q && ne(!1);
  }, [$]);
  const j = (oe) => {
    const {
      onClick: de
    } = e;
    if (D || T) {
      oe.preventDefault();
      return;
    }
    de?.(oe);
  };
  process.env.NODE_ENV !== "production" && dr(!(typeof p == "string" && p.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && dr(!(g && Yi(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const K = O !== !1, {
    compactSize: I,
    compactItemClassnames: q
  } = f0(x, P), k = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, J = l0((oe) => {
    var de, Ne;
    return (Ne = (de = u ?? I) !== null && de !== void 0 ? de : A) !== null && Ne !== void 0 ? Ne : oe;
  }), re = J && k[J] || "", X = D ? "loading" : p, M = Ml(b, ["navigate"]), Z = Me(x, R, {
    [`${x}-${c}`]: c !== "default" && c,
    [`${x}-${a}`]: a,
    [`${x}-${re}`]: re,
    [`${x}-icon-only`]: !m && m !== 0 && !!X,
    [`${x}-background-ghost`]: g && !Yi(a),
    [`${x}-loading`]: D,
    [`${x}-two-chinese-chars`]: Q && K && !D,
    [`${x}-block`]: E,
    [`${x}-dangerous`]: !!s,
    [`${x}-rtl`]: P === "rtl"
  }, q, d, h, N?.className), V = Object.assign(Object.assign({}, N?.style), w), ee = Me(S?.icon, (r = N?.classNames) === null || r === void 0 ? void 0 : r.icon), fe = Object.assign(Object.assign({}, l?.icon || {}), ((n = N?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), ce = p && !D ? /* @__PURE__ */ Pe.createElement(d0, {
    prefixCls: x,
    className: ee,
    style: fe
  }, p) : /* @__PURE__ */ Pe.createElement(Jx, {
    existIcon: !!p,
    prefixCls: x,
    loading: !!D
  }), he = m || m === 0 ? oR(m, H && K) : null;
  if (M.href !== void 0)
    return L(/* @__PURE__ */ Pe.createElement("a", Object.assign({}, M, {
      className: Me(Z, {
        [`${x}-disabled`]: T
      }),
      style: V,
      onClick: j,
      ref: $
    }), ce, he));
  let ge = /* @__PURE__ */ Pe.createElement("button", Object.assign({}, b, {
    type: y,
    className: Z,
    style: V,
    onClick: j,
    disabled: T,
    ref: $
  }), ce, he);
  return Yi(a) || (ge = /* @__PURE__ */ Pe.createElement(Qx, {
    component: "Button",
    disabled: !!D
  }, ge)), L(ge);
}, Ss = /* @__PURE__ */ Ju(TR);
process.env.NODE_ENV !== "production" && (Ss.displayName = "Button");
Ss.Group = tR;
Ss.__ANT_BUTTON = !0;
const PR = Ss, NR = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
var g0 = /* @__PURE__ */ v.createContext(null), kh = [];
function MR(e, t) {
  var r = v.useState(function() {
    if (!Yt())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = G(r, 1), o = n[0], i = v.useRef(!1), a = v.useContext(g0), s = v.useState(kh), c = G(s, 2), u = c[0], l = c[1], f = a || (i.current ? void 0 : function(m) {
    l(function(p) {
      var g = [m].concat(Ee(p));
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
  return xt(function() {
    return e ? a ? a(d) : d() : h(), h;
  }, [e]), xt(function() {
    u.length && (u.forEach(function(m) {
      return m();
    }), l(kh));
  }, [u]), [o, f];
}
var fc;
function IR(e) {
  if (typeof document > "u")
    return 0;
  if (e || fc === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var o = t.offsetWidth;
    r.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = r.clientWidth), document.body.removeChild(r), fc = o - i;
  }
  return fc;
}
function Lh(e) {
  var t = e.match(/^(.*)px$/), r = Number(t?.[1]);
  return Number.isNaN(r) ? IR() : r;
}
function AR(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: Lh(r),
    height: Lh(n)
  };
}
function DR() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var FR = "rc-util-locker-".concat(Date.now()), jh = 0;
function $R(e) {
  var t = !!e, r = v.useState(function() {
    return jh += 1, "".concat(FR, "_").concat(jh);
  }), n = G(r, 1), o = n[0];
  xt(function() {
    if (t) {
      var i = AR(document.body).width, a = DR();
      li(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      Ia(o);
    return function() {
      Ia(o);
    };
  }, [t, o]);
}
var Vh = !1;
function kR(e) {
  return typeof e == "boolean" && (Vh = e), Vh;
}
var zh = function(t) {
  return t === !1 ? !1 : !Yt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, sf = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, u = v.useState(r), l = G(u, 2), f = l[0], d = l[1], h = f || r;
  process.env.NODE_ENV !== "production" && ke(Yt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && d(r);
  }, [r, s]);
  var m = v.useState(function() {
    return zh(o);
  }), p = G(m, 2), g = p[0], E = p[1];
  v.useEffect(function() {
    var R = zh(o);
    E(R ?? null);
  });
  var y = MR(h && !g, i), S = G(y, 2), w = S[0], b = S[1], C = g ?? w;
  $R(n && r && Yt() && (C === w || C === document.body));
  var O = null;
  if (c && Oi(c) && t) {
    var P = c;
    O = P.ref;
  }
  var N = Nl(O, t);
  if (!h || !Yt() || g === void 0)
    return null;
  var x = C === !1 || kR(), L = c;
  return t && (L = /* @__PURE__ */ v.cloneElement(c, {
    ref: N
  })), /* @__PURE__ */ v.createElement(g0.Provider, {
    value: b
  }, x ? L : /* @__PURE__ */ el(L, C));
});
process.env.NODE_ENV !== "production" && (sf.displayName = "Portal");
function LR() {
  var e = W({}, v);
  return e.useId;
}
var Hh = 0;
function jR(e) {
  var t = v.useState("ssr-id"), r = G(t, 2), n = r[0], o = r[1], i = LR(), a = i?.();
  return v.useEffect(function() {
    if (!i) {
      var s = Hh;
      Hh += 1, o("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || n);
}
var Sn = "RC_FORM_INTERNAL_HOOKS", ct = function() {
  ke(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Co = /* @__PURE__ */ v.createContext({
  getFieldValue: ct,
  getFieldsValue: ct,
  getFieldError: ct,
  getFieldWarning: ct,
  getFieldsError: ct,
  isFieldsTouched: ct,
  isFieldTouched: ct,
  isFieldValidating: ct,
  isFieldsValidating: ct,
  resetFields: ct,
  setFields: ct,
  setFieldValue: ct,
  setFieldsValue: ct,
  validateFields: ct,
  submit: ct,
  getInternalHooks: function() {
    return ct(), {
      dispatch: ct,
      initEntityValue: ct,
      registerField: ct,
      useSubscribe: ct,
      setInitialValues: ct,
      destroyForm: ct,
      setCallbacks: ct,
      registerWatch: ct,
      getFields: ct,
      setValidateMessages: ct,
      setPreserve: ct,
      getInitialValue: ct
    };
  }
}), za = /* @__PURE__ */ v.createContext(null);
function Nu(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function VR(e) {
  return e && !!e._init;
}
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function zR(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vi(e, t);
}
function Mu(e) {
  return Mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mu(e);
}
function vi(e, t) {
  return vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, vi(e, t);
}
function HR() {
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
function ya(e, t, r) {
  return HR() ? ya = Reflect.construct.bind() : ya = function(o, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var c = Function.bind.apply(o, s), u = new c();
    return a && vi(u, a.prototype), u;
  }, ya.apply(null, arguments);
}
function BR(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Iu(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Iu = function(n) {
    if (n === null || !BR(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return ya(n, arguments, Mu(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), vi(o, n);
  }, Iu(e);
}
var WR = /%[sdj%]/g, y0 = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (y0 = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Au(e) {
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
    var a = e.replace(WR, function(s) {
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
function UR(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ft(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || UR(t) && typeof e == "string" && !e);
}
function qR(e, t, r) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, s || []), o++, o === i && r(n);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function Bh(e, t, r) {
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
function QR(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Wh = /* @__PURE__ */ function(e) {
  zR(t, e);
  function t(r, n) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o;
  }
  return t;
}(/* @__PURE__ */ Iu(Error));
function GR(e, t, r, n, o) {
  if (t.first) {
    var i = new Promise(function(d, h) {
      var m = function(E) {
        return n(E), E.length ? h(new Wh(E, Au(E))) : d(o);
      }, p = QR(e);
      Bh(p, r, m);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, u = 0, l = [], f = new Promise(function(d, h) {
    var m = function(g) {
      if (l.push.apply(l, g), u++, u === c)
        return n(l), l.length ? h(new Wh(l, Au(l))) : d(o);
    };
    s.length || (n(l), d(o)), s.forEach(function(p) {
      var g = e[p];
      a.indexOf(p) !== -1 ? Bh(g, r, m) : qR(g, r, m);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function KR(e) {
  return !!(e && e.message !== void 0);
}
function YR(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Uh(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = YR(t, e.fullFields) : n = t[r.field || e.fullField], KR(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function qh(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = wn({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var b0 = function(t, r, n, o, i, a) {
  t.required && (!n.hasOwnProperty(t.field) || Ft(r, a || t.type)) && o.push(lr(i.messages.required, t.fullField));
}, XR = function(t, r, n, o, i) {
  (/^\s+$/.test(r) || r === "") && o.push(lr(i.messages.whitespace, t.fullField));
}, Xi, JR = function() {
  if (Xi)
    return Xi;
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
  c.v4 = function(S) {
    return S && S.exact ? a : new RegExp("" + t(S) + r + t(S), "g");
  }, c.v6 = function(S) {
    return S && S.exact ? s : new RegExp("" + t(S) + o + t(S), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, d = c.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", E = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + l + "(?:localhost|" + f + "|" + d + "|" + h + m + p + ")" + g + E;
  return Xi = new RegExp("(?:^" + y + "$)", "i"), Xi;
}, Qh = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ko = {
  integer: function(t) {
    return Ko.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ko.number(t) && !Ko.integer(t);
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
    return typeof t == "object" && !Ko.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Qh.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(JR());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Qh.hex);
  }
}, ZR = function(t, r, n, o, i) {
  if (t.required && r === void 0) {
    b0(t, r, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Ko[s](r) || o.push(lr(i.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && o.push(lr(i.messages.types[s], t.fullField, t.type));
}, eT = function(t, r, n, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, f = null, d = typeof r == "number", h = typeof r == "string", m = Array.isArray(r);
  if (d ? f = "number" : h ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (l = r.length), h && (l = r.replace(u, "_").length), a ? l !== t.len && o.push(lr(i.messages[f].len, t.fullField, t.len)) : s && !c && l < t.min ? o.push(lr(i.messages[f].min, t.fullField, t.min)) : c && !s && l > t.max ? o.push(lr(i.messages[f].max, t.fullField, t.max)) : s && c && (l < t.min || l > t.max) && o.push(lr(i.messages[f].range, t.fullField, t.min, t.max));
}, Kn = "enum", tT = function(t, r, n, o, i) {
  t[Kn] = Array.isArray(t[Kn]) ? t[Kn] : [], t[Kn].indexOf(r) === -1 && o.push(lr(i.messages[Kn], t.fullField, t[Kn].join(", ")));
}, rT = function(t, r, n, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(lr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || o.push(lr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, je = {
  required: b0,
  whitespace: XR,
  type: ZR,
  range: eT,
  enum: tT,
  pattern: rT
}, nT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r, "string") && !t.required)
      return n();
    je.required(t, r, o, a, i, "string"), Ft(r, "string") || (je.type(t, r, o, a, i), je.range(t, r, o, a, i), je.pattern(t, r, o, a, i), t.whitespace === !0 && je.whitespace(t, r, o, a, i));
  }
  n(a);
}, oT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, iT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, aT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, sT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), Ft(r) || je.type(t, r, o, a, i);
  }
  n(a);
}, cT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, uT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, lT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    je.required(t, r, o, a, i, "array"), r != null && (je.type(t, r, o, a, i), je.range(t, r, o, a, i));
  }
  n(a);
}, fT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je.type(t, r, o, a, i);
  }
  n(a);
}, dT = "enum", hT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i), r !== void 0 && je[dT](t, r, o, a, i);
  }
  n(a);
}, vT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r, "string") && !t.required)
      return n();
    je.required(t, r, o, a, i), Ft(r, "string") || je.pattern(t, r, o, a, i);
  }
  n(a);
}, pT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r, "date") && !t.required)
      return n();
    if (je.required(t, r, o, a, i), !Ft(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), je.type(t, c, o, a, i), c && je.range(t, c.getTime(), o, a, i);
    }
  }
  n(a);
}, mT = function(t, r, n, o, i) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  je.required(t, r, o, a, i, s), n(a);
}, dc = function(t, r, n, o, i) {
  var a = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (Ft(r, a) && !t.required)
      return n();
    je.required(t, r, o, s, i, a), Ft(r, a) || je.type(t, r, o, s, i);
  }
  n(s);
}, gT = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ft(r) && !t.required)
      return n();
    je.required(t, r, o, a, i);
  }
  n(a);
}, ti = {
  string: nT,
  method: oT,
  number: iT,
  boolean: aT,
  regexp: sT,
  integer: cT,
  float: uT,
  array: lT,
  object: fT,
  enum: hT,
  pattern: vT,
  date: pT,
  url: dc,
  hex: dc,
  email: dc,
  required: mT,
  any: gT
};
function Du() {
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
var Fu = Du(), Ni = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Fu, this.define(r);
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
    return n && (this._messages = qh(Du(), n)), this._messages;
  }, t.validate = function(n, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var s = n, c = o, u = i;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function l(p) {
      var g = [], E = {};
      function y(w) {
        if (Array.isArray(w)) {
          var b;
          g = (b = g).concat.apply(b, w);
        } else
          g.push(w);
      }
      for (var S = 0; S < p.length; S++)
        y(p[S]);
      g.length ? (E = Au(g), u(g, E)) : u(null, s);
    }
    if (c.messages) {
      var f = this.messages();
      f === Fu && (f = Du()), qh(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var d = {}, h = c.keys || Object.keys(this.rules);
    h.forEach(function(p) {
      var g = a.rules[p], E = s[p];
      g.forEach(function(y) {
        var S = y;
        typeof S.transform == "function" && (s === n && (s = wn({}, s)), E = s[p] = S.transform(E)), typeof S == "function" ? S = {
          validator: S
        } : S = wn({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = p, S.fullField = S.fullField || p, S.type = a.getType(S), d[p] = d[p] || [], d[p].push({
          rule: S,
          value: E,
          source: s,
          field: p
        }));
      });
    });
    var m = {};
    return GR(d, c, function(p, g) {
      var E = p.rule, y = (E.type === "object" || E.type === "array") && (typeof E.fields == "object" || typeof E.defaultField == "object");
      y = y && (E.required || !E.required && p.value), E.field = p.field;
      function S(C, O) {
        return wn({}, O, {
          fullField: E.fullField + "." + C,
          fullFields: E.fullFields ? [].concat(E.fullFields, [C]) : [C]
        });
      }
      function w(C) {
        C === void 0 && (C = []);
        var O = Array.isArray(C) ? C : [C];
        !c.suppressWarning && O.length && e.warning("async-validator:", O), O.length && E.message !== void 0 && (O = [].concat(E.message));
        var P = O.map(Uh(E, s));
        if (c.first && P.length)
          return m[E.field] = 1, g(P);
        if (!y)
          g(P);
        else {
          if (E.required && !p.value)
            return E.message !== void 0 ? P = [].concat(E.message).map(Uh(E, s)) : c.error && (P = [c.error(E, lr(c.messages.required, E.field))]), g(P);
          var N = {};
          E.defaultField && Object.keys(p.value).map(function(R) {
            N[R] = E.defaultField;
          }), N = wn({}, N, p.rule.fields);
          var x = {};
          Object.keys(N).forEach(function(R) {
            var _ = N[R], T = Array.isArray(_) ? _ : [_];
            x[R] = T.map(S.bind(null, R));
          });
          var L = new e(x);
          L.messages(c.messages), p.rule.options && (p.rule.options.messages = c.messages, p.rule.options.error = c.error), L.validate(p.value, p.rule.options || c, function(R) {
            var _ = [];
            P && P.length && _.push.apply(_, P), R && R.length && _.push.apply(_, R), g(_.length ? _ : null);
          });
        }
      }
      var b;
      if (E.asyncValidator)
        b = E.asyncValidator(E, p.value, w, p.source, c);
      else if (E.validator) {
        try {
          b = E.validator(E, p.value, w, p.source, c);
        } catch (C) {
          console.error?.(C), c.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), w(C.message);
        }
        b === !0 ? w() : b === !1 ? w(typeof E.message == "function" ? E.message(E.fullField || E.field) : E.message || (E.fullField || E.field) + " fails") : b instanceof Array ? w(b) : b instanceof Error && w(b.message);
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
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !ti.hasOwnProperty(n.type))
      throw new Error(lr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? ti.required : ti[this.getType(n)] || void 0;
  }, e;
}();
Ni.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ti[t] = r;
};
Ni.warning = y0;
Ni.messages = Fu;
Ni.validators = ti;
var cr = "'${name}' is not a valid ${type}", E0 = {
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
}, Gh = Ni;
function yT(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Kh = "CODE_LOGIC_ERROR";
function $u(e, t, r, n, o) {
  return ku.apply(this, arguments);
}
function ku() {
  return ku = Mo(/* @__PURE__ */ hr().mark(function e(t, r, n, o, i) {
    var a, s, c, u, l, f, d, h, m;
    return hr().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return a = W({}, n), delete a.ruleIndex, Gh.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (E) {
                return console.error(E), Promise.reject(Kh);
              }
            }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), u = new Gh(be({}, t, [a])), l = so(E0, o.validateMessages), u.messages(l), f = [], g.prev = 10, g.next = 13, Promise.resolve(u.validate(be({}, t, r), W({}, o)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(E, y) {
              var S = E.message, w = S === Kh ? l.default : S;
              return /* @__PURE__ */ v.isValidElement(w) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ v.cloneElement(w, {
                  key: "error_".concat(y)
                })
              ) : w;
            }));
          case 18:
            if (!(!f.length && c)) {
              g.next = 23;
              break;
            }
            return g.next = 21, Promise.all(r.map(function(E, y) {
              return $u("".concat(t, ".").concat(y), E, c, o, i);
            }));
          case 21:
            return d = g.sent, g.abrupt("return", d.reduce(function(E, y) {
              return [].concat(Ee(E), Ee(y));
            }, []));
          case 23:
            return h = W(W({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), m = f.map(function(E) {
              return typeof E == "string" ? yT(E, h) : E;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), ku.apply(this, arguments);
}
function bT(e, t, r, n, o, i) {
  var a = e.join("."), s = r.map(function(l, f) {
    var d = l.validator, h = W(W({}, l), {}, {
      ruleIndex: f
    });
    return d && (h.validator = function(m, p, g) {
      var E = !1, y = function() {
        for (var b = arguments.length, C = new Array(b), O = 0; O < b; O++)
          C[O] = arguments[O];
        Promise.resolve().then(function() {
          ke(!E, "Your validator function has already return a promise. `callback` will be ignored."), E || g.apply(void 0, C);
        });
      }, S = d(m, p, y);
      E = S && typeof S.then == "function" && typeof S.catch == "function", ke(E, "`callback` is deprecated. Please return a promise instead."), E && S.then(function() {
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
      var l = Mo(/* @__PURE__ */ hr().mark(function f(d, h) {
        var m, p, g;
        return hr().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < s.length)) {
                  y.next = 12;
                  break;
                }
                return p = s[m], y.next = 5, $u(a, t, p, n, i);
              case 5:
                if (g = y.sent, !g.length) {
                  y.next = 9;
                  break;
                }
                return h([{
                  errors: g,
                  rule: p
                }]), y.abrupt("return");
              case 9:
                m += 1, y.next = 1;
                break;
              case 12:
                d([]);
              case 13:
              case "end":
                return y.stop();
            }
        }, f);
      }));
      return function(f, d) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(l) {
      return $u(a, t, l, n, i).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    c = (o ? ST(u) : ET(u)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function ET(e) {
  return Lu.apply(this, arguments);
}
function Lu() {
  return Lu = Mo(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(o) {
              var i, a = (i = []).concat.apply(i, Ee(o));
              return a;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Lu.apply(this, arguments);
}
function ST(e) {
  return ju.apply(this, arguments);
}
function ju() {
  return ju = Mo(/* @__PURE__ */ hr().mark(function e(t) {
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
  })), ju.apply(this, arguments);
}
function Ot(e) {
  return Nu(e);
}
function Yh(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = Pr(e, n);
    r = xr(r, n, o);
  }), r;
}
function ri(e, t) {
  return e && e.some(function(r) {
    return S0(r, t);
  });
}
function S0(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
function wT(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Be(e) !== "object" || Be(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return Ee(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function CT(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Be(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Xh(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], i = t - r;
  return i > 0 ? [].concat(Ee(e.slice(0, r)), [o], Ee(e.slice(r, t)), Ee(e.slice(t + 1, n))) : i < 0 ? [].concat(Ee(e.slice(0, t)), Ee(e.slice(t + 1, r + 1)), [o], Ee(e.slice(r + 1, n))) : e;
}
var OT = ["name"], pr = [];
function Jh(e, t, r, n, o, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var cf = /* @__PURE__ */ function(e) {
  wi(r, e);
  var t = Ci(r);
  function r(n) {
    var o;
    if (Er(this, r), o = t.call(this, n), o.state = {
      resetCount: 0
    }, o.cancelRegisterFunc = null, o.mounted = !1, o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.prevValidating = void 0, o.errors = pr, o.warnings = pr, o.cancelRegister = function() {
      var c = o.props, u = c.preserve, l = c.isListField, f = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(l, u, Ot(f)), o.cancelRegisterFunc = null;
    }, o.getNamePath = function() {
      var c = o.props, u = c.name, l = c.fieldContext, f = l.prefixName, d = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(Ee(d), Ee(u)) : [];
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
        hm(o.metaCache, l) || u(l), o.metaCache = l;
      } else
        o.metaCache = null;
    }, o.onStoreChange = function(c, u, l) {
      var f = o.props, d = f.shouldUpdate, h = f.dependencies, m = h === void 0 ? [] : h, p = f.onReset, g = l.store, E = o.getNamePath(), y = o.getValue(c), S = o.getValue(g), w = u && ri(u, E);
      switch (l.type === "valueUpdate" && l.source === "external" && y !== S && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = pr, o.warnings = pr, o.triggerMetaEvent()), l.type) {
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
          if (d && !E.length && Jh(d, c, g, y, S, l)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = m.map(Ot);
          if (C.some(function(O) {
            return ri(l.relatedFields, O);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!m.length || E.length || d) && Jh(d, c, g, y, S, l)) {
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
        var g = o.props, E = g.validateFirst, y = E === void 0 ? !1 : E, S = g.messageVariables, w = o.getRules();
        d && (w = w.filter(function(C) {
          return C;
        }).filter(function(C) {
          var O = C.validateTrigger;
          if (!O)
            return !0;
          var P = Nu(O);
          return P.includes(d);
        }));
        var b = bT(u, l, w, c, y, S);
        return b.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pr;
          if (o.validatePromise === p) {
            var O;
            o.validatePromise = null;
            var P = [], N = [];
            (O = C.forEach) === null || O === void 0 || O.call(C, function(x) {
              var L = x.rule.warningOnly, R = x.errors, _ = R === void 0 ? pr : R;
              L ? N.push.apply(N, Ee(_)) : P.push.apply(P, Ee(_));
            }), o.errors = P, o.warnings = N, o.triggerMetaEvent(), o.reRender();
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
      var c = o.props.fieldContext, u = c.getInternalHooks(Sn), l = u.getInitialValue;
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
      var l = In(c);
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
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.props, l = u.trigger, f = u.validateTrigger, d = u.getValueFromEvent, h = u.normalize, m = u.valuePropName, p = u.getValueProps, g = u.fieldContext, E = f !== void 0 ? f : g.validateTrigger, y = o.getNamePath(), S = g.getInternalHooks, w = g.getFieldsValue, b = S(Sn), C = b.dispatch, O = o.getValue(), P = p || function(R) {
        return be({}, m, R);
      }, N = c[l], x = W(W({}, c), P(O));
      x[l] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var R, _ = arguments.length, T = new Array(_), A = 0; A < _; A++)
          T[A] = arguments[A];
        d ? R = d.apply(void 0, T) : R = CT.apply(void 0, [m].concat(T)), h && (R = h(R, O, w(!0))), C({
          type: "updateValue",
          namePath: y,
          value: R
        }), N && N.apply(void 0, T);
      };
      var L = Nu(E || []);
      return L.forEach(function(R) {
        var _ = x[R];
        x[R] = function() {
          _ && _.apply(void 0, arguments);
          var T = o.props.rules;
          T && T.length && C({
            type: "validateField",
            namePath: y,
            triggerName: R
          });
        };
      }), x;
    }, n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, a = i(Sn), s = a.initEntityValue;
      s(Ra(o));
    }
    return o;
  }
  return Sr(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(Sn), u = c.registerField;
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
cf.contextType = Co;
cf.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function w0(e) {
  var t = e.name, r = Nt(e, OT), n = v.useContext(Co), o = v.useContext(za), i = t !== void 0 ? Ot(t) : void 0, a = "keep";
  return r.isListField || (a = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && ke(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(cf, et({
    key: a,
    name: i,
    isListField: !!o
  }, r, {
    fieldContext: n
  }));
}
function _T(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = v.useContext(Co), c = v.useContext(za), u = v.useRef({
    keys: [],
    id: 0
  }), l = u.current, f = v.useMemo(function() {
    var p = Ot(s.prefixName) || [];
    return [].concat(Ee(p), Ee(Ot(t)));
  }, [s.prefixName, t]), d = v.useMemo(function() {
    return W(W({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), h = v.useMemo(function() {
    return {
      getKey: function(g) {
        var E = f.length, y = g[E];
        return [l.keys[y], g.slice(E + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return ke(!1, "Form.List only accepts function as children."), null;
  var m = function(g, E, y) {
    var S = y.source;
    return S === "internal" ? !1 : g !== E;
  };
  return /* @__PURE__ */ v.createElement(za.Provider, {
    value: h
  }, /* @__PURE__ */ v.createElement(Co.Provider, {
    value: d
  }, /* @__PURE__ */ v.createElement(w0, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: a ?? !!c
  }, function(p, g) {
    var E = p.value, y = E === void 0 ? [] : E, S = p.onChange, w = s.getFieldValue, b = function() {
      var N = w(f || []);
      return N || [];
    }, C = {
      add: function(N, x) {
        var L = b();
        x >= 0 && x <= L.length ? (l.keys = [].concat(Ee(l.keys.slice(0, x)), [l.id], Ee(l.keys.slice(x))), S([].concat(Ee(L.slice(0, x)), [N], Ee(L.slice(x))))) : (process.env.NODE_ENV !== "production" && (x < 0 || x > L.length) && ke(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(Ee(l.keys), [l.id]), S([].concat(Ee(L), [N]))), l.id += 1;
      },
      remove: function(N) {
        var x = b(), L = new Set(Array.isArray(N) ? N : [N]);
        L.size <= 0 || (l.keys = l.keys.filter(function(R, _) {
          return !L.has(_);
        }), S(x.filter(function(R, _) {
          return !L.has(_);
        })));
      },
      move: function(N, x) {
        if (N !== x) {
          var L = b();
          N < 0 || N >= L.length || x < 0 || x >= L.length || (l.keys = Xh(l.keys, N, x), S(Xh(L, N, x)));
        }
      }
    }, O = y || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && ke(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(O.map(function(P, N) {
      var x = l.keys[N];
      return x === void 0 && (l.keys[N] = l.id, x = l.keys[N], l.id += 1), {
        name: N,
        key: x,
        isListField: !0
      };
    }), C, g);
  })));
}
function xT(e) {
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
var C0 = "__@field_split__";
function hc(e) {
  return e.map(function(t) {
    return "".concat(Be(t), ":").concat(t);
  }).join(C0);
}
var Yn = /* @__PURE__ */ function() {
  function e() {
    Er(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return Sr(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(hc(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(hc(r));
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
      this.kvs.delete(hc(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Ee(this.kvs.entries()).map(function(n) {
        var o = G(n, 2), i = o[0], a = o[1], s = i.split(C0);
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
}(), RT = ["name"], TT = /* @__PURE__ */ Sr(function e(t) {
  var r = this;
  Er(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
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
    return n === Sn ? (r.formHooked = !0, {
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
      var i, a = so(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = xr(a, c, Pr(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }, this.destroyForm = function() {
    var n = new Yn();
    r.getFieldEntities(!0).forEach(function(o) {
      r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var o = Pr(r.initialValues, n);
    return n.length ? so(o) : o;
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
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Yn();
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
    }), Yh(r.store, u.map(Ot));
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
    var d = new Yn();
    c.forEach(function(p) {
      d.set(p, []);
    }), l.forEach(function(p) {
      var g = p.getNamePath();
      c.forEach(function(E) {
        E.every(function(y, S) {
          return g[S] === y;
        }) && d.update(E, function(y) {
          return [].concat(Ee(y), [p]);
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
      return ri(i, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Yn(), i = r.getFieldEntities(!0);
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
              (!n.skipExist || p === void 0) && r.updateStore(xr(r.store, d, Ee(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var u = o.get(c);
      if (u) {
        var l;
        (l = s).push.apply(l, Ee(Ee(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, a(s);
  }, this.resetFields = function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(so(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
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
      var s = a.name, c = Nt(a, RT), u = Ot(s);
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
            !S0(f.getNamePath(), o)
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
      relatedFields: [o].concat(Ee(i))
    }), i;
  }, this.updateValue = function(n, o) {
    var i = Ot(n), a = r.store;
    r.updateStore(xr(r.store, i, o)), r.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(a, i), c = r.callbacks.onValuesChange;
    if (c) {
      var u = Yh(r.store, [i]);
      c(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(Ee(s)));
  }, this.setFieldsValue = function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var i = so(r.store, n);
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
    var o = /* @__PURE__ */ new Set(), i = [], a = new Yn();
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
        var s = new Yn();
        o.forEach(function(u) {
          var l = u.name, f = u.errors;
          s.set(l, f);
        }), a.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = a.filter(function(u) {
        var l = u.name;
        return ri(n, l);
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
        var E = p.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        E.every(function(w, b) {
          return i[b] === w || i[b] === void 0;
        }) && c.push(E);
      }
      if (!(!p.props.rules || !p.props.rules.length)) {
        var y = p.getNamePath();
        if (f.add(y.join(l)), !s || ri(c, y)) {
          var S = p.validateRules(W({
            validateMessages: W(W({}, E0), r.validateMessages)
          }, a));
          u.push(S.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var b, C = [], O = [];
            return (b = w.forEach) === null || b === void 0 || b.call(w, function(P) {
              var N = P.rule.warningOnly, x = P.errors;
              N ? O.push.apply(O, Ee(x)) : C.push.apply(C, Ee(x));
            }), C.length ? Promise.reject({
              name: y,
              errors: C,
              warnings: O
            }) : {
              name: y,
              errors: C,
              warnings: O
            };
          }));
        }
      }
    });
    var d = xT(u);
    r.lastValidatePromise = d, d.catch(function(p) {
      return p;
    }).then(function(p) {
      var g = p.map(function(E) {
        var y = E.name;
        return y;
      });
      r.notifyObservers(r.store, g, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(g, p);
    });
    var h = d.then(function() {
      return r.lastValidatePromise === d ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var g = p.filter(function(E) {
        return E && E.errors.length;
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
function O0(e) {
  var t = v.useRef(), r = v.useState({}), n = G(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new TT(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Vu = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), PT = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, i = t.children, a = v.useContext(Vu), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(Vu.Provider, {
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
        u && (s.current = W(W({}, s.current), {}, be({}, u, l))), a.registerForm(u, l);
      },
      unregisterForm: function(u) {
        var l = W({}, s.current);
        delete l[u], s.current = l, a.unregisterForm(u);
      }
    })
  }, i);
}, NT = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], MT = function(t, r) {
  var n = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, c = t.children, u = t.component, l = u === void 0 ? "form" : u, f = t.validateMessages, d = t.validateTrigger, h = d === void 0 ? "onChange" : d, m = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, E = t.onFinishFailed, y = Nt(t, NT), S = v.useContext(Vu), w = O0(a), b = G(w, 1), C = b[0], O = C.getInternalHooks(Sn), P = O.useSubscribe, N = O.setInitialValues, x = O.setCallbacks, L = O.setValidateMessages, R = O.setPreserve, _ = O.destroyForm;
  v.useImperativeHandle(r, function() {
    return C;
  }), v.useEffect(function() {
    return S.registerForm(n, C), function() {
      S.unregisterForm(n);
    };
  }, [S, C, n]), L(W(W({}, S.validateMessages), f)), x({
    onValuesChange: m,
    onFieldsChange: function($) {
      if (S.triggerFormChange(n, $), p) {
        for (var H = arguments.length, j = new Array(H > 1 ? H - 1 : 0), K = 1; K < H; K++)
          j[K - 1] = arguments[K];
        p.apply(void 0, [$].concat(j));
      }
    },
    onFinish: function($) {
      S.triggerFormFinish(n, $), g && g($);
    },
    onFinishFailed: E
  }), R(s);
  var T = v.useRef(null);
  N(o, !T.current), T.current || (T.current = !0), v.useEffect(
    function() {
      return _;
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
  P(!F);
  var B = v.useRef();
  v.useEffect(function() {
    wT(B.current || [], i || []) || C.setFields(i || []), B.current = i;
  }, [i, C]);
  var Q = v.useMemo(function() {
    return W(W({}, C), {}, {
      validateTrigger: h
    });
  }, [C, h]), ne = /* @__PURE__ */ v.createElement(za.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Co.Provider, {
    value: Q
  }, A));
  return l === !1 ? ne : /* @__PURE__ */ v.createElement(l, et({}, y, {
    onSubmit: function($) {
      $.preventDefault(), $.stopPropagation(), C.submit();
    },
    onReset: function($) {
      var H;
      $.preventDefault(), C.resetFields(), (H = y.onReset) === null || H === void 0 || H.call(y, $);
    }
  }), ne);
};
function Zh(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var IT = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = De(t);
  ke(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function AT() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = n === void 0 ? [] : n, i = t[1], a = i === void 0 ? {} : i, s = VR(a) ? {
    form: a
  } : a, c = s.form, u = fr(), l = G(u, 2), f = l[0], d = l[1], h = po(function() {
    return Zh(f);
  }, [f]), m = De(h);
  m.current = h;
  var p = Kt(Co), g = c || p, E = g && g._init;
  process.env.NODE_ENV !== "production" && ke(t.length === 2 ? c ? E : !0 : E, "useWatch requires a form instance since it can not auto detect from context.");
  var y = Ot(o), S = De(y);
  return S.current = y, IT(y), Wt(
    function() {
      if (E) {
        var w = g.getFieldsValue, b = g.getInternalHooks, C = b(Sn), O = C.registerWatch, P = O(function(x, L) {
          var R = Pr(s.preserve ? L : x, S.current), _ = Zh(R);
          m.current !== _ && (m.current = _, d(R));
        }), N = Pr(s.preserve ? w(!0) : w(), S.current);
        return d(N), P;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [E]
  ), f;
}
var DT = /* @__PURE__ */ v.forwardRef(MT), Mi = DT;
Mi.FormProvider = PT;
Mi.Field = w0;
Mi.List = _T;
Mi.useForm = O0;
Mi.useWatch = AT;
const FT = /* @__PURE__ */ v.createContext({}), $T = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), kT = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), _0 = function(e, t, r, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, $T(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, kT(n)), {
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
}, LT = new Vt("antMoveDownIn", {
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
}), jT = new Vt("antMoveDownOut", {
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
}), VT = new Vt("antMoveLeftIn", {
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
}), zT = new Vt("antMoveLeftOut", {
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
}), HT = new Vt("antMoveRightIn", {
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
}), BT = new Vt("antMoveRightOut", {
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
}), WT = new Vt("antMoveUpIn", {
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
}), UT = new Vt("antMoveUpOut", {
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
}), qT = {
  "move-up": {
    inKeyframes: WT,
    outKeyframes: UT
  },
  "move-down": {
    inKeyframes: LT,
    outKeyframes: jT
  },
  "move-left": {
    inKeyframes: VT,
    outKeyframes: zT
  },
  "move-right": {
    inKeyframes: HT,
    outKeyframes: BT
  }
}, ev = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = qT[t];
  return [_0(n, o, i, e.motionDurationMid), {
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
}, x0 = new Vt("antSlideUpIn", {
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
}), R0 = new Vt("antSlideUpOut", {
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
}), T0 = new Vt("antSlideDownIn", {
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
}), P0 = new Vt("antSlideDownOut", {
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
}), QT = new Vt("antSlideLeftIn", {
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
}), GT = new Vt("antSlideLeftOut", {
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
}), KT = new Vt("antSlideRightIn", {
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
}), YT = new Vt("antSlideRightOut", {
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
}), XT = {
  "slide-up": {
    inKeyframes: x0,
    outKeyframes: R0
  },
  "slide-down": {
    inKeyframes: T0,
    outKeyframes: P0
  },
  "slide-left": {
    inKeyframes: QT,
    outKeyframes: GT
  },
  "slide-right": {
    inKeyframes: KT,
    outKeyframes: YT
  }
}, tv = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = XT[t];
  return [_0(n, o, i, e.motionDurationMid), {
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
function JT(e, t, r, n) {
  return function(i) {
    const {
      prefixCls: a,
      style: s
    } = i, c = v.useRef(null), [u, l] = v.useState(0), [f, d] = v.useState(0), [h, m] = Da(!1, {
      value: i.open
    }), {
      getPrefixCls: p
    } = v.useContext(or), g = p(t || "select", a);
    v.useEffect(() => {
      if (m(!0), typeof ResizeObserver < "u") {
        const y = new ResizeObserver((w) => {
          const b = w[0].target;
          l(b.offsetHeight + 8), d(b.offsetWidth);
        }), S = setInterval(() => {
          var w;
          const b = r ? `.${r(g)}` : `.${g}-dropdown`, C = (w = c.current) === null || w === void 0 ? void 0 : w.querySelector(b);
          C && (clearInterval(S), y.observe(C));
        }, 10);
        return () => {
          clearInterval(S), y.disconnect();
        };
      }
    }, []);
    let E = Object.assign(Object.assign({}, i), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: h,
      visible: h,
      getPopupContainer: () => c.current
    });
    return n && (E = n(E)), /* @__PURE__ */ v.createElement(Ul, {
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
    }, /* @__PURE__ */ v.createElement(e, Object.assign({}, E))));
  };
}
const N0 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var M0 = /* @__PURE__ */ v.createContext(null);
function ZT() {
  return v.useContext(M0);
}
function eP() {
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
function I0() {
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
function tP(e, t, r, n) {
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
var rP = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Xn = void 0;
function nP(e, t) {
  var r = e.prefixCls, n = e.invalidate, o = e.item, i = e.renderItem, a = e.responsive, s = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, l = e.className, f = e.style, d = e.children, h = e.display, m = e.order, p = e.component, g = p === void 0 ? "div" : p, E = Nt(e, rP), y = a && !h;
  function S(P) {
    c(u, P);
  }
  v.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var w = i && o !== Xn ? i(o) : d, b;
  n || (b = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Xn,
    overflowY: y ? "hidden" : Xn,
    order: a ? m : Xn,
    pointerEvents: y ? "none" : Xn,
    position: y ? "absolute" : Xn
  });
  var C = {};
  y && (C["aria-hidden"] = !0);
  var O = /* @__PURE__ */ v.createElement(g, et({
    className: Me(!n && r, l),
    style: W(W({}, b), f)
  }, C, E, {
    ref: t
  }), w);
  return a && (O = /* @__PURE__ */ v.createElement($n, {
    onResize: function(N) {
      var x = N.offsetWidth;
      S(x);
    },
    disabled: s
  }, O)), O;
}
var ni = /* @__PURE__ */ v.forwardRef(nP);
ni.displayName = "Item";
function oP(e) {
  if (typeof MessageChannel > "u")
    Ut(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function iP() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], oP(function() {
      My(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function qo(e, t) {
  var r = v.useState(t), n = G(r, 2), o = n[0], i = n[1], a = Tr(function(s) {
    e(function() {
      i(s);
    });
  });
  return [o, a];
}
var Ha = /* @__PURE__ */ Pe.createContext(null), aP = ["component"], sP = ["className"], cP = ["className"], uP = function(t, r) {
  var n = v.useContext(Ha);
  if (!n) {
    var o = t.component, i = o === void 0 ? "div" : o, a = Nt(t, aP);
    return /* @__PURE__ */ v.createElement(i, et({}, a, {
      ref: r
    }));
  }
  var s = n.className, c = Nt(n, sP), u = t.className, l = Nt(t, cP);
  return /* @__PURE__ */ v.createElement(Ha.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(ni, et({
    ref: r,
    className: Me(s, u)
  }, c, l)));
}, A0 = /* @__PURE__ */ v.forwardRef(uP);
A0.displayName = "RawItem";
var lP = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], D0 = "responsive", F0 = "invalidate";
function fP(e) {
  return "+ ".concat(e.length, " ...");
}
function dP(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, o = e.data, i = o === void 0 ? [] : o, a = e.renderItem, s = e.renderRawItem, c = e.itemKey, u = e.itemWidth, l = u === void 0 ? 10 : u, f = e.ssr, d = e.style, h = e.className, m = e.maxCount, p = e.renderRest, g = e.renderRawRest, E = e.suffix, y = e.component, S = y === void 0 ? "div" : y, w = e.itemComponent, b = e.onVisibleChange, C = Nt(e, lP), O = f === "full", P = iP(), N = qo(P, null), x = G(N, 2), L = x[0], R = x[1], _ = L || 0, T = qo(P, /* @__PURE__ */ new Map()), A = G(T, 2), F = A[0], D = A[1], B = qo(P, 0), Q = G(B, 2), ne = Q[0], se = Q[1], $ = qo(P, 0), H = G($, 2), j = H[0], K = H[1], I = qo(P, 0), q = G(I, 2), k = q[0], J = q[1], re = fr(null), X = G(re, 2), M = X[0], Z = X[1], V = fr(null), ee = G(V, 2), fe = ee[0], ce = ee[1], he = v.useMemo(function() {
    return fe === null && O ? Number.MAX_SAFE_INTEGER : fe || 0;
  }, [fe, L]), ge = fr(!1), oe = G(ge, 2), de = oe[0], Ne = oe[1], Ie = "".concat(n, "-item"), ie = Math.max(ne, j), pe = m === D0, tt = i.length && pe, at = m === F0, rt = tt || typeof m == "number" && i.length > m, We = po(function() {
    var we = i;
    return tt ? L === null && O ? we = i : we = i.slice(0, Math.min(i.length, _ / l)) : typeof m == "number" && (we = i.slice(0, m)), we;
  }, [i, l, L, m, tt]), Ue = po(function() {
    return tt ? i.slice(he + 1) : i.slice(We.length);
  }, [i, We, tt, he]), st = Ec(function(we, Y) {
    var ae;
    return typeof c == "function" ? c(we) : (ae = c && we?.[c]) !== null && ae !== void 0 ? ae : Y;
  }, [c]), Xt = Ec(a || function(we) {
    return we;
  }, [a]);
  function nt(we, Y, ae) {
    fe === we && (Y === void 0 || Y === M) || (ce(we), ae || (Ne(we < i.length - 1), b?.(we)), Y !== void 0 && Z(Y));
  }
  function ve(we, Y) {
    R(Y.clientWidth);
  }
  function Se(we, Y) {
    D(function(ae) {
      var le = new Map(ae);
      return Y === null ? le.delete(we) : le.set(we, Y), le;
    });
  }
  function Ve(we, Y) {
    K(Y), se(j);
  }
  function mt(we, Y) {
    J(Y);
  }
  function Fe(we) {
    return F.get(st(We[we], we));
  }
  xt(function() {
    if (_ && typeof ie == "number" && We) {
      var we = k, Y = We.length, ae = Y - 1;
      if (!Y) {
        nt(0, null);
        return;
      }
      for (var le = 0; le < Y; le += 1) {
        var ye = Fe(le);
        if (O && (ye = ye || 0), ye === void 0) {
          nt(le - 1, void 0, !0);
          break;
        }
        if (we += ye, // Only one means `totalWidth` is the final width
        ae === 0 && we <= _ || // Last two width will be the final width
        le === ae - 1 && we + Fe(ae) <= _) {
          nt(ae, null);
          break;
        } else if (we + ie > _) {
          nt(le - 1, we - ye - k + j);
          break;
        }
      }
      E && Fe(0) + k > _ && Z(null);
    }
  }, [_, F, j, k, st, We]);
  var qe = de && !!Ue.length, Oe = {};
  M !== null && tt && (Oe = {
    position: "absolute",
    left: M,
    top: 0
  });
  var lt = {
    prefixCls: Ie,
    responsive: tt,
    component: w,
    invalidate: at
  }, Rt = s ? function(we, Y) {
    var ae = st(we, Y);
    return /* @__PURE__ */ v.createElement(Ha.Provider, {
      key: ae,
      value: W(W({}, lt), {}, {
        order: Y,
        item: we,
        itemKey: ae,
        registerSize: Se,
        display: Y <= he
      })
    }, s(we, Y));
  } : function(we, Y) {
    var ae = st(we, Y);
    return /* @__PURE__ */ v.createElement(ni, et({}, lt, {
      order: Y,
      key: ae,
      item: we,
      renderItem: Xt,
      itemKey: ae,
      registerSize: Se,
      display: Y <= he
    }));
  }, xe, ze = {
    order: qe ? he : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ie, "-rest"),
    registerSize: Ve,
    display: qe
  };
  if (g)
    g && (xe = /* @__PURE__ */ v.createElement(Ha.Provider, {
      value: W(W({}, lt), ze)
    }, g(Ue)));
  else {
    var ft = p || fP;
    xe = /* @__PURE__ */ v.createElement(ni, et({}, lt, ze), typeof ft == "function" ? ft(Ue) : ft);
  }
  var pt = /* @__PURE__ */ v.createElement(S, et({
    className: Me(!at && n, h),
    style: d,
    ref: t
  }, C), We.map(Rt), rt ? xe : null, E && /* @__PURE__ */ v.createElement(ni, et({}, lt, {
    responsive: pe,
    responsiveDisabled: !tt,
    order: he,
    className: "".concat(Ie, "-suffix"),
    registerSize: mt,
    display: !0,
    style: Oe
  }), E));
  return pe && (pt = /* @__PURE__ */ v.createElement($n, {
    onResize: ve,
    disabled: !tt
  }, pt)), pt;
}
var Ii = /* @__PURE__ */ v.forwardRef(dP);
Ii.displayName = "Overflow";
Ii.Item = A0;
Ii.RESPONSIVE = D0;
Ii.INVALIDATE = F0;
var ws = function(t) {
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
    className: Me(r.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, s));
}, hP = function(t, r) {
  var n, o, i = t.prefixCls, a = t.id, s = t.inputElement, c = t.disabled, u = t.tabIndex, l = t.autoFocus, f = t.autoComplete, d = t.editable, h = t.activeDescendantId, m = t.value, p = t.maxLength, g = t.onKeyDown, E = t.onMouseDown, y = t.onChange, S = t.onPaste, w = t.onCompositionStart, b = t.onCompositionEnd, C = t.open, O = t.attrs, P = s || /* @__PURE__ */ v.createElement("input", null), N = P, x = N.ref, L = N.props, R = L.onKeyDown, _ = L.onChange, T = L.onMouseDown, A = L.onCompositionStart, F = L.onCompositionEnd, D = L.style;
  return ui(!("maxLength" in P.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), P = /* @__PURE__ */ v.cloneElement(P, W(W(W({
    type: "search"
  }, L), {}, {
    // Override over origin props
    id: a,
    ref: Po(r, x),
    disabled: c,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: l,
    className: Me("".concat(i, "-selection-search-input"), (n = P) === null || n === void 0 || (o = n.props) === null || o === void 0 ? void 0 : o.className),
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
    onKeyDown: function(Q) {
      g(Q), R && R(Q);
    },
    onMouseDown: function(Q) {
      E(Q), T && T(Q);
    },
    onChange: function(Q) {
      y(Q), _ && _(Q);
    },
    onCompositionStart: function(Q) {
      w(Q), A && A(Q);
    },
    onCompositionEnd: function(Q) {
      b(Q), F && F(Q);
    },
    onPaste: S
  })), P;
}, uf = /* @__PURE__ */ v.forwardRef(hP);
uf.displayName = "Input";
function lf(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var vP = typeof window < "u" && window.document && window.document.documentElement, pP = process.env.NODE_ENV !== "test" && vP;
function mP(e) {
  return e != null;
}
function gP(e) {
  return !e && e !== 0;
}
function rv(e) {
  return ["string", "number"].includes(Be(e));
}
function $0(e) {
  var t = void 0;
  return e && (rv(e.title) ? t = e.title.toString() : rv(e.label) && (t = e.label.toString())), t;
}
function yP(e, t) {
  pP ? v.useLayoutEffect(e, t) : v.useEffect(e, t);
}
function bP(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var nv = function(t) {
  t.preventDefault(), t.stopPropagation();
}, EP = function(t) {
  var r = t.id, n = t.prefixCls, o = t.values, i = t.open, a = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, l = t.disabled, f = t.mode, d = t.showSearch, h = t.autoFocus, m = t.autoComplete, p = t.activeDescendantId, g = t.tabIndex, E = t.removeIcon, y = t.maxTagCount, S = t.maxTagTextLength, w = t.maxTagPlaceholder, b = w === void 0 ? function(Z) {
    return "+ ".concat(Z.length, " ...");
  } : w, C = t.tagRender, O = t.onToggleOpen, P = t.onRemove, N = t.onInputChange, x = t.onInputPaste, L = t.onInputKeyDown, R = t.onInputMouseDown, _ = t.onInputCompositionStart, T = t.onInputCompositionEnd, A = v.useRef(null), F = fr(0), D = G(F, 2), B = D[0], Q = D[1], ne = fr(!1), se = G(ne, 2), $ = se[0], H = se[1], j = "".concat(n, "-selection"), K = i || f === "multiple" && s === !1 || f === "tags" ? a : "", I = f === "tags" || f === "multiple" && s === !1 || d && (i || $);
  yP(function() {
    Q(A.current.scrollWidth);
  }, [K]);
  function q(Z, V, ee, fe, ce) {
    return /* @__PURE__ */ v.createElement("span", {
      className: Me("".concat(j, "-item"), be({}, "".concat(j, "-item-disabled"), ee)),
      title: $0(Z)
    }, /* @__PURE__ */ v.createElement("span", {
      className: "".concat(j, "-item-content")
    }, V), fe && /* @__PURE__ */ v.createElement(ws, {
      className: "".concat(j, "-item-remove"),
      onMouseDown: nv,
      onClick: ce,
      customizeIcon: E
    }, "×"));
  }
  function k(Z, V, ee, fe, ce) {
    var he = function(oe) {
      nv(oe), O(!i);
    };
    return /* @__PURE__ */ v.createElement("span", {
      onMouseDown: he
    }, C({
      label: V,
      value: Z,
      disabled: ee,
      closable: fe,
      onClose: ce
    }));
  }
  function J(Z) {
    var V = Z.disabled, ee = Z.label, fe = Z.value, ce = !l && !V, he = ee;
    if (typeof S == "number" && (typeof ee == "string" || typeof ee == "number")) {
      var ge = String(he);
      ge.length > S && (he = "".concat(ge.slice(0, S), "..."));
    }
    var oe = function(Ne) {
      Ne && Ne.stopPropagation(), P(Z);
    };
    return typeof C == "function" ? k(fe, he, V, ce, oe) : q(Z, he, V, ce, oe);
  }
  function re(Z) {
    var V = typeof b == "function" ? b(Z) : b;
    return q({
      title: V
    }, V, !1);
  }
  var X = /* @__PURE__ */ v.createElement("div", {
    className: "".concat(j, "-search"),
    style: {
      width: B
    },
    onFocus: function() {
      H(!0);
    },
    onBlur: function() {
      H(!1);
    }
  }, /* @__PURE__ */ v.createElement(uf, {
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
    value: K,
    onKeyDown: L,
    onMouseDown: R,
    onChange: N,
    onPaste: x,
    onCompositionStart: _,
    onCompositionEnd: T,
    tabIndex: g,
    attrs: La(t, !0)
  }), /* @__PURE__ */ v.createElement("span", {
    ref: A,
    className: "".concat(j, "-search-mirror"),
    "aria-hidden": !0
  }, K, " ")), M = /* @__PURE__ */ v.createElement(Ii, {
    prefixCls: "".concat(j, "-overflow"),
    data: o,
    renderItem: J,
    renderRest: re,
    suffix: X,
    itemKey: bP,
    maxCount: y
  });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, M, !o.length && !K && /* @__PURE__ */ v.createElement("span", {
    className: "".concat(j, "-placeholder")
  }, u));
}, SP = function(t) {
  var r = t.inputElement, n = t.prefixCls, o = t.id, i = t.inputRef, a = t.disabled, s = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, l = t.mode, f = t.open, d = t.values, h = t.placeholder, m = t.tabIndex, p = t.showSearch, g = t.searchValue, E = t.activeValue, y = t.maxLength, S = t.onInputKeyDown, w = t.onInputMouseDown, b = t.onInputChange, C = t.onInputPaste, O = t.onInputCompositionStart, P = t.onInputCompositionEnd, N = t.title, x = v.useState(!1), L = G(x, 2), R = L[0], _ = L[1], T = l === "combobox", A = T || p, F = d[0], D = g || "";
  T && E && !R && (D = E), v.useEffect(function() {
    T && _(!1);
  }, [T, E]);
  var B = l !== "combobox" && !f && !p ? !1 : !!D, Q = N === void 0 ? $0(F) : N, ne = function() {
    if (F)
      return null;
    var $ = B ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ v.createElement("span", {
      className: "".concat(n, "-selection-placeholder"),
      style: $
    }, h);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-search")
  }, /* @__PURE__ */ v.createElement(uf, {
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
    onKeyDown: S,
    onMouseDown: w,
    onChange: function($) {
      _(!0), b($);
    },
    onPaste: C,
    onCompositionStart: O,
    onCompositionEnd: P,
    tabIndex: m,
    attrs: La(t, !0),
    maxLength: T ? y : void 0
  })), !T && F ? /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: Q,
    style: B ? {
      visibility: "hidden"
    } : void 0
  }, F.label) : null, ne());
};
function wP(e) {
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
var CP = function(t, r) {
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
  var g = I0(0), E = G(g, 2), y = E[0], S = E[1], w = function(D) {
    var B = D.which;
    (B === te.UP || B === te.DOWN) && D.preventDefault(), m && m(D), B === te.ENTER && s === "tags" && !o.current && !a && d?.(D.target.value), wP(B) && h(!0);
  }, b = function() {
    S(!0);
  }, C = De(null), O = function(D) {
    f(D, !0, o.current) !== !1 && h(!0);
  }, P = function() {
    o.current = !0;
  }, N = function(D) {
    o.current = !1, s !== "combobox" && O(D.target.value);
  }, x = function(D) {
    var B = D.target.value;
    if (u && C.current && /[\r\n]/.test(C.current)) {
      var Q = C.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      B = B.replace(Q, C.current);
    }
    C.current = null, O(B);
  }, L = function(D) {
    var B = D.clipboardData, Q = B.getData("text");
    C.current = Q;
  }, R = function(D) {
    var B = D.target;
    if (B !== n.current) {
      var Q = document.body.style.msTouchAction !== void 0;
      Q ? setTimeout(function() {
        n.current.focus();
      }) : n.current.focus();
    }
  }, _ = function(D) {
    var B = y();
    D.target !== n.current && !B && s !== "combobox" && D.preventDefault(), (s !== "combobox" && (!c || !B) || !a) && (a && l !== !1 && f("", !0, !1), h());
  }, T = {
    inputRef: n,
    onInputKeyDown: w,
    onInputMouseDown: b,
    onInputChange: x,
    onInputPaste: L,
    onInputCompositionStart: P,
    onInputCompositionEnd: N
  }, A = s === "multiple" || s === "tags" ? /* @__PURE__ */ v.createElement(EP, et({}, t, T)) : /* @__PURE__ */ v.createElement(SP, et({}, t, T));
  return /* @__PURE__ */ v.createElement("div", {
    ref: p,
    className: "".concat(i, "-selector"),
    onClick: R,
    onMouseDown: _
  }, A);
}, k0 = /* @__PURE__ */ v.forwardRef(CP);
k0.displayName = "Selector";
function L0(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function OP(e) {
  return L0(e) !== e?.ownerDocument;
}
function zu(e) {
  return OP(e) ? L0(e) : null;
}
var ov = /* @__PURE__ */ v.createContext(null);
function iv(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function _P(e, t, r, n) {
  return v.useMemo(function() {
    var o = iv(r ?? t), i = iv(n ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
function xP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function RP(e, t, r, n) {
  for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, c = i[a];
    if (xP((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function av(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Ai(e) {
  return e.ownerDocument.defaultView;
}
function Hu(e) {
  for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = Ai(r).getComputedStyle(r), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function pi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Qo(e) {
  return pi(parseFloat(e), 0);
}
function sv(e, t) {
  var r = W({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement)) {
      var o = Ai(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, u = o.borderLeftWidth, l = o.borderRightWidth, f = n.getBoundingClientRect(), d = n.offsetHeight, h = n.clientHeight, m = n.offsetWidth, p = n.clientWidth, g = Qo(s), E = Qo(c), y = Qo(u), S = Qo(l), w = pi(Math.round(f.width / m * 1e3) / 1e3), b = pi(Math.round(f.height / d * 1e3) / 1e3), C = (m - p - y - S) * w, O = (d - h - g - E) * b, P = g * b, N = E * b, x = y * w, L = S * w, R = 0, _ = 0;
      if (i === "clip") {
        var T = Qo(a);
        R = T * w, _ = T * b;
      }
      var A = f.x + x - R, F = f.y + P - _, D = A + f.width + 2 * R - x - L - C, B = F + f.height + 2 * _ - P - N - O;
      r.left = Math.max(r.left, A), r.top = Math.max(r.top, F), r.right = Math.min(r.right, D), r.bottom = Math.min(r.bottom, B);
    }
  }), r;
}
function cv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function uv(e, t) {
  var r = t || [], n = G(r, 2), o = n[0], i = n[1];
  return [cv(e.width, o), cv(e.height, i)];
}
function lv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Jn(e, t) {
  var r = t[0], n = t[1], o, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function en(e, t) {
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
function TP(e, t, r, n, o, i, a) {
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
    return t ? Hu(t) : [];
  }, [t]), h = v.useRef({}), m = function() {
    h.current = {};
  };
  e || m();
  var p = Tr(function() {
    if (t && r && e) {
      let ot = function(Zt, nr) {
        var er = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ee, Hr = R.x + Zt, Lo = R.y + nr, jo = Hr + j, Di = Lo + H, _s = Math.max(Hr, er.left), xs = Math.max(Lo, er.top), Rs = Math.min(jo, er.right), Ts = Math.min(Di, er.bottom);
        return Math.max(0, (Rs - _s) * (Ts - xs));
      }, Cr = function() {
        Re = R.y + Oe, Qt = Re + H, Mt = R.x + qe, zt = Mt + j;
      };
      var y = t, S = y.style.left, w = y.style.top, b = y.style.right, C = y.style.bottom, O = y.ownerDocument, P = Ai(y), N = W(W({}, o[n]), i);
      y.style.left = "0", y.style.top = "0", y.style.right = "auto", y.style.bottom = "auto";
      var x;
      if (Array.isArray(r))
        x = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var L = r.getBoundingClientRect();
        x = {
          x: L.x,
          y: L.y,
          width: L.width,
          height: L.height
        };
      }
      var R = y.getBoundingClientRect(), _ = P.getComputedStyle(y), T = _.width, A = _.height, F = O.documentElement, D = F.clientWidth, B = F.clientHeight, Q = F.scrollWidth, ne = F.scrollHeight, se = F.scrollTop, $ = F.scrollLeft, H = R.height, j = R.width, K = x.height, I = x.width, q = {
        left: 0,
        top: 0,
        right: D,
        bottom: B
      }, k = {
        left: -$,
        top: -se,
        right: Q - $,
        bottom: ne - se
      }, J = N.htmlRegion, re = "visible", X = "visibleFirst";
      J !== "scroll" && J !== X && (J = re);
      var M = J === X, Z = sv(k, d), V = sv(q, d), ee = J === re ? V : Z, fe = M ? V : ee;
      y.style.left = "auto", y.style.top = "auto", y.style.right = "0", y.style.bottom = "0";
      var ce = y.getBoundingClientRect();
      y.style.left = S, y.style.top = w, y.style.right = b, y.style.bottom = C;
      var he = pi(Math.round(j / parseFloat(T) * 1e3) / 1e3), ge = pi(Math.round(H / parseFloat(A) * 1e3) / 1e3);
      if (he === 0 || ge === 0 || Ta(r) && !c0(r))
        return;
      var oe = N.offset, de = N.targetOffset, Ne = uv(R, oe), Ie = G(Ne, 2), ie = Ie[0], pe = Ie[1], tt = uv(x, de), at = G(tt, 2), rt = at[0], We = at[1];
      x.x -= rt, x.y -= We;
      var Ue = N.points || [], st = G(Ue, 2), Xt = st[0], nt = st[1], ve = lv(nt), Se = lv(Xt), Ve = Jn(x, ve), mt = Jn(R, Se), Fe = W({}, N), qe = Ve.x - mt.x + ie, Oe = Ve.y - mt.y + pe, lt = ot(qe, Oe), Rt = ot(qe, Oe, V), xe = Jn(x, ["t", "l"]), ze = Jn(R, ["t", "l"]), ft = Jn(x, ["b", "r"]), pt = Jn(R, ["b", "r"]), we = N.overflow || {}, Y = we.adjustX, ae = we.adjustY, le = we.shiftX, ye = we.shiftY, $e = function(nr) {
        return typeof nr == "boolean" ? nr : nr >= 0;
      }, Re, Qt, Mt, zt;
      Cr();
      var ht = $e(ae), ar = Se[0] === ve[0];
      if (ht && Se[0] === "t" && (Qt > fe.bottom || h.current.bt)) {
        var Gt = Oe;
        ar ? Gt -= H - K : Gt = xe.y - pt.y - pe;
        var Lr = ot(qe, Gt), Vn = ot(qe, Gt, V);
        // Of course use larger one
        Lr > lt || Lr === lt && (!M || // Choose recommend one
        Vn >= Rt) ? (h.current.bt = !0, Oe = Gt, Fe.points = [en(Se, 0), en(ve, 0)]) : h.current.bt = !1;
      }
      if (ht && Se[0] === "b" && (Re < fe.top || h.current.tb)) {
        var $t = Oe;
        ar ? $t += H - K : $t = ft.y - ze.y - pe;
        var rr = ot(qe, $t), Jt = ot(qe, $t, V);
        // Of course use larger one
        rr > lt || rr === lt && (!M || // Choose recommend one
        Jt >= Rt) ? (h.current.tb = !0, Oe = $t, Fe.points = [en(Se, 0), en(ve, 0)]) : h.current.tb = !1;
      }
      var wr = $e(Y), zn = Se[1] === ve[1];
      if (wr && Se[1] === "l" && (zt > fe.right || h.current.rl)) {
        var jr = qe;
        zn ? jr -= j - I : jr = xe.x - pt.x - ie;
        var hn = ot(jr, Oe), Hn = ot(jr, Oe, V);
        // Of course use larger one
        hn > lt || hn === lt && (!M || // Choose recommend one
        Hn >= Rt) ? (h.current.rl = !0, qe = jr, Fe.points = [en(Se, 1), en(ve, 1)]) : h.current.rl = !1;
      }
      if (wr && Se[1] === "r" && (Mt < fe.left || h.current.lr)) {
        var Vr = qe;
        zn ? Vr += j - I : Vr = ft.x - ze.x - ie;
        var Bn = ot(Vr, Oe), Do = ot(Vr, Oe, V);
        // Of course use larger one
        Bn > lt || Bn === lt && (!M || // Choose recommend one
        Do >= Rt) ? (h.current.lr = !0, qe = Vr, Fe.points = [en(Se, 1), en(ve, 1)]) : h.current.lr = !1;
      }
      Cr();
      var zr = le === !0 ? 0 : le;
      typeof zr == "number" && (Mt < V.left && (qe -= Mt - V.left, x.x + I < V.left + zr && (qe += x.x - V.left + I - zr)), zt > V.right && (qe -= zt - V.right, x.x > V.right - zr && (qe += x.x - V.right + zr)));
      var vr = ye === !0 ? 0 : ye;
      typeof vr == "number" && (Re < V.top && (Oe -= Re - V.top + pe, x.y + K < V.top + vr && (Oe += x.y - V.top + K - vr)), Qt > V.bottom && (Oe -= Qt - V.bottom - pe, x.y > V.bottom - vr && (Oe += x.y - V.bottom + vr)));
      var Ar = R.x + qe, Dr = Ar + j, Jr = R.y + Oe, Wn = Jr + H, Un = x.x, qn = Un + I, vn = x.y, Fo = vn + K, $o = Math.max(Ar, Un), ko = Math.min(Dr, qn), pn = ($o + ko) / 2, mn = pn - Ar, Te = Math.max(Jr, vn), _e = Math.min(Wn, Fo), Tt = (Te + _e) / 2, It = Tt - Jr;
      a?.(t, Fe);
      var dt = ce.right - R.x - (qe + R.width), Ct = ce.bottom - R.y - (Oe + R.height);
      l({
        ready: !0,
        offsetX: qe / he,
        offsetY: Oe / ge,
        offsetR: dt / he,
        offsetB: Ct / ge,
        arrowX: mn / he,
        arrowY: It / ge,
        scaleX: he,
        scaleY: ge,
        align: Fe
      });
    }
  }), g = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && p();
    });
  }, E = function() {
    l(function(S) {
      return W(W({}, S), {}, {
        ready: !1
      });
    });
  };
  return xt(E, [n]), xt(function() {
    e || E();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, g];
}
function PP(e, t, r, n) {
  xt(function() {
    if (e && t && r) {
      let l = function() {
        n();
      };
      var o = t, i = r, a = Hu(o), s = Hu(i), c = Ai(i), u = new Set([c].concat(Ee(a), Ee(s)));
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
function NP(e, t, r, n, o, i, a, s) {
  var c = v.useRef(e), u = v.useRef(!1);
  c.current !== e && (u.current = !0, c.current = e), v.useEffect(function() {
    var l = Ut(function() {
      u.current = !1;
    });
    return function() {
      Ut.cancel(l);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!o || i)) {
      var l = function() {
        var x = !1, L = function(T) {
          var A = T.target;
          x = a(A);
        }, R = function(T) {
          var A = T.target;
          !u.current && c.current && !x && !a(A) && s(!1);
        };
        return [L, R];
      }, f = l(), d = G(f, 2), h = d[0], m = d[1], p = l(), g = G(p, 2), E = g[0], y = g[1], S = Ai(n);
      S.addEventListener("mousedown", h, !0), S.addEventListener("click", m, !0), S.addEventListener("contextmenu", m, !0);
      var w = zu(r);
      if (w && (w.addEventListener("mousedown", E, !0), w.addEventListener("click", y, !0), w.addEventListener("contextmenu", y, !0)), process.env.NODE_ENV !== "production") {
        var b, C, O = r == null || (b = r.getRootNode) === null || b === void 0 ? void 0 : b.call(r), P = (C = n.getRootNode) === null || C === void 0 ? void 0 : C.call(n);
        ke(O === P, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        S.removeEventListener("mousedown", h, !0), S.removeEventListener("click", m, !0), S.removeEventListener("contextmenu", m, !0), w && (w.removeEventListener("mousedown", E, !0), w.removeEventListener("click", y, !0), w.removeEventListener("contextmenu", y, !0));
      };
    }
  }, [t, r, n, o, i]);
}
function MP(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, c = o.x, u = c === void 0 ? 0 : c, l = o.y, f = l === void 0 ? 0 : l, d = v.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var m = r.points[0], p = r.points[1], g = m[0], E = m[1], y = p[0], S = p[1];
    g === y || !["t", "b"].includes(g) ? h.top = f : g === "t" ? h.top = 0 : h.bottom = 0, E === S || !["l", "r"].includes(E) ? h.left = u : E === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: d,
    className: Me("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function IP(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ v.createElement(xi, et({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ v.createElement("div", {
      style: {
        zIndex: n
      },
      className: Me("".concat(t, "-mask"), s)
    });
  }) : null;
}
var j0 = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (j0.displayName = "PopupContent");
var V0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, u = e.keepDom, l = e.onClick, f = e.mask, d = e.arrow, h = e.arrowPos, m = e.align, p = e.motion, g = e.maskMotion, E = e.forceRender, y = e.getPopupContainer, S = e.autoDestroy, w = e.portal, b = e.zIndex, C = e.onMouseEnter, O = e.onMouseLeave, P = e.onPointerEnter, N = e.ready, x = e.offsetX, L = e.offsetY, R = e.offsetR, _ = e.offsetB, T = e.onAlign, A = e.onPrepare, F = e.stretch, D = e.targetWidth, B = e.targetHeight, Q = typeof r == "function" ? r() : r, ne = c || u, se = y?.length > 0, $ = v.useState(!y || !se), H = G($, 2), j = H[0], K = H[1];
  if (xt(function() {
    !j && se && a && K(!0);
  }, [j, se, a]), !j)
    return null;
  var I = "auto", q = {
    left: "-1000vw",
    top: "-1000vh",
    right: I,
    bottom: I
  };
  if (N || !c) {
    var k = m.points, J = m._experimental, re = J?.dynamicInset, X = re && k[0][1] === "r", M = re && k[0][0] === "b";
    X ? (q.right = R, q.left = I) : (q.left = x, q.right = I), M ? (q.bottom = _, q.top = I) : (q.top = L, q.bottom = I);
  }
  var Z = {};
  return F && (F.includes("height") && B ? Z.height = B : F.includes("minHeight") && B && (Z.minHeight = B), F.includes("width") && D ? Z.width = D : F.includes("minWidth") && D && (Z.minWidth = D)), c || (Z.pointerEvents = "none"), /* @__PURE__ */ v.createElement(w, {
    open: E || ne,
    getContainer: y && function() {
      return y(a);
    },
    autoDestroy: S
  }, /* @__PURE__ */ v.createElement(IP, {
    prefixCls: o,
    open: c,
    zIndex: b,
    mask: f,
    motion: g
  }), /* @__PURE__ */ v.createElement($n, {
    onResize: T,
    disabled: !c
  }, function(V) {
    return /* @__PURE__ */ v.createElement(xi, et({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: E,
      leavedClassName: "".concat(o, "-hidden")
    }, p, {
      onAppearPrepare: A,
      onEnterPrepare: A,
      visible: c,
      onVisibleChanged: function(fe) {
        var ce;
        p == null || (ce = p.onVisibleChanged) === null || ce === void 0 || ce.call(p, fe), s(fe);
      }
    }), function(ee, fe) {
      var ce = ee.className, he = ee.style, ge = Me(o, ce, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: Po(V, t, fe),
        className: ge,
        style: W(W(W(W({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, q), Z), he), {}, {
          boxSizing: "border-box",
          zIndex: b
        }, i),
        onMouseEnter: C,
        onMouseLeave: O,
        onPointerEnter: P,
        onClick: l
      }, d && /* @__PURE__ */ v.createElement(MP, {
        prefixCls: o,
        arrow: d,
        arrowPos: h,
        align: m
      }), /* @__PURE__ */ v.createElement(j0, {
        cache: !c
      }, Q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (V0.displayName = "Popup");
var z0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Oi(r), i = v.useCallback(function(s) {
    Pl(t, n ? n(s) : s);
  }, [n]), a = Nl(i, r.ref);
  return o ? /* @__PURE__ */ v.cloneElement(r, {
    ref: a
  }) : r;
});
process.env.NODE_ENV !== "production" && (z0.displayName = "TriggerWrapper");
var AP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function DP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sf, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var o = r.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = r.children, s = r.action, c = s === void 0 ? "hover" : s, u = r.showAction, l = r.hideAction, f = r.popupVisible, d = r.defaultPopupVisible, h = r.onPopupVisibleChange, m = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, E = g === void 0 ? 0.1 : g, y = r.focusDelay, S = r.blurDelay, w = r.mask, b = r.maskClosable, C = b === void 0 ? !0 : b, O = r.getPopupContainer, P = r.forceRender, N = r.autoDestroy, x = r.destroyPopupOnHide, L = r.popup, R = r.popupClassName, _ = r.popupStyle, T = r.popupPlacement, A = r.builtinPlacements, F = A === void 0 ? {} : A, D = r.popupAlign, B = r.zIndex, Q = r.stretch, ne = r.getPopupClassNameFromAlign, se = r.alignPoint, $ = r.onPopupClick, H = r.onPopupAlign, j = r.arrow, K = r.popupMotion, I = r.maskMotion, q = r.popupTransitionName, k = r.popupAnimation, J = r.maskTransitionName, re = r.maskAnimation, X = r.className, M = r.getTriggerDOMNode, Z = Nt(r, AP), V = N || x || !1, ee = v.useState(!1), fe = G(ee, 2), ce = fe[0], he = fe[1];
    xt(function() {
      he(N0());
    }, []);
    var ge = v.useRef({}), oe = v.useContext(ov), de = v.useMemo(function() {
      return {
        registerSubPopup: function(Ae, gt) {
          ge.current[Ae] = gt, oe?.registerSubPopup(Ae, gt);
        }
      };
    }, [oe]), Ne = jR(), Ie = v.useState(null), ie = G(Ie, 2), pe = ie[0], tt = ie[1], at = Tr(function(Ce) {
      Ta(Ce) && pe !== Ce && tt(Ce), oe?.registerSubPopup(Ne, Ce);
    }), rt = v.useState(null), We = G(rt, 2), Ue = We[0], st = We[1], Xt = Tr(function(Ce) {
      Ta(Ce) && Ue !== Ce && st(Ce);
    }), nt = v.Children.only(a), ve = nt?.props || {}, Se = {}, Ve = Tr(function(Ce) {
      var Ae, gt, bt = Ue;
      return bt?.contains(Ce) || ((Ae = zu(bt)) === null || Ae === void 0 ? void 0 : Ae.host) === Ce || Ce === bt || pe?.contains(Ce) || ((gt = zu(pe)) === null || gt === void 0 ? void 0 : gt.host) === Ce || Ce === pe || Object.values(ge.current).some(function(Et) {
        return Et?.contains(Ce) || Ce === Et;
      });
    }), mt = av(i, K, k, q), Fe = av(i, I, re, J), qe = v.useState(d || !1), Oe = G(qe, 2), lt = Oe[0], Rt = Oe[1], xe = f ?? lt, ze = Tr(function(Ce) {
      f === void 0 && Rt(Ce);
    });
    xt(function() {
      Rt(f || !1);
    }, [f]);
    var ft = v.useRef(xe);
    ft.current = xe;
    var pt = Tr(function(Ce) {
      Iy(function() {
        xe !== Ce && (ze(Ce), h?.(Ce));
      });
    }), we = v.useRef(), Y = function() {
      clearTimeout(we.current);
    }, ae = function(Ae) {
      var gt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Y(), gt === 0 ? pt(Ae) : we.current = setTimeout(function() {
        pt(Ae);
      }, gt * 1e3);
    };
    v.useEffect(function() {
      return Y;
    }, []);
    var le = v.useState(!1), ye = G(le, 2), $e = ye[0], Re = ye[1];
    xt(function(Ce) {
      (!Ce || xe) && Re(!0);
    }, [xe]);
    var Qt = v.useState(null), Mt = G(Qt, 2), zt = Mt[0], ht = Mt[1], ar = v.useState([0, 0]), Gt = G(ar, 2), Lr = Gt[0], Vn = Gt[1], $t = function(Ae) {
      Vn([Ae.clientX, Ae.clientY]);
    }, rr = TP(xe, pe, se ? Lr : Ue, T, F, D, H), Jt = G(rr, 11), wr = Jt[0], zn = Jt[1], jr = Jt[2], hn = Jt[3], Hn = Jt[4], Vr = Jt[5], Bn = Jt[6], Do = Jt[7], zr = Jt[8], vr = Jt[9], Ar = Jt[10], Dr = Tr(function() {
      $e || Ar();
    });
    PP(xe, Ue, pe, Dr), xt(function() {
      Dr();
    }, [Lr, T]), xt(function() {
      xe && !(F != null && F[T]) && Dr();
    }, [JSON.stringify(D)]);
    var Jr = v.useMemo(function() {
      var Ce = RP(F, i, vr, se);
      return Me(Ce, ne?.(vr));
    }, [vr, ne, F, i, se]);
    v.useImperativeHandle(n, function() {
      return {
        forceAlign: Dr
      };
    });
    var Wn = function(Ae) {
      Re(!1), Ar(), m?.(Ae);
    }, Un = function() {
      return new Promise(function(Ae) {
        ht(function() {
          return Ae;
        });
      });
    };
    xt(function() {
      zt && (Ar(), zt(), ht(null));
    }, [zt]);
    var qn = v.useState(0), vn = G(qn, 2), Fo = vn[0], $o = vn[1], ko = v.useState(0), pn = G(ko, 2), mn = pn[0], Te = pn[1], _e = function(Ae, gt) {
      if (Dr(), Q) {
        var bt = gt.getBoundingClientRect();
        $o(bt.width), Te(bt.height);
      }
    }, Tt = _P(ce, c, u, l), It = G(Tt, 2), dt = It[0], Ct = It[1];
    function ot(Ce, Ae, gt, bt) {
      Se[Ce] = function(Et) {
        var Fi;
        bt?.(Et), ae(Ae, gt);
        for (var Ps = arguments.length, Sf = new Array(Ps > 1 ? Ps - 1 : 0), $i = 1; $i < Ps; $i++)
          Sf[$i - 1] = arguments[$i];
        (Fi = ve[Ce]) === null || Fi === void 0 || Fi.call.apply(Fi, [ve, Et].concat(Sf));
      };
    }
    var Cr = dt.has("click"), Zt = Ct.has("click") || Ct.has("contextMenu");
    (Cr || Zt) && (Se.onClick = function(Ce) {
      var Ae;
      ft.current && Zt ? ae(!1) : !ft.current && Cr && ($t(Ce), ae(!0));
      for (var gt = arguments.length, bt = new Array(gt > 1 ? gt - 1 : 0), Et = 1; Et < gt; Et++)
        bt[Et - 1] = arguments[Et];
      (Ae = ve.onClick) === null || Ae === void 0 || Ae.call.apply(Ae, [ve, Ce].concat(bt));
    }), NP(xe, Zt, Ue, pe, w, C, Ve, ae);
    var nr = dt.has("hover"), er = Ct.has("hover"), Hr, Lo;
    nr && (ot("onMouseEnter", !0, p, function(Ce) {
      $t(Ce);
    }), ot("onPointerEnter", !0, p, function(Ce) {
      $t(Ce);
    }), Hr = function() {
      (xe || $e) && ae(!0, p);
    }, se && (Se.onMouseMove = function(Ce) {
      var Ae;
      (Ae = ve.onMouseMove) === null || Ae === void 0 || Ae.call(ve, Ce);
    })), er && (ot("onMouseLeave", !1, E), ot("onPointerLeave", !1, E), Lo = function() {
      ae(!1, E);
    }), dt.has("focus") && ot("onFocus", !0, y), Ct.has("focus") && ot("onBlur", !1, S), dt.has("contextMenu") && (Se.onContextMenu = function(Ce) {
      var Ae;
      ft.current && Ct.has("contextMenu") ? ae(!1) : ($t(Ce), ae(!0)), Ce.preventDefault();
      for (var gt = arguments.length, bt = new Array(gt > 1 ? gt - 1 : 0), Et = 1; Et < gt; Et++)
        bt[Et - 1] = arguments[Et];
      (Ae = ve.onContextMenu) === null || Ae === void 0 || Ae.call.apply(Ae, [ve, Ce].concat(bt));
    }), X && (Se.className = Me(ve.className, X));
    var jo = W(W({}, ve), Se), Di = {}, _s = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    _s.forEach(function(Ce) {
      Z[Ce] && (Di[Ce] = function() {
        for (var Ae, gt = arguments.length, bt = new Array(gt), Et = 0; Et < gt; Et++)
          bt[Et] = arguments[Et];
        (Ae = jo[Ce]) === null || Ae === void 0 || Ae.call.apply(Ae, [jo].concat(bt)), Z[Ce].apply(Z, bt);
      });
    });
    var xs = /* @__PURE__ */ v.cloneElement(nt, W(W({}, jo), Di)), Rs = {
      x: Vr,
      y: Bn
    }, Ts = j ? W({}, j !== !0 ? j : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement($n, {
      disabled: !xe,
      ref: Xt,
      onResize: _e
    }, /* @__PURE__ */ v.createElement(z0, {
      getTriggerDOMNode: M
    }, xs)), /* @__PURE__ */ v.createElement(ov.Provider, {
      value: de
    }, /* @__PURE__ */ v.createElement(V0, {
      portal: e,
      ref: at,
      prefixCls: i,
      popup: L,
      className: Me(R, Jr),
      style: _,
      target: Ue,
      onMouseEnter: Hr,
      onMouseLeave: Lo,
      onPointerEnter: Hr,
      zIndex: B,
      open: xe,
      keepDom: $e,
      onClick: $,
      mask: w,
      motion: mt,
      maskMotion: Fe,
      onVisibleChanged: Wn,
      onPrepare: Un,
      forceRender: P,
      autoDestroy: V,
      getPopupContainer: O,
      align: vr,
      arrow: Ts,
      arrowPos: Rs,
      ready: wr,
      offsetX: zn,
      offsetY: jr,
      offsetR: hn,
      offsetB: Hn,
      onAlign: Dr,
      stretch: Q,
      targetWidth: Fo / Do,
      targetHeight: mn / zr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const FP = DP(sf);
var $P = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], kP = function(t) {
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
}, LP = function(t, r) {
  var n = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, a = t.popupElement, s = t.containerWidth, c = t.animation, u = t.transitionName, l = t.dropdownStyle, f = t.dropdownClassName, d = t.direction, h = d === void 0 ? "ltr" : d, m = t.placement, p = t.builtinPlacements, g = t.dropdownMatchSelectWidth, E = t.dropdownRender, y = t.dropdownAlign, S = t.getPopupContainer, w = t.empty, b = t.getTriggerDOMNode, C = t.onPopupVisibleChange, O = t.onPopupMouseEnter, P = Nt(t, $P), N = "".concat(n, "-dropdown"), x = a;
  E && (x = E(a));
  var L = v.useMemo(function() {
    return p || kP(g);
  }, [p, g]), R = c ? "".concat(N, "-").concat(c) : u, _ = v.useRef(null);
  v.useImperativeHandle(r, function() {
    return {
      getPopupElement: function() {
        return _.current;
      }
    };
  });
  var T = W({
    minWidth: s
  }, l);
  return typeof g == "number" ? T.width = g : g && (T.width = s), /* @__PURE__ */ v.createElement(FP, et({}, P, {
    showAction: C ? ["click"] : [],
    hideAction: C ? ["click"] : [],
    popupPlacement: m || (h === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: L,
    prefixCls: N,
    popupTransitionName: R,
    popup: /* @__PURE__ */ v.createElement("div", {
      ref: _,
      onMouseEnter: O
    }, x),
    popupAlign: y,
    popupVisible: o,
    getPopupContainer: S,
    popupClassName: Me(f, be({}, "".concat(N, "-empty"), w)),
    popupStyle: T,
    getTriggerDOMNode: b,
    onPopupVisibleChange: C
  }), i);
}, H0 = /* @__PURE__ */ v.forwardRef(LP);
H0.displayName = "SelectTrigger";
function fv(e, t) {
  var r = e.key, n;
  return "value" in e && (n = e.value), r ?? (n !== void 0 ? n : "rc-index-key-".concat(t));
}
function B0(e, t) {
  var r = e || {}, n = r.label, o = r.value, i = r.options, a = r.groupLabel, s = n || (t ? "children" : "label");
  return {
    label: s,
    value: o || "value",
    options: i || "options",
    groupLabel: a || s
  };
}
function jP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fieldNames, n = t.childrenAsData, o = [], i = B0(r, !1), a = i.label, s = i.value, c = i.options, u = i.groupLabel;
  function l(f, d) {
    f.forEach(function(h) {
      if (d || !(c in h)) {
        var m = h[s];
        o.push({
          key: fv(h, o.length),
          groupOption: d,
          data: h,
          label: h[a],
          value: m
        });
      } else {
        var p = h[u];
        p === void 0 && n && (p = h.label), o.push({
          key: fv(h, o.length),
          group: !0,
          data: h,
          label: p
        }), l(h[c], !0);
      }
    });
  }
  return l(e, !1), o;
}
function Bu(e) {
  var t = W({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return ke(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function VP(e, t) {
  if (!t || !t.length)
    return null;
  var r = !1;
  function n(i, a) {
    var s = Dm(a), c = s[0], u = s.slice(1);
    if (!c)
      return [i];
    var l = i.split(c);
    return r = r || l.length > 1, l.reduce(function(f, d) {
      return [].concat(Ee(f), Ee(n(d, u)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var o = n(e, t);
  return r ? o : null;
}
function zP(e, t, r, n, o) {
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
    clearIcon: /* @__PURE__ */ Pe.createElement(ws, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var HP = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], BP = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function Ba(e) {
  return e === "tags" || e === "multiple";
}
var W0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, o = e.id, i = e.prefixCls, a = e.className, s = e.showSearch, c = e.tagRender, u = e.direction, l = e.omitDomProps, f = e.displayValues, d = e.onDisplayValuesChange, h = e.emptyOptions, m = e.notFoundContent, p = m === void 0 ? "Not Found" : m, g = e.onClear, E = e.mode, y = e.disabled, S = e.loading, w = e.getInputElement, b = e.getRawInputElement, C = e.open, O = e.defaultOpen, P = e.onDropdownVisibleChange, N = e.activeValue, x = e.onActiveValueChange, L = e.activeDescendantId, R = e.searchValue, _ = e.autoClearSearchValue, T = e.onSearch, A = e.onSearchSplit, F = e.tokenSeparators, D = e.allowClear, B = e.suffixIcon, Q = e.clearIcon, ne = e.OptionList, se = e.animation, $ = e.transitionName, H = e.dropdownStyle, j = e.dropdownClassName, K = e.dropdownMatchSelectWidth, I = e.dropdownRender, q = e.dropdownAlign, k = e.placement, J = e.builtinPlacements, re = e.getPopupContainer, X = e.showAction, M = X === void 0 ? [] : X, Z = e.onFocus, V = e.onBlur, ee = e.onKeyUp, fe = e.onKeyDown, ce = e.onMouseDown, he = Nt(e, HP), ge = Ba(E), oe = (s !== void 0 ? s : ge) || E === "combobox", de = W({}, he);
  BP.forEach(function(Te) {
    delete de[Te];
  }), l?.forEach(function(Te) {
    delete de[Te];
  });
  var Ne = v.useState(!1), Ie = G(Ne, 2), ie = Ie[0], pe = Ie[1];
  v.useEffect(function() {
    pe(N0());
  }, []);
  var tt = v.useRef(null), at = v.useRef(null), rt = v.useRef(null), We = v.useRef(null), Ue = v.useRef(null), st = eP(), Xt = G(st, 3), nt = Xt[0], ve = Xt[1], Se = Xt[2];
  v.useImperativeHandle(t, function() {
    var Te, _e;
    return {
      focus: (Te = We.current) === null || Te === void 0 ? void 0 : Te.focus,
      blur: (_e = We.current) === null || _e === void 0 ? void 0 : _e.blur,
      scrollTo: function(It) {
        var dt;
        return (dt = Ue.current) === null || dt === void 0 ? void 0 : dt.scrollTo(It);
      }
    };
  });
  var Ve = v.useMemo(function() {
    var Te;
    if (E !== "combobox")
      return R;
    var _e = (Te = f[0]) === null || Te === void 0 ? void 0 : Te.value;
    return typeof _e == "string" || typeof _e == "number" ? String(_e) : "";
  }, [R, E, f]), mt = E === "combobox" && typeof w == "function" && w() || null, Fe = typeof b == "function" && b(), qe = Nl(at, Fe == null || (r = Fe.props) === null || r === void 0 ? void 0 : r.ref), Oe = v.useState(!1), lt = G(Oe, 2), Rt = lt[0], xe = lt[1];
  xt(function() {
    xe(!0);
  }, []);
  var ze = Da(!1, {
    defaultValue: O,
    value: C
  }), ft = G(ze, 2), pt = ft[0], we = ft[1], Y = Rt ? pt : !1, ae = !p && h;
  (y || ae && Y && E === "combobox") && (Y = !1);
  var le = ae ? !1 : Y, ye = v.useCallback(function(Te) {
    var _e = Te !== void 0 ? Te : !Y;
    y || (we(_e), Y !== _e && P?.(_e));
  }, [y, Y, we, P]), $e = v.useMemo(function() {
    return (F || []).some(function(Te) {
      return [`
`, `\r
`].includes(Te);
    });
  }, [F]), Re = function(_e, Tt, It) {
    var dt = !0, Ct = _e;
    x?.(null);
    var ot = It ? null : VP(_e, F);
    return E !== "combobox" && ot && (Ct = "", A?.(ot), ye(!1), dt = !1), T && Ve !== Ct && T(Ct, {
      source: Tt ? "typing" : "effect"
    }), dt;
  }, Qt = function(_e) {
    !_e || !_e.trim() || T(_e, {
      source: "submit"
    });
  };
  v.useEffect(function() {
    !Y && !ge && E !== "combobox" && Re("", !1, !1);
  }, [Y]), v.useEffect(function() {
    pt && y && we(!1), y && ve(!1);
  }, [y]);
  var Mt = I0(), zt = G(Mt, 2), ht = zt[0], ar = zt[1], Gt = function(_e) {
    var Tt = ht(), It = _e.which;
    if (It === te.ENTER && (E !== "combobox" && _e.preventDefault(), Y || ye(!0)), ar(!!Ve), It === te.BACKSPACE && !Tt && ge && !Ve && f.length) {
      for (var dt = Ee(f), Ct = null, ot = dt.length - 1; ot >= 0; ot -= 1) {
        var Cr = dt[ot];
        if (!Cr.disabled) {
          dt.splice(ot, 1), Ct = Cr;
          break;
        }
      }
      Ct && d(dt, {
        type: "remove",
        values: [Ct]
      });
    }
    for (var Zt = arguments.length, nr = new Array(Zt > 1 ? Zt - 1 : 0), er = 1; er < Zt; er++)
      nr[er - 1] = arguments[er];
    if (Y && Ue.current) {
      var Hr;
      (Hr = Ue.current).onKeyDown.apply(Hr, [_e].concat(nr));
    }
    fe?.apply(void 0, [_e].concat(nr));
  }, Lr = function(_e) {
    for (var Tt = arguments.length, It = new Array(Tt > 1 ? Tt - 1 : 0), dt = 1; dt < Tt; dt++)
      It[dt - 1] = arguments[dt];
    if (Y && Ue.current) {
      var Ct;
      (Ct = Ue.current).onKeyUp.apply(Ct, [_e].concat(It));
    }
    ee?.apply(void 0, [_e].concat(It));
  }, Vn = function(_e) {
    var Tt = f.filter(function(It) {
      return It !== _e;
    });
    d(Tt, {
      type: "remove",
      values: [_e]
    });
  }, $t = v.useRef(!1), rr = function() {
    ve(!0), y || (Z && !$t.current && Z.apply(void 0, arguments), M.includes("focus") && ye(!0)), $t.current = !0;
  }, Jt = function() {
    ve(!1, function() {
      $t.current = !1, ye(!1);
    }), !y && (Ve && (E === "tags" ? T(Ve, {
      source: "submit"
    }) : E === "multiple" && T("", {
      source: "blur"
    })), V && V.apply(void 0, arguments));
  }, wr = [];
  v.useEffect(function() {
    return function() {
      wr.forEach(function(Te) {
        return clearTimeout(Te);
      }), wr.splice(0, wr.length);
    };
  }, []);
  var zn = function(_e) {
    var Tt, It = _e.target, dt = (Tt = rt.current) === null || Tt === void 0 ? void 0 : Tt.getPopupElement();
    if (dt && dt.contains(It)) {
      var Ct = setTimeout(function() {
        var nr = wr.indexOf(Ct);
        if (nr !== -1 && wr.splice(nr, 1), Se(), !ie && !dt.contains(document.activeElement)) {
          var er;
          (er = We.current) === null || er === void 0 || er.focus();
        }
      });
      wr.push(Ct);
    }
    for (var ot = arguments.length, Cr = new Array(ot > 1 ? ot - 1 : 0), Zt = 1; Zt < ot; Zt++)
      Cr[Zt - 1] = arguments[Zt];
    ce?.apply(void 0, [_e].concat(Cr));
  }, jr = v.useState(null), hn = G(jr, 2), Hn = hn[0], Vr = hn[1], Bn = v.useState({}), Do = G(Bn, 2), zr = Do[1];
  function vr() {
    zr({});
  }
  xt(function() {
    if (le) {
      var Te, _e = Math.ceil((Te = tt.current) === null || Te === void 0 ? void 0 : Te.getBoundingClientRect().width);
      Hn !== _e && !Number.isNaN(_e) && Vr(_e);
    }
  }, [le]);
  var Ar;
  Fe && (Ar = function(_e) {
    ye(_e);
  }), tP(function() {
    var Te;
    return [tt.current, (Te = rt.current) === null || Te === void 0 ? void 0 : Te.getPopupElement()];
  }, le, ye, !!Fe);
  var Dr = v.useMemo(function() {
    return W(W({}, e), {}, {
      notFoundContent: p,
      open: Y,
      triggerOpen: le,
      id: o,
      showSearch: oe,
      multiple: ge,
      toggleOpen: ye
    });
  }, [e, p, le, Y, o, oe, ge, ye]), Jr = !!B || S, Wn;
  Jr && (Wn = /* @__PURE__ */ v.createElement(ws, {
    className: Me("".concat(i, "-arrow"), be({}, "".concat(i, "-arrow-loading"), S)),
    customizeIcon: B,
    customizeIconProps: {
      loading: S,
      searchValue: Ve,
      open: Y,
      focused: nt,
      showSearch: oe
    }
  })), process.env.NODE_ENV !== "production" && ke(!e.clearIcon, "`clearIcon` will be removed in future. Please use `allowClear` instead.");
  var Un = function() {
    var _e;
    g?.(), (_e = We.current) === null || _e === void 0 || _e.focus(), d([], {
      type: "clear",
      values: f
    }), Re("", !1, !1);
  }, qn = zP(i, Un, f, D, Q, y, Ve, E), vn = qn.allowClear, Fo = qn.clearIcon, $o = /* @__PURE__ */ v.createElement(ne, {
    ref: Ue
  }), ko = Me(i, a, (n = {}, be(n, "".concat(i, "-focused"), nt), be(n, "".concat(i, "-multiple"), ge), be(n, "".concat(i, "-single"), !ge), be(n, "".concat(i, "-allow-clear"), D), be(n, "".concat(i, "-show-arrow"), Jr), be(n, "".concat(i, "-disabled"), y), be(n, "".concat(i, "-loading"), S), be(n, "".concat(i, "-open"), Y), be(n, "".concat(i, "-customize-input"), mt), be(n, "".concat(i, "-show-search"), oe), n)), pn = /* @__PURE__ */ v.createElement(H0, {
    ref: rt,
    disabled: y,
    prefixCls: i,
    visible: le,
    popupElement: $o,
    containerWidth: Hn,
    animation: se,
    transitionName: $,
    dropdownStyle: H,
    dropdownClassName: j,
    direction: u,
    dropdownMatchSelectWidth: K,
    dropdownRender: I,
    dropdownAlign: q,
    placement: k,
    builtinPlacements: J,
    getPopupContainer: re,
    empty: h,
    getTriggerDOMNode: function() {
      return at.current;
    },
    onPopupVisibleChange: Ar,
    onPopupMouseEnter: vr
  }, Fe ? /* @__PURE__ */ v.cloneElement(Fe, {
    ref: qe
  }) : /* @__PURE__ */ v.createElement(k0, et({}, e, {
    domRef: at,
    prefixCls: i,
    inputElement: mt,
    ref: We,
    id: o,
    showSearch: oe,
    autoClearSearchValue: _,
    mode: E,
    activeDescendantId: L,
    tagRender: c,
    values: f,
    open: Y,
    onToggleOpen: ye,
    activeValue: N,
    searchValue: Ve,
    onSearch: Re,
    onSearchSubmit: Qt,
    onRemove: Vn,
    tokenWithEnter: $e
  }))), mn;
  return Fe ? mn = pn : mn = /* @__PURE__ */ v.createElement("div", et({
    className: ko
  }, de, {
    ref: tt,
    onMouseDown: zn,
    onKeyDown: Gt,
    onKeyUp: Lr,
    onFocus: rr,
    onBlur: Jt
  }), nt && !Y && /* @__PURE__ */ v.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Te) {
    var _e = Te.label, Tt = Te.value;
    return ["number", "string"].includes(Be(_e)) ? _e : Tt;
  }).join(", "))), pn, Wn, vn && Fo), /* @__PURE__ */ v.createElement(M0.Provider, {
    value: Dr
  }, mn);
});
process.env.NODE_ENV !== "production" && (W0.displayName = "BaseSelect");
const WP = function(e, t) {
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
function vc(e, t) {
  return lf(e).join("").toUpperCase().includes(t);
}
const UP = function(e, t, r, n, o) {
  return v.useMemo(function() {
    if (!r || n === !1)
      return e;
    var i = t.options, a = t.label, s = t.value, c = [], u = typeof n == "function", l = r.toUpperCase(), f = u ? n : function(h, m) {
      return o ? vc(m[o], l) : m[i] ? vc(m[a !== "children" ? a : "label"], l) : vc(m[s], l);
    }, d = u ? function(h) {
      return Bu(h);
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
          p.length && c.push(W(W({}, h), {}, be({}, i, p)));
        }
        return;
      }
      f(r, d(h)) && c.push(h);
    }), c;
  }, [e, n, o, r, t]);
};
var dv = 0, qP = process.env.NODE_ENV !== "test" && Yt();
function QP() {
  var e;
  return qP ? (e = dv, dv += 1) : e = "TEST_OR_SSR", e;
}
function GP(e) {
  var t = v.useState(), r = G(t, 2), n = r[0], o = r[1];
  return v.useEffect(function() {
    o("rc_select_".concat(QP()));
  }, []), e || n;
}
var KP = ["children", "value"], YP = ["children"];
function XP(e) {
  var t = e, r = t.key, n = t.props, o = n.children, i = n.value, a = Nt(n, KP);
  return W({
    key: r,
    value: i !== void 0 ? i : r,
    children: o
  }, a);
}
function ff(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return In(e).map(function(r, n) {
    if (!/* @__PURE__ */ v.isValidElement(r) || !r.type)
      return null;
    var o = r, i = o.type.isSelectOptGroup, a = o.key, s = o.props, c = s.children, u = Nt(s, YP);
    return t || !i ? XP(r) : W(W({
      key: "__RC_SELECT_GRP__".concat(a === null ? n : a, "__"),
      label: a
    }, u), {}, {
      options: ff(c)
    });
  }).filter(function(r) {
    return r;
  });
}
function JP(e, t, r, n, o) {
  return v.useMemo(function() {
    var i = e, a = !e;
    a && (i = ff(t));
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
function hv(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return r;
}
var df = function() {
  return null;
};
df.isSelectOptGroup = !0;
var hf = function() {
  return null;
};
hf.isSelectOption = !0;
var U0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
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
  }, /* @__PURE__ */ v.createElement($n, {
    onResize: function(f) {
      var d = f.offsetHeight;
      d && a && a();
    }
  }, /* @__PURE__ */ v.createElement("div", et({
    style: u,
    className: Me(be({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), o)));
});
U0.displayName = "Filler";
var ZP = 20;
function vv(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var eN = /* @__PURE__ */ function(e) {
  wi(r, e);
  var t = Ci(r);
  function r() {
    var n;
    Er(this, r);
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
      window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("mouseup", n.onMouseUp), n.thumbRef.current && (n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove), n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)), Ut.cancel(n.moveRaf);
    }, n.onMouseDown = function(s) {
      var c = n.props.onStartMove;
      n.setState({
        dragging: !0,
        pageY: vv(s),
        startTop: n.getTop()
      }), c(), n.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, n.onMouseMove = function(s) {
      var c = n.state, u = c.dragging, l = c.pageY, f = c.startTop, d = n.props.onScroll;
      if (Ut.cancel(n.moveRaf), u) {
        var h = vv(s) - l, m = f + h, p = n.getEnableScrollRange(), g = n.getEnableHeightRange(), E = g ? m / g : 0, y = Math.ceil(E * p);
        n.moveRaf = Ut(function() {
          d(y);
        });
      }
    }, n.onMouseUp = function() {
      var s = n.props.onStopMove;
      n.setState({
        dragging: !1
      }), s(), n.removeEvents();
    }, n.getSpinHeight = function() {
      var s = n.props, c = s.height, u = s.count, l = c / u * 10;
      return l = Math.max(l, ZP), l = Math.min(l, c / 2), Math.floor(l);
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
          className: Me("".concat(c, "-scrollbar"), be({}, "".concat(c, "-scrollbar-show"), d)),
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
          className: Me("".concat(c, "-scrollbar-thumb"), be({}, "".concat(c, "-scrollbar-thumb-moving"), i)),
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
function tN(e) {
  var t = e.children, r = e.setRef, n = v.useCallback(function(o) {
    r(o);
  }, []);
  return /* @__PURE__ */ v.cloneElement(t, {
    ref: n
  });
}
function rN(e, t, r, n, o, i) {
  var a = i.getKey;
  return e.slice(t, r + 1).map(function(s, c) {
    var u = t + c, l = o(s, u, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), f = a(s);
    return /* @__PURE__ */ v.createElement(tN, {
      key: f,
      setRef: function(h) {
        return n(s, h);
      }
    }, l);
  });
}
var nN = /* @__PURE__ */ function() {
  function e() {
    Er(this, e), this.maps = void 0, this.maps = /* @__PURE__ */ Object.create(null);
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
function oN(e, t, r) {
  var n = v.useState(0), o = G(n, 2), i = o[0], a = o[1], s = De(/* @__PURE__ */ new Map()), c = De(new nN()), u = De();
  function l() {
    Ut.cancel(u.current);
  }
  function f() {
    l(), u.current = Ut(function() {
      s.current.forEach(function(h, m) {
        if (h && h.offsetParent) {
          var p = Pa(h), g = p.offsetHeight;
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
  return Wt(function() {
    return l;
  }, []), [d, f, c.current, i];
}
function iN(e, t, r, n, o, i, a, s) {
  var c = v.useRef();
  return function(u) {
    if (u == null) {
      s();
      return;
    }
    if (Ut.cancel(c.current), typeof u == "number")
      a(u);
    else if (u && Be(u) === "object") {
      var l, f = u.align;
      "index" in u ? l = u.index : l = t.findIndex(function(p) {
        return o(p) === u.key;
      });
      var d = u.offset, h = d === void 0 ? 0 : d, m = function p(g, E) {
        if (!(g < 0 || !e.current)) {
          var y = e.current.clientHeight, S = !1, w = E;
          if (y) {
            for (var b = E || f, C = 0, O = 0, P = 0, N = Math.min(t.length, l), x = 0; x <= N; x += 1) {
              var L = o(t[x]);
              O = C;
              var R = r.get(L);
              P = O + (R === void 0 ? n : R), C = P, x === l && R === void 0 && (S = !0);
            }
            var _ = null;
            switch (b) {
              case "top":
                _ = O - h;
                break;
              case "bottom":
                _ = P - y + h;
                break;
              default: {
                var T = e.current.scrollTop, A = T + y;
                O < T ? w = "top" : P > A && (w = "bottom");
              }
            }
            _ !== null && _ !== e.current.scrollTop && a(_);
          }
          c.current = Ut(function() {
            S && i(), p(g - 1, w);
          }, 2);
        }
      };
      m(3);
    }
  };
}
function aN(e, t, r) {
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
function sN(e, t, r) {
  var n = v.useState(e), o = G(n, 2), i = o[0], a = o[1], s = v.useState(null), c = G(s, 2), u = c[0], l = c[1];
  return v.useEffect(function() {
    var f = aN(i || [], e || [], t);
    f?.index !== void 0 && (r?.(f.index), l(e[f.index])), a(e);
  }, [e]), [u];
}
var cN = (typeof navigator > "u" ? "undefined" : Be(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const q0 = function(e, t) {
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
function uN(e, t, r, n) {
  var o = De(0), i = De(null), a = De(null), s = De(!1), c = q0(t, r);
  function u(f) {
    if (e) {
      Ut.cancel(i.current);
      var d = f.deltaY;
      o.current += d, a.current = d, !c(d) && (cN || f.preventDefault(), i.current = Ut(function() {
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
var lN = 14 / 15;
function fN(e, t, r) {
  var n = De(!1), o = De(0), i = De(null), a = De(null), s, c = function(d) {
    if (n.current) {
      var h = Math.ceil(d.touches[0].pageY), m = o.current - h;
      o.current = h, r(m) && d.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        m *= lN, (!r(m, !0) || Math.abs(m) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, u = function() {
    n.current = !1, s();
  }, l = function(d) {
    s(), d.touches.length === 1 && !n.current && (n.current = !0, o.current = Math.ceil(d.touches[0].pageY), i.current = d.target, i.current.addEventListener("touchmove", c), i.current.addEventListener("touchend", u));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", u));
  }, xt(function() {
    return e && t.current.addEventListener("touchstart", l), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", l), s(), clearInterval(a.current);
    };
  }, [e]);
}
var dN = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], hN = [], vN = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function pN(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-virtual-list" : r, o = e.className, i = e.height, a = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, u = e.style, l = e.data, f = e.children, d = e.itemKey, h = e.virtual, m = e.direction, p = e.component, g = p === void 0 ? "div" : p, E = e.onScroll, y = e.onVisibleChange, S = e.innerProps, w = Nt(e, dN), b = !!(h !== !1 && i && a), C = b && l && a * l.length > i, O = fr(0), P = G(O, 2), N = P[0], x = P[1], L = fr(!1), R = G(L, 2), _ = R[0], T = R[1], A = Me(n, be({}, "".concat(n, "-rtl"), m === "rtl"), o), F = l || hN, D = De(), B = De(), Q = De(), ne = v.useCallback(function(ve) {
    return typeof d == "function" ? d(ve) : ve?.[d];
  }, [d]), se = {
    getKey: ne
  };
  function $(ve) {
    x(function(Se) {
      var Ve;
      typeof ve == "function" ? Ve = ve(Se) : Ve = ve;
      var mt = de(Ve);
      return D.current.scrollTop = mt, mt;
    });
  }
  var H = De({
    start: 0,
    end: F.length
  }), j = De(), K = sN(F, ne), I = G(K, 1), q = I[0];
  j.current = q;
  var k = oN(ne, null, null), J = G(k, 4), re = J[0], X = J[1], M = J[2], Z = J[3], V = v.useMemo(function() {
    if (!b)
      return {
        scrollHeight: void 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    if (!C) {
      var ve;
      return {
        scrollHeight: ((ve = B.current) === null || ve === void 0 ? void 0 : ve.offsetHeight) || 0,
        start: 0,
        end: F.length - 1,
        offset: void 0
      };
    }
    for (var Se = 0, Ve, mt, Fe, qe = F.length, Oe = 0; Oe < qe; Oe += 1) {
      var lt = F[Oe], Rt = ne(lt), xe = M.get(Rt), ze = Se + (xe === void 0 ? a : xe);
      ze >= N && Ve === void 0 && (Ve = Oe, mt = Se), ze > N + i && Fe === void 0 && (Fe = Oe), Se = ze;
    }
    return Ve === void 0 && (Ve = 0, mt = 0, Fe = Math.ceil(i / a)), Fe === void 0 && (Fe = F.length - 1), Fe = Math.min(Fe + 1, F.length), {
      scrollHeight: Se,
      start: Ve,
      end: Fe,
      offset: mt
    };
  }, [C, b, N, F, Z, i]), ee = V.scrollHeight, fe = V.start, ce = V.end, he = V.offset;
  H.current.start = fe, H.current.end = ce;
  var ge = ee - i, oe = De(ge);
  oe.current = ge;
  function de(ve) {
    var Se = ve;
    return Number.isNaN(oe.current) || (Se = Math.min(Se, oe.current)), Se = Math.max(Se, 0), Se;
  }
  var Ne = N <= 0, Ie = N >= ge, ie = q0(Ne, Ie);
  function pe(ve) {
    var Se = ve;
    $(Se);
  }
  function tt(ve) {
    var Se = ve.currentTarget.scrollTop;
    Se !== N && $(Se), E?.(ve);
  }
  var at = uN(b, Ne, Ie, function(ve) {
    $(function(Se) {
      var Ve = Se + ve;
      return Ve;
    });
  }), rt = G(at, 2), We = rt[0], Ue = rt[1];
  fN(b, D, function(ve, Se) {
    return ie(ve, Se) ? !1 : (We({
      preventDefault: function() {
      },
      deltaY: ve
    }), !0);
  }), xt(function() {
    function ve(Se) {
      b && Se.preventDefault();
    }
    return D.current.addEventListener("wheel", We), D.current.addEventListener("DOMMouseScroll", Ue), D.current.addEventListener("MozMousePixelScroll", ve), function() {
      D.current && (D.current.removeEventListener("wheel", We), D.current.removeEventListener("DOMMouseScroll", Ue), D.current.removeEventListener("MozMousePixelScroll", ve));
    };
  }, [b]);
  var st = iN(D, F, M, a, ne, X, $, function() {
    var ve;
    (ve = Q.current) === null || ve === void 0 || ve.delayHidden();
  });
  v.useImperativeHandle(t, function() {
    return {
      scrollTo: st
    };
  }), xt(function() {
    if (y) {
      var ve = F.slice(fe, ce + 1);
      y(ve, F);
    }
  }, [fe, ce, F]);
  var Xt = rN(F, fe, ce, re, f, se), nt = null;
  return i && (nt = W(be({}, c ? "height" : "maxHeight", i), vN), b && (nt.overflowY = "hidden", _ && (nt.pointerEvents = "none"))), /* @__PURE__ */ v.createElement("div", et({
    style: W(W({}, u), {}, {
      position: "relative"
    }),
    className: A
  }, w), /* @__PURE__ */ v.createElement(g, {
    className: "".concat(n, "-holder"),
    style: nt,
    ref: D,
    onScroll: tt
  }, /* @__PURE__ */ v.createElement(U0, {
    prefixCls: n,
    height: ee,
    offset: he,
    onInnerResize: X,
    ref: B,
    innerProps: S
  }, Xt)), b && /* @__PURE__ */ v.createElement(eN, {
    ref: Q,
    prefixCls: n,
    scrollTop: N,
    height: i,
    scrollHeight: ee,
    count: F.length,
    direction: m,
    onScroll: pe,
    onStartMove: function() {
      T(!0);
    },
    onStopMove: function() {
      T(!1);
    }
  }));
}
var Q0 = /* @__PURE__ */ v.forwardRef(pN);
Q0.displayName = "List";
var G0 = /* @__PURE__ */ v.createContext(null);
function mN() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var gN = ["disabled", "title", "children", "style", "className"];
function pv(e) {
  return typeof e == "string" || typeof e == "number";
}
var yN = function(t, r) {
  var n = ZT(), o = n.prefixCls, i = n.id, a = n.open, s = n.multiple, c = n.mode, u = n.searchValue, l = n.toggleOpen, f = n.notFoundContent, d = n.onPopupScroll, h = v.useContext(G0), m = h.flattenOptions, p = h.onActiveValue, g = h.defaultActiveFirstOption, E = h.onSelect, y = h.menuItemSelectedIcon, S = h.rawValues, w = h.fieldNames, b = h.virtual, C = h.direction, O = h.listHeight, P = h.listItemHeight, N = "".concat(o, "-item"), x = ss(function() {
    return m;
  }, [a, m], function(q, k) {
    return k[0] && q[1] !== k[1];
  }), L = v.useRef(null), R = function(k) {
    k.preventDefault();
  }, _ = function(k) {
    L.current && L.current.scrollTo(typeof k == "number" ? {
      index: k
    } : k);
  }, T = function(k) {
    for (var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, re = x.length, X = 0; X < re; X += 1) {
      var M = (k + X * J + re) % re, Z = x[M], V = Z.group, ee = Z.data;
      if (!V && !ee.disabled)
        return M;
    }
    return -1;
  }, A = v.useState(function() {
    return T(0);
  }), F = G(A, 2), D = F[0], B = F[1], Q = function(k) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B(k);
    var re = {
      source: J ? "keyboard" : "mouse"
    }, X = x[k];
    if (!X) {
      p(null, -1, re);
      return;
    }
    p(X.value, k, re);
  };
  Wt(function() {
    Q(g !== !1 ? T(0) : -1);
  }, [x.length, u]);
  var ne = v.useCallback(function(q) {
    return S.has(q) && c !== "combobox";
  }, [c, Ee(S).toString(), S.size]);
  Wt(function() {
    var q = setTimeout(function() {
      if (!s && a && S.size === 1) {
        var J = Array.from(S)[0], re = x.findIndex(function(X) {
          var M = X.data;
          return M.value === J;
        });
        re !== -1 && (Q(re), _(re));
      }
    });
    if (a) {
      var k;
      (k = L.current) === null || k === void 0 || k.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(q);
    };
  }, [a, u, m.length]);
  var se = function(k) {
    k !== void 0 && E(k, {
      selected: !S.has(k)
    }), s || l(!1);
  };
  if (v.useImperativeHandle(r, function() {
    return {
      onKeyDown: function(k) {
        var J = k.which, re = k.ctrlKey;
        switch (J) {
          case te.N:
          case te.P:
          case te.UP:
          case te.DOWN: {
            var X = 0;
            if (J === te.UP ? X = -1 : J === te.DOWN ? X = 1 : mN() && re && (J === te.N ? X = 1 : J === te.P && (X = -1)), X !== 0) {
              var M = T(D + X, X);
              _(M), Q(M, !0);
            }
            break;
          }
          case te.ENTER: {
            var Z = x[D];
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
        _(k);
      }
    };
  }), x.length === 0)
    return /* @__PURE__ */ v.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(N, "-empty"),
      onMouseDown: R
    }, f);
  var $ = Object.keys(w).map(function(q) {
    return w[q];
  }), H = function(k) {
    return k.label;
  };
  function j(q, k) {
    var J = q.group;
    return {
      role: J ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(k)
    };
  }
  var K = function(k) {
    var J = x[k];
    if (!J)
      return null;
    var re = J.data || {}, X = re.value, M = J.group, Z = La(re, !0), V = H(J);
    return J ? /* @__PURE__ */ v.createElement("div", et({
      "aria-label": typeof V == "string" && !M ? V : null
    }, Z, {
      key: k
    }, j(J, k), {
      "aria-selected": ne(X)
    }), X) : null;
  }, I = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, b && /* @__PURE__ */ v.createElement("div", et({}, I, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), K(D - 1), K(D), K(D + 1)), /* @__PURE__ */ v.createElement(Q0, {
    itemKey: "key",
    ref: L,
    data: x,
    height: O,
    itemHeight: P,
    fullHeight: !1,
    onMouseDown: R,
    onScroll: d,
    virtual: b,
    direction: C,
    innerProps: b ? null : I
  }, function(q, k) {
    var J, re = q.group, X = q.groupOption, M = q.data, Z = q.label, V = q.value, ee = M.key;
    if (re) {
      var fe, ce = (fe = M.title) !== null && fe !== void 0 ? fe : pv(Z) ? Z.toString() : void 0;
      return /* @__PURE__ */ v.createElement("div", {
        className: Me(N, "".concat(N, "-group")),
        title: ce
      }, Z !== void 0 ? Z : ee);
    }
    var he = M.disabled, ge = M.title;
    M.children;
    var oe = M.style, de = M.className, Ne = Nt(M, gN), Ie = Ml(Ne, $), ie = ne(V), pe = "".concat(N, "-option"), tt = Me(N, pe, de, (J = {}, be(J, "".concat(pe, "-grouped"), X), be(J, "".concat(pe, "-active"), D === k && !he), be(J, "".concat(pe, "-disabled"), he), be(J, "".concat(pe, "-selected"), ie), J)), at = H(q), rt = !y || typeof y == "function" || ie, We = typeof at == "number" ? at : at || V, Ue = pv(We) ? We.toString() : void 0;
    return ge !== void 0 && (Ue = ge), /* @__PURE__ */ v.createElement("div", et({}, La(Ie), b ? {} : j(q, k), {
      "aria-selected": ie,
      className: tt,
      title: Ue,
      onMouseMove: function() {
        D === k || he || Q(k);
      },
      onClick: function() {
        he || se(V);
      },
      style: oe
    }), /* @__PURE__ */ v.createElement("div", {
      className: "".concat(pe, "-content")
    }, We), /* @__PURE__ */ v.isValidElement(y) || ie, rt && /* @__PURE__ */ v.createElement(ws, {
      className: "".concat(N, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        isSelected: ie
      }
    }, ie ? "✓" : null));
  }));
}, K0 = /* @__PURE__ */ v.forwardRef(yN);
K0.displayName = "OptionList";
function bN(e) {
  var t = e.mode, r = e.options, n = e.children, o = e.backfill, i = e.allowClear, a = e.placeholder, s = e.getInputElement, c = e.showSearch, u = e.onSearch, l = e.defaultOpen, f = e.autoFocus, d = e.labelInValue, h = e.value, m = e.inputValue, p = e.optionLabelProp, g = Ba(t), E = c !== void 0 ? c : g || t === "combobox", y = r || ff(n);
  if (ke(t !== "tags" || y.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var S = y.some(function(C) {
      return C.options ? C.options.some(function(O) {
        return typeof ("value" in O ? O.value : O.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    ke(!S, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (ke(t !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), ke(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), ke(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), eu(t !== "combobox" || !s || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !E && t !== "combobox" && t !== "tags" && ke(!1, "`onSearch` should work with `showSearch` instead of use alone."), eu(!l || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var w = lf(h);
    ke(!d || w.every(function(C) {
      return Be(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), ke(!g || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (n) {
    var b = null;
    In(n).some(function(C) {
      if (!/* @__PURE__ */ v.isValidElement(C) || !C.type)
        return !1;
      var O = C, P = O.type;
      if (P.isSelectOption)
        return !1;
      if (P.isSelectOptGroup) {
        var N = In(C.props.children).every(function(x) {
          return !/* @__PURE__ */ v.isValidElement(x) || !C.type || x.type.isSelectOption ? !0 : (b = x.type, !1);
        });
        return !N;
      }
      return b = P, !0;
    }), b && ke(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(b.displayName || b.name || b, "`.")), ke(m === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function EN(e, t) {
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
var SN = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], wN = ["inputValue"];
function CN(e) {
  return !e || Be(e) !== "object";
}
var Y0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.id, n = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, a = e.backfill, s = e.fieldNames, c = e.inputValue, u = e.searchValue, l = e.onSearch, f = e.autoClearSearchValue, d = f === void 0 ? !0 : f, h = e.onSelect, m = e.onDeselect, p = e.dropdownMatchSelectWidth, g = p === void 0 ? !0 : p, E = e.filterOption, y = e.filterSort, S = e.optionFilterProp, w = e.optionLabelProp, b = e.options, C = e.children, O = e.defaultActiveFirstOption, P = e.menuItemSelectedIcon, N = e.virtual, x = e.direction, L = e.listHeight, R = L === void 0 ? 200 : L, _ = e.listItemHeight, T = _ === void 0 ? 20 : _, A = e.value, F = e.defaultValue, D = e.labelInValue, B = e.onChange, Q = Nt(e, SN), ne = GP(r), se = Ba(n), $ = !!(!b && C), H = v.useMemo(function() {
    return E === void 0 && n === "combobox" ? !1 : E;
  }, [E, n]), j = v.useMemo(
    function() {
      return B0(s, $);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      $
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), K = Da("", {
    value: u !== void 0 ? u : c,
    postState: function(ae) {
      return ae || "";
    }
  }), I = G(K, 2), q = I[0], k = I[1], J = JP(b, C, j, S, w), re = J.valueOptions, X = J.labelOptions, M = J.options, Z = v.useCallback(function(Y) {
    var ae = lf(Y);
    return ae.map(function(le) {
      var ye, $e, Re, Qt, Mt;
      if (CN(le))
        ye = le;
      else {
        var zt;
        Re = le.key, $e = le.label, ye = (zt = le.value) !== null && zt !== void 0 ? zt : Re;
      }
      var ht = re.get(ye);
      if (ht) {
        var ar;
        if ($e === void 0 && ($e = ht?.[w || j.label]), Re === void 0 && (Re = (ar = ht?.key) !== null && ar !== void 0 ? ar : ye), Qt = ht?.disabled, Mt = ht?.title, process.env.NODE_ENV !== "production" && !w) {
          var Gt = ht?.[j.label];
          Gt !== void 0 && !/* @__PURE__ */ v.isValidElement(Gt) && !/* @__PURE__ */ v.isValidElement($e) && Gt !== $e && ke(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: $e,
        value: ye,
        key: Re,
        disabled: Qt,
        title: Mt
      };
    });
  }, [j, w, re]), V = Da(F, {
    value: A
  }), ee = G(V, 2), fe = ee[0], ce = ee[1], he = v.useMemo(function() {
    var Y, ae = Z(fe);
    return n === "combobox" && gP((Y = ae[0]) === null || Y === void 0 ? void 0 : Y.value) ? [] : ae;
  }, [fe, Z, n]), ge = WP(he, re), oe = G(ge, 2), de = oe[0], Ne = oe[1], Ie = v.useMemo(function() {
    if (!n && de.length === 1) {
      var Y = de[0];
      if (Y.value === null && (Y.label === null || Y.label === void 0))
        return [];
    }
    return de.map(function(ae) {
      var le;
      return W(W({}, ae), {}, {
        label: (le = ae.label) !== null && le !== void 0 ? le : ae.value
      });
    });
  }, [n, de]), ie = v.useMemo(function() {
    return new Set(de.map(function(Y) {
      return Y.value;
    }));
  }, [de]);
  v.useEffect(function() {
    if (n === "combobox") {
      var Y, ae = (Y = de[0]) === null || Y === void 0 ? void 0 : Y.value;
      k(mP(ae) ? String(ae) : "");
    }
  }, [de]);
  var pe = hv(function(Y, ae) {
    var le, ye = ae ?? Y;
    return le = {}, be(le, j.value, Y), be(le, j.label, ye), le;
  }), tt = v.useMemo(function() {
    if (n !== "tags")
      return M;
    var Y = Ee(M), ae = function(ye) {
      return re.has(ye);
    };
    return Ee(de).sort(function(le, ye) {
      return le.value < ye.value ? -1 : 1;
    }).forEach(function(le) {
      var ye = le.value;
      ae(ye) || Y.push(pe(ye, le.label));
    }), Y;
  }, [pe, M, re, de, n]), at = UP(tt, j, q, H, S), rt = v.useMemo(function() {
    return n !== "tags" || !q || at.some(function(Y) {
      return Y[S || "value"] === q;
    }) ? at : [pe(q)].concat(Ee(at));
  }, [pe, S, n, at, q]), We = v.useMemo(function() {
    return y ? Ee(rt).sort(function(Y, ae) {
      return y(Y, ae);
    }) : rt;
  }, [rt, y]), Ue = v.useMemo(function() {
    return jP(We, {
      fieldNames: j,
      childrenAsData: $
    });
  }, [We, j, $]), st = function(ae) {
    var le = Z(ae);
    if (ce(le), B && // Trigger event only when value changed
    (le.length !== de.length || le.some(function(Re, Qt) {
      var Mt;
      return ((Mt = de[Qt]) === null || Mt === void 0 ? void 0 : Mt.value) !== Re?.value;
    }))) {
      var ye = D ? le : le.map(function(Re) {
        return Re.value;
      }), $e = le.map(function(Re) {
        return Bu(Ne(Re.value));
      });
      B(
        // Value
        se ? ye : ye[0],
        // Option
        se ? $e : $e[0]
      );
    }
  }, Xt = v.useState(null), nt = G(Xt, 2), ve = nt[0], Se = nt[1], Ve = v.useState(0), mt = G(Ve, 2), Fe = mt[0], qe = mt[1], Oe = O !== void 0 ? O : n !== "combobox", lt = v.useCallback(function(Y, ae) {
    var le = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ye = le.source, $e = ye === void 0 ? "keyboard" : ye;
    qe(ae), a && n === "combobox" && Y !== null && $e === "keyboard" && Se(String(Y));
  }, [a, n]), Rt = function(ae, le, ye) {
    var $e = function() {
      var $t, rr = Ne(ae);
      return [D ? {
        label: rr?.[j.label],
        value: ae,
        key: ($t = rr?.key) !== null && $t !== void 0 ? $t : ae
      } : ae, Bu(rr)];
    };
    if (le && h) {
      var Re = $e(), Qt = G(Re, 2), Mt = Qt[0], zt = Qt[1];
      h(Mt, zt);
    } else if (!le && m && ye !== "clear") {
      var ht = $e(), ar = G(ht, 2), Gt = ar[0], Lr = ar[1];
      m(Gt, Lr);
    }
  }, xe = hv(function(Y, ae) {
    var le, ye = se ? ae.selected : !0;
    ye ? le = se ? [].concat(Ee(de), [Y]) : [Y] : le = de.filter(function($e) {
      return $e.value !== Y;
    }), st(le), Rt(Y, ye), n === "combobox" ? Se("") : (!Ba || d) && (k(""), Se(""));
  }), ze = function(ae, le) {
    st(ae);
    var ye = le.type, $e = le.values;
    (ye === "remove" || ye === "clear") && $e.forEach(function(Re) {
      Rt(Re.value, !1, ye);
    });
  }, ft = function(ae, le) {
    if (k(ae), Se(null), le.source === "submit") {
      var ye = (ae || "").trim();
      if (ye) {
        var $e = Array.from(new Set([].concat(Ee(ie), [ye])));
        st($e), Rt(ye, !0), k("");
      }
      return;
    }
    le.source !== "blur" && (n === "combobox" && st(ae), l?.(ae));
  }, pt = function(ae) {
    var le = ae;
    n !== "tags" && (le = ae.map(function($e) {
      var Re = X.get($e);
      return Re?.value;
    }).filter(function($e) {
      return $e !== void 0;
    }));
    var ye = Array.from(new Set([].concat(Ee(ie), Ee(le))));
    st(ye), ye.forEach(function($e) {
      Rt($e, !0);
    });
  }, we = v.useMemo(function() {
    var Y = N !== !1 && g !== !1;
    return W(W({}, J), {}, {
      flattenOptions: Ue,
      onActiveValue: lt,
      defaultActiveFirstOption: Oe,
      onSelect: xe,
      menuItemSelectedIcon: P,
      rawValues: ie,
      fieldNames: j,
      virtual: Y,
      direction: x,
      listHeight: R,
      listItemHeight: T,
      childrenAsData: $
    });
  }, [J, Ue, lt, Oe, xe, P, ie, j, N, g, R, T, $]);
  return process.env.NODE_ENV !== "production" && (bN(e), EN(M, j)), /* @__PURE__ */ v.createElement(G0.Provider, {
    value: we
  }, /* @__PURE__ */ v.createElement(W0, et({}, Q, {
    // >>> MISC
    id: ne,
    prefixCls: i,
    ref: t,
    omitDomProps: wN,
    mode: n,
    displayValues: Ie,
    onDisplayValuesChange: ze,
    direction: x,
    searchValue: q,
    onSearch: ft,
    autoClearSearchValue: d,
    onSearchSplit: pt,
    dropdownMatchSelectWidth: g,
    OptionList: K0,
    emptyOptions: !Ue.length,
    activeValue: ve,
    activeDescendantId: "".concat(ne, "_list_").concat(Fe)
  })));
});
process.env.NODE_ENV !== "production" && (Y0.displayName = "Select");
var vf = Y0;
vf.Option = hf;
vf.OptGroup = df;
function ON(e, t, r) {
  return Me({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const _N = (e, t) => t || e, X0 = () => {
  const [, e] = kn(), r = new Bt(e.colorBgBase).toHsl().l < 0.5 ? {
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
process.env.NODE_ENV !== "production" && (X0.displayName = "EmptyImage");
const xN = X0, J0 = () => {
  const [, e] = kn(), {
    colorFill: t,
    colorFillTertiary: r,
    colorFillQuaternary: n,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: a,
    contentColor: s
  } = po(() => ({
    borderColor: new Bt(t).onBackground(o).toHexShortString(),
    shadowColor: new Bt(r).onBackground(o).toHexShortString(),
    contentColor: new Bt(n).onBackground(o).toHexShortString()
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
process.env.NODE_ENV !== "production" && (J0.displayName = "SimpleImage");
const RN = J0, TN = (e) => {
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
}, PN = _i("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: r
  } = e, n = tr(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r * 2.5,
    emptyImgHeightMD: r,
    emptyImgHeightSM: r * 0.875
  });
  return [TN(n)];
});
var NN = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Z0 = /* @__PURE__ */ v.createElement(xN, null), ey = /* @__PURE__ */ v.createElement(RN, null), Cs = (e) => {
  var {
    className: t,
    rootClassName: r,
    prefixCls: n,
    image: o = Z0,
    description: i,
    children: a,
    imageStyle: s,
    style: c
  } = e, u = NN(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: l,
    direction: f,
    empty: d
  } = v.useContext(or), h = l("empty", n), [m, p] = PN(h), [g] = r2("Empty"), E = typeof i < "u" ? i : g?.description, y = typeof E == "string" ? E : "empty";
  let S = null;
  return typeof o == "string" ? S = /* @__PURE__ */ v.createElement("img", {
    alt: y,
    src: o
  }) : S = o, m(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: Me(p, h, d?.className, {
      [`${h}-normal`]: o === ey,
      [`${h}-rtl`]: f === "rtl"
    }, t, r),
    style: Object.assign(Object.assign({}, d?.style), c)
  }, u), /* @__PURE__ */ v.createElement("div", {
    className: `${h}-image`,
    style: s
  }, S), E && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-description`
  }, E), a && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-footer`
  }, a)));
};
Cs.PRESENTED_IMAGE_DEFAULT = Z0;
Cs.PRESENTED_IMAGE_SIMPLE = ey;
process.env.NODE_ENV !== "production" && (Cs.displayName = "Empty");
const Go = Cs, MN = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: r
  } = Kt(or), n = r("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Pe.createElement(Go, {
        image: Go.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Pe.createElement(Go, {
        image: Go.PRESENTED_IMAGE_SIMPLE,
        className: `${n}-small`
      });
    default:
      return /* @__PURE__ */ Pe.createElement(Go, null);
  }
}, IN = MN, AN = (e) => {
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
}, DN = (e) => {
  const {
    antCls: t,
    componentCls: r
  } = e, n = `${r}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, i = `&${t}-slide-up-appear${t}-slide-up-appear-active`, a = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${r}-dropdown-placement-`;
  return [
    {
      [`${r}-dropdown`]: Object.assign(Object.assign({}, hs(e)), {
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
          animationName: x0
        },
        [`
          ${o}${s}topLeft,
          ${i}${s}topLeft,
          ${o}${s}topRight,
          ${i}${s}topRight
        `]: {
          animationName: T0
        },
        [`${a}${s}bottomLeft`]: {
          animationName: R0
        },
        [`
          ${a}${s}topLeft,
          ${a}${s}topRight
        `]: {
          animationName: P0
        },
        "&-hidden": {
          display: "none"
        },
        [`${n}`]: Object.assign(Object.assign({}, AN(e)), {
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
            }, pu),
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
    tv(e, "slide-up"),
    tv(e, "slide-down"),
    ev(e, "move-up"),
    ev(e, "move-down")
  ];
}, FN = DN, Zn = 2, ty = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: r,
    lineWidth: n
  } = e;
  const o = (r - t) / 2 - n, i = Math.ceil(o / 2);
  return [o, i];
};
function pc(e, t) {
  const {
    componentCls: r,
    iconCls: n
  } = e, o = `${r}-selection-overflow`, i = e.controlHeightSM, [a] = ty(e), s = t ? `${r}-${t}` : "";
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
        padding: `${a - Zn}px ${Zn * 2}px`,
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
          margin: `${Zn}px 0`,
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
        marginTop: Zn,
        marginBottom: Zn,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Zn * 2,
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
        "&-remove": Object.assign(Object.assign({}, Hl()), {
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
const $N = (e) => {
  const {
    componentCls: t
  } = e, r = tr(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), n = tr(e, {
    fontSize: e.fontSizeLG,
    controlHeight: e.controlHeightLG,
    controlHeightSM: e.controlHeight,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, o] = ty(e);
  return [
    pc(e),
    // ======================== Small ========================
    pc(r, "sm"),
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
    pc(n, "lg")
  ];
}, kN = $N;
function mc(e, t) {
  const {
    componentCls: r,
    inputPaddingHorizontalBase: n,
    borderRadius: o
  } = e, i = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${r}-selector`]: Object.assign(Object.assign({}, hs(e)), {
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
function LN(e) {
  const {
    componentCls: t
  } = e, r = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    mc(e),
    // ======================== Small ========================
    // Shared
    mc(tr(e, {
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
    mc(tr(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const jN = (e) => {
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
}, gc = function(e, t) {
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
}, VN = (e) => {
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
}, zN = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: r,
    iconCls: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, hs(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, jN(e)), VN(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, pu),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, pu), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, Hl()), {
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
}, HN = (e) => {
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
    zN(e),
    // Single
    LN(e),
    // Multiple
    kN(e),
    // Dropdown
    FN(e),
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
    gc(t, tr(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    gc(`${t}-status-error`, tr(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    gc(`${t}-status-warning`, tr(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    v0(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, BN = _i("Select", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = tr(e, {
    rootPrefixCls: r,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [HN(n)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), WN = (e) => {
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
function UN(e, t) {
  return e || WN(t);
}
function qN(e, t) {
  return t !== void 0 ? t : e !== null;
}
var ry = {};
Object.defineProperty(ry, "__esModule", { value: !0 });
var QN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, GN = ry.default = QN;
const ny = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: GN
});
process.env.NODE_ENV !== "production" && (ny.displayName = "CheckOutlined");
const KN = /* @__PURE__ */ v.forwardRef(ny);
var oy = {};
Object.defineProperty(oy, "__esModule", { value: !0 });
var YN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, XN = oy.default = YN;
const iy = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: XN
});
process.env.NODE_ENV !== "production" && (iy.displayName = "DownOutlined");
const JN = /* @__PURE__ */ v.forwardRef(iy);
var ay = {};
Object.defineProperty(ay, "__esModule", { value: !0 });
var ZN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, eM = ay.default = ZN;
const sy = (e, t) => /* @__PURE__ */ v.createElement(Xr, {
  ...e,
  ref: t,
  icon: eM
});
process.env.NODE_ENV !== "production" && (sy.displayName = "SearchOutlined");
const tM = /* @__PURE__ */ v.forwardRef(sy);
function rM(e) {
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
  const d = r ?? /* @__PURE__ */ v.createElement(Wg, null), h = (E) => t === null && !s && !f ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, u !== !1 && E, s && l);
  let m = null;
  if (t !== void 0)
    m = h(t);
  else if (i)
    m = h(/* @__PURE__ */ v.createElement(rf, {
      spin: !0
    }));
  else {
    const E = `${c}-suffix`;
    m = (y) => {
      let {
        open: S,
        showSearch: w
      } = y;
      return h(S && w ? /* @__PURE__ */ v.createElement(tM, {
        className: E
      }) : /* @__PURE__ */ v.createElement(JN, {
        className: E
      }));
    };
  }
  let p = null;
  n !== void 0 ? p = n : a ? p = /* @__PURE__ */ v.createElement(KN, null) : p = null;
  let g = null;
  return o !== void 0 ? g = o : g = /* @__PURE__ */ v.createElement(Qg, null), {
    clearIcon: d,
    suffixIcon: m,
    itemIcon: p,
    removeIcon: g
  };
}
var nM = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const cy = "SECRET_COMBOBOX_MODE_DO_NOT_USE", uy = (e, t) => {
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
    builtinPlacements: E,
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: S,
    direction: w,
    style: b
  } = e, C = nM(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style"]);
  const {
    getPopupContainer: O,
    getPrefixCls: P,
    renderEmpty: N,
    direction: x,
    virtual: L,
    popupMatchSelectWidth: R,
    popupOverflow: _,
    select: T
  } = v.useContext(or), A = P("select", n), F = P(), D = w ?? x, {
    compactSize: B,
    compactItemClassnames: Q
  } = f0(A, D), [ne, se] = BN(A), $ = v.useMemo(() => {
    const {
      mode: ie
    } = C;
    if (ie !== "combobox")
      return ie === cy ? "combobox" : ie;
  }, [C.mode]), H = $ === "multiple" || $ === "tags", j = qN(C.suffixIcon, C.showArrow), K = (r = S ?? y) !== null && r !== void 0 ? r : R, {
    status: I,
    hasFeedback: q,
    isFormItemInput: k,
    feedbackIcon: J
  } = v.useContext(FT), re = _N(I, g);
  let X;
  p !== void 0 ? X = p : $ === "combobox" ? X = null : X = N?.("Select") || /* @__PURE__ */ v.createElement(IN, {
    componentName: "Select"
  });
  const {
    suffixIcon: M,
    itemIcon: Z,
    removeIcon: V,
    clearIcon: ee
  } = rM(Object.assign(Object.assign({}, C), {
    multiple: H,
    hasFeedback: q,
    feedbackIcon: J,
    showSuffixIcon: j,
    prefixCls: A,
    showArrow: C.showArrow
  })), fe = Ml(C, ["suffixIcon", "itemIcon"]), ce = Me(c || u, {
    [`${A}-dropdown-${D}`]: D === "rtl"
  }, a, se), he = l0((ie) => {
    var pe;
    return (pe = h ?? B) !== null && pe !== void 0 ? pe : ie;
  }), ge = v.useContext(Bl), oe = m ?? ge, de = Me({
    [`${A}-lg`]: he === "large",
    [`${A}-sm`]: he === "small",
    [`${A}-rtl`]: D === "rtl",
    [`${A}-borderless`]: !o,
    [`${A}-in-form-item`]: k
  }, ON(A, re, q), Q, T?.className, i, a, se), Ne = v.useMemo(() => f !== void 0 ? f : D === "rtl" ? "bottomRight" : "bottomLeft", [f, D]), Ie = UN(E, _);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && dr(!u, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && dr(y === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead."), process.env.NODE_ENV !== "production" && dr(!("showArrow" in C), "Select", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.")), ne(/* @__PURE__ */ v.createElement(vf, Object.assign({
    ref: t,
    virtual: L,
    showSearch: T?.showSearch
  }, fe, {
    style: Object.assign(Object.assign({}, T?.style), b),
    dropdownMatchSelectWidth: K,
    builtinPlacements: Ie,
    transitionName: NR(F, "slide-up", C.transitionName),
    listHeight: l,
    listItemHeight: d,
    mode: $,
    prefixCls: A,
    placement: Ne,
    direction: D,
    suffixIcon: M,
    menuItemSelectedIcon: Z,
    removeIcon: V,
    clearIcon: ee,
    notFoundContent: X,
    className: de,
    getPopupContainer: s || O,
    dropdownClassName: ce,
    disabled: oe
  })));
};
process.env.NODE_ENV !== "production" && (uy.displayName = "Select");
const jn = /* @__PURE__ */ v.forwardRef(uy), oM = JT(jn);
jn.SECRET_COMBOBOX_MODE_DO_NOT_USE = cy;
jn.Option = hf;
jn.OptGroup = df;
jn._InternalPanelDoNotUseOrYouWillBeFired = oM;
process.env.NODE_ENV !== "production" && (jn.displayName = "Select");
const iM = jn;
let mr = null, Cn = (e) => e(), mi = [], Wa = {};
function aM() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = Wa, a = e ?? sg().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const sM = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: d,
      container: h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: E
    } = aM();
    return {
      prefixCls: d,
      getContainer: () => h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: E
    };
  }, [n, o] = v.useState(r), [i, a] = a0(n), s = sg(), c = s.getRootPrefixCls(), u = s.getIconPrefixCls(), l = s.getTheme(), f = () => {
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
  }), /* @__PURE__ */ v.createElement(Ul, {
    prefixCls: c,
    iconPrefixCls: u,
    theme: l
  }, a);
});
function Os() {
  if (!mr) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    mr = t, Cn(() => {
      s0(/* @__PURE__ */ v.createElement(sM, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, Os());
          });
        }
      }), e);
    });
    return;
  }
  mr.instance && (mi.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          Cn(() => {
            const n = mr.instance.open(Object.assign(Object.assign({}, Wa), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          Cn(() => {
            mr?.instance.destroy(e.key);
          });
          break;
        default:
          Cn(() => {
            var n;
            const o = (n = mr.instance)[t].apply(n, Ee(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), mi = []);
}
function cM(e) {
  Wa = Object.assign(Object.assign({}, Wa), e), Cn(() => {
    var t;
    (t = mr?.sync) === null || t === void 0 || t.call(mr);
  });
}
function uM(e) {
  const t = nf((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return mi.push(o), () => {
      n ? Cn(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return Os(), t;
}
function lM(e, t) {
  process.env.NODE_ENV !== "production" && CO("message");
  const r = nf((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return mi.push(i), () => {
      o ? Cn(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return Os(), r;
}
function fM(e) {
  mi.push({
    type: "destroy",
    key: e
  }), Os();
}
const dM = ["success", "info", "warning", "error", "loading"], hM = {
  open: uM,
  destroy: fM,
  config: cM,
  useMessage: Px,
  _InternalPanelDoNotUseOrYouWillBeFired: Cx
}, ly = hM;
dM.forEach((e) => {
  ly[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return lM(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const vM = ly, fy = yi(
  {}
), GI = ({ children: e }) => {
  const [t, r] = vM.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Av(Zu, { children: [
    r,
    /* @__PURE__ */ _t(fy.Provider, { value: { open: n }, children: e })
  ] });
}, KI = () => Kt(fy), YI = () => {
  Wt(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class XI {
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
var dy = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mv = Pe.createContext && Pe.createContext(dy), sn = globalThis && globalThis.__assign || function() {
  return sn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, sn.apply(this, arguments);
}, pM = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function hy(e) {
  return e && e.map(function(t, r) {
    return Pe.createElement(t.tag, sn({
      key: r
    }, t.attr), hy(t.child));
  });
}
function ir(e) {
  return function(t) {
    return Pe.createElement(mM, sn({
      attr: sn({}, e.attr)
    }, t), hy(e.child));
  };
}
function mM(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, i = e.title, a = pM(e, ["attr", "size", "title"]), s = o || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), Pe.createElement("svg", sn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: sn(sn({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Pe.createElement("title", null, i), e.children);
  };
  return mv !== void 0 ? Pe.createElement(mv.Consumer, null, function(r) {
    return t(r);
  }) : t(dy);
}
function JI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function ZI(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function eA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function tA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function rA(e) {
  return ir({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function nA(e) {
  return ir({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function oA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function iA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function aA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function sA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function cA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function uA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function lA(e) {
  return ir({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function fA(e) {
  return ir({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const dA = ({ children: e, override: t, ...r }) => /* @__PURE__ */ _t(Ul, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ _t(PR, { ...r, style: { minWidth: "85px" }, children: e }) });
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
function gM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function yM() {
  let [, e] = fr(/* @__PURE__ */ Object.create(null));
  return Ec(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var bM = gM() ? Iv : Wt, EM = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = v.useRef(null), o = v.useRef(null), i = yM();
  return v.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), bM(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? el(e, o.current) : /* @__PURE__ */ v.createElement("span", {
    ref: n
  });
}, vy = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = v.useState(!1);
  return v.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ v.createElement(EM, {
    ...t
  });
};
vy.displayName = "Portal";
const SM = () => ({
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
var Wu = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function wM() {
  if (gv)
    return Ye;
  gv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var E = g.$$typeof;
      switch (E) {
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
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ye.ContextConsumer = a, Ye.ContextProvider = i, Ye.Element = e, Ye.ForwardRef = c, Ye.Fragment = r, Ye.Lazy = d, Ye.Memo = f, Ye.Portal = t, Ye.Profiler = o, Ye.StrictMode = n, Ye.Suspense = u, Ye.SuspenseList = l, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(g) {
    return p(g) === a;
  }, Ye.isContextProvider = function(g) {
    return p(g) === i;
  }, Ye.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Ye.isForwardRef = function(g) {
    return p(g) === c;
  }, Ye.isFragment = function(g) {
    return p(g) === r;
  }, Ye.isLazy = function(g) {
    return p(g) === d;
  }, Ye.isMemo = function(g) {
    return p(g) === f;
  }, Ye.isPortal = function(g) {
    return p(g) === t;
  }, Ye.isProfiler = function(g) {
    return p(g) === o;
  }, Ye.isStrictMode = function(g) {
    return p(g) === n;
  }, Ye.isSuspense = function(g) {
    return p(g) === u;
  }, Ye.isSuspenseList = function(g) {
    return p(g) === l;
  }, Ye.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === l || g === h || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === i || g.$$typeof === a || g.$$typeof === c || g.$$typeof === m || g.getModuleId !== void 0);
  }, Ye.typeOf = p, Ye;
}
var Xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function CM() {
  return yv || (yv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, p = !1, g = !1, E = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function w(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === o || y || V === n || V === u || V === l || E || V === h || m || p || g || typeof V == "object" && V !== null && (V.$$typeof === d || V.$$typeof === f || V.$$typeof === i || V.$$typeof === a || V.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === S || V.getModuleId !== void 0));
    }
    function b(V) {
      if (typeof V == "object" && V !== null) {
        var ee = V.$$typeof;
        switch (ee) {
          case e:
            var fe = V.type;
            switch (fe) {
              case r:
              case o:
              case n:
              case u:
              case l:
                return fe;
              default:
                var ce = fe && fe.$$typeof;
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
    var C = a, O = i, P = e, N = c, x = r, L = d, R = f, _ = t, T = o, A = n, F = u, D = l, B = !1, Q = !1;
    function ne(V) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(V) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(V) {
      return b(V) === a;
    }
    function H(V) {
      return b(V) === i;
    }
    function j(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function K(V) {
      return b(V) === c;
    }
    function I(V) {
      return b(V) === r;
    }
    function q(V) {
      return b(V) === d;
    }
    function k(V) {
      return b(V) === f;
    }
    function J(V) {
      return b(V) === t;
    }
    function re(V) {
      return b(V) === o;
    }
    function X(V) {
      return b(V) === n;
    }
    function M(V) {
      return b(V) === u;
    }
    function Z(V) {
      return b(V) === l;
    }
    Xe.ContextConsumer = C, Xe.ContextProvider = O, Xe.Element = P, Xe.ForwardRef = N, Xe.Fragment = x, Xe.Lazy = L, Xe.Memo = R, Xe.Portal = _, Xe.Profiler = T, Xe.StrictMode = A, Xe.Suspense = F, Xe.SuspenseList = D, Xe.isAsyncMode = ne, Xe.isConcurrentMode = se, Xe.isContextConsumer = $, Xe.isContextProvider = H, Xe.isElement = j, Xe.isForwardRef = K, Xe.isFragment = I, Xe.isLazy = q, Xe.isMemo = k, Xe.isPortal = J, Xe.isProfiler = re, Xe.isStrictMode = X, Xe.isSuspense = M, Xe.isSuspenseList = Z, Xe.isValidElementType = w, Xe.typeOf = b;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Wu.exports = wM() : Wu.exports = CM();
var pf = Wu.exports;
function OM(e) {
  function t($, H, j, K, I) {
    for (var q = 0, k = 0, J = 0, re = 0, X, M, Z = 0, V = 0, ee, fe = ee = X = 0, ce = 0, he = 0, ge = 0, oe = 0, de = j.length, Ne = de - 1, Ie, ie = "", pe = "", tt = "", at = "", rt; ce < de; ) {
      if (M = j.charCodeAt(ce), ce === Ne && k + re + J + q !== 0 && (k !== 0 && (M = k === 47 ? 10 : 47), re = J = q = 0, de++, Ne++), k + re + J + q === 0) {
        if (ce === Ne && (0 < he && (ie = ie.replace(d, "")), 0 < ie.trim().length)) {
          switch (M) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ie += j.charAt(ce);
          }
          M = 59;
        }
        switch (M) {
          case 123:
            for (ie = ie.trim(), X = ie.charCodeAt(0), ee = 1, oe = ++ce; ce < de; ) {
              switch (M = j.charCodeAt(ce)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (M = j.charCodeAt(ce + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (fe = ce + 1; fe < Ne; ++fe)
                          switch (j.charCodeAt(fe)) {
                            case 47:
                              if (M === 42 && j.charCodeAt(fe - 1) === 42 && ce + 2 !== fe) {
                                ce = fe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (M === 47) {
                                ce = fe + 1;
                                break e;
                              }
                          }
                        ce = fe;
                      }
                  }
                  break;
                case 91:
                  M++;
                case 40:
                  M++;
                case 34:
                case 39:
                  for (; ce++ < Ne && j.charCodeAt(ce) !== M; )
                    ;
              }
              if (ee === 0)
                break;
              ce++;
            }
            switch (ee = j.substring(oe, ce), X === 0 && (X = (ie = ie.replace(f, "").trim()).charCodeAt(0)), X) {
              case 64:
                switch (0 < he && (ie = ie.replace(d, "")), M = ie.charCodeAt(1), M) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = H;
                    break;
                  default:
                    he = F;
                }
                if (ee = t(H, he, ee, M, I + 1), oe = ee.length, 0 < B && (he = r(F, ie, ge), rt = s(3, ee, he, H, _, R, oe, M, I, K), ie = he.join(""), rt !== void 0 && (oe = (ee = rt.trim()).length) === 0 && (M = 0, ee = "")), 0 < oe)
                  switch (M) {
                    case 115:
                      ie = ie.replace(C, a);
                    case 100:
                    case 109:
                    case 45:
                      ee = ie + "{" + ee + "}";
                      break;
                    case 107:
                      ie = ie.replace(y, "$1 $2"), ee = ie + "{" + ee + "}", ee = A === 1 || A === 2 && i("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                      break;
                    default:
                      ee = ie + ee, K === 112 && (ee = (pe += ee, ""));
                  }
                else
                  ee = "";
                break;
              default:
                ee = t(H, r(H, ie, ge), ee, K, I + 1);
            }
            tt += ee, ee = ge = he = fe = X = 0, ie = "", M = j.charCodeAt(++ce);
            break;
          case 125:
          case 59:
            if (ie = (0 < he ? ie.replace(d, "") : ie).trim(), 1 < (oe = ie.length))
              switch (fe === 0 && (X = ie.charCodeAt(0), X === 45 || 96 < X && 123 > X) && (oe = (ie = ie.replace(" ", ":")).length), 0 < B && (rt = s(1, ie, H, $, _, R, pe.length, K, I, K)) !== void 0 && (oe = (ie = rt.trim()).length) === 0 && (ie = "\0\0"), X = ie.charCodeAt(0), M = ie.charCodeAt(1), X) {
                case 0:
                  break;
                case 64:
                  if (M === 105 || M === 99) {
                    at += ie + j.charAt(ce);
                    break;
                  }
                default:
                  ie.charCodeAt(oe - 1) !== 58 && (pe += o(ie, X, M, ie.charCodeAt(2)));
              }
            ge = he = fe = X = 0, ie = "", M = j.charCodeAt(++ce);
        }
      }
      switch (M) {
        case 13:
        case 10:
          k === 47 ? k = 0 : 1 + X === 0 && K !== 107 && 0 < ie.length && (he = 1, ie += "\0"), 0 < B * ne && s(0, ie, H, $, _, R, pe.length, K, I, K), R = 1, _++;
          break;
        case 59:
        case 125:
          if (k + re + J + q === 0) {
            R++;
            break;
          }
        default:
          switch (R++, Ie = j.charAt(ce), M) {
            case 9:
            case 32:
              if (re + q + k === 0)
                switch (Z) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = "";
                    break;
                  default:
                    M !== 32 && (Ie = " ");
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
              re + k + q === 0 && (he = ge = 1, Ie = "\f" + Ie);
              break;
            case 108:
              if (re + k + q + T === 0 && 0 < fe)
                switch (ce - fe) {
                  case 2:
                    Z === 112 && j.charCodeAt(ce - 3) === 58 && (T = Z);
                  case 8:
                    V === 111 && (T = V);
                }
              break;
            case 58:
              re + k + q === 0 && (fe = ce);
              break;
            case 44:
              k + J + re + q === 0 && (he = 1, Ie += "\r");
              break;
            case 34:
            case 39:
              k === 0 && (re = re === M ? 0 : re === 0 ? M : re);
              break;
            case 91:
              re + k + J === 0 && q++;
              break;
            case 93:
              re + k + J === 0 && q--;
              break;
            case 41:
              re + k + q === 0 && J--;
              break;
            case 40:
              if (re + k + q === 0) {
                if (X === 0)
                  switch (2 * Z + 3 * V) {
                    case 533:
                      break;
                    default:
                      X = 1;
                  }
                J++;
              }
              break;
            case 64:
              k + J + re + q + fe + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + q + J))
                switch (k) {
                  case 0:
                    switch (2 * M + 3 * j.charCodeAt(ce + 1)) {
                      case 235:
                        k = 47;
                        break;
                      case 220:
                        oe = ce, k = 42;
                    }
                    break;
                  case 42:
                    M === 47 && Z === 42 && oe + 2 !== ce && (j.charCodeAt(oe + 2) === 33 && (pe += j.substring(oe, ce + 1)), Ie = "", k = 0);
                }
          }
          k === 0 && (ie += Ie);
      }
      V = Z, Z = M, ce++;
    }
    if (oe = pe.length, 0 < oe) {
      if (he = H, 0 < B && (rt = s(2, pe, he, $, _, R, oe, K, I, K), rt !== void 0 && (pe = rt).length === 0))
        return at + pe + tt;
      if (pe = he.join(",") + "{" + pe + "}", A * T !== 0) {
        switch (A !== 2 || i(pe, 2) || (T = 0), T) {
          case 111:
            pe = pe.replace(w, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(S, "::-webkit-input-$1") + pe.replace(S, "::-moz-$1") + pe.replace(S, ":-ms-input-$1") + pe;
        }
        T = 0;
      }
    }
    return at + pe + tt;
  }
  function r($, H, j) {
    var K = H.trim().split(g);
    H = K;
    var I = K.length, q = $.length;
    switch (q) {
      case 0:
      case 1:
        var k = 0;
        for ($ = q === 0 ? "" : $[0] + " "; k < I; ++k)
          H[k] = n($, H[k], j).trim();
        break;
      default:
        var J = k = 0;
        for (H = []; k < I; ++k)
          for (var re = 0; re < q; ++re)
            H[J++] = n($[re] + " ", K[k], j).trim();
    }
    return H;
  }
  function n($, H, j) {
    var K = H.charCodeAt(0);
    switch (33 > K && (K = (H = H.trim()).charCodeAt(0)), K) {
      case 38:
        return H.replace(E, "$1" + $.trim());
      case 58:
        return $.trim() + H.replace(E, "$1" + $.trim());
      default:
        if (0 < 1 * j && 0 < H.indexOf("\f"))
          return H.replace(E, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim());
    }
    return $ + H;
  }
  function o($, H, j, K) {
    var I = $ + ";", q = 2 * H + 3 * j + 4 * K;
    if (q === 944) {
      $ = I.indexOf(":", 9) + 1;
      var k = I.substring($, I.length - 1).trim();
      return k = I.substring(0, $).trim() + k + ";", A === 1 || A === 2 && i(k, 1) ? "-webkit-" + k + k : k;
    }
    if (A === 0 || A === 2 && !i(I, 1))
      return I;
    switch (q) {
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
          return I.replace(L, "$1-webkit-$2") + I;
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
        switch (H = (I = $).length - 10, k = (I.charCodeAt(H) === 33 ? I.substring(0, H) : I).substring($.indexOf(":", 7) + 1).trim(), q = k.charCodeAt(0) + (k.charCodeAt(7) | 0)) {
          case 203:
            if (111 > k.charCodeAt(8))
              break;
          case 115:
            I = I.replace(k, "-webkit-" + k) + ";" + I;
            break;
          case 207:
          case 102:
            I = I.replace(k, "-webkit-" + (102 < q ? "inline-" : "") + "box") + ";" + I.replace(k, "-webkit-" + k) + ";" + I.replace(k, "-ms-" + k + "box") + ";" + I;
        }
        return I + ";";
      case 938:
        if (I.charCodeAt(5) === 45)
          switch (I.charCodeAt(6)) {
            case 105:
              return k = I.replace("-items", ""), "-webkit-" + I + "-webkit-box-" + k + "-ms-flex-" + k + I;
            case 115:
              return "-webkit-" + I + "-ms-flex-item-" + I.replace(P, "") + I;
            default:
              return "-webkit-" + I + "-ms-flex-line-pack" + I.replace("align-content", "").replace(P, "") + I;
          }
        break;
      case 973:
      case 989:
        if (I.charCodeAt(3) !== 45 || I.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (x.test($) === !0)
          return (k = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? o($.replace("stretch", "fill-available"), H, j, K).replace(":fill-available", ":stretch") : I.replace(k, "-webkit-" + k) + I.replace(k, "-moz-" + k.replace("fill-", "")) + I;
        break;
      case 962:
        if (I = "-webkit-" + I + (I.charCodeAt(5) === 102 ? "-ms-" + I : "") + I, j + K === 211 && I.charCodeAt(13) === 105 && 0 < I.indexOf("transform", 10))
          return I.substring(0, I.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + I;
    }
    return I;
  }
  function i($, H) {
    var j = $.indexOf(H === 1 ? ":" : "{"), K = $.substring(0, H !== 3 ? j : 10);
    return j = $.substring(j + 1, $.length - 1), Q(H !== 2 ? K : K.replace(N, "$1"), j, H);
  }
  function a($, H) {
    var j = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return j !== H + ";" ? j.replace(O, " or ($1)").substring(4) : "(" + H + ")";
  }
  function s($, H, j, K, I, q, k, J, re, X) {
    for (var M = 0, Z = H, V; M < B; ++M)
      switch (V = D[M].call(l, $, Z, j, K, I, q, k, J, re, X)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Z = V;
      }
    if (Z !== H)
      return Z;
  }
  function c($) {
    switch ($) {
      case void 0:
      case null:
        B = D.length = 0;
        break;
      default:
        if (typeof $ == "function")
          D[B++] = $;
        else if (typeof $ == "object")
          for (var H = 0, j = $.length; H < j; ++H)
            c($[H]);
        else
          ne = !!$ | 0;
    }
    return c;
  }
  function u($) {
    return $ = $.prefix, $ !== void 0 && (Q = null, $ ? typeof $ != "function" ? A = 1 : (A = 2, Q = $) : A = 0), u;
  }
  function l($, H) {
    var j = $;
    if (33 > j.charCodeAt(0) && (j = j.trim()), se = j, j = [se], 0 < B) {
      var K = s(-1, H, j, j, _, R, 0, 0, 0, 0);
      K !== void 0 && typeof K == "string" && (H = K);
    }
    var I = t(F, j, H, 0, 0);
    return 0 < B && (K = s(-2, I, j, j, _, R, I.length, 0, 0, 0), K !== void 0 && (I = K)), se = "", T = 0, R = _ = 1, I;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, m = /zoo|gra/, p = /([,: ])(transform)/g, g = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, w = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, P = /-self|flex-/g, N = /[^]*?(:[rp][el]a[\w-]+)[^]*/, x = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, R = 1, _ = 1, T = 0, A = 1, F = [], D = [], B = 0, Q = null, ne = 0, se = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
function _M(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var xM = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bv = /* @__PURE__ */ _M(
  function(e) {
    return xM.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Uu = { exports: {} }, Je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function RM() {
  if (Ev)
    return Je;
  Ev = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
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
    return S(b) === u;
  }
  return Je.AsyncMode = c, Je.ConcurrentMode = u, Je.ContextConsumer = s, Je.ContextProvider = a, Je.Element = t, Je.ForwardRef = l, Je.Fragment = n, Je.Lazy = m, Je.Memo = h, Je.Portal = r, Je.Profiler = i, Je.StrictMode = o, Je.Suspense = f, Je.isAsyncMode = function(b) {
    return w(b) || S(b) === c;
  }, Je.isConcurrentMode = w, Je.isContextConsumer = function(b) {
    return S(b) === s;
  }, Je.isContextProvider = function(b) {
    return S(b) === a;
  }, Je.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Je.isForwardRef = function(b) {
    return S(b) === l;
  }, Je.isFragment = function(b) {
    return S(b) === n;
  }, Je.isLazy = function(b) {
    return S(b) === m;
  }, Je.isMemo = function(b) {
    return S(b) === h;
  }, Je.isPortal = function(b) {
    return S(b) === r;
  }, Je.isProfiler = function(b) {
    return S(b) === i;
  }, Je.isStrictMode = function(b) {
    return S(b) === o;
  }, Je.isSuspense = function(b) {
    return S(b) === f;
  }, Je.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === a || b.$$typeof === s || b.$$typeof === l || b.$$typeof === g || b.$$typeof === E || b.$$typeof === y || b.$$typeof === p);
  }, Je.typeOf = S, Je;
}
var Ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function TM() {
  return Sv || (Sv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === u || M === i || M === o || M === f || M === d || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === h || M.$$typeof === a || M.$$typeof === s || M.$$typeof === l || M.$$typeof === g || M.$$typeof === E || M.$$typeof === y || M.$$typeof === p);
    }
    function w(M) {
      if (typeof M == "object" && M !== null) {
        var Z = M.$$typeof;
        switch (Z) {
          case t:
            var V = M.type;
            switch (V) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case f:
                return V;
              default:
                var ee = V && V.$$typeof;
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
    var b = c, C = u, O = s, P = a, N = t, x = l, L = n, R = m, _ = h, T = r, A = i, F = o, D = f, B = !1;
    function Q(M) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(M) || w(M) === c;
    }
    function ne(M) {
      return w(M) === u;
    }
    function se(M) {
      return w(M) === s;
    }
    function $(M) {
      return w(M) === a;
    }
    function H(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function j(M) {
      return w(M) === l;
    }
    function K(M) {
      return w(M) === n;
    }
    function I(M) {
      return w(M) === m;
    }
    function q(M) {
      return w(M) === h;
    }
    function k(M) {
      return w(M) === r;
    }
    function J(M) {
      return w(M) === i;
    }
    function re(M) {
      return w(M) === o;
    }
    function X(M) {
      return w(M) === f;
    }
    Ze.AsyncMode = b, Ze.ConcurrentMode = C, Ze.ContextConsumer = O, Ze.ContextProvider = P, Ze.Element = N, Ze.ForwardRef = x, Ze.Fragment = L, Ze.Lazy = R, Ze.Memo = _, Ze.Portal = T, Ze.Profiler = A, Ze.StrictMode = F, Ze.Suspense = D, Ze.isAsyncMode = Q, Ze.isConcurrentMode = ne, Ze.isContextConsumer = se, Ze.isContextProvider = $, Ze.isElement = H, Ze.isForwardRef = j, Ze.isFragment = K, Ze.isLazy = I, Ze.isMemo = q, Ze.isPortal = k, Ze.isProfiler = J, Ze.isStrictMode = re, Ze.isSuspense = X, Ze.isValidElementType = S, Ze.typeOf = w;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Uu.exports = RM() : Uu.exports = TM();
var PM = Uu.exports, mf = PM, NM = {
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
}, MM = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, IM = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, py = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, gf = {};
gf[mf.ForwardRef] = IM;
gf[mf.Memo] = py;
function wv(e) {
  return mf.isMemo(e) ? py : gf[e.$$typeof] || NM;
}
var AM = Object.defineProperty, DM = Object.getOwnPropertyNames, Cv = Object.getOwnPropertySymbols, FM = Object.getOwnPropertyDescriptor, $M = Object.getPrototypeOf, Ov = Object.prototype;
function my(e, t, r) {
  if (typeof t != "string") {
    if (Ov) {
      var n = $M(t);
      n && n !== Ov && my(e, n, r);
    }
    var o = DM(t);
    Cv && (o = o.concat(Cv(t)));
    for (var i = wv(e), a = wv(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!MM[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = FM(t, c);
        try {
          AM(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var kM = my;
const LM = /* @__PURE__ */ vl(kM);
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
}, qu = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !pf.typeOf(e);
}, Ua = Object.freeze([]), cn = Object.freeze({});
function gi(e) {
  return typeof e == "function";
}
function Qu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function yf(e) {
  return e && typeof e.styledComponentId == "string";
}
var Oo = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bf = typeof window < "u" && "HTMLElement" in window, jM = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), VM = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zM() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Io(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(zM.apply(void 0, [VM[e]].concat(r)).trim());
}
var HM = function() {
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
        (a <<= 1) < 0 && Io(16, "" + r);
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
}(), ba = /* @__PURE__ */ new Map(), qa = /* @__PURE__ */ new Map(), oi = 1, Ji = function(e) {
  if (ba.has(e))
    return ba.get(e);
  for (; qa.has(oi); )
    oi++;
  var t = oi++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Io(16, "" + t), ba.set(e, t), qa.set(t, e), t;
}, BM = function(e) {
  return qa.get(e);
}, WM = function(e, t) {
  t >= oi && (oi = t + 1), ba.set(e, t), qa.set(t, e);
}, UM = "style[" + Oo + '][data-styled-version="5.3.6"]', qM = new RegExp("^" + Oo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), QM = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, GM = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(qM);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[2];
        c !== 0 && (WM(u, c), QM(e, u, s[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, KM = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, gy = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var c = s.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(Oo))
        return l;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Oo, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = KM();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, YM = function() {
  function e(r) {
    var n = this.element = gy(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var c = i[a];
        if (c.ownerNode === o)
          return c;
      }
      Io(17);
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
}(), XM = function() {
  function e(r) {
    var n = this.element = gy(r);
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
}(), JM = function() {
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
}(), xv = bf, ZM = { isServer: !bf, useCSSOMInjection: !jM }, yy = function() {
  function e(r, n, o) {
    r === void 0 && (r = cn), n === void 0 && (n = {}), this.options = Qr({}, ZM, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && bf && xv && (xv = !1, function(i) {
      for (var a = document.querySelectorAll(UM), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(Oo) !== "active" && (GM(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Ji(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Qr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new JM(a) : i ? new YM(a) : new XM(a), new HM(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Ji(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Ji(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Ji(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = BM(a);
        if (s !== void 0) {
          var c = r.names.get(s), u = n.getGroup(a);
          if (c && u && c.size) {
            var l = Oo + ".g" + a + '[id="' + s + '"]', f = "";
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
}(), eI = /(a)(d)/gi, Rv = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Gu(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = Rv(t % 52) + r;
  return (Rv(t % 52) + r).replace(eI, "$1-$2");
}
var bn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, by = function(e) {
  return bn(5381, e);
};
function tI(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (gi(r) && !yf(r))
      return !1;
  }
  return !0;
}
var rI = by("5.3.6"), nI = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && tI(t), this.componentId = r, this.baseHash = bn(rI, r), this.baseStyle = n, yy.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = _o(this.rules, t, r, n).join(""), s = Gu(bn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var c = n(a, "." + s, void 0, o);
          r.insertRules(o, s, c);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, l = bn(this.baseHash, n.hash), f = "", d = 0; d < u; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (l = bn(l, h + d));
        else if (h) {
          var m = _o(h, t, r, n), p = Array.isArray(m) ? m.join("") : m;
          l = bn(l, p + d), f += p;
        }
      }
      if (f) {
        var g = Gu(l >>> 0);
        if (!r.hasNameForId(o, g)) {
          var E = n(f, "." + g, void 0, o);
          r.insertRules(o, g, E);
        }
        i.push(g);
      }
    }
    return i.join(" ");
  }, e;
}(), oI = /^\s*\/\/.*$/gm, iI = [":", "[", ".", "#"];
function aI(e) {
  var t, r, n, o, i = e === void 0 ? cn : e, a = i.options, s = a === void 0 ? cn : a, c = i.plugins, u = c === void 0 ? Ua : c, l = new OM(s), f = [], d = function(p) {
    function g(E) {
      if (E)
        try {
          p(E + "}");
        } catch {
        }
    }
    return function(E, y, S, w, b, C, O, P, N, x) {
      switch (E) {
        case 1:
          if (N === 0 && y.charCodeAt(0) === 64)
            return p(y + ";"), "";
          break;
        case 2:
          if (P === 0)
            return y + "/*|*/";
          break;
        case 3:
          switch (P) {
            case 102:
            case 112:
              return p(S[0] + y), "";
            default:
              return y + (x === 0 ? "/*|*/" : "");
          }
        case -2:
          y.split("/*|*/}").forEach(g);
      }
    };
  }(function(p) {
    f.push(p);
  }), h = function(p, g, E) {
    return g === 0 && iI.indexOf(E[r.length]) !== -1 || E.match(o) ? p : "." + t;
  };
  function m(p, g, E, y) {
    y === void 0 && (y = "&");
    var S = p.replace(oI, ""), w = g && E ? E + " " + g + " { " + S + " }" : S;
    return t = y, r = g, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), l(E || !g ? "" : g, w);
  }
  return l.use([].concat(u, [function(p, g, E) {
    p === 2 && E.length && E[0].lastIndexOf(r) > 0 && (E[0] = E[0].replace(n, h));
  }, d, function(p) {
    if (p === -2) {
      var g = f;
      return f = [], g;
    }
  }])), m.hash = u.length ? u.reduce(function(p, g) {
    return g.name || Io(15), bn(p, g.name);
  }, 5381).toString() : "", m;
}
var Ey = Pe.createContext();
Ey.Consumer;
var Sy = Pe.createContext(), sI = (Sy.Consumer, new yy()), Ku = aI();
function cI() {
  return Kt(Ey) || sI;
}
function uI() {
  return Kt(Sy) || Ku;
}
var lI = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ku);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Io(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ku), this.name + t.hash;
  }, e;
}(), fI = /([A-Z])/, dI = /([A-Z])/g, hI = /^ms-/, vI = function(e) {
  return "-" + e.toLowerCase();
};
function Tv(e) {
  return fI.test(e) ? e.replace(dI, vI).replace(hI, "-ms-") : e;
}
var Pv = function(e) {
  return e == null || e === !1 || e === "";
};
function _o(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = _o(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Pv(e))
    return "";
  if (yf(e))
    return "." + e.styledComponentId;
  if (gi(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && pf.isElement(c) && console.warn(Qu(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _o(c, t, r, n);
  }
  var u;
  return e instanceof lI ? r ? (e.inject(r, n), e.getName(n)) : e : qu(e) ? function l(f, d) {
    var h, m, p = [];
    for (var g in f)
      f.hasOwnProperty(g) && !Pv(f[g]) && (Array.isArray(f[g]) && f[g].isCss || gi(f[g]) ? p.push(Tv(g) + ":", f[g], ";") : qu(f[g]) ? p.push.apply(p, l(f[g], g)) : p.push(Tv(g) + ": " + (h = g, (m = f[g]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || h in Cm ? String(m).trim() : m + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var Nv = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function dn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return gi(e) || qu(e) ? Nv(_o(_v(Ua, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Nv(_o(_v(e, r)));
}
var Mv = /invalid hook call/i, Zi = /* @__PURE__ */ new Set(), pI = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Mv.test(i))
          o = !1, Zi.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            s[c - 1] = arguments[c];
          n.apply(void 0, [i].concat(s));
        }
      }, De(), o && !Zi.has(r) && (console.warn(r), Zi.add(r));
    } catch (i) {
      Mv.test(i.message) && Zi.delete(r);
    } finally {
      console.error = n;
    }
  }
}, mI = function(e, t, r) {
  return r === void 0 && (r = cn), e.theme !== r.theme && e.theme || t || r.theme;
}, gI = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, yI = /(^-|-$)/g;
function yc(e) {
  return e.replace(gI, "-").replace(yI, "");
}
var bI = function(e) {
  return Gu(by(e) >>> 0);
};
function ea(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Yu = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, EI = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function SI(e, t, r) {
  var n = e[r];
  Yu(t) && Yu(n) ? wy(n, t) : e[r] = t;
}
function wy(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (Yu(a))
      for (var s in a)
        EI(s) && SI(e, a[s], s);
  }
  return e;
}
var Cy = Pe.createContext();
Cy.Consumer;
var bc = {};
function Oy(e, t, r) {
  var n = yf(e), o = !ea(e), i = t.attrs, a = i === void 0 ? Ua : i, s = t.componentId, c = s === void 0 ? function(y, S) {
    var w = typeof y != "string" ? "sc" : yc(y);
    bc[w] = (bc[w] || 0) + 1;
    var b = w + "-" + bI("5.3.6" + w + bc[w]);
    return S ? S + "-" + b : b;
  }(t.displayName, t.parentComponentId) : s, u = t.displayName, l = u === void 0 ? function(y) {
    return ea(y) ? "styled." + y : "Styled(" + Qu(y) + ")";
  }(e) : u, f = t.displayName && t.componentId ? yc(t.displayName) + "-" + t.componentId : t.componentId || c, d = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(y, S, w) {
    return e.shouldForwardProp(y, S, w) && t.shouldForwardProp(y, S, w);
  } : e.shouldForwardProp);
  var m, p = new nI(r, f, n ? e.componentStyle : void 0), g = p.isStatic && a.length === 0, E = function(y, S) {
    return function(w, b, C, O) {
      var P = w.attrs, N = w.componentStyle, x = w.defaultProps, L = w.foldedComponentIds, R = w.shouldForwardProp, _ = w.styledComponentId, T = w.target;
      process.env.NODE_ENV !== "production" && wf(_);
      var A = function(K, I, q) {
        K === void 0 && (K = cn);
        var k = Qr({}, I, { theme: K }), J = {};
        return q.forEach(function(re) {
          var X, M, Z, V = re;
          for (X in gi(V) && (V = V(k)), V)
            k[X] = J[X] = X === "className" ? (M = J[X], Z = V[X], M && Z ? M + " " + Z : M || Z) : V[X];
        }), [k, J];
      }(mI(b, Kt(Cy), x) || cn, b, P), F = A[0], D = A[1], B = function(K, I, q, k) {
        var J = cI(), re = uI(), X = I ? K.generateAndInjectStyles(cn, J, re) : K.generateAndInjectStyles(q, J, re);
        return process.env.NODE_ENV !== "production" && wf(X), process.env.NODE_ENV !== "production" && !I && k && k(X), X;
      }(N, O, F, process.env.NODE_ENV !== "production" ? w.warnTooManyClasses : void 0), Q = C, ne = D.$as || b.$as || D.as || b.as || T, se = ea(ne), $ = D !== b ? Qr({}, b, {}, D) : b, H = {};
      for (var j in $)
        j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? H.as = $[j] : (R ? R(j, bv, ne) : !se || bv(j)) && (H[j] = $[j]));
      return b.style && D.style !== b.style && (H.style = Qr({}, b.style, {}, D.style)), H.className = Array.prototype.concat(L, _, B !== _ ? B : null, b.className, D.className).filter(Boolean).join(" "), H.ref = Q, Ty(ne, H);
    }(m, y, S, g);
  };
  return E.displayName = l, (m = Pe.forwardRef(E)).attrs = d, m.componentStyle = p, m.displayName = l, m.shouldForwardProp = h, m.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ua, m.styledComponentId = f, m.target = n ? e.target : e, m.withComponent = function(y) {
    var S = t.componentId, w = function(C, O) {
      if (C == null)
        return {};
      var P, N, x = {}, L = Object.keys(C);
      for (N = 0; N < L.length; N++)
        P = L[N], O.indexOf(P) >= 0 || (x[P] = C[P]);
      return x;
    }(t, ["componentId"]), b = S && S + "-" + (ea(y) ? y : yc(Qu(y)));
    return Oy(y, Qr({}, w, { attrs: d, componentId: b }), r);
  }, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = n ? wy({}, e.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (pI(l, f), m.warnTooManyClasses = function(y, S) {
    var w = {}, b = !1;
    return function(C) {
      if (!b && (w[C] = !0, Object.keys(w).length >= 200)) {
        var O = S ? ' with the id of "' + S + '"' : "";
        console.warn("Over 200 classes were generated for component " + y + O + `.
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
  }, o && LM(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m;
}
var Xu = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = cn), !pf.isValidElementType(n))
      return Io(1, String(n));
    var i = function() {
      return r(n, o, dn.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, Qr({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, Qr({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(Oy, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Xu[e] = Xu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ao = Xu, Ef = (e = "100%", t = e) => dn`
  width: ${e};
  height: ${t};
`;
dn`
  border: 1px solid red;
`;
const wI = (e = "flex-start", t = "stretch", r = "row") => dn`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, _y = (e = "&") => dn`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Dn = (e) => dn`
  ${({ theme: t }) => t[e]}
`, CI = (e) => dn`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, OI = dn`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, _I = "1px solid", xI = Ao.div`
  ${wI("center", "center")};
  ${CI({
  left: "0",
  top: "0"
})}
  ${Ef("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, RI = Ao.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${Dn("grey")};
  border: 2px solid ${Dn("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${OI};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${_y()};
`, TI = Ao.div`
  margin: 0 auto;
  margin-top: 18px;
  ${Ef("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${Dn("light")};
  }
`, hA = Ao.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${_I} ${Dn("lightGrey")};
`, vA = Ao.div`
  background: ${Dn("lightGrey")};
  ${Ef("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, PI = ({
  onClose: e,
  isOpen: t,
  children: r,
  width: n,
  height: o
}) => {
  const { Spring: i, Gesture: a } = qp(), { opacity: s, transform: c } = SM(), u = i.useTransition(t, {
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
    ({ offset: [y, S], down: w }) => {
      d.start({
        y: w ? S : 0,
        immediate: !1,
        x: w ? y : 0,
        scale: w ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), E = (y) => {
    y.stopPropagation();
  };
  return /* @__PURE__ */ _t(Zu, { children: u((y, S) => /* @__PURE__ */ _t(Bp, { when: S, children: /* @__PURE__ */ _t(vy, { children: /* @__PURE__ */ _t(xI, { style: y, onClick: e, as: i.a.div, children: /* @__PURE__ */ _t(
    RI,
    {
      style: { ...l, x: m, y: h, scale: p },
      ...g(),
      onClick: E,
      as: i.a.div,
      $width: n,
      $height: o,
      children: /* @__PURE__ */ _t(
        Ay,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ _t(TI, { children: r })
        }
      )
    }
  ) }) }) })) });
}, pA = (e) => /* @__PURE__ */ _t(Up, { children: /* @__PURE__ */ _t(PI, { ...e }) }), NI = (e, t) => {
  const { Spring: r, Gesture: n } = qp(), [{ y: o }, i] = r.useSpring(() => ({ y: t })), a = () => {
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
}, MI = Ao.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${Dn("darkBlue")};
  border-top: 2px solid ${Dn("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${_y()};
`, II = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const o = NI(t, n);
  return Wt(() => {
    o.toggle(r);
  }, [r]), /* @__PURE__ */ _t(
    MI,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, mA = (e) => /* @__PURE__ */ _t(Up, { children: /* @__PURE__ */ _t(II, { ...e }) }), gA = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ _t(
  iM,
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
  JI as AiOutlineClose,
  ZI as AiOutlineHtml5,
  eA as AiOutlineInfoCircle,
  tA as AiOutlineSwap,
  Up as AnimationProvider,
  XI as ApolloMiddleware,
  rA as BsJournals,
  nA as BsSearch,
  dA as ColoredButton,
  Bp as Display,
  QI as ErrorBoundary,
  oA as GoTerminal,
  iA as GrClear,
  Dy as LocalStorage,
  Ly as LocalStorageClient,
  aA as LuTestTube2,
  sA as MdFindReplace,
  pA as Modal,
  vA as ModalSeparator,
  hA as ModalTitle,
  fy as NotificationsContext,
  GI as NotificationsProvider,
  mA as Popover,
  zI as PrivatePaths,
  JS as RoutePaths,
  gA as Select,
  cA as SlInfo,
  uA as SlSizeFullscreen,
  lA as TfiSettings,
  fA as VscPlay,
  Ed as apolloClient,
  VI as httpService,
  LI as isFunction,
  kI as isObject,
  Fy as isString,
  HI as useAltKeyDown,
  qp as useAnimations,
  BI as useAsyncEffect,
  ZS as useBooleanState,
  WI as useDebounce,
  UI as useFilteredEffect,
  qI as useFullScreen,
  KI as useNotifications,
  YI as useOverflow
};
