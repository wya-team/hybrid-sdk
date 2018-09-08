const tpl = (category, filename) => {
	let contents = '';
	switch (category) {
		case 'events':
			contents += `const invoke = () => {\n`;
			contents += `	wya.once('${filename}', (res) => {\n`;
			contents += `		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');\n`;
			contents += `		Toasts.info(res, 0);\n`;
			contents += `	});\n\n`;
			contents += `	// 强制执行\n`;
			contents += `	wya.invoke('debugger', {\n`;
			contents += `		event: '${filename}'\n`;
			contents += `	}).then((res) => {\n`;
			contents += `		Toasts.info('执行成功', 0);\n`;
			contents += `	}).catch((res = {}) => {\n`;
			/* eslint-disable no-template-curly-in-string */
			contents += '		Toasts.info(`执行失败：${res.msg}`, 0);\n';
			contents += `	});\n`;
			contents += `};\n`;
			return contents;
		case 'methods':
			contents += `const invoke = () => {\n`;
			contents += `	wya.invoke('${filename}', {\n`;
			contents += `		// ...\n`;
			contents += `	}).then((res) => {\n`;
			contents += `		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');\n`;
			contents += `		Toasts.info(res, 0);\n`;
			contents += `	}).catch((res = {}) => {\n`;
			/* eslint-disable no-template-curly-in-string */
			contents += '		Toasts.info(`执行失败：${res.msg}`, 0);\n';
			contents += `	});\n`;
			contents += `};\n`;
			return contents;
		default:
			contents += `const invoke = () => {\n`;
			contents += `	// ...\n`;
			contents += `};\n`;
			return contents;
	}
	
};
module.exports = (category, filename) => {
	let contents = '';
	contents += `import wya from 'wya-js-sdk';\n`;
	contents += `import Toasts from '@common/toasts/toasts';\n`;
	contents += `import markdown from '@docs/${category}/${filename}.md';\n`;
	contents += `\n`;
	contents += tpl(category, filename);
	contents += `\n`;
	contents += `export default {\n`;
	contents += `	to: '/${category}/${filename}',\n`;
	contents += `	title: '${filename}',\n`;
	contents += `	label: '',\n`;
	contents += `	invoke,\n`;
	contents += `	markdown\n`;
	contents += `};\n`;
	return contents;
};
