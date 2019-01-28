! function(e, n) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.wya = n()
}(this, function() {
	"use strict";
	var e, c = function(e, n) {
			var t = void 0;
			"function" == typeof document.CustomEvent ? t = new document.CustomEvent(e, {
				bubbles: !0,
				cancelable: !0
			}) : "function" == typeof document.createEvent && (t = document.createEvent("Event")).initEvent(e, !0, !0), n && t && (t.data = n), t ? window.dispatchEvent(t) : console.error("Bridge Error: dispatchEvent")
		},
		n = function() {
			function r(e, n) {
				for (var t = 0; t < n.length; t++) {
					var r = n[t];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(e, n, t) {
				return n && r(e.prototype, n), t && r(e, t), e
			}
		}();
	return new(function() {
		for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
		return function(e) {
			Object.assign.apply(Object, [e.prototype].concat(n))
		}
	}((Object.assign || function(e) {
		for (var n = 1; n < arguments.length; n++) {
			var t = arguments[n];
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
		}
		return e
	})({}, {}))(e = function() {
		function e() {
			var a = this;
			! function(e, n) {
				if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
			}(this, e), this.version = "1.0.0", Object.defineProperty(this, "__readyArr__", {
				value: [],
				writable: !0
			}), this.isInit = !1, window.addEventListener("_ready_", function(e) {
				var n = e.data || {},
					t = n.status,
					r = n.data,
					i = void 0 === r ? {} : r;
				if (1 === t) {
					for (var o in a.isInit = !0, i) a[o] || (a[o] = i[o]);
					a.__readyArr__.forEach(function(e) {
						return e()
					}), a.__readyArr__ = []
				}
			})
		}
		return n(e, [{
			key: "ready",
			value: function(e) {
				this.isInit ? e && e() : this.__readyArr__.push(e)
			}
		}, {
			key: "onError",
			value: function(n) {
				window.addEventListener("_error_", function(e) {
					n && n(e.data)
				})
			}
		}, {
			key: "useJSBridgeFn",
			value: function(e) {
				var n, t, r = window.WYAJSBridge ? window.WYAJSBridge[e] : void 0,
					i = "WYAJSBridge API未注入";
				!r && (c("_error_", n = i), t && t({
					status: 0,
					msg: n
				}));
				for (var o = arguments.length, a = Array(1 < o ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = arguments[u];
				return r ? r.apply(WYAJSBridge, a) : "invoke" === e ? Promise.reject({
					msg: i
				}) : void 0
			}
		}, {
			key: "invoke",
			value: function(e, n) {
				return this.useJSBridgeFn("invoke", e, n)
			}
		}, {
			key: "on",
			value: function() {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return this.useJSBridgeFn.apply(this, ["on"].concat(n))
			}
		}, {
			key: "once",
			value: function() {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return this.useJSBridgeFn.apply(this, ["once"].concat(n))
			}
		}, {
			key: "first",
			value: function() {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return this.useJSBridgeFn.apply(this, ["first"].concat(n))
			}
		}, {
			key: "last",
			value: function() {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return this.useJSBridgeFn.apply(this, ["last"].concat(n))
			}
		}, {
			key: "off",
			value: function(e) {
				return this.useJSBridgeFn("off", e)
			}
		}]), e
	}()) || e)
});
