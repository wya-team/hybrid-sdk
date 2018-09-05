import layout from '@components/layout/layout';
import { loginConfig } from '../containers/login/app';
import { constsConfig } from '../containers/consts/app';
import { eventsConfig } from '../containers/events/app';
import { methodsConfig } from '../containers/methods/app';
import { PRE_ROUTER_URL } from '../constants/constants';

export const routeConfig = {
	base: PRE_ROUTER_URL,
	mode: 'history',
	routes: [
		...loginConfig,
		{
			path: '/',
			component: layout,
			children: [
				{
					path: '/',
					redirect: { name: 'consts' }
				},
				...constsConfig,
				...eventsConfig,
				...methodsConfig
			]
		},
		{
			path: '*',
			redirect: (to) => {
				return '/consts';
			}
		}
	]
};
