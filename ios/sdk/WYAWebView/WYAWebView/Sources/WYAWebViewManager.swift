//
//  WYAWebViewManager.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import Alamofire

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
    weak var nativeDelegate: WebViewDelegate?

    static let shared = WYAWebViewManager()
    var config = SystemConfig()
    let netManager = NetworkReachabilityManager(host: "www.apple.com")
    var audioRecorder = WYAAudioRecoder()

    lazy var methodModuleParams:[String:Dictionary<String,Selector>] = {
        let params = ["navigator":self.navigatorDictionary(),
                      "app":self.appDictionary(),
                      "clipboard":self.clipboardDictionary(),
                      "storage":self.storageDictionary(),
                      "photo":self.photoDictionary(),
                      "notification":self.notificationDictionary(),
                      "floatBall":self.floatBallDictionary(),
                      "sysytem":self.systemDictionary(),
                      "screen":self.screenDictionary(),
                      "style":self.styleDictionary(),
                      "memory":self.memoryDictionary(),
                      "record":self.recordDictionary(),
                      "audio":self.audioDictionary(),
                      "download":self.downloadDictionary(),
                      "upload":self.uploadDictionary(),
                      "location":self.locationDictionary(),
                      "sensor":self.sensorDictionary(),
                      "video":self.videoDictionary()]
        return params
    }()

//    var eventAddParams
//
//    var eventRemoveParams
//
//    var  debuggerInvokeParams




    

    var smsID: String?
    var mailID: String?
    var currentVolume: Float?
    var recorderPath: String?

    typealias callbackBlock = () -> Void
    var callback: callbackBlock!

    func listenAction(_ actionType: String, _ params: [String: Any]) {
        let string = dicTosJsonString(params)
        nativeDelegate?.getNativeActionResult(actionType, string)
    }

    deinit {
        removeNotice()
    }
}

// MARK: - js调用原生方法,方法需要在methodModuleParams里按照模块注册
extension WYAWebViewManager{

    /// 模块方法调用
    func methodModuleAction(_ methodSelector:Selector, params:[String:Any]) {
        performSelector(inBackground: methodSelector, with: params)
    }

    func getModel<T>(_ params: [String: Any]) -> T where T: Codable {
        let jsonDecoder = JSONDecoder()
        let jsonData = try? JSONSerialization.data(withJSONObject: params, options: [])
        var briefModel: T?

        do {
            briefModel = try jsonDecoder.decode(T.self, from: jsonData!)
        } catch {
            print(error)
        }
        return briefModel!
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

extension Notification.Name {
    static let closeWin = NSNotification.Name("closeWin")
}

// emit提交固定格式参数时使用
extension WYAWebViewManager {
    func callBackJsonData(_ status: Int, _ msg: String) -> Dictionary<String, Any> {
        return ["status": status, "msg": msg, "data": NSNull()]
    }
}













/* 暂时废弃掉的方法


 //    func nativeAction(_ method: String, params: [String: Any]) {
 //        if self.actionModuleParams.keys.contains(method) {
 //            let sel = actionModuleParams[method]
 //            print(sel!)
 //            performSelector(inBackground: sel!, with: params)
 //        }
 //    }

 // 模块方法配置表
 let actionModuleParams: [String: Selector] = {
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

 @objc func closeToWinWithParams(outParams: [String: Any]) {
 let developParams = outParams["DevelopParams"] as! [String: Any]
 let rootVC = developParams["rootVC"] as! UIViewController

 let param = outParams["params"] as! [String: Any]
 let vcName = param["name"]
 let animation = param["animation"] as? String

 func pop(_ animation: Bool) {
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
 case "none": pop(false); break
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



 @objc func loadSecureValueWithParams(outParams: [String: Any]) {}
 @objc func addEventListenerWithParams(outParams: [String: Any]) {}
 @objc func removeEventListenerWithParams(outParams: [String: Any]) {}
 @objc func sendEventWithParams(outParams: [String: Any]) {}
 @objc func accessNativeWithParams(outParams: [String: Any]) {}


 @objc func startLocationWithParams(outParams: [String: Any]) {}
 @objc func stopLocationWithParams(outParams: [String: Any]) {}
 @objc func getLocationWithParams(outParams: [String: Any]) {}
 @objc func startSensorWithParams(outParams: [String: Any]) {}
 @objc func stopSensorWithParams(outParams: [String: Any]) {}









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









 */
