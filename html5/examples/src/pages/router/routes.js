import { tplConfig, tplOtherConfig } from '../containers/__tpl__/app';
import { loginConfig } from '../containers/login/app';
import layout from '../components/layout/layout';

export const routeConfig = {
	mode: 'history',
	routes: [
		...loginConfig,
		...tplOtherConfig,
		{
			path: '',
			component: layout,
			children: [
				{
					path: '/',
					redirect: '/tpl'
				},
				...tplConfig
			]
		},
		{
			path: '*',
			redirect: '/login'
		}
	]
};
