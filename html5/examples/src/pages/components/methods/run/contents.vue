<template>
	<div class="g-flex g-fd-c">
		<span class="g-pd-tb-10 g-pd-lr-10 g-bg-blue-mid g-tc" @click="handleClick">执行</span>
		<codemirror
			:value="code" 
			:options="cmOption"
			@input="handleChange"
		/>
		<span class="g-pd-tb-10 g-pd-lr-10 g-bg-yellow-mid g-tc" @click="handleClear">初始化</span>
	</div>
</template>

<script>

// language
import 'codemirror/mode/javascript/javascript';

// theme css
import 'codemirror/theme/monokai.css';

// require active-line
import 'codemirror/addon/selection/active-line';

// styleSelectedText
import 'codemirror/addon/selection/mark-selection';

// hint
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/match-highlighter';

// keyMap
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/search';
import 'codemirror/keymap/sublime';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/xml-fold';

import Vue from 'vue';
import VueCodemirror, { codemirror } from 'vue-codemirror';

// require styles
import 'codemirror/lib/codemirror.css';

import { setItem, getItem } from 'wya-utils';

import run from './run';
import * as rootConfig from '../detail/modules/root';

Vue.use(VueCodemirror, { 
	events: ['scroll']
});


let initCode = (id, obj = {}) => `
wya.invoke('${id}', {
${
	Object.keys(obj).reduce((pre, cur, index, source) => {
		/*eslint-disable*/
		pre += `	${cur}: ${typeof obj[cur] === 'boolean' || typeof obj[cur] === 'object' ? JSON.stringify(obj[cur]) : `'${obj[cur]}'`},${source.length === index + 1 ? '' : '\n'}`;
		return pre;
	}, '') || '	'
}
}).then((res) => {
	res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
	Toasts.info(res, 0);
}).catch((res = {}) => {
	Toasts.info('执行失败：' + res.msg, 0);
});
`;


export default {
	components: {
		codemirror
	},
	props: {
		id: String
	},
	data() {
		return {
			code: ``,
			cmOption: {
				tabSize: 4,
				styleActiveLine: false,
				lineNumbers: true,
				styleSelectedText: false,
				line: true,
				foldGutter: true,
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
				highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
				mode: 'text/javascript',
				// hint options
				hintOptions: {
					// 当匹配只有一项的时候是否自动补全
					completeSingle: false
				},
				// 快捷键 可提供三种模式 sublime、emacs、vim
				keyMap: "sublime",
				matchBrackets: true,
				showCursorWhenSelecting: true,
				theme: "monokai",
				extraKeys: { "Ctrl": "autocomplete" }
			}
		};
	},
	created() {
		let [moduleName, methodName] = this.id.replace(/([A-Z])/, ".$1").split('.');
		methodName = methodName.charAt(0).toLowerCase() + methodName.slice(1);
		let scheme = `${moduleName}/${methodName}`;
		
		let code = getItem(scheme);

		if (!code) {
			code = initCode(scheme, rootConfig[this.id].param || {});
			setItem(scheme, code);
		}

		this.code = code;
	},
	mounted() {
		this.styleSelectedText = true;
		this.cmOption.styleActiveLine = true;

		this.ignoreFastClick();
	},
	methods: {
		ignoreFastClick() {
			
		},
		handleChange(code) {
			this.code = code;

			setItem(this.id, code);
		},
		handleClick() {
			run(this.code);
		},
		handleClear() {
			let code = initCode(this.id, rootConfig[this.id].param || {});
			setItem(this.id, code);

			this.code = code;
		}
	}
};
</script>

<style>
.CodeMirror {
	height: auto;
}
.CodeMirror-focused .cm-matchhighlight {
	background-image: url(
		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==
	);
	background-position: bottom;
	background-repeat: repeat-x;
}
.cm-matchhighlight {background-color: lightgreen}
.CodeMirror-selection-highlight-scrollbar {background-color: green}
</style>