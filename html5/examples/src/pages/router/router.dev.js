/**
 * dev 开发时使用
 */
import 'babel-polyfill';
import Vue from 'vue';
import Router from 'vue-router';
import SetTitle from '@common/set-title/set-title';
import { routeConfig } from './routes';
import { beforeEach, afterEach, beforeResolve } from './hooks';
import { PRE_ROUTER_URL } from '../constants/constants';

// 全局变量 _global
import './_global';

Vue.config.productionTip = false;

// 全局组件
Vue.component(SetTitle.name, SetTitle);
// --end


// -- 路由
Vue.use(Router);
const router = new Router(routeConfig);
router.beforeEach(beforeEach);
router.afterEach(afterEach);
// -- end

// 视图
const app = new Vue({
	el: "#pages",
	router,
	template: "<div id='pages'><router-view></router-view></div>"
});

// 先不考虑服务端渲染情况
router.onReady(() => {
	app.$mount('#pages');
	const { redirect } = sessionStorage;
	delete sessionStorage.redirect;

	// github pages hack
	const curUrl = `${location.pathname}${location.search}${location.hash}`;
	if (redirect && redirect.includes(PRE_ROUTER_URL) && redirect != curUrl) {
		try {
			router.push(redirect);
		} catch (e) {
			location.href = redirect;
		}
	}
});

window.app = app;
