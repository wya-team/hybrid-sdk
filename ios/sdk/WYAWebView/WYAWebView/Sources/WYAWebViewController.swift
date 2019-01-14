//
//  WYAWebViewController.swift
//  Alamofire
//
//  Created by 李世航 on 2018/9/21.
//

import UIKit

class WYAWebViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    //开始摇晃
    func motionBegan(motion: UIEventSubtype, withEvent event: UIEvent) {
        print("开始摇晃")
    }
    
    //摇晃结束
    func motionEnded(motion: UIEventSubtype, withEvent event: UIEvent) {
        print("摇晃结束")
    }
    
    //摇晃被意外终止
    func motionCancelled(motion: UIEventSubtype, withEvent event: UIEvent) {
        print("摇晃被意外终止")
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}

extension WYAWebViewController {
    
    
}
