import WYAJSBridge from '../native.js';
describe('native.js', () => {
	let initCount = 0;
	let id = WYAJSBridge.count;
	window.addEventListener('_ready_', ({ data }) => {
		if (!initCount) {
			expect(data.status).toBe(1);
			expect(data.data.appVersion).toBe("1.0.0");
			initCount++;

			// Native 模拟触发
			
		} else {
			// 初始化第二次
			expect(data.status).toBe(0);
		}
	});

	window.addEventListener('_error_', (e) => {
		// console.log(`ERROR: ${e}`);
	});

	test('验证api', () => {
		expect(typeof WYAJSBridge).toBe('object');
		expect(typeof WYAJSBridge.version).toBe('string');
		expect(typeof WYAJSBridge.invoke).toBe('function');
		expect(typeof WYAJSBridge.on).toBe('function');
		expect(typeof WYAJSBridge.once).toBe('function');
		expect(typeof WYAJSBridge.first).toBe('function');
		expect(typeof WYAJSBridge.last).toBe('function');
		expect(typeof WYAJSBridge.emit).toBe('function');
		expect(typeof WYAJSBridge.off).toBe('function');
		expect(typeof WYAJSBridge.getParams).toBe('function');
	});

	test('验证未初始化时绑定', () => {
		WYAJSBridge.on("_network_", (res) => {
			expect(res.type).toBe("3g");
		});
		// Native 必须做出相应，通知事件已打开
		WYAJSBridge.emit(id, { 
			status: 1,
			msg: '成功打开',
			data: {
				
			}
		});
		id++; // 触发后增加
		WYAJSBridge.emit("_network_", { 
			status: 1,
			data: {
				type: '3g'
			}
		});

		// 卸载
		WYAJSBridge.off("_network_");
		// Native 必须做出相应，通知事件已打开
		WYAJSBridge.emit(id, { 
			status: 1,
			msg: '关闭成功',
			data: {
				
			}
		});
		id++; // 触发后增加
		expect(Object.keys(WYAJSBridge.source.__events__).length).toBe(0);
		expect(WYAJSBridge.nativeEvents.length).toBe(0);
	});

	test('验证初始化', () => {

		// 模拟触发一次
		WYAJSBridge.emit('_ready_', {
			status: 1,
			data: {
				appVersion: '1.0.0' 
			}
		});

		// 模拟触发两次
		WYAJSBridge.emit('_ready_', {
			status: 1,
			data: {
				appVersion: '1.0.0' 
			}
		});
	});

	test('验证业务端调用', () => {
		WYAJSBridge.invoke("getNetWork", { user: 'wya' })
			.then((res) => {
				expect(res.type).toBe("3g");
			})
			.catch((err) => {
				console.log(err);
			});

		expect(typeof WYAJSBridge.store[id]).toBe("object");

		let params = JSON.parse(WYAJSBridge.getParams(id));		
		expect(params.user).toBe("wya");

		WYAJSBridge.emit(id, { 
			status: 1,
			data: {
				type: '3g'
			}
		});
		expect(typeof WYAJSBridge.store[id]).toBe("undefined");

		id++; // 触发后增加

		expect(WYAJSBridge.count).toBe(id);
	});

	test('验证业务端订阅失败', () => {
		window.addEventListener('_error_', (e) => {
			expect(e.data).toBe("_network_开启失败");
		});

		WYAJSBridge.on("_network_", (res) => {
			// todo
		}, (res) => {
			expect(res.msg).toBe("失败打开");
		});
		let _id = id;
		// Native 必须做出相应，通知事件已打开
		WYAJSBridge.emit(id, { 
			status: 0,
			msg: '失败打开',
			data: {
				
			}
		});
		id++; // 触发后增加

		WYAJSBridge.off('_network_');
		WYAJSBridge.emit(id, { 
			status: 1,
			msg: '关闭成功',
			data: {
				
			}
		});
		id++; // 触发后增加

		expect(typeof WYAJSBridge.store[_id]).toBe("undefined");
	});

	test('验证业务端订阅成功', () => {
		WYAJSBridge.on("_network_", (res) => {
			expect(res.type).toBe("3g");
		});

		// Native 必须做出相应，通知事件已打开
		WYAJSBridge.emit(id, { 
			status: 1,
			msg: '成功打开',
			data: {
				
			}
		});

		WYAJSBridge.emit('_network_', { 
			status: 1,
			msg: '',
			data: {
				type: '3g'
			}
		});
		expect(typeof WYAJSBridge.store[id]).toBe("undefined");
		expect(WYAJSBridge.nativeEvents.includes('_network_')).toBe(true);

		id++; // 触发后增加

		// 再次订阅，之前没有取消，不会通知Native, id 不会增加
		WYAJSBridge.once("_network_", (res) => {
			expect(res.tip).toBe("xxx");
		});
		expect(WYAJSBridge.count).toBe(id);

		// 再次触发
		WYAJSBridge.emit('_network_', { 
			status: 1,
			msg: '',
			data: {
				type: '3g',
				tip: 'xxx'
			}
		});

		// 再次订阅，之前没有取消，不会通知Native, id 不会增加
		WYAJSBridge.off('_network_');
		WYAJSBridge.emit(id, { 
			status: 1,
			msg: '关闭成功',
			data: {
				
			}
		});
		id++; // 触发后增加

		expect(WYAJSBridge.nativeEvents.includes('_network_')).toBe(false);
		expect(WYAJSBridge.count).toBe(id);
	});
});
