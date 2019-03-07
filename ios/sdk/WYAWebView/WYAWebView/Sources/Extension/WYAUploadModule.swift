//
//  WYAUploadModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: upload 上传模块
extension WYAWebViewManager{
    /// upload方法配置表
    func uploadDictionary() -> [String:Selector] {
        var params = [String:Selector]()
        params.updateValue(#selector(startUploadWithParams(outParams:)), forKey: "start")
        params.updateValue(#selector(cancelUploadWithParams(outParams:)), forKey: "cancel")
        params.updateValue(#selector(pauseUploadWithParams(outParams:)), forKey: "pause")
        params.updateValue(#selector(resumeUploadWithParams(outParams:)), forKey: "resume")
        params.updateValue(#selector(restartUploadWithParams(outParams:)), forKey: "restart")
        return params
    }
    @objc func startUploadWithParams(outParams: [String: Any]) {}
    @objc func cancelUploadWithParams(outParams: [String: Any]) {}
    @objc func pauseUploadWithParams(outParams: [String: Any]) {}
    @objc func resumeUploadWithParams(outParams: [String: Any]) {}
    @objc func restartUploadWithParams(outParams: [String: Any]) {}
    
}
