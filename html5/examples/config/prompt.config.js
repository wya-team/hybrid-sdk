/**
 * 强化项目的读写能力
 */
const prompt = require('prompt');
const fs = require('fs-extra');
// 开始写入
prompt.start();
prompt.get(['port'], (err, result) => {
	let contents = '';
	// 对用户输入的信息处理
	// to do ....
	const strObj = JSON.stringify(result || {});

	// 输出
	contents = `const obj = ${strObj}; module.exports = obj;`;
	fs.outputFileSync('./config/user.config.js', contents);
});