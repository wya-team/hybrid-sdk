export const methodsConfig = [
	{ 
		path: '/methods',
		name: 'methods',
		component: () => import('./modules/methods.vue'),
		meta: {
			title: "方法",
		}
	},
	{ 
		path: '/methods/:id',
		name: 'methods-detail',
		component: () => import('./modules/methods-detail.vue'),
		meta: {
			title: "方法",
		}
	},
	{ 
		path: '/methods/*',
		redirect: { name: 'methods' }
	}
];
