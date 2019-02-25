//
//  WYAViewController.swift
//  WYAWebView
//
//  Created by 李世航 on 2019/1/30.
//

import UIKit
import WYAKit

public class WYAViewController: UIViewController {

    static let shared = WYAViewController()

    var model : OpenWinModel?
    var orientation: String?

    public var needLocalService : Bool?//只能开启一次

    var needNavBar : Bool?

    var navBar : WYANavBar {
        let nav = WYANavBar()
        nav.delegate = self as WYANavBarDelegate
        nav.navTitleColor   = .black
        nav.navTitle = model?.title ?? ""
        nav.backgroundColor = .white
        let bundle = Bundle(for: classForCoder)
        let image = UIImage(named: "返回", in: bundle, compatibleWith: nil)
        nav.wya_customGoback(with: image!)
        return nav
    }

    var webView : WYAWebView?


    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?) {
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }

    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    deinit {
        webView = nil
        webView?.removeFromSuperview()

    }

    override public func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.navigationController?.navigationBar.isHidden = true


    }

    override public func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        self.navigationController?.navigationBar.isHidden = false
        
    }

    override public func viewDidLoad() {
        super.viewDidLoad()

        self.navigationController?.interactivePopGestureRecognizer?.delegate = self

        self.view.backgroundColor = .white

        if model?.hideTopBar == false {
            self.view.addSubview(navBar)
        }


        webView = WYAWebView()
        var y : CGFloat?
        var height : CGFloat?

        if model?.hideTopBar ?? true {
            y = 0
            height = self.view.cmam_height
        }else {
            y = navBar.cmam_height
            height = self.view.cmam_height-navBar.cmam_height
        }
        webView?.frame = CGRect(x: 0.0, y: y!, width: self.view.cmam_width, height:height!)
        webView?.webView?.scrollView.showsVerticalScrollIndicator = model?.vScrollBarEnabled ?? true
        webView?.webView?.scrollView.showsHorizontalScrollIndicator = model?.hScrollBarEnabled ?? true
        webView?.webView?.scrollView.bouncesZoom = model?.scaleEnabled ?? true
        if needLocalService ?? false {
            webView?.openLocationHttpServer()
        }
        if model?.url != nil {
            if model?.url != "" {
                webView?.loadUrl(url: (model?.url!)!)
            }
        }
        self.view.addSubview(webView!)

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

extension WYAViewController {
    // 默认为true
    override public var shouldAutorotate: Bool {
        return true
    }
    // 支持的旋转方向
    override public var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if orientation == "portraitUp" {
            return .portrait
        }else if orientation == "portraitDown" {
            return .portraitUpsideDown
        }else if orientation == "landscapeLeft" {
            return .landscapeLeft
        }else if orientation == "landscapeRight" {
            return .landscapeRight
        }else if orientation == "auto" {
            return .all
        } else if orientation == "autoLandscape" {
            return .landscape
        } else if orientation == "autoPortrait" {
            return .allButUpsideDown
        }
        return .portrait

    }
    // 模态切换的默认方向
    override public var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        return .portraitUpsideDown
    }

}

extension WYAViewController : WYANavBarDelegate {

    public func wya_goBackPressed(_ sender: UIButton) {
        NotificationCenter.default.post(name: NSNotification.Name.closeWin, object: nil)
        if self.navigationController == nil {
            self.dismiss(animated: true) {

            }
        } else {
            self.navigationController?.popViewController(animated: true)
        }
    }
}

extension WYAViewController : UIGestureRecognizerDelegate {
    public func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        NotificationCenter.default.post(name: NSNotification.Name.closeWin, object: nil)
        if self.navigationController?.childViewControllers.count == 1 {
            return false
        } else {
            return true
        }
    }
}

extension UIApplication {
    func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
        return UIInterfaceOrientationMask.all
    }
}
