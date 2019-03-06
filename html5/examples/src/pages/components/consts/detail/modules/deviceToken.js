import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/deviceToken.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/deviceToken',
	title: 'deviceToken',
	label: '推送的Token',
	invoke,
	markdown
};
