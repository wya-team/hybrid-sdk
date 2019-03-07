//
//  WYASystemModule.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/3/6.
//

import Foundation
import ContactsUI
import MessageUI
// MARK: system 系统模块
extension WYAWebViewManager: MFMessageComposeViewControllerDelegate, MFMailComposeViewControllerDelegate {
    /// system方法配置表
    func systemDictionary() -> [String:Selector] {

        var params = [String:Selector]()

        params.updateValue(#selector(smsWithParams(outParams:)), forKey: "sms")

        params.updateValue(#selector(mailWithParams(outParams:)), forKey: "mail")

        params.updateValue(#selector(callWithParams(outParams:)), forKey: "call")

        params.updateValue(#selector(openContactsWithParams(outParams:)), forKey: "contacts")

        params.updateValue(#selector(getBatteryWithParams(outParams:)), forKey: "getBattery")
        params.updateValue(#selector(getNetworkWithParams(outParams:)), forKey: "getNetwork")

        return params
    }

    @objc func getBatteryWithParams(outParams: [String: Any]) {}
    @objc func getNetworkWithParams(outParams: [String: Any]) {}



    // MARK: MFMessageComposeViewControllerDelegate

    func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
        controller.dismiss(animated: true, completion: nil)
        var msg = ""
        switch result {
        case .sent:
            print("短信发送成功")
            msg = "发送成功"
        case .cancelled:
            print("短信取消发送")
            msg = "取消发送"
        case .failed:
            print("短信发送失败")
            msg = "发送失败"
        }
        self.listenAction(self.smsID!, ["status": 1, "msg": msg, "data": NSNull()])
    }
    
    /// 调用系统短信界面发送短信，或者后台直接发送短信
    ///
    /// - Parameter outParams: 需要的参数
    @objc func smsWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        smsID = developParams["actionID"] as? String
        guard MFMessageComposeViewController.canSendText() else {
            print("该设备不能发送短信")
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败", "data": NSNull()])
            return
        }

        let rootVC = developParams["rootVC"] as! UIViewController

        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let body = params["text"] as! String
        let phoneNumbers = params["numbers"] as! Array<String>
        // 发送短信的Controller
        let messageController = MFMessageComposeViewController()
        // 设置短信内容
        messageController.body = body
        // 设置收件人列表
        messageController.recipients = phoneNumbers
        // 设置代理
        messageController.messageComposeDelegate = self
        // 打开界面
        rootVC.present(messageController, animated: true, completion: nil)
    }

    // MARK: MFMailComposeViewControllerDelegate

    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        controller.dismiss(animated: true, completion: nil)
        var msg = ""
        switch result {
        case .cancelled:
            print("取消发送")
            UIView.wya_showCenterToast(withMessage: "取消发送")
            msg = "取消发送"
        case .saved:
            print("保存成功")
            UIView.wya_showCenterToast(withMessage: "保存成功")
            msg = "保存成功"
        case .sent:
            print("发送成功")
            UIView.wya_showCenterToast(withMessage: "发送成功")
            msg = "发送成功"
        case .failed:
            print("发送失败")
            UIView.wya_showCenterToast(withMessage: "发送失败")
            msg = "发送失败"
        }
        self.listenAction(self.mailID!, ["status": 1, "msg": msg, "data": NSNull()])
    }

    /// 发送邮件
    ///
    /// - Parameter outParams: 邮件收件人以及发送内容
    @objc func mailWithParams(outParams: [String: Any]) {
        let developParams = outParams["DevelopParams"] as! [String: Any]
        mailID = developParams["actionID"] as? String
        guard MFMailComposeViewController.canSendMail() else {
            print("无法发送邮件")
            self.listenAction(developParams["actionID"] as! String, ["status": 0, "msg": "调用失败", "data": NSNull()])
            return
        }

        let rootVC = developParams["rootVC"] as! UIViewController
        let emailVC = MFMailComposeViewController()
        let params = outParams["params"] as! [String: Any]
        guard params.count != 0 else {
            self.listenAction(developParams["actionID"] as! String, self.callBackJsonData(0, "缺少参数"))
            return
        }
        let recipients = params["recipients"] as! Array<String>
        let subject = params["subject"] as! String
        let body = params["body"] as! String
        emailVC.mailComposeDelegate = self
        emailVC.setSubject(subject)
        emailVC.setToRecipients(recipients)
        emailVC.setMessageBody(body, isHTML: false)
        rootVC.present(emailVC, animated: true, completion: nil)
    }

    /// 打电话
    ///
    /// - Parameter outParams: 打电话的参数
    @objc func callWithParams(outParams: [String: Any]) {
        DispatchQueue.main.async {
            UIApplication.shared.openURL(URL(string: "telprompt://" + "10086")!)
        }
    }

    /// 在应用内打开系统通讯录界面选择联系人
    ///
    /// - Parameter outParams: 通讯录所需的参数
    @objc func openContactsWithParams(outParams: [String: Any]) {
        let developeParams = outParams["DevelopParams"] as! [String: Any]
        //        let rootVC = developeParams["rootVC"] as! UIViewController
        //        //联系人选择控制器
        //        guard #available(iOS 9.0, *) else{
        //            return
        //        }
        //        let contactPicker = CNContactPickerViewController()
        //        //设置代理
        //        contactPicker.delegate = self
        //
        //        //弹出控制器
        //        rootVC.present(contactPicker, animated: true, completion: nil)

        let manager = WYAContacts()
        let list = manager.getConTacts()
        print(list)
        self.listenAction(developeParams["actionID"] as! String, ["status": 1, "msg": "调用成功", "data": list])
        //        UIView.wya_showCenterToast(withMessage: "获取联系人成功")
    }

    // 多选联系人
    //    @available(iOS 9.0, *)
    //    func contactPicker(_ picker: CNContactPickerViewController, didSelect contacts: [CNContact]) {
    //        print("一共选择了\(contacts.count)个联系人。")
    //        for contact in contacts {
    //            print("--------------")
    //            //获取联系人的姓名
    //            let lastName = contact.familyName
    //            let firstName = contact.givenName
    //            print("选中人的姓：\(lastName)")
    //            print("选中人的名：\(firstName)")
    //
    //            //获取联系人电话号码
    //            print("选中人电话：")
    //            let phones = contact.phoneNumbers
    //            for phone in phones {
    //                //获得标签名（转为能看得懂的本地标签名，比如work、home）
    //                let phoneLabel = CNLabeledValue<NSString>.localizedString(forLabel: phone.label!)
    //                //获取号码
    //                let phoneValue = phone.value.stringValue
    //                print("\(phoneLabel):\(phoneValue)")
    //            }
    //        }
    //    }

}
