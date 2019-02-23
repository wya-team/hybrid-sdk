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

import AudioToolbox
import UserNotifications
import NTYAmrConverter
import AVKit

import MessageUI
import ContactsUI


@objc public enum jumpType: Int {
    case push = 0
    case present = 1
}

enum type {
    case aaa(String)
}

protocol WebViewDelegate: AnyObject {
    func getNativeActionResult(_ type: String, _ obj: String) -> Void
}

class WYAWebViewManager: NSObject , CNContactPickerDelegate{
    // 方法配置表
    let actionParams: [String: Selector] = {
        var params = [String: Selector]()
        // 模拟js触发原生方法（动态配置需要方法前加@objc）
        params.updateValue(#selector(openWinWithParams(outParams:)), forKey: "push")
        params.updateValue(#selector(closeWinWithParams(outParams:)), forKey: "pop")
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

    static let shared = WYAWebViewManager()

    var config = SystemConfig()

    var currentVolume: Float?

    let netManager = NetworkReachabilityManager(host: "www.apple.com")
    var recorder : AVAudioRecorder? = nil
    var audioPlayer : AVAudioPlayer? = nil

    var recorderPath : String?

    func listenAction(_ actionType: String, _ params: [String: Any]) {
        let string = dicTosJsonString(params)
        nativeDelegate?.getNativeActionResult(actionType, string)
    }

    deinit {
        removeNotice()
    }
}

// MARK: - js调用原生方法,方法需要在actionParams里注册

extension WYAWebViewManager :MFMessageComposeViewControllerDelegate,MFMailComposeViewControllerDelegate{
    func nativeAction(_ method: String, params: [String: Any]) {
        if self.actionParams.keys.contains(method) {
            let sel = actionParams[method]
//            let data = try! JSONSerialization.data(withJSONObject: params, options: [])
//            let person = try? JSONDecoder().decode(OpenWinModel.self, from: data)
            print(sel!)
            performSelector(inBackground: sel!, with: params)
        }
    }

    func getModel<T>(_ params: [String : Any]) -> T where T : Codable{
        let jsonDecoder = JSONDecoder()
        let jsonData = try? JSONSerialization.data(withJSONObject: params, options: [])
        var briefModel : T?

        do {
            briefModel = try jsonDecoder.decode(T.self, from: jsonData!)
        } catch {
            print(error)
        }
        return briefModel!
    }

    /// openWin
    ///
    /// - Parameter params: 接收到的参数
    @objc func openWinWithParams(outParams : [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let vc = developParams["vc"]
        let type = developParams["jumpType"]

        let model = getModel(outParams["params"] as! [String : Any]) as OpenWinModel

        print(model as Any)

        func push(_ vc: UIViewController, _ animation: Bool) {
            DispatchQueue.main.async {
                vc.hidesBottomBarWhenPushed = model.pageParams?.hideBottomBar ?? true
                rootVC.navigationController?.pushViewController(vc, animated: animation)
            }
        }

        func present(_ vc: UIViewController) {
            DispatchQueue.main.async {
                rootVC.present(vc, animated: true, completion: {})
            }
        }

        guard rootVC.navigationController != nil else { return }

        let centerVC = WYAViewController()
        centerVC.model = model

        switch model.pageParams?.animation {
        case "card": push(centerVC, true); break
        case "modal": present(centerVC); break
        case "none":push(centerVC, false);  break
        default:
            break
        }
    }

    @objc func closeWinWithParams(outParams: [String: Any]) {
        print("返回")
        let developParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let param = outParams["params"] as! [String : Any]
        let vcName = param["name"]
        let animation = param["animation"] as? String


        func pop(_ animation : Bool) {

            if vcName != nil{
                let viewControllers = rootVC.navigationController?.viewControllers
                for vc in viewControllers! {
                    if vc is WYAViewController {
                        let viewController = vc as! WYAViewController
                        if viewController.model?.name == (vcName as? String) {
                            rootVC.navigationController?.popToViewController(viewController, animated: animation)
                        }
                    }
                }
            }else{
                rootVC.navigationController?.popViewController(animated: animation)
            }

        }

        func dismiss() {
            rootVC.dismiss(animated: true, completion: nil)
        }

        switch animation {
        case "card": pop(true); break
        case "modal": dismiss(); break
        case "none":pop(false);  break
        default:
            break
        }
    }

    @objc func closeToWinWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let param = outParams["params"] as! [String : Any]
        let vcName = param["name"]
        let animation = param["animation"] as? String

        func pop(_ animation : Bool) {

            let viewControllers = rootVC.navigationController?.viewControllers
            for vc in viewControllers! {
                if vc is WYAViewController {
                    let viewController = vc as! WYAViewController
                    if viewController.model?.name == (vcName as? String) {
                        DispatchQueue.main.async {
                            rootVC.navigationController?.popToViewController(viewController, animated: true)
                        }

                        return
                    }
                }
            }
        }

        switch animation {
        case "card": pop(true); break
        case "modal": pop(true); break
        case "none":pop(false);  break
        default:
            break
        }
    }
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
        let params = outParams["params"] as! [String:Any]
        let tempString = params["url"] as! String
//"https://itunes.apple.com/cn/app/jie-zou-da-shi/id493901993?mt=8"

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
                guard UIApplication.shared.canOpenURL(url!) else{
                    UIView.wya_showCenterToast(withMessage: "无效的地址")
                    self.listenAction("installApp", ["status":0,"msg":"无效的地址","data":NSNull()])
                    return
                }
                 UIApplication.shared.openURL(url!)
                self.listenAction("installApp", ["status":1,"msg":"调用成功","data":NSNull()])

            }
        }
    }

    /// 打开手机上其它应用，可以传递参数
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func openAppWithParams(outParams: [String: Any]) {
        print(outParams)
//        let str = "sinaweibo://hello"
        let params = outParams["params"] as! [String:Any]
        let str = params["scheme"] as! String
        let url = URL.init(string: str)
        DispatchQueue.main.async {
            guard UIApplication.shared.canOpenURL(url!) else{
                UIView.wya_showCenterToast(withMessage: "无法打开APP")
                return
            }
            UIApplication.shared.openURL(url!)
        }

    }


    /// 判断设备上是否已安装指定应用
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func appInstalledWithParams(outParams: [String: Any]) {
        let str = "sinaweibo://hello"
        let url = URL.init(string: str)
        DispatchQueue.main.async {
            if UIApplication.shared.canOpenURL(url!) {
                print("存在")
                UIView.wya_showCenterToast(withMessage: "新浪微博APP存在")
            } else {
                print("不存在")
                UIView.wya_showCenterToast(withMessage: "新浪微博APP不存在")
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
        WYAClearCache.wya_clearCachesClearStatusBlock { (clearStatus) in
            print("清理缓存成功")
            UIView.wya_showCenterToast(withMessage: "缓存清理成功")

        }
    }

    /// 获取缓存占用空间大小
    ///
    /// - Parameter outParams: 缓存的路径默认为Cache
    @objc func getCacheSizeWithParams(outParams: [String: Any]) {
        WYAClearCache.wya_defaultCachesFolderSizeBlock { (folderSize) in
            print("系统缓存空间\(folderSize)")
            UIView.wya_showCenterToast(withMessage: "系统缓存空间\(folderSize)")
        }
    }

    /// 获取总空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getTotalSpaceWithParams(outParams: [String: Any]) {
       let divceTotalSpace = WYAClearCache.wya_getDivceTotalSize()
        print("系统总空间\(divceTotalSpace)")
        UIView.wya_showCenterToast(withMessage:"系统总空间\(divceTotalSpace)")
    }

    /// 获取剩余存储空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getFreeDiskSpaceWithParams(outParams: [String: Any]) {
        let space = NSString.wya_phoneFreeMemory()
        WYAClearCache.wya_getDivceAvailableSizeBlock { (folderSize) in
            print("系统可用空间\(folderSize)")
            UIView.wya_showCenterToast(withMessage:"系统可用空间\(folderSize)")
        }
        print(space)
    }

    @objc func loadSecureValueWithParams(outParams: [String: Any]) {}
    @objc func addEventListenerWithParams(outParams: [String: Any]) {}
    @objc func removeEventListenerWithParams(outParams: [String: Any]) {}
    @objc func sendEventWithParams(outParams: [String: Any]) {}
    @objc func accessNativeWithParams(outParams: [String: Any]) {}

    @objc func notificationWithParams(outParams: [String: Any]) {
        let model = getModel(outParams["params"] as! [String : Any]) as NotificationModel
        print(model as Any)
//        let sound = SystemSoundID(4095)
//        AudioServicesPlaySystemSound(sound)
//        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)

        if #available(iOS 10.0, *) {
            let content = UNMutableNotificationContent()
            content.title = model.notify?.title ?? ""
            content.subtitle = ""
            content.body = model.notify?.content ?? "有新消息"

            content.sound = UNNotificationSound.default()

            let date = Date(timeIntervalSince1970: model.timestamp!)
            let dateComponents = Calendar.current.dateComponents([.year,.month,.day, .hour,.minute,.second], from: date)

            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: false)
//            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 60, repeats: true)
            let request = UNNotificationRequest(identifier: "xxx", content: content, trigger: trigger)

            // 4
            UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)

        }else{
            let setDate = Date(timeIntervalSince1970: model.timestamp!)
            print(setDate as Any)

            let nowDate = Date()
            if setDate.compare(nowDate) == .orderedAscending {
                return
            }
            if setDate.compare(nowDate) == .orderedSame {

            }
            if setDate.compare(nowDate) == .orderedDescending {
                let not = UILocalNotification()
                not.fireDate = setDate
                not.timeZone = TimeZone.autoupdatingCurrent
                if #available(iOS 8.2, *) {
                    not.alertTitle = model.notify?.title
                    not.repeatInterval = NSCalendar.Unit(rawValue: 1)
                } else {

                }
                not.alertBody = model.notify?.content
                not.userInfo = ["key" : "xxx"]
                UIApplication.shared.scheduleLocalNotification(not)
            }
        }
        listenAction("notification", ["id":"1"])

    }

    @objc func cancelNotificationWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String : Any]
        let id = param["id"] as! String
        if id == "-1" {
            if #available(iOS 10.0, *) {
                UNUserNotificationCenter.current().removeDeliveredNotifications(withIdentifiers: ["xxx"])
            }else {
                let arr = UIApplication.shared.scheduledLocalNotifications
                if (arr?.count)!>0 {
                    for item in arr! {
                        if (item.userInfo!["key"] as! String) == "xxx" {
                            UIApplication.shared.cancelLocalNotification(item)
                        }
                    }
                }
            }
        }

    }

    @objc func startLocationWithParams(outParams: [String: Any]) {}
    @objc func stopLocationWithParams(outParams: [String: Any]) {}
    @objc func getLocationWithParams(outParams: [String: Any]) {}
    @objc func startSensorWithParams(outParams: [String: Any]) {}
    @objc func stopSensorWithParams(outParams: [String: Any]) {}

    // MARK:MFMessageComposeViewControllerDelegate
    func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
        controller.dismiss(animated: true, completion: nil)
        var msg = ""
        switch result {
        case .sent:
            print("短信发送成功")
            msg = "发送成功"
            UIView.wya_showCenterToast(withMessage:"短信发送成功")
        case .cancelled:
            print("短信取消发送")
            msg = "取消发送"
             UIView.wya_showCenterToast(withMessage:"短信取消发送")
        case .failed:
            print("短信发送失败")
            msg = "发送失败"
             UIView.wya_showCenterToast(withMessage:"短信发送失败")
        }
        listenAction("sms", ["status":1,"msg":msg,"data":NSNull()])
    }
    /// 调用系统短信界面发送短信，或者后台直接发送短信
    ///
    /// - Parameter outParams: 需要的参数
    @objc func smsWithParams(outParams: [String: Any]) {
        guard MFMessageComposeViewController.canSendText()else{
            print("该设备不能发送短信")
            listenAction("sms", ["status":0,"msg":"调用失败","data":NSNull()])
            UIView.wya_showCenterToast(withMessage:"该设备不能发送短信")
            return
        }
        let developParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let params = outParams["params"] as! [String:Any]
        let body = params["text"] as! String
        let phoneNumbers = params["numbers"] as! Array<String>
        // 发送短信的Controller
        let messageController = MFMessageComposeViewController()
        // 设置短信内容
        messageController.body = body
        // 设置收件人列表
        messageController.recipients = phoneNumbers
        // 设置代理
        messageController.messageComposeDelegate = self
        // 打开界面
        rootVC.present(messageController, animated: true, completion: nil)
    }


    // MARK:MFMailComposeViewControllerDelegate

    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        controller.dismiss(animated: true, completion: nil)
        switch result {
        case .cancelled:
            print("取消发送")
            UIView.wya_showCenterToast(withMessage:"取消发送")

        case .saved:
            print("保存成功")
            UIView.wya_showCenterToast(withMessage:"保存成功")

        case .sent:
            print("发送成功")
            UIView.wya_showCenterToast(withMessage:"发送成功")

        case .failed:
            print("发送失败")
            UIView.wya_showCenterToast(withMessage:"发送失败")

        }
    }

    /// 发送邮件
    ///
    /// - Parameter outParams: 邮件收件人以及发送内容
    @objc func mailWithParams(outParams: [String: Any]) {

        let developeParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developeParams["rootVC"] as! UIViewController

        guard MFMailComposeViewController.canSendMail()else{
            print("无法发送邮件")
            UIView.wya_showCenterToast(withMessage: "无法发送邮件")
            return
        }

        let emailVC = MFMailComposeViewController()
        emailVC.mailComposeDelegate = self
        emailVC.setSubject("hybrid测试邮件")
        emailVC.setToRecipients(["lsh@weiyian.com"])
        emailVC.setMessageBody("hybrid邮件发送测试内容", isHTML: false)
        rootVC.present(emailVC, animated: true, completion: nil)
    }


    /// 打电话
    ///
    /// - Parameter outParams: 打电话的参数
    @objc func callWithParams(outParams: [String: Any]) {
        DispatchQueue.main.async {
        UIApplication.shared.openURL(URL(string: "telprompt://"+"10086")!)
        }
    }

    /// 在应用内打开系统通讯录界面选择联系人
    ///
    /// - Parameter outParams: 通讯录所需的参数
    @objc func openContactsWithParams(outParams: [String: Any]) {
        let developeParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developeParams["rootVC"] as! UIViewController
        //联系人选择控制器
        guard #available(iOS 9.0, *) else{
            return
        }
        let contactPicker = CNContactPickerViewController()
        //设置代理
        contactPicker.delegate = self

        //弹出控制器
        rootVC.present(contactPicker, animated: true, completion: nil)

//        let manager = WYAContacts()
//        let string = manager.getConTacts()
//        print(string)
//        UIView.wya_showCenterToast(withMessage: "获取联系人成功")

    }

    //多选联系人
    @available(iOS 9.0, *)
    func contactPicker(_ picker: CNContactPickerViewController, didSelect contacts: [CNContact]) {
        print("一共选择了\(contacts.count)个联系人。")
        for contact in contacts {
            print("--------------")
            //获取联系人的姓名
            let lastName = contact.familyName
            let firstName = contact.givenName
            print("选中人的姓：\(lastName)")
            print("选中人的名：\(firstName)")

            //获取联系人电话号码
            print("选中人电话：")
            let phones = contact.phoneNumbers
            for phone in phones {
                //获得标签名（转为能看得懂的本地标签名，比如work、home）
                let phoneLabel = CNLabeledValue<NSString>.localizedString(forLabel: phone.label!)
                //获取号码
                let phoneValue = phone.value.stringValue
                print("\(phoneLabel):\(phoneValue)")
            }
        }
    }

    /// 设置状态栏颜色
    ///
    /// - Parameter outParams: 需要改变的颜色参数
    @objc func setStatusBarStyleWithParams(outParams: [String: Any]) {
        DispatchQueue.main.async {
        UIApplication.shared.statusBarStyle = .lightContent
        let developeParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developeParams["rootVC"] as! UIViewController
        let stateView = UIView()
        stateView.frame = CGRect(x: 0, y: 0, width: rootVC.view.frame.size.width, height: UIApplication.shared.statusBarFrame.size.height)
        stateView.backgroundColor = UIColor.black
        rootVC.view.addSubview(stateView)
        }
    }

    /// 设置屏幕旋转方向
    ///
    /// - Parameter outParams: 旋转方向
    @objc func setScreenOrientationWithParams(outParams: [String: Any]) {

    }

    /// 设置是否禁止屏幕休眠
    ///
    /// - Parameter outParams: 是否禁止休眠
    @objc func setKeepScreenOnWithParams(outParams: [String: Any]) {
        UIApplication.shared.isIdleTimerDisabled = true
        UIView.wya_showCenterToast(withMessage: "屏幕常量设置成功")
    }
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


    /// 展示一个悬浮框，浮动在屏幕上。
    ///
    /// - Parameter outParams: 浮窗图片，自动消失时间
    @objc func showFloatBoxWithParams(outParams: [String: Any]) {
        
    }
    @objc func getPictureWithParams(outParams: [String: Any]) {}

    @objc func saveMediaToAlbumWithParams(outParams: [String: Any]) {}

    /// 由于ios生成音频格式为WAV，需要转化为amr
    ///
    /// - Parameter outParams: <#outParams description#>
    @objc func startRecordWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String : Any]

        recorderPath = param["path"] as? String
        let url = URL(fileURLWithPath: recorderPath! + ".wav")

        recorder = try! AVAudioRecorder(url: url, settings: NTYAmrCoder.audioRecorderSettings() as! [String : Any])
        if (recorder?.prepareToRecord())! {
            try! AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayAndRecord)
            try! AVAudioSession.sharedInstance().setActive(true)
            if (recorder?.record())! {
                /// 开始录制
                listenAction("startRecord", ["status":"1","msg":"调用成功","data":["path":recorderPath]])
            }
        }else {
            print("音频格式出错")
        }
    }

    @objc func stopRecordWithParams(outParams: [String: Any]) {
        if (recorder?.isRecording)! {
            recorder?.stop()
            let isSuccess = NTYAmrCoder.encodeWavFile(recorderPath! + ".wav", toAmrFile: recorderPath! + ".amr")
            if isSuccess {
                let data = try! Data(contentsOf: URL(fileURLWithPath: recorderPath!+".amr"))
                var time = 0.0

                if #available(iOS 10.0, *) {
                    do {
                        let player = try AVAudioPlayer(data: data)
                        time = player.duration
                        let format = player.format
                        time = time*(8000/format.sampleRate)
                    } catch {
                        print(error)
                    }

                } else {
                    let avURL = AVURLAsset(url: URL(fileURLWithPath: recorderPath!+".amr"))
                    let duration = avURL.duration
                    time = CMTimeGetSeconds(duration)

                }

                listenAction("stopRecord", ["status":"1","msg":"调用成功","data":["path":recorderPath!+".amr","duration":time]])
            }

        }
    }

    @objc func startPlayWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String : Any]
        let path = param["path"] as! String

        let isSuccess = NTYAmrCoder.decodeAmrFile(path + ".amr", toWavFile: path + ".wav")
        if isSuccess {
            let url = URL(fileURLWithPath: path  + ".wav")
            audioPlayer = try? AVAudioPlayer(contentsOf: url)
            audioPlayer?.volume = 0.5
            audioPlayer?.numberOfLoops = 1
            audioPlayer?.currentTime = 0
            audioPlayer?.prepareToPlay()
            audioPlayer?.play()
        }

    }

    @objc func stopPlayWithParams(outParams: [String: Any]) {
        audioPlayer?.stop()
    }

    @objc func openVideoWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String : Any]
        let url = param["url"] as! String

        let developParams = outParams["DevelopParams"] as! [String : Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let videoUrl = URL(string: url)
        let playerViewController = AVPlayerViewController()
        if videoUrl?.scheme == "http" || videoUrl?.scheme == "https" {
            playerViewController.player = AVPlayer(url: URL(string: (videoUrl?.absoluteString)!)!)
        }else{
            playerViewController.player = AVPlayer(url: URL(fileURLWithPath: (videoUrl?.absoluteString)!))
        }
        rootVC.present(playerViewController, animated: true) {

        }

        listenAction("openVideo", ["status":"1","msg":"调用成功","data":""])
    }
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
