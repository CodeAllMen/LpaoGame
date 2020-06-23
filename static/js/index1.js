/****************************/
/* Copyright 2018 Zygomatic */
/* http://www.zygomatic.nl  */
/****************************/

/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function(a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function(a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = a.document,
    m = "2.1.3",
    n = function(a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this);
    },
    get: function(a) {
      return null != a
        ? 0 > a
          ? this[a + this.length]
          : this[a]
        : d.call(this);
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return (b.prevObject = this), (b.context = this.context), b;
    },
    each: function(a, b) {
      return n.each(this, a, b);
    },
    map: function(a) {
      return this.pushStack(
        n.map(this, function(b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }),
    (n.extend = n.fn.extend = function() {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || n.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        i > h;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (n.isPlainObject(d) || (e = n.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && n.isArray(c) ? c : []))
                      : (f = c && n.isPlainObject(c) ? c : {}),
                    (g[b] = n.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a);
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === n.type(a);
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window;
      },
      isNumeric: function(a) {
        return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isPlainObject: function(a) {
        return "object" !== n.type(a) || a.nodeType || n.isWindow(a)
          ? !1
          : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")
            ? !1
            : !0;
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function(a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
            ? h[i.call(a)] || "object"
            : typeof a;
      },
      globalEval: function(a) {
        var b,
          c = eval;
        (a = n.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = l.createElement("script")),
                (b.text = a),
                l.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function(a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function(a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = s(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function(a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : g.call(b, a, c);
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function(a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function(a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          n.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              (f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || n.guid++),
              f)
            : void 0
        );
      },
      now: Date.now,
      support: k
    }),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
        ? !0
        : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = hb(),
      z = hb(),
      A = hb(),
      B = function(a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ab = /[+~]/,
      bb = /'|\\/g,
      cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      db = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      eb = function() {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fb) {
      H = {
        apply: E.length
          ? function(a, b) {
              G.apply(a, I.call(b));
            }
          : function(a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            }
      };
    }
    function gb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(bb, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + rb(o[l]);
            (w = (ab.test(a) && pb(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function hb() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ib(a) {
      return (a[u] = !0), a;
    }
    function jb(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function kb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function lb(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function mb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function nb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ob(a) {
      return ib(function(b) {
        return (
          (b = +b),
          ib(function(c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pb(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = gb.support = {}),
      (f = gb.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }),
      (m = gb.setDocument = function(a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = g.documentElement),
            (e = g.defaultView),
            e &&
              e !== e.top &&
              (e.addEventListener
                ? e.addEventListener("unload", eb, !1)
                : e.attachEvent && e.attachEvent("onunload", eb)),
            (p = !f(g)),
            (c.attributes = jb(function(a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = jb(function(a) {
              return (
                a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = $.test(g.getElementsByClassName)),
            (c.getById = jb(function(a) {
              return (
                (o.appendChild(a).id = u),
                !g.getElementsByName || !g.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.find.ID = function(a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                  }
                }),
                (d.filter.ID = function(a) {
                  var b = a.replace(cb, db);
                  return function(a) {
                    return a.getAttribute("id") === b;
                  };
                }))
              : (delete d.find.ID,
                (d.filter.ID = function(a) {
                  var b = a.replace(cb, db);
                  return function(a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function(a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                }
              : function(a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
              }),
            (r = []),
            (q = []),
            (c.qsa = $.test(g.querySelectorAll)) &&
              (jb(function(a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + L + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + L + "*(?:value|" + K + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + L + "*[*^$|!~]?="),
                  a.querySelectorAll(":enabled").length ||
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = $.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              jb(function(a) {
                (c.disconnectedMatch = s.call(a, "div")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", P);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = $.test(o.compareDocumentPosition)),
            (t =
              b || $.test(o.contains)
                ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function(a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function(a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === g || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                              ? J(k, a) - J(k, b)
                              : 0
                        : 4 & d
                          ? -1
                          : 1);
                }
              : function(a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                  if (!e || !f)
                    return a === g
                      ? -1
                      : b === g
                        ? 1
                        : e
                          ? -1
                          : f
                            ? 1
                            : k
                              ? J(k, a) - J(k, b)
                              : 0;
                  if (e === f) return lb(a, b);
                  c = a;
                  while ((c = c.parentNode)) h.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) i.unshift(c);
                  while (h[d] === i[d]) d++;
                  return d
                    ? lb(h[d], i[d])
                    : h[d] === v
                      ? -1
                      : i[d] === v
                        ? 1
                        : 0;
                }),
            g)
          : n;
      }),
      (gb.matches = function(a, b) {
        return gb(a, null, null, b);
      }),
      (gb.matchesSelector = function(a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return gb(b, n, null, [a]).length > 0;
      }),
      (gb.contains = function(a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (gb.attr = function(a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
              ? f.value
              : null;
      }),
      (gb.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (gb.uniqueSort = function(a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = gb.getText = function(a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = gb.selectors = {
        cacheLength: 50,
        createPseudo: ib,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(a) {
            return (
              (a[1] = a[1].replace(cb, db)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function(a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || gb.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && gb.error(a[0]),
              a
            );
          },
          PSEUDO: function(a) {
            var b,
              c = !a[6] && a[2];
            return X.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    V.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(cb, db).toLowerCase();
            return "*" === a
              ? function() {
                  return !0;
                }
              : function(a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function(a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                y(a, function(a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function(a, b, c) {
            return function(d) {
              var e = gb.attr(d, a);
              return null == e
                ? "!=" === b
                : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                        ? e !== c
                        : "^=" === b
                          ? c && 0 === e.indexOf(c)
                          : "*=" === b
                            ? c && e.indexOf(c) > -1
                            : "$=" === b
                              ? c && e.slice(-c.length) === c
                              : "~=" === b
                                ? (" " + e.replace(Q, " ") + " ").indexOf(c) >
                                  -1
                                : "|=" === b
                                  ? e === c ||
                                    e.slice(0, c.length + 1) === c + "-"
                                  : !1)
                  : !0;
            };
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function(a) {
                  return !!a.parentNode;
                }
              : function(b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h;
                  if (q) {
                    if (f) {
                      while (p) {
                        l = b;
                        while ((l = l[p]))
                          if (
                            h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (k = q[u] || (q[u] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (m = j[0] === w && j[2]),
                        (l = n && q.childNodes[n]);
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (1 === l.nodeType && ++m && l === b) {
                          k[a] = [w, n, m];
                          break;
                        }
                    } else if (
                      s &&
                      (j = (b[u] || (b[u] = {}))[a]) &&
                      j[0] === w
                    )
                      m = j[1];
                    else
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (
                          (h
                            ? l.nodeName.toLowerCase() === r
                            : 1 === l.nodeType) &&
                          ++m &&
                          (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                        )
                          break;
                    return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                  }
                };
          },
          PSEUDO: function(a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                gb.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ib(function(a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function(a) {
                        return e(a, 0, c);
                      })
                : e;
          }
        },
        pseudos: {
          not: ib(function(a) {
            var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
            return d[u]
              ? ib(function(a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function(a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ib(function(a) {
            return function(b) {
              return gb(a, b).length > 0;
            };
          }),
          contains: ib(function(a) {
            return (
              (a = a.replace(cb, db)),
              function(b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ib(function(a) {
            return (
              W.test(a || "") || gb.error("unsupported lang: " + a),
              (a = a.replace(cb, db).toLowerCase()),
              function(b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function(a) {
            return a === o;
          },
          focus: function(a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function(a) {
            return a.disabled === !1;
          },
          disabled: function(a) {
            return a.disabled === !0;
          },
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function(a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function(a) {
            return !d.pseudos.empty(a);
          },
          header: function(a) {
            return Z.test(a.nodeName);
          },
          input: function(a) {
            return Y.test(a.nodeName);
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function(a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: ob(function() {
            return [0];
          }),
          last: ob(function(a, b) {
            return [b - 1];
          }),
          eq: ob(function(a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: ob(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a;
          }),
          odd: ob(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a;
          }),
          lt: ob(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: ob(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
            return a;
          })
        }
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = mb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);
    function qb() {}
    (qb.prototype = d.filters = d.pseudos),
      (d.setFilters = new qb()),
      (g = gb.tokenize = function(a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (!c || (e = S.exec(h))) &&
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = T.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(R, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = X[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
      });
    function rb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function(b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function(b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function tb(a) {
      return a.length > 1
        ? function(b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ub(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
      return c;
    }
    function vb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wb(d)),
        e && !e[u] && (e = wb(e, f)),
        ib(function(f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : vb(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = vb(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = vb(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sb(
            function(a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sb(
            function(a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function(a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            }
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sb(tb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wb(
              i > 1 && tb(m),
              i > 1 &&
                rb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xb(a.slice(i, e)),
              f > e && xb((a = a.slice(e))),
              f > e && rb(a)
            );
          }
          m.push(c);
        }
      return tb(m);
    }
    function yb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = vb(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ib(f) : f;
    }
    return (
      (h = gb.compile = function(a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = xb(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, yb(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = gb.select = function(a, b, e, f) {
        var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g((a = n.selector || a));
        if (((e = e || []), 1 === o.length)) {
          if (
            ((j = o[0] = o[0].slice(0)),
            j.length > 2 &&
              "ID" === (k = j[0]).type &&
              c.getById &&
              9 === b.nodeType &&
              p &&
              d.relative[j[1].type])
          ) {
            if (
              ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]), !b)
            )
              return e;
            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (((k = j[i]), d.relative[(l = k.type)])) break;
            if (
              (m = d.find[l]) &&
              (f = m(
                k.matches[0].replace(cb, db),
                (ab.test(j[0].type) && pb(b.parentNode)) || b
              ))
            ) {
              if ((j.splice(i, 1), (a = f.length && rb(j)), !a))
                return H.apply(e, f), e;
              break;
            }
          }
        }
        return (
          (n || h(a, o))(f, b, !p, e, (ab.test(a) && pb(b.parentNode)) || b), e
        );
      }),
      (c.sortStable =
        u
          .split("")
          .sort(B)
          .join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = jb(function(a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      jb(function(a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        kb("type|href|height|width", function(a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        jb(function(a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        kb("value", function(a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      jb(function(a) {
        return null == a.getAttribute("disabled");
      }) ||
        kb(K, function(a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
        }),
      gb
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = n.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function(a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function(a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (n.filter = function(a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function(a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function(a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function() {
              for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) n.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? n.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function(a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function(a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function(a) {
        return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1)
          .length;
      }
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (n.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || y).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)
            ),
            v.test(c[1]) && n.isPlainObject(b))
          )
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = l.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = l),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
          ? "undefined" != typeof y.ready
            ? y.ready(a)
            : a(n)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            n.makeArray(a, this));
    });
  (A.prototype = n.fn), (y = n(l));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  n.extend({
    dir: function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }),
    n.fn.extend({
      has: function(a) {
        var b = n(a, this),
          c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
        });
      },
      closest: function(a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && n.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? n.unique(f) : f);
      },
      index: function(a) {
        return a
          ? "string" == typeof a
            ? g.call(n(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function(a, b) {
        return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
      },
      addBack: function(a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      }
    });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function(a) {
        return n.dir(a, "parentNode");
      },
      parentsUntil: function(a, b, c) {
        return n.dir(a, "parentNode", c);
      },
      next: function(a) {
        return D(a, "nextSibling");
      },
      prev: function(a) {
        return D(a, "previousSibling");
      },
      nextAll: function(a) {
        return n.dir(a, "nextSibling");
      },
      prevAll: function(a) {
        return n.dir(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
        return n.dir(a, "nextSibling", c);
      },
      prevUntil: function(a, b, c) {
        return n.dir(a, "previousSibling", c);
      },
      siblings: function(a) {
        return n.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function(a) {
        return n.sibling(a.firstChild);
      },
      contents: function(a) {
        return a.contentDocument || n.merge([], a.childNodes);
      }
    },
    function(a, b) {
      n.fn[a] = function(c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      n.each(a.match(E) || [], function(a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function(l) {
        for (
          b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
          h && f > g;
          g++
        )
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
      },
      k = {
        add: function() {
          if (h) {
            var c = h.length;
            !(function g(b) {
              n.each(b, function(b, c) {
                var d = n.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && g(c);
              });
            })(arguments),
              d ? (f = h.length) : b && ((e = c), j(b));
          }
          return this;
        },
        remove: function() {
          return (
            h &&
              n.each(arguments, function(a, b) {
                var c;
                while ((c = n.inArray(b, h, c)) > -1)
                  h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
              }),
            this
          );
        },
        has: function(a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function() {
          return (h = []), (f = 0), this;
        },
        disable: function() {
          return (h = i = b = void 0), this;
        },
        disabled: function() {
          return !h;
        },
        lock: function() {
          return (i = void 0), b || k.disable(), this;
        },
        locked: function() {
          return !i;
        },
        fireWith: function(a, b) {
          return (
            !h ||
              (c && !i) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? i.push(b) : j(b)),
            this
          );
        },
        fire: function() {
          return k.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!c;
        }
      };
    return k;
  }),
    n.extend({
      Deferred: function(a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")]
          ],
          c = "pending",
          d = {
            state: function() {
              return c;
            },
            always: function() {
              return e.done(arguments).fail(arguments), this;
            },
            then: function() {
              var a = arguments;
              return n
                .Deferred(function(c) {
                  n.each(b, function(b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function() {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function(a) {
              return null != a ? n.extend(a, d) : d;
            }
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function(a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function() {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function() {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function(a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function(a, b, c) {
            return function(e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      }
    });
  var H;
  (n.fn.ready = function(a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function(a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (H.resolveWith(l, [n]),
            n.fn.triggerHandler &&
              (n(l).triggerHandler("ready"), n(l).off("ready"))));
      }
    });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      n.ready();
  }
  (n.ready.promise = function(b) {
    return (
      H ||
        ((H = n.Deferred()),
        "complete" === l.readyState
          ? setTimeout(n.ready)
          : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
      H.promise(b)
    );
  }),
    n.ready.promise();
  var J = (n.access = function(a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c) n.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      n.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function(a, b, c) {
              return j.call(n(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  n.acceptData = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function() {
        return {};
      }
    }),
      (this.expando = n.expando + K.uid++);
  }
  (K.uid = 1),
    (K.accepts = n.acceptData),
    (K.prototype = {
      key: function(a) {
        if (!K.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = K.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), n.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function(a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function(a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function(a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, n.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function(a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          n.isArray(b)
            ? (d = b.concat(b.map(n.camelCase)))
            : ((e = n.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(E) || []))),
            (c = d.length);
          while (c--) delete g[d[c]];
        }
      },
      hasData: function(a) {
        return !n.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function(a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      }
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
                ? !1
                : "null" === c
                  ? null
                  : +c + "" === c
                    ? +c
                    : N.test(c)
                      ? n.parseJSON(c)
                      : c;
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    return c;
  }
  n.extend({
    hasData: function(a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function(a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function(a, b) {
      M.remove(a, b);
    },
    _data: function(a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function(a, b) {
      L.remove(a, b);
    }
  }),
    n.fn.extend({
      data: function(a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            L.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function() {
              M.set(this, a);
            })
          : J(
              this,
              function(b) {
                var c,
                  d = n.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = M.get(f, a)), void 0 !== c)) return c;
                  if (((c = M.get(f, d)), void 0 !== c)) return c;
                  if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        M.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(a) {
        return this.each(function() {
          M.remove(this, a);
        });
      }
    }),
    n.extend({
      queue: function(a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = L.get(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = L.access(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function() {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return (
          L.get(a, c) ||
          L.access(a, c, {
            empty: n.Callbacks("once memory").add(function() {
              L.remove(a, [b + "queue", c]);
            })
          })
        );
      }
    }),
    n.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
              ? this
              : this.each(function() {
                  var c = n.queue(this, a, b);
                  n._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                })
        );
      },
      dequeue: function(a) {
        return this.each(function() {
          n.dequeue(this, a);
        });
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", []);
      },
      promise: function(a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = L.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      }
    });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function(a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  !(function() {
    var a = l.createDocumentFragment(),
      b = a.appendChild(l.createElement("div")),
      c = l.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|pointer|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }
  (n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.get(a);
      if (r) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          c.guid || (c.guid = n.guid++),
          (i = r.events) || (i = r.events = {}),
          (g = r.handle) ||
            (g = r.handle = function(b) {
              return typeof n !== U && n.event.triggered !== b.type
                ? n.event.dispatch.apply(a, arguments)
                : void 0;
            }),
          (b = (b || "").match(E) || [""]),
          (j = b.length);
        while (j--)
          (h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o &&
              ((l = n.event.special[o] || {}),
              (o = (e ? l.delegateType : l.bindType) || o),
              (l = n.event.special[o] || {}),
              (k = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join(".")
                },
                f
              )),
              (m = i[o]) ||
                ((m = i[o] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(o, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (n.event.global[o] = !0));
      }
    },
    remove: function(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = Y.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = i[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && q !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete i[o]);
          } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function(b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        m,
        o,
        p = [d || l],
        q = j.call(b, "type") ? b.type : b,
        r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || l),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !X.test(q + n.event.triggered) &&
          (q.indexOf(".") >= 0 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (k = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (o = n.event.special[q] || {}),
          e || !o.trigger || o.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (
            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            p.push(g), (h = g);
          h === (d.ownerDocument || l) &&
            p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          (b.type = f > 1 ? i : o.bindType || q),
            (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
            m && m.apply(g, c),
            (m = k && g[k]),
            m &&
              m.apply &&
              n.acceptData(g) &&
              ((b.result = m.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = q),
          e ||
            b.isDefaultPrevented() ||
            (o._default && o._default.apply(p.pop(), c) !== !1) ||
            !n.acceptData(d) ||
            (k &&
              n.isFunction(d[q]) &&
              !n.isWindow(d) &&
              ((h = d[k]),
              h && (d[k] = null),
              (n.event.triggered = q),
              d[q](),
              (n.event.triggered = void 0),
              h && (d[k] = h))),
          b.result
        );
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
              ((a.handleObj = g),
              (a.data = g.data),
              (e = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (a.result = e) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) >= 0
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function(a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || l),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      }
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g = W.test(e)
          ? this.mouseHooks
          : V.test(e)
            ? this.keyHooks
            : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new n.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = l),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type &&
            this.click &&
            n.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    }
  }),
    (n.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (n.Event = function(a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? Z
                  : $))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function() {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = Z),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function(a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !n.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          }
        };
      }
    ),
    k.focusinBubbles ||
      n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) {
          n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
          setup: function() {
            var d = this.ownerDocument || this,
              e = L.access(d, b);
            e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
          },
          teardown: function() {
            var d = this.ownerDocument || this,
              e = L.access(d, b) - 1;
            e
              ? L.access(d, b, e)
              : (d.removeEventListener(a, c, !0), L.remove(d, b));
          }
        };
      }),
    n.fn.extend({
      on: function(a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = $;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function(a) {
              return n().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = n.guid++))),
          this.each(function() {
            n.event.add(this, a, d, c, b);
          })
        );
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = $),
          this.each(function() {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function(a, b) {
        return this.each(function() {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      }
    });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bb = /<([\w:]+)/,
    cb = /<|&#?\w+;/,
    db = /<(?:script|style|link)/i,
    eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fb = /^$|\/(?:java|ecma)script/i,
    gb = /^true\/(.*)/,
    hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ib = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  (ib.optgroup = ib.option),
    (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
    (ib.th = ib.td);
  function jb(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function kb(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function lb(a) {
    var b = gb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
    }
  }
  function ob(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
  }
  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (
        !(
          k.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        )
      )
        for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
          pb(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
            nb(f[d], g[d]);
        else nb(a, h);
      return (
        (g = ob(h, "script")), g.length > 0 && mb(g, !i && ob(a, "script")), h
      );
    },
    buildFragment: function(a, b, c, d) {
      for (
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.createDocumentFragment(),
          l = [],
          m = 0,
          o = a.length;
        o > m;
        m++
      )
        if (((e = a[m]), e || 0 === e))
          if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
          else if (cb.test(e)) {
            (f = f || k.appendChild(b.createElement("div"))),
              (g = (bb.exec(e) || ["", ""])[1].toLowerCase()),
              (h = ib[g] || ib._default),
              (f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2]),
              (j = h[0]);
            while (j--) f = f.lastChild;
            n.merge(l, f.childNodes), (f = k.firstChild), (f.textContent = "");
          } else l.push(b.createTextNode(e));
      (k.textContent = ""), (m = 0);
      while ((e = l[m++]))
        if (
          (!d || -1 === n.inArray(e, d)) &&
          ((i = n.contains(e.ownerDocument, e)),
          (f = ob(k.appendChild(e), "script")),
          i && mb(f),
          c)
        ) {
          j = 0;
          while ((e = f[j++])) fb.test(e.type || "") && c.push(e);
        }
      return k;
    },
    cleanData: function(a) {
      for (
        var b, c, d, e, f = n.event.special, g = 0;
        void 0 !== (c = a[g]);
        g++
      ) {
        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    }
  }),
    n.fn.extend({
      text: function(a) {
        return J(
          this,
          function(a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().each(function() {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function() {
        return this.domManip(arguments, function(a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function() {
        return this.domManip(arguments, function(a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function() {
        return this.domManip(arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function(a, b) {
        for (
          var c, d = a ? n.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || n.cleanData(ob(c)),
            c.parentNode &&
              (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (n.cleanData(ob(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function(a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function() {
            return n.clone(this, a, b);
          })
        );
      },
      html: function(a) {
        return J(
          this,
          function(a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !db.test(a) &&
              !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(ab, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ob(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function() {
        var a = arguments[0];
        return (
          this.domManip(arguments, function(b) {
            (a = this.parentNode),
              n.cleanData(ob(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function(a) {
        return this.remove(a, !0);
      },
      domManip: function(a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)))
          return this.each(function(c) {
            var d = m.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)
            (h = c),
              j !== o &&
                ((h = n.clone(h, !0, !0)), g && n.merge(f, ob(h, "script"))),
              b.call(this[j], h, j);
          if (g)
            for (
              i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0;
              g > j;
              j++
            )
              (h = f[j]),
                fb.test(h.type || "") &&
                  !L.access(h, "globalEval") &&
                  n.contains(i, h) &&
                  (h.src
                    ? n._evalUrl && n._evalUrl(h.src)
                    : n.globalEval(h.textContent.replace(hb, "")));
        }
        return this;
      }
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(a, b) {
        n.fn[a] = function(a) {
          for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
            (c = h === g ? this : this.clone(!0)),
              n(e[h])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var qb,
    rb = {};
  function sb(b, c) {
    var d,
      e = n(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : n.css(e[0], "display");
    return e.detach(), f;
  }
  function tb(a) {
    var b = l,
      c = rb[a];
    return (
      c ||
        ((c = sb(a, b)),
        ("none" !== c && c) ||
          ((qb = (
            qb || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = qb[0].contentDocument),
          b.write(),
          b.close(),
          (c = sb(a, b)),
          qb.detach()),
        (rb[a] = c)),
      c
    );
  }
  var ub = /^margin/,
    vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wb = function(b) {
      return b.ownerDocument.defaultView.opener
        ? b.ownerDocument.defaultView.getComputedStyle(b, null)
        : a.getComputedStyle(b, null);
    };
  function xb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wb(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        vb.test(g) &&
          ub.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function yb(a, b) {
    return {
      get: function() {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      }
    };
  }
  !(function() {
    var b,
      c,
      d = l.documentElement,
      e = l.createElement("div"),
      f = l.createElement("div");
    if (f.style) {
      (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
        (e.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        e.appendChild(f);
      function g() {
        (f.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (f.innerHTML = ""),
          d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
      }
      a.getComputedStyle &&
        n.extend(k, {
          pixelPosition: function() {
            return g(), b;
          },
          boxSizingReliable: function() {
            return null == c && g(), c;
          },
          reliableMarginRight: function() {
            var b,
              c = f.appendChild(l.createElement("div"));
            return (
              (c.style.cssText = f.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (f.style.width = "1px"),
              d.appendChild(e),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              d.removeChild(e),
              f.removeChild(c),
              b
            );
          }
        });
    }
  })(),
    (n.swap = function(a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var zb = /^(none|table(?!-c[ea]).+)/,
    Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
    Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
    Cb = { position: "absolute", visibility: "hidden", display: "block" },
    Db = { letterSpacing: "0", fontWeight: "400" },
    Eb = ["Webkit", "O", "Moz", "ms"];
  function Fb(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
      d = b,
      e = Eb.length;
    while (e--) if (((b = Eb[e] + c), b in a)) return b;
    return d;
  }
  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Hb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wb(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = xb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        vb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = L.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                S(d) &&
                (f[g] = L.access(d, "olddisplay", tb(d.nodeName))))
            : ((e = S(d)),
              ("none" === c && e) ||
                L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        return (
          (b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h))),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Bb.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        );
      }
    },
    css: function(a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h))),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = xb(a, b, d)),
        "normal" === e && b in Db && (e = Db[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e)
          : e
      );
    }
  }),
    n.each(["height", "width"], function(a, b) {
      n.cssHooks[b] = {
        get: function(a, c, d) {
          return c
            ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? n.swap(a, Cb, function() {
                  return Ib(a, b, d);
                })
              : Ib(a, b, d)
            : void 0;
        },
        set: function(a, c, d) {
          var e = d && wb(a);
          return Gb(
            a,
            c,
            d
              ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e)
              : 0
          );
        }
      };
    }),
    (n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
      return b
        ? n.swap(a, { display: "inline-block" }, xb, [a, "marginRight"])
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
      (n.cssHooks[a + b] = {
        expand: function(c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        }
      }),
        ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }),
    n.fn.extend({
      css: function(a, b) {
        return J(
          this,
          function(a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = wb(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function() {
        return Jb(this, !0);
      },
      hide: function() {
        return Jb(this);
      },
      toggle: function(a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function() {
              S(this) ? n(this).show() : n(this).hide();
            });
      }
    });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = Kb),
    (Kb.prototype = {
      constructor: Kb,
      init: function(a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function() {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function(a) {
        var b,
          c = Kb.propHooks[this.prop];
        return (
          (this.pos = b = this.options.duration
            ? n.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              )
            : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
          this
        );
      }
    }),
    (Kb.prototype.init.prototype = Kb.prototype),
    (Kb.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function(a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop])
              ? n.style(a.elem, a.prop, a.now + a.unit)
              : (a.elem[a.prop] = a.now);
        }
      }
    }),
    (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      }
    }),
    (n.easing = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      }
    }),
    (n.fx = Kb.prototype.init),
    (n.fx.step = {});
  var Lb,
    Mb,
    Nb = /^(?:toggle|show|hide)$/,
    Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pb = /queueHooks$/,
    Qb = [Vb],
    Rb = {
      "*": [
        function(a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = Ob.exec(b),
            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
            g =
              (n.cssNumber[a] || ("px" !== f && +d)) &&
              Ob.exec(n.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        }
      ]
    };
  function Sb() {
    return (
      setTimeout(function() {
        Lb = void 0;
      }),
      (Lb = n.now())
    );
  }
  function Tb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (
      var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Vb(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = {},
      o = a.style,
      p = a.nodeType && S(a),
      q = L.get(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function() {
          h.unqueued || i();
        })),
      h.unqueued++,
      l.always(function() {
        l.always(function() {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = n.css(a, "display")),
        (k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (o.display = "inline-block")),
      c.overflow &&
        ((o.overflow = "hidden"),
        l.always(function() {
          (o.overflow = c.overflow[0]),
            (o.overflowX = c.overflow[1]),
            (o.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), Nb.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        m[d] = (q && q[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(m))
      "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
        f && (q.hidden = !p),
        p
          ? n(a).show()
          : l.done(function() {
              n(a).hide();
            }),
        l.done(function() {
          var b;
          L.remove(a, "fxshow");
          for (b in m) n.style(a, b, m[b]);
        });
      for (d in m)
        (g = Ub(p ? q[d] : 0, d, l)),
          d in q ||
            ((q[d] = g.start),
            p &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function Wb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function Xb(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qb.length,
      h = n.Deferred().always(function() {
        delete i.elem;
      }),
      i = function() {
        if (e) return !1;
        for (
          var b = Lb || Sb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Lb || Sb(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        }
      }),
      k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)
      if ((d = Qb[f].call(j, a, k, j.opts))) return d;
    return (
      n.map(k, Ub, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(Xb, {
    tweener: function(a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (Rb[c] = Rb[c] || []), Rb[c].unshift(b);
    },
    prefilter: function(a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    }
  })),
    (n.speed = function(a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b)
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
            ? d.duration
            : d.duration in n.fx.speeds
              ? n.fx.speeds[d.duration]
              : n.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function() {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = Xb(this, n.extend({}, a), f);
            (e || L.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function() {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = L.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && n.dequeue(this, a);
          })
        );
      },
      finish: function(a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function() {
            var b,
              c = L.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(Tb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(a, b) {
        n.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function() {
      var a,
        b = 0,
        c = n.timers;
      for (Lb = n.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), (Lb = void 0);
    }),
    (n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function() {
      Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function() {
      clearInterval(Mb), (Mb = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function(a, b) {
      return (
        (a = n.fx ? n.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function(b, c) {
          var d = setTimeout(b, a);
          c.stop = function() {
            clearTimeout(d);
          };
        })
      );
    }),
    (function() {
      var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
      (a.type = "checkbox"),
        (k.checkOn = "" !== a.value),
        (k.optSelected = c.selected),
        (b.disabled = !0),
        (k.optDisabled = !c.disabled),
        (a = l.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var Yb,
    Zb,
    $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a);
      });
    }
  }),
    n.extend({
      attr: function(a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = n.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                  ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                    ? e
                    : (a.setAttribute(b, c + ""), c)
                  : void n.removeAttr(a, b));
      },
      removeAttr: function(a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          }
        }
      }
    }),
    (Zb = {
      set: function(a, b, c) {
        return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
      }
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = $b[b] || n.find.attr;
      $b[b] = function(a, b, d) {
        var e, f;
        return (
          d ||
            ((f = $b[b]),
            ($b[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            ($b[b] = f)),
          e
        );
      };
    });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[n.propFix[a] || a];
      });
    }
  }),
    n.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function(a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !n.isXMLDoc(a)),
            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          }
        }
      }
    }),
    k.optSelected ||
      (n.propHooks.selected = {
        get: function(a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        n.propFix[this.toLowerCase()] = this;
      }
    );
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function(b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = n.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (n.isFunction(a))
        return this.each(function(b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(E) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ac, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            n.isFunction(a)
              ? function(c) {
                  n(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function() {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = n(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    }
  });
  var bc = /\r/g;
  n.fn.extend({
    val: function(a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function(c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                    ? (e += "")
                    : n.isArray(e) &&
                      (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                      })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
          );
      }
    }
  }),
    n.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a));
          }
        },
        select: {
          get: function(a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    n.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function(a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]), (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          }
        }
      }
    }),
    n.each(["radio", "checkbox"], function() {
      (n.valHooks[this] = {
        set: function(a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) >= 0)
            : void 0;
        }
      }),
        k.checkOn ||
          (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function(a, b) {
        n.fn[b] = function(a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      }
    });
  var cc = n.now(),
    dc = /\?/;
  (n.parseJSON = function(a) {
    return JSON.parse(a + "");
  }),
    (n.parseXML = function(a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          n.error("Invalid XML: " + a),
        b
      );
    });
  var ec = /#.*$/,
    fc = /([?&])_=[^&]*/,
    gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ic = /^(?:GET|HEAD)$/,
    jc = /^\/\//,
    kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lc = {},
    mc = {},
    nc = "*/".concat("*"),
    oc = a.location.href,
    pc = kc.exec(oc.toLowerCase()) || [];
  function qc(a) {
    return function(b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function rc(a, b, c, d) {
    var e = {},
      f = a === mc;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function sc(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tc(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function uc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: oc,
      type: "GET",
      isLocal: hc.test(pc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(a, b) {
      return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
    },
    ajaxPrefilter: qc(lc),
    ajaxTransport: qc(mc),
    ajax: function(a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.ajaxSetup({}, b),
        l = k.context || k,
        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
        o = n.Deferred(),
        p = n.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while ((b = gc.exec(e))) f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function() {
            return 2 === t ? e : null;
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function(a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function(a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          }
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || oc) + "")
          .replace(ec, "")
          .replace(jc, pc[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = n
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((h = kc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !h ||
            (h[1] === pc[1] &&
              h[2] === pc[2] &&
              (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                (pc[3] || ("http:" === pc[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = n.param(k.data, k.traditional)),
        rc(lc, k, b, v),
        2 === t)
      )
        return v;
      (i = n.event && k.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !ic.test(k.type)),
        (d = k.url),
        k.hasContent ||
          (k.data &&
            ((d = k.url += (dc.test(d) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = fc.test(d)
              ? d.replace(fc, "$1_=" + cc++)
              : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)),
        k.ifModified &&
          (n.lastModified[d] &&
            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
          n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
              ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
      if ((c = rc(mc, k, b, v))) {
        (v.readyState = 1),
          i && m.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function() {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (c = void 0),
          (e = h || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          f && (u = tc(k, v, f)),
          (u = uc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (n.lastModified[d] = w),
                (w = v.getResponseHeader("etag")),
                w && (n.etag[d] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                  ? (x = "notmodified")
                  : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          i &&
            (m.trigger("ajaxComplete", [v, k]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }),
    n.each(["get", "post"], function(a, b) {
      n[b] = function(a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (n._evalUrl = function(a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    n.fn.extend({
      wrapAll: function(a) {
        var b;
        return n.isFunction(a)
          ? this.each(function(b) {
              n(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = n(a, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function() {
                  var a = this;
                  while (a.firstElementChild) a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function(a) {
        return this.each(
          n.isFunction(a)
            ? function(b) {
                n(this).wrapInner(a.call(this, b));
              }
            : function() {
                var b = n(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function(a) {
        var b = n.isFunction(a);
        return this.each(function(c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          })
          .end();
      }
    }),
    (n.expr.filters.hidden = function(a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (n.expr.filters.visible = function(a) {
      return !n.expr.filters.hidden(a);
    });
  var vc = /%20/g,
    wc = /\[\]$/,
    xc = /\r?\n/g,
    yc = /^(?:submit|button|image|reset|file)$/i,
    zc = /^(?:input|select|textarea|keygen)/i;
  function Ac(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function(b, e) {
        c || wc.test(a)
          ? d(a, e)
          : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function(a, b) {
    var c,
      d = [],
      e = function(a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function() {
        e(this.name, this.value);
      });
    else for (c in a) Ac(c, a[c], b, e);
    return d.join("&").replace(vc, "+");
  }),
    n.fn.extend({
      serialize: function() {
        return n.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function() {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              zc.test(this.nodeName) &&
              !yc.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function(a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
                ? n.map(c, function(a) {
                    return { name: b.name, value: a.replace(xc, "\r\n") };
                  })
                : { name: b.name, value: c.replace(xc, "\r\n") };
          })
          .get();
      }
    }),
    (n.ajaxSettings.xhr = function() {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Bc = 0,
    Cc = {},
    Dc = { 0: 200, 1223: 204 },
    Ec = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function() {
      for (var a in Cc) Cc[a]();
    }),
    (k.cors = !!Ec && "withCredentials" in Ec),
    (k.ajax = Ec = !!Ec),
    n.ajaxTransport(function(a) {
      var b;
      return k.cors || (Ec && !a.crossDomain)
        ? {
            send: function(c, d) {
              var e,
                f = a.xhr(),
                g = ++Bc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function(a) {
                return function() {
                  b &&
                    (delete Cc[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                        ? d(f.status, f.statusText)
                        : d(
                            Dc[f.status] || f.status,
                            f.statusText,
                            "string" == typeof f.responseText
                              ? { text: f.responseText }
                              : void 0,
                            f.getAllResponseHeaders()
                          ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Cc[g] = b("abort"));
              try {
                f.send((a.hasContent && a.data) || null);
              } catch (h) {
                if (b) throw h;
              }
            },
            abort: function() {
              b && b();
            }
          }
        : void 0;
    }),
    n.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function(a) {
          return n.globalEval(a), a;
        }
      }
    }),
    n.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    n.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function(d, e) {
            (b = n("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function(a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              l.head.appendChild(b[0]);
          },
          abort: function() {
            c && c();
          }
        };
      }
    });
  var Fc = [],
    Gc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Fc.pop() || n.expando + "_" + cc++;
      return (this[a] = !0), a;
    }
  }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Gc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Gc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback = n.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Gc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function() {
            g = arguments;
          }),
          d.always(function() {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Fc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function(a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
      var d = v.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = n.buildFragment([a], b, e)),
          e && e.length && n(e).remove(),
          n.merge([], d.childNodes));
    });
  var Hc = n.fn.load;
  (n.fn.load = function(a, b, c) {
    if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function(a) {
            (f = arguments),
              g.html(
                d
                  ? n("<div>")
                      .append(n.parseHTML(a))
                      .find(d)
                  : a
              );
          })
          .complete(
            c &&
              function(a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(a, b) {
        n.fn[b] = function(a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function(a) {
      return n.grep(n.timers, function(b) {
        return a === b.elem;
      }).length;
    });
  var Ic = a.document.documentElement;
  function Jc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (n.offset = {
    setOffset: function(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }),
    n.fn.extend({
      offset: function(a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function(b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, d)
              ? (typeof d.getBoundingClientRect !== U &&
                  (e = d.getBoundingClientRect()),
                (c = Jc(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft
                })
              : e
          );
      },
      position: function() {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === n.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += n.css(a[0], "borderTopWidth", !0)),
                (d.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - n.css(c, "marginTop", !0),
              left: b.left - d.left - n.css(c, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || Ic;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Ic;
        });
      }
    }),
    n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      b,
      c
    ) {
      var d = "pageYOffset" === c;
      n.fn[b] = function(e) {
        return J(
          this,
          function(b, e, f) {
            var g = Jc(b);
            return void 0 === f
              ? g
                ? g[c]
                : b[e]
              : void (g
                  ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                  : (b[e] = f));
          },
          b,
          e,
          arguments.length,
          null
        );
      };
    }),
    n.each(["top", "left"], function(a, b) {
      n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
        return c
          ? ((c = xb(a, b)), vb.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function(a, b) {
      n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(
        c,
        d
      ) {
        n.fn[d] = function(d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return J(
            this,
            function(b, c, d) {
              var e;
              return n.isWindow(b)
                ? b.document.documentElement["client" + a]
                : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                    ? n.css(b, c, g)
                    : n.style(b, c, d, g);
            },
            b,
            f ? d : void 0,
            f,
            null
          );
        };
      });
    }),
    (n.fn.size = function() {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return n;
      });
  var Kc = a.jQuery,
    Lc = a.$;
  return (
    (n.noConflict = function(b) {
      return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n;
    }),
    typeof b === U && (a.jQuery = a.$ = n),
    n
  );
});

(function(e) {
  e.fn.unveil = function(k, d) {
    function c() {
      g = b
        .filter(function() {
          var a = e(this);
          if (!a.is(":hidden")) {
            var b = f.scrollTop(),
              d = b + f.height(),
              c = a.offset().top;
            return c + a.height() >= b - h && c <= d + h;
          }
        })
        .trigger("unveil");
      b = b.not(g);
    }
    var f = e(window),
      h = k || 0,
      l = 1 < window.devicePixelRatio ? "data-src-retina" : "data-src",
      b = this,
      g;
    this.one("unveil", function() {
      var a = this.getAttribute(l);
      if ((a = a || this.getAttribute("data-src")))
        this.setAttribute("src", a), "function" === typeof d && d.call(this);
    });
    f.on("scroll.unveil resize.unveil lookup.unveil", c);
    c();
    return this;
  };
})(window.jQuery || window.Zepto);
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function(a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function(b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function() {
        c = !0;
      });
      var e = function() {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function() {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function(b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              }
            });
      });
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function(b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.2"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function(b) {
        function c() {
          g.detach()
            .trigger("closed.bs.alert")
            .remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function() {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function(b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.2"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function(b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function() {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function() {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function() {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
          var d = a(c.target);
          d.hasClass("btn") || (d = d.closest(".btn")),
            b.call(d, "toggle"),
            c.preventDefault();
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function(b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
              ? e[g]()
              : f.interval && e.pause().cycle();
      });
    }
    var c = function(b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function(b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function(a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function(a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
            ? this.$element.one("slid.bs.carousel", function() {
                b.to(a);
              })
            : c == a
              ? this.pause().cycle()
              : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function(b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function() {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function() {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function() {
        return (a.fn.carousel = d), this;
      });
    var e = function(c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function() {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && "show" == b && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function(b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(this.options.trigger).filter(
          '[href="#' + b.id + '"], [data-target="#' + b.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.2"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function() {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function() {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function() {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function(c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function() {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function(d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), { trigger: this });
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function() {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function() {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.2"),
      (g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function(b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.divider):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function() {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b, d) {
      return this.each(function() {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function(b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function() {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function(b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.backdrop(function() {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.options.backdrop && d.adjustBackdrop(),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$element
                    .find(".modal-dialog")
                    .one("bsTransitionEnd", function() {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function(b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function() {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function(a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function() {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function(a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function() {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
          this.backdrop(function() {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function(b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a('<div class="modal-backdrop ' + e + '" />')
              .prependTo(this.$element)
              .on(
                "click.dismiss.bs.modal",
                a.proxy(function(a) {
                  a.target === a.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function() {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
      }),
      (c.prototype.adjustBackdrop = function() {
        this.$backdrop
          .css("height", 0)
          .css("height", this.$element[0].scrollHeight);
      }),
      (c.prototype.adjustDialog = function() {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
      }),
      (c.prototype.resetAdjustments = function() {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function() {
        (this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
      }),
      (c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function() {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function(c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function(a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function() {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || "destroy" != b) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function(a, b) {
      (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 }
      }),
      (c.prototype.init = function(b, c, d) {
        (this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport));
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: ""
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function() {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function(b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function() {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function(a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function(b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function() {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function(b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                  ? "bottom"
                  : "right" == h && k.right + l > p.width
                    ? "left"
                    : "left" == h && k.left - l < p.left
                      ? "right"
                      : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function() {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function(a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                }
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function(a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function() {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function(b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = this.tip(),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && this.$tip.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function() {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop()
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
            ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
            : "left" == a
              ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
              : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function() {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function() {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function() {
        this.enabled = !0;
      }),
      (c.prototype.disable = function() {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function(b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function() {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || "destroy" != b) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function(a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.2"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function() {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function() {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function() {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function() {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(c, d) {
      var e = a.proxy(this.process, this);
      (this.$body = a("body")),
        (this.$scrollElement = a(a(c).is("body") ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on("scroll.bs.scrollspy", e),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.2"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function() {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function() {
        var b = "offset",
          c = 0;
        a.isWindow(this.$scrollElement[0]) ||
          ((b = "position"), (c = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight());
        var d = this;
        this.$body
          .find(this.selector)
          .map(function() {
            var d = a(this),
              e = d.data("target") || d.attr("href"),
              f = /^#./.test(e) && a(e);
            return (
              (f && f.length && f.is(":visible") && [[f[b]().top + c, e]]) ||
              null
            );
          })
          .sort(function(a, b) {
            return a[0] - b[0];
          })
          .each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1]);
          });
      }),
      (b.prototype.process = function() {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (!e[a + 1] || b <= e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function(b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c)
            .parents("li")
            .addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function() {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function() {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function(b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.2"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function() {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function() {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function(b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu") &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function() {
        return (a.fn.tab = d), this;
      });
    var e = function(c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function(a) {
    "use strict";
    function b(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function(b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.2"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
              ? !1
              : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
            ? "bottom"
            : !1;
      }),
      (c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a("body").height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function() {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
(function(c) {
  "function" === typeof define && define.amd
    ? define(["jquery"], c)
    : "undefined" !== typeof exports
      ? (module.exports = c(require("jquery")))
      : c(jQuery);
})(function(c) {
  var d = window.Slick || {};
  d = (function() {
    var a = 0;
    return function(b, f) {
      this.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(b),
        appendDots: c(b),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(a, b) {
          return c('<button type="button" />').text(b + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        Hong Kong Blue Bubble Technology Co, Limited First: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      };
      this.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      };
      c.extend(this, this.initials);
      this.animProp = this.animType = this.activeBreakpoint = null;
      this.breakpoints = [];
      this.breakpointSettings = [];
      this.interrupted = this.focussed = this.cssTransitions = !1;
      this.hidden = "hidden";
      this.paused = !0;
      this.respondTo = this.positionProp = null;
      this.rowCount = 1;
      this.shouldClick = !0;
      this.$slider = c(b);
      this.transitionType = this.transformType = this.$slidesCache = null;
      this.visibilityChange = "visibilitychange";
      this.windowWidth = 0;
      this.windowTimer = null;
      var e = c(b).data("slick") || {};
      this.options = c.extend({}, this.defaults, f, e);
      this.currentSlide = this.options.initialSlide;
      this.originalSettings = this.options;
      "undefined" !== typeof document.mozHidden
        ? ((this.hidden = "mozHidden"),
          (this.visibilityChange = "mozvisibilitychange"))
        : "undefined" !== typeof document.webkitHidden &&
          ((this.hidden = "webkitHidden"),
          (this.visibilityChange = "webkitvisibilitychange"));
      this.autoPlay = c.proxy(this.autoPlay, this);
      this.autoPlayClear = c.proxy(this.autoPlayClear, this);
      this.autoPlayIterator = c.proxy(this.autoPlayIterator, this);
      this.changeSlide = c.proxy(this.changeSlide, this);
      this.clickHandler = c.proxy(this.clickHandler, this);
      this.selectHandler = c.proxy(this.selectHandler, this);
      this.setPosition = c.proxy(this.setPosition, this);
      this.swipeHandler = c.proxy(this.swipeHandler, this);
      this.dragHandler = c.proxy(this.dragHandler, this);
      this.keyHandler = c.proxy(this.keyHandler, this);
      this.instanceUid = a++;
      this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
      this.registerBreakpoints();
      this.init(!0);
    };
  })();
  d.prototype.activateADA = function() {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  };
  d.prototype.addSlide = d.prototype.slickAdd = function(a, b, f) {
    if ("boolean" === typeof b) (f = b), (b = null);
    else if (0 > b || b >= this.slideCount) return !1;
    this.unload();
    "number" === typeof b
      ? 0 === b && 0 === this.$slides.length
        ? c(a).appendTo(this.$slideTrack)
        : f
          ? c(a).insertBefore(this.$slides.eq(b))
          : c(a).insertAfter(this.$slides.eq(b))
      : !0 === f
        ? c(a).prependTo(this.$slideTrack)
        : c(a).appendTo(this.$slideTrack);
    this.$slides = this.$slideTrack.children(this.options.slide);
    this.$slideTrack.children(this.options.slide).detach();
    this.$slideTrack.append(this.$slides);
    this.$slides.each(function(a, b) {
      c(b).attr("data-slick-index", a);
    });
    this.$slidesCache = this.$slides;
    this.reinit();
  };
  d.prototype.animateHeight = function() {
    if (
      1 === this.options.slidesToShow &&
      !0 === this.options.adaptiveHeight &&
      !1 === this.options.vertical
    ) {
      var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.animate({ height: a }, this.options.speed);
    }
  };
  d.prototype.animateSlide = function(a, b) {
    var f = {},
      e = this;
    e.animateHeight();
    !0 === e.options.rtl && !1 === e.options.vertical && (a = -a);
    !1 === e.transformsEnabled
      ? !1 === e.options.vertical
        ? e.$slideTrack.animate(
            { left: a },
            e.options.speed,
            e.options.easing,
            b
          )
        : e.$slideTrack.animate(
            { top: a },
            e.options.speed,
            e.options.easing,
            b
          )
      : !1 === e.cssTransitions
        ? (!0 === e.options.rtl && (e.currentLeft = -e.currentLeft),
          c({ animStart: e.currentLeft }).animate(
            { animStart: a },
            {
              duration: e.options.speed,
              easing: e.options.easing,
              step: function(a) {
                a = Math.ceil(a);
                f[e.animType] =
                  !1 === e.options.vertical
                    ? "translate(" + a + "px, 0px)"
                    : "translate(0px," + a + "px)";
                e.$slideTrack.css(f);
              },
              complete: function() {
                b && b.call();
              }
            }
          ))
        : (e.applyTransition(),
          (a = Math.ceil(a)),
          (f[e.animType] =
            !1 === e.options.vertical
              ? "translate3d(" + a + "px, 0px, 0px)"
              : "translate3d(0px," + a + "px, 0px)"),
          e.$slideTrack.css(f),
          b &&
            setTimeout(function() {
              e.disableTransition();
              b.call();
            }, e.options.speed));
  };
  d.prototype.getNavTarget = function() {
    var a = this.options.asNavFor;
    a && null !== a && (a = c(a).not(this.$slider));
    return a;
  };
  d.prototype.asNavFor = function(a) {
    var b = this.getNavTarget();
    null !== b &&
      "object" === typeof b &&
      b.each(function() {
        var b = c(this).slick("getSlick");
        b.unslicked || b.slideHandler(a, !0);
      });
  };
  d.prototype.applyTransition = function(a) {
    var b = {};
    b[this.transitionType] =
      !1 === this.options.fade
        ? this.transformType +
          " " +
          this.options.speed +
          "ms " +
          this.options.cssEase
        : "opacity " + this.options.speed + "ms " + this.options.cssEase;
    !1 === this.options.fade
      ? this.$slideTrack.css(b)
      : this.$slides.eq(a).css(b);
  };
  d.prototype.autoPlay = function() {
    this.autoPlayClear();
    this.slideCount > this.options.slidesToShow &&
      (this.autoPlayTimer = setInterval(
        this.autoPlayIterator,
        this.options.autoplaySpeed
      ));
  };
  d.prototype.autoPlayClear = function() {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
  };
  d.prototype.autoPlayIterator = function() {
    var a = this.currentSlide + this.options.slidesToScroll;
    this.paused ||
      this.interrupted ||
      this.focussed ||
      (!1 === this.options.infinite &&
        (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1
          ? (this.direction = 0)
          : 0 === this.direction &&
            ((a = this.currentSlide - this.options.slidesToScroll),
            0 === this.currentSlide - 1 && (this.direction = 1))),
      this.slideHandler(a));
  };
  d.prototype.buildArrows = function() {
    !0 === this.options.arrows &&
      ((this.$prevArrow = c(this.options.prevArrow).addClass("slick-arrow")),
      (this.$nextArrow = c(this.options.nextArrow).addClass("slick-arrow")),
      this.slideCount > this.options.slidesToShow
        ? (this.$prevArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex"),
          this.$nextArrow
            .removeClass("slick-hidden")
            .removeAttr("aria-hidden tabindex"),
          this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.prependTo(this.options.appendArrows),
          this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.appendTo(this.options.appendArrows),
          !0 !== this.options.infinite &&
            this.$prevArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"))
        : this.$prevArrow
            .add(this.$nextArrow)
            .addClass("slick-hidden")
            .attr({ "aria-disabled": "true", tabindex: "-1" }));
  };
  d.prototype.buildDots = function() {
    var a;
    if (
      !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow
    ) {
      this.$slider.addClass("slick-dotted");
      var b = c("<ul />").addClass(this.options.dotsClass);
      for (a = 0; a <= this.getDotCount(); a += 1)
        b.append(
          c("<li />").append(this.options.customPaging.call(this, this, a))
        );
      this.$dots = b.appendTo(this.options.appendDots);
      this.$dots
        .find("li")
        .first()
        .addClass("slick-active");
    }
  };
  d.prototype.buildOut = function() {
    this.$slides = this.$slider
      .children(this.options.slide + ":not(.slick-cloned)")
      .addClass("slick-slide");
    this.slideCount = this.$slides.length;
    this.$slides.each(function(a, b) {
      c(b)
        .attr("data-slick-index", a)
        .data("originalStyling", c(b).attr("style") || "");
    });
    this.$slider.addClass("slick-slider");
    this.$slideTrack =
      0 === this.slideCount
        ? c('<div class="slick-track"/>').appendTo(this.$slider)
        : this.$slides.wrapAll('<div class="slick-track"/>').parent();
    this.$list = this.$slideTrack.wrap('<div class="slick-list"/>').parent();
    this.$slideTrack.css("opacity", 0);
    if (!0 === this.options.centerMode || !0 === this.options.swipeToSlide)
      this.options.slidesToScroll = 1;
    c("img[data-lazy]", this.$slider)
      .not("[src]")
      .addClass("slick-loading");
    this.setupInfinite();
    this.buildArrows();
    this.buildDots();
    this.updateDots();
    this.setSlideClasses(
      "number" === typeof this.currentSlide ? this.currentSlide : 0
    );
    !0 === this.options.draggable && this.$list.addClass("draggable");
  };
  d.prototype.buildRows = function() {
    var a, b, f;
    var e = document.createDocumentFragment();
    var g = this.$slider.children();
    if (0 < this.options.rows) {
      var c = this.options.slidesPerRow * this.options.rows;
      var d = Math.ceil(g.length / c);
      for (a = 0; a < d; a++) {
        var k = document.createElement("div");
        for (b = 0; b < this.options.rows; b++) {
          var l = document.createElement("div");
          for (f = 0; f < this.options.slidesPerRow; f++) {
            var n = a * c + (b * this.options.slidesPerRow + f);
            g.get(n) && l.appendChild(g.get(n));
          }
          k.appendChild(l);
        }
        e.appendChild(k);
      }
      this.$slider.empty().append(e);
      this.$slider
        .children()
        .children()
        .children()
        .css({
          width: 100 / this.options.slidesPerRow + "%",
          display: "inline-block"
        });
    }
  };
  d.prototype.checkResponsive = function(a, b) {
    var f,
      e,
      g = !1;
    var d = this.$slider.width();
    var h = window.innerWidth || c(window).width();
    "window" === this.respondTo
      ? (e = h)
      : "slider" === this.respondTo
        ? (e = d)
        : "min" === this.respondTo && (e = Math.min(h, d));
    if (
      this.options.responsive &&
      this.options.responsive.length &&
      null !== this.options.responsive
    ) {
      d = null;
      for (f in this.breakpoints)
        this.breakpoints.hasOwnProperty(f) &&
          (!1 === this.originalSettings.Hong Kong Blue Bubble Technology Co, Limited First
            ? e < this.breakpoints[f] && (d = this.breakpoints[f])
            : e > this.breakpoints[f] && (d = this.breakpoints[f]));
      if (null !== d)
        if (null !== this.activeBreakpoint) {
          if (d !== this.activeBreakpoint || b)
            (this.activeBreakpoint = d),
              "unslick" === this.breakpointSettings[d]
                ? this.unslick(d)
                : ((this.options = c.extend(
                    {},
                    this.originalSettings,
                    this.breakpointSettings[d]
                  )),
                  !0 === a && (this.currentSlide = this.options.initialSlide),
                  this.refresh(a)),
              (g = d);
        } else
          (this.activeBreakpoint = d),
            "unslick" === this.breakpointSettings[d]
              ? this.unslick(d)
              : ((this.options = c.extend(
                  {},
                  this.originalSettings,
                  this.breakpointSettings[d]
                )),
                !0 === a && (this.currentSlide = this.options.initialSlide),
                this.refresh(a)),
            (g = d);
      else
        null !== this.activeBreakpoint &&
          ((this.activeBreakpoint = null),
          (this.options = this.originalSettings),
          !0 === a && (this.currentSlide = this.options.initialSlide),
          this.refresh(a),
          (g = d));
      a || !1 === g || this.$slider.trigger("breakpoint", [this, g]);
    }
  };
  d.prototype.changeSlide = function(a, b) {
    var f = c(a.currentTarget);
    f.is("a") && a.preventDefault();
    f.is("li") || (f = f.closest("li"));
    var e =
      0 !== this.slideCount % this.options.slidesToScroll
        ? 0
        : (this.slideCount - this.currentSlide) % this.options.slidesToScroll;
    switch (a.data.message) {
      case "previous":
        f =
          0 === e ? this.options.slidesToScroll : this.options.slidesToShow - e;
        this.slideCount > this.options.slidesToShow &&
          this.slideHandler(this.currentSlide - f, !1, b);
        break;
      case "next":
        f = 0 === e ? this.options.slidesToScroll : e;
        this.slideCount > this.options.slidesToShow &&
          this.slideHandler(this.currentSlide + f, !1, b);
        break;
      case "index":
        (e =
          0 === a.data.index
            ? 0
            : a.data.index || f.index() * this.options.slidesToScroll),
          this.slideHandler(this.checkNavigable(e), !1, b),
          f.children().trigger("focus");
    }
  };
  d.prototype.checkNavigable = function(a) {
    var b = this.getNavigableIndexes();
    var f = 0;
    if (a > b[b.length - 1]) a = b[b.length - 1];
    else
      for (var e in b) {
        if (a < b[e]) {
          a = f;
          break;
        }
        f = b[e];
      }
    return a;
  };
  d.prototype.cleanUpEvents = function() {
    this.options.dots &&
      null !== this.$dots &&
      (c("li", this.$dots)
        .off("click.slick", this.changeSlide)
        .off("mouseenter.slick", c.proxy(this.interrupt, this, !0))
        .off("mouseleave.slick", c.proxy(this.interrupt, this, !1)),
      !0 === this.options.accessibility &&
        this.$dots.off("keydown.slick", this.keyHandler));
    this.$slider.off("focus.slick blur.slick");
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide),
      this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide),
      !0 === this.options.accessibility &&
        (this.$prevArrow &&
          this.$prevArrow.off("keydown.slick", this.keyHandler),
        this.$nextArrow &&
          this.$nextArrow.off("keydown.slick", this.keyHandler)));
    this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler);
    this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler);
    this.$list.off("touchend.slick mouseup.slick", this.swipeHandler);
    this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler);
    this.$list.off("click.slick", this.clickHandler);
    c(document).off(this.visibilityChange, this.visibility);
    this.cleanUpSlideEvents();
    !0 === this.options.accessibility &&
      this.$list.off("keydown.slick", this.keyHandler);
    !0 === this.options.focusOnSelect &&
      c(this.$slideTrack)
        .children()
        .off("click.slick", this.selectHandler);
    c(window).off(
      "orientationchange.slick.slick-" + this.instanceUid,
      this.orientationChange
    );
    c(window).off("resize.slick.slick-" + this.instanceUid, this.resize);
    c("[draggable!=true]", this.$slideTrack).off(
      "dragstart",
      this.preventDefault
    );
    c(window).off("load.slick.slick-" + this.instanceUid, this.setPosition);
  };
  d.prototype.cleanUpSlideEvents = function() {
    this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0));
    this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1));
  };
  d.prototype.cleanUpRows = function() {
    if (0 < this.options.rows) {
      var a = this.$slides.children().children();
      a.removeAttr("style");
      this.$slider.empty().append(a);
    }
  };
  d.prototype.clickHandler = function(a) {
    !1 === this.shouldClick &&
      (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  };
  d.prototype.destroy = function(a) {
    this.autoPlayClear();
    this.touchObject = {};
    this.cleanUpEvents();
    c(".slick-cloned", this.$slider).detach();
    this.$dots && this.$dots.remove();
    this.$prevArrow &&
      this.$prevArrow.length &&
      (this.$prevArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", ""),
      this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove());
    this.$nextArrow &&
      this.$nextArrow.length &&
      (this.$nextArrow
        .removeClass("slick-disabled slick-arrow slick-hidden")
        .removeAttr("aria-hidden aria-disabled tabindex")
        .css("display", ""),
      this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove());
    this.$slides &&
      (this.$slides
        .removeClass(
          "slick-slide slick-active slick-center slick-visible slick-current"
        )
        .removeAttr("aria-hidden")
        .removeAttr("data-slick-index")
        .each(function() {
          c(this).attr("style", c(this).data("originalStyling"));
        }),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slideTrack.detach(),
      this.$list.detach(),
      this.$slider.append(this.$slides));
    this.cleanUpRows();
    this.$slider.removeClass("slick-slider");
    this.$slider.removeClass("slick-initialized");
    this.$slider.removeClass("slick-dotted");
    this.unslicked = !0;
    a || this.$slider.trigger("destroy", [this]);
  };
  d.prototype.disableTransition = function(a) {
    var b = {};
    b[this.transitionType] = "";
    !1 === this.options.fade
      ? this.$slideTrack.css(b)
      : this.$slides.eq(a).css(b);
  };
  d.prototype.fadeSlide = function(a, b) {
    var f = this;
    !1 === f.cssTransitions
      ? (f.$slides.eq(a).css({ zIndex: f.options.zIndex }),
        f.$slides
          .eq(a)
          .animate({ opacity: 1 }, f.options.speed, f.options.easing, b))
      : (f.applyTransition(a),
        f.$slides.eq(a).css({ opacity: 1, zIndex: f.options.zIndex }),
        b &&
          setTimeout(function() {
            f.disableTransition(a);
            b.call();
          }, f.options.speed));
  };
  d.prototype.fadeSlideOut = function(a) {
    !1 === this.cssTransitions
      ? this.$slides
          .eq(a)
          .animate(
            { opacity: 0, zIndex: this.options.zIndex - 2 },
            this.options.speed,
            this.options.easing
          )
      : (this.applyTransition(a),
        this.$slides
          .eq(a)
          .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
  };
  d.prototype.filterSlides = d.prototype.slickFilter = function(a) {
    null !== a &&
      ((this.$slidesCache = this.$slides),
      this.unload(),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slidesCache.filter(a).appendTo(this.$slideTrack),
      this.reinit());
  };
  d.prototype.focusHandler = function() {
    var a = this;
    a.$slider
      .off("focus.slick blur.slick")
      .on("focus.slick blur.slick", "*", function(b) {
        b.stopImmediatePropagation();
        var f = c(this);
        setTimeout(function() {
          a.options.pauseOnFocus &&
            ((a.focussed = f.is(":focus")), a.autoPlay());
        }, 0);
      });
  };
  d.prototype.getCurrent = d.prototype.slickCurrentSlide = function() {
    return this.currentSlide;
  };
  d.prototype.getDotCount = function() {
    var a = 0,
      b = 0,
      f = 0;
    if (!0 === this.options.infinite)
      if (this.slideCount <= this.options.slidesToShow) ++f;
      else
        for (; a < this.slideCount; )
          ++f,
            (a = b + this.options.slidesToScroll),
            (b +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
    else if (!0 === this.options.centerMode) f = this.slideCount;
    else if (this.options.asNavFor)
      for (; a < this.slideCount; )
        ++f,
          (a = b + this.options.slidesToScroll),
          (b +=
            this.options.slidesToScroll <= this.options.slidesToShow
              ? this.options.slidesToScroll
              : this.options.slidesToShow);
    else
      f =
        1 +
        Math.ceil(
          (this.slideCount - this.options.slidesToShow) /
            this.options.slidesToScroll
        );
    return f - 1;
  };
  d.prototype.getLeft = function(a) {
    var b = 0;
    this.slideOffset = 0;
    var f = this.$slides.first().outerHeight(!0);
    !0 === this.options.infinite
      ? (this.slideCount > this.options.slidesToShow &&
          ((this.slideOffset =
            this.slideWidth * this.options.slidesToShow * -1),
          (b = -1),
          !0 === this.options.vertical &&
            !0 === this.options.centerMode &&
            (2 === this.options.slidesToShow
              ? (b = -1.5)
              : 1 === this.options.slidesToShow && (b = -2)),
          (b *= f * this.options.slidesToShow)),
        0 !== this.slideCount % this.options.slidesToScroll &&
          a + this.options.slidesToScroll > this.slideCount &&
          this.slideCount > this.options.slidesToShow &&
          (a > this.slideCount
            ? ((this.slideOffset =
                (this.options.slidesToShow - (a - this.slideCount)) *
                this.slideWidth *
                -1),
              (b =
                (this.options.slidesToShow - (a - this.slideCount)) * f * -1))
            : ((this.slideOffset =
                (this.slideCount % this.options.slidesToScroll) *
                this.slideWidth *
                -1),
              (b = (this.slideCount % this.options.slidesToScroll) * f * -1))))
      : a + this.options.slidesToShow > this.slideCount &&
        ((this.slideOffset =
          (a + this.options.slidesToShow - this.slideCount) * this.slideWidth),
        (b = (a + this.options.slidesToShow - this.slideCount) * f));
    this.slideCount <= this.options.slidesToShow && (b = this.slideOffset = 0);
    !0 === this.options.centerMode &&
    this.slideCount <= this.options.slidesToShow
      ? (this.slideOffset =
          (this.slideWidth * Math.floor(this.options.slidesToShow)) / 2 -
          (this.slideWidth * this.slideCount) / 2)
      : !0 === this.options.centerMode && !0 === this.options.infinite
        ? (this.slideOffset +=
            this.slideWidth * Math.floor(this.options.slidesToShow / 2) -
            this.slideWidth)
        : !0 === this.options.centerMode &&
          ((this.slideOffset = 0),
          (this.slideOffset +=
            this.slideWidth * Math.floor(this.options.slidesToShow / 2)));
    f =
      !1 === this.options.vertical
        ? a * this.slideWidth * -1 + this.slideOffset
        : a * f * -1 + b;
    !0 === this.options.variableWidth &&
      ((b =
        this.slideCount <= this.options.slidesToShow ||
        !1 === this.options.infinite
          ? this.$slideTrack.children(".slick-slide").eq(a)
          : this.$slideTrack
              .children(".slick-slide")
              .eq(a + this.options.slidesToShow)),
      (f =
        !0 === this.options.rtl
          ? b[0]
            ? -1 * (this.$slideTrack.width() - b[0].offsetLeft - b.width())
            : 0
          : b[0]
            ? -1 * b[0].offsetLeft
            : 0),
      !0 === this.options.centerMode &&
        ((b =
          this.slideCount <= this.options.slidesToShow ||
          !1 === this.options.infinite
            ? this.$slideTrack.children(".slick-slide").eq(a)
            : this.$slideTrack
                .children(".slick-slide")
                .eq(a + this.options.slidesToShow + 1)),
        (f =
          !0 === this.options.rtl
            ? b[0]
              ? -1 * (this.$slideTrack.width() - b[0].offsetLeft - b.width())
              : 0
            : b[0]
              ? -1 * b[0].offsetLeft
              : 0),
        (f += (this.$list.width() - b.outerWidth()) / 2)));
    return f;
  };
  d.prototype.getOption = d.prototype.slickGetOption = function(a) {
    return this.options[a];
  };
  d.prototype.getNavigableIndexes = function() {
    var a = 0,
      b = 0,
      f = [];
    if (!1 === this.options.infinite) var e = this.slideCount;
    else
      (a = -1 * this.options.slidesToScroll),
        (b = -1 * this.options.slidesToScroll),
        (e = 2 * this.slideCount);
    for (; a < e; )
      f.push(a),
        (a = b + this.options.slidesToScroll),
        (b +=
          this.options.slidesToScroll <= this.options.slidesToShow
            ? this.options.slidesToScroll
            : this.options.slidesToShow);
    return f;
  };
  d.prototype.getSlick = function() {
    return this;
  };
  d.prototype.getSlideCount = function() {
    var a = this,
      b,
      f;
    var e =
      !0 === a.options.centerMode
        ? a.slideWidth * Math.floor(a.options.slidesToShow / 2)
        : 0;
    return !0 === a.options.swipeToSlide
      ? (a.$slideTrack.find(".slick-slide").each(function(b, d) {
          if (d.offsetLeft - e + c(d).outerWidth() / 2 > -1 * a.swipeLeft)
            return (f = d), !1;
        }),
        (b = Math.abs(c(f).attr("data-slick-index") - a.currentSlide) || 1))
      : a.options.slidesToScroll;
  };
  d.prototype.goTo = d.prototype.slickGoTo = function(a, b) {
    this.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
  };
  d.prototype.init = function(a) {
    c(this.$slider).hasClass("slick-initialized") ||
      (c(this.$slider).addClass("slick-initialized"),
      this.buildRows(),
      this.buildOut(),
      this.setProps(),
      this.startLoad(),
      this.loadSlider(),
      this.initializeEvents(),
      this.updateArrows(),
      this.updateDots(),
      this.checkResponsive(!0),
      this.focusHandler());
    a && this.$slider.trigger("init", [this]);
    !0 === this.options.accessibility && this.initADA();
    this.options.autoplay && ((this.paused = !1), this.autoPlay());
  };
  d.prototype.initADA = function() {
    var a = this,
      b = Math.ceil(a.slideCount / a.options.slidesToShow),
      f = a.getNavigableIndexes().filter(function(b) {
        return 0 <= b && b < a.slideCount;
      });
    a.$slides
      .add(a.$slideTrack.find(".slick-cloned"))
      .attr({ "aria-hidden": "true", tabindex: "-1" })
      .find("a, input, button, select")
      .attr({ tabindex: "-1" });
    null !== a.$dots &&
      (a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b) {
        var e = f.indexOf(b);
        c(this).attr({
          role: "tabpanel",
          id: "slick-slide" + a.instanceUid + b,
          tabindex: -1
        });
        -1 !== e &&
          ((b = "slick-slide-control" + a.instanceUid + e),
          c("#" + b).length && c(this).attr({ "aria-describedby": b }));
      }),
      a.$dots
        .attr("role", "tablist")
        .find("li")
        .each(function(e) {
          var d = f[e];
          c(this).attr({ role: "presentation" });
          c(this)
            .find("button")
            .first()
            .attr({
              role: "tab",
              id: "slick-slide-control" + a.instanceUid + e,
              "aria-controls": "slick-slide" + a.instanceUid + d,
              "aria-label": e + 1 + " of " + b,
              "aria-selected": null,
              tabindex: "-1"
            });
        })
        .eq(a.currentSlide)
        .find("button")
        .attr({ "aria-selected": "true", tabindex: "0" })
        .end());
    for (var e = a.currentSlide, d = e + a.options.slidesToShow; e < d; e++)
      a.options.focusOnChange
        ? a.$slides.eq(e).attr({ tabindex: "0" })
        : a.$slides.eq(e).removeAttr("tabindex");
    a.activateADA();
  };
  d.prototype.initArrowEvents = function() {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow
        .off("click.slick")
        .on("click.slick", { message: "previous" }, this.changeSlide),
      this.$nextArrow
        .off("click.slick")
        .on("click.slick", { message: "next" }, this.changeSlide),
      !0 === this.options.accessibility &&
        (this.$prevArrow.on("keydown.slick", this.keyHandler),
        this.$nextArrow.on("keydown.slick", this.keyHandler)));
  };
  d.prototype.initDotEvents = function() {
    if (
      !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow &&
      (c("li", this.$dots).on(
        "click.slick",
        { message: "index" },
        this.changeSlide
      ),
      !0 === this.options.accessibility)
    )
      this.$dots.on("keydown.slick", this.keyHandler);
    if (
      !0 === this.options.dots &&
      !0 === this.options.pauseOnDotsHover &&
      this.slideCount > this.options.slidesToShow
    )
      c("li", this.$dots)
        .on("mouseenter.slick", c.proxy(this.interrupt, this, !0))
        .on("mouseleave.slick", c.proxy(this.interrupt, this, !1));
  };
  d.prototype.initSlideEvents = function() {
    this.options.pauseOnHover &&
      (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)),
      this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)));
  };
  d.prototype.initializeEvents = function() {
    this.initArrowEvents();
    this.initDotEvents();
    this.initSlideEvents();
    this.$list.on(
      "touchstart.slick mousedown.slick",
      { action: "start" },
      this.swipeHandler
    );
    this.$list.on(
      "touchmove.slick mousemove.slick",
      { action: "move" },
      this.swipeHandler
    );
    this.$list.on(
      "touchend.slick mouseup.slick",
      { action: "end" },
      this.swipeHandler
    );
    this.$list.on(
      "touchcancel.slick mouseleave.slick",
      { action: "end" },
      this.swipeHandler
    );
    this.$list.on("click.slick", this.clickHandler);
    c(document).on(this.visibilityChange, c.proxy(this.visibility, this));
    if (!0 === this.options.accessibility)
      this.$list.on("keydown.slick", this.keyHandler);
    if (!0 === this.options.focusOnSelect)
      c(this.$slideTrack)
        .children()
        .on("click.slick", this.selectHandler);
    c(window).on(
      "orientationchange.slick.slick-" + this.instanceUid,
      c.proxy(this.orientationChange, this)
    );
    c(window).on(
      "resize.slick.slick-" + this.instanceUid,
      c.proxy(this.resize, this)
    );
    c("[draggable!=true]", this.$slideTrack).on(
      "dragstart",
      this.preventDefault
    );
    c(window).on("load.slick.slick-" + this.instanceUid, this.setPosition);
    c(this.setPosition);
  };
  d.prototype.initUI = function() {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow.show(), this.$nextArrow.show());
    !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow &&
      this.$dots.show();
  };
  d.prototype.keyHandler = function(a) {
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
      (37 === a.keyCode && !0 === this.options.accessibility
        ? this.changeSlide({
            data: { message: !0 === this.options.rtl ? "next" : "previous" }
          })
        : 39 === a.keyCode &&
          !0 === this.options.accessibility &&
          this.changeSlide({
            data: { message: !0 === this.options.rtl ? "previous" : "next" }
          }));
  };
  d.prototype.lazyLoad = function() {
    function a(a) {
      c("img[data-lazy]", a).each(function() {
        var a = c(this),
          d = c(this).attr("data-lazy"),
          e = c(this).attr("data-srcset"),
          f = c(this).attr("data-sizes") || b.$slider.attr("data-sizes"),
          g = document.createElement("img");
        g.onload = function() {
          a.animate({ opacity: 0 }, 100, function() {
            e && (a.attr("srcset", e), f && a.attr("sizes", f));
            a.attr("src", d).animate({ opacity: 1 }, 200, function() {
              a.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                "slick-loading"
              );
            });
            b.$slider.trigger("lazyLoaded", [b, a, d]);
          });
        };
        g.onerror = function() {
          a.removeAttr("data-lazy")
            .removeClass("slick-loading")
            .addClass("slick-lazyload-error");
          b.$slider.trigger("lazyLoadError", [b, a, d]);
        };
        g.src = d;
      });
    }
    var b = this;
    if (!0 === b.options.centerMode)
      if (!0 === b.options.infinite) {
        var f = b.currentSlide + (b.options.slidesToShow / 2 + 1);
        var e = f + b.options.slidesToShow + 2;
      } else
        (f = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1))),
          (e = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide);
    else
      (f = b.options.infinite
        ? b.options.slidesToShow + b.currentSlide
        : b.currentSlide),
        (e = Math.ceil(f + b.options.slidesToShow)),
        !0 === b.options.fade && (0 < f && f--, e <= b.slideCount && e++);
    var d = b.$slider.find(".slick-slide").slice(f, e);
    if ("anticipated" === b.options.lazyLoad) {
      --f;
      for (
        var m = b.$slider.find(".slick-slide"), h = 0;
        h < b.options.slidesToScroll;
        h++
      )
        0 > f && (f = b.slideCount - 1),
          (d = d.add(m.eq(f))),
          (d = d.add(m.eq(e))),
          f--,
          e++;
    }
    a(d);
    b.slideCount <= b.options.slidesToShow
      ? ((d = b.$slider.find(".slick-slide")), a(d))
      : b.currentSlide >= b.slideCount - b.options.slidesToShow
        ? ((d = b.$slider
            .find(".slick-cloned")
            .slice(0, b.options.slidesToShow)),
          a(d))
        : 0 === b.currentSlide &&
          ((d = b.$slider
            .find(".slick-cloned")
            .slice(-1 * b.options.slidesToShow)),
          a(d));
  };
  d.prototype.loadSlider = function() {
    this.setPosition();
    this.$slideTrack.css({ opacity: 1 });
    this.$slider.removeClass("slick-loading");
    this.initUI();
    "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
  };
  d.prototype.next = d.prototype.slickNext = function() {
    this.changeSlide({ data: { message: "next" } });
  };
  d.prototype.orientationChange = function() {
    this.checkResponsive();
    this.setPosition();
  };
  d.prototype.pause = d.prototype.slickPause = function() {
    this.autoPlayClear();
    this.paused = !0;
  };
  d.prototype.play = d.prototype.slickPlay = function() {
    this.autoPlay();
    this.options.autoplay = !0;
    this.interrupted = this.focussed = this.paused = !1;
  };
  d.prototype.postSlide = function(a) {
    this.unslicked ||
      (this.$slider.trigger("afterChange", [this, a]),
      (this.animating = !1),
      this.slideCount > this.options.slidesToShow && this.setPosition(),
      (this.swipeLeft = null),
      this.options.autoplay && this.autoPlay(),
      !0 === this.options.accessibility &&
        (this.initADA(),
        this.options.focusOnChange &&
          c(this.$slides.get(this.currentSlide))
            .attr("tabindex", 0)
            .focus()));
  };
  d.prototype.prev = d.prototype.slickPrev = function() {
    this.changeSlide({ data: { message: "previous" } });
  };
  d.prototype.preventDefault = function(a) {
    a.preventDefault();
  };
  d.prototype.progressiveLazyLoad = function(a) {
    a = a || 1;
    var b = this,
      d = c("img[data-lazy]", b.$slider);
    if (d.length) {
      var e = d.first();
      var g = e.attr("data-lazy");
      var m = e.attr("data-srcset");
      var h = e.attr("data-sizes") || b.$slider.attr("data-sizes");
      d = document.createElement("img");
      d.onload = function() {
        m && (e.attr("srcset", m), h && e.attr("sizes", h));
        e.attr("src", g)
          .removeAttr("data-lazy data-srcset data-sizes")
          .removeClass("slick-loading");
        !0 === b.options.adaptiveHeight && b.setPosition();
        b.$slider.trigger("lazyLoaded", [b, e, g]);
        b.progressiveLazyLoad();
      };
      d.onerror = function() {
        3 > a
          ? setTimeout(function() {
              b.progressiveLazyLoad(a + 1);
            }, 500)
          : (e
              .removeAttr("data-lazy")
              .removeClass("slick-loading")
              .addClass("slick-lazyload-error"),
            b.$slider.trigger("lazyLoadError", [b, e, g]),
            b.progressiveLazyLoad());
      };
      d.src = g;
    } else b.$slider.trigger("allImagesLoaded", [b]);
  };
  d.prototype.refresh = function(a) {
    var b = this.slideCount - this.options.slidesToShow;
    !this.options.infinite && this.currentSlide > b && (this.currentSlide = b);
    this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
    b = this.currentSlide;
    this.destroy(!0);
    c.extend(this, this.initials, { currentSlide: b });
    this.init();
    a || this.changeSlide({ data: { message: "index", index: b } }, !1);
  };
  d.prototype.registerBreakpoints = function() {
    var a = this,
      b,
      d,
      e = a.options.responsive || null;
    if ("array" === c.type(e) && e.length) {
      a.respondTo = a.options.respondTo || "window";
      for (b in e) {
        var g = a.breakpoints.length - 1;
        if (e.hasOwnProperty(b)) {
          for (d = e[b].breakpoint; 0 <= g; )
            a.breakpoints[g] &&
              a.breakpoints[g] === d &&
              a.breakpoints.splice(g, 1),
              g--;
          a.breakpoints.push(d);
          a.breakpointSettings[d] = e[b].settings;
        }
      }
      a.breakpoints.sort(function(b, d) {
        return a.options.Hong Kong Blue Bubble Technology Co, Limited First ? b - d : d - b;
      });
    }
  };
  d.prototype.reinit = function() {
    this.$slides = this.$slideTrack
      .children(this.options.slide)
      .addClass("slick-slide");
    this.slideCount = this.$slides.length;
    this.currentSlide >= this.slideCount &&
      0 !== this.currentSlide &&
      (this.currentSlide -= this.options.slidesToScroll);
    this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0);
    this.registerBreakpoints();
    this.setProps();
    this.setupInfinite();
    this.buildArrows();
    this.updateArrows();
    this.initArrowEvents();
    this.buildDots();
    this.updateDots();
    this.initDotEvents();
    this.cleanUpSlideEvents();
    this.initSlideEvents();
    this.checkResponsive(!1, !0);
    if (!0 === this.options.focusOnSelect)
      c(this.$slideTrack)
        .children()
        .on("click.slick", this.selectHandler);
    this.setSlideClasses(
      "number" === typeof this.currentSlide ? this.currentSlide : 0
    );
    this.setPosition();
    this.focusHandler();
    this.paused = !this.options.autoplay;
    this.autoPlay();
    this.$slider.trigger("reInit", [this]);
  };
  d.prototype.resize = function() {
    var a = this;
    c(window).width() !== a.windowWidth &&
      (clearTimeout(a.windowDelay),
      (a.windowDelay = window.setTimeout(function() {
        a.windowWidth = c(window).width();
        a.checkResponsive();
        a.unslicked || a.setPosition();
      }, 50)));
  };
  d.prototype.removeSlide = d.prototype.slickRemove = function(a, b, d) {
    a =
      "boolean" === typeof a
        ? !0 === a
          ? 0
          : this.slideCount - 1
        : !0 === b
          ? --a
          : a;
    if (1 > this.slideCount || 0 > a || a > this.slideCount - 1) return !1;
    this.unload();
    !0 === d
      ? this.$slideTrack.children().remove()
      : this.$slideTrack
          .children(this.options.slide)
          .eq(a)
          .remove();
    this.$slides = this.$slideTrack.children(this.options.slide);
    this.$slideTrack.children(this.options.slide).detach();
    this.$slideTrack.append(this.$slides);
    this.$slidesCache = this.$slides;
    this.reinit();
  };
  d.prototype.setCSS = function(a) {
    var b = {};
    !0 === this.options.rtl && (a = -a);
    var d = "left" == this.positionProp ? Math.ceil(a) + "px" : "0px";
    var e = "top" == this.positionProp ? Math.ceil(a) + "px" : "0px";
    b[this.positionProp] = a;
    !1 !== this.transformsEnabled &&
      ((b = {}),
      (b[this.animType] =
        !1 === this.cssTransitions
          ? "translate(" + d + ", " + e + ")"
          : "translate3d(" + d + ", " + e + ", 0px)"));
    this.$slideTrack.css(b);
  };
  d.prototype.setDimensions = function() {
    !1 === this.options.vertical
      ? !0 === this.options.centerMode &&
        this.$list.css({ padding: "0px " + this.options.centerPadding })
      : (this.$list.height(
          this.$slides.first().outerHeight(!0) * this.options.slidesToShow
        ),
        !0 === this.options.centerMode &&
          this.$list.css({ padding: this.options.centerPadding + " 0px" }));
    this.listWidth = this.$list.width();
    this.listHeight = this.$list.height();
    !1 === this.options.vertical && !1 === this.options.variableWidth
      ? ((this.slideWidth = Math.ceil(
          this.listWidth / this.options.slidesToShow
        )),
        this.$slideTrack.width(
          Math.ceil(
            this.slideWidth * this.$slideTrack.children(".slick-slide").length
          )
        ))
      : !0 === this.options.variableWidth
        ? this.$slideTrack.width(5e3 * this.slideCount)
        : ((this.slideWidth = Math.ceil(this.listWidth)),
          this.$slideTrack.height(
            Math.ceil(
              this.$slides.first().outerHeight(!0) *
                this.$slideTrack.children(".slick-slide").length
            )
          ));
    var a = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
    !1 === this.options.variableWidth &&
      this.$slideTrack.children(".slick-slide").width(this.slideWidth - a);
  };
  d.prototype.setFade = function() {
    var a = this,
      b;
    a.$slides.each(function(d, e) {
      b = a.slideWidth * d * -1;
      !0 === a.options.rtl
        ? c(e).css({
            position: "relative",
            right: b,
            top: 0,
            zIndex: a.options.zIndex - 2,
            opacity: 0
          })
        : c(e).css({
            position: "relative",
            left: b,
            top: 0,
            zIndex: a.options.zIndex - 2,
            opacity: 0
          });
    });
    a.$slides
      .eq(a.currentSlide)
      .css({ zIndex: a.options.zIndex - 1, opacity: 1 });
  };
  d.prototype.setHeight = function() {
    if (
      1 === this.options.slidesToShow &&
      !0 === this.options.adaptiveHeight &&
      !1 === this.options.vertical
    ) {
      var a = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.css("height", a);
    }
  };
  d.prototype.setOption = d.prototype.slickSetOption = function(a, b, d) {
    var e = this,
      g,
      f = !1;
    if ("object" === c.type(a)) {
      var h = a;
      f = b;
      var k = "multiple";
    } else if ("string" === c.type(a)) {
      h = a;
      var l = b;
      f = d;
      "responsive" === a && "array" === c.type(b)
        ? (k = "responsive")
        : "undefined" !== typeof b && (k = "single");
    }
    if ("single" === k) e.options[h] = l;
    else if ("multiple" === k)
      c.each(h, function(a, b) {
        e.options[a] = b;
      });
    else if ("responsive" === k)
      for (g in l)
        if ("array" !== c.type(e.options.responsive))
          e.options.responsive = [l[g]];
        else {
          for (a = e.options.responsive.length - 1; 0 <= a; )
            e.options.responsive[a].breakpoint === l[g].breakpoint &&
              e.options.responsive.splice(a, 1),
              a--;
          e.options.responsive.push(l[g]);
        }
    f && (e.unload(), e.reinit());
  };
  d.prototype.setPosition = function() {
    this.setDimensions();
    this.setHeight();
    !1 === this.options.fade
      ? this.setCSS(this.getLeft(this.currentSlide))
      : this.setFade();
    this.$slider.trigger("setPosition", [this]);
  };
  d.prototype.setProps = function() {
    var a = document.body.style;
    this.positionProp = !0 === this.options.vertical ? "top" : "left";
    "top" === this.positionProp
      ? this.$slider.addClass("slick-vertical")
      : this.$slider.removeClass("slick-vertical");
    (void 0 === a.WebkitTransition &&
      void 0 === a.MozTransition &&
      void 0 === a.msTransition) ||
      !0 !== this.options.useCSS ||
      (this.cssTransitions = !0);
    this.options.fade &&
      ("number" === typeof this.options.zIndex
        ? 3 > this.options.zIndex && (this.options.zIndex = 3)
        : (this.options.zIndex = this.defaults.zIndex));
    void 0 !== a.OTransform &&
      ((this.animType = "OTransform"),
      (this.transformType = "-o-transform"),
      (this.transitionType = "OTransition"),
      void 0 === a.perspectiveProperty &&
        void 0 === a.webkitPerspective &&
        (this.animType = !1));
    void 0 !== a.MozTransform &&
      ((this.animType = "MozTransform"),
      (this.transformType = "-moz-transform"),
      (this.transitionType = "MozTransition"),
      void 0 === a.perspectiveProperty &&
        void 0 === a.MozPerspective &&
        (this.animType = !1));
    void 0 !== a.webkitTransform &&
      ((this.animType = "webkitTransform"),
      (this.transformType = "-webkit-transform"),
      (this.transitionType = "webkitTransition"),
      void 0 === a.perspectiveProperty &&
        void 0 === a.webkitPerspective &&
        (this.animType = !1));
    void 0 !== a.msTransform &&
      ((this.animType = "msTransform"),
      (this.transformType = "-ms-transform"),
      (this.transitionType = "msTransition"),
      void 0 === a.msTransform && (this.animType = !1));
    void 0 !== a.transform &&
      !1 !== this.animType &&
      ((this.transformType = this.animType = "transform"),
      (this.transitionType = "transition"));
    this.transformsEnabled =
      this.options.useTransform &&
      null !== this.animType &&
      !1 !== this.animType;
  };
  d.prototype.setSlideClasses = function(a) {
    var b = this.$slider
      .find(".slick-slide")
      .removeClass("slick-active slick-center slick-current")
      .attr("aria-hidden", "true");
    this.$slides.eq(a).addClass("slick-current");
    if (!0 === this.options.centerMode) {
      var d = 0 === this.options.slidesToShow % 2 ? 1 : 0;
      var e = Math.floor(this.options.slidesToShow / 2);
      if (!0 === this.options.infinite) {
        if (a >= e && a <= this.slideCount - 1 - e)
          this.$slides
            .slice(a - e + d, a + e + 1)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        else {
          var c = this.options.slidesToShow + a;
          b.slice(c - e + 1 + d, c + e + 2)
            .addClass("slick-active")
            .attr("aria-hidden", "false");
        }
        0 === a
          ? b
              .eq(b.length - 1 - this.options.slidesToShow)
              .addClass("slick-center")
          : a === this.slideCount - 1 &&
            b.eq(this.options.slidesToShow).addClass("slick-center");
      }
      this.$slides.eq(a).addClass("slick-center");
    } else
      0 <= a && a <= this.slideCount - this.options.slidesToShow
        ? this.$slides
            .slice(a, a + this.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false")
        : b.length <= this.options.slidesToShow
          ? b.addClass("slick-active").attr("aria-hidden", "false")
          : ((e = this.slideCount % this.options.slidesToShow),
            (c =
              !0 === this.options.infinite ? this.options.slidesToShow + a : a),
            this.options.slidesToShow == this.options.slidesToScroll &&
            this.slideCount - a < this.options.slidesToShow
              ? b
                  .slice(c - (this.options.slidesToShow - e), c + e)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : b
                  .slice(c, c + this.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
    ("ondemand" !== this.options.lazyLoad &&
      "anticipated" !== this.options.lazyLoad) ||
      this.lazyLoad();
  };
  d.prototype.setupInfinite = function() {
    var a;
    !0 === this.options.fade && (this.options.centerMode = !1);
    if (!0 === this.options.infinite && !1 === this.options.fade) {
      var b = null;
      if (this.slideCount > this.options.slidesToShow) {
        var d =
          !0 === this.options.centerMode
            ? this.options.slidesToShow + 1
            : this.options.slidesToShow;
        for (a = this.slideCount; a > this.slideCount - d; --a)
          (b = a - 1),
            c(this.$slides[b])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", b - this.slideCount)
              .prependTo(this.$slideTrack)
              .addClass("slick-cloned");
        for (a = 0; a < d + this.slideCount; a += 1)
          (b = a),
            c(this.$slides[b])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", b + this.slideCount)
              .appendTo(this.$slideTrack)
              .addClass("slick-cloned");
        this.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function() {
            c(this).attr("id", "");
          });
      }
    }
  };
  d.prototype.interrupt = function(a) {
    a || this.autoPlay();
    this.interrupted = a;
  };
  d.prototype.selectHandler = function(a) {
    a = c(a.target).is(".slick-slide")
      ? c(a.target)
      : c(a.target).parents(".slick-slide");
    (a = parseInt(a.attr("data-slick-index"))) || (a = 0);
    this.slideCount <= this.options.slidesToShow
      ? this.slideHandler(a, !1, !0)
      : this.slideHandler(a);
  };
  d.prototype.slideHandler = function(a, b, d) {
    var e = null,
      c = this;
    if (!0 !== c.animating || !0 !== c.options.waitForAnimate)
      if (!0 !== c.options.fade || c.currentSlide !== a) {
        !1 === (b || !1) && c.asNavFor(a);
        var f = a;
        e = c.getLeft(f);
        b = c.getLeft(c.currentSlide);
        c.currentLeft = null === c.swipeLeft ? b : c.swipeLeft;
        if (
          !1 === c.options.infinite &&
          !1 === c.options.centerMode &&
          (0 > a || a > c.getDotCount() * c.options.slidesToScroll)
        )
          !1 === c.options.fade &&
            ((f = c.currentSlide),
            !0 !== d && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(b, function() {
                  c.postSlide(f);
                })
              : c.postSlide(f));
        else if (
          !1 === c.options.infinite &&
          !0 === c.options.centerMode &&
          (0 > a || a > c.slideCount - c.options.slidesToScroll)
        )
          !1 === c.options.fade &&
            ((f = c.currentSlide),
            !0 !== d && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(b, function() {
                  c.postSlide(f);
                })
              : c.postSlide(f));
        else {
          c.options.autoplay && clearInterval(c.autoPlayTimer);
          var h =
            0 > f
              ? 0 !== c.slideCount % c.options.slidesToScroll
                ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                : c.slideCount + f
              : f >= c.slideCount
                ? 0 !== c.slideCount % c.options.slidesToScroll
                  ? 0
                  : f - c.slideCount
                : f;
          c.animating = !0;
          c.$slider.trigger("beforeChange", [c, c.currentSlide, h]);
          a = c.currentSlide;
          c.currentSlide = h;
          c.setSlideClasses(c.currentSlide);
          c.options.asNavFor &&
            ((b = c.getNavTarget()),
            (b = b.slick("getSlick")),
            b.slideCount <= b.options.slidesToShow &&
              b.setSlideClasses(c.currentSlide));
          c.updateDots();
          c.updateArrows();
          !0 === c.options.fade
            ? (!0 !== d
                ? (c.fadeSlideOut(a),
                  c.fadeSlide(h, function() {
                    c.postSlide(h);
                  }))
                : c.postSlide(h),
              c.animateHeight())
            : !0 !== d && c.slideCount > c.options.slidesToShow
              ? c.animateSlide(e, function() {
                  c.postSlide(h);
                })
              : c.postSlide(h);
        }
      }
  };
  d.prototype.startLoad = function() {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      (this.$prevArrow.hide(), this.$nextArrow.hide());
    !0 === this.options.dots &&
      this.slideCount > this.options.slidesToShow &&
      this.$dots.hide();
    this.$slider.addClass("slick-loading");
  };
  d.prototype.swipeDirection = function() {
    var a = Math.round(
      (180 *
        Math.atan2(
          this.touchObject.startY - this.touchObject.curY,
          this.touchObject.startX - this.touchObject.curX
        )) /
        Math.PI
    );
    0 > a && (a = 360 - Math.abs(a));
    return (45 >= a && 0 <= a) || (360 >= a && 315 <= a)
      ? !1 === this.options.rtl
        ? "left"
        : "right"
      : 135 <= a && 225 >= a
        ? !1 === this.options.rtl
          ? "right"
          : "left"
        : !0 === this.options.verticalSwiping
          ? 35 <= a && 135 >= a
            ? "down"
            : "up"
          : "vertical";
  };
  d.prototype.swipeEnd = function(a) {
    this.swiping = this.dragging = !1;
    if (this.scrolling) return (this.scrolling = !1);
    this.interrupted = !1;
    this.shouldClick = 10 < this.touchObject.swipeLength ? !1 : !0;
    if (void 0 === this.touchObject.curX) return !1;
    !0 === this.touchObject.edgeHit &&
      this.$slider.trigger("edge", [this, this.swipeDirection()]);
    if (this.touchObject.swipeLength >= this.touchObject.minSwipe) {
      a = this.swipeDirection();
      switch (a) {
        case "left":
        case "down":
          var b = this.options.swipeToSlide
            ? this.checkNavigable(this.currentSlide + this.getSlideCount())
            : this.currentSlide + this.getSlideCount();
          this.currentDirection = 0;
          break;
        case "right":
        case "up":
          (b = this.options.swipeToSlide
            ? this.checkNavigable(this.currentSlide - this.getSlideCount())
            : this.currentSlide - this.getSlideCount()),
            (this.currentDirection = 1);
      }
      "vertical" != a &&
        (this.slideHandler(b),
        (this.touchObject = {}),
        this.$slider.trigger("swipe", [this, a]));
    } else
      this.touchObject.startX !== this.touchObject.curX &&
        (this.slideHandler(this.currentSlide), (this.touchObject = {}));
  };
  d.prototype.swipeHandler = function(a) {
    if (
      !(
        !1 === this.options.swipe ||
        ("ontouchend" in document && !1 === this.options.swipe) ||
        (!1 === this.options.draggable && -1 !== a.type.indexOf("mouse"))
      )
    )
      switch (
        ((this.touchObject.fingerCount =
          a.originalEvent && void 0 !== a.originalEvent.touches
            ? a.originalEvent.touches.length
            : 1),
        (this.touchObject.minSwipe =
          this.listWidth / this.options.touchThreshold),
        !0 === this.options.verticalSwiping &&
          (this.touchObject.minSwipe =
            this.listHeight / this.options.touchThreshold),
        a.data.action)
      ) {
        case "start":
          this.swipeStart(a);
          break;
        case "move":
          this.swipeMove(a);
          break;
        case "end":
          this.swipeEnd(a);
      }
  };
  d.prototype.swipeMove = function(a) {
    var b = void 0 !== a.originalEvent ? a.originalEvent.touches : null;
    if (!this.dragging || this.scrolling || (b && 1 !== b.length)) return !1;
    var c = this.getLeft(this.currentSlide);
    this.touchObject.curX = void 0 !== b ? b[0].pageX : a.clientX;
    this.touchObject.curY = void 0 !== b ? b[0].pageY : a.clientY;
    this.touchObject.swipeLength = Math.round(
      Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))
    );
    b = Math.round(
      Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2))
    );
    if (!this.options.verticalSwiping && !this.swiping && 4 < b)
      return (this.scrolling = !0), !1;
    !0 === this.options.verticalSwiping && (this.touchObject.swipeLength = b);
    b = this.swipeDirection();
    void 0 !== a.originalEvent &&
      4 < this.touchObject.swipeLength &&
      ((this.swiping = !0), a.preventDefault());
    var d =
      (!1 === this.options.rtl ? 1 : -1) *
      (this.touchObject.curX > this.touchObject.startX ? 1 : -1);
    !0 === this.options.verticalSwiping &&
      (d = this.touchObject.curY > this.touchObject.startY ? 1 : -1);
    a = this.touchObject.swipeLength;
    this.touchObject.edgeHit = !1;
    !1 === this.options.infinite &&
      ((0 === this.currentSlide && "right" === b) ||
        (this.currentSlide >= this.getDotCount() && "left" === b)) &&
      ((a = this.touchObject.swipeLength * this.options.edgeFriction),
      (this.touchObject.edgeHit = !0));
    this.swipeLeft =
      !1 === this.options.vertical
        ? c + a * d
        : c + a * (this.$list.height() / this.listWidth) * d;
    !0 === this.options.verticalSwiping && (this.swipeLeft = c + a * d);
    if (!0 === this.options.fade || !1 === this.options.touchMove) return !1;
    if (!0 === this.animating) return (this.swipeLeft = null), !1;
    this.setCSS(this.swipeLeft);
  };
  d.prototype.swipeStart = function(a) {
    var b;
    this.interrupted = !0;
    if (
      1 !== this.touchObject.fingerCount ||
      this.slideCount <= this.options.slidesToShow
    )
      return (this.touchObject = {}), !1;
    void 0 !== a.originalEvent &&
      void 0 !== a.originalEvent.touches &&
      (b = a.originalEvent.touches[0]);
    this.touchObject.startX = this.touchObject.curX =
      void 0 !== b ? b.pageX : a.clientX;
    this.touchObject.startY = this.touchObject.curY =
      void 0 !== b ? b.pageY : a.clientY;
    this.dragging = !0;
  };
  d.prototype.unfilterSlides = d.prototype.slickUnfilter = function() {
    null !== this.$slidesCache &&
      (this.unload(),
      this.$slideTrack.children(this.options.slide).detach(),
      this.$slidesCache.appendTo(this.$slideTrack),
      this.reinit());
  };
  d.prototype.unload = function() {
    c(".slick-cloned", this.$slider).remove();
    this.$dots && this.$dots.remove();
    this.$prevArrow &&
      this.htmlExpr.test(this.options.prevArrow) &&
      this.$prevArrow.remove();
    this.$nextArrow &&
      this.htmlExpr.test(this.options.nextArrow) &&
      this.$nextArrow.remove();
    this.$slides
      .removeClass("slick-slide slick-active slick-visible slick-current")
      .attr("aria-hidden", "true")
      .css("width", "");
  };
  d.prototype.unslick = function(a) {
    this.$slider.trigger("unslick", [this, a]);
    this.destroy();
  };
  d.prototype.updateArrows = function() {
    !0 === this.options.arrows &&
      this.slideCount > this.options.slidesToShow &&
      !this.options.infinite &&
      (this.$prevArrow
        .removeClass("slick-disabled")
        .attr("aria-disabled", "false"),
      this.$nextArrow
        .removeClass("slick-disabled")
        .attr("aria-disabled", "false"),
      0 === this.currentSlide
        ? (this.$prevArrow
            .addClass("slick-disabled")
            .attr("aria-disabled", "true"),
          this.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"))
        : this.currentSlide >= this.slideCount - this.options.slidesToShow &&
          !1 === this.options.centerMode
          ? (this.$nextArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"))
          : this.currentSlide >= this.slideCount - 1 &&
            !0 === this.options.centerMode &&
            (this.$nextArrow
              .addClass("slick-disabled")
              .attr("aria-disabled", "true"),
            this.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false")));
  };
  d.prototype.updateDots = function() {
    null !== this.$dots &&
      (this.$dots
        .find("li")
        .removeClass("slick-active")
        .end(),
      this.$dots
        .find("li")
        .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
        .addClass("slick-active"));
  };
  d.prototype.visibility = function() {
    this.options.autoplay &&
      (this.interrupted = document[this.hidden] ? !0 : !1);
  };
  c.fn.slick = function() {
    var a = arguments[0],
      b = Array.prototype.slice.call(arguments, 1),
      c = this.length,
      e,
      g;
    for (e = 0; e < c; e++)
      if (
        ("object" == typeof a || "undefined" == typeof a
          ? (this[e].slick = new d(this[e], a))
          : (g = this[e].slick[a].apply(this[e].slick, b)),
        "undefined" != typeof g)
      )
        return g;
    return this;
  };
});
var lib = {
  isIE: (function() {
    var c = 3,
      b = document.createElement("div"),
      a = b.getElementsByTagName("i");
    do b.innerHTML = "\x3c!--[if gt IE " + ++c + "]><i></i><![endif]--\x3e";
    while (a[0]);
    return 4 < c ? c : document.documentMode;
  })(),
  loadScript: function(c, b) {
    var a,
      d = document.getElementsByTagName("script")[0];
    document.getElementById(c) ||
      ((a = document.createElement("script")),
      (a.src = b),
      (a.id = c),
      d.parentNode.insertBefore(a, d));
  },
  inArray: function(c, b) {
    for (var a in b) if (b[a] == c) return !0;
    return !1;
  },
  cookie: function(c, b) {
    var a,
      d = new Date(),
      e = {},
      h = "",
      f,
      g;
    a = (a = /(?:^|; )ZM=([^;]*)/.exec(document.cookie))
      ? decodeURIComponent(a[1])
      : null;
    if (null !== a)
      for (f in ((a = a.split("||")), a))
        try {
          (g = a[f].split("|", 2)), (e[g[0]] = g[1]);
        } catch (k) {}
    if (1 === arguments.length) return e[c];
    null === b || !1 === b ? delete e[c] : (e[c] = b);
    a = [];
    for (f in e) a.push(f + "|" + e[f]);
    d.setTime(d.getTime() + 15768e7);
    h = "; expires=" + d.toGMTString();
    document.cookie = "ZM=" + encodeURIComponent(a.join("||")) + h + "; path=/";
  },
  word: function() {
    var c = ZMprops.words[arguments[0]],
      b;
    for (b = 1; b < arguments.length; b++)
      c = c.replace(new RegExp("#" + b, "g"), arguments[b]);
    return c;
  }
};
if (!window.console || !console.log)
  var console = {
    log: function() {},
    debug: function() {},
    info: function() {},
    warn: function() {},
    error: function() {}
  };
var socialLikesButtons = {
    whatsapp: {
      icon:
        "m13.616 3.8319c-1.3426-1.2519-3.0802-1.8822-4.9359-1.8307-3.7802 0.10475-6.7862 3.2411-6.68 6.9697 0.032827 1.1525 0.41124 2.3632 1.0588 3.3629l-0.93056 3.5538 3.6157-1.05c1.0464 0.51377 2.1538 0.75446 3.3223 0.72208 3.7802-0.10475 6.7862-3.2411 6.68-6.9697-0.052139-1.8304-0.78773-3.5061-2.1303-4.758zm-1.3055 7.2957c-0.12781 0.34277-0.80354 0.76857-1.1472 0.77809-0.27299 0.07541-0.61472 0.15273-2.0735-0.34962-1.7376-0.63031-2.8875-2.3624-2.9601-2.4961-0.13939-0.063982-0.78115-0.86035-0.80432-1.6739-0.025103-0.8813 0.44443-1.3014 0.57803-1.4408 0.13167-0.20719 0.33786-0.2129 0.47533-0.21671 0.068732-0.00191 0.20619-0.00572 0.34366-0.00952 0.068731-0.00191 0.20619-0.00572 0.35138 0.26165 0.14712 0.33515 0.51395 1.1391 0.58654 1.2728 0.00192 0.067792 0.072593 0.13368 0.00773 0.27117-0.064872 0.13749-0.062947 0.20528-0.12974 0.27498-0.1336 0.13939-0.2004 0.20909-0.26527 0.34658-0.0668 0.069697-0.20233 0.1413-0.059077 0.34087 0.072593 0.13368 0.4317 0.66649 0.99507 1.1258 0.63403 0.5252 1.1897 0.71334 1.3978 0.77542 0.14133 0.13177 0.27686 0.06017 0.34366-0.0095 0.1336-0.13939 0.39694-0.55377 0.53054-0.69316 0.13167-0.20719 0.20233-0.1413 0.41046-0.079218 0.13746-0.00386 0.97576 0.44788 1.1839 0.50996 0.1394 0.06398 0.27879 0.12796 0.28072 0.19576 0.07066 0.06588 0.08031 0.40485-0.04556 0.81541z",
      clickUrl:
        "whatsapp://send?text=" +
        encodeURIComponent(
          lib.word(4047, location.href.replace(location.hash, ""))
        )
    }
  },
  ZM = {
    gameIsFullscreen: !1,
    isTouch: "ontouchstart" in window || navigator.msMaxTouchPoints,
    whatsAppCompatible:
      navigator.userAgent.match(/Android|iPhone/i) &&
      !navigator.userAgent.match(/iPod|iPad/i),
    adsBlocked: function() {
      var a,
        b = "actiongame.com classicgame.com hiddenobjectgames.com mahjong.com match3games.com mindgames.com solitaireonline.com timemanagementgame.com".split(
          " "
        );
      $(".banner").each(function() {
        /(auto|horizontal)/.test($(".adsbygoogle", this).data("ad-format")) &&
          ((a = b[Math.floor(Math.random() * b.length)]),
          $(this).html(
            '<a href="https://' +
              a +
              '" target="_blank" title="' +
              a +
              '"><img class="bimg" alt="' +
              a +
              '" src="https://api.zygomatic.nl/bimg/' +
              a +
              '.jpg" class="bimg"></a>'
          ));
      });
    },
    recentGame: function(a) {
      var b = lib.cookie("recent-games");
      b = b ? b.split(",") : [];
      for (var c = b.length - 1; 0 <= c; c--) b[c] == a && b.splice(c, 1);
      b.unshift(a);
      lib.cookie("recent-games", b.slice(0, 12).join(","));
    },
    favoriteGame: function(a, b) {
      function c(a) {
        0 > a && (a = 0);
        $("#favQty")
          .data("qty", a)
          .find(".qty-circle")
          .text(a)
          .css("display", 0 == a ? "none" : "block");
      }
      var d = lib.cookie("favorite-games");
      d = d ? d.split(",") : [];
      var e = lib.inArray(a, d),
        h = +$("#favQty").data("qty");
      $("#fav-txt").html(lib.word(e ? 4037 : 4038));
      if (e) {
        for (e = d.length - 1; 0 <= e; e--)
          if (d[e] == a) {
            d.splice(e, 1);
            break;
          }
        c(h - 1);
        $(b).removeClass("del");
      } else if (($(b).addClass("del"), d.unshift(a), b)) {
        e = $(b).offset();
        var f = $("li.favorite").offset(),
          g = $("#favAnim");
        g.css({ opacity: 1, left: e.left + 4 + "px", top: e.top + "px" })
          .show()
          .animate(
            {
              left: f.left + 5 + "px",
              top: f.top + 9 + "px"
            },
            1e3,
            function() {
              g.animate({ opacity: 0 }, 500, function() {
                g.hide();
              });
              c(h + 1);
            }
          );
      }
      lib.cookie(
        "favorite-games",
        0 == d.length ? null : d.slice(0, 12).join(",")
      );
    },
    sortBy: function(a) {
      var b = location.href;
      b = b.replace(/(\?|&)sort=([^&]+)/, "");
      var c = -1 == b.indexOf("?") ? "?" : "&";
      b += c + "sort=" + encodeURIComponent(a);
      location.href = b;
    },
    gameTrailer: function(a) {
      ZM.modal("/modals/youtube.php?videoID=" + encodeURIComponent(a));
      $("#ajaxModal").on("hidden.bs.modal", function() {
        $("#ajaxModal iframe").attr("src", "");
      });
      return !1;
    },
    restartGame: function() {
      location.reload();
    },
    initGameDesktop: function(a, b) {
      var c = $(b);
      if (0 != c.length) {
        var d = c.data(),
          e = d.size.split("x"),
          h = +c.css("padding-top").replace("px", ""),
          f = +c.css("padding-bottom").replace("px", "");
        c.css("height", h + f + +e[1] + "px");
        h = -1 == a.indexOf("?") ? "?" : "&";
        /cdn\.htmlgames\.com/.test(a) && (a += h + "bgcolor=%23d9edf7");
        c.html(
          $("<iframe>", {
            id: "gameFrame",
            src: a,
            scrolling: "no",
            frameborder: 0,
            allowfullscreen: "true"
          })
            .css({
              width: d.fixedsize ? e[0] + "px" : "100%",
              height: e[1] + "px",
              display: "block"
            })
            .data("size", d.size)
            .on("load", function() {
              $("#fullscreenBtn").prop("disabled", !1);
            })
        );
        return !1;
      }
    },
    gameFullscreen: function(a) {
      var b = function() {
        var a = $("#gameFrame"),
          b = a.data("size").split("x"),
          e =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          h =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight,
          f = b[0],
          g = b[1];
        b = b[1] / b[0];
        var m = Math.min(e / f, h / g);
        f *= m;
        g *= m;
        if (f > e - 50) {
          f = e - 50;
          g = f * b;
          var k = (h - g) / 2;
          var l = 15;
        }
        g > h - 50 && ((g = h - 50), (f = g / b), (l = (e - f) / 2), (k = 20));
        a.addClass("iframeFullscreen")
          .css({
            left: l + "px",
            top: k + "px",
            width: f + "px",
            height: g + "px",
            marginTop: 0
          })
          .find("object,embed")
          .prop({ width: f, height: g });
        $("<img>", {
          id: "fsExitBtn",
          src: "/pics/close.png",
          style:
            "position:absolute;width:40px;height:40px;top:" +
            (k - 20) +
            "px;left:" +
            (l + f - 25) +
            "px;z-index:5;cursor:pointer"
        })
          .on("click", function() {
            screenfull.exit();
          })
          .appendTo("body");
        window.scrollTo(0, 0);
        ZM.gameIsFullscreen = !0;
      };
      !1 === a
        ? ($("#fsExitBtn").remove(),
          (a = $("#gameFrame")),
          (b = a.data("size").split("x")),
          a
            .removeClass("iframeFullscreen")
            .css({ width: "100%", height: b[1] + "px" }),
          screenfull.exit(),
          (ZM.gameIsFullscreen = !1),
          $(window).resize())
        : screenfull.enabled
          ? (screenfull.request(), setTimeout(b, 500))
          : b();
    },
    submitGameRating: function(a, b, c) {
      $.ajax({
        type: "POST",
        url: "/ajax.php",
        data: { task: "submitGameRating", gameID: b, rating: c },
        success: function(b) {
          b.success
            ? ($(a).raty("readOnly", !0), $("#rating-msg").html(b.data.message))
            : alert(b.response);
        }
      });
    },
    getGameHiscore: function(a, b) {
      $.ajax({
        type: "POST",
        url: "/ajax.php",
        data: {
          task: "getHiscore",
          gameName: b
        },
        success: function(b) {
          b.success
            ? 0 < b.data.length &&
              ((b = b.data[0]),
              $(a).html(
                "<strong>" +
                  b.score +
                  "</strong> " +
                  b.player +
                  " @ " +
                  b.logdate_iso.substr(0, 10)
              ))
            : alert(b.response);
        }
      });
    },
    search: function(a) {
      if (void 0 === a)
        return (
          (a = $("#search")),
          a.is(":visible")
            ? (a.slideUp(), $("li.search").removeClass("active"))
            : (a.slideDown(function() {
                $("input[name='q']", this).focus();
              }),
              $("li.search").addClass("active")),
          !1
        );
      if ("" === $.trim(a.q.value))
        return $(".input-group", a).addClass("has-error"), !1;
      $(".input-group", a).removeClass("has-error");
      return !0;
    },
    initSearch: function() {
      "#search" == location.hash && ZM.search();
      var a = $("#searchForm"),
        b = $("<ul>").appendTo(a),
        c = $("input[name='q']", a),
        d = -1;
      lib.isIE && $(".fa-times-circle-o", a).remove();
      $(".fa-times-circle-o", a).on("click", function() {
        b.empty();
        c.val("").focus();
      });
      c.on("keyup", function(a) {
        if (lib.inArray(a.keyCode, [27, 38, 40, 13])) {
          var c = $("li", b);
          c.eq(d).removeClass("hover");
          switch (a.keyCode) {
            case 27:
              b.empty();
              return;
            case 38:
              d--;
              break;
            case 40:
              d++;
              break;
            case 13:
              -1 != d && c.eq(d).click();
          }
          d >= c.length && (d = 0);
          0 > d && (d = c.length - 1);
          c.eq(d).addClass("hover");
          a.preventDefault();
        } else if (this.value != this.liveSearchLastValue) {
          var e = this.value;
          this.liveSearchTimer && clearTimeout(this.liveSearchTimer);
          this.liveSearchTimer = setTimeout(function() {
            e &&
              2 < e.length &&
              ((d = -1),
              $.ajax({
                type: "POST",
                url: "/ajax.php",
                dataType: "json",
                data: { task: "quickSearch", q: e },
                success: function(a) {
                  if (a.success) {
                    b.empty();
                    for (var c = 0; c < a.data.length; c++)
                      $("<li>")
                        .data("idx", c)
                        .html(a.data[c])
                        .on("mouseenter", function() {
                          $("li", b)
                            .eq(d)
                            .removeClass("hover");
                          d = $(this)
                            .addClass("hover")
                            .data("idx");
                        })
                        .on("click", function() {
                          location =
                            "/" +
                            ZMprops.gameUrl +
                            "/" +
                            encodeURIComponent($(this).text());
                        })
                        .appendTo(b);
                  } else alert(a.response);
                }
              }));
          }, 300);
          this.liveSearchLastValue = this.value;
        }
      });
    },
    modal: function(a) {
      $("#ajaxModal")
        .modal("hide")
        .remove();
      var b = $('<div class="modal" id="ajaxModal"></div>');
      $("body").append(b);
      b.modal({ backdrop: "static" }).load(a);
      return !1;
    }
  };
$(function() {
  $("a[href='#']").attr("href", "javascript://");
  cookieChoices.showCookieConsent({
    words: {
      consent: lib.word(3990),
      agreed: lib.word(3991),
      noThanks: lib.word(3992),
      policy: lib.word(3993)
    },
    policyUrl: "/disclaimer/"
  });
  ZM.initSearch();
  $("div.game").hover(
    function() {
      $(".desc", this).slideDown();
    },
    function() {
      $(".desc", this).slideUp();
    }
  );
  window.onhashchange = function(a) {
    switch (location.hash) {
      case "#search":
        ZM.search();
    }
  };
});
(function(b) {
  if (b.cookieChoices) return b.cookieChoices;
  var f = b.document,
    e = (function() {
      function g() {
        return f.cookie.match(/ZygomaticAdConsent=([^;]+)/) ? RegExp.$1 : null;
      }
      function h(a) {
        f.cookie =
          "ZygomaticAdConsent=" +
          a +
          "; path=/; expires=" +
          new Date(
            1 * new Date() + 864e5 * ("agreed" == a ? 365 : 30)
          ).toGMTString();
      }
      function k(a) {
        h(a);
        (adsbygoogle = b.adsbygoogle || []).requestNonPersonalizedAds =
          "agreed" == a ? 0 : 1;
        (adsbygoogle = b.adsbygoogle || []).pauseAdRequests = 0;
      }
      function e() {
        var a = jQuery("<a>", { href: "#", class: "link agreed" })
            .html(c.agreed)
            .on("click", function() {
              k("agreed");
              jQuery(".cookieBar").slideUp();
              return !1;
            }),
          b = jQuery("<a>", { href: "#", class: "link noThanks" })
            .html(c.noThanks)
            .on("click", function() {
              k("denied");
              jQuery(".cookieBar").slideUp();
              return !1;
            }),
          d = jQuery('<span class="link policy">').html(
            '<a href="' + l + '">' + c.policy + "</a>"
          );
        return jQuery("<div>", { class: "cookieBar" }).append(
          '<span class="consent">' + c.consent + "</span>",
          a,
          b,
          d
        );
      }
      function m() {
        var a = g();
        null !== a
          ? (((adsbygoogle = b.adsbygoogle || []).requestNonPersonalizedAds =
              "agreed" == a ? 0 : 1),
            ((adsbygoogle = b.adsbygoogle || []).pauseAdRequests = 0),
            "agreed" == a && h("agreed"))
          : (((adsbygoogle =
              b.adsbygoogle || []).requestNonPersonalizedAds = 1),
            ((adsbygoogle = b.adsbygoogle || []).pauseAdRequests = 0),
            jQuery("body").prepend(e()));
      }
      var d = !0,
        l = "/disclaimer/",
        c = {
          consent: "We use cookies to personalize ads.",
          agreed: "Ok, agreed",
          noThanks: "No, thanks",
          policy: "Privacy policy"
        };
      return {
        showCookieConsent: function(a) {
          a.words && (c = a.words);
          a.policyUrl && (l = a.policyUrl);
          jQuery.ajax({
            url: "https://adservice.google.com/getconfig/pubvendors",
            type: "GET",
            dataType: "json",
            success: function(a) {
              a.is_request_in_eea_or_unknown
                ? ((d = !1), m())
                : ((d = !1),
                  ((adsbygoogle =
                    b.adsbygoogle || []).requestNonPersonalizedAds = 0),
                  ((adsbygoogle = b.adsbygoogle || []).pauseAdRequests = 0));
            },
            error: function() {
              m();
            }
          });
        },
        adsPersonalized: function() {
          return !d || "agreed" === g();
        }
      };
    })();
  return (b.cookieChoices = e);
})(this);
