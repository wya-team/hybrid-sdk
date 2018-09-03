export const eventsConfig = [
	{ 
		path: '/events',
		name: 'events',
		component: () => import('./modules/events.vue'),
		meta: {
			title: "事件",
		}
	}
];