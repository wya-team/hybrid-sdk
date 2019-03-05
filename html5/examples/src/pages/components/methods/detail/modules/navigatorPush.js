import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/navigatorPush.md';

const invoke = () => {
	wya.invoke('navigator/push', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/navigatorPush',
	title: 'navigator/push',
	label: '',
	invoke,
	markdown,
	param: {
		name: '',
		title: '',
		url: '',
		pageParam: {},
		scrollToTop: false,
		vScrollBarEnabled: true,
		hScrollBarEnabled: true,
		scaleEnabled: false,
		hideTopBar: true,
		hideBottomBar: true,
		animation: 'card',
		replace: false
	}
};
