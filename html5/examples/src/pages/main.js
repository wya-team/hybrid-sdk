import '../css/global.scss';
import Vue from 'vue';
import Router from 'vue-router';
import { routeConfig } from './router/routes';
import { beforeEach } from './router/auth';

Vue.config.productionTip = false;

// -- 路由
Vue.use(Router);
const router = new Router(routeConfig);
router.beforeEach(beforeEach);
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

	if (redirect && redirect != `${location.pathname}${location.search}${location.hash}`) {
		try {
			router.push(redirect);
		} catch (e) {
			location.href = redirect;
		}
	}
});
