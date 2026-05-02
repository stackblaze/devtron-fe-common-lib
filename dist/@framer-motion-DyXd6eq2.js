import { Ca as e, Da as t, Oa as n, Sa as r, Ta as i, _a as a, ba as o, ga as s, ha as c, ka as l, va as u, wa as d, xa as f, ya as p } from "./@code-editor-DlKycEv5.js";
import { useContext as m, useEffect as h, useInsertionEffect as g, useRef as _, useState as v } from "react";
//#region node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function y(e) {
	let t = l(() => o(e)), { isStatic: r } = m(n);
	if (r) {
		let [, n] = v(e);
		h(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function b(n, i) {
	let a = y(i()), o = () => a.set(i());
	return o(), t(() => {
		let t = () => e.preRender(o, !1, !0), i = n.map((e) => e.on("change", t));
		return () => {
			i.forEach((e) => e()), r(o);
		};
	}), a;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function x(e, ...t) {
	let n = e.length;
	function r() {
		let r = "";
		for (let i = 0; i < n; i++) {
			r += e[i];
			let n = t[i];
			n && (r += f(n) ? n.get() : n);
		}
		return r;
	}
	return b(t.filter(f), r);
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-spring.mjs
function S(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
function C(r, i = {}) {
	let { isStatic: a } = m(n), o = _(null), c = y(f(r) ? S(r.get()) : r), l = _(c.get()), u = _(() => {}), p = () => {
		let e = o.current;
		e && e.time === 0 && e.sample(d.delta), h(), o.current = s({
			keyframes: [c.get(), l.current],
			velocity: c.getVelocity(),
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...i,
			onUpdate: u.current
		});
	}, h = () => {
		o.current && o.current.stop();
	};
	return g(() => c.attach((t, n) => a ? n(t) : (l.current = t, u.current = n, e.update(p), c.get()), h), [JSON.stringify(i)]), t(() => {
		if (f(r)) return r.on("change", (e) => c.set(S(e)));
	}, [c]), c;
}
//#endregion
//#region node_modules/framer-motion/dist/es/utils/transform.mjs
var w = (e) => e && typeof e == "object" && e.mix, T = (e) => w(e) ? e.mix : void 0;
function E(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n], c = a(i, o, {
		mixer: T(o[0]),
		...s
	});
	return t ? c(r) : c;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-computed.mjs
function D(e) {
	p.current = [], e();
	let t = b(p.current, e);
	return p.current = void 0, t;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-transform.mjs
function O(e, t, n, r) {
	if (typeof e == "function") return D(e);
	let i = typeof t == "function" ? t : E(t, n, r);
	return Array.isArray(e) ? k(e, i) : k([e], ([e]) => i(e));
}
function k(e, t) {
	let n = l(() => []);
	return b(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function A(e) {
	e.values.forEach((e) => e.stop());
}
function j(e, t) {
	[...t].reverse().forEach((n) => {
		let r = e.getVariant(n);
		r && u(e, r), e.variantChildren && e.variantChildren.forEach((e) => {
			j(e, t);
		});
	});
}
function M(e, t) {
	if (Array.isArray(t)) return j(e, t);
	if (typeof t == "string") return j(e, [t]);
	u(e, t);
}
function N() {
	let e = !1, t = /* @__PURE__ */ new Set(), n = {
		subscribe(e) {
			return t.add(e), () => void t.delete(e);
		},
		start(n, r) {
			i(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
			let a = [];
			return t.forEach((e) => {
				a.push(c(e, n, { transitionOverride: r }));
			}), Promise.all(a);
		},
		set(n) {
			return i(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach((e) => {
				M(e, n);
			});
		},
		stop() {
			t.forEach((e) => {
				A(e);
			});
		},
		mount() {
			return e = !0, () => {
				e = !1, n.stop();
			};
		}
	};
	return n;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function P() {
	let e = l(N);
	return t(e.mount, []), e;
}
var F = P;
//#endregion
export { x as a, C as i, P as n, y as o, O as r, F as t };
