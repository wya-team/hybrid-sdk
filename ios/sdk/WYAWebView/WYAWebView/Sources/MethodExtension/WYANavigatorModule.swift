//
//  WYANavigatorModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation

// MARK:导航模块
extension WYAWebViewManager{

    /// navigator方法表配置
    func navigatorDictionary()->Dictionary<String, Selector>  {

        var params = [String:Selector]()

        params.updateValue(#selector(openWinWithParams(outParams:)), forKey: "push")

        params.updateValue(#selector(closeWinWithParams(outParams:)), forKey: "pop")

        return params
    }

    /// openWin
    ///
    /// - Parameter params: 接收到的参数
    @objc func openWinWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let vc = developParams["vc"]
        let type = developParams["jumpType"]

        let model = self.getModel(outParams["params"] as! [String: Any]) as OpenWinModel

        print(model as Any)

        func push(_ vc: UIViewController, _ animation: Bool) {
            DispatchQueue.main.async {
                vc.hidesBottomBarWhenPushed = model.hideBottomBar ?? true
                if (model.replace)! {
                    rootVC.navigationController?.popViewController(animated: false)
                }
                rootVC.navigationController?.pushViewController(vc, animated: animation)
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
            }
        }

        func present(_ vc: UIViewController) {
            DispatchQueue.main.async {
                rootVC.present(vc, animated: true, completion: {})
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
            }
        }

        guard rootVC.navigationController != nil else { return }

        let centerVC = WYAViewController()
        centerVC.model = model

        switch model.animation {
        case "card": push(centerVC, true); break
        case "modal": present(centerVC); break
        case "none": push(centerVC, false); break
        default:
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败，未指定跳转动画", "data": NSNull()])
            break
        }
    }

    @objc func closeWinWithParams(outParams: [String: Any]) {
        print("返回")
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController

        let param = outParams["params"] as! [String: Any]
        let vcName = param["name"] as? String
        let animation = param["animation"] as? String

        func pop(_ animation: Bool) {
            if vcName != nil, (vcName?.count)! > 0 {
                let viewControllers = rootVC.navigationController?.viewControllers
                for vc in viewControllers! {
                    if vc is WYAViewController {
                        let viewController = vc as! WYAViewController
                        if viewController.model?.name == vcName {
                            DispatchQueue.main.async {
                                rootVC.navigationController?.popToViewController(viewController, animated: animation)
                                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": NSNull()])
                            }
                        }
                    }
                }
            } else if vcName?.count == 0 {
                self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "vcName不能为空字符串", "data": NSNull()])
            } else {
                self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "vcName不能为空", "data": NSNull()])
            }
        }

        func dismiss() {
            rootVC.dismiss(animated: true, completion: nil)
        }

        switch animation {
        case "card": pop(true); break
        case "modal": dismiss(); break
        case "none": pop(false); break
        default:
            break
        }
    }
}
