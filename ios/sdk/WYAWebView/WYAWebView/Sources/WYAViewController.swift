//
//  WYAViewController.swift
//  WYAWebView
//
//  Created by 李世航 on 2019/1/30.
//

import UIKit
import WYAKit

class WYAViewController: UIViewController {

    var url : String?
    var enableSlidPane : Bool?
    var navT : String?

    var needNavBar : Bool?
    var needWebView : Bool?


    var navBar : WYANavBar {
        let nav = WYANavBar()
        nav.delegate = self as WYANavBarDelegate
        nav.navTitleColor   = .black
        nav.navTitle = navT!
        nav.backgroundColor = .white
        let bundle = Bundle(for: classForCoder)
        let image = UIImage(named: "返回", in: bundle, compatibleWith: nil)
        nav.wya_customGoback(with: image!)
        return nav
    }

    var webView : WYAWebView {
        let web = WYAWebView()
        web.frame = CGRect(x: 0.0, y: needNavBar! ? navBar.cmam_height:0, width: self.view.cmam_width, height:needNavBar! ? self.view.cmam_height-navBar.cmam_height : self.view.cmam_height)
        web.loadUrl(url: "http://www.baidu.com")
        return web
    }


    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }


    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.navigationBar.isHidden = true
        if enableSlidPane! {
            self.navigationController?.interactivePopGestureRecognizer?.isEnabled = true
        } else {
            self.navigationController?.interactivePopGestureRecognizer?.isEnabled = false
        }

    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        if enableSlidPane! {
            self.navigationController?.interactivePopGestureRecognizer?.isEnabled = false
        } else {
            self.navigationController?.interactivePopGestureRecognizer?.isEnabled = true
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.navigationController?.interactivePopGestureRecognizer?.delegate = self

        self.view.backgroundColor = .white

        if needNavBar! {
            self.view.addSubview(navBar)
        }

        if needWebView! {
            self.view.addSubview(webView)
        }



        let button = UIButton(type: UIButtonType.custom)


        if enableSlidPane! {
            self.wya_registerShowIntractive(withEdgeGesture: false) { (direction) in
                print(direction)
                if direction.rawValue == 0 {
                    let leftVC = WYAViewController()
                    leftVC.enableSlidPane = false
                    leftVC.navT = "左侧"
                    leftVC.needWebView = false
                    leftVC.needNavBar = true
                    self.wya_showDefaultDrawerViewController(leftVC)
                } else {
                    let rightVC = WYAViewController()
                    rightVC.enableSlidPane = false
                    rightVC.navT = "右侧"
                    rightVC.needWebView = false
                    rightVC.needNavBar = true
                    let config = WYALateralSlideConfiguration.default()
                    config?.direction = WYADrawerTransitionDirection.fromRight
                    config?.finishPercent = 0.2
                    config?.showAnimDuration = 0.2
                    config?.hiddenAnimDuration = 0.2
                    config?.maskAlpha = 0.1
                    self.wya_showDrawerViewController(rightVC, animationType: WYADrawerAnimationType.init(rawValue: 0)!, configuration: config)
                }
            }
        }

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

extension WYAViewController: WYANavBarDelegate, UIGestureRecognizerDelegate {

    func wya_goBackPressed(_ sender: UIButton) {
        NotificationCenter.default.post(name: NSNotification.Name.closeWin, object: nil)
        if self.navigationController == nil {
            self.dismiss(animated: true) {

            }
        } else {
            self.navigationController?.popViewController(animated: true)
        }
    }

    public func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        NotificationCenter.default.post(name: NSNotification.Name.closeWin, object: nil)
        if self.navigationController?.childViewControllers.count == 1 {
            return false
        } else {
            return true
        }
    }

}
