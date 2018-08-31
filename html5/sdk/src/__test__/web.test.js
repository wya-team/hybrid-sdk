import WYAJSBridge from '../native.js';
import wya from '../web.js';
describe('web.js', () => {
	window.WYAJSBridge = WYAJSBridge;

	test('验证api', () => {
		expect(typeof wya).toBe('object');
		expect(typeof wya.version).toBe('string');
		expect(typeof wya.invoke).toBe('function');
		expect(typeof wya.on).toBe('function');
		expect(typeof wya.once).toBe('function');
		expect(typeof wya.first).toBe('function');
		expect(typeof wya.last).toBe('function');
		expect(typeof wya.off).toBe('function');
		expect(typeof wya.onError).toBe('function');
	});
	test('验证ready', () => {
		wya.ready(() => {
			expect(1).toBe(1);
		});

		// 模拟触发一次
		WYAJSBridge.emit('_init_', {
			status: 1,
			data: {
				appVersion: '1.0.0' 
			}
		});

	});
	test('验证error', () => {
		wya.ready(() => {
			expect(1).toBe(1);
		});

		wya.onError((res) => {
			expect(res.msg).toBe('error');
		});

		wya.on('_error_', (res) => {
			expect(res.msg).toBe('error');
		});

		// Native 模拟触发
		WYAJSBridge.emit('_error_', {
			status: 1,
			data: {
				msg: 'error' 
			}
		});

	});
});
