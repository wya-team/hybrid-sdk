//
//  WYAViewControllerCategory.swift
//  WYAWebViewDemo
//
//  Created by 李世航 on 2019/2/13.
//  Copyright © 2019 WeiYiAn. All rights reserved.
//

import Foundation

extension ViewController{
    @objc func injected() {
        viewDidLoad()
        viewWillAppear(true)
        viewWillDisappear(true)
    }
}
