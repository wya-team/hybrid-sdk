export const PRE_ROUTER_URL = process.env.NODE_ENV === 'development' || process.env.EVN_IS_PRE
	? '/'
	: '/hybrid-sdk/html5/examples/dist/';