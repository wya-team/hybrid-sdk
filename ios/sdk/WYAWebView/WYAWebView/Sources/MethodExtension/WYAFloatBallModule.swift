//
//  WYAFloatBallModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import WYAKit
// MARK: floatBall 悬浮球模块
extension WYAWebViewManager{
    /// notification方法配置表
    func floatBallDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(showFloatBoxWithParams(outParams:)), forKey: "ballShow")

        params.updateValue(#selector(hideFloatBoxWithParams(outParams:)), forKey: "ballHide")

        return params
    }
    
    /// 展示一个悬浮框，浮动在屏幕上。
    ///
    /// - Parameter outParams: 浮窗图片，自动消失时间
    @objc func showFloatBoxWithParams(outParams: [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionId = developParams["actionID"] as! String
        let rootVC = developParams["rootVC"] as! UIViewController
        DispatchQueue.main.async {
            rootVC.navigationController?.popViewController(animated: true)
            let floatBallManager = WYAFloatBallManager.shared()

            let vcArray = rootVC.navigationController?.viewControllers as! [UIViewController]

            if vcArray.count>0{

                floatBallManager.wya_showBallBtn(with: vcArray.first! )
                self.listenAction(actionId, ["status": 1, "msg": "调用成功".self, "data": NSNull()])
            }else{
                    UIView.wya_showCenterToast(withMessage: "没有上层控制器")
                    self.listenAction(actionId, ["status": 0, "msg": "没有上层控制器".self, "data": NSNull()])

                }

//            if vcArray.contains(rootVC){
//                let index = vcArray.indexOfObjectIdentical(to: rootVC)
//                if index > 0{
//                    rootVC.navigationController?.popViewController(animated: true)
//                    floatBallManager.wya_showBallBtn(with: vcArray[index-1] as! UIViewController)
//                    self.listenAction(actionId, ["status": 1, "msg": "调用成功".self, "data": NSNull()])
//                }else{
//                    UIView.wya_showCenterToast(withMessage: "没有上层控制器")
//                    self.listenAction(actionId, ["status": 0, "msg": "没有上层控制器".self, "data": NSNull()])
//
//                }
//            }


        }
    }
    
    @objc func hideFloatBoxWithParams(outParams:[String:Any]){
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionId = developParams["actionID"] as! String
        DispatchQueue.main.async {
            let floatBallManager = WYAFloatBallManager.shared()
            floatBallManager.wya_removeBallBtn()
        }
        self.listenAction(actionId, ["status": 1, "msg": "调用成功", "data": NSNull()])

    }
}
