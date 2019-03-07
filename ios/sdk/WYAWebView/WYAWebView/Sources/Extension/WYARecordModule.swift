//
//  WYARecordModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import AVKit
// MARK: record 录音模块
extension WYAWebViewManager{

    /// record方法配置表
    func recordDictionary() -> [String:Selector] {
        var params = [String:Selector]()

        params.updateValue(#selector(startRecordWithParams(outParams:)), forKey: "start")
        params.updateValue(#selector(stopRecordWithParams(outParams:)), forKey: "stop")
        params.updateValue(#selector(pauseRecordWithParams(outParams:)), forKey: "pause")
        params.updateValue(#selector(resumeRecordWithParams(outParams:)), forKey: "resume")
        params.updateValue(#selector(restartRecordWithParams(outParams:)), forKey: "restart")

        return params
    }


    /// 由于ios生成音频格式为WAV，需要转化为amr
    ///
    /// - Parameter outParams: outParams description
    @objc func startRecordWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let param = outParams["params"] as! [String: Any]
        let path = param["path"] as? String

        let date = Date().timeIntervalSince1970
        if path != nil, (path?.count)! > 0 {
            self.recorderPath = path! + "/" + "\(date)"
        } else {
            let audioFile = NSHomeDirectory() + "/Documents/WYAHybridAudio"
            let success = FileManager.default.fileExists(atPath: audioFile)
            if success == false {
                try! FileManager.default.createDirectory(atPath: audioFile, withIntermediateDirectories: true, attributes: nil)
            }
            self.recorderPath = audioFile + "/" + "\(date)"
        }

        let url = URL(fileURLWithPath: recorderPath! + ".wav")

        let error = Error.self
        let isSuccess = audioRecorder.wya_startRecorder(with: url, error: error as! Error)
        if isSuccess {
            self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ["path": path]])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "录制失败", "data": ["path": path]])
        }

    }

    @objc func stopRecordWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        audioRecorder.wya_stopRecorder()
        let issuccess = audioRecorder.wya_turnAmrAudio(withWavPath: recorderPath! + ".wav", amrPath: recorderPath! + ".amr", deleteRedundantAudio: true)
        if issuccess {
            let data = try! Data(contentsOf: URL(fileURLWithPath: recorderPath! + ".amr"))
            var time = 0.0

            if #available(iOS 10.0, *) {
                do {
                    let player = try AVAudioPlayer(data: data)
                    time = player.duration
                    let format = player.format
                    time = time * (8000 / format.sampleRate)
                } catch {
                    print(error)
                }

            } else {
                let avURL = AVURLAsset(url: URL(fileURLWithPath: recorderPath! + ".amr"))
                let duration = avURL.duration
                time = CMTimeGetSeconds(duration)
            }
            self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ["path": recorderPath! + ".amr", "duration": time]])
        } else {
            self.listenAction(developParams["actionID"] as! String, ["status": "0", "msg": "格式转换失败", "data": NSNull()])
        }
    }

    @objc func pauseRecordWithParams(outParams: [String: Any]) {}

    @objc func resumeRecordWithParams(outParams: [String: Any]) {}

    @objc func restartRecordWithParams(outParams: [String: Any]) {}

}
