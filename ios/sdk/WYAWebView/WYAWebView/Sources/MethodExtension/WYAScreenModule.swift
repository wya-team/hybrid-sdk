//
//  WYAScreenModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: screen 屏幕模块
extension WYAWebViewManager{
    /// screen方法配置表
    func screenDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(setScreenOrientationWithParams(outParams:)), forKey: "orientation")

        params.updateValue(#selector(setKeepScreenOnWithParams(outParams:)), forKey: "keepOn")

        return params
    }

    @objc func setScreenOrientationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! WYAHybridController

        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        rootVC.orientation = params["orientation"] as? String
        switch params["orientation"] as! String {
        case "portraitUp":
            UIDevice.current.newOrientation(UIInterfaceOrientation.portrait)
            break
        case "portraitDown":
            UIDevice.current.newOrientation(UIInterfaceOrientation.portraitUpsideDown)
            break
        case "landscapeLeft":
            UIDevice.current.newOrientation(UIInterfaceOrientation.landscapeLeft)
            break
        case "landscapeRight":
            UIDevice.current.newOrientation(UIInterfaceOrientation.landscapeRight)
            break
        case "auto":
            break
        case "autoPortrait":
            break
        case "autoLandscape":
            break
        default:
            break
        }
    }

    /// 设置是否禁止屏幕休眠
    ///
    /// - Parameter outParams: 是否禁止休眠
    @objc func setKeepScreenOnWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let keepOn = params["keepOn"] as! Bool
        DispatchQueue.main.async {
            UIApplication.shared.isIdleTimerDisabled = keepOn
        }
        self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }

}
