(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/wya-vc/lib/copy/copy.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n("./node_modules/babel-runtime/regenerator/index.js")),a=s(n("./node_modules/iview/src/components/message/index.js")),r=s(n("./node_modules/babel-runtime/helpers/asyncToGenerator.js")),c=n("./node_modules/wya-vc/lib/copy/utils.js");function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"vc-copy",props:{value:String,tag:{type:[String,Object,Function],default:"div"}},data:function(){return{}},computed:{},methods:{handleClick:function(e){var t=this;return(0,r.default)(o.default.mark(function n(){var r,s,l,u;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r=t.value,s=t.$listeners,l=s.after,u=s.before,n.t0=u,!n.t0){n.next=7;break}return n.next=6,u(e,r);case 6:r=n.sent;case 7:(0,c.copyToClipboard)(r)&&(l&&l(r),!l&&a.default.success({content:"复制成功："+r})),n.next=15;break;case 11:n.prev=11,n.t1=n.catch(0),console.error("copy fail: "+n.t1),t.$emit("error",n.t1);case 15:case"end":return n.stop()}},n,t,[[0,11]])}))()}},render:function(e){return e(this.tag,{on:{click:this.handleClick}},this.$slots.default)}}},"./node_modules/wya-vc/lib/copy/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/wya-vc/lib/copy/copy.js");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},"./node_modules/wya-vc/lib/copy/utils.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=t.toggleSelection=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}};t.copyToClipboard=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=void 0,n=void 0,a=void 0,r=void 0,c=void 0;try{if(t=o(),n=document.createRange(),a=document.getSelection(),(r=document.createElement("span")).textContent=e,r.style.all="unset",r.style.position="fixed",r.style.top=0,r.style.clip="rect(0, 0, 0, 0)",r.style.whiteSpace="pre",r.style.webkitUserSelect="text",r.style.MozUserSelect="text",r.style.msUserSelect="text",r.style.userSelect="text",document.body.appendChild(r),n.selectNode(r),a.addRange(n),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(t){try{window.clipboardData.setData("text",e),c=!0}catch(e){console.log(e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(n):a.removeAllRanges()),r&&document.body.removeChild(r),t()}return c}},"./src/pages/containers/home/modules/home-main.vue":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/wya-vc/lib/copy/index.js"),a=n.n(o),r=n("./src/pages/containers/home/app.js"),c={name:"tpl-links",components:{"vc-copy":a.a},data:function(){return{list:r.a}},created:function(){},methods:{}},s=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),l=Object(s.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.list,function(t,o){return String(o)&&t.name?n("li",{key:o},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))]),e._v(" "),n("vc-copy",{attrs:{value:t.path,tag:"span"}},[e._v("复制")])],1):e._e()}),0)},[],!1,null,"10be8f92",null);l.options.__file="content.vue";var u={name:"vm-home-main",components:{"vm-content":l.exports},data:function(){return{}},created:function(){},methods:{}},i=Object(s.a)(u,function(){var e=this.$createElement,t=this._self._c||e;return t("set-title",{staticStyle:{padding:"20px"},attrs:{title:"home-main"}},[t("vm-content")],1)},[],!1,null,"247ad33a",null);i.options.__file="home-main.vue";t.default=i.exports}}]);