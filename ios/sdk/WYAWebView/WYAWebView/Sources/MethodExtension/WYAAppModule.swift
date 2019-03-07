//
//  WYAAppModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK:app模块
extension WYAWebViewManager{

    /// app方法配置表
    func appDictionary() -> [String:Selector]  {

        var params = [String:Selector]()

        params.updateValue(#selector(installAppWithParams(outParams:)), forKey: "install")

        params.updateValue(#selector(openAppWithParams(outParams:)), forKey: "open")

        params.updateValue(#selector(appInstalledWithParams(outParams:)), forKey: "has")

        return params
    }

    /// 安装应用,如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页
    ///
    /// - Parameter outParams: 需要下载的appUri
    @objc func installAppWithParams(outParams: [String: Any]) {
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let tempString = params["url"] as! String
        var urlString = ""
        if tempString.hasPrefix("http") {
            urlString = tempString.replacingOccurrences(of: "http", with: "itms-apps")
        }
        if tempString.hasPrefix("https") {
            urlString = tempString.replacingOccurrences(of: "https", with: "itms-apps")
        }

        if urlString.hasPrefix("itms-apps") {
            let url = URL(string: urlString)
            DispatchQueue.main.async {
                guard UIApplication.shared.canOpenURL(url!) else {
                    UIView.wya_showCenterToast(withMessage: "无效的地址")
                    self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "无效地址"))
                    return
                }
                UIApplication.shared.openURL(url!)
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
            }
        }
    }

    /// 打开手机上其它应用，可以传递参数
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func openAppWithParams(outParams: [String: Any]) {
        print(outParams)
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let scheme = params["scheme"] as! String
        let url = URL(string: scheme)
        DispatchQueue.main.async {
            guard UIApplication.shared.canOpenURL(url!) else {
                UIView.wya_showCenterToast(withMessage: "无法打开APP")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "无效的scheme"))
                return
            }
            UIApplication.shared.openURL(url!)
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
        }
    }

    /// 判断设备上是否已安装指定应用
    ///
    /// - Parameter outParams: 需要传递的参数
    @objc func appInstalledWithParams(outParams: [String: Any]) {
        let params = outParams["params"] as! [String: Any]
        let developParams = outParams["DevelopParams"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction("appInstalled", self.callBackJsonData(0, "缺少参数"))
            return
        }
        let scheme = params["scheme"] as! String
        let url = URL(string: scheme)
        DispatchQueue.main.async {
            if UIApplication.shared.canOpenURL(url!) {
                print("存在")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "没有查询到APP"))
            } else {
                print("不存在")
                self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(1, "调用成功"))
            }
        }
    }
}
