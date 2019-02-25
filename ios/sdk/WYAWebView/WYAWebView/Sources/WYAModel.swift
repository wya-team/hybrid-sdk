//
//  WYAModel.swift
//  WYAWebView
//
//  Created by 李世航 on 2019/2/1.
//

import Foundation

struct WYAModel : Codable {


}

struct OpenWinModel : Codable {
    var name : String?
    var title : String?
    var url : String?
    var pageParams : PageParamsModel?
    var vScrollBarEnabled : Bool?
    var hScrollBarEnabled : Bool?
    var scaleEnabled : Bool?
    var hideTopBar : Bool?
    var hideBottomBar : Bool?
    var animation : String?
    var replace : Bool?

    struct PageParamsModel : Codable {

    }
}

struct NotificationModel : Codable {
    var vibrate : [Int]?
    var sound : String?
    var light : Bool?
    var notify : NotifyModel?
    var timestamp : Double?

    // 解决key值与本地不匹配的情况
    enum enumCodeingKey : String, CodingKey {
        case a = "A"
    }
    struct NotifyModel : Codable {
        var title : String?
        var content : String?
        var extra : ExtraModel?
        var cover : Bool?
    }

    struct ExtraModel : Codable {
        var name : String?

    }
}

struct GetPictureModel : Codable {
    var sourceType : String?
    var encodingType : String?
    var mediaValue : String?
    var destinationType : String?
    var direction : Bool?
    var quality : Int?
    var videoQuality : String?
    var targetWidth : Double?
    var targetHeight : Double?
    var saveToPhotoAlbum : Bool?
    var groupName : String?
}
