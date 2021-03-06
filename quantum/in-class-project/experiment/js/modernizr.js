! function(e, n, t) {
  function r(e, n) {
    return typeof e === n
  }

  function o() {
    var e, n, t, o, i, s, a;
    for (var f in C)
      if (C.hasOwnProperty(f)) {
        if (e = [], n = C[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), _.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function i(e) {
    var n = b.className,
      t = Modernizr._config.classPrefix || "";
    if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? b.className.baseVal = n : b.className = n)
  }

  function s(e, n) {
    if ("object" == typeof e)
      for (var t in e) P(e, t) && s(t, e[t]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n)
    }
    return Modernizr
  }

  function a() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }

  function f(e, n) {
    return !!~("" + e).indexOf(n)
  }

  function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
      return n + t.toUpperCase()
    }).replace(/^-/, "")
  }

  function l() {
    var e = n.body;
    return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
  }

  function c(e, t, r, o) {
    var i, s, f, u, c = "modernizr",
      d = a("div"),
      p = l();
    if (parseInt(r, 10))
      for (; r--;) f = a("div"), f.id = o ? o[r] : c + (r + 1), d.appendChild(f);
    return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : d.parentNode.removeChild(d), !!s
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function(e, n) {
      return "-" + n.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function p(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(d(n[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + d(n[o]) + ":" + r + ")");
      return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == getComputedStyle(e, null).position
      })
    }
    return t
  }

  function h(e, n, o, i) {
    function s() {
      c && (delete k.style, delete k.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = p(e, o);
      if (!r(l, "undefined")) return l
    }
    for (var c, d, h, m, v, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) c = !0, k.modElem = a(g.shift()), k.style = k.modElem.style;
    for (h = e.length, d = 0; h > d; d++)
      if (m = e[d], v = k.style[m], f(m, "-") && (m = u(m)), k.style[m] !== t) {
        if (i || r(o, "undefined")) return s(), "pfx" == n ? m : !0;
        try {
          k.style[m] = o
        } catch (y) {}
        if (k.style[m] != v) return s(), "pfx" == n ? m : !0
      }
    return s(), !1
  }

  function m(e, n) {
    return function() {
      return e.apply(n, arguments)
    }
  }

  function v(e, n, t) {
    var o;
    for (var i in e)
      if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? m(o, t || n) : o);
    return !1
  }

  function g(e, n, t, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + L.join(s + " ") + s).split(" ");
    return r(n, "string") || r(n, "undefined") ? h(a, n, o, i) : (a = (e + " " + j.join(s + " ") + s).split(" "), v(a, n, t))
  }

  function y(e, n, r) {
    return g(e, t, t, n, r)
  }
  var _ = [],
    C = [],
    w = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        C.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function(e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = w, Modernizr = new Modernizr;
  var x = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = x;
  var b = n.documentElement,
    S = "svg" === b.nodeName.toLowerCase(),
    T = "Moz O ms Webkit",
    j = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
  w._domPrefixes = j;
  var P;
  ! function() {
    var e = {}.hasOwnProperty;
    P = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) {
      return n in e && r(e.constructor.prototype[n], "undefined")
    } : function(n, t) {
      return e.call(n, t)
    }
  }(), w._l = {}, w.on = function(e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, w._trigger = function(e, n) {
    if (this._l[e]) {
      var t = this._l[e];
      setTimeout(function() {
        var e, r;
        for (e = 0; e < t.length; e++)(r = t[e])(n)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function() {
    w.addTest = s
  }), Modernizr.addTest("inlinesvg", function() {
    var e = a("div");
    return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
  });
  var z = w.testStyles = c,
    E = {
      elem: a("modernizr")
    };
  Modernizr._q.push(function() {
    delete E.elem
  });
  var k = {
    style: E.elem.style
  };
  Modernizr._q.unshift(function() {
    delete k.style
  });
  var L = (w.testProp = function(e, n, r) {
    return h([e], t, n, r)
  }, w._config.usePrefixes ? T.split(" ") : []);
  w._cssomPrefixes = L;
  var N = function(n) {
    var r, o = x.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return t;
    if (!n) return !1;
    if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
    for (var s = 0; o > s; s++) {
      var a = x[s],
        f = a.toUpperCase() + "_" + r;
      if (f in i) return "@-" + a.toLowerCase() + "-" + n
    }
    return !1
  };
  w.atRule = N, Modernizr.addTest("touchevents", function() {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
    else {
      var r = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      z(r, function(e) {
        t = 9 === e.offsetTop
      })
    }
    return t
  }), w.testAllProps = g, w.testAllProps = y, Modernizr.addTest("backgroundcliptext", function() {
    return y("backgroundClip", "text")
  }), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0));
  var O = w.prefixed = function(e, n, t) {
    return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = u(e)), n ? g(e, n, t) : g(e, "pfx"))
  };
  Modernizr.addTest("objectfit", !!O("objectFit"), {
    aliases: ["object-fit"]
  }), o(), i(_), delete w.addTest, delete w.addAsyncTest;
  for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
  e.Modernizr = Modernizr
}(window, document);
Modernizr.addTest('mix-blend-mode', function() {
  return Modernizr.testProp('mixBlendMode');
});
