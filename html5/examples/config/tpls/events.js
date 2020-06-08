const capitalize = (value, content = '') => {
	if (!value) return '';
	value = value.toString();
	return content + value.charAt(0).toUpperCase() + value.slice(1);
};
module.exports = (name) => {
	let contents = '';
	contents += `#### 1. 说明\n\n`;

	contents += `~\n\n`;

	contents += `#### 2. Native传递参数给Client\n\n`;

	contents += '```javascript\n';
	contents += `{\n`;
	contents += `	status: 1,\n`;
	contents += `	msg: '调用成功',\n`;
	contents += `	data: {\n`;
	contents += `		// ....\n`;
	contents += `	}\n`;
	contents += `}\n`;
	contents += '```\n\n';

	contents += `#### 3. Client端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `import wya from '@wya/js-sdk';\n\n`;

	contents += `// on / once / last / first / off\n`;
	contents += `wya.on('${name}', () => {\n\n`;

	contents += `});\n\n`;

	contents += `// on / once / last / first / off\n`;
	contents += `wya.on${capitalize(name)}(() => {\n\n`;

	contents += `});\n`;
	contents += '```\n\n';

	contents += `#### 4. 不引入sdk示例代码\n\n`;

	contents += '```javascript\n';
	contents += `// on / once / last / first / off\n`;
	contents += `WYAJSBridge.on('${name}', () => {\n\n`;

	contents += `});\n`;
	contents += '```\n\n';

	contents += `#### 5. Native端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `WYAJSBridge.emit('${name}', '@Object');\n`;
	contents += '```\n\n';

	contents += `#### 6. 可用性\n\n`;

	contents += `iOS系统，Android系统\n\n`;

	contents += `---------\n\n`;
	return contents;
};



