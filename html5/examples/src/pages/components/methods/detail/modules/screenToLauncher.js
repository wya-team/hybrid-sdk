import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/screenToLauncher.md';

const invoke = () => {
	wya.invoke('screen/toLauncher', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/screenToLauncher',
	title: 'screen/toLauncher',
	label: '',
	invoke,
	markdown
};
