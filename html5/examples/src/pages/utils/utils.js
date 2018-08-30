// -- 微一案工具库 --
export * from 'wya-utils';

import { changeObjRegex } from 'wya-utils';
import { isEqualWith } from 'lodash';

// -- end --
/**
 * 改写wya-utils里表单验证的正则
 */
changeObjRegex({
	validLetterAndNumber: {
		regex: /^[A-Za-z0-9]{1,}$/,
		error: "请不要输入特殊字符"
	},
	validPhone: {
		regex: /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/,
		error: "请填写正确的电话号码"
	}
});

// -- 业务相关 --

export const initSelect = (res, value, label, children, level = 1) => {
	let __arr = [];
	const __child = [];
	if (res instanceof Array && level > 0) {
		for (let j = 0; j < res.length; j++) {
			__arr = [...__arr, {
				value: res[j][value] || j,
				label: res[j][label] || res[j],
				children: initSelect(res[j][children], value, label, children, level - 1)
			}];
		}
		return __arr;
	}
	return level == 0 ? undefined : [];
};
/**
 *
 */
export const initTreeData = (obj, value, label, children) => {
	if (typeof obj === 'object') {
		return JSON.parse(
			JSON.stringify(obj)
				.replace(new RegExp(value, 'g'), 'value')
				.replace(new RegExp(label, 'g'), 'label')
				.replace(new RegExp(`children|${children}`, 'g'), 'children')
		);
	}
	console.error('参数错误');
	return [];
};

/**
 * 初始化数据
 * @param  {String} res 传入的数据
 * @param  {String} id  数组是已str区分 ，默认'id'
 * @param  {String} _count
 * @param  {Object} initObj 判断是否有init
 * @param  {Array} initArr 判断是否有init
 * @return {String}
 * 参考reducers中的使用
 */
export const initItem = (res, str, count, initObj, initArr) => {
	let itemArr = [];
	let itemObj = {};
	let targetArr;
	const id = str || 'id';
	if (typeof res == "object" && res.data && res.data instanceof Array) { // 传入的不是数组。res.data是数组
		targetArr = res.data;
	} else if (res instanceof Array) { // 传入的是数组
		targetArr = res;
	} else {
		return console.error('初始化参数错误');
	}
	for (let i = 0; i < targetArr.length; i++) {
		itemArr = [...itemArr, targetArr[i][id]];
		itemObj = {
			...itemObj,
			[targetArr[i][id]]: initObj || targetArr[i]
		};
	}
	/* 判断是否有_count*/
	if (count) {
		const { _count } = res;
		return { itemArr, itemObj, _count };
	}
	return { itemArr, itemObj };
};
/**
 * 作为分页初始数据
 * for mobile
 */
export const initObj = {
	currentPage: 0, // 当前页数
	totalPage: 1, // 总页数
	isEnd: 0, // 是否正在加载 0 上拉加载，1为加载中，2为已全部加载,3数据异常
	itemArr: [],
	itemObj: {},

};
/**
 * 作为分页初始数据
 * for pc
 */
export const initPage = {
	curPage: 0, // 当前页数
	totalPage: 1, // 总页数
	pageSize: 10, // 条数
	isEnd: 0, // 是否正在加载 0 上拉加载，1为加载中，2为已全部加载,3数据异常
	itemArr: [],
	itemObj: {},
};
/**
 * 对自定义链接做处理
 */
export const diyLink = (event, type = 'shop') => {
	const url = event.currentTarget.getAttribute('href');
	if (/^((https|http|ftp|rtsp|mms)?:\/\/)/.test(url) && !url.includes(`weiyianws.com/${type}/`) && !url.includes(`m.ruishan666/${type}/`)) {
		window.location.href = url;
		event.preventDefault();
		return false;
	}
	_global.scroll[url] = 0;
};
/**
 * 记忆滚动监听需要初始化
 */
export const initLink = (event) => {
	const url = event.currentTarget.getAttribute('href');
	_global.scroll[url] = 0;
	if (url === window.location.pathname) {
		document.body.scrollTop = 0;
	}
};

/**
 * 处理base64 前最
 */
export const filterBase64 = (data) => {
	const changeStr = (imgUrl) => {
		imgUrl = imgUrl.replace(/data:image\/[^;]+;base64,/g, '');
		return imgUrl;
	};
	if (!(data instanceof Array)) {
		data = changeStr(data);
	} else {
		for (let i = 0; i < data.length; i++) {
			data[i] = changeStr(data[i]);
		}
	}
	return data;
};

/**
 * 处理项目中rtf（富文本中的图片）
 */
export const rtfImages = (rtfData) => {
	if (!data) {
		return data;
	}
	data = data
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
		.replace(/&nbsp;/g, " ")
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, "\"");
	data = data
		.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, '<img src="$1" />')
		.replace(/<img [^>]*src=['"][^'"]+img\.baidu\.com([^'"]+)[^>]*>/gi, '<img style="width:auto;" src="https://img.baidu.com$1" />')
		.replace(/<img [^>]*src=['"][^'"]+osscdn\.weiyian\.com([^'"]+)[^>]*>/gi, '<img src="http://osscdn.weiyian.com$1!1-0" />');
	return data;
};

/**
 * ios微信支付的坑
 * 重载页面
 */
export const urlReLoad = () => {
	const firstUrl = ['shop', 'train']; // 根路由无视
	/**
	 * ios设备，微信端，长度，当前页
	 */
	if (
		_global.device.ios 
		&& (
			_global.landingPage.split('/').length > 3 
			|| (_global.landingPage.split('/').length > 2 && !firstUrl.includes(_global.landingPage.split('/')[1]))
		)
	) {
		// 如： "/shop/goods/2" length: 4
		window.location.reload();
		return !0;
	}
	return !1;
};
/**
 * 重构验证路由
 */
export const vaildRoute = (routes) => {
	let obj = {};
	for (let i = 0; i < routes.length; i++) {
		const { rule = [] } = routes[i] || {};
		if (process.env.NODE_ENV === 'development' && !(rule instanceof Array)) {
			return console.error("rule must be Array");
		}
		for (let j = 0; j < rule.length; j++) {
			if (process.env.NODE_ENV === 'development' && typeof rule[j] !== "number") {
				return console.error("rule's child must be Number");
			}
			obj = {
				...obj,
				[rule[j]]: [...obj[rule[j]] || [], routes[i].path]
			};
		}
	}
	return obj;
};

/**
 * css in js
 */
export const loadCssCode = (code) => {
	const style = document.createElement('style');
	style.type = 'text/css';
	style.rel = 'stylesheet';
	try {
		style.innerHTML = code;
	} catch (ex) {
		style.styleSheet.cssText = code;
	}
	const head = document.getElementsByTagName('head')[0];
	head.appendChild(style);
};

/**
 * for Service Compare
 */
export const serviceObj = {
	param: {},
	data: undefined
};
export const serviceCompare = (newParam, localObj) => {
	return isEqualWith(newParam, localObj.param)
		? localObj.data
		: undefined;
};