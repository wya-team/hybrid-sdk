//
//  ViewController.swift
//  WYAWebView
//
//  Created by 1228506851@qq.com on 08/15/2018.
//  Copyright (c) 2018 1228506851@qq.com. All rights reserved.
//

import UIKit
import WYAWebView

// fileprivate let DEMO_URL = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/"
fileprivate let DEMO_URL = "http://192.168.23.115:8088/consts"

class ViewController: UIViewController {
    
    let h5 = WYAWebView()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        h5.frame = self.view.bounds
        
        // 配置项
        h5.register()
        
        // 打开网页
        h5.loadUrl(url: DEMO_URL)
        
        // 打开本地文件
        // web.loadLocalHtml(htmlName: "index")
        
        self.view.addSubview(h5)
        
        h5.vc = self
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

// MARK: --
extension ViewController {

}


