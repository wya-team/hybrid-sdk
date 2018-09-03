import '../css/global.scss';

if (process.env.NODE_ENV !== "production") {
	require('./router/router.dev');
} else {
	require('./router/router.dist');
}

