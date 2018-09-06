import { throwError, createMixins } from './utils/utils';

import modules from './modules/root';

@createMixins({ ...modules })
class WebSDK {
	version = '1.0.0';
	constructor() {

		// 不使用this.__readyArr__, 避免被遍历
		WebSDK.prototype.__readyArr__ = [];

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
		// this.useJSBridgeFn('on', '_error_', fn);
		window.addEventListener('_error_', (e) => {
			fn && fn(e.data);
		});
	}
	// -- start 不推荐外部使用
	useJSBridgeFn(key, ...rest) {
		let fn = window.WYAJSBridge ? window.WYAJSBridge[key] : undefined;
		let msg = 'WYAJSBridge API未注入';
		// 异常处理
		return fn ? fn.apply(WYAJSBridge, rest) : throwError(msg); 
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
}

export default new WebSDK();