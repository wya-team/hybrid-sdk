import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/systemVersion.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/systemVersion',
	title: 'systemVersion',
	label: '系统版本',
	invoke,
	markdown
};
