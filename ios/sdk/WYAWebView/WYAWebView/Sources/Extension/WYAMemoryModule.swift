//
//  WYAMemoryModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import WYAKit
// MARK: memory 缓存模块

extension WYAWebViewManager{
    /// memory方法配置表
    func memoryDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(clearCacheWithParams(outParams:)), forKey: "clearCache")

        params.updateValue(#selector(getCacheSizeWithParams(outParams:)), forKey: "getCache")

        params.updateValue(#selector(getTotalSpaceWithParams(outParams:)), forKey: "getTotal")

        params.updateValue(#selector(getFreeDiskSpaceWithParams(outParams:)), forKey: "getFree")

        return params
    }

    /// 清理缓存
    ///
    /// - Parameter outParams: 需要的清理的路径信息
    @objc func clearCacheWithParams(outParams: [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String: Any]

        let actionID = developParams["actionID"] as! String

        let params = outParams["params"] as! [String: Any]
        
        guard params.count != 0 else {
            self.listenAction(actionID, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let path = params["path"] as! String

        guard path == "" else {
            WYAClearCache.wya_clearFile(atPath: path) { _ in
                print("清理缓存成功")
                self.listenAction(actionID, self.callBackJsonData(1, "调用成功"))
            }
            return
        }

        WYAClearCache.wya_clearCachesClearStatusBlock { _ in
            print("清理缓存成功")
            self.listenAction(actionID, self.callBackJsonData(1, "调用成功"))
        }
    }

    /// 获取缓存占用空间大小
    ///
    /// - Parameter outParams: 缓存的路径默认为Cache
    @objc func getCacheSizeWithParams(outParams: [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String: Any]

        let params = outParams["params"] as! [String: Any]

        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }

        let path = params["path"] as! String

        guard path == "" else {
            WYAClearCache.wya_cacheFileSizeValue(atPath: path) { size in
                self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": size, "label": NSNull()]])
            }
            return
        }

        WYAClearCache.wya_defaultCachesFolderSizeValueBlock { folderSize in
            self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": folderSize, "label": NSNull()]])
        }
    }

    /// 获取总空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getTotalSpaceWithParams(outParams: [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String: Any]

        let divceTotalSpace = WYAClearCache.wya_getDivceTotalSizeValue()

        print("系统总空间\(divceTotalSpace)")

        self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": divceTotalSpace, "label": NSNull()]])
    }

    /// 获取剩余存储空间大小
    ///
    /// - Parameter outParams: 无参数
    @objc func getFreeDiskSpaceWithParams(outParams: [String: Any]) {

        let developParams = outParams["DevelopParams"] as! [String: Any]

        let space = NSString.wya_phoneFreeMemory()

        WYAClearCache.wya_getDivceAvailableSizeValueBlock { folderSize in
            print("系统可用空间\(folderSize)")
            self.listenAction(developParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": ["size": folderSize, "label": NSNull()]])
        }
        print(space)
    }
}
