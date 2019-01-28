//
//  ViewController.swift
//  WYAWebView
//
//  Created by 1228506851@qq.com on 08/15/2018.
//  Copyright (c) 2018 1228506851@qq.com. All rights reserved.
//

import UIKit
import WYAWebView

 fileprivate let DEMO_URL = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/"
//fileprivate let DEMO_URL = "http://192.168.23.115:8088/consts"

class ViewController: UIViewController {
    
    let h5 = WYAWebView()

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)

    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        h5.frame = CGRect(x: 0, y: UIApplication.shared.statusBarFrame.size.height, width: UIScreen.main.bounds.size.width, height: self.view.frame.size.height-44)

//        // 打开网页
//        h5.loadUrl(url: DEMO_URL)

        // 打开本地文件
//        h5.loadLocalHtml(htmlName: "index")
        self.view.addSubview(h5)

        h5.openLocationHttpServer()
        
    }
    
    

    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

// MARK: --
extension ViewController {

}


