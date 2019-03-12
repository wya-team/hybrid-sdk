package com.wya.hybrid.events.appidle;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Context;
import android.content.IntentFilter;
import android.os.PowerManager;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.base.BaseApp;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: EventAppIdle
 * @describe: 多长时间不操作后触发
 */
public class EventAppIdle extends HybridEvents {

	private ScreenReceiver mScreenReceiver;

	public EventAppIdle(Activity activity, WYAWebView webView) {
		super(activity, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 注册屏幕监听事件
	 *
	 * @param eventName
	 * @param id
	 * @param mEventRegisterMap
	 */
	public void registerScreenReceiver(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		IntentFilter filter = new IntentFilter();
		filter.addAction(android.content.Intent.ACTION_SCREEN_ON);
		filter.addAction(android.content.Intent.ACTION_SCREEN_OFF);
		filter.addAction(android.content.Intent.ACTION_USER_PRESENT);
		if (null == mScreenReceiver) {
			mScreenReceiver = new ScreenReceiver();
		}
		mContext.registerReceiver(mScreenReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册屏幕监听事件成功", null);
		mWebView.send(id, getData());
	}

	/**
	 * 多长时间不操作屏幕
	 *
	 * @param id :
	 */
	public void onAppIdle(int id) {
		setData(1, "多长时间不操作屏幕debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟长时间不操作屏幕", null);
		mWebView.send(AppIdle.EVENT_APP_IDLE, getData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onAppIdleEvent(EventAppIdleData event) {
		if (event == null) {
			return;
		}
		DebugLogger.logEvent("onScreenEvent state = %s", event.stateScreenOff);
		if (event.stateScreenOff) {
			setData(1, "响应成功", new AppIdle());
			mWebView.send(AppIdle.EVENT_APP_IDLE, getData());
			// TODO: 2019/1/19 ZCQ TEST
			awake(BaseApp.getApp());
		}
	}

	private void awake(Context context) {
		KeyguardManager km = (KeyguardManager) context.getSystemService(Context.KEYGUARD_SERVICE);
		KeyguardManager.KeyguardLock kl = km.newKeyguardLock("unlock");
		kl.disableKeyguard();

		PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
		@SuppressLint("InvalidWakeLockTag") PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.ACQUIRE_CAUSES_WAKEUP | PowerManager.FULL_WAKE_LOCK, "bright");
		wl.acquire();
		wl.release();
	}

	/**
	 * 取消屏幕监听
	 */
	public void unRegisterReceiver() {
		unRegisterReceiver(mScreenReceiver);
	}
}
