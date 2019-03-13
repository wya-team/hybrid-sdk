//
//  HybridViewController.swift
//  WYAWebViewDemo
//
//  Created by 李俊恒 on 2019/3/11.
//  Copyright © 2019 WeiYiAn. All rights reserved.
//

import UIKit
import WYAWebView
class HybridViewController: WYAHybridController {

    override func viewWillAppear(_ animated: Bool) {
//        /// 全局监听hybrid中的事件订阅取消、方法扩展
//        NotificationCenter.default.addObserver(self, selector: #selector(moduleMethod(nofi:)), name: NSNotification.Name(rawValue: "REGIST_MODULE_METHOD"), object: nil)
//        NotificationCenter.default.addObserver(self, selector: #selector(eventAdd(nofi:)), name: NSNotification.Name(rawValue: "EVENT_ADD"), object: nil)
//        NotificationCenter.default.addObserver(self, selector: #selector(eventRemove(nofi:)), name: NSNotification.Name(rawValue: "EVENT_REMOVE"), object: nil)
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    deinit {
        // 移除扩展监听的通知
//        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "REGIST_MODULE_METHOD"), object: nil)
//        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "EVENT_ADD"), object: nil)
//        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "EVENT_REMOVE"), object: nil)

    }

}

// MARK: 扩展
extension HybridViewController{
//    @objc func eventAdd(nofi:Notification) {
////        let nofiParam = nofi.userInfo
////        print("事件订阅\(nofiParam)")
//    }
//
//    @objc func eventRemove(nofi:Notification) {
////        let nofiParam = nofi.userInfo
////        print("事件取消订阅\(nofiParam)")
//    }
//
//    @objc func moduleMethod(nofi:Notification) {
////        let nofiParam = nofi.userInfo
////        print("方法扩展\(nofiParam)")
//    }

}
