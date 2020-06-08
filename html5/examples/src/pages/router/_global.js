import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';

/**
 * 全部变量初始化及使用
 */

typeof window === "object" ? window._global = {} : this._global = {};

_global.version = '1.0';

wya.ready(() => {
	Toasts.info("@wya/js-sdk: 载入成功");
});

wya.onError((error) => {
	typeof error === 'object' ? JSON.stringify(error) : error;
	let msg = `全局异常捕获： ${error}`;
	// Toasts.info(msg);
	console.log(msg);
});
wya.onLog((res) => {
	typeof res === 'object' ? JSON.stringify(res) : res;
	let msg = `全局日志捕获： ${res}`;
	Toasts.info(msg);
	console.log(msg);
});

// window.addEventListener('keypress', (e) => {
// 	if (e.keyCode == 114) {
// 		location.reload();
// 	}
// });
