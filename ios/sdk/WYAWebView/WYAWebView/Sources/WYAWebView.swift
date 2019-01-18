//
//  WYAWebView.swift
//  SwiftDemo
//
//  Created by 李世航 on 2018/8/9.
//  Copyright © 2018年 WeiYiAn. All rights reserved.
//

import MJRefresh
import SnapKit
import UIKit
import WebKit

/// 初始版本号
fileprivate let jsBuildVersion = 0.1

public class WYAWebView: UIView {
    public override var canResignFirstResponder: Bool {
        return false
    }

    public override var canBecomeFirstResponder: Bool {
        return true
    }

    let webManager = WYAWebViewManager()
    var actionID: String?

    var webView: WKWebView?
    let userContentControll = WKUserContentController()
    /// 记录加载在哪个控制器的
    public var vc: UIViewController?

    /// 进度条
    var progressView: UIProgressView = {
        let progress = UIProgressView()
        progress.trackTintColor = UIColor(red: 240.0 / 255, green: 240.0 / 255, blue: 240.0 / 255, alpha: 1.0)
        progress.progressTintColor = .blue
        return progress
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)

        loadJSFolder()
        let config = WKWebViewConfiguration()
        config.userContentController = userContentControll
        self.webView = WKWebView(frame: .zero, configuration: config)
        self.webView!.uiDelegate = self as WKUIDelegate
        self.webView!.navigationDelegate = self as WKNavigationDelegate
        self.webView!.scrollView.delegate = self as UIScrollViewDelegate
        self.webView!.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        self.webView!.allowsBackForwardNavigationGestures = true
        self.webView!.sizeToFit()
        self.webView!.scrollView.showsVerticalScrollIndicator = false
        self.webView!.scrollView.showsHorizontalScrollIndicator = false
        self.addSubview(self.webView!)
        
        self.addSubview(self.progressView)
        
        //在调用相机显示的时候设置：isOpaque  scrollView.backgroundColor
        webView = WKWebView(frame: .zero, configuration: config)
        webView!.uiDelegate = self as WKUIDelegate
        webView!.navigationDelegate = self as WKNavigationDelegate
        webView!.scrollView.delegate = self as UIScrollViewDelegate
        webView!.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        webView!.allowsBackForwardNavigationGestures = true
        webView!.sizeToFit()
        webView!.scrollView.showsVerticalScrollIndicator = false
        webView!.scrollView.showsHorizontalScrollIndicator = false
        addSubview(webView!)

        addSubview(progressView)

        // 在调用相机显示的时候设置：isOpaque  scrollView.backgroundColor
        //        self.webView?.isOpaque = false
        //        self.webView?.scrollView.backgroundColor = UIColor.white.withAlphaComponent(0.0)
        //        self.getNativeActionResult(obj: "_viewappear_")
        webManager.nativeDelegate = self as WebViewDelegate
        webManager.registerSystemNotice()

        //        let imageP = ImagePicker()
        //        let captureVideoPreviewLayer = imageP.previewLayer
        //        let layer = self.layer
        //        layer.masksToBounds = true
        //        captureVideoPreviewLayer.frame = self.frame
        ////        layer.addSublayer(captureVideoPreviewLayer)
        //        layer.insertSublayer(captureVideoPreviewLayer, below: self.webView?.layer)
        //        imageP.startRecordFunction()
    }

    public override func layoutSubviews() {
        super.layoutSubviews()

        webView?.snp.makeConstraints({ make in
            make.edges.equalTo(UIEdgeInsetsMake(0, 0, 0, 0))
        })

        progressView.snp.makeConstraints { make in
            make.left.right.top.equalTo(self)
            make.height.equalTo(1)
        }
    }

    /*
     func addRefreshView() -> Void {
     if (self.vc?.navigationController != nil) {
     self.progressView.frame = CGRect(x: 0, y: 64, width: self.frame.size.width, height: 1)
     }else{
     self.progressView.frame = CGRect(x: 0, y: 0, width: self.frame.size.width, height: 1)
     }

     self.addSubview(self.progressView)

     self.webView!.scrollView.mj_header = MJRefreshNormalHeader(refreshingTarget: self, refreshingAction: #selector(headerRefresh))
     }

     @objc func headerRefresh() {
     print("刷新")
     self.webView?.reload()
     //        self.webView?.scrollView.mj_header.endRefreshing()
     }
     */

    public required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

// MARK: 负责处理文件之间的相互调用

extension WYAWebView {
    /// 加载网址链接
    ///
    /// - Parameter url: url
    public func loadUrl(url: String) {
        let ul = URL(string: url)
        let request = URLRequest(url: ul!)
        webView!.load(request)
    }

    /// 加载本地HTML
    ///
    /// - Parameter htmlName: html名字
    public func loadLocalHtml(htmlName: String) {
        let string = Bundle.main.path(forResource: htmlName, ofType: "html")
        var path = String()
        do {
            path = try String(contentsOfFile: string!)
        } catch {
            print(error)
        }
        webView!.loadHTMLString(path, baseURL: Bundle.main.bundleURL)
    }

    public override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "estimatedProgress" {
            progressView.alpha = 1
            let animated = (webView?.estimatedProgress)! > Double(progressView.progress)
            progressView.setProgress(Float((webView?.estimatedProgress)!), animated: animated)
            if webView!.estimatedProgress >= 1.0 {
                UIView.animate(withDuration: 0.3, delay: 0.3, options: .curveEaseOut, animations: {
                    self.progressView.alpha = 0.0
                }) { _ in
                    print("进度结束")
                    self.progressView.setProgress(0.0, animated: false)
                }
            }

        } else {
            super.observeValue(forKeyPath: keyPath, of: object, change: change, context: context)
        }
    }

    /// 获取参数
    ///
    /// - Parameters:
    ///   - id: 事件ID
    ///   - handler: 回调
    func getParams(_ id: String, handler: @escaping (Any) -> Void) {
        let jsSrring = "WYAJSBridge.getParam(\(id))"
        webView?.evaluateJavaScript(jsSrring) { params, error in
            print(params ?? "没有参数")
            print(error ?? "没有错误")

            guard params != nil else { return }

            var dictory: Any

            // 有参数
            /** params参数为json字符串需要转化为字典
             */
            dictory = self.webManager.jsonStringToDic(params as! String) as Any
            print(dictory)

            handler(dictory)
        }
    }
}

// MARK: 负责处理webview的代理方法

extension WYAWebView: WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
    // MARK: WKScriptMessageHandler

    /// WKScriptMessageHandler 回调方法(采用原生注入方法会回调)，addScriptMessageHandler 是注册JS的MessageHandler，但是WKWebView在多次调用loadRequest，会出现JS无法调用iOS端。我们需要在loadRequest和reloadWebView的时候需要重新注入。（在注入之前需要移除再注入，避免造成内存泄漏），如果message.body中没有参数，JS代码中需要传null防止iOS端不会接收到JS的交互，window.webkit.messageHandlers.<事件名>.postMessage(需要传递的数据)
    ///
    /// - Parameters:
    ///   - userContentController: userContentController
    ///   - message: APP端收到的信息
    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {}

    // MARK: WKUIDelegate

    /*
     /// ios8
     ///
     /// - Parameters:
     ///   - webView: <#webView description#>
     ///   - configuration: <#configuration description#>
     ///   - navigationAction: <#navigationAction description#>
     ///   - windowFeatures: <#windowFeatures description#>
     /// - Returns: <#return value description#>
     public func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {

     }
     */

    /// 窗口关闭时调用 ios9
    ///
    /// - Parameter webView: webView
    public func webViewDidClose(_ webView: WKWebView) {}

    /// 在JS端调用alert函数时，会触发此代理方法。JS端调用alert时所传的数据可以通过message拿到。在原生得到结果后，需要回调JS，是通过completionHandler回调（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - message: alert函数返回信息
    ///   - frame: 窗口配置
    ///   - completionHandler: 回调
    public func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Swift.Void) {
        print("alert" + message)
        completionHandler()
    }

    /// JS端调用confirm函数时，会触发此方法，通过message可以拿到JS端所传的数据，在iOS端显示原生alert得到YES/NO后，通过completionHandler回调给JS端 （ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - message: comfirm函数传递的信息
    ///   - frame: 窗口配置
    ///   - completionHandler: 回调
    public func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Swift.Void) {}

    /// JS端调用prompt函数时，会触发此方法,要求输入一段文本,在原生输入得到文本内容后，通过completionHandler回调给JS （ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - prompt: prompt函数传递的信息
    ///   - defaultText: <#defaultText description#>
    ///   - frame: 窗口配置
    ///   - completionHandler: 回调
    public func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Swift.Void) {}

    /*
     public func webView(_ webView: WKWebView, shouldPreviewElement elementInfo: WKPreviewElementInfo) -> Bool {
     //ios10
     }

     public func webView(_ webView: WKWebView, previewingViewControllerForElement elementInfo: WKPreviewElementInfo, defaultActions previewActions: [WKPreviewActionItem]) -> UIViewController? {
     //ios10
     }

     public func webView(_ webView: WKWebView, commitPreviewingViewController previewingViewController: UIViewController) {
     //ios10
     }
     */

    // MARK: WKNavigationDelegate

    /// 判断链接是否允许跳转（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - navigationAction: 跳转事件
    ///   - decisionHandler: 回调
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Swift.Void) {
        let url = navigationAction.request.url?.absoluteString.removingPercentEncoding

        if (url?.hasPrefix("command://"))! {
            /** 分解url，返回字典，字典中包含（协议名，方法名，ID）
             * key: protocol 协议名
             * key: method   方法名
             * key: id       id
             */

            let dic = webManager.cutString(urlString: url!)

            actionID = (dic["id"] as! String)
            guard actionID != nil else { return }

            let arrContain = dic.allKeys.contains { (string) -> Bool in
                if (string as! String) == "method" {
                    return true
                } else {
                    return false
                }
            }

            if arrContain {
                getParams(actionID!) { params in
                    // 获取到参数执行调用原生
                    self.webManager.nativeAction(dic["method"] as! String, params: params as! [String: String])
                }
            } else {
                // 不需要参数执行原生
            }
        }
        decisionHandler(.allow)
    }

    /// 拿到响应后决定是否允许跳转（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - navigationResponse: 响应数据
    ///   - decisionHandler: 回调
    public func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse, decisionHandler: @escaping (WKNavigationResponsePolicy) -> Swift.Void) {
        
//        self.webManager.backBtnPressed()
        decisionHandler(WKNavigationResponsePolicy.allow)
        
    }

    
    
    



    /// 链接开始加载时调用（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - navigation: <#navigation description#>
    public func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        progressView.isHidden = false
    }

    /// 收到服务器重定向时调用（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - navigation: <#navigation description#>
    public func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {}

    /// 加载错误时调用 （ios8）
    ///
    /// - Parameters:
    ///   - webView: <#webView description#>
    ///   - navigation: <#navigation description#>
    ///   - error: <#error description#>
    public func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        print("加载失败" + error.localizedDescription)
    }

    /// 当内容开始到达主帧时被调用（即将完成）（ios8）
    ///
    /// - Parameters:
    ///   - webView: <#webView description#>
    ///   - navigation: <#navigation description#>
    public func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {}

    /// 加载完成 （ios8）
    ///
    /// - Parameters:
    ///   - webView: <#webView description#>
    ///   - navigation: <#navigation description#>
    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("加载完成")

        var dataParams = webManager.config.getSystemConfigDic()

        if (frame.size.width == UIScreen.main.bounds.size.width) || (frame.size.height == UIScreen.main.bounds.size.height) {
            dataParams.updateValue(true, forKey: "fullScreen")
        } else {
            dataParams.updateValue(false, forKey: "fullScreen")
        }
        
        
        var outParams = [String: Any]()
        outParams.updateValue(1, forKey: "status")
        outParams.updateValue(dataParams, forKey: "data")

        let jsParams = webManager.dicTosJsonString(outParams)
        print(jsParams)

        let jsString = "WYAJSBridge.emit('_ready_', \(jsParams))"
        webView.evaluateJavaScript(jsString) { result, error in
            print(result ?? "没有数据")
            print(error ?? "没有错误")
        }
    }

    /// 在提交的主帧中发生错误时调用（ios8）
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - navigation: <#navigation description#>
    ///   - error: 失败原因
    public func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("主帧错误" + error.localizedDescription)
    }

    /// 当webView需要响应身份验证时调用(如需验证服务器证书)(ios8)
    ///
    /// - Parameters:
    ///   - webView: webView
    ///   - challenge: <#challenge description#>
    ///   - completionHandler: 回调
    //    public func webView(_ webView: WKWebView, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Swift.Void) {
    //
    //        completionHandler(.cancelAuthenticationChallenge, nil)
    //    }

    /// 当webView的web内容进程被终止时调用。(iOS 9.0之后)
    ///
    /// - Parameter webView: webView
    public func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        print("终止")
    }
    
}

// MARK: 负责处理scrollView的代理

extension WYAWebView: UIScrollViewDelegate {
    // MARK: UIScrollViewDelegate

    public func scrollViewDidScroll(_ scrollView: UIScrollView) {}

    /// 回到头部
    ///
    /// - Parameter scrollView: scrollView
    /// - Returns: 是否允许触发该事件
    public func scrollViewShouldScrollToTop(_ scrollView: UIScrollView) -> Bool {
        return true
    }
}

// MARK: 负责和webviewManager的代理

extension WYAWebView: WebViewDelegate {
    /// 获取原生方法处理结果
    ///
    /// - Parameter obj: 参数
    func getNativeActionResult(_ type: String, _ obj: String) {
        let jsString = "WYAJSBridge.emit(\("'" + type + "'"), \(obj))"

        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript(jsString, completionHandler: { result, error in
                print(result ?? "没有结果")
                print(error ?? "没有错误")
            })
        }
    }
}

// MARK: - 摇晃事件回调

extension WYAWebView {
    public override func motionBegan(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("开始摇晃")

        var params = [String: Any]()
        params.updateValue("1", forKey: "status")
        params.updateValue("调用成功", forKey: "msg")

        let inParams = [String: Any]()
        params.updateValue(inParams, forKey: "data")
        let string = webManager.dicTosJsonString(params)

        getNativeActionResult("shake", string)
    }

    public override func motionEnded(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("结束摇晃")
    }

    public override func motionCancelled(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("取消摇晃")
    }
}

// MARK: - 加载注入本地js文件

extension WYAWebView {
    // FIXME: 待修复问题
    /// 获取js版本号与本地做对比，更新js
    func loadJSFolder() {
        let cachePath = NSSearchPathForDirectoriesInDomains(FileManager.SearchPathDirectory.cachesDirectory, FileManager.SearchPathDomainMask.userDomainMask, true).last! as String
        let path = cachePath + "/WYAWebViewJsFile"

        let manager = FileManager.default
        let exist = manager.fileExists(atPath: path)
        if !exist {
            do {
                try manager.createDirectory(atPath: path, withIntermediateDirectories: true, attributes: nil)
            } catch {
                // 创建失败
                print(error)
            }
        }

        /// 请求js版本接口
        /// 判断版本号，下载到本地，文件目录路径在上面的path字段
        /// - Returns: 是否需要更新
        func checkJSVersion() -> Bool {
            let buildVersion = false

            // if ... {
            //    ///如果大于就返回true
            //    return true
            // }
            return buildVersion
        }

        let haveJSFlie = manager.fileExists(atPath: "\(path + "*.js")")

        let jsVersion = checkJSVersion()

        if haveJSFlie {
            if jsVersion {
                /* 需要加载下载过后的js
                 * 下载之前先把原来的删掉
                 */

            } else {
                // 加载文件夹内已有的js文件
            }
        } else {
            let jsNames = ["WYAJSBridge.umd"]

            for jsName in jsNames {
                let bund = Bundle(for: classForCoder)

                let jsString = bund.path(forResource: jsName, ofType: "js")

                var jsPath = String()
                do {
                    jsPath = try String(contentsOfFile: jsString!)
                } catch {
                    print(error)
                }

                let userScript = WKUserScript(source: jsPath, injectionTime: WKUserScriptInjectionTime.atDocumentStart, forMainFrameOnly: true)
                userContentControll.addUserScript(userScript)
            }
        }
    }
}

// MARK: 摇晃状态

public enum ShakeState {
    case shakeStart
    case shakeEnd
    case shakeCancel
}
