import net from '../../../utils/net';

export default {
	install(Vue) {
		Vue.prototype.$http = net;
		Vue.http = net;
	},
	$http: net
};

export const $http = net;
