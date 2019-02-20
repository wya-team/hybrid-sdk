//
//  WYAContacts.swift
//  AFNetworking
//
//  Created by 李俊恒 on 2019/2/19.
//

import AddressBook
import Contacts

struct MySnail {

    // 字典或者数组 转 JSON
    static func dataTypeTurnJson(element:AnyObject) -> String {

        let jsonData = try! JSONSerialization.data(withJSONObject: element, options: JSONSerialization.WritingOptions.prettyPrinted)
        let str = String(data: jsonData, encoding: String.Encoding.utf8)!
        return str
    }
}

class WYAContacts: NSObject {

    var jsonString = ""

    var array = Array<Any>()


    private lazy var myAddressBook: ABAddressBook = {
        var error:Unmanaged<CFError>?
        let ab: ABAddressBook = ABAddressBookCreateWithOptions(nil, nil).takeRetainedValue()
        return ab
        }()

    @available(iOS 9.0, *)
    lazy var myContactStore : CNContactStore = {
        let cn: CNContactStore = CNContactStore()
        return cn
    }()

    @objc func getConTacts() -> String{
        if #available(iOS 9.0, *){
            chechkContactStoreAuth()

        }else{
            checkAddressBookAuth()
        }
        return jsonString
    }
}

// MARK: iOS 9.0之前
extension WYAContacts{

    func checkAddressBookAuth(){
        switch ABAddressBookGetAuthorizationStatus() {
        case .notDetermined:
            print("未授权")
            requestAddressBookAuthorization(myAddressBook)
        case .authorized:
            print("已授权")
            readContactsFromAddressBook(myAddressBook)
        case .denied, .restricted:
            print("无权限")
            // 可以选择弹窗到系统设置中去开启
        }
    }


    func requestAddressBookAuthorization(_ addressBook:ABAddressBook){
        ABAddressBookRequestAccessWithCompletion(addressBook, {[weak self] (granted, error) in
            if granted {
                print("已授权")
               self?.readContactsFromAddressBook(addressBook)
            }
        })
    }


    func readContactsFromAddressBook(_ addressBook:ABAddressBook){
        guard ABAddressBookGetAuthorizationStatus() == .authorized else {
            return
        }

        var array: Array<Dictionary<String, String>>?

        let allContacts = ABAddressBookCopyArrayOfAllPeople(addressBook).takeRetainedValue() as Array
        for record in allContacts {
            let currentContact: ABRecord = record
            let name = ABRecordCopyCompositeName(currentContact).takeRetainedValue() as String
            print(name)

            let currentContactPhones: ABMultiValue = ABRecordCopyValue(currentContact, kABPersonPhoneProperty).takeRetainedValue() as ABMultiValue
            for i in 0..<ABMultiValueGetCount(currentContactPhones){
                let phoneNumber = ABMultiValueCopyValueAtIndex(currentContactPhones, i).takeRetainedValue() as! String
                let dict = [phoneNumber:name]
                array?.append(dict)
                print(phoneNumber)
            }
        }
        let mySort = WYASortAddressBook()
        jsonString = MySnail.dataTypeTurnJson(element: mySort.wya_dealData(with: self.array) as AnyObject)

    }

}

// MARK: iOS 9.0之后
extension WYAContacts{

    @available(iOS 9.0, *)
    func chechkContactStoreAuth(){
        switch CNContactStore.authorizationStatus(for: .contacts) {
        case .notDetermined:
            print("未授权")
            requestContactStoreAuthorization(myContactStore)
        case .authorized:
            print("已授权")
            readContactsFromContactStore(myContactStore)
        case .denied, .restricted:
            print("无权限")
        }
    }

    @available(iOS 9.0, *)
    func requestContactStoreAuthorization(_ contactStore:CNContactStore) {
        contactStore.requestAccess(for: .contacts, completionHandler: {[weak self] (granted, error) in
            if granted {
                print("已授权")
                self?.readContactsFromContactStore(contactStore)
            }
        })
    }

    @available(iOS 9.0, *)
    func readContactsFromContactStore(_ contactStore:CNContactStore) {
        guard CNContactStore.authorizationStatus(for: .contacts) == .authorized else {
            return
        }

        let keys = [CNContactFamilyNameKey,CNContactGivenNameKey,CNContactPhoneNumbersKey]

        let fetch = CNContactFetchRequest(keysToFetch: keys as [CNKeyDescriptor])
        do {
            try contactStore.enumerateContacts(with: fetch, usingBlock: { (contact, stop) in
                //姓名
                let name = "\(contact.familyName)\(contact.givenName)"
                print(name)
                //电话
                for labeledValue in contact.phoneNumbers {
                    let phoneNumber = (labeledValue.value as CNPhoneNumber).stringValue
                     let dict = [phoneNumber:name]
                    self.array.append(dict)
                    print(phoneNumber)
                }
            })
        } catch let error as NSError {
            print(error)
        }
        let mySort = WYASortAddressBook()
        jsonString = MySnail.dataTypeTurnJson(element: mySort.wya_dealData(with:self.array) as AnyObject)
    }

}



