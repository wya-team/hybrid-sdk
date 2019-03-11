//
//  WYAEventRemoveExtension.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/7.
//

import Foundation
// 取消订阅事件
extension WYAWebViewManager{
    //
    public func removeNotice() {
        self.netManager?.stopListening()
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidEnterBackground, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidBecomeActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillResignActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.closeWin, object: nil)
        UIApplication.shared.endReceivingRemoteControlEvents()
    }

    /// 事件订阅方法配置表
    func eventRemoveDictionary() -> [String:Selector]  {

        var params = [String:Selector]()

        params.updateValue(#selector(removeBatterWithParams(outParams:)), forKey: "battery")

        params.updateValue(#selector(removeNetworkWithParams(outParams:)), forKey: "network")

        params.updateValue(#selector(removePauseWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(removeResumeWithParams(outParams:)), forKey: "resume")

        //      params.updateValue(#selector(removeShakeWithParams(outParams:)), forKey: "shake")

        params.updateValue(#selector(removeAppIdleWithParams(outParams:)), forKey: "appIdle")

        params.updateValue(#selector(removeTakeScreenshotWithParams(outParams:)), forKey: "takeScreenshot")

        //        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewAppear")

        //        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewDisappear")

        params.updateValue(#selector(removeKeyboardShowWithParams(outParams:)), forKey: "keyboardShow")

        params.updateValue(#selector(removeKeyboardHideWithParams(outParams:)), forKey: "keyboardHide")

        params.updateValue(#selector(removeVolumeWithParams(outParams:)), forKey: "volume")

        return params
    }

    /// 注册网络断开通知
    @objc func removeNetworkWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        self.netManager?.stopListening()
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }

    /// 监听电量、电池状态合二为一
    @objc func removeBatterWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }

    /// 进入后台
    @objc func removePauseWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidEnterBackground, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())


    }

    /// 后台进入前台
    @objc func removeResumeWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidBecomeActive, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())


    }

    /// 摇晃事件待定？
    @objc func removeShakeWithParams(outParams:[String:Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }

    /// 休眠
    @objc func removeAppIdleWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillResignActive, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }

    /// 截屏
    @objc func removeTakeScreenshotWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())


    }

    /// 键盘出现
    @objc func removeKeyboardShowWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidShow, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }
    /// 键盘消失
    @objc func removeKeyboardHideWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
         NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidHide, object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }

    // 音量
    @objc func removeVolumeWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let eventID = developParams["actionID"] as! String
         NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        self.assemblyParams(eventID, "1", "取消订阅成功", [String: Any]())

    }
}
