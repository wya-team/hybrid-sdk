import wya from 'wya-js-sdk';
/**
 * 全部变量初始化及使用
 */

typeof window === "object" ? window._global = {} : this._global = {};

_global.version = '1.0';

wya.ready(() => {
	alert("载入成功");
});
