import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/events/keyboardShow.md';

const invoke = {
	on: () => {
		wya.on('keyboardShow', (res) => {
			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
			Toasts.info(res, 0);

		});
	},
	off: () => {
		wya.off('keyboardShow');
	},
	debugger: () => {
		// 强制执行
		wya.invoke('debugger/invoke', {
			eventName: 'keyboardShow'
		}).then((res) => {
			Toasts.info('执行成功', 0);
		}).catch((res = {}) => {
			Toasts.info('执行失败：' + res.msg, 0);
		});
	}
};

export default {
	to: '/events/keyboardShow',
	title: 'keyboardShow',
	label: '系统键盘弹出的回调',
	invoke,
	markdown
};
