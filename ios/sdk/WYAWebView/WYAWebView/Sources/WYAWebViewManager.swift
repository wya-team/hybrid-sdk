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

    lazy  var eventAddParams :[String:Selector] = {
        let params = self.eventAddDictionary()
        return params
    }()

    lazy var eventRemoveParams :[String:Selector] = {
        let params = self.eventRemoveDictionary()
        return params
    }()

    lazy  var  debuggerInvokeParams :[String:Selector] = {
        let params = self.eventInvokeDictionary()
        return params
    }()




    
    var shake = false
    var viewAppear = false
    var viewDisappear = false

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


    /// 订阅事件
    func eventModuleAction(_ eventNameSelector:Selector,params:[String:Any]) {
        performSelector(inBackground: eventNameSelector, with: params)
    }

    /// 强制执行事件
    func eventInvokeAction(_ eventNameSelector:Selector,params:[String:Any]) {
        performSelector(inBackground: eventNameSelector, with: params)
    }

    /// 取消订阅事件
    func eventRemoveAction(_ eventNameSelector:Selector,params:[String:Any]) {
        performSelector(inBackground: eventNameSelector, with: params)

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
