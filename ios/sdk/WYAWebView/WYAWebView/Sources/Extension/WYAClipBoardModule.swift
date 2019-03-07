//
//  WYAClipBoardModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK:clipboard 剪切板
extension WYAWebViewManager{

    /// clipboard方法配置表
    func clipboardDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(setClipBoardWithParams(outParams:)), forKey: "get")

        params.updateValue(#selector(getClipBoardWithParams(outParams:)), forKey: "set")

        return params
    }
    /// 设置剪切板内容
    @objc func setClipBoardWithParams(outParams: [String: Any]){}
    /// 得到剪切板内容
    @objc func getClipBoardWithParams(outParams: [String: Any]){}
}
