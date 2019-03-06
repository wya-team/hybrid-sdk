import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/systemGetBattery.md';

const invoke = () => {
	wya.invoke('system/getBattery', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/systemGetBattery',
	title: 'system/getBattery',
	label: '',
	invoke,
	markdown
};
