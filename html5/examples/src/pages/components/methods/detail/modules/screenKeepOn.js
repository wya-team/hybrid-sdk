import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/screenKeepOn.md';

const invoke = () => {
	wya.invoke('screen/keepOn', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/screenKeepOn',
	title: 'screen/keepOn',
	label: '',
	invoke,
	markdown,
	param: {
		keepOn: false
	}
};
