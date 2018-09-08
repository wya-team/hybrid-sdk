import Vue from 'vue';

let indexScrollTop = 0;
export const beforeEach = ((route, redirect, next) => {
	// if (route.path !== '/') {
	// 	indexScrollTop = document.body.scrollTop;
	// }
	// document.title = route.meta.title || document.title;
	next();
});

export const afterEach = (route => {
	// if (route.path !== '/') {
	// 	document.body.scrollTop = 0;
	// } else {
	// 	Vue.nextTick(() => {
	// 		document.body.scrollTop = indexScrollTop;
	// 	});
	// }
});
