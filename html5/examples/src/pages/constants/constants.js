export const PRE_ROUTER_URL = process.env.NODE_ENV === 'development' || process.env.ENV_IS_PRE
	? '/'
	: '/hybrid-sdk/html5/examples/dist/';