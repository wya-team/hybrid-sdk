package com.wya.hybrid.methods;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

import com.google.gson.Gson;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.methods.bean.notification.AlarmReceiver;
import com.wya.hybrid.methods.bean.notification.bean.NotificationData;
import com.wya.hybrid.methods.bean.notification.bean.NotificationEmit;
import com.wya.hybrid.methods.bean.notification.bean.NotificationsUtils;
import com.wya.hybrid.methods.bean.notification.bean.Notify;
import com.wya.uikit.dialog.WYACustomDialog;
import com.wya.utils.utils.ScreenUtil;

import static android.app.PendingIntent.FLAG_UPDATE_CURRENT;
import static android.content.Context.ALARM_SERVICE;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Notification extends HybridMethods {

    public Notification(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }


    /**
     * 取消通知
     *
     * @param id
     * @param data
     */
    public void cancelNotification( int id, String data) {
        Intent intent = new Intent(mContext, AlarmReceiver.class);
        PendingIntent pi = PendingIntent.getBroadcast(mContext, id, intent, FLAG_UPDATE_CURRENT);
        AlarmManager am = (AlarmManager) mContext.getSystemService(ALARM_SERVICE);
        am.cancel(pi);
        setData(1, "取消通知" + id + "成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 设置通知
     *
     * @param id
     * @param data
     */
    public void notification(int id, String data) {
        NotificationData mNotificationData = new Gson().fromJson(data, NotificationData.class);
        mNotificationData.setVibrate(new long[]{0, 1300, 800, 300});
        mNotificationData.setSound("default");
        mNotificationData.setLight(false);
        mNotificationData.setTimestamp(System.currentTimeMillis() + 10000);
        Notify notify = new Notify();
        notify.setTitle(id + "");
        notify.setContent(mNotificationData.getTimestamp() + "");
        notify.setCover(true);
        mNotificationData.setNotify(notify);
        if (!NotificationsUtils.isNotificationEnabled(mContext)) {
            WYACustomDialog notificationDialog = new WYACustomDialog.Builder(mContext)
                    .title("提示")
                    .message("检测到您没有打开通知权限，是否去打开")
                    .width(ScreenUtil.getScreenWidth(mContext) * 3 / 4)
                    .build();
            notificationDialog.setNoClickListener(new WYACustomDialog.NoClickListener() {
                @Override
                public void onNoClick() {
                    notificationDialog.dismiss();
                }
            });
            notificationDialog.setYesClickListener(new WYACustomDialog.YesClickListener() {
                @Override
                public void onYesClick() {
                    Intent localIntent = new Intent();
                    localIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    if (Build.VERSION.SDK_INT >= 9) {
                        localIntent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
                        localIntent.setData(Uri.fromParts("package", mContext.getPackageName(), null));
                    } else if (Build.VERSION.SDK_INT <= 8) {
                        localIntent.setAction(Intent.ACTION_VIEW);
                        localIntent.setClassName("com.android.settings", "com.android.settings.InstalledAppDetails");
                        localIntent.putExtra("com.android.settings.ApplicationPkgName", mContext.getPackageName());
                    }
                    mContext.startActivity(localIntent);
                }
            });
            notificationDialog.show();
        } else {
            //AlarmReceiver.class为广播接受者
            Intent intent = new Intent(mContext, AlarmReceiver.class);
            Bundle bundle = new Bundle();
            bundle.putInt("id", id);
            bundle.putString("title", mNotificationData.getNotify().getTitle());
            bundle.putString("content", mNotificationData.getNotify().getContent());
            bundle.putString("sound", mNotificationData.getSound());
            bundle.putBoolean("cover", mNotificationData.getNotify().isCover());
            bundle.putLongArray("vibrate", mNotificationData.getVibrate());
            intent.putExtras(bundle);
            PendingIntent pi = PendingIntent.getBroadcast(mContext, id, intent, FLAG_UPDATE_CURRENT);
            //得到AlarmManager实例
            AlarmManager alarmManager = (AlarmManager) mContext.getSystemService(ALARM_SERVICE);
            /**
             * 单次提醒
             * mCalendar.getTimeInMillis() 上面设置的15点21分0秒的时间点
             */
            alarmManager.set(AlarmManager.RTC_WAKEUP, mNotificationData.getTimestamp(), pi);
            NotificationEmit notificationEmit = new NotificationEmit();
            notificationEmit.setId(id);
            setData(1, "响应成功", notificationEmit);
            mWebView.send(id, getData());
        }
    }
}
