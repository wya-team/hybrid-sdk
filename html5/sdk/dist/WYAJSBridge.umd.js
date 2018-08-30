(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WYAJSBridge = factory());
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











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

/**
 * 微型事件Pub/Sub模块
 * - 支持订阅事件，可单个，多个或者监听器（都会执行）
 * - 支持多个相同事件同时绑定，当某个事件返回`return false`; 不会继续执行
 */

var EventStore = function () {
	function EventStore() {
		var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		classCallCheck(this, EventStore);

		// 不可以存在关键值
		if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || target instanceof EventStore || target.__events__ || target.__listeners__ || target.on || target.off || target.emit) {
			throw new TypeError('\u4E0D\u7B26\u5408\u89C2\u5BDF\u6761\u4EF6\uFF0C\u8BF7\u5220\u9664\u4EE5\u4E0B\u5BF9\u8C61.\n\t\t\t\t\n__events__\n__listeners__\non\noff\nemit\n\t\t\t');
			return false;
		}
		/**
   * 不想暴露到最外层
   * this.__proto__.__events__
   */
		EventStore.prototype.__events__ = {};
		EventStore.prototype.__listeners__ = [];

		for (var _key in target) {
			this[_key] = target[_key];
		}
		// 通常我们会使用 on/off/trigger
		// this.on = this.on;
		// this.off = this.off;
		// this.trigger = this.emit;
	}
	/**
  * on/on
  * 用来订阅事件，可单个或者多个
  * @param  {string | object | function} action 事件名
  * - 订阅单个事件时为一个字符串，订阅多个事件则需要传入一个包含事件名/函数的键值对；订阅单个事件为函数时，增加一个监听器
  * @param  {function} callback 事件回调，仅订阅单个事件时才需要
  * @return {object} 返回自身以便于链式调用
  */


	createClass(EventStore, [{
		key: 'on',
		value: function on(action, callback) {
			if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === "object") {
				for (key in action) {
					if (action.hasOwnProperty(key) && typeof action[key] === "function") {
						this.on(key, action[key]);
					}
				}
			} else if (typeof action === "string" && typeof callback === "function") {

				this.__events__[action] || (this.__events__[action] = []);
				this.__events__[action].push(callback);
			} else if (typeof action === 'function') {
				this.__listeners__.push(action);
			}

			return this;
		}
		/**
   * off/off
   * 删除一个指定的事件队列
   * @param  {string} event 需要删除的事件名
   * @return {object} 返回自身以便于链式调用
   * 注：没有添加第二个参数（对应的函数方法）
   */

	}, {
		key: 'off',
		value: function off(event) {
			if (typeof event === 'string') {
				// this.__events__[event] = [];
				delete this.__events__[event];
			} else if ((typeof event === 'undefined' ? 'undefined' : _typeof(event)) === undefined) {
				this.__listeners__ = [];
			}

			return this;
		}
		/**
   * 一次订阅
   */

	}, {
		key: 'once',
		value: function once(event, callback) {
			var _this = this;

			if (typeof event === 'string' && (!this.__events__[event] || this.__events__[event].length === 0)) {
				var fired = false;

				var _callback = function _callback(opts) {
					_this.off(event);
					if (!fired) {
						fired = true;
						callback.call(_this, opts);
					}
				};
				this.on(event, _callback);
			}
			return this;
		}
		/**
   * emit
   * 用于发布'一个'指定的事件
   * @param {string} event 需要发布的事件
   * @param {object} opts 发布的事件的参数会传递给事件队列中的每个函数回调，包括监听器
   * @return {object} 返回自身以便于链式调用
   */

	}, {
		key: 'emit',
		value: function emit(event) {
			var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			if (opts instanceof Array || (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object' || opts.event) {
				throwError(event + '\u4E8B\u4EF6\uFF1A\u56DE\u8C03\u53C2\u6570\u5FC5\u987B\u662F\u5BF9\u8C61, \u4E14\u4E0D\u80FD\u8BA9\u5E26event\u5173\u952E\u5B57');
				return this;
			}
			if (!this.__events__[event] || this.__events__[event].length === 0) {
				throwError(event + '\u4E8B\u4EF6\uFF1A\u6CA1\u6709\u4EFB\u4F55\u56DE\u8C03');
				return this;
			}
			if (typeof event === 'string' && this.__events__.hasOwnProperty(event) && this.__events__[event] instanceof Array) {
				// 每个订阅器都会触发，直到某个返回false
				for (var i = 0; this.__events__[event] && i < this.__events__[event].length; i++) {
					if (this.__events__[event][i].call(this, opts) === false) break;
				}
			}
			// 每个监听器都会触发，直到某个返回false
			for (var _i = 0; _i < this.__listeners__.length; _i++) {
				if (this.__listeners__[_i].call(this, _extends({}, opts, { event: event })) === false) break;
			}
			return this;
		}
	}]);
	return EventStore;
}();

var WYAJSBridge = function () {
	function WYAJSBridge() {
		classCallCheck(this, WYAJSBridge);
		this.version = '1.0.0';

		// 参数池
		this.store = {};

		// 唯一标识
		this.count = 0;

		// 事件源
		this.source = new EventStore();

		// 初始化事件触发的次数
		this.initCount = 0;

		// 等待触发的
		this.waitEmit = [];
	}
	// 版本号


	createClass(WYAJSBridge, [{
		key: '_send',
		value: function _send(id, scheme) {
			var _ref = this.store[id] || {},
			    eventName = _ref.eventName;

			setTimeout(function () {
				// 创建 iframe 并设置src
				var iframe = document.createElement('iframe');
				iframe.src = 'command://' + scheme + '?id=' + id;
				iframe.style.display = 'none';
				document.body.appendChild(iframe);

				// 延迟删除节点
				setTimeout(function () {
					iframe.parentNode.removeChild(iframe);
				}, 300);
			}, 0);
		}
		/**
   * getParam Native层调用
   * 客户端接收到请求后，会使用 id 调用 getParam 从参数池中获取对应的参数
   * @param  number id 唯一标识符
   * @return string
   */

	}, {
		key: 'getParam',
		value: function getParam(id) {
			var _ref2 = this.store[id] || {},
			    params = _ref2.params;

			return params;
		}
	}, {
		key: 'invoke',
		value: function invoke(scheme, params) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				if (!scheme) {
					throwError('scheme 方法名必传', reject);
					return;
				}
				// 对参数进行字符串化，并进行编码；
				params = params ? decodeURIComponent(JSON.stringify(params)) : '';

				// 生成唯一 id 标识
				var id = _this.count++;
				_this.store[id] = {
					params: params,
					eventName: scheme + '__' + id
				};

				// 注册自定义事件，并绑定回调
				// 回调会在接收到`WYAJSBridge.emit`时被触发执行；
				var eventName = _this.store[id].eventName;
				// 一次订阅

				_this.source.once(eventName, function (e) {
					var data = e.data,
					    id = e.id,
					    status = e.status;

					if (status == 1) {
						resolve(data);
					} else {
						reject(data);
					}
					delete _this.store[id];
				});

				// 发送指令
				if (_this.initCount === 0) {
					_this.waitEmit.push(_this._send.bind(_this, id, scheme));
				} else {
					_this._send(id, scheme);
				}
			});
		}
	}, {
		key: 'addEventListener',
		value: function addEventListener(key, eventName) {
			for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
				rest[_key - 2] = arguments[_key];
			}

			// { success: () => {}, fail: () => {} }
			var successFn = (_typeof(rest[0]) === 'object' ? rest[0].success : rest[0]) || function () {};
			var failFn = (_typeof(rest[1]) === 'object' ? rest[0].fail : rest[1]) || function () {};
			this.source[key](eventName, function (e) {
				var data = e.data,
				    id = e.id,
				    status = e.status;

				if (status == 1) {
					successFn(data);
				} else {
					failFn(data);
				}
			});
		}
	}, {
		key: 'on',
		value: function on(eventName) {
			for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				rest[_key2 - 1] = arguments[_key2];
			}

			this.addEventListener.apply(this, ['on', eventName].concat(rest));
		}
	}, {
		key: 'once',
		value: function once(eventName) {
			for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				rest[_key3 - 1] = arguments[_key3];
			}

			this.addEventListener.apply(this, ['once', eventName].concat(rest));
		}
		/**
   * 其他
   */

	}, {
		key: 'last',
		value: function last(eventName) {
			this.off(eventName);

			for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
				rest[_key4 - 1] = arguments[_key4];
			}

			this.on.apply(this, [eventName].concat(rest));
		}
	}, {
		key: 'first',
		value: function first(eventName) {
			if (this.source.__events__[eventName] || this.source.__events__[eventName].length === 0) {
				for (var _len5 = arguments.length, rest = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
					rest[_key5 - 1] = arguments[_key5];
				}

				this.on.apply(this, [eventName].concat(rest));
			} else {
				var msg = eventName + '\u53EA\u6267\u884C\u89E6\u53D1\u4E00\u6B21\u7ED1\u5B9A';
				throwError(msg);
			}
		}
		/**
   * emit Native层调用
   * Native 完成功能后，直接调用 WYAJSBridge.emit(id, data)，将执行结果和之前nativeCall传过来的标识回传给H5
   * @param  object
   */

	}, {
		key: 'emit',
		value: function emit(id, data) {
			var _ref3 = this.store[id] || {},
			    _ref3$eventName = _ref3.eventName,
			    eventName = _ref3$eventName === undefined ? id : _ref3$eventName;

			switch (eventName) {
				case '_init_':
					this.initCount++;
					if (this.initCount === 1) {
						useDispatchEvent(eventName, data);
						// 循环处理等初始化完成执行的函数
						this.waitEmit.forEach(function (item, index) {
							return item();
						});
						this.waitEmit = [];
					} else {
						var msg = '_init_ 事件, 只允许初始化一次';
						useDispatchEvent(eventName, {
							status: 0,
							msg: msg
						});
						throwError(msg);
					}
					break;
				case '_error_':
					// 程序主动提示错误
					throwError(data);
				// break;
				default:
					this.source.emit(eventName, data);

			}
		}
	}, {
		key: 'off',
		value: function off(eventName) {
			this.source.off(eventName);
		}
	}]);
	return WYAJSBridge;
}();

var native = new WYAJSBridge();

return native;

})));
