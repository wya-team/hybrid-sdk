(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../docs/methods/appHas.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n判断设备上面是否已安装指定应用\n\n注意：iOS9中系统对检测应用是否安装的方法做了限制，若想得到期望的结果，需要在config.xml里面[配置可被检测的URL Scheme](//docs.apicloud.com/Dev-Guide/app-config-manual#14-4)。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nsync | 执行结果的返回方式。为false时通过callback返回，为true时直接返回。 | bool | false | -\nscheme | scheme 或 包名 | str | - | -\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet app = wya.requireModule('app')\napp.has({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.app.has({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('app/has', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('app/has', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/appInstall.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\turl: ''\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet app = wya.requireModule('app')\napp.install({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.app.install({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('app/install', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('app/install', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/appOpen.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nparam | 传给目标应用的参数 | obj | - | -\nscheme | scheme 或 包名 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet app = wya.requireModule('app')\napp.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.app.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('app/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('app/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/appReboot.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet app = wya.requireModule('app')\napp.reboot({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.app.reboot({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('app/reboot', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('app/reboot', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/appUninstall.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet app = wya.requireModule('app')\napp.uninstall({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.app.uninstall({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('app/uninstall', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('app/uninstall', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/audioPause.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet audio = wya.requireModule('audio')\naudio.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.audio.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('audio/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('audio/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/audioRestart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet audio = wya.requireModule('audio')\naudio.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.audio.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('audio/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('audio/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/audioResume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet audio = wya.requireModule('audio')\naudio.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.audio.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('audio/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('audio/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/audioStart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n播放本地音频，支持amr格式\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 文件路径，支持fs://、widget://等文件路径协议 | str | - | -\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet audio = wya.requireModule('audio')\naudio.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.audio.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('audio/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('audio/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/audioStop.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n停止播放音频\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet audio = wya.requireModule('audio')\naudio.stop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.audio.stop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('audio/stop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('audio/stop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/clipboardGet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet clipboard = wya.requireModule('clipboard')\nclipboard.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.clipboard.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('clipboard/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('clipboard/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/clipboardSet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet clipboard = wya.requireModule('clipboard')\nclipboard.set({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.clipboard.set({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('clipboard/set', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('clipboard/set', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/downloadCancel.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n取消文件下载\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet download = wya.requireModule('download')\ndownload.cancel({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.download.cancel({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download/cancel', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download/cancel', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/downloadPause.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet download = wya.requireModule('download')\ndownload.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.download.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/downloadRestart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet download = wya.requireModule('download')\ndownload.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.download.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/downloadResume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet download = wya.requireModule('download')\ndownload.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.download.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/downloadStart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n下载文件\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\nencode | 是否对url进行编码 | bool | true | -\npath | 存储路径，不传时使用自动创建的路径 | str | - | -\n~~report~~ | ~~下载过程是否上报~~ | ~~bool~~ | ~~false~~ | -\n~~allowResume~~ | ~~是否允许断点续传~~ | ~~bool~~ | ~~false~~ | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: 0, // 文件大小，数字类型\n\t\tpercent: 0, // 下载进度（0-100），数字类型\n\t\tstate: 0, // 下载状态，数字类型。（0：下载中、1：下载完成、2：下载失败）\n\t\tpath: '' // 存储路径（字符串类型）\n\t}\n}\n```\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet download = wya.requireModule('download')\ndownload.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.download.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/floatBallHide.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet float = wya.requireModule('float')\nfloat.ballHide({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.float.ballHide({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('float/ballHide', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('float/ballHide', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/floatBallShow.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n展示一个悬浮框，浮动在屏幕上\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\n~~preventDefault~~ | ~~是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。~~ | bool | false | -\niconPath | 展示在悬浮框中的图片地址。 | str | 应用图标 | 'widget://image/icon.png'\nduration | 自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态 | number | 5000 | -\n\n> 默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet float = wya.requireModule('float')\nfloat.ballShow({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.float.ballShow({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('float/ballShow', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('float/ballShow', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/locationClose.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet location = wya.requireModule('location')\nlocation.close({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.location.close({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('location/close', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('location/close', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/locationGet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet location = wya.requireModule('location')\nlocation.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.location.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('location/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('location/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/locationOpen.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet location = wya.requireModule('location')\nlocation.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.location.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('location/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('location/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/memoryClearCache.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 缓存路径 | str | app的缓存路径 | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet memory = wya.requireModule('memory')\nmemory.clearCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.memory.clearCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('memory/clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('memory/clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/memoryGetCache.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 缓存路径 | str | app的缓存路径 | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte。\n\t\tlabel: '1KB' \n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet memory = wya.requireModule('memory')\nmemory.getCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.memory.getCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('memory/getCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('memory/getCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/memoryGetFree.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取剩余存储空间大小\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte\n\t\tlabel: '1KB'\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet memory = wya.requireModule('memory')\nmemory.getFree({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.memory.getFree({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('memory/getFree', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('memory/getFree', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/memoryGetTotal.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取总存储空间大小\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nstorageType | `` | str | total, dataDir, storageDir | -\n\n\n> dataDir(内部存储)；storageDir(外部存储)；total(全部)\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte\n\t\tlabel: '1KB'\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet memory = wya.requireModule('memory')\nmemory.getTotal({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.memory.getTotal({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('memory/getTotal', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('memory/getTotal', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/navigatorPop.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nname | window名字，相同跳转到最早创建的，不传时关闭当前window | str | - | -\nanimation | 动画参数 | str | card,modal,none | ``\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet navigator = wya.requireModule('navigator')\nnavigator.pop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.navigator.pop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('navigator/pop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('navigator/pop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/navigatorPush.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n打开window\n若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\turl: '/home/main',\n\tpageParam: {},\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nname | window名字 | str | - | 'root'\ntitle | navigationBar上的标题 | str | - | -\nurl | 页面地址 | str | - | `/home/main`, `https:**.com/`\npageParam | 页面参数 | object | - | -\n~~scrollToTop~~ | ~~当点击状态栏，页面是否滚动到顶部~~ | ~~bool~~ | ~~false~~ | ~~-~~\nvScrollBarEnabled | 是否显示垂直滚动条 | bool | true | -\nhScrollBarEnabled | 是否显示水平滚动条 | bool | true | -\nscaleEnabled | 页面是否可以缩放 | bool | false | -\nhideTopBar | 是否隐藏原生navigationBar控件 | bool | true | ~~-~~\nhideBottomBar | 是否隐藏原生tabBar控件 | bool | true | -\nanimation | 动画参数，不传时使用默认动画 | str | card,modal,none | -\nreplace | 是否先执行pop操作 | bool | false | -\n\n#### 3. Native传递参数给Client \n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet navigator = wya.requireModule('navigator')\nnavigator.push({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.navigator.push({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('navigator/push', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('navigator/push', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/notificationAdd.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。\n\n注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nvibrate | 伴随节奏的震动: 等待-震动-等待-震动 | arr | [100, 500, 100, 500] | -\nsound | 提示音 | str | default,none | '/res/xxx.mp3'\nlight | 设备提示灯是否闪烁 | bool | false | -\nnotify | 弹出通知到状态栏 | object | { title, content, extra, cover } | -\ntimestamp | 设置时间戳，单位ms | number | - | -\n\n```\n{\n    title: '' // 标题，Android中默认值为应用名称，支持Android和iOS 8.2以上系统\n    content: '' // 内容，默认值为'有新消息'\n    extra: {} // 附加信息key/value，页面可以监听noticeclicked事件得到点击的通知的附加信息\n    cover: false // 是否覆盖更新已有的通知，取值范围true|false。只Android有效\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tid: 1 // 弹出到状态栏通知的id或者设置的闹铃id，可用于取消通知或者闹铃\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet notification = wya.requireModule('notification')\nnotification.add({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.notification.add({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('notification/add', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('notification/add', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/notificationRemove.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nid | 调用 notification 方法时返回的 id | num,str | 0 | -\n\n> 如果传入-1，则取消本应用弹到状态栏的所有通知，iOS只支持清除所有弹到状态栏的通知；传入-1并不清除闹铃\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet notification = wya.requireModule('notification')\nnotification.remove({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.notification.remove({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('notification/remove', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('notification/remove', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/photoGet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nsourceType | 图片源类型，从相册、图片库或相机获取图片 | str | camera,album | -\nencodingType | 返回图片类型，jpg或png | str | png,jpg | -\nmediaType | 媒体类型，图片或视频 | str | pic,viedo | -\ndestinationType | 返回数据类型，指定返回图片地址或图片经过base64编码后的字符串 | str | url,base64 | -\ndirection | 选择前置或后置摄像头，取值范围（front、rear）| bool | false | -\n~~allowEdit~~ | ~~是否可以选择图片后进行编辑~~| ~~bool~~ | ~~false~~ | -\n~~preview~~ | ~~是否选择图片后进行预览~~ | ~~bool~~ | ~~false~~ | -\nquality | 图片质量，只针对jpg格式图片（0-100整数） | number | 50 | -\nvideoQuality | 视频质量，调用相机录制视频时该参数生效 | str | low、medium、high | -\ntargetWidth | 压缩后的图片宽度，图片会按比例适配此宽度 | number | 原图宽度 | -\ntargetHeight | 压缩后的图片高度，图片会按比例适配此高度 | number | 原图高度 | -\nsaveToPhotoAlbum | 拍照或录制视频后是否保存到系统相册目录 | bool | false | -\ngroupName | 保存图片到自定义分组相册目录，相册不存在则会进行创建 | bool | false | -\n\n```\ncamera // 相机\nalbum // 相册\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tlist: [\n\t\t\t{\n\t\t\t\turl: \"\", // 图片路径\n\t\t\t\tbase64: \"\", // base64数据，destinationType为base64时返回\n\t\t\t\tduration: 0 // 视频时长\n\t\t\t}\n\t\t]\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet photo = wya.requireModule('photo')\nphoto.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.photo.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('photo/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('photo/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/photoSave.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n保存图片和视频到系统相册\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 文件路径，目前只支持网络链接地址 | str | - | -\nmediaType | 媒体类型，图片或视频 | str | pic,viedo | -\ngroupName | 保存图片到自定义分组相册目录，相册不存在则会进行创建 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet photo = wya.requireModule('photo')\nphoto.save({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.photo.save({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('photo/save', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('photo/save', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/recordPause.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet record = wya.requireModule('record')\nrecord.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.record.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('record/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('record/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/recordRestart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet record = wya.requireModule('record')\nrecord.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.record.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('record/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('record/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/recordResume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet record = wya.requireModule('record')\nrecord.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.record.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('record/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('record/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/recordStart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n播放本地音频，支持amr格式\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 文件路径，支持fs://、widget://等文件路径协议 | str | - | -\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet record = wya.requireModule('record')\nrecord.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.record.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('record/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('record/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/recordStop.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n停止录音\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tpath: '', // 字符串，返回的音频地址\n\t\tduration: 0 // 数字类型，音频的时长\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet record = wya.requireModule('record')\nrecord.stop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.record.stop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('record/stop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('record/stop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/screenKeepOn.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置是否禁止屏幕休眠\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nkeepOn | 是否禁止屏幕休眠 | bool | false | -\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet screen = wya.requireModule('screen')\nscreen.keepOn({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.screen.keepOn({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('screen/keepOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('screen/keepOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/screenOrientate.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置屏幕旋转方向\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\norientation | 旋转屏幕到指定方向 | str | - | -\n\n```\nportraitUp // 竖屏时，屏幕在home键的上面\nportraitDown // 竖屏时，屏幕在home键的下面，部分手机如iPhone X系列不支持\nlandscapeLeft // 横屏时，屏幕在home键的左边\nlandscapeRight // 横屏时，屏幕在home键的右边\nauto // 屏幕根据重力感应在横竖屏间自动切换\nautoPortrait // 屏幕根据重力感应在竖屏间自动切换\nautoLandscape // 屏幕根据重力感应在横屏间自动切换\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet screen = wya.requireModule('screen')\nscreen.orientate({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.screen.orientate({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('screen/orientate', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('screen/orientate', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/screenToLauncher.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n回到系统桌面, 该接口仅Android平台支持\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet screen = wya.requireModule('screen')\nscreen.toLauncher({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.screen.toLauncher({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('screen/toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('screen/toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sensorClose.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet sensor = wya.requireModule('sensor')\nsensor.close({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.sensor.close({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sensor/close', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sensor/close', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sensorOpen.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet sensor = wya.requireModule('sensor')\nsensor.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.sensor.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sensor/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sensor/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/storageClear.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet storage = wya.requireModule('storage')\nstorage.clear({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.storage.clear({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('storage/clear', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('storage/clear', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/storageGet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet storage = wya.requireModule('storage')\nstorage.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.storage.get({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('storage/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('storage/get', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/storageGetAllKeys.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet storage = wya.requireModule('storage')\nstorage.getAllKeys({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.storage.getAllKeys({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('storage/getAllKeys', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('storage/getAllKeys', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/storageRemove.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet storage = wya.requireModule('storage')\nstorage.remove({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.storage.remove({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('storage/remove', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('storage/remove', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/storageSet.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet storage = wya.requireModule('storage')\nstorage.set({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.storage.set({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('storage/set', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('storage/set', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/styleSetBadge.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet style = wya.requireModule('style')\nstyle.setBadge({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.style.setBadge({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('style/setBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('style/setBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/styleSetStatusBar.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nstyle | 状态栏样式 | str | light | dark,light\ncolor | 状态栏背景颜色，只 Android 5.0 及以上有效 | str | #000 | -\nanimated | 是否有动画效果，只iOS有效 | bool | true | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet style = wya.requireModule('style')\nstyle.setStatusBar({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.style.setStatusBar({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('style/setStatusBar', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('style/setStatusBar', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/styleSetWin.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet style = wya.requireModule('style')\nstyle.setWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.style.setWin({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('style/setWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('style/setWin', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemCall.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.call({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.call({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemContacts.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n在应用内打开系统通讯录界面选择联系人\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tlist: [\n\t\t\t{\n\t\t\t\tname: \"\", // 姓名\n\t\t\t\tphone: \"\", // 电话号码\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"\", // 姓名\n\t\t\t\tphone: \"\", // 电话号码\n\t\t\t}\n\t\t]\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.contacts({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.contacts({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/contacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/contacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemGetBattery.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.getBattery({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.getBattery({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/getBattery', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/getBattery', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemGetNetwork.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.getNetwork({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.getNetwork({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/getNetwork', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/getNetwork', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemMail.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nrecipients | 电话号码 | arr | - | ['tech@weiyian.com']\nsubject | 邮件主题 | str | - | -\nbody | 邮件内容 | str | - | -\n~~attachments~~ | ~~附件地址~~ | ~~arr~~ | - | -\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.mail({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.mail({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/systemSms.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n调用系统短信界面发送短信，或者后台直接发送短信\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nnumbers | 电话号码 | arr | - | ['10086']\ntext | 文本内容 | str | - | -\nsilent | 是否后台发送，只支持Android | bool | false | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet system = wya.requireModule('system')\nsystem.sms({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.system.sms({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('system/sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('system/sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uploadCancel.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet upload = wya.requireModule('upload')\nupload.cancel({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.upload.cancel({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('upload/cancel', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('upload/cancel', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uploadPause.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet upload = wya.requireModule('upload')\nupload.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.upload.pause({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('upload/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('upload/pause', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uploadRestart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet upload = wya.requireModule('upload')\nupload.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.upload.restart({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('upload/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('upload/restart', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uploadResume.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet upload = wya.requireModule('upload')\nupload.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.upload.resume({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('upload/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('upload/resume', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/uploadStart.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '响应成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet upload = wya.requireModule('upload')\nupload.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.upload.start({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('upload/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('upload/start', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/videoOpen.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n打开系统视频播放器\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 本地文件路径（支持fs://路径协议）或者网络资源地址 | str | - | 'fs://res/1.mp4'\n\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nlet video = wya.requireModule('video')\nvideo.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nimport wya from 'wya-js-sdk';\n\nwya.video.open({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('video/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('video/open', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "./src/pages/components/methods/detail/modules/root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../sdk/dist/wya.umd.js
var wya_umd = __webpack_require__("../sdk/dist/wya.umd.js");
var wya_umd_default = /*#__PURE__*/__webpack_require__.n(wya_umd);

// EXTERNAL MODULE: ./src/pages/components/_common/toast/toast.js + 5 modules
var toast = __webpack_require__("./src/pages/components/_common/toast/toast.js");

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/navigatorPush.md
var navigatorPush = __webpack_require__("../../docs/methods/navigatorPush.md");
var navigatorPush_default = /*#__PURE__*/__webpack_require__.n(navigatorPush);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/navigatorPush.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var navigatorPush_invoke = function invoke() {
  wya_umd_default.a.invoke('navigator/push', {// ...
  }).then(function (res) {
    res = _typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_navigatorPush = ({
  to: '/methods/navigatorPush',
  title: 'navigator/push',
  label: '',
  invoke: navigatorPush_invoke,
  markdown: navigatorPush_default.a,
  param: {
    name: '',
    title: '',
    url: '',
    pageParam: {},
    scrollToTop: false,
    vScrollBarEnabled: true,
    hScrollBarEnabled: true,
    scaleEnabled: false,
    hideTopBar: true,
    hideBottomBar: true,
    animation: 'card',
    replace: false
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/navigatorPop.md
var navigatorPop = __webpack_require__("../../docs/methods/navigatorPop.md");
var navigatorPop_default = /*#__PURE__*/__webpack_require__.n(navigatorPop);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/navigatorPop.js
function navigatorPop_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { navigatorPop_typeof = function _typeof(obj) { return typeof obj; }; } else { navigatorPop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return navigatorPop_typeof(obj); }





var navigatorPop_invoke = function invoke() {
  wya_umd_default.a.invoke('navigator/pop', {// ...
  }).then(function (res) {
    res = navigatorPop_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_navigatorPop = ({
  to: '/methods/navigatorPop',
  title: 'navigator/pop',
  label: '',
  invoke: navigatorPop_invoke,
  markdown: navigatorPop_default.a,
  param: {
    name: '',
    animation: 'card'
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appInstall.md
var appInstall = __webpack_require__("../../docs/methods/appInstall.md");
var appInstall_default = /*#__PURE__*/__webpack_require__.n(appInstall);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appInstall.js
function appInstall_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appInstall_typeof = function _typeof(obj) { return typeof obj; }; } else { appInstall_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appInstall_typeof(obj); }





var appInstall_invoke = function invoke() {
  wya_umd_default.a.invoke('app/install', {// ...
  }).then(function (res) {
    res = appInstall_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appInstall = ({
  to: '/methods/appInstall',
  title: 'app/install',
  label: '',
  invoke: appInstall_invoke,
  markdown: appInstall_default.a,
  param: {
    url: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appUninstall.md
var appUninstall = __webpack_require__("../../docs/methods/appUninstall.md");
var appUninstall_default = /*#__PURE__*/__webpack_require__.n(appUninstall);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appUninstall.js
function appUninstall_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appUninstall_typeof = function _typeof(obj) { return typeof obj; }; } else { appUninstall_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appUninstall_typeof(obj); }





var appUninstall_invoke = function invoke() {
  wya_umd_default.a.invoke('app/uninstall', {// ...
  }).then(function (res) {
    res = appUninstall_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appUninstall = ({
  to: '/methods/appUninstall',
  title: 'app/uninstall',
  label: '',
  invoke: appUninstall_invoke,
  markdown: appUninstall_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appOpen.md
var appOpen = __webpack_require__("../../docs/methods/appOpen.md");
var appOpen_default = /*#__PURE__*/__webpack_require__.n(appOpen);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appOpen.js
function appOpen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appOpen_typeof = function _typeof(obj) { return typeof obj; }; } else { appOpen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appOpen_typeof(obj); }





var appOpen_invoke = function invoke() {
  wya_umd_default.a.invoke('app/open', {// ...
  }).then(function (res) {
    res = appOpen_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appOpen = ({
  to: '/methods/appOpen',
  title: 'app/open',
  label: '',
  invoke: appOpen_invoke,
  markdown: appOpen_default.a,
  param: {
    param: {},
    scheme: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appReboot.md
var appReboot = __webpack_require__("../../docs/methods/appReboot.md");
var appReboot_default = /*#__PURE__*/__webpack_require__.n(appReboot);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appReboot.js
function appReboot_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appReboot_typeof = function _typeof(obj) { return typeof obj; }; } else { appReboot_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appReboot_typeof(obj); }





var appReboot_invoke = function invoke() {
  wya_umd_default.a.invoke('app/reboot', {// ...
  }).then(function (res) {
    res = appReboot_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appReboot = ({
  to: '/methods/appReboot',
  title: 'app/reboot',
  label: '',
  invoke: appReboot_invoke,
  markdown: appReboot_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/appHas.md
var appHas = __webpack_require__("../../docs/methods/appHas.md");
var appHas_default = /*#__PURE__*/__webpack_require__.n(appHas);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/appHas.js
function appHas_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { appHas_typeof = function _typeof(obj) { return typeof obj; }; } else { appHas_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return appHas_typeof(obj); }





var appHas_invoke = function invoke() {
  wya_umd_default.a.invoke('app/has', {// ...
  }).then(function (res) {
    res = appHas_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_appHas = ({
  to: '/methods/appHas',
  title: 'app/has',
  label: '',
  invoke: appHas_invoke,
  markdown: appHas_default.a,
  param: {
    scheme: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/clipboardGet.md
var clipboardGet = __webpack_require__("../../docs/methods/clipboardGet.md");
var clipboardGet_default = /*#__PURE__*/__webpack_require__.n(clipboardGet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/clipboardGet.js
function clipboardGet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboardGet_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboardGet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboardGet_typeof(obj); }





var clipboardGet_invoke = function invoke() {
  wya_umd_default.a.invoke('clipboard/get', {// ...
  }).then(function (res) {
    res = clipboardGet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_clipboardGet = ({
  to: '/methods/clipboardGet',
  title: 'clipboard/get',
  label: '',
  invoke: clipboardGet_invoke,
  markdown: clipboardGet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/clipboardSet.md
var clipboardSet = __webpack_require__("../../docs/methods/clipboardSet.md");
var clipboardSet_default = /*#__PURE__*/__webpack_require__.n(clipboardSet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/clipboardSet.js
function clipboardSet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboardSet_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboardSet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboardSet_typeof(obj); }





var clipboardSet_invoke = function invoke() {
  wya_umd_default.a.invoke('clipboard/set', {// ...
  }).then(function (res) {
    res = clipboardSet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_clipboardSet = ({
  to: '/methods/clipboardSet',
  title: 'clipboard/set',
  label: '',
  invoke: clipboardSet_invoke,
  markdown: clipboardSet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/storageGet.md
var storageGet = __webpack_require__("../../docs/methods/storageGet.md");
var storageGet_default = /*#__PURE__*/__webpack_require__.n(storageGet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/storageGet.js
function storageGet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { storageGet_typeof = function _typeof(obj) { return typeof obj; }; } else { storageGet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return storageGet_typeof(obj); }





var storageGet_invoke = function invoke() {
  wya_umd_default.a.invoke('storage/get', {// ...
  }).then(function (res) {
    res = storageGet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_storageGet = ({
  to: '/methods/storageGet',
  title: 'storage/get',
  label: '',
  invoke: storageGet_invoke,
  markdown: storageGet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/storageSet.md
var storageSet = __webpack_require__("../../docs/methods/storageSet.md");
var storageSet_default = /*#__PURE__*/__webpack_require__.n(storageSet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/storageSet.js
function storageSet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { storageSet_typeof = function _typeof(obj) { return typeof obj; }; } else { storageSet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return storageSet_typeof(obj); }





var storageSet_invoke = function invoke() {
  wya_umd_default.a.invoke('storage/set', {// ...
  }).then(function (res) {
    res = storageSet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_storageSet = ({
  to: '/methods/storageSet',
  title: 'storage/set',
  label: '',
  invoke: storageSet_invoke,
  markdown: storageSet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/storageRemove.md
var storageRemove = __webpack_require__("../../docs/methods/storageRemove.md");
var storageRemove_default = /*#__PURE__*/__webpack_require__.n(storageRemove);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/storageRemove.js
function storageRemove_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { storageRemove_typeof = function _typeof(obj) { return typeof obj; }; } else { storageRemove_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return storageRemove_typeof(obj); }





var storageRemove_invoke = function invoke() {
  wya_umd_default.a.invoke('storage/remove', {// ...
  }).then(function (res) {
    res = storageRemove_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_storageRemove = ({
  to: '/methods/storageRemove',
  title: 'storage/remove',
  label: '',
  invoke: storageRemove_invoke,
  markdown: storageRemove_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/storageClear.md
var storageClear = __webpack_require__("../../docs/methods/storageClear.md");
var storageClear_default = /*#__PURE__*/__webpack_require__.n(storageClear);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/storageClear.js
function storageClear_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { storageClear_typeof = function _typeof(obj) { return typeof obj; }; } else { storageClear_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return storageClear_typeof(obj); }





var storageClear_invoke = function invoke() {
  wya_umd_default.a.invoke('storage/clear', {// ...
  }).then(function (res) {
    res = storageClear_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_storageClear = ({
  to: '/methods/storageClear',
  title: 'storage/clear',
  label: '',
  invoke: storageClear_invoke,
  markdown: storageClear_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/storageGetAllKeys.md
var storageGetAllKeys = __webpack_require__("../../docs/methods/storageGetAllKeys.md");
var storageGetAllKeys_default = /*#__PURE__*/__webpack_require__.n(storageGetAllKeys);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/storageGetAllKeys.js
function storageGetAllKeys_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { storageGetAllKeys_typeof = function _typeof(obj) { return typeof obj; }; } else { storageGetAllKeys_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return storageGetAllKeys_typeof(obj); }





var storageGetAllKeys_invoke = function invoke() {
  wya_umd_default.a.invoke('storage/getAllKeys', {// ...
  }).then(function (res) {
    res = storageGetAllKeys_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_storageGetAllKeys = ({
  to: '/methods/storageGetAllKeys',
  title: 'storage/getAllKeys',
  label: '',
  invoke: storageGetAllKeys_invoke,
  markdown: storageGetAllKeys_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/photoGet.md
var photoGet = __webpack_require__("../../docs/methods/photoGet.md");
var photoGet_default = /*#__PURE__*/__webpack_require__.n(photoGet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/photoGet.js
function photoGet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { photoGet_typeof = function _typeof(obj) { return typeof obj; }; } else { photoGet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return photoGet_typeof(obj); }





var photoGet_invoke = function invoke() {
  wya_umd_default.a.invoke('photo/get', {// ...
  }).then(function (res) {
    res = photoGet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_photoGet = ({
  to: '/methods/photoGet',
  title: 'photo/get',
  label: '',
  invoke: photoGet_invoke,
  markdown: photoGet_default.a,
  param: {
    sourceType: 'camera',
    encodingType: 'png',
    mediaValue: 'pic',
    destinationType: 'url',
    direction: false,
    allowEdit: false,
    preview: false,
    quality: 50,
    videoQuality: 'high',
    targetWidth: '',
    targetHeight: '',
    saveToPhotoAlbum: false,
    groupName: false
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/photoSave.md
var photoSave = __webpack_require__("../../docs/methods/photoSave.md");
var photoSave_default = /*#__PURE__*/__webpack_require__.n(photoSave);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/photoSave.js
function photoSave_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { photoSave_typeof = function _typeof(obj) { return typeof obj; }; } else { photoSave_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return photoSave_typeof(obj); }





var photoSave_invoke = function invoke() {
  wya_umd_default.a.invoke('photo/save', {// ...
  }).then(function (res) {
    res = photoSave_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_photoSave = ({
  to: '/methods/photoSave',
  title: 'photo/save',
  label: '',
  invoke: photoSave_invoke,
  markdown: photoSave_default.a,
  param: {
    url: '',
    mediaType: 'pic',
    groupName: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/notificationAdd.md
var notificationAdd = __webpack_require__("../../docs/methods/notificationAdd.md");
var notificationAdd_default = /*#__PURE__*/__webpack_require__.n(notificationAdd);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/notificationAdd.js
function notificationAdd_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { notificationAdd_typeof = function _typeof(obj) { return typeof obj; }; } else { notificationAdd_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return notificationAdd_typeof(obj); }





var notificationAdd_invoke = function invoke() {
  wya_umd_default.a.invoke('notification/add', {// ...
  }).then(function (res) {
    res = notificationAdd_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_notificationAdd = ({
  to: '/methods/notificationAdd',
  title: 'notification/add',
  label: '',
  invoke: notificationAdd_invoke,
  markdown: notificationAdd_default.a,
  param: {
    vibrate: [100, 500, 100, 500],
    sound: 'default',
    light: false,
    notify: {
      title: '测试',
      content: '测试',
      extra: {
        name: '1'
      },
      cover: false
    },
    timestamp: new Date().getTime() + 30000
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/notificationRemove.md
var notificationRemove = __webpack_require__("../../docs/methods/notificationRemove.md");
var notificationRemove_default = /*#__PURE__*/__webpack_require__.n(notificationRemove);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/notificationRemove.js
function notificationRemove_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { notificationRemove_typeof = function _typeof(obj) { return typeof obj; }; } else { notificationRemove_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return notificationRemove_typeof(obj); }





var notificationRemove_invoke = function invoke() {
  wya_umd_default.a.invoke('notification/remove', {// ...
  }).then(function (res) {
    res = notificationRemove_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_notificationRemove = ({
  to: '/methods/notificationRemove',
  title: 'notification/remove',
  label: '',
  invoke: notificationRemove_invoke,
  markdown: notificationRemove_default.a,
  param: {
    id: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/floatBallShow.md
var floatBallShow = __webpack_require__("../../docs/methods/floatBallShow.md");
var floatBallShow_default = /*#__PURE__*/__webpack_require__.n(floatBallShow);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/floatBallShow.js
function floatBallShow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { floatBallShow_typeof = function _typeof(obj) { return typeof obj; }; } else { floatBallShow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return floatBallShow_typeof(obj); }





var floatBallShow_invoke = function invoke() {
  wya_umd_default.a.invoke('float/ballShow', {// ...
  }).then(function (res) {
    res = floatBallShow_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_floatBallShow = ({
  to: '/methods/floatBallShow',
  title: 'float/ballShow',
  label: '',
  invoke: floatBallShow_invoke,
  markdown: floatBallShow_default.a,
  param: {
    preventDefault: false,
    iconPath: '/image/icon.png',
    duration: 5000
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/floatBallHide.md
var floatBallHide = __webpack_require__("../../docs/methods/floatBallHide.md");
var floatBallHide_default = /*#__PURE__*/__webpack_require__.n(floatBallHide);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/floatBallHide.js
function floatBallHide_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { floatBallHide_typeof = function _typeof(obj) { return typeof obj; }; } else { floatBallHide_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return floatBallHide_typeof(obj); }





var floatBallHide_invoke = function invoke() {
  wya_umd_default.a.invoke('float/ballHide', {// ...
  }).then(function (res) {
    res = floatBallHide_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_floatBallHide = ({
  to: '/methods/floatBallHide',
  title: 'float/ballHide',
  label: '',
  invoke: floatBallHide_invoke,
  markdown: floatBallHide_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemSms.md
var systemSms = __webpack_require__("../../docs/methods/systemSms.md");

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemSms.js
function systemSms_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemSms_typeof = function _typeof(obj) { return typeof obj; }; } else { systemSms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemSms_typeof(obj); }





var systemSms_invoke = function invoke() {
  wya_umd_default.a.invoke('system/sms', {// ...
  }).then(function (res) {
    res = systemSms_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemSms = ({
  to: '/methods/systemSms',
  title: 'system/sms',
  label: '',
  invoke: systemSms_invoke,
  markdown: {
    numbers: ['10086'],
    text: '测试',
    silent: false
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemMail.md
var systemMail = __webpack_require__("../../docs/methods/systemMail.md");
var systemMail_default = /*#__PURE__*/__webpack_require__.n(systemMail);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemMail.js
function systemMail_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemMail_typeof = function _typeof(obj) { return typeof obj; }; } else { systemMail_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemMail_typeof(obj); }





var systemMail_invoke = function invoke() {
  wya_umd_default.a.invoke('system/mail', {// ...
  }).then(function (res) {
    res = systemMail_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemMail = ({
  to: '/methods/systemMail',
  title: 'system/mail',
  label: '',
  invoke: systemMail_invoke,
  markdown: systemMail_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemContacts.md
var systemContacts = __webpack_require__("../../docs/methods/systemContacts.md");
var systemContacts_default = /*#__PURE__*/__webpack_require__.n(systemContacts);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemContacts.js
function systemContacts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemContacts_typeof = function _typeof(obj) { return typeof obj; }; } else { systemContacts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemContacts_typeof(obj); }





var systemContacts_invoke = function invoke() {
  wya_umd_default.a.invoke('system/contacts', {// ...
  }).then(function (res) {
    res = systemContacts_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemContacts = ({
  to: '/methods/systemContacts',
  title: 'system/contacts',
  label: '',
  invoke: systemContacts_invoke,
  markdown: systemContacts_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemCall.md
var systemCall = __webpack_require__("../../docs/methods/systemCall.md");
var systemCall_default = /*#__PURE__*/__webpack_require__.n(systemCall);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemCall.js
function systemCall_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemCall_typeof = function _typeof(obj) { return typeof obj; }; } else { systemCall_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemCall_typeof(obj); }





var systemCall_invoke = function invoke() {
  wya_umd_default.a.invoke('system/call', {// ...
  }).then(function (res) {
    res = systemCall_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemCall = ({
  to: '/methods/systemCall',
  title: 'system/call',
  label: '',
  invoke: systemCall_invoke,
  markdown: systemCall_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemGetBattery.md
var systemGetBattery = __webpack_require__("../../docs/methods/systemGetBattery.md");
var systemGetBattery_default = /*#__PURE__*/__webpack_require__.n(systemGetBattery);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemGetBattery.js
function systemGetBattery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemGetBattery_typeof = function _typeof(obj) { return typeof obj; }; } else { systemGetBattery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemGetBattery_typeof(obj); }





var systemGetBattery_invoke = function invoke() {
  wya_umd_default.a.invoke('system/getBattery', {// ...
  }).then(function (res) {
    res = systemGetBattery_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemGetBattery = ({
  to: '/methods/systemGetBattery',
  title: 'system/getBattery',
  label: '',
  invoke: systemGetBattery_invoke,
  markdown: systemGetBattery_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/systemGetNetwork.md
var systemGetNetwork = __webpack_require__("../../docs/methods/systemGetNetwork.md");
var systemGetNetwork_default = /*#__PURE__*/__webpack_require__.n(systemGetNetwork);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/systemGetNetwork.js
function systemGetNetwork_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { systemGetNetwork_typeof = function _typeof(obj) { return typeof obj; }; } else { systemGetNetwork_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return systemGetNetwork_typeof(obj); }





var systemGetNetwork_invoke = function invoke() {
  wya_umd_default.a.invoke('system/getNetwork', {// ...
  }).then(function (res) {
    res = systemGetNetwork_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_systemGetNetwork = ({
  to: '/methods/systemGetNetwork',
  title: 'system/getNetwork',
  label: '',
  invoke: systemGetNetwork_invoke,
  markdown: systemGetNetwork_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/screenOrientate.md
var screenOrientate = __webpack_require__("../../docs/methods/screenOrientate.md");
var screenOrientate_default = /*#__PURE__*/__webpack_require__.n(screenOrientate);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/screenOrientate.js
function screenOrientate_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { screenOrientate_typeof = function _typeof(obj) { return typeof obj; }; } else { screenOrientate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return screenOrientate_typeof(obj); }





var screenOrientate_invoke = function invoke() {
  wya_umd_default.a.invoke('screen/orientate', {// ...
  }).then(function (res) {
    res = screenOrientate_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_screenOrientate = ({
  to: '/methods/screenOrientate',
  title: 'screen/orientate',
  label: '',
  invoke: screenOrientate_invoke,
  markdown: screenOrientate_default.a,
  param: {
    orientation: 'auto'
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/screenKeepOn.md
var screenKeepOn = __webpack_require__("../../docs/methods/screenKeepOn.md");
var screenKeepOn_default = /*#__PURE__*/__webpack_require__.n(screenKeepOn);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/screenKeepOn.js
function screenKeepOn_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { screenKeepOn_typeof = function _typeof(obj) { return typeof obj; }; } else { screenKeepOn_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return screenKeepOn_typeof(obj); }





var screenKeepOn_invoke = function invoke() {
  wya_umd_default.a.invoke('screen/keepOn', {// ...
  }).then(function (res) {
    res = screenKeepOn_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_screenKeepOn = ({
  to: '/methods/screenKeepOn',
  title: 'screen/keepOn',
  label: '',
  invoke: screenKeepOn_invoke,
  markdown: screenKeepOn_default.a,
  param: {
    keepOn: false
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/screenToLauncher.md
var screenToLauncher = __webpack_require__("../../docs/methods/screenToLauncher.md");
var screenToLauncher_default = /*#__PURE__*/__webpack_require__.n(screenToLauncher);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/screenToLauncher.js
function screenToLauncher_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { screenToLauncher_typeof = function _typeof(obj) { return typeof obj; }; } else { screenToLauncher_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return screenToLauncher_typeof(obj); }





var screenToLauncher_invoke = function invoke() {
  wya_umd_default.a.invoke('screen/toLauncher', {// ...
  }).then(function (res) {
    res = screenToLauncher_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_screenToLauncher = ({
  to: '/methods/screenToLauncher',
  title: 'screen/toLauncher',
  label: '',
  invoke: screenToLauncher_invoke,
  markdown: screenToLauncher_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/styleSetWin.md
var styleSetWin = __webpack_require__("../../docs/methods/styleSetWin.md");
var styleSetWin_default = /*#__PURE__*/__webpack_require__.n(styleSetWin);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/styleSetWin.js
function styleSetWin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { styleSetWin_typeof = function _typeof(obj) { return typeof obj; }; } else { styleSetWin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return styleSetWin_typeof(obj); }





var styleSetWin_invoke = function invoke() {
  wya_umd_default.a.invoke('style/setWin', {// ...
  }).then(function (res) {
    res = styleSetWin_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_styleSetWin = ({
  to: '/methods/styleSetWin',
  title: 'style/setWin',
  label: '',
  invoke: styleSetWin_invoke,
  markdown: styleSetWin_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/styleSetStatusBar.md
var styleSetStatusBar = __webpack_require__("../../docs/methods/styleSetStatusBar.md");
var styleSetStatusBar_default = /*#__PURE__*/__webpack_require__.n(styleSetStatusBar);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/styleSetStatusBar.js
function styleSetStatusBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { styleSetStatusBar_typeof = function _typeof(obj) { return typeof obj; }; } else { styleSetStatusBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return styleSetStatusBar_typeof(obj); }





var styleSetStatusBar_invoke = function invoke() {
  wya_umd_default.a.invoke('style/setStatusBar', {// ...
  }).then(function (res) {
    res = styleSetStatusBar_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_styleSetStatusBar = ({
  to: '/methods/styleSetStatusBar',
  title: 'style/setStatusBar',
  label: '',
  invoke: styleSetStatusBar_invoke,
  markdown: styleSetStatusBar_default.a,
  param: {
    style: 'light',
    color: '#000',
    animated: true
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/styleSetBadge.md
var styleSetBadge = __webpack_require__("../../docs/methods/styleSetBadge.md");
var styleSetBadge_default = /*#__PURE__*/__webpack_require__.n(styleSetBadge);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/styleSetBadge.js
function styleSetBadge_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { styleSetBadge_typeof = function _typeof(obj) { return typeof obj; }; } else { styleSetBadge_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return styleSetBadge_typeof(obj); }





var styleSetBadge_invoke = function invoke() {
  wya_umd_default.a.invoke('style/setBadge', {// ...
  }).then(function (res) {
    res = styleSetBadge_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_styleSetBadge = ({
  to: '/methods/styleSetBadge',
  title: 'style/setBadge',
  label: '',
  invoke: styleSetBadge_invoke,
  markdown: styleSetBadge_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/memoryGetCache.md
var memoryGetCache = __webpack_require__("../../docs/methods/memoryGetCache.md");
var memoryGetCache_default = /*#__PURE__*/__webpack_require__.n(memoryGetCache);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/memoryGetCache.js
function memoryGetCache_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { memoryGetCache_typeof = function _typeof(obj) { return typeof obj; }; } else { memoryGetCache_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return memoryGetCache_typeof(obj); }





var memoryGetCache_invoke = function invoke() {
  wya_umd_default.a.invoke('memory/getCache', {// ...
  }).then(function (res) {
    res = memoryGetCache_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_memoryGetCache = ({
  to: '/methods/memoryGetCache',
  title: 'memory/getCache',
  label: '',
  invoke: memoryGetCache_invoke,
  markdown: memoryGetCache_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/memoryClearCache.md
var memoryClearCache = __webpack_require__("../../docs/methods/memoryClearCache.md");
var memoryClearCache_default = /*#__PURE__*/__webpack_require__.n(memoryClearCache);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/memoryClearCache.js
function memoryClearCache_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { memoryClearCache_typeof = function _typeof(obj) { return typeof obj; }; } else { memoryClearCache_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return memoryClearCache_typeof(obj); }





var memoryClearCache_invoke = function invoke() {
  wya_umd_default.a.invoke('memory/clearCache', {// ...
  }).then(function (res) {
    res = memoryClearCache_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_memoryClearCache = ({
  to: '/methods/memoryClearCache',
  title: 'memory/clearCache',
  label: '',
  invoke: memoryClearCache_invoke,
  markdown: memoryClearCache_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/memoryGetTotal.md
var memoryGetTotal = __webpack_require__("../../docs/methods/memoryGetTotal.md");
var memoryGetTotal_default = /*#__PURE__*/__webpack_require__.n(memoryGetTotal);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/memoryGetTotal.js
function memoryGetTotal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { memoryGetTotal_typeof = function _typeof(obj) { return typeof obj; }; } else { memoryGetTotal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return memoryGetTotal_typeof(obj); }





var memoryGetTotal_invoke = function invoke() {
  wya_umd_default.a.invoke('memory/getTotal', {// ...
  }).then(function (res) {
    res = memoryGetTotal_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_memoryGetTotal = ({
  to: '/methods/memoryGetTotal',
  title: 'memory/getTotal',
  label: '',
  invoke: memoryGetTotal_invoke,
  markdown: memoryGetTotal_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/memoryGetFree.md
var memoryGetFree = __webpack_require__("../../docs/methods/memoryGetFree.md");
var memoryGetFree_default = /*#__PURE__*/__webpack_require__.n(memoryGetFree);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/memoryGetFree.js
function memoryGetFree_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { memoryGetFree_typeof = function _typeof(obj) { return typeof obj; }; } else { memoryGetFree_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return memoryGetFree_typeof(obj); }





var memoryGetFree_invoke = function invoke() {
  wya_umd_default.a.invoke('memory/getFree', {// ...
  }).then(function (res) {
    res = memoryGetFree_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_memoryGetFree = ({
  to: '/methods/memoryGetFree',
  title: 'memory/getFree',
  label: '',
  invoke: memoryGetFree_invoke,
  markdown: memoryGetFree_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/recordStart.md
var recordStart = __webpack_require__("../../docs/methods/recordStart.md");
var recordStart_default = /*#__PURE__*/__webpack_require__.n(recordStart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/recordStart.js
function recordStart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recordStart_typeof = function _typeof(obj) { return typeof obj; }; } else { recordStart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recordStart_typeof(obj); }





var recordStart_invoke = function invoke() {
  wya_umd_default.a.invoke('record/start', {// ...
  }).then(function (res) {
    res = recordStart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_recordStart = ({
  to: '/methods/recordStart',
  title: 'record/start',
  label: '',
  invoke: recordStart_invoke,
  markdown: recordStart_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/recordStop.md
var recordStop = __webpack_require__("../../docs/methods/recordStop.md");
var recordStop_default = /*#__PURE__*/__webpack_require__.n(recordStop);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/recordStop.js
function recordStop_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recordStop_typeof = function _typeof(obj) { return typeof obj; }; } else { recordStop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recordStop_typeof(obj); }





var recordStop_invoke = function invoke() {
  wya_umd_default.a.invoke('record/stop', {// ...
  }).then(function (res) {
    res = recordStop_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_recordStop = ({
  to: '/methods/recordStop',
  title: 'record/stop',
  label: '',
  invoke: recordStop_invoke,
  markdown: recordStop_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/recordPause.md
var recordPause = __webpack_require__("../../docs/methods/recordPause.md");
var recordPause_default = /*#__PURE__*/__webpack_require__.n(recordPause);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/recordPause.js
function recordPause_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recordPause_typeof = function _typeof(obj) { return typeof obj; }; } else { recordPause_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recordPause_typeof(obj); }





var recordPause_invoke = function invoke() {
  wya_umd_default.a.invoke('record/pause', {// ...
  }).then(function (res) {
    res = recordPause_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_recordPause = ({
  to: '/methods/recordPause',
  title: 'record/pause',
  label: '',
  invoke: recordPause_invoke,
  markdown: recordPause_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/recordResume.md
var recordResume = __webpack_require__("../../docs/methods/recordResume.md");
var recordResume_default = /*#__PURE__*/__webpack_require__.n(recordResume);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/recordResume.js
function recordResume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recordResume_typeof = function _typeof(obj) { return typeof obj; }; } else { recordResume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recordResume_typeof(obj); }





var recordResume_invoke = function invoke() {
  wya_umd_default.a.invoke('record/resume', {// ...
  }).then(function (res) {
    res = recordResume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_recordResume = ({
  to: '/methods/recordResume',
  title: 'record/resume',
  label: '',
  invoke: recordResume_invoke,
  markdown: recordResume_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/recordRestart.md
var recordRestart = __webpack_require__("../../docs/methods/recordRestart.md");
var recordRestart_default = /*#__PURE__*/__webpack_require__.n(recordRestart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/recordRestart.js
function recordRestart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { recordRestart_typeof = function _typeof(obj) { return typeof obj; }; } else { recordRestart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return recordRestart_typeof(obj); }





var recordRestart_invoke = function invoke() {
  wya_umd_default.a.invoke('record/restart', {// ...
  }).then(function (res) {
    res = recordRestart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_recordRestart = ({
  to: '/methods/recordRestart',
  title: 'record/restart',
  label: '',
  invoke: recordRestart_invoke,
  markdown: recordRestart_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/audioStart.md
var audioStart = __webpack_require__("../../docs/methods/audioStart.md");
var audioStart_default = /*#__PURE__*/__webpack_require__.n(audioStart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/audioStart.js
function audioStart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { audioStart_typeof = function _typeof(obj) { return typeof obj; }; } else { audioStart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return audioStart_typeof(obj); }





var audioStart_invoke = function invoke() {
  wya_umd_default.a.invoke('audio/start', {// ...
  }).then(function (res) {
    res = audioStart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_audioStart = ({
  to: '/methods/audioStart',
  title: 'audio/start',
  label: '',
  invoke: audioStart_invoke,
  markdown: audioStart_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/audioStop.md
var audioStop = __webpack_require__("../../docs/methods/audioStop.md");
var audioStop_default = /*#__PURE__*/__webpack_require__.n(audioStop);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/audioStop.js
function audioStop_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { audioStop_typeof = function _typeof(obj) { return typeof obj; }; } else { audioStop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return audioStop_typeof(obj); }





var audioStop_invoke = function invoke() {
  wya_umd_default.a.invoke('audio/stop', {// ...
  }).then(function (res) {
    res = audioStop_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_audioStop = ({
  to: '/methods/audioStop',
  title: 'audio/stop',
  label: '',
  invoke: audioStop_invoke,
  markdown: audioStop_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/audioPause.md
var audioPause = __webpack_require__("../../docs/methods/audioPause.md");
var audioPause_default = /*#__PURE__*/__webpack_require__.n(audioPause);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/audioPause.js
function audioPause_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { audioPause_typeof = function _typeof(obj) { return typeof obj; }; } else { audioPause_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return audioPause_typeof(obj); }





var audioPause_invoke = function invoke() {
  wya_umd_default.a.invoke('audio/pause', {// ...
  }).then(function (res) {
    res = audioPause_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_audioPause = ({
  to: '/methods/audioPause',
  title: 'audio/pause',
  label: '',
  invoke: audioPause_invoke,
  markdown: audioPause_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/audioResume.md
var audioResume = __webpack_require__("../../docs/methods/audioResume.md");
var audioResume_default = /*#__PURE__*/__webpack_require__.n(audioResume);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/audioResume.js
function audioResume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { audioResume_typeof = function _typeof(obj) { return typeof obj; }; } else { audioResume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return audioResume_typeof(obj); }





var audioResume_invoke = function invoke() {
  wya_umd_default.a.invoke('audio/resume', {// ...
  }).then(function (res) {
    res = audioResume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_audioResume = ({
  to: '/methods/audioResume',
  title: 'audio/resume',
  label: '',
  invoke: audioResume_invoke,
  markdown: audioResume_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/audioRestart.md
var audioRestart = __webpack_require__("../../docs/methods/audioRestart.md");
var audioRestart_default = /*#__PURE__*/__webpack_require__.n(audioRestart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/audioRestart.js
function audioRestart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { audioRestart_typeof = function _typeof(obj) { return typeof obj; }; } else { audioRestart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return audioRestart_typeof(obj); }





var audioRestart_invoke = function invoke() {
  wya_umd_default.a.invoke('audio/restart', {// ...
  }).then(function (res) {
    res = audioRestart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_audioRestart = ({
  to: '/methods/audioRestart',
  title: 'audio/restart',
  label: '',
  invoke: audioRestart_invoke,
  markdown: audioRestart_default.a,
  param: {
    path: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/downloadStart.md
var downloadStart = __webpack_require__("../../docs/methods/downloadStart.md");
var downloadStart_default = /*#__PURE__*/__webpack_require__.n(downloadStart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/downloadStart.js
function downloadStart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { downloadStart_typeof = function _typeof(obj) { return typeof obj; }; } else { downloadStart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return downloadStart_typeof(obj); }





var downloadStart_invoke = function invoke() {
  wya_umd_default.a.invoke('download/start', {// ...
  }).then(function (res) {
    res = downloadStart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_downloadStart = ({
  to: '/methods/downloadStart',
  title: 'download/start',
  label: '',
  invoke: downloadStart_invoke,
  markdown: downloadStart_default.a,
  param: {
    url: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/downloadCancel.md
var downloadCancel = __webpack_require__("../../docs/methods/downloadCancel.md");
var downloadCancel_default = /*#__PURE__*/__webpack_require__.n(downloadCancel);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/downloadCancel.js
function downloadCancel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { downloadCancel_typeof = function _typeof(obj) { return typeof obj; }; } else { downloadCancel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return downloadCancel_typeof(obj); }





var downloadCancel_invoke = function invoke() {
  wya_umd_default.a.invoke('download/cancel', {// ...
  }).then(function (res) {
    res = downloadCancel_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_downloadCancel = ({
  to: '/methods/downloadCancel',
  title: 'download/cancel',
  label: '',
  invoke: downloadCancel_invoke,
  markdown: downloadCancel_default.a,
  param: {
    url: '',
    encode: true,
    path: '',
    report: false,
    allowResume: false
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/downloadPause.md
var downloadPause = __webpack_require__("../../docs/methods/downloadPause.md");
var downloadPause_default = /*#__PURE__*/__webpack_require__.n(downloadPause);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/downloadPause.js
function downloadPause_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { downloadPause_typeof = function _typeof(obj) { return typeof obj; }; } else { downloadPause_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return downloadPause_typeof(obj); }





var downloadPause_invoke = function invoke() {
  wya_umd_default.a.invoke('download/pause', {// ...
  }).then(function (res) {
    res = downloadPause_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_downloadPause = ({
  to: '/methods/downloadPause',
  title: 'download/pause',
  label: '',
  invoke: downloadPause_invoke,
  markdown: downloadPause_default.a,
  param: {
    url: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/downloadResume.md
var downloadResume = __webpack_require__("../../docs/methods/downloadResume.md");
var downloadResume_default = /*#__PURE__*/__webpack_require__.n(downloadResume);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/downloadResume.js
function downloadResume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { downloadResume_typeof = function _typeof(obj) { return typeof obj; }; } else { downloadResume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return downloadResume_typeof(obj); }





var downloadResume_invoke = function invoke() {
  wya_umd_default.a.invoke('download/resume', {// ...
  }).then(function (res) {
    res = downloadResume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_downloadResume = ({
  to: '/methods/downloadResume',
  title: 'download/resume',
  label: '',
  invoke: downloadResume_invoke,
  markdown: downloadResume_default.a,
  param: {
    url: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/downloadRestart.md
var downloadRestart = __webpack_require__("../../docs/methods/downloadRestart.md");
var downloadRestart_default = /*#__PURE__*/__webpack_require__.n(downloadRestart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/downloadRestart.js
function downloadRestart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { downloadRestart_typeof = function _typeof(obj) { return typeof obj; }; } else { downloadRestart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return downloadRestart_typeof(obj); }





var downloadRestart_invoke = function invoke() {
  wya_umd_default.a.invoke('download/restart', {// ...
  }).then(function (res) {
    res = downloadRestart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_downloadRestart = ({
  to: '/methods/downloadRestart',
  title: 'download/restart',
  label: '',
  invoke: downloadRestart_invoke,
  markdown: downloadRestart_default.a,
  param: {
    url: ''
  }
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uploadStart.md
var uploadStart = __webpack_require__("../../docs/methods/uploadStart.md");
var uploadStart_default = /*#__PURE__*/__webpack_require__.n(uploadStart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uploadStart.js
function uploadStart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uploadStart_typeof = function _typeof(obj) { return typeof obj; }; } else { uploadStart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uploadStart_typeof(obj); }





var uploadStart_invoke = function invoke() {
  wya_umd_default.a.invoke('upload/start', {// ...
  }).then(function (res) {
    res = uploadStart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uploadStart = ({
  to: '/methods/uploadStart',
  title: 'upload/start',
  label: '',
  invoke: uploadStart_invoke,
  markdown: uploadStart_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uploadCancel.md
var uploadCancel = __webpack_require__("../../docs/methods/uploadCancel.md");
var uploadCancel_default = /*#__PURE__*/__webpack_require__.n(uploadCancel);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uploadCancel.js
function uploadCancel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uploadCancel_typeof = function _typeof(obj) { return typeof obj; }; } else { uploadCancel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uploadCancel_typeof(obj); }





var uploadCancel_invoke = function invoke() {
  wya_umd_default.a.invoke('upload/cancel', {// ...
  }).then(function (res) {
    res = uploadCancel_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uploadCancel = ({
  to: '/methods/uploadCancel',
  title: 'upload/cancel',
  label: '',
  invoke: uploadCancel_invoke,
  markdown: uploadCancel_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uploadPause.md
var uploadPause = __webpack_require__("../../docs/methods/uploadPause.md");
var uploadPause_default = /*#__PURE__*/__webpack_require__.n(uploadPause);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uploadPause.js
function uploadPause_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uploadPause_typeof = function _typeof(obj) { return typeof obj; }; } else { uploadPause_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uploadPause_typeof(obj); }





var uploadPause_invoke = function invoke() {
  wya_umd_default.a.invoke('upload/pause', {// ...
  }).then(function (res) {
    res = uploadPause_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uploadPause = ({
  to: '/methods/uploadPause',
  title: 'upload/pause',
  label: '',
  invoke: uploadPause_invoke,
  markdown: uploadPause_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uploadResume.md
var uploadResume = __webpack_require__("../../docs/methods/uploadResume.md");
var uploadResume_default = /*#__PURE__*/__webpack_require__.n(uploadResume);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uploadResume.js
function uploadResume_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uploadResume_typeof = function _typeof(obj) { return typeof obj; }; } else { uploadResume_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uploadResume_typeof(obj); }





var uploadResume_invoke = function invoke() {
  wya_umd_default.a.invoke('upload/resume', {// ...
  }).then(function (res) {
    res = uploadResume_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uploadResume = ({
  to: '/methods/uploadResume',
  title: 'upload/resume',
  label: '',
  invoke: uploadResume_invoke,
  markdown: uploadResume_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/uploadRestart.md
var uploadRestart = __webpack_require__("../../docs/methods/uploadRestart.md");
var uploadRestart_default = /*#__PURE__*/__webpack_require__.n(uploadRestart);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/uploadRestart.js
function uploadRestart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { uploadRestart_typeof = function _typeof(obj) { return typeof obj; }; } else { uploadRestart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return uploadRestart_typeof(obj); }





var uploadRestart_invoke = function invoke() {
  wya_umd_default.a.invoke('upload/restart', {// ...
  }).then(function (res) {
    res = uploadRestart_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_uploadRestart = ({
  to: '/methods/uploadRestart',
  title: 'upload/restart',
  label: '',
  invoke: uploadRestart_invoke,
  markdown: uploadRestart_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/locationOpen.md
var locationOpen = __webpack_require__("../../docs/methods/locationOpen.md");
var locationOpen_default = /*#__PURE__*/__webpack_require__.n(locationOpen);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/locationOpen.js
function locationOpen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { locationOpen_typeof = function _typeof(obj) { return typeof obj; }; } else { locationOpen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return locationOpen_typeof(obj); }





var locationOpen_invoke = function invoke() {
  wya_umd_default.a.invoke('location/open', {// ...
  }).then(function (res) {
    res = locationOpen_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_locationOpen = ({
  to: '/methods/locationOpen',
  title: 'location/open',
  label: '',
  invoke: locationOpen_invoke,
  markdown: locationOpen_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/locationClose.md
var locationClose = __webpack_require__("../../docs/methods/locationClose.md");
var locationClose_default = /*#__PURE__*/__webpack_require__.n(locationClose);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/locationClose.js
function locationClose_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { locationClose_typeof = function _typeof(obj) { return typeof obj; }; } else { locationClose_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return locationClose_typeof(obj); }





var locationClose_invoke = function invoke() {
  wya_umd_default.a.invoke('location/close', {// ...
  }).then(function (res) {
    res = locationClose_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_locationClose = ({
  to: '/methods/locationClose',
  title: 'location/close',
  label: '',
  invoke: locationClose_invoke,
  markdown: locationClose_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/locationGet.md
var locationGet = __webpack_require__("../../docs/methods/locationGet.md");
var locationGet_default = /*#__PURE__*/__webpack_require__.n(locationGet);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/locationGet.js
function locationGet_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { locationGet_typeof = function _typeof(obj) { return typeof obj; }; } else { locationGet_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return locationGet_typeof(obj); }





var locationGet_invoke = function invoke() {
  wya_umd_default.a.invoke('location/get', {// ...
  }).then(function (res) {
    res = locationGet_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_locationGet = ({
  to: '/methods/locationGet',
  title: 'location/get',
  label: '',
  invoke: locationGet_invoke,
  markdown: locationGet_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/sensorOpen.md
var sensorOpen = __webpack_require__("../../docs/methods/sensorOpen.md");
var sensorOpen_default = /*#__PURE__*/__webpack_require__.n(sensorOpen);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/sensorOpen.js
function sensorOpen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sensorOpen_typeof = function _typeof(obj) { return typeof obj; }; } else { sensorOpen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sensorOpen_typeof(obj); }





var sensorOpen_invoke = function invoke() {
  wya_umd_default.a.invoke('sensor/open', {// ...
  }).then(function (res) {
    res = sensorOpen_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_sensorOpen = ({
  to: '/methods/sensorOpen',
  title: 'sensor/open',
  label: '',
  invoke: sensorOpen_invoke,
  markdown: sensorOpen_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/sensorClose.md
var sensorClose = __webpack_require__("../../docs/methods/sensorClose.md");
var sensorClose_default = /*#__PURE__*/__webpack_require__.n(sensorClose);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/sensorClose.js
function sensorClose_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sensorClose_typeof = function _typeof(obj) { return typeof obj; }; } else { sensorClose_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sensorClose_typeof(obj); }





var sensorClose_invoke = function invoke() {
  wya_umd_default.a.invoke('sensor/close', {// ...
  }).then(function (res) {
    res = sensorClose_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_sensorClose = ({
  to: '/methods/sensorClose',
  title: 'sensor/close',
  label: '',
  invoke: sensorClose_invoke,
  markdown: sensorClose_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/videoOpen.md
var videoOpen = __webpack_require__("../../docs/methods/videoOpen.md");
var videoOpen_default = /*#__PURE__*/__webpack_require__.n(videoOpen);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/videoOpen.js
function videoOpen_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { videoOpen_typeof = function _typeof(obj) { return typeof obj; }; } else { videoOpen_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return videoOpen_typeof(obj); }





var videoOpen_invoke = function invoke() {
  wya_umd_default.a.invoke('video/open', {// ...
  }).then(function (res) {
    res = videoOpen_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_videoOpen = ({
  to: '/methods/videoOpen',
  title: 'video/open',
  label: '',
  invoke: videoOpen_invoke,
  markdown: videoOpen_default.a
});
// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/root.js
/* concated harmony reexport navigatorPush */__webpack_require__.d(__webpack_exports__, "navigatorPush", function() { return modules_navigatorPush; });
/* concated harmony reexport navigatorPop */__webpack_require__.d(__webpack_exports__, "navigatorPop", function() { return modules_navigatorPop; });
/* concated harmony reexport appInstall */__webpack_require__.d(__webpack_exports__, "appInstall", function() { return modules_appInstall; });
/* concated harmony reexport appUninstall */__webpack_require__.d(__webpack_exports__, "appUninstall", function() { return modules_appUninstall; });
/* concated harmony reexport appOpen */__webpack_require__.d(__webpack_exports__, "appOpen", function() { return modules_appOpen; });
/* concated harmony reexport appReboot */__webpack_require__.d(__webpack_exports__, "appReboot", function() { return modules_appReboot; });
/* concated harmony reexport appHas */__webpack_require__.d(__webpack_exports__, "appHas", function() { return modules_appHas; });
/* concated harmony reexport clipboardGet */__webpack_require__.d(__webpack_exports__, "clipboardGet", function() { return modules_clipboardGet; });
/* concated harmony reexport clipboardSet */__webpack_require__.d(__webpack_exports__, "clipboardSet", function() { return modules_clipboardSet; });
/* concated harmony reexport storageGet */__webpack_require__.d(__webpack_exports__, "storageGet", function() { return modules_storageGet; });
/* concated harmony reexport storageSet */__webpack_require__.d(__webpack_exports__, "storageSet", function() { return modules_storageSet; });
/* concated harmony reexport storageRemove */__webpack_require__.d(__webpack_exports__, "storageRemove", function() { return modules_storageRemove; });
/* concated harmony reexport storageClear */__webpack_require__.d(__webpack_exports__, "storageClear", function() { return modules_storageClear; });
/* concated harmony reexport storageGetAllKeys */__webpack_require__.d(__webpack_exports__, "storageGetAllKeys", function() { return modules_storageGetAllKeys; });
/* concated harmony reexport photoGet */__webpack_require__.d(__webpack_exports__, "photoGet", function() { return modules_photoGet; });
/* concated harmony reexport photoSave */__webpack_require__.d(__webpack_exports__, "photoSave", function() { return modules_photoSave; });
/* concated harmony reexport notificationAdd */__webpack_require__.d(__webpack_exports__, "notificationAdd", function() { return modules_notificationAdd; });
/* concated harmony reexport notificationRemove */__webpack_require__.d(__webpack_exports__, "notificationRemove", function() { return modules_notificationRemove; });
/* concated harmony reexport floatBallShow */__webpack_require__.d(__webpack_exports__, "floatBallShow", function() { return modules_floatBallShow; });
/* concated harmony reexport floatBallHide */__webpack_require__.d(__webpack_exports__, "floatBallHide", function() { return modules_floatBallHide; });
/* concated harmony reexport systemSms */__webpack_require__.d(__webpack_exports__, "systemSms", function() { return modules_systemSms; });
/* concated harmony reexport systemMail */__webpack_require__.d(__webpack_exports__, "systemMail", function() { return modules_systemMail; });
/* concated harmony reexport systemContacts */__webpack_require__.d(__webpack_exports__, "systemContacts", function() { return modules_systemContacts; });
/* concated harmony reexport systemCall */__webpack_require__.d(__webpack_exports__, "systemCall", function() { return modules_systemCall; });
/* concated harmony reexport systemGetBattery */__webpack_require__.d(__webpack_exports__, "systemGetBattery", function() { return modules_systemGetBattery; });
/* concated harmony reexport systemGetNetwork */__webpack_require__.d(__webpack_exports__, "systemGetNetwork", function() { return modules_systemGetNetwork; });
/* concated harmony reexport screenOrientate */__webpack_require__.d(__webpack_exports__, "screenOrientate", function() { return modules_screenOrientate; });
/* concated harmony reexport screenKeepOn */__webpack_require__.d(__webpack_exports__, "screenKeepOn", function() { return modules_screenKeepOn; });
/* concated harmony reexport screenToLauncher */__webpack_require__.d(__webpack_exports__, "screenToLauncher", function() { return modules_screenToLauncher; });
/* concated harmony reexport styleSetWin */__webpack_require__.d(__webpack_exports__, "styleSetWin", function() { return modules_styleSetWin; });
/* concated harmony reexport styleSetStatusBar */__webpack_require__.d(__webpack_exports__, "styleSetStatusBar", function() { return modules_styleSetStatusBar; });
/* concated harmony reexport styleSetBadge */__webpack_require__.d(__webpack_exports__, "styleSetBadge", function() { return modules_styleSetBadge; });
/* concated harmony reexport memoryGetCache */__webpack_require__.d(__webpack_exports__, "memoryGetCache", function() { return modules_memoryGetCache; });
/* concated harmony reexport memoryClearCache */__webpack_require__.d(__webpack_exports__, "memoryClearCache", function() { return modules_memoryClearCache; });
/* concated harmony reexport memoryGetTotal */__webpack_require__.d(__webpack_exports__, "memoryGetTotal", function() { return modules_memoryGetTotal; });
/* concated harmony reexport memoryGetFree */__webpack_require__.d(__webpack_exports__, "memoryGetFree", function() { return modules_memoryGetFree; });
/* concated harmony reexport recordStart */__webpack_require__.d(__webpack_exports__, "recordStart", function() { return modules_recordStart; });
/* concated harmony reexport recordStop */__webpack_require__.d(__webpack_exports__, "recordStop", function() { return modules_recordStop; });
/* concated harmony reexport recordPause */__webpack_require__.d(__webpack_exports__, "recordPause", function() { return modules_recordPause; });
/* concated harmony reexport recordResume */__webpack_require__.d(__webpack_exports__, "recordResume", function() { return modules_recordResume; });
/* concated harmony reexport recordRestart */__webpack_require__.d(__webpack_exports__, "recordRestart", function() { return modules_recordRestart; });
/* concated harmony reexport audioStart */__webpack_require__.d(__webpack_exports__, "audioStart", function() { return modules_audioStart; });
/* concated harmony reexport audioStop */__webpack_require__.d(__webpack_exports__, "audioStop", function() { return modules_audioStop; });
/* concated harmony reexport audioPause */__webpack_require__.d(__webpack_exports__, "audioPause", function() { return modules_audioPause; });
/* concated harmony reexport audioResume */__webpack_require__.d(__webpack_exports__, "audioResume", function() { return modules_audioResume; });
/* concated harmony reexport audioRestart */__webpack_require__.d(__webpack_exports__, "audioRestart", function() { return modules_audioRestart; });
/* concated harmony reexport downloadStart */__webpack_require__.d(__webpack_exports__, "downloadStart", function() { return modules_downloadStart; });
/* concated harmony reexport downloadCancel */__webpack_require__.d(__webpack_exports__, "downloadCancel", function() { return modules_downloadCancel; });
/* concated harmony reexport downloadPause */__webpack_require__.d(__webpack_exports__, "downloadPause", function() { return modules_downloadPause; });
/* concated harmony reexport downloadResume */__webpack_require__.d(__webpack_exports__, "downloadResume", function() { return modules_downloadResume; });
/* concated harmony reexport downloadRestart */__webpack_require__.d(__webpack_exports__, "downloadRestart", function() { return modules_downloadRestart; });
/* concated harmony reexport uploadStart */__webpack_require__.d(__webpack_exports__, "uploadStart", function() { return modules_uploadStart; });
/* concated harmony reexport uploadCancel */__webpack_require__.d(__webpack_exports__, "uploadCancel", function() { return modules_uploadCancel; });
/* concated harmony reexport uploadPause */__webpack_require__.d(__webpack_exports__, "uploadPause", function() { return modules_uploadPause; });
/* concated harmony reexport uploadResume */__webpack_require__.d(__webpack_exports__, "uploadResume", function() { return modules_uploadResume; });
/* concated harmony reexport uploadRestart */__webpack_require__.d(__webpack_exports__, "uploadRestart", function() { return modules_uploadRestart; });
/* concated harmony reexport locationOpen */__webpack_require__.d(__webpack_exports__, "locationOpen", function() { return modules_locationOpen; });
/* concated harmony reexport locationClose */__webpack_require__.d(__webpack_exports__, "locationClose", function() { return modules_locationClose; });
/* concated harmony reexport locationGet */__webpack_require__.d(__webpack_exports__, "locationGet", function() { return modules_locationGet; });
/* concated harmony reexport sensorOpen */__webpack_require__.d(__webpack_exports__, "sensorOpen", function() { return modules_sensorOpen; });
/* concated harmony reexport sensorClose */__webpack_require__.d(__webpack_exports__, "sensorClose", function() { return modules_sensorClose; });
/* concated harmony reexport videoOpen */__webpack_require__.d(__webpack_exports__, "videoOpen", function() { return modules_videoOpen; });





























































































































/***/ })

}]);