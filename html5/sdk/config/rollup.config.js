console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const ENV_IS_DEV = process.env.NODE_ENV === 'development';
const APP_ROOT = process.cwd();

import path from 'path';

import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import { eslint } from 'rollup-plugin-eslint';

const plugins = [
	// 使用amd模块引入，第三方模块支持
	resolve({
		mainFields: ['module', 'jsnext:main', 'main'],
		browser: true,
	}),
	// 提花全局字段ENV为....
	replace({
		exclude: 'node_modules/**',
		ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	}),
	// 使用eslint
	eslint(),
	// 使用babel
	babel(),
	// 使用buble
	buble(),
	// 使用cjs模块引入
	commonjs({
		namedExports: {
			'node_modules/@wya/ps/lib/index.js': [ 'EventStore' ]
		}
	}),
	// 是否压缩代码
	(!ENV_IS_DEV && uglify())
];
const nativeConfig = {
	// 输入
	input: path.resolve(APP_ROOT, 'src/native.js'),
	// 输出
	output: {
		file: path.resolve(APP_ROOT, 'dist/WYAJSBridge.umd.js'),
		format: 'umd',
		name: 'WYAJSBridge'
	},
	plugins
};
const webConfig = {
	// 输入
	input: path.resolve(APP_ROOT, 'src/web.js'),
	// 输出
	output: {
		file: path.resolve(APP_ROOT, 'dist/wya.umd.js'),
		format: 'umd',
		name: 'wya'
	},
	plugins
};
export default [nativeConfig, webConfig];