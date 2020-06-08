(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../../docs/events/appIdle.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('appIdle', () => {\n\n});\n\n// on / once / last / first / off\nwya.onAppIdle(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('appIdle', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('appIdle', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/appIntent.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n本应用被其他应用调起来时（Android 平台也可以通过 Activity 打开），收到相关数据的回调\n\n在任意页面中注册该监听后，如果本应用被其他应用调起，将触发该监听函数，同时将传给该应用的数据回调给网页\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tiosUrl: ''              // 其他应用打开本应用的url，只iOS有效，字符串类型\n\t\tsourceAppId: ''         // 其他应用的包名，iOS平台有可能为空字符串，字符串类型\n\t\tappParam: {}            // 其他应用传递过来的参数，JSON或字符串类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('appIntent', () => {\n\n});\n\n// on / once / last / first / off\nwya.onAppIntent(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('appIntent', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('appIntent', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/battery.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设备电池电量事件，是否充电\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tlevel: 100,            // 电池电量（0-100）\n\t\tisPlugged: true        // 是否连接电源\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('battery', () => {\n\n});\n\n// on / once / last / first / off\nwya.onBattery(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('battery', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('battery', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/keyBack.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设备 back 键被点击事件，仅 Android 平台有效\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('keyBack', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyBack(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyBack', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyBack', '@Object');\n```\n\n#### 6. 可用性\n\nAndroid系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/keyMenu.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设备 menu 键被点击事件，仅 Android 平台有效\n\n该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('keyMenu', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyMenu(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyMenu', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyMenu', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/keyboardHide.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n系统键盘隐藏的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('keyboardHide', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyboardHide(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyboardHide', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyboardHide', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/keyboardShow.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n系统键盘弹出的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\theight: 260        // 键盘高度，数字类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('keyboardShow', () => {\n\n});\n\n// on / once / last / first / off\nwya.onKeyboardShow(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('keyboardShow', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('keyboardShow', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/network.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n监听设备断开/连接网络的事件，字符串类型\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\ttype: 'offline', // online \n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('network', () => {\n\n});\n\n// on / once / last / first / off\nwya.onNetwork(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('network', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('network', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/noticeClick.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n状态栏通知被用户点击后的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\ttype: 0,            // 内容来源类型， 待定\n\t\tvalue: ''           // 内容，收到的推送内容\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('noticeClick', () => {\n\n});\n\n// on / once / last / first / off\nwya.onNoticeClick(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('noticeClick', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('noticeClick', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/pause.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n应用进入后台事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('pause', () => {\n\n});\n\n// on / once / last / first / off\nwya.onPause(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('pause', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('pause', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/resume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n应用从后台回到前台事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('resume', () => {\n\n});\n\n// on / once / last / first / off\nwya.onResume(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('resume', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('resume', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/safeArea.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n安全区域发生变化的回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\ttop: 0,           // 安全区域上边缘，数字类型\n\t\tleft: 0,          // 安全区域左边缘，数字类型\n\t\tbottom: 0,        // 安全区域下边缘，数字类型\n\t\tright: 0          // 安全区域右边缘，数字类型\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('safeAreaChange', () => {\n\n});\n\n// on / once / last / first / off\nwya.onSafeAreaChange(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('safeAreaChange', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('safeAreaChange', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/shake.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设备摇动事件，字符串类型。设置该监听后，当前 APP 将立即开启摇动检测功能。\n\n可用于实现摇一摇功能\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('shake', () => {\n\n});\n\n// on / once / last / first / off\nwya.onShake(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('shake', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('shake', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/takeScreenshot.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n应用在前台运行期间，用户屏幕截图事件\n\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\timage: '' // 是否回传图片待定\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('takeScreenshot', () => {\n\n});\n\n// on / once / last / first / off\nwya.onTakeScreenshot(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('takeScreenshot', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('takeScreenshot', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/viewAppear.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\nWindow 显示到屏幕的事件，字符串类型。收到 viewappear 事件回调，即标识当前 Window 已经动画结束，并且完全显示到屏幕上。\n\n该事件的作用对象为 Window，Frame 的显示不会收到事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('viewAppear', () => {\n\n});\n\n// on / once / last / first / off\nwya.onViewAppear(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('viewAppear', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('viewAppear', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/viewDisappear.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\nWindow 离开屏幕的事件，字符串类型。收到 viewdisappear 事件回调，即标识当前 Window 已经动画结束，并且完全从屏幕上移除。\n\n该事件的作用对象为 Window，Frame 的隐藏不会收到事件\n\n若是 Window 被关闭，此事件不会再回调\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('viewDisappear', () => {\n\n});\n\n// on / once / last / first / off\nwya.onViewDisappear(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('viewDisappear', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('viewDisappear', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/events/volume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设备音量键被点击事件\n\n#### 2. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tkeyCode: 0                // 被点击的按键\n\t\tlongPress: false          // 是否是长按\n\t}\n}\n```\n\n#### 3. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\n// on / once / last / first / off\nwya.on('volume', () => {\n\n});\n\n// on / once / last / first / off\nwya.onVolume(() => {\n\n});\n```\n\n#### 4. 不引入sdk示例代码\n\n```javascript\n// on / once / last / first / off\nWYAJSBridge.on('volume', () => {\n\n});\n```\n\n#### 5. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('volume', '@Object');\n```\n\n#### 6. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "./src/pages/components/events/detail/modules/root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../sdk/dist/wya.umd.js
var wya_umd = __webpack_require__("../sdk/dist/wya.umd.js");
var wya_umd_default = /*#__PURE__*/__webpack_require__.n(wya_umd);

// EXTERNAL MODULE: ./src/pages/components/_common/toast/toast.js + 5 modules
var toast = __webpack_require__("./src/pages/components/_common/toast/toast.js");

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/pause.md
var pause = __webpack_require__("../../docs/events/pause.md");
var pause_default = /*#__PURE__*/__webpack_require__.n(pause);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/pause.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var invoke = {
  on: function on() {
    wya_umd_default.a.on('pause', function (res) {
      res = _typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('pause');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'pause'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_pause = ({
  to: '/events/pause',
  title: 'pause',
  label: '应用进入后台',
  invoke: invoke,
  markdown: pause_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/resume.md
var resume = __webpack_require__("../../docs/events/resume.md");
var resume_default = /*#__PURE__*/__webpack_require__.n(resume);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/resume.js
function resume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { resume_typeof = function _typeof(obj) { return typeof obj; }; } else { resume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return resume_typeof(obj); }




var resume_invoke = {
  on: function on() {
    wya_umd_default.a.on('resume', function (res) {
      res = resume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('resume');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'resume'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_resume = ({
  to: '/events/resume',
  title: 'resume',
  label: '应用从后台回到前台',
  invoke: resume_invoke,
  markdown: resume_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/shake.md
var shake = __webpack_require__("../../docs/events/shake.md");
var shake_default = /*#__PURE__*/__webpack_require__.n(shake);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/shake.js
function shake_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { shake_typeof = function _typeof(obj) { return typeof obj; }; } else { shake_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return shake_typeof(obj); }




var shake_invoke = {
  on: function on() {
    wya_umd_default.a.on('shake', function (res) {
      res = shake_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('shake');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'shake'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_shake = ({
  to: '/events/shake',
  title: 'shake',
  label: '摇动事件',
  invoke: shake_invoke,
  markdown: shake_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/appIdle.md
var appIdle = __webpack_require__("../../docs/events/appIdle.md");
var appIdle_default = /*#__PURE__*/__webpack_require__.n(appIdle);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/appIdle.js
function appIdle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appIdle_typeof = function _typeof(obj) { return typeof obj; }; } else { appIdle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appIdle_typeof(obj); }




var appIdle_invoke = {
  on: function on() {
    wya_umd_default.a.on('appIdle', function (res) {
      res = appIdle_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('appIdle');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'appIdle'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_appIdle = ({
  to: '/events/appIdle',
  title: 'appIdle',
  label: '多长时间不操作后触发',
  invoke: appIdle_invoke,
  markdown: appIdle_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/takeScreenshot.md
var takeScreenshot = __webpack_require__("../../docs/events/takeScreenshot.md");
var takeScreenshot_default = /*#__PURE__*/__webpack_require__.n(takeScreenshot);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/takeScreenshot.js
function takeScreenshot_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { takeScreenshot_typeof = function _typeof(obj) { return typeof obj; }; } else { takeScreenshot_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return takeScreenshot_typeof(obj); }




var takeScreenshot_invoke = {
  on: function on() {
    wya_umd_default.a.on('takeScreenshot', function (res) {
      res = takeScreenshot_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('takeScreenshot');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'takeScreenshot'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_takeScreenshot = ({
  to: '/events/takeScreenshot',
  title: 'takeScreenshot',
  label: '用户屏幕截图',
  invoke: takeScreenshot_invoke,
  markdown: takeScreenshot_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/viewAppear.md
var viewAppear = __webpack_require__("../../docs/events/viewAppear.md");
var viewAppear_default = /*#__PURE__*/__webpack_require__.n(viewAppear);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/viewAppear.js
function viewAppear_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { viewAppear_typeof = function _typeof(obj) { return typeof obj; }; } else { viewAppear_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return viewAppear_typeof(obj); }




var viewAppear_invoke = {
  on: function on() {
    wya_umd_default.a.on('viewAppear', function (res) {
      res = viewAppear_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('viewAppear');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'viewAppear'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_viewAppear = ({
  to: '/events/viewAppear',
  title: 'viewAppear',
  label: '显示到屏幕的事件',
  invoke: viewAppear_invoke,
  markdown: viewAppear_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/viewDisappear.md
var viewDisappear = __webpack_require__("../../docs/events/viewDisappear.md");
var viewDisappear_default = /*#__PURE__*/__webpack_require__.n(viewDisappear);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/viewDisappear.js
function viewDisappear_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { viewDisappear_typeof = function _typeof(obj) { return typeof obj; }; } else { viewDisappear_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return viewDisappear_typeof(obj); }




var viewDisappear_invoke = {
  on: function on() {
    wya_umd_default.a.on('viewDisappear', function (res) {
      res = viewDisappear_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('viewDisappear');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'viewDisappear'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_viewDisappear = ({
  to: '/events/viewDisappear',
  title: 'viewDisappear',
  label: '离开屏幕的事件',
  invoke: viewDisappear_invoke,
  markdown: viewDisappear_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/noticeClick.md
var noticeClick = __webpack_require__("../../docs/events/noticeClick.md");
var noticeClick_default = /*#__PURE__*/__webpack_require__.n(noticeClick);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/noticeClick.js
function noticeClick_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { noticeClick_typeof = function _typeof(obj) { return typeof obj; }; } else { noticeClick_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return noticeClick_typeof(obj); }




var noticeClick_invoke = {
  on: function on() {
    wya_umd_default.a.on('noticeClick', function (res) {
      res = noticeClick_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('noticeClick');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'noticeClick'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_noticeClick = ({
  to: '/events/noticeClick',
  title: 'noticeClick',
  label: '状态栏通知点击',
  invoke: noticeClick_invoke,
  markdown: noticeClick_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/appIntent.md
var appIntent = __webpack_require__("../../docs/events/appIntent.md");
var appIntent_default = /*#__PURE__*/__webpack_require__.n(appIntent);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/appIntent.js
function appIntent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appIntent_typeof = function _typeof(obj) { return typeof obj; }; } else { appIntent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appIntent_typeof(obj); }




var appIntent_invoke = {
  on: function on() {
    wya_umd_default.a.on('appIntent', function (res) {
      res = appIntent_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('appIntent');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'appIntent'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_appIntent = ({
  to: '/events/appIntent',
  title: 'appIntent',
  label: '应用被调起',
  invoke: appIntent_invoke,
  markdown: appIntent_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/keyboardShow.md
var keyboardShow = __webpack_require__("../../docs/events/keyboardShow.md");
var keyboardShow_default = /*#__PURE__*/__webpack_require__.n(keyboardShow);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/keyboardShow.js
function keyboardShow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { keyboardShow_typeof = function _typeof(obj) { return typeof obj; }; } else { keyboardShow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return keyboardShow_typeof(obj); }




var keyboardShow_invoke = {
  on: function on() {
    wya_umd_default.a.on('keyboardShow', function (res) {
      res = keyboardShow_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('keyboardShow');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'keyboardShow'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_keyboardShow = ({
  to: '/events/keyboardShow',
  title: 'keyboardShow',
  label: '系统键盘弹出的回调',
  invoke: keyboardShow_invoke,
  markdown: keyboardShow_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/keyboardHide.md
var keyboardHide = __webpack_require__("../../docs/events/keyboardHide.md");
var keyboardHide_default = /*#__PURE__*/__webpack_require__.n(keyboardHide);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/keyboardHide.js
function keyboardHide_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { keyboardHide_typeof = function _typeof(obj) { return typeof obj; }; } else { keyboardHide_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return keyboardHide_typeof(obj); }




var keyboardHide_invoke = {
  on: function on() {
    wya_umd_default.a.on('keyboardHide', function (res) {
      res = keyboardHide_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('keyboardHide');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'keyboardHide'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_keyboardHide = ({
  to: '/events/keyboardHide',
  title: 'keyboardHide',
  label: '系统键盘隐藏的回调',
  invoke: keyboardHide_invoke,
  markdown: keyboardHide_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/keyBack.md
var keyBack = __webpack_require__("../../docs/events/keyBack.md");
var keyBack_default = /*#__PURE__*/__webpack_require__.n(keyBack);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/keyBack.js
function keyBack_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { keyBack_typeof = function _typeof(obj) { return typeof obj; }; } else { keyBack_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return keyBack_typeof(obj); }




var keyBack_invoke = {
  on: function on() {
    wya_umd_default.a.on('keyBack', function (res) {
      res = keyBack_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('keyBack');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'keyBack'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_keyBack = ({
  to: '/events/keyBack',
  title: 'keyBack',
  label: '返回',
  invoke: keyBack_invoke,
  markdown: keyBack_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/keyMenu.md
var keyMenu = __webpack_require__("../../docs/events/keyMenu.md");
var keyMenu_default = /*#__PURE__*/__webpack_require__.n(keyMenu);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/keyMenu.js
function keyMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { keyMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { keyMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return keyMenu_typeof(obj); }




var keyMenu_invoke = {
  on: function on() {
    wya_umd_default.a.on('keyMenu', function (res) {
      res = keyMenu_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('keyMenu');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'keyMenu'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_keyMenu = ({
  to: '/events/keyMenu',
  title: 'keyMenu',
  label: '菜单键',
  invoke: keyMenu_invoke,
  markdown: keyMenu_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/battery.md
var battery = __webpack_require__("../../docs/events/battery.md");
var battery_default = /*#__PURE__*/__webpack_require__.n(battery);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/battery.js
function battery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { battery_typeof = function _typeof(obj) { return typeof obj; }; } else { battery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return battery_typeof(obj); }




var battery_invoke = {
  on: function on() {
    wya_umd_default.a.on('battery', function (res) {
      res = battery_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('battery');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'battery'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_battery = ({
  to: '/events/battery',
  title: 'battery',
  label: '电池状态',
  invoke: battery_invoke,
  markdown: battery_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/network.md
var network = __webpack_require__("../../docs/events/network.md");
var network_default = /*#__PURE__*/__webpack_require__.n(network);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/network.js
function network_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { network_typeof = function _typeof(obj) { return typeof obj; }; } else { network_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return network_typeof(obj); }




var network_invoke = {
  on: function on() {
    wya_umd_default.a.on('network', function (res) {
      res = network_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('network');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'network'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_network = ({
  to: '/events/network',
  title: 'network',
  label: '网络',
  invoke: network_invoke,
  markdown: network_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/safeArea.md
var safeArea = __webpack_require__("../../docs/events/safeArea.md");
var safeArea_default = /*#__PURE__*/__webpack_require__.n(safeArea);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/safeArea.js
function safeArea_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { safeArea_typeof = function _typeof(obj) { return typeof obj; }; } else { safeArea_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return safeArea_typeof(obj); }




var safeArea_invoke = {
  on: function on() {
    wya_umd_default.a.on('safeArea', function (res) {
      res = safeArea_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('safeArea');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'safeArea'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_safeArea = ({
  to: '/events/safeArea',
  title: 'safeArea',
  label: '安全区域变化',
  invoke: safeArea_invoke,
  markdown: safeArea_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/events/volume.md
var volume = __webpack_require__("../../docs/events/volume.md");
var volume_default = /*#__PURE__*/__webpack_require__.n(volume);

// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/volume.js
function volume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { volume_typeof = function _typeof(obj) { return typeof obj; }; } else { volume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return volume_typeof(obj); }




var volume_invoke = {
  on: function on() {
    wya_umd_default.a.on('volume', function (res) {
      res = volume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
      toast["a" /* default */].info(res, 0);
    });
  },
  off: function off() {
    wya_umd_default.a.off('volume');
  },
  debugger: function _debugger() {
    // 强制执行
    wya_umd_default.a.invoke('debugger/invoke', {
      eventName: 'volume'
    }).then(function (res) {
      toast["a" /* default */].info('执行成功', 0);
    }).catch(function () {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      toast["a" /* default */].info('执行失败：' + res.msg, 0);
    });
  }
};
/* harmony default export */ var modules_volume = ({
  to: '/events/volume',
  title: 'volume',
  label: '音量键',
  invoke: volume_invoke,
  markdown: volume_default.a
});
// CONCATENATED MODULE: ./src/pages/components/events/detail/modules/root.js
/* concated harmony reexport pause */__webpack_require__.d(__webpack_exports__, "pause", function() { return modules_pause; });
/* concated harmony reexport resume */__webpack_require__.d(__webpack_exports__, "resume", function() { return modules_resume; });
/* concated harmony reexport shake */__webpack_require__.d(__webpack_exports__, "shake", function() { return modules_shake; });
/* concated harmony reexport appIdle */__webpack_require__.d(__webpack_exports__, "appIdle", function() { return modules_appIdle; });
/* concated harmony reexport takeScreenshot */__webpack_require__.d(__webpack_exports__, "takeScreenshot", function() { return modules_takeScreenshot; });
/* concated harmony reexport viewAppear */__webpack_require__.d(__webpack_exports__, "viewAppear", function() { return modules_viewAppear; });
/* concated harmony reexport viewDisappear */__webpack_require__.d(__webpack_exports__, "viewDisappear", function() { return modules_viewDisappear; });
/* concated harmony reexport noticeClick */__webpack_require__.d(__webpack_exports__, "noticeClick", function() { return modules_noticeClick; });
/* concated harmony reexport appIntent */__webpack_require__.d(__webpack_exports__, "appIntent", function() { return modules_appIntent; });
/* concated harmony reexport keyboardShow */__webpack_require__.d(__webpack_exports__, "keyboardShow", function() { return modules_keyboardShow; });
/* concated harmony reexport keyboardHide */__webpack_require__.d(__webpack_exports__, "keyboardHide", function() { return modules_keyboardHide; });
/* concated harmony reexport keyBack */__webpack_require__.d(__webpack_exports__, "keyBack", function() { return modules_keyBack; });
/* concated harmony reexport keyMenu */__webpack_require__.d(__webpack_exports__, "keyMenu", function() { return modules_keyMenu; });
/* concated harmony reexport battery */__webpack_require__.d(__webpack_exports__, "battery", function() { return modules_battery; });
/* concated harmony reexport network */__webpack_require__.d(__webpack_exports__, "network", function() { return modules_network; });
/* concated harmony reexport safeArea */__webpack_require__.d(__webpack_exports__, "safeArea", function() { return modules_safeArea; });
/* concated harmony reexport volume */__webpack_require__.d(__webpack_exports__, "volume", function() { return modules_volume; });



































/***/ })

}]);