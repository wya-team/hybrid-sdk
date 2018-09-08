export const eventsConfig = [
	{ 
		path: '/events',
		name: 'events',
		component: () => import('./modules/events.vue'),
		meta: {
			title: "事件",
		}
	},
	{ 
		path: '/events/:id',
		name: 'events-detail',
		component: () => import('./modules/events-detail.vue'),
		meta: {
			title: "事件",
		}
	},
	{ 
		path: '/events/*',
		redirect: { name: 'events' }
	}
];
