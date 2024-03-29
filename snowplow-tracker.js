/**
 * @description JavaScript tracker for Snowplow
 * @version     2.17.0
 * @copyright   Anthon Pang, Snowplow Analytics Ltd
 * @license     Simplified BSD
 * 
 * Documentation: http://bit.ly/sp-js
 */

'use strict';
(function() {
    function H(a) {
        "@babel/helpers - typeof";
        H = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
        ;
        return H(a)
    }
    function Ab(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(a);
            b && (e = e.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable
            }));
            c.push.apply(c, e)
        }
        return c
    }
    function ld(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = null != arguments[b] ? arguments[b] : {};
            b % 2 ? Ab(Object(c), !0).forEach(function(b) {
                var d = c[b];
                b in a ? Object.defineProperty(a, b, {
                    value: d,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = d
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : Ab(Object(c)).forEach(function(b) {
                Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b))
            })
        }
        return a
    }
    function oa(a) {
        var b = Array.isArray(a) ? Bb(a) : void 0;
        b || (b = "undefined" !== typeof Symbol && Symbol.iterator in Object(a) ? Array.from(a) : void 0);
        if (!(a = b || Cb(a)))
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return a
    }
    function Cb(a, b) {
        if (a) {
            if ("string" === typeof a)
                return Bb(a, b);
            var c = Object.prototype.toString.call(a).slice(8, -1);
            "Object" === c && a.constructor && (c = a.constructor.name);
            if ("Map" === c || "Set" === c)
                return Array.from(a);
            if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                return Bb(a, b)
        }
    }
    function Bb(a, b) {
        if (null == b || b > a.length)
            b = a.length;
        for (var c = 0, e = Array(b); c < b; c++)
            e[c] = a[c];
        return e
    }
    function Db(a, b) {
        var c;
        if ("undefined" === typeof Symbol || null == a[Symbol.iterator]) {
            if (Array.isArray(a) || (c = Cb(a)) || b && a && "number" === typeof a.length) {
                c && (a = c);
                var e = 0;
                b = function() {}
                ;
                return {
                    s: b,
                    n: function() {
                        return e >= a.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: a[e++]
                        }
                    },
                    e: function(a) {
                        throw a;
                    },
                    f: b
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var d = !0, f = !1, h;
        return {
            s: function() {
                c = a[Symbol.iterator]()
            },
            n: function() {
                var a = c.next();
                d = a.done;
                return a
            },
            e: function(a) {
                f = !0;
                h = a
            },
            f: function() {
                try {
                    d || null == c.return || c.return()
                } finally {
                    if (f)
                        throw h;
                }
            }
        }
    }
    function pa(a) {
        var b = {
            exports: {}
        };
        return a(b, b.exports),
        b.exports
    }
    function qa(a) {
        var b = -1
          , c = null == a ? 0 : a.length;
        for (this.clear(); ++b < c; ) {
            var e = a[b];
            this.set(e[0], e[1])
        }
    }
    function V(a) {
        var b = -1
          , c = null == a ? 0 : a.length;
        for (this.clear(); ++b < c; ) {
            var e = a[b];
            this.set(e[0], e[1])
        }
    }
    function ra(a) {
        var b = -1
          , c = null == a ? 0 : a.length;
        for (this.clear(); ++b < c; ) {
            var e = a[b];
            this.set(e[0], e[1])
        }
    }
    function sa(a) {
        this.size = (this.__data__ = new ta(a)).size
    }
    function gb(a) {
        var b = -1
          , c = null == a ? 0 : a.length;
        for (this.__data__ = new Fa; ++b < c; )
            this.add(a[b])
    }
    function Ga(a, b, c, e, d) {
        if (a === b)
            b = !0;
        else if (null == a || null == b || !W(a) && !W(b))
            b = a !== a && b !== b;
        else
            a: {
                var f = u(a)
                  , h = u(b)
                  , g = f ? "[object Array]" : Eb(a)
                  , k = h ? "[object Array]" : Eb(b);
                g = "[object Arguments]" == g ? "[object Object]" : g;
                k = "[object Arguments]" == k ? "[object Object]" : k;
                var p = "[object Object]" == g;
                h = "[object Object]" == k;
                if ((k = g == k) && hb(a)) {
                    if (!hb(b)) {
                        b = !1;
                        break a
                    }
                    f = !0;
                    p = !1
                }
                if (k && !p)
                    d || (d = new ua),
                    b = f || Fb(a) ? Sb(a, b, c, e, Ga, d) : md(a, b, g, c, e, Ga, d);
                else {
                    if (!(c & 1) && (f = p && hc.call(a, "__wrapped__"),
                    g = h && hc.call(b, "__wrapped__"),
                    f || g)) {
                        a = f ? a.value() : a;
                        b = g ? b.value() : b;
                        d || (d = new ua);
                        b = Ga(a, b, c, e, d);
                        break a
                    }
                    if (k)
                        b: if (d || (d = new ua),
                        f = c & 1,
                        g = ic(a, Ha, jc),
                        h = g.length,
                        k = ic(b, Ha, jc).length,
                        h == k || f) {
                            for (k = h; k--; ) {
                                var v = g[k];
                                if (!(f ? v in b : nd.call(b, v))) {
                                    b = !1;
                                    break b
                                }
                            }
                            p = d.get(a);
                            v = d.get(b);
                            if (p && v)
                                b = p == b && v == a;
                            else {
                                p = !0;
                                d.set(a, b);
                                d.set(b, a);
                                for (var K = f; ++k < h; ) {
                                    v = g[k];
                                    var n = a[v]
                                      , r = b[v];
                                    if (e)
                                        var y = f ? e(r, n, v, b, a, d) : e(n, r, v, a, b, d);
                                    if (void 0 === y ? n !== r && !Ga(n, r, c, e, d) : !y) {
                                        p = !1;
                                        break
                                    }
                                    K || (K = "constructor" == v)
                                }
                                p && !K && (c = a.constructor,
                                e = b.constructor,
                                c != e && "constructor"in a && "constructor"in b && !("function" == typeof c && c instanceof c && "function" == typeof e && e instanceof e) && (p = !1));
                                d["delete"](a);
                                d["delete"](b);
                                b = p
                            }
                        } else
                            b = !1;
                    else
                        b = !1
                }
            }
        return b
    }
    function Ia(a, b) {
        if ("function" != typeof a || null != b && "function" != typeof b)
            throw new TypeError("Expected a function");
        var c = function d() {
            var c = arguments
              , h = b ? b.apply(this, c) : c[0]
              , g = d.cache;
            if (g.has(h))
                return g.get(h);
            c = a.apply(this, c);
            d.cache = g.set(h, c) || g;
            return c
        };
        c.cache = new (Ia.Cache || Fa);
        return c
    }
    function kc(a) {
        if ("string" == typeof a)
            return a;
        if (u(a))
            return lc(a, kc) + "";
        if (Ja(a))
            return mc ? mc.call(a) : "";
        var b = a + "";
        return "0" == b && 1 / a == -od ? "-0" : b
    }
    function nc(a) {
        if (!oc(a)) {
            a = a.text || "";
            var b = Ka.getElementsByTagName("title");
            b && void 0 !== b[0] && (a = b[0].text)
        }
        return a
    }
    function Tb(a) {
        var b = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(a);
        return b ? b[1] : a
    }
    function cc(a) {
        var b = a.length;
        "." === a.charAt(--b) && (a = a.slice(0, b));
        "*." === a.slice(0, 2) && (a = a.slice(1));
        return a
    }
    function dc(a) {
        var b = ""
          , c = Gb("referrer", ca.location.href) || Gb("referer", ca.location.href);
        if (c)
            return c;
        if (a)
            return a;
        try {
            b = ca.top.document.referrer
        } catch (e) {
            if (ca.parent)
                try {
                    b = ca.parent.document.referrer
                } catch (d) {
                    b = ""
                }
        }
        "" === b && (b = Ka.referrer);
        return b
    }
    function q(a, b, c, e) {
        if (a.addEventListener)
            return a.addEventListener(b, c, e),
            !0;
        if (a.attachEvent)
            return a.attachEvent("on" + b, c);
        a["on" + b] = c
    }
    function Gb(a, b) {
        return (a = (new RegExp("^[^#]*[?&]" + a + "=([^&#]*)")).exec(b)) ? decodeURIComponent(a[1].replace(/\+/g, " ")) : null
    }
    function ib(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return pd(da(a, function(a) {
            if ("function" === typeof a)
                try {
                    return a.apply(null, b)
                } catch (e) {}
            else
                return a
        }))
    }
    function D(a) {
        "undefined" !== typeof console && console.warn("Snowplow: " + a)
    }
    function La(a) {
        return a.className.match(/\S+/g) || []
    }
    function jb(a, b) {
        if (Array.isArray(a) || !I(a))
            return function() {
                return !0
            }
            ;
        if (a.hasOwnProperty("filter"))
            return a.filter;
        var c = a.hasOwnProperty("whitelist");
        a = a.whitelist || a.blacklist;
        Array.isArray(a) || (a = [a]);
        for (var e = {}, d = 0; d < a.length; d++)
            e[a[d]] = !0;
        return b ? function(a) {
            a: {
                a = La(a);
                var b;
                for (b = 0; b < a.length; b++)
                    if (e[a[b]]) {
                        a = !0;
                        break a
                    }
                a = !1
            }
            return a === c
        }
        : function(a) {
            return a.name in e === c
        }
    }
    function qd(a) {
        return I(a) ? a.hasOwnProperty("transform") ? a.transform : function(a) {
            return a
        }
        : function(a) {
            return a
        }
    }
    function Ub(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 63072E3;
        try {
            var e = Date.now() + 1E3 * c;
            va.setItem("".concat(a, ".expires"), e);
            va.setItem(a, b);
            return !0
        } catch (d) {
            return !1
        }
    }
    function pc(a) {
        try {
            return va.removeItem(a),
            va.removeItem(a + ".expires"),
            !0
        } catch (b) {
            return !1
        }
    }
    function rd() {
        for (var a = "_sp_root_domain_test_" + (new Date).getTime(), b = "_test_value_" + (new Date).getTime(), c = ca.location.hostname.split("."), e = c.length - 1; 0 <= e; ) {
            var d = c.slice(e, c.length).join(".");
            z(a, b, 0, "/", d);
            if (z(a) === b) {
                z(a, "", -1, "/", d);
                a = Ka.cookie.split("; ");
                b = [];
                for (c = 0; c < a.length; c++)
                    "_sp_root_domain_test_" === a[c].substring(0, 21) && b.push(a[c]);
                a = b;
                for (b = 0; b < a.length; b++)
                    z(a[b], "", -1, "/", d);
                return d
            }
            --e
        }
        return ca.location.hostname
    }
    function qc(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c] === a)
                return !0;
        return !1
    }
    function z(a, b, c, e, d, f, h) {
        return 1 < arguments.length ? Ka.cookie = a + "=" + encodeURIComponent(b) + (c ? "; Expires=" + (new Date(+new Date + 1E3 * c)).toUTCString() : "") + (e ? "; Path=" + e : "") + (d ? "; Domain=" + d : "") + (f ? "; SameSite=" + f : "") + (h ? "; Secure" : "") : decodeURIComponent((("; " + Ka.cookie).split("; " + a + "=")[1] || "").split(";")[0])
    }
    function kb(a) {
        a = parseInt(a);
        return isNaN(a) ? void 0 : a
    }
    function Hb(a) {
        a = parseFloat(a);
        return isNaN(a) ? void 0 : a
    }
    function ea(a) {
        return a && "function" === typeof a ? !0 : !1
    }
    function sd(a, b, c, e, d) {
        function f(e, f, h) {
            h = h || {};
            g.hasOwnProperty(e) ? D("Tracker namespace " + e + " already exists.") : (g[e] = new a(d,e,b,c,h),
            g[e].setCollectorUrl(f))
        }
        function h() {
            var a;
            for (a = 0; a < arguments.length; a += 1) {
                var b = arguments[a];
                var c = Array.prototype.shift.call(b);
                if (ea(c))
                    try {
                        c.apply(g, b)
                    } catch (U) {
                        D("Custom callback error - ".concat(U))
                    } finally {
                        continue
                    }
                var d = c.split(":");
                c = d[0];
                d = 1 < d.length ? d[1].split(";") : [];
                d = [c, d];
                c = d[0];
                d = d[1];
                if ("newTracker" === c)
                    f(b[0], b[1], b[2]);
                else if ("setCollectorCf" !== c && "setCollectorUrl" !== c || d && 0 !== d.length) {
                    var e = [];
                    if (d && 0 !== d.length)
                        for (var h = 0; h < d.length; h++)
                            g.hasOwnProperty(d[h]) ? e.push(g[d[h]]) : D('Warning: Tracker namespace "' + d[h] + '" not configured');
                    else
                        e = da(g);
                    0 === e.length && D("Warning: No tracker configured");
                    for (d = 0; d < e.length; d++)
                        e[d][c].apply(e[d], b)
                } else
                    d = b[0],
                    b = b[1],
                    D(c + " is deprecated. Set the collector when a new tracker instance using newTracker."),
                    b = void 0 === b ? "sp" : b,
                    f(b),
                    g[b][c](d)
            }
        }
        for (var g = {}, k = 0; k < e.length; k++)
            h(e[k]);
        return {
            push: h
        }
    }
    function rc(a, b, c) {
        if ("translate.googleusercontent.com" === a)
            "" === c && (c = b),
            a = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(b),
            b = Gb("u", a[1]),
            a = Tb(b);
        else {
            var e;
            if (!(e = "cc.bingj.com" === a || "webcache.googleusercontent.com" === a))
                a: {
                    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(a))
                        try {
                            var d = document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML;
                            e = "You have reached the cached page for" === d.slice(0, 36);
                            break a
                        } catch (f) {
                            e = !1;
                            break a
                        }
                    e = void 0
                }
            e && (b = document.links[0].href,
            a = Tb(b))
        }
        return [a, b, c]
    }
    function td() {
        try {
            var a = !!wa.localStorage
        } catch (b) {
            a = !0
        }
        if (!a)
            return !1;
        try {
            return wa.localStorage.setItem("modernizr", "modernizr"),
            wa.localStorage.removeItem("modernizr"),
            !0
        } catch (b) {
            return !1
        }
    }
    function ud() {
        var a = wa
          , b = "inner";
        "innerWidth"in wa || (b = "client",
        a = lb.documentElement || lb.body);
        var c = a[b + "Width"];
        a = a[b + "Height"];
        return 0 <= c && 0 <= a ? c + "x" + a : null
    }
    function vd() {
        var a = lb.documentElement
          , b = lb.body
          , c = Math.max(a.clientWidth, a.offsetWidth, a.scrollWidth);
        a = Math.max(a.clientHeight, a.offsetHeight, a.scrollHeight, b ? Math.max(b.offsetHeight, b.scrollHeight) : 0);
        return isNaN(c) || isNaN(a) ? "" : c + "x" + a
    }
    function wd(a, b) {
        var c, e = {
            pdf: "application/pdf",
            qt: "video/quicktime",
            realp: "audio/x-pn-realaudio-plugin",
            wma: "application/x-mplayer2",
            dir: "application/x-director",
            fla: "application/x-shockwave-flash",
            java: "application/x-java-vm",
            gears: "application/x-googlegears",
            ag: "application/x-silverlight"
        }, d = {};
        if (P.mimeTypes && P.mimeTypes.length)
            for (c in e)
                if (Object.prototype.hasOwnProperty.call(e, c)) {
                    var f = P.mimeTypes[e[c]];
                    d[c] = f && f.enabledPlugin ? "1" : "0"
                }
        P.constructor === window.Navigator && "unknown" !== typeof P.javaEnabled && void 0 !== P.javaEnabled && P.javaEnabled() && (d.java = "1");
        ea(wa.GearsFactory) && (d.gears = "1");
        d.res = Ma.width + "x" + Ma.height;
        d.cd = Ma.colorDepth;
        a && (a = b || "testcookie",
        void 0 === P.cookieEnabled ? (z(a, "1"),
        a = "1" === z(a) ? "1" : "0") : a = P.cookieEnabled ? "1" : "0",
        d.cookie = a);
        return d
    }
    function xd(a, b, c) {
        function e(b, d) {
            for (var e, f, h, k; null !== (e = b.parentNode) && void 0 !== e && "A" !== (f = b.tagName.toUpperCase()) && "AREA" !== f; )
                b = e;
            if (void 0 !== b.href) {
                e = b.hostname || Tb(b.href);
                f = e.toLowerCase();
                var p = b.href.replace(e, f);
                /^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(p) || (e = b.id,
                f = La(b),
                h = b.target,
                k = g ? b.innerHTML : null,
                p = unescape(p),
                a.trackLinkClick(p, e, f, h, k, c(ib(d, b))))
            }
        }
        function d(a) {
            return function(b) {
                b = b || window.event;
                var c = b.which || b.button;
                var d = b.target || b.srcElement;
                "click" === b.type ? d && e(d, a) : "mousedown" === b.type ? 1 !== c && 2 !== c || !d ? p = v = null : (p = c,
                v = d) : "mouseup" === b.type && (c === p && d === v && e(d, a),
                p = v = null)
            }
        }
        var f, h, g, k, p, v;
        return {
            configureLinkClickTracking: function(a, b, c, d) {
                g = c;
                k = d;
                h = b;
                f = jb(a, !0)
            },
            addClickListeners: function() {
                var a = document.links, c;
                for (c = 0; c < a.length; c++)
                    if (f(a[c]) && !a[c][b]) {
                        var e = a[c];
                        h ? (q(e, "mouseup", d(k), !1),
                        q(e, "mousedown", d(k), !1)) : q(e, "click", d(k), !1);
                        a[c][b] = !0
                    }
            }
        }
    }
    function yd(a, b, c) {
        function e(a) {
            return a[zd(["name", "id", "type", "nodeName"], function(b) {
                return a[b] && "string" === typeof a[b]
            })]
        }
        function d(a) {
            for (; a && a.nodeName && "HTML" !== a.nodeName.toUpperCase() && "FORM" !== a.nodeName.toUpperCase(); )
                a = a.parentNode;
            if (a && a.nodeName && "FORM" === a.nodeName.toUpperCase())
                return e(a)
        }
        function f(a) {
            var b = [];
            M(k, function(c) {
                c = Array.prototype.filter.call(a.getElementsByTagName(c), function(a) {
                    return a.hasOwnProperty(p)
                });
                M(c, function(a) {
                    if ("submit" !== a.type) {
                        var c = {
                            name: e(a),
                            value: a.value,
                            nodeName: a.nodeName
                        };
                        a.type && "INPUT" === a.nodeName.toUpperCase() && (c.type = a.type);
                        "checkbox" !== a.type && "radio" !== a.type || a.checked || (c.value = null);
                        b.push(c)
                    }
                })
            });
            return b
        }
        function h(b, f) {
            return function(g) {
                g = g.target;
                var h = g.nodeName && "INPUT" === g.nodeName.toUpperCase() ? g.type : null
                  , k = "checkbox" !== g.type || g.checked ? n(g.value, g) : null;
                ("change_form" === b || "checkbox" !== h && "radio" !== h) && a.trackFormFocusOrChange(b, d(g), e(g), g.nodeName, h, La(g), k, c(ib(f, g, h, k)))
            }
        }
        function g(b) {
            return function(d) {
                d = d.target;
                var g = f(d);
                M(g, function(a) {
                    a.value = n(a.value, a)
                });
                a.trackFormSubmission(e(d), La(d), g, c(ib(b, d, g)))
            }
        }
        var k = ["textarea", "input", "select"]
          , p = b + "form"
          , v = function() {
            return !0
        }
          , K = function() {
            return !0
        }
          , n = function(a) {
            return a
        };
        return {
            configureFormTracking: function(a) {
                a && (v = jb(a.forms, !0),
                K = jb(a.fields, !1),
                n = qd(a.fields))
            },
            addFormListeners: function(a) {
                M(document.getElementsByTagName("form"), function(b) {
                    v(b) && !b[p] && (M(k, function(c) {
                        M(b.getElementsByTagName(c), function(b) {
                            K(b) && !b[p] && "password" !== b.type.toLowerCase() && (q(b, "focus", h("focus_form", a), !1),
                            q(b, "change", h("change_form", a), !1),
                            b[p] = !0)
                        })
                    }),
                    q(b, "submit", g(a)),
                    b[p] = !0)
                })
            }
        }
    }
    function Ad(a) {
        function b(b, e, d, f, h, g) {
            a.trackSelfDescribingEvent({
                schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                data: {
                    programmingLanguage: "JAVASCRIPT",
                    message: b || "JS Exception. Browser doesn't support ErrorEvent API",
                    stackTrace: h && h.stack ? h.stack : null,
                    lineNumber: d,
                    lineColumn: f,
                    fileName: e
                }
            }, g)
        }
        return {
            trackError: b,
            enableErrorTracking: function(a, e, d) {
                q(Bd, "error", function(c) {
                    if (ea(a) && a(c) || null == a) {
                        var f = ea(e) ? d.concat(e(c)) : d;
                        b(c.message, c.filename, c.lineno, c.colno, c.error, f)
                    }
                }, !0)
            }
        }
    }
    function Cd(a, b, c, e, d, f, h, g, k, p, v, K) {
        function n(a) {
            var b = "?", c = {
                co: !0,
                cx: !0
            }, d = !0, e;
            for (e in a)
                a.hasOwnProperty(e) && !c.hasOwnProperty(e) && (d ? d = !1 : b += "&",
                b += encodeURIComponent(e) + "=" + encodeURIComponent(a[e]));
            for (var g in c)
                a.hasOwnProperty(g) && c.hasOwnProperty(g) && (b += "&" + g + "=" + encodeURIComponent(a[g]));
            return b
        }
        function r(a) {
            a = Dd(a, function(a) {
                return a.toString()
            });
            return {
                evt: a,
                bytes: y(JSON.stringify(a))
            }
        }
        function y(a) {
            for (var b = 0, c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                127 >= d ? b += 1 : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
                c++) : b = 65535 > d ? b + 3 : b + 4
            }
            return b
        }
        function U() {
            for (; F.length && "string" !== typeof F[0] && "object" !== H(F[0]); )
                F.shift();
            if (1 > F.length)
                q = !1;
            else {
                if (!oc(u))
                    throw "No collector configured";
                q = !0;
                var a = F[0];
                if (N) {
                    var b = function(a) {
                        for (var b = 0, c = 0; b < a.length && !(c += a[b].bytes,
                        c >= g); )
                            b += 1;
                        return b
                    }
                      , c = function(a) {
                        for (var b = 0; b < a; b++)
                            F.shift();
                        e && Ub(Q, JSON.stringify(F.slice(0, p)));
                        U()
                    };
                    if (x) {
                        a = tc(a);
                        var d = m(a, !1);
                        var f = 1
                    } else
                        a = u,
                        d = m(a, !0),
                        f = b(F);
                    var h = setTimeout(function() {
                        d.abort();
                        q = !1
                    }, v);
                    d.onreadystatechange = function() {
                        if (4 === d.readyState && 200 <= d.status && 400 > d.status) {
                            clearTimeout(h);
                            if (E && !z)
                                try {
                                    uc.setItem(O, !0)
                                } catch (sc) {}
                            c(f)
                        } else
                            4 === d.readyState && 400 <= d.status && (clearTimeout(h),
                            q = !1)
                    }
                    ;
                    if (x)
                        d.send();
                    else if (b = F.slice(0, f),
                    0 < b.length) {
                        var k;
                        if (!(k = z) && (k = E))
                            try {
                                k = uc.getItem(O)
                            } catch (sc) {
                                k = void 0
                            }
                        z = k;
                        b = da(b, function(a) {
                            return a.evt
                        });
                        if (z) {
                            K && (header["SP-Anonymous"] = "*");
                            k = new Blob([Ib(w(b))],{
                                type: "application/json"
                            });
                            try {
                                var n = navigator.sendBeacon(a, k)
                            } catch (sc) {
                                n = !1
                            }
                        }
                        !0 === n && c(f);
                        E && n || d.send(Ib(w(b)))
                    }
                } else if (K)
                    q = !1;
                else {
                    n = new Image(1,1);
                    var r = !0;
                    n.onload = function() {
                        r && (r = !1,
                        F.shift(),
                        e && Ub(Q, JSON.stringify(F.slice(0, p))),
                        U())
                    }
                    ;
                    n.onerror = function() {
                        r && (q = r = !1)
                    }
                    ;
                    n.src = tc(a);
                    setTimeout(function() {
                        r && q && (r = !1,
                        U())
                    }, v)
                }
            }
        }
        function m(a, b) {
            var c = new XMLHttpRequest;
            b ? (c.open("POST", a, !0),
            c.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : c.open("GET", a, !0);
            c.withCredentials = !0;
            K && c.setRequestHeader("SP-Anonymous", "*");
            return c
        }
        function Ib(a) {
            return JSON.stringify({
                schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                data: a
            })
        }
        function w(a) {
            for (var b = (new Date).getTime().toString(), c = 0; c < a.length; c++)
                a[c].stm = b;
            return a
        }
        function tc(a) {
            return k ? u + a.replace("?", "?stm=" + (new Date).getTime() + "&") : u + a
        }
        var C = window.localStorage, q = !1, u, z;
        d = d.toLowerCase ? d.toLowerCase() : d;
        var M = null === d || !0 === d || "beacon" === d || "true" === d
          , E = !!(M && navigator && navigator.sendBeacon) && M
          , x = "get" === d
          , N = !!(window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest)
          , I = !x && N && ("post" === d || M)
          , P = I ? f : "/i";
        h = td() && e && I && h || 1;
        var Q = "snowplowOutQueue_".concat(a, "_").concat(b, "_").concat(I ? "post2" : "get");
        var O = "spBeaconPreflight_".concat(a, "_").concat(b);
        if (e)
            try {
                var F = JSON.parse(C.getItem(Q))
            } catch (af) {}
        Array.isArray(F) || (F = []);
        c.outQueues.push(F);
        N && 1 < h && c.bufferFlushers.push(function() {
            q || U()
        });
        return {
            enqueueRequest: function(a, b) {
                u = b + P;
                if (I) {
                    a = r(a);
                    if (a.bytes >= g) {
                        D("Event (" + a.bytes + "B) too big, max is " + g);
                        m(u, !0).send(Ib(w([a.evt])));
                        return
                    }
                    F.push(a)
                } else
                    F.push(n(a));
                a = !1;
                e && (a = Ub(Q, JSON.stringify(F.slice(0, p))));
                q || a && !(F.length >= h) || U()
            },
            executeQueue: function() {
                q || U()
            },
            setUseLocalStorage: function(a) {
                e = a
            },
            setAnonymousTracking: function(a) {
                K = a
            }
        }
    }
    function Ed(a) {
        var b = {};
        "object" === H(a) && null !== a && Object.getOwnPropertyNames(a).forEach(function(c, e, d) {
            "function" === typeof a[c] && (b[c] = Fd(a[c]))
        });
        return b
    }
    function Gd(a) {
        if (!a)
            return a;
        switch (4 - a.length % 4) {
        case 2:
            a += "==";
            break;
        case 3:
            a += "="
        }
        a = a.replace(/-/g, "+").replace(/_/g, "/");
        return Hd(a)
    }
    function Hd(a) {
        var b = 0
          , c = 0;
        var e = "";
        var d = [];
        if (!a)
            return a;
        a += "";
        do {
            var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(b++));
            var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(b++));
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(b++));
            var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(b++));
            var k = f << 18 | h << 12 | e << 6 | g;
            f = k >> 16 & 255;
            h = k >> 8 & 255;
            k &= 255;
            64 === e ? d[c++] = String.fromCharCode(f) : 64 === g ? d[c++] = String.fromCharCode(f, h) : d[c++] = String.fromCharCode(f, h, k)
        } while (b < a.length);
        e = d.join("");
        return function(a) {
            return decodeURIComponent(a.split("").map(function(a) {
                return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)
            }).join(""))
        }(e.replace(/\0+$/, ""))
    }
    function Jb(a) {
        if (!vc(a))
            return !1;
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b))
                return !0;
        return !1
    }
    function vc(a) {
        return "undefined" !== typeof a && null !== a && (a.constructor === {}.constructor || a.constructor === [].constructor)
    }
    function xa(a) {
        var b = {}
          , c = function(a, c) {
            null != c && "" !== c && (b[a] = c)
        };
        return {
            add: c,
            addDict: function(a) {
                for (var b in a)
                    Object.prototype.hasOwnProperty.call(a, b) && c(b, a[b])
            },
            addJson: function(b, d, f) {
                if (f && Jb(f))
                    if (f = JSON.stringify(f),
                    a) {
                        if (f) {
                            d = f;
                            var e = f = 0
                              , g = [];
                            if (d) {
                                d = unescape(encodeURIComponent(d));
                                do {
                                    var k = d.charCodeAt(f++);
                                    var p = d.charCodeAt(f++);
                                    var v = d.charCodeAt(f++);
                                    var K = k << 16 | p << 8 | v;
                                    k = K >> 18 & 63;
                                    p = K >> 12 & 63;
                                    v = K >> 6 & 63;
                                    K &= 63;
                                    g[e++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(v) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(K)
                                } while (f < d.length);
                                f = g.join("");
                                d = d.length % 3;
                                d = (d ? f.slice(0, d - 3) : f) + "===".slice(d || 3)
                            }
                            d = d.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                        } else
                            d = f;
                        c(b, d)
                    } else
                        c(d, f)
            },
            build: function() {
                return b
            }
        }
    }
    function Id() {
        var a = []
          , b = [];
        return {
            getGlobalPrimitives: function() {
                return a
            },
            getConditionalProviders: function() {
                return b
            },
            addGlobalContexts: function(c) {
                var e = []
                  , d = [];
                c = Db(c);
                var f;
                try {
                    for (c.s(); !(f = c.n()).done; ) {
                        var h = f.value;
                        wc(h) ? e.push(h) : ya(h) && d.push(h)
                    }
                } catch (g) {
                    c.e(g)
                } finally {
                    c.f()
                }
                a = a.concat(d);
                b = b.concat(e)
            },
            clearGlobalContexts: function() {
                b = [];
                a = []
            },
            removeGlobalContexts: function(c) {
                c = Db(c);
                var e;
                try {
                    var d = function() {
                        var c = e.value;
                        wc(c) ? b = b.filter(function(a) {
                            return !za(a, c)
                        }) : ya(c) && (a = a.filter(function(a) {
                            return !za(a, c)
                        }))
                    };
                    for (c.s(); !(e = c.n()).done; )
                        d()
                } catch (f) {
                    c.e(f)
                } finally {
                    c.f()
                }
            },
            getApplicableContexts: function(c) {
                c = c.build();
                var e = Jb(c) && "e"in c ? "string" === typeof c.e : !1;
                if (e) {
                    c = ld({}, c);
                    try {
                        null != c && mb(c, "ue_px", nb) && (c.ue_px = JSON.parse(Gd(E(c, ["ue_px"]))));
                        var d = c
                    } catch (g) {
                        d = c
                    }
                    c = d;
                    e = "string" === typeof E(c, "ue_px.data.schema") ? E(c, "ue_px.data.schema") : "string" === typeof E(c, "ue_pr.data.schema") ? E(c, "ue_pr.data.schema") : "string" === typeof E(c, "schema") ? E(c, "schema") : "";
                    var f = E(c, "e", "");
                    d = [];
                    var h = Kb(a, c, f, e);
                    d.push.apply(d, oa(h));
                    c = Jd(b, c, f, e);
                    d.push.apply(d, oa(c));
                    return d
                }
                return []
            }
        }
    }
    function Kd(a) {
        if ("*" === a[0] || "*" === a[1])
            return !1;
        if (0 < a.slice(2).length) {
            var b = !1;
            a = Db(a.slice(2));
            var c;
            try {
                for (a.s(); !(c = a.n()).done; )
                    if ("*" === c.value)
                        b = !0;
                    else if (b)
                        return !1
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
            return !0
        }
        return 2 == a.length ? !0 : !1
    }
    function xc(a) {
        return (a = a.split(".")) && 1 < a.length ? Kd(a) : !1
    }
    function yc(a) {
        a = /^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(a);
        if (null !== a && xc(a[1]))
            return a.slice(1, 6)
    }
    function ob(a) {
        if (a = yc(a)) {
            var b = a[0];
            return 5 === a.length && xc(b)
        }
        return !1
    }
    function Ld(a) {
        return Array.isArray(a) && a.every(function(a) {
            return "string" === typeof a
        })
    }
    function zc(a) {
        return Ld(a) ? a.every(function(a) {
            return ob(a)
        }) : "string" === typeof a ? ob(a) : !1
    }
    function Aa(a) {
        return Jb(a) && "schema"in a && "data"in a ? "string" === typeof a.schema && "object" === H(a.data) : !1
    }
    function Md(a) {
        var b = 0;
        if (W(a) && "[object Object]" == R(a)) {
            var c = Nd(a);
            null === c ? c = !0 : (c = Od.call(c, "constructor") && c.constructor,
            c = "function" == typeof c && c instanceof c && Ac.call(c) == Pd)
        } else
            c = !1;
        if (c) {
            if (null != a && mb(a, "accept", nb))
                if (zc(a.accept))
                    b += 1;
                else
                    return !1;
            if (null != a && mb(a, "reject", nb))
                if (zc(a.reject))
                    b += 1;
                else
                    return !1;
            return 0 < b && 2 >= b
        }
        return !1
    }
    function Bc(a) {
        return "function" === typeof a && 1 >= a.length
    }
    function ya(a) {
        return "function" === typeof a && 1 >= a.length || Aa(a)
    }
    function Cc(a) {
        return Array.isArray(a) && 2 === a.length ? Array.isArray(a[1]) ? Bc(a[0]) && Na(a[1], ya) : Bc(a[0]) && ya(a[1]) : !1
    }
    function Dc(a) {
        return Array.isArray(a) && 2 === a.length ? Md(a[0]) ? Array.isArray(a[1]) ? Na(a[1], ya) : ya(a[1]) : !1 : !1
    }
    function wc(a) {
        return Cc(a) || Dc(a)
    }
    function Qd(a, b) {
        var c = 0
          , e = 0
          , d = E(a, "accept");
        Array.isArray(d) ? a.accept.some(function(a) {
            return pb(a, b)
        }) && e++ : "string" === typeof d && pb(d, b) && e++;
        d = E(a, "reject");
        Array.isArray(d) ? a.reject.some(function(a) {
            return pb(a, b)
        }) && c++ : "string" === typeof d && pb(d, b) && c++;
        return 0 < e && 0 === c ? !0 : !1
    }
    function pb(a, b) {
        if (!ob(a))
            return !1;
        a = yc(a);
        b = /^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(b);
        b = null !== b ? b.slice(1, 6) : void 0;
        if (a && b) {
            if (!Rd(a[0], b[0]))
                return !1;
            for (var c = 1; 5 > c; c++)
                if (!Ec(a[c], b[c]))
                    return !1;
            return !0
        }
        return !1
    }
    function Rd(a, b) {
        b = b.split(".");
        a = a.split(".");
        if (b && a) {
            if (b.length !== a.length)
                return !1;
            for (var c = 0; c < a.length; c++)
                if (!Ec(b[c], a[c]))
                    return !1;
            return !0
        }
        return !1
    }
    function Ec(a, b) {
        return a && b && "*" === a || a === b
    }
    function Fc(a) {
        return Array.isArray(a) ? a : [a]
    }
    function Kb(a, b, c, e) {
        var d;
        a = Fc(a);
        a = da(a, function(a) {
            a: if (Aa(a))
                a = [a];
            else {
                if ("function" === typeof a && 1 >= a.length) {
                    b: {
                        var d = void 0;
                        try {
                            d = a({
                                event: b,
                                eventType: c,
                                eventSchema: e
                            });
                            if (Aa(d) || Array.isArray(d) && Na(d, Aa)) {
                                var g = d;
                                break b
                            }
                            g = void 0;
                            break b
                        } catch (k) {}
                        g = void 0
                    }
                    if (Aa(g)) {
                        a = [g];
                        break a
                    } else if (Array.isArray(g)) {
                        a = g;
                        break a
                    }
                }
                a = void 0
            }
            if (a && 0 !== a.length)
                return a
        });
        return (d = []).concat.apply(d, oa(Gc(a)))
    }
    function Jd(a, b, c, e) {
        var d;
        a = Fc(a);
        a = da(a, function(a) {
            a: {
                if (Cc(a)) {
                    var d = a[0]
                      , g = !1;
                    try {
                        g = d({
                            event: b,
                            eventType: c,
                            eventSchema: e
                        })
                    } catch (k) {
                        g = !1
                    }
                    if (!0 === g) {
                        a = Kb(a[1], b, c, e);
                        break a
                    }
                } else if (Dc(a) && Qd(a[0], e)) {
                    a = Kb(a[1], b, c, e);
                    break a
                }
                a = []
            }
            if (a && 0 !== a.length)
                return a
        });
        return (d = []).concat.apply(d, oa(Gc(a)))
    }
    function Sd(a, b) {
        var c = Id()
          , e = {};
        "undefined" === typeof a && (a = !0);
        var d = function(a, b) {
            var c = {};
            b = b || {};
            for (var d in a)
                if (b[d] || null !== a[d] && "undefined" !== typeof a[d])
                    c[d] = a[d];
            return c
        }
          , f = function(a, d, f, h) {
            a.addDict(e);
            a.add("eid", Td.v4());
            f = null == f ? {
                type: "dtm",
                value: (new Date).getTime()
            } : "number" === typeof f ? {
                type: "dtm",
                value: f
            } : "ttm" === f.type ? {
                type: "ttm",
                value: f.value
            } : {
                type: "dtm",
                value: f.value || (new Date).getTime()
            };
            a.add(f.type, f.value.toString());
            f = c.getApplicableContexts(a);
            var g = [];
            d && d.length && g.push.apply(g, oa(d));
            f && f.length && g.push.apply(g, oa(f));
            d = g && g.length ? {
                schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                data: g
            } : void 0;
            void 0 !== d && a.addJson("cx", "co", d);
            "function" === typeof b && b(a);
            try {
                h && h(a.build())
            } catch (n) {
                console.warn("Snowplow: error running custom callback")
            }
            return a
        }
          , h = function(b, c, d, e) {
            var g = xa(a);
            b = {
                schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                data: b
            };
            g.add("e", "ue");
            g.addJson("ue_px", "ue_pr", b);
            return f(g, c, d, e)
        };
        return {
            addPayloadPair: function(a, b) {
                e[a] = b
            },
            setBase64Encoding: function(b) {
                a = b
            },
            addPayloadDict: function(a) {
                for (var b in a)
                    Object.prototype.hasOwnProperty.call(a, b) && (e[b] = a[b])
            },
            resetPayloadPairs: function(a) {
                e = vc(a) ? a : {}
            },
            setTrackerVersion: function(a) {
                e.tv = a
            },
            setTrackerNamespace: function(a) {
                e.tna = a
            },
            setAppId: function(a) {
                e.aid = a
            },
            setPlatform: function(a) {
                e.p = a
            },
            setUserId: function(a) {
                e.uid = a
            },
            setScreenResolution: function(a, b) {
                e.res = a + "x" + b
            },
            setViewport: function(a, b) {
                e.vp = a + "x" + b
            },
            setColorDepth: function(a) {
                e.cd = a
            },
            setTimezone: function(a) {
                e.tz = a
            },
            setLang: function(a) {
                e.lang = a
            },
            setIpAddress: function(a) {
                e.ip = a
            },
            setUseragent: function(a) {
                e.ua = a
            },
            trackUnstructEvent: h,
            trackSelfDescribingEvent: h,
            trackPageView: function(b, c, d, e, h, n) {
                var g = xa(a);
                g.add("e", "pv");
                g.add("url", b);
                g.add("page", c);
                g.add("refr", d);
                return f(g, e, h, n)
            },
            trackPagePing: function(b, c, d, e, h, n, r, y, U, m) {
                var g = xa(a);
                g.add("e", "pp");
                g.add("url", b);
                g.add("page", c);
                g.add("refr", d);
                g.add("pp_mix", e.toString());
                g.add("pp_max", h.toString());
                g.add("pp_miy", n.toString());
                g.add("pp_may", r.toString());
                return f(g, y, U, m)
            },
            trackStructEvent: function(b, c, d, e, h, n, r, y) {
                var g = xa(a);
                g.add("e", "se");
                g.add("se_ca", b);
                g.add("se_ac", c);
                g.add("se_la", d);
                g.add("se_pr", e);
                g.add("se_va", null == h ? void 0 : h.toString());
                return f(g, n, r, y)
            },
            trackEcommerceTransaction: function(b, c, d, e, h, n, r, y, U, m, Ib, w) {
                var g = xa(a);
                g.add("e", "tr");
                g.add("tr_id", b);
                g.add("tr_af", c);
                g.add("tr_tt", d);
                g.add("tr_tx", e);
                g.add("tr_sh", h);
                g.add("tr_ci", n);
                g.add("tr_st", r);
                g.add("tr_co", y);
                g.add("tr_cu", U);
                return f(g, m, Ib, w)
            },
            trackEcommerceTransactionItem: function(b, c, d, e, h, n, r, y, m, q) {
                var g = xa(a);
                g.add("e", "ti");
                g.add("ti_id", b);
                g.add("ti_sk", c);
                g.add("ti_nm", d);
                g.add("ti_ca", e);
                g.add("ti_pr", h);
                g.add("ti_qu", n);
                g.add("ti_cu", r);
                return f(g, y, m, q)
            },
            trackScreenView: function(a, b, c, e, f) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                    data: d({
                        name: a,
                        id: b
                    })
                }, c, e, f)
            },
            trackLinkClick: function(a, b, c, e, f, n, r, y) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                    data: d({
                        targetUrl: a,
                        elementId: b,
                        elementClasses: c,
                        elementTarget: e,
                        elementContent: f
                    })
                };
                return h(a, n, r, y)
            },
            trackAdImpression: function(a, b, c, e, f, n, r, y, m, q, u) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                    data: d({
                        impressionId: a,
                        costModel: b,
                        cost: c,
                        targetUrl: e,
                        bannerId: f,
                        zoneId: n,
                        advertiserId: r,
                        campaignId: y
                    })
                };
                return h(a, m, q, u)
            },
            trackAdClick: function(a, b, c, e, f, n, r, y, m, q, u, w) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                    data: d({
                        targetUrl: a,
                        clickId: b,
                        costModel: c,
                        cost: e,
                        bannerId: f,
                        zoneId: n,
                        impressionId: r,
                        advertiserId: y,
                        campaignId: m
                    })
                };
                return h(a, q, u, w)
            },
            trackAdConversion: function(a, b, c, e, f, n, r, y, m, q, u, w) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                    data: d({
                        conversionId: a,
                        costModel: b,
                        cost: c,
                        category: e,
                        action: f,
                        property: n,
                        initialValue: r,
                        advertiserId: y,
                        campaignId: m
                    })
                };
                return h(a, q, u, w)
            },
            trackSocialInteraction: function(a, b, c, e, f, n) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                    data: d({
                        action: a,
                        network: b,
                        target: c
                    })
                };
                return h(a, e, f, n)
            },
            trackAddToCart: function(a, b, c, e, f, n, r, m, q) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                    data: d({
                        sku: a,
                        name: b,
                        category: c,
                        unitPrice: e,
                        quantity: f,
                        currency: n
                    })
                }, r, m, q)
            },
            trackRemoveFromCart: function(a, b, c, e, f, n, r, m, q) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                    data: d({
                        sku: a,
                        name: b,
                        category: c,
                        unitPrice: e,
                        quantity: f,
                        currency: n
                    })
                }, r, m, q)
            },
            trackFormFocusOrChange: function(a, b, c, e, f, n, r, m, q, u) {
                var g = "";
                b = {
                    formId: b,
                    elementId: c,
                    nodeName: e,
                    elementClasses: n,
                    value: r
                };
                "change_form" === a ? (g = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0",
                b.type = f) : "focus_form" === a && (g = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0",
                b.elementType = f);
                return h({
                    schema: g,
                    data: d(b, {
                        value: !0
                    })
                }, m, q, u)
            },
            trackFormSubmission: function(a, b, c, e, f, n) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                    data: d({
                        formId: a,
                        formClasses: b,
                        elements: c
                    })
                }, e, f, n)
            },
            trackSiteSearch: function(a, b, c, e, f, n, r) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                    data: d({
                        terms: a,
                        filters: b,
                        totalResults: c,
                        pageResults: e
                    })
                }, f, n, r)
            },
            trackConsentWithdrawn: function(a, b, c, e, f, n, r, m) {
                b = {
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                    data: d({
                        id: b,
                        version: c,
                        name: e,
                        description: f
                    })
                };
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                    data: d({
                        all: a
                    })
                }, b.data && n ? n.concat([b]) : n, r, m)
            },
            trackConsentGranted: function(a, b, c, e, f, n, r, m) {
                a = {
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                    data: d({
                        id: a,
                        version: b,
                        name: c,
                        description: e
                    })
                };
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                    data: d({
                        expiry: f
                    })
                }, n ? n.concat([a]) : [a], r, m)
            },
            addGlobalContexts: function(a) {
                c.addGlobalContexts(a)
            },
            clearGlobalContexts: function() {
                c.clearGlobalContexts()
            },
            removeGlobalContexts: function(a) {
                c.removeGlobalContexts(a)
            }
        }
    }
    function qb(a, b, c, e, d) {
        function f(a) {
            return -1 < Sb.map(function(a) {
                return a.toLowerCase()
            }).indexOf(a.toLowerCase())
        }
        function h() {
            Oa = rc(A.domain, B.location.href, dc());
            Oa[1] !== Ba && (Lb = dc(Ba));
            La = cc(Oa[0]);
            Ba = Oa[1]
        }
        function g() {
            var a = (new Date).getTime();
            if (this.href) {
                a = "_sp=" + (Mb + "." + a);
                var b = this.href.split("#")
                  , c = b[0].split("?")
                  , d = c.shift();
                if (c = c.join("?")) {
                    for (var e = !0, f = c.split("&"), g = 0; g < f.length; g++)
                        if ("_sp=" === f[g].substr(0, 4)) {
                            e = !1;
                            f[g] = a;
                            c = f.join("&");
                            break
                        }
                    e && (c = a + "&" + c)
                } else
                    c = a;
                b[0] = d + "?" + c;
                this.href = b.join("#")
            }
        }
        function k(a) {
            for (var b = 0; b < A.links.length; b++) {
                var c = A.links[b];
                !c.spDecorationEnabled && a(c) && (q(c, "click", g, !0),
                q(c, "mousedown", g, !0),
                c.spDecorationEnabled = !0)
            }
        }
        function p(a) {
            if (Sa) {
                var b = /#.*/;
                a = a.replace(b, "")
            }
            Ua && (b = /[{}]/g,
            a = a.replace(b, ""));
            return a
        }
        function v(a) {
            return (a = /^([a-z]+):/.exec(a)) ? a[1] : null
        }
        function m(a) {
            return Va + a + "." + zb
        }
        function n(a) {
            a = m(a);
            if ("localStorage" == G) {
                a: {
                    try {
                        var b = va.getItem(a + ".expires");
                        if (null === b || +b > Date.now()) {
                            var c = va.getItem(a);
                            break a
                        } else
                            va.removeItem(a),
                            va.removeItem(a + ".expires");
                        c = void 0;
                        break a
                    } catch (bf) {}
                    c = void 0
                }
                return c
            }
            if ("cookie" == G || "cookieAndLocalStorage" == G)
                return z(a)
        }
        function r() {
            h();
            zb = Rb((ma || La) + (Ea || "/")).slice(0, 4)
        }
        function y() {
            Vb = (new Date).getTime()
        }
        function u() {
            var a = C()
              , b = a[0];
            b < Wb ? Wb = b : b > Xb && (Xb = b);
            a = a[1];
            a < Yb ? Yb = a : a > Zb && (Zb = a);
            y()
        }
        function C() {
            var a = A.compatMode && "BackCompat" !== A.compatMode ? A.documentElement : A.body;
            return [a.scrollLeft || B.pageXOffset, a.scrollTop || B.pageYOffset]
        }
        function H() {
            var a = C()
              , b = a[0];
            Xb = Wb = b;
            Zb = Yb = a = a[1]
        }
        function w(a) {
            a = Math.round(a);
            if (!isNaN(a))
                return a
        }
        function E() {
            var a = m("ses");
            O(a, "*", Ma)
        }
        function I(a, b, c, d, e, f) {
            var ec = m("id");
            O(ec, a + "." + b + "." + c + "." + d + "." + e + "." + f, jb)
        }
        function O(a, b, c) {
            if (!fa || Pa)
                "localStorage" == G ? Ub(a, b, c) : ("cookie" == G || "cookieAndLocalStorage" == G) && z(a, b, c, Ea, ma, Bb, Db)
        }
        function P() {
            var a = m("id")
              , b = m("ses");
            pc(a);
            pc(b);
            z(a, "", -1, "/", void 0);
            z(b, "", -1, "/", void 0)
        }
        function W() {
            if (!fa || Pa) {
                var a = "none" != G && !!n("ses")
                  , b = R();
                b[1] ? Mb = b[1] : (Mb = fa ? "" : N(),
                b[1] = Mb);
                T = b[6];
                a || (b[3]++,
                T = N(),
                b[6] = T,
                b[5] = b[4]);
                "none" != G && (E(),
                b[4] = Math.round((new Date).getTime() / 1E3),
                b.shift(),
                I.apply(null, b))
            }
        }
        function R() {
            if ("none" == G)
                return [];
            var a = Math.round((new Date).getTime() / 1E3)
              , b = n("id");
            b ? (a = b.split("."),
            a.unshift("0")) : a = ["1", Mb, a, 0, a, ""];
            a[6] || (a[6] = N());
            return a
        }
        function Y(a) {
            return nb ? "https://" + a : Kb ? "http://" + a : ("https:" === A.location.protocol ? "https" : "http") + "://" + a
        }
        function x(a) {
            var b = fc.concat(a || []);
            J.webPage && b.push({
                schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                data: {
                    id: V()
                }
            });
            J.performanceTiming && (a = ca()) && b.push(a);
            if (B.optimizely) {
                J.optimizelySummary && (a = wa(),
                M(a, function(a) {
                    b.push(a)
                }));
                J.optimizelyXSummary && (a = xa(),
                M(a, function(a) {
                    b.push(a)
                }));
                if (J.optimizelyExperiments) {
                    var c = la();
                    for (a = 0; a < c.length; a++)
                        b.push(c[a])
                }
                if (J.optimizelyStates)
                    for (c = oa(),
                    a = 0; a < c.length; a++)
                        b.push(c[a]);
                if (J.optimizelyVariations)
                    for (c = pa(),
                    a = 0; a < c.length; a++)
                        b.push(c[a]);
                J.optimizelyVisitor && (a = qa()) && b.push(a);
                if (J.optimizelyAudiences)
                    for (c = ra(),
                    a = 0; a < c.length; a++)
                        b.push(c[a]);
                if (J.optimizelyDimensions)
                    for (c = sa(),
                    a = 0; a < c.length; a++)
                        b.push(c[a])
            }
            J.parrable && (a = ya()) && b.push(a);
            J.gdprBasis && Qa.gdprBasis && (a = Qa.gdprBasis ? {
                schema: "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
                data: {
                    basisForProcessing: Qa.gdprBasis,
                    documentId: Qa.gdprDocId || null,
                    documentVersion: Qa.gdprDocVer || null,
                    documentDescription: Qa.gdprDocDesc || null
                }
            } : void 0,
            a && b.push(a));
            J.clientHints && Ca && b.push({
                schema: "iglu:org.ietf/http_client_hints/jsonschema/1-0-0",
                data: Ca
            });
            return b
        }
        function Z() {
            Eb && null != e.pageViewId || (e.pageViewId = N())
        }
        function V() {
            null == e.pageViewId && (e.pageViewId = N());
            return e.pageViewId
        }
        function ca() {
            var a = "navigationStart redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart secureConnectionStart connectEnd requestStart responseStart responseEnd unloadEventStart unloadEventEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd msFirstPaint chromeFirstPaint requestEnd proxyStart proxyEnd".split(" ")
              , b = B.performance || B.mozPerformance || B.msPerformance || B.webkitPerformance;
            if (b) {
                var c = {}, d;
                for (d in b.timing)
                    qc(d, a) && null !== b.timing[d] && (c[d] = b.timing[d]);
                delete c.requestEnd;
                return {
                    schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                    data: c
                }
            }
        }
        function Q(a, b) {
            if (B.optimizely && B.optimizely.data) {
                var c = B.optimizely.data[a];
                "undefined" !== typeof b && void 0 !== c && (c = c[b])
            }
            return c
        }
        function ba(a, b) {
            if (B.optimizely && "function" === typeof B.optimizely.get) {
                var c = B.optimizely.get(a);
                "undefined" !== typeof b && void 0 !== c && (c = c[b])
            }
            return c
        }
        function F() {
            var a = Q("state")
              , b = Q("experiments");
            return da(a && b && a.activeExperiments, function(c) {
                var d = b[c];
                return {
                    activeExperimentId: c.toString(),
                    variation: a.variationIdsMap[c][0].toString(),
                    conditional: d && d.conditional,
                    manual: d && d.manual,
                    name: d && d.name
                }
            })
        }
        function ja() {
            var a = ba("state")
              , b = a && a.getActiveExperimentIds()
              , c = a && a.getVariationMap()
              , d = ba("visitor");
            return da(b, function(a) {
                var b = c[a]
                  , e = b && b.name && b.name.toString() || null;
                b = b && b.id;
                var f = d && d.visitorId && d.visitorId.toString() || null;
                return {
                    experimentId: kb(a) || null,
                    variationName: e,
                    variation: kb(b) || null,
                    visitorId: f
                }
            })
        }
        function la() {
            var a = Q("experiments");
            if (a) {
                var b = [], c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = {};
                        d.id = c;
                        var e = a[c];
                        d.code = e.code;
                        d.manual = e.manual;
                        d.conditional = e.conditional;
                        d.name = e.name;
                        d.variationIds = e.variation_ids;
                        b.push({
                            schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                            data: d
                        })
                    }
                return b
            }
            return []
        }
        function oa() {
            var a = []
              , b = Q("experiments");
            if (b)
                for (var c in b)
                    b.hasOwnProperty(c) && a.push(c);
            if (b = Q("state")) {
                c = [];
                for (var d = b.activeExperiments || [], e = 0; e < a.length; e++) {
                    var f = a[e]
                      , g = {};
                    g.experimentId = f;
                    g.isActive = qc(a[e], d);
                    g.variationIndex = (b.variationMap || {})[f];
                    g.variationName = (b.variationNamesMap || {})[f];
                    var h = b.variationIdsMap || {};
                    h[f] && 1 === h[f].length && (g.variationId = h[f][0]);
                    c.push({
                        schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                        data: g
                    })
                }
                return c
            }
            return []
        }
        function pa() {
            var a = Q("variations");
            if (a) {
                var b = [], c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = {};
                        d.id = c;
                        var e = a[c];
                        d.name = e.name;
                        d.code = e.code;
                        b.push({
                            schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                            data: d
                        })
                    }
                return b
            }
            return []
        }
        function qa() {
            var a = Q("visitor");
            if (a) {
                var b = {};
                b.browser = a.browser;
                b.browserVersion = a.browserVersion;
                b.device = a.device;
                b.deviceType = a.deviceType;
                b.ip = a.ip;
                var c = a.platform || {};
                b.platformId = c.id;
                b.platformVersion = c.version;
                c = a.location || {};
                b.locationCity = c.city;
                b.locationRegion = c.region;
                b.locationCountry = c.country;
                b.mobile = a.mobile;
                b.mobileId = a.mobileId;
                b.referrer = a.referrer;
                b.os = a.os;
                return {
                    schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                    data: b
                }
            }
        }
        function ra() {
            var a = Q("visitor", "audiences");
            if (a) {
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push({
                        schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                        data: {
                            id: c,
                            isMember: a[c]
                        }
                    });
                return b
            }
            return []
        }
        function sa() {
            var a = Q("visitor", "dimensions");
            if (a) {
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push({
                        schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                        data: {
                            id: c,
                            value: a[c]
                        }
                    });
                return b
            }
            return []
        }
        function wa() {
            return da(F(), function(a) {
                return {
                    schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                    data: a
                }
            })
        }
        function xa() {
            return da(ja(), function(a) {
                return {
                    schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                    data: a
                }
            })
        }
        function ya() {
            var a = window._hawk;
            if (a) {
                var b = {
                    encryptedId: null,
                    optout: null
                };
                b.encryptedId = a.browserid;
                a = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)","i");
                a = document.cookie.match(a);
                b.optout = a && decodeURIComponent(a[1]) ? a && decodeURIComponent(a[1]) : "false";
                return {
                    schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                    data: b
                }
            }
        }
        function na() {
            !Cb && S.geolocation && S.geolocation.getCurrentPosition && (Cb = !0,
            S.geolocation.getCurrentPosition(function(a) {
                var b = a.coords;
                fc.push({
                    schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                    data: {
                        latitude: b.latitude,
                        longitude: b.longitude,
                        latitudeLongitudeAccuracy: b.accuracy,
                        altitude: b.altitude,
                        altitudeAccuracy: b.altitudeAccuracy,
                        bearing: b.heading,
                        speed: b.speed,
                        timestamp: Math.round(a.timestamp)
                    }
                })
            }))
        }
        function Ga() {
            var a = {};
            M("__utma __utmb __utmc __utmv __utmz _ga".split(" "), function(b) {
                var c = z(b);
                c && (a[b] = c)
            });
            return {
                schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                data: a
            }
        }
        function Ha(a, b, c, d, e) {
            h();
            Fb && Z();
            Fb = !0;
            rb = A.title;
            Nb = a;
            a = nc(Nb || rb);
            t.trackPageView(p(sb || Ba), a, p(ea || Lb), x((b || []).concat(c ? c() : [])), d, e);
            d = new Date;
            e = !1;
            if (X.enabled && !X.installed) {
                e = X.installed = !0;
                var f = {
                    update: function() {
                        if ("undefined" !== typeof window && "function" === typeof window.addEventListener) {
                            var a = !1
                              , b = Object.defineProperty({}, "passive", {
                                get: function() {
                                    a = !0
                                }
                            })
                              , c = function() {};
                            window.addEventListener("testPassiveEventSupport", c, b);
                            window.removeEventListener("testPassiveEventSupport", c, b);
                            f.hasSupport = a
                        }
                    }
                };
                f.update();
                a = "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                Object.prototype.hasOwnProperty.call(f, "hasSupport") ? q(A, a, y, {
                    passive: !0
                }) : q(A, a, y);
                H();
                a = function(a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y;
                    return function(a) {
                        return q(A, a, b)
                    }
                }
                ;
                M("click mouseup mousedown mousemove keypress keydown keyup".split(" "), a(A));
                M(["resize", "focus", "blur"], a(B));
                a(B, u)("scroll")
            }
            if (X.enabled && (xb || e)) {
                Vb = d.getTime();
                for (var g in X.configurations)
                    X.configurations.hasOwnProperty(g) && (d = X.configurations[g],
                    clearInterval(d.activityInterval),
                    Ka(d, (b || []).concat(c ? c() : [])))
            }
        }
        function Ka(a, b) {
            var c = function(a, b) {
                h();
                a({
                    context: b,
                    pageViewId: V(),
                    minXOffset: Wb,
                    minYOffset: Yb,
                    maxXOffset: Xb,
                    maxYOffset: Zb
                });
                H()
            }
              , d = function() {
                Vb + a.configHeartBeatTimer > (new Date).getTime() && c(a.callback, b)
            };
            a.activityInterval = 0 != a.configMinimumVisitLength ? setTimeout(function() {
                Vb + a.configMinimumVisitLength > (new Date).getTime() && c(a.callback, b);
                a.activityInterval = setInterval(d, a.configHeartBeatTimer)
            }, a.configMinimumVisitLength) : setInterval(d, a.configHeartBeatTimer)
        }
        function Aa(a, b, c) {
            if ("number" == typeof a && a == gc(a) && "number" == typeof b && b == gc(b))
                return {
                    configMinimumVisitLength: 1E3 * a,
                    configHeartBeatTimer: 1E3 * b,
                    activityInterval: null,
                    callback: c
                };
            D("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay.");
            return {}
        }
        function Ra(a) {
            var b = a.context
              , c = a.minXOffset
              , d = a.minYOffset
              , e = a.maxXOffset;
            a = a.maxYOffset;
            var f = A.title;
            f !== rb && (rb = f,
            Nb = null);
            t.trackPagePing(p(sb || Ba), nc(Nb || rb), p(ea || Lb), w(c), w(e), w(d), w(a), x(b))
        }
        function ia(a, b) {
            return "" !== a ? a + b.charAt(0).toUpperCase() + b.slice(1) : b
        }
        function L(a) {
            var b, c, d = ["", "webkit", "ms", "moz"];
            if (!ib)
                for (c = 0; c < d.length; c++) {
                    var e = d[c];
                    if (A[ia(e, "hidden")]) {
                        "prerender" === A[ia(e, "visibilityState")] && (b = !0);
                        break
                    } else if (!1 === A[ia(e, "hidden")])
                        break
                }
            b ? q(A, e + "visibilitychange", function Ud() {
                A.removeEventListener(e + "visibilitychange", Ud, !1);
                a()
            }) : a()
        }
        d = d || {};
        d.hasOwnProperty("post") ? d.eventMethod = !0 === d.post ? "post" : "get" : d.eventMethod = d.eventMethod || "post";
        d.hasOwnProperty("useStm") || (d.useStm = !0);
        var Da = function(a) {
            return a.hasOwnProperty("stateStorageStrategy") ? a.stateStorageStrategy : Na || ob ? Na && ob ? "cookieAndLocalStorage" : Na ? "cookie" : "localStorage" : "none"
        }, ka = function(a) {
            return a.hasOwnProperty("anonymousTracking") ? !0 === a.anonymousTracking.withSessionTracking : !1
        }, ta = function(a) {
            return a.hasOwnProperty("anonymousTracking") ? !0 === a.anonymousTracking.withServerAnonymisation : !1
        }, gb = Object.freeze({
            consent: "consent",
            contract: "contract",
            legalObligation: "legal_obligation",
            vitalInterests: "vital_interests",
            publicTask: "public_task",
            legitimateInterests: "legitimate_interests"
        }), t = Sd(!0, function(a) {
            var b = Math.round((new Date).getTime() / 1E3)
              , c = n("ses")
              , d = R()
              , f = d[0]
              , g = d[1]
              , ec = d[2]
              , k = d[3]
              , l = d[4]
              , m = d[5];
            d = d[6];
            var v = Ob ? !!z(Ob) : !1;
            Ia || v ? P() : ("0" === f ? (T = d,
            c || "none" == G || (k++,
            m = l,
            T = N()),
            ha = k) : (new Date).getTime() - Ta > 1E3 * Ma && (T = N(),
            ha++),
            a.add("vp", ud()),
            a.add("ds", vd()),
            a.add("vid", Pa ? ha : fa ? null : ha),
            a.add("sid", Pa ? T : fa ? null : T),
            a.add("duid", fa ? null : g),
            a.add("uid", fa ? null : tb),
            h(),
            a.add("refr", p(ea || Lb)),
            a.add("url", p(sb || Ba)),
            a.add("page", (typeof utag.data.udo_backup.page.data.page_name !=='undefined') ? utag.data.udo_backup.page.data.page_name : null ),
            "none" != G && (I(g, ec, ha, b, m, T),
            E()),
            Ta = (new Date).getTime());
            b = qb;
            c = new Date;
            f = Ob ? !!z(Ob) : !1;
            Ia || f || (ub.enqueueRequest(a.build(), za),
            e.expireDateTime = c.getTime() + b)
        }), Fa = !1, l = {}, ua = {}, Ja = {}, A = document, B = window, S = navigator, Oa = rc(A.domain, B.location.href, dc()), La = cc(Oa[0]), Ba = Oa[1], Lb = Oa[2], ea, lb = d.hasOwnProperty("platform") ? d.platform : "web", za, mb = d.hasOwnProperty("postPath") ? d.postPath : "/com.snowplowanalytics.snowplow/tp2", pb = d.hasOwnProperty("appId") ? d.appId : "", sb, rb = A.title, Nb, qb = d.hasOwnProperty("pageUnloadTimer") ? d.pageUnloadTimer : 500, xb = d.hasOwnProperty("resetActivityTrackingOnPageView") ? d.resetActivityTrackingOnPageView : !0, Sa, Ua, Va = d.hasOwnProperty("cookieName") ? d.cookieName : "_sp_", ma = d.hasOwnProperty("cookieDomain") ? d.cookieDomain : null, Ea = "/", Bb = d.hasOwnProperty("cookieSameSite") ? d.cookieSameSite : "None", Db = d.hasOwnProperty("cookieSecure") ? d.cookieSecure : !0, hb = S.doNotTrack || S.msDoNotTrack || B.doNotTrack, Ia = d.hasOwnProperty("respectDoNotTrack") ? d.respectDoNotTrack && ("yes" === hb || "1" === hb) : !1, Ob, ib, jb = d.hasOwnProperty("cookieLifetime") ? d.cookieLifetime : 63072E3, Ma = d.hasOwnProperty("sessionCookieTimeout") ? d.sessionCookieTimeout : 1800, Jb = A.characterSet || A.charset, nb = d.hasOwnProperty("forceSecureTracker") ? !0 === d.forceSecureTracker : !1, Kb = !nb && d.hasOwnProperty("forceUnsecureTracker") ? !0 === d.forceUnsecureTracker : !1, Pa = ka(d), Pb = ta(d), fa = !!d.anonymousTracking, ob = d.hasOwnProperty("useLocalStorage") ? (D("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."),
        d.useLocalStorage) : !0, Na = d.hasOwnProperty("useCookies") ? (D("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."),
        d.useCookies) : !0, G = Da(d), Qb = S.userLanguage || S.language, $b = wd("cookie" == G || "cookieAndLocalStorage" == G, m("testcookie")), yb = a + "_" + b, Vb, Ta = (new Date).getTime(), Wb, Xb, Yb, Zb, Rb = Vd, zb, Mb, T, ha = 1, tb, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, ac = [], vb = new xd(t,yb,x), bc = new yd(t,yb,x), Ab = new Ad(t), ub = new Cd(a,b,e,"localStorage" == G || "cookieAndLocalStorage" == G,d.eventMethod,mb,d.bufferSize,d.maxPostBytes || 4E4,d.useStm,d.maxLocalStorageQueueSize || 1E3,d.connectionTimeout || 5E3,Pb), Cb = !1, J = d.contexts || {}, fc = [], wb = [], Eb = !1, Fb = !1, X = {
            enabled: !1,
            installed: !1,
            configurations: {}
        }, Ca = null;
        J.clientHints && S.userAgentData && (Ca = {
            isMobile: S.userAgentData.mobile,
            brands: S.userAgentData.brands
        },
        J.clientHints.includeHighEntropy && S.userAgentData.getHighEntropyValues && S.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion"]).then(function(a) {
            Ca.architecture = a.architecture;
            Ca.model = a.model;
            Ca.platform = a.platform;
            Ca.uaFullVersion = a.uaFullVersion;
            Ca.platformVersion = a.platformVersion
        }));
        var Sb = d.skippedBrowserFeatures || []
          , Qa = {};
        d.hasOwnProperty("discoverRootDomain") && d.discoverRootDomain && (ma = rd());
        J.gaCookies && fc.push(Ga());
        J.geolocation && na();
        t.setBase64Encoding(d.hasOwnProperty("encodeBase64") ? d.encodeBase64 : !0);
        t.setTrackerVersion(c);
        t.setTrackerNamespace(b);
        t.setAppId(pb);
        t.setPlatform(lb);
        t.setTimezone(Wd.jstz.determine().name());
        t.addPayloadPair("lang", Qb);
        t.addPayloadPair("cs", Jb);
        for (var aa in $b)
            Object.prototype.hasOwnProperty.call($b, aa) && ("res" !== aa && "cd" !== aa && "cookie" !== aa || f(aa) ? f(aa) || t.addPayloadPair("f_" + aa, $b[aa]) : t.addPayloadPair(aa, $b[aa]));
        r();
        W();
        d.crossDomainLinker && k(d.crossDomainLinker);
        l.getDomainSessionIndex = function() {
            return ha
        }
        ;
        l.getPageViewId = function() {
            return V()
        }
        ;
        l.newSession = function() {
            var a = Math.round((new Date).getTime() / 1E3)
              , b = R()
              , c = b[1]
              , d = b[2]
              , e = b[3]
              , f = b[4]
              , g = b[5]
              , h = b[6];
            "0" === b[0] ? (T = h,
            "none" != G && (e++,
            g = f,
            T = N()),
            ha = e,
            E()) : (T = N(),
            ha++);
            "none" != G && (I(c, d, ha, a, g, T),
            E());
            Ta = (new Date).getTime()
        }
        ;
        l.getCookieName = function(a) {
            return m(a)
        }
        ;
        l.getUserId = function() {
            return tb
        }
        ;
        l.getDomainUserId = function() {
            return R()[1]
        }
        ;
        l.getDomainUserInfo = function() {
            return R()
        }
        ;
        l.getUserFingerprint = function() {
            D("User Fingerprinting is no longer supported. This function will be removed in a future release.");
            return 0
        }
        ;
        l.setAppId = function(a) {
            D("setAppId is deprecated. Instead use the argmap argument on tracker initialisation: appId");
            t.setAppId(a)
        }
        ;
        l.setReferrerUrl = function(a) {
            ea = a
        }
        ;
        l.setCustomUrl = function(a) {
            h();
            var b = Ba, c;
            v(a) ? sb = a : "/" === a.slice(0, 1) ? sb = v(b) + "://" + Tb(b) + a : (b = p(b),
            0 <= (c = b.indexOf("?")) && (b = b.slice(0, c)),
            (c = b.lastIndexOf("/")) !== b.length - 1 && (b = b.slice(0, c + 1)),
            sb = b + a)
        }
        ;
        l.setDocumentTitle = function(a) {
            rb = A.title;
            Nb = a
        }
        ;
        l.discardHashTag = function(a) {
            Sa = a
        }
        ;
        l.discardBrace = function(a) {
            Ua = a
        }
        ;
        l.setCookieNamePrefix = function(a) {
            D("setCookieNamePrefix is deprecated. Instead use the argmap argument on tracker initialisation: cookieName");
            Va = a
        }
        ;
        l.setCookieDomain = function(a) {
            D("setCookieDomain is deprecated. Instead use the argmap argument on tracker initialisation: cookieDomain");
            ma = cc(a);
            r()
        }
        ;
        l.setCookiePath = function(a) {
            Ea = a;
            r()
        }
        ;
        l.setVisitorCookieTimeout = function(a) {
            jb = a
        }
        ;
        l.setSessionCookieTimeout = function(a) {
            D("setSessionCookieTimeout is deprecated. Instead use the argmap argument on tracker initialisation: sessionCookieTimeout");
            Ma = a
        }
        ;
        l.setUserFingerprintSeed = function() {
            D("User Fingerprinting is no longer supported. This function will be removed in a future release.")
        }
        ;
        l.enableUserFingerprint = function() {
            D("User Fingerprinting is no longer supported. This function will be removed in a future release.")
        }
        ;
        l.respectDoNotTrack = function(a) {
            D("respectDoNotTrack is deprecated. Instead use the argmap argument on tracker initialisation: respectDoNotTrack");
            var b = S.doNotTrack || S.msDoNotTrack;
            Ia = a && ("yes" === b || "1" === b)
        }
        ;
        l.crossDomainLinker = function(a) {
            k(a)
        }
        ;
        l.enableLinkClickTracking = function(a, b, c, d) {
            e.hasLoaded ? (vb.configureLinkClickTracking(a, b, c, d),
            vb.addClickListeners()) : e.registeredOnLoadHandlers.push(function() {
                vb.configureLinkClickTracking(a, b, c, d);
                vb.addClickListeners()
            })
        }
        ;
        l.refreshLinkClickTracking = function() {
            e.hasLoaded ? vb.addClickListeners() : e.registeredOnLoadHandlers.push(function() {
                vb.addClickListeners()
            })
        }
        ;
        l.enableActivityTracking = function(a, b) {
            X.enabled = !0;
            X.configurations.pagePing = Aa(a, b, Ra)
        }
        ;
        l.enableActivityTrackingCallback = function(a, b, c) {
            X.enabled = !0;
            X.configurations.callback = Aa(a, b, c)
        }
        ;
        l.updatePageActivity = function() {
            y()
        }
        ;
        l.enableFormTracking = function(a, b) {
            e.hasLoaded ? (bc.configureFormTracking(a),
            bc.addFormListeners(b)) : e.registeredOnLoadHandlers.push(function() {
                bc.configureFormTracking(a);
                bc.addFormListeners(b)
            })
        }
        ;
        l.killFrame = function() {
            B.location !== B.top.location && (B.top.location = B.location)
        }
        ;
        l.redirectFile = function(a) {
            "file:" === B.location.protocol && (B.location = a)
        }
        ;
        l.setOptOutCookie = function(a) {
            Ob = a
        }
        ;
        l.setCountPreRendered = function(a) {
            ib = a
        }
        ;
        l.setUserId = function(a) {
            tb = a
        }
        ;
        l.identifyUser = function(a) {
            l.setUserId(a)
        }
        ;
        l.setUserIdFromLocation = function(a) {
            h();
            tb = Gb(a, Ba)
        }
        ;
        l.setUserIdFromReferrer = function(a) {
            h();
            tb = Gb(a, Lb)
        }
        ;
        l.setUserIdFromCookie = function(a) {
            tb = z(a)
        }
        ;
        l.setCollectorCf = function(a) {
            za = Y(a + ".cloudfront.net")
        }
        ;
        l.setCollectorUrl = function(a) {
            za = Y(a)
        }
        ;
        l.setPlatform = function(a) {
            D("setPlatform is deprecated. Instead use the argmap argument on tracker initialisation: platform");
            t.setPlatform(a)
        }
        ;
        l.encodeBase64 = function(a) {
            D("encodeBase64 is deprecated. Instead use the argmap argument on tracker initialisation: encodeBase64");
            t.setBase64Encoding(a)
        }
        ;
        l.flushBuffer = function() {
            ub.executeQueue()
        }
        ;
        l.enableGeolocationContext = na;
        l.trackPageView = function(a, b, c, d, e) {
            L(function() {
                Ha(a, b, c, d, e)
            })
        }
        ;
        l.trackStructEvent = function(a, b, c, d, e, f, g, h) {
            L(function() {
                t.trackStructEvent(a, b, c, d, e, x(f), g, h)
            })
        }
        ;
        l.trackSelfDescribingEvent = function(a, b, c, d) {
            L(function() {
                t.trackSelfDescribingEvent(a, x(b), c, d)
            })
        }
        ;
        l.trackUnstructEvent = function(a, b, c) {
            L(function() {
                t.trackSelfDescribingEvent(a, x(b), c)
            })
        }
        ;
        l.addTrans = function(a, b, c, d, e, f, g, h, k, l, p) {
            Wa = a;
            Xa = b;
            Ya = c;
            Za = d;
            $a = e;
            ab = f;
            bb = g;
            cb = h;
            db = k;
            eb = l;
            fb = p
        }
        ;
        l.addItem = function(a, b, c, d, e, f, g, h, k) {
            ac.push({
                orderId: a,
                sku: b,
                name: c,
                category: d,
                price: e,
                quantity: f,
                currency: g,
                context: h,
                tstamp: k
            })
        }
        ;
        l.trackTrans = function() {
            L(function() {
                var a = fb;
                t.trackEcommerceTransaction(Wa, Xa, Ya, Za, $a, ab, bb, cb, db, x(eb), a);
                for (a = 0; a < ac.length; a++) {
                    var b = ac[a]
                      , c = b.tstamp;
                    t.trackEcommerceTransactionItem(b.orderId, b.sku, b.name, b.category, b.price, b.quantity, b.currency, x(b.context), c)
                }
                fb = eb = db = cb = bb = ab = $a = Za = Ya = Xa = Wa = void 0;
                ac = []
            })
        }
        ;
        l.trackLinkClick = function(a, b, c, d, e, f, g) {
            L(function() {
                t.trackLinkClick(a, b, c, d, e, x(f), g)
            })
        }
        ;
        l.trackAdImpression = function(a, b, c, d, e, f, g, h, k, l) {
            L(function() {
                t.trackAdImpression(a, b, c, d, e, f, g, h, x(k), l)
            })
        }
        ;
        l.trackAdClick = function(a, b, c, d, e, f, g, h, k, l, p) {
            L(function() {
                t.trackAdClick(a, b, c, d, e, f, g, h, k, x(l), p)
            })
        }
        ;
        l.trackAdConversion = function(a, b, c, d, e, f, g, h, k, l, p) {
            L(function() {
                t.trackAdConversion(a, b, c, d, e, f, g, h, k, x(l), p)
            })
        }
        ;
        l.trackSocialInteraction = function(a, b, c, d, e) {
            L(function() {
                t.trackSocialInteraction(a, b, c, x(d), e)
            })
        }
        ;
        l.trackAddToCart = function(a, b, c, d, e, f, g, h) {
            L(function() {
                t.trackAddToCart(a, b, c, d, e, f, x(g), h)
            })
        }
        ;
        l.trackRemoveFromCart = function(a, b, c, d, e, f, g, h) {
            L(function() {
                t.trackRemoveFromCart(a, b, c, d, e, f, x(g), h)
            })
        }
        ;
        l.trackSiteSearch = function(a, b, c, d, e, f) {
            L(function() {
                t.trackSiteSearch(a, b, c, d, x(e), f)
            })
        }
        ;
        l.trackTiming = function(a, b, c, d, e, f) {
            L(function() {
                t.trackSelfDescribingEvent({
                    schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                    data: {
                        category: a,
                        variable: b,
                        timing: c,
                        label: d
                    }
                }, x(e), f)
            })
        }
        ;
        l.trackConsentWithdrawn = function(a, b, c, d, e, f, g) {
            L(function() {
                t.trackConsentWithdrawn(a, b, c, d, e, x(f), g)
            })
        }
        ;
        l.trackConsentGranted = function(a, b, c, d, e, f, g) {
            L(function() {
                t.trackConsentGranted(a, b, c, d, e, x(f), g)
            })
        }
        ;
        l.trackEnhancedEcommerceAction = function(a, b, c) {
            var d = wb.concat(b || []);
            wb.length = 0;
            L(function() {
                t.trackSelfDescribingEvent({
                    schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                    data: {
                        action: a
                    }
                }, x(d), c)
            })
        }
        ;
        l.addEnhancedEcommerceActionContext = function(a, b, c, d, e, f, g, h, k, l) {
            wb.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                data: {
                    id: a,
                    affiliation: b,
                    revenue: Hb(c),
                    tax: Hb(d),
                    shipping: Hb(e),
                    coupon: f,
                    list: g,
                    step: kb(h),
                    option: k,
                    currency: l
                }
            })
        }
        ;
        l.addEnhancedEcommerceImpressionContext = function(a, b, c, d, e, f, g, h, k) {
            wb.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                data: {
                    id: a,
                    name: b,
                    list: c,
                    brand: d,
                    category: e,
                    variant: f,
                    position: kb(g),
                    price: Hb(h),
                    currency: k
                }
            })
        }
        ;
        l.addEnhancedEcommerceProductContext = function(a, b, c, d, e, f, g, h, k, l, p) {
            wb.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                data: {
                    id: a,
                    name: b,
                    list: c,
                    brand: d,
                    category: e,
                    variant: f,
                    price: Hb(g),
                    quantity: kb(h),
                    coupon: k,
                    position: kb(l),
                    currency: p
                }
            })
        }
        ;
        l.addEnhancedEcommercePromoContext = function(a, b, c, d, e) {
            wb.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                data: {
                    id: a,
                    name: b,
                    creative: c,
                    position: d,
                    currency: e
                }
            })
        }
        ;
        l.enableGdprContext = function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
              , c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
              , d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
              , e = gb[a];
            e ? (J.gdprBasis = !0,
            Qa = {
                gdprBasis: e,
                gdprDocId: b,
                gdprDocVer: c,
                gdprDocDesc: d
            }) : D("enableGdprContext failed. basisForProcessing must be set to one of: consent, legalObligation, vitalInterests publicTask, legitimateInterests")
        }
        ;
        l.addGlobalContexts = function(a) {
            t.addGlobalContexts(a)
        }
        ;
        l.removeGlobalContexts = function(a) {
            t.removeGlobalContexts(a)
        }
        ;
        l.clearGlobalContexts = function() {
            t.clearGlobalContexts()
        }
        ;
        l.enableErrorTracking = function(a, b) {
            Ab.enableErrorTracking(a, b, x())
        }
        ;
        l.trackError = function(a, b, c, d, e, f) {
            f = x(f);
            Ab.trackError(a, b, c, d, e, f)
        }
        ;
        l.preservePageViewId = function() {
            Eb = !0
        }
        ;
        l.disableAnonymousTracking = function(a) {
            a ? (d.stateStorageStrategy = a,
            d.anonymousTracking = !1,
            G = Da(d)) : d.anonymousTracking = !1;
            fa = !!d.anonymousTracking;
            Pa = ka(d);
            Pb = ta(d);
            ub.setUseLocalStorage("localStorage" == G || "cookieAndLocalStorage" == G);
            ub.setAnonymousTracking(Pb);
            W();
            ub.executeQueue()
        }
        ;
        l.enableAnonymousTracking = function(a) {
            d.anonymousTracking = a || !0;
            fa = !!d.anonymousTracking;
            Pa = ka(d);
            Pb = ta(d);
            Pa || Z();
            ub.setAnonymousTracking(Pb)
        }
        ;
        l.clearUserData = P;
        l.setDebug = function(a) {
            Ja = (Fa = (!!a).valueOf()) ? l : ua
        }
        ;
        ua = Ed(l);
        return Ja = Fa ? l : ua
    }
    function Hc(a, b) {
        function c() {
            var a;
            if (!f.hasLoaded)
                for (f.hasLoaded = !0,
                a = 0; a < f.registeredOnLoadHandlers.length; a++)
                    f.registeredOnLoadHandlers[a]();
            return !0
        }
        var e = document
          , d = window
          , f = {
            outQueues: [],
            bufferFlushers: [],
            expireDateTime: null,
            hasLoaded: !1,
            registeredOnLoadHandlers: [],
            pageViewId: null
        };
        d.Snowplow = {
            getTrackerCf: function(a) {
                var c = new qb(b,"","js-2.17.0",f,{});
                c.setCollectorCf(a);
                return c
            },
            getTrackerUrl: function(a) {
                var c = new qb(b,"","js-2.17.0",f,{});
                c.setCollectorUrl(a);
                return c
            },
            getAsyncTracker: function() {
                return new qb(b,"","js-2.17.0",f,{})
            }
        };
        q(d, "beforeunload", function() {
            M(f.bufferFlushers, function(a) {
                a()
            });
            if (f.expireDateTime) {
                do {
                    var a = new Date;
                    if (0 === Array.prototype.filter.call(f.outQueues, function(a) {
                        return 0 < a.length
                    }).length)
                        break
                } while (a.getTime() < f.expireDateTime)
            }
        }, !1);
        (function() {
            var a;
            e.addEventListener ? q(e, "DOMContentLoaded", function k() {
                e.removeEventListener("DOMContentLoaded", k, !1);
                c()
            }) : e.attachEvent && (e.attachEvent("onreadystatechange", function k() {
                "complete" === e.readyState && (e.detachEvent("onreadystatechange", k),
                c())
            }),
            e.documentElement.doScroll && d === d.top && function p() {
                if (!f.hasLoaded) {
                    try {
                        e.documentElement.doScroll("left")
                    } catch (v) {
                        setTimeout(p, 0);
                        return
                    }
                    c()
                }
            }());
            /WebKit/.test(navigator.userAgent) && (a = setInterval(function() {
                if (f.hasLoaded || /loaded|complete/.test(e.readyState))
                    clearInterval(a),
                    c()
            }, 10));
            q(d, "load", c, !1)
        }
        )();
        return new sd(qb,"js-2.17.0",f,a,b)
    }
    var Xd = function(a, b) {
        for (var c = -1, e = null == a ? 0 : a.length; ++c < e && !1 !== b(a[c], c, a); )
            ;
        return a
    }
      , Yd = function(a) {
        return function(b, c, e) {
            var d = -1
              , f = Object(b);
            e = e(b);
            for (var h = e.length; h--; ) {
                var g = e[a ? h : ++d];
                if (!1 === c(f[g], g, f))
                    break
            }
            return b
        }
    }()
      , xb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {}
      , Ic = "object" == H(xb) && xb && xb.Object === Object && xb
      , Zd = "object" == ("undefined" === typeof self ? "undefined" : H(self)) && self && self.Object === Object && self
      , O = Ic || Zd || Function("return this")()
      , Y = O.Symbol
      , Jc = Object.prototype
      , $d = Jc.hasOwnProperty
      , ae = Jc.toString
      , Ra = Y ? Y.toStringTag : void 0
      , be = Object.prototype.toString
      , Kc = Y ? Y.toStringTag : void 0
      , R = function(a) {
        if (null == a)
            a = void 0 === a ? "[object Undefined]" : "[object Null]";
        else if (Kc && Kc in Object(a)) {
            var b = $d.call(a, Ra)
              , c = a[Ra];
            try {
                a[Ra] = void 0;
                var e = !0
            } catch (f) {}
            var d = ae.call(a);
            e && (b ? a[Ra] = c : delete a[Ra]);
            a = d
        } else
            a = be.call(a);
        return a
    }
      , W = function(a) {
        return null != a && "object" == H(a)
    }
      , Lc = function(a) {
        return W(a) && "[object Arguments]" == R(a)
    }
      , Mc = Object.prototype
      , ce = Mc.hasOwnProperty
      , de = Mc.propertyIsEnumerable
      , Nc = Lc(function() {
        return arguments
    }()) ? Lc : function(a) {
        return W(a) && ce.call(a, "callee") && !de.call(a, "callee")
    }
      , u = Array.isArray
      , ee = function() {
        return !1
    }
      , hb = pa(function(a, b) {
        var c = (b = b && !b.nodeType && b) && a && !a.nodeType && a;
        b = c && c.exports === b ? O.Buffer : void 0;
        a.exports = (b ? b.isBuffer : void 0) || ee
    })
      , fe = /^(?:0|[1-9]\d*)$/
      , Qb = function(a, b) {
        var c = H(a);
        b = null == b ? 9007199254740991 : b;
        return !!b && ("number" == c || "symbol" != c && fe.test(a)) && -1 < a && 0 == a % 1 && a < b
    }
      , yb = function(a) {
        return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
    }
      , m = {};
    m["[object Float32Array]"] = m["[object Float64Array]"] = m["[object Int8Array]"] = m["[object Int16Array]"] = m["[object Int32Array]"] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m["[object Uint16Array]"] = m["[object Uint32Array]"] = !0;
    m["[object Arguments]"] = m["[object Array]"] = m["[object ArrayBuffer]"] = m["[object Boolean]"] = m["[object DataView]"] = m["[object Date]"] = m["[object Error]"] = m["[object Function]"] = m["[object Map]"] = m["[object Number]"] = m["[object Object]"] = m["[object RegExp]"] = m["[object Set]"] = m["[object String]"] = m["[object WeakMap]"] = !1;
    var ge = function(a) {
        return W(a) && yb(a.length) && !!m[R(a)]
    }
      , he = function(a) {
        return function(b) {
            return a(b)
        }
    }
      , Oc = pa(function(a, b) {
        var c = b && !b.nodeType && b;
        c = (b = c && a && !a.nodeType && a) && b.exports === c && Ic.process;
        a: {
            try {
                var e = b && b.require && b.require("util").types;
                if (e) {
                    var d = e;
                    break a
                }
                d = c && c.binding && c.binding("util");
                break a
            } catch (f) {}
            d = void 0
        }
        a.exports = d
    })
      , Pc = Oc && Oc.isTypedArray
      , Fb = Pc ? he(Pc) : ge
      , ie = Object.prototype.hasOwnProperty
      , je = Object.prototype
      , Qc = function(a, b) {
        return function(c) {
            return a(b(c))
        }
    }
      , ke = Qc(Object.keys, Object)
      , le = Object.prototype.hasOwnProperty
      , I = function(a) {
        var b = H(a);
        return null != a && ("object" == b || "function" == b)
    }
      , Rc = function(a) {
        if (!I(a))
            return !1;
        a = R(a);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
      , ia = function(a) {
        return null != a && yb(a.length) && !Rc(a)
    }
      , Ha = function(a) {
        if (ia(a)) {
            var b = u(a)
              , c = !b && Nc(a)
              , e = !b && !c && hb(a)
              , d = !b && !c && !e && Fb(a);
            if (b = b || c || e || d) {
                c = a.length;
                for (var f = String, h = -1, g = Array(c); ++h < c; )
                    g[h] = f(h);
                c = g
            } else
                c = [];
            f = c.length;
            for (var k in a)
                !ie.call(a, k) || b && ("length" == k || e && ("offset" == k || "parent" == k) || d && ("buffer" == k || "byteLength" == k || "byteOffset" == k) || Qb(k, f)) || c.push(k);
            a = c
        } else if (k = a && a.constructor,
        a === ("function" == typeof k && k.prototype || je)) {
            k = [];
            for (e in Object(a))
                le.call(a, e) && "constructor" != e && k.push(e);
            a = k
        } else
            a = ke(a);
        return a
    }
      , Sc = function(a, b) {
        return a && Yd(a, b, Ha)
    }
      , Sa = function(a, b) {
        return function(c, e) {
            if (null == c)
                return c;
            if (!ia(c))
                return a(c, e);
            for (var d = c.length, f = b ? d : -1, h = Object(c); (b ? f-- : ++f < d) && !1 !== e(h[f], f, h); )
                ;
            return c
        }
    }(Sc)
      , Tc = function(a) {
        return a
    }
      , M = function(a, b) {
        return (u(a) ? Xd : Sa)(a, "function" == typeof b ? b : Tc)
    }
      , Uc = function(a, b) {
        for (var c = -1, e = null == a ? 0 : a.length, d = 0, f = []; ++c < e; ) {
            var h = a[c];
            b(h, c, a) && (f[d++] = h)
        }
        return f
    }
      , me = function(a, b) {
        var c = [];
        Sa(a, function(a, d, f) {
            b(a, d, f) && c.push(a)
        });
        return c
    }
      , Ta = function(a, b) {
        return a === b || a !== a && b !== b
    }
      , Ua = function(a, b) {
        for (var c = a.length; c--; )
            if (Ta(a[c][0], b))
                return c;
        return -1
    }
      , ne = Array.prototype.splice;
    qa.prototype.clear = function() {
        this.__data__ = [];
        this.size = 0
    }
    ;
    qa.prototype["delete"] = function(a) {
        var b = this.__data__;
        a = Ua(b, a);
        if (0 > a)
            return !1;
        a == b.length - 1 ? b.pop() : ne.call(b, a, 1);
        --this.size;
        return !0
    }
    ;
    qa.prototype.get = function(a) {
        var b = this.__data__;
        a = Ua(b, a);
        return 0 > a ? void 0 : b[a][1]
    }
    ;
    qa.prototype.has = function(a) {
        return -1 < Ua(this.__data__, a)
    }
    ;
    qa.prototype.set = function(a, b) {
        var c = this.__data__
          , e = Ua(c, a);
        0 > e ? (++this.size,
        c.push([a, b])) : c[e][1] = b;
        return this
    }
    ;
    var ta = qa
      , Rb = O["__core-js_shared__"]
      , Vc = function() {
        var a = /[^.]+$/.exec(Rb && Rb.keys && Rb.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : ""
    }()
      , oe = Function.prototype.toString
      , ba = function(a) {
        if (null != a) {
            try {
                return oe.call(a)
            } catch (b) {}
            return a + ""
        }
        return ""
    }
      , pe = /^\[object .+?Constructor\]$/
      , qe = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , ja = function(a, b) {
        a = null == a ? void 0 : a[b];
        return (!I(a) || Vc && Vc in a ? 0 : (Rc(a) ? qe : pe).test(ba(a))) ? a : void 0
    }
      , Da = ja(O, "Map")
      , ka = ja(Object, "create")
      , re = Object.prototype.hasOwnProperty
      , se = Object.prototype.hasOwnProperty;
    V.prototype.clear = function() {
        this.__data__ = ka ? ka(null) : {};
        this.size = 0
    }
    ;
    V.prototype["delete"] = function(a) {
        a = this.has(a) && delete this.__data__[a];
        this.size -= a ? 1 : 0;
        return a
    }
    ;
    V.prototype.get = function(a) {
        var b = this.__data__;
        return ka ? (a = b[a],
        "__lodash_hash_undefined__" === a ? void 0 : a) : re.call(b, a) ? b[a] : void 0
    }
    ;
    V.prototype.has = function(a) {
        var b = this.__data__;
        return ka ? void 0 !== b[a] : se.call(b, a)
    }
    ;
    V.prototype.set = function(a, b) {
        var c = this.__data__;
        this.size += this.has(a) ? 0 : 1;
        c[a] = ka && void 0 === b ? "__lodash_hash_undefined__" : b;
        return this
    }
    ;
    var Va = function(a, b) {
        a = a.__data__;
        var c = H(b);
        return ("string" == c || "number" == c || "symbol" == c || "boolean" == c ? "__proto__" !== b : null === b) ? a["string" == typeof b ? "string" : "hash"] : a.map
    };
    ra.prototype.clear = function() {
        this.size = 0;
        this.__data__ = {
            hash: new V,
            map: new (Da || ta),
            string: new V
        }
    }
    ;
    ra.prototype["delete"] = function(a) {
        a = Va(this, a)["delete"](a);
        this.size -= a ? 1 : 0;
        return a
    }
    ;
    ra.prototype.get = function(a) {
        return Va(this, a).get(a)
    }
    ;
    ra.prototype.has = function(a) {
        return Va(this, a).has(a)
    }
    ;
    ra.prototype.set = function(a, b) {
        var c = Va(this, a)
          , e = c.size;
        c.set(a, b);
        this.size += c.size == e ? 0 : 1;
        return this
    }
    ;
    var Fa = ra;
    sa.prototype.clear = function() {
        this.__data__ = new ta;
        this.size = 0
    }
    ;
    sa.prototype["delete"] = function(a) {
        var b = this.__data__;
        a = b["delete"](a);
        this.size = b.size;
        return a
    }
    ;
    sa.prototype.get = function(a) {
        return this.__data__.get(a)
    }
    ;
    sa.prototype.has = function(a) {
        return this.__data__.has(a)
    }
    ;
    sa.prototype.set = function(a, b) {
        var c = this.__data__;
        if (c instanceof ta) {
            var e = c.__data__;
            if (!Da || 199 > e.length)
                return e.push([a, b]),
                this.size = ++c.size,
                this;
            c = this.__data__ = new Fa(e)
        }
        c.set(a, b);
        this.size = c.size;
        return this
    }
    ;
    var ua = sa;
    gb.prototype.add = gb.prototype.push = function(a) {
        this.__data__.set(a, "__lodash_hash_undefined__");
        return this
    }
    ;
    gb.prototype.has = function(a) {
        return this.__data__.has(a)
    }
    ;
    var te = function(a, b) {
        for (var c = -1, e = null == a ? 0 : a.length; ++c < e; )
            if (b(a[c], c, a))
                return !0;
        return !1
    }
      , Sb = function(a, b, c, e, d, f) {
        var h = c & 1
          , g = a.length
          , k = b.length;
        if (g != k && !(h && k > g))
            return !1;
        k = f.get(a);
        var p = f.get(b);
        if (k && p)
            return k == b && p == a;
        k = -1;
        p = !0;
        var m = c & 2 ? new gb : void 0;
        f.set(a, b);
        for (f.set(b, a); ++k < g; ) {
            var q = a[k]
              , n = b[k];
            if (e)
                var r = h ? e(n, q, k, b, a, f) : e(q, n, k, a, b, f);
            if (void 0 !== r) {
                if (r)
                    continue;
                p = !1;
                break
            }
            if (m) {
                if (!te(b, function(a, b) {
                    if (!m.has(b) && (q === a || d(q, a, c, e, f)))
                        return m.push(b)
                })) {
                    p = !1;
                    break
                }
            } else if (q !== n && !d(q, n, c, e, f)) {
                p = !1;
                break
            }
        }
        f["delete"](a);
        f["delete"](b);
        return p
    }
      , Wc = O.Uint8Array
      , ue = function(a) {
        var b = -1
          , c = Array(a.size);
        a.forEach(function(a, d) {
            c[++b] = [d, a]
        });
        return c
    }
      , ve = function(a) {
        var b = -1
          , c = Array(a.size);
        a.forEach(function(a) {
            c[++b] = a
        });
        return c
    }
      , Xc = Y ? Y.prototype : void 0
      , zb = Xc ? Xc.valueOf : void 0
      , md = function(a, b, c, e, d, f, h) {
        switch (c) {
        case "[object DataView]":
            if (a.byteLength != b.byteLength || a.byteOffset != b.byteOffset)
                break;
            a = a.buffer;
            b = b.buffer;
        case "[object ArrayBuffer]":
            if (a.byteLength != b.byteLength || !f(new Wc(a), new Wc(b)))
                break;
            return !0;
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return Ta(+a, +b);
        case "[object Error]":
            return a.name == b.name && a.message == b.message;
        case "[object RegExp]":
        case "[object String]":
            return a == b + "";
        case "[object Map]":
            var g = ue;
        case "[object Set]":
            g || (g = ve);
            if (a.size != b.size && !(e & 1))
                break;
            if (c = h.get(a))
                return c == b;
            e |= 2;
            h.set(a, b);
            b = Sb(g(a), g(b), e, d, f, h);
            h["delete"](a);
            return b;
        case "[object Symbol]":
            if (zb)
                return zb.call(a) == zb.call(b)
        }
        return !1
    }
      , ic = function(a, b, c) {
        b = b(a);
        if (!u(a)) {
            a = c(a);
            c = -1;
            for (var e = a.length, d = b.length; ++c < e; )
                b[d + c] = a[c]
        }
        return b
    }
      , we = function() {
        return []
    }
      , xe = Object.prototype.propertyIsEnumerable
      , Yc = Object.getOwnPropertySymbols
      , jc = Yc ? function(a) {
        if (null == a)
            return [];
        a = Object(a);
        return Uc(Yc(a), function(b) {
            return xe.call(a, b)
        })
    }
    : we
      , nd = Object.prototype.hasOwnProperty
      , Wa = ja(O, "DataView")
      , Xa = ja(O, "Promise")
      , Ya = ja(O, "Set")
      , Za = ja(O, "WeakMap")
      , ye = ba(Wa)
      , ze = ba(Da)
      , Ae = ba(Xa)
      , Be = ba(Ya)
      , Ce = ba(Za)
      , la = R;
    if (Wa && "[object DataView]" != la(new Wa(new ArrayBuffer(1))) || Da && "[object Map]" != la(new Da) || Xa && "[object Promise]" != la(Xa.resolve()) || Ya && "[object Set]" != la(new Ya) || Za && "[object WeakMap]" != la(new Za))
        la = function(a) {
            var b = R(a);
            if (a = (a = "[object Object]" == b ? a.constructor : void 0) ? ba(a) : "")
                switch (a) {
                case ye:
                    return "[object DataView]";
                case ze:
                    return "[object Map]";
                case Ae:
                    return "[object Promise]";
                case Be:
                    return "[object Set]";
                case Ce:
                    return "[object WeakMap]"
                }
            return b
        }
        ;
    var Eb = la
      , hc = Object.prototype.hasOwnProperty
      , za = Ga
      , De = function(a, b, c, e) {
        var d = c.length
          , f = d
          , h = !e;
        if (null == a)
            return !f;
        for (a = Object(a); d--; ) {
            var g = c[d];
            if (h && g[2] ? g[1] !== a[g[0]] : !(g[0]in a))
                return !1
        }
        for (; ++d < f; ) {
            g = c[d];
            var k = g[0]
              , p = a[k]
              , m = g[1];
            if (h && g[2]) {
                if (void 0 === p && !(k in a))
                    return !1
            } else {
                g = new ua;
                if (e)
                    var q = e(p, m, k, a, b, g);
                if (void 0 === q ? !za(m, p, 3, e, g) : !q)
                    return !1
            }
        }
        return !0
    }
      , Ee = function(a) {
        for (var b = Ha(a), c = b.length; c--; ) {
            var e = b[c]
              , d = a[e];
            b[c] = [e, d, d === d && !I(d)]
        }
        return b
    }
      , Zc = function(a, b) {
        return function(c) {
            return null == c ? !1 : c[a] === b && (void 0 !== b || a in Object(c))
        }
    }
      , Fe = function(a) {
        var b = Ee(a);
        return 1 == b.length && b[0][2] ? Zc(b[0][0], b[0][1]) : function(c) {
            return c === a || De(c, a, b)
        }
    }
      , Ja = function(a) {
        return "symbol" == H(a) || W(a) && "[object Symbol]" == R(a)
    }
      , Ge = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
      , He = /^\w*$/
      , $a = function(a, b) {
        if (u(a))
            return !1;
        var c = H(a);
        return "number" == c || "symbol" == c || "boolean" == c || null == a || Ja(a) ? !0 : He.test(a) || !Ge.test(a) || null != b && a in Object(b)
    };
    Ia.Cache = Fa;
    var Ie = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
      , Je = /\\(\\)?/g
      , Ke = function(a) {
        a = Ia(a, function(a) {
            500 === b.size && b.clear();
            return a
        });
        var b = a.cache;
        return a
    }(function(a) {
        var b = [];
        46 === a.charCodeAt(0) && b.push("");
        a.replace(Ie, function(a, e, d, f) {
            b.push(d ? f.replace(Je, "$1") : e || a)
        });
        return b
    })
      , lc = function(a, b) {
        for (var c = -1, e = null == a ? 0 : a.length, d = Array(e); ++c < e; )
            d[c] = b(a[c], c, a);
        return d
    }
      , od = 1 / 0
      , $c = Y ? Y.prototype : void 0
      , mc = $c ? $c.toString : void 0
      , ad = function(a, b) {
        return u(a) ? a : $a(a, b) ? [a] : Ke(null == a ? "" : kc(a))
    }
      , Le = 1 / 0
      , ma = function(a) {
        if ("string" == typeof a || Ja(a))
            return a;
        var b = a + "";
        return "0" == b && 1 / a == -Le ? "-0" : b
    }
      , bd = function(a, b) {
        b = ad(b, a);
        for (var c = 0, e = b.length; null != a && c < e; )
            a = a[ma(b[c++])];
        return c && c == e ? a : void 0
    }
      , E = function(a, b, c) {
        a = null == a ? void 0 : bd(a, b);
        return void 0 === a ? c : a
    }
      , Me = function(a, b) {
        return null != a && b in Object(a)
    }
      , mb = function(a, b, c) {
        b = ad(b, a);
        for (var e = -1, d = b.length, f = !1; ++e < d; ) {
            var h = ma(b[e]);
            if (!(f = null != a && c(a, h)))
                break;
            a = a[h]
        }
        if (f || ++e != d)
            return f;
        d = null == a ? 0 : a.length;
        return !!d && yb(d) && Qb(h, d) && (u(a) || Nc(a))
    }
      , Ne = function(a, b) {
        return $a(a) && b === b && !I(b) ? Zc(ma(a), b) : function(c) {
            var e = E(c, a);
            return void 0 === e && e === b ? null != c && mb(c, a, Me) : za(b, e, 3)
        }
    }
      , Oe = function(a) {
        return function(b) {
            return null == b ? void 0 : b[a]
        }
    }
      , Pe = function(a) {
        return function(b) {
            return bd(b, a)
        }
    }
      , na = function(a) {
        return "function" == typeof a ? a : null == a ? Tc : "object" == H(a) ? u(a) ? Ne(a[0], a[1]) : Fe(a) : $a(a) ? Oe(ma(a)) : Pe(a)
    }
      , pd = function(a, b) {
        return (u(a) ? Uc : me)(a, na(b))
    }
      , oc = function(a) {
        return "string" == typeof a || !u(a) && W(a) && "[object String]" == R(a)
    }
      , Qe = function(a, b) {
        var c = -1
          , e = ia(a) ? Array(a.length) : [];
        Sa(a, function(a, f, h) {
            e[++c] = b(a, f, h)
        });
        return e
    }
      , da = function(a, b) {
        return (u(a) ? lc : Qe)(a, na(b))
    }
      , ca = window
      , Ka = document
      , va = window.localStorage
      , uc = window.sessionStorage
      , cd = 0 / 0
      , Re = /^\s+|\s+$/g
      , Se = /^[-+]0x[0-9a-f]+$/i
      , Te = /^0b[01]+$/i
      , Ue = /^0o[0-7]+$/i
      , Ve = parseInt
      , We = function(a) {
        if ("number" == typeof a)
            return a;
        if (Ja(a))
            return cd;
        I(a) && (a = "function" == typeof a.valueOf ? a.valueOf() : a,
        a = I(a) ? a + "" : a);
        if ("string" != typeof a)
            return 0 === a ? a : +a;
        a = a.replace(Re, "");
        var b = Te.test(a);
        return b || Ue.test(a) ? Ve(a.slice(2), b ? 2 : 8) : Se.test(a) ? cd : +a
    }
      , dd = 1 / 0
      , gc = function(a) {
        a ? (a = We(a),
        a = a === dd || a === -dd ? 1.7976931348623157E308 * (0 > a ? -1 : 1) : a === a ? a : 0) : a = 0 === a ? a : 0;
        var b = a % 1;
        return a === a ? b ? a - b : a : 0
    }
      , Wd = pa(function(a, b) {
        (function(a) {
            var c = function() {
                var a = function(a) {
                    a = -a.getTimezoneOffset();
                    return null !== a ? a : 0
                }
                  , b = function(a, b, c) {
                    var d = new Date;
                    void 0 !== a && d.setFullYear(a);
                    d.setMonth(b);
                    d.setDate(c);
                    return d
                };
                return {
                    determine: function() {
                        var d = a(b(void 0, 0, 2))
                          , e = a(b(void 0, 5, 2))
                          , f = d - e;
                        return new c.TimeZone(c.olson.timezones[0 > f ? d + ",1" : 0 < f ? e + ",1,s" : d + ",0"])
                    },
                    date_is_dst: function(c) {
                        var d = 7 < c.getMonth()
                          , e = d ? a(b(c.getFullYear(), 5, 2)) : a(b(c.getFullYear(), 0, 2));
                        c = a(c);
                        c = e - c;
                        return 0 > e || d ? 0 !== c : 0 > c
                    },
                    dst_start_for: function(a) {
                        var b = new Date(2010,6,15,1,0,0,0);
                        return {
                            "America/Denver": new Date(2011,2,13,3,0,0,0),
                            "America/Mazatlan": new Date(2011,3,3,3,0,0,0),
                            "America/Chicago": new Date(2011,2,13,3,0,0,0),
                            "America/Mexico_City": new Date(2011,3,3,3,0,0,0),
                            "America/Asuncion": new Date(2012,9,7,3,0,0,0),
                            "America/Santiago": new Date(2012,9,3,3,0,0,0),
                            "America/Campo_Grande": new Date(2012,9,21,5,0,0,0),
                            "America/Montevideo": new Date(2011,9,2,3,0,0,0),
                            "America/Sao_Paulo": new Date(2011,9,16,5,0,0,0),
                            "America/Los_Angeles": new Date(2011,2,13,8,0,0,0),
                            "America/Santa_Isabel": new Date(2011,3,5,8,0,0,0),
                            "America/Havana": new Date(2012,2,10,2,0,0,0),
                            "America/New_York": new Date(2012,2,10,7,0,0,0),
                            "Europe/Helsinki": new Date(2013,2,31,5,0,0,0),
                            "Pacific/Auckland": new Date(2011,8,26,7,0,0,0),
                            "America/Halifax": new Date(2011,2,13,6,0,0,0),
                            "America/Goose_Bay": new Date(2011,2,13,2,1,0,0),
                            "America/Miquelon": new Date(2011,2,13,5,0,0,0),
                            "America/Godthab": new Date(2011,2,27,1,0,0,0),
                            "Europe/Moscow": b,
                            "Asia/Amman": new Date(2013,2,29,1,0,0,0),
                            "Asia/Beirut": new Date(2013,2,31,2,0,0,0),
                            "Asia/Damascus": new Date(2013,3,6,2,0,0,0),
                            "Asia/Jerusalem": new Date(2013,2,29,5,0,0,0),
                            "Asia/Yekaterinburg": b,
                            "Asia/Omsk": b,
                            "Asia/Krasnoyarsk": b,
                            "Asia/Irkutsk": b,
                            "Asia/Yakutsk": b,
                            "Asia/Vladivostok": b,
                            "Asia/Baku": new Date(2013,2,31,4,0,0),
                            "Asia/Yerevan": new Date(2013,2,31,3,0,0),
                            "Asia/Kamchatka": b,
                            "Asia/Gaza": new Date(2010,2,27,4,0,0),
                            "Africa/Cairo": new Date(2010,4,1,3,0,0),
                            "Europe/Minsk": b,
                            "Pacific/Apia": new Date(2010,10,1,1,0,0,0),
                            "Pacific/Fiji": new Date(2010,11,1,0,0,0),
                            "Australia/Perth": new Date(2008,10,1,1,0,0,0)
                        }[a]
                    }
                }
            }();
            c.TimeZone = function(a) {
                var b = {
                    "America/Denver": ["America/Denver", "America/Mazatlan"],
                    "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                    "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                    "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                    "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                    "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                    "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                    "America/New_York": ["America/Havana", "America/New_York"],
                    "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                    "America/Godthab": ["America/Miquelon", "America/Godthab"],
                    "Asia/Dubai": ["Europe/Moscow"],
                    "Asia/Dhaka": ["Asia/Yekaterinburg"],
                    "Asia/Jakarta": ["Asia/Omsk"],
                    "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                    "Asia/Tokyo": ["Asia/Irkutsk"],
                    "Australia/Brisbane": ["Asia/Yakutsk"],
                    "Pacific/Noumea": ["Asia/Vladivostok"],
                    "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                    "Pacific/Tongatapu": ["Pacific/Apia"],
                    "Asia/Baghdad": ["Europe/Minsk"],
                    "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                    "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                }
                  , d = a;
                a = function() {
                    for (var a = b[d], e = a.length, f = 0, h; f < e; f += 1)
                        if (h = a[f],
                        c.date_is_dst(c.dst_start_for(h))) {
                            d = h;
                            break
                        }
                }
                ;
                "undefined" !== typeof b[d] && a();
                return {
                    name: function() {
                        return d
                    }
                }
            }
            ;
            c.olson = {};
            c.olson.timezones = {
                "-720,0": "Pacific/Majuro",
                "-660,0": "Pacific/Pago_Pago",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Santiago",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Tarawa",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            };
            b.jstz = c
        }
        )()
    })
      , wa = window
      , P = navigator
      , Ma = screen
      , lb = document
      , ab = pa(function(a) {
        (function() {
            var b = {
                rotl: function(a, b) {
                    return a << b | a >>> 32 - b
                },
                rotr: function(a, b) {
                    return a << 32 - b | a >>> b
                },
                endian: function(a) {
                    if (a.constructor == Number)
                        return b.rotl(a, 8) & 16711935 | b.rotl(a, 24) & 4278255360;
                    for (var c = 0; c < a.length; c++)
                        a[c] = b.endian(a[c]);
                    return a
                },
                randomBytes: function(a) {
                    for (var b = []; 0 < a; a--)
                        b.push(Math.floor(256 * Math.random()));
                    return b
                },
                bytesToWords: function(a) {
                    for (var b = [], c = 0, f = 0; c < a.length; c++,
                    f += 8)
                        b[f >>> 5] |= a[c] << 24 - f % 32;
                    return b
                },
                wordsToBytes: function(a) {
                    for (var b = [], c = 0; c < 32 * a.length; c += 8)
                        b.push(a[c >>> 5] >>> 24 - c % 32 & 255);
                    return b
                },
                bytesToHex: function(a) {
                    for (var b = [], c = 0; c < a.length; c++)
                        b.push((a[c] >>> 4).toString(16)),
                        b.push((a[c] & 15).toString(16));
                    return b.join("")
                },
                hexToBytes: function(a) {
                    for (var b = [], c = 0; c < a.length; c += 2)
                        b.push(parseInt(a.substr(c, 2), 16));
                    return b
                },
                bytesToBase64: function(a) {
                    for (var b = [], c = 0; c < a.length; c += 3)
                        for (var f = a[c] << 16 | a[c + 1] << 8 | a[c + 2], h = 0; 4 > h; h++)
                            8 * c + 6 * h <= 8 * a.length ? b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - h) & 63)) : b.push("=");
                    return b.join("")
                },
                base64ToBytes: function(a) {
                    a = a.replace(/[^A-Z0-9+\/]/ig, "");
                    for (var b = [], c = 0, f = 0; c < a.length; f = ++c % 4)
                        0 != f && b.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c - 1)) & Math.pow(2, -2 * f + 8) - 1) << 2 * f | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c)) >>> 6 - 2 * f);
                    return b
                }
            };
            a.exports = b
        }
        )()
    })
      , bb = {
        utf8: {
            stringToBytes: function(a) {
                return bb.bin.stringToBytes(unescape(encodeURIComponent(a)))
            },
            bytesToString: function(a) {
                return decodeURIComponent(escape(bb.bin.bytesToString(a)))
            }
        },
        bin: {
            stringToBytes: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    b.push(a.charCodeAt(c) & 255);
                return b
            },
            bytesToString: function(a) {
                for (var b = [], c = 0; c < a.length; c++)
                    b.push(String.fromCharCode(a[c]));
                return b.join("")
            }
        }
    }
      , ed = bb
      , Vd = pa(function(a) {
        (function() {
            var b = ed.utf8
              , c = ed.bin
              , e = function(a) {
                a.constructor == String && (a = b.stringToBytes(a));
                var c = ab.bytesToWords(a)
                  , d = 8 * a.length;
                a = [];
                var e = 1732584193
                  , f = -271733879
                  , m = -1732584194
                  , q = 271733878
                  , n = -1009589776;
                c[d >> 5] |= 128 << 24 - d % 32;
                c[(d + 64 >>> 9 << 4) + 15] = d;
                for (d = 0; d < c.length; d += 16) {
                    for (var r = e, u = f, C = m, D = q, E = n, w = 0; 80 > w; w++) {
                        if (16 > w)
                            a[w] = c[d + w];
                        else {
                            var z = a[w - 3] ^ a[w - 8] ^ a[w - 14] ^ a[w - 16];
                            a[w] = z << 1 | z >>> 31
                        }
                        z = (e << 5 | e >>> 27) + n + (a[w] >>> 0) + (20 > w ? (f & m | ~f & q) + 1518500249 : 40 > w ? (f ^ m ^ q) + 1859775393 : 60 > w ? (f & m | f & q | m & q) - 1894007588 : (f ^ m ^ q) - 899497514);
                        n = q;
                        q = m;
                        m = f << 30 | f >>> 2;
                        f = e;
                        e = z
                    }
                    e += r;
                    f += u;
                    m += C;
                    q += D;
                    n += E
                }
                return [e, f, m, q, n]
            }
              , d = function(a, b) {
                a = ab.wordsToBytes(e(a));
                return b && b.asBytes ? a : b && b.asString ? c.bytesToString(a) : ab.bytesToHex(a)
            };
            d._blocksize = 16;
            d._digestsize = 20;
            a.exports = d
        }
        )()
    })
      , Xe = Math.max
      , zd = function(a) {
        return function(b, c, e) {
            var d = Object(b);
            if (!ia(b)) {
                var f = na(c);
                b = Ha(b);
                c = function(a) {
                    return f(d[a], a, d)
                }
            }
            c = a(b, c, e);
            return -1 < c ? d[f ? b[c] : c] : void 0
        }
    }(function(a, b, c) {
        var e = null == a ? 0 : a.length;
        if (!e)
            return -1;
        c = null == c ? 0 : gc(c);
        0 > c && (c = Xe(e + c, 0));
        a: {
            b = na(b);
            e = a.length;
            for (c += -1; ++c < e; )
                if (b(a[c], c, a)) {
                    a = c;
                    break a
                }
            a = -1
        }
        return a
    })
      , Bd = window
      , fd = function() {
        try {
            var a = ja(Object, "defineProperty");
            a({}, "", {});
            return a
        } catch (b) {}
    }()
      , Dd = function(a, b) {
        var c = {};
        b = na(b);
        Sc(a, function(a, d, f) {
            a = b(a, d, f);
            "__proto__" == d && fd ? fd(c, d, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0
            }) : c[d] = a
        });
        return c
    }
      , Fd = function(a) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {}
        }
    }
      , gd = pa(function(a) {
        var b = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (b) {
            var c = new Uint8Array(16);
            a.exports = function() {
                b(c);
                return c
            }
        } else {
            var e = Array(16);
            a.exports = function() {
                for (var a = 0, b; 16 > a; a++)
                    0 === (a & 3) && (b = 4294967296 * Math.random()),
                    e[a] = b >>> ((a & 3) << 3) & 255;
                return e
            }
        }
    })
      , C = []
      , Ea = 0;
    for (; 256 > Ea; ++Ea)
        C[Ea] = (Ea + 256).toString(16).substr(1);
    var hd = function(a, b) {
        b = b || 0;
        return [C[a[b++]], C[a[b++]], C[a[b++]], C[a[b++]], "-", C[a[b++]], C[a[b++]], "-", C[a[b++]], C[a[b++]], "-", C[a[b++]], C[a[b++]], "-", C[a[b++]], C[a[b++]], C[a[b++]], C[a[b++]], C[a[b++]], C[a[b++]]].join("")
    }, id, cb, db = 0, eb = 0, N = function(a, b, c) {
        c = b && c || 0;
        "string" == typeof a && (b = "binary" === a ? Array(16) : null,
        a = null);
        a = a || {};
        a = a.random || (a.rng || gd)();
        a[6] = a[6] & 15 | 64;
        a[8] = a[8] & 63 | 128;
        if (b)
            for (var e = 0; 16 > e; ++e)
                b[c + e] = a[e];
        return b || hd(a)
    }, fb = N;
    fb.v1 = function(a, b, c) {
        c = b && c || 0;
        var e = b || [];
        a = a || {};
        var d = a.node || id
          , f = void 0 !== a.clockseq ? a.clockseq : cb;
        if (null == d || null == f) {
            var h = gd();
            null == d && (d = id = [h[0] | 1, h[1], h[2], h[3], h[4], h[5]]);
            null == f && (f = cb = (h[6] << 8 | h[7]) & 16383)
        }
        h = void 0 !== a.msecs ? a.msecs : (new Date).getTime();
        var g = void 0 !== a.nsecs ? a.nsecs : eb + 1
          , k = h - db + (g - eb) / 1E4;
        0 > k && void 0 === a.clockseq && (f = f + 1 & 16383);
        (0 > k || h > db) && void 0 === a.nsecs && (g = 0);
        if (1E4 <= g)
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        db = h;
        eb = g;
        cb = f;
        h += 122192928E5;
        a = (1E4 * (h & 268435455) + g) % 4294967296;
        e[c++] = a >>> 24 & 255;
        e[c++] = a >>> 16 & 255;
        e[c++] = a >>> 8 & 255;
        e[c++] = a & 255;
        a = h / 4294967296 * 1E4 & 268435455;
        e[c++] = a >>> 8 & 255;
        e[c++] = a & 255;
        e[c++] = a >>> 24 & 15 | 16;
        e[c++] = a >>> 16 & 255;
        e[c++] = f >>> 8 | 128;
        e[c++] = f & 255;
        for (f = 0; 6 > f; ++f)
            e[c + f] = d[f];
        return b ? b : hd(e)
    }
    ;
    fb.v4 = N;
    var Td = fb
      , Ye = Object.prototype.hasOwnProperty
      , nb = function(a, b) {
        return null != a && Ye.call(a, b)
    }
      , Ze = function(a, b) {
        for (var c = -1, e = null == a ? 0 : a.length; ++c < e; )
            if (!b(a[c], c, a))
                return !1;
        return !0
    }
      , $e = function(a, b) {
        var c = !0;
        Sa(a, function(a, d, f) {
            return c = !!b(a, d, f)
        });
        return c
    }
      , Na = function(a, b, c) {
        var e = u(a) ? Ze : $e, d;
        if (d = c)
            if (d = b,
            I(c)) {
                var f = H(d);
                d = ("number" == f ? ia(c) && Qb(d, c.length) : "string" == f && d in c) ? Ta(c[d], a) : !1
            } else
                d = !1;
        d && (b = void 0);
        return e(a, na(b))
    }
      , Gc = function(a) {
        for (var b = -1, c = null == a ? 0 : a.length, e = 0, d = []; ++b < c; ) {
            var f = a[b];
            f && (d[e++] = f)
        }
        return d
    }
      , Nd = Qc(Object.getPrototypeOf, Object)
      , Ac = Function.prototype.toString
      , Od = Object.prototype.hasOwnProperty
      , Pd = Ac.call(Object)
      , Z = window;
    if (Z.GlobalSnowplowNamespace && 0 < Z.GlobalSnowplowNamespace.length) {
        var jd = Z.GlobalSnowplowNamespace.shift();
        var kd = Z[jd];
        kd.q = new Hc(kd.q,jd)
    } else
        Z._snaq = Z._snaq || [],
        Z._snaq = new Hc(Z._snaq,"_snaq")
}
)()
