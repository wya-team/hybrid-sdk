//
//  WYAViewController.swift
//  WYAWebView
//
//  Created by 李世航 on 2019/1/30.
//

import UIKit
import WYAKit

class WYAViewController: UIViewController {

    static let shared = WYAViewController()

    var model : OpenWinModel?

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

    var webView : WYAWebView {
        let web = WYAWebView()
        web.frame = CGRect(x: 0.0, y: (model?.pageParams?.hideTopBar!)! ? navBar.cmam_height:0, width: self.view.cmam_width, height:(model?.pageParams?.hideTopBar!)! ? self.view.cmam_height-navBar.cmam_height : self.view.cmam_height)
        web.loadUrl(url: model?.url ?? "http://localhost:8080/home/main")
        web.webView?.scrollView.showsVerticalScrollIndicator = model?.pageParams?.vScrollBarEnabled ?? true
        web.webView?.scrollView.showsHorizontalScrollIndicator = model?.pageParams?.hScrollBarEnabled ?? true
        web.webView?.scrollView.bouncesZoom = model?.pageParams?.scaleEnabled ?? true
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


    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        self.navigationController?.interactivePopGestureRecognizer?.delegate = self

        self.view.backgroundColor = .white

        if (model?.pageParams?.hideTopBar!)! {
            self.view.addSubview(navBar)
        }

        self.view.addSubview(webView)

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
