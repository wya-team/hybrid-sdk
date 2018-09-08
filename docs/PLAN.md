## 一、常量

#### 触发事件

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[\_ready\_](#_ready_) | 初始化事件,sdk注入完成后调用 | 1 | 0 | 0


参数 | 说明 | 如 | 开发 | Android | iOS
---|---|---|---|---|---
[version][version] | 引擎版本信息 | `1.0.0` | 1 | 0 | 0
[appId][appId] | 应用的 ID | - | 1 | 0 | 0
[appName][appName] | 应用在名称 | - | 1 | 0 | 0
[appVersion][appVersion] | 应用版本号 | `1.0.0` | 1 | 0 | 0
[systemType][systemType] | 系统类型 | `ios、android` | 1 | 0 | 0
[systemVersion][systemVersion] | 系统版本号 | - `11.1` | 1 | 0 | 0
[deviceId][deviceId] | 设备唯一标识 | `FC408F8B-9598-48B6-A740-B9037ADCXXXE` | 1 | 0 | 0
[deviceToken][deviceToken] | iOS中用于推送的Token | - | 1 | 0 | 0
[deviceModel][deviceModel] | 设备型号 | `iPhone 7` | 1 | 0 | 0
[deviceName][deviceName] | 设备名称 | `“柚子”的 iPhone` | 1 | 0 | 0
[uiMode][uiMode] | 设备类型 | `pad/phone..` | 1 | 0 | 0
[operatorName][operatorName] | 运营商名称 | `中国移动` | 1 | 0 | 0
[connectionType][connectionType] | 当前网络连接类型 | `wifi,2g,3g,4g,none` | 1 | 0 | 0
[fullScreen][fullScreen] | 应用是否全屏 | - | 1 | 0 | 0
[screenWidth][screenWidth] | 屏幕分辨率宽（物理） | `750` | 1 | 0 | 0
[screenHeight][screenHeight] | 屏幕分辨率高（物理） | `1334` | 1 | 0 | 0
[winName][winName] | 当前 window 名称） | `home` | 1 | 0 | 0
[winWidth][winWidth] | 当前 window 宽度（逻辑） | `350` | 1 | 0 | 0
[winHeight][winHeight] | 当前 window 高度（逻辑） | `667` | 1 | 0 | 0
[frameName][frameName] | frame 名称, 若当前环境为 window 中，则该属性值为空字符串 | - | 1 | 0 | 0
[frameWidth][frameWidth] | frame 宽度，环境为window时，与winWidth 相同 | - | 1 | 0 | 0
[frameHeight][frameHeight] | frame 高度，环境为window时，与winHeight 相同 | - | 1 | 0 | 0
[safeArea][safeArea] | 页面不被其它内容（如状态栏）遮住的区域 | `{ top: 0, left, ... }` | 1 | 0 | 0
[pageParam][pageParam] | 页面参数, 获取页面间传递的参数值，为 openWin()、openFrame() 等方法 | `{ name: '' ... }` | 1 | 0 | 0
[wgtParam][wgtParam] | widget 参数, 获取 widget 间传递的参数值，为 openWidget() 方法 | `{ top: 0, left, ... }` | 0 | 0 | 0
[appParam][appParam] | 当应用被第三方应用打开时，传递过来的参数 | `{ value: 'sss' }` | 1 | 0 | 0
[statusBarAppearance][statusBarAppearance] | 是否支持沉浸式效果，状态栏底透明 | `true` | 1 | 0 | 0
[wgtRootDir][wgtRootDir] | widget: //协议对应的真实目录，即 widget 网页包的根目录(只读) `/private/.../App.app/widget` | 0 | 0 | 0
[fsDir][fsDir] | fs: //协议对应地真实目录 | - | 0 | 0 | 0
[cacheDir][cacheDir] cache://协议对应的真实目录, iOS 平台下载的文件一般存放于该目录下，否则提交 boxDir | box://协议对应的真实目录 | `` | 0 | 0 | 0
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
[uiMode]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/uiMode.md
[operatorName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/operatorName.md
[connectionType]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/connectionType.md
[fullScreen]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/fullScreen.md
[screenWidth]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/screenWidth.md
[screenHeight]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/screenHeight.md
[winName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/winName.md
[winWidth]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/winWidth.md
[winHeight]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/winHeight.md
[frameName]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/frameName.md
[frameWidth]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/frameWidth.md
[frameHeight]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/frameHeight.md
[safeArea]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/safeArea.md
[pageParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/pageParam.md
[wgtParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/wgtParam.md
[appParam]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/appParam.md
[statusBarAppearance]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/statusBarAppearance.md
[wgtRootDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/wgtRootDir.md
[fsDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/fsDir.md
[cacheDir]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/cacheDir.md
[debug]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/debug.md
[channel]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/channel.md
[jailbreak]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/consts/jailbreak.md


## 二、事件系统
### 通用事件（on）

事件 | 说明  | 开发 | Android | iOS
---|---|---|---|---
[batteryow][batteryow] | 低电量 | 1 | 0 | 0
[batteryStatus][batteryStatus] | 电池状态，如电量变化或正在充电 | 1 | 0 | 0
[offline][offline] | 监听设备断开网络 | 1 | 0 | 0
[online][online] | 监听设备连接到网络 | 1 | 0 | 0
[pause][pause] | 应用进入后台 | 1 | 0 | 0
[resume][resume] | 应用从后台回到前台 | 1 | 0 | 0
[shake][shake] | 设备摇动事件 | 1 | 0 | 0
[appIdle][appIdle] | 应用多长时间不操作屏幕后触发  | 1 | 0 | 0
[scrollToBottom][scrollToBottom] | 页面滑动到底部事件  | 0 | 0 | 0
[swipeDown][swipeDown] | 页面全局向下轻扫事件  | 0 | 0 | 0
[swipeLeft][swipeLeft] | 页面全局向左轻扫事件  | 0 | 0 | 0
[swipeRight][swipeRight] | 页面全局向右轻扫事件  | 0 | 0 | 0
[swipeUp][swipeUp] | 页面全局向上轻扫事件  | 0 | 0 | 0
[tap][tap] | 页面全局单击事件  | 0 | 0 | 0
[longPress][longPress] | 页面全局长按事件  | 0 | 0 | 0
[takeScreenshot][takeScreenshot] | 用户屏幕截图  | 1 | 0 | 0
[viewAppear][viewAppear] |  Window 显示到屏幕的事件(堆栈)  | 1 | 0 | 0
[viewDisappear][viewDisappear] |  Window 离开屏幕的事件(堆栈)  | 1 | 0 | 0
[noticeClick][noticeClick] |  状态栏通知被用户点击后的回调（推送） | 0 | 0 | 0
[appIntent][appIntent] |  本应用被其他应用调起来  | 1 | 0 | 0
[smartUpdateFinish][smartUpdateFinish] |  云修复使用静默修复时，更新完毕事件,通知用户做是否强制重启应用等操作或者提示，以使更新生效 | 0 | 0 | 0
[launchViewClick][launchViewClick] |  闪屏广告被用户点击后的回调 | 0 | 0 | 0
[keyboardShow][keyboardShow] |  系统键盘弹出的回调 | 1 | 0 | 0
[keyboardHide][keyboardHide] |  系统键盘隐藏的回调 | 1 | 0 | 0
[safeAreaChange][safeAreaChange] |  安全区域发生变化的回调(iOS11) | 0 | 0 | 0

[batteryow]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/batteryow.md
[batteryStatus]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/batteryStatus.md
[offline]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/offline.md
[online]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/online.md
[pause]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/pause.md
[resume]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/resume.md
[shake]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/shake.md
[appIdle]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/appIdle.md
[scrollToBottom]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/scrollToBottom.md
[swipeDown]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/swipeDown.md
[swipeLeft]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/swipeLeft.md
[swipeRight]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/swipeRight.md
[swipeUp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/swipeUp.md
[tap]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/tap.md
[longPress]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/longPress.md
[takeScreenshot]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/takeScreenshot.md
[viewAppear]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/viewAppear.md
[viewDisappear]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/viewDisappear.md
[noticeClick]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/noticeClick.md
[appIntent]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/appIntent.md
[smartUpdateFinish]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/smartUpdateFinish.md
[launchViewClick]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/events/launchViewClick.md
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
[openWin][openWin] | 打开window  | 0 | 0 | 0 
[closeWin][closeWin] | 关闭 window  | 0 | 0 | 0  
[closeToWin][closeToWin] | 关闭到指定 window  | 0 | 0 | 0  
[setWinAttr][setWinAttr] | 设置 window 属性  | 0 | 0 | 0  
[openFrame][openFrame] | 打开 frame  | 0 | 0 | 0  
[closeFrame][closeFrame] | 关闭frame  | 0 | 0 | 0  
[setFrameAttr][setFrameAttr] | 设置frame属性  | 0 | 0 | 0  
[bringFrameToFront][bringFrameToFront] | 调整 frame 到前面  | 0 | 0 | 0  
[sendFrameToBack][sendFrameToBack] | 调整 frame 到f后面  | 0 | 0 | 0  
[setFrameClient][setFrameClient] | 设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听  | 0 | 0 | 0  
[animation][animation] | frame 动画，支持平移，缩放，旋转和透明度变化(frame)  | 0 | 0 | 0  
[openFrameGroup][openFrameGroup] | 打开frame组  | 0 | 0 | 0  
[closeFrameGroup][closeFrameGroup] | 关闭frame组  | 0 | 0 | 0  
[setFrameGroupAttr][setFrameGroupAttr] | 设置 frame 组属性  | 0 | 0 | 0  
[setFrameGroupIndex][setFrameGroupIndex] | 设置 frame 组当前可见 frame  | 0 | 0 | 0  
[openPopoverWin][openPopoverWin] | 打开弹出层窗口，只支持iPad  | 0 | 0 | 0  
[closePopoverWin][closePopoverWin] | 关闭整个弹出层窗口，只 iPad 上面有效  | 0 | 0 | 0  
[openSlidLayout][openSlidLayout] | 打开侧滑式布局  | 0 | 0 | 0  
[openSlidPane][openSlidPane] | 向左或右进行侧滑  | 0 | 0 | 0  
[closeSlidPane][closeSlidPane] | 当 SlidPane 处于左或右侧滑状态时，将其收起  | 0 | 0 | 0  
[lockSlidPane][lockSlidPane] | 锁住 SlidPane，使其不能跟随手指滑动而移动  | 0 | 0 | 0  
[unlockSlidPane][unlockSlidPane] | 解锁 SlidPane，使其能跟随手指滑动而移动  | 0 | 0 | 0  
[openDrawerLayout][openDrawerLayout] | 打开一个抽屉式侧滑 window，可以从当前 window 的左右边缘滑动拉出侧滑 window。  | 0 | 0 | 0  
[openDrawerPane][openDrawerPane] | 打开抽屉式侧滑Pane  | 0 | 0 | 0  
[closeDrawerPane][closeDrawerPane] | 关闭抽屉式侧滑Pane  | 0 | 0 | 0  
[loadData][loadData] | 在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效  | 0 | 0 | 0  
[execScript][execScript] | 在指定 window 或者 frame 中执行脚本，对于 frameGroup 里面的 frame 也有效，若 name 和 frameName 都未指定，则在当前 window 中执行脚本  | 0 | 0 | 0  
[setBlurEffect][setBlurEffect] | 对当前页面或应用设置模糊效(ios8+)  | 0 | 0 | 0  
[historyBack][historyBack] | 当前window或者frame的a标签历史记录后退一页  | 0 | 0 | 0  
[historyForward][historyForward] | 当前window或者frame的a标签历史记录前进一页  | 0 | 0 | 0  
[pageUp][pageUp] | 页面向上滚动一页  | 0 | 0 | 0  
[pageDown][pageDown] | 页面向下滚动一页  | 0 | 0 | 0  
[removeLaunchView][removeLaunchView] | 移除启动图  | 0 | 0 | 0  
[showLaunchView][showLaunchView] | 重新显示闪屏广告，若没有闪屏广告则不显示  | 0 | 0 | 0  
[parseTapmode][parseTapmode] | 解析元素 tapmode 属性，优化点击事件处理  | 0 | 0 | 0  
[installApp][installApp] | 安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页  | 0 | 0 | 0  
[uninstallApp][uninstallApp] | 卸载应用，只支持Android  | 0 | 0 | 0  
[openApp][openApp] | 打开手机上其它应用，可以传递参数  | 0 | 0 | 0  
[appInstalled][appInstalled] | 判断设备上面是否已安装指定应用  | 0 | 0 | 0  
[rebootApp][rebootApp] | 重启应用，云修复完成后可以调用此方法来重启应用使云修复生效  | 0 | 0 | 0  
[openWidget][openWidget] | 打开 Widget，若此 widget 已经被打开，则会把其调整到最前面显示  | 0 | 0 | 0  
[closeWidget][closeWidget] | 关闭指定widget，也可以关闭应用  | 0 | 0 | 0  
[ajax][ajax] | 跨域异步请求  | 0 | 0 | 0  
[cancelAjax][cancelAjax] | -  | 0 | 0 | 0  
[download][download] | 下载文件  | 0 | 0 | 0  
[cancelDownload][cancelDownload] | 取消文件下载  | 0 | 0 | 0  
[imageCache][imageCache] | 图片缓存  | 0 | 0 | 0
[readFile][readFile] | 读取文本文件内容，只支持utf-8编码文本类型文件  | 0 | 0 | 0
[writeFile][writeFile] | 写入内容到文本文件  | 0 | 0 | 0
[setPrefs][setPrefs] | 设置偏好数据  | 0 | 0 | 0
[getPrefs][getPrefs] | 获取偏好设置值  | 0 | 0 | 0
[removePrefs][removePrefs] | 删除偏好设置值  | 0 | 0 | 0
[clearCache][clearCache] | 清除缓存，包括下载的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。  | 0 | 0 | 0
[getCacheSize][getCacheSize] | 获取缓存占用空间大小，缓存包括下载的缓存文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间  | 0 | 0 | 0
[getTotalSpace][getTotalSpace] | 获取总存储空间大小  | 0 | 0 | 0
[getFreeDiskSpace][getFreeDiskSpace] | 获取剩余存储空间大小  | 0 | 0 | 0
[loadSecureValue][loadSecureValue] | 从加密的key.xml文件中读取指定数据，key.xml文件放置于网页包里面的res目录  | 0 | 0 | 0
[addEventListener][addEventListener] | 监听事件，支持系统事件和自定义事件  | 0 | 0 | 0
[removeEventListener][removeEventListener] | 移除事件监听  | 0 | 0 | 0
[sendEvent][sendEvent] | 将任意一个自定义事件广播出去，该事件可在任意页面通过 addEventListener 监听收到  | 0 | 0 | 0
[accessNative][accessNative] | 使用 SuperWebView 时，js 向原生发送消息。此方法只在使用 SuperWebView 时有效  | 0 | 0 | 0
[notification][notification] | 向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclick 事件获取该通知相关内容  | 0 | 0 | 0
[cancelNotification][cancelNotification] | 取消本应用弹出到状态栏的某个或所有通知，也可以清除设定的闹铃  | 0 | 0 | 0
[startLocation][startLocation] | 调用系统自带定位功能，开始定位  | 0 | 0 | 0
[stopLocation][stopLocation] | 停止定位  | 0 | 0 | 0
[getLocation][getLocation] | 之前已通过 startLocation() 方法进行定位，则直接返回上次定位的数据，否则使用默认设置进行定位  | 0 | 0 | 0
[startSensor][startSensor] | 开启传感器  | 0 | 0 | 0
[stopSensor][stopSensor] | 停止传感器  | 0 | 0 | 0
[sms][sms] | 调用系统短信界面发送短信，或者后台直接发送短信  | 0 | 0 | 0
[mail][mail] | 发送邮件  | 0 | 0 | 0
[call][call] | 拨打电话或进行faceTime  | 0 | 0 | 0
[openContacts][openContacts] | 在应用内打开系统通讯录界面选择联系人  | 0 | 0 | 0
[setStatusBarStyle][setStatusBarStyle] | 设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景）  | 0 | 0 | 0
[setScreenOrientation][setScreenOrientation] | 设置屏幕旋转方向  | 0 | 0 | 0
[setKeepScreenOn][setKeepScreenOn] | 设置是否禁止屏幕休眠  | 0 | 0 | 0
[toLauncher][toLauncher] | 回到系统桌面(Android)  | 0 | 0 | 0
[setScreenSecure][setScreenSecure] | -  | 0 | 0 | 0
[setAppIconBadge][setAppIconBadge] | 如小米和三星的某些型号，不支持的设备，表现结果为调用该接口无任何效果  | 0 | 0 | 0
[getPhoneNumber][getPhoneNumber] |   | 0 | 0 | 0
[setAppIconBadge][setAppIconBadge] | 获取本机电话号码，只支持 Android 部分手机  | 0 | 0 | 0
[alert][alert] | 弹出带一个按钮的对话框，更多按钮的对话框请使用confirm方法  | 0 | 0 | 0
[confirm][confirm] | 弹出带两个或三个按钮的confirm对话框  | 0 | 0 | 0
[actionSheet][actionSheet] | 底部弹出框  | 0 | 0 | 0
[showProgress][showProgress] | 显示进度提示框  | 0 | 0 | 0
[hideProgress][hideProgress] | 隐藏进度提示框  | 0 | 0 | 0
[toast][toast] | 弹出一个定时自动关闭的提示框  | 0 | 0 | 0
[openPicker][openPicker] | 打开时间选择器  | 0 | 0 | 0
[setRefreshHeaderInfo][setRefreshHeaderInfo] | 显示默认下拉刷新组件，使用默认下拉刷新组件时页面必须设置为弹动  | 0 | 0 | 0
[setCustomRefreshHeaderInfo][setCustomRefreshHeaderInfo] | 显示自定义下拉刷新组件  | 0 | 0 | 0
[refreshHeaderLoading][refreshHeaderLoading] | 设置下拉刷新组件为刷新中状态  | 0 | 0 | 0
[refreshHeaderLoadDone][refreshHeaderLoadDone] | 通知下拉刷新数据加载完毕，组件会恢复到默认状态  | 0 | 0 | 0
[showFloatBox][showFloatBox] | 展示一个悬浮框，浮动在屏幕上。  | 0 | 0 | 0
[getPicture][getPicture] | 通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。  | 0 | 0 | 0
[saveMediaToAlbum][saveMediaToAlbum] | 保存图片和视频到系统相册  | 0 | 0 | 0
[startRecord][startRecord] | 录制amr格式音频  | 0 | 0 | 0
[stopRecord][stopRecord] | 停止录音  | 0 | 0 | 0
[startPlay][startPlay] | 播放本地音频，支持amr格式  | 0 | 0 | 0
[stopPlay][stopPlay] | 停止播放音频  | 0 | 0 | 0
[openVideo][openVideo] | 打开系统视频播放器  | 0 | 0 | 0
[require][require] | 引用模块(wya.require("bMap"))  | 0 | 0 | 0

[openWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openWin.md
[closeWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeWin.md
[closeToWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeToWin.md
[setWinAttr]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setWinAttr.md
[openFrame]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openFrame.md
[closeFrame]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeFrame.md
[setFrameAttr]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setFrameAttr.md
[bringFrameToFront]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/bringFrameToFront.md
[sendFrameToBack]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/sendFrameToBack.md
[setFrameClient]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setFrameClient.md
[animation]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/animation.md
[openFrameGroup]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openFrameGroup.md
[closeFrameGroup]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeFrameGroup.md
[setFrameGroupAttr]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setFrameGroupAttr.md
[setFrameGroupIndex]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setFrameGroupIndex.md
[openPopoverWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openPopoverWin.md
[closePopoverWin]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closePopoverWin.md
[openSlidLayout]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openSlidLayout.md
[openSlidPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openSlidPane.md
[closeSlidPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeSlidPane.md
[lockSlidPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/lockSlidPane.md
[unlockSlidPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/unlockSlidPane.md
[openDrawerLayout]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openDrawerLayout.md
[openDrawerPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openDrawerPane.md
[closeDrawerPane]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeDrawerPane.md
[loadData]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/loadData.md
[execScript]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/execScript.md
[setBlurEffect]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setBlurEffect.md
[historyBack]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/historyBack.md
[historyForward]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/historyForward.md
[pageUp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/pageUp.md
[pageDown]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/pageDown.md
[removeLaunchView]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/removeLaunchView.md
[showLaunchView]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/showLaunchView.md
[parseTapmode]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/parseTapmode.md
[installApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/installApp.md
[uninstallApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/uninstallApp.md
[openApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openApp.md
[appInstalled]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/appInstalled.md
[rebootApp]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/rebootApp.md
[openWidget]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openWidget.md
[closeWidget]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/closeWidget.md
[ajax]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/ajax.md
[cancelAjax]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/cancelAjax.md
[download]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/download.md
[cancelDownload]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/cancelDownload.md
[imageCache]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/imageCache.md
[readFile]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/readFile.md
[writeFile]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/writeFile.md
[setPrefs]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setPrefs.md
[getPrefs]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getPrefs.md
[removePrefs]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/removePrefs.md
[clearCache]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/clearCache.md
[getCacheSize]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getCacheSize.md
[getTotalSpace]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getTotalSpace.md
[getFreeDiskSpace]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getFreeDiskSpace.md
[loadSecureValue]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/loadSecureValue.md
[addEventListener]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/addEventListener.md
[removeEventListener]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/removeEventListener.md
[sendEvent]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/sendEvent.md
[accessNative]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/accessNative.md
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
[setScreenSecure]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setScreenSecure.md
[setAppIconBadge]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setAppIconBadge.md
[getPhoneNumber]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getPhoneNumber.md
[setAppIconBadge]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setAppIconBadge.md
[alert]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/alert.md
[confirm]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/confirm.md
[actionSheet]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/actionSheet.md
[showProgress]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/showProgress.md
[hideProgress]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/hideProgress.md
[toast]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/toast.md
[openPicker]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openPicker.md
[setRefreshHeaderInfo]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setRefreshHeaderInfo.md
[setCustomRefreshHeaderInfo]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/setCustomRefreshHeaderInfo.md
[refreshHeaderLoading]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/refreshHeaderLoading.md
[refreshHeaderLoadDone]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/refreshHeaderLoadDone.md
[showFloatBox]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/showFloatBox.md
[getPicture]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/getPicture.md
[saveMediaToAlbum]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/saveMediaToAlbum.md
[startRecord]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startRecord.md
[stopRecord]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopRecord.md
[startPlay]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/startPlay.md
[stopPlay]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/stopPlay.md
[openVideo]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/openVideo.md
[require]: https://github.com/wya-team/hybrid-sdk/blob/master/docs/methods/require.md































