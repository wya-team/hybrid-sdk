package com.wya.hybrid;

import android.app.Activity;
import android.content.Intent;

import com.google.gson.Gson;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.RegisterEvent;
import com.wya.hybrid.data.event.PhotoResultEvent;
import com.wya.hybrid.data.sp.ForegroundStateSp;
import com.wya.hybrid.events.appidle.AppIdle;
import com.wya.hybrid.events.appidle.EventAppIdle;
import com.wya.hybrid.events.battery.Battery;
import com.wya.hybrid.events.battery.BatteryEvent;
import com.wya.hybrid.events.keyback.EventKeyBack;
import com.wya.hybrid.events.keyback.KeyBack;
import com.wya.hybrid.events.keyboard.EventKeyboard;
import com.wya.hybrid.events.keyboard.Keyboard;
import com.wya.hybrid.events.network.EventNetwork;
import com.wya.hybrid.events.network.NetState;
import com.wya.hybrid.events.pause.EventPause;
import com.wya.hybrid.events.pause.Foreground;
import com.wya.hybrid.events.pause.ForegroundEvent;
import com.wya.hybrid.events.resume.EventResume;
import com.wya.hybrid.events.shake.EventShake;
import com.wya.hybrid.events.shake.EventShakeData;
import com.wya.hybrid.events.takescreeenshot.EventScreenShot;
import com.wya.hybrid.events.takescreeenshot.TakeScreenshot;
import com.wya.hybrid.events.volume.EventVolume;
import com.wya.hybrid.events.volume.Volume;
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
import com.wya.hybrid.util.CheckUtil;
import com.wya.hybrid.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

import java.util.HashMap;
import java.util.Map;

/**
 * @author :
 */
public class HybridManager implements JsCallBack {

	private WYAWebView mWebView;
	private BaseEmitData<Object> mEmitData = new BaseEmitData<>();
	private Map<String, Integer> mEventRegisterMap;

	private Activity mContext;

	private boolean mIsFromBackground = false;

	/**
	 * 注册事件对象
	 */
	private RegisterEvent mRegisterEvent;

	private Audio mAudio;
	private Record mRecord;

	private BatteryEvent mEventBattery;
	private EventNetwork mEventNetwork;
	private EventAppIdle mEventAppIdle;
	private EventShake mEventShake;
	private EventScreenShot mEventScreenShot;
	private EventKeyboard mEventKeyboard;
	private EventKeyBack mEventKeyBack;
	private EventVolume mEventVolume;
	private EventPause mEventPause;
	private EventResume mEventResume;

	public HybridManager(Activity context, WYAWebView webView) {
		if (!CheckUtil.isValidate(context)) {
			return;
		}
		this.mWebView = webView;
		this.mContext = context;
		this.mEventRegisterMap = new HashMap<>();
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
		if (ActivityManager.getInstance().isForeground() && mIsFromBackground) {
			DebugLogger.logEvent("onResume ... ");
			mIsFromBackground = false;
			ForegroundStateSp.get().setIsResume(true);
			ForegroundStateSp.get().setIsPause(false);
			if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Foreground.EVENT_RESUME) && mEventRegisterMap.containsKey(Foreground.EVENT_RESUME)) {
				ForegroundEvent event = new ForegroundEvent();
				event.setPause(false);
				event.setResume(true);
				EventBus.getDefault().post(event);
			}
		}
	}

	public void onActivityStop() {
		if (!ActivityManager.getInstance().isForeground()) {
			DebugLogger.logEvent("onStop ... ");
			mIsFromBackground = true;
			ForegroundStateSp.get().setIsPause(true);
			ForegroundStateSp.get().setIsResume(false);
			if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Foreground.EVENT_PAUSE) && mEventRegisterMap.containsKey(Foreground.EVENT_PAUSE)) {
				ForegroundEvent event = new ForegroundEvent();
				event.setPause(true);
				event.setResume(false);
				EventBus.getDefault().post(event);
			}
		}
	}

	public void onActivityDestroy() {
		if (mEventNetwork != null && null != mEventRegisterMap && CheckUtil.isNotEmpty(NetState.EVENT_NETWORK) && mEventRegisterMap.containsKey(NetState.EVENT_NETWORK)) {
			mEventNetwork.unRegisterReceiver();
		}
		if (mEventBattery != null && null != mEventRegisterMap && CheckUtil.isNotEmpty(Battery.EVENT_BATTERY) && mEventRegisterMap.containsKey(Battery.EVENT_BATTERY)) {
			mEventBattery.unRegisterReceiver();
		}
		if (mEventAppIdle != null && null != mEventRegisterMap && CheckUtil.isNotEmpty(AppIdle.EVENT_APP_IDLE) && mEventRegisterMap.containsKey(AppIdle.EVENT_APP_IDLE)) {
			mEventAppIdle.unRegisterReceiver();
		}

	}

	/**
	 * @param data 返回数据
	 * @param id   id
	 * @param name
	 */
	@Override
	public void response(String data, int id, String name) {
		switch (name) {
			case "event/add":
				DebugLogger.logEvent("data = %s , id = %s", data, id);
				mRegisterEvent = new Gson().fromJson(data, RegisterEvent.class);
				switch (mRegisterEvent.getEventName()) {
					case Battery.EVENT_BATTERY:
						if (mEventBattery == null) {
							mEventBattery = new BatteryEvent(mContext, mWebView);
						}
						mEventBattery.registerBatteryReceiver(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case NetState.EVENT_NETWORK:
						if (mEventNetwork == null) {
							mEventNetwork = new EventNetwork(mContext, mWebView);
						}
						mEventNetwork.registerNetworkReceiver(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case AppIdle.EVENT_APP_IDLE:
						if (mEventAppIdle == null) {
							mEventAppIdle = new EventAppIdle(mContext, mWebView);
						}
						mEventAppIdle.registerScreenReceiver(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case EventShakeData.EVENT_SHAKE:
						if (mEventShake == null) {
							mEventShake = new EventShake(mContext, mWebView);
						}
						mEventShake.registerShake(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case TakeScreenshot.EVENT_TAKE_SCREENSHOT:
						if (mEventScreenShot == null) {
							mEventScreenShot = new EventScreenShot(mContext, mWebView);
						}
						mEventScreenShot.registerScreenShot(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case Foreground.EVENT_PAUSE:
						if (mEventPause == null) {
							mEventPause = new EventPause(mContext, mWebView);
						}
						mEventPause.registerPause(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case Foreground.EVENT_RESUME:
						if (mEventResume == null) {
							mEventResume = new EventResume(mContext, mWebView);
						}
						mEventResume.registerResume(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case KeyBack.EVENT_KEY_BACK:
						if (mEventKeyBack == null) {
							mEventKeyBack = new EventKeyBack(mContext, mWebView);
						}
						mEventKeyBack.registerKeyBack(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case Volume.EVENT_VOLUME:
						if (mEventVolume == null) {
							mEventVolume = new EventVolume(mContext, mWebView);
						}
						mEventVolume.registerVolume(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case Keyboard.EVENT_KEYBOARD_SHOW:
						if (mEventKeyboard == null) {
							mEventKeyboard = new EventKeyboard(mContext, mWebView);
						}
						mEventKeyboard.registerKeyboard(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					case Keyboard.EVENT_KEYBOARD_HIDE:
						if (mEventKeyboard == null) {
							mEventKeyboard = new EventKeyboard(mContext, mWebView);
						}
						mEventKeyboard.registerKeyboard(mRegisterEvent.getEventName(), id, mEventRegisterMap);
						break;
					default:
						break;
				}
				break;
			case "event/remove":
				DebugLogger.logEvent("data = %s , id = %s", data, id);
				mRegisterEvent = new Gson().fromJson(data, RegisterEvent.class);
				removeEvent(mRegisterEvent.getEventName(), id);
				break;
			case "debugger/invoke":
				mRegisterEvent = new Gson().fromJson(data, RegisterEvent.class);
				if (data.contains(Battery.EVENT_BATTERY)) {
					if (mEventBattery == null) {
						mEventBattery = new BatteryEvent(mContext, mWebView);
					}
					mEventBattery.onBattery(id);
				} else if (data.contains(NetState.EVENT_NETWORK)) {
					if (mEventNetwork == null) {
						mEventNetwork = new EventNetwork(mContext, mWebView);
					}
					mEventNetwork.onNetWork(id);
				} else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
					if (mEventAppIdle == null) {
						mEventAppIdle = new EventAppIdle(mContext, mWebView);
					}
					mEventAppIdle.onAppIdle(id);
				} else if (data.contains(EventShakeData.EVENT_SHAKE)) {
					if (mEventShake == null) {
						mEventShake = new EventShake(mContext, mWebView);
					}
					mEventShake.onShake(id);
				} else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
					if (mEventScreenShot == null) {
						mEventScreenShot = new EventScreenShot(mContext, mWebView);
					}
					mEventScreenShot.onScreenshot(id);
				} else if (data.contains(Foreground.EVENT_PAUSE)) {
					if (mEventPause == null) {
						mEventPause = new EventPause(mContext, mWebView);
					}
					mEventPause.onPause(id);
				} else if (data.contains(Foreground.EVENT_RESUME)) {
					if (mEventResume == null) {
						mEventResume = new EventResume(mContext, mWebView);
					}
					mEventResume.onResume(id);
				} else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
					if (mEventKeyBack == null) {
						mEventKeyBack = new EventKeyBack(mContext, mWebView);
					}
					mEventKeyBack.onKeyBack(id);
				} else if (data.contains(Volume.EVENT_VOLUME)) {
					if (mEventVolume == null) {
						mEventVolume = new EventVolume(mContext, mWebView);
					}
					mEventVolume.onVolume(id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_SHOW)) {
					if (mEventKeyboard == null) {
						mEventKeyboard.registerKeyboard(mRegisterEvent.getEventName(), id, mEventRegisterMap);
					}
					mEventKeyboard.onKeyboard(Keyboard.EVENT_KEYBOARD_SHOW, id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_HIDE)) {
					if (mEventKeyboard == null) {
						mEventKeyboard.registerKeyboard(mRegisterEvent.getEventName(), id, mEventRegisterMap);
					}
					mEventKeyboard.onKeyboard(Keyboard.EVENT_KEYBOARD_HIDE, id);
				}
				break;
			case "navigator/push":
				new Navigator(mContext, mWebView).push(id, data);
				break;
			case "navigator/pop":
				new Navigator(mContext, mWebView).pop(id, data);
				break;
			case "video/open":
				new Video(mContext, mWebView).openVideo(id, data);
				break;
			case "audio/start":
				mAudio = new Audio(mContext, mWebView);
				mAudio.startPlay(id, data);
				break;
			case "audio/stop":
				mAudio.stopPlay(id, data);
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

	/**
	 * 移出监听
	 *
	 * @param eventName
	 * @param id
	 */
	private void removeEvent(String eventName, int id) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(eventName) && mEventRegisterMap.containsKey(eventName)) {
			mEventRegisterMap.remove(eventName);
			boolean unRegisterKeyboard = mEventKeyboard != null && null != mEventRegisterMap && (!mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_SHOW) && !mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_HIDE));
			switch (eventName) {
				case Battery.EVENT_BATTERY:
					if (mEventBattery != null) {
						mEventBattery.unRegisterReceiver();
					}
					break;
				case NetState.EVENT_NETWORK:
					if (mEventNetwork != null) {
						mEventNetwork.unRegisterReceiver();
					}
					break;
				case AppIdle.EVENT_APP_IDLE:
					if (mEventAppIdle != null) {
						mEventAppIdle.unRegisterReceiver();
					}
					break;
				case EventShakeData.EVENT_SHAKE:
					if (mEventShake != null) {
						mEventShake.unRegisterReceiver();
					}
					break;
				case TakeScreenshot.EVENT_TAKE_SCREENSHOT:
					if (mEventScreenShot != null) {
						mEventScreenShot.unRegisterReceiver();
					}
					break;
				case Foreground.EVENT_PAUSE:
					break;
				case Foreground.EVENT_RESUME:
					break;
				case KeyBack.EVENT_KEY_BACK:
					break;
				case Volume.EVENT_VOLUME:
					break;
				case Keyboard.EVENT_KEYBOARD_SHOW:
					if (unRegisterKeyboard) {
						mEventKeyboard.unRegisterReceiver();
					}
					break;
				case Keyboard.EVENT_KEYBOARD_HIDE:
					if (unRegisterKeyboard) {
						mEventKeyboard.unRegisterReceiver();
					}
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

	public void keyBack(int keyCode) {
		if (mEventKeyBack != null) {
			mEventKeyBack.keyBack(keyCode);
		}
	}

	public void volume(int keyCode) {
		if (mEventVolume != null) {
			mEventVolume.volume(keyCode);
		}
	}
}
