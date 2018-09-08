export const throwError = (msg, fn) => {
	useDispatchEvent('_error_', msg);
	fn && fn({
		status: 0,
		msg
	});
};
export const useDispatchEvent = (eventName, data) => {
	// 创建自定义对象事件;
	let eventItem;
	if (typeof document.CustomEvent === 'function') {
		eventItem = new document.CustomEvent(eventName, {
			bubbles: true,
			cancelable: true
		});
	} else if (typeof document.createEvent === 'function') {
		eventItem = document.createEvent('Event');
		eventItem.initEvent(eventName, true, true);
	}
	
	// 将数据挂载到事件对象中
	if (data && eventItem) {
		eventItem.data = data;
	}
	
	// 触发自定义事件
	if (eventItem) {
		window.dispatchEvent(eventItem);
	} else {
		console.error('Bridge Error: dispatchEvent');
	}
};

// 用于对象 
// @createMixins({})
// class {}
export const createMixins = (...mixins) => target => {
	Object.assign(target.prototype, ...mixins);
};

/**
 * 首字母大写
 */
export const capitalize = (value, content = '') => {
	if (!value) return '';
	value = value.toString();
	return content + value.charAt(0).toUpperCase() + value.slice(1);
};
