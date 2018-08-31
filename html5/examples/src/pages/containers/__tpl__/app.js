export const tplConfig = [
	{ 
		path: 'tpl', // 不要使用 / ,否者前面都会无效 
		name: 'tpl',
		component: () => import('./modules/tpl.vue') 
	}
];

export const tplOtherConfig = [
	{ 
		path: 'tpl/nolayout', 
		name: 'tpl-nolayout',
		component: () => import('./modules/tpl-nolayout.vue') 
	}
];
