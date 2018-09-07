import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/events/tap.md';

const invoke = () => {
	wya.once('tap', (res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	});

	// 强制执行
	wya.invoke('debugger', {
		event: 'tap'
	}).then((res) => {
		Toasts.info('执行成功', 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/events/tap',
	title: 'tap',
	label: '',
	invoke,
	markdown
};
