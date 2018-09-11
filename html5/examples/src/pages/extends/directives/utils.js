export const findBSInstance = (context) => {
	if (typeof context !== 'object') {
		return null;
	}
	let instance = context.betterScroller;

	if (instance !== undefined) {
		return instance;
	}
	return findBSInstance(context.$parent);
};