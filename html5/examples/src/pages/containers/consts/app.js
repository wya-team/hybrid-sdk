export const constsConfig = [
	{ 
		path: '/consts',
		name: 'consts',
		component: () => import('./modules/consts.vue'),
		meta: {
			title: "常量",
		}
	},
	{ 
		path: '/consts/:id',
		name: 'consts-detail',
		component: () => import('./modules/consts-detail.vue'),
		meta: {
			title: "常量",
		}
	},
	{ 
		path: '/consts/*',
		redirect: { name: 'consts' }
	}
];
