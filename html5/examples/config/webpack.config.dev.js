process.env.NODE_ENV = 'development';
const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { APP_ROOT, commonConfig, localIp, localPort } = require('./webpack.config.common');

const webpackConfig = {
	mode: 'development',
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(js|vue)$/,
	// 			loader: 'eslint-loader',
	// 			enforce: 'pre',
	// 			include: [path.resolve('src')],
	// 			options: {
	// 				// formatter: require('eslint-friendly-formatter'),
	// 				emitWarning: false
	// 			}
	// 		}
	// 	]
	// },
	plugins: [
		/**
		 * 输出html
		 */
		new HtmlWebpackPlugin({
			template: path.resolve(APP_ROOT, 'src/static/index.tpl.html'),
			chunks: ['common', 'main'], // 当前路由所包含的模块，注意common引入方式
			inject: 'body',
			filename: './index.html'
		}),
		/**
		 * 开发环境
		 * webpack 4 默认支持: 'process.env.NODE_ENV': JSON.stringify('development')
		 */
		new webpack.DefinePlugin({
			__DEV__: 'true'
		}),
		/**
		 * 友好提示
		 */
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`Dev Server: http://${localIp}:${localPort}`],
				notes: [`Success!`]
			},
			onErrors: () => {},
			clearConsole: true,
			additionalFormatters: [],
			additionalTransformers: []
		})
		/**
		 * StyleLint
		 */
		// new StyleLintPlugin({
		// 	configFile: path.resolve(APP_ROOT, '.stylelintrc')
		// })
	]
};

module.exports = webpackMerge(
	commonConfig,
	webpackConfig
);
