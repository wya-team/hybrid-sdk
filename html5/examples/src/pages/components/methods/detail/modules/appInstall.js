import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/appInstall.md';

const invoke = () => {
	wya.invoke('app/install', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/appInstall',
	title: 'app/install',
	label: '',
	invoke,
	markdown,
	param: {
		url: ''
	}
};
