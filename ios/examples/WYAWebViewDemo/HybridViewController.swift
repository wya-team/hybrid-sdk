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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        NotificationCenter.default.addObserver(self, selector: #selector(moduleMethod(nofi:)), name: NSNotification.Name(rawValue: "REGIST_MODULE_METHOD"), object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(eventAdd(nofi:)), name: NSNotification.Name(rawValue: "EVENT_ADD"), object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(eventRemove(nofi:)), name: NSNotification.Name(rawValue: "EVENT_REMOVE"), object: nil)
        // Do any additional setup after loading the view.
    }

    deinit {
        // 移除扩展监听的通知
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "REGIST_MODULE_METHOD"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "EVENT_ADD"), object: nil)
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "EVENT_REMOVE"), object: nil)

    }

}

// MARK: 扩展
extension HybridViewController{
    @objc func eventAdd(nofi:Notification) {
//        let nofiParam = nofi.userInfo
//        print("事件订阅\(nofiParam)")
        UIView.wya_showCenterToast(withMessage: "订阅事件")

    }

    @objc func eventRemove(nofi:Notification) {
//        let nofiParam = nofi.userInfo
//        print("事件取消订阅\(nofiParam)")
        UIView.wya_showCenterToast(withMessage: "取消订阅事件")

    }

    @objc func moduleMethod(nofi:Notification) {
//        let nofiParam = nofi.userInfo
//        let module = nofiParam!["moduleName"] as! String // 模块名
//        let method = nofiParam!["methodName"] as! String // 方法名
//        let allParams = nofiParam!["allParams"] as! [String:[String:Any]]
//        let developParams = allParams["DevelopParams"] // 自定义参数
//        let hybridObj = developParams!["webView"] as! WYAWebView// emit方法调用对象
//        let params = allParams["params"] // H5传递的方法参数
//        let actionId = developParams!["actionID"] as! String
//
//        if module == "memory"{
//            if method == "clearCache"{
//                print("方法的名字\(params!["path"] ?? " ")")
//                hybridObj.getExtensionActionResult(actionId, ["status": 1, "msg": "调用成功", "data":NSNull()])
//            }
//        }
//        print("方法扩展\(nofiParam!)")
        UIView.wya_showCenterToast(withMessage: "模块方法扩展")
    }

}
