import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/styleSetStatusBar.md';

const invoke = () => {
	wya.invoke('style/setStatusBar', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/styleSetStatusBar',
	title: 'style/setStatusBar',
	label: '',
	invoke,
	markdown,
	param: {
		style: 'light',
		color: '#000',
		animated: true
	}
};
