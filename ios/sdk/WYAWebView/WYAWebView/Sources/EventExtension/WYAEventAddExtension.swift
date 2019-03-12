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

        params.updateValue(#selector(registerBatterWithParams(outParams:)), forKey: "battery")

        params.updateValue(#selector(registerNetworkWithParams(outParams:)), forKey: "network")

        params.updateValue(#selector(registerPauseWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(registerResumeWithParams(outParams:)), forKey: "resume")

        params.updateValue(#selector(registerShakeWithParams(outParams:)), forKey: "shake")

        params.updateValue(#selector(registerAppIdleWithParams(outParams:)), forKey: "appIdle")

        params.updateValue(#selector(registerTakeScreenshotWithParams(outParams:)), forKey: "takeScreenshot")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewAppear")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewDisappear")


        params.updateValue(#selector(registerKeyboardShowWithParams(outParams:)), forKey: "keyboardShow")

        params.updateValue(#selector(registerKeyboardHideWithParams(outParams:)), forKey: "keyboardHide")

         params.updateValue(#selector(registerVolumeWithParams(outParams:)), forKey: "volume")

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

    /// 注册网络断开通知
    @objc func registerNetworkWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        self.netManager?.listener = { status in
            print("网络状态: \(status)")

            if (self.netManager?.isReachable)! {
                self.assemblyParams("network", "1", "网络连接", ["type":"online"])
            }
            else {
                self.assemblyParams("network", "1", "网络断开", ["type": "offline"])
            }
        }

        self.netManager?.startListening()
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    /// 监听电量、电池状态合二为一
    @objc func registerBatterWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

        NotificationCenter.default.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { _ in
            print("电池状态")
            var subParams = [String: Any]()
            subParams.updateValue(device.batteryLevel * 100, forKey: "level")
            if device.batteryState == .charging {
                subParams.updateValue(true, forKey: "isPlugged")
            }else {
                subParams.updateValue(false, forKey: "isPlugged")
            }

            // 电池状态
            self.assemblyParams("battery", "1", "状态改变", subParams)
        }

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
                self.assemblyParams("battery", "1", "电量改变", subParams)
            }
        }

        //// 传入id 订阅成功emit
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
    @objc func registerShakeWithParams(outParams:[String:Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"]
        if eventID != nil {
            // 订阅成功
            self.assemblyParams(eventID as! String, "1", "添加监听成功", [String: Any]())
            self.shake = true
        }

    }

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




    // 音量
    @objc func registerVolumeWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        do {
            try AVAudioSession.sharedInstance().setActive(true)
        } catch let error as NSError {
            print("\(error)")
        }
        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        UIApplication.shared.beginReceivingRemoteControlEvents()
        self.assemblyParams(eventID, "1", "添加监听成功", [String: Any]())
    }

    
    @objc func changeVolumSlider(notifi: NSNotification) {
        if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
            if volum > self.currentVolume! {
                self.assemblyParams("volume", "1", "音量改变", ["keyCode": "volumeUp","longPress":false])
                print("增大")
            } else {
                self.assemblyParams("volume", "1", "音量改变", ["keyCode": "volumeDown","longPress":false])
                print("减小")
            }
            self.currentVolume = volum
        }
    }


}

extension WYAHybridController{

    open override func motionBegan(_ motion: UIEventSubtype, with event: UIEvent?) {
        if WYAWebViewManager.shared.shake {
            print("aa")
        }else{
            print("bbb")
        }
    }
}

