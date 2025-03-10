import { jsxs as T, jsx as u, Fragment as er } from "react/jsx-runtime";
import { Page as sc } from "@strapi/strapi/admin";
import { useMatch as lc, Outlet as cc, useLocation as mo, NavLink as uc, useNavigate as fc, Routes as dc, Route as Ge } from "react-router-dom";
import { styled as xt } from "styled-components";
import { Flex as z, Box as F, Typography as K, Main as ss, SubNav as da, SubNavHeader as pa, SubNavSections as pc, SubNavSection as hc, SubNavLink as gc, useCallbackRef as bo, Table as yc, Thead as vc, Tr as Vr, Th as ls, IconButton as zn, Tbody as wo, Td as $o, EmptyStateLayout as mc, Loader as bc, Checkbox as So, LinkButton as wc, useComposedRefs as ce, Modal as V, Breadcrumbs as tr, Crumb as rr, Grid as oe, Field as P, TextInput as nr, SingleSelect as cs, SingleSelectOption as Gn, Button as Te, Toggle as $c, DatePicker as Sc, DateTimePicker as xc, JSONInput as Cc, NumberInput as Oc, Textarea as _c, TimePicker as Tc } from "@strapi/design-system";
import { Lightning as Pc, CaretDown as Ec, ExternalLink as Ac, Plus as Dc, Pencil as Rc, Trash as Ic, Eye as Mc, EyeStriked as Lc } from "@strapi/icons";
import * as O from "react";
import { useState as se, useRef as te, useEffect as Y, useMemo as Je, useCallback as ie, createContext as Vn, createElement as N, useContext as us, forwardRef as B, Fragment as Nc, Children as pt, isValidElement as Tr, cloneElement as xo, useLayoutEffect as fs, useReducer as kc, memo as ve } from "react";
import { EmptyDocuments as Fc } from "@strapi/icons/symbols";
import { useIntl as me } from "react-intl";
import { P as jc } from "./index-B7g6xzp-.mjs";
import * as ha from "use-context-selector";
import * as Uc from "react-dom";
import Bc, { flushSync as ds } from "react-dom";
const Wc = ({ startActions: e, endActions: t }) => !e && !t ? null : /* @__PURE__ */ T(
  z,
  {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    children: [
      /* @__PURE__ */ u(z, { gap: 2, wrap: "wrap", children: e }),
      /* @__PURE__ */ u(z, { gap: 2, shrink: 0, wrap: "wrap", children: t })
    ]
  }
), Hc = ({ children: e }) => /* @__PURE__ */ u(F, { paddingLeft: 10, paddingRight: 10, children: e }), zc = {
  S: 180,
  M: 250
};
xt(F)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $size: e }) => `${zc[e]}px`}, 1fr)
  );
  grid-gap: ${({ theme: e }) => e.spaces[4]};
`;
const ga = O.forwardRef(
  ({ navigationAction: e, primaryAction: t, secondaryAction: r, subtitle: n, title: o, sticky: a, width: i, ...s }, l) => {
    const c = typeof n == "string";
    return a ? /* @__PURE__ */ u(
      F,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: `${i}px`,
        zIndex: 1,
        "data-strapi-header-sticky": !0,
        children: /* @__PURE__ */ T(z, { justifyContent: "space-between", children: [
          /* @__PURE__ */ T(z, { children: [
            e && /* @__PURE__ */ u(F, { paddingRight: 3, children: e }),
            /* @__PURE__ */ T(F, { children: [
              /* @__PURE__ */ u(K, { variant: "beta", tag: "h1", ...s, children: o }),
              c ? /* @__PURE__ */ u(K, { variant: "pi", textColor: "neutral600", children: n }) : n
            ] }),
            r ? /* @__PURE__ */ u(F, { paddingLeft: 4, children: r }) : null
          ] }),
          /* @__PURE__ */ u(z, { children: t ? /* @__PURE__ */ u(F, { paddingLeft: 2, children: t }) : void 0 })
        ] })
      }
    ) : /* @__PURE__ */ T(
      F,
      {
        ref: l,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: e ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0,
        children: [
          e ? /* @__PURE__ */ u(F, { paddingBottom: 2, children: e }) : null,
          /* @__PURE__ */ T(z, { justifyContent: "space-between", children: [
            /* @__PURE__ */ T(z, { minWidth: 0, children: [
              /* @__PURE__ */ u(K, { tag: "h1", variant: "alpha", ...s, children: o }),
              r ? /* @__PURE__ */ u(F, { paddingLeft: 4, children: r }) : null
            ] }),
            t
          ] }),
          c ? /* @__PURE__ */ u(K, { variant: "epsilon", textColor: "neutral600", tag: "p", children: n }) : n
        ]
      }
    );
  }
), ps = (e) => {
  const t = O.useRef(null), [r, n] = O.useState(null), [o, a] = O.useState(!0);
  return O.useEffect(() => {
    t.current && n(t.current.getBoundingClientRect());
  }, [t]), /* @__PURE__ */ T(er, { children: [
    /* @__PURE__ */ u(
      "div",
      {
        style: { height: r?.height },
        children: o && /* @__PURE__ */ u(ga, { ref: t, ...e })
      }
    ),
    !o && /* @__PURE__ */ u(ga, { ...e, sticky: !0, width: r?.width })
  ] });
};
ps.displayName = "HeaderLayout";
const Gc = xt(F)`
  display: grid;
  grid-template-columns: ${({ $hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, Vc = xt(F)`
  overflow-x: hidden;
`, qc = ({ sideNav: e, children: t }) => /* @__PURE__ */ T(Gc, { $hasSideNav: !!e, children: [
  e,
  /* @__PURE__ */ u(Vc, { paddingBottom: 10, children: t })
] }), Ce = {
  Root: qc,
  Header: ps,
  Action: Wc,
  Content: Hc
}, Yc = ({ children: e, ...t }) => /* @__PURE__ */ u(ss, { ...t, children: e }), Kc = ({ children: e }) => (O.useEffect(() => {
  document.title = `${e} | Strapi`;
}, [e]), null), Ne = {
  Main: Yc,
  Title: Kc
}, hs = xt(Pc)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({ theme: e }) => e.colors.warning500};
  }
`, Qc = xt(gc)`
  &.active ${hs} {
    right: 13px;
  }
`, Xc = ({ sections: e }) => {
  const { pathname: t } = mo();
  return e ? /* @__PURE__ */ T(da, { children: [
    /* @__PURE__ */ u(pa, {}),
    /* @__PURE__ */ u(pc, { children: e.map((r) => /* @__PURE__ */ u(hc, { label: r.title, children: r.links.map((n) => /* @__PURE__ */ T(
      Qc,
      {
        tag: uc,
        withBullet: n.hasNotification,
        to: n.to,
        onClick: () => {
        },
        position: "relative",
        children: [
          n.label,
          n?.icon && /* @__PURE__ */ u(hs, { width: "1.5rem", height: "1.5rem" })
        ]
      },
      n.id
    )) }, r.id)) })
  ] }) : /* @__PURE__ */ u(da, { children: /* @__PURE__ */ u(pa, {}) });
}, Jc = ({ sections: e }) => (lc(`/${jc}/:tabId/*`), /* @__PURE__ */ T(Ce.Root, { sideNav: /* @__PURE__ */ u(Xc, { sections: e }), children: [
  /* @__PURE__ */ u(Ne.Title, { children: "LLM" }),
  /* @__PURE__ */ u(cc, {})
] }));
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function Ze(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function le(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ee(e) {
  le(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Pr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Zc(e, t) {
  le(2, arguments);
  var r = Ee(e).getTime(), n = Ze(t);
  return new Date(r + n);
}
var eu = {};
function qr() {
  return eu;
}
function tu(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function ru(e) {
  return le(1, arguments), e instanceof Date || Pr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nu(e) {
  if (le(1, arguments), !ru(e) && typeof e != "number")
    return !1;
  var t = Ee(e);
  return !isNaN(Number(t));
}
function ou(e, t) {
  le(2, arguments);
  var r = Ze(t);
  return Zc(e, -r);
}
var au = 864e5;
function iu(e) {
  le(1, arguments);
  var t = Ee(e), r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(), o = r - n;
  return Math.floor(o / au) + 1;
}
function Er(e) {
  le(1, arguments);
  var t = 1, r = Ee(e), n = r.getUTCDay(), o = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function gs(e) {
  le(1, arguments);
  var t = Ee(e), r = t.getUTCFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var o = Er(n), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var i = Er(a);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1;
}
function su(e) {
  le(1, arguments);
  var t = gs(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = Er(r);
  return n;
}
var lu = 6048e5;
function cu(e) {
  le(1, arguments);
  var t = Ee(e), r = Er(t).getTime() - su(t).getTime();
  return Math.round(r / lu) + 1;
}
function Ar(e, t) {
  var r, n, o, a, i, s, l, c;
  le(1, arguments);
  var f = qr(), d = Ze((r = (n = (o = (a = t?.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && n !== void 0 ? n : (l = f.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ee(e), g = p.getUTCDay(), h = (g < d ? 7 : 0) + g - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function ys(e, t) {
  var r, n, o, a, i, s, l, c;
  le(1, arguments);
  var f = Ee(e), d = f.getUTCFullYear(), p = qr(), g = Ze((r = (n = (o = (a = t?.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = p.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(d + 1, 0, g), h.setUTCHours(0, 0, 0, 0);
  var y = Ar(h, t), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(d, 0, g), v.setUTCHours(0, 0, 0, 0);
  var m = Ar(v, t);
  return f.getTime() >= y.getTime() ? d + 1 : f.getTime() >= m.getTime() ? d : d - 1;
}
function uu(e, t) {
  var r, n, o, a, i, s, l, c;
  le(1, arguments);
  var f = qr(), d = Ze((r = (n = (o = (a = t?.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = f.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), p = ys(e, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(p, 0, d), g.setUTCHours(0, 0, 0, 0);
  var h = Ar(g, t);
  return h;
}
var fu = 6048e5;
function du(e, t) {
  le(1, arguments);
  var r = Ee(e), n = Ar(r, t).getTime() - uu(r, t).getTime();
  return Math.round(n / fu) + 1;
}
function U(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
var je = {
  // Year
  y: function(t, r) {
    var n = t.getUTCFullYear(), o = n > 0 ? n : 1 - n;
    return U(r === "yy" ? o % 100 : o, r.length);
  },
  // Month
  M: function(t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : U(n + 1, 2);
  },
  // Day of the month
  d: function(t, r) {
    return U(t.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, r) {
    return U(t.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(t, r) {
    return U(t.getUTCHours(), r.length);
  },
  // Minute
  m: function(t, r) {
    return U(t.getUTCMinutes(), r.length);
  },
  // Second
  s: function(t, r) {
    return U(t.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(t, r) {
    var n = r.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, n - 3));
    return U(a, r.length);
  }
}, st = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, pu = {
  // Era
  G: function(t, r, n) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, r, n) {
    if (r === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return n.ordinalNumber(a, {
        unit: "year"
      });
    }
    return je.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, n, o) {
    var a = ys(t, o), i = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var s = i % 100;
      return U(s, 2);
    }
    return r === "Yo" ? n.ordinalNumber(i, {
      unit: "year"
    }) : U(i, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    var n = gs(t);
    return U(n, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    var n = t.getUTCFullYear();
    return U(n, r.length);
  },
  // Quarter
  Q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(o);
      case "QQ":
        return U(o, 2);
      case "Qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(o);
      case "qq":
        return U(o, 2);
      case "qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return je.M(t, r);
      case "Mo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "L":
        return String(o + 1);
      case "LL":
        return U(o + 1, 2);
      case "Lo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, r, n, o) {
    var a = du(t, o);
    return r === "wo" ? n.ordinalNumber(a, {
      unit: "week"
    }) : U(a, r.length);
  },
  // ISO week of year
  I: function(t, r, n) {
    var o = cu(t);
    return r === "Io" ? n.ordinalNumber(o, {
      unit: "week"
    }) : U(o, r.length);
  },
  // Day of the month
  d: function(t, r, n) {
    return r === "do" ? n.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : je.d(t, r);
  },
  // Day of year
  D: function(t, r, n) {
    var o = iu(t);
    return r === "Do" ? n.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : U(o, r.length);
  },
  // Day of week
  E: function(t, r, n) {
    var o = t.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, n, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(i);
      case "ee":
        return U(i, 2);
      case "eo":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, n, o) {
    var a = t.getUTCDay(), i = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(i);
      case "cc":
        return U(i, r.length);
      case "co":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, n) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return U(a, r.length);
      case "io":
        return n.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, n) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, n) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = st.noon : o === 0 ? a = st.midnight : a = o / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, n) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = st.evening : o >= 12 ? a = st.afternoon : o >= 4 ? a = st.morning : a = st.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, n) {
    if (r === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), n.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return je.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, n) {
    return r === "Ho" ? n.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : je.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, n) {
    var o = t.getUTCHours() % 12;
    return r === "Ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : U(o, r.length);
  },
  // Hour [1-24]
  k: function(t, r, n) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), r === "ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : U(o, r.length);
  },
  // Minute
  m: function(t, r, n) {
    return r === "mo" ? n.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : je.m(t, r);
  },
  // Second
  s: function(t, r, n) {
    return r === "so" ? n.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : je.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return je.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (r) {
      case "X":
        return va(i);
      case "XXXX":
      case "XX":
        return Ve(i);
      case "XXXXX":
      case "XXX":
      default:
        return Ve(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return va(i);
      case "xxxx":
      case "xx":
        return Ve(i);
      case "xxxxx":
      case "xxx":
      default:
        return Ve(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ya(i, ":");
      case "OOOO":
      default:
        return "GMT" + Ve(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ya(i, ":");
      case "zzzz":
      default:
        return "GMT" + Ve(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, n, o) {
    var a = o._originalDate || t, i = Math.floor(a.getTime() / 1e3);
    return U(i, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, n, o) {
    var a = o._originalDate || t, i = a.getTime();
    return U(i, r.length);
  }
};
function ya(e, t) {
  var r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), a = n % 60;
  if (a === 0)
    return r + String(o);
  var i = t;
  return r + String(o) + i + U(a, 2);
}
function va(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + U(Math.abs(e) / 60, 2);
  }
  return Ve(e, t);
}
function Ve(e, t) {
  var r = t || "", n = e > 0 ? "-" : "+", o = Math.abs(e), a = U(Math.floor(o / 60), 2), i = U(o % 60, 2);
  return n + a + r + i;
}
var ma = function(t, r) {
  switch (t) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, vs = function(t, r) {
  switch (t) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, hu = function(t, r) {
  var n = t.match(/(P+)(p+)?/) || [], o = n[1], a = n[2];
  if (!a)
    return ma(t, r);
  var i;
  switch (o) {
    case "P":
      i = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = r.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", ma(o, r)).replace("{{time}}", vs(a, r));
}, gu = {
  p: vs,
  P: hu
}, yu = ["D", "DD"], vu = ["YY", "YYYY"];
function mu(e) {
  return yu.indexOf(e) !== -1;
}
function bu(e) {
  return vu.indexOf(e) !== -1;
}
function ba(e, t, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var wu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, $u = function(t, r, n) {
  var o, a = wu[t];
  return typeof a == "string" ? o = a : r === 1 ? o = a.one : o = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
function hn(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var Su = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, xu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Cu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ou = {
  date: hn({
    formats: Su,
    defaultWidth: "full"
  }),
  time: hn({
    formats: xu,
    defaultWidth: "full"
  }),
  dateTime: hn({
    formats: Cu,
    defaultWidth: "full"
  })
}, _u = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Tu = function(t, r, n, o) {
  return _u[t];
};
function kt(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", o;
    if (n === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, i = r != null && r.width ? String(r.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      var s = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[l] || e.values[s];
    }
    var c = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[c];
  };
}
var Pu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Eu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Au = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Du = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Ru = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Iu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Mu = function(t, r) {
  var n = Number(t), o = n % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Lu = {
  ordinalNumber: Mu,
  era: kt({
    values: Pu,
    defaultWidth: "wide"
  }),
  quarter: kt({
    values: Eu,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: kt({
    values: Au,
    defaultWidth: "wide"
  }),
  day: kt({
    values: Du,
    defaultWidth: "wide"
  }),
  dayPeriod: kt({
    values: Ru,
    defaultWidth: "wide",
    formattingValues: Iu,
    defaultFormattingWidth: "wide"
  })
};
function Ft(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? ku(s, function(d) {
      return d.test(i);
    }) : Nu(s, function(d) {
      return d.test(i);
    }), c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = r.valueCallback ? r.valueCallback(c) : c;
    var f = t.slice(i.length);
    return {
      value: c,
      rest: f
    };
  };
}
function Nu(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function ku(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Fu(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n) return null;
    var o = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    var s = t.slice(o.length);
    return {
      value: i,
      rest: s
    };
  };
}
var ju = /^(\d+)(th|st|nd|rd)?/i, Uu = /\d+/i, Bu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Wu = {
  any: [/^b/i, /^(a|c)/i]
}, Hu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, zu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Vu = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, qu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Yu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ku = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Qu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Xu = {
  ordinalNumber: Fu({
    matchPattern: ju,
    parsePattern: Uu,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ft({
    matchPatterns: Bu,
    defaultMatchWidth: "wide",
    parsePatterns: Wu,
    defaultParseWidth: "any"
  }),
  quarter: Ft({
    matchPatterns: Hu,
    defaultMatchWidth: "wide",
    parsePatterns: zu,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ft({
    matchPatterns: Gu,
    defaultMatchWidth: "wide",
    parsePatterns: Vu,
    defaultParseWidth: "any"
  }),
  day: Ft({
    matchPatterns: qu,
    defaultMatchWidth: "wide",
    parsePatterns: Yu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ft({
    matchPatterns: Ku,
    defaultMatchWidth: "any",
    parsePatterns: Qu,
    defaultParseWidth: "any"
  })
}, Ju = {
  code: "en-US",
  formatDistance: $u,
  formatLong: Ou,
  formatRelative: Tu,
  localize: Lu,
  match: Xu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Zu = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ef = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tf = /^'([^]*?)'?$/, rf = /''/g, nf = /[a-zA-Z]/;
function of(e, t, r) {
  var n, o, a, i, s, l, c, f, d, p, g, h, y, v;
  le(2, arguments);
  var m = String(t), w = qr(), S = (n = (o = void 0) !== null && o !== void 0 ? o : w.locale) !== null && n !== void 0 ? n : Ju, _ = Ze((a = (i = (s = (l = void 0) !== null && l !== void 0 ? l : void 0) !== null && s !== void 0 ? s : w.firstWeekContainsDate) !== null && i !== void 0 ? i : (c = w.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(_ >= 1 && _ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = Ze((d = (p = (g = (h = void 0) !== null && h !== void 0 ? h : void 0) !== null && g !== void 0 ? g : w.weekStartsOn) !== null && p !== void 0 ? p : (y = w.locale) === null || y === void 0 || (v = y.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && d !== void 0 ? d : 0);
  if (!(b >= 0 && b <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var $ = Ee(e);
  if (!nu($))
    throw new RangeError("Invalid time value");
  var C = tu($), x = ou($, C), A = {
    firstWeekContainsDate: _,
    weekStartsOn: b,
    locale: S,
    _originalDate: $
  }, R = m.match(ef).map(function(D) {
    var E = D[0];
    if (E === "p" || E === "P") {
      var k = gu[E];
      return k(D, S.formatLong);
    }
    return D;
  }).join("").match(Zu).map(function(D) {
    if (D === "''")
      return "'";
    var E = D[0];
    if (E === "'")
      return af(D);
    var k = pu[E];
    if (k)
      return bu(D) && ba(D, t, String(e)), mu(D) && ba(D, t, String(e)), k(x, D, S.localize, A);
    if (E.match(nf))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + E + "`");
    return D;
  }).join("");
  return R;
}
function af(e) {
  var t = e.match(tf);
  return t ? t[1].replace(rf, "'") : e;
}
const gn = "cnnews.xplr.ru";
var or = ((e) => (e.SCRAPPER = `https://scrapper.${gn}`, e.PARSER = `https://parser.${gn}`, e.LLM = `https://llm.${gn}`, e))(or || {});
async function sf(e) {
  const t = `${or.SCRAPPER}/fetch-news/save-html`, r = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: Object.entries({
      url: e,
      bucket: "raw-data"
    }).map(([o, a]) => `${encodeURIComponent(o)}=${encodeURIComponent(a)}`).join("&")
  }, n = await fetch(t, r);
  if (!n.ok) {
    const o = await n.json();
    return console.warn("fetchPageToS3", o), {
      response: o,
      error: {
        status: n.status,
        statusText: n.statusText
      }
    };
  }
  return {
    response: await n.json(),
    error: null
  };
}
async function Co(e, t, r, n = null, o = null) {
  const a = {
    method: t
    // mode: "no-cors",
  };
  let i = `${e}${r}`;
  if (n) {
    const l = new URLSearchParams(n).toString();
    i = `${i}?${l}`;
  }
  if (t === "POST") {
    const l = new Headers();
    l.append("Content-Type", "application/json"), Object.assign(a, { headers: l }), Object.assign(a, { body: JSON.stringify(o ?? {}) });
  }
  return await fetch(i, a);
}
async function lf(e) {
  const t = await Co(or.PARSER, "POST", "/parse-url", null, {
    url: `http://${e}`,
    agent_uuid: "91b5d272-9dd1-474d-9728-5861b41dfbfc",
    temperature: 1,
    source: "cheshi"
  });
  if (!t.ok) {
    const r = await t.json();
    return console.warn("parseURL", r), {
      response: r,
      error: {
        status: t.status,
        statusText: t.statusText
      }
    };
  }
  return {
    response: await t.json(),
    error: null
  };
}
async function cf(e, t) {
  const r = await Co(or.LLM, "POST", "/v1/llm-process/url/process", null, {
    url: e,
    process_uuid: t
  });
  if (!r.ok) {
    const n = await r.json();
    return console.warn("startProcess", n), {
      response: n,
      error: {
        status: r.status,
        statusText: r.statusText
      }
    };
  }
  return {
    response: await r.json(),
    error: null
  };
}
async function uf(e) {
  const t = await Co(or.LLM, "GET", `/v1/operations/${e}`);
  if (!t.ok) {
    const r = await t.json();
    return console.warn("operationById", r), {
      response: r,
      error: {
        status: t.status,
        statusText: t.statusText
      }
    };
  }
  return {
    response: await t.json(),
    error: null
  };
}
const ff = (e) => {
  const [t, r] = se({}), n = te({});
  return Y(() => (Object.entries(e).forEach(([a, i]) => {
    if (!i || n.current[a]) return;
    const s = async () => {
      try {
        const l = await uf(i);
        if (l.error)
          return;
        const c = l.response, { operation: f, info: d } = c;
        r((p) => ({ ...p, [a]: c }));
      } catch (l) {
        console.error(`Ошибка при проверке статуса задачи ${a}:`, l);
      }
    };
    n.current[a] = setInterval(s, 2500), s();
  }), () => {
    Object.values(n.current).forEach(clearInterval);
  }), [e]), { taskStatuses: t, stopChecking: (a) => {
    n.current[a] && (clearInterval(n.current[a]), delete n.current[a], r((i) => ({ ...i, [a]: null })));
  } };
};
function ye(e, t) {
  const r = JSON.stringify(Array.from(t));
  window.localStorage.setItem(e, r);
}
function df(e) {
  const t = window.localStorage.getItem(e);
  return JSON.parse(t ?? "[]");
}
const Yr = ({ fgColor: e, bgColor: t, children: r }) => /* @__PURE__ */ u("div", { style: {
  tabSize: 4,
  lineHeight: "inherit",
  textIndent: 0,
  borderCollapse: "collapse",
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: e,
  display: "flex",
  alignItems: "center"
}, children: /* @__PURE__ */ u("div", { style: {
  tabSize: 4,
  lineHeight: "inherit",
  textIndent: 0,
  borderCollapse: "collapse",
  boxSizing: "border-box",
  borderStyle: "solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "9999px",
  borderWidth: "2px",
  borderColor: e,
  backgroundColor: t,
  padding: "2px"
}, children: /* @__PURE__ */ u("span", { style: {
  tabSize: 4,
  textIndent: 0,
  borderCollapse: "collapse",
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "#e5e7eb",
  fontSize: 0.875 + "rem",
  lineHeight: 1.25 + "rem",
  color: e
}, children: r }) }) }), wa = () => {
  const e = "rgb(107 114 128 / 1)";
  return /* @__PURE__ */ u(Yr, { fgColor: e, bgColor: "rgb(243 244 246 / 1)", children: /* @__PURE__ */ T(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        tabSize: 4,
        textIndent: 0,
        borderCollapse: "collapse",
        fontSize: 0.875 + "rem",
        lineHeight: 1.25 + "rem",
        color: e,
        width: 24,
        height: 24,
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: e,
        display: "block",
        verticalAlign: "middle",
        padding: 0.125 + "rem"
      },
      children: [
        /* @__PURE__ */ u("circle", { cx: "12", cy: "12", r: "1" }),
        /* @__PURE__ */ u("circle", { cx: "19", cy: "12", r: "1" }),
        /* @__PURE__ */ u("circle", { cx: "5", cy: "12", r: "1" })
      ]
    }
  ) });
}, pf = () => {
  const e = "rgb(249 115 22 / 1)";
  return /* @__PURE__ */ T(Yr, { fgColor: e, bgColor: "rgb(255 237 213 / 1)", children: [
    /* @__PURE__ */ T(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "status-spinner",
        style: {
          tabSize: 4,
          textIndent: 0,
          borderCollapse: "collapse",
          fontSize: 0.875 + "rem",
          lineHeight: 1.25 + "rem",
          color: e,
          width: 24,
          height: 24,
          fill: "none",
          stroke: "currentcolor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          boxSizing: "border-box",
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: e,
          display: "block",
          verticalAlign: "middle",
          padding: 0.125 + "rem"
        },
        children: [
          /* @__PURE__ */ u("line", { x1: "12", y1: "2", x2: "12", y2: "6" }),
          /* @__PURE__ */ u("line", { x1: "12", y1: "18", x2: "12", y2: "22" }),
          /* @__PURE__ */ u("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }),
          /* @__PURE__ */ u("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }),
          /* @__PURE__ */ u("line", { x1: "2", y1: "12", x2: "6", y2: "12" }),
          /* @__PURE__ */ u("line", { x1: "18", y1: "12", x2: "22", y2: "12" }),
          /* @__PURE__ */ u("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }),
          /* @__PURE__ */ u("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })
        ]
      }
    ),
    /* @__PURE__ */ u("style", { children: `
        svg.status-spinner {
          -webkit-animation: spin 4s linear infinite;
          -moz-animation: spin 4s linear infinite;
          animation: spin 4s linear infinite;
        }

        @-moz-keyframes spin {
          100% {
            -moz-transform: rotate(360deg);
          }
        }

        @-webkit-keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      ` })
  ] });
}, hf = () => {
  const e = "rgb(34 197 94 / 1)";
  return /* @__PURE__ */ u(Yr, { fgColor: e, bgColor: "rgb(220 252 231 / 1)", children: /* @__PURE__ */ u(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        tabSize: 4,
        textIndent: 0,
        borderCollapse: "collapse",
        fontSize: 0.875 + "rem",
        lineHeight: 1.25 + "rem",
        color: e,
        width: 24,
        height: 24,
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: e,
        display: "block",
        verticalAlign: "middle",
        padding: 0.125 + "rem"
      },
      children: /* @__PURE__ */ u("polyline", { points: "20 6 9 17 4 12" })
    }
  ) });
}, gf = () => {
  const e = "rgb(239 68 68 / 1)";
  return /* @__PURE__ */ u(Yr, { fgColor: e, bgColor: "rgb(254 226 226 / 1)", children: /* @__PURE__ */ T(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        tabSize: 4,
        textIndent: 0,
        borderCollapse: "collapse",
        fontSize: 0.875 + "rem",
        lineHeight: 1.25 + "rem",
        color: e,
        width: 24,
        height: 24,
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: e,
        display: "block",
        verticalAlign: "middle",
        padding: 0.125 + "rem"
      },
      children: [
        /* @__PURE__ */ u("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ u("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  ) });
}, yf = ({ status: e }) => {
  switch (e) {
    case "init":
      return /* @__PURE__ */ u(wa, {});
    case "inProgress":
      return /* @__PURE__ */ u(pf, {});
    case "success":
      return /* @__PURE__ */ u(hf, {});
    case "error":
      return /* @__PURE__ */ u(gf, {});
    default:
      return /* @__PURE__ */ u(wa, {});
  }
}, vf = () => /* @__PURE__ */ u("div", { style: {
  tabSize: 4,
  fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  lineHeight: "inherit",
  textIndent: 0,
  borderCollapse: "collapse",
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "#e5e7eb",
  height: 0.2 + "rem",
  // flexGrow: 1,
  width: "32px",
  backgroundColor: "rgb(209 213 219 / 1)",
  marginTop: "auto",
  marginBottom: "auto",
  marginRight: "calc(0.5rem)",
  marginLeft: "calc(0.5rem)"
} }), mf = ({ steps: e }) => /* @__PURE__ */ u(
  "div",
  {
    style: {
      display: "flex",
      flexDirection: "row",
      lineHeight: "inherit",
      textIndent: 0,
      borderCollapse: "collapse",
      boxSizing: "border-box",
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: "#e5e7eb",
      alignItems: "center"
    },
    children: e.map((t, r) => /* @__PURE__ */ T(
      "div",
      {
        style: {
          margin: 0,
          padding: 0,
          display: "inline-flex"
        },
        children: [
          /* @__PURE__ */ u(yf, { status: t.status }),
          r < e.length - 1 && /* @__PURE__ */ u(vf, {})
        ]
      },
      r
    ))
  }
);
function bf({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, o] = wf({ defaultProp: t, onChange: r }), a = e !== void 0, i = a ? e : n, s = bo(r), l = O.useCallback(
    (c) => {
      if (a) {
        const d = typeof c == "function" ? c(e) : c;
        d !== e && s(d);
      } else
        o(c);
    },
    [a, e, o, s]
  );
  return [i, l];
}
function wf({
  defaultProp: e,
  onChange: t
}) {
  const r = O.useState(e), [n] = r, o = O.useRef(n), a = bo(t);
  return O.useEffect(() => {
    o.current !== n && (a(n), o.current = n);
  }, [n, o, a]), r;
}
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $f(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ct = TypeError;
const Sf = {}, xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sf
}, Symbol.toStringTag, { value: "Module" })), Cf = /* @__PURE__ */ $f(xf);
var _o = typeof Map == "function" && Map.prototype, yn = Object.getOwnPropertyDescriptor && _o ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Dr = _o && yn && typeof yn.get == "function" ? yn.get : null, $a = _o && Map.prototype.forEach, To = typeof Set == "function" && Set.prototype, vn = Object.getOwnPropertyDescriptor && To ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Rr = To && vn && typeof vn.get == "function" ? vn.get : null, Sa = To && Set.prototype.forEach, Of = typeof WeakMap == "function" && WeakMap.prototype, zt = Of ? WeakMap.prototype.has : null, _f = typeof WeakSet == "function" && WeakSet.prototype, Gt = _f ? WeakSet.prototype.has : null, Tf = typeof WeakRef == "function" && WeakRef.prototype, xa = Tf ? WeakRef.prototype.deref : null, Pf = Boolean.prototype.valueOf, Ef = Object.prototype.toString, Af = Function.prototype.toString, Df = String.prototype.match, Po = String.prototype.slice, Ue = String.prototype.replace, Rf = String.prototype.toUpperCase, Ca = String.prototype.toLowerCase, ms = RegExp.prototype.test, Oa = Array.prototype.concat, Se = Array.prototype.join, If = Array.prototype.slice, _a = Math.floor, qn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, mn = Object.getOwnPropertySymbols, Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, yt = typeof Symbol == "function" && typeof Symbol.iterator == "object", Vt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === yt || !0) ? Symbol.toStringTag : null, bs = Object.prototype.propertyIsEnumerable, Ta = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
  return e.__proto__;
} : null);
function Pa(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ms.call(/e/, t))
    return t;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var n = e < 0 ? -_a(-e) : _a(e);
    if (n !== e) {
      var o = String(n), a = Po.call(t, o.length + 1);
      return Ue.call(o, r, "$&_") + "." + Ue.call(Ue.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ue.call(t, r, "$&_");
}
var Kn = Cf, Ea = Kn.custom, Aa = Ss(Ea) ? Ea : null, ws = {
  __proto__: null,
  double: '"',
  single: "'"
}, Mf = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Kr = function e(t, r, n, o) {
  var a = r || {};
  if (Ie(a, "quoteStyle") && !Ie(ws, a.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ie(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Ie(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ie(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ie(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return Cs(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var l = String(t);
    return s ? Pa(t, l) : l;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return s ? Pa(t, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof t == "object")
    return Qn(t) ? "[Array]" : "[Object]";
  var d = Jf(a, n);
  if (typeof o > "u")
    o = [];
  else if (xs(o, t) >= 0)
    return "[Circular]";
  function p(k, I, W) {
    if (I && (o = If.call(o), o.push(I)), W) {
      var j = {
        depth: a.depth
      };
      return Ie(a, "quoteStyle") && (j.quoteStyle = a.quoteStyle), e(k, j, n + 1, o);
    }
    return e(k, a, n + 1, o);
  }
  if (typeof t == "function" && !Da(t)) {
    var g = Hf(t), h = vr(t, p);
    return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (h.length > 0 ? " { " + Se.call(h, ", ") + " }" : "");
  }
  if (Ss(t)) {
    var y = yt ? Ue.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Yn.call(t);
    return typeof t == "object" && !yt ? jt(y) : y;
  }
  if (Kf(t)) {
    for (var v = "<" + Ca.call(String(t.nodeName)), m = t.attributes || [], w = 0; w < m.length; w++)
      v += " " + m[w].name + "=" + $s(Lf(m[w].value), "double", a);
    return v += ">", t.childNodes && t.childNodes.length && (v += "..."), v += "</" + Ca.call(String(t.nodeName)) + ">", v;
  }
  if (Qn(t)) {
    if (t.length === 0)
      return "[]";
    var S = vr(t, p);
    return d && !Xf(S) ? "[" + Xn(S, d) + "]" : "[ " + Se.call(S, ", ") + " ]";
  }
  if (kf(t)) {
    var _ = vr(t, p);
    return !("cause" in Error.prototype) && "cause" in t && !bs.call(t, "cause") ? "{ [" + String(t) + "] " + Se.call(Oa.call("[cause]: " + p(t.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Se.call(_, ", ") + " }";
  }
  if (typeof t == "object" && i) {
    if (Aa && typeof t[Aa] == "function" && Kn)
      return Kn(t, { depth: f - n });
    if (i !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (zf(t)) {
    var b = [];
    return $a && $a.call(t, function(k, I) {
      b.push(p(I, t, !0) + " => " + p(k, t));
    }), Ra("Map", Dr.call(t), b, d);
  }
  if (qf(t)) {
    var $ = [];
    return Sa && Sa.call(t, function(k) {
      $.push(p(k, t));
    }), Ra("Set", Rr.call(t), $, d);
  }
  if (Gf(t))
    return bn("WeakMap");
  if (Yf(t))
    return bn("WeakSet");
  if (Vf(t))
    return bn("WeakRef");
  if (jf(t))
    return jt(p(Number(t)));
  if (Bf(t))
    return jt(p(qn.call(t)));
  if (Uf(t))
    return jt(Pf.call(t));
  if (Ff(t))
    return jt(p(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && t === globalThis || typeof ft < "u" && t === ft)
    return "{ [object globalThis] }";
  if (!Nf(t) && !Da(t)) {
    var C = vr(t, p), x = Ta ? Ta(t) === Object.prototype : t instanceof Object || t.constructor === Object, A = t instanceof Object ? "" : "null prototype", R = !x && Vt && Object(t) === t && Vt in t ? Po.call(ze(t), 8, -1) : A ? "Object" : "", D = x || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", E = D + (R || A ? "[" + Se.call(Oa.call([], R || [], A || []), ": ") + "] " : "");
    return C.length === 0 ? E + "{}" : d ? E + "{" + Xn(C, d) + "}" : E + "{ " + Se.call(C, ", ") + " }";
  }
  return String(t);
};
function $s(e, t, r) {
  var n = r.quoteStyle || t, o = ws[n];
  return o + e + o;
}
function Lf(e) {
  return Ue.call(String(e), /"/g, "&quot;");
}
function rt(e) {
  return !Vt || !(typeof e == "object" && (Vt in e || typeof e[Vt] < "u"));
}
function Qn(e) {
  return ze(e) === "[object Array]" && rt(e);
}
function Nf(e) {
  return ze(e) === "[object Date]" && rt(e);
}
function Da(e) {
  return ze(e) === "[object RegExp]" && rt(e);
}
function kf(e) {
  return ze(e) === "[object Error]" && rt(e);
}
function Ff(e) {
  return ze(e) === "[object String]" && rt(e);
}
function jf(e) {
  return ze(e) === "[object Number]" && rt(e);
}
function Uf(e) {
  return ze(e) === "[object Boolean]" && rt(e);
}
function Ss(e) {
  if (yt)
    return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol")
    return !0;
  if (!e || typeof e != "object" || !Yn)
    return !1;
  try {
    return Yn.call(e), !0;
  } catch {
  }
  return !1;
}
function Bf(e) {
  if (!e || typeof e != "object" || !qn)
    return !1;
  try {
    return qn.call(e), !0;
  } catch {
  }
  return !1;
}
var Wf = Object.prototype.hasOwnProperty || function(e) {
  return e in this;
};
function Ie(e, t) {
  return Wf.call(e, t);
}
function ze(e) {
  return Ef.call(e);
}
function Hf(e) {
  if (e.name)
    return e.name;
  var t = Df.call(Af.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function xs(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] === t)
      return r;
  return -1;
}
function zf(e) {
  if (!Dr || !e || typeof e != "object")
    return !1;
  try {
    Dr.call(e);
    try {
      Rr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {
  }
  return !1;
}
function Gf(e) {
  if (!zt || !e || typeof e != "object")
    return !1;
  try {
    zt.call(e, zt);
    try {
      Gt.call(e, Gt);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Vf(e) {
  if (!xa || !e || typeof e != "object")
    return !1;
  try {
    return xa.call(e), !0;
  } catch {
  }
  return !1;
}
function qf(e) {
  if (!Rr || !e || typeof e != "object")
    return !1;
  try {
    Rr.call(e);
    try {
      Dr.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {
  }
  return !1;
}
function Yf(e) {
  if (!Gt || !e || typeof e != "object")
    return !1;
  try {
    Gt.call(e, Gt);
    try {
      zt.call(e, zt);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Kf(e) {
  return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Cs(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Cs(Po.call(e, 0, t.maxStringLength), t) + n;
  }
  var o = Mf[t.quoteStyle || "single"];
  o.lastIndex = 0;
  var a = Ue.call(Ue.call(e, o, "\\$1"), /[\x00-\x1f]/g, Qf);
  return $s(a, "single", t);
}
function Qf(e) {
  var t = e.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Rf.call(t.toString(16));
}
function jt(e) {
  return "Object(" + e + ")";
}
function bn(e) {
  return e + " { ? }";
}
function Ra(e, t, r, n) {
  var o = n ? Xn(r, n) : Se.call(r, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function Xf(e) {
  for (var t = 0; t < e.length; t++)
    if (xs(e[t], `
`) >= 0)
      return !1;
  return !0;
}
function Jf(e, t) {
  var r;
  if (e.indent === "	")
    r = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    r = Se.call(Array(e.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Se.call(Array(t + 1), r)
  };
}
function Xn(e, t) {
  if (e.length === 0)
    return "";
  var r = `
` + t.prev + t.base;
  return r + Se.call(e, "," + r) + `
` + t.prev;
}
function vr(e, t) {
  var r = Qn(e), n = [];
  if (r) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++)
      n[o] = Ie(e, o) ? t(e[o], e) : "";
  }
  var a = typeof mn == "function" ? mn(e) : [], i;
  if (yt) {
    i = {};
    for (var s = 0; s < a.length; s++)
      i["$" + a[s]] = a[s];
  }
  for (var l in e)
    Ie(e, l) && (r && String(Number(l)) === l && l < e.length || yt && i["$" + l] instanceof Symbol || (ms.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e))));
  if (typeof mn == "function")
    for (var c = 0; c < a.length; c++)
      bs.call(e, a[c]) && n.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
  return n;
}
var Zf = Kr, ed = Ct, Qr = function(e, t, r) {
  for (var n = e, o; (o = n.next) != null; n = o)
    if (o.key === t)
      return n.next = o.next, r || (o.next = /** @type {NonNullable<typeof list.next>} */
      e.next, e.next = o), o;
}, td = function(e, t) {
  if (e) {
    var r = Qr(e, t);
    return r && r.value;
  }
}, rd = function(e, t, r) {
  var n = Qr(e, t);
  n ? n.value = r : e.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: t,
    next: e.next,
    value: r
  };
}, nd = function(e, t) {
  return e ? !!Qr(e, t) : !1;
}, od = function(e, t) {
  if (e)
    return Qr(e, t, !0);
}, ad = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new ed("Side channel does not contain " + Zf(n));
    },
    delete: function(n) {
      var o = t && t.next, a = od(t, n);
      return a && o && o === a && (t = void 0), !!a;
    },
    get: function(n) {
      return td(t, n);
    },
    has: function(n) {
      return nd(t, n);
    },
    set: function(n, o) {
      t || (t = {
        next: void 0
      }), rd(
        /** @type {NonNullable<typeof $o>} */
        t,
        n,
        o
      );
    }
  };
  return r;
}, Os = Object, id = Error, sd = EvalError, ld = RangeError, cd = ReferenceError, ud = SyntaxError, fd = URIError, dd = Math.abs, pd = Math.floor, hd = Math.max, gd = Math.min, yd = Math.pow, vd = Math.round, md = Number.isNaN || function(t) {
  return t !== t;
}, bd = md, wd = function(t) {
  return bd(t) || t === 0 ? t : t < 0 ? -1 : 1;
}, $d = Object.getOwnPropertyDescriptor, Sr = $d;
if (Sr)
  try {
    Sr([], "length");
  } catch {
    Sr = null;
  }
var _s = Sr, xr = Object.defineProperty || !1;
if (xr)
  try {
    xr({}, "a", { value: 1 });
  } catch {
    xr = !1;
  }
var Sd = xr, wn, Ia;
function xd() {
  return Ia || (Ia = 1, wn = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[r] = o;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), wn;
}
var $n, Ma;
function Cd() {
  if (Ma) return $n;
  Ma = 1;
  var e = typeof Symbol < "u" && Symbol, t = xd();
  return $n = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, $n;
}
var Sn, La;
function Ts() {
  return La || (La = 1, Sn = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Sn;
}
var xn, Na;
function Ps() {
  if (Na) return xn;
  Na = 1;
  var e = Os;
  return xn = e.getPrototypeOf || null, xn;
}
var Cn, ka;
function Od() {
  if (ka) return Cn;
  ka = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(l, c) {
    for (var f = [], d = 0; d < l.length; d += 1)
      f[d] = l[d];
    for (var p = 0; p < c.length; p += 1)
      f[p + l.length] = c[p];
    return f;
  }, a = function(l, c) {
    for (var f = [], d = c, p = 0; d < l.length; d += 1, p += 1)
      f[p] = l[d];
    return f;
  }, i = function(s, l) {
    for (var c = "", f = 0; f < s.length; f += 1)
      c += s[f], f + 1 < s.length && (c += l);
    return c;
  };
  return Cn = function(l) {
    var c = this;
    if (typeof c != "function" || t.apply(c) !== n)
      throw new TypeError(e + c);
    for (var f = a(arguments, 1), d, p = function() {
      if (this instanceof d) {
        var m = c.apply(
          this,
          o(f, arguments)
        );
        return Object(m) === m ? m : this;
      }
      return c.apply(
        l,
        o(f, arguments)
      );
    }, g = r(0, c.length - f.length), h = [], y = 0; y < g; y++)
      h[y] = "$" + y;
    if (d = Function("binder", "return function (" + i(h, ",") + "){ return binder.apply(this,arguments); }")(p), c.prototype) {
      var v = function() {
      };
      v.prototype = c.prototype, d.prototype = new v(), v.prototype = null;
    }
    return d;
  }, Cn;
}
var On, Fa;
function Xr() {
  if (Fa) return On;
  Fa = 1;
  var e = Od();
  return On = Function.prototype.bind || e, On;
}
var _n, ja;
function Eo() {
  return ja || (ja = 1, _n = Function.prototype.call), _n;
}
var Tn, Ua;
function Es() {
  return Ua || (Ua = 1, Tn = Function.prototype.apply), Tn;
}
var _d = typeof Reflect < "u" && Reflect && Reflect.apply, Td = Xr(), Pd = Es(), Ed = Eo(), Ad = _d, Dd = Ad || Td.call(Ed, Pd), Rd = Xr(), Id = Ct, Md = Eo(), Ld = Dd, As = function(t) {
  if (t.length < 1 || typeof t[0] != "function")
    throw new Id("a function is required");
  return Ld(Rd, Md, t);
}, Pn, Ba;
function Nd() {
  if (Ba) return Pn;
  Ba = 1;
  var e = As, t = _s, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return Pn = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : o(s));
    }
  ) : !1, Pn;
}
var En, Wa;
function kd() {
  if (Wa) return En;
  Wa = 1;
  var e = Ts(), t = Ps(), r = Nd();
  return En = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : r ? function(o) {
    return r(o);
  } : null, En;
}
var An, Ha;
function Fd() {
  if (Ha) return An;
  Ha = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Xr();
  return An = r.call(e, t), An;
}
var L, jd = Os, Ud = id, Bd = sd, Wd = ld, Hd = cd, vt = ud, ht = Ct, zd = fd, Gd = dd, Vd = pd, qd = hd, Yd = gd, Kd = yd, Qd = vd, Xd = wd, Ds = Function, Dn = function(e) {
  try {
    return Ds('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, Yt = _s, Jd = Sd, Rn = function() {
  throw new ht();
}, Zd = Yt ? function() {
  try {
    return arguments.callee, Rn;
  } catch {
    try {
      return Yt(arguments, "callee").get;
    } catch {
      return Rn;
    }
  }
}() : Rn, lt = Cd()(), Z = kd(), ep = Ps(), tp = Ts(), Rs = Es(), ar = Eo(), ut = {}, rp = typeof Uint8Array > "u" || !Z ? L : Z(Uint8Array), Xe = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? L : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? L : ArrayBuffer,
  "%ArrayIteratorPrototype%": lt && Z ? Z([][Symbol.iterator]()) : L,
  "%AsyncFromSyncIteratorPrototype%": L,
  "%AsyncFunction%": ut,
  "%AsyncGenerator%": ut,
  "%AsyncGeneratorFunction%": ut,
  "%AsyncIteratorPrototype%": ut,
  "%Atomics%": typeof Atomics > "u" ? L : Atomics,
  "%BigInt%": typeof BigInt > "u" ? L : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? L : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? L : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? L : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Ud,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Bd,
  "%Float32Array%": typeof Float32Array > "u" ? L : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? L : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? L : FinalizationRegistry,
  "%Function%": Ds,
  "%GeneratorFunction%": ut,
  "%Int8Array%": typeof Int8Array > "u" ? L : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? L : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? L : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": lt && Z ? Z(Z([][Symbol.iterator]())) : L,
  "%JSON%": typeof JSON == "object" ? JSON : L,
  "%Map%": typeof Map > "u" ? L : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !lt || !Z ? L : Z((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": jd,
  "%Object.getOwnPropertyDescriptor%": Yt,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? L : Promise,
  "%Proxy%": typeof Proxy > "u" ? L : Proxy,
  "%RangeError%": Wd,
  "%ReferenceError%": Hd,
  "%Reflect%": typeof Reflect > "u" ? L : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? L : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !lt || !Z ? L : Z((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? L : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": lt && Z ? Z(""[Symbol.iterator]()) : L,
  "%Symbol%": lt ? Symbol : L,
  "%SyntaxError%": vt,
  "%ThrowTypeError%": Zd,
  "%TypedArray%": rp,
  "%TypeError%": ht,
  "%Uint8Array%": typeof Uint8Array > "u" ? L : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? L : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? L : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? L : Uint32Array,
  "%URIError%": zd,
  "%WeakMap%": typeof WeakMap > "u" ? L : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? L : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? L : WeakSet,
  "%Function.prototype.call%": ar,
  "%Function.prototype.apply%": Rs,
  "%Object.defineProperty%": Jd,
  "%Object.getPrototypeOf%": ep,
  "%Math.abs%": Gd,
  "%Math.floor%": Vd,
  "%Math.max%": qd,
  "%Math.min%": Yd,
  "%Math.pow%": Kd,
  "%Math.round%": Qd,
  "%Math.sign%": Xd,
  "%Reflect.getPrototypeOf%": tp
};
if (Z)
  try {
    null.error;
  } catch (e) {
    var np = Z(Z(e));
    Xe["%Error.prototype%"] = np;
  }
var op = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Dn("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Dn("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Dn("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && Z && (r = Z(o.prototype));
  }
  return Xe[t] = r, r;
}, za = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ir = Xr(), Ir = Fd(), ap = ir.call(ar, Array.prototype.concat), ip = ir.call(Rs, Array.prototype.splice), Ga = ir.call(ar, String.prototype.replace), Mr = ir.call(ar, String.prototype.slice), sp = ir.call(ar, RegExp.prototype.exec), lp = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, cp = /\\(\\)?/g, up = function(t) {
  var r = Mr(t, 0, 1), n = Mr(t, -1);
  if (r === "%" && n !== "%")
    throw new vt("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new vt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Ga(t, lp, function(a, i, s, l) {
    o[o.length] = s ? Ga(l, cp, "$1") : i || a;
  }), o;
}, fp = function(t, r) {
  var n = t, o;
  if (Ir(za, n) && (o = za[n], n = "%" + o[0] + "%"), Ir(Xe, n)) {
    var a = Xe[n];
    if (a === ut && (a = op(n)), typeof a > "u" && !r)
      throw new ht("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new vt("intrinsic " + t + " does not exist!");
}, Ao = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new ht("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new ht('"allowMissing" argument must be a boolean');
  if (sp(/^%?[^%]*%?$/, t) === null)
    throw new vt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = up(t), o = n.length > 0 ? n[0] : "", a = fp("%" + o + "%", r), i = a.name, s = a.value, l = !1, c = a.alias;
  c && (o = c[0], ip(n, ap([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var p = n[f], g = Mr(p, 0, 1), h = Mr(p, -1);
    if ((g === '"' || g === "'" || g === "`" || h === '"' || h === "'" || h === "`") && g !== h)
      throw new vt("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (l = !0), o += "." + p, i = "%" + o + "%", Ir(Xe, i))
      s = Xe[i];
    else if (s != null) {
      if (!(p in s)) {
        if (!r)
          throw new ht("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (Yt && f + 1 >= n.length) {
        var y = Yt(s, p);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[p];
      } else
        d = Ir(s, p), s = s[p];
      d && !l && (Xe[i] = s);
    }
  }
  return s;
}, Is = Ao, Ms = As, dp = Ms([Is("%String.prototype.indexOf%")]), Ls = function(t, r) {
  var n = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    Is(t, !!r)
  );
  return typeof n == "function" && dp(t, ".prototype.") > -1 ? Ms([n]) : n;
}, pp = Ao, sr = Ls, hp = Kr, gp = Ct, Va = pp("%Map%", !0), yp = sr("Map.prototype.get", !0), vp = sr("Map.prototype.set", !0), mp = sr("Map.prototype.has", !0), bp = sr("Map.prototype.delete", !0), wp = sr("Map.prototype.size", !0), Ns = !!Va && /** @type {Exclude<import('.'), false>} */
function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new gp("Side channel does not contain " + hp(n));
    },
    delete: function(n) {
      if (t) {
        var o = bp(t, n);
        return wp(t) === 0 && (t = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (t)
        return yp(t, n);
    },
    has: function(n) {
      return t ? mp(t, n) : !1;
    },
    set: function(n, o) {
      t || (t = new Va()), vp(t, n, o);
    }
  };
  return r;
}, $p = Ao, Jr = Ls, Sp = Kr, mr = Ns, xp = Ct, ct = $p("%WeakMap%", !0), Cp = Jr("WeakMap.prototype.get", !0), Op = Jr("WeakMap.prototype.set", !0), _p = Jr("WeakMap.prototype.has", !0), Tp = Jr("WeakMap.prototype.delete", !0), Pp = ct ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var t, r, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new xp("Side channel does not contain " + Sp(o));
      },
      delete: function(o) {
        if (ct && o && (typeof o == "object" || typeof o == "function")) {
          if (t)
            return Tp(t, o);
        } else if (mr && r)
          return r.delete(o);
        return !1;
      },
      get: function(o) {
        return ct && o && (typeof o == "object" || typeof o == "function") && t ? Cp(t, o) : r && r.get(o);
      },
      has: function(o) {
        return ct && o && (typeof o == "object" || typeof o == "function") && t ? _p(t, o) : !!r && r.has(o);
      },
      set: function(o, a) {
        ct && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new ct()), Op(t, o, a)) : mr && (r || (r = mr()), r.set(o, a));
      }
    };
    return n;
  }
) : mr, Ep = Ct, Ap = Kr, Dp = ad, Rp = Ns, Ip = Pp, Mp = Ip || Rp || Dp, Lp = function() {
  var t, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Ep("Side channel does not contain " + Ap(n));
    },
    delete: function(n) {
      return !!t && t.delete(n);
    },
    get: function(n) {
      return t && t.get(n);
    },
    has: function(n) {
      return !!t && t.has(n);
    },
    set: function(n, o) {
      t || (t = Mp()), t.set(n, o);
    }
  };
  return r;
}, Np = String.prototype.replace, kp = /%20/g, In = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Do = {
  default: In.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return Np.call(e, kp, "+");
    },
    RFC3986: function(e) {
      return String(e);
    }
  },
  RFC1738: In.RFC1738,
  RFC3986: In.RFC3986
}, Fp = Do, Mn = Object.prototype.hasOwnProperty, Ke = Array.isArray, $e = function() {
  for (var e = [], t = 0; t < 256; ++t)
    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return e;
}(), jp = function(t) {
  for (; t.length > 1; ) {
    var r = t.pop(), n = r.obj[r.prop];
    if (Ke(n)) {
      for (var o = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && o.push(n[a]);
      r.obj[r.prop] = o;
    }
  }
}, ks = function(t, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < t.length; ++o)
    typeof t[o] < "u" && (n[o] = t[o]);
  return n;
}, Up = function e(t, r, n) {
  if (!r)
    return t;
  if (typeof r != "object") {
    if (Ke(t))
      t.push(r);
    else if (t && typeof t == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Mn.call(Object.prototype, r)) && (t[r] = !0);
    else
      return [t, r];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(r);
  var o = t;
  return Ke(t) && !Ke(r) && (o = ks(t, n)), Ke(t) && Ke(r) ? (r.forEach(function(a, i) {
    if (Mn.call(t, i)) {
      var s = t[i];
      s && typeof s == "object" && a && typeof a == "object" ? t[i] = e(s, a, n) : t.push(a);
    } else
      t[i] = a;
  }), t) : Object.keys(r).reduce(function(a, i) {
    var s = r[i];
    return Mn.call(a, i) ? a[i] = e(a[i], s, n) : a[i] = s, a;
  }, o);
}, Bp = function(t, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, t);
}, Wp = function(e, t, r) {
  var n = e.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Hp = function(t, r, n, o, a) {
  if (t.length === 0)
    return t;
  var i = t;
  if (typeof t == "symbol" ? i = Symbol.prototype.toString.call(t) : typeof t != "string" && (i = String(t)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < i.length; ++l) {
    var c = i.charCodeAt(l);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === Fp.RFC1738 && (c === 40 || c === 41)) {
      s += i.charAt(l);
      continue;
    }
    if (c < 128) {
      s = s + $e[c];
      continue;
    }
    if (c < 2048) {
      s = s + ($e[192 | c >> 6] + $e[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + ($e[224 | c >> 12] + $e[128 | c >> 6 & 63] + $e[128 | c & 63]);
      continue;
    }
    l += 1, c = 65536 + ((c & 1023) << 10 | i.charCodeAt(l) & 1023), s += $e[240 | c >> 18] + $e[128 | c >> 12 & 63] + $e[128 | c >> 6 & 63] + $e[128 | c & 63];
  }
  return s;
}, zp = function(t) {
  for (var r = [{ obj: { o: t }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var a = r[o], i = a.obj[a.prop], s = Object.keys(i), l = 0; l < s.length; ++l) {
      var c = s[l], f = i[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: i, prop: c }), n.push(f));
    }
  return jp(r), t;
}, Gp = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, Vp = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, qp = function(t, r) {
  return [].concat(t, r);
}, Yp = function(t, r) {
  if (Ke(t)) {
    for (var n = [], o = 0; o < t.length; o += 1)
      n.push(r(t[o]));
    return n;
  }
  return r(t);
}, Fs = {
  arrayToObject: ks,
  assign: Bp,
  combine: qp,
  compact: zp,
  decode: Wp,
  encode: Hp,
  isBuffer: Vp,
  isRegExp: Gp,
  maybeMap: Yp,
  merge: Up
}, js = Lp, Cr = Fs, qt = Do, Kp = Object.prototype.hasOwnProperty, qa = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, r) {
    return t + "[" + r + "]";
  },
  repeat: function(t) {
    return t;
  }
}, Me = Array.isArray, Qp = Array.prototype.push, Us = function(e, t) {
  Qp.apply(e, Me(t) ? t : [t]);
}, Xp = Date.prototype.toISOString, Ya = qt.default, ne = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Cr.encode,
  encodeValuesOnly: !1,
  format: Ya,
  formatter: qt.formatters[Ya],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return Xp.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Jp = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, Ln = {}, Zp = function e(t, r, n, o, a, i, s, l, c, f, d, p, g, h, y, v) {
  for (var m = t, w = v, S = 0, _ = !1; (w = w.get(Ln)) !== void 0 && !_; ) {
    var b = w.get(t);
    if (S += 1, typeof b < "u") {
      if (b === S)
        throw new RangeError("Cyclic object value");
      _ = !0;
    }
    typeof w.get(Ln) > "u" && (S = 0);
  }
  if (typeof l == "function" ? m = l(r, m) : m instanceof Date ? m = d(m) : n === "comma" && Me(m) && (m = Cr.maybeMap(m, function(j) {
    return j instanceof Date ? d(j) : j;
  })), m === null) {
    if (a)
      return s && !h ? s(r, ne.encoder, y, "key", p) : r;
    m = "";
  }
  if (Jp(m) || Cr.isBuffer(m)) {
    if (s) {
      var $ = h ? r : s(r, ne.encoder, y, "key", p);
      return [g($) + "=" + g(s(m, ne.encoder, y, "value", p))];
    }
    return [g(r) + "=" + g(String(m))];
  }
  var C = [];
  if (typeof m > "u")
    return C;
  var x;
  if (n === "comma" && Me(m))
    h && s && (m = Cr.maybeMap(m, s)), x = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (Me(l))
    x = l;
  else {
    var A = Object.keys(m);
    x = c ? A.sort(c) : A;
  }
  for (var R = o && Me(m) && m.length === 1 ? r + "[]" : r, D = 0; D < x.length; ++D) {
    var E = x[D], k = typeof E == "object" && typeof E.value < "u" ? E.value : m[E];
    if (!(i && k === null)) {
      var I = Me(m) ? typeof n == "function" ? n(R, E) : R : R + (f ? "." + E : "[" + E + "]");
      v.set(t, S);
      var W = js();
      W.set(Ln, v), Us(C, e(
        k,
        I,
        n,
        o,
        a,
        i,
        n === "comma" && h && Me(m) ? null : s,
        l,
        c,
        f,
        d,
        p,
        g,
        h,
        y,
        W
      ));
    }
  }
  return C;
}, eh = function(t) {
  if (!t)
    return ne;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = t.charset || ne.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = qt.default;
  if (typeof t.format < "u") {
    if (!Kp.call(qt.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    n = t.format;
  }
  var o = qt.formatters[n], a = ne.filter;
  return (typeof t.filter == "function" || Me(t.filter)) && (a = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : ne.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? ne.allowDots : !!t.allowDots,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ne.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? ne.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : ne.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : ne.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : ne.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: o,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : ne.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ne.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ne.strictNullHandling
  };
}, th = function(e, t) {
  var r = e, n = eh(t), o, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Me(n.filter) && (a = n.filter, o = a);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  t && t.arrayFormat in qa ? s = t.arrayFormat : t && "indices" in t ? s = t.indices ? "indices" : "repeat" : s = "indices";
  var l = qa[s];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = l === "comma" && t && t.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var f = js(), d = 0; d < o.length; ++d) {
    var p = o[d];
    n.skipNulls && r[p] === null || Us(i, Zp(
      r[p],
      p,
      l,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var g = i.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), g.length > 0 ? h + g : "";
}, mt = Fs, Jn = Object.prototype.hasOwnProperty, rh = Array.isArray, J = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: mt.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, nh = function(e) {
  return e.replace(/&#(\d+);/g, function(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Bs = function(e, t) {
  return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
}, oh = "utf8=%26%2310003%3B", ah = "utf8=%E2%9C%93", ih = function(t, r) {
  var n = {}, o = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, i = o.split(r.delimiter, a), s = -1, l, c = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === ah ? c = "utf-8" : i[l] === oh && (c = "iso-8859-1"), s = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== s) {
      var f = i[l], d = f.indexOf("]="), p = d === -1 ? f.indexOf("=") : d + 1, g, h;
      p === -1 ? (g = r.decoder(f, J.decoder, c, "key"), h = r.strictNullHandling ? null : "") : (g = r.decoder(f.slice(0, p), J.decoder, c, "key"), h = mt.maybeMap(
        Bs(f.slice(p + 1), r),
        function(y) {
          return r.decoder(y, J.decoder, c, "value");
        }
      )), h && r.interpretNumericEntities && c === "iso-8859-1" && (h = nh(h)), f.indexOf("[]=") > -1 && (h = rh(h) ? [h] : h), Jn.call(n, g) ? n[g] = mt.combine(n[g], h) : n[g] = h;
    }
  return n;
}, sh = function(e, t, r, n) {
  for (var o = n ? t : Bs(t, r), a = e.length - 1; a >= 0; --a) {
    var i, s = e[a];
    if (s === "[]" && r.parseArrays)
      i = [].concat(o);
    else {
      i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(l, 10);
      !r.parseArrays && l === "" ? i = { 0: o } : !isNaN(c) && s !== l && String(c) === l && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (i = [], i[c] = o) : l !== "__proto__" && (i[l] = o);
    }
    o = i;
  }
  return o;
}, lh = function(t, r, n, o) {
  if (t) {
    var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = n.depth > 0 && i.exec(a), c = l ? a.slice(0, l.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && Jn.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var d = 0; n.depth > 0 && (l = s.exec(a)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && Jn.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(l[1]);
    }
    return l && f.push("[" + a.slice(l.index) + "]"), sh(f, r, n, o);
  }
}, ch = function(t) {
  if (!t)
    return J;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof t.charset > "u" ? J.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? J.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : J.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : J.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : J.arrayLimit,
    charset: r,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : J.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : J.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : J.decoder,
    delimiter: typeof t.delimiter == "string" || mt.isRegExp(t.delimiter) ? t.delimiter : J.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : J.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : J.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : J.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : J.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : J.strictNullHandling
  };
}, uh = function(e, t) {
  var r = ch(t);
  if (e === "" || e === null || typeof e > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof e == "string" ? ih(e, r) : e, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), i = 0; i < a.length; ++i) {
    var s = a[i], l = lh(s, n[s], r, typeof e == "string");
    o = mt.merge(o, l, r);
  }
  return r.allowSparse === !0 ? o : mt.compact(o);
}, fh = th, dh = uh, ph = Do, Ka = {
  formats: ph,
  parse: dh,
  stringify: fh
};
const hh = (e) => {
  const { search: t } = mo(), r = fc(), n = Je(() => {
    const a = t.startsWith("?") ? t.slice(1) : t;
    return { ...e, ...Ka.parse(a) };
  }, [t, e]), o = ie(
    (a, i = "push", s = !1) => {
      let l = { ...n };
      i === "remove" ? Object.keys(a).forEach((c) => {
        Object.prototype.hasOwnProperty.call(l, c) && delete l[c];
      }) : l = { ...n, ...a }, r({ search: Ka.stringify(l, { encode: !1 }) }, { replace: s });
    },
    [r, n]
  );
  return [{ query: n, rawQuery: t }, o];
};
function Ws(e, t) {
  const r = ha.createContext(t), n = (a) => {
    const { children: i, ...s } = a, l = O.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u(r.Provider, { value: l, children: i });
  };
  function o(a, i) {
    return ha.useContextSelector(r, (s) => {
      if (s) return i(s);
      throw new Error(`\`${a}\` must be used within \`${e}\``);
    });
  }
  return n.displayName = e + "Provider", [n, o];
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Q.apply(null, arguments);
}
function Le(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented) return t?.(o);
  };
}
function gh(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Hs(...e) {
  return (t) => e.forEach(
    (r) => gh(r, t)
  );
}
function Ot(...e) {
  return ie(Hs(...e), e);
}
function zs(e, t = []) {
  let r = [];
  function n(a, i) {
    const s = /* @__PURE__ */ Vn(i), l = r.length;
    r = [
      ...r,
      i
    ];
    function c(d) {
      const { scope: p, children: g, ...h } = d, y = p?.[e][l] || s, v = Je(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ N(y.Provider, {
        value: v
      }, g);
    }
    function f(d, p) {
      const g = p?.[e][l] || s, h = us(g);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return c.displayName = a + "Provider", [
      c,
      f
    ];
  }
  const o = () => {
    const a = r.map((i) => /* @__PURE__ */ Vn(i));
    return function(s) {
      const l = s?.[e] || a;
      return Je(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: l
          }
        }),
        [
          s,
          l
        ]
      );
    };
  };
  return o.scopeName = e, [
    n,
    yh(o, ...t)
  ];
}
function yh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = n.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(a)[`__scope${c}`];
        return {
          ...s,
          ...d
        };
      }, {});
      return Je(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
const Gs = /* @__PURE__ */ B((e, t) => {
  const { children: r, ...n } = e, o = pt.toArray(r), a = o.find(vh);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? pt.count(i) > 1 ? pt.only(null) : /* @__PURE__ */ Tr(i) ? i.props.children : null : l);
    return /* @__PURE__ */ N(Zn, Q({}, n, {
      ref: t
    }), /* @__PURE__ */ Tr(i) ? /* @__PURE__ */ xo(i, void 0, s) : null);
  }
  return /* @__PURE__ */ N(Zn, Q({}, n, {
    ref: t
  }), r);
});
Gs.displayName = "Slot";
const Zn = /* @__PURE__ */ B((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ Tr(r) ? /* @__PURE__ */ xo(r, {
    ...mh(n, r.props),
    ref: t ? Hs(t, r.ref) : r.ref
  }) : pt.count(r) > 1 ? pt.only(null) : null;
});
Zn.displayName = "SlotClone";
const Vs = ({ children: e }) => /* @__PURE__ */ N(Nc, null, e);
function vh(e) {
  return /* @__PURE__ */ Tr(e) && e.type === Vs;
}
function mh(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const o = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
      a(...s), o(...s);
    } : o && (r[n] = o) : n === "style" ? r[n] = {
      ...o,
      ...a
    } : n === "className" && (r[n] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
const bh = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], nt = bh.reduce((e, t) => {
  const r = /* @__PURE__ */ B((n, o) => {
    const { asChild: a, ...i } = n, s = a ? Gs : t;
    return Y(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ N(s, Q({}, i, {
      ref: o
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function wh(e, t) {
  e && ds(
    () => e.dispatchEvent(t)
  );
}
function _t(e) {
  const t = te(e);
  return Y(() => {
    t.current = e;
  }), Je(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function $h(e, t = globalThis?.document) {
  const r = _t(e);
  Y(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const eo = "dismissableLayer.update", Sh = "dismissableLayer.pointerDownOutside", xh = "dismissableLayer.focusOutside";
let Qa;
const Ch = /* @__PURE__ */ Vn({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Oh = /* @__PURE__ */ B((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...c } = e, f = us(Ch), [d, p] = se(null), g = (r = d?.ownerDocument) !== null && r !== void 0 ? r : globalThis?.document, [, h] = se({}), y = Ot(
    t,
    (x) => p(x)
  ), v = Array.from(f.layers), [m] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = v.indexOf(m), S = d ? v.indexOf(d) : -1, _ = f.layersWithOutsidePointerEventsDisabled.size > 0, b = S >= w, $ = _h((x) => {
    const A = x.target, R = [
      ...f.branches
    ].some(
      (D) => D.contains(A)
    );
    !b || R || (a?.(x), s?.(x), x.defaultPrevented || l?.());
  }, g), C = Th((x) => {
    const A = x.target;
    [
      ...f.branches
    ].some(
      (D) => D.contains(A)
    ) || (i?.(x), s?.(x), x.defaultPrevented || l?.());
  }, g);
  return $h((x) => {
    S === f.layers.size - 1 && (o?.(x), !x.defaultPrevented && l && (x.preventDefault(), l()));
  }, g), Y(() => {
    if (d)
      return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Qa = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), Xa(), () => {
        n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Qa);
      };
  }, [
    d,
    g,
    n,
    f
  ]), Y(() => () => {
    d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), Xa());
  }, [
    d,
    f
  ]), Y(() => {
    const x = () => h({});
    return document.addEventListener(eo, x), () => document.removeEventListener(eo, x);
  }, []), /* @__PURE__ */ N(nt.div, Q({}, c, {
    ref: y,
    style: {
      pointerEvents: _ ? b ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Le(e.onFocusCapture, C.onFocusCapture),
    onBlurCapture: Le(e.onBlurCapture, C.onBlurCapture),
    onPointerDownCapture: Le(e.onPointerDownCapture, $.onPointerDownCapture)
  }));
});
function _h(e, t = globalThis?.document) {
  const r = _t(e), n = te(!1), o = te(() => {
  });
  return Y(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          qs(Sh, r, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
          once: !0
        })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Th(e, t = globalThis?.document) {
  const r = _t(e), n = te(!1);
  return Y(() => {
    const o = (a) => {
      a.target && !n.current && qs(xh, r, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    r
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Xa() {
  const e = new CustomEvent(eo);
  document.dispatchEvent(e);
}
function qs(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), n ? wh(o, a) : o.dispatchEvent(a);
}
const bt = globalThis?.document ? fs : () => {
}, Ph = O.useId || (() => {
});
let Eh = 0;
function Ah(e) {
  const [t, r] = O.useState(Ph());
  return bt(() => {
    r(
      (n) => n ?? String(Eh++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const Dh = ["top", "right", "bottom", "left"], Be = Math.min, ue = Math.max, Lr = Math.round, br = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), Rh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ih = {
  start: "end",
  end: "start"
};
function to(e, t, r) {
  return ue(e, Be(t, r));
}
function ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fe(e) {
  return e.split("-")[0];
}
function Tt(e) {
  return e.split("-")[1];
}
function Ro(e) {
  return e === "x" ? "y" : "x";
}
function Io(e) {
  return e === "y" ? "height" : "width";
}
function We(e) {
  return ["top", "bottom"].includes(Fe(e)) ? "y" : "x";
}
function Mo(e) {
  return Ro(We(e));
}
function Mh(e, t, r) {
  r === void 0 && (r = !1);
  const n = Tt(e), o = Mo(e), a = Io(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Nr(i)), [i, Nr(i)];
}
function Lh(e) {
  const t = Nr(e);
  return [ro(e), t, ro(t)];
}
function ro(e) {
  return e.replace(/start|end/g, (t) => Ih[t]);
}
function Nh(e, t, r) {
  const n = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function kh(e, t, r, n) {
  const o = Tt(e);
  let a = Nh(Fe(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ro)))), a;
}
function Nr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rh[t]);
}
function Fh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ys(e) {
  return typeof e != "number" ? Fh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function kr(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Ja(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const a = We(t), i = Mo(t), s = Io(i), l = Fe(t), c = a === "y", f = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, p = n[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (Tt(t)) {
    case "start":
      g[i] -= p * (r && c ? -1 : 1);
      break;
    case "end":
      g[i] += p * (r && c ? -1 : 1);
      break;
  }
  return g;
}
const jh = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = r, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Ja(c, n, l), p = n, g = {}, h = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: v,
      fn: m
    } = s[y], {
      x: w,
      y: S,
      data: _,
      reset: b
    } = await m({
      x: f,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, d = S ?? d, g = {
      ...g,
      [v]: {
        ...g[v],
        ..._
      }
    }, b && h <= 50 && (h++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (c = b.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: f,
      y: d
    } = Ja(c, p, l)), y = -1);
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: g
  };
};
async function Kt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: g = 0
  } = ke(t, e), h = Ys(g), v = s[p ? d === "floating" ? "reference" : "floating" : d], m = kr(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(v))) == null || r ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), w = d === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = kr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: S,
    strategy: l
  }) : w);
  return {
    top: (m.top - b.top + h.top) / _.y,
    bottom: (b.bottom - m.bottom + h.bottom) / _.y,
    left: (m.left - b.left + h.left) / _.x,
    right: (b.right - m.right + h.right) / _.x
  };
}
const Uh = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: f = 0
    } = ke(e, t) || {};
    if (c == null)
      return {};
    const d = Ys(f), p = {
      x: r,
      y: n
    }, g = Mo(o), h = Io(g), y = await i.getDimensions(c), v = g === "y", m = v ? "top" : "left", w = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", _ = a.reference[h] + a.reference[g] - p[g] - a.floating[h], b = p[g] - a.reference[g], $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let C = $ ? $[S] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement($))) && (C = s.floating[S] || a.floating[h]);
    const x = _ / 2 - b / 2, A = C / 2 - y[h] / 2 - 1, R = Be(d[m], A), D = Be(d[w], A), E = R, k = C - y[h] - D, I = C / 2 - y[h] / 2 + x, W = to(E, I, k), j = !l.arrow && Tt(o) != null && I !== W && a.reference[h] / 2 - (I < E ? R : D) - y[h] / 2 < 0, M = j ? I < E ? I - E : I - k : 0;
    return {
      [g]: p[g] + M,
      data: {
        [g]: W,
        centerOffset: I - W - M,
        ...j && {
          alignmentOffset: M
        }
      },
      reset: j
    };
  }
}), Bh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: y = !0,
        ...v
      } = ke(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const m = Fe(o), w = We(s), S = Fe(s) === s, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), b = p || (S || !y ? [Nr(s)] : Lh(s)), $ = h !== "none";
      !p && $ && b.push(...kh(s, y, h, _));
      const C = [s, ...b], x = await Kt(t, v), A = [];
      let R = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && A.push(x[m]), d) {
        const I = Mh(o, i, _);
        A.push(x[I[0]], x[I[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: A
      }], !A.every((I) => I <= 0)) {
        var D, E;
        const I = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1, W = C[I];
        if (W)
          return {
            data: {
              index: I,
              overflows: R
            },
            reset: {
              placement: W
            }
          };
        let j = (E = R.filter((M) => M.overflows[0] <= 0).sort((M, ae) => M.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!j)
          switch (g) {
            case "bestFit": {
              var k;
              const M = (k = R.filter((ae) => {
                if ($) {
                  const X = We(ae.placement);
                  return X === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((X) => X > 0).reduce((X, pn) => X + pn, 0)]).sort((ae, X) => ae[1] - X[1])[0]) == null ? void 0 : k[0];
              M && (j = M);
              break;
            }
            case "initialPlacement":
              j = s;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function Za(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ei(e) {
  return Dh.some((t) => e[t] >= 0);
}
const Wh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = ke(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Kt(t, {
            ...o,
            elementContext: "reference"
          }), i = Za(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ei(i)
            }
          };
        }
        case "escaped": {
          const a = await Kt(t, {
            ...o,
            altBoundary: !0
          }), i = Za(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ei(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Hh(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Fe(r), s = Tt(r), l = We(r) === "y", c = ["left", "top"].includes(i) ? -1 : 1, f = a && l ? -1 : 1, d = ke(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof h == "number" && (g = s === "end" ? h * -1 : h), l ? {
    x: g * f,
    y: p * c
  } : {
    x: p * c,
    y: g * f
  };
}
const zh = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await Hh(t, e);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Gh = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: m,
              y: w
            } = v;
            return {
              x: m,
              y: w
            };
          }
        },
        ...l
      } = ke(e, t), c = {
        x: r,
        y: n
      }, f = await Kt(t, l), d = We(Fe(o)), p = Ro(d);
      let g = c[p], h = c[d];
      if (a) {
        const v = p === "y" ? "top" : "left", m = p === "y" ? "bottom" : "right", w = g + f[v], S = g - f[m];
        g = to(w, g, S);
      }
      if (i) {
        const v = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", w = h + f[v], S = h - f[m];
        h = to(w, h, S);
      }
      const y = s.fn({
        ...t,
        [p]: g,
        [d]: h
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [p]: a,
            [d]: i
          }
        }
      };
    }
  };
}, Vh = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = ke(e, t), f = {
        x: r,
        y: n
      }, d = We(o), p = Ro(d);
      let g = f[p], h = f[d];
      const y = ke(s, t), v = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[S] + v.mainAxis, b = a.reference[p] + a.reference[S] - v.mainAxis;
        g < _ ? g = _ : g > b && (g = b);
      }
      if (c) {
        var m, w;
        const S = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Fe(o)), b = a.reference[d] - a.floating[S] + (_ && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (_ ? 0 : v.crossAxis), $ = a.reference[d] + a.reference[S] + (_ ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (_ ? v.crossAxis : 0);
        h < b ? h = b : h > $ && (h = $);
      }
      return {
        [p]: g,
        [d]: h
      };
    }
  };
}, qh = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = ke(e, t), f = await Kt(t, c), d = Fe(o), p = Tt(o), g = We(o) === "y", {
        width: h,
        height: y
      } = a.floating;
      let v, m;
      d === "top" || d === "bottom" ? (v = d, m = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = d, v = p === "end" ? "top" : "bottom");
      const w = y - f.top - f.bottom, S = h - f.left - f.right, _ = Be(y - f[v], w), b = Be(h - f[m], S), $ = !t.middlewareData.shift;
      let C = _, x = b;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (x = S), (n = t.middlewareData.shift) != null && n.enabled.y && (C = w), $ && !p) {
        const R = ue(f.left, 0), D = ue(f.right, 0), E = ue(f.top, 0), k = ue(f.bottom, 0);
        g ? x = h - 2 * (R !== 0 || D !== 0 ? R + D : ue(f.left, f.right)) : C = y - 2 * (E !== 0 || k !== 0 ? E + k : ue(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: x,
        availableHeight: C
      });
      const A = await i.getDimensions(s.floating);
      return h !== A.width || y !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zr() {
  return typeof window < "u";
}
function Pt(e) {
  return Ks(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ae(e) {
  var t;
  return (t = (Ks(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ks(e) {
  return Zr() ? e instanceof Node || e instanceof fe(e).Node : !1;
}
function be(e) {
  return Zr() ? e instanceof Element || e instanceof fe(e).Element : !1;
}
function Pe(e) {
  return Zr() ? e instanceof HTMLElement || e instanceof fe(e).HTMLElement : !1;
}
function ti(e) {
  return !Zr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
}
function lr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = we(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function Yh(e) {
  return ["table", "td", "th"].includes(Pt(e));
}
function en(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Lo(e) {
  const t = No(), r = be(e) ? we(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Kh(e) {
  let t = He(e);
  for (; Pe(t) && !wt(t); ) {
    if (Lo(t))
      return t;
    if (en(t))
      return null;
    t = He(t);
  }
  return null;
}
function No() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wt(e) {
  return ["html", "body", "#document"].includes(Pt(e));
}
function we(e) {
  return fe(e).getComputedStyle(e);
}
function tn(e) {
  return be(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function He(e) {
  if (Pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ti(e) && e.host || // Fallback.
    Ae(e)
  );
  return ti(t) ? t.host : t;
}
function Qs(e) {
  const t = He(e);
  return wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pe(t) && lr(t) ? t : Qs(t);
}
function Qt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Qs(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = fe(o);
  if (a) {
    const s = no(i);
    return t.concat(i, i.visualViewport || [], lr(o) ? o : [], s && r ? Qt(s) : []);
  }
  return t.concat(o, Qt(o, [], r));
}
function no(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xs(e) {
  const t = we(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Pe(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Lr(r) !== a || Lr(n) !== i;
  return s && (r = a, n = i), {
    width: r,
    height: n,
    $: s
  };
}
function ko(e) {
  return be(e) ? e : e.contextElement;
}
function gt(e) {
  const t = ko(e);
  if (!Pe(t))
    return Oe(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: a
  } = Xs(t);
  let i = (a ? Lr(r.width) : r.width) / n, s = (a ? Lr(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Qh = /* @__PURE__ */ Oe(0);
function Js(e) {
  const t = fe(e);
  return !No() || !t.visualViewport ? Qh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xh(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== fe(e) ? !1 : t;
}
function et(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), a = ko(e);
  let i = Oe(1);
  t && (n ? be(n) && (i = gt(n)) : i = gt(e));
  const s = Xh(a, r, n) ? Js(a) : Oe(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, f = o.width / i.x, d = o.height / i.y;
  if (a) {
    const p = fe(a), g = n && be(n) ? fe(n) : n;
    let h = p, y = no(h);
    for (; y && n && g !== h; ) {
      const v = gt(y), m = y.getBoundingClientRect(), w = we(y), S = m.left + (y.clientLeft + parseFloat(w.paddingLeft)) * v.x, _ = m.top + (y.clientTop + parseFloat(w.paddingTop)) * v.y;
      l *= v.x, c *= v.y, f *= v.x, d *= v.y, l += S, c += _, h = fe(y), y = no(h);
    }
  }
  return kr({
    width: f,
    height: d,
    x: l,
    y: c
  });
}
function Fo(e, t) {
  const r = tn(e).scrollLeft;
  return t ? t.left + r : et(Ae(e)).left + r;
}
function Zs(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Fo(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Jh(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const a = o === "fixed", i = Ae(n), s = t ? en(t.floating) : !1;
  if (n === i || s && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Oe(1);
  const f = Oe(0), d = Pe(n);
  if ((d || !d && !a) && ((Pt(n) !== "body" || lr(i)) && (l = tn(n)), Pe(n))) {
    const g = et(n);
    c = gt(n), f.x = g.x + n.clientLeft, f.y = g.y + n.clientTop;
  }
  const p = i && !d && !a ? Zs(i, l, !0) : Oe(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + f.x + p.x,
    y: r.y * c.y - l.scrollTop * c.y + f.y + p.y
  };
}
function Zh(e) {
  return Array.from(e.getClientRects());
}
function eg(e) {
  const t = Ae(e), r = tn(e), n = e.ownerDocument.body, o = ue(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = ue(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Fo(e);
  const s = -r.scrollTop;
  return we(n).direction === "rtl" && (i += ue(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function tg(e, t) {
  const r = fe(e), n = Ae(e), o = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const c = No();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function rg(e, t) {
  const r = et(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = Pe(e) ? gt(e) : Oe(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = n * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function ri(e, t, r) {
  let n;
  if (t === "viewport")
    n = tg(e, r);
  else if (t === "document")
    n = eg(Ae(e));
  else if (be(t))
    n = rg(t, r);
  else {
    const o = Js(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return kr(n);
}
function el(e, t) {
  const r = He(e);
  return r === t || !be(r) || wt(r) ? !1 : we(r).position === "fixed" || el(r, t);
}
function ng(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Qt(e, [], !1).filter((s) => be(s) && Pt(s) !== "body"), o = null;
  const a = we(e).position === "fixed";
  let i = a ? He(e) : e;
  for (; be(i) && !wt(i); ) {
    const s = we(i), l = Lo(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || lr(i) && !l && el(e, i)) ? n = n.filter((f) => f !== i) : o = s, i = He(i);
  }
  return t.set(e, n), n;
}
function og(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const i = [...r === "clippingAncestors" ? en(t) ? [] : ng(t, this._c) : [].concat(r), n], s = i[0], l = i.reduce((c, f) => {
    const d = ri(t, f, o);
    return c.top = ue(d.top, c.top), c.right = Be(d.right, c.right), c.bottom = Be(d.bottom, c.bottom), c.left = ue(d.left, c.left), c;
  }, ri(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ag(e) {
  const {
    width: t,
    height: r
  } = Xs(e);
  return {
    width: t,
    height: r
  };
}
function ig(e, t, r) {
  const n = Pe(t), o = Ae(t), a = r === "fixed", i = et(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Oe(0);
  if (n || !n && !a)
    if ((Pt(t) !== "body" || lr(o)) && (s = tn(t)), n) {
      const p = et(t, !0, a, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && (l.x = Fo(o));
  const c = o && !n && !a ? Zs(o, s) : Oe(0), f = i.left + s.scrollLeft - l.x - c.x, d = i.top + s.scrollTop - l.y - c.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Nn(e) {
  return we(e).position === "static";
}
function ni(e, t) {
  if (!Pe(e) || we(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Ae(e) === r && (r = r.ownerDocument.body), r;
}
function tl(e, t) {
  const r = fe(e);
  if (en(e))
    return r;
  if (!Pe(e)) {
    let o = He(e);
    for (; o && !wt(o); ) {
      if (be(o) && !Nn(o))
        return o;
      o = He(o);
    }
    return r;
  }
  let n = ni(e, t);
  for (; n && Yh(n) && Nn(n); )
    n = ni(n, t);
  return n && wt(n) && Nn(n) && !Lo(n) ? r : n || Kh(e) || r;
}
const sg = async function(e) {
  const t = this.getOffsetParent || tl, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: ig(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function lg(e) {
  return we(e).direction === "rtl";
}
const cg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jh,
  getDocumentElement: Ae,
  getClippingRect: og,
  getOffsetParent: tl,
  getElementRects: sg,
  getClientRects: Zh,
  getDimensions: ag,
  getScale: gt,
  isElement: be,
  isRTL: lg
};
function rl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ug(e, t) {
  let r = null, n;
  const o = Ae(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: p,
      height: g
    } = c;
    if (s || t(), !p || !g)
      return;
    const h = br(d), y = br(o.clientWidth - (f + p)), v = br(o.clientHeight - (d + g)), m = br(f), S = {
      rootMargin: -h + "px " + -y + "px " + -v + "px " + -m + "px",
      threshold: ue(0, Be(1, l)) || 1
    };
    let _ = !0;
    function b($) {
      const C = $[0].intersectionRatio;
      if (C !== l) {
        if (!_)
          return i();
        C ? i(!1, C) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !rl(c, e.getBoundingClientRect()) && i(), _ = !1;
    }
    try {
      r = new IntersectionObserver(b, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(b, S);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function fg(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = ko(e), f = o || a ? [...c ? Qt(c) : [], ...Qt(t)] : [];
  f.forEach((m) => {
    o && m.addEventListener("scroll", r, {
      passive: !0
    }), a && m.addEventListener("resize", r);
  });
  const d = c && s ? ug(c, r) : null;
  let p = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [w] = m;
    w && w.target === c && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), r();
  }), c && !l && g.observe(c), g.observe(t));
  let h, y = l ? et(e) : null;
  l && v();
  function v() {
    const m = et(e);
    y && !rl(y, m) && r(), y = m, h = requestAnimationFrame(v);
  }
  return r(), () => {
    var m;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", r), a && w.removeEventListener("resize", r);
    }), d?.(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(h);
  };
}
const dg = zh, pg = Gh, hg = Bh, gg = qh, yg = Wh, oi = Uh, vg = Vh, mg = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: cg,
    ...r
  }, a = {
    ...o.platform,
    _c: n
  };
  return jh(e, t, {
    ...o,
    platform: a
  });
};
var Or = typeof document < "u" ? fs : Y;
function Fr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Fr(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !Fr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function nl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ai(e, t) {
  const r = nl(e);
  return Math.round(t * r) / r;
}
function ii(e) {
  const t = O.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
function bg(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [f, d] = O.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, g] = O.useState(n);
  Fr(p, n) || g(n);
  const [h, y] = O.useState(null), [v, m] = O.useState(null), w = O.useCallback((M) => {
    M !== $.current && ($.current = M, y(M));
  }, []), S = O.useCallback((M) => {
    M !== C.current && (C.current = M, m(M));
  }, []), _ = a || h, b = i || v, $ = O.useRef(null), C = O.useRef(null), x = O.useRef(f), A = l != null, R = ii(l), D = ii(o), E = O.useCallback(() => {
    if (!$.current || !C.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: p
    };
    D.current && (M.platform = D.current), mg($.current, C.current, M).then((ae) => {
      const X = {
        ...ae,
        isPositioned: !0
      };
      k.current && !Fr(x.current, X) && (x.current = X, Uc.flushSync(() => {
        d(X);
      }));
    });
  }, [p, t, r, D]);
  Or(() => {
    c === !1 && x.current.isPositioned && (x.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [c]);
  const k = O.useRef(!1);
  Or(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Or(() => {
    if (_ && ($.current = _), b && (C.current = b), _ && b) {
      if (R.current)
        return R.current(_, b, E);
      E();
    }
  }, [_, b, E, R, A]);
  const I = O.useMemo(() => ({
    reference: $,
    floating: C,
    setReference: w,
    setFloating: S
  }), [w, S]), W = O.useMemo(() => ({
    reference: _,
    floating: b
  }), [_, b]), j = O.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return M;
    const ae = ai(W.floating, f.x), X = ai(W.floating, f.y);
    return s ? {
      ...M,
      transform: "translate(" + ae + "px, " + X + "px)",
      ...nl(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ae,
      top: X
    };
  }, [r, s, W.floating, f.x, f.y]);
  return O.useMemo(() => ({
    ...f,
    update: E,
    refs: I,
    elements: W,
    floatingStyles: j
  }), [f, E, I, W, j]);
}
const wg = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? oi({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? oi({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, $g = (e, t) => ({
  ...dg(e),
  options: [e, t]
}), Sg = (e, t) => ({
  ...pg(e),
  options: [e, t]
}), xg = (e, t) => ({
  ...vg(e),
  options: [e, t]
}), Cg = (e, t) => ({
  ...hg(e),
  options: [e, t]
}), Og = (e, t) => ({
  ...gg(e),
  options: [e, t]
}), _g = (e, t) => ({
  ...yg(e),
  options: [e, t]
}), Tg = (e, t) => ({
  ...wg(e),
  options: [e, t]
}), Pg = /* @__PURE__ */ B((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ N(nt.svg, Q({}, a, {
    ref: t,
    width: n,
    height: o,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? r : /* @__PURE__ */ N("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), Eg = Pg;
function Ag(e) {
  const [t, r] = se(void 0);
  return bt(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        r({
          width: i,
          height: s
        });
      });
      return n.observe(e, {
        box: "border-box"
      }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [
    e
  ]), t;
}
const ol = "Popper", [al, il] = zs(ol), [Dg, sl] = al(ol), Rg = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = se(null);
  return /* @__PURE__ */ N(Dg, {
    scope: t,
    anchor: n,
    onAnchorChange: o
  }, r);
}, Ig = "PopperAnchor", Mg = /* @__PURE__ */ B((e, t) => {
  const { __scopePopper: r, virtualRef: n, ...o } = e, a = sl(Ig, r), i = te(null), s = Ot(t, i);
  return Y(() => {
    a.onAnchorChange(n?.current || i.current);
  }), n ? null : /* @__PURE__ */ N(nt.div, Q({}, o, {
    ref: s
  }));
}), ll = "PopperContent", [Lg, Ng] = al(ll), kg = /* @__PURE__ */ B((e, t) => {
  var r, n, o, a, i, s, l, c;
  const { __scopePopper: f, side: d = "bottom", sideOffset: p = 0, align: g = "center", alignOffset: h = 0, arrowPadding: y = 0, avoidCollisions: v = !0, collisionBoundary: m = [], collisionPadding: w = 0, sticky: S = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: b = "optimized", onPlaced: $, ...C } = e, x = sl(ll, f), [A, R] = se(null), D = Ot(
    t,
    (Nt) => R(Nt)
  ), [E, k] = se(null), I = Ag(E), W = (r = I?.width) !== null && r !== void 0 ? r : 0, j = (n = I?.height) !== null && n !== void 0 ? n : 0, M = d + (g !== "center" ? "-" + g : ""), ae = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, X = Array.isArray(m) ? m : [
    m
  ], pn = X.length > 0, pr = {
    padding: ae,
    boundary: X.filter(Bg),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: pn
  }, { refs: Kl, floatingStyles: ca, placement: Ql, isPositioned: hr, middlewareData: it } = bg({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: M,
    whileElementsMounted: (...Nt) => fg(...Nt, {
      animationFrame: b === "always"
    }),
    elements: {
      reference: x.anchor
    },
    middleware: [
      $g({
        mainAxis: p + j,
        alignmentAxis: h
      }),
      v && Sg({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? xg() : void 0,
        ...pr
      }),
      v && Cg({
        ...pr
      }),
      Og({
        ...pr,
        apply: ({ elements: Nt, rects: fa, availableWidth: nc, availableHeight: oc }) => {
          const { width: ac, height: ic } = fa.reference, yr = Nt.floating.style;
          yr.setProperty("--radix-popper-available-width", `${nc}px`), yr.setProperty("--radix-popper-available-height", `${oc}px`), yr.setProperty("--radix-popper-anchor-width", `${ac}px`), yr.setProperty("--radix-popper-anchor-height", `${ic}px`);
        }
      }),
      E && Tg({
        element: E,
        padding: y
      }),
      Wg({
        arrowWidth: W,
        arrowHeight: j
      }),
      _ && _g({
        strategy: "referenceHidden",
        ...pr
      })
    ]
  }), [ua, Xl] = cl(Ql), gr = _t($);
  bt(() => {
    hr && gr?.();
  }, [
    hr,
    gr
  ]);
  const Jl = (o = it.arrow) === null || o === void 0 ? void 0 : o.x, Zl = (a = it.arrow) === null || a === void 0 ? void 0 : a.y, ec = ((i = it.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [tc, rc] = se();
  return bt(() => {
    A && rc(window.getComputedStyle(A).zIndex);
  }, [
    A
  ]), /* @__PURE__ */ N("div", {
    ref: Kl.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ca,
      transform: hr ? ca.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: tc,
      "--radix-popper-transform-origin": [
        (s = it.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (l = it.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ N(Lg, {
    scope: f,
    placedSide: ua,
    onArrowChange: k,
    arrowX: Jl,
    arrowY: Zl,
    shouldHideArrow: ec
  }, /* @__PURE__ */ N(nt.div, Q({
    "data-side": ua,
    "data-align": Xl
  }, C, {
    ref: D,
    style: {
      ...C.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: hr ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (c = it.hide) !== null && c !== void 0 && c.referenceHidden ? 0 : void 0
    }
  }))));
}), Fg = "PopperArrow", jg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ug = /* @__PURE__ */ B(function(t, r) {
  const { __scopePopper: n, ...o } = t, a = Ng(Fg, n), i = jg[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ N("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ N(Eg, Q({}, o, {
      ref: r,
      style: {
        ...o.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function Bg(e) {
  return e !== null;
}
const Wg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var r, n, o, a, i;
    const { placement: s, rects: l, middlewareData: c } = t, d = ((r = c.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, g = d ? 0 : e.arrowHeight, [h, y] = cl(s), v = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], m = ((n = (o = c.arrow) === null || o === void 0 ? void 0 : o.x) !== null && n !== void 0 ? n : 0) + p / 2, w = ((a = (i = c.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + g / 2;
    let S = "", _ = "";
    return h === "bottom" ? (S = d ? v : `${m}px`, _ = `${-g}px`) : h === "top" ? (S = d ? v : `${m}px`, _ = `${l.floating.height + g}px`) : h === "right" ? (S = `${-g}px`, _ = d ? v : `${w}px`) : h === "left" && (S = `${l.floating.width + g}px`, _ = d ? v : `${w}px`), {
      data: {
        x: S,
        y: _
      }
    };
  }
});
function cl(e) {
  const [t, r = "center"] = e.split("-");
  return [
    t,
    r
  ];
}
const Hg = Rg, zg = Mg, Gg = kg, Vg = Ug, qg = /* @__PURE__ */ B((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...o } = e;
  return n ? /* @__PURE__ */ Bc.createPortal(/* @__PURE__ */ N(nt.div, Q({}, o, {
    ref: t
  })), n) : null;
});
function Yg(e, t) {
  return kc((r, n) => {
    const o = t[r][n];
    return o ?? r;
  }, e);
}
const jo = (e) => {
  const { present: t, children: r } = e, n = Kg(t), o = typeof r == "function" ? r({
    present: n.isPresent
  }) : pt.only(r), a = Ot(n.ref, o.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ xo(o, {
    ref: a
  }) : null;
};
jo.displayName = "Presence";
function Kg(e) {
  const [t, r] = se(), n = te({}), o = te(e), a = te("none"), i = e ? "mounted" : "unmounted", [s, l] = Yg(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Y(() => {
    const c = wr(n.current);
    a.current = s === "mounted" ? c : "none";
  }, [
    s
  ]), bt(() => {
    const c = n.current, f = o.current;
    if (f !== e) {
      const p = a.current, g = wr(c);
      e ? l("MOUNT") : g === "none" || c?.display === "none" ? l("UNMOUNT") : l(f && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    l
  ]), bt(() => {
    if (t) {
      const c = (d) => {
        const g = wr(n.current).includes(d.animationName);
        d.target === t && g && ds(
          () => l("ANIMATION_END")
        );
      }, f = (d) => {
        d.target === t && (a.current = wr(n.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ie((c) => {
      c && (n.current = getComputedStyle(c)), r(c);
    }, [])
  };
}
function wr(e) {
  return e?.animationName || "none";
}
function Qg({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, o] = Xg({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, i = a ? e : n, s = _t(r), l = ie((c) => {
    if (a) {
      const d = typeof c == "function" ? c(e) : c;
      d !== e && s(d);
    } else o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function Xg({ defaultProp: e, onChange: t }) {
  const r = se(e), [n] = r, o = te(n), a = _t(t);
  return Y(() => {
    o.current !== n && (a(n), o.current = n);
  }, [
    n,
    o,
    a
  ]), r;
}
const Jg = /* @__PURE__ */ B((e, t) => /* @__PURE__ */ N(nt.span, Q({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Zg = Jg, [rn, T_] = zs("Tooltip", [
  il
]), nn = il(), ey = "TooltipProvider", ty = 700, oo = "tooltip.open", [ry, Uo] = rn(ey), ny = (e) => {
  const { __scopeTooltip: t, delayDuration: r = ty, skipDelayDuration: n = 300, disableHoverableContent: o = !1, children: a } = e, [i, s] = se(!0), l = te(!1), c = te(0);
  return Y(() => {
    const f = c.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ N(ry, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: r,
    onOpen: ie(() => {
      window.clearTimeout(c.current), s(!1);
    }, []),
    onClose: ie(() => {
      window.clearTimeout(c.current), c.current = window.setTimeout(
        () => s(!0),
        n
      );
    }, [
      n
    ]),
    isPointerInTransitRef: l,
    onPointerInTransitChange: ie((f) => {
      l.current = f;
    }, []),
    disableHoverableContent: o
  }, a);
}, Bo = "Tooltip", [oy, cr] = rn(Bo), ay = (e) => {
  const { __scopeTooltip: t, children: r, open: n, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: i, delayDuration: s } = e, l = Uo(Bo, e.__scopeTooltip), c = nn(t), [f, d] = se(null), p = Ah(), g = te(0), h = i ?? l.disableHoverableContent, y = s ?? l.delayDuration, v = te(!1), [m = !1, w] = Qg({
    prop: n,
    defaultProp: o,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(oo))) : l.onClose(), a?.(C);
    }
  }), S = Je(() => m ? v.current ? "delayed-open" : "instant-open" : "closed", [
    m
  ]), _ = ie(() => {
    window.clearTimeout(g.current), v.current = !1, w(!0);
  }, [
    w
  ]), b = ie(() => {
    window.clearTimeout(g.current), w(!1);
  }, [
    w
  ]), $ = ie(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, w(!0);
    }, y);
  }, [
    y,
    w
  ]);
  return Y(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ N(Hg, c, /* @__PURE__ */ N(oy, {
    scope: t,
    contentId: p,
    open: m,
    stateAttribute: S,
    trigger: f,
    onTriggerChange: d,
    onTriggerEnter: ie(() => {
      l.isOpenDelayed ? $() : _();
    }, [
      l.isOpenDelayed,
      $,
      _
    ]),
    onTriggerLeave: ie(() => {
      h ? b() : window.clearTimeout(g.current);
    }, [
      b,
      h
    ]),
    onOpen: _,
    onClose: b,
    disableHoverableContent: h
  }, r));
}, si = "TooltipTrigger", iy = /* @__PURE__ */ B((e, t) => {
  const { __scopeTooltip: r, ...n } = e, o = cr(si, r), a = Uo(si, r), i = nn(r), s = te(null), l = Ot(t, s, o.onTriggerChange), c = te(!1), f = te(!1), d = ie(
    () => c.current = !1,
    []
  );
  return Y(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ N(zg, Q({
    asChild: !0
  }, i), /* @__PURE__ */ N(nt.button, Q({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, n, {
    ref: l,
    onPointerMove: Le(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
    }),
    onPointerLeave: Le(e.onPointerLeave, () => {
      o.onTriggerLeave(), f.current = !1;
    }),
    onPointerDown: Le(e.onPointerDown, () => {
      c.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: Le(e.onFocus, () => {
      c.current || o.onOpen();
    }),
    onBlur: Le(e.onBlur, o.onClose),
    onClick: Le(e.onClick, o.onClose)
  })));
}), ul = "TooltipPortal", [sy, ly] = rn(ul, {
  forceMount: void 0
}), cy = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, a = cr(ul, t);
  return /* @__PURE__ */ N(sy, {
    scope: t,
    forceMount: r
  }, /* @__PURE__ */ N(jo, {
    present: r || a.open
  }, /* @__PURE__ */ N(qg, {
    asChild: !0,
    container: o
  }, n)));
}, Xt = "TooltipContent", uy = /* @__PURE__ */ B((e, t) => {
  const r = ly(Xt, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...a } = e, i = cr(Xt, e.__scopeTooltip);
  return /* @__PURE__ */ N(jo, {
    present: n || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ N(fl, Q({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ N(fy, Q({
    side: o
  }, a, {
    ref: t
  })));
}), fy = /* @__PURE__ */ B((e, t) => {
  const r = cr(Xt, e.__scopeTooltip), n = Uo(Xt, e.__scopeTooltip), o = te(null), a = Ot(t, o), [i, s] = se(null), { trigger: l, onClose: c } = r, f = o.current, { onPointerInTransitChange: d } = n, p = ie(() => {
    s(null), d(!1);
  }, [
    d
  ]), g = ie((h, y) => {
    const v = h.currentTarget, m = {
      x: h.clientX,
      y: h.clientY
    }, w = yy(m, v.getBoundingClientRect()), S = vy(m, w), _ = my(y.getBoundingClientRect()), b = wy([
      ...S,
      ..._
    ]);
    s(b), d(!0);
  }, [
    d
  ]);
  return Y(() => () => p(), [
    p
  ]), Y(() => {
    if (l && f) {
      const h = (v) => g(v, f), y = (v) => g(v, l);
      return l.addEventListener("pointerleave", h), f.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", y);
      };
    }
  }, [
    l,
    f,
    g,
    p
  ]), Y(() => {
    if (i) {
      const h = (y) => {
        const v = y.target, m = {
          x: y.clientX,
          y: y.clientY
        }, w = l?.contains(v) || f?.contains(v), S = !by(m, i);
        w ? p() : S && (p(), c());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    l,
    f,
    i,
    c,
    p
  ]), /* @__PURE__ */ N(fl, Q({}, e, {
    ref: a
  }));
}), [dy, py] = rn(Bo, {
  isInside: !1
}), fl = /* @__PURE__ */ B((e, t) => {
  const { __scopeTooltip: r, children: n, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: i, ...s } = e, l = cr(Xt, r), c = nn(r), { onClose: f } = l;
  return Y(() => (document.addEventListener(oo, f), () => document.removeEventListener(oo, f)), [
    f
  ]), Y(() => {
    if (l.trigger) {
      const d = (p) => {
        const g = p.target;
        g != null && g.contains(l.trigger) && f();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    l.trigger,
    f
  ]), /* @__PURE__ */ N(Oh, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: f
  }, /* @__PURE__ */ N(Gg, Q({
    "data-state": l.stateAttribute
  }, c, s, {
    ref: t,
    style: {
      ...s.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ N(Vs, null, n), /* @__PURE__ */ N(dy, {
    scope: r,
    isInside: !0
  }, /* @__PURE__ */ N(Zg, {
    id: l.contentId,
    role: "tooltip"
  }, o || n))));
}), hy = "TooltipArrow", gy = /* @__PURE__ */ B((e, t) => {
  const { __scopeTooltip: r, ...n } = e, o = nn(r);
  return py(hy, r).isInside ? null : /* @__PURE__ */ N(Vg, Q({}, o, n, {
    ref: t
  }));
});
function yy(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vy(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({
        x: e.x - r,
        y: e.y + r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "bottom":
      n.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y - r
      });
      break;
    case "left":
      n.push({
        x: e.x + r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "right":
      n.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x - r,
        y: e.y + r
      });
      break;
  }
  return n;
}
function my(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: r,
      y: t
    },
    {
      x: r,
      y: n
    },
    {
      x: o,
      y: n
    }
  ];
}
function by(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, c = t[i].x, f = t[i].y;
    l > n != f > n && r < (c - s) * (n - l) / (f - l) + s && (o = !o);
  }
  return o;
}
function wy(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), $y(t);
}
function $y(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], i = r[r.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
const Sy = ny, xy = ay, Cy = iy, Oy = cy, _y = uy, Ty = gy, ao = ({ button: e, content: t }) => /* @__PURE__ */ u(Sy, { children: /* @__PURE__ */ T(xy, { children: [
  /* @__PURE__ */ u(Cy, { asChild: !0, children: e }),
  /* @__PURE__ */ u(Oy, { children: /* @__PURE__ */ T(_y, { className: "TooltipContent", sideOffset: 5, children: [
    t,
    /* @__PURE__ */ u(Ty, { className: "TooltipArrow" })
  ] }) })
] }) }), [Py, ee] = Ws("Table"), Ey = ({
  children: e,
  defaultSelectedRows: t,
  footer: r,
  headers: n = [],
  isLoading: o = !1,
  onSelectedRowsChange: a,
  rows: i = [],
  selectedRows: s
}) => {
  const [l = [], c] = bf({
    prop: s,
    defaultProp: t,
    onChange: a
  }), [f, d] = O.useState(!1), p = i.length + 1, g = f ? n.length + 1 : n.length;
  return /* @__PURE__ */ u(
    Py,
    {
      colCount: g,
      hasHeaderCheckbox: f,
      setHasHeaderCheckbox: d,
      footer: r,
      headers: n,
      isLoading: o,
      rowCount: p,
      rows: i,
      selectedRows: l,
      selectRow: (y) => {
        Array.isArray(y) ? c(y) : c((v = []) => {
          const m = v.findIndex((w) => w.id === y.id);
          return m > -1 ? v.toSpliced(m, 1) : [...v, y];
        });
      },
      children: e
    }
  );
}, Ay = ({ children: e }) => {
  const t = ee("Content", (o) => o.rowCount), r = ee("Content", (o) => o.colCount), n = ee("Content", (o) => o.footer);
  return /* @__PURE__ */ u(yc, { rowCount: t, colCount: r, footer: n, children: e });
}, Dy = ({ children: e }) => /* @__PURE__ */ u(vc, { children: /* @__PURE__ */ u(Vr, { children: e }) }), Ry = ({ name: e, label: t, sortable: r }) => {
  const [{ query: n }, o] = hh(), a = n?.sort ?? "", [i, s] = a.split(":"), { formatMessage: l } = me(), c = i === e, f = l(
    { id: "components.TableHeader.sort", defaultMessage: "Sort on {label}" },
    { label: t }
  ), d = () => {
    r && o({
      sort: `${e}:${c && s === "ASC" ? "DESC" : "ASC"}`
    });
  };
  return /* @__PURE__ */ u(
    ls,
    {
      action: c && r && /* @__PURE__ */ u(
        ao,
        {
          button: /* @__PURE__ */ u(zn, { label: f, onClick: d, variant: "ghost", children: /* @__PURE__ */ u(Iy, { $isUp: s === "ASC" }) }),
          content: "Sort"
        }
      ),
      children: /* @__PURE__ */ u(
        K,
        {
          textColor: "neutral600",
          tag: !c && r ? "button" : "span",
          onClick: d,
          variant: "sigma",
          children: t
        }
      )
    }
  );
}, Iy = xt(Ec)`
  transform: ${({ $isUp: e }) => `rotate(${e ? "180" : "0"}deg)`};
`, My = ({ children: e }) => {
  const { formatMessage: t } = me(), r = ee("ActionBar", (n) => n.selectedRows);
  return r.length === 0 ? null : /* @__PURE__ */ T(z, { gap: 2, children: [
    /* @__PURE__ */ u(K, { variant: "omega", textColor: "neutral500", children: t(
      {
        id: "content-manager.components.TableDelete.label",
        defaultMessage: "{number, plural, one {# row} other {# rows}} selected"
      },
      { number: r.length }
    ) }),
    e
  ] });
}, Ly = () => {
  const e = ee("HeaderCheckboxCell", (l) => l.rows), t = ee("HeaderCheckboxCell", (l) => l.selectedRows), r = ee("HeaderCheckboxCell", (l) => l.selectRow), n = ee(
    "HeaderCheckboxCell",
    (l) => l.setHasHeaderCheckbox
  ), { formatMessage: o } = me(), a = t.length === e.length && e.length > 0, i = !a && t.length > 0;
  O.useEffect(() => (n(!0), () => n(!1)), [n]);
  const s = () => {
    r(a ? [] : e);
  };
  return /* @__PURE__ */ u(ls, { children: /* @__PURE__ */ u(
    So,
    {
      "aria-label": o({
        id: "global.select-all-entries",
        defaultMessage: "Select all entries"
      }),
      disabled: e.length === 0,
      checked: i ? "indeterminate" : a,
      onCheckedChange: s
    }
  ) });
}, Ny = (e) => {
  const { formatMessage: t } = me(), r = ee("Empty", (a) => a.rows), n = ee("Empty", (a) => a.isLoading), o = ee("Empty", (a) => a.colCount);
  return r.length > 0 || n ? null : /* @__PURE__ */ u(wo, { children: /* @__PURE__ */ u(Vr, { children: /* @__PURE__ */ u($o, { colSpan: o, children: /* @__PURE__ */ u(
    mc,
    {
      content: t({
        id: "app.components.EmptyStateLayout.content-document",
        defaultMessage: "No content found"
      }),
      hasRadius: !0,
      icon: /* @__PURE__ */ u(Fc, { width: "16rem" }),
      ...e
    }
  ) }) }) });
}, ky = ({ children: e = "Loading content" }) => {
  const t = ee("Loading", (n) => n.isLoading), r = ee("Loading", (n) => n.colCount);
  return t ? /* @__PURE__ */ u(wo, { children: /* @__PURE__ */ u(Vr, { children: /* @__PURE__ */ u($o, { colSpan: r, children: /* @__PURE__ */ u(z, { justifyContent: "center", padding: 11, background: "neutral0", children: /* @__PURE__ */ u(bc, { children: e }) }) }) }) }) : null;
}, Fy = ({ children: e }) => {
  const t = ee("Body", (n) => n.isLoading), r = ee("Body", (n) => n.rows);
  return t || r.length === 0 ? null : /* @__PURE__ */ u(wo, { children: e });
}, jy = (e) => /* @__PURE__ */ u(Vr, { ...e }), dl = (e) => /* @__PURE__ */ u($o, { ...e }), Uy = ({ id: e, ...t }) => {
  const r = ee("CheckboxCell", (l) => l.rows), n = ee("CheckboxCell", (l) => l.selectedRows), o = ee("CheckboxCell", (l) => l.selectRow), { formatMessage: a } = me(), i = () => {
    o(r.find((l) => l.id === e));
  }, s = n.findIndex((l) => l.id === e) > -1;
  return /* @__PURE__ */ u(dl, { ...t, onClick: (l) => l.stopPropagation(), children: /* @__PURE__ */ u(
    So,
    {
      "aria-label": a(
        {
          id: "app.component.table.select.one-entry",
          defaultMessage: "Select {target}"
        },
        { target: e }
      ),
      disabled: r.length === 0,
      checked: s,
      onCheckedChange: i
    }
  ) });
}, q = {
  Root: Ey,
  Content: Ay,
  ActionBar: My,
  Head: Dy,
  HeaderCell: Ry,
  HeaderCheckboxCell: Ly,
  Body: Fy,
  CheckboxCell: Uy,
  Cell: dl,
  Row: jy,
  Loading: ky,
  Empty: Ny
}, By = ({
  tableData: e,
  tableConfig: t,
  onRowClick: r,
  onDetailsBtnClick: n,
  isLoading: o = !1
}) => {
  const a = (i) => {
    const s = "https://preview.cnnews.xplr.ru?id=", l = i.slice(31).split(".")[0].replaceAll("_", "-");
    return `${s}${l}`;
  };
  return /* @__PURE__ */ T(q.Root, { rows: e, headers: t.headerDefinition, isLoading: o, children: [
    /* @__PURE__ */ u(q.ActionBar, {}),
    /* @__PURE__ */ T(q.Content, { children: [
      /* @__PURE__ */ u(q.Head, { children: t.headerDefinition.map((i) => /* @__PURE__ */ u(q.HeaderCell, { ...i }, i.name)) }),
      /* @__PURE__ */ u(q.Empty, {}),
      /* @__PURE__ */ u(q.Loading, {}),
      /* @__PURE__ */ u(q.Body, { children: e.map((i) => /* @__PURE__ */ T(
        q.Row,
        {
          onClick: r(i.id),
          cursor: t.canRead ? "pointer" : "default",
          children: [
            t.headerDefinition.map(({ name: s, cellFormatter: l, ...c }) => /* @__PURE__ */ u(q.Cell, { children: typeof l == "function" ? l(i, { name: s, ...c }) : /* @__PURE__ */ u(K, { textColor: "neutral800", children: i[s] || "-" }) }, s)),
            t.canRead ? /* @__PURE__ */ u(q.Cell, { onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ T(z, { justifyContent: "end", gap: 2, children: [
              i.errorMessage && /* @__PURE__ */ u(F, { children: /* @__PURE__ */ u(K, { textColor: "danger600", children: i.errorMessage }) }),
              i.status === "success" && /* @__PURE__ */ u(
                wc,
                {
                  isExternal: !0,
                  startIcon: /* @__PURE__ */ u(Ac, { fill: "neutral0" }),
                  href: a(i.resultUrl),
                  children: /* @__PURE__ */ u(K, { children: "Открыть" })
                }
              )
            ] }) }) : null
          ]
        },
        i.id
      )) })
    ] })
  ] });
}, pl = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function dt(e, t, r) {
  const n = r[0];
  if (t != null && e >= t)
    throw new Error(e + " >= " + t);
  if (e.slice(-1) === n || t && t.slice(-1) === n)
    throw new Error("trailing zero");
  if (t) {
    let i = 0;
    for (; (e[i] || n) === t[i]; )
      i++;
    if (i > 0)
      return t.slice(0, i) + dt(e.slice(i), t.slice(i), r);
  }
  const o = e ? r.indexOf(e[0]) : 0, a = t != null ? r.indexOf(t[0]) : r.length;
  if (a - o > 1) {
    const i = Math.round(0.5 * (o + a));
    return r[i];
  } else
    return t && t.length > 1 ? t.slice(0, 1) : r[o] + dt(e.slice(1), null, r);
}
function hl(e) {
  if (e.length !== gl(e[0]))
    throw new Error("invalid integer part of order key: " + e);
}
function gl(e) {
  if (e >= "a" && e <= "z")
    return e.charCodeAt(0) - 97 + 2;
  if (e >= "A" && e <= "Z")
    return 90 - e.charCodeAt(0) + 2;
  throw new Error("invalid order key head: " + e);
}
function Wt(e) {
  const t = gl(e[0]);
  if (t > e.length)
    throw new Error("invalid order key: " + e);
  return e.slice(0, t);
}
function li(e, t) {
  if (e === "A" + t[0].repeat(26))
    throw new Error("invalid order key: " + e);
  const r = Wt(e);
  if (e.slice(r.length).slice(-1) === t[0])
    throw new Error("invalid order key: " + e);
}
function ci(e, t) {
  hl(e);
  const [r, ...n] = e.split("");
  let o = !0;
  for (let a = n.length - 1; o && a >= 0; a--) {
    const i = t.indexOf(n[a]) + 1;
    i === t.length ? n[a] = t[0] : (n[a] = t[i], o = !1);
  }
  if (o) {
    if (r === "Z")
      return "a" + t[0];
    if (r === "z")
      return null;
    const a = String.fromCharCode(r.charCodeAt(0) + 1);
    return a > "a" ? n.push(t[0]) : n.pop(), a + n.join("");
  } else
    return r + n.join("");
}
function Wy(e, t) {
  hl(e);
  const [r, ...n] = e.split("");
  let o = !0;
  for (let a = n.length - 1; o && a >= 0; a--) {
    const i = t.indexOf(n[a]) - 1;
    i === -1 ? n[a] = t.slice(-1) : (n[a] = t[i], o = !1);
  }
  if (o) {
    if (r === "a")
      return "Z" + t.slice(-1);
    if (r === "A")
      return null;
    const a = String.fromCharCode(r.charCodeAt(0) - 1);
    return a < "Z" ? n.push(t.slice(-1)) : n.pop(), a + n.join("");
  } else
    return r + n.join("");
}
function Hy(e, t, r = pl) {
  if (e != null && li(e, r), t != null && li(t, r), e != null && t != null && e >= t)
    throw new Error(e + " >= " + t);
  if (e == null) {
    if (t == null)
      return "a" + r[0];
    const l = Wt(t), c = t.slice(l.length);
    if (l === "A" + r[0].repeat(26))
      return l + dt("", c, r);
    if (l < t)
      return l;
    const f = Wy(l, r);
    if (f == null)
      throw new Error("cannot decrement any more");
    return f;
  }
  if (t == null) {
    const l = Wt(e), c = e.slice(l.length), f = ci(l, r);
    return f ?? l + dt(c, null, r);
  }
  const n = Wt(e), o = e.slice(n.length), a = Wt(t), i = t.slice(a.length);
  if (n === a)
    return n + dt(o, i, r);
  const s = ci(n, r);
  if (s == null)
    throw new Error("cannot increment any more");
  return s < t ? s : n + dt(o, null, r);
}
function ui(e, t, r, n = pl) {
  return [Hy(e, t, n)];
}
function re(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var o = Xy[e], a = o ? typeof o == "function" ? o.apply(null, r) : o : "unknown error nr: " + e;
    throw Error("[Immer] " + a);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(i) {
    return "'" + i + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function $t(e) {
  return !!e && !!e[de];
}
function tt(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object") return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null) return !0;
    var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === Jy;
  }(e) || Array.isArray(e) || !!e[mi] || !!(!((t = e.constructor) === null || t === void 0) && t[mi]) || Wo(e) || Ho(e));
}
function Jt(e, t, r) {
  r === void 0 && (r = !1), Et(e) === 0 ? (r ? Object.keys : Yo)(e).forEach(function(n) {
    r && typeof n == "symbol" || t(n, e[n], e);
  }) : e.forEach(function(n, o) {
    return t(o, n, e);
  });
}
function Et(e) {
  var t = e[de];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Wo(e) ? 2 : Ho(e) ? 3 : 0;
}
function io(e, t) {
  return Et(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function zy(e, t) {
  return Et(e) === 2 ? e.get(t) : e[t];
}
function yl(e, t, r) {
  var n = Et(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Gy(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Wo(e) {
  return Ky && e instanceof Map;
}
function Ho(e) {
  return Qy && e instanceof Set;
}
function qe(e) {
  return e.o || e.t;
}
function zo(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Zy(e);
  delete t[de];
  for (var r = Yo(t), n = 0; n < r.length; n++) {
    var o = r[n], a = t[o];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[o] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[o] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Go(e, t) {
  return t === void 0 && (t = !1), Vo(e) || $t(e) || !tt(e) || (Et(e) > 1 && (e.set = e.add = e.clear = e.delete = Vy), Object.freeze(e), t && Jt(e, function(r, n) {
    return Go(n, !0);
  }, !0)), e;
}
function Vy() {
  re(2);
}
function Vo(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function _e(e) {
  var t = ev[e];
  return t || re(18, e), t;
}
function fi() {
  return process.env.NODE_ENV === "production" || St || re(0), St;
}
function kn(e, t) {
  t && (_e("Patches"), e.u = [], e.s = [], e.v = t);
}
function jr(e) {
  so(e), e.p.forEach(qy), e.p = null;
}
function so(e) {
  e === St && (St = e.l);
}
function di(e) {
  return St = { p: [], l: St, h: e, m: !0, _: 0 };
}
function qy(e) {
  var t = e[de];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Fn(e, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e !== void 0 && e !== r;
  return t.h.O || _e("ES5").S(t, e, n), n ? (r[de].P && (jr(t), re(4)), tt(e) && (e = Ur(t, e), t.l || Br(t, e)), t.u && _e("Patches").M(r[de].t, e, t.u, t.s)) : e = Ur(t, r, []), jr(t), t.u && t.v(t.u, t.s), e !== vl ? e : void 0;
}
function Ur(e, t, r) {
  if (Vo(t)) return t;
  var n = t[de];
  if (!n) return Jt(t, function(s, l) {
    return pi(e, n, t, s, l, r);
  }, !0), t;
  if (n.A !== e) return t;
  if (!n.P) return Br(e, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var o = n.i === 4 || n.i === 5 ? n.o = zo(n.k) : n.o, a = o, i = !1;
    n.i === 3 && (a = new Set(o), o.clear(), i = !0), Jt(a, function(s, l) {
      return pi(e, n, o, s, l, r, i);
    }), Br(e, o, !1), r && e.u && _e("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function pi(e, t, r, n, o, a, i) {
  if (process.env.NODE_ENV !== "production" && o === r && re(5), $t(o)) {
    var s = Ur(e, o, a && t && t.i !== 3 && !io(t.R, n) ? a.concat(n) : void 0);
    if (yl(r, n, s), !$t(s)) return;
    e.m = !1;
  } else i && r.add(o);
  if (tt(o) && !Vo(o)) {
    if (!e.h.D && e._ < 1) return;
    Ur(e, o), t && t.A.l || Br(e, o);
  }
}
function Br(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Go(t, r);
}
function jn(e, t) {
  var r = e[de];
  return (r ? qe(r) : e)[t];
}
function hi(e, t) {
  if (t in e) for (var r = Object.getPrototypeOf(e); r; ) {
    var n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function lo(e) {
  e.P || (e.P = !0, e.l && lo(e.l));
}
function Un(e) {
  e.o || (e.o = zo(e.t));
}
function co(e, t, r) {
  var n = Wo(t) ? _e("MapSet").F(t, r) : Ho(t) ? _e("MapSet").T(t, r) : e.O ? function(o, a) {
    var i = Array.isArray(o), s = { i: i ? 1 : 0, A: a ? a.A : fi(), P: !1, I: !1, R: {}, l: a, t: o, k: null, o: null, j: null, C: !1 }, l = s, c = uo;
    i && (l = [s], c = Ht);
    var f = Proxy.revocable(l, c), d = f.revoke, p = f.proxy;
    return s.k = p, s.j = d, p;
  }(t, r) : _e("ES5").J(t, r);
  return (r ? r.A : fi()).p.push(n), n;
}
function Yy(e) {
  return $t(e) || re(22, e), function t(r) {
    if (!tt(r)) return r;
    var n, o = r[de], a = Et(r);
    if (o) {
      if (!o.P && (o.i < 4 || !_e("ES5").K(o))) return o.t;
      o.I = !0, n = gi(r, a), o.I = !1;
    } else n = gi(r, a);
    return Jt(n, function(i, s) {
      o && zy(o.t, i) === s || yl(n, i, t(s));
    }), a === 3 ? new Set(n) : n;
  }(e);
}
function gi(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return zo(e);
}
var yi, St, qo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ky = typeof Map < "u", Qy = typeof Set < "u", vi = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", vl = qo ? Symbol.for("immer-nothing") : ((yi = {})["immer-nothing"] = !0, yi), mi = qo ? Symbol.for("immer-draftable") : "__$immer_draftable", de = qo ? Symbol.for("immer-state") : "__$immer_state", Xy = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Jy = "" + Object.prototype.constructor, Yo = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Zy = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Yo(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, ev = {}, uo = { get: function(e, t) {
  if (t === de) return e;
  var r = qe(e);
  if (!io(r, t)) return function(o, a, i) {
    var s, l = hi(a, i);
    return l ? "value" in l ? l.value : (s = l.get) === null || s === void 0 ? void 0 : s.call(o.k) : void 0;
  }(e, r, t);
  var n = r[t];
  return e.I || !tt(n) ? n : n === jn(e.t, t) ? (Un(e), e.o[t] = co(e.A.h, n, e)) : n;
}, has: function(e, t) {
  return t in qe(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(qe(e));
}, set: function(e, t, r) {
  var n = hi(qe(e), t);
  if (n?.set) return n.set.call(e.k, r), !0;
  if (!e.P) {
    var o = jn(qe(e), t), a = o?.[de];
    if (a && a.t === r) return e.o[t] = r, e.R[t] = !1, !0;
    if (Gy(r, o) && (r !== void 0 || io(e.t, t))) return !0;
    Un(e), lo(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return jn(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Un(e), lo(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = qe(e), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  re(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  re(12);
} }, Ht = {};
Jt(uo, function(e, t) {
  Ht[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ht.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && re(13), Ht.set.call(this, e, t, void 0);
}, Ht.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && re(14), uo.set.call(this, e[0], t, r, e[0]);
};
var tv = function() {
  function e(r) {
    var n = this;
    this.O = vi, this.D = !0, this.produce = function(o, a, i) {
      if (typeof o == "function" && typeof a != "function") {
        var s = a;
        a = o;
        var l = n;
        return function(y) {
          var v = this;
          y === void 0 && (y = s);
          for (var m = arguments.length, w = Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++) w[S - 1] = arguments[S];
          return l.produce(y, function(_) {
            var b;
            return (b = a).call.apply(b, [v, _].concat(w));
          });
        };
      }
      var c;
      if (typeof a != "function" && re(6), i !== void 0 && typeof i != "function" && re(7), tt(o)) {
        var f = di(n), d = co(n, o, void 0), p = !0;
        try {
          c = a(d), p = !1;
        } finally {
          p ? jr(f) : so(f);
        }
        return typeof Promise < "u" && c instanceof Promise ? c.then(function(y) {
          return kn(f, i), Fn(y, f);
        }, function(y) {
          throw jr(f), y;
        }) : (kn(f, i), Fn(c, f));
      }
      if (!o || typeof o != "object") {
        if ((c = a(o)) === void 0 && (c = o), c === vl && (c = void 0), n.D && Go(c, !0), i) {
          var g = [], h = [];
          _e("Patches").M(o, c, g, h), i(g, h);
        }
        return c;
      }
      re(21, o);
    }, this.produceWithPatches = function(o, a) {
      if (typeof o == "function") return function(c) {
        for (var f = arguments.length, d = Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++) d[p - 1] = arguments[p];
        return n.produceWithPatches(c, function(g) {
          return o.apply(void 0, [g].concat(d));
        });
      };
      var i, s, l = n.produce(o, a, function(c, f) {
        i = c, s = f;
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then(function(c) {
        return [c, i, s];
      }) : [l, i, s];
    }, typeof r?.useProxies == "boolean" && this.setUseProxies(r.useProxies), typeof r?.autoFreeze == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    tt(r) || re(8), $t(r) && (r = Yy(r));
    var n = di(this), o = co(this, r, void 0);
    return o[de].C = !0, so(n), o;
  }, t.finishDraft = function(r, n) {
    var o = r && r[de];
    process.env.NODE_ENV !== "production" && (o && o.C || re(9), o.I && re(10));
    var a = o.A;
    return kn(a, n), Fn(void 0, a);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !vi && re(20), this.O = r;
  }, t.applyPatches = function(r, n) {
    var o;
    for (o = n.length - 1; o >= 0; o--) {
      var a = n[o];
      if (a.path.length === 0 && a.op === "replace") {
        r = a.value;
        break;
      }
    }
    o > -1 && (n = n.slice(o + 1));
    var i = _e("Patches").$;
    return $t(r) ? i(r, n) : this.produce(r, function(s) {
      return i(s, n);
    });
  }, e;
}(), pe = new tv(), rv = pe.produce;
pe.produceWithPatches.bind(pe);
pe.setAutoFreeze.bind(pe);
pe.setUseProxies.bind(pe);
pe.applyPatches.bind(pe);
pe.createDraft.bind(pe);
pe.finishDraft.bind(pe);
function nv() {
  this.__data__ = [], this.size = 0;
}
var ov = nv;
function av(e, t) {
  return e === t || e !== e && t !== t;
}
var Ko = av, iv = Ko;
function sv(e, t) {
  for (var r = e.length; r--; )
    if (iv(e[r][0], t))
      return r;
  return -1;
}
var on = sv, lv = on, cv = Array.prototype, uv = cv.splice;
function fv(e) {
  var t = this.__data__, r = lv(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : uv.call(t, r, 1), --this.size, !0;
}
var dv = fv, pv = on;
function hv(e) {
  var t = this.__data__, r = pv(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var gv = hv, yv = on;
function vv(e) {
  return yv(this.__data__, e) > -1;
}
var mv = vv, bv = on;
function wv(e, t) {
  var r = this.__data__, n = bv(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var $v = wv, Sv = ov, xv = dv, Cv = gv, Ov = mv, _v = $v;
function At(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
At.prototype.clear = Sv;
At.prototype.delete = xv;
At.prototype.get = Cv;
At.prototype.has = Ov;
At.prototype.set = _v;
var an = At, Tv = an;
function Pv() {
  this.__data__ = new Tv(), this.size = 0;
}
var Ev = Pv;
function Av(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Dv = Av;
function Rv(e) {
  return this.__data__.get(e);
}
var Iv = Rv;
function Mv(e) {
  return this.__data__.has(e);
}
var Lv = Mv, Nv = typeof ft == "object" && ft && ft.Object === Object && ft, ml = Nv, kv = ml, Fv = typeof self == "object" && self && self.Object === Object && self, jv = kv || Fv || Function("return this")(), De = jv, Uv = De, Bv = Uv.Symbol, ur = Bv, bi = ur, bl = Object.prototype, Wv = bl.hasOwnProperty, Hv = bl.toString, Ut = bi ? bi.toStringTag : void 0;
function zv(e) {
  var t = Wv.call(e, Ut), r = e[Ut];
  try {
    e[Ut] = void 0;
    var n = !0;
  } catch {
  }
  var o = Hv.call(e);
  return n && (t ? e[Ut] = r : delete e[Ut]), o;
}
var Gv = zv, Vv = Object.prototype, qv = Vv.toString;
function Yv(e) {
  return qv.call(e);
}
var Kv = Yv, wi = ur, Qv = Gv, Xv = Kv, Jv = "[object Null]", Zv = "[object Undefined]", $i = wi ? wi.toStringTag : void 0;
function em(e) {
  return e == null ? e === void 0 ? Zv : Jv : $i && $i in Object(e) ? Qv(e) : Xv(e);
}
var fr = em;
function tm(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var dr = tm, rm = fr, nm = dr, om = "[object AsyncFunction]", am = "[object Function]", im = "[object GeneratorFunction]", sm = "[object Proxy]";
function lm(e) {
  if (!nm(e))
    return !1;
  var t = rm(e);
  return t == am || t == im || t == om || t == sm;
}
var wl = lm, cm = De, um = cm["__core-js_shared__"], fm = um, Bn = fm, Si = function() {
  var e = /[^.]+$/.exec(Bn && Bn.keys && Bn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dm(e) {
  return !!Si && Si in e;
}
var pm = dm, hm = Function.prototype, gm = hm.toString;
function ym(e) {
  if (e != null) {
    try {
      return gm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $l = ym, vm = wl, mm = pm, bm = dr, wm = $l, $m = /[\\^$.*+?()[\]{}|]/g, Sm = /^\[object .+?Constructor\]$/, xm = Function.prototype, Cm = Object.prototype, Om = xm.toString, _m = Cm.hasOwnProperty, Tm = RegExp(
  "^" + Om.call(_m).replace($m, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pm(e) {
  if (!bm(e) || mm(e))
    return !1;
  var t = vm(e) ? Tm : Sm;
  return t.test(wm(e));
}
var Em = Pm;
function Am(e, t) {
  return e?.[t];
}
var Dm = Am, Rm = Em, Im = Dm;
function Mm(e, t) {
  var r = Im(e, t);
  return Rm(r) ? r : void 0;
}
var ot = Mm, Lm = ot, Nm = De, km = Lm(Nm, "Map"), Qo = km, Fm = ot, jm = Fm(Object, "create"), sn = jm, xi = sn;
function Um() {
  this.__data__ = xi ? xi(null) : {}, this.size = 0;
}
var Bm = Um;
function Wm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hm = Wm, zm = sn, Gm = "__lodash_hash_undefined__", Vm = Object.prototype, qm = Vm.hasOwnProperty;
function Ym(e) {
  var t = this.__data__;
  if (zm) {
    var r = t[e];
    return r === Gm ? void 0 : r;
  }
  return qm.call(t, e) ? t[e] : void 0;
}
var Km = Ym, Qm = sn, Xm = Object.prototype, Jm = Xm.hasOwnProperty;
function Zm(e) {
  var t = this.__data__;
  return Qm ? t[e] !== void 0 : Jm.call(t, e);
}
var eb = Zm, tb = sn, rb = "__lodash_hash_undefined__";
function nb(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tb && t === void 0 ? rb : t, this;
}
var ob = nb, ab = Bm, ib = Hm, sb = Km, lb = eb, cb = ob;
function Dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Dt.prototype.clear = ab;
Dt.prototype.delete = ib;
Dt.prototype.get = sb;
Dt.prototype.has = lb;
Dt.prototype.set = cb;
var ub = Dt, Ci = ub, fb = an, db = Qo;
function pb() {
  this.size = 0, this.__data__ = {
    hash: new Ci(),
    map: new (db || fb)(),
    string: new Ci()
  };
}
var hb = pb;
function gb(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var yb = gb, vb = yb;
function mb(e, t) {
  var r = e.__data__;
  return vb(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ln = mb, bb = ln;
function wb(e) {
  var t = bb(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var $b = wb, Sb = ln;
function xb(e) {
  return Sb(this, e).get(e);
}
var Cb = xb, Ob = ln;
function _b(e) {
  return Ob(this, e).has(e);
}
var Tb = _b, Pb = ln;
function Eb(e, t) {
  var r = Pb(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Ab = Eb, Db = hb, Rb = $b, Ib = Cb, Mb = Tb, Lb = Ab;
function Rt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = Db;
Rt.prototype.delete = Rb;
Rt.prototype.get = Ib;
Rt.prototype.has = Mb;
Rt.prototype.set = Lb;
var Xo = Rt, Nb = an, kb = Qo, Fb = Xo, jb = 200;
function Ub(e, t) {
  var r = this.__data__;
  if (r instanceof Nb) {
    var n = r.__data__;
    if (!kb || n.length < jb - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Fb(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Bb = Ub, Wb = an, Hb = Ev, zb = Dv, Gb = Iv, Vb = Lv, qb = Bb;
function It(e) {
  var t = this.__data__ = new Wb(e);
  this.size = t.size;
}
It.prototype.clear = Hb;
It.prototype.delete = zb;
It.prototype.get = Gb;
It.prototype.has = Vb;
It.prototype.set = qb;
var Sl = It, Yb = "__lodash_hash_undefined__";
function Kb(e) {
  return this.__data__.set(e, Yb), this;
}
var Qb = Kb;
function Xb(e) {
  return this.__data__.has(e);
}
var Jb = Xb, Zb = Xo, e0 = Qb, t0 = Jb;
function Wr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Zb(); ++t < r; )
    this.add(e[t]);
}
Wr.prototype.add = Wr.prototype.push = e0;
Wr.prototype.has = t0;
var r0 = Wr;
function n0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var o0 = n0;
function a0(e, t) {
  return e.has(t);
}
var i0 = a0, s0 = r0, l0 = o0, c0 = i0, u0 = 1, f0 = 2;
function d0(e, t, r, n, o, a) {
  var i = r & u0, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var d = -1, p = !0, g = r & f0 ? new s0() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < s; ) {
    var h = e[d], y = t[d];
    if (n)
      var v = i ? n(y, h, d, t, e, a) : n(h, y, d, e, t, a);
    if (v !== void 0) {
      if (v)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!l0(t, function(m, w) {
        if (!c0(g, w) && (h === m || o(h, m, r, n, a)))
          return g.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === y || o(h, y, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var xl = d0, p0 = De, h0 = p0.Uint8Array, Cl = h0;
function g0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, o) {
    r[++t] = [o, n];
  }), r;
}
var y0 = g0;
function v0(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var m0 = v0, Oi = ur, _i = Cl, b0 = Ko, w0 = xl, $0 = y0, S0 = m0, x0 = 1, C0 = 2, O0 = "[object Boolean]", _0 = "[object Date]", T0 = "[object Error]", P0 = "[object Map]", E0 = "[object Number]", A0 = "[object RegExp]", D0 = "[object Set]", R0 = "[object String]", I0 = "[object Symbol]", M0 = "[object ArrayBuffer]", L0 = "[object DataView]", Ti = Oi ? Oi.prototype : void 0, Wn = Ti ? Ti.valueOf : void 0;
function N0(e, t, r, n, o, a, i) {
  switch (r) {
    case L0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case M0:
      return !(e.byteLength != t.byteLength || !a(new _i(e), new _i(t)));
    case O0:
    case _0:
    case E0:
      return b0(+e, +t);
    case T0:
      return e.name == t.name && e.message == t.message;
    case A0:
    case R0:
      return e == t + "";
    case P0:
      var s = $0;
    case D0:
      var l = n & x0;
      if (s || (s = S0), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      n |= C0, i.set(e, t);
      var f = w0(s(e), s(t), n, o, a, i);
      return i.delete(e), f;
    case I0:
      if (Wn)
        return Wn.call(e) == Wn.call(t);
  }
  return !1;
}
var k0 = N0;
function F0(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Ol = F0, j0 = Array.isArray, Mt = j0, U0 = Ol, B0 = Mt;
function W0(e, t, r) {
  var n = t(e);
  return B0(e) ? n : U0(n, r(e));
}
var _l = W0;
function H0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (a[o++] = i);
  }
  return a;
}
var z0 = H0;
function G0() {
  return [];
}
var Tl = G0, V0 = z0, q0 = Tl, Y0 = Object.prototype, K0 = Y0.propertyIsEnumerable, Pi = Object.getOwnPropertySymbols, Q0 = Pi ? function(e) {
  return e == null ? [] : (e = Object(e), V0(Pi(e), function(t) {
    return K0.call(e, t);
  }));
} : q0, Jo = Q0;
function X0(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var J0 = X0;
function Z0(e) {
  return e != null && typeof e == "object";
}
var at = Z0, ew = fr, tw = at, rw = "[object Arguments]";
function nw(e) {
  return tw(e) && ew(e) == rw;
}
var ow = nw, Ei = ow, aw = at, Pl = Object.prototype, iw = Pl.hasOwnProperty, sw = Pl.propertyIsEnumerable, lw = Ei(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ei : function(e) {
  return aw(e) && iw.call(e, "callee") && !sw.call(e, "callee");
}, cw = lw, Hr = { exports: {} };
function uw() {
  return !1;
}
var fw = uw;
Hr.exports;
(function(e, t) {
  var r = De, n = fw, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || n;
  e.exports = c;
})(Hr, Hr.exports);
var Zo = Hr.exports, dw = 9007199254740991, pw = /^(?:0|[1-9]\d*)$/;
function hw(e, t) {
  var r = typeof e;
  return t = t ?? dw, !!t && (r == "number" || r != "symbol" && pw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var gw = hw, yw = 9007199254740991;
function vw(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yw;
}
var El = vw, mw = fr, bw = El, ww = at, $w = "[object Arguments]", Sw = "[object Array]", xw = "[object Boolean]", Cw = "[object Date]", Ow = "[object Error]", _w = "[object Function]", Tw = "[object Map]", Pw = "[object Number]", Ew = "[object Object]", Aw = "[object RegExp]", Dw = "[object Set]", Rw = "[object String]", Iw = "[object WeakMap]", Mw = "[object ArrayBuffer]", Lw = "[object DataView]", Nw = "[object Float32Array]", kw = "[object Float64Array]", Fw = "[object Int8Array]", jw = "[object Int16Array]", Uw = "[object Int32Array]", Bw = "[object Uint8Array]", Ww = "[object Uint8ClampedArray]", Hw = "[object Uint16Array]", zw = "[object Uint32Array]", G = {};
G[Nw] = G[kw] = G[Fw] = G[jw] = G[Uw] = G[Bw] = G[Ww] = G[Hw] = G[zw] = !0;
G[$w] = G[Sw] = G[Mw] = G[xw] = G[Lw] = G[Cw] = G[Ow] = G[_w] = G[Tw] = G[Pw] = G[Ew] = G[Aw] = G[Dw] = G[Rw] = G[Iw] = !1;
function Gw(e) {
  return ww(e) && bw(e.length) && !!G[mw(e)];
}
var Vw = Gw;
function qw(e) {
  return function(t) {
    return e(t);
  };
}
var ea = qw, zr = { exports: {} };
zr.exports;
(function(e, t) {
  var r = ml, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a && r.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(zr, zr.exports);
var ta = zr.exports, Yw = Vw, Kw = ea, Ai = ta, Di = Ai && Ai.isTypedArray, Qw = Di ? Kw(Di) : Yw, Al = Qw, Xw = J0, Jw = cw, Zw = Mt, e1 = Zo, t1 = gw, r1 = Al, n1 = Object.prototype, o1 = n1.hasOwnProperty;
function a1(e, t) {
  var r = Zw(e), n = !r && Jw(e), o = !r && !n && e1(e), a = !r && !n && !o && r1(e), i = r || n || o || a, s = i ? Xw(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || o1.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    t1(c, l))) && s.push(c);
  return s;
}
var Dl = a1, i1 = Object.prototype;
function s1(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || i1;
  return e === r;
}
var ra = s1;
function l1(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Rl = l1, c1 = Rl, u1 = c1(Object.keys, Object), f1 = u1, d1 = ra, p1 = f1, h1 = Object.prototype, g1 = h1.hasOwnProperty;
function y1(e) {
  if (!d1(e))
    return p1(e);
  var t = [];
  for (var r in Object(e))
    g1.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var v1 = y1, m1 = wl, b1 = El;
function w1(e) {
  return e != null && b1(e.length) && !m1(e);
}
var Il = w1, $1 = Dl, S1 = v1, x1 = Il;
function C1(e) {
  return x1(e) ? $1(e) : S1(e);
}
var na = C1, O1 = _l, _1 = Jo, T1 = na;
function P1(e) {
  return O1(e, T1, _1);
}
var Ml = P1, Ri = Ml, E1 = 1, A1 = Object.prototype, D1 = A1.hasOwnProperty;
function R1(e, t, r, n, o, a) {
  var i = r & E1, s = Ri(e), l = s.length, c = Ri(t), f = c.length;
  if (l != f && !i)
    return !1;
  for (var d = l; d--; ) {
    var p = s[d];
    if (!(i ? p in t : D1.call(t, p)))
      return !1;
  }
  var g = a.get(e), h = a.get(t);
  if (g && h)
    return g == t && h == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var v = i; ++d < l; ) {
    p = s[d];
    var m = e[p], w = t[p];
    if (n)
      var S = i ? n(w, m, p, t, e, a) : n(m, w, p, e, t, a);
    if (!(S === void 0 ? m === w || o(m, w, r, n, a) : S)) {
      y = !1;
      break;
    }
    v || (v = p == "constructor");
  }
  if (y && !v) {
    var _ = e.constructor, b = t.constructor;
    _ != b && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof b == "function" && b instanceof b) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var I1 = R1, M1 = ot, L1 = De, N1 = M1(L1, "DataView"), k1 = N1, F1 = ot, j1 = De, U1 = F1(j1, "Promise"), B1 = U1, W1 = ot, H1 = De, z1 = W1(H1, "Set"), G1 = z1, V1 = ot, q1 = De, Y1 = V1(q1, "WeakMap"), K1 = Y1, fo = k1, po = Qo, ho = B1, go = G1, yo = K1, Ll = fr, Lt = $l, Ii = "[object Map]", Q1 = "[object Object]", Mi = "[object Promise]", Li = "[object Set]", Ni = "[object WeakMap]", ki = "[object DataView]", X1 = Lt(fo), J1 = Lt(po), Z1 = Lt(ho), e$ = Lt(go), t$ = Lt(yo), Ye = Ll;
(fo && Ye(new fo(new ArrayBuffer(1))) != ki || po && Ye(new po()) != Ii || ho && Ye(ho.resolve()) != Mi || go && Ye(new go()) != Li || yo && Ye(new yo()) != Ni) && (Ye = function(e) {
  var t = Ll(e), r = t == Q1 ? e.constructor : void 0, n = r ? Lt(r) : "";
  if (n)
    switch (n) {
      case X1:
        return ki;
      case J1:
        return Ii;
      case Z1:
        return Mi;
      case e$:
        return Li;
      case t$:
        return Ni;
    }
  return t;
});
var cn = Ye, Hn = Sl, r$ = xl, n$ = k0, o$ = I1, Fi = cn, ji = Mt, Ui = Zo, a$ = Al, i$ = 1, Bi = "[object Arguments]", Wi = "[object Array]", $r = "[object Object]", s$ = Object.prototype, Hi = s$.hasOwnProperty;
function l$(e, t, r, n, o, a) {
  var i = ji(e), s = ji(t), l = i ? Wi : Fi(e), c = s ? Wi : Fi(t);
  l = l == Bi ? $r : l, c = c == Bi ? $r : c;
  var f = l == $r, d = c == $r, p = l == c;
  if (p && Ui(e)) {
    if (!Ui(t))
      return !1;
    i = !0, f = !1;
  }
  if (p && !f)
    return a || (a = new Hn()), i || a$(e) ? r$(e, t, r, n, o, a) : n$(e, t, l, r, n, o, a);
  if (!(r & i$)) {
    var g = f && Hi.call(e, "__wrapped__"), h = d && Hi.call(t, "__wrapped__");
    if (g || h) {
      var y = g ? e.value() : e, v = h ? t.value() : t;
      return a || (a = new Hn()), o(y, v, r, n, a);
    }
  }
  return p ? (a || (a = new Hn()), o$(e, t, r, n, o, a)) : !1;
}
var c$ = l$, u$ = c$, zi = at;
function Nl(e, t, r, n, o) {
  return e === t ? !0 : e == null || t == null || !zi(e) && !zi(t) ? e !== e && t !== t : u$(e, t, r, n, Nl, o);
}
var f$ = Nl, d$ = f$;
function p$(e, t) {
  return d$(e, t);
}
var h$ = p$;
const vo = /* @__PURE__ */ Oo(h$);
function g$(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var y$ = g$, v$ = ot, m$ = function() {
  try {
    var e = v$(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), b$ = m$, Gi = b$;
function w$(e, t, r) {
  t == "__proto__" && Gi ? Gi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var kl = w$, $$ = kl, S$ = Ko, x$ = Object.prototype, C$ = x$.hasOwnProperty;
function O$(e, t, r) {
  var n = e[t];
  (!(C$.call(e, t) && S$(n, r)) || r === void 0 && !(t in e)) && $$(e, t, r);
}
var Fl = O$, _$ = Fl, T$ = kl;
function P$(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], l = n ? n(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), o ? T$(r, s, l) : _$(r, s, l);
  }
  return r;
}
var un = P$, E$ = un, A$ = na;
function D$(e, t) {
  return e && E$(t, A$(t), e);
}
var R$ = D$;
function I$(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var M$ = I$, L$ = dr, N$ = ra, k$ = M$, F$ = Object.prototype, j$ = F$.hasOwnProperty;
function U$(e) {
  if (!L$(e))
    return k$(e);
  var t = N$(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !j$.call(e, n)) || r.push(n);
  return r;
}
var B$ = U$, W$ = Dl, H$ = B$, z$ = Il;
function G$(e) {
  return z$(e) ? W$(e, !0) : H$(e);
}
var oa = G$, V$ = un, q$ = oa;
function Y$(e, t) {
  return e && V$(t, q$(t), e);
}
var K$ = Y$, Gr = { exports: {} };
Gr.exports;
(function(e, t) {
  var r = De, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, i = a ? r.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(c, f) {
    if (f)
      return c.slice();
    var d = c.length, p = s ? s(d) : new c.constructor(d);
    return c.copy(p), p;
  }
  e.exports = l;
})(Gr, Gr.exports);
var Q$ = Gr.exports;
function X$(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var jl = X$, J$ = un, Z$ = Jo;
function eS(e, t) {
  return J$(e, Z$(e), t);
}
var tS = eS, rS = Rl, nS = rS(Object.getPrototypeOf, Object), Ul = nS, oS = Ol, aS = Ul, iS = Jo, sS = Tl, lS = Object.getOwnPropertySymbols, cS = lS ? function(e) {
  for (var t = []; e; )
    oS(t, iS(e)), e = aS(e);
  return t;
} : sS, Bl = cS, uS = un, fS = Bl;
function dS(e, t) {
  return uS(e, fS(e), t);
}
var pS = dS, hS = _l, gS = Bl, yS = oa;
function vS(e) {
  return hS(e, yS, gS);
}
var mS = vS, bS = Object.prototype, wS = bS.hasOwnProperty;
function $S(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && wS.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var SS = $S, Vi = Cl;
function xS(e) {
  var t = new e.constructor(e.byteLength);
  return new Vi(t).set(new Vi(e)), t;
}
var aa = xS, CS = aa;
function OS(e, t) {
  var r = t ? CS(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var _S = OS, TS = /\w*$/;
function PS(e) {
  var t = new e.constructor(e.source, TS.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ES = PS, qi = ur, Yi = qi ? qi.prototype : void 0, Ki = Yi ? Yi.valueOf : void 0;
function AS(e) {
  return Ki ? Object(Ki.call(e)) : {};
}
var DS = AS, RS = aa;
function IS(e, t) {
  var r = t ? RS(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var MS = IS, LS = aa, NS = _S, kS = ES, FS = DS, jS = MS, US = "[object Boolean]", BS = "[object Date]", WS = "[object Map]", HS = "[object Number]", zS = "[object RegExp]", GS = "[object Set]", VS = "[object String]", qS = "[object Symbol]", YS = "[object ArrayBuffer]", KS = "[object DataView]", QS = "[object Float32Array]", XS = "[object Float64Array]", JS = "[object Int8Array]", ZS = "[object Int16Array]", ex = "[object Int32Array]", tx = "[object Uint8Array]", rx = "[object Uint8ClampedArray]", nx = "[object Uint16Array]", ox = "[object Uint32Array]";
function ax(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case YS:
      return LS(e);
    case US:
    case BS:
      return new n(+e);
    case KS:
      return NS(e, r);
    case QS:
    case XS:
    case JS:
    case ZS:
    case ex:
    case tx:
    case rx:
    case nx:
    case ox:
      return jS(e, r);
    case WS:
      return new n();
    case HS:
    case VS:
      return new n(e);
    case zS:
      return kS(e);
    case GS:
      return new n();
    case qS:
      return FS(e);
  }
}
var ix = ax, sx = dr, Qi = Object.create, lx = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!sx(t))
      return {};
    if (Qi)
      return Qi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), cx = lx, ux = cx, fx = Ul, dx = ra;
function px(e) {
  return typeof e.constructor == "function" && !dx(e) ? ux(fx(e)) : {};
}
var hx = px, gx = cn, yx = at, vx = "[object Map]";
function mx(e) {
  return yx(e) && gx(e) == vx;
}
var bx = mx, wx = bx, $x = ea, Xi = ta, Ji = Xi && Xi.isMap, Sx = Ji ? $x(Ji) : wx, xx = Sx, Cx = cn, Ox = at, _x = "[object Set]";
function Tx(e) {
  return Ox(e) && Cx(e) == _x;
}
var Px = Tx, Ex = Px, Ax = ea, Zi = ta, es = Zi && Zi.isSet, Dx = es ? Ax(es) : Ex, Rx = Dx, Ix = Sl, Mx = y$, Lx = Fl, Nx = R$, kx = K$, Fx = Q$, jx = jl, Ux = tS, Bx = pS, Wx = Ml, Hx = mS, zx = cn, Gx = SS, Vx = ix, qx = hx, Yx = Mt, Kx = Zo, Qx = xx, Xx = dr, Jx = Rx, Zx = na, eC = oa, tC = 1, rC = 2, nC = 4, Wl = "[object Arguments]", oC = "[object Array]", aC = "[object Boolean]", iC = "[object Date]", sC = "[object Error]", Hl = "[object Function]", lC = "[object GeneratorFunction]", cC = "[object Map]", uC = "[object Number]", zl = "[object Object]", fC = "[object RegExp]", dC = "[object Set]", pC = "[object String]", hC = "[object Symbol]", gC = "[object WeakMap]", yC = "[object ArrayBuffer]", vC = "[object DataView]", mC = "[object Float32Array]", bC = "[object Float64Array]", wC = "[object Int8Array]", $C = "[object Int16Array]", SC = "[object Int32Array]", xC = "[object Uint8Array]", CC = "[object Uint8ClampedArray]", OC = "[object Uint16Array]", _C = "[object Uint32Array]", H = {};
H[Wl] = H[oC] = H[yC] = H[vC] = H[aC] = H[iC] = H[mC] = H[bC] = H[wC] = H[$C] = H[SC] = H[cC] = H[uC] = H[zl] = H[fC] = H[dC] = H[pC] = H[hC] = H[xC] = H[CC] = H[OC] = H[_C] = !0;
H[sC] = H[Hl] = H[gC] = !1;
function _r(e, t, r, n, o, a) {
  var i, s = t & tC, l = t & rC, c = t & nC;
  if (r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)
    return i;
  if (!Xx(e))
    return e;
  var f = Yx(e);
  if (f) {
    if (i = Gx(e), !s)
      return jx(e, i);
  } else {
    var d = zx(e), p = d == Hl || d == lC;
    if (Kx(e))
      return Fx(e, s);
    if (d == zl || d == Wl || p && !o) {
      if (i = l || p ? {} : qx(e), !s)
        return l ? Bx(e, kx(i, e)) : Ux(e, Nx(i, e));
    } else {
      if (!H[d])
        return o ? e : {};
      i = Vx(e, d, s);
    }
  }
  a || (a = new Ix());
  var g = a.get(e);
  if (g)
    return g;
  a.set(e, i), Jx(e) ? e.forEach(function(v) {
    i.add(_r(v, t, r, v, e, a));
  }) : Qx(e) && e.forEach(function(v, m) {
    i.set(m, _r(v, t, r, m, e, a));
  });
  var h = c ? l ? Hx : Wx : l ? eC : Zx, y = f ? void 0 : h(e);
  return Mx(y || e, function(v, m) {
    y && (m = v, v = e[m]), Lx(i, m, _r(v, t, r, m, e, a));
  }), i;
}
var TC = _r, PC = TC, EC = 4;
function AC(e) {
  return PC(e, EC);
}
var DC = AC;
const ts = /* @__PURE__ */ Oo(DC);
function RC(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
    o[r] = t(e[r], r, e);
  return o;
}
var Gl = RC, IC = fr, MC = at, LC = "[object Symbol]";
function NC(e) {
  return typeof e == "symbol" || MC(e) && IC(e) == LC;
}
var ia = NC, Vl = Xo, kC = "Expected a function";
function sa(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(kC);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, n);
    return r.cache = a.set(o, i) || a, i;
  };
  return r.cache = new (sa.Cache || Vl)(), r;
}
sa.Cache = Vl;
var FC = sa, jC = FC, UC = 500;
function BC(e) {
  var t = jC(e, function(n) {
    return r.size === UC && r.clear(), n;
  }), r = t.cache;
  return t;
}
var WC = BC, HC = WC, zC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, GC = /\\(\\)?/g, VC = HC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zC, function(r, n, o, a) {
    t.push(o ? a.replace(GC, "$1") : n || r);
  }), t;
}), qC = VC, YC = ia;
function KC(e) {
  if (typeof e == "string" || YC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var QC = KC, rs = ur, XC = Gl, JC = Mt, ZC = ia, ns = rs ? rs.prototype : void 0, os = ns ? ns.toString : void 0;
function ql(e) {
  if (typeof e == "string")
    return e;
  if (JC(e))
    return XC(e, ql) + "";
  if (ZC(e))
    return os ? os.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var eO = ql, tO = eO;
function rO(e) {
  return e == null ? "" : tO(e);
}
var nO = rO, oO = Gl, aO = jl, iO = Mt, sO = ia, lO = qC, cO = QC, uO = nO;
function fO(e) {
  return iO(e) ? oO(e, cO) : sO(e) ? [e] : aO(lO(uO(e)));
}
var dO = fO;
const Yl = /* @__PURE__ */ Oo(dO);
function xe(e, t, r, n = 0) {
  const o = Yl(t);
  for (; e && n < o.length; )
    e = e[o[n++]];
  return n !== o.length && !e || e === void 0 ? r : e;
}
const pO = (e) => e !== null && typeof e == "object" && !Array.isArray(e), hO = (e) => String(Math.floor(Number(e))) === e;
function Qe(e, t, r) {
  const n = ts(e);
  let o = n, a = 0;
  const i = Yl(t);
  for (; a < i.length - 1; a++) {
    const s = i[a], l = xe(e, i.slice(0, a + 1));
    if (l && (pO(l) || Array.isArray(l)))
      o = o[s] = ts(l);
    else {
      const c = i[a + 1];
      o = o[s] = hO(c) && Number(c) >= 0 ? [] : {};
    }
  }
  return (a === 0 ? e : o)[i[a]] === r ? e : (r === void 0 ? delete o[i[a]] : o[i[a]] = r, a === 0 && r === void 0 && delete n[i[a]], n);
}
const Re = "The Form Component has not been initialised, ensure you are using this hook within a Form component", [gO, Bt] = Ws("Form", {
  disabled: !1,
  errors: {},
  initialValues: {},
  isSubmitting: !1,
  modified: !1,
  addFieldRow: () => {
    throw new Error(Re);
  },
  moveFieldRow: () => {
    throw new Error(Re);
  },
  onChange: () => {
    throw new Error(Re);
  },
  removeFieldRow: () => {
    throw new Error(Re);
  },
  resetForm: () => {
    throw new Error(Re);
  },
  setErrors: () => {
    throw new Error(Re);
  },
  setValues: () => {
    throw new Error(Re);
  },
  setSubmitting: () => {
    throw new Error(Re);
  },
  validate: async () => {
    throw new Error(Re);
  },
  values: {}
}), fn = O.forwardRef(
  ({ disabled: e = !1, method: t, onSubmit: r, initialErrors: n, ...o }, a) => {
    const i = O.useRef(null), s = O.useRef(o.initialValues ?? {}), [l, c] = O.useReducer(mO, {
      errors: n ?? {},
      isSubmitting: !1,
      values: o.initialValues ?? {}
    });
    O.useEffect(() => {
      vo(s.current, o.initialValues) || (s.current = o.initialValues ?? {}, c({
        type: "SET_INITIAL_VALUES",
        payload: o.initialValues ?? {}
      }));
    }, [o.initialValues]);
    const f = O.useCallback(($) => {
      c({
        type: "SET_ERRORS",
        payload: $
      });
    }, []), d = O.useCallback(($) => {
      c({
        type: "SET_VALUES",
        payload: $
      });
    }, []);
    O.useEffect(() => {
      if (Object.keys(l.errors).length === 0) return;
      const $ = setTimeout(() => {
        const [C] = i.current.querySelectorAll("[data-strapi-field-error]");
        if (C) {
          const x = C.getAttribute("id"), A = i.current.querySelector(
            `[aria-describedby="${x}"]`
          );
          A && A instanceof HTMLElement && A.focus();
        }
      });
      return () => clearTimeout($);
    }, [l.errors]);
    const p = O.useCallback(
      async ($ = !0, C = {}) => {
        if (f({}), !o.validationSchema && !o.validate)
          return { data: l.values };
        try {
          let x;
          if (o.validationSchema)
            x = await o.validationSchema.validate(l.values, { abortEarly: !1 });
          else if (o.validate)
            x = await o.validate(l.values, C);
          else
            throw new Error("No validation schema or validate function provided");
          return { data: x };
        } catch (x) {
          if (yO(x)) {
            const A = vO(x);
            return $ && f(A), { errors: A };
          } else
            throw process.env.NODE_ENV !== "production" && console.warn(
              "Warning: An unhandled error was caught during validation in <Form validationSchema />",
              x
            ), x;
        }
      },
      [o, f, l.values]
    ), g = async ($) => {
      if ($.stopPropagation(), $.preventDefault(), !!r) {
        c({
          type: "SUBMIT_ATTEMPT"
        });
        try {
          const { data: C, errors: x } = await p();
          if (x)
            throw f(x), new Error("Submission failed");
          await r(C, {
            setErrors: f,
            setValues: d,
            resetForm: S
          }), c({
            type: "SUBMIT_SUCCESS"
          });
        } catch (C) {
          if (c({
            type: "SUBMIT_FAILURE"
          }), C instanceof Error && C.message === "Submission failed")
            return;
        }
      }
    }, h = O.useMemo(
      () => !vo(s.current, l.values),
      [l.values]
    ), y = bo(($, C) => {
      if (typeof $ == "string") {
        c({
          type: "SET_FIELD_VALUE",
          payload: {
            field: $,
            value: C
          }
        });
        return;
      }
      const x = $.target || $.currentTarget, { type: A, name: R, id: D, value: E, options: k, multiple: I } = x, W = R || D;
      !W && process.env.NODE_ENV !== "production" && console.warn(
        "`onChange` was called with an event, but you forgot to pass a `name` or `id'` attribute to your input. The field to update cannot be determined"
      );
      let j;
      if (/number|range/.test(A)) {
        const M = parseFloat(E);
        j = isNaN(M) ? "" : M;
      } else /checkbox/.test(A) ? j = !xe(l.values, W) : k && I ? j = Array.from(k).filter((M) => M.selected).map((M) => M.value) : E === "" ? j = null : j = E;
      W && c({
        type: "SET_FIELD_VALUE",
        payload: {
          field: W,
          value: j
        }
      });
    }), v = O.useCallback(
      ($, C, x) => {
        c({
          type: "ADD_FIELD_ROW",
          payload: {
            field: $,
            value: C,
            addAtIndex: x
          }
        });
      },
      []
    ), m = O.useCallback(
      ($, C) => {
        c({
          type: "REMOVE_FIELD_ROW",
          payload: {
            field: $,
            removeAtIndex: C
          }
        });
      },
      []
    ), w = O.useCallback(
      ($, C, x) => {
        c({
          type: "MOVE_FIELD_ROW",
          payload: {
            field: $,
            fromIndex: C,
            toIndex: x
          }
        });
      },
      []
    ), S = O.useCallback(() => {
      c({
        type: "RESET_FORM",
        payload: {
          errors: {},
          isSubmitting: !1,
          values: s.current
        }
      });
    }, []), _ = O.useCallback(($) => {
      c({ type: "SET_ISSUBMITTING", payload: $ });
    }, []), b = ce(i, a);
    return /* @__PURE__ */ u(
      F,
      {
        tag: "form",
        ref: b,
        method: t,
        noValidate: !0,
        onSubmit: g,
        width: o.width,
        height: o.height,
        style: { overflowY: "scroll" },
        children: /* @__PURE__ */ u(
          gO,
          {
            disabled: e,
            onChange: y,
            initialValues: s.current,
            modified: h,
            addFieldRow: v,
            moveFieldRow: w,
            removeFieldRow: m,
            resetForm: S,
            setErrors: f,
            setValues: d,
            setSubmitting: _,
            validate: p,
            ...l,
            children: typeof o.children == "function" ? o.children({
              modified: h,
              disabled: e,
              onChange: y,
              ...l,
              setErrors: f,
              resetForm: S
            }) : o.children
          }
        )
      }
    );
  }
), yO = (e) => typeof e == "object" && e !== null && "name" in e && typeof e.name == "string" && e.name === "ValidationError", vO = (e) => {
  let t = {};
  if (e.inner) {
    if (e.inner.length === 0)
      return Qe(t, e.path, e.message);
    for (const r of e.inner)
      xe(t, r.path) || (t = Qe(t, r.path, r.message));
  }
  return t;
}, mO = (e, t) => rv(e, (r) => {
  switch (t.type) {
    case "SET_INITIAL_VALUES":
      r.values = t.payload;
      break;
    case "SET_VALUES":
      r.values = t.payload;
      break;
    case "SUBMIT_ATTEMPT":
      r.isSubmitting = !0;
      break;
    case "SUBMIT_FAILURE":
      r.isSubmitting = !1;
      break;
    case "SUBMIT_SUCCESS":
      r.isSubmitting = !1;
      break;
    case "SET_FIELD_VALUE":
      r.values = Qe(e.values, t.payload.field, t.payload.value);
      break;
    case "ADD_FIELD_ROW": {
      const n = xe(e.values, t.payload.field, []);
      let o = t.payload.addAtIndex;
      o === void 0 ? o = n.length : o < 0 && (o = 0);
      const [a] = ui(
        o > 0 ? n.at(o - 1)?.__temp_key__ : null,
        n.at(o)?.__temp_key__
      );
      r.values = Qe(
        e.values,
        t.payload.field,
        n.toSpliced(o, 0, {
          ...t.payload.value,
          __temp_key__: a
        })
      );
      break;
    }
    case "MOVE_FIELD_ROW": {
      const { field: n, fromIndex: o, toIndex: a } = t.payload, i = [...xe(e.values, n, [])], s = i[o], l = o > a ? i[a - 1]?.__temp_key__ : i[a]?.__temp_key__, c = o > a ? i[a]?.__temp_key__ : i[a + 1]?.__temp_key__, [f] = ui(l, c);
      i.splice(o, 1), i.splice(a, 0, { ...s, __temp_key__: f }), r.values = Qe(e.values, n, i);
      break;
    }
    case "REMOVE_FIELD_ROW": {
      const n = xe(e.values, t.payload.field, []);
      let o = t.payload.removeAtIndex;
      o === void 0 ? o = n.length - 1 : o < 0 && (o = 0);
      const a = Qe(n, o.toString(), void 0).filter(
        (i) => i
      );
      r.values = Qe(
        e.values,
        t.payload.field,
        a.length > 0 ? a : []
      );
      break;
    }
    case "SET_ERRORS":
      vo(e.errors, t.payload) || (r.errors = t.payload);
      break;
    case "SET_ISSUBMITTING":
      r.isSubmitting = t.payload;
      break;
    case "RESET_FORM":
      r.values = t.payload.values, r.errors = t.payload.errors, r.isSubmitting = t.payload.isSubmitting;
      break;
  }
});
function he(e) {
  const { formatMessage: t } = me(), r = Bt(
    "useField",
    (s) => xe(s.initialValues, e)
  ), n = Bt(
    "useField",
    (s) => xe(s.values, e)
  ), o = Bt("useField", (s) => s.onChange), a = Bt("useField", (s) => xe(s.errors, e)), i = Bt("useField", (s) => {
    const l = xe(s.errors, e);
    if (as(l)) {
      const { values: c, ...f } = l;
      return t(f, c);
    }
    return l;
  });
  return {
    initialValue: r,
    /**
     * Errors can be a string, or a MessageDescriptor, so we need to handle both cases.
     * If it's anything else, we don't return it.
     */
    rawError: a,
    error: as(i) ? t(
      {
        id: i.id,
        defaultMessage: i.defaultMessage
      },
      i.values
    ) : typeof i == "string" ? i : void 0,
    onChange: o,
    value: n
  };
}
const as = (e) => typeof e == "object" && e !== null && !Array.isArray(e) && "id" in e && "defaultMessage" in e, bO = ({ headerTitle: e, onToggle: t }) => {
  const [r, n] = O.useState(""), [o, a] = O.useState(""), [i, s] = O.useState([]), l = () => fetch("https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=10").then((h) => h.json()).then((h) => (console.log("MODAL fetchData", h), h)), c = async (p, { setErrors: g }) => {
    t({ url: r, process_uuid: o });
  }, f = (p) => {
    n(p.target.value);
  }, d = (p) => {
    a(p);
  };
  return O.useEffect(() => {
    let p = !1;
    return p || l().then((g) => {
      const h = g.data.map((y) => {
        const { uuid: v, ...m } = y;
        return {
          id: v,
          ...m
        };
      });
      s((y) => [...y, ...h]);
    }), () => {
      p = !0;
    };
  }, []), /* @__PURE__ */ u(V.Root, { defaultOpen: !0, onOpenChange: () => {
    t(null);
  }, children: /* @__PURE__ */ T(V.Content, { children: [
    /* @__PURE__ */ u(V.Header, { children: /* @__PURE__ */ u(tr, { label: e, children: /* @__PURE__ */ u(rr, { isCurrent: !0, children: e }) }) }),
    /* @__PURE__ */ u(
      fn,
      {
        method: "POST",
        initialValues: {},
        onSubmit: c,
        children: /* @__PURE__ */ T(er, { children: [
          /* @__PURE__ */ u(V.Body, { children: /* @__PURE__ */ T(z, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ u(F, { children: /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: /* @__PURE__ */ u(oe.Item, { col: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ T(P.Root, { name: "url", required: !0, children: [
              /* @__PURE__ */ u(P.Label, { children: "URL" }),
              /* @__PURE__ */ u(nr, { required: !0, onChange: f, value: r }),
              /* @__PURE__ */ u(P.Hint, {}),
              /* @__PURE__ */ u(P.Error, {})
            ] }) }) }) }) }) }),
            /* @__PURE__ */ u(F, { children: /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: /* @__PURE__ */ u(oe.Item, { col: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ T(P.Root, { name: "process", required: !0, children: [
              /* @__PURE__ */ u(P.Label, { children: "Process" }),
              /* @__PURE__ */ u(cs, { required: !0, onChange: d, value: o, children: i.map((p) => /* @__PURE__ */ u(Gn, { value: p.id, children: p.name }, p.id)) }),
              /* @__PURE__ */ u(P.Hint, {}),
              /* @__PURE__ */ u(P.Error, {})
            ] }) }) }) }) }) })
          ] }) }),
          /* @__PURE__ */ T(V.Footer, { children: [
            /* @__PURE__ */ u(Te, { variant: "tertiary", onClick: () => {
              t(null);
            }, type: "button", children: "Cancel" }),
            /* @__PURE__ */ u(Te, { type: "submit", loading: !1, children: "Submit" })
          ] })
        ] })
      }
    )
  ] }) });
}, wO = O.createContext({
  toggleNotification: () => {
  }
});
/**
 * @preserve
 * @description Returns an object to interact with the notification
 * system. The callbacks are wrapped in `useCallback` for a stable
 * identity.
 *
 * @example
 * ```tsx
 * import { useNotification } from '@strapi/strapi/admin';
 *
 * const MyComponent = () => {
 *  const { toggleNotification } = useNotification();
 *
 *  return <button onClick={() => toggleNotification({ message: 'Hello world!' })}>Click me</button>;
 */
const dn = () => O.useContext(wO), $O = ({ taskData: e, onToggle: t }) => {
  const [r, n] = O.useState({ ...e }), { toggleNotification: o } = dn();
  return /* @__PURE__ */ u(V.Root, { defaultOpen: !0, onOpenChange: () => {
    t(!0);
  }, children: /* @__PURE__ */ T(V.Content, { children: [
    /* @__PURE__ */ u(V.Header, { children: /* @__PURE__ */ u(tr, { label: e.id, children: /* @__PURE__ */ u(rr, { isCurrent: !0, children: e.id }) }) }),
    /* @__PURE__ */ u(V.Body, { children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 6, children: /* @__PURE__ */ u(F, { children: /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: /* @__PURE__ */ u(
      oe.Item,
      {
        col: 12,
        direction: "column",
        alignItems: "stretch",
        children: /* @__PURE__ */ T(z, { direction: "column", alignItems: "stretch", gap: 1, children: [
          /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: "ID" }),
          /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: e.id })
        ] })
      }
    ) }) }) }) }) }) }),
    /* @__PURE__ */ T(V.Footer, { children: [
      /* @__PURE__ */ u(Te, { variant: "tertiary", onClick: t(!1), type: "button", children: "Cancel" }),
      /* @__PURE__ */ u(Te, { type: "submit", loading: !1, children: "Submit" })
    ] })
  ] }) });
}, SO = (e) => {
  switch (e) {
    case "init":
      return "started";
    case "inProgress":
      return "in progress";
    case "success":
      return "success";
    case "error":
      return "error";
    default:
      return "unknown";
  }
}, xO = (e) => {
  switch (e) {
    case "init":
      return ["rgb(107 114 128 / 1)", "rgb(243 244 246 / 1)"];
    case "inProgress":
      return ["rgb(249 115 22 / 1)", "rgb(255 237 213 / 1)"];
    case "success":
      return ["rgb(34 197 94 / 1)", "rgb(220 252 231 / 1)"];
    case "error":
      return ["rgb(239 68 68 / 1)", "rgb(254 226 226 / 1)"];
    default:
      return ["#000", "#000"];
  }
}, CO = ({ status: e }) => {
  const [t, r] = xO(e), n = {
    border: `1px solid ${t}`,
    color: t,
    backgroundColor: r,
    padding: "4px 8px 4px 8px",
    borderRadius: "100px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: 500
  };
  return /* @__PURE__ */ u(K, { style: n, children: SO(e) });
}, OO = [
  {
    name: "id",
    label: "ID",
    sortable: !1
  },
  {
    name: "steps",
    label: "Steps",
    sortable: !1,
    cellFormatter({ steps: e }) {
      return /* @__PURE__ */ u(mf, { steps: e });
    }
  },
  {
    name: "status",
    label: "Status",
    sortable: !1,
    cellFormatter({ status: e }) {
      return /* @__PURE__ */ u(CO, { status: e });
    }
  },
  {
    name: "timestamp",
    label: "Date",
    sortable: !0,
    cellFormatter({ timestamp: e }) {
      return /* @__PURE__ */ u(K, { textColor: "neutral800", children: of(e, "MMM d, yyyy HH:mm") });
    }
  }
], _O = () => {
  const [e, t] = O.useState([]), [r, n] = O.useState(), [o, a] = O.useState(!1), [i, s] = O.useState(!1), [l, c] = O.useState(!1), [f, d] = O.useState({}), { taskStatuses: p, stopChecking: g } = ff(f), h = {
    headerDefinition: OO,
    canRead: !0,
    canView: !0,
    needCheckbox: !1
  }, y = (b) => () => {
    console.log(b);
  }, v = () => {
    c((b) => !b);
  }, m = (b) => () => {
    console.log(b);
    const $ = e.find((C) => C.id === b);
    $ && (console.log($), n({ ...$ }), c((C) => !C));
  }, w = async (b) => {
    if (s((C) => !C), !b)
      return;
    const $ = {
      id: crypto.randomUUID().toString(),
      status: "inProgress",
      process_uuid: b.process_uuid,
      steps: [
        {
          name: "Scrapping",
          status: "inProgress",
          meta: { reqData: { url: b.url }, resData: null },
          time: null
        },
        { name: "Parsing", status: "init", meta: { reqData: null, resData: null }, time: null },
        { name: "Translation", status: "init", meta: { reqData: null, resData: null }, time: null }
      ],
      timestamp: Date.now(),
      operationId: null,
      time: null,
      resultUrl: null
    };
    t([...e, $]), ye("_tsk", [...e, $]);
    try {
      await _($);
    } catch {
      $.status = "error", Object.assign($.steps, $.steps.map((x) => (x.status !== "success" && x.status !== "init" && (x.status = "error"), x))), ye("_tsk", [...e, $]), t([...e, $]);
    }
  }, S = (b, $) => {
    const C = e.find((I) => I.id === b);
    if (!C)
      return;
    const { operation: x, info: A } = $, [R, D, E] = A, k = x.status === "OK" && x.status === "UNPROCESSED" && x.status === "IN_PROCESS";
    (x.status.startsWith("Error") || !k) && (C.steps[2].status = "error", C.status = "error", C.errorMessage = x.error), (x.status === "UNPROCESSED" || x.status === "IN_PROCESS") && (C.steps[2].status = "inProgress", C.status = "inProgress"), x.status === "OK" && (C.time = x.time, C.resultUrl = x.result_url, C.steps[2].status = "success", C.status = "success"), ye("_tsk", [...e]), t([...e]);
  }, _ = async (b) => {
    const [$, C, x] = b.steps, A = await sf($.meta.reqData?.url);
    if (A.error) {
      $.status = "error", b.status = "error", ye("_tsk", [...e, b]), t([...e, b]);
      return;
    }
    $.meta.resData = A.response, $.status = "success", C.status = "inProgress", ye("_tsk", [...e, b]), t([...e, b]), C.meta.reqData = A.response.file.url, ye("_tsk", [...e, b]), t([...e, b]);
    const R = await lf(A.response.file.url);
    if (C.meta.resData = R.response, R.error) {
      C.status = "error", b.status = "error", ye("_tsk", [...e, b]), t([...e, b]);
      return;
    }
    ye("_tsk", [...e, b]), t([...e, b]), C.status = "success", x.status = "inProgress", ye("_tsk", [...e, b]), t([...e, b]), x.meta.reqData = {
      url: R.response.json_url,
      process_uuid: b.process_uuid
    }, ye("_tsk", [...e, b]), t([...e, b]);
    const D = await cf(R.response.json_url, b.process_uuid);
    if (x.meta.resData = D.response, D.error) {
      x.status = "error", b.status = "error", ye("_tsk", [...e, b]), t([...e, b]);
      return;
    }
    b.operationId = D.response.operation_uuid, ye("_tsk", [...e, b]), t([...e, b]), console.log("processTask", b), d((E) => ({ ...E, [b.id]: D.response.operation_uuid }));
  };
  return O.useEffect(() => {
    const b = df("_tsk");
    t(b), b.filter(($) => $.status === "inProgress" && $.operationId !== null).map(($) => {
      d((C) => ({ ...C, [$.id]: $.operationId }));
    });
  }, []), O.useEffect(() => {
    Object.entries(p).forEach(([b, $]) => {
      $ && (console.log(`Статус задачи ${b} обновлен:`, $.operation.status), ($.operation.status === "OK" || $.operation.status === "ERROR") && (console.log(`Задача ${b} завершена, удаляем интервал`), g(b)), S(b, $));
    });
  }, [p]), /* @__PURE__ */ T(Ne.Main, { children: [
    /* @__PURE__ */ u(Ne.Title, { children: "Переводы" }),
    /* @__PURE__ */ u(
      Ce.Header,
      {
        primaryAction: null,
        title: "Переводы"
      }
    ),
    /* @__PURE__ */ u(
      Ce.Action,
      {
        startActions: /* @__PURE__ */ u(Te, { type: "primary", onClick: () => s((b) => !b), startIcon: /* @__PURE__ */ u(Dc, {}), children: "Перевод" })
      }
    ),
    /* @__PURE__ */ u(Ce.Content, { children: /* @__PURE__ */ u(
      By,
      {
        tableData: e,
        tableConfig: h,
        onRowClick: y,
        onDetailsBtnClick: m,
        isLoading: o
      }
    ) }),
    i && /* @__PURE__ */ u(
      bO,
      {
        headerTitle: "Новый Перевод",
        onToggle: (b) => {
          w(b);
        }
      }
    ),
    l && /* @__PURE__ */ u($O, { taskData: r, onToggle: v })
  ] });
}, TO = () => {
  const { formatMessage: e } = me();
  return /* @__PURE__ */ u(ss, { children: /* @__PURE__ */ u("h1", { children: "Welcome to Rag Page" }) });
}, la = ({
  tableData: e,
  tableConfig: t,
  onRowClick: r,
  onEditBtnClick: n,
  onDeleteBtnClick: o,
  isLoading: a = !1
}) => /* @__PURE__ */ T(q.Root, { rows: e, headers: t.headerDefinition, isLoading: a, children: [
  /* @__PURE__ */ u(q.ActionBar, {}),
  /* @__PURE__ */ T(q.Content, { children: [
    /* @__PURE__ */ T(q.Head, { children: [
      t.canDelete && t.needCheckbox ? /* @__PURE__ */ u(q.HeaderCheckboxCell, {}) : null,
      t.headerDefinition.map((i) => /* @__PURE__ */ u(q.HeaderCell, { ...i }, i.name))
    ] }),
    /* @__PURE__ */ u(q.Empty, {}),
    /* @__PURE__ */ u(q.Loading, {}),
    /* @__PURE__ */ u(q.Body, { children: e.map((i) => /* @__PURE__ */ T(
      q.Row,
      {
        onClick: r(i.id),
        cursor: t.canRead ? "pointer" : "default",
        children: [
          t.canDelete && t.needCheckbox ? /* @__PURE__ */ u(q.CheckboxCell, { id: i.id }) : null,
          t.headerDefinition.map(({ cellFormatter: s, name: l, ...c }) => /* @__PURE__ */ u(q.Cell, { children: typeof s == "function" ? s(i, { name: l, ...c }) : /* @__PURE__ */ u(K, { textColor: "neutral800", children: i[l] || "-" }) }, l)),
          t.canRead || t.canDelete ? /* @__PURE__ */ u(q.Cell, { onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ T(z, { justifyContent: "end", children: [
            t.canRead ? /* @__PURE__ */ u(
              ao,
              {
                button: /* @__PURE__ */ u(zn, { onClick: n(i.id), label: "Edit", variant: "ghost", withTooltip: !1, children: /* @__PURE__ */ u(Rc, {}) }),
                content: "Edit"
              }
            ) : null,
            t.canDelete ? /* @__PURE__ */ u(
              ao,
              {
                button: /* @__PURE__ */ u(zn, { onClick: o(i.id), label: "Delete", variant: "ghost", withTooltip: !1, children: /* @__PURE__ */ u(Ic, {}) }),
                content: "Delete"
              }
            ) : null
          ] }) }) : null
        ]
      },
      i.id
    )) })
  ] })
] }), ge = (e) => {
  const { search: t } = mo(), r = Je(() => new URLSearchParams(t), [t]), [n, o] = se(null);
  return Y(() => {
    r.has("field") && r.get("field") === e && n && (n.focus(), n.scrollIntoView({
      block: "center"
    }));
  }, [r, e, n]), o;
}, PO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, maxWidth: "320px", children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        $c,
        {
          ref: c,
          checked: s.value === null ? null : s.value || !1,
          offLabel: "False",
          onLabel: "True",
          onChange: s.onChange,
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), EO = ve(PO), AO = B(
  ({ name: e, required: t, label: r, hint: n, type: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(
        So,
        {
          onCheckedChange: (f) => s.onChange(e, !!f),
          ref: c,
          checked: s.value,
          ...a,
          children: r || a["aria-label"]
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), DO = ve(AO), RO = O.forwardRef(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, type: a, ...i }, s) => {
    const { formatMessage: l } = me(), c = he(e), f = ge(e), d = ce(s, f), [p, g] = O.useState(null), h = typeof c.value == "string" ? new Date(c.value) : c.value, y = (v) => {
      if (!v) {
        c.onChange(e, null), g(null);
        return;
      }
      const m = IO(v);
      c.onChange(e, m.toISOString()), g(m);
    };
    return /* @__PURE__ */ T(P.Root, { error: c.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        Sc,
        {
          ref: d,
          clearLabel: l({ id: "clearLabel", defaultMessage: "Clear" }),
          onChange: y,
          onClear: () => {
            c.onChange(e, null), g(null);
          },
          onBlur: () => {
            c.value && !h && c.onChange(e, p?.toISOString() ?? null);
          },
          value: h,
          ...i
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), IO = (e) => new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), MO = O.memo(RO), LO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const { formatMessage: s } = me(), l = he(e), c = ge(e), f = ce(i, c), d = typeof l.value == "string" ? new Date(l.value) : l.value;
    return /* @__PURE__ */ T(P.Root, { error: l.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        xc,
        {
          ref: f,
          clearLabel: s({ id: "clearLabel", defaultMessage: "Clear" }),
          onChange: (p) => {
            l.onChange(e, p ? p.toISOString() : null);
          },
          onClear: () => l.onChange(e, null),
          value: d,
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), NO = ve(LO), kO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        nr,
        {
          ref: c,
          autoComplete: "email",
          onChange: s.onChange,
          value: s.value,
          ...a,
          type: "email"
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), FO = ve(kO), jO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, options: a = [], ...i }, s) => {
    const { formatMessage: l } = me(), c = he(e), f = ge(e), d = ce(s, f);
    return /* @__PURE__ */ T(P.Root, { error: c.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ T(
        cs,
        {
          ref: d,
          onChange: (p) => {
            c.onChange(e, p);
          },
          value: c.value,
          ...i,
          children: [
            /* @__PURE__ */ u(Gn, { value: "", disabled: t, hidden: t, children: l({
              id: "components.InputSelect.option.placeholder",
              defaultMessage: "Choose here"
            }) }),
            a.map(({ value: p, label: g, disabled: h, hidden: y }) => /* @__PURE__ */ u(Gn, { value: p, disabled: h, hidden: y, children: g ?? p }, p))
          ]
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), UO = ve(jO), BO = O.forwardRef(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        Cc,
        {
          ref: c,
          value: typeof s.value == "object" ? JSON.stringify(s.value, null, 2) : s.value,
          onChange: (f) => {
            const d = t && !f.length ? null : f;
            s.onChange(e, d);
          },
          minHeight: "25.2rem",
          maxHeight: "50.4rem",
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), WO = O.memo(BO), HO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, type: a, ...i }, s) => {
    const l = he(e), c = ge(e), f = ce(s, c);
    return /* @__PURE__ */ T(P.Root, { error: l.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        Oc,
        {
          ref: f,
          onValueChange: (d) => {
            l.onChange(e, d ?? null);
          },
          step: a === "float" || a == "decimal" ? 0.01 : 1,
          value: l.value ?? void 0,
          ...i
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), zO = ve(HO), GO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const [s, l] = se(!1), { formatMessage: c } = me(), f = he(e), d = ge(e), p = ce(i, d);
    return /* @__PURE__ */ T(P.Root, { error: f.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        nr,
        {
          ref: p,
          autoComplete: "password",
          endAction: /* @__PURE__ */ u(
            P.Action,
            {
              label: c({
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              }),
              onClick: () => {
                l((g) => !g);
              },
              children: s ? /* @__PURE__ */ u(Mc, { fill: "neutral500" }) : /* @__PURE__ */ u(Lc, { fill: "neutral500" })
            }
          ),
          onChange: f.onChange,
          value: f.value,
          ...a,
          type: s ? "text" : "password"
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), VO = ve(GO), qO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        nr,
        {
          ref: c,
          onChange: s.onChange,
          value: s.value ?? "",
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), YO = ve(qO), KO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const s = he(e), l = ge(e), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        _c,
        {
          ref: c,
          onChange: s.onChange,
          value: s.value ?? "",
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), QO = ve(KO), XO = B(
  ({ name: e, required: t, label: r, hint: n, labelAction: o, ...a }, i) => {
    const { formatMessage: s } = me(), l = he(e), c = ge(e), f = ce(i, c);
    return /* @__PURE__ */ T(P.Root, { error: l.error, name: e, hint: n, required: t, children: [
      /* @__PURE__ */ u(P.Label, { action: o, children: r }),
      /* @__PURE__ */ u(
        Tc,
        {
          ref: f,
          clearLabel: s({ id: "clearLabel", defaultMessage: "Clear" }),
          onChange: (d) => {
            l.onChange(e, `${d}:00.000`);
          },
          onClear: () => l.onChange(e, void 0),
          value: l.value ?? "",
          ...a
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), JO = ve(XO), ZO = ve(
  B((e, t) => {
    switch (e.type) {
      case "biginteger":
      case "timestamp":
      case "string":
      case "uid":
        return /* @__PURE__ */ u(YO, { ref: t, ...e });
      case "boolean":
        return /* @__PURE__ */ u(EO, { ref: t, ...e });
      case "checkbox":
        return /* @__PURE__ */ u(DO, { ref: t, ...e });
      case "datetime":
        return /* @__PURE__ */ u(NO, { ref: t, ...e });
      case "date":
        return /* @__PURE__ */ u(MO, { ref: t, ...e });
      case "decimal":
      case "float":
      case "integer":
        return /* @__PURE__ */ u(zO, { ref: t, ...e });
      case "json":
        return /* @__PURE__ */ u(WO, { ref: t, ...e });
      case "email":
        return /* @__PURE__ */ u(FO, { ref: t, ...e });
      case "enumeration":
        return /* @__PURE__ */ u(UO, { ref: t, ...e });
      case "password":
        return /* @__PURE__ */ u(VO, { ref: t, ...e });
      case "text":
        return /* @__PURE__ */ u(QO, { ref: t, ...e });
      case "time":
        return /* @__PURE__ */ u(JO, { ref: t, ...e });
      default:
        return /* @__PURE__ */ u(e_, { ref: t, ...e });
    }
  })
), e_ = B(
  ({ label: e, hint: t, name: r, required: n, type: o, labelAction: a }, i) => {
    const { error: s } = he(r), l = ge(r), c = ce(i, l);
    return /* @__PURE__ */ T(P.Root, { error: s, name: r, hint: t, required: n, children: [
      /* @__PURE__ */ u(P.Label, { action: a, children: e }),
      /* @__PURE__ */ u(
        nr,
        {
          ref: c,
          disabled: !0,
          placeholder: `Unsupported field type: ${o}`,
          required: n,
          type: "text",
          value: ""
        }
      ),
      /* @__PURE__ */ u(P.Hint, {}),
      /* @__PURE__ */ u(P.Error, {})
    ] });
  }
), Zt = ve(ZO), t_ = ({ stepInfo: e }) => /* @__PURE__ */ u(oe.Root, { gap: 5, children: Object.entries(e).map(([t, r], n) => /* @__PURE__ */ u(
  oe.Item,
  {
    col: 6,
    direction: "column",
    alignItems: "stretch",
    children: /* @__PURE__ */ u(
      Zt,
      {
        type: "string",
        disabled: !!["uuid"].includes(t),
        label: t,
        value: r
      }
    )
  },
  n
)) }), r_ = [
  [
    {
      label: "ID",
      name: "id",
      type: "string",
      size: 12,
      disabled: !0
    }
  ],
  [
    {
      label: "Name",
      name: "name",
      type: "string",
      size: 8
    },
    {
      label: "Timeout",
      name: "timeout",
      type: "float",
      size: 4,
      disabled: !0
    }
  ]
], n_ = ({ headerTitle: e, modelData: t, onToggle: r }) => {
  const [n, o] = O.useState({ ...t }), { toggleNotification: a } = dn(), i = (l) => {
    const c = `https://llm.cnnews.xplr.ru/v1/process-step/process/${l}`, f = fetch(c).then((d) => d.json()).then((d) => (console.log(d), d));
    return console.log(f), f;
  }, s = async (l, { setErrors: c }) => {
    console.log(l), r(!1);
  };
  return O.useEffect(() => {
    let l = !1;
    return l || i(n.id).then((c) => {
      o({ ...n, steps: c.steps });
    }), () => {
      l = !0;
    };
  }, []), /* @__PURE__ */ u(V.Root, { defaultOpen: !0, onOpenChange: () => {
    r(!0);
  }, children: /* @__PURE__ */ T(V.Content, { children: [
    /* @__PURE__ */ u(V.Header, { children: /* @__PURE__ */ u(tr, { label: e, children: /* @__PURE__ */ u(rr, { isCurrent: !0, children: e }) }) }),
    /* @__PURE__ */ u(
      fn,
      {
        method: "POST",
        initialValues: n ?? {},
        onSubmit: s,
        children: /* @__PURE__ */ T(er, { children: [
          /* @__PURE__ */ u(V.Body, { children: /* @__PURE__ */ T(z, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ u(F, { children: /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: r_.map((l) => l.map(({ size: c, ...f }) => /* @__PURE__ */ u(
              oe.Item,
              {
                col: c,
                direction: "column",
                alignItems: "stretch",
                children: /* @__PURE__ */ u(
                  Zt,
                  {
                    ...f,
                    disabled: f.disabled ?? !1,
                    label: f.label,
                    placeholder: f.placeholder ?? ""
                  }
                )
              },
              f.name
            ))) }) }) }) }),
            /* @__PURE__ */ T(F, { children: [
              /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: "Steps" }),
              /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: n.steps && n.steps.map((l) => /* @__PURE__ */ T("details", { style: {
                borderWidth: "1px",
                borderColor: "#eee",
                borderStyle: "solid",
                padding: "8px"
              }, children: [
                /* @__PURE__ */ u("summary", { children: /* @__PURE__ */ u(K, { variant: "beta", tag: "h3", children: `#${l.position}. ${l.name}` }) }),
                /* @__PURE__ */ u(t_, { stepInfo: l })
              ] })) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ u(V.Footer, { children: /* @__PURE__ */ u(Te, { variant: "tertiary", onClick: () => {
            r(!1);
          }, type: "button", children: "Cancel" }) })
        ] })
      }
    )
  ] }) });
}, o_ = [
  {
    name: "name",
    label: "Name",
    sortable: !1
  },
  {
    name: "description",
    label: "Description",
    sortable: !1
  }
], a_ = () => {
  const [e, t] = O.useState([]), [r, n] = O.useState({}), [o, a] = O.useState(!1), [i, s] = O.useState(!1), l = {
    headerDefinition: o_,
    canRead: !0,
    canDelete: !1,
    needCheckbox: !1
  }, c = () => fetch("https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=10").then((v) => v.json()).then((v) => v.data), f = (h) => () => {
    const y = e.find((v) => v.id === h);
    y && console.log(y);
  }, d = (h) => () => {
    console.log(h);
    const y = e.find((v) => v.id === h);
    y && (n(y), s((v) => !v));
  }, p = (h) => () => {
    console.log(h);
  }, g = (h) => {
    h && (a(!0), c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, ...w } = v;
        return {
          id: m,
          ...w
        };
      }));
    }), a(!1)), s((y) => !y);
  };
  return O.useEffect(() => {
    let h = !1;
    return a(!0), h || (c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, ...w } = v;
        return {
          id: m,
          ...w
        };
      }));
    }), a(!1)), () => {
      h = !0;
    };
  }, []), /* @__PURE__ */ T(Ne.Main, { children: [
    /* @__PURE__ */ u(Ne.Title, { children: "Процессы" }),
    /* @__PURE__ */ u(
      Ce.Header,
      {
        primaryAction: null,
        title: "Процессы"
      }
    ),
    /* @__PURE__ */ u(Ce.Content, { children: /* @__PURE__ */ u(
      la,
      {
        tableData: e,
        tableConfig: l,
        isLoading: o,
        onRowClick: f,
        onEditBtnClick: d,
        onDeleteBtnClick: p
      }
    ) }),
    i && /* @__PURE__ */ u(
      n_,
      {
        headerTitle: r.name ?? "",
        modelData: r,
        onToggle: (h) => {
          g(h);
        }
      }
    )
  ] });
}, i_ = [
  // id: string;
  // llmId: string;
  [
    {
      label: "ID",
      name: "id",
      type: "string",
      size: 6,
      disabled: !0
    },
    {
      label: "Model",
      name: "llmId",
      type: "string",
      size: 6,
      disabled: !0
    }
  ],
  // agent: string;
  // name: string;
  [
    {
      label: "Agent",
      name: "agent",
      type: "string",
      size: 6
    },
    {
      label: "Name",
      name: "name",
      type: "string",
      size: 6
    }
  ]
], s_ = [
  // responsibilities: string;
  // keep_comments: true,
  [
    {
      label: "Responsibilities",
      name: "config.responsibilities",
      type: "string",
      size: 8
    },
    {
      label: "Keep Comments",
      name: "config.keep_comments",
      type: "boolean",
      size: 4
    }
  ],
  // skills: string;
  [
    {
      label: "Skills",
      name: "config.skills",
      type: "text",
      size: 12
    }
  ],
  // personality: string;
  [
    {
      label: "Personality",
      name: "config.personality",
      type: "text",
      size: 12
    }
  ],
  // goals: string;
  [
    {
      label: "Goals",
      name: "config.goals",
      type: "text",
      size: 12
    }
  ],
  // tasks: string;
  [
    {
      label: "Tasks",
      name: "config.tasks",
      type: "text",
      size: 12
    }
  ],
  // language: string;
  [
    {
      label: "Language",
      name: "config.language",
      type: "string",
      size: 12
    }
  ],
  // tone: string;
  [
    {
      label: "Tone",
      name: "config.tone",
      type: "string",
      size: 12
    }
  ],
  // style: string;
  [
    {
      label: "Style",
      name: "config.style",
      type: "string",
      size: 12
    }
  ],
  // instructions: string;
  [
    {
      label: "Instructions",
      name: "config.instructions",
      type: "text",
      size: 12
    }
  ]
], l_ = ({ headerTitle: e, modelData: t, onToggle: r }) => {
  const [n, o] = O.useState({ ...t }), { toggleNotification: a } = dn(), i = async (c) => {
    const f = {
      llm_uuid: c.llmId,
      agent: c.agent,
      name: c.name,
      responsibilities: c.config.responsibilities,
      skills: c.config.skills,
      personality: c.config.personality,
      goals: c.config.goals,
      tasks: c.config.tasks,
      language: c.config.language,
      tone: c.config.tone,
      style: c.config.style,
      instructions: c.config.instructions,
      keep_comments: c.config.keep_comments
    };
    return await (await fetch(`https://llm.cnnews.xplr.ru/v1/agent-profile/${c.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f)
    })).json();
  }, s = n, l = async (c, { setErrors: f }) => {
    console.log(c);
    const d = await i(c);
    console.log(d), a({
      type: "success",
      message: JSON.stringify(d)
    }), r(!0);
  };
  return /* @__PURE__ */ u(V.Root, { defaultOpen: !0, onOpenChange: () => {
    r(!0);
  }, children: /* @__PURE__ */ T(V.Content, { children: [
    /* @__PURE__ */ u(V.Header, { children: /* @__PURE__ */ u(tr, { label: e, children: /* @__PURE__ */ u(rr, { isCurrent: !0, children: e }) }) }),
    /* @__PURE__ */ u(
      fn,
      {
        method: "POST",
        initialValues: s ?? {},
        onSubmit: l,
        children: /* @__PURE__ */ T(er, { children: [
          /* @__PURE__ */ u(V.Body, { children: /* @__PURE__ */ T(z, { direction: "column", alignItems: "stretch", gap: 6, children: [
            /* @__PURE__ */ T(F, { children: [
              /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: "Agent details" }),
              /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: i_.map((c) => c.map(({ size: f, ...d }) => /* @__PURE__ */ u(
                oe.Item,
                {
                  col: f,
                  direction: "column",
                  alignItems: "stretch",
                  children: /* @__PURE__ */ u(
                    Zt,
                    {
                      ...d,
                      disabled: d.disabled ?? !1,
                      label: d.label,
                      placeholder: d.placeholder ?? ""
                    }
                  )
                },
                d.name
              ))) }) }) })
            ] }),
            /* @__PURE__ */ T(F, { children: [
              /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: "Agent configuration" }),
              /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: s_.map((c) => c.map(({ size: f, ...d }) => /* @__PURE__ */ u(
                oe.Item,
                {
                  col: f,
                  direction: "column",
                  alignItems: "stretch",
                  children: /* @__PURE__ */ u(
                    Zt,
                    {
                      ...d,
                      disabled: d.disabled ?? !1,
                      label: d.label,
                      placeholder: d.placeholder ?? ""
                    }
                  )
                },
                d.name
              ))) }) }) })
            ] })
          ] }) }),
          /* @__PURE__ */ T(V.Footer, { children: [
            /* @__PURE__ */ u(Te, { variant: "tertiary", onClick: () => {
              r(!1);
            }, type: "button", children: "Cancel" }),
            /* @__PURE__ */ u(Te, { type: "submit", loading: !1, children: "Submit" })
          ] })
        ] })
      }
    )
  ] }) });
}, c_ = [
  {
    name: "agent",
    label: "Agent",
    sortable: !1
  },
  {
    name: "name",
    label: "Name",
    sortable: !0
  },
  {
    name: "llmId",
    label: "Model ID",
    sortable: !1
  }
], u_ = () => {
  const [e, t] = O.useState([]), [r, n] = O.useState({}), [o, a] = O.useState(!1), [i, s] = O.useState(!1), l = {
    headerDefinition: c_,
    canRead: !0,
    canDelete: !1,
    needCheckbox: !1
  }, c = () => fetch("https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=10").then((v) => v.json()).then((v) => v.data), f = (h) => () => {
    console.log(h);
  }, d = (h) => () => {
    console.log(h);
    const y = e.find((v) => v.id === h);
    y && (n({ ...y }), s((v) => !v));
  }, p = (h) => () => {
    console.log(h);
  }, g = (h) => {
    h && (a(!0), c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, llm_uuid: w, agent: S, name: _, ...b } = v;
        return {
          id: m,
          llmId: w,
          agent: S,
          name: _,
          config: {
            ...b
          }
        };
      }));
    }), a(!1)), s((y) => !y);
  };
  return O.useEffect(() => {
    let h = !1;
    return a(!0), h || (c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, llm_uuid: w, agent: S, name: _, ...b } = v;
        return {
          id: m,
          llmId: w,
          agent: S,
          name: _,
          config: {
            ...b
          }
        };
      }));
    }), a(!1)), () => {
      h = !0;
    };
  }, []), /* @__PURE__ */ T(Ne.Main, { children: [
    /* @__PURE__ */ u(Ne.Title, { children: "Агенты" }),
    /* @__PURE__ */ u(
      Ce.Header,
      {
        primaryAction: null,
        title: "Агенты"
      }
    ),
    /* @__PURE__ */ u(Ce.Content, { children: /* @__PURE__ */ u(
      la,
      {
        tableData: e,
        tableConfig: l,
        isLoading: o,
        onRowClick: f,
        onEditBtnClick: d,
        onDeleteBtnClick: p
      }
    ) }),
    i && /* @__PURE__ */ u(
      l_,
      {
        headerTitle: r.displayName ?? "",
        modelData: r,
        onToggle: (h) => {
          g(h);
        }
      }
    )
  ] });
}, f_ = [
  [
    {
      label: "ID",
      name: "id",
      type: "string",
      size: 6,
      disabled: !0
    },
    {
      label: "Model Provider",
      name: "modelProvider",
      type: "string",
      size: 6,
      disabled: !0
    }
  ],
  [
    {
      label: "Display Name",
      name: "displayName",
      type: "string",
      size: 6
    },
    {
      label: "Use Tools",
      name: "useTools",
      type: "boolean",
      size: 6
    }
  ],
  [
    {
      label: "Name",
      name: "name",
      type: "string",
      size: 6
    },
    {
      label: "Max Temperature",
      name: "max_temperature",
      type: "float",
      size: 6
    }
  ]
], d_ = ({ headerTitle: e, modelData: t, onToggle: r }) => {
  const [n, o] = O.useState({ ...t }), { toggleNotification: a } = dn(), i = async (c) => {
    const f = {
      name: c.name,
      display_name: c.displayName,
      use_tools: c.useTools,
      max_temperature: c.max_temperature,
      llm_connection_uuid: c.llm_connection_uuid
    };
    return await (await fetch(`https://llm.cnnews.xplr.ru/v1/llm/${c.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(f)
    })).json();
  }, s = n, l = async (c, { setErrors: f }) => {
    console.log(c);
    const d = await i(c);
    console.log(d), a({
      type: "success",
      message: JSON.stringify(d)
    }), r(!0);
  };
  return /* @__PURE__ */ u(V.Root, { defaultOpen: !0, onOpenChange: () => {
    r(!0);
  }, children: /* @__PURE__ */ T(V.Content, { children: [
    /* @__PURE__ */ u(V.Header, { children: /* @__PURE__ */ u(tr, { label: e, children: /* @__PURE__ */ u(rr, { isCurrent: !0, children: e }) }) }),
    /* @__PURE__ */ u(
      fn,
      {
        method: "POST",
        initialValues: s ?? {},
        onSubmit: l,
        children: /* @__PURE__ */ T(er, { children: [
          /* @__PURE__ */ u(V.Body, { children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 6, children: /* @__PURE__ */ T(F, { children: [
            /* @__PURE__ */ u(K, { variant: "beta", tag: "h2", children: "Model details" }),
            /* @__PURE__ */ u(F, { paddingTop: 4, children: /* @__PURE__ */ u(z, { direction: "column", alignItems: "stretch", gap: 1, children: /* @__PURE__ */ u(oe.Root, { gap: 5, children: f_.map((c) => c.map(({ size: f, ...d }) => /* @__PURE__ */ u(
              oe.Item,
              {
                col: f,
                direction: "column",
                alignItems: "stretch",
                children: /* @__PURE__ */ u(
                  Zt,
                  {
                    ...d,
                    disabled: d.disabled ?? !1,
                    label: d.label,
                    placeholder: d.placeholder ?? ""
                  }
                )
              },
              d.name
            ))) }) }) })
          ] }) }) }),
          /* @__PURE__ */ T(V.Footer, { children: [
            /* @__PURE__ */ u(Te, { variant: "tertiary", onClick: () => {
              r(!1);
            }, type: "button", children: "Cancel" }),
            /* @__PURE__ */ u(Te, { type: "submit", loading: !1, children: "Submit" })
          ] })
        ] })
      }
    )
  ] }) });
}, is = {
  "bc1466ac-15f4-4515-80c5-037171260986": "gitee.io Proxy",
  "ebd1d59a-5026-4c6d-8506-604497016fd1": "Gitee AI 1",
  "abd1d59a-5026-4c6d-8506-604497016fd6": "Gitee AI 2",
  "ae6447b9-6f30-4e09-869e-044c8771a941": "Together AI"
}, p_ = [
  {
    name: "displayName",
    label: "Model Name",
    sortable: !0
  },
  {
    name: "modelProvider",
    label: "Provider",
    sortable: !0
  },
  {
    name: "useTools",
    label: "Tools",
    sortable: !1,
    cellFormatter({ useTools: e }) {
      return /* @__PURE__ */ u(K, { textColor: "neutral800", children: e ? "True" : "False" });
    }
  }
], h_ = () => {
  const [e, t] = O.useState([]), [r, n] = O.useState({}), [o, a] = O.useState(!1), [i, s] = O.useState(!1), l = {
    headerDefinition: p_,
    canRead: !0,
    canDelete: !1,
    needCheckbox: !1
  }, c = () => fetch("https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=10").then((v) => v.json()).then((v) => v.data), f = (h) => () => {
    console.log(h);
  }, d = (h) => () => {
    console.log(h);
    const y = e.find((v) => v.id === h);
    y && (n({ ...y }), s((v) => !v));
  }, p = (h) => () => {
    console.log(h);
  }, g = (h) => {
    h && (a(!0), c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, display_name: w, llm_connection_uuid: S, use_tools: _, ...b } = v;
        return {
          id: m,
          displayName: w,
          modelProvider: is[S] ?? "UNKNOWN",
          llm_connection_uuid: S,
          useTools: _,
          ...b
        };
      }));
    }), a(!1)), s((y) => !y);
  };
  return O.useEffect(() => {
    let h = !1;
    return a(!0), h || (c().then((y) => {
      t(y.map((v) => {
        const { uuid: m, display_name: w, llm_connection_uuid: S, use_tools: _, ...b } = v;
        return {
          id: m,
          displayName: w,
          modelProvider: is[S] ?? "UNKNOWN",
          llm_connection_uuid: S,
          useTools: _,
          ...b
        };
      }));
    }), a(!1)), () => {
      h = !0;
    };
  }, []), /* @__PURE__ */ T(Ne.Main, { children: [
    /* @__PURE__ */ u(Ne.Title, { children: "Модели" }),
    /* @__PURE__ */ u(
      Ce.Header,
      {
        primaryAction: null,
        title: "Модели"
      }
    ),
    /* @__PURE__ */ u(Ce.Content, { children: /* @__PURE__ */ u(
      la,
      {
        tableData: e,
        tableConfig: l,
        isLoading: o,
        onRowClick: f,
        onEditBtnClick: d,
        onDeleteBtnClick: p
      }
    ) }),
    i && /* @__PURE__ */ u(
      d_,
      {
        headerTitle: r.displayName ?? "",
        modelData: r,
        onToggle: (h) => {
          g(h);
        }
      }
    )
  ] });
}, g_ = [
  {
    id: 1,
    title: "Common",
    links: [
      {
        id: 0,
        label: "Переводы",
        to: "",
        hasNotification: !1,
        icon: !0
      }
    ]
  },
  {
    id: 2,
    title: "System",
    links: [
      // {
      //   id: 1,
      //   label: "База Знаний",
      //   to: "rag",
      //   hasNotification: false,
      //   icon: false,
      // },
      {
        id: 2,
        label: "Процессы",
        to: "procs",
        hasNotification: !1,
        icon: !1
      },
      {
        id: 3,
        label: "Агенты",
        to: "agents",
        hasNotification: !1,
        icon: !1
      },
      {
        id: 4,
        label: "Модели",
        to: "models",
        hasNotification: !1,
        icon: !1
      }
    ]
  }
], P_ = () => /* @__PURE__ */ T(dc, { children: [
  /* @__PURE__ */ T(Ge, { path: "/", element: /* @__PURE__ */ u(Jc, { sections: g_ }), children: [
    /* @__PURE__ */ u(
      Ge,
      {
        index: !0,
        element: /* @__PURE__ */ u(_O, {})
      }
    ),
    /* @__PURE__ */ u(
      Ge,
      {
        path: "rag",
        element: /* @__PURE__ */ u(TO, {})
      }
    ),
    /* @__PURE__ */ u(
      Ge,
      {
        path: "procs",
        element: /* @__PURE__ */ u(a_, {})
      }
    ),
    /* @__PURE__ */ u(
      Ge,
      {
        path: "agents",
        element: /* @__PURE__ */ u(u_, {})
      }
    ),
    /* @__PURE__ */ u(
      Ge,
      {
        path: "models",
        element: /* @__PURE__ */ u(h_, {})
      }
    )
  ] }),
  /* @__PURE__ */ u(Ge, { path: "*", element: /* @__PURE__ */ u(sc.Error, {}) })
] });
export {
  P_ as App
};
//# sourceMappingURL=App-OWir1XRE.mjs.map
