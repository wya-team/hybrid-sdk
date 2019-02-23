import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';

/**
 * 执行上下文
 * eval
 */
window.wya = wya;
window.Toasts = Toasts;

let stringify = (output) => {
	let result;

	if (typeof output == 'undefined') {
		result = 'undefined';
	} else if (output === null) {
		result = 'null';
	} else {
		result = JSON.stringify(output) || output.toString();
	}

	return result;
};

let runHidden = (code) => {
	/**
	 * 执行上下文
	 */
	/* eslint-disable no-eval*/
	return eval(code);
};

const run = (code) => {
	try {
		stringify(runHidden(code));
	} catch (e) {
		console.error(e.message);
	}
};

export default run;