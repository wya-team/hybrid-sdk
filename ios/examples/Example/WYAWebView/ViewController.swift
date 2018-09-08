//
//  ViewController.swift
//  WYAWebView
//
//  Created by 1228506851@qq.com on 08/15/2018.
//  Copyright (c) 2018 1228506851@qq.com. All rights reserved.
//

import UIKit
import WYAWebView

class ViewController: UIViewController {

    let web = WYAWebView()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        
        web.frame = self.view.bounds

        web.configWebView()



        web.loadLocalHtml(htmlName: "index")
        self.view.addSubview(web)
        web.vc = self



        let system = SystemConfig()
        let aa = system.appId
        print(aa)
        
    }
    
    
    
    //开始摇晃
    override func motionBegan(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("开始摇晃")
        web.shakeStateAction(shakeState: .shakeStart)
    }
    //摇晃结束
    override func motionEnded(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("摇晃结束")
        web.shakeStateAction(shakeState: .shakeEnd)
    }
    //摇晃被意外终止
    override func motionCancelled(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("摇晃被意外终止")
        web.shakeStateAction(shakeState: .shakeCancel)
    }

    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

