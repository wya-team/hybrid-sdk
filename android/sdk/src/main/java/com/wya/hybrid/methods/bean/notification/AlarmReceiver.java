package com.wya.hybrid.methods.bean.notification;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.PowerManager;
import android.support.v4.app.NotificationCompat;

import com.wya.hybrid.R;
import com.wya.hybrid.methods.bean.openwin.OpenWinActivity;

import static android.content.Context.NOTIFICATION_SERVICE;
import static android.content.Context.POWER_SERVICE;

/**
 * @date: 2019/2/23 10:38
 * @author: Chunjiang Mao
 * @classname: AlarmReceiver
 * @describe:
 */
public class AlarmReceiver extends BroadcastReceiver {
	private int id;
	/**
	 * 标题，Android中默认值为应用名称，支持Android和iOS 8.2以上系统
	 */
	private String title;
	/**
	 * 内容，默认值为'有新消息'
	 */
	private String content;
	/**
	 * 是否覆盖更新已有的通知，取值范围true|false。只Android有效
	 */
	private boolean cover;

	private String sound;
	private long[] vibrate;
	private PowerManager mPowerManager;

	@Override
	public void onReceive(Context context, Intent intent) {
		Bundle bundle = intent.getExtras();
		id = bundle.getInt("id", 0);
		title = bundle.getString("title");
		content = bundle.getString("content");
		sound = bundle.getString("sound");
		cover = bundle.getBoolean("cover");
		vibrate = bundle.getLongArray("vibrate");
		NotificationManager notificationManager = (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
		NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(context);
		Intent mIntent = new Intent(context, OpenWinActivity.class);
		PendingIntent pendingIntent;
		if (cover) {
			pendingIntent = PendingIntent.getActivity(context, 0, mIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		} else {
			pendingIntent = PendingIntent.getActivity(context, 0, mIntent, PendingIntent.FLAG_CANCEL_CURRENT);
		}
		mBuilder.setContentTitle(title)
			// 设置内容
			.setContentText(content)
			.setTicker("悬浮通知")
			.setLargeIcon(BitmapFactory.decodeResource(context.getResources(), R.drawable.ic_launcher))
			// 设置小图标
			.setSmallIcon(R.drawable.ic_launcher)
			// 设置通知时间
			.setWhen(System.currentTimeMillis())
			.setTicker("我是测试内容")
			.setPriority(Notification.PRIORITY_MAX)
			.setContentIntent(pendingIntent)
			// 设置通知方式，声音，震动，呼吸灯等效果，这里通知方式为声音
			.setVibrate(vibrate);
		if (sound.equals("default")) {
			mBuilder.setDefaults(Notification.DEFAULT_SOUND);
		}
		// 发送通知请求
		notificationManager.notify(id, mBuilder.build());
		// 亮屏
		mPowerManager = (PowerManager) context.getSystemService(POWER_SERVICE);
		if (!mPowerManager.isScreenOn()) {
			@SuppressLint("InvalidWakeLockTag") PowerManager.WakeLock mWakeLock = mPowerManager.newWakeLock(PowerManager.SCREEN_BRIGHT_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, "tag");
			mWakeLock.acquire();
			mWakeLock.release();
		}
	}
}
