export const loginConfig = [
	{ 
		path: '/login',
		name: 'login',
		component: () => import('./modules/login.vue'),
		meta: {
			title: "登录",
		}
	}
];
