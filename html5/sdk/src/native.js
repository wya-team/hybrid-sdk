import EventStore from './utils/event';
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
		this.source = new EventStore();

		// 初始化事件触发的次数
		this.initCount = 0;

		// 等待触发的
		this.waitEmit = [];
	}
	_send(id, scheme){
		const { eventName } = this.store[id] || {};
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
	/**
	 * getParam Native层调用
	 * 客户端接收到请求后，会使用 id 调用 getParam 从参数池中获取对应的参数
	 * @param  number id 唯一标识符
	 * @return string
	 */
	getParam(id) {
		const { params } = this.store[id] || {};
		return params;
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
			const id = this.count++;
			this.store[id] = {
				params,
				eventName: `${scheme}__${id}`
			};

			// 注册自定义事件，并绑定回调
			// 回调会在接收到`WYAJSBridge.emit`时被触发执行；
			const { eventName } = this.store[id];
			// 一次订阅
			this.source.once(eventName, e => {
				const { data, id, status } = e;
				if (status == 1) {
					resolve(data);
				} else {
					reject(data);
				}
				delete this.store[id];
			});

			// 发送指令
			if (this.initCount === 0) {
				this.waitEmit.push(this._send.bind(this, id, scheme));
			} else {
				this._send(id, scheme);
			}
		});
	}
	addEventListener(key, eventName,  ...rest) {
		// { success: () => {}, fail: () => {} }
		const successFn = (typeof rest[0] === 'object' ? rest[0].success : rest[0]) || (() => {});
		const failFn = (typeof rest[1] === 'object' ? rest[0].fail : rest[1]) || (() => {});
		this.source[key](eventName, (e) => {
			const { data, id, status } = e;
			if (status == 1) {
				successFn(data);
			} else {
				failFn(data);
			}
		});
	}
	
	on(eventName, ...rest) {
		this.addEventListener('on', eventName, ...rest);
	}
	once(eventName, ...rest) {
		this.addEventListener('once', eventName, ...rest);
	}
	/**
	 * 其他
	 */
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
	off(eventName) {
		this.source.off(eventName);
	}
}
export default new WYAJSBridge();