
//
//  WYAAudioModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
// MARK: audio 音频模块
extension WYAWebViewManager{

    /// audio方法配置表
    func audioDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(startPlayWithParams(outParams:)), forKey: "start")

        params.updateValue(#selector(stopPlayWithParams(outParams:)), forKey: "stop")

        params.updateValue(#selector(pausePlayWithParams(outParams:)), forKey: "pause")

        params.updateValue(#selector(resumePlayWithParams(outParams:)), forKey: "resume")

        params.updateValue(#selector(restartPlayWithParams(outParams:)), forKey: "restart")
        
        return params
    }

    @objc func startPlayWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let param = outParams["params"] as! [String: Any]
        let path = param["path"] as! String
        let isSuccess = audioRecorder.wya_turnWavAudio(withAmrPath: path + ".amr", wavPath: path + ".wav", deleteRedundantAudio: true)

        if isSuccess == true {
            let url = URL(fileURLWithPath: path + ".wav")
            let err = Error.self

            audioRecorder.wya_startPlayAudio(with: url, volume: 0.5, numberOfLoops: 1, currentTime: 0, error: err as! Error)

            listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": NSNull()])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "播放失败，音频格式不正确", "data": NSNull()])
        }
    }

    @objc func stopPlayWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        audioRecorder.wya_stopPlayAudio()
        listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": NSNull()])
    }

    @objc func pausePlayWithParams(outParams: [String: Any]) {}
    @objc func resumePlayWithParams(outParams: [String: Any]) {}
    @objc func restartPlayWithParams(outParams: [String: Any]) {}

}
