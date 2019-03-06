const tpl = (category, filename, scheme) => {
	let contents = '';
	switch (category) {
		case 'events':

			contents += `const invoke = {\n`;
			contents += `	on: () => {\n`;
			contents += `		wya.on('${filename}', (res) => {\n`;
			contents += `			res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');\n`;
			contents += `			Toasts.info(res, 0);\n\n`;
			contents += `		});\n`;
			contents += `	},\n`;
			contents += `	off: () => {\n`;
			contents += `		wya.off('${filename}');\n`;
			contents += `	},\n`;
			contents += `	debugger: () => {\n`;
			/* eslint-disable no-template-curly-in-string */
			contents += '		// 强制执行\n';
			contents += `		wya.invoke('debugger/invoke', {\n`;
			contents += `			eventName: 'appIdle'\n`;
			contents += `		}).then((res) => {\n`;
			contents += `			Toasts.info('执行成功', 0);\n`;
			contents += `		}).catch((res = {}) => {\n`;
			contents += `			Toasts.info('执行失败：' + res.msg, 0);\n`;
			contents += `		});\n`;
			contents += `	}\n`;
			contents += `};\n`;
			return contents;
		case 'methods':

			contents += `const invoke = () => {\n`;
			contents += `	wya.invoke('${scheme}', {\n`;
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

	let scheme;
	if (category === 'methods') {
		let [moduleName, methodName] = filename.replace(/([A-Z])/, ".$1").split('.');
		methodName = methodName.charAt(0).toLowerCase() + methodName.slice(1);
		scheme = `${moduleName}/${methodName}`;
	}

	let contents = '';
	contents += `import wya from 'wya-js-sdk';\n`;
	contents += `import Toasts from '@common/toasts/toasts';\n`;
	contents += `import markdown from '@docs/${category}/${filename}.md';\n`;
	contents += `\n`;
	contents += tpl(category, filename, scheme);
	contents += `\n`;
	contents += `export default {\n`;
	contents += `	to: '/${category}/${filename}',\n`;
	contents += `	title: '${category === 'methods' ? scheme : filename}',\n`;
	contents += `	label: '',\n`;
	contents += `	invoke,\n`;
	contents += `	markdown\n`;
	contents += `};\n`;
	return contents;
};
