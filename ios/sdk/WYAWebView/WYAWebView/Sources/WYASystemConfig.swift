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
    //获取设备具体详细的型号
    var modelName: String {
        var systemInfo = utsname()
        uname(&systemInfo)
        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let identifier = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else { return identifier }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }

        switch identifier {
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
        default: return identifier
        }
    }

    var contentType: String {
        let reach = Reachability(hostName: "www.apple.com")
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
}

public struct frame {
    var left: Float
    var right: Float
    var top: Float
    var bottom: Float
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

    public let systemVersion = UIDevice.current.systemVersion //iOS版本

    public let deviceId = UIDevice.current.identifierForVendor //设备udid

    public var deviceToken: String? // deviceToken

    public let deviceModel = UIDevice.current.modelName //设备具体型号

    public let deviceName = UIDevice.current.systemName //设备名称

    public let uiMode = UIDevice.current.model //设备型号

    public lazy var operatorName: String = {
        var operatorName = String()
        let info = CTTelephonyNetworkInfo()
        if let carrier = info.subscriberCellularProvider {
            operatorName = carrier.carrierName!
        }
        return operatorName
    }() // 运营商名称

    public var connectionType = UIDevice.current.contentType //获取网络连接状态

    public var fullScreen: String?

    public let screenWidth = UIScreen.main.bounds.size.width * UIScreen.main.scale //像素尺寸宽度

    public let screenHeight = UIScreen.main.bounds.size.height * UIScreen.main.scale //像素尺寸高度

    public var winName: String? //当前window名称

    public let winWidth = UIScreen.main.bounds.size.width //物理尺寸宽度

    public let winHeight = UIScreen.main.bounds.size.height //物理尺寸高度

    public let frameName: String? = nil //  frame 名称, 若当前环境为 window 中，则该属性值为空字符串

    public let frameWidth: Float? = nil //frame 宽度，环境为window时，与winWidth 相同

    public let frameHeight: Float? = nil //frame 高度，环境为window时，与winHeight 相同

    public let safeArea = frame(left: 0, right: 0, top: 44, bottom: 34)

    public let pageParam: [String: String]? = nil //页面参数, 获取页面间传递的参数值，为 openWin()、openFrame() 等方法

    public var appParam: [String: String]? //当应用被第三方应用打开时，传递过来的参数

    public var statusBarAppearance = true //沉浸式

//    public lazy var debug : String = {
//        if
//    }()

    public var channel = "App Store" //APP来源

    public lazy var jailbreak: Bool = {
        var jailbroken = false

        jailbroken = checkSystemStatus.isJailBreak()

        return jailbroken
    }() //是否越狱

    let localizedModel = UIDevice.current.localizedModel //设备区域化型号如A1533

    /// 获取build版本号
    ///
    /// - Returns: 版本号
    func getBuildVersion() -> String {
        let infoDictionary = Bundle.main.infoDictionary!
        let minorVersion = infoDictionary["CFBundleVersion"] //版本号（内部标示）
        return minorVersion as! String
    }

    /*
    /// 识别网络
    ///
    /// - Returns: 网络字段
    func connectionType() -> String {
        var string = String()

        let reach = Reachability.init(hostName: "www.apple.com")
        let status = reach?.currentReachabilityStatus()
        switch status {
            case ReachableViaWiFi:
                string = "WIFI"
                break;
            case ReachableViaWWAN:
                string = netType()
                break;
            case NotReachable:
                string = "NOT"
                break;
            default:
                break;
        }
        return string
    }

    /// 识别数据网络类型
    ///
    /// - Returns: 网络类型字段
    func netType() -> String {
        let ct = CTTelephonyNetworkInfo()
        let aa = ct.currentRadioAccessTechnology
        var string = ""
        if aa == "CTRadioAccessTechnologyGPRS" {
            string = "GPRS"
        }else if aa == "CTRadioAccessTechnologyEdge" {
            string = "2.75G EDGE"
        }else if aa == "CTRadioAccessTechnologyWCDMA" {
            string = "3G"
        }else if aa == "CTRadioAccessTechnologyHSDPA" {
            string = "3.5G HSDPA"
        }else if aa == "CTRadioAccessTechnologyHSUPA" {
            string = "3.5G HSDPA"
        }else if aa == "CTRadioAccessTechnologyCDMA1x" {
            string = "2G"
        }else if aa == "CTRadioAccessTechnologyCDMAEVDORev0" {
            string = "3G"
        }else if aa == "CTRadioAccessTechnologyCDMAEVDORevB" {
            string = "3G"
        }else if aa == "CTRadioAccessTechnologyeHRPD" {
            string = "HRPD"
        }else if aa == "CTRadioAccessTechnologyLTE" {
            string = "4G"
        }
        return string

    }
    */
//    func startLocation() -> String {
//
//    }
}
