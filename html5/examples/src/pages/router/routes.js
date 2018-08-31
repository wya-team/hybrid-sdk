import { tplConfig, tplOtherConfig } from '../containers/__tpl__/app';
import { loginConfig } from '../containers/login/app';
import layout from '../components/layout/layout';
import { PRE_ROUTER_URL } from '../constants/constants';

export const routeConfig = {
	mode: 'history',
	routes: [
		{
			path: PRE_ROUTER_URL,
			component: { template: '<router-view></router-view>' },
			children: [
				...loginConfig,
				...tplOtherConfig,
				{
					path: '',
					component: layout,
					children: [
						...tplConfig
					]
				}
			]
		},
		{
			path: '*',
			redirect: (to) => {
				let { path } = to;

				path = path.includes(PRE_ROUTER_URL)
					? `${PRE_ROUTER_URL}login`
					: `${PRE_ROUTER_URL}${path}`;
					
				path = path.replace(/\/\//g, '/');

				return path;
			}
		}
	]
};
console.log(routeConfig);
