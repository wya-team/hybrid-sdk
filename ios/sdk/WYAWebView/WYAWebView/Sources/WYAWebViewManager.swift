//
//  WYAWebViewManager.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import UIKit

import Alamofire


protocol WebViewDelegate {
    func getNativeActionResult(obj:Any) -> Void
}

class WYAWebViewManager: NSObject {
    
    var nativeDelegate : WebViewDelegate?
    
    var config = SystemConfig()
    
    
    let netManager = NetworkReachabilityManager(host: "www.apple.com")
    
    
    
    func nativeAction(_ method:String, params:[String : String]) -> Void {
        /// 第一种方式
        let methodAndParams = method + "WithParams:"
        let sel = NSSelectorFromString(methodAndParams)
        
        /// 第二种方式
//        let sel : Selector = "aaaWithAsd:"
        self.performSelector(inBackground: sel, with: params)
        
        //执行原生过程
//        let string = system.connectionType()
        
        //返回原生方法执行结果
//        self.nativeDelegate?.getNativeActionResult(obj: string)
    }
    
    
}

extension WYAWebViewManager {
    /// 拆分url获取方法名形成字典
    ///
    /// - Parameter urlString: urlString
    /// - Returns: dic
    func cutString(urlString:String) -> NSMutableDictionary {
        print(urlString)
        let dic = NSMutableDictionary()
        if !urlString.contains("//") {
            return dic
        }
        let array = urlString.components(separatedBy: "//")
        dic.setValue(array.first ?? "不存在", forKey: "protocol")
        
        let lastString = array.last
        if !(lastString?.contains("?"))! {
            dic.setValue(lastString, forKey: "method")
            return dic
        }
        let methodArray = lastString?.components(separatedBy: "?")
        dic.setValue(methodArray?.first ?? "不存在", forKey: "method")
        
        let queryString = methodArray?.last
        if (queryString != nil) {
            let arra = queryString?.components(separatedBy: "=")
            
            dic.setValue(arra?.last, forKey: "id")
        }
        
        return dic
    }
    
    
    
    // MARK: 字典转字符串
    func dicTosJsonString(_ dic:[String : Any]) -> String{
        let data = try? JSONSerialization.data(withJSONObject: dic, options: [])
        let str = String(data: data!, encoding: String.Encoding.utf8)
        return str!
    }
    
    // MARK: 字符串转字典
    func jsonStringToDic(_ str: String) -> [String : Any]?{
        let data = str.data(using: String.Encoding.utf8)
        if let dict = try? JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? [String : Any] {
            return dict
        }
        return nil
    }
    
}

extension WYAWebViewManager {
    func registerSystemNotice(){
        
        weak var weak = self
        let note = NotificationCenter.default
        let device = UIDevice.current
        device.isBatteryMonitoringEnabled = true
        
        self.netManager?.listener = { status in
            print("网络状态: \(status)")
            //            self.netManager?.networkReachabilityStatus
            
            if (self.netManager?.isReachable)! {
                print("有网")
            }else{
                print("没网")
            }
        }
        self.netManager?.startListening()
        
        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryLevelDidChange, object: nil, queue: OperationQueue.main) { (not) in
            //电池电量变化调用这个
            print("电池电量变化")
            print(not.userInfo as Any)
            let params = NSMutableDictionary(capacity: 0)
            params.setValue("1", forKey: "status")
            params.setValue("调用成功", forKey: "msg")
            
            let subParams = NSMutableDictionary(capacity: 0)
            subParams.setValue(device.batteryLevel, forKey: "level")
            
            switch device.batteryState {
            case .unknown:
                subParams.setValue(false, forKey: "isPlugged")
                break
                
            case .unplugged:
                subParams.setValue(false, forKey: "isPlugged")
                break
                
            case .charging:
                subParams.setValue(true, forKey: "isPlugged")
                break
                
            case .full:
                subParams.setValue(false, forKey: "isPlugged")
                break
                
            }
            params.setValue(subParams, forKey: "data")
            
            //            let string = self.mutableDicToJSString(dic: params)
            
            //            self.nativeDelegate?.getNativeActionResult(obj: string)
        }
        
        note.addObserver(forName: NSNotification.Name.UIDeviceBatteryStateDidChange, object: nil, queue: OperationQueue.main) { (not) in
            //检测电池状态
            print("电池状态")
            print(not.userInfo as Any)
        }
        
        note.addObserver(forName: NSNotification.Name.UIApplicationDidEnterBackground, object: nil, queue: OperationQueue.main) { (not) in
            //进入后台
            print("后台")
        }
        
        note.addObserver(forName: NSNotification.Name.UIApplicationDidBecomeActive, object: nil, queue: OperationQueue.main) { (not) in
            //进入前台
            print("前台")
        }
        
        note.addObserver(forName: NSNotification.Name.UIApplicationWillResignActive, object: nil, queue: OperationQueue.main) { (not) in
            //进入休眠
            print("休眠")
        }
        
        note.addObserver(forName: NSNotification.Name.UIKeyboardWillShow, object: nil, queue: OperationQueue.main) { (not) in
            //键盘弹出
            print("键盘将要弹出")
        }
        
        note.addObserver(forName: NSNotification.Name.UIKeyboardDidShow, object: nil, queue: OperationQueue.main) { (not) in
            //键盘弹出
            print("键盘已经弹出")
        }
        
        note.addObserver(forName: NSNotification.Name.UIKeyboardWillHide, object: nil, queue: OperationQueue.main) { (not) in
            //键盘将要消失
            print("键盘消失")
        }
        
        note.addObserver(forName: NSNotification.Name.UIKeyboardDidHide, object: nil, queue: OperationQueue.main) { (not) in
            //键盘消失
            print("键盘消失")
        }
        
        note.addObserver(forName: NSNotification.Name.UIApplicationUserDidTakeScreenshot, object: nil, queue: OperationQueue.main) { (not) in
            //截屏
            print("截屏")
            print(not)
            
            UIGraphicsBeginImageContextWithOptions((UIApplication.shared.keyWindow?.frame.size)!, false, UIScreen.main.scale)
            UIApplication.shared.keyWindow?.layer.render(in: UIGraphicsGetCurrentContext()!)
            
            let image = UIGraphicsGetImageFromCurrentImageContext()
            UIGraphicsEndImageContext()
            
            print(image as Any)
        }
        
        
    }
}

extension WYAWebViewManager {
    func getNetWork(params:[String : String]) -> Void {
        //获取网络状态
        
        //回传信息
        self.nativeDelegate?.getNativeActionResult(obj: "sss")
    }
}
