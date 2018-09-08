module.exports = (name) => {
	let contents = '';
	contents += `#### 1. 说明\n\n`;

	contents += `~\n\n`;

	contents += `#### 2. Native传递参数给Client\n\n`;

	contents += '```javascript\n';
	contents += `// ....\n`;
	contents += '```\n\n';

	contents += `#### 3. Client端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `import wya from 'wya-js-sdk';\n\n`;

	contents += `// ....\n`;
	contents += '```\n\n';

	contents += `#### 4. 不引入sdk示例代码\n\n`;

	contents += '```javascript\n';
	contents += `// ....\n`;
	contents += '```\n\n';

	contents += `#### 5. Native端示例代码\n\n`;

	contents += '```javascript\n';
	contents += `WYAJSBridge.emit('_${name}_', '@Object');\n`;
	contents += '```\n\n';

	contents += `#### 6. 可用性\n\n`;

	contents += `iOS系统，Android系统\n\n`;

	contents += `---------\n\n`;
	return contents;
};



