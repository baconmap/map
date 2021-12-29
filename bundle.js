/*! For license information please see bundle.js.LICENSE.txt */
(() => {
	var e, t, r, n, o, i, a, c = {
			282: (e, t, r) => {
				"use strict";
				var n = r(155),
					o = r(108);

				function i(e) {
					return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}
				var a, c, u = r(136).codes,
					s = u.ERR_AMBIGUOUS_ARGUMENT,
					l = u.ERR_INVALID_ARG_TYPE,
					f = u.ERR_INVALID_ARG_VALUE,
					p = u.ERR_INVALID_RETURN_VALUE,
					y = u.ERR_MISSING_ARGS,
					d = r(961),
					h = r(539).inspect,
					g = r(539).types,
					m = g.isPromise,
					v = g.isRegExp,
					b = Object.assign ? Object.assign : r(91).assign,
					w = Object.is ? Object.is : r(609);

				function A() {
					var e = r(158);
					a = e.isDeepEqual, c = e.isDeepStrictEqual
				}
				new Map;
				var S = !1,
					E = e.exports = P,
					j = {};

				function O(e) {
					if (e.message instanceof Error) throw e.message;
					throw new d(e)
				}

				function x(e, t, r, n) {
					if (!r) {
						var o = !1;
						if (0 === t) o = !0, n = "No value argument passed to `assert.ok()`";
						else if (n instanceof Error) throw n;
						var i = new d({
							actual: r,
							expected: !0,
							message: n,
							operator: "==",
							stackStartFn: e
						});
						throw i.generatedMessage = o, i
					}
				}

				function P() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					x.apply(void 0, [P, t.length].concat(t))
				}
				E.fail = function e(t, r, i, a, c) {
					var u, s = arguments.length;
					if (0 === s) u = "Failed";
					else if (1 === s) i = t, t = void 0;
					else {
						if (!1 === S) {
							S = !0;
							var l = n.emitWarning ? n.emitWarning : o.warn.bind(o);
							l("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")
						}
						2 === s && (a = "!=")
					}
					if (i instanceof Error) throw i;
					var f = {
						actual: t,
						expected: r,
						operator: void 0 === a ? "fail" : a,
						stackStartFn: c || e
					};
					void 0 !== i && (f.message = i);
					var p = new d(f);
					throw u && (p.message = u, p.generatedMessage = !0), p
				}, E.AssertionError = d, E.ok = P, E.equal = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					t != r && O({
						actual: t,
						expected: r,
						message: n,
						operator: "==",
						stackStartFn: e
					})
				}, E.notEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					t == r && O({
						actual: t,
						expected: r,
						message: n,
						operator: "!=",
						stackStartFn: e
					})
				}, E.deepEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					void 0 === a && A(), a(t, r) || O({
						actual: t,
						expected: r,
						message: n,
						operator: "deepEqual",
						stackStartFn: e
					})
				}, E.notDeepEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					void 0 === a && A(), a(t, r) && O({
						actual: t,
						expected: r,
						message: n,
						operator: "notDeepEqual",
						stackStartFn: e
					})
				}, E.deepStrictEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					void 0 === a && A(), c(t, r) || O({
						actual: t,
						expected: r,
						message: n,
						operator: "deepStrictEqual",
						stackStartFn: e
					})
				}, E.notDeepStrictEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					void 0 === a && A(), c(t, r) && O({
						actual: t,
						expected: r,
						message: n,
						operator: "notDeepStrictEqual",
						stackStartFn: e
					})
				}, E.strictEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					w(t, r) || O({
						actual: t,
						expected: r,
						message: n,
						operator: "strictEqual",
						stackStartFn: e
					})
				}, E.notStrictEqual = function e(t, r, n) {
					if (arguments.length < 2) throw new y("actual", "expected");
					w(t, r) && O({
						actual: t,
						expected: r,
						message: n,
						operator: "notStrictEqual",
						stackStartFn: e
					})
				};
				var k = function e(t, r, n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), r.forEach((function(e) {
						e in t && (void 0 !== n && "string" == typeof n[e] && v(t[e]) && t[e].test(n[e]) ? o[e] = n[e] : o[e] = t[e])
					}))
				};

				function I(e, t, r, n, o, i) {
					if (!(r in e) || !c(e[r], t[r])) {
						if (!n) {
							var a = new k(e, o),
								u = new k(t, o, e),
								s = new d({
									actual: a,
									expected: u,
									operator: "deepStrictEqual",
									stackStartFn: i
								});
							throw s.actual = e, s.expected = t, s.operator = i.name, s
						}
						O({
							actual: e,
							expected: t,
							message: n,
							operator: i.name,
							stackStartFn: i
						})
					}
				}

				function T(e, t, r, n) {
					if ("function" != typeof t) {
						if (v(t)) return t.test(e);
						if (2 === arguments.length) throw new l("expected", ["Function", "RegExp"], t);
						if ("object" !== i(e) || null === e) {
							var o = new d({
								actual: e,
								expected: t,
								message: r,
								operator: "deepStrictEqual",
								stackStartFn: n
							});
							throw o.operator = n.name, o
						}
						var c = Object.keys(t);
						if (t instanceof Error) c.push("name", "message");
						else if (0 === c.length) throw new f("error", t, "may not be an empty object");
						return void 0 === a && A(), c.forEach((function(o) {
							"string" == typeof e[o] && v(t[o]) && t[o].test(e[o]) || I(e, t, o, r, c, n)
						})), !0
					}
					return void 0 !== t.prototype && e instanceof t || !Error.isPrototypeOf(t) && !0 === t.call({}, e)
				}

				function _(e) {
					if ("function" != typeof e) throw new l("fn", "Function", e);
					try {
						e()
					} catch (e) {
						return e
					}
					return j
				}

				function R(e) {
					return m(e) || null !== e && "object" === i(e) && "function" == typeof e.then && "function" == typeof e.catch
				}

				function F(e) {
					return Promise.resolve().then((function() {
						var t;
						if ("function" == typeof e) {
							if (!R(t = e())) throw new p("instance of Promise", "promiseFn", t)
						} else {
							if (!R(e)) throw new l("promiseFn", ["Function", "Promise"], e);
							t = e
						}
						return Promise.resolve().then((function() {
							return t
						})).then((function() {
							return j
						})).catch((function(e) {
							return e
						}))
					}))
				}

				function D(e, t, r, n) {
					if ("string" == typeof r) {
						if (4 === arguments.length) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
						if ("object" === i(t) && null !== t) {
							if (t.message === r) throw new s("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'))
						} else if (t === r) throw new s("error/message", 'The error "'.concat(t, '" is identical to the message.'));
						n = r, r = void 0
					} else if (null != r && "object" !== i(r) && "function" != typeof r) throw new l("error", ["Object", "Error", "Function", "RegExp"], r);
					if (t === j) {
						var o = "";
						r && r.name && (o += " (".concat(r.name, ")")), o += n ? ": ".concat(n) : ".";
						var a = "rejects" === e.name ? "rejection" : "exception";
						O({
							actual: void 0,
							expected: r,
							operator: e.name,
							message: "Missing expected ".concat(a).concat(o),
							stackStartFn: e
						})
					}
					if (r && !T(t, r, n, e)) throw t
				}

				function N(e, t, r, n) {
					if (t !== j) {
						if ("string" == typeof r && (n = r, r = void 0), !r || T(t, r)) {
							var o = n ? ": ".concat(n) : ".",
								i = "doesNotReject" === e.name ? "rejection" : "exception";
							O({
								actual: t,
								expected: r,
								operator: e.name,
								message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
								stackStartFn: e
							})
						}
						throw t
					}
				}

				function U() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					x.apply(void 0, [U, t.length].concat(t))
				}
				E.throws = function e(t) {
					for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
					D.apply(void 0, [e, _(t)].concat(n))
				}, E.rejects = function e(t) {
					for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
					return F(t).then((function(t) {
						return D.apply(void 0, [e, t].concat(n))
					}))
				}, E.doesNotThrow = function e(t) {
					for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
					N.apply(void 0, [e, _(t)].concat(n))
				}, E.doesNotReject = function e(t) {
					for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
					return F(t).then((function(t) {
						return N.apply(void 0, [e, t].concat(n))
					}))
				}, E.ifError = function e(t) {
					if (null != t) {
						var r = "ifError got unwanted exception: ";
						"object" === i(t) && "string" == typeof t.message ? 0 === t.message.length && t.constructor ? r += t.constructor.name : r += t.message : r += h(t);
						var n = new d({
								actual: t,
								expected: null,
								operator: "ifError",
								message: r,
								stackStartFn: e
							}),
							o = t.stack;
						if ("string" == typeof o) {
							var a = o.split("\n");
							a.shift();
							for (var c = n.stack.split("\n"), u = 0; u < a.length; u++) {
								var s = c.indexOf(a[u]);
								if (-1 !== s) {
									c = c.slice(0, s);
									break
								}
							}
							n.stack = "".concat(c.join("\n"), "\n").concat(a.join("\n"))
						}
						throw n
					}
				}, E.strict = b(U, E, {
					equal: E.strictEqual,
					deepEqual: E.deepStrictEqual,
					notEqual: E.notStrictEqual,
					notDeepEqual: E.notDeepStrictEqual
				}), E.strict.strict = E.strict
			},
			961: (e, t, r) => {
				"use strict";
				var n = r(155);

				function o(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function i(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}

				function a(e, t) {
					return !t || "object" !== y(t) && "function" != typeof t ? c(e) : t
				}

				function c(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}

				function u(e) {
					var t = "function" == typeof Map ? new Map : void 0;
					return (u = function(e) {
						if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
						var r;
						if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
						if (void 0 !== t) {
							if (t.has(e)) return t.get(e);
							t.set(e, n)
						}

						function n() {
							return l(e, arguments, p(this).constructor)
						}
						return n.prototype = Object.create(e.prototype, {
							constructor: {
								value: n,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), f(n, e)
					})(e)
				}

				function s() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}

				function l(e, t, r) {
					return (l = s() ? Reflect.construct : function(e, t, r) {
						var n = [null];
						n.push.apply(n, t);
						var o = new(Function.bind.apply(e, n));
						return r && f(o, r.prototype), o
					}).apply(null, arguments)
				}

				function f(e, t) {
					return (f = Object.setPrototypeOf || function(e, t) {
						return e.__proto__ = t, e
					})(e, t)
				}

				function p(e) {
					return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					})(e)
				}

				function y(e) {
					return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}
				var d = r(539).inspect,
					h = r(136).codes.ERR_INVALID_ARG_TYPE;

				function g(e, t, r) {
					return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
				}
				var m = "",
					v = "",
					b = "",
					w = "",
					A = {
						deepStrictEqual: "Expected values to be strictly deep-equal:",
						strictEqual: "Expected values to be strictly equal:",
						strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
						deepEqual: "Expected values to be loosely deep-equal:",
						equal: "Expected values to be loosely equal:",
						notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
						notStrictEqual: 'Expected "actual" to be strictly unequal to:',
						notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
						notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
						notEqual: 'Expected "actual" to be loosely unequal to:',
						notIdentical: "Values identical but not reference-equal:"
					};

				function S(e) {
					var t = Object.keys(e),
						r = Object.create(Object.getPrototypeOf(e));
					return t.forEach((function(t) {
						r[t] = e[t]
					})), Object.defineProperty(r, "message", {
						value: e.message
					}), r
				}

				function E(e) {
					return d(e, {
						compact: !1,
						customInspect: !1,
						depth: 1e3,
						maxArrayLength: 1 / 0,
						showHidden: !1,
						breakLength: 1 / 0,
						showProxy: !1,
						sorted: !0,
						getters: !0
					})
				}
				var j = function(e) {
					function t(e) {
						var r;
						if (function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, t), "object" !== y(e) || null === e) throw new h("options", "Object", e);
						var o = e.message,
							i = e.operator,
							u = e.stackStartFn,
							s = e.actual,
							l = e.expected,
							f = Error.stackTraceLimit;
						if (Error.stackTraceLimit = 0, null != o) r = a(this, p(t).call(this, String(o)));
						else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (m = "[34m", v = "[32m", w = "[39m", b = "[31m") : (m = "", v = "", w = "", b = "")), "object" === y(s) && null !== s && "object" === y(l) && null !== l && "stack" in s && s instanceof Error && "stack" in l && l instanceof Error && (s = S(s), l = S(l)), "deepStrictEqual" === i || "strictEqual" === i) r = a(this, p(t).call(this, function(e, t, r) {
							var o = "",
								i = "",
								a = 0,
								c = "",
								u = !1,
								s = E(e),
								l = s.split("\n"),
								f = E(t).split("\n"),
								p = 0,
								d = "";
							if ("strictEqual" === r && "object" === y(e) && "object" === y(t) && null !== e && null !== t && (r = "strictEqualObject"), 1 === l.length && 1 === f.length && l[0] !== f[0]) {
								var h = l[0].length + f[0].length;
								if (h <= 10) {
									if (!("object" === y(e) && null !== e || "object" === y(t) && null !== t || 0 === e && 0 === t)) return "".concat(A[r], "\n\n") + "".concat(l[0], " !== ").concat(f[0], "\n")
								} else if ("strictEqualObject" !== r && h < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
									for (; l[0][p] === f[0][p];) p++;
									p > 2 && (d = "\n  ".concat(function(e, t) {
										if (t = Math.floor(t), 0 == e.length || 0 == t) return "";
										var r = e.length * t;
										for (t = Math.floor(Math.log(t) / Math.log(2)); t;) e += e, t--;
										return e + e.substring(0, r - e.length)
									}(" ", p), "^"), p = 0)
								}
							}
							for (var S = l[l.length - 1], j = f[f.length - 1]; S === j && (p++ < 2 ? c = "\n  ".concat(S).concat(c) : o = S, l.pop(), f.pop(), 0 !== l.length && 0 !== f.length);) S = l[l.length - 1], j = f[f.length - 1];
							var O = Math.max(l.length, f.length);
							if (0 === O) {
								var x = s.split("\n");
								if (x.length > 30)
									for (x[26] = "".concat(m, "...").concat(w); x.length > 27;) x.pop();
								return "".concat(A.notIdentical, "\n\n").concat(x.join("\n"), "\n")
							}
							p > 3 && (c = "\n".concat(m, "...").concat(w).concat(c), u = !0), "" !== o && (c = "\n  ".concat(o).concat(c), o = "");
							var P = 0,
								k = A[r] + "\n".concat(v, "+ actual").concat(w, " ").concat(b, "- expected").concat(w),
								I = " ".concat(m, "...").concat(w, " Lines skipped");
							for (p = 0; p < O; p++) {
								var T = p - a;
								if (l.length < p + 1) T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(m, "...").concat(w), u = !0) : T > 3 && (i += "\n  ".concat(f[p - 2]), P++), i += "\n  ".concat(f[p - 1]), P++), a = p, o += "\n".concat(b, "-").concat(w, " ").concat(f[p]), P++;
								else if (f.length < p + 1) T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(m, "...").concat(w), u = !0) : T > 3 && (i += "\n  ".concat(l[p - 2]), P++), i += "\n  ".concat(l[p - 1]), P++), a = p, i += "\n".concat(v, "+").concat(w, " ").concat(l[p]), P++;
								else {
									var _ = f[p],
										R = l[p],
										F = R !== _ && (!g(R, ",") || R.slice(0, -1) !== _);
									F && g(_, ",") && _.slice(0, -1) === R && (F = !1, R += ","), F ? (T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(m, "...").concat(w), u = !0) : T > 3 && (i += "\n  ".concat(l[p - 2]), P++), i += "\n  ".concat(l[p - 1]), P++), a = p, i += "\n".concat(v, "+").concat(w, " ").concat(R), o += "\n".concat(b, "-").concat(w, " ").concat(_), P += 2) : (i += o, o = "", 1 !== T && 0 !== p || (i += "\n  ".concat(R), P++))
								}
								if (P > 20 && p < O - 2) return "".concat(k).concat(I, "\n").concat(i, "\n").concat(m, "...").concat(w).concat(o, "\n") + "".concat(m, "...").concat(w)
							}
							return "".concat(k).concat(u ? I : "", "\n").concat(i).concat(o).concat(c).concat(d)
						}(s, l, i)));
						else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
							var d = A[i],
								j = E(s).split("\n");
							if ("notStrictEqual" === i && "object" === y(s) && null !== s && (d = A.notStrictEqualObject), j.length > 30)
								for (j[26] = "".concat(m, "...").concat(w); j.length > 27;) j.pop();
							r = 1 === j.length ? a(this, p(t).call(this, "".concat(d, " ").concat(j[0]))) : a(this, p(t).call(this, "".concat(d, "\n\n").concat(j.join("\n"), "\n")))
						} else {
							var O = E(s),
								x = "",
								P = A[i];
							"notDeepEqual" === i || "notEqual" === i ? (O = "".concat(A[i], "\n\n").concat(O)).length > 1024 && (O = "".concat(O.slice(0, 1021), "...")) : (x = "".concat(E(l)), O.length > 512 && (O = "".concat(O.slice(0, 509), "...")), x.length > 512 && (x = "".concat(x.slice(0, 509), "...")), "deepEqual" === i || "equal" === i ? O = "".concat(P, "\n\n").concat(O, "\n\nshould equal\n\n") : x = " ".concat(i, " ").concat(x)), r = a(this, p(t).call(this, "".concat(O).concat(x)))
						}
						return Error.stackTraceLimit = f, r.generatedMessage = !o, Object.defineProperty(c(r), "name", {
							value: "AssertionError [ERR_ASSERTION]",
							enumerable: !1,
							writable: !0,
							configurable: !0
						}), r.code = "ERR_ASSERTION", r.actual = s, r.expected = l, r.operator = i, Error.captureStackTrace && Error.captureStackTrace(c(r), u), r.stack, r.name = "AssertionError", a(r)
					}
					var r, u;
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), t && f(e, t)
					}(t, e), r = t, (u = [{
						key: "toString",
						value: function() {
							return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
						}
					}, {
						key: d.custom,
						value: function(e, t) {
							return d(this, function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {},
										n = Object.keys(r);
									"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
										return Object.getOwnPropertyDescriptor(r, e).enumerable
									})))), n.forEach((function(t) {
										o(e, t, r[t])
									}))
								}
								return e
							}({}, t, {
								customInspect: !1,
								depth: 0
							}))
						}
					}]) && i(r.prototype, u), t
				}(u(Error));
				e.exports = j
			},
			136: (e, t, r) => {
				"use strict";

				function n(e) {
					return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function o(e) {
					return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					})(e)
				}

				function i(e, t) {
					return (i = Object.setPrototypeOf || function(e, t) {
						return e.__proto__ = t, e
					})(e, t)
				}
				var a, c, u = {};

				function s(e, t, r) {
					r || (r = Error);
					var a = function(r) {
						function a(r, i, c) {
							var u;
							return function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, a), (u = function(e, t) {
								return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
									if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e
								}(e) : t
							}(this, o(a).call(this, function(e, r, n) {
								return "string" == typeof t ? t : t(e, r, n)
							}(r, i, c)))).code = e, u
						}
						return function(e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									writable: !0,
									configurable: !0
								}
							}), t && i(e, t)
						}(a, r), a
					}(r);
					u[e] = a
				}

				function l(e, t) {
					if (Array.isArray(e)) {
						var r = e.length;
						return e = e.map((function(e) {
							return String(e)
						})), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
					}
					return "of ".concat(t, " ").concat(String(e))
				}
				s("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), s("ERR_INVALID_ARG_TYPE", (function(e, t, o) {
					var i, c, u, s, f;
					if (void 0 === a && (a = r(282)), a("string" == typeof e, "'name' must be a string"), "string" == typeof t && (c = "not ", t.substr(0, c.length) === c) ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be", function(e, t, r) {
							return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
						}(e, " argument")) u = "The ".concat(e, " ").concat(i, " ").concat(l(t, "type"));
					else {
						var p = ("number" != typeof f && (f = 0), f + ".".length > (s = e).length || -1 === s.indexOf(".", f) ? "argument" : "property");
						u = 'The "'.concat(e, '" ').concat(p, " ").concat(i, " ").concat(l(t, "type"))
					}
					return u + ". Received type ".concat(n(o))
				}), TypeError), s("ERR_INVALID_ARG_VALUE", (function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
					void 0 === c && (c = r(539));
					var o = c.inspect(t);
					return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(n, ". Received ").concat(o)
				}), TypeError, RangeError), s("ERR_INVALID_RETURN_VALUE", (function(e, t, r) {
					var o;
					return o = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)), "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(o, ".")
				}), TypeError), s("ERR_MISSING_ARGS", (function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					void 0 === a && (a = r(282)), a(t.length > 0, "At least one arg needs to be specified");
					var o = "The ",
						i = t.length;
					switch (t = t.map((function(e) {
							return '"'.concat(e, '"')
						})), i) {
						case 1:
							o += "".concat(t[0], " argument");
							break;
						case 2:
							o += "".concat(t[0], " and ").concat(t[1], " arguments");
							break;
						default:
							o += t.slice(0, i - 1).join(", "), o += ", and ".concat(t[i - 1], " arguments")
					}
					return "".concat(o, " must be specified")
				}), TypeError), e.exports.codes = u
			},
			158: (e, t, r) => {
				"use strict";

				function n(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						var r = [],
							n = !0,
							o = !1,
							i = void 0;
						try {
							for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
						} catch (e) {
							o = !0, i = e
						} finally {
							try {
								n || null == c.return || c.return()
							} finally {
								if (o) throw i
							}
						}
						return r
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}()
				}

				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}
				var i = void 0 !== /a/g.flags,
					a = function(e) {
						var t = [];
						return e.forEach((function(e) {
							return t.push(e)
						})), t
					},
					c = function(e) {
						var t = [];
						return e.forEach((function(e, r) {
							return t.push([r, e])
						})), t
					},
					u = Object.is ? Object.is : r(609),
					s = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
						return []
					},
					l = Number.isNaN ? Number.isNaN : r(360);

				function f(e) {
					return e.call.bind(e)
				}
				var p = f(Object.prototype.hasOwnProperty),
					y = f(Object.prototype.propertyIsEnumerable),
					d = f(Object.prototype.toString),
					h = r(539).types,
					g = h.isAnyArrayBuffer,
					m = h.isArrayBufferView,
					v = h.isDate,
					b = h.isMap,
					w = h.isRegExp,
					A = h.isSet,
					S = h.isNativeError,
					E = h.isBoxedPrimitive,
					j = h.isNumberObject,
					O = h.isStringObject,
					x = h.isBooleanObject,
					P = h.isBigIntObject,
					k = h.isSymbolObject,
					I = h.isFloat32Array,
					T = h.isFloat64Array;

				function _(e) {
					if (0 === e.length || e.length > 10) return !0;
					for (var t = 0; t < e.length; t++) {
						var r = e.charCodeAt(t);
						if (r < 48 || r > 57) return !0
					}
					return 10 === e.length && e >= Math.pow(2, 32)
				}

				function R(e) {
					return Object.keys(e).filter(_).concat(s(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))
				}

				function F(e, t) {
					if (e === t) return 0;
					for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
						if (e[o] !== t[o]) {
							r = e[o], n = t[o];
							break
						} return r < n ? -1 : n < r ? 1 : 0
				}

				function D(e, t, r, n) {
					if (e === t) return 0 !== e || !r || u(e, t);
					if (r) {
						if ("object" !== o(e)) return "number" == typeof e && l(e) && l(t);
						if ("object" !== o(t) || null === e || null === t) return !1;
						if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
					} else {
						if (null === e || "object" !== o(e)) return (null === t || "object" !== o(t)) && e == t;
						if (null === t || "object" !== o(t)) return !1
					}
					var a, c, s, f, p = d(e);
					if (p !== d(t)) return !1;
					if (Array.isArray(e)) {
						if (e.length !== t.length) return !1;
						var y = R(e),
							h = R(t);
						return y.length === h.length && U(e, t, r, n, 1, y)
					}
					if ("[object Object]" === p && (!b(e) && b(t) || !A(e) && A(t))) return !1;
					if (v(e)) {
						if (!v(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1
					} else if (w(e)) {
						if (!w(t) || (s = e, f = t, !(i ? s.source === f.source && s.flags === f.flags : RegExp.prototype.toString.call(s) === RegExp.prototype.toString.call(f)))) return !1
					} else if (S(e) || e instanceof Error) {
						if (e.message !== t.message || e.name !== t.name) return !1
					} else {
						if (m(e)) {
							if (r || !I(e) && !T(e)) {
								if (! function(e, t) {
										return e.byteLength === t.byteLength && 0 === F(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
									}(e, t)) return !1
							} else if (! function(e, t) {
									if (e.byteLength !== t.byteLength) return !1;
									for (var r = 0; r < e.byteLength; r++)
										if (e[r] !== t[r]) return !1;
									return !0
								}(e, t)) return !1;
							var _ = R(e),
								D = R(t);
							return _.length === D.length && U(e, t, r, n, 0, _)
						}
						if (A(e)) return !(!A(t) || e.size !== t.size) && U(e, t, r, n, 2);
						if (b(e)) return !(!b(t) || e.size !== t.size) && U(e, t, r, n, 3);
						if (g(e)) {
							if (c = t, (a = e).byteLength !== c.byteLength || 0 !== F(new Uint8Array(a), new Uint8Array(c))) return !1
						} else if (E(e) && ! function(e, t) {
								return j(e) ? j(t) && u(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t)) : O(e) ? O(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t) : x(e) ? x(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t) : P(e) ? P(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t) : k(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t)
							}(e, t)) return !1
					}
					return U(e, t, r, n, 0)
				}

				function N(e, t) {
					return t.filter((function(t) {
						return y(e, t)
					}))
				}

				function U(e, t, r, n, o, i) {
					if (5 === arguments.length) {
						i = Object.keys(e);
						var a = Object.keys(t);
						if (i.length !== a.length) return !1
					}
					for (var c = 0; c < i.length; c++)
						if (!p(t, i[c])) return !1;
					if (r && 5 === arguments.length) {
						var u = s(e);
						if (0 !== u.length) {
							var l = 0;
							for (c = 0; c < u.length; c++) {
								var f = u[c];
								if (y(e, f)) {
									if (!y(t, f)) return !1;
									i.push(f), l++
								} else if (y(t, f)) return !1
							}
							var d = s(t);
							if (u.length !== d.length && N(t, d).length !== l) return !1
						} else {
							var h = s(t);
							if (0 !== h.length && 0 !== N(t, h).length) return !1
						}
					}
					if (0 === i.length && (0 === o || 1 === o && 0 === e.length || 0 === e.size)) return !0;
					if (void 0 === n) n = {
						val1: new Map,
						val2: new Map,
						position: 0
					};
					else {
						var g = n.val1.get(e);
						if (void 0 !== g) {
							var m = n.val2.get(t);
							if (void 0 !== m) return g === m
						}
						n.position++
					}
					n.val1.set(e, n.position), n.val2.set(t, n.position);
					var v = G(e, t, r, i, n, o);
					return n.val1.delete(e), n.val2.delete(t), v
				}

				function W(e, t, r, n) {
					for (var o = a(e), i = 0; i < o.length; i++) {
						var c = o[i];
						if (D(t, c, r, n)) return e.delete(c), !0
					}
					return !1
				}

				function M(e) {
					switch (o(e)) {
						case "undefined":
							return null;
						case "object":
							return;
						case "symbol":
							return !1;
						case "string":
							e = +e;
						case "number":
							if (l(e)) return !1
					}
					return !0
				}

				function C(e, t, r) {
					var n = M(r);
					return null != n ? n : t.has(n) && !e.has(n)
				}

				function B(e, t, r, n, o) {
					var i = M(r);
					if (null != i) return i;
					var a = t.get(i);
					return !(void 0 === a && !t.has(i) || !D(n, a, !1, o)) && !e.has(i) && D(n, a, !1, o)
				}

				function q(e, t, r, n, o, i) {
					for (var c = a(e), u = 0; u < c.length; u++) {
						var s = c[u];
						if (D(r, s, o, i) && D(n, t.get(s), o, i)) return e.delete(s), !0
					}
					return !1
				}

				function G(e, t, r, i, u, s) {
					var l = 0;
					if (2 === s) {
						if (! function(e, t, r, n) {
								for (var i = null, c = a(e), u = 0; u < c.length; u++) {
									var s = c[u];
									if ("object" === o(s) && null !== s) null === i && (i = new Set), i.add(s);
									else if (!t.has(s)) {
										if (r) return !1;
										if (!C(e, t, s)) return !1;
										null === i && (i = new Set), i.add(s)
									}
								}
								if (null !== i) {
									for (var l = a(t), f = 0; f < l.length; f++) {
										var p = l[f];
										if ("object" === o(p) && null !== p) {
											if (!W(i, p, r, n)) return !1
										} else if (!r && !e.has(p) && !W(i, p, r, n)) return !1
									}
									return 0 === i.size
								}
								return !0
							}(e, t, r, u)) return !1
					} else if (3 === s) {
						if (! function(e, t, r, i) {
								for (var a = null, u = c(e), s = 0; s < u.length; s++) {
									var l = n(u[s], 2),
										f = l[0],
										p = l[1];
									if ("object" === o(f) && null !== f) null === a && (a = new Set), a.add(f);
									else {
										var y = t.get(f);
										if (void 0 === y && !t.has(f) || !D(p, y, r, i)) {
											if (r) return !1;
											if (!B(e, t, f, p, i)) return !1;
											null === a && (a = new Set), a.add(f)
										}
									}
								}
								if (null !== a) {
									for (var d = c(t), h = 0; h < d.length; h++) {
										var g = n(d[h], 2),
											m = (f = g[0], g[1]);
										if ("object" === o(f) && null !== f) {
											if (!q(a, e, f, m, r, i)) return !1
										} else if (!(r || e.has(f) && D(e.get(f), m, !1, i) || q(a, e, f, m, !1, i))) return !1
									}
									return 0 === a.size
								}
								return !0
							}(e, t, r, u)) return !1
					} else if (1 === s)
						for (; l < e.length; l++) {
							if (!p(e, l)) {
								if (p(t, l)) return !1;
								for (var f = Object.keys(e); l < f.length; l++) {
									var y = f[l];
									if (!p(t, y) || !D(e[y], t[y], r, u)) return !1
								}
								return f.length === Object.keys(t).length
							}
							if (!p(t, l) || !D(e[l], t[l], r, u)) return !1
						}
					for (l = 0; l < i.length; l++) {
						var d = i[l];
						if (!D(e[d], t[d], r, u)) return !1
					}
					return !0
				}
				e.exports = {
					isDeepEqual: function(e, t) {
						return D(e, t, !1)
					},
					isDeepStrictEqual: function(e, t) {
						return D(e, t, !0)
					}
				}
			},
			924: (e, t, r) => {
				"use strict";
				var n = r(210),
					o = r(559),
					i = o(n("String.prototype.indexOf"));
				e.exports = function(e, t) {
					var r = n(e, !!t);
					return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r
				}
			},
			559: (e, t, r) => {
				"use strict";
				var n = r(612),
					o = r(210),
					i = o("%Function.prototype.apply%"),
					a = o("%Function.prototype.call%"),
					c = o("%Reflect.apply%", !0) || n.call(a, i),
					u = o("%Object.getOwnPropertyDescriptor%", !0),
					s = o("%Object.defineProperty%", !0),
					l = o("%Math.max%");
				if (s) try {
					s({}, "a", {
						value: 1
					})
				} catch (e) {
					s = null
				}
				e.exports = function(e) {
					var t = c(n, a, arguments);
					if (u && s) {
						var r = u(t, "length");
						r.configurable && s(t, "length", {
							value: 1 + l(0, e.length - (arguments.length - 1))
						})
					}
					return t
				};
				var f = function() {
					return c(n, i, arguments)
				};
				s ? s(e.exports, "apply", {
					value: f
				}) : e.exports.apply = f
			},
			108: (e, t, r) => {
				var n = r(539),
					o = r(282);

				function i() {
					return (new Date).getTime()
				}
				var a, c = Array.prototype.slice,
					u = {};
				a = void 0 !== r.g && r.g.console ? r.g.console : "undefined" != typeof window && window.console ? window.console : {};
				for (var s = [
						[function() {}, "log"],
						[function() {
							a.log.apply(a, arguments)
						}, "info"],
						[function() {
							a.log.apply(a, arguments)
						}, "warn"],
						[function() {
							a.warn.apply(a, arguments)
						}, "error"],
						[function(e) {
							u[e] = i()
						}, "time"],
						[function(e) {
							var t = u[e];
							if (!t) throw new Error("No such label: " + e);
							delete u[e];
							var r = i() - t;
							a.log(e + ": " + r + "ms")
						}, "timeEnd"],
						[function() {
							var e = new Error;
							e.name = "Trace", e.message = n.format.apply(null, arguments), a.error(e.stack)
						}, "trace"],
						[function(e) {
							a.log(n.inspect(e) + "\n")
						}, "dir"],
						[function(e) {
							if (!e) {
								var t = c.call(arguments, 1);
								o.ok(!1, n.format.apply(null, t))
							}
						}, "assert"]
					], l = 0; l < s.length; l++) {
					var f = s[l],
						p = f[0],
						y = f[1];
					a[y] || (a[y] = p)
				}
				e.exports = a
			},
			289: (e, t, r) => {
				"use strict";
				var n = r(215),
					o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
					i = Object.prototype.toString,
					a = Array.prototype.concat,
					c = Object.defineProperty,
					u = c && function() {
						var e = {};
						try {
							for (var t in c(e, "x", {
									enumerable: !1,
									value: e
								}), e) return !1;
							return e.x === e
						} catch (e) {
							return !1
						}
					}(),
					s = function(e, t, r, n) {
						var o;
						(!(t in e) || "function" == typeof(o = n) && "[object Function]" === i.call(o) && n()) && (u ? c(e, t, {
							configurable: !0,
							enumerable: !1,
							value: r,
							writable: !0
						}) : e[t] = r)
					},
					l = function(e, t) {
						var r = arguments.length > 2 ? arguments[2] : {},
							i = n(t);
						o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
						for (var c = 0; c < i.length; c += 1) s(e, i[c], t[i[c]], r[i[c]])
					};
				l.supportsDescriptors = !!u, e.exports = l
			},
			91: e => {
				"use strict";

				function t(e, t) {
					if (null == e) throw new TypeError("Cannot convert first argument to object");
					for (var r = Object(e), n = 1; n < arguments.length; n++) {
						var o = arguments[n];
						if (null != o)
							for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
								var u = i[a],
									s = Object.getOwnPropertyDescriptor(o, u);
								void 0 !== s && s.enumerable && (r[u] = o[u])
							}
					}
					return r
				}
				e.exports = {
					assign: t,
					polyfill: function() {
						Object.assign || Object.defineProperty(Object, "assign", {
							enumerable: !1,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				}
			},
			804: e => {
				var t = Object.prototype.hasOwnProperty,
					r = Object.prototype.toString;
				e.exports = function(e, n, o) {
					if ("[object Function]" !== r.call(n)) throw new TypeError("iterator must be a function");
					var i = e.length;
					if (i === +i)
						for (var a = 0; a < i; a++) n.call(o, e[a], a, e);
					else
						for (var c in e) t.call(e, c) && n.call(o, e[c], c, e)
				}
			},
			648: e => {
				"use strict";
				var t = "Function.prototype.bind called on incompatible ",
					r = Array.prototype.slice,
					n = Object.prototype.toString,
					o = "[object Function]";
				e.exports = function(e) {
					var i = this;
					if ("function" != typeof i || n.call(i) !== o) throw new TypeError(t + i);
					for (var a, c = r.call(arguments, 1), u = function() {
							if (this instanceof a) {
								var t = i.apply(this, c.concat(r.call(arguments)));
								return Object(t) === t ? t : this
							}
							return i.apply(e, c.concat(r.call(arguments)))
						}, s = Math.max(0, i.length - c.length), l = [], f = 0; f < s; f++) l.push("$" + f);
					if (a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(u), i.prototype) {
						var p = function() {};
						p.prototype = i.prototype, a.prototype = new p, p.prototype = null
					}
					return a
				}
			},
			612: (e, t, r) => {
				"use strict";
				var n = r(648);
				e.exports = Function.prototype.bind || n
			},
			210: (e, t, r) => {
				"use strict";
				var n, o = SyntaxError,
					i = Function,
					a = TypeError,
					c = function(e) {
						try {
							return i('"use strict"; return (' + e + ").constructor;")()
						} catch (e) {}
					},
					u = Object.getOwnPropertyDescriptor;
				if (u) try {
					u({}, "")
				} catch (e) {
					u = null
				}
				var s = function() {
						throw new a
					},
					l = u ? function() {
						try {
							return s
						} catch (e) {
							try {
								return u(arguments, "callee").get
							} catch (e) {
								return s
							}
						}
					}() : s,
					f = r(405)(),
					p = Object.getPrototypeOf || function(e) {
						return e.__proto__
					},
					y = {},
					d = "undefined" == typeof Uint8Array ? n : p(Uint8Array),
					h = {
						"%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
						"%Array%": Array,
						"%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
						"%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : n,
						"%AsyncFromSyncIteratorPrototype%": n,
						"%AsyncFunction%": y,
						"%AsyncGenerator%": y,
						"%AsyncGeneratorFunction%": y,
						"%AsyncIteratorPrototype%": y,
						"%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
						"%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
						"%Boolean%": Boolean,
						"%DataView%": "undefined" == typeof DataView ? n : DataView,
						"%Date%": Date,
						"%decodeURI%": decodeURI,
						"%decodeURIComponent%": decodeURIComponent,
						"%encodeURI%": encodeURI,
						"%encodeURIComponent%": encodeURIComponent,
						"%Error%": Error,
						"%eval%": eval,
						"%EvalError%": EvalError,
						"%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
						"%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
						"%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
						"%Function%": i,
						"%GeneratorFunction%": y,
						"%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
						"%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
						"%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
						"%isFinite%": isFinite,
						"%isNaN%": isNaN,
						"%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : n,
						"%JSON%": "object" == typeof JSON ? JSON : n,
						"%Map%": "undefined" == typeof Map ? n : Map,
						"%MapIteratorPrototype%": "undefined" != typeof Map && f ? p((new Map)[Symbol.iterator]()) : n,
						"%Math%": Math,
						"%Number%": Number,
						"%Object%": Object,
						"%parseFloat%": parseFloat,
						"%parseInt%": parseInt,
						"%Promise%": "undefined" == typeof Promise ? n : Promise,
						"%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
						"%RangeError%": RangeError,
						"%ReferenceError%": ReferenceError,
						"%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
						"%RegExp%": RegExp,
						"%Set%": "undefined" == typeof Set ? n : Set,
						"%SetIteratorPrototype%": "undefined" != typeof Set && f ? p((new Set)[Symbol.iterator]()) : n,
						"%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
						"%String%": String,
						"%StringIteratorPrototype%": f ? p("" [Symbol.iterator]()) : n,
						"%Symbol%": f ? Symbol : n,
						"%SyntaxError%": o,
						"%ThrowTypeError%": l,
						"%TypedArray%": d,
						"%TypeError%": a,
						"%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
						"%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
						"%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
						"%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
						"%URIError%": URIError,
						"%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
						"%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
						"%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
					},
					g = function e(t) {
						var r;
						if ("%AsyncFunction%" === t) r = c("async function () {}");
						else if ("%GeneratorFunction%" === t) r = c("function* () {}");
						else if ("%AsyncGeneratorFunction%" === t) r = c("async function* () {}");
						else if ("%AsyncGenerator%" === t) {
							var n = e("%AsyncGeneratorFunction%");
							n && (r = n.prototype)
						} else if ("%AsyncIteratorPrototype%" === t) {
							var o = e("%AsyncGenerator%");
							o && (r = p(o.prototype))
						}
						return h[t] = r, r
					},
					m = {
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
					},
					v = r(612),
					b = r(642),
					w = v.call(Function.call, Array.prototype.concat),
					A = v.call(Function.apply, Array.prototype.splice),
					S = v.call(Function.call, String.prototype.replace),
					E = v.call(Function.call, String.prototype.slice),
					j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
					O = /\\(\\)?/g,
					x = function(e) {
						var t = E(e, 0, 1),
							r = E(e, -1);
						if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
						if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
						var n = [];
						return S(e, j, (function(e, t, r, o) {
							n[n.length] = r ? S(o, O, "$1") : t || e
						})), n
					},
					P = function(e, t) {
						var r, n = e;
						if (b(m, n) && (n = "%" + (r = m[n])[0] + "%"), b(h, n)) {
							var i = h[n];
							if (i === y && (i = g(n)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
							return {
								alias: r,
								name: n,
								value: i
							}
						}
						throw new o("intrinsic " + e + " does not exist!")
					};
				e.exports = function(e, t) {
					if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
					if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
					var r = x(e),
						n = r.length > 0 ? r[0] : "",
						i = P("%" + n + "%", t),
						c = i.name,
						s = i.value,
						l = !1,
						f = i.alias;
					f && (n = f[0], A(r, w([0, 1], f)));
					for (var p = 1, y = !0; p < r.length; p += 1) {
						var d = r[p],
							g = E(d, 0, 1),
							m = E(d, -1);
						if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m) throw new o("property names with quotes must have matching quotes");
						if ("constructor" !== d && y || (l = !0), b(h, c = "%" + (n += "." + d) + "%")) s = h[c];
						else if (null != s) {
							if (!(d in s)) {
								if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
								return
							}
							if (u && p + 1 >= r.length) {
								var v = u(s, d);
								s = (y = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : s[d]
							} else y = b(s, d), s = s[d];
							y && !l && (h[c] = s)
						}
					}
					return s
				}
			},
			405: (e, t, r) => {
				"use strict";
				var n = "undefined" != typeof Symbol && Symbol,
					o = r(419);
				e.exports = function() {
					return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
				}
			},
			419: e => {
				"use strict";
				e.exports = function() {
					if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
					if ("symbol" == typeof Symbol.iterator) return !0;
					var e = {},
						t = Symbol("test"),
						r = Object(t);
					if ("string" == typeof t) return !1;
					if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
					if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
					for (t in e[t] = 42, e) return !1;
					if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
					if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
					var n = Object.getOwnPropertySymbols(e);
					if (1 !== n.length || n[0] !== t) return !1;
					if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
					if ("function" == typeof Object.getOwnPropertyDescriptor) {
						var o = Object.getOwnPropertyDescriptor(e, t);
						if (42 !== o.value || !0 !== o.enumerable) return !1
					}
					return !0
				}
			},
			410: (e, t, r) => {
				"use strict";
				var n = r(419);
				e.exports = function() {
					return n() && !!Symbol.toStringTag
				}
			},
			642: (e, t, r) => {
				"use strict";
				var n = r(612);
				e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
			},
			717: e => {
				"function" == typeof Object.create ? e.exports = function(e, t) {
					t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}))
				} : e.exports = function(e, t) {
					if (t) {
						e.super_ = t;
						var r = function() {};
						r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
					}
				}
			},
			584: (e, t, r) => {
				"use strict";
				var n = r(410)(),
					o = r(924)("Object.prototype.toString"),
					i = function(e) {
						return !(n && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === o(e)
					},
					a = function(e) {
						return !!i(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee)
					},
					c = function() {
						return i(arguments)
					}();
				i.isLegacyArguments = a, e.exports = c ? i : a
			},
			662: (e, t, r) => {
				"use strict";
				var n, o = Object.prototype.toString,
					i = Function.prototype.toString,
					a = /^\s*(?:function)?\*/,
					c = r(410)(),
					u = Object.getPrototypeOf;
				e.exports = function(e) {
					if ("function" != typeof e) return !1;
					if (a.test(i.call(e))) return !0;
					if (!c) return "[object GeneratorFunction]" === o.call(e);
					if (!u) return !1;
					if (void 0 === n) {
						var t = function() {
							if (!c) return !1;
							try {
								return Function("return function*() {}")()
							} catch (e) {}
						}();
						n = !!t && u(t)
					}
					return u(e) === n
				}
			},
			611: e => {
				"use strict";
				e.exports = function(e) {
					return e != e
				}
			},
			360: (e, t, r) => {
				"use strict";
				var n = r(559),
					o = r(289),
					i = r(611),
					a = r(415),
					c = r(194),
					u = n(a(), Number);
				o(u, {
					getPolyfill: a,
					implementation: i,
					shim: c
				}), e.exports = u
			},
			415: (e, t, r) => {
				"use strict";
				var n = r(611);
				e.exports = function() {
					return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n
				}
			},
			194: (e, t, r) => {
				"use strict";
				var n = r(289),
					o = r(415);
				e.exports = function() {
					var e = o();
					return n(Number, {
						isNaN: e
					}, {
						isNaN: function() {
							return Number.isNaN !== e
						}
					}), e
				}
			},
			692: (e, t, r) => {
				"use strict";
				var n = r(804),
					o = r(83),
					i = r(924),
					a = i("Object.prototype.toString"),
					c = r(410)(),
					u = o(),
					s = i("Array.prototype.indexOf", !0) || function(e, t) {
						for (var r = 0; r < e.length; r += 1)
							if (e[r] === t) return r;
						return -1
					},
					l = i("String.prototype.slice"),
					f = {},
					p = r(882),
					y = Object.getPrototypeOf;
				c && p && y && n(u, (function(e) {
					var t = new r.g[e];
					if (Symbol.toStringTag in t) {
						var n = y(t),
							o = p(n, Symbol.toStringTag);
						if (!o) {
							var i = y(n);
							o = p(i, Symbol.toStringTag)
						}
						f[e] = o.get
					}
				})), e.exports = function(e) {
					if (!e || "object" != typeof e) return !1;
					if (!c || !(Symbol.toStringTag in e)) {
						var t = l(a(e), 8, -1);
						return s(u, t) > -1
					}
					return !!p && function(e) {
						var t = !1;
						return n(f, (function(r, n) {
							if (!t) try {
								t = r.call(e) === n
							} catch (e) {}
						})), t
					}(e)
				}
			},
			244: e => {
				"use strict";
				var t = function(e) {
					return e != e
				};
				e.exports = function(e, r) {
					return 0 === e && 0 === r ? 1 / e == 1 / r : e === r || !(!t(e) || !t(r))
				}
			},
			609: (e, t, r) => {
				"use strict";
				var n = r(289),
					o = r(559),
					i = r(244),
					a = r(624),
					c = r(281),
					u = o(a(), Object);
				n(u, {
					getPolyfill: a,
					implementation: i,
					shim: c
				}), e.exports = u
			},
			624: (e, t, r) => {
				"use strict";
				var n = r(244);
				e.exports = function() {
					return "function" == typeof Object.is ? Object.is : n
				}
			},
			281: (e, t, r) => {
				"use strict";
				var n = r(624),
					o = r(289);
				e.exports = function() {
					var e = n();
					return o(Object, {
						is: e
					}, {
						is: function() {
							return Object.is !== e
						}
					}), e
				}
			},
			987: (e, t, r) => {
				"use strict";
				var n;
				if (!Object.keys) {
					var o = Object.prototype.hasOwnProperty,
						i = Object.prototype.toString,
						a = r(414),
						c = Object.prototype.propertyIsEnumerable,
						u = !c.call({
							toString: null
						}, "toString"),
						s = c.call((function() {}), "prototype"),
						l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
						f = function(e) {
							var t = e.constructor;
							return t && t.prototype === e
						},
						p = {
							$applicationCache: !0,
							$console: !0,
							$external: !0,
							$frame: !0,
							$frameElement: !0,
							$frames: !0,
							$innerHeight: !0,
							$innerWidth: !0,
							$onmozfullscreenchange: !0,
							$onmozfullscreenerror: !0,
							$outerHeight: !0,
							$outerWidth: !0,
							$pageXOffset: !0,
							$pageYOffset: !0,
							$parent: !0,
							$scrollLeft: !0,
							$scrollTop: !0,
							$scrollX: !0,
							$scrollY: !0,
							$self: !0,
							$webkitIndexedDB: !0,
							$webkitStorageInfo: !0,
							$window: !0
						},
						y = function() {
							if ("undefined" == typeof window) return !1;
							for (var e in window) try {
								if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
									f(window[e])
								} catch (e) {
									return !0
								}
							} catch (e) {
								return !0
							}
							return !1
						}();
					n = function(e) {
						var t = null !== e && "object" == typeof e,
							r = "[object Function]" === i.call(e),
							n = a(e),
							c = t && "[object String]" === i.call(e),
							p = [];
						if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
						var d = s && r;
						if (c && e.length > 0 && !o.call(e, 0))
							for (var h = 0; h < e.length; ++h) p.push(String(h));
						if (n && e.length > 0)
							for (var g = 0; g < e.length; ++g) p.push(String(g));
						else
							for (var m in e) d && "prototype" === m || !o.call(e, m) || p.push(String(m));
						if (u)
							for (var v = function(e) {
									if ("undefined" == typeof window || !y) return f(e);
									try {
										return f(e)
									} catch (e) {
										return !1
									}
								}(e), b = 0; b < l.length; ++b) v && "constructor" === l[b] || !o.call(e, l[b]) || p.push(l[b]);
						return p
					}
				}
				e.exports = n
			},
			215: (e, t, r) => {
				"use strict";
				var n = Array.prototype.slice,
					o = r(414),
					i = Object.keys,
					a = i ? function(e) {
						return i(e)
					} : r(987),
					c = Object.keys;
				a.shim = function() {
					return Object.keys ? function() {
						var e = Object.keys(arguments);
						return e && e.length === arguments.length
					}(1, 2) || (Object.keys = function(e) {
						return o(e) ? c(n.call(e)) : c(e)
					}) : Object.keys = a, Object.keys || a
				}, e.exports = a
			},
			414: e => {
				"use strict";
				var t = Object.prototype.toString;
				e.exports = function(e) {
					var r = t.call(e),
						n = "[object Arguments]" === r;
					return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
				}
			},
			155: e => {
				var t, r, n = e.exports = {};

				function o() {
					throw new Error("setTimeout has not been defined")
				}

				function i() {
					throw new Error("clearTimeout has not been defined")
				}

				function a(e) {
					if (t === setTimeout) return setTimeout(e, 0);
					if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
					try {
						return t(e, 0)
					} catch (r) {
						try {
							return t.call(null, e, 0)
						} catch (r) {
							return t.call(this, e, 0)
						}
					}
				}! function() {
					try {
						t = "function" == typeof setTimeout ? setTimeout : o
					} catch (e) {
						t = o
					}
					try {
						r = "function" == typeof clearTimeout ? clearTimeout : i
					} catch (e) {
						r = i
					}
				}();
				var c, u = [],
					s = !1,
					l = -1;

				function f() {
					s && c && (s = !1, c.length ? u = c.concat(u) : l = -1, u.length && p())
				}

				function p() {
					if (!s) {
						var e = a(f);
						s = !0;
						for (var t = u.length; t;) {
							for (c = u, u = []; ++l < t;) c && c[l].run();
							l = -1, t = u.length
						}
						c = null, s = !1,
							function(e) {
								if (r === clearTimeout) return clearTimeout(e);
								if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
								try {
									r(e)
								} catch (t) {
									try {
										return r.call(null, e)
									} catch (t) {
										return r.call(this, e)
									}
								}
							}(e)
					}
				}

				function y(e, t) {
					this.fun = e, this.array = t
				}

				function d() {}
				n.nextTick = function(e) {
					var t = new Array(arguments.length - 1);
					if (arguments.length > 1)
						for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
					u.push(new y(e, t)), 1 !== u.length || s || a(p)
				}, y.prototype.run = function() {
					this.fun.apply(null, this.array)
				}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(e) {
					return []
				}, n.binding = function(e) {
					throw new Error("process.binding is not supported")
				}, n.cwd = function() {
					return "/"
				}, n.chdir = function(e) {
					throw new Error("process.chdir is not supported")
				}, n.umask = function() {
					return 0
				}
			},
			318: (e, t, r) => {
				"use strict";
				class n {
					constructor(e) {
						this.properties = null != e ? e : []
					}
					get(e) {
						const t = this.properties.filter((t => t.name === e)).map((e => e.value));
						if (t.length > 1) throw new Error('Expected only one property to be named "' + e + '"');
						if (0 !== t.length) return t[0]
					}
					getString(e) {
						return this.getByType(e, "string")
					}
					getNumber(e) {
						return this.getByType(e, "number")
					}
					getBoolean(e) {
						return this.getByType(e, "boolean")
					}
					getByType(e, t) {
						const r = this.get(e);
						if (void 0 !== r) {
							if (typeof r !== t) throw new Error('Expected property "' + e + '" to have type "' + t + '"');
							return r
						}
					}
					mustGetString(e) {
						return this.mustGetByType(e, "string")
					}
					mustGetNumber(e) {
						return this.mustGetByType(e, "number")
					}
					mustGetBoolean(e) {
						return this.mustGetByType(e, "boolean")
					}
					mustGetByType(e, t) {
						const r = this.get(e);
						if (void 0 === r) throw new Error('Property "' + e + '" is missing');
						if (typeof r !== t) throw new Error('Expected property "' + e + '" to have type "' + t + '"');
						return r
					}
					getType(e) {
						const t = this.properties.filter((t => t.name === e)).map((e => e.type));
						if (t.length > 1) throw new Error('Expected only one property to be named "' + e + '"');
						if (0 !== t.length) return t[0]
					}
				}
				class o {
					constructor(e) {
						this.name = e.name, this.x = e.x, this.y = e.y, this.properties = new n(e.properties)
					}
					get isReadable() {
						const e = this.properties.getString("readableBy");
						return !e || WA.player.tags.includes(e)
					}
					get isWritable() {
						const e = this.properties.getString("writableBy");
						return !e || WA.player.tags.includes(e)
					}
				}
				async function i() {
					const e = await WA.room.getTiledMap(),
						t = new Map;
					return a(e.layers, t), t
				}

				function a(e, t) {
					for (const r of e)
						if ("objectgroup" === r.type)
							for (const e of r.objects) "variable" === e.type && t.set(e.name, new o(e));
						else "group" === r.type && a(r.layers, t)
				}
				let c;
				async function u() {
					return void 0 === c && (c = async function() {
						return function(e) {
							const t = new Map;
							return s(e.layers, "", t), t
						}(await WA.room.getTiledMap())
					}()), c
				}

				function s(e, t, r) {
					for (const n of e) "group" === n.type ? s(n.layers, t + n.name + "/", r) : (n.name = t + n.name, r.set(n.name, n))
				}

				function l(e) {
					let t = 1 / 0,
						r = 1 / 0,
						n = 0,
						o = 0;
					const i = e.data;
					if ("string" == typeof i) throw new Error("Unsupported tile layer data stored as string instead of CSV");
					for (let a = 0; a < e.height; a++)
						for (let c = 0; c < e.width; c++) 0 !== i[c + a * e.width] && (t = Math.min(t, c), o = Math.max(o, c), r = Math.min(r, a), n = Math.max(n, a));
					return {
						top: r,
						left: t,
						right: o + 1,
						bottom: n + 1
					}
				}

				function f(e) {
					let t = 1 / 0,
						r = 1 / 0,
						n = 0,
						o = 0;
					for (const i of e) {
						const e = l(i);
						e.left < t && (t = e.left), e.top < r && (r = e.top), e.right > o && (o = e.right), e.bottom > n && (n = e.bottom)
					}
					return {
						top: r,
						left: t,
						right: o,
						bottom: n
					}
				}
				const p = "https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";
				let y, d, h = 0,
					g = 0;

				function m(e) {
					if (WA.state[e.name]) {
						let t = e.properties.mustGetString("openLayer");
						for (const e of t.split("\n")) WA.room.showLayer(e);
						t = e.properties.mustGetString("closeLayer");
						for (const e of t.split("\n")) WA.room.hideLayer(e)
					} else {
						let t = e.properties.mustGetString("openLayer");
						for (const e of t.split("\n")) WA.room.hideLayer(e);
						t = e.properties.mustGetString("closeLayer");
						for (const e of t.split("\n")) WA.room.showLayer(e)
					}
				}

				function v(e) {
					return e.map((e => y.get(e))).filter((e => "tilelayer" === (null == e ? void 0 : e.type)))
				}

				function b(e) {
					const t = f(v(e)),
						r = 32 * ((t.right - t.left) / 2 + t.left),
						n = 32 * ((t.bottom - t.top) / 2 + t.top);
					return Math.sqrt(Math.pow(h - r, 2) + Math.pow(g - n, 2))
				}

				function w(e) {
					WA.state.onVariableChange(e.name).subscribe((() => {
						WA.state[e.name] ? function(e) {
							const t = e.properties.getString("openSound"),
								r = e.properties.getNumber("soundRadius");
							let n = 1;
							if (r) {
								const t = b(e.properties.mustGetString("openLayer").split("\n"));
								if (t > r) return;
								n = 1 - t / r
							}
							t && WA.sound.loadSound(t).play({
								volume: n
							})
						}(e) : function(e) {
							const t = e.properties.getString("closeSound"),
								r = e.properties.getNumber("soundRadius");
							let n = 1;
							if (r) {
								const t = b(e.properties.mustGetString("closeLayer").split("\n"));
								if (t > r) return;
								n = 1 - t / r
							}
							t && WA.sound.loadSound(t).play({
								volume: n
							})
						}(e), m(e)
					})), m(e)
				}

				function A(e, t, r, n) {
					const o = e.name;
					let i, a, c = !1;
					const u = r.getString("zone");
					if (!u) throw new Error('Missing "zone" property on doorstep layer "' + o + '"');
					const s = r.getString("tag");
					let l = !0;
					s && !WA.player.tags.includes(s) && (l = !1);
					const p = !!s;

					function y() {
						var e;
						i && i.remove(), i = WA.ui.displayActionMessage({
							message: null !== (e = r.getString("closeTriggerMessage")) && void 0 !== e ? e : "Press SPACE to close the door",
							callback: () => {
								WA.state[t.name] = !1, d()
							}
						})
					}

					function d() {
						var e;
						i && i.remove(), i = WA.ui.displayActionMessage({
							message: null !== (e = r.getString("openTriggerMessage")) && void 0 !== e ? e : "Press SPACE to open the door",
							callback: () => {
								WA.state[t.name] = !0, y()
							}
						})
					}

					function h() {
						a && (WA.room.website.delete(a.name), a = void 0)
					}
					WA.room.onEnterZone(u, (() => {
						c = !0, r.getBoolean("autoOpen") && l ? WA.state[t.name] = !0 : WA.state[t.name] || (!p || l) && p || !r.getString("code") && !r.getString("codeVariable") ? l && (WA.state[t.name] ? y() : d()) : function(e) {
							const r = f(v(t.properties.mustGetString("closeLayer").split("\n")));
							a = WA.room.website.create({
								name: "doorKeypad" + e,
								url: n + "/keypad.html#" + encodeURIComponent(e),
								position: {
									x: 32 * r.right,
									y: 32 * r.top,
									width: 96,
									height: 128
								},
								allowApi: !0
							})
						}(o)
					})), WA.room.onLeaveZone(u, (() => {
						c = !1, r.getBoolean("autoClose") && (WA.state[t.name] = !1), i && i.remove(), h()
					})), WA.state.onVariableChange(t.name).subscribe((() => {
						c && (r.getBoolean("autoClose") || !0 !== WA.state[t.name] || y(), a && !0 === WA.state[t.name] && h(), r.getBoolean("autoOpen") || !1 !== WA.state[t.name] || d())
					}))
				}

				function S(e) {
					void 0 === WA.state[e.name] && (WA.state[e.name] = 0), WA.state.onVariableChange(e.name).subscribe((() => {
						WA.state[e.name] && function(e) {
							const t = e.properties.mustGetString("bellSound"),
								r = e.properties.getNumber("soundRadius");
							let n = 1;
							if (r) {
								const t = Math.sqrt(Math.pow(e.x - h, 2) + Math.pow(e.y - g, 2));
								if (t > r) return;
								n = 1 - t / r
							}
							WA.sound.loadSound(t).play({
								volume: n
							})
						}(e)
					}))
				}

				function E(e, t) {
					let r;
					const n = t.mustGetString("zone"),
						o = t.getString("bellPopup");
					WA.room.onEnterZone(n, (() => {
						var n;
						o ? r = WA.ui.openPopup(o, "", [{
							label: null !== (n = t.getString("bellButtonText")) && void 0 !== n ? n : "Ring",
							callback: () => {
								WA.state[e] = WA.state[e] + 1
							}
						}]) : WA.state[e] = WA.state[e] + 1
					})), WA.room.onLeaveZone(n, (() => {
						r && (r.close(), r = void 0)
					}))
				}

				function j(e) {
					const t = e.getString("bindVariable");
					if (t) {
						const r = e.getString("zone");
						if (!r) throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');
						! function(e, t, r, n, o, i) {
							i && !WA.player.tags.includes(i) || (void 0 !== r && WA.room.onEnterZone(t, (() => {
								o || (WA.state[e] = r)
							})), void 0 !== n && WA.room.onLeaveZone(t, (() => {
								WA.state[e] = n
							})))
						}(t, r, e.get("enterValue"), e.get("leaveValue"), e.getString("triggerMessage"), e.getString("tag"))
					}
				}

				function O(e, t) {
					let r;
					const n = t.getString("zone");
					if (!n) throw new Error('Missing "zone" property');
					const o = t.getString("openConfigAdminTag");
					let i = !0;

					function a() {
						WA.nav.closeCoWebSite()
					}
					o && !WA.player.tags.includes(o) && (i = !1), WA.room.onEnterZone(n, (() => {
						const n = t.getString("openConfigTrigger");
						var o;
						i && (n && "onaction" === n ? (r && r.remove(), r = WA.ui.displayActionMessage({
							message: null !== (o = t.getString("openConfigTriggerMessage")) && void 0 !== o ? o : "Press SPACE or touch here to configure",
							callback: () => x(e)
						})) : x(e))
					})), WA.room.onLeaveZone(n, (() => {
						r ? (r.remove(), a()) : a()
					}))
				}

				function x(e) {
					const t = e ? "#" + e : "";
					WA.nav.openCoWebSite(p + "/configuration.html" + t, !0)
				}
				var P = Object.prototype.toString,
					k = Array.isArray || function(e) {
						return "[object Array]" === P.call(e)
					};

				function I(e) {
					return "function" == typeof e
				}

				function T(e) {
					return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
				}

				function _(e, t) {
					return null != e && "object" == typeof e && t in e
				}
				var R = RegExp.prototype.test,
					F = /\S/;
				var D = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#39;",
						"/": "&#x2F;",
						"`": "&#x60;",
						"=": "&#x3D;"
					},
					N = /\s*/,
					U = /\s+/,
					W = /\s*=/,
					M = /\s*\}/,
					C = /#|\^|\/|>|\{|&|=|!/;

				function B(e) {
					this.string = e, this.tail = e, this.pos = 0
				}

				function q(e, t) {
					this.view = e, this.cache = {
						".": this.view
					}, this.parent = t
				}

				function G() {
					this.templateCache = {
						_cache: {},
						set: function(e, t) {
							this._cache[e] = t
						},
						get: function(e) {
							return this._cache[e]
						},
						clear: function() {
							this._cache = {}
						}
					}
				}
				B.prototype.eos = function() {
					return "" === this.tail
				}, B.prototype.scan = function(e) {
					var t = this.tail.match(e);
					if (!t || 0 !== t.index) return "";
					var r = t[0];
					return this.tail = this.tail.substring(r.length), this.pos += r.length, r
				}, B.prototype.scanUntil = function(e) {
					var t, r = this.tail.search(e);
					switch (r) {
						case -1:
							t = this.tail, this.tail = "";
							break;
						case 0:
							t = "";
							break;
						default:
							t = this.tail.substring(0, r), this.tail = this.tail.substring(r)
					}
					return this.pos += t.length, t
				}, q.prototype.push = function(e) {
					return new q(e, this)
				}, q.prototype.lookup = function(e) {
					var t, r, n, o = this.cache;
					if (o.hasOwnProperty(e)) t = o[e];
					else {
						for (var i, a, c, u = this, s = !1; u;) {
							if (e.indexOf(".") > 0)
								for (i = u.view, a = e.split("."), c = 0; null != i && c < a.length;) c === a.length - 1 && (s = _(i, a[c]) || (r = i, n = a[c], null != r && "object" != typeof r && r.hasOwnProperty && r.hasOwnProperty(n))), i = i[a[c++]];
							else i = u.view[e], s = _(u.view, e);
							if (s) {
								t = i;
								break
							}
							u = u.parent
						}
						o[e] = t
					}
					return I(t) && (t = t.call(this.view)), t
				}, G.prototype.clearCache = function() {
					void 0 !== this.templateCache && this.templateCache.clear()
				}, G.prototype.parse = function(e, t) {
					var r = this.templateCache,
						n = e + ":" + (t || L.tags).join(":"),
						o = void 0 !== r,
						i = o ? r.get(n) : void 0;
					return null == i && (i = function(e, t) {
						if (!e) return [];
						var r, n, o, i, a = !1,
							c = [],
							u = [],
							s = [],
							l = !1,
							f = !1,
							p = "",
							y = 0;

						function d() {
							if (l && !f)
								for (; s.length;) delete u[s.pop()];
							else s = [];
							l = !1, f = !1
						}

						function h(e) {
							if ("string" == typeof e && (e = e.split(U, 2)), !k(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
							r = new RegExp(T(e[0]) + "\\s*"), n = new RegExp("\\s*" + T(e[1])), o = new RegExp("\\s*" + T("}" + e[1]))
						}
						h(t || L.tags);
						for (var g, m, v, b, w, A, S = new B(e); !S.eos();) {
							if (g = S.pos, v = S.scanUntil(r))
								for (var E = 0, j = v.length; E < j; ++E) i = b = v.charAt(E),
									function(e, t) {
										return R.call(e, t)
									}(F, i) ? (f = !0, a = !0, p += " ") : (s.push(u.length), p += b), u.push(["text", b, g, g + 1]), g += 1, "\n" === b && (d(), p = "", y = 0, a = !1);
							if (!S.scan(r)) break;
							if (l = !0, m = S.scan(C) || "name", S.scan(N), "=" === m ? (v = S.scanUntil(W), S.scan(W), S.scanUntil(n)) : "{" === m ? (v = S.scanUntil(o), S.scan(M), S.scanUntil(n), m = "&") : v = S.scanUntil(n), !S.scan(n)) throw new Error("Unclosed tag at " + S.pos);
							if (w = ">" == m ? [m, v, g, S.pos, p, y, a] : [m, v, g, S.pos], y++, u.push(w), "#" === m || "^" === m) c.push(w);
							else if ("/" === m) {
								if (!(A = c.pop())) throw new Error('Unopened section "' + v + '" at ' + g);
								if (A[1] !== v) throw new Error('Unclosed section "' + A[1] + '" at ' + g)
							} else "name" === m || "{" === m || "&" === m ? f = !0 : "=" === m && h(v)
						}
						if (d(), A = c.pop()) throw new Error('Unclosed section "' + A[1] + '" at ' + S.pos);
						return function(e) {
							for (var t, r = [], n = r, o = [], i = 0, a = e.length; i < a; ++i) switch ((t = e[i])[0]) {
								case "#":
								case "^":
									n.push(t), o.push(t), n = t[4] = [];
									break;
								case "/":
									o.pop()[5] = t[2], n = o.length > 0 ? o[o.length - 1][4] : r;
									break;
								default:
									n.push(t)
							}
							return r
						}(function(e) {
							for (var t, r, n = [], o = 0, i = e.length; o < i; ++o)(t = e[o]) && ("text" === t[0] && r && "text" === r[0] ? (r[1] += t[1], r[3] = t[3]) : (n.push(t), r = t));
							return n
						}(u))
					}(e, t), o && r.set(n, i)), i
				}, G.prototype.render = function(e, t, r, n) {
					var o = this.getConfigTags(n),
						i = this.parse(e, o),
						a = t instanceof q ? t : new q(t, void 0);
					return this.renderTokens(i, a, r, e, n)
				}, G.prototype.renderTokens = function(e, t, r, n, o) {
					for (var i, a, c, u = "", s = 0, l = e.length; s < l; ++s) c = void 0, "#" === (a = (i = e[s])[0]) ? c = this.renderSection(i, t, r, n, o) : "^" === a ? c = this.renderInverted(i, t, r, n, o) : ">" === a ? c = this.renderPartial(i, t, r, o) : "&" === a ? c = this.unescapedValue(i, t) : "name" === a ? c = this.escapedValue(i, t, o) : "text" === a && (c = this.rawValue(i)), void 0 !== c && (u += c);
					return u
				}, G.prototype.renderSection = function(e, t, r, n, o) {
					var i = this,
						a = "",
						c = t.lookup(e[1]);
					if (c) {
						if (k(c))
							for (var u = 0, s = c.length; u < s; ++u) a += this.renderTokens(e[4], t.push(c[u]), r, n, o);
						else if ("object" == typeof c || "string" == typeof c || "number" == typeof c) a += this.renderTokens(e[4], t.push(c), r, n, o);
						else if (I(c)) {
							if ("string" != typeof n) throw new Error("Cannot use higher-order sections without the original template");
							null != (c = c.call(t.view, n.slice(e[3], e[5]), (function(e) {
								return i.render(e, t, r, o)
							}))) && (a += c)
						} else a += this.renderTokens(e[4], t, r, n, o);
						return a
					}
				}, G.prototype.renderInverted = function(e, t, r, n, o) {
					var i = t.lookup(e[1]);
					if (!i || k(i) && 0 === i.length) return this.renderTokens(e[4], t, r, n, o)
				}, G.prototype.indentPartial = function(e, t, r) {
					for (var n = t.replace(/[^ \t]/g, ""), o = e.split("\n"), i = 0; i < o.length; i++) o[i].length && (i > 0 || !r) && (o[i] = n + o[i]);
					return o.join("\n")
				}, G.prototype.renderPartial = function(e, t, r, n) {
					if (r) {
						var o = this.getConfigTags(n),
							i = I(r) ? r(e[1]) : r[e[1]];
						if (null != i) {
							var a = e[6],
								c = e[5],
								u = e[4],
								s = i;
							0 == c && u && (s = this.indentPartial(i, u, a));
							var l = this.parse(s, o);
							return this.renderTokens(l, t, r, s, n)
						}
					}
				}, G.prototype.unescapedValue = function(e, t) {
					var r = t.lookup(e[1]);
					if (null != r) return r
				}, G.prototype.escapedValue = function(e, t, r) {
					var n = this.getConfigEscape(r) || L.escape,
						o = t.lookup(e[1]);
					if (null != o) return "number" == typeof o && n === L.escape ? String(o) : n(o)
				}, G.prototype.rawValue = function(e) {
					return e[1]
				}, G.prototype.getConfigTags = function(e) {
					return k(e) ? e : e && "object" == typeof e ? e.tags : void 0
				}, G.prototype.getConfigEscape = function(e) {
					return e && "object" == typeof e && !k(e) ? e.escape : void 0
				};
				var L = {
						name: "mustache.js",
						version: "4.2.0",
						tags: ["{{", "}}"],
						clearCache: void 0,
						escape: void 0,
						parse: void 0,
						render: void 0,
						Scanner: void 0,
						Context: void 0,
						Writer: void 0,
						set templateCache(e) {
							V.templateCache = e
						},
						get templateCache() {
							return V.templateCache
						}
					},
					V = new G;
				L.clearCache = function() {
					return V.clearCache()
				}, L.parse = function(e, t) {
					return V.parse(e, t)
				}, L.render = function(e, t, r, n) {
					if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (k(o = e) ? "array" : typeof o) + '" was given as the first argument for mustache#render(template, view, partials)');
					var o;
					return V.render(e, t, r, n)
				}, L.escape = function(e) {
					return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
						return D[e]
					}))
				}, L.Scanner = B, L.Context = q, L.Writer = G;
				const $ = L;
				class z {
					constructor(e, t) {
						this.template = e, this.state = t, this.ast = $.parse(e)
					}
					getValue() {
						return void 0 === this.value && (this.value = $.render(this.template, this.state)), this.value
					}
					onChange(e) {
						const t = [];
						for (const r of this.getUsedVariables().values()) t.push(this.state.onVariableChange(r).subscribe((() => {
							const t = $.render(this.template, this.state);
							t !== this.value && (this.value = t, e(this.value))
						})));
						return {
							unsubscribe: () => {
								for (const e of t) e.unsubscribe()
							}
						}
					}
					isPureString() {
						return 0 === this.ast.length || 1 === this.ast.length && "text" === this.ast[0][0]
					}
					getUsedVariables() {
						const e = new Set;
						return this.recursiveGetUsedVariables(this.ast, e), e
					}
					recursiveGetUsedVariables(e, t) {
						for (const r of e) {
							const e = r[0],
								n = r[1],
								o = r[4];
							["name", "&", "#", "^"].includes(e) && t.add(n), void 0 !== o && "string" != typeof o && this.recursiveGetUsedVariables(o, t)
						}
					}
				}

				function H(e, t, r) {
					WA.room.setProperty(e, t, r), "visible" === t && (r ? WA.room.showLayer(e) : WA.room.hideLayer(e))
				}
				var J = r(108);
				WA.onInit().then((() => {
					(async function(e) {
						e = null != e ? e : p;
						const t = await i();
						y = await u();
						for (const e of t.values()) e.properties.get("door") && w(e), e.properties.get("bell") && S(e);
						for (const r of y.values()) {
							const o = new n(r.properties),
								i = o.getString("doorVariable");
							if (i && "tilelayer" === r.type) {
								const n = t.get(i);
								if (void 0 === n) throw new Error('Cannot find variable "' + i + '" referred in the "doorVariable" property of layer "' + r.name + '"');
								A(r, n, o, e)
							}
							const a = o.getString("bellVariable");
							a && E(a, o)
						}
						WA.player.onPlayerMove((e => {
							h = e.x, g = e.y
						}))
					})().catch((e => J.error(e))), async function() {
						const e = await u();
						for (const t of e.values()) j(new n(t.properties))
					}().catch((e => J.error(e))), async function(e) {
						const t = await WA.room.getTiledMap();
						e = null != e ? e : p, d = await u();
						const r = t.layers.find((e => "configuration" === e.name));
						if (r) {
							const t = new n(r.properties).getString("tag");
							t && !WA.player.tags.includes(t) || WA.ui.registerMenuCommand("Configure the room", (() => {
								WA.nav.openCoWebSite(e + "/configuration.html", !0)
							}));
							for (const e of d.values()) {
								const t = new n(e.properties),
									r = t.getString("openConfig");
								r && "tilelayer" === e.type && O(r, t)
							}
						}
					}().catch((e => J.error(e))), async function() {
						var e;
						const t = await u();
						for (const [r, n] of t.entries()) {
							const t = null !== (e = n.properties) && void 0 !== e ? e : [];
							for (const e of t) {
								if ("int" === e.type || "bool" === e.type || "object" === e.type || "string" != typeof e.value) continue;
								const t = new z(e.value, WA.state);
								if (t.isPureString()) continue;
								const n = t.getValue();
								H(r, e.name, n), t.onChange((t => {
									H(r, e.name, t)
								}))
							}
						}
					}().catch((e => J.error(e)))
				}))
			},
			384: e => {
				e.exports = function(e) {
					return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
				}
			},
			955: (e, t, r) => {
				"use strict";
				var n = r(584),
					o = r(662),
					i = r(430),
					a = r(692);

				function c(e) {
					return e.call.bind(e)
				}
				var u = "undefined" != typeof BigInt,
					s = "undefined" != typeof Symbol,
					l = c(Object.prototype.toString),
					f = c(Number.prototype.valueOf),
					p = c(String.prototype.valueOf),
					y = c(Boolean.prototype.valueOf);
				if (u) var d = c(BigInt.prototype.valueOf);
				if (s) var h = c(Symbol.prototype.valueOf);

				function g(e, t) {
					if ("object" != typeof e) return !1;
					try {
						return t(e), !0
					} catch (e) {
						return !1
					}
				}

				function m(e) {
					return "[object Map]" === l(e)
				}

				function v(e) {
					return "[object Set]" === l(e)
				}

				function b(e) {
					return "[object WeakMap]" === l(e)
				}

				function w(e) {
					return "[object WeakSet]" === l(e)
				}

				function A(e) {
					return "[object ArrayBuffer]" === l(e)
				}

				function S(e) {
					return "undefined" != typeof ArrayBuffer && (A.working ? A(e) : e instanceof ArrayBuffer)
				}

				function E(e) {
					return "[object DataView]" === l(e)
				}

				function j(e) {
					return "undefined" != typeof DataView && (E.working ? E(e) : e instanceof DataView)
				}
				t.isArgumentsObject = n, t.isGeneratorFunction = o, t.isTypedArray = a, t.isPromise = function(e) {
					return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
				}, t.isArrayBufferView = function(e) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || j(e)
				}, t.isUint8Array = function(e) {
					return "Uint8Array" === i(e)
				}, t.isUint8ClampedArray = function(e) {
					return "Uint8ClampedArray" === i(e)
				}, t.isUint16Array = function(e) {
					return "Uint16Array" === i(e)
				}, t.isUint32Array = function(e) {
					return "Uint32Array" === i(e)
				}, t.isInt8Array = function(e) {
					return "Int8Array" === i(e)
				}, t.isInt16Array = function(e) {
					return "Int16Array" === i(e)
				}, t.isInt32Array = function(e) {
					return "Int32Array" === i(e)
				}, t.isFloat32Array = function(e) {
					return "Float32Array" === i(e)
				}, t.isFloat64Array = function(e) {
					return "Float64Array" === i(e)
				}, t.isBigInt64Array = function(e) {
					return "BigInt64Array" === i(e)
				}, t.isBigUint64Array = function(e) {
					return "BigUint64Array" === i(e)
				}, m.working = "undefined" != typeof Map && m(new Map), t.isMap = function(e) {
					return "undefined" != typeof Map && (m.working ? m(e) : e instanceof Map)
				}, v.working = "undefined" != typeof Set && v(new Set), t.isSet = function(e) {
					return "undefined" != typeof Set && (v.working ? v(e) : e instanceof Set)
				}, b.working = "undefined" != typeof WeakMap && b(new WeakMap), t.isWeakMap = function(e) {
					return "undefined" != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap)
				}, w.working = "undefined" != typeof WeakSet && w(new WeakSet), t.isWeakSet = function(e) {
					return w(e)
				}, A.working = "undefined" != typeof ArrayBuffer && A(new ArrayBuffer), t.isArrayBuffer = S, E.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && E(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = j;
				var O = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

				function x(e) {
					return "[object SharedArrayBuffer]" === l(e)
				}

				function P(e) {
					return void 0 !== O && (void 0 === x.working && (x.working = x(new O)), x.working ? x(e) : e instanceof O)
				}

				function k(e) {
					return g(e, f)
				}

				function I(e) {
					return g(e, p)
				}

				function T(e) {
					return g(e, y)
				}

				function _(e) {
					return u && g(e, d)
				}

				function R(e) {
					return s && g(e, h)
				}
				t.isSharedArrayBuffer = P, t.isAsyncFunction = function(e) {
					return "[object AsyncFunction]" === l(e)
				}, t.isMapIterator = function(e) {
					return "[object Map Iterator]" === l(e)
				}, t.isSetIterator = function(e) {
					return "[object Set Iterator]" === l(e)
				}, t.isGeneratorObject = function(e) {
					return "[object Generator]" === l(e)
				}, t.isWebAssemblyCompiledModule = function(e) {
					return "[object WebAssembly.Module]" === l(e)
				}, t.isNumberObject = k, t.isStringObject = I, t.isBooleanObject = T, t.isBigIntObject = _, t.isSymbolObject = R, t.isBoxedPrimitive = function(e) {
					return k(e) || I(e) || T(e) || _(e) || R(e)
				}, t.isAnyArrayBuffer = function(e) {
					return "undefined" != typeof Uint8Array && (S(e) || P(e))
				}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach((function(e) {
					Object.defineProperty(t, e, {
						enumerable: !1,
						value: function() {
							throw new Error(e + " is not supported in userland")
						}
					})
				}))
			},
			539: (e, t, r) => {
				var n = r(155),
					o = r(108),
					i = Object.getOwnPropertyDescriptors || function(e) {
						for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
						return r
					},
					a = /%[sdj%]/g;
				t.format = function(e) {
					if (!w(e)) {
						for (var t = [], r = 0; r < arguments.length; r++) t.push(l(arguments[r]));
						return t.join(" ")
					}
					r = 1;
					for (var n = arguments, o = n.length, i = String(e).replace(a, (function(e) {
							if ("%%" === e) return "%";
							if (r >= o) return e;
							switch (e) {
								case "%s":
									return String(n[r++]);
								case "%d":
									return Number(n[r++]);
								case "%j":
									try {
										return JSON.stringify(n[r++])
									} catch (e) {
										return "[Circular]"
									}
									default:
										return e
							}
						})), c = n[r]; r < o; c = n[++r]) v(c) || !E(c) ? i += " " + c : i += " " + l(c);
					return i
				}, t.deprecate = function(e, r) {
					if (void 0 !== n && !0 === n.noDeprecation) return e;
					if (void 0 === n) return function() {
						return t.deprecate(e, r).apply(this, arguments)
					};
					var i = !1;
					return function() {
						if (!i) {
							if (n.throwDeprecation) throw new Error(r);
							n.traceDeprecation ? o.trace(r) : o.error(r), i = !0
						}
						return e.apply(this, arguments)
					}
				};
				var c = {},
					u = /^$/;
				if (n.env.NODE_DEBUG) {
					var s = n.env.NODE_DEBUG;
					s = s.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), u = new RegExp("^" + s + "$", "i")
				}

				function l(e, r) {
					var n = {
						seen: [],
						stylize: p
					};
					return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), m(r) ? n.showHidden = r : r && t._extend(n, r), A(n.showHidden) && (n.showHidden = !1), A(n.depth) && (n.depth = 2), A(n.colors) && (n.colors = !1), A(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = f), y(n, e, n.depth)
				}

				function f(e, t) {
					var r = l.styles[t];
					return r ? "[" + l.colors[r][0] + "m" + e + "[" + l.colors[r][1] + "m" : e
				}

				function p(e, t) {
					return e
				}

				function y(e, r, n) {
					if (e.customInspect && r && x(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
						var o = r.inspect(n, e);
						return w(o) || (o = y(e, o, n)), o
					}
					var i = function(e, t) {
						if (A(t)) return e.stylize("undefined", "undefined");
						if (w(t)) {
							var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
							return e.stylize(r, "string")
						}
						return b(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0
					}(e, r);
					if (i) return i;
					var a = Object.keys(r),
						c = function(e) {
							var t = {};
							return e.forEach((function(e, r) {
								t[e] = !0
							})), t
						}(a);
					if (e.showHidden && (a = Object.getOwnPropertyNames(r)), O(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return d(r);
					if (0 === a.length) {
						if (x(r)) {
							var u = r.name ? ": " + r.name : "";
							return e.stylize("[Function" + u + "]", "special")
						}
						if (S(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
						if (j(r)) return e.stylize(Date.prototype.toString.call(r), "date");
						if (O(r)) return d(r)
					}
					var s, l = "",
						f = !1,
						p = ["{", "}"];
					return g(r) && (f = !0, p = ["[", "]"]), x(r) && (l = " [Function" + (r.name ? ": " + r.name : "") + "]"), S(r) && (l = " " + RegExp.prototype.toString.call(r)), j(r) && (l = " " + Date.prototype.toUTCString.call(r)), O(r) && (l = " " + d(r)), 0 !== a.length || f && 0 != r.length ? n < 0 ? S(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), s = f ? function(e, t, r, n, o) {
						for (var i = [], a = 0, c = t.length; a < c; ++a) _(t, String(a)) ? i.push(h(e, t, r, n, String(a), !0)) : i.push("");
						return o.forEach((function(o) {
							o.match(/^\d+$/) || i.push(h(e, t, r, n, o, !0))
						})), i
					}(e, r, n, c, a) : a.map((function(t) {
						return h(e, r, n, c, t, f)
					})), e.seen.pop(), function(e, t, r) {
						return e.reduce((function(e, t) {
							return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
						}), 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
					}(s, l, p)) : p[0] + l + p[1]
				}

				function d(e) {
					return "[" + Error.prototype.toString.call(e) + "]"
				}

				function h(e, t, r, n, o, i) {
					var a, c, u;
					if ((u = Object.getOwnPropertyDescriptor(t, o) || {
							value: t[o]
						}).get ? c = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (c = e.stylize("[Setter]", "special")), _(n, o) || (a = "[" + o + "]"), c || (e.seen.indexOf(u.value) < 0 ? (c = v(r) ? y(e, u.value, null) : y(e, u.value, r - 1)).indexOf("\n") > -1 && (c = i ? c.split("\n").map((function(e) {
							return "  " + e
						})).join("\n").substr(2) : "\n" + c.split("\n").map((function(e) {
							return "   " + e
						})).join("\n")) : c = e.stylize("[Circular]", "special")), A(a)) {
						if (i && o.match(/^\d+$/)) return c;
						(a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
					}
					return a + ": " + c
				}

				function g(e) {
					return Array.isArray(e)
				}

				function m(e) {
					return "boolean" == typeof e
				}

				function v(e) {
					return null === e
				}

				function b(e) {
					return "number" == typeof e
				}

				function w(e) {
					return "string" == typeof e
				}

				function A(e) {
					return void 0 === e
				}

				function S(e) {
					return E(e) && "[object RegExp]" === P(e)
				}

				function E(e) {
					return "object" == typeof e && null !== e
				}

				function j(e) {
					return E(e) && "[object Date]" === P(e)
				}

				function O(e) {
					return E(e) && ("[object Error]" === P(e) || e instanceof Error)
				}

				function x(e) {
					return "function" == typeof e
				}

				function P(e) {
					return Object.prototype.toString.call(e)
				}

				function k(e) {
					return e < 10 ? "0" + e.toString(10) : e.toString(10)
				}
				t.debuglog = function(e) {
					if (e = e.toUpperCase(), !c[e])
						if (u.test(e)) {
							var r = n.pid;
							c[e] = function() {
								var n = t.format.apply(t, arguments);
								o.error("%s %d: %s", e, r, n)
							}
						} else c[e] = function() {};
					return c[e]
				}, t.inspect = l, l.colors = {
					bold: [1, 22],
					italic: [3, 23],
					underline: [4, 24],
					inverse: [7, 27],
					white: [37, 39],
					grey: [90, 39],
					black: [30, 39],
					blue: [34, 39],
					cyan: [36, 39],
					green: [32, 39],
					magenta: [35, 39],
					red: [31, 39],
					yellow: [33, 39]
				}, l.styles = {
					special: "cyan",
					number: "yellow",
					boolean: "yellow",
					undefined: "grey",
					null: "bold",
					string: "green",
					date: "magenta",
					regexp: "red"
				}, t.types = r(955), t.isArray = g, t.isBoolean = m, t.isNull = v, t.isNullOrUndefined = function(e) {
					return null == e
				}, t.isNumber = b, t.isString = w, t.isSymbol = function(e) {
					return "symbol" == typeof e
				}, t.isUndefined = A, t.isRegExp = S, t.types.isRegExp = S, t.isObject = E, t.isDate = j, t.types.isDate = j, t.isError = O, t.types.isNativeError = O, t.isFunction = x, t.isPrimitive = function(e) {
					return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
				}, t.isBuffer = r(384);
				var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

				function T() {
					var e = new Date,
						t = [k(e.getHours()), k(e.getMinutes()), k(e.getSeconds())].join(":");
					return [e.getDate(), I[e.getMonth()], t].join(" ")
				}

				function _(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				t.log = function() {
					o.log("%s - %s", T(), t.format.apply(t, arguments))
				}, t.inherits = r(717), t._extend = function(e, t) {
					if (!t || !E(t)) return e;
					for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
					return e
				};
				var R = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

				function F(e, t) {
					if (!e) {
						var r = new Error("Promise was rejected with a falsy value");
						r.reason = e, e = r
					}
					return t(e)
				}
				t.promisify = function(e) {
					if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
					if (R && e[R]) {
						var t;
						if ("function" != typeof(t = e[R])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
						return Object.defineProperty(t, R, {
							value: t,
							enumerable: !1,
							writable: !1,
							configurable: !0
						}), t
					}

					function t() {
						for (var t, r, n = new Promise((function(e, n) {
								t = e, r = n
							})), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
						o.push((function(e, n) {
							e ? r(e) : t(n)
						}));
						try {
							e.apply(this, o)
						} catch (e) {
							r(e)
						}
						return n
					}
					return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), R && Object.defineProperty(t, R, {
						value: t,
						enumerable: !1,
						writable: !1,
						configurable: !0
					}), Object.defineProperties(t, i(e))
				}, t.promisify.custom = R, t.callbackify = function(e) {
					if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

					function t() {
						for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
						var o = t.pop();
						if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
						var i = this,
							a = function() {
								return o.apply(i, arguments)
							};
						e.apply(this, t).then((function(e) {
							n.nextTick(a.bind(null, null, e))
						}), (function(e) {
							n.nextTick(F.bind(null, e, a))
						}))
					}
					return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t
				}
			},
			430: (e, t, r) => {
				"use strict";
				var n = r(804),
					o = r(83),
					i = r(924),
					a = i("Object.prototype.toString"),
					c = r(410)(),
					u = o(),
					s = i("String.prototype.slice"),
					l = {},
					f = r(882),
					p = Object.getPrototypeOf;
				c && f && p && n(u, (function(e) {
					if ("function" == typeof r.g[e]) {
						var t = new r.g[e];
						if (Symbol.toStringTag in t) {
							var n = p(t),
								o = f(n, Symbol.toStringTag);
							if (!o) {
								var i = p(n);
								o = f(i, Symbol.toStringTag)
							}
							l[e] = o.get
						}
					}
				}));
				var y = r(692);
				e.exports = function(e) {
					return !!y(e) && (c && Symbol.toStringTag in e ? function(e) {
						var t = !1;
						return n(l, (function(r, n) {
							if (!t) try {
								var o = r.call(e);
								o === n && (t = o)
							} catch (e) {}
						})), t
					}(e) : s(a(e), 8, -1))
				}
			},
			83: (e, t, r) => {
				"use strict";
				var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"];
				e.exports = function() {
					for (var e = [], t = 0; t < n.length; t++) "function" == typeof r.g[n[t]] && (e[e.length] = n[t]);
					return e
				}
			},
			882: (e, t, r) => {
				"use strict";
				var n = r(210)("%Object.getOwnPropertyDescriptor%");
				if (n) try {
					n([], "length")
				} catch (e) {
					n = null
				}
				e.exports = n
			}
		},
		u = {};

	function s(e) {
		var t = u[e];
		if (void 0 !== t) {
			if (void 0 !== t.error) throw t.error;
			return t.exports
		}
		var r = u[e] = {
			exports: {}
		};
		try {
			var n = {
				id: e,
				module: r,
				factory: c[e],
				require: s
			};
			s.i.forEach((function(e) {
				e(n)
			})), r = n.module, n.factory.call(r.exports, r, r.exports, n.require)
		} catch (e) {
			throw r.error = e, e
		}
		return r.exports
	}
	s.m = c, s.c = u, s.i = [], s.hu = e => e + "." + s.h() + ".hot-update.js", s.miniCssF = e => {}, s.hmrF = () => "main." + s.h() + ".hot-update.json", s.h = () => "5e042f4e9cbee9d9d44e", s.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "@workadventure/scripting-api-extra:", s.l = (r, n, o, i) => {
		if (e[r]) e[r].push(n);
		else {
			var a, c;
			if (void 0 !== o)
				for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
					var f = u[l];
					if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
						a = f;
						break
					}
				}
			a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.setAttribute("data-webpack", t + o), a.src = r), e[r] = [n];
			var p = (t, n) => {
					a.onerror = a.onload = null, clearTimeout(y);
					var o = e[r];
					if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), t) return t(n)
				},
				y = setTimeout(p.bind(null, void 0, {
					type: "timeout",
					target: a
				}), 12e4);
			a.onerror = p.bind(null, a.onerror), a.onload = p.bind(null, a.onload), c && document.head.appendChild(a)
		}
	}, (() => {
		var e, t, r, n, o = {},
			i = s.c,
			a = [],
			c = [],
			u = "idle";

		function l(e) {
			u = e;
			for (var t = [], r = 0; r < c.length; r++) t[r] = c[r].call(null, e);
			return Promise.all(t)
		}

		function f(e) {
			if (0 === t.length) return e();
			var r = t;
			return t = [], Promise.all(r).then((function() {
				return f(e)
			}))
		}

		function p(e) {
			if ("idle" !== u) throw new Error("check() is only allowed in idle status");
			return l("check").then(s.hmrM).then((function(n) {
				return n ? l("prepare").then((function() {
					var o = [];
					return t = [], r = [], Promise.all(Object.keys(s.hmrC).reduce((function(e, t) {
						return s.hmrC[t](n.c, n.r, n.m, e, r, o), e
					}), [])).then((function() {
						return f((function() {
							return e ? d(e) : l("ready").then((function() {
								return o
							}))
						}))
					}))
				})) : l(h() ? "ready" : "idle").then((function() {
					return null
				}))
			}))
		}

		function y(e) {
			return "ready" !== u ? Promise.resolve().then((function() {
				throw new Error("apply() is only allowed in ready status")
			})) : d(e)
		}

		function d(e) {
			e = e || {}, h();
			var t = r.map((function(t) {
				return t(e)
			}));
			r = void 0;
			var o = t.map((function(e) {
				return e.error
			})).filter(Boolean);
			if (o.length > 0) return l("abort").then((function() {
				throw o[0]
			}));
			var i = l("dispose");
			t.forEach((function(e) {
				e.dispose && e.dispose()
			}));
			var a, c = l("apply"),
				u = function(e) {
					a || (a = e)
				},
				s = [];
			return t.forEach((function(e) {
				if (e.apply) {
					var t = e.apply(u);
					if (t)
						for (var r = 0; r < t.length; r++) s.push(t[r])
				}
			})), Promise.all([i, c]).then((function() {
				return a ? l("fail").then((function() {
					throw a
				})) : n ? d(e).then((function(e) {
					return s.forEach((function(t) {
						e.indexOf(t) < 0 && e.push(t)
					})), e
				})) : l("idle").then((function() {
					return s
				}))
			}))
		}

		function h() {
			if (n) return r || (r = []), Object.keys(s.hmrI).forEach((function(e) {
				n.forEach((function(t) {
					s.hmrI[e](t, r)
				}))
			})), n = void 0, !0
		}
		s.hmrD = o, s.i.push((function(d) {
			var h, g, m, v, b = d.module,
				w = function(r, n) {
					var o = i[n];
					if (!o) return r;
					var c = function(t) {
							if (o.hot.active) {
								if (i[t]) {
									var c = i[t].parents; - 1 === c.indexOf(n) && c.push(n)
								} else a = [n], e = t; - 1 === o.children.indexOf(t) && o.children.push(t)
							} else console.warn("[HMR] unexpected require(" + t + ") from disposed module " + n), a = [];
							return r(t)
						},
						s = function(e) {
							return {
								configurable: !0,
								enumerable: !0,
								get: function() {
									return r[e]
								},
								set: function(t) {
									r[e] = t
								}
							}
						};
					for (var p in r) Object.prototype.hasOwnProperty.call(r, p) && "e" !== p && Object.defineProperty(c, p, s(p));
					return c.e = function(e) {
						return function(e) {
							switch (u) {
								case "ready":
									return l("prepare"), t.push(e), f((function() {
										return l("ready")
									})), e;
								case "prepare":
									return t.push(e), e;
								default:
									return e
							}
						}(r.e(e))
					}, c
				}(d.require, d.id);
			b.hot = (h = d.id, g = b, v = {
				_acceptedDependencies: {},
				_acceptedErrorHandlers: {},
				_declinedDependencies: {},
				_selfAccepted: !1,
				_selfDeclined: !1,
				_selfInvalidated: !1,
				_disposeHandlers: [],
				_main: m = e !== h,
				_requireSelf: function() {
					a = g.parents.slice(), e = m ? void 0 : h, s(h)
				},
				active: !0,
				accept: function(e, t, r) {
					if (void 0 === e) v._selfAccepted = !0;
					else if ("function" == typeof e) v._selfAccepted = e;
					else if ("object" == typeof e && null !== e)
						for (var n = 0; n < e.length; n++) v._acceptedDependencies[e[n]] = t || function() {}, v._acceptedErrorHandlers[e[n]] = r;
					else v._acceptedDependencies[e] = t || function() {}, v._acceptedErrorHandlers[e] = r
				},
				decline: function(e) {
					if (void 0 === e) v._selfDeclined = !0;
					else if ("object" == typeof e && null !== e)
						for (var t = 0; t < e.length; t++) v._declinedDependencies[e[t]] = !0;
					else v._declinedDependencies[e] = !0
				},
				dispose: function(e) {
					v._disposeHandlers.push(e)
				},
				addDisposeHandler: function(e) {
					v._disposeHandlers.push(e)
				},
				removeDisposeHandler: function(e) {
					var t = v._disposeHandlers.indexOf(e);
					t >= 0 && v._disposeHandlers.splice(t, 1)
				},
				invalidate: function() {
					switch (this._selfInvalidated = !0, u) {
						case "idle":
							r = [], Object.keys(s.hmrI).forEach((function(e) {
								s.hmrI[e](h, r)
							})), l("ready");
							break;
						case "ready":
							Object.keys(s.hmrI).forEach((function(e) {
								s.hmrI[e](h, r)
							}));
							break;
						case "prepare":
						case "check":
						case "dispose":
						case "apply":
							(n = n || []).push(h)
					}
				},
				check: p,
				apply: y,
				status: function(e) {
					if (!e) return u;
					c.push(e)
				},
				addStatusHandler: function(e) {
					c.push(e)
				},
				removeStatusHandler: function(e) {
					var t = c.indexOf(e);
					t >= 0 && c.splice(t, 1)
				},
				data: o[h]
			}, e = void 0, v), b.parents = a, b.children = [], a = [], d.require = w
		})), s.hmrC = {}, s.hmrI = {}
	})(), (() => {
		var e;
		s.g.importScripts && (e = s.g.location + "");
		var t = s.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var r = t.getElementsByTagName("script");
			r.length && (e = r[r.length - 1].src)
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
	})(), r = (e, t, r, n) => {
		var o = document.createElement("link");
		return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = i => {
			if (o.onerror = o.onload = null, "load" === i.type) r();
			else {
				var a = i && ("load" === i.type ? "missing" : i.type),
					c = i && i.target && i.target.href || t,
					u = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
				u.code = "CSS_CHUNK_LOAD_FAILED", u.type = a, u.request = c, o.parentNode.removeChild(o), n(u)
			}
		}, o.href = t, document.head.appendChild(o), o
	}, n = (e, t) => {
		for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
			var o = (a = r[n]).getAttribute("data-href") || a.getAttribute("href");
			if ("stylesheet" === a.rel && (o === e || o === t)) return a
		}
		var i = document.getElementsByTagName("style");
		for (n = 0; n < i.length; n++) {
			var a;
			if ((o = (a = i[n]).getAttribute("data-href")) === e || o === t) return a
		}
	}, o = [], i = [], a = e => ({
		dispose: () => {
			for (var e = 0; e < o.length; e++) {
				var t = o[e];
				t.parentNode && t.parentNode.removeChild(t)
			}
			o.length = 0
		},
		apply: () => {
			for (var e = 0; e < i.length; e++) i[e].rel = "stylesheet";
			i.length = 0
		}
	}), s.hmrC.miniCss = (e, t, c, u, l, f) => {
		l.push(a), e.forEach((e => {
			var t = s.miniCssF(e),
				a = s.p + t,
				c = n(t, a);
			c && u.push(new Promise(((t, n) => {
				var u = r(e, a, (() => {
					u.as = "style", u.rel = "preload", t()
				}), n);
				o.push(c), i.push(u)
			})))
		}))
	}, (() => {
		var e, t, r, n, o = s.hmrS_jsonp = s.hmrS_jsonp || {
				179: 0
			},
			i = {};

		function a(e) {
			return new Promise(((t, r) => {
				i[e] = t;
				var n = s.p + s.hu(e),
					o = new Error;
				s.l(n, (t => {
					if (i[e]) {
						i[e] = void 0;
						var n = t && ("load" === t.type ? "missing" : t.type),
							a = t && t.target && t.target.src;
						o.message = "Loading hot update chunk " + e + " failed.\n(" + n + ": " + a + ")", o.name = "ChunkLoadError", o.type = n, o.request = a, r(o)
					}
				}))
			}))
		}

		function c(i) {
			function a(e) {
				for (var t = [e], r = {}, n = t.map((function(e) {
						return {
							chain: [e],
							id: e
						}
					})); n.length > 0;) {
					var o = n.pop(),
						i = o.id,
						a = o.chain,
						u = s.c[i];
					if (u && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
						if (u.hot._selfDeclined) return {
							type: "self-declined",
							chain: a,
							moduleId: i
						};
						if (u.hot._main) return {
							type: "unaccepted",
							chain: a,
							moduleId: i
						};
						for (var l = 0; l < u.parents.length; l++) {
							var f = u.parents[l],
								p = s.c[f];
							if (p) {
								if (p.hot._declinedDependencies[i]) return {
									type: "declined",
									chain: a.concat([f]),
									moduleId: i,
									parentId: f
								}; - 1 === t.indexOf(f) && (p.hot._acceptedDependencies[i] ? (r[f] || (r[f] = []), c(r[f], [i])) : (delete r[f], t.push(f), n.push({
									chain: a.concat([f]),
									id: f
								})))
							}
						}
					}
				}
				return {
					type: "accepted",
					moduleId: e,
					outdatedModules: t,
					outdatedDependencies: r
				}
			}

			function c(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r]; - 1 === e.indexOf(n) && e.push(n)
				}
			}
			s.f && delete s.f.jsonpHmr, e = void 0;
			var u = {},
				l = [],
				f = {},
				p = function(e) {
					console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
				};
			for (var y in t)
				if (s.o(t, y)) {
					var d, h = t[y],
						g = !1,
						m = !1,
						v = !1,
						b = "";
					switch ((d = h ? a(y) : {
							type: "disposed",
							moduleId: y
						}).chain && (b = "\nUpdate propagation: " + d.chain.join(" -> ")), d.type) {
						case "self-declined":
							i.onDeclined && i.onDeclined(d), i.ignoreDeclined || (g = new Error("Aborted because of self decline: " + d.moduleId + b));
							break;
						case "declined":
							i.onDeclined && i.onDeclined(d), i.ignoreDeclined || (g = new Error("Aborted because of declined dependency: " + d.moduleId + " in " + d.parentId + b));
							break;
						case "unaccepted":
							i.onUnaccepted && i.onUnaccepted(d), i.ignoreUnaccepted || (g = new Error("Aborted because " + y + " is not accepted" + b));
							break;
						case "accepted":
							i.onAccepted && i.onAccepted(d), m = !0;
							break;
						case "disposed":
							i.onDisposed && i.onDisposed(d), v = !0;
							break;
						default:
							throw new Error("Unexception type " + d.type)
					}
					if (g) return {
						error: g
					};
					if (m)
						for (y in f[y] = h, c(l, d.outdatedModules), d.outdatedDependencies) s.o(d.outdatedDependencies, y) && (u[y] || (u[y] = []), c(u[y], d.outdatedDependencies[y]));
					v && (c(l, [d.moduleId]), f[y] = p)
				} t = void 0;
			for (var w, A = [], S = 0; S < l.length; S++) {
				var E = l[S],
					j = s.c[E];
				j && (j.hot._selfAccepted || j.hot._main) && f[E] !== p && !j.hot._selfInvalidated && A.push({
					module: E,
					require: j.hot._requireSelf,
					errorHandler: j.hot._selfAccepted
				})
			}
			return {
				dispose: function() {
					var e;
					r.forEach((function(e) {
						delete o[e]
					})), r = void 0;
					for (var t, n = l.slice(); n.length > 0;) {
						var i = n.pop(),
							a = s.c[i];
						if (a) {
							var c = {},
								f = a.hot._disposeHandlers;
							for (S = 0; S < f.length; S++) f[S].call(null, c);
							for (s.hmrD[i] = c, a.hot.active = !1, delete s.c[i], delete u[i], S = 0; S < a.children.length; S++) {
								var p = s.c[a.children[S]];
								p && (e = p.parents.indexOf(i)) >= 0 && p.parents.splice(e, 1)
							}
						}
					}
					for (var y in u)
						if (s.o(u, y) && (a = s.c[y]))
							for (w = u[y], S = 0; S < w.length; S++) t = w[S], (e = a.children.indexOf(t)) >= 0 && a.children.splice(e, 1)
				},
				apply: function(e) {
					for (var t in f) s.o(f, t) && (s.m[t] = f[t]);
					for (var r = 0; r < n.length; r++) n[r](s);
					for (var o in u)
						if (s.o(u, o)) {
							var a = s.c[o];
							if (a) {
								w = u[o];
								for (var c = [], p = [], y = [], d = 0; d < w.length; d++) {
									var h = w[d],
										g = a.hot._acceptedDependencies[h],
										m = a.hot._acceptedErrorHandlers[h];
									if (g) {
										if (-1 !== c.indexOf(g)) continue;
										c.push(g), p.push(m), y.push(h)
									}
								}
								for (var v = 0; v < c.length; v++) try {
									c[v].call(null, w)
								} catch (t) {
									if ("function" == typeof p[v]) try {
										p[v](t, {
											moduleId: o,
											dependencyId: y[v]
										})
									} catch (r) {
										i.onErrored && i.onErrored({
											type: "accept-error-handler-errored",
											moduleId: o,
											dependencyId: y[v],
											error: r,
											originalError: t
										}), i.ignoreErrored || (e(r), e(t))
									} else i.onErrored && i.onErrored({
										type: "accept-errored",
										moduleId: o,
										dependencyId: y[v],
										error: t
									}), i.ignoreErrored || e(t)
								}
							}
						} for (var b = 0; b < A.length; b++) {
						var S = A[b],
							E = S.module;
						try {
							S.require(E)
						} catch (t) {
							if ("function" == typeof S.errorHandler) try {
								S.errorHandler(t, {
									moduleId: E,
									module: s.c[E]
								})
							} catch (r) {
								i.onErrored && i.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: E,
									error: r,
									originalError: t
								}), i.ignoreErrored || (e(r), e(t))
							} else i.onErrored && i.onErrored({
								type: "self-accept-errored",
								moduleId: E,
								error: t
							}), i.ignoreErrored || e(t)
						}
					}
					return l
				}
			}
		}
		self.webpackHotUpdate_workadventure_scripting_api_extra = (e, r, o) => {
			for (var a in r) s.o(r, a) && (t[a] = r[a]);
			o && n.push(o), i[e] && (i[e](), i[e] = void 0)
		}, s.hmrI.jsonp = function(e, o) {
			t || (t = {}, n = [], r = [], o.push(c)), s.o(t, e) || (t[e] = s.m[e])
		}, s.hmrC.jsonp = function(i, u, l, f, p, y) {
			p.push(c), e = {}, r = u, t = l.reduce((function(e, t) {
				return e[t] = !1, e
			}), {}), n = [], i.forEach((function(t) {
				s.o(o, t) && void 0 !== o[t] && (f.push(a(t)), e[t] = !0)
			})), s.f && (s.f.jsonpHmr = function(t, r) {
				e && !s.o(e, t) && s.o(o, t) && void 0 !== o[t] && (r.push(a(t)), e[t] = !0)
			})
		}, s.hmrM = () => {
			if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
			return fetch(s.p + s.hmrF()).then((e => {
				if (404 !== e.status) {
					if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText);
					return e.json()
				}
			}))
		}
	})(), s(318)
})();
//# sourceMappingURL=bundle.js.map