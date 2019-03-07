//
//  WYANotifiModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import UserNotifications

// MARK: notification 模块
extension WYAWebViewManager{

    /// notification方法配置表
    func notificationDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(notificationWithParams(outParams:)), forKey: "add")

        params.updateValue(#selector(cancelNotificationWithParams(outParams:)), forKey: "remove")

        return params
    }

    @objc func notificationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionID = developParams["actionID"] as! String
        let model = getModel(outParams["params"] as! [String: Any]) as NotificationModel
        print(model as Any)

        if #available(iOS 10.0, *) {
            let content = UNMutableNotificationContent()
            content.title = model.notify?.title ?? ""
            content.subtitle = ""
            content.body = model.notify?.content ?? "有新消息"

            content.sound = UNNotificationSound.default()

            let date = Date(timeIntervalSince1970: model.timestamp!)
            let dateComponents = Calendar.current.dateComponents([.year, .month, .day, .hour, .minute, .second], from: date)

            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: false)
            //            let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 60, repeats: true)
            let request = UNNotificationRequest(identifier: actionID, content: content, trigger: trigger)

            // 4
            UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)

        } else {
            func addNotiction(date: Date) {
                let not = UILocalNotification()
                not.fireDate = date
                not.timeZone = TimeZone.autoupdatingCurrent
                if #available(iOS 8.2, *) {
                    not.alertTitle = model.notify?.title
                    not.repeatInterval = NSCalendar.Unit(rawValue: 1)
                } else {}
                not.alertBody = model.notify?.content
                not.userInfo = ["key": actionID]
                UIApplication.shared.scheduleLocalNotification(not)
            }

            let setDate = Date(timeIntervalSince1970: model.timestamp!)
            print(setDate as Any)

            let nowDate = Date()
            if setDate.compare(nowDate) == .orderedAscending {
                return
            }
            if setDate.compare(nowDate) == .orderedSame {
                addNotiction(date: setDate)
            }
            if setDate.compare(nowDate) == .orderedDescending {
                addNotiction(date: setDate)
            }
        }
        self.listenAction(actionID, ["status": 1, "msg": "调用成功", "data": ["id": actionID]])
    }

    @objc func cancelNotificationWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        let actionID = developParams["actionID"] as! String
        let param = outParams["params"] as! [String: Any]
        let id = param["id"] as! String
        if #available(iOS 10.0, *) {
            UNUserNotificationCenter.current().removeDeliveredNotifications(withIdentifiers: [id])
        } else {
            let arr = UIApplication.shared.scheduledLocalNotifications
            if (arr?.count)! > 0 {
                for item in arr! {
                    if (item.userInfo!["key"] as! String) == id {
                        UIApplication.shared.cancelLocalNotification(item)
                    }
                }
            }
        }
        self.listenAction(actionID, ["status": 1, "msg": "调用成功", "data": NSNull()])
    }


}
