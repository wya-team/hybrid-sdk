//
//  HomeViewController.swift
//  WYAWebViewDemo
//
//  Created by 李俊恒 on 2019/3/12.
//  Copyright © 2019 WeiYiAn. All rights reserved.
//

import UIKit
import WYAKit
class HomeViewController: UIViewController {

//    lazy var customNavBar :WYANavBar = {
//        let wyaNavBar = WYANavBar()
//        wyaNavBar.navTitle = "Hybrid"
//        return wyaNavBar
//    }()

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
        view.backgroundColor = UIColor.groupTableViewBackground
        let button = UIButton(frame: CGRect(x: 100, y: 100, width: 100, height: 80))
        button.setTitle("进入hybrid", for: UIControlState.normal)
        button.setTitleColor(UIColor.black, for: UIControlState.normal)
        view.addSubview(button)
        button.addTarget(self, action: #selector(enterHybrid), for: UIControlEvents.touchUpInside)

        // Do any additional setup after loading the view.
    }

    @objc func enterHybrid(){
        let vc = HybridViewController()
        vc.needLocalService = true
        self.navigationController?.pushViewController(vc, animated: true)
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
