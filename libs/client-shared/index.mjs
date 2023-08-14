import * as v from "react";
import Pe, { useState as dr, useEffect as Ut, useRef as $e, createContext as gi, useMemo as vo, useContext as Kt, useLayoutEffect as bv, forwardRef as qu, Children as Q0, createRef as G0, useCallback as mc, useDebugValue as lf, createElement as K0 } from "react";
import { jsx as xt, jsxs as Ev, Fragment as Qu } from "react/jsx-runtime";
import * as Y0 from "react-dom";
import X0, { createPortal as Gu, unstable_batchedUpdates as J0, flushSync as Z0 } from "react-dom";
import ey from "react-smooth-scrollbar";
const ty = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, WI = (e) => typeof e == "object" && e !== null, ry = (e) => typeof e == "string", UI = (e) => typeof e == "function";
process.env.CLIENT_URL;
const ny = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const Sv = process.env.SERVER_URL ?? "http://localhost:6868", oy = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class iy {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? ay(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in ty))) {
      if (ry(r))
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
    return `${ny}__${t}`;
  }
}
const ay = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var gc = function(e, t) {
  return gc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, gc(e, t);
};
function Ir(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  gc(e, t);
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
function Tn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function tn(e, t, r, n) {
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
function rn(e, t) {
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
function Cn(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var xs = "Invariant Violation", ff = Object.setPrototypeOf, sy = ff === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : ff, Ye = (
  /** @class */
  function(e) {
    Ir(t, e);
    function t(r) {
      r === void 0 && (r = xs);
      var n = e.call(this, typeof r == "number" ? xs + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = xs, sy(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function ce(e, t) {
  if (!e)
    throw new Ye(t);
}
var wv = ["debug", "log", "warn", "error", "silent"], cy = wv.indexOf("log");
function Di(e) {
  return function() {
    if (wv.indexOf(e) >= cy) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Di("debug"), e.log = Di("log"), e.warn = Di("warn"), e.error = Di("error");
})(ce || (ce = {}));
function gr(e) {
  try {
    return e();
  } catch {
  }
}
const df = gr(function() {
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
var hf = "__", vf = [hf, hf].join("DEV");
function uy() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(df, vf, {
      value: gr(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), df[vf];
  }
}
const Rs = uy();
function nn(e) {
  try {
    return e();
  } catch {
  }
}
var yc = nn(function() {
  return globalThis;
}) || nn(function() {
  return window;
}) || nn(function() {
  return self;
}) || nn(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
nn(function() {
  return nn.constructor("return this")();
}), bc = !1;
function ly() {
  yc && !nn(function() {
    return process.env.NODE_ENV;
  }) && !nn(function() {
    return process;
  }) && (Object.defineProperty(yc, "process", {
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
  }), bc = !0);
}
ly();
function pf() {
  bc && (delete yc.process, bc = !1);
}
function Ji(e, t) {
  if (!!!e)
    throw new Error(t);
}
const Cv = {
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
}, fy = new Set(Object.keys(Cv));
function mf(e) {
  const t = e?.kind;
  return typeof t == "string" && fy.has(t);
}
var gf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(gf || (gf = {}));
var Vt;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Vt || (Vt = {}));
function yf(e) {
  return e === 9 || e === 32;
}
function dy(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((h) => h.length === 0 || yf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, c = e.endsWith("\\"), u = s || c, l = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || u || i || a);
  let f = "";
  const d = o && yf(e.charCodeAt(0));
  return (l && !d || i) && (f += `
`), f += r, (l || u) && (f += `
`), '"""' + f + '"""';
}
const hy = 10, Ov = 2;
function _v(e) {
  return Wa(e, []);
}
function Wa(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return vy(e, t);
    default:
      return String(e);
  }
}
function vy(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (py(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Wa(n, r);
  } else if (Array.isArray(e))
    return gy(e, r);
  return my(e, r);
}
function py(e) {
  return typeof e.toJSON == "function";
}
function my(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Ov ? "[" + yy(e) + "]" : "{ " + r.map(
    ([o, i]) => o + ": " + Wa(i, t)
  ).join(", ") + " }";
}
function gy(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Ov)
    return "[Array]";
  const r = Math.min(hy, e.length), n = e.length - r, o = [];
  for (let i = 0; i < r; ++i)
    o.push(Wa(e[i], t));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function yy(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class by {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Ji(!1, `Body must be a string. Received: ${_v(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Ji(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Ji(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function Ey(e) {
  return `"${e.replace(Sy, wy)}"`;
}
const Sy = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function wy(e) {
  return Cy[e.charCodeAt(0)];
}
const Cy = [
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
], Ku = Object.freeze({});
function Gr(e, t, r = Cv) {
  const n = /* @__PURE__ */ new Map();
  for (const b of Object.values(Vt))
    n.set(b, Oy(t, b));
  let o, i = Array.isArray(e), a = [e], s = -1, c = [], u = e, l, f;
  const d = [], h = [];
  do {
    s++;
    const b = s === a.length, y = b && c.length !== 0;
    if (b) {
      if (l = h.length === 0 ? void 0 : d[d.length - 1], u = f, f = h.pop(), y)
        if (i) {
          u = u.slice();
          let w = 0;
          for (const [E, C] of c) {
            const O = E - w;
            C === null ? (u.splice(O, 1), w++) : u[O] = C;
          }
        } else {
          u = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(u)
          );
          for (const [w, E] of c)
            u[w] = E;
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
      mf(u) || Ji(!1, `Invalid AST Node: ${_v(u)}.`);
      const w = b ? (m = n.get(u.kind)) === null || m === void 0 ? void 0 : m.leave : (p = n.get(u.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (S = w?.call(t, u, l, f, d, h), S === Ku)
        break;
      if (S === !1) {
        if (!b) {
          d.pop();
          continue;
        }
      } else if (S !== void 0 && (c.push([l, S]), !b))
        if (mf(S))
          u = S;
        else {
          d.pop();
          continue;
        }
    }
    if (S === void 0 && y && c.push([l, u]), b)
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
function Oy(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function _y(e) {
  return Gr(e, Ry);
}
const xy = 80, Ry = {
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
      const t = je("(", pe(e.variableDefinitions, ", "), ")"), r = pe(
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
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + je(" = ", r) + je(" ", pe(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => Or(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: o }) {
      const i = je("", e, ": ") + t;
      let a = i + je("(", pe(r, ", "), ")");
      return a.length > xy && (a = i + je(`(
`, Zi(pe(r, `
`)), `
)`)), pe([a, pe(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + je(" ", pe(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => pe(
      [
        "...",
        je("on ", e),
        pe(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${je("(", pe(r, ", "), ")")} on ${t} ${je("", pe(n, " "), " ")}` + o
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
    leave: ({ value: e, block: t }) => t ? dy(e) : Ey(e)
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
    leave: ({ name: e, arguments: t }) => "@" + e + je("(", pe(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => je("", e, `
`) + pe(["schema", pe(t, " "), Or(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => je("", e, `
`) + pe(["scalar", t, pe(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => je("", e, `
`) + pe(
      [
        "type",
        t,
        je("implements ", pe(r, " & ")),
        pe(n, " "),
        Or(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: o }) => je("", e, `
`) + t + (bf(r) ? je(`(
`, Zi(pe(r, `
`)), `
)`) : je("(", pe(r, ", "), ")")) + ": " + n + je(" ", pe(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: o }) => je("", e, `
`) + pe(
      [t + ": " + r, je("= ", n), pe(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => je("", e, `
`) + pe(
      [
        "interface",
        t,
        je("implements ", pe(r, " & ")),
        pe(n, " "),
        Or(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => je("", e, `
`) + pe(
      ["union", t, pe(r, " "), je("= ", pe(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => je("", e, `
`) + pe(["enum", t, pe(r, " "), Or(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => je("", e, `
`) + pe([t, pe(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => je("", e, `
`) + pe(["input", t, pe(r, " "), Or(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: o }) => je("", e, `
`) + "directive @" + t + (bf(r) ? je(`(
`, Zi(pe(r, `
`)), `
)`) : je("(", pe(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + pe(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => pe(
      ["extend schema", pe(e, " "), Or(t)],
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
        je("implements ", pe(t, " & ")),
        pe(r, " "),
        Or(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => pe(
      [
        "extend interface",
        e,
        je("implements ", pe(t, " & ")),
        pe(r, " "),
        Or(n)
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
        je("= ", pe(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => pe(["extend enum", e, pe(t, " "), Or(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => pe(["extend input", e, pe(t, " "), Or(r)], " ")
  }
};
function pe(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function Or(e) {
  return je(`{
`, Zi(pe(e, `
`)), `
}`);
}
function je(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function Zi(e) {
  return je("  ", e.replace(/\n/g, `
  `));
}
function bf(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Ef(e) {
  return e.kind === Vt.FIELD || e.kind === Vt.FRAGMENT_SPREAD || e.kind === Vt.INLINE_FRAGMENT;
}
function Ty() {
  return pf();
}
function Py() {
  __DEV__ ? ce(typeof Rs == "boolean", Rs) : ce(typeof Rs == "boolean", 39);
}
Ty();
Py();
function Ua(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : My(r).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = t && t[i.value.name.value], __DEV__ ? ce(a !== void 0, "Invalid variable referenced in @".concat(o.name.value, " directive.")) : ce(a !== void 0, 40)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function Yu(e, t, r) {
  var n = new Set(e), o = n.size;
  return Gr(t, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!r || !n.size))
        return Ku;
    }
  }), r ? !n.size : n.size < o;
}
function Ny(e) {
  return e && Yu(["client", "export"], e, !0);
}
function Iy(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function My(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (Iy(r)) {
      var n = r.arguments, o = r.name.value;
      __DEV__ ? ce(n && n.length === 1, "Incorrect number of arguments for the @".concat(o, " directive.")) : ce(n && n.length === 1, 41);
      var i = n[0];
      __DEV__ ? ce(i.name && i.name.value === "if", "Invalid argument for the @".concat(o, " directive.")) : ce(i.name && i.name.value === "if", 42);
      var a = i.value;
      __DEV__ ? ce(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(o, " directive must be a variable or a boolean value.")) : ce(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: r, ifArgument: i });
    }
  }), t;
}
function Ay(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw __DEV__ ? new Ye("Found a ".concat(i.operation, " operation").concat(i.name ? " named '".concat(i.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Ye(44);
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof r > "u" && (__DEV__ ? ce(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : ce(n.length === 1, 45), r = n[0].name.value);
  var o = z(z({}, e), { definitions: Cn([
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
function Xu(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function Ju(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return __DEV__ ? ce(n, "No fragment named ".concat(r)) : ce(n, 46), n || null;
    }
    default:
      return null;
  }
}
function yt(e) {
  return e !== null && typeof e == "object";
}
function uo(e) {
  return { __ref: String(e) };
}
function at(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Dy(e) {
  return yt(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Fy(e) {
  return e.kind === "StringValue";
}
function $y(e) {
  return e.kind === "BooleanValue";
}
function ky(e) {
  return e.kind === "IntValue";
}
function Ly(e) {
  return e.kind === "FloatValue";
}
function jy(e) {
  return e.kind === "Variable";
}
function Vy(e) {
  return e.kind === "ObjectValue";
}
function zy(e) {
  return e.kind === "ListValue";
}
function Hy(e) {
  return e.kind === "EnumValue";
}
function By(e) {
  return e.kind === "NullValue";
}
function po(e, t, r, n) {
  if (ky(r) || Ly(r))
    e[t.value] = Number(r.value);
  else if ($y(r) || Fy(r))
    e[t.value] = r.value;
  else if (Vy(r)) {
    var o = {};
    r.fields.map(function(a) {
      return po(o, a.name, a.value, n);
    }), e[t.value] = o;
  } else if (jy(r)) {
    var i = (n || {})[r.name.value];
    e[t.value] = i;
  } else if (zy(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return po(s, t, a, n), s[t.value];
    });
  else if (Hy(r))
    e[t.value] = r.value;
  else if (By(r))
    e[t.value] = null;
  else
    throw __DEV__ ? new Ye('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Ye(55);
}
function Wy(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(o) {
    r[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return po(r[o.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return po(n, i, a, t);
  })), Zu(e.name.value, n, r);
}
var Uy = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], Zu = Object.assign(function(e, t, r) {
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
    Uy.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? i += "@".concat(s, "(").concat(Vo(r[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var t = Vo;
    return Vo = e, t;
  }
}), Vo = function(t) {
  return JSON.stringify(t, qy);
};
function qy(e, t) {
  return yt(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function qa(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return po(r, o, i, t);
    }), r;
  }
  return null;
}
function Pn(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Ec(e, t, r) {
  for (var n, o = 0, i = t.selections; o < i.length; o++) {
    var a = i[o];
    if (Nn(a)) {
      if (a.name.value === "__typename")
        return e[Pn(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, c = n; s < c.length; s++) {
      var a = c[s], u = Ec(e, Ju(a, r).selectionSet, r);
      if (typeof u == "string")
        return u;
    }
}
function Nn(e) {
  return e.kind === "Field";
}
function Qy(e) {
  return e.kind === "InlineFragment";
}
function Qa(e) {
  __DEV__ ? ce(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : ce(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new Ye('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new Ye(48);
    return r;
  });
  return __DEV__ ? ce(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : ce(t.length <= 1, 49), e;
}
function yi(e) {
  return Qa(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function Sc(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function el(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function xv(e) {
  var t = yi(e);
  return __DEV__ ? ce(t && t.operation === "query", "Must contain a query definition.") : ce(t && t.operation === "query", 50), t;
}
function Gy(e) {
  __DEV__ ? ce(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : ce(e.kind === "Document", 51), __DEV__ ? ce(e.definitions.length <= 1, "Fragment must have exactly one definition.") : ce(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? ce(t.kind === "FragmentDefinition", "Must be a fragment definition.") : ce(t.kind === "FragmentDefinition", 53), t;
}
function Ga(e) {
  Qa(e);
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
  throw __DEV__ ? new Ye("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Ye(54);
}
function tl(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && po(t, n.variable.name, n.defaultValue);
  }), t;
}
var wt = Array.isArray;
function Fr(e) {
  return Array.isArray(e) && e.length > 0;
}
var Sf = {
  kind: Vt.FIELD,
  name: {
    kind: Vt.NAME,
    value: "__typename"
  }
};
function Rv(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === Vt.FRAGMENT_SPREAD && Rv(t[r.name.value], t);
  });
}
function Ky(e) {
  return Rv(yi(e) || Gy(e), Xu(el(e))) ? null : e;
}
function Yy(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.forEach(function(n) {
    n.name ? t.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return t.has(n.name.value) || r.some(function(o) {
      return o(n);
    });
  };
}
function wf(e) {
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
function Tv(e, t) {
  for (var r = wf(""), n = wf(""), o = function(y) {
    for (var S = 0, w = void 0; S < y.length && (w = y[S]); ++S)
      if (!wt(w)) {
        if (w.kind === Vt.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === Vt.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return __DEV__ && ce.error("Could not find operation or fragment"), null;
  }, i = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === Vt.OPERATION_DEFINITION && ++i;
  var s = Yy(e), c = e.some(function(y) {
    return y.remove;
  }), u = function(y) {
    return c && y && y.some(s);
  }, l = /* @__PURE__ */ new Map(), f = !1, d = {
    enter: function(y) {
      if (u(y.directives))
        return f = !0, null;
    }
  }, h = Gr(t, {
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, S, w, E, C) {
        var O = o(C);
        O && O.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, S, w, E, C) {
        if (u(y.directives))
          return f = !0, null;
        var O = o(C);
        O && O.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, S, w, E) {
        l.set(JSON.stringify(E), y);
      },
      leave: function(y, S, w, E) {
        var C = l.get(JSON.stringify(E));
        if (y === C)
          return y;
        if (i > 0 && y.selectionSet.selections.every(function(O) {
          return O.kind === Vt.FIELD && O.name.value === "__typename";
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
    y.kind === Vt.OPERATION_DEFINITION ? m(r(y.name && y.name.value)).fragmentSpreads.forEach(function(S) {
      p.add(S);
    }) : y.kind === Vt.FRAGMENT_DEFINITION && i === 0 && !n(y.name.value).removed && p.add(y.name.value);
  }), p.forEach(function(y) {
    m(n(y)).fragmentSpreads.forEach(function(S) {
      p.add(S);
    });
  });
  var g = function(y) {
    return !!(!p.has(y) || n(y).removed);
  }, b = {
    enter: function(y) {
      if (g(y.name.value))
        return null;
    }
  };
  return Ky(Gr(h, {
    FragmentSpread: b,
    FragmentDefinition: b,
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
var rl = Object.assign(function(e) {
  return Gr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === Vt.OPERATION_DEFINITION)) {
          var o = t.selections;
          if (o) {
            var i = o.some(function(s) {
              return Nn(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(Nn(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return z(z({}, t), { selections: Cn(Cn([], o, !0), [Sf], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === Sf;
  }
}), Xy = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && ce.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function Jy(e) {
  return Tv([Xy], Qa(e));
}
function Zy(e) {
  var t = Ga(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Gr(e, {
    OperationDefinition: {
      enter: function(o) {
        return z(z({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function eb(e) {
  Qa(e);
  var t = Tv([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var tb = Object.prototype.hasOwnProperty;
function Cf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return nl(e);
}
function nl(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new cn(), o = 1; o < r; ++o)
      t = n.merge(t, e[o]);
  return t;
}
var rb = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, cn = function() {
  function e(t) {
    t === void 0 && (t = rb), this.reconciler = t, this.isObject = yt, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return yt(r) && yt(t) ? (Object.keys(r).forEach(function(a) {
      if (tb.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var c = n.reconciler.apply(n, Cn([t, r, a], o, !1));
          c !== s && (t = n.shallowCopyForMerge(t), t[a] = c);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return yt(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = z({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function nb(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = ob(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ob(e, t) {
  if (e) {
    if (typeof e == "string")
      return Of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Of(e, t);
  }
}
function Of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function _f(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ol(e, t, r) {
  return t && _f(e.prototype, t), r && _f(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var il = function() {
  return typeof Symbol == "function";
}, al = function(e) {
  return il() && !!Symbol[e];
}, sl = function(e) {
  return al(e) ? Symbol[e] : "@@" + e;
};
il() && !al("observable") && (Symbol.observable = Symbol("observable"));
var ib = sl("iterator"), wc = sl("observable"), Pv = sl("species");
function ga(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function zo(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Pv], t === null && (t = void 0)), t !== void 0 ? t : vt;
}
function ab(e) {
  return e instanceof vt;
}
function mo(e) {
  mo.log ? mo.log(e) : setTimeout(function() {
    throw e;
  });
}
function ea(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      mo(t);
    }
  });
}
function Nv(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = ga(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      mo(n);
    }
}
function Cc(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function sb(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Iv(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Iv(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = ga(n, t);
    switch (t) {
      case "next":
        o && o.call(n, r);
        break;
      case "error":
        if (Cc(e), o)
          o.call(n, r);
        else
          throw r;
        break;
      case "complete":
        Cc(e), o && o.call(n);
        break;
    }
  } catch (i) {
    mo(i);
  }
  e._state === "closed" ? Nv(e) : e._state === "running" && (e._state = "ready");
}
function Ts(e, t, r) {
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
      }], ea(function() {
        return sb(e);
      });
      return;
    }
    Iv(e, t, r);
  }
}
var cb = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var o = new ub(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Cc(this), Nv(this));
  }, ol(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), ub = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Ts(this._subscription, "next", n);
  }, t.error = function(n) {
    Ts(this._subscription, "error", n);
  }, t.complete = function() {
    Ts(this._subscription, "complete");
  }, ol(e, [{
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
    }), new cb(n, this._subscriber);
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
  }, t[wc] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = ga(n, wc);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return ab(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (al("iterator") && (i = ga(n, ib), i))
      return new o(function(s) {
        ea(function() {
          if (!s.closed) {
            for (var c = nb(i.call(n)), u; !(u = c()).done; ) {
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
        ea(function() {
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
      ea(function() {
        if (!s.closed) {
          for (var c = 0; c < o.length; ++c)
            if (s.next(o[c]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, ol(e, null, [{
    key: Pv,
    get: function() {
      return this;
    }
  }]), e;
}();
il() && Object.defineProperty(vt, Symbol("extensions"), {
  value: {
    symbol: wc,
    hostReportError: mo
  },
  configurable: !0
});
var Fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function lb(e) {
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
var Zn;
typeof self < "u" ? Zn = self : typeof window < "u" ? Zn = window : typeof global < "u" ? Zn = global : typeof module < "u" ? Zn = module : Zn = Function("return this")();
lb(Zn);
var xf = vt.prototype, Rf = "@@observable";
xf[Rf] || (xf[Rf] = function() {
  return this;
});
var fb = Object.prototype.toString;
function Mv(e) {
  return Oc(e);
}
function Oc(e, t) {
  switch (fb.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(o, i) {
        r[i] = Oc(o, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = Oc(e[o], t);
      }), n;
    }
    default:
      return e;
  }
}
function db(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    yt(r) && hb(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      yt(r[n]) && t.add(r[n]);
    });
  }), e;
}
function hb(e) {
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
function _c(e) {
  return __DEV__ && db(e), e;
}
function Yo(e, t, r) {
  var n = [];
  e.forEach(function(o) {
    return o[t] && n.push(o);
  }), n.forEach(function(o) {
    return o[t](r);
  });
}
function Ps(e, t, r) {
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
        u = u.then(g, g).then(function(b) {
          --s, o && o.call(n, b), c && f.complete();
        }, function(b) {
          throw --s, b;
        }).catch(function(b) {
          i && i.call(n, b);
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
var Dn = typeof WeakMap == "function" && gr(function() {
  return navigator.product;
}) !== "ReactNative", vb = typeof WeakSet == "function", Av = typeof Symbol == "function" && typeof Symbol.for == "function", Ka = Av && Symbol.asyncIterator;
gr(function() {
  return window.document.createElement;
});
gr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Dv(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: vt });
  }
  return Av && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Tf(e) {
  return e && typeof e.then == "function";
}
var eo = function(e) {
  Ir(t, e);
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
          c ? Tf(c) ? c.then(function(u) {
            return n.sub = u.subscribe(n.handlers);
          }) : n.sub = c.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Yo(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof r == "function" && (r = [new vt(r)]), Tf(r) ? r.then(function(o) {
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
Dv(eo);
function lo(e) {
  return "incremental" in e;
}
function pb(e) {
  return "hasNext" in e && "data" in e;
}
function mb(e) {
  return lo(e) || pb(e);
}
function gb(e) {
  return yt(e) && "payload" in e;
}
function Fv(e, t) {
  var r = e, n = new cn();
  return lo(t) && Fr(t.incremental) && t.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var c = a[s], u = !isNaN(+c), l = u ? [] : {};
      l[c] = i, i = l;
    }
    r = n.merge(r, i);
  }), r;
}
function ta(e) {
  var t = xc(e);
  return Fr(t);
}
function xc(e) {
  var t = Fr(e.errors) ? e.errors.slice(0) : [];
  return lo(e) && Fr(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Ya() {
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
var Pf = /* @__PURE__ */ new Map();
function Rc(e) {
  var t = Pf.get(e) || 1;
  return Pf.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function yb(e) {
  var t = Rc("stringifyForDisplay");
  return JSON.stringify(e, function(r, n) {
    return n === void 0 ? t : n;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function Ns(e, t) {
  return Ya(e, t, t.variables && {
    variables: z(z({}, e && e.variables), t.variables)
  });
}
function Nf(e) {
  return new vt(function(t) {
    t.error(e);
  });
}
var Tc = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function bb(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var o = n[r];
    if (t.indexOf(o) < 0)
      throw __DEV__ ? new Ye("illegal argument: ".concat(o)) : new Ye(27);
  }
  return e;
}
function Eb(e, t) {
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
function Sb(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? Sc(t.query) || void 0 : ""), t;
}
function If(e, t) {
  return t ? t(e) : vt.of();
}
function Ho(e) {
  return typeof e == "function" ? new xo(e) : e;
}
function $i(e) {
  return e.request.length <= 1;
}
var wb = function(e) {
  Ir(t, e);
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
    var o = Ho(r), i = Ho(n || new e(If));
    return $i(o) && $i(i) ? new e(function(a) {
      return t(a) ? o.request(a) || vt.of() : i.request(a) || vt.of();
    }) : new e(function(a, s) {
      return t(a) ? o.request(a, s) || vt.of() : i.request(a, s) || vt.of();
    });
  }, e.execute = function(t, r) {
    return t.request(Eb(r.context, Sb(bb(r)))) || vt.of();
  }, e.concat = function(t, r) {
    var n = Ho(t);
    if ($i(n))
      return __DEV__ && ce.warn(new wb("You are calling concat on a terminating link, which will have no effect", n)), n;
    var o = Ho(r);
    return $i(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || vt.of();
      }) || vt.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || vt.of();
      }) || vt.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(If)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw __DEV__ ? new Ye("request is not implemented") : new Ye(22);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), Pc = xo.execute, Cb = "3.7.17";
function Ob(e) {
  return !!e.body;
}
function _b(e) {
  return !!e.getReader;
}
function xb(e) {
  return !!(Ka && e[Symbol.asyncIterator]);
}
function Rb(e) {
  return !!e.stream;
}
function Tb(e) {
  return !!e.arrayBuffer;
}
function Pb(e) {
  return !!e.pipe;
}
function Nb(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function Ib(e) {
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
  return Ka && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function Mb(e) {
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
  return Ka && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Mf(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return Ka && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Ab(e) {
  var t = e;
  if (Ob(e) && (t = e.body), xb(t))
    return Nb(t);
  if (_b(t))
    return Mf(t.getReader());
  if (Rb(t))
    return Mf(t.stream().getReader());
  if (Tb(t))
    return Mb(t.arrayBuffer());
  if (Pb(t))
    return Ib(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var ul = Symbol();
function Db(e) {
  return e.extensions ? Array.isArray(e.extensions[ul]) : !1;
}
function Fb(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var $b = function(e) {
  var t = Cn(Cn(Cn([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return yt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, qn = function(e) {
  Ir(t, e);
  function t(r) {
    var n = r.graphQLErrors, o = r.protocolErrors, i = r.clientErrors, a = r.networkError, s = r.errorMessage, c = r.extraInfo, u = e.call(this, s) || this;
    return u.name = "ApolloError", u.graphQLErrors = n || [], u.protocolErrors = o || [], u.clientErrors = i || [], u.networkError = a || null, u.message = s || $b(u), u.extraInfo = c, u.__proto__ = t.prototype, u;
  }
  return t;
}(Error), Af = Object.prototype.hasOwnProperty;
function kb(e, t) {
  var r, n, o, i, a;
  return tn(this, void 0, void 0, function() {
    var s, c, u, l, f, d, h, m, p, g, b, y, S, w, E, C, O, T, P, x, L, R, _;
    return rn(this, function(N) {
      switch (N.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), c = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), u = "boundary=", l = c?.includes(u) ? c?.substring(c?.indexOf(u) + u.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(l), d = "", h = Ab(e), m = !0, N.label = 1;
        case 1:
          return m ? [4, h.next()] : [3, 3];
        case 2:
          for (p = N.sent(), g = p.value, b = p.done, y = typeof g == "string" ? g : s.decode(g), S = d.length - f.length + 1, m = !b, d += y, w = d.indexOf(f, S); w > -1; ) {
            if (E = void 0, R = [
              d.slice(0, w),
              d.slice(w + f.length)
            ], E = R[0], d = R[1], C = E.indexOf(`\r
\r
`), O = Lb(E.slice(0, C)), T = O["content-type"], T && T.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (P = E.slice(C), P)
              try {
                x = $v(e, P), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x ? gb(x) ? (L = {}, "payload" in x && (L = z({}, x.payload)), "errors" in x && (L = z(z({}, L), { extensions: z(z({}, "extensions" in L ? L.extensions : null), (_ = {}, _[ul] = x.errors, _)) })), (n = t.next) === null || n === void 0 || n.call(t, L)) : (o = t.next) === null || o === void 0 || o.call(t, x) : Object.keys(x).length === 1 && "hasNext" in x && !x.hasNext && ((i = t.complete) === null || i === void 0 || i.call(t));
              } catch (D) {
                ll(D, t);
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
function Lb(e) {
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
function $v(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    Tc(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function ll(e, t) {
  var r, n;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((r = t.next) === null || r === void 0 || r.call(t, e.result)), (n = t.error) === null || n === void 0 || n.call(t, e));
}
function jb(e, t, r) {
  Vb(t)(e).then(function(n) {
    var o, i;
    (o = r.next) === null || o === void 0 || o.call(r, n), (i = r.complete) === null || i === void 0 || i.call(r);
  }).catch(function(n) {
    return ll(n, r);
  });
}
function Vb(e) {
  return function(t) {
    return t.text().then(function(r) {
      return $v(t, r);
    }).then(function(r) {
      return t.status >= 300 && Tc(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !Af.call(r, "data") && !Af.call(r, "errors") && Tc(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var Nc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (o) {
    var n = __DEV__ ? new Ye("Network request failed. ".concat(t, " is not serializable: ").concat(o.message)) : new Ye(24);
    throw n.parseError = o, n;
  }
  return r;
}, zb = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Hb = {
  accept: "*/*",
  "content-type": "application/json"
}, Bb = {
  method: "POST"
}, Wb = {
  http: zb,
  headers: Hb,
  options: Bb
}, Ub = function(e, t) {
  return t(e);
};
function qb(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = {}, i = {};
  r.forEach(function(f) {
    o = z(z(z({}, o), f.options), { headers: z(z({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = z(z({}, i), f.http);
  }), o.headers && (o.headers = Qb(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, c = e.variables, u = e.query, l = { operationName: a, variables: c };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = t(u, _y)), {
    options: o,
    body: l
  };
}
function Qb(e, t) {
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
var Gb = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new Ye(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new Ye(23);
}, Kb = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, Yb = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function Xb(e, t) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var o = void 0;
    try {
      o = Nc(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (t.extensions) {
    var i = void 0;
    try {
      i = Nc(t.extensions, "Extensions map");
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
var Df = gr(function() {
  return fetch;
}), kv = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, o = e.print, i = o === void 0 ? Ub : o, a = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, u = e.includeUnusedVariables, l = u === void 0 ? !1 : u, f = Tn(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && Gb(n || Df);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new xo(function(h) {
    var m = Yb(h, r), p = h.getContext(), g = {};
    if (p.clientAwareness) {
      var b = p.clientAwareness, y = b.name, S = b.version;
      y && (g["apollographql-client-name"] = y), S && (g["apollographql-client-version"] = S);
    }
    var w = z(z({}, g), p.headers), E = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: w
    }, C = qb(h, i, Wb, d, E), O = C.options, T = C.body;
    if (T.variables && !l) {
      var P = new Set(Object.keys(T.variables));
      Gr(h.query, {
        Variable: function(k, H, j) {
          j && j.kind !== "VariableDefinition" && P.delete(k.name.value);
        }
      }), P.size && (T.variables = z({}, T.variables), P.forEach(function(k) {
        delete T.variables[k];
      }));
    }
    var x;
    if (!O.signal) {
      var L = Kb(), R = L.controller, _ = L.signal;
      x = R, x && (O.signal = _);
    }
    var N = function(k) {
      return k.kind === "OperationDefinition" && k.operation === "mutation";
    }, D = function(k) {
      return k.kind === "OperationDefinition" && k.operation === "subscription";
    }, A = D(Ga(h.query)), F = Yu(["defer"], h.query);
    if (c && !h.query.definitions.some(N) && (O.method = "GET"), F || A) {
      O.headers = O.headers || {};
      var B = "multipart/mixed;";
      A && F && __DEV__ && ce.warn("Multipart-subscriptions do not support @defer"), A ? B += "boundary=graphql;subscriptionSpec=1.0,application/json" : F && (B += "deferSpec=20220824,application/json"), O.headers.accept = B;
    }
    if (O.method === "GET") {
      var q = Xb(m, T), ne = q.newURI, se = q.parseError;
      if (se)
        return Nf(se);
      m = ne;
    } else
      try {
        O.body = Nc(T, "Payload");
      } catch (k) {
        return Nf(k);
      }
    return new vt(function(k) {
      var H = n || gr(function() {
        return fetch;
      }) || Df;
      return H(m, O).then(function(j) {
        var K;
        h.setContext({ response: j });
        var M = (K = j.headers) === null || K === void 0 ? void 0 : K.get("content-type");
        return M !== null && /^multipart\/mixed/i.test(M) ? kb(j, k) : jb(j, h, k);
      }).catch(function(j) {
        return ll(j, k);
      }), function() {
        x && x.abort();
      };
    });
  });
}, Jb = function(e) {
  Ir(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, kv(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(xo);
const { toString: Ff, hasOwnProperty: Zb } = Object.prototype, $f = Function.prototype.toString, Ic = /* @__PURE__ */ new Map();
function At(e, t) {
  try {
    return Mc(e, t);
  } finally {
    Ic.clear();
  }
}
function Mc(e, t) {
  if (e === t)
    return !0;
  const r = Ff.call(e), n = Ff.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Lf(e, t))
        return !0;
      const o = kf(e), i = kf(t), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!Zb.call(t, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const c = o[s];
        if (!Mc(e[c], t[c]))
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
      if (Lf(e, t))
        return !0;
      const o = e.entries(), i = r === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, c] = a.value;
        if (!t.has(s) || i && !Mc(c, t.get(s)))
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
      const o = $f.call(e);
      return o !== $f.call(t) ? !1 : !r1(o, t1);
    }
  }
  return !1;
}
function kf(e) {
  return Object.keys(e).filter(e1, e);
}
function e1(e) {
  return this[e] !== void 0;
}
const t1 = "{ [native code] }";
function r1(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Lf(e, t) {
  let r = Ic.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Ic.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
var n1 = function() {
  return /* @__PURE__ */ Object.create(null);
}, Lv = Array.prototype, o1 = Lv.forEach, i1 = Lv.slice, a1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !0), r === void 0 && (r = n1), this.weakness = t, this.makeData = r;
    }
    return e.prototype.lookup = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var r = this;
      return o1.call(t, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(i1.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var r = this.weakness && s1(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(t);
      return n || r.set(t, n = new e(this.weakness, this.makeData)), n;
    }, e;
  }()
);
function s1(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Bt = null;
const jf = {};
let c1 = 1;
const u1 = () => class {
  constructor() {
    this.id = [
      "slot",
      c1++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Bt; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === jf)
          break;
        return t !== Bt && (Bt.slots[this.id] = r), !0;
      }
    return Bt && (Bt.slots[this.id] = jf), !1;
  }
  getValue() {
    if (this.hasValue())
      return Bt.slots[this.id];
  }
  withValue(t, r, n, o) {
    const i = {
      __proto__: null,
      [this.id]: t
    }, a = Bt;
    Bt = { parent: a, slots: i };
    try {
      return r.apply(o, n);
    } finally {
      Bt = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Bt;
    return function() {
      const n = Bt;
      try {
        return Bt = r, t.apply(this, arguments);
      } finally {
        Bt = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Bt) {
      const o = Bt;
      try {
        return Bt = null, t.apply(n, r);
      } finally {
        Bt = o;
      }
    } else
      return t.apply(n, r);
  }
};
function Vf(e) {
  try {
    return e();
  } catch {
  }
}
const Is = "@wry/context:Slot", l1 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Vf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Vf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), zf = l1, jv = zf[Is] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Is] || function(e) {
  try {
    Object.defineProperty(zf, Is, {
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
}(u1());
function f1() {
}
var d1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = 1 / 0), r === void 0 && (r = f1), this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
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
), Xa = new jv(), Ms, h1 = Object.prototype.hasOwnProperty, fl = (Ms = Array.from, Ms === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
} : Ms);
function ya(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var ii = [], v1 = 100;
function go(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function p1(e, t) {
  var r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function Vv(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function m1(e) {
  return e.slice(0);
}
var g1 = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !un(this))
        return Hf(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return go(!this.recomputing, "already recomputing"), Hf(this), un(this) ? y1(this, t) : Vv(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, zv(this), ya(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), qv(this), dl(this, function(r, n) {
        r.setDirty(), Qv(r, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = ii.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (fl(this.deps).forEach(function(r) {
        return r.delete(t);
      }), this.deps.clear(), ii.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function Hf(e) {
  var t = Xa.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), un(e) ? Bv(t, e) : Wv(t, e), t;
}
function y1(e, t) {
  return qv(e), Xa.withValue(e, b1, [e, t]), S1(e, t) && E1(e), Vv(e.value);
}
function b1(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function un(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function E1(e) {
  e.dirty = !1, !un(e) && Hv(e);
}
function zv(e) {
  dl(e, Bv);
}
function Hv(e) {
  dl(e, Wv);
}
function dl(e, t) {
  var r = e.parents.size;
  if (r)
    for (var n = fl(e.parents), o = 0; o < r; ++o)
      t(n[o], e);
}
function Bv(e, t) {
  go(e.childValues.has(t)), go(un(t));
  var r = !un(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = ii.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && zv(e);
}
function Wv(e, t) {
  go(e.childValues.has(t)), go(!un(t));
  var r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, m1(t.value)) : p1(r, t.value) || e.setDirty(), Uv(e, t), !un(e) && Hv(e);
}
function Uv(e, t) {
  var r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (ii.length < v1 && ii.push(r), e.dirtyChildren = null));
}
function qv(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
    Qv(e, r);
  }), e.forgetDeps(), go(e.dirtyChildren === null);
}
function Qv(e, t) {
  t.parents.delete(e), e.childValues.delete(t), Uv(e, t);
}
function S1(e, t) {
  if (typeof e.subscribe == "function")
    try {
      ya(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var w1 = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Gv(e) {
  var t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(o) {
    var i = Xa.getValue();
    if (i) {
      var a = t.get(o);
      a || t.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof r == "function" && (ya(a), a.unsubscribe = r(o));
    }
  }
  return n.dirty = function(i, a) {
    var s = t.get(i);
    if (s) {
      var c = a && h1.call(w1, a) ? a : "setDirty";
      fl(s).forEach(function(u) {
        return u[c]();
      }), t.delete(i), ya(s);
    }
  }, n;
}
function Kv() {
  var e = new a1(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
Kv();
var As = /* @__PURE__ */ new Set();
function ba(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var r = new d1(t.max || Math.pow(2, 16), function(u) {
    return u.dispose();
  }), n = t.keyArgs, o = t.makeCacheKey || Kv(), i = function() {
    var u = o.apply(null, n ? n.apply(null, arguments) : arguments);
    if (u === void 0)
      return e.apply(null, arguments);
    var l = r.get(u);
    l || (r.set(u, l = new g1(e)), l.subscribe = t.subscribe, l.forget = function() {
      return r.delete(u);
    });
    var f = l.recompute(Array.prototype.slice.call(arguments));
    return r.set(u, l), As.add(r), Xa.hasValue() || (As.forEach(function(d) {
      return d.clean();
    }), As.clear()), f;
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
var C1 = function() {
  function e() {
    this.getFragmentDoc = ba(Ay);
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
    var r = t.id, n = t.data, o = Tn(t, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, o = t.fragment, i = t.fragmentName, a = Tn(t, ["id", "data", "fragment", "fragmentName"]);
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
}(), Yv = function(e) {
  Ir(t, e);
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
const O1 = () => /* @__PURE__ */ Object.create(null), { forEach: _1, slice: x1 } = Array.prototype, { hasOwnProperty: R1 } = Object.prototype;
class Ro {
  constructor(t = !0, r = O1) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return _1.call(t, (n) => r = r.getChildTrie(n)), R1.call(r, "data") ? r.data : r.data = this.makeData(x1.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, o = t.length; r && n < o; ++n) {
      const i = this.weakness && Bf(t[n]) ? r.weak : r.strong;
      r = i && i.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && Bf(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new Ro(this.weakness, this.makeData)), n;
  }
}
function Bf(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Lt = Object.prototype.hasOwnProperty;
function Bo(e) {
  return e == null;
}
function Xv(e, t) {
  var r = e.__typename, n = e.id, o = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Bo(n) ? Bo(o) ? void 0 : { _id: o } : { id: n }), Bo(n) && !Bo(o) && (n = o), !Bo(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Jv = {
  dataIdFromObject: Xv,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function T1(e) {
  return Ya(Jv, e);
}
function Zv(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Jv.canonizeResults : t;
}
function P1(e, t) {
  return at(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var ep = /^[_a-z][_0-9a-z]*/i;
function ln(e) {
  var t = e.match(ep);
  return t ? t[0] : e;
}
function Ac(e, t, r) {
  return yt(t) ? wt(t) ? t.every(function(n) {
    return Ac(e, n, r);
  }) : e.selections.every(function(n) {
    if (Nn(n) && Ua(n, r)) {
      var o = Pn(n);
      return Lt.call(t, o) && (!n.selectionSet || Ac(n.selectionSet, t[o], r));
    }
    return !0;
  }) : !1;
}
function no(e) {
  return yt(e) && !at(e) && !wt(e);
}
function N1() {
  return new cn();
}
function tp(e, t) {
  var r = Xu(el(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var o = r[n];
      return !o && t && (o = t.lookup(n)), o || null;
    }
  };
}
var ra = /* @__PURE__ */ Object.create(null), Ds = function() {
  return ra;
}, Wf = /* @__PURE__ */ Object.create(null), ai = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return _c(at(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return at(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return uo(o);
      if (at(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = uo(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return z({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), Lt.call(this.data, t)) {
      var n = this.data[t];
      if (n && Lt.call(n, r))
        return n[r];
    }
    if (r === "__typename" && Lt.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof en)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), Lt.call(this.data, t))
      return this.data[t];
    if (this instanceof en)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, o;
    at(t) && (t = t.__ref), at(r) && (r = r.__ref);
    var i = typeof t == "string" ? this.lookup(o = t) : t, a = typeof r == "string" ? this.lookup(o = r) : r;
    if (a) {
      __DEV__ ? ce(typeof o == "string", "store.merge expects a string ID") : ce(typeof o == "string", 1);
      var s = new cn(M1).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var c = /* @__PURE__ */ Object.create(null);
        i || (c.__exists = 1), Object.keys(a).forEach(function(u) {
          if (!i || i[u] !== s[u]) {
            c[u] = 1;
            var l = ln(u);
            l !== u && !n.policies.hasKeyArgs(s.__typename, l) && (c[l] = 1), s[u] === void 0 && !(n instanceof en) && delete s[u];
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
        DELETE: ra,
        INVALIDATE: Wf,
        isReference: at,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(u, l) {
          return n.policies.readField(typeof u == "string" ? {
            fieldName: u,
            from: l || uo(t)
          } : u, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(u) {
        var l = ln(u), f = o[u];
        if (f !== void 0) {
          var d = typeof r == "function" ? r : r[u] || r[l];
          if (d) {
            var h = d === Ds ? ra : d(_c(f), z(z({}, c), { fieldName: l, storeFieldName: u, storage: n.getStorage(t, u) }));
            h === Wf ? n.group.dirty(t, u) : (h === ra && (h = void 0), h !== f && (i[u] = h, a = !0, f = h));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, i), s && (this instanceof en ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var o, i = this.lookup(t);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (o = {}, o[s] = Ds, o) : Ds);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (Lt.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof en && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      Lt.call(t.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(i) {
      t && Lt.call(t, i) || r.delete(i);
    }), t) {
      var n = t.__META, o = Tn(t, ["__META"]);
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
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof en ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      Lt.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof en; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(t) {
    if (!Lt.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        at(i) && (r[i.__ref] = !0), yt(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          yt(s) && o.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), rp = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? Gv() : null, this.keyMaker = new Ro(Dn);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(Fs(t, r));
      var n = ln(r);
      n !== r && this.d(Fs(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(Fs(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Fs(e, t) {
  return t + "#" + e;
}
function Uf(e, t) {
  Xo(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    Ir(n, r);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, c = o.seed, u = r.call(this, i, new rp(s)) || this;
      return u.stump = new I1(u), u.storageTrie = new Ro(Dn), c && u.replace(c), u;
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
var en = function(e) {
  Ir(t, e);
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
    return Lt.call(this.data, r) ? z(z({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(ai), I1 = function(e) {
  Ir(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new rp(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(en);
function M1(e, t, r) {
  var n = e[r], o = t[r];
  return At(n, o) ? n : o;
}
function Xo(e) {
  return !!(e instanceof ai && e.group.caching);
}
function A1(e) {
  return yt(e) ? wt(e) ? e.slice(0) : z({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Dc = function() {
  function e() {
    this.known = new (vb ? WeakSet : Set)(), this.pool = new Ro(Dn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return yt(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (yt(t)) {
      var r = A1(t);
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
}(), On = Object.assign(function(e) {
  if (yt(e)) {
    Fc === void 0 && qf();
    var t = Fc.admit(e), r = $c.get(t);
    return r === void 0 && $c.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: qf
}), Fc, $c;
function qf() {
  Fc = new Dc(), $c = new (Dn ? WeakMap : Map)();
}
function Qf(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var D1 = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (Dn ? WeakMap : Map)(), this.config = Ya(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: Zv(t)
    }), this.canon = t.canon || new Dc(), this.executeSelectionSet = ba(function(n) {
      var o, i = n.context.canonizeResults, a = Qf(n);
      a[3] = !i;
      var s = (o = r.executeSelectionSet).peek.apply(o, a);
      return s ? i ? z(z({}, s), { result: r.canon.admit(s.result) }) : s : (Uf(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Qf,
      makeCacheKey: function(n, o, i, a) {
        if (Xo(i.store))
          return i.store.makeCacheKey(n, at(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = ba(function(n) {
      return Uf(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
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
    this.canon = new Dc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, o = t.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = t.variables, s = t.returnPartialData, c = s === void 0 ? !0 : s, u = t.canonizeResults, l = u === void 0 ? this.config.canonizeResults : u, f = this.config.cache.policies;
    a = z(z({}, tl(xv(n))), a);
    var d = uo(i), h = this.executeSelectionSet({
      selectionSet: Ga(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: z({ store: r, query: n, policies: f, variables: a, varString: On(a), canonizeResults: l }, tp(n, this.config.fragments))
    }), m;
    if (h.missing && (m = [new Yv(F1(h.missing), h.missing, n, a)], !c))
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
    if (at(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, c = a.policies, u = a.store, l = u.getFieldValue(o, "__typename"), f = [], d, h = new cn();
    this.config.addTypename && typeof l == "string" && !c.rootIdsByTypename[l] && f.push({ __typename: l });
    function m(S, w) {
      var E;
      return S.missing && (d = h.merge(d, (E = {}, E[w] = S.missing, E))), S.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(S) {
      var w, E;
      if (Ua(S, s))
        if (Nn(S)) {
          var C = c.readField({
            fieldName: S.name.value,
            field: S,
            variables: a.variables,
            from: o
          }, a), O = Pn(S);
          C === void 0 ? rl.added(S) || (d = h.merge(d, (w = {}, w[O] = "Can't find field '".concat(S.name.value, "' on ").concat(at(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), w))) : wt(C) ? C = m(r.executeSubSelectedArray({
            field: S,
            array: C,
            enclosingRef: i,
            context: a
          }), O) : S.selectionSet ? C != null && (C = m(r.executeSelectionSet({
            selectionSet: S.selectionSet,
            objectOrReference: C,
            enclosingRef: at(C) ? C : i,
            context: a
          }), O)) : a.canonizeResults && (C = r.canon.pass(C)), C !== void 0 && f.push((E = {}, E[O] = C, E));
        } else {
          var T = Ju(S, a.lookupFragment);
          if (!T && S.kind === Vt.FRAGMENT_SPREAD)
            throw __DEV__ ? new Ye("No fragment named ".concat(S.name.value)) : new Ye(5);
          T && c.fragmentMatches(T, l) && T.selectionSet.selections.forEach(p.add, p);
        }
    });
    var g = nl(f), b = { result: g, missing: d }, y = a.canonizeResults ? this.canon.admit(b) : _c(b);
    return y.result && this.knownResults.set(y.result, n), y;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, o = t.array, i = t.enclosingRef, a = t.context, s, c = new cn();
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
        enclosingRef: at(l) ? l : i,
        context: a
      }), f) : (__DEV__ && $1(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function F1(e) {
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
function $1(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(o) {
      yt(o) && (__DEV__ ? ce(!at(o), "Missing selection set for object of type ".concat(P1(e, o), " returned for query field ").concat(t.name.value)) : ce(!at(o), 6), Object.values(o).forEach(n.add, n));
    });
  }
}
var hl = new jv(), Gf = /* @__PURE__ */ new WeakMap();
function Jo(e) {
  var t = Gf.get(e);
  return t || Gf.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Gv()
  }), t;
}
function Kf(e) {
  Jo(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function k1(e) {
  Jo(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function L1(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, t.forEach(function(c) {
          Jo(c).dep.dirty(n), j1(c);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(c) {
          return c(e);
        });
      }
    } else {
      var s = hl.getValue();
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
function j1(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Yf = /* @__PURE__ */ Object.create(null);
function vl(e) {
  var t = JSON.stringify(e);
  return Yf[t] || (Yf[t] = /* @__PURE__ */ Object.create(null));
}
function Xf(e) {
  var t = vl(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = pl(e, function(a) {
      var s = fo(n.storeObject, a, o);
      return s === void 0 && r !== n.storeObject && Lt.call(r, a[0]) && (s = fo(r, a, op)), __DEV__ ? ce(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : ce(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function Jf(e) {
  var t = vl(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = pl(e, function(u) {
      var l = u[0], f = l.charAt(0);
      if (f === "@") {
        if (o && Fr(o.directives)) {
          var d = l.slice(1), h = o.directives.find(function(b) {
            return b.name.value === d;
          }), m = h && qa(h, i);
          return m && fo(m, u.slice(1));
        }
        return;
      }
      if (f === "$") {
        var p = l.slice(1);
        if (i && Lt.call(i, p)) {
          var g = u.slice(0);
          return g[0] = p, fo(i, g);
        }
        return;
      }
      if (r)
        return fo(r, u);
    }), c = JSON.stringify(s);
    return (r || c !== "{}") && (a += ":" + c), a;
  });
}
function pl(e, t) {
  var r = new cn();
  return np(e).reduce(function(n, o) {
    var i, a = t(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function np(e) {
  var t = vl(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(o, i) {
      wt(o) ? (np(o).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(o), wt(e[i + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function op(e, t) {
  return e[t];
}
function fo(e, t, r) {
  return r = r || op, ip(t.reduce(function n(o, i) {
    return wt(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && r(o, i);
  }, e));
}
function ip(e) {
  return yt(e) ? wt(e) ? e.map(ip) : pl(Object.keys(e).sort(), function(t) {
    return fo(e, t);
  }) : e;
}
Zu.setStringify(On);
function kc(e) {
  return e.args !== void 0 ? e.args : e.field ? qa(e.field, e.variables) : null;
}
var V1 = function() {
}, Zf = function(e, t) {
  return t.fieldName;
}, ed = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, td = function(e, t) {
  return t;
}, z1 = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = z({ dataIdFromObject: Xv }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, o = this, i = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = z(z({}, r), { typename: i, storeObject: a, readField: r && r.readField || function() {
      var d = ml(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), c, u = i && this.getTypePolicy(i), l = u && u.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(z(z({}, t), a), s);
      if (wt(f))
        l = Xf(f);
      else {
        c = f;
        break;
      }
    }
    return c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var o = t[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, c = Tn(o, ["queryType", "mutationType", "subscriptionType"]);
      i && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), Lt.call(r.toBeAdded, n) ? r.toBeAdded[n].push(c) : r.toBeAdded[n] = [c];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, o = this.getTypePolicy(t), i = r.keyFields, a = r.fields;
    function s(c, u) {
      c.merge = typeof u == "function" ? u : u === !0 ? ed : u === !1 ? td : c.merge;
    }
    s(o, r.merge), o.keyFn = i === !1 ? V1 : wt(i) ? Xf(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(c) {
      var u = n.getFieldPolicy(t, c, !0), l = a[c];
      if (typeof l == "function")
        u.read = l;
      else {
        var f = l.keyArgs, d = l.read, h = l.merge;
        u.keyFn = f === !1 ? Zf : wt(f) ? Jf(f) : typeof f == "function" ? f : u.keyFn, typeof d == "function" && (u.read = d), s(u, h);
      }
      u.read && u.merge && (u.keyFn = u.keyFn || Zf);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), o = this.rootTypenamesById[n];
    r !== o && (__DEV__ ? ce(!o || o === t, "Cannot change root ".concat(t, " __typename more than once")) : ce(!o || o === t, 3), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(o) {
        r.getSupertypeSet(o, !0).add(n);
        var i = o.match(ep);
        (!i || i[0] !== o) && r.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!Lt.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(t);
      o && o.size && o.forEach(function(a) {
        var s = r.getTypePolicy(a), c = s.fields, u = Tn(s, ["fields"]);
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
          return s.has(a) || (f && __DEV__ && ce.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(u), l && d === c.length - 1 && Ac(t.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(m, p) {
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
      }, c = kc(t); a; ) {
        var u = a(c, s);
        if (wt(u))
          a = Jf(u);
        else {
          i = u || n;
          break;
        }
      }
    return i === void 0 && (i = t.field ? Wy(t.field, t.variables) : Zu(n, kc(t))), i === !1 ? n : n === ln(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var o = t.field || t.fieldName;
      if (o) {
        if (t.typename === void 0) {
          var i = r.store.getFieldValue(n, "__typename");
          i && (t.typename = i);
        }
        var a = this.getStoreFieldName(t), s = ln(a), c = r.store.getFieldValue(n, a), u = this.getFieldPolicy(t.typename, s, !1), l = u && u.read;
        if (l) {
          var f = rd(this, n, t, r, r.store.getStorage(at(n) ? n.__ref : n, a));
          return hl.withValue(this.cache, l, [c, f]);
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
    return c === ed ? ap(o.store)(t, r) : c === td ? r : (o.overwrite && (t = void 0), c(t, r, rd(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: o.variables }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function rd(e, t, r, n, o) {
  var i = e.getStoreFieldName(r), a = ln(i), s = r.variables || n.variables, c = n.store, u = c.toReference, l = c.canRead;
  return {
    args: kc(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: at,
    toReference: u,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(ml(arguments, t, s), n);
    },
    mergeObjects: ap(n.store)
  };
}
function ml(e, t, r) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : t
  } : (a = z({}, n), Lt.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && ce.warn("Undefined 'from' passed to readField with arguments ".concat(yb(Array.from(e)))), a.variables === void 0 && (a.variables = r), a;
}
function ap(e) {
  return function(r, n) {
    if (wt(r) || wt(n))
      throw __DEV__ ? new Ye("Cannot automatically merge arrays") : new Ye(4);
    if (yt(r) && yt(n)) {
      var o = e.getFieldValue(r, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (at(r) && no(n))
        return e.merge(r.__ref, n), r;
      if (no(r) && at(n))
        return e.merge(r, n.__ref), n;
      if (no(r) && no(n))
        return z(z({}, r), n);
    }
    return n;
  };
}
function $s(e, t, r) {
  var n = "".concat(t).concat(r), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === t && e.deferred === r ? e : z(z({}, e), { clientOnly: t, deferred: r })), o;
}
var H1 = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, o = r.query, i = r.result, a = r.dataId, s = r.variables, c = r.overwrite, u = yi(o), l = N1();
    s = z(z({}, tl(u)), s);
    var f = z(z({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, m) {
      return l.merge(h, m);
    }, variables: s, varString: On(s) }, tp(o, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: u.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!at(d))
      throw __DEV__ ? new Ye("Could not identify object ".concat(JSON.stringify(i))) : new Ye(7);
    return f.incomingById.forEach(function(h, m) {
      var p = h.storeObject, g = h.mergeTree, b = h.fieldNodeSet, y = uo(m);
      if (g && g.map.size) {
        var S = n.applyMerges(g, y, p, f);
        if (at(S))
          return;
        p = S;
      }
      if (__DEV__ && !f.overwrite) {
        var w = /* @__PURE__ */ Object.create(null);
        b.forEach(function(O) {
          O.selectionSet && (w[O.name.value] = !0);
        });
        var E = function(O) {
          return w[ln(O)] === !0;
        }, C = function(O) {
          var T = g && g.map.get(O);
          return !!(T && T.info && T.info.merge);
        };
        Object.keys(p).forEach(function(O) {
          E(O) && !C(O) && B1(y, p, O, f.store);
        });
      }
      t.merge(m, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, o = t.result, i = t.selectionSet, a = t.context, s = t.mergeTree, c = this.cache.policies, u = /* @__PURE__ */ Object.create(null), l = n && c.rootTypenamesById[n] || Ec(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (u.__typename = l);
    var f = function() {
      var S = ml(arguments, u, a.variables);
      if (at(S.from)) {
        var w = a.incomingById.get(S.from.__ref);
        if (w) {
          var E = c.readField(z(z({}, S), { from: w.storeObject }), a);
          if (E !== void 0)
            return E;
        }
      }
      return c.readField(S, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(S, w) {
      var E, C = Pn(w), O = o[C];
      if (d.add(w), O !== void 0) {
        var T = c.getStoreFieldName({
          typename: l,
          fieldName: w.name.value,
          field: w,
          variables: S.variables
        }), P = nd(s, T), x = r.processFieldValue(O, w, w.selectionSet ? $s(S, !1, !1) : S, P), L = void 0;
        w.selectionSet && (at(x) || no(x)) && (L = f("__typename", x));
        var R = c.getMergeFunction(l, w.name.value, L);
        R ? P.info = {
          field: w,
          typename: l,
          merge: R
        } : od(s, T), u = S.merge(u, (E = {}, E[T] = x, E));
      } else
        __DEV__ && !S.clientOnly && !S.deferred && !rl.added(w) && !c.getReadFunction(l, w.name.value) && __DEV__ && ce.error("Missing field '".concat(Pn(w), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3));
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
      var g = uo(n), b = a.written[n] || (a.written[n] = []);
      if (b.indexOf(i) >= 0 || (b.push(i), this.reader && this.reader.isFresh(o, g, i, a)))
        return g;
      var y = a.incomingById.get(n);
      return y ? (y.storeObject = a.merge(y.storeObject, u), y.mergeTree = Lc(y.mergeTree, s), d.forEach(function(S) {
        return y.fieldNodeSet.add(S);
      })) : a.incomingById.set(n, {
        storeObject: u,
        mergeTree: Ea(s) ? void 0 : s,
        fieldNodeSet: d
      }), g;
    }
    return u;
  }, e.prototype.processFieldValue = function(t, r, n, o) {
    var i = this;
    return !r.selectionSet || t === null ? __DEV__ ? Mv(t) : t : wt(t) ? t.map(function(a, s) {
      var c = i.processFieldValue(a, r, n, nd(o, s));
      return od(o, s), c;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(t, r, n, o) {
    o === void 0 && (o = Ec(r, t, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Ro(!1);
    return function c(u, l) {
      var f = s.lookup(u, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, u.selections.forEach(function(d) {
        if (Ua(d, n.variables)) {
          var h = l.clientOnly, m = l.deferred;
          if (!(h && m) && Fr(d.directives) && d.directives.forEach(function(b) {
            var y = b.name.value;
            if (y === "client" && (h = !0), y === "defer") {
              var S = qa(b, n.variables);
              (!S || S.if !== !1) && (m = !0);
            }
          }), Nn(d)) {
            var p = i.get(d);
            p && (h = h && p.clientOnly, m = m && p.deferred), i.set(d, $s(n, h, m));
          } else {
            var g = Ju(d, n.lookupFragment);
            if (!g && d.kind === Vt.FRAGMENT_SPREAD)
              throw __DEV__ ? new Ye("No fragment named ".concat(d.name.value)) : new Ye(8);
            g && a.fragmentMatches(g, o, r, n.variables) && c(g.selectionSet, $s(n, h, m));
          }
        }
      }));
    }(t, n), i;
  }, e.prototype.applyMerges = function(t, r, n, o, i) {
    var a, s = this;
    if (t.map.size && !at(n)) {
      var c = !wt(n) && (at(r) || no(r)) ? r : void 0, u = n;
      c && !i && (i = [at(c) ? c.__ref : c]);
      var l, f = function(d, h) {
        return wt(d) ? typeof h == "number" ? d[h] : void 0 : o.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var m = f(c, h), p = f(u, h);
        if (p !== void 0) {
          i && i.push(h);
          var g = s.applyMerges(d, m, p, o, i);
          g !== p && (l = l || /* @__PURE__ */ new Map(), l.set(h, g)), i && ce(i.pop() === h);
        }
      }), l && (n = wt(u) ? u.slice(0) : z({}, u), l.forEach(function(d, h) {
        n[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), sp = [];
function nd(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, sp.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Lc(e, t) {
  if (e === t || !t || Ea(t))
    return e;
  if (!e || Ea(e))
    return t;
  var r = e.info && t.info ? z(z({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, i = { info: r, map: o };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, c) {
      i.map.set(c, Lc(s, t.map.get(c))), a.delete(c);
    }), a.forEach(function(s) {
      i.map.set(s, Lc(t.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function Ea(e) {
  return !e || !(e.info || e.map.size);
}
function od(e, t) {
  var r = e.map, n = r.get(t);
  n && Ea(n) && (sp.push(n), r.delete(t));
}
var id = /* @__PURE__ */ new Set();
function B1(e, t, r, n) {
  var o = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(t);
    if (a && !at(i) && !At(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), c = ln(r), u = "".concat(s, ".").concat(c);
      if (!id.has(u)) {
        id.add(u);
        var l = [];
        !wt(i) && !wt(a) && [i, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), __DEV__ && ce.warn("Cache data may be lost when replacing the ".concat(c, " field of a ").concat(s, ` object.

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
var W1 = function(e) {
  Ir(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = L1, n.txCount = 0, n.config = T1(r), n.addTypename = !!n.config.addTypename, n.policies = new z1({
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
    this.storeWriter = new H1(this, this.storeReader = new D1({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: Zv(this.config),
      canon: r ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = ba(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Xo(s)) {
          var c = a.optimistic, u = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, On({ optimistic: c, id: u, variables: l }));
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
      if (i instanceof Yv)
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
    if (Lt.call(r, "id") && !r.id)
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
    return this.watches.size || k1(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && Kf(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    On.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (at(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      __DEV__ && ce.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (Lt.call(r, "id"))
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
    return this.init(), On.reset(), r && r.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), Kf(this)) : this.broadcastWatches(), Promise.resolve();
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
      return n || (n = rl(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
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
}(C1), ut;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(ut || (ut = {}));
function si(e) {
  return e ? e < 7 : !1;
}
var U1 = Object.assign, q1 = Object.hasOwnProperty, jc = function(e) {
  Ir(t, e);
  function t(r) {
    var n = r.queryManager, o = r.queryInfo, i = r.options, a = e.call(this, function(g) {
      try {
        var b = g._subscription._observer;
        b && !b.error && (b.error = Q1);
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
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = ks(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, c = s === void 0 ? {} : s, u = c.fetchPolicy, l = u === void 0 ? "cache-first" : u, f = i.fetchPolicy, d = f === void 0 ? l : f, h = i.initialFetchPolicy, m = h === void 0 ? d === "standby" ? l : d : h;
    a.options = z(z({}, i), { initialFetchPolicy: m, fetchPolicy: d }), a.queryId = o.queryId || n.generateQueryId();
    var p = yi(a.query);
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
    if (!(ks(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (i.data = c.result), At(i.data, {}) && (i.data = void 0), c.complete ? (delete i.partial, c.complete && i.networkStatus === ut.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = ut.ready, i.loading = !1)) : i.partial = !0, __DEV__ && !c.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && up(c.missing);
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
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", __DEV__ && r && q1.call(r, "variables")) {
      var a = xv(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(c) {
        return c.variable.name.value === "variables";
      })) && __DEV__ && ce.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
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
      c.has(n.query) || cp(n);
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
        __DEV__ && ce.error("Unhandled GraphQL subscription error", i);
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
        __DEV__ ? ce(i, "Attempted to start a polling query without a polling interval.") : ce(i, 13);
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
    return n === void 0 && (n = this.variables), this.last = z(z({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : Mv(r), variables: n }), Fr(r.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === ut.refetch || n === ut.fetchMore || n === ut.poll, a = this.options.variables, s = this.options.fetchPolicy, c = Ya(this.options, r || {}), u = i ? c : U1(this.options, c);
    i || (this.updatePolling(), r && r.variables && !At(r.variables, a) && u.fetchPolicy !== "standby" && u.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", u), n === void 0 && (n = ut.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = ks(u.fetchPolicy));
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
Dv(jc);
function cp(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function Q1(e) {
  __DEV__ && ce.error("Unhandled error", e.message, e.stack);
}
function up(e) {
  __DEV__ && e && __DEV__ && ce.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function ks(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var lp = function() {
  function e(t) {
    var r = t.cache, n = t.client, o = t.resolvers, i = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = Cf(r.resolvers, n);
    }) : this.resolvers = Cf(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, o = t.context, i = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return tn(this, void 0, void 0, function() {
      return rn(this, function(c) {
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
    return Yu(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return eb(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return z(z({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), tn(this, void 0, void 0, function() {
      return rn(this, function(o) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(i) {
          return z(z({}, r), i.exportedVariables);
        })] : [2, z({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return Gr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), r))
            return Ku;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: Zy(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), tn(this, void 0, void 0, function() {
      var s, c, u, l, f, d, h, m, p, g, b;
      return rn(this, function(y) {
        return s = Ga(t), c = el(t), u = Xu(c), l = this.collectSelectionsToResolve(s, u), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = this, m = h.cache, p = h.client, g = {
          fragmentMap: u,
          context: z(z({}, n), { cache: m, client: p }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, b = !1, [2, this.resolveSelectionSet(s.selectionSet, b, r, g).then(function(S) {
          return {
            result: S,
            exportedVariables: g.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, o) {
    return tn(this, void 0, void 0, function() {
      var i, a, s, c, u, l = this;
      return rn(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, c = [n], u = function(d) {
          return tn(l, void 0, void 0, function() {
            var h, m;
            return rn(this, function(p) {
              return !r && !o.selectionsToResolve.has(d) ? [2] : Ua(d, s) ? Nn(d) ? [2, this.resolveField(d, r, n, o).then(function(g) {
                var b;
                typeof g < "u" && c.push((b = {}, b[Pn(d)] = g, b));
              })] : (Qy(d) ? h = d : (h = i[d.name.value], __DEV__ ? ce(h, "No fragment named ".concat(d.name.value)) : ce(h, 11)), h && h.typeCondition && (m = h.typeCondition.name.value, o.fragmentMatcher(n, m, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, o).then(function(g) {
                c.push(g);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(u)).then(function() {
          return nl(c);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, o) {
    return tn(this, void 0, void 0, function() {
      var i, a, s, c, u, l, f, d, h, m = this;
      return rn(this, function(p) {
        return n ? (i = o.variables, a = t.name.value, s = Pn(t), c = a !== s, u = n[s] || n[a], l = Promise.resolve(u), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[c ? a : s], h && (l = Promise.resolve(hl.withValue(this.cache, h, [
          n,
          qa(t, i),
          o.context,
          { field: t, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(g) {
          var b, y;
          if (g === void 0 && (g = u), t.directives && t.directives.forEach(function(w) {
            w.name.value === "export" && w.arguments && w.arguments.forEach(function(E) {
              E.name.value === "as" && E.value.kind === "StringValue" && (o.exportedVariables[E.value.value] = g);
            });
          }), !t.selectionSet || g == null)
            return g;
          var S = (y = (b = t.directives) === null || b === void 0 ? void 0 : b.some(function(w) {
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
        o.set(a, s), Gr(a, {
          Directive: function(c, u, l, f, d) {
            c.name.value === "client" && d.forEach(function(h) {
              n(h) && Ef(h) && s.add(h);
            });
          },
          FragmentSpread: function(c, u, l, f, d) {
            var h = r[c.name.value];
            __DEV__ ? ce(h, "No fragment named ".concat(c.name.value)) : ce(h, 12);
            var m = i(h);
            m.size > 0 && (d.forEach(function(p) {
              n(p) && Ef(p) && s.add(p);
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
}(), oo = new (Dn ? WeakMap : Map)();
function Ls(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return oo.set(e, (oo.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function ad(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var js = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    oo.has(n) || (oo.set(n, 0), Ls(n, "evict"), Ls(n, "modify"), Ls(n, "reset"));
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
    ad(this), this.dirty = !1;
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
      n.fromOptimisticTransaction ? t.observe() : cp(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    ad(this), this.shouldNotify() && this.listeners.forEach(function(r) {
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
    return !(n && n.dmCount === oo.get(this.cache) && At(r, n.variables) && At(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, o) {
    var i = this, a = new cn(), s = Fr(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && Fr(t.incremental)) {
      var c = Fv(this.getDiff().result, t);
      t.data = c;
    } else if ("hasNext" in t && t.hasNext) {
      var u = this.getDiff();
      t.data = a.merge(u.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (Vc(t, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(t, n.variables))
        l.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: oo.get(i.cache)
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
function Vc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !ta(e);
  return !n && r && e.data && (n = !0), n;
}
var G1 = Object.prototype.hasOwnProperty, K1 = function() {
  function e(t) {
    var r = t.cache, n = t.link, o = t.defaultOptions, i = t.queryDeduplication, a = i === void 0 ? !1 : i, s = t.onBroadcast, c = t.ssrMode, u = c === void 0 ? !1 : c, l = t.clientAwareness, f = l === void 0 ? {} : l, d = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Dn ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = o || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = f, this.localState = d || new lp({ cache: r }), this.ssrMode = u, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(__DEV__ ? new Ye("QueryManager stopped while query was in flight") : new Ye(14));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, o = t.mutation, i = t.variables, a = t.optimisticResponse, s = t.updateQueries, c = t.refetchQueries, u = c === void 0 ? [] : c, l = t.awaitRefetchQueries, f = l === void 0 ? !1 : l, d = t.update, h = t.onQueryUpdated, m = t.fetchPolicy, p = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : m, g = t.errorPolicy, b = g === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : g, y = t.keepRootFields, S = t.context;
    return tn(this, void 0, void 0, function() {
      var w, E, C, O, T, P;
      return rn(this, function(x) {
        switch (x.label) {
          case 0:
            return __DEV__ ? ce(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : ce(o, 15), __DEV__ ? ce(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : ce(p === "network-only" || p === "no-cache", 16), w = this.generateMutationId(), E = this.transform(o), C = E.document, O = E.hasClientExports, o = this.cache.transformForLink(C), i = this.getVariables(o, i), O ? [4, this.localState.addExportedVariables(o, i, S)] : [3, 2];
          case 1:
            i = x.sent(), x.label = 2;
          case 2:
            return T = this.mutationStore && (this.mutationStore[w] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: w,
              document: o,
              variables: i,
              fetchPolicy: p,
              errorPolicy: b,
              context: S,
              updateQueries: s,
              update: d,
              keepRootFields: y
            }), this.broadcastQueries(), P = this, [2, new Promise(function(L, R) {
              return Ps(P.getObservableFromLink(o, z(z({}, S), { optimisticResponse: a }), i, !1), function(_) {
                if (ta(_) && b === "none")
                  throw new qn({
                    graphQLErrors: xc(_)
                  });
                T && (T.loading = !1, T.error = null);
                var N = z({}, _);
                return typeof u == "function" && (u = u(N)), b === "ignore" && ta(N) && delete N.errors, P.markMutationResult({
                  mutationId: w,
                  result: N,
                  document: o,
                  variables: i,
                  fetchPolicy: p,
                  errorPolicy: b,
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
                  P.broadcastQueries(), (!("hasNext" in _) || _.hasNext === !1) && L(_);
                },
                error: function(_) {
                  T && (T.loading = !1, T.error = _), a && P.cache.removeOptimistic(w), P.broadcastQueries(), R(_ instanceof qn ? _ : new qn({
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
    if (!a && Vc(o, t.errorPolicy)) {
      if (lo(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), lo(o) && Fr(o.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), c = void 0;
        s.result && (c = Fv(s.result, o)), typeof c < "u" && (o.data = c, i.push({
          result: c,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var u = t.updateQueries;
      u && this.queries.forEach(function(f, d) {
        var h = f.observableQuery, m = h && h.queryName;
        if (!(!m || !G1.call(u, m))) {
          var p = u[m], g = n.queries.get(d), b = g.document, y = g.variables, S = r.diff({
            query: b,
            variables: y,
            returnPartialData: !0,
            optimistic: !1
          }), w = S.result, E = S.complete;
          if (E && w) {
            var C = p(w, {
              mutationResult: o,
              queryName: b && Sc(b) || void 0,
              queryVariables: y
            });
            C && i.push({
              result: C,
              dataId: "ROOT_QUERY",
              query: b,
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
          var d = t.update, h = !mb(o) || lo(o) && !o.hasNext;
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
              var b = g.fieldName, y = g.DELETE;
              return b === "__typename" ? p : y;
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
        __DEV__ && ce.error(a);
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
      var n = this.cache.transformDocument(t), o = Jy(n), i = this.localState.clientQuery(n), a = o && this.localState.serverQuery(o), s = {
        document: n,
        hasClientExports: Ny(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: i,
        serverQuery: a,
        defaultVars: tl(yi(n)),
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
    var r = new js(this), n = new jc({
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
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? ce(t.query, "query option is required. You must specify your GraphQL document in the query option.") : ce(t.query, 17), __DEV__ ? ce(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : ce(t.query.kind === "Document", 18), __DEV__ ? ce(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : ce(!t.returnPartialData, 19), __DEV__ ? ce(!t.pollInterval, "pollInterval option only supported on watchQuery.") : ce(!t.pollInterval, 20), this.fetchQuery(r, t).finally(function() {
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
    }), this.cancelPendingFetches(__DEV__ ? new Ye("Store reset while query was in flight (not completed in link chain)") : new Ye(21)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = ut.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : Dy(a) ? o.set(r.transform(a).document, !1) : yt(a) && a.query && i.add(a);
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
      }), u = new jc({
        queryManager: r,
        queryInfo: c,
        options: z(z({}, a), { fetchPolicy: "network-only" })
      });
      ce(u.queryId === s), c.setObservableQuery(u), n.set(s, u);
    }), __DEV__ && o.size && o.forEach(function(a, s) {
      a || __DEV__ && ce.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
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
        o !== "no-cache" && (Vc(d, i) && r.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var h = ta(d), m = Db(d);
        if (h || m) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), m && (p.protocolErrors = d.extensions[ul]), new qn(p);
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
        operationName: Sc(c) || void 0,
        context: this.prepareContext(z(z({}, r), { forceFetch: !o }))
      };
      if (r = d.context, o) {
        var h = l.get(c) || /* @__PURE__ */ new Map();
        l.set(c, h);
        var m = On(n);
        if (s = h.get(m), !s) {
          var p = new eo([
            Pc(f, d)
          ]);
          h.set(m, s = p), p.beforeNext(function() {
            h.delete(m) && h.size < 1 && l.delete(c);
          });
        }
      } else
        s = new eo([
          Pc(f, d)
        ]);
    } else
      s = new eo([
        vt.of({ data: {} })
      ]), r = this.prepareContext(r);
    var g = this.transform(t).clientQuery;
    return g && (s = Ps(s, function(b) {
      return i.localState.runResolvers({
        document: g,
        remoteResult: b,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var o = t.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(t.document).document);
    return Ps(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = xc(a), c = s.length > 0;
      if (o >= t.lastRequestId) {
        if (c && n.errorPolicy === "none")
          throw t.markError(new qn({
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
      var s = Fb(a) ? a : new qn({ networkError: a });
      throw o >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var o = this;
    n === void 0 && (n = ut.loading);
    var i = this.transform(r.query).document, a = this.getVariables(i, r.variables), s = this.getQuery(t), c = this.defaultOptions.watchQuery, u = r.fetchPolicy, l = u === void 0 ? c && c.fetchPolicy || "cache-first" : u, f = r.errorPolicy, d = f === void 0 ? c && c.errorPolicy || "none" : f, h = r.returnPartialData, m = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, g = p === void 0 ? !1 : p, b = r.context, y = b === void 0 ? {} : b, S = Object.assign({}, r, {
      query: i,
      variables: a,
      fetchPolicy: l,
      errorPolicy: d,
      returnPartialData: m,
      notifyOnNetworkStatusChange: g,
      context: y
    }), w = function(P) {
      S.variables = P;
      var x = o.fetchQueryByPolicy(s, S, n);
      return S.fetchPolicy !== "standby" && x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), x;
    }, E = function() {
      return o.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(P) {
      E(), setTimeout(function() {
        return C.cancel(P);
      });
    });
    var C, O;
    if (this.transform(S.query).hasClientExports)
      C = new eo(this.localState.addExportedVariables(S.query, S.variables, S.context).then(w).then(function(P) {
        return P.sources;
      })), O = !0;
    else {
      var T = w(S.variables);
      O = T.fromLink, C = new eo(T.sources);
    }
    return C.promise.then(E, E), {
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
        var p = d.watcher instanceof js && d.watcher.observableQuery;
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
      var m = d.oq, p = d.lastDiff, g = d.diff, b;
      if (u) {
        if (!g) {
          var y = m.queryInfo;
          y.reset(), g = y.getDiff();
        }
        b = u(m, g, p);
      }
      (!u || b === !0) && (b = m.refetch()), b !== !1 && f.set(m, b), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
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
    }, p = function(w, E) {
      E === void 0 && (E = t.networkStatus || ut.loading);
      var C = w.result;
      __DEV__ && !l && !At(C, {}) && up(w.missing);
      var O = function(T) {
        return vt.of(z({ data: T, loading: si(E), networkStatus: E }, w.complete ? null : { partial: !0 }));
      };
      return C && o.transform(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: C },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(T) {
        return O(T.data || void 0);
      }) : u === "none" && E === ut.refetch && Array.isArray(w.missing) ? O(void 0) : O(C);
    }, g = s === "no-cache" ? 0 : n === ut.refetch && c !== "merge" ? 1 : 2, b = function() {
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
        return S.complete ? { fromLink: !1, sources: [p(S, t.markReady())] } : l || y ? { fromLink: !0, sources: [p(S), b()] } : { fromLink: !0, sources: [b()] };
      }
      case "cache-and-network": {
        var S = m();
        return S.complete || l || y ? { fromLink: !0, sources: [p(S), b()] } : { fromLink: !0, sources: [b()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(m(), t.markReady())] };
      case "network-only":
        return y ? { fromLink: !0, sources: [p(m()), b()] } : { fromLink: !0, sources: [b()] };
      case "no-cache":
        return y ? {
          fromLink: !0,
          sources: [
            p(t.getDiff()),
            b()
          ]
        } : { fromLink: !0, sources: [b()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(t) {
    return t && !this.queries.has(t) && this.queries.set(t, new js(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return z(z({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), sd = !1, Y1 = function() {
  function e(t) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = t.uri, o = t.credentials, i = t.headers, a = t.cache, s = t.ssrMode, c = s === void 0 ? !1 : s, u = t.ssrForceFetchDelay, l = u === void 0 ? 0 : u, f = t.connectToDevTools, d = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : f, h = t.queryDeduplication, m = h === void 0 ? !0 : h, p = t.defaultOptions, g = t.assumeImmutableResults, b = g === void 0 ? !1 : g, y = t.resolvers, S = t.typeDefs, w = t.fragmentMatcher, E = t.name, C = t.version, O = t.link;
    if (O || (O = n ? new Jb({ uri: n, credentials: o, headers: i }) : xo.empty()), !a)
      throw __DEV__ ? new Ye(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new Ye(9);
    if (this.link = O, this.cache = a, this.disableNetworkFetches = c || l > 0, this.queryDeduplication = m, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = S, l && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !sd && d && __DEV__ && (sd = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var T = window.navigator, P = T && T.userAgent, x = void 0;
      typeof P == "string" && (P.indexOf("Chrome/") > -1 ? x = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : P.indexOf("Firefox/") > -1 && (x = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), x && __DEV__ && ce.log("Download the Apollo DevTools for a better development experience: " + x);
    }
    this.version = Cb, this.localState = new lp({
      cache: a,
      client: this,
      resolvers: y,
      fragmentMatcher: w
    }), this.queryManager = new K1({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: m,
      ssrMode: c,
      clientAwareness: {
        name: E,
        version: C
      },
      localState: this.localState,
      assumeImmutableResults: b,
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
    return this.defaultOptions.watchQuery && (t = Ns(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = z(z({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Ns(this.defaultOptions.query, t)), __DEV__ ? ce(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : ce(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = z(z({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Ns(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
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
    return Pc(this.link, t);
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
      __DEV__ && ce.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
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
function X1(e) {
  return new xo(function(t, r) {
    var n = Tn(t, []);
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
const J1 = `${Sv}/${oy._GRAPHQL}`, Z1 = new iy(), eE = kv({
  uri: J1
}), tE = X1((e, { headers: t }) => {
  const r = Z1.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), cd = new Y1({
  cache: new W1(),
  link: tE.concat(eE)
});
function fp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rE } = Object.prototype, { getPrototypeOf: gl } = Object, Ja = ((e) => (t) => {
  const r = rE.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), $r = (e) => (e = e.toLowerCase(), (t) => Ja(t) === e), Za = (e) => (t) => typeof t === e, { isArray: To } = Array, ci = Za("undefined");
function nE(e) {
  return e !== null && !ci(e) && e.constructor !== null && !ci(e.constructor) && yr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dp = $r("ArrayBuffer");
function oE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dp(e.buffer), t;
}
const iE = Za("string"), yr = Za("function"), hp = Za("number"), es = (e) => e !== null && typeof e == "object", aE = (e) => e === !0 || e === !1, na = (e) => {
  if (Ja(e) !== "object")
    return !1;
  const t = gl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, sE = $r("Date"), cE = $r("File"), uE = $r("Blob"), lE = $r("FileList"), fE = (e) => es(e) && yr(e.pipe), dE = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || yr(e.append) && ((t = Ja(e)) === "formdata" || // detect form-data instance
  t === "object" && yr(e.toString) && e.toString() === "[object FormData]"));
}, hE = $r("URLSearchParams"), vE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bi(e, t, { allOwnKeys: r = !1 } = {}) {
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
function vp(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const pp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), mp = (e) => !ci(e) && e !== pp;
function zc() {
  const { caseless: e } = mp(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && vp(t, o) || o;
    na(t[i]) && na(n) ? t[i] = zc(t[i], n) : na(n) ? t[i] = zc({}, n) : To(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && bi(arguments[n], r);
  return t;
}
const pE = (e, t, r, { allOwnKeys: n } = {}) => (bi(t, (o, i) => {
  r && yr(o) ? e[i] = fp(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), mE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gE = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, yE = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && gl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, bE = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, EE = (e) => {
  if (!e)
    return null;
  if (To(e))
    return e;
  let t = e.length;
  if (!hp(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, SE = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gl(Uint8Array)), wE = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, CE = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, OE = $r("HTMLFormElement"), _E = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ud = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), xE = $r("RegExp"), gp = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  bi(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, RE = (e) => {
  gp(e, (t, r) => {
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
}, TE = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return To(e) ? n(e) : n(String(e).split(t)), r;
}, PE = () => {
}, NE = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vs = "abcdefghijklmnopqrstuvwxyz", ld = "0123456789", yp = {
  DIGIT: ld,
  ALPHA: Vs,
  ALPHA_DIGIT: Vs + Vs.toUpperCase() + ld
}, IE = (e = 16, t = yp.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ME(e) {
  return !!(e && yr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const AE = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (es(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = To(n) ? [] : {};
        return bi(n, (a, s) => {
          const c = r(a, o + 1);
          !ci(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, DE = $r("AsyncFunction"), FE = (e) => e && (es(e) || yr(e)) && yr(e.then) && yr(e.catch), U = {
  isArray: To,
  isArrayBuffer: dp,
  isBuffer: nE,
  isFormData: dE,
  isArrayBufferView: oE,
  isString: iE,
  isNumber: hp,
  isBoolean: aE,
  isObject: es,
  isPlainObject: na,
  isUndefined: ci,
  isDate: sE,
  isFile: cE,
  isBlob: uE,
  isRegExp: xE,
  isFunction: yr,
  isStream: fE,
  isURLSearchParams: hE,
  isTypedArray: SE,
  isFileList: lE,
  forEach: bi,
  merge: zc,
  extend: pE,
  trim: vE,
  stripBOM: mE,
  inherits: gE,
  toFlatObject: yE,
  kindOf: Ja,
  kindOfTest: $r,
  endsWith: bE,
  toArray: EE,
  forEachEntry: wE,
  matchAll: CE,
  isHTMLForm: OE,
  hasOwnProperty: ud,
  hasOwnProp: ud,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gp,
  freezeMethods: RE,
  toObjectSet: TE,
  toCamelCase: _E,
  noop: PE,
  toFiniteNumber: NE,
  findKey: vp,
  global: pp,
  isContextDefined: mp,
  ALPHABET: yp,
  generateString: IE,
  isSpecCompliantForm: ME,
  toJSONObject: AE,
  isAsyncFn: DE,
  isThenable: FE
};
function Ue(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
U.inherits(Ue, Error, {
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
const bp = Ue.prototype, Ep = {};
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
  Ep[e] = { value: e };
});
Object.defineProperties(Ue, Ep);
Object.defineProperty(bp, "isAxiosError", { value: !0 });
Ue.from = (e, t, r, n, o, i) => {
  const a = Object.create(bp);
  return U.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Ue.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const $E = null;
function Hc(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function Sp(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fd(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Sp(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function kE(e) {
  return U.isArray(e) && !e.some(Hc);
}
const LE = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ts(e, t, r) {
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
      throw new Ue("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(m) || U.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, p, g) {
    let b = m;
    if (m && !g && typeof m == "object") {
      if (U.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (U.isArray(m) && kE(m) || (U.isFileList(m) || U.endsWith(p, "[]")) && (b = U.toArray(m)))
        return p = Sp(p), b.forEach(function(S, w) {
          !(U.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? fd([p], w, i) : a === null ? p : p + "[]",
            u(S)
          );
        }), !1;
    }
    return Hc(m) ? !0 : (t.append(fd(g, p, i), u(m)), !1);
  }
  const f = [], d = Object.assign(LE, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Hc
  });
  function h(m, p) {
    if (!U.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), U.forEach(m, function(b, y) {
        (!(U.isUndefined(b) || b === null) && o.call(
          t,
          b,
          U.isString(y) ? y.trim() : y,
          p,
          d
        )) === !0 && h(b, p ? p.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function dd(e) {
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
function yl(e, t) {
  this._pairs = [], e && ts(e, this, t);
}
const wp = yl.prototype;
wp.append = function(t, r) {
  this._pairs.push([t, r]);
};
wp.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, dd);
  } : dd;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function jE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cp(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || jE, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = U.isURLSearchParams(t) ? t.toString() : new yl(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class VE {
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
const hd = VE, Op = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zE = typeof URLSearchParams < "u" ? URLSearchParams : yl, HE = typeof FormData < "u" ? FormData : null, BE = typeof Blob < "u" ? Blob : null, WE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), UE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Dr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zE,
    FormData: HE,
    Blob: BE
  },
  isStandardBrowserEnv: WE,
  isStandardBrowserWebWorkerEnv: UE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function qE(e, t) {
  return ts(e, new Dr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return Dr.isNode && U.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function QE(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function GE(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function _p(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), c = i >= r.length;
    return a = !a && U.isArray(o) ? o.length : a, c ? (U.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !U.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && U.isArray(o[a]) && (o[a] = GE(o[a])), !s);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const r = {};
    return U.forEachEntry(e, (n, o) => {
      t(QE(n), o, r, 0);
    }), r;
  }
  return null;
}
const KE = {
  "Content-Type": void 0
};
function YE(e, t, r) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const rs = {
  transitional: Op,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = U.isObject(t);
    if (i && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return o && o ? JSON.stringify(_p(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return qE(t, this.formSerializer).toString();
      if ((s = U.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ts(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), YE(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || rs.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && U.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? Ue.from(s, Ue.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
  rs.headers[t] = {};
});
U.forEach(["post", "put", "patch"], function(t) {
  rs.headers[t] = U.merge(KE);
});
const bl = rs, XE = U.toObjectSet([
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
]), JE = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && XE[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, vd = Symbol("internals");
function Wo(e) {
  return e && String(e).trim().toLowerCase();
}
function oa(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(oa) : String(e);
}
function ZE(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const eS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zs(e, t, r, n, o) {
  if (U.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!U.isString(t)) {
    if (U.isString(n))
      return t.indexOf(n) !== -1;
    if (U.isRegExp(n))
      return n.test(t);
  }
}
function tS(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function rS(e, t) {
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
class ns {
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
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = oa(s));
    }
    const a = (s, c) => U.forEach(s, (u, l) => i(u, l, c));
    return U.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : U.isString(t) && (t = t.trim()) && !eS(t) ? a(JE(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Wo(t), t) {
      const n = U.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ZE(o);
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
      return !!(n && this[n] !== void 0 && (!r || zs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Wo(a), a) {
        const s = U.findKey(n, a);
        s && (!r || zs(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return U.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || zs(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return U.forEach(this, (o, i) => {
      const a = U.findKey(n, i);
      if (a) {
        r[a] = oa(o), delete r[i];
        return;
      }
      const s = t ? tS(i) : String(i).trim();
      s !== i && delete r[i], r[s] = oa(o), n[s] = !0;
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
    const n = (this[vd] = this[vd] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Wo(a);
      n[s] || (rS(o, a), n[s] = !0);
    }
    return U.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ns.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(ns.prototype);
U.freezeMethods(ns);
const Qr = ns;
function Hs(e, t) {
  const r = this || bl, n = t || r, o = Qr.from(n.headers);
  let i = n.data;
  return U.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function xp(e) {
  return !!(e && e.__CANCEL__);
}
function Ei(e, t, r) {
  Ue.call(this, e ?? "canceled", Ue.ERR_CANCELED, t, r), this.name = "CanceledError";
}
U.inherits(Ei, Ue, {
  __CANCEL__: !0
});
function nS(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Ue(
    "Request failed with status code " + r.status,
    [Ue.ERR_BAD_REQUEST, Ue.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const oS = Dr.isStandardBrowserEnv ? (
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
function iS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function aS(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Rp(e, t) {
  return e && !iS(t) ? aS(e, t) : t;
}
const sS = Dr.isStandardBrowserEnv ? (
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
function cS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function uS(e, t) {
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
function pd(e, t) {
  let r = 0;
  const n = uS(50, 250);
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
const lS = typeof XMLHttpRequest < "u", fS = lS && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = Qr.from(e.headers).normalize(), a = e.responseType;
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
    const l = Rp(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Cp(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const h = Qr.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      nS(function(b) {
        r(b), c();
      }, function(b) {
        n(b), c();
      }, p), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (n(new Ue("Request aborted", Ue.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new Ue("Network Error", Ue.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || Op;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new Ue(
        m,
        p.clarifyTimeoutError ? Ue.ETIMEDOUT : Ue.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Dr.isStandardBrowserEnv) {
      const h = (e.withCredentials || sS(l)) && e.xsrfCookieName && oS.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && U.forEach(i.toJSON(), function(m, p) {
      u.setRequestHeader(p, m);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", pd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", pd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      u && (n(!h || h.type ? new Ei(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = cS(l);
    if (d && Dr.protocols.indexOf(d) === -1) {
      n(new Ue("Unsupported protocol " + d + ":", Ue.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, ia = {
  http: $E,
  xhr: fS
};
U.forEach(ia, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dS = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = U.isString(r) ? ia[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new Ue(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        U.hasOwnProp(ia, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!U.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: ia
};
function Bs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ei(null, e);
}
function md(e) {
  return Bs(e), e.headers = Qr.from(e.headers), e.data = Hs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), dS.getAdapter(e.adapter || bl.adapter)(e).then(function(n) {
    return Bs(e), n.data = Hs.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Qr.from(n.headers), n;
  }, function(n) {
    return xp(n) || (Bs(e), n && n.response && (n.response.data = Hs.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Qr.from(n.response.headers))), Promise.reject(n);
  });
}
const gd = (e) => e instanceof Qr ? e.toJSON() : e;
function yo(e, t) {
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
    headers: (u, l) => o(gd(u), gd(l), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = c[l] || o, d = f(e[l], t[l], l);
    U.isUndefined(d) && f !== s || (r[l] = d);
  }), r;
}
const Tp = "1.4.0", El = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  El[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const yd = {};
El.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + Tp + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Ue(
        o(a, " has been removed" + (r ? " in " + r : "")),
        Ue.ERR_DEPRECATED
      );
    return r && !yd[a] && (yd[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function hS(e, t, r) {
  if (typeof e != "object")
    throw new Ue("options must be an object", Ue.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new Ue("option " + i + " must be " + c, Ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ue("Unknown option " + i, Ue.ERR_BAD_OPTION);
  }
}
const Bc = {
  assertOptions: hS,
  validators: El
}, Jr = Bc.validators;
class Sa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new hd(),
      response: new hd()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = yo(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Bc.assertOptions(n, {
      silentJSONParsing: Jr.transitional(Jr.boolean),
      forcedJSONParsing: Jr.transitional(Jr.boolean),
      clarifyTimeoutError: Jr.transitional(Jr.boolean)
    }, !1), o != null && (U.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Bc.assertOptions(o, {
      encode: Jr.function,
      serialize: Jr.function
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
    ), r.headers = Qr.concat(a, i);
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
      const m = [md.bind(this), void 0];
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
      l = md.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = u.length; f < d; )
      l = l.then(u[f++], u[f++]);
    return l;
  }
  getUri(t) {
    t = yo(this.defaults, t);
    const r = Rp(t.baseURL, t.url);
    return Cp(r, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Sa.prototype[t] = function(r, n) {
    return this.request(yo(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(yo(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Sa.prototype[t] = r(), Sa.prototype[t + "Form"] = r(!0);
});
const aa = Sa;
class Sl {
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
      n.reason || (n.reason = new Ei(i, a, s), r(n.reason));
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
      token: new Sl(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const vS = Sl;
function pS(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function mS(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const Wc = {
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
Object.entries(Wc).forEach(([e, t]) => {
  Wc[t] = e;
});
const gS = Wc;
function Pp(e) {
  const t = new aa(e), r = fp(aa.prototype.request, t);
  return U.extend(r, aa.prototype, t, { allOwnKeys: !0 }), U.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Pp(yo(e, o));
  }, r;
}
const Ft = Pp(bl);
Ft.Axios = aa;
Ft.CanceledError = Ei;
Ft.CancelToken = vS;
Ft.isCancel = xp;
Ft.VERSION = Tp;
Ft.toFormData = ts;
Ft.AxiosError = Ue;
Ft.Cancel = Ft.CanceledError;
Ft.all = function(t) {
  return Promise.all(t);
};
Ft.spread = pS;
Ft.isAxiosError = mS;
Ft.mergeConfig = yo;
Ft.AxiosHeaders = Qr;
Ft.formToJSON = (e) => _p(U.isHTMLForm(e) ? new FormData(e) : e);
Ft.HttpStatusCode = gS;
Ft.default = Ft;
const yS = Ft, QI = yS.create({
  baseURL: Sv,
  withCredentials: !0
}), bS = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, GI = [bS.PROFILE], KI = () => {
  const [e, t] = dr([]);
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
}, YI = (e, t) => {
  Ut(() => {
    e();
  }, t);
}, ES = (e = !1) => {
  const [t, r] = dr(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, XI = (e, t) => {
  const r = $e();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, JI = (e, t) => {
  Ut(() => {
    for (const r of t)
      if (!r)
        return;
    return e();
  }, t);
}, ZI = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Np = ({ when: e, children: t }) => e ? t : null, Ip = gi({}), SS = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), Mp = ({ children: e }) => {
  const t = $e(), r = $e(), n = ES(), o = async () => {
    const [a, s] = await SS();
    t.current = a, r.current = s, n.on();
  };
  Ut(() => {
    o();
  }, []);
  const i = vo(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ xt(Ip.Provider, { value: i, children: /* @__PURE__ */ xt(Np, { when: n.val, children: e }) });
}, Ap = () => Kt(Ip);
var jt;
jt = { __e: function(e, t, r, n) {
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
var wa, St, Ws, bd, Uc = 0, Dp = [], sa = [], Ed = jt.__b, Sd = jt.__r, wd = jt.diffed, Cd = jt.__c, Od = jt.unmount;
function Fp(e, t) {
  jt.__h && jt.__h(St, e, Uc || t), Uc = 0;
  var r = St.__H || (St.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: sa }), r.__[e];
}
function wS(e) {
  return Uc = 1, CS($p, e);
}
function CS(e, t, r) {
  var n = Fp(wa++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : $p(void 0, t), function(s) {
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
function OS(e) {
  var t = Fp(wa++, 10), r = wS();
  return t.__ = e, St.componentDidCatch || (St.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function _S() {
  for (var e; e = Dp.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ca), e.__H.__h.forEach(qc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], jt.__e(t, e.__v);
      }
}
jt.__b = function(e) {
  St = null, Ed && Ed(e);
}, jt.__r = function(e) {
  Sd && Sd(e), wa = 0;
  var t = (St = e.__c).__H;
  t && (Ws === St ? (t.__h = [], St.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = sa, r.__N = r.i = void 0;
  })) : (t.__h.forEach(ca), t.__h.forEach(qc), t.__h = [], wa = 0)), Ws = St;
}, jt.diffed = function(e) {
  wd && wd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Dp.push(t) !== 1 && bd === jt.requestAnimationFrame || ((bd = jt.requestAnimationFrame) || xS)(_S)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== sa && (r.__ = r.__V), r.i = void 0, r.__V = sa;
  })), Ws = St = null;
}, jt.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(ca), r.__h = r.__h.filter(function(n) {
        return !n.__ || qc(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], jt.__e(n, r.__v);
    }
  }), Cd && Cd(e, t);
}, jt.unmount = function(e) {
  Od && Od(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      ca(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && jt.__e(t, r.__v));
};
var _d = typeof requestAnimationFrame == "function";
function xS(e) {
  var t, r = function() {
    clearTimeout(n), _d && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  _d && (t = requestAnimationFrame(r));
}
function ca(e) {
  var t = St, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), St = t;
}
function qc(e) {
  var t = St;
  e.__c = e.__(), St = t;
}
function $p(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const RS = () => /* @__PURE__ */ Ev("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ xt("br", {})
] }), eM = ({ children: e }) => {
  const [t] = OS();
  return console.error(t), t ? /* @__PURE__ */ xt(RS, { errorInfo: t }) : /* @__PURE__ */ xt(Qu, { children: e });
};
function Er(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function He(e) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, He(e);
}
function TS(e, t) {
  if (He(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (He(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kp(e) {
  var t = TS(e, "string");
  return He(t) === "symbol" ? t : String(t);
}
function xd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kp(n.key), n);
  }
}
function Sr(e, t, r) {
  return t && xd(e.prototype, t), r && xd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Qc(e, t) {
  return Qc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Qc(e, t);
}
function Si(e, t) {
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
  }), t && Qc(e, t);
}
function Ca(e) {
  return Ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ca(e);
}
function PS() {
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
function Oa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NS(e, t) {
  if (t && (He(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oa(e);
}
function wi(e) {
  var t = PS();
  return function() {
    var n = Ca(e), o;
    if (t) {
      var i = Ca(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return NS(this, o);
  };
}
var Lp = { exports: {} };
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
})(Lp);
var IS = Lp.exports;
const Ie = /* @__PURE__ */ cl(IS);
function Ae() {
  return Ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ae.apply(this, arguments);
}
var Gc = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function MS() {
  if (Rd)
    return Xe;
  Rd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var C = E.$$typeof;
      switch (C) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case s:
                case l:
                case m:
                case h:
                case a:
                  return E;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function w(E) {
    return S(E) === u;
  }
  return Xe.AsyncMode = c, Xe.ConcurrentMode = u, Xe.ContextConsumer = s, Xe.ContextProvider = a, Xe.Element = t, Xe.ForwardRef = l, Xe.Fragment = n, Xe.Lazy = m, Xe.Memo = h, Xe.Portal = r, Xe.Profiler = i, Xe.StrictMode = o, Xe.Suspense = f, Xe.isAsyncMode = function(E) {
    return w(E) || S(E) === c;
  }, Xe.isConcurrentMode = w, Xe.isContextConsumer = function(E) {
    return S(E) === s;
  }, Xe.isContextProvider = function(E) {
    return S(E) === a;
  }, Xe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Xe.isForwardRef = function(E) {
    return S(E) === l;
  }, Xe.isFragment = function(E) {
    return S(E) === n;
  }, Xe.isLazy = function(E) {
    return S(E) === m;
  }, Xe.isMemo = function(E) {
    return S(E) === h;
  }, Xe.isPortal = function(E) {
    return S(E) === r;
  }, Xe.isProfiler = function(E) {
    return S(E) === i;
  }, Xe.isStrictMode = function(E) {
    return S(E) === o;
  }, Xe.isSuspense = function(E) {
    return S(E) === f;
  }, Xe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === u || E === i || E === o || E === f || E === d || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === h || E.$$typeof === a || E.$$typeof === s || E.$$typeof === l || E.$$typeof === g || E.$$typeof === b || E.$$typeof === y || E.$$typeof === p);
  }, Xe.typeOf = S, Xe;
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
var Td;
function AS() {
  return Td || (Td = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === u || I === i || I === o || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === m || I.$$typeof === h || I.$$typeof === a || I.$$typeof === s || I.$$typeof === l || I.$$typeof === g || I.$$typeof === b || I.$$typeof === y || I.$$typeof === p);
    }
    function w(I) {
      if (typeof I == "object" && I !== null) {
        var Z = I.$$typeof;
        switch (Z) {
          case t:
            var V = I.type;
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
    var E = c, C = u, O = s, T = a, P = t, x = l, L = n, R = m, _ = h, N = r, D = i, A = o, F = f, B = !1;
    function q(I) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(I) || w(I) === c;
    }
    function ne(I) {
      return w(I) === u;
    }
    function se(I) {
      return w(I) === s;
    }
    function k(I) {
      return w(I) === a;
    }
    function H(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function j(I) {
      return w(I) === l;
    }
    function K(I) {
      return w(I) === n;
    }
    function M(I) {
      return w(I) === m;
    }
    function Q(I) {
      return w(I) === h;
    }
    function $(I) {
      return w(I) === r;
    }
    function X(I) {
      return w(I) === i;
    }
    function re(I) {
      return w(I) === o;
    }
    function J(I) {
      return w(I) === f;
    }
    Je.AsyncMode = E, Je.ConcurrentMode = C, Je.ContextConsumer = O, Je.ContextProvider = T, Je.Element = P, Je.ForwardRef = x, Je.Fragment = L, Je.Lazy = R, Je.Memo = _, Je.Portal = N, Je.Profiler = D, Je.StrictMode = A, Je.Suspense = F, Je.isAsyncMode = q, Je.isConcurrentMode = ne, Je.isContextConsumer = se, Je.isContextProvider = k, Je.isElement = H, Je.isForwardRef = j, Je.isFragment = K, Je.isLazy = M, Je.isMemo = Q, Je.isPortal = $, Je.isProfiler = X, Je.isStrictMode = re, Je.isSuspense = J, Je.isValidElementType = S, Je.typeOf = w;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Gc.exports = MS() : Gc.exports = AS();
var jp = Gc.exports;
function In(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(In(n)) : jp.isFragment(n) && n.props ? r = r.concat(In(n.props.children, t)) : r.push(n));
  }), r;
}
var Kc = {}, wl = [], DS = function(t) {
  wl.push(t);
};
function ui(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = wl.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function FS(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = wl.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Vp() {
  Kc = {};
}
function zp(e, t, r) {
  !t && !Kc[r] && (e(!1, r), Kc[r] = !0);
}
function Fe(e, t) {
  zp(ui, e, t);
}
function Yc(e, t) {
  zp(FS, e, t);
}
Fe.preMessage = DS;
Fe.resetWarned = Vp;
Fe.noteOnce = Yc;
function ye(e, t, r) {
  return t = kp(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Pd(e, t) {
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
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function os(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Cl(e, t) {
  typeof e == "function" ? e(t) : He(e) === "object" && e && "current" in e && (e.current = t);
}
function Po() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(o) {
    return o;
  });
  return n.length <= 1 ? n[0] : function(o) {
    t.forEach(function(i) {
      Cl(i, o);
    });
  };
}
function Ol() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return os(function() {
    return Po.apply(void 0, t);
  }, t, function(n, o) {
    return n.length === o.length && n.every(function(i, a) {
      return i === o[a];
    });
  });
}
function Ci(e) {
  var t, r, n = jp.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function _a(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function xa(e) {
  return _a(e) ? e : e instanceof Pe.Component ? X0.findDOMNode(e) : null;
}
var Hp = function() {
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
}(), Xc = typeof window < "u" && typeof document < "u" && window.document === document, Ra = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), $S = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ra) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), kS = 2;
function LS(e, t) {
  var r = !1, n = !1, o = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    $S(i);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < kS)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    o = c;
  }
  return s;
}
var jS = 20, VS = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], zS = typeof MutationObserver < "u", HS = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = LS(this.refresh.bind(this), jS);
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
      !Xc || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), zS ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Xc || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = VS.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Bp = function(e, t) {
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
}, bo = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ra;
}, Wp = is(0, 0, 0, 0);
function Ta(e) {
  return parseFloat(e) || 0;
}
function Nd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + Ta(i);
  }, 0);
}
function BS(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    r[i] = Ta(a);
  }
  return r;
}
function WS(e) {
  var t = e.getBBox();
  return is(0, 0, t.width, t.height);
}
function US(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Wp;
  var n = bo(e).getComputedStyle(e), o = BS(n), i = o.left + o.right, a = o.top + o.bottom, s = Ta(n.width), c = Ta(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Nd(n, "left", "right") + i), Math.round(c + a) !== r && (c -= Nd(n, "top", "bottom") + a)), !QS(e)) {
    var u = Math.round(s + i) - t, l = Math.round(c + a) - r;
    Math.abs(u) !== 1 && (s -= u), Math.abs(l) !== 1 && (c -= l);
  }
  return is(o.left, o.top, s, c);
}
var qS = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof bo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof bo(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function QS(e) {
  return e === bo(e).document.documentElement;
}
function GS(e) {
  return Xc ? qS(e) ? WS(e) : US(e) : Wp;
}
function KS(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Bp(a, {
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
function is(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var YS = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = is(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = GS(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), XS = (
  /** @class */
  function() {
    function e(t, r) {
      var n = KS(r);
      Bp(this, { target: t, contentRect: n });
    }
    return e;
  }()
), JS = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Hp(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof bo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new YS(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof bo(t).Element))
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
          return new XS(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Up = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Hp(), qp = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = HS.getInstance(), n = new JS(t, r, this);
      Up.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  qp.prototype[e] = function() {
    var t;
    return (t = Up.get(this))[e].apply(t, arguments);
  };
});
var ZS = function() {
  return typeof Ra.ResizeObserver < "u" ? Ra.ResizeObserver : qp;
}(), Ur = /* @__PURE__ */ new Map();
function Qp(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Ur.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var Gp = new ZS(Qp);
process.env.NODE_ENV;
process.env.NODE_ENV;
function ew(e, t) {
  Ur.has(e) || (Ur.set(e, /* @__PURE__ */ new Set()), Gp.observe(e)), Ur.get(e).add(t);
}
function tw(e, t) {
  Ur.has(e) && (Ur.get(e).delete(t), Ur.get(e).size || (Gp.unobserve(e), Ur.delete(e)));
}
var rw = /* @__PURE__ */ function(e) {
  Si(r, e);
  var t = wi(r);
  function r() {
    return Er(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), Jc = /* @__PURE__ */ v.createContext(null);
function nw(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), o = v.useRef([]), i = v.useContext(Jc), a = v.useCallback(function(s, c, u) {
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
  return /* @__PURE__ */ v.createElement(Jc.Provider, {
    value: a
  }, t);
}
function ow(e, t) {
  var r = e.children, n = e.disabled, o = v.useRef(null), i = v.useRef(null), a = v.useContext(Jc), s = typeof r == "function", c = s ? r(o) : r, u = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ v.isValidElement(c) && Ci(c), f = l ? c.ref : null, d = v.useMemo(function() {
    return Po(f, o);
  }, [f, o]), h = function() {
    return xa(o.current) || xa(i.current);
  };
  v.useImperativeHandle(t, function() {
    return h();
  });
  var m = v.useRef(e);
  m.current = e;
  var p = v.useCallback(function(g) {
    var b = m.current, y = b.onResize, S = b.data, w = g.getBoundingClientRect(), E = w.width, C = w.height, O = g.offsetWidth, T = g.offsetHeight, P = Math.floor(E), x = Math.floor(C);
    if (u.current.width !== P || u.current.height !== x || u.current.offsetWidth !== O || u.current.offsetHeight !== T) {
      var L = {
        width: P,
        height: x,
        offsetWidth: O,
        offsetHeight: T
      };
      u.current = L;
      var R = O === Math.round(E) ? E : O, _ = T === Math.round(C) ? C : T, N = W(W({}, L), {}, {
        offsetWidth: R,
        offsetHeight: _
      });
      a?.(N, g, S), y && Promise.resolve().then(function() {
        y(N, g);
      });
    }
  }, []);
  return v.useEffect(function() {
    var g = h();
    return g && !n && ew(g, p), function() {
      return tw(g, p);
    };
  }, [o.current, n]), /* @__PURE__ */ v.createElement(rw, {
    ref: i
  }, l ? /* @__PURE__ */ v.cloneElement(c, {
    ref: d
  }) : c);
}
var Kp = /* @__PURE__ */ v.forwardRef(ow);
process.env.NODE_ENV !== "production" && (Kp.displayName = "SingleObserver");
var iw = "rc-observer-key";
function aw(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : In(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? ui(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && ui(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = o?.key || "".concat(iw, "-").concat(i);
    return /* @__PURE__ */ v.createElement(Kp, Ae({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var Fn = /* @__PURE__ */ v.forwardRef(aw);
process.env.NODE_ENV !== "production" && (Fn.displayName = "ResizeObserver");
Fn.Collection = nw;
function _l(e, t) {
  var r = W({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function sw(e) {
  if (Array.isArray(e))
    return Zc(e);
}
function Yp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function xl(e, t) {
  if (e) {
    if (typeof e == "string")
      return Zc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zc(e, t);
  }
}
function cw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  return sw(e) || Yp(e) || xl(e) || cw();
}
var Xp = function(t) {
  return +setTimeout(t, 16);
}, Jp = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Xp = function(t) {
  return window.requestAnimationFrame(t);
}, Jp = function(t) {
  return window.cancelAnimationFrame(t);
});
var Id = 0, Rl = /* @__PURE__ */ new Map();
function Zp(e) {
  Rl.delete(e);
}
var Dt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Id += 1;
  var n = Id;
  function o(i) {
    if (i === 0)
      Zp(n), t();
    else {
      var a = Xp(function() {
        o(i - 1);
      });
      Rl.set(n, a);
    }
  }
  return o(r), n;
};
Dt.cancel = function(e) {
  var t = Rl.get(e);
  return Zp(t), Jp(t);
};
function Tl(e) {
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
function uw(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ct(e, t) {
  if (e == null)
    return {};
  var r = uw(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function em(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (Fe(!c, "Warning: There may be circular references"), c)
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
    if (i && a && He(i) === "object" && He(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return o(i[d], a[d], u);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Md = "%", lw = /* @__PURE__ */ function() {
  function e(t) {
    Er(this, e), ye(this, "instanceId", void 0), ye(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Sr(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(Md)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(Md), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), eu = "data-token-hash", _n = "data-css-hash", fw = "data-cache-path", io = "__cssinjs_instance__";
function dw() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(_n, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[io] = o[io] || e, o[io] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(_n, "]"))).forEach(function(o) {
      var i = o.getAttribute(_n);
      if (n[i]) {
        if (o[io] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new lw(e);
}
var Pl = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: dw(),
  defaultCache: !0
});
function Yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function hw(e, t) {
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
var Ad = "data-rc-order", Dd = "data-rc-priority", vw = "rc-util-key", tu = /* @__PURE__ */ new Map();
function tm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : vw;
}
function as(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function pw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function rm(e) {
  return Array.from((tu.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function nm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Yt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = pw(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(Ad, a), s && i && c.setAttribute(Dd, "".concat(i)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var u = as(t), l = u.firstChild;
  if (n) {
    if (s) {
      var f = rm(u).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Ad)))
          return !1;
        var h = Number(d.getAttribute(Dd) || 0);
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
function om(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = as(t);
  return rm(r).find(function(n) {
    return n.getAttribute(tm(t)) === e;
  });
}
function Pa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = om(e, t);
  if (r) {
    var n = as(t);
    n.removeChild(r);
  }
}
function mw(e, t) {
  var r = tu.get(e);
  if (!r || !hw(document, r)) {
    var n = nm("", t), o = n.parentNode;
    tu.set(e, o), e.removeChild(n);
  }
}
function Eo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = as(r);
  mw(n, r);
  var o = om(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = nm(e, r);
  return c.setAttribute(tm(r), t), c;
}
function im(e) {
  if (Array.isArray(e))
    return e;
}
function gw(e, t) {
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
function am() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return im(e) || gw(e, t) || xl(e, t) || am();
}
function yw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Nl = /* @__PURE__ */ function() {
  function e() {
    Er(this, e), ye(this, "cache", void 0), ye(this, "keys", void 0), ye(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
          return !yw(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
ye(Nl, "MAX_CACHE_SIZE", 20);
ye(Nl, "MAX_CACHE_OFFSET", 5);
var Fd = 0, sm = /* @__PURE__ */ function() {
  function e(t) {
    Er(this, e), ye(this, "derivatives", void 0), ye(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Fd, t.length === 0 && ui(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Fd += 1;
  }
  return Sr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), Us = new Nl();
function ru(e) {
  var t = Array.isArray(e) ? e : [e];
  return Us.has(t) || Us.set(t, new sm(t)), Us.get(t);
}
function Na(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof sm ? t += n.id : n && He(n) === "object" ? t += Na(n) : t += n;
  }), t;
}
function bw(e, t) {
  return Tl("".concat(t, "_").concat(Na(e)));
}
var Zo = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), cm = "_bAmBoO_";
function Ew(e, t, r) {
  if (Yt()) {
    var n, o;
    Eo(e, Zo);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(cm);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Pa(Zo), a;
  }
  return !1;
}
var qs = void 0;
function Sw() {
  return qs === void 0 && (qs = Ew("@layer ".concat(Zo, " { .").concat(Zo, ' { content: "').concat(cm, '"!important; } }'), function(e) {
    e.className = Zo;
  })), qs;
}
var $d = process.env.NODE_ENV !== "test" && Yt() ? v.useLayoutEffect : v.useEffect, Rt = function(t, r) {
  var n = v.useRef(!0);
  $d(function() {
    return t(n.current);
  }, r), $d(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, kd = function(t, r) {
  Rt(function(n) {
    if (!n)
      return t();
  }, r);
}, ww = W({}, v), Ld = ww.useInsertionEffect, Cw = function(t, r, n) {
  v.useMemo(t, n), Rt(function() {
    return r(!0);
  }, n);
}, Ow = Ld ? function(e, t, r) {
  return Ld(function() {
    return e(), t();
  }, r);
} : Cw;
function _w() {
  return !1;
}
var nu = !1;
function xw() {
  return nu;
}
const Rw = process.env.NODE_ENV === "production" ? _w : xw;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Qs = window;
  if (typeof Qs.webpackHotUpdate == "function") {
    var Tw = Qs.webpackHotUpdate;
    Qs.webpackHotUpdate = function() {
      return nu = !0, setTimeout(function() {
        nu = !1;
      }, 0), Tw.apply(void 0, arguments);
    };
  }
}
function um(e, t, r, n, o) {
  var i = v.useContext(Pl), a = i.cache, s = [e].concat(Ee(t)), c = s.join("_"), u = Rw(), l = function(m) {
    a.update(s, function(p) {
      var g = p || [], b = G(g, 2), y = b[0], S = y === void 0 ? 0 : y, w = b[1], E = w;
      process.env.NODE_ENV !== "production" && w && u && (n?.(E, u), E = null);
      var C = E || r(), O = [S, C];
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
  return Ow(function() {
    o?.(d);
  }, function(h) {
    return l(function(m) {
      var p = G(m, 2), g = p[0], b = p[1];
      return h && g === 0 && o?.(d), [g + 1, b];
    }), function() {
      a.update(s, function(m) {
        var p = m || [], g = G(p, 2), b = g[0], y = b === void 0 ? 0 : b, S = g[1], w = y - 1;
        return w === 0 ? (n?.(S, !1), null) : [y - 1, S];
      });
    };
  }, [c]), d;
}
var Pw = {}, Nw = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", gn = /* @__PURE__ */ new Map();
function Iw(e) {
  gn.set(e, (gn.get(e) || 0) + 1);
}
function Mw(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(eu, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[io] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Aw = 0;
function Dw(e, t) {
  gn.set(e, (gn.get(e) || 0) - 1);
  var r = Array.from(gn.keys()), n = r.filter(function(o) {
    var i = gn.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Aw && n.forEach(function(o) {
    Mw(o, t), gn.delete(o);
  });
}
var Fw = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = W(W({}, i), r);
  return o && (a = o(a)), a;
};
function $w(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Kt(Pl), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, c = s === void 0 ? Pw : s, u = r.formatToken, l = r.getComputedToken, f = v.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Ee(t)));
  }, [t]), d = v.useMemo(function() {
    return Na(f);
  }, [f]), h = v.useMemo(function() {
    return Na(c);
  }, [c]), m = um("token", [a, e.id, d, h], function() {
    var p = l ? l(f, c, e) : Fw(f, c, e, u), g = bw(p, a);
    p._tokenKey = g, Iw(g);
    var b = "".concat(Nw, "-").concat(Tl(g));
    return p._hashId = b, [p, b];
  }, function(p) {
    Dw(p[0]._tokenKey, o);
  });
  return m;
}
var lm = {
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
}, fm = "comm", dm = "rule", hm = "decl", kw = "@import", Lw = "@keyframes", jw = "@layer", Vw = Math.abs, Il = String.fromCharCode;
function vm(e) {
  return e.trim();
}
function ua(e, t, r) {
  return e.replace(t, r);
}
function zw(e, t) {
  return e.indexOf(t);
}
function li(e, t) {
  return e.charCodeAt(t) | 0;
}
function fi(e, t, r) {
  return e.slice(t, r);
}
function Wr(e) {
  return e.length;
}
function Hw(e) {
  return e.length;
}
function ki(e, t) {
  return t.push(e), e;
}
var ss = 1, So = 1, pm = 0, br = 0, Nt = 0, No = "";
function Ml(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: ss, column: So, length: a, return: "", siblings: s };
}
function Bw() {
  return Nt;
}
function Ww() {
  return Nt = br > 0 ? li(No, --br) : 0, So--, Nt === 10 && (So = 1, ss--), Nt;
}
function Nr() {
  return Nt = br < pm ? li(No, br++) : 0, So++, Nt === 10 && (So = 1, ss++), Nt;
}
function xn() {
  return li(No, br);
}
function la() {
  return br;
}
function cs(e, t) {
  return fi(No, e, t);
}
function ou(e) {
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
function Uw(e) {
  return ss = So = 1, pm = Wr(No = e), br = 0, [];
}
function qw(e) {
  return No = "", e;
}
function Gs(e) {
  return vm(cs(br - 1, iu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qw(e) {
  for (; (Nt = xn()) && Nt < 33; )
    Nr();
  return ou(e) > 2 || ou(Nt) > 3 ? "" : " ";
}
function Gw(e, t) {
  for (; --t && Nr() && !(Nt < 48 || Nt > 102 || Nt > 57 && Nt < 65 || Nt > 70 && Nt < 97); )
    ;
  return cs(e, la() + (t < 6 && xn() == 32 && Nr() == 32));
}
function iu(e) {
  for (; Nr(); )
    switch (Nt) {
      case e:
        return br;
      case 34:
      case 39:
        e !== 34 && e !== 39 && iu(Nt);
        break;
      case 40:
        e === 41 && iu(e);
        break;
      case 92:
        Nr();
        break;
    }
  return br;
}
function Kw(e, t) {
  for (; Nr() && e + Nt !== 47 + 10; )
    if (e + Nt === 42 + 42 && xn() === 47)
      break;
  return "/*" + cs(t, br - 1) + "*" + Il(e === 47 ? e : Nr());
}
function Yw(e) {
  for (; !ou(xn()); )
    Nr();
  return cs(e, br);
}
function Xw(e) {
  return qw(fa("", null, null, null, [""], e = Uw(e), 0, [0], e));
}
function fa(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, l = 0, f = a, d = 0, h = 0, m = 0, p = 1, g = 1, b = 1, y = 0, S = "", w = o, E = i, C = n, O = S; g; )
    switch (m = y, y = Nr()) {
      case 40:
        if (m != 108 && li(O, f - 1) == 58) {
          zw(O += ua(Gs(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Gs(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Qw(m);
        break;
      case 92:
        O += Gw(la() - 1, 7);
        continue;
      case 47:
        switch (xn()) {
          case 42:
          case 47:
            ki(Jw(Kw(Nr(), la()), t, r, c), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        s[u++] = Wr(O) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            b == -1 && (O = ua(O, /\f/g, "")), h > 0 && Wr(O) - f && ki(h > 32 ? Vd(O + ";", n, r, f - 1, c) : Vd(ua(O, " ", "") + ";", n, r, f - 2, c), c);
            break;
          case 59:
            O += ";";
          default:
            if (ki(C = jd(O, t, r, u, l, o, s, S, w = [], E = [], f, i), i), y === 123)
              if (l === 0)
                fa(O, t, C, C, w, i, f, s, E);
              else
                switch (d === 99 && li(O, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fa(e, C, C, n && ki(jd(e, C, C, 0, 0, o, s, S, o, w = [], f, E), E), o, E, f, s, n ? w : E);
                    break;
                  default:
                    fa(O, C, C, C, [""], E, 0, s, E);
                }
        }
        u = l = h = 0, p = b = 1, S = O = "", f = a;
        break;
      case 58:
        f = 1 + Wr(O), h = m;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && Ww() == 125)
            continue;
        }
        switch (O += Il(y), y * p) {
          case 38:
            b = l > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[u++] = (Wr(O) - 1) * b, b = 1;
            break;
          case 64:
            xn() === 45 && (O += Gs(Nr())), d = xn(), l = f = Wr(S = O += Yw(la())), y++;
            break;
          case 45:
            m === 45 && Wr(O) == 2 && (p = 0);
        }
    }
  return i;
}
function jd(e, t, r, n, o, i, a, s, c, u, l, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], m = Hw(h), p = 0, g = 0, b = 0; p < n; ++p)
    for (var y = 0, S = fi(e, d + 1, d = Vw(g = a[p])), w = e; y < m; ++y)
      (w = vm(g > 0 ? h[y] + " " + S : ua(S, /&\f/g, h[y]))) && (c[b++] = w);
  return Ml(e, t, r, o === 0 ? dm : s, c, u, l, f);
}
function Jw(e, t, r, n) {
  return Ml(e, t, r, fm, Il(Bw()), fi(e, 2, -2), 0, n);
}
function Vd(e, t, r, n, o) {
  return Ml(e, t, r, hm, fi(e, 0, n), fi(e, n + 1, -1), n, o);
}
function au(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Zw(e, t, r, n) {
  switch (e.type) {
    case jw:
      if (e.children.length)
        break;
    case kw:
    case hm:
      return e.return = e.return || e.value;
    case fm:
      return "";
    case Lw:
      return e.return = e.value + "{" + au(e.children, n) + "}";
    case dm:
      if (!Wr(e.value = e.props.join(",")))
        return "";
  }
  return Wr(r = au(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mm(e, t) {
  var r = t.path, n = t.parentSelectors;
  Fe(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var eC = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && mm("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, tC = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && mm("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, zd = "data-ant-cssinjs-cache-path", gm = "_FILE_STYLE__", Rn, ym = !0;
function rC() {
  if (!Rn && (Rn = {}, Yt())) {
    var e = document.createElement("div");
    e.className = zd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = G(i, 2), s = a[0], c = a[1];
      Rn[s] = c;
    });
    var r = document.querySelector("style[".concat(zd, "]"));
    if (r) {
      var n;
      ym = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function nC(e) {
  return rC(), !!Rn[e];
}
function oC(e) {
  var t = Rn[e], r = null;
  if (t && Yt())
    if (ym)
      r = gm;
    else {
      var n = document.querySelector("style[".concat(_n, '="').concat(Rn[e], '"]'));
      n ? r = n.innerHTML : delete Rn[e];
    }
  return [r, t];
}
var Hd = Yt(), bm = "_skip_check_", Em = "_multi_value_";
function Bd(e) {
  var t = au(Xw(e), Zw);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function iC(e) {
  return He(e) === "object" && e && (bm in e || Em in e);
}
function aC(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), u = c[0] || "", l = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(l).concat(o).concat(u.slice(l.length)), [u].concat(Ee(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var sC = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, c = r.layer, u = r.path, l = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, h = r.linters, m = h === void 0 ? [] : h, p = "", g = {};
  function b(C) {
    var O = C.getName(s);
    if (!g[O]) {
      var T = e(C.style, r, {
        root: !1,
        parentSelectors: a
      }), P = G(T, 1), x = P[0];
      g[O] = "@keyframes ".concat(C.getName(s)).concat(x);
    }
  }
  function y(C) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(T) {
      Array.isArray(T) ? y(T, O) : T && O.push(T);
    }), O;
  }
  var S = y(Array.isArray(t) ? t : [t]);
  if (S.forEach(function(C) {
    var O = typeof C == "string" && !o ? {} : C;
    if (typeof O == "string")
      p += "".concat(O, `
`);
    else if (O._keyframe)
      b(O);
    else {
      var T = d.reduce(function(P, x) {
        var L;
        return (x == null || (L = x.visit) === null || L === void 0 ? void 0 : L.call(x, P)) || P;
      }, O);
      Object.keys(T).forEach(function(P) {
        var x = T[P];
        if (He(x) === "object" && x && (P !== "animationName" || !x._keyframe) && !iC(x)) {
          var L = !1, R = P.trim(), _ = !1;
          (o || i) && s ? R.startsWith("@") ? L = !0 : R = aC(P, s, l) : o && !s && (R === "&" || R === "") && (R = "", _ = !0);
          var N = e(x, r, {
            root: _,
            injectHash: L,
            parentSelectors: [].concat(Ee(a), [R])
          }), D = G(N, 2), A = D[0], F = D[1];
          g = W(W({}, g), F), p += "".concat(R).concat(A);
        } else {
          let ne = function(se, k) {
            process.env.NODE_ENV !== "production" && (He(x) !== "object" || !(x != null && x[bm])) && [eC, tC].concat(Ee(m)).forEach(function(K) {
              return K(se, k, {
                path: u,
                hashId: s,
                parentSelectors: a
              });
            });
            var H = se.replace(/[A-Z]/g, function(K) {
              return "-".concat(K.toLowerCase());
            }), j = k;
            !lm[se] && typeof j == "number" && j !== 0 && (j = "".concat(j, "px")), se === "animationName" && k !== null && k !== void 0 && k._keyframe && (b(k), j = k.getName(s)), p += "".concat(H, ":").concat(j, ";");
          };
          var B, q = (B = x?.value) !== null && B !== void 0 ? B : x;
          He(x) === "object" && x !== null && x !== void 0 && x[Em] && Array.isArray(q) ? q.forEach(function(se) {
            ne(P, se);
          }) : ne(P, q);
        }
      });
    }
  }), !o)
    p = "{".concat(p, "}");
  else if (c && Sw()) {
    var w = c.split(","), E = w[w.length - 1].trim();
    p = "@layer ".concat(E, " {").concat(p, "}"), w.length > 1 && (p = "@layer ".concat(c, "{%%%:%}").concat(p));
  }
  return [p, g];
};
function cC(e, t) {
  return Tl("".concat(e.join("%")).concat(t));
}
function uC() {
  return null;
}
function su(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, l = v.useContext(Pl), f = l.autoClear, d = l.mock, h = l.defaultCache, m = l.hashPriority, p = l.container, g = l.ssrInline, b = l.transformers, y = l.linters, S = l.cache, w = r._tokenKey, E = [w].concat(Ee(n)), C = Hd;
  process.env.NODE_ENV !== "production" && d !== void 0 && (C = d === "client");
  var O = um(
    "style",
    E,
    // Create cache if needed
    function() {
      var R = E.join("|");
      if (nC(R)) {
        var _ = oC(R), N = G(_, 2), D = N[0], A = N[1];
        if (D)
          return [D, w, A, {}, s, u];
      }
      var F = t(), B = sC(F, {
        hashId: o,
        hashPriority: m,
        layer: i,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), q = G(B, 2), ne = q[0], se = q[1], k = Bd(ne), H = cC(E, k);
      return [k, w, H, se, s, u];
    },
    // Remove cache if no need
    function(R, _) {
      var N = G(R, 3), D = N[2];
      (_ || f) && Hd && Pa(D, {
        mark: _n
      });
    },
    // Effect: Inject style here
    function(R) {
      var _ = G(R, 4), N = _[0];
      _[1];
      var D = _[2], A = _[3];
      if (C && N !== gm) {
        var F = {
          mark: _n,
          prepend: "queue",
          attachTo: p,
          priority: u
        }, B = typeof a == "function" ? a() : a;
        B && (F.csp = {
          nonce: B
        });
        var q = Eo(N, D, F);
        q[io] = S.instanceId, q.setAttribute(eu, w), process.env.NODE_ENV !== "production" && q.setAttribute(fw, E.join("|")), Object.keys(A).forEach(function(ne) {
          Eo(Bd(A[ne]), "_effect-".concat(ne), F);
        });
      }
    }
  ), T = G(O, 3), P = T[0], x = T[1], L = T[2];
  return function(R) {
    var _;
    if (!g || C || !h)
      _ = /* @__PURE__ */ v.createElement(uC, null);
    else {
      var N;
      _ = /* @__PURE__ */ v.createElement("style", Ae({}, (N = {}, ye(N, eu, x), ye(N, _n, L), N), {
        dangerouslySetInnerHTML: {
          __html: P
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, _, R);
  };
}
var zt = /* @__PURE__ */ function() {
  function e(t, r) {
    Er(this, e), ye(this, "name", void 0), ye(this, "style", void 0), ye(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Sr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Qn(e) {
  return e.notSplit = !0, e;
}
Qn(["borderTop", "borderBottom"]), Qn(["borderTop"]), Qn(["borderBottom"]), Qn(["borderLeft", "borderRight"]), Qn(["borderLeft"]), Qn(["borderRight"]);
var lC = /* @__PURE__ */ gi({});
const Al = lC;
function Sm(e) {
  return im(e) || Yp(e) || xl(e) || am();
}
function Pr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function wm(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Sm(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Ee(e) : s = W({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = wm(s[i], a, r, n), s;
}
function xr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Pr(e, t.slice(0, -1)) ? e : wm(e, t, r, n);
}
function fC(e) {
  return He(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Wd(e) {
  return Array.isArray(e) ? [] : {};
}
var dC = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ao() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Wd(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), u = Pr(o, a), l = Array.isArray(u);
      if (l || fC(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Pr(n, a);
          l ? n = xr(n, a, []) : (!f || He(f) !== "object") && (n = xr(n, a, Wd(u))), dC(u).forEach(function(d) {
            i([].concat(Ee(a), [d]), c);
          });
        }
      } else
        n = xr(n, a, u);
    }
    i([]);
  }), n;
}
function hC() {
}
let Cm = hC;
process.env.NODE_ENV !== "production" && (Cm = (e, t, r) => {
  Fe(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Vp();
});
const or = Cm, vC = /* @__PURE__ */ gi(void 0), pC = {
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
var mC = {
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
const gC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Om = gC, yC = {
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
  }, mC),
  timePickerLocale: Object.assign({}, Om)
}, Ud = yC, cr = "${label} is not a valid ${type}", bC = {
  locale: "en",
  Pagination: pC,
  DatePicker: Ud,
  TimePicker: Om,
  Calendar: Ud,
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
}, wo = bC;
Object.assign({}, wo.Modal);
let da = [];
const qd = () => da.reduce((e, t) => Object.assign(Object.assign({}, e), t), wo.Modal);
function EC(e) {
  if (e) {
    const t = Object.assign({}, e);
    return da.push(t), qd(), () => {
      da = da.filter((r) => r !== t), qd();
    };
  }
  Object.assign({}, wo.Modal);
}
const SC = /* @__PURE__ */ gi(void 0), Dl = SC, wC = (e, t) => {
  const r = v.useContext(Dl), n = v.useMemo(() => {
    var i;
    const a = t || wo[e], s = (i = r?.[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), o = v.useMemo(() => {
    const i = r?.locale;
    return r?.exist && !i ? wo.locale : i;
  }, [r]);
  return [n, o];
}, CC = wC, _m = "internalMark", xm = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && or(n === _m, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), v.useEffect(() => EC(t && t.Modal), [t]);
  const o = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(Dl.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (xm.displayName = "LocaleProvider");
const OC = xm, _C = "5.8.3";
function qt(e, t) {
  xC(e) && (e = "100%");
  var r = RC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Li(e) {
  return Math.min(1, Math.max(0, e));
}
function xC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function RC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Rm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ji(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function bn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function TC(e, t, r) {
  return {
    r: qt(e, 255) * 255,
    g: qt(t, 255) * 255,
    b: qt(r, 255) * 255
  };
}
function Qd(e, t, r) {
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
function Ks(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function PC(e, t, r) {
  var n, o, i;
  if (e = qt(e, 360), t = qt(t, 100), r = qt(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = Ks(s, a, e + 1 / 3), o = Ks(s, a, e), i = Ks(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function cu(e, t, r) {
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
function NC(e, t, r) {
  e = qt(e, 360) * 6, t = qt(t, 100), r = qt(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), c = n % 6, u = [r, a, i, i, s, r][c], l = [s, r, r, a, i, i][c], f = [i, i, s, r, r, a][c];
  return { r: u * 255, g: l * 255, b: f * 255 };
}
function uu(e, t, r, n) {
  var o = [
    bn(Math.round(e).toString(16)),
    bn(Math.round(t).toString(16)),
    bn(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function IC(e, t, r, n, o) {
  var i = [
    bn(Math.round(e).toString(16)),
    bn(Math.round(t).toString(16)),
    bn(Math.round(r).toString(16)),
    bn(MC(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function MC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Gd(e) {
  return lr(e) / 255;
}
function lr(e) {
  return parseInt(e, 16);
}
function AC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var lu = {
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
function to(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = $C(e)), typeof e == "object" && (Hr(e.r) && Hr(e.g) && Hr(e.b) ? (t = TC(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Hr(e.h) && Hr(e.s) && Hr(e.v) ? (n = ji(e.s), o = ji(e.v), t = NC(e.h, n, o), a = !0, s = "hsv") : Hr(e.h) && Hr(e.s) && Hr(e.l) && (n = ji(e.s), i = ji(e.l), t = PC(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Rm(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var DC = "[-\\+]?\\d+%?", FC = "[-\\+]?\\d*\\.\\d+%?", on = "(?:".concat(FC, ")|(?:").concat(DC, ")"), Ys = "[\\s|\\(]+(".concat(on, ")[,|\\s]+(").concat(on, ")[,|\\s]+(").concat(on, ")\\s*\\)?"), Xs = "[\\s|\\(]+(".concat(on, ")[,|\\s]+(").concat(on, ")[,|\\s]+(").concat(on, ")[,|\\s]+(").concat(on, ")\\s*\\)?"), _r = {
  CSS_UNIT: new RegExp(on),
  rgb: new RegExp("rgb" + Ys),
  rgba: new RegExp("rgba" + Xs),
  hsl: new RegExp("hsl" + Ys),
  hsla: new RegExp("hsla" + Xs),
  hsv: new RegExp("hsv" + Ys),
  hsva: new RegExp("hsva" + Xs),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function $C(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (lu[e])
    e = lu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = _r.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = _r.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = _r.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = _r.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = _r.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = _r.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = _r.hex8.exec(e), r ? {
    r: lr(r[1]),
    g: lr(r[2]),
    b: lr(r[3]),
    a: Gd(r[4]),
    format: t ? "name" : "hex8"
  } : (r = _r.hex6.exec(e), r ? {
    r: lr(r[1]),
    g: lr(r[2]),
    b: lr(r[3]),
    format: t ? "name" : "hex"
  } : (r = _r.hex4.exec(e), r ? {
    r: lr(r[1] + r[1]),
    g: lr(r[2] + r[2]),
    b: lr(r[3] + r[3]),
    a: Gd(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = _r.hex3.exec(e), r ? {
    r: lr(r[1] + r[1]),
    g: lr(r[2] + r[2]),
    b: lr(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Hr(e) {
  return !!_r.CSS_UNIT.exec(String(e));
}
var Wt = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = AC(t)), this.originalInput = t;
      var o = to(t);
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
      return this.a = Rm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = cu(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = cu(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Qd(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Qd(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), uu(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), IC(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + uu(this.r, this.g, this.b, !1), r = 0, n = Object.entries(lu); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Li(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Li(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Li(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Li(r.s), new e(r);
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
), Vi = 2, Kd = 0.16, kC = 0.05, LC = 0.05, jC = 0.15, Tm = 5, Pm = 4, VC = [{
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
function Yd(e) {
  var t = e.r, r = e.g, n = e.b, o = cu(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function zi(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(uu(t, r, n, !1));
}
function zC(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Xd(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Vi * t : Math.round(e.h) + Vi * t : n = r ? Math.round(e.h) + Vi * t : Math.round(e.h) - Vi * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Jd(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Kd * t : t === Pm ? n = e.s + Kd : n = e.s + kC * t, n > 1 && (n = 1), r && t === Tm && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Zd(e, t, r) {
  var n;
  return r ? n = e.v + LC * t : n = e.v - jC * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Mn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = to(e), o = Tm; o > 0; o -= 1) {
    var i = Yd(n), a = zi(to({
      h: Xd(i, o, !0),
      s: Jd(i, o, !0),
      v: Zd(i, o, !0)
    }));
    r.push(a);
  }
  r.push(zi(n));
  for (var s = 1; s <= Pm; s += 1) {
    var c = Yd(n), u = zi(to({
      h: Xd(c, s),
      s: Jd(c, s),
      v: Zd(c, s)
    }));
    r.push(u);
  }
  return t.theme === "dark" ? VC.map(function(l) {
    var f = l.index, d = l.opacity, h = zi(zC(to(t.backgroundColor || "#141414"), to(r[f]), d * 100));
    return h;
  }) : r;
}
var Js = {
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
}, ha = {}, Zs = {};
Object.keys(Js).forEach(function(e) {
  ha[e] = Mn(Js[e]), ha[e].primary = ha[e][5], Zs[e] = Mn(Js[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Zs[e].primary = Zs[e][5];
});
var HC = ha.blue;
const BC = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, WC = BC;
function UC(e) {
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
const Nm = {
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
}, qC = Object.assign(Object.assign({}, Nm), {
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
}), us = qC;
function QC(e, t) {
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
  } = e, f = r(c), d = r(o), h = r(i), m = r(a), p = r(s), g = n(u, l), b = e.colorLink || e.colorInfo, y = r(b);
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
    colorBgMask: new Wt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const GC = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, KC = GC;
function YC(e) {
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
  }, KC(n));
}
const Br = (e, t) => new Wt(e).setAlpha(t).toRgbString(), Uo = (e, t) => new Wt(e).darken(t).toHexString(), XC = (e) => {
  const t = Mn(e);
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
}, JC = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Br(n, 0.88),
    colorTextSecondary: Br(n, 0.65),
    colorTextTertiary: Br(n, 0.45),
    colorTextQuaternary: Br(n, 0.25),
    colorFill: Br(n, 0.15),
    colorFillSecondary: Br(n, 0.06),
    colorFillTertiary: Br(n, 0.04),
    colorFillQuaternary: Br(n, 0.02),
    colorBgLayout: Uo(r, 4),
    colorBgContainer: Uo(r, 0),
    colorBgElevated: Uo(r, 0),
    colorBgSpotlight: Br(n, 0.85),
    colorBorder: Uo(r, 15),
    colorBorderSecondary: Uo(r, 6)
  };
};
function ZC(e) {
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
const e2 = (e) => {
  const t = ZC(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
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
}, t2 = e2;
function r2(e) {
  const t = Object.keys(Nm).map((r) => {
    const n = Mn(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), QC(e, {
    generateColorPalettes: XC,
    generateNeutralColorPalettes: JC
  })), t2(e.fontSize)), UC(e)), WC(e)), YC(e));
}
const Im = ru(r2), Mm = {
  token: us,
  hashed: !0
}, Am = /* @__PURE__ */ Pe.createContext(Mm);
function ec(e) {
  return e >= 0 && e <= 255;
}
function Hi(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Wt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Wt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((r - a * (1 - u)) / u), f = Math.round((n - s * (1 - u)) / u), d = Math.round((o - c * (1 - u)) / u);
    if (ec(l) && ec(f) && ec(d))
      return new Wt({
        r: l,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Wt({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var n2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Dm(e) {
  const {
    override: t
  } = e, r = n2(e, ["override"]), n = Object.assign({}, t);
  Object.keys(us).forEach((d) => {
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
    colorSplit: Hi(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Hi(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Hi(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Hi(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Wt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Wt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Wt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var eh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Fm = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = eh(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = Dm(a), i && Object.entries(i).forEach((s) => {
    let [c, u] = s;
    const {
      theme: l
    } = u, f = eh(u, ["theme"]);
    let d = f;
    l && (d = Fm(Object.assign(Object.assign({}, a), f), {
      override: f
    }, l)), a[c] = d;
  }), a;
};
function $n() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = Pe.useContext(Am), o = `${_C}-${t || ""}`, i = r || Im, [a, s] = $w(i, [us, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    getComputedToken: Fm,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Dm
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
function ho(e) {
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
function tc(e) {
  return e !== void 0;
}
function Ia(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, a = r.postState, s = ho(function() {
    return tc(o) ? o : tc(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = G(s, 2), u = c[0], l = c[1], f = o !== void 0 ? o : u, d = a ? a(f) : f, h = Tr(i), m = ho([f]), p = G(m, 2), g = p[0], b = p[1];
  kd(function() {
    var S = g[0];
    u !== S && h(u, S);
  }, [g]), kd(function() {
    tc(o) || l(o);
  }, [o]);
  var y = Tr(function(S, w) {
    l(S, w), b([f], w);
  });
  return [d, y];
}
const Fl = "anticon", o2 = (e, t) => t || (e ? `ant-${e}` : "ant"), ir = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: o2,
  iconPrefixCls: Fl
}), fu = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, ls = (e) => ({
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
}), $l = () => ({
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
}), i2 = (e) => ({
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
}), a2 = (e, t) => {
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
}, s2 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), c2 = (e) => ({
  "&:focus-visible": Object.assign({}, s2(e))
}), $m = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let du = !0;
function tr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!$m)
    return Object.assign.apply(Object, [{}].concat(t));
  du = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), du = !0, n;
}
function u2() {
}
function l2(e) {
  let t, r = e, n = u2;
  return $m && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return du && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function Oi(e, t, r, n) {
  return (o) => {
    const [i, a, s] = $n(), {
      getPrefixCls: c,
      iconPrefixCls: u,
      csp: l
    } = Kt(ir), f = c(), d = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => l?.nonce,
      clientOnly: n?.clientOnly,
      // antd is always at top of styles
      order: -999
    };
    return su(Object.assign(Object.assign({}, d), {
      clientOnly: !1,
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": i2(a)
    }]), [su(Object.assign(Object.assign({}, d), {
      path: [e, o, u]
    }), () => {
      const {
        token: h,
        flush: m
      } = l2(a), p = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: E
        } = n;
        E.forEach((C) => {
          let [O, T] = C;
          var P;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Fe(!p?.[O], `The token '${String(O)}' of ${e} had deprecated, use '${String(T)}' instead.`), (p?.[O] || p?.[T]) && ((P = p[T]) !== null && P !== void 0 || (p[T] = p?.[O]));
        });
      }
      const g = typeof r == "function" ? r(tr(h, p ?? {})) : r, b = Object.assign(Object.assign({}, g), p), y = `.${o}`, S = tr(h, {
        componentCls: y,
        prefixCls: o,
        iconCls: `.${u}`,
        antCls: `.${f}`
      }, b), w = t(S, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: u,
        overrideComponentToken: p
      });
      return m(e, b), [n?.resetStyle === !1 ? null : a2(a, o), w];
    }), s];
  };
}
const f2 = `-ant-${Date.now()}-${Math.random()}`;
function d2(e, t) {
  const r = {}, n = (a, s) => {
    let c = a.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (a, s) => {
    const c = new Wt(a), u = Mn(c.toRgbString());
    r[`${s}-color`] = n(c), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Wt(t.primaryColor), s = Mn(a.toRgbString());
    s.forEach((u, l) => {
      r[`primary-${l + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(a, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Wt(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function h2(e, t) {
  const r = d2(e, t);
  Yt() ? Eo(r, `${f2}-dynamic-theme`) : process.env.NODE_ENV !== "production" && or(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const hu = /* @__PURE__ */ v.createContext(!1), v2 = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(hu);
  return /* @__PURE__ */ v.createElement(hu.Provider, {
    value: r ?? n
  }, t);
}, kl = hu, vu = /* @__PURE__ */ v.createContext(void 0), p2 = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(vu);
  return /* @__PURE__ */ v.createElement(vu.Provider, {
    value: r || n
  }, t);
}, fs = vu;
function m2() {
  const e = Kt(kl), t = Kt(fs);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function g2(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Mm : t;
  return os(() => {
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
    return !em(a, c, !0);
  }));
}
var y2 = ["children"], km = /* @__PURE__ */ v.createContext({});
function b2(e) {
  var t = e.children, r = Ct(e, y2);
  return /* @__PURE__ */ v.createElement(km.Provider, {
    value: r
  }, t);
}
var E2 = /* @__PURE__ */ function(e) {
  Si(r, e);
  var t = wi(r);
  function r() {
    return Er(this, r), t.apply(this, arguments);
  }
  return Sr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), mn = "none", Bi = "appear", Wi = "enter", Ui = "leave", th = "none", Rr = "prepare", so = "start", co = "active", Ll = "end", Lm = "prepared";
function rh(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function S2(e, t) {
  var r = {
    animationend: rh("Animation", "AnimationEnd"),
    transitionend: rh("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var w2 = S2(Yt(), typeof window < "u" ? window : {}), jm = {};
if (Yt()) {
  var C2 = document.createElement("div");
  jm = C2.style;
}
var qi = {};
function Vm(e) {
  if (qi[e])
    return qi[e];
  var t = w2[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in jm)
        return qi[e] = t[i], qi[e];
    }
  return "";
}
var zm = Vm("animationend"), Hm = Vm("transitionend"), Bm = !!(zm && Hm), nh = zm || "animationend", oh = Hm || "transitionend";
function ih(e, t) {
  if (!e)
    return null;
  if (He(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const O2 = function(e) {
  var t = $e(), r = $e(e);
  r.current = e;
  var n = v.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(oh, n), a.removeEventListener(nh, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener(oh, n), a.addEventListener(nh, n), t.current = a);
  }
  return v.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var Wm = Yt() ? bv : Ut;
const _2 = function() {
  var e = v.useRef(null);
  function t() {
    Dt.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Dt(function() {
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
var x2 = [Rr, so, co, Ll], R2 = [Rr, Lm], Um = !1, T2 = !0;
function qm(e) {
  return e === co || e === Ll;
}
const P2 = function(e, t, r) {
  var n = ho(th), o = G(n, 2), i = o[0], a = o[1], s = _2(), c = G(s, 2), u = c[0], l = c[1];
  function f() {
    a(Rr, !0);
  }
  var d = t ? R2 : x2;
  return Wm(function() {
    if (i !== th && i !== Ll) {
      var h = d.indexOf(i), m = d[h + 1], p = r(i);
      p === Um ? a(m, !0) : m && u(function(g) {
        function b() {
          g.isCanceled() || a(m, !0);
        }
        p === !0 ? b() : Promise.resolve(p).then(b);
      });
    }
  }, [e, i]), v.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, i];
};
function N2(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, u = c === void 0 ? !0 : c, l = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, S = n.onEnterActive, w = n.onLeaveActive, E = n.onAppearEnd, C = n.onEnterEnd, O = n.onLeaveEnd, T = n.onVisibleChanged, P = ho(), x = G(P, 2), L = x[0], R = x[1], _ = ho(mn), N = G(_, 2), D = N[0], A = N[1], F = ho(null), B = G(F, 2), q = B[0], ne = B[1], se = $e(!1), k = $e(null);
  function H() {
    return r();
  }
  var j = $e(!1);
  function K() {
    A(mn, !0), ne(null, !0);
  }
  function M(me) {
    var oe = H();
    if (!(me && !me.deadline && me.target !== oe)) {
      var de = j.current, Ne;
      D === Bi && de ? Ne = E?.(oe, me) : D === Wi && de ? Ne = C?.(oe, me) : D === Ui && de && (Ne = O?.(oe, me)), D !== mn && de && Ne !== !1 && K();
    }
  }
  var Q = O2(M), $ = G(Q, 1), X = $[0], re = function(oe) {
    var de, Ne, Me;
    switch (oe) {
      case Bi:
        return de = {}, ye(de, Rr, d), ye(de, so, p), ye(de, co, y), de;
      case Wi:
        return Ne = {}, ye(Ne, Rr, h), ye(Ne, so, g), ye(Ne, co, S), Ne;
      case Ui:
        return Me = {}, ye(Me, Rr, m), ye(Me, so, b), ye(Me, co, w), Me;
      default:
        return {};
    }
  }, J = v.useMemo(function() {
    return re(D);
  }, [D]), I = P2(D, !e, function(me) {
    if (me === Rr) {
      var oe = J[Rr];
      return oe ? oe(H()) : Um;
    }
    if (ee in J) {
      var de;
      ne(((de = J[ee]) === null || de === void 0 ? void 0 : de.call(J, H(), null)) || null);
    }
    return ee === co && (X(H()), l > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      M({
        deadline: !0
      });
    }, l))), ee === Lm && K(), T2;
  }), Z = G(I, 2), V = Z[0], ee = Z[1], fe = qm(ee);
  j.current = fe, Wm(function() {
    R(t);
    var me = se.current;
    se.current = !0;
    var oe;
    !me && t && s && (oe = Bi), me && t && i && (oe = Wi), (me && !t && u || !me && f && !t && u) && (oe = Ui);
    var de = re(oe);
    oe && (e || de[Rr]) ? (A(oe), V()) : A(mn);
  }, [t]), Ut(function() {
    // Cancel appear
    (D === Bi && !s || // Cancel enter
    D === Wi && !i || // Cancel leave
    D === Ui && !u) && A(mn);
  }, [s, i, u]), Ut(function() {
    return function() {
      se.current = !1, clearTimeout(k.current);
    };
  }, []);
  var ae = v.useRef(!1);
  Ut(function() {
    L && (ae.current = !0), L !== void 0 && D === mn && ((ae.current || L) && T?.(L), ae.current = !0);
  }, [L, D]);
  var ve = q;
  return J[Rr] && ee === so && (ve = W({
    transition: "none"
  }, ve)), [D, ee, ve, L ?? t];
}
function I2(e) {
  var t = e;
  He(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, u = c === void 0 ? !0 : c, l = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, m = o.eventProps, p = v.useContext(km), g = p.motion, b = r(o, g), y = $e(), S = $e();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : xa(S.current);
      } catch {
        return null;
      }
    }
    var E = N2(b, s, w, o), C = G(E, 4), O = C[0], T = C[1], P = C[2], x = C[3], L = v.useRef(x);
    x && (L.current = !0);
    var R = v.useCallback(function(ne) {
      y.current = ne, Cl(i, ne);
    }, [i]), _, N = W(W({}, m), {}, {
      visible: s
    });
    if (!f)
      _ = null;
    else if (O === mn)
      x ? _ = f(W({}, N), R) : !u && L.current && h ? _ = f(W(W({}, N), {}, {
        className: h
      }), R) : l || !u && !h ? _ = f(W(W({}, N), {}, {
        style: {
          display: "none"
        }
      }), R) : _ = null;
    else {
      var D, A;
      T === Rr ? A = "prepare" : qm(T) ? A = "active" : T === so && (A = "start");
      var F = ih(d, "".concat(O, "-").concat(A));
      _ = f(W(W({}, N), {}, {
        className: Ie(ih(d, O), (D = {}, ye(D, F, F && A), ye(D, d, typeof d == "string"), D)),
        style: P
      }), R);
    }
    if (/* @__PURE__ */ v.isValidElement(_) && Ci(_)) {
      var B = _, q = B.ref;
      q || (_ = /* @__PURE__ */ v.cloneElement(_, {
        ref: R
      }));
    }
    return /* @__PURE__ */ v.createElement(E2, {
      ref: S
    }, _);
  });
  return n.displayName = "CSSMotion", n;
}
const _i = I2(Bm);
var pu = "add", mu = "keep", gu = "remove", rc = "removed";
function M2(e) {
  var t;
  return e && He(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, W(W({}, t), {}, {
    key: String(t.key)
  });
}
function yu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(M2);
}
function A2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = yu(e), a = yu(t);
  i.forEach(function(u) {
    for (var l = !1, f = n; f < o; f += 1) {
      var d = a[f];
      if (d.key === u.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(h) {
          return W(W({}, h), {}, {
            status: pu
          });
        })), n = f), r.push(W(W({}, d), {}, {
          status: mu
        })), n += 1, l = !0;
        break;
      }
    }
    l || r.push(W(W({}, u), {}, {
      status: gu
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(u) {
    return W(W({}, u), {}, {
      status: pu
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
      return f !== u || d !== gu;
    }), r.forEach(function(l) {
      l.key === u && (l.status = mu);
    });
  }), r;
}
var D2 = ["component", "children", "onVisibleChanged", "onAllRemoved"], F2 = ["status"], $2 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function k2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _i, r = /* @__PURE__ */ function(n) {
    Si(i, n);
    var o = wi(i);
    function i() {
      var a;
      Er(this, i);
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      return a = o.call.apply(o, [this].concat(c)), ye(Oa(a), "state", {
        keyEntities: []
      }), ye(Oa(a), "removeKey", function(l) {
        var f = a.state.keyEntities, d = f.map(function(h) {
          return h.key !== l ? h : W(W({}, h), {}, {
            status: rc
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(h) {
          var m = h.status;
          return m !== rc;
        }).length;
      }), a;
    }
    return Sr(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, u = this.props, l = u.component, f = u.children, d = u.onVisibleChanged, h = u.onAllRemoved, m = Ct(u, D2), p = l || v.Fragment, g = {};
        return $2.forEach(function(b) {
          g[b] = m[b], delete m[b];
        }), delete m.keys, /* @__PURE__ */ v.createElement(p, m, c.map(function(b) {
          var y = b.status, S = Ct(b, F2), w = y === pu || y === mu;
          return /* @__PURE__ */ v.createElement(t, Ae({}, g, {
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
        var u = s.keys, l = c.keyEntities, f = yu(u), d = A2(l, f);
        return {
          keyEntities: d.filter(function(h) {
            var m = l.find(function(p) {
              var g = p.key;
              return h.key === g;
            });
            return !(m && m.status === rc && h.status === gu);
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
const L2 = k2(Bm);
function j2(e) {
  const {
    children: t
  } = e, [, r] = $n(), {
    motion: n
  } = r, o = v.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ v.createElement(b2, {
    motion: n
  }, t) : t;
}
const V2 = (e, t) => {
  const [r, n] = $n();
  return su({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, $l()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, z2 = V2;
var H2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let bu = !1;
const B2 = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && or(!bu, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), W2 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], U2 = "ant";
let Ma, Qm, Gm;
function va() {
  return Ma || U2;
}
function q2() {
  return Qm || Fl;
}
function Q2(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const G2 = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (Ma = t), r !== void 0 && (Qm = r), n && (Q2(n) ? (process.env.NODE_ENV !== "production" && or(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), h2(va(), n)) : Gm = n);
}, Km = () => ({
  getPrefixCls: (e, t) => t || (e ? `${va()}-${e}` : va()),
  getIconPrefixCls: q2,
  getRootPrefixCls: () => Ma || va(),
  getTheme: () => Gm
}), K2 = (e) => {
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
    iconPrefixCls: b,
    theme: y,
    componentDisabled: S,
    segmented: w,
    statistic: E,
    spin: C,
    calendar: O,
    carousel: T,
    cascader: P,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: N,
    drawer: D,
    skeleton: A,
    steps: F,
    image: B,
    layout: q,
    list: ne,
    mentions: se,
    modal: k,
    progress: H,
    result: j,
    slider: K,
    breadcrumb: M,
    menu: Q,
    pagination: $,
    input: X,
    empty: re,
    badge: J,
    radio: I,
    rate: Z,
    switch: V,
    transfer: ee,
    avatar: fe,
    message: ae,
    tag: ve,
    table: me,
    card: oe,
    tabs: de,
    timeline: Ne,
    timePicker: Me,
    upload: ue,
    notification: ge,
    tree: ze,
    colorPicker: qe,
    datePicker: nt,
    wave: Qe
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && or(d === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Ge = v.useCallback((xe, We) => {
    const {
      prefixCls: ft
    } = e;
    if (We)
      return We;
    const pt = ft || g.getPrefixCls("");
    return xe ? `${pt}-${xe}` : pt;
  }, [g.getPrefixCls, e.prefixCls]), st = b || g.iconPrefixCls || Fl, Xt = st !== g.iconPrefixCls, ot = r || g.csp, he = z2(st, ot), Se = g2(y, g.theme);
  process.env.NODE_ENV !== "production" && (bu = bu || !!Se);
  const Be = {
    csp: ot,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || p,
    direction: u,
    space: l,
    virtual: f,
    popupMatchSelectWidth: h ?? d,
    popupOverflow: m,
    getPrefixCls: Ge,
    iconPrefixCls: st,
    theme: Se,
    segmented: w,
    statistic: E,
    spin: C,
    calendar: O,
    carousel: T,
    cascader: P,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: N,
    drawer: D,
    skeleton: A,
    steps: F,
    image: B,
    input: X,
    layout: q,
    list: ne,
    mentions: se,
    modal: k,
    progress: H,
    result: j,
    slider: K,
    breadcrumb: M,
    menu: Q,
    pagination: $,
    empty: re,
    badge: J,
    radio: I,
    rate: Z,
    switch: V,
    transfer: ee,
    avatar: fe,
    message: ae,
    tag: ve,
    table: me,
    card: oe,
    tabs: de,
    timeline: Ne,
    timePicker: Me,
    upload: ue,
    notification: ge,
    tree: ze,
    colorPicker: qe,
    datePicker: nt,
    wave: Qe
  }, mt = Object.assign({}, g);
  Object.keys(Be).forEach((xe) => {
    Be[xe] !== void 0 && (mt[xe] = Be[xe]);
  }), W2.forEach((xe) => {
    const We = e[xe];
    We && (mt[xe] = We);
  });
  const ke = os(() => mt, mt, (xe, We) => {
    const ft = Object.keys(xe), pt = Object.keys(We);
    return ft.length !== pt.length || ft.some((we) => xe[we] !== We[we]);
  }), Ke = v.useMemo(() => ({
    prefixCls: st,
    csp: ot
  }), [st, ot]);
  let Oe = Xt ? he(t) : t;
  const lt = v.useMemo(() => {
    var xe, We, ft, pt;
    return ao(((xe = wo.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((ft = (We = ke.locale) === null || We === void 0 ? void 0 : We.Form) === null || ft === void 0 ? void 0 : ft.defaultValidateMessages) || {}, ((pt = ke.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, a?.validateMessages || {});
  }, [ke, a?.validateMessages]);
  Object.keys(lt).length > 0 && (Oe = /* @__PURE__ */ v.createElement(vC.Provider, {
    value: lt
  }, t)), s && (Oe = /* @__PURE__ */ v.createElement(OC, {
    locale: s,
    _ANT_MARK__: _m
  }, Oe)), (st || ot) && (Oe = /* @__PURE__ */ v.createElement(Al.Provider, {
    value: Ke
  }, Oe)), c && (Oe = /* @__PURE__ */ v.createElement(p2, {
    size: c
  }, Oe)), Oe = /* @__PURE__ */ v.createElement(j2, null, Oe);
  const Tt = v.useMemo(() => {
    const xe = Se || {}, {
      algorithm: We,
      token: ft,
      components: pt
    } = xe, we = H2(xe, ["algorithm", "token", "components"]), Y = We && (!Array.isArray(We) || We.length > 0) ? ru(We) : Im, ie = {};
    return Object.entries(pt || {}).forEach((le) => {
      let [be, Le] = le;
      const Re = Object.assign({}, Le);
      "algorithm" in Re && (Re.algorithm === !0 ? Re.theme = Y : (Array.isArray(Re.algorithm) || typeof Re.algorithm == "function") && (Re.theme = ru(Re.algorithm)), delete Re.algorithm), ie[be] = Re;
    }), Object.assign(Object.assign({}, we), {
      theme: Y,
      token: Object.assign(Object.assign({}, us), ft),
      components: ie
    });
  }, [Se]);
  return y && (Oe = /* @__PURE__ */ v.createElement(Am.Provider, {
    value: Tt
  }, Oe)), S !== void 0 && (Oe = /* @__PURE__ */ v.createElement(v2, {
    disabled: S
  }, Oe)), /* @__PURE__ */ v.createElement(ir.Provider, {
    value: ke
  }, Oe);
}, kn = (e) => {
  const t = v.useContext(ir), r = v.useContext(Dl);
  return /* @__PURE__ */ v.createElement(K2, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
kn.ConfigContext = ir;
kn.SizeContext = fs;
kn.config = G2;
kn.useConfig = m2;
Object.defineProperty(kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && or(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), fs)
});
process.env.NODE_ENV !== "production" && (kn.displayName = "ConfigProvider");
const jl = kn;
var Y2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const X2 = Y2;
var J2 = 1 / 0, Z2 = "[object Symbol]", eO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, tO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ds = "\\ud800-\\udfff", Ym = "\\u0300-\\u036f\\ufe20-\\ufe23", Xm = "\\u20d0-\\u20f0", Jm = "\\u2700-\\u27bf", Zm = "a-z\\xdf-\\xf6\\xf8-\\xff", rO = "\\xac\\xb1\\xd7\\xf7", nO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", oO = "\\u2000-\\u206f", iO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", eg = "A-Z\\xc0-\\xd6\\xd8-\\xde", tg = "\\ufe0e\\ufe0f", rg = rO + nO + oO + iO, Vl = "['’]", aO = "[" + ds + "]", ah = "[" + rg + "]", Aa = "[" + Ym + Xm + "]", ng = "\\d+", sO = "[" + Jm + "]", og = "[" + Zm + "]", ig = "[^" + ds + rg + ng + Jm + Zm + eg + "]", Eu = "\\ud83c[\\udffb-\\udfff]", cO = "(?:" + Aa + "|" + Eu + ")", ag = "[^" + ds + "]", zl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Hl = "[\\ud800-\\udbff][\\udc00-\\udfff]", ro = "[" + eg + "]", sg = "\\u200d", sh = "(?:" + og + "|" + ig + ")", uO = "(?:" + ro + "|" + ig + ")", ch = "(?:" + Vl + "(?:d|ll|m|re|s|t|ve))?", uh = "(?:" + Vl + "(?:D|LL|M|RE|S|T|VE))?", cg = cO + "?", ug = "[" + tg + "]?", lO = "(?:" + sg + "(?:" + [ag, zl, Hl].join("|") + ")" + ug + cg + ")*", lg = ug + cg + lO, fO = "(?:" + [sO, zl, Hl].join("|") + ")" + lg, dO = "(?:" + [ag + Aa + "?", Aa, zl, Hl, aO].join("|") + ")", hO = RegExp(Vl, "g"), vO = RegExp(Aa, "g"), pO = RegExp(Eu + "(?=" + Eu + ")|" + dO + lg, "g"), mO = RegExp([
  ro + "?" + og + "+" + ch + "(?=" + [ah, ro, "$"].join("|") + ")",
  uO + "+" + uh + "(?=" + [ah, ro + sh, "$"].join("|") + ")",
  ro + "?" + sh + "+" + ch,
  ro + "+" + uh,
  ng,
  fO
].join("|"), "g"), gO = RegExp("[" + sg + ds + Ym + Xm + tg + "]"), yO = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, bO = {
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
}, EO = typeof Fi == "object" && Fi && Fi.Object === Object && Fi, SO = typeof self == "object" && self && self.Object === Object && self, wO = EO || SO || Function("return this")();
function CO(e, t, r, n) {
  var o = -1, i = e ? e.length : 0;
  for (n && i && (r = e[++o]); ++o < i; )
    r = t(r, e[o], o, e);
  return r;
}
function OO(e) {
  return e.split("");
}
function _O(e) {
  return e.match(eO) || [];
}
function xO(e) {
  return function(t) {
    return e?.[t];
  };
}
var RO = xO(bO);
function fg(e) {
  return gO.test(e);
}
function TO(e) {
  return yO.test(e);
}
function PO(e) {
  return fg(e) ? NO(e) : OO(e);
}
function NO(e) {
  return e.match(pO) || [];
}
function IO(e) {
  return e.match(mO) || [];
}
var MO = Object.prototype, AO = MO.toString, lh = wO.Symbol, fh = lh ? lh.prototype : void 0, dh = fh ? fh.toString : void 0;
function DO(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + t];
  return i;
}
function FO(e) {
  if (typeof e == "string")
    return e;
  if (VO(e))
    return dh ? dh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -J2 ? "-0" : t;
}
function $O(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : DO(e, t, r);
}
function kO(e) {
  return function(t) {
    t = hs(t);
    var r = fg(t) ? PO(t) : void 0, n = r ? r[0] : t.charAt(0), o = r ? $O(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
function LO(e) {
  return function(t) {
    return CO(UO(BO(t).replace(hO, "")), e, "");
  };
}
function jO(e) {
  return !!e && typeof e == "object";
}
function VO(e) {
  return typeof e == "symbol" || jO(e) && AO.call(e) == Z2;
}
function hs(e) {
  return e == null ? "" : FO(e);
}
var zO = LO(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? HO(t) : t);
});
function HO(e) {
  return WO(hs(e).toLowerCase());
}
function BO(e) {
  return e = hs(e), e && e.replace(tO, RO).replace(vO, "");
}
var WO = kO("toUpperCase");
function UO(e, t, r) {
  return e = hs(e), t = r ? void 0 : t, t === void 0 ? TO(e) ? IO(e) : _O(e) : e.match(t) || [];
}
var qO = zO;
const QO = /* @__PURE__ */ cl(qO);
function dg(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function GO(e) {
  return dg(e) !== e?.ownerDocument;
}
function Da(e) {
  return GO(e) ? dg(e) : null;
}
function KO(e, t) {
  Fe(e, "[@ant-design/icons] ".concat(t));
}
function hh(e) {
  return He(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (He(e.icon) === "object" || typeof e.icon == "function");
}
function vh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[QO(r)] = n;
    }
    return t;
  }, {});
}
function Su(e, t, r) {
  return r ? /* @__PURE__ */ Pe.createElement(e.tag, W(W({
    key: t
  }, vh(e.attrs)), r), (e.children || []).map(function(n, o) {
    return Su(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Pe.createElement(e.tag, W({
    key: t
  }, vh(e.attrs)), (e.children || []).map(function(n, o) {
    return Su(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function hg(e) {
  return Mn(e)[0];
}
function vg(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var YO = `
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
`, XO = function(t) {
  var r = Kt(Al), n = r.csp, o = r.prefixCls, i = YO;
  o && (i = i.replace(/anticon/g, o)), Ut(function() {
    var a = t.current, s = Da(a);
    Eo(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, JO = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ei = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ZO(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  ei.primaryColor = t, ei.secondaryColor = r || hg(t), ei.calculated = !!r;
}
function e_() {
  return W({}, ei);
}
var vs = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, c = Ct(t, JO), u = v.useRef(), l = ei;
  if (a && (l = {
    primaryColor: a,
    secondaryColor: s || hg(a)
  }), XO(u), KO(hh(r), "icon should be icon definiton, but got ".concat(r)), !hh(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = W(W({}, f), {}, {
    icon: f.icon(l.primaryColor, l.secondaryColor)
  })), Su(f.icon, "svg-".concat(f.name), W(W({
    className: n,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
vs.displayName = "IconReact";
vs.getTwoToneColors = e_;
vs.setTwoToneColors = ZO;
const Bl = vs;
function pg(e) {
  var t = vg(e), r = G(t, 2), n = r[0], o = r[1];
  return Bl.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function t_() {
  var e = Bl.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var r_ = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
pg(HC.primary);
var ps = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n = e.className, o = e.icon, i = e.spin, a = e.rotate, s = e.tabIndex, c = e.onClick, u = e.twoToneColor, l = Ct(e, r_), f = v.useContext(Al), d = f.prefixCls, h = d === void 0 ? "anticon" : d, m = f.rootClassName, p = Ie(m, h, (r = {}, ye(r, "".concat(h, "-").concat(o.name), !!o.name), ye(r, "".concat(h, "-spin"), !!i || o.name === "loading"), r), n), g = s;
  g === void 0 && c && (g = -1);
  var b = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, y = vg(u), S = G(y, 2), w = S[0], E = S[1];
  return /* @__PURE__ */ v.createElement("span", Ae({
    role: "img",
    "aria-label": o.name
  }, l, {
    ref: t,
    tabIndex: g,
    onClick: c,
    className: p
  }), /* @__PURE__ */ v.createElement(Bl, {
    icon: o,
    primaryColor: w,
    secondaryColor: E,
    style: b
  }));
});
ps.displayName = "AntdIcon";
ps.getTwoToneColor = t_;
ps.setTwoToneColor = pg;
const Yr = ps;
var mg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: X2
  }));
};
process.env.NODE_ENV !== "production" && (mg.displayName = "CheckCircleFilled");
const n_ = /* @__PURE__ */ v.forwardRef(mg);
var o_ = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const i_ = o_;
var gg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: i_
  }));
};
process.env.NODE_ENV !== "production" && (gg.displayName = "CloseCircleFilled");
const yg = /* @__PURE__ */ v.forwardRef(gg);
var a_ = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const s_ = a_;
var bg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: s_
  }));
};
process.env.NODE_ENV !== "production" && (bg.displayName = "CloseOutlined");
const Eg = /* @__PURE__ */ v.forwardRef(bg);
var c_ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const u_ = c_;
var Sg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: u_
  }));
};
process.env.NODE_ENV !== "production" && (Sg.displayName = "ExclamationCircleFilled");
const l_ = /* @__PURE__ */ v.forwardRef(Sg);
var f_ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const d_ = f_;
var wg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: d_
  }));
};
process.env.NODE_ENV !== "production" && (wg.displayName = "InfoCircleFilled");
const h_ = /* @__PURE__ */ v.forwardRef(wg);
var v_ = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, p_ = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, m_ = "".concat(v_, " ").concat(p_).split(/[\s\n]+/), g_ = "aria-", y_ = "data-";
function ph(e, t) {
  return e.indexOf(t) === 0;
}
function Fa(e) {
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
    (r.aria && (o === "role" || ph(o, g_)) || // Data
    r.data && ph(o, y_) || // Attr
    r.attr && m_.includes(o)) && (n[o] = e[o]);
  }), n;
}
const {
  isValidElement: Cg
} = v;
function b_(e) {
  return e && Cg(e) && e.type === v.Fragment;
}
function E_(e, t, r) {
  return Cg(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function Og(e, t) {
  return E_(e, e, t);
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
}, _g = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, c = e.content, u = e.closable, l = e.closeIcon, f = l === void 0 ? "x" : l, d = e.props, h = e.onClick, m = e.onNoticeClose, p = e.times, g = v.useState(!1), b = G(g, 2), y = b[0], S = b[1], w = function() {
    m(s);
  }, E = function(T) {
    (T.key === "Enter" || T.code === "Enter" || T.keyCode === te.ENTER) && w();
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
  return /* @__PURE__ */ v.createElement("div", Ae({}, d, {
    ref: t,
    className: Ie(C, o, ye({}, "".concat(C, "-closable"), u)),
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
    onKeyDown: E,
    onClick: function(T) {
      T.preventDefault(), T.stopPropagation(), w();
    }
  }, f));
}), xg = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, c = e.style, u = e.onAllRemoved, l = v.useState([]), f = G(l, 2), d = f[0], h = f[1], m = function(O) {
    var T, P = d.find(function(x) {
      return x.key === O;
    });
    P == null || (T = P.onClose) === null || T === void 0 || T.call(P), h(function(x) {
      return x.filter(function(L) {
        return L.key !== O;
      });
    });
  };
  v.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        h(function(T) {
          var P = Ee(T), x = P.findIndex(function(_) {
            return _.key === O.key;
          }), L = W({}, O);
          if (x >= 0) {
            var R;
            L.times = (((R = T[x]) === null || R === void 0 ? void 0 : R.times) || 0) + 1, P[x] = L;
          } else
            L.times = 0, P.push(L);
          return a > 0 && P.length > a && (P = P.slice(-a)), P;
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
  var p = v.useState({}), g = G(p, 2), b = g[0], y = g[1];
  v.useEffect(function() {
    var C = {};
    d.forEach(function(O) {
      var T = O.placement, P = T === void 0 ? "topRight" : T;
      P && (C[P] = C[P] || [], C[P].push(O));
    }), Object.keys(b).forEach(function(O) {
      C[O] = C[O] || [];
    }), y(C);
  }, [d]);
  var S = function(O) {
    y(function(T) {
      var P = W({}, T), x = P[O] || [];
      return x.length || delete P[O], P;
    });
  }, w = v.useRef(!1);
  if (v.useEffect(function() {
    Object.keys(b).length > 0 ? w.current = !0 : w.current && (u?.(), w.current = !1);
  }, [b]), !o)
    return null;
  var E = Object.keys(b);
  return /* @__PURE__ */ Gu(/* @__PURE__ */ v.createElement(v.Fragment, null, E.map(function(C) {
    var O = b[C], T = O.map(function(x) {
      return {
        config: x,
        key: x.key
      };
    }), P = typeof i == "function" ? i(C) : i;
    return /* @__PURE__ */ v.createElement(L2, Ae({
      key: C,
      className: Ie(n, "".concat(n, "-").concat(C), s?.(C)),
      style: c?.(C),
      keys: T,
      motionAppear: !0
    }, P, {
      onAllRemoved: function() {
        S(C);
      }
    }), function(x, L) {
      var R = x.config, _ = x.className, N = x.style, D = R.key, A = R.times, F = R.className, B = R.style;
      return /* @__PURE__ */ v.createElement(_g, Ae({}, R, {
        ref: L,
        prefixCls: n,
        className: Ie(_, F),
        style: W(W({}, N), B),
        times: A,
        key: D,
        eventKey: D,
        onNoticeClose: m
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (xg.displayName = "Notifications");
var S_ = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], w_ = function() {
  return document.body;
}, mh = 0;
function C_() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function O_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? w_ : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, c = e.onAllRemoved, u = Ct(e, S_), l = v.useState(), f = G(l, 2), d = f[0], h = f[1], m = v.useRef(), p = /* @__PURE__ */ v.createElement(xg, {
    container: d,
    ref: m,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: c
  }), g = v.useState([]), b = G(g, 2), y = b[0], S = b[1], w = v.useMemo(function() {
    return {
      open: function(C) {
        var O = C_(u, C);
        (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(mh), mh += 1), S(function(T) {
          return [].concat(Ee(T), [{
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
    m.current && y.length && (y.forEach(function(E) {
      switch (E.type) {
        case "open":
          m.current.open(E.config);
          break;
        case "close":
          m.current.close(E.key);
          break;
        case "destroy":
          m.current.destroy();
          break;
      }
    }), S(function(E) {
      return E.filter(function(C) {
        return !y.includes(C);
      });
    }));
  }, [y]), [w, p];
}
var __ = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const x_ = __;
var Rg = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: x_
  }));
};
process.env.NODE_ENV !== "production" && (Rg.displayName = "LoadingOutlined");
const Wl = /* @__PURE__ */ v.forwardRef(Rg), R_ = (e) => {
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
    contentBg: b
  } = e, y = `${t}-notice`, S = new zt("MessageMoveIn", {
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
  }), w = new zt("MessageMoveOut", {
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
  }), E = {
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
      background: b,
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
      [t]: Object.assign(Object.assign({}, ls(e)), {
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
        [y]: Object.assign({}, E)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, E), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Tg = Oi("Message", (e) => {
  const t = tr(e, {
    height: 150
  });
  return [R_(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), {
  clientOnly: !0
});
var T_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const P_ = {
  info: /* @__PURE__ */ v.createElement(h_, null),
  success: /* @__PURE__ */ v.createElement(n_, null),
  error: /* @__PURE__ */ v.createElement(yg, null),
  warning: /* @__PURE__ */ v.createElement(l_, null),
  loading: /* @__PURE__ */ v.createElement(Wl, null)
}, Pg = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ v.createElement("div", {
    className: Ie(`${t}-custom-content`, `${t}-${r}`)
  }, n || P_[r], /* @__PURE__ */ v.createElement("span", null, o));
}, N_ = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = T_(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = v.useContext(ir), c = t || s("message"), [, u] = Tg(c);
  return /* @__PURE__ */ v.createElement(_g, Object.assign({}, a, {
    prefixCls: c,
    className: Ie(r, u, `${c}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ v.createElement(Pg, {
      prefixCls: c,
      type: n,
      icon: o
    }, i)
  }));
}, I_ = N_;
function M_(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Ul(e) {
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
var A_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const D_ = 8, F_ = 3, $_ = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = F_,
    rtl: s,
    transitionName: c,
    onAllRemoved: u
  } = e, {
    getPrefixCls: l,
    getPopupContainer: f,
    message: d
  } = v.useContext(ir), h = n || l("message"), [, m] = Tg(h), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? D_
  }), g = () => Ie(m, {
    [`${h}-rtl`]: s
  }), b = () => M_(h, c), y = /* @__PURE__ */ v.createElement("span", {
    className: `${h}-close-x`
  }, /* @__PURE__ */ v.createElement(Eg, {
    className: `${h}-close-icon`
  })), [S, w] = O_({
    prefixCls: h,
    style: p,
    className: g,
    motion: b,
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
let gh = 0;
function Ng(e) {
  const t = v.useRef(null);
  return [v.useMemo(() => {
    const n = (c) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(c);
    }, o = (c) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && or(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
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
        key: b,
        className: y,
        style: S,
        onClose: w
      } = c, E = A_(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let C = b;
      return C == null && (gh += 1, C = `antd-message-${gh}`), Ul((O) => (u(Object.assign(Object.assign({}, E), {
        key: C,
        content: /* @__PURE__ */ v.createElement(Pg, {
          prefixCls: l,
          type: g,
          icon: p
        }, m),
        placement: "top",
        className: Ie(g && `${h}-${g}`, f, y, d?.className),
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
  }, []), /* @__PURE__ */ v.createElement($_, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function k_(e) {
  return Ng(e);
}
function hr() {
  hr = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(R, _, N) {
    R[_] = N.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(R, _, N) {
    return Object.defineProperty(R, _, {
      value: N,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[_];
  }
  try {
    c({}, "");
  } catch {
    c = function(N, D, A) {
      return N[D] = A;
    };
  }
  function u(R, _, N, D) {
    var A = _ && _.prototype instanceof d ? _ : d, F = Object.create(A.prototype), B = new P(D || []);
    return n(F, "_invoke", {
      value: E(R, N, B)
    }), F;
  }
  function l(R, _, N) {
    try {
      return {
        type: "normal",
        arg: R.call(_, N)
      };
    } catch (D) {
      return {
        type: "throw",
        arg: D
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
  var g = Object.getPrototypeOf, b = g && g(g(x([])));
  b && b !== t && r.call(b, i) && (p = b);
  var y = m.prototype = d.prototype = Object.create(p);
  function S(R) {
    ["next", "throw", "return"].forEach(function(_) {
      c(R, _, function(N) {
        return this._invoke(_, N);
      });
    });
  }
  function w(R, _) {
    function N(A, F, B, q) {
      var ne = l(R[A], R, F);
      if (ne.type !== "throw") {
        var se = ne.arg, k = se.value;
        return k && He(k) == "object" && r.call(k, "__await") ? _.resolve(k.__await).then(function(H) {
          N("next", H, B, q);
        }, function(H) {
          N("throw", H, B, q);
        }) : _.resolve(k).then(function(H) {
          se.value = H, B(se);
        }, function(H) {
          return N("throw", H, B, q);
        });
      }
      q(ne.arg);
    }
    var D;
    n(this, "_invoke", {
      value: function(F, B) {
        function q() {
          return new _(function(ne, se) {
            N(F, B, ne, se);
          });
        }
        return D = D ? D.then(q, q) : q();
      }
    });
  }
  function E(R, _, N) {
    var D = "suspendedStart";
    return function(A, F) {
      if (D === "executing")
        throw new Error("Generator is already running");
      if (D === "completed") {
        if (A === "throw")
          throw F;
        return L();
      }
      for (N.method = A, N.arg = F; ; ) {
        var B = N.delegate;
        if (B) {
          var q = C(B, N);
          if (q) {
            if (q === f)
              continue;
            return q;
          }
        }
        if (N.method === "next")
          N.sent = N._sent = N.arg;
        else if (N.method === "throw") {
          if (D === "suspendedStart")
            throw D = "completed", N.arg;
          N.dispatchException(N.arg);
        } else
          N.method === "return" && N.abrupt("return", N.arg);
        D = "executing";
        var ne = l(R, _, N);
        if (ne.type === "normal") {
          if (D = N.done ? "completed" : "suspendedYield", ne.arg === f)
            continue;
          return {
            value: ne.arg,
            done: N.done
          };
        }
        ne.type === "throw" && (D = "completed", N.method = "throw", N.arg = ne.arg);
      }
    };
  }
  function C(R, _) {
    var N = _.method, D = R.iterator[N];
    if (D === void 0)
      return _.delegate = null, N === "throw" && R.iterator.return && (_.method = "return", _.arg = void 0, C(R, _), _.method === "throw") || N !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + N + "' method")), f;
    var A = l(D, R.iterator, _.arg);
    if (A.type === "throw")
      return _.method = "throw", _.arg = A.arg, _.delegate = null, f;
    var F = A.arg;
    return F ? F.done ? (_[R.resultName] = F.value, _.next = R.nextLoc, _.method !== "return" && (_.method = "next", _.arg = void 0), _.delegate = null, f) : F : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, f);
  }
  function O(R) {
    var _ = {
      tryLoc: R[0]
    };
    1 in R && (_.catchLoc = R[1]), 2 in R && (_.finallyLoc = R[2], _.afterLoc = R[3]), this.tryEntries.push(_);
  }
  function T(R) {
    var _ = R.completion || {};
    _.type = "normal", delete _.arg, R.completion = _;
  }
  function P(R) {
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
        var N = -1, D = function A() {
          for (; ++N < R.length; )
            if (r.call(R, N))
              return A.value = R[N], A.done = !1, A;
          return A.value = void 0, A.done = !0, A;
        };
        return D.next = D;
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
  }), e.AsyncIterator = w, e.async = function(R, _, N, D, A) {
    A === void 0 && (A = Promise);
    var F = new w(u(R, _, N, D), A);
    return e.isGeneratorFunction(_) ? F : F.next().then(function(B) {
      return B.done ? B.value : F.next();
    });
  }, S(y), c(y, s, "Generator"), c(y, i, function() {
    return this;
  }), c(y, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(R) {
    var _ = Object(R), N = [];
    for (var D in _)
      N.push(D);
    return N.reverse(), function A() {
      for (; N.length; ) {
        var F = N.pop();
        if (F in _)
          return A.value = F, A.done = !1, A;
      }
      return A.done = !0, A;
    };
  }, e.values = x, P.prototype = {
    constructor: P,
    reset: function(_) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !_)
        for (var N in this)
          N.charAt(0) === "t" && r.call(this, N) && !isNaN(+N.slice(1)) && (this[N] = void 0);
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
      var N = this;
      function D(se, k) {
        return B.type = "throw", B.arg = _, N.next = se, k && (N.method = "next", N.arg = void 0), !!k;
      }
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var F = this.tryEntries[A], B = F.completion;
        if (F.tryLoc === "root")
          return D("end");
        if (F.tryLoc <= this.prev) {
          var q = r.call(F, "catchLoc"), ne = r.call(F, "finallyLoc");
          if (q && ne) {
            if (this.prev < F.catchLoc)
              return D(F.catchLoc, !0);
            if (this.prev < F.finallyLoc)
              return D(F.finallyLoc);
          } else if (q) {
            if (this.prev < F.catchLoc)
              return D(F.catchLoc, !0);
          } else {
            if (!ne)
              throw new Error("try statement without catch or finally");
            if (this.prev < F.finallyLoc)
              return D(F.finallyLoc);
          }
        }
      }
    },
    abrupt: function(_, N) {
      for (var D = this.tryEntries.length - 1; D >= 0; --D) {
        var A = this.tryEntries[D];
        if (A.tryLoc <= this.prev && r.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
          var F = A;
          break;
        }
      }
      F && (_ === "break" || _ === "continue") && F.tryLoc <= N && N <= F.finallyLoc && (F = null);
      var B = F ? F.completion : {};
      return B.type = _, B.arg = N, F ? (this.method = "next", this.next = F.finallyLoc, f) : this.complete(B);
    },
    complete: function(_, N) {
      if (_.type === "throw")
        throw _.arg;
      return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && N && (this.next = N), f;
    },
    finish: function(_) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var D = this.tryEntries[N];
        if (D.finallyLoc === _)
          return this.complete(D.completion, D.afterLoc), T(D), f;
      }
    },
    catch: function(_) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var D = this.tryEntries[N];
        if (D.tryLoc === _) {
          var A = D.completion;
          if (A.type === "throw") {
            var F = A.arg;
            T(D);
          }
          return F;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(_, N, D) {
      return this.delegate = {
        iterator: x(_),
        resultName: N,
        nextLoc: D
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function yh(e, t, r, n, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (u) {
    r(u);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function Io(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(t, r);
      function a(c) {
        yh(i, n, o, a, s, "next", c);
      }
      function s(c) {
        yh(i, n, o, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var xi = W({}, Y0), L_ = xi.version, j_ = xi.render, V_ = xi.unmountComponentAtNode, ms;
try {
  var z_ = Number((L_ || "").split(".")[0]);
  z_ >= 18 && (ms = xi.createRoot);
} catch {
}
function bh(e) {
  var t = xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && He(t) === "object" && (t.usingClientEntryPoint = e);
}
var $a = "__rc_react_root__";
function H_(e, t) {
  bh(!0);
  var r = t[$a] || ms(t);
  bh(!1), r.render(e), t[$a] = r;
}
function B_(e, t) {
  j_(e, t);
}
function Ig(e, t) {
  if (ms) {
    H_(e, t);
    return;
  }
  B_(e, t);
}
function W_(e) {
  return wu.apply(this, arguments);
}
function wu() {
  return wu = Io(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var o;
              (o = t[$a]) === null || o === void 0 || o.unmount(), delete t[$a];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), wu.apply(this, arguments);
}
function U_(e) {
  V_(e);
}
function q_(e) {
  return Cu.apply(this, arguments);
}
function Cu() {
  return Cu = Io(/* @__PURE__ */ hr().mark(function e(t) {
    return hr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (ms === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", W_(t));
          case 2:
            U_(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Cu.apply(this, arguments);
}
const Mg = function(e) {
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
}, Q_ = (e) => {
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
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, G_ = Oi("Wave", (e) => [Q_(e)]);
function K_(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function nc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && K_(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Y_(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return nc(t) ? t : nc(r) ? r : nc(n) ? n : null;
}
const Ag = "ant-wave-target";
function oc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const X_ = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, o = v.useRef(null), [i, a] = v.useState(null), [s, c] = v.useState([]), [u, l] = v.useState(0), [f, d] = v.useState(0), [h, m] = v.useState(0), [p, g] = v.useState(0), [b, y] = v.useState(!1), S = {
    left: u,
    top: f,
    width: h,
    height: p,
    borderRadius: s.map((C) => `${C}px`).join(" ")
  };
  i && (S["--wave-color"] = i);
  function w() {
    const C = getComputedStyle(r);
    a(Y_(r));
    const O = C.position === "static", {
      borderLeftWidth: T,
      borderTopWidth: P
    } = C;
    l(O ? r.offsetLeft : oc(-parseFloat(T))), d(O ? r.offsetTop : oc(-parseFloat(P))), m(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: x,
      borderTopRightRadius: L,
      borderBottomLeftRadius: R,
      borderBottomRightRadius: _
    } = C;
    c([x, L, _, R].map((N) => oc(parseFloat(N))));
  }
  if (v.useEffect(() => {
    if (r) {
      const C = Dt(() => {
        w(), y(!0);
      });
      let O;
      return typeof ResizeObserver < "u" && (O = new ResizeObserver(w), O.observe(r)), () => {
        Dt.cancel(C), O?.disconnect();
      };
    }
  }, []), !b)
    return null;
  const E = (n === "Checkbox" || n === "Radio") && r?.classList.contains(Ag);
  return /* @__PURE__ */ v.createElement(_i, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (C, O) => {
      var T;
      if (O.deadline || O.propertyName === "opacity") {
        const P = (T = o.current) === null || T === void 0 ? void 0 : T.parentElement;
        q_(P).then(() => {
          P?.remove();
        });
      }
      return !1;
    }
  }, (C) => {
    let {
      className: O
    } = C;
    return /* @__PURE__ */ v.createElement("div", {
      ref: o,
      className: Ie(t, {
        "wave-quick": E
      }, O),
      style: S
    });
  });
}, J_ = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild), Ig(/* @__PURE__ */ v.createElement(X_, Object.assign({}, t, {
    target: e
  })), o);
}, Z_ = J_;
function ex(e, t, r) {
  const {
    wave: n
  } = v.useContext(ir), [, o, i] = $n(), a = Tr((u) => {
    const l = e.current;
    if (n?.disabled || !l)
      return;
    const f = l.querySelector(`.${Ag}`) || l, {
      showEffect: d
    } = n || {};
    (d || Z_)(f, {
      className: t,
      token: o,
      component: r,
      event: u,
      hashId: i
    });
  }), s = v.useRef();
  return (u) => {
    Dt.cancel(s.current), s.current = Dt(() => {
      a(u);
    });
  };
}
const Dg = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = Kt(ir), i = $e(null), a = o("wave"), [, s] = G_(a), c = ex(i, Ie(a, s), n);
  if (Pe.useEffect(() => {
    const l = i.current;
    if (!l || l.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Mg(d.target) || // No need wave
      !l.getAttribute || l.getAttribute("disabled") || l.disabled || l.className.includes("disabled") || l.className.includes("-leave") || c(d);
    };
    return l.addEventListener("click", f, !0), () => {
      l.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ Pe.isValidElement(t))
    return t ?? null;
  const u = Ci(t) ? Po(t.ref, i) : i;
  return Og(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (Dg.displayName = "Wave");
const tx = Dg, rx = (e) => {
  const t = Pe.useContext(fs);
  return Pe.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Fg = rx;
globalThis && globalThis.__rest;
const nx = /* @__PURE__ */ v.createContext(null), $g = (e, t) => {
  const r = v.useContext(nx), n = v.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Ie(`${e}-compact${s}item`, {
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
}, ox = /* @__PURE__ */ qu((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = Ie(`${i}-icon`, r);
  return /* @__PURE__ */ Pe.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, o);
}), kg = ox, Eh = /* @__PURE__ */ qu((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: i
  } = e;
  const a = Ie(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Pe.createElement(kg, {
    prefixCls: r,
    className: a,
    style: o,
    ref: t
  }, /* @__PURE__ */ Pe.createElement(Wl, {
    className: i
  }));
}), ic = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ac = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ix = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: i
  } = e, a = !!r;
  return n ? /* @__PURE__ */ Pe.createElement(Eh, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ Pe.createElement(_i, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: ic,
    onAppearActive: ac,
    onEnterStart: ic,
    onEnterActive: ac,
    onLeaveStart: ac,
    onLeaveActive: ic
  }, (s, c) => {
    let {
      className: u,
      style: l
    } = s;
    return /* @__PURE__ */ Pe.createElement(Eh, {
      prefixCls: t,
      className: o,
      style: Object.assign(Object.assign({}, i), l),
      ref: c,
      iconClassName: u
    });
  });
}, ax = ix;
var sx = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Lg = /* @__PURE__ */ v.createContext(void 0), cx = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(ir), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = sx(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , c] = $n();
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
      process.env.NODE_ENV !== "production" && or(!o, "Button.Group", "Invalid prop `size`.");
  }
  const l = Ie(s, {
    [`${s}-${u}`]: u,
    [`${s}-rtl`]: r === "rtl"
  }, i, c);
  return /* @__PURE__ */ v.createElement(Lg.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, a, {
    className: l
  })));
}, ux = cx, Sh = /^[\u4e00-\u9fa5]{2}$/, Ou = Sh.test.bind(Sh);
function wh(e) {
  return typeof e == "string";
}
function Qi(e) {
  return e === "text" || e === "link";
}
function lx(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && wh(e.type) && Ou(e.props.children) ? Og(e, {
    children: e.props.children.split("").join(r)
  }) : wh(e) ? Ou(e) ? /* @__PURE__ */ Pe.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Pe.createElement("span", null, e) : b_(e) ? /* @__PURE__ */ Pe.createElement("span", null, e) : e;
}
function fx(e, t) {
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
  }), Pe.Children.map(n, (o) => lx(o, t));
}
function dx(e, t, r) {
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
function hx(e, t, r) {
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
function jg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, dx(e, n, t)), hx(r, n, t))
  };
}
function vx(e, t) {
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
function px(e, t) {
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
function mx(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, vx(e, t)), px(e.componentCls, t))
  };
}
const Ch = (e, t) => ({
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
}), gx = (e) => {
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
      Ch(`${t}-primary`, o),
      Ch(`${t}-danger`, i)
    ]
  };
}, yx = gx, bx = (e) => {
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
      "&:not(:disabled)": Object.assign({}, c2(e)),
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
}, Kr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Ex = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Sx = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), wx = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), di = (e, t, r, n, o, i, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, Kr(e, Object.assign({
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
}), ql = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, wx(e))
}), Vg = (e) => Object.assign({}, ql(e)), ka = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), zg = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Vg(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Kr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), di(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Kr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), di(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), ql(e))
}), Cx = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Vg(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Kr(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), di(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Kr(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), di(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ql(e))
}), Ox = (e) => Object.assign(Object.assign({}, zg(e)), {
  borderStyle: "dashed"
}), _x = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Kr(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), ka(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Kr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), ka(e))
}), xx = (e) => Object.assign(Object.assign(Object.assign({}, Kr(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), ka(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, ka(e)), Kr(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), Rx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: zg(e),
    [`${t}-primary`]: Cx(e),
    [`${t}-dashed`]: Ox(e),
    [`${t}-link`]: _x(e),
    [`${t}-text`]: xx(e),
    [`${t}-ghost`]: di(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Ql = function(e) {
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
      [`${r}${r}-circle${t}`]: Ex(e)
    },
    {
      [`${r}${r}-round${t}`]: Sx(e)
    }
  ];
}, Tx = (e) => Ql(e), Px = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return Ql(t, `${e.componentCls}-sm`);
}, Nx = (e) => {
  const t = tr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return Ql(t, `${e.componentCls}-lg`);
}, Ix = (e) => {
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
}, Mx = Oi("Button", (e) => {
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
    bx(n),
    // Size
    Px(n),
    Tx(n),
    Nx(n),
    // Block
    Ix(n),
    // Group (type, ghost, danger, loading)
    Rx(n),
    // Button Group
    yx(n),
    // Space Compact
    jg(e),
    mx(e)
  ];
});
var Ax = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Dx(e) {
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
const Fx = (e, t) => {
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
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: S,
    style: w = {}
  } = e, E = Ax(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: O,
    direction: T,
    button: P
  } = Kt(ir), x = C("btn", i), [L, R] = Mx(x), _ = Kt(kl), N = f ?? _, D = Kt(Lg), A = vo(() => Dx(o), [o]), [F, B] = dr(A.loading), [q, ne] = dr(!1), k = Po(t, /* @__PURE__ */ G0()), H = Q0.count(m) === 1 && !p && !Qi(a);
  Ut(() => {
    let oe = null;
    A.delay > 0 ? oe = setTimeout(() => {
      oe = null, B(!0);
    }, A.delay) : B(A.loading);
    function de() {
      oe && (clearTimeout(oe), oe = null);
    }
    return de;
  }, [A]), Ut(() => {
    if (!k || !k.current || O === !1)
      return;
    const oe = k.current.textContent;
    H && Ou(oe) ? q || ne(!0) : q && ne(!1);
  }, [k]);
  const j = (oe) => {
    const {
      onClick: de
    } = e;
    if (F || N) {
      oe.preventDefault();
      return;
    }
    de?.(oe);
  };
  process.env.NODE_ENV !== "production" && or(!(typeof p == "string" && p.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && or(!(g && Qi(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const K = O !== !1, {
    compactSize: M,
    compactItemClassnames: Q
  } = $g(x, T), $ = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, X = Fg((oe) => {
    var de, Ne;
    return (Ne = (de = u ?? M) !== null && de !== void 0 ? de : D) !== null && Ne !== void 0 ? Ne : oe;
  }), re = X && $[X] || "", J = F ? "loading" : p, I = _l(E, ["navigate"]), Z = Ie(x, R, {
    [`${x}-${c}`]: c !== "default" && c,
    [`${x}-${a}`]: a,
    [`${x}-${re}`]: re,
    [`${x}-icon-only`]: !m && m !== 0 && !!J,
    [`${x}-background-ghost`]: g && !Qi(a),
    [`${x}-loading`]: F,
    [`${x}-two-chinese-chars`]: q && K && !F,
    [`${x}-block`]: b,
    [`${x}-dangerous`]: !!s,
    [`${x}-rtl`]: T === "rtl"
  }, Q, d, h, P?.className), V = Object.assign(Object.assign({}, P?.style), w), ee = Ie(S?.icon, (r = P?.classNames) === null || r === void 0 ? void 0 : r.icon), fe = Object.assign(Object.assign({}, l?.icon || {}), ((n = P?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), ae = p && !F ? /* @__PURE__ */ Pe.createElement(kg, {
    prefixCls: x,
    className: ee,
    style: fe
  }, p) : /* @__PURE__ */ Pe.createElement(ax, {
    existIcon: !!p,
    prefixCls: x,
    loading: !!F
  }), ve = m || m === 0 ? fx(m, H && K) : null;
  if (I.href !== void 0)
    return L(/* @__PURE__ */ Pe.createElement("a", Object.assign({}, I, {
      className: Ie(Z, {
        [`${x}-disabled`]: N
      }),
      style: V,
      onClick: j,
      ref: k
    }), ae, ve));
  let me = /* @__PURE__ */ Pe.createElement("button", Object.assign({}, E, {
    type: y,
    className: Z,
    style: V,
    onClick: j,
    disabled: N,
    ref: k
  }), ae, ve);
  return Qi(a) || (me = /* @__PURE__ */ Pe.createElement(tx, {
    component: "Button",
    disabled: !!F
  }, me)), L(me);
}, gs = /* @__PURE__ */ qu(Fx);
process.env.NODE_ENV !== "production" && (gs.displayName = "Button");
gs.Group = ux;
gs.__ANT_BUTTON = !0;
const $x = gs, kx = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
var Hg = /* @__PURE__ */ v.createContext(null), Oh = [];
function Lx(e, t) {
  var r = v.useState(function() {
    if (!Yt())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = G(r, 1), o = n[0], i = v.useRef(!1), a = v.useContext(Hg), s = v.useState(Oh), c = G(s, 2), u = c[0], l = c[1], f = a || (i.current ? void 0 : function(m) {
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
  return Rt(function() {
    return e ? a ? a(d) : d() : h(), h;
  }, [e]), Rt(function() {
    u.length && (u.forEach(function(m) {
      return m();
    }), l(Oh));
  }, [u]), [o, f];
}
var sc;
function jx(e) {
  if (typeof document > "u")
    return 0;
  if (e || sc === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var o = t.offsetWidth;
    r.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = r.clientWidth), document.body.removeChild(r), sc = o - i;
  }
  return sc;
}
function _h(e) {
  var t = e.match(/^(.*)px$/), r = Number(t?.[1]);
  return Number.isNaN(r) ? jx() : r;
}
function Vx(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: _h(r),
    height: _h(n)
  };
}
function zx() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Hx = "rc-util-locker-".concat(Date.now()), xh = 0;
function Bx(e) {
  var t = !!e, r = v.useState(function() {
    return xh += 1, "".concat(Hx, "_").concat(xh);
  }), n = G(r, 1), o = n[0];
  Rt(function() {
    if (t) {
      var i = Vx(document.body).width, a = zx();
      Eo(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      Pa(o);
    return function() {
      Pa(o);
    };
  }, [t, o]);
}
var Rh = !1;
function Wx(e) {
  return typeof e == "boolean" && (Rh = e), Rh;
}
var Th = function(t) {
  return t === !1 ? !1 : !Yt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Gl = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, u = v.useState(r), l = G(u, 2), f = l[0], d = l[1], h = f || r;
  process.env.NODE_ENV !== "production" && Fe(Yt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && d(r);
  }, [r, s]);
  var m = v.useState(function() {
    return Th(o);
  }), p = G(m, 2), g = p[0], b = p[1];
  v.useEffect(function() {
    var R = Th(o);
    b(R ?? null);
  });
  var y = Lx(h && !g, i), S = G(y, 2), w = S[0], E = S[1], C = g ?? w;
  Bx(n && r && Yt() && (C === w || C === document.body));
  var O = null;
  if (c && Ci(c) && t) {
    var T = c;
    O = T.ref;
  }
  var P = Ol(O, t);
  if (!h || !Yt() || g === void 0)
    return null;
  var x = C === !1 || Wx(), L = c;
  return t && (L = /* @__PURE__ */ v.cloneElement(c, {
    ref: P
  })), /* @__PURE__ */ v.createElement(Hg.Provider, {
    value: E
  }, x ? L : /* @__PURE__ */ Gu(L, C));
});
process.env.NODE_ENV !== "production" && (Gl.displayName = "Portal");
function Ux() {
  var e = W({}, v);
  return e.useId;
}
var Ph = 0;
function qx(e) {
  var t = v.useState("ssr-id"), r = G(t, 2), n = r[0], o = r[1], i = Ux(), a = i?.();
  return v.useEffect(function() {
    if (!i) {
      var s = Ph;
      Ph += 1, o("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || n);
}
var En = "RC_FORM_INTERNAL_HOOKS", ct = function() {
  Fe(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
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
}), La = /* @__PURE__ */ v.createContext(null);
function _u(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Qx(e) {
  return e && !!e._init;
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(this, arguments);
}
function Gx(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, hi(e, t);
}
function xu(e) {
  return xu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xu(e);
}
function hi(e, t) {
  return hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, hi(e, t);
}
function Kx() {
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
function pa(e, t, r) {
  return Kx() ? pa = Reflect.construct.bind() : pa = function(o, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var c = Function.bind.apply(o, s), u = new c();
    return a && hi(u, a.prototype), u;
  }, pa.apply(null, arguments);
}
function Yx(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ru(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ru = function(n) {
    if (n === null || !Yx(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o);
    }
    function o() {
      return pa(n, arguments, xu(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), hi(o, n);
  }, Ru(e);
}
var Xx = /%[sdj%]/g, Bg = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Bg = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Tu(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function fr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var a = e.replace(Xx, function(s) {
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
function Jx(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function $t(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Jx(t) && typeof e == "string" && !e);
}
function Zx(e, t, r) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, s || []), o++, o === i && r(n);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function Nh(e, t, r) {
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
function eR(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Ih = /* @__PURE__ */ function(e) {
  Gx(t, e);
  function t(r, n) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = r, o.fields = n, o;
  }
  return t;
}(/* @__PURE__ */ Ru(Error));
function tR(e, t, r, n, o) {
  if (t.first) {
    var i = new Promise(function(d, h) {
      var m = function(b) {
        return n(b), b.length ? h(new Ih(b, Tu(b))) : d(o);
      }, p = eR(e);
      Nh(p, r, m);
    });
    return i.catch(function(d) {
      return d;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, u = 0, l = [], f = new Promise(function(d, h) {
    var m = function(g) {
      if (l.push.apply(l, g), u++, u === c)
        return n(l), l.length ? h(new Ih(l, Tu(l))) : d(o);
    };
    s.length || (n(l), d(o)), s.forEach(function(p) {
      var g = e[p];
      a.indexOf(p) !== -1 ? Nh(g, r, m) : Zx(g, r, m);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function rR(e) {
  return !!(e && e.message !== void 0);
}
function nR(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Mh(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = nR(t, e.fullFields) : n = t[r.field || e.fullField], rR(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Ah(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = Sn({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var Wg = function(t, r, n, o, i, a) {
  t.required && (!n.hasOwnProperty(t.field) || $t(r, a || t.type)) && o.push(fr(i.messages.required, t.fullField));
}, oR = function(t, r, n, o, i) {
  (/^\s+$/.test(r) || r === "") && o.push(fr(i.messages.whitespace, t.fullField));
}, Gi, iR = function() {
  if (Gi)
    return Gi;
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
  var u = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, d = c.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + l + "(?:localhost|" + f + "|" + d + "|" + h + m + p + ")" + g + b;
  return Gi = new RegExp("(?:^" + y + "$)", "i"), Gi;
}, Dh = {
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
    return typeof t == "string" && t.length <= 320 && !!t.match(Dh.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(iR());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Dh.hex);
  }
}, aR = function(t, r, n, o, i) {
  if (t.required && r === void 0) {
    Wg(t, r, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Ko[s](r) || o.push(fr(i.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && o.push(fr(i.messages.types[s], t.fullField, t.type));
}, sR = function(t, r, n, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, f = null, d = typeof r == "number", h = typeof r == "string", m = Array.isArray(r);
  if (d ? f = "number" : h ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (l = r.length), h && (l = r.replace(u, "_").length), a ? l !== t.len && o.push(fr(i.messages[f].len, t.fullField, t.len)) : s && !c && l < t.min ? o.push(fr(i.messages[f].min, t.fullField, t.min)) : c && !s && l > t.max ? o.push(fr(i.messages[f].max, t.fullField, t.max)) : s && c && (l < t.min || l > t.max) && o.push(fr(i.messages[f].range, t.fullField, t.min, t.max));
}, Gn = "enum", cR = function(t, r, n, o, i) {
  t[Gn] = Array.isArray(t[Gn]) ? t[Gn] : [], t[Gn].indexOf(r) === -1 && o.push(fr(i.messages[Gn], t.fullField, t[Gn].join(", ")));
}, uR = function(t, r, n, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(fr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || o.push(fr(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Ve = {
  required: Wg,
  whitespace: oR,
  type: aR,
  range: sR,
  enum: cR,
  pattern: uR
}, lR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r, "string") && !t.required)
      return n();
    Ve.required(t, r, o, a, i, "string"), $t(r, "string") || (Ve.type(t, r, o, a, i), Ve.range(t, r, o, a, i), Ve.pattern(t, r, o, a, i), t.whitespace === !0 && Ve.whitespace(t, r, o, a, i));
  }
  n(a);
}, fR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && Ve.type(t, r, o, a, i);
  }
  n(a);
}, dR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), $t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && (Ve.type(t, r, o, a, i), Ve.range(t, r, o, a, i));
  }
  n(a);
}, hR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && Ve.type(t, r, o, a, i);
  }
  n(a);
}, vR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), $t(r) || Ve.type(t, r, o, a, i);
  }
  n(a);
}, pR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && (Ve.type(t, r, o, a, i), Ve.range(t, r, o, a, i));
  }
  n(a);
}, mR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && (Ve.type(t, r, o, a, i), Ve.range(t, r, o, a, i));
  }
  n(a);
}, gR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Ve.required(t, r, o, a, i, "array"), r != null && (Ve.type(t, r, o, a, i), Ve.range(t, r, o, a, i));
  }
  n(a);
}, yR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && Ve.type(t, r, o, a, i);
  }
  n(a);
}, bR = "enum", ER = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i), r !== void 0 && Ve[bR](t, r, o, a, i);
  }
  n(a);
}, SR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r, "string") && !t.required)
      return n();
    Ve.required(t, r, o, a, i), $t(r, "string") || Ve.pattern(t, r, o, a, i);
  }
  n(a);
}, wR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r, "date") && !t.required)
      return n();
    if (Ve.required(t, r, o, a, i), !$t(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), Ve.type(t, c, o, a, i), c && Ve.range(t, c.getTime(), o, a, i);
    }
  }
  n(a);
}, CR = function(t, r, n, o, i) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  Ve.required(t, r, o, a, i, s), n(a);
}, cc = function(t, r, n, o, i) {
  var a = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if ($t(r, a) && !t.required)
      return n();
    Ve.required(t, r, o, s, i, a), $t(r, a) || Ve.type(t, r, o, s, i);
  }
  n(s);
}, OR = function(t, r, n, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if ($t(r) && !t.required)
      return n();
    Ve.required(t, r, o, a, i);
  }
  n(a);
}, ti = {
  string: lR,
  method: fR,
  number: dR,
  boolean: hR,
  regexp: vR,
  integer: pR,
  float: mR,
  array: gR,
  object: yR,
  enum: ER,
  pattern: SR,
  date: wR,
  url: cc,
  hex: cc,
  email: cc,
  required: CR,
  any: OR
};
function Pu() {
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
var Nu = Pu(), Ri = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Nu, this.define(r);
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
    return n && (this._messages = Ah(Pu(), n)), this._messages;
  }, t.validate = function(n, o, i) {
    var a = this;
    o === void 0 && (o = {}), i === void 0 && (i = function() {
    });
    var s = n, c = o, u = i;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function l(p) {
      var g = [], b = {};
      function y(w) {
        if (Array.isArray(w)) {
          var E;
          g = (E = g).concat.apply(E, w);
        } else
          g.push(w);
      }
      for (var S = 0; S < p.length; S++)
        y(p[S]);
      g.length ? (b = Tu(g), u(g, b)) : u(null, s);
    }
    if (c.messages) {
      var f = this.messages();
      f === Nu && (f = Pu()), Ah(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var d = {}, h = c.keys || Object.keys(this.rules);
    h.forEach(function(p) {
      var g = a.rules[p], b = s[p];
      g.forEach(function(y) {
        var S = y;
        typeof S.transform == "function" && (s === n && (s = Sn({}, s)), b = s[p] = S.transform(b)), typeof S == "function" ? S = {
          validator: S
        } : S = Sn({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = p, S.fullField = S.fullField || p, S.type = a.getType(S), d[p] = d[p] || [], d[p].push({
          rule: S,
          value: b,
          source: s,
          field: p
        }));
      });
    });
    var m = {};
    return tR(d, c, function(p, g) {
      var b = p.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && p.value), b.field = p.field;
      function S(C, O) {
        return Sn({}, O, {
          fullField: b.fullField + "." + C,
          fullFields: b.fullFields ? [].concat(b.fullFields, [C]) : [C]
        });
      }
      function w(C) {
        C === void 0 && (C = []);
        var O = Array.isArray(C) ? C : [C];
        !c.suppressWarning && O.length && e.warning("async-validator:", O), O.length && b.message !== void 0 && (O = [].concat(b.message));
        var T = O.map(Mh(b, s));
        if (c.first && T.length)
          return m[b.field] = 1, g(T);
        if (!y)
          g(T);
        else {
          if (b.required && !p.value)
            return b.message !== void 0 ? T = [].concat(b.message).map(Mh(b, s)) : c.error && (T = [c.error(b, fr(c.messages.required, b.field))]), g(T);
          var P = {};
          b.defaultField && Object.keys(p.value).map(function(R) {
            P[R] = b.defaultField;
          }), P = Sn({}, P, p.rule.fields);
          var x = {};
          Object.keys(P).forEach(function(R) {
            var _ = P[R], N = Array.isArray(_) ? _ : [_];
            x[R] = N.map(S.bind(null, R));
          });
          var L = new e(x);
          L.messages(c.messages), p.rule.options && (p.rule.options.messages = c.messages, p.rule.options.error = c.error), L.validate(p.value, p.rule.options || c, function(R) {
            var _ = [];
            T && T.length && _.push.apply(_, T), R && R.length && _.push.apply(_, R), g(_.length ? _ : null);
          });
        }
      }
      var E;
      if (b.asyncValidator)
        E = b.asyncValidator(b, p.value, w, p.source, c);
      else if (b.validator) {
        try {
          E = b.validator(b, p.value, w, p.source, c);
        } catch (C) {
          console.error?.(C), c.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), w(C.message);
        }
        E === !0 ? w() : E === !1 ? w(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : E instanceof Array ? w(E) : E instanceof Error && w(E.message);
      }
      E && E.then && E.then(function() {
        return w();
      }, function(C) {
        return w(C);
      });
    }, function(p) {
      l(p);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !ti.hasOwnProperty(n.type))
      throw new Error(fr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var o = Object.keys(n), i = o.indexOf("message");
    return i !== -1 && o.splice(i, 1), o.length === 1 && o[0] === "required" ? ti.required : ti[this.getType(n)] || void 0;
  }, e;
}();
Ri.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ti[t] = r;
};
Ri.warning = Bg;
Ri.messages = Nu;
Ri.validators = ti;
var ur = "'${name}' is not a valid ${type}", Ug = {
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
    string: ur,
    method: ur,
    array: ur,
    object: ur,
    number: ur,
    date: ur,
    boolean: ur,
    integer: ur,
    float: ur,
    regexp: ur,
    email: ur,
    url: ur,
    hex: ur
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
}, Fh = Ri;
function _R(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var $h = "CODE_LOGIC_ERROR";
function Iu(e, t, r, n, o) {
  return Mu.apply(this, arguments);
}
function Mu() {
  return Mu = Io(/* @__PURE__ */ hr().mark(function e(t, r, n, o, i) {
    var a, s, c, u, l, f, d, h, m;
    return hr().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return a = W({}, n), delete a.ruleIndex, Fh.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject($h);
              }
            }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), u = new Fh(ye({}, t, [a])), l = ao(Ug, o.validateMessages), u.messages(l), f = [], g.prev = 10, g.next = 13, Promise.resolve(u.validate(ye({}, t, r), W({}, o)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(b, y) {
              var S = b.message, w = S === $h ? l.default : S;
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
            return g.next = 21, Promise.all(r.map(function(b, y) {
              return Iu("".concat(t, ".").concat(y), b, c, o, i);
            }));
          case 21:
            return d = g.sent, g.abrupt("return", d.reduce(function(b, y) {
              return [].concat(Ee(b), Ee(y));
            }, []));
          case 23:
            return h = W(W({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), m = f.map(function(b) {
              return typeof b == "string" ? _R(b, h) : b;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), Mu.apply(this, arguments);
}
function xR(e, t, r, n, o, i) {
  var a = e.join("."), s = r.map(function(l, f) {
    var d = l.validator, h = W(W({}, l), {}, {
      ruleIndex: f
    });
    return d && (h.validator = function(m, p, g) {
      var b = !1, y = function() {
        for (var E = arguments.length, C = new Array(E), O = 0; O < E; O++)
          C[O] = arguments[O];
        Promise.resolve().then(function() {
          Fe(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || g.apply(void 0, C);
        });
      }, S = d(m, p, y);
      b = S && typeof S.then == "function" && typeof S.catch == "function", Fe(b, "`callback` is deprecated. Please return a promise instead."), b && S.then(function() {
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
      var l = Io(/* @__PURE__ */ hr().mark(function f(d, h) {
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
                return p = s[m], y.next = 5, Iu(a, t, p, n, i);
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
      return Iu(a, t, l, n, i).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    c = (o ? TR(u) : RR(u)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function RR(e) {
  return Au.apply(this, arguments);
}
function Au() {
  return Au = Io(/* @__PURE__ */ hr().mark(function e(t) {
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
  })), Au.apply(this, arguments);
}
function TR(e) {
  return Du.apply(this, arguments);
}
function Du() {
  return Du = Io(/* @__PURE__ */ hr().mark(function e(t) {
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
  })), Du.apply(this, arguments);
}
function _t(e) {
  return _u(e);
}
function kh(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = Pr(e, n);
    r = xr(r, n, o);
  }), r;
}
function ri(e, t) {
  return e && e.some(function(r) {
    return qg(r, t);
  });
}
function qg(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
function PR(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || He(e) !== "object" || He(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return Ee(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function NR(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && He(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Lh(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], i = t - r;
  return i > 0 ? [].concat(Ee(e.slice(0, r)), [o], Ee(e.slice(r, t)), Ee(e.slice(t + 1, n))) : i < 0 ? [].concat(Ee(e.slice(0, t)), Ee(e.slice(t + 1, r + 1)), [o], Ee(e.slice(r + 1, n))) : e;
}
var IR = ["name"], pr = [];
function jh(e, t, r, n, o, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var Kl = /* @__PURE__ */ function(e) {
  Si(r, e);
  var t = wi(r);
  function r(n) {
    var o;
    if (Er(this, r), o = t.call(this, n), o.state = {
      resetCount: 0
    }, o.cancelRegisterFunc = null, o.mounted = !1, o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.prevValidating = void 0, o.errors = pr, o.warnings = pr, o.cancelRegister = function() {
      var c = o.props, u = c.preserve, l = c.isListField, f = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(l, u, _t(f)), o.cancelRegisterFunc = null;
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
        em(o.metaCache, l) || u(l), o.metaCache = l;
      } else
        o.metaCache = null;
    }, o.onStoreChange = function(c, u, l) {
      var f = o.props, d = f.shouldUpdate, h = f.dependencies, m = h === void 0 ? [] : h, p = f.onReset, g = l.store, b = o.getNamePath(), y = o.getValue(c), S = o.getValue(g), w = u && ri(u, b);
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
            var E = l.data;
            "touched" in E && (o.touched = E.touched), "validating" in E && !("originRCField" in E) && (o.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (o.errors = E.errors || pr), "warnings" in E && (o.warnings = E.warnings || pr), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          }
          if (d && !b.length && jh(d, c, g, y, S, l)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = m.map(_t);
          if (C.some(function(O) {
            return ri(l.relatedFields, O);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!m.length || b.length || d) && jh(d, c, g, y, S, l)) {
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
        var g = o.props, b = g.validateFirst, y = b === void 0 ? !1 : b, S = g.messageVariables, w = o.getRules();
        d && (w = w.filter(function(C) {
          return C;
        }).filter(function(C) {
          var O = C.validateTrigger;
          if (!O)
            return !0;
          var T = _u(O);
          return T.includes(d);
        }));
        var E = xR(u, l, w, c, y, S);
        return E.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pr;
          if (o.validatePromise === p) {
            var O;
            o.validatePromise = null;
            var T = [], P = [];
            (O = C.forEach) === null || O === void 0 || O.call(C, function(x) {
              var L = x.rule.warningOnly, R = x.errors, _ = R === void 0 ? pr : R;
              L ? P.push.apply(P, Ee(_)) : T.push.apply(T, Ee(_));
            }), o.errors = T, o.warnings = P, o.triggerMetaEvent(), o.reRender();
          }
        }), E;
      });
      return m || (o.validatePromise = p, o.dirty = !0, o.errors = pr, o.warnings = pr, o.triggerMetaEvent(), o.reRender()), p;
    }, o.isFieldValidating = function() {
      return !!o.validatePromise;
    }, o.isFieldTouched = function() {
      return o.touched;
    }, o.isFieldDirty = function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, u = c.getInternalHooks(En), l = u.getInitialValue;
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
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.props, l = u.trigger, f = u.validateTrigger, d = u.getValueFromEvent, h = u.normalize, m = u.valuePropName, p = u.getValueProps, g = u.fieldContext, b = f !== void 0 ? f : g.validateTrigger, y = o.getNamePath(), S = g.getInternalHooks, w = g.getFieldsValue, E = S(En), C = E.dispatch, O = o.getValue(), T = p || function(R) {
        return ye({}, m, R);
      }, P = c[l], x = W(W({}, c), T(O));
      x[l] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var R, _ = arguments.length, N = new Array(_), D = 0; D < _; D++)
          N[D] = arguments[D];
        d ? R = d.apply(void 0, N) : R = NR.apply(void 0, [m].concat(N)), h && (R = h(R, O, w(!0))), C({
          type: "updateValue",
          namePath: y,
          value: R
        }), P && P.apply(void 0, N);
      };
      var L = _u(b || []);
      return L.forEach(function(R) {
        var _ = x[R];
        x[R] = function() {
          _ && _.apply(void 0, arguments);
          var N = o.props.rules;
          N && N.length && C({
            type: "validateField",
            namePath: y,
            triggerName: R
          });
        };
      }), x;
    }, n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, a = i(En), s = a.initEntityValue;
      s(Oa(o));
    }
    return o;
  }
  return Sr(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(En), u = c.registerField;
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
      return c ? u = s : /* @__PURE__ */ v.isValidElement(s) ? u = /* @__PURE__ */ v.cloneElement(s, this.getControlled(s.props)) : (Fe(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ v.createElement(v.Fragment, {
        key: o
      }, u);
    }
  }]), r;
}(v.Component);
Kl.contextType = Co;
Kl.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function Qg(e) {
  var t = e.name, r = Ct(e, IR), n = v.useContext(Co), o = v.useContext(La), i = t !== void 0 ? _t(t) : void 0, a = "keep";
  return r.isListField || (a = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && Fe(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(Kl, Ae({
    key: a,
    name: i,
    isListField: !!o
  }, r, {
    fieldContext: n
  }));
}
function MR(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = v.useContext(Co), c = v.useContext(La), u = v.useRef({
    keys: [],
    id: 0
  }), l = u.current, f = v.useMemo(function() {
    var p = _t(s.prefixName) || [];
    return [].concat(Ee(p), Ee(_t(t)));
  }, [s.prefixName, t]), d = v.useMemo(function() {
    return W(W({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), h = v.useMemo(function() {
    return {
      getKey: function(g) {
        var b = f.length, y = g[b];
        return [l.keys[y], g.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return Fe(!1, "Form.List only accepts function as children."), null;
  var m = function(g, b, y) {
    var S = y.source;
    return S === "internal" ? !1 : g !== b;
  };
  return /* @__PURE__ */ v.createElement(La.Provider, {
    value: h
  }, /* @__PURE__ */ v.createElement(Co.Provider, {
    value: d
  }, /* @__PURE__ */ v.createElement(Qg, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: a ?? !!c
  }, function(p, g) {
    var b = p.value, y = b === void 0 ? [] : b, S = p.onChange, w = s.getFieldValue, E = function() {
      var P = w(f || []);
      return P || [];
    }, C = {
      add: function(P, x) {
        var L = E();
        x >= 0 && x <= L.length ? (l.keys = [].concat(Ee(l.keys.slice(0, x)), [l.id], Ee(l.keys.slice(x))), S([].concat(Ee(L.slice(0, x)), [P], Ee(L.slice(x))))) : (process.env.NODE_ENV !== "production" && (x < 0 || x > L.length) && Fe(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(Ee(l.keys), [l.id]), S([].concat(Ee(L), [P]))), l.id += 1;
      },
      remove: function(P) {
        var x = E(), L = new Set(Array.isArray(P) ? P : [P]);
        L.size <= 0 || (l.keys = l.keys.filter(function(R, _) {
          return !L.has(_);
        }), S(x.filter(function(R, _) {
          return !L.has(_);
        })));
      },
      move: function(P, x) {
        if (P !== x) {
          var L = E();
          P < 0 || P >= L.length || x < 0 || x >= L.length || (l.keys = Lh(l.keys, P, x), S(Lh(L, P, x)));
        }
      }
    }, O = y || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && Fe(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(O.map(function(T, P) {
      var x = l.keys[P];
      return x === void 0 && (l.keys[P] = l.id, x = l.keys[P], l.id += 1), {
        name: P,
        key: x,
        isListField: !0
      };
    }), C, g);
  })));
}
function AR(e) {
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
var Gg = "__@field_split__";
function uc(e) {
  return e.map(function(t) {
    return "".concat(He(t), ":").concat(t);
  }).join(Gg);
}
var Kn = /* @__PURE__ */ function() {
  function e() {
    Er(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return Sr(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(uc(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(uc(r));
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
      this.kvs.delete(uc(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Ee(this.kvs.entries()).map(function(n) {
        var o = G(n, 2), i = o[0], a = o[1], s = i.split(Gg);
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
}(), DR = ["name"], FR = /* @__PURE__ */ Sr(function e(t) {
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
    return n === En ? (r.formHooked = !0, {
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
    }) : (Fe(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(n) {
    r.subscribable = n;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, o) {
    if (r.initialValues = n || {}, o) {
      var i, a = ao(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = xr(a, c, Pr(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }, this.destroyForm = function() {
    var n = new Kn();
    r.getFieldEntities(!0).forEach(function(o) {
      r.isMergedPreserve(o.isPreserve()) || n.set(o.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var o = Pr(r.initialValues, n);
    return n.length ? ao(o) : o;
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
      r.timeoutId = null, r.formHooked || Fe(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(n) {
    r.store = n;
  }, this.getFieldEntities = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }, this.getFieldsMap = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Kn();
    return r.getFieldEntities(n).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }, this.getFieldEntitiesForNamePathList = function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(i) {
      var a = _t(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: _t(i)
      };
    });
  }, this.getFieldsValue = function(n, o) {
    r.warningUnhooked();
    var i, a, s;
    if (n === !0 || Array.isArray(n) ? (i = n, a = o) : n && He(n) === "object" && (s = n.strict, a = n.filter), i === !0 && !a)
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
    }), kh(r.store, u.map(_t));
  }, this.getFieldValue = function(n) {
    r.warningUnhooked();
    var o = _t(n);
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
        name: _t(n[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(n) {
    r.warningUnhooked();
    var o = _t(n), i = r.getFieldsError([o])[0];
    return i.errors;
  }, this.getFieldWarning = function(n) {
    r.warningUnhooked();
    var o = _t(n), i = r.getFieldsError([o])[0];
    return i.warnings;
  }, this.isFieldsTouched = function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], c, u = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(a) ? (c = a.map(_t), u = !1) : (c = null, u = a) : (c = a.map(_t), u = s);
    var l = r.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!c)
      return u ? l.every(f) : l.some(f);
    var d = new Kn();
    c.forEach(function(p) {
      d.set(p, []);
    }), l.forEach(function(p) {
      var g = p.getNamePath();
      c.forEach(function(b) {
        b.every(function(y, S) {
          return g[S] === y;
        }) && d.update(b, function(y) {
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
    var i = n.map(_t);
    return o.some(function(a) {
      var s = a.getNamePath();
      return ri(i, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Kn(), i = r.getFieldEntities(!0);
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
            Fe(!1, "Form already set 'initialValues' with path '".concat(d.join("."), "'. Field can not overwrite it."));
          else {
            var m = o.get(d);
            if (m && m.size > 1)
              Fe(!1, "Multiple Field with path '".concat(d.join("."), "' set 'initialValue'. Can not decide which one to pick."));
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
      r.updateStore(ao(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(_t);
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
      var s = a.name, c = Ct(a, DR), u = _t(s);
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
            !qg(f.getNamePath(), o)
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
    var i = _t(n), a = r.store;
    r.updateStore(xr(r.store, i, o)), r.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(a, i), c = r.callbacks.onValuesChange;
    if (c) {
      var u = kh(r.store, [i]);
      c(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(Ee(s)));
  }, this.setFieldsValue = function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var i = ao(r.store, n);
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
    var o = /* @__PURE__ */ new Set(), i = [], a = new Kn();
    r.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(l) {
        var f = _t(l);
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
        var s = new Kn();
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
    var s = !!i, c = s ? i.map(_t) : [], u = [], l = String(Date.now()), f = /* @__PURE__ */ new Set();
    r.getFieldEntities(!0).forEach(function(p) {
      var g;
      if (s || c.push(p.getNamePath()), !((g = a) === null || g === void 0) && g.recursive && s) {
        var b = p.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        b.every(function(w, E) {
          return i[E] === w || i[E] === void 0;
        }) && c.push(b);
      }
      if (!(!p.props.rules || !p.props.rules.length)) {
        var y = p.getNamePath();
        if (f.add(y.join(l)), !s || ri(c, y)) {
          var S = p.validateRules(W({
            validateMessages: W(W({}, Ug), r.validateMessages)
          }, a));
          u.push(S.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var E, C = [], O = [];
            return (E = w.forEach) === null || E === void 0 || E.call(w, function(T) {
              var P = T.rule.warningOnly, x = T.errors;
              P ? O.push.apply(O, Ee(x)) : C.push.apply(C, Ee(x));
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
    var d = AR(u);
    r.lastValidatePromise = d, d.catch(function(p) {
      return p;
    }).then(function(p) {
      var g = p.map(function(b) {
        var y = b.name;
        return y;
      });
      r.notifyObservers(r.store, g, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(g, p);
    });
    var h = d.then(function() {
      return r.lastValidatePromise === d ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var g = p.filter(function(b) {
        return b && b.errors.length;
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
function Kg(e) {
  var t = v.useRef(), r = v.useState({}), n = G(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new FR(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Fu = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), $R = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, i = t.children, a = v.useContext(Fu), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(Fu.Provider, {
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
}, kR = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], LR = function(t, r) {
  var n = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, c = t.children, u = t.component, l = u === void 0 ? "form" : u, f = t.validateMessages, d = t.validateTrigger, h = d === void 0 ? "onChange" : d, m = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, b = t.onFinishFailed, y = Ct(t, kR), S = v.useContext(Fu), w = Kg(a), E = G(w, 1), C = E[0], O = C.getInternalHooks(En), T = O.useSubscribe, P = O.setInitialValues, x = O.setCallbacks, L = O.setValidateMessages, R = O.setPreserve, _ = O.destroyForm;
  v.useImperativeHandle(r, function() {
    return C;
  }), v.useEffect(function() {
    return S.registerForm(n, C), function() {
      S.unregisterForm(n);
    };
  }, [S, C, n]), L(W(W({}, S.validateMessages), f)), x({
    onValuesChange: m,
    onFieldsChange: function(k) {
      if (S.triggerFormChange(n, k), p) {
        for (var H = arguments.length, j = new Array(H > 1 ? H - 1 : 0), K = 1; K < H; K++)
          j[K - 1] = arguments[K];
        p.apply(void 0, [k].concat(j));
      }
    },
    onFinish: function(k) {
      S.triggerFormFinish(n, k), g && g(k);
    },
    onFinishFailed: b
  }), R(s);
  var N = v.useRef(null);
  P(o, !N.current), N.current || (N.current = !0), v.useEffect(
    function() {
      return _;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var D, A = typeof c == "function";
  if (A) {
    var F = C.getFieldsValue(!0);
    D = c(F, C);
  } else
    D = c;
  T(!A);
  var B = v.useRef();
  v.useEffect(function() {
    PR(B.current || [], i || []) || C.setFields(i || []), B.current = i;
  }, [i, C]);
  var q = v.useMemo(function() {
    return W(W({}, C), {}, {
      validateTrigger: h
    });
  }, [C, h]), ne = /* @__PURE__ */ v.createElement(La.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Co.Provider, {
    value: q
  }, D));
  return l === !1 ? ne : /* @__PURE__ */ v.createElement(l, Ae({}, y, {
    onSubmit: function(k) {
      k.preventDefault(), k.stopPropagation(), C.submit();
    },
    onReset: function(k) {
      var H;
      k.preventDefault(), C.resetFields(), (H = y.onReset) === null || H === void 0 || H.call(y, k);
    }
  }), ne);
};
function Vh(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var jR = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = $e(t);
  Fe(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function VR() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = n === void 0 ? [] : n, i = t[1], a = i === void 0 ? {} : i, s = Qx(a) ? {
    form: a
  } : a, c = s.form, u = dr(), l = G(u, 2), f = l[0], d = l[1], h = vo(function() {
    return Vh(f);
  }, [f]), m = $e(h);
  m.current = h;
  var p = Kt(Co), g = c || p, b = g && g._init;
  process.env.NODE_ENV !== "production" && Fe(t.length === 2 ? c ? b : !0 : b, "useWatch requires a form instance since it can not auto detect from context.");
  var y = _t(o), S = $e(y);
  return S.current = y, jR(y), Ut(
    function() {
      if (b) {
        var w = g.getFieldsValue, E = g.getInternalHooks, C = E(En), O = C.registerWatch, T = O(function(x, L) {
          var R = Pr(s.preserve ? L : x, S.current), _ = Vh(R);
          m.current !== _ && (m.current = _, d(R));
        }), P = Pr(s.preserve ? w(!0) : w(), S.current);
        return d(P), T;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), f;
}
var zR = /* @__PURE__ */ v.forwardRef(LR), Ti = zR;
Ti.FormProvider = $R;
Ti.Field = Qg;
Ti.List = MR;
Ti.useForm = Kg;
Ti.useWatch = VR;
const HR = /* @__PURE__ */ v.createContext({}), BR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), WR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Yg = function(e, t, r, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, BR(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, WR(n)), {
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
}, UR = new zt("antMoveDownIn", {
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
}), qR = new zt("antMoveDownOut", {
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
}), QR = new zt("antMoveLeftIn", {
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
}), GR = new zt("antMoveLeftOut", {
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
}), KR = new zt("antMoveRightIn", {
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
}), YR = new zt("antMoveRightOut", {
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
}), XR = new zt("antMoveUpIn", {
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
}), JR = new zt("antMoveUpOut", {
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
}), ZR = {
  "move-up": {
    inKeyframes: XR,
    outKeyframes: JR
  },
  "move-down": {
    inKeyframes: UR,
    outKeyframes: qR
  },
  "move-left": {
    inKeyframes: QR,
    outKeyframes: GR
  },
  "move-right": {
    inKeyframes: KR,
    outKeyframes: YR
  }
}, zh = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = ZR[t];
  return [Yg(n, o, i, e.motionDurationMid), {
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
}, Xg = new zt("antSlideUpIn", {
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
}), Jg = new zt("antSlideUpOut", {
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
}), Zg = new zt("antSlideDownIn", {
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
}), e0 = new zt("antSlideDownOut", {
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
}), eT = new zt("antSlideLeftIn", {
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
}), tT = new zt("antSlideLeftOut", {
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
}), rT = new zt("antSlideRightIn", {
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
}), nT = new zt("antSlideRightOut", {
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
}), oT = {
  "slide-up": {
    inKeyframes: Xg,
    outKeyframes: Jg
  },
  "slide-down": {
    inKeyframes: Zg,
    outKeyframes: e0
  },
  "slide-left": {
    inKeyframes: eT,
    outKeyframes: tT
  },
  "slide-right": {
    inKeyframes: rT,
    outKeyframes: nT
  }
}, Hh = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = oT[t];
  return [Yg(n, o, i, e.motionDurationMid), {
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
function iT(e) {
  return function(r) {
    return /* @__PURE__ */ v.createElement(jl, {
      theme: {
        token: {
          motion: !1,
          zIndexPopupBase: 0
        }
      }
    }, /* @__PURE__ */ v.createElement(e, Object.assign({}, r)));
  };
}
function aT(e, t, r, n) {
  function o(i) {
    const {
      prefixCls: a,
      style: s
    } = i, c = v.useRef(null), [u, l] = v.useState(0), [f, d] = v.useState(0), [h, m] = Ia(!1, {
      value: i.open
    }), {
      getPrefixCls: p
    } = v.useContext(ir), g = p(t || "select", a);
    v.useEffect(() => {
      if (m(!0), typeof ResizeObserver < "u") {
        const y = new ResizeObserver((w) => {
          const E = w[0].target;
          l(E.offsetHeight + 8), d(E.offsetWidth);
        }), S = setInterval(() => {
          var w;
          const E = r ? `.${r(g)}` : `.${g}-dropdown`, C = (w = c.current) === null || w === void 0 ? void 0 : w.querySelector(E);
          C && (clearInterval(S), y.observe(C));
        }, 10);
        return () => {
          clearInterval(S), y.disconnect();
        };
      }
    }, []);
    let b = Object.assign(Object.assign({}, i), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: h,
      visible: h,
      getPopupContainer: () => c.current
    });
    return n && (b = n(b)), /* @__PURE__ */ v.createElement("div", {
      ref: c,
      style: {
        paddingBottom: u,
        position: "relative",
        minWidth: f
      }
    }, /* @__PURE__ */ v.createElement(e, Object.assign({}, b)));
  }
  return iT(o);
}
const t0 = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var r0 = /* @__PURE__ */ v.createContext(null);
function sT() {
  return v.useContext(r0);
}
function cT() {
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
function n0() {
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
function uT(e, t, r, n) {
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
var lT = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Yn = void 0;
function fT(e, t) {
  var r = e.prefixCls, n = e.invalidate, o = e.item, i = e.renderItem, a = e.responsive, s = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, l = e.className, f = e.style, d = e.children, h = e.display, m = e.order, p = e.component, g = p === void 0 ? "div" : p, b = Ct(e, lT), y = a && !h;
  function S(T) {
    c(u, T);
  }
  v.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var w = i && o !== Yn ? i(o) : d, E;
  n || (E = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Yn,
    overflowY: y ? "hidden" : Yn,
    order: a ? m : Yn,
    pointerEvents: y ? "none" : Yn,
    position: y ? "absolute" : Yn
  });
  var C = {};
  y && (C["aria-hidden"] = !0);
  var O = /* @__PURE__ */ v.createElement(g, Ae({
    className: Ie(!n && r, l),
    style: W(W({}, E), f)
  }, C, b, {
    ref: t
  }), w);
  return a && (O = /* @__PURE__ */ v.createElement(Fn, {
    onResize: function(P) {
      var x = P.offsetWidth;
      S(x);
    },
    disabled: s
  }, O)), O;
}
var ni = /* @__PURE__ */ v.forwardRef(fT);
ni.displayName = "Item";
function dT(e) {
  if (typeof MessageChannel > "u")
    Dt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function hT() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], dT(function() {
      J0(function() {
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
var ja = /* @__PURE__ */ Pe.createContext(null), vT = ["component"], pT = ["className"], mT = ["className"], gT = function(t, r) {
  var n = v.useContext(ja);
  if (!n) {
    var o = t.component, i = o === void 0 ? "div" : o, a = Ct(t, vT);
    return /* @__PURE__ */ v.createElement(i, Ae({}, a, {
      ref: r
    }));
  }
  var s = n.className, c = Ct(n, pT), u = t.className, l = Ct(t, mT);
  return /* @__PURE__ */ v.createElement(ja.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(ni, Ae({
    ref: r,
    className: Ie(s, u)
  }, c, l)));
}, o0 = /* @__PURE__ */ v.forwardRef(gT);
o0.displayName = "RawItem";
var yT = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], i0 = "responsive", a0 = "invalidate";
function bT(e) {
  return "+ ".concat(e.length, " ...");
}
function ET(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, o = e.data, i = o === void 0 ? [] : o, a = e.renderItem, s = e.renderRawItem, c = e.itemKey, u = e.itemWidth, l = u === void 0 ? 10 : u, f = e.ssr, d = e.style, h = e.className, m = e.maxCount, p = e.renderRest, g = e.renderRawRest, b = e.suffix, y = e.component, S = y === void 0 ? "div" : y, w = e.itemComponent, E = e.onVisibleChange, C = Ct(e, yT), O = f === "full", T = hT(), P = qo(T, null), x = G(P, 2), L = x[0], R = x[1], _ = L || 0, N = qo(T, /* @__PURE__ */ new Map()), D = G(N, 2), A = D[0], F = D[1], B = qo(T, 0), q = G(B, 2), ne = q[0], se = q[1], k = qo(T, 0), H = G(k, 2), j = H[0], K = H[1], M = qo(T, 0), Q = G(M, 2), $ = Q[0], X = Q[1], re = dr(null), J = G(re, 2), I = J[0], Z = J[1], V = dr(null), ee = G(V, 2), fe = ee[0], ae = ee[1], ve = v.useMemo(function() {
    return fe === null && O ? Number.MAX_SAFE_INTEGER : fe || 0;
  }, [fe, L]), me = dr(!1), oe = G(me, 2), de = oe[0], Ne = oe[1], Me = "".concat(n, "-item"), ue = Math.max(ne, j), ge = m === i0, ze = i.length && ge, qe = m === a0, nt = ze || typeof m == "number" && i.length > m, Qe = vo(function() {
    var we = i;
    return ze ? L === null && O ? we = i : we = i.slice(0, Math.min(i.length, _ / l)) : typeof m == "number" && (we = i.slice(0, m)), we;
  }, [i, l, L, m, ze]), Ge = vo(function() {
    return ze ? i.slice(ve + 1) : i.slice(Qe.length);
  }, [i, Qe, ze, ve]), st = mc(function(we, Y) {
    var ie;
    return typeof c == "function" ? c(we) : (ie = c && we?.[c]) !== null && ie !== void 0 ? ie : Y;
  }, [c]), Xt = mc(a || function(we) {
    return we;
  }, [a]);
  function ot(we, Y, ie) {
    fe === we && (Y === void 0 || Y === I) || (ae(we), ie || (Ne(we < i.length - 1), E?.(we)), Y !== void 0 && Z(Y));
  }
  function he(we, Y) {
    R(Y.clientWidth);
  }
  function Se(we, Y) {
    F(function(ie) {
      var le = new Map(ie);
      return Y === null ? le.delete(we) : le.set(we, Y), le;
    });
  }
  function Be(we, Y) {
    K(Y), se(j);
  }
  function mt(we, Y) {
    X(Y);
  }
  function ke(we) {
    return A.get(st(Qe[we], we));
  }
  Rt(function() {
    if (_ && typeof ue == "number" && Qe) {
      var we = $, Y = Qe.length, ie = Y - 1;
      if (!Y) {
        ot(0, null);
        return;
      }
      for (var le = 0; le < Y; le += 1) {
        var be = ke(le);
        if (O && (be = be || 0), be === void 0) {
          ot(le - 1, void 0, !0);
          break;
        }
        if (we += be, // Only one means `totalWidth` is the final width
        ie === 0 && we <= _ || // Last two width will be the final width
        le === ie - 1 && we + ke(ie) <= _) {
          ot(ie, null);
          break;
        } else if (we + ue > _) {
          ot(le - 1, we - be - $ + j);
          break;
        }
      }
      b && ke(0) + $ > _ && Z(null);
    }
  }, [_, A, j, $, st, Qe]);
  var Ke = de && !!Ge.length, Oe = {};
  I !== null && ze && (Oe = {
    position: "absolute",
    left: I,
    top: 0
  });
  var lt = {
    prefixCls: Me,
    responsive: ze,
    component: w,
    invalidate: qe
  }, Tt = s ? function(we, Y) {
    var ie = st(we, Y);
    return /* @__PURE__ */ v.createElement(ja.Provider, {
      key: ie,
      value: W(W({}, lt), {}, {
        order: Y,
        item: we,
        itemKey: ie,
        registerSize: Se,
        display: Y <= ve
      })
    }, s(we, Y));
  } : function(we, Y) {
    var ie = st(we, Y);
    return /* @__PURE__ */ v.createElement(ni, Ae({}, lt, {
      order: Y,
      key: ie,
      item: we,
      renderItem: Xt,
      itemKey: ie,
      registerSize: Se,
      display: Y <= ve
    }));
  }, xe, We = {
    order: Ke ? ve : Number.MAX_SAFE_INTEGER,
    className: "".concat(Me, "-rest"),
    registerSize: Be,
    display: Ke
  };
  if (g)
    g && (xe = /* @__PURE__ */ v.createElement(ja.Provider, {
      value: W(W({}, lt), We)
    }, g(Ge)));
  else {
    var ft = p || bT;
    xe = /* @__PURE__ */ v.createElement(ni, Ae({}, lt, We), typeof ft == "function" ? ft(Ge) : ft);
  }
  var pt = /* @__PURE__ */ v.createElement(S, Ae({
    className: Ie(!qe && n, h),
    style: d,
    ref: t
  }, C), Qe.map(Tt), nt ? xe : null, b && /* @__PURE__ */ v.createElement(ni, Ae({}, lt, {
    responsive: ge,
    responsiveDisabled: !ze,
    order: ve,
    className: "".concat(Me, "-suffix"),
    registerSize: mt,
    display: !0,
    style: Oe
  }), b));
  return ge && (pt = /* @__PURE__ */ v.createElement(Fn, {
    onResize: he,
    disabled: !ze
  }, pt)), pt;
}
var Pi = /* @__PURE__ */ v.forwardRef(ET);
Pi.displayName = "Overflow";
Pi.Item = o0;
Pi.RESPONSIVE = i0;
Pi.INVALIDATE = a0;
var ys = function(t) {
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
    className: Ie(r.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, s));
}, ST = function(t, r) {
  var n, o, i = t.prefixCls, a = t.id, s = t.inputElement, c = t.disabled, u = t.tabIndex, l = t.autoFocus, f = t.autoComplete, d = t.editable, h = t.activeDescendantId, m = t.value, p = t.maxLength, g = t.onKeyDown, b = t.onMouseDown, y = t.onChange, S = t.onPaste, w = t.onCompositionStart, E = t.onCompositionEnd, C = t.open, O = t.attrs, T = s || /* @__PURE__ */ v.createElement("input", null), P = T, x = P.ref, L = P.props, R = L.onKeyDown, _ = L.onChange, N = L.onMouseDown, D = L.onCompositionStart, A = L.onCompositionEnd, F = L.style;
  return ui(!("maxLength" in T.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), T = /* @__PURE__ */ v.cloneElement(T, W(W(W({
    type: "search"
  }, L), {}, {
    // Override over origin props
    id: a,
    ref: Po(r, x),
    disabled: c,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: l,
    className: Ie("".concat(i, "-selection-search-input"), (n = T) === null || n === void 0 || (o = n.props) === null || o === void 0 ? void 0 : o.className),
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
    style: W(W({}, F), {}, {
      opacity: d ? null : 0
    }),
    onKeyDown: function(q) {
      g(q), R && R(q);
    },
    onMouseDown: function(q) {
      b(q), N && N(q);
    },
    onChange: function(q) {
      y(q), _ && _(q);
    },
    onCompositionStart: function(q) {
      w(q), D && D(q);
    },
    onCompositionEnd: function(q) {
      E(q), A && A(q);
    },
    onPaste: S
  })), T;
}, Yl = /* @__PURE__ */ v.forwardRef(ST);
Yl.displayName = "Input";
function Xl(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var wT = typeof window < "u" && window.document && window.document.documentElement, CT = process.env.NODE_ENV !== "test" && wT;
function OT(e) {
  return e != null;
}
function _T(e) {
  return !e && e !== 0;
}
function Bh(e) {
  return ["string", "number"].includes(He(e));
}
function s0(e) {
  var t = void 0;
  return e && (Bh(e.title) ? t = e.title.toString() : Bh(e.label) && (t = e.label.toString())), t;
}
function xT(e, t) {
  CT ? v.useLayoutEffect(e, t) : v.useEffect(e, t);
}
function RT(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var Wh = function(t) {
  t.preventDefault(), t.stopPropagation();
}, TT = function(t) {
  var r = t.id, n = t.prefixCls, o = t.values, i = t.open, a = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, l = t.disabled, f = t.mode, d = t.showSearch, h = t.autoFocus, m = t.autoComplete, p = t.activeDescendantId, g = t.tabIndex, b = t.removeIcon, y = t.maxTagCount, S = t.maxTagTextLength, w = t.maxTagPlaceholder, E = w === void 0 ? function(Z) {
    return "+ ".concat(Z.length, " ...");
  } : w, C = t.tagRender, O = t.onToggleOpen, T = t.onRemove, P = t.onInputChange, x = t.onInputPaste, L = t.onInputKeyDown, R = t.onInputMouseDown, _ = t.onInputCompositionStart, N = t.onInputCompositionEnd, D = v.useRef(null), A = dr(0), F = G(A, 2), B = F[0], q = F[1], ne = dr(!1), se = G(ne, 2), k = se[0], H = se[1], j = "".concat(n, "-selection"), K = i || f === "multiple" && s === !1 || f === "tags" ? a : "", M = f === "tags" || f === "multiple" && s === !1 || d && (i || k);
  xT(function() {
    q(D.current.scrollWidth);
  }, [K]);
  function Q(Z, V, ee, fe, ae) {
    return /* @__PURE__ */ v.createElement("span", {
      className: Ie("".concat(j, "-item"), ye({}, "".concat(j, "-item-disabled"), ee)),
      title: s0(Z)
    }, /* @__PURE__ */ v.createElement("span", {
      className: "".concat(j, "-item-content")
    }, V), fe && /* @__PURE__ */ v.createElement(ys, {
      className: "".concat(j, "-item-remove"),
      onMouseDown: Wh,
      onClick: ae,
      customizeIcon: b
    }, "×"));
  }
  function $(Z, V, ee, fe, ae) {
    var ve = function(oe) {
      Wh(oe), O(!i);
    };
    return /* @__PURE__ */ v.createElement("span", {
      onMouseDown: ve
    }, C({
      label: V,
      value: Z,
      disabled: ee,
      closable: fe,
      onClose: ae
    }));
  }
  function X(Z) {
    var V = Z.disabled, ee = Z.label, fe = Z.value, ae = !l && !V, ve = ee;
    if (typeof S == "number" && (typeof ee == "string" || typeof ee == "number")) {
      var me = String(ve);
      me.length > S && (ve = "".concat(me.slice(0, S), "..."));
    }
    var oe = function(Ne) {
      Ne && Ne.stopPropagation(), T(Z);
    };
    return typeof C == "function" ? $(fe, ve, V, ae, oe) : Q(Z, ve, V, ae, oe);
  }
  function re(Z) {
    var V = typeof E == "function" ? E(Z) : E;
    return Q({
      title: V
    }, V, !1);
  }
  var J = /* @__PURE__ */ v.createElement("div", {
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
  }, /* @__PURE__ */ v.createElement(Yl, {
    ref: c,
    open: i,
    prefixCls: n,
    id: r,
    inputElement: null,
    disabled: l,
    autoFocus: h,
    autoComplete: m,
    editable: M,
    activeDescendantId: p,
    value: K,
    onKeyDown: L,
    onMouseDown: R,
    onChange: P,
    onPaste: x,
    onCompositionStart: _,
    onCompositionEnd: N,
    tabIndex: g,
    attrs: Fa(t, !0)
  }), /* @__PURE__ */ v.createElement("span", {
    ref: D,
    className: "".concat(j, "-search-mirror"),
    "aria-hidden": !0
  }, K, " ")), I = /* @__PURE__ */ v.createElement(Pi, {
    prefixCls: "".concat(j, "-overflow"),
    data: o,
    renderItem: X,
    renderRest: re,
    suffix: J,
    itemKey: RT,
    maxCount: y
  });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, I, !o.length && !K && /* @__PURE__ */ v.createElement("span", {
    className: "".concat(j, "-placeholder")
  }, u));
}, PT = function(t) {
  var r = t.inputElement, n = t.prefixCls, o = t.id, i = t.inputRef, a = t.disabled, s = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, l = t.mode, f = t.open, d = t.values, h = t.placeholder, m = t.tabIndex, p = t.showSearch, g = t.searchValue, b = t.activeValue, y = t.maxLength, S = t.onInputKeyDown, w = t.onInputMouseDown, E = t.onInputChange, C = t.onInputPaste, O = t.onInputCompositionStart, T = t.onInputCompositionEnd, P = t.title, x = v.useState(!1), L = G(x, 2), R = L[0], _ = L[1], N = l === "combobox", D = N || p, A = d[0], F = g || "";
  N && b && !R && (F = b), v.useEffect(function() {
    N && _(!1);
  }, [N, b]);
  var B = l !== "combobox" && !f && !p ? !1 : !!F, q = P === void 0 ? s0(A) : P, ne = function() {
    if (A)
      return null;
    var k = B ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ v.createElement("span", {
      className: "".concat(n, "-selection-placeholder"),
      style: k
    }, h);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-search")
  }, /* @__PURE__ */ v.createElement(Yl, {
    ref: i,
    prefixCls: n,
    id: o,
    open: f,
    inputElement: r,
    disabled: a,
    autoFocus: s,
    autoComplete: c,
    editable: D,
    activeDescendantId: u,
    value: F,
    onKeyDown: S,
    onMouseDown: w,
    onChange: function(k) {
      _(!0), E(k);
    },
    onPaste: C,
    onCompositionStart: O,
    onCompositionEnd: T,
    tabIndex: m,
    attrs: Fa(t, !0),
    maxLength: N ? y : void 0
  })), !N && A ? /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: q,
    style: B ? {
      visibility: "hidden"
    } : void 0
  }, A.label) : null, ne());
};
function NT(e) {
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
var IT = function(t, r) {
  var n = $e(null), o = $e(!1), i = t.prefixCls, a = t.open, s = t.mode, c = t.showSearch, u = t.tokenWithEnter, l = t.autoClearSearchValue, f = t.onSearch, d = t.onSearchSubmit, h = t.onToggleOpen, m = t.onInputKeyDown, p = t.domRef;
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
  var g = n0(0), b = G(g, 2), y = b[0], S = b[1], w = function(F) {
    var B = F.which;
    (B === te.UP || B === te.DOWN) && F.preventDefault(), m && m(F), B === te.ENTER && s === "tags" && !o.current && !a && d?.(F.target.value), NT(B) && h(!0);
  }, E = function() {
    S(!0);
  }, C = $e(null), O = function(F) {
    f(F, !0, o.current) !== !1 && h(!0);
  }, T = function() {
    o.current = !0;
  }, P = function(F) {
    o.current = !1, s !== "combobox" && O(F.target.value);
  }, x = function(F) {
    var B = F.target.value;
    if (u && C.current && /[\r\n]/.test(C.current)) {
      var q = C.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      B = B.replace(q, C.current);
    }
    C.current = null, O(B);
  }, L = function(F) {
    var B = F.clipboardData, q = B.getData("text");
    C.current = q;
  }, R = function(F) {
    var B = F.target;
    if (B !== n.current) {
      var q = document.body.style.msTouchAction !== void 0;
      q ? setTimeout(function() {
        n.current.focus();
      }) : n.current.focus();
    }
  }, _ = function(F) {
    var B = y();
    F.target !== n.current && !B && s !== "combobox" && F.preventDefault(), (s !== "combobox" && (!c || !B) || !a) && (a && l !== !1 && f("", !0, !1), h());
  }, N = {
    inputRef: n,
    onInputKeyDown: w,
    onInputMouseDown: E,
    onInputChange: x,
    onInputPaste: L,
    onInputCompositionStart: T,
    onInputCompositionEnd: P
  }, D = s === "multiple" || s === "tags" ? /* @__PURE__ */ v.createElement(TT, Ae({}, t, N)) : /* @__PURE__ */ v.createElement(PT, Ae({}, t, N));
  return /* @__PURE__ */ v.createElement("div", {
    ref: p,
    className: "".concat(i, "-selector"),
    onClick: R,
    onMouseDown: _
  }, D);
}, c0 = /* @__PURE__ */ v.forwardRef(IT);
c0.displayName = "Selector";
var Uh = /* @__PURE__ */ v.createContext(null);
function qh(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function MT(e, t, r, n) {
  return v.useMemo(function() {
    var o = qh(r ?? t), i = qh(n ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
function AT() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function DT(e, t, r, n) {
  for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, c = i[a];
    if (AT((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function Qh(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Ni(e) {
  return e.ownerDocument.defaultView;
}
function $u(e) {
  for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = Ni(r).getComputedStyle(r), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function vi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Qo(e) {
  return vi(parseFloat(e), 0);
}
function Gh(e, t) {
  var r = W({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement)) {
      var o = Ni(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, u = o.borderLeftWidth, l = o.borderRightWidth, f = n.getBoundingClientRect(), d = n.offsetHeight, h = n.clientHeight, m = n.offsetWidth, p = n.clientWidth, g = Qo(s), b = Qo(c), y = Qo(u), S = Qo(l), w = vi(Math.round(f.width / m * 1e3) / 1e3), E = vi(Math.round(f.height / d * 1e3) / 1e3), C = (m - p - y - S) * w, O = (d - h - g - b) * E, T = g * E, P = b * E, x = y * w, L = S * w, R = 0, _ = 0;
      if (i === "clip") {
        var N = Qo(a);
        R = N * w, _ = N * E;
      }
      var D = f.x + x - R, A = f.y + T - _, F = D + f.width + 2 * R - x - L - C, B = A + f.height + 2 * _ - T - P - O;
      r.left = Math.max(r.left, D), r.top = Math.max(r.top, A), r.right = Math.min(r.right, F), r.bottom = Math.min(r.bottom, B);
    }
  }), r;
}
function Kh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Yh(e, t) {
  var r = t || [], n = G(r, 2), o = n[0], i = n[1];
  return [Kh(e.width, o), Kh(e.height, i)];
}
function Xh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Xn(e, t) {
  var r = t[0], n = t[1], o, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function Zr(e, t) {
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
function FT(e, t, r, n, o, i, a) {
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
    return t ? $u(t) : [];
  }, [t]), h = v.useRef({}), m = function() {
    h.current = {};
  };
  e || m();
  var p = Tr(function() {
    if (t && r && e) {
      let it = function(Zt, nr) {
        var er = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ee, zr = R.x + Zt, Lo = R.y + nr, jo = zr + j, Ii = Lo + H, Ss = Math.max(zr, er.left), ws = Math.max(Lo, er.top), Cs = Math.min(jo, er.right), Os = Math.min(Ii, er.bottom);
        return Math.max(0, (Cs - Ss) * (Os - ws));
      }, Cr = function() {
        Re = R.y + Oe, Qt = Re + H, It = R.x + Ke, Ht = It + j;
      };
      var y = t, S = y.style.left, w = y.style.top, E = y.style.right, C = y.style.bottom, O = y.ownerDocument, T = Ni(y), P = W(W({}, o[n]), i);
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
      var R = y.getBoundingClientRect(), _ = T.getComputedStyle(y), N = _.width, D = _.height, A = O.documentElement, F = A.clientWidth, B = A.clientHeight, q = A.scrollWidth, ne = A.scrollHeight, se = A.scrollTop, k = A.scrollLeft, H = R.height, j = R.width, K = x.height, M = x.width, Q = {
        left: 0,
        top: 0,
        right: F,
        bottom: B
      }, $ = {
        left: -k,
        top: -se,
        right: q - k,
        bottom: ne - se
      }, X = P.htmlRegion, re = "visible", J = "visibleFirst";
      X !== "scroll" && X !== J && (X = re);
      var I = X === J, Z = Gh($, d), V = Gh(Q, d), ee = X === re ? V : Z, fe = I ? V : ee;
      y.style.left = "auto", y.style.top = "auto", y.style.right = "0", y.style.bottom = "0";
      var ae = y.getBoundingClientRect();
      y.style.left = S, y.style.top = w, y.style.right = E, y.style.bottom = C;
      var ve = vi(Math.round(j / parseFloat(N) * 1e3) / 1e3), me = vi(Math.round(H / parseFloat(D) * 1e3) / 1e3);
      if (ve === 0 || me === 0 || _a(r) && !Mg(r))
        return;
      var oe = P.offset, de = P.targetOffset, Ne = Yh(R, oe), Me = G(Ne, 2), ue = Me[0], ge = Me[1], ze = Yh(x, de), qe = G(ze, 2), nt = qe[0], Qe = qe[1];
      x.x -= nt, x.y -= Qe;
      var Ge = P.points || [], st = G(Ge, 2), Xt = st[0], ot = st[1], he = Xh(ot), Se = Xh(Xt), Be = Xn(x, he), mt = Xn(R, Se), ke = W({}, P), Ke = Be.x - mt.x + ue, Oe = Be.y - mt.y + ge, lt = it(Ke, Oe), Tt = it(Ke, Oe, V), xe = Xn(x, ["t", "l"]), We = Xn(R, ["t", "l"]), ft = Xn(x, ["b", "r"]), pt = Xn(R, ["b", "r"]), we = P.overflow || {}, Y = we.adjustX, ie = we.adjustY, le = we.shiftX, be = we.shiftY, Le = function(nr) {
        return typeof nr == "boolean" ? nr : nr >= 0;
      }, Re, Qt, It, Ht;
      Cr();
      var ht = Le(ie), sr = Se[0] === he[0];
      if (ht && Se[0] === "t" && (Qt > fe.bottom || h.current.bt)) {
        var Gt = Oe;
        sr ? Gt -= H - K : Gt = xe.y - pt.y - ge;
        var kr = it(Ke, Gt), jn = it(Ke, Gt, V);
        // Of course use larger one
        kr > lt || kr === lt && (!I || // Choose recommend one
        jn >= Tt) ? (h.current.bt = !0, Oe = Gt, ke.points = [Zr(Se, 0), Zr(he, 0)]) : h.current.bt = !1;
      }
      if (ht && Se[0] === "b" && (Re < fe.top || h.current.tb)) {
        var kt = Oe;
        sr ? kt += H - K : kt = ft.y - We.y - ge;
        var rr = it(Ke, kt), Jt = it(Ke, kt, V);
        // Of course use larger one
        rr > lt || rr === lt && (!I || // Choose recommend one
        Jt >= Tt) ? (h.current.tb = !0, Oe = kt, ke.points = [Zr(Se, 0), Zr(he, 0)]) : h.current.tb = !1;
      }
      var wr = Le(Y), Vn = Se[1] === he[1];
      if (wr && Se[1] === "l" && (Ht > fe.right || h.current.rl)) {
        var Lr = Ke;
        Vn ? Lr -= j - M : Lr = xe.x - pt.x - ue;
        var dn = it(Lr, Oe), zn = it(Lr, Oe, V);
        // Of course use larger one
        dn > lt || dn === lt && (!I || // Choose recommend one
        zn >= Tt) ? (h.current.rl = !0, Ke = Lr, ke.points = [Zr(Se, 1), Zr(he, 1)]) : h.current.rl = !1;
      }
      if (wr && Se[1] === "r" && (It < fe.left || h.current.lr)) {
        var jr = Ke;
        Vn ? jr += j - M : jr = ft.x - We.x - ue;
        var Hn = it(jr, Oe), Do = it(jr, Oe, V);
        // Of course use larger one
        Hn > lt || Hn === lt && (!I || // Choose recommend one
        Do >= Tt) ? (h.current.lr = !0, Ke = jr, ke.points = [Zr(Se, 1), Zr(he, 1)]) : h.current.lr = !1;
      }
      Cr();
      var Vr = le === !0 ? 0 : le;
      typeof Vr == "number" && (It < V.left && (Ke -= It - V.left, x.x + M < V.left + Vr && (Ke += x.x - V.left + M - Vr)), Ht > V.right && (Ke -= Ht - V.right, x.x > V.right - Vr && (Ke += x.x - V.right + Vr)));
      var vr = be === !0 ? 0 : be;
      typeof vr == "number" && (Re < V.top && (Oe -= Re - V.top + ge, x.y + K < V.top + vr && (Oe += x.y - V.top + K - vr)), Qt > V.bottom && (Oe -= Qt - V.bottom - ge, x.y > V.bottom - vr && (Oe += x.y - V.bottom + vr)));
      var Mr = R.x + Ke, Ar = Mr + j, Xr = R.y + Oe, Bn = Xr + H, Wn = x.x, Un = Wn + M, hn = x.y, Fo = hn + K, $o = Math.max(Mr, Wn), ko = Math.min(Ar, Un), vn = ($o + ko) / 2, pn = vn - Mr, Te = Math.max(Xr, hn), _e = Math.min(Bn, Fo), Pt = (Te + _e) / 2, Mt = Pt - Xr;
      a?.(t, ke);
      var dt = ae.right - R.x - (Ke + R.width), Ot = ae.bottom - R.y - (Oe + R.height);
      l({
        ready: !0,
        offsetX: Ke / ve,
        offsetY: Oe / me,
        offsetR: dt / ve,
        offsetB: Ot / me,
        arrowX: pn / ve,
        arrowY: Mt / me,
        scaleX: ve,
        scaleY: me,
        align: ke
      });
    }
  }), g = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && p();
    });
  }, b = function() {
    l(function(S) {
      return W(W({}, S), {}, {
        ready: !1
      });
    });
  };
  return Rt(b, [n]), Rt(function() {
    e || b();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, g];
}
function $T(e, t, r, n) {
  Rt(function() {
    if (e && t && r) {
      let l = function() {
        n();
      };
      var o = t, i = r, a = $u(o), s = $u(i), c = Ni(i), u = new Set([c].concat(Ee(a), Ee(s)));
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
function kT(e, t, r, n, o, i, a, s) {
  var c = v.useRef(e), u = v.useRef(!1);
  c.current !== e && (u.current = !0, c.current = e), v.useEffect(function() {
    var l = Dt(function() {
      u.current = !1;
    });
    return function() {
      Dt.cancel(l);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!o || i)) {
      var l = function() {
        var x = !1, L = function(N) {
          var D = N.target;
          x = a(D);
        }, R = function(N) {
          var D = N.target;
          !u.current && c.current && !x && !a(D) && s(!1);
        };
        return [L, R];
      }, f = l(), d = G(f, 2), h = d[0], m = d[1], p = l(), g = G(p, 2), b = g[0], y = g[1], S = Ni(n);
      S.addEventListener("mousedown", h, !0), S.addEventListener("click", m, !0), S.addEventListener("contextmenu", m, !0);
      var w = Da(r);
      if (w && (w.addEventListener("mousedown", b, !0), w.addEventListener("click", y, !0), w.addEventListener("contextmenu", y, !0)), process.env.NODE_ENV !== "production") {
        var E, C, O = r == null || (E = r.getRootNode) === null || E === void 0 ? void 0 : E.call(r), T = (C = n.getRootNode) === null || C === void 0 ? void 0 : C.call(n);
        Fe(O === T, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        S.removeEventListener("mousedown", h, !0), S.removeEventListener("click", m, !0), S.removeEventListener("contextmenu", m, !0), w && (w.removeEventListener("mousedown", b, !0), w.removeEventListener("click", y, !0), w.removeEventListener("contextmenu", y, !0));
      };
    }
  }, [t, r, n, o, i]);
}
function LT(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, c = o.x, u = c === void 0 ? 0 : c, l = o.y, f = l === void 0 ? 0 : l, d = v.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var m = r.points[0], p = r.points[1], g = m[0], b = m[1], y = p[0], S = p[1];
    g === y || !["t", "b"].includes(g) ? h.top = f : g === "t" ? h.top = 0 : h.bottom = 0, b === S || !["l", "r"].includes(b) ? h.left = u : b === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: d,
    className: Ie("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function jT(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ v.createElement(_i, Ae({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ v.createElement("div", {
      style: {
        zIndex: n
      },
      className: Ie("".concat(t, "-mask"), s)
    });
  }) : null;
}
var u0 = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (u0.displayName = "PopupContent");
var l0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, u = e.keepDom, l = e.onClick, f = e.mask, d = e.arrow, h = e.arrowPos, m = e.align, p = e.motion, g = e.maskMotion, b = e.forceRender, y = e.getPopupContainer, S = e.autoDestroy, w = e.portal, E = e.zIndex, C = e.onMouseEnter, O = e.onMouseLeave, T = e.onPointerEnter, P = e.ready, x = e.offsetX, L = e.offsetY, R = e.offsetR, _ = e.offsetB, N = e.onAlign, D = e.onPrepare, A = e.stretch, F = e.targetWidth, B = e.targetHeight, q = typeof r == "function" ? r() : r, ne = c || u, se = y?.length > 0, k = v.useState(!y || !se), H = G(k, 2), j = H[0], K = H[1];
  if (Rt(function() {
    !j && se && a && K(!0);
  }, [j, se, a]), !j)
    return null;
  var M = "auto", Q = {
    left: "-1000vw",
    top: "-1000vh",
    right: M,
    bottom: M
  };
  if (P || !c) {
    var $ = m.points, X = m._experimental, re = X?.dynamicInset, J = re && $[0][1] === "r", I = re && $[0][0] === "b";
    J ? (Q.right = R, Q.left = M) : (Q.left = x, Q.right = M), I ? (Q.bottom = _, Q.top = M) : (Q.top = L, Q.bottom = M);
  }
  var Z = {};
  return A && (A.includes("height") && B ? Z.height = B : A.includes("minHeight") && B && (Z.minHeight = B), A.includes("width") && F ? Z.width = F : A.includes("minWidth") && F && (Z.minWidth = F)), c || (Z.pointerEvents = "none"), /* @__PURE__ */ v.createElement(w, {
    open: b || ne,
    getContainer: y && function() {
      return y(a);
    },
    autoDestroy: S
  }, /* @__PURE__ */ v.createElement(jT, {
    prefixCls: o,
    open: c,
    zIndex: E,
    mask: f,
    motion: g
  }), /* @__PURE__ */ v.createElement(Fn, {
    onResize: N,
    disabled: !c
  }, function(V) {
    return /* @__PURE__ */ v.createElement(_i, Ae({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(o, "-hidden")
    }, p, {
      onAppearPrepare: D,
      onEnterPrepare: D,
      visible: c,
      onVisibleChanged: function(fe) {
        var ae;
        p == null || (ae = p.onVisibleChanged) === null || ae === void 0 || ae.call(p, fe), s(fe);
      }
    }), function(ee, fe) {
      var ae = ee.className, ve = ee.style, me = Ie(o, ae, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: Po(V, t, fe),
        className: me,
        style: W(W(W(W({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, Q), Z), ve), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, i),
        onMouseEnter: C,
        onMouseLeave: O,
        onPointerEnter: T,
        onClick: l
      }, d && /* @__PURE__ */ v.createElement(LT, {
        prefixCls: o,
        arrow: d,
        arrowPos: h,
        align: m
      }), /* @__PURE__ */ v.createElement(u0, {
        cache: !c
      }, q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (l0.displayName = "Popup");
var f0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Ci(r), i = v.useCallback(function(s) {
    Cl(t, n ? n(s) : s);
  }, [n]), a = Ol(i, r.ref);
  return o ? /* @__PURE__ */ v.cloneElement(r, {
    ref: a
  }) : r;
});
process.env.NODE_ENV !== "production" && (f0.displayName = "TriggerWrapper");
var VT = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function zT() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gl, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var o = r.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = r.children, s = r.action, c = s === void 0 ? "hover" : s, u = r.showAction, l = r.hideAction, f = r.popupVisible, d = r.defaultPopupVisible, h = r.onPopupVisibleChange, m = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, b = g === void 0 ? 0.1 : g, y = r.focusDelay, S = r.blurDelay, w = r.mask, E = r.maskClosable, C = E === void 0 ? !0 : E, O = r.getPopupContainer, T = r.forceRender, P = r.autoDestroy, x = r.destroyPopupOnHide, L = r.popup, R = r.popupClassName, _ = r.popupStyle, N = r.popupPlacement, D = r.builtinPlacements, A = D === void 0 ? {} : D, F = r.popupAlign, B = r.zIndex, q = r.stretch, ne = r.getPopupClassNameFromAlign, se = r.alignPoint, k = r.onPopupClick, H = r.onPopupAlign, j = r.arrow, K = r.popupMotion, M = r.maskMotion, Q = r.popupTransitionName, $ = r.popupAnimation, X = r.maskTransitionName, re = r.maskAnimation, J = r.className, I = r.getTriggerDOMNode, Z = Ct(r, VT), V = P || x || !1, ee = v.useState(!1), fe = G(ee, 2), ae = fe[0], ve = fe[1];
    Rt(function() {
      ve(t0());
    }, []);
    var me = v.useRef({}), oe = v.useContext(Uh), de = v.useMemo(function() {
      return {
        registerSubPopup: function(De, gt) {
          me.current[De] = gt, oe?.registerSubPopup(De, gt);
        }
      };
    }, [oe]), Ne = qx(), Me = v.useState(null), ue = G(Me, 2), ge = ue[0], ze = ue[1], qe = Tr(function(Ce) {
      _a(Ce) && ge !== Ce && ze(Ce), oe?.registerSubPopup(Ne, Ce);
    }), nt = v.useState(null), Qe = G(nt, 2), Ge = Qe[0], st = Qe[1], Xt = Tr(function(Ce) {
      _a(Ce) && Ge !== Ce && st(Ce);
    }), ot = v.Children.only(a), he = ot?.props || {}, Se = {}, Be = Tr(function(Ce) {
      var De, gt, bt = Ge;
      return bt?.contains(Ce) || ((De = Da(bt)) === null || De === void 0 ? void 0 : De.host) === Ce || Ce === bt || ge?.contains(Ce) || ((gt = Da(ge)) === null || gt === void 0 ? void 0 : gt.host) === Ce || Ce === ge || Object.values(me.current).some(function(Et) {
        return Et?.contains(Ce) || Ce === Et;
      });
    }), mt = Qh(i, K, $, Q), ke = Qh(i, M, re, X), Ke = v.useState(d || !1), Oe = G(Ke, 2), lt = Oe[0], Tt = Oe[1], xe = f ?? lt, We = Tr(function(Ce) {
      f === void 0 && Tt(Ce);
    });
    Rt(function() {
      Tt(f || !1);
    }, [f]);
    var ft = v.useRef(xe);
    ft.current = xe;
    var pt = Tr(function(Ce) {
      Z0(function() {
        xe !== Ce && (We(Ce), h?.(Ce));
      });
    }), we = v.useRef(), Y = function() {
      clearTimeout(we.current);
    }, ie = function(De) {
      var gt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Y(), gt === 0 ? pt(De) : we.current = setTimeout(function() {
        pt(De);
      }, gt * 1e3);
    };
    v.useEffect(function() {
      return Y;
    }, []);
    var le = v.useState(!1), be = G(le, 2), Le = be[0], Re = be[1];
    Rt(function(Ce) {
      (!Ce || xe) && Re(!0);
    }, [xe]);
    var Qt = v.useState(null), It = G(Qt, 2), Ht = It[0], ht = It[1], sr = v.useState([0, 0]), Gt = G(sr, 2), kr = Gt[0], jn = Gt[1], kt = function(De) {
      jn([De.clientX, De.clientY]);
    }, rr = FT(xe, ge, se ? kr : Ge, N, A, F, H), Jt = G(rr, 11), wr = Jt[0], Vn = Jt[1], Lr = Jt[2], dn = Jt[3], zn = Jt[4], jr = Jt[5], Hn = Jt[6], Do = Jt[7], Vr = Jt[8], vr = Jt[9], Mr = Jt[10], Ar = Tr(function() {
      Le || Mr();
    });
    $T(xe, Ge, ge, Ar), Rt(function() {
      Ar();
    }, [kr, N]), Rt(function() {
      xe && !(A != null && A[N]) && Ar();
    }, [JSON.stringify(F)]);
    var Xr = v.useMemo(function() {
      var Ce = DT(A, i, vr, se);
      return Ie(Ce, ne?.(vr));
    }, [vr, ne, A, i, se]);
    v.useImperativeHandle(n, function() {
      return {
        forceAlign: Ar
      };
    });
    var Bn = function(De) {
      Re(!1), Mr(), m?.(De);
    }, Wn = function() {
      return new Promise(function(De) {
        ht(function() {
          return De;
        });
      });
    };
    Rt(function() {
      Ht && (Mr(), Ht(), ht(null));
    }, [Ht]);
    var Un = v.useState(0), hn = G(Un, 2), Fo = hn[0], $o = hn[1], ko = v.useState(0), vn = G(ko, 2), pn = vn[0], Te = vn[1], _e = function(De, gt) {
      if (Ar(), q) {
        var bt = gt.getBoundingClientRect();
        $o(bt.width), Te(bt.height);
      }
    }, Pt = MT(ae, c, u, l), Mt = G(Pt, 2), dt = Mt[0], Ot = Mt[1];
    function it(Ce, De, gt, bt) {
      Se[Ce] = function(Et) {
        var Mi;
        bt?.(Et), ie(De, gt);
        for (var _s = arguments.length, uf = new Array(_s > 1 ? _s - 1 : 0), Ai = 1; Ai < _s; Ai++)
          uf[Ai - 1] = arguments[Ai];
        (Mi = he[Ce]) === null || Mi === void 0 || Mi.call.apply(Mi, [he, Et].concat(uf));
      };
    }
    var Cr = dt.has("click"), Zt = Ot.has("click") || Ot.has("contextMenu");
    (Cr || Zt) && (Se.onClick = function(Ce) {
      var De;
      ft.current && Zt ? ie(!1) : !ft.current && Cr && (kt(Ce), ie(!0));
      for (var gt = arguments.length, bt = new Array(gt > 1 ? gt - 1 : 0), Et = 1; Et < gt; Et++)
        bt[Et - 1] = arguments[Et];
      (De = he.onClick) === null || De === void 0 || De.call.apply(De, [he, Ce].concat(bt));
    }), kT(xe, Zt, Ge, ge, w, C, Be, ie);
    var nr = dt.has("hover"), er = Ot.has("hover"), zr, Lo;
    nr && (it("onMouseEnter", !0, p, function(Ce) {
      kt(Ce);
    }), it("onPointerEnter", !0, p, function(Ce) {
      kt(Ce);
    }), zr = function() {
      (xe || Le) && ie(!0, p);
    }, se && (Se.onMouseMove = function(Ce) {
      var De;
      (De = he.onMouseMove) === null || De === void 0 || De.call(he, Ce);
    })), er && (it("onMouseLeave", !1, b), it("onPointerLeave", !1, b), Lo = function() {
      ie(!1, b);
    }), dt.has("focus") && it("onFocus", !0, y), Ot.has("focus") && it("onBlur", !1, S), dt.has("contextMenu") && (Se.onContextMenu = function(Ce) {
      var De;
      ft.current && Ot.has("contextMenu") ? ie(!1) : (kt(Ce), ie(!0)), Ce.preventDefault();
      for (var gt = arguments.length, bt = new Array(gt > 1 ? gt - 1 : 0), Et = 1; Et < gt; Et++)
        bt[Et - 1] = arguments[Et];
      (De = he.onContextMenu) === null || De === void 0 || De.call.apply(De, [he, Ce].concat(bt));
    }), J && (Se.className = Ie(he.className, J));
    var jo = W(W({}, he), Se), Ii = {}, Ss = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ss.forEach(function(Ce) {
      Z[Ce] && (Ii[Ce] = function() {
        for (var De, gt = arguments.length, bt = new Array(gt), Et = 0; Et < gt; Et++)
          bt[Et] = arguments[Et];
        (De = jo[Ce]) === null || De === void 0 || De.call.apply(De, [jo].concat(bt)), Z[Ce].apply(Z, bt);
      });
    });
    var ws = /* @__PURE__ */ v.cloneElement(ot, W(W({}, jo), Ii)), Cs = {
      x: jr,
      y: Hn
    }, Os = j ? W({}, j !== !0 ? j : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(Fn, {
      disabled: !xe,
      ref: Xt,
      onResize: _e
    }, /* @__PURE__ */ v.createElement(f0, {
      getTriggerDOMNode: I
    }, ws)), /* @__PURE__ */ v.createElement(Uh.Provider, {
      value: de
    }, /* @__PURE__ */ v.createElement(l0, {
      portal: e,
      ref: qe,
      prefixCls: i,
      popup: L,
      className: Ie(R, Xr),
      style: _,
      target: Ge,
      onMouseEnter: zr,
      onMouseLeave: Lo,
      onPointerEnter: zr,
      zIndex: B,
      open: xe,
      keepDom: Le,
      onClick: k,
      mask: w,
      motion: mt,
      maskMotion: ke,
      onVisibleChanged: Bn,
      onPrepare: Wn,
      forceRender: T,
      autoDestroy: V,
      getPopupContainer: O,
      align: vr,
      arrow: Os,
      arrowPos: Cs,
      ready: wr,
      offsetX: Vn,
      offsetY: Lr,
      offsetR: dn,
      offsetB: zn,
      onAlign: Ar,
      stretch: q,
      targetWidth: Fo / Do,
      targetHeight: pn / Vr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const HT = zT(Gl);
var BT = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], WT = function(t) {
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
}, UT = function(t, r) {
  var n = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, a = t.popupElement, s = t.containerWidth, c = t.animation, u = t.transitionName, l = t.dropdownStyle, f = t.dropdownClassName, d = t.direction, h = d === void 0 ? "ltr" : d, m = t.placement, p = t.builtinPlacements, g = t.dropdownMatchSelectWidth, b = t.dropdownRender, y = t.dropdownAlign, S = t.getPopupContainer, w = t.empty, E = t.getTriggerDOMNode, C = t.onPopupVisibleChange, O = t.onPopupMouseEnter, T = Ct(t, BT), P = "".concat(n, "-dropdown"), x = a;
  b && (x = b(a));
  var L = v.useMemo(function() {
    return p || WT(g);
  }, [p, g]), R = c ? "".concat(P, "-").concat(c) : u, _ = v.useRef(null);
  v.useImperativeHandle(r, function() {
    return {
      getPopupElement: function() {
        return _.current;
      }
    };
  });
  var N = W({
    minWidth: s
  }, l);
  return typeof g == "number" ? N.width = g : g && (N.width = s), /* @__PURE__ */ v.createElement(HT, Ae({}, T, {
    showAction: C ? ["click"] : [],
    hideAction: C ? ["click"] : [],
    popupPlacement: m || (h === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: L,
    prefixCls: P,
    popupTransitionName: R,
    popup: /* @__PURE__ */ v.createElement("div", {
      ref: _,
      onMouseEnter: O
    }, x),
    popupAlign: y,
    popupVisible: o,
    getPopupContainer: S,
    popupClassName: Ie(f, ye({}, "".concat(P, "-empty"), w)),
    popupStyle: N,
    getTriggerDOMNode: E,
    onPopupVisibleChange: C
  }), i);
}, d0 = /* @__PURE__ */ v.forwardRef(UT);
d0.displayName = "SelectTrigger";
function Jh(e, t) {
  var r = e.key, n;
  return "value" in e && (n = e.value), r ?? (n !== void 0 ? n : "rc-index-key-".concat(t));
}
function h0(e, t) {
  var r = e || {}, n = r.label, o = r.value, i = r.options, a = r.groupLabel, s = n || (t ? "children" : "label");
  return {
    label: s,
    value: o || "value",
    options: i || "options",
    groupLabel: a || s
  };
}
function qT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fieldNames, n = t.childrenAsData, o = [], i = h0(r, !1), a = i.label, s = i.value, c = i.options, u = i.groupLabel;
  function l(f, d) {
    f.forEach(function(h) {
      if (d || !(c in h)) {
        var m = h[s];
        o.push({
          key: Jh(h, o.length),
          groupOption: d,
          data: h,
          label: h[a],
          value: m
        });
      } else {
        var p = h[u];
        p === void 0 && n && (p = h.label), o.push({
          key: Jh(h, o.length),
          group: !0,
          data: h,
          label: p
        }), l(h[c], !0);
      }
    });
  }
  return l(e, !1), o;
}
function ku(e) {
  var t = W({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return Fe(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function QT(e, t) {
  if (!t || !t.length)
    return null;
  var r = !1;
  function n(i, a) {
    var s = Sm(a), c = s[0], u = s.slice(1);
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
function GT(e, t, r, n, o) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, a = arguments.length > 6 ? arguments[6] : void 0, s = arguments.length > 7 ? arguments[7] : void 0, c = Pe.useMemo(function() {
    if (He(n) === "object")
      return n.clearIcon;
    if (o)
      return o;
  }, [n, o]), u = Pe.useMemo(function() {
    return !!(!i && n && (r.length || a) && !(s === "combobox" && a === ""));
  }, [n, i, r.length, a, s]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ Pe.createElement(ys, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var KT = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], YT = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function Va(e) {
  return e === "tags" || e === "multiple";
}
var v0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, o = e.id, i = e.prefixCls, a = e.className, s = e.showSearch, c = e.tagRender, u = e.direction, l = e.omitDomProps, f = e.displayValues, d = e.onDisplayValuesChange, h = e.emptyOptions, m = e.notFoundContent, p = m === void 0 ? "Not Found" : m, g = e.onClear, b = e.mode, y = e.disabled, S = e.loading, w = e.getInputElement, E = e.getRawInputElement, C = e.open, O = e.defaultOpen, T = e.onDropdownVisibleChange, P = e.activeValue, x = e.onActiveValueChange, L = e.activeDescendantId, R = e.searchValue, _ = e.autoClearSearchValue, N = e.onSearch, D = e.onSearchSplit, A = e.tokenSeparators, F = e.allowClear, B = e.suffixIcon, q = e.clearIcon, ne = e.OptionList, se = e.animation, k = e.transitionName, H = e.dropdownStyle, j = e.dropdownClassName, K = e.dropdownMatchSelectWidth, M = e.dropdownRender, Q = e.dropdownAlign, $ = e.placement, X = e.builtinPlacements, re = e.getPopupContainer, J = e.showAction, I = J === void 0 ? [] : J, Z = e.onFocus, V = e.onBlur, ee = e.onKeyUp, fe = e.onKeyDown, ae = e.onMouseDown, ve = Ct(e, KT), me = Va(b), oe = (s !== void 0 ? s : me) || b === "combobox", de = W({}, ve);
  YT.forEach(function(Te) {
    delete de[Te];
  }), l?.forEach(function(Te) {
    delete de[Te];
  });
  var Ne = v.useState(!1), Me = G(Ne, 2), ue = Me[0], ge = Me[1];
  v.useEffect(function() {
    ge(t0());
  }, []);
  var ze = v.useRef(null), qe = v.useRef(null), nt = v.useRef(null), Qe = v.useRef(null), Ge = v.useRef(null), st = cT(), Xt = G(st, 3), ot = Xt[0], he = Xt[1], Se = Xt[2];
  v.useImperativeHandle(t, function() {
    var Te, _e;
    return {
      focus: (Te = Qe.current) === null || Te === void 0 ? void 0 : Te.focus,
      blur: (_e = Qe.current) === null || _e === void 0 ? void 0 : _e.blur,
      scrollTo: function(Mt) {
        var dt;
        return (dt = Ge.current) === null || dt === void 0 ? void 0 : dt.scrollTo(Mt);
      }
    };
  });
  var Be = v.useMemo(function() {
    var Te;
    if (b !== "combobox")
      return R;
    var _e = (Te = f[0]) === null || Te === void 0 ? void 0 : Te.value;
    return typeof _e == "string" || typeof _e == "number" ? String(_e) : "";
  }, [R, b, f]), mt = b === "combobox" && typeof w == "function" && w() || null, ke = typeof E == "function" && E(), Ke = Ol(qe, ke == null || (r = ke.props) === null || r === void 0 ? void 0 : r.ref), Oe = v.useState(!1), lt = G(Oe, 2), Tt = lt[0], xe = lt[1];
  Rt(function() {
    xe(!0);
  }, []);
  var We = Ia(!1, {
    defaultValue: O,
    value: C
  }), ft = G(We, 2), pt = ft[0], we = ft[1], Y = Tt ? pt : !1, ie = !p && h;
  (y || ie && Y && b === "combobox") && (Y = !1);
  var le = ie ? !1 : Y, be = v.useCallback(function(Te) {
    var _e = Te !== void 0 ? Te : !Y;
    y || (we(_e), Y !== _e && T?.(_e));
  }, [y, Y, we, T]), Le = v.useMemo(function() {
    return (A || []).some(function(Te) {
      return [`
`, `\r
`].includes(Te);
    });
  }, [A]), Re = function(_e, Pt, Mt) {
    var dt = !0, Ot = _e;
    x?.(null);
    var it = Mt ? null : QT(_e, A);
    return b !== "combobox" && it && (Ot = "", D?.(it), be(!1), dt = !1), N && Be !== Ot && N(Ot, {
      source: Pt ? "typing" : "effect"
    }), dt;
  }, Qt = function(_e) {
    !_e || !_e.trim() || N(_e, {
      source: "submit"
    });
  };
  v.useEffect(function() {
    !Y && !me && b !== "combobox" && Re("", !1, !1);
  }, [Y]), v.useEffect(function() {
    pt && y && we(!1), y && he(!1);
  }, [y]);
  var It = n0(), Ht = G(It, 2), ht = Ht[0], sr = Ht[1], Gt = function(_e) {
    var Pt = ht(), Mt = _e.which;
    if (Mt === te.ENTER && (b !== "combobox" && _e.preventDefault(), Y || be(!0)), sr(!!Be), Mt === te.BACKSPACE && !Pt && me && !Be && f.length) {
      for (var dt = Ee(f), Ot = null, it = dt.length - 1; it >= 0; it -= 1) {
        var Cr = dt[it];
        if (!Cr.disabled) {
          dt.splice(it, 1), Ot = Cr;
          break;
        }
      }
      Ot && d(dt, {
        type: "remove",
        values: [Ot]
      });
    }
    for (var Zt = arguments.length, nr = new Array(Zt > 1 ? Zt - 1 : 0), er = 1; er < Zt; er++)
      nr[er - 1] = arguments[er];
    if (Y && Ge.current) {
      var zr;
      (zr = Ge.current).onKeyDown.apply(zr, [_e].concat(nr));
    }
    fe?.apply(void 0, [_e].concat(nr));
  }, kr = function(_e) {
    for (var Pt = arguments.length, Mt = new Array(Pt > 1 ? Pt - 1 : 0), dt = 1; dt < Pt; dt++)
      Mt[dt - 1] = arguments[dt];
    if (Y && Ge.current) {
      var Ot;
      (Ot = Ge.current).onKeyUp.apply(Ot, [_e].concat(Mt));
    }
    ee?.apply(void 0, [_e].concat(Mt));
  }, jn = function(_e) {
    var Pt = f.filter(function(Mt) {
      return Mt !== _e;
    });
    d(Pt, {
      type: "remove",
      values: [_e]
    });
  }, kt = v.useRef(!1), rr = function() {
    he(!0), y || (Z && !kt.current && Z.apply(void 0, arguments), I.includes("focus") && be(!0)), kt.current = !0;
  }, Jt = function() {
    he(!1, function() {
      kt.current = !1, be(!1);
    }), !y && (Be && (b === "tags" ? N(Be, {
      source: "submit"
    }) : b === "multiple" && N("", {
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
  var Vn = function(_e) {
    var Pt, Mt = _e.target, dt = (Pt = nt.current) === null || Pt === void 0 ? void 0 : Pt.getPopupElement();
    if (dt && dt.contains(Mt)) {
      var Ot = setTimeout(function() {
        var nr = wr.indexOf(Ot);
        if (nr !== -1 && wr.splice(nr, 1), Se(), !ue && !dt.contains(document.activeElement)) {
          var er;
          (er = Qe.current) === null || er === void 0 || er.focus();
        }
      });
      wr.push(Ot);
    }
    for (var it = arguments.length, Cr = new Array(it > 1 ? it - 1 : 0), Zt = 1; Zt < it; Zt++)
      Cr[Zt - 1] = arguments[Zt];
    ae?.apply(void 0, [_e].concat(Cr));
  }, Lr = v.useState(null), dn = G(Lr, 2), zn = dn[0], jr = dn[1], Hn = v.useState({}), Do = G(Hn, 2), Vr = Do[1];
  function vr() {
    Vr({});
  }
  Rt(function() {
    if (le) {
      var Te, _e = Math.ceil((Te = ze.current) === null || Te === void 0 ? void 0 : Te.getBoundingClientRect().width);
      zn !== _e && !Number.isNaN(_e) && jr(_e);
    }
  }, [le]);
  var Mr;
  ke && (Mr = function(_e) {
    be(_e);
  }), uT(function() {
    var Te;
    return [ze.current, (Te = nt.current) === null || Te === void 0 ? void 0 : Te.getPopupElement()];
  }, le, be, !!ke);
  var Ar = v.useMemo(function() {
    return W(W({}, e), {}, {
      notFoundContent: p,
      open: Y,
      triggerOpen: le,
      id: o,
      showSearch: oe,
      multiple: me,
      toggleOpen: be
    });
  }, [e, p, le, Y, o, oe, me, be]), Xr = !!B || S, Bn;
  Xr && (Bn = /* @__PURE__ */ v.createElement(ys, {
    className: Ie("".concat(i, "-arrow"), ye({}, "".concat(i, "-arrow-loading"), S)),
    customizeIcon: B,
    customizeIconProps: {
      loading: S,
      searchValue: Be,
      open: Y,
      focused: ot,
      showSearch: oe
    }
  })), process.env.NODE_ENV !== "production" && Fe(!e.clearIcon, "`clearIcon` will be removed in future. Please use `allowClear` instead.");
  var Wn = function() {
    var _e;
    g?.(), (_e = Qe.current) === null || _e === void 0 || _e.focus(), d([], {
      type: "clear",
      values: f
    }), Re("", !1, !1);
  }, Un = GT(i, Wn, f, F, q, y, Be, b), hn = Un.allowClear, Fo = Un.clearIcon, $o = /* @__PURE__ */ v.createElement(ne, {
    ref: Ge
  }), ko = Ie(i, a, (n = {}, ye(n, "".concat(i, "-focused"), ot), ye(n, "".concat(i, "-multiple"), me), ye(n, "".concat(i, "-single"), !me), ye(n, "".concat(i, "-allow-clear"), F), ye(n, "".concat(i, "-show-arrow"), Xr), ye(n, "".concat(i, "-disabled"), y), ye(n, "".concat(i, "-loading"), S), ye(n, "".concat(i, "-open"), Y), ye(n, "".concat(i, "-customize-input"), mt), ye(n, "".concat(i, "-show-search"), oe), n)), vn = /* @__PURE__ */ v.createElement(d0, {
    ref: nt,
    disabled: y,
    prefixCls: i,
    visible: le,
    popupElement: $o,
    containerWidth: zn,
    animation: se,
    transitionName: k,
    dropdownStyle: H,
    dropdownClassName: j,
    direction: u,
    dropdownMatchSelectWidth: K,
    dropdownRender: M,
    dropdownAlign: Q,
    placement: $,
    builtinPlacements: X,
    getPopupContainer: re,
    empty: h,
    getTriggerDOMNode: function() {
      return qe.current;
    },
    onPopupVisibleChange: Mr,
    onPopupMouseEnter: vr
  }, ke ? /* @__PURE__ */ v.cloneElement(ke, {
    ref: Ke
  }) : /* @__PURE__ */ v.createElement(c0, Ae({}, e, {
    domRef: qe,
    prefixCls: i,
    inputElement: mt,
    ref: Qe,
    id: o,
    showSearch: oe,
    autoClearSearchValue: _,
    mode: b,
    activeDescendantId: L,
    tagRender: c,
    values: f,
    open: Y,
    onToggleOpen: be,
    activeValue: P,
    searchValue: Be,
    onSearch: Re,
    onSearchSubmit: Qt,
    onRemove: jn,
    tokenWithEnter: Le
  }))), pn;
  return ke ? pn = vn : pn = /* @__PURE__ */ v.createElement("div", Ae({
    className: ko
  }, de, {
    ref: ze,
    onMouseDown: Vn,
    onKeyDown: Gt,
    onKeyUp: kr,
    onFocus: rr,
    onBlur: Jt
  }), ot && !Y && /* @__PURE__ */ v.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Te) {
    var _e = Te.label, Pt = Te.value;
    return ["number", "string"].includes(He(_e)) ? _e : Pt;
  }).join(", "))), vn, Bn, hn && Fo), /* @__PURE__ */ v.createElement(r0.Provider, {
    value: Ar
  }, pn);
});
process.env.NODE_ENV !== "production" && (v0.displayName = "BaseSelect");
const XT = function(e, t) {
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
function lc(e, t) {
  return Xl(e).join("").toUpperCase().includes(t);
}
const JT = function(e, t, r, n, o) {
  return v.useMemo(function() {
    if (!r || n === !1)
      return e;
    var i = t.options, a = t.label, s = t.value, c = [], u = typeof n == "function", l = r.toUpperCase(), f = u ? n : function(h, m) {
      return o ? lc(m[o], l) : m[i] ? lc(m[a !== "children" ? a : "label"], l) : lc(m[s], l);
    }, d = u ? function(h) {
      return ku(h);
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
var Zh = 0, ZT = process.env.NODE_ENV !== "test" && Yt();
function eP() {
  var e;
  return ZT ? (e = Zh, Zh += 1) : e = "TEST_OR_SSR", e;
}
function tP(e) {
  var t = v.useState(), r = G(t, 2), n = r[0], o = r[1];
  return v.useEffect(function() {
    o("rc_select_".concat(eP()));
  }, []), e || n;
}
var rP = ["children", "value"], nP = ["children"];
function oP(e) {
  var t = e, r = t.key, n = t.props, o = n.children, i = n.value, a = Ct(n, rP);
  return W({
    key: r,
    value: i !== void 0 ? i : r,
    children: o
  }, a);
}
function Jl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return In(e).map(function(r, n) {
    if (!/* @__PURE__ */ v.isValidElement(r) || !r.type)
      return null;
    var o = r, i = o.type.isSelectOptGroup, a = o.key, s = o.props, c = s.children, u = Ct(s, nP);
    return t || !i ? oP(r) : W(W({
      key: "__RC_SELECT_GRP__".concat(a === null ? n : a, "__"),
      label: a
    }, u), {}, {
      options: Jl(c)
    });
  }).filter(function(r) {
    return r;
  });
}
function iP(e, t, r, n, o) {
  return v.useMemo(function() {
    var i = e, a = !e;
    a && (i = Jl(t));
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
function ev(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return r;
}
var Zl = function() {
  return null;
};
Zl.isSelectOptGroup = !0;
var ef = function() {
  return null;
};
ef.isSelectOption = !0;
var p0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
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
  }, /* @__PURE__ */ v.createElement(Fn, {
    onResize: function(f) {
      var d = f.offsetHeight;
      d && a && a();
    }
  }, /* @__PURE__ */ v.createElement("div", Ae({
    style: u,
    className: Ie(ye({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), o)));
});
p0.displayName = "Filler";
var aP = 20;
function tv(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var sP = /* @__PURE__ */ function(e) {
  Si(r, e);
  var t = wi(r);
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
      window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("mouseup", n.onMouseUp), n.thumbRef.current && (n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove), n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)), Dt.cancel(n.moveRaf);
    }, n.onMouseDown = function(s) {
      var c = n.props.onStartMove;
      n.setState({
        dragging: !0,
        pageY: tv(s),
        startTop: n.getTop()
      }), c(), n.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, n.onMouseMove = function(s) {
      var c = n.state, u = c.dragging, l = c.pageY, f = c.startTop, d = n.props.onScroll;
      if (Dt.cancel(n.moveRaf), u) {
        var h = tv(s) - l, m = f + h, p = n.getEnableScrollRange(), g = n.getEnableHeightRange(), b = g ? m / g : 0, y = Math.ceil(b * p);
        n.moveRaf = Dt(function() {
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
      return l = Math.max(l, aP), l = Math.min(l, c / 2), Math.floor(l);
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
          className: Ie("".concat(c, "-scrollbar"), ye({}, "".concat(c, "-scrollbar-show"), d)),
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
          className: Ie("".concat(c, "-scrollbar-thumb"), ye({}, "".concat(c, "-scrollbar-thumb-moving"), i)),
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
function cP(e) {
  var t = e.children, r = e.setRef, n = v.useCallback(function(o) {
    r(o);
  }, []);
  return /* @__PURE__ */ v.cloneElement(t, {
    ref: n
  });
}
function uP(e, t, r, n, o, i) {
  var a = i.getKey;
  return e.slice(t, r + 1).map(function(s, c) {
    var u = t + c, l = o(s, u, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), f = a(s);
    return /* @__PURE__ */ v.createElement(cP, {
      key: f,
      setRef: function(h) {
        return n(s, h);
      }
    }, l);
  });
}
var lP = /* @__PURE__ */ function() {
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
function fP(e, t, r) {
  var n = v.useState(0), o = G(n, 2), i = o[0], a = o[1], s = $e(/* @__PURE__ */ new Map()), c = $e(new lP()), u = $e();
  function l() {
    Dt.cancel(u.current);
  }
  function f() {
    l(), u.current = Dt(function() {
      s.current.forEach(function(h, m) {
        if (h && h.offsetParent) {
          var p = xa(h), g = p.offsetHeight;
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
  return Ut(function() {
    return l;
  }, []), [d, f, c.current, i];
}
function dP(e, t, r, n, o, i, a, s) {
  var c = v.useRef();
  return function(u) {
    if (u == null) {
      s();
      return;
    }
    if (Dt.cancel(c.current), typeof u == "number")
      a(u);
    else if (u && He(u) === "object") {
      var l, f = u.align;
      "index" in u ? l = u.index : l = t.findIndex(function(p) {
        return o(p) === u.key;
      });
      var d = u.offset, h = d === void 0 ? 0 : d, m = function p(g, b) {
        if (!(g < 0 || !e.current)) {
          var y = e.current.clientHeight, S = !1, w = b;
          if (y) {
            for (var E = b || f, C = 0, O = 0, T = 0, P = Math.min(t.length, l), x = 0; x <= P; x += 1) {
              var L = o(t[x]);
              O = C;
              var R = r.get(L);
              T = O + (R === void 0 ? n : R), C = T, x === l && R === void 0 && (S = !0);
            }
            var _ = null;
            switch (E) {
              case "top":
                _ = O - h;
                break;
              case "bottom":
                _ = T - y + h;
                break;
              default: {
                var N = e.current.scrollTop, D = N + y;
                O < N ? w = "top" : T > D && (w = "bottom");
              }
            }
            _ !== null && _ !== e.current.scrollTop && a(_);
          }
          c.current = Dt(function() {
            S && i(), p(g - 1, w);
          }, 2);
        }
      };
      m(3);
    }
  };
}
function hP(e, t, r) {
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
function vP(e, t, r) {
  var n = v.useState(e), o = G(n, 2), i = o[0], a = o[1], s = v.useState(null), c = G(s, 2), u = c[0], l = c[1];
  return v.useEffect(function() {
    var f = hP(i || [], e || [], t);
    f?.index !== void 0 && (r?.(f.index), l(e[f.index])), a(e);
  }, [e]), [u];
}
var pP = (typeof navigator > "u" ? "undefined" : He(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const m0 = function(e, t) {
  var r = $e(!1), n = $e(null);
  function o() {
    clearTimeout(n.current), r.current = !0, n.current = setTimeout(function() {
      r.current = !1;
    }, 50);
  }
  var i = $e({
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
function mP(e, t, r, n) {
  var o = $e(0), i = $e(null), a = $e(null), s = $e(!1), c = m0(t, r);
  function u(f) {
    if (e) {
      Dt.cancel(i.current);
      var d = f.deltaY;
      o.current += d, a.current = d, !c(d) && (pP || f.preventDefault(), i.current = Dt(function() {
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
var gP = 14 / 15;
function yP(e, t, r) {
  var n = $e(!1), o = $e(0), i = $e(null), a = $e(null), s, c = function(d) {
    if (n.current) {
      var h = Math.ceil(d.touches[0].pageY), m = o.current - h;
      o.current = h, r(m) && d.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        m *= gP, (!r(m, !0) || Math.abs(m) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, u = function() {
    n.current = !1, s();
  }, l = function(d) {
    s(), d.touches.length === 1 && !n.current && (n.current = !0, o.current = Math.ceil(d.touches[0].pageY), i.current = d.target, i.current.addEventListener("touchmove", c), i.current.addEventListener("touchend", u));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", u));
  }, Rt(function() {
    return e && t.current.addEventListener("touchstart", l), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", l), s(), clearInterval(a.current);
    };
  }, [e]);
}
var bP = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], EP = [], SP = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function wP(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-virtual-list" : r, o = e.className, i = e.height, a = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, u = e.style, l = e.data, f = e.children, d = e.itemKey, h = e.virtual, m = e.direction, p = e.component, g = p === void 0 ? "div" : p, b = e.onScroll, y = e.onVisibleChange, S = e.innerProps, w = Ct(e, bP), E = !!(h !== !1 && i && a), C = E && l && a * l.length > i, O = dr(0), T = G(O, 2), P = T[0], x = T[1], L = dr(!1), R = G(L, 2), _ = R[0], N = R[1], D = Ie(n, ye({}, "".concat(n, "-rtl"), m === "rtl"), o), A = l || EP, F = $e(), B = $e(), q = $e(), ne = v.useCallback(function(he) {
    return typeof d == "function" ? d(he) : he?.[d];
  }, [d]), se = {
    getKey: ne
  };
  function k(he) {
    x(function(Se) {
      var Be;
      typeof he == "function" ? Be = he(Se) : Be = he;
      var mt = de(Be);
      return F.current.scrollTop = mt, mt;
    });
  }
  var H = $e({
    start: 0,
    end: A.length
  }), j = $e(), K = vP(A, ne), M = G(K, 1), Q = M[0];
  j.current = Q;
  var $ = fP(ne, null, null), X = G($, 4), re = X[0], J = X[1], I = X[2], Z = X[3], V = v.useMemo(function() {
    if (!E)
      return {
        scrollHeight: void 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    if (!C) {
      var he;
      return {
        scrollHeight: ((he = B.current) === null || he === void 0 ? void 0 : he.offsetHeight) || 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    }
    for (var Se = 0, Be, mt, ke, Ke = A.length, Oe = 0; Oe < Ke; Oe += 1) {
      var lt = A[Oe], Tt = ne(lt), xe = I.get(Tt), We = Se + (xe === void 0 ? a : xe);
      We >= P && Be === void 0 && (Be = Oe, mt = Se), We > P + i && ke === void 0 && (ke = Oe), Se = We;
    }
    return Be === void 0 && (Be = 0, mt = 0, ke = Math.ceil(i / a)), ke === void 0 && (ke = A.length - 1), ke = Math.min(ke + 1, A.length), {
      scrollHeight: Se,
      start: Be,
      end: ke,
      offset: mt
    };
  }, [C, E, P, A, Z, i]), ee = V.scrollHeight, fe = V.start, ae = V.end, ve = V.offset;
  H.current.start = fe, H.current.end = ae;
  var me = ee - i, oe = $e(me);
  oe.current = me;
  function de(he) {
    var Se = he;
    return Number.isNaN(oe.current) || (Se = Math.min(Se, oe.current)), Se = Math.max(Se, 0), Se;
  }
  var Ne = P <= 0, Me = P >= me, ue = m0(Ne, Me);
  function ge(he) {
    var Se = he;
    k(Se);
  }
  function ze(he) {
    var Se = he.currentTarget.scrollTop;
    Se !== P && k(Se), b?.(he);
  }
  var qe = mP(E, Ne, Me, function(he) {
    k(function(Se) {
      var Be = Se + he;
      return Be;
    });
  }), nt = G(qe, 2), Qe = nt[0], Ge = nt[1];
  yP(E, F, function(he, Se) {
    return ue(he, Se) ? !1 : (Qe({
      preventDefault: function() {
      },
      deltaY: he
    }), !0);
  }), Rt(function() {
    function he(Se) {
      E && Se.preventDefault();
    }
    return F.current.addEventListener("wheel", Qe), F.current.addEventListener("DOMMouseScroll", Ge), F.current.addEventListener("MozMousePixelScroll", he), function() {
      F.current && (F.current.removeEventListener("wheel", Qe), F.current.removeEventListener("DOMMouseScroll", Ge), F.current.removeEventListener("MozMousePixelScroll", he));
    };
  }, [E]);
  var st = dP(F, A, I, a, ne, J, k, function() {
    var he;
    (he = q.current) === null || he === void 0 || he.delayHidden();
  });
  v.useImperativeHandle(t, function() {
    return {
      scrollTo: st
    };
  }), Rt(function() {
    if (y) {
      var he = A.slice(fe, ae + 1);
      y(he, A);
    }
  }, [fe, ae, A]);
  var Xt = uP(A, fe, ae, re, f, se), ot = null;
  return i && (ot = W(ye({}, c ? "height" : "maxHeight", i), SP), E && (ot.overflowY = "hidden", _ && (ot.pointerEvents = "none"))), /* @__PURE__ */ v.createElement("div", Ae({
    style: W(W({}, u), {}, {
      position: "relative"
    }),
    className: D
  }, w), /* @__PURE__ */ v.createElement(g, {
    className: "".concat(n, "-holder"),
    style: ot,
    ref: F,
    onScroll: ze
  }, /* @__PURE__ */ v.createElement(p0, {
    prefixCls: n,
    height: ee,
    offset: ve,
    onInnerResize: J,
    ref: B,
    innerProps: S
  }, Xt)), E && /* @__PURE__ */ v.createElement(sP, {
    ref: q,
    prefixCls: n,
    scrollTop: P,
    height: i,
    scrollHeight: ee,
    count: A.length,
    direction: m,
    onScroll: ge,
    onStartMove: function() {
      N(!0);
    },
    onStopMove: function() {
      N(!1);
    }
  }));
}
var g0 = /* @__PURE__ */ v.forwardRef(wP);
g0.displayName = "List";
var y0 = /* @__PURE__ */ v.createContext(null);
function CP() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var OP = ["disabled", "title", "children", "style", "className"];
function rv(e) {
  return typeof e == "string" || typeof e == "number";
}
var _P = function(t, r) {
  var n = sT(), o = n.prefixCls, i = n.id, a = n.open, s = n.multiple, c = n.mode, u = n.searchValue, l = n.toggleOpen, f = n.notFoundContent, d = n.onPopupScroll, h = v.useContext(y0), m = h.flattenOptions, p = h.onActiveValue, g = h.defaultActiveFirstOption, b = h.onSelect, y = h.menuItemSelectedIcon, S = h.rawValues, w = h.fieldNames, E = h.virtual, C = h.direction, O = h.listHeight, T = h.listItemHeight, P = "".concat(o, "-item"), x = os(function() {
    return m;
  }, [a, m], function(Q, $) {
    return $[0] && Q[1] !== $[1];
  }), L = v.useRef(null), R = function($) {
    $.preventDefault();
  }, _ = function($) {
    L.current && L.current.scrollTo(typeof $ == "number" ? {
      index: $
    } : $);
  }, N = function($) {
    for (var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, re = x.length, J = 0; J < re; J += 1) {
      var I = ($ + J * X + re) % re, Z = x[I], V = Z.group, ee = Z.data;
      if (!V && !ee.disabled)
        return I;
    }
    return -1;
  }, D = v.useState(function() {
    return N(0);
  }), A = G(D, 2), F = A[0], B = A[1], q = function($) {
    var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B($);
    var re = {
      source: X ? "keyboard" : "mouse"
    }, J = x[$];
    if (!J) {
      p(null, -1, re);
      return;
    }
    p(J.value, $, re);
  };
  Ut(function() {
    q(g !== !1 ? N(0) : -1);
  }, [x.length, u]);
  var ne = v.useCallback(function(Q) {
    return S.has(Q) && c !== "combobox";
  }, [c, Ee(S).toString(), S.size]);
  Ut(function() {
    var Q = setTimeout(function() {
      if (!s && a && S.size === 1) {
        var X = Array.from(S)[0], re = x.findIndex(function(J) {
          var I = J.data;
          return I.value === X;
        });
        re !== -1 && (q(re), _(re));
      }
    });
    if (a) {
      var $;
      ($ = L.current) === null || $ === void 0 || $.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(Q);
    };
  }, [a, u, m.length]);
  var se = function($) {
    $ !== void 0 && b($, {
      selected: !S.has($)
    }), s || l(!1);
  };
  if (v.useImperativeHandle(r, function() {
    return {
      onKeyDown: function($) {
        var X = $.which, re = $.ctrlKey;
        switch (X) {
          case te.N:
          case te.P:
          case te.UP:
          case te.DOWN: {
            var J = 0;
            if (X === te.UP ? J = -1 : X === te.DOWN ? J = 1 : CP() && re && (X === te.N ? J = 1 : X === te.P && (J = -1)), J !== 0) {
              var I = N(F + J, J);
              _(I), q(I, !0);
            }
            break;
          }
          case te.ENTER: {
            var Z = x[F];
            Z && !Z.data.disabled ? se(Z.value) : se(void 0), a && $.preventDefault();
            break;
          }
          case te.ESC:
            l(!1), a && $.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function($) {
        _($);
      }
    };
  }), x.length === 0)
    return /* @__PURE__ */ v.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(P, "-empty"),
      onMouseDown: R
    }, f);
  var k = Object.keys(w).map(function(Q) {
    return w[Q];
  }), H = function($) {
    return $.label;
  };
  function j(Q, $) {
    var X = Q.group;
    return {
      role: X ? "presentation" : "option",
      id: "".concat(i, "_list_").concat($)
    };
  }
  var K = function($) {
    var X = x[$];
    if (!X)
      return null;
    var re = X.data || {}, J = re.value, I = X.group, Z = Fa(re, !0), V = H(X);
    return X ? /* @__PURE__ */ v.createElement("div", Ae({
      "aria-label": typeof V == "string" && !I ? V : null
    }, Z, {
      key: $
    }, j(X, $), {
      "aria-selected": ne(J)
    }), J) : null;
  }, M = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, E && /* @__PURE__ */ v.createElement("div", Ae({}, M, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), K(F - 1), K(F), K(F + 1)), /* @__PURE__ */ v.createElement(g0, {
    itemKey: "key",
    ref: L,
    data: x,
    height: O,
    itemHeight: T,
    fullHeight: !1,
    onMouseDown: R,
    onScroll: d,
    virtual: E,
    direction: C,
    innerProps: E ? null : M
  }, function(Q, $) {
    var X, re = Q.group, J = Q.groupOption, I = Q.data, Z = Q.label, V = Q.value, ee = I.key;
    if (re) {
      var fe, ae = (fe = I.title) !== null && fe !== void 0 ? fe : rv(Z) ? Z.toString() : void 0;
      return /* @__PURE__ */ v.createElement("div", {
        className: Ie(P, "".concat(P, "-group")),
        title: ae
      }, Z !== void 0 ? Z : ee);
    }
    var ve = I.disabled, me = I.title;
    I.children;
    var oe = I.style, de = I.className, Ne = Ct(I, OP), Me = _l(Ne, k), ue = ne(V), ge = "".concat(P, "-option"), ze = Ie(P, ge, de, (X = {}, ye(X, "".concat(ge, "-grouped"), J), ye(X, "".concat(ge, "-active"), F === $ && !ve), ye(X, "".concat(ge, "-disabled"), ve), ye(X, "".concat(ge, "-selected"), ue), X)), qe = H(Q), nt = !y || typeof y == "function" || ue, Qe = typeof qe == "number" ? qe : qe || V, Ge = rv(Qe) ? Qe.toString() : void 0;
    return me !== void 0 && (Ge = me), /* @__PURE__ */ v.createElement("div", Ae({}, Fa(Me), E ? {} : j(Q, $), {
      "aria-selected": ue,
      className: ze,
      title: Ge,
      onMouseMove: function() {
        F === $ || ve || q($);
      },
      onClick: function() {
        ve || se(V);
      },
      style: oe
    }), /* @__PURE__ */ v.createElement("div", {
      className: "".concat(ge, "-content")
    }, Qe), /* @__PURE__ */ v.isValidElement(y) || ue, nt && /* @__PURE__ */ v.createElement(ys, {
      className: "".concat(P, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        isSelected: ue
      }
    }, ue ? "✓" : null));
  }));
}, b0 = /* @__PURE__ */ v.forwardRef(_P);
b0.displayName = "OptionList";
function xP(e) {
  var t = e.mode, r = e.options, n = e.children, o = e.backfill, i = e.allowClear, a = e.placeholder, s = e.getInputElement, c = e.showSearch, u = e.onSearch, l = e.defaultOpen, f = e.autoFocus, d = e.labelInValue, h = e.value, m = e.inputValue, p = e.optionLabelProp, g = Va(t), b = c !== void 0 ? c : g || t === "combobox", y = r || Jl(n);
  if (Fe(t !== "tags" || y.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var S = y.some(function(C) {
      return C.options ? C.options.some(function(O) {
        return typeof ("value" in O ? O.value : O.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    Fe(!S, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (Fe(t !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), Fe(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), Fe(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), Yc(t !== "combobox" || !s || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !b && t !== "combobox" && t !== "tags" && Fe(!1, "`onSearch` should work with `showSearch` instead of use alone."), Yc(!l || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var w = Xl(h);
    Fe(!d || w.every(function(C) {
      return He(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), Fe(!g || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (n) {
    var E = null;
    In(n).some(function(C) {
      if (!/* @__PURE__ */ v.isValidElement(C) || !C.type)
        return !1;
      var O = C, T = O.type;
      if (T.isSelectOption)
        return !1;
      if (T.isSelectOptGroup) {
        var P = In(C.props.children).every(function(x) {
          return !/* @__PURE__ */ v.isValidElement(x) || !C.type || x.type.isSelectOption ? !0 : (E = x.type, !1);
        });
        return !P;
      }
      return E = T, !0;
    }), E && Fe(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(E.displayName || E.name || E, "`.")), Fe(m === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function RP(e, t) {
  if (e) {
    var r = function n(o) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < o.length; a++) {
        var s = o[a];
        if (s[t?.value] === null)
          return Fe(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(s[t?.options]) && n(s[t?.options], !0))
          break;
      }
    };
    r(e);
  }
}
var TP = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], PP = ["inputValue"];
function NP(e) {
  return !e || He(e) !== "object";
}
var E0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.id, n = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, a = e.backfill, s = e.fieldNames, c = e.inputValue, u = e.searchValue, l = e.onSearch, f = e.autoClearSearchValue, d = f === void 0 ? !0 : f, h = e.onSelect, m = e.onDeselect, p = e.dropdownMatchSelectWidth, g = p === void 0 ? !0 : p, b = e.filterOption, y = e.filterSort, S = e.optionFilterProp, w = e.optionLabelProp, E = e.options, C = e.children, O = e.defaultActiveFirstOption, T = e.menuItemSelectedIcon, P = e.virtual, x = e.direction, L = e.listHeight, R = L === void 0 ? 200 : L, _ = e.listItemHeight, N = _ === void 0 ? 20 : _, D = e.value, A = e.defaultValue, F = e.labelInValue, B = e.onChange, q = Ct(e, TP), ne = tP(r), se = Va(n), k = !!(!E && C), H = v.useMemo(function() {
    return b === void 0 && n === "combobox" ? !1 : b;
  }, [b, n]), j = v.useMemo(
    function() {
      return h0(s, k);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      k
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), K = Ia("", {
    value: u !== void 0 ? u : c,
    postState: function(ie) {
      return ie || "";
    }
  }), M = G(K, 2), Q = M[0], $ = M[1], X = iP(E, C, j, S, w), re = X.valueOptions, J = X.labelOptions, I = X.options, Z = v.useCallback(function(Y) {
    var ie = Xl(Y);
    return ie.map(function(le) {
      var be, Le, Re, Qt, It;
      if (NP(le))
        be = le;
      else {
        var Ht;
        Re = le.key, Le = le.label, be = (Ht = le.value) !== null && Ht !== void 0 ? Ht : Re;
      }
      var ht = re.get(be);
      if (ht) {
        var sr;
        if (Le === void 0 && (Le = ht?.[w || j.label]), Re === void 0 && (Re = (sr = ht?.key) !== null && sr !== void 0 ? sr : be), Qt = ht?.disabled, It = ht?.title, process.env.NODE_ENV !== "production" && !w) {
          var Gt = ht?.[j.label];
          Gt !== void 0 && !/* @__PURE__ */ v.isValidElement(Gt) && !/* @__PURE__ */ v.isValidElement(Le) && Gt !== Le && Fe(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: Le,
        value: be,
        key: Re,
        disabled: Qt,
        title: It
      };
    });
  }, [j, w, re]), V = Ia(A, {
    value: D
  }), ee = G(V, 2), fe = ee[0], ae = ee[1], ve = v.useMemo(function() {
    var Y, ie = Z(fe);
    return n === "combobox" && _T((Y = ie[0]) === null || Y === void 0 ? void 0 : Y.value) ? [] : ie;
  }, [fe, Z, n]), me = XT(ve, re), oe = G(me, 2), de = oe[0], Ne = oe[1], Me = v.useMemo(function() {
    if (!n && de.length === 1) {
      var Y = de[0];
      if (Y.value === null && (Y.label === null || Y.label === void 0))
        return [];
    }
    return de.map(function(ie) {
      var le;
      return W(W({}, ie), {}, {
        label: (le = ie.label) !== null && le !== void 0 ? le : ie.value
      });
    });
  }, [n, de]), ue = v.useMemo(function() {
    return new Set(de.map(function(Y) {
      return Y.value;
    }));
  }, [de]);
  v.useEffect(function() {
    if (n === "combobox") {
      var Y, ie = (Y = de[0]) === null || Y === void 0 ? void 0 : Y.value;
      $(OT(ie) ? String(ie) : "");
    }
  }, [de]);
  var ge = ev(function(Y, ie) {
    var le, be = ie ?? Y;
    return le = {}, ye(le, j.value, Y), ye(le, j.label, be), le;
  }), ze = v.useMemo(function() {
    if (n !== "tags")
      return I;
    var Y = Ee(I), ie = function(be) {
      return re.has(be);
    };
    return Ee(de).sort(function(le, be) {
      return le.value < be.value ? -1 : 1;
    }).forEach(function(le) {
      var be = le.value;
      ie(be) || Y.push(ge(be, le.label));
    }), Y;
  }, [ge, I, re, de, n]), qe = JT(ze, j, Q, H, S), nt = v.useMemo(function() {
    return n !== "tags" || !Q || qe.some(function(Y) {
      return Y[S || "value"] === Q;
    }) ? qe : [ge(Q)].concat(Ee(qe));
  }, [ge, S, n, qe, Q]), Qe = v.useMemo(function() {
    return y ? Ee(nt).sort(function(Y, ie) {
      return y(Y, ie);
    }) : nt;
  }, [nt, y]), Ge = v.useMemo(function() {
    return qT(Qe, {
      fieldNames: j,
      childrenAsData: k
    });
  }, [Qe, j, k]), st = function(ie) {
    var le = Z(ie);
    if (ae(le), B && // Trigger event only when value changed
    (le.length !== de.length || le.some(function(Re, Qt) {
      var It;
      return ((It = de[Qt]) === null || It === void 0 ? void 0 : It.value) !== Re?.value;
    }))) {
      var be = F ? le : le.map(function(Re) {
        return Re.value;
      }), Le = le.map(function(Re) {
        return ku(Ne(Re.value));
      });
      B(
        // Value
        se ? be : be[0],
        // Option
        se ? Le : Le[0]
      );
    }
  }, Xt = v.useState(null), ot = G(Xt, 2), he = ot[0], Se = ot[1], Be = v.useState(0), mt = G(Be, 2), ke = mt[0], Ke = mt[1], Oe = O !== void 0 ? O : n !== "combobox", lt = v.useCallback(function(Y, ie) {
    var le = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, be = le.source, Le = be === void 0 ? "keyboard" : be;
    Ke(ie), a && n === "combobox" && Y !== null && Le === "keyboard" && Se(String(Y));
  }, [a, n]), Tt = function(ie, le, be) {
    var Le = function() {
      var kt, rr = Ne(ie);
      return [F ? {
        label: rr?.[j.label],
        value: ie,
        key: (kt = rr?.key) !== null && kt !== void 0 ? kt : ie
      } : ie, ku(rr)];
    };
    if (le && h) {
      var Re = Le(), Qt = G(Re, 2), It = Qt[0], Ht = Qt[1];
      h(It, Ht);
    } else if (!le && m && be !== "clear") {
      var ht = Le(), sr = G(ht, 2), Gt = sr[0], kr = sr[1];
      m(Gt, kr);
    }
  }, xe = ev(function(Y, ie) {
    var le, be = se ? ie.selected : !0;
    be ? le = se ? [].concat(Ee(de), [Y]) : [Y] : le = de.filter(function(Le) {
      return Le.value !== Y;
    }), st(le), Tt(Y, be), n === "combobox" ? Se("") : (!Va || d) && ($(""), Se(""));
  }), We = function(ie, le) {
    st(ie);
    var be = le.type, Le = le.values;
    (be === "remove" || be === "clear") && Le.forEach(function(Re) {
      Tt(Re.value, !1, be);
    });
  }, ft = function(ie, le) {
    if ($(ie), Se(null), le.source === "submit") {
      var be = (ie || "").trim();
      if (be) {
        var Le = Array.from(new Set([].concat(Ee(ue), [be])));
        st(Le), Tt(be, !0), $("");
      }
      return;
    }
    le.source !== "blur" && (n === "combobox" && st(ie), l?.(ie));
  }, pt = function(ie) {
    var le = ie;
    n !== "tags" && (le = ie.map(function(Le) {
      var Re = J.get(Le);
      return Re?.value;
    }).filter(function(Le) {
      return Le !== void 0;
    }));
    var be = Array.from(new Set([].concat(Ee(ue), Ee(le))));
    st(be), be.forEach(function(Le) {
      Tt(Le, !0);
    });
  }, we = v.useMemo(function() {
    var Y = P !== !1 && g !== !1;
    return W(W({}, X), {}, {
      flattenOptions: Ge,
      onActiveValue: lt,
      defaultActiveFirstOption: Oe,
      onSelect: xe,
      menuItemSelectedIcon: T,
      rawValues: ue,
      fieldNames: j,
      virtual: Y,
      direction: x,
      listHeight: R,
      listItemHeight: N,
      childrenAsData: k
    });
  }, [X, Ge, lt, Oe, xe, T, ue, j, P, g, R, N, k]);
  return process.env.NODE_ENV !== "production" && (xP(e), RP(I, j)), /* @__PURE__ */ v.createElement(y0.Provider, {
    value: we
  }, /* @__PURE__ */ v.createElement(v0, Ae({}, q, {
    // >>> MISC
    id: ne,
    prefixCls: i,
    ref: t,
    omitDomProps: PP,
    mode: n,
    displayValues: Me,
    onDisplayValuesChange: We,
    direction: x,
    searchValue: Q,
    onSearch: ft,
    autoClearSearchValue: d,
    onSearchSplit: pt,
    dropdownMatchSelectWidth: g,
    OptionList: b0,
    emptyOptions: !Ge.length,
    activeValue: he,
    activeDescendantId: "".concat(ne, "_list_").concat(ke)
  })));
});
process.env.NODE_ENV !== "production" && (E0.displayName = "Select");
var tf = E0;
tf.Option = ef;
tf.OptGroup = Zl;
function IP(e, t, r) {
  return Ie({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const MP = (e, t) => t || e, S0 = () => {
  const [, e] = $n(), r = new Wt(e.colorBgBase).toHsl().l < 0.5 ? {
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
process.env.NODE_ENV !== "production" && (S0.displayName = "EmptyImage");
const AP = S0, w0 = () => {
  const [, e] = $n(), {
    colorFill: t,
    colorFillTertiary: r,
    colorFillQuaternary: n,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: a,
    contentColor: s
  } = vo(() => ({
    borderColor: new Wt(t).onBackground(o).toHexShortString(),
    shadowColor: new Wt(r).onBackground(o).toHexShortString(),
    contentColor: new Wt(n).onBackground(o).toHexShortString()
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
process.env.NODE_ENV !== "production" && (w0.displayName = "SimpleImage");
const DP = w0, FP = (e) => {
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
}, $P = Oi("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: r
  } = e, n = tr(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r * 2.5,
    emptyImgHeightMD: r,
    emptyImgHeightSM: r * 0.875
  });
  return [FP(n)];
});
var kP = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const C0 = /* @__PURE__ */ v.createElement(AP, null), O0 = /* @__PURE__ */ v.createElement(DP, null), bs = (e) => {
  var {
    className: t,
    rootClassName: r,
    prefixCls: n,
    image: o = C0,
    description: i,
    children: a,
    imageStyle: s,
    style: c
  } = e, u = kP(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: l,
    direction: f,
    empty: d
  } = v.useContext(ir), h = l("empty", n), [m, p] = $P(h), [g] = CC("Empty"), b = typeof i < "u" ? i : g?.description, y = typeof b == "string" ? b : "empty";
  let S = null;
  return typeof o == "string" ? S = /* @__PURE__ */ v.createElement("img", {
    alt: y,
    src: o
  }) : S = o, m(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: Ie(p, h, d?.className, {
      [`${h}-normal`]: o === O0,
      [`${h}-rtl`]: f === "rtl"
    }, t, r),
    style: Object.assign(Object.assign({}, d?.style), c)
  }, u), /* @__PURE__ */ v.createElement("div", {
    className: `${h}-image`,
    style: s
  }, S), b && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-description`
  }, b), a && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-footer`
  }, a)));
};
bs.PRESENTED_IMAGE_DEFAULT = C0;
bs.PRESENTED_IMAGE_SIMPLE = O0;
process.env.NODE_ENV !== "production" && (bs.displayName = "Empty");
const Go = bs, LP = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: r
  } = Kt(ir), n = r("empty");
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
}, jP = LP, VP = (e) => {
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
}, zP = (e) => {
  const {
    antCls: t,
    componentCls: r
  } = e, n = `${r}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, i = `&${t}-slide-up-appear${t}-slide-up-appear-active`, a = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${r}-dropdown-placement-`;
  return [
    {
      [`${r}-dropdown`]: Object.assign(Object.assign({}, ls(e)), {
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
          animationName: Xg
        },
        [`
          ${o}${s}topLeft,
          ${i}${s}topLeft,
          ${o}${s}topRight,
          ${i}${s}topRight
        `]: {
          animationName: Zg
        },
        [`${a}${s}bottomLeft`]: {
          animationName: Jg
        },
        [`
          ${a}${s}topLeft,
          ${a}${s}topRight
        `]: {
          animationName: e0
        },
        "&-hidden": {
          display: "none"
        },
        [`${n}`]: Object.assign(Object.assign({}, VP(e)), {
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
            }, fu),
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
    Hh(e, "slide-up"),
    Hh(e, "slide-down"),
    zh(e, "move-up"),
    zh(e, "move-down")
  ];
}, HP = zP, Jn = 2, _0 = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: r,
    lineWidth: n
  } = e;
  const o = (r - t) / 2 - n, i = Math.ceil(o / 2);
  return [o, i];
};
function fc(e, t) {
  const {
    componentCls: r,
    iconCls: n
  } = e, o = `${r}-selection-overflow`, i = e.controlHeightSM, [a] = _0(e), s = t ? `${r}-${t}` : "";
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
        padding: `${a - Jn}px ${Jn * 2}px`,
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
          margin: `${Jn}px 0`,
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
        marginTop: Jn,
        marginBottom: Jn,
        lineHeight: `${i - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Jn * 2,
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
        "&-remove": Object.assign(Object.assign({}, $l()), {
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
const BP = (e) => {
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
  }), [, o] = _0(e);
  return [
    fc(e),
    // ======================== Small ========================
    fc(r, "sm"),
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
    fc(n, "lg")
  ];
}, WP = BP;
function dc(e, t) {
  const {
    componentCls: r,
    inputPaddingHorizontalBase: n,
    borderRadius: o
  } = e, i = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${r}-selector`]: Object.assign(Object.assign({}, ls(e)), {
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
function UP(e) {
  const {
    componentCls: t
  } = e, r = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    dc(e),
    // ======================== Small ========================
    // Shared
    dc(tr(e, {
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
    dc(tr(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const qP = (e) => {
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
}, hc = function(e, t) {
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
}, QP = (e) => {
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
}, GP = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: r,
    iconCls: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, ls(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, qP(e)), QP(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, fu),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, fu), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, $l()), {
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
}, KP = (e) => {
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
    GP(e),
    // Single
    UP(e),
    // Multiple
    WP(e),
    // Dropdown
    HP(e),
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
    hc(t, tr(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    hc(`${t}-status-error`, tr(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    hc(`${t}-status-warning`, tr(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    jg(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, YP = Oi("Select", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = tr(e, {
    rootPrefixCls: r,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [KP(n)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), XP = (e) => {
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
function JP(e, t) {
  return e || XP(t);
}
function ZP(e, t) {
  return t !== void 0 ? t : e !== null;
}
var eN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const tN = eN;
var x0 = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: tN
  }));
};
process.env.NODE_ENV !== "production" && (x0.displayName = "CheckOutlined");
const rN = /* @__PURE__ */ v.forwardRef(x0);
var nN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const oN = nN;
var R0 = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: oN
  }));
};
process.env.NODE_ENV !== "production" && (R0.displayName = "DownOutlined");
const iN = /* @__PURE__ */ v.forwardRef(R0);
var aN = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const sN = aN;
var T0 = function(t, r) {
  return /* @__PURE__ */ v.createElement(Yr, Ae({}, t, {
    ref: r,
    icon: sN
  }));
};
process.env.NODE_ENV !== "production" && (T0.displayName = "SearchOutlined");
const cN = /* @__PURE__ */ v.forwardRef(T0);
function uN(e) {
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
    showArrow: f,
    componentName: d
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && or(!r, d, "`clearIcon` is deprecated, please use `allowClear={{ clearIcon: React.ReactNode }}` instead.");
  const h = r ?? /* @__PURE__ */ v.createElement(yg, null), m = (y) => t === null && !s && !f ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, u !== !1 && y, s && l);
  let p = null;
  if (t !== void 0)
    p = m(t);
  else if (i)
    p = m(/* @__PURE__ */ v.createElement(Wl, {
      spin: !0
    }));
  else {
    const y = `${c}-suffix`;
    p = (S) => {
      let {
        open: w,
        showSearch: E
      } = S;
      return m(w && E ? /* @__PURE__ */ v.createElement(cN, {
        className: y
      }) : /* @__PURE__ */ v.createElement(iN, {
        className: y
      }));
    };
  }
  let g = null;
  n !== void 0 ? g = n : a ? g = /* @__PURE__ */ v.createElement(rN, null) : g = null;
  let b = null;
  return o !== void 0 ? b = o : b = /* @__PURE__ */ v.createElement(Eg, null), {
    clearIcon: h,
    suffixIcon: p,
    itemIcon: g,
    removeIcon: b
  };
}
var lN = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const P0 = "SECRET_COMBOBOX_MODE_DO_NOT_USE", N0 = (e, t) => {
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
    builtinPlacements: b,
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: S,
    direction: w,
    style: E,
    allowClear: C
  } = e, O = lN(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
  const {
    getPopupContainer: T,
    getPrefixCls: P,
    renderEmpty: x,
    direction: L,
    virtual: R,
    popupMatchSelectWidth: _,
    popupOverflow: N,
    select: D
  } = v.useContext(ir), A = P("select", n), F = P(), B = w ?? L, {
    compactSize: q,
    compactItemClassnames: ne
  } = $g(A, B), [se, k] = YP(A), H = v.useMemo(() => {
    const {
      mode: ze
    } = O;
    if (ze !== "combobox")
      return ze === P0 ? "combobox" : ze;
  }, [O.mode]), j = H === "multiple" || H === "tags", K = ZP(O.suffixIcon, O.showArrow), M = (r = S ?? y) !== null && r !== void 0 ? r : _, {
    status: Q,
    hasFeedback: $,
    isFormItemInput: X,
    feedbackIcon: re
  } = v.useContext(HR), J = MP(Q, g);
  let I;
  p !== void 0 ? I = p : H === "combobox" ? I = null : I = x?.("Select") || /* @__PURE__ */ v.createElement(jP, {
    componentName: "Select"
  });
  const {
    suffixIcon: Z,
    itemIcon: V,
    removeIcon: ee,
    clearIcon: fe
  } = uN(Object.assign(Object.assign({}, O), {
    multiple: j,
    hasFeedback: $,
    feedbackIcon: re,
    showSuffixIcon: K,
    prefixCls: A,
    showArrow: O.showArrow,
    componentName: "Select"
  })), ae = C === !0 ? {
    clearIcon: fe
  } : C, ve = _l(O, ["suffixIcon", "itemIcon"]), me = Ie(c || u, {
    [`${A}-dropdown-${B}`]: B === "rtl"
  }, a, k), oe = Fg((ze) => {
    var qe;
    return (qe = h ?? q) !== null && qe !== void 0 ? qe : ze;
  }), de = v.useContext(kl), Ne = m ?? de, Me = Ie({
    [`${A}-lg`]: oe === "large",
    [`${A}-sm`]: oe === "small",
    [`${A}-rtl`]: B === "rtl",
    [`${A}-borderless`]: !o,
    [`${A}-in-form-item`]: X
  }, IP(A, J, $), ne, D?.className, i, a, k), ue = v.useMemo(() => f !== void 0 ? f : B === "rtl" ? "bottomRight" : "bottomLeft", [f, B]), ge = JP(b, N);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && or(!u, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && or(y === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead."), process.env.NODE_ENV !== "production" && or(!("showArrow" in O), "Select", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.")), se(/* @__PURE__ */ v.createElement(tf, Object.assign({
    ref: t,
    virtual: R,
    showSearch: D?.showSearch
  }, ve, {
    style: Object.assign(Object.assign({}, D?.style), E),
    dropdownMatchSelectWidth: M,
    builtinPlacements: ge,
    transitionName: kx(F, "slide-up", O.transitionName),
    listHeight: l,
    listItemHeight: d,
    mode: H,
    prefixCls: A,
    placement: ue,
    direction: B,
    suffixIcon: Z,
    menuItemSelectedIcon: V,
    removeIcon: ee,
    allowClear: ae,
    notFoundContent: I,
    className: Me,
    getPopupContainer: s || T,
    dropdownClassName: me,
    disabled: Ne
  })));
};
process.env.NODE_ENV !== "production" && (N0.displayName = "Select");
const Ln = /* @__PURE__ */ v.forwardRef(N0), fN = aT(Ln);
Ln.SECRET_COMBOBOX_MODE_DO_NOT_USE = P0;
Ln.Option = ef;
Ln.OptGroup = Zl;
Ln._InternalPanelDoNotUseOrYouWillBeFired = fN;
process.env.NODE_ENV !== "production" && (Ln.displayName = "Select");
const dN = Ln;
let mr = null, wn = (e) => e(), pi = [], za = {};
function hN() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = za, a = e ?? Km().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const vN = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: d,
      container: h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: b
    } = hN();
    return {
      prefixCls: d,
      getContainer: () => h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: b
    };
  }, [n, o] = v.useState(r), [i, a] = Ng(n), s = Km(), c = s.getRootPrefixCls(), u = s.getIconPrefixCls(), l = s.getTheme(), f = () => {
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
  }), /* @__PURE__ */ v.createElement(jl, {
    prefixCls: c,
    iconPrefixCls: u,
    theme: l
  }, a);
});
function Es() {
  if (!mr) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    mr = t, wn(() => {
      Ig(/* @__PURE__ */ v.createElement(vN, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, Es());
          });
        }
      }), e);
    });
    return;
  }
  mr.instance && (pi.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          wn(() => {
            const n = mr.instance.open(Object.assign(Object.assign({}, za), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          wn(() => {
            mr?.instance.destroy(e.key);
          });
          break;
        default:
          wn(() => {
            var n;
            const o = (n = mr.instance)[t].apply(n, Ee(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), pi = []);
}
function pN(e) {
  za = Object.assign(Object.assign({}, za), e), wn(() => {
    var t;
    (t = mr?.sync) === null || t === void 0 || t.call(mr);
  });
}
function mN(e) {
  const t = Ul((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return pi.push(o), () => {
      n ? wn(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return Es(), t;
}
function gN(e, t) {
  process.env.NODE_ENV !== "production" && B2("message");
  const r = Ul((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return pi.push(i), () => {
      o ? wn(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return Es(), r;
}
function yN(e) {
  pi.push({
    type: "destroy",
    key: e
  }), Es();
}
const bN = ["success", "info", "warning", "error", "loading"], EN = {
  open: mN,
  destroy: yN,
  config: pN,
  useMessage: k_,
  _InternalPanelDoNotUseOrYouWillBeFired: I_
}, I0 = EN;
bN.forEach((e) => {
  I0[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return gN(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const SN = I0, M0 = gi(
  {}
), tM = ({ children: e }) => {
  const [t, r] = SN.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Ev(Qu, { children: [
    r,
    /* @__PURE__ */ xt(M0.Provider, { value: { open: n }, children: e })
  ] });
}, rM = () => Kt(M0), nM = () => {
  Ut(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class oM {
  async operate(t, r, n = "query") {
    const o = {
      variables: r ? {
        payload: r
      } : void 0
    };
    let i;
    try {
      return n === "mutate" ? i = await cd.mutate({
        mutation: t.gql,
        ...o
      }) : i = await cd.query({
        query: t.gql,
        ...o
      }), [i?.data?.[t.method], null];
    } catch (a) {
      return _isDev_ && console.log(a), [null, a];
    }
  }
}
var A0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, nv = Pe.createContext && Pe.createContext(A0), an = globalThis && globalThis.__assign || function() {
  return an = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, an.apply(this, arguments);
}, wN = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function D0(e) {
  return e && e.map(function(t, r) {
    return Pe.createElement(t.tag, an({
      key: r
    }, t.attr), D0(t.child));
  });
}
function ar(e) {
  return function(t) {
    return Pe.createElement(CN, an({
      attr: an({}, e.attr)
    }, t), D0(e.child));
  };
}
function CN(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, i = e.title, a = wN(e, ["attr", "size", "title"]), s = o || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), Pe.createElement("svg", an({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: an(an({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Pe.createElement("title", null, i), e.children);
  };
  return nv !== void 0 ? Pe.createElement(nv.Consumer, null, function(r) {
    return t(r);
  }) : t(A0);
}
function iM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function aM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function sM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function cM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function uM(e) {
  return ar({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function lM(e) {
  return ar({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function fM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function dM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function hM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function vM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function pM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function mM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function gM(e) {
  return ar({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function yM(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const bM = ({ children: e, override: t, ...r }) => /* @__PURE__ */ xt(jl, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ xt($x, { ...r, style: { minWidth: "85px" }, children: e }) });
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
function ON() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _N() {
  let [, e] = dr(/* @__PURE__ */ Object.create(null));
  return mc(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var xN = ON() ? bv : Ut, RN = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = v.useRef(null), o = v.useRef(null), i = _N();
  return v.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), xN(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return o.current = a?.createElement(t), s.appendChild(o.current), i(), () => {
      o.current && s && s.removeChild(o.current);
    };
  }, [t, i, r]), o.current ? Gu(e, o.current) : /* @__PURE__ */ v.createElement("span", {
    ref: n
  });
}, F0 = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = v.useState(!1);
  return v.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ v.createElement(RN, {
    ...t
  });
};
F0.displayName = "Portal";
const TN = () => ({
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
var Lu = { exports: {} }, Ze = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov;
function PN() {
  if (ov)
    return Ze;
  ov = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
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
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ze.ContextConsumer = a, Ze.ContextProvider = i, Ze.Element = e, Ze.ForwardRef = c, Ze.Fragment = r, Ze.Lazy = d, Ze.Memo = f, Ze.Portal = t, Ze.Profiler = o, Ze.StrictMode = n, Ze.Suspense = u, Ze.SuspenseList = l, Ze.isAsyncMode = function() {
    return !1;
  }, Ze.isConcurrentMode = function() {
    return !1;
  }, Ze.isContextConsumer = function(g) {
    return p(g) === a;
  }, Ze.isContextProvider = function(g) {
    return p(g) === i;
  }, Ze.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Ze.isForwardRef = function(g) {
    return p(g) === c;
  }, Ze.isFragment = function(g) {
    return p(g) === r;
  }, Ze.isLazy = function(g) {
    return p(g) === d;
  }, Ze.isMemo = function(g) {
    return p(g) === f;
  }, Ze.isPortal = function(g) {
    return p(g) === t;
  }, Ze.isProfiler = function(g) {
    return p(g) === o;
  }, Ze.isStrictMode = function(g) {
    return p(g) === n;
  }, Ze.isSuspense = function(g) {
    return p(g) === u;
  }, Ze.isSuspenseList = function(g) {
    return p(g) === l;
  }, Ze.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === l || g === h || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === i || g.$$typeof === a || g.$$typeof === c || g.$$typeof === m || g.getModuleId !== void 0);
  }, Ze.typeOf = p, Ze;
}
var et = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;
function NN() {
  return iv || (iv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, p = !1, g = !1, b = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function w(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === o || y || V === n || V === u || V === l || b || V === h || m || p || g || typeof V == "object" && V !== null && (V.$$typeof === d || V.$$typeof === f || V.$$typeof === i || V.$$typeof === a || V.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === S || V.getModuleId !== void 0));
    }
    function E(V) {
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
                var ae = fe && fe.$$typeof;
                switch (ae) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case f:
                  case i:
                    return ae;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var C = a, O = i, T = e, P = c, x = r, L = d, R = f, _ = t, N = o, D = n, A = u, F = l, B = !1, q = !1;
    function ne(V) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(V) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(V) {
      return E(V) === a;
    }
    function H(V) {
      return E(V) === i;
    }
    function j(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function K(V) {
      return E(V) === c;
    }
    function M(V) {
      return E(V) === r;
    }
    function Q(V) {
      return E(V) === d;
    }
    function $(V) {
      return E(V) === f;
    }
    function X(V) {
      return E(V) === t;
    }
    function re(V) {
      return E(V) === o;
    }
    function J(V) {
      return E(V) === n;
    }
    function I(V) {
      return E(V) === u;
    }
    function Z(V) {
      return E(V) === l;
    }
    et.ContextConsumer = C, et.ContextProvider = O, et.Element = T, et.ForwardRef = P, et.Fragment = x, et.Lazy = L, et.Memo = R, et.Portal = _, et.Profiler = N, et.StrictMode = D, et.Suspense = A, et.SuspenseList = F, et.isAsyncMode = ne, et.isConcurrentMode = se, et.isContextConsumer = k, et.isContextProvider = H, et.isElement = j, et.isForwardRef = K, et.isFragment = M, et.isLazy = Q, et.isMemo = $, et.isPortal = X, et.isProfiler = re, et.isStrictMode = J, et.isSuspense = I, et.isSuspenseList = Z, et.isValidElementType = w, et.typeOf = E;
  }()), et;
}
process.env.NODE_ENV === "production" ? Lu.exports = PN() : Lu.exports = NN();
var rf = Lu.exports;
function IN(e) {
  function t(k, H, j, K, M) {
    for (var Q = 0, $ = 0, X = 0, re = 0, J, I, Z = 0, V = 0, ee, fe = ee = J = 0, ae = 0, ve = 0, me = 0, oe = 0, de = j.length, Ne = de - 1, Me, ue = "", ge = "", ze = "", qe = "", nt; ae < de; ) {
      if (I = j.charCodeAt(ae), ae === Ne && $ + re + X + Q !== 0 && ($ !== 0 && (I = $ === 47 ? 10 : 47), re = X = Q = 0, de++, Ne++), $ + re + X + Q === 0) {
        if (ae === Ne && (0 < ve && (ue = ue.replace(d, "")), 0 < ue.trim().length)) {
          switch (I) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ue += j.charAt(ae);
          }
          I = 59;
        }
        switch (I) {
          case 123:
            for (ue = ue.trim(), J = ue.charCodeAt(0), ee = 1, oe = ++ae; ae < de; ) {
              switch (I = j.charCodeAt(ae)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (I = j.charCodeAt(ae + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (fe = ae + 1; fe < Ne; ++fe)
                          switch (j.charCodeAt(fe)) {
                            case 47:
                              if (I === 42 && j.charCodeAt(fe - 1) === 42 && ae + 2 !== fe) {
                                ae = fe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (I === 47) {
                                ae = fe + 1;
                                break e;
                              }
                          }
                        ae = fe;
                      }
                  }
                  break;
                case 91:
                  I++;
                case 40:
                  I++;
                case 34:
                case 39:
                  for (; ae++ < Ne && j.charCodeAt(ae) !== I; )
                    ;
              }
              if (ee === 0)
                break;
              ae++;
            }
            switch (ee = j.substring(oe, ae), J === 0 && (J = (ue = ue.replace(f, "").trim()).charCodeAt(0)), J) {
              case 64:
                switch (0 < ve && (ue = ue.replace(d, "")), I = ue.charCodeAt(1), I) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ve = H;
                    break;
                  default:
                    ve = A;
                }
                if (ee = t(H, ve, ee, I, M + 1), oe = ee.length, 0 < B && (ve = r(A, ue, me), nt = s(3, ee, ve, H, _, R, oe, I, M, K), ue = ve.join(""), nt !== void 0 && (oe = (ee = nt.trim()).length) === 0 && (I = 0, ee = "")), 0 < oe)
                  switch (I) {
                    case 115:
                      ue = ue.replace(C, a);
                    case 100:
                    case 109:
                    case 45:
                      ee = ue + "{" + ee + "}";
                      break;
                    case 107:
                      ue = ue.replace(y, "$1 $2"), ee = ue + "{" + ee + "}", ee = D === 1 || D === 2 && i("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                      break;
                    default:
                      ee = ue + ee, K === 112 && (ee = (ge += ee, ""));
                  }
                else
                  ee = "";
                break;
              default:
                ee = t(H, r(H, ue, me), ee, K, M + 1);
            }
            ze += ee, ee = me = ve = fe = J = 0, ue = "", I = j.charCodeAt(++ae);
            break;
          case 125:
          case 59:
            if (ue = (0 < ve ? ue.replace(d, "") : ue).trim(), 1 < (oe = ue.length))
              switch (fe === 0 && (J = ue.charCodeAt(0), J === 45 || 96 < J && 123 > J) && (oe = (ue = ue.replace(" ", ":")).length), 0 < B && (nt = s(1, ue, H, k, _, R, ge.length, K, M, K)) !== void 0 && (oe = (ue = nt.trim()).length) === 0 && (ue = "\0\0"), J = ue.charCodeAt(0), I = ue.charCodeAt(1), J) {
                case 0:
                  break;
                case 64:
                  if (I === 105 || I === 99) {
                    qe += ue + j.charAt(ae);
                    break;
                  }
                default:
                  ue.charCodeAt(oe - 1) !== 58 && (ge += o(ue, J, I, ue.charCodeAt(2)));
              }
            me = ve = fe = J = 0, ue = "", I = j.charCodeAt(++ae);
        }
      }
      switch (I) {
        case 13:
        case 10:
          $ === 47 ? $ = 0 : 1 + J === 0 && K !== 107 && 0 < ue.length && (ve = 1, ue += "\0"), 0 < B * ne && s(0, ue, H, k, _, R, ge.length, K, M, K), R = 1, _++;
          break;
        case 59:
        case 125:
          if ($ + re + X + Q === 0) {
            R++;
            break;
          }
        default:
          switch (R++, Me = j.charAt(ae), I) {
            case 9:
            case 32:
              if (re + Q + $ === 0)
                switch (Z) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    I !== 32 && (Me = " ");
                }
              break;
            case 0:
              Me = "\\0";
              break;
            case 12:
              Me = "\\f";
              break;
            case 11:
              Me = "\\v";
              break;
            case 38:
              re + $ + Q === 0 && (ve = me = 1, Me = "\f" + Me);
              break;
            case 108:
              if (re + $ + Q + N === 0 && 0 < fe)
                switch (ae - fe) {
                  case 2:
                    Z === 112 && j.charCodeAt(ae - 3) === 58 && (N = Z);
                  case 8:
                    V === 111 && (N = V);
                }
              break;
            case 58:
              re + $ + Q === 0 && (fe = ae);
              break;
            case 44:
              $ + X + re + Q === 0 && (ve = 1, Me += "\r");
              break;
            case 34:
            case 39:
              $ === 0 && (re = re === I ? 0 : re === 0 ? I : re);
              break;
            case 91:
              re + $ + X === 0 && Q++;
              break;
            case 93:
              re + $ + X === 0 && Q--;
              break;
            case 41:
              re + $ + Q === 0 && X--;
              break;
            case 40:
              if (re + $ + Q === 0) {
                if (J === 0)
                  switch (2 * Z + 3 * V) {
                    case 533:
                      break;
                    default:
                      J = 1;
                  }
                X++;
              }
              break;
            case 64:
              $ + X + re + Q + fe + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + Q + X))
                switch ($) {
                  case 0:
                    switch (2 * I + 3 * j.charCodeAt(ae + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        oe = ae, $ = 42;
                    }
                    break;
                  case 42:
                    I === 47 && Z === 42 && oe + 2 !== ae && (j.charCodeAt(oe + 2) === 33 && (ge += j.substring(oe, ae + 1)), Me = "", $ = 0);
                }
          }
          $ === 0 && (ue += Me);
      }
      V = Z, Z = I, ae++;
    }
    if (oe = ge.length, 0 < oe) {
      if (ve = H, 0 < B && (nt = s(2, ge, ve, k, _, R, oe, K, M, K), nt !== void 0 && (ge = nt).length === 0))
        return qe + ge + ze;
      if (ge = ve.join(",") + "{" + ge + "}", D * N !== 0) {
        switch (D !== 2 || i(ge, 2) || (N = 0), N) {
          case 111:
            ge = ge.replace(w, ":-moz-$1") + ge;
            break;
          case 112:
            ge = ge.replace(S, "::-webkit-input-$1") + ge.replace(S, "::-moz-$1") + ge.replace(S, ":-ms-input-$1") + ge;
        }
        N = 0;
      }
    }
    return qe + ge + ze;
  }
  function r(k, H, j) {
    var K = H.trim().split(g);
    H = K;
    var M = K.length, Q = k.length;
    switch (Q) {
      case 0:
      case 1:
        var $ = 0;
        for (k = Q === 0 ? "" : k[0] + " "; $ < M; ++$)
          H[$] = n(k, H[$], j).trim();
        break;
      default:
        var X = $ = 0;
        for (H = []; $ < M; ++$)
          for (var re = 0; re < Q; ++re)
            H[X++] = n(k[re] + " ", K[$], j).trim();
    }
    return H;
  }
  function n(k, H, j) {
    var K = H.charCodeAt(0);
    switch (33 > K && (K = (H = H.trim()).charCodeAt(0)), K) {
      case 38:
        return H.replace(b, "$1" + k.trim());
      case 58:
        return k.trim() + H.replace(b, "$1" + k.trim());
      default:
        if (0 < 1 * j && 0 < H.indexOf("\f"))
          return H.replace(b, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + H;
  }
  function o(k, H, j, K) {
    var M = k + ";", Q = 2 * H + 3 * j + 4 * K;
    if (Q === 944) {
      k = M.indexOf(":", 9) + 1;
      var $ = M.substring(k, M.length - 1).trim();
      return $ = M.substring(0, k).trim() + $ + ";", D === 1 || D === 2 && i($, 1) ? "-webkit-" + $ + $ : $;
    }
    if (D === 0 || D === 2 && !i(M, 1))
      return M;
    switch (Q) {
      case 1015:
        return M.charCodeAt(10) === 97 ? "-webkit-" + M + M : M;
      case 951:
        return M.charCodeAt(3) === 116 ? "-webkit-" + M + M : M;
      case 963:
        return M.charCodeAt(5) === 110 ? "-webkit-" + M + M : M;
      case 1009:
        if (M.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + M + M;
      case 978:
        return "-webkit-" + M + "-moz-" + M + M;
      case 1019:
      case 983:
        return "-webkit-" + M + "-moz-" + M + "-ms-" + M + M;
      case 883:
        if (M.charCodeAt(8) === 45)
          return "-webkit-" + M + M;
        if (0 < M.indexOf("image-set(", 11))
          return M.replace(L, "$1-webkit-$2") + M;
        break;
      case 932:
        if (M.charCodeAt(4) === 45)
          switch (M.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + M.replace("-grow", "") + "-webkit-" + M + "-ms-" + M.replace("grow", "positive") + M;
            case 115:
              return "-webkit-" + M + "-ms-" + M.replace("shrink", "negative") + M;
            case 98:
              return "-webkit-" + M + "-ms-" + M.replace("basis", "preferred-size") + M;
          }
        return "-webkit-" + M + "-ms-" + M + M;
      case 964:
        return "-webkit-" + M + "-ms-flex-" + M + M;
      case 1023:
        if (M.charCodeAt(8) !== 99)
          break;
        return $ = M.substring(M.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + $ + "-webkit-" + M + "-ms-flex-pack" + $ + M;
      case 1005:
        return m.test(M) ? M.replace(h, ":-webkit-") + M.replace(h, ":-moz-") + M : M;
      case 1e3:
        switch ($ = M.substring(13).trim(), H = $.indexOf("-") + 1, $.charCodeAt(0) + $.charCodeAt(H)) {
          case 226:
            $ = M.replace(E, "tb");
            break;
          case 232:
            $ = M.replace(E, "tb-rl");
            break;
          case 220:
            $ = M.replace(E, "lr");
            break;
          default:
            return M;
        }
        return "-webkit-" + M + "-ms-" + $ + M;
      case 1017:
        if (M.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = (M = k).length - 10, $ = (M.charCodeAt(H) === 33 ? M.substring(0, H) : M).substring(k.indexOf(":", 7) + 1).trim(), Q = $.charCodeAt(0) + ($.charCodeAt(7) | 0)) {
          case 203:
            if (111 > $.charCodeAt(8))
              break;
          case 115:
            M = M.replace($, "-webkit-" + $) + ";" + M;
            break;
          case 207:
          case 102:
            M = M.replace($, "-webkit-" + (102 < Q ? "inline-" : "") + "box") + ";" + M.replace($, "-webkit-" + $) + ";" + M.replace($, "-ms-" + $ + "box") + ";" + M;
        }
        return M + ";";
      case 938:
        if (M.charCodeAt(5) === 45)
          switch (M.charCodeAt(6)) {
            case 105:
              return $ = M.replace("-items", ""), "-webkit-" + M + "-webkit-box-" + $ + "-ms-flex-" + $ + M;
            case 115:
              return "-webkit-" + M + "-ms-flex-item-" + M.replace(T, "") + M;
            default:
              return "-webkit-" + M + "-ms-flex-line-pack" + M.replace("align-content", "").replace(T, "") + M;
          }
        break;
      case 973:
      case 989:
        if (M.charCodeAt(3) !== 45 || M.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (x.test(k) === !0)
          return ($ = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(k.replace("stretch", "fill-available"), H, j, K).replace(":fill-available", ":stretch") : M.replace($, "-webkit-" + $) + M.replace($, "-moz-" + $.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, j + K === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + M;
    }
    return M;
  }
  function i(k, H) {
    var j = k.indexOf(H === 1 ? ":" : "{"), K = k.substring(0, H !== 3 ? j : 10);
    return j = k.substring(j + 1, k.length - 1), q(H !== 2 ? K : K.replace(P, "$1"), j, H);
  }
  function a(k, H) {
    var j = o(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return j !== H + ";" ? j.replace(O, " or ($1)").substring(4) : "(" + H + ")";
  }
  function s(k, H, j, K, M, Q, $, X, re, J) {
    for (var I = 0, Z = H, V; I < B; ++I)
      switch (V = F[I].call(l, k, Z, j, K, M, Q, $, X, re, J)) {
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
  function c(k) {
    switch (k) {
      case void 0:
      case null:
        B = F.length = 0;
        break;
      default:
        if (typeof k == "function")
          F[B++] = k;
        else if (typeof k == "object")
          for (var H = 0, j = k.length; H < j; ++H)
            c(k[H]);
        else
          ne = !!k | 0;
    }
    return c;
  }
  function u(k) {
    return k = k.prefix, k !== void 0 && (q = null, k ? typeof k != "function" ? D = 1 : (D = 2, q = k) : D = 0), u;
  }
  function l(k, H) {
    var j = k;
    if (33 > j.charCodeAt(0) && (j = j.trim()), se = j, j = [se], 0 < B) {
      var K = s(-1, H, j, j, _, R, 0, 0, 0, 0);
      K !== void 0 && typeof K == "string" && (H = K);
    }
    var M = t(A, j, H, 0, 0);
    return 0 < B && (K = s(-2, M, j, j, _, R, M.length, 0, 0, 0), K !== void 0 && (M = K)), se = "", N = 0, R = _ = 1, M;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, m = /zoo|gra/, p = /([,: ])(transform)/g, g = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, w = /:(read-only)/g, E = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, T = /-self|flex-/g, P = /[^]*?(:[rp][el]a[\w-]+)[^]*/, x = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, R = 1, _ = 1, N = 0, D = 1, A = [], F = [], B = 0, q = null, ne = 0, se = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
function MN(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var AN = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, av = /* @__PURE__ */ MN(
  function(e) {
    return AN.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ju = { exports: {} }, tt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function DN() {
  if (sv)
    return tt;
  sv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var C = E.$$typeof;
      switch (C) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case s:
                case l:
                case m:
                case h:
                case a:
                  return E;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function w(E) {
    return S(E) === u;
  }
  return tt.AsyncMode = c, tt.ConcurrentMode = u, tt.ContextConsumer = s, tt.ContextProvider = a, tt.Element = t, tt.ForwardRef = l, tt.Fragment = n, tt.Lazy = m, tt.Memo = h, tt.Portal = r, tt.Profiler = i, tt.StrictMode = o, tt.Suspense = f, tt.isAsyncMode = function(E) {
    return w(E) || S(E) === c;
  }, tt.isConcurrentMode = w, tt.isContextConsumer = function(E) {
    return S(E) === s;
  }, tt.isContextProvider = function(E) {
    return S(E) === a;
  }, tt.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, tt.isForwardRef = function(E) {
    return S(E) === l;
  }, tt.isFragment = function(E) {
    return S(E) === n;
  }, tt.isLazy = function(E) {
    return S(E) === m;
  }, tt.isMemo = function(E) {
    return S(E) === h;
  }, tt.isPortal = function(E) {
    return S(E) === r;
  }, tt.isProfiler = function(E) {
    return S(E) === i;
  }, tt.isStrictMode = function(E) {
    return S(E) === o;
  }, tt.isSuspense = function(E) {
    return S(E) === f;
  }, tt.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === u || E === i || E === o || E === f || E === d || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === h || E.$$typeof === a || E.$$typeof === s || E.$$typeof === l || E.$$typeof === g || E.$$typeof === b || E.$$typeof === y || E.$$typeof === p);
  }, tt.typeOf = S, tt;
}
var rt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function FN() {
  return cv || (cv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === u || I === i || I === o || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === m || I.$$typeof === h || I.$$typeof === a || I.$$typeof === s || I.$$typeof === l || I.$$typeof === g || I.$$typeof === b || I.$$typeof === y || I.$$typeof === p);
    }
    function w(I) {
      if (typeof I == "object" && I !== null) {
        var Z = I.$$typeof;
        switch (Z) {
          case t:
            var V = I.type;
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
    var E = c, C = u, O = s, T = a, P = t, x = l, L = n, R = m, _ = h, N = r, D = i, A = o, F = f, B = !1;
    function q(I) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(I) || w(I) === c;
    }
    function ne(I) {
      return w(I) === u;
    }
    function se(I) {
      return w(I) === s;
    }
    function k(I) {
      return w(I) === a;
    }
    function H(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function j(I) {
      return w(I) === l;
    }
    function K(I) {
      return w(I) === n;
    }
    function M(I) {
      return w(I) === m;
    }
    function Q(I) {
      return w(I) === h;
    }
    function $(I) {
      return w(I) === r;
    }
    function X(I) {
      return w(I) === i;
    }
    function re(I) {
      return w(I) === o;
    }
    function J(I) {
      return w(I) === f;
    }
    rt.AsyncMode = E, rt.ConcurrentMode = C, rt.ContextConsumer = O, rt.ContextProvider = T, rt.Element = P, rt.ForwardRef = x, rt.Fragment = L, rt.Lazy = R, rt.Memo = _, rt.Portal = N, rt.Profiler = D, rt.StrictMode = A, rt.Suspense = F, rt.isAsyncMode = q, rt.isConcurrentMode = ne, rt.isContextConsumer = se, rt.isContextProvider = k, rt.isElement = H, rt.isForwardRef = j, rt.isFragment = K, rt.isLazy = M, rt.isMemo = Q, rt.isPortal = $, rt.isProfiler = X, rt.isStrictMode = re, rt.isSuspense = J, rt.isValidElementType = S, rt.typeOf = w;
  }()), rt;
}
process.env.NODE_ENV === "production" ? ju.exports = DN() : ju.exports = FN();
var $N = ju.exports, nf = $N, kN = {
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
}, LN = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, jN = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, of = {};
of[nf.ForwardRef] = jN;
of[nf.Memo] = $0;
function uv(e) {
  return nf.isMemo(e) ? $0 : of[e.$$typeof] || kN;
}
var VN = Object.defineProperty, zN = Object.getOwnPropertyNames, lv = Object.getOwnPropertySymbols, HN = Object.getOwnPropertyDescriptor, BN = Object.getPrototypeOf, fv = Object.prototype;
function k0(e, t, r) {
  if (typeof t != "string") {
    if (fv) {
      var n = BN(t);
      n && n !== fv && k0(e, n, r);
    }
    var o = zN(t);
    lv && (o = o.concat(lv(t)));
    for (var i = uv(e), a = uv(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!LN[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = HN(t, c);
        try {
          VN(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var WN = k0;
const UN = /* @__PURE__ */ cl(WN);
function qr() {
  return (qr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var dv = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Vu = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !rf.typeOf(e);
}, Ha = Object.freeze([]), sn = Object.freeze({});
function mi(e) {
  return typeof e == "function";
}
function zu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function af(e) {
  return e && typeof e.styledComponentId == "string";
}
var Oo = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", sf = typeof window < "u" && "HTMLElement" in window, qN = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), QN = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function GN() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Mo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(GN.apply(void 0, [QN[e]].concat(r)).trim());
}
var KN = function() {
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
        (a <<= 1) < 0 && Mo(16, "" + r);
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
}(), ma = /* @__PURE__ */ new Map(), Ba = /* @__PURE__ */ new Map(), oi = 1, Ki = function(e) {
  if (ma.has(e))
    return ma.get(e);
  for (; Ba.has(oi); )
    oi++;
  var t = oi++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Mo(16, "" + t), ma.set(e, t), Ba.set(t, e), t;
}, YN = function(e) {
  return Ba.get(e);
}, XN = function(e, t) {
  t >= oi && (oi = t + 1), ma.set(e, t), Ba.set(t, e);
}, JN = "style[" + Oo + '][data-styled-version="5.3.6"]', ZN = new RegExp("^" + Oo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), eI = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, tI = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(ZN);
      if (s) {
        var c = 0 | parseInt(s[1], 10), u = s[2];
        c !== 0 && (XN(u, c), eI(e, u, s[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, rI = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, L0 = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var c = s.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(Oo))
        return l;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Oo, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = rI();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, nI = function() {
  function e(r) {
    var n = this.element = L0(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var c = i[a];
        if (c.ownerNode === o)
          return c;
      }
      Mo(17);
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
}(), oI = function() {
  function e(r) {
    var n = this.element = L0(r);
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
}(), iI = function() {
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
}(), hv = sf, aI = { isServer: !sf, useCSSOMInjection: !qN }, j0 = function() {
  function e(r, n, o) {
    r === void 0 && (r = sn), n === void 0 && (n = {}), this.options = qr({}, aI, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && sf && hv && (hv = !1, function(i) {
      for (var a = document.querySelectorAll(JN), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(Oo) !== "active" && (tI(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Ki(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(qr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new iI(a) : i ? new nI(a) : new oI(a), new KN(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Ki(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Ki(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Ki(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = YN(a);
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
}(), sI = /(a)(d)/gi, vv = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Hu(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = vv(t % 52) + r;
  return (vv(t % 52) + r).replace(sI, "$1-$2");
}
var yn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, V0 = function(e) {
  return yn(5381, e);
};
function cI(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (mi(r) && !af(r))
      return !1;
  }
  return !0;
}
var uI = V0("5.3.6"), lI = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && cI(t), this.componentId = r, this.baseHash = yn(uI, r), this.baseStyle = n, j0.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = _o(this.rules, t, r, n).join(""), s = Hu(yn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var c = n(a, "." + s, void 0, o);
          r.insertRules(o, s, c);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var u = this.rules.length, l = yn(this.baseHash, n.hash), f = "", d = 0; d < u; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (l = yn(l, h + d));
        else if (h) {
          var m = _o(h, t, r, n), p = Array.isArray(m) ? m.join("") : m;
          l = yn(l, p + d), f += p;
        }
      }
      if (f) {
        var g = Hu(l >>> 0);
        if (!r.hasNameForId(o, g)) {
          var b = n(f, "." + g, void 0, o);
          r.insertRules(o, g, b);
        }
        i.push(g);
      }
    }
    return i.join(" ");
  }, e;
}(), fI = /^\s*\/\/.*$/gm, dI = [":", "[", ".", "#"];
function hI(e) {
  var t, r, n, o, i = e === void 0 ? sn : e, a = i.options, s = a === void 0 ? sn : a, c = i.plugins, u = c === void 0 ? Ha : c, l = new IN(s), f = [], d = function(p) {
    function g(b) {
      if (b)
        try {
          p(b + "}");
        } catch {
        }
    }
    return function(b, y, S, w, E, C, O, T, P, x) {
      switch (b) {
        case 1:
          if (P === 0 && y.charCodeAt(0) === 64)
            return p(y + ";"), "";
          break;
        case 2:
          if (T === 0)
            return y + "/*|*/";
          break;
        case 3:
          switch (T) {
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
  }), h = function(p, g, b) {
    return g === 0 && dI.indexOf(b[r.length]) !== -1 || b.match(o) ? p : "." + t;
  };
  function m(p, g, b, y) {
    y === void 0 && (y = "&");
    var S = p.replace(fI, ""), w = g && b ? b + " " + g + " { " + S + " }" : S;
    return t = y, r = g, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), l(b || !g ? "" : g, w);
  }
  return l.use([].concat(u, [function(p, g, b) {
    p === 2 && b.length && b[0].lastIndexOf(r) > 0 && (b[0] = b[0].replace(n, h));
  }, d, function(p) {
    if (p === -2) {
      var g = f;
      return f = [], g;
    }
  }])), m.hash = u.length ? u.reduce(function(p, g) {
    return g.name || Mo(15), yn(p, g.name);
  }, 5381).toString() : "", m;
}
var z0 = Pe.createContext();
z0.Consumer;
var H0 = Pe.createContext(), vI = (H0.Consumer, new j0()), Bu = hI();
function pI() {
  return Kt(z0) || vI;
}
function mI() {
  return Kt(H0) || Bu;
}
var gI = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Bu);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Mo(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Bu), this.name + t.hash;
  }, e;
}(), yI = /([A-Z])/, bI = /([A-Z])/g, EI = /^ms-/, SI = function(e) {
  return "-" + e.toLowerCase();
};
function pv(e) {
  return yI.test(e) ? e.replace(bI, SI).replace(EI, "-ms-") : e;
}
var mv = function(e) {
  return e == null || e === !1 || e === "";
};
function _o(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = _o(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (mv(e))
    return "";
  if (af(e))
    return "." + e.styledComponentId;
  if (mi(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && rf.isElement(c) && console.warn(zu(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), _o(c, t, r, n);
  }
  var u;
  return e instanceof gI ? r ? (e.inject(r, n), e.getName(n)) : e : Vu(e) ? function l(f, d) {
    var h, m, p = [];
    for (var g in f)
      f.hasOwnProperty(g) && !mv(f[g]) && (Array.isArray(f[g]) && f[g].isCss || mi(f[g]) ? p.push(pv(g) + ":", f[g], ";") : Vu(f[g]) ? p.push.apply(p, l(f[g], g)) : p.push(pv(g) + ": " + (h = g, (m = f[g]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || h in lm ? String(m).trim() : m + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var gv = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function fn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return mi(e) || Vu(e) ? gv(_o(dv(Ha, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : gv(_o(dv(e, r)));
}
var yv = /invalid hook call/i, Yi = /* @__PURE__ */ new Set(), wI = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (yv.test(i))
          o = !1, Yi.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            s[c - 1] = arguments[c];
          n.apply(void 0, [i].concat(s));
        }
      }, $e(), o && !Yi.has(r) && (console.warn(r), Yi.add(r));
    } catch (i) {
      yv.test(i.message) && Yi.delete(r);
    } finally {
      console.error = n;
    }
  }
}, CI = function(e, t, r) {
  return r === void 0 && (r = sn), e.theme !== r.theme && e.theme || t || r.theme;
}, OI = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, _I = /(^-|-$)/g;
function vc(e) {
  return e.replace(OI, "-").replace(_I, "");
}
var xI = function(e) {
  return Hu(V0(e) >>> 0);
};
function Xi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Wu = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, RI = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function TI(e, t, r) {
  var n = e[r];
  Wu(t) && Wu(n) ? B0(n, t) : e[r] = t;
}
function B0(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (Wu(a))
      for (var s in a)
        RI(s) && TI(e, a[s], s);
  }
  return e;
}
var W0 = Pe.createContext();
W0.Consumer;
var pc = {};
function U0(e, t, r) {
  var n = af(e), o = !Xi(e), i = t.attrs, a = i === void 0 ? Ha : i, s = t.componentId, c = s === void 0 ? function(y, S) {
    var w = typeof y != "string" ? "sc" : vc(y);
    pc[w] = (pc[w] || 0) + 1;
    var E = w + "-" + xI("5.3.6" + w + pc[w]);
    return S ? S + "-" + E : E;
  }(t.displayName, t.parentComponentId) : s, u = t.displayName, l = u === void 0 ? function(y) {
    return Xi(y) ? "styled." + y : "Styled(" + zu(y) + ")";
  }(e) : u, f = t.displayName && t.componentId ? vc(t.displayName) + "-" + t.componentId : t.componentId || c, d = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(y, S, w) {
    return e.shouldForwardProp(y, S, w) && t.shouldForwardProp(y, S, w);
  } : e.shouldForwardProp);
  var m, p = new lI(r, f, n ? e.componentStyle : void 0), g = p.isStatic && a.length === 0, b = function(y, S) {
    return function(w, E, C, O) {
      var T = w.attrs, P = w.componentStyle, x = w.defaultProps, L = w.foldedComponentIds, R = w.shouldForwardProp, _ = w.styledComponentId, N = w.target;
      process.env.NODE_ENV !== "production" && lf(_);
      var D = function(K, M, Q) {
        K === void 0 && (K = sn);
        var $ = qr({}, M, { theme: K }), X = {};
        return Q.forEach(function(re) {
          var J, I, Z, V = re;
          for (J in mi(V) && (V = V($)), V)
            $[J] = X[J] = J === "className" ? (I = X[J], Z = V[J], I && Z ? I + " " + Z : I || Z) : V[J];
        }), [$, X];
      }(CI(E, Kt(W0), x) || sn, E, T), A = D[0], F = D[1], B = function(K, M, Q, $) {
        var X = pI(), re = mI(), J = M ? K.generateAndInjectStyles(sn, X, re) : K.generateAndInjectStyles(Q, X, re);
        return process.env.NODE_ENV !== "production" && lf(J), process.env.NODE_ENV !== "production" && !M && $ && $(J), J;
      }(P, O, A, process.env.NODE_ENV !== "production" ? w.warnTooManyClasses : void 0), q = C, ne = F.$as || E.$as || F.as || E.as || N, se = Xi(ne), k = F !== E ? qr({}, E, {}, F) : E, H = {};
      for (var j in k)
        j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? H.as = k[j] : (R ? R(j, av, ne) : !se || av(j)) && (H[j] = k[j]));
      return E.style && F.style !== E.style && (H.style = qr({}, E.style, {}, F.style)), H.className = Array.prototype.concat(L, _, B !== _ ? B : null, E.className, F.className).filter(Boolean).join(" "), H.ref = q, K0(ne, H);
    }(m, y, S, g);
  };
  return b.displayName = l, (m = Pe.forwardRef(b)).attrs = d, m.componentStyle = p, m.displayName = l, m.shouldForwardProp = h, m.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ha, m.styledComponentId = f, m.target = n ? e.target : e, m.withComponent = function(y) {
    var S = t.componentId, w = function(C, O) {
      if (C == null)
        return {};
      var T, P, x = {}, L = Object.keys(C);
      for (P = 0; P < L.length; P++)
        T = L[P], O.indexOf(T) >= 0 || (x[T] = C[T]);
      return x;
    }(t, ["componentId"]), E = S && S + "-" + (Xi(y) ? y : vc(zu(y)));
    return U0(y, qr({}, w, { attrs: d, componentId: E }), r);
  }, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = n ? B0({}, e.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (wI(l, f), m.warnTooManyClasses = function(y, S) {
    var w = {}, E = !1;
    return function(C) {
      if (!E && (w[C] = !0, Object.keys(w).length >= 200)) {
        var O = S ? ' with the id of "' + S + '"' : "";
        console.warn("Over 200 classes were generated for component " + y + O + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, w = {};
      }
    };
  }(l, f)), m.toString = function() {
    return "." + m.styledComponentId;
  }, o && UN(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m;
}
var Uu = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = sn), !rf.isValidElementType(n))
      return Mo(1, String(n));
    var i = function() {
      return r(n, o, fn.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, qr({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, qr({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(U0, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Uu[e] = Uu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ao = Uu, cf = (e = "100%", t = e) => fn`
  width: ${e};
  height: ${t};
`;
fn`
  border: 1px solid red;
`;
const PI = (e = "flex-start", t = "stretch", r = "row") => fn`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, q0 = (e = "&") => fn`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, An = (e) => fn`
  ${({ theme: t }) => t[e]}
`, NI = (e) => fn`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, II = fn`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, MI = "1px solid", AI = Ao.div`
  ${PI("center", "center")};
  ${NI({
  left: "0",
  top: "0"
})}
  ${cf("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, DI = Ao.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${An("grey")};
  border: 2px solid ${An("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${II};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${q0()};
`, FI = Ao.div`
  margin: 0 auto;
  margin-top: 18px;
  ${cf("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${An("light")};
  }
`, EM = Ao.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${MI} ${An("lightGrey")};
`, SM = Ao.div`
  background: ${An("lightGrey")};
  ${cf("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, $I = ({
  onClose: e,
  isOpen: t,
  children: r,
  width: n,
  height: o
}) => {
  const { Spring: i, Gesture: a } = Ap(), { opacity: s, transform: c } = TN(), u = i.useTransition(t, {
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
  ), b = (y) => {
    y.stopPropagation();
  };
  return /* @__PURE__ */ xt(Qu, { children: u((y, S) => /* @__PURE__ */ xt(Np, { when: S, children: /* @__PURE__ */ xt(F0, { children: /* @__PURE__ */ xt(AI, { style: y, onClick: e, as: i.a.div, children: /* @__PURE__ */ xt(
    DI,
    {
      style: { ...l, x: m, y: h, scale: p },
      ...g(),
      onClick: b,
      as: i.a.div,
      $width: n,
      $height: o,
      children: /* @__PURE__ */ xt(
        ey,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ xt(FI, { children: r })
        }
      )
    }
  ) }) }) })) });
}, wM = (e) => /* @__PURE__ */ xt(Mp, { children: /* @__PURE__ */ xt($I, { ...e }) }), kI = (e, t) => {
  const { Spring: r, Gesture: n } = Ap(), [{ y: o }, i] = r.useSpring(() => ({ y: t })), a = () => {
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
}, LI = Ao.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${An("darkBlue")};
  border-top: 2px solid ${An("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${q0()};
`, jI = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const o = kI(t, n);
  return Ut(() => {
    o.toggle(r);
  }, [r]), /* @__PURE__ */ xt(
    LI,
    {
      $bottom: n,
      ...o.bind(),
      style: o.springs,
      as: o.div,
      children: e
    }
  );
}, CM = (e) => /* @__PURE__ */ xt(Mp, { children: /* @__PURE__ */ xt(jI, { ...e }) }), OM = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ xt(
  dN,
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
  iM as AiOutlineClose,
  aM as AiOutlineHtml5,
  sM as AiOutlineInfoCircle,
  cM as AiOutlineSwap,
  Mp as AnimationProvider,
  oM as ApolloMiddleware,
  uM as BsJournals,
  lM as BsSearch,
  bM as ColoredButton,
  Np as Display,
  eM as ErrorBoundary,
  fM as GoTerminal,
  dM as GrClear,
  ty as LocalStorage,
  iy as LocalStorageClient,
  hM as LuTestTube2,
  vM as MdFindReplace,
  wM as Modal,
  SM as ModalSeparator,
  EM as ModalTitle,
  M0 as NotificationsContext,
  tM as NotificationsProvider,
  CM as Popover,
  GI as PrivatePaths,
  bS as RoutePaths,
  OM as Select,
  pM as SlInfo,
  mM as SlSizeFullscreen,
  gM as TfiSettings,
  yM as VscPlay,
  cd as apolloClient,
  QI as httpService,
  UI as isFunction,
  WI as isObject,
  ry as isString,
  KI as useAltKeyDown,
  Ap as useAnimations,
  YI as useAsyncEffect,
  ES as useBooleanState,
  XI as useDebounce,
  JI as useFilteredEffect,
  ZI as useFullScreen,
  rM as useNotifications,
  nM as useOverflow
};
