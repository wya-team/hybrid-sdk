import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/downloadCancel.md';

const invoke = () => {
	wya.invoke('download/cancel', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/downloadCancel',
	title: 'download/cancel',
	label: '',
	invoke,
	markdown,
	param: {
		url: '',
		encode: true,
		path: '',
		report: false,
		allowResume: false
	}
};
