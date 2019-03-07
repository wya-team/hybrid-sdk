//
//  WYAStorageModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: storage (数据库)模块
extension WYAWebViewManager{

    /// 待定
    func storageDictionary() -> [String:Selector] {
        var params = [String:Selector]()

        params.updateValue(#selector(getStorageWithParams(outParams:)), forKey: "get")

        params.updateValue(#selector(setStorageWithParams(outParams:)), forKey: "set")

        params.updateValue(#selector(removeStorageWithParams(outParams:)), forKey: "remove")

        params.updateValue(#selector(clearStorageWithParams(outParams:)), forKey: "clear")

        params.updateValue(#selector(getAllKeysStorageWithParams(outParams:)), forKey: "getAllKeys")

        return params
    }

    @objc func getStorageWithParams(outParams:[String:Any]){}
    @objc func setStorageWithParams(outParams:[String:Any]){}
    @objc func removeStorageWithParams(outParams:[String:Any]){}
    @objc func clearStorageWithParams(outParams:[String:Any]){}
    @objc func getAllKeysStorageWithParams(outParams:[String:Any]){}

}
