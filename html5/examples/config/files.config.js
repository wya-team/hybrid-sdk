// 创建文件
const fs = require('fs-extra');
const upath = require('upath');
const { resolve, join } = require('path');
const comboTpl = require('./tpls/combo');

const mdDir = resolve(__dirname, '../../../docs');
const jsDir = resolve(__dirname, '../../examples/src/pages/components');

const parseModule = (modules) => {
	return Object.keys(modules).reduce((pre, cur) => {
		modules[cur].forEach((value) => {
			pre.push(`${cur}${value.charAt(0).toUpperCase() + value.slice(1)}`);
		});
		return pre;
	}, []);
};
const filesName = {
	assists: require('../../sdk/src/modules/assists'),
	events: require('../../sdk/src/modules/events'),
	methods: parseModule(require('../../sdk/src/modules/methods')),
	consts: require('../../sdk/src/modules/consts'),
};

const filesTpl = {
	assists: require('./tpls/assists'),
	events: require('./tpls/events'),
	methods: require('./tpls/methods'),
	consts: require('./tpls/consts'),
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
			fs.outputFileSync(mdPath, filesTpl[category](filename));
		}

		if (!fs.existsSync(jsPath)) {
			fs.outputFileSync(jsPath, comboTpl(category, filename));
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
