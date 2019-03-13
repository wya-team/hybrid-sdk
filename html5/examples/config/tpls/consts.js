module.exports = (name) => {
	let contents = '';
	contents += `#### 1. 说明\n\n`;

	contents += `~\n\n`;

	contents += `#### 2. 示例代码\n\n`;

	contents += '```javascript\n';
	contents += `import wya from '@wya/js-sdk';\n\n`;

	contents += `let ${name} = wya.${name}; // 比如： ~\n`;
	contents += '```\n\n';

	contents += `#### 3. 可用性\n\n`;

	contents += `iOS系统，Android系统\n\n`;

	contents += `---------\n\n`;
	return contents;
};
