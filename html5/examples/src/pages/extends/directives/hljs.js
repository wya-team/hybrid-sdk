
export const hljs = async (el, opts = {}) => {
	await import(`highlight.js/styles/atom-one-dark.css`);

	let { default: _ } = await import('highlight.js');
	let { default: js } = await import('js-beautify/js/lib/beautify');
	let blocks = el.querySelectorAll('pre code');

	// 直接传递代码 
	if (blocks.length === 0) {
		let html = el.innerHTML;
		if (opts.value === 'js' || opts.value === 'json') {
			// 格式化代码
			html = js.js_beautify(html, { indent_size: 4 });
		}

		const pre = document.createElement('pre');
		pre.innerHTML = `<code class="${opts.value}">${html}</code>`;
		
		// 初始化；
		el.innerHTML = '';
		el.appendChild(pre);
		blocks = el.querySelectorAll('pre code');
	}

	blocks.forEach((block) => {
		_.highlightBlock(block);
	});
};