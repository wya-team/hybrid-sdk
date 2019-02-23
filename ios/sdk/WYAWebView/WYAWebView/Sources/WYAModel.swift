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

    struct PageParamsModel : Codable {

        var vScrollBarEnabled : Bool?
        var hScrollBarEnabled : Bool?
        var scaleEnabled : Bool?
        var hideTopBar : Bool?
        var hideBottomBar : Bool?
        var animation : String?
        var replace : Bool?

    }
}

struct NotificationModel : Codable {
    var vibrate : String?
    var sound : String?
    var light : Bool?
    var notify : NotifyModel?
    var timestamp : Double?

    struct NotifyModel : Codable {
        var title : String?
        var content : String?
        var extra : String?
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
