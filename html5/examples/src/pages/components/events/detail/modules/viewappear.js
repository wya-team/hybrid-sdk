import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/events/viewAppear.md';

const invoke = {
	on: () => {
		wya.on('viewAppear', (res) => {
			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
			Toasts.info(res, 0);

		});
	},
	off: () => {
		wya.off('viewAppear');
	},
	debugger: () => {
		// 强制执行
		wya.invoke('debugger/invoke', {
			eventName: 'viewAppear'
		}).then((res) => {
			Toasts.info('执行成功', 0);
		}).catch((res = {}) => {
			Toasts.info('执行失败：' + res.msg, 0);
		});
	}
};

export default {
	to: '/events/viewAppear',
	title: 'viewAppear',
	label: '显示到屏幕的事件',
	invoke,
	markdown
};
