export const assistsConfig = [
	{ 
		path: '/assists',
		name: 'assists',
		component: () => import('./modules/assists.vue'),
		meta: {
			title: "辅助",
		}
	},
	{ 
		path: '/assists/:id',
		name: 'assists-detail',
		component: () => import('./modules/assists-detail.vue'),
		meta: {
			title: "辅助",
		}
	},
	{ 
		path: '/assists/*',
		redirect: { name: 'assists' }
	}
];
