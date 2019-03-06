import { EventStore } from 'wya-ps';
import { useDispatchEvent, throwError } from './utils/utils';

class WYAJSBridge {
	// 版本号
	version = '1.0.0';
	constructor() {
		// 参数池
		this.store = {};

		// 唯一标识
		this.count = 0;
		
		// 事件源
		this.source = new EventStore({}, { 
			onError: throwError
		});

		// 初始化事件触发的次数
		this.initCount = 0;

		// 等待触发的
		this.waitEmit = [];

		// 当前事件原生以开启的事件
		this.nativeEvents = [];

		// 处理历史问题
		this.saveParam = this.saveParams;
		this.parseParam = this.parseParams;
		this.getParam = this.getParams;
	}
	/**
	 * 生成唯一 id 标识
	 */
	saveParams(scheme, params) {
		const id = this.count++;
		const eventName = `${scheme}__${id}`;
		this.store[id] = {
			params,
			scheme,
			eventName
		};

		return { id, eventName };
	}
	/**
	 * getParams Native层调用
	 * 客户端接收到请求后，会使用 id 调用 getParams 从参数池中获取对应的参数
	 * @param  number id 唯一标识符
	 * @return string
	 */
	getParams(id) {
		const { params } = this.store[id] || {};

		return params;
	}
	/**
	 * 1. on(scheme, { success: () => {}, fail: () => {} })
	 * 2. on(scheme, () => {}, () => {})
	 */
	parseParams(rest) {
		let isObj0 = typeof rest[0] === 'object';
		let isObj1 = typeof rest[1] === 'object';

		let params = {};

		if (isObj0) {
			params = { ...reset[0] };

			delete params.success;
			delete params.fail;
		}

		const success = (isObj0 ? rest[0].success : rest[0]) || (() => {});
		const fail = (isObj1 ? rest[0].fail : rest[1]) || (() => {});

		return {
			params,
			success,
			fail
		};
	}
	setNativeEvents(isAdd, eventName) {
		this.nativeEvents = isAdd 
			? [...this.nativeEvents, eventName]
			: this.nativeEvents.filter(i => i != eventName);
	}
	/**
	 * 通知Native开启相关事件，暂时不对外不暴露
	 * 外部强制开启 wya.invoke()
	 */
	sendEvent(isAdd, eventName, ...rest) {
		if (/(_error_|_ready_|_log_)/.test(eventName)) return;
		
		const { success, fail } = this.parseParams(rest);

		// 已注册
		if (isAdd && this.nativeEvents.includes(eventName)) return;

		// once事件后的off, 避免卸载之前on处理的事件
		let events = this.source.__events__[eventName];
		if (!isAdd && events && events.length > 0) return;

		let scheme = isAdd ? 'event/add' : 'event/remove';
		let tipMsg = isAdd ? '开启' : '关闭';

		// 存在异步返回, 会影响两次重复发起开启请求
		this.setNativeEvents(isAdd, eventName);

		this.invoke(scheme, {
			eventName
		}).then((e) => {
			// todo, 输出打印日志
			useDispatchEvent('_log_', `${eventName}${tipMsg}成功`);
		}).catch((e) => {
			// 事件失败，从数组中移除
			this.setNativeEvents(!isAdd, eventName);

			// 异常处理
			fail(e);
			throwError(`${eventName}${tipMsg}失败`);
		});
	}
	invoke(scheme, params) {
		return new Promise((resolve, reject) => {
			if (!scheme) {
				throwError('scheme 方法名必传', reject);
				return;
			}
			// 对参数进行字符串化，并进行编码；
			params = params ? decodeURIComponent(JSON.stringify(params)) : '';

			// 生成唯一 id 标识
			const { id, eventName } = this.saveParams(scheme, params);

			// 注册自定义事件，并绑定回调
			// 回调会在接收到`WYAJSBridge.emit`时被触发执行；
			// 一次订阅
			this.source.once(eventName, e => {
				const { data, status, msg } = e;
				if (status == 1) {
					resolve(data);
				} else {
					reject(e);
				}
				delete this.store[id];
			});

			// 发送指令
			this._send(id);
		});
	}
	on(eventName, ...rest) {
		const { success, fail } = this.parseParams(rest);

		this.source.on(eventName, (e) => {
			const { data, status, msg } = e;
			if (status == 1) {
				success(data);
			} else {
				fail(e);
			}
		});

		this.sendEvent(true, eventName, ...rest);
	}
	off(eventName, ...rest) {
		this.source.off(eventName, ...rest);

		this.sendEvent(false, eventName, ...rest);
	}
	/**
	 * emit Native层调用
	 * Native 完成功能后，直接调用 WYAJSBridge.emit(id, data)，将执行结果和之前nativeCall传过来的标识回传给H5
	 * @param  object
	 */
	emit(id, data) {
		const { eventName = id } = this.store[id] || {};

		if (eventName !== '_error_' && typeof data === 'string') {
			try {
				data = JSON.parse(data) || {};
			} catch (e) {
				throwError(`Native端返回格式错误: ${data}`);
			}
		}

		if ( typeof data === 'object' && typeof data.status === 'undefined') {
			throwError(`Native端返回格式错误: ${data}`);
			return;
		}
		switch (eventName) {
			case '_ready_':
				this.initCount++;
				if (this.initCount === 1) {
					useDispatchEvent(eventName, data);
					// 循环处理等初始化完成执行的函数
					this.waitEmit.forEach((item, index) => {
						return item();
					});
					this.waitEmit = [];
				} else {
					let msg = '_ready_ 事件, 只允许初始化一次';
					useDispatchEvent(eventName, {
						status: 0,
						msg
					});
					throwError(msg);
				}
				break;
			case '_error_': // 程序主动提示错误
				throwError(data);
				// break;
			default:
				this.source.emit(eventName, data);
				
		}
	}
	/**
	 * 其他, 与this.source.once不同
	 */
	once(eventName, ...rest) {
		const { success, fail } = this.parseParams(rest);

		if (typeof eventName === 'string' && typeof success === "function") {
			const successFn = (e) => {
				this.off(eventName, successFn);
				success(e);
			};

			// 特殊处理
			const failFn = (e) => {
				this.off(eventName, successFn); // 卸载绑定的函数
				fail(e);
			};

			this.on(eventName, successFn, failFn);
		}
	}
	last(eventName, ...rest) {
		this.off(eventName);
		this.on(eventName, ...rest);
	}
	first(eventName, ...rest) {
		if (this.source.__events__[eventName] || this.source.__events__[eventName].length === 0) {
			this.on(eventName, ...rest);
		} else {
			let msg = `${eventName}只执行触发一次绑定`;
			throwError(msg);
		}
	}

	/**
	 * JS -> Native 通信
	 */
	_send(id){

		// 还没有初始化成功
		if (this.initCount === 0) {
			this.waitEmit.push(this._send.bind(this, id));
			return;
		}

		const { scheme, eventName } = this.store[id] || {};
		setTimeout(() => {
			// 创建 iframe 并设置src
			const iframe = document.createElement('iframe');
			iframe.src = `command://${scheme}?id=${id}`;
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
			
			// 延迟删除节点
			setTimeout(() => {
				iframe.parentNode.removeChild(iframe);
			}, 300);
		}, 0);
	}
}
export default new WYAJSBridge();