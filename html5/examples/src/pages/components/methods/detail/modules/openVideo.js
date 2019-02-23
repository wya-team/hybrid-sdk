import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/openVideo.md';

const invoke = () => {
	wya.invoke('openVideo', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/openVideo',
	title: 'openVideo',
	label: '',
	invoke,
	markdown,
	param: {
		url: ''
	}
};
