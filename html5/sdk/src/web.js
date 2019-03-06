import { throwError, createMixins } from './utils/utils';

import modules from './modules/root';

class WebSDK {
	version = '1.0.0';
	constructor() {
		// 不使用this.__readyArr__, 避免被遍历
		Object.defineProperty(this, '__readyArr__', {
			value: [],
			writable: true
		});
		Object.keys(modules).forEach(i => this.registerModule(i, modules[i]));

		// 是否初始化
		this.isInit = false;

		// 初始化
		window.addEventListener('_ready_', (e) => {
			const { status, data = {} } = e.data || {};
			if (status === 1) {

				this.isInit = true;

				// 设置常量
				for (let key in data) {
					if (!this[key]) {
						this[key] = data[key];
					}
				}

				// 执行ready
				this.__readyArr__.forEach(fn => fn());
				this.__readyArr__ = [];
			}
		});
	}
	ready(fn) {
		if (this.isInit) {
			fn && fn();
		} else {
			this.__readyArr__.push(fn);
		}
	}
	onError(fn) {
		// todo, 卸载
		window.addEventListener('_error_', (e) => {
			fn && fn(e.data);
		});
	}
	onLog(fn) {
		// todo, 卸载
		window.addEventListener('_log_', (e) => {
			fn && fn(e.data);
		});
	}
	// -- start 不推荐外部使用
	useJSBridgeFn(key, ...rest) {
		let fn = window.WYAJSBridge ? window.WYAJSBridge[key] : undefined;
		let msg = 'WYAJSBridge API未注入';

		!fn && throwError(msg);
		// 异常处理
		return fn 
			? fn.apply(WYAJSBridge, rest) 
			: key === 'invoke' 
				? Promise.reject({ msg })
				: undefined; 
	}
	invoke(eventName, param) {
		return this.useJSBridgeFn('invoke', eventName, param);
	}
	on(...rest) {
		return this.useJSBridgeFn('on', ...rest);
	}
	once(...rest) {
		return this.useJSBridgeFn('once', ...rest);
	}
	first(...rest) {
		return this.useJSBridgeFn('first', ...rest);
	}
	last(...rest) {
		return this.useJSBridgeFn('last',  ...rest);
	}
	off(eventName) {
		return this.useJSBridgeFn('off', eventName);
	}
	// -- end
	/**
	 * 引入模块
	 */
	requireModule(moduleName) {
		return this[moduleName];
	}
	/**
	 * 注册模块, 不允许重复注册
	 */
	registerModule(moduleName, target) {
		if (this[moduleName] || !target) return;

		let methods;
		if (target instanceof Array) {
			methods = target.reduce((pre, cur) => {
				pre[cur] = this.invoke.bind(this, `${moduleName}/${cur}`);
				return pre;
			}, {});
		} else if (typeof target === 'object') {
			methods = target;
		}

		// 不使用this[moduleName], 避免被遍历, 且不可重写
		Object.defineProperty(this, moduleName, {
			value: methods,
			writable: false
		});

	}
}

export default new WebSDK();