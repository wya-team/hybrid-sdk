import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/sms.md';

const invoke = () => {
	wya.invoke('sms', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/sms',
	title: 'sms',
	label: '',
	invoke,
	markdown,
	param: {
		numbers: ['10086'],
		text: '测试',
		silent: false
	}
};
