import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/appVersion.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/appVersion',
	title: 'appVersion',
	label: '应用版本号',
	invoke,
	markdown
};
