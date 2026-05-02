import { o as e, t } from "./rolldown-runtime-BETGA6I9.js";
import { Bs as n, Hi as r, Ui as i } from "./@code-editor-DlKycEv5.js";
import { X as a } from "./@common-rjsf-B1o-Qjwl.js";
import o, { Component as s, createElement as c, createRef as l } from "react";
//#region node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
var u = /* @__PURE__ */ t(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), d = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(e) || x(e) === l;
		}
		function L(e) {
			return x(e) === u;
		}
		function R(e) {
			return x(e) === c;
		}
		function z(e) {
			return x(e) === s;
		}
		function B(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function V(e) {
			return x(e) === d;
		}
		function H(e) {
			return x(e) === i;
		}
		function U(e) {
			return x(e) === h;
		}
		function W(e) {
			return x(e) === m;
		}
		function G(e) {
			return x(e) === r;
		}
		function K(e) {
			return x(e) === o;
		}
		function q(e) {
			return x(e) === a;
		}
		function J(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = L, e.isContextConsumer = R, e.isContextProvider = z, e.isElement = B, e.isForwardRef = V, e.isFragment = H, e.isLazy = U, e.isMemo = W, e.isPortal = G, e.isProfiler = K, e.isStrictMode = q, e.isSuspense = J, e.isValidElementType = b, e.typeOf = x;
	})();
})), f = /* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = u() : t.exports = d();
})), p = /* @__PURE__ */ t(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), m = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), h = /* @__PURE__ */ t(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), g = /* @__PURE__ */ t(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = m(), i = {}, a = h();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), _ = /* @__PURE__ */ t(((e, t) => {
	var n = f(), r = p(), i = m(), a = h(), o = g(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = F(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function F(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), v = /* @__PURE__ */ t(((e, t) => {
	var n = m();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), y = /* @__PURE__ */ t(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = f();
		t.exports = _()(n.isElement, !0);
	} else t.exports = v()();
})), b = () => typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) ? "-webkit-sticky" : "sticky", x;
(function(e) {
	e.OBSERVED = "observed", e.REQUESTED = "requested";
})(x ||= {});
var S = class extends o.PureComponent {
	constructor(e) {
		super(e), n(this, "nodes", void 0), n(this, "getChildrenCache", void 0), n(this, "rowRenderCache", void 0), n(this, "rowRenderRange", void 0), n(this, "structureChanged", void 0), n(this, "elemRef", l()), n(this, "pendingScrollTop", void 0), n(this, "treeToRender", void 0), this.props.apiRef && this.props.apiRef(this), this.state = {
			scrollTop: 0,
			currNodePos: 0,
			scrollTick: !1
		}, this.nodes = [], this.structureChanged = !1, this.onScroll = this.onScroll.bind(this), this.getChildrenCache = {}, this.rowRenderCache = {}, this.rowRenderRange = void 0;
	}
	flattenTree(e, t = this.props, n = [], r = !1, i = !1, a = void 0, o = { totalHeight: 0 }) {
		let s = n.length, c = e.height === void 0 ? t.rowHeight : e.height, l = a === void 0 ? void 0 : n[a], { isSticky: u = !1, stickyTop: d = 0, zIndex: f = 0, node: p } = e, m = {
			id: p.id,
			isSticky: u,
			stickyTop: d,
			zIndex: f,
			node: p,
			top: o.totalHeight,
			isLeafNode: !1,
			meta: e.meta,
			parentIndex: a,
			parentInfo: l,
			depth: l === void 0 ? 0 : l.depth + 1,
			height: c,
			index: s,
			isFirstChild: r,
			isLastChild: i,
			totalHeight: 0
		};
		n.push(m), l !== void 0 && l.children.push(s), o.totalHeight += c;
		let h = t.getChildren(e.node, m);
		if (t.isModelImmutable) {
			let e = this.getChildrenCache[m.id];
			(h === void 0 || e !== h) && (delete this.rowRenderCache[m.id], this.getChildrenCache[m.id] = h, e && h && (h.length !== e.length || !h.every((t, n) => t.node.id === e[n].node.id)) && (this.structureChanged = !0, this.getBranchChildrenIds(h).forEach((e) => delete this.rowRenderCache[e])));
		} else this.structureChanged = !0;
		if (Array.isArray(h)) {
			m.children = [];
			for (let e = 0; e < h.length; e++) {
				let r = h[e];
				this.flattenTree(r, t, n, e === 0, e === h.length - 1, s, o);
			}
		} else m.isLeafNode = !0;
		return m.totalHeight = o.totalHeight - m.top, n;
	}
	getBranchChildrenIds(e, t = []) {
		return e && e.forEach((e) => {
			t.push(e.node.id), this.getBranchChildrenIds(this.getChildrenCache[e.node.id], t);
		}), t;
	}
	UNSAFE_componentWillMount() {
		this.refreshCachedMetadata(this.props), this.storeRenderTree(this.props, this.state);
	}
	treeDataUpdated(e) {
		return e.root !== this.props.root || e.getChildren !== this.props.getChildren || e.rowHeight !== this.props.rowHeight;
	}
	UNSAFE_componentWillReceiveProps(e) {
		this.treeDataUpdated(e) && this.refreshCachedMetadata(e), e.scrollIndex !== void 0 && e.scrollIndex >= 0 && this.scrollIndexIntoView(e.scrollIndex);
	}
	UNSAFE_componentWillUpdate(e, t) {
		(t.scrollTick === this.state.scrollTick || t.currNodePos !== this.state.currNodePos) && this.storeRenderTree(e, t);
	}
	getNode(e) {
		return this.nodes[this.getNodeIndex(e)]?.node;
	}
	getNodeIndex(e) {
		return this.nodes.findIndex((t) => t.id === e);
	}
	getPreviousNodeId(e) {
		let t = this.getNodeIndex(e);
		if (t !== -1) {
			let e = this.nodes[t - 1];
			if (e) return e.id;
		}
	}
	getNextNodeId(e) {
		let t = this.getNodeIndex(e);
		if (t !== -1) {
			let e = this.nodes[t + 1];
			if (e) return e.id;
		}
	}
	isNodeVisible(e, t = !1) {
		return this.isIndexVisible(this.getNodeIndex(e), t);
	}
	isIndexVisible(e, t = !1) {
		let n, r = this.nodes[e];
		if (!r) return !1;
		if (r.isSticky && e === this.state.currNodePos || this.getParentPath(this.state.currNodePos).includes(this.nodes[e])) return !0;
		let i = this.getScrollTop();
		if (t ? this.elemRef.current && (n = i <= r.top + r.height - r.stickyTop && i + this.props.height >= r.top) : n = this.isIndexInViewport(e), n) {
			let n = this.getParentPath(e, !1);
			for (let e = 0; e < n.length; e++) {
				let a = n[e];
				if (a.isSticky && (!t && a.stickyTop + a.height > r.top - i || t && a.stickyTop + a.height > r.top + r.height - i)) return !1;
			}
			return !0;
		}
		return !1;
	}
	isNodeInViewport(e) {
		return this.isIndexInViewport(this.getNodeIndex(e));
	}
	isIndexInViewport(e) {
		let t = this.nodes[e];
		if (!t || !this.elemRef) return !1;
		let n = this.getScrollTop();
		return n <= t.top - t.stickyTop && n + this.props.height >= t.top + t.height;
	}
	getNodeTop(e) {
		return this.getIndexTop(this.getNodeIndex(e));
	}
	getIndexTop(e) {
		let t = this.nodes[e];
		return t ? t.top : -1;
	}
	getScrollTop() {
		return this.elemRef.current ? this.elemRef.current.scrollTop : -1;
	}
	getScrollLeft() {
		return this.elemRef.current ? this.elemRef.current.scrollLeft : -1;
	}
	setScrollTop(e) {
		isNaN(e) || this.setScrollTopAndClosestNode(e, this.state.currNodePos, x.REQUESTED);
	}
	setScrollLeft(e) {
		!isNaN(e) && this.elemRef.current && (this.elemRef.current.scrollLeft = e);
	}
	scrollNodeIntoView(e, t = !0) {
		this.scrollIndexIntoView(this.getNodeIndex(e), t);
	}
	scrollIndexIntoView(e, t = !0) {
		let n = this.nodes[e];
		if (n !== void 0) {
			let r;
			if (t) if (n.isSticky) r = n.top - n.stickyTop;
			else {
				let t = this.getParentPath(e, !1);
				for (let e = 0; e < t.length; e++) {
					let i = t[e];
					if (i.isSticky) {
						r = n.top - i.stickyTop - i.height;
						break;
					}
				}
				r === void 0 && (r = n.top);
			}
			else r = n.top - this.props.height + n.height;
			this.setScrollTop(r);
		}
	}
	componentDidUpdate(e, t) {
		if (this.state.scrollReason === x.REQUESTED && this.elemRef.current && this.state.scrollTop >= 0 && this.state.scrollTop !== this.elemRef.current.scrollTop && (this.elemRef.current.scrollTop = this.state.scrollTop), this.props.onRowsRendered !== void 0 && (t.currNodePos !== this.state.currNodePos || this.treeDataUpdated(e))) {
			let e = this.rowRenderRange, t = this.nodes[e.visibleStart], n = this.nodes[e.visibleEnd];
			this.props.onRowsRendered({
				overscanStartIndex: e.start,
				overscanStopIndex: e.end,
				startIndex: e.visibleStart,
				stopIndex: e.visibleEnd,
				startNode: t && t,
				endNode: n && n,
				nodes: this.nodes
			});
		}
	}
	refreshCachedMetadata(e) {
		this.structureChanged = !1, this.nodes = this.flattenTree(e.root, e), this.structureChanged && this.elemRef && this.setScrollTopAndClosestNode(this.pendingScrollTop || this.getScrollTop(), 0, x.REQUESTED);
	}
	recomputeTree() {
		this.props.root !== void 0 && this.props.getChildren !== void 0 && (this.refreshCachedMetadata(this.props), this.forceUpdate());
	}
	storeRenderTree(e, t) {
		this.treeToRender = this.renderParentTree(e, t);
	}
	forceUpdate() {
		this.getChildrenCache = {}, this.rowRenderCache = {}, this.storeRenderTree(this.props, this.state), super.forceUpdate();
	}
	renderParentTree(e, t) {
		this.rowRenderRange = this.getRenderRowRange(e, t);
		let n = this.getParentPath(this.rowRenderRange.start), r = /* @__PURE__ */ new Set();
		for (let e = 0; e < n.length; e++) r.add(n[e].index);
		for (let e = this.rowRenderRange.start; e <= this.rowRenderRange.end; e++) r.add(this.nodes[e].index);
		return this.props.renderRoot ? o.createElement("div", {
			className: "rv-sticky-node-list",
			style: {
				width: "100%",
				position: "absolute",
				top: 0
			}
		}, this.renderChildWithChildren(e, t, this.nodes[0], 0, r)) : this.renderParentContainer(e, t, this.nodes[0], r);
	}
	renderParentContainer(e, t, n, r) {
		return o.createElement("div", {
			className: "rv-sticky-node-list",
			style: {
				position: "absolute",
				width: "100%",
				height: n.totalHeight - n.height
			}
		}, this.renderChildren(e, t, n, r));
	}
	getChildContainerStyle(e, t) {
		return {
			position: "absolute",
			top: t,
			height: e.totalHeight,
			width: "100%"
		};
	}
	renderChildWithChildren(e, t, n, r, i) {
		return o.createElement("div", {
			key: `rv-node-${n.id}`,
			className: "rv-sticky-parent-node",
			style: this.getChildContainerStyle(n, r)
		}, this.renderNode(e, t, n, this.getClientNodeStyle(n)), this.renderParentContainer(e, t, n, i));
	}
	getClientNodeStyle(e) {
		let t = { height: e.height };
		return e.isSticky && (t.position = b(), t.top = e.stickyTop, t.zIndex = e.zIndex), t;
	}
	getClientLeafNodeStyle(e, t) {
		return {
			position: "absolute",
			top: t,
			height: e.height,
			width: "100%"
		};
	}
	renderChildren(e, t, n, r) {
		let i = [], a = 0;
		return n.children.forEach((n) => {
			let s = this.nodes[n];
			r.has(n) && ("children" in s && s.children.length > 0 ? i.push(this.renderChildWithChildren(e, t, s, a, r)) : s.isSticky || e.wrapAllLeafNodes ? i.push(o.createElement("div", {
				className: "rv-sticky-leaf-node",
				key: `rv-node-${s.id}`,
				style: this.getChildContainerStyle(s, a)
			}, this.renderNode(e, t, s, this.getClientNodeStyle(s)))) : i.push(this.renderNode(e, t, s, this.getClientLeafNodeStyle(s, a)))), a += s.totalHeight;
		}), i;
	}
	renderNode(e, t, n, r) {
		if (e.isModelImmutable && this.rowRenderCache[n.id]) return this.rowRenderCache[n.id];
		let i = e.rowRenderer({
			node: n.node,
			nodeInfo: n,
			style: r,
			meta: e.meta
		});
		return e.isModelImmutable && (this.rowRenderCache[n.id] = i), i;
	}
	getRenderRowRange(e, t) {
		let n = e.overscanRowCount > 0 ? e.overscanRowCount : 1, r = t.currNodePos - n;
		r < 0 && (r = 0);
		let i = t.currNodePos + 1;
		for (; this.nodes[i] && this.nodes[i].top < t.scrollTop + e.height;) i++;
		let a = i + n;
		return a > this.nodes.length - 1 && (a = this.nodes.length - 1), {
			start: r,
			end: a,
			visibleStart: t.currNodePos,
			visibleEnd: i
		};
	}
	getParentPath(e, t = !0) {
		let n = this.nodes[e], r = [];
		for (; n;) n = this.nodes[n.parentIndex], n && r.push(n);
		return t ? r.reverse() : r;
	}
	forwardSearch(e, t) {
		let n = this.nodes;
		for (let r = t; r < n.length; r++) if (n[r].top >= e) return r;
		return n.length - 1;
	}
	backwardSearch(e, t) {
		let n = this.nodes;
		for (let r = Math.min(t, Math.max(n.length - 1, 0)); r >= 0; r--) if (n[r].top <= e) return r;
		return 0;
	}
	setScrollTopAndClosestNode(e, t, n) {
		if (e === this.state.scrollTop || (this.elemRef.current && e >= this.elemRef.current.scrollHeight - this.elemRef.current.offsetHeight && (e = this.elemRef.current.scrollHeight - this.elemRef.current.offsetHeight), e === this.state.scrollTop)) return;
		let r;
		(e > this.state.scrollTop || t === 0) && (r = this.forwardSearch(e, t)), e < this.state.scrollTop && r === void 0 && (r = this.backwardSearch(e, t)), this.pendingScrollTop = e, this.setState({
			currNodePos: r || 0,
			scrollTop: e,
			scrollReason: n
		}, () => {
			this.pendingScrollTop = void 0;
		});
	}
	onScroll(e) {
		let { scrollTop: t, scrollLeft: n } = e.target, r = this.state.scrollReason || x.OBSERVED;
		this.setScrollTopAndClosestNode(t, this.state.currNodePos, r), this.props.onScroll !== void 0 && this.props.onScroll({
			scrollTop: t,
			scrollLeft: n,
			scrollReason: r
		}), this.setState({
			scrollTick: !this.state.scrollTick,
			scrollReason: void 0
		});
	}
	render() {
		let e = {
			overflow: "auto",
			position: "relative"
		};
		return this.props.inlineWidthHeight !== !1 && (this.props.width && (e.width = this.props.width), this.props.height && (e.height = this.props.height)), o.createElement("div", {
			ref: this.elemRef,
			className: "rv-sticky-tree",
			style: e,
			onScroll: this.onScroll
		}, this.treeToRender);
	}
};
n(S, "defaultProps", {
	overscanRowCount: 10,
	renderRoot: !0,
	wrapAllLeafNodes: !1,
	isModelImmutable: !1
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function C(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, a(e, t);
}
//#endregion
//#region node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var w = /* @__PURE__ */ e(y()), T = (function() {
	if (typeof Map < "u") return Map;
	function e(e, t) {
		var n = -1;
		return e.some(function(e, r) {
			return e[0] === t ? (n = r, !0) : !1;
		}), n;
	}
	return function() {
		function t() {
			this.__entries__ = [];
		}
		return Object.defineProperty(t.prototype, "size", {
			get: function() {
				return this.__entries__.length;
			},
			enumerable: !0,
			configurable: !0
		}), t.prototype.get = function(t) {
			var n = e(this.__entries__, t), r = this.__entries__[n];
			return r && r[1];
		}, t.prototype.set = function(t, n) {
			var r = e(this.__entries__, t);
			~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n]);
		}, t.prototype.delete = function(t) {
			var n = this.__entries__, r = e(n, t);
			~r && n.splice(r, 1);
		}, t.prototype.has = function(t) {
			return !!~e(this.__entries__, t);
		}, t.prototype.clear = function() {
			this.__entries__.splice(0);
		}, t.prototype.forEach = function(e, t) {
			t === void 0 && (t = null);
			for (var n = 0, r = this.__entries__; n < r.length; n++) {
				var i = r[n];
				e.call(t, i[1], i[0]);
			}
		}, t;
	}();
})(), E = typeof window < "u" && typeof document < "u" && window.document === document, D = (function() {
	return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), O = (function() {
	return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(D) : function(e) {
		return setTimeout(function() {
			return e(Date.now());
		}, 1e3 / 60);
	};
})(), k = 2;
function A(e, t) {
	var n = !1, r = !1, i = 0;
	function a() {
		n && (n = !1, e()), r && s();
	}
	function o() {
		O(a);
	}
	function s() {
		var e = Date.now();
		if (n) {
			if (e - i < k) return;
			r = !0;
		} else n = !0, r = !1, setTimeout(o, t);
		i = e;
	}
	return s;
}
var j = 20, M = [
	"top",
	"right",
	"bottom",
	"left",
	"width",
	"height",
	"size",
	"weight"
], N = typeof MutationObserver < "u", P = function() {
	function e() {
		this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = A(this.refresh.bind(this), j);
	}
	return e.prototype.addObserver = function(e) {
		~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
	}, e.prototype.removeObserver = function(e) {
		var t = this.observers_, n = t.indexOf(e);
		~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
	}, e.prototype.refresh = function() {
		this.updateObservers_() && this.refresh();
	}, e.prototype.updateObservers_ = function() {
		var e = this.observers_.filter(function(e) {
			return e.gatherActive(), e.hasActive();
		});
		return e.forEach(function(e) {
			return e.broadcastActive();
		}), e.length > 0;
	}, e.prototype.connect_ = function() {
		!E || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), N ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
			attributes: !0,
			childList: !0,
			characterData: !0,
			subtree: !0
		})) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
	}, e.prototype.disconnect_ = function() {
		!E || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
	}, e.prototype.onTransitionEnd_ = function(e) {
		var t = e.propertyName, n = t === void 0 ? "" : t;
		M.some(function(e) {
			return !!~n.indexOf(e);
		}) && this.refresh();
	}, e.getInstance = function() {
		return this.instance_ ||= new e(), this.instance_;
	}, e.instance_ = null, e;
}(), F = (function(e, t) {
	for (var n = 0, r = Object.keys(t); n < r.length; n++) {
		var i = r[n];
		Object.defineProperty(e, i, {
			value: t[i],
			enumerable: !1,
			writable: !1,
			configurable: !0
		});
	}
	return e;
}), I = (function(e) {
	return e && e.ownerDocument && e.ownerDocument.defaultView || D;
}), L = q(0, 0, 0, 0);
function R(e) {
	return parseFloat(e) || 0;
}
function z(e) {
	return [...arguments].slice(1).reduce(function(t, n) {
		var r = e["border-" + n + "-width"];
		return t + R(r);
	}, 0);
}
function B(e) {
	for (var t = [
		"top",
		"right",
		"bottom",
		"left"
	], n = {}, r = 0, i = t; r < i.length; r++) {
		var a = i[r], o = e["padding-" + a];
		n[a] = R(o);
	}
	return n;
}
function V(e) {
	var t = e.getBBox();
	return q(0, 0, t.width, t.height);
}
function H(e) {
	var t = e.clientWidth, n = e.clientHeight;
	if (!t && !n) return L;
	var r = I(e).getComputedStyle(e), i = B(r), a = i.left + i.right, o = i.top + i.bottom, s = R(r.width), c = R(r.height);
	if (r.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= z(r, "left", "right") + a), Math.round(c + o) !== n && (c -= z(r, "top", "bottom") + o)), !W(e)) {
		var l = Math.round(s + a) - t, u = Math.round(c + o) - n;
		Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
	}
	return q(i.left, i.top, s, c);
}
var U = (function() {
	return typeof SVGGraphicsElement < "u" ? function(e) {
		return e instanceof I(e).SVGGraphicsElement;
	} : function(e) {
		return e instanceof I(e).SVGElement && typeof e.getBBox == "function";
	};
})();
function W(e) {
	return e === I(e).document.documentElement;
}
function G(e) {
	return E ? U(e) ? V(e) : H(e) : L;
}
function K(e) {
	var t = e.x, n = e.y, r = e.width, i = e.height, a = Object.create((typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object).prototype);
	return F(a, {
		x: t,
		y: n,
		width: r,
		height: i,
		top: n,
		right: t + r,
		bottom: i + n,
		left: t
	}), a;
}
function q(e, t, n, r) {
	return {
		x: e,
		y: t,
		width: n,
		height: r
	};
}
var J = function() {
	function e(e) {
		this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = q(0, 0, 0, 0), this.target = e;
	}
	return e.prototype.isActive = function() {
		var e = G(this.target);
		return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
	}, e.prototype.broadcastRect = function() {
		var e = this.contentRect_;
		return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
	}, e;
}(), ee = function() {
	function e(e, t) {
		var n = K(t);
		F(this, {
			target: e,
			contentRect: n
		});
	}
	return e;
}(), te = function() {
	function e(e, t, n) {
		if (this.activeObservations_ = [], this.observations_ = new T(), typeof e != "function") throw TypeError("The callback provided as parameter 1 is not a function.");
		this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n;
	}
	return e.prototype.observe = function(e) {
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		if (!(typeof Element > "u" || !(Element instanceof Object))) {
			if (!(e instanceof I(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
			var t = this.observations_;
			t.has(e) || (t.set(e, new J(e)), this.controller_.addObserver(this), this.controller_.refresh());
		}
	}, e.prototype.unobserve = function(e) {
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		if (!(typeof Element > "u" || !(Element instanceof Object))) {
			if (!(e instanceof I(e).Element)) throw TypeError("parameter 1 is not of type \"Element\".");
			var t = this.observations_;
			t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
		}
	}, e.prototype.disconnect = function() {
		this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
	}, e.prototype.gatherActive = function() {
		var e = this;
		this.clearActive(), this.observations_.forEach(function(t) {
			t.isActive() && e.activeObservations_.push(t);
		});
	}, e.prototype.broadcastActive = function() {
		if (this.hasActive()) {
			var e = this.callbackCtx_, t = this.activeObservations_.map(function(e) {
				return new ee(e.target, e.broadcastRect());
			});
			this.callback_.call(e, t, e), this.clearActive();
		}
	}, e.prototype.clearActive = function() {
		this.activeObservations_.splice(0);
	}, e.prototype.hasActive = function() {
		return this.activeObservations_.length > 0;
	}, e;
}(), Y = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new T(), X = function() {
	function e(t) {
		if (!(this instanceof e)) throw TypeError("Cannot call a class as a function.");
		if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
		var n = new te(t, P.getInstance(), this);
		Y.set(this, n);
	}
	return e;
}();
[
	"observe",
	"unobserve",
	"disconnect"
].forEach(function(e) {
	X.prototype[e] = function() {
		var t;
		return (t = Y.get(this))[e].apply(t, arguments);
	};
});
var ne = (function() {
	return D.ResizeObserver === void 0 ? X : D.ResizeObserver;
})(), re = [
	"client",
	"offset",
	"scroll",
	"bounds",
	"margin"
];
function Z(e) {
	var t = [];
	return re.forEach(function(n) {
		e[n] && t.push(n);
	}), t;
}
function Q(e, t) {
	var n = {};
	if (t.indexOf("client") > -1 && (n.client = {
		top: e.clientTop,
		left: e.clientLeft,
		width: e.clientWidth,
		height: e.clientHeight
	}), t.indexOf("offset") > -1 && (n.offset = {
		top: e.offsetTop,
		left: e.offsetLeft,
		width: e.offsetWidth,
		height: e.offsetHeight
	}), t.indexOf("scroll") > -1 && (n.scroll = {
		top: e.scrollTop,
		left: e.scrollLeft,
		width: e.scrollWidth,
		height: e.scrollHeight
	}), t.indexOf("bounds") > -1) {
		var r = e.getBoundingClientRect();
		n.bounds = {
			top: r.top,
			right: r.right,
			bottom: r.bottom,
			left: r.left,
			width: r.width,
			height: r.height
		};
	}
	if (t.indexOf("margin") > -1) {
		var i = getComputedStyle(e);
		n.margin = {
			top: i ? parseInt(i.marginTop) : 0,
			right: i ? parseInt(i.marginRight) : 0,
			bottom: i ? parseInt(i.marginBottom) : 0,
			left: i ? parseInt(i.marginLeft) : 0
		};
	}
	return n;
}
function ie(e) {
	return e && e.ownerDocument && e.ownerDocument.defaultView || window;
}
function ae(e) {
	return function(t) {
		var n, a;
		return a = n = /* @__PURE__ */ function(n) {
			C(a, n);
			function a() {
				var t, r = [...arguments];
				return t = n.call.apply(n, [this].concat(r)) || this, t.state = { contentRect: {
					entry: {},
					client: {},
					offset: {},
					scroll: {},
					bounds: {},
					margin: {}
				} }, t._animationFrameID = null, t._resizeObserver = null, t._node = null, t._window = null, t.measure = function(n) {
					var r = Q(t._node, e || Z(t.props));
					n && (r.entry = n[0].contentRect), t._animationFrameID = t._window.requestAnimationFrame(function() {
						t._resizeObserver !== null && (t.setState({ contentRect: r }), typeof t.props.onResize == "function" && t.props.onResize(r));
					});
				}, t._handleRef = function(e) {
					t._resizeObserver !== null && t._node !== null && t._resizeObserver.unobserve(t._node), t._node = e, t._window = ie(t._node);
					var n = t.props.innerRef;
					n && (typeof n == "function" ? n(t._node) : n.current = t._node), t._resizeObserver !== null && t._node !== null && t._resizeObserver.observe(t._node);
				}, t;
			}
			var o = a.prototype;
			return o.componentDidMount = function() {
				this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ne(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Q(this._node, e || Z(this.props))));
			}, o.componentWillUnmount = function() {
				this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
			}, o.render = function() {
				var e = this.props;
				return e.innerRef, e.onResize, c(t, i({}, r(e, ["innerRef", "onResize"]), {
					measureRef: this._handleRef,
					measure: this.measure,
					contentRect: this.state.contentRect
				}));
			}, a;
		}(s), n.propTypes = {
			client: w.default.bool,
			offset: w.default.bool,
			scroll: w.default.bool,
			bounds: w.default.bool,
			margin: w.default.bool,
			innerRef: w.default.oneOfType([w.default.object, w.default.func]),
			onResize: w.default.func
		}, a;
	};
}
var $ = ae()(function(e) {
	var t = e.measure, n = e.measureRef, r = e.contentRect, i = e.children;
	return i({
		measure: t,
		measureRef: n,
		contentRect: r
	});
});
$.displayName = "Measure", $.propTypes.children = w.default.func;
//#endregion
//#region node_modules/react-virtualized-sticky-tree/dist/mjs/src/AutoSizedStickyTree.js
var oe = class extends o.PureComponent {
	constructor(e) {
		super(e), this.state = {};
	}
	render() {
		return o.createElement($, {
			bounds: !0,
			onResize: (e) => {
				this.setState({
					width: e.bounds.width,
					height: e.bounds.height
				}), this.props.onResize !== void 0 && this.props.onResize(e);
			}
		}, ({ measureRef: e }) => o.createElement("div", {
			ref: e,
			className: this.props.className
		}, o.createElement(S, {
			ref: this.props.treeRef,
			width: this.state.width,
			height: this.state.height,
			...this.props
		})));
	}
};
//#endregion
export { y as n, oe as t };
