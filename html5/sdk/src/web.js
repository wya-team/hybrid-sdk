import { throwError, createMixins } from './utils/utils';

import modules from './modules/root';

@createMixins({ ...modules })
class WebSDK {
	version = '1.0.0';
	constructor() {
		this.__readyArr__ = [];

		// 是否初始化
		this.__isInit__ = false;

		// 初始化
		window.addEventListener('_init_', (e) => {
			const { status, data = {} } = e.data || {};
			if (status === 1) {

				this.__isInit__ = true;

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
		if (this.__isInit__) {
			fn && fn();
		} else {
			this.__readyArr__.push(fn);
		}
	}
	onError(fn) {
		this.useJSBridgeFn('on', '_error_', fn);
	}
	// -- start 不推荐外部使用
	useJSBridgeFn(key, ...rest) {
		let fn = window.WYAJSBridge ? window.WYAJSBridge[key] : undefined;
		let msg = 'WYAJSBridge API未注入';

		// 异常处理
		!fn && throwError(msg); 
		return fn ? fn.apply(WYAJSBridge, rest) : Promise.reject({ msg });
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