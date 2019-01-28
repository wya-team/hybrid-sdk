//
//  ViewControllerCategory.swift
//  aaa
//
//  Created by 李世航 on 2019/1/24.
//  Copyright © 2019 Lsh. All rights reserved.
//

import Foundation

extension ViewController{
    @objc func injected() {
        viewDidLoad()
        viewWillAppear(true)
        viewWillDisappear(true)
    }
}


