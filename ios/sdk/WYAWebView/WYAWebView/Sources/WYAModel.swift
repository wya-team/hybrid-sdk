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
    var params : ParamsModel?
    var pageParams : PageParamsModel?

    struct ParamsModel : Codable {
        var name : String?
        var url : String?
        var data : String?
        var useWKWebView : Bool?
        var singleInstance : Bool?
        var historyGestureEnabled : Bool?
    }

    struct PageParamsModel : Codable {
        var bounces : Bool?

    }
}


