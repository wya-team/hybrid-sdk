import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/name.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/name',
	title: 'name',
	label: 'window 名称',
	invoke,
	markdown
};
