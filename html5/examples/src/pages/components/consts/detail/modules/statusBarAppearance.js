import wya from 'wya-js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/consts/statusBarAppearance.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/statusBarAppearance',
	title: 'statusBarAppearance',
	label: '是否状态栏底透明',
	invoke,
	markdown
};
