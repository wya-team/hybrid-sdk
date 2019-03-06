package com.wya.hybrid.methods.bean.notification;

import android.app.KeyguardManager;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.IBinder;
import android.os.PowerManager;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.wya.hybrid.R;
import com.wya.hybrid.methods.bean.notification.bean.NotificationData;
import com.wya.hybrid.methods.bean.openwin.OpenWinActivity;
import com.wya.utils.utils.LogUtil;

import java.util.Timer;
import java.util.TimerTask;

/**
 * @date: 2019/2/21 15:04
 * @author: Chunjiang Mao
 * @classname: AlarmService
 * @describe:
 */
public class AlarmService extends Service {

	private NotificationData mNotificationData;

	static Timer mTimer = null;

	static TimerTask mTimerTask = null;

	/**
	 * 清除通知
	 *
	 * @param context
	 */
	public static void cleanAllNotification(Context context, long id) {
		if(id == -1){
			NotificationManager mn = (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
			mn.cancelAll();
		} else {
			stopTimer();
		}
	}

	/**
	 * 添加通知
	 *
	 * @param context
	 * @param notificationData
	 */
	public static void addNotification(Context context, NotificationData notificationData, int id) {
		Intent intent = new Intent(context, AlarmService.class);
		intent.putExtra("notificationData", notificationData);
		intent.putExtra("id", id);
		context.startService(intent);
	}

	@Override
	public void onCreate() {
		Log.e("addNotification", "===========create=======");
	}

	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}

	/**
	 * @param intent
	 * @param flags
	 * @param startId
	 * @return
	 */
	@Override
	public int onStartCommand(final Intent intent, int flags, int startId) {






		mNotificationData = (NotificationData) intent.getSerializableExtra("notificationData");
		int id = intent.getIntExtra("id", 0);
		if (null == mTimer) {
			mTimer = new Timer();
		}
		LogUtil.e(mNotificationData.getTimestamp() + "--------id2--------");
		LogUtil.e(System.currentTimeMillis() + "--------id2--------");
		if(mTimerTask == null){
			mTimerTask = new TimerTask() {
				@Override
				public void run() {
					NotificationManager notificationManager = (NotificationManager) AlarmService.this.getSystemService(NOTIFICATION_SERVICE);
					NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(AlarmService.this);
					Intent intent = new Intent(AlarmService.this, OpenWinActivity.class);
					PendingIntent pendingIntent;
					if (mNotificationData.getNotify().isCover()) {
						pendingIntent = PendingIntent.getActivity(AlarmService.this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
					} else {
						pendingIntent = PendingIntent.getActivity(AlarmService.this, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);
					}
					mBuilder.setContentTitle(mNotificationData.getNotify().getTitle())
						// 设置内容
						.setContentText(mNotificationData.getNotify().getContent())
						.setTicker("悬浮通知")
						.setLargeIcon(BitmapFactory.decodeResource(AlarmService.this.getResources(), R.mipmap.icon_delete))
						// 设置小图标
						.setSmallIcon(R.mipmap.icon_delete)
						// 设置通知时间
						.setWhen(System.currentTimeMillis())
						.setTicker("我是测试内容")
						.setPriority(Notification.PRIORITY_MAX)
						.setContentIntent(pendingIntent)
						// 设置通知方式，声音，震动，呼吸灯等效果，这里通知方式为声音
						.setVibrate(mNotificationData.getVibrate());
					if (mNotificationData.getSound().equals("default")) {
						mBuilder.setDefaults(Notification.DEFAULT_SOUND);
					}
					// 发送通知请求
					notificationManager.notify(id, mBuilder.build());
					PowerManager powerManager = (PowerManager) AlarmService.this.getSystemService(Context.POWER_SERVICE);
					if (powerManager.isScreenOn()) {
						KeyguardManager mKeyguardManager = (KeyguardManager) AlarmService.this.getSystemService(Context.KEYGUARD_SERVICE);
						if (mKeyguardManager.inKeyguardRestrictedInputMode()) {
							Intent myIntent = new Intent();
							myIntent.setAction("com.fu");
							myIntent.putExtra("msg", "新消息1");
							AlarmService.this.sendBroadcast(intent);
						}
					} else {
						Intent myIntent = new Intent();
						myIntent.setAction("com.fu");
						myIntent.putExtra("msg", "新消息1");
						AlarmService.this.sendBroadcast(intent);
					}
				}
			};
		}
		mTimer.schedule(mTimerTask, mNotificationData.getTimestamp() - System.currentTimeMillis());
		return super.onStartCommand(intent, flags, startId);
	}

	private static void stopTimer(){
		if (mTimer != null) {
			mTimer.cancel();
			mTimer = null;
		}
		if (mTimerTask != null) {
			mTimerTask.cancel();
			mTimerTask = null;
		}
	}

	@Override
	public void onDestroy() {
		stopTimer();
		super.onDestroy();
	}
}
