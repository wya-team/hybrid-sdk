(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../docs/methods/accessNative.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.accessNative({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('accessNative', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('accessNative', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/actionSheet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.actionSheet({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('actionSheet', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('actionSheet', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/addEventListener.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.addEventListener({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('addEventListener', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('addEventListener', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/ajax.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.ajax({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('ajax', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('ajax', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/alert.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.alert({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('alert', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('alert', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/animation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.animation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('animation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('animation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/appInstalled.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.appInstalled({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('appInstalled', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('appInstalled', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/bringFrameToFront.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.bringFrameToFront({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('bringFrameToFront', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('bringFrameToFront', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/call.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.call({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/cancelAjax.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.cancelAjax({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('cancelAjax', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('cancelAjax', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/cancelDownload.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.cancelDownload({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('cancelDownload', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('cancelDownload', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/cancelNotification.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.cancelNotification({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('cancelNotification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('cancelNotification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/clearCache.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.clearCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeDrawerPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeDrawerPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeDrawerPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeDrawerPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeFrame.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeFrame({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeFrame', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeFrame', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeFrameGroup.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeFrameGroup({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeFrameGroup', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeFrameGroup', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closePopoverWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closePopoverWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closePopoverWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closePopoverWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeSlidPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeSlidPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeToWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeToWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeToWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeToWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeWidget.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeWidget({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeWidget', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeWidget', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/closeWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.closeWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('closeWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('closeWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/confirm.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.confirm({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('confirm', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('confirm', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/download.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.download({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/execScript.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.execScript({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('execScript', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('execScript', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getCacheSize.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getCacheSize({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getCacheSize', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getCacheSize', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getFreeDiskSpace.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getFreeDiskSpace({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getFreeDiskSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getFreeDiskSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getLocation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getLocation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getPhoneNumber.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getPhoneNumber({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getPhoneNumber', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getPhoneNumber', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getPicture.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getPicture({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getPicture', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getPicture', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getPrefs.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getPrefs({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getPrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getPrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getTotalSpace.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getTotalSpace({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getTotalSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getTotalSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/hideProgress.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.hideProgress({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('hideProgress', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('hideProgress', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/historyBack.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.historyBack({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('historyBack', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('historyBack', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/historyForward.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.historyForward({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('historyForward', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('historyForward', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/imageCache.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.imageCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('imageCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('imageCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/installApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.installApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('installApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('installApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/loadData.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.loadData({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('loadData', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('loadData', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/loadSecureValue.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.loadSecureValue({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('loadSecureValue', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('loadSecureValue', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/lockSlidPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.lockSlidPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('lockSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('lockSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/mail.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.mail({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/notification.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.notification({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('notification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('notification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openContacts.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openContacts({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openContacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openContacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openDrawerLayout.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openDrawerLayout({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openDrawerLayout', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openDrawerLayout', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openDrawerPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openDrawerPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openDrawerPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openDrawerPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openFrame.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openFrame({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openFrame', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openFrame', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openFrameGroup.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openFrameGroup({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openFrameGroup', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openFrameGroup', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openPicker.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openPicker({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openPicker', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openPicker', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openPopoverWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openPopoverWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openPopoverWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openPopoverWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openSlidLayout.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openSlidLayout({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openSlidLayout', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openSlidLayout', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openSlidPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openSlidPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openVideo.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openVideo({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openVideo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openVideo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openWidget.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openWidget({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openWidget', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openWidget', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n打开window\n若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\tname: '',\n\turl: '',\n\tuseWKWebView: false,\n\tsingleInstance: false,\n\thistoryGestureEnabled: false,\n\tpageParam: '',\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nname | window名字 | str | - | -\nurl | 页面地址 | str | - | `./home/main`, `https:**.com/`\nuseWKWebView | 是否使用WKWebView来加载页面 | bool | false | `./home/main`, `https:**.com/`\nsingleInstance | 设置该window是否为单例对象(屏幕移除不想销毁) | bool | false | `-`\nhistoryGestureEnabled | 是否可以通过手势来进行历史记录前进后退 | bool | false | `-`\n\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/pageDown.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.pageDown({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('pageDown', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('pageDown', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/pageUp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.pageUp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('pageUp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('pageUp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/parseTapmode.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.parseTapmode({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('parseTapmode', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('parseTapmode', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/readFile.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.readFile({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('readFile', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('readFile', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/rebootApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.rebootApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('rebootApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('rebootApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/refreshHeaderLoadDone.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.refreshHeaderLoadDone({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('refreshHeaderLoadDone', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('refreshHeaderLoadDone', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/refreshHeaderLoading.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.refreshHeaderLoading({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('refreshHeaderLoading', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('refreshHeaderLoading', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/removeEventListener.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.removeEventListener({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('removeEventListener', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('removeEventListener', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/removeLaunchView.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.removeLaunchView({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('removeLaunchView', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('removeLaunchView', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/removePrefs.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.removePrefs({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('removePrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('removePrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/saveMediaToAlbum.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.saveMediaToAlbum({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('saveMediaToAlbum', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('saveMediaToAlbum', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sendEvent.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.sendEvent({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sendEvent', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sendEvent', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sendFrameToBack.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.sendFrameToBack({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sendFrameToBack', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sendFrameToBack', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setAppIconBadge.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setAppIconBadge({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setAppIconBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setAppIconBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setBlurEffect.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setBlurEffect({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setBlurEffect', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setBlurEffect', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setCustomRefreshHeaderInfo.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setCustomRefreshHeaderInfo({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setCustomRefreshHeaderInfo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setCustomRefreshHeaderInfo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setFrameAttr.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setFrameAttr({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setFrameAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setFrameAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setFrameClient.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setFrameClient({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setFrameClient', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setFrameClient', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setFrameGroupAttr.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setFrameGroupAttr({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setFrameGroupAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setFrameGroupAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setFrameGroupIndex.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setFrameGroupIndex({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setFrameGroupIndex', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setFrameGroupIndex', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setKeepScreenOn.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setKeepScreenOn({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setKeepScreenOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setKeepScreenOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setPrefs.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setPrefs({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setPrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setPrefs', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setRefreshHeaderInfo.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setRefreshHeaderInfo({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setRefreshHeaderInfo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setRefreshHeaderInfo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setScreenOrientation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setScreenOrientation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setScreenOrientation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setScreenOrientation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setScreenSecure.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setScreenSecure({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setScreenSecure', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setScreenSecure', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setStatusBarStyle.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setStatusBarStyle({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setStatusBarStyle', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setStatusBarStyle', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setWinAttr.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setWinAttr({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setWinAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setWinAttr', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/showFloatBox.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.showFloatBox({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('showFloatBox', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('showFloatBox', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/showLaunchView.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.showLaunchView({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('showLaunchView', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('showLaunchView', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/showProgress.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.showProgress({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('showProgress', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('showProgress', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sms.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.sms({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startLocation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startLocation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startPlay.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startPlay({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startRecord.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startRecord({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startSensor.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startSensor({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopLocation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopLocation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopPlay.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopPlay({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopRecord.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopRecord({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopSensor.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopSensor({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/toLauncher.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.toLauncher({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/toast.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.toast({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('toast', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('toast', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uninstallApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.uninstallApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('uninstallApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('uninstallApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/unlockSlidPane.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.unlockSlidPane({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('unlockSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('unlockSlidPane', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/writeFile.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.writeFile({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('writeFile', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('writeFile', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "./src/pages/components/methods/detail/modules/root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../sdk/dist/wya.umd.js
var wya_umd = __webpack_require__("../sdk/dist/wya.umd.js");
var wya_umd_default = /*#__PURE__*/__webpack_require__.n(wya_umd);

// EXTERNAL MODULE: ./src/pages/components/_common/toasts/toasts.js + 5 modules
var toasts = __webpack_require__("./src/pages/components/_common/toasts/toasts.js");

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openWin.md
var openWin = __webpack_require__("../../docs/methods/openWin.md");
var openWin_default = /*#__PURE__*/__webpack_require__.n(openWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openWin.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var openWin_invoke = function invoke() {
  wya_umd_default.a.invoke('openWin', {// ...
  }).then(function (res) {
    res = _typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openWin = ({
  to: '/methods/openWin',
  title: 'openWin',
  label: '',
  invoke: openWin_invoke,
  markdown: openWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeWin.md
var closeWin = __webpack_require__("../../docs/methods/closeWin.md");
var closeWin_default = /*#__PURE__*/__webpack_require__.n(closeWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeWin.js
function closeWin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeWin_typeof = function _typeof(obj) { return typeof obj; }; } else { closeWin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeWin_typeof(obj); }





var closeWin_invoke = function invoke() {
  wya_umd_default.a.invoke('closeWin', {// ...
  }).then(function (res) {
    res = closeWin_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeWin = ({
  to: '/methods/closeWin',
  title: 'closeWin',
  label: '',
  invoke: closeWin_invoke,
  markdown: closeWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeToWin.md
var closeToWin = __webpack_require__("../../docs/methods/closeToWin.md");
var closeToWin_default = /*#__PURE__*/__webpack_require__.n(closeToWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeToWin.js
function closeToWin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeToWin_typeof = function _typeof(obj) { return typeof obj; }; } else { closeToWin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeToWin_typeof(obj); }





var closeToWin_invoke = function invoke() {
  wya_umd_default.a.invoke('closeToWin', {// ...
  }).then(function (res) {
    res = closeToWin_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeToWin = ({
  to: '/methods/closeToWin',
  title: 'closeToWin',
  label: '',
  invoke: closeToWin_invoke,
  markdown: closeToWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setWinAttr.md
var setWinAttr = __webpack_require__("../../docs/methods/setWinAttr.md");
var setWinAttr_default = /*#__PURE__*/__webpack_require__.n(setWinAttr);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setWinAttr.js
function setWinAttr_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setWinAttr_typeof = function _typeof(obj) { return typeof obj; }; } else { setWinAttr_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setWinAttr_typeof(obj); }





var setWinAttr_invoke = function invoke() {
  wya_umd_default.a.invoke('setWinAttr', {// ...
  }).then(function (res) {
    res = setWinAttr_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setWinAttr = ({
  to: '/methods/setWinAttr',
  title: 'setWinAttr',
  label: '',
  invoke: setWinAttr_invoke,
  markdown: setWinAttr_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openFrame.md
var openFrame = __webpack_require__("../../docs/methods/openFrame.md");
var openFrame_default = /*#__PURE__*/__webpack_require__.n(openFrame);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openFrame.js
function openFrame_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openFrame_typeof = function _typeof(obj) { return typeof obj; }; } else { openFrame_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openFrame_typeof(obj); }





var openFrame_invoke = function invoke() {
  wya_umd_default.a.invoke('openFrame', {// ...
  }).then(function (res) {
    res = openFrame_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openFrame = ({
  to: '/methods/openFrame',
  title: 'openFrame',
  label: '',
  invoke: openFrame_invoke,
  markdown: openFrame_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeFrame.md
var closeFrame = __webpack_require__("../../docs/methods/closeFrame.md");
var closeFrame_default = /*#__PURE__*/__webpack_require__.n(closeFrame);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeFrame.js
function closeFrame_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeFrame_typeof = function _typeof(obj) { return typeof obj; }; } else { closeFrame_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeFrame_typeof(obj); }





var closeFrame_invoke = function invoke() {
  wya_umd_default.a.invoke('closeFrame', {// ...
  }).then(function (res) {
    res = closeFrame_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeFrame = ({
  to: '/methods/closeFrame',
  title: 'closeFrame',
  label: '',
  invoke: closeFrame_invoke,
  markdown: closeFrame_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setFrameAttr.md
var setFrameAttr = __webpack_require__("../../docs/methods/setFrameAttr.md");
var setFrameAttr_default = /*#__PURE__*/__webpack_require__.n(setFrameAttr);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setFrameAttr.js
function setFrameAttr_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setFrameAttr_typeof = function _typeof(obj) { return typeof obj; }; } else { setFrameAttr_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setFrameAttr_typeof(obj); }





var setFrameAttr_invoke = function invoke() {
  wya_umd_default.a.invoke('setFrameAttr', {// ...
  }).then(function (res) {
    res = setFrameAttr_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setFrameAttr = ({
  to: '/methods/setFrameAttr',
  title: 'setFrameAttr',
  label: '',
  invoke: setFrameAttr_invoke,
  markdown: setFrameAttr_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/bringFrameToFront.md
var bringFrameToFront = __webpack_require__("../../docs/methods/bringFrameToFront.md");
var bringFrameToFront_default = /*#__PURE__*/__webpack_require__.n(bringFrameToFront);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/bringFrameToFront.js
function bringFrameToFront_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bringFrameToFront_typeof = function _typeof(obj) { return typeof obj; }; } else { bringFrameToFront_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bringFrameToFront_typeof(obj); }





var bringFrameToFront_invoke = function invoke() {
  wya_umd_default.a.invoke('bringFrameToFront', {// ...
  }).then(function (res) {
    res = bringFrameToFront_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_bringFrameToFront = ({
  to: '/methods/bringFrameToFront',
  title: 'bringFrameToFront',
  label: '',
  invoke: bringFrameToFront_invoke,
  markdown: bringFrameToFront_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/sendFrameToBack.md
var sendFrameToBack = __webpack_require__("../../docs/methods/sendFrameToBack.md");
var sendFrameToBack_default = /*#__PURE__*/__webpack_require__.n(sendFrameToBack);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/sendFrameToBack.js
function sendFrameToBack_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sendFrameToBack_typeof = function _typeof(obj) { return typeof obj; }; } else { sendFrameToBack_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sendFrameToBack_typeof(obj); }





var sendFrameToBack_invoke = function invoke() {
  wya_umd_default.a.invoke('sendFrameToBack', {// ...
  }).then(function (res) {
    res = sendFrameToBack_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_sendFrameToBack = ({
  to: '/methods/sendFrameToBack',
  title: 'sendFrameToBack',
  label: '',
  invoke: sendFrameToBack_invoke,
  markdown: sendFrameToBack_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setFrameClient.md
var setFrameClient = __webpack_require__("../../docs/methods/setFrameClient.md");
var setFrameClient_default = /*#__PURE__*/__webpack_require__.n(setFrameClient);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setFrameClient.js
function setFrameClient_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setFrameClient_typeof = function _typeof(obj) { return typeof obj; }; } else { setFrameClient_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setFrameClient_typeof(obj); }





var setFrameClient_invoke = function invoke() {
  wya_umd_default.a.invoke('setFrameClient', {// ...
  }).then(function (res) {
    res = setFrameClient_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setFrameClient = ({
  to: '/methods/setFrameClient',
  title: 'setFrameClient',
  label: '',
  invoke: setFrameClient_invoke,
  markdown: setFrameClient_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/animation.md
var animation = __webpack_require__("../../docs/methods/animation.md");
var animation_default = /*#__PURE__*/__webpack_require__.n(animation);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/animation.js
function animation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { animation_typeof = function _typeof(obj) { return typeof obj; }; } else { animation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return animation_typeof(obj); }





var animation_invoke = function invoke() {
  wya_umd_default.a.invoke('animation', {// ...
  }).then(function (res) {
    res = animation_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_animation = ({
  to: '/methods/animation',
  title: 'animation',
  label: '',
  invoke: animation_invoke,
  markdown: animation_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openFrameGroup.md
var openFrameGroup = __webpack_require__("../../docs/methods/openFrameGroup.md");
var openFrameGroup_default = /*#__PURE__*/__webpack_require__.n(openFrameGroup);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openFrameGroup.js
function openFrameGroup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openFrameGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { openFrameGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openFrameGroup_typeof(obj); }





var openFrameGroup_invoke = function invoke() {
  wya_umd_default.a.invoke('openFrameGroup', {// ...
  }).then(function (res) {
    res = openFrameGroup_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openFrameGroup = ({
  to: '/methods/openFrameGroup',
  title: 'openFrameGroup',
  label: '',
  invoke: openFrameGroup_invoke,
  markdown: openFrameGroup_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeFrameGroup.md
var closeFrameGroup = __webpack_require__("../../docs/methods/closeFrameGroup.md");
var closeFrameGroup_default = /*#__PURE__*/__webpack_require__.n(closeFrameGroup);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeFrameGroup.js
function closeFrameGroup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeFrameGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { closeFrameGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeFrameGroup_typeof(obj); }





var closeFrameGroup_invoke = function invoke() {
  wya_umd_default.a.invoke('closeFrameGroup', {// ...
  }).then(function (res) {
    res = closeFrameGroup_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeFrameGroup = ({
  to: '/methods/closeFrameGroup',
  title: 'closeFrameGroup',
  label: '',
  invoke: closeFrameGroup_invoke,
  markdown: closeFrameGroup_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setFrameGroupAttr.md
var setFrameGroupAttr = __webpack_require__("../../docs/methods/setFrameGroupAttr.md");
var setFrameGroupAttr_default = /*#__PURE__*/__webpack_require__.n(setFrameGroupAttr);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setFrameGroupAttr.js
function setFrameGroupAttr_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setFrameGroupAttr_typeof = function _typeof(obj) { return typeof obj; }; } else { setFrameGroupAttr_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setFrameGroupAttr_typeof(obj); }





var setFrameGroupAttr_invoke = function invoke() {
  wya_umd_default.a.invoke('setFrameGroupAttr', {// ...
  }).then(function (res) {
    res = setFrameGroupAttr_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setFrameGroupAttr = ({
  to: '/methods/setFrameGroupAttr',
  title: 'setFrameGroupAttr',
  label: '',
  invoke: setFrameGroupAttr_invoke,
  markdown: setFrameGroupAttr_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setFrameGroupIndex.md
var setFrameGroupIndex = __webpack_require__("../../docs/methods/setFrameGroupIndex.md");
var setFrameGroupIndex_default = /*#__PURE__*/__webpack_require__.n(setFrameGroupIndex);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setFrameGroupIndex.js
function setFrameGroupIndex_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setFrameGroupIndex_typeof = function _typeof(obj) { return typeof obj; }; } else { setFrameGroupIndex_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setFrameGroupIndex_typeof(obj); }





var setFrameGroupIndex_invoke = function invoke() {
  wya_umd_default.a.invoke('setFrameGroupIndex', {// ...
  }).then(function (res) {
    res = setFrameGroupIndex_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setFrameGroupIndex = ({
  to: '/methods/setFrameGroupIndex',
  title: 'setFrameGroupIndex',
  label: '',
  invoke: setFrameGroupIndex_invoke,
  markdown: setFrameGroupIndex_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openPopoverWin.md
var openPopoverWin = __webpack_require__("../../docs/methods/openPopoverWin.md");
var openPopoverWin_default = /*#__PURE__*/__webpack_require__.n(openPopoverWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openPopoverWin.js
function openPopoverWin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openPopoverWin_typeof = function _typeof(obj) { return typeof obj; }; } else { openPopoverWin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openPopoverWin_typeof(obj); }





var openPopoverWin_invoke = function invoke() {
  wya_umd_default.a.invoke('openPopoverWin', {// ...
  }).then(function (res) {
    res = openPopoverWin_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openPopoverWin = ({
  to: '/methods/openPopoverWin',
  title: 'openPopoverWin',
  label: '',
  invoke: openPopoverWin_invoke,
  markdown: openPopoverWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closePopoverWin.md
var closePopoverWin = __webpack_require__("../../docs/methods/closePopoverWin.md");
var closePopoverWin_default = /*#__PURE__*/__webpack_require__.n(closePopoverWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closePopoverWin.js
function closePopoverWin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closePopoverWin_typeof = function _typeof(obj) { return typeof obj; }; } else { closePopoverWin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closePopoverWin_typeof(obj); }





var closePopoverWin_invoke = function invoke() {
  wya_umd_default.a.invoke('closePopoverWin', {// ...
  }).then(function (res) {
    res = closePopoverWin_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closePopoverWin = ({
  to: '/methods/closePopoverWin',
  title: 'closePopoverWin',
  label: '',
  invoke: closePopoverWin_invoke,
  markdown: closePopoverWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openSlidLayout.md
var openSlidLayout = __webpack_require__("../../docs/methods/openSlidLayout.md");
var openSlidLayout_default = /*#__PURE__*/__webpack_require__.n(openSlidLayout);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openSlidLayout.js
function openSlidLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openSlidLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { openSlidLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openSlidLayout_typeof(obj); }





var openSlidLayout_invoke = function invoke() {
  wya_umd_default.a.invoke('openSlidLayout', {// ...
  }).then(function (res) {
    res = openSlidLayout_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openSlidLayout = ({
  to: '/methods/openSlidLayout',
  title: 'openSlidLayout',
  label: '',
  invoke: openSlidLayout_invoke,
  markdown: openSlidLayout_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openSlidPane.md
var openSlidPane = __webpack_require__("../../docs/methods/openSlidPane.md");
var openSlidPane_default = /*#__PURE__*/__webpack_require__.n(openSlidPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openSlidPane.js
function openSlidPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openSlidPane_typeof = function _typeof(obj) { return typeof obj; }; } else { openSlidPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openSlidPane_typeof(obj); }





var openSlidPane_invoke = function invoke() {
  wya_umd_default.a.invoke('openSlidPane', {// ...
  }).then(function (res) {
    res = openSlidPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openSlidPane = ({
  to: '/methods/openSlidPane',
  title: 'openSlidPane',
  label: '',
  invoke: openSlidPane_invoke,
  markdown: openSlidPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeSlidPane.md
var closeSlidPane = __webpack_require__("../../docs/methods/closeSlidPane.md");
var closeSlidPane_default = /*#__PURE__*/__webpack_require__.n(closeSlidPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeSlidPane.js
function closeSlidPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeSlidPane_typeof = function _typeof(obj) { return typeof obj; }; } else { closeSlidPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeSlidPane_typeof(obj); }





var closeSlidPane_invoke = function invoke() {
  wya_umd_default.a.invoke('closeSlidPane', {// ...
  }).then(function (res) {
    res = closeSlidPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeSlidPane = ({
  to: '/methods/closeSlidPane',
  title: 'closeSlidPane',
  label: '',
  invoke: closeSlidPane_invoke,
  markdown: closeSlidPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/lockSlidPane.md
var lockSlidPane = __webpack_require__("../../docs/methods/lockSlidPane.md");
var lockSlidPane_default = /*#__PURE__*/__webpack_require__.n(lockSlidPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/lockSlidPane.js
function lockSlidPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lockSlidPane_typeof = function _typeof(obj) { return typeof obj; }; } else { lockSlidPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lockSlidPane_typeof(obj); }





var lockSlidPane_invoke = function invoke() {
  wya_umd_default.a.invoke('lockSlidPane', {// ...
  }).then(function (res) {
    res = lockSlidPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_lockSlidPane = ({
  to: '/methods/lockSlidPane',
  title: 'lockSlidPane',
  label: '',
  invoke: lockSlidPane_invoke,
  markdown: lockSlidPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/unlockSlidPane.md
var unlockSlidPane = __webpack_require__("../../docs/methods/unlockSlidPane.md");
var unlockSlidPane_default = /*#__PURE__*/__webpack_require__.n(unlockSlidPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/unlockSlidPane.js
function unlockSlidPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { unlockSlidPane_typeof = function _typeof(obj) { return typeof obj; }; } else { unlockSlidPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return unlockSlidPane_typeof(obj); }





var unlockSlidPane_invoke = function invoke() {
  wya_umd_default.a.invoke('unlockSlidPane', {// ...
  }).then(function (res) {
    res = unlockSlidPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_unlockSlidPane = ({
  to: '/methods/unlockSlidPane',
  title: 'unlockSlidPane',
  label: '',
  invoke: unlockSlidPane_invoke,
  markdown: unlockSlidPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openDrawerLayout.md
var openDrawerLayout = __webpack_require__("../../docs/methods/openDrawerLayout.md");
var openDrawerLayout_default = /*#__PURE__*/__webpack_require__.n(openDrawerLayout);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openDrawerLayout.js
function openDrawerLayout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openDrawerLayout_typeof = function _typeof(obj) { return typeof obj; }; } else { openDrawerLayout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openDrawerLayout_typeof(obj); }





var openDrawerLayout_invoke = function invoke() {
  wya_umd_default.a.invoke('openDrawerLayout', {// ...
  }).then(function (res) {
    res = openDrawerLayout_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openDrawerLayout = ({
  to: '/methods/openDrawerLayout',
  title: 'openDrawerLayout',
  label: '',
  invoke: openDrawerLayout_invoke,
  markdown: openDrawerLayout_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openDrawerPane.md
var openDrawerPane = __webpack_require__("../../docs/methods/openDrawerPane.md");
var openDrawerPane_default = /*#__PURE__*/__webpack_require__.n(openDrawerPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openDrawerPane.js
function openDrawerPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openDrawerPane_typeof = function _typeof(obj) { return typeof obj; }; } else { openDrawerPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openDrawerPane_typeof(obj); }





var openDrawerPane_invoke = function invoke() {
  wya_umd_default.a.invoke('openDrawerPane', {// ...
  }).then(function (res) {
    res = openDrawerPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openDrawerPane = ({
  to: '/methods/openDrawerPane',
  title: 'openDrawerPane',
  label: '',
  invoke: openDrawerPane_invoke,
  markdown: openDrawerPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeDrawerPane.md
var closeDrawerPane = __webpack_require__("../../docs/methods/closeDrawerPane.md");
var closeDrawerPane_default = /*#__PURE__*/__webpack_require__.n(closeDrawerPane);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeDrawerPane.js
function closeDrawerPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeDrawerPane_typeof = function _typeof(obj) { return typeof obj; }; } else { closeDrawerPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeDrawerPane_typeof(obj); }





var closeDrawerPane_invoke = function invoke() {
  wya_umd_default.a.invoke('closeDrawerPane', {// ...
  }).then(function (res) {
    res = closeDrawerPane_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeDrawerPane = ({
  to: '/methods/closeDrawerPane',
  title: 'closeDrawerPane',
  label: '',
  invoke: closeDrawerPane_invoke,
  markdown: closeDrawerPane_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/loadData.md
var loadData = __webpack_require__("../../docs/methods/loadData.md");
var loadData_default = /*#__PURE__*/__webpack_require__.n(loadData);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/loadData.js
function loadData_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { loadData_typeof = function _typeof(obj) { return typeof obj; }; } else { loadData_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return loadData_typeof(obj); }





var loadData_invoke = function invoke() {
  wya_umd_default.a.invoke('loadData', {// ...
  }).then(function (res) {
    res = loadData_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_loadData = ({
  to: '/methods/loadData',
  title: 'loadData',
  label: '',
  invoke: loadData_invoke,
  markdown: loadData_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/execScript.md
var execScript = __webpack_require__("../../docs/methods/execScript.md");
var execScript_default = /*#__PURE__*/__webpack_require__.n(execScript);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/execScript.js
function execScript_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { execScript_typeof = function _typeof(obj) { return typeof obj; }; } else { execScript_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return execScript_typeof(obj); }





var execScript_invoke = function invoke() {
  wya_umd_default.a.invoke('execScript', {// ...
  }).then(function (res) {
    res = execScript_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_execScript = ({
  to: '/methods/execScript',
  title: 'execScript',
  label: '',
  invoke: execScript_invoke,
  markdown: execScript_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setBlurEffect.md
var setBlurEffect = __webpack_require__("../../docs/methods/setBlurEffect.md");
var setBlurEffect_default = /*#__PURE__*/__webpack_require__.n(setBlurEffect);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setBlurEffect.js
function setBlurEffect_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setBlurEffect_typeof = function _typeof(obj) { return typeof obj; }; } else { setBlurEffect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setBlurEffect_typeof(obj); }





var setBlurEffect_invoke = function invoke() {
  wya_umd_default.a.invoke('setBlurEffect', {// ...
  }).then(function (res) {
    res = setBlurEffect_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setBlurEffect = ({
  to: '/methods/setBlurEffect',
  title: 'setBlurEffect',
  label: '',
  invoke: setBlurEffect_invoke,
  markdown: setBlurEffect_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/historyBack.md
var historyBack = __webpack_require__("../../docs/methods/historyBack.md");
var historyBack_default = /*#__PURE__*/__webpack_require__.n(historyBack);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/historyBack.js
function historyBack_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { historyBack_typeof = function _typeof(obj) { return typeof obj; }; } else { historyBack_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return historyBack_typeof(obj); }





var historyBack_invoke = function invoke() {
  wya_umd_default.a.invoke('historyBack', {// ...
  }).then(function (res) {
    res = historyBack_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_historyBack = ({
  to: '/methods/historyBack',
  title: 'historyBack',
  label: '',
  invoke: historyBack_invoke,
  markdown: historyBack_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/historyForward.md
var historyForward = __webpack_require__("../../docs/methods/historyForward.md");
var historyForward_default = /*#__PURE__*/__webpack_require__.n(historyForward);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/historyForward.js
function historyForward_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { historyForward_typeof = function _typeof(obj) { return typeof obj; }; } else { historyForward_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return historyForward_typeof(obj); }





var historyForward_invoke = function invoke() {
  wya_umd_default.a.invoke('historyForward', {// ...
  }).then(function (res) {
    res = historyForward_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_historyForward = ({
  to: '/methods/historyForward',
  title: 'historyForward',
  label: '',
  invoke: historyForward_invoke,
  markdown: historyForward_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/pageUp.md
var pageUp = __webpack_require__("../../docs/methods/pageUp.md");
var pageUp_default = /*#__PURE__*/__webpack_require__.n(pageUp);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/pageUp.js
function pageUp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pageUp_typeof = function _typeof(obj) { return typeof obj; }; } else { pageUp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pageUp_typeof(obj); }





var pageUp_invoke = function invoke() {
  wya_umd_default.a.invoke('pageUp', {// ...
  }).then(function (res) {
    res = pageUp_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_pageUp = ({
  to: '/methods/pageUp',
  title: 'pageUp',
  label: '',
  invoke: pageUp_invoke,
  markdown: pageUp_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/pageDown.md
var pageDown = __webpack_require__("../../docs/methods/pageDown.md");
var pageDown_default = /*#__PURE__*/__webpack_require__.n(pageDown);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/pageDown.js
function pageDown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pageDown_typeof = function _typeof(obj) { return typeof obj; }; } else { pageDown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pageDown_typeof(obj); }





var pageDown_invoke = function invoke() {
  wya_umd_default.a.invoke('pageDown', {// ...
  }).then(function (res) {
    res = pageDown_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_pageDown = ({
  to: '/methods/pageDown',
  title: 'pageDown',
  label: '',
  invoke: pageDown_invoke,
  markdown: pageDown_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/removeLaunchView.md
var removeLaunchView = __webpack_require__("../../docs/methods/removeLaunchView.md");
var removeLaunchView_default = /*#__PURE__*/__webpack_require__.n(removeLaunchView);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/removeLaunchView.js
function removeLaunchView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { removeLaunchView_typeof = function _typeof(obj) { return typeof obj; }; } else { removeLaunchView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return removeLaunchView_typeof(obj); }





var removeLaunchView_invoke = function invoke() {
  wya_umd_default.a.invoke('removeLaunchView', {// ...
  }).then(function (res) {
    res = removeLaunchView_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_removeLaunchView = ({
  to: '/methods/removeLaunchView',
  title: 'removeLaunchView',
  label: '',
  invoke: removeLaunchView_invoke,
  markdown: removeLaunchView_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/showLaunchView.md
var showLaunchView = __webpack_require__("../../docs/methods/showLaunchView.md");
var showLaunchView_default = /*#__PURE__*/__webpack_require__.n(showLaunchView);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/showLaunchView.js
function showLaunchView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { showLaunchView_typeof = function _typeof(obj) { return typeof obj; }; } else { showLaunchView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return showLaunchView_typeof(obj); }





var showLaunchView_invoke = function invoke() {
  wya_umd_default.a.invoke('showLaunchView', {// ...
  }).then(function (res) {
    res = showLaunchView_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_showLaunchView = ({
  to: '/methods/showLaunchView',
  title: 'showLaunchView',
  label: '',
  invoke: showLaunchView_invoke,
  markdown: showLaunchView_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/parseTapmode.md
var parseTapmode = __webpack_require__("../../docs/methods/parseTapmode.md");
var parseTapmode_default = /*#__PURE__*/__webpack_require__.n(parseTapmode);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/parseTapmode.js
function parseTapmode_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { parseTapmode_typeof = function _typeof(obj) { return typeof obj; }; } else { parseTapmode_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return parseTapmode_typeof(obj); }





var parseTapmode_invoke = function invoke() {
  wya_umd_default.a.invoke('parseTapmode', {// ...
  }).then(function (res) {
    res = parseTapmode_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_parseTapmode = ({
  to: '/methods/parseTapmode',
  title: 'parseTapmode',
  label: '',
  invoke: parseTapmode_invoke,
  markdown: parseTapmode_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/installApp.md
var installApp = __webpack_require__("../../docs/methods/installApp.md");
var installApp_default = /*#__PURE__*/__webpack_require__.n(installApp);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/installApp.js
function installApp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { installApp_typeof = function _typeof(obj) { return typeof obj; }; } else { installApp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return installApp_typeof(obj); }





var installApp_invoke = function invoke() {
  wya_umd_default.a.invoke('installApp', {// ...
  }).then(function (res) {
    res = installApp_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_installApp = ({
  to: '/methods/installApp',
  title: 'installApp',
  label: '',
  invoke: installApp_invoke,
  markdown: installApp_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uninstallApp.md
var uninstallApp = __webpack_require__("../../docs/methods/uninstallApp.md");
var uninstallApp_default = /*#__PURE__*/__webpack_require__.n(uninstallApp);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uninstallApp.js
function uninstallApp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uninstallApp_typeof = function _typeof(obj) { return typeof obj; }; } else { uninstallApp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uninstallApp_typeof(obj); }





var uninstallApp_invoke = function invoke() {
  wya_umd_default.a.invoke('uninstallApp', {// ...
  }).then(function (res) {
    res = uninstallApp_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uninstallApp = ({
  to: '/methods/uninstallApp',
  title: 'uninstallApp',
  label: '',
  invoke: uninstallApp_invoke,
  markdown: uninstallApp_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openApp.md
var openApp = __webpack_require__("../../docs/methods/openApp.md");
var openApp_default = /*#__PURE__*/__webpack_require__.n(openApp);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openApp.js
function openApp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openApp_typeof = function _typeof(obj) { return typeof obj; }; } else { openApp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openApp_typeof(obj); }





var openApp_invoke = function invoke() {
  wya_umd_default.a.invoke('openApp', {// ...
  }).then(function (res) {
    res = openApp_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openApp = ({
  to: '/methods/openApp',
  title: 'openApp',
  label: '',
  invoke: openApp_invoke,
  markdown: openApp_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appInstalled.md
var appInstalled = __webpack_require__("../../docs/methods/appInstalled.md");
var appInstalled_default = /*#__PURE__*/__webpack_require__.n(appInstalled);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appInstalled.js
function appInstalled_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appInstalled_typeof = function _typeof(obj) { return typeof obj; }; } else { appInstalled_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appInstalled_typeof(obj); }





var appInstalled_invoke = function invoke() {
  wya_umd_default.a.invoke('appInstalled', {// ...
  }).then(function (res) {
    res = appInstalled_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appInstalled = ({
  to: '/methods/appInstalled',
  title: 'appInstalled',
  label: '',
  invoke: appInstalled_invoke,
  markdown: appInstalled_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/rebootApp.md
var rebootApp = __webpack_require__("../../docs/methods/rebootApp.md");
var rebootApp_default = /*#__PURE__*/__webpack_require__.n(rebootApp);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/rebootApp.js
function rebootApp_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { rebootApp_typeof = function _typeof(obj) { return typeof obj; }; } else { rebootApp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return rebootApp_typeof(obj); }





var rebootApp_invoke = function invoke() {
  wya_umd_default.a.invoke('rebootApp', {// ...
  }).then(function (res) {
    res = rebootApp_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_rebootApp = ({
  to: '/methods/rebootApp',
  title: 'rebootApp',
  label: '',
  invoke: rebootApp_invoke,
  markdown: rebootApp_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openWidget.md
var openWidget = __webpack_require__("../../docs/methods/openWidget.md");
var openWidget_default = /*#__PURE__*/__webpack_require__.n(openWidget);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openWidget.js
function openWidget_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openWidget_typeof = function _typeof(obj) { return typeof obj; }; } else { openWidget_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openWidget_typeof(obj); }





var openWidget_invoke = function invoke() {
  wya_umd_default.a.invoke('openWidget', {// ...
  }).then(function (res) {
    res = openWidget_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openWidget = ({
  to: '/methods/openWidget',
  title: 'openWidget',
  label: '',
  invoke: openWidget_invoke,
  markdown: openWidget_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/closeWidget.md
var closeWidget = __webpack_require__("../../docs/methods/closeWidget.md");
var closeWidget_default = /*#__PURE__*/__webpack_require__.n(closeWidget);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/closeWidget.js
function closeWidget_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { closeWidget_typeof = function _typeof(obj) { return typeof obj; }; } else { closeWidget_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return closeWidget_typeof(obj); }





var closeWidget_invoke = function invoke() {
  wya_umd_default.a.invoke('closeWidget', {// ...
  }).then(function (res) {
    res = closeWidget_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_closeWidget = ({
  to: '/methods/closeWidget',
  title: 'closeWidget',
  label: '',
  invoke: closeWidget_invoke,
  markdown: closeWidget_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/ajax.md
var ajax = __webpack_require__("../../docs/methods/ajax.md");
var ajax_default = /*#__PURE__*/__webpack_require__.n(ajax);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/ajax.js
function ajax_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ajax_typeof = function _typeof(obj) { return typeof obj; }; } else { ajax_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ajax_typeof(obj); }





var ajax_invoke = function invoke() {
  wya_umd_default.a.invoke('ajax', {// ...
  }).then(function (res) {
    res = ajax_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_ajax = ({
  to: '/methods/ajax',
  title: 'ajax',
  label: '',
  invoke: ajax_invoke,
  markdown: ajax_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/cancelAjax.md
var cancelAjax = __webpack_require__("../../docs/methods/cancelAjax.md");
var cancelAjax_default = /*#__PURE__*/__webpack_require__.n(cancelAjax);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/cancelAjax.js
function cancelAjax_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cancelAjax_typeof = function _typeof(obj) { return typeof obj; }; } else { cancelAjax_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cancelAjax_typeof(obj); }





var cancelAjax_invoke = function invoke() {
  wya_umd_default.a.invoke('cancelAjax', {// ...
  }).then(function (res) {
    res = cancelAjax_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_cancelAjax = ({
  to: '/methods/cancelAjax',
  title: 'cancelAjax',
  label: '',
  invoke: cancelAjax_invoke,
  markdown: cancelAjax_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/download.md
var download = __webpack_require__("../../docs/methods/download.md");
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/download.js
function download_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { download_typeof = function _typeof(obj) { return typeof obj; }; } else { download_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return download_typeof(obj); }





var download_invoke = function invoke() {
  wya_umd_default.a.invoke('download', {// ...
  }).then(function (res) {
    res = download_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_download = ({
  to: '/methods/download',
  title: 'download',
  label: '',
  invoke: download_invoke,
  markdown: download_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/cancelDownload.md
var cancelDownload = __webpack_require__("../../docs/methods/cancelDownload.md");
var cancelDownload_default = /*#__PURE__*/__webpack_require__.n(cancelDownload);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/cancelDownload.js
function cancelDownload_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cancelDownload_typeof = function _typeof(obj) { return typeof obj; }; } else { cancelDownload_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cancelDownload_typeof(obj); }





var cancelDownload_invoke = function invoke() {
  wya_umd_default.a.invoke('cancelDownload', {// ...
  }).then(function (res) {
    res = cancelDownload_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_cancelDownload = ({
  to: '/methods/cancelDownload',
  title: 'cancelDownload',
  label: '',
  invoke: cancelDownload_invoke,
  markdown: cancelDownload_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/imageCache.md
var imageCache = __webpack_require__("../../docs/methods/imageCache.md");
var imageCache_default = /*#__PURE__*/__webpack_require__.n(imageCache);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/imageCache.js
function imageCache_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { imageCache_typeof = function _typeof(obj) { return typeof obj; }; } else { imageCache_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return imageCache_typeof(obj); }





var imageCache_invoke = function invoke() {
  wya_umd_default.a.invoke('imageCache', {// ...
  }).then(function (res) {
    res = imageCache_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_imageCache = ({
  to: '/methods/imageCache',
  title: 'imageCache',
  label: '',
  invoke: imageCache_invoke,
  markdown: imageCache_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/readFile.md
var readFile = __webpack_require__("../../docs/methods/readFile.md");
var readFile_default = /*#__PURE__*/__webpack_require__.n(readFile);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/readFile.js
function readFile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { readFile_typeof = function _typeof(obj) { return typeof obj; }; } else { readFile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return readFile_typeof(obj); }





var readFile_invoke = function invoke() {
  wya_umd_default.a.invoke('readFile', {// ...
  }).then(function (res) {
    res = readFile_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_readFile = ({
  to: '/methods/readFile',
  title: 'readFile',
  label: '',
  invoke: readFile_invoke,
  markdown: readFile_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/writeFile.md
var writeFile = __webpack_require__("../../docs/methods/writeFile.md");
var writeFile_default = /*#__PURE__*/__webpack_require__.n(writeFile);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/writeFile.js
function writeFile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { writeFile_typeof = function _typeof(obj) { return typeof obj; }; } else { writeFile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return writeFile_typeof(obj); }





var writeFile_invoke = function invoke() {
  wya_umd_default.a.invoke('writeFile', {// ...
  }).then(function (res) {
    res = writeFile_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_writeFile = ({
  to: '/methods/writeFile',
  title: 'writeFile',
  label: '',
  invoke: writeFile_invoke,
  markdown: writeFile_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setPrefs.md
var setPrefs = __webpack_require__("../../docs/methods/setPrefs.md");
var setPrefs_default = /*#__PURE__*/__webpack_require__.n(setPrefs);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setPrefs.js
function setPrefs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setPrefs_typeof = function _typeof(obj) { return typeof obj; }; } else { setPrefs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setPrefs_typeof(obj); }





var setPrefs_invoke = function invoke() {
  wya_umd_default.a.invoke('setPrefs', {// ...
  }).then(function (res) {
    res = setPrefs_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setPrefs = ({
  to: '/methods/setPrefs',
  title: 'setPrefs',
  label: '',
  invoke: setPrefs_invoke,
  markdown: setPrefs_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getPrefs.md
var getPrefs = __webpack_require__("../../docs/methods/getPrefs.md");
var getPrefs_default = /*#__PURE__*/__webpack_require__.n(getPrefs);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getPrefs.js
function getPrefs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getPrefs_typeof = function _typeof(obj) { return typeof obj; }; } else { getPrefs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getPrefs_typeof(obj); }





var getPrefs_invoke = function invoke() {
  wya_umd_default.a.invoke('getPrefs', {// ...
  }).then(function (res) {
    res = getPrefs_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getPrefs = ({
  to: '/methods/getPrefs',
  title: 'getPrefs',
  label: '',
  invoke: getPrefs_invoke,
  markdown: getPrefs_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/removePrefs.md
var removePrefs = __webpack_require__("../../docs/methods/removePrefs.md");
var removePrefs_default = /*#__PURE__*/__webpack_require__.n(removePrefs);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/removePrefs.js
function removePrefs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { removePrefs_typeof = function _typeof(obj) { return typeof obj; }; } else { removePrefs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return removePrefs_typeof(obj); }





var removePrefs_invoke = function invoke() {
  wya_umd_default.a.invoke('removePrefs', {// ...
  }).then(function (res) {
    res = removePrefs_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_removePrefs = ({
  to: '/methods/removePrefs',
  title: 'removePrefs',
  label: '',
  invoke: removePrefs_invoke,
  markdown: removePrefs_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/clearCache.md
var clearCache = __webpack_require__("../../docs/methods/clearCache.md");
var clearCache_default = /*#__PURE__*/__webpack_require__.n(clearCache);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/clearCache.js
function clearCache_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clearCache_typeof = function _typeof(obj) { return typeof obj; }; } else { clearCache_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clearCache_typeof(obj); }





var clearCache_invoke = function invoke() {
  wya_umd_default.a.invoke('clearCache', {// ...
  }).then(function (res) {
    res = clearCache_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_clearCache = ({
  to: '/methods/clearCache',
  title: 'clearCache',
  label: '',
  invoke: clearCache_invoke,
  markdown: clearCache_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getCacheSize.md
var getCacheSize = __webpack_require__("../../docs/methods/getCacheSize.md");
var getCacheSize_default = /*#__PURE__*/__webpack_require__.n(getCacheSize);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getCacheSize.js
function getCacheSize_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getCacheSize_typeof = function _typeof(obj) { return typeof obj; }; } else { getCacheSize_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getCacheSize_typeof(obj); }





var getCacheSize_invoke = function invoke() {
  wya_umd_default.a.invoke('getCacheSize', {// ...
  }).then(function (res) {
    res = getCacheSize_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getCacheSize = ({
  to: '/methods/getCacheSize',
  title: 'getCacheSize',
  label: '',
  invoke: getCacheSize_invoke,
  markdown: getCacheSize_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getTotalSpace.md
var getTotalSpace = __webpack_require__("../../docs/methods/getTotalSpace.md");
var getTotalSpace_default = /*#__PURE__*/__webpack_require__.n(getTotalSpace);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getTotalSpace.js
function getTotalSpace_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getTotalSpace_typeof = function _typeof(obj) { return typeof obj; }; } else { getTotalSpace_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getTotalSpace_typeof(obj); }





var getTotalSpace_invoke = function invoke() {
  wya_umd_default.a.invoke('getTotalSpace', {// ...
  }).then(function (res) {
    res = getTotalSpace_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getTotalSpace = ({
  to: '/methods/getTotalSpace',
  title: 'getTotalSpace',
  label: '',
  invoke: getTotalSpace_invoke,
  markdown: getTotalSpace_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getFreeDiskSpace.md
var getFreeDiskSpace = __webpack_require__("../../docs/methods/getFreeDiskSpace.md");
var getFreeDiskSpace_default = /*#__PURE__*/__webpack_require__.n(getFreeDiskSpace);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getFreeDiskSpace.js
function getFreeDiskSpace_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getFreeDiskSpace_typeof = function _typeof(obj) { return typeof obj; }; } else { getFreeDiskSpace_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getFreeDiskSpace_typeof(obj); }





var getFreeDiskSpace_invoke = function invoke() {
  wya_umd_default.a.invoke('getFreeDiskSpace', {// ...
  }).then(function (res) {
    res = getFreeDiskSpace_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getFreeDiskSpace = ({
  to: '/methods/getFreeDiskSpace',
  title: 'getFreeDiskSpace',
  label: '',
  invoke: getFreeDiskSpace_invoke,
  markdown: getFreeDiskSpace_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/loadSecureValue.md
var loadSecureValue = __webpack_require__("../../docs/methods/loadSecureValue.md");
var loadSecureValue_default = /*#__PURE__*/__webpack_require__.n(loadSecureValue);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/loadSecureValue.js
function loadSecureValue_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { loadSecureValue_typeof = function _typeof(obj) { return typeof obj; }; } else { loadSecureValue_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return loadSecureValue_typeof(obj); }





var loadSecureValue_invoke = function invoke() {
  wya_umd_default.a.invoke('loadSecureValue', {// ...
  }).then(function (res) {
    res = loadSecureValue_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_loadSecureValue = ({
  to: '/methods/loadSecureValue',
  title: 'loadSecureValue',
  label: '',
  invoke: loadSecureValue_invoke,
  markdown: loadSecureValue_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/addEventListener.md
var addEventListener = __webpack_require__("../../docs/methods/addEventListener.md");
var addEventListener_default = /*#__PURE__*/__webpack_require__.n(addEventListener);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/addEventListener.js
function addEventListener_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { addEventListener_typeof = function _typeof(obj) { return typeof obj; }; } else { addEventListener_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return addEventListener_typeof(obj); }





var addEventListener_invoke = function invoke() {
  wya_umd_default.a.invoke('addEventListener', {// ...
  }).then(function (res) {
    res = addEventListener_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_addEventListener = ({
  to: '/methods/addEventListener',
  title: 'addEventListener',
  label: '',
  invoke: addEventListener_invoke,
  markdown: addEventListener_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/removeEventListener.md
var removeEventListener = __webpack_require__("../../docs/methods/removeEventListener.md");
var removeEventListener_default = /*#__PURE__*/__webpack_require__.n(removeEventListener);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/removeEventListener.js
function removeEventListener_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { removeEventListener_typeof = function _typeof(obj) { return typeof obj; }; } else { removeEventListener_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return removeEventListener_typeof(obj); }





var removeEventListener_invoke = function invoke() {
  wya_umd_default.a.invoke('removeEventListener', {// ...
  }).then(function (res) {
    res = removeEventListener_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_removeEventListener = ({
  to: '/methods/removeEventListener',
  title: 'removeEventListener',
  label: '',
  invoke: removeEventListener_invoke,
  markdown: removeEventListener_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/sendEvent.md
var sendEvent = __webpack_require__("../../docs/methods/sendEvent.md");
var sendEvent_default = /*#__PURE__*/__webpack_require__.n(sendEvent);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/sendEvent.js
function sendEvent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sendEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { sendEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sendEvent_typeof(obj); }





var sendEvent_invoke = function invoke() {
  wya_umd_default.a.invoke('sendEvent', {// ...
  }).then(function (res) {
    res = sendEvent_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_sendEvent = ({
  to: '/methods/sendEvent',
  title: 'sendEvent',
  label: '',
  invoke: sendEvent_invoke,
  markdown: sendEvent_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/accessNative.md
var accessNative = __webpack_require__("../../docs/methods/accessNative.md");
var accessNative_default = /*#__PURE__*/__webpack_require__.n(accessNative);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/accessNative.js
function accessNative_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { accessNative_typeof = function _typeof(obj) { return typeof obj; }; } else { accessNative_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return accessNative_typeof(obj); }





var accessNative_invoke = function invoke() {
  wya_umd_default.a.invoke('accessNative', {// ...
  }).then(function (res) {
    res = accessNative_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_accessNative = ({
  to: '/methods/accessNative',
  title: 'accessNative',
  label: '',
  invoke: accessNative_invoke,
  markdown: accessNative_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/notification.md
var notification = __webpack_require__("../../docs/methods/notification.md");
var notification_default = /*#__PURE__*/__webpack_require__.n(notification);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/notification.js
function notification_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { notification_typeof = function _typeof(obj) { return typeof obj; }; } else { notification_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return notification_typeof(obj); }





var notification_invoke = function invoke() {
  wya_umd_default.a.invoke('notification', {// ...
  }).then(function (res) {
    res = notification_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_notification = ({
  to: '/methods/notification',
  title: 'notification',
  label: '',
  invoke: notification_invoke,
  markdown: notification_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/cancelNotification.md
var cancelNotification = __webpack_require__("../../docs/methods/cancelNotification.md");
var cancelNotification_default = /*#__PURE__*/__webpack_require__.n(cancelNotification);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/cancelNotification.js
function cancelNotification_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cancelNotification_typeof = function _typeof(obj) { return typeof obj; }; } else { cancelNotification_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cancelNotification_typeof(obj); }





var cancelNotification_invoke = function invoke() {
  wya_umd_default.a.invoke('cancelNotification', {// ...
  }).then(function (res) {
    res = cancelNotification_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_cancelNotification = ({
  to: '/methods/cancelNotification',
  title: 'cancelNotification',
  label: '',
  invoke: cancelNotification_invoke,
  markdown: cancelNotification_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/startLocation.md
var startLocation = __webpack_require__("../../docs/methods/startLocation.md");
var startLocation_default = /*#__PURE__*/__webpack_require__.n(startLocation);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/startLocation.js
function startLocation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { startLocation_typeof = function _typeof(obj) { return typeof obj; }; } else { startLocation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return startLocation_typeof(obj); }





var startLocation_invoke = function invoke() {
  wya_umd_default.a.invoke('startLocation', {// ...
  }).then(function (res) {
    res = startLocation_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_startLocation = ({
  to: '/methods/startLocation',
  title: 'startLocation',
  label: '',
  invoke: startLocation_invoke,
  markdown: startLocation_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/stopLocation.md
var stopLocation = __webpack_require__("../../docs/methods/stopLocation.md");
var stopLocation_default = /*#__PURE__*/__webpack_require__.n(stopLocation);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/stopLocation.js
function stopLocation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { stopLocation_typeof = function _typeof(obj) { return typeof obj; }; } else { stopLocation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return stopLocation_typeof(obj); }





var stopLocation_invoke = function invoke() {
  wya_umd_default.a.invoke('stopLocation', {// ...
  }).then(function (res) {
    res = stopLocation_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_stopLocation = ({
  to: '/methods/stopLocation',
  title: 'stopLocation',
  label: '',
  invoke: stopLocation_invoke,
  markdown: stopLocation_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getLocation.md
var getLocation = __webpack_require__("../../docs/methods/getLocation.md");
var getLocation_default = /*#__PURE__*/__webpack_require__.n(getLocation);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getLocation.js
function getLocation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getLocation_typeof = function _typeof(obj) { return typeof obj; }; } else { getLocation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getLocation_typeof(obj); }





var getLocation_invoke = function invoke() {
  wya_umd_default.a.invoke('getLocation', {// ...
  }).then(function (res) {
    res = getLocation_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getLocation = ({
  to: '/methods/getLocation',
  title: 'getLocation',
  label: '',
  invoke: getLocation_invoke,
  markdown: getLocation_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/startSensor.md
var startSensor = __webpack_require__("../../docs/methods/startSensor.md");
var startSensor_default = /*#__PURE__*/__webpack_require__.n(startSensor);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/startSensor.js
function startSensor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { startSensor_typeof = function _typeof(obj) { return typeof obj; }; } else { startSensor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return startSensor_typeof(obj); }





var startSensor_invoke = function invoke() {
  wya_umd_default.a.invoke('startSensor', {// ...
  }).then(function (res) {
    res = startSensor_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_startSensor = ({
  to: '/methods/startSensor',
  title: 'startSensor',
  label: '',
  invoke: startSensor_invoke,
  markdown: startSensor_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/stopSensor.md
var stopSensor = __webpack_require__("../../docs/methods/stopSensor.md");
var stopSensor_default = /*#__PURE__*/__webpack_require__.n(stopSensor);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/stopSensor.js
function stopSensor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { stopSensor_typeof = function _typeof(obj) { return typeof obj; }; } else { stopSensor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return stopSensor_typeof(obj); }





var stopSensor_invoke = function invoke() {
  wya_umd_default.a.invoke('stopSensor', {// ...
  }).then(function (res) {
    res = stopSensor_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_stopSensor = ({
  to: '/methods/stopSensor',
  title: 'stopSensor',
  label: '',
  invoke: stopSensor_invoke,
  markdown: stopSensor_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/sms.md
var sms = __webpack_require__("../../docs/methods/sms.md");
var sms_default = /*#__PURE__*/__webpack_require__.n(sms);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/sms.js
function sms_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sms_typeof = function _typeof(obj) { return typeof obj; }; } else { sms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sms_typeof(obj); }





var sms_invoke = function invoke() {
  wya_umd_default.a.invoke('sms', {// ...
  }).then(function (res) {
    res = sms_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_sms = ({
  to: '/methods/sms',
  title: 'sms',
  label: '',
  invoke: sms_invoke,
  markdown: sms_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/mail.md
var mail = __webpack_require__("../../docs/methods/mail.md");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/mail.js
function mail_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { mail_typeof = function _typeof(obj) { return typeof obj; }; } else { mail_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return mail_typeof(obj); }





var mail_invoke = function invoke() {
  wya_umd_default.a.invoke('mail', {// ...
  }).then(function (res) {
    res = mail_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_mail = ({
  to: '/methods/mail',
  title: 'mail',
  label: '',
  invoke: mail_invoke,
  markdown: mail_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/call.md
var call = __webpack_require__("../../docs/methods/call.md");
var call_default = /*#__PURE__*/__webpack_require__.n(call);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/call.js
function call_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { call_typeof = function _typeof(obj) { return typeof obj; }; } else { call_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return call_typeof(obj); }





var call_invoke = function invoke() {
  wya_umd_default.a.invoke('call', {// ...
  }).then(function (res) {
    res = call_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_call = ({
  to: '/methods/call',
  title: 'call',
  label: '',
  invoke: call_invoke,
  markdown: call_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openContacts.md
var openContacts = __webpack_require__("../../docs/methods/openContacts.md");
var openContacts_default = /*#__PURE__*/__webpack_require__.n(openContacts);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openContacts.js
function openContacts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openContacts_typeof = function _typeof(obj) { return typeof obj; }; } else { openContacts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openContacts_typeof(obj); }





var openContacts_invoke = function invoke() {
  wya_umd_default.a.invoke('openContacts', {// ...
  }).then(function (res) {
    res = openContacts_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openContacts = ({
  to: '/methods/openContacts',
  title: 'openContacts',
  label: '',
  invoke: openContacts_invoke,
  markdown: openContacts_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setStatusBarStyle.md
var setStatusBarStyle = __webpack_require__("../../docs/methods/setStatusBarStyle.md");
var setStatusBarStyle_default = /*#__PURE__*/__webpack_require__.n(setStatusBarStyle);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setStatusBarStyle.js
function setStatusBarStyle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setStatusBarStyle_typeof = function _typeof(obj) { return typeof obj; }; } else { setStatusBarStyle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setStatusBarStyle_typeof(obj); }





var setStatusBarStyle_invoke = function invoke() {
  wya_umd_default.a.invoke('setStatusBarStyle', {// ...
  }).then(function (res) {
    res = setStatusBarStyle_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setStatusBarStyle = ({
  to: '/methods/setStatusBarStyle',
  title: 'setStatusBarStyle',
  label: '',
  invoke: setStatusBarStyle_invoke,
  markdown: setStatusBarStyle_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setScreenOrientation.md
var setScreenOrientation = __webpack_require__("../../docs/methods/setScreenOrientation.md");
var setScreenOrientation_default = /*#__PURE__*/__webpack_require__.n(setScreenOrientation);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setScreenOrientation.js
function setScreenOrientation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setScreenOrientation_typeof = function _typeof(obj) { return typeof obj; }; } else { setScreenOrientation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setScreenOrientation_typeof(obj); }





var setScreenOrientation_invoke = function invoke() {
  wya_umd_default.a.invoke('setScreenOrientation', {// ...
  }).then(function (res) {
    res = setScreenOrientation_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setScreenOrientation = ({
  to: '/methods/setScreenOrientation',
  title: 'setScreenOrientation',
  label: '',
  invoke: setScreenOrientation_invoke,
  markdown: setScreenOrientation_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setKeepScreenOn.md
var setKeepScreenOn = __webpack_require__("../../docs/methods/setKeepScreenOn.md");
var setKeepScreenOn_default = /*#__PURE__*/__webpack_require__.n(setKeepScreenOn);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setKeepScreenOn.js
function setKeepScreenOn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setKeepScreenOn_typeof = function _typeof(obj) { return typeof obj; }; } else { setKeepScreenOn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setKeepScreenOn_typeof(obj); }





var setKeepScreenOn_invoke = function invoke() {
  wya_umd_default.a.invoke('setKeepScreenOn', {// ...
  }).then(function (res) {
    res = setKeepScreenOn_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setKeepScreenOn = ({
  to: '/methods/setKeepScreenOn',
  title: 'setKeepScreenOn',
  label: '',
  invoke: setKeepScreenOn_invoke,
  markdown: setKeepScreenOn_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/toLauncher.md
var toLauncher = __webpack_require__("../../docs/methods/toLauncher.md");
var toLauncher_default = /*#__PURE__*/__webpack_require__.n(toLauncher);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/toLauncher.js
function toLauncher_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toLauncher_typeof = function _typeof(obj) { return typeof obj; }; } else { toLauncher_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toLauncher_typeof(obj); }





var toLauncher_invoke = function invoke() {
  wya_umd_default.a.invoke('toLauncher', {// ...
  }).then(function (res) {
    res = toLauncher_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_toLauncher = ({
  to: '/methods/toLauncher',
  title: 'toLauncher',
  label: '',
  invoke: toLauncher_invoke,
  markdown: toLauncher_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setScreenSecure.md
var setScreenSecure = __webpack_require__("../../docs/methods/setScreenSecure.md");
var setScreenSecure_default = /*#__PURE__*/__webpack_require__.n(setScreenSecure);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setScreenSecure.js
function setScreenSecure_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setScreenSecure_typeof = function _typeof(obj) { return typeof obj; }; } else { setScreenSecure_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setScreenSecure_typeof(obj); }





var setScreenSecure_invoke = function invoke() {
  wya_umd_default.a.invoke('setScreenSecure', {// ...
  }).then(function (res) {
    res = setScreenSecure_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setScreenSecure = ({
  to: '/methods/setScreenSecure',
  title: 'setScreenSecure',
  label: '',
  invoke: setScreenSecure_invoke,
  markdown: setScreenSecure_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setAppIconBadge.md
var setAppIconBadge = __webpack_require__("../../docs/methods/setAppIconBadge.md");
var setAppIconBadge_default = /*#__PURE__*/__webpack_require__.n(setAppIconBadge);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setAppIconBadge.js
function setAppIconBadge_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setAppIconBadge_typeof = function _typeof(obj) { return typeof obj; }; } else { setAppIconBadge_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setAppIconBadge_typeof(obj); }





var setAppIconBadge_invoke = function invoke() {
  wya_umd_default.a.invoke('setAppIconBadge', {// ...
  }).then(function (res) {
    res = setAppIconBadge_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setAppIconBadge = ({
  to: '/methods/setAppIconBadge',
  title: 'setAppIconBadge',
  label: '',
  invoke: setAppIconBadge_invoke,
  markdown: setAppIconBadge_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getPhoneNumber.md
var getPhoneNumber = __webpack_require__("../../docs/methods/getPhoneNumber.md");
var getPhoneNumber_default = /*#__PURE__*/__webpack_require__.n(getPhoneNumber);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getPhoneNumber.js
function getPhoneNumber_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getPhoneNumber_typeof = function _typeof(obj) { return typeof obj; }; } else { getPhoneNumber_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getPhoneNumber_typeof(obj); }





var getPhoneNumber_invoke = function invoke() {
  wya_umd_default.a.invoke('getPhoneNumber', {// ...
  }).then(function (res) {
    res = getPhoneNumber_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getPhoneNumber = ({
  to: '/methods/getPhoneNumber',
  title: 'getPhoneNumber',
  label: '',
  invoke: getPhoneNumber_invoke,
  markdown: getPhoneNumber_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/alert.md
var methods_alert = __webpack_require__("../../docs/methods/alert.md");
var alert_default = /*#__PURE__*/__webpack_require__.n(methods_alert);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/alert.js
function alert_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { alert_typeof = function _typeof(obj) { return typeof obj; }; } else { alert_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return alert_typeof(obj); }





var alert_invoke = function invoke() {
  wya_umd_default.a.invoke('alert', {// ...
  }).then(function (res) {
    res = alert_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_alert = ({
  to: '/methods/alert',
  title: 'alert',
  label: '',
  invoke: alert_invoke,
  markdown: alert_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/confirm.md
var methods_confirm = __webpack_require__("../../docs/methods/confirm.md");
var confirm_default = /*#__PURE__*/__webpack_require__.n(methods_confirm);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/confirm.js
function confirm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { confirm_typeof = function _typeof(obj) { return typeof obj; }; } else { confirm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return confirm_typeof(obj); }





var confirm_invoke = function invoke() {
  wya_umd_default.a.invoke('confirm', {// ...
  }).then(function (res) {
    res = confirm_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_confirm = ({
  to: '/methods/confirm',
  title: 'confirm',
  label: '',
  invoke: confirm_invoke,
  markdown: confirm_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/actionSheet.md
var actionSheet = __webpack_require__("../../docs/methods/actionSheet.md");
var actionSheet_default = /*#__PURE__*/__webpack_require__.n(actionSheet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/actionSheet.js
function actionSheet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { actionSheet_typeof = function _typeof(obj) { return typeof obj; }; } else { actionSheet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return actionSheet_typeof(obj); }





var actionSheet_invoke = function invoke() {
  wya_umd_default.a.invoke('actionSheet', {// ...
  }).then(function (res) {
    res = actionSheet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_actionSheet = ({
  to: '/methods/actionSheet',
  title: 'actionSheet',
  label: '',
  invoke: actionSheet_invoke,
  markdown: actionSheet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/showProgress.md
var showProgress = __webpack_require__("../../docs/methods/showProgress.md");
var showProgress_default = /*#__PURE__*/__webpack_require__.n(showProgress);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/showProgress.js
function showProgress_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { showProgress_typeof = function _typeof(obj) { return typeof obj; }; } else { showProgress_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return showProgress_typeof(obj); }





var showProgress_invoke = function invoke() {
  wya_umd_default.a.invoke('showProgress', {// ...
  }).then(function (res) {
    res = showProgress_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_showProgress = ({
  to: '/methods/showProgress',
  title: 'showProgress',
  label: '',
  invoke: showProgress_invoke,
  markdown: showProgress_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/hideProgress.md
var hideProgress = __webpack_require__("../../docs/methods/hideProgress.md");
var hideProgress_default = /*#__PURE__*/__webpack_require__.n(hideProgress);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/hideProgress.js
function hideProgress_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hideProgress_typeof = function _typeof(obj) { return typeof obj; }; } else { hideProgress_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hideProgress_typeof(obj); }





var hideProgress_invoke = function invoke() {
  wya_umd_default.a.invoke('hideProgress', {// ...
  }).then(function (res) {
    res = hideProgress_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_hideProgress = ({
  to: '/methods/hideProgress',
  title: 'hideProgress',
  label: '',
  invoke: hideProgress_invoke,
  markdown: hideProgress_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/toast.md
var toast = __webpack_require__("../../docs/methods/toast.md");
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/toast.js
function toast_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { toast_typeof = function _typeof(obj) { return typeof obj; }; } else { toast_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return toast_typeof(obj); }





var toast_invoke = function invoke() {
  wya_umd_default.a.invoke('toast', {// ...
  }).then(function (res) {
    res = toast_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_toast = ({
  to: '/methods/toast',
  title: 'toast',
  label: '',
  invoke: toast_invoke,
  markdown: toast_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openPicker.md
var openPicker = __webpack_require__("../../docs/methods/openPicker.md");
var openPicker_default = /*#__PURE__*/__webpack_require__.n(openPicker);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openPicker.js
function openPicker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openPicker_typeof = function _typeof(obj) { return typeof obj; }; } else { openPicker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openPicker_typeof(obj); }





var openPicker_invoke = function invoke() {
  wya_umd_default.a.invoke('openPicker', {// ...
  }).then(function (res) {
    res = openPicker_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openPicker = ({
  to: '/methods/openPicker',
  title: 'openPicker',
  label: '',
  invoke: openPicker_invoke,
  markdown: openPicker_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setRefreshHeaderInfo.md
var setRefreshHeaderInfo = __webpack_require__("../../docs/methods/setRefreshHeaderInfo.md");
var setRefreshHeaderInfo_default = /*#__PURE__*/__webpack_require__.n(setRefreshHeaderInfo);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setRefreshHeaderInfo.js
function setRefreshHeaderInfo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setRefreshHeaderInfo_typeof = function _typeof(obj) { return typeof obj; }; } else { setRefreshHeaderInfo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setRefreshHeaderInfo_typeof(obj); }





var setRefreshHeaderInfo_invoke = function invoke() {
  wya_umd_default.a.invoke('setRefreshHeaderInfo', {// ...
  }).then(function (res) {
    res = setRefreshHeaderInfo_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setRefreshHeaderInfo = ({
  to: '/methods/setRefreshHeaderInfo',
  title: 'setRefreshHeaderInfo',
  label: '',
  invoke: setRefreshHeaderInfo_invoke,
  markdown: setRefreshHeaderInfo_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/setCustomRefreshHeaderInfo.md
var setCustomRefreshHeaderInfo = __webpack_require__("../../docs/methods/setCustomRefreshHeaderInfo.md");
var setCustomRefreshHeaderInfo_default = /*#__PURE__*/__webpack_require__.n(setCustomRefreshHeaderInfo);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/setCustomRefreshHeaderInfo.js
function setCustomRefreshHeaderInfo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { setCustomRefreshHeaderInfo_typeof = function _typeof(obj) { return typeof obj; }; } else { setCustomRefreshHeaderInfo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return setCustomRefreshHeaderInfo_typeof(obj); }





var setCustomRefreshHeaderInfo_invoke = function invoke() {
  wya_umd_default.a.invoke('setCustomRefreshHeaderInfo', {// ...
  }).then(function (res) {
    res = setCustomRefreshHeaderInfo_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_setCustomRefreshHeaderInfo = ({
  to: '/methods/setCustomRefreshHeaderInfo',
  title: 'setCustomRefreshHeaderInfo',
  label: '',
  invoke: setCustomRefreshHeaderInfo_invoke,
  markdown: setCustomRefreshHeaderInfo_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/refreshHeaderLoading.md
var refreshHeaderLoading = __webpack_require__("../../docs/methods/refreshHeaderLoading.md");
var refreshHeaderLoading_default = /*#__PURE__*/__webpack_require__.n(refreshHeaderLoading);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/refreshHeaderLoading.js
function refreshHeaderLoading_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { refreshHeaderLoading_typeof = function _typeof(obj) { return typeof obj; }; } else { refreshHeaderLoading_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return refreshHeaderLoading_typeof(obj); }





var refreshHeaderLoading_invoke = function invoke() {
  wya_umd_default.a.invoke('refreshHeaderLoading', {// ...
  }).then(function (res) {
    res = refreshHeaderLoading_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_refreshHeaderLoading = ({
  to: '/methods/refreshHeaderLoading',
  title: 'refreshHeaderLoading',
  label: '',
  invoke: refreshHeaderLoading_invoke,
  markdown: refreshHeaderLoading_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/refreshHeaderLoadDone.md
var refreshHeaderLoadDone = __webpack_require__("../../docs/methods/refreshHeaderLoadDone.md");
var refreshHeaderLoadDone_default = /*#__PURE__*/__webpack_require__.n(refreshHeaderLoadDone);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/refreshHeaderLoadDone.js
function refreshHeaderLoadDone_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { refreshHeaderLoadDone_typeof = function _typeof(obj) { return typeof obj; }; } else { refreshHeaderLoadDone_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return refreshHeaderLoadDone_typeof(obj); }





var refreshHeaderLoadDone_invoke = function invoke() {
  wya_umd_default.a.invoke('refreshHeaderLoadDone', {// ...
  }).then(function (res) {
    res = refreshHeaderLoadDone_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_refreshHeaderLoadDone = ({
  to: '/methods/refreshHeaderLoadDone',
  title: 'refreshHeaderLoadDone',
  label: '',
  invoke: refreshHeaderLoadDone_invoke,
  markdown: refreshHeaderLoadDone_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/showFloatBox.md
var showFloatBox = __webpack_require__("../../docs/methods/showFloatBox.md");
var showFloatBox_default = /*#__PURE__*/__webpack_require__.n(showFloatBox);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/showFloatBox.js
function showFloatBox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { showFloatBox_typeof = function _typeof(obj) { return typeof obj; }; } else { showFloatBox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return showFloatBox_typeof(obj); }





var showFloatBox_invoke = function invoke() {
  wya_umd_default.a.invoke('showFloatBox', {// ...
  }).then(function (res) {
    res = showFloatBox_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_showFloatBox = ({
  to: '/methods/showFloatBox',
  title: 'showFloatBox',
  label: '',
  invoke: showFloatBox_invoke,
  markdown: showFloatBox_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/getPicture.md
var getPicture = __webpack_require__("../../docs/methods/getPicture.md");
var getPicture_default = /*#__PURE__*/__webpack_require__.n(getPicture);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/getPicture.js
function getPicture_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { getPicture_typeof = function _typeof(obj) { return typeof obj; }; } else { getPicture_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return getPicture_typeof(obj); }





var getPicture_invoke = function invoke() {
  wya_umd_default.a.invoke('getPicture', {// ...
  }).then(function (res) {
    res = getPicture_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_getPicture = ({
  to: '/methods/getPicture',
  title: 'getPicture',
  label: '',
  invoke: getPicture_invoke,
  markdown: getPicture_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/saveMediaToAlbum.md
var saveMediaToAlbum = __webpack_require__("../../docs/methods/saveMediaToAlbum.md");
var saveMediaToAlbum_default = /*#__PURE__*/__webpack_require__.n(saveMediaToAlbum);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/saveMediaToAlbum.js
function saveMediaToAlbum_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { saveMediaToAlbum_typeof = function _typeof(obj) { return typeof obj; }; } else { saveMediaToAlbum_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return saveMediaToAlbum_typeof(obj); }





var saveMediaToAlbum_invoke = function invoke() {
  wya_umd_default.a.invoke('saveMediaToAlbum', {// ...
  }).then(function (res) {
    res = saveMediaToAlbum_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_saveMediaToAlbum = ({
  to: '/methods/saveMediaToAlbum',
  title: 'saveMediaToAlbum',
  label: '',
  invoke: saveMediaToAlbum_invoke,
  markdown: saveMediaToAlbum_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/startRecord.md
var startRecord = __webpack_require__("../../docs/methods/startRecord.md");
var startRecord_default = /*#__PURE__*/__webpack_require__.n(startRecord);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/startRecord.js
function startRecord_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { startRecord_typeof = function _typeof(obj) { return typeof obj; }; } else { startRecord_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return startRecord_typeof(obj); }





var startRecord_invoke = function invoke() {
  wya_umd_default.a.invoke('startRecord', {// ...
  }).then(function (res) {
    res = startRecord_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_startRecord = ({
  to: '/methods/startRecord',
  title: 'startRecord',
  label: '',
  invoke: startRecord_invoke,
  markdown: startRecord_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/stopRecord.md
var stopRecord = __webpack_require__("../../docs/methods/stopRecord.md");
var stopRecord_default = /*#__PURE__*/__webpack_require__.n(stopRecord);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/stopRecord.js
function stopRecord_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { stopRecord_typeof = function _typeof(obj) { return typeof obj; }; } else { stopRecord_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return stopRecord_typeof(obj); }





var stopRecord_invoke = function invoke() {
  wya_umd_default.a.invoke('stopRecord', {// ...
  }).then(function (res) {
    res = stopRecord_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_stopRecord = ({
  to: '/methods/stopRecord',
  title: 'stopRecord',
  label: '',
  invoke: stopRecord_invoke,
  markdown: stopRecord_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/startPlay.md
var startPlay = __webpack_require__("../../docs/methods/startPlay.md");
var startPlay_default = /*#__PURE__*/__webpack_require__.n(startPlay);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/startPlay.js
function startPlay_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { startPlay_typeof = function _typeof(obj) { return typeof obj; }; } else { startPlay_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return startPlay_typeof(obj); }





var startPlay_invoke = function invoke() {
  wya_umd_default.a.invoke('startPlay', {// ...
  }).then(function (res) {
    res = startPlay_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_startPlay = ({
  to: '/methods/startPlay',
  title: 'startPlay',
  label: '',
  invoke: startPlay_invoke,
  markdown: startPlay_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/stopPlay.md
var stopPlay = __webpack_require__("../../docs/methods/stopPlay.md");
var stopPlay_default = /*#__PURE__*/__webpack_require__.n(stopPlay);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/stopPlay.js
function stopPlay_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { stopPlay_typeof = function _typeof(obj) { return typeof obj; }; } else { stopPlay_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return stopPlay_typeof(obj); }





var stopPlay_invoke = function invoke() {
  wya_umd_default.a.invoke('stopPlay', {// ...
  }).then(function (res) {
    res = stopPlay_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_stopPlay = ({
  to: '/methods/stopPlay',
  title: 'stopPlay',
  label: '',
  invoke: stopPlay_invoke,
  markdown: stopPlay_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/openVideo.md
var openVideo = __webpack_require__("../../docs/methods/openVideo.md");
var openVideo_default = /*#__PURE__*/__webpack_require__.n(openVideo);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/openVideo.js
function openVideo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { openVideo_typeof = function _typeof(obj) { return typeof obj; }; } else { openVideo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return openVideo_typeof(obj); }





var openVideo_invoke = function invoke() {
  wya_umd_default.a.invoke('openVideo', {// ...
  }).then(function (res) {
    res = openVideo_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_openVideo = ({
  to: '/methods/openVideo',
  title: 'openVideo',
  label: '',
  invoke: openVideo_invoke,
  markdown: openVideo_default.a
});
// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/root.js
/* concated harmony reexport openWin */__webpack_require__.d(__webpack_exports__, "openWin", function() { return modules_openWin; });
/* concated harmony reexport closeWin */__webpack_require__.d(__webpack_exports__, "closeWin", function() { return modules_closeWin; });
/* concated harmony reexport closeToWin */__webpack_require__.d(__webpack_exports__, "closeToWin", function() { return modules_closeToWin; });
/* concated harmony reexport setWinAttr */__webpack_require__.d(__webpack_exports__, "setWinAttr", function() { return modules_setWinAttr; });
/* concated harmony reexport openFrame */__webpack_require__.d(__webpack_exports__, "openFrame", function() { return modules_openFrame; });
/* concated harmony reexport closeFrame */__webpack_require__.d(__webpack_exports__, "closeFrame", function() { return modules_closeFrame; });
/* concated harmony reexport setFrameAttr */__webpack_require__.d(__webpack_exports__, "setFrameAttr", function() { return modules_setFrameAttr; });
/* concated harmony reexport bringFrameToFront */__webpack_require__.d(__webpack_exports__, "bringFrameToFront", function() { return modules_bringFrameToFront; });
/* concated harmony reexport sendFrameToBack */__webpack_require__.d(__webpack_exports__, "sendFrameToBack", function() { return modules_sendFrameToBack; });
/* concated harmony reexport setFrameClient */__webpack_require__.d(__webpack_exports__, "setFrameClient", function() { return modules_setFrameClient; });
/* concated harmony reexport animation */__webpack_require__.d(__webpack_exports__, "animation", function() { return modules_animation; });
/* concated harmony reexport openFrameGroup */__webpack_require__.d(__webpack_exports__, "openFrameGroup", function() { return modules_openFrameGroup; });
/* concated harmony reexport closeFrameGroup */__webpack_require__.d(__webpack_exports__, "closeFrameGroup", function() { return modules_closeFrameGroup; });
/* concated harmony reexport setFrameGroupAttr */__webpack_require__.d(__webpack_exports__, "setFrameGroupAttr", function() { return modules_setFrameGroupAttr; });
/* concated harmony reexport setFrameGroupIndex */__webpack_require__.d(__webpack_exports__, "setFrameGroupIndex", function() { return modules_setFrameGroupIndex; });
/* concated harmony reexport openPopoverWin */__webpack_require__.d(__webpack_exports__, "openPopoverWin", function() { return modules_openPopoverWin; });
/* concated harmony reexport closePopoverWin */__webpack_require__.d(__webpack_exports__, "closePopoverWin", function() { return modules_closePopoverWin; });
/* concated harmony reexport openSlidLayout */__webpack_require__.d(__webpack_exports__, "openSlidLayout", function() { return modules_openSlidLayout; });
/* concated harmony reexport openSlidPane */__webpack_require__.d(__webpack_exports__, "openSlidPane", function() { return modules_openSlidPane; });
/* concated harmony reexport closeSlidPane */__webpack_require__.d(__webpack_exports__, "closeSlidPane", function() { return modules_closeSlidPane; });
/* concated harmony reexport lockSlidPane */__webpack_require__.d(__webpack_exports__, "lockSlidPane", function() { return modules_lockSlidPane; });
/* concated harmony reexport unlockSlidPane */__webpack_require__.d(__webpack_exports__, "unlockSlidPane", function() { return modules_unlockSlidPane; });
/* concated harmony reexport openDrawerLayout */__webpack_require__.d(__webpack_exports__, "openDrawerLayout", function() { return modules_openDrawerLayout; });
/* concated harmony reexport openDrawerPane */__webpack_require__.d(__webpack_exports__, "openDrawerPane", function() { return modules_openDrawerPane; });
/* concated harmony reexport closeDrawerPane */__webpack_require__.d(__webpack_exports__, "closeDrawerPane", function() { return modules_closeDrawerPane; });
/* concated harmony reexport loadData */__webpack_require__.d(__webpack_exports__, "loadData", function() { return modules_loadData; });
/* concated harmony reexport execScript */__webpack_require__.d(__webpack_exports__, "execScript", function() { return modules_execScript; });
/* concated harmony reexport setBlurEffect */__webpack_require__.d(__webpack_exports__, "setBlurEffect", function() { return modules_setBlurEffect; });
/* concated harmony reexport historyBack */__webpack_require__.d(__webpack_exports__, "historyBack", function() { return modules_historyBack; });
/* concated harmony reexport historyForward */__webpack_require__.d(__webpack_exports__, "historyForward", function() { return modules_historyForward; });
/* concated harmony reexport pageUp */__webpack_require__.d(__webpack_exports__, "pageUp", function() { return modules_pageUp; });
/* concated harmony reexport pageDown */__webpack_require__.d(__webpack_exports__, "pageDown", function() { return modules_pageDown; });
/* concated harmony reexport removeLaunchView */__webpack_require__.d(__webpack_exports__, "removeLaunchView", function() { return modules_removeLaunchView; });
/* concated harmony reexport showLaunchView */__webpack_require__.d(__webpack_exports__, "showLaunchView", function() { return modules_showLaunchView; });
/* concated harmony reexport parseTapmode */__webpack_require__.d(__webpack_exports__, "parseTapmode", function() { return modules_parseTapmode; });
/* concated harmony reexport installApp */__webpack_require__.d(__webpack_exports__, "installApp", function() { return modules_installApp; });
/* concated harmony reexport uninstallApp */__webpack_require__.d(__webpack_exports__, "uninstallApp", function() { return modules_uninstallApp; });
/* concated harmony reexport openApp */__webpack_require__.d(__webpack_exports__, "openApp", function() { return modules_openApp; });
/* concated harmony reexport appInstalled */__webpack_require__.d(__webpack_exports__, "appInstalled", function() { return modules_appInstalled; });
/* concated harmony reexport rebootApp */__webpack_require__.d(__webpack_exports__, "rebootApp", function() { return modules_rebootApp; });
/* concated harmony reexport openWidget */__webpack_require__.d(__webpack_exports__, "openWidget", function() { return modules_openWidget; });
/* concated harmony reexport closeWidget */__webpack_require__.d(__webpack_exports__, "closeWidget", function() { return modules_closeWidget; });
/* concated harmony reexport ajax */__webpack_require__.d(__webpack_exports__, "ajax", function() { return modules_ajax; });
/* concated harmony reexport cancelAjax */__webpack_require__.d(__webpack_exports__, "cancelAjax", function() { return modules_cancelAjax; });
/* concated harmony reexport download */__webpack_require__.d(__webpack_exports__, "download", function() { return modules_download; });
/* concated harmony reexport cancelDownload */__webpack_require__.d(__webpack_exports__, "cancelDownload", function() { return modules_cancelDownload; });
/* concated harmony reexport imageCache */__webpack_require__.d(__webpack_exports__, "imageCache", function() { return modules_imageCache; });
/* concated harmony reexport readFile */__webpack_require__.d(__webpack_exports__, "readFile", function() { return modules_readFile; });
/* concated harmony reexport writeFile */__webpack_require__.d(__webpack_exports__, "writeFile", function() { return modules_writeFile; });
/* concated harmony reexport setPrefs */__webpack_require__.d(__webpack_exports__, "setPrefs", function() { return modules_setPrefs; });
/* concated harmony reexport getPrefs */__webpack_require__.d(__webpack_exports__, "getPrefs", function() { return modules_getPrefs; });
/* concated harmony reexport removePrefs */__webpack_require__.d(__webpack_exports__, "removePrefs", function() { return modules_removePrefs; });
/* concated harmony reexport clearCache */__webpack_require__.d(__webpack_exports__, "clearCache", function() { return modules_clearCache; });
/* concated harmony reexport getCacheSize */__webpack_require__.d(__webpack_exports__, "getCacheSize", function() { return modules_getCacheSize; });
/* concated harmony reexport getTotalSpace */__webpack_require__.d(__webpack_exports__, "getTotalSpace", function() { return modules_getTotalSpace; });
/* concated harmony reexport getFreeDiskSpace */__webpack_require__.d(__webpack_exports__, "getFreeDiskSpace", function() { return modules_getFreeDiskSpace; });
/* concated harmony reexport loadSecureValue */__webpack_require__.d(__webpack_exports__, "loadSecureValue", function() { return modules_loadSecureValue; });
/* concated harmony reexport addEventListener */__webpack_require__.d(__webpack_exports__, "addEventListener", function() { return modules_addEventListener; });
/* concated harmony reexport removeEventListener */__webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return modules_removeEventListener; });
/* concated harmony reexport sendEvent */__webpack_require__.d(__webpack_exports__, "sendEvent", function() { return modules_sendEvent; });
/* concated harmony reexport accessNative */__webpack_require__.d(__webpack_exports__, "accessNative", function() { return modules_accessNative; });
/* concated harmony reexport notification */__webpack_require__.d(__webpack_exports__, "notification", function() { return modules_notification; });
/* concated harmony reexport cancelNotification */__webpack_require__.d(__webpack_exports__, "cancelNotification", function() { return modules_cancelNotification; });
/* concated harmony reexport startLocation */__webpack_require__.d(__webpack_exports__, "startLocation", function() { return modules_startLocation; });
/* concated harmony reexport stopLocation */__webpack_require__.d(__webpack_exports__, "stopLocation", function() { return modules_stopLocation; });
/* concated harmony reexport getLocation */__webpack_require__.d(__webpack_exports__, "getLocation", function() { return modules_getLocation; });
/* concated harmony reexport startSensor */__webpack_require__.d(__webpack_exports__, "startSensor", function() { return modules_startSensor; });
/* concated harmony reexport stopSensor */__webpack_require__.d(__webpack_exports__, "stopSensor", function() { return modules_stopSensor; });
/* concated harmony reexport sms */__webpack_require__.d(__webpack_exports__, "sms", function() { return modules_sms; });
/* concated harmony reexport mail */__webpack_require__.d(__webpack_exports__, "mail", function() { return modules_mail; });
/* concated harmony reexport call */__webpack_require__.d(__webpack_exports__, "call", function() { return modules_call; });
/* concated harmony reexport openContacts */__webpack_require__.d(__webpack_exports__, "openContacts", function() { return modules_openContacts; });
/* concated harmony reexport setStatusBarStyle */__webpack_require__.d(__webpack_exports__, "setStatusBarStyle", function() { return modules_setStatusBarStyle; });
/* concated harmony reexport setScreenOrientation */__webpack_require__.d(__webpack_exports__, "setScreenOrientation", function() { return modules_setScreenOrientation; });
/* concated harmony reexport setKeepScreenOn */__webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return modules_setKeepScreenOn; });
/* concated harmony reexport toLauncher */__webpack_require__.d(__webpack_exports__, "toLauncher", function() { return modules_toLauncher; });
/* concated harmony reexport setScreenSecure */__webpack_require__.d(__webpack_exports__, "setScreenSecure", function() { return modules_setScreenSecure; });
/* concated harmony reexport setAppIconBadge */__webpack_require__.d(__webpack_exports__, "setAppIconBadge", function() { return modules_setAppIconBadge; });
/* concated harmony reexport getPhoneNumber */__webpack_require__.d(__webpack_exports__, "getPhoneNumber", function() { return modules_getPhoneNumber; });
/* concated harmony reexport alert */__webpack_require__.d(__webpack_exports__, "alert", function() { return modules_alert; });
/* concated harmony reexport confirm */__webpack_require__.d(__webpack_exports__, "confirm", function() { return modules_confirm; });
/* concated harmony reexport actionSheet */__webpack_require__.d(__webpack_exports__, "actionSheet", function() { return modules_actionSheet; });
/* concated harmony reexport showProgress */__webpack_require__.d(__webpack_exports__, "showProgress", function() { return modules_showProgress; });
/* concated harmony reexport hideProgress */__webpack_require__.d(__webpack_exports__, "hideProgress", function() { return modules_hideProgress; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return modules_toast; });
/* concated harmony reexport openPicker */__webpack_require__.d(__webpack_exports__, "openPicker", function() { return modules_openPicker; });
/* concated harmony reexport setRefreshHeaderInfo */__webpack_require__.d(__webpack_exports__, "setRefreshHeaderInfo", function() { return modules_setRefreshHeaderInfo; });
/* concated harmony reexport setCustomRefreshHeaderInfo */__webpack_require__.d(__webpack_exports__, "setCustomRefreshHeaderInfo", function() { return modules_setCustomRefreshHeaderInfo; });
/* concated harmony reexport refreshHeaderLoading */__webpack_require__.d(__webpack_exports__, "refreshHeaderLoading", function() { return modules_refreshHeaderLoading; });
/* concated harmony reexport refreshHeaderLoadDone */__webpack_require__.d(__webpack_exports__, "refreshHeaderLoadDone", function() { return modules_refreshHeaderLoadDone; });
/* concated harmony reexport showFloatBox */__webpack_require__.d(__webpack_exports__, "showFloatBox", function() { return modules_showFloatBox; });
/* concated harmony reexport getPicture */__webpack_require__.d(__webpack_exports__, "getPicture", function() { return modules_getPicture; });
/* concated harmony reexport saveMediaToAlbum */__webpack_require__.d(__webpack_exports__, "saveMediaToAlbum", function() { return modules_saveMediaToAlbum; });
/* concated harmony reexport startRecord */__webpack_require__.d(__webpack_exports__, "startRecord", function() { return modules_startRecord; });
/* concated harmony reexport stopRecord */__webpack_require__.d(__webpack_exports__, "stopRecord", function() { return modules_stopRecord; });
/* concated harmony reexport startPlay */__webpack_require__.d(__webpack_exports__, "startPlay", function() { return modules_startPlay; });
/* concated harmony reexport stopPlay */__webpack_require__.d(__webpack_exports__, "stopPlay", function() { return modules_stopPlay; });
/* concated harmony reexport openVideo */__webpack_require__.d(__webpack_exports__, "openVideo", function() { return modules_openVideo; });





































































































































































































/***/ })

}]);