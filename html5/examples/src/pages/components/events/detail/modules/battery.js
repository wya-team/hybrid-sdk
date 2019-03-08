import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/events/battery.md';

const invoke = {
	on: () => {
		wya.on('battery', (res) => {
			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
			Toasts.info(res, 0);

		});
	},
	off: () => {
		wya.off('battery');
	},
	debugger: () => {
		// 强制执行
		wya.invoke('debugger/invoke', {
			eventName: 'battery'
		}).then((res) => {
			Toasts.info('执行成功', 0);
		}).catch((res = {}) => {
			Toasts.info('执行失败：' + res.msg, 0);
		});
	}
};

export default {
	to: '/events/battery',
	title: 'battery',
	label: '电池状态',
	invoke,
	markdown
};
