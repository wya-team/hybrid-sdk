console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const APP_ROOT = process.cwd();
const ENV_IS_DEV = process.env.NODE_ENV === 'development';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const userConfig = require('./user.config.js');

const localPort = (() => {
	if (ENV_IS_DEV) {
		return userConfig.port || 8088;
	}
	return 9098;
})();
const localIp = (() => {
	const ips = [];
	const os = require('os');
	const ntwk = os.networkInterfaces();
	for (const k in ntwk) {
		for (let i = 0; i < ntwk[k].length; i++) {
			const _add = ntwk[k][i].address;
			if (_add && _add.split('.').length == 4 && !ntwk[k][i].internal && ntwk[k][i].family == 'IPv4') {
				ips.push(ntwk[k][i].address);
			}
		}
	}
	return ips[0] || 'localhost';
})();
const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		config: {
			path: path.resolve(APP_ROOT, 'config/postcss.config.js')
		}
	}
};
const webpackConfig = {
	target: "web", // <=== 默认是 'web'，可省略
	resolve: {// 重定向路径
		mainFiles: ['index'],
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'],
		extensions: ['.js', '.vue', '.json', '.scss', '.css'],
		// 依赖-正则
		alias: {
			/**
			 * 一个是 runtime only 的文件 vue.common.js，
			 * 一个是 compiler only 的文件 compiler.js，
			 * 一个是 runtime + compiler 的文件 vue.js。
			 * 也就是说，vue.js = vue.common.js + compiler.js
			 * 而如果要使用 template 这个属性的话就一定要用 compiler.js，那么，引入 vue.js 是最恰当的
			 */
			'vue$': 'vue/dist/vue.esm.js',
			'wya-js-sdk': path.resolve(APP_ROOT, '../sdk/src/web.js')
		}
	},
	entry: {
		main: path.resolve(APP_ROOT, 'src/pages/main.js')
	},
	output: {
		path: path.resolve(APP_ROOT, 'dist'),
		filename: 'js/[name].[hash:8].bundle.js', // 每个页面对应的主js的生成配置
		chunkFilename: 'js/[name].[hash:8].chunk.js', // chunk生成的配置
		sourceMapFilename: 'js/[name].[hash:8].bundle.map',
		/**
		 * html引用路径
		 * publicPath: ENV_IS_DEV ? './' : 'https://cdn.example.com/'
		 */
		publicPath: ENV_IS_DEV ? '/' : '/hybrid-sdk/html5/examples/dist/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [
					/**
					 * 在node_modules的文件不被babel理会
					 */
					path.resolve(APP_ROOT, 'node_modules')
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true // 启用编译缓存
						}
					}
				]
			},
			{
				test: /\.vue/,
				exclude: [
					/**
					 * 在node_modules的文件不被babel理会
					 */
					path.resolve(APP_ROOT, 'node_modules')
				],
				use: [
					{
						loader: 'vue-loader',
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: ['vue-style-loader', 'css-loader', postcssLoader, 'sass-loader'],
				include: [
					// 需要引入antd-mobile，后续可以等它支持2.x做修改
					path.resolve(APP_ROOT, "node_modules"),
					path.resolve(APP_ROOT, "")
				]
			},
			{
				test: /\.scss$/,
				include: [path.resolve(APP_ROOT, "src/css")],
				exclude: [path.resolve(APP_ROOT, "node_modules"), path.resolve(APP_ROOT, "src/pages")],
				use: ExtractTextPlugin.extract({
					fallback: 'vue-style-loader',
					use: ['css-loader', postcssLoader, 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.html$/i,
				use: 'html-loader'
			}
		]
	},
	optimization: {
		// 默认关闭压缩
		minimize: ENV_IS_DEV ? false : JSON.parse(process.env.UGLIFY_JS),
		// 原：NamedModulesPlugin()
		namedModules: true,
		// 原：NoEmitOnErrorsPlugin() - 异常继续执行
		noEmitOnErrors: true,
		// 原：ModuleConcatenationPlugin() - 模块串联 - dev模式下回影响antd（比如：Pagination, 和语言有关）
		concatenateModules: !ENV_IS_DEV,
		// 原：CommonsChunkPlugin()
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					test: (chunk) => {
						const modules = [
							'babel-polyfill',
							'vue',
							'lodash' // 这个用的地方偏多
						];
						// new RegExp(`([\\\\/]+)node_modules([\\\\/]+)`) -> /([\\\/]+)node_modules([\\\/]+)/
						const isInModules = modules.some(i => (new RegExp(`([\\\\/]+)node_modules([\\\\/_]+)${i}`)).test(chunk.resource));
						return chunk.resource
							&& /\.js$/.test(chunk.resource)
							&& isInModules;
					},
					name: 'common',
					chunks: 'all',
				}
			}
		},
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/initial.[name].[hash:8].css',
			allChunks: true
		}),
		new VueLoaderPlugin()
	]
};
const defaultConfig = {
	// cheap-module-eval-source-map 原始源码（仅限行）
	// cheap-eval-source-map 转换过的代码（仅限行）// 重构建比较好
	devtool: ENV_IS_DEV ? 'cheap-module-eval-source-map' : undefined,
	resolve: {
		extensions: ['.jsx', '.js']
	},
	devServer: {
		host: localIp,
		contentBase: "/",
		port: localPort,
		inline: true,
		// compress: true, // gzip
		stats: 'errors-only',
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 100,
			poll: 500,
			ignored: /node_modules/
		},
		// proxy: {
		// 	"/api": {
		// 		target: "http://test.com",
		// 		pathRewrite: {"^/api" : ""}
		// 	}
		// },
		hot: true, // 同--hot
	},
	node: {
		global: true,
		crypto: 'empty',
		__dirname: true,
		__filename: true,
		Buffer: true,
		clearImmediate: false,
		setImmediate: false
	},
	// 启用编译缓存
	cache: true,
};

module.exports = {
	APP_ROOT,
	localIp,
	localPort,
	commonConfig: webpackMerge(
		webpackConfig,
		defaultConfig
	)
};
