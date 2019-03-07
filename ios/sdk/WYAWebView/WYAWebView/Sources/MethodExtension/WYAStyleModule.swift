//
//  WYAStyleModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/7.
//

import Foundation
// MARK: style 样式模块
extension WYAWebViewManager{
    /// style方法配置表
    func styleDictionary() -> [String:Selector] {


        var params = [String:Selector]()

        params.updateValue(#selector(setWinStyleWithParams(outParams:)), forKey: "setWin")
        params.updateValue(#selector(setBadgeStyleWithParams(outParams:)), forKey: "setBadge")

        params.updateValue(#selector(setStatusBarStyleWithParams(outParams:)), forKey: "setStatusBar")

        return params
    }

    @objc func setWinStyleWithParams(outParams: [String: Any]) {}
    @objc func setBadgeStyleWithParams(outParams: [String: Any]) {}

    /// 设置状态栏颜色
    ///
    /// - Parameter outParams: 需要改变的颜色参数
    @objc func setStatusBarStyleWithParams(outParams: [String: Any]) {
        let developeParams = outParams["DevelopParams"] as! [String: Any]
        DispatchQueue.main.async {
            let rootVC = developeParams["rootVC"] as! UIViewController
            let params = outParams["params"] as! [String: Any]
            guard params.count != 0 else {
                self.listenAction(developeParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
                return
            }
            let style = params["style"] as! String
            var bgColor = UIColor.white
            if style == "dark" {
                UIApplication.shared.statusBarStyle = .lightContent
                bgColor = UIColor.black
            } else if style == "light" {
                UIApplication.shared.statusBarStyle = .default
                bgColor = UIColor.white
            }

            let stateView = UIView()
            stateView.frame = CGRect(x: 0, y: 0, width: rootVC.view.frame.size.width, height: UIApplication.shared.statusBarFrame.size.height)
            stateView.backgroundColor = bgColor
            rootVC.view.addSubview(stateView)
        }
        self.listenAction(developeParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }

}
