(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.wya = factory());
}(this, (function () { 'use strict';

var throwError = function throwError(msg, fn) {
	useDispatchEvent('_error_', msg);
	fn && fn({
		status: 0,
		msg: msg
	});
};
var useDispatchEvent = function useDispatchEvent(eventName, data) {
	// 创建自定义对象事件;
	var eventItem = void 0;
	if (typeof document.CustomEvent === 'function') {
		eventItem = new document.CustomEvent(eventName, {
			bubbles: true,
			cancelable: true
		});
	} else if (typeof document.createEvent === 'function') {
		eventItem = document.createEvent('Event');
		eventItem.initEvent(eventName, true, true);
	}

	// 将数据挂载到事件对象中
	if (data && eventItem) {
		eventItem.data = data;
	}

	// 触发自定义事件
	if (eventItem) {
		window.dispatchEvent(eventItem);
	} else {
		console.error('Bridge Error: dispatchEvent');
	}
};

// 用于对象 
// @createMixins({})
// class {}
var createMixins = function createMixins() {
	for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
		mixins[_key] = arguments[_key];
	}

	return function (target) {
		Object.assign.apply(Object, [target.prototype].concat(mixins));
	};
};

var modules = {};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _dec;
var _class;

var WebSDK = (_dec = createMixins(_extends({}, modules)), _dec(_class = function () {
	function WebSDK() {
		var _this = this;

		classCallCheck(this, WebSDK);
		this.version = '1.0.0';

		this.__readyArr__ = [];

		// 是否初始化
		this.__isInit__ = false;

		// 初始化
		window.addEventListener('_init_', function (e) {
			var _ref = e.data || {},
			    status = _ref.status,
			    _ref$data = _ref.data,
			    data = _ref$data === undefined ? {} : _ref$data;

			if (status === 1) {

				_this.__isInit__ = true;

				// 设置常量
				for (var key in data) {
					if (!_this[key]) {
						_this[key] = data[key];
					}
				}

				// 执行ready
				_this.__readyArr__.forEach(function (fn) {
					return fn();
				});
				_this.__readyArr__ = [];
			}
		});
	}

	createClass(WebSDK, [{
		key: 'ready',
		value: function ready(fn) {
			if (this.__isInit__) {
				fn && fn();
			} else {
				this.__readyArr__.push(fn);
			}
		}
	}, {
		key: 'error',
		value: function error(fn) {
			this.useJSBridgeFn('on', '_error_', fn);
		}
		// -- start 不推荐外部使用

	}, {
		key: 'useJSBridgeFn',
		value: function useJSBridgeFn(key) {
			var fn = window.WYAJSBridge ? window.WYAJSBridge[key] : undefined;
			var msg = 'WYAJSBridge API未注入';

			// 异常处理
			!fn && throwError(msg);

			for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				rest[_key - 1] = arguments[_key];
			}

			return fn ? fn.apply(WYAJSBridge, rest) : Promise.reject({ msg: msg });
		}
	}, {
		key: 'invoke',
		value: function invoke(eventName, param) {
			return this.useJSBridgeFn('invoke', eventName, param);
		}
	}, {
		key: 'on',
		value: function on() {
			for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				rest[_key2] = arguments[_key2];
			}

			return this.useJSBridgeFn.apply(this, ['on'].concat(rest));
		}
	}, {
		key: 'once',
		value: function once() {
			for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				rest[_key3] = arguments[_key3];
			}

			return this.useJSBridgeFn.apply(this, ['once'].concat(rest));
		}
	}, {
		key: 'first',
		value: function first() {
			for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				rest[_key4] = arguments[_key4];
			}

			return this.useJSBridgeFn.apply(this, ['first'].concat(rest));
		}
	}, {
		key: 'last',
		value: function last() {
			for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				rest[_key5] = arguments[_key5];
			}

			return this.useJSBridgeFn.apply(this, ['last'].concat(rest));
		}
	}, {
		key: 'off',
		value: function off(eventName) {
			return this.useJSBridgeFn('off', eventName);
		}
		// -- end

	}]);
	return WebSDK;
}()) || _class);


var web = new WebSDK();

return web;

})));
