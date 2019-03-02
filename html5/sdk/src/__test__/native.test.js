import WYAJSBridge from '../native.js';
describe('native.js', () => {
	let initCount = 0;
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
		// console.log(`ERROR: ${e.data}`);
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
		expect(typeof WYAJSBridge.getParam).toBe('function');
	});
	test('验证未初始化时绑定', () => {
		WYAJSBridge.on("_network_", (res) => {
			expect(res.type).toBe("3g");
		});
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

		// Native 响应
		let id = 1;

		expect(typeof WYAJSBridge.store[id]).toBe("object");

		let params = JSON.parse(WYAJSBridge.getParam(id));		
		expect(params.user).toBe("wya");

		WYAJSBridge.emit(id, { 
			status: 1,
			data: {
				type: '3g'
			}
		});
		expect(typeof WYAJSBridge.store[id]).toBe("undefined");
	});

	test('验证业务端订阅', () => {
		WYAJSBridge.on("_network_", (res) => {
			expect(res.type).toBe("3g");
		});


		// Native 响应
		WYAJSBridge.emit("_network_", { 
			status: 1,
			data: {
				type: '3g'
			}
		});
	});

	test('验证业务端取消订阅', () => {
		WYAJSBridge.off("_network_");

		// Native 响应
		WYAJSBridge.emit("_network_", { 
			status: 1,
			data: {
				type: '3g'
			}
		});
	});

	test('验证业务端多次订阅', () => {
		WYAJSBridge.on('_test_', () => {

		});
		WYAJSBridge.once('_test_', () => {

		});
		expect(WYAJSBridge.source.__events__._test_.length).toBe(2);

		WYAJSBridge.emit('_test_');
		expect(WYAJSBridge.source.__events__._test_.length).toBe(1);

		WYAJSBridge.off('_test_');
		expect(WYAJSBridge.source.__events__._test_).toBe(undefined);
	});

});
