import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';

/**
 * 全部变量初始化及使用
 */

typeof window === "object" ? window._global = {} : this._global = {};

_global.version = '1.0';

wya.ready(() => {
	Toasts.info("wya-js-sdk: 载入成功");
});

wya.onError((error) => {
	typeof error === 'object' ? JSON.stringify(error) : error;
	Toasts.info(`全局异常捕获： ${error}`);
});
