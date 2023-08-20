import * as T from "react";
import Ie, { useState as bl, useEffect as St, useRef as Je, createContext as cn, useMemo as El, useContext as et, useLayoutEffect as Sl, useDebugValue as Qs, createElement as vp } from "react";
import { jsx as st, jsxs as ja, Fragment as $a } from "react/jsx-runtime";
import * as mp from "react-dom";
import yp, { createPortal as gp } from "react-dom";
const bp = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, x_ = (e) => typeof e == "object" && e !== null, Ep = (e) => typeof e == "string", T_ = (e) => typeof e == "function";
process.env.CLIENT_URL;
const Sp = "code_gear";
process.env.SERVER_PREFIX;
process.env.SERVER_PORT;
process.env.CODE_COMPILER_API_URL;
const _l = process.env.SERVER_URL ?? "http://localhost:6868", _p = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
};
process.env.JWT_SECRET;
class wp {
  constructor(t) {
    this.isDisabled = !1, this.isDisabled = t ?? this.isDisabled;
  }
  get(t, r) {
    if (this.isDisabled)
      return r;
    const n = localStorage.getItem(this.withPrefix(t));
    return n ? Op(n) ? JSON.parse(n) : n : r;
  }
  set(t, r) {
    if (!(this.isDisabled || !(t in bp))) {
      if (Ep(r))
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
    return `${Sp}__${t}`;
  }
}
const Op = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
};
var xi = function(e, t) {
  return xi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, xi(e, t);
};
function ct(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  xi(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var x = function() {
  return x = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, x.apply(this, arguments);
};
function Kt(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Pt(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
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
      l.done ? i(l.value) : o(l.value).then(s, u);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function kt(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
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
        if (n = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = t.call(e, r);
      } catch (l) {
        c = [6, l], o = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function qt(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Wo = "Invariant Violation", Ws = Object.setPrototypeOf, Cp = Ws === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Ws, ue = (
  /** @class */
  function(e) {
    ct(t, e);
    function t(r) {
      r === void 0 && (r = Wo);
      var n = e.call(this, typeof r == "number" ? Wo + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Wo, Cp(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function L(e, t) {
  if (!e)
    throw new ue(t);
}
var wl = ["debug", "log", "warn", "error", "silent"], xp = wl.indexOf("log");
function Sn(e) {
  return function() {
    if (wl.indexOf(e) >= xp) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Sn("debug"), e.log = Sn("log"), e.warn = Sn("warn"), e.error = Sn("error");
})(L || (L = {}));
function Xe(e) {
  try {
    return e();
  } catch {
  }
}
const Gs = Xe(function() {
  return globalThis;
}) || Xe(function() {
  return window;
}) || Xe(function() {
  return self;
}) || Xe(function() {
  return global;
}) || Xe(function() {
  return Xe.constructor("return this")();
});
var Ys = "__", Ks = [Ys, Ys].join("DEV");
function Tp() {
  try {
    return !!__DEV__;
  } catch {
    return Object.defineProperty(Gs, Ks, {
      value: Xe(function() {
        return process.env.NODE_ENV;
      }) !== "production",
      enumerable: !1,
      configurable: !0,
      writable: !0
    }), Gs[Ks];
  }
}
const Go = Tp();
function Nt(e) {
  try {
    return e();
  } catch {
  }
}
var Ti = Nt(function() {
  return globalThis;
}) || Nt(function() {
  return window;
}) || Nt(function() {
  return self;
}) || Nt(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
Nt(function() {
  return Nt.constructor("return this")();
}), Ai = !1;
function Ap() {
  Ti && !Nt(function() {
    return process.env.NODE_ENV;
  }) && !Nt(function() {
    return process;
  }) && (Object.defineProperty(Ti, "process", {
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
  }), Ai = !0);
}
Ap();
function Xs() {
  Ai && (delete Ti.process, Ai = !1);
}
function Ln(e, t) {
  if (!!!e)
    throw new Error(t);
}
const Ol = {
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
}, Rp = new Set(Object.keys(Ol));
function Js(e) {
  const t = e?.kind;
  return typeof t == "string" && Rp.has(t);
}
var Zs;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Zs || (Zs = {}));
var Ve;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Ve || (Ve = {}));
function ec(e) {
  return e === 9 || e === 32;
}
function Pp(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((h) => h.length === 0 || ec(h.charCodeAt(0))), a = r.endsWith('\\"""'), s = e.endsWith('"') && !a, u = e.endsWith("\\"), c = s || u, l = !(t != null && t.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || c || i || a);
  let f = "";
  const d = o && ec(e.charCodeAt(0));
  return (l && !d || i) && (f += `
`), f += r, (l || c) && (f += `
`), '"""' + f + '"""';
}
const kp = 10, Cl = 2;
function xl(e) {
  return So(e, []);
}
function So(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Np(e, t);
    default:
      return String(e);
  }
}
function Np(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Dp(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : So(n, r);
  } else if (Array.isArray(e))
    return Ip(e, r);
  return Mp(e, r);
}
function Dp(e) {
  return typeof e.toJSON == "function";
}
function Mp(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > Cl ? "[" + Fp(e) + "]" : "{ " + r.map(
    ([o, i]) => o + ": " + So(i, t)
  ).join(", ") + " }";
}
function Ip(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > Cl)
    return "[Array]";
  const r = Math.min(kp, e.length), n = e.length - r, o = [];
  for (let i = 0; i < r; ++i)
    o.push(So(e[i], t));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function Fp(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
class Lp {
  constructor(t, r = "GraphQL request", n = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || Ln(!1, `Body must be a string. Received: ${xl(t)}.`), this.body = t, this.name = r, this.locationOffset = n, this.locationOffset.line > 0 || Ln(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Ln(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function jp(e) {
  return `"${e.replace($p, Vp)}"`;
}
const $p = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Vp(e) {
  return zp[e.charCodeAt(0)];
}
const zp = [
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
], Va = Object.freeze({});
function Ot(e, t, r = Ol) {
  const n = /* @__PURE__ */ new Map();
  for (const E of Object.values(Ve))
    n.set(E, Bp(t, E));
  let o, i = Array.isArray(e), a = [e], s = -1, u = [], c = e, l, f;
  const d = [], h = [];
  do {
    s++;
    const E = s === a.length, g = E && u.length !== 0;
    if (E) {
      if (l = h.length === 0 ? void 0 : d[d.length - 1], c = f, f = h.pop(), g)
        if (i) {
          c = c.slice();
          let S = 0;
          for (const [y, w] of u) {
            const _ = y - S;
            w === null ? (c.splice(_, 1), S++) : c[_] = w;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [S, y] of u)
            c[S] = y;
        }
      s = o.index, a = o.keys, u = o.edits, i = o.inArray, o = o.prev;
    } else if (f) {
      if (l = i ? s : a[s], c = f[l], c == null)
        continue;
      d.push(l);
    }
    let b;
    if (!Array.isArray(c)) {
      var v, p;
      Js(c) || Ln(!1, `Invalid AST Node: ${xl(c)}.`);
      const S = E ? (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.leave : (p = n.get(c.kind)) === null || p === void 0 ? void 0 : p.enter;
      if (b = S?.call(t, c, l, f, d, h), b === Va)
        break;
      if (b === !1) {
        if (!E) {
          d.pop();
          continue;
        }
      } else if (b !== void 0 && (u.push([l, b]), !E))
        if (Js(b))
          c = b;
        else {
          d.pop();
          continue;
        }
    }
    if (b === void 0 && g && u.push([l, c]), E)
      d.pop();
    else {
      var m;
      o = {
        inArray: i,
        index: s,
        keys: a,
        edits: u,
        prev: o
      }, i = Array.isArray(c), a = i ? c : (m = r[c.kind]) !== null && m !== void 0 ? m : [], s = -1, u = [], f && h.push(f), f = c;
    }
  } while (o !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Bp(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Hp(e) {
  return Ot(e, qp);
}
const Up = 80, qp = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => V(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = re("(", V(e.variableDefinitions, ", "), ")"), r = V(
        [
          e.operation,
          V([e.name, t]),
          V(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + re(" = ", r) + re(" ", V(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => rt(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: o }) {
      const i = re("", e, ": ") + t;
      let a = i + re("(", V(r, ", "), ")");
      return a.length > Up && (a = i + re(`(
`, jn(V(r, `
`)), `
)`)), V([a, V(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + re(" ", V(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => V(
      [
        "...",
        re("on ", e),
        V(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${re("(", V(r, ", "), ")")} on ${t} ${re("", V(n, " "), " ")}` + o
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
    leave: ({ value: e, block: t }) => t ? Pp(e) : jp(e)
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
    leave: ({ values: e }) => "[" + V(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + V(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + re("(", V(t, ", "), ")")
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
    leave: ({ description: e, directives: t, operationTypes: r }) => re("", e, `
`) + V(["schema", V(t, " "), rt(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => re("", e, `
`) + V(["scalar", t, V(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => re("", e, `
`) + V(
      [
        "type",
        t,
        re("implements ", V(r, " & ")),
        V(n, " "),
        rt(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: o }) => re("", e, `
`) + t + (tc(r) ? re(`(
`, jn(V(r, `
`)), `
)`) : re("(", V(r, ", "), ")")) + ": " + n + re(" ", V(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: o }) => re("", e, `
`) + V(
      [t + ": " + r, re("= ", n), V(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: o }) => re("", e, `
`) + V(
      [
        "interface",
        t,
        re("implements ", V(r, " & ")),
        V(n, " "),
        rt(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => re("", e, `
`) + V(
      ["union", t, V(r, " "), re("= ", V(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => re("", e, `
`) + V(["enum", t, V(r, " "), rt(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => re("", e, `
`) + V([t, V(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => re("", e, `
`) + V(["input", t, V(r, " "), rt(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: o }) => re("", e, `
`) + "directive @" + t + (tc(r) ? re(`(
`, jn(V(r, `
`)), `
)`) : re("(", V(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + V(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => V(
      ["extend schema", V(e, " "), rt(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => V(["extend scalar", e, V(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => V(
      [
        "extend type",
        e,
        re("implements ", V(t, " & ")),
        V(r, " "),
        rt(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => V(
      [
        "extend interface",
        e,
        re("implements ", V(t, " & ")),
        V(r, " "),
        rt(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => V(
      [
        "extend union",
        e,
        V(t, " "),
        re("= ", V(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => V(["extend enum", e, V(t, " "), rt(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => V(["extend input", e, V(t, " "), rt(r)], " ")
  }
};
function V(e, t = "") {
  var r;
  return (r = e?.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function rt(e) {
  return re(`{
`, jn(V(e, `
`)), `
}`);
}
function re(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function jn(e) {
  return re("  ", e.replace(/\n/g, `
  `));
}
function tc(e) {
  var t;
  return (t = e?.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function rc(e) {
  return e.kind === Ve.FIELD || e.kind === Ve.FRAGMENT_SPREAD || e.kind === Ve.INLINE_FRAGMENT;
}
function Qp() {
  return Xs();
}
function Wp() {
  __DEV__ ? L(typeof Go == "boolean", Go) : L(typeof Go == "boolean", 39);
}
Qp();
Wp();
function _o(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : Kp(r).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = t && t[i.value.name.value], __DEV__ ? L(a !== void 0, "Invalid variable referenced in @".concat(o.name.value, " directive.")) : L(a !== void 0, 40)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function za(e, t, r) {
  var n = new Set(e), o = n.size;
  return Ot(t, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!r || !n.size))
        return Va;
    }
  }), r ? !n.size : n.size < o;
}
function Gp(e) {
  return e && za(["client", "export"], e, !0);
}
function Yp(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Kp(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (Yp(r)) {
      var n = r.arguments, o = r.name.value;
      __DEV__ ? L(n && n.length === 1, "Incorrect number of arguments for the @".concat(o, " directive.")) : L(n && n.length === 1, 41);
      var i = n[0];
      __DEV__ ? L(i.name && i.name.value === "if", "Invalid argument for the @".concat(o, " directive.")) : L(i.name && i.name.value === "if", 42);
      var a = i.value;
      __DEV__ ? L(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @".concat(o, " directive must be a variable or a boolean value.")) : L(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 43), t.push({ directive: r, ifArgument: i });
    }
  }), t;
}
function Xp(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw __DEV__ ? new ue("Found a ".concat(i.operation, " operation").concat(i.name ? " named '".concat(i.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new ue(44);
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof r > "u" && (__DEV__ ? L(n.length === 1, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : L(n.length === 1, 45), r = n[0].name.value);
  var o = x(x({}, e), { definitions: qt([
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
function Ba(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function Ha(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return __DEV__ ? L(n, "No fragment named ".concat(r)) : L(n, 46), n || null;
    }
    default:
      return null;
  }
}
function we(e) {
  return e !== null && typeof e == "object";
}
function gr(e) {
  return { __ref: String(e) };
}
function ge(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Jp(e) {
  return we(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Zp(e) {
  return e.kind === "StringValue";
}
function ev(e) {
  return e.kind === "BooleanValue";
}
function tv(e) {
  return e.kind === "IntValue";
}
function rv(e) {
  return e.kind === "FloatValue";
}
function nv(e) {
  return e.kind === "Variable";
}
function ov(e) {
  return e.kind === "ObjectValue";
}
function iv(e) {
  return e.kind === "ListValue";
}
function av(e) {
  return e.kind === "EnumValue";
}
function sv(e) {
  return e.kind === "NullValue";
}
function Sr(e, t, r, n) {
  if (tv(r) || rv(r))
    e[t.value] = Number(r.value);
  else if (ev(r) || Zp(r))
    e[t.value] = r.value;
  else if (ov(r)) {
    var o = {};
    r.fields.map(function(a) {
      return Sr(o, a.name, a.value, n);
    }), e[t.value] = o;
  } else if (nv(r)) {
    var i = (n || {})[r.name.value];
    e[t.value] = i;
  } else if (iv(r))
    e[t.value] = r.values.map(function(a) {
      var s = {};
      return Sr(s, t, a, n), s[t.value];
    });
  else if (av(r))
    e[t.value] = r.value;
  else if (sv(r))
    e[t.value] = null;
  else
    throw __DEV__ ? new ue('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new ue(55);
}
function cv(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(o) {
    r[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return Sr(r[o.name.value], a, s, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return Sr(n, i, a, t);
  })), Ua(e.name.value, n, r);
}
var uv = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
], Ua = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var o = {};
      return n.forEach(function(s) {
        o[s] = t[s];
      }), "".concat(r.connection.key, "(").concat(Vr(o), ")");
    } else
      return r.connection.key;
  var i = e;
  if (t) {
    var a = Vr(t);
    i += "(".concat(a, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    uv.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? i += "@".concat(s, "(").concat(Vr(r[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var t = Vr;
    return Vr = e, t;
  }
}), Vr = function(t) {
  return JSON.stringify(t, lv);
};
function lv(e, t) {
  return we(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {})), t;
}
function wo(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return Sr(r, o, i, t);
    }), r;
  }
  return null;
}
function Xt(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Ri(e, t, r) {
  for (var n, o = 0, i = t.selections; o < i.length; o++) {
    var a = i[o];
    if (Jt(a)) {
      if (a.name.value === "__typename")
        return e[Xt(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var a = u[s], c = Ri(e, Ha(a, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function Jt(e) {
  return e.kind === "Field";
}
function fv(e) {
  return e.kind === "InlineFragment";
}
function Oo(e) {
  __DEV__ ? L(e && e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : L(e && e.kind === "Document", 47);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw __DEV__ ? new ue('Schema type definitions not allowed in queries. Found: "'.concat(r.kind, '"')) : new ue(48);
    return r;
  });
  return __DEV__ ? L(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : L(t.length <= 1, 49), e;
}
function un(e) {
  return Oo(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function Pi(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function qa(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function Tl(e) {
  var t = un(e);
  return __DEV__ ? L(t && t.operation === "query", "Must contain a query definition.") : L(t && t.operation === "query", 50), t;
}
function dv(e) {
  __DEV__ ? L(e.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : L(e.kind === "Document", 51), __DEV__ ? L(e.definitions.length <= 1, "Fragment must have exactly one definition.") : L(e.definitions.length <= 1, 52);
  var t = e.definitions[0];
  return __DEV__ ? L(t.kind === "FragmentDefinition", "Must be a fragment definition.") : L(t.kind === "FragmentDefinition", 53), t;
}
function Co(e) {
  Oo(e);
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
  throw __DEV__ ? new ue("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new ue(54);
}
function Qa(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && Sr(t, n.variable.name, n.defaultValue);
  }), t;
}
var Re = Array.isArray;
function pt(e) {
  return Array.isArray(e) && e.length > 0;
}
var nc = {
  kind: Ve.FIELD,
  name: {
    kind: Ve.NAME,
    value: "__typename"
  }
};
function Al(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === Ve.FRAGMENT_SPREAD && Al(t[r.name.value], t);
  });
}
function hv(e) {
  return Al(un(e) || dv(e), Ba(qa(e))) ? null : e;
}
function pv(e) {
  var t = /* @__PURE__ */ new Set(), r = [];
  return e.forEach(function(n) {
    n.name ? t.add(n.name) : n.test && r.push(n.test);
  }), function(n) {
    return t.has(n.name.value) || r.some(function(o) {
      return o(n);
    });
  };
}
function oc(e) {
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
function Rl(e, t) {
  for (var r = oc(""), n = oc(""), o = function(g) {
    for (var b = 0, S = void 0; b < g.length && (S = g[b]); ++b)
      if (!Re(S)) {
        if (S.kind === Ve.OPERATION_DEFINITION)
          return r(S.name && S.name.value);
        if (S.kind === Ve.FRAGMENT_DEFINITION)
          return n(S.name.value);
      }
    return __DEV__ && L.error("Could not find operation or fragment"), null;
  }, i = 0, a = t.definitions.length - 1; a >= 0; --a)
    t.definitions[a].kind === Ve.OPERATION_DEFINITION && ++i;
  var s = pv(e), u = e.some(function(g) {
    return g.remove;
  }), c = function(g) {
    return u && g && g.some(s);
  }, l = /* @__PURE__ */ new Map(), f = !1, d = {
    enter: function(g) {
      if (c(g.directives))
        return f = !0, null;
    }
  }, h = Ot(t, {
    Field: d,
    InlineFragment: d,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(g, b, S, y, w) {
        var _ = o(w);
        _ && _.variables.add(g.name.value);
      }
    },
    FragmentSpread: {
      enter: function(g, b, S, y, w) {
        if (c(g.directives))
          return f = !0, null;
        var _ = o(w);
        _ && _.fragmentSpreads.add(g.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(g, b, S, y) {
        l.set(JSON.stringify(y), g);
      },
      leave: function(g, b, S, y) {
        var w = l.get(JSON.stringify(y));
        if (g === w)
          return g;
        if (i > 0 && g.selectionSet.selections.every(function(_) {
          return _.kind === Ve.FIELD && _.name.value === "__typename";
        }))
          return n(g.name.value).removed = !0, f = !0, null;
      }
    },
    Directive: {
      leave: function(g) {
        if (s(g))
          return f = !0, null;
      }
    }
  });
  if (!f)
    return t;
  var v = function(g) {
    return g.transitiveVars || (g.transitiveVars = new Set(g.variables), g.removed || g.fragmentSpreads.forEach(function(b) {
      v(n(b)).transitiveVars.forEach(function(S) {
        g.transitiveVars.add(S);
      });
    })), g;
  }, p = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(g) {
    g.kind === Ve.OPERATION_DEFINITION ? v(r(g.name && g.name.value)).fragmentSpreads.forEach(function(b) {
      p.add(b);
    }) : g.kind === Ve.FRAGMENT_DEFINITION && i === 0 && !n(g.name.value).removed && p.add(g.name.value);
  }), p.forEach(function(g) {
    v(n(g)).fragmentSpreads.forEach(function(b) {
      p.add(b);
    });
  });
  var m = function(g) {
    return !!(!p.has(g) || n(g).removed);
  }, E = {
    enter: function(g) {
      if (m(g.name.value))
        return null;
    }
  };
  return hv(Ot(h, {
    FragmentSpread: E,
    FragmentDefinition: E,
    OperationDefinition: {
      leave: function(g) {
        if (g.variableDefinitions) {
          var b = v(r(g.name && g.name.value)).transitiveVars;
          if (b.size < g.variableDefinitions.length)
            return x(x({}, g), { variableDefinitions: g.variableDefinitions.filter(function(S) {
              return b.has(S.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Wa = Object.assign(function(e) {
  return Ot(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === Ve.OPERATION_DEFINITION)) {
          var o = t.selections;
          if (o) {
            var i = o.some(function(s) {
              return Jt(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(Jt(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return x(x({}, t), { selections: qt(qt([], o, !0), [nc], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === nc;
  }
}), vv = {
  test: function(e) {
    var t = e.name.value === "connection";
    return t && (!e.arguments || !e.arguments.some(function(r) {
      return r.name.value === "key";
    })) && __DEV__ && L.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t;
  }
};
function mv(e) {
  return Rl([vv], Oo(e));
}
function yv(e) {
  var t = Co(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Ot(e, {
    OperationDefinition: {
      enter: function(o) {
        return x(x({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function gv(e) {
  Oo(e);
  var t = Rl([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
var bv = Object.prototype.hasOwnProperty;
function ic() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Ga(e);
}
function Ga(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new Ft(), o = 1; o < r; ++o)
      t = n.merge(t, e[o]);
  return t;
}
var Ev = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, Ft = function() {
  function e(t) {
    t === void 0 && (t = Ev), this.reconciler = t, this.isObject = we, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(t, r) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return we(r) && we(t) ? (Object.keys(r).forEach(function(a) {
      if (bv.call(t, a)) {
        var s = t[a];
        if (r[a] !== s) {
          var u = n.reconciler.apply(n, qt([t, r, a], o, !1));
          u !== s && (t = n.shallowCopyForMerge(t), t[a] = u);
        }
      } else
        t = n.shallowCopyForMerge(t), t[a] = r[a];
    }), t) : r;
  }, e.prototype.shallowCopyForMerge = function(t) {
    return we(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = x({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
  }, e;
}();
function Sv(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = _v(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _v(e, t) {
  if (e) {
    if (typeof e == "string")
      return ac(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ac(e, t);
  }
}
function ac(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function sc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ya(e, t, r) {
  return t && sc(e.prototype, t), r && sc(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ka = function() {
  return typeof Symbol == "function";
}, Xa = function(e) {
  return Ka() && !!Symbol[e];
}, Ja = function(e) {
  return Xa(e) ? Symbol[e] : "@@" + e;
};
Ka() && !Xa("observable") && (Symbol.observable = Symbol("observable"));
var wv = Ja("iterator"), ki = Ja("observable"), Pl = Ja("species");
function ro(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function")
      throw new TypeError(r + " is not a function");
    return r;
  }
}
function zr(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Pl], t === null && (t = void 0)), t !== void 0 ? t : Se;
}
function Ov(e) {
  return e instanceof Se;
}
function _r(e) {
  _r.log ? _r.log(e) : setTimeout(function() {
    throw e;
  });
}
function $n(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      _r(t);
    }
  });
}
function kl(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = ro(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      _r(n);
    }
}
function Ni(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Cv(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (Nl(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function Nl(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = ro(n, t);
    switch (t) {
      case "next":
        o && o.call(n, r);
        break;
      case "error":
        if (Ni(e), o)
          o.call(n, r);
        else
          throw r;
        break;
      case "complete":
        Ni(e), o && o.call(n);
        break;
    }
  } catch (i) {
    _r(i);
  }
  e._state === "closed" ? kl(e) : e._state === "running" && (e._state = "ready");
}
function Yo(e, t, r) {
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
      }], $n(function() {
        return Cv(e);
      });
      return;
    }
    Nl(e, t, r);
  }
}
var xv = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var o = new Tv(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (Ni(this), kl(this));
  }, Ya(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Tv = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Yo(this._subscription, "next", n);
  }, t.error = function(n) {
    Yo(this._subscription, "error", n);
  }, t.complete = function() {
    Yo(this._subscription, "complete");
  }, Ya(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), Se = /* @__PURE__ */ function() {
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
    }), new xv(n, this._subscriber);
  }, t.forEach = function(n) {
    var o = this;
    return new Promise(function(i, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), i();
      }
      var u = o.subscribe({
        next: function(c) {
          try {
            n(c, s);
          } catch (l) {
            a(l), u.unsubscribe();
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
    var i = zr(this);
    return new i(function(a) {
      return o.subscribe({
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
  }, t.filter = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = zr(this);
    return new i(function(a) {
      return o.subscribe({
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
  }, t.reduce = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = zr(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new i(function(l) {
      return o.subscribe({
        next: function(f) {
          var d = !s;
          if (s = !0, !d || a)
            try {
              c = n(c, f);
            } catch (h) {
              return l.error(h);
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
  }, t.concat = function() {
    for (var n = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    var s = zr(this);
    return new s(function(u) {
      var c, l = 0;
      function f(d) {
        c = d.subscribe({
          next: function(h) {
            u.next(h);
          },
          error: function(h) {
            u.error(h);
          },
          complete: function() {
            l === i.length ? (c = void 0, u.complete()) : f(s.from(i[l++]));
          }
        });
      }
      return f(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = zr(this);
    return new i(function(a) {
      var s = [], u = o.subscribe({
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
              d >= 0 && s.splice(d, 1), c();
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
  }, t[ki] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = ro(n, ki);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return Ov(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (Xa("iterator") && (i = ro(n, wv), i))
      return new o(function(s) {
        $n(function() {
          if (!s.closed) {
            for (var u = Sv(i.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new o(function(s) {
        $n(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed)
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
      $n(function() {
        if (!s.closed) {
          for (var u = 0; u < o.length; ++u)
            if (s.next(o[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, Ya(e, null, [{
    key: Pl,
    get: function() {
      return this;
    }
  }]), e;
}();
Ka() && Object.defineProperty(Se, Symbol("extensions"), {
  value: {
    symbol: ki,
    hostReportError: _r
  },
  configurable: !0
});
var _n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Av(e) {
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
var ur;
typeof self < "u" ? ur = self : typeof window < "u" ? ur = window : typeof global < "u" ? ur = global : typeof module < "u" ? ur = module : ur = Function("return this")();
Av(ur);
var cc = Se.prototype, uc = "@@observable";
cc[uc] || (cc[uc] = function() {
  return this;
});
var Rv = Object.prototype.toString;
function Dl(e) {
  return Di(e);
}
function Di(e, t) {
  switch (Rv.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(o, i) {
        r[i] = Di(o, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = Di(e[o], t);
      }), n;
    }
    default:
      return e;
  }
}
function Pv(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    we(r) && kv(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      we(r[n]) && t.add(r[n]);
    });
  }), e;
}
function kv(e) {
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
function Mi(e) {
  return __DEV__ && Pv(e), e;
}
function Qr(e, t, r) {
  var n = [];
  e.forEach(function(o) {
    return o[t] && n.push(o);
  }), n.forEach(function(o) {
    return o[t](r);
  });
}
function Ko(e, t, r) {
  return new Se(function(n) {
    var o = n.next, i = n.error, a = n.complete, s = 0, u = !1, c = {
      then: function(h) {
        return new Promise(function(v) {
          return v(h());
        });
      }
    };
    function l(h, v) {
      return h ? function(p) {
        ++s;
        var m = function() {
          return h(p);
        };
        c = c.then(m, m).then(function(E) {
          --s, o && o.call(n, E), u && f.complete();
        }, function(E) {
          throw --s, E;
        }).catch(function(E) {
          i && i.call(n, E);
        });
      } : function(p) {
        return v && v.call(n, p);
      };
    }
    var f = {
      next: l(t, o),
      error: l(r, i),
      complete: function() {
        u = !0, s || a && a.call(n);
      }
    }, d = e.subscribe(f);
    return function() {
      return d.unsubscribe();
    };
  });
}
var tr = typeof WeakMap == "function" && Xe(function() {
  return navigator.product;
}) !== "ReactNative", Nv = typeof WeakSet == "function", Ml = typeof Symbol == "function" && typeof Symbol.for == "function", xo = Ml && Symbol.asyncIterator;
Xe(function() {
  return window.document.createElement;
});
Xe(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Il(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: Se });
  }
  return Ml && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function lc(e) {
  return e && typeof e.then == "function";
}
var lr = function(e) {
  ct(t, e);
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
        n.sub !== null && (n.latest = ["next", o], n.notify("next", o), Qr(n.observers, "next", o));
      },
      error: function(o) {
        var i = n.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), n.sub = null, n.latest = ["error", o], n.reject(o), n.notify("error", o), Qr(n.observers, "error", o));
      },
      complete: function() {
        var o = n, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var u = s.shift();
          u ? lc(u) ? u.then(function(c) {
            return n.sub = c.subscribe(n.handlers);
          }) : n.sub = u.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Qr(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof r == "function" && (r = [new Se(r)]), lc(r) ? r.then(function(o) {
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
}(Se);
Il(lr);
function br(e) {
  return "incremental" in e;
}
function Dv(e) {
  return "hasNext" in e && "data" in e;
}
function Mv(e) {
  return br(e) || Dv(e);
}
function Iv(e) {
  return we(e) && "payload" in e;
}
function Fl(e, t) {
  var r = e, n = new Ft();
  return br(t) && pt(t.incremental) && t.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = i, i = l;
    }
    r = n.merge(r, i);
  }), r;
}
function Vn(e) {
  var t = Ii(e);
  return pt(t);
}
function Ii(e) {
  var t = pt(e.errors) ? e.errors.slice(0) : [];
  return br(e) && pt(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function To() {
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
var fc = /* @__PURE__ */ new Map();
function Fi(e) {
  var t = fc.get(e) || 1;
  return fc.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Fv(e) {
  var t = Fi("stringifyForDisplay");
  return JSON.stringify(e, function(r, n) {
    return n === void 0 ? t : n;
  }).split(JSON.stringify(t)).join("<undefined>");
}
function Xo(e, t) {
  return To(e, t, t.variables && {
    variables: x(x({}, e && e.variables), t.variables)
  });
}
function dc(e) {
  return new Se(function(t) {
    t.error(e);
  });
}
var Li = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function Lv(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var o = n[r];
    if (t.indexOf(o) < 0)
      throw __DEV__ ? new ue("illegal argument: ".concat(o)) : new ue(27);
  }
  return e;
}
function jv(e, t) {
  var r = x({}, e), n = function(i) {
    typeof i == "function" ? r = x(x({}, r), i(r)) : r = x(x({}, r), i);
  }, o = function() {
    return x({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: o
  }), t;
}
function $v(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? Pi(t.query) || void 0 : ""), t;
}
function hc(e, t) {
  return t ? t(e) : Se.of();
}
function Br(e) {
  return typeof e == "function" ? new Ar(e) : e;
}
function wn(e) {
  return e.request.length <= 1;
}
var Vv = function(e) {
  ct(t, e);
  function t(r, n) {
    var o = e.call(this, r) || this;
    return o.link = n, o;
  }
  return t;
}(Error), Ar = function() {
  function e(t) {
    t && (this.request = t);
  }
  return e.empty = function() {
    return new e(function() {
      return Se.of();
    });
  }, e.from = function(t) {
    return t.length === 0 ? e.empty() : t.map(Br).reduce(function(r, n) {
      return r.concat(n);
    });
  }, e.split = function(t, r, n) {
    var o = Br(r), i = Br(n || new e(hc));
    return wn(o) && wn(i) ? new e(function(a) {
      return t(a) ? o.request(a) || Se.of() : i.request(a) || Se.of();
    }) : new e(function(a, s) {
      return t(a) ? o.request(a, s) || Se.of() : i.request(a, s) || Se.of();
    });
  }, e.execute = function(t, r) {
    return t.request(jv(r.context, $v(Lv(r)))) || Se.of();
  }, e.concat = function(t, r) {
    var n = Br(t);
    if (wn(n))
      return __DEV__ && L.warn(new Vv("You are calling concat on a terminating link, which will have no effect", n)), n;
    var o = Br(r);
    return wn(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || Se.of();
      }) || Se.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || Se.of();
      }) || Se.of();
    });
  }, e.prototype.split = function(t, r, n) {
    return this.concat(e.split(t, r, n || new e(hc)));
  }, e.prototype.concat = function(t) {
    return e.concat(this, t);
  }, e.prototype.request = function(t, r) {
    throw __DEV__ ? new ue("request is not implemented") : new ue(22);
  }, e.prototype.onError = function(t, r) {
    if (r && r.error)
      return r.error(t), !1;
    throw t;
  }, e.prototype.setOnError = function(t) {
    return this.onError = t, this;
  }, e;
}(), ji = Ar.execute, zv = "3.7.17";
function Bv(e) {
  return !!e.body;
}
function Hv(e) {
  return !!e.getReader;
}
function Uv(e) {
  return !!(xo && e[Symbol.asyncIterator]);
}
function qv(e) {
  return !!e.stream;
}
function Qv(e) {
  return !!e.arrayBuffer;
}
function Wv(e) {
  return !!e.pipe;
}
function Gv(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function Yv(e) {
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
  function u() {
    n = !0;
    var f = i.slice();
    f.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u);
  }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
  function c() {
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
      return c();
    }
  };
  return xo && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function Kv(e) {
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
  return xo && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function pc(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return xo && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Xv(e) {
  var t = e;
  if (Bv(e) && (t = e.body), Uv(t))
    return Gv(t);
  if (Hv(t))
    return pc(t.getReader());
  if (qv(t))
    return pc(t.stream().getReader());
  if (Qv(t))
    return Kv(t.arrayBuffer());
  if (Wv(t))
    return Yv(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var es = Symbol();
function Jv(e) {
  return e.extensions ? Array.isArray(e.extensions[es]) : !1;
}
function Zv(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var e0 = function(e) {
  var t = qt(qt(qt([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return we(r) && r.message || "Error message not found.";
  }).join(`
`);
}, ar = function(e) {
  ct(t, e);
  function t(r) {
    var n = r.graphQLErrors, o = r.protocolErrors, i = r.clientErrors, a = r.networkError, s = r.errorMessage, u = r.extraInfo, c = e.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = o || [], c.clientErrors = i || [], c.networkError = a || null, c.message = s || e0(c), c.extraInfo = u, c.__proto__ = t.prototype, c;
  }
  return t;
}(Error), vc = Object.prototype.hasOwnProperty;
function t0(e, t) {
  var r, n, o, i, a;
  return Pt(this, void 0, void 0, function() {
    var s, u, c, l, f, d, h, v, p, m, E, g, b, S, y, w, _, R, N, P, z, $, j;
    return kt(this, function(U) {
      switch (U.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          s = new TextDecoder("utf-8"), u = (r = e.headers) === null || r === void 0 ? void 0 : r.get("content-type"), c = "boundary=", l = u?.includes(c) ? u?.substring(u?.indexOf(c) + c.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = `\r
--`.concat(l), d = "", h = Xv(e), v = !0, U.label = 1;
        case 1:
          return v ? [4, h.next()] : [3, 3];
        case 2:
          for (p = U.sent(), m = p.value, E = p.done, g = typeof m == "string" ? m : s.decode(m), b = d.length - f.length + 1, v = !E, d += g, S = d.indexOf(f, b); S > -1; ) {
            if (y = void 0, $ = [
              d.slice(0, S),
              d.slice(S + f.length)
            ], y = $[0], d = $[1], w = y.indexOf(`\r
\r
`), _ = r0(y.slice(0, w)), R = _["content-type"], R && R.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (N = y.slice(w), N)
              try {
                P = Ll(e, N), Object.keys(P).length > 1 || "data" in P || "incremental" in P || "errors" in P || "payload" in P ? Iv(P) ? (z = {}, "payload" in P && (z = x({}, P.payload)), "errors" in P && (z = x(x({}, z), { extensions: x(x({}, "extensions" in z ? z.extensions : null), (j = {}, j[es] = P.errors, j)) })), (n = t.next) === null || n === void 0 || n.call(t, z)) : (o = t.next) === null || o === void 0 || o.call(t, P) : Object.keys(P).length === 1 && "hasNext" in P && !P.hasNext && ((i = t.complete) === null || i === void 0 || i.call(t));
              } catch (H) {
                ts(H, t);
              }
            S = d.indexOf(f);
          }
          return [3, 1];
        case 3:
          return (a = t.complete) === null || a === void 0 || a.call(t), [2];
      }
    });
  });
}
function r0(e) {
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
function Ll(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    Li(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function ts(e, t) {
  var r, n;
  e.name !== "AbortError" && (e.result && e.result.errors && e.result.data && ((r = t.next) === null || r === void 0 || r.call(t, e.result)), (n = t.error) === null || n === void 0 || n.call(t, e));
}
function n0(e, t, r) {
  o0(t)(e).then(function(n) {
    var o, i;
    (o = r.next) === null || o === void 0 || o.call(r, n), (i = r.complete) === null || i === void 0 || i.call(r);
  }).catch(function(n) {
    return ts(n, r);
  });
}
function o0(e) {
  return function(t) {
    return t.text().then(function(r) {
      return Ll(t, r);
    }).then(function(r) {
      return t.status >= 300 && Li(t, r, "Response not successful: Received status code ".concat(t.status)), !Array.isArray(r) && !vc.call(r, "data") && !vc.call(r, "errors") && Li(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var $i = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (o) {
    var n = __DEV__ ? new ue("Network request failed. ".concat(t, " is not serializable: ").concat(o.message)) : new ue(24);
    throw n.parseError = o, n;
  }
  return r;
}, i0 = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, a0 = {
  accept: "*/*",
  "content-type": "application/json"
}, s0 = {
  method: "POST"
}, c0 = {
  http: i0,
  headers: a0,
  options: s0
}, u0 = function(e, t) {
  return t(e);
};
function l0(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = {}, i = {};
  r.forEach(function(f) {
    o = x(x(x({}, o), f.options), { headers: x(x({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = x(x({}, i), f.http);
  }), o.headers && (o.headers = f0(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, l = { operationName: a, variables: u };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = t(c, Hp)), {
    options: o,
    body: l
  };
}
function f0(e, t) {
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
var d0 = function(e) {
  if (!e && typeof fetch > "u")
    throw __DEV__ ? new ue(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new ue(23);
}, h0 = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var e = new AbortController(), t = e.signal;
  return { controller: e, signal: t };
}, p0 = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function v0(e, t) {
  var r = [], n = function(f, d) {
    r.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var o = void 0;
    try {
      o = $i(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (t.extensions) {
    var i = void 0;
    try {
      i = $i(t.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", i);
  }
  var a = "", s = e, u = e.indexOf("#");
  u !== -1 && (a = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + r.join("&") + a;
  return { newURI: l };
}
var mc = Xe(function() {
  return fetch;
}), jl = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, o = e.print, i = o === void 0 ? u0 : o, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = c === void 0 ? !1 : c, f = Kt(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  __DEV__ && d0(n || mc);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new Ar(function(h) {
    var v = p0(h, r), p = h.getContext(), m = {};
    if (p.clientAwareness) {
      var E = p.clientAwareness, g = E.name, b = E.version;
      g && (m["apollographql-client-name"] = g), b && (m["apollographql-client-version"] = b);
    }
    var S = x(x({}, m), p.headers), y = {
      http: p.http,
      options: p.fetchOptions,
      credentials: p.credentials,
      headers: S
    }, w = l0(h, i, c0, d, y), _ = w.options, R = w.body;
    if (R.variables && !l) {
      var N = new Set(Object.keys(R.variables));
      Ot(h.query, {
        Variable: function(k, I, M) {
          M && M.kind !== "VariableDefinition" && N.delete(k.name.value);
        }
      }), N.size && (R.variables = x({}, R.variables), N.forEach(function(k) {
        delete R.variables[k];
      }));
    }
    var P;
    if (!_.signal) {
      var z = h0(), $ = z.controller, j = z.signal;
      P = $, P && (_.signal = j);
    }
    var U = function(k) {
      return k.kind === "OperationDefinition" && k.operation === "mutation";
    }, H = function(k) {
      return k.kind === "OperationDefinition" && k.operation === "subscription";
    }, ee = H(Co(h.query)), Z = za(["defer"], h.query);
    if (u && !h.query.definitions.some(U) && (_.method = "GET"), Z || ee) {
      _.headers = _.headers || {};
      var Y = "multipart/mixed;";
      ee && Z && __DEV__ && L.warn("Multipart-subscriptions do not support @defer"), ee ? Y += "boundary=graphql;subscriptionSpec=1.0,application/json" : Z && (Y += "deferSpec=20220824,application/json"), _.headers.accept = Y;
    }
    if (_.method === "GET") {
      var ae = v0(v, R), ne = ae.newURI, ye = ae.parseError;
      if (ye)
        return dc(ye);
      v = ne;
    } else
      try {
        _.body = $i(R, "Payload");
      } catch (k) {
        return dc(k);
      }
    return new Se(function(k) {
      var I = n || Xe(function() {
        return fetch;
      }) || mc;
      return I(v, _).then(function(M) {
        var B;
        h.setContext({ response: M });
        var C = (B = M.headers) === null || B === void 0 ? void 0 : B.get("content-type");
        return C !== null && /^multipart\/mixed/i.test(C) ? t0(M, k) : n0(M, h, k);
      }).catch(function(M) {
        return ts(M, k);
      }), function() {
        P && P.abort();
      };
    });
  });
}, m0 = function(e) {
  ct(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, jl(r).request) || this;
    return n.options = r, n;
  }
  return t;
}(Ar);
const { toString: yc, hasOwnProperty: y0 } = Object.prototype, gc = Function.prototype.toString, Vi = /* @__PURE__ */ new Map();
function Me(e, t) {
  try {
    return zi(e, t);
  } finally {
    Vi.clear();
  }
}
function zi(e, t) {
  if (e === t)
    return !0;
  const r = yc.call(e), n = yc.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    case "[object Object]": {
      if (Ec(e, t))
        return !0;
      const o = bc(e), i = bc(t), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!y0.call(t, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = o[s];
        if (!zi(e[u], t[u]))
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
      if (Ec(e, t))
        return !0;
      const o = e.entries(), i = r === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!t.has(s) || i && !zi(u, t.get(s)))
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
      const o = gc.call(e);
      return o !== gc.call(t) ? !1 : !E0(o, b0);
    }
  }
  return !1;
}
function bc(e) {
  return Object.keys(e).filter(g0, e);
}
function g0(e) {
  return this[e] !== void 0;
}
const b0 = "{ [native code] }";
function E0(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function Ec(e, t) {
  let r = Vi.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Vi.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
var S0 = function() {
  return /* @__PURE__ */ Object.create(null);
}, $l = Array.prototype, _0 = $l.forEach, w0 = $l.slice, O0 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = !0), r === void 0 && (r = S0), this.weakness = t, this.makeData = r;
    }
    return e.prototype.lookup = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return this.lookupArray(t);
    }, e.prototype.lookupArray = function(t) {
      var r = this;
      return _0.call(t, function(n) {
        return r = r.getChildTrie(n);
      }), r.data || (r.data = this.makeData(w0.call(t)));
    }, e.prototype.getChildTrie = function(t) {
      var r = this.weakness && C0(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = r.get(t);
      return n || r.set(t, n = new e(this.weakness, this.makeData)), n;
    }, e;
  }()
);
function C0(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
let Be = null;
const Sc = {};
let x0 = 1;
const T0 = () => class {
  constructor() {
    this.id = [
      "slot",
      x0++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Be; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Sc)
          break;
        return t !== Be && (Be.slots[this.id] = r), !0;
      }
    return Be && (Be.slots[this.id] = Sc), !1;
  }
  getValue() {
    if (this.hasValue())
      return Be.slots[this.id];
  }
  withValue(t, r, n, o) {
    const i = {
      __proto__: null,
      [this.id]: t
    }, a = Be;
    Be = { parent: a, slots: i };
    try {
      return r.apply(o, n);
    } finally {
      Be = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Be;
    return function() {
      const n = Be;
      try {
        return Be = r, t.apply(this, arguments);
      } finally {
        Be = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Be) {
      const o = Be;
      try {
        return Be = null, t.apply(n, r);
      } finally {
        Be = o;
      }
    } else
      return t.apply(n, r);
  }
};
function _c(e) {
  try {
    return e();
  } catch {
  }
}
const Jo = "@wry/context:Slot", A0 = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  _c(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  _c(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), wc = A0, Vl = wc[Jo] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Jo] || function(e) {
  try {
    Object.defineProperty(wc, Jo, {
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
}(T0());
function R0() {
}
var P0 = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = 1 / 0), r === void 0 && (r = R0), this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
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
), Ao = new Vl(), Zo, k0 = Object.prototype.hasOwnProperty, rs = (Zo = Array.from, Zo === void 0 ? function(e) {
  var t = [];
  return e.forEach(function(r) {
    return t.push(r);
  }), t;
} : Zo);
function no(e) {
  var t = e.unsubscribe;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
var Jr = [], N0 = 100;
function wr(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function D0(e, t) {
  var r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function zl(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function M0(e) {
  return e.slice(0);
}
var I0 = (
  /** @class */
  function() {
    function e(t) {
      this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count;
    }
    return e.prototype.peek = function() {
      if (this.value.length === 1 && !Lt(this))
        return Oc(this), this.value[0];
    }, e.prototype.recompute = function(t) {
      return wr(!this.recomputing, "already recomputing"), Oc(this), Lt(this) ? F0(this, t) : zl(this.value);
    }, e.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, Bl(this), no(this));
    }, e.prototype.dispose = function() {
      var t = this;
      this.setDirty(), Wl(this), ns(this, function(r, n) {
        r.setDirty(), Gl(r, t);
      });
    }, e.prototype.forget = function() {
      this.dispose();
    }, e.prototype.dependOn = function(t) {
      t.add(this), this.deps || (this.deps = Jr.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
    }, e.prototype.forgetDeps = function() {
      var t = this;
      this.deps && (rs(this.deps).forEach(function(r) {
        return r.delete(t);
      }), this.deps.clear(), Jr.push(this.deps), this.deps = null);
    }, e.count = 0, e;
  }()
);
function Oc(e) {
  var t = Ao.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), Lt(e) ? Ul(t, e) : ql(t, e), t;
}
function F0(e, t) {
  return Wl(e), Ao.withValue(e, L0, [e, t]), $0(e, t) && j0(e), zl(e.value);
}
function L0(e, t) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, t);
  } catch (r) {
    e.value[1] = r;
  }
  e.recomputing = !1;
}
function Lt(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function j0(e) {
  e.dirty = !1, !Lt(e) && Hl(e);
}
function Bl(e) {
  ns(e, Ul);
}
function Hl(e) {
  ns(e, ql);
}
function ns(e, t) {
  var r = e.parents.size;
  if (r)
    for (var n = rs(e.parents), o = 0; o < r; ++o)
      t(n[o], e);
}
function Ul(e, t) {
  wr(e.childValues.has(t)), wr(Lt(t));
  var r = !Lt(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = Jr.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && Bl(e);
}
function ql(e, t) {
  wr(e.childValues.has(t)), wr(!Lt(t));
  var r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, M0(t.value)) : D0(r, t.value) || e.setDirty(), Ql(e, t), !Lt(e) && Hl(e);
}
function Ql(e, t) {
  var r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (Jr.length < N0 && Jr.push(r), e.dirtyChildren = null));
}
function Wl(e) {
  e.childValues.size > 0 && e.childValues.forEach(function(t, r) {
    Gl(e, r);
  }), e.forgetDeps(), wr(e.dirtyChildren === null);
}
function Gl(e, t) {
  t.parents.delete(e), e.childValues.delete(t), Ql(e, t);
}
function $0(e, t) {
  if (typeof e.subscribe == "function")
    try {
      no(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
var V0 = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Yl(e) {
  var t = /* @__PURE__ */ new Map(), r = e && e.subscribe;
  function n(o) {
    var i = Ao.getValue();
    if (i) {
      var a = t.get(o);
      a || t.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof r == "function" && (no(a), a.unsubscribe = r(o));
    }
  }
  return n.dirty = function(i, a) {
    var s = t.get(i);
    if (s) {
      var u = a && k0.call(V0, a) ? a : "setDirty";
      rs(s).forEach(function(c) {
        return c[u]();
      }), t.delete(i), no(s);
    }
  }, n;
}
function Kl() {
  var e = new O0(typeof WeakMap == "function");
  return function() {
    return e.lookupArray(arguments);
  };
}
Kl();
var ei = /* @__PURE__ */ new Set();
function oo(e, t) {
  t === void 0 && (t = /* @__PURE__ */ Object.create(null));
  var r = new P0(t.max || Math.pow(2, 16), function(c) {
    return c.dispose();
  }), n = t.keyArgs, o = t.makeCacheKey || Kl(), i = function() {
    var c = o.apply(null, n ? n.apply(null, arguments) : arguments);
    if (c === void 0)
      return e.apply(null, arguments);
    var l = r.get(c);
    l || (r.set(c, l = new I0(e)), l.subscribe = t.subscribe, l.forget = function() {
      return r.delete(c);
    });
    var f = l.recompute(Array.prototype.slice.call(arguments));
    return r.set(c, l), ei.add(r), Ao.hasValue() || (ei.forEach(function(d) {
      return d.clean();
    }), ei.clear()), f;
  };
  Object.defineProperty(i, "size", {
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
  i.dirtyKey = a, i.dirty = function() {
    a(o.apply(null, arguments));
  };
  function s(c) {
    var l = r.get(c);
    if (l)
      return l.peek();
  }
  i.peekKey = s, i.peek = function() {
    return s(o.apply(null, arguments));
  };
  function u(c) {
    return r.delete(c);
  }
  return i.forgetKey = u, i.forget = function() {
    return u(o.apply(null, arguments));
  }, i.makeCacheKey = o, i.getKey = n ? function() {
    return o.apply(null, n.apply(null, arguments));
  } : o, Object.freeze(i);
}
var z0 = function() {
  function e() {
    this.getFragmentDoc = oo(Xp);
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
    return r === void 0 && (r = !!t.optimistic), this.read(x(x({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
  }, e.prototype.readFragment = function(t, r) {
    return r === void 0 && (r = !!t.optimistic), this.read(x(x({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
  }, e.prototype.writeQuery = function(t) {
    var r = t.id, n = t.data, o = Kt(t, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: r || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(t) {
    var r = t.id, n = t.data, o = t.fragment, i = t.fragmentName, a = Kt(t, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: r,
      result: n
    }));
  }, e.prototype.updateQuery = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readQuery(t), i = r(o);
        return i == null ? o : (n.writeQuery(x(x({}, t), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(t, r) {
    return this.batch({
      update: function(n) {
        var o = n.readFragment(t), i = r(o);
        return i == null ? o : (n.writeFragment(x(x({}, t), { data: i })), i);
      }
    });
  }, e;
}(), Xl = function(e) {
  ct(t, e);
  function t(r, n, o, i) {
    var a, s = e.call(this, r) || this;
    if (s.message = r, s.path = n, s.query = o, s.variables = i, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (a = {}, a[s.path[u]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = t.prototype, s;
  }
  return t;
}(Error);
const B0 = () => /* @__PURE__ */ Object.create(null), { forEach: H0, slice: U0 } = Array.prototype, { hasOwnProperty: q0 } = Object.prototype;
class Rr {
  constructor(t = !0, r = B0) {
    this.weakness = t, this.makeData = r;
  }
  lookup(...t) {
    return this.lookupArray(t);
  }
  lookupArray(t) {
    let r = this;
    return H0.call(t, (n) => r = r.getChildTrie(n)), q0.call(r, "data") ? r.data : r.data = this.makeData(U0.call(t));
  }
  peek(...t) {
    return this.peekArray(t);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, o = t.length; r && n < o; ++n) {
      const i = this.weakness && Cc(t[n]) ? r.weak : r.strong;
      r = i && i.get(t[n]);
    }
    return r && r.data;
  }
  getChildTrie(t) {
    const r = this.weakness && Cc(t) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = r.get(t);
    return n || r.set(t, n = new Rr(this.weakness, this.makeData)), n;
  }
}
function Cc(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var je = Object.prototype.hasOwnProperty;
function Hr(e) {
  return e == null;
}
function Jl(e, t) {
  var r = e.__typename, n = e.id, o = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Hr(n) ? Hr(o) ? void 0 : { _id: o } : { id: n }), Hr(n) && !Hr(o) && (n = o), !Hr(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Zl = {
  dataIdFromObject: Jl,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function Q0(e) {
  return To(Zl, e);
}
function ef(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Zl.canonizeResults : t;
}
function W0(e, t) {
  return ge(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var tf = /^[_a-z][_0-9a-z]*/i;
function jt(e) {
  var t = e.match(tf);
  return t ? t[0] : e;
}
function Bi(e, t, r) {
  return we(t) ? Re(t) ? t.every(function(n) {
    return Bi(e, n, r);
  }) : e.selections.every(function(n) {
    if (Jt(n) && _o(n, r)) {
      var o = Xt(n);
      return je.call(t, o) && (!n.selectionSet || Bi(n.selectionSet, t[o], r));
    }
    return !0;
  }) : !1;
}
function hr(e) {
  return we(e) && !ge(e) && !Re(e);
}
function G0() {
  return new Ft();
}
function rf(e, t) {
  var r = Ba(qa(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var o = r[n];
      return !o && t && (o = t.lookup(n)), o || null;
    }
  };
}
var zn = /* @__PURE__ */ Object.create(null), ti = function() {
  return zn;
}, xc = /* @__PURE__ */ Object.create(null), Zr = function() {
  function e(t, r) {
    var n = this;
    this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return Mi(ge(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return ge(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return gr(o);
      if (ge(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = gr(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return x({}, this.data);
  }, e.prototype.has = function(t) {
    return this.lookup(t, !0) !== void 0;
  }, e.prototype.get = function(t, r) {
    if (this.group.depend(t, r), je.call(this.data, t)) {
      var n = this.data[t];
      if (n && je.call(n, r))
        return n[r];
    }
    if (r === "__typename" && je.call(this.policies.rootTypenamesById, t))
      return this.policies.rootTypenamesById[t];
    if (this instanceof Rt)
      return this.parent.get(t, r);
  }, e.prototype.lookup = function(t, r) {
    if (r && this.group.depend(t, "__exists"), je.call(this.data, t))
      return this.data[t];
    if (this instanceof Rt)
      return this.parent.lookup(t, r);
    if (this.policies.rootTypenamesById[t])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(t, r) {
    var n = this, o;
    ge(t) && (t = t.__ref), ge(r) && (r = r.__ref);
    var i = typeof t == "string" ? this.lookup(o = t) : t, a = typeof r == "string" ? this.lookup(o = r) : r;
    if (a) {
      __DEV__ ? L(typeof o == "string", "store.merge expects a string ID") : L(typeof o == "string", 1);
      var s = new Ft(K0).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        i || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!i || i[c] !== s[c]) {
            u[c] = 1;
            var l = jt(c);
            l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof Rt) && delete s[c];
          }
        }), u.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[o] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return n.group.dirty(o, c);
        });
      }
    }
  }, e.prototype.modify = function(t, r) {
    var n = this, o = this.lookup(t);
    if (o) {
      var i = /* @__PURE__ */ Object.create(null), a = !1, s = !0, u = {
        DELETE: zn,
        INVALIDATE: xc,
        isReference: ge,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, l) {
          return n.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: l || gr(t)
          } : c, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(c) {
        var l = jt(c), f = o[c];
        if (f !== void 0) {
          var d = typeof r == "function" ? r : r[c] || r[l];
          if (d) {
            var h = d === ti ? zn : d(Mi(f), x(x({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(t, c) }));
            h === xc ? n.group.dirty(t, c) : (h === zn && (h = void 0), h !== f && (i[c] = h, a = !0, f = h));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(t, i), s && (this instanceof Rt ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(t, r, n) {
    var o, i = this.lookup(t);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: a, fieldName: r, args: n }) : r;
      return this.modify(t, s ? (o = {}, o[s] = ti, o) : ti);
    }
    return !1;
  }, e.prototype.evict = function(t, r) {
    var n = !1;
    return t.id && (je.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof Rt && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var t = this, r = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      je.call(t.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
  }, e.prototype.replace = function(t) {
    var r = this;
    if (Object.keys(this.data).forEach(function(i) {
      t && je.call(t, i) || r.delete(i);
    }), t) {
      var n = t.__META, o = Kt(t, ["__META"]);
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
    return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof Rt ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
  }, e.prototype.gc = function() {
    var t = this, r = this.getRootIdSet(), n = this.toObject();
    r.forEach(function(a) {
      je.call(n, a) && (Object.keys(t.findChildRefIds(a)).forEach(r.add, r), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof Rt; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(t) {
    if (!je.call(this.refs, t)) {
      var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
      if (!n)
        return r;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        ge(i) && (r[i.__ref] = !0), we(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          we(s) && o.add(s);
        });
      });
    }
    return this.refs[t];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), nf = function() {
  function e(t, r) {
    r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? Yl() : null, this.keyMaker = new Rr(tr);
  }, e.prototype.depend = function(t, r) {
    if (this.d) {
      this.d(ri(t, r));
      var n = jt(r);
      n !== r && this.d(ri(t, n)), this.parent && this.parent.depend(t, r);
    }
  }, e.prototype.dirty = function(t, r) {
    this.d && this.d.dirty(ri(t, r), r === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function ri(e, t) {
  return t + "#" + e;
}
function Tc(e, t) {
  Wr(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = function(r) {
    ct(n, r);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, u = o.seed, c = r.call(this, i, new nf(s)) || this;
      return c.stump = new Y0(c), c.storageTrie = new Rr(tr), u && c.replace(u), c;
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
})(Zr || (Zr = {}));
var Rt = function(e) {
  ct(t, e);
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
      s ? a ? a !== s && Object.keys(a).forEach(function(u) {
        Me(a[u], s[u]) || n.group.dirty(i, u);
      }) : (n.group.dirty(i, "__exists"), Object.keys(s).forEach(function(u) {
        n.group.dirty(i, u);
      })) : n.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, t.prototype.toObject = function() {
    return x(x({}, this.parent.toObject()), this.data);
  }, t.prototype.findChildRefIds = function(r) {
    var n = this.parent.findChildRefIds(r);
    return je.call(this.data, r) ? x(x({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
  }, t.prototype.getStorage = function() {
    for (var r = this.parent; r.parent; )
      r = r.parent;
    return r.getStorage.apply(r, arguments);
  }, t;
}(Zr), Y0 = function(e) {
  ct(t, e);
  function t(r) {
    return e.call(this, "EntityStore.Stump", r, function() {
    }, new nf(r.group.caching, r.group)) || this;
  }
  return t.prototype.removeLayer = function() {
    return this;
  }, t.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, t;
}(Rt);
function K0(e, t, r) {
  var n = e[r], o = t[r];
  return Me(n, o) ? n : o;
}
function Wr(e) {
  return !!(e instanceof Zr && e.group.caching);
}
function X0(e) {
  return we(e) ? Re(e) ? e.slice(0) : x({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Hi = function() {
  function e() {
    this.known = new (Nv ? WeakSet : Set)(), this.pool = new Rr(tr), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(t) {
    return we(t) && this.known.has(t);
  }, e.prototype.pass = function(t) {
    if (we(t)) {
      var r = X0(t);
      return this.passes.set(r, t), r;
    }
    return t;
  }, e.prototype.admit = function(t) {
    var r = this;
    if (we(t)) {
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
          var s = Object.getPrototypeOf(t), u = [s], c = this.sortedKeys(t);
          u.push(c.json);
          var l = u.length;
          c.sorted.forEach(function(h) {
            u.push(r.admit(t[h]));
          });
          var a = this.pool.lookupArray(u);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), c.sorted.forEach(function(h, v) {
              f[h] = u[l + v];
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
}(), Qt = Object.assign(function(e) {
  if (we(e)) {
    Ui === void 0 && Ac();
    var t = Ui.admit(e), r = qi.get(t);
    return r === void 0 && qi.set(t, r = JSON.stringify(t)), r;
  }
  return JSON.stringify(e);
}, {
  reset: Ac
}), Ui, qi;
function Ac() {
  Ui = new Hi(), qi = new (tr ? WeakMap : Map)();
}
function Rc(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var J0 = function() {
  function e(t) {
    var r = this;
    this.knownResults = new (tr ? WeakMap : Map)(), this.config = To(t, {
      addTypename: t.addTypename !== !1,
      canonizeResults: ef(t)
    }), this.canon = t.canon || new Hi(), this.executeSelectionSet = oo(function(n) {
      var o, i = n.context.canonizeResults, a = Rc(n);
      a[3] = !i;
      var s = (o = r.executeSelectionSet).peek.apply(o, a);
      return s ? i ? x(x({}, s), { result: r.canon.admit(s.result) }) : s : (Tc(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Rc,
      makeCacheKey: function(n, o, i, a) {
        if (Wr(i.store))
          return i.store.makeCacheKey(n, ge(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = oo(function(n) {
      return Tc(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var o = n.field, i = n.array, a = n.context;
        if (Wr(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Hi();
  }, e.prototype.diffQueryAgainstStore = function(t) {
    var r = t.store, n = t.query, o = t.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = t.variables, s = t.returnPartialData, u = s === void 0 ? !0 : s, c = t.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, f = this.config.cache.policies;
    a = x(x({}, Qa(Tl(n))), a);
    var d = gr(i), h = this.executeSelectionSet({
      selectionSet: Co(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: x({ store: r, query: n, policies: f, variables: a, varString: Qt(a), canonizeResults: l }, rf(n, this.config.fragments))
    }), v;
    if (h.missing && (v = [new Xl(Z0(h.missing), h.missing, n, a)], !u))
      throw v[0];
    return {
      result: h.result,
      complete: !v,
      missing: v
    };
  }, e.prototype.isFresh = function(t, r, n, o) {
    if (Wr(o.store) && this.knownResults.get(t) === n) {
      var i = this.executeSelectionSet.peek(n, r, o, this.canon.isKnown(t));
      if (i && t === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(t) {
    var r = this, n = t.selectionSet, o = t.objectOrReference, i = t.enclosingRef, a = t.context;
    if (ge(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, u = a.policies, c = a.store, l = c.getFieldValue(o, "__typename"), f = [], d, h = new Ft();
    this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && f.push({ __typename: l });
    function v(b, S) {
      var y;
      return b.missing && (d = h.merge(d, (y = {}, y[S] = b.missing, y))), b.result;
    }
    var p = new Set(n.selections);
    p.forEach(function(b) {
      var S, y;
      if (_o(b, s))
        if (Jt(b)) {
          var w = u.readField({
            fieldName: b.name.value,
            field: b,
            variables: a.variables,
            from: o
          }, a), _ = Xt(b);
          w === void 0 ? Wa.added(b) || (d = h.merge(d, (S = {}, S[_] = "Can't find field '".concat(b.name.value, "' on ").concat(ge(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), S))) : Re(w) ? w = v(r.executeSubSelectedArray({
            field: b,
            array: w,
            enclosingRef: i,
            context: a
          }), _) : b.selectionSet ? w != null && (w = v(r.executeSelectionSet({
            selectionSet: b.selectionSet,
            objectOrReference: w,
            enclosingRef: ge(w) ? w : i,
            context: a
          }), _)) : a.canonizeResults && (w = r.canon.pass(w)), w !== void 0 && f.push((y = {}, y[_] = w, y));
        } else {
          var R = Ha(b, a.lookupFragment);
          if (!R && b.kind === Ve.FRAGMENT_SPREAD)
            throw __DEV__ ? new ue("No fragment named ".concat(b.name.value)) : new ue(5);
          R && u.fragmentMatches(R, l) && R.selectionSet.selections.forEach(p.add, p);
        }
    });
    var m = Ga(f), E = { result: m, missing: d }, g = a.canonizeResults ? this.canon.admit(E) : Mi(E);
    return g.result && this.knownResults.set(g.result, n), g;
  }, e.prototype.execSubSelectedArrayImpl = function(t) {
    var r = this, n = t.field, o = t.array, i = t.enclosingRef, a = t.context, s, u = new Ft();
    function c(l, f) {
      var d;
      return l.missing && (s = u.merge(s, (d = {}, d[f] = l.missing, d))), l.result;
    }
    return n.selectionSet && (o = o.filter(a.store.canRead)), o = o.map(function(l, f) {
      return l === null ? null : Re(l) ? c(r.executeSubSelectedArray({
        field: n,
        array: l,
        enclosingRef: i,
        context: a
      }), f) : n.selectionSet ? c(r.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: l,
        enclosingRef: ge(l) ? l : i,
        context: a
      }), f) : (__DEV__ && em(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function Z0(e) {
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
function em(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(o) {
      we(o) && (__DEV__ ? L(!ge(o), "Missing selection set for object of type ".concat(W0(e, o), " returned for query field ").concat(t.name.value)) : L(!ge(o), 6), Object.values(o).forEach(n.add, n));
    });
  }
}
var os = new Vl(), Pc = /* @__PURE__ */ new WeakMap();
function Gr(e) {
  var t = Pc.get(e);
  return t || Pc.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Yl()
  }), t;
}
function kc(e) {
  Gr(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function tm(e) {
  Gr(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function rm(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, t.forEach(function(u) {
          Gr(u).dep.dirty(n), nm(u);
        });
        var a = Array.from(r);
        r.clear(), a.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = os.getValue();
      s && (o(s), Gr(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(i) {
    return r.add(i), function() {
      r.delete(i);
    };
  };
  var o = n.attachCache = function(i) {
    return t.add(i), Gr(i).vars.add(n), n;
  };
  return n.forgetCache = function(i) {
    return t.delete(i);
  }, n;
}
function nm(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Nc = /* @__PURE__ */ Object.create(null);
function is(e) {
  var t = JSON.stringify(e);
  return Nc[t] || (Nc[t] = /* @__PURE__ */ Object.create(null));
}
function Dc(e) {
  var t = is(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = as(e, function(a) {
      var s = Er(n.storeObject, a, o);
      return s === void 0 && r !== n.storeObject && je.call(r, a[0]) && (s = Er(r, a, af)), __DEV__ ? L(s !== void 0, "Missing field '".concat(a.join("."), "' while extracting keyFields from ").concat(JSON.stringify(r))) : L(s !== void 0, 2), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function Mc(e) {
  var t = is(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = as(e, function(c) {
      var l = c[0], f = l.charAt(0);
      if (f === "@") {
        if (o && pt(o.directives)) {
          var d = l.slice(1), h = o.directives.find(function(E) {
            return E.name.value === d;
          }), v = h && wo(h, i);
          return v && Er(v, c.slice(1));
        }
        return;
      }
      if (f === "$") {
        var p = l.slice(1);
        if (i && je.call(i, p)) {
          var m = c.slice(0);
          return m[0] = p, Er(i, m);
        }
        return;
      }
      if (r)
        return Er(r, c);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (a += ":" + u), a;
  });
}
function as(e, t) {
  var r = new Ft();
  return of(e).reduce(function(n, o) {
    var i, a = t(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = r.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function of(e) {
  var t = is(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(o, i) {
      Re(o) ? (of(o).forEach(function(a) {
        return r.push(n.concat(a));
      }), n.length = 0) : (n.push(o), Re(e[i + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function af(e, t) {
  return e[t];
}
function Er(e, t, r) {
  return r = r || af, sf(t.reduce(function n(o, i) {
    return Re(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && r(o, i);
  }, e));
}
function sf(e) {
  return we(e) ? Re(e) ? e.map(sf) : as(Object.keys(e).sort(), function(t) {
    return Er(e, t);
  }) : e;
}
Ua.setStringify(Qt);
function Qi(e) {
  return e.args !== void 0 ? e.args : e.field ? wo(e.field, e.variables) : null;
}
var om = function() {
}, Ic = function(e, t) {
  return t.fieldName;
}, Fc = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, Lc = function(e, t) {
  return t;
}, im = function() {
  function e(t) {
    this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = x({ dataIdFromObject: Jl }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
  }
  return e.prototype.identify = function(t, r) {
    var n, o = this, i = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = r && r.storeObject || t, s = x(x({}, r), { typename: i, storeObject: a, readField: r && r.readField || function() {
      var d = ss(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), u, c = i && this.getTypePolicy(i), l = c && c.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(x(x({}, t), a), s);
      if (Re(f))
        l = Dc(f);
      else {
        u = f;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, e.prototype.addTypePolicies = function(t) {
    var r = this;
    Object.keys(t).forEach(function(n) {
      var o = t[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, u = Kt(o, ["queryType", "mutationType", "subscriptionType"]);
      i && r.setRootTypename("Query", n), a && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), je.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
    });
  }, e.prototype.updateTypePolicy = function(t, r) {
    var n = this, o = this.getTypePolicy(t), i = r.keyFields, a = r.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? Fc : c === !1 ? Lc : u.merge;
    }
    s(o, r.merge), o.keyFn = i === !1 ? om : Re(i) ? Dc(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = n.getFieldPolicy(t, u, !0), l = a[u];
      if (typeof l == "function")
        c.read = l;
      else {
        var f = l.keyArgs, d = l.read, h = l.merge;
        c.keyFn = f === !1 ? Ic : Re(f) ? Mc(f) : typeof f == "function" ? f : c.keyFn, typeof d == "function" && (c.read = d), s(c, h);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || Ic);
    });
  }, e.prototype.setRootTypename = function(t, r) {
    r === void 0 && (r = t);
    var n = "ROOT_" + t.toUpperCase(), o = this.rootTypenamesById[n];
    r !== o && (__DEV__ ? L(!o || o === t, "Cannot change root ".concat(t, " __typename more than once")) : L(!o || o === t, 3), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
  }, e.prototype.addPossibleTypes = function(t) {
    var r = this;
    this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
      r.getSupertypeSet(n, !0), t[n].forEach(function(o) {
        r.getSupertypeSet(o, !0).add(n);
        var i = o.match(tf);
        (!i || i[0] !== o) && r.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(t) {
    var r = this;
    if (!je.call(this.typePolicies, t)) {
      var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(t);
      o && o.size && o.forEach(function(a) {
        var s = r.getTypePolicy(a), u = s.fields, c = Kt(s, ["fields"]);
        Object.assign(n, c), Object.assign(n.fields, u);
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
      for (var s = this.getSupertypeSet(r, !0), u = [s], c = function(v) {
        var p = i.getSupertypeSet(v, !1);
        p && p.size && u.indexOf(p) < 0 && u.push(p);
      }, l = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
        var h = u[d];
        if (h.has(a))
          return s.has(a) || (f && __DEV__ && L.warn("Inferring subtype ".concat(r, " of supertype ").concat(a)), s.add(a)), !0;
        h.forEach(c), l && d === u.length - 1 && Bi(t.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(v, p) {
          var m = r.match(v);
          m && m[0] === r && c(p);
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
      }, u = Qi(t); a; ) {
        var c = a(u, s);
        if (Re(c))
          a = Mc(c);
        else {
          i = c || n;
          break;
        }
      }
    return i === void 0 && (i = t.field ? cv(t.field, t.variables) : Ua(n, Qi(t))), i === !1 ? n : n === jt(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(t, r) {
    var n = t.from;
    if (n) {
      var o = t.field || t.fieldName;
      if (o) {
        if (t.typename === void 0) {
          var i = r.store.getFieldValue(n, "__typename");
          i && (t.typename = i);
        }
        var a = this.getStoreFieldName(t), s = jt(a), u = r.store.getFieldValue(n, a), c = this.getFieldPolicy(t.typename, s, !1), l = c && c.read;
        if (l) {
          var f = jc(this, n, t, r, r.store.getStorage(ge(n) ? n.__ref : n, a));
          return os.withValue(this.cache, l, [u, f]);
        }
        return u;
      }
    }
  }, e.prototype.getReadFunction = function(t, r) {
    var n = this.getFieldPolicy(t, r, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(t, r, n) {
    var o = this.getFieldPolicy(t, r, !1), i = o && o.merge;
    return !i && n && (o = this.getTypePolicy(n), i = o && o.merge), i;
  }, e.prototype.runMergeFunction = function(t, r, n, o, i) {
    var a = n.field, s = n.typename, u = n.merge;
    return u === Fc ? cf(o.store)(t, r) : u === Lc ? r : (o.overwrite && (t = void 0), u(t, r, jc(this, void 0, { typename: s, fieldName: a.name.value, field: a, variables: o.variables }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function jc(e, t, r, n, o) {
  var i = e.getStoreFieldName(r), a = jt(i), s = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: Qi(r),
    field: r.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: ge,
    toReference: c,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(ss(arguments, t, s), n);
    },
    mergeObjects: cf(n.store)
  };
}
function ss(e, t, r) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : t
  } : (a = x({}, n), je.call(a, "from") || (a.from = t)), __DEV__ && a.from === void 0 && __DEV__ && L.warn("Undefined 'from' passed to readField with arguments ".concat(Fv(Array.from(e)))), a.variables === void 0 && (a.variables = r), a;
}
function cf(e) {
  return function(r, n) {
    if (Re(r) || Re(n))
      throw __DEV__ ? new ue("Cannot automatically merge arrays") : new ue(4);
    if (we(r) && we(n)) {
      var o = e.getFieldValue(r, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (ge(r) && hr(n))
        return e.merge(r.__ref, n), r;
      if (hr(r) && ge(n))
        return e.merge(r, n.__ref), n;
      if (hr(r) && hr(n))
        return x(x({}, r), n);
    }
    return n;
  };
}
function ni(e, t, r) {
  var n = "".concat(t).concat(r), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === t && e.deferred === r ? e : x(x({}, e), { clientOnly: t, deferred: r })), o;
}
var am = function() {
  function e(t, r, n) {
    this.cache = t, this.reader = r, this.fragments = n;
  }
  return e.prototype.writeToStore = function(t, r) {
    var n = this, o = r.query, i = r.result, a = r.dataId, s = r.variables, u = r.overwrite, c = un(o), l = G0();
    s = x(x({}, Qa(c)), s);
    var f = x(x({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(h, v) {
      return l.merge(h, v);
    }, variables: s, varString: Qt(s) }, rf(o, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!ge(d))
      throw __DEV__ ? new ue("Could not identify object ".concat(JSON.stringify(i))) : new ue(7);
    return f.incomingById.forEach(function(h, v) {
      var p = h.storeObject, m = h.mergeTree, E = h.fieldNodeSet, g = gr(v);
      if (m && m.map.size) {
        var b = n.applyMerges(m, g, p, f);
        if (ge(b))
          return;
        p = b;
      }
      if (__DEV__ && !f.overwrite) {
        var S = /* @__PURE__ */ Object.create(null);
        E.forEach(function(_) {
          _.selectionSet && (S[_.name.value] = !0);
        });
        var y = function(_) {
          return S[jt(_)] === !0;
        }, w = function(_) {
          var R = m && m.map.get(_);
          return !!(R && R.info && R.info.merge);
        };
        Object.keys(p).forEach(function(_) {
          y(_) && !w(_) && sm(g, p, _, f.store);
        });
      }
      t.merge(v, p);
    }), t.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(t) {
    var r = this, n = t.dataId, o = t.result, i = t.selectionSet, a = t.context, s = t.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || Ri(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (c.__typename = l);
    var f = function() {
      var b = ss(arguments, c, a.variables);
      if (ge(b.from)) {
        var S = a.incomingById.get(b.from.__ref);
        if (S) {
          var y = u.readField(x(x({}, b), { from: S.storeObject }), a);
          if (y !== void 0)
            return y;
        }
      }
      return u.readField(b, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(b, S) {
      var y, w = Xt(S), _ = o[w];
      if (d.add(S), _ !== void 0) {
        var R = u.getStoreFieldName({
          typename: l,
          fieldName: S.name.value,
          field: S,
          variables: b.variables
        }), N = $c(s, R), P = r.processFieldValue(_, S, S.selectionSet ? ni(b, !1, !1) : b, N), z = void 0;
        S.selectionSet && (ge(P) || hr(P)) && (z = f("__typename", P));
        var $ = u.getMergeFunction(l, S.name.value, z);
        $ ? N.info = {
          field: S,
          typename: l,
          merge: $
        } : Vc(s, R), c = b.merge(c, (y = {}, y[R] = P, y));
      } else
        __DEV__ && !b.clientOnly && !b.deferred && !Wa.added(S) && !u.getReadFunction(l, S.name.value) && __DEV__ && L.error("Missing field '".concat(Xt(S), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3));
    });
    try {
      var h = u.identify(o, {
        typename: l,
        selectionSet: i,
        fragmentMap: a.fragmentMap,
        storeObject: c,
        readField: f
      }), v = h[0], p = h[1];
      n = n || v, p && (c = a.merge(c, p));
    } catch (b) {
      if (!n)
        throw b;
    }
    if (typeof n == "string") {
      var m = gr(n), E = a.written[n] || (a.written[n] = []);
      if (E.indexOf(i) >= 0 || (E.push(i), this.reader && this.reader.isFresh(o, m, i, a)))
        return m;
      var g = a.incomingById.get(n);
      return g ? (g.storeObject = a.merge(g.storeObject, c), g.mergeTree = Wi(g.mergeTree, s), d.forEach(function(b) {
        return g.fieldNodeSet.add(b);
      })) : a.incomingById.set(n, {
        storeObject: c,
        mergeTree: io(s) ? void 0 : s,
        fieldNodeSet: d
      }), m;
    }
    return c;
  }, e.prototype.processFieldValue = function(t, r, n, o) {
    var i = this;
    return !r.selectionSet || t === null ? __DEV__ ? Dl(t) : t : Re(t) ? t.map(function(a, s) {
      var u = i.processFieldValue(a, r, n, $c(o, s));
      return Vc(o, s), u;
    }) : this.processSelectionSet({
      result: t,
      selectionSet: r.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(t, r, n, o) {
    o === void 0 && (o = Ri(r, t, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Rr(!1);
    return function u(c, l) {
      var f = s.lookup(c, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, c.selections.forEach(function(d) {
        if (_o(d, n.variables)) {
          var h = l.clientOnly, v = l.deferred;
          if (!(h && v) && pt(d.directives) && d.directives.forEach(function(E) {
            var g = E.name.value;
            if (g === "client" && (h = !0), g === "defer") {
              var b = wo(E, n.variables);
              (!b || b.if !== !1) && (v = !0);
            }
          }), Jt(d)) {
            var p = i.get(d);
            p && (h = h && p.clientOnly, v = v && p.deferred), i.set(d, ni(n, h, v));
          } else {
            var m = Ha(d, n.lookupFragment);
            if (!m && d.kind === Ve.FRAGMENT_SPREAD)
              throw __DEV__ ? new ue("No fragment named ".concat(d.name.value)) : new ue(8);
            m && a.fragmentMatches(m, o, r, n.variables) && u(m.selectionSet, ni(n, h, v));
          }
        }
      }));
    }(t, n), i;
  }, e.prototype.applyMerges = function(t, r, n, o, i) {
    var a, s = this;
    if (t.map.size && !ge(n)) {
      var u = !Re(n) && (ge(r) || hr(r)) ? r : void 0, c = n;
      u && !i && (i = [ge(u) ? u.__ref : u]);
      var l, f = function(d, h) {
        return Re(d) ? typeof h == "number" ? d[h] : void 0 : o.store.getFieldValue(d, String(h));
      };
      t.map.forEach(function(d, h) {
        var v = f(u, h), p = f(c, h);
        if (p !== void 0) {
          i && i.push(h);
          var m = s.applyMerges(d, v, p, o, i);
          m !== p && (l = l || /* @__PURE__ */ new Map(), l.set(h, m)), i && L(i.pop() === h);
        }
      }), l && (n = Re(c) ? c.slice(0) : x({}, c), l.forEach(function(d, h) {
        n[h] = d;
      }));
    }
    return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), uf = [];
function $c(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, uf.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Wi(e, t) {
  if (e === t || !t || io(t))
    return e;
  if (!e || io(e))
    return t;
  var r = e.info && t.info ? x(x({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, i = { info: r, map: o };
  if (n) {
    var a = new Set(t.map.keys());
    e.map.forEach(function(s, u) {
      i.map.set(u, Wi(s, t.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      i.map.set(s, Wi(t.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function io(e) {
  return !e || !(e.info || e.map.size);
}
function Vc(e, t) {
  var r = e.map, n = r.get(t);
  n && io(n) && (uf.push(n), r.delete(t));
}
var zc = /* @__PURE__ */ new Set();
function sm(e, t, r, n) {
  var o = function(f) {
    var d = n.getFieldValue(f, r);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(t);
    if (a && !ge(i) && !Me(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = jt(r), c = "".concat(s, ".").concat(u);
      if (!zc.has(c)) {
        zc.add(c);
        var l = [];
        !Re(i) && !Re(a) && [i, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), __DEV__ && L.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, ` object.

This could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.

To address this problem (which is not a bug in Apollo Client), `).concat(l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, ` field, so InMemoryCache can safely merge these objects:

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
var cm = function(e) {
  ct(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.makeVar = rm, n.txCount = 0, n.config = Q0(r), n.addTypename = !!n.config.addTypename, n.policies = new im({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return t.prototype.init = function() {
    var r = this.data = new Zr.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = r.stump, this.resetResultCache();
  }, t.prototype.resetResultCache = function(r) {
    var n = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new am(this, this.storeReader = new J0({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: ef(this.config),
      canon: r ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = oo(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Wr(s)) {
          var u = a.optimistic, c = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, Qt({ optimistic: u, id: c, variables: l }));
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
      return this.storeReader.diffQueryAgainstStore(x(x({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof Xl)
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
    if (je.call(r, "id") && !r.id)
      return !1;
    var n = r.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.diff = function(r) {
    return this.storeReader.diffQueryAgainstStore(x(x({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
  }, t.prototype.watch = function(r) {
    var n = this;
    return this.watches.size || tm(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
      n.watches.delete(r) && !n.watches.size && kc(n), n.maybeBroadcastWatch.forget(r);
    };
  }, t.prototype.gc = function(r) {
    Qt.reset();
    var n = this.optimisticData.gc();
    return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, t.prototype.retain = function(r, n) {
    return (n ? this.optimisticData : this.data).retain(r);
  }, t.prototype.release = function(r, n) {
    return (n ? this.optimisticData : this.data).release(r);
  }, t.prototype.identify = function(r) {
    if (ge(r))
      return r.__ref;
    try {
      return this.policies.identify(r)[0];
    } catch (n) {
      __DEV__ && L.warn(n);
    }
  }, t.prototype.evict = function(r) {
    if (!r.id) {
      if (je.call(r, "id"))
        return !1;
      r = x(x({}, r), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(r, this.data);
    } finally {
      !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
    }
  }, t.prototype.reset = function(r) {
    var n = this;
    return this.init(), Qt.reset(), r && r.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), kc(this)) : this.broadcastWatches(), Promise.resolve();
  }, t.prototype.removeOptimistic = function(r) {
    var n = this.optimisticData.removeLayer(r);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, t.prototype.batch = function(r) {
    var n = this, o = r.update, i = r.optimistic, a = i === void 0 ? !0 : i, s = r.removeOptimistic, u = r.onWatchUpdated, c, l = function(d) {
      var h = n, v = h.data, p = h.optimisticData;
      ++n.txCount, d && (n.data = n.optimisticData = d);
      try {
        return c = o(n);
      } finally {
        --n.txCount, n.data = v, n.optimisticData = p;
      }
    }, f = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(x(x({}, r), { onWatchUpdated: function(d) {
      return f.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && f.size ? (this.broadcastWatches(x(x({}, r), { onWatchUpdated: function(d, h) {
      var v = u.call(this, d, h);
      return v !== !1 && f.delete(d), v;
    } })), f.size && f.forEach(function(d) {
      return n.maybeBroadcastWatch.dirty(d);
    })) : this.broadcastWatches(r), c;
  }, t.prototype.performTransaction = function(r, n) {
    return this.batch({
      update: r,
      optimistic: n || n !== null
    });
  }, t.prototype.transformDocument = function(r) {
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(r);
      return n || (n = Wa(r), this.typenameDocumentCache.set(r, n), this.typenameDocumentCache.set(n, n)), n;
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
    n && (r.optimistic && typeof n.optimistic == "string" && (i.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, i, o) === !1) || (!o || !Me(o.result, i.result)) && r.callback(r.lastDiff = i, o);
  }, t;
}(z0), be;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(be || (be = {}));
function en(e) {
  return e ? e < 7 : !1;
}
var um = Object.assign, lm = Object.hasOwnProperty, Gi = function(e) {
  ct(t, e);
  function t(r) {
    var n = r.queryManager, o = r.queryInfo, i = r.options, a = e.call(this, function(m) {
      try {
        var E = m._subscription._observer;
        E && !E.error && (E.error = fm);
      } catch {
      }
      var g = !a.observers.size;
      a.observers.add(m);
      var b = a.last;
      return b && b.error ? m.error && m.error(b.error) : b && b.result && m.next && m.next(b.result), g && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(m) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = oi(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, l = c === void 0 ? "cache-first" : c, f = i.fetchPolicy, d = f === void 0 ? l : f, h = i.initialFetchPolicy, v = h === void 0 ? d === "standby" ? l : d : h;
    a.options = x(x({}, i), { initialFetchPolicy: v, fetchPolicy: d }), a.queryId = o.queryId || n.generateQueryId();
    var p = un(a.query);
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
    var n = this.getLastResult(!0), o = this.queryInfo.networkStatus || n && n.networkStatus || be.ready, i = x(x({}, n), { loading: en(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(oi(s) || this.queryManager.transform(this.options.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (i.data = u.result), Me(i.data, {}) && (i.data = void 0), u.complete ? (delete i.partial, u.complete && i.networkStatus === be.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = be.ready, i.loading = !1)) : i.partial = !0, __DEV__ && !u.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && ff(u.missing);
      }
    return r && this.updateLastResult(i), i;
  }, t.prototype.isDifferentFromLastResult = function(r, n) {
    return !this.last || !Me(this.last.result, r) || n && !Me(this.last.variables, n);
  }, t.prototype.getLast = function(r, n) {
    var o = this.last;
    if (o && o[r] && (!n || Me(o.variables, this.variables)))
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
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", __DEV__ && r && lm.call(r, "variables")) {
      var a = Tl(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && __DEV__ && L.warn("Called refetch(".concat(JSON.stringify(r), ") for query ").concat(((n = a.name) === null || n === void 0 ? void 0 : n.value) || JSON.stringify(a), `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`));
    }
    return r && !Me(this.options.variables, r) && (o.variables = this.options.variables = x(x({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(o, be.refetch);
  }, t.prototype.fetchMore = function(r) {
    var n = this, o = x(x({}, r.query ? r : x(x(x(x({}, this.options), { query: this.query }), r), { variables: x(x({}, this.options.variables), r.variables) })), { fetchPolicy: "no-cache" }), i = this.queryManager.generateQueryId(), a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = be.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, be.fetchMore).then(function(c) {
      return n.queryManager.removeQuery(i), a.networkStatus === be.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(l) {
          var f = r.updateQuery;
          f ? l.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(d) {
            return f(d, {
              fetchMoreResult: c.data,
              variables: o.variables
            });
          }) : l.writeQuery({
            query: o.query,
            variables: o.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(l) {
          u.add(l.query);
        }
      }), c;
    }).finally(function() {
      u.has(n.query) || lf(n);
    });
  }, t.prototype.subscribeToMore = function(r) {
    var n = this, o = this.queryManager.startGraphQLSubscription({
      query: r.document,
      variables: r.variables,
      context: r.context
    }).subscribe({
      next: function(i) {
        var a = r.updateQuery;
        a && n.updateQuery(function(s, u) {
          var c = u.variables;
          return a(s, {
            subscriptionData: i,
            variables: c
          });
        });
      },
      error: function(i) {
        if (r.onError) {
          r.onError(i);
          return;
        }
        __DEV__ && L.error("Unhandled GraphQL subscription error", i);
      }
    });
    return this.subscriptions.add(o), function() {
      n.subscriptions.delete(o) && o.unsubscribe();
    };
  }, t.prototype.setOptions = function(r) {
    return this.reobserve(r);
  }, t.prototype.setVariables = function(r) {
    return Me(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: r
    }, be.setVariables) : Promise.resolve());
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
        __DEV__ ? L(i, "Attempted to start a polling query without a polling interval.") : L(i, 13);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          r.pollingInfo && (en(r.queryInfo.networkStatus) ? u() : r.reobserve({
            fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, be.poll).then(u, u));
        }, u = function() {
          var c = r.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, t.prototype.updateLastResult = function(r, n) {
    return n === void 0 && (n = this.variables), this.last = x(x({}, this.last), { result: this.queryManager.assumeImmutableResults ? r : Dl(r), variables: n }), pt(r.errors) || delete this.last.error, this.last;
  }, t.prototype.reobserveAsConcast = function(r, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === be.refetch || n === be.fetchMore || n === be.poll, a = this.options.variables, s = this.options.fetchPolicy, u = To(this.options, r || {}), c = i ? u : um(this.options, u);
    i || (this.updatePolling(), r && r.variables && !Me(r.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = be.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = oi(c.fetchPolicy));
    var l = function() {
      o.concast === h && (o.waitForOwnResult = !1);
    }, f = c.variables && x({}, c.variables), d = this.fetch(c, n), h = d.concast, v = d.fromLink, p = {
      next: function(m) {
        l(), o.reportResult(m, f);
      },
      error: function(m) {
        l(), o.reportError(m, f);
      }
    };
    return !i && v && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = p), h.addObserver(p), h;
  }, t.prototype.reobserve = function(r, n) {
    return this.reobserveAsConcast(r, n).promise;
  }, t.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, t.prototype.reportResult = function(r, n) {
    var o = this.getLastError();
    (o || this.isDifferentFromLastResult(r, n)) && ((o || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), Qr(this.observers, "next", r));
  }, t.prototype.reportError = function(r, n) {
    var o = x(x({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: be.error, loading: !1 });
    this.updateLastResult(o, n), Qr(this.observers, "error", this.last.error = r);
  }, t.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, t.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
      return r.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, t;
}(Se);
Il(Gi);
function lf(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : r;
    }
  }) : e.reobserve();
}
function fm(e) {
  __DEV__ && L.error("Unhandled error", e.message, e.stack);
}
function ff(e) {
  __DEV__ && e && __DEV__ && L.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
}
function oi(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var df = function() {
  function e(t) {
    var r = t.cache, n = t.client, o = t.resolvers, i = t.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(t) {
    var r = this;
    this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
      r.resolvers = ic(r.resolvers, n);
    }) : this.resolvers = ic(this.resolvers, t);
  }, e.prototype.setResolvers = function(t) {
    this.resolvers = {}, this.addResolvers(t);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(t) {
    var r = t.document, n = t.remoteResult, o = t.context, i = t.variables, a = t.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return Pt(this, void 0, void 0, function() {
      return kt(this, function(u) {
        return r ? [2, this.resolveDocument(r, n.data, o, i, this.fragmentMatcher, s).then(function(c) {
          return x(x({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(t) {
    this.fragmentMatcher = t;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(t) {
    return za(["client"], t) && this.resolvers ? t : null;
  }, e.prototype.serverQuery = function(t) {
    return gv(t);
  }, e.prototype.prepareContext = function(t) {
    var r = this.cache;
    return x(x({}, t), { cache: r, getCacheKey: function(n) {
      return r.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(t, r, n) {
    return r === void 0 && (r = {}), n === void 0 && (n = {}), Pt(this, void 0, void 0, function() {
      return kt(this, function(o) {
        return t ? [2, this.resolveDocument(t, this.buildRootValueFromCache(t, r) || {}, this.prepareContext(n), r).then(function(i) {
          return x(x({}, r), i.exportedVariables);
        })] : [2, x({}, r)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(t) {
    var r = !1;
    return Ot(t, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), r))
            return Va;
        }
      }
    }), r;
  }, e.prototype.buildRootValueFromCache = function(t, r) {
    return this.cache.diff({
      query: yv(t),
      variables: r,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(t, r, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), Pt(this, void 0, void 0, function() {
      var s, u, c, l, f, d, h, v, p, m, E;
      return kt(this, function(g) {
        return s = Co(t), u = qa(t), c = Ba(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", h = this, v = h.cache, p = h.client, m = {
          fragmentMap: c,
          context: x(x({}, n), { cache: v, client: p }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, E = !1, [2, this.resolveSelectionSet(s.selectionSet, E, r, m).then(function(b) {
          return {
            result: b,
            exportedVariables: m.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(t, r, n, o) {
    return Pt(this, void 0, void 0, function() {
      var i, a, s, u, c, l = this;
      return kt(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, u = [n], c = function(d) {
          return Pt(l, void 0, void 0, function() {
            var h, v;
            return kt(this, function(p) {
              return !r && !o.selectionsToResolve.has(d) ? [2] : _o(d, s) ? Jt(d) ? [2, this.resolveField(d, r, n, o).then(function(m) {
                var E;
                typeof m < "u" && u.push((E = {}, E[Xt(d)] = m, E));
              })] : (fv(d) ? h = d : (h = i[d.name.value], __DEV__ ? L(h, "No fragment named ".concat(d.name.value)) : L(h, 11)), h && h.typeCondition && (v = h.typeCondition.name.value, o.fragmentMatcher(n, v, a)) ? [2, this.resolveSelectionSet(h.selectionSet, r, n, o).then(function(m) {
                u.push(m);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(t.selections.map(c)).then(function() {
          return Ga(u);
        })];
      });
    });
  }, e.prototype.resolveField = function(t, r, n, o) {
    return Pt(this, void 0, void 0, function() {
      var i, a, s, u, c, l, f, d, h, v = this;
      return kt(this, function(p) {
        return n ? (i = o.variables, a = t.name.value, s = Xt(t), u = a !== s, c = n[s] || n[a], l = Promise.resolve(c), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (h = d[u ? a : s], h && (l = Promise.resolve(os.withValue(this.cache, h, [
          n,
          wo(t, i),
          o.context,
          { field: t, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(m) {
          var E, g;
          if (m === void 0 && (m = c), t.directives && t.directives.forEach(function(S) {
            S.name.value === "export" && S.arguments && S.arguments.forEach(function(y) {
              y.name.value === "as" && y.value.kind === "StringValue" && (o.exportedVariables[y.value.value] = m);
            });
          }), !t.selectionSet || m == null)
            return m;
          var b = (g = (E = t.directives) === null || E === void 0 ? void 0 : E.some(function(S) {
            return S.name.value === "client";
          })) !== null && g !== void 0 ? g : !1;
          if (Array.isArray(m))
            return v.resolveSubSelectedArray(t, r || b, m, o);
          if (t.selectionSet)
            return v.resolveSelectionSet(t.selectionSet, r || b, m, o);
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
        o.set(a, s), Ot(a, {
          Directive: function(u, c, l, f, d) {
            u.name.value === "client" && d.forEach(function(h) {
              n(h) && rc(h) && s.add(h);
            });
          },
          FragmentSpread: function(u, c, l, f, d) {
            var h = r[u.name.value];
            __DEV__ ? L(h, "No fragment named ".concat(u.name.value)) : L(h, 12);
            var v = i(h);
            v.size > 0 && (d.forEach(function(p) {
              n(p) && rc(p) && s.add(p);
            }), s.add(u), v.forEach(function(p) {
              s.add(p);
            }));
          }
        });
      }
      return o.get(a);
    }
    return i(t);
  }, e;
}(), pr = new (tr ? WeakMap : Map)();
function ii(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return pr.set(e, (pr.get(e) + 1) % 1e15), r.apply(this, arguments);
  });
}
function Bc(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var ai = function() {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.subscriptions = /* @__PURE__ */ new Set(), this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = t.cache;
    pr.has(n) || (pr.set(n, 0), ii(n, "evict"), ii(n, "modify"), ii(n, "reset"));
  }
  return e.prototype.init = function(t) {
    var r = t.networkStatus || be.loading;
    return this.variables && this.networkStatus !== be.loading && !Me(this.variables, t.variables) && (r = be.setVariables), Me(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: t.document,
      variables: t.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: r
    }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
  }, e.prototype.reset = function() {
    Bc(this), this.dirty = !1;
  }, e.prototype.getDiff = function(t) {
    t === void 0 && (t = this.variables);
    var r = this.getDiffOptions(t);
    if (this.lastDiff && Me(r, this.lastDiff.options))
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
    this.updateLastDiff(t), !this.dirty && !Me(n && n.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return r.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(t) {
    var r = this;
    t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = r.getDiff();
      n.fromOptimisticTransaction ? t.observe() : lf(t);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var t = this;
    Bc(this), this.shouldNotify() && this.listeners.forEach(function(r) {
      return r(t);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (en(this.networkStatus) && this.observableQuery) {
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
      var o = x(x({}, this.getDiffOptions(t)), { watcher: this, callback: function(i) {
        return r.setDiff(i);
      } });
      (!this.lastWatch || !Me(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(t, r) {
    var n = this.lastWrite;
    return !(n && n.dmCount === pr.get(this.cache) && Me(r, n.variables) && Me(t.data, n.result.data));
  }, e.prototype.markResult = function(t, r, n, o) {
    var i = this, a = new Ft(), s = pt(t.errors) ? t.errors.slice(0) : [];
    if (this.reset(), "incremental" in t && pt(t.incremental)) {
      var u = Fl(this.getDiff().result, t);
      t.data = u;
    } else if ("hasNext" in t && t.hasNext) {
      var c = this.getDiff();
      t.data = a.merge(c.result, t.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (Yi(t, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(t, n.variables))
        l.writeQuery({
          query: r,
          data: t.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: t,
          variables: n.variables,
          dmCount: pr.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        t.data = i.lastDiff.diff.result;
        return;
      }
      var f = i.getDiffOptions(n.variables), d = l.diff(f);
      i.stopped || i.updateWatch(n.variables), i.updateLastDiff(d, f), d.complete && (t.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = be.ready;
  }, e.prototype.markError = function(t) {
    return this.networkStatus = be.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
  }, e;
}();
function Yi(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !Vn(e);
  return !n && r && e.data && (n = !0), n;
}
var dm = Object.prototype.hasOwnProperty, hm = function() {
  function e(t) {
    var r = t.cache, n = t.link, o = t.defaultOptions, i = t.queryDeduplication, a = i === void 0 ? !1 : i, s = t.onBroadcast, u = t.ssrMode, c = u === void 0 ? !1 : u, l = t.clientAwareness, f = l === void 0 ? {} : l, d = t.localState, h = t.assumeImmutableResults;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (tr ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.cache = r, this.link = n, this.defaultOptions = o || /* @__PURE__ */ Object.create(null), this.queryDeduplication = a, this.clientAwareness = f, this.localState = d || new df({ cache: r }), this.ssrMode = c, this.assumeImmutableResults = !!h, (this.onBroadcast = s) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var t = this;
    this.queries.forEach(function(r, n) {
      t.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(__DEV__ ? new ue("QueryManager stopped while query was in flight") : new ue(14));
  }, e.prototype.cancelPendingFetches = function(t) {
    this.fetchCancelFns.forEach(function(r) {
      return r(t);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(t) {
    var r, n, o = t.mutation, i = t.variables, a = t.optimisticResponse, s = t.updateQueries, u = t.refetchQueries, c = u === void 0 ? [] : u, l = t.awaitRefetchQueries, f = l === void 0 ? !1 : l, d = t.update, h = t.onQueryUpdated, v = t.fetchPolicy, p = v === void 0 ? ((r = this.defaultOptions.mutate) === null || r === void 0 ? void 0 : r.fetchPolicy) || "network-only" : v, m = t.errorPolicy, E = m === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : m, g = t.keepRootFields, b = t.context;
    return Pt(this, void 0, void 0, function() {
      var S, y, w, _, R, N;
      return kt(this, function(P) {
        switch (P.label) {
          case 0:
            return __DEV__ ? L(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : L(o, 15), __DEV__ ? L(p === "network-only" || p === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : L(p === "network-only" || p === "no-cache", 16), S = this.generateMutationId(), y = this.transform(o), w = y.document, _ = y.hasClientExports, o = this.cache.transformForLink(w), i = this.getVariables(o, i), _ ? [4, this.localState.addExportedVariables(o, i, b)] : [3, 2];
          case 1:
            i = P.sent(), P.label = 2;
          case 2:
            return R = this.mutationStore && (this.mutationStore[S] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: S,
              document: o,
              variables: i,
              fetchPolicy: p,
              errorPolicy: E,
              context: b,
              updateQueries: s,
              update: d,
              keepRootFields: g
            }), this.broadcastQueries(), N = this, [2, new Promise(function(z, $) {
              return Ko(N.getObservableFromLink(o, x(x({}, b), { optimisticResponse: a }), i, !1), function(j) {
                if (Vn(j) && E === "none")
                  throw new ar({
                    graphQLErrors: Ii(j)
                  });
                R && (R.loading = !1, R.error = null);
                var U = x({}, j);
                return typeof c == "function" && (c = c(U)), E === "ignore" && Vn(U) && delete U.errors, N.markMutationResult({
                  mutationId: S,
                  result: U,
                  document: o,
                  variables: i,
                  fetchPolicy: p,
                  errorPolicy: E,
                  context: b,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: c,
                  removeOptimistic: a ? S : void 0,
                  onQueryUpdated: h,
                  keepRootFields: g
                });
              }).subscribe({
                next: function(j) {
                  N.broadcastQueries(), (!("hasNext" in j) || j.hasNext === !1) && z(j);
                },
                error: function(j) {
                  R && (R.loading = !1, R.error = j), a && N.cache.removeOptimistic(S), N.broadcastQueries(), $(j instanceof ar ? j : new ar({
                    networkError: j
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
    if (!a && Yi(o, t.errorPolicy)) {
      if (br(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: t.document,
        variables: t.variables
      }), br(o) && pt(o.incremental)) {
        var s = r.diff({
          id: "ROOT_MUTATION",
          query: this.transform(t.document).asQuery,
          variables: t.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = Fl(s.result, o)), typeof u < "u" && (o.data = u, i.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }));
      }
      var c = t.updateQueries;
      c && this.queries.forEach(function(f, d) {
        var h = f.observableQuery, v = h && h.queryName;
        if (!(!v || !dm.call(c, v))) {
          var p = c[v], m = n.queries.get(d), E = m.document, g = m.variables, b = r.diff({
            query: E,
            variables: g,
            returnPartialData: !0,
            optimistic: !1
          }), S = b.result, y = b.complete;
          if (y && S) {
            var w = p(S, {
              mutationResult: o,
              queryName: E && Pi(E) || void 0,
              queryVariables: g
            });
            w && i.push({
              result: w,
              dataId: "ROOT_QUERY",
              query: E,
              variables: g
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
          var d = t.update, h = !Mv(o) || br(o) && !o.hasNext;
          if (d) {
            if (!a) {
              var v = f.diff({
                id: "ROOT_MUTATION",
                query: n.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              v.complete && (o = x(x({}, o), { data: v.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            h && d(f, o, {
              context: t.context,
              variables: t.variables
            });
          }
          !a && !t.keepRootFields && h && f.modify({
            id: "ROOT_MUTATION",
            fields: function(p, m) {
              var E = m.fieldName, g = m.DELETE;
              return E === "__typename" ? p : g;
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
        n.markMutationResult(x(x({}, r), { result: { data: o } }), i);
      } catch (a) {
        __DEV__ && L.error(a);
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
      var n = this.cache.transformDocument(t), o = mv(n), i = this.localState.clientQuery(n), a = o && this.localState.serverQuery(o), s = {
        document: n,
        hasClientExports: Gp(n),
        hasForcedResolvers: this.localState.shouldForceResolvers(n),
        clientQuery: i,
        serverQuery: a,
        defaultVars: Qa(un(n)),
        asQuery: x(x({}, n), { definitions: n.definitions.map(function(c) {
          return c.kind === "OperationDefinition" && c.operation !== "query" ? x(x({}, c), { operation: "query" }) : c;
        }) })
      }, u = function(c) {
        c && !r.has(c) && r.set(c, s);
      };
      u(t), u(n), u(i), u(a);
    }
    return r.get(t);
  }, e.prototype.getVariables = function(t, r) {
    return x(x({}, this.transform(t).defaultVars), r);
  }, e.prototype.watchQuery = function(t) {
    t = x(x({}, t), { variables: this.getVariables(t.query, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
    var r = new ai(this), n = new Gi({
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
    return r === void 0 && (r = this.generateQueryId()), __DEV__ ? L(t.query, "query option is required. You must specify your GraphQL document in the query option.") : L(t.query, 17), __DEV__ ? L(t.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : L(t.query.kind === "Document", 18), __DEV__ ? L(!t.returnPartialData, "returnPartialData option only supported on watchQuery.") : L(!t.returnPartialData, 19), __DEV__ ? L(!t.pollInterval, "pollInterval option only supported on watchQuery.") : L(!t.pollInterval, 20), this.fetchQuery(r, t).finally(function() {
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
    }), this.cancelPendingFetches(__DEV__ ? new ue("Store reset while query was in flight (not completed in link chain)") : new ue(21)), this.queries.forEach(function(r) {
      r.observableQuery ? r.networkStatus = be.loading : r.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
  }, e.prototype.getObservableQueries = function(t) {
    var r = this;
    t === void 0 && (t = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(t) && t.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : Jp(a) ? o.set(r.transform(a).document, !1) : we(a) && a.query && i.add(a);
    }), this.queries.forEach(function(a, s) {
      var u = a.observableQuery, c = a.document;
      if (u) {
        if (t === "all") {
          n.set(s, u);
          return;
        }
        var l = u.queryName, f = u.options.fetchPolicy;
        if (f === "standby" || t === "active" && !u.hasObservers())
          return;
        (t === "active" || l && o.has(l) || c && o.has(c)) && (n.set(s, u), l && o.set(l, !0), c && o.set(c, !0));
      }
    }), i.size && i.forEach(function(a) {
      var s = Fi("legacyOneTimeQuery"), u = r.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new Gi({
        queryManager: r,
        queryInfo: u,
        options: x(x({}, a), { fetchPolicy: "network-only" })
      });
      L(c.queryId === s), u.setObservableQuery(c), n.set(s, c);
    }), __DEV__ && o.size && o.forEach(function(a, s) {
      a || __DEV__ && L.warn("Unknown query ".concat(typeof s == "string" ? "named " : "").concat(JSON.stringify(s, null, 2), " requested in refetchQueries options.include array"));
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
    var r = this, n = t.query, o = t.fetchPolicy, i = t.errorPolicy, a = t.variables, s = t.context, u = s === void 0 ? {} : s;
    n = this.transform(n).document, a = this.getVariables(n, a);
    var c = function(f) {
      return r.getObservableFromLink(n, u, f).map(function(d) {
        o !== "no-cache" && (Yi(d, i) && r.cache.write({
          query: n,
          result: d.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: f
        }), r.broadcastQueries());
        var h = Vn(d), v = Jv(d);
        if (h || v) {
          var p = {};
          throw h && (p.graphQLErrors = d.errors), v && (p.protocolErrors = d.extensions[es]), new ar(p);
        }
        return d;
      });
    };
    if (this.transform(n).hasClientExports) {
      var l = this.localState.addExportedVariables(n, a, u).then(c);
      return new Se(function(f) {
        var d = null;
        return l.then(function(h) {
          return d = h.subscribe(f);
        }, f.error), function() {
          return d && d.unsubscribe();
        };
      });
    }
    return c(a);
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
    var s, u = this.transform(t).serverQuery;
    if (u) {
      var c = this, l = c.inFlightLinkObservables, f = c.link, d = {
        query: u,
        variables: n,
        operationName: Pi(u) || void 0,
        context: this.prepareContext(x(x({}, r), { forceFetch: !o }))
      };
      if (r = d.context, o) {
        var h = l.get(u) || /* @__PURE__ */ new Map();
        l.set(u, h);
        var v = Qt(n);
        if (s = h.get(v), !s) {
          var p = new lr([
            ji(f, d)
          ]);
          h.set(v, s = p), p.beforeNext(function() {
            h.delete(v) && h.size < 1 && l.delete(u);
          });
        }
      } else
        s = new lr([
          ji(f, d)
        ]);
    } else
      s = new lr([
        Se.of({ data: {} })
      ]), r = this.prepareContext(r);
    var m = this.transform(t).clientQuery;
    return m && (s = Ko(s, function(E) {
      return i.localState.runResolvers({
        document: m,
        remoteResult: E,
        context: r,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(t, r, n) {
    var o = t.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(t.document).document);
    return Ko(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = Ii(a), u = s.length > 0;
      if (o >= t.lastRequestId) {
        if (u && n.errorPolicy === "none")
          throw t.markError(new ar({
            graphQLErrors: s
          }));
        t.markResult(a, i, n, r), t.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: be.ready
      };
      return u && n.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = be.error), c;
    }, function(a) {
      var s = Zv(a) ? a : new ar({ networkError: a });
      throw o >= t.lastRequestId && t.markError(s), s;
    });
  }, e.prototype.fetchQueryObservable = function(t, r, n) {
    return this.fetchConcastWithInfo(t, r, n).concast;
  }, e.prototype.fetchConcastWithInfo = function(t, r, n) {
    var o = this;
    n === void 0 && (n = be.loading);
    var i = this.transform(r.query).document, a = this.getVariables(i, r.variables), s = this.getQuery(t), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, l = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, f = r.errorPolicy, d = f === void 0 ? u && u.errorPolicy || "none" : f, h = r.returnPartialData, v = h === void 0 ? !1 : h, p = r.notifyOnNetworkStatusChange, m = p === void 0 ? !1 : p, E = r.context, g = E === void 0 ? {} : E, b = Object.assign({}, r, {
      query: i,
      variables: a,
      fetchPolicy: l,
      errorPolicy: d,
      returnPartialData: v,
      notifyOnNetworkStatusChange: m,
      context: g
    }), S = function(N) {
      b.variables = N;
      var P = o.fetchQueryByPolicy(s, b, n);
      return b.fetchPolicy !== "standby" && P.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), P;
    }, y = function() {
      return o.fetchCancelFns.delete(t);
    };
    this.fetchCancelFns.set(t, function(N) {
      y(), setTimeout(function() {
        return w.cancel(N);
      });
    });
    var w, _;
    if (this.transform(b.query).hasClientExports)
      w = new lr(this.localState.addExportedVariables(b.query, b.variables, b.context).then(S).then(function(N) {
        return N.sources;
      })), _ = !0;
    else {
      var R = S(b.variables);
      _ = R.fromLink, w = new lr(R.sources);
    }
    return w.promise.then(y, y), {
      concast: w,
      fromLink: _
    };
  }, e.prototype.refetchQueries = function(t) {
    var r = this, n = t.updateCache, o = t.include, i = t.optimistic, a = i === void 0 ? !1 : i, s = t.removeOptimistic, u = s === void 0 ? a ? Fi("refetchQueries") : void 0 : s, c = t.onQueryUpdated, l = /* @__PURE__ */ new Map();
    o && this.getObservableQueries(o).forEach(function(d, h) {
      l.set(h, {
        oq: d,
        lastDiff: r.getQuery(h).getDiff()
      });
    });
    var f = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(d, h, v) {
        var p = d.watcher instanceof ai && d.watcher.observableQuery;
        if (p) {
          if (c) {
            l.delete(p.queryId);
            var m = c(p, h, v);
            return m === !0 && (m = p.refetch()), m !== !1 && f.set(p, m), m;
          }
          c !== null && l.set(p.queryId, { oq: p, lastDiff: v, diff: h });
        }
      }
    }), l.size && l.forEach(function(d, h) {
      var v = d.oq, p = d.lastDiff, m = d.diff, E;
      if (c) {
        if (!m) {
          var g = v.queryInfo;
          g.reset(), m = g.getDiff();
        }
        E = c(v, m, p);
      }
      (!c || E === !0) && (E = v.refetch()), E !== !1 && f.set(v, E), h.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(h);
    }), u && this.cache.removeOptimistic(u), f;
  }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
    var o = this, i = r.query, a = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, l = r.returnPartialData, f = r.context, d = r.notifyOnNetworkStatusChange, h = t.networkStatus;
    t.init({
      document: this.transform(i).document,
      variables: a,
      networkStatus: n
    });
    var v = function() {
      return t.getDiff(a);
    }, p = function(S, y) {
      y === void 0 && (y = t.networkStatus || be.loading);
      var w = S.result;
      __DEV__ && !l && !Me(w, {}) && ff(S.missing);
      var _ = function(R) {
        return Se.of(x({ data: R, loading: en(y), networkStatus: y }, S.complete ? null : { partial: !0 }));
      };
      return w && o.transform(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: w },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(R) {
        return _(R.data || void 0);
      }) : c === "none" && y === be.refetch && Array.isArray(S.missing) ? _(void 0) : _(w);
    }, m = s === "no-cache" ? 0 : n === be.refetch && u !== "merge" ? 1 : 2, E = function() {
      return o.getResultsFromLink(t, m, {
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, g = d && typeof h == "number" && h !== n && en(n);
    switch (s) {
      default:
      case "cache-first": {
        var b = v();
        return b.complete ? { fromLink: !1, sources: [p(b, t.markReady())] } : l || g ? { fromLink: !0, sources: [p(b), E()] } : { fromLink: !0, sources: [E()] };
      }
      case "cache-and-network": {
        var b = v();
        return b.complete || l || g ? { fromLink: !0, sources: [p(b), E()] } : { fromLink: !0, sources: [E()] };
      }
      case "cache-only":
        return { fromLink: !1, sources: [p(v(), t.markReady())] };
      case "network-only":
        return g ? { fromLink: !0, sources: [p(v()), E()] } : { fromLink: !0, sources: [E()] };
      case "no-cache":
        return g ? {
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
    return t && !this.queries.has(t) && this.queries.set(t, new ai(this, t)), this.queries.get(t);
  }, e.prototype.prepareContext = function(t) {
    t === void 0 && (t = {});
    var r = this.localState.prepareContext(t);
    return x(x({}, r), { clientAwareness: this.clientAwareness });
  }, e;
}(), Hc = !1, pm = function() {
  function e(t) {
    var r = this;
    this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = t.uri, o = t.credentials, i = t.headers, a = t.cache, s = t.ssrMode, u = s === void 0 ? !1 : s, c = t.ssrForceFetchDelay, l = c === void 0 ? 0 : c, f = t.connectToDevTools, d = f === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && __DEV__ : f, h = t.queryDeduplication, v = h === void 0 ? !0 : h, p = t.defaultOptions, m = t.assumeImmutableResults, E = m === void 0 ? !1 : m, g = t.resolvers, b = t.typeDefs, S = t.fragmentMatcher, y = t.name, w = t.version, _ = t.link;
    if (_ || (_ = n ? new m0({ uri: n, credentials: o, headers: i }) : Ar.empty()), !a)
      throw __DEV__ ? new ue(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`) : new ue(9);
    if (this.link = _, this.cache = a, this.disableNetworkFetches = u || l > 0, this.queryDeduplication = v, this.defaultOptions = p || /* @__PURE__ */ Object.create(null), this.typeDefs = b, l && setTimeout(function() {
      return r.disableNetworkFetches = !1;
    }, l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this), !Hc && d && __DEV__ && (Hc = !0, typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
      var R = window.navigator, N = R && R.userAgent, P = void 0;
      typeof N == "string" && (N.indexOf("Chrome/") > -1 ? P = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : N.indexOf("Firefox/") > -1 && (P = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), P && __DEV__ && L.log("Download the Apollo DevTools for a better development experience: " + P);
    }
    this.version = zv, this.localState = new df({
      cache: a,
      client: this,
      resolvers: g,
      fragmentMatcher: S
    }), this.queryManager = new hm({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication: v,
      ssrMode: u,
      clientAwareness: {
        name: y,
        version: w
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
    return this.defaultOptions.watchQuery && (t = Xo(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = x(x({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
  }, e.prototype.query = function(t) {
    return this.defaultOptions.query && (t = Xo(this.defaultOptions.query, t)), __DEV__ ? L(t.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : L(t.fetchPolicy !== "cache-and-network", 10), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = x(x({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
  }, e.prototype.mutate = function(t) {
    return this.defaultOptions.mutate && (t = Xo(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
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
    return ji(this.link, t);
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
      __DEV__ && L.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(a));
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
function vm(e) {
  return new Ar(function(t, r) {
    var n = Kt(t, []);
    return new Se(function(o) {
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
const mm = `${_l}/${_p._GRAPHQL}`, ym = new wp(), gm = jl({
  uri: mm
}), bm = vm((e, { headers: t }) => {
  const r = ym.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...t,
      Authorization: `Bearer ${r}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), Uc = new pm({
  cache: new cm(),
  link: bm.concat(gm)
});
function hf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Em } = Object.prototype, { getPrototypeOf: cs } = Object, Ro = ((e) => (t) => {
  const r = Em.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), vt = (e) => (e = e.toLowerCase(), (t) => Ro(t) === e), Po = (e) => (t) => typeof t === e, { isArray: Pr } = Array, tn = Po("undefined");
function Sm(e) {
  return e !== null && !tn(e) && e.constructor !== null && !tn(e.constructor) && Ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pf = vt("ArrayBuffer");
function _m(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pf(e.buffer), t;
}
const wm = Po("string"), Ze = Po("function"), vf = Po("number"), ko = (e) => e !== null && typeof e == "object", Om = (e) => e === !0 || e === !1, Bn = (e) => {
  if (Ro(e) !== "object")
    return !1;
  const t = cs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Cm = vt("Date"), xm = vt("File"), Tm = vt("Blob"), Am = vt("FileList"), Rm = (e) => ko(e) && Ze(e.pipe), Pm = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ze(e.append) && ((t = Ro(e)) === "formdata" || // detect form-data instance
  t === "object" && Ze(e.toString) && e.toString() === "[object FormData]"));
}, km = vt("URLSearchParams"), Nm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ln(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Pr(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function mf(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const yf = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gf = (e) => !tn(e) && e !== yf;
function Ki() {
  const { caseless: e } = gf(this) && this || {}, t = {}, r = (n, o) => {
    const i = e && mf(t, o) || o;
    Bn(t[i]) && Bn(n) ? t[i] = Ki(t[i], n) : Bn(n) ? t[i] = Ki({}, n) : Pr(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ln(arguments[n], r);
  return t;
}
const Dm = (e, t, r, { allOwnKeys: n } = {}) => (ln(t, (o, i) => {
  r && Ze(o) ? e[i] = hf(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), Mm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Im = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fm = (e, t, r, n) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = r !== !1 && cs(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Lm = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, jm = (e) => {
  if (!e)
    return null;
  if (Pr(e))
    return e;
  let t = e.length;
  if (!vf(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, $m = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && cs(Uint8Array)), Vm = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, zm = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Bm = vt("HTMLFormElement"), Hm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), qc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Um = vt("RegExp"), bf = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ln(r, (o, i) => {
    t(o, i, e) !== !1 && (n[i] = o);
  }), Object.defineProperties(e, n);
}, qm = (e) => {
  bf(e, (t, r) => {
    if (Ze(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ze(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Qm = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = !0;
    });
  };
  return Pr(e) ? n(e) : n(String(e).split(t)), r;
}, Wm = () => {
}, Gm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), si = "abcdefghijklmnopqrstuvwxyz", Qc = "0123456789", Ef = {
  DIGIT: Qc,
  ALPHA: si,
  ALPHA_DIGIT: si + si.toUpperCase() + Qc
}, Ym = (e = 16, t = Ef.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Km(e) {
  return !!(e && Ze(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Xm = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ko(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const i = Pr(n) ? [] : {};
        return ln(n, (a, s) => {
          const u = r(a, o + 1);
          !tn(u) && (i[s] = u);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Jm = vt("AsyncFunction"), Zm = (e) => e && (ko(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), A = {
  isArray: Pr,
  isArrayBuffer: pf,
  isBuffer: Sm,
  isFormData: Pm,
  isArrayBufferView: _m,
  isString: wm,
  isNumber: vf,
  isBoolean: Om,
  isObject: ko,
  isPlainObject: Bn,
  isUndefined: tn,
  isDate: Cm,
  isFile: xm,
  isBlob: Tm,
  isRegExp: Um,
  isFunction: Ze,
  isStream: Rm,
  isURLSearchParams: km,
  isTypedArray: $m,
  isFileList: Am,
  forEach: ln,
  merge: Ki,
  extend: Dm,
  trim: Nm,
  stripBOM: Mm,
  inherits: Im,
  toFlatObject: Fm,
  kindOf: Ro,
  kindOfTest: vt,
  endsWith: Lm,
  toArray: jm,
  forEachEntry: Vm,
  matchAll: zm,
  isHTMLForm: Bm,
  hasOwnProperty: qc,
  hasOwnProp: qc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bf,
  freezeMethods: qm,
  toObjectSet: Qm,
  toCamelCase: Hm,
  noop: Wm,
  toFiniteNumber: Gm,
  findKey: mf,
  global: yf,
  isContextDefined: gf,
  ALPHABET: Ef,
  generateString: Ym,
  isSpecCompliantForm: Km,
  toJSONObject: Xm,
  isAsyncFn: Jm,
  isThenable: Zm
};
function oe(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
A.inherits(oe, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Sf = oe.prototype, _f = {};
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
  _f[e] = { value: e };
});
Object.defineProperties(oe, _f);
Object.defineProperty(Sf, "isAxiosError", { value: !0 });
oe.from = (e, t, r, n, o, i) => {
  const a = Object.create(Sf);
  return A.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), oe.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const ey = null;
function Xi(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function wf(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wc(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = wf(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ty(e) {
  return A.isArray(e) && !e.some(Xi);
}
const ry = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function No(e, t, r) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = A.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, m) {
    return !A.isUndefined(m[p]);
  });
  const n = r.metaTokens, o = r.visitor || l, i = r.dots, a = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (A.isDate(v))
      return v.toISOString();
    if (!u && A.isBlob(v))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(v) || A.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function l(v, p, m) {
    let E = v;
    if (v && !m && typeof v == "object") {
      if (A.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), v = JSON.stringify(v);
      else if (A.isArray(v) && ty(v) || (A.isFileList(v) || A.endsWith(p, "[]")) && (E = A.toArray(v)))
        return p = wf(p), E.forEach(function(b, S) {
          !(A.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Wc([p], S, i) : a === null ? p : p + "[]",
            c(b)
          );
        }), !1;
    }
    return Xi(v) ? !0 : (t.append(Wc(m, p, i), c(v)), !1);
  }
  const f = [], d = Object.assign(ry, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Xi
  });
  function h(v, p) {
    if (!A.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(v), A.forEach(v, function(E, g) {
        (!(A.isUndefined(E) || E === null) && o.call(
          t,
          E,
          A.isString(g) ? g.trim() : g,
          p,
          d
        )) === !0 && h(E, p ? p.concat(g) : [g]);
      }), f.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Gc(e) {
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
function us(e, t) {
  this._pairs = [], e && No(e, this, t);
}
const Of = us.prototype;
Of.append = function(t, r) {
  this._pairs.push([t, r]);
};
Of.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Gc);
  } : Gc;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ny(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cf(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ny, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = A.isURLSearchParams(t) ? t.toString() : new us(t, r).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class oy {
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
    A.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Yc = oy, xf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, iy = typeof URLSearchParams < "u" ? URLSearchParams : us, ay = typeof FormData < "u" ? FormData : null, sy = typeof Blob < "u" ? Blob : null, cy = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), uy = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ht = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iy,
    FormData: ay,
    Blob: sy
  },
  isStandardBrowserEnv: cy,
  isStandardBrowserWebWorkerEnv: uy,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function ly(e, t) {
  return No(e, new ht.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, i) {
      return ht.isNode && A.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fy(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function dy(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Tf(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const s = Number.isFinite(+a), u = i >= r.length;
    return a = !a && A.isArray(o) ? o.length : a, u ? (A.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !A.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && A.isArray(o[a]) && (o[a] = dy(o[a])), !s);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const r = {};
    return A.forEachEntry(e, (n, o) => {
      t(fy(n), o, r, 0);
    }), r;
  }
  return null;
}
const hy = {
  "Content-Type": void 0
};
function py(e, t, r) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Do = {
  transitional: xf,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = A.isObject(t);
    if (i && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o && o ? JSON.stringify(Tf(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ly(t, this.formSerializer).toString();
      if ((s = A.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return No(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (r.setContentType("application/json", !1), py(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Do.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (t && A.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? oe.from(s, oe.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: ht.classes.FormData,
    Blob: ht.classes.Blob
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
A.forEach(["delete", "get", "head"], function(t) {
  Do.headers[t] = {};
});
A.forEach(["post", "put", "patch"], function(t) {
  Do.headers[t] = A.merge(hy);
});
const ls = Do, vy = A.toObjectSet([
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
]), my = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && vy[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Kc = Symbol("internals");
function Ur(e) {
  return e && String(e).trim().toLowerCase();
}
function Hn(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Hn) : String(e);
}
function yy(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const gy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ci(e, t, r, n, o) {
  if (A.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!A.isString(t)) {
    if (A.isString(n))
      return t.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(t);
  }
}
function by(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ey(e, t) {
  const r = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class Mo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(s, u, c) {
      const l = Ur(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = A.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || u] = Hn(s));
    }
    const a = (s, u) => A.forEach(s, (c, l) => i(c, l, u));
    return A.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : A.isString(t) && (t = t.trim()) && !gy(t) ? a(my(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Ur(t), t) {
      const n = A.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return yy(o);
        if (A.isFunction(r))
          return r.call(this, o, n);
        if (A.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ur(t), t) {
      const n = A.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ci(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Ur(a), a) {
        const s = A.findKey(n, a);
        s && (!r || ci(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || ci(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return A.forEach(this, (o, i) => {
      const a = A.findKey(n, i);
      if (a) {
        r[a] = Hn(o), delete r[i];
        return;
      }
      const s = t ? by(i) : String(i).trim();
      s !== i && delete r[i], r[s] = Hn(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && A.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Kc] = this[Kc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Ur(a);
      n[s] || (Ey(o, a), n[s] = !0);
    }
    return A.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Mo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.freezeMethods(Mo.prototype);
A.freezeMethods(Mo);
const _t = Mo;
function ui(e, t) {
  const r = this || ls, n = t || r, o = _t.from(n.headers);
  let i = n.data;
  return A.forEach(e, function(s) {
    i = s.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Af(e) {
  return !!(e && e.__CANCEL__);
}
function fn(e, t, r) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
A.inherits(fn, oe, {
  __CANCEL__: !0
});
function Sy(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new oe(
    "Request failed with status code " + r.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const _y = ht.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, o, i, a, s) {
        const u = [];
        u.push(r + "=" + encodeURIComponent(n)), A.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), A.isString(i) && u.push("path=" + i), A.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function wy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Oy(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Rf(e, t) {
  return e && !wy(t) ? Oy(e, t) : t;
}
const Cy = ht.isStandardBrowserEnv ? (
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
      const s = A.isString(a) ? o(a) : a;
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
function xy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ty(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const c = Date.now(), l = n[i];
    a || (a = c), r[o] = u, n[o] = c;
    let f = i, d = 0;
    for (; f !== o; )
      d += r[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - a < t)
      return;
    const h = l && c - l;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function Xc(e, t) {
  let r = 0;
  const n = Ty(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - r, u = n(s), c = i <= a;
    r = i;
    const l = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Ay = typeof XMLHttpRequest < "u", Ry = Ay && function(e) {
  return new Promise(function(r, n) {
    let o = e.data;
    const i = _t.from(e.headers).normalize(), a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    A.isFormData(o) && (ht.isStandardBrowserEnv || ht.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + v));
    }
    const l = Rf(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Cf(l, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function f() {
      if (!c)
        return;
      const h = _t.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), p = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: h,
        config: e,
        request: c
      };
      Sy(function(E) {
        r(E), u();
      }, function(E) {
        n(E), u();
      }, p), c = null;
    }
    if ("onloadend" in c ? c.onloadend = f : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, c.onabort = function() {
      c && (n(new oe("Request aborted", oe.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new oe("Network Error", oe.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const p = e.transitional || xf;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new oe(
        v,
        p.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        c
      )), c = null;
    }, ht.isStandardBrowserEnv) {
      const h = (e.withCredentials || Cy(l)) && e.xsrfCookieName && _y.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in c && A.forEach(i.toJSON(), function(v, p) {
      c.setRequestHeader(p, v);
    }), A.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Xc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Xc(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      c && (n(!h || h.type ? new fn(null, e, c) : h), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const d = xy(l);
    if (d && ht.protocols.indexOf(d) === -1) {
      n(new oe("Unsupported protocol " + d + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Un = {
  http: ey,
  xhr: Ry
};
A.forEach(Un, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Py = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = A.isString(r) ? Un[r.toLowerCase()] : r)); o++)
      ;
    if (!n)
      throw n === !1 ? new oe(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        A.hasOwnProp(Un, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`
      );
    if (!A.isFunction(n))
      throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Un
};
function li(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fn(null, e);
}
function Jc(e) {
  return li(e), e.headers = _t.from(e.headers), e.data = ui.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Py.getAdapter(e.adapter || ls.adapter)(e).then(function(n) {
    return li(e), n.data = ui.call(
      e,
      e.transformResponse,
      n
    ), n.headers = _t.from(n.headers), n;
  }, function(n) {
    return Af(n) || (li(e), n && n.response && (n.response.data = ui.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = _t.from(n.response.headers))), Promise.reject(n);
  });
}
const Zc = (e) => e instanceof _t ? e.toJSON() : e;
function Or(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, f) {
    return A.isPlainObject(c) && A.isPlainObject(l) ? A.merge.call({ caseless: f }, c, l) : A.isPlainObject(l) ? A.merge({}, l) : A.isArray(l) ? l.slice() : l;
  }
  function o(c, l, f) {
    if (A.isUndefined(l)) {
      if (!A.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function i(c, l) {
    if (!A.isUndefined(l))
      return n(void 0, l);
  }
  function a(c, l) {
    if (A.isUndefined(l)) {
      if (!A.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function s(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
  }
  const u = {
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
    headers: (c, l) => o(Zc(c), Zc(l), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = u[l] || o, d = f(e[l], t[l], l);
    A.isUndefined(d) && f !== s || (r[l] = d);
  }), r;
}
const Pf = "1.4.0", fs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fs[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const eu = {};
fs.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + Pf + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new oe(
        o(a, " has been removed" + (r ? " in " + r : "")),
        oe.ERR_DEPRECATED
      );
    return r && !eu[a] && (eu[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function ky(e, t, r) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = t[i];
    if (a) {
      const s = e[i], u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new oe("option " + i + " must be " + u, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new oe("Unknown option " + i, oe.ERR_BAD_OPTION);
  }
}
const Ji = {
  assertOptions: ky,
  validators: fs
}, Tt = Ji.validators;
class ao {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Yc(),
      response: new Yc()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Or(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && Ji.assertOptions(n, {
      silentJSONParsing: Tt.transitional(Tt.boolean),
      forcedJSONParsing: Tt.transitional(Tt.boolean),
      clarifyTimeoutError: Tt.transitional(Tt.boolean)
    }, !1), o != null && (A.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ji.assertOptions(o, {
      encode: Tt.function,
      serialize: Tt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && A.merge(
      i.common,
      i[r.method]
    ), a && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = _t.concat(a, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (u = u && p.synchronous, s.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(p) {
      c.push(p.fulfilled, p.rejected);
    });
    let l, f = 0, d;
    if (!u) {
      const v = [Jc.bind(this), void 0];
      for (v.unshift.apply(v, s), v.push.apply(v, c), d = v.length, l = Promise.resolve(r); f < d; )
        l = l.then(v[f++], v[f++]);
      return l;
    }
    d = s.length;
    let h = r;
    for (f = 0; f < d; ) {
      const v = s[f++], p = s[f++];
      try {
        h = v(h);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      l = Jc.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, d = c.length; f < d; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Or(this.defaults, t);
    const r = Rf(t.baseURL, t.url);
    return Cf(r, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(t) {
  ao.prototype[t] = function(r, n) {
    return this.request(Or(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, s) {
      return this.request(Or(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  ao.prototype[t] = r(), ao.prototype[t + "Form"] = r(!0);
});
const qn = ao;
class ds {
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
      n.reason || (n.reason = new fn(i, a, s), r(n.reason));
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
      token: new ds(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Ny = ds;
function Dy(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function My(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Zi = {
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
Object.entries(Zi).forEach(([e, t]) => {
  Zi[t] = e;
});
const Iy = Zi;
function kf(e) {
  const t = new qn(e), r = hf(qn.prototype.request, t);
  return A.extend(r, qn.prototype, t, { allOwnKeys: !0 }), A.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return kf(Or(e, o));
  }, r;
}
const Fe = kf(ls);
Fe.Axios = qn;
Fe.CanceledError = fn;
Fe.CancelToken = Ny;
Fe.isCancel = Af;
Fe.VERSION = Pf;
Fe.toFormData = No;
Fe.AxiosError = oe;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(t) {
  return Promise.all(t);
};
Fe.spread = Dy;
Fe.isAxiosError = My;
Fe.mergeConfig = Or;
Fe.AxiosHeaders = _t;
Fe.formToJSON = (e) => Tf(A.isHTMLForm(e) ? new FormData(e) : e);
Fe.HttpStatusCode = Iy;
Fe.default = Fe;
const Fy = Fe, R_ = Fy.create({
  baseURL: _l,
  withCredentials: !0
}), Ly = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, P_ = [Ly.PROFILE], k_ = () => {
  const [e, t] = bl([]);
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
}, N_ = (e, t) => {
  St(() => {
    e();
  }, t);
}, jy = (e = !1) => {
  const [t, r] = bl(e);
  return {
    off: () => r(!1),
    on: () => r(!0),
    toggle: () => r(!t),
    val: t
  };
}, D_ = (e, t) => {
  const r = Je();
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      e(...n);
    }, t);
  };
}, M_ = (e, t) => {
  St(() => {
    for (const r of t)
      if (!r)
        return;
    return e();
  }, t);
}, I_ = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, $y = ({ when: e, children: t }) => e ? t : null, Nf = cn({}), Vy = async () => Promise.all([
  import("./react-spring_web.modern-d55cb301.mjs"),
  import("./use-gesture-react.esm-862244eb.mjs")
]), zy = ({ children: e }) => {
  const t = Je(), r = Je(), n = jy(), o = async () => {
    const [a, s] = await Vy();
    t.current = a, r.current = s, n.on();
  };
  St(() => {
    o();
  }, []);
  const i = El(
    () => ({
      Spring: t.current,
      Gesture: r.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ st(Nf.Provider, { value: i, children: /* @__PURE__ */ st($y, { when: n.val, children: e }) });
}, F_ = () => et(Nf);
var $e;
$e = { __e: function(e, t, r, n) {
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
var so, Ae, fi, tu, ea = 0, Df = [], Qn = [], ru = $e.__b, nu = $e.__r, ou = $e.diffed, iu = $e.__c, au = $e.unmount;
function Mf(e, t) {
  $e.__h && $e.__h(Ae, e, ea || t), ea = 0;
  var r = Ae.__H || (Ae.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Qn }), r.__[e];
}
function By(e) {
  return ea = 1, Hy(If, e);
}
function Hy(e, t, r) {
  var n = Mf(so++, 2);
  if (n.t = e, !n.__c && (n.__ = [r ? r(t) : If(void 0, t), function(s) {
    var u = n.__N ? n.__N[0] : n.__[0], c = n.t(u, s);
    u !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = Ae, !Ae.u)) {
    var o = function(s, u, c) {
      if (!n.__c.__H)
        return !0;
      var l = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (l.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, s, u, c);
      var f = !1;
      return l.forEach(function(d) {
        if (d.__N) {
          var h = d.__[0];
          d.__ = d.__N, d.__N = void 0, h !== d.__[0] && (f = !0);
        }
      }), !(!f && n.__c.props === s) && (!i || i.call(this, s, u, c));
    };
    Ae.u = !0;
    var i = Ae.shouldComponentUpdate, a = Ae.componentWillUpdate;
    Ae.componentWillUpdate = function(s, u, c) {
      if (this.__e) {
        var l = i;
        i = void 0, o(s, u, c), i = l;
      }
      a && a.call(this, s, u, c);
    }, Ae.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Uy(e) {
  var t = Mf(so++, 10), r = By();
  return t.__ = e, Ae.componentDidCatch || (Ae.componentDidCatch = function(n, o) {
    t.__ && t.__(n, o), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function qy() {
  for (var e; e = Df.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Wn), e.__H.__h.forEach(ta), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], $e.__e(t, e.__v);
      }
}
$e.__b = function(e) {
  Ae = null, ru && ru(e);
}, $e.__r = function(e) {
  nu && nu(e), so = 0;
  var t = (Ae = e.__c).__H;
  t && (fi === Ae ? (t.__h = [], Ae.__h = [], t.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Qn, r.__N = r.i = void 0;
  })) : (t.__h.forEach(Wn), t.__h.forEach(ta), t.__h = [], so = 0)), fi = Ae;
}, $e.diffed = function(e) {
  ou && ou(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Df.push(t) !== 1 && tu === $e.requestAnimationFrame || ((tu = $e.requestAnimationFrame) || Qy)(qy)), t.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Qn && (r.__ = r.__V), r.i = void 0, r.__V = Qn;
  })), fi = Ae = null;
}, $e.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Wn), r.__h = r.__h.filter(function(n) {
        return !n.__ || ta(n);
      });
    } catch (n) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], $e.__e(n, r.__v);
    }
  }), iu && iu(e, t);
}, $e.unmount = function(e) {
  au && au(e);
  var t, r = e.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Wn(n);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && $e.__e(t, r.__v));
};
var su = typeof requestAnimationFrame == "function";
function Qy(e) {
  var t, r = function() {
    clearTimeout(n), su && cancelAnimationFrame(t), setTimeout(e);
  }, n = setTimeout(r, 100);
  su && (t = requestAnimationFrame(r));
}
function Wn(e) {
  var t = Ae, r = e.__c;
  typeof r == "function" && (e.__c = void 0, r()), Ae = t;
}
function ta(e) {
  var t = Ae;
  e.__c = e.__(), Ae = t;
}
function If(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Wy = () => /* @__PURE__ */ ja("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ st("br", {})
] }), L_ = ({ children: e }) => {
  const [t] = Uy();
  return console.error(t), t ? /* @__PURE__ */ st(Wy, { errorInfo: t }) : /* @__PURE__ */ st($a, { children: e });
};
function kr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ke(e) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(e);
}
function Gy(e, t) {
  if (ke(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ke(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ff(e) {
  var t = Gy(e, "string");
  return ke(t) === "symbol" ? t : String(t);
}
function cu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ff(n.key), n);
  }
}
function Nr(e, t, r) {
  return t && cu(e.prototype, t), r && cu(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ra(e, t) {
  return ra = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ra(e, t);
}
function Lf(e, t) {
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
  }), t && ra(e, t);
}
function co(e) {
  return co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, co(e);
}
function Yy() {
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
function na(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ky(e, t) {
  if (t && (ke(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return na(e);
}
function jf(e) {
  var t = Yy();
  return function() {
    var n = co(e), o;
    if (t) {
      var i = co(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Ky(this, o);
  };
}
var $f = { exports: {} };
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
            for (var u in i)
              t.call(i, u) && i[u] && n.push(u);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})($f);
var Xy = $f.exports;
const Ct = /* @__PURE__ */ Za(Xy);
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
var oa = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uu;
function Jy() {
  if (uu)
    return le;
  uu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var w = y.$$typeof;
      switch (w) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case n:
            case i:
            case o:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case l:
                case v:
                case h:
                case a:
                  return y;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function S(y) {
    return b(y) === c;
  }
  return le.AsyncMode = u, le.ConcurrentMode = c, le.ContextConsumer = s, le.ContextProvider = a, le.Element = t, le.ForwardRef = l, le.Fragment = n, le.Lazy = v, le.Memo = h, le.Portal = r, le.Profiler = i, le.StrictMode = o, le.Suspense = f, le.isAsyncMode = function(y) {
    return S(y) || b(y) === u;
  }, le.isConcurrentMode = S, le.isContextConsumer = function(y) {
    return b(y) === s;
  }, le.isContextProvider = function(y) {
    return b(y) === a;
  }, le.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, le.isForwardRef = function(y) {
    return b(y) === l;
  }, le.isFragment = function(y) {
    return b(y) === n;
  }, le.isLazy = function(y) {
    return b(y) === v;
  }, le.isMemo = function(y) {
    return b(y) === h;
  }, le.isPortal = function(y) {
    return b(y) === r;
  }, le.isProfiler = function(y) {
    return b(y) === i;
  }, le.isStrictMode = function(y) {
    return b(y) === o;
  }, le.isSuspense = function(y) {
    return b(y) === f;
  }, le.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === i || y === o || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === h || y.$$typeof === a || y.$$typeof === s || y.$$typeof === l || y.$$typeof === m || y.$$typeof === E || y.$$typeof === g || y.$$typeof === p);
  }, le.typeOf = b, le;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu;
function Zy() {
  return lu || (lu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function b(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === c || O === i || O === o || O === f || O === d || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === h || O.$$typeof === a || O.$$typeof === s || O.$$typeof === l || O.$$typeof === m || O.$$typeof === E || O.$$typeof === g || O.$$typeof === p);
    }
    function S(O) {
      if (typeof O == "object" && O !== null) {
        var ce = O.$$typeof;
        switch (ce) {
          case t:
            var F = O.type;
            switch (F) {
              case u:
              case c:
              case n:
              case i:
              case o:
              case f:
                return F;
              default:
                var q = F && F.$$typeof;
                switch (q) {
                  case s:
                  case l:
                  case v:
                  case h:
                  case a:
                    return q;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = u, w = c, _ = s, R = a, N = t, P = l, z = n, $ = v, j = h, U = r, H = i, ee = o, Z = f, Y = !1;
    function ae(O) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(O) || S(O) === u;
    }
    function ne(O) {
      return S(O) === c;
    }
    function ye(O) {
      return S(O) === s;
    }
    function k(O) {
      return S(O) === a;
    }
    function I(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return S(O) === l;
    }
    function B(O) {
      return S(O) === n;
    }
    function C(O) {
      return S(O) === v;
    }
    function X(O) {
      return S(O) === h;
    }
    function D(O) {
      return S(O) === r;
    }
    function se(O) {
      return S(O) === i;
    }
    function K(O) {
      return S(O) === o;
    }
    function G(O) {
      return S(O) === f;
    }
    fe.AsyncMode = y, fe.ConcurrentMode = w, fe.ContextConsumer = _, fe.ContextProvider = R, fe.Element = N, fe.ForwardRef = P, fe.Fragment = z, fe.Lazy = $, fe.Memo = j, fe.Portal = U, fe.Profiler = H, fe.StrictMode = ee, fe.Suspense = Z, fe.isAsyncMode = ae, fe.isConcurrentMode = ne, fe.isContextConsumer = ye, fe.isContextProvider = k, fe.isElement = I, fe.isForwardRef = M, fe.isFragment = B, fe.isLazy = C, fe.isMemo = X, fe.isPortal = D, fe.isProfiler = se, fe.isStrictMode = K, fe.isSuspense = G, fe.isValidElementType = b, fe.typeOf = S;
  }()), fe;
}
process.env.NODE_ENV === "production" ? oa.exports = Jy() : oa.exports = Zy();
var eg = oa.exports, ia = {}, hs = [], tg = function(t) {
  hs.push(t);
};
function Vf(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = hs.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function rg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = hs.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function zf() {
  ia = {};
}
function Bf(e, t, r) {
  !t && !ia[r] && (e(!1, r), ia[r] = !0);
}
function rr(e, t) {
  Bf(Vf, e, t);
}
function ng(e, t) {
  Bf(rg, e, t);
}
rr.preMessage = tg;
rr.resetWarned = zf;
rr.noteOnce = ng;
function me(e, t, r) {
  return t = Ff(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function fu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fu(Object(r), !0).forEach(function(n) {
      me(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hf(e, t, r) {
  var n = T.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function og(e, t) {
  typeof e == "function" ? e(t) : ke(e) === "object" && e && "current" in e && (e.current = t);
}
function ig(e) {
  var t, r, n = eg.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
function ag(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function sg(e) {
  return ag(e) ? e : e instanceof Ie.Component ? yp.findDOMNode(e) : null;
}
function aa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function cg(e) {
  if (Array.isArray(e))
    return aa(e);
}
function Uf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ps(e, t) {
  if (e) {
    if (typeof e == "string")
      return aa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return aa(e, t);
  }
}
function ug() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ye(e) {
  return cg(e) || Uf(e) || ps(e) || ug();
}
var qf = function(t) {
  return +setTimeout(t, 16);
}, Qf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (qf = function(t) {
  return window.requestAnimationFrame(t);
}, Qf = function(t) {
  return window.cancelAnimationFrame(t);
});
var du = 0, vs = /* @__PURE__ */ new Map();
function Wf(e) {
  vs.delete(e);
}
var sa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  du += 1;
  var n = du;
  function o(i) {
    if (i === 0)
      Wf(n), t();
    else {
      var a = qf(function() {
        o(i - 1);
      });
      vs.set(n, a);
    }
  }
  return o(r), n;
};
sa.cancel = function(e) {
  var t = vs.get(e);
  return Wf(t), Qf(t);
};
function ms(e) {
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
function lg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function uo(e, t) {
  if (e == null)
    return {};
  var r = lg(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fg(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(i);
    if (rr(!u, "Warning: There may be circular references"), u)
      return !1;
    if (i === a)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(i);
    var c = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var l = 0; l < i.length; l++)
        if (!o(i[l], a[l], c))
          return !1;
      return !0;
    }
    if (i && a && ke(i) === "object" && ke(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return o(i[d], a[d], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var hu = "%", dg = /* @__PURE__ */ function() {
  function e(t) {
    kr(this, e), me(this, "instanceId", void 0), me(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Nr(e, [{
    key: "get",
    value: function(r) {
      return this.cache.get(r.join(hu)) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = r.join(hu), i = this.cache.get(o), a = n(i);
      a === null ? this.cache.delete(o) : this.cache.set(o, a);
    }
  }]), e;
}(), ca = "data-token-hash", Wt = "data-css-hash", hg = "data-cache-path", vr = "__cssinjs_instance__";
function pg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Wt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[vr] = o[vr] || e, o[vr] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Wt, "]"))).forEach(function(o) {
      var i = o.getAttribute(Wt);
      if (n[i]) {
        if (o[vr] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new dg(e);
}
var ys = /* @__PURE__ */ T.createContext({
  hashPriority: "low",
  cache: pg(),
  defaultCache: !0
});
function mt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function vg(e, t) {
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
var pu = "data-rc-order", vu = "data-rc-priority", mg = "rc-util-key", ua = /* @__PURE__ */ new Map();
function Gf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : mg;
}
function Io(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function yg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Yf(e) {
  return Array.from((ua.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Kf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!mt())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = yg(n), s = a === "prependQueue", u = document.createElement("style");
  u.setAttribute(pu, a), s && i && u.setAttribute(vu, "".concat(i)), r != null && r.nonce && (u.nonce = r?.nonce), u.innerHTML = e;
  var c = Io(t), l = c.firstChild;
  if (n) {
    if (s) {
      var f = Yf(c).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(pu)))
          return !1;
        var h = Number(d.getAttribute(vu) || 0);
        return i >= h;
      });
      if (f.length)
        return c.insertBefore(u, f[f.length - 1].nextSibling), u;
    }
    c.insertBefore(u, l);
  } else
    c.appendChild(u);
  return u;
}
function Xf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Io(t);
  return Yf(r).find(function(n) {
    return n.getAttribute(Gf(t)) === e;
  });
}
function Jf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Xf(e, t);
  if (r) {
    var n = Io(t);
    n.removeChild(r);
  }
}
function gg(e, t) {
  var r = ua.get(e);
  if (!r || !vg(document, r)) {
    var n = Kf("", t), o = n.parentNode;
    ua.set(e, o), e.removeChild(n);
  }
}
function lo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Io(r);
  gg(n, r);
  var o = Xf(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var u = Kf(e, r);
  return u.setAttribute(Gf(r), t), u;
}
function Zf(e) {
  if (Array.isArray(e))
    return e;
}
function bg(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0)
          ;
    } catch (l) {
      c = !0, o = l;
    } finally {
      try {
        if (!u && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (c)
          throw o;
      }
    }
    return s;
  }
}
function ed() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e, t) {
  return Zf(e) || bg(e, t) || ps(e, t) || ed();
}
function Eg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var gs = /* @__PURE__ */ function() {
  function e() {
    kr(this, e), me(this, "cache", void 0), me(this, "keys", void 0), me(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Nr(e, [{
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
          var u, c;
          a = (u = a) === null || u === void 0 || (c = u.map) === null || c === void 0 ? void 0 : c.get(s);
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
          var i = this.keys.reduce(function(c, l) {
            var f = Ee(c, 2), d = f[1];
            return o.internalGet(l)[1] < d ? [l, o.internalGet(l)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = Ee(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var u = this.cache;
      r.forEach(function(c, l) {
        if (l === r.length - 1)
          u.set(c, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = u.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : u.set(c, {
            map: /* @__PURE__ */ new Map()
          }), u = u.get(c).map;
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
          return !Eg(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
me(gs, "MAX_CACHE_SIZE", 20);
me(gs, "MAX_CACHE_OFFSET", 5);
var mu = 0, td = /* @__PURE__ */ function() {
  function e(t) {
    kr(this, e), me(this, "derivatives", void 0), me(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = mu, t.length === 0 && Vf(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), mu += 1;
  }
  return Nr(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), di = new gs();
function rn(e) {
  var t = Array.isArray(e) ? e : [e];
  return di.has(t) || di.set(t, new td(t)), di.get(t);
}
function fo(e) {
  var t = "";
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof td ? t += n.id : n && ke(n) === "object" ? t += fo(n) : t += n;
  }), t;
}
function Sg(e, t) {
  return ms("".concat(t, "_").concat(fo(e)));
}
var Yr = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), rd = "_bAmBoO_";
function _g(e, t, r) {
  if (mt()) {
    var n, o;
    lo(e, Yr);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t?.(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var a = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(rd);
    return (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Jf(Yr), a;
  }
  return !1;
}
var hi = void 0;
function wg() {
  return hi === void 0 && (hi = _g("@layer ".concat(Yr, " { .").concat(Yr, ' { content: "').concat(rd, '"!important; } }'), function(e) {
    e.className = Yr;
  })), hi;
}
var yu = process.env.NODE_ENV !== "test" && mt() ? T.useLayoutEffect : T.useEffect, Og = function(t, r) {
  var n = T.useRef(!0);
  yu(function() {
    return t(n.current);
  }, r), yu(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Cg = ie({}, T), gu = Cg.useInsertionEffect, xg = function(t, r, n) {
  T.useMemo(t, n), Og(function() {
    return r(!0);
  }, n);
}, Tg = gu ? function(e, t, r) {
  return gu(function() {
    return e(), t();
  }, r);
} : xg;
function Ag() {
  return !1;
}
var la = !1;
function Rg() {
  return la;
}
const Pg = process.env.NODE_ENV === "production" ? Ag : Rg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var pi = window;
  if (typeof pi.webpackHotUpdate == "function") {
    var kg = pi.webpackHotUpdate;
    pi.webpackHotUpdate = function() {
      return la = !0, setTimeout(function() {
        la = !1;
      }, 0), kg.apply(void 0, arguments);
    };
  }
}
function nd(e, t, r, n, o) {
  var i = T.useContext(ys), a = i.cache, s = [e].concat(Ye(t)), u = s.join("_"), c = Pg(), l = function(v) {
    a.update(s, function(p) {
      var m = p || [], E = Ee(m, 2), g = E[0], b = g === void 0 ? 0 : g, S = E[1], y = S;
      process.env.NODE_ENV !== "production" && S && c && (n?.(y, c), y = null);
      var w = y || r(), _ = [b, w];
      return v ? v(_) : _;
    });
  };
  T.useMemo(
    function() {
      l();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [u]
    /* eslint-enable */
  );
  var f = a.get(s);
  process.env.NODE_ENV !== "production" && !f && (l(), f = a.get(s));
  var d = f[1];
  return Tg(function() {
    o?.(d);
  }, function(h) {
    return l(function(v) {
      var p = Ee(v, 2), m = p[0], E = p[1];
      return h && m === 0 && o?.(d), [m + 1, E];
    }), function() {
      a.update(s, function(v) {
        var p = v || [], m = Ee(p, 2), E = m[0], g = E === void 0 ? 0 : E, b = m[1], S = g - 1;
        return S === 0 ? (n?.(b, !1), null) : [g - 1, b];
      });
    };
  }, [u]), d;
}
var Ng = {}, Dg = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", zt = /* @__PURE__ */ new Map();
function Mg(e) {
  zt.set(e, (zt.get(e) || 0) + 1);
}
function Ig(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(ca, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[vr] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Fg = 0;
function Lg(e, t) {
  zt.set(e, (zt.get(e) || 0) - 1);
  var r = Array.from(zt.keys()), n = r.filter(function(o) {
    var i = zt.get(o) || 0;
    return i <= 0;
  });
  r.length - n.length > Fg && n.forEach(function(o) {
    Ig(o, t), zt.delete(o);
  });
}
var od = function(t, r, n, o) {
  var i = n.getDerivativeToken(t), a = ie(ie({}, i), r);
  return o && (a = o(a)), a;
};
function jg(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = et(ys), o = n.cache.instanceId, i = r.salt, a = i === void 0 ? "" : i, s = r.override, u = s === void 0 ? Ng : s, c = r.formatToken, l = r.getComputedToken, f = T.useMemo(function() {
    return Object.assign.apply(Object, [{}].concat(Ye(t)));
  }, [t]), d = T.useMemo(function() {
    return fo(f);
  }, [f]), h = T.useMemo(function() {
    return fo(u);
  }, [u]), v = nd("token", [a, e.id, d, h], function() {
    var p = l ? l(f, u, e) : od(f, u, e, c), m = Sg(p, a);
    p._tokenKey = m, Mg(m);
    var E = "".concat(Dg, "-").concat(ms(m));
    return p._hashId = E, [p, E];
  }, function(p) {
    Lg(p[0]._tokenKey, o);
  });
  return v;
}
var id = {
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
}, ad = "comm", sd = "rule", cd = "decl", $g = "@import", Vg = "@keyframes", zg = "@layer", Bg = Math.abs, bs = String.fromCharCode;
function ud(e) {
  return e.trim();
}
function Gn(e, t, r) {
  return e.replace(t, r);
}
function Hg(e, t) {
  return e.indexOf(t);
}
function nn(e, t) {
  return e.charCodeAt(t) | 0;
}
function on(e, t, r) {
  return e.slice(t, r);
}
function Et(e) {
  return e.length;
}
function Ug(e) {
  return e.length;
}
function On(e, t) {
  return t.push(e), e;
}
var Fo = 1, Cr = 1, ld = 0, tt = 0, Pe = 0, Dr = "";
function Es(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Fo, column: Cr, length: a, return: "", siblings: s };
}
function qg() {
  return Pe;
}
function Qg() {
  return Pe = tt > 0 ? nn(Dr, --tt) : 0, Cr--, Pe === 10 && (Cr = 1, Fo--), Pe;
}
function at() {
  return Pe = tt < ld ? nn(Dr, tt++) : 0, Cr++, Pe === 10 && (Cr = 1, Fo++), Pe;
}
function Gt() {
  return nn(Dr, tt);
}
function Yn() {
  return tt;
}
function Lo(e, t) {
  return on(Dr, e, t);
}
function fa(e) {
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
function Wg(e) {
  return Fo = Cr = 1, ld = Et(Dr = e), tt = 0, [];
}
function Gg(e) {
  return Dr = "", e;
}
function vi(e) {
  return ud(Lo(tt - 1, da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yg(e) {
  for (; (Pe = Gt()) && Pe < 33; )
    at();
  return fa(e) > 2 || fa(Pe) > 3 ? "" : " ";
}
function Kg(e, t) {
  for (; --t && at() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return Lo(e, Yn() + (t < 6 && Gt() == 32 && at() == 32));
}
function da(e) {
  for (; at(); )
    switch (Pe) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && da(Pe);
        break;
      case 40:
        e === 41 && da(e);
        break;
      case 92:
        at();
        break;
    }
  return tt;
}
function Xg(e, t) {
  for (; at() && e + Pe !== 47 + 10; )
    if (e + Pe === 42 + 42 && Gt() === 47)
      break;
  return "/*" + Lo(t, tt - 1) + "*" + bs(e === 47 ? e : at());
}
function Jg(e) {
  for (; !fa(Gt()); )
    at();
  return Lo(e, tt);
}
function Zg(e) {
  return Gg(Kn("", null, null, null, [""], e = Wg(e), 0, [0], e));
}
function Kn(e, t, r, n, o, i, a, s, u) {
  for (var c = 0, l = 0, f = a, d = 0, h = 0, v = 0, p = 1, m = 1, E = 1, g = 0, b = "", S = o, y = i, w = n, _ = b; m; )
    switch (v = g, g = at()) {
      case 40:
        if (v != 108 && nn(_, f - 1) == 58) {
          Hg(_ += Gn(vi(g), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += vi(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Yg(v);
        break;
      case 92:
        _ += Kg(Yn() - 1, 7);
        continue;
      case 47:
        switch (Gt()) {
          case 42:
          case 47:
            On(eb(Xg(at(), Yn()), t, r, u), u);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * p:
        s[c++] = Et(_) * E;
      case 125 * p:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            E == -1 && (_ = Gn(_, /\f/g, "")), h > 0 && Et(_) - f && On(h > 32 ? Eu(_ + ";", n, r, f - 1, u) : Eu(Gn(_, " ", "") + ";", n, r, f - 2, u), u);
            break;
          case 59:
            _ += ";";
          default:
            if (On(w = bu(_, t, r, c, l, o, s, b, S = [], y = [], f, i), i), g === 123)
              if (l === 0)
                Kn(_, t, w, w, S, i, f, s, y);
              else
                switch (d === 99 && nn(_, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kn(e, w, w, n && On(bu(e, w, w, 0, 0, o, s, b, o, S = [], f, y), y), o, y, f, s, n ? S : y);
                    break;
                  default:
                    Kn(_, w, w, w, [""], y, 0, s, y);
                }
        }
        c = l = h = 0, p = E = 1, b = _ = "", f = a;
        break;
      case 58:
        f = 1 + Et(_), h = v;
      default:
        if (p < 1) {
          if (g == 123)
            --p;
          else if (g == 125 && p++ == 0 && Qg() == 125)
            continue;
        }
        switch (_ += bs(g), g * p) {
          case 38:
            E = l > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[c++] = (Et(_) - 1) * E, E = 1;
            break;
          case 64:
            Gt() === 45 && (_ += vi(at())), d = Gt(), l = f = Et(b = _ += Jg(Yn())), g++;
            break;
          case 45:
            v === 45 && Et(_) == 2 && (p = 0);
        }
    }
  return i;
}
function bu(e, t, r, n, o, i, a, s, u, c, l, f) {
  for (var d = o - 1, h = o === 0 ? i : [""], v = Ug(h), p = 0, m = 0, E = 0; p < n; ++p)
    for (var g = 0, b = on(e, d + 1, d = Bg(m = a[p])), S = e; g < v; ++g)
      (S = ud(m > 0 ? h[g] + " " + b : Gn(b, /&\f/g, h[g]))) && (u[E++] = S);
  return Es(e, t, r, o === 0 ? sd : s, u, c, l, f);
}
function eb(e, t, r, n) {
  return Es(e, t, r, ad, bs(qg()), on(e, 2, -2), 0, n);
}
function Eu(e, t, r, n, o) {
  return Es(e, t, r, cd, on(e, 0, n), on(e, n + 1, -1), n, o);
}
function ha(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function tb(e, t, r, n) {
  switch (e.type) {
    case zg:
      if (e.children.length)
        break;
    case $g:
    case cd:
      return e.return = e.return || e.value;
    case ad:
      return "";
    case Vg:
      return e.return = e.value + "{" + ha(e.children, n) + "}";
    case sd:
      if (!Et(e.value = e.props.join(",")))
        return "";
  }
  return Et(r = ha(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function fd(e, t) {
  var r = t.path, n = t.parentSelectors;
  rr(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var rb = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && fd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, nb = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && fd("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Su = "data-ant-cssinjs-cache-path", dd = "_FILE_STYLE__", Yt, hd = !0;
function ob() {
  if (!Yt && (Yt = {}, mt())) {
    var e = document.createElement("div");
    e.className = Su, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = Ee(i, 2), s = a[0], u = a[1];
      Yt[s] = u;
    });
    var r = document.querySelector("style[".concat(Su, "]"));
    if (r) {
      var n;
      hd = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function ib(e) {
  return ob(), !!Yt[e];
}
function ab(e) {
  var t = Yt[e], r = null;
  if (t && mt())
    if (hd)
      r = dd;
    else {
      var n = document.querySelector("style[".concat(Wt, '="').concat(Yt[e], '"]'));
      n ? r = n.innerHTML : delete Yt[e];
    }
  return [r, t];
}
var _u = mt(), pd = "_skip_check_", vd = "_multi_value_";
function wu(e) {
  var t = ha(Zg(e), tb);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function sb(e) {
  return ke(e) === "object" && e && (pd in e || vd in e);
}
function cb(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, u = a.trim().split(/\s+/), c = u[0] || "", l = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(l).concat(o).concat(c.slice(l.length)), [c].concat(Ye(u.slice(1))).join(" ");
  });
  return i.join(",");
}
var ub = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = r.hashId, u = r.layer, c = r.path, l = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, h = r.linters, v = h === void 0 ? [] : h, p = "", m = {};
  function E(w) {
    var _ = w.getName(s);
    if (!m[_]) {
      var R = e(w.style, r, {
        root: !1,
        parentSelectors: a
      }), N = Ee(R, 1), P = N[0];
      m[_] = "@keyframes ".concat(w.getName(s)).concat(P);
    }
  }
  function g(w) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(R) {
      Array.isArray(R) ? g(R, _) : R && _.push(R);
    }), _;
  }
  var b = g(Array.isArray(t) ? t : [t]);
  if (b.forEach(function(w) {
    var _ = typeof w == "string" && !o ? {} : w;
    if (typeof _ == "string")
      p += "".concat(_, `
`);
    else if (_._keyframe)
      E(_);
    else {
      var R = d.reduce(function(N, P) {
        var z;
        return (P == null || (z = P.visit) === null || z === void 0 ? void 0 : z.call(P, N)) || N;
      }, _);
      Object.keys(R).forEach(function(N) {
        var P = R[N];
        if (ke(P) === "object" && P && (N !== "animationName" || !P._keyframe) && !sb(P)) {
          var z = !1, $ = N.trim(), j = !1;
          (o || i) && s ? $.startsWith("@") ? z = !0 : $ = cb(N, s, l) : o && !s && ($ === "&" || $ === "") && ($ = "", j = !0);
          var U = e(P, r, {
            root: j,
            injectHash: z,
            parentSelectors: [].concat(Ye(a), [$])
          }), H = Ee(U, 2), ee = H[0], Z = H[1];
          m = ie(ie({}, m), Z), p += "".concat($).concat(ee);
        } else {
          let ne = function(ye, k) {
            process.env.NODE_ENV !== "production" && (ke(P) !== "object" || !(P != null && P[pd])) && [rb, nb].concat(Ye(v)).forEach(function(B) {
              return B(ye, k, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var I = ye.replace(/[A-Z]/g, function(B) {
              return "-".concat(B.toLowerCase());
            }), M = k;
            !id[ye] && typeof M == "number" && M !== 0 && (M = "".concat(M, "px")), ye === "animationName" && k !== null && k !== void 0 && k._keyframe && (E(k), M = k.getName(s)), p += "".concat(I, ":").concat(M, ";");
          };
          var Y, ae = (Y = P?.value) !== null && Y !== void 0 ? Y : P;
          ke(P) === "object" && P !== null && P !== void 0 && P[vd] && Array.isArray(ae) ? ae.forEach(function(ye) {
            ne(N, ye);
          }) : ne(N, ae);
        }
      });
    }
  }), !o)
    p = "{".concat(p, "}");
  else if (u && wg()) {
    var S = u.split(","), y = S[S.length - 1].trim();
    p = "@layer ".concat(y, " {").concat(p, "}"), S.length > 1 && (p = "@layer ".concat(u, "{%%%:%}").concat(p));
  }
  return [p, m];
};
function lb(e, t) {
  return ms("".concat(e.join("%")).concat(t));
}
function fb() {
  return null;
}
function pa(e, t) {
  var r = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, u = e.order, c = u === void 0 ? 0 : u, l = T.useContext(ys), f = l.autoClear, d = l.mock, h = l.defaultCache, v = l.hashPriority, p = l.container, m = l.ssrInline, E = l.transformers, g = l.linters, b = l.cache, S = r._tokenKey, y = [S].concat(Ye(n)), w = _u;
  process.env.NODE_ENV !== "production" && d !== void 0 && (w = d === "client");
  var _ = nd(
    "style",
    y,
    // Create cache if needed
    function() {
      var $ = y.join("|");
      if (ib($)) {
        var j = ab($), U = Ee(j, 2), H = U[0], ee = U[1];
        if (H)
          return [H, S, ee, {}, s, c];
      }
      var Z = t(), Y = ub(Z, {
        hashId: o,
        hashPriority: v,
        layer: i,
        path: n.join("-"),
        transformers: E,
        linters: g
      }), ae = Ee(Y, 2), ne = ae[0], ye = ae[1], k = wu(ne), I = lb(y, k);
      return [k, S, I, ye, s, c];
    },
    // Remove cache if no need
    function($, j) {
      var U = Ee($, 3), H = U[2];
      (j || f) && _u && Jf(H, {
        mark: Wt
      });
    },
    // Effect: Inject style here
    function($) {
      var j = Ee($, 4), U = j[0];
      j[1];
      var H = j[2], ee = j[3];
      if (w && U !== dd) {
        var Z = {
          mark: Wt,
          prepend: "queue",
          attachTo: p,
          priority: c
        }, Y = typeof a == "function" ? a() : a;
        Y && (Z.csp = {
          nonce: Y
        });
        var ae = lo(U, H, Z);
        ae[vr] = b.instanceId, ae.setAttribute(ca, S), process.env.NODE_ENV !== "production" && ae.setAttribute(hg, y.join("|")), Object.keys(ee).forEach(function(ne) {
          lo(wu(ee[ne]), "_effect-".concat(ne), Z);
        });
      }
    }
  ), R = Ee(_, 3), N = R[0], P = R[1], z = R[2];
  return function($) {
    var j;
    if (!m || w || !h)
      j = /* @__PURE__ */ T.createElement(fb, null);
    else {
      var U;
      j = /* @__PURE__ */ T.createElement("style", Zt({}, (U = {}, me(U, ca, P), me(U, Wt, z), U), {
        dangerouslySetInnerHTML: {
          __html: N
        }
      }));
    }
    return /* @__PURE__ */ T.createElement(T.Fragment, null, j, $);
  };
}
var Ou = /* @__PURE__ */ function() {
  function e(t, r) {
    kr(this, e), me(this, "name", void 0), me(this, "style", void 0), me(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Nr(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function sr(e) {
  return e.notSplit = !0, e;
}
sr(["borderTop", "borderBottom"]), sr(["borderTop"]), sr(["borderBottom"]), sr(["borderLeft", "borderRight"]), sr(["borderLeft"]), sr(["borderRight"]);
const db = /* @__PURE__ */ cn({}), Ss = db;
function hb(e) {
  return Zf(e) || Uf(e) || ps(e) || ed();
}
function va(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function md(e, t, r, n) {
  if (!t.length)
    return r;
  var o = hb(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Ye(e) : s = ie({}, e), n && r === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = md(s[i], a, r, n), s;
}
function mi(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !va(e, t.slice(0, -1)) ? e : md(e, t, r, n);
}
function pb(e) {
  return ke(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Cu(e) {
  return Array.isArray(e) ? [] : {};
}
var vb = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function mb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Cu(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var u = new Set(s), c = va(o, a), l = Array.isArray(c);
      if (l || pb(c)) {
        if (!u.has(c)) {
          u.add(c);
          var f = va(n, a);
          l ? n = mi(n, a, []) : (!f || ke(f) !== "object") && (n = mi(n, a, Cu(c))), vb(c).forEach(function(d) {
            i([].concat(Ye(a), [d]), u);
          });
        }
      } else
        n = mi(n, a, c);
    }
    i([]);
  }), n;
}
function yb() {
}
let yd = yb;
process.env.NODE_ENV !== "production" && (yd = (e, t, r) => {
  rr(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && zf();
});
const nr = yd, gb = /* @__PURE__ */ cn(void 0), bb = {
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
var Eb = {
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
const Sb = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, gd = Sb, _b = {
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
  }, Eb),
  timePickerLocale: Object.assign({}, gd)
}, xu = _b, We = "${label} is not a valid ${type}", wb = {
  locale: "en",
  Pagination: bb,
  DatePicker: xu,
  TimePicker: gd,
  Calendar: xu,
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
        string: We,
        method: We,
        array: We,
        object: We,
        number: We,
        date: We,
        boolean: We,
        integer: We,
        float: We,
        regexp: We,
        email: We,
        url: We,
        hex: We
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
}, jo = wb;
Object.assign({}, jo.Modal);
let Xn = [];
const Tu = () => Xn.reduce((e, t) => Object.assign(Object.assign({}, e), t), jo.Modal);
function Ob(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Xn.push(t), Tu(), () => {
      Xn = Xn.filter((r) => r !== t), Tu();
    };
  }
  Object.assign({}, jo.Modal);
}
const Cb = /* @__PURE__ */ cn(void 0), bd = Cb, Ed = "internalMark", Sd = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && nr(n === Ed, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), T.useEffect(() => Ob(t && t.Modal), [t]);
  const o = T.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ T.createElement(bd.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Sd.displayName = "LocaleProvider");
const xb = Sd, Tb = "5.8.0";
function He(e, t) {
  Ab(e) && (e = "100%");
  var r = Rb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Cn(e) {
  return Math.min(1, Math.max(0, e));
}
function Ab(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Rb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function _d(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function xn(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ht(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Pb(e, t, r) {
  return {
    r: He(e, 255) * 255,
    g: He(t, 255) * 255,
    b: He(r, 255) * 255
  };
}
function Au(e, t, r) {
  e = He(e, 255), t = He(t, 255), r = He(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = 0, s = (n + o) / 2;
  if (n === o)
    a = 0, i = 0;
  else {
    var u = n - o;
    switch (a = s > 0.5 ? u / (2 - n - o) : u / (n + o), n) {
      case e:
        i = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / u + 2;
        break;
      case r:
        i = (e - t) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function yi(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function kb(e, t, r) {
  var n, o, i;
  if (e = He(e, 360), t = He(t, 100), r = He(r, 100), t === 0)
    o = r, i = r, n = r;
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = yi(s, a, e + 1 / 3), o = yi(s, a, e), i = yi(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function ma(e, t, r) {
  e = He(e, 255), t = He(t, 255), r = He(r, 255);
  var n = Math.max(e, t, r), o = Math.min(e, t, r), i = 0, a = n, s = n - o, u = n === 0 ? 0 : s / n;
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
  return { h: i, s: u, v: a };
}
function Nb(e, t, r) {
  e = He(e, 360) * 6, t = He(t, 100), r = He(r, 100);
  var n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), u = n % 6, c = [r, a, i, i, s, r][u], l = [s, r, r, a, i, i][u], f = [i, i, s, r, r, a][u];
  return { r: c * 255, g: l * 255, b: f * 255 };
}
function ya(e, t, r, n) {
  var o = [
    Ht(Math.round(e).toString(16)),
    Ht(Math.round(t).toString(16)),
    Ht(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Db(e, t, r, n, o) {
  var i = [
    Ht(Math.round(e).toString(16)),
    Ht(Math.round(t).toString(16)),
    Ht(Math.round(r).toString(16)),
    Ht(Mb(n))
  ];
  return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Mb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ru(e) {
  return Ge(e) / 255;
}
function Ge(e) {
  return parseInt(e, 16);
}
function Ib(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ga = {
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
function fr(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, a = !1, s = !1;
  return typeof e == "string" && (e = jb(e)), typeof e == "object" && (gt(e.r) && gt(e.g) && gt(e.b) ? (t = Pb(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : gt(e.h) && gt(e.s) && gt(e.v) ? (n = xn(e.s), o = xn(e.v), t = Nb(e.h, n, o), a = !0, s = "hsv") : gt(e.h) && gt(e.s) && gt(e.l) && (n = xn(e.s), i = xn(e.l), t = kb(e.h, n, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = _d(r), {
    ok: a,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Fb = "[-\\+]?\\d+%?", Lb = "[-\\+]?\\d*\\.\\d+%?", Dt = "(?:".concat(Lb, ")|(?:").concat(Fb, ")"), gi = "[\\s|\\(]+(".concat(Dt, ")[,|\\s]+(").concat(Dt, ")[,|\\s]+(").concat(Dt, ")\\s*\\)?"), bi = "[\\s|\\(]+(".concat(Dt, ")[,|\\s]+(").concat(Dt, ")[,|\\s]+(").concat(Dt, ")[,|\\s]+(").concat(Dt, ")\\s*\\)?"), nt = {
  CSS_UNIT: new RegExp(Dt),
  rgb: new RegExp("rgb" + gi),
  rgba: new RegExp("rgba" + bi),
  hsl: new RegExp("hsl" + gi),
  hsla: new RegExp("hsla" + bi),
  hsv: new RegExp("hsv" + gi),
  hsva: new RegExp("hsva" + bi),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function jb(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ga[e])
    e = ga[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = nt.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = nt.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = nt.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = nt.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = nt.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = nt.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = nt.hex8.exec(e), r ? {
    r: Ge(r[1]),
    g: Ge(r[2]),
    b: Ge(r[3]),
    a: Ru(r[4]),
    format: t ? "name" : "hex8"
  } : (r = nt.hex6.exec(e), r ? {
    r: Ge(r[1]),
    g: Ge(r[2]),
    b: Ge(r[3]),
    format: t ? "name" : "hex"
  } : (r = nt.hex4.exec(e), r ? {
    r: Ge(r[1] + r[1]),
    g: Ge(r[2] + r[2]),
    b: Ge(r[3] + r[3]),
    a: Ru(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = nt.hex3.exec(e), r ? {
    r: Ge(r[1] + r[1]),
    g: Ge(r[2] + r[2]),
    b: Ge(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function gt(e) {
  return !!nt.CSS_UNIT.exec(String(e));
}
var Ue = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Ib(t)), this.originalInput = t;
      var o = fr(t);
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
      return this.a = _d(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ma(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ma(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Au(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Au(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(o, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ya(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Db(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(He(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(He(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ya(this.r, this.g, this.b, !1), r = 0, n = Object.entries(ga); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Cn(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Cn(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Cn(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Cn(r.s), new e(r);
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
), Tn = 2, Pu = 0.16, $b = 0.05, Vb = 0.05, zb = 0.15, wd = 5, Od = 4, Bb = [{
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
function ku(e) {
  var t = e.r, r = e.g, n = e.b, o = ma(t, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function An(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(ya(t, r, n, !1));
}
function Hb(e, t, r) {
  var n = r / 100, o = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return o;
}
function Nu(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Tn * t : Math.round(e.h) + Tn * t : n = r ? Math.round(e.h) + Tn * t : Math.round(e.h) - Tn * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Du(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Pu * t : t === Od ? n = e.s + Pu : n = e.s + $b * t, n > 1 && (n = 1), r && t === wd && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Mu(e, t, r) {
  var n;
  return r ? n = e.v + Vb * t : n = e.v - zb * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function xt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = fr(e), o = wd; o > 0; o -= 1) {
    var i = ku(n), a = An(fr({
      h: Nu(i, o, !0),
      s: Du(i, o, !0),
      v: Mu(i, o, !0)
    }));
    r.push(a);
  }
  r.push(An(n));
  for (var s = 1; s <= Od; s += 1) {
    var u = ku(n), c = An(fr({
      h: Nu(u, s),
      s: Du(u, s),
      v: Mu(u, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Bb.map(function(l) {
    var f = l.index, d = l.opacity, h = An(Hb(fr(t.backgroundColor || "#141414"), fr(r[f]), d * 100));
    return h;
  }) : r;
}
var Ei = {
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
}, Jn = {}, Si = {};
Object.keys(Ei).forEach(function(e) {
  Jn[e] = xt(Ei[e]), Jn[e].primary = Jn[e][5], Si[e] = xt(Ei[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Si[e].primary = Si[e][5];
});
var Ub = Jn.blue;
const qb = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, Cd = qb;
function Qb(e) {
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
const _s = {
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
}, dn = Object.assign(Object.assign({}, _s), {
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
});
function xd(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: u,
    colorBgBase: c,
    colorTextBase: l
  } = e, f = r(u), d = r(o), h = r(i), v = r(a), p = r(s), m = n(c, l), E = e.colorLink || e.colorInfo, g = r(E);
  return Object.assign(Object.assign({}, m), {
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
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
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
    colorLinkHover: g[4],
    colorLink: g[6],
    colorLinkActive: g[7],
    colorBgMask: new Ue("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Wb = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, Gb = Wb;
function Yb(e) {
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
  }, Gb(n));
}
const bt = (e, t) => new Ue(e).setAlpha(t).toRgbString(), qr = (e, t) => new Ue(e).darken(t).toHexString(), Kb = (e) => {
  const t = xt(e);
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
}, Xb = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: bt(n, 0.88),
    colorTextSecondary: bt(n, 0.65),
    colorTextTertiary: bt(n, 0.45),
    colorTextQuaternary: bt(n, 0.25),
    colorFill: bt(n, 0.15),
    colorFillSecondary: bt(n, 0.06),
    colorFillTertiary: bt(n, 0.04),
    colorFillQuaternary: bt(n, 0.02),
    colorBgLayout: qr(r, 4),
    colorBgContainer: qr(r, 0),
    colorBgElevated: qr(r, 0),
    colorBgSpotlight: bt(n, 0.85),
    colorBorder: qr(r, 15),
    colorBorderSecondary: qr(r, 6)
  };
};
function Jb(e) {
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
const Zb = (e) => {
  const t = Jb(e), r = t.map((o) => o.size), n = t.map((o) => o.lineHeight);
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
}, Td = Zb;
function hn(e) {
  const t = Object.keys(_s).map((r) => {
    const n = xt(e[r]);
    return new Array(10).fill(1).reduce((o, i, a) => (o[`${r}-${a + 1}`] = n[a], o[`${r}${a + 1}`] = n[a], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), xd(e, {
    generateColorPalettes: Kb,
    generateNeutralColorPalettes: Xb
  })), Td(e.fontSize)), Qb(e)), Cd(e)), Yb(e));
}
const Ad = rn(hn), ho = {
  token: dn,
  hashed: !0
}, Rd = /* @__PURE__ */ Ie.createContext(ho);
function _i(e) {
  return e >= 0 && e <= 255;
}
function Rn(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new Ue(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: u
  } = new Ue(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const l = Math.round((r - a * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), d = Math.round((o - u * (1 - c)) / c);
    if (_i(l) && _i(f) && _i(d))
      return new Ue({
        r: l,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Ue({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var e1 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Pd(e) {
  const {
    override: t
  } = e, r = e1(e, ["override"]), n = Object.assign({}, t);
  Object.keys(dn).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, a = 576, s = 768, u = 992, c = 1200, l = 1600;
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
    colorSplit: Rn(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Rn(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Rn(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Rn(o.colorPrimaryBg, o.colorBgContainer),
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
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: l - 1,
    screenXXL: l,
    screenXXLMin: l,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ue("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ue("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ue("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Iu = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const kd = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, i = Iu(t, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = Pd(a), i && Object.entries(i).forEach((s) => {
    let [u, c] = s;
    const {
      theme: l
    } = c, f = Iu(c, ["theme"]);
    let d = f;
    l && (d = kd(Object.assign(Object.assign({}, a), f), {
      override: f
    }, l)), a[u] = d;
  }), a;
};
function $o() {
  const {
    token: e,
    hashed: t,
    theme: r,
    components: n
  } = Ie.useContext(Rd), o = `${Tb}-${t || ""}`, i = r || Ad, [a, s] = jg(i, [dn, e], {
    salt: o,
    override: Object.assign({
      override: e
    }, n),
    getComputedToken: kd
  });
  return [i, a, t ? s : ""];
}
function Zn(e) {
  var t = T.useRef(!1), r = T.useState(e), n = Ee(r, 2), o = n[0], i = n[1];
  T.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, u) {
    u && t.current || i(s);
  }
  return [o, a];
}
const ws = "anticon", t1 = (e, t) => t || (e ? `ant-${e}` : "ant"), Mr = /* @__PURE__ */ T.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: t1,
  iconPrefixCls: ws
}), r1 = (e) => ({
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
}), n1 = () => ({
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
}), o1 = (e) => ({
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
}), i1 = (e, t) => {
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
}, Nd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let ba = !0;
function Ea() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Nd)
    return Object.assign.apply(Object, [{}].concat(t));
  ba = !1;
  const n = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((a) => {
      Object.defineProperty(n, a, {
        configurable: !0,
        enumerable: !0,
        get: () => o[a]
      });
    });
  }), ba = !0, n;
}
function a1() {
}
function s1(e) {
  let t, r = e, n = a1;
  return Nd && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(o, i) {
      return ba && t.add(i), o[i];
    }
  }), n = (o, i) => {
    Array.from(t);
  }), {
    token: r,
    keys: t,
    flush: n
  };
}
function c1(e, t, r, n) {
  return (o) => {
    const [i, a, s] = $o(), {
      getPrefixCls: u,
      iconPrefixCls: c,
      csp: l
    } = et(Mr), f = u(), d = {
      theme: i,
      token: a,
      hashId: s,
      nonce: () => l?.nonce,
      clientOnly: n?.clientOnly,
      // antd is always at top of styles
      order: -999
    };
    return pa(Object.assign(Object.assign({}, d), {
      clientOnly: !1,
      path: ["Shared", f]
    }), () => [{
      // Link
      "&": o1(a)
    }]), [pa(Object.assign(Object.assign({}, d), {
      path: [e, o, c]
    }), () => {
      const {
        token: h,
        flush: v
      } = s1(a), p = Object.assign({}, a[e]);
      if (n?.deprecatedTokens) {
        const {
          deprecatedTokens: y
        } = n;
        y.forEach((w) => {
          let [_, R] = w;
          var N;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && rr(!p?.[_], `The token '${String(_)}' of ${e} had deprecated, use '${String(R)}' instead.`), (p?.[_] || p?.[R]) && ((N = p[R]) !== null && N !== void 0 || (p[R] = p?.[_]));
        });
      }
      const m = typeof r == "function" ? r(Ea(h, p ?? {})) : r, E = Object.assign(Object.assign({}, m), p), g = `.${o}`, b = Ea(h, {
        componentCls: g,
        prefixCls: o,
        iconCls: `.${c}`,
        antCls: `.${f}`
      }, E), S = t(b, {
        hashId: s,
        prefixCls: o,
        rootPrefixCls: f,
        iconPrefixCls: c,
        overrideComponentToken: p
      });
      return v(e, E), [n?.resetStyle === !1 ? null : i1(a, o), S];
    }), s];
  };
}
const u1 = `-ant-${Date.now()}-${Math.random()}`;
function l1(e, t) {
  const r = {}, n = (a, s) => {
    let u = a.clone();
    return u = s?.(u) || u, u.toRgbString();
  }, o = (a, s) => {
    const u = new Ue(a), c = xt(u.toRgbString());
    r[`${s}-color`] = n(u), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = u.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Ue(t.primaryColor), s = xt(a.toRgbString());
    s.forEach((c, l) => {
      r[`primary-${l + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(a, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(a, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(a, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(a, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(a, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const u = new Ue(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(u, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(u, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((a) => `--${e}-${a}: ${r[a]};`).join(`
`)}
  }
  `.trim();
}
function f1(e, t) {
  const r = l1(e, t);
  mt() ? lo(r, `${u1}-dynamic-theme`) : process.env.NODE_ENV !== "production" && nr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Sa = /* @__PURE__ */ T.createContext(!1), d1 = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = T.useContext(Sa);
  return /* @__PURE__ */ T.createElement(Sa.Provider, {
    value: r ?? n
  }, t);
}, h1 = Sa, _a = /* @__PURE__ */ T.createContext(void 0), p1 = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = T.useContext(_a);
  return /* @__PURE__ */ T.createElement(_a.Provider, {
    value: r || n
  }, t);
}, Os = _a;
function v1() {
  const e = et(h1), t = et(Os);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
function m1(e, t) {
  const r = e || {}, n = r.inherit === !1 || !t ? ho : t;
  return Hf(() => {
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
    const u = i[s];
    return !fg(a, u, !0);
  }));
}
var y1 = ["children"], Dd = /* @__PURE__ */ T.createContext({});
function g1(e) {
  var t = e.children, r = uo(e, y1);
  return /* @__PURE__ */ T.createElement(Dd.Provider, {
    value: r
  }, t);
}
var b1 = /* @__PURE__ */ function(e) {
  Lf(r, e);
  var t = jf(r);
  function r() {
    return kr(this, r), t.apply(this, arguments);
  }
  return Nr(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(T.Component), $t = "none", Pn = "appear", kn = "enter", Nn = "leave", Fu = "none", ot = "prepare", mr = "start", yr = "active", Cs = "end", Md = "prepared";
function Lu(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function E1(e, t) {
  var r = {
    animationend: Lu("Animation", "AnimationEnd"),
    transitionend: Lu("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var S1 = E1(mt(), typeof window < "u" ? window : {}), Id = {};
if (mt()) {
  var _1 = document.createElement("div");
  Id = _1.style;
}
var Dn = {};
function Fd(e) {
  if (Dn[e])
    return Dn[e];
  var t = S1[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Id)
        return Dn[e] = t[i], Dn[e];
    }
  return "";
}
var Ld = Fd("animationend"), jd = Fd("transitionend"), $d = !!(Ld && jd), ju = Ld || "animationend", $u = jd || "transitionend";
function Vu(e, t) {
  if (!e)
    return null;
  if (ke(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const w1 = function(e) {
  var t = Je(), r = Je(e);
  r.current = e;
  var n = T.useCallback(function(a) {
    r.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener($u, n), a.removeEventListener(ju, n));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current), a && a !== t.current && (a.addEventListener($u, n), a.addEventListener(ju, n), t.current = a);
  }
  return T.useEffect(function() {
    return function() {
      o(t.current);
    };
  }, []), [i, o];
};
var Vd = mt() ? Sl : St;
const O1 = function() {
  var e = T.useRef(null);
  function t() {
    sa.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = sa(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return T.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var C1 = [ot, mr, yr, Cs], x1 = [ot, Md], zd = !1, T1 = !0;
function Bd(e) {
  return e === yr || e === Cs;
}
const A1 = function(e, t, r) {
  var n = Zn(Fu), o = Ee(n, 2), i = o[0], a = o[1], s = O1(), u = Ee(s, 2), c = u[0], l = u[1];
  function f() {
    a(ot, !0);
  }
  var d = t ? x1 : C1;
  return Vd(function() {
    if (i !== Fu && i !== Cs) {
      var h = d.indexOf(i), v = d[h + 1], p = r(i);
      p === zd ? a(v, !0) : v && c(function(m) {
        function E() {
          m.isCanceled() || a(v, !0);
        }
        p === !0 ? E() : Promise.resolve(p).then(E);
      });
    }
  }, [e, i]), T.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, i];
};
function R1(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, u = n.motionLeave, c = u === void 0 ? !0 : u, l = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, v = n.onLeavePrepare, p = n.onAppearStart, m = n.onEnterStart, E = n.onLeaveStart, g = n.onAppearActive, b = n.onEnterActive, S = n.onLeaveActive, y = n.onAppearEnd, w = n.onEnterEnd, _ = n.onLeaveEnd, R = n.onVisibleChanged, N = Zn(), P = Ee(N, 2), z = P[0], $ = P[1], j = Zn($t), U = Ee(j, 2), H = U[0], ee = U[1], Z = Zn(null), Y = Ee(Z, 2), ae = Y[0], ne = Y[1], ye = Je(!1), k = Je(null);
  function I() {
    return r();
  }
  var M = Je(!1);
  function B() {
    ee($t, !0), ne(null, !0);
  }
  function C(Te) {
    var te = I();
    if (!(Te && !Te.deadline && Te.target !== te)) {
      var Ce = M.current, Le;
      H === Pn && Ce ? Le = y?.(te, Te) : H === kn && Ce ? Le = w?.(te, Te) : H === Nn && Ce && (Le = _?.(te, Te)), H !== $t && Ce && Le !== !1 && B();
    }
  }
  var X = w1(C), D = Ee(X, 1), se = D[0], K = function(te) {
    var Ce, Le, Ne;
    switch (te) {
      case Pn:
        return Ce = {}, me(Ce, ot, d), me(Ce, mr, p), me(Ce, yr, g), Ce;
      case kn:
        return Le = {}, me(Le, ot, h), me(Le, mr, m), me(Le, yr, b), Le;
      case Nn:
        return Ne = {}, me(Ne, ot, v), me(Ne, mr, E), me(Ne, yr, S), Ne;
      default:
        return {};
    }
  }, G = T.useMemo(function() {
    return K(H);
  }, [H]), O = A1(H, !e, function(Te) {
    if (Te === ot) {
      var te = G[ot];
      return te ? te(I()) : zd;
    }
    if (q in G) {
      var Ce;
      ne(((Ce = G[q]) === null || Ce === void 0 ? void 0 : Ce.call(G, I(), null)) || null);
    }
    return q === yr && (se(I()), l > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      C({
        deadline: !0
      });
    }, l))), q === Md && B(), T1;
  }), ce = Ee(O, 2), F = ce[0], q = ce[1], _e = Bd(q);
  M.current = _e, Vd(function() {
    $(t);
    var Te = ye.current;
    ye.current = !0;
    var te;
    !Te && t && s && (te = Pn), Te && t && i && (te = kn), (Te && !t && c || !Te && f && !t && c) && (te = Nn);
    var Ce = K(te);
    te && (e || Ce[ot]) ? (ee(te), F()) : ee($t);
  }, [t]), St(function() {
    // Cancel appear
    (H === Pn && !s || // Cancel enter
    H === kn && !i || // Cancel leave
    H === Nn && !c) && ee($t);
  }, [s, i, c]), St(function() {
    return function() {
      ye.current = !1, clearTimeout(k.current);
    };
  }, []);
  var J = T.useRef(!1);
  St(function() {
    z && (J.current = !0), z !== void 0 && H === $t && ((J.current || z) && R?.(z), J.current = !0);
  }, [z, H]);
  var Oe = ae;
  return G[ot] && q === mr && (Oe = ie({
    transition: "none"
  }, Oe)), [H, q, Oe, z ?? t];
}
function P1(e) {
  var t = e;
  ke(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ T.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, u = o.removeOnLeave, c = u === void 0 ? !0 : u, l = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, v = o.eventProps, p = T.useContext(Dd), m = p.motion, E = r(o, m), g = Je(), b = Je();
    function S() {
      try {
        return g.current instanceof HTMLElement ? g.current : sg(b.current);
      } catch {
        return null;
      }
    }
    var y = R1(E, s, S, o), w = Ee(y, 4), _ = w[0], R = w[1], N = w[2], P = w[3], z = T.useRef(P);
    P && (z.current = !0);
    var $ = T.useCallback(function(ne) {
      g.current = ne, og(i, ne);
    }, [i]), j, U = ie(ie({}, v), {}, {
      visible: s
    });
    if (!f)
      j = null;
    else if (_ === $t)
      P ? j = f(ie({}, U), $) : !c && z.current && h ? j = f(ie(ie({}, U), {}, {
        className: h
      }), $) : l || !c && !h ? j = f(ie(ie({}, U), {}, {
        style: {
          display: "none"
        }
      }), $) : j = null;
    else {
      var H, ee;
      R === ot ? ee = "prepare" : Bd(R) ? ee = "active" : R === mr && (ee = "start");
      var Z = Vu(d, "".concat(_, "-").concat(ee));
      j = f(ie(ie({}, U), {}, {
        className: Ct(Vu(d, _), (H = {}, me(H, Z, Z && ee), me(H, d, typeof d == "string"), H)),
        style: N
      }), $);
    }
    if (/* @__PURE__ */ T.isValidElement(j) && ig(j)) {
      var Y = j, ae = Y.ref;
      ae || (j = /* @__PURE__ */ T.cloneElement(j, {
        ref: $
      }));
    }
    return /* @__PURE__ */ T.createElement(b1, {
      ref: b
    }, j);
  });
  return n.displayName = "CSSMotion", n;
}
const k1 = P1($d);
var wa = "add", Oa = "keep", Ca = "remove", wi = "removed";
function N1(e) {
  var t;
  return e && ke(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, ie(ie({}, t), {}, {
    key: String(t.key)
  });
}
function xa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(N1);
}
function D1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = xa(e), a = xa(t);
  i.forEach(function(c) {
    for (var l = !1, f = n; f < o; f += 1) {
      var d = a[f];
      if (d.key === c.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(h) {
          return ie(ie({}, h), {}, {
            status: wa
          });
        })), n = f), r.push(ie(ie({}, d), {}, {
          status: Oa
        })), n += 1, l = !0;
        break;
      }
    }
    l || r.push(ie(ie({}, c), {}, {
      status: Ca
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return ie(ie({}, c), {}, {
      status: wa
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var l = c.key;
    s[l] = (s[l] || 0) + 1;
  });
  var u = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return u.forEach(function(c) {
    r = r.filter(function(l) {
      var f = l.key, d = l.status;
      return f !== c || d !== Ca;
    }), r.forEach(function(l) {
      l.key === c && (l.status = Oa);
    });
  }), r;
}
var M1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], I1 = ["status"], F1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function L1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k1, r = /* @__PURE__ */ function(n) {
    Lf(i, n);
    var o = jf(i);
    function i() {
      var a;
      kr(this, i);
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(u)), me(na(a), "state", {
        keyEntities: []
      }), me(na(a), "removeKey", function(l) {
        var f = a.state.keyEntities, d = f.map(function(h) {
          return h.key !== l ? h : ie(ie({}, h), {}, {
            status: wi
          });
        });
        return a.setState({
          keyEntities: d
        }), d.filter(function(h) {
          var v = h.status;
          return v !== wi;
        }).length;
      }), a;
    }
    return Nr(i, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, c = this.props, l = c.component, f = c.children, d = c.onVisibleChanged, h = c.onAllRemoved, v = uo(c, M1), p = l || T.Fragment, m = {};
        return F1.forEach(function(E) {
          m[E] = v[E], delete v[E];
        }), delete v.keys, /* @__PURE__ */ T.createElement(p, v, u.map(function(E) {
          var g = E.status, b = uo(E, I1), S = g === wa || g === Oa;
          return /* @__PURE__ */ T.createElement(t, Zt({}, m, {
            key: b.key,
            visible: S,
            eventProps: b,
            onVisibleChanged: function(w) {
              if (d?.(w, {
                key: b.key
              }), !w) {
                var _ = s.removeKey(b.key);
                _ === 0 && h && h();
              }
            }
          }), f);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var c = s.keys, l = u.keyEntities, f = xa(c), d = D1(l, f);
        return {
          keyEntities: d.filter(function(h) {
            var v = l.find(function(p) {
              var m = p.key;
              return h.key === m;
            });
            return !(v && v.status === wi && h.status === Ca);
          })
        };
      }
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]), i;
  }(T.Component);
  return me(r, "defaultProps", {
    component: "div"
  }), r;
}
const j1 = L1($d);
function $1(e) {
  const {
    children: t
  } = e, [, r] = $o(), {
    motion: n
  } = r, o = T.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ T.createElement(g1, {
    motion: n
  }, t) : t;
}
const V1 = (e, t) => {
  const [r, n] = $o();
  return pa({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, n1()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, z1 = V1;
var B1 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Ta = !1;
const H1 = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && nr(!Ta, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), U1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], q1 = "ant";
let po, Hd, Ud;
function eo() {
  return po || q1;
}
function Q1() {
  return Hd || ws;
}
function W1(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const G1 = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n
  } = e;
  t !== void 0 && (po = t), r !== void 0 && (Hd = r), n && (W1(n) ? (process.env.NODE_ENV !== "production" && nr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), f1(eo(), n)) : Ud = n);
}, qd = () => ({
  getPrefixCls: (e, t) => t || (e ? `${eo()}-${e}` : eo()),
  getIconPrefixCls: Q1,
  getRootPrefixCls: () => po || eo(),
  getTheme: () => Ud
}), Y1 = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: u,
    direction: c,
    space: l,
    virtual: f,
    dropdownMatchSelectWidth: d,
    popupMatchSelectWidth: h,
    popupOverflow: v,
    legacyLocale: p,
    parentContext: m,
    iconPrefixCls: E,
    theme: g,
    componentDisabled: b,
    segmented: S,
    statistic: y,
    spin: w,
    calendar: _,
    carousel: R,
    cascader: N,
    collapse: P,
    typography: z,
    checkbox: $,
    descriptions: j,
    divider: U,
    drawer: H,
    skeleton: ee,
    steps: Z,
    image: Y,
    layout: ae,
    list: ne,
    mentions: ye,
    modal: k,
    progress: I,
    result: M,
    slider: B,
    breadcrumb: C,
    menu: X,
    pagination: D,
    input: se,
    empty: K,
    badge: G,
    radio: O,
    rate: ce,
    switch: F,
    transfer: q,
    avatar: _e,
    message: J,
    tag: Oe,
    table: Te,
    card: te,
    tabs: Ce,
    timeline: Le,
    timePicker: Ne,
    upload: W,
    notification: xe,
    tree: Lr,
    colorPicker: jr,
    datePicker: lt,
    wave: ap
  } = e;
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && nr(d === void 0, "ConfigProvider", "`dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.");
  const sp = T.useCallback((De, ze) => {
    const {
      prefixCls: ft
    } = e;
    if (ze)
      return ze;
    const dt = ft || m.getPrefixCls("");
    return De ? `${dt}-${De}` : dt;
  }, [m.getPrefixCls, e.prefixCls]), ir = E || m.iconPrefixCls || ws, cp = ir !== m.iconPrefixCls, $r = r || m.csp, up = z1(ir, $r), yn = m1(g, m.theme);
  process.env.NODE_ENV !== "production" && (Ta = Ta || !!yn);
  const Qo = {
    csp: $r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || p,
    direction: c,
    space: l,
    virtual: f,
    popupMatchSelectWidth: h ?? d,
    popupOverflow: v,
    getPrefixCls: sp,
    iconPrefixCls: ir,
    theme: yn,
    segmented: S,
    statistic: y,
    spin: w,
    calendar: _,
    carousel: R,
    cascader: N,
    collapse: P,
    typography: z,
    checkbox: $,
    descriptions: j,
    divider: U,
    drawer: H,
    skeleton: ee,
    steps: Z,
    image: Y,
    input: se,
    layout: ae,
    list: ne,
    mentions: ye,
    modal: k,
    progress: I,
    result: M,
    slider: B,
    breadcrumb: C,
    menu: X,
    pagination: D,
    empty: K,
    badge: G,
    radio: O,
    rate: ce,
    switch: F,
    transfer: q,
    avatar: _e,
    message: J,
    tag: Oe,
    table: Te,
    card: te,
    tabs: Ce,
    timeline: Le,
    timePicker: Ne,
    upload: W,
    notification: xe,
    tree: Lr,
    colorPicker: jr,
    datePicker: lt,
    wave: ap
  }, gn = Object.assign({}, m);
  Object.keys(Qo).forEach((De) => {
    Qo[De] !== void 0 && (gn[De] = Qo[De]);
  }), U1.forEach((De) => {
    const ze = e[De];
    ze && (gn[De] = ze);
  });
  const bn = Hf(() => gn, gn, (De, ze) => {
    const ft = Object.keys(De), dt = Object.keys(ze);
    return ft.length !== dt.length || ft.some((En) => De[En] !== ze[En]);
  }), lp = T.useMemo(() => ({
    prefixCls: ir,
    csp: $r
  }), [ir, $r]);
  let qe = cp ? up(t) : t;
  const Hs = T.useMemo(() => {
    var De, ze, ft, dt;
    return mb(((De = jo.Form) === null || De === void 0 ? void 0 : De.defaultValidateMessages) || {}, ((ft = (ze = bn.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || ft === void 0 ? void 0 : ft.defaultValidateMessages) || {}, ((dt = bn.form) === null || dt === void 0 ? void 0 : dt.validateMessages) || {}, a?.validateMessages || {});
  }, [bn, a?.validateMessages]);
  Object.keys(Hs).length > 0 && (qe = /* @__PURE__ */ T.createElement(gb.Provider, {
    value: Hs
  }, t)), s && (qe = /* @__PURE__ */ T.createElement(xb, {
    locale: s,
    _ANT_MARK__: Ed
  }, qe)), (ir || $r) && (qe = /* @__PURE__ */ T.createElement(Ss.Provider, {
    value: lp
  }, qe)), u && (qe = /* @__PURE__ */ T.createElement(p1, {
    size: u
  }, qe)), qe = /* @__PURE__ */ T.createElement($1, null, qe);
  const fp = T.useMemo(() => {
    const De = yn || {}, {
      algorithm: ze,
      token: ft,
      components: dt
    } = De, En = B1(De, ["algorithm", "token", "components"]), Us = ze && (!Array.isArray(ze) || ze.length > 0) ? rn(ze) : Ad, qs = {};
    return Object.entries(dt || {}).forEach((dp) => {
      let [hp, pp] = dp;
      const yt = Object.assign({}, pp);
      "algorithm" in yt && (yt.algorithm === !0 ? yt.theme = Us : (Array.isArray(yt.algorithm) || typeof yt.algorithm == "function") && (yt.theme = rn(yt.algorithm)), delete yt.algorithm), qs[hp] = yt;
    }), Object.assign(Object.assign({}, En), {
      theme: Us,
      token: Object.assign(Object.assign({}, dn), ft),
      components: qs
    });
  }, [yn]);
  return g && (qe = /* @__PURE__ */ T.createElement(Rd.Provider, {
    value: fp
  }, qe)), b !== void 0 && (qe = /* @__PURE__ */ T.createElement(d1, {
    disabled: b
  }, qe)), /* @__PURE__ */ T.createElement(Mr.Provider, {
    value: bn
  }, qe);
}, or = (e) => {
  const t = T.useContext(Mr), r = T.useContext(bd);
  return /* @__PURE__ */ T.createElement(Y1, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
or.ConfigContext = Mr;
or.SizeContext = Os;
or.config = G1;
or.useConfig = v1;
Object.defineProperty(or, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && nr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Os)
});
process.env.NODE_ENV !== "production" && (or.displayName = "ConfigProvider");
const Qd = or;
var Wd = {};
Object.defineProperty(Wd, "__esModule", { value: !0 });
var K1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, X1 = Wd.default = K1, J1 = 1 / 0, Z1 = "[object Symbol]", eE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, tE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Vo = "\\ud800-\\udfff", Gd = "\\u0300-\\u036f\\ufe20-\\ufe23", Yd = "\\u20d0-\\u20f0", Kd = "\\u2700-\\u27bf", Xd = "a-z\\xdf-\\xf6\\xf8-\\xff", rE = "\\xac\\xb1\\xd7\\xf7", nE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", oE = "\\u2000-\\u206f", iE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Jd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Zd = "\\ufe0e\\ufe0f", eh = rE + nE + oE + iE, xs = "['’]", aE = "[" + Vo + "]", zu = "[" + eh + "]", vo = "[" + Gd + Yd + "]", th = "\\d+", sE = "[" + Kd + "]", rh = "[" + Xd + "]", nh = "[^" + Vo + eh + th + Kd + Xd + Jd + "]", Aa = "\\ud83c[\\udffb-\\udfff]", cE = "(?:" + vo + "|" + Aa + ")", oh = "[^" + Vo + "]", Ts = "(?:\\ud83c[\\udde6-\\uddff]){2}", As = "[\\ud800-\\udbff][\\udc00-\\udfff]", dr = "[" + Jd + "]", ih = "\\u200d", Bu = "(?:" + rh + "|" + nh + ")", uE = "(?:" + dr + "|" + nh + ")", Hu = "(?:" + xs + "(?:d|ll|m|re|s|t|ve))?", Uu = "(?:" + xs + "(?:D|LL|M|RE|S|T|VE))?", ah = cE + "?", sh = "[" + Zd + "]?", lE = "(?:" + ih + "(?:" + [oh, Ts, As].join("|") + ")" + sh + ah + ")*", ch = sh + ah + lE, fE = "(?:" + [sE, Ts, As].join("|") + ")" + ch, dE = "(?:" + [oh + vo + "?", vo, Ts, As, aE].join("|") + ")", hE = RegExp(xs, "g"), pE = RegExp(vo, "g"), vE = RegExp(Aa + "(?=" + Aa + ")|" + dE + ch, "g"), mE = RegExp([
  dr + "?" + rh + "+" + Hu + "(?=" + [zu, dr, "$"].join("|") + ")",
  uE + "+" + Uu + "(?=" + [zu, dr + Bu, "$"].join("|") + ")",
  dr + "?" + Bu + "+" + Hu,
  dr + "+" + Uu,
  th,
  fE
].join("|"), "g"), yE = RegExp("[" + ih + Vo + Gd + Yd + Zd + "]"), gE = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, bE = {
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
}, EE = typeof _n == "object" && _n && _n.Object === Object && _n, SE = typeof self == "object" && self && self.Object === Object && self, _E = EE || SE || Function("return this")();
function wE(e, t, r, n) {
  var o = -1, i = e ? e.length : 0;
  for (n && i && (r = e[++o]); ++o < i; )
    r = t(r, e[o], o, e);
  return r;
}
function OE(e) {
  return e.split("");
}
function CE(e) {
  return e.match(eE) || [];
}
function xE(e) {
  return function(t) {
    return e?.[t];
  };
}
var TE = xE(bE);
function uh(e) {
  return yE.test(e);
}
function AE(e) {
  return gE.test(e);
}
function RE(e) {
  return uh(e) ? PE(e) : OE(e);
}
function PE(e) {
  return e.match(vE) || [];
}
function kE(e) {
  return e.match(mE) || [];
}
var NE = Object.prototype, DE = NE.toString, qu = _E.Symbol, Qu = qu ? qu.prototype : void 0, Wu = Qu ? Qu.toString : void 0;
function ME(e, t, r) {
  var n = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), r = r > o ? o : r, r < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + t];
  return i;
}
function IE(e) {
  if (typeof e == "string")
    return e;
  if (VE(e))
    return Wu ? Wu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -J1 ? "-0" : t;
}
function FE(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : ME(e, t, r);
}
function LE(e) {
  return function(t) {
    t = zo(t);
    var r = uh(t) ? RE(t) : void 0, n = r ? r[0] : t.charAt(0), o = r ? FE(r, 1).join("") : t.slice(1);
    return n[e]() + o;
  };
}
function jE(e) {
  return function(t) {
    return wE(qE(HE(t).replace(hE, "")), e, "");
  };
}
function $E(e) {
  return !!e && typeof e == "object";
}
function VE(e) {
  return typeof e == "symbol" || $E(e) && DE.call(e) == Z1;
}
function zo(e) {
  return e == null ? "" : IE(e);
}
var zE = jE(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? BE(t) : t);
});
function BE(e) {
  return UE(zo(e).toLowerCase());
}
function HE(e) {
  return e = zo(e), e && e.replace(tE, TE).replace(pE, "");
}
var UE = LE("toUpperCase");
function qE(e, t, r) {
  return e = zo(e), t = r ? void 0 : t, t === void 0 ? AE(e) ? kE(e) : CE(e) : e.match(t) || [];
}
var QE = zE;
const WE = /* @__PURE__ */ Za(QE);
var pn = {}, lh = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(lh);
var GE = lh.exports, Rs = {};
Object.defineProperty(Rs, "__esModule", {
  value: !0
});
Rs.default = YE;
function YE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Ps = {};
Object.defineProperty(Ps, "__esModule", {
  value: !0
});
Ps.default = KE;
function KE(e, t) {
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
var fh = GE.default;
Object.defineProperty(pn, "__esModule", {
  value: !0
});
pn.clearContainerCache = oS;
pn.injectCSS = ks;
pn.removeCSS = rS;
var XE = pn.updateCSS = iS, JE = fh(Rs), ZE = fh(Ps), Gu = "data-rc-order", Yu = "data-rc-priority", eS = "rc-util-key", mo = /* @__PURE__ */ new Map();
function dh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : eS;
}
function Bo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function tS(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function hh(e) {
  return Array.from((mo.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ks(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!(0, JE.default)())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = tS(n), s = a === "prependQueue", u = document.createElement("style");
  u.setAttribute(Gu, a), s && i && u.setAttribute(Yu, "".concat(i)), r != null && r.nonce && (u.nonce = r?.nonce), u.innerHTML = e;
  var c = Bo(t), l = c.firstChild;
  if (n) {
    if (s) {
      var f = hh(c).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Gu)))
          return !1;
        var h = Number(d.getAttribute(Yu) || 0);
        return i >= h;
      });
      if (f.length)
        return c.insertBefore(u, f[f.length - 1].nextSibling), u;
    }
    c.insertBefore(u, l);
  } else
    c.appendChild(u);
  return u;
}
function ph(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Bo(t);
  return hh(r).find(function(n) {
    return n.getAttribute(dh(t)) === e;
  });
}
function rS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ph(e, t);
  if (r) {
    var n = Bo(t);
    n.removeChild(r);
  }
}
function nS(e, t) {
  var r = mo.get(e);
  if (!r || !(0, ZE.default)(document, r)) {
    var n = ks("", t), o = n.parentNode;
    mo.set(e, o), e.removeChild(n);
  }
}
function oS() {
  mo.clear();
}
function iS(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Bo(r);
  nS(n, r);
  var o = ph(t, r);
  if (o) {
    var i, a;
    if ((i = r.csp) !== null && i !== void 0 && i.nonce && o.nonce !== ((a = r.csp) === null || a === void 0 ? void 0 : a.nonce)) {
      var s;
      o.nonce = (s = r.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var u = ks(e, r);
  return u.setAttribute(dh(r), t), u;
}
var Ns = {};
Object.defineProperty(Ns, "__esModule", {
  value: !0
});
var aS = Ns.getShadowRoot = sS;
Ns.inShadow = mh;
function vh(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function mh(e) {
  return vh(e) !== e?.ownerDocument;
}
function sS(e) {
  return mh(e) ? vh(e) : null;
}
var ut = {};
Object.defineProperty(ut, "__esModule", {
  value: !0
});
ut.call = Ms;
var yh = ut.default = void 0;
ut.note = Eh;
ut.noteOnce = _h;
ut.preMessage = void 0;
ut.resetWarned = Sh;
ut.warning = bh;
ut.warningOnce = vn;
var Ra = {}, Ds = [], gh = function(t) {
  Ds.push(t);
};
ut.preMessage = gh;
function bh(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ds.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Eh(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ds.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Sh() {
  Ra = {};
}
function Ms(e, t, r) {
  !t && !Ra[r] && (e(!1, r), Ra[r] = !0);
}
function vn(e, t) {
  Ms(bh, e, t);
}
function _h(e, t) {
  Ms(Eh, e, t);
}
vn.preMessage = gh;
vn.resetWarned = Sh;
vn.noteOnce = _h;
var cS = vn;
yh = ut.default = cS;
function uS(e, t) {
  yh(e, `[@ant-design/icons] ${t}`);
}
function Ku(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Xu(e = {}) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[WE(r)] = n;
    }
    return t;
  }, {});
}
function Pa(e, t, r) {
  return r ? Ie.createElement(e.tag, {
    key: t,
    ...Xu(e.attrs),
    ...r
  }, (e.children || []).map((n, o) => Pa(n, `${t}-${e.tag}-${o}`))) : Ie.createElement(e.tag, {
    key: t,
    ...Xu(e.attrs)
  }, (e.children || []).map((n, o) => Pa(n, `${t}-${e.tag}-${o}`)));
}
function wh(e) {
  return xt(e)[0];
}
function Oh(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
const lS = `
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
`, fS = (e) => {
  const { csp: t, prefixCls: r } = et(Ss);
  let n = lS;
  r && (n = n.replace(/anticon/g, r)), St(() => {
    const o = e.current, i = aS(o);
    XE(n, "@ant-design-icons", {
      prepend: !0,
      csp: t,
      attachTo: i
    });
  }, []);
}, Kr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function dS({ primaryColor: e, secondaryColor: t }) {
  Kr.primaryColor = e, Kr.secondaryColor = t || wh(e), Kr.calculated = !!t;
}
function hS() {
  return {
    ...Kr
  };
}
const Ho = (e) => {
  const { icon: t, className: r, onClick: n, style: o, primaryColor: i, secondaryColor: a, ...s } = e, u = T.useRef();
  let c = Kr;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: a || wh(i)
  }), fS(u), uS(Ku(t), `icon should be icon definiton, but got ${t}`), !Ku(t))
    return null;
  let l = t;
  return l && typeof l.icon == "function" && (l = {
    ...l,
    icon: l.icon(c.primaryColor, c.secondaryColor)
  }), Pa(l.icon, `svg-${l.name}`, {
    className: r,
    onClick: n,
    style: o,
    "data-icon": l.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: u
  });
};
Ho.displayName = "IconReact";
Ho.getTwoToneColors = hS;
Ho.setTwoToneColors = dS;
const Is = Ho;
function Ch(e) {
  const [t, r] = Oh(e);
  return Is.setTwoToneColors({
    primaryColor: t,
    secondaryColor: r
  });
}
function pS() {
  const e = Is.getTwoToneColors();
  return e.calculated ? [
    e.primaryColor,
    e.secondaryColor
  ] : e.primaryColor;
}
Ch(Ub.primary);
const Uo = /* @__PURE__ */ T.forwardRef((e, t) => {
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
    twoToneColor: u,
    ...c
  } = e, { prefixCls: l = "anticon", rootClassName: f } = T.useContext(Ss), d = Ct(f, l, {
    [`${l}-${n.name}`]: !!n.name,
    [`${l}-spin`]: !!o || n.name === "loading"
  }, r);
  let h = a;
  h === void 0 && s && (h = -1);
  const v = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, m] = Oh(u);
  return /* @__PURE__ */ T.createElement("span", {
    role: "img",
    "aria-label": n.name,
    ...c,
    ref: t,
    tabIndex: h,
    onClick: s,
    className: d
  }, /* @__PURE__ */ T.createElement(Is, {
    icon: n,
    primaryColor: p,
    secondaryColor: m,
    style: v
  }));
});
Uo.displayName = "AntdIcon";
Uo.getTwoToneColor = pS;
Uo.setTwoToneColor = Ch;
const Ir = Uo, xh = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: X1
});
process.env.NODE_ENV !== "production" && (xh.displayName = "CheckCircleFilled");
const vS = /* @__PURE__ */ T.forwardRef(xh);
var Th = {};
Object.defineProperty(Th, "__esModule", { value: !0 });
var mS = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, yS = Th.default = mS;
const Ah = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: yS
});
process.env.NODE_ENV !== "production" && (Ah.displayName = "CloseCircleFilled");
const gS = /* @__PURE__ */ T.forwardRef(Ah);
var Rh = {};
Object.defineProperty(Rh, "__esModule", { value: !0 });
var bS = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, ES = Rh.default = bS;
const Ph = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: ES
});
process.env.NODE_ENV !== "production" && (Ph.displayName = "CloseOutlined");
const SS = /* @__PURE__ */ T.forwardRef(Ph);
var kh = {};
Object.defineProperty(kh, "__esModule", { value: !0 });
var _S = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, wS = kh.default = _S;
const Nh = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: wS
});
process.env.NODE_ENV !== "production" && (Nh.displayName = "ExclamationCircleFilled");
const OS = /* @__PURE__ */ T.forwardRef(Nh);
var Dh = {};
Object.defineProperty(Dh, "__esModule", { value: !0 });
var CS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, xS = Dh.default = CS;
const Mh = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: xS
});
process.env.NODE_ENV !== "production" && (Mh.displayName = "InfoCircleFilled");
const TS = /* @__PURE__ */ T.forwardRef(Mh);
var Q = {
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
    r >= Q.F1 && r <= Q.F12)
      return !1;
    switch (r) {
      case Q.ALT:
      case Q.CAPS_LOCK:
      case Q.CONTEXT_MENU:
      case Q.CTRL:
      case Q.DOWN:
      case Q.END:
      case Q.ESC:
      case Q.HOME:
      case Q.INSERT:
      case Q.LEFT:
      case Q.MAC_FF_META:
      case Q.META:
      case Q.NUMLOCK:
      case Q.NUM_CENTER:
      case Q.PAGE_DOWN:
      case Q.PAGE_UP:
      case Q.PAUSE:
      case Q.PRINT_SCREEN:
      case Q.RIGHT:
      case Q.SHIFT:
      case Q.UP:
      case Q.WIN_KEY:
      case Q.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Q.ZERO && t <= Q.NINE || t >= Q.NUM_ZERO && t <= Q.NUM_MULTIPLY || t >= Q.A && t <= Q.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Q.SPACE:
      case Q.QUESTION_MARK:
      case Q.NUM_PLUS:
      case Q.NUM_MINUS:
      case Q.NUM_PERIOD:
      case Q.NUM_DIVISION:
      case Q.SEMICOLON:
      case Q.DASH:
      case Q.EQUALS:
      case Q.COMMA:
      case Q.PERIOD:
      case Q.SLASH:
      case Q.APOSTROPHE:
      case Q.SINGLE_QUOTE:
      case Q.OPEN_SQUARE_BRACKET:
      case Q.BACKSLASH:
      case Q.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Ih = /* @__PURE__ */ T.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.style, o = e.className, i = e.duration, a = i === void 0 ? 4.5 : i, s = e.eventKey, u = e.content, c = e.closable, l = e.closeIcon, f = l === void 0 ? "x" : l, d = e.props, h = e.onClick, v = e.onNoticeClose, p = e.times, m = T.useState(!1), E = Ee(m, 2), g = E[0], b = E[1], S = function() {
    v(s);
  }, y = function(R) {
    (R.key === "Enter" || R.code === "Enter" || R.keyCode === Q.ENTER) && S();
  };
  T.useEffect(function() {
    if (!g && a > 0) {
      var _ = setTimeout(function() {
        S();
      }, a * 1e3);
      return function() {
        clearTimeout(_);
      };
    }
  }, [a, g, p]);
  var w = "".concat(r, "-notice");
  return /* @__PURE__ */ T.createElement("div", Zt({}, d, {
    ref: t,
    className: Ct(w, o, me({}, "".concat(w, "-closable"), c)),
    style: n,
    onMouseEnter: function() {
      b(!0);
    },
    onMouseLeave: function() {
      b(!1);
    },
    onClick: h
  }), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(w, "-content")
  }, u), c && /* @__PURE__ */ T.createElement("a", {
    tabIndex: 0,
    className: "".concat(w, "-close"),
    onKeyDown: y,
    onClick: function(R) {
      R.preventDefault(), R.stopPropagation(), S();
    }
  }, f));
}), Fh = /* @__PURE__ */ T.forwardRef(function(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-notification" : r, o = e.container, i = e.motion, a = e.maxCount, s = e.className, u = e.style, c = e.onAllRemoved, l = T.useState([]), f = Ee(l, 2), d = f[0], h = f[1], v = function(_) {
    var R, N = d.find(function(P) {
      return P.key === _;
    });
    N == null || (R = N.onClose) === null || R === void 0 || R.call(N), h(function(P) {
      return P.filter(function(z) {
        return z.key !== _;
      });
    });
  };
  T.useImperativeHandle(t, function() {
    return {
      open: function(_) {
        h(function(R) {
          var N = Ye(R), P = N.findIndex(function(j) {
            return j.key === _.key;
          }), z = ie({}, _);
          if (P >= 0) {
            var $;
            z.times = ((($ = R[P]) === null || $ === void 0 ? void 0 : $.times) || 0) + 1, N[P] = z;
          } else
            z.times = 0, N.push(z);
          return a > 0 && N.length > a && (N = N.slice(-a)), N;
        });
      },
      close: function(_) {
        v(_);
      },
      destroy: function() {
        h([]);
      }
    };
  });
  var p = T.useState({}), m = Ee(p, 2), E = m[0], g = m[1];
  T.useEffect(function() {
    var w = {};
    d.forEach(function(_) {
      var R = _.placement, N = R === void 0 ? "topRight" : R;
      N && (w[N] = w[N] || [], w[N].push(_));
    }), Object.keys(E).forEach(function(_) {
      w[_] = w[_] || [];
    }), g(w);
  }, [d]);
  var b = function(_) {
    g(function(R) {
      var N = ie({}, R), P = N[_] || [];
      return P.length || delete N[_], N;
    });
  }, S = T.useRef(!1);
  if (T.useEffect(function() {
    Object.keys(E).length > 0 ? S.current = !0 : S.current && (c?.(), S.current = !1);
  }, [E]), !o)
    return null;
  var y = Object.keys(E);
  return /* @__PURE__ */ gp(/* @__PURE__ */ T.createElement(T.Fragment, null, y.map(function(w) {
    var _ = E[w], R = _.map(function(P) {
      return {
        config: P,
        key: P.key
      };
    }), N = typeof i == "function" ? i(w) : i;
    return /* @__PURE__ */ T.createElement(j1, Zt({
      key: w,
      className: Ct(n, "".concat(n, "-").concat(w), s?.(w)),
      style: u?.(w),
      keys: R,
      motionAppear: !0
    }, N, {
      onAllRemoved: function() {
        b(w);
      }
    }), function(P, z) {
      var $ = P.config, j = P.className, U = P.style, H = $.key, ee = $.times, Z = $.className, Y = $.style;
      return /* @__PURE__ */ T.createElement(Ih, Zt({}, $, {
        ref: z,
        prefixCls: n,
        className: Ct(j, Z),
        style: ie(ie({}, U), Y),
        times: ee,
        key: H,
        eventKey: H,
        onNoticeClose: v
      }));
    });
  })), o);
});
process.env.NODE_ENV !== "production" && (Fh.displayName = "Notifications");
var AS = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"], RS = function() {
  return document.body;
}, Ju = 0;
function PS() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r.forEach(function(o) {
    o && Object.keys(o).forEach(function(i) {
      var a = o[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function kS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, r = t === void 0 ? RS : t, n = e.motion, o = e.prefixCls, i = e.maxCount, a = e.className, s = e.style, u = e.onAllRemoved, c = uo(e, AS), l = T.useState(), f = Ee(l, 2), d = f[0], h = f[1], v = T.useRef(), p = /* @__PURE__ */ T.createElement(Fh, {
    container: d,
    ref: v,
    prefixCls: o,
    motion: n,
    maxCount: i,
    className: a,
    style: s,
    onAllRemoved: u
  }), m = T.useState([]), E = Ee(m, 2), g = E[0], b = E[1], S = T.useMemo(function() {
    return {
      open: function(w) {
        var _ = PS(c, w);
        (_.key === null || _.key === void 0) && (_.key = "rc-notification-".concat(Ju), Ju += 1), b(function(R) {
          return [].concat(Ye(R), [{
            type: "open",
            config: _
          }]);
        });
      },
      close: function(w) {
        b(function(_) {
          return [].concat(Ye(_), [{
            type: "close",
            key: w
          }]);
        });
      },
      destroy: function() {
        b(function(w) {
          return [].concat(Ye(w), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return T.useEffect(function() {
    h(r());
  }), T.useEffect(function() {
    v.current && g.length && (g.forEach(function(y) {
      switch (y.type) {
        case "open":
          v.current.open(y.config);
          break;
        case "close":
          v.current.close(y.key);
          break;
        case "destroy":
          v.current.destroy();
          break;
      }
    }), b(function(y) {
      return y.filter(function(w) {
        return !g.includes(w);
      });
    }));
  }, [g]), [S, p];
}
var Lh = {};
Object.defineProperty(Lh, "__esModule", { value: !0 });
var NS = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, DS = Lh.default = NS;
const jh = (e, t) => /* @__PURE__ */ T.createElement(Ir, {
  ...e,
  ref: t,
  icon: DS
});
process.env.NODE_ENV !== "production" && (jh.displayName = "LoadingOutlined");
const MS = /* @__PURE__ */ T.forwardRef(jh), IS = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    boxShadow: n,
    colorText: o,
    colorSuccess: i,
    colorError: a,
    colorWarning: s,
    colorInfo: u,
    fontSizeLG: c,
    motionEaseInOutCirc: l,
    motionDurationSlow: f,
    marginXS: d,
    paddingXS: h,
    borderRadiusLG: v,
    zIndexPopup: p,
    // Custom token
    contentPadding: m,
    contentBg: E
  } = e, g = `${t}-notice`, b = new Ou("MessageMoveIn", {
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
  }), S = new Ou("MessageMoveOut", {
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
  }), y = {
    padding: h,
    textAlign: "center",
    [`${t}-custom-content > ${r}`]: {
      verticalAlign: "text-bottom",
      marginInlineEnd: d,
      fontSize: c
    },
    [`${g}-content`]: {
      display: "inline-block",
      padding: m,
      background: E,
      borderRadius: v,
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
      color: u
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, r1(e)), {
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
          animationName: b,
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
          animationName: S,
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
        [g]: Object.assign({}, y)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, y), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, $h = c1("Message", (e) => {
  const t = Ea(e, {
    height: 150
  });
  return [IS(t)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), {
  clientOnly: !0
});
var FS = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const LS = {
  info: /* @__PURE__ */ T.createElement(TS, null),
  success: /* @__PURE__ */ T.createElement(vS, null),
  error: /* @__PURE__ */ T.createElement(gS, null),
  warning: /* @__PURE__ */ T.createElement(OS, null),
  loading: /* @__PURE__ */ T.createElement(MS, null)
}, Vh = (e) => {
  let {
    prefixCls: t,
    type: r,
    icon: n,
    children: o
  } = e;
  return /* @__PURE__ */ T.createElement("div", {
    className: Ct(`${t}-custom-content`, `${t}-${r}`)
  }, n || LS[r], /* @__PURE__ */ T.createElement("span", null, o));
}, jS = (e) => {
  const {
    prefixCls: t,
    className: r,
    type: n,
    icon: o,
    content: i
  } = e, a = FS(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = T.useContext(Mr), u = t || s("message"), [, c] = $h(u);
  return /* @__PURE__ */ T.createElement(Ih, Object.assign({}, a, {
    prefixCls: u,
    className: Ct(r, c, `${u}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ T.createElement(Vh, {
      prefixCls: u,
      type: n,
      icon: o
    }, i)
  }));
}, $S = jS;
function VS(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Fs(e) {
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
var zS = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const BS = 8, HS = 3, US = /* @__PURE__ */ T.forwardRef((e, t) => {
  const {
    top: r,
    prefixCls: n,
    getContainer: o,
    maxCount: i,
    duration: a = HS,
    rtl: s,
    transitionName: u,
    onAllRemoved: c
  } = e, {
    getPrefixCls: l,
    getPopupContainer: f,
    message: d
  } = T.useContext(Mr), h = n || l("message"), [, v] = $h(h), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: r ?? BS
  }), m = () => Ct(v, {
    [`${h}-rtl`]: s
  }), E = () => VS(h, u), g = /* @__PURE__ */ T.createElement("span", {
    className: `${h}-close-x`
  }, /* @__PURE__ */ T.createElement(SS, {
    className: `${h}-close-icon`
  })), [b, S] = kS({
    prefixCls: h,
    style: p,
    className: m,
    motion: E,
    closable: !1,
    closeIcon: g,
    duration: a,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: i,
    onAllRemoved: c
  });
  return T.useImperativeHandle(t, () => Object.assign(Object.assign({}, b), {
    prefixCls: h,
    hashId: v,
    message: d
  })), S;
});
let Zu = 0;
function zh(e) {
  const t = T.useRef(null);
  return [T.useMemo(() => {
    const n = (u) => {
      var c;
      (c = t.current) === null || c === void 0 || c.close(u);
    }, o = (u) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && nr(!1, "Message", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const _ = () => {
        };
        return _.then = () => {
        }, _;
      }
      const {
        open: c,
        prefixCls: l,
        hashId: f,
        message: d
      } = t.current, h = `${l}-notice`, {
        content: v,
        icon: p,
        type: m,
        key: E,
        className: g,
        style: b,
        onClose: S
      } = u, y = zS(u, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = E;
      return w == null && (Zu += 1, w = `antd-message-${Zu}`), Fs((_) => (c(Object.assign(Object.assign({}, y), {
        key: w,
        content: /* @__PURE__ */ T.createElement(Vh, {
          prefixCls: l,
          type: m,
          icon: p
        }, v),
        placement: "top",
        className: Ct(m && `${h}-${m}`, f, g, d?.className),
        style: Object.assign(Object.assign({}, d?.style), b),
        onClose: () => {
          S?.(), _();
        }
      })), () => {
        n(w);
      }));
    }, a = {
      open: o,
      destroy: (u) => {
        var c;
        u !== void 0 ? n(u) : (c = t.current) === null || c === void 0 || c.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((u) => {
      const c = (l, f, d) => {
        let h;
        l && typeof l == "object" && "content" in l ? h = l : h = {
          content: l
        };
        let v, p;
        typeof f == "function" ? p = f : (v = f, p = d);
        const m = Object.assign(Object.assign({
          onClose: p,
          duration: v
        }, h), {
          type: u
        });
        return o(m);
      };
      a[u] = c;
    }), a;
  }, []), /* @__PURE__ */ T.createElement(US, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function qS(e) {
  return zh(e);
}
var mn = ie({}, mp), QS = mn.version, WS = mn.render;
mn.unmountComponentAtNode;
var Ls;
try {
  var GS = Number((QS || "").split(".")[0]);
  GS >= 18 && (Ls = mn.createRoot);
} catch {
}
function el(e) {
  var t = mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ke(t) === "object" && (t.usingClientEntryPoint = e);
}
var tl = "__rc_react_root__";
function YS(e, t) {
  el(!0);
  var r = t[tl] || Ls(t);
  el(!1), r.render(e), t[tl] = r;
}
function KS(e, t) {
  WS(e, t);
}
function XS(e, t) {
  if (Ls) {
    YS(e, t);
    return;
  }
  KS(e, t);
}
const JS = (e) => {
  const t = e?.algorithm ? rn(e.algorithm) : rn(hn), r = Object.assign(Object.assign({}, dn), e?.token);
  return od(r, {
    override: e?.token
  }, t, Pd);
}, ZS = JS;
function e2(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e, n = r - 2;
  return {
    sizeXXL: t * (n + 10),
    sizeXL: t * (n + 6),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 2),
    sizeMS: t * (n + 1),
    size: t * n,
    sizeSM: t * n,
    sizeXS: t * (n - 1),
    sizeXXS: t * (n - 1)
  };
}
const t2 = (e, t) => {
  const r = t ?? hn(e), n = r.fontSizeSM, o = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), e2(t ?? e)), Td(n)), {
    // controlHeight
    controlHeight: o
  }), Cd(Object.assign(Object.assign({}, r), {
    controlHeight: o
  })));
}, r2 = t2, At = (e, t) => new Ue(e).setAlpha(t).toRgbString(), cr = (e, t) => new Ue(e).lighten(t).toHexString(), n2 = (e) => {
  const t = xt(e, {
    theme: "dark"
  });
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[6],
    6: t[5],
    7: t[4],
    8: t[6],
    9: t[5],
    10: t[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, o2 = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: At(n, 0.85),
    colorTextSecondary: At(n, 0.65),
    colorTextTertiary: At(n, 0.45),
    colorTextQuaternary: At(n, 0.25),
    colorFill: At(n, 0.18),
    colorFillSecondary: At(n, 0.12),
    colorFillTertiary: At(n, 0.08),
    colorFillQuaternary: At(n, 0.04),
    colorBgElevated: cr(r, 12),
    colorBgContainer: cr(r, 8),
    colorBgLayout: cr(r, 0),
    colorBgSpotlight: cr(r, 26),
    colorBorder: cr(r, 26),
    colorBorderSecondary: cr(r, 19)
  };
}, i2 = (e, t) => {
  const r = Object.keys(_s).map((o) => {
    const i = xt(e[o], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((a, s, u) => (a[`${o}-${u + 1}`] = i[u], a[`${o}${u + 1}`] = i[u], a), {});
  }).reduce((o, i) => (o = Object.assign(Object.assign({}, o), i), o), {}), n = t ?? hn(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), xd(e, {
    generateColorPalettes: n2,
    generateNeutralColorPalettes: o2
  }));
}, a2 = i2;
function s2() {
  const [e, t, r] = $o();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const c2 = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: ho,
  /** Default seedToken */
  defaultSeed: ho.token,
  useToken: s2,
  defaultAlgorithm: hn,
  darkAlgorithm: a2,
  compactAlgorithm: r2,
  getDesignToken: ZS
};
let Ke = null, Ut = (e) => e(), an = [], yo = {};
function u2() {
  const {
    prefixCls: e,
    getContainer: t,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  } = yo, a = e ?? qd().getPrefixCls("message"), s = t?.() || document.body;
  return {
    prefixCls: a,
    container: s,
    duration: r,
    rtl: n,
    maxCount: o,
    top: i
  };
}
const l2 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const r = () => {
    const {
      prefixCls: d,
      container: h,
      maxCount: v,
      duration: p,
      rtl: m,
      top: E
    } = u2();
    return {
      prefixCls: d,
      getContainer: () => h,
      maxCount: v,
      duration: p,
      rtl: m,
      top: E
    };
  }, [n, o] = T.useState(r), [i, a] = zh(n), s = qd(), u = s.getRootPrefixCls(), c = s.getIconPrefixCls(), l = s.getTheme(), f = () => {
    o(r);
  };
  return T.useEffect(f, []), T.useImperativeHandle(t, () => {
    const d = Object.assign({}, i);
    return Object.keys(d).forEach((h) => {
      d[h] = function() {
        return f(), i[h].apply(i, arguments);
      };
    }), {
      instance: d,
      sync: f
    };
  }), /* @__PURE__ */ T.createElement(Qd, {
    prefixCls: u,
    iconPrefixCls: c,
    theme: l
  }, a);
});
function qo() {
  if (!Ke) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    Ke = t, Ut(() => {
      XS(/* @__PURE__ */ T.createElement(l2, {
        ref: (r) => {
          const {
            instance: n,
            sync: o
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && n && (t.instance = n, t.sync = o, qo());
          });
        }
      }), e);
    });
    return;
  }
  Ke.instance && (an.forEach((e) => {
    const {
      type: t,
      skipped: r
    } = e;
    if (!r)
      switch (t) {
        case "open": {
          Ut(() => {
            const n = Ke.instance.open(Object.assign(Object.assign({}, yo), e.config));
            n?.then(e.resolve), e.setCloseFn(n);
          });
          break;
        }
        case "destroy":
          Ut(() => {
            Ke?.instance.destroy(e.key);
          });
          break;
        default:
          Ut(() => {
            var n;
            const o = (n = Ke.instance)[t].apply(n, Ye(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), an = []);
}
function f2(e) {
  yo = Object.assign(Object.assign({}, yo), e), Ut(() => {
    var t;
    (t = Ke?.sync) === null || t === void 0 || t.call(Ke);
  });
}
function d2(e) {
  const t = Fs((r) => {
    let n;
    const o = {
      type: "open",
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i;
      }
    };
    return an.push(o), () => {
      n ? Ut(() => {
        n();
      }) : o.skipped = !0;
    };
  });
  return qo(), t;
}
function h2(e, t) {
  process.env.NODE_ENV !== "production" && H1("message");
  const r = Fs((n) => {
    let o;
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (a) => {
        o = a;
      }
    };
    return an.push(i), () => {
      o ? Ut(() => {
        o();
      }) : i.skipped = !0;
    };
  });
  return qo(), r;
}
function p2(e) {
  an.push({
    type: "destroy",
    key: e
  }), qo();
}
const v2 = ["success", "info", "warning", "error", "loading"], m2 = {
  open: d2,
  destroy: p2,
  config: f2,
  useMessage: qS,
  _InternalPanelDoNotUseOrYouWillBeFired: $S
}, Bh = m2;
v2.forEach((e) => {
  Bh[e] = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return h2(e, r);
  };
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const y2 = Bh, Hh = cn(
  {}
), j_ = ({ children: e }) => {
  const [t, r] = y2.useMessage(), n = ({ type: o, message: i }) => {
    t.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ ja($a, { children: [
    r,
    /* @__PURE__ */ st(Hh.Provider, { value: { open: n }, children: e })
  ] });
};
var ka = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function g2() {
  if (rl)
    return de;
  rl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case c:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case u:
                case d:
                case f:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return de.ContextConsumer = a, de.ContextProvider = i, de.Element = e, de.ForwardRef = u, de.Fragment = r, de.Lazy = d, de.Memo = f, de.Portal = t, de.Profiler = o, de.StrictMode = n, de.Suspense = c, de.SuspenseList = l, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(m) {
    return p(m) === a;
  }, de.isContextProvider = function(m) {
    return p(m) === i;
  }, de.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, de.isForwardRef = function(m) {
    return p(m) === u;
  }, de.isFragment = function(m) {
    return p(m) === r;
  }, de.isLazy = function(m) {
    return p(m) === d;
  }, de.isMemo = function(m) {
    return p(m) === f;
  }, de.isPortal = function(m) {
    return p(m) === t;
  }, de.isProfiler = function(m) {
    return p(m) === o;
  }, de.isStrictMode = function(m) {
    return p(m) === n;
  }, de.isSuspense = function(m) {
    return p(m) === c;
  }, de.isSuspenseList = function(m) {
    return p(m) === l;
  }, de.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === c || m === l || m === h || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || m.$$typeof === v || m.getModuleId !== void 0);
  }, de.typeOf = p, de;
}
var he = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;
function b2() {
  return nl || (nl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, p = !1, m = !1, E = !1, g = !1, b;
    b = Symbol.for("react.module.reference");
    function S(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === o || g || F === n || F === c || F === l || E || F === h || v || p || m || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === f || F.$$typeof === i || F.$$typeof === a || F.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === b || F.getModuleId !== void 0));
    }
    function y(F) {
      if (typeof F == "object" && F !== null) {
        var q = F.$$typeof;
        switch (q) {
          case e:
            var _e = F.type;
            switch (_e) {
              case r:
              case o:
              case n:
              case c:
              case l:
                return _e;
              default:
                var J = _e && _e.$$typeof;
                switch (J) {
                  case s:
                  case a:
                  case u:
                  case d:
                  case f:
                  case i:
                    return J;
                  default:
                    return q;
                }
            }
          case t:
            return q;
        }
      }
    }
    var w = a, _ = i, R = e, N = u, P = r, z = d, $ = f, j = t, U = o, H = n, ee = c, Z = l, Y = !1, ae = !1;
    function ne(F) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ye(F) {
      return ae || (ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(F) {
      return y(F) === a;
    }
    function I(F) {
      return y(F) === i;
    }
    function M(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function B(F) {
      return y(F) === u;
    }
    function C(F) {
      return y(F) === r;
    }
    function X(F) {
      return y(F) === d;
    }
    function D(F) {
      return y(F) === f;
    }
    function se(F) {
      return y(F) === t;
    }
    function K(F) {
      return y(F) === o;
    }
    function G(F) {
      return y(F) === n;
    }
    function O(F) {
      return y(F) === c;
    }
    function ce(F) {
      return y(F) === l;
    }
    he.ContextConsumer = w, he.ContextProvider = _, he.Element = R, he.ForwardRef = N, he.Fragment = P, he.Lazy = z, he.Memo = $, he.Portal = j, he.Profiler = U, he.StrictMode = H, he.Suspense = ee, he.SuspenseList = Z, he.isAsyncMode = ne, he.isConcurrentMode = ye, he.isContextConsumer = k, he.isContextProvider = I, he.isElement = M, he.isForwardRef = B, he.isFragment = C, he.isLazy = X, he.isMemo = D, he.isPortal = se, he.isProfiler = K, he.isStrictMode = G, he.isSuspense = O, he.isSuspenseList = ce, he.isValidElementType = S, he.typeOf = y;
  }()), he;
}
process.env.NODE_ENV === "production" ? ka.exports = g2() : ka.exports = b2();
var js = ka.exports;
function E2(e) {
  function t(k, I, M, B, C) {
    for (var X = 0, D = 0, se = 0, K = 0, G, O, ce = 0, F = 0, q, _e = q = G = 0, J = 0, Oe = 0, Te = 0, te = 0, Ce = M.length, Le = Ce - 1, Ne, W = "", xe = "", Lr = "", jr = "", lt; J < Ce; ) {
      if (O = M.charCodeAt(J), J === Le && D + K + se + X !== 0 && (D !== 0 && (O = D === 47 ? 10 : 47), K = se = X = 0, Ce++, Le++), D + K + se + X === 0) {
        if (J === Le && (0 < Oe && (W = W.replace(d, "")), 0 < W.trim().length)) {
          switch (O) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += M.charAt(J);
          }
          O = 59;
        }
        switch (O) {
          case 123:
            for (W = W.trim(), G = W.charCodeAt(0), q = 1, te = ++J; J < Ce; ) {
              switch (O = M.charCodeAt(J)) {
                case 123:
                  q++;
                  break;
                case 125:
                  q--;
                  break;
                case 47:
                  switch (O = M.charCodeAt(J + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (_e = J + 1; _e < Le; ++_e)
                          switch (M.charCodeAt(_e)) {
                            case 47:
                              if (O === 42 && M.charCodeAt(_e - 1) === 42 && J + 2 !== _e) {
                                J = _e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (O === 47) {
                                J = _e + 1;
                                break e;
                              }
                          }
                        J = _e;
                      }
                  }
                  break;
                case 91:
                  O++;
                case 40:
                  O++;
                case 34:
                case 39:
                  for (; J++ < Le && M.charCodeAt(J) !== O; )
                    ;
              }
              if (q === 0)
                break;
              J++;
            }
            switch (q = M.substring(te, J), G === 0 && (G = (W = W.replace(f, "").trim()).charCodeAt(0)), G) {
              case 64:
                switch (0 < Oe && (W = W.replace(d, "")), O = W.charCodeAt(1), O) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Oe = I;
                    break;
                  default:
                    Oe = ee;
                }
                if (q = t(I, Oe, q, O, C + 1), te = q.length, 0 < Y && (Oe = r(ee, W, Te), lt = s(3, q, Oe, I, j, $, te, O, C, B), W = Oe.join(""), lt !== void 0 && (te = (q = lt.trim()).length) === 0 && (O = 0, q = "")), 0 < te)
                  switch (O) {
                    case 115:
                      W = W.replace(w, a);
                    case 100:
                    case 109:
                    case 45:
                      q = W + "{" + q + "}";
                      break;
                    case 107:
                      W = W.replace(g, "$1 $2"), q = W + "{" + q + "}", q = H === 1 || H === 2 && i("@" + q, 3) ? "@-webkit-" + q + "@" + q : "@" + q;
                      break;
                    default:
                      q = W + q, B === 112 && (q = (xe += q, ""));
                  }
                else
                  q = "";
                break;
              default:
                q = t(I, r(I, W, Te), q, B, C + 1);
            }
            Lr += q, q = Te = Oe = _e = G = 0, W = "", O = M.charCodeAt(++J);
            break;
          case 125:
          case 59:
            if (W = (0 < Oe ? W.replace(d, "") : W).trim(), 1 < (te = W.length))
              switch (_e === 0 && (G = W.charCodeAt(0), G === 45 || 96 < G && 123 > G) && (te = (W = W.replace(" ", ":")).length), 0 < Y && (lt = s(1, W, I, k, j, $, xe.length, B, C, B)) !== void 0 && (te = (W = lt.trim()).length) === 0 && (W = "\0\0"), G = W.charCodeAt(0), O = W.charCodeAt(1), G) {
                case 0:
                  break;
                case 64:
                  if (O === 105 || O === 99) {
                    jr += W + M.charAt(J);
                    break;
                  }
                default:
                  W.charCodeAt(te - 1) !== 58 && (xe += o(W, G, O, W.charCodeAt(2)));
              }
            Te = Oe = _e = G = 0, W = "", O = M.charCodeAt(++J);
        }
      }
      switch (O) {
        case 13:
        case 10:
          D === 47 ? D = 0 : 1 + G === 0 && B !== 107 && 0 < W.length && (Oe = 1, W += "\0"), 0 < Y * ne && s(0, W, I, k, j, $, xe.length, B, C, B), $ = 1, j++;
          break;
        case 59:
        case 125:
          if (D + K + se + X === 0) {
            $++;
            break;
          }
        default:
          switch ($++, Ne = M.charAt(J), O) {
            case 9:
            case 32:
              if (K + X + D === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ne = "";
                    break;
                  default:
                    O !== 32 && (Ne = " ");
                }
              break;
            case 0:
              Ne = "\\0";
              break;
            case 12:
              Ne = "\\f";
              break;
            case 11:
              Ne = "\\v";
              break;
            case 38:
              K + D + X === 0 && (Oe = Te = 1, Ne = "\f" + Ne);
              break;
            case 108:
              if (K + D + X + U === 0 && 0 < _e)
                switch (J - _e) {
                  case 2:
                    ce === 112 && M.charCodeAt(J - 3) === 58 && (U = ce);
                  case 8:
                    F === 111 && (U = F);
                }
              break;
            case 58:
              K + D + X === 0 && (_e = J);
              break;
            case 44:
              D + se + K + X === 0 && (Oe = 1, Ne += "\r");
              break;
            case 34:
            case 39:
              D === 0 && (K = K === O ? 0 : K === 0 ? O : K);
              break;
            case 91:
              K + D + se === 0 && X++;
              break;
            case 93:
              K + D + se === 0 && X--;
              break;
            case 41:
              K + D + X === 0 && se--;
              break;
            case 40:
              if (K + D + X === 0) {
                if (G === 0)
                  switch (2 * ce + 3 * F) {
                    case 533:
                      break;
                    default:
                      G = 1;
                  }
                se++;
              }
              break;
            case 64:
              D + se + K + X + _e + q === 0 && (q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + X + se))
                switch (D) {
                  case 0:
                    switch (2 * O + 3 * M.charCodeAt(J + 1)) {
                      case 235:
                        D = 47;
                        break;
                      case 220:
                        te = J, D = 42;
                    }
                    break;
                  case 42:
                    O === 47 && ce === 42 && te + 2 !== J && (M.charCodeAt(te + 2) === 33 && (xe += M.substring(te, J + 1)), Ne = "", D = 0);
                }
          }
          D === 0 && (W += Ne);
      }
      F = ce, ce = O, J++;
    }
    if (te = xe.length, 0 < te) {
      if (Oe = I, 0 < Y && (lt = s(2, xe, Oe, k, j, $, te, B, C, B), lt !== void 0 && (xe = lt).length === 0))
        return jr + xe + Lr;
      if (xe = Oe.join(",") + "{" + xe + "}", H * U !== 0) {
        switch (H !== 2 || i(xe, 2) || (U = 0), U) {
          case 111:
            xe = xe.replace(S, ":-moz-$1") + xe;
            break;
          case 112:
            xe = xe.replace(b, "::-webkit-input-$1") + xe.replace(b, "::-moz-$1") + xe.replace(b, ":-ms-input-$1") + xe;
        }
        U = 0;
      }
    }
    return jr + xe + Lr;
  }
  function r(k, I, M) {
    var B = I.trim().split(m);
    I = B;
    var C = B.length, X = k.length;
    switch (X) {
      case 0:
      case 1:
        var D = 0;
        for (k = X === 0 ? "" : k[0] + " "; D < C; ++D)
          I[D] = n(k, I[D], M).trim();
        break;
      default:
        var se = D = 0;
        for (I = []; D < C; ++D)
          for (var K = 0; K < X; ++K)
            I[se++] = n(k[K] + " ", B[D], M).trim();
    }
    return I;
  }
  function n(k, I, M) {
    var B = I.charCodeAt(0);
    switch (33 > B && (B = (I = I.trim()).charCodeAt(0)), B) {
      case 38:
        return I.replace(E, "$1" + k.trim());
      case 58:
        return k.trim() + I.replace(E, "$1" + k.trim());
      default:
        if (0 < 1 * M && 0 < I.indexOf("\f"))
          return I.replace(E, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + I;
  }
  function o(k, I, M, B) {
    var C = k + ";", X = 2 * I + 3 * M + 4 * B;
    if (X === 944) {
      k = C.indexOf(":", 9) + 1;
      var D = C.substring(k, C.length - 1).trim();
      return D = C.substring(0, k).trim() + D + ";", H === 1 || H === 2 && i(D, 1) ? "-webkit-" + D + D : D;
    }
    if (H === 0 || H === 2 && !i(C, 1))
      return C;
    switch (X) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45)
          return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace(z, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
            case 115:
              return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
            case 98:
              return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99)
          break;
        return D = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + D + "-webkit-" + C + "-ms-flex-pack" + D + C;
      case 1005:
        return v.test(C) ? C.replace(h, ":-webkit-") + C.replace(h, ":-moz-") + C : C;
      case 1e3:
        switch (D = C.substring(13).trim(), I = D.indexOf("-") + 1, D.charCodeAt(0) + D.charCodeAt(I)) {
          case 226:
            D = C.replace(y, "tb");
            break;
          case 232:
            D = C.replace(y, "tb-rl");
            break;
          case 220:
            D = C.replace(y, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + D + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (I = (C = k).length - 10, D = (C.charCodeAt(I) === 33 ? C.substring(0, I) : C).substring(k.indexOf(":", 7) + 1).trim(), X = D.charCodeAt(0) + (D.charCodeAt(7) | 0)) {
          case 203:
            if (111 > D.charCodeAt(8))
              break;
          case 115:
            C = C.replace(D, "-webkit-" + D) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(D, "-webkit-" + (102 < X ? "inline-" : "") + "box") + ";" + C.replace(D, "-webkit-" + D) + ";" + C.replace(D, "-ms-" + D + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return D = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + D + "-ms-flex-" + D + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(R, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(R, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (P.test(k) === !0)
          return (D = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(k.replace("stretch", "fill-available"), I, M, B).replace(":fill-available", ":stretch") : C.replace(D, "-webkit-" + D) + C.replace(D, "-moz-" + D.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, M + B === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + C;
    }
    return C;
  }
  function i(k, I) {
    var M = k.indexOf(I === 1 ? ":" : "{"), B = k.substring(0, I !== 3 ? M : 10);
    return M = k.substring(M + 1, k.length - 1), ae(I !== 2 ? B : B.replace(N, "$1"), M, I);
  }
  function a(k, I) {
    var M = o(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return M !== I + ";" ? M.replace(_, " or ($1)").substring(4) : "(" + I + ")";
  }
  function s(k, I, M, B, C, X, D, se, K, G) {
    for (var O = 0, ce = I, F; O < Y; ++O)
      switch (F = Z[O].call(l, k, ce, M, B, C, X, D, se, K, G)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = F;
      }
    if (ce !== I)
      return ce;
  }
  function u(k) {
    switch (k) {
      case void 0:
      case null:
        Y = Z.length = 0;
        break;
      default:
        if (typeof k == "function")
          Z[Y++] = k;
        else if (typeof k == "object")
          for (var I = 0, M = k.length; I < M; ++I)
            u(k[I]);
        else
          ne = !!k | 0;
    }
    return u;
  }
  function c(k) {
    return k = k.prefix, k !== void 0 && (ae = null, k ? typeof k != "function" ? H = 1 : (H = 2, ae = k) : H = 0), c;
  }
  function l(k, I) {
    var M = k;
    if (33 > M.charCodeAt(0) && (M = M.trim()), ye = M, M = [ye], 0 < Y) {
      var B = s(-1, I, M, M, j, $, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (I = B);
    }
    var C = t(ee, M, I, 0, 0);
    return 0 < Y && (B = s(-2, C, M, M, j, $, C.length, 0, 0, 0), B !== void 0 && (C = B)), ye = "", U = 0, $ = j = 1, C;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, h = /: */g, v = /zoo|gra/, p = /([,: ])(transform)/g, m = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, g = /@(k\w+)\s*(\S*)\s*/, b = /::(place)/g, S = /:(read-only)/g, y = /[svh]\w+-[tblr]{2}/, w = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, R = /-self|flex-/g, N = /[^]*?(:[rp][el]a[\w-]+)[^]*/, P = /stretch|:\s*\w+\-(?:conte|avail)/, z = /([^-])(image-set\()/, $ = 1, j = 1, U = 0, H = 1, ee = [], Z = [], Y = 0, ae = null, ne = 0, ye = "";
  return l.use = u, l.set = c, e !== void 0 && c(e), l;
}
function S2(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var _2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ol = /* @__PURE__ */ S2(
  function(e) {
    return _2.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Na = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function w2() {
  if (il)
    return pe;
  il = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var w = y.$$typeof;
      switch (w) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case n:
            case i:
            case o:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case l:
                case v:
                case h:
                case a:
                  return y;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function S(y) {
    return b(y) === c;
  }
  return pe.AsyncMode = u, pe.ConcurrentMode = c, pe.ContextConsumer = s, pe.ContextProvider = a, pe.Element = t, pe.ForwardRef = l, pe.Fragment = n, pe.Lazy = v, pe.Memo = h, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = f, pe.isAsyncMode = function(y) {
    return S(y) || b(y) === u;
  }, pe.isConcurrentMode = S, pe.isContextConsumer = function(y) {
    return b(y) === s;
  }, pe.isContextProvider = function(y) {
    return b(y) === a;
  }, pe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, pe.isForwardRef = function(y) {
    return b(y) === l;
  }, pe.isFragment = function(y) {
    return b(y) === n;
  }, pe.isLazy = function(y) {
    return b(y) === v;
  }, pe.isMemo = function(y) {
    return b(y) === h;
  }, pe.isPortal = function(y) {
    return b(y) === r;
  }, pe.isProfiler = function(y) {
    return b(y) === i;
  }, pe.isStrictMode = function(y) {
    return b(y) === o;
  }, pe.isSuspense = function(y) {
    return b(y) === f;
  }, pe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === i || y === o || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === h || y.$$typeof === a || y.$$typeof === s || y.$$typeof === l || y.$$typeof === m || y.$$typeof === E || y.$$typeof === g || y.$$typeof === p);
  }, pe.typeOf = b, pe;
}
var ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al;
function O2() {
  return al || (al = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function b(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === c || O === i || O === o || O === f || O === d || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === h || O.$$typeof === a || O.$$typeof === s || O.$$typeof === l || O.$$typeof === m || O.$$typeof === E || O.$$typeof === g || O.$$typeof === p);
    }
    function S(O) {
      if (typeof O == "object" && O !== null) {
        var ce = O.$$typeof;
        switch (ce) {
          case t:
            var F = O.type;
            switch (F) {
              case u:
              case c:
              case n:
              case i:
              case o:
              case f:
                return F;
              default:
                var q = F && F.$$typeof;
                switch (q) {
                  case s:
                  case l:
                  case v:
                  case h:
                  case a:
                    return q;
                  default:
                    return ce;
                }
            }
          case r:
            return ce;
        }
      }
    }
    var y = u, w = c, _ = s, R = a, N = t, P = l, z = n, $ = v, j = h, U = r, H = i, ee = o, Z = f, Y = !1;
    function ae(O) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(O) || S(O) === u;
    }
    function ne(O) {
      return S(O) === c;
    }
    function ye(O) {
      return S(O) === s;
    }
    function k(O) {
      return S(O) === a;
    }
    function I(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return S(O) === l;
    }
    function B(O) {
      return S(O) === n;
    }
    function C(O) {
      return S(O) === v;
    }
    function X(O) {
      return S(O) === h;
    }
    function D(O) {
      return S(O) === r;
    }
    function se(O) {
      return S(O) === i;
    }
    function K(O) {
      return S(O) === o;
    }
    function G(O) {
      return S(O) === f;
    }
    ve.AsyncMode = y, ve.ConcurrentMode = w, ve.ContextConsumer = _, ve.ContextProvider = R, ve.Element = N, ve.ForwardRef = P, ve.Fragment = z, ve.Lazy = $, ve.Memo = j, ve.Portal = U, ve.Profiler = H, ve.StrictMode = ee, ve.Suspense = Z, ve.isAsyncMode = ae, ve.isConcurrentMode = ne, ve.isContextConsumer = ye, ve.isContextProvider = k, ve.isElement = I, ve.isForwardRef = M, ve.isFragment = B, ve.isLazy = C, ve.isMemo = X, ve.isPortal = D, ve.isProfiler = se, ve.isStrictMode = K, ve.isSuspense = G, ve.isValidElementType = b, ve.typeOf = S;
  }()), ve;
}
process.env.NODE_ENV === "production" ? Na.exports = w2() : Na.exports = O2();
var C2 = Na.exports, $s = C2, x2 = {
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
}, T2 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, A2 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Uh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vs = {};
Vs[$s.ForwardRef] = A2;
Vs[$s.Memo] = Uh;
function sl(e) {
  return $s.isMemo(e) ? Uh : Vs[e.$$typeof] || x2;
}
var R2 = Object.defineProperty, P2 = Object.getOwnPropertyNames, cl = Object.getOwnPropertySymbols, k2 = Object.getOwnPropertyDescriptor, N2 = Object.getPrototypeOf, ul = Object.prototype;
function qh(e, t, r) {
  if (typeof t != "string") {
    if (ul) {
      var n = N2(t);
      n && n !== ul && qh(e, n, r);
    }
    var o = P2(t);
    cl && (o = o.concat(cl(t)));
    for (var i = sl(e), a = sl(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!T2[u] && !(r && r[u]) && !(a && a[u]) && !(i && i[u])) {
        var c = k2(t, u);
        try {
          R2(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var D2 = qh;
const M2 = /* @__PURE__ */ Za(D2);
function it() {
  return (it = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ll = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}, Da = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !js.typeOf(e);
}, go = Object.freeze([]), Mt = Object.freeze({});
function xr(e) {
  return typeof e == "function";
}
function Ma(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function zs(e) {
  return e && typeof e.styledComponentId == "string";
}
var Tr = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Bs = typeof window < "u" && "HTMLElement" in window, I2 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), F2 = {}, L2 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function j2() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function wt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(j2.apply(void 0, [L2[e]].concat(r)).trim());
}
var $2 = function() {
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
        (a <<= 1) < 0 && wt(16, "" + r);
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(o), this.length = a;
      for (var s = i; s < a; s++)
        this.groupSizes[s] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), c = 0, l = n.length; c < l; c++)
      this.tag.insertRule(u, n[c]) && (this.groupSizes[r]++, u++);
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
}(), to = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new Map(), Xr = 1, Mn = function(e) {
  if (to.has(e))
    return to.get(e);
  for (; bo.has(Xr); )
    Xr++;
  var t = Xr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && wt(16, "" + t), to.set(e, t), bo.set(t, e), t;
}, V2 = function(e) {
  return bo.get(e);
}, z2 = function(e, t) {
  t >= Xr && (Xr = t + 1), to.set(e, t), bo.set(t, e);
}, B2 = "style[" + Tr + '][data-styled-version="5.3.6"]', H2 = new RegExp("^" + Tr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), U2 = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, q2 = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = r.length; o < i; o++) {
    var a = r[o].trim();
    if (a) {
      var s = a.match(H2);
      if (s) {
        var u = 0 | parseInt(s[1], 10), c = s[2];
        u !== 0 && (z2(c, u), U2(e, c, s[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else
        n.push(a);
    }
  }
}, Q2 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Qh = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    for (var u = s.childNodes, c = u.length; c >= 0; c--) {
      var l = u[c];
      if (l && l.nodeType === 1 && l.hasAttribute(Tr))
        return l;
    }
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Tr, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var a = Q2();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, W2 = function() {
  function e(r) {
    var n = this.element = Qh(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
        var u = i[a];
        if (u.ownerNode === o)
          return u;
      }
      wt(17);
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
}(), G2 = function() {
  function e(r) {
    var n = this.element = Qh(r);
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
}(), Y2 = function() {
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
}(), fl = Bs, K2 = { isServer: !Bs, useCSSOMInjection: !I2 }, Eo = function() {
  function e(r, n, o) {
    r === void 0 && (r = Mt), n === void 0 && (n = {}), this.options = it({}, K2, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Bs && fl && (fl = !1, function(i) {
      for (var a = document.querySelectorAll(B2), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(Tr) !== "active" && (q2(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Mn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(it({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, a = n.target, r = o ? new Y2(a) : i ? new W2(a) : new G2(a), new $2(r)));
    var r, n, o, i, a;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Mn(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(Mn(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Mn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, i = "", a = 0; a < o; a++) {
        var s = V2(a);
        if (s !== void 0) {
          var u = r.names.get(s), c = n.getGroup(a);
          if (u && c && u.size) {
            var l = Tr + ".g" + a + '[id="' + s + '"]', f = "";
            u !== void 0 && u.forEach(function(d) {
              d.length > 0 && (f += d + ",");
            }), i += "" + c + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), X2 = /(a)(d)/gi, dl = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ia(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = dl(t % 52) + r;
  return (dl(t % 52) + r).replace(X2, "$1-$2");
}
var Bt = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Wh = function(e) {
  return Bt(5381, e);
};
function Gh(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (xr(r) && !zs(r))
      return !1;
  }
  return !0;
}
var J2 = Wh("5.3.6"), Z2 = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Gh(t), this.componentId = r, this.baseHash = Bt(J2, r), this.baseStyle = n, Eo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var a = er(this.rules, t, r, n).join(""), s = Ia(Bt(this.baseHash, a) >>> 0);
        if (!r.hasNameForId(o, s)) {
          var u = n(a, "." + s, void 0, o);
          r.insertRules(o, s, u);
        }
        i.push(s), this.staticRulesId = s;
      }
    else {
      for (var c = this.rules.length, l = Bt(this.baseHash, n.hash), f = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          f += h, process.env.NODE_ENV !== "production" && (l = Bt(l, h + d));
        else if (h) {
          var v = er(h, t, r, n), p = Array.isArray(v) ? v.join("") : v;
          l = Bt(l, p + d), f += p;
        }
      }
      if (f) {
        var m = Ia(l >>> 0);
        if (!r.hasNameForId(o, m)) {
          var E = n(f, "." + m, void 0, o);
          r.insertRules(o, m, E);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), e_ = /^\s*\/\/.*$/gm, t_ = [":", "[", ".", "#"];
function r_(e) {
  var t, r, n, o, i = e === void 0 ? Mt : e, a = i.options, s = a === void 0 ? Mt : a, u = i.plugins, c = u === void 0 ? go : u, l = new E2(s), f = [], d = function(p) {
    function m(E) {
      if (E)
        try {
          p(E + "}");
        } catch {
        }
    }
    return function(E, g, b, S, y, w, _, R, N, P) {
      switch (E) {
        case 1:
          if (N === 0 && g.charCodeAt(0) === 64)
            return p(g + ";"), "";
          break;
        case 2:
          if (R === 0)
            return g + "/*|*/";
          break;
        case 3:
          switch (R) {
            case 102:
            case 112:
              return p(b[0] + g), "";
            default:
              return g + (P === 0 ? "/*|*/" : "");
          }
        case -2:
          g.split("/*|*/}").forEach(m);
      }
    };
  }(function(p) {
    f.push(p);
  }), h = function(p, m, E) {
    return m === 0 && t_.indexOf(E[r.length]) !== -1 || E.match(o) ? p : "." + t;
  };
  function v(p, m, E, g) {
    g === void 0 && (g = "&");
    var b = p.replace(e_, ""), S = m && E ? E + " " + m + " { " + b + " }" : b;
    return t = g, r = m, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), l(E || !m ? "" : m, S);
  }
  return l.use([].concat(c, [function(p, m, E) {
    p === 2 && E.length && E[0].lastIndexOf(r) > 0 && (E[0] = E[0].replace(n, h));
  }, d, function(p) {
    if (p === -2) {
      var m = f;
      return f = [], m;
    }
  }])), v.hash = c.length ? c.reduce(function(p, m) {
    return m.name || wt(15), Bt(p, m.name);
  }, 5381).toString() : "", v;
}
var Yh = Ie.createContext();
Yh.Consumer;
var Kh = Ie.createContext(), n_ = (Kh.Consumer, new Eo()), Fa = r_();
function Xh() {
  return et(Yh) || n_;
}
function Jh() {
  return et(Kh) || Fa;
}
var o_ = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Fa);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.toString = function() {
      return wt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fa), this.name + t.hash;
  }, e;
}(), i_ = /([A-Z])/, a_ = /([A-Z])/g, s_ = /^ms-/, c_ = function(e) {
  return "-" + e.toLowerCase();
};
function hl(e) {
  return i_.test(e) ? e.replace(a_, c_).replace(s_, "-ms-") : e;
}
var pl = function(e) {
  return e == null || e === !1 || e === "";
};
function er(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = er(e[a], t, r, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (pl(e))
    return "";
  if (zs(e))
    return "." + e.styledComponentId;
  if (xr(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !t)
      return e;
    var u = e(t);
    return process.env.NODE_ENV !== "production" && js.isElement(u) && console.warn(Ma(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), er(u, t, r, n);
  }
  var c;
  return e instanceof o_ ? r ? (e.inject(r, n), e.getName(n)) : e : Da(e) ? function l(f, d) {
    var h, v, p = [];
    for (var m in f)
      f.hasOwnProperty(m) && !pl(f[m]) && (Array.isArray(f[m]) && f[m].isCss || xr(f[m]) ? p.push(hl(m) + ":", f[m], ";") : Da(f[m]) ? p.push.apply(p, l(f[m], m)) : p.push(hl(m) + ": " + (h = m, (v = f[m]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || h in id ? String(v).trim() : v + "px") + ";"));
    return d ? [d + " {"].concat(p, ["}"]) : p;
  }(e) : e.toString();
}
var vl = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Fr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return xr(e) || Da(e) ? vl(er(ll(go, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : vl(er(ll(e, r)));
}
var ml = /invalid hook call/i, In = /* @__PURE__ */ new Set(), Zh = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (ml.test(i))
          o = !1, In.delete(r);
        else {
          for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
            s[u - 1] = arguments[u];
          n.apply(void 0, [i].concat(s));
        }
      }, Je(), o && !In.has(r) && (console.warn(r), In.add(r));
    } catch (i) {
      ml.test(i.message) && In.delete(r);
    } finally {
      console.error = n;
    }
  }
}, ep = function(e, t, r) {
  return r === void 0 && (r = Mt), e.theme !== r.theme && e.theme || t || r.theme;
}, u_ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, l_ = /(^-|-$)/g;
function Oi(e) {
  return e.replace(u_, "-").replace(l_, "");
}
var tp = function(e) {
  return Ia(Wh(e) >>> 0);
};
function Fn(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var La = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, f_ = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function d_(e, t, r) {
  var n = e[r];
  La(t) && La(n) ? rp(n, t) : e[r] = t;
}
function rp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    if (La(a))
      for (var s in a)
        f_(s) && d_(e, a[s], s);
  }
  return e;
}
var sn = Ie.createContext();
sn.Consumer;
function h_(e) {
  var t = et(sn), r = El(function() {
    return function(n, o) {
      if (!n)
        return wt(14);
      if (xr(n)) {
        var i = n(o);
        return process.env.NODE_ENV === "production" || i !== null && !Array.isArray(i) && typeof i == "object" ? i : wt(7);
      }
      return Array.isArray(n) || typeof n != "object" ? wt(8) : o ? it({}, o, {}, n) : n;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? Ie.createElement(sn.Provider, { value: r }, e.children) : null;
}
var Ci = {};
function np(e, t, r) {
  var n = zs(e), o = !Fn(e), i = t.attrs, a = i === void 0 ? go : i, s = t.componentId, u = s === void 0 ? function(g, b) {
    var S = typeof g != "string" ? "sc" : Oi(g);
    Ci[S] = (Ci[S] || 0) + 1;
    var y = S + "-" + tp("5.3.6" + S + Ci[S]);
    return b ? b + "-" + y : y;
  }(t.displayName, t.parentComponentId) : s, c = t.displayName, l = c === void 0 ? function(g) {
    return Fn(g) ? "styled." + g : "Styled(" + Ma(g) + ")";
  }(e) : c, f = t.displayName && t.componentId ? Oi(t.displayName) + "-" + t.componentId : t.componentId || u, d = n && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a, h = t.shouldForwardProp;
  n && e.shouldForwardProp && (h = t.shouldForwardProp ? function(g, b, S) {
    return e.shouldForwardProp(g, b, S) && t.shouldForwardProp(g, b, S);
  } : e.shouldForwardProp);
  var v, p = new Z2(r, f, n ? e.componentStyle : void 0), m = p.isStatic && a.length === 0, E = function(g, b) {
    return function(S, y, w, _) {
      var R = S.attrs, N = S.componentStyle, P = S.defaultProps, z = S.foldedComponentIds, $ = S.shouldForwardProp, j = S.styledComponentId, U = S.target;
      process.env.NODE_ENV !== "production" && Qs(j);
      var H = function(B, C, X) {
        B === void 0 && (B = Mt);
        var D = it({}, C, { theme: B }), se = {};
        return X.forEach(function(K) {
          var G, O, ce, F = K;
          for (G in xr(F) && (F = F(D)), F)
            D[G] = se[G] = G === "className" ? (O = se[G], ce = F[G], O && ce ? O + " " + ce : O || ce) : F[G];
        }), [D, se];
      }(ep(y, et(sn), P) || Mt, y, R), ee = H[0], Z = H[1], Y = function(B, C, X, D) {
        var se = Xh(), K = Jh(), G = C ? B.generateAndInjectStyles(Mt, se, K) : B.generateAndInjectStyles(X, se, K);
        return process.env.NODE_ENV !== "production" && Qs(G), process.env.NODE_ENV !== "production" && !C && D && D(G), G;
      }(N, _, ee, process.env.NODE_ENV !== "production" ? S.warnTooManyClasses : void 0), ae = w, ne = Z.$as || y.$as || Z.as || y.as || U, ye = Fn(ne), k = Z !== y ? it({}, y, {}, Z) : y, I = {};
      for (var M in k)
        M[0] !== "$" && M !== "as" && (M === "forwardedAs" ? I.as = k[M] : ($ ? $(M, ol, ne) : !ye || ol(M)) && (I[M] = k[M]));
      return y.style && Z.style !== y.style && (I.style = it({}, y.style, {}, Z.style)), I.className = Array.prototype.concat(z, j, Y !== j ? Y : null, y.className, Z.className).filter(Boolean).join(" "), I.ref = ae, vp(ne, I);
    }(v, g, b, m);
  };
  return E.displayName = l, (v = Ie.forwardRef(E)).attrs = d, v.componentStyle = p, v.displayName = l, v.shouldForwardProp = h, v.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : go, v.styledComponentId = f, v.target = n ? e.target : e, v.withComponent = function(g) {
    var b = t.componentId, S = function(w, _) {
      if (w == null)
        return {};
      var R, N, P = {}, z = Object.keys(w);
      for (N = 0; N < z.length; N++)
        R = z[N], _.indexOf(R) >= 0 || (P[R] = w[R]);
      return P;
    }(t, ["componentId"]), y = b && b + "-" + (Fn(g) ? g : Oi(Ma(g)));
    return np(g, it({}, S, { attrs: d, componentId: y }), r);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(g) {
    this._foldedDefaultProps = n ? rp({}, e.defaultProps, g) : g;
  } }), process.env.NODE_ENV !== "production" && (Zh(l, f), v.warnTooManyClasses = function(g, b) {
    var S = {}, y = !1;
    return function(w) {
      if (!y && (S[w] = !0, Object.keys(S).length >= 200)) {
        var _ = b ? ' with the id of "' + b + '"' : "";
        console.warn("Over 200 classes were generated for component " + g + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), y = !0, S = {};
      }
    };
  }(l, f)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && M2(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var yl = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = Mt), !js.isValidElementType(n))
      return wt(1, String(n));
    var i = function() {
      return r(n, o, Fr.apply(void 0, arguments));
    };
    return i.withConfig = function(a) {
      return t(r, n, it({}, o, {}, a));
    }, i.attrs = function(a) {
      return t(r, n, it({}, o, { attrs: Array.prototype.concat(o.attrs, a).filter(Boolean) }));
    }, i;
  }(np, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  yl[e] = yl(e);
});
var p_ = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = Gh(r), Eo.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(r, n, o, i) {
    var a = i(er(this.rules, n, o, i).join(""), ""), s = this.componentId + r;
    o.insertRules(s, s, a);
  }, t.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, t.renderStyles = function(r, n, o, i) {
    r > 2 && Eo.registerId(this.componentId + r), this.removeStyles(r, o), this.createStyles(r, n, o, i);
  }, e;
}();
function v_(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = Fr.apply(void 0, [e].concat(r)), i = "sc-global-" + tp(JSON.stringify(o)), a = new p_(o, i);
  function s(c) {
    var l = Xh(), f = Jh(), d = et(sn), h = Je(l.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && Ie.Children.count(c.children) && console.warn("The global style component " + i + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), l.server && u(h, c, l, d, f), Sl(function() {
      if (!l.server)
        return u(h, c, l, d, f), function() {
          return a.removeStyles(h, l);
        };
    }, [h, c, l, d, f]), null;
  }
  function u(c, l, f, d, h) {
    if (a.isStatic)
      a.renderStyles(c, F2, f, h);
    else {
      var v = it({}, l, { theme: ep(l, d, s.defaultProps) });
      a.renderStyles(c, v, f, h);
    }
  }
  return process.env.NODE_ENV !== "production" && Zh(i), Ie.memo(s);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Vt = {
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
}, m_ = {
  algorithm: c2.darkAlgorithm,
  token: {
    colorBgBase: Vt.grey,
    colorTextBase: Vt.light,
    colorBorder: Vt.lightGrey,
    colorBgTextHover: Vt.light,
    colorBgTextActive: Vt.light,
    colorPrimary: Vt.light
  }
}, y_ = ({ children: e }) => /* @__PURE__ */ st(Qd, { theme: m_, children: /* @__PURE__ */ st(h_, { theme: Vt, children: e }) });
Fr`
  border: 1px solid red;
`;
const g_ = (e) => Fr`
  font-family: '${e}', sans-serif;
`, b_ = (e = "&") => Fr`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: t }) => t.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
Fr`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
const E_ = v_`
  body {
    background: ${({ theme: e }) => e.default};
    ${g_("Poppins")}
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


  ${b_("body")}

  .ant-popconfirm {
    z-index: 2;
  }
`, $_ = () => et(Hh), V_ = () => {
  St(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class z_ {
  async request(t, r, n = "query") {
    const o = {
      variables: r ? {
        payload: r
      } : void 0
    };
    let i;
    try {
      return n === "mutate" ? i = await Uc.mutate({
        mutation: t.gql,
        ...o
      }) : i = await Uc.query({
        query: t.gql,
        ...o
      }), [i?.data?.[t.method], null];
    } catch (a) {
      return _isDev_ && console.log(a), [null, a];
    }
  }
}
var op = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, gl = Ie.createContext && Ie.createContext(op), It = globalThis && globalThis.__assign || function() {
  return It = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, It.apply(this, arguments);
}, S_ = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function ip(e) {
  return e && e.map(function(t, r) {
    return Ie.createElement(t.tag, It({
      key: r
    }, t.attr), ip(t.child));
  });
}
function Qe(e) {
  return function(t) {
    return Ie.createElement(__, It({
      attr: It({}, e.attr)
    }, t), ip(e.child));
  };
}
function __(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, i = e.title, a = S_(e, ["attr", "size", "title"]), s = o || r.size || "1em", u;
    return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), Ie.createElement("svg", It({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: u,
      style: It(It({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Ie.createElement("title", null, i), e.children);
  };
  return gl !== void 0 ? Ie.createElement(gl.Consumer, null, function(r) {
    return t(r);
  }) : t(op);
}
function B_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] })(e);
}
function H_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function U_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function q_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function Q_(e) {
  return Qe({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function W_(e) {
  return Qe({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function G_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function Y_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function K_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function X_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function J_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function Z_(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function ew(e) {
  return Qe({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function tw(e) {
  return Qe({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const rw = (e) => /* @__PURE__ */ st(y_, { children: e() }), nw = (e) => /* @__PURE__ */ st(zy, { children: e() }), ow = (e) => /* @__PURE__ */ ja($a, { children: [
  e(),
  /* @__PURE__ */ st(E_, {})
] }), iw = (e) => (t = {}, r = []) => ({
  args: {
    ...e,
    ...t
  },
  decorators: r
});
export {
  B_ as AiOutlineClose,
  H_ as AiOutlineHtml5,
  U_ as AiOutlineInfoCircle,
  q_ as AiOutlineSwap,
  nw as AnimationDecorator,
  zy as AnimationProvider,
  m_ as AntdConfig,
  z_ as ApolloMiddleware,
  Q_ as BsJournals,
  W_ as BsSearch,
  Vt as DarkThemePalette,
  $y as Display,
  L_ as ErrorBoundary,
  E_ as GlobalStyles,
  G_ as GoTerminal,
  Y_ as GrClear,
  bp as LocalStorage,
  wp as LocalStorageClient,
  K_ as LuTestTube2,
  X_ as MdFindReplace,
  Hh as NotificationsContext,
  j_ as NotificationsProvider,
  P_ as PrivatePaths,
  Ly as RoutePaths,
  J_ as SlInfo,
  Z_ as SlSizeFullscreen,
  ow as StylesDecorator,
  ew as TfiSettings,
  rw as ThemeDecorator,
  y_ as ThemeProvider,
  tw as VscPlay,
  Uc as apolloClient,
  iw as createStorybookVariant,
  R_ as httpService,
  T_ as isFunction,
  x_ as isObject,
  Ep as isString,
  k_ as useAltKeyDown,
  F_ as useAnimations,
  N_ as useAsyncEffect,
  jy as useBooleanState,
  D_ as useDebounce,
  M_ as useFilteredEffect,
  I_ as useFullScreen,
  $_ as useNotifications,
  V_ as useOverflow
};
