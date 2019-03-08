package com.wya.hybrid;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Rect;
import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.os.Environment;
import android.os.PowerManager;
import android.os.Vibrator;
import android.view.ViewTreeObserver;

import com.google.gson.Gson;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.base.BaseApp;
import com.wya.hybrid.bean.AppIdle;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.Battery;
import com.wya.hybrid.bean.Foreground;
import com.wya.hybrid.bean.KeyBack;
import com.wya.hybrid.bean.Keyboard;
import com.wya.hybrid.bean.NetState;
import com.wya.hybrid.bean.PictureBean;
import com.wya.hybrid.bean.RegisterEvent;
import com.wya.hybrid.bean.Shake;
import com.wya.hybrid.bean.TakeScreenshot;
import com.wya.hybrid.bean.Volume;
import com.wya.hybrid.control.BatteryReceiver;
import com.wya.hybrid.control.NetworkReceiver;
import com.wya.hybrid.control.ScreenReceiver;
import com.wya.hybrid.control.ScreenShotListenManager;
import com.wya.hybrid.data.event.AppIdleEvent;
import com.wya.hybrid.data.event.BatteryEvent;
import com.wya.hybrid.data.event.ForegroundEvent;
import com.wya.hybrid.data.event.NetEvent;
import com.wya.hybrid.data.event.PhotoResultEvent;
import com.wya.hybrid.data.event.ShakeEvent;
import com.wya.hybrid.data.sp.BatterySp;
import com.wya.hybrid.data.sp.ForegroundStateSp;
import com.wya.hybrid.methods.App;
import com.wya.hybrid.methods.Audio;
import com.wya.hybrid.methods.FloatBall;
import com.wya.hybrid.methods.Memory;
import com.wya.hybrid.methods.Navigator;
import com.wya.hybrid.methods.Notification;
import com.wya.hybrid.methods.Photo;
import com.wya.hybrid.methods.Record;
import com.wya.hybrid.methods.Screen;
import com.wya.hybrid.methods.Style;
import com.wya.hybrid.methods.SystemMethod;
import com.wya.hybrid.methods.Video;
import com.wya.hybrid.methods.bean.cache.CacheData;
import com.wya.hybrid.methods.bean.closewin.CloseWinData;
import com.wya.hybrid.methods.bean.installapp.InstallAppData;
import com.wya.hybrid.methods.bean.installed.InstalledData;
import com.wya.hybrid.methods.bean.notification.bean.NotificationData;
import com.wya.hybrid.methods.bean.openapp.OpenAppData;
import com.wya.hybrid.methods.bean.openwin.bean.OpenWinData;
import com.wya.hybrid.methods.bean.sms.Sms;
import com.wya.hybrid.util.CheckUtil;
import com.wya.hybrid.util.log.DebugLogger;
import com.wya.utils.utils.FileManagerUtil;
import com.wya.utils.utils.LogUtil;
import com.wya.utils.utils.ScreenUtil;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.HashMap;
import java.util.Map;

import static com.wya.uikit.toolbar.StatusBarUtil.getStatusBarHeight;

/**
 * @author :
 */
public class HybridManager implements JsCallBack {

	private WYAWebView mWebView;
	private BaseEmitData<Object> mEmitData = new BaseEmitData<>();
	private Map<String, Integer> mEventMap;
	private Map<String, Integer> mEventRegisterMap;

	private boolean mIsDebugger = false;
	private boolean mIsRegister = false;
	private Activity mContext;

	private boolean mIsFromBackground = false;
	private NetworkReceiver mNetworkReceiver;
	private BatteryReceiver mBatteryReceiver;
	private ScreenReceiver mScreenReceiver;

	/**
	 * 软键盘的显示状态
	 */
	private boolean mShowKeyboard;

	/**
	 * 注册事件对象
	 */
	private RegisterEvent registerEvent;

	private Audio mAudio;
	private Record mRecord;

	public HybridManager(Activity context, WYAWebView webView) {
		if (!CheckUtil.isValidate(context)) {
			return;
		}
		this.mWebView = webView;
		this.mContext = context;
		this.mEventMap = new HashMap<>();
		this.mEventRegisterMap = new HashMap<>();

		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}

	}

	private static void playVibreate(Context context) {
		try {
			Vibrator vibrator = (Vibrator) context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			if (null != vibrator) {
				vibrator.vibrate(200);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private <T> void setEmitData(int status, String msg, T data) {
		if (null == mEmitData) {
			mEmitData = new BaseEmitData<>();
		}
		mEmitData.setMsg(msg);
		mEmitData.setData(data);
		if (null != data) {
			status = 1;
		}
		mEmitData.setStatus(status);
	}

	private void send(String event, BaseEmitData emitData) {
		if (null == mWebView) {
			return;
		}
		LogUtil.e("send---" + event + "----------" + emitData);
		if (mIsRegister) {
			if (null != mEventRegisterMap && CheckUtil.isNotEmpty(event) && mEventRegisterMap.containsKey(event)) {
				int id = mEventRegisterMap.get(event);
				mWebView.send(id, emitData);
				DebugLogger.logEvent("WYAEventManager .[register true] id = %s, emitData = %s", id, emitData);
				mIsRegister = false;
			}
		} else if (mIsDebugger) {
			if (null != mEventMap && CheckUtil.isNotEmpty(event) && mEventMap.containsKey(event)) {
				int id = mEventMap.get(event);
				mWebView.send(id, emitData);
				DebugLogger.logEvent("WYAEventManager .[debugger true] id = %s, emitData = %s", id, emitData);

				//模拟成功
				mEventMap.remove(event);
				mIsDebugger = false;
				setEmitData(1, event + "测试成功", null);
				send(event, getEmitData());
			}
		} else {
			if (null != mEventMap && CheckUtil.isNotEmpty(event) && mEventMap.containsKey(event)) {
				int id = mEventMap.get(event);
				mWebView.send(id, emitData);
				DebugLogger.logEvent("WYAEventManager .[debugger false] id = %s, emitData = %s", id, emitData);
			} else {
				mWebView.send(event, emitData);
				DebugLogger.logEvent("WYAEventManager .[debugger false] event = %s, emitData = %s", event, emitData);
			}
		}
	}

	private BaseEmitData getEmitData() {
		return mEmitData;
	}

	public void release() {
		if (EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().unregister(this);
		}
		if (null != mWebView) {
			mWebView.removeAllViews();
			mWebView = null;
		}
	}

	public void onActivityCreate() {

	}

	public void onActivityStart() {

	}

	public void onActivityPause() {

	}

	public void onActivityResume() {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Foreground.EVENT_RESUME) && mEventRegisterMap.containsKey(Foreground.EVENT_RESUME)) {
			if (ActivityManager.getInstance().isForeground() && mIsFromBackground) {
				DebugLogger.logEvent("onResume ... ");
				mIsFromBackground = false;
				ForegroundStateSp.get().setIsResume(true);
				ForegroundStateSp.get().setIsPause(false);

				ForegroundEvent event = new ForegroundEvent();
				event.setPause(false);
				event.setResume(true);
				EventBus.getDefault().post(event);
			}
		}
	}

	public void onActivityStop() {
		if (null != mEventMap && CheckUtil.isNotEmpty(Foreground.EVENT_PAUSE) && mEventMap.containsKey(Foreground.EVENT_PAUSE)) {
			if (!ActivityManager.getInstance().isForeground()) {
				DebugLogger.logEvent("onStop ... ");

				mIsFromBackground = true;
				ForegroundStateSp.get().setIsPause(true);
				ForegroundStateSp.get().setIsResume(false);

				ForegroundEvent event = new ForegroundEvent();
				event.setPause(true);
				event.setResume(false);
				EventBus.getDefault().post(event);
			}
		}
	}

	public void onActivityDestroy() {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(NetState.EVENT_NETWORK) && mEventRegisterMap.containsKey(NetState.EVENT_NETWORK)) {
			unRegisterReceiver(mContext, mNetworkReceiver);
		}
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Battery.EVENT_BATTERY) && mEventRegisterMap.containsKey(Battery.EVENT_BATTERY)) {
			unRegisterReceiver(mContext, mBatteryReceiver);
		}
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(AppIdle.EVENT_APP_IDLE) && mEventRegisterMap.containsKey(AppIdle.EVENT_APP_IDLE)) {
			unRegisterReceiver(mContext, mScreenReceiver);
		}

	}

	private void unRegisterReceiver(Context context, BroadcastReceiver receiver) {
		if (context == null || null == receiver) {
			return;
		}
		context.unregisterReceiver(receiver);
	}

	/**
	 * @param data 返回数据
	 * @param id   id
	 * @param name
	 */
	@Override
	public void response(String data, int id, String name) {
		LogUtil.e(data + "default--------" + id + "--------" + name);
		mIsDebugger = false;
		mIsRegister = false;
		switch (name) {
			case "event/add":
				mIsRegister = true;
				DebugLogger.logEvent("data = %s , id = %s", data, id);
				registerEvent = new Gson().fromJson(data, RegisterEvent.class);
				switch (registerEvent.getEventName()) {
					case Battery.EVENT_BATTERY:
						registerBatteryReceiver(registerEvent.getEventName(), id);
						break;
					case NetState.EVENT_NETWORK:
						registerNetworkReceiver(registerEvent.getEventName(), id);
						break;
					case Foreground.EVENT_PAUSE:
						registerPause(registerEvent.getEventName(), id);
						break;
					case Foreground.EVENT_RESUME:
						registerResume(registerEvent.getEventName(), id);
						break;
					case Shake.EVENT_SHAKE:
						registerShake(registerEvent.getEventName(), id);
						break;
					case AppIdle.EVENT_APP_IDLE:
						registerScreenReceiver(registerEvent.getEventName(), id);
						break;
					case TakeScreenshot.EVENT_TAKE_SCREENSHOT:
						registerScreenShot(registerEvent.getEventName(), id);
						break;
					case KeyBack.EVENT_KEY_BACK:
						registerKeyBack(registerEvent.getEventName(), id);
						break;
					case Volume.EVENT_VOLUME:
						registerVolume(registerEvent.getEventName(), id);
						break;
					case Keyboard.EVENT_KEYBOARD_SHOW:
						registerKeyboard(registerEvent.getEventName(), id);
						break;
					case Keyboard.EVENT_KEYBOARD_HIDE:
						registerKeyboard(registerEvent.getEventName(), id);
						break;
					default:
						break;
				}
				break;
			case "event/remove":
				DebugLogger.logEvent("data = %s , id = %s", data, id);
				registerEvent = new Gson().fromJson(data, RegisterEvent.class);
				removeEvent(registerEvent.getEventName(), id);
				break;
			case "debugger/invoke":
				mIsDebugger = true;
				registerEvent = new Gson().fromJson(data, RegisterEvent.class);
				if (data.contains(Battery.EVENT_BATTERY)) {
					HybridManager.this.onBattery(id);
				} else if (data.contains(NetState.EVENT_NETWORK)) {
					HybridManager.this.onNetWork(id);
				} else if (data.contains(Foreground.EVENT_PAUSE)) {
					HybridManager.this.onPause(id);
				} else if (data.contains(Foreground.EVENT_RESUME)) {
					HybridManager.this.onResume(id);
				} else if (data.contains(Shake.EVENT_SHAKE)) {
					HybridManager.this.onShake(id);
				} else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
					HybridManager.this.onAppIdle(id);
				} else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
					HybridManager.this.onScreenshot(id);
				} else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
					HybridManager.this.onKeyBack(id);
				} else if (data.contains(Volume.EVENT_VOLUME)) {
					HybridManager.this.onVolume(id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_SHOW)) {
					HybridManager.this.onKeyboard(Keyboard.EVENT_KEYBOARD_SHOW, id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_HIDE)) {
					HybridManager.this.onKeyboard(Keyboard.EVENT_KEYBOARD_HIDE, id);
				}
				debuggerEvent(registerEvent.getEventName());
				break;
			case "navigator/push":
//                push(name, id, data);
				new Navigator(mContext, mWebView).push(id, data);
				break;
			case "navigator/pop":
				new Navigator(mContext, mWebView).pop(id, data);
//                pop(name, id, data);
				break;
			case "video/open":
				new Video(mContext, mWebView).openVideo(id, data);
//                openVideo(data, id, name);
				break;
			case "audio/start":
				mAudio = new Audio(mContext, mWebView);
				mAudio.startPlay(id, data);
//                startPlay(data, id, name);
				break;
			case "audio/stop":
				mAudio.stopPlay(id, data);
//                stopPlay(data, id, name);
				break;
			case "audio/pause":
				break;
			case "audio/resume":
				break;
			case "audio/restart":
				break;
			case "record/start":
				mRecord = new Record(mContext, mWebView);
				mRecord.startRecording(id, data);
				break;
			case "record/stop":
				mRecord.stopRecording(id, data);
				break;
			case "record/pause":
				break;
			case "record/resume":
				break;
			case "record/restart":
				break;
			case "photo/save":
				new Photo(mContext, mWebView).savePicture(id, data);
				break;
			case "photo/get":
				new Photo(mContext, mWebView).getPicture(id, data);
				break;
			case "floatBall/show":
				new FloatBall(mContext, mWebView).showFloatBox(id, data);
				break;
			case "floatBall/hide":
				break;
			case "screen/toLauncher":
				new Screen(mContext, mWebView).toLauncher(id, data);
				break;
			case "screen/keepOn":
				new Screen(mContext, mWebView).setKeepScreenOn(id, data);
				break;
			case "screen/orientate":
				new Screen(mContext, mWebView).setScreenOrientation(id, data);
				break;
			case "style/setStatusBar":
				new Style(mContext, mWebView).setStatusBarStyle(id, name);
				break;
			case "style/setWin":
				break;
			case "style/setBadge":
				break;
			case "app/install":
				new App(mContext, mWebView).installApp(id, data);
				break;
			case "app/open":
				new App(mContext, mWebView).openApp(id, data);
				break;
			case "app/has":
				new App(mContext, mWebView).appInstalled(id, data);
				break;
			case "app/uninstall":
				break;
			case "app/reboot":
				break;
			case "memory/clearCache":
				new Memory(mContext, mWebView).clearCache(id, data);
				break;
			case "memory/getCache":
				new Memory(mContext, mWebView).getCacheSize(id, data);
				break;
			case "memory/getTotal":
				new Memory(mContext, mWebView).getTotalSpace(id, data);
				break;
			case "memory/getFree":
				new Memory(mContext, mWebView).getFreeDiskSpace(id, data);
				break;
			case "notification/add":
				new Notification(mContext, mWebView).notification(id, data);
				break;
			case "notification/remove":
				new Notification(mContext, mWebView).cancelNotification(id, data);
				break;
			case "system/contacts":
				new SystemMethod(mContext, mWebView).openContacts(id, name);
				break;
			case "system/sms":
				new SystemMethod(mContext, mWebView).sms(id, name);
				break;
			case "system/mail":
				new SystemMethod(mContext, mWebView).mail(id, name);
				break;
			case "storage/get":
				break;
			case "storage/set":
				break;
			case "storage/remove":
				break;
			case "storage/clear":
				break;
			case "storage/getAllKeys":
				break;
			case "download/start":
				break;
			case "download/cancel":
				break;
			case "download/pause":
				break;
			case "download/resume":
				break;
			case "download/restart":
				break;
			case "upload/start":
				break;
			case "upload/cancel":
				break;
			case "upload/pause":
				break;
			case "upload/resume":
				break;
			case "upload/restart":
				break;
			case "location/open":
				break;
			case "location/close":
				break;
			case "location/get":
				break;
			case "sensor/open":
				break;
			case "sensor/close":
				break;
			case "wifi":
				break;
			case "bluetooth":
				break;
			case "nfc":
				break;
			default:
				break;
		}
	}

	/******************************* 事件 *******************************/

	/**
	 * 注册网络监听事件
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerNetworkReceiver(String eventName, int id) {
		IntentFilter filter = new IntentFilter();
		filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
		filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
		filter.addAction("android.net.wifi.STATE_CHANGE");
		if (null == mNetworkReceiver) {
			mNetworkReceiver = new NetworkReceiver();
		}
		mContext.registerReceiver(mNetworkReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册网络监听成功", new NetState());
		send(eventName, getEmitData());
	}

	/**
	 * 网络监听
	 *
	 * @param id :
	 */
	private void onNetWork(int id) {
		mEventMap.put(NetState.EVENT_NETWORK, id);
	}

	@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)
	public void onNetEvent(NetEvent event) {
		if (event == null) {
			return;
		}
		setEmitData(0, event.isOnline() ? "网络连接" : "网络断开" + "响应成功", new NetState());
		send(NetState.EVENT_NETWORK, getEmitData());
	}

	/**
	 * 电池注册监听
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerBatteryReceiver(String eventName, int id) {
		IntentFilter filter = new IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
		if (null == mBatteryReceiver) {
			mBatteryReceiver = new BatteryReceiver();
		}
		mContext.registerReceiver(mBatteryReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		Battery battery = new Battery();
		battery.setIsPlugged(BatterySp.get().isPlugged());
		battery.setLevel(BatterySp.get().getLevel());
		setEmitData(1, "电量监听注册成功", battery);
		send(eventName, getEmitData());
	}

	/**
	 * 电池状态
	 *
	 * @param id :
	 */
	private void onBattery(int id) {
		mEventMap.put(Battery.EVENT_BATTERY, id);
	}

	@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)
	public void onBatteryEvent(BatteryEvent event) {
		if (null == event) {
			return;
		}
		Battery battery = new Battery();
		battery.setIsPlugged(event.isPlugged());
		battery.setLevel(event.getLevel());

		if (event.isBatteryLow()) {
			setEmitData(1, "响应成功", battery);
			send(Battery.EVENT_BATTERY_LOW, getEmitData());
		} else {
			setEmitData(1, "响应成功", battery);
			send(Battery.EVENT_BATTERY, getEmitData());
		}
	}

	/**
	 * 应用从后台回到前台
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerResume(String eventName, int id) {
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册应用从后台回到前台监听成功", new NetState());
		send(eventName, getEmitData());
	}

	/**
	 * 应用进入后台
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerPause(String eventName, int id) {
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册应用进入后台监听成功", new NetState());
		send(eventName, getEmitData());
	}

	/**
	 * 应用进入后台
	 *
	 * @param id :
	 */
	private void onPause(int id) {
		mEventMap.put(Foreground.EVENT_PAUSE, id);
	}

	/**
	 * 应用从后台回到前台
	 *
	 * @param id :
	 */
	private void onResume(int id) {
		mEventMap.put(Foreground.EVENT_RESUME, id);
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onForegroundEvent(ForegroundEvent event) {
		if (event == null) {
			return;
		}
		setEmitData(1, "响应成功", new Foreground());
		send(event.isPause() ? Foreground.EVENT_PAUSE : Foreground.EVENT_RESUME, getEmitData());
	}

	/**
	 * 注册摇动事件
	 *
	 * @param eventName
	 * @param id
	 */
	private SensorManagerHelper sensorManagerHelper;

	private void registerShake(String eventName, int id) {
		sensorManagerHelper = new SensorManagerHelper(mContext);
		sensorManagerHelper.setOnShakeListener(() -> onShake(mContext));
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册摇动事件监听成功", new NetState());
		send(eventName, getEmitData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onShakeEvent(ShakeEvent event) {
		if (event == null) {
			return;
		}
		setEmitData(1, "响应成功", new Shake());
		send(Shake.EVENT_SHAKE, getEmitData());
	}

	/**
	 * 摇动事件
	 *
	 * @param id :
	 */
	private void onShake(int id) {
		mEventMap.put(Shake.EVENT_SHAKE, id);
	}

	private void onShake(Context context) {
		playVibreate(context);
		setEmitData(1, "摇动事件成功", new Shake());
		send(Shake.EVENT_SHAKE, getEmitData());
	}

	/**
	 * 注册屏幕监听事件
	 *
	 * @param eventName
	 * @param id
	 */
	public void registerScreenReceiver(String eventName, int id) {
		IntentFilter filter = new IntentFilter();
		filter.addAction(android.content.Intent.ACTION_SCREEN_ON);
		filter.addAction(android.content.Intent.ACTION_SCREEN_OFF);
		filter.addAction(android.content.Intent.ACTION_USER_PRESENT);
		if (null == mScreenReceiver) {
			mScreenReceiver = new ScreenReceiver();
		}
		mContext.registerReceiver(mScreenReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册屏幕监听事件成功", null);
		send(eventName, getEmitData());
	}

	/**
	 * 多长时间不操作屏幕
	 *
	 * @param id :
	 */
	private void onAppIdle(int id) {
		mEventMap.put(AppIdle.EVENT_APP_IDLE, id);
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onAppIdleEvent(AppIdleEvent event) {
		if (event == null) {
			return;
		}
		DebugLogger.logEvent("onScreenEvent state = %s", event.stateScreenOff);
		if (event.stateScreenOff) {
			setEmitData(1, "响应成功", new AppIdle());
			send(AppIdle.EVENT_APP_IDLE, getEmitData());
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
	 * 注册屏幕截图事件
	 *
	 * @param eventName
	 * @param id
	 */
	private ScreenShotListenManager mScreenShotListenManager;

	private void registerScreenShot(String eventName, int id) {
		mScreenShotListenManager = ScreenShotListenManager.newInstance(mContext);
		mScreenShotListenManager.setListener(this::onScreenshot);
		mScreenShotListenManager.startListen();
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册屏幕截图事件成功", null);
		send(eventName, getEmitData());
	}

	/**
	 * 用户屏幕截图
	 *
	 * @param id :
	 */
	private void onScreenshot(int id) {
		mEventMap.put(TakeScreenshot.EVENT_TAKE_SCREENSHOT, id);
	}

	/**
	 * 截图
	 *
	 * @param imagePath
	 */
	private void onScreenshot(String imagePath) {
		DebugLogger.logEvent("onShot ... imagePath = %s", imagePath);
		TakeScreenshot screenshot = new TakeScreenshot();
		screenshot.setImage(imagePath);
		setEmitData(1, "用户屏幕截图成功", screenshot);
		send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getEmitData());
	}

	/**
	 * 注册返回按钮事件监听
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerKeyBack(String eventName, int id) {
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册返回按钮事件监听成功", null);
		send(eventName, getEmitData());
	}

	private void onKeyBack(int id) {
		mEventMap.put(KeyBack.EVENT_KEY_BACK, id);
	}

	/**
	 * 返回按钮
	 *
	 * @param keyCode :
	 */
	public void keyBack(int keyCode) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(KeyBack.EVENT_KEY_BACK) && mEventRegisterMap.containsKey(KeyBack.EVENT_KEY_BACK)) {
			KeyBack keyBack = new KeyBack();
			keyBack.setKeyCode(keyCode);
			keyBack.setLongPress(false);
			setEmitData(1, "响应成功", keyBack);
			send(KeyBack.EVENT_KEY_BACK, getEmitData());
		}
	}

	/**
	 * 注册音量监听
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerVolume(String eventName, int id) {
		mEventRegisterMap.put(eventName, id);
		setEmitData(1, "注册音量监听成功", null);
		send(eventName, getEmitData());
	}

	private void onVolume(int id) {
		mEventMap.put(Volume.EVENT_VOLUME, id);
	}

	/**
	 * 音量按钮
	 *
	 * @param keyCode :
	 */
	public void volume(int keyCode) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Volume.EVENT_VOLUME) && mEventRegisterMap.containsKey(Volume.EVENT_VOLUME)) {
			Volume volume = new Volume();
			volume.setKeyCode(keyCode);
			volume.setLongPress(false);
			setEmitData(1, "音量", volume);
			send(Volume.EVENT_VOLUME, getEmitData());
		}
	}

	/**
	 * 注册软件盘监听成功
	 *
	 * @param eventName
	 * @param id
	 */
	private void registerKeyboard(String eventName, int id) {
		mEventRegisterMap.put(eventName, id);
		if (eventName.equals(Keyboard.EVENT_KEYBOARD_HIDE)) {
			setEmitData(1, "注册软件盘影藏监听成功", null);
		} else {
			setEmitData(1, "注册软件盘显示监听成功", null);
		}
		send(eventName, getEmitData());
		mWebView.getRootView().getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
			@Override
			public void onGlobalLayout() {
				// 应用可以显示的区域。此处包括应用占用的区域，包括标题栏不包括状态栏
				Rect r = new Rect();
				mWebView.getRootView().getWindowVisibleDisplayFrame(r);
				// 键盘最小高度
				int minKeyboardHeight = 150;
				// 获取状态栏高度
				int statusBarHeight = getStatusBarHeight(mContext);
				// 屏幕高度,不含虚拟按键的高度
				int screenHeight = ScreenUtil.getScreenHeight(mContext) - statusBarHeight;
				// 在不显示软键盘时，height等于状态栏的高度
				int height = screenHeight - (r.bottom - r.top);
				Keyboard keyboard = new Keyboard();
				keyboard.setHeight(height);
				setEmitData(1, "响应成功", keyboard);
				if (mShowKeyboard) {
					if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Keyboard.EVENT_KEYBOARD_HIDE) && mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_HIDE)) {
						// 如果软键盘是弹出的状态，并且height小于等于状态栏高度，
						// 说明这时软键盘已经收起
						if (height - statusBarHeight < minKeyboardHeight) {
							mShowKeyboard = false;
							send(Keyboard.EVENT_KEYBOARD_HIDE, getEmitData());
						}
					}
				} else {
					if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Keyboard.EVENT_KEYBOARD_SHOW) && mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_SHOW)) {
						// 如果软键盘是收起的状态，并且height大于状态栏高度，
						// 说明这时软键盘已经弹出
						if (height - statusBarHeight > minKeyboardHeight) {
							mShowKeyboard = true;
							send(Keyboard.EVENT_KEYBOARD_SHOW, getEmitData());
						}
					}
				}
			}
		});
	}

	public void onKeyboard(String eventName, int id) {
		mEventMap.put(eventName, id);
	}

	/******************************* 事件 *******************************/

	private void debuggerEvent(String eventName) {
		setEmitData(1, "模拟debugger事件", null);
		send(eventName, getEmitData());
	}

	/**
	 * 移出监听
	 *
	 * @param eventName
	 * @param id
	 */
	private void removeEvent(String eventName, int id) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(eventName) && mEventRegisterMap.containsKey(eventName)) {
			mEventRegisterMap.remove(eventName);
			switch (eventName) {
				case Battery.EVENT_BATTERY:
					unRegisterReceiver(mContext, mBatteryReceiver);
					break;
				case NetState.EVENT_NETWORK:
					unRegisterReceiver(mContext, mNetworkReceiver);
					break;
				case Foreground.EVENT_PAUSE:
					break;
				case Foreground.EVENT_RESUME:
					break;
				case Shake.EVENT_SHAKE:
					sensorManagerHelper.stop();
					break;
				case AppIdle.EVENT_APP_IDLE:
					unRegisterReceiver(mContext, mScreenReceiver);
					break;
				case TakeScreenshot.EVENT_TAKE_SCREENSHOT:
					mScreenShotListenManager.stopListen();
					break;
				case KeyBack.EVENT_KEY_BACK:
					break;
				case Volume.EVENT_VOLUME:
					break;
				case Keyboard.EVENT_KEYBOARD_SHOW:
					break;
				case Keyboard.EVENT_KEYBOARD_HIDE:
					break;
				default:
					break;
			}
			setEmitData(1, eventName + "移除成功", null);
			mWebView.send(id, getEmitData());
		}
	}

	public void onActivityResult(int requestCode, int resultCode, Intent data) {
		EventBus.getDefault().post(new PhotoResultEvent(requestCode, resultCode, data));
	}

}
