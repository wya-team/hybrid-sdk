(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../docs/methods/appInstalled.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n判断设备上面是否已安装指定应用\n\n注意：iOS9中系统对检测应用是否安装的方法做了限制，若想得到期望的结果，需要在config.xml里面[配置可被检测的URL Scheme](//docs.apicloud.com/Dev-Guide/app-config-manual#14-4)。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nsync | 执行结果的返回方式。为false时通过callback返回，为true时直接返回。 | bool | false | -\nscheme | scheme 或 包名 | str | - | -\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.appInstalled({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('appInstalled', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('appInstalled', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/call.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.call({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('call', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/cancelDownload.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n取消文件下载\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.cancelDownload({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('cancelDownload', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('cancelDownload', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/cancelNotification.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nid | 调用 notification 方法时返回的 id | num,str | 0 | -\n\n> 如果传入-1，则取消本应用弹到状态栏的所有通知，iOS只支持清除所有弹到状态栏的通知；传入-1并不清除闹铃\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.cancelNotification({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('cancelNotification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('cancelNotification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/clearCache.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 缓存路径 | str | app的缓存路径 | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.clearCache({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('clearCache', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/download.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n下载文件\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\nencode | 是否对url进行编码 | bool | true | -\npath | 存储路径，不传时使用自动创建的路径 | str | - | -\n~~report~~ | ~~下载过程是否上报~~ | ~~bool~~ | ~~false~~ | -\n~~allowResume~~ | ~~是否允许断点续传~~ | ~~bool~~ | ~~false~~ | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: 0, // 文件大小，数字类型\n\t\tpercent: 0, // 下载进度（0-100），数字类型\n\t\tstate: 0, // 下载状态，数字类型。（0：下载中、1：下载完成、2：下载失败）\n\t\tpath: '' // 存储路径（字符串类型）\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.download({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('download', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('download', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getCacheSize.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 缓存路径 | str | app的缓存路径 | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte。\n\t\tlabel: '1KB' \n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getCacheSize({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getCacheSize', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getCacheSize', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getFreeDiskSpace.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取剩余存储空间大小\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte\n\t\tlabel: '1KB'\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getFreeDiskSpace({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getFreeDiskSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getFreeDiskSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getLocation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getLocation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getPicture.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nsourceType | 图片源类型，从相册、图片库或相机获取图片 | str | camera,album | -\nencodingType | 返回图片类型，jpg或png | str | png,jpg | -\nmediaType | 媒体类型，图片或视频 | str | pic,viedo | -\ndestinationType | 返回数据类型，指定返回图片地址或图片经过base64编码后的字符串 | str | url,base64 | -\ndirection | 选择前置或后置摄像头，取值范围（front、rear）| bool | false | -\n~~allowEdit~~ | ~~是否可以选择图片后进行编辑~~| ~~bool~~ | ~~false~~ | -\n~~preview~~ | ~~是否选择图片后进行预览~~ | ~~bool~~ | ~~false~~ | -\nquality | 图片质量，只针对jpg格式图片（0-100整数） | number | 50 | -\nvideoQuality | 视频质量，调用相机录制视频时该参数生效 | str | low、medium、high | -\ntargetWidth | 压缩后的图片宽度，图片会按比例适配此宽度 | number | 原图宽度 | -\ntargetHeight | 压缩后的图片高度，图片会按比例适配此高度 | number | 原图高度 | -\nsaveToPhotoAlbum | 拍照或录制视频后是否保存到系统相册目录 | bool | false | -\ngroupName | 保存图片到自定义分组相册目录，相册不存在则会进行创建 | bool | false | -\n\n```\ncamera // 相机\nalbum // 相册\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tlist: [\n\t\t\t{\n\t\t\t\turl: \"\", // 图片路径\n\t\t\t\tbase64: \"\", // base64数据，destinationType为base64时返回\n\t\t\t\tduration: 0 // 视频时长\n\t\t\t}\n\t\t]\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getPicture({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getPicture', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getPicture', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/getTotalSpace.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n获取总存储空间大小\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nstorageType | `` | str | total, dataDir, storageDir | -\n\n\n> dataDir(内部存储)；storageDir(外部存储)；total(全部)\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tsize: '1024',// 缓存大小，单位为Byte\n\t\tlabel: '1KB'\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.getTotalSpace({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('getTotalSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('getTotalSpace', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/installApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\turl: ''\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 下载地址 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.installApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('installApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('installApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/mail.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nrecipients | 电话号码 | arr | - | ['tech@weiyian.com']\nsubject | 邮件主题 | str | - | -\nbody | 邮件内容 | str | - | -\n~~attachments~~ | ~~附件地址~~ | ~~arr~~ | - | -\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.mail({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('mail', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/notification.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。\n\n注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nvibrate | 伴随节奏的震动: 等待-震动-等待-震动 | arr | [100, 500, 100, 500] | -\nsound | 提示音 | str | default,none | '/res/xxx.mp3'\nlight | 设备提示灯是否闪烁 | bool | false | -\nnotify | 弹出通知到状态栏 | object | { title, content, extra, cover } | -\ntimestamp | 设置时间戳，单位ms | number | - | -\n\n```\n{\n    title: '' // 标题，Android中默认值为应用名称，支持Android和iOS 8.2以上系统\n    content: '' // 内容，默认值为'有新消息'\n    extra: {} // 附加信息key/value，页面可以监听noticeclicked事件得到点击的通知的附加信息\n    cover: false // 是否覆盖更新已有的通知，取值范围true|false。只Android有效\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tid: 1 // 弹出到状态栏通知的id或者设置的闹铃id，可用于取消通知或者闹铃\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.notification({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('notification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('notification', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nparam | 传给目标应用的参数 | obj | - | -\nscheme | scheme 或 包名 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openContacts.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n在应用内打开系统通讯录界面选择联系人\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tlist: [\n\t\t\t{\n\t\t\t\tname: \"\", // 姓名\n\t\t\t\tphone: \"\", // 电话号码\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: \"\", // 姓名\n\t\t\t\tphone: \"\", // 电话号码\n\t\t\t}\n\t\t]\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openContacts({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openContacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openContacts', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/openVideo.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n打开系统视频播放器\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 本地文件路径（支持fs://路径协议）或者网络资源地址 | str | - | 'fs://res/1.mp4'\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.openVideo({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('openVideo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('openVideo', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/pop.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n关闭到指定 window，最上面显示的 window 到指定 name 的 window 间的所有 window 都会被关闭。\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nname | window名字，相同跳转到最早创建的，不传时关闭当前window | str | - | -\nanimation | 动画参数 | str | card,modal,none | ``\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.pop({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('pop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('pop', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/push.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n打开window\n若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。\n\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\turl: '/home/main',\n\tpageParam: {},\n\t// ....\n}\n```\n\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nname | window名字 | str | - | 'root'\ntitle | navigationBar上的标题 | str | - | -\nurl | 页面地址 | str | - | `/home/main`, `https:**.com/`\npageParam | 页面参数 | object | - | -\n~~scrollToTop~~ | ~~当点击状态栏，页面是否滚动到顶部~~ | ~~bool~~ | ~~false~~ | ~~-~~\nvScrollBarEnabled | 是否显示垂直滚动条 | bool | true | -\nhScrollBarEnabled | 是否显示水平滚动条 | bool | true | -\nscaleEnabled | 页面是否可以缩放 | bool | false | -\nhideTopBar | 是否隐藏原生navigationBar控件 | bool | true | ~~-~~\nhideBottomBar | 是否隐藏原生tabBar控件 | bool | true | -\nanimation | 动画参数，不传时使用默认动画 | str | card,modal,none | -\nreplace | 是否先执行pop操作 | bool | false | -\n\n#### 3. Native传递参数给Client \n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.push({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('push', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('push', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/rebootApp.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.rebootApp({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('rebootApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('rebootApp', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/saveMediaToAlbum.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n保存图片和视频到系统相册\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nurl | 文件路径，目前只支持网络链接地址 | str | - | -\nmediaType | 媒体类型，图片或视频 | str | pic,viedo | -\ngroupName | 保存图片到自定义分组相册目录，相册不存在则会进行创建 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.saveMediaToAlbum({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('saveMediaToAlbum', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('saveMediaToAlbum', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setAppIconBadge.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setAppIconBadge({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setAppIconBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setAppIconBadge', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setKeepScreenOn.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置是否禁止屏幕休眠\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nkeepOn | 是否禁止屏幕休眠 | bool | false | -\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setKeepScreenOn({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setKeepScreenOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setKeepScreenOn', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setScreenOrientation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置屏幕旋转方向\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\norientation | 旋转屏幕到指定方向 | str | - | -\n\n```\nportraitUp // 竖屏时，屏幕在home键的上面\nportraitDown // 竖屏时，屏幕在home键的下面，部分手机如iPhone X系列不支持\nlandscapeLeft // 横屏时，屏幕在home键的左边\nlandscapeRight // 横屏时，屏幕在home键的右边\nauto // 屏幕根据重力感应在横竖屏间自动切换\nautoPortrait // 屏幕根据重力感应在竖屏间自动切换\nautoLandscape // 屏幕根据重力感应在横屏间自动切换\n```\n\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setScreenOrientation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setScreenOrientation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setScreenOrientation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/setStatusBarStyle.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nstyle | 状态栏样式 | str | light | dark,light\ncolor | 状态栏背景颜色，只 Android 5.0 及以上有效 | str | #000 | -\nanimated | 是否有动画效果，只iOS有效 | bool | true | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.setStatusBarStyle({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('setStatusBarStyle', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('setStatusBarStyle', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/showFloatBox.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n展示一个悬浮框，浮动在屏幕上\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\n~~preventDefault~~ | ~~是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。~~ | bool | false | -\niconPath | 展示在悬浮框中的图片地址。 | str | 应用图标 | 'widget://image/icon.png'\nduration | 自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态 | number | 5000 | -\n\n> 默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.showFloatBox({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('showFloatBox', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('showFloatBox', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/sms.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n调用系统短信界面发送短信，或者后台直接发送短信\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\nnumbers | 电话号码 | arr | - | ['10086']\ntext | 文本内容 | str | - | -\nsilent | 是否后台发送，只支持Android | bool | false | -\n\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.sms({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('sms', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startLocation.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startLocation({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startLocation', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startPlay.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n播放本地音频，支持amr格式\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 文件路径，支持fs://、widget://等文件路径协议 | str | - | -\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startPlay({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/startRecord.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n录制amr格式音频\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n属性 | 说明 | 类型 | 默认值 | 如\n---|---|---|---|---\npath | 文件路径，不传时自动创建路径 | str | - | -\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tpath: ''\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.startRecord({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('startRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('startRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

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

module.exports = "#### 1. 说明\n\n停止播放音频\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopPlay({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopPlay', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopRecord.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n停止录音\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\tpath: '', // 字符串，返回的音频地址\n\t\tduration: 0 // 数字类型，音频的时长\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopRecord({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopRecord', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/stopSensor.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n~\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.stopSensor({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('stopSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('stopSensor', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "../../docs/methods/toLauncher.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n回到系统桌面, 该接口仅Android平台支持\n\n#### 2. Client传递参数给Native\n\n```javascript\n{\n\t// ....\n}\n```\n\n#### 3. Native传递参数给Client\n\n```javascript\n{\n\tstatus: 1,\n\tmsg: '调用成功',\n\tdata: {\n\t\t// ....\n\t}\n}\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.toLauncher({\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n\n// 或者\nwya.invoke('toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.invoke('toLauncher', {\n\t// ...\n}).then(() => {\n\t// ...\n}).catch(() => {\n\t// ...\n});\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('[对应的唯一id]', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

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

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/push.md
var push = __webpack_require__("../../docs/methods/push.md");
var push_default = /*#__PURE__*/__webpack_require__.n(push);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/push.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var push_invoke = function invoke() {
  wya_umd_default.a.invoke('push', {// ...
  }).then(function (res) {
    res = _typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_push = ({
  to: '/methods/push',
  title: 'push',
  label: '',
  invoke: push_invoke,
  markdown: push_default.a,
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
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/methods/pop.md
var pop = __webpack_require__("../../docs/methods/pop.md");
var pop_default = /*#__PURE__*/__webpack_require__.n(pop);

// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/pop.js
function pop_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pop_typeof = function _typeof(obj) { return typeof obj; }; } else { pop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pop_typeof(obj); }





var pop_invoke = function invoke() {
  wya_umd_default.a.invoke('pop', {// ...
  }).then(function (res) {
    res = pop_typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toasts["a" /* default */].info(res, 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toasts["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_pop = ({
  to: '/methods/pop',
  title: 'pop',
  label: '',
  invoke: pop_invoke,
  markdown: pop_default.a,
  param: {
    name: '',
    animation: 'card'
  }
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
  markdown: installApp_default.a,
  param: {
    url: ''
  }
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
  markdown: openApp_default.a,
  param: {
    param: {},
    scheme: ''
  }
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
  markdown: appInstalled_default.a,
  param: {
    scheme: ''
  }
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
  markdown: download_default.a,
  param: {
    url: '',
    encode: true,
    path: '',
    report: false,
    allowResume: false
  }
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
  markdown: cancelDownload_default.a,
  param: {
    url: ''
  }
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
  markdown: clearCache_default.a,
  param: {
    path: ''
  }
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
  markdown: getCacheSize_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
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
  markdown: getTotalSpace_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
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
  markdown: getFreeDiskSpace_default.a,
  param: {
    path: '',
    storageType: 'total'
  }
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
  markdown: notification_default.a,
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
  markdown: cancelNotification_default.a,
  param: {
    id: ''
  }
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
  markdown: sms_default.a,
  param: {
    numbers: ['10086'],
    text: '测试',
    silent: false
  }
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
  markdown: setStatusBarStyle_default.a,
  param: {
    style: 'light',
    color: '#000',
    animated: true
  }
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
  markdown: setScreenOrientation_default.a,
  param: {
    orientation: 'auto'
  }
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
  markdown: setKeepScreenOn_default.a,
  param: {
    keepOn: false
  }
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
  markdown: showFloatBox_default.a,
  param: {
    preventDefault: false,
    iconPath: '/image/icon.png',
    duration: 5000
  }
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
  markdown: getPicture_default.a,
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
  markdown: saveMediaToAlbum_default.a,
  param: {
    url: '',
    mediaType: 'pic',
    groupName: ''
  }
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
  markdown: startRecord_default.a,
  param: {
    path: ''
  }
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
  markdown: startPlay_default.a,
  param: {
    path: ''
  }
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
  markdown: openVideo_default.a,
  param: {
    url: ''
  }
});
// CONCATENATED MODULE: ./src/pages/components/methods/detail/modules/root.js
/* concated harmony reexport push */__webpack_require__.d(__webpack_exports__, "push", function() { return modules_push; });
/* concated harmony reexport pop */__webpack_require__.d(__webpack_exports__, "pop", function() { return modules_pop; });
/* concated harmony reexport installApp */__webpack_require__.d(__webpack_exports__, "installApp", function() { return modules_installApp; });
/* concated harmony reexport openApp */__webpack_require__.d(__webpack_exports__, "openApp", function() { return modules_openApp; });
/* concated harmony reexport appInstalled */__webpack_require__.d(__webpack_exports__, "appInstalled", function() { return modules_appInstalled; });
/* concated harmony reexport rebootApp */__webpack_require__.d(__webpack_exports__, "rebootApp", function() { return modules_rebootApp; });
/* concated harmony reexport download */__webpack_require__.d(__webpack_exports__, "download", function() { return modules_download; });
/* concated harmony reexport cancelDownload */__webpack_require__.d(__webpack_exports__, "cancelDownload", function() { return modules_cancelDownload; });
/* concated harmony reexport clearCache */__webpack_require__.d(__webpack_exports__, "clearCache", function() { return modules_clearCache; });
/* concated harmony reexport getCacheSize */__webpack_require__.d(__webpack_exports__, "getCacheSize", function() { return modules_getCacheSize; });
/* concated harmony reexport getTotalSpace */__webpack_require__.d(__webpack_exports__, "getTotalSpace", function() { return modules_getTotalSpace; });
/* concated harmony reexport getFreeDiskSpace */__webpack_require__.d(__webpack_exports__, "getFreeDiskSpace", function() { return modules_getFreeDiskSpace; });
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
/* concated harmony reexport setAppIconBadge */__webpack_require__.d(__webpack_exports__, "setAppIconBadge", function() { return modules_setAppIconBadge; });
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