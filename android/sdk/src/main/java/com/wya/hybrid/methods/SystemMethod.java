package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import android.telephony.SmsManager;
import android.util.Log;

import com.google.gson.Gson;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.ContactsBean;
import com.wya.hybrid.methods.bean.sms.Sms;

import java.util.ArrayList;
import java.util.List;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class SystemMethod extends HybridMethods {

    public SystemMethod(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 联系人
     *
     * @param data
     * @param id
     */
    public void openContacts( int id, String data) {

        ContactsBean contactsBean = new ContactsBean();
        List<ContactsBean.Contacts> list = new ArrayList<>();
        Cursor cursor = mContext.getContentResolver().query(ContactsContract.Contacts.CONTENT_URI, null, null, null, "display_name COLLATE LOCALIZED");
        while (cursor.moveToNext()) {
            String contactId = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts._ID));
            Cursor phones = mContext.getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactId, null, null);
            String displayName = cursor.getString(cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME));
            Log.i("test", "response: " + displayName);
            if (phones.moveToFirst()) {
                do {
                    String phonesNumber = phones.getString(phones.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                    ContactsBean.Contacts contacts = new ContactsBean.Contacts();
                    contacts.setName(displayName);
                    contacts.setPhone(phonesNumber);
                    list.add(contacts);
                    Log.i("test", "response: " + phonesNumber);
                } while (phones.moveToNext());
            }
        }

        contactsBean.setList(list);
        setData(1, "响应成功", contactsBean);
        mWebView.send(id, getData());
    }

    /**
     * 发送邮件
     *
     * @param id
     * @param data
     */
    public void mail( int id, String data) {
        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:"));
        intent.putExtra(Intent.EXTRA_SUBJECT, "");
        intent.putExtra(Intent.EXTRA_TEXT, "");
        mContext.startActivity(intent);
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 发送短信
     *
     * @param id
     * @param data
     */
    public void sms(int id, String data) {
        Sms sms = new Gson().fromJson(data, Sms.class);
        if (sms != null && sms.isSilent()) {
            // 后台直接发送
            for (int i = 0; i < sms.getNumbers().size(); i++) {
                // 获取短信管理器
                SmsManager smsManager = SmsManager.getDefault();
                // 拆分短信内容（手机短信长度限制）
                List<String> divideContents = smsManager.divideMessage(sms.getText());
                for (String text : divideContents) {
                    smsManager.sendTextMessage(sms.getNumbers().get(i), null, text, null, null);
                }
            }
        } else if (sms != null) {
            // 调用系统的短信发送页面
            sendSms(sms);
            setData(1, "响应成功", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 调起系统发短信功能,多机型通用，兼容VIVO
     *
     * @param sms
     */
    public void sendSms(Sms sms) {
        String phoneNumber = "";
        for (String response : sms.getNumbers()) {
            phoneNumber = phoneNumber + response + ";";
        }
        Intent smsIntent = new Intent(Intent.ACTION_VIEW);
        smsIntent.setData(Uri.parse("smsto:"));
        smsIntent.setType("vnd.android-dir/mms-sms");
        smsIntent.putExtra("address", phoneNumber);
        smsIntent.putExtra("sms_body", sms.getText());
        mContext.startActivity(smsIntent);
    }

}
