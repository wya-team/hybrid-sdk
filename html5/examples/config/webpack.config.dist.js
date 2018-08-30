process.env.NODE_ENV = 'production';
const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const { APP_ROOT, commonConfig } = require('./webpack.config.common');

const webpackConfig = {
	mode: "production",
	plugins: [
		/**
		 * 这里不用dev模式下的输出html，改用js输出是为了版本控制；index.html会造成缓存，导致即使js带hash无效（微信端是这样）
		 * 需要屏蔽HtmlWebpackPlugin功能，即注释
		 */
		new AssetsPlugin({
			path: path.resolve(APP_ROOT, 'dist/js/'),
			filename: 'webpack-assets.js',
			processOutput: assets => `window.WEBPACK_ASSETS=${JSON.stringify(assets)}`
		}),
		/**
		 * 压缩同时转移静态文件
		 */
		new CopyWebpackPlugin([
			{
				from: path.resolve(APP_ROOT, 'src/static'),
				to: '[name].[ext]',
				toType: 'template'
			}
		]),
		/**
		 * 生产环境
		 * webpack 4 默认支持: 'process.env.NODE_ENV': JSON.stringify('production')
		 */
		new webpack.DefinePlugin({
			__DEV__: 'false'
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static', // static 生成html文件 | server 一直监听 | disabled 生成json文件
			// analyzerHost: localIp,
			// analyzerPort: bundleAnalyzerPort,
			reportFilename: 'report.html',
			defaultSizes: 'gzip',
			openAnalyzer: false,
			generateStatsFile: false,
			// statsFilename: 'stats.json',
			// statsOptions: null,
			logLevel: 'info'
		})
	],
};

module.exports = webpackMerge(
	commonConfig,
	webpackConfig
);