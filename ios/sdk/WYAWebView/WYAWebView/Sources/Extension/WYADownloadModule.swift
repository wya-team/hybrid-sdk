//
//  WYADownloadModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: download 下载模块
extension WYAWebViewManager{

    /// download方法配置表
    func downloadDictionary() -> [String:Selector] {
        var params = [String:Selector]()

        params.updateValue(#selector(downloadWithParams(outParams:)), forKey: "start")

        params.updateValue(#selector(cancelDownloadWithParams(outParams:)), forKey: "cancel")

        params.updateValue(#selector(pauseDownloadWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(resumeDownloadWithParams(outParams:)), forKey: "resume")

        params.updateValue(#selector(restartDownloadWithParams(outParams:)), forKey: "restart")

        return params
    }

    @objc func downloadWithParams(outParams: [String: Any]) {}
    @objc func cancelDownloadWithParams(outParams: [String: Any]) {}
    @objc func pauseDownloadWithParams(outParams: [String: Any]) {}
    @objc func resumeDownloadWithParams(outParams: [String: Any]) {}
    @objc func restartDownloadWithParams(outParams: [String: Any]) {}


}
