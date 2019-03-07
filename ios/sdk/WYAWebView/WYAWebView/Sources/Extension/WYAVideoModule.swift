//
//  WYAVideoModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import AVKit
// MARK: video 视频播放器
extension WYAWebViewManager{
    /// video方法配置表
    func videoDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(openVideoWithParams(outParams:)), forKey: "open")


        return params
    }

    @objc func openVideoWithParams(outParams: [String: Any]) {
        let param = outParams["params"] as! [String: Any]
        let url = param["url"] as! String

        let developParams = outParams["DevelopParams"] as! [String: Any]
        let rootVC = developParams["rootVC"] as! UIViewController
        let videoUrl = URL(string: url)
        let playerViewController = AVPlayerViewController()
        if videoUrl?.scheme == "http" || videoUrl?.scheme == "https" {
            playerViewController.player = AVPlayer(url: URL(string: (videoUrl?.absoluteString)!)!)
        } else {
            playerViewController.player = AVPlayer(url: URL(fileURLWithPath: (videoUrl?.absoluteString)!))
        }
        rootVC.present(playerViewController, animated: true) {}

        self.listenAction(developParams["actionID"] as! String, ["status": "1", "msg": "调用成功", "data": ""])
    }
}
