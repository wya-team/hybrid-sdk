import '../css/global.scss';
import Vue from 'vue';
import Router from 'vue-router';
import { routeConfig } from './router/routes';
import { beforeEach, afterEach } from './router/auth';
import { PRE_ROUTER_URL } from './constants/constants';

Vue.config.productionTip = false;

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
