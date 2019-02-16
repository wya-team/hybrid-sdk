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
        var bgColor : String?
        var scrollToTop : Bool?
        var scrollEnabled : Bool?
        var vScrollBarEnabled : Bool?
        var hScrollBarEnabled : Bool?
        var scaleEnabled : Bool?
        var hideTopBar : Bool?
        var hideBottomBar : Bool?
        var slidBackEnabled : Bool?
        var slidBackType : String?
        var animation : Animation?
        var showProgress : Bool?
        var progress : Progress?
        var delay : Float?
        var reload : Bool?
        var allowEdit : Bool?
        var softInputMode : String?
        var softInputDismissMode : String?
        var softInputBarEnabled : Bool?
        var overScrollMode : String?
        var dragAndDrop : Bool?
        var hideHomeIndicator : Bool?
        var customRefreshHeader : String?
    }

    struct Animation : Codable {
        var type : String?
        var subType : String?
        var duration : Float?

    }

    struct Progress : Codable {
        var type : String?
        var title : String?
        var text : String?
        var color : String?
    }
}


