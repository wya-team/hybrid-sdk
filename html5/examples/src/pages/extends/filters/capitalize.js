export const capitalize = (value, content = '') => {
	if (!value) return '';
	value = value.toString();
	return content + value.charAt(0).toUpperCase() + value.slice(1);
};
