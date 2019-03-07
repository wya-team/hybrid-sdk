//
//  WYAEventRegistModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import AVKit
import WYAKit

// MARK: - 事件
extension WYAWebViewManager {
    public func removeNotice() {
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidEnterBackground, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationDidBecomeActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillResignActive, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidShow, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardWillHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIKeyboardDidHide, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name.closeWin, object: nil)
        UIApplication.shared.endReceivingRemoteControlEvents()
    }
}

extension WYAWebViewManager {

    func registerSystemNotice() {
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true

        self.handleVolum()

        func assemblyParams(_ actionType: String, _ inParams: [String: Any]) {
            var params = [String: Any]()
            params.updateValue("1", forKey: "status")
            params.updateValue("调用成功", forKey: "msg")
            params.updateValue(inParams, forKey: "data")
            listenAction(actionType, params)
        }

       








        note.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { _ in
            print("休眠")
            assemblyParams("appIdle", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillShow, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要弹出")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { not in
            print("键盘已经弹出")
            let rect = not.userInfo?[UIKeyboardFrameEndUserInfoKey] as! CGRect
            let height = rect.size.height

            var inParams = [String: Any]()
            inParams.updateValue(height, forKey: "height")
            assemblyParams("keyboardShow", inParams)
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardWillHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘将要消失")
        }

        note.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { _ in
            print("键盘已经消失")
            assemblyParams("keyboardShow", [String: Any]())
        }

        note.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { _ in
            print("截屏")

            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)

            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()

            print(image as Any)
            let inParams = [String: Any]()

            self.listenAction("takeScreenshot", inParams)
        }

        //        note.addObserver(forName: NSNotification.Name.closeWin, object: nil, queue: OperationQueue.main) { _ in
        //            // 关闭窗口
        //            print("closewin")
        //            let inParams = [String: Any]()
        //成功
        //            self.listenAction("closeWin", inParams)
        //        }
    }
}

extension WYAWebViewManager {
    func getNetWork(params: [String: String]) {
        // 获取网络状态

        // 回传信息
        self.nativeDelegate?.getNativeActionResult("", "sss")
    }
}

// MARK: 按键事件

extension WYAWebViewManager {
    /**
     返回事件
     */
    func backBtnPressed() {
        self.nativeDelegate?.getNativeActionResult("keyBack", "")
    }

    /// 音量变化监听
    func handleVolum() {
        do {
            try AVAudioSession.sharedInstance().setActive(true)
        } catch let error as NSError {
            print("\(error)")
        }
        self.currentVolume = AVAudioSession.sharedInstance().outputVolume
        NotificationCenter.default.addObserver(self, selector: #selector(self.changeVolumSlider(notifi:)), name: NSNotification.Name(rawValue: "AVSystemController_SystemVolumeDidChangeNotification"), object: nil)
        UIApplication.shared.beginReceivingRemoteControlEvents()
    }

    @objc func changeVolumSlider(notifi: NSNotification) {
        if let volum: Float = notifi.userInfo?["AVSystemController_AudioVolumeNotificationParameter"] as! Float? {
            if volum > self.currentVolume! {
                self.nativeDelegate?.getNativeActionResult("volumeUp", "")
                print("增大")
            } else {
                self.nativeDelegate?.getNativeActionResult("voolumeDown", "")
                print("减小")
            }
            self.currentVolume = volum
        }
    }
}

extension WYAWebViewManager {
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "downloadState" {
            let prog = change![.newKey] as! WYADownloadState.RawValue
            if prog == 4 {
                self.callback()
            }
        }
    }
}
