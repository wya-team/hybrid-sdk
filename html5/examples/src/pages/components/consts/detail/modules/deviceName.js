import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/consts/deviceName.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/deviceName',
	title: 'deviceName',
	label: '设备名称',
	invoke,
	markdown
};