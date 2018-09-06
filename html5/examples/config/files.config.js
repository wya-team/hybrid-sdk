// 创建文件
const fs = require('fs-extra');
const upath = require('upath');
const { resolve, join } = require('path');

const mdDir = resolve(__dirname, '../../../docs');
const jsDir = resolve(__dirname, '../../examples/src/pages/components');

const filesName = {
	assists: ['ready', 'error'],
	events: [],
	methods: [],
	consts: [],
};
const jsTemplate = (category, filename) => {
	let contents = '';
	contents += `import markdown from '@docs/${category}/${filename}.md';\n`;
	contents += `\n`;
	contents += `export default {\n`;
	contents += `	to: '/${category}/${filename}',\n`;
	contents += `	title: '${filename}',\n`;
	contents += `	label: '',\n`;
	contents += `	markdown\n`;
	contents += `};\n`;
	return contents;
};

Object.entries(filesName).forEach((item, index) => {
	let [category, fileArr] = item;

	let rootPath = upath.normalize(`${jsDir}/${category}/detail/modules/root.js`);
	let rootContents = '';
	let newContents = '';
	if (fs.existsSync(rootPath)) { // 存在该文件
		rootContents = fs.readFileSync(rootPath, 'utf-8');
		if (rootContents.substr(-1) !== '\n') {
			rootContents += '\n';
		}
	}
	

	fileArr.forEach((filename) => {
		let mdPath = upath.normalize(`${mdDir}/${category}/${filename}.md`);
		let jsPath = upath.normalize(`${jsDir}/${category}/detail/modules/${filename}.js`);
		
		if (!fs.existsSync(mdPath)) {
			fs.outputFileSync(mdPath, '');
		}

		if (!fs.existsSync(jsPath)) {
			fs.outputFileSync(jsPath, jsTemplate(category, filename));
		}
		let content = `export ${filename} from './${filename}';`;
		if (rootContents.includes(content) === false) {
			newContents += `${content}\n`;
		}
	});
	let _rootContents = rootContents + newContents;

	if (_rootContents != rootContents) {
		fs.outputFileSync(rootPath, _rootContents);
	}
});
