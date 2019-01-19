//
//  WYAWebViewManager.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import UIKit
import MediaPlayer
import Alamofire

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
    }
}

// MARK: - js调用原生方法

extension WYAWebViewManager {
    func nativeAction(_ method: String, params: [String: String]) {
        guard params.keys.count > 0 else { return }

        if actionParams.keys.contains(params["event"]!) {
            let sel = actionParams[params["event"]!]

            print(sel!)
            performSelector(inBackground: sel!, with: params)
        }
    }
    
    /// 测试事件通知流程
    ///
    /// - Parameter outParams: 参数
    @objc func batteryLowWithParams(outParams: [String: String]) {
        print("aaa")
        print(outParams)
        var params = [String: Any]()
        params.updateValue("1", forKey: "status")
        params.updateValue("调用成功", forKey: "msg")
        listenAction("batteryLow", params)
    }
}

// MARK: - 事件

extension WYAWebViewManager {
    func registerSystemNotice() {
        
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

         self.handleVolum()
        
        netManager?.listener = { status in
            print("网络状态: \(status)")
            //            self.netManager?.networkReachabilityStatus
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            var actionType: String

            if (self.netManager?.isReachable)! {
                print("有网")
                actionType = "online"
            } else {
                actionType = "offline"
                print("没网")
            }
            params.updateValue(inParams, forKey: "data")
            self.listenAction(actionType, params)
        }
        netManager?.startListening()

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { not in
            // 电池电量变化调用这个
            print("电池电量变化")
            print(not.userInfo as Any)
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            var subParams = [String: Any]()

            if device.batteryLevel <= 0.2 {
                subParams.updateValue(device.batteryLevel * 100, forKey: "level")
                
                switch device.batteryState {
                case .unknown:
                    subParams.updateValue(false, forKey: "isPlugged")
                    break
                    
                case .unplugged:
                    subParams.updateValue(false, forKey: "isPlugged")
                    break
                    
                case .charging:
                    subParams.updateValue(true, forKey: "isPlugged")
                    break
                    
                case .full:
                    subParams.updateValue(false, forKey: "isPlugged")
                    break
                }
                params.updateValue(subParams, forKey: "data")
                
                self.listenAction("batteryStatus", params)
            }

        }

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { not in
            // 检测电池状态变化
            print("电池状态")
            print(not.userInfo as Any)

            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            var subParams = [String: Any]()
            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            switch device.batteryState {
            case .unknown:
                subParams.updateValue(false, forKey: "isPlugged")
                break

            case .unplugged:
                subParams.updateValue(false, forKey: "isPlugged")
                break

            case .charging:
                subParams.updateValue(true, forKey: "isPlugged")
                break

            case .full:
                subParams.updateValue(false, forKey: "isPlugged")
                break
            }
            params.updateValue(subParams, forKey: "data")

            self.listenAction("batteryStatus", params)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { _ in
            // 进入后台
            print("后台")
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            params.updateValue(inParams, forKey: "data")

            self.listenAction("pause", params)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { _ in
            // 进入前台
            print("前台")
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            params.updateValue(inParams, forKey: "data")

            self.listenAction("resume", params)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            // 进入休眠
            print("休眠")
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            params.updateValue(inParams, forKey: "data")

            self.listenAction("appIdle", params)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillShow, object: nil, queue: OperationQueue.main) { _ in
            // 键盘弹出
            print("键盘将要弹出")
//            var params = [String: Any]()
//            params.updateValue("1", forKey: "status")
//            params.updateValue("调用成功", forKey: "msg")
//
//            let inParams = [String: Any]()
//            params.updateValue(inParams, forKey: "data")
//
//            self.listenAction("", params)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            // 键盘弹出
            print("键盘已经弹出")
           
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height
            
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            params.updateValue(inParams, forKey: "data")
            
            self.listenAction("keyboardShow", params)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillHide, object: nil, queue: OperationQueue.main) { _ in
            // 键盘将要消失
            print("键盘将要消失")
//            var params = [String: Any]()
//            params.updateValue("1", forKey: "status")
//            params.updateValue("调用成功", forKey: "msg")
//
//            let inParams = [String: Any]()
//            params.updateValue(inParams, forKey: "data")
//
//            self.listenAction("", params)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            // 键盘消失
            print("键盘已经消失")
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            params.updateValue(inParams, forKey: "data")

            self.listenAction("keyboardHide", params)
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { not in
            // 截屏
            print("截屏")
            print(not)

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)

            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")

            let inParams = [String: Any]()
            params.updateValue(inParams, forKey: "data")

            self.listenAction("takeScreenshot", params)
        }
        
       
    }
}

extension WYAWebViewManager {
    func getNetWork(params: [String: String]) {
        // 获取网络状态

        // 回传信息
        nativeDelegate?.getNativeActionResult("", "sss")
    }
}

// MARK: - 提供给js的方法，方法需要在actionParams里注册

extension WYAWebViewManager {
    /// openWin
    ///
    /// - Parameter params: 接收到的参数
    @objc func openWinWithParams(outParams: [String: String]) {}
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
extension WYAWebViewManager{
    /**
     返回事件
     */
    func backBtnPressed(){
        self.nativeDelegate?.getNativeActionResult("keyBack", "")
    }
    
    func handleVolum() {
        do{
            try AVAudioSession.sharedInstance().setActive(true)
        }catch let error as NSError{
            print("\(error)")
        }
        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
        NotificationCenter.default.addObserver(self, selector:#selector(changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        UIApplication.shared.beginReceivingRemoteControlEvents()
        
    }
    
   @objc func changeVolumSlider(notifi:NSNotification) {
        if let volum:Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float?{
            if volum > self.currentVolume! {
            self.nativeDelegate?.getNativeActionResult("volumeUp", "")
                print("增大")
            }
            else{
            self.nativeDelegate?.getNativeActionResult("voolumeDown", "")
                print("减小")
            }
             self.currentVolume = volum
        }
    }


    
}
