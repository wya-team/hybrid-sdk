//
//  SystemConfig.swift
//  Alamofire
//
//  Created by 李世航 on 2018/8/15.
//

import CoreLocation
import CoreTelephony
import UIKit

extension UIDevice {
    // 获取设备具体详细的型号
    var phoneModel: String {
        var systemInfo = utsname()
        uname(&systemInfo)
        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let identifier = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else { return identifier }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }
        return identifier
    }

    var modelName: String {
        switch self.phoneModel {
        case "iPod5,1": return "iPod Touch 5"
        case "iPod7,1": return "iPod Touch 6"
        case "iPhone3,1", "iPhone3,2", "iPhone3,3": return "iPhone 4"
        case "iPhone4,1": return "iPhone 4s"
        case "iPhone5,1", "iPhone5,2": return "iPhone 5"
        case "iPhone5,3", "iPhone5,4": return "iPhone 5c"
        case "iPhone6,1", "iPhone6,2": return "iPhone 5s"
        case "iPhone7,2": return "iPhone 6"
        case "iPhone7,1": return "iPhone 6 Plus"
        case "iPhone8,1": return "iPhone 6s"
        case "iPhone8,2": return "iPhone 6s Plus"
        case "iPhone9,1": return "iPhone 7 (CDMA)"
        case "iPhone9,3": return "iPhone 7 (GSM)"
        case "iPhone9,2": return "iPhone 7 Plus (CDMA)"
        case "iPhone9,4": return "iPhone 7 Plus (GSM)"

        case "iPad2,1", "iPad2,2", "iPad2,3", "iPad2,4": return "iPad 2"
        case "iPad3,1", "iPad3,2", "iPad3,3": return "iPad 3"
        case "iPad3,4", "iPad3,5", "iPad3,6": return "iPad 4"
        case "iPad4,1", "iPad4,2", "iPad4,3": return "iPad Air"
        case "iPad5,3", "iPad5,4": return "iPad Air 2"
        case "iPad2,5", "iPad2,6", "iPad2,7": return "iPad Mini"
        case "iPad4,4", "iPad4,5", "iPad4,6": return "iPad Mini 2"
        case "iPad4,7", "iPad4,8", "iPad4,9": return "iPad Mini 3"
        case "iPad5,1", "iPad5,2": return "iPad Mini 4"
        case "iPad6,7", "iPad6,8": return "iPad Pro"
        case "AppleTV5,3": return "Apple TV"
        case "i386", "x86_64": return "Simulator"
        default: return self.phoneModel
        }
    }

    var contentType: String {
        let reach = WYAHybridReachability(hostName: "www.apple.com")
        let status = reach?.currentReachabilityStatus()
        switch status {
        case ReachableViaWiFi: return "WIFI"
        case ReachableViaWWAN:
            do {
                let ct = CTTelephonyNetworkInfo()
                let wwan = ct.currentRadioAccessTechnology
                switch wwan {
                case "CTRadioAccessTechnologyGPRS": return "GPRS"
                case "CTRadioAccessTechnologyEdge": return "2.75G EDGE"
                case "CTRadioAccessTechnologyWCDMA": return "3G"
                case "CTRadioAccessTechnologyHSDPA": return "3.5G HSDPA"
                case "CTRadioAccessTechnologyHSUPA": return "3.5G HSDPA"
                case "CTRadioAccessTechnologyCDMA1x": return "2G"
                case "CTRadioAccessTechnologyCDMAEVDORev0": return "3G"
                case "CTRadioAccessTechnologyCDMAEVDORevB": return "3G"
                case "CTRadioAccessTechnologyeHRPD": return "HRPD"
                case "CTRadioAccessTechnologyLTE": return "4G"
                default: return ""
                }
            }
        case NotReachable: return "NONE"
        default: return ""
        }
    }

    func newOrientation(_ orientation: UIInterfaceOrientation) {
        DispatchQueue.main.async {
            UIDevice.current.setValue(NSNumber(integerLiteral: UIInterfaceOrientation.unknown.rawValue), forKey: "orientation")
            UIDevice.current.setValue(NSNumber(integerLiteral: orientation.rawValue), forKey: "orientation")

            switch orientation {
            case UIInterfaceOrientation.portrait:
                UIApplication.shared.setStatusBarOrientation(UIInterfaceOrientation.portraitUpsideDown, animated: true)
                break
            case UIInterfaceOrientation.portraitUpsideDown:
                UIApplication.shared.setStatusBarOrientation(UIInterfaceOrientation.portrait, animated: true)
                break
            case UIInterfaceOrientation.landscapeLeft:
                UIApplication.shared.setStatusBarOrientation(UIInterfaceOrientation.landscapeRight, animated: true)
                break
            case UIInterfaceOrientation.landscapeRight:
                UIApplication.shared.setStatusBarOrientation(UIInterfaceOrientation.landscapeLeft, animated: true)
                break
            default:
                break
            }
        }
    }
}

public struct safeFrame {
    var left: Float
    var right: Float
    var top: Float
    var bottom: Float
}

struct Platform {
    static let isSimulator: Bool = {
        var isSim = false
        #if arch(i386) || arch(x86_64)
        isSim = true
        #endif
        return isSim
    }()
}

public class SystemConfig: NSObject {
    public var version = "1.0.0"

    /// bundleID
    public lazy var appId: String = {
        let infoDictionary = Bundle.main.infoDictionary!
        let appid = infoDictionary["CFBundleIdentifier"]
        return appid as! String
    }()

    /// APP名称
    public lazy var appName: Any = {
        let infoDictionary = Bundle.main.infoDictionary!
        let appname = infoDictionary["CFBundleName"]
        return appname ?? ""
    }()

    /// 获取开发版本号
    public lazy var appVersion: String = {
        let infoDictionary = Bundle.main.infoDictionary!
        let majorVersion = infoDictionary["CFBundleShortVersionString"]
        return majorVersion as! String
    }()

    public let systemType = "iOS"

    public let systemVersion = UIDevice.current.systemVersion // iOS版本

    public let deviceId = UIDevice.current.identifierForVendor?.uuidString // 设备udid

    public var deviceToken = UserDefaults.standard.object(forKey: "DEVICE_TOKEN") ?? "" // deviceToken

    public let deviceModel = UIDevice.current.phoneModel // 设备具体型号

    public let deviceName = UIDevice.current.name // 设备名称

    public let uiMode = UIDevice.current.model // 设备型号

    public lazy var operatorName: String = {
        var operatorName = String()
        let info = CTTelephonyNetworkInfo()
        if Platform.isSimulator {
            return ""
        } else {
            if let carrier = info.subscriberCellularProvider {
                operatorName = carrier.carrierName!
            }
            return operatorName
        }

    }() // 运营商名称

    public var connectionType = UIDevice.current.contentType // 获取网络连接状态

    public var fullScreen: Bool?

    public let screenWidth = UIScreen.main.bounds.size.width // 像素尺寸宽度

    public let screenHeight = UIScreen.main.bounds.size.height // 像素尺寸高度

    public var winName: String? // 当前window名称

    public let winWidth = UIScreen.main.bounds.size.width // 物理尺寸宽度

    public let winHeight = UIScreen.main.bounds.size.height // 物理尺寸高度

    public let frameName: String? = nil //  frame 名称, 若当前环境为 window 中，则该属性值为空字符串

    public let frameWidth: Float? = nil // frame 宽度，环境为window时，与winWidth 相同

    public let frameHeight: Float? = nil // frame 高度，环境为window时，与winHeight 相同

    public var safeArea = safeFrame(left: 0, right: 0, top: 0, bottom: 0)

    public let pageParam: [String: String]? = nil // 页面参数, 获取页面间传递的参数值，为 openWin()、openFrame() 等方法

    public var appParam: [String: String] = {
        let appP = UserDefaults.standard.object(forKey: "appParam")
        guard appP != nil else { return [String: String]() }
        // FIXME: 第三方调起传递参数需要按照一定的传参规则解析成字典
        let dic = [String: String]()
        return dic
    }() // 当应用被第三方应用打开时，传递过来的参数

    public var statusBarAppearance = true // 沉浸式

    public lazy var debug: Bool = {
        var debug = true
        #if DEBUG
        debug = true
        #else
        debug = false
        #endif
        return debug
    }()

    public var channel = "App Store" // APP来源

    public lazy var jailbreak: Bool = {
        var jailbroken = false

        jailbroken = WYACheckSystemStatus.isJailBreak()

        return jailbroken
    }() // 是否越狱
    let localizedModel = UIDevice.current.localizedModel // 设备区域化型号如A1533

    func getSystemConfigDic() -> [String: Any] {
        var params = [String: Any]()
        params.updateValue(self.version, forKey: "version")
        params.updateValue(self.appId, forKey: "appId")
        params.updateValue(self.appName, forKey: "appName")
        params.updateValue(self.systemType, forKey: "systemType")
        params.updateValue(self.systemVersion, forKey: "systemVersion")
        params.updateValue(self.deviceId ?? "", forKey: "deviceId")
        params.updateValue(self.deviceToken, forKey: "deviceToken")
        params.updateValue(self.deviceModel, forKey: "deviceModel")
        params.updateValue(self.deviceName, forKey: "deviceName")
        params.updateValue(self.uiMode, forKey: "uiMode")
        params.updateValue(self.operatorName, forKey: "operatorName")
        params.updateValue(self.connectionType, forKey: "connectionType")
        params.updateValue(self.fullScreen ?? false, forKey: "fullScreen")
        params.updateValue(self.screenWidth, forKey: "screenWidth")
        params.updateValue(self.screenHeight, forKey: "screenHeight")
        params.updateValue(self.winName ?? "", forKey: "winName")
        params.updateValue(self.winWidth, forKey: "winWidth")
        params.updateValue(self.winHeight, forKey: "winHeight")
        params.updateValue(self.frameName ?? "", forKey: "frameName")
        params.updateValue(self.frameWidth ?? 0, forKey: "frameWidth")
        params.updateValue(self.frameHeight ?? 0, forKey: "frameHeight")

        var safe = [String: Float]()
        safe.updateValue(self.safeArea.left, forKey: "left")
        safe.updateValue(self.safeArea.right, forKey: "right")
        safe.updateValue(self.safeArea.top, forKey: "top")
        safe.updateValue(self.safeArea.bottom, forKey: "bottom")

        params.updateValue(safe, forKey: "safeArea")
        params.updateValue(self.pageParam ?? [String: String](), forKey: "pageParam")
        //        params.updateValue(self.webManager.config.wgtParam, forKey: "wgtParam")
        params.updateValue(self.appParam, forKey: "appParam")
        params.updateValue(self.statusBarAppearance, forKey: "statusBarAppearance")
        //        params.updateValue(self.webManager.config.wgtRootDir, forKey: "wgtRootDir")
        //        params.updateValue(self.webManager.config.fsDir, forKey: "fsDir")
        //        params.updateValue(self.webManager.config.cacheDir, forKey: "cacheDir")
        params.updateValue(self.debug, forKey: "debug")
        params.updateValue(self.channel, forKey: "channel")
        params.updateValue(self.jailbreak, forKey: "jailbreak")

        return params
    }

    /// 获取build版本号
    ///
    /// - Returns: 版本号
    func getBuildVersion() -> String {
        let infoDictionary = Bundle.main.infoDictionary!
        let minorVersion = infoDictionary["CFBundleVersion"] // 版本号（内部标示）
        return minorVersion as! String
    }
}
