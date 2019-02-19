(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"../../docs/assists/error.md":function(e,s){e.exports="#### 1. 说明\n\n异常信息捕获\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 直接返回异常信息\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.onError((msg) => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.on('_error_', (msg) => {\n\n})\n// 或者\nwindow.addEventListener('_error_', () => {\n\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_error_', '@String')\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n"},"../../docs/assists/ready.md":function(e,s){e.exports="#### 1. 说明\n\n初始化后执行\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 返回常量\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.ready(() => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nwindow.addEventListener('_ready_', (e) => {\n\t// 这个只被允许执行一次\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_ready_', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=(function(e){e&&e.__esModule}(t("../sdk/src/web.js")),t("./src/pages/extends/directives/hljs.js")),r=t("./src/pages/extends/directives/md.js"),d=function(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s.default=e,s}(t("./src/pages/components/assists/detail/modules/root.js"));s.default={name:"consts-contents",directives:{hljs:o.hljs,md:r.md},props:{id:String},data:function(){return n({},d[this.id])},computed:{},created:function(){},mounted:function(){},methods:{handleClick:function(){}}}},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t("./src/pages/components/assists/detail/contents.vue")),o=t("./src/pages/extends/filters/capitalize.js");s.default={name:"assists-detail",components:{Contents:n.default},filters:{capitalize:o.capitalize},data:function(){return{id:this.$route.params.id}},created:function(){},methods:{}}},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&":function(e,s,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"",""])},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&":function(e,s,t){(e.exports=t("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"",""])},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&":function(e,s,t){var n=t("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("db916c98",n,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&":function(e,s,t){var n=t("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("18a0dbd8",n,!0,{})},"./src/pages/components/assists/detail/contents.vue":function(e,s,t){"use strict";t.r(s);var n=t("./src/pages/components/assists/detail/contents.vue?vue&type=template&id=ee2fb122&scoped=true&"),o=t("./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&");for(var r in o)"default"!==r&&function(e){t.d(s,e,function(){return o[e]})}(r);t("./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&");var d=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),i=Object(d.a)(o.default,n.a,n.b,!1,null,"ee2fb122",null);i.options.__file="contents.vue",s.default=i.exports},"./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t.r(s);var n=t("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(s,e,function(){return n[e]})}(r);s.default=o.a},"./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&":function(e,s,t){"use strict";var n=t("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/detail/contents.vue?vue&type=style&index=0&id=ee2fb122&lang=scss&scoped=true&");t.n(n).a},"./src/pages/components/assists/detail/contents.vue?vue&type=template&id=ee2fb122&scoped=true&":function(e,s,t){"use strict";var n=function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"md",rawName:"v-md"}],staticClass:"g-md-reset g-pd-lr-10 g-bg-white g-pd-tb-10",domProps:{innerHTML:this._s(this.markdown)}})},o=[];t.d(s,"a",function(){return n}),t.d(s,"b",function(){return o})},"./src/pages/components/assists/detail/modules/error.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(t("../sdk/src/web.js")),r=i(t("./src/pages/components/_common/toasts/toasts.js")),d=i(t("../../docs/assists/error.md"));function i(e){return e&&e.__esModule?e:{default:e}}s.default={to:"/assists/error",title:"onError",label:"异常捕获",invoke:function(){o.default.once("error",function(e){e="object"===(void 0===e?"undefined":n(e))?JSON.stringify(e):e||"无数据",r.default.info(e,0)}),o.default.invoke("debugger",{event:"error"}).then(function(e){r.default.info("执行成功",0)}).catch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.default.info("执行失败："+e.msg,0)})},markdown:d.default}},"./src/pages/components/assists/detail/modules/ready.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t("../../docs/assists/ready.md"));s.default={to:"/assists/ready",title:"ready",label:"初始化后执行",markdown:n.default}},"./src/pages/components/assists/detail/modules/root.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.error=s.ready=void 0;var n=r(t("./src/pages/components/assists/detail/modules/ready.js")),o=r(t("./src/pages/components/assists/detail/modules/error.js"));function r(e){return e&&e.__esModule?e:{default:e}}s.ready=n.default,s.error=o.default},"./src/pages/containers/assists/modules/assists-detail.vue":function(e,s,t){"use strict";t.r(s);var n=t("./src/pages/containers/assists/modules/assists-detail.vue?vue&type=template&id=0b28c6f4&scoped=true&"),o=t("./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&");for(var r in o)"default"!==r&&function(e){t.d(s,e,function(){return o[e]})}(r);t("./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&");var d=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),i=Object(d.a)(o.default,n.a,n.b,!1,null,"0b28c6f4",null);i.options.__file="assists-detail.vue",s.default=i.exports},"./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&":function(e,s,t){"use strict";t.r(s);var n=t("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(s,e,function(){return n[e]})}(r);s.default=o.a},"./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&":function(e,s,t){"use strict";var n=t("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=style&index=0&id=0b28c6f4&lang=scss&scoped=true&");t.n(n).a},"./src/pages/containers/assists/modules/assists-detail.vue?vue&type=template&id=0b28c6f4&scoped=true&":function(e,s,t){"use strict";var n=function(){var e=this.$createElement,s=this._self._c||e;return s("set-title",{attrs:{title:this.id}},[s("contents",{attrs:{id:this.id}})],1)},o=[];t.d(s,"a",function(){return n}),t.d(s,"b",function(){return o})},"./src/pages/extends/directives/hljs.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.hljs=void 0;var n=t("./src/pages/extends/directives/utils.js");s.hljs=function(){var e=function(e){return function(){var s=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,r){try{var d=s[o](r),i=d.value}catch(e){return void t(e)}if(!d.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function e(s){var o,r,d,i,a,l,u,c,p,f,v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=m.data.domProps.innerHTML,s.style.display="none",e.next=5,t.e(0).then(t.t.bind(null,"./node_modules/highlight.js/lib/index.js",7));case 5:return r=e.sent,d=r.default,e.next=9,t.e(1).then(t.t.bind(null,"./node_modules/js-beautify/js/lib/beautify.js",7));case 9:i=e.sent,a=i.default,0===(l=s.querySelectorAll("pre code")).length&&(u=v.value,"js"!==(c=void 0===u?"js":u)&&"json"!==c||(o=a.js_beautify(o,{indent_size:4})),(p=document.createElement("pre")).innerHTML='<code class="'+c+'">'+o+"</code>",s.innerHTML="",s.appendChild(p),l=s.querySelectorAll("pre code")),s.style.display="block",l.forEach(function(e){d.highlightBlock(e)}),(f=(0,n.findBSInstance)(m.context))&&f.refresh(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}},e,void 0,[[0,19]])}));return function(s){return e.apply(this,arguments)}}()},"./src/pages/extends/directives/md.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.md=void 0;var n=t("./src/pages/extends/directives/utils.js");s.md=function(){var e=function(e){return function(){var s=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,r){try{var d=s[o](r),i=d.value}catch(e){return void t(e)}if(!d.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function e(s){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var o,r,d,i,a,l,u,c,p,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=f.data.domProps.innerHTML,s.innerHTML="",e.next=5,t.e(16).then(t.t.bind(null,"./node_modules/marked/lib/marked.js",7));case 5:return r=e.sent,d=r.default,e.next=9,t.e(0).then(t.t.bind(null,"./node_modules/highlight.js/lib/index.js",7));case 9:return i=e.sent,a=i.default,e.next=13,t.e(1).then(t.t.bind(null,"./node_modules/js-beautify/js/lib/beautify.js",7));case 13:l=e.sent,u=l.default,c=d(o,{gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,pedantic:!1,highlight:function(e,s,t){return["javascript","js","json"].includes(s)&&(e=u.js_beautify(e)),a.highlight(s||"js",e).value}}),s.innerHTML=c,s.querySelectorAll("pre code").forEach(function(e){a.highlightBlock(e)}),(p=(0,n.findBSInstance)(f.context))&&p.refresh(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0);case 26:case"end":return e.stop()}},e,void 0,[[0,23]])}));return function(s){return e.apply(this,arguments)}}()},"./src/pages/extends/directives/utils.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};s.findBSInstance=function e(s){if("object"!==(void 0===s?"undefined":n(s)))return null;var t=s.betterScroller;return void 0!==t?t:e(s.$parent)}},"./src/pages/extends/filters/capitalize.js":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.capitalize=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?s+(e=e.toString()).charAt(0).toUpperCase()+e.slice(1):""}}}]);