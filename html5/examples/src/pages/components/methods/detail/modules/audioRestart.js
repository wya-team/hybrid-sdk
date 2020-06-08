import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/audioRestart.md';

const invoke = () => {
	wya.invoke('audio/restart', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/audioRestart',
	title: 'audio/restart',
	label: '',
	invoke,
	markdown,
	param: {
		path: ''
	}
};
