## 一、常量

参数 | 说明 | 如 | 开发 | Android | iOS
---|---|---|---|---|---
[version][version] | 引擎版本信息(Native SDK Version) | `1.0.0` | 1 | 0 | 0
[appId][appId] | 应用的 ID | - | 1 | 0 | 0
[appName][appName] | 应用在名称 | - | 1 | 0 | 0
[appVersion][appVersion] | 应用版本号 | `1.0.0` | 1 | 0 | 0
[systemType][systemType] | 系统类型 | `ios、android` | 1 | 0 | 0
[systemVersion][systemVersion] | 系统版本号 | - `11.1` | 1 | 0 | 0
[deviceId][deviceId] | 设备唯一标识 | `FC408F8B-9598-48B6-A740-B9037ADCXXXE` | 1 | 0 | 0
[deviceToken][deviceToken] | iOS中用于推送的Token | - | 1 | 0 | 0
[deviceModel][deviceModel] | 设备型号 | `iPhone 7` | 1 | 0 | 0
[deviceName][deviceName] | 设备名称 | `“柚子”的 iPhone` | 1 | 0 | 0
[deviceWidth][deviceWidth] | window 宽度（物理） | `750` | 1 | 0 | 0
[deviceHeight][deviceHeight] | window 高度（物理） | `1334` | 1 | 0 | 0
[devicePixelRatio][devicePixelRatio] | 设备像素比 | `1334` | 1 | 0 | 0
[uiMode][uiMode] | 设备类型 | `pad/phone..` | 1 | 0 | 0
[operatorName][operatorName] | 运营商名称 | `中国移动` | 1 | 0 | 0
[connectionType][connectionType] | 当前网络连接类型 | `wifi,2g,3g,4g,none` | 1 | 0 | 0
[fullScreen][fullScreen] | 应用是否全屏 | - | 1 | 0 | 0
[name][name] | window 名称 | `home` | 1 | 0 | 0
[safeArea][safeArea] | 页面不被其它内容（如状态栏）遮住的区域 | `{ top: 0, left, ... }` | 1 | 0 | 0
[pageParam][pageParam] | 页面参数, 获取页面间传递的参数值，为 push()方法 | `{ name: '' ... }` | 1 | 0 | 0
[appParam][appParam] | 当应用被第三方应用打开时，传递过来的参数 | `{ value: 'sss' }` | 1 | 0 | 0
[statusBarAppearance][statusBarAppearance] | 是否支持沉浸式效果，状态栏底透明 | `true` | 1 | 0 | 0
[debug][debug] | - | `` | 1 | 0 | 0
[channel][channel] | app来源 | `Apple App Store` | 1 | 0 | 0
[jailbreak][jailbreak] | 设备是否越狱 | `` | 1 | 0 | 0
[documentsDir][documentsDir] | 文档目录，可存放用户数据 | `` | 1 | 0 | 0
[libraryDir][libraryDir] | 系统默认的缓存目录，系统永远不会删除这里的文件需要手动清理 | `` | 1 | 0 | 0
[tmpDir][tmpDir] | 用于存放临时文件，保存应用程序再次启动过程中不需要的信息 | `` | 1 | 0 | 0


[version]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/version.md
[appId]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/appId.md
[appName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/appName.md
[appVersion]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/appVersion.md
[systemType]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/systemType.md
[systemVersion]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/systemVersion.md
[deviceId]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceId.md
[deviceToken]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceToken.md
[deviceModel]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceModel.md
[deviceName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceName.md
[deviceWidth]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceWidth.md
[deviceHeight]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/deviceHeight.md
[devicePixelRatio]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/devicePixelRatio.md
[uiMode]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/uiMode.md
[operatorName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/operatorName.md
[connectionType]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/connectionType.md
[fullScreen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/fullScreen.md
[name]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/name.md
[safeArea]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/safeArea.md
[pageParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/pageParam.md
[wgtParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/wgtParam.md
[appParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/appParam.md
[statusBarAppearance]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/statusBarAppearance.md
[debug]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/debug.md
[channel]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/channel.md
[jailbreak]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/jailbreak.md
[documentsDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/documentsDir.md
[libraryDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/libraryDir.md
[tmpDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/tmpDir.md

## 二、事件系统

#### 辅助事件

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[\_ready\_][ready] | 初始化事件,sdk注入完成后调用 | 1 | 0 | 0
[\_error\_][error] | 异常回调 | 1 | 0 | 0

[ready]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/assists/ready.md
[error]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/assists/error.md

### 通用事件（on）

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[battery][battery] | 电池状态，如电量变化或正在充 | 1 | 0 | 0
[network][network] | 监听设备连接到网络 | 1 | 0 | 0
[pause][pause] | 应用进入后台 | 1 | 0 | 0
[resume][resume] | 应用从后台回到前台 | 1 | 0 | 0
[shake][shake] | 设备摇动事件 | 1 | 0 | 0
[appIdle][appIdle] | 应用多长时间不操作屏幕后触发  | 1 | 0 | 0
[takeScreenshot][takeScreenshot] | 用户屏幕截图  | 1 | 0 | 0
[viewAppear][viewAppear] |  Window 显示到屏幕的事件(堆栈)  | 1 | 0 | 0
[viewDisappear][viewDisappear] |  Window 离开屏幕的事件(堆栈)  | 1 | 0 | 0
[noticeClick][noticeClick] |  状态栏通知被用户点击后的回调（推送） | 0 | 0 | 0
[appIntent][appIntent] |  本应用被其他应用调起来  | 1 | 0 | 0
[keyboardShow][keyboardShow] |  系统键盘弹出的回调 | 1 | 0 | 0
[keyboardHide][keyboardHide] |  系统键盘隐藏的回调 | 1 | 0 | 0
[safeArea][safeArea] |  安全区域发生变化的回调(iOS11) | 0 | 0 | 0

[battery]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/battery.md
[network]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/network.md
[pause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/pause.md
[resume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/resume.md
[shake]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/shake.md
[appIdle]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/appIdle.md
[takeScreenshot]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/takeScreenshot.md
[viewAppear]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/viewAppear.md
[viewDisappear]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/viewDisappear.md
[noticeClick]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/noticeClick.md
[appIntent]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/appIntent.md
[keyboardShow]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyboardShow.md
[keyboardHide]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyboardHide.md
[safeArea]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/safeArea.md


### 按键事件 (key) (on)

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[keyBack][keyBack] | 返回  | 1 | 0 | 0
[keyMenu][keyMenu] | 菜单键  | 1 | 0 | 0
[volume][volume] | 音量键  | 1 | 0 | 0

[keyBack]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyBack.md
[keyMenu]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyMenu.md
[volume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/volume.md

## 三、方法

### 模块
 
- `navigator`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[push][navigatorPush] | 打开window  | 1 | 0 | 0 
[pop][navigatorPop] | 关闭 window  | 1 | 0 | 0 

- `app`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[install][appInstall] | 安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页  | 1 | 0 | 0  
[uninstall][appUninstall] | 卸载应用，只支持Android  | 0 | 0 | 0  
[open][appOpen] | 打开手机上其它应用，可以传递参数  | 1 | 0 | 0  
[reboot][appReboot] | 重启应用，云修复完成后可以调用此方法来重启应用使云修复生效  | 0 | 0 | 0  
[has][appHas] | 判断设备上面是否已安装指定应用  | 0 | 0 | 0  


- `clipboard`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[get][clipboardGet] | 黏贴板内容  | 0 | 0 | 0  
[set][clipboardSet] | 复制 | 0 | 0 | 0  


- `storage`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[get][storageGet] | -  | 0 | 0 | 0  
[set][storageSet] | - | 0 | 0 | 0  
[remove][storageRemove] | - | 0 | 0 | 0  
[clear][storageClear] | - | 0 | 0 | 0  
[getAllKeys][storageGetAllKeys] | - | 0 | 0 | 0 

- `photo`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[get][photoGet] | 通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。  | 1 | 0 | 0
[save][photoSave] | 保存图片和视频到系统相册  | 1 | 0 | 0
 

- `notification`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[add][notificationAdd] | 向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclick 事件获取该通知相关内容  | 1 | 0 | 0
[remove][notificationRemove] | 取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃  | 1 | 0 | 0

- `floatBall`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[show][floatBallShow] | 展示一个悬浮框，浮动在屏幕上。  | 1 | 0 | 0
[hide][floatBallHide] | 隐藏一个悬浮框 | 1 | 0 | 0


- `system`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[sms][systemSms] | 调用系统短信界面发送短信，或者后台直接发送短信  | 1 | 0 | 0
[mail][systeMail] | 发送邮件  | 0 | 0 | 0
[call][systemCall] | 拨打电话或进行faceTime  | 0 | 0 | 0
[contacts][systemContacts] | 在应用内打开系统通讯录界面选择联系人  | 1 | 0 | 0
[getBattery][systemGetBattery] | -  | 0 | 0 | 0
[getNetwork][systemGetNetwork] | -  | 0 | 0 | 0

- `screen`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[orientate][screenOrientate] | 设置屏幕旋转方向  | 1 | 0 | 0
[keepOn][screenKeepOn] | 设置是否禁止屏幕休眠  | 1 | 0 | 0
[toLauncher][screenToLauncher] | 回到系统桌面 | 1 | 0 | 0

- `style`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[setWin][styleSetWin] | 设置 window 属性  | 0 | 0 | 0  
[setStatusBar][styleSetStatusBar] | 设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景）  | 1 | 0 | 0
[setBadge][styleSetBadge] | 如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果  | 0 | 0 | 0

- `memory`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[clearCache][memoryClearCache] | 清除缓存，包括下载的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。  | 1 | 0 | 0
[getCache][memoryGetCache] | 获取缓存占用空间大小，缓存包括下载的缓存文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间  | 1 | 0 | 0
[getTotal][memoryGetTotal] | 获取总存储空间大小  | 1 | 0 | 0
[getFree][memoryGetFree] | 获取剩余存储空间大小  | 1 | 0 | 0

- `record`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[start][recordStart] | 录制amr格式音频  | 1 | 0 | 0
[stop][recordStop] | 停止录音  | 1 | 0 | 0
[pause][recordPause] | -  | 0 | 0 | 0
[resume][recordResume] | -  | 0 | 0 | 0
[restart][recordRestart] | -  | 0 | 0 | 0


- `audio`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[start][audioStart] | 播放本地音频，支持amr格式  | 1 | 0 | 0
[stop][audioStop] | 停止播放音频  | 1 | 0 | 0
[pause][audioPause] | -  | 0 | 0 | 0
[resume][audioResume] | -  | 0 | 0 | 0
[restart][audioRestart] | -  | 0 | 0 | 0


- `download`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[start][downloadStart] | 下载文件  | 1 | 0 | 0
[cancel][downloadCancel] | 取消文件下载  | 1 | 0 | 0
[pause][downloadPause] | -  | 0 | 0 | 0
[resume][downloadResume] | -  | 0 | 0 | 0
[restart][downloadRestart] | -  | 0 | 0 | 0


- `upload`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[start][uploadStart] | 上传文件  | 0 | 0 | 0
[cancel][uploadCancel] | 取消文件上传  | 0 | 0 | 0
[pause][uploadPause] | -  | 0 | 0 | 0
[resume][uploadResume] | -  | 0 | 0 | 0
[restart][uploadRestart] | -  | 0 | 0 | 0

- `location`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[open][locationOpen] | 调用系统自带定位功能，开始定位  | 0 | 0 | 0
[close][locationClose] | 停止定位  | 0 | 0 | 0
[get][locationGet] | 之前已通过 startLocation() 方法进行定位，则直接返回上次定位的数据，否则使用默认设置进行定位  | 0 | 0 | 0


- `sensor`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[open][sensorOpen] | 开启传感器  | 0 | 0 | 0
[close][sensorClose] | 停止传感器  | 0 | 0 | 0

- `video`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[open][videoOpen] | 打开系统视频播放器  | 1 | 0 | 0

- `wifi`
- `bluetooth`
- `nfc`

### 内部模块

- `debugger`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
invoke | -  | 1 | 0 | 0

- `event`

方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
add | -  | 1 | 0 | 0
remove | -  | 1 | 0 | 0



[navigatorPush]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/navigatorPush.md
[navigatorPop]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/navigatorPop.md
[appInstall]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appInstall.md
[appUninstall]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appUninstall.md
[appOpen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appOpen.md
[appReboot]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appReboot.md
[appHas]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appHas.md
[clipboardGet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/clipboardGet.md
[clipboardSet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/clipboardSet.md
[storageGet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/storageGet.md
[storageSet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/storageSet.md
[storageRemove]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/storageRemove.md
[storageClear]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/storageClear.md
[storageGetAllKeys]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/storageGetAllKeys.md
[photoGet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/photoGet.md
[photoSave]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/photoSave.md
[notificationAdd]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/notificationAdd.md
[notificationRemove]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/notificationRemove.md
[floatBallShow]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/floatBallShow.md
[floatBallHide]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/floatBallHide.md
[systemSms]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systemSms.md
[systeMail]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systeMail.md
[systemCall]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systemCall.md
[systemContacts]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systemContacts.md
[systemGetBattery]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systemGetBattery.md
[systemGetNetwork]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/systemGetNetwork.md
[screenOrientate]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/screenOrientate.md
[screenKeepOn]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/screenKeepOn.md
[screenToLauncher]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/screenToLauncher.md
[styleSetWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/styleSetWin.md
[styleSetStatusBar]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/styleSetStatusBar.md
[styleSetBadge]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/styleSetBadge.md
[memoryClearCache]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/memoryClearCache.md
[memoryGetCache]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/memoryGetCache.md
[memoryGetTotal]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/memoryGetTotal.md
[memoryGetFree]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/memoryGetFree.md
[recordStart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/recordStart.md
[recordStop]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/recordStop.md
[recordPause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/recordPause.md
[recordResume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/recordResume.md
[recordRestart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/recordRestart.md
[audioStart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/audioStart.md
[audioStop]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/audioStop.md
[audioPause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/audioPause.md
[audioResume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/audioResume.md
[audioRestart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/audioRestart.md
[downloadStart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/downloadStart.md
[downloadCancel]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/downloadCancel.md
[downloadPause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/downloadPause.md
[downloadResume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/downloadResume.md
[downloadRestart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/downloadRestart.md
[uploadStart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uploadStart.md
[uploadCancel]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uploadCancel.md
[uploadPause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uploadPause.md
[uploadResume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uploadResume.md
[uploadRestart]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uploadRestart.md
[locationOpen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/locationOpen.md
[locationClose]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/locationClose.md
[locationGet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/locationGet.md
[sensorOpen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/sensorOpen.md
[sensorClose]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/sensorClose.md
[videoOpen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/videoOpen.md



## 其他

- h5 注册方法 `registerModule`
- native 注册方法 `registerModule`文档, 注册事件`registerEvent`文档
- 思考 h5/native `Components`, 以及`registerComponents`
- Android 内核调整方案


































