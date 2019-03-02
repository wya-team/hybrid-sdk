//
//  WYAWebView.swift
//  SwiftDemo
//
//  Created by 李世航 on 2018/8/9.
//  Copyright © 2018年 WeiYiAn. All rights reserved.
//

import GCDWebServer
import MJRefresh
import SnapKit
import UIKit
import WebKit
import WYAKit
//import CVCocoaHTTPServeriOS

/// 初始版本号
fileprivate let jsBuildVersion = 0.1

public class WYAWebView: UIView {
    public override var canResignFirstResponder: Bool {
        return false
    }

    public override var canBecomeFirstResponder: Bool {
        return true
    }

    var pathString: String?

    var webServer = GCDWebServer()
//    let server = HTTPServer()

    var webManager: WYAWebViewManager?
    var actionID: String?
    var webView: WKWebView?
    let userContentControll = WKUserContentController()
    var contentHeight: Double?

    var progressView: UIProgressView = {
        let progress = UIProgressView()
        progress.trackTintColor = UIColor(red: 240.0 / 255, green: 240.0 / 255, blue: 240.0 / 255, alpha: 1.0)
        progress.progressTintColor = .blue
        return progress
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        self.webManager = WYAWebViewManager()
        self.webManager?.nativeDelegate = self as WebViewDelegate
        self.webManager?.registerSystemNotice()
        self.createWkWebView()
    }

    public override func layoutSubviews() {
        super.layoutSubviews()

        self.webView?.snp.makeConstraints({ make in
            make.edges.equalTo(UIEdgeInsetsMake(0, 0, 0, 0))
        })

        self.progressView.snp.makeConstraints { make in
            make.left.right.top.equalTo(self)
            make.height.equalTo(1)
        }
    }

    public required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    deinit {
        NotificationCenter.default.removeObserver(self, name: NSNotification.Name(rawValue: "estimatedProgress"), object: nil)
        webManager?.removeNotice()
        webManager = nil
    }
}

// MARK: 初始化webView

extension WYAWebView {
    func createWkWebView() {
        self.loadJSFolder()
        let config = WKWebViewConfiguration()
        config.userContentController = userContentControll
        webView = WKWebView(frame: .zero, configuration: config)
        webView!.uiDelegate = self as WKUIDelegate
        webView!.navigationDelegate = self as WKNavigationDelegate
        webView!.scrollView.delegate = self as UIScrollViewDelegate
        webView!.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        webView!.allowsBackForwardNavigationGestures = true
        webView!.sizeToFit()
        webView!.scrollView.showsVerticalScrollIndicator = false
        webView!.scrollView.showsHorizontalScrollIndicator = false
        self.addSubview(webView!)
        self.addSubview(self.progressView)
    }
}

// MARK: 暴露给外部调用的方法

extension WYAWebView {
    /// 加载网址链接
    ///
    /// - Parameter url: urlString
    @objc public func loadUrl(url: String) {
        let ul = URL(string: url)
        let request = URLRequest(url: ul!)
        webView!.load(request)
    }

    /// 加载本地HTML
    ///
    /// - Parameter htmlName: html名字
    @objc public func loadLocalHtml(htmlName: String) {
        let string = Bundle.main.path(forResource: htmlName, ofType: "html")
        var path = String()
        do {
            path = try String(contentsOfFile: string!)
        } catch {
            print(error)
        }
        self.webView!.loadHTMLString(path, baseURL: Bundle.main.bundleURL)
    }

    /// GCDWebServer
    @objc public func openLocationHttpServer() {
        let bund = Bundle(for: classForCoder)
        let websitePath = bund.path(forResource: "dist", ofType: nil)

        // 先设置个默认的handler处理静态文件（比如css、js、图片等）
        webServer.addGETHandler(forBasePath: "/", directoryPath: websitePath!,
                                indexFilename: nil, cacheAge: 3600,
                                allowRangeRequests: true)
        // ^/.*\\.html$
                let arr = ["event", "const", "methods", "assists"]
                for string in arr {
                    self.webServer.addHandler(
                        forMethod: "GET",
                        pathRegex: string,
                        request: GCDWebServerRequest.self,
                        processBlock: { (request) -> GCDWebServerResponse? in
                            print(request)
                            
                            let jsString = bund.path(forResource: "dist/index", ofType: "html")

                            var jsPath: String?
                            do {
                                jsPath = try String(contentsOfFile: jsString!)

                                return GCDWebServerDataResponse(html: jsPath!)
                            } catch {
                                print(error)
                                return GCDWebServerDataResponse(redirect: self.webServer.serverURL!, permanent: false)
                            }

                    })
                }

        // HTTP请求重定向（/从定向到/index.html）
        self.webServer.addHandler(
            forMethod: "GET",
            path: "/",
            request: GCDWebServerRequest.self,
            processBlock: { (request) -> GCDWebServerResponse? in
                let url = URL(string: "index.html", relativeTo: request.url)

                return GCDWebServerResponse(redirect: url!, permanent: false)
        })

        //            webServer.addHandler(forMethod: "GET", pathRegex: string, request: GCDWebServerRequest.self) { (request) -> GCDWebServerResponse? in
        //                if request.path == "index.html" {
        //                    return GCDWebServerResponse(redirect: request.url, permanent: false)
        //                }
        //
        //                let jss = bund.path(forResource: "dist", ofType: nil)
        //                print(jss as Any)
        //
        //                let jsString = bund.path(forResource: "dist/index", ofType: "html")
        //
        //                var jsPath : String?
        //                do {
        //                    jsPath = try String(contentsOfFile: jsString!)
        //                } catch {
        //                    print(error)
        //                }
        //
        //
        //                let path = jss! + request.path
        //
        //                let response = GCDWebServerDataResponse(html: jsPath!)
        //
        //                if FileManager.default.fileExists(atPath: path) {
        //
        //                    response?.statusCode = 200
        //
        //                }else {
        //
        //
        //                }
        //                return response
        //            }
        //        }
        //
//        "ConnectionClass": String(describing: WYAConenct.self)
        let options: Dictionary<String, Any> = ["Port": 8080,
                                                "AutomaticallySuspendInBackground": false,
                                                "BindToLocalhost": true,
                                                ]
        do {
            try self.webServer.start(options: options)
            // 打开网页
            self.loadUrl(url: (self.webServer.serverURL?.absoluteString)!)
            //            self.loadUrl(url: "http://www.baidu.com")
        } catch {
            print(error)
        }
    }

    /// CVCocoaHTTPServeriOS
//    public func localHost() {
//        let bund = Bundle(for: classForCoder)
//        let websitePath = bund.path(forResource: "dist", ofType: nil)
//
//        server.setType("_http.tcp")
//        server.setDocumentRoot(websitePath)
//        do {
//            try self.server.start()
//        } catch {
//            print(error)
//        }
//        print(self.server.listeningPort())
//
//        let port = String(format: "%d", server.listeningPort())
//        let urlString = "http://localhost:" + port
//
//        self.loadUrl(url: urlString)
//    }


    @objc public func openwin(_ vc: UIViewController, _ type: jumpType) {
        var allParams = [String: Any]()

        var params = [String: Any]()
        params.updateValue(self.cmam_parentController(), forKey: "rootVC")
        params.updateValue(vc, forKey: "vc")
        params.updateValue(type, forKey: "jumpType")
        allParams.updateValue(params, forKey: "DevelopParams")
        self.webManager?.nativeAction("openWin", params: allParams)
    }

    @objc public func removeNoticeAndObserver() {
        self.webManager?.removeNotice()
    }
}

// MARK: - KVO

extension WYAWebView {
    public override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "estimatedProgress" {
            self.progressView.alpha = 1
            let animated = (webView?.estimatedProgress)! > Double(progressView.progress)
            progressView.setProgress(Float((webView?.estimatedProgress)!), animated: animated)
            if self.webView!.estimatedProgress >= 1.0 {
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
}

// MARK: 负责处理webview的代理方法

extension WYAWebView: WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
    /// WKScriptMessageHandler 回调方法(采用原生注入方法会回调)，addScriptMessageHandler 是注册JS的MessageHandler，但是WKWebView在多次调用loadRequest，会出现JS无法调用iOS端。我们需要在loadRequest和reloadWebView的时候需要重新注入。（在注入之前需要移除再注入，避免造成内存泄漏），如果message.body中没有参数，JS代码中需要传null防止iOS端不会接收到JS的交互，window.webkit.messageHandlers.<事件名>.postMessage(需要传递的数据)
    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {}

    /// 窗口关闭时调用
    public func webViewDidClose(_ webView: WKWebView) {}

    /// 在JS端调用alert函数时，会触发此代理方法。JS端调用alert时所传的数据可以通过message拿到。在原生得到结果后，需要回调JS，是通过completionHandler回调（ios8）
    public func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Swift.Void) {}

    /// JS端调用confirm函数时，会触发此方法，通过message可以拿到JS端所传的数据，在iOS端显示原生alert得到YES/NO后，通过completionHandler回调给JS端
    public func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Swift.Void) {}

    /// JS端调用prompt函数时，会触发此方法,要求输入一段文本,在原生输入得到文本内容后，通过completionHandler回调给JS
    public func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Swift.Void) {}

    /// 判断链接是否允许跳转（ios8）
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Swift.Void) {
        let url = navigationAction.request.url?.absoluteString.removingPercentEncoding

        if (url?.hasPrefix("command://"))! {
            /** 分解url，返回字典，字典中包含（协议名，方法名，ID）
             * key: protocol 协议名
             * key: method   方法名
             * key: id       id
             */

            let dic = webManager?.cutString(urlString: url!)

            actionID = (dic?["id"] as! String)
            guard self.actionID != nil else { return }

            let arrContain = dic?.allKeys.contains { (string) -> Bool in
                if (string as! String) == "method" {
                    return true
                } else {
                    return false
                }
            }

            if arrContain! {
                self.getParams(self.actionID!) { params in
                    var allParams = [String: Dictionary<String, Any>]()
                    var param = [String: Any]()
                    param.updateValue(self.cmam_parentController(), forKey: "rootVC")
                    param.updateValue(self, forKey: "webView")
                    param.updateValue(self.actionID ?? "", forKey: "actionID")
                    allParams.updateValue(params as! [String: Any], forKey: "params")
                    allParams.updateValue(param, forKey: "DevelopParams")
                    // 获取到参数执行调用原生
                    self.webManager?.nativeAction(dic?["method"] as! String, params: allParams)
                }
            }
        }

        decisionHandler(.allow)
    }

    /// 拿到响应后决定是否允许跳转
    public func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse, decisionHandler: @escaping (WKNavigationResponsePolicy) -> Swift.Void) {
        //        self.webManager.backBtnPressed()
        let urlRespon = navigationResponse.response as! HTTPURLResponse
        //
        if urlRespon.statusCode == 200 {

        }else if urlRespon.statusCode == 404 {
//            loadUrl(url: (webServer.serverURL?.absoluteString)!)

        }
        decisionHandler(WKNavigationResponsePolicy.allow)
    }

    /// 链接开始加载时调用
    public func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        self.progressView.isHidden = false
    }

    /// 收到服务器重定向时调用（ios8）
    public func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {
        print("重定向")
    }

    /// 加载错误时调用 （ios8）
    public func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        print("加载失败" + error.localizedDescription)
    }

    /// 加载完成
    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("加载完成")

        webView.evaluateJavaScript("document.body.scrollHeight") { result, _ in

            if let tempHeight: Double = result as? Double {
                self.contentHeight = tempHeight
            }
        }

        var dataParams = webManager?.config.getSystemConfigDic()

        if (frame.size.width == UIScreen.main.bounds.size.width) || (frame.size.height == UIScreen.main.bounds.size.height) {
            dataParams?.updateValue(true, forKey: "fullScreen")
        } else {
            dataParams?.updateValue(false, forKey: "fullScreen")
        }
        var safe = [String: Float]()
        // FIXME: 安全区域需要根据情况计算
        if #available(iOS 11, *) {
            print(self.safeAreaLayoutGuide.layoutFrame)
            print(self.safeAreaInsets)
            safe.updateValue(Float(self.safeAreaInsets.top), forKey: "top")
            safe.updateValue(Float(self.safeAreaInsets.bottom), forKey: "bottom")
            safe.updateValue(Float(self.safeAreaInsets.left), forKey: "left")
            safe.updateValue(Float(self.safeAreaInsets.right), forKey: "right")
            dataParams?.updateValue(safe, forKey: "safeArea")
        }

        var outParams = [String: Any]()
        outParams.updateValue(1, forKey: "status")
        outParams.updateValue(dataParams!, forKey: "data")

        let jsParams = webManager?.dicTosJsonString(outParams)
        print(jsParams!)

        let jsString = "WYAJSBridge.emit('_ready_', \(jsParams!))"
        webView.evaluateJavaScript(jsString) { result, error in
            print(result ?? "没有数据")
            print(error ?? "没有错误")
        }
    }

    /// 在提交的主帧中发生错误时调用（ios8）
    public func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("主帧错误" + error.localizedDescription)
    }

    /// 当webView需要响应身份验证时调用(如需验证服务器证书)(ios8)
    public func webView(_ webView: WKWebView, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Swift.Void) {
        completionHandler(.performDefaultHandling, nil)
    }
}

// MARK: 负责处理scrollView的代理

extension WYAWebView: UIScrollViewDelegate {
    public func scrollViewDidScroll(_ scrollView: UIScrollView) {}

    public func scrollViewShouldScrollToTop(_ scrollView: UIScrollView) -> Bool {
        return true
    }
}

// MARK: 负责和webviewManager的代理

extension WYAWebView: WebViewDelegate {
    /// 获取原生方法处理结果
    ///
    /// - Parameters:
    ///   - type: 事件类型
    ///   - obj: 参数
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

// MARK: - 摇晃事件回调（摇晃需要self成为第一响应者，才能响应）

extension WYAWebView {
    public override func motionBegan(_ motion: UIEventSubtype, with event: UIEvent?) {
        print("开始摇晃")

        var params = [String: Any]()
        params.updateValue("1", forKey: "status")
        params.updateValue("调用成功", forKey: "msg")

        let inParams = [String: Any]()
        params.updateValue(inParams, forKey: "data")
        let string = webManager?.dicTosJsonString(params)

        getNativeActionResult("shake", string!)
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
            dictory = self.webManager?.jsonStringToDic(params as! String) as Any
            print(dictory)

            handler(dictory)
        }
    }

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


class WYAConenct: GCDWebServerConnection {
    override func rewriteRequest(_ url: URL, withMethod method: String, headers: [String : String]) -> URL {
        return super.rewriteRequest(url, withMethod: method, headers: headers)
    }

    override func preflightRequest(_ request: GCDWebServerRequest) -> GCDWebServerResponse? {
        return super.preflightRequest(request)
    }

    override func overrideResponse(_ response: GCDWebServerResponse, for request: GCDWebServerRequest) -> GCDWebServerResponse {
        return super.overrideResponse(response, for: request)
    }

    override func abortRequest(_ request: GCDWebServerRequest?, withStatusCode statusCode: Int) {
        return super.abortRequest(request, withStatusCode: statusCode)
    }
}
