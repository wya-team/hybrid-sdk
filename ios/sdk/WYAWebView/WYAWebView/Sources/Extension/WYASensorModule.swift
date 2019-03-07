//
//  WYASensorModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: sensor 传感器模块

extension WYAWebViewManager{
    /// sensor方法配置表
    func sensorDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(openSensorWithParams(outParams:)), forKey: "open")
        params.updateValue(#selector(closeSensorWithParams(outParams:)), forKey: "close")

        return params
    }

    @objc func openSensorWithParams(outParams:[String:Any]){}
    @objc func closeSensorWithParams(outParams:[String:Any]){}
}
