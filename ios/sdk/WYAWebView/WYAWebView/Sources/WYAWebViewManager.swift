//
//  WYAWebViewManager.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import Alamofire
import MediaPlayer
import UIKit
import WYAKit

@objc public enum jumpType: Int {
    case push = 0
    case present = 1
}

protocol WebViewDelegate: AnyObject {
    func getNativeActionResult(_ type: String, _ obj: String) -> Void
}

class WYAWebViewManager: NSObject {
    // 方法配置表
    let actionParams: [String: Selector] = {
        var params = [String: Selector]()
        // 模拟js触发原生方法（动态配置需要方法前加@objc）
        params.updateValue(#selector(batteryLowWithParams(outParams:)), forKey: "batteryLow")

        params.updateValue(#selector(openWinWithParams(outParams:)), forKey: "openWin")
        params.updateValue(#selector(closeWinWithParams(outParams:)), forKey: "closeWin")
        params.updateValue(#selector(closeToWinWithParams(outParams:)), forKey: "closeToWin")
        params.updateValue(#selector(setWinAttrWithParams(outParams:)), forKey: "setWinAttr")
        params.updateValue(#selector(openFrameWithParams(outParams:)), forKey: "openFrame")
        params.updateValue(#selector(closeFrameWithParams(outParams:)), forKey: "closeFrame")
        params.updateValue(#selector(setFrameAttrWithParams(outParams:)), forKey: "setFrameAttrWithParams")
        params.updateValue(#selector(bringFrameToFrontWithParams(outParams:)), forKey: "bringFrameToFrontWithParams")
        params.updateValue(#selector(sendFrameToBackWithParams(outParams:)), forKey: "sendFrameToBackWithParams")
        params.updateValue(#selector(setFrameClientWithParams(outParams:)), forKey: "setFrameClientWithParams")
        params.updateValue(#selector(animationWithParams(outParams:)), forKey: "animation")
        params.updateValue(#selector(openFrameGroupWithParams(outParams:)), forKey: "openFrameGroup")
        params.updateValue(#selector(closeFrameGroupWithParams(outParams:)), forKey: "closeFrameGroup")
        params.updateValue(#selector(setFrameGroupAttrWithParams(outParams:)), forKey: "setFrameGroupAttr")
        params.updateValue(#selector(setFrameGroupIndexWithParams(outParams:)), forKey: "setFrameGroupIndex")
        params.updateValue(#selector(openPopoverWinWithParams(outParams:)), forKey: "openPopoverWin")
        params.updateValue(#selector(closePopoverWinWithParams(outParams:)), forKey: "closePopoverWin")
        params.updateValue(#selector(openSlidLayoutWithParams(outParams:)), forKey: "openSlid")
        params.updateValue(#selector(openSlidPaneWithParams(outParams:)), forKey: "openSlidPane")
        params.updateValue(#selector(closeSlidPaneWithParams(outParams:)), forKey: "closeSlidPane")
        params.updateValue(#selector(lockSlidPaneWithParams(outParams:)), forKey: "lockSlidPane")
        params.updateValue(#selector(unlockSlidPaneWithParams(outParams:)), forKey: "unlockSlidPane")
        params.updateValue(#selector(openDrawerLayoutWithParams(outParams:)), forKey: "openDrawerLayout")
        params.updateValue(#selector(openDrawerPaneWithParams(outParams:)), forKey: "openDrawerPane")
        params.updateValue(#selector(closeDrawerPaneWithParams(outParams:)), forKey: "closeDrawerPane")
        params.updateValue(#selector(loadDataWithParams(outParams:)), forKey: "loadData")
        params.updateValue(#selector(execScriptWithParams(outParams:)), forKey: "execScript")
        params.updateValue(#selector(setBlurEffectWithParams(outParams:)), forKey: "setBlurEffect")
        params.updateValue(#selector(historyBackWithParams(outParams:)), forKey: "historyBack")
        params.updateValue(#selector(historyForwardWithParams(outParams:)), forKey: "historyForward")
        params.updateValue(#selector(pageUpWithParams(outParams:)), forKey: "pageUp")
        params.updateValue(#selector(pageDownWithParams(outParams:)), forKey: "pageDown")
        params.updateValue(#selector(removeLaunchViewWithParams(outParams:)), forKey: "removeLaunchView")
        params.updateValue(#selector(showLaunchViewWithParams(outParams:)), forKey: "showLaunchView")
        params.updateValue(#selector(parseTapmodeWithParams(outParams:)), forKey: "parseTapmode")
        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "installApp")
        params.updateValue(#selector(openAppWithParams(outParams:)), forKey: "openApp")
        params.updateValue(#selector(appInstalledWithParams(outParams:)), forKey: "appInstalled")
        params.updateValue(#selector(rebootAppWithParams(outParams:)), forKey: "reboot")
        params.updateValue(#selector(openWidgetWithParams(outParams:)), forKey: "openWidget")
        params.updateValue(#selector(closeWidgetWithParams(outParams:)), forKey: "closeWidget")
        params.updateValue(#selector(ajaxWithParams(outParams:)), forKey: "ajax")
        params.updateValue(#selector(cancelAjaxWithParams(outParams:)), forKey: "cancelAjax")
        params.updateValue(#selector(downloadWithParams(outParams:)), forKey: "download")
        params.updateValue(#selector(cancelDownloadWithParams(outParams:)), forKey: "cancelDownload")
        params.updateValue(#selector(imageCacheWithParams(outParams:)), forKey: "imageCache")
        params.updateValue(#selector(readFileWithParams(outParams:)), forKey: "readFile")
        params.updateValue(#selector(writeFileWithParams(outParams:)), forKey: "writeFile")
        params.updateValue(#selector(setPrefsWithParams(outParams:)), forKey: "setPrefs")
        params.updateValue(#selector(getPrefsWithParams(outParams:)), forKey: "getPrefs")
        params.updateValue(#selector(removePrefsWithParams(outParams:)), forKey: "removePrefs")
        params.updateValue(#selector(clearCacheWithParams(outParams:)), forKey: "clearCache")
        params.updateValue(#selector(getCacheSizeWithParams(outParams:)), forKey: "getCacheSize")
        params.updateValue(#selector(getTotalSpaceWithParams(outParams:)), forKey: "getTotalSpace")
        params.updateValue(#selector(getFreeDiskSpaceWithParams(outParams:)), forKey: "getFreeDiskSpace")
        params.updateValue(#selector(loadSecureValueWithParams(outParams:)), forKey: "loadSecureValue")
        params.updateValue(#selector(addEventListenerWithParams(outParams:)), forKey: "addEventListener")
        params.updateValue(#selector(removeEventListenerWithParams(outParams:)), forKey: "removeEventListener")
        params.updateValue(#selector(sendEventWithParams(outParams:)), forKey: "sendEvent")
        params.updateValue(#selector(accessNativeWithParams(outParams:)), forKey: "accessNative")
        params.updateValue(#selector(notificationWithParams(outParams:)), forKey: "notification")
        params.updateValue(#selector(cancelNotificationWithParams(outParams:)), forKey: "cancelNotification")
        params.updateValue(#selector(startLocationWithParams(outParams:)), forKey: "startLocation")
        params.updateValue(#selector(stopLocationWithParams(outParams:)), forKey: "stopLocation")
        params.updateValue(#selector(getLocationWithParams(outParams:)), forKey: "getLocation")
        params.updateValue(#selector(startSensorWithParams(outParams:)), forKey: "startSensor")
        params.updateValue(#selector(stopSensorWithParams(outParams:)), forKey: "stopSensor")
        params.updateValue(#selector(smsWithParams(outParams:)), forKey: "sms")
        params.updateValue(#selector(mailWithParams(outParams:)), forKey: "mail")
        params.updateValue(#selector(callWithParams(outParams:)), forKey: "call")
        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "openContacts")
        params.updateValue(#selector(setStatusBarStyleWithParams(outParams:)), forKey: "setStatusBarStyle")
        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "setScreenOrientation")
        params.updateValue(#selector(setKeepScreenOnWithParams(outParams:)), forKey: "setKeepScreenOn")
        params.updateValue(#selector(toLauncherWithParams(outParams:)), forKey: "toLauncher")
        params.updateValue(#selector(setScreenSecureWithParams(outParams:)), forKey: "setScreenSecure")
        params.updateValue(#selector(setAppIconBadgeWithParams(outParams:)), forKey: "setAppIconBadge")
        params.updateValue(#selector(getPhoneNumberWithParams(outParams:)), forKey: "getPhoneNumber")
        params.updateValue(#selector(alertWithParams(outParams:)), forKey: "alert")
        params.updateValue(#selector(confirmWithParams(outParams:)), forKey: "confirm")
        params.updateValue(#selector(actionSheetWithParams(outParams:)), forKey: "actionSheet")
        params.updateValue(#selector(showProgressWithParams(outParams:)), forKey: "showProgress")
        params.updateValue(#selector(hideProgressWithParams(outParams:)), forKey: "hideProgress")
        params.updateValue(#selector(toastWithParams(outParams:)), forKey: "toast")
        params.updateValue(#selector(openPickerWithParams(outParams:)), forKey: "openPicker")
        params.updateValue(#selector(setRefreshHeaderInfoWithParams(outParams:)), forKey: "setRefreshHeaderInfo")
        params.updateValue(#selector(setCustomRefreshHeaderInfoWithParams(outParams:)), forKey: "setCustomRefreshHeaderInfo")
        params.updateValue(#selector(refreshHeaderLoadingWithParams(outParams:)), forKey: "refreshHeaderLoading")
        params.updateValue(#selector(refreshHeaderLoadDoneWithParams(outParams:)), forKey: "refreshHeaderLoadDone")
        params.updateValue(#selector(showFloatBoxWithParams(outParams:)), forKey: "showFloatBox")
        params.updateValue(#selector(getPictureWithParams(outParams:)), forKey: "getPicture")
        params.updateValue(#selector(saveMediaToAlbumWithParams(outParams:)), forKey: "saveMediaToAlbum")
        params.updateValue(#selector(startRecordWithParams(outParams:)), forKey: "startRecord")
        params.updateValue(#selector(stopRecordWithParams(outParams:)), forKey: "stopRecord")
        params.updateValue(#selector(startPlayWithParams(outParams:)), forKey: "startPlay")
        params.updateValue(#selector(stopPlayWithParams(outParams:)), forKey: "stopPlay")
        params.updateValue(#selector(openVideoWithParams(outParams:)), forKey: "openVideo")
        return params
    }()

    weak var nativeDelegate: WebViewDelegate?

    var config = SystemConfig()

    var currentVolume: Float?

    let netManager = NetworkReachabilityManager(host: "www.apple.com")

    func listenAction(_ actionType: String, _ params: [String: Any]) {
        let string = dicTosJsonString(params)
        nativeDelegate?.getNativeActionResult(actionType, string)
    }

    deinit {
        removeNotice()
    }
}

// MARK: - js调用原生方法,方法需要在actionParams里注册

extension WYAWebViewManager {
    func nativeAction(_ method: String, params: [String: Any]) {
        if self.actionParams.keys.contains(method) {
            let sel = actionParams[method]
//            let data = try! JSONSerialization.data(withJSONObject: params, options: [])
//            let person = try? JSONDecoder().decode(OpenWinModel.self, from: data)
            print(sel!)
            performSelector(inBackground: sel!, with: params)
        }
    }

    /// 测试事件通知流程
    ///
    /// - Parameter outParams: 参数
    @objc func batteryLowWithParams(outParams: [String: Any]) {
        print("aaa")
        print(outParams)
        var params = [String: Any]()
        params.updateValue("1", forKey: "status")
        params.updateValue("调用成功", forKey: "msg")
        listenAction("batteryLow", params)
    }

    /// openWin
    ///
    /// - Parameter params: 接收到的参数
    @objc func openWinWithParams(outParams: [String: Any]) {
        let rootVC = outParams["rootVC"] as! UIViewController
        let vc = outParams["vc"]
        let type = outParams["jumpType"]

        func push() {
            DispatchQueue.main.async {
                if vc == nil {
                    let centerVC = WYAViewController()
                    centerVC.enableSlidPane = true
                    centerVC.navT = "中心"
                    centerVC.needWebView = true
                    centerVC.needNavBar = false
                    rootVC.navigationController?.pushViewController(centerVC, animated: true)
                } else {
                    rootVC.navigationController?.pushViewController(vc as! UIViewController, animated: true)
                }
            }
        }

        func present() {
            DispatchQueue.main.async {
                if vc == nil {
                    rootVC.present(WYAViewController(), animated: true, completion: {})
                } else {
                    rootVC.present(vc as! UIViewController, animated: true, completion: {})
                }
            }
        }

        guard type != nil else {
            guard rootVC.navigationController != nil else { return }
            push()
            return
        }

        switch type as! jumpType {
            case .push:
                guard rootVC.navigationController != nil else { return }
                push()
                break
            case .present:
                present()
                break
            default:
                guard rootVC.navigationController != nil else { return }
                push()
                break
        }
    }

    @objc func closeWinWithParams(outParams: [String: Any]) {
        print("返回")
    }
    @objc func closeToWinWithParams(outParams: [String: Any]) {}
    @objc func setWinAttrWithParams(outParams: [String: Any]) {}
    @objc func openFrameWithParams(outParams: [String: Any]) {}
    @objc func closeFrameWithParams(outParams: [String: Any]) {}
    @objc func setFrameAttrWithParams(outParams: [String: Any]) {}
    @objc func bringFrameToFrontWithParams(outParams: [String: Any]) {}
    @objc func sendFrameToBackWithParams(outParams: [String: Any]) {}
    @objc func setFrameClientWithParams(outParams: [String: Any]) {}
    @objc func animationWithParams(outParams: [String: Any]) {}
    @objc func openFrameGroupWithParams(outParams: [String: Any]) {}
    @objc func closeFrameGroupWithParams(outParams: [String: Any]) {}
    @objc func setFrameGroupAttrWithParams(outParams: [String: Any]) {}
    @objc func setFrameGroupIndexWithParams(outParams: [String: Any]) {}
    @objc func openPopoverWinWithParams(outParams: [String: Any]) {}
    @objc func closePopoverWinWithParams(outParams: [String: Any]) {}
    @objc func openSlidLayoutWithParams(outParams: [String: Any]) {}
    @objc func openSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func closeSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func lockSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func unlockSlidPaneWithParams(outParams: [String: Any]) {}
    @objc func openDrawerLayoutWithParams(outParams: [String: Any]) {}
    @objc func openDrawerPaneWithParams(outParams: [String: Any]) {}
    @objc func closeDrawerPaneWithParams(outParams: [String: Any]) {}
    @objc func loadDataWithParams(outParams: [String: Any]) {}
    @objc func execScriptWithParams(outParams: [String: Any]) {}
    @objc func setBlurEffectWithParams(outParams: [String: Any]) {}
    @objc func historyBackWithParams(outParams: [String: Any]) {}
    @objc func historyForwardWithParams(outParams: [String: Any]) {}
    @objc func pageUpWithParams(outParams: [String: Any]) {}
    @objc func pageDownWithParams(outParams: [String: Any]) {}
    @objc func removeLaunchViewWithParams(outParams: [String: Any]) {}
    @objc func showLaunchViewWithParams(outParams: [String: Any]) {}
    @objc func parseTapmodeWithParams(outParams: [String: Any]) {}

    /// 安装应用,如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页
    ///
    /// - Parameter outParams: 需要下载的appUri
    @objc func installAppWithParams(outParams: [String: Any]) {
        print(outParams)
        let tempString = "https://itunes.apple.com/cn/app/jie-zou-da-shi/id493901993?mt=8"
        var urlString = ""
        if tempString.hasPrefix("http") {
           urlString = tempString.replacingOccurrences(of: "http", with: "itms-apps")
        }
        if tempString.hasPrefix("https") {
            urlString = tempString.replacingOccurrences(of: "https", with: "itms-apps")
        }
        if urlString.hasPrefix("itms-apps"){
            let url = URL(string: urlString)
            DispatchQueue.main.async {
                if UIApplication.shared.openURL(url!){
                    // success
                } else{
                    // fail
                }
            }
        }
    }


    /// 打开手机上其它应用，可以传递参数
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func openAppWithParams(outParams: [String: Any]) {
        print(outParams)
        let str = "sinaweibo://hello"
        let url = URL.init(string: str)
        DispatchQueue.main.async {
            if UIApplication.shared.canOpenURL(url!) {
                UIApplication.shared.openURL(url!)
            } else {
                print("不可以打开")
            }
        }

    }


    /// 判断设备上是否已安装指定应用
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func appInstalledWithParams(outParams: [String: Any]) {
         DispatchQueue.main.async {
            if UIApplication.shared.canOpenURL(URL(string: "")!) {
                // success
            } else {
                // fail
            }
        }
    }

    @objc func rebootAppWithParams(outParams: [String: Any]) {}
    @objc func openWidgetWithParams(outParams: [String: Any]) {}
    @objc func closeWidgetWithParams(outParams: [String: Any]) {}
    @objc func ajaxWithParams(outParams: [String: Any]) {}
    @objc func cancelAjaxWithParams(outParams: [String: Any]) {}
    @objc func downloadWithParams(outParams: [String: Any]) {}
    @objc func cancelDownloadWithParams(outParams: [String: Any]) {}
    @objc func imageCacheWithParams(outParams: [String: Any]) {}
    @objc func readFileWithParams(outParams: [String: Any]) {}
    @objc func writeFileWithParams(outParams: [String: Any]) {}
    @objc func setPrefsWithParams(outParams: [String: Any]) {}
    @objc func getPrefsWithParams(outParams: [String: Any]) {}
    @objc func removePrefsWithParams(outParams: [String: Any]) {}


    /// 清理缓存
    ///
    /// - Parameter outParams: 需要的清理的路径信息
    @objc func clearCacheWithParams(outParams: [String: Any]) {
        WYAClearCache.wya_clearCachesClearStatusBlock { (AnyObject) in
            print("清理缓存成功")
        }
    }

    /// 获取缓存占用空间大小
    ///
    /// - Parameter outParams: 缓存的路径默认为Cache
    @objc func getCacheSizeWithParams(outParams: [String: Any]) {
        WYAClearCache.wya_defaultCachesFolderSizeBlock { (AnyObject) in
            print("系统缓存空间\(AnyObject)")
        }
    }

    /// 获取总空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getTotalSpaceWithParams(outParams: [String: Any]) {
       let divceTotalSpace = WYAClearCache.wya_getDivceTotalSize()
        print("系统总空间\(divceTotalSpace)")

    }

    /// 获取剩余存储空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getFreeDiskSpaceWithParams(outParams: [String: Any]) {
        let space = NSString.wya_phoneFreeMemory()
        WYAClearCache.wya_getDivceAvailableSizeBlock { (AnyObject) in
            print("系统可用空间\(AnyObject)")
        }
        print(space)
    }

    @objc func loadSecureValueWithParams(outParams: [String: Any]) {}
    @objc func addEventListenerWithParams(outParams: [String: Any]) {}
    @objc func removeEventListenerWithParams(outParams: [String: Any]) {}
    @objc func sendEventWithParams(outParams: [String: Any]) {}
    @objc func accessNativeWithParams(outParams: [String: Any]) {}
    @objc func notificationWithParams(outParams: [String: Any]) {}
    @objc func cancelNotificationWithParams(outParams: [String: Any]) {}
    @objc func startLocationWithParams(outParams: [String: Any]) {}
    @objc func stopLocationWithParams(outParams: [String: Any]) {}
    @objc func getLocationWithParams(outParams: [String: Any]) {}
    @objc func startSensorWithParams(outParams: [String: Any]) {}
    @objc func stopSensorWithParams(outParams: [String: Any]) {}
    @objc func smsWithParams(outParams: [String: Any]) {}
    @objc func mailWithParams(outParams: [String: Any]) {}
    @objc func callWithParams(outParams: [String: Any]) {}
    @objc func openContactsWithParams(outParams: [String: Any]) {}
    @objc func setStatusBarStyleWithParams(outParams: [String: Any]) {}
    @objc func setScreenOrientationWithParams(outParams: [String: Any]) {}
    @objc func setKeepScreenOnWithParams(outParams: [String: Any]) {}
    @objc func toLauncherWithParams(outParams: [String: Any]) {}
    @objc func setScreenSecureWithParams(outParams: [String: Any]) {}
    @objc func setAppIconBadgeWithParams(outParams: [String: Any]) {}
    @objc func getPhoneNumberWithParams(outParams: [String: Any]) {}
    @objc func alertWithParams(outParams: [String: Any]) {}
    @objc func confirmWithParams(outParams: [String: Any]) {}
    @objc func actionSheetWithParams(outParams: [String: Any]) {}
    @objc func showProgressWithParams(outParams: [String: Any]) {}
    @objc func hideProgressWithParams(outParams: [String: Any]) {}
    @objc func toastWithParams(outParams: [String: Any]) {}
    @objc func openPickerWithParams(outParams: [String: Any]) {}
    @objc func setRefreshHeaderInfoWithParams(outParams: [String: Any]) {}
    @objc func setCustomRefreshHeaderInfoWithParams(outParams: [String: Any]) {}
    @objc func refreshHeaderLoadingWithParams(outParams: [String: Any]) {}
    @objc func refreshHeaderLoadDoneWithParams(outParams: [String: Any]) {}
    @objc func showFloatBoxWithParams(outParams: [String: Any]) {}
    @objc func getPictureWithParams(outParams: [String: Any]) {}
    @objc func saveMediaToAlbumWithParams(outParams: [String: Any]) {}
    @objc func startRecordWithParams(outParams: [String: Any]) {}
    @objc func stopRecordWithParams(outParams: [String: Any]) {}
    @objc func startPlayWithParams(outParams: [String: Any]) {}
    @objc func stopPlayWithParams(outParams: [String: Any]) {}
    @objc func openVideoWithParams(outParams: [String: Any]) {}
}

// MARK: - 事件

extension WYAWebViewManager {
    func registerSystemNotice() {
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

        self.handleVolum()

        func assemblyParams(_ actionType: String, _ inParams: [String: Any]) {
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")
            params.updateValue(inParams, forKey: "data")
            listenAction(actionType, params)
        }

        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            let inParams = [String: Any]()
            var actionType: String

            if (self.netManager?.isReachable)! {
                actionType = "online"
            } else {
                actionType = "offline"
            }
            assemblyParams(actionType, inParams)
        }
        self.netManager?.startListening()

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池电量变化")

            var subParams = [String: Any]()

            if device.batteryLevel <= 0.2 {
                subParams.updateValue(device.batteryLevel * 100, forKey: "level")
                switch device.batteryState {
                    case .unknown: break
                    case .unplugged: subParams.updateValue(false, forKey: "isPlugged"); break
                    case .charging: subParams.updateValue(true, forKey: "isPlugged"); break
                    case .full: subParams.updateValue(false, forKey: "isPlugged"); break
                }
                assemblyParams("batteryStatus", subParams)
            }
        }

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池状态")

            var subParams = [String: Any]()
            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            switch device.batteryState {
                case .unknown: subParams.updateValue(false, forKey: "isPlugged"); break
                case .unplugged: subParams.updateValue(false, forKey: "isPlugged"); break
                case .charging: subParams.updateValue(true, forKey: "isPlugged"); break
                case .full: subParams.updateValue(false, forKey: "isPlugged"); break
            }
            assemblyParams("batteryStatus", subParams)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { _ in
            print("后台")
            assemblyParams("pause", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { _ in
            print("前台")
            assemblyParams("resume", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            print("休眠")
            assemblyParams("appIdle", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillShow, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要弹出")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            print("键盘已经弹出")
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            assemblyParams("keyboardShow", inParams)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要消失")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘已经消失")
            assemblyParams("keyboardShow", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { _ in
            print("截屏")

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)
            let inParams = [String: Any]()

            self.listenAction("takeScreenshot", inParams)
        }

        note.addObserver(forName: NSNotification.Name.closeWin, object: nil, queue: OperationQueue.main) { _ in
            // 关闭窗口
            print("closewin")
            let inParams = [String: Any]()

            self.listenAction("closeWin", inParams)
        }
    }
}

extension WYAWebViewManager {
    func getNetWork(params: [String: String]) {
        // 获取网络状态

        // 回传信息
        self.nativeDelegate?.getNativeActionResult("", "sss")
    }
}

// MARK: - json字符串与字典之间的互转

extension WYAWebViewManager {
    /// 拆分url获取方法名形成字典
    ///
    /// - Parameter urlString: urlString
    /// - Returns: dic
    func cutString(urlString: String) -> NSMutableDictionary {
        print(urlString)
        let dic = NSMutableDictionary()
        if !urlString.contains("//") {
            return dic
        }
        let array = urlString.components(separatedBy: "//")
        dic.setValue(array.first ?? "不存在", forKey: "protocol")

        let lastString = array.last
        if !(lastString?.contains("?"))! {
            dic.setValue(lastString, forKey: "method")
            return dic
        }
        let methodArray = lastString?.components(separatedBy: "?")
        dic.setValue(methodArray?.first ?? "不存在", forKey: "method")

        let queryString = methodArray?.last
        if queryString != nil {
            let arra = queryString?.components(separatedBy: "=")

            dic.setValue(arra?.last, forKey: "id")
        }

        return dic
    }

    // MARK: 字典转字符串

    func dicTosJsonString(_ dic: [String: Any]) -> String {
        let data = try? JSONSerialization.data(withJSONObject: dic, options: .prettyPrinted)
        let str = String(data: data!, encoding: String.Encoding.utf8)
        return str!
    }

    // MARK: 字符串转字典

    func jsonStringToDic(_ str: String) -> [String: Any]? {
        let data = str.data(using: String.Encoding.utf8)
        if let dict = try? JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? [String: Any] {
            return dict
        }
        return nil
    }
}

// MARK: 按键事件

extension WYAWebViewManager {
    /**
     返回事件
     */
    func backBtnPressed() {
        self.nativeDelegate?.getNativeActionResult("keyBack", "")
    }

    /// 音量变化监听
    func handleVolum() {
        do {
            try AVAudioSession.sharedInstance().setActive(true)
        } catch let error as NSError {
            print("\(error)")
        }
        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        UIApplication.shared.beginReceivingRemoteControlEvents()
    }

    @objc func changeVolumSlider(notifi: NSNotification) {
        if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
            if volum > self.currentVolume! {
                self.nativeDelegate?.getNativeActionResult("volumeUp", "")
                print("增大")
            } else {
                self.nativeDelegate?.getNativeActionResult("voolumeDown", "")
                print("减小")
            }
            self.currentVolume = volum
        }
    }
}

extension WYAWebViewManager {
    public func removeNotice() {
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidEnterBackground, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidBecomeActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillResignActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.closeWin, object: nil)
        UIApplication.shared.endReceivingRemoteControlEvents()
    }
}

extension Notification.Name {
    static let closeWin = NSNotification.Name("closeWin")
}
