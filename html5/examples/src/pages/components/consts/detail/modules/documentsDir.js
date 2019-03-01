import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/consts/documentsDir.md';

const invoke = () => {
	// ...
};

export default {
	to: '/consts/documentsDir',
	title: 'documentsDir',
	label: '文档目录',
	invoke,
	markdown
};
