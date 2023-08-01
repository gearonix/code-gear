import * as v from "react";
import Te, { useState as lr, useEffect as Ht, useRef as Ae, createContext as po, useMemo as fi, useContext as Qt, useLayoutEffect as fv, forwardRef as Bl, Children as B0, createRef as W0, useCallback as hc, useDebugValue as uf, createElement as U0 } from "react";
import { jsx as Ct, jsxs as dv, Fragment as Wl } from "react/jsx-runtime";
import * as q0 from "react-dom";
import Q0, { createPortal as Ul, unstable_batchedUpdates as G0, flushSync as K0 } from "react-dom";
import Y0 from "react-smooth-scrollbar";
const X0 = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, eM = (e) => typeof e == "object" && e !== null, J0 = (e) => typeof e == "string", tM = (e) => typeof e == "function";
process.env.CLIENT_URL;
const Z0 = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const hv = process.env.SERVER_URL ?? "http://localhost:6868", ey = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class ty {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? ry(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in X0))) {
      if (J0(r))
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
    return `${Z0}__${t}`;
  }
}
const ry = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var vc = function(e, t) {
  return vc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, vc(e, t);
};
function Tr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  vc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var V = function() {
  return V = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, V.apply(this, arguments);
};
function Rn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function en(e, t, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(a) {
      a(o);
    });
  }
  return new (r || (r = Promise))(function(o, a) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      u.done ? o(u.value) : i(u.value).then(s, c);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function tn(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done)
          return o;
        switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = l;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(l);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (u) {
        l = [6, u], i = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function wn(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Cs = "Invariant Violation", ff = Object.setPrototypeOf, ny = ff === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : ff, Qe = (
  /** @class */
  function(e) {
    Tr(t, e);
    function t(r) {
      r === void 0 && (r = Cs);
      var n = e.call(this, typeof r == "number" ? Cs + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Cs, ny(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function le(e, t) {
  if (!e)
    throw new Qe(t);
}
var vv = ["debug", "log", "warn", "error", "silent"], iy = vv.indexOf("log");
function Ao(e) {
  return function() {
    if (vv.indexOf(e) >= iy) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Ao("debug"), e.log = Ao("log"), e.warn = Ao("warn"), e.error = Ao("error");
})(le || (le = {}));
function pr(e) {
  try {
    return e();
  } catch {
  }
}
const df = pr(function() {
  return globalThis;
}) || pr(function() {
  return window;
}) || pr(function() {
  return self;
}) || pr(function() {
  return global;
}) || pr(function() {
  return pr.constructor("return this")();
});
var hf = "__", vf = [hf, hf].join("DEV");
function oy() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(df, vf, {
      value: pr(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), df[vf];
  }
}
const Os = oy();
function rn(e) {
  try {
    return e();
  } catch {
  }
}
var pc = rn(function() {
  return globalThis;
}) || rn(function() {
  return window;
}) || rn(function() {
  return self;
}) || rn(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
rn(function() {
  return rn.constructor("return this")();
}), mc = !1;
function ay() {
  pc && !rn(function() {
    return process.env.NODE_ENV;
  }) && !rn(function() {
    return process;
  }) && (Object.defineProperty(pc, "process", {
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
  }), mc = !0);
}
ay();
function pf() {
  mc && (delete pc.process, mc = !1);
}
function Xo(e, t) {
  if (!!!e)
    throw new Error(t);
}
const pv = {
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
}, sy = new Set(Object.keys(pv));
function mf(e) {
  const t = e?.kind;
  return typeof t == "string" && sy.has(t);
}
var gf;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(gf || (gf = {}));
var kt;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(kt || (kt = {}));
function yf(e) {
  return e === 9 || e === 32;
}
function cy(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, o = n.length > 1 && n.slice(1).every((h) => h.length === 0 || yf(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, c = e.endsWith("\\"), l = s || c, u = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!i || e.length > 70 || l || o || a);
  let f = "";
  const d = i && yf(e.charCodeAt(0));
  return (u && !d || o) && (f += `
`), f += r, (u || l) && (f += `
`), '"""' + f + '"""';
}
const ly = 10, mv = 2;
function gv(e) {
  return Ha(e, []);
}
function Ha(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return uy(e, t);
    default:
      return String(e);
  }
}
function uy(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (fy(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : Ha(n, r);
  } else if (Array.isArray(e))
    return hy(e, r);
  return dy(e, r);
}
function fy(e) {
  return typeof e.toJSON == "function";
}
function dy(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > mv ? "[" + vy(e) + "]" : "{ " + r.map(
    ([i, o]) => i + ": " + Ha(o, t)
  ).join(", ") + " }";
}
function hy(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > mv)
    return "[Array]";
  const r = Math.min(ly, e.length), n = e.length - r, i = [];
  for (let o = 0; o < r; ++o)
    i.push(Ha(e[o], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function vy(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class py {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Xo(!1, `Body must be a string. Received: ${gv(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Xo(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Xo(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function my(e) {
  return `"${e.replace(gy, yy)}"`;
}
const gy = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function yy(e) {
  return by[e.charCodeAt(0)];
}
const by = [
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
], ql = Object.freeze({});
function Qr(e, t, r = pv) {
  const n = /* @__PURE__ */ new Map();
  for (const b of Object.values(kt))
    n.set(b, Ey(t, b));
  let i, o = Array.isArray(e), a = [e], s = -1, c = [], l = e, u, f;
  const d = [], h = [];
  do {
    s++;
    const b = s === a.length, y = b && c.length !== 0;
    if (b) {
      if (u = h.length === 0 ? void 0 : d[d.length - 1], l = f, f = h.pop(), y)
        if (o) {
          l = l.slice();
          let w = 0;
          for (const [S, C] of c) {
            const O = S - w;
            C === null ? (l.splice(O, 1), w++) : l[O] = C;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [w, S] of c)
            l[w] = S;
        }
      s = i.index, a = i.keys, c = i.edits, o = i.inArray, i = i.prev;
    } else if (f) {
      if (u = o ? s : a[s], l = f[u], l == null)
        continue;
      d.push(u);
    }
    let E;
    if (!Array.isArray(l)) {
      var m, p;
      mf(l) || Xo(!1, `Invalid AST Node: ${gv(l)}.`);
      const w = b ? (m = n.get(l.kind)) === null || m === void 0 ? void 0 : m.leave : (p = n.get(l.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (E = w?.call(t, l, u, f, d, h), E === ql)
        break;
      if (E === !1) {
        if (!b) {
          d.pop();
          continue;
        }
      } else if (E !== void 0 && (c.push([u, E]), !b))
        if (mf(E))
          l = E;
        else {
          d.pop();
          continue;
        }
    }
    if (E === void 0 && y && c.push([u, l]), b)
      d.pop();
    else {
      var g;
      i = {
        inArray: o,
        index: s,
        keys: a,
        edits: c,
        prev: i
      }, o = Array.isArray(l), a = o ? l : (g = r[l.kind]) !== null && g !== void 0 ? g : [], s = -1, c = [], f && h.push(f), f = l;
    }
  } while (i !== void 0);
  return c.length !== 0 ? c[c.length - 1][1] : e;
}
function Ey(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Sy(e) {
  return Qr(e, Cy);
}
const wy = 80, Cy = {
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
    leave: ({ selections: e }) => wr(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const o = Le("", e, ": ") + t;
      let a = o + Le("(", me(r, ", "), ")");
      return a.length > wy && (a = o + Le(`(
`, Jo(me(r, `
`)), `
)`)), me([a, me(n, " "), i], " ");
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
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${Le("(", me(r, ", "), ")")} on ${t} ${Le("", me(n, " "), " ")}` + i
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
    leave: ({ value: e, block: t }) => t ? cy(e) : my(e)
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
`) + me(["schema", me(t, " "), wr(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + me(["scalar", t, me(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => Le("", e, `
`) + me(
      [
        "type",
        t,
        Le("implements ", me(r, " & ")),
        me(n, " "),
        wr(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => Le("", e, `
`) + t + (bf(r) ? Le(`(
`, Jo(me(r, `
`)), `
)`) : Le("(", me(r, ", "), ")")) + ": " + n + Le(" ", me(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => Le("", e, `
`) + me(
      [t + ": " + r, Le("= ", n), me(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => Le("", e, `
`) + me(
      [
        "interface",
        t,
        Le("implements ", me(r, " & ")),
        me(n, " "),
        wr(i)
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
`) + me(["enum", t, me(r, " "), wr(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => Le("", e, `
`) + me([t, me(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => Le("", e, `
`) + me(["input", t, me(r, " "), wr(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => Le("", e, `
`) + "directive @" + t + (bf(r) ? Le(`(
`, Jo(me(r, `
`)), `
)`) : Le("(", me(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + me(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => me(
      ["extend schema", me(e, " "), wr(t)],
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
        wr(n)
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
        wr(n)
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
    leave: ({ name: e, directives: t, values: r }) => me(["extend enum", e, me(t, " "), wr(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => me(["extend input", e, me(t, " "), wr(r)], " ")
  }
};
function me(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function wr(e) {
  return Le(`{
`, Jo(me(e, `
`)), `
}`);
}
function Le(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function Jo(e) {
  return Le("  ", e.replace(/\n/g, `
  `));
}
function bf(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Ef(e) {
  return e.kind === kt.FIELD || e.kind === kt.FRAGMENT_SPREAD || e.kind === kt.INLINE_FRAGMENT;
}
function Oy() {
  return pf();
}
function _y() {
  __DEV__ ? le(typeof Os == "boolean", Os) : le(typeof Os == "boolean", 39);
}
Oy();
_y();
function Ba(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : Py(r).every(function(n) {
    var i = n.directive, o = n.ifArgument, a = !1;
    return o.value.kind === "Variable" ? (a = t && t[o.value.name.value], __DEV__ ? le(a !== void 0, "Invalid variable referenced in @".concat(i.name.value, " directive.")) : le(a !== void 0, 40)) : a = o.value.value, i.name.value === "skip" ? !a : a;
  });
}
function Ql(e, t, r) {
  var n = new Set(e), i = n.size;
  return Qr(t, {
    Directive: function(o) {
      if (n.delete(o.name.value) && (!r || !n.size))
        return ql;
    }
  }), r ? !n.size : n.size < i;
}
function xy(e) {
  return e && Ql(["client", "export"], e, !0);
}
function Ry(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Py(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (Ry(r)) {
      var n = r.arguments, i = r.name.value;
      __DEV__ ? le(n && n.length === 1, "Incorrect number of arguments for the @".concat(i, " directive.")) : le(n && n.length === 1, 41);
      var o = n[0];
      __DEV__ ? le(o.name && o.name.value === "if", "Invalid argument for the @".concat(i, " directive.")) : le(o.name && o.name.value === "if", 42);
      var a = o.value;
      __DEV__ ? le(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : le(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: r, ifArgument: o });
    }
  }), t;
}
function Ty(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(o) {
    if (o.kind === "OperationDefinition")
      throw __DEV__ ? new Qe("Found a ".concat(o.operation, " operation").concat(o.name ? " named '".concat(o.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new Qe(44);
    o.kind === "FragmentDefinition" && n.push(o);
  }), typeof r > "u" && (__DEV__ ? le(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : le(n.length === 1, 45), r = n[0].name.value);
  var i = V(V({}, e), { definitions: wn([
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
  return i;
}
function Gl(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function Kl(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return __DEV__ ? le(n, "No fragment named ".concat(r)) : le(n, 46), n || null;
    }
    default:
      return null;
  }
}
function mt(e) {
  return e !== null && typeof e == "object";
}
function si(e) {
  return { __ref: String(e) };
}
function nt(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Ny(e) {
  return mt(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function My(e) {
  return e.kind === "StringValue";
}
function Iy(e) {
  return e.kind === "BooleanValue";
}
function Dy(e) {
  return e.kind === "IntValue";
}
function Ay(e) {
  return e.kind === "FloatValue";
}
function Fy(e) {
  return e.kind === "Variable";
}
function $y(e) {
  return e.kind === "ObjectValue";
}
function ky(e) {
  return e.kind === "ListValue";
}
function Ly(e) {
  return e.kind === "EnumValue";
}
function jy(e) {
  return e.kind === "NullValue";
}
function di(e, t, r, n) {
  if (Dy(r) || Ay(r))
    e[t.value] = Number(r.value);
  else if (Iy(r) || My(r))
    e[t.value] = r.value;
  else if ($y(r)) {
    var i = {};
    r.fields.map(function(a) {
      return di(i, a.name, a.value, n);
    }), e[t.value] = i;
  } else if (Fy(r)) {
    var o = (n || {})[r.name.value];
    e[t.value] = o;
  } else if (ky(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return di(s, t, a, n), s[t.value];
    });
  else if (Ly(r))
    e[t.value] = r.value;
  else if (jy(r))
    e[t.value] = null;
  else
    throw __DEV__ ? new Qe('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new Qe(55);
}
function Vy(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(o) {
      var a = o.name, s = o.value;
      return di(r[i.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var o = i.name, a = i.value;
    return di(n, o, a, t);
  })), Yl(e.name.value, n, r);
}
var zy = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], Yl = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = t[s];
      }), "".concat(r.connection.key, "(").concat($i(i), ")");
    } else
      return r.connection.key;
  var o = e;
  if (t) {
    var a = $i(t);
    o += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    zy.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? o += "@".concat(s, "(").concat($i(r[s]), ")") : o += "@".concat(s));
  }), o;
}, {
  setStringify: function(e) {
    var t = $i;
    return $i = e, t;
  }
}), $i = function(t) {
  return JSON.stringify(t, Hy);
};
function Hy(e, t) {
  return mt(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function Wa(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, o = n.value;
      return di(r, i, o, t);
    }), r;
  }
  return null;
}
function Pn(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function gc(e, t, r) {
  for (var n, i = 0, o = t.selections; i < o.length; i++) {
    var a = o[i];
    if (Tn(a)) {
      if (a.name.value === "__typename")
        return e[Pn(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, c = n; s < c.length; s++) {
      var a = c[s], l = gc(e, Kl(a, r).selectionSet, r);
      if (typeof l == "string")
        return l;
    }
}
function Tn(e) {
  return e.kind === "Field";
}
function By(e) {
  return e.kind === "InlineFragment";
}
function Ua(e) {
  __DEV__ ? le(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : le(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new Qe('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new Qe(48);
    return r;
  });
  return __DEV__ ? le(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : le(t.length <= 1, 49), e;
}
function mo(e) {
  return Ua(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function yc(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function Xl(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function yv(e) {
  var t = mo(e);
  return __DEV__ ? le(t && t.operation === "query", "Must contain a query definition.") : le(t && t.operation === "query", 50), t;
}
function Wy(e) {
  __DEV__ ? le(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : le(e.kind === "Document", 51), __DEV__ ? le(e.definitions.length <= 1, "Fragment must have exactly one definition.") : le(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? le(t.kind === "FragmentDefinition", "Must be a fragment definition.") : le(t.kind === "FragmentDefinition", 53), t;
}
function qa(e) {
  Ua(e);
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var o = i.operation;
      if (o === "query" || o === "mutation" || o === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !t && (t = i);
  }
  if (t)
    return t;
  throw __DEV__ ? new Qe("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new Qe(54);
}
function Jl(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && di(t, n.variable.name, n.defaultValue);
  }), t;
}
var Et = Array.isArray;
function Ar(e) {
  return Array.isArray(e) && e.length > 0;
}
var Sf = {
  kind: kt.FIELD,
  name: {
    kind: kt.NAME,
    value: "__typename"
  }
};
function bv(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === kt.FRAGMENT_SPREAD && bv(t[r.name.value], t);
  });
}
function Uy(e) {
  return bv(mo(e) || Wy(e), Gl(Xl(e))) ? null : e;
}
function qy(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.forEach(function(n) {
    n.name ? t.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return t.has(n.name.value) || r.some(function(i) {
      return i(n);
    });
  };
}
function wf(e) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var i = t.get(n);
    return i || t.set(n, i = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function Ev(e, t) {
  for (var r = wf(""), n = wf(""), i = function(y) {
    for (var E = 0, w = void 0; E < y.length && (w = y[E]); ++E)
      if (!Et(w)) {
        if (w.kind === kt.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === kt.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return __DEV__ && le.error("Could not find operation or fragment"), null;
  }, o = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === kt.OPERATION_DEFINITION && ++o;
  var s = qy(e), c = e.some(function(y) {
    return y.remove;
  }), l = function(y) {
    return c && y && y.some(s);
  }, u = /* @__PURE__ */ new Map(), f = !1, d = {
    enter: function(y) {
      if (l(y.directives))
        return f = !0, null;
    }
  }, h = Qr(t, {
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(y, E, w, S, C) {
        var O = i(C);
        O && O.variables.add(y.name.value);
      }
    },
    FragmentSpread: {
      enter: function(y, E, w, S, C) {
        if (l(y.directives))
          return f = !0, null;
        var O = i(C);
        O && O.fragmentSpreads.add(y.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(y, E, w, S) {
        u.set(JSON.stringify(S), y);
      },
      leave: function(y, E, w, S) {
        var C = u.get(JSON.stringify(S));
        if (y === C)
          return y;
        if (o > 0 && y.selectionSet.selections.every(function(O) {
          return O.kind === kt.FIELD && O.name.value === "__typename";
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
    return y.transitiveVars || (y.transitiveVars = new Set(y.variables), y.removed || y.fragmentSpreads.forEach(function(E) {
      m(n(E)).transitiveVars.forEach(function(w) {
        y.transitiveVars.add(w);
      });
    })), y;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(y) {
    y.kind === kt.OPERATION_DEFINITION ? m(r(y.name && y.name.value)).fragmentSpreads.forEach(function(E) {
      p.add(E);
    }) : y.kind === kt.FRAGMENT_DEFINITION && o === 0 && !n(y.name.value).removed && p.add(y.name.value);
  }), p.forEach(function(y) {
    m(n(y)).fragmentSpreads.forEach(function(E) {
      p.add(E);
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
  return Uy(Qr(h, {
    FragmentSpread: b,
    FragmentDefinition: b,
    OperationDefinition: {
      leave: function(y) {
        if (y.variableDefinitions) {
          var E = m(r(y.name && y.name.value)).transitiveVars;
          if (E.size < y.variableDefinitions.length)
            return V(V({}, y), { variableDefinitions: y.variableDefinitions.filter(function(w) {
              return E.has(w.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Zl = Object.assign(function(e) {
  return Qr(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === kt.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var o = i.some(function(s) {
              return Tn(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!o) {
              var a = n;
              if (!(Tn(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return V(V({}, t), { selections: wn(wn([], i, !0), [Sf], !1) });
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
}), Qy = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && le.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function Gy(e) {
  return Ev([Qy], Ua(e));
}
function Ky(e) {
  var t = qa(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Qr(e, {
    OperationDefinition: {
      enter: function(i) {
        return V(V({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Yy(e) {
  Ua(e);
  var t = Ev([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var Xy = Object.prototype.hasOwnProperty;
function Cf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return eu(e);
}
function eu(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new sn(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var Jy = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, sn = function() {
  function e(t) {
    t === void 0 && (t = Jy), this.reconciler = t, this.isObject = mt, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, i = [], o = 2; o < arguments.length; o++)
      i[o - 2] = arguments[o];
    return mt(r) && mt(t) ? (Object.keys(r).forEach(function(a) {
      if (Xy.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var c = n.reconciler.apply(n, wn([t, r, a], i, !1));
          c !== s && (t = n.shallowCopyForMerge(t), t[a] = c);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return mt(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = V({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function Zy(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = eb(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eb(e, t) {
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
function tu(e, t, r) {
  return t && _f(e.prototype, t), r && _f(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ru = function() {
  return typeof Symbol == "function";
}, nu = function(e) {
  return ru() && !!Symbol[e];
}, iu = function(e) {
  return nu(e) ? Symbol[e] : "@@" + e;
};
ru() && !nu("observable") && (Symbol.observable = Symbol("observable"));
var tb = iu("iterator"), bc = iu("observable"), Sv = iu("species");
function ma(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function ki(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Sv], t === null && (t = void 0)), t !== void 0 ? t : dt;
}
function rb(e) {
  return e instanceof dt;
}
function hi(e) {
  hi.log ? hi.log(e) : setTimeout(function() {
    throw e;
  });
}
function Zo(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      hi(t);
    }
  });
}
function wv(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = ma(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      hi(n);
    }
}
function Ec(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function nb(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Cv(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Cv(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = ma(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (Ec(e), i)
          i.call(n, r);
        else
          throw r;
        break;
      case "complete":
        Ec(e), i && i.call(n);
        break;
    }
  } catch (o) {
    hi(o);
  }
  e._state === "closed" ? wv(e) : e._state === "running" && (e._state = "ready");
}
function _s(e, t, r) {
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
      }], Zo(function() {
        return nb(e);
      });
      return;
    }
    Cv(e, t, r);
  }
}
var ib = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new ob(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (o) {
      i.error(o);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Ec(this), wv(this));
  }, tu(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), ob = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    _s(this._subscription, "next", n);
  }, t.error = function(n) {
    _s(this._subscription, "error", n);
  }, t.complete = function() {
    _s(this._subscription, "complete");
  }, tu(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), dt = /* @__PURE__ */ function() {
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
    }), new ib(n, this._subscriber);
  }, t.forEach = function(n) {
    var i = this;
    return new Promise(function(o, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        c.unsubscribe(), o();
      }
      var c = i.subscribe({
        next: function(l) {
          try {
            n(l, s);
          } catch (u) {
            a(u), c.unsubscribe();
          }
        },
        error: a,
        complete: o
      });
    });
  }, t.map = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = ki(this);
    return new o(function(a) {
      return i.subscribe({
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
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = ki(this);
    return new o(function(a) {
      return i.subscribe({
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
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = ki(this), a = arguments.length > 1, s = !1, c = arguments[1], l = c;
    return new o(function(u) {
      return i.subscribe({
        next: function(f) {
          var d = !s;
          if (s = !0, !d || a)
            try {
              l = n(l, f);
            } catch (h) {
              return u.error(h);
            }
          else
            l = f;
        },
        error: function(f) {
          u.error(f);
        },
        complete: function() {
          if (!s && !a)
            return u.error(new TypeError("Cannot reduce an empty sequence"));
          u.next(l), u.complete();
        }
      });
    });
  }, t.concat = function() {
    for (var n = this, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    var s = ki(this);
    return new s(function(c) {
      var l, u = 0;
      function f(d) {
        l = d.subscribe({
          next: function(h) {
            c.next(h);
          },
          error: function(h) {
            c.error(h);
          },
          complete: function() {
            u === o.length ? (l = void 0, c.complete()) : f(s.from(o[u++]));
          }
        });
      }
      return f(n), function() {
        l && (l.unsubscribe(), l = void 0);
      };
    });
  }, t.flatMap = function(n) {
    var i = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var o = ki(this);
    return new o(function(a) {
      var s = [], c = i.subscribe({
        next: function(u) {
          if (n)
            try {
              u = n(u);
            } catch (d) {
              return a.error(d);
            }
          var f = o.from(u).subscribe({
            next: function(d) {
              a.next(d);
            },
            error: function(d) {
              a.error(d);
            },
            complete: function() {
              var d = s.indexOf(f);
              d >= 0 && s.splice(d, 1), l();
            }
          });
          s.push(f);
        },
        error: function(u) {
          a.error(u);
        },
        complete: function() {
          l();
        }
      });
      function l() {
        c.closed && s.length === 0 && a.complete();
      }
      return function() {
        s.forEach(function(u) {
          return u.unsubscribe();
        }), c.unsubscribe();
      };
    });
  }, t[bc] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var o = ma(n, bc);
    if (o) {
      var a = o.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return rb(a) && a.constructor === i ? a : new i(function(s) {
        return a.subscribe(s);
      });
    }
    if (nu("iterator") && (o = ma(n, tb), o))
      return new i(function(s) {
        Zo(function() {
          if (!s.closed) {
            for (var c = Zy(o.call(n)), l; !(l = c()).done; ) {
              var u = l.value;
              if (s.next(u), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        Zo(function() {
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
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    var a = typeof this == "function" ? this : e;
    return new a(function(s) {
      Zo(function() {
        if (!s.closed) {
          for (var c = 0; c < i.length; ++c)
            if (s.next(i[c]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, tu(e, null, [{
    key: Sv,
    get: function() {
      return this;
    }
  }]), e;
}();
ru() && Object.defineProperty(dt, Symbol("extensions"), {
  value: {
    symbol: bc,
    hostReportError: hi
  },
  configurable: !0
});
function Ov(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ab(e) {
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
var Jn;
typeof self < "u" ? Jn = self : typeof window < "u" ? Jn = window : typeof global < "u" ? Jn = global : typeof module < "u" ? Jn = module : Jn = Function("return this")();
ab(Jn);
var xf = dt.prototype, Rf = "@@observable";
xf[Rf] || (xf[Rf] = function() {
  return this;
});
var sb = Object.prototype.toString;
function _v(e) {
  return Sc(e);
}
function Sc(e, t) {
  switch (sb.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, o) {
        r[o] = Sc(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = Sc(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function cb(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    mt(r) && lb(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      mt(r[n]) && t.add(r[n]);
    });
  }), e;
}
function lb(e) {
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
function wc(e) {
  return __DEV__ && cb(e), e;
}
function qi(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function xs(e, t, r) {
  return new dt(function(n) {
    var i = n.next, o = n.error, a = n.complete, s = 0, c = !1, l = {
      then: function(h) {
        return new Promise(function(m) {
          return m(h());
        });
      }
    };
    function u(h, m) {
      return h ? function(p) {
        ++s;
        var g = function() {
          return h(p);
        };
        l = l.then(g, g).then(function(b) {
          --s, i && i.call(n, b), c && f.complete();
        }, function(b) {
          throw --s, b;
        }).catch(function(b) {
          o && o.call(n, b);
        });
      } : function(p) {
        return m && m.call(n, p);
      };
    }
    var f = {
      next: u(t, i),
      error: u(r, o),
      complete: function() {
        c = !0, s || a && a.call(n);
      }
    }, d = e.subscribe(f);
    return function() {
      return d.unsubscribe();
    };
  });
}
var Dn = typeof WeakMap == "function" && pr(function() {
  return navigator.product;
}) !== "ReactNative", ub = typeof WeakSet == "function", xv = typeof Symbol == "function" && typeof Symbol.for == "function", Qa = xv && Symbol.asyncIterator;
pr(function() {
  return window.document.createElement;
});
pr(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Rv(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: dt });
  }
  return xv && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function Pf(e) {
  return e && typeof e.then == "function";
}
var Zn = function(e) {
  Tr(t, e);
  function t(r) {
    var n = e.call(this, function(i) {
      return n.addObserver(i), function() {
        return n.removeObserver(i);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, o) {
      n.resolve = i, n.reject = o;
    }), n.handlers = {
      next: function(i) {
        n.sub !== null && (n.latest = ["next", i], n.notify("next", i), qi(n.observers, "next", i));
      },
      error: function(i) {
        var o = n.sub;
        o !== null && (o && setTimeout(function() {
          return o.unsubscribe();
        }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), qi(n.observers, "error", i));
      },
      complete: function() {
        var i = n, o = i.sub, a = i.sources, s = a === void 0 ? [] : a;
        if (o !== null) {
          var c = s.shift();
          c ? Pf(c) ? c.then(function(l) {
            return n.sub = l.subscribe(n.handlers);
          }) : n.sub = c.subscribe(n.handlers) : (o && setTimeout(function() {
            return o.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), qi(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
      n.reject(i), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(i) {
    }), typeof r == "function" && (r = [new dt(r)]), Pf(r) ? r.then(function(i) {
      return n.start(i);
    }, n.handlers.error) : n.start(r), n;
  }
  return t.prototype.start = function(r) {
    this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
  }, t.prototype.deliverLastMessage = function(r) {
    if (this.latest) {
      var n = this.latest[0], i = r[n];
      i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
    }
  }, t.prototype.addObserver = function(r) {
    this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
  }, t.prototype.removeObserver = function(r) {
    this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
  }, t.prototype.notify = function(r, n) {
    var i = this.nextResultListeners;
    i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(o) {
      return o(r, n);
    }));
  }, t.prototype.beforeNext = function(r) {
    var n = !1;
    this.nextResultListeners.add(function(i, o) {
      n || (n = !0, r(i, o));
    });
  }, t;
}(dt);
Rv(Zn);
function ci(e) {
  return "incremental" in e;
}
function fb(e) {
  return "hasNext" in e && "data" in e;
}
function db(e) {
  return ci(e) || fb(e);
}
function hb(e) {
  return mt(e) && "payload" in e;
}
function Pv(e, t) {
  var r = e, n = new sn();
  return ci(t) && Ar(t.incremental) && t.incremental.forEach(function(i) {
    for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
      var c = a[s], l = !isNaN(+c), u = l ? [] : {};
      u[c] = o, o = u;
    }
    r = n.merge(r, o);
  }), r;
}
function ea(e) {
  var t = Cc(e);
  return Ar(t);
}
function Cc(e) {
  var t = Ar(e.errors) ? e.errors.slice(0) : [];
  return ci(e) && Ar(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function Ga() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var o = n[i];
      o !== void 0 && (r[i] = o);
    });
  }), r;
}
var Tf = /* @__PURE__ */ new Map();
function Oc(e) {
  var t = Tf.get(e) || 1;
  return Tf.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function vb(e) {
  var t = Oc("stringifyForDisplay");
  return JSON.stringify(e, function(r, n) {
    return n === void 0 ? t : n;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function Rs(e, t) {
  return Ga(e, t, t.variables && {
    variables: V(V({}, e && e.variables), t.variables)
  });
}
function Nf(e) {
  return new dt(function(t) {
    t.error(e);
  });
}
var _c = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function pb(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw __DEV__ ? new Qe("illegal argument: ".concat(i)) : new Qe(27);
  }
  return e;
}
function mb(e, t) {
  var r = V({}, e), n = function(o) {
    typeof o == "function" ? r = V(V({}, r), o(r)) : r = V(V({}, r), o);
  }, i = function() {
    return V({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function gb(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? yc(t.query) || void 0 : ""), t;
}
function Mf(e, t) {
  return t ? t(e) : dt.of();
}
function Li(e) {
  return typeof e == "function" ? new wi(e) : e;
}
function Fo(e) {
  return e.request.length <= 1;
}
var yb = function(e) {
  Tr(t, e);
  function t(r, n) {
    var i = e.call(this, r) || this;
    return i.link = n, i;
  }
  return t;
}(Error), wi = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return dt.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Li).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var i = Li(r), o = Li(n || new e(Mf));
    return Fo(i) && Fo(o) ? new e(function(a) {
      return t(a) ? i.request(a) || dt.of() : o.request(a) || dt.of();
    }) : new e(function(a, s) {
      return t(a) ? i.request(a, s) || dt.of() : o.request(a, s) || dt.of();
    });
  }, e.execute = function(t, r) {
    return t.request(mb(r.context, gb(pb(r)))) || dt.of();
  }, e.concat = function(t, r) {
    var n = Li(t);
    if (Fo(n))
      return __DEV__ && le.warn(new yb("You are calling concat on a terminating link, which will have no effect", n)), n;
    var i = Li(r);
    return Fo(i) ? new e(function(o) {
      return n.request(o, function(a) {
        return i.request(a) || dt.of();
      }) || dt.of();
    }) : new e(function(o, a) {
      return n.request(o, function(s) {
        return i.request(s, a) || dt.of();
      }) || dt.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(Mf)));
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
}(), xc = wi.execute, bb = "3.7.17";
function Eb(e) {
  return !!e.body;
}
function Sb(e) {
  return !!e.getReader;
}
function wb(e) {
  return !!(Qa && e[Symbol.asyncIterator]);
}
function Cb(e) {
  return !!e.stream;
}
function Ob(e) {
  return !!e.arrayBuffer;
}
function _b(e) {
  return !!e.pipe;
}
function xb(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function Rb(e) {
  var t = null, r = null, n = !1, i = [], o = [];
  function a(f) {
    if (!r) {
      if (o.length) {
        var d = o.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function s(f) {
    r = f;
    var d = o.slice();
    d.forEach(function(h) {
      h[1](f);
    }), !t || t();
  }
  function c() {
    n = !0;
    var f = o.slice();
    f.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c);
  }, e.on("data", a), e.on("error", s), e.on("end", c), e.on("finish", c), e.on("close", c);
  function l() {
    return new Promise(function(f, d) {
      if (r)
        return d(r);
      if (i.length)
        return f({ value: i.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      o.push([f, d]);
    });
  }
  var u = {
    next: function() {
      return l();
    }
  };
  return Qa && (u[Symbol.asyncIterator] = function() {
    return this;
  }), u;
}
function Pb(e) {
  var t = !1, r = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(n, i) {
        e.then(function(o) {
          n({ value: o, done: !1 });
        }).catch(i);
      }));
    }
  };
  return Qa && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function If(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return Qa && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Tb(e) {
  var t = e;
  if (Eb(e) && (t = e.body), wb(t))
    return xb(t);
  if (Sb(t))
    return If(t.getReader());
  if (Cb(t))
    return If(t.stream().getReader());
  if (Ob(t))
    return Pb(t.arrayBuffer());
  if (_b(t))
    return Rb(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var ou = Symbol();
function Nb(e) {
  return e.extensions ? Array.isArray(e.extensions[ou]) : !1;
}
function Mb(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var Ib = function(e) {
  var t = wn(wn(wn([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return mt(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Un = function(e) {
  Tr(t, e);
  function t(r) {
    var n = r.graphQLErrors, i = r.protocolErrors, o = r.clientErrors, a = r.networkError, s = r.errorMessage, c = r.extraInfo, l = e.call(this, s) || this;
    return l.name = "ApolloError", l.graphQLErrors = n || [], l.protocolErrors = i || [], l.clientErrors = o || [], l.networkError = a || null, l.message = s || Ib(l), l.extraInfo = c, l.__proto__ = t.prototype, l;
  }
  return t;
}(Error), Df = Object.prototype.hasOwnProperty;
function Db(e, t) {
  var r, n, i, o, a;
  return en(this, void 0, void 0, function() {
    var s, c, l, u, f, d, h, m, p, g, b, y, E, w, S, C, O, T, N, x, L, R, _;
    return tn(this, function(P) {
      switch (P.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), c = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), l = "boundary=", u = c?.includes(l) ? c?.substring(c?.indexOf(l) + l.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(u), d = "", h = Tb(e), m = !0, P.label = 1;
        case 1:
          return m ? [4, h.next()] : [3, 3];
        case 2:
          for (p = P.sent(), g = p.value, b = p.done, y = typeof g == "string" ? g : s.decode(g), E = d.length - f.length + 1, m = !b, d += y, w = d.indexOf(f, E); w > -1; ) {
            if (S = void 0, R = [
              d.slice(0, w),
              d.slice(w + f.length)
            ], S = R[0], d = R[1], C = S.indexOf(`\r
\r
`), O = Ab(S.slice(0, C)), T = O["content-type"], T && T.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (N = S.slice(C), N)
              try {
                x = Tv(e, N), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x ? hb(x) ? (L = {}, "payload" in x && (L = V({}, x.payload)), "errors" in x && (L = V(V({}, L), { extensions: V(V({}, "extensions" in L ? L.extensions : null), (_ = {}, _[ou] = x.errors, _)) })), (n = t.next) === null || n === void 0 || n.call(t, L)) : (i = t.next) === null || i === void 0 || i.call(t, x) : Object.keys(x).length === 1 && "hasNext" in x && !x.hasNext && ((o = t.complete) === null || o === void 0 || o.call(t));
              } catch (I) {
                au(I, t);
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
function Ab(e) {
  var t = {};
  return e.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), o = r.slice(n + 1).trim();
      t[i] = o;
    }
  }), t;
}
function Tv(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    _c(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function au(e, t) {
  var r, n;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((r = t.next) === null || r === void 0 || r.call(t, e.result)), (n = t.error) === null || n === void 0 || n.call(t, e));
}
function Fb(e, t, r) {
  $b(t)(e).then(function(n) {
    var i, o;
    (i = r.next) === null || i === void 0 || i.call(r, n), (o = r.complete) === null || o === void 0 || o.call(r);
  }).catch(function(n) {
    return au(n, r);
  });
}
function $b(e) {
  return function(t) {
    return t.text().then(function(r) {
      return Tv(t, r);
    }).then(function(r) {
      return t.status >= 300 && _c(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !Df.call(r, "data") && !Df.call(r, "errors") && _c(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var Rc = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = __DEV__ ? new Qe("Network request failed. ".concat(t, " is not serializable: ").concat(i.message)) : new Qe(24);
    throw n.parseError = i, n;
  }
  return r;
}, kb = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Lb = {
  accept: "*/*",
  "content-type": "application/json"
}, jb = {
  method: "POST"
}, Vb = {
  http: kb,
  headers: Lb,
  options: jb
}, zb = function(e, t) {
  return t(e);
};
function Hb(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, o = {};
  r.forEach(function(f) {
    i = V(V(V({}, i), f.options), { headers: V(V({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), o = V(V({}, o), f.http);
  }), i.headers && (i.headers = Bb(i.headers, o.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, c = e.variables, l = e.query, u = { operationName: a, variables: c };
  return o.includeExtensions && (u.extensions = s), o.includeQuery && (u.query = t(l, Sy)), {
    options: i,
    body: u
  };
}
function Bb(e, t) {
  if (!t) {
    var r = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(o) {
      r[o.toLowerCase()] = e[o];
    }), r;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(o) {
    n[o.toLowerCase()] = { originalName: o, value: e[o] };
  });
  var i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(o) {
    i[n[o].originalName] = n[o].value;
  }), i;
}
var Wb = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new Qe(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new Qe(23);
}, Ub = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, qb = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function Qb(e, t) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = Rc(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var o = void 0;
    try {
      o = Rc(t.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", o);
  }
  var a = "", s = e, c = e.indexOf("#");
  c !== -1 && (a = e.substr(c), s = e.substr(0, c));
  var l = s.indexOf("?") === -1 ? "?" : "&", u = s + l + r.join("&") + a;
  return { newURI: u };
}
var Af = pr(function() {
  return fetch;
}), Nv = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, o = i === void 0 ? zb : i, a = e.includeExtensions, s = e.preserveHeaderCase, c = e.useGETForQueries, l = e.includeUnusedVariables, u = l === void 0 ? !1 : l, f = Rn(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && Wb(n || Af);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new wi(function(h) {
    var m = qb(h, r), p = h.getContext(), g = {};
    if (p.clientAwareness) {
      var b = p.clientAwareness, y = b.name, E = b.version;
      y && (g["apollographql-client-name"] = y), E && (g["apollographql-client-version"] = E);
    }
    var w = V(V({}, g), p.headers), S = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: w
    }, C = Hb(h, o, Vb, d, S), O = C.options, T = C.body;
    if (T.variables && !u) {
      var N = new Set(Object.keys(T.variables));
      Qr(h.query, {
        Variable: function(F, H, j) {
          j && j.kind !== "VariableDefinition" && N.delete(F.name.value);
        }
      }), N.size && (T.variables = V({}, T.variables), N.forEach(function(F) {
        delete T.variables[F];
      }));
    }
    var x;
    if (!O.signal) {
      var L = Ub(), R = L.controller, _ = L.signal;
      x = R, x && (O.signal = _);
    }
    var P = function(F) {
      return F.kind === "OperationDefinition" && F.operation === "mutation";
    }, I = function(F) {
      return F.kind === "OperationDefinition" && F.operation === "subscription";
    }, A = I(qa(h.query)), D = Ql(["defer"], h.query);
    if (c && !h.query.definitions.some(P) && (O.method = "GET"), D || A) {
      O.headers = O.headers || {};
      var B = "multipart/mixed;";
      A && D && __DEV__ && le.warn("Multipart-subscriptions do not support @defer"), A ? B += "boundary=graphql;subscriptionSpec=1.0,application/json" : D && (B += "deferSpec=20220824,application/json"), O.headers.accept = B;
    }
    if (O.method === "GET") {
      var Q = Qb(m, T), ie = Q.newURI, ce = Q.parseError;
      if (ce)
        return Nf(ce);
      m = ie;
    } else
      try {
        O.body = Rc(T, "Payload");
      } catch (F) {
        return Nf(F);
      }
    return new dt(function(F) {
      var H = n || pr(function() {
        return fetch;
      }) || Af;
      return H(m, O).then(function(j) {
        var Y;
        h.setContext({ response: j });
        var M = (Y = j.headers) === null || Y === void 0 ? void 0 : Y.get("content-type");
        return M !== null && /^multipart\/mixed/i.test(M) ? Db(j, F) : Fb(j, h, F);
      }).catch(function(j) {
        return au(j, F);
      }), function() {
        x && x.abort();
      };
    });
  });
}, Gb = function(e) {
  Tr(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, Nv(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(wi);
const { toString: Ff, hasOwnProperty: Kb } = Object.prototype, $f = Function.prototype.toString, Pc = /* @__PURE__ */ new Map();
function Mt(e, t) {
  try {
    return Tc(e, t);
  } finally {
    Pc.clear();
  }
}
function Tc(e, t) {
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
      const i = kf(e), o = kf(t), a = i.length;
      if (a !== o.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!Kb.call(t, i[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const c = i[s];
        if (!Tc(e[c], t[c]))
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
      const i = e.entries(), o = r === "[object Map]";
      for (; ; ) {
        const a = i.next();
        if (a.done)
          break;
        const [s, c] = a.value;
        if (!t.has(s) || o && !Tc(c, t.get(s)))
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
      let i = e.byteLength;
      if (i === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = $f.call(e);
      return i !== $f.call(t) ? !1 : !Jb(i, Xb);
    }
  }
  return !1;
}
function kf(e) {
  return Object.keys(e).filter(Yb, e);
}
function Yb(e) {
  return this[e] !== void 0;
}
const Xb = "{ [native code] }";
function Jb(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Lf(e, t) {
  let r = Pc.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Pc.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
var Zb = function() {
  return /* @__PURE__ */ Object.create(null);
}, Mv = Array.prototype, e1 = Mv.forEach, t1 = Mv.slice, r1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !0), r === void 0 && (r = Zb), this.weakness = t, this.makeData = r;
    }
    return e.prototype.lookup = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var r = this;
      return e1.call(t, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(t1.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var r = this.weakness && n1(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(t);
      return n || r.set(t, n = new e(this.weakness, this.makeData)), n;
    }, e;
  }()
);
function n1(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Vt = null;
const jf = {};
let i1 = 1;
const o1 = () => class {
  constructor() {
    this.id = [
      "slot",
      i1++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Vt; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === jf)
          break;
        return t !== Vt && (Vt.slots[this.id] = r), !0;
      }
    return Vt && (Vt.slots[this.id] = jf), !1;
  }
  getValue() {
    if (this.hasValue())
      return Vt.slots[this.id];
  }
  withValue(t, r, n, i) {
    const o = {
      __proto__: null,
      [this.id]: t
    }, a = Vt;
    Vt = { parent: a, slots: o };
    try {
      return r.apply(i, n);
    } finally {
      Vt = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Vt;
    return function() {
      const n = Vt;
      try {
        return Vt = r, t.apply(this, arguments);
      } finally {
        Vt = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Vt) {
      const i = Vt;
      try {
        return Vt = null, t.apply(n, r);
      } finally {
        Vt = i;
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
const Ps = "@wry/context:Slot", a1 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Vf(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Vf(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), zf = a1, Iv = zf[Ps] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Ps] || function(e) {
  try {
    Object.defineProperty(zf, Ps, {
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
}(o1());
function s1() {
}
var c1 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = 1 / 0), r === void 0 && (r = s1), this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return e.prototype.has = function(t) {
      return this.map.has(t);
    }, e.prototype.get = function(t) {
      var r = this.getNode(t);
      return r && r.value;
    }, e.prototype.getNode = function(t) {
      var r = this.map.get(t);
      if (r && r !== this.newest) {
        var n = r.older, i = r.newer;
        i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
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
), Ka = new Iv(), Ts, l1 = Object.prototype.hasOwnProperty, su = (Ts = Array.from, Ts === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
} : Ts);
function ga(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var to = [], u1 = 100;
function vi(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function f1(e, t) {
  var r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function Dv(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function d1(e) {
  return e.slice(0);
}
var h1 = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !cn(this))
        return Hf(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return vi(!this.recomputing, "already recomputing"), Hf(this), cn(this) ? v1(this, t) : Dv(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, Av(this), ga(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), jv(this), cu(this, function(r, n) {
        r.setDirty(), Vv(r, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = to.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (su(this.deps).forEach(function(r) {
        return r.delete(t);
      }), this.deps.clear(), to.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function Hf(e) {
  var t = Ka.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), cn(e) ? $v(t, e) : kv(t, e), t;
}
function v1(e, t) {
  return jv(e), Ka.withValue(e, p1, [e, t]), g1(e, t) && m1(e), Dv(e.value);
}
function p1(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function cn(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function m1(e) {
  e.dirty = !1, !cn(e) && Fv(e);
}
function Av(e) {
  cu(e, $v);
}
function Fv(e) {
  cu(e, kv);
}
function cu(e, t) {
  var r = e.parents.size;
  if (r)
    for (var n = su(e.parents), i = 0; i < r; ++i)
      t(n[i], e);
}
function $v(e, t) {
  vi(e.childValues.has(t)), vi(cn(t));
  var r = !cn(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = to.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && Av(e);
}
function kv(e, t) {
  vi(e.childValues.has(t)), vi(!cn(t));
  var r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, d1(t.value)) : f1(r, t.value) || e.setDirty(), Lv(e, t), !cn(e) && Fv(e);
}
function Lv(e, t) {
  var r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (to.length < u1 && to.push(r), e.dirtyChildren = null));
}
function jv(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
    Vv(e, r);
  }), e.forgetDeps(), vi(e.dirtyChildren === null);
}
function Vv(e, t) {
  t.parents.delete(e), e.childValues.delete(t), Lv(e, t);
}
function g1(e, t) {
  if (typeof e.subscribe == "function")
    try {
      ga(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var y1 = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function zv(e) {
  var t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(i) {
    var o = Ka.getValue();
    if (o) {
      var a = t.get(i);
      a || t.set(i, a = /* @__PURE__ */ new Set()), o.dependOn(a), typeof r == "function" && (ga(a), a.unsubscribe = r(i));
    }
  }
  return n.dirty = function(o, a) {
    var s = t.get(o);
    if (s) {
      var c = a && l1.call(y1, a) ? a : "setDirty";
      su(s).forEach(function(l) {
        return l[c]();
      }), t.delete(o), ga(s);
    }
  }, n;
}
function Hv() {
  var e = new r1(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
Hv();
var Ns = /* @__PURE__ */ new Set();
function ya(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var r = new c1(t.max || Math.pow(2, 16), function(l) {
    return l.dispose();
  }), n = t.keyArgs, i = t.makeCacheKey || Hv(), o = function() {
    var l = i.apply(null, n ? n.apply(null, arguments) : arguments);
    if (l === void 0)
      return e.apply(null, arguments);
    var u = r.get(l);
    u || (r.set(l, u = new h1(e)), u.subscribe = t.subscribe, u.forget = function() {
      return r.delete(l);
    });
    var f = u.recompute(Array.prototype.slice.call(arguments));
    return r.set(l, u), Ns.add(r), Ka.hasValue() || (Ns.forEach(function(d) {
      return d.clean();
    }), Ns.clear()), f;
  };
  Object.defineProperty(o, "size", {
    get: function() {
      return r.map.size;
    },
    configurable: !1,
    enumerable: !1
  });
  function a(l) {
    var u = r.get(l);
    u && u.setDirty();
  }
  o.dirtyKey = a, o.dirty = function() {
    a(i.apply(null, arguments));
  };
  function s(l) {
    var u = r.get(l);
    if (u)
      return u.peek();
  }
  o.peekKey = s, o.peek = function() {
    return s(i.apply(null, arguments));
  };
  function c(l) {
    return r.delete(l);
  }
  return o.forgetKey = c, o.forget = function() {
    return c(i.apply(null, arguments));
  }, o.makeCacheKey = i, o.getKey = n ? function() {
    return i.apply(null, n.apply(null, arguments));
  } : i, Object.freeze(o);
}
var b1 = function() {
  function e() {
    this.getFragmentDoc = ya(Ty);
  }
  return e.prototype.batch = function(t) {
    var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
    return this.performTransaction(function() {
      return i = t.update(r);
    }, n), i;
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
    var r = t.id, n = t.data, i = Rn(t, ["id", "data"]);
    return this.write(Object.assign(i, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, i = t.fragment, o = t.fragmentName, a = Rn(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(i, o),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readQuery(t), o = r(i);
        return o == null ? i : (n.writeQuery(V(V({}, t), { data: o })), o);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var i = n.readFragment(t), o = r(i);
        return o == null ? i : (n.writeFragment(V(V({}, t), { data: o })), o);
      }
    });
  }, e;
}(), Bv = function(e) {
  Tr(t, e);
  function t(r, n, i, o) {
    var a, s = e.call(this, r) || this;
    if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var c = s.path.length - 1; c >= 0; --c)
        s.missing = (a = {}, a[s.path[c]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = t.prototype, s;
  }
  return t;
}(Error);
const E1 = () => /* @__PURE__ */ Object.create(null), { forEach: S1, slice: w1 } = Array.prototype, { hasOwnProperty: C1 } = Object.prototype;
class Ci {
  constructor(t = !0, r = E1) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return S1.call(t, (n) => r = r.getChildTrie(n)), C1.call(r, "data") ? r.data : r.data = this.makeData(w1.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, i = t.length; r && n < i; ++n) {
      const o = this.weakness && Bf(t[n]) ? r.weak : r.strong;
      r = o && o.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && Bf(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new Ci(this.weakness, this.makeData)), n;
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
var Ft = Object.prototype.hasOwnProperty;
function ji(e) {
  return e == null;
}
function Wv(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = ji(n) ? ji(i) ? void 0 : { _id: i } : { id: n }), ji(n) && !ji(i) && (n = i), !ji(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Uv = {
  dataIdFromObject: Wv,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function O1(e) {
  return Ga(Uv, e);
}
function qv(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Uv.canonizeResults : t;
}
function _1(e, t) {
  return nt(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var Qv = /^[_a-z][_0-9a-z]*/i;
function ln(e) {
  var t = e.match(Qv);
  return t ? t[0] : e;
}
function Nc(e, t, r) {
  return mt(t) ? Et(t) ? t.every(function(n) {
    return Nc(e, n, r);
  }) : e.selections.every(function(n) {
    if (Tn(n) && Ba(n, r)) {
      var i = Pn(n);
      return Ft.call(t, i) && (!n.selectionSet || Nc(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function ti(e) {
  return mt(e) && !nt(e) && !Et(e);
}
function x1() {
  return new sn();
}
function Gv(e, t) {
  var r = Gl(Xl(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var ta = /* @__PURE__ */ Object.create(null), Ms = function() {
  return ta;
}, Wf = /* @__PURE__ */ Object.create(null), ro = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, o) {
      return wc(nt(i) ? n.get(i.__ref, o) : i && i[o]);
    }, this.canRead = function(i) {
      return nt(i) ? n.has(i.__ref) : typeof i == "object";
    }, this.toReference = function(i, o) {
      if (typeof i == "string")
        return si(i);
      if (nt(i))
        return i;
      var a = n.policies.identify(i)[0];
      if (a) {
        var s = si(a);
        return o && n.merge(a, i), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return V({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), Ft.call(this.data, t)) {
      var n = this.data[t];
      if (n && Ft.call(n, r))
        return n[r];
    }
    if (r === "__typename" && Ft.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof Zr)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), Ft.call(this.data, t))
      return this.data[t];
    if (this instanceof Zr)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, i;
    nt(t) && (t = t.__ref), nt(r) && (r = r.__ref);
    var o = typeof t == "string" ? this.lookup(i = t) : t, a = typeof r == "string" ? this.lookup(i = r) : r;
    if (a) {
      __DEV__ ? le(typeof i == "string", "store.merge expects a string ID") : le(typeof i == "string", 1);
      var s = new sn(P1).merge(o, a);
      if (this.data[i] = s, s !== o && (delete this.refs[i], this.group.caching)) {
        var c = /* @__PURE__ */ Object.create(null);
        o || (c.__exists = 1), Object.keys(a).forEach(function(l) {
          if (!o || o[l] !== s[l]) {
            c[l] = 1;
            var u = ln(l);
            u !== l && !n.policies.hasKeyArgs(s.__typename, u) && (c[u] = 1), s[l] === void 0 && !(n instanceof Zr) && delete s[l];
          }
        }), c.__typename && !(o && o.__typename) && this.policies.rootTypenamesById[i] === s.__typename && delete c.__typename, Object.keys(c).forEach(function(l) {
          return n.group.dirty(i, l);
        });
      }
    }
  }, e.prototype.modify = function(t, r) {
    var n = this, i = this.lookup(t);
    if (i) {
      var o = /* @__PURE__ */ Object.create(null), a = !1, s = !0, c = {
        DELETE: ta,
        INVALIDATE: Wf,
        isReference: nt,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(l, u) {
          return n.policies.readField(typeof l == "string" ? {
            fieldName: l,
            from: u || si(t)
          } : l, { store: n });
        }
      };
      if (Object.keys(i).forEach(function(l) {
        var u = ln(l), f = i[l];
        if (f !== void 0) {
          var d = typeof r == "function" ? r : r[l] || r[u];
          if (d) {
            var h = d === Ms ? ta : d(wc(f), V(V({}, c), { fieldName: u, storeFieldName: l, storage: n.getStorage(t, l) }));
            h === Wf ? n.group.dirty(t, l) : (h === ta && (h = void 0), h !== f && (o[l] = h, a = !0, f = h));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, o), s && (this instanceof Zr ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var i, o = this.lookup(t);
    if (o) {
      var a = this.getFieldValue(o, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (i = {}, i[s] = Ms, i) : Ms);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (Ft.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof Zr && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(i) {
      Ft.call(t.policies.rootTypenamesById, i) || n.push(i);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(o) {
      t && Ft.call(t, o) || r.delete(o);
    }), t) {
      var n = t.__META, i = Rn(t, ["__META"]);
      Object.keys(i).forEach(function(o) {
        r.merge(o, i[o]);
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
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof Zr ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      Ft.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var i = Object.keys(n);
    if (i.length) {
      for (var o = this; o instanceof Zr; )
        o = o.parent;
      i.forEach(function(a) {
        return o.delete(a);
      });
    }
    return i;
  }, e.prototype.findChildRefIds = function(t) {
    if (!Ft.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var i = /* @__PURE__ */ new Set([n]);
      i.forEach(function(o) {
        nt(o) && (r[o.__ref] = !0), mt(o) && Object.keys(o).forEach(function(a) {
          var s = o[a];
          mt(s) && i.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), Kv = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? zv() : null, this.keyMaker = new Ci(Dn);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(Is(t, r));
      var n = ln(r);
      n !== r && this.d(Is(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(Is(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Is(e, t) {
  return t + "#" + e;
}
function Uf(e, t) {
  Qi(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    Tr(n, r);
    function n(i) {
      var o = i.policies, a = i.resultCaching, s = a === void 0 ? !0 : a, c = i.seed, l = r.call(this, o, new Kv(s)) || this;
      return l.stump = new R1(l), l.storageTrie = new Ci(Dn), c && l.replace(c), l;
    }
    return n.prototype.addLayer = function(i, o) {
      return this.stump.addLayer(i, o);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(e);
  e.Root = t;
})(ro || (ro = {}));
var Zr = function(e) {
  Tr(t, e);
  function t(r, n, i, o) {
    var a = e.call(this, n.policies, o) || this;
    return a.id = r, a.parent = n, a.replay = i, a.group = o, i(a), a;
  }
  return t.prototype.addLayer = function(r, n) {
    return new t(r, this, n, this.group);
  }, t.prototype.removeLayer = function(r) {
    var n = this, i = this.parent.removeLayer(r);
    return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(o) {
      var a = n.data[o], s = i.lookup(o);
      s ? a ? a !== s && Object.keys(a).forEach(function(c) {
        Mt(a[c], s[c]) || n.group.dirty(o, c);
      }) : (n.group.dirty(o, "__exists"), Object.keys(s).forEach(function(c) {
        n.group.dirty(o, c);
      })) : n.delete(o);
    }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return V(V({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return Ft.call(this.data, r) ? V(V({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(ro), R1 = function(e) {
  Tr(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new Kv(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(Zr);
function P1(e, t, r) {
  var n = e[r], i = t[r];
  return Mt(n, i) ? n : i;
}
function Qi(e) {
  return !!(e instanceof ro && e.group.caching);
}
function T1(e) {
  return mt(e) ? Et(e) ? e.slice(0) : V({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Mc = function() {
  function e() {
    this.known = new (ub ? WeakSet : Set)(), this.pool = new Ci(Dn), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return mt(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (mt(t)) {
      var r = T1(t);
      return this.passes.set(r, t), r;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var r = this;
    if (mt(t)) {
      var n = this.passes.get(t);
      if (n)
        return n;
      var i = Object.getPrototypeOf(t);
      switch (i) {
        case Array.prototype: {
          if (this.known.has(t))
            return t;
          var o = t.map(this.admit, this), a = this.pool.lookupArray(o);
          return a.array || (this.known.add(a.array = o), __DEV__ && Object.freeze(o)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(t))
            return t;
          var s = Object.getPrototypeOf(t), c = [s], l = this.sortedKeys(t);
          c.push(l.json);
          var u = c.length;
          l.sorted.forEach(function(h) {
            c.push(r.admit(t[h]));
          });
          var a = this.pool.lookupArray(c);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), l.sorted.forEach(function(h, m) {
              f[h] = c[u + m];
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
      var i = JSON.stringify(r);
      (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
    }
    return n.keys;
  }, e;
}(), Cn = Object.assign(function(e) {
  if (mt(e)) {
    Ic === void 0 && qf();
    var t = Ic.admit(e), r = Dc.get(t);
    return r === void 0 && Dc.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: qf
}), Ic, Dc;
function qf() {
  Ic = new Mc(), Dc = new (Dn ? WeakMap : Map)();
}
function Qf(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var N1 = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (Dn ? WeakMap : Map)(), this.config = Ga(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: qv(t)
    }), this.canon = t.canon || new Mc(), this.executeSelectionSet = ya(function(n) {
      var i, o = n.context.canonizeResults, a = Qf(n);
      a[3] = !o;
      var s = (i = r.executeSelectionSet).peek.apply(i, a);
      return s ? o ? V(V({}, s), { result: r.canon.admit(s.result) }) : s : (Uf(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Qf,
      makeCacheKey: function(n, i, o, a) {
        if (Qi(o.store))
          return o.store.makeCacheKey(n, nt(i) ? i.__ref : i, o.varString, a);
      }
    }), this.executeSubSelectedArray = ya(function(n) {
      return Uf(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var i = n.field, o = n.array, a = n.context;
        if (Qi(a.store))
          return a.store.makeCacheKey(i, o, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Mc();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, i = t.rootId, o = i === void 0 ? "ROOT_QUERY" : i, a = t.variables, s = t.returnPartialData, c = s === void 0 ? !0 : s, l = t.canonizeResults, u = l === void 0 ? this.config.canonizeResults : l, f = this.config.cache.policies;
    a = V(V({}, Jl(yv(n))), a);
    var d = si(o), h = this.executeSelectionSet({
      selectionSet: qa(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: V({ store: r, query: n, policies: f, variables: a, varString: Cn(a), canonizeResults: u }, Gv(n, this.config.fragments))
    }), m;
    if (h.missing && (m = [new Bv(M1(h.missing), h.missing, n, a)], !c))
      throw m[0];
    return {
      result: h.result,
      complete: !m,
      missing: m
    };
  }, e.prototype.isFresh = function(t, r, n, i) {
    if (Qi(i.store) && this.knownResults.get(t) === n) {
      var o = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(t));
      if (o && t === o.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var r = this, n = t.selectionSet, i = t.objectOrReference, o = t.enclosingRef, a = t.context;
    if (nt(i) && !a.policies.rootTypenamesById[i.__ref] && !a.store.has(i.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(i.__ref, " object")
      };
    var s = a.variables, c = a.policies, l = a.store, u = l.getFieldValue(i, "__typename"), f = [], d, h = new sn();
    this.config.addTypename && typeof u == "string" && !c.rootIdsByTypename[u] && f.push({ __typename: u });
    function m(E, w) {
      var S;
      return E.missing && (d = h.merge(d, (S = {}, S[w] = E.missing, S))), E.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(E) {
      var w, S;
      if (Ba(E, s))
        if (Tn(E)) {
          var C = c.readField({
            fieldName: E.name.value,
            field: E,
            variables: a.variables,
            from: i
          }, a), O = Pn(E);
          C === void 0 ? Zl.added(E) || (d = h.merge(d, (w = {}, w[O] = "Can't find field '".concat(E.name.value, "' on ").concat(nt(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), w))) : Et(C) ? C = m(r.executeSubSelectedArray({
            field: E,
            array: C,
            enclosingRef: o,
            context: a
          }), O) : E.selectionSet ? C != null && (C = m(r.executeSelectionSet({
            selectionSet: E.selectionSet,
            objectOrReference: C,
            enclosingRef: nt(C) ? C : o,
            context: a
          }), O)) : a.canonizeResults && (C = r.canon.pass(C)), C !== void 0 && f.push((S = {}, S[O] = C, S));
        } else {
          var T = Kl(E, a.lookupFragment);
          if (!T && E.kind === kt.FRAGMENT_SPREAD)
            throw __DEV__ ? new Qe("No fragment named ".concat(E.name.value)) : new Qe(5);
          T && c.fragmentMatches(T, u) && T.selectionSet.selections.forEach(p.add, p);
        }
    });
    var g = eu(f), b = { result: g, missing: d }, y = a.canonizeResults ? this.canon.admit(b) : wc(b);
    return y.result && this.knownResults.set(y.result, n), y;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, i = t.array, o = t.enclosingRef, a = t.context, s, c = new sn();
    function l(u, f) {
      var d;
      return u.missing && (s = c.merge(s, (d = {}, d[f] = u.missing, d))), u.result;
    }
    return n.selectionSet && (i = i.filter(a.store.canRead)), i = i.map(function(u, f) {
      return u === null ? null : Et(u) ? l(r.executeSubSelectedArray({
        field: n,
        array: u,
        enclosingRef: o,
        context: a
      }), f) : n.selectionSet ? l(r.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: u,
        enclosingRef: nt(u) ? u : o,
        context: a
      }), f) : (__DEV__ && I1(a.store, n, u), u);
    }), {
      result: a.canonizeResults ? this.canon.admit(i) : i,
      missing: s
    };
  }, e;
}();
function M1(e) {
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
function I1(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      mt(i) && (__DEV__ ? le(!nt(i), "Missing selection set for object of type ".concat(_1(e, i), " returned for query field ").concat(t.name.value)) : le(!nt(i), 6), Object.values(i).forEach(n.add, n));
    });
  }
}
var lu = new Iv(), Gf = /* @__PURE__ */ new WeakMap();
function Gi(e) {
  var t = Gf.get(e);
  return t || Gf.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: zv()
  }), t;
}
function Kf(e) {
  Gi(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function D1(e) {
  Gi(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function A1(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(o) {
    if (arguments.length > 0) {
      if (e !== o) {
        e = o, t.forEach(function(c) {
          Gi(c).dep.dirty(n), F1(c);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(c) {
          return c(e);
        });
      }
    } else {
      var s = lu.getValue();
      s && (i(s), Gi(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(o) {
    return r.add(o), function() {
      r.delete(o);
    };
  };
  var i = n.attachCache = function(o) {
    return t.add(o), Gi(o).vars.add(n), n;
  };
  return n.forgetCache = function(o) {
    return t.delete(o);
  }, n;
}
function F1(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Yf = /* @__PURE__ */ Object.create(null);
function uu(e) {
  var t = JSON.stringify(e);
  return Yf[t] || (Yf[t] = /* @__PURE__ */ Object.create(null));
}
function Xf(e) {
  var t = uu(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(a, s) {
      return n.readField(s, a);
    }, o = n.keyObject = fu(e, function(a) {
      var s = li(n.storeObject, a, i);
      return s === void 0 && r !== n.storeObject && Ft.call(r, a[0]) && (s = li(r, a, Xv)), __DEV__ ? le(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : le(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(o));
  });
}
function Jf(e) {
  var t = uu(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, o = n.variables, a = n.fieldName, s = fu(e, function(l) {
      var u = l[0], f = u.charAt(0);
      if (f === "@") {
        if (i && Ar(i.directives)) {
          var d = u.slice(1), h = i.directives.find(function(b) {
            return b.name.value === d;
          }), m = h && Wa(h, o);
          return m && li(m, l.slice(1));
        }
        return;
      }
      if (f === "$") {
        var p = u.slice(1);
        if (o && Ft.call(o, p)) {
          var g = l.slice(0);
          return g[0] = p, li(o, g);
        }
        return;
      }
      if (r)
        return li(r, l);
    }), c = JSON.stringify(s);
    return (r || c !== "{}") && (a += ":" + c), a;
  });
}
function fu(e, t) {
  var r = new sn();
  return Yv(e).reduce(function(n, i) {
    var o, a = t(i);
    if (a !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        a = (o = {}, o[i[s]] = a, o);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Yv(e) {
  var t = uu(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, o) {
      Et(i) ? (Yv(i).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(i), Et(e[o + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function Xv(e, t) {
  return e[t];
}
function li(e, t, r) {
  return r = r || Xv, Jv(t.reduce(function n(i, o) {
    return Et(i) ? i.map(function(a) {
      return n(a, o);
    }) : i && r(i, o);
  }, e));
}
function Jv(e) {
  return mt(e) ? Et(e) ? e.map(Jv) : fu(Object.keys(e).sort(), function(t) {
    return li(e, t);
  }) : e;
}
Yl.setStringify(Cn);
function Ac(e) {
  return e.args !== void 0 ? e.args : e.field ? Wa(e.field, e.variables) : null;
}
var $1 = function() {
}, Zf = function(e, t) {
  return t.fieldName;
}, ed = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, td = function(e, t) {
  return t;
}, k1 = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = V({ dataIdFromObject: Wv }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, i = this, o = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (o === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = V(V({}, r), { typename: o, storeObject: a, readField: r && r.readField || function() {
      var d = du(arguments, a);
      return i.readField(d, {
        store: i.cache.data,
        variables: d.variables
      });
    } }), c, l = o && this.getTypePolicy(o), u = l && l.keyFn || this.config.dataIdFromObject; u; ) {
      var f = u(V(V({}, t), a), s);
      if (Et(f))
        u = Xf(f);
      else {
        c = f;
        break;
      }
    }
    return c = c ? String(c) : void 0, s.keyObject ? [c, s.keyObject] : [c];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var i = t[n], o = i.queryType, a = i.mutationType, s = i.subscriptionType, c = Rn(i, ["queryType", "mutationType", "subscriptionType"]);
      o && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), Ft.call(r.toBeAdded, n) ? r.toBeAdded[n].push(c) : r.toBeAdded[n] = [c];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, i = this.getTypePolicy(t), o = r.keyFields, a = r.fields;
    function s(c, l) {
      c.merge = typeof l == "function" ? l : l === !0 ? ed : l === !1 ? td : c.merge;
    }
    s(i, r.merge), i.keyFn = o === !1 ? $1 : Et(o) ? Xf(o) : typeof o == "function" ? o : i.keyFn, a && Object.keys(a).forEach(function(c) {
      var l = n.getFieldPolicy(t, c, !0), u = a[c];
      if (typeof u == "function")
        l.read = u;
      else {
        var f = u.keyArgs, d = u.read, h = u.merge;
        l.keyFn = f === !1 ? Zf : Et(f) ? Jf(f) : typeof f == "function" ? f : l.keyFn, typeof d == "function" && (l.read = d), s(l, h);
      }
      l.read && l.merge && (l.keyFn = l.keyFn || Zf);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
    r !== i && (__DEV__ ? le(!i || i === t, "Cannot change root ".concat(t, " __typename more than once")) : le(!i || i === t, 3), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
        r.getSupertypeSet(i, !0).add(n);
        var o = i.match(Qv);
        (!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!Ft.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var i = this.supertypeMap.get(t);
      i && i.size && i.forEach(function(a) {
        var s = r.getTypePolicy(a), c = s.fields, l = Rn(s, ["fields"]);
        Object.assign(n, l), Object.assign(n.fields, c);
      });
    }
    var o = this.toBeAdded[t];
    return o && o.length && o.splice(0).forEach(function(a) {
      r.updateTypePolicy(t, a);
    }), this.typePolicies[t];
  }, e.prototype.getFieldPolicy = function(t, r, n) {
    if (t) {
      var i = this.getTypePolicy(t).fields;
      return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(t, r) {
    var n = this.supertypeMap.get(t);
    return !n && r && this.supertypeMap.set(t, n = /* @__PURE__ */ new Set()), n;
  }, e.prototype.fragmentMatches = function(t, r, n, i) {
    var o = this;
    if (!t.typeCondition)
      return !0;
    if (!r)
      return !1;
    var a = t.typeCondition.name.value;
    if (r === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(r, !0), c = [s], l = function(m) {
        var p = o.getSupertypeSet(m, !1);
        p && p.size && c.indexOf(p) < 0 && c.push(p);
      }, u = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < c.length; ++d) {
        var h = c[d];
        if (h.has(a))
          return s.has(a) || (f && __DEV__ && le.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(l), u && d === c.length - 1 && Nc(t.selectionSet, n, i) && (u = !1, f = !0, this.fuzzySubtypes.forEach(function(m, p) {
          var g = r.match(m);
          g && g[0] === r && l(p);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return !!(n && n.keyFn);
  }, e.prototype.getStoreFieldName = function(t) {
    var r = t.typename, n = t.fieldName, i = this.getFieldPolicy(r, n, !1), o, a = i && i.keyFn;
    if (a && r)
      for (var s = {
        typename: r,
        fieldName: n,
        field: t.field || null,
        variables: t.variables
      }, c = Ac(t); a; ) {
        var l = a(c, s);
        if (Et(l))
          a = Jf(l);
        else {
          o = l || n;
          break;
        }
      }
    return o === void 0 && (o = t.field ? Vy(t.field, t.variables) : Yl(n, Ac(t))), o === !1 ? n : n === ln(o) ? o : n + ":" + o;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var i = t.field || t.fieldName;
      if (i) {
        if (t.typename === void 0) {
          var o = r.store.getFieldValue(n, "__typename");
          o && (t.typename = o);
        }
        var a = this.getStoreFieldName(t), s = ln(a), c = r.store.getFieldValue(n, a), l = this.getFieldPolicy(t.typename, s, !1), u = l && l.read;
        if (u) {
          var f = rd(this, n, t, r, r.store.getStorage(nt(n) ? n.__ref : n, a));
          return lu.withValue(this.cache, u, [c, f]);
        }
        return c;
      }
    }
  }, e.prototype.getReadFunction = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(t, r, n) {
    var i = this.getFieldPolicy(t, r, !1), o = i && i.merge;
    return !o && n && (i = this.getTypePolicy(n), o = i && i.merge), o;
  }, e.prototype.runMergeFunction = function(t, r, n, i, o) {
    var a = n.field, s = n.typename, c = n.merge;
    return c === ed ? Zv(i.store)(t, r) : c === td ? r : (i.overwrite && (t = void 0), c(t, r, rd(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: i.variables }, i, o || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function rd(e, t, r, n, i) {
  var o = e.getStoreFieldName(r), a = ln(o), s = r.variables || n.variables, c = n.store, l = c.toReference, u = c.canRead;
  return {
    args: Ac(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: o,
    variables: s,
    isReference: nt,
    toReference: l,
    storage: i,
    cache: e.cache,
    canRead: u,
    readField: function() {
      return e.readField(du(arguments, t, s), n);
    },
    mergeObjects: Zv(n.store)
  };
}
function du(e, t, r) {
  var n = e[0], i = e[1], o = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: o > 1 ? i : t
  } : (a = V({}, n), Ft.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && le.warn("Undefined 'from' passed to readField with arguments ".concat(vb(Array.from(e)))), a.variables === void 0 && (a.variables = r), a;
}
function Zv(e) {
  return function(r, n) {
    if (Et(r) || Et(n))
      throw __DEV__ ? new Qe("Cannot automatically merge arrays") : new Qe(4);
    if (mt(r) && mt(n)) {
      var i = e.getFieldValue(r, "__typename"), o = e.getFieldValue(n, "__typename"), a = i && o && i !== o;
      if (a)
        return n;
      if (nt(r) && ti(n))
        return e.merge(r.__ref, n), r;
      if (ti(r) && nt(n))
        return e.merge(r, n.__ref), n;
      if (ti(r) && ti(n))
        return V(V({}, r), n);
    }
    return n;
  };
}
function Ds(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : V(V({}, e), { clientOnly: t, deferred: r })), i;
}
var L1 = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, i = r.query, o = r.result, a = r.dataId, s = r.variables, c = r.overwrite, l = mo(i), u = x1();
    s = V(V({}, Jl(l)), s);
    var f = V(V({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, m) {
      return u.merge(h, m);
    }, variables: s, varString: Cn(s) }, Gv(i, this.fragments)), { overwrite: !!c, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: o || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: l.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!nt(d))
      throw __DEV__ ? new Qe("Could not identify object ".concat(JSON.stringify(o))) : new Qe(7);
    return f.incomingById.forEach(function(h, m) {
      var p = h.storeObject, g = h.mergeTree, b = h.fieldNodeSet, y = si(m);
      if (g && g.map.size) {
        var E = n.applyMerges(g, y, p, f);
        if (nt(E))
          return;
        p = E;
      }
      if (__DEV__ && !f.overwrite) {
        var w = /* @__PURE__ */ Object.create(null);
        b.forEach(function(O) {
          O.selectionSet && (w[O.name.value] = !0);
        });
        var S = function(O) {
          return w[ln(O)] === !0;
        }, C = function(O) {
          var T = g && g.map.get(O);
          return !!(T && T.info && T.info.merge);
        };
        Object.keys(p).forEach(function(O) {
          S(O) && !C(O) && j1(y, p, O, f.store);
        });
      }
      t.merge(m, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, i = t.result, o = t.selectionSet, a = t.context, s = t.mergeTree, c = this.cache.policies, l = /* @__PURE__ */ Object.create(null), u = n && c.rootTypenamesById[n] || gc(i, o, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof u == "string" && (l.__typename = u);
    var f = function() {
      var E = du(arguments, l, a.variables);
      if (nt(E.from)) {
        var w = a.incomingById.get(E.from.__ref);
        if (w) {
          var S = c.readField(V(V({}, E), { from: w.storeObject }), a);
          if (S !== void 0)
            return S;
        }
      }
      return c.readField(E, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(o, i, a, u).forEach(function(E, w) {
      var S, C = Pn(w), O = i[C];
      if (d.add(w), O !== void 0) {
        var T = c.getStoreFieldName({
          typename: u,
          fieldName: w.name.value,
          field: w,
          variables: E.variables
        }), N = nd(s, T), x = r.processFieldValue(O, w, w.selectionSet ? Ds(E, !1, !1) : E, N), L = void 0;
        w.selectionSet && (nt(x) || ti(x)) && (L = f("__typename", x));
        var R = c.getMergeFunction(u, w.name.value, L);
        R ? N.info = {
          field: w,
          typename: u,
          merge: R
        } : id(s, T), l = E.merge(l, (S = {}, S[T] = x, S));
      } else
        __DEV__ && !E.clientOnly && !E.deferred && !Zl.added(w) && !c.getReadFunction(u, w.name.value) && __DEV__ && le.error("Missing field '".concat(Pn(w), "' while writing result ").concat(JSON.stringify(i, null, 2)).substring(0, 1e3));
    });
    try {
      var h = c.identify(i, {
        typename: u,
        selectionSet: o,
        fragmentMap: a.fragmentMap,
        storeObject: l,
        readField: f
      }), m = h[0], p = h[1];
      n = n || m, p && (l = a.merge(l, p));
    } catch (E) {
      if (!n)
        throw E;
    }
    if (typeof n == "string") {
      var g = si(n), b = a.written[n] || (a.written[n] = []);
      if (b.indexOf(o) >= 0 || (b.push(o), this.reader && this.reader.isFresh(i, g, o, a)))
        return g;
      var y = a.incomingById.get(n);
      return y ? (y.storeObject = a.merge(y.storeObject, l), y.mergeTree = Fc(y.mergeTree, s), d.forEach(function(E) {
        return y.fieldNodeSet.add(E);
      })) : a.incomingById.set(n, {
        storeObject: l,
        mergeTree: ba(s) ? void 0 : s,
        fieldNodeSet: d
      }), g;
    }
    return l;
  }, e.prototype.processFieldValue = function(t, r, n, i) {
    var o = this;
    return !r.selectionSet || t === null ? __DEV__ ? _v(t) : t : Et(t) ? t.map(function(a, s) {
      var c = o.processFieldValue(a, r, n, nd(i, s));
      return id(i, s), c;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: i
    });
  }, e.prototype.flattenFields = function(t, r, n, i) {
    i === void 0 && (i = gc(r, t, n.fragmentMap));
    var o = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Ci(!1);
    return function c(l, u) {
      var f = s.lookup(l, u.clientOnly, u.deferred);
      f.visited || (f.visited = !0, l.selections.forEach(function(d) {
        if (Ba(d, n.variables)) {
          var h = u.clientOnly, m = u.deferred;
          if (!(h && m) && Ar(d.directives) && d.directives.forEach(function(b) {
            var y = b.name.value;
            if (y === "client" && (h = !0), y === "defer") {
              var E = Wa(b, n.variables);
              (!E || E.if !== !1) && (m = !0);
            }
          }), Tn(d)) {
            var p = o.get(d);
            p && (h = h && p.clientOnly, m = m && p.deferred), o.set(d, Ds(n, h, m));
          } else {
            var g = Kl(d, n.lookupFragment);
            if (!g && d.kind === kt.FRAGMENT_SPREAD)
              throw __DEV__ ? new Qe("No fragment named ".concat(d.name.value)) : new Qe(8);
            g && a.fragmentMatches(g, i, r, n.variables) && c(g.selectionSet, Ds(n, h, m));
          }
        }
      }));
    }(t, n), o;
  }, e.prototype.applyMerges = function(t, r, n, i, o) {
    var a, s = this;
    if (t.map.size && !nt(n)) {
      var c = !Et(n) && (nt(r) || ti(r)) ? r : void 0, l = n;
      c && !o && (o = [nt(c) ? c.__ref : c]);
      var u, f = function(d, h) {
        return Et(d) ? typeof h == "number" ? d[h] : void 0 : i.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var m = f(c, h), p = f(l, h);
        if (p !== void 0) {
          o && o.push(h);
          var g = s.applyMerges(d, m, p, i, o);
          g !== p && (u = u || /* @__PURE__ */ new Map(), u.set(h, g)), o && le(o.pop() === h);
        }
      }), u && (n = Et(l) ? l.slice(0) : V({}, l), u.forEach(function(d, h) {
        n[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, o && (a = i.store).getStorage.apply(a, o)) : n;
  }, e;
}(), ep = [];
function nd(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, ep.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Fc(e, t) {
  if (e === t || !t || ba(t))
    return e;
  if (!e || ba(e))
    return t;
  var r = e.info && t.info ? V(V({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, o = { info: r, map: i };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, c) {
      o.map.set(c, Fc(s, t.map.get(c))), a.delete(c);
    }), a.forEach(function(s) {
      o.map.set(s, Fc(t.map.get(s), e.map.get(s)));
    });
  }
  return o;
}
function ba(e) {
  return !e || !(e.info || e.map.size);
}
function id(e, t) {
  var r = e.map, n = r.get(t);
  n && ba(n) && (ep.push(n), r.delete(t));
}
var od = /* @__PURE__ */ new Set();
function j1(e, t, r, n) {
  var i = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, o = i(e);
  if (o) {
    var a = i(t);
    if (a && !nt(o) && !Mt(o, a) && !Object.keys(o).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), c = ln(r), l = "".concat(s, ".").concat(c);
      if (!od.has(l)) {
        od.add(l);
        var u = [];
        !Et(o) && !Et(a) && [o, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !u.includes(d) && u.push(d);
        }), __DEV__ && le.warn("Cache data may be lost when replacing the ".concat(c, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(u.length ? "either ensure all objects of type " + u.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(l, ` field, so InMemoryCache can safely merge these objects:

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
var V1 = function(e) {
  Tr(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = A1, n.txCount = 0, n.config = O1(r), n.addTypename = !!n.config.addTypename, n.policies = new k1({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new ro.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, i = this.storeReader, o = this.config.fragments;
    this.storeWriter = new L1(this, this.storeReader = new N1({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: qv(this.config),
      canon: r ? void 0 : i && i.canon,
      fragments: o
    }), o), this.maybeBroadcastWatch = ya(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Qi(s)) {
          var c = a.optimistic, l = a.id, u = a.variables;
          return s.makeCacheKey(a.query, a.callback, Cn({ optimistic: c, id: l, variables: u }));
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
    var n = r.returnPartialData, i = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(V(V({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
    } catch (o) {
      if (o instanceof Bv)
        return null;
      throw o;
    }
  }, t.prototype.write = function(r) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.modify = function(r) {
    if (Ft.call(r, "id") && !r.id)
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
    return this.watches.size || D1(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && Kf(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    Cn.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (nt(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      __DEV__ && le.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (Ft.call(r, "id"))
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
    return this.init(), Cn.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch.forget(i);
    }), this.watches.clear(), Kf(this)) : this.broadcastWatches(), Promise.resolve();
  }, t.prototype.removeOptimistic = function(r) {
    var n = this.optimisticData.removeLayer(r);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, t.prototype.batch = function(r) {
    var n = this, i = r.update, o = r.optimistic, a = o === void 0 ? !0 : o, s = r.removeOptimistic, c = r.onWatchUpdated, l, u = function(d) {
      var h = n, m = h.data, p = h.optimisticData;
      ++n.txCount, d && (n.data = n.optimisticData = d);
      try {
        return l = i(n);
      } finally {
        --n.txCount, n.data = m, n.optimisticData = p;
      }
    }, f = /* @__PURE__ */ new Set();
    return c && !this.txCount && this.broadcastWatches(V(V({}, r), { onWatchUpdated: function(d) {
      return f.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, u) : a === !1 ? u(this.data) : u(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), c && f.size ? (this.broadcastWatches(V(V({}, r), { onWatchUpdated: function(d, h) {
      var m = c.call(this, d, h);
      return m !== !1 && f.delete(d), m;
    } })), f.size && f.forEach(function(d) {
      return n.maybeBroadcastWatch.dirty(d);
    })) : this.broadcastWatches(r), l;
  }, t.prototype.performTransaction = function(r, n) {
    return this.batch({
      update: r,
      optimistic: n || n !== null
    });
  }, t.prototype.transformDocument = function(r) {
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(r);
      return n || (n = Zl(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
    }
    return r;
  }, t.prototype.transformForLink = function(r) {
    var n = this.config.fragments;
    return n ? n.transform(r) : r;
  }, t.prototype.broadcastWatches = function(r) {
    var n = this;
    this.txCount || this.watches.forEach(function(i) {
      return n.maybeBroadcastWatch(i, r);
    });
  }, t.prototype.broadcastWatch = function(r, n) {
    var i = r.lastDiff, o = this.diff(r);
    n && (r.optimistic && typeof n.optimistic == "string" && (o.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1) || (!i || !Mt(i.result, o.result)) && r.callback(r.lastDiff = o, i);
  }, t;
}(b1), st;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(st || (st = {}));
function no(e) {
  return e ? e < 7 : !1;
}
var z1 = Object.assign, H1 = Object.hasOwnProperty, $c = function(e) {
  Tr(t, e);
  function t(r) {
    var n = r.queryManager, i = r.queryInfo, o = r.options, a = e.call(this, function(g) {
      try {
        var b = g._subscription._observer;
        b && !b.error && (b.error = B1);
      } catch {
      }
      var y = !a.observers.size;
      a.observers.add(g);
      var E = a.last;
      return E && E.error ? g.error && g.error(E.error) : E && E.result && g.next && g.next(E.result), y && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(g) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = i, a.queryManager = n, a.waitForOwnResult = As(o.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, c = s === void 0 ? {} : s, l = c.fetchPolicy, u = l === void 0 ? "cache-first" : l, f = o.fetchPolicy, d = f === void 0 ? u : f, h = o.initialFetchPolicy, m = h === void 0 ? d === "standby" ? u : d : h;
    a.options = V(V({}, o), { initialFetchPolicy: m, fetchPolicy: d }), a.queryId = i.queryId || n.generateQueryId();
    var p = mo(a.query);
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
  }, t.prototype.getCurrentResult = function(r) {
    r === void 0 && (r = !0);
    var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || st.ready, o = V(V({}, n), { loading: no(i), networkStatus: i }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(As(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var c = this.queryInfo.getDiff();
        (c.complete || this.options.returnPartialData) && (o.data = c.result), Mt(o.data, {}) && (o.data = void 0), c.complete ? (delete o.partial, c.complete && o.networkStatus === st.loading && (s === "cache-first" || s === "cache-only") && (o.networkStatus = st.ready, o.loading = !1)) : o.partial = !0, __DEV__ && !c.complete && !this.options.partialRefetch && !o.loading && !o.data && !o.error && rp(c.missing);
      }
    return r && this.updateLastResult(o), o;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    return !this.last || !Mt(this.last.result, r) || n && !Mt(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var i = this.last;
    if (i && i[r] && (!n || Mt(i.variables, this.variables)))
      return i[r];
  }, t.prototype.getLastResult = function(r) {
    return this.getLast("result", r);
  }, t.prototype.getLastError = function(r) {
    return this.getLast("error", r);
  }, t.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, t.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, t.prototype.refetch = function(r) {
    var n, i = {
      pollInterval: 0
    }, o = this.options.fetchPolicy;
    if (o === "cache-and-network" ? i.fetchPolicy = o : o === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", __DEV__ && r && H1.call(r, "variables")) {
      var a = yv(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(c) {
        return c.variable.name.value === "variables";
      })) && __DEV__ && le.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return r && !Mt(this.options.variables, r) && (i.variables = this.options.variables = V(V({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, st.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, i = V(V({}, r.query ? r : V(V(V(V({}, this.options), { query: this.query }), r), { variables: V(V({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" }), o = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = st.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
    var c = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(o, i, st.fetchMore).then(function(l) {
      return n.queryManager.removeQuery(o), a.networkStatus === st.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(u) {
          var f = r.updateQuery;
          f ? u.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(d) {
            return f(d, {
              fetchMoreResult: l.data,
              variables: i.variables
            });
          }) : u.writeQuery({
            query: i.query,
            variables: i.variables,
            data: l.data
          });
        },
        onWatchUpdated: function(u) {
          c.add(u.query);
        }
      }), l;
    }).finally(function() {
      c.has(n.query) || tp(n);
    });
  }, t.prototype.subscribeToMore = function(r) {
    var n = this, i = this.queryManager.startGraphQLSubscription({
      query: r.document,
      variables: r.variables,
      context: r.context
    }).subscribe({
      next: function(o) {
        var a = r.updateQuery;
        a && n.updateQuery(function(s, c) {
          var l = c.variables;
          return a(s, {
            subscriptionData: o,
            variables: l
          });
        });
      },
      error: function(o) {
        if (r.onError) {
          r.onError(o);
          return;
        }
        __DEV__ && le.error("Unhandled GraphQL subscription error", o);
      }
    });
    return this.subscriptions.add(i), function() {
      n.subscriptions.delete(i) && i.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.setVariables = function(r) {
    return Mt(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, st.setVariables) : Promise.resolve());
  }, t.prototype.updateQuery = function(r) {
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
  }, t.prototype.startPolling = function(r) {
    this.options.pollInterval = r, this.updatePolling();
  }, t.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, t.prototype.applyNextFetchPolicy = function(r, n) {
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
  }, t.prototype.fetch = function(r, n) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n);
  }, t.prototype.updatePolling = function() {
    var r = this;
    if (!this.queryManager.ssrMode) {
      var n = this, i = n.pollingInfo, o = n.options.pollInterval;
      if (!o) {
        i && (clearTimeout(i.timeout), delete this.pollingInfo);
        return;
      }
      if (!(i && i.interval === o)) {
        __DEV__ ? le(o, "Attempted to start a polling query without a polling interval.") : le(o, 13);
        var a = i || (this.pollingInfo = {});
        a.interval = o;
        var s = function() {
          r.pollingInfo && (no(r.queryInfo.networkStatus) ? c() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, st.poll).then(c, c));
        }, c = function() {
          var l = r.pollingInfo;
          l && (clearTimeout(l.timeout), l.timeout = setTimeout(s, l.interval));
        };
        c();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    return n === void 0 && (n = this.variables), this.last = V(V({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : _v(r), variables: n }), Ar(r.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var i = this;
    this.isTornDown = !1;
    var o = n === st.refetch || n === st.fetchMore || n === st.poll, a = this.options.variables, s = this.options.fetchPolicy, c = Ga(this.options, r || {}), l = o ? c : z1(this.options, c);
    o || (this.updatePolling(), r && r.variables && !Mt(r.variables, a) && l.fetchPolicy !== "standby" && l.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", l), n === void 0 && (n = st.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = As(l.fetchPolicy));
    var u = function() {
      i.concast === h && (i.waitForOwnResult = !1);
    }, f = l.variables && V({}, l.variables), d = this.fetch(l, n), h = d.concast, m = d.fromLink, p = {
      next: function(g) {
        u(), i.reportResult(g, f);
      },
      error: function(g) {
        u(), i.reportError(g, f);
      }
    };
    return !o && m && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = p), h.addObserver(p), h;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var i = this.getLastError();
    (i || this.isDifferentFromLastResult(r, n)) && ((i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), qi(this.observers, "next", r));
  }, t.prototype.reportError = function(r, n) {
    var i = V(V({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: st.error, loading: !1 });
    this.updateLastResult(i, n), qi(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t;
}(dt);
Rv($c);
function tp(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function B1(e) {
  __DEV__ && le.error("Unhandled error", e.message, e.stack);
}
function rp(e) {
  __DEV__ && e && __DEV__ && le.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function As(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var np = function() {
  function e(t) {
    var r = t.cache, n = t.client, i = t.resolvers, o = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), o && this.setFragmentMatcher(o);
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
    var r = t.document, n = t.remoteResult, i = t.context, o = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return en(this, void 0, void 0, function() {
      return tn(this, function(c) {
        return r ? [2, this.resolveDocument(r, n.data, i, o, this.fragmentMatcher, s).then(function(l) {
          return V(V({}, n), { data: l.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return Ql(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return Yy(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return V(V({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), en(this, void 0, void 0, function() {
      return tn(this, function(i) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(o) {
          return V(V({}, r), o.exportedVariables);
        })] : [2, V({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return Qr(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
            return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
          }), r))
            return ql;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: Ky(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, i, o, a) {
    return n === void 0 && (n = {}), i === void 0 && (i = {}), o === void 0 && (o = function() {
      return !0;
    }), a === void 0 && (a = !1), en(this, void 0, void 0, function() {
      var s, c, l, u, f, d, h, m, p, g, b;
      return tn(this, function(y) {
        return s = qa(t), c = Xl(t), l = Gl(c), u = this.collectSelectionsToResolve(s, l), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = this, m = h.cache, p = h.client, g = {
          fragmentMap: l,
          context: V(V({}, n), { cache: m, client: p }),
          variables: i,
          fragmentMatcher: o,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: u,
          onlyRunForcedResolvers: a
        }, b = !1, [2, this.resolveSelectionSet(s.selectionSet, b, r, g).then(function(E) {
          return {
            result: E,
            exportedVariables: g.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
    return en(this, void 0, void 0, function() {
      var o, a, s, c, l, u = this;
      return tn(this, function(f) {
        return o = i.fragmentMap, a = i.context, s = i.variables, c = [n], l = function(d) {
          return en(u, void 0, void 0, function() {
            var h, m;
            return tn(this, function(p) {
              return !r && !i.selectionsToResolve.has(d) ? [2] : Ba(d, s) ? Tn(d) ? [2, this.resolveField(d, r, n, i).then(function(g) {
                var b;
                typeof g < "u" && c.push((b = {}, b[Pn(d)] = g, b));
              })] : (By(d) ? h = d : (h = o[d.name.value], __DEV__ ? le(h, "No fragment named ".concat(d.name.value)) : le(h, 11)), h && h.typeCondition && (m = h.typeCondition.name.value, i.fragmentMatcher(n, m, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, i).then(function(g) {
                c.push(g);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(l)).then(function() {
          return eu(c);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, i) {
    return en(this, void 0, void 0, function() {
      var o, a, s, c, l, u, f, d, h, m = this;
      return tn(this, function(p) {
        return n ? (o = i.variables, a = t.name.value, s = Pn(t), c = a !== s, l = n[s] || n[a], u = Promise.resolve(l), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || i.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[c ? a : s], h && (u = Promise.resolve(lu.withValue(this.cache, h, [
          n,
          Wa(t, o),
          i.context,
          { field: t, fragmentMap: i.fragmentMap }
        ]))))), [2, u.then(function(g) {
          var b, y;
          if (g === void 0 && (g = l), t.directives && t.directives.forEach(function(w) {
            w.name.value === "export" && w.arguments && w.arguments.forEach(function(S) {
              S.name.value === "as" && S.value.kind === "StringValue" && (i.exportedVariables[S.value.value] = g);
            });
          }), !t.selectionSet || g == null)
            return g;
          var E = (y = (b = t.directives) === null || b === void 0 ? void 0 : b.some(function(w) {
            return w.name.value === "client";
          })) !== null && y !== void 0 ? y : !1;
          if (Array.isArray(g))
            return m.resolveSubSelectedArray(t, r || E, g, i);
          if (t.selectionSet)
            return m.resolveSelectionSet(t.selectionSet, r || E, g, i);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(t, r, n, i) {
    var o = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return o.resolveSubSelectedArray(t, r, a, i);
      if (t.selectionSet)
        return o.resolveSelectionSet(t.selectionSet, r, a, i);
    }));
  }, e.prototype.collectSelectionsToResolve = function(t, r) {
    var n = function(a) {
      return !Array.isArray(a);
    }, i = this.selectionsToResolveCache;
    function o(a) {
      if (!i.has(a)) {
        var s = /* @__PURE__ */ new Set();
        i.set(a, s), Qr(a, {
          Directive: function(c, l, u, f, d) {
            c.name.value === "client" && d.forEach(function(h) {
              n(h) && Ef(h) && s.add(h);
            });
          },
          FragmentSpread: function(c, l, u, f, d) {
            var h = r[c.name.value];
            __DEV__ ? le(h, "No fragment named ".concat(c.name.value)) : le(h, 12);
            var m = o(h);
            m.size > 0 && (d.forEach(function(p) {
              n(p) && Ef(p) && s.add(p);
            }), s.add(c), m.forEach(function(p) {
              s.add(p);
            }));
          }
        });
      }
      return i.get(a);
    }
    return o(t);
  }, e;
}(), ri = new (Dn ? WeakMap : Map)();
function Fs(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return ri.set(e, (ri.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function ad(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var $s = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    ri.has(n) || (ri.set(n, 0), Fs(n, "evict"), Fs(n, "modify"), Fs(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || st.loading;
    return this.variables && this.networkStatus !== st.loading && !Mt(this.variables, t.variables) && (r = st.setVariables), Mt(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
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
    if (this.lastDiff && Mt(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables = t);
    var n = this.observableQuery;
    if (n && n.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var i = this.cache.diff(r);
    return this.updateLastDiff(i, r), i;
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
    this.updateLastDiff(t), !this.dirty && !Mt(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : tp(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    ad(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (no(this.networkStatus) && this.observableQuery) {
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
      var i = V(V({}, this.getDiffOptions(t)), { watcher: this, callback: function(o) {
        return r.setDiff(o);
      } });
      (!this.lastWatch || !Mt(i, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = i));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === ri.get(this.cache) && Mt(r, n.variables) && Mt(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, i) {
    var o = this, a = new sn(), s = Ar(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && Ar(t.incremental)) {
      var c = Pv(this.getDiff().result, t);
      t.data = c;
    } else if ("hasNext" in t && t.hasNext) {
      var l = this.getDiff();
      t.data = a.merge(l.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (kc(t, n.errorPolicy) ? this.cache.performTransaction(function(u) {
      if (o.shouldWrite(t, n.variables))
        u.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: i === 1
        }), o.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: ri.get(o.cache)
        };
      else if (o.lastDiff && o.lastDiff.diff.complete) {
        t.data = o.lastDiff.diff.result;
        return;
      }
      var f = o.getDiffOptions(n.variables), d = u.diff(f);
      o.stopped || o.updateWatch(n.variables), o.updateLastDiff(d, f), d.complete && (t.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = st.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = st.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function kc(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !ea(e);
  return !n && r && e.data && (n = !0), n;
}
var W1 = Object.prototype.hasOwnProperty, U1 = function() {
  function e(t) {
    var r = t.cache, n = t.link, i = t.defaultOptions, o = t.queryDeduplication, a = o === void 0 ? !1 : o, s = t.onBroadcast, c = t.ssrMode, l = c === void 0 ? !1 : c, u = t.clientAwareness, f = u === void 0 ? {} : u, d = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Dn ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = f, this.localState = d || new np({ cache: r }), this.ssrMode = l, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
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
    var r, n, i = t.mutation, o = t.variables, a = t.optimisticResponse, s = t.updateQueries, c = t.refetchQueries, l = c === void 0 ? [] : c, u = t.awaitRefetchQueries, f = u === void 0 ? !1 : u, d = t.update, h = t.onQueryUpdated, m = t.fetchPolicy, p = m === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : m, g = t.errorPolicy, b = g === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : g, y = t.keepRootFields, E = t.context;
    return en(this, void 0, void 0, function() {
      var w, S, C, O, T, N;
      return tn(this, function(x) {
        switch (x.label) {
          case 0:
            return __DEV__ ? le(i, "mutation option is required. You must specify your GraphQL document in the mutation option.") : le(i, 15), __DEV__ ? le(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : le(p === "network-only" || p === "no-cache", 16), w = this.generateMutationId(), S = this.transform(i), C = S.document, O = S.hasClientExports, i = this.cache.transformForLink(C), o = this.getVariables(i, o), O ? [4, this.localState.addExportedVariables(i, o, E)] : [3, 2];
          case 1:
            o = x.sent(), x.label = 2;
          case 2:
            return T = this.mutationStore && (this.mutationStore[w] = {
              mutation: i,
              variables: o,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: w,
              document: i,
              variables: o,
              fetchPolicy: p,
              errorPolicy: b,
              context: E,
              updateQueries: s,
              update: d,
              keepRootFields: y
            }), this.broadcastQueries(), N = this, [2, new Promise(function(L, R) {
              return xs(N.getObservableFromLink(i, V(V({}, E), { optimisticResponse: a }), o, !1), function(_) {
                if (ea(_) && b === "none")
                  throw new Un({
                    graphQLErrors: Cc(_)
                  });
                T && (T.loading = !1, T.error = null);
                var P = V({}, _);
                return typeof l == "function" && (l = l(P)), b === "ignore" && ea(P) && delete P.errors, N.markMutationResult({
                  mutationId: w,
                  result: P,
                  document: i,
                  variables: o,
                  fetchPolicy: p,
                  errorPolicy: b,
                  context: E,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: l,
                  removeOptimistic: a ? w : void 0,
                  onQueryUpdated: h,
                  keepRootFields: y
                });
              }).subscribe({
                next: function(_) {
                  N.broadcastQueries(), (!("hasNext" in _) || _.hasNext === !1) && L(_);
                },
                error: function(_) {
                  T && (T.loading = !1, T.error = _), a && N.cache.removeOptimistic(w), N.broadcastQueries(), R(_ instanceof Un ? _ : new Un({
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
    var i = t.result, o = [], a = t.fetchPolicy === "no-cache";
    if (!a && kc(i, t.errorPolicy)) {
      if (ci(i) || o.push({
        result: i.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), ci(i) && Ar(i.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), c = void 0;
        s.result && (c = Pv(s.result, i)), typeof c < "u" && (i.data = c, o.push({
          result: c,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var l = t.updateQueries;
      l && this.queries.forEach(function(f, d) {
        var h = f.observableQuery, m = h && h.queryName;
        if (!(!m || !W1.call(l, m))) {
          var p = l[m], g = n.queries.get(d), b = g.document, y = g.variables, E = r.diff({
            query: b,
            variables: y,
            returnPartialData: !0,
            optimistic: !1
          }), w = E.result, S = E.complete;
          if (S && w) {
            var C = p(w, {
              mutationResult: i,
              queryName: b && yc(b) || void 0,
              queryVariables: y
            });
            C && o.push({
              result: C,
              dataId: "ROOT_QUERY",
              query: b,
              variables: y
            });
          }
        }
      });
    }
    if (o.length > 0 || t.refetchQueries || t.update || t.onQueryUpdated || t.removeOptimistic) {
      var u = [];
      if (this.refetchQueries({
        updateCache: function(f) {
          a || o.forEach(function(p) {
            return f.write(p);
          });
          var d = t.update, h = !db(i) || ci(i) && !i.hasNext;
          if (d) {
            if (!a) {
              var m = f.diff({
                id: "ROOT_MUTATION",
                query: n.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              m.complete && (i = V(V({}, i), { data: m.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
            }
            h && d(f, i, {
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
        return u.push(f);
      }), t.awaitRefetchQueries || t.onQueryUpdated)
        return Promise.all(u).then(function() {
          return i;
        });
    }
    return Promise.resolve(i);
  }, e.prototype.markMutationOptimistic = function(t, r) {
    var n = this, i = typeof t == "function" ? t(r.variables) : t;
    return this.cache.recordOptimisticTransaction(function(o) {
      try {
        n.markMutationResult(V(V({}, r), { result: { data: i } }), o);
      } catch (a) {
        __DEV__ && le.error(a);
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
      var n = this.cache.transformDocument(t), i = Gy(n), o = this.localState.clientQuery(n), a = i && this.localState.serverQuery(i), s = {
        document: n,
        hasClientExports: xy(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: o,
        serverQuery: a,
        defaultVars: Jl(mo(n)),
        asQuery: V(V({}, n), { definitions: n.definitions.map(function(l) {
          return l.kind === "OperationDefinition" && l.operation !== "query" ? V(V({}, l), { operation: "query" }) : l;
        }) })
      }, c = function(l) {
        l && !r.has(l) && r.set(l, s);
      };
      c(t), c(n), c(o), c(a);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return V(V({}, this.transform(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    t = V(V({}, t), { variables: this.getVariables(t.query, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var r = new $s(this), n = new $c({
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
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? le(t.query, "query option is required. You must specify your GraphQL document in the query option.") : le(t.query, 17), __DEV__ ? le(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : le(t.query.kind === "Document", 18), __DEV__ ? le(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : le(!t.returnPartialData, 19), __DEV__ ? le(!t.pollInterval, "pollInterval option only supported on watchQuery.") : le(!t.pollInterval, 20), this.fetchQuery(r, t).finally(function() {
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
      r.observableQuery ? r.networkStatus = st.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? i.set(a, !1) : Ny(a) ? i.set(r.transform(a).document, !1) : mt(a) && a.query && o.add(a);
    }), this.queries.forEach(function(a, s) {
      var c = a.observableQuery, l = a.document;
      if (c) {
        if (t === "all") {
          n.set(s, c);
          return;
        }
        var u = c.queryName, f = c.options.fetchPolicy;
        if (f === "standby" || t === "active" && !c.hasObservers())
          return;
        (t === "active" || u && i.has(u) || l && i.has(l)) && (n.set(s, c), u && i.set(u, !0), l && i.set(l, !0));
      }
    }), o.size && o.forEach(function(a) {
      var s = Oc("legacyOneTimeQuery"), c = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), l = new $c({
        queryManager: r,
        queryInfo: c,
        options: V(V({}, a), { fetchPolicy: "network-only" })
      });
      le(l.queryId === s), c.setObservableQuery(l), n.set(s, l);
    }), __DEV__ && i.size && i.forEach(function(a, s) {
      a || __DEV__ && le.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
    }), n;
  }, e.prototype.reFetchObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = !1);
    var n = [];
    return this.getObservableQueries(t ? "all" : "active").forEach(function(i, o) {
      var a = i.options.fetchPolicy;
      i.resetLastResults(), (t || a !== "standby" && a !== "cache-only") && n.push(i.refetch()), r.getQuery(o).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, e.prototype.setObservableQuery = function(t) {
    this.getQuery(t.queryId).setObservableQuery(t);
  }, e.prototype.startGraphQLSubscription = function(t) {
    var r = this, n = t.query, i = t.fetchPolicy, o = t.errorPolicy, a = t.variables, s = t.context, c = s === void 0 ? {} : s;
    n = this.transform(n).document, a = this.getVariables(n, a);
    var l = function(f) {
      return r.getObservableFromLink(n, c, f).map(function(d) {
        i !== "no-cache" && (kc(d, o) && r.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var h = ea(d), m = Nb(d);
        if (h || m) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), m && (p.protocolErrors = d.extensions[ou]), new Un(p);
        }
        return d;
      });
    };
    if (this.transform(n).hasClientExports) {
      var u = this.localState.addExportedVariables(n, a, c).then(l);
      return new dt(function(f) {
        var d = null;
        return u.then(function(h) {
          return d = h.subscribe(f);
        }, f.error), function() {
          return d && d.unsubscribe();
        };
      });
    }
    return l(a);
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
  }, e.prototype.getObservableFromLink = function(t, r, n, i) {
    var o = this, a;
    i === void 0 && (i = (a = r?.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, c = this.transform(t).serverQuery;
    if (c) {
      var l = this, u = l.inFlightLinkObservables, f = l.link, d = {
        query: c,
        variables: n,
        operationName: yc(c) || void 0,
        context: this.prepareContext(V(V({}, r), { forceFetch: !i }))
      };
      if (r = d.context, i) {
        var h = u.get(c) || /* @__PURE__ */ new Map();
        u.set(c, h);
        var m = Cn(n);
        if (s = h.get(m), !s) {
          var p = new Zn([
            xc(f, d)
          ]);
          h.set(m, s = p), p.beforeNext(function() {
            h.delete(m) && h.size < 1 && u.delete(c);
          });
        }
      } else
        s = new Zn([
          xc(f, d)
        ]);
    } else
      s = new Zn([
        dt.of({ data: {} })
      ]), r = this.prepareContext(r);
    var g = this.transform(t).clientQuery;
    return g && (s = xs(s, function(b) {
      return o.localState.runResolvers({
        document: g,
        remoteResult: b,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var i = t.lastRequestId = this.generateRequestId(), o = this.cache.transformForLink(this.transform(t.document).document);
    return xs(this.getObservableFromLink(o, n.context, n.variables), function(a) {
      var s = Cc(a), c = s.length > 0;
      if (i >= t.lastRequestId) {
        if (c && n.errorPolicy === "none")
          throw t.markError(new Un({
            graphQLErrors: s
          }));
        t.markResult(a, o, n, r), t.markReady();
      }
      var l = {
        data: a.data,
        loading: !1,
        networkStatus: st.ready
      };
      return c && n.errorPolicy !== "ignore" && (l.errors = s, l.networkStatus = st.error), l;
    }, function(a) {
      var s = Mb(a) ? a : new Un({ networkError: a });
      throw i >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var i = this;
    n === void 0 && (n = st.loading);
    var o = this.transform(r.query).document, a = this.getVariables(o, r.variables), s = this.getQuery(t), c = this.defaultOptions.watchQuery, l = r.fetchPolicy, u = l === void 0 ? c && c.fetchPolicy || "cache-first" : l, f = r.errorPolicy, d = f === void 0 ? c && c.errorPolicy || "none" : f, h = r.returnPartialData, m = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, g = p === void 0 ? !1 : p, b = r.context, y = b === void 0 ? {} : b, E = Object.assign({}, r, {
      query: o,
      variables: a,
      fetchPolicy: u,
      errorPolicy: d,
      returnPartialData: m,
      notifyOnNetworkStatusChange: g,
      context: y
    }), w = function(N) {
      E.variables = N;
      var x = i.fetchQueryByPolicy(s, E, n);
      return E.fetchPolicy !== "standby" && x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), x;
    }, S = function() {
      return i.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(N) {
      S(), setTimeout(function() {
        return C.cancel(N);
      });
    });
    var C, O;
    if (this.transform(E.query).hasClientExports)
      C = new Zn(this.localState.addExportedVariables(E.query, E.variables, E.context).then(w).then(function(N) {
        return N.sources;
      })), O = !0;
    else {
      var T = w(E.variables);
      O = T.fromLink, C = new Zn(T.sources);
    }
    return C.promise.then(S, S), {
      concast: C,
      fromLink: O
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, i = t.include, o = t.optimistic, a = o === void 0 ? !1 : o, s = t.removeOptimistic, c = s === void 0 ? a ? Oc("refetchQueries") : void 0 : s, l = t.onQueryUpdated, u = /* @__PURE__ */ new Map();
    i && this.getObservableQueries(i).forEach(function(d, h) {
      u.set(h, {
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
        var p = d.watcher instanceof $s && d.watcher.observableQuery;
        if (p) {
          if (l) {
            u.delete(p.queryId);
            var g = l(p, h, m);
            return g === !0 && (g = p.refetch()), g !== !1 && f.set(p, g), g;
          }
          l !== null && u.set(p.queryId, { oq: p, lastDiff: m, diff: h });
        }
      }
    }), u.size && u.forEach(function(d, h) {
      var m = d.oq, p = d.lastDiff, g = d.diff, b;
      if (l) {
        if (!g) {
          var y = m.queryInfo;
          y.reset(), g = y.getDiff();
        }
        b = l(m, g, p);
      }
      (!l || b === !0) && (b = m.refetch()), b !== !1 && f.set(m, b), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), c && this.cache.removeOptimistic(c), f;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var i = this, o = r.query, a = r.variables, s = r.fetchPolicy, c = r.refetchWritePolicy, l = r.errorPolicy, u = r.returnPartialData, f = r.context, d = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: this.transform(o).document,
      variables: a,
      networkStatus: n
    });
    var m = function() {
      return t.getDiff(a);
    }, p = function(w, S) {
      S === void 0 && (S = t.networkStatus || st.loading);
      var C = w.result;
      __DEV__ && !u && !Mt(C, {}) && rp(w.missing);
      var O = function(T) {
        return dt.of(V({ data: T, loading: no(S), networkStatus: S }, w.complete ? null : { partial: !0 }));
      };
      return C && i.transform(o).hasForcedResolvers ? i.localState.runResolvers({
        document: o,
        remoteResult: { data: C },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(T) {
        return O(T.data || void 0);
      }) : l === "none" && S === st.refetch && Array.isArray(w.missing) ? O(void 0) : O(C);
    }, g = s === "no-cache" ? 0 : n === st.refetch && c !== "merge" ? 1 : 2, b = function() {
      return i.getResultsFromLink(t, g, {
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: l
      });
    }, y = d && typeof h == "number" && h !== n && no(n);
    switch (s) {
      default:
      case "cache-first": {
        var E = m();
        return E.complete ? { fromLink: !1, sources: [p(E, t.markReady())] } : u || y ? { fromLink: !0, sources: [p(E), b()] } : { fromLink: !0, sources: [b()] };
      }
      case "cache-and-network": {
        var E = m();
        return E.complete || u || y ? { fromLink: !0, sources: [p(E), b()] } : { fromLink: !0, sources: [b()] };
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
    return t && !this.queries.has(t) && this.queries.set(t, new $s(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return V(V({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), sd = !1, q1 = function() {
  function e(t) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = t.uri, i = t.credentials, o = t.headers, a = t.cache, s = t.ssrMode, c = s === void 0 ? !1 : s, l = t.ssrForceFetchDelay, u = l === void 0 ? 0 : l, f = t.connectToDevTools, d = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : f, h = t.queryDeduplication, m = h === void 0 ? !0 : h, p = t.defaultOptions, g = t.assumeImmutableResults, b = g === void 0 ? !1 : g, y = t.resolvers, E = t.typeDefs, w = t.fragmentMatcher, S = t.name, C = t.version, O = t.link;
    if (O || (O = n ? new Gb({ uri: n, credentials: i, headers: o }) : wi.empty()), !a)
      throw __DEV__ ? new Qe(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new Qe(9);
    if (this.link = O, this.cache = a, this.disableNetworkFetches = c || u > 0, this.queryDeduplication = m, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = E, u && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !sd && d && __DEV__ && (sd = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var T = window.navigator, N = T && T.userAgent, x = void 0;
      typeof N == "string" && (N.indexOf("Chrome/") > -1 ? x = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : N.indexOf("Firefox/") > -1 && (x = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), x && __DEV__ && le.log("Download the Apollo DevTools for a better development experience: " + x);
    }
    this.version = bb, this.localState = new np({
      cache: a,
      client: this,
      resolvers: y,
      fragmentMatcher: w
    }), this.queryManager = new U1({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: m,
      ssrMode: c,
      clientAwareness: {
        name: S,
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
    return this.defaultOptions.watchQuery && (t = Rs(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = V(V({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Rs(this.defaultOptions.query, t)), __DEV__ ? le(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : le(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = V(V({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Rs(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
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
    return xc(this.link, t);
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
    var r = this.queryManager.refetchQueries(t), n = [], i = [];
    r.forEach(function(a, s) {
      n.push(s), i.push(a);
    });
    var o = Promise.all(i);
    return o.queries = n, o.results = i, o.catch(function(a) {
      __DEV__ && le.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
    }), o;
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
function Q1(e) {
  return new wi(function(t, r) {
    var n = Rn(t, []);
    return new dt(function(i) {
      var o, a = !1;
      return Promise.resolve(n).then(function(s) {
        return e(s, t.getContext());
      }).then(t.setContext).then(function() {
        a || (o = r(t).subscribe({
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
const G1 = `${hv}/${ey._GRAPHQL}`, K1 = new ty(), Y1 = Nv({
  uri: G1
}), X1 = Q1((e, { headers: t }) => {
  const r = K1.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), cd = new q1({
  cache: new V1(),
  link: X1.concat(Y1)
});
function ip(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: J1 } = Object.prototype, { getPrototypeOf: hu } = Object, Ya = ((e) => (t) => {
  const r = J1.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Fr = (e) => (e = e.toLowerCase(), (t) => Ya(t) === e), Xa = (e) => (t) => typeof t === e, { isArray: Oi } = Array, io = Xa("undefined");
function Z1(e) {
  return e !== null && !io(e) && e.constructor !== null && !io(e.constructor) && mr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const op = Fr("ArrayBuffer");
function eE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && op(e.buffer), t;
}
const tE = Xa("string"), mr = Xa("function"), ap = Xa("number"), Ja = (e) => e !== null && typeof e == "object", rE = (e) => e === !0 || e === !1, ra = (e) => {
  if (Ya(e) !== "object")
    return !1;
  const t = hu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, nE = Fr("Date"), iE = Fr("File"), oE = Fr("Blob"), aE = Fr("FileList"), sE = (e) => Ja(e) && mr(e.pipe), cE = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || mr(e.append) && ((t = Ya(e)) === "formdata" || // detect form-data instance
  t === "object" && mr(e.toString) && e.toString() === "[object FormData]"));
}, lE = Fr("URLSearchParams"), uE = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function go(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), Oi(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (n = 0; n < a; n++)
      s = o[n], t.call(null, e[s], s, e);
  }
}
function sp(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const cp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), lp = (e) => !io(e) && e !== cp;
function Lc() {
  const { caseless: e } = lp(this) && this || {}, t = {}, r = (n, i) => {
    const o = e && sp(t, i) || i;
    ra(t[o]) && ra(n) ? t[o] = Lc(t[o], n) : ra(n) ? t[o] = Lc({}, n) : Oi(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && go(arguments[n], r);
  return t;
}
const fE = (e, t, r, { allOwnKeys: n } = {}) => (go(t, (i, o) => {
  r && mr(i) ? e[o] = ip(i, r) : e[o] = i;
}, { allOwnKeys: n }), e), dE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), hE = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, vE = (e, t, r, n) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && hu(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, pE = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, mE = (e) => {
  if (!e)
    return null;
  if (Oi(e))
    return e;
  let t = e.length;
  if (!ap(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, gE = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && hu(Uint8Array)), yE = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, bE = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, EE = Fr("HTMLFormElement"), SE = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), ld = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), wE = Fr("RegExp"), up = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  go(r, (i, o) => {
    t(i, o, e) !== !1 && (n[o] = i);
  }), Object.defineProperties(e, n);
}, CE = (e) => {
  up(e, (t, r) => {
    if (mr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (mr(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, OE = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((o) => {
      r[o] = !0;
    });
  };
  return Oi(e) ? n(e) : n(String(e).split(t)), r;
}, _E = () => {
}, xE = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ks = "abcdefghijklmnopqrstuvwxyz", ud = "0123456789", fp = {
  DIGIT: ud,
  ALPHA: ks,
  ALPHA_DIGIT: ks + ks.toUpperCase() + ud
}, RE = (e = 16, t = fp.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function PE(e) {
  return !!(e && mr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const TE = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Ja(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const o = Oi(n) ? [] : {};
        return go(n, (a, s) => {
          const c = r(a, i + 1);
          !io(c) && (o[s] = c);
        }), t[i] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, NE = Fr("AsyncFunction"), ME = (e) => e && (Ja(e) || mr(e)) && mr(e.then) && mr(e.catch), U = {
  isArray: Oi,
  isArrayBuffer: op,
  isBuffer: Z1,
  isFormData: cE,
  isArrayBufferView: eE,
  isString: tE,
  isNumber: ap,
  isBoolean: rE,
  isObject: Ja,
  isPlainObject: ra,
  isUndefined: io,
  isDate: nE,
  isFile: iE,
  isBlob: oE,
  isRegExp: wE,
  isFunction: mr,
  isStream: sE,
  isURLSearchParams: lE,
  isTypedArray: gE,
  isFileList: aE,
  forEach: go,
  merge: Lc,
  extend: fE,
  trim: uE,
  stripBOM: dE,
  inherits: hE,
  toFlatObject: vE,
  kindOf: Ya,
  kindOfTest: Fr,
  endsWith: pE,
  toArray: mE,
  forEachEntry: yE,
  matchAll: bE,
  isHTMLForm: EE,
  hasOwnProperty: ld,
  hasOwnProp: ld,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: up,
  freezeMethods: CE,
  toObjectSet: OE,
  toCamelCase: SE,
  noop: _E,
  toFiniteNumber: xE,
  findKey: sp,
  global: cp,
  isContextDefined: lp,
  ALPHABET: fp,
  generateString: RE,
  isSpecCompliantForm: PE,
  toJSONObject: TE,
  isAsyncFn: NE,
  isThenable: ME
};
function He(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
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
const dp = He.prototype, hp = {};
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
  hp[e] = { value: e };
});
Object.defineProperties(He, hp);
Object.defineProperty(dp, "isAxiosError", { value: !0 });
He.from = (e, t, r, n, i, o) => {
  const a = Object.create(dp);
  return U.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), He.call(a, e.message, t, r, n, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const IE = null;
function jc(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function vp(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fd(e, t, r) {
  return e ? e.concat(t).map(function(i, o) {
    return i = vp(i), !r && o ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function DE(e) {
  return U.isArray(e) && !e.some(jc);
}
const AE = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Za(e, t, r) {
  if (!U.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = U.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, g) {
    return !U.isUndefined(g[p]);
  });
  const n = r.metaTokens, i = r.visitor || u, o = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null)
      return "";
    if (U.isDate(m))
      return m.toISOString();
    if (!c && U.isBlob(m))
      throw new He("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(m) || U.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, p, g) {
    let b = m;
    if (m && !g && typeof m == "object") {
      if (U.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (U.isArray(m) && DE(m) || (U.isFileList(m) || U.endsWith(p, "[]")) && (b = U.toArray(m)))
        return p = vp(p), b.forEach(function(E, w) {
          !(U.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? fd([p], w, o) : a === null ? p : p + "[]",
            l(E)
          );
        }), !1;
    }
    return jc(m) ? !0 : (t.append(fd(g, p, o), l(m)), !1);
  }
  const f = [], d = Object.assign(AE, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: jc
  });
  function h(m, p) {
    if (!U.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), U.forEach(m, function(b, y) {
        (!(U.isUndefined(b) || b === null) && i.call(
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
function vu(e, t) {
  this._pairs = [], e && Za(e, this, t);
}
const pp = vu.prototype;
pp.append = function(t, r) {
  this._pairs.push([t, r]);
};
pp.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, dd);
  } : dd;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function FE(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function mp(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || FE, i = r && r.serialize;
  let o;
  if (i ? o = i(t, r) : o = U.isURLSearchParams(t) ? t.toString() : new vu(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class $E {
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
const hd = $E, gp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kE = typeof URLSearchParams < "u" ? URLSearchParams : vu, LE = typeof FormData < "u" ? FormData : null, jE = typeof Blob < "u" ? Blob : null, VE = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), zE = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Dr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kE,
    FormData: LE,
    Blob: jE
  },
  isStandardBrowserEnv: VE,
  isStandardBrowserWebWorkerEnv: zE,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function HE(e, t) {
  return Za(e, new Dr.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, o) {
      return Dr.isNode && U.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function BE(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function WE(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let o;
  for (n = 0; n < i; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function yp(e) {
  function t(r, n, i, o) {
    let a = r[o++];
    const s = Number.isFinite(+a), c = o >= r.length;
    return a = !a && U.isArray(i) ? i.length : a, c ? (U.hasOwnProp(i, a) ? i[a] = [i[a], n] : i[a] = n, !s) : ((!i[a] || !U.isObject(i[a])) && (i[a] = []), t(r, n, i[a], o) && U.isArray(i[a]) && (i[a] = WE(i[a])), !s);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const r = {};
    return U.forEachEntry(e, (n, i) => {
      t(BE(n), i, r, 0);
    }), r;
  }
  return null;
}
const UE = {
  "Content-Type": void 0
};
function qE(e, t, r) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const es = {
  transitional: gp,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, o = U.isObject(t);
    if (o && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return i && i ? JSON.stringify(yp(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return HE(t, this.formSerializer).toString();
      if ((s = U.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Za(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (r.setContentType("application/json", !1), qE(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || es.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && U.isString(t) && (n && !this.responseType || i)) {
      const a = !(r && r.silentJSONParsing) && i;
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
  es.headers[t] = {};
});
U.forEach(["post", "put", "patch"], function(t) {
  es.headers[t] = U.merge(UE);
});
const pu = es, QE = U.toObjectSet([
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
]), GE = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), r = a.substring(0, i).trim().toLowerCase(), n = a.substring(i + 1).trim(), !(!r || t[r] && QE[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, vd = Symbol("internals");
function Vi(e) {
  return e && String(e).trim().toLowerCase();
}
function na(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(na) : String(e);
}
function KE(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const YE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ls(e, t, r, n, i) {
  if (U.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!U.isString(t)) {
    if (U.isString(n))
      return t.indexOf(n) !== -1;
    if (U.isRegExp(n))
      return n.test(t);
  }
}
function XE(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function JE(e, t) {
  const r = U.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, o, a) {
        return this[n].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class ts {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function o(s, c, l) {
      const u = Vi(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = U.findKey(i, u);
      (!f || i[f] === void 0 || l === !0 || l === void 0 && i[f] !== !1) && (i[f || c] = na(s));
    }
    const a = (s, c) => U.forEach(s, (l, u) => o(l, u, c));
    return U.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : U.isString(t) && (t = t.trim()) && !YE(t) ? a(GE(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Vi(t), t) {
      const n = U.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return KE(i);
        if (U.isFunction(r))
          return r.call(this, i, n);
        if (U.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Vi(t), t) {
      const n = U.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ls(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function o(a) {
      if (a = Vi(a), a) {
        const s = U.findKey(n, a);
        s && (!r || Ls(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return U.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Ls(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return U.forEach(this, (i, o) => {
      const a = U.findKey(n, o);
      if (a) {
        r[a] = na(i), delete r[o];
        return;
      }
      const s = t ? XE(o) : String(o).trim();
      s !== o && delete r[o], r[s] = na(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && U.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[vd] = this[vd] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = Vi(a);
      n[s] || (JE(i, a), n[s] = !0);
    }
    return U.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ts.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.freezeMethods(ts.prototype);
U.freezeMethods(ts);
const qr = ts;
function js(e, t) {
  const r = this || pu, n = t || r, i = qr.from(n.headers);
  let o = n.data;
  return U.forEach(e, function(s) {
    o = s.call(r, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function bp(e) {
  return !!(e && e.__CANCEL__);
}
function yo(e, t, r) {
  He.call(this, e ?? "canceled", He.ERR_CANCELED, t, r), this.name = "CanceledError";
}
U.inherits(yo, He, {
  __CANCEL__: !0
});
function ZE(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new He(
    "Request failed with status code " + r.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const eS = Dr.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, i, o, a, s) {
        const c = [];
        c.push(r + "=" + encodeURIComponent(n)), U.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), U.isString(o) && c.push("path=" + o), U.isString(a) && c.push("domain=" + a), s === !0 && c.push("secure"), document.cookie = c.join("; ");
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
function tS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rS(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ep(e, t) {
  return e && !tS(t) ? rS(e, t) : t;
}
const nS = Dr.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(o) {
      let a = o;
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
    return n = i(window.location.href), function(a) {
      const s = U.isString(a) ? i(a) : a;
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
function iS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function oS(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[o];
    a || (a = l), r[i] = c, n[i] = l;
    let f = o, d = 0;
    for (; f !== i; )
      d += r[f++], f = f % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), l - a < t)
      return;
    const h = u && l - u;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function pd(e, t) {
  let r = 0;
  const n = oS(50, 250);
  return (i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, s = o - r, c = n(s), l = o <= a;
    r = o;
    const u = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && l ? (a - o) / c : void 0,
      event: i
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const aS = typeof XMLHttpRequest < "u", sS = aS && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const o = qr.from(e.headers).normalize(), a = e.responseType;
    let s;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    U.isFormData(i) && (Dr.isStandardBrowserEnv || Dr.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const u = Ep(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), mp(u, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function f() {
      if (!l)
        return;
      const h = qr.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: h,
        config: e,
        request: l
      };
      ZE(function(b) {
        r(b), c();
      }, function(b) {
        n(b), c();
      }, p), l = null;
    }
    if ("onloadend" in l ? l.onloadend = f : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, l.onabort = function() {
      l && (n(new He("Request aborted", He.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new He("Network Error", He.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || gp;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new He(
        m,
        p.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Dr.isStandardBrowserEnv) {
      const h = (e.withCredentials || nS(u)) && e.xsrfCookieName && eS.read(e.xsrfCookieName);
      h && o.set(e.xsrfHeaderName, h);
    }
    i === void 0 && o.setContentType(null), "setRequestHeader" in l && U.forEach(o.toJSON(), function(m, p) {
      l.setRequestHeader(p, m);
    }), U.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), a && a !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", pd(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", pd(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      l && (n(!h || h.type ? new yo(null, e, l) : h), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = iS(u);
    if (d && Dr.protocols.indexOf(d) === -1) {
      n(new He("Unsupported protocol " + d + ":", He.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(i || null);
  });
}, ia = {
  http: IE,
  xhr: sS
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
const cS = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let i = 0; i < t && (r = e[i], !(n = U.isString(r) ? ia[r.toLowerCase()] : r)); i++)
      ;
    if (!n)
      throw n === !1 ? new He(
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
function Vs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yo(null, e);
}
function md(e) {
  return Vs(e), e.headers = qr.from(e.headers), e.data = js.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cS.getAdapter(e.adapter || pu.adapter)(e).then(function(n) {
    return Vs(e), n.data = js.call(
      e,
      e.transformResponse,
      n
    ), n.headers = qr.from(n.headers), n;
  }, function(n) {
    return bp(n) || (Vs(e), n && n.response && (n.response.data = js.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = qr.from(n.response.headers))), Promise.reject(n);
  });
}
const gd = (e) => e instanceof qr ? e.toJSON() : e;
function pi(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, f) {
    return U.isPlainObject(l) && U.isPlainObject(u) ? U.merge.call({ caseless: f }, l, u) : U.isPlainObject(u) ? U.merge({}, u) : U.isArray(u) ? u.slice() : u;
  }
  function i(l, u, f) {
    if (U.isUndefined(u)) {
      if (!U.isUndefined(l))
        return n(void 0, l, f);
    } else
      return n(l, u, f);
  }
  function o(l, u) {
    if (!U.isUndefined(u))
      return n(void 0, u);
  }
  function a(l, u) {
    if (U.isUndefined(u)) {
      if (!U.isUndefined(l))
        return n(void 0, l);
    } else
      return n(void 0, u);
  }
  function s(l, u, f) {
    if (f in t)
      return n(l, u);
    if (f in e)
      return n(void 0, l);
  }
  const c = {
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
    headers: (l, u) => i(gd(l), gd(u), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || i, d = f(e[u], t[u], u);
    U.isUndefined(d) && f !== s || (r[u] = d);
  }), r;
}
const Sp = "1.4.0", mu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  mu[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const yd = {};
mu.transitional = function(t, r, n) {
  function i(o, a) {
    return "[Axios v" + Sp + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new He(
        i(a, " has been removed" + (r ? " in " + r : "")),
        He.ERR_DEPRECATED
      );
    return r && !yd[a] && (yd[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function lS(e, t, r) {
  if (typeof e != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const o = n[i], a = t[o];
    if (a) {
      const s = e[o], c = s === void 0 || a(s, o, e);
      if (c !== !0)
        throw new He("option " + o + " must be " + c, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new He("Unknown option " + o, He.ERR_BAD_OPTION);
  }
}
const Vc = {
  assertOptions: lS,
  validators: mu
}, Xr = Vc.validators;
class Ea {
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = pi(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: o } = r;
    n !== void 0 && Vc.assertOptions(n, {
      silentJSONParsing: Xr.transitional(Xr.boolean),
      forcedJSONParsing: Xr.transitional(Xr.boolean),
      clarifyTimeoutError: Xr.transitional(Xr.boolean)
    }, !1), i != null && (U.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Vc.assertOptions(i, {
      encode: Xr.function,
      serialize: Xr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && U.merge(
      o.common,
      o[r.method]
    ), a && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), r.headers = qr.concat(a, o);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (c = c && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const m = [md.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, l), d = m.length, u = Promise.resolve(r); f < d; )
        u = u.then(m[f++], m[f++]);
      return u;
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
      u = md.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = l.length; f < d; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = pi(this.defaults, t);
    const r = Ep(t.baseURL, t.url);
    return mp(r, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Ea.prototype[t] = function(r, n) {
    return this.request(pi(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, s) {
      return this.request(pi(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Ea.prototype[t] = r(), Ea.prototype[t + "Form"] = r(!0);
});
const oa = Ea;
class gu {
  constructor(t) {
    if (typeof t != "function")
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
    }, t(function(o, a, s) {
      n.reason || (n.reason = new yo(o, a, s), r(n.reason));
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
      token: new gu(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const uS = gu;
function fS(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function dS(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const zc = {
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
Object.entries(zc).forEach(([e, t]) => {
  zc[t] = e;
});
const hS = zc;
function wp(e) {
  const t = new oa(e), r = ip(oa.prototype.request, t);
  return U.extend(r, oa.prototype, t, { allOwnKeys: !0 }), U.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return wp(pi(e, i));
  }, r;
}
const It = wp(pu);
It.Axios = oa;
It.CanceledError = yo;
It.CancelToken = uS;
It.isCancel = bp;
It.VERSION = Sp;
It.toFormData = Za;
It.AxiosError = He;
It.Cancel = It.CanceledError;
It.all = function(t) {
  return Promise.all(t);
};
It.spread = fS;
It.isAxiosError = dS;
It.mergeConfig = pi;
It.AxiosHeaders = qr;
It.formToJSON = (e) => yp(U.isHTMLForm(e) ? new FormData(e) : e);
It.HttpStatusCode = hS;
It.default = It;
const vS = It, nM = vS.create({
  baseURL: hv,
  withCredentials: !0
}), pS = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, iM = [pS.PROFILE], oM = () => {
  const [e, t] = lr([]);
  return {
    on: (r) => {
      Object.entries(r).forEach(([n, i]) => {
        const o = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), i?.(), !1;
        };
        t([...e, o]), document.addEventListener("keydown", o);
      });
    },
    clear: () => {
      e.forEach((r) => {
        document.removeEventListener("keydown", r);
      });
    }
  };
}, aM = (e, t) => {
  Ht(() => {
    e();
  }, t);
}, mS = (e = !1) => {
  const [t, r] = lr(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, sM = (e, t) => {
  const r = Ae();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, cM = (e, t) => {
  Ht(() => {
    for (const r of t)
      if (!r)
        return;
    return e();
  }, t);
}, lM = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Cp = ({ when: e, children: t }) => e ? t : null, Op = po({}), gS = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), _p = ({ children: e }) => {
  const t = Ae(), r = Ae(), n = mS(), i = async () => {
    const [a, s] = await gS();
    t.current = a, r.current = s, n.on();
  };
  Ht(() => {
    i();
  }, []);
  const o = fi(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ Ct(Op.Provider, { value: o, children: /* @__PURE__ */ Ct(Cp, { when: n.val, children: e }) });
}, xp = () => Qt(Op);
var $t;
$t = { __e: function(e, t, r, n) {
  for (var i, o, a; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a)
          return i.__E = i;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Sa, bt, zs, bd, Hc = 0, Rp = [], aa = [], Ed = $t.__b, Sd = $t.__r, wd = $t.diffed, Cd = $t.__c, Od = $t.unmount;
function Pp(e, t) {
  $t.__h && $t.__h(bt, e, Hc || t), Hc = 0;
  var r = bt.__H || (bt.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: aa }), r.__[e];
}
function yS(e) {
  return Hc = 1, bS(Tp, e);
}
function bS(e, t, r) {
  var n = Pp(Sa++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : Tp(void 0, t), function(s) {
    var c = n.__N ? n.__N[0] : n.__[0], l = n.t(c, s);
    c !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = bt, !bt.u)) {
    var i = function(s, c, l) {
      if (!n.__c.__H)
        return !0;
      var u = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (u.every(function(d) {
        return !d.__N;
      }))
        return !o || o.call(this, s, c, l);
      var f = !1;
      return u.forEach(function(d) {
        if (d.__N) {
          var h = d.__[0];
          d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (f = !0);
        }
      }), !(!f && n.__c.props === s) && (!o || o.call(this, s, c, l));
    };
    bt.u = !0;
    var o = bt.shouldComponentUpdate, a = bt.componentWillUpdate;
    bt.componentWillUpdate = function(s, c, l) {
      if (this.__e) {
        var u = o;
        o = void 0, i(s, c, l), o = u;
      }
      a && a.call(this, s, c, l);
    }, bt.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function ES(e) {
  var t = Pp(Sa++, 10), r = yS();
  return t.__ = e, bt.componentDidCatch || (bt.componentDidCatch = function(n, i) {
    t.__ && t.__(n, i), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function SS() {
  for (var e; e = Rp.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(sa), e.__H.__h.forEach(Bc), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], $t.__e(t, e.__v);
      }
}
$t.__b = function(e) {
  bt = null, Ed && Ed(e);
}, $t.__r = function(e) {
  Sd && Sd(e), Sa = 0;
  var t = (bt = e.__c).__H;
  t && (zs === bt ? (t.__h = [], bt.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = aa, r.__N = r.i = void 0;
  })) : (t.__h.forEach(sa), t.__h.forEach(Bc), t.__h = [], Sa = 0)), zs = bt;
}, $t.diffed = function(e) {
  wd && wd(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Rp.push(t) !== 1 && bd === $t.requestAnimationFrame || ((bd = $t.requestAnimationFrame) || wS)(SS)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== aa && (r.__ = r.__V), r.i = void 0, r.__V = aa;
  })), zs = bt = null;
}, $t.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(sa), r.__h = r.__h.filter(function(n) {
        return !n.__ || Bc(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], $t.__e(n, r.__v);
    }
  }), Cd && Cd(e, t);
}, $t.unmount = function(e) {
  Od && Od(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      sa(n);
    } catch (i) {
      t = i;
    }
  }), r.__H = void 0, t && $t.__e(t, r.__v));
};
var _d = typeof requestAnimationFrame == "function";
function wS(e) {
  var t, r = function() {
    clearTimeout(n), _d && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  _d && (t = requestAnimationFrame(r));
}
function sa(e) {
  var t = bt, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), bt = t;
}
function Bc(e) {
  var t = bt;
  e.__c = e.__(), bt = t;
}
function Tp(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const CS = () => /* @__PURE__ */ dv("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ Ct("br", {})
] }), uM = ({ children: e }) => {
  const [t] = ES();
  return console.error(t), t ? /* @__PURE__ */ Ct(CS, { errorInfo: t }) : /* @__PURE__ */ Ct(Wl, { children: e });
};
function yr(e, t) {
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
function OS(e, t) {
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
function Np(e) {
  var t = OS(e, "string");
  return Be(t) === "symbol" ? t : String(t);
}
function xd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Np(n.key), n);
  }
}
function br(e, t, r) {
  return t && xd(e.prototype, t), r && xd(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wc(e, t) {
  return Wc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wc(e, t);
}
function bo(e, t) {
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
  }), t && Wc(e, t);
}
function wa(e) {
  return wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wa(e);
}
function _S() {
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
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xS(e, t) {
  if (t && (Be(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ca(e);
}
function Eo(e) {
  var t = _S();
  return function() {
    var n = wa(e), i;
    if (t) {
      var o = wa(this).constructor;
      i = Reflect.construct(n, arguments, o);
    } else
      i = n.apply(this, arguments);
    return xS(this, i);
  };
}
var Mp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = r.apply(null, o);
              s && n.push(s);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              n.push(o.toString());
              continue;
            }
            for (var c in o)
              t.call(o, c) && o[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Mp);
var RS = Mp.exports;
const Me = /* @__PURE__ */ Ov(RS);
function Je() {
  return Je = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Je.apply(this, arguments);
}
var Uc = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function PS() {
  if (Rd)
    return Ge;
  Rd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var C = S.$$typeof;
      switch (C) {
        case t:
          switch (S = S.type, S) {
            case c:
            case l:
            case n:
            case o:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case u:
                case m:
                case h:
                case a:
                  return S;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function w(S) {
    return E(S) === l;
  }
  return Ge.AsyncMode = c, Ge.ConcurrentMode = l, Ge.ContextConsumer = s, Ge.ContextProvider = a, Ge.Element = t, Ge.ForwardRef = u, Ge.Fragment = n, Ge.Lazy = m, Ge.Memo = h, Ge.Portal = r, Ge.Profiler = o, Ge.StrictMode = i, Ge.Suspense = f, Ge.isAsyncMode = function(S) {
    return w(S) || E(S) === c;
  }, Ge.isConcurrentMode = w, Ge.isContextConsumer = function(S) {
    return E(S) === s;
  }, Ge.isContextProvider = function(S) {
    return E(S) === a;
  }, Ge.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ge.isForwardRef = function(S) {
    return E(S) === u;
  }, Ge.isFragment = function(S) {
    return E(S) === n;
  }, Ge.isLazy = function(S) {
    return E(S) === m;
  }, Ge.isMemo = function(S) {
    return E(S) === h;
  }, Ge.isPortal = function(S) {
    return E(S) === r;
  }, Ge.isProfiler = function(S) {
    return E(S) === o;
  }, Ge.isStrictMode = function(S) {
    return E(S) === i;
  }, Ge.isSuspense = function(S) {
    return E(S) === f;
  }, Ge.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === l || S === o || S === i || S === f || S === d || typeof S == "object" && S !== null && (S.$$typeof === m || S.$$typeof === h || S.$$typeof === a || S.$$typeof === s || S.$$typeof === u || S.$$typeof === g || S.$$typeof === b || S.$$typeof === y || S.$$typeof === p);
  }, Ge.typeOf = E, Ge;
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
var Pd;
function TS() {
  return Pd || (Pd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function E(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === l || k === o || k === i || k === f || k === d || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === h || k.$$typeof === a || k.$$typeof === s || k.$$typeof === u || k.$$typeof === g || k.$$typeof === b || k.$$typeof === y || k.$$typeof === p);
    }
    function w(k) {
      if (typeof k == "object" && k !== null) {
        var ee = k.$$typeof;
        switch (ee) {
          case t:
            var z = k.type;
            switch (z) {
              case c:
              case l:
              case n:
              case o:
              case i:
              case f:
                return z;
              default:
                var te = z && z.$$typeof;
                switch (te) {
                  case s:
                  case u:
                  case m:
                  case h:
                  case a:
                    return te;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var S = c, C = l, O = s, T = a, N = t, x = u, L = n, R = m, _ = h, P = r, I = o, A = i, D = f, B = !1;
    function Q(k) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(k) || w(k) === c;
    }
    function ie(k) {
      return w(k) === l;
    }
    function ce(k) {
      return w(k) === s;
    }
    function F(k) {
      return w(k) === a;
    }
    function H(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function j(k) {
      return w(k) === u;
    }
    function Y(k) {
      return w(k) === n;
    }
    function M(k) {
      return w(k) === m;
    }
    function q(k) {
      return w(k) === h;
    }
    function $(k) {
      return w(k) === r;
    }
    function J(k) {
      return w(k) === o;
    }
    function re(k) {
      return w(k) === i;
    }
    function X(k) {
      return w(k) === f;
    }
    Ke.AsyncMode = S, Ke.ConcurrentMode = C, Ke.ContextConsumer = O, Ke.ContextProvider = T, Ke.Element = N, Ke.ForwardRef = x, Ke.Fragment = L, Ke.Lazy = R, Ke.Memo = _, Ke.Portal = P, Ke.Profiler = I, Ke.StrictMode = A, Ke.Suspense = D, Ke.isAsyncMode = Q, Ke.isConcurrentMode = ie, Ke.isContextConsumer = ce, Ke.isContextProvider = F, Ke.isElement = H, Ke.isForwardRef = j, Ke.isFragment = Y, Ke.isLazy = M, Ke.isMemo = q, Ke.isPortal = $, Ke.isProfiler = J, Ke.isStrictMode = re, Ke.isSuspense = X, Ke.isValidElementType = E, Ke.typeOf = w;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Uc.exports = PS() : Uc.exports = TS();
var yu = Uc.exports;
function Nn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Te.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Nn(n)) : yu.isFragment(n) && n.props ? r = r.concat(Nn(n.props.children, t)) : r.push(n));
  }), r;
}
var qc = {}, bu = [], NS = function(t) {
  bu.push(t);
};
function oo(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = bu.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function MS(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = bu.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ip() {
  qc = {};
}
function Dp(e, t, r) {
  !t && !qc[r] && (e(!1, r), qc[r] = !0);
}
function ke(e, t) {
  Dp(oo, e, t);
}
function Qc(e, t) {
  Dp(MS, e, t);
}
ke.preMessage = NS;
ke.resetWarned = Ip;
ke.noteOnce = Qc;
function be(e, t, r) {
  return t = Np(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Td(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Td(Object(r), !0).forEach(function(n) {
      be(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Td(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rs(e, t, r) {
  var n = v.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Eu(e, t) {
  typeof e == "function" ? e(t) : Be(e) === "object" && e && "current" in e && (e.current = t);
}
function _i() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(i) {
    return i;
  });
  return n.length <= 1 ? n[0] : function(i) {
    t.forEach(function(o) {
      Eu(o, i);
    });
  };
}
function Su() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return rs(function() {
    return _i.apply(void 0, t);
  }, t, function(n, i) {
    return n.length === i.length && n.every(function(o, a) {
      return o === i[a];
    });
  });
}
function So(e) {
  var t, r, n = yu.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function Oa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function _a(e) {
  return Oa(e) ? e : e instanceof Te.Component ? Q0.findDOMNode(e) : null;
}
var Ap = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, o) {
      return i[0] === r ? (n = o, !0) : !1;
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
        var n = e(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(r, n) {
        var i = e(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, i = e(n, r);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var a = o[i];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Gc = typeof window < "u" && typeof document < "u" && window.document === document, xa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), IS = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(xa) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), DS = 2;
function AS(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    IS(o);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - i < DS)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    i = c;
  }
  return s;
}
var FS = 20, $S = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], kS = typeof MutationObserver < "u", LS = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = AS(this.refresh.bind(this), FS);
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
      !Gc || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kS ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Gc || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = $S.some(function(o) {
        return !!~n.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Fp = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, mi = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || xa;
}, $p = ns(0, 0, 0, 0);
function Ra(e) {
  return parseFloat(e) || 0;
}
function Nd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + Ra(o);
  }, 0);
}
function jS(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    r[o] = Ra(a);
  }
  return r;
}
function VS(e) {
  var t = e.getBBox();
  return ns(0, 0, t.width, t.height);
}
function zS(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return $p;
  var n = mi(e).getComputedStyle(e), i = jS(n), o = i.left + i.right, a = i.top + i.bottom, s = Ra(n.width), c = Ra(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Nd(n, "left", "right") + o), Math.round(c + a) !== r && (c -= Nd(n, "top", "bottom") + a)), !BS(e)) {
    var l = Math.round(s + o) - t, u = Math.round(c + a) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return ns(i.left, i.top, s, c);
}
var HS = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof mi(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof mi(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function BS(e) {
  return e === mi(e).document.documentElement;
}
function WS(e) {
  return Gc ? HS(e) ? VS(e) : zS(e) : $p;
}
function US(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Fp(a, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), a;
}
function ns(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var qS = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ns(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = WS(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), QS = (
  /** @class */
  function() {
    function e(t, r) {
      var n = US(r);
      Fp(this, { target: t, contentRect: n });
    }
    return e;
  }()
), GS = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Ap(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof mi(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new qS(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof mi(t).Element))
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
          return new QS(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), kp = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ap(), Lp = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = LS.getInstance(), n = new GS(t, r, this);
      kp.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Lp.prototype[e] = function() {
    var t;
    return (t = kp.get(this))[e].apply(t, arguments);
  };
});
var KS = function() {
  return typeof xa.ResizeObserver < "u" ? xa.ResizeObserver : Lp;
}(), Wr = /* @__PURE__ */ new Map();
function jp(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Wr.get(n)) === null || r === void 0 || r.forEach(function(i) {
      return i(n);
    });
  });
}
var Vp = new KS(jp);
process.env.NODE_ENV;
process.env.NODE_ENV;
function YS(e, t) {
  Wr.has(e) || (Wr.set(e, /* @__PURE__ */ new Set()), Vp.observe(e)), Wr.get(e).add(t);
}
function XS(e, t) {
  Wr.has(e) && (Wr.get(e).delete(t), Wr.get(e).size || (Vp.unobserve(e), Wr.delete(e)));
}
var JS = /* @__PURE__ */ function(e) {
  bo(r, e);
  var t = Eo(r);
  function r() {
    return yr(this, r), t.apply(this, arguments);
  }
  return br(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), Kc = /* @__PURE__ */ v.createContext(null);
function ZS(e) {
  var t = e.children, r = e.onBatchResize, n = v.useRef(0), i = v.useRef([]), o = v.useContext(Kc), a = v.useCallback(function(s, c, l) {
    n.current += 1;
    var u = n.current;
    i.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === n.current && (r?.(i.current), i.current = []);
    }), o?.(s, c, l);
  }, [r, o]);
  return /* @__PURE__ */ v.createElement(Kc.Provider, {
    value: a
  }, t);
}
function ew(e, t) {
  var r = e.children, n = e.disabled, i = v.useRef(null), o = v.useRef(null), a = v.useContext(Kc), s = typeof r == "function", c = s ? r(i) : r, l = v.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ v.isValidElement(c) && So(c), f = u ? c.ref : null, d = v.useMemo(function() {
    return _i(f, i);
  }, [f, i]), h = function() {
    return _a(i.current) || _a(o.current);
  };
  v.useImperativeHandle(t, function() {
    return h();
  });
  var m = v.useRef(e);
  m.current = e;
  var p = v.useCallback(function(g) {
    var b = m.current, y = b.onResize, E = b.data, w = g.getBoundingClientRect(), S = w.width, C = w.height, O = g.offsetWidth, T = g.offsetHeight, N = Math.floor(S), x = Math.floor(C);
    if (l.current.width !== N || l.current.height !== x || l.current.offsetWidth !== O || l.current.offsetHeight !== T) {
      var L = {
        width: N,
        height: x,
        offsetWidth: O,
        offsetHeight: T
      };
      l.current = L;
      var R = O === Math.round(S) ? S : O, _ = T === Math.round(C) ? C : T, P = W(W({}, L), {}, {
        offsetWidth: R,
        offsetHeight: _
      });
      a?.(P, g, E), y && Promise.resolve().then(function() {
        y(P, g);
      });
    }
  }, []);
  return v.useEffect(function() {
    var g = h();
    return g && !n && YS(g, p), function() {
      return XS(g, p);
    };
  }, [i.current, n]), /* @__PURE__ */ v.createElement(JS, {
    ref: o
  }, u ? /* @__PURE__ */ v.cloneElement(c, {
    ref: d
  }) : c);
}
var zp = /* @__PURE__ */ v.forwardRef(ew);
process.env.NODE_ENV !== "production" && (zp.displayName = "SingleObserver");
var tw = "rc-observer-key";
function rw(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Nn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? oo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && oo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(i, o) {
    var a = i?.key || "".concat(tw, "-").concat(o);
    return /* @__PURE__ */ v.createElement(zp, Je({}, e, {
      key: a,
      ref: o === 0 ? t : void 0
    }), i);
  });
}
var An = /* @__PURE__ */ v.forwardRef(rw);
process.env.NODE_ENV !== "production" && (An.displayName = "ResizeObserver");
An.Collection = ZS;
function wu(e, t) {
  var r = W({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Yc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function nw(e) {
  if (Array.isArray(e))
    return Yc(e);
}
function Hp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Cu(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yc(e, t);
  }
}
function iw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  return nw(e) || Hp(e) || Cu(e) || iw();
}
var Bp = function(t) {
  return +setTimeout(t, 16);
}, Wp = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Bp = function(t) {
  return window.requestAnimationFrame(t);
}, Wp = function(t) {
  return window.cancelAnimationFrame(t);
});
var Md = 0, Ou = /* @__PURE__ */ new Map();
function Up(e) {
  Ou.delete(e);
}
var Bt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Md += 1;
  var n = Md;
  function i(o) {
    if (o === 0)
      Up(n), t();
    else {
      var a = Bp(function() {
        i(o - 1);
      });
      Ou.set(n, a);
    }
  }
  return i(r), n;
};
Bt.cancel = function(e) {
  var t = Ou.get(e);
  return Up(t), Wp(t);
};
function _u(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
function ow(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Pt(e, t) {
  if (e == null)
    return {};
  var r = ow(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qp(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function i(o, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(o);
    if (ke(!c, "Warning: There may be circular references"), c)
      return !1;
    if (o === a)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(o);
    var l = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!i(o[u], a[u], l))
          return !1;
      return !0;
    }
    if (o && a && Be(o) === "object" && Be(a) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return i(o[d], a[d], l);
      });
    }
    return !1;
  }
  return i(e, t);
}
var Id = "%", aw = /* @__PURE__ */ function() {
  function e(t) {
    yr(this, e), be(this, "instanceId", void 0), be(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return br(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(Id)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var i = r.join(Id), o = this.cache.get(i), a = n(o);
      a === null ? this.cache.delete(i) : this.cache.set(i, a);
    }
  }]), e;
}(), Xc = "data-token-hash", On = "data-css-hash", sw = "data-cache-path", ni = "__cssinjs_instance__";
function cw() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(On, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(i) {
      i[ni] = i[ni] || e, i[ni] === e && document.head.insertBefore(i, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(On, "]"))).forEach(function(i) {
      var o = i.getAttribute(On);
      if (n[o]) {
        if (i[ni] === e) {
          var a;
          (a = i.parentNode) === null || a === void 0 || a.removeChild(i);
        }
      } else
        n[o] = !0;
    });
  }
  return new aw(e);
}
var xu = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: cw(),
  defaultCache: !0
});
function Gt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function lw(e, t) {
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
var Dd = "data-rc-order", Ad = "data-rc-priority", uw = "rc-util-key", Jc = /* @__PURE__ */ new Map();
function Qp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : uw;
}
function is(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function fw(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Gp(e) {
  return Array.from((Jc.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Kp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Gt())
    return null;
  var r = t.csp, n = t.prepend, i = t.priority, o = i === void 0 ? 0 : i, a = fw(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(Dd, a), s && o && c.setAttribute(Ad, "".concat(o)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var l = is(t), u = l.firstChild;
  if (n) {
    if (s) {
      var f = Gp(l).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Dd)))
          return !1;
        var h = Number(d.getAttribute(Ad) || 0);
        return o >= h;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Yp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = is(t);
  return Gp(r).find(function(n) {
    return n.getAttribute(Qp(t)) === e;
  });
}
function Pa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Yp(e, t);
  if (r) {
    var n = is(t);
    n.removeChild(r);
  }
}
function dw(e, t) {
  var r = Jc.get(e);
  if (!r || !lw(document, r)) {
    var n = Kp("", t), i = n.parentNode;
    Jc.set(e, i), e.removeChild(n);
  }
}
function ao(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = is(r);
  dw(n, r);
  var i = Yp(t, r);
  if (i) {
    var o, a;
    if ((o = r.csp) !== null && o !== void 0 && o.nonce && i.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      i.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = Kp(e, r);
  return c.setAttribute(Qp(r), t), c;
}
function Xp(e) {
  if (Array.isArray(e))
    return e;
}
function hw(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, o, a, s = [], c = !0, l = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, i = u;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (l)
          throw i;
      }
    }
    return s;
  }
}
function Jp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return Xp(e) || hw(e, t) || Cu(e, t) || Jp();
}
function vw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Ru = /* @__PURE__ */ function() {
  function e() {
    yr(this, e), be(this, "cache", void 0), be(this, "keys", void 0), be(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return br(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var c, l;
          a = (c = a) === null || c === void 0 || (l = c.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = a) !== null && n !== void 0 && n.value && o && (a.value[1] = this.cacheCallTimes++), (i = a) === null || i === void 0 ? void 0 : i.value;
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
      var i = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(l, u) {
            var f = G(l, 2), d = f[1];
            return i.internalGet(u)[1] < d ? [u, i.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), a = G(o, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var c = this.cache;
      r.forEach(function(l, u) {
        if (u === r.length - 1)
          c.set(l, {
            value: [n, i.cacheCallTimes++]
          });
        else {
          var f = c.get(l);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var i = r.get(n[0]);
      if (n.length === 1) {
        var o;
        return i.map ? r.set(n[0], {
          map: i.map
        }) : r.delete(n[0]), (o = i.value) === null || o === void 0 ? void 0 : o[0];
      }
      var a = this.deleteByPath(i.map, n.slice(1));
      return (!i.map || i.map.size === 0) && !i.value && r.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !vw(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
be(Ru, "MAX_CACHE_SIZE", 20);
be(Ru, "MAX_CACHE_OFFSET", 5);
var Fd = 0, Zp = /* @__PURE__ */ function() {
  function e(t) {
    yr(this, e), be(this, "derivatives", void 0), be(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Fd, t.length === 0 && oo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Fd += 1;
  }
  return br(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, i) {
        return i(r, n);
      }, void 0);
    }
  }]), e;
}(), Hs = new Ru();
function Zc(e) {
  var t = Array.isArray(e) ? e : [e];
  return Hs.has(t) || Hs.set(t, new Zp(t)), Hs.get(t);
}
function Ta(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Zp ? t += n.id : n && Be(n) === "object" ? t += Ta(n) : t += n;
  }), t;
}
function pw(e, t) {
  return _u("".concat(t, "_").concat(Ta(e)));
}
var Ki = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), em = "_bAmBoO_";
function mw(e, t, r) {
  if (Gt()) {
    var n, i;
    ao(e, Ki);
    var o = document.createElement("div");
    o.style.position = "fixed", o.style.left = "0", o.style.top = "0", t?.(o), document.body.appendChild(o), process.env.NODE_ENV !== "production" && (o.innerHTML = "Test", o.style.zIndex = "9999999");
    var a = r ? r(o) : (n = getComputedStyle(o).content) === null || n === void 0 ? void 0 : n.includes(em);
    return (i = o.parentNode) === null || i === void 0 || i.removeChild(o), Pa(Ki), a;
  }
  return !1;
}
var Bs = void 0;
function gw() {
  return Bs === void 0 && (Bs = mw("@layer ".concat(Ki, " { .").concat(Ki, ' { content: "').concat(em, '"!important; } }'), function(e) {
    e.className = Ki;
  })), Bs;
}
var $d = process.env.NODE_ENV !== "test" && Gt() ? v.useLayoutEffect : v.useEffect, Ot = function(t, r) {
  var n = v.useRef(!0);
  $d(function() {
    return t(n.current);
  }, r), $d(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, kd = function(t, r) {
  Ot(function(n) {
    if (!n)
      return t();
  }, r);
}, yw = W({}, v), Ld = yw.useInsertionEffect, bw = function(t, r, n) {
  v.useMemo(t, n), Ot(function() {
    return r(!0);
  }, n);
}, Ew = Ld ? function(e, t, r) {
  return Ld(function() {
    return e(), t();
  }, r);
} : bw;
function Sw() {
  return !1;
}
var el = !1;
function ww() {
  return el;
}
const Cw = process.env.NODE_ENV === "production" ? Sw : ww;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Ws = window;
  if (typeof Ws.webpackHotUpdate == "function") {
    var Ow = Ws.webpackHotUpdate;
    Ws.webpackHotUpdate = function() {
      return el = !0, setTimeout(function() {
        el = !1;
      }, 0), Ow.apply(void 0, arguments);
    };
  }
}
function tm(e, t, r, n, i) {
  var o = v.useContext(xu), a = o.cache, s = [e].concat(Ee(t)), c = s.join("_"), l = Cw(), u = function(m) {
    a.update(s, function(p) {
      var g = p || [], b = G(g, 2), y = b[0], E = y === void 0 ? 0 : y, w = b[1], S = w;
      process.env.NODE_ENV !== "production" && w && l && (n?.(S, l), S = null);
      var C = S || r(), O = [E, C];
      return m ? m(O) : O;
    });
  };
  v.useMemo(
    function() {
      u();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = a.get(s);
  process.env.NODE_ENV !== "production" && !f && (u(), f = a.get(s));
  var d = f[1];
  return Ew(function() {
    i?.(d);
  }, function(h) {
    return u(function(m) {
      var p = G(m, 2), g = p[0], b = p[1];
      return h && g === 0 && i?.(d), [g + 1, b];
    }), function() {
      a.update(s, function(m) {
        var p = m || [], g = G(p, 2), b = g[0], y = b === void 0 ? 0 : b, E = g[1], w = y - 1;
        return w === 0 ? (n?.(E, !1), null) : [y - 1, E];
      });
    };
  }, [c]), d;
}
var _w = {}, xw = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", mn = /* @__PURE__ */ new Map();
function Rw(e) {
  mn.set(e, (mn.get(e) || 0) + 1);
}
function Pw(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Xc, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[ni] === t) {
        var i;
        (i = n.parentNode) === null || i === void 0 || i.removeChild(n);
      }
    });
  }
}
var Tw = 0;
function Nw(e, t) {
  mn.set(e, (mn.get(e) || 0) - 1);
  var r = Array.from(mn.keys()), n = r.filter(function(i) {
    var o = mn.get(i) || 0;
    return o <= 0;
  });
  r.length - n.length > Tw && n.forEach(function(i) {
    Pw(i, t), mn.delete(i);
  });
}
var Mw = function(t, r, n, i) {
  var o = n.getDerivativeToken(t), a = W(W({}, o), r);
  return i && (a = i(a)), a;
};
function Iw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Qt(xu), i = n.cache.instanceId, o = r.salt, a = o === void 0 ? "" : o, s = r.override, c = s === void 0 ? _w : s, l = r.formatToken, u = r.getComputedToken, f = v.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Ee(t)));
  }, [t]), d = v.useMemo(function() {
    return Ta(f);
  }, [f]), h = v.useMemo(function() {
    return Ta(c);
  }, [c]), m = tm("token", [a, e.id, d, h], function() {
    var p = u ? u(f, c, e) : Mw(f, c, e, l), g = pw(p, a);
    p._tokenKey = g, Rw(g);
    var b = "".concat(xw, "-").concat(_u(g));
    return p._hashId = b, [p, b];
  }, function(p) {
    Nw(p[0]._tokenKey, i);
  });
  return m;
}
var rm = {
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
}, nm = "comm", im = "rule", om = "decl", Dw = "@import", Aw = "@keyframes", Fw = "@layer", $w = Math.abs, Pu = String.fromCharCode;
function am(e) {
  return e.trim();
}
function ca(e, t, r) {
  return e.replace(t, r);
}
function kw(e, t) {
  return e.indexOf(t);
}
function so(e, t) {
  return e.charCodeAt(t) | 0;
}
function co(e, t, r) {
  return e.slice(t, r);
}
function Br(e) {
  return e.length;
}
function Lw(e) {
  return e.length;
}
function $o(e, t) {
  return t.push(e), e;
}
var os = 1, gi = 1, sm = 0, gr = 0, Rt = 0, xi = "";
function Tu(e, t, r, n, i, o, a, s) {
  return { value: e, root: t, parent: r, type: n, props: i, children: o, line: os, column: gi, length: a, return: "", siblings: s };
}
function jw() {
  return Rt;
}
function Vw() {
  return Rt = gr > 0 ? so(xi, --gr) : 0, gi--, Rt === 10 && (gi = 1, os--), Rt;
}
function Pr() {
  return Rt = gr < sm ? so(xi, gr++) : 0, gi++, Rt === 10 && (gi = 1, os++), Rt;
}
function _n() {
  return so(xi, gr);
}
function la() {
  return gr;
}
function as(e, t) {
  return co(xi, e, t);
}
function tl(e) {
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
function zw(e) {
  return os = gi = 1, sm = Br(xi = e), gr = 0, [];
}
function Hw(e) {
  return xi = "", e;
}
function Us(e) {
  return am(as(gr - 1, rl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Bw(e) {
  for (; (Rt = _n()) && Rt < 33; )
    Pr();
  return tl(e) > 2 || tl(Rt) > 3 ? "" : " ";
}
function Ww(e, t) {
  for (; --t && Pr() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97); )
    ;
  return as(e, la() + (t < 6 && _n() == 32 && Pr() == 32));
}
function rl(e) {
  for (; Pr(); )
    switch (Rt) {
      case e:
        return gr;
      case 34:
      case 39:
        e !== 34 && e !== 39 && rl(Rt);
        break;
      case 40:
        e === 41 && rl(e);
        break;
      case 92:
        Pr();
        break;
    }
  return gr;
}
function Uw(e, t) {
  for (; Pr() && e + Rt !== 47 + 10; )
    if (e + Rt === 42 + 42 && _n() === 47)
      break;
  return "/*" + as(t, gr - 1) + "*" + Pu(e === 47 ? e : Pr());
}
function qw(e) {
  for (; !tl(_n()); )
    Pr();
  return as(e, gr);
}
function Qw(e) {
  return Hw(ua("", null, null, null, [""], e = zw(e), 0, [0], e));
}
function ua(e, t, r, n, i, o, a, s, c) {
  for (var l = 0, u = 0, f = a, d = 0, h = 0, m = 0, p = 1, g = 1, b = 1, y = 0, E = "", w = i, S = o, C = n, O = E; g; )
    switch (m = y, y = Pr()) {
      case 40:
        if (m != 108 && so(O, f - 1) == 58) {
          kw(O += ca(Us(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Us(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Bw(m);
        break;
      case 92:
        O += Ww(la() - 1, 7);
        continue;
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            $o(Gw(Uw(Pr(), la()), t, r, c), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        s[l++] = Br(O) * b;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            b == -1 && (O = ca(O, /\f/g, "")), h > 0 && Br(O) - f && $o(h > 32 ? Vd(O + ";", n, r, f - 1, c) : Vd(ca(O, " ", "") + ";", n, r, f - 2, c), c);
            break;
          case 59:
            O += ";";
          default:
            if ($o(C = jd(O, t, r, l, u, i, s, E, w = [], S = [], f, o), o), y === 123)
              if (u === 0)
                ua(O, t, C, C, w, o, f, s, S);
              else
                switch (d === 99 && so(O, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ua(e, C, C, n && $o(jd(e, C, C, 0, 0, i, s, E, i, w = [], f, S), S), i, S, f, s, n ? w : S);
                    break;
                  default:
                    ua(O, C, C, C, [""], S, 0, s, S);
                }
        }
        l = u = h = 0, p = b = 1, E = O = "", f = a;
        break;
      case 58:
        f = 1 + Br(O), h = m;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && Vw() == 125)
            continue;
        }
        switch (O += Pu(y), y * p) {
          case 38:
            b = u > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            s[l++] = (Br(O) - 1) * b, b = 1;
            break;
          case 64:
            _n() === 45 && (O += Us(Pr())), d = _n(), u = f = Br(E = O += qw(la())), y++;
            break;
          case 45:
            m === 45 && Br(O) == 2 && (p = 0);
        }
    }
  return o;
}
function jd(e, t, r, n, i, o, a, s, c, l, u, f) {
  for (var d = i - 1, h = i === 0 ? o : [""], m = Lw(h), p = 0, g = 0, b = 0; p < n; ++p)
    for (var y = 0, E = co(e, d + 1, d = $w(g = a[p])), w = e; y < m; ++y)
      (w = am(g > 0 ? h[y] + " " + E : ca(E, /&\f/g, h[y]))) && (c[b++] = w);
  return Tu(e, t, r, i === 0 ? im : s, c, l, u, f);
}
function Gw(e, t, r, n) {
  return Tu(e, t, r, nm, Pu(jw()), co(e, 2, -2), 0, n);
}
function Vd(e, t, r, n, i) {
  return Tu(e, t, r, om, co(e, 0, n), co(e, n + 1, -1), n, i);
}
function nl(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Kw(e, t, r, n) {
  switch (e.type) {
    case Fw:
      if (e.children.length)
        break;
    case Dw:
    case om:
      return e.return = e.return || e.value;
    case nm:
      return "";
    case Aw:
      return e.return = e.value + "{" + nl(e.children, n) + "}";
    case im:
      if (!Br(e.value = e.props.join(",")))
        return "";
  }
  return Br(r = nl(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function cm(e, t) {
  var r = t.path, n = t.parentSelectors;
  ke(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Yw = function(t, r, n) {
  if (t === "content") {
    var i = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !i.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && cm("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Xw = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && cm("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, zd = "data-ant-cssinjs-cache-path", lm = "_FILE_STYLE__", xn, um = !0;
function Jw() {
  if (!xn && (xn = {}, Gt())) {
    var e = document.createElement("div");
    e.className = zd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(i) {
      var o = i.split(":"), a = G(o, 2), s = a[0], c = a[1];
      xn[s] = c;
    });
    var r = document.querySelector("style[".concat(zd, "]"));
    if (r) {
      var n;
      um = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Zw(e) {
  return Jw(), !!xn[e];
}
function eC(e) {
  var t = xn[e], r = null;
  if (t && Gt())
    if (um)
      r = lm;
    else {
      var n = document.querySelector("style[".concat(On, '="').concat(xn[e], '"]'));
      n ? r = n.innerHTML : delete xn[e];
    }
  return [r, t];
}
var Hd = Gt(), fm = "_skip_check_", dm = "_multi_value_";
function Bd(e) {
  var t = nl(Qw(e), Kw);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function tC(e) {
  return Be(e) === "object" && e && (fm in e || dm in e);
}
function rC(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), i = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(i).concat(l.slice(u.length)), [l].concat(Ee(c.slice(1))).join(" ");
  });
  return o.join(",");
}
var nC = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, i = n.root, o = n.injectHash, a = n.parentSelectors, s = r.hashId, c = r.layer, l = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, h = r.linters, m = h === void 0 ? [] : h, p = "", g = {};
  function b(C) {
    var O = C.getName(s);
    if (!g[O]) {
      var T = e(C.style, r, {
        root: !1,
        parentSelectors: a
      }), N = G(T, 1), x = N[0];
      g[O] = "@keyframes ".concat(C.getName(s)).concat(x);
    }
  }
  function y(C) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(T) {
      Array.isArray(T) ? y(T, O) : T && O.push(T);
    }), O;
  }
  var E = y(Array.isArray(t) ? t : [t]);
  if (E.forEach(function(C) {
    var O = typeof C == "string" && !i ? {} : C;
    if (typeof O == "string")
      p += "".concat(O, `
`);
    else if (O._keyframe)
      b(O);
    else {
      var T = d.reduce(function(N, x) {
        var L;
        return (x == null || (L = x.visit) === null || L === void 0 ? void 0 : L.call(x, N)) || N;
      }, O);
      Object.keys(T).forEach(function(N) {
        var x = T[N];
        if (Be(x) === "object" && x && (N !== "animationName" || !x._keyframe) && !tC(x)) {
          var L = !1, R = N.trim(), _ = !1;
          (i || o) && s ? R.startsWith("@") ? L = !0 : R = rC(N, s, u) : i && !s && (R === "&" || R === "") && (R = "", _ = !0);
          var P = e(x, r, {
            root: _,
            injectHash: L,
            parentSelectors: [].concat(Ee(a), [R])
          }), I = G(P, 2), A = I[0], D = I[1];
          g = W(W({}, g), D), p += "".concat(R).concat(A);
        } else {
          let ie = function(ce, F) {
            process.env.NODE_ENV !== "production" && (Be(x) !== "object" || !(x != null && x[fm])) && [Yw, Xw].concat(Ee(m)).forEach(function(Y) {
              return Y(ce, F, {
                path: l,
                hashId: s,
                parentSelectors: a
              });
            });
            var H = ce.replace(/[A-Z]/g, function(Y) {
              return "-".concat(Y.toLowerCase());
            }), j = F;
            !rm[ce] && typeof j == "number" && j !== 0 && (j = "".concat(j, "px")), ce === "animationName" && F !== null && F !== void 0 && F._keyframe && (b(F), j = F.getName(s)), p += "".concat(H, ":").concat(j, ";");
          };
          var B, Q = (B = x?.value) !== null && B !== void 0 ? B : x;
          Be(x) === "object" && x !== null && x !== void 0 && x[dm] && Array.isArray(Q) ? Q.forEach(function(ce) {
            ie(N, ce);
          }) : ie(N, Q);
        }
      });
    }
  }), !i)
    p = "{".concat(p, "}");
  else if (c && gw()) {
    var w = c.split(","), S = w[w.length - 1].trim();
    p = "@layer ".concat(S, " {").concat(p, "}"), w.length > 1 && (p = "@layer ".concat(c, "{%%%:%}").concat(p));
  }
  return [p, g];
};
function iC(e, t) {
  return _u("".concat(e.join("%")).concat(t));
}
function oC() {
  return null;
}
function il(e, t) {
  var r = e.token, n = e.path, i = e.hashId, o = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = v.useContext(xu), f = u.autoClear, d = u.mock, h = u.defaultCache, m = u.hashPriority, p = u.container, g = u.ssrInline, b = u.transformers, y = u.linters, E = u.cache, w = r._tokenKey, S = [w].concat(Ee(n)), C = Hd;
  process.env.NODE_ENV !== "production" && d !== void 0 && (C = d === "client");
  var O = tm(
    "style",
    S,
    // Create cache if needed
    function() {
      var R = S.join("|");
      if (Zw(R)) {
        var _ = eC(R), P = G(_, 2), I = P[0], A = P[1];
        if (I)
          return [I, w, A, {}, s, l];
      }
      var D = t(), B = nC(D, {
        hashId: i,
        hashPriority: m,
        layer: o,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), Q = G(B, 2), ie = Q[0], ce = Q[1], F = Bd(ie), H = iC(S, F);
      return [F, w, H, ce, s, l];
    },
    // Remove cache if no need
    function(R, _) {
      var P = G(R, 3), I = P[2];
      (_ || f) && Hd && Pa(I, {
        mark: On
      });
    },
    // Effect: Inject style here
    function(R) {
      var _ = G(R, 4), P = _[0];
      _[1];
      var I = _[2], A = _[3];
      if (C && P !== lm) {
        var D = {
          mark: On,
          prepend: "queue",
          attachTo: p,
          priority: l
        }, B = typeof a == "function" ? a() : a;
        B && (D.csp = {
          nonce: B
        });
        var Q = ao(P, I, D);
        Q[ni] = E.instanceId, Q.setAttribute(Xc, w), process.env.NODE_ENV !== "production" && Q.setAttribute(sw, S.join("|")), Object.keys(A).forEach(function(ie) {
          ao(Bd(A[ie]), "_effect-".concat(ie), D);
        });
      }
    }
  ), T = G(O, 3), N = T[0], x = T[1], L = T[2];
  return function(R) {
    var _;
    if (!g || C || !h)
      _ = /* @__PURE__ */ v.createElement(oC, null);
    else {
      var P;
      _ = /* @__PURE__ */ v.createElement("style", Je({}, (P = {}, be(P, Xc, x), be(P, On, L), P), {
        dangerouslySetInnerHTML: {
          __html: N
        }
      }));
    }
    return /* @__PURE__ */ v.createElement(v.Fragment, null, _, R);
  };
}
var Lt = /* @__PURE__ */ function() {
  function e(t, r) {
    yr(this, e), be(this, "name", void 0), be(this, "style", void 0), be(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return br(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function qn(e) {
  return e.notSplit = !0, e;
}
qn(["borderTop", "borderBottom"]), qn(["borderTop"]), qn(["borderBottom"]), qn(["borderLeft", "borderRight"]), qn(["borderLeft"]), qn(["borderRight"]);
const aC = /* @__PURE__ */ po({}), Nu = aC;
function hm(e) {
  return Xp(e) || Hp(e) || Cu(e) || Jp();
}
function Rr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function vm(e, t, r, n) {
  if (!t.length)
    return r;
  var i = hm(t), o = i[0], a = i.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Ee(e) : s = W({}, e), n && r === void 0 && a.length === 1 ? delete s[o][a[0]] : s[o] = vm(s[o], a, r, n), s;
}
function Or(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Rr(e, t.slice(0, -1)) ? e : vm(e, t, r, n);
}
function sC(e) {
  return Be(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Wd(e) {
  return Array.isArray(e) ? [] : {};
}
var cC = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ii() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Wd(t[0]);
  return t.forEach(function(i) {
    function o(a, s) {
      var c = new Set(s), l = Rr(i, a), u = Array.isArray(l);
      if (u || sC(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = Rr(n, a);
          u ? n = Or(n, a, []) : (!f || Be(f) !== "object") && (n = Or(n, a, Wd(l))), cC(l).forEach(function(d) {
            o([].concat(Ee(a), [d]), c);
          });
        }
      } else
        n = Or(n, a, l);
    }
    o([]);
  }), n;
}
function lC() {
}
let pm = lC;
process.env.NODE_ENV !== "production" && (pm = (e, t, r) => {
  ke(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Ip();
});
const ur = pm, uC = /* @__PURE__ */ po(void 0), fC = {
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
var dC = {
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
const hC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, mm = hC, vC = {
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
  }, dC),
  timePickerLocale: Object.assign({}, mm)
}, Ud = vC, or = "${label} is not a valid ${type}", pC = {
  locale: "en",
  Pagination: fC,
  DatePicker: Ud,
  TimePicker: mm,
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
        string: or,
        method: or,
        array: or,
        object: or,
        number: or,
        date: or,
        boolean: or,
        integer: or,
        float: or,
        regexp: or,
        email: or,
        url: or,
        hex: or
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
}, yi = pC;
Object.assign({}, yi.Modal);
let fa = [];
const qd = () => fa.reduce((e, t) => Object.assign(Object.assign({}, e), t), yi.Modal);
function mC(e) {
  if (e) {
    const t = Object.assign({}, e);
    return fa.push(t), qd(), () => {
      fa = fa.filter((r) => r !== t), qd();
    };
  }
  Object.assign({}, yi.Modal);
}
const gC = /* @__PURE__ */ po(void 0), Mu = gC, yC = (e, t) => {
  const r = v.useContext(Mu), n = v.useMemo(() => {
    var o;
    const a = t || yi[e], s = (o = r?.[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), i = v.useMemo(() => {
    const o = r?.locale;
    return r?.exist && !o ? yi.locale : o;
  }, [r]);
  return [n, i];
}, bC = yC, gm = "internalMark", ym = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ur(n === gm, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), v.useEffect(() => mC(t && t.Modal), [t]);
  const i = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(Mu.Provider, {
    value: i
  }, r);
};
process.env.NODE_ENV !== "production" && (ym.displayName = "LocaleProvider");
const EC = ym, SC = "5.8.0";
function Wt(e, t) {
  wC(e) && (e = "100%");
  var r = CC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ko(e) {
  return Math.min(1, Math.max(0, e));
}
function wC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function CC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function bm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Lo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function yn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function OC(e, t, r) {
  return {
    r: Wt(e, 255) * 255,
    g: Wt(t, 255) * 255,
    b: Wt(r, 255) * 255
  };
}
function Qd(e, t, r) {
  e = Wt(e, 255), t = Wt(t, 255), r = Wt(r, 255);
  var n = Math.max(e, t, r), i = Math.min(e, t, r), o = 0, a = 0, s = (n + i) / 2;
  if (n === i)
    a = 0, o = 0;
  else {
    var c = n - i;
    switch (a = s > 0.5 ? c / (2 - n - i) : c / (n + i), n) {
      case e:
        o = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / c + 2;
        break;
      case r:
        o = (e - t) / c + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l: s };
}
function qs(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function _C(e, t, r) {
  var n, i, o;
  if (e = Wt(e, 360), t = Wt(t, 100), r = Wt(r, 100), t === 0)
    i = r, o = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = qs(s, a, e + 1 / 3), i = qs(s, a, e), o = qs(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: i * 255, b: o * 255 };
}
function ol(e, t, r) {
  e = Wt(e, 255), t = Wt(t, 255), r = Wt(r, 255);
  var n = Math.max(e, t, r), i = Math.min(e, t, r), o = 0, a = n, s = n - i, c = n === 0 ? 0 : s / n;
  if (n === i)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: c, v: a };
}
function xC(e, t, r) {
  e = Wt(e, 360) * 6, t = Wt(t, 100), r = Wt(r, 100);
  var n = Math.floor(e), i = e - n, o = r * (1 - t), a = r * (1 - i * t), s = r * (1 - (1 - i) * t), c = n % 6, l = [r, a, o, o, s, r][c], u = [s, r, r, a, o, o][c], f = [o, o, s, r, r, a][c];
  return { r: l * 255, g: u * 255, b: f * 255 };
}
function al(e, t, r, n) {
  var i = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(r).toString(16))
  ];
  return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function RC(e, t, r, n, i) {
  var o = [
    yn(Math.round(e).toString(16)),
    yn(Math.round(t).toString(16)),
    yn(Math.round(r).toString(16)),
    yn(PC(n))
  ];
  return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function PC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Gd(e) {
  return sr(e) / 255;
}
function sr(e) {
  return parseInt(e, 16);
}
function TC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var sl = {
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
function ei(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, i = null, o = null, a = !1, s = !1;
  return typeof e == "string" && (e = IC(e)), typeof e == "object" && (zr(e.r) && zr(e.g) && zr(e.b) ? (t = OC(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : zr(e.h) && zr(e.s) && zr(e.v) ? (n = Lo(e.s), i = Lo(e.v), t = xC(e.h, n, i), a = !0, s = "hsv") : zr(e.h) && zr(e.s) && zr(e.l) && (n = Lo(e.s), o = Lo(e.l), t = _C(e.h, n, o), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = bm(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var NC = "[-\\+]?\\d+%?", MC = "[-\\+]?\\d*\\.\\d+%?", nn = "(?:".concat(MC, ")|(?:").concat(NC, ")"), Qs = "[\\s|\\(]+(".concat(nn, ")[,|\\s]+(").concat(nn, ")[,|\\s]+(").concat(nn, ")\\s*\\)?"), Gs = "[\\s|\\(]+(".concat(nn, ")[,|\\s]+(").concat(nn, ")[,|\\s]+(").concat(nn, ")[,|\\s]+(").concat(nn, ")\\s*\\)?"), Cr = {
  CSS_UNIT: new RegExp(nn),
  rgb: new RegExp("rgb" + Qs),
  rgba: new RegExp("rgba" + Gs),
  hsl: new RegExp("hsl" + Qs),
  hsla: new RegExp("hsla" + Gs),
  hsv: new RegExp("hsv" + Qs),
  hsva: new RegExp("hsva" + Gs),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function IC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (sl[e])
    e = sl[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Cr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Cr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Cr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Cr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Cr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Cr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Cr.hex8.exec(e), r ? {
    r: sr(r[1]),
    g: sr(r[2]),
    b: sr(r[3]),
    a: Gd(r[4]),
    format: t ? "name" : "hex8"
  } : (r = Cr.hex6.exec(e), r ? {
    r: sr(r[1]),
    g: sr(r[2]),
    b: sr(r[3]),
    format: t ? "name" : "hex"
  } : (r = Cr.hex4.exec(e), r ? {
    r: sr(r[1] + r[1]),
    g: sr(r[2] + r[2]),
    b: sr(r[3] + r[3]),
    a: Gd(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = Cr.hex3.exec(e), r ? {
    r: sr(r[1] + r[1]),
    g: sr(r[2] + r[2]),
    b: sr(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function zr(e) {
  return !!Cr.CSS_UNIT.exec(String(e));
}
var zt = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = TC(t)), this.originalInput = t;
      var i = ei(t);
      this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, i, o = t.r / 255, a = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? i = s / 12.92 : i = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = bm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ol(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ol(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), i = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Qd(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Qd(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), i = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), al(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), RC(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Wt(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(Wt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + al(this.r, this.g, this.b, !1), r = 0, n = Object.entries(sl); r < n.length; r++) {
        var i = n[r], o = i[0], a = i[1];
        if (t === a)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, i = this.a < 1 && this.a >= 0, o = !r && i && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = ko(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = ko(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = ko(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = ko(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), i = new e(t).toRgb(), o = r / 100, a = {
        r: (i.r - n.r) * o + n.r,
        g: (i.g - n.g) * o + n.g,
        b: (i.b - n.b) * o + n.b,
        a: (i.a - n.a) * o + n.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), i = 360 / r, o = [this];
      for (n.h = (n.h - (i * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + i) % 360, o.push(new e(n));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, i = r.s, o = r.v, a = [], s = 1 / t; t--; )
        a.push(new e({ h: n, s: i, v: o })), o = (o + s) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), i = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / i,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / i,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, i = [this], o = 360 / t, a = 1; a < t; a++)
        i.push(new e({ h: (n + a * o) % 360, s: r.s, l: r.l }));
      return i;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), jo = 2, Kd = 0.16, DC = 0.05, AC = 0.05, FC = 0.15, Em = 5, Sm = 4, $C = [{
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
  var t = e.r, r = e.g, n = e.b, i = ol(t, r, n);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v
  };
}
function Vo(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(al(t, r, n, !1));
}
function kC(e, t, r) {
  var n = r / 100, i = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return i;
}
function Xd(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - jo * t : Math.round(e.h) + jo * t : n = r ? Math.round(e.h) + jo * t : Math.round(e.h) - jo * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Jd(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Kd * t : t === Sm ? n = e.s + Kd : n = e.s + DC * t, n > 1 && (n = 1), r && t === Em && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Zd(e, t, r) {
  var n;
  return r ? n = e.v + AC * t : n = e.v - FC * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Mn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = ei(e), i = Em; i > 0; i -= 1) {
    var o = Yd(n), a = Vo(ei({
      h: Xd(o, i, !0),
      s: Jd(o, i, !0),
      v: Zd(o, i, !0)
    }));
    r.push(a);
  }
  r.push(Vo(n));
  for (var s = 1; s <= Sm; s += 1) {
    var c = Yd(n), l = Vo(ei({
      h: Xd(c, s),
      s: Jd(c, s),
      v: Zd(c, s)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? $C.map(function(u) {
    var f = u.index, d = u.opacity, h = Vo(kC(ei(t.backgroundColor || "#141414"), ei(r[f]), d * 100));
    return h;
  }) : r;
}
var Ks = {
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
}, da = {}, Ys = {};
Object.keys(Ks).forEach(function(e) {
  da[e] = Mn(Ks[e]), da[e].primary = da[e][5], Ys[e] = Mn(Ks[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ys[e].primary = Ys[e][5];
});
var LC = da.blue;
const jC = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, VC = jC;
function zC(e) {
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
const wm = {
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
}, HC = Object.assign(Object.assign({}, wm), {
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
}), ss = HC;
function BC(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: i,
    colorWarning: o,
    colorError: a,
    colorInfo: s,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: u
  } = e, f = r(c), d = r(i), h = r(o), m = r(a), p = r(s), g = n(l, u), b = e.colorLink || e.colorInfo, y = r(b);
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
    colorBgMask: new zt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const WC = (e) => {
  let t = e, r = e, n = e, i = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? i = 4 : e >= 8 && (i = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: i
  };
}, UC = WC;
function qC(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: i
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: i + 1
  }, UC(n));
}
const Hr = (e, t) => new zt(e).setAlpha(t).toRgbString(), zi = (e, t) => new zt(e).darken(t).toHexString(), QC = (e) => {
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
}, GC = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Hr(n, 0.88),
    colorTextSecondary: Hr(n, 0.65),
    colorTextTertiary: Hr(n, 0.45),
    colorTextQuaternary: Hr(n, 0.25),
    colorFill: Hr(n, 0.15),
    colorFillSecondary: Hr(n, 0.06),
    colorFillTertiary: Hr(n, 0.04),
    colorFillQuaternary: Hr(n, 0.02),
    colorBgLayout: zi(r, 4),
    colorBgContainer: zi(r, 0),
    colorBgElevated: zi(r, 0),
    colorBgSpotlight: Hr(n, 0.85),
    colorBorder: zi(r, 15),
    colorBorderSecondary: zi(r, 6)
  };
};
function KC(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const i = n - 1, o = e * Math.pow(2.71828, i / 5), a = n > 1 ? Math.floor(o) : Math.ceil(o);
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
const YC = (e) => {
  const t = KC(e), r = t.map((i) => i.size), n = t.map((i) => i.lineHeight);
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
}, XC = YC;
function JC(e) {
  const t = Object.keys(wm).map((r) => {
    const n = Mn(e[r]);
    return new Array(10).fill(1).reduce((i, o, a) => (i[`${r}-${a + 1}`] = n[a], i[`${r}${a + 1}`] = n[a], i), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), BC(e, {
    generateColorPalettes: QC,
    generateNeutralColorPalettes: GC
  })), XC(e.fontSize)), zC(e)), VC(e)), qC(e));
}
const Cm = Zc(JC), Om = {
  token: ss,
  hashed: !0
}, _m = /* @__PURE__ */ Te.createContext(Om);
function Xs(e) {
  return e >= 0 && e <= 255;
}
function zo(e, t) {
  const {
    r,
    g: n,
    b: i,
    a: o
  } = new zt(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new zt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((r - a * (1 - l)) / l), f = Math.round((n - s * (1 - l)) / l), d = Math.round((i - c * (1 - l)) / l);
    if (Xs(u) && Xs(f) && Xs(d))
      return new zt({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new zt({
    r,
    g: n,
    b: i,
    a: 1
  }).toRgbString();
}
var ZC = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function e2(e) {
  const {
    override: t
  } = e, r = ZC(e, ["override"]), n = Object.assign({}, t);
  Object.keys(ss).forEach((d) => {
    delete n[d];
  });
  const i = Object.assign(Object.assign({}, r), n), o = 480, a = 576, s = 768, c = 992, l = 1200, u = 1600;
  if (i.motion === !1) {
    const d = "0s";
    i.motionDurationFast = d, i.motionDurationMid = d, i.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, i), {
    // ============== Background ============== //
    colorFillContent: i.colorFillSecondary,
    colorFillContentHover: i.colorFill,
    colorFillAlter: i.colorFillQuaternary,
    colorBgContainerDisabled: i.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: i.colorBgContainer,
    colorSplit: zo(i.colorBorderSecondary, i.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: i.colorTextQuaternary,
    colorTextDisabled: i.colorTextQuaternary,
    colorTextHeading: i.colorText,
    colorTextLabel: i.colorTextSecondary,
    colorTextDescription: i.colorTextTertiary,
    colorTextLightSolid: i.colorWhite,
    colorHighlight: i.colorError,
    colorBgTextHover: i.colorFillSecondary,
    colorBgTextActive: i.colorFill,
    colorIcon: i.colorTextTertiary,
    colorIconHover: i.colorText,
    colorErrorOutline: zo(i.colorErrorBg, i.colorBgContainer),
    colorWarningOutline: zo(i.colorWarningBg, i.colorBgContainer),
    // Font
    fontSizeIcon: i.fontSizeSM,
    // Line
    lineWidthFocus: i.lineWidth * 4,
    // Control
    lineWidth: i.lineWidth,
    controlOutlineWidth: i.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: i.controlHeight / 2,
    controlItemBgHover: i.colorFillTertiary,
    controlItemBgActive: i.colorPrimaryBg,
    controlItemBgActiveHover: i.colorPrimaryBgHover,
    controlItemBgActiveDisabled: i.colorFill,
    controlTmpOutline: i.colorFillQuaternary,
    controlOutline: zo(i.colorPrimaryBg, i.colorBgContainer),
    lineType: i.lineType,
    borderRadius: i.borderRadius,
    borderRadiusXS: i.borderRadiusXS,
    borderRadiusSM: i.borderRadiusSM,
    borderRadiusLG: i.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: i.sizeXXS,
    paddingXS: i.sizeXS,
    paddingSM: i.sizeSM,
    padding: i.size,
    paddingMD: i.sizeMD,
    paddingLG: i.sizeLG,
    paddingXL: i.sizeXL,
    paddingContentHorizontalLG: i.sizeLG,
    paddingContentVerticalLG: i.sizeMS,
    paddingContentHorizontal: i.sizeMS,
    paddingContentVertical: i.sizeSM,
    paddingContentHorizontalSM: i.size,
    paddingContentVerticalSM: i.sizeXS,
    marginXXS: i.sizeXXS,
    marginXS: i.sizeXS,
    marginSM: i.sizeSM,
    margin: i.size,
    marginMD: i.sizeMD,
    marginLG: i.sizeLG,
    marginXL: i.sizeXL,
    marginXXL: i.sizeXXL,
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
    screenXS: o,
    screenXSMin: o,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new zt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new zt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new zt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const xm = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: i
  } = t, o = eh(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: i
  });
  return a = e2(a), o && Object.entries(o).forEach((s) => {
    let [c, l] = s;
    const {
      theme: u
    } = l, f = eh(l, ["theme"]);
    let d = f;
    u && (d = xm(Object.assign(Object.assign({}, a), f), {
      override: f
    }, u)), a[c] = d;
  }), a;
};
function Fn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = Te.useContext(_m), i = `${SC}-${t || ""}`, o = r || Cm, [a, s] = Iw(o, [ss, e], {
    salt: i,
    override: Object.assign({
      override: e
    }, n),
    getComputedToken: xm
  });
  return [o, a, t ? s : ""];
}
function xr(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function ui(e) {
  var t = v.useRef(!1), r = v.useState(e), n = G(r, 2), i = n[0], o = n[1];
  v.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, c) {
    c && t.current || o(s);
  }
  return [i, a];
}
function Js(e) {
  return e !== void 0;
}
function Na(e, t) {
  var r = t || {}, n = r.defaultValue, i = r.value, o = r.onChange, a = r.postState, s = ui(function() {
    return Js(i) ? i : Js(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = G(s, 2), l = c[0], u = c[1], f = i !== void 0 ? i : l, d = a ? a(f) : f, h = xr(o), m = ui([f]), p = G(m, 2), g = p[0], b = p[1];
  kd(function() {
    var E = g[0];
    l !== E && h(l, E);
  }, [g]), kd(function() {
    Js(i) || u(i);
  }, [i]);
  var y = xr(function(E, w) {
    u(E, w), b([f], w);
  });
  return [d, y];
}
const Iu = "anticon", t2 = (e, t) => t || (e ? `ant-${e}` : "ant"), rr = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: t2,
  iconPrefixCls: Iu
}), cl = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, cs = (e) => ({
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
}), Du = () => ({
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
}), r2 = (e) => ({
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
}), n2 = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, i = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [i]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [i]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, i2 = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), o2 = (e) => ({
  "&:focus-visible": Object.assign({}, i2(e))
}), Rm = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ll = !0;
function Zt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Rm)
    return Object.assign.apply(Object, [{}].concat(t));
  ll = !1;
  const n = {};
  return t.forEach((i) => {
    Object.keys(i).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => i[a]
      });
    });
  }), ll = !0, n;
}
function a2() {
}
function s2(e) {
  let t, r = e, n = a2;
  return Rm && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(i, o) {
      return ll && t.add(o), i[o];
    }
  }), n = (i, o) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function wo(e, t, r, n) {
  return (i) => {
    const [o, a, s] = Fn(), {
      getPrefixCls: c,
      iconPrefixCls: l,
      csp: u
    } = Qt(rr), f = c(), d = {
      theme: o,
      token: a,
      hashId: s,
      nonce: () => u?.nonce,
      clientOnly: n?.clientOnly,
      // antd is always at top of styles
      order: -999
    };
    return il(Object.assign(Object.assign({}, d), {
      clientOnly: !1,
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": r2(a)
    }]), [il(Object.assign(Object.assign({}, d), {
      path: [e, i, l]
    }), () => {
      const {
        token: h,
        flush: m
      } = s2(a), p = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: S
        } = n;
        S.forEach((C) => {
          let [O, T] = C;
          var N;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ke(!p?.[O], `The token '${String(O)}' of ${e} had deprecated, use '${String(T)}' instead.`), (p?.[O] || p?.[T]) && ((N = p[T]) !== null && N !== void 0 || (p[T] = p?.[O]));
        });
      }
      const g = typeof r == "function" ? r(Zt(h, p ?? {})) : r, b = Object.assign(Object.assign({}, g), p), y = `.${i}`, E = Zt(h, {
        componentCls: y,
        prefixCls: i,
        iconCls: `.${l}`,
        antCls: `.${f}`
      }, b), w = t(E, {
        hashId: s,
        prefixCls: i,
        rootPrefixCls: f,
        iconPrefixCls: l,
        overrideComponentToken: p
      });
      return m(e, b), [n?.resetStyle === !1 ? null : n2(a, i), w];
    }), s];
  };
}
const c2 = `-ant-${Date.now()}-${Math.random()}`;
function l2(e, t) {
  const r = {}, n = (a, s) => {
    let c = a.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, i = (a, s) => {
    const c = new zt(a), l = Mn(c.toRgbString());
    r[`${s}-color`] = n(c), r[`${s}-color-disabled`] = l[1], r[`${s}-color-hover`] = l[4], r[`${s}-color-active`] = l[6], r[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = l[0], r[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    i(t.primaryColor, "primary");
    const a = new zt(t.primaryColor), s = Mn(a.toRgbString());
    s.forEach((l, u) => {
      r[`primary-${u + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(a, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const c = new zt(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (l) => l.darken(2));
  }
  return t.successColor && i(t.successColor, "success"), t.warningColor && i(t.warningColor, "warning"), t.errorColor && i(t.errorColor, "error"), t.infoColor && i(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function u2(e, t) {
  const r = l2(e, t);
  Gt() ? ao(r, `${c2}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ur(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const ul = /* @__PURE__ */ v.createContext(!1), f2 = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = v.useContext(ul);
  return /* @__PURE__ */ v.createElement(ul.Provider, {
    value: r ?? n
  }, t);
}, Au = ul, fl = /* @__PURE__ */ v.createContext(void 0), d2 = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = v.useContext(fl);
  return /* @__PURE__ */ v.createElement(fl.Provider, {
    value: r || n
  }, t);
}, ls = fl;
function h2() {
  const e = Qt(Au), t = Qt(ls);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function v2(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? Om : t;
  return rs(() => {
    if (!e)
      return t;
    const i = Object.assign({}, n.components);
    return Object.keys(e.components || {}).forEach((o) => {
      i[o] = Object.assign(Object.assign({}, i[o]), e.components[o]);
    }), Object.assign(Object.assign(Object.assign({}, n), r), {
      token: Object.assign(Object.assign({}, n.token), r.token),
      components: i
    });
  }, [r, n], (i, o) => i.some((a, s) => {
    const c = o[s];
    return !qp(a, c, !0);
  }));
}
var p2 = ["children"], Pm = /* @__PURE__ */ v.createContext({});
function m2(e) {
  var t = e.children, r = Pt(e, p2);
  return /* @__PURE__ */ v.createElement(Pm.Provider, {
    value: r
  }, t);
}
var g2 = /* @__PURE__ */ function(e) {
  bo(r, e);
  var t = Eo(r);
  function r() {
    return yr(this, r), t.apply(this, arguments);
  }
  return br(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(v.Component), pn = "none", Ho = "appear", Bo = "enter", Wo = "leave", th = "none", _r = "prepare", oi = "start", ai = "active", Fu = "end", Tm = "prepared";
function rh(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function y2(e, t) {
  var r = {
    animationend: rh("Animation", "AnimationEnd"),
    transitionend: rh("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var b2 = y2(Gt(), typeof window < "u" ? window : {}), Nm = {};
if (Gt()) {
  var E2 = document.createElement("div");
  Nm = E2.style;
}
var Uo = {};
function Mm(e) {
  if (Uo[e])
    return Uo[e];
  var t = b2[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, i = 0; i < n; i += 1) {
      var o = r[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Nm)
        return Uo[e] = t[o], Uo[e];
    }
  return "";
}
var Im = Mm("animationend"), Dm = Mm("transitionend"), Am = !!(Im && Dm), nh = Im || "animationend", ih = Dm || "transitionend";
function oh(e, t) {
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
const S2 = function(e) {
  var t = Ae(), r = Ae(e);
  r.current = e;
  var n = v.useCallback(function(a) {
    r.current(a);
  }, []);
  function i(a) {
    a && (a.removeEventListener(ih, n), a.removeEventListener(nh, n));
  }
  function o(a) {
    t.current && t.current !== a && i(t.current), a && a !== t.current && (a.addEventListener(ih, n), a.addEventListener(nh, n), t.current = a);
  }
  return v.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [o, i];
};
var Fm = Gt() ? fv : Ht;
const w2 = function() {
  var e = v.useRef(null);
  function t() {
    Bt.cancel(e.current);
  }
  function r(n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Bt(function() {
      i <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, i - 1);
    });
    e.current = o;
  }
  return v.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var C2 = [_r, oi, ai, Fu], O2 = [_r, Tm], $m = !1, _2 = !0;
function km(e) {
  return e === ai || e === Fu;
}
const x2 = function(e, t, r) {
  var n = ui(th), i = G(n, 2), o = i[0], a = i[1], s = w2(), c = G(s, 2), l = c[0], u = c[1];
  function f() {
    a(_r, !0);
  }
  var d = t ? O2 : C2;
  return Fm(function() {
    if (o !== th && o !== Fu) {
      var h = d.indexOf(o), m = d[h + 1], p = r(o);
      p === $m ? a(m, !0) : m && l(function(g) {
        function b() {
          g.isCanceled() || a(m, !0);
        }
        p === !0 ? b() : Promise.resolve(p).then(b);
      });
    }
  }, [e, o]), v.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, o];
};
function R2(e, t, r, n) {
  var i = n.motionEnter, o = i === void 0 ? !0 : i, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, E = n.onEnterActive, w = n.onLeaveActive, S = n.onAppearEnd, C = n.onEnterEnd, O = n.onLeaveEnd, T = n.onVisibleChanged, N = ui(), x = G(N, 2), L = x[0], R = x[1], _ = ui(pn), P = G(_, 2), I = P[0], A = P[1], D = ui(null), B = G(D, 2), Q = B[0], ie = B[1], ce = Ae(!1), F = Ae(null);
  function H() {
    return r();
  }
  var j = Ae(!1);
  function Y() {
    A(pn, !0), ie(null, !0);
  }
  function M(ge) {
    var ne = H();
    if (!(ge && !ge.deadline && ge.target !== ne)) {
      var de = j.current, Ne;
      I === Ho && de ? Ne = S?.(ne, ge) : I === Bo && de ? Ne = C?.(ne, ge) : I === Wo && de && (Ne = O?.(ne, ge)), I !== pn && de && Ne !== !1 && Y();
    }
  }
  var q = S2(M), $ = G(q, 1), J = $[0], re = function(ne) {
    var de, Ne, Ie;
    switch (ne) {
      case Ho:
        return de = {}, be(de, _r, d), be(de, oi, p), be(de, ai, y), de;
      case Bo:
        return Ne = {}, be(Ne, _r, h), be(Ne, oi, g), be(Ne, ai, E), Ne;
      case Wo:
        return Ie = {}, be(Ie, _r, m), be(Ie, oi, b), be(Ie, ai, w), Ie;
      default:
        return {};
    }
  }, X = v.useMemo(function() {
    return re(I);
  }, [I]), k = x2(I, !e, function(ge) {
    if (ge === _r) {
      var ne = X[_r];
      return ne ? ne(H()) : $m;
    }
    if (te in X) {
      var de;
      ie(((de = X[te]) === null || de === void 0 ? void 0 : de.call(X, H(), null)) || null);
    }
    return te === ai && (J(H()), u > 0 && (clearTimeout(F.current), F.current = setTimeout(function() {
      M({
        deadline: !0
      });
    }, u))), te === Tm && Y(), _2;
  }), ee = G(k, 2), z = ee[0], te = ee[1], fe = km(te);
  j.current = fe, Fm(function() {
    R(t);
    var ge = ce.current;
    ce.current = !0;
    var ne;
    !ge && t && s && (ne = Ho), ge && t && o && (ne = Bo), (ge && !t && l || !ge && f && !t && l) && (ne = Wo);
    var de = re(ne);
    ne && (e || de[_r]) ? (A(ne), z()) : A(pn);
  }, [t]), Ht(function() {
    // Cancel appear
    (I === Ho && !s || // Cancel enter
    I === Bo && !o || // Cancel leave
    I === Wo && !l) && A(pn);
  }, [s, o, l]), Ht(function() {
    return function() {
      ce.current = !1, clearTimeout(F.current);
    };
  }, []);
  var se = v.useRef(!1);
  Ht(function() {
    L && (se.current = !0), L !== void 0 && I === pn && ((se.current || L) && T?.(L), se.current = !0);
  }, [L, I]);
  var he = Q;
  return X[_r] && te === oi && (he = W({
    transition: "none"
  }, he)), [I, te, he, L ?? t];
}
function P2(e) {
  var t = e;
  Be(e) === "object" && (t = e.transitionSupport);
  function r(i, o) {
    return !!(i.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ v.forwardRef(function(i, o) {
    var a = i.visible, s = a === void 0 ? !0 : a, c = i.removeOnLeave, l = c === void 0 ? !0 : c, u = i.forceRender, f = i.children, d = i.motionName, h = i.leavedClassName, m = i.eventProps, p = v.useContext(Pm), g = p.motion, b = r(i, g), y = Ae(), E = Ae();
    function w() {
      try {
        return y.current instanceof HTMLElement ? y.current : _a(E.current);
      } catch {
        return null;
      }
    }
    var S = R2(b, s, w, i), C = G(S, 4), O = C[0], T = C[1], N = C[2], x = C[3], L = v.useRef(x);
    x && (L.current = !0);
    var R = v.useCallback(function(ie) {
      y.current = ie, Eu(o, ie);
    }, [o]), _, P = W(W({}, m), {}, {
      visible: s
    });
    if (!f)
      _ = null;
    else if (O === pn)
      x ? _ = f(W({}, P), R) : !l && L.current && h ? _ = f(W(W({}, P), {}, {
        className: h
      }), R) : u || !l && !h ? _ = f(W(W({}, P), {}, {
        style: {
          display: "none"
        }
      }), R) : _ = null;
    else {
      var I, A;
      T === _r ? A = "prepare" : km(T) ? A = "active" : T === oi && (A = "start");
      var D = oh(d, "".concat(O, "-").concat(A));
      _ = f(W(W({}, P), {}, {
        className: Me(oh(d, O), (I = {}, be(I, D, D && A), be(I, d, typeof d == "string"), I)),
        style: N
      }), R);
    }
    if (/* @__PURE__ */ v.isValidElement(_) && So(_)) {
      var B = _, Q = B.ref;
      Q || (_ = /* @__PURE__ */ v.cloneElement(_, {
        ref: R
      }));
    }
    return /* @__PURE__ */ v.createElement(g2, {
      ref: E
    }, _);
  });
  return n.displayName = "CSSMotion", n;
}
const Co = P2(Am);
var dl = "add", hl = "keep", vl = "remove", Zs = "removed";
function T2(e) {
  var t;
  return e && Be(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, W(W({}, t), {}, {
    key: String(t.key)
  });
}
function pl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(T2);
}
function N2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, i = t.length, o = pl(e), a = pl(t);
  o.forEach(function(l) {
    for (var u = !1, f = n; f < i; f += 1) {
      var d = a[f];
      if (d.key === l.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(h) {
          return W(W({}, h), {}, {
            status: dl
          });
        })), n = f), r.push(W(W({}, d), {}, {
          status: hl
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(W(W({}, l), {}, {
      status: vl
    }));
  }), n < i && (r = r.concat(a.slice(n).map(function(l) {
    return W(W({}, l), {}, {
      status: dl
    });
  })));
  var s = {};
  r.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    r = r.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== l || d !== vl;
    }), r.forEach(function(u) {
      u.key === l && (u.status = hl);
    });
  }), r;
}
var M2 = ["component", "children", "onVisibleChanged", "onAllRemoved"], I2 = ["status"], D2 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function A2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Co, r = /* @__PURE__ */ function(n) {
    bo(o, n);
    var i = Eo(o);
    function o() {
      var a;
      yr(this, o);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return a = i.call.apply(i, [this].concat(c)), be(Ca(a), "state", {
        keyEntities: []
      }), be(Ca(a), "removeKey", function(u) {
        var f = a.state.keyEntities, d = f.map(function(h) {
          return h.key !== u ? h : W(W({}, h), {}, {
            status: Zs
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(h) {
          var m = h.status;
          return m !== Zs;
        }).length;
      }), a;
    }
    return br(o, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged, h = l.onAllRemoved, m = Pt(l, M2), p = u || v.Fragment, g = {};
        return D2.forEach(function(b) {
          g[b] = m[b], delete m[b];
        }), delete m.keys, /* @__PURE__ */ v.createElement(p, m, c.map(function(b) {
          var y = b.status, E = Pt(b, I2), w = y === dl || y === hl;
          return /* @__PURE__ */ v.createElement(t, Je({}, g, {
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
        var l = s.keys, u = c.keyEntities, f = pl(l), d = N2(u, f);
        return {
          keyEntities: d.filter(function(h) {
            var m = u.find(function(p) {
              var g = p.key;
              return h.key === g;
            });
            return !(m && m.status === Zs && h.status === vl);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), o;
  }(v.Component);
  return be(r, "defaultProps", {
    component: "div"
  }), r;
}
const F2 = A2(Am);
function $2(e) {
  const {
    children: t
  } = e, [, r] = Fn(), {
    motion: n
  } = r, i = v.useRef(!1);
  return i.current = i.current || n === !1, i.current ? /* @__PURE__ */ v.createElement(m2, {
    motion: n
  }, t) : t;
}
const k2 = (e, t) => {
  const [r, n] = Fn();
  return il({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Du()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, L2 = k2;
var j2 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
let ml = !1;
const V2 = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && ur(!ml, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), z2 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], H2 = "ant";
let Ma, Lm, jm;
function ha() {
  return Ma || H2;
}
function B2() {
  return Lm || Iu;
}
function W2(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const U2 = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (Ma = t), r !== void 0 && (Lm = r), n && (W2(n) ? (process.env.NODE_ENV !== "production" && ur(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), u2(ha(), n)) : jm = n);
}, Vm = () => ({
  getPrefixCls: (e, t) => t || (e ? `${ha()}-${e}` : ha()),
  getIconPrefixCls: B2,
  getRootPrefixCls: () => Ma || ha(),
  getTheme: () => jm
}), q2 = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: i,
    anchor: o,
    form: a,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    virtual: f,
    dropdownMatchSelectWidth: d,
    popupMatchSelectWidth: h,
    popupOverflow: m,
    legacyLocale: p,
    parentContext: g,
    iconPrefixCls: b,
    theme: y,
    componentDisabled: E,
    segmented: w,
    statistic: S,
    spin: C,
    calendar: O,
    carousel: T,
    cascader: N,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: P,
    drawer: I,
    skeleton: A,
    steps: D,
    image: B,
    layout: Q,
    list: ie,
    mentions: ce,
    modal: F,
    progress: H,
    result: j,
    slider: Y,
    breadcrumb: M,
    menu: q,
    pagination: $,
    input: J,
    empty: re,
    badge: X,
    radio: k,
    rate: ee,
    switch: z,
    transfer: te,
    avatar: fe,
    message: se,
    tag: he,
    table: ge,
    card: ne,
    tabs: de,
    timeline: Ne,
    timePicker: Ie,
    upload: oe,
    notification: pe,
    tree: Ze,
    colorPicker: it,
    datePicker: et,
    wave: We
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ur(d === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const Ue = v.useCallback((xe, ze) => {
    const {
      prefixCls: lt
    } = e;
    if (ze)
      return ze;
    const ht = lt || g.getPrefixCls("");
    return xe ? `${ht}-${xe}` : ht;
  }, [g.getPrefixCls, e.prefixCls]), ot = b || g.iconPrefixCls || Iu, Kt = ot !== g.iconPrefixCls, tt = r || g.csp, ve = L2(ot, tt), Se = v2(y, g.theme);
  process.env.NODE_ENV !== "production" && (ml = ml || !!Se);
  const Ve = {
    csp: tt,
    autoInsertSpaceInButton: n,
    alert: i,
    anchor: o,
    locale: s || p,
    direction: l,
    space: u,
    virtual: f,
    popupMatchSelectWidth: h ?? d,
    popupOverflow: m,
    getPrefixCls: Ue,
    iconPrefixCls: ot,
    theme: Se,
    segmented: w,
    statistic: S,
    spin: C,
    calendar: O,
    carousel: T,
    cascader: N,
    collapse: x,
    typography: L,
    checkbox: R,
    descriptions: _,
    divider: P,
    drawer: I,
    skeleton: A,
    steps: D,
    image: B,
    input: J,
    layout: Q,
    list: ie,
    mentions: ce,
    modal: F,
    progress: H,
    result: j,
    slider: Y,
    breadcrumb: M,
    menu: q,
    pagination: $,
    empty: re,
    badge: X,
    radio: k,
    rate: ee,
    switch: z,
    transfer: te,
    avatar: fe,
    message: se,
    tag: he,
    table: ge,
    card: ne,
    tabs: de,
    timeline: Ne,
    timePicker: Ie,
    upload: oe,
    notification: pe,
    tree: Ze,
    colorPicker: it,
    datePicker: et,
    wave: We
  }, vt = Object.assign({}, g);
  Object.keys(Ve).forEach((xe) => {
    Ve[xe] !== void 0 && (vt[xe] = Ve[xe]);
  }), z2.forEach((xe) => {
    const ze = e[xe];
    ze && (vt[xe] = ze);
  });
  const Fe = rs(() => vt, vt, (xe, ze) => {
    const lt = Object.keys(xe), ht = Object.keys(ze);
    return lt.length !== ht.length || lt.some((we) => xe[we] !== ze[we]);
  }), qe = v.useMemo(() => ({
    prefixCls: ot,
    csp: tt
  }), [ot, tt]);
  let Oe = Kt ? ve(t) : t;
  const ct = v.useMemo(() => {
    var xe, ze, lt, ht;
    return ii(((xe = yi.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((lt = (ze = Fe.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || lt === void 0 ? void 0 : lt.defaultValidateMessages) || {}, ((ht = Fe.form) === null || ht === void 0 ? void 0 : ht.validateMessages) || {}, a?.validateMessages || {});
  }, [Fe, a?.validateMessages]);
  Object.keys(ct).length > 0 && (Oe = /* @__PURE__ */ v.createElement(uC.Provider, {
    value: ct
  }, t)), s && (Oe = /* @__PURE__ */ v.createElement(EC, {
    locale: s,
    _ANT_MARK__: gm
  }, Oe)), (ot || tt) && (Oe = /* @__PURE__ */ v.createElement(Nu.Provider, {
    value: qe
  }, Oe)), c && (Oe = /* @__PURE__ */ v.createElement(d2, {
    size: c
  }, Oe)), Oe = /* @__PURE__ */ v.createElement($2, null, Oe);
  const _t = v.useMemo(() => {
    const xe = Se || {}, {
      algorithm: ze,
      token: lt,
      components: ht
    } = xe, we = j2(xe, ["algorithm", "token", "components"]), K = ze && (!Array.isArray(ze) || ze.length > 0) ? Zc(ze) : Cm, ae = {};
    return Object.entries(ht || {}).forEach((ue) => {
      let [ye, $e] = ue;
      const Re = Object.assign({}, $e);
      "algorithm" in Re && (Re.algorithm === !0 ? Re.theme = K : (Array.isArray(Re.algorithm) || typeof Re.algorithm == "function") && (Re.theme = Zc(Re.algorithm)), delete Re.algorithm), ae[ye] = Re;
    }), Object.assign(Object.assign({}, we), {
      theme: K,
      token: Object.assign(Object.assign({}, ss), lt),
      components: ae
    });
  }, [Se]);
  return y && (Oe = /* @__PURE__ */ v.createElement(_m.Provider, {
    value: _t
  }, Oe)), E !== void 0 && (Oe = /* @__PURE__ */ v.createElement(f2, {
    disabled: E
  }, Oe)), /* @__PURE__ */ v.createElement(rr.Provider, {
    value: Fe
  }, Oe);
}, $n = (e) => {
  const t = v.useContext(rr), r = v.useContext(Mu);
  return /* @__PURE__ */ v.createElement(q2, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
$n.ConfigContext = rr;
$n.SizeContext = ls;
$n.config = U2;
$n.useConfig = h2;
Object.defineProperty($n, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ur(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ls)
});
process.env.NODE_ENV !== "production" && ($n.displayName = "ConfigProvider");
const $u = $n;
var zm = {};
Object.defineProperty(zm, "__esModule", { value: !0 });
var Q2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, G2 = zm.default = Q2, Nr = {};
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
Nr.call = Lu;
var Hm = Nr.default = void 0;
Nr.note = Um;
Nr.noteOnce = Qm;
Nr.preMessage = void 0;
Nr.resetWarned = qm;
Nr.warning = Wm;
Nr.warningOnce = Oo;
var gl = {}, ku = [], Bm = function(t) {
  ku.push(t);
};
Nr.preMessage = Bm;
function Wm(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ku.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Um(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ku.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function qm() {
  gl = {};
}
function Lu(e, t, r) {
  !t && !gl[r] && (e(!1, r), gl[r] = !0);
}
function Oo(e, t) {
  Lu(Wm, e, t);
}
function Qm(e, t) {
  Lu(Um, e, t);
}
Oo.preMessage = Bm;
Oo.resetWarned = qm;
Oo.noteOnce = Qm;
var K2 = Oo;
Hm = Nr.default = K2;
var _o = {}, Gm = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Gm);
var Y2 = Gm.exports, ju = {};
Object.defineProperty(ju, "__esModule", {
  value: !0
});
ju.default = X2;
function X2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Vu = {};
Object.defineProperty(Vu, "__esModule", {
  value: !0
});
Vu.default = J2;
function J2(e, t) {
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
var Km = Y2.default;
Object.defineProperty(_o, "__esModule", {
  value: !0
});
_o.clearContainerCache = aO;
_o.injectCSS = zu;
_o.removeCSS = iO;
var Z2 = _o.updateCSS = sO, eO = Km(ju), tO = Km(Vu), ah = "data-rc-order", sh = "data-rc-priority", rO = "rc-util-key", Ia = /* @__PURE__ */ new Map();
function Ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : rO;
}
function us(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function nO(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Xm(e) {
  return Array.from((Ia.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function zu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!(0, eO.default)())
    return null;
  var r = t.csp, n = t.prepend, i = t.priority, o = i === void 0 ? 0 : i, a = nO(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(ah, a), s && o && c.setAttribute(sh, "".concat(o)), r != null && r.nonce && (c.nonce = r?.nonce), c.innerHTML = e;
  var l = us(t), u = l.firstChild;
  if (n) {
    if (s) {
      var f = Xm(l).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(ah)))
          return !1;
        var h = Number(d.getAttribute(sh) || 0);
        return o >= h;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Jm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = us(t);
  return Xm(r).find(function(n) {
    return n.getAttribute(Ym(t)) === e;
  });
}
function iO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Jm(e, t);
  if (r) {
    var n = us(t);
    n.removeChild(r);
  }
}
function oO(e, t) {
  var r = Ia.get(e);
  if (!r || !(0, tO.default)(document, r)) {
    var n = zu("", t), i = n.parentNode;
    Ia.set(e, i), e.removeChild(n);
  }
}
function aO() {
  Ia.clear();
}
function sO(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = us(r);
  oO(n, r);
  var i = Jm(t, r);
  if (i) {
    var o, a;
    if ((o = r.csp) !== null && o !== void 0 && o.nonce && i.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      i.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = zu(e, r);
  return c.setAttribute(Ym(r), t), c;
}
var Hu = {};
Object.defineProperty(Hu, "__esModule", {
  value: !0
});
var cO = Hu.getShadowRoot = lO;
Hu.inShadow = eg;
function Zm(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function eg(e) {
  return Zm(e) !== e?.ownerDocument;
}
function lO(e) {
  return eg(e) ? Zm(e) : null;
}
function uO(e, t) {
  Hm(e, `[@ant-design/icons] ${t}`);
}
function ch(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function lh(e = {}) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        t[r] = n;
    }
    return t;
  }, {});
}
function yl(e, t, r) {
  return r ? Te.createElement(e.tag, {
    key: t,
    ...lh(e.attrs),
    ...r
  }, (e.children || []).map((n, i) => yl(n, `${t}-${e.tag}-${i}`))) : Te.createElement(e.tag, {
    key: t,
    ...lh(e.attrs)
  }, (e.children || []).map((n, i) => yl(n, `${t}-${e.tag}-${i}`)));
}
function tg(e) {
  return Mn(e)[0];
}
function rg(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
const fO = `
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
`, dO = (e) => {
  const { csp: t, prefixCls: r } = Qt(Nu);
  let n = fO;
  r && (n = n.replace(/anticon/g, r)), Ht(() => {
    const i = e.current, o = cO(i);
    Z2(n, "@ant-design-icons", {
      prepend: !0,
      csp: t,
      attachTo: o
    });
  }, []);
}, Yi = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function hO({ primaryColor: e, secondaryColor: t }) {
  Yi.primaryColor = e, Yi.secondaryColor = t || tg(e), Yi.calculated = !!t;
}
function vO() {
  return {
    ...Yi
  };
}
const fs = (e) => {
  const { icon: t, className: r, onClick: n, style: i, primaryColor: o, secondaryColor: a, ...s } = e, c = v.useRef();
  let l = Yi;
  if (o && (l = {
    primaryColor: o,
    secondaryColor: a || tg(o)
  }), dO(c), uO(ch(t), `icon should be icon definiton, but got ${t}`), !ch(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), yl(u.icon, `svg-${u.name}`, {
    className: r,
    onClick: n,
    style: i,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: c
  });
};
fs.displayName = "IconReact";
fs.getTwoToneColors = vO;
fs.setTwoToneColors = hO;
const Bu = fs;
function ng(e) {
  const [t, r] = rg(e);
  return Bu.setTwoToneColors({
    primaryColor: t,
    secondaryColor: r
  });
}
function pO() {
  const e = Bu.getTwoToneColors();
  return e.calculated ? [
    e.primaryColor,
    e.secondaryColor
  ] : e.primaryColor;
}
ng(LC.primary);
const ds = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: r,
    // affect inner <svg>...</svg>
    icon: n,
    spin: i,
    rotate: o,
    tabIndex: a,
    onClick: s,
    // other
    twoToneColor: c,
    ...l
  } = e, { prefixCls: u = "anticon", rootClassName: f } = v.useContext(Nu), d = Me(f, u, {
    [`${u}-${n.name}`]: !!n.name,
    [`${u}-spin`]: !!i || n.name === "loading"
  }, r);
  let h = a;
  h === void 0 && s && (h = -1);
  const m = o ? {
    msTransform: `rotate(${o}deg)`,
    transform: `rotate(${o}deg)`
  } : void 0, [p, g] = rg(c);
  return /* @__PURE__ */ v.createElement("span", {
    role: "img",
    "aria-label": n.name,
    ...l,
    ref: t,
    tabIndex: h,
    onClick: s,
    className: d
  }, /* @__PURE__ */ v.createElement(Bu, {
    icon: n,
    primaryColor: p,
    secondaryColor: g,
    style: m
  }));
});
ds.displayName = "AntdIcon";
ds.getTwoToneColor = pO;
ds.setTwoToneColor = ng;
const Kr = ds, ig = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: G2
});
process.env.NODE_ENV !== "production" && (ig.displayName = "CheckCircleFilled");
const mO = /* @__PURE__ */ v.forwardRef(ig);
var og = {};
Object.defineProperty(og, "__esModule", { value: !0 });
var gO = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, yO = og.default = gO;
const ag = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: yO
});
process.env.NODE_ENV !== "production" && (ag.displayName = "CloseCircleFilled");
const sg = /* @__PURE__ */ v.forwardRef(ag);
var cg = {};
Object.defineProperty(cg, "__esModule", { value: !0 });
var bO = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, EO = cg.default = bO;
const lg = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: EO
});
process.env.NODE_ENV !== "production" && (lg.displayName = "CloseOutlined");
const ug = /* @__PURE__ */ v.forwardRef(lg);
var fg = {};
Object.defineProperty(fg, "__esModule", { value: !0 });
var SO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, wO = fg.default = SO;
const dg = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: wO
});
process.env.NODE_ENV !== "production" && (dg.displayName = "ExclamationCircleFilled");
const CO = /* @__PURE__ */ v.forwardRef(dg);
var hg = {};
Object.defineProperty(hg, "__esModule", { value: !0 });
var OO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, _O = hg.default = OO;
const vg = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: _O
});
process.env.NODE_ENV !== "production" && (vg.displayName = "InfoCircleFilled");
const xO = /* @__PURE__ */ v.forwardRef(vg);
var RO = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, PO = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, TO = "".concat(RO, " ").concat(PO).split(/[\s\n]+/), NO = "aria-", MO = "data-";
function uh(e, t) {
  return e.indexOf(t) === 0;
}
function Da(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = W({}, t);
  var n = {};
  return Object.keys(e).forEach(function(i) {
    // Aria
    (r.aria && (i === "role" || uh(i, NO)) || // Data
    r.data && uh(i, MO) || // Attr
    r.attr && TO.includes(i)) && (n[i] = e[i]);
  }), n;
}
const {
  isValidElement: pg
} = v;
function IO(e) {
  return e && pg(e) && e.type === v.Fragment;
}
function DO(e, t, r) {
  return pg(e) ? /* @__PURE__ */ v.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function mg(e, t) {
  return DO(e, e, t);
}
var Z = {
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
    r >= Z.F1 && r <= Z.F12)
      return !1;
    switch (r) {
      case Z.ALT:
      case Z.CAPS_LOCK:
      case Z.CONTEXT_MENU:
      case Z.CTRL:
      case Z.DOWN:
      case Z.END:
      case Z.ESC:
      case Z.HOME:
      case Z.INSERT:
      case Z.LEFT:
      case Z.MAC_FF_META:
      case Z.META:
      case Z.NUMLOCK:
      case Z.NUM_CENTER:
      case Z.PAGE_DOWN:
      case Z.PAGE_UP:
      case Z.PAUSE:
      case Z.PRINT_SCREEN:
      case Z.RIGHT:
      case Z.SHIFT:
      case Z.UP:
      case Z.WIN_KEY:
      case Z.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Z.ZERO && t <= Z.NINE || t >= Z.NUM_ZERO && t <= Z.NUM_MULTIPLY || t >= Z.A && t <= Z.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Z.SPACE:
      case Z.QUESTION_MARK:
      case Z.NUM_PLUS:
      case Z.NUM_MINUS:
      case Z.NUM_PERIOD:
      case Z.NUM_DIVISION:
      case Z.SEMICOLON:
      case Z.DASH:
      case Z.EQUALS:
      case Z.COMMA:
      case Z.PERIOD:
      case Z.SLASH:
      case Z.APOSTROPHE:
      case Z.SINGLE_QUOTE:
      case Z.OPEN_SQUARE_BRACKET:
      case Z.BACKSLASH:
      case Z.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, gg = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, i = e.className, o = e.duration, a = o === void 0 ? 4.5 : o, s = e.eventKey, c = e.content, l = e.closable, u = e.closeIcon, f = u === void 0 ? "x" : u, d = e.props, h = e.onClick, m = e.onNoticeClose, p = e.times, g = v.useState(!1), b = G(g, 2), y = b[0], E = b[1], w = function() {
    m(s);
  }, S = function(T) {
    (T.key === "Enter" || T.code === "Enter" || T.keyCode === Z.ENTER) && w();
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
  return /* @__PURE__ */ v.createElement("div", Je({}, d, {
    ref: t,
    className: Me(C, i, be({}, "".concat(C, "-closable"), l)),
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
  }, c), l && /* @__PURE__ */ v.createElement("a", {
    tabIndex: 0,
    className: "".concat(C, "-close"),
    onKeyDown: S,
    onClick: function(T) {
      T.preventDefault(), T.stopPropagation(), w();
    }
  }, f));
}), yg = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, i = e.container, o = e.motion, a = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, u = v.useState([]), f = G(u, 2), d = f[0], h = f[1], m = function(O) {
    var T, N = d.find(function(x) {
      return x.key === O;
    });
    N == null || (T = N.onClose) === null || T === void 0 || T.call(N), h(function(x) {
      return x.filter(function(L) {
        return L.key !== O;
      });
    });
  };
  v.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        h(function(T) {
          var N = Ee(T), x = N.findIndex(function(_) {
            return _.key === O.key;
          }), L = W({}, O);
          if (x >= 0) {
            var R;
            L.times = (((R = T[x]) === null || R === void 0 ? void 0 : R.times) || 0) + 1, N[x] = L;
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
  var p = v.useState({}), g = G(p, 2), b = g[0], y = g[1];
  v.useEffect(function() {
    var C = {};
    d.forEach(function(O) {
      var T = O.placement, N = T === void 0 ? "topRight" : T;
      N && (C[N] = C[N] || [], C[N].push(O));
    }), Object.keys(b).forEach(function(O) {
      C[O] = C[O] || [];
    }), y(C);
  }, [d]);
  var E = function(O) {
    y(function(T) {
      var N = W({}, T), x = N[O] || [];
      return x.length || delete N[O], N;
    });
  }, w = v.useRef(!1);
  if (v.useEffect(function() {
    Object.keys(b).length > 0 ? w.current = !0 : w.current && (l?.(), w.current = !1);
  }, [b]), !i)
    return null;
  var S = Object.keys(b);
  return /* @__PURE__ */ Ul(/* @__PURE__ */ v.createElement(v.Fragment, null, S.map(function(C) {
    var O = b[C], T = O.map(function(x) {
      return {
        config: x,
        key: x.key
      };
    }), N = typeof o == "function" ? o(C) : o;
    return /* @__PURE__ */ v.createElement(F2, Je({
      key: C,
      className: Me(n, "".concat(n, "-").concat(C), s?.(C)),
      style: c?.(C),
      keys: T,
      motionAppear: !0
    }, N, {
      onAllRemoved: function() {
        E(C);
      }
    }), function(x, L) {
      var R = x.config, _ = x.className, P = x.style, I = R.key, A = R.times, D = R.className, B = R.style;
      return /* @__PURE__ */ v.createElement(gg, Je({}, R, {
        ref: L,
        prefixCls: n,
        className: Me(_, D),
        style: W(W({}, P), B),
        times: A,
        key: I,
        eventKey: I,
        onNoticeClose: m
      }));
    });
  })), i);
});
process.env.NODE_ENV !== "production" && (yg.displayName = "Notifications");
var AO = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], FO = function() {
  return document.body;
}, fh = 0;
function $O() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(i) {
    i && Object.keys(i).forEach(function(o) {
      var a = i[o];
      a !== void 0 && (e[o] = a);
    });
  }), e;
}
function kO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? FO : t, n = e.motion, i = e.prefixCls, o = e.maxCount, a = e.className, s = e.style, c = e.onAllRemoved, l = Pt(e, AO), u = v.useState(), f = G(u, 2), d = f[0], h = f[1], m = v.useRef(), p = /* @__PURE__ */ v.createElement(yg, {
    container: d,
    ref: m,
    prefixCls: i,
    motion: n,
    maxCount: o,
    className: a,
    style: s,
    onAllRemoved: c
  }), g = v.useState([]), b = G(g, 2), y = b[0], E = b[1], w = v.useMemo(function() {
    return {
      open: function(C) {
        var O = $O(l, C);
        (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(fh), fh += 1), E(function(T) {
          return [].concat(Ee(T), [{
            type: "open",
            config: O
          }]);
        });
      },
      close: function(C) {
        E(function(O) {
          return [].concat(Ee(O), [{
            type: "close",
            key: C
          }]);
        });
      },
      destroy: function() {
        E(function(C) {
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
    m.current && y.length && (y.forEach(function(S) {
      switch (S.type) {
        case "open":
          m.current.open(S.config);
          break;
        case "close":
          m.current.close(S.key);
          break;
        case "destroy":
          m.current.destroy();
          break;
      }
    }), E(function(S) {
      return S.filter(function(C) {
        return !y.includes(C);
      });
    }));
  }, [y]), [w, p];
}
var bg = {};
Object.defineProperty(bg, "__esModule", { value: !0 });
var LO = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, jO = bg.default = LO;
const Eg = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: jO
});
process.env.NODE_ENV !== "production" && (Eg.displayName = "LoadingOutlined");
const Wu = /* @__PURE__ */ v.forwardRef(Eg), VO = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    boxShadow: n,
    colorText: i,
    colorSuccess: o,
    colorError: a,
    colorWarning: s,
    colorInfo: c,
    fontSizeLG: l,
    motionEaseInOutCirc: u,
    motionDurationSlow: f,
    marginXS: d,
    paddingXS: h,
    borderRadiusLG: m,
    zIndexPopup: p,
    // Custom token
    contentPadding: g,
    contentBg: b
  } = e, y = `${t}-notice`, E = new Lt("MessageMoveIn", {
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
  }), w = new Lt("MessageMoveOut", {
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
  }), S = {
    padding: h,
    textAlign: "center",
    [`${t}-custom-content > ${r}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: d,
      fontSize: l
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
      color: o
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
      [t]: Object.assign(Object.assign({}, cs(e)), {
        color: i,
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
          animationTimingFunction: u
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
          animationTimingFunction: u
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
        [y]: Object.assign({}, S)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, S), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, Sg = wo("Message", (e) => {
  const t = Zt(e, {
    height: 150
  });
  return [VO(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), {
  clientOnly: !0
});
var zO = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const HO = {
  info: /* @__PURE__ */ v.createElement(xO, null),
  success: /* @__PURE__ */ v.createElement(mO, null),
  error: /* @__PURE__ */ v.createElement(sg, null),
  warning: /* @__PURE__ */ v.createElement(CO, null),
  loading: /* @__PURE__ */ v.createElement(Wu, null)
}, wg = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: i
  } = e;
  return /* @__PURE__ */ v.createElement("div", {
    className: Me(`${t}-custom-content`, `${t}-${r}`)
  }, n || HO[r], /* @__PURE__ */ v.createElement("span", null, i));
}, BO = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: i,
    content: o
  } = e, a = zO(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = v.useContext(rr), c = t || s("message"), [, l] = Sg(c);
  return /* @__PURE__ */ v.createElement(gg, Object.assign({}, a, {
    prefixCls: c,
    className: Me(r, l, `${c}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ v.createElement(wg, {
      prefixCls: c,
      type: n,
      icon: i
    }, o)
  }));
}, WO = BO;
function UO(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Uu(e) {
  let t;
  const r = new Promise((i) => {
    t = e(() => {
      i(!0);
    });
  }), n = () => {
    t?.();
  };
  return n.then = (i, o) => r.then(i, o), n.promise = r, n;
}
var qO = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const QO = 8, GO = 3, KO = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: i,
    maxCount: o,
    duration: a = GO,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: u,
    getPopupContainer: f,
    message: d
  } = v.useContext(rr), h = n || u("message"), [, m] = Sg(h), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? QO
  }), g = () => Me(m, {
    [`${h}-rtl`]: s
  }), b = () => UO(h, c), y = /* @__PURE__ */ v.createElement("span", {
    className: `${h}-close-x`
  }, /* @__PURE__ */ v.createElement(ug, {
    className: `${h}-close-icon`
  })), [E, w] = kO({
    prefixCls: h,
    style: p,
    className: g,
    motion: b,
    closable: !1,
    closeIcon: y,
    duration: a,
    getContainer: () => i?.() || f?.() || document.body,
    maxCount: o,
    onAllRemoved: l
  });
  return v.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: h,
    hashId: m,
    message: d
  })), w;
});
let dh = 0;
function Cg(e) {
  const t = v.useRef(null);
  return [v.useMemo(() => {
    const n = (c) => {
      var l;
      (l = t.current) === null || l === void 0 || l.close(c);
    }, i = (c) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && ur(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const O = () => {
        };
        return O.then = () => {
        }, O;
      }
      const {
        open: l,
        prefixCls: u,
        hashId: f,
        message: d
      } = t.current, h = `${u}-notice`, {
        content: m,
        icon: p,
        type: g,
        key: b,
        className: y,
        style: E,
        onClose: w
      } = c, S = qO(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let C = b;
      return C == null && (dh += 1, C = `antd-message-${dh}`), Uu((O) => (l(Object.assign(Object.assign({}, S), {
        key: C,
        content: /* @__PURE__ */ v.createElement(wg, {
          prefixCls: u,
          type: g,
          icon: p
        }, m),
        placement: "top",
        className: Me(g && `${h}-${g}`, f, y, d?.className),
        style: Object.assign(Object.assign({}, d?.style), E),
        onClose: () => {
          w?.(), O();
        }
      })), () => {
        n(C);
      }));
    }, a = {
      open: i,
      destroy: (c) => {
        var l;
        c !== void 0 ? n(c) : (l = t.current) === null || l === void 0 || l.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const l = (u, f, d) => {
        let h;
        u && typeof u == "object" && "content" in u ? h = u : h = {
          content: u
        };
        let m, p;
        typeof f == "function" ? p = f : (m = f, p = d);
        const g = Object.assign(Object.assign({
          onClose: p,
          duration: m
        }, h), {
          type: c
        });
        return i(g);
      };
      a[c] = l;
    }), a;
  }, []), /* @__PURE__ */ v.createElement(KO, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function YO(e) {
  return Cg(e);
}
function fr() {
  fr = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function(R, _, P) {
    R[_] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
  function c(R, _, P) {
    return Object.defineProperty(R, _, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[_];
  }
  try {
    c({}, "");
  } catch {
    c = function(P, I, A) {
      return P[I] = A;
    };
  }
  function l(R, _, P, I) {
    var A = _ && _.prototype instanceof d ? _ : d, D = Object.create(A.prototype), B = new N(I || []);
    return n(D, "_invoke", {
      value: S(R, P, B)
    }), D;
  }
  function u(R, _, P) {
    try {
      return {
        type: "normal",
        arg: R.call(_, P)
      };
    } catch (I) {
      return {
        type: "throw",
        arg: I
      };
    }
  }
  e.wrap = l;
  var f = {};
  function d() {
  }
  function h() {
  }
  function m() {
  }
  var p = {};
  c(p, o, function() {
    return this;
  });
  var g = Object.getPrototypeOf, b = g && g(g(x([])));
  b && b !== t && r.call(b, o) && (p = b);
  var y = m.prototype = d.prototype = Object.create(p);
  function E(R) {
    ["next", "throw", "return"].forEach(function(_) {
      c(R, _, function(P) {
        return this._invoke(_, P);
      });
    });
  }
  function w(R, _) {
    function P(A, D, B, Q) {
      var ie = u(R[A], R, D);
      if (ie.type !== "throw") {
        var ce = ie.arg, F = ce.value;
        return F && Be(F) == "object" && r.call(F, "__await") ? _.resolve(F.__await).then(function(H) {
          P("next", H, B, Q);
        }, function(H) {
          P("throw", H, B, Q);
        }) : _.resolve(F).then(function(H) {
          ce.value = H, B(ce);
        }, function(H) {
          return P("throw", H, B, Q);
        });
      }
      Q(ie.arg);
    }
    var I;
    n(this, "_invoke", {
      value: function(D, B) {
        function Q() {
          return new _(function(ie, ce) {
            P(D, B, ie, ce);
          });
        }
        return I = I ? I.then(Q, Q) : Q();
      }
    });
  }
  function S(R, _, P) {
    var I = "suspendedStart";
    return function(A, D) {
      if (I === "executing")
        throw new Error("Generator is already running");
      if (I === "completed") {
        if (A === "throw")
          throw D;
        return L();
      }
      for (P.method = A, P.arg = D; ; ) {
        var B = P.delegate;
        if (B) {
          var Q = C(B, P);
          if (Q) {
            if (Q === f)
              continue;
            return Q;
          }
        }
        if (P.method === "next")
          P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (I === "suspendedStart")
            throw I = "completed", P.arg;
          P.dispatchException(P.arg);
        } else
          P.method === "return" && P.abrupt("return", P.arg);
        I = "executing";
        var ie = u(R, _, P);
        if (ie.type === "normal") {
          if (I = P.done ? "completed" : "suspendedYield", ie.arg === f)
            continue;
          return {
            value: ie.arg,
            done: P.done
          };
        }
        ie.type === "throw" && (I = "completed", P.method = "throw", P.arg = ie.arg);
      }
    };
  }
  function C(R, _) {
    var P = _.method, I = R.iterator[P];
    if (I === void 0)
      return _.delegate = null, P === "throw" && R.iterator.return && (_.method = "return", _.arg = void 0, C(R, _), _.method === "throw") || P !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + P + "' method")), f;
    var A = u(I, R.iterator, _.arg);
    if (A.type === "throw")
      return _.method = "throw", _.arg = A.arg, _.delegate = null, f;
    var D = A.arg;
    return D ? D.done ? (_[R.resultName] = D.value, _.next = R.nextLoc, _.method !== "return" && (_.method = "next", _.arg = void 0), _.delegate = null, f) : D : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, f);
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
  function N(R) {
    this.tryEntries = [{
      tryLoc: "root"
    }], R.forEach(O, this), this.reset(!0);
  }
  function x(R) {
    if (R) {
      var _ = R[o];
      if (_)
        return _.call(R);
      if (typeof R.next == "function")
        return R;
      if (!isNaN(R.length)) {
        var P = -1, I = function A() {
          for (; ++P < R.length; )
            if (r.call(R, P))
              return A.value = R[P], A.done = !1, A;
          return A.value = void 0, A.done = !0, A;
        };
        return I.next = I;
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
  }, E(w.prototype), c(w.prototype, a, function() {
    return this;
  }), e.AsyncIterator = w, e.async = function(R, _, P, I, A) {
    A === void 0 && (A = Promise);
    var D = new w(l(R, _, P, I), A);
    return e.isGeneratorFunction(_) ? D : D.next().then(function(B) {
      return B.done ? B.value : D.next();
    });
  }, E(y), c(y, s, "Generator"), c(y, o, function() {
    return this;
  }), c(y, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(R) {
    var _ = Object(R), P = [];
    for (var I in _)
      P.push(I);
    return P.reverse(), function A() {
      for (; P.length; ) {
        var D = P.pop();
        if (D in _)
          return A.value = D, A.done = !1, A;
      }
      return A.done = !0, A;
    };
  }, e.values = x, N.prototype = {
    constructor: N,
    reset: function(_) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !_)
        for (var P in this)
          P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = void 0);
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
      var P = this;
      function I(ce, F) {
        return B.type = "throw", B.arg = _, P.next = ce, F && (P.method = "next", P.arg = void 0), !!F;
      }
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var D = this.tryEntries[A], B = D.completion;
        if (D.tryLoc === "root")
          return I("end");
        if (D.tryLoc <= this.prev) {
          var Q = r.call(D, "catchLoc"), ie = r.call(D, "finallyLoc");
          if (Q && ie) {
            if (this.prev < D.catchLoc)
              return I(D.catchLoc, !0);
            if (this.prev < D.finallyLoc)
              return I(D.finallyLoc);
          } else if (Q) {
            if (this.prev < D.catchLoc)
              return I(D.catchLoc, !0);
          } else {
            if (!ie)
              throw new Error("try statement without catch or finally");
            if (this.prev < D.finallyLoc)
              return I(D.finallyLoc);
          }
        }
      }
    },
    abrupt: function(_, P) {
      for (var I = this.tryEntries.length - 1; I >= 0; --I) {
        var A = this.tryEntries[I];
        if (A.tryLoc <= this.prev && r.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
          var D = A;
          break;
        }
      }
      D && (_ === "break" || _ === "continue") && D.tryLoc <= P && P <= D.finallyLoc && (D = null);
      var B = D ? D.completion : {};
      return B.type = _, B.arg = P, D ? (this.method = "next", this.next = D.finallyLoc, f) : this.complete(B);
    },
    complete: function(_, P) {
      if (_.type === "throw")
        throw _.arg;
      return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && P && (this.next = P), f;
    },
    finish: function(_) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var I = this.tryEntries[P];
        if (I.finallyLoc === _)
          return this.complete(I.completion, I.afterLoc), T(I), f;
      }
    },
    catch: function(_) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var I = this.tryEntries[P];
        if (I.tryLoc === _) {
          var A = I.completion;
          if (A.type === "throw") {
            var D = A.arg;
            T(I);
          }
          return D;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(_, P, I) {
      return this.delegate = {
        iterator: x(_),
        resultName: P,
        nextLoc: I
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e;
}
function hh(e, t, r, n, i, o, a) {
  try {
    var s = e[o](a), c = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(n, i);
}
function Ri(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, i) {
      var o = e.apply(t, r);
      function a(c) {
        hh(o, n, i, a, s, "next", c);
      }
      function s(c) {
        hh(o, n, i, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var xo = W({}, q0), XO = xo.version, JO = xo.render, ZO = xo.unmountComponentAtNode, hs;
try {
  var e_ = Number((XO || "").split(".")[0]);
  e_ >= 18 && (hs = xo.createRoot);
} catch {
}
function vh(e) {
  var t = xo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Be(t) === "object" && (t.usingClientEntryPoint = e);
}
var Aa = "__rc_react_root__";
function t_(e, t) {
  vh(!0);
  var r = t[Aa] || hs(t);
  vh(!1), r.render(e), t[Aa] = r;
}
function r_(e, t) {
  JO(e, t);
}
function Og(e, t) {
  if (hs) {
    t_(e, t);
    return;
  }
  r_(e, t);
}
function n_(e) {
  return bl.apply(this, arguments);
}
function bl() {
  return bl = Ri(/* @__PURE__ */ fr().mark(function e(t) {
    return fr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var i;
              (i = t[Aa]) === null || i === void 0 || i.unmount(), delete t[Aa];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), bl.apply(this, arguments);
}
function i_(e) {
  ZO(e);
}
function o_(e) {
  return El.apply(this, arguments);
}
function El() {
  return El = Ri(/* @__PURE__ */ fr().mark(function e(t) {
    return fr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (hs === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", n_(t));
          case 2:
            i_(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), El.apply(this, arguments);
}
const _g = function(e) {
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
      var i = e.getBoundingClientRect(), o = i.width, a = i.height;
      if (o || a)
        return !0;
    }
  }
  return !1;
}, a_ = (e) => {
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
}, s_ = wo("Wave", (e) => [a_(e)]);
function c_(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ec(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && c_(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function l_(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return ec(t) ? t : ec(r) ? r : ec(n) ? n : null;
}
function tc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const u_ = (e) => {
  const {
    className: t,
    target: r
  } = e, n = v.useRef(null), [i, o] = v.useState(null), [a, s] = v.useState([]), [c, l] = v.useState(0), [u, f] = v.useState(0), [d, h] = v.useState(0), [m, p] = v.useState(0), [g, b] = v.useState(!1), y = {
    left: c,
    top: u,
    width: d,
    height: m,
    borderRadius: a.map((w) => `${w}px`).join(" ")
  };
  i && (y["--wave-color"] = i);
  function E() {
    const w = getComputedStyle(r);
    o(l_(r));
    const S = w.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: O
    } = w;
    l(S ? r.offsetLeft : tc(-parseFloat(C))), f(S ? r.offsetTop : tc(-parseFloat(O))), h(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: T,
      borderTopRightRadius: N,
      borderBottomLeftRadius: x,
      borderBottomRightRadius: L
    } = w;
    s([T, N, L, x].map((R) => tc(parseFloat(R))));
  }
  return v.useEffect(() => {
    if (r) {
      const w = Bt(() => {
        E(), b(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver(E), S.observe(r)), () => {
        Bt.cancel(w), S?.disconnect();
      };
    }
  }, []), g ? /* @__PURE__ */ v.createElement(Co, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, S) => {
      var C;
      if (S.deadline || S.propertyName === "opacity") {
        const O = (C = n.current) === null || C === void 0 ? void 0 : C.parentElement;
        o_(O).then(() => {
          O?.remove();
        });
      }
      return !1;
    }
  }, (w) => {
    let {
      className: S
    } = w;
    return /* @__PURE__ */ v.createElement("div", {
      ref: n,
      className: Me(t, S),
      style: y
    });
  }) : null;
}, f_ = (e, t) => {
  let {
    className: r
  } = t;
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e?.insertBefore(n, e?.firstChild), Og(/* @__PURE__ */ v.createElement(u_, {
    target: e,
    className: r
  }), n);
}, d_ = f_;
function h_(e, t, r) {
  const {
    wave: n
  } = v.useContext(rr), [, i] = Fn();
  return xr((a) => {
    const s = e.current;
    if (n?.disabled || !s)
      return;
    const {
      showEffect: c
    } = n || {};
    (c || d_)(s, {
      className: t,
      token: i,
      component: r,
      event: a
    });
  });
}
const xg = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: i
  } = Qt(rr), o = Ae(null), a = i("wave"), [, s] = s_(a), c = h_(o, Me(a, s), n);
  if (Te.useEffect(() => {
    const u = o.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      d.target.tagName === "INPUT" || !_g(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ Te.isValidElement(t))
    return t ?? null;
  const l = So(t) ? _i(t.ref, o) : o;
  return mg(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (xg.displayName = "Wave");
const v_ = xg, p_ = (e) => {
  const t = Te.useContext(ls);
  return Te.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Rg = p_;
globalThis && globalThis.__rest;
const m_ = /* @__PURE__ */ v.createContext(null), Pg = (e, t) => {
  const r = v.useContext(m_), n = v.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: i,
      isFirstItem: o,
      isLastItem: a
    } = r, s = i === "vertical" ? "-vertical-" : "-";
    return Me(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r?.compactSize,
    compactDirection: r?.compactDirection,
    compactItemClassnames: n
  };
}, g_ = /* @__PURE__ */ Bl((e, t) => {
  const {
    className: r,
    style: n,
    children: i,
    prefixCls: o
  } = e, a = Me(`${o}-icon`, r);
  return /* @__PURE__ */ Te.createElement("span", {
    ref: t,
    className: a,
    style: n
  }, i);
}), Tg = g_, ph = /* @__PURE__ */ Bl((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: i,
    iconClassName: o
  } = e;
  const a = Me(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Te.createElement(Tg, {
    prefixCls: r,
    className: a,
    style: i,
    ref: t
  }, /* @__PURE__ */ Te.createElement(Wu, {
    className: o
  }));
}), rc = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), nc = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), y_ = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: i,
    style: o
  } = e, a = !!r;
  return n ? /* @__PURE__ */ Te.createElement(ph, {
    prefixCls: t,
    className: i,
    style: o
  }) : /* @__PURE__ */ Te.createElement(Co, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    removeOnLeave: !0,
    onAppearStart: rc,
    onAppearActive: nc,
    onEnterStart: rc,
    onEnterActive: nc,
    onLeaveStart: nc,
    onLeaveActive: rc
  }, (s, c) => {
    let {
      className: l,
      style: u
    } = s;
    return /* @__PURE__ */ Te.createElement(ph, {
      prefixCls: t,
      className: i,
      style: Object.assign(Object.assign({}, o), u),
      ref: c,
      iconClassName: l
    });
  });
}, b_ = y_;
var E_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const Ng = /* @__PURE__ */ v.createContext(void 0), S_ = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = v.useContext(rr), {
    prefixCls: n,
    size: i,
    className: o
  } = e, a = E_(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , c] = Fn();
  let l = "";
  switch (i) {
    case "large":
      l = "lg";
      break;
    case "small":
      l = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      process.env.NODE_ENV !== "production" && ur(!i, "Button.Group", "Invalid prop `size`.");
  }
  const u = Me(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: r === "rtl"
  }, o, c);
  return /* @__PURE__ */ v.createElement(Ng.Provider, {
    value: i
  }, /* @__PURE__ */ v.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, w_ = S_, mh = /^[\u4e00-\u9fa5]{2}$/, Sl = mh.test.bind(mh);
function C_(e) {
  return typeof e == "string";
}
function qo(e) {
  return e === "text" || e === "link";
}
function O_(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && C_(e.type) && Sl(e.props.children) ? mg(e, {
    children: e.props.children.split("").join(r)
  }) : typeof e == "string" ? Sl(e) ? /* @__PURE__ */ Te.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Te.createElement("span", null, e) : IO(e) ? /* @__PURE__ */ Te.createElement("span", null, e) : e;
}
function __(e, t) {
  let r = !1;
  const n = [];
  return Te.Children.forEach(e, (i) => {
    const o = typeof i, a = o === "string" || o === "number";
    if (r && a) {
      const s = n.length - 1, c = n[s];
      n[s] = `${c}${i}`;
    } else
      n.push(i);
    r = a;
  }), Te.Children.map(n, (i) => O_(i, t));
}
function x_(e, t, r) {
  const {
    focusElCls: n,
    focus: i,
    borderElCls: o
  } = r, a = o ? "> *" : "", s = ["hover", i ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${a}`).join(",");
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
function R_(e, t, r) {
  const {
    borderElCls: n
  } = r, i = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Mg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, x_(e, n, t)), R_(r, n, t))
  };
}
function P_(e, t) {
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
function T_(e, t) {
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
function N_(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, P_(e, t)), T_(e.componentCls, t))
  };
}
const gh = (e, t) => ({
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
}), M_ = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    colorPrimaryHover: i,
    colorErrorHover: o
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
      gh(`${t}-primary`, i),
      gh(`${t}-danger`, o)
    ]
  };
}, I_ = M_, D_ = (e) => {
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
      "&:not(:disabled)": Object.assign({}, o2(e)),
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
}, Gr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), A_ = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), F_ = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), $_ = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), lo = (e, t, r, n, i, o, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: r || void 0,
    boxShadow: "none"
  }, Gr(e, Object.assign({
    backgroundColor: "transparent"
  }, o), Object.assign({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: n || void 0,
      borderColor: i || void 0
    }
  })
}), qu = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, $_(e))
}), Ig = (e) => Object.assign({}, qu(e)), Fa = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Dg = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ig(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Gr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), lo(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Gr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), lo(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), qu(e))
}), k_ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ig(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Gr(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), lo(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Gr(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), lo(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), qu(e))
}), L_ = (e) => Object.assign(Object.assign({}, Dg(e)), {
  borderStyle: "dashed"
}), j_ = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Gr(e.componentCls, {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Fa(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Gr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Fa(e))
}), V_ = (e) => Object.assign(Object.assign(Object.assign({}, Gr(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Fa(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Fa(e)), Gr(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), z_ = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Dg(e),
    [`${t}-primary`]: k_(e),
    [`${t}-dashed`]: L_(e),
    [`${t}-link`]: j_(e),
    [`${t}-text`]: V_(e),
    [`${t}-ghost`]: lo(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Qu = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: i,
    lineHeight: o,
    lineWidth: a,
    borderRadius: s,
    buttonPaddingHorizontal: c,
    iconCls: l
  } = e, u = Math.max(0, (n - i * o) / 2 - a), f = c - a, d = `${r}-icon-only`;
  return [
    // Size
    {
      [`${r}${t}`]: {
        fontSize: i,
        height: n,
        padding: `${u}px ${f}px`,
        borderRadius: s,
        [`&${d}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [l]: {
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
      [`${r}${r}-circle${t}`]: A_(e)
    },
    {
      [`${r}${r}-round${t}`]: F_(e)
    }
  ];
}, H_ = (e) => Qu(e), B_ = (e) => {
  const t = Zt(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.fontSizeLG - 2
  });
  return Qu(t, `${e.componentCls}-sm`);
}, W_ = (e) => {
  const t = Zt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.fontSizeLG + 2
  });
  return Qu(t, `${e.componentCls}-lg`);
}, U_ = (e) => {
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
}, q_ = wo("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: r
  } = e, n = Zt(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: r,
    buttonIconOnlyFontSize: e.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
    // Shared
    D_(n),
    // Size
    B_(n),
    H_(n),
    W_(n),
    // Block
    U_(n),
    // Group (type, ghost, danger, loading)
    z_(n),
    // Button Group
    I_(n),
    // Space Compact
    Mg(e),
    N_(e)
  ];
});
var Q_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function G_(e) {
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
const K_ = (e, t) => {
  var r, n;
  const {
    loading: i = !1,
    prefixCls: o,
    type: a = "default",
    danger: s,
    shape: c = "default",
    size: l,
    styles: u,
    disabled: f,
    className: d,
    rootClassName: h,
    children: m,
    icon: p,
    ghost: g = !1,
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: E,
    style: w = {}
  } = e, S = Q_(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: C,
    autoInsertSpaceInButton: O,
    direction: T,
    button: N
  } = Qt(rr), x = C("btn", o), [L, R] = q_(x), _ = Qt(Au), P = f ?? _, I = Qt(Ng), A = fi(() => G_(i), [i]), [D, B] = lr(A.loading), [Q, ie] = lr(!1), F = _i(t, /* @__PURE__ */ W0()), H = B0.count(m) === 1 && !p && !qo(a);
  Ht(() => {
    let ne = null;
    A.delay > 0 ? ne = setTimeout(() => {
      ne = null, B(!0);
    }, A.delay) : B(A.loading);
    function de() {
      ne && (clearTimeout(ne), ne = null);
    }
    return de;
  }, [A]), Ht(() => {
    if (!F || !F.current || O === !1)
      return;
    const ne = F.current.textContent;
    H && Sl(ne) ? Q || ie(!0) : Q && ie(!1);
  }, [F]);
  const j = (ne) => {
    const {
      onClick: de
    } = e;
    if (D || P) {
      ne.preventDefault();
      return;
    }
    de?.(ne);
  };
  process.env.NODE_ENV !== "production" && ur(!(typeof p == "string" && p.length > 2), "Button", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ur(!(g && qo(a)), "Button", "`link` or `text` button can't be a `ghost` button.");
  const Y = O !== !1, {
    compactSize: M,
    compactItemClassnames: q
  } = Pg(x, T), $ = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, J = Rg((ne) => {
    var de, Ne;
    return (Ne = (de = l ?? M) !== null && de !== void 0 ? de : I) !== null && Ne !== void 0 ? Ne : ne;
  }), re = J && $[J] || "", X = D ? "loading" : p, k = wu(S, ["navigate"]), ee = Me(x, R, {
    [`${x}-${c}`]: c !== "default" && c,
    [`${x}-${a}`]: a,
    [`${x}-${re}`]: re,
    [`${x}-icon-only`]: !m && m !== 0 && !!X,
    [`${x}-background-ghost`]: g && !qo(a),
    [`${x}-loading`]: D,
    [`${x}-two-chinese-chars`]: Q && Y && !D,
    [`${x}-block`]: b,
    [`${x}-dangerous`]: !!s,
    [`${x}-rtl`]: T === "rtl"
  }, q, d, h, N?.className), z = Object.assign(Object.assign({}, N?.style), w), te = Me(E?.icon, (r = N?.classNames) === null || r === void 0 ? void 0 : r.icon), fe = Object.assign(Object.assign({}, u?.icon || {}), ((n = N?.styles) === null || n === void 0 ? void 0 : n.icon) || {}), se = p && !D ? /* @__PURE__ */ Te.createElement(Tg, {
    prefixCls: x,
    className: te,
    style: fe
  }, p) : /* @__PURE__ */ Te.createElement(b_, {
    existIcon: !!p,
    prefixCls: x,
    loading: !!D
  }), he = m || m === 0 ? __(m, H && Y) : null;
  if (k.href !== void 0)
    return L(/* @__PURE__ */ Te.createElement("a", Object.assign({}, k, {
      className: Me(ee, {
        [`${x}-disabled`]: P
      }),
      style: z,
      onClick: j,
      ref: F
    }), se, he));
  let ge = /* @__PURE__ */ Te.createElement("button", Object.assign({}, S, {
    type: y,
    className: ee,
    style: z,
    onClick: j,
    disabled: P,
    ref: F
  }), se, he);
  return qo(a) || (ge = /* @__PURE__ */ Te.createElement(v_, {
    component: "Button",
    disabled: !!D
  }, ge)), L(ge);
}, vs = /* @__PURE__ */ Bl(K_);
process.env.NODE_ENV !== "production" && (vs.displayName = "Button");
vs.Group = w_;
vs.__ANT_BUTTON = !0;
const Y_ = vs, X_ = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
var Ag = /* @__PURE__ */ v.createContext(null), yh = [];
function J_(e, t) {
  var r = v.useState(function() {
    if (!Gt())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = G(r, 1), i = n[0], o = v.useRef(!1), a = v.useContext(Ag), s = v.useState(yh), c = G(s, 2), l = c[0], u = c[1], f = a || (o.current ? void 0 : function(m) {
    u(function(p) {
      var g = [m].concat(Ee(p));
      return g;
    });
  });
  function d() {
    i.parentElement || document.body.appendChild(i), o.current = !0;
  }
  function h() {
    var m;
    (m = i.parentElement) === null || m === void 0 || m.removeChild(i), o.current = !1;
  }
  return Ot(function() {
    return e ? a ? a(d) : d() : h(), h;
  }, [e]), Ot(function() {
    l.length && (l.forEach(function(m) {
      return m();
    }), u(yh));
  }, [l]), [i, f];
}
var ic;
function Z_(e) {
  if (typeof document > "u")
    return 0;
  if (e || ic === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var i = t.offsetWidth;
    r.style.overflow = "scroll";
    var o = t.offsetWidth;
    i === o && (o = r.clientWidth), document.body.removeChild(r), ic = i - o;
  }
  return ic;
}
function bh(e) {
  var t = e.match(/^(.*)px$/), r = Number(t?.[1]);
  return Number.isNaN(r) ? Z_() : r;
}
function ex(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: bh(r),
    height: bh(n)
  };
}
function tx() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var rx = "rc-util-locker-".concat(Date.now()), Eh = 0;
function nx(e) {
  var t = !!e, r = v.useState(function() {
    return Eh += 1, "".concat(rx, "_").concat(Eh);
  }), n = G(r, 1), i = n[0];
  Ot(function() {
    if (t) {
      var o = ex(document.body).width, a = tx();
      ao(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), i);
    } else
      Pa(i);
    return function() {
      Pa(i);
    };
  }, [t, i]);
}
var Sh = !1;
function ix(e) {
  return typeof e == "boolean" && (Sh = e), Sh;
}
var wh = function(t) {
  return t === !1 ? !1 : !Gt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Gu = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, i = e.getContainer, o = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, l = v.useState(r), u = G(l, 2), f = u[0], d = u[1], h = f || r;
  process.env.NODE_ENV !== "production" && ke(Gt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), v.useEffect(function() {
    (s || r) && d(r);
  }, [r, s]);
  var m = v.useState(function() {
    return wh(i);
  }), p = G(m, 2), g = p[0], b = p[1];
  v.useEffect(function() {
    var R = wh(i);
    b(R ?? null);
  });
  var y = J_(h && !g, o), E = G(y, 2), w = E[0], S = E[1], C = g ?? w;
  nx(n && r && Gt() && (C === w || C === document.body));
  var O = null;
  if (c && So(c) && t) {
    var T = c;
    O = T.ref;
  }
  var N = Su(O, t);
  if (!h || !Gt() || g === void 0)
    return null;
  var x = C === !1 || ix(), L = c;
  return t && (L = /* @__PURE__ */ v.cloneElement(c, {
    ref: N
  })), /* @__PURE__ */ v.createElement(Ag.Provider, {
    value: S
  }, x ? L : /* @__PURE__ */ Ul(L, C));
});
process.env.NODE_ENV !== "production" && (Gu.displayName = "Portal");
function ox() {
  var e = W({}, v);
  return e.useId;
}
var Ch = 0;
function ax(e) {
  var t = v.useState("ssr-id"), r = G(t, 2), n = r[0], i = r[1], o = ox(), a = o?.();
  return v.useEffect(function() {
    if (!o) {
      var s = Ch;
      Ch += 1, i("rc_unique_".concat(s));
    }
  }, []), e || (process.env.NODE_ENV === "test" ? "test-id" : a || n);
}
var bn = "RC_FORM_INTERNAL_HOOKS", at = function() {
  ke(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, bi = /* @__PURE__ */ v.createContext({
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
}), $a = /* @__PURE__ */ v.createContext(null);
function wl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function sx(e) {
  return e && !!e._init;
}
function En() {
  return En = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, En.apply(this, arguments);
}
function cx(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, uo(e, t);
}
function Cl(e) {
  return Cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cl(e);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, uo(e, t);
}
function lx() {
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
function va(e, t, r) {
  return lx() ? va = Reflect.construct.bind() : va = function(i, o, a) {
    var s = [null];
    s.push.apply(s, o);
    var c = Function.bind.apply(i, s), l = new c();
    return a && uo(l, a.prototype), l;
  }, va.apply(null, arguments);
}
function ux(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ol(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ol = function(n) {
    if (n === null || !ux(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, i);
    }
    function i() {
      return va(n, arguments, Cl(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), uo(i, n);
  }, Ol(e);
}
var fx = /%[sdj%]/g, Fg = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Fg = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function _l(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function cr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var i = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var a = e.replace(fx, function(s) {
      if (s === "%%")
        return "%";
      if (i >= o)
        return s;
      switch (s) {
        case "%s":
          return String(r[i++]);
        case "%d":
          return Number(r[i++]);
        case "%j":
          try {
            return JSON.stringify(r[i++]);
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
function dx(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Dt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || dx(t) && typeof e == "string" && !e);
}
function hx(e, t, r) {
  var n = [], i = 0, o = e.length;
  function a(s) {
    n.push.apply(n, s || []), i++, i === o && r(n);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function Oh(e, t, r) {
  var n = 0, i = e.length;
  function o(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var s = n;
    n = n + 1, s < i ? t(e[s], o) : r([]);
  }
  o([]);
}
function vx(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var _h = /* @__PURE__ */ function(e) {
  cx(t, e);
  function t(r, n) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = n, i;
  }
  return t;
}(/* @__PURE__ */ Ol(Error));
function px(e, t, r, n, i) {
  if (t.first) {
    var o = new Promise(function(d, h) {
      var m = function(b) {
        return n(b), b.length ? h(new _h(b, _l(b))) : d(i);
      }, p = vx(e);
      Oh(p, r, m);
    });
    return o.catch(function(d) {
      return d;
    }), o;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], f = new Promise(function(d, h) {
    var m = function(g) {
      if (u.push.apply(u, g), l++, l === c)
        return n(u), u.length ? h(new _h(u, _l(u))) : d(i);
    };
    s.length || (n(u), d(i)), s.forEach(function(p) {
      var g = e[p];
      a.indexOf(p) !== -1 ? Oh(g, r, m) : hx(g, r, m);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function mx(e) {
  return !!(e && e.message !== void 0);
}
function gx(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function xh(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = gx(t, e.fullFields) : n = t[r.field || e.fullField], mx(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Rh(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = En({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var $g = function(t, r, n, i, o, a) {
  t.required && (!n.hasOwnProperty(t.field) || Dt(r, a || t.type)) && i.push(cr(o.messages.required, t.fullField));
}, yx = function(t, r, n, i, o) {
  (/^\s+$/.test(r) || r === "") && i.push(cr(o.messages.whitespace, t.fullField));
}, Qo, bx = function() {
  if (Qo)
    return Qo;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", i = (`
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), a = new RegExp("^" + r + "$"), s = new RegExp("^" + i + "$"), c = function(w) {
    return w && w.exact ? o : new RegExp("(?:" + t(w) + r + t(w) + ")|(?:" + t(w) + i + t(w) + ")", "g");
  };
  c.v4 = function(E) {
    return E && E.exact ? a : new RegExp("" + t(E) + r + t(E), "g");
  }, c.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + t(E) + i + t(E), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", u = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, d = c.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + l + "|www\\.)" + u + "(?:localhost|" + f + "|" + d + "|" + h + m + p + ")" + g + b;
  return Qo = new RegExp("(?:^" + y + "$)", "i"), Qo;
}, Ph = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ui = {
  integer: function(t) {
    return Ui.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ui.number(t) && !Ui.integer(t);
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
    return typeof t == "object" && !Ui.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ph.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(bx());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ph.hex);
  }
}, Ex = function(t, r, n, i, o) {
  if (t.required && r === void 0) {
    $g(t, r, n, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Ui[s](r) || i.push(cr(o.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(cr(o.messages.types[s], t.fullField, t.type));
}, Sx = function(t, r, n, i, o) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, f = null, d = typeof r == "number", h = typeof r == "string", m = Array.isArray(r);
  if (d ? f = "number" : h ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (u = r.length), h && (u = r.replace(l, "_").length), a ? u !== t.len && i.push(cr(o.messages[f].len, t.fullField, t.len)) : s && !c && u < t.min ? i.push(cr(o.messages[f].min, t.fullField, t.min)) : c && !s && u > t.max ? i.push(cr(o.messages[f].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && i.push(cr(o.messages[f].range, t.fullField, t.min, t.max));
}, Qn = "enum", wx = function(t, r, n, i, o) {
  t[Qn] = Array.isArray(t[Qn]) ? t[Qn] : [], t[Qn].indexOf(r) === -1 && i.push(cr(o.messages[Qn], t.fullField, t[Qn].join(", ")));
}, Cx = function(t, r, n, i, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(cr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || i.push(cr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, je = {
  required: $g,
  whitespace: yx,
  type: Ex,
  range: Sx,
  enum: wx,
  pattern: Cx
}, Ox = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "string") && !t.required)
      return n();
    je.required(t, r, i, a, o, "string"), Dt(r, "string") || (je.type(t, r, i, a, o), je.range(t, r, i, a, o), je.pattern(t, r, i, a, o), t.whitespace === !0 && je.whitespace(t, r, i, a, o));
  }
  n(a);
}, _x = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && je.type(t, r, i, a, o);
  }
  n(a);
}, xx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && (je.type(t, r, i, a, o), je.range(t, r, i, a, o));
  }
  n(a);
}, Rx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && je.type(t, r, i, a, o);
  }
  n(a);
}, Px = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), Dt(r) || je.type(t, r, i, a, o);
  }
  n(a);
}, Tx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && (je.type(t, r, i, a, o), je.range(t, r, i, a, o));
  }
  n(a);
}, Nx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && (je.type(t, r, i, a, o), je.range(t, r, i, a, o));
  }
  n(a);
}, Mx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    je.required(t, r, i, a, o, "array"), r != null && (je.type(t, r, i, a, o), je.range(t, r, i, a, o));
  }
  n(a);
}, Ix = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && je.type(t, r, i, a, o);
  }
  n(a);
}, Dx = "enum", Ax = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o), r !== void 0 && je[Dx](t, r, i, a, o);
  }
  n(a);
}, Fx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "string") && !t.required)
      return n();
    je.required(t, r, i, a, o), Dt(r, "string") || je.pattern(t, r, i, a, o);
  }
  n(a);
}, $x = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r, "date") && !t.required)
      return n();
    if (je.required(t, r, i, a, o), !Dt(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), je.type(t, c, i, a, o), c && je.range(t, c.getTime(), i, a, o);
    }
  }
  n(a);
}, kx = function(t, r, n, i, o) {
  var a = [], s = Array.isArray(r) ? "array" : typeof r;
  je.required(t, r, i, a, o, s), n(a);
}, oc = function(t, r, n, i, o) {
  var a = t.type, s = [], c = t.required || !t.required && i.hasOwnProperty(t.field);
  if (c) {
    if (Dt(r, a) && !t.required)
      return n();
    je.required(t, r, i, s, o, a), Dt(r, a) || je.type(t, r, i, s, o);
  }
  n(s);
}, Lx = function(t, r, n, i, o) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Dt(r) && !t.required)
      return n();
    je.required(t, r, i, a, o);
  }
  n(a);
}, Xi = {
  string: Ox,
  method: _x,
  number: xx,
  boolean: Rx,
  regexp: Px,
  integer: Tx,
  float: Nx,
  array: Mx,
  object: Ix,
  enum: Ax,
  pattern: Fx,
  date: $x,
  url: oc,
  hex: oc,
  email: oc,
  required: kx,
  any: Lx
};
function xl() {
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
var Rl = xl(), Ro = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Rl, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var i = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(o) {
      var a = n[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(n) {
    return n && (this._messages = Rh(xl(), n)), this._messages;
  }, t.validate = function(n, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var s = n, c = i, l = o;
    if (typeof c == "function" && (l = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, s), Promise.resolve(s);
    function u(p) {
      var g = [], b = {};
      function y(w) {
        if (Array.isArray(w)) {
          var S;
          g = (S = g).concat.apply(S, w);
        } else
          g.push(w);
      }
      for (var E = 0; E < p.length; E++)
        y(p[E]);
      g.length ? (b = _l(g), l(g, b)) : l(null, s);
    }
    if (c.messages) {
      var f = this.messages();
      f === Rl && (f = xl()), Rh(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var d = {}, h = c.keys || Object.keys(this.rules);
    h.forEach(function(p) {
      var g = a.rules[p], b = s[p];
      g.forEach(function(y) {
        var E = y;
        typeof E.transform == "function" && (s === n && (s = En({}, s)), b = s[p] = E.transform(b)), typeof E == "function" ? E = {
          validator: E
        } : E = En({}, E), E.validator = a.getValidationMethod(E), E.validator && (E.field = p, E.fullField = E.fullField || p, E.type = a.getType(E), d[p] = d[p] || [], d[p].push({
          rule: E,
          value: b,
          source: s,
          field: p
        }));
      });
    });
    var m = {};
    return px(d, c, function(p, g) {
      var b = p.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && p.value), b.field = p.field;
      function E(C, O) {
        return En({}, O, {
          fullField: b.fullField + "." + C,
          fullFields: b.fullFields ? [].concat(b.fullFields, [C]) : [C]
        });
      }
      function w(C) {
        C === void 0 && (C = []);
        var O = Array.isArray(C) ? C : [C];
        !c.suppressWarning && O.length && e.warning("async-validator:", O), O.length && b.message !== void 0 && (O = [].concat(b.message));
        var T = O.map(xh(b, s));
        if (c.first && T.length)
          return m[b.field] = 1, g(T);
        if (!y)
          g(T);
        else {
          if (b.required && !p.value)
            return b.message !== void 0 ? T = [].concat(b.message).map(xh(b, s)) : c.error && (T = [c.error(b, cr(c.messages.required, b.field))]), g(T);
          var N = {};
          b.defaultField && Object.keys(p.value).map(function(R) {
            N[R] = b.defaultField;
          }), N = En({}, N, p.rule.fields);
          var x = {};
          Object.keys(N).forEach(function(R) {
            var _ = N[R], P = Array.isArray(_) ? _ : [_];
            x[R] = P.map(E.bind(null, R));
          });
          var L = new e(x);
          L.messages(c.messages), p.rule.options && (p.rule.options.messages = c.messages, p.rule.options.error = c.error), L.validate(p.value, p.rule.options || c, function(R) {
            var _ = [];
            T && T.length && _.push.apply(_, T), R && R.length && _.push.apply(_, R), g(_.length ? _ : null);
          });
        }
      }
      var S;
      if (b.asyncValidator)
        S = b.asyncValidator(b, p.value, w, p.source, c);
      else if (b.validator) {
        try {
          S = b.validator(b, p.value, w, p.source, c);
        } catch (C) {
          console.error?.(C), c.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), w(C.message);
        }
        S === !0 ? w() : S === !1 ? w(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : S instanceof Array ? w(S) : S instanceof Error && w(S.message);
      }
      S && S.then && S.then(function() {
        return w();
      }, function(C) {
        return w(C);
      });
    }, function(p) {
      u(p);
    }, s);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Xi.hasOwnProperty(n.type))
      throw new Error(cr("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var i = Object.keys(n), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? Xi.required : Xi[this.getType(n)] || void 0;
  }, e;
}();
Ro.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Xi[t] = r;
};
Ro.warning = Fg;
Ro.messages = Rl;
Ro.validators = Xi;
var ar = "'${name}' is not a valid ${type}", kg = {
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
    string: ar,
    method: ar,
    array: ar,
    object: ar,
    number: ar,
    date: ar,
    boolean: ar,
    integer: ar,
    float: ar,
    regexp: ar,
    email: ar,
    url: ar,
    hex: ar
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
}, Th = Ro;
function jx(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Nh = "CODE_LOGIC_ERROR";
function Pl(e, t, r, n, i) {
  return Tl.apply(this, arguments);
}
function Tl() {
  return Tl = Ri(/* @__PURE__ */ fr().mark(function e(t, r, n, i, o) {
    var a, s, c, l, u, f, d, h, m;
    return fr().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return a = W({}, n), delete a.ruleIndex, Th.warning = function() {
            }, a.validator && (s = a.validator, a.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (b) {
                return console.error(b), Promise.reject(Nh);
              }
            }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), l = new Th(be({}, t, [a])), u = ii(kg, i.validateMessages), l.messages(u), f = [], g.prev = 10, g.next = 13, Promise.resolve(l.validate(be({}, t, r), W({}, i)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(b, y) {
              var E = b.message, w = E === Nh ? u.default : E;
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
              return Pl("".concat(t, ".").concat(y), b, c, i, o);
            }));
          case 21:
            return d = g.sent, g.abrupt("return", d.reduce(function(b, y) {
              return [].concat(Ee(b), Ee(y));
            }, []));
          case 23:
            return h = W(W({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), m = f.map(function(b) {
              return typeof b == "string" ? jx(b, h) : b;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), Tl.apply(this, arguments);
}
function Vx(e, t, r, n, i, o) {
  var a = e.join("."), s = r.map(function(u, f) {
    var d = u.validator, h = W(W({}, u), {}, {
      ruleIndex: f
    });
    return d && (h.validator = function(m, p, g) {
      var b = !1, y = function() {
        for (var S = arguments.length, C = new Array(S), O = 0; O < S; O++)
          C[O] = arguments[O];
        Promise.resolve().then(function() {
          ke(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || g.apply(void 0, C);
        });
      }, E = d(m, p, y);
      b = E && typeof E.then == "function" && typeof E.catch == "function", ke(b, "`callback` is deprecated. Please return a promise instead."), b && E.then(function() {
        g();
      }).catch(function(w) {
        g(w || " ");
      });
    }), h;
  }).sort(function(u, f) {
    var d = u.warningOnly, h = u.ruleIndex, m = f.warningOnly, p = f.ruleIndex;
    return !!d == !!m ? h - p : d ? 1 : -1;
  }), c;
  if (i === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = Ri(/* @__PURE__ */ fr().mark(function f(d, h) {
        var m, p, g;
        return fr().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < s.length)) {
                  y.next = 12;
                  break;
                }
                return p = s[m], y.next = 5, Pl(a, t, p, n, o);
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
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return Pl(a, t, u, n, o).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    c = (i ? Hx(l) : zx(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function zx(e) {
  return Nl.apply(this, arguments);
}
function Nl() {
  return Nl = Ri(/* @__PURE__ */ fr().mark(function e(t) {
    return fr().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(i) {
              var o, a = (o = []).concat.apply(o, Ee(i));
              return a;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Nl.apply(this, arguments);
}
function Hx(e) {
  return Ml.apply(this, arguments);
}
function Ml() {
  return Ml = Ri(/* @__PURE__ */ fr().mark(function e(t) {
    var r;
    return fr().wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return r = 0, i.abrupt("return", new Promise(function(o) {
              t.forEach(function(a) {
                a.then(function(s) {
                  s.errors.length && o([s]), r += 1, r === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e);
  })), Ml.apply(this, arguments);
}
function wt(e) {
  return wl(e);
}
function Mh(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var i = Rr(e, n);
    r = Or(r, n, i);
  }), r;
}
function Ji(e, t) {
  return e && e.some(function(r) {
    return Lg(r, t);
  });
}
function Lg(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
function Bx(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Be(e) !== "object" || Be(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), i = new Set([].concat(r, n));
  return Ee(i).every(function(o) {
    var a = e[o], s = t[o];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function Wx(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Be(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Ih(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var i = e[t], o = t - r;
  return o > 0 ? [].concat(Ee(e.slice(0, r)), [i], Ee(e.slice(r, t)), Ee(e.slice(t + 1, n))) : o < 0 ? [].concat(Ee(e.slice(0, t)), Ee(e.slice(t + 1, r + 1)), [i], Ee(e.slice(r + 1, n))) : e;
}
var Ux = ["name"], hr = [];
function Dh(e, t, r, n, i, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== i;
}
var Ku = /* @__PURE__ */ function(e) {
  bo(r, e);
  var t = Eo(r);
  function r(n) {
    var i;
    if (yr(this, r), i = t.call(this, n), i.state = {
      resetCount: 0
    }, i.cancelRegisterFunc = null, i.mounted = !1, i.touched = !1, i.dirty = !1, i.validatePromise = void 0, i.prevValidating = void 0, i.errors = hr, i.warnings = hr, i.cancelRegister = function() {
      var c = i.props, l = c.preserve, u = c.isListField, f = c.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(u, l, wt(f)), i.cancelRegisterFunc = null;
    }, i.getNamePath = function() {
      var c = i.props, l = c.name, u = c.fieldContext, f = u.prefixName, d = f === void 0 ? [] : f;
      return l !== void 0 ? [].concat(Ee(d), Ee(l)) : [];
    }, i.getRules = function() {
      var c = i.props, l = c.rules, u = l === void 0 ? [] : l, f = c.fieldContext;
      return u.map(function(d) {
        return typeof d == "function" ? d(f) : d;
      });
    }, i.refresh = function() {
      i.mounted && i.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }, i.metaCache = null, i.triggerMetaEvent = function(c) {
      var l = i.props.onMetaChange;
      if (l) {
        var u = W(W({}, i.getMeta()), {}, {
          destroy: c
        });
        qp(i.metaCache, u) || l(u), i.metaCache = u;
      } else
        i.metaCache = null;
    }, i.onStoreChange = function(c, l, u) {
      var f = i.props, d = f.shouldUpdate, h = f.dependencies, m = h === void 0 ? [] : h, p = f.onReset, g = u.store, b = i.getNamePath(), y = i.getValue(c), E = i.getValue(g), w = l && Ji(l, b);
      switch (u.type === "valueUpdate" && u.source === "external" && y !== E && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = hr, i.warnings = hr, i.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || w) {
            i.touched = !1, i.dirty = !1, i.validatePromise = void 0, i.errors = hr, i.warnings = hr, i.triggerMetaEvent(), p?.(), i.refresh();
            return;
          }
          break;
        case "remove": {
          if (d) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (w) {
            var S = u.data;
            "touched" in S && (i.touched = S.touched), "validating" in S && !("originRCField" in S) && (i.validatePromise = S.validating ? Promise.resolve([]) : null), "errors" in S && (i.errors = S.errors || hr), "warnings" in S && (i.warnings = S.warnings || hr), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          }
          if (d && !b.length && Dh(d, c, g, y, E, u)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = m.map(wt);
          if (C.some(function(O) {
            return Ji(u.relatedFields, O);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!m.length || b.length || d) && Dh(d, c, g, y, E, u)) {
            i.reRender();
            return;
          }
          break;
      }
      d === !0 && i.reRender();
    }, i.validateRules = function(c) {
      var l = i.getNamePath(), u = i.getValue(), f = c || {}, d = f.triggerName, h = f.validateOnly, m = h === void 0 ? !1 : h, p = Promise.resolve().then(function() {
        if (!i.mounted)
          return [];
        var g = i.props, b = g.validateFirst, y = b === void 0 ? !1 : b, E = g.messageVariables, w = i.getRules();
        d && (w = w.filter(function(C) {
          return C;
        }).filter(function(C) {
          var O = C.validateTrigger;
          if (!O)
            return !0;
          var T = wl(O);
          return T.includes(d);
        }));
        var S = Vx(l, u, w, c, y, E);
        return S.catch(function(C) {
          return C;
        }).then(function() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hr;
          if (i.validatePromise === p) {
            var O;
            i.validatePromise = null;
            var T = [], N = [];
            (O = C.forEach) === null || O === void 0 || O.call(C, function(x) {
              var L = x.rule.warningOnly, R = x.errors, _ = R === void 0 ? hr : R;
              L ? N.push.apply(N, Ee(_)) : T.push.apply(T, Ee(_));
            }), i.errors = T, i.warnings = N, i.triggerMetaEvent(), i.reRender();
          }
        }), S;
      });
      return m || (i.validatePromise = p, i.dirty = !0, i.errors = hr, i.warnings = hr, i.triggerMetaEvent(), i.reRender()), p;
    }, i.isFieldValidating = function() {
      return !!i.validatePromise;
    }, i.isFieldTouched = function() {
      return i.touched;
    }, i.isFieldDirty = function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var c = i.props.fieldContext, l = c.getInternalHooks(bn), u = l.getInitialValue;
      return u(i.getNamePath()) !== void 0;
    }, i.getErrors = function() {
      return i.errors;
    }, i.getWarnings = function() {
      return i.warnings;
    }, i.isListField = function() {
      return i.props.isListField;
    }, i.isList = function() {
      return i.props.isList;
    }, i.isPreserve = function() {
      return i.props.preserve;
    }, i.getMeta = function() {
      i.prevValidating = i.isFieldValidating();
      var c = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath(),
        validated: i.validatePromise === null
      };
      return c;
    }, i.getOnlyChild = function(c) {
      if (typeof c == "function") {
        var l = i.getMeta();
        return W(W({}, i.getOnlyChild(c(i.getControlled(), l, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Nn(c);
      return u.length !== 1 || !/* @__PURE__ */ v.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }, i.getValue = function(c) {
      var l = i.props.fieldContext.getFieldsValue, u = i.getNamePath();
      return Rr(c || l(!0), u);
    }, i.getControlled = function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = i.props, u = l.trigger, f = l.validateTrigger, d = l.getValueFromEvent, h = l.normalize, m = l.valuePropName, p = l.getValueProps, g = l.fieldContext, b = f !== void 0 ? f : g.validateTrigger, y = i.getNamePath(), E = g.getInternalHooks, w = g.getFieldsValue, S = E(bn), C = S.dispatch, O = i.getValue(), T = p || function(R) {
        return be({}, m, R);
      }, N = c[u], x = W(W({}, c), T(O));
      x[u] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var R, _ = arguments.length, P = new Array(_), I = 0; I < _; I++)
          P[I] = arguments[I];
        d ? R = d.apply(void 0, P) : R = Wx.apply(void 0, [m].concat(P)), h && (R = h(R, O, w(!0))), C({
          type: "updateValue",
          namePath: y,
          value: R
        }), N && N.apply(void 0, P);
      };
      var L = wl(b || []);
      return L.forEach(function(R) {
        var _ = x[R];
        x[R] = function() {
          _ && _.apply(void 0, arguments);
          var P = i.props.rules;
          P && P.length && C({
            type: "validateField",
            namePath: y,
            triggerName: R
          });
        };
      }), x;
    }, n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, a = o(bn), s = a.initEntityValue;
      s(Ca(i));
    }
    return i;
  }
  return br(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, o = i.shouldUpdate, a = i.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(bn), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      o === !0 && this.reRender();
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
      var i = this.state.resetCount, o = this.props.children, a = this.getOnlyChild(o), s = a.child, c = a.isFunction, l;
      return c ? l = s : /* @__PURE__ */ v.isValidElement(s) ? l = /* @__PURE__ */ v.cloneElement(s, this.getControlled(s.props)) : (ke(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ v.createElement(v.Fragment, {
        key: i
      }, l);
    }
  }]), r;
}(v.Component);
Ku.contextType = bi;
Ku.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function jg(e) {
  var t = e.name, r = Pt(e, Ux), n = v.useContext(bi), i = v.useContext($a), o = t !== void 0 ? wt(t) : void 0, a = "keep";
  return r.isListField || (a = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && ke(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ v.createElement(Ku, Je({
    key: a,
    name: o,
    isListField: !!i
  }, r, {
    fieldContext: n
  }));
}
function qx(e) {
  var t = e.name, r = e.initialValue, n = e.children, i = e.rules, o = e.validateTrigger, a = e.isListField, s = v.useContext(bi), c = v.useContext($a), l = v.useRef({
    keys: [],
    id: 0
  }), u = l.current, f = v.useMemo(function() {
    var p = wt(s.prefixName) || [];
    return [].concat(Ee(p), Ee(wt(t)));
  }, [s.prefixName, t]), d = v.useMemo(function() {
    return W(W({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), h = v.useMemo(function() {
    return {
      getKey: function(g) {
        var b = f.length, y = g[b];
        return [u.keys[y], g.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return ke(!1, "Form.List only accepts function as children."), null;
  var m = function(g, b, y) {
    var E = y.source;
    return E === "internal" ? !1 : g !== b;
  };
  return /* @__PURE__ */ v.createElement($a.Provider, {
    value: h
  }, /* @__PURE__ */ v.createElement(bi.Provider, {
    value: d
  }, /* @__PURE__ */ v.createElement(jg, {
    name: [],
    shouldUpdate: m,
    rules: i,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: a ?? !!c
  }, function(p, g) {
    var b = p.value, y = b === void 0 ? [] : b, E = p.onChange, w = s.getFieldValue, S = function() {
      var N = w(f || []);
      return N || [];
    }, C = {
      add: function(N, x) {
        var L = S();
        x >= 0 && x <= L.length ? (u.keys = [].concat(Ee(u.keys.slice(0, x)), [u.id], Ee(u.keys.slice(x))), E([].concat(Ee(L.slice(0, x)), [N], Ee(L.slice(x))))) : (process.env.NODE_ENV !== "production" && (x < 0 || x > L.length) && ke(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(Ee(u.keys), [u.id]), E([].concat(Ee(L), [N]))), u.id += 1;
      },
      remove: function(N) {
        var x = S(), L = new Set(Array.isArray(N) ? N : [N]);
        L.size <= 0 || (u.keys = u.keys.filter(function(R, _) {
          return !L.has(_);
        }), E(x.filter(function(R, _) {
          return !L.has(_);
        })));
      },
      move: function(N, x) {
        if (N !== x) {
          var L = S();
          N < 0 || N >= L.length || x < 0 || x >= L.length || (u.keys = Ih(u.keys, N, x), E(Ih(L, N, x)));
        }
      }
    }, O = y || [];
    return Array.isArray(O) || (O = [], process.env.NODE_ENV !== "production" && ke(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(O.map(function(T, N) {
      var x = u.keys[N];
      return x === void 0 && (u.keys[N] = u.id, x = u.keys[N], u.id += 1), {
        name: N,
        key: x,
        isListField: !0
      };
    }), C, g);
  })));
}
function Qx(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(i, o) {
    e.forEach(function(a, s) {
      a.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        r -= 1, n[s] = c, !(r > 0) && (t && o(n), i(n));
      });
    });
  }) : Promise.resolve([]);
}
var Vg = "__@field_split__";
function ac(e) {
  return e.map(function(t) {
    return "".concat(Be(t), ":").concat(t);
  }).join(Vg);
}
var Gn = /* @__PURE__ */ function() {
  function e() {
    yr(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return br(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(ac(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(ac(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var i = this.get(r), o = n(i);
      o ? this.set(r, o) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(ac(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Ee(this.kvs.entries()).map(function(n) {
        var i = G(n, 2), o = i[0], a = i[1], s = o.split(Vg);
        return r({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = G(l, 3), f = u[1], d = u[2];
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
        var i = n.key, o = n.value;
        return r[i.join(".")] = o, null;
      }), r;
    }
  }]), e;
}(), Gx = ["name"], Kx = /* @__PURE__ */ br(function e(t) {
  var r = this;
  yr(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
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
    return n === bn ? (r.formHooked = !0, {
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
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, i) {
    if (r.initialValues = n || {}, i) {
      var o, a = ii(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var c = s.key;
        a = Or(a, c, Rr(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }, this.destroyForm = function() {
    var n = new Gn();
    r.getFieldEntities(!0).forEach(function(i) {
      r.isMergedPreserve(i.isPreserve()) || n.set(i.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var i = Rr(r.initialValues, n);
    return n.length ? ii(i) : i;
  }, this.setCallbacks = function(n) {
    r.callbacks = n;
  }, this.setValidateMessages = function(n) {
    r.validateMessages = n;
  }, this.setPreserve = function(n) {
    r.preserve = n;
  }, this.watchList = [], this.registerWatch = function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(i) {
        return i !== n;
      });
    };
  }, this.notifyWatch = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var i = r.getFieldsValue(), o = r.getFieldsValue(!0);
      r.watchList.forEach(function(a) {
        a(i, o, n);
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
    return n ? r.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : r.fieldEntities;
  }, this.getFieldsMap = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new Gn();
    return r.getFieldEntities(n).forEach(function(o) {
      var a = o.getNamePath();
      i.set(a, o);
    }), i;
  }, this.getFieldEntitiesForNamePathList = function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var i = r.getFieldsMap(!0);
    return n.map(function(o) {
      var a = wt(o);
      return i.get(a) || {
        INVALIDATE_NAME_PATH: wt(o)
      };
    });
  }, this.getFieldsValue = function(n, i) {
    r.warningUnhooked();
    var o, a, s;
    if (n === !0 || Array.isArray(n) ? (o = n, a = i) : n && Be(n) === "object" && (s = n.strict, a = n.filter), o === !0 && !a)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), l = [];
    return c.forEach(function(u) {
      var f, d = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var h;
        if (!((h = u.isList) === null || h === void 0) && h.call(u))
          return;
      } else if (!o && (!((f = u.isListField) === null || f === void 0) && f.call(u)))
        return;
      if (!a)
        l.push(d);
      else {
        var m = "getMeta" in u ? u.getMeta() : null;
        a(m) && l.push(d);
      }
    }), Mh(r.store, l.map(wt));
  }, this.getFieldValue = function(n) {
    r.warningUnhooked();
    var i = wt(n);
    return Rr(r.store, i);
  }, this.getFieldsError = function(n) {
    r.warningUnhooked();
    var i = r.getFieldEntitiesForNamePathList(n);
    return i.map(function(o, a) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: wt(n[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(n) {
    r.warningUnhooked();
    var i = wt(n), o = r.getFieldsError([i])[0];
    return o.errors;
  }, this.getFieldWarning = function(n) {
    r.warningUnhooked();
    var i = wt(n), o = r.getFieldsError([i])[0];
    return o.warnings;
  }, this.isFieldsTouched = function() {
    r.warningUnhooked();
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    var a = i[0], s = i[1], c, l = !1;
    i.length === 0 ? c = null : i.length === 1 ? Array.isArray(a) ? (c = a.map(wt), l = !1) : (c = null, l = a) : (c = a.map(wt), l = s);
    var u = r.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!c)
      return l ? u.every(f) : u.some(f);
    var d = new Gn();
    c.forEach(function(p) {
      d.set(p, []);
    }), u.forEach(function(p) {
      var g = p.getNamePath();
      c.forEach(function(b) {
        b.every(function(y, E) {
          return g[E] === y;
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
    return l ? m.every(h) : m.some(h);
  }, this.isFieldTouched = function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }, this.isFieldsValidating = function(n) {
    r.warningUnhooked();
    var i = r.getFieldEntities();
    if (!n)
      return i.some(function(a) {
        return a.isFieldValidating();
      });
    var o = n.map(wt);
    return i.some(function(a) {
      var s = a.getNamePath();
      return Ji(o, s) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new Gn(), o = r.getFieldEntities(!0);
    o.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var f = i.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: l
        }), i.set(u, f);
      }
    });
    var a = function(l) {
      l.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var d = u.getNamePath(), h = r.getInitialValue(d);
          if (h !== void 0)
            ke(!1, "Form already set 'initialValues' with path '".concat(d.join("."), "'. Field can not overwrite it."));
          else {
            var m = i.get(d);
            if (m && m.size > 1)
              ke(!1, "Multiple Field with path '".concat(d.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var p = r.getFieldValue(d);
              (!n.skipExist || p === void 0) && r.updateStore(Or(r.store, d, Ee(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var l = i.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, Ee(Ee(l).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, a(s);
  }, this.resetFields = function(n) {
    r.warningUnhooked();
    var i = r.store;
    if (!n) {
      r.updateStore(ii(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(i, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(wt);
    o.forEach(function(a) {
      var s = r.getInitialValue(a);
      r.updateStore(Or(r.store, a, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(i, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }, this.setFields = function(n) {
    r.warningUnhooked();
    var i = r.store, o = [];
    n.forEach(function(a) {
      var s = a.name, c = Pt(a, Gx), l = wt(s);
      o.push(l), "value" in c && r.updateStore(Or(r.store, l, c.value)), r.notifyObservers(i, [l], {
        type: "setField",
        data: a
      });
    }), r.notifyWatch(o);
  }, this.getFields = function() {
    var n = r.getFieldEntities(!0), i = n.map(function(o) {
      var a = o.getNamePath(), s = o.getMeta(), c = W(W({}, s), {}, {
        name: a,
        value: r.getFieldValue(a)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return i;
  }, this.initEntityValue = function(n) {
    var i = n.props.initialValue;
    if (i !== void 0) {
      var o = n.getNamePath(), a = Rr(r.store, o);
      a === void 0 && r.updateStore(Or(r.store, o, i));
    }
  }, this.isMergedPreserve = function(n) {
    var i = n !== void 0 ? n : r.preserve;
    return i ?? !0;
  }, this.registerField = function(n) {
    r.fieldEntities.push(n);
    var i = n.getNamePath();
    if (r.notifyWatch([i]), n.props.initialValue !== void 0) {
      var o = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(o, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(f) {
        return f !== n;
      }), !r.isMergedPreserve(s) && (!a || c.length > 1)) {
        var l = a ? void 0 : r.getInitialValue(i);
        if (i.length && r.getFieldValue(i) !== l && r.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Lg(f.getNamePath(), i)
          );
        })) {
          var u = r.store;
          r.updateStore(Or(u, i, l, !0)), r.notifyObservers(u, [i], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, i);
        }
      }
      r.notifyWatch([i]);
    };
  }, this.dispatch = function(n) {
    switch (n.type) {
      case "updateValue": {
        var i = n.namePath, o = n.value;
        r.updateValue(i, o);
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
  }, this.notifyObservers = function(n, i, o) {
    if (r.subscribable) {
      var a = W(W({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, i, a);
      });
    } else
      r.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(n, i) {
    var o = r.getDependencyChildrenFields(i);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(Ee(o))
    }), o;
  }, this.updateValue = function(n, i) {
    var o = wt(n), a = r.store;
    r.updateStore(Or(r.store, o, i)), r.notifyObservers(a, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(a, o), c = r.callbacks.onValuesChange;
    if (c) {
      var l = Mh(r.store, [o]);
      c(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Ee(s)));
  }, this.setFieldsValue = function(n) {
    r.warningUnhooked();
    var i = r.store;
    if (n) {
      var o = ii(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }, this.setFieldValue = function(n, i) {
    r.setFields([{
      name: n,
      value: i
    }]);
  }, this.getDependencyChildrenFields = function(n) {
    var i = /* @__PURE__ */ new Set(), o = [], a = new Gn();
    r.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var f = wt(u);
        a.update(f, function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return d.add(c), d;
        });
      });
    });
    var s = function c(l) {
      var u = a.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!i.has(f)) {
          i.add(f);
          var d = f.getNamePath();
          f.isFieldDirty() && d.length && (o.push(d), c(d));
        }
      });
    };
    return s(n), o;
  }, this.triggerOnFieldsChange = function(n, i) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var a = r.getFields();
      if (i) {
        var s = new Gn();
        i.forEach(function(l) {
          var u = l.name, f = l.errors;
          s.set(u, f);
        }), a.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = a.filter(function(l) {
        var u = l.name;
        return Ji(n, u);
      });
      c.length && o(c, a);
    }
  }, this.validateFields = function(n, i) {
    r.warningUnhooked();
    var o, a;
    Array.isArray(n) || typeof n == "string" || typeof i == "string" ? (o = n, a = i) : a = n;
    var s = !!o, c = s ? o.map(wt) : [], l = [], u = String(Date.now()), f = /* @__PURE__ */ new Set();
    r.getFieldEntities(!0).forEach(function(p) {
      var g;
      if (s || c.push(p.getNamePath()), !((g = a) === null || g === void 0) && g.recursive && s) {
        var b = p.getNamePath();
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        b.every(function(w, S) {
          return o[S] === w || o[S] === void 0;
        }) && c.push(b);
      }
      if (!(!p.props.rules || !p.props.rules.length)) {
        var y = p.getNamePath();
        if (f.add(y.join(u)), !s || Ji(c, y)) {
          var E = p.validateRules(W({
            validateMessages: W(W({}, kg), r.validateMessages)
          }, a));
          l.push(E.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var S, C = [], O = [];
            return (S = w.forEach) === null || S === void 0 || S.call(w, function(T) {
              var N = T.rule.warningOnly, x = T.errors;
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
    var d = Qx(l);
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
      return f.has(p.join(u));
    });
    return r.triggerOnFieldsChange(m), h;
  }, this.submit = function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var i = r.callbacks.onFinish;
      if (i)
        try {
          i(n);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(n) {
      var i = r.callbacks.onFinishFailed;
      i && i(n);
    });
  }, this.forceRootUpdate = t;
});
function zg(e) {
  var t = v.useRef(), r = v.useState({}), n = G(r, 2), i = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        i({});
      }, a = new Kx(o);
      t.current = a.getForm();
    }
  return [t.current];
}
var Il = /* @__PURE__ */ v.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Yx = function(t) {
  var r = t.validateMessages, n = t.onFormChange, i = t.onFormFinish, o = t.children, a = v.useContext(Il), s = v.useRef({});
  return /* @__PURE__ */ v.createElement(Il.Provider, {
    value: W(W({}, a), {}, {
      validateMessages: W(W({}, a.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        n && n(l, {
          changedFields: u,
          forms: s.current
        }), a.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        i && i(l, {
          values: u,
          forms: s.current
        }), a.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = W(W({}, s.current), {}, be({}, l, u))), a.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = W({}, s.current);
        delete u[l], s.current = u, a.unregisterForm(l);
      }
    })
  }, o);
}, Xx = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], Jx = function(t, r) {
  var n = t.name, i = t.initialValues, o = t.fields, a = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, f = t.validateMessages, d = t.validateTrigger, h = d === void 0 ? "onChange" : d, m = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, b = t.onFinishFailed, y = Pt(t, Xx), E = v.useContext(Il), w = zg(a), S = G(w, 1), C = S[0], O = C.getInternalHooks(bn), T = O.useSubscribe, N = O.setInitialValues, x = O.setCallbacks, L = O.setValidateMessages, R = O.setPreserve, _ = O.destroyForm;
  v.useImperativeHandle(r, function() {
    return C;
  }), v.useEffect(function() {
    return E.registerForm(n, C), function() {
      E.unregisterForm(n);
    };
  }, [E, C, n]), L(W(W({}, E.validateMessages), f)), x({
    onValuesChange: m,
    onFieldsChange: function(F) {
      if (E.triggerFormChange(n, F), p) {
        for (var H = arguments.length, j = new Array(H > 1 ? H - 1 : 0), Y = 1; Y < H; Y++)
          j[Y - 1] = arguments[Y];
        p.apply(void 0, [F].concat(j));
      }
    },
    onFinish: function(F) {
      E.triggerFormFinish(n, F), g && g(F);
    },
    onFinishFailed: b
  }), R(s);
  var P = v.useRef(null);
  N(i, !P.current), P.current || (P.current = !0), v.useEffect(
    function() {
      return _;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, A = typeof c == "function";
  if (A) {
    var D = C.getFieldsValue(!0);
    I = c(D, C);
  } else
    I = c;
  T(!A);
  var B = v.useRef();
  v.useEffect(function() {
    Bx(B.current || [], o || []) || C.setFields(o || []), B.current = o;
  }, [o, C]);
  var Q = v.useMemo(function() {
    return W(W({}, C), {}, {
      validateTrigger: h
    });
  }, [C, h]), ie = /* @__PURE__ */ v.createElement($a.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(bi.Provider, {
    value: Q
  }, I));
  return u === !1 ? ie : /* @__PURE__ */ v.createElement(u, Je({}, y, {
    onSubmit: function(F) {
      F.preventDefault(), F.stopPropagation(), C.submit();
    },
    onReset: function(F) {
      var H;
      F.preventDefault(), C.resetFields(), (H = y.onReset) === null || H === void 0 || H.call(y, F);
    }
  }), ie);
};
function Ah(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Zx = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Ae(t);
  ke(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function eR() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], i = n === void 0 ? [] : n, o = t[1], a = o === void 0 ? {} : o, s = sx(a) ? {
    form: a
  } : a, c = s.form, l = lr(), u = G(l, 2), f = u[0], d = u[1], h = fi(function() {
    return Ah(f);
  }, [f]), m = Ae(h);
  m.current = h;
  var p = Qt(bi), g = c || p, b = g && g._init;
  process.env.NODE_ENV !== "production" && ke(t.length === 2 ? c ? b : !0 : b, "useWatch requires a form instance since it can not auto detect from context.");
  var y = wt(i), E = Ae(y);
  return E.current = y, Zx(y), Ht(
    function() {
      if (b) {
        var w = g.getFieldsValue, S = g.getInternalHooks, C = S(bn), O = C.registerWatch, T = O(function(x, L) {
          var R = Rr(s.preserve ? L : x, E.current), _ = Ah(R);
          m.current !== _ && (m.current = _, d(R));
        }), N = Rr(s.preserve ? w(!0) : w(), E.current);
        return d(N), T;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b]
  ), f;
}
var tR = /* @__PURE__ */ v.forwardRef(Jx), Po = tR;
Po.FormProvider = Yx;
Po.Field = jg;
Po.List = qx;
Po.useForm = zg;
Po.useWatch = eR;
const rR = /* @__PURE__ */ v.createContext({}), nR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), iR = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Hg = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, nR(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, iR(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, oR = new Lt("antMoveDownIn", {
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
}), aR = new Lt("antMoveDownOut", {
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
}), sR = new Lt("antMoveLeftIn", {
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
}), cR = new Lt("antMoveLeftOut", {
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
}), lR = new Lt("antMoveRightIn", {
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
}), uR = new Lt("antMoveRightOut", {
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
}), fR = new Lt("antMoveUpIn", {
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
}), dR = new Lt("antMoveUpOut", {
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
}), hR = {
  "move-up": {
    inKeyframes: fR,
    outKeyframes: dR
  },
  "move-down": {
    inKeyframes: oR,
    outKeyframes: aR
  },
  "move-left": {
    inKeyframes: sR,
    outKeyframes: cR
  },
  "move-right": {
    inKeyframes: lR,
    outKeyframes: uR
  }
}, Fh = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: i,
    outKeyframes: o
  } = hR[t];
  return [Hg(n, i, o, e.motionDurationMid), {
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
}, Bg = new Lt("antSlideUpIn", {
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
}), Wg = new Lt("antSlideUpOut", {
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
}), Ug = new Lt("antSlideDownIn", {
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
}), qg = new Lt("antSlideDownOut", {
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
}), vR = new Lt("antSlideLeftIn", {
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
}), pR = new Lt("antSlideLeftOut", {
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
}), mR = new Lt("antSlideRightIn", {
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
}), gR = new Lt("antSlideRightOut", {
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
}), yR = {
  "slide-up": {
    inKeyframes: Bg,
    outKeyframes: Wg
  },
  "slide-down": {
    inKeyframes: Ug,
    outKeyframes: qg
  },
  "slide-left": {
    inKeyframes: vR,
    outKeyframes: pR
  },
  "slide-right": {
    inKeyframes: mR,
    outKeyframes: gR
  }
}, $h = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: i,
    outKeyframes: o
  } = yR[t];
  return [Hg(n, i, o, e.motionDurationMid), {
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
function bR(e, t, r, n) {
  return function(o) {
    const {
      prefixCls: a,
      style: s
    } = o, c = v.useRef(null), [l, u] = v.useState(0), [f, d] = v.useState(0), [h, m] = Na(!1, {
      value: o.open
    }), {
      getPrefixCls: p
    } = v.useContext(rr), g = p(t || "select", a);
    v.useEffect(() => {
      if (m(!0), typeof ResizeObserver < "u") {
        const y = new ResizeObserver((w) => {
          const S = w[0].target;
          u(S.offsetHeight + 8), d(S.offsetWidth);
        }), E = setInterval(() => {
          var w;
          const S = r ? `.${r(g)}` : `.${g}-dropdown`, C = (w = c.current) === null || w === void 0 ? void 0 : w.querySelector(S);
          C && (clearInterval(E), y.observe(C));
        }, 10);
        return () => {
          clearInterval(E), y.disconnect();
        };
      }
    }, []);
    let b = Object.assign(Object.assign({}, o), {
      style: Object.assign(Object.assign({}, s), {
        margin: 0
      }),
      open: h,
      visible: h,
      getPopupContainer: () => c.current
    });
    return n && (b = n(b)), /* @__PURE__ */ v.createElement($u, {
      theme: {
        token: {
          motion: !1
        }
      }
    }, /* @__PURE__ */ v.createElement("div", {
      ref: c,
      style: {
        paddingBottom: l,
        position: "relative",
        minWidth: f
      }
    }, /* @__PURE__ */ v.createElement(e, Object.assign({}, b))));
  };
}
const Qg = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var Gg = /* @__PURE__ */ v.createContext(null);
function ER() {
  return v.useContext(Gg);
}
function SR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = v.useState(!1), r = G(t, 2), n = r[0], i = r[1], o = v.useRef(null), a = function() {
    window.clearTimeout(o.current);
  };
  v.useEffect(function() {
    return a;
  }, []);
  var s = function(l, u) {
    a(), o.current = window.setTimeout(function() {
      i(l), u && u();
    }, e);
  };
  return [n, s, a];
}
function Kg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = v.useRef(null), r = v.useRef(null);
  v.useEffect(function() {
    return function() {
      window.clearTimeout(r.current);
    };
  }, []);
  function n(i) {
    (i || t.current === null) && (t.current = i), window.clearTimeout(r.current), r.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, n];
}
function wR(e, t, r, n) {
  var i = v.useRef(null);
  i.current = {
    open: t,
    triggerOpen: r,
    customizedTrigger: n
  }, v.useEffect(function() {
    function o(a) {
      var s;
      if (!((s = i.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var c = a.target;
        c.shadowRoot && a.composed && (c = a.composedPath()[0] || c), i.current.open && e().filter(function(l) {
          return l;
        }).every(function(l) {
          return !l.contains(c) && l !== c;
        }) && i.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
var CR = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Kn = void 0;
function OR(e, t) {
  var r = e.prefixCls, n = e.invalidate, i = e.item, o = e.renderItem, a = e.responsive, s = e.responsiveDisabled, c = e.registerSize, l = e.itemKey, u = e.className, f = e.style, d = e.children, h = e.display, m = e.order, p = e.component, g = p === void 0 ? "div" : p, b = Pt(e, CR), y = a && !h;
  function E(T) {
    c(l, T);
  }
  v.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var w = o && i !== Kn ? o(i) : d, S;
  n || (S = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Kn,
    overflowY: y ? "hidden" : Kn,
    order: a ? m : Kn,
    pointerEvents: y ? "none" : Kn,
    position: y ? "absolute" : Kn
  });
  var C = {};
  y && (C["aria-hidden"] = !0);
  var O = /* @__PURE__ */ v.createElement(g, Je({
    className: Me(!n && r, u),
    style: W(W({}, S), f)
  }, C, b, {
    ref: t
  }), w);
  return a && (O = /* @__PURE__ */ v.createElement(An, {
    onResize: function(N) {
      var x = N.offsetWidth;
      E(x);
    },
    disabled: s
  }, O)), O;
}
var Zi = /* @__PURE__ */ v.forwardRef(OR);
Zi.displayName = "Item";
function _R(e) {
  if (typeof MessageChannel > "u")
    Bt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function xR() {
  var e = v.useRef(null), t = function(n) {
    e.current || (e.current = [], _R(function() {
      G0(function() {
        e.current.forEach(function(i) {
          i();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Hi(e, t) {
  var r = v.useState(t), n = G(r, 2), i = n[0], o = n[1], a = xr(function(s) {
    e(function() {
      o(s);
    });
  });
  return [i, a];
}
var ka = /* @__PURE__ */ Te.createContext(null), RR = ["component"], PR = ["className"], TR = ["className"], NR = function(t, r) {
  var n = v.useContext(ka);
  if (!n) {
    var i = t.component, o = i === void 0 ? "div" : i, a = Pt(t, RR);
    return /* @__PURE__ */ v.createElement(o, Je({}, a, {
      ref: r
    }));
  }
  var s = n.className, c = Pt(n, PR), l = t.className, u = Pt(t, TR);
  return /* @__PURE__ */ v.createElement(ka.Provider, {
    value: null
  }, /* @__PURE__ */ v.createElement(Zi, Je({
    ref: r,
    className: Me(s, l)
  }, c, u)));
}, Yg = /* @__PURE__ */ v.forwardRef(NR);
Yg.displayName = "RawItem";
var MR = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Xg = "responsive", Jg = "invalidate";
function IR(e) {
  return "+ ".concat(e.length, " ...");
}
function DR(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, i = e.data, o = i === void 0 ? [] : i, a = e.renderItem, s = e.renderRawItem, c = e.itemKey, l = e.itemWidth, u = l === void 0 ? 10 : l, f = e.ssr, d = e.style, h = e.className, m = e.maxCount, p = e.renderRest, g = e.renderRawRest, b = e.suffix, y = e.component, E = y === void 0 ? "div" : y, w = e.itemComponent, S = e.onVisibleChange, C = Pt(e, MR), O = f === "full", T = xR(), N = Hi(T, null), x = G(N, 2), L = x[0], R = x[1], _ = L || 0, P = Hi(T, /* @__PURE__ */ new Map()), I = G(P, 2), A = I[0], D = I[1], B = Hi(T, 0), Q = G(B, 2), ie = Q[0], ce = Q[1], F = Hi(T, 0), H = G(F, 2), j = H[0], Y = H[1], M = Hi(T, 0), q = G(M, 2), $ = q[0], J = q[1], re = lr(null), X = G(re, 2), k = X[0], ee = X[1], z = lr(null), te = G(z, 2), fe = te[0], se = te[1], he = v.useMemo(function() {
    return fe === null && O ? Number.MAX_SAFE_INTEGER : fe || 0;
  }, [fe, L]), ge = lr(!1), ne = G(ge, 2), de = ne[0], Ne = ne[1], Ie = "".concat(n, "-item"), oe = Math.max(ie, j), pe = m === Xg, Ze = o.length && pe, it = m === Jg, et = Ze || typeof m == "number" && o.length > m, We = fi(function() {
    var we = o;
    return Ze ? L === null && O ? we = o : we = o.slice(0, Math.min(o.length, _ / u)) : typeof m == "number" && (we = o.slice(0, m)), we;
  }, [o, u, L, m, Ze]), Ue = fi(function() {
    return Ze ? o.slice(he + 1) : o.slice(We.length);
  }, [o, We, Ze, he]), ot = hc(function(we, K) {
    var ae;
    return typeof c == "function" ? c(we) : (ae = c && we?.[c]) !== null && ae !== void 0 ? ae : K;
  }, [c]), Kt = hc(a || function(we) {
    return we;
  }, [a]);
  function tt(we, K, ae) {
    fe === we && (K === void 0 || K === k) || (se(we), ae || (Ne(we < o.length - 1), S?.(we)), K !== void 0 && ee(K));
  }
  function ve(we, K) {
    R(K.clientWidth);
  }
  function Se(we, K) {
    D(function(ae) {
      var ue = new Map(ae);
      return K === null ? ue.delete(we) : ue.set(we, K), ue;
    });
  }
  function Ve(we, K) {
    Y(K), ce(j);
  }
  function vt(we, K) {
    J(K);
  }
  function Fe(we) {
    return A.get(ot(We[we], we));
  }
  Ot(function() {
    if (_ && typeof oe == "number" && We) {
      var we = $, K = We.length, ae = K - 1;
      if (!K) {
        tt(0, null);
        return;
      }
      for (var ue = 0; ue < K; ue += 1) {
        var ye = Fe(ue);
        if (O && (ye = ye || 0), ye === void 0) {
          tt(ue - 1, void 0, !0);
          break;
        }
        if (we += ye, // Only one means `totalWidth` is the final width
        ae === 0 && we <= _ || // Last two width will be the final width
        ue === ae - 1 && we + Fe(ae) <= _) {
          tt(ae, null);
          break;
        } else if (we + oe > _) {
          tt(ue - 1, we - ye - $ + j);
          break;
        }
      }
      b && Fe(0) + $ > _ && ee(null);
    }
  }, [_, A, j, $, ot, We]);
  var qe = de && !!Ue.length, Oe = {};
  k !== null && Ze && (Oe = {
    position: "absolute",
    left: k,
    top: 0
  });
  var ct = {
    prefixCls: Ie,
    responsive: Ze,
    component: w,
    invalidate: it
  }, _t = s ? function(we, K) {
    var ae = ot(we, K);
    return /* @__PURE__ */ v.createElement(ka.Provider, {
      key: ae,
      value: W(W({}, ct), {}, {
        order: K,
        item: we,
        itemKey: ae,
        registerSize: Se,
        display: K <= he
      })
    }, s(we, K));
  } : function(we, K) {
    var ae = ot(we, K);
    return /* @__PURE__ */ v.createElement(Zi, Je({}, ct, {
      order: K,
      key: ae,
      item: we,
      renderItem: Kt,
      itemKey: ae,
      registerSize: Se,
      display: K <= he
    }));
  }, xe, ze = {
    order: qe ? he : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ie, "-rest"),
    registerSize: Ve,
    display: qe
  };
  if (g)
    g && (xe = /* @__PURE__ */ v.createElement(ka.Provider, {
      value: W(W({}, ct), ze)
    }, g(Ue)));
  else {
    var lt = p || IR;
    xe = /* @__PURE__ */ v.createElement(Zi, Je({}, ct, ze), typeof lt == "function" ? lt(Ue) : lt);
  }
  var ht = /* @__PURE__ */ v.createElement(E, Je({
    className: Me(!it && n, h),
    style: d,
    ref: t
  }, C), We.map(_t), et ? xe : null, b && /* @__PURE__ */ v.createElement(Zi, Je({}, ct, {
    responsive: pe,
    responsiveDisabled: !Ze,
    order: he,
    className: "".concat(Ie, "-suffix"),
    registerSize: vt,
    display: !0,
    style: Oe
  }), b));
  return pe && (ht = /* @__PURE__ */ v.createElement(An, {
    onResize: ve,
    disabled: !Ze
  }, ht)), ht;
}
var To = /* @__PURE__ */ v.forwardRef(DR);
To.displayName = "Overflow";
To.Item = Yg;
To.RESPONSIVE = Xg;
To.INVALIDATE = Jg;
var ps = function(t) {
  var r = t.className, n = t.customizeIcon, i = t.customizeIconProps, o = t.onMouseDown, a = t.onClick, s = t.children, c;
  return typeof n == "function" ? c = n(i) : c = n, /* @__PURE__ */ v.createElement("span", {
    className: r,
    onMouseDown: function(u) {
      u.preventDefault(), o && o(u);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: a,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ v.createElement("span", {
    className: Me(r.split(/\s+/).map(function(l) {
      return "".concat(l, "-icon");
    }))
  }, s));
}, AR = function(t, r) {
  var n, i, o = t.prefixCls, a = t.id, s = t.inputElement, c = t.disabled, l = t.tabIndex, u = t.autoFocus, f = t.autoComplete, d = t.editable, h = t.activeDescendantId, m = t.value, p = t.maxLength, g = t.onKeyDown, b = t.onMouseDown, y = t.onChange, E = t.onPaste, w = t.onCompositionStart, S = t.onCompositionEnd, C = t.open, O = t.attrs, T = s || /* @__PURE__ */ v.createElement("input", null), N = T, x = N.ref, L = N.props, R = L.onKeyDown, _ = L.onChange, P = L.onMouseDown, I = L.onCompositionStart, A = L.onCompositionEnd, D = L.style;
  return oo(!("maxLength" in T.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), T = /* @__PURE__ */ v.cloneElement(T, W(W(W({
    type: "search"
  }, L), {}, {
    // Override over origin props
    id: a,
    ref: _i(r, x),
    disabled: c,
    tabIndex: l,
    autoComplete: f || "off",
    autoFocus: u,
    className: Me("".concat(o, "-selection-search-input"), (n = T) === null || n === void 0 || (i = n.props) === null || i === void 0 ? void 0 : i.className),
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
      b(Q), P && P(Q);
    },
    onChange: function(Q) {
      y(Q), _ && _(Q);
    },
    onCompositionStart: function(Q) {
      w(Q), I && I(Q);
    },
    onCompositionEnd: function(Q) {
      S(Q), A && A(Q);
    },
    onPaste: E
  })), T;
}, Yu = /* @__PURE__ */ v.forwardRef(AR);
Yu.displayName = "Input";
function Xu(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var FR = typeof window < "u" && window.document && window.document.documentElement, $R = process.env.NODE_ENV !== "test" && FR;
function kR(e) {
  return e != null;
}
function kh(e) {
  return ["string", "number"].includes(Be(e));
}
function Zg(e) {
  var t = void 0;
  return e && (kh(e.title) ? t = e.title.toString() : kh(e.label) && (t = e.label.toString())), t;
}
function LR(e, t) {
  $R ? v.useLayoutEffect(e, t) : v.useEffect(e, t);
}
function jR(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var Lh = function(t) {
  t.preventDefault(), t.stopPropagation();
}, VR = function(t) {
  var r = t.id, n = t.prefixCls, i = t.values, o = t.open, a = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, l = t.placeholder, u = t.disabled, f = t.mode, d = t.showSearch, h = t.autoFocus, m = t.autoComplete, p = t.activeDescendantId, g = t.tabIndex, b = t.removeIcon, y = t.maxTagCount, E = t.maxTagTextLength, w = t.maxTagPlaceholder, S = w === void 0 ? function(ee) {
    return "+ ".concat(ee.length, " ...");
  } : w, C = t.tagRender, O = t.onToggleOpen, T = t.onRemove, N = t.onInputChange, x = t.onInputPaste, L = t.onInputKeyDown, R = t.onInputMouseDown, _ = t.onInputCompositionStart, P = t.onInputCompositionEnd, I = v.useRef(null), A = lr(0), D = G(A, 2), B = D[0], Q = D[1], ie = lr(!1), ce = G(ie, 2), F = ce[0], H = ce[1], j = "".concat(n, "-selection"), Y = o || f === "multiple" && s === !1 || f === "tags" ? a : "", M = f === "tags" || f === "multiple" && s === !1 || d && (o || F);
  LR(function() {
    Q(I.current.scrollWidth);
  }, [Y]);
  function q(ee, z, te, fe, se) {
    return /* @__PURE__ */ v.createElement("span", {
      className: Me("".concat(j, "-item"), be({}, "".concat(j, "-item-disabled"), te)),
      title: Zg(ee)
    }, /* @__PURE__ */ v.createElement("span", {
      className: "".concat(j, "-item-content")
    }, z), fe && /* @__PURE__ */ v.createElement(ps, {
      className: "".concat(j, "-item-remove"),
      onMouseDown: Lh,
      onClick: se,
      customizeIcon: b
    }, "×"));
  }
  function $(ee, z, te, fe, se) {
    var he = function(ne) {
      Lh(ne), O(!o);
    };
    return /* @__PURE__ */ v.createElement("span", {
      onMouseDown: he
    }, C({
      label: z,
      value: ee,
      disabled: te,
      closable: fe,
      onClose: se
    }));
  }
  function J(ee) {
    var z = ee.disabled, te = ee.label, fe = ee.value, se = !u && !z, he = te;
    if (typeof E == "number" && (typeof te == "string" || typeof te == "number")) {
      var ge = String(he);
      ge.length > E && (he = "".concat(ge.slice(0, E), "..."));
    }
    var ne = function(Ne) {
      Ne && Ne.stopPropagation(), T(ee);
    };
    return typeof C == "function" ? $(fe, he, z, se, ne) : q(ee, he, z, se, ne);
  }
  function re(ee) {
    var z = typeof S == "function" ? S(ee) : S;
    return q({
      title: z
    }, z, !1);
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
  }, /* @__PURE__ */ v.createElement(Yu, {
    ref: c,
    open: o,
    prefixCls: n,
    id: r,
    inputElement: null,
    disabled: u,
    autoFocus: h,
    autoComplete: m,
    editable: M,
    activeDescendantId: p,
    value: Y,
    onKeyDown: L,
    onMouseDown: R,
    onChange: N,
    onPaste: x,
    onCompositionStart: _,
    onCompositionEnd: P,
    tabIndex: g,
    attrs: Da(t, !0)
  }), /* @__PURE__ */ v.createElement("span", {
    ref: I,
    className: "".concat(j, "-search-mirror"),
    "aria-hidden": !0
  }, Y, " ")), k = /* @__PURE__ */ v.createElement(To, {
    prefixCls: "".concat(j, "-overflow"),
    data: i,
    renderItem: J,
    renderRest: re,
    suffix: X,
    itemKey: jR,
    maxCount: y
  });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, k, !i.length && !Y && /* @__PURE__ */ v.createElement("span", {
    className: "".concat(j, "-placeholder")
  }, l));
}, zR = function(t) {
  var r = t.inputElement, n = t.prefixCls, i = t.id, o = t.inputRef, a = t.disabled, s = t.autoFocus, c = t.autoComplete, l = t.activeDescendantId, u = t.mode, f = t.open, d = t.values, h = t.placeholder, m = t.tabIndex, p = t.showSearch, g = t.searchValue, b = t.activeValue, y = t.maxLength, E = t.onInputKeyDown, w = t.onInputMouseDown, S = t.onInputChange, C = t.onInputPaste, O = t.onInputCompositionStart, T = t.onInputCompositionEnd, N = t.title, x = v.useState(!1), L = G(x, 2), R = L[0], _ = L[1], P = u === "combobox", I = P || p, A = d[0], D = g || "";
  P && b && !R && (D = b), v.useEffect(function() {
    P && _(!1);
  }, [P, b]);
  var B = u !== "combobox" && !f && !p ? !1 : !!D, Q = N === void 0 ? Zg(A) : N, ie = function() {
    if (A)
      return null;
    var F = B ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ v.createElement("span", {
      className: "".concat(n, "-selection-placeholder"),
      style: F
    }, h);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-search")
  }, /* @__PURE__ */ v.createElement(Yu, {
    ref: o,
    prefixCls: n,
    id: i,
    open: f,
    inputElement: r,
    disabled: a,
    autoFocus: s,
    autoComplete: c,
    editable: I,
    activeDescendantId: l,
    value: D,
    onKeyDown: E,
    onMouseDown: w,
    onChange: function(F) {
      _(!0), S(F);
    },
    onPaste: C,
    onCompositionStart: O,
    onCompositionEnd: T,
    tabIndex: m,
    attrs: Da(t, !0),
    maxLength: P ? y : void 0
  })), !P && A ? /* @__PURE__ */ v.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: Q,
    style: B ? {
      visibility: "hidden"
    } : void 0
  }, A.label) : null, ie());
};
function HR(e) {
  return ![
    // System function button
    Z.ESC,
    Z.SHIFT,
    Z.BACKSPACE,
    Z.TAB,
    Z.WIN_KEY,
    Z.ALT,
    Z.META,
    Z.WIN_KEY_RIGHT,
    Z.CTRL,
    Z.SEMICOLON,
    Z.EQUALS,
    Z.CAPS_LOCK,
    Z.CONTEXT_MENU,
    // F1-F12
    Z.F1,
    Z.F2,
    Z.F3,
    Z.F4,
    Z.F5,
    Z.F6,
    Z.F7,
    Z.F8,
    Z.F9,
    Z.F10,
    Z.F11,
    Z.F12
  ].includes(e);
}
var BR = function(t, r) {
  var n = Ae(null), i = Ae(!1), o = t.prefixCls, a = t.open, s = t.mode, c = t.showSearch, l = t.tokenWithEnter, u = t.autoClearSearchValue, f = t.onSearch, d = t.onSearchSubmit, h = t.onToggleOpen, m = t.onInputKeyDown, p = t.domRef;
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
  var g = Kg(0), b = G(g, 2), y = b[0], E = b[1], w = function(D) {
    var B = D.which;
    (B === Z.UP || B === Z.DOWN) && D.preventDefault(), m && m(D), B === Z.ENTER && s === "tags" && !i.current && !a && d?.(D.target.value), HR(B) && h(!0);
  }, S = function() {
    E(!0);
  }, C = Ae(null), O = function(D) {
    f(D, !0, i.current) !== !1 && h(!0);
  }, T = function() {
    i.current = !0;
  }, N = function(D) {
    i.current = !1, s !== "combobox" && O(D.target.value);
  }, x = function(D) {
    var B = D.target.value;
    if (l && C.current && /[\r\n]/.test(C.current)) {
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
    D.target !== n.current && !B && s !== "combobox" && D.preventDefault(), (s !== "combobox" && (!c || !B) || !a) && (a && u !== !1 && f("", !0, !1), h());
  }, P = {
    inputRef: n,
    onInputKeyDown: w,
    onInputMouseDown: S,
    onInputChange: x,
    onInputPaste: L,
    onInputCompositionStart: T,
    onInputCompositionEnd: N
  }, I = s === "multiple" || s === "tags" ? /* @__PURE__ */ v.createElement(VR, Je({}, t, P)) : /* @__PURE__ */ v.createElement(zR, Je({}, t, P));
  return /* @__PURE__ */ v.createElement("div", {
    ref: p,
    className: "".concat(o, "-selector"),
    onClick: R,
    onMouseDown: _
  }, I);
}, e0 = /* @__PURE__ */ v.forwardRef(BR);
e0.displayName = "Selector";
function t0(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function WR(e) {
  return t0(e) !== e?.ownerDocument;
}
function Dl(e) {
  return WR(e) ? t0(e) : null;
}
var jh = /* @__PURE__ */ v.createContext(null);
function Vh(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function UR(e, t, r, n) {
  return v.useMemo(function() {
    var i = Vh(r ?? t), o = Vh(n ?? t), a = new Set(i), s = new Set(o);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
function qR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function QR(e, t, r, n) {
  for (var i = r.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
    var s, c = o[a];
    if (qR((s = e[c]) === null || s === void 0 ? void 0 : s.points, i, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function zh(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function No(e) {
  return e.ownerDocument.defaultView;
}
function Al(e) {
  for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var i = No(r).getComputedStyle(r), o = i.overflowX, a = i.overflowY, s = i.overflow;
    [o, a, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function fo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Bi(e) {
  return fo(parseFloat(e), 0);
}
function Hh(e, t) {
  var r = W({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement)) {
      var i = No(n).getComputedStyle(n), o = i.overflow, a = i.overflowClipMargin, s = i.borderTopWidth, c = i.borderBottomWidth, l = i.borderLeftWidth, u = i.borderRightWidth, f = n.getBoundingClientRect(), d = n.offsetHeight, h = n.clientHeight, m = n.offsetWidth, p = n.clientWidth, g = Bi(s), b = Bi(c), y = Bi(l), E = Bi(u), w = fo(Math.round(f.width / m * 1e3) / 1e3), S = fo(Math.round(f.height / d * 1e3) / 1e3), C = (m - p - y - E) * w, O = (d - h - g - b) * S, T = g * S, N = b * S, x = y * w, L = E * w, R = 0, _ = 0;
      if (o === "clip") {
        var P = Bi(a);
        R = P * w, _ = P * S;
      }
      var I = f.x + x - R, A = f.y + T - _, D = I + f.width + 2 * R - x - L - C, B = A + f.height + 2 * _ - T - N - O;
      r.left = Math.max(r.left, I), r.top = Math.max(r.top, A), r.right = Math.min(r.right, D), r.bottom = Math.min(r.bottom, B);
    }
  }), r;
}
function Bh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Wh(e, t) {
  var r = t || [], n = G(r, 2), i = n[0], o = n[1];
  return [Bh(e.width, i), Bh(e.height, o)];
}
function Uh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Yn(e, t) {
  var r = t[0], n = t[1], i, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? i = e.x : n === "r" ? i = e.x + e.width : i = e.x + e.width / 2, {
    x: i,
    y: o
  };
}
function Jr(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, i) {
    return i === t ? r[n] || "c" : n;
  }).join("");
}
function GR(e, t, r, n, i, o, a) {
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
    align: i[n] || {}
  }), c = G(s, 2), l = c[0], u = c[1], f = v.useRef(0), d = v.useMemo(function() {
    return t ? Al(t) : [];
  }, [t]), h = v.useRef({}), m = function() {
    h.current = {};
  };
  e || m();
  var p = xr(function() {
    if (t && r && e) {
      let rt = function(Xt, tr) {
        var Jt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te, Vr = R.x + Xt, Ai = R.y + tr, Fi = Vr + j, Mo = Ai + H, ys = Math.max(Vr, Jt.left), bs = Math.max(Ai, Jt.top), Es = Math.min(Fi, Jt.right), Ss = Math.min(Mo, Jt.bottom);
        return Math.max(0, (Es - ys) * (Ss - bs));
      }, Sr = function() {
        Re = R.y + Oe, Ut = Re + H, Tt = R.x + qe, jt = Tt + j;
      };
      var y = t, E = y.style.left, w = y.style.top, S = y.style.right, C = y.style.bottom, O = y.ownerDocument, T = No(y), N = W(W({}, i[n]), o);
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
      var R = y.getBoundingClientRect(), _ = T.getComputedStyle(y), P = _.width, I = _.height, A = O.documentElement, D = A.clientWidth, B = A.clientHeight, Q = A.scrollWidth, ie = A.scrollHeight, ce = A.scrollTop, F = A.scrollLeft, H = R.height, j = R.width, Y = x.height, M = x.width, q = {
        left: 0,
        top: 0,
        right: D,
        bottom: B
      }, $ = {
        left: -F,
        top: -ce,
        right: Q - F,
        bottom: ie - ce
      }, J = N.htmlRegion, re = "visible", X = "visibleFirst";
      J !== "scroll" && J !== X && (J = re);
      var k = J === X, ee = Hh($, d), z = Hh(q, d), te = J === re ? z : ee, fe = k ? z : te;
      y.style.left = "auto", y.style.top = "auto", y.style.right = "0", y.style.bottom = "0";
      var se = y.getBoundingClientRect();
      y.style.left = E, y.style.top = w, y.style.right = S, y.style.bottom = C;
      var he = fo(Math.round(j / parseFloat(P) * 1e3) / 1e3), ge = fo(Math.round(H / parseFloat(I) * 1e3) / 1e3);
      if (he === 0 || ge === 0 || Oa(r) && !_g(r))
        return;
      var ne = N.offset, de = N.targetOffset, Ne = Wh(R, ne), Ie = G(Ne, 2), oe = Ie[0], pe = Ie[1], Ze = Wh(x, de), it = G(Ze, 2), et = it[0], We = it[1];
      x.x -= et, x.y -= We;
      var Ue = N.points || [], ot = G(Ue, 2), Kt = ot[0], tt = ot[1], ve = Uh(tt), Se = Uh(Kt), Ve = Yn(x, ve), vt = Yn(R, Se), Fe = W({}, N), qe = Ve.x - vt.x + oe, Oe = Ve.y - vt.y + pe, ct = rt(qe, Oe), _t = rt(qe, Oe, z), xe = Yn(x, ["t", "l"]), ze = Yn(R, ["t", "l"]), lt = Yn(x, ["b", "r"]), ht = Yn(R, ["b", "r"]), we = N.overflow || {}, K = we.adjustX, ae = we.adjustY, ue = we.shiftX, ye = we.shiftY, $e = function(tr) {
        return typeof tr == "boolean" ? tr : tr >= 0;
      }, Re, Ut, Tt, jt;
      Sr();
      var ft = $e(ae), ir = Se[0] === ve[0];
      if (ft && Se[0] === "t" && (Ut > fe.bottom || h.current.bt)) {
        var qt = Oe;
        ir ? qt -= H - Y : qt = xe.y - ht.y - pe;
        var $r = rt(qe, qt), Ln = rt(qe, qt, z);
        // Of course use larger one
        $r > ct || $r === ct && (!k || // Choose recommend one
        Ln >= _t) ? (h.current.bt = !0, Oe = qt, Fe.points = [Jr(Se, 0), Jr(ve, 0)]) : h.current.bt = !1;
      }
      if (ft && Se[0] === "b" && (Re < fe.top || h.current.tb)) {
        var At = Oe;
        ir ? At += H - Y : At = lt.y - ze.y - pe;
        var er = rt(qe, At), Yt = rt(qe, At, z);
        // Of course use larger one
        er > ct || er === ct && (!k || // Choose recommend one
        Yt >= _t) ? (h.current.tb = !0, Oe = At, Fe.points = [Jr(Se, 0), Jr(ve, 0)]) : h.current.tb = !1;
      }
      var Er = $e(K), jn = Se[1] === ve[1];
      if (Er && Se[1] === "l" && (jt > fe.right || h.current.rl)) {
        var kr = qe;
        jn ? kr -= j - M : kr = xe.x - ht.x - oe;
        var fn = rt(kr, Oe), Vn = rt(kr, Oe, z);
        // Of course use larger one
        fn > ct || fn === ct && (!k || // Choose recommend one
        Vn >= _t) ? (h.current.rl = !0, qe = kr, Fe.points = [Jr(Se, 1), Jr(ve, 1)]) : h.current.rl = !1;
      }
      if (Er && Se[1] === "r" && (Tt < fe.left || h.current.lr)) {
        var Lr = qe;
        jn ? Lr += j - M : Lr = lt.x - ze.x - oe;
        var zn = rt(Lr, Oe), Ni = rt(Lr, Oe, z);
        // Of course use larger one
        zn > ct || zn === ct && (!k || // Choose recommend one
        Ni >= _t) ? (h.current.lr = !0, qe = Lr, Fe.points = [Jr(Se, 1), Jr(ve, 1)]) : h.current.lr = !1;
      }
      Sr();
      var jr = ue === !0 ? 0 : ue;
      typeof jr == "number" && (Tt < z.left && (qe -= Tt - z.left, x.x + M < z.left + jr && (qe += x.x - z.left + M - jr)), jt > z.right && (qe -= jt - z.right, x.x > z.right - jr && (qe += x.x - z.right + jr)));
      var dr = ye === !0 ? 0 : ye;
      typeof dr == "number" && (Re < z.top && (Oe -= Re - z.top + pe, x.y + Y < z.top + dr && (Oe += x.y - z.top + Y - dr)), Ut > z.bottom && (Oe -= Ut - z.bottom - pe, x.y > z.bottom - dr && (Oe += x.y - z.bottom + dr)));
      var Mr = R.x + qe, Ir = Mr + j, Yr = R.y + Oe, Hn = Yr + H, Bn = x.x, Wn = Bn + M, dn = x.y, Mi = dn + Y, Ii = Math.max(Mr, Bn), Di = Math.min(Ir, Wn), hn = (Ii + Di) / 2, vn = hn - Mr, Pe = Math.max(Yr, dn), _e = Math.min(Hn, Mi), xt = (Pe + _e) / 2, Nt = xt - Yr;
      a?.(t, Fe);
      var ut = se.right - R.x - (qe + R.width), St = se.bottom - R.y - (Oe + R.height);
      u({
        ready: !0,
        offsetX: qe / he,
        offsetY: Oe / ge,
        offsetR: ut / he,
        offsetB: St / ge,
        arrowX: vn / he,
        arrowY: Nt / ge,
        scaleX: he,
        scaleY: ge,
        align: Fe
      });
    }
  }), g = function() {
    f.current += 1;
    var E = f.current;
    Promise.resolve().then(function() {
      f.current === E && p();
    });
  }, b = function() {
    u(function(E) {
      return W(W({}, E), {}, {
        ready: !1
      });
    });
  };
  return Ot(b, [n]), Ot(function() {
    e || b();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, g];
}
function KR(e, t, r, n) {
  Ot(function() {
    if (e && t && r) {
      let u = function() {
        n();
      };
      var i = t, o = r, a = Al(i), s = Al(o), c = No(o), l = new Set([c].concat(Ee(a), Ee(s)));
      return l.forEach(function(f) {
        f.addEventListener("scroll", u, {
          passive: !0
        });
      }), c.addEventListener("resize", u, {
        passive: !0
      }), n(), function() {
        l.forEach(function(f) {
          f.removeEventListener("scroll", u), c.removeEventListener("resize", u);
        });
      };
    }
  }, [e, t, r]);
}
function YR(e, t, r, n, i, o, a, s) {
  var c = v.useRef(e), l = v.useRef(!1);
  c.current !== e && (l.current = !0, c.current = e), v.useEffect(function() {
    var u = Bt(function() {
      l.current = !1;
    });
    return function() {
      Bt.cancel(u);
    };
  }, [e]), v.useEffect(function() {
    if (t && n && (!i || o)) {
      var u = function() {
        var x = !1, L = function(P) {
          var I = P.target;
          x = a(I);
        }, R = function(P) {
          var I = P.target;
          !l.current && c.current && !x && !a(I) && s(!1);
        };
        return [L, R];
      }, f = u(), d = G(f, 2), h = d[0], m = d[1], p = u(), g = G(p, 2), b = g[0], y = g[1], E = No(n);
      E.addEventListener("mousedown", h, !0), E.addEventListener("click", m, !0), E.addEventListener("contextmenu", m, !0);
      var w = Dl(r);
      if (w && (w.addEventListener("mousedown", b, !0), w.addEventListener("click", y, !0), w.addEventListener("contextmenu", y, !0)), process.env.NODE_ENV !== "production") {
        var S, C, O = r == null || (S = r.getRootNode) === null || S === void 0 ? void 0 : S.call(r), T = (C = n.getRootNode) === null || C === void 0 ? void 0 : C.call(n);
        ke(O === T, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        E.removeEventListener("mousedown", h, !0), E.removeEventListener("click", m, !0), E.removeEventListener("contextmenu", m, !0), w && (w.removeEventListener("mousedown", b, !0), w.removeEventListener("click", y, !0), w.removeEventListener("contextmenu", y, !0));
      };
    }
  }, [t, r, n, i, o]);
}
function XR(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, i = e.arrowPos, o = n || {}, a = o.className, s = o.content, c = i.x, l = c === void 0 ? 0 : c, u = i.y, f = u === void 0 ? 0 : u, d = v.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var m = r.points[0], p = r.points[1], g = m[0], b = m[1], y = p[0], E = p[1];
    g === y || !["t", "b"].includes(g) ? h.top = f : g === "t" ? h.top = 0 : h.bottom = 0, b === E || !["l", "r"].includes(b) ? h.left = l : b === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ v.createElement("div", {
    ref: d,
    className: Me("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function JR(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, i = e.mask, o = e.motion;
  return i ? /* @__PURE__ */ v.createElement(Co, Je({}, o, {
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
var r0 = /* @__PURE__ */ v.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (r0.displayName = "PopupContent");
var n0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, i = e.prefixCls, o = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.onClick, f = e.mask, d = e.arrow, h = e.arrowPos, m = e.align, p = e.motion, g = e.maskMotion, b = e.forceRender, y = e.getPopupContainer, E = e.autoDestroy, w = e.portal, S = e.zIndex, C = e.onMouseEnter, O = e.onMouseLeave, T = e.onPointerEnter, N = e.ready, x = e.offsetX, L = e.offsetY, R = e.offsetR, _ = e.offsetB, P = e.onAlign, I = e.onPrepare, A = e.stretch, D = e.targetWidth, B = e.targetHeight, Q = typeof r == "function" ? r() : r, ie = c || l, ce = y?.length > 0, F = v.useState(!y || !ce), H = G(F, 2), j = H[0], Y = H[1];
  if (Ot(function() {
    !j && ce && a && Y(!0);
  }, [j, ce, a]), !j)
    return null;
  var M = "auto", q = {
    left: "-1000vw",
    top: "-1000vh",
    right: M,
    bottom: M
  };
  if (N || !c) {
    var $ = m.points, J = m._experimental, re = J?.dynamicInset, X = re && $[0][1] === "r", k = re && $[0][0] === "b";
    X ? (q.right = R, q.left = M) : (q.left = x, q.right = M), k ? (q.bottom = _, q.top = M) : (q.top = L, q.bottom = M);
  }
  var ee = {};
  return A && (A.includes("height") && B ? ee.height = B : A.includes("minHeight") && B && (ee.minHeight = B), A.includes("width") && D ? ee.width = D : A.includes("minWidth") && D && (ee.minWidth = D)), c || (ee.pointerEvents = "none"), /* @__PURE__ */ v.createElement(w, {
    open: b || ie,
    getContainer: y && function() {
      return y(a);
    },
    autoDestroy: E
  }, /* @__PURE__ */ v.createElement(JR, {
    prefixCls: i,
    open: c,
    zIndex: S,
    mask: f,
    motion: g
  }), /* @__PURE__ */ v.createElement(An, {
    onResize: P,
    disabled: !c
  }, function(z) {
    return /* @__PURE__ */ v.createElement(Co, Je({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(i, "-hidden")
    }, p, {
      onAppearPrepare: I,
      onEnterPrepare: I,
      visible: c,
      onVisibleChanged: function(fe) {
        var se;
        p == null || (se = p.onVisibleChanged) === null || se === void 0 || se.call(p, fe), s(fe);
      }
    }), function(te, fe) {
      var se = te.className, he = te.style, ge = Me(i, se, n);
      return /* @__PURE__ */ v.createElement("div", {
        ref: _i(z, t, fe),
        className: ge,
        style: W(W(W(W({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, q), ee), he), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, o),
        onMouseEnter: C,
        onMouseLeave: O,
        onPointerEnter: T,
        onClick: u
      }, d && /* @__PURE__ */ v.createElement(XR, {
        prefixCls: i,
        arrow: d,
        arrowPos: h,
        align: m
      }), /* @__PURE__ */ v.createElement(r0, {
        cache: !c
      }, Q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (n0.displayName = "Popup");
var i0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, i = So(r), o = v.useCallback(function(s) {
    Eu(t, n ? n(s) : s);
  }, [n]), a = Su(o, r.ref);
  return i ? /* @__PURE__ */ v.cloneElement(r, {
    ref: a
  }) : r;
});
process.env.NODE_ENV !== "production" && (i0.displayName = "TriggerWrapper");
var ZR = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function eP() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gu, t = /* @__PURE__ */ v.forwardRef(function(r, n) {
    var i = r.prefixCls, o = i === void 0 ? "rc-trigger-popup" : i, a = r.children, s = r.action, c = s === void 0 ? "hover" : s, l = r.showAction, u = r.hideAction, f = r.popupVisible, d = r.defaultPopupVisible, h = r.onPopupVisibleChange, m = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, b = g === void 0 ? 0.1 : g, y = r.focusDelay, E = r.blurDelay, w = r.mask, S = r.maskClosable, C = S === void 0 ? !0 : S, O = r.getPopupContainer, T = r.forceRender, N = r.autoDestroy, x = r.destroyPopupOnHide, L = r.popup, R = r.popupClassName, _ = r.popupStyle, P = r.popupPlacement, I = r.builtinPlacements, A = I === void 0 ? {} : I, D = r.popupAlign, B = r.zIndex, Q = r.stretch, ie = r.getPopupClassNameFromAlign, ce = r.alignPoint, F = r.onPopupClick, H = r.onPopupAlign, j = r.arrow, Y = r.popupMotion, M = r.maskMotion, q = r.popupTransitionName, $ = r.popupAnimation, J = r.maskTransitionName, re = r.maskAnimation, X = r.className, k = r.getTriggerDOMNode, ee = Pt(r, ZR), z = N || x || !1, te = v.useState(!1), fe = G(te, 2), se = fe[0], he = fe[1];
    Ot(function() {
      he(Qg());
    }, []);
    var ge = v.useRef({}), ne = v.useContext(jh), de = v.useMemo(function() {
      return {
        registerSubPopup: function(De, pt) {
          ge.current[De] = pt, ne?.registerSubPopup(De, pt);
        }
      };
    }, [ne]), Ne = ax(), Ie = v.useState(null), oe = G(Ie, 2), pe = oe[0], Ze = oe[1], it = xr(function(Ce) {
      Oa(Ce) && pe !== Ce && Ze(Ce), ne?.registerSubPopup(Ne, Ce);
    }), et = v.useState(null), We = G(et, 2), Ue = We[0], ot = We[1], Kt = xr(function(Ce) {
      Oa(Ce) && Ue !== Ce && ot(Ce);
    }), tt = v.Children.only(a), ve = tt?.props || {}, Se = {}, Ve = xr(function(Ce) {
      var De, pt, gt = Ue;
      return gt?.contains(Ce) || ((De = Dl(gt)) === null || De === void 0 ? void 0 : De.host) === Ce || Ce === gt || pe?.contains(Ce) || ((pt = Dl(pe)) === null || pt === void 0 ? void 0 : pt.host) === Ce || Ce === pe || Object.values(ge.current).some(function(yt) {
        return yt?.contains(Ce) || Ce === yt;
      });
    }), vt = zh(o, Y, $, q), Fe = zh(o, M, re, J), qe = v.useState(d || !1), Oe = G(qe, 2), ct = Oe[0], _t = Oe[1], xe = f ?? ct, ze = xr(function(Ce) {
      f === void 0 && _t(Ce);
    });
    Ot(function() {
      _t(f || !1);
    }, [f]);
    var lt = v.useRef(xe);
    lt.current = xe;
    var ht = xr(function(Ce) {
      K0(function() {
        xe !== Ce && (ze(Ce), h?.(Ce));
      });
    }), we = v.useRef(), K = function() {
      clearTimeout(we.current);
    }, ae = function(De) {
      var pt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      K(), pt === 0 ? ht(De) : we.current = setTimeout(function() {
        ht(De);
      }, pt * 1e3);
    };
    v.useEffect(function() {
      return K;
    }, []);
    var ue = v.useState(!1), ye = G(ue, 2), $e = ye[0], Re = ye[1];
    Ot(function(Ce) {
      (!Ce || xe) && Re(!0);
    }, [xe]);
    var Ut = v.useState(null), Tt = G(Ut, 2), jt = Tt[0], ft = Tt[1], ir = v.useState([0, 0]), qt = G(ir, 2), $r = qt[0], Ln = qt[1], At = function(De) {
      Ln([De.clientX, De.clientY]);
    }, er = GR(xe, pe, ce ? $r : Ue, P, A, D, H), Yt = G(er, 11), Er = Yt[0], jn = Yt[1], kr = Yt[2], fn = Yt[3], Vn = Yt[4], Lr = Yt[5], zn = Yt[6], Ni = Yt[7], jr = Yt[8], dr = Yt[9], Mr = Yt[10], Ir = xr(function() {
      $e || Mr();
    });
    KR(xe, Ue, pe, Ir), Ot(function() {
      Ir();
    }, [$r, P]), Ot(function() {
      xe && !(A != null && A[P]) && Ir();
    }, [JSON.stringify(D)]);
    var Yr = v.useMemo(function() {
      var Ce = QR(A, o, dr, ce);
      return Me(Ce, ie?.(dr));
    }, [dr, ie, A, o, ce]);
    v.useImperativeHandle(n, function() {
      return {
        forceAlign: Ir
      };
    });
    var Hn = function(De) {
      Re(!1), Mr(), m?.(De);
    }, Bn = function() {
      return new Promise(function(De) {
        ft(function() {
          return De;
        });
      });
    };
    Ot(function() {
      jt && (Mr(), jt(), ft(null));
    }, [jt]);
    var Wn = v.useState(0), dn = G(Wn, 2), Mi = dn[0], Ii = dn[1], Di = v.useState(0), hn = G(Di, 2), vn = hn[0], Pe = hn[1], _e = function(De, pt) {
      if (Ir(), Q) {
        var gt = pt.getBoundingClientRect();
        Ii(gt.width), Pe(gt.height);
      }
    }, xt = UR(se, c, l, u), Nt = G(xt, 2), ut = Nt[0], St = Nt[1];
    function rt(Ce, De, pt, gt) {
      Se[Ce] = function(yt) {
        var Io;
        gt?.(yt), ae(De, pt);
        for (var ws = arguments.length, lf = new Array(ws > 1 ? ws - 1 : 0), Do = 1; Do < ws; Do++)
          lf[Do - 1] = arguments[Do];
        (Io = ve[Ce]) === null || Io === void 0 || Io.call.apply(Io, [ve, yt].concat(lf));
      };
    }
    var Sr = ut.has("click"), Xt = St.has("click") || St.has("contextMenu");
    (Sr || Xt) && (Se.onClick = function(Ce) {
      var De;
      lt.current && Xt ? ae(!1) : !lt.current && Sr && (At(Ce), ae(!0));
      for (var pt = arguments.length, gt = new Array(pt > 1 ? pt - 1 : 0), yt = 1; yt < pt; yt++)
        gt[yt - 1] = arguments[yt];
      (De = ve.onClick) === null || De === void 0 || De.call.apply(De, [ve, Ce].concat(gt));
    }), YR(xe, Xt, Ue, pe, w, C, Ve, ae);
    var tr = ut.has("hover"), Jt = St.has("hover"), Vr, Ai;
    tr && (rt("onMouseEnter", !0, p, function(Ce) {
      At(Ce);
    }), rt("onPointerEnter", !0, p, function(Ce) {
      At(Ce);
    }), Vr = function() {
      (xe || $e) && ae(!0, p);
    }, ce && (Se.onMouseMove = function(Ce) {
      var De;
      (De = ve.onMouseMove) === null || De === void 0 || De.call(ve, Ce);
    })), Jt && (rt("onMouseLeave", !1, b), rt("onPointerLeave", !1, b), Ai = function() {
      ae(!1, b);
    }), ut.has("focus") && rt("onFocus", !0, y), St.has("focus") && rt("onBlur", !1, E), ut.has("contextMenu") && (Se.onContextMenu = function(Ce) {
      var De;
      lt.current && St.has("contextMenu") ? ae(!1) : (At(Ce), ae(!0)), Ce.preventDefault();
      for (var pt = arguments.length, gt = new Array(pt > 1 ? pt - 1 : 0), yt = 1; yt < pt; yt++)
        gt[yt - 1] = arguments[yt];
      (De = ve.onContextMenu) === null || De === void 0 || De.call.apply(De, [ve, Ce].concat(gt));
    }), X && (Se.className = Me(ve.className, X));
    var Fi = W(W({}, ve), Se), Mo = {}, ys = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ys.forEach(function(Ce) {
      ee[Ce] && (Mo[Ce] = function() {
        for (var De, pt = arguments.length, gt = new Array(pt), yt = 0; yt < pt; yt++)
          gt[yt] = arguments[yt];
        (De = Fi[Ce]) === null || De === void 0 || De.call.apply(De, [Fi].concat(gt)), ee[Ce].apply(ee, gt);
      });
    });
    var bs = /* @__PURE__ */ v.cloneElement(tt, W(W({}, Fi), Mo)), Es = {
      x: Lr,
      y: zn
    }, Ss = j ? W({}, j !== !0 ? j : {}) : null;
    return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(An, {
      disabled: !xe,
      ref: Kt,
      onResize: _e
    }, /* @__PURE__ */ v.createElement(i0, {
      getTriggerDOMNode: k
    }, bs)), /* @__PURE__ */ v.createElement(jh.Provider, {
      value: de
    }, /* @__PURE__ */ v.createElement(n0, {
      portal: e,
      ref: it,
      prefixCls: o,
      popup: L,
      className: Me(R, Yr),
      style: _,
      target: Ue,
      onMouseEnter: Vr,
      onMouseLeave: Ai,
      onPointerEnter: Vr,
      zIndex: B,
      open: xe,
      keepDom: $e,
      onClick: F,
      mask: w,
      motion: vt,
      maskMotion: Fe,
      onVisibleChanged: Hn,
      onPrepare: Bn,
      forceRender: T,
      autoDestroy: z,
      getPopupContainer: O,
      align: dr,
      arrow: Ss,
      arrowPos: Es,
      ready: Er,
      offsetX: jn,
      offsetY: kr,
      offsetR: fn,
      offsetB: Vn,
      onAlign: Ir,
      stretch: Q,
      targetWidth: Mi / Ni,
      targetHeight: vn / jr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const tP = eP(Gu);
var rP = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], nP = function(t) {
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
}, iP = function(t, r) {
  var n = t.prefixCls;
  t.disabled;
  var i = t.visible, o = t.children, a = t.popupElement, s = t.containerWidth, c = t.animation, l = t.transitionName, u = t.dropdownStyle, f = t.dropdownClassName, d = t.direction, h = d === void 0 ? "ltr" : d, m = t.placement, p = t.builtinPlacements, g = t.dropdownMatchSelectWidth, b = t.dropdownRender, y = t.dropdownAlign, E = t.getPopupContainer, w = t.empty, S = t.getTriggerDOMNode, C = t.onPopupVisibleChange, O = t.onPopupMouseEnter, T = Pt(t, rP), N = "".concat(n, "-dropdown"), x = a;
  b && (x = b(a));
  var L = v.useMemo(function() {
    return p || nP(g);
  }, [p, g]), R = c ? "".concat(N, "-").concat(c) : l, _ = v.useRef(null);
  v.useImperativeHandle(r, function() {
    return {
      getPopupElement: function() {
        return _.current;
      }
    };
  });
  var P = W({
    minWidth: s
  }, u);
  return typeof g == "number" ? P.width = g : g && (P.width = s), /* @__PURE__ */ v.createElement(tP, Je({}, T, {
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
    popupVisible: i,
    getPopupContainer: E,
    popupClassName: Me(f, be({}, "".concat(N, "-empty"), w)),
    popupStyle: P,
    getTriggerDOMNode: S,
    onPopupVisibleChange: C
  }), o);
}, o0 = /* @__PURE__ */ v.forwardRef(iP);
o0.displayName = "SelectTrigger";
function qh(e, t) {
  var r = e.key, n;
  return "value" in e && (n = e.value), r ?? (n !== void 0 ? n : "rc-index-key-".concat(t));
}
function a0(e, t) {
  var r = e || {}, n = r.label, i = r.value, o = r.options, a = r.groupLabel, s = n || (t ? "children" : "label");
  return {
    label: s,
    value: i || "value",
    options: o || "options",
    groupLabel: a || s
  };
}
function oP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fieldNames, n = t.childrenAsData, i = [], o = a0(r, !1), a = o.label, s = o.value, c = o.options, l = o.groupLabel;
  function u(f, d) {
    f.forEach(function(h) {
      if (d || !(c in h)) {
        var m = h[s];
        i.push({
          key: qh(h, i.length),
          groupOption: d,
          data: h,
          label: h[a],
          value: m
        });
      } else {
        var p = h[l];
        p === void 0 && n && (p = h.label), i.push({
          key: qh(h, i.length),
          group: !0,
          data: h,
          label: p
        }), u(h[c], !0);
      }
    });
  }
  return u(e, !1), i;
}
function Fl(e) {
  var t = W({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return ke(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function aP(e, t) {
  if (!t || !t.length)
    return null;
  var r = !1;
  function n(o, a) {
    var s = hm(a), c = s[0], l = s.slice(1);
    if (!c)
      return [o];
    var u = o.split(c);
    return r = r || u.length > 1, u.reduce(function(f, d) {
      return [].concat(Ee(f), Ee(n(d, l)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var i = n(e, t);
  return r ? i : null;
}
function sP(e, t, r, n, i) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, a = arguments.length > 6 ? arguments[6] : void 0, s = arguments.length > 7 ? arguments[7] : void 0, c = Te.useMemo(function() {
    if (Be(n) === "object")
      return n.clearIcon;
    if (i)
      return i;
  }, [n, i]), l = Te.useMemo(function() {
    return !!(!o && n && (r.length || a) && !(s === "combobox" && a === ""));
  }, [n, o, r.length, a, s]);
  return {
    allowClear: l,
    clearIcon: /* @__PURE__ */ Te.createElement(ps, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var cP = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], lP = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function La(e) {
  return e === "tags" || e === "multiple";
}
var s0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r, n, i = e.id, o = e.prefixCls, a = e.className, s = e.showSearch, c = e.tagRender, l = e.direction, u = e.omitDomProps, f = e.displayValues, d = e.onDisplayValuesChange, h = e.emptyOptions, m = e.notFoundContent, p = m === void 0 ? "Not Found" : m, g = e.onClear, b = e.mode, y = e.disabled, E = e.loading, w = e.getInputElement, S = e.getRawInputElement, C = e.open, O = e.defaultOpen, T = e.onDropdownVisibleChange, N = e.activeValue, x = e.onActiveValueChange, L = e.activeDescendantId, R = e.searchValue, _ = e.autoClearSearchValue, P = e.onSearch, I = e.onSearchSplit, A = e.tokenSeparators, D = e.allowClear, B = e.suffixIcon, Q = e.clearIcon, ie = e.OptionList, ce = e.animation, F = e.transitionName, H = e.dropdownStyle, j = e.dropdownClassName, Y = e.dropdownMatchSelectWidth, M = e.dropdownRender, q = e.dropdownAlign, $ = e.placement, J = e.builtinPlacements, re = e.getPopupContainer, X = e.showAction, k = X === void 0 ? [] : X, ee = e.onFocus, z = e.onBlur, te = e.onKeyUp, fe = e.onKeyDown, se = e.onMouseDown, he = Pt(e, cP), ge = La(b), ne = (s !== void 0 ? s : ge) || b === "combobox", de = W({}, he);
  lP.forEach(function(Pe) {
    delete de[Pe];
  }), u?.forEach(function(Pe) {
    delete de[Pe];
  });
  var Ne = v.useState(!1), Ie = G(Ne, 2), oe = Ie[0], pe = Ie[1];
  v.useEffect(function() {
    pe(Qg());
  }, []);
  var Ze = v.useRef(null), it = v.useRef(null), et = v.useRef(null), We = v.useRef(null), Ue = v.useRef(null), ot = SR(), Kt = G(ot, 3), tt = Kt[0], ve = Kt[1], Se = Kt[2];
  v.useImperativeHandle(t, function() {
    var Pe, _e;
    return {
      focus: (Pe = We.current) === null || Pe === void 0 ? void 0 : Pe.focus,
      blur: (_e = We.current) === null || _e === void 0 ? void 0 : _e.blur,
      scrollTo: function(Nt) {
        var ut;
        return (ut = Ue.current) === null || ut === void 0 ? void 0 : ut.scrollTo(Nt);
      }
    };
  });
  var Ve = v.useMemo(function() {
    var Pe;
    if (b !== "combobox")
      return R;
    var _e = (Pe = f[0]) === null || Pe === void 0 ? void 0 : Pe.value;
    return typeof _e == "string" || typeof _e == "number" ? String(_e) : "";
  }, [R, b, f]), vt = b === "combobox" && typeof w == "function" && w() || null, Fe = typeof S == "function" && S(), qe = Su(it, Fe == null || (r = Fe.props) === null || r === void 0 ? void 0 : r.ref), Oe = v.useState(!1), ct = G(Oe, 2), _t = ct[0], xe = ct[1];
  Ot(function() {
    xe(!0);
  }, []);
  var ze = Na(!1, {
    defaultValue: O,
    value: C
  }), lt = G(ze, 2), ht = lt[0], we = lt[1], K = _t ? ht : !1, ae = !p && h;
  (y || ae && K && b === "combobox") && (K = !1);
  var ue = ae ? !1 : K, ye = v.useCallback(function(Pe) {
    var _e = Pe !== void 0 ? Pe : !K;
    y || (we(_e), K !== _e && T?.(_e));
  }, [y, K, we, T]), $e = v.useMemo(function() {
    return (A || []).some(function(Pe) {
      return [`
`, `\r
`].includes(Pe);
    });
  }, [A]), Re = function(_e, xt, Nt) {
    var ut = !0, St = _e;
    x?.(null);
    var rt = Nt ? null : aP(_e, A);
    return b !== "combobox" && rt && (St = "", I?.(rt), ye(!1), ut = !1), P && Ve !== St && P(St, {
      source: xt ? "typing" : "effect"
    }), ut;
  }, Ut = function(_e) {
    !_e || !_e.trim() || P(_e, {
      source: "submit"
    });
  };
  v.useEffect(function() {
    !K && !ge && b !== "combobox" && Re("", !1, !1);
  }, [K]), v.useEffect(function() {
    ht && y && we(!1), y && ve(!1);
  }, [y]);
  var Tt = Kg(), jt = G(Tt, 2), ft = jt[0], ir = jt[1], qt = function(_e) {
    var xt = ft(), Nt = _e.which;
    if (Nt === Z.ENTER && (b !== "combobox" && _e.preventDefault(), K || ye(!0)), ir(!!Ve), Nt === Z.BACKSPACE && !xt && ge && !Ve && f.length) {
      for (var ut = Ee(f), St = null, rt = ut.length - 1; rt >= 0; rt -= 1) {
        var Sr = ut[rt];
        if (!Sr.disabled) {
          ut.splice(rt, 1), St = Sr;
          break;
        }
      }
      St && d(ut, {
        type: "remove",
        values: [St]
      });
    }
    for (var Xt = arguments.length, tr = new Array(Xt > 1 ? Xt - 1 : 0), Jt = 1; Jt < Xt; Jt++)
      tr[Jt - 1] = arguments[Jt];
    if (K && Ue.current) {
      var Vr;
      (Vr = Ue.current).onKeyDown.apply(Vr, [_e].concat(tr));
    }
    fe?.apply(void 0, [_e].concat(tr));
  }, $r = function(_e) {
    for (var xt = arguments.length, Nt = new Array(xt > 1 ? xt - 1 : 0), ut = 1; ut < xt; ut++)
      Nt[ut - 1] = arguments[ut];
    if (K && Ue.current) {
      var St;
      (St = Ue.current).onKeyUp.apply(St, [_e].concat(Nt));
    }
    te?.apply(void 0, [_e].concat(Nt));
  }, Ln = function(_e) {
    var xt = f.filter(function(Nt) {
      return Nt !== _e;
    });
    d(xt, {
      type: "remove",
      values: [_e]
    });
  }, At = v.useRef(!1), er = function() {
    ve(!0), y || (ee && !At.current && ee.apply(void 0, arguments), k.includes("focus") && ye(!0)), At.current = !0;
  }, Yt = function() {
    ve(!1, function() {
      At.current = !1, ye(!1);
    }), !y && (Ve && (b === "tags" ? P(Ve, {
      source: "submit"
    }) : b === "multiple" && P("", {
      source: "blur"
    })), z && z.apply(void 0, arguments));
  }, Er = [];
  v.useEffect(function() {
    return function() {
      Er.forEach(function(Pe) {
        return clearTimeout(Pe);
      }), Er.splice(0, Er.length);
    };
  }, []);
  var jn = function(_e) {
    var xt, Nt = _e.target, ut = (xt = et.current) === null || xt === void 0 ? void 0 : xt.getPopupElement();
    if (ut && ut.contains(Nt)) {
      var St = setTimeout(function() {
        var tr = Er.indexOf(St);
        if (tr !== -1 && Er.splice(tr, 1), Se(), !oe && !ut.contains(document.activeElement)) {
          var Jt;
          (Jt = We.current) === null || Jt === void 0 || Jt.focus();
        }
      });
      Er.push(St);
    }
    for (var rt = arguments.length, Sr = new Array(rt > 1 ? rt - 1 : 0), Xt = 1; Xt < rt; Xt++)
      Sr[Xt - 1] = arguments[Xt];
    se?.apply(void 0, [_e].concat(Sr));
  }, kr = v.useState(null), fn = G(kr, 2), Vn = fn[0], Lr = fn[1], zn = v.useState({}), Ni = G(zn, 2), jr = Ni[1];
  function dr() {
    jr({});
  }
  Ot(function() {
    if (ue) {
      var Pe, _e = Math.ceil((Pe = Ze.current) === null || Pe === void 0 ? void 0 : Pe.getBoundingClientRect().width);
      Vn !== _e && !Number.isNaN(_e) && Lr(_e);
    }
  }, [ue]);
  var Mr;
  Fe && (Mr = function(_e) {
    ye(_e);
  }), wR(function() {
    var Pe;
    return [Ze.current, (Pe = et.current) === null || Pe === void 0 ? void 0 : Pe.getPopupElement()];
  }, ue, ye, !!Fe);
  var Ir = v.useMemo(function() {
    return W(W({}, e), {}, {
      notFoundContent: p,
      open: K,
      triggerOpen: ue,
      id: i,
      showSearch: ne,
      multiple: ge,
      toggleOpen: ye
    });
  }, [e, p, ue, K, i, ne, ge, ye]), Yr = !!B || E, Hn;
  Yr && (Hn = /* @__PURE__ */ v.createElement(ps, {
    className: Me("".concat(o, "-arrow"), be({}, "".concat(o, "-arrow-loading"), E)),
    customizeIcon: B,
    customizeIconProps: {
      loading: E,
      searchValue: Ve,
      open: K,
      focused: tt,
      showSearch: ne
    }
  })), process.env.NODE_ENV !== "production" && ke(!e.clearIcon, "`clearIcon` will be removed in future. Please use `allowClear` instead.");
  var Bn = function() {
    var _e;
    g?.(), (_e = We.current) === null || _e === void 0 || _e.focus(), d([], {
      type: "clear",
      values: f
    }), Re("", !1, !1);
  }, Wn = sP(o, Bn, f, D, Q, y, Ve, b), dn = Wn.allowClear, Mi = Wn.clearIcon, Ii = /* @__PURE__ */ v.createElement(ie, {
    ref: Ue
  }), Di = Me(o, a, (n = {}, be(n, "".concat(o, "-focused"), tt), be(n, "".concat(o, "-multiple"), ge), be(n, "".concat(o, "-single"), !ge), be(n, "".concat(o, "-allow-clear"), D), be(n, "".concat(o, "-show-arrow"), Yr), be(n, "".concat(o, "-disabled"), y), be(n, "".concat(o, "-loading"), E), be(n, "".concat(o, "-open"), K), be(n, "".concat(o, "-customize-input"), vt), be(n, "".concat(o, "-show-search"), ne), n)), hn = /* @__PURE__ */ v.createElement(o0, {
    ref: et,
    disabled: y,
    prefixCls: o,
    visible: ue,
    popupElement: Ii,
    containerWidth: Vn,
    animation: ce,
    transitionName: F,
    dropdownStyle: H,
    dropdownClassName: j,
    direction: l,
    dropdownMatchSelectWidth: Y,
    dropdownRender: M,
    dropdownAlign: q,
    placement: $,
    builtinPlacements: J,
    getPopupContainer: re,
    empty: h,
    getTriggerDOMNode: function() {
      return it.current;
    },
    onPopupVisibleChange: Mr,
    onPopupMouseEnter: dr
  }, Fe ? /* @__PURE__ */ v.cloneElement(Fe, {
    ref: qe
  }) : /* @__PURE__ */ v.createElement(e0, Je({}, e, {
    domRef: it,
    prefixCls: o,
    inputElement: vt,
    ref: We,
    id: i,
    showSearch: ne,
    autoClearSearchValue: _,
    mode: b,
    activeDescendantId: L,
    tagRender: c,
    values: f,
    open: K,
    onToggleOpen: ye,
    activeValue: N,
    searchValue: Ve,
    onSearch: Re,
    onSearchSubmit: Ut,
    onRemove: Ln,
    tokenWithEnter: $e
  }))), vn;
  return Fe ? vn = hn : vn = /* @__PURE__ */ v.createElement("div", Je({
    className: Di
  }, de, {
    ref: Ze,
    onMouseDown: jn,
    onKeyDown: qt,
    onKeyUp: $r,
    onFocus: er,
    onBlur: Yt
  }), tt && !K && /* @__PURE__ */ v.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Pe) {
    var _e = Pe.label, xt = Pe.value;
    return ["number", "string"].includes(Be(_e)) ? _e : xt;
  }).join(", "))), hn, Hn, dn && Mi), /* @__PURE__ */ v.createElement(Gg.Provider, {
    value: Ir
  }, vn);
});
process.env.NODE_ENV !== "production" && (s0.displayName = "BaseSelect");
const uP = function(e, t) {
  var r = v.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), n = v.useMemo(function() {
    var o = r.current, a = o.values, s = o.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var d;
        return W(W({}, f), {}, {
          label: (d = a.get(f.value)) === null || d === void 0 ? void 0 : d.label
        });
      }
      return f;
    }), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      l.set(f.value, f), u.set(f.value, t.get(f.value) || s.get(f.value));
    }), r.current.values = l, r.current.options = u, c;
  }, [e, t]), i = v.useCallback(function(o) {
    return t.get(o) || r.current.options.get(o);
  }, [t]);
  return [n, i];
};
function sc(e, t) {
  return Xu(e).join("").toUpperCase().includes(t);
}
const fP = function(e, t, r, n, i) {
  return v.useMemo(function() {
    if (!r || n === !1)
      return e;
    var o = t.options, a = t.label, s = t.value, c = [], l = typeof n == "function", u = r.toUpperCase(), f = l ? n : function(h, m) {
      return i ? sc(m[i], u) : m[o] ? sc(m[a !== "children" ? a : "label"], u) : sc(m[s], u);
    }, d = l ? function(h) {
      return Fl(h);
    } : function(h) {
      return h;
    };
    return e.forEach(function(h) {
      if (h[o]) {
        var m = f(r, d(h));
        if (m)
          c.push(h);
        else {
          var p = h[o].filter(function(g) {
            return f(r, d(g));
          });
          p.length && c.push(W(W({}, h), {}, be({}, o, p)));
        }
        return;
      }
      f(r, d(h)) && c.push(h);
    }), c;
  }, [e, n, i, r, t]);
};
var Qh = 0, dP = process.env.NODE_ENV !== "test" && Gt();
function hP() {
  var e;
  return dP ? (e = Qh, Qh += 1) : e = "TEST_OR_SSR", e;
}
function vP(e) {
  var t = v.useState(), r = G(t, 2), n = r[0], i = r[1];
  return v.useEffect(function() {
    i("rc_select_".concat(hP()));
  }, []), e || n;
}
var pP = ["children", "value"], mP = ["children"];
function gP(e) {
  var t = e, r = t.key, n = t.props, i = n.children, o = n.value, a = Pt(n, pP);
  return W({
    key: r,
    value: o !== void 0 ? o : r,
    children: i
  }, a);
}
function Ju(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Nn(e).map(function(r, n) {
    if (!/* @__PURE__ */ v.isValidElement(r) || !r.type)
      return null;
    var i = r, o = i.type.isSelectOptGroup, a = i.key, s = i.props, c = s.children, l = Pt(s, mP);
    return t || !o ? gP(r) : W(W({
      key: "__RC_SELECT_GRP__".concat(a === null ? n : a, "__"),
      label: a
    }, l), {}, {
      options: Ju(c)
    });
  }).filter(function(r) {
    return r;
  });
}
function yP(e, t, r, n, i) {
  return v.useMemo(function() {
    var o = e, a = !e;
    a && (o = Ju(t));
    var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = function(d, h, m) {
      m && typeof m == "string" && d.set(h[m], h);
    };
    function u(f) {
      for (var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = 0; h < f.length; h += 1) {
        var m = f[h];
        !m[r.options] || d ? (s.set(m[r.value], m), l(c, m, r.label), l(c, m, n), l(c, m, i)) : u(m[r.options], !0);
      }
    }
    return u(o), {
      options: o,
      valueOptions: s,
      labelOptions: c
    };
  }, [e, t, r, n, i]);
}
function Gh(e) {
  var t = v.useRef();
  t.current = e;
  var r = v.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return r;
}
var Zu = function() {
  return null;
};
Zu.isSelectOptGroup = !0;
var ef = function() {
  return null;
};
ef.isSelectOption = !0;
var c0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.height, n = e.offset, i = e.children, o = e.prefixCls, a = e.onInnerResize, s = e.innerProps, c = {}, l = {
    display: "flex",
    flexDirection: "column"
  };
  return n !== void 0 && (c = {
    height: r,
    position: "relative",
    overflow: "hidden"
  }, l = W(W({}, l), {}, {
    transform: "translateY(".concat(n, "px)"),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  })), /* @__PURE__ */ v.createElement("div", {
    style: c
  }, /* @__PURE__ */ v.createElement(An, {
    onResize: function(f) {
      var d = f.offsetHeight;
      d && a && a();
    }
  }, /* @__PURE__ */ v.createElement("div", Je({
    style: l,
    className: Me(be({}, "".concat(o, "-holder-inner"), o)),
    ref: t
  }, s), i)));
});
c0.displayName = "Filler";
var bP = 20;
function Kh(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var EP = /* @__PURE__ */ function(e) {
  bo(r, e);
  var t = Eo(r);
  function r() {
    var n;
    yr(this, r);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(o)), n.moveRaf = null, n.scrollbarRef = /* @__PURE__ */ v.createRef(), n.thumbRef = /* @__PURE__ */ v.createRef(), n.visibleTimeout = null, n.state = {
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
      window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("mouseup", n.onMouseUp), n.thumbRef.current && (n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove), n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)), Bt.cancel(n.moveRaf);
    }, n.onMouseDown = function(s) {
      var c = n.props.onStartMove;
      n.setState({
        dragging: !0,
        pageY: Kh(s),
        startTop: n.getTop()
      }), c(), n.patchEvents(), s.stopPropagation(), s.preventDefault();
    }, n.onMouseMove = function(s) {
      var c = n.state, l = c.dragging, u = c.pageY, f = c.startTop, d = n.props.onScroll;
      if (Bt.cancel(n.moveRaf), l) {
        var h = Kh(s) - u, m = f + h, p = n.getEnableScrollRange(), g = n.getEnableHeightRange(), b = g ? m / g : 0, y = Math.ceil(b * p);
        n.moveRaf = Bt(function() {
          d(y);
        });
      }
    }, n.onMouseUp = function() {
      var s = n.props.onStopMove;
      n.setState({
        dragging: !1
      }), s(), n.removeEvents();
    }, n.getSpinHeight = function() {
      var s = n.props, c = s.height, l = s.count, u = c / l * 10;
      return u = Math.max(u, bP), u = Math.min(u, c / 2), Math.floor(u);
    }, n.getEnableScrollRange = function() {
      var s = n.props, c = s.scrollHeight, l = s.height;
      return c - l || 0;
    }, n.getEnableHeightRange = function() {
      var s = n.props.height, c = n.getSpinHeight();
      return s - c || 0;
    }, n.getTop = function() {
      var s = n.props.scrollTop, c = n.getEnableScrollRange(), l = n.getEnableHeightRange();
      if (s === 0 || c === 0)
        return 0;
      var u = s / c;
      return u * l;
    }, n.showScroll = function() {
      var s = n.props, c = s.height, l = s.scrollHeight;
      return l > c;
    }, n;
  }
  return br(r, [{
    key: "componentDidMount",
    value: function() {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      i.scrollTop !== this.props.scrollTop && this.delayHidden();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var i, o;
      this.removeEvents(), (i = this.scrollbarRef.current) === null || i === void 0 || i.removeEventListener("touchstart", this.onScrollbarTouchStart), (o = this.thumbRef.current) === null || o === void 0 || o.removeEventListener("touchstart", this.onMouseDown), clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: (
      // ====================== Render =======================
      function() {
        var i = this.state, o = i.dragging, a = i.visible, s = this.props, c = s.prefixCls, l = s.direction, u = this.getSpinHeight(), f = this.getTop(), d = this.showScroll(), h = d && a, m = l === "rtl" ? {
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
          className: Me("".concat(c, "-scrollbar-thumb"), be({}, "".concat(c, "-scrollbar-thumb-moving"), o)),
          style: {
            width: "100%",
            height: u,
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
function SP(e) {
  var t = e.children, r = e.setRef, n = v.useCallback(function(i) {
    r(i);
  }, []);
  return /* @__PURE__ */ v.cloneElement(t, {
    ref: n
  });
}
function wP(e, t, r, n, i, o) {
  var a = o.getKey;
  return e.slice(t, r + 1).map(function(s, c) {
    var l = t + c, u = i(s, l, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    }), f = a(s);
    return /* @__PURE__ */ v.createElement(SP, {
      key: f,
      setRef: function(h) {
        return n(s, h);
      }
    }, u);
  });
}
var CP = /* @__PURE__ */ function() {
  function e() {
    yr(this, e), this.maps = void 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return br(e, [{
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
function OP(e, t, r) {
  var n = v.useState(0), i = G(n, 2), o = i[0], a = i[1], s = Ae(/* @__PURE__ */ new Map()), c = Ae(new CP()), l = Ae();
  function u() {
    Bt.cancel(l.current);
  }
  function f() {
    u(), l.current = Bt(function() {
      s.current.forEach(function(h, m) {
        if (h && h.offsetParent) {
          var p = _a(h), g = p.offsetHeight;
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
  return Ht(function() {
    return u;
  }, []), [d, f, c.current, o];
}
function _P(e, t, r, n, i, o, a, s) {
  var c = v.useRef();
  return function(l) {
    if (l == null) {
      s();
      return;
    }
    if (Bt.cancel(c.current), typeof l == "number")
      a(l);
    else if (l && Be(l) === "object") {
      var u, f = l.align;
      "index" in l ? u = l.index : u = t.findIndex(function(p) {
        return i(p) === l.key;
      });
      var d = l.offset, h = d === void 0 ? 0 : d, m = function p(g, b) {
        if (!(g < 0 || !e.current)) {
          var y = e.current.clientHeight, E = !1, w = b;
          if (y) {
            for (var S = b || f, C = 0, O = 0, T = 0, N = Math.min(t.length, u), x = 0; x <= N; x += 1) {
              var L = i(t[x]);
              O = C;
              var R = r.get(L);
              T = O + (R === void 0 ? n : R), C = T, x === u && R === void 0 && (E = !0);
            }
            var _ = null;
            switch (S) {
              case "top":
                _ = O - h;
                break;
              case "bottom":
                _ = T - y + h;
                break;
              default: {
                var P = e.current.scrollTop, I = P + y;
                O < P ? w = "top" : T > I && (w = "bottom");
              }
            }
            _ !== null && _ !== e.current.scrollTop && a(_);
          }
          c.current = Bt(function() {
            E && o(), p(g - 1, w);
          }, 2);
        }
      };
      m(3);
    }
  };
}
function xP(e, t, r) {
  var n = e.length, i = t.length, o, a;
  if (n === 0 && i === 0)
    return null;
  n < i ? (o = e, a = t) : (o = t, a = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function c(m) {
    return m !== void 0 ? r(m) : s;
  }
  for (var l = null, u = Math.abs(n - i) !== 1, f = 0; f < a.length; f += 1) {
    var d = c(o[f]), h = c(a[f]);
    if (d !== h) {
      l = f, u = u || d !== c(a[f + 1]);
      break;
    }
  }
  return l === null ? null : {
    index: l,
    multiple: u
  };
}
function RP(e, t, r) {
  var n = v.useState(e), i = G(n, 2), o = i[0], a = i[1], s = v.useState(null), c = G(s, 2), l = c[0], u = c[1];
  return v.useEffect(function() {
    var f = xP(o || [], e || [], t);
    f?.index !== void 0 && (r?.(f.index), u(e[f.index])), a(e);
  }, [e]), [l];
}
var PP = (typeof navigator > "u" ? "undefined" : Be(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const l0 = function(e, t) {
  var r = Ae(!1), n = Ae(null);
  function i() {
    clearTimeout(n.current), r.current = !0, n.current = setTimeout(function() {
      r.current = !1;
    }, 50);
  }
  var o = Ae({
    top: e,
    bottom: t
  });
  return o.current.top = e, o.current.bottom = t, function(a) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = (
      // Pass origin wheel when on the top
      a < 0 && o.current.top || // Pass origin wheel when on the bottom
      a > 0 && o.current.bottom
    );
    return s && c ? (clearTimeout(n.current), r.current = !1) : (!c || r.current) && i(), !r.current && c;
  };
};
function TP(e, t, r, n) {
  var i = Ae(0), o = Ae(null), a = Ae(null), s = Ae(!1), c = l0(t, r);
  function l(f) {
    if (e) {
      Bt.cancel(o.current);
      var d = f.deltaY;
      i.current += d, a.current = d, !c(d) && (PP || f.preventDefault(), o.current = Bt(function() {
        var h = s.current ? 10 : 1;
        n(i.current * h), i.current = 0;
      }));
    }
  }
  function u(f) {
    e && (s.current = f.detail === a.current);
  }
  return [l, u];
}
var NP = 14 / 15;
function MP(e, t, r) {
  var n = Ae(!1), i = Ae(0), o = Ae(null), a = Ae(null), s, c = function(d) {
    if (n.current) {
      var h = Math.ceil(d.touches[0].pageY), m = i.current - h;
      i.current = h, r(m) && d.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
        m *= NP, (!r(m, !0) || Math.abs(m) <= 0.1) && clearInterval(a.current);
      }, 16);
    }
  }, l = function() {
    n.current = !1, s();
  }, u = function(d) {
    s(), d.touches.length === 1 && !n.current && (n.current = !0, i.current = Math.ceil(d.touches[0].pageY), o.current = d.target, o.current.addEventListener("touchmove", c), o.current.addEventListener("touchend", l));
  };
  s = function() {
    o.current && (o.current.removeEventListener("touchmove", c), o.current.removeEventListener("touchend", l));
  }, Ot(function() {
    return e && t.current.addEventListener("touchstart", u), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", u), s(), clearInterval(a.current);
    };
  }, [e]);
}
var IP = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"], DP = [], AP = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function FP(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-virtual-list" : r, i = e.className, o = e.height, a = e.itemHeight, s = e.fullHeight, c = s === void 0 ? !0 : s, l = e.style, u = e.data, f = e.children, d = e.itemKey, h = e.virtual, m = e.direction, p = e.component, g = p === void 0 ? "div" : p, b = e.onScroll, y = e.onVisibleChange, E = e.innerProps, w = Pt(e, IP), S = !!(h !== !1 && o && a), C = S && u && a * u.length > o, O = lr(0), T = G(O, 2), N = T[0], x = T[1], L = lr(!1), R = G(L, 2), _ = R[0], P = R[1], I = Me(n, be({}, "".concat(n, "-rtl"), m === "rtl"), i), A = u || DP, D = Ae(), B = Ae(), Q = Ae(), ie = v.useCallback(function(ve) {
    return typeof d == "function" ? d(ve) : ve?.[d];
  }, [d]), ce = {
    getKey: ie
  };
  function F(ve) {
    x(function(Se) {
      var Ve;
      typeof ve == "function" ? Ve = ve(Se) : Ve = ve;
      var vt = de(Ve);
      return D.current.scrollTop = vt, vt;
    });
  }
  var H = Ae({
    start: 0,
    end: A.length
  }), j = Ae(), Y = RP(A, ie), M = G(Y, 1), q = M[0];
  j.current = q;
  var $ = OP(ie, null, null), J = G($, 4), re = J[0], X = J[1], k = J[2], ee = J[3], z = v.useMemo(function() {
    if (!S)
      return {
        scrollHeight: void 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    if (!C) {
      var ve;
      return {
        scrollHeight: ((ve = B.current) === null || ve === void 0 ? void 0 : ve.offsetHeight) || 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    }
    for (var Se = 0, Ve, vt, Fe, qe = A.length, Oe = 0; Oe < qe; Oe += 1) {
      var ct = A[Oe], _t = ie(ct), xe = k.get(_t), ze = Se + (xe === void 0 ? a : xe);
      ze >= N && Ve === void 0 && (Ve = Oe, vt = Se), ze > N + o && Fe === void 0 && (Fe = Oe), Se = ze;
    }
    return Ve === void 0 && (Ve = 0, vt = 0, Fe = Math.ceil(o / a)), Fe === void 0 && (Fe = A.length - 1), Fe = Math.min(Fe + 1, A.length), {
      scrollHeight: Se,
      start: Ve,
      end: Fe,
      offset: vt
    };
  }, [C, S, N, A, ee, o]), te = z.scrollHeight, fe = z.start, se = z.end, he = z.offset;
  H.current.start = fe, H.current.end = se;
  var ge = te - o, ne = Ae(ge);
  ne.current = ge;
  function de(ve) {
    var Se = ve;
    return Number.isNaN(ne.current) || (Se = Math.min(Se, ne.current)), Se = Math.max(Se, 0), Se;
  }
  var Ne = N <= 0, Ie = N >= ge, oe = l0(Ne, Ie);
  function pe(ve) {
    var Se = ve;
    F(Se);
  }
  function Ze(ve) {
    var Se = ve.currentTarget.scrollTop;
    Se !== N && F(Se), b?.(ve);
  }
  var it = TP(S, Ne, Ie, function(ve) {
    F(function(Se) {
      var Ve = Se + ve;
      return Ve;
    });
  }), et = G(it, 2), We = et[0], Ue = et[1];
  MP(S, D, function(ve, Se) {
    return oe(ve, Se) ? !1 : (We({
      preventDefault: function() {
      },
      deltaY: ve
    }), !0);
  }), Ot(function() {
    function ve(Se) {
      S && Se.preventDefault();
    }
    return D.current.addEventListener("wheel", We), D.current.addEventListener("DOMMouseScroll", Ue), D.current.addEventListener("MozMousePixelScroll", ve), function() {
      D.current && (D.current.removeEventListener("wheel", We), D.current.removeEventListener("DOMMouseScroll", Ue), D.current.removeEventListener("MozMousePixelScroll", ve));
    };
  }, [S]);
  var ot = _P(D, A, k, a, ie, X, F, function() {
    var ve;
    (ve = Q.current) === null || ve === void 0 || ve.delayHidden();
  });
  v.useImperativeHandle(t, function() {
    return {
      scrollTo: ot
    };
  }), Ot(function() {
    if (y) {
      var ve = A.slice(fe, se + 1);
      y(ve, A);
    }
  }, [fe, se, A]);
  var Kt = wP(A, fe, se, re, f, ce), tt = null;
  return o && (tt = W(be({}, c ? "height" : "maxHeight", o), AP), S && (tt.overflowY = "hidden", _ && (tt.pointerEvents = "none"))), /* @__PURE__ */ v.createElement("div", Je({
    style: W(W({}, l), {}, {
      position: "relative"
    }),
    className: I
  }, w), /* @__PURE__ */ v.createElement(g, {
    className: "".concat(n, "-holder"),
    style: tt,
    ref: D,
    onScroll: Ze
  }, /* @__PURE__ */ v.createElement(c0, {
    prefixCls: n,
    height: te,
    offset: he,
    onInnerResize: X,
    ref: B,
    innerProps: E
  }, Kt)), S && /* @__PURE__ */ v.createElement(EP, {
    ref: Q,
    prefixCls: n,
    scrollTop: N,
    height: o,
    scrollHeight: te,
    count: A.length,
    direction: m,
    onScroll: pe,
    onStartMove: function() {
      P(!0);
    },
    onStopMove: function() {
      P(!1);
    }
  }));
}
var u0 = /* @__PURE__ */ v.forwardRef(FP);
u0.displayName = "List";
var f0 = /* @__PURE__ */ v.createContext(null);
function $P() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var kP = ["disabled", "title", "children", "style", "className"];
function Yh(e) {
  return typeof e == "string" || typeof e == "number";
}
var LP = function(t, r) {
  var n = ER(), i = n.prefixCls, o = n.id, a = n.open, s = n.multiple, c = n.mode, l = n.searchValue, u = n.toggleOpen, f = n.notFoundContent, d = n.onPopupScroll, h = v.useContext(f0), m = h.flattenOptions, p = h.onActiveValue, g = h.defaultActiveFirstOption, b = h.onSelect, y = h.menuItemSelectedIcon, E = h.rawValues, w = h.fieldNames, S = h.virtual, C = h.direction, O = h.listHeight, T = h.listItemHeight, N = "".concat(i, "-item"), x = rs(function() {
    return m;
  }, [a, m], function(q, $) {
    return $[0] && q[1] !== $[1];
  }), L = v.useRef(null), R = function($) {
    $.preventDefault();
  }, _ = function($) {
    L.current && L.current.scrollTo(typeof $ == "number" ? {
      index: $
    } : $);
  }, P = function($) {
    for (var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, re = x.length, X = 0; X < re; X += 1) {
      var k = ($ + X * J + re) % re, ee = x[k], z = ee.group, te = ee.data;
      if (!z && !te.disabled)
        return k;
    }
    return -1;
  }, I = v.useState(function() {
    return P(0);
  }), A = G(I, 2), D = A[0], B = A[1], Q = function($) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    B($);
    var re = {
      source: J ? "keyboard" : "mouse"
    }, X = x[$];
    if (!X) {
      p(null, -1, re);
      return;
    }
    p(X.value, $, re);
  };
  Ht(function() {
    Q(g !== !1 ? P(0) : -1);
  }, [x.length, l]);
  var ie = v.useCallback(function(q) {
    return E.has(q) && c !== "combobox";
  }, [c, Ee(E).toString(), E.size]);
  Ht(function() {
    var q = setTimeout(function() {
      if (!s && a && E.size === 1) {
        var J = Array.from(E)[0], re = x.findIndex(function(X) {
          var k = X.data;
          return k.value === J;
        });
        re !== -1 && (Q(re), _(re));
      }
    });
    if (a) {
      var $;
      ($ = L.current) === null || $ === void 0 || $.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(q);
    };
  }, [a, l, m.length]);
  var ce = function($) {
    $ !== void 0 && b($, {
      selected: !E.has($)
    }), s || u(!1);
  };
  if (v.useImperativeHandle(r, function() {
    return {
      onKeyDown: function($) {
        var J = $.which, re = $.ctrlKey;
        switch (J) {
          case Z.N:
          case Z.P:
          case Z.UP:
          case Z.DOWN: {
            var X = 0;
            if (J === Z.UP ? X = -1 : J === Z.DOWN ? X = 1 : $P() && re && (J === Z.N ? X = 1 : J === Z.P && (X = -1)), X !== 0) {
              var k = P(D + X, X);
              _(k), Q(k, !0);
            }
            break;
          }
          case Z.ENTER: {
            var ee = x[D];
            ee && !ee.data.disabled ? ce(ee.value) : ce(void 0), a && $.preventDefault();
            break;
          }
          case Z.ESC:
            u(!1), a && $.stopPropagation();
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
      id: "".concat(o, "_list"),
      className: "".concat(N, "-empty"),
      onMouseDown: R
    }, f);
  var F = Object.keys(w).map(function(q) {
    return w[q];
  }), H = function($) {
    return $.label;
  };
  function j(q, $) {
    var J = q.group;
    return {
      role: J ? "presentation" : "option",
      id: "".concat(o, "_list_").concat($)
    };
  }
  var Y = function($) {
    var J = x[$];
    if (!J)
      return null;
    var re = J.data || {}, X = re.value, k = J.group, ee = Da(re, !0), z = H(J);
    return J ? /* @__PURE__ */ v.createElement("div", Je({
      "aria-label": typeof z == "string" && !k ? z : null
    }, ee, {
      key: $
    }, j(J, $), {
      "aria-selected": ie(X)
    }), X) : null;
  }, M = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, S && /* @__PURE__ */ v.createElement("div", Je({}, M, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), Y(D - 1), Y(D), Y(D + 1)), /* @__PURE__ */ v.createElement(u0, {
    itemKey: "key",
    ref: L,
    data: x,
    height: O,
    itemHeight: T,
    fullHeight: !1,
    onMouseDown: R,
    onScroll: d,
    virtual: S,
    direction: C,
    innerProps: S ? null : M
  }, function(q, $) {
    var J, re = q.group, X = q.groupOption, k = q.data, ee = q.label, z = q.value, te = k.key;
    if (re) {
      var fe, se = (fe = k.title) !== null && fe !== void 0 ? fe : Yh(ee) ? ee.toString() : void 0;
      return /* @__PURE__ */ v.createElement("div", {
        className: Me(N, "".concat(N, "-group")),
        title: se
      }, ee !== void 0 ? ee : te);
    }
    var he = k.disabled, ge = k.title;
    k.children;
    var ne = k.style, de = k.className, Ne = Pt(k, kP), Ie = wu(Ne, F), oe = ie(z), pe = "".concat(N, "-option"), Ze = Me(N, pe, de, (J = {}, be(J, "".concat(pe, "-grouped"), X), be(J, "".concat(pe, "-active"), D === $ && !he), be(J, "".concat(pe, "-disabled"), he), be(J, "".concat(pe, "-selected"), oe), J)), it = H(q), et = !y || typeof y == "function" || oe, We = typeof it == "number" ? it : it || z, Ue = Yh(We) ? We.toString() : void 0;
    return ge !== void 0 && (Ue = ge), /* @__PURE__ */ v.createElement("div", Je({}, Da(Ie), S ? {} : j(q, $), {
      "aria-selected": oe,
      className: Ze,
      title: Ue,
      onMouseMove: function() {
        D === $ || he || Q($);
      },
      onClick: function() {
        he || ce(z);
      },
      style: ne
    }), /* @__PURE__ */ v.createElement("div", {
      className: "".concat(pe, "-content")
    }, We), /* @__PURE__ */ v.isValidElement(y) || oe, et && /* @__PURE__ */ v.createElement(ps, {
      className: "".concat(N, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        isSelected: oe
      }
    }, oe ? "✓" : null));
  }));
}, d0 = /* @__PURE__ */ v.forwardRef(LP);
d0.displayName = "OptionList";
function jP(e) {
  var t = e.mode, r = e.options, n = e.children, i = e.backfill, o = e.allowClear, a = e.placeholder, s = e.getInputElement, c = e.showSearch, l = e.onSearch, u = e.defaultOpen, f = e.autoFocus, d = e.labelInValue, h = e.value, m = e.inputValue, p = e.optionLabelProp, g = La(t), b = c !== void 0 ? c : g || t === "combobox", y = r || Ju(n);
  if (ke(t !== "tags" || y.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var E = y.some(function(C) {
      return C.options ? C.options.some(function(O) {
        return typeof ("value" in O ? O.value : O.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    ke(!E, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (ke(t !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), ke(t === "combobox" || !i, "`backfill` only works with `combobox` mode."), ke(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), Qc(t !== "combobox" || !s || !o || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), l && !b && t !== "combobox" && t !== "tags" && ke(!1, "`onSearch` should work with `showSearch` instead of use alone."), Qc(!u || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var w = Xu(h);
    ke(!d || w.every(function(C) {
      return Be(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), ke(!g || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (n) {
    var S = null;
    Nn(n).some(function(C) {
      if (!/* @__PURE__ */ v.isValidElement(C) || !C.type)
        return !1;
      var O = C, T = O.type;
      if (T.isSelectOption)
        return !1;
      if (T.isSelectOptGroup) {
        var N = Nn(C.props.children).every(function(x) {
          return !/* @__PURE__ */ v.isValidElement(x) || !C.type || x.type.isSelectOption ? !0 : (S = x.type, !1);
        });
        return !N;
      }
      return S = T, !0;
    }), S && ke(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(S.displayName || S.name || S, "`.")), ke(m === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function VP(e, t) {
  if (e) {
    var r = function n(i) {
      for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < i.length; a++) {
        var s = i[a];
        if (s[t?.value] === null)
          return ke(!1, "`value` in Select options should not be `null`."), !0;
        if (!o && Array.isArray(s[t?.options]) && n(s[t?.options], !0))
          break;
      }
    };
    r(e);
  }
}
var zP = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], HP = ["inputValue"];
function BP(e) {
  return !e || Be(e) !== "object";
}
var h0 = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var r = e.id, n = e.mode, i = e.prefixCls, o = i === void 0 ? "rc-select" : i, a = e.backfill, s = e.fieldNames, c = e.inputValue, l = e.searchValue, u = e.onSearch, f = e.autoClearSearchValue, d = f === void 0 ? !0 : f, h = e.onSelect, m = e.onDeselect, p = e.dropdownMatchSelectWidth, g = p === void 0 ? !0 : p, b = e.filterOption, y = e.filterSort, E = e.optionFilterProp, w = e.optionLabelProp, S = e.options, C = e.children, O = e.defaultActiveFirstOption, T = e.menuItemSelectedIcon, N = e.virtual, x = e.direction, L = e.listHeight, R = L === void 0 ? 200 : L, _ = e.listItemHeight, P = _ === void 0 ? 20 : _, I = e.value, A = e.defaultValue, D = e.labelInValue, B = e.onChange, Q = Pt(e, zP), ie = vP(r), ce = La(n), F = !!(!S && C), H = v.useMemo(function() {
    return b === void 0 && n === "combobox" ? !1 : b;
  }, [b, n]), j = v.useMemo(
    function() {
      return a0(s, F);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      F
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), Y = Na("", {
    value: l !== void 0 ? l : c,
    postState: function(ae) {
      return ae || "";
    }
  }), M = G(Y, 2), q = M[0], $ = M[1], J = yP(S, C, j, E, w), re = J.valueOptions, X = J.labelOptions, k = J.options, ee = v.useCallback(function(K) {
    var ae = Xu(K);
    return ae.map(function(ue) {
      var ye, $e, Re, Ut, Tt;
      if (BP(ue))
        ye = ue;
      else {
        var jt;
        Re = ue.key, $e = ue.label, ye = (jt = ue.value) !== null && jt !== void 0 ? jt : Re;
      }
      var ft = re.get(ye);
      if (ft) {
        var ir;
        if ($e === void 0 && ($e = ft?.[w || j.label]), Re === void 0 && (Re = (ir = ft?.key) !== null && ir !== void 0 ? ir : ye), Ut = ft?.disabled, Tt = ft?.title, process.env.NODE_ENV !== "production" && !w) {
          var qt = ft?.[j.label];
          qt !== void 0 && !/* @__PURE__ */ v.isValidElement(qt) && !/* @__PURE__ */ v.isValidElement($e) && qt !== $e && ke(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: $e,
        value: ye,
        key: Re,
        disabled: Ut,
        title: Tt
      };
    });
  }, [j, w, re]), z = Na(A, {
    value: I
  }), te = G(z, 2), fe = te[0], se = te[1], he = v.useMemo(function() {
    var K, ae = ee(fe);
    return n === "combobox" && !((K = ae[0]) !== null && K !== void 0 && K.value) ? [] : ae;
  }, [fe, ee, n]), ge = uP(he, re), ne = G(ge, 2), de = ne[0], Ne = ne[1], Ie = v.useMemo(function() {
    if (!n && de.length === 1) {
      var K = de[0];
      if (K.value === null && (K.label === null || K.label === void 0))
        return [];
    }
    return de.map(function(ae) {
      var ue;
      return W(W({}, ae), {}, {
        label: (ue = ae.label) !== null && ue !== void 0 ? ue : ae.value
      });
    });
  }, [n, de]), oe = v.useMemo(function() {
    return new Set(de.map(function(K) {
      return K.value;
    }));
  }, [de]);
  v.useEffect(function() {
    if (n === "combobox") {
      var K, ae = (K = de[0]) === null || K === void 0 ? void 0 : K.value;
      $(kR(ae) ? String(ae) : "");
    }
  }, [de]);
  var pe = Gh(function(K, ae) {
    var ue, ye = ae ?? K;
    return ue = {}, be(ue, j.value, K), be(ue, j.label, ye), ue;
  }), Ze = v.useMemo(function() {
    if (n !== "tags")
      return k;
    var K = Ee(k), ae = function(ye) {
      return re.has(ye);
    };
    return Ee(de).sort(function(ue, ye) {
      return ue.value < ye.value ? -1 : 1;
    }).forEach(function(ue) {
      var ye = ue.value;
      ae(ye) || K.push(pe(ye, ue.label));
    }), K;
  }, [pe, k, re, de, n]), it = fP(Ze, j, q, H, E), et = v.useMemo(function() {
    return n !== "tags" || !q || it.some(function(K) {
      return K[E || "value"] === q;
    }) ? it : [pe(q)].concat(Ee(it));
  }, [pe, E, n, it, q]), We = v.useMemo(function() {
    return y ? Ee(et).sort(function(K, ae) {
      return y(K, ae);
    }) : et;
  }, [et, y]), Ue = v.useMemo(function() {
    return oP(We, {
      fieldNames: j,
      childrenAsData: F
    });
  }, [We, j, F]), ot = function(ae) {
    var ue = ee(ae);
    if (se(ue), B && // Trigger event only when value changed
    (ue.length !== de.length || ue.some(function(Re, Ut) {
      var Tt;
      return ((Tt = de[Ut]) === null || Tt === void 0 ? void 0 : Tt.value) !== Re?.value;
    }))) {
      var ye = D ? ue : ue.map(function(Re) {
        return Re.value;
      }), $e = ue.map(function(Re) {
        return Fl(Ne(Re.value));
      });
      B(
        // Value
        ce ? ye : ye[0],
        // Option
        ce ? $e : $e[0]
      );
    }
  }, Kt = v.useState(null), tt = G(Kt, 2), ve = tt[0], Se = tt[1], Ve = v.useState(0), vt = G(Ve, 2), Fe = vt[0], qe = vt[1], Oe = O !== void 0 ? O : n !== "combobox", ct = v.useCallback(function(K, ae) {
    var ue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ye = ue.source, $e = ye === void 0 ? "keyboard" : ye;
    qe(ae), a && n === "combobox" && K !== null && $e === "keyboard" && Se(String(K));
  }, [a, n]), _t = function(ae, ue, ye) {
    var $e = function() {
      var At, er = Ne(ae);
      return [D ? {
        label: er?.[j.label],
        value: ae,
        key: (At = er?.key) !== null && At !== void 0 ? At : ae
      } : ae, Fl(er)];
    };
    if (ue && h) {
      var Re = $e(), Ut = G(Re, 2), Tt = Ut[0], jt = Ut[1];
      h(Tt, jt);
    } else if (!ue && m && ye !== "clear") {
      var ft = $e(), ir = G(ft, 2), qt = ir[0], $r = ir[1];
      m(qt, $r);
    }
  }, xe = Gh(function(K, ae) {
    var ue, ye = ce ? ae.selected : !0;
    ye ? ue = ce ? [].concat(Ee(de), [K]) : [K] : ue = de.filter(function($e) {
      return $e.value !== K;
    }), ot(ue), _t(K, ye), n === "combobox" ? Se("") : (!La || d) && ($(""), Se(""));
  }), ze = function(ae, ue) {
    ot(ae);
    var ye = ue.type, $e = ue.values;
    (ye === "remove" || ye === "clear") && $e.forEach(function(Re) {
      _t(Re.value, !1, ye);
    });
  }, lt = function(ae, ue) {
    if ($(ae), Se(null), ue.source === "submit") {
      var ye = (ae || "").trim();
      if (ye) {
        var $e = Array.from(new Set([].concat(Ee(oe), [ye])));
        ot($e), _t(ye, !0), $("");
      }
      return;
    }
    ue.source !== "blur" && (n === "combobox" && ot(ae), u?.(ae));
  }, ht = function(ae) {
    var ue = ae;
    n !== "tags" && (ue = ae.map(function($e) {
      var Re = X.get($e);
      return Re?.value;
    }).filter(function($e) {
      return $e !== void 0;
    }));
    var ye = Array.from(new Set([].concat(Ee(oe), Ee(ue))));
    ot(ye), ye.forEach(function($e) {
      _t($e, !0);
    });
  }, we = v.useMemo(function() {
    var K = N !== !1 && g !== !1;
    return W(W({}, J), {}, {
      flattenOptions: Ue,
      onActiveValue: ct,
      defaultActiveFirstOption: Oe,
      onSelect: xe,
      menuItemSelectedIcon: T,
      rawValues: oe,
      fieldNames: j,
      virtual: K,
      direction: x,
      listHeight: R,
      listItemHeight: P,
      childrenAsData: F
    });
  }, [J, Ue, ct, Oe, xe, T, oe, j, N, g, R, P, F]);
  return process.env.NODE_ENV !== "production" && (jP(e), VP(k, j)), /* @__PURE__ */ v.createElement(f0.Provider, {
    value: we
  }, /* @__PURE__ */ v.createElement(s0, Je({}, Q, {
    // >>> MISC
    id: ie,
    prefixCls: o,
    ref: t,
    omitDomProps: HP,
    mode: n,
    displayValues: Ie,
    onDisplayValuesChange: ze,
    direction: x,
    searchValue: q,
    onSearch: lt,
    autoClearSearchValue: d,
    onSearchSplit: ht,
    dropdownMatchSelectWidth: g,
    OptionList: d0,
    emptyOptions: !Ue.length,
    activeValue: ve,
    activeDescendantId: "".concat(ie, "_list_").concat(Fe)
  })));
});
process.env.NODE_ENV !== "production" && (h0.displayName = "Select");
var tf = h0;
tf.Option = ef;
tf.OptGroup = Zu;
function WP(e, t, r) {
  return Me({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const UP = (e, t) => t || e, v0 = () => {
  const [, e] = Fn(), r = new zt(e.colorBgBase).toHsl().l < 0.5 ? {
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
process.env.NODE_ENV !== "production" && (v0.displayName = "EmptyImage");
const qP = v0, p0 = () => {
  const [, e] = Fn(), {
    colorFill: t,
    colorFillTertiary: r,
    colorFillQuaternary: n,
    colorBgContainer: i
  } = e, {
    borderColor: o,
    shadowColor: a,
    contentColor: s
  } = fi(() => ({
    borderColor: new zt(t).onBackground(i).toHexShortString(),
    shadowColor: new zt(r).onBackground(i).toHexShortString(),
    contentColor: new zt(n).onBackground(i).toHexShortString()
  }), [t, r, n, i]);
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
    stroke: o
  }, /* @__PURE__ */ v.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ v.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: s
  }))));
};
process.env.NODE_ENV !== "production" && (p0.displayName = "SimpleImage");
const QP = p0, GP = (e) => {
  const {
    componentCls: t,
    margin: r,
    marginXS: n,
    marginXL: i,
    fontSize: o,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: n,
      fontSize: o,
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
        marginBlock: i,
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
}, KP = wo("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: r
  } = e, n = Zt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r * 2.5,
    emptyImgHeightMD: r,
    emptyImgHeightSM: r * 0.875
  });
  return [GP(n)];
});
var YP = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const m0 = /* @__PURE__ */ v.createElement(qP, null), g0 = /* @__PURE__ */ v.createElement(QP, null), ms = (e) => {
  var {
    className: t,
    rootClassName: r,
    prefixCls: n,
    image: i = m0,
    description: o,
    children: a,
    imageStyle: s,
    style: c
  } = e, l = YP(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: u,
    direction: f,
    empty: d
  } = v.useContext(rr), h = u("empty", n), [m, p] = KP(h), [g] = bC("Empty"), b = typeof o < "u" ? o : g?.description, y = typeof b == "string" ? b : "empty";
  let E = null;
  return typeof i == "string" ? E = /* @__PURE__ */ v.createElement("img", {
    alt: y,
    src: i
  }) : E = i, m(/* @__PURE__ */ v.createElement("div", Object.assign({
    className: Me(p, h, d?.className, {
      [`${h}-normal`]: i === g0,
      [`${h}-rtl`]: f === "rtl"
    }, t, r),
    style: Object.assign(Object.assign({}, d?.style), c)
  }, l), /* @__PURE__ */ v.createElement("div", {
    className: `${h}-image`,
    style: s
  }, E), b && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-description`
  }, b), a && /* @__PURE__ */ v.createElement("div", {
    className: `${h}-footer`
  }, a)));
};
ms.PRESENTED_IMAGE_DEFAULT = m0;
ms.PRESENTED_IMAGE_SIMPLE = g0;
process.env.NODE_ENV !== "production" && (ms.displayName = "Empty");
const Wi = ms, XP = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: r
  } = Qt(rr), n = r("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Te.createElement(Wi, {
        image: Wi.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Te.createElement(Wi, {
        image: Wi.PRESENTED_IMAGE_SIMPLE,
        className: `${n}-small`
      });
    default:
      return /* @__PURE__ */ Te.createElement(Wi, null);
  }
}, JP = XP, ZP = (e) => {
  const {
    controlPaddingHorizontal: t,
    controlHeight: r,
    fontSize: n,
    lineHeight: i
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: r,
    padding: `${(r - n * i) / 2}px ${t}px`,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: i,
    boxSizing: "border-box"
  };
}, eT = (e) => {
  const {
    antCls: t,
    componentCls: r
  } = e, n = `${r}-item`, i = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, a = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${r}-dropdown-placement-`;
  return [
    {
      [`${r}-dropdown`]: Object.assign(Object.assign({}, cs(e)), {
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
          ${i}${s}bottomLeft,
          ${o}${s}bottomLeft
        `]: {
          animationName: Bg
        },
        [`
          ${i}${s}topLeft,
          ${o}${s}topLeft,
          ${i}${s}topRight,
          ${o}${s}topRight
        `]: {
          animationName: Ug
        },
        [`${a}${s}bottomLeft`]: {
          animationName: Wg
        },
        [`
          ${a}${s}topLeft,
          ${a}${s}topRight
        `]: {
          animationName: qg
        },
        "&-hidden": {
          display: "none"
        },
        [`${n}`]: Object.assign(Object.assign({}, ZP(e)), {
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
            }, cl),
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
    $h(e, "slide-up"),
    $h(e, "slide-down"),
    Fh(e, "move-up"),
    Fh(e, "move-down")
  ];
}, tT = eT, Xn = 2, y0 = (e) => {
  let {
    controlHeightSM: t,
    controlHeight: r,
    lineWidth: n
  } = e;
  const i = (r - t) / 2 - n, o = Math.ceil(i / 2);
  return [i, o];
};
function cc(e, t) {
  const {
    componentCls: r,
    iconCls: n
  } = e, i = `${r}-selection-overflow`, o = e.controlHeightSM, [a] = y0(e), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-multiple${s}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [i]: {
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
        padding: `${a - Xn}px ${Xn * 2}px`,
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
          margin: `${Xn}px 0`,
          lineHeight: `${o}px`,
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
        height: o,
        marginTop: Xn,
        marginBottom: Xn,
        lineHeight: `${o - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Xn * 2,
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
        "&-remove": Object.assign(Object.assign({}, Du()), {
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
      [`${i}-item + ${i}-item`]: {
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
          height: o,
          fontFamily: e.fontFamily,
          lineHeight: `${o}px`,
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
const rT = (e) => {
  const {
    componentCls: t
  } = e, r = Zt(e, {
    controlHeight: e.controlHeightSM,
    controlHeightSM: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), n = Zt(e, {
    fontSize: e.fontSizeLG,
    controlHeight: e.controlHeightLG,
    controlHeightSM: e.controlHeight,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, i] = y0(e);
  return [
    cc(e),
    // ======================== Small ========================
    cc(r, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: i
        }
      }
    },
    // ======================== Large ========================
    cc(n, "lg")
  ];
}, nT = rT;
function lc(e, t) {
  const {
    componentCls: r,
    inputPaddingHorizontalBase: n,
    borderRadius: i
  } = e, o = e.controlHeight - e.lineWidth * 2, a = Math.ceil(e.fontSize * 1.25), s = t ? `${r}-${t}` : "";
  return {
    [`${r}-single${s}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${r}-selector`]: Object.assign(Object.assign({}, cs(e)), {
        display: "flex",
        borderRadius: i,
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
          lineHeight: `${o}px`,
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${o}px`
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
            height: o
          },
          "&:after": {
            lineHeight: `${o}px`
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
function iT(e) {
  const {
    componentCls: t
  } = e, r = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    lc(e),
    // ======================== Small ========================
    // Shared
    lc(Zt(e, {
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
    lc(Zt(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const oT = (e) => {
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
}, uc = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: n,
    borderHoverColor: i,
    outlineColor: o,
    antCls: a
  } = t, s = r ? {
    [`${n}-selector`]: {
      borderColor: i
    }
  } : {};
  return {
    [e]: {
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${a}-pagination-size-changer)`]: Object.assign(Object.assign({}, s), {
        [`${n}-focused& ${n}-selector`]: {
          borderColor: i,
          boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${o}`,
          outline: 0
        },
        [`&:hover ${n}-selector`]: {
          borderColor: i
        }
      })
    }
  };
}, aT = (e) => {
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
}, sT = (e) => {
  const {
    componentCls: t,
    inputPaddingHorizontalBase: r,
    iconCls: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, cs(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(Object.assign({}, oT(e)), aT(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${t}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: "normal"
      }, cl),
      // ======================= Placeholder =======================
      [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, cl), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${t}-arrow`]: Object.assign(Object.assign({}, Du()), {
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
}, cT = (e) => {
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
    sT(e),
    // Single
    iT(e),
    // Multiple
    nT(e),
    // Dropdown
    tT(e),
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
    uc(t, Zt(e, {
      borderHoverColor: e.colorPrimaryHover,
      outlineColor: e.controlOutline
    })),
    uc(`${t}-status-error`, Zt(e, {
      borderHoverColor: e.colorErrorHover,
      outlineColor: e.colorErrorOutline
    }), !0),
    uc(`${t}-status-warning`, Zt(e, {
      borderHoverColor: e.colorWarningHover,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Mg(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, lT = wo("Select", (e, t) => {
  let {
    rootPrefixCls: r
  } = t;
  const n = Zt(e, {
    rootPrefixCls: r,
    inputPaddingHorizontalBase: e.paddingSM - 1
  });
  return [cT(n)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
})), uT = (e) => {
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
function fT(e, t) {
  return e || uT(t);
}
function dT(e, t) {
  return t !== void 0 ? t : e !== null;
}
var b0 = {};
Object.defineProperty(b0, "__esModule", { value: !0 });
var hT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, vT = b0.default = hT;
const E0 = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: vT
});
process.env.NODE_ENV !== "production" && (E0.displayName = "CheckOutlined");
const pT = /* @__PURE__ */ v.forwardRef(E0);
var S0 = {};
Object.defineProperty(S0, "__esModule", { value: !0 });
var mT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, gT = S0.default = mT;
const w0 = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: gT
});
process.env.NODE_ENV !== "production" && (w0.displayName = "DownOutlined");
const yT = /* @__PURE__ */ v.forwardRef(w0);
var C0 = {};
Object.defineProperty(C0, "__esModule", { value: !0 });
var bT = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, ET = C0.default = bT;
const O0 = (e, t) => /* @__PURE__ */ v.createElement(Kr, {
  ...e,
  ref: t,
  icon: ET
});
process.env.NODE_ENV !== "production" && (O0.displayName = "SearchOutlined");
const ST = /* @__PURE__ */ v.forwardRef(O0);
function wT(e) {
  let {
    suffixIcon: t,
    clearIcon: r,
    menuItemSelectedIcon: n,
    removeIcon: i,
    loading: o,
    multiple: a,
    hasFeedback: s,
    prefixCls: c,
    showSuffixIcon: l,
    feedbackIcon: u,
    showArrow: f
  } = e;
  const d = r ?? /* @__PURE__ */ v.createElement(sg, null), h = (b) => t === null && !s && !f ? null : /* @__PURE__ */ v.createElement(v.Fragment, null, l !== !1 && b, s && u);
  let m = null;
  if (t !== void 0)
    m = h(t);
  else if (o)
    m = h(/* @__PURE__ */ v.createElement(Wu, {
      spin: !0
    }));
  else {
    const b = `${c}-suffix`;
    m = (y) => {
      let {
        open: E,
        showSearch: w
      } = y;
      return h(E && w ? /* @__PURE__ */ v.createElement(ST, {
        className: b
      }) : /* @__PURE__ */ v.createElement(yT, {
        className: b
      }));
    };
  }
  let p = null;
  n !== void 0 ? p = n : a ? p = /* @__PURE__ */ v.createElement(pT, null) : p = null;
  let g = null;
  return i !== void 0 ? g = i : g = /* @__PURE__ */ v.createElement(ug, null), {
    clearIcon: d,
    suffixIcon: m,
    itemIcon: p,
    removeIcon: g
  };
}
var CT = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const _0 = "SECRET_COMBOBOX_MODE_DO_NOT_USE", x0 = (e, t) => {
  var r, {
    prefixCls: n,
    bordered: i = !0,
    className: o,
    rootClassName: a,
    getPopupContainer: s,
    popupClassName: c,
    dropdownClassName: l,
    listHeight: u = 256,
    placement: f,
    listItemHeight: d = 24,
    size: h,
    disabled: m,
    notFoundContent: p,
    status: g,
    builtinPlacements: b,
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: E,
    direction: w,
    style: S
  } = e, C = CT(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style"]);
  const {
    getPopupContainer: O,
    getPrefixCls: T,
    renderEmpty: N,
    direction: x,
    virtual: L,
    popupMatchSelectWidth: R,
    popupOverflow: _,
    select: P
  } = v.useContext(rr), I = T("select", n), A = T(), D = w ?? x, {
    compactSize: B,
    compactItemClassnames: Q
  } = Pg(I, D), [ie, ce] = lT(I), F = v.useMemo(() => {
    const {
      mode: oe
    } = C;
    if (oe !== "combobox")
      return oe === _0 ? "combobox" : oe;
  }, [C.mode]), H = F === "multiple" || F === "tags", j = dT(C.suffixIcon, C.showArrow), Y = (r = E ?? y) !== null && r !== void 0 ? r : R, {
    status: M,
    hasFeedback: q,
    isFormItemInput: $,
    feedbackIcon: J
  } = v.useContext(rR), re = UP(M, g);
  let X;
  p !== void 0 ? X = p : F === "combobox" ? X = null : X = N?.("Select") || /* @__PURE__ */ v.createElement(JP, {
    componentName: "Select"
  });
  const {
    suffixIcon: k,
    itemIcon: ee,
    removeIcon: z,
    clearIcon: te
  } = wT(Object.assign(Object.assign({}, C), {
    multiple: H,
    hasFeedback: q,
    feedbackIcon: J,
    showSuffixIcon: j,
    prefixCls: I,
    showArrow: C.showArrow
  })), fe = wu(C, ["suffixIcon", "itemIcon"]), se = Me(c || l, {
    [`${I}-dropdown-${D}`]: D === "rtl"
  }, a, ce), he = Rg((oe) => {
    var pe;
    return (pe = h ?? B) !== null && pe !== void 0 ? pe : oe;
  }), ge = v.useContext(Au), ne = m ?? ge, de = Me({
    [`${I}-lg`]: he === "large",
    [`${I}-sm`]: he === "small",
    [`${I}-rtl`]: D === "rtl",
    [`${I}-borderless`]: !i,
    [`${I}-in-form-item`]: $
  }, WP(I, re, q), Q, P?.className, o, a, ce), Ne = v.useMemo(() => f !== void 0 ? f : D === "rtl" ? "bottomRight" : "bottomLeft", [f, D]), Ie = fT(b, _);
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && ur(!l, "Select", "`dropdownClassName` is deprecated. Please use `popupClassName` instead."), process.env.NODE_ENV !== "production" && ur(y === void 0, "Select", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead."), process.env.NODE_ENV !== "production" && ur(!("showArrow" in C), "Select", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.")), ie(/* @__PURE__ */ v.createElement(tf, Object.assign({
    ref: t,
    virtual: L,
    showSearch: P?.showSearch
  }, fe, {
    style: Object.assign(Object.assign({}, P?.style), S),
    dropdownMatchSelectWidth: Y,
    builtinPlacements: Ie,
    transitionName: X_(A, "slide-up", C.transitionName),
    listHeight: u,
    listItemHeight: d,
    mode: F,
    prefixCls: I,
    placement: Ne,
    direction: D,
    suffixIcon: k,
    menuItemSelectedIcon: ee,
    removeIcon: z,
    clearIcon: te,
    notFoundContent: X,
    className: de,
    getPopupContainer: s || O,
    dropdownClassName: se,
    disabled: ne
  })));
};
process.env.NODE_ENV !== "production" && (x0.displayName = "Select");
const kn = /* @__PURE__ */ v.forwardRef(x0), OT = bR(kn);
kn.SECRET_COMBOBOX_MODE_DO_NOT_USE = _0;
kn.Option = ef;
kn.OptGroup = Zu;
kn._InternalPanelDoNotUseOrYouWillBeFired = OT;
process.env.NODE_ENV !== "production" && (kn.displayName = "Select");
const _T = kn;
let vr = null, Sn = (e) => e(), ho = [], ja = {};
function xT() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: i,
    top: o
  } = ja, a = e ?? Vm().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: i,
    top: o
  };
}
const RT = /* @__PURE__ */ v.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: d,
      container: h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: b
    } = xT();
    return {
      prefixCls: d,
      getContainer: () => h,
      maxCount: m,
      duration: p,
      rtl: g,
      top: b
    };
  }, [n, i] = v.useState(r), [o, a] = Cg(n), s = Vm(), c = s.getRootPrefixCls(), l = s.getIconPrefixCls(), u = s.getTheme(), f = () => {
    i(r);
  };
  return v.useEffect(f, []), v.useImperativeHandle(t, () => {
    const d = Object.assign({}, o);
    return Object.keys(d).forEach((h) => {
      d[h] = function() {
        return f(), o[h].apply(o, arguments);
      };
    }), {
      instance: d,
      sync: f
    };
  }), /* @__PURE__ */ v.createElement($u, {
    prefixCls: c,
    iconPrefixCls: l,
    theme: u
  }, a);
});
function gs() {
  if (!vr) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    vr = t, Sn(() => {
      Og(/* @__PURE__ */ v.createElement(RT, {
        ref: (r) => {
          const {
            instance: n,
            sync: i
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = i, gs());
          });
        }
      }), e);
    });
    return;
  }
  vr.instance && (ho.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          Sn(() => {
            const n = vr.instance.open(Object.assign(Object.assign({}, ja), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          Sn(() => {
            vr?.instance.destroy(e.key);
          });
          break;
        default:
          Sn(() => {
            var n;
            const i = (n = vr.instance)[t].apply(n, Ee(e.args));
            i?.then(e.resolve), e.setCloseFn(i);
          });
      }
  }), ho = []);
}
function PT(e) {
  ja = Object.assign(Object.assign({}, ja), e), Sn(() => {
    var t;
    (t = vr?.sync) === null || t === void 0 || t.call(vr);
  });
}
function TT(e) {
  const t = Uu((r) => {
    let n;
    const i = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (o) => {
        n = o;
      }
    };
    return ho.push(i), () => {
      n ? Sn(() => {
        n();
      }) : i.skipped = !0;
    };
  });
  return gs(), t;
}
function NT(e, t) {
  process.env.NODE_ENV !== "production" && V2("message");
  const r = Uu((n) => {
    let i;
    const o = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        i = a;
      }
    };
    return ho.push(o), () => {
      i ? Sn(() => {
        i();
      }) : o.skipped = !0;
    };
  });
  return gs(), r;
}
function MT(e) {
  ho.push({
    type: "destroy",
    key: e
  }), gs();
}
const IT = ["success", "info", "warning", "error", "loading"], DT = {
  open: TT,
  destroy: MT,
  config: PT,
  useMessage: YO,
  _InternalPanelDoNotUseOrYouWillBeFired: WO
}, R0 = DT;
IT.forEach((e) => {
  R0[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return NT(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const AT = R0, P0 = po(
  {}
), fM = ({ children: e }) => {
  const [t, r] = AT.useMessage(), n = ({ type: i, message: o }) => {
    t.open({
      type: i ?? "info",
      content: o,
      duration: 5
    });
  };
  return /* @__PURE__ */ dv(Wl, { children: [
    r,
    /* @__PURE__ */ Ct(P0.Provider, { value: { open: n }, children: e })
  ] });
}, dM = () => Qt(P0), hM = () => {
  Ht(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class vM {
  async operate(t, r, n = "query") {
    const i = {
      variables: r ? {
        payload: r
      } : void 0
    };
    let o;
    try {
      return n === "mutate" ? o = await cd.mutate({
        mutation: t.gql,
        ...i
      }) : o = await cd.query({
        query: t.gql,
        ...i
      }), [o?.data?.[t.method], null];
    } catch (a) {
      return _isDev_ && console.log(a), [null, a];
    }
  }
}
var T0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Xh = Te.createContext && Te.createContext(T0), on = globalThis && globalThis.__assign || function() {
  return on = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, on.apply(this, arguments);
}, FT = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function N0(e) {
  return e && e.map(function(t, r) {
    return Te.createElement(t.tag, on({
      key: r
    }, t.attr), N0(t.child));
  });
}
function nr(e) {
  return function(t) {
    return Te.createElement($T, on({
      attr: on({}, e.attr)
    }, t), N0(e.child));
  };
}
function $T(e) {
  var t = function(r) {
    var n = e.attr, i = e.size, o = e.title, a = FT(e, ["attr", "size", "title"]), s = i || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), Te.createElement("svg", on({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: on(on({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && Te.createElement("title", null, o), e.children);
  };
  return Xh !== void 0 ? Te.createElement(Xh.Consumer, null, function(r) {
    return t(r);
  }) : t(T0);
}
function pM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function mM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function gM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function yM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function bM(e) {
  return nr({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function EM(e) {
  return nr({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function SM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function wM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function CM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function OM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function _M(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function xM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function RM(e) {
  return nr({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function PM(e) {
  return nr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const TM = ({ children: e, override: t, ...r }) => /* @__PURE__ */ Ct($u, { theme: {
  token: { colorPrimary: t }
}, children: /* @__PURE__ */ Ct(Y_, { ...r, style: { minWidth: "85px" }, children: e }) });
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
function kT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function LT() {
  let [, e] = lr(/* @__PURE__ */ Object.create(null));
  return hc(() => {
    e(/* @__PURE__ */ Object.create(null));
  }, []);
}
var jT = kT() ? fv : Ht, VT = ({
  children: e,
  type: t = "reach-portal",
  containerRef: r
}) => {
  let n = v.useRef(null), i = v.useRef(null), o = LT();
  return v.useEffect(() => {
    r != null && (typeof r != "object" || !("current" in r) ? console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : r.current == null && console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."));
  }, [r]), jT(() => {
    if (!n.current)
      return;
    let a = n.current.ownerDocument, s = r?.current || a.body;
    return i.current = a?.createElement(t), s.appendChild(i.current), o(), () => {
      i.current && s && s.removeChild(i.current);
    };
  }, [t, o, r]), i.current ? Ul(e, i.current) : /* @__PURE__ */ v.createElement("span", {
    ref: n
  });
}, M0 = ({
  unstable_skipInitialRender: e,
  ...t
}) => {
  let [r, n] = v.useState(!1);
  return v.useEffect(() => {
    e && n(!0);
  }, [e]), e && !r ? null : /* @__PURE__ */ v.createElement(VT, {
    ...t
  });
};
M0.displayName = "Portal";
const zT = () => ({
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
var $l = { exports: {} }, Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jh;
function HT() {
  if (Jh)
    return Ye;
  Jh = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case r:
            case i:
            case n:
            case l:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case a:
                case c:
                case d:
                case f:
                case o:
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
  return Ye.ContextConsumer = a, Ye.ContextProvider = o, Ye.Element = e, Ye.ForwardRef = c, Ye.Fragment = r, Ye.Lazy = d, Ye.Memo = f, Ye.Portal = t, Ye.Profiler = i, Ye.StrictMode = n, Ye.Suspense = l, Ye.SuspenseList = u, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(g) {
    return p(g) === a;
  }, Ye.isContextProvider = function(g) {
    return p(g) === o;
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
    return p(g) === i;
  }, Ye.isStrictMode = function(g) {
    return p(g) === n;
  }, Ye.isSuspense = function(g) {
    return p(g) === l;
  }, Ye.isSuspenseList = function(g) {
    return p(g) === u;
  }, Ye.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === i || g === n || g === l || g === u || g === h || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === o || g.$$typeof === a || g.$$typeof === c || g.$$typeof === m || g.getModuleId !== void 0);
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
var Zh;
function BT() {
  return Zh || (Zh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, p = !1, g = !1, b = !1, y = !1, E;
    E = Symbol.for("react.module.reference");
    function w(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || y || z === n || z === l || z === u || b || z === h || m || p || g || typeof z == "object" && z !== null && (z.$$typeof === d || z.$$typeof === f || z.$$typeof === o || z.$$typeof === a || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === E || z.getModuleId !== void 0));
    }
    function S(z) {
      if (typeof z == "object" && z !== null) {
        var te = z.$$typeof;
        switch (te) {
          case e:
            var fe = z.type;
            switch (fe) {
              case r:
              case i:
              case n:
              case l:
              case u:
                return fe;
              default:
                var se = fe && fe.$$typeof;
                switch (se) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case f:
                  case o:
                    return se;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var C = a, O = o, T = e, N = c, x = r, L = d, R = f, _ = t, P = i, I = n, A = l, D = u, B = !1, Q = !1;
    function ie(z) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(z) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(z) {
      return S(z) === a;
    }
    function H(z) {
      return S(z) === o;
    }
    function j(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function Y(z) {
      return S(z) === c;
    }
    function M(z) {
      return S(z) === r;
    }
    function q(z) {
      return S(z) === d;
    }
    function $(z) {
      return S(z) === f;
    }
    function J(z) {
      return S(z) === t;
    }
    function re(z) {
      return S(z) === i;
    }
    function X(z) {
      return S(z) === n;
    }
    function k(z) {
      return S(z) === l;
    }
    function ee(z) {
      return S(z) === u;
    }
    Xe.ContextConsumer = C, Xe.ContextProvider = O, Xe.Element = T, Xe.ForwardRef = N, Xe.Fragment = x, Xe.Lazy = L, Xe.Memo = R, Xe.Portal = _, Xe.Profiler = P, Xe.StrictMode = I, Xe.Suspense = A, Xe.SuspenseList = D, Xe.isAsyncMode = ie, Xe.isConcurrentMode = ce, Xe.isContextConsumer = F, Xe.isContextProvider = H, Xe.isElement = j, Xe.isForwardRef = Y, Xe.isFragment = M, Xe.isLazy = q, Xe.isMemo = $, Xe.isPortal = J, Xe.isProfiler = re, Xe.isStrictMode = X, Xe.isSuspense = k, Xe.isSuspenseList = ee, Xe.isValidElementType = w, Xe.typeOf = S;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? $l.exports = HT() : $l.exports = BT();
var rf = $l.exports;
function WT(e) {
  function t(F, H, j, Y, M) {
    for (var q = 0, $ = 0, J = 0, re = 0, X, k, ee = 0, z = 0, te, fe = te = X = 0, se = 0, he = 0, ge = 0, ne = 0, de = j.length, Ne = de - 1, Ie, oe = "", pe = "", Ze = "", it = "", et; se < de; ) {
      if (k = j.charCodeAt(se), se === Ne && $ + re + J + q !== 0 && ($ !== 0 && (k = $ === 47 ? 10 : 47), re = J = q = 0, de++, Ne++), $ + re + J + q === 0) {
        if (se === Ne && (0 < he && (oe = oe.replace(d, "")), 0 < oe.trim().length)) {
          switch (k) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              oe += j.charAt(se);
          }
          k = 59;
        }
        switch (k) {
          case 123:
            for (oe = oe.trim(), X = oe.charCodeAt(0), te = 1, ne = ++se; se < de; ) {
              switch (k = j.charCodeAt(se)) {
                case 123:
                  te++;
                  break;
                case 125:
                  te--;
                  break;
                case 47:
                  switch (k = j.charCodeAt(se + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (fe = se + 1; fe < Ne; ++fe)
                          switch (j.charCodeAt(fe)) {
                            case 47:
                              if (k === 42 && j.charCodeAt(fe - 1) === 42 && se + 2 !== fe) {
                                se = fe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (k === 47) {
                                se = fe + 1;
                                break e;
                              }
                          }
                        se = fe;
                      }
                  }
                  break;
                case 91:
                  k++;
                case 40:
                  k++;
                case 34:
                case 39:
                  for (; se++ < Ne && j.charCodeAt(se) !== k; )
                    ;
              }
              if (te === 0)
                break;
              se++;
            }
            switch (te = j.substring(ne, se), X === 0 && (X = (oe = oe.replace(f, "").trim()).charCodeAt(0)), X) {
              case 64:
                switch (0 < he && (oe = oe.replace(d, "")), k = oe.charCodeAt(1), k) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = H;
                    break;
                  default:
                    he = A;
                }
                if (te = t(H, he, te, k, M + 1), ne = te.length, 0 < B && (he = r(A, oe, ge), et = s(3, te, he, H, _, R, ne, k, M, Y), oe = he.join(""), et !== void 0 && (ne = (te = et.trim()).length) === 0 && (k = 0, te = "")), 0 < ne)
                  switch (k) {
                    case 115:
                      oe = oe.replace(C, a);
                    case 100:
                    case 109:
                    case 45:
                      te = oe + "{" + te + "}";
                      break;
                    case 107:
                      oe = oe.replace(y, "$1 $2"), te = oe + "{" + te + "}", te = I === 1 || I === 2 && o("@" + te, 3) ? "@-webkit-" + te + "@" + te : "@" + te;
                      break;
                    default:
                      te = oe + te, Y === 112 && (te = (pe += te, ""));
                  }
                else
                  te = "";
                break;
              default:
                te = t(H, r(H, oe, ge), te, Y, M + 1);
            }
            Ze += te, te = ge = he = fe = X = 0, oe = "", k = j.charCodeAt(++se);
            break;
          case 125:
          case 59:
            if (oe = (0 < he ? oe.replace(d, "") : oe).trim(), 1 < (ne = oe.length))
              switch (fe === 0 && (X = oe.charCodeAt(0), X === 45 || 96 < X && 123 > X) && (ne = (oe = oe.replace(" ", ":")).length), 0 < B && (et = s(1, oe, H, F, _, R, pe.length, Y, M, Y)) !== void 0 && (ne = (oe = et.trim()).length) === 0 && (oe = "\0\0"), X = oe.charCodeAt(0), k = oe.charCodeAt(1), X) {
                case 0:
                  break;
                case 64:
                  if (k === 105 || k === 99) {
                    it += oe + j.charAt(se);
                    break;
                  }
                default:
                  oe.charCodeAt(ne - 1) !== 58 && (pe += i(oe, X, k, oe.charCodeAt(2)));
              }
            ge = he = fe = X = 0, oe = "", k = j.charCodeAt(++se);
        }
      }
      switch (k) {
        case 13:
        case 10:
          $ === 47 ? $ = 0 : 1 + X === 0 && Y !== 107 && 0 < oe.length && (he = 1, oe += "\0"), 0 < B * ie && s(0, oe, H, F, _, R, pe.length, Y, M, Y), R = 1, _++;
          break;
        case 59:
        case 125:
          if ($ + re + J + q === 0) {
            R++;
            break;
          }
        default:
          switch (R++, Ie = j.charAt(se), k) {
            case 9:
            case 32:
              if (re + q + $ === 0)
                switch (ee) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = "";
                    break;
                  default:
                    k !== 32 && (Ie = " ");
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
              re + $ + q === 0 && (he = ge = 1, Ie = "\f" + Ie);
              break;
            case 108:
              if (re + $ + q + P === 0 && 0 < fe)
                switch (se - fe) {
                  case 2:
                    ee === 112 && j.charCodeAt(se - 3) === 58 && (P = ee);
                  case 8:
                    z === 111 && (P = z);
                }
              break;
            case 58:
              re + $ + q === 0 && (fe = se);
              break;
            case 44:
              $ + J + re + q === 0 && (he = 1, Ie += "\r");
              break;
            case 34:
            case 39:
              $ === 0 && (re = re === k ? 0 : re === 0 ? k : re);
              break;
            case 91:
              re + $ + J === 0 && q++;
              break;
            case 93:
              re + $ + J === 0 && q--;
              break;
            case 41:
              re + $ + q === 0 && J--;
              break;
            case 40:
              if (re + $ + q === 0) {
                if (X === 0)
                  switch (2 * ee + 3 * z) {
                    case 533:
                      break;
                    default:
                      X = 1;
                  }
                J++;
              }
              break;
            case 64:
              $ + J + re + q + fe + te === 0 && (te = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + q + J))
                switch ($) {
                  case 0:
                    switch (2 * k + 3 * j.charCodeAt(se + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        ne = se, $ = 42;
                    }
                    break;
                  case 42:
                    k === 47 && ee === 42 && ne + 2 !== se && (j.charCodeAt(ne + 2) === 33 && (pe += j.substring(ne, se + 1)), Ie = "", $ = 0);
                }
          }
          $ === 0 && (oe += Ie);
      }
      z = ee, ee = k, se++;
    }
    if (ne = pe.length, 0 < ne) {
      if (he = H, 0 < B && (et = s(2, pe, he, F, _, R, ne, Y, M, Y), et !== void 0 && (pe = et).length === 0))
        return it + pe + Ze;
      if (pe = he.join(",") + "{" + pe + "}", I * P !== 0) {
        switch (I !== 2 || o(pe, 2) || (P = 0), P) {
          case 111:
            pe = pe.replace(w, ":-moz-$1") + pe;
            break;
          case 112:
            pe = pe.replace(E, "::-webkit-input-$1") + pe.replace(E, "::-moz-$1") + pe.replace(E, ":-ms-input-$1") + pe;
        }
        P = 0;
      }
    }
    return it + pe + Ze;
  }
  function r(F, H, j) {
    var Y = H.trim().split(g);
    H = Y;
    var M = Y.length, q = F.length;
    switch (q) {
      case 0:
      case 1:
        var $ = 0;
        for (F = q === 0 ? "" : F[0] + " "; $ < M; ++$)
          H[$] = n(F, H[$], j).trim();
        break;
      default:
        var J = $ = 0;
        for (H = []; $ < M; ++$)
          for (var re = 0; re < q; ++re)
            H[J++] = n(F[re] + " ", Y[$], j).trim();
    }
    return H;
  }
  function n(F, H, j) {
    var Y = H.charCodeAt(0);
    switch (33 > Y && (Y = (H = H.trim()).charCodeAt(0)), Y) {
      case 38:
        return H.replace(b, "$1" + F.trim());
      case 58:
        return F.trim() + H.replace(b, "$1" + F.trim());
      default:
        if (0 < 1 * j && 0 < H.indexOf("\f"))
          return H.replace(b, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + H;
  }
  function i(F, H, j, Y) {
    var M = F + ";", q = 2 * H + 3 * j + 4 * Y;
    if (q === 944) {
      F = M.indexOf(":", 9) + 1;
      var $ = M.substring(F, M.length - 1).trim();
      return $ = M.substring(0, F).trim() + $ + ";", I === 1 || I === 2 && o($, 1) ? "-webkit-" + $ + $ : $;
    }
    if (I === 0 || I === 2 && !o(M, 1))
      return M;
    switch (q) {
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
            $ = M.replace(S, "tb");
            break;
          case 232:
            $ = M.replace(S, "tb-rl");
            break;
          case 220:
            $ = M.replace(S, "lr");
            break;
          default:
            return M;
        }
        return "-webkit-" + M + "-ms-" + $ + M;
      case 1017:
        if (M.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (H = (M = F).length - 10, $ = (M.charCodeAt(H) === 33 ? M.substring(0, H) : M).substring(F.indexOf(":", 7) + 1).trim(), q = $.charCodeAt(0) + ($.charCodeAt(7) | 0)) {
          case 203:
            if (111 > $.charCodeAt(8))
              break;
          case 115:
            M = M.replace($, "-webkit-" + $) + ";" + M;
            break;
          case 207:
          case 102:
            M = M.replace($, "-webkit-" + (102 < q ? "inline-" : "") + "box") + ";" + M.replace($, "-webkit-" + $) + ";" + M.replace($, "-ms-" + $ + "box") + ";" + M;
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
        if (x.test(F) === !0)
          return ($ = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(F.replace("stretch", "fill-available"), H, j, Y).replace(":fill-available", ":stretch") : M.replace($, "-webkit-" + $) + M.replace($, "-moz-" + $.replace("fill-", "")) + M;
        break;
      case 962:
        if (M = "-webkit-" + M + (M.charCodeAt(5) === 102 ? "-ms-" + M : "") + M, j + Y === 211 && M.charCodeAt(13) === 105 && 0 < M.indexOf("transform", 10))
          return M.substring(0, M.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + M;
    }
    return M;
  }
  function o(F, H) {
    var j = F.indexOf(H === 1 ? ":" : "{"), Y = F.substring(0, H !== 3 ? j : 10);
    return j = F.substring(j + 1, F.length - 1), Q(H !== 2 ? Y : Y.replace(N, "$1"), j, H);
  }
  function a(F, H) {
    var j = i(H, H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2));
    return j !== H + ";" ? j.replace(O, " or ($1)").substring(4) : "(" + H + ")";
  }
  function s(F, H, j, Y, M, q, $, J, re, X) {
    for (var k = 0, ee = H, z; k < B; ++k)
      switch (z = D[k].call(u, F, ee, j, Y, M, q, $, J, re, X)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ee = z;
      }
    if (ee !== H)
      return ee;
  }
  function c(F) {
    switch (F) {
      case void 0:
      case null:
        B = D.length = 0;
        break;
      default:
        if (typeof F == "function")
          D[B++] = F;
        else if (typeof F == "object")
          for (var H = 0, j = F.length; H < j; ++H)
            c(F[H]);
        else
          ie = !!F | 0;
    }
    return c;
  }
  function l(F) {
    return F = F.prefix, F !== void 0 && (Q = null, F ? typeof F != "function" ? I = 1 : (I = 2, Q = F) : I = 0), l;
  }
  function u(F, H) {
    var j = F;
    if (33 > j.charCodeAt(0) && (j = j.trim()), ce = j, j = [ce], 0 < B) {
      var Y = s(-1, H, j, j, _, R, 0, 0, 0, 0);
      Y !== void 0 && typeof Y == "string" && (H = Y);
    }
    var M = t(A, j, H, 0, 0);
    return 0 < B && (Y = s(-2, M, j, j, _, R, M.length, 0, 0, 0), Y !== void 0 && (M = Y)), ce = "", P = 0, R = _ = 1, M;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, m = /zoo|gra/, p = /([,: ])(transform)/g, g = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, E = /::(place)/g, w = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, T = /-self|flex-/g, N = /[^]*?(:[rp][el]a[\w-]+)[^]*/, x = /stretch|:\s*\w+\-(?:conte|avail)/, L = /([^-])(image-set\()/, R = 1, _ = 1, P = 0, I = 1, A = [], D = [], B = 0, Q = null, ie = 0, ce = "";
  return u.use = c, u.set = l, e !== void 0 && l(e), u;
}
function UT(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ev = /* @__PURE__ */ UT(
  function(e) {
    return qT.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nf = yu, QT = {
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
}, GT = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, KT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, I0 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, of = {};
of[nf.ForwardRef] = KT;
of[nf.Memo] = I0;
function tv(e) {
  return nf.isMemo(e) ? I0 : of[e.$$typeof] || QT;
}
var YT = Object.defineProperty, XT = Object.getOwnPropertyNames, rv = Object.getOwnPropertySymbols, JT = Object.getOwnPropertyDescriptor, ZT = Object.getPrototypeOf, nv = Object.prototype;
function D0(e, t, r) {
  if (typeof t != "string") {
    if (nv) {
      var n = ZT(t);
      n && n !== nv && D0(e, n, r);
    }
    var i = XT(t);
    rv && (i = i.concat(rv(t)));
    for (var o = tv(e), a = tv(t), s = 0; s < i.length; ++s) {
      var c = i[s];
      if (!GT[c] && !(r && r[c]) && !(a && a[c]) && !(o && o[c])) {
        var l = JT(t, c);
        try {
          YT(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var eN = D0;
const tN = /* @__PURE__ */ Ov(eN);
function Ur() {
  return (Ur = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var iv = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, kl = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !rf.typeOf(e);
}, Va = Object.freeze([]), an = Object.freeze({});
function vo(e) {
  return typeof e == "function";
}
function Ll(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function af(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ei = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", sf = typeof window < "u" && "HTMLElement" in window, rN = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), nN = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function iN() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Pi(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(iN.apply(void 0, [nN[e]].concat(r)).trim());
}
var oN = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, o = i.length, a = o; r >= a; )
        (a <<= 1) < 0 && Pi(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var s = o; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(r + 1), l = 0, u = n.length; l < u; l++)
      this.tag.insertRule(c, n[l]) && (this.groupSizes[r]++, c++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), o = i + n;
      this.groupSizes[r] = 0;
      for (var a = i; a < o; a++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], o = this.indexOfGroup(r), a = o + i, s = o; s < a; s++)
      n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), pa = /* @__PURE__ */ new Map(), za = /* @__PURE__ */ new Map(), eo = 1, Go = function(e) {
  if (pa.has(e))
    return pa.get(e);
  for (; za.has(eo); )
    eo++;
  var t = eo++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Pi(16, "" + t), pa.set(e, t), za.set(t, e), t;
}, aN = function(e) {
  return za.get(e);
}, sN = function(e, t) {
  t >= eo && (eo = t + 1), pa.set(e, t), za.set(t, e);
}, cN = "style[" + Ei + '][data-styled-version="5.3.6"]', lN = new RegExp("^" + Ei + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), uN = function(e, t, r) {
  for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
    (n = i[o]) && e.registerName(t, n);
}, fN = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, o = r.length; i < o; i++) {
    var a = r[i].trim();
    if (a) {
      var s = a.match(lN);
      if (s) {
        var c = 0 | parseInt(s[1], 10), l = s[2];
        c !== 0 && (sN(l, c), uN(e, l, s[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, dN = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, A0 = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(s) {
    for (var c = s.childNodes, l = c.length; l >= 0; l--) {
      var u = c[l];
      if (u && u.nodeType === 1 && u.hasAttribute(Ei))
        return u;
    }
  }(r), o = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ei, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = dN();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, hN = function() {
  function e(r) {
    var n = this.element = A0(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === i)
          return c;
      }
      Pi(17);
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
}(), vN = function() {
  function e(r) {
    var n = this.element = A0(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(i, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), pN = function() {
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
}(), ov = sf, mN = { isServer: !sf, useCSSOMInjection: !rN }, F0 = function() {
  function e(r, n, i) {
    r === void 0 && (r = an), n === void 0 && (n = {}), this.options = Ur({}, mN, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && sf && ov && (ov = !1, function(o) {
      for (var a = document.querySelectorAll(cN), s = 0, c = a.length; s < c; s++) {
        var l = a[s];
        l && l.getAttribute(Ei) !== "active" && (fN(o, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Go(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ur({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, o = n.useCSSOMInjection, a = n.target, r = i ? new pN(a) : o ? new hN(a) : new vN(a), new oN(r)));
    var r, n, i, o, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Go(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Go(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Go(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, o = "", a = 0; a < i; a++) {
        var s = aN(a);
        if (s !== void 0) {
          var c = r.names.get(s), l = n.getGroup(a);
          if (c && l && c.size) {
            var u = Ei + ".g" + a + '[id="' + s + '"]', f = "";
            c !== void 0 && c.forEach(function(d) {
              d.length > 0 && (f += d + ",");
            }), o += "" + l + u + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), gN = /(a)(d)/gi, av = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function jl(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = av(t % 52) + r;
  return (av(t % 52) + r).replace(gN, "$1-$2");
}
var gn = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $0 = function(e) {
  return gn(5381, e);
};
function yN(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (vo(r) && !af(r))
      return !1;
  }
  return !0;
}
var bN = $0("5.3.6"), EN = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && yN(t), this.componentId = r, this.baseHash = gn(bN, r), this.baseStyle = n, F0.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var a = Si(this.rules, t, r, n).join(""), s = jl(gn(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(i, s)) {
          var c = n(a, "." + s, void 0, i);
          r.insertRules(i, s, c);
        }
        o.push(s), this.staticRulesId = s;
      }
    else {
      for (var l = this.rules.length, u = gn(this.baseHash, n.hash), f = "", d = 0; d < l; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (u = gn(u, h + d));
        else if (h) {
          var m = Si(h, t, r, n), p = Array.isArray(m) ? m.join("") : m;
          u = gn(u, p + d), f += p;
        }
      }
      if (f) {
        var g = jl(u >>> 0);
        if (!r.hasNameForId(i, g)) {
          var b = n(f, "." + g, void 0, i);
          r.insertRules(i, g, b);
        }
        o.push(g);
      }
    }
    return o.join(" ");
  }, e;
}(), SN = /^\s*\/\/.*$/gm, wN = [":", "[", ".", "#"];
function CN(e) {
  var t, r, n, i, o = e === void 0 ? an : e, a = o.options, s = a === void 0 ? an : a, c = o.plugins, l = c === void 0 ? Va : c, u = new WT(s), f = [], d = function(p) {
    function g(b) {
      if (b)
        try {
          p(b + "}");
        } catch {
        }
    }
    return function(b, y, E, w, S, C, O, T, N, x) {
      switch (b) {
        case 1:
          if (N === 0 && y.charCodeAt(0) === 64)
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
              return p(E[0] + y), "";
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
    return g === 0 && wN.indexOf(b[r.length]) !== -1 || b.match(i) ? p : "." + t;
  };
  function m(p, g, b, y) {
    y === void 0 && (y = "&");
    var E = p.replace(SN, ""), w = g && b ? b + " " + g + " { " + E + " }" : E;
    return t = y, r = g, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), u(b || !g ? "" : g, w);
  }
  return u.use([].concat(l, [function(p, g, b) {
    p === 2 && b.length && b[0].lastIndexOf(r) > 0 && (b[0] = b[0].replace(n, h));
  }, d, function(p) {
    if (p === -2) {
      var g = f;
      return f = [], g;
    }
  }])), m.hash = l.length ? l.reduce(function(p, g) {
    return g.name || Pi(15), gn(p, g.name);
  }, 5381).toString() : "", m;
}
var k0 = Te.createContext();
k0.Consumer;
var L0 = Te.createContext(), ON = (L0.Consumer, new F0()), Vl = CN();
function _N() {
  return Qt(k0) || ON;
}
function xN() {
  return Qt(L0) || Vl;
}
var RN = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, o) {
      o === void 0 && (o = Vl);
      var a = n.name + o.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return Pi(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Vl), this.name + t.hash;
  }, e;
}(), PN = /([A-Z])/, TN = /([A-Z])/g, NN = /^ms-/, MN = function(e) {
  return "-" + e.toLowerCase();
};
function sv(e) {
  return PN.test(e) ? e.replace(TN, MN).replace(NN, "-ms-") : e;
}
var cv = function(e) {
  return e == null || e === !1 || e === "";
};
function Si(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
      (i = Si(e[a], t, r, n)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
    return o;
  }
  if (cv(e))
    return "";
  if (af(e))
    return "." + e.styledComponentId;
  if (vo(e)) {
    if (typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && rf.isElement(c) && console.warn(Ll(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Si(c, t, r, n);
  }
  var l;
  return e instanceof RN ? r ? (e.inject(r, n), e.getName(n)) : e : kl(e) ? function u(f, d) {
    var h, m, p = [];
    for (var g in f)
      f.hasOwnProperty(g) && !cv(f[g]) && (Array.isArray(f[g]) && f[g].isCss || vo(f[g]) ? p.push(sv(g) + ":", f[g], ";") : kl(f[g]) ? p.push.apply(p, u(f[g], g)) : p.push(sv(g) + ": " + (h = g, (m = f[g]) == null || typeof m == "boolean" || m === "" ? "" : typeof m != "number" || m === 0 || h in rm ? String(m).trim() : m + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var lv = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function un(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return vo(e) || kl(e) ? lv(Si(iv(Va, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : lv(Si(iv(e, r)));
}
var uv = /invalid hook call/i, Ko = /* @__PURE__ */ new Set(), IN = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(o) {
        if (uv.test(o))
          i = !1, Ko.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
            s[c - 1] = arguments[c];
          n.apply(void 0, [o].concat(s));
        }
      }, Ae(), i && !Ko.has(r) && (console.warn(r), Ko.add(r));
    } catch (o) {
      uv.test(o.message) && Ko.delete(r);
    } finally {
      console.error = n;
    }
  }
}, DN = function(e, t, r) {
  return r === void 0 && (r = an), e.theme !== r.theme && e.theme || t || r.theme;
}, AN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, FN = /(^-|-$)/g;
function fc(e) {
  return e.replace(AN, "-").replace(FN, "");
}
var $N = function(e) {
  return jl($0(e) >>> 0);
};
function Yo(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var zl = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, kN = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function LN(e, t, r) {
  var n = e[r];
  zl(t) && zl(n) ? j0(n, t) : e[r] = t;
}
function j0(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var i = 0, o = r; i < o.length; i++) {
    var a = o[i];
    if (zl(a))
      for (var s in a)
        kN(s) && LN(e, a[s], s);
  }
  return e;
}
var V0 = Te.createContext();
V0.Consumer;
var dc = {};
function z0(e, t, r) {
  var n = af(e), i = !Yo(e), o = t.attrs, a = o === void 0 ? Va : o, s = t.componentId, c = s === void 0 ? function(y, E) {
    var w = typeof y != "string" ? "sc" : fc(y);
    dc[w] = (dc[w] || 0) + 1;
    var S = w + "-" + $N("5.3.6" + w + dc[w]);
    return E ? E + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, l = t.displayName, u = l === void 0 ? function(y) {
    return Yo(y) ? "styled." + y : "Styled(" + Ll(y) + ")";
  }(e) : l, f = t.displayName && t.componentId ? fc(t.displayName) + "-" + t.componentId : t.componentId || c, d = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(y, E, w) {
    return e.shouldForwardProp(y, E, w) && t.shouldForwardProp(y, E, w);
  } : e.shouldForwardProp);
  var m, p = new EN(r, f, n ? e.componentStyle : void 0), g = p.isStatic && a.length === 0, b = function(y, E) {
    return function(w, S, C, O) {
      var T = w.attrs, N = w.componentStyle, x = w.defaultProps, L = w.foldedComponentIds, R = w.shouldForwardProp, _ = w.styledComponentId, P = w.target;
      process.env.NODE_ENV !== "production" && uf(_);
      var I = function(Y, M, q) {
        Y === void 0 && (Y = an);
        var $ = Ur({}, M, { theme: Y }), J = {};
        return q.forEach(function(re) {
          var X, k, ee, z = re;
          for (X in vo(z) && (z = z($)), z)
            $[X] = J[X] = X === "className" ? (k = J[X], ee = z[X], k && ee ? k + " " + ee : k || ee) : z[X];
        }), [$, J];
      }(DN(S, Qt(V0), x) || an, S, T), A = I[0], D = I[1], B = function(Y, M, q, $) {
        var J = _N(), re = xN(), X = M ? Y.generateAndInjectStyles(an, J, re) : Y.generateAndInjectStyles(q, J, re);
        return process.env.NODE_ENV !== "production" && uf(X), process.env.NODE_ENV !== "production" && !M && $ && $(X), X;
      }(N, O, A, process.env.NODE_ENV !== "production" ? w.warnTooManyClasses : void 0), Q = C, ie = D.$as || S.$as || D.as || S.as || P, ce = Yo(ie), F = D !== S ? Ur({}, S, {}, D) : S, H = {};
      for (var j in F)
        j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? H.as = F[j] : (R ? R(j, ev, ie) : !ce || ev(j)) && (H[j] = F[j]));
      return S.style && D.style !== S.style && (H.style = Ur({}, S.style, {}, D.style)), H.className = Array.prototype.concat(L, _, B !== _ ? B : null, S.className, D.className).filter(Boolean).join(" "), H.ref = Q, U0(ie, H);
    }(m, y, E, g);
  };
  return b.displayName = u, (m = Te.forwardRef(b)).attrs = d, m.componentStyle = p, m.displayName = u, m.shouldForwardProp = h, m.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Va, m.styledComponentId = f, m.target = n ? e.target : e, m.withComponent = function(y) {
    var E = t.componentId, w = function(C, O) {
      if (C == null)
        return {};
      var T, N, x = {}, L = Object.keys(C);
      for (N = 0; N < L.length; N++)
        T = L[N], O.indexOf(T) >= 0 || (x[T] = C[T]);
      return x;
    }(t, ["componentId"]), S = E && E + "-" + (Yo(y) ? y : fc(Ll(y)));
    return z0(y, Ur({}, w, { attrs: d, componentId: S }), r);
  }, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = n ? j0({}, e.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (IN(u, f), m.warnTooManyClasses = function(y, E) {
    var w = {}, S = !1;
    return function(C) {
      if (!S && (w[C] = !0, Object.keys(w).length >= 200)) {
        var O = E ? ' with the id of "' + E + '"' : "";
        console.warn("Over 200 classes were generated for component " + y + O + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, w = {};
      }
    };
  }(u, f)), m.toString = function() {
    return "." + m.styledComponentId;
  }, i && tN(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), m;
}
var Hl = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = an), !rf.isValidElementType(n))
      return Pi(1, String(n));
    var o = function() {
      return r(n, i, un.apply(void 0, arguments));
    };
    return o.withConfig = function(a) {
      return t(r, n, Ur({}, i, {}, a));
    }, o.attrs = function(a) {
      return t(r, n, Ur({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }));
    }, o;
  }(z0, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Hl[e] = Hl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ti = Hl, cf = (e = "100%", t = e) => un`
  width: ${e};
  height: ${t};
`;
un`
  border: 1px solid red;
`;
const jN = (e = "flex-start", t = "stretch", r = "row") => un`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
  flex-direction: ${r};
`, H0 = (e = "&") => un`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, In = (e) => un`
  ${({ theme: t }) => t[e]}
`, VN = (e) => un`
  position: absolute;
  ${Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(`
`)}
`, zN = un`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, HN = "1px solid", BN = Ti.div`
  ${jN("center", "center")};
  ${VN({
  left: "0",
  top: "0"
})}
  ${cf("100vw", "100vh")};
  background: rgba(0, 0, 0, 0.44);
  z-index: 100;
`, WN = Ti.div`
  display: grid;
  position: relative;
  width: ${({ $width: e }) => e ?? 50}vw;
  height: ${({ $height: e }) => e ?? 60}vh;
  background: ${In("grey")};
  border: 2px solid ${In("lightGrey")};
  min-height: 300px;
  border-radius: 6px;
  cursor: grab;
  ${zN};
  touch-action: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${H0()};
`, UN = Ti.div`
  margin: 0 auto;
  margin-top: 18px;
  ${cf("60%", "100%")}
  & > * {
    cursor: initial;
    color: ${In("light")};
  }
`, NM = Ti.h1`
  text-align: center;
  padding-bottom: 18px;
  margin-bottom: 30px;
  font-size: ${({ theme: e }) => e.fz10};
  border-bottom: ${HN} ${In("lightGrey")};
`, MM = Ti.div`
  background: ${In("lightGrey")};
  ${cf("100%", "2px")};
  margin-bottom: 30px;
  margin-top: -8px;
`, qN = ({
  onClose: e,
  isOpen: t,
  children: r,
  width: n,
  height: i
}) => {
  const { Spring: o, Gesture: a } = xp(), { opacity: s, transform: c } = zT(), l = o.useTransition(t, {
    from: s.from(),
    enter: s.to(),
    leave: s.from(),
    config: o.config.stiff
  }), u = o.useSpring({
    from: c.from(),
    to: c.to(t),
    config: o.config.wobbly
  }), [f, d] = o.useSpring(() => ({
    y: 0,
    x: 0,
    scale: 1
  })), { y: h, x: m, scale: p } = f, g = a.useDrag(
    ({ offset: [y, E], down: w }) => {
      d.start({
        y: w ? E : 0,
        immediate: !1,
        x: w ? y : 0,
        scale: w ? 1.07 : 1
      });
    },
    { from: () => [0, 0], filterTaps: !0, rubberband: !0, delay: 200 }
  ), b = (y) => {
    y.stopPropagation();
  };
  return /* @__PURE__ */ Ct(Wl, { children: l((y, E) => /* @__PURE__ */ Ct(Cp, { when: E, children: /* @__PURE__ */ Ct(M0, { children: /* @__PURE__ */ Ct(BN, { style: y, onClick: e, as: o.a.div, children: /* @__PURE__ */ Ct(
    WN,
    {
      style: { ...u, x: m, y: h, scale: p },
      ...g(),
      onClick: b,
      as: o.a.div,
      $width: n,
      $height: i,
      children: /* @__PURE__ */ Ct(
        Y0,
        {
          damping: 0.05,
          syncCallbacks: !0,
          alwaysShowTracks: !0,
          children: /* @__PURE__ */ Ct(UN, { children: r })
        }
      )
    }
  ) }) }) })) });
}, IM = (e) => /* @__PURE__ */ Ct(_p, { children: /* @__PURE__ */ Ct(qN, { ...e }) }), QN = (e, t) => {
  const { Spring: r, Gesture: n } = xp(), [{ y: i }, o] = r.useSpring(() => ({ y: t })), a = () => {
    o.start({ y: 0, immediate: !1, config: r.config.gentle });
  }, s = (f = 0) => {
    e(), o.start({
      y: t,
      immediate: !1,
      config: { ...r.config.stiff, velocity: f }
    });
  }, c = n.useDrag(
    ({ last: f, velocity: [, d], direction: [, h], offset: [, m], cancel: p }) => {
      m < -70 && p(), f ? m > t * 0.5 || d > 0.5 && h === 1 ? s(d) : a() : o.start({ y: m, immediate: h === -1 });
    },
    {
      from: () => [0, i.get()],
      filterTaps: !0,
      bounds: { top: 0 },
      rubberband: !0
    }
  ), l = i.to((f) => f < t ? "block" : "none");
  return {
    toggle: (f) => {
      f ? a() : s();
    },
    bind: c,
    div: r.a.div,
    springs: {
      display: l,
      y: i
    }
  };
}, GN = Ti.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${In("darkBlue")};
  border-top: 2px solid ${In("lightGrey")};
  touch-action: none;
  bottom: ${({ $bottom: e }) => `calc(-100vh + ${e - 100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${H0()};
`, KN = ({ children: e, onClose: t, isOpen: r, height: n }) => {
  const i = QN(t, n);
  return Ht(() => {
    i.toggle(r);
  }, [r]), /* @__PURE__ */ Ct(
    GN,
    {
      $bottom: n,
      ...i.bind(),
      style: i.springs,
      as: i.div,
      children: e
    }
  );
}, DM = (e) => /* @__PURE__ */ Ct(_p, { children: /* @__PURE__ */ Ct(KN, { ...e }) }), AM = ({
  onChange: e,
  value: t,
  options: r,
  defaultValue: n
}) => /* @__PURE__ */ Ct(
  _T,
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
  pM as AiOutlineClose,
  mM as AiOutlineHtml5,
  gM as AiOutlineInfoCircle,
  yM as AiOutlineSwap,
  _p as AnimationProvider,
  vM as ApolloMiddleware,
  bM as BsJournals,
  EM as BsSearch,
  TM as ColoredButton,
  Cp as Display,
  uM as ErrorBoundary,
  SM as GoTerminal,
  wM as GrClear,
  X0 as LocalStorage,
  ty as LocalStorageClient,
  CM as LuTestTube2,
  OM as MdFindReplace,
  IM as Modal,
  MM as ModalSeparator,
  NM as ModalTitle,
  P0 as NotificationsContext,
  fM as NotificationsProvider,
  DM as Popover,
  iM as PrivatePaths,
  pS as RoutePaths,
  AM as Select,
  _M as SlInfo,
  xM as SlSizeFullscreen,
  RM as TfiSettings,
  PM as VscPlay,
  cd as apolloClient,
  nM as httpService,
  tM as isFunction,
  eM as isObject,
  J0 as isString,
  oM as useAltKeyDown,
  xp as useAnimations,
  aM as useAsyncEffect,
  mS as useBooleanState,
  sM as useDebounce,
  cM as useFilteredEffect,
  lM as useFullScreen,
  dM as useNotifications,
  hM as useOverflow
};
