//
//  WYAFloatBallModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation

// MARK: floatBall 悬浮球模块
extension WYAWebViewManager{
    /// notification方法配置表
    func floatBallDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(showFloatBoxWithParams(outParams:)), forKey: "show")

        params.updateValue(#selector(hideFloatBoxWithParams(outParams:)), forKey: "hide")

        return params
    }
    
    /// 展示一个悬浮框，浮动在屏幕上。
    ///
    /// - Parameter outParams: 浮窗图片，自动消失时间
    @objc func showFloatBoxWithParams(outParams: [String: Any]) {}
    
    @objc func hideFloatBoxWithParams(outParams:[String:Any]){}
}
