//
//  WYAEventInvokeExtension.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/7.
//

import Foundation
// 强制执行事件
extension WYAWebViewManager{
    /// 事件订阅方法配置表
    func eventInvokeDictionary() -> [String:Selector]  {

        var params = [String:Selector]()

        params.updateValue(#selector(invokeBatterWithParams(outParams:)), forKey: "battery")

        params.updateValue(#selector(invokeNetworkWithParams(outParams:)), forKey: "network")

        params.updateValue(#selector(invokePauseWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(invokeResumeWithParams(outParams:)), forKey: "resume")

//      params.updateValue(#selector(invokeShakeWithParams(outParams:)), forKey: "shake")

        params.updateValue(#selector(invokeAppIdleWithParams(outParams:)), forKey: "appIdle")

        params.updateValue(#selector(invokeTakeScreenshotWithParams(outParams:)), forKey: "takeScreenshot")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewAppear")

//        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "viewDisappear")

        params.updateValue(#selector(invokeKeyboardShowWithParams(outParams:)), forKey: "keyboardShow")

        params.updateValue(#selector(invokeKeyboardHideWithParams(outParams:)), forKey: "keyboardHide")

        params.updateValue(#selector(invokeVolumeWithParams(outParams:)), forKey: "volume")

        return params
    }

    /// 注册网络断开通知
    @objc func invokeNetworkWithParams(outParams:[String:Any]){
        self.assemblyParams("network", "1", "网络连接", ["type":"online"])
    }

    /// 监听电量、电池状态合二为一
    @objc func invokeBatterWithParams(outParams:[String:Any]){
        self.assemblyParams("battery", "1", "电量改变", ["isPlugged":true,"level":66])
    }

    /// 进入后台
    @objc func invokePauseWithParams(outParams:[String:Any]){
        self.assemblyParams("pause", "1", "监听成功", [String: Any]())
    }

    /// 后台进入前台
    @objc func invokeResumeWithParams(outParams:[String:Any]){
        self.assemblyParams("resume", "1", "监听成功", [String: Any]())
    }

    /// 摇晃事件待定？
    @objc func invokeShakeWithParams(outParams:[String:Any]) {
        self.assemblyParams("shake", "1", "添加监听成功", [String: Any]())
    }

    /// 休眠
    @objc func invokeAppIdleWithParams(outParams:[String:Any]){
        self.assemblyParams("appIdle", "1", "监听成功", [String: Any]())
    }

    /// 截屏
    @objc func invokeTakeScreenshotWithParams(outParams:[String:Any]){
        // 是否需要传回图片
        self.assemblyParams("takeScreenshot", "1", "监听成功", ["image":""])
    }

    /// 键盘出现
    @objc func invokeKeyboardShowWithParams(outParams:[String:Any]){
        self.assemblyParams("keyboardShow", "1", "监听成功", ["height":260])
    }
    /// 键盘消失
    @objc func invokeKeyboardHideWithParams(outParams:[String:Any]){
        self.assemblyParams("keyboardHide", "1", "监听成功", [String: Any]())
    }

    // 音量
    @objc func invokeVolumeWithParams(outParams:[String:Any]){
        self.assemblyParams("volume", "1", "音量改变", ["keyCode": "volumeUp","longPress":false])
    }
}
