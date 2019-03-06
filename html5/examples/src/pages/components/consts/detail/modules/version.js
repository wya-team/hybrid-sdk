import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/version.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/version',
	title: 'version',
	label: '引擎版本信息',
	invoke,
	markdown
};
