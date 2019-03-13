import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/downloadResume.md';

const invoke = () => {
	wya.invoke('download/resume', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/downloadResume',
	title: 'download/resume',
	label: '',
	invoke,
	markdown,
	param: {
		url: ''
	}
};
