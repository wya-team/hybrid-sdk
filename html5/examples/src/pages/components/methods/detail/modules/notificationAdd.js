import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/notificationAdd.md';

const invoke = () => {
	wya.invoke('notification/add', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/notificationAdd',
	title: 'notification/add',
	label: '',
	invoke,
	markdown,
	param: {
		vibrate: [100, 500, 100, 500],
		sound: 'default',
		light: false,
		notify: { 
			title: '测试', 
			content: '测试', 
			extra: {
				name: '1'
			}, 
			cover: false 
		},
		timestamp: (new Date()).getTime() + 30000
	}
};
