export const md = async (el, opts = {}, vm = {}) => {
	let html = vm.data.domProps.innerHTML;
	el.innerHTML = '';

	let { default: marked } = await import('marked');
	let { default: _ } = await import('highlight.js');
	let { default: js } = await import('js-beautify/js/lib/beautify');
	let newHtml = marked(html, {
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		sanitize: false,
		smartLists: true,
		smartypants: false,
		pedantic: false,
		highlight(code, lang, callback) {
			if (['javascript', 'js', 'json'].includes(lang)) {
				code = js.js_beautify(code);
			}
			return _.highlight(lang || 'js', code).value;
		}
	});
	el.innerHTML = newHtml;
	
	// 高亮
	let blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
		_.highlightBlock(block);
	});
};