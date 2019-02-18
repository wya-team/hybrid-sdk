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

    }

}

