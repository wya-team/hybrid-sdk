import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/events/viewAppear.md';

const invoke = () => {
	wya.once('viewAppear', (res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	});

	// 强制执行
	wya.invoke('debugger', {
		event: 'viewAppear'
	}).then((res) => {
		Toasts.info('执行成功', 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/events/viewAppear',
	title: 'viewAppear',
	label: '',
	invoke,
	markdown
};
