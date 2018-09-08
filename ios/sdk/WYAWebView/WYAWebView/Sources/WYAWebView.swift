//
//  WYAWebView.swift
//  SwiftDemo
//
//  Created by 李世航 on 2018/8/9.
//  Copyright © 2018年 WeiYiAn. All rights reserved.
//

import UIKit
import WebKit

import MJRefresh

/// 初始版本号
let jsBuildVersion = 0.1

public class WYAWebView: UIView {

    let webManager = WYAWebViewManager()
    var actionID: String?

    var webView: WKWebView?

    var userContentControll = WKUserContentController()
    let config = WKWebViewConfiguration()
    public var vc: UIViewController?

    /*
     
     var whiteList : NSMutableArray = {
     let array = NSMutableArray(capacity: 0)
     return array
     }()
     
    //MARK: 进度条
    var progressView : UIProgressView = {
        let progress = UIProgressView()
        progress.trackTintColor = UIColor(red: 240.0/255, green: 240.0/255, blue: 240.0/255, alpha: 1.0)
        progress.progressTintColor = .blue
        return progress
    }()
    
    /// 如果需要和web交互，先注册名字（先执行）
    var actionName : String?{
        didSet{
            userContentControll.add(self as WKScriptMessageHandler, name: actionName!)
        }
    }
    */

    /// 配置webview，注入js代码（先执行）
    public func configWebView() -> Void {


        self.loadJSFolder()

        config.userContentController = userContentControll
        self.webView = WKWebView(frame: self.bounds, configuration: config)
        self.webView!.uiDelegate = self as WKUIDelegate
        self.webView!.navigationDelegate = self as WKNavigationDelegate
        self.webView!.scrollView.delegate = self as UIScrollViewDelegate
        self.webView!.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        self.webView!.sizeToFit()
        self.webView!.scrollView.showsVerticalScrollIndicator = false
        self.webView!.scrollView.showsHorizontalScrollIndicator = false
        self.addSubview(self.webView!)
        //在调用相机显示的时候设置：isOpaque  scrollView.backgroundColor
        self.webView?.isOpaque = false
        self.webView?.scrollView.backgroundColor = UIColor.white.withAlphaComponent(0.0)
//        self.getNativeActionResult(obj: "_viewappear_")
        webManager.nativeDelegate = self as WebViewDelegate
        webManager.registerSystemNotice()

        let imageP = ImagePicker()
        let captureVideoPreviewLayer = imageP.previewLayer
        let layer = self.layer
        layer.masksToBounds = true
        captureVideoPreviewLayer.frame = self.frame
//        layer.addSublayer(captureVideoPreviewLayer)
        layer.insertSublayer(captureVideoPreviewLayer, below: self.webView?.layer)
        imageP.startRecordFunction()


    }



    override init(frame: CGRect) {
        super.init(frame: frame)

    }

    override public func layoutSubviews() {
        super.layoutSubviews()

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

    required public init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    override public func removeFromSuperview() {
        //暂时未知堆栈的调用过程
//        self.getNativeActionResult(obj: "_viewdisappear_")
    }

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */

}

//MARK: 负责处理文件之间的相互调用
extension WYAWebView {
    //MARK: 加载url
    func loadUrl(url: String) -> Void {
//        whiteList.add(url)
        let ul = URL(string: url)
        let request = URLRequest.init(url: ul!)
        self.webView!.load(request)
    }

    //MARK: 加载本地HTML
    public func loadLocalHtml(htmlName: String) -> Void {
        let string = Bundle.main.path(forResource: htmlName, ofType: "html")
        var path = String()
        do {
            path = try String(contentsOfFile: string!)
        }
        catch {
            print(error)
        }
        self.webView!.loadHTMLString(path, baseURL: Bundle.main.bundleURL)
    }

    /// 加载js文件夹
    func loadJSFolder() -> Void {
        let cachePath = NSSearchPathForDirectoriesInDomains(FileManager.SearchPathDirectory.cachesDirectory, FileManager.SearchPathDomainMask.userDomainMask, true).last! as String
        let path = cachePath + "/WYAWebViewJsFile"

        let manager = FileManager.default
        let exist = manager.fileExists(atPath: path)
        if !exist {
            do {
                try manager.createDirectory(atPath: path, withIntermediateDirectories: true, attributes: nil)
            } catch {
                //创建失败
                print(error)

            }

        }

        func checkJSVersion() -> Bool {
            /* 请求js版本接口
             * 判断版本号，下载到本地，文件目录路径在上面的path字段
             */

            let buildVersion = false

            //            if ... {
            //                ///如果大于就返回true
            //                return true
            //            }
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
                //加载文件夹内已有的js文件
            }
        } else {
            let jsNames = ["WYAJSBridge.umd"]

            for jsName in jsNames {
                let bund = Bundle(for: self.classForCoder)

                let jsString = bund.path(forResource: jsName, ofType: "js")
                var jsPath = String()
                do {
                    jsPath = try String(contentsOfFile: jsString!)
                }
                catch {
                    print(error);
                }

                let userScript = WKUserScript(source: jsPath, injectionTime: WKUserScriptInjectionTime.atDocumentStart, forMainFrameOnly: true)
                userContentControll.addUserScript(userScript)
            }
        }

    }
    
    override public func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == "estimatedProgress" {
//            self.progressView.alpha = 1
//            let animated = (self.webView?.estimatedProgress)! > Double(self.progressView.progress)
//            self.progressView.setProgress(Float((self.webView?.estimatedProgress)!), animated: animated)
//            if self.webView!.estimatedProgress >= 1.0 {
//                UIView.animate(withDuration: 0.3, delay: 0.3, options: .curveEaseOut, animations: {
//                    self.progressView.alpha = 0.0
//                }) { (finish) in
//                    self.progressView.setProgress(0.0, animated: false)
//                }
//            }
        }else {
            super.observeValue(forKeyPath: keyPath, of: object, change: change, context: context)
        }
    }
    
    public func shakeStateAction(shakeState: ShakeState) -> Void {
        //传递手机摇晃事件
        self.getNativeActionResult(obj: shakeState)
    }

    func getParams(_ id: String, handler: @escaping (Any) -> Void) {

        /** 获取参数 */
        let jsSrring = "JSBridge.getParam(\(id)"
        self.webView?.evaluateJavaScript(jsSrring) { (params, error) in
            print(params ?? "没有参数")
            print(error ?? "没有错误")

            var dictory: Any

            if params == nil {
                //没有参数
                dictory = [String: String]()
            } else {
                //有参数
                /** params参数为json字符串需要转化为字典
                 */
                dictory = self.webManager.jsonStringToMutableDic(jsonString: params as! String)
                print(dictory)
            }

            handler(dictory)
        }

    }
}

//MARK: 负责处理webview的代理方法
extension WYAWebView: WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {

    //MARK: WKScriptMessageHandler 回调方法(采用原生注入方法会回调)
    public func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        //addScriptMessageHandler 是注册JS的MessageHandler，但是WKWebView在多次调用loadRequest，会出现JS无法调用iOS端。我们需要在loadRequest和reloadWebView的时候需要重新注入。（在注入之前需要移除再注入，避免造成内存泄漏）
        //如果message.body中没有参数，JS代码中需要传null防止iOS端不会接收到JS的交互
        //window.webkit.messageHandlers.<事件名>.postMessage(需要传递的数据)

    }

    //MARK: WKUIDelegate
    /*
     public func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
     //ios8
     }
     */
    public func webViewDidClose(_ webView: WKWebView) {
        //ios9
        //窗口关闭时调用
    }

    public func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Swift.Void) {
        //ios8
        //在JS端调用alert函数时，会触发此代理方法。JS端调用alert时所传的数据可以通过message拿到。在原生得到结果后，需要回调JS，是通过completionHandler回调
        print("alert" + message)
        completionHandler()
    }

    public func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Swift.Void) {
        //js调用原生的方法
        //ios8
        //JS端调用confirm函数时，会触发此方法，通过message可以拿到JS端所传的数据，在iOS端显示原生alert得到YES/NO后，通过completionHandler回调给JS端

    }

    public func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (String?) -> Swift.Void) {
        //ios8
        //JS端调用prompt函数时，会触发此方法,要求输入一段文本,在原生输入得到文本内容后，通过completionHandler回调给JS
    }
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


    //MARK: WKNavigationDelegate
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Swift.Void) {
        //ios8
        //判断链接是否允许跳转
        let url = navigationAction.request.url?.absoluteString.removingPercentEncoding

        if (url?.hasPrefix("command://"))! {

            /** 分解url，返回字典，字典中包含（协议名，方法名，ID）
             * key: protocol 协议名
             * key: method   方法名
             * key: id       id
             */

            let dic = self.webManager.cutString(urlString: url!)

            self.actionID = (dic["id"] as! String)
            guard (self.actionID != nil) else { return }

            let arrContain = dic.allKeys.contains { (string) -> Bool in
                if (string as! String) == "method" {
                    return true
                } else {
                    return false
                }
            }

            if arrContain {
                self.getParams(self.actionID!) { (params) in
                    //获取到参数执行调用原生
                    self.webManager.nativeAction(dic["method"] as! String, params: params as! [String: String])
                }
            } else {
                //不需要参数执行原生
            }

        }
        decisionHandler(.allow)

    }

    public func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse, decisionHandler: @escaping (WKNavigationResponsePolicy) -> Swift.Void) {
        //ios8
        //拿到响应后决定是否允许跳转

        decisionHandler(WKNavigationResponsePolicy.allow)
    }


    public func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        //ios8
        //链接开始加载时调用
//        self.progressView.isHidden = false
    }


    public func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {
        //ios8
        //收到服务器重定向时调用
    }

    public func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        //ios8
        //加载错误时调用
        print("加载失败" + error.localizedDescription)
    }

    public func webView(_ webView: WKWebView, didCommit navigation: WKNavigation!) {
        //ios8
        //当内容开始到达主帧时被调用（即将完成）
    }


    public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        //ios8
        //加载完成


        let dic = NSMutableDictionary()
        dic.setValue("0.1.0", forKey: "version")
        dic.setValue("wya", forKey: "user")

        let jsParams = self.webManager.mutableDicToJSString(dic: dic)


        let jsString = "JSBridge.emit('_init_', {\(jsParams)})"
        webView.evaluateJavaScript(jsString) { (result, error) in
            print(result ?? "没有数据")
            print(error ?? "没有错误")
        }

    }

    public func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        //ios8
        //在提交的主帧中发生错误时调用
        print("主帧错误" + error.localizedDescription)
    }


    public func webView(_ webView: WKWebView, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Swift.Void) {
        //ios8
        //当webView需要响应身份验证时调用(如需验证服务器证书)
    }


    public func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        //ios9
        //当webView的web内容进程被终止时调用。(iOS 9.0之后)
        print("终止")
    }
}

//MARK: 负责处理scrollView的代理
extension WYAWebView: UIScrollViewDelegate {
    //MARK: UIScrollViewDelegate
    public func scrollViewDidScroll(_ scrollView: UIScrollView) {

    }
}

//MARK:  负责和webviewManager的代理
extension WYAWebView: WebViewDelegate {
    func getNativeActionResult(obj: Any) {
        //获取到方法执行结果
        /** 提交结果
         * 必须使用NSMutableDictionary初始化字典
         */
        let result = NSMutableDictionary()
        result.setValue(" ", forKey: "status")

        let resultString = self.webManager.mutableDicToJSString(dic: result)
        let jsString = "JSBridge.emit(\(self.actionID!), \(resultString))"

        self.webView?.evaluateJavaScript(jsString, completionHandler: { (result, error) in
            print(result ?? "没有结果")
            print(error ?? "没有错误")
        })
    }
}

//MARK: 摇晃状态
public enum ShakeState {
    case shakeStart
    case shakeEnd
    case shakeCancel
}
