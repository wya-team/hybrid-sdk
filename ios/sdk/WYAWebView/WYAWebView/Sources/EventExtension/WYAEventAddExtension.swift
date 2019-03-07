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

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "install")
//
//        params.updateValue(#selector(openAppWithParams(outParams:)), forKey: "open")
//
//        params.updateValue(#selector(appInstalledWithParams(outParams:)), forKey: "has")

        return params
    }

    /// 公共回调emit
    func assemblyParams(_ actionType: String, _ inParams: [String: Any]) {
        var params = [String: Any]()
        params.updateValue("1", forKey: "status")
        params.updateValue("调用成功", forKey: "msg")
        params.updateValue(inParams, forKey: "data")
        listenAction(actionType, params)
    }

    /// 注册网络连接通知
    @objc func registerNetworkOnlineWithParams(outParams:[String:Any]){
        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            let inParams = [String: Any]()
            var actionType: String

            if (self.netManager?.isReachable)! {
                actionType = "online"
                // emit事件回调传入eventNameWYAJSBridge.emit('eventName', { "data" : null, "msg" : "移除成功", "status" : 1})
                self.assemblyParams(actionType, inParams)
            }

        }

         self.netManager?.startListening()
        // 传入id 订阅成功emit格式WYAJSBridge.emit('0', { "data" : null, "msg" : "订阅成功", "status" : 1})
    }

    /// 注册网络断开通知
    @objc func registerNetworkOfflineWithParams(outParams:[String:Any]){
        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            let inParams = [String: Any]()
            var actionType: String

            if !(self.netManager?.isReachable)! {
                actionType = "offline"
                // emit事件回调传入eventNameWYAJSBridge.emit('eventName', { "data" : null, "msg" : "移除成功", "status" : 1})
                self.assemblyParams(actionType, inParams)
            }

        }

        self.netManager?.startListening()
        // 传入id 订阅成功emit格式WYAJSBridge.emit('0', { "data" : null, "msg" : "订阅成功", "status" : 1})
    }



    /// 监听低电量
    @objc func registerBatterLowWithParams(outParams:[String:Any]){

        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true
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
                // 监听回调
                self.assemblyParams("batteryLow", subParams)
            }
        }
        //// 传入id 订阅成功emit
    }

    /// 电池状态

     @objc func registerBatterStatusWithParams(outParams:[String:Any]){

        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true
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
            // 电池状态
            self.assemblyParams("batteryStatus", subParams)
        }

        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池电量变化")

            var subParams = [String: Any]()

            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            switch device.batteryState {
            case .unknown: break
            case .unplugged: subParams.updateValue(false, forKey: "isPlugged"); break
            case .charging: subParams.updateValue(true, forKey: "isPlugged"); break
            case .full: subParams.updateValue(false, forKey: "isPlugged"); break
            }
            // 电量变化监听回调
            self.assemblyParams("batteryStatus", subParams)
            }

    }

    /// 进入后台
    @objc func registerPauseWithParams(outParams:[String:Any]){
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { _ in
            print("后台")
            self.assemblyParams("pause", [String: Any]())
        }
        // 订阅成功
    }


    /// 后台进入前台
    @objc func registerResumeWithParams(outParams:[String:Any]){

        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { _ in
            print("前台")
           self.assemblyParams("resume", [String: Any]())
        }
        // 订阅成功
    }

    /// 摇晃事件待定？

    /// 休眠
    @objc func registerAppIdleWithParams(outParams:[String:Any]){
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            print("休眠")
            self.assemblyParams("appIdle", [String: Any]())
        }
    }

    /// 截屏
    @objc func registerTakeScreenshotWithParams(outParams:[String:Any]){
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { _ in
            print("截屏")

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)
            let inParams = [String: Any]()

            self.listenAction("takeScreenshot", inParams)
        }

    }

    /// 键盘出现
    @objc func registerKeyboardShowWithParams(outParams:[String:Any]){
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            print("键盘已经弹出")
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            self.assemblyParams("keyboardShow", inParams)
        }
    }

    /// 键盘消失
    @objc func registerKeyboardHideWithParams(outParams:[String:Any]){
        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘已经消失")
            self.assemblyParams("keyboardShow", [String: Any]())
        }
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
