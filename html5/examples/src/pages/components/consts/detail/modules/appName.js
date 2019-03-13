import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/appName.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/appName',
	title: 'appName',
	label: '应用名称',
	invoke,
	markdown
};
