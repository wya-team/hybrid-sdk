!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.WYAJSBridge=t()}(this,function(){"use strict";var a=function(e,t){r("_error_",e),t&&t({status:0,msg:e})},r=function(e,t){var n=void 0;"function"==typeof document.CustomEvent?n=new document.CustomEvent(e,{bubbles:!0,cancelable:!0}):"function"==typeof document.createEvent&&(n=document.createEvent("Event")).initEvent(e,!0,!0),t&&n&&(n.data=t),n?window.dispatchEvent(n):console.error("Bridge Error: dispatchEvent")},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n=function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(i(this,n),"object"!==(void 0===e?"undefined":u(e))||e instanceof n||e.__events__||e.__listeners__||e.on||e.off||e.emit)throw new TypeError("不符合观察条件，请删除以下对象.\n\t\t\t\t\n__events__\n__listeners__\non\noff\nemit\n\t\t\t");for(var t in n.prototype.__events__={},n.prototype.__listeners__=[],e)this[t]=e[t]}return t(n,[{key:"on",value:function(e,t){if("object"===(void 0===e?"undefined":u(e)))for(key in e)e.hasOwnProperty(key)&&"function"==typeof e[key]&&this.on(key,e[key]);else"string"==typeof e&&"function"==typeof t?(this.__events__[e]||(this.__events__[e]=[]),this.__events__[e].push(t)):"function"==typeof e&&this.__listeners__.push(e);return this}},{key:"off",value:function(e){return"string"==typeof e?delete this.__events__[e]:void 0===(void 0===e?"undefined":u(e))&&(this.__listeners__=[]),this}},{key:"once",value:function(t,n){var i=this;if("string"==typeof t&&(!this.__events__[t]||0===this.__events__[t].length)){var o=!1;this.on(t,function(e){i.off(t),o||(o=!0,n.call(i,e))})}return this}},{key:"emit",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t instanceof Array||"object"!==(void 0===t?"undefined":u(t))||t.event)return a(e+"事件：回调参数必须是对象, 且不能让带event关键字"),this;if(!this.__events__[e]||0===this.__events__[e].length)return a(e+"事件：没有任何回调"),this;if("string"==typeof e&&this.__events__.hasOwnProperty(e)&&this.__events__[e]instanceof Array)for(var n=0;this.__events__[e]&&n<this.__events__[e].length&&!1!==this.__events__[e][n].call(this,t);n++);for(var i=0;i<this.__listeners__.length&&!1!==this.__listeners__[i].call(this,o({},t,{event:e}));i++);return this}}]),n}();return new(function(){function e(){i(this,e),this.version="1.0.0",this.store={},this.count=0,this.source=new n,this.initCount=0,this.waitEmit=[]}return t(e,[{key:"_send",value:function(t,n){(this.store[t]||{}).eventName;setTimeout(function(){var e=document.createElement("iframe");e.src="command://"+n+"?id="+t,e.style.display="none",document.body.appendChild(e),setTimeout(function(){e.parentNode.removeChild(e)},300)},0)}},{key:"getParam",value:function(e){return(this.store[e]||{}).params}},{key:"invoke",value:function(n,r){var s=this;return new Promise(function(i,o){if(n){r=r?decodeURIComponent(JSON.stringify(r)):"";var e=s.count++;s.store[e]={params:r,eventName:n+"__"+e};var t=s.store[e].eventName;s.source.once(t,function(e){var t=e.data,n=e.id;1==e.status?i(t):o(t),delete s.store[n]}),0===s.initCount?s.waitEmit.push(s._send.bind(s,e,n)):s._send(e,n)}else a("scheme 方法名必传",o)})}},{key:"addEventListener",value:function(e,t){for(var n=arguments.length,i=Array(2<n?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var r=("object"===u(i[0])?i[0].success:i[0])||function(){},s=("object"===u(i[1])?i[0].fail:i[1])||function(){};this.source[e](t,function(e){var t=e.data;e.id;1==e.status?r(t):s(t)})}},{key:"on",value:function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.addEventListener.apply(this,["on",e].concat(n))}},{key:"once",value:function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.addEventListener.apply(this,["once",e].concat(n))}},{key:"last",value:function(e){this.off(e);for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.on.apply(this,[e].concat(n))}},{key:"first",value:function(e){if(this.source.__events__[e]||0===this.source.__events__[e].length){for(var t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.on.apply(this,[e].concat(n))}else{a(e+"只执行触发一次绑定")}}},{key:"emit",value:function(e,t){var n=(this.store[e]||{}).eventName,i=void 0===n?e:n;if("_error_"===i||"object"===(void 0===t?"undefined":u(t))&&"undefined"!==t.status)switch(i){case"_ready_":if(this.initCount++,1===this.initCount)r(i,t),this.waitEmit.forEach(function(e,t){return e()}),this.waitEmit=[];else{var o="_ready_ 事件, 只允许初始化一次";r(i,{status:0,msg:o}),a(o)}break;case"_error_":a(t);default:this.source.emit(i,t)}else a("Native端返回格式错误: "+t)}},{key:"off",value:function(e){this.source.off(e)}}]),e}())});
