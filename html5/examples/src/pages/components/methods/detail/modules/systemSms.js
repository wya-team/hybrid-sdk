import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/systemSms.md';

const invoke = () => {
	wya.invoke('system/sms', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/systemSms',
	title: 'system/sms',
	label: '',
	invoke,
	markdown: {
		numbers: ['10086'],
		text: '测试',
		silent: false
	}
};
