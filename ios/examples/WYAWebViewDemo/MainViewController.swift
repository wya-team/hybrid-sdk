//
//  MainViewController.swift
//  WYAWebViewDemo
//
//  Created by 李世航 on 2019/1/30.
//  Copyright © 2019 WeiYiAn. All rights reserved.
//

import UIKit
import WYAWebView

fileprivate let DEMO_URL = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/"
//fileprivate let DEMO_URL = "http://192.168.23.115:8088/consts"

class MainViewController: UIViewController {

    let h5 = WYAWebView()

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.navigationBar.isHidden = true
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.navigationBar.isHidden = false
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        var top : CGFloat?

        if  UIApplication.shared.statusBarFrame.size.height > 20 {
            top = UIApplication.shared.statusBarFrame.size.height
        } else {
            top = 0.0
        }

        self.view.backgroundColor = .white
        h5.frame = CGRect(x: 0, y: top!, width: UIScreen.main.bounds.size.width, height:self.view.frame.size.height-top!)

        //        // 打开网页
        //        h5.loadUrl(url: DEMO_URL)

        // 打开本地文件
        //        h5.loadLocalHtml(htmlName: "index")
        self.view.addSubview(h5)

        h5.openLocationHttpServer()

//        h5.openwin(NewViewController(), .present)

    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
