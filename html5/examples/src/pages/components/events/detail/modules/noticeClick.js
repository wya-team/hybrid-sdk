import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/events/noticeClick.md';

const invoke = {
	on: () => {
		wya.on('noticeClick', (res) => {
			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
			Toasts.info(res, 0);

		});
	},
	off: () => {
		wya.off('noticeClick');
	},
	debugger: () => {
		// 强制执行
		wya.invoke('debugger/invoke', {
			eventName: 'noticeClick'
		}).then((res) => {
			Toasts.info('执行成功', 0);
		}).catch((res = {}) => {
			Toasts.info('执行失败：' + res.msg, 0);
		});
	}
};

export default {
	to: '/events/noticeClick',
	title: 'noticeClick',
	label: '状态栏通知点击',
	invoke,
	markdown
};
