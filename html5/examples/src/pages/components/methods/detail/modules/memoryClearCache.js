import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/memoryClearCache.md';

const invoke = () => {
	wya.invoke('memory/clearCache', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/memoryClearCache',
	title: 'memory/clearCache',
	label: '',
	invoke,
	markdown,
	param: {
		path: '',
	}
};
