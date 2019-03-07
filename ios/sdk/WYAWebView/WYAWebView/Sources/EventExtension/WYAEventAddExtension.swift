//
//  WYAEventAddExtension.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/7.
//

import Foundation
import AVKit
// 订阅事件
extension WYAWebViewManager{
    /// 事件订阅方法配置表
    func eventAddDictionary() -> [String:Selector]  {

        var params = [String:Selector]()

        params.updateValue(#selector(registerBatterLowWithParams(outParams:)), forKey: "batteryLow")

        params.updateValue(#selector(registerBatterStatusWithParams(outParams:)), forKey: "batteryStatus")

        params.updateValue(#selector(registerNetworkOfflineWithParams(outParams:)), forKey: "offline")

        params.updateValue(#selector(registerNetworkOnlineWithParams(outParams:)), forKey: "online")

        params.updateValue(#selector(registerPauseWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(registerResumeWithParams(outParams:)), forKey: "resume")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "shake")

        params.updateValue(#selector(registerAppIdleWithParams(outParams:)), forKey: "appIdle")

        params.updateValue(#selector(registerTakeScreenshotWithParams(outParams:)), forKey: "takeScreenshot")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewAppear")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewDisappear")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "appIntent")

        params.updateValue(#selector(registerKeyboardShowWithParams(outParams:)), forKey: "keyboardShow")

        params.updateValue(#selector(registerKeyboardHideWithParams(outParams:)), forKey: "keyboardHide")

        return params
    }

    /// 公共回调emit
    func assemblyParams(_ actionType: String, _ status: String, _ msg: String, _ inParams: [String: Any]) {
        var params = [String: Any]()
        params.updateValue(status, forKey: "status")
        params.updateValue(msg, forKey: "msg")
        params.updateValue(inParams, forKey: "data")
        listenAction(actionType, params)
    }

    /// 注册网络连接通知
    @objc func registerNetworkOnlineWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String

        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            var inParams = [String: Any]()
            inParams.updateValue(UIDevice.current.contentType, forKey: "connectionType")
            if (self.netManager?.isReachable)! {
                self.assemblyParams("online", "1", "监听成功", inParams)
            }
        }

        self.netManager?.startListening()
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 注册网络断开通知
    @objc func registerNetworkOfflineWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            if !(self.netManager?.isReachable)! {
                self.assemblyParams("offline", "1", "监听成功", [String: Any]())
            }
        }

        self.netManager?.startListening()
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 监听低电量
    @objc func registerBatterLowWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String

        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池电量变化")

            var subParams = [String: Any]()

            if device.batteryLevel <= 0.2 {
                subParams.updateValue(device.batteryLevel * 100, forKey: "level")
                if device.batteryState == .charging {
                    subParams.updateValue(true, forKey: "isPlugged")
                }else {
                    subParams.updateValue(false, forKey: "isPlugged")
                }

                // 监听回调
                self.assemblyParams("batteryLow", "1", "监听成功", subParams)
            }
        }
        //// 传入id 订阅成功emit
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 电池状态

     @objc func registerBatterStatusWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true
        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池状态")
            var subParams = [String: Any]()
            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            if device.batteryState == .charging {
                subParams.updateValue(true, forKey: "isPlugged")
            }else {
                subParams.updateValue(false, forKey: "isPlugged")
            }

            // 电池状态
            self.assemblyParams("batteryStatus", "1", "监听成功", subParams)
        }

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { _ in

            var subParams = [String: Any]()

            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            if device.batteryState == .charging {
                subParams.updateValue(true, forKey: "isPlugged")
            }else {
                subParams.updateValue(false, forKey: "isPlugged")
            }
            // 电量变化监听回调
            self.assemblyParams("batteryStatus", "1", "监听成功", subParams)
        }
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())

    }

    /// 进入后台
    @objc func registerPauseWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { _ in
            print("后台")
            self.assemblyParams("pause", "1", "监听成功", [String: Any]())
        }
        // 订阅成功
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }


    /// 后台进入前台
    @objc func registerResumeWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { _ in
            print("前台")
            self.assemblyParams("resume", "1", "监听成功", [String: Any]())
        }
        // 订阅成功
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 摇晃事件待定？
//    func registerShakeWithParams(outParams:[String:Any]) -> Bool{
//        let developParams = outParams["DevelopParams"] as! [String: Any]
//        let eventID = developParams["actionID"]
//        if eventID != nil {
//            // 订阅成功
//            self.assemblyParams(eventID as! String, "1", "添加监听成功", [String: Any]())
//            return true
//        }else{
//            return false
//        }
//
//    }

    /// 休眠
    @objc func registerAppIdleWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            print("休眠")
            self.assemblyParams("appIdle", "1", "监听成功", [String: Any]())
        }
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 截屏
    @objc func registerTakeScreenshotWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { _ in
            print("截屏")

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)
            var inParams = [String: Any]()
            let data = UIImagePNGRepresentation(image!)
            let base64String = data?.base64EncodedString()
            inParams.updateValue(base64String as Any, forKey: "image")
            // 是否需要传回图片
            self.assemblyParams("takeScreenshot", "1", "监听成功", inParams)
        }
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 键盘出现
    @objc func registerKeyboardShowWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            print("键盘已经弹出")
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            self.assemblyParams("keyboardShow", "1", "监听成功", inParams)
        }
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 键盘消失
    @objc func registerKeyboardHideWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘已经消失")
            self.assemblyParams("keyboardHide", "1", "监听成功", [String: Any]())
        }
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

//    // 音量加
//    @objc func registerVolumeUpWithParams(outParams:[String:Any]){
//        do {
//            try AVAudioSession.sharedInstance().setActive(true)
//        } catch let error as NSError {
//            print("\(error)")
//        }
//        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
//        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
//        UIApplication.shared.beginReceivingRemoteControlEvents()
//
//
//        }
//    }
//    /// 音量增大的通知回调
//    @objc func changeVolumSlider(notifi: NSNotification) {
//        if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
//            if volum > self.currentVolume! {
//                self.nativeDelegate?.getNativeActionResult("volumeUp", "")
//                print("增大")
//            }
//            self.currentVolume = volum
//    }
//    /// 音量减
//
//    @objc func registerVolumeDownWithParams(outParams:[String:Any]){
//        do {
//            try AVAudioSession.sharedInstance().setActive(true)
//        } catch let error as NSError {
//            print("\(error)")
//        }
//        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
//        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumDownSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
//        UIApplication.shared.beginReceivingRemoteControlEvents()
//    }
//
//        /// 音量减小的通知回调
//        @objc func changeVolumDownSlider(notifi: NSNotification) {
//            if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
//                if volum < self.currentVolume! {
//                    self.nativeDelegate?.getNativeActionResult("voolumeDown", "")
//                    print("减小")
//                }
//                self.currentVolume = volum
//            }
//        }
}

//extension WYAViewController{
//    
//    public override func motionBegan(_ motion: UIEventSubtype, with event: UIEvent?) {
//        WYAWebViewManager.shared.registerShakeWithParams(outParams: nil)
//    }
//}
