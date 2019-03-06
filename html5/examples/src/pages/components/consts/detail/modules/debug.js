import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/debug.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/debug',
	title: 'debug',
	label: '是否开启调试',
	invoke,
	markdown
};
