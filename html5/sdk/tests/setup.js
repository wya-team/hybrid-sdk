/* eslint-disable global-require */
const { JSDOM } = require('jsdom');

// fixed jsdom miss
if (typeof window === 'undefined') {
	const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
	global.document = new JSDOM(documentHTML);
	global.window = document.window;
	global.window.resizeTo = (width, height) => {
		global.window.innerWidth = width || global.window.innerWidth;
		global.window.innerHeight = height || global.window.innerHeight;
		global.window.dispatchEvent(new Event('resize'));
	};
}

global.requestAnimationFrame = global.requestAnimationFrame || function (cb) {
	return setTimeout(cb, 0);
};

const Enzyme = require('enzyme');

Enzyme.configure({});