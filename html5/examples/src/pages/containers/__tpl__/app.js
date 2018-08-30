export const tplConfig = [
	{ 
		path: '/tpl', 
		name: 'tpl',
		component: () => import('./modules/tpl.vue') 
	}
];

export const tplOtherConfig = [
	{ 
		path: '/tpl/nolayout', 
		name: 'tpl-nolayout',
		component: () => import('./modules/tpl-nolayout.vue') 
	}
];
