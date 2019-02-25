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
[batteryLow][batteryLow] | 低电量 | 1 | 0 | 0
[batteryStatus][batteryStatus] | 电池状态，如电量变化或正在充电 | 1 | 0 | 0
[offline][offline] | 监听设备断开网络 | 1 | 0 | 0
[online][online] | 监听设备连接到网络 | 1 | 0 | 0
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
[safeAreaChange][safeAreaChange] |  安全区域发生变化的回调(iOS11) | 0 | 0 | 0

[batteryLow]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/batteryLow.md
[batteryStatus]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/batteryStatus.md
[offline]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/offline.md
[online]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/online.md
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
[safeAreaChange]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/safeAreaChange.md


### 按键事件 (key) (on)

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[keyBack][keyBack] | 返回  | 1 | 0 | 0
[keyMenu][keyMenu] | 菜单键  | 1 | 0 | 0
[volumeUp][volumeUp] | 音量加键  | 1 | 0 | 0
[volumeDown][volumeDown] | 音量减键  | 1 | 0 | 0

[keyBack]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyBack.md
[keyMenu]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/keyMenu.md
[volumeUp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/volumeUp.md
[volumeDown]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/volumeDown.md

## 三、方法


方法 | 说明 | 开发 | Android | iOS
---|---|---|---|---
[push][push] | 打开window  | 1 | 0 | 0 
[pop][pop] | 关闭 window  | 1 | 0 | 0  
[setWinAttr][setWinAttr] | 设置 window 属性  | 0 | 0 | 0  
[installApp][installApp] | 安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页  | 1 | 0 | 0  
[uninstallApp][uninstallApp] | 卸载应用，只支持Android  | 0 | 0 | 0  
[openApp][openApp] | 打开手机上其它应用，可以传递参数  | 1 | 0 | 0  
[appInstalled][appInstalled] | 判断设备上面是否已安装指定应用  | 1 | 0 | 0  
[rebootApp][rebootApp] | 重启应用，云修复完成后可以调用此方法来重启应用使云修复生效  | 0 | 0 | 0  
[download][download] | 下载文件  | 1 | 0 | 0  
[cancelDownload][cancelDownload] | 取消文件下载  | 1 | 0 | 0  
[clearCache][clearCache] | 清除缓存，包括下载的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。  | 1 | 0 | 0
[getCacheSize][getCacheSize] | 获取缓存占用空间大小，缓存包括下载的缓存文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间  | 1 | 0 | 0
[getTotalSpace][getTotalSpace] | 获取总存储空间大小  | 1 | 0 | 0
[getFreeDiskSpace][getFreeDiskSpace] | 获取剩余存储空间大小  | 1 | 0 | 0
[notification][notification] | 向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclick 事件获取该通知相关内容  | 1 | 0 | 0
[cancelNotification][cancelNotification] | 取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃  | 1 | 0 | 0
[startLocation][startLocation] | 调用系统自带定位功能，开始定位  | 0 | 0 | 0
[stopLocation][stopLocation] | 停止定位  | 0 | 0 | 0
[getLocation][getLocation] | 之前已通过 startLocation() 方法进行定位，则直接返回上次定位的数据，否则使用默认设置进行定位  | 0 | 0 | 0
[startSensor][startSensor] | 开启传感器  | 0 | 0 | 0
[stopSensor][stopSensor] | 停止传感器  | 0 | 0 | 0
[sms][sms] | 调用系统短信界面发送短信，或者后台直接发送短信  | 1 | 0 | 0
[mail][mail] | 发送邮件  | 0 | 0 | 0
[call][call] | 拨打电话或进行faceTime  | 0 | 0 | 0
[openContacts][openContacts] | 在应用内打开系统通讯录界面选择联系人  | 1 | 0 | 0
[setStatusBarStyle][setStatusBarStyle] | 设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景）  | 1 | 0 | 0
[setScreenOrientation][setScreenOrientation] | 设置屏幕旋转方向  | 1 | 0 | 0
[setKeepScreenOn][setKeepScreenOn] | 设置是否禁止屏幕休眠  | 1 | 0 | 0
[toLauncher][toLauncher] | 回到系统桌面 | 1 | 0 | 0
[setAppIconBadge][setAppIconBadge] | 如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果  | 0 | 0 | 0
[showFloatBox][showFloatBox] | 展示一个悬浮框，浮动在屏幕上。  | 1 | 0 | 0
[getPicture][getPicture] | 通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。  | 1 | 0 | 0
[saveMediaToAlbum][saveMediaToAlbum] | 保存图片和视频到系统相册  | 1 | 0 | 0
[startRecord][startRecord] | 录制amr格式音频  | 1 | 0 | 0
[stopRecord][stopRecord] | 停止录音  | 1 | 0 | 0
[startPlay][startPlay] | 播放本地音频，支持amr格式  | 1 | 0 | 0
[stopPlay][stopPlay] | 停止播放音频  | 1 | 0 | 0
[openVideo][openVideo] | 打开系统视频播放器  | 1 | 0 | 0
[require][require] | 引用模块(wya.require("bMap"))  | 0 | 0 | 0

[push]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/push.md
[pop]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/pop.md
[setWinAttr]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setWinAttr.md
[installApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/installApp.md
[uninstallApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uninstallApp.md
[openApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openApp.md
[appInstalled]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appInstalled.md
[rebootApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/rebootApp.md
[download]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/download.md
[cancelDownload]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/cancelDownload.md
[clearCache]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/clearCache.md
[getCacheSize]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getCacheSize.md
[getTotalSpace]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getTotalSpace.md
[getFreeDiskSpace]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getFreeDiskSpace.md
[notification]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/notification.md
[cancelNotification]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/cancelNotification.md
[startLocation]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startLocation.md
[stopLocation]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopLocation.md
[getLocation]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getLocation.md
[startSensor]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startSensor.md
[stopSensor]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopSensor.md
[sms]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/sms.md
[mail]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/mail.md
[call]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/call.md
[openContacts]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openContacts.md
[setStatusBarStyle]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setStatusBarStyle.md
[setScreenOrientation]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setScreenOrientation.md
[setKeepScreenOn]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setKeepScreenOn.md
[toLauncher]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/toLauncher.md
[setAppIconBadge]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setAppIconBadge.md
[showFloatBox]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/showFloatBox.md
[getPicture]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getPicture.md
[saveMediaToAlbum]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/saveMediaToAlbum.md
[startRecord]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startRecord.md
[stopRecord]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopRecord.md
[startPlay]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startPlay.md
[stopPlay]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopPlay.md
[openVideo]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openVideo.md
[require]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/require.md


## 其他

- h5 注册方法 `registerMethod`
- native 注册方法 `registerMethod`
- 思考事件的注册方式由用户决定
- 思考 `registerMethod` -> `registerModule`
- 思考 h5/native `Components`, 以及`registerComponents`


































