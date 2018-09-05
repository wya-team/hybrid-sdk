
export const hljs = async (el, opts = {}, vm = {}) => {
	let html = vm.data.domProps.innerHTML;
	
	let { default: _ } = await import('highlight.js');
	let { default: js } = await import('js-beautify/js/lib/beautify');
	let blocks = el.querySelectorAll('pre code');

	// 直接传递代码 
	if (blocks.length === 0) {
		let { value = 'js' } = opts;
		if (value === 'js' || value === 'json') {
			// 格式化代码
			html = js.js_beautify(html, { indent_size: 4 });
		}

		const pre = document.createElement('pre');
		pre.innerHTML = `<code class="${value}">${html}</code>`;
		
		// 初始化；
		el.innerHTML = '';
		el.appendChild(pre);
		blocks = el.querySelectorAll('pre code');
	}

	blocks.forEach((block) => {
		_.highlightBlock(block);
	});
};
