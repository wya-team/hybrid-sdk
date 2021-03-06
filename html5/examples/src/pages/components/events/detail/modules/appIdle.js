import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/events/appIdle.md';

const invoke = {
	on: () => {
		wya.on('appIdle', (res) => {
			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
			Toasts.info(res, 0);

		});
	},
	off: () => {
		wya.off('appIdle');
	},
	debugger: () => {
		// 强制执行
		wya.invoke('debugger/invoke', {
			eventName: 'appIdle'
		}).then((res) => {
			Toasts.info('执行成功', 0);
		}).catch((res = {}) => {
			Toasts.info('执行失败：' + res.msg, 0);
		});
	}
};

export default {
	to: '/events/appIdle',
	title: 'appIdle',
	label: '多长时间不操作后触发',
	invoke,
	markdown
};
