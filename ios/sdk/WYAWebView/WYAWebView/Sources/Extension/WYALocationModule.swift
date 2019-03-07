//
//  WYALocationModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: location 上传模块
extension WYAWebViewManager{
    /// location方法配置表
    func locationDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(openUserLocationWithParams(outParams:)), forKey: "open")

        params.updateValue(#selector(closeUserLocationWithParams(outParams:)), forKey: "close")
        
        params.updateValue(#selector(getUserLocationWithParams(outParams:)), forKey: "get")

        return params
    }

    @objc func openUserLocationWithParams(outParams:[String:Any]){}

    @objc func closeUserLocationWithParams(outParams:[String:Any]){}

    @objc func getUserLocationWithParams(outParams:[String:Any]){}
}
