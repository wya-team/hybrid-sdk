package com.wya.hybrid;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Environment;
import android.os.PowerManager;
import android.os.Vibrator;
import android.view.ViewTreeObserver;
import android.widget.Toast;

import com.arialyy.aria.core.download.DownloadTask;
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
import com.wya.hybrid.bean.Shake;
import com.wya.hybrid.bean.TakeScreenshot;
import com.wya.hybrid.bean.VolumeDown;
import com.wya.hybrid.bean.VolumeUp;
import com.wya.hybrid.control.BatteryReceiver;
import com.wya.hybrid.control.NetworkReceiver;
import com.wya.hybrid.control.ScreenReceiver;
import com.wya.hybrid.control.ScreenShotListenManager;
import com.wya.hybrid.data.event.AppIdleEvent;
import com.wya.hybrid.data.event.BatteryEvent;
import com.wya.hybrid.data.event.ForegroundEvent;
import com.wya.hybrid.data.event.NetEvent;
import com.wya.hybrid.data.event.ShakeEvent;
import com.wya.hybrid.data.sp.BatterySp;
import com.wya.hybrid.data.sp.ForegroundStateSp;
import com.wya.hybrid.methods.closewin.CloseWinData;
import com.wya.hybrid.methods.installapp.InstallAppData;
import com.wya.hybrid.methods.installedapp.InstalledAppData;
import com.wya.hybrid.methods.openapp.OpenAppData;
import com.wya.hybrid.methods.openwin.OpenWinActivity;
import com.wya.hybrid.util.CheckUtil;
import com.wya.hybrid.util.log.DebugLogger;
import com.wya.utils.utils.FileManagerUtil;
import com.wya.utils.utils.LogUtil;
import com.wya.utils.utils.PhoneUtil;
import com.wya.utils.utils.ScreenUtil;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import static com.wya.uikit.toolbar.StatusBarUtil.getStatusBarHeight;
import static com.wya.utils.utils.FileManagerUtil.TASK_COMPLETE;

/**
 * @author :
 */
public class HybridManager implements JsCallBack {

	private WYAWebView mWebView;
	private BaseEmitData<Object> mEmitData = new BaseEmitData<>();
	private Map<String, Integer> mEventMap;
	private boolean mIsDebugger = false;
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
	 * 关闭window
	 */
	private CloseWinData mCloseWinData;

	/**
	 * 软件下载安装
	 */
	private InstallAppData mInstallAppData;
	private FileManagerUtil mFileManagerUtil;
	private String fileRootPath = Environment.getExternalStorageDirectory().getAbsolutePath();

	/**
	 * 下载app判断
	 */
	private InstalledAppData mInstalledAppData;

	/**
	 * 打开app
	 */
	private OpenAppData mOpenAppData;

	public HybridManager(Activity context, WYAWebView webView) {
		if (!CheckUtil.isValidate(context)) {
			return;
		}
		this.mWebView = webView;
		this.mContext = context;
		this.mEventMap = new HashMap<>();

		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}

		// shake
		SensorManagerHelper sensorManagerHelper = new SensorManagerHelper(context);
		sensorManagerHelper.setOnShakeListener(() -> onShake(context));

		// take screenshot
		ScreenShotListenManager manager = ScreenShotListenManager.newInstance(context);
		manager.setListener(this::onScreenshot);
		manager.startListen();

		registerNetworkReceiver();
		registerBatteryReceiver();
		registerScreenReceiver();

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

	private void registerNetworkReceiver() {
		IntentFilter filter = new IntentFilter();
		filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
		filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
		filter.addAction("android.net.wifi.STATE_CHANGE");
		if (null == mNetworkReceiver) {
			mNetworkReceiver = new NetworkReceiver();
		}
		mContext.registerReceiver(mNetworkReceiver, filter);
	}

	private void registerBatteryReceiver() {
		IntentFilter filter = new IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
		if (null == mBatteryReceiver) {
			mBatteryReceiver = new BatteryReceiver();
		}
		mContext.registerReceiver(mBatteryReceiver, filter);
	}

	public void registerScreenReceiver() {
		IntentFilter filter = new IntentFilter();
		filter.addAction(android.content.Intent.ACTION_SCREEN_ON);
		filter.addAction(android.content.Intent.ACTION_SCREEN_OFF);
		filter.addAction(android.content.Intent.ACTION_USER_PRESENT);
		if (null == mScreenReceiver) {
			mScreenReceiver = new ScreenReceiver();
		}
		mContext.registerReceiver(mScreenReceiver, filter);
	}

	/**
	 * 低电量
	 *
	 * @param id :
	 */
	private void onBatteryLow(int id) {
		mEventMap.put(Battery.EVENT_BATTERY_LOW, id);
		Battery battery = new Battery();
		battery.setIsPlugged(BatterySp.get().isPlugged());
		battery.setLevel(BatterySp.get().getLevel());
		setEmitData(1, "响应成功", battery);
		send(Battery.EVENT_BATTERY_LOW, getEmitData());
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
		}
	}

	/**
	 * 电池状态
	 *
	 * @param id :
	 */
	private void onBatteryStatus(int id) {
		mEventMap.put(Battery.EVENT_BATTERY_STATUS, id);
		Battery battery = new Battery();
		battery.setIsPlugged(BatterySp.get().isPlugged());
		battery.setLevel(BatterySp.get().getLevel());
		setEmitData(1, "响应成功", battery);
		send(Battery.EVENT_BATTERY_STATUS, getEmitData());
	}

	/**
	 * 断开网络
	 *
	 * @param id :
	 */
	private void onOffline(int id) {
		mEventMap.put(NetState.EVENT_OFFLINE, id);
	}

	@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)
	public void onNetEvent(NetEvent event) {
		if (event == null) {
			return;
		}
		setEmitData(1, "响应成功", new NetState());
		send(event.isOnline() ? NetState.EVENT_ONLINE : NetState.EVENT_OFFLINE, getEmitData());
	}

	/**
	 * 连接网络
	 *
	 * @param id :
	 */
	private void onOnline(int id) {
		mEventMap.put(NetState.EVENT_ONLINE, id);
	}

	/**
	 * 应用进入后台
	 *
	 * @param id :
	 */
	private void onPause(int id) {
		mEventMap.put(Foreground.EVENT_PAUSE, id);
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
	 * 应用从后台回到前台
	 *
	 * @param id :
	 */
	private void onResume(int id) {
		mEventMap.put(Foreground.EVENT_RESUME, id);
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
		setEmitData(1, "响应成功", new Shake());
		send(Shake.EVENT_SHAKE, getEmitData());
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
	 * 用户屏幕截图
	 *
	 * @param id :
	 */
	private void onScreenshot(int id) {
		mEventMap.put(TakeScreenshot.EVENT_TAKE_SCREENSHOT, id);
	}

	private void onScreenshot(String imagePath) {
		DebugLogger.logEvent("onShot ... imagePath = %s", imagePath);
		TakeScreenshot screenshot = new TakeScreenshot();
		screenshot.setImage(imagePath);
		setEmitData(1, "响应成功", screenshot);
		send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getEmitData());
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

		if (mIsDebugger) {
			if (null != mEventMap && CheckUtil.isNotEmpty(event) && mEventMap.containsKey(event)) {
				int id = mEventMap.get(event);
				mWebView.send(id, emitData);
				DebugLogger.logEvent("WYAEventManager .[debugger true] id = %s, emitData = %s", id, emitData);
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

	/**
	 * 音量加按钮
	 *
	 * @param keyCode :
	 */
	public void volumeDown(int keyCode) {
		VolumeDown volumeDown = new VolumeDown();
		volumeDown.setKeyCode(keyCode);
		volumeDown.setLongPress(false);
		setEmitData(1, "响应成功", volumeDown);
		send(VolumeDown.EVENT_VOLUME_DOWN, getEmitData());
	}

	/**
	 * 音量减按钮
	 *
	 * @param keyCode :
	 */
	public void volumeUp(int keyCode) {
		VolumeUp volumeUp = new VolumeUp();
		volumeUp.setKeyCode(keyCode);
		volumeUp.setLongPress(false);
		setEmitData(1, "响应成功", volumeUp);
		send(VolumeUp.EVENT_VOLUME_UP, getEmitData());
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

			ForegroundEvent event = new ForegroundEvent();
			event.setPause(false);
			event.setResume(true);
			EventBus.getDefault().post(event);
		}
	}

	public void onActivityStop() {
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

	public void onActivityDestroy() {
		unRegisterReceiver(mContext, mNetworkReceiver);
		unRegisterReceiver(mContext, mBatteryReceiver);
		unRegisterReceiver(mContext, mScreenReceiver);
	}

	private void unRegisterReceiver(Context context, BroadcastReceiver receiver) {
		if (context == null || null == receiver) {
			return;
		}
		context.unregisterReceiver(receiver);
	}

	/**
	 * 返回按钮
	 *
	 * @param keyCode :
	 */
	public void keyBack(int keyCode) {
		KeyBack keyBack = new KeyBack();
		keyBack.setKeyCode(keyCode);
		keyBack.setLongPress(false);
		setEmitData(1, "响应成功", keyBack);
		send(KeyBack.EVENT_KEY_BACK, getEmitData());
	}

	public void onKeyBoardListener(String event, int id) {
		mEventMap.put(event, id);
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
				send(VolumeUp.EVENT_VOLUME_UP, getEmitData());

				if (mShowKeyboard) {
					// 如果软键盘是弹出的状态，并且height小于等于状态栏高度，
					// 说明这时软键盘已经收起
					if (height - statusBarHeight < minKeyboardHeight) {
						mShowKeyboard = false;
						send(Keyboard.EVENT_KEYBOARD_HIDE, getEmitData());
					}
				} else {
					// 如果软键盘是收起的状态，并且height大于状态栏高度，
					// 说明这时软键盘已经弹出
					if (height - statusBarHeight > minKeyboardHeight) {
						mShowKeyboard = true;
						send(Keyboard.EVENT_KEYBOARD_SHOW, getEmitData());
					}
				}
			}
		});
	}

	@Override
	public void response(String data, int id, String name) {
		LogUtil.e(data + "default--------" + id + "--------" + name);
		mIsDebugger = false;
		switch (name) {
			case "debugger":
				mIsDebugger = true;
				DebugLogger.logEvent("data = %s , id = %s", data, id);
				Toast.makeText(mContext, data, Toast.LENGTH_SHORT).show();
				if (data.contains(Battery.EVENT_BATTERY_LOW)) {
					HybridManager.this.onBatteryLow(id);
				} else if (data.contains(Battery.EVENT_BATTERY_STATUS)) {
					HybridManager.this.onBatteryStatus(id);
				} else if (data.contains(NetState.EVENT_OFFLINE)) {
					HybridManager.this.onOffline(id);
				} else if (data.contains(NetState.EVENT_ONLINE)) {
					HybridManager.this.onOnline(id);
				} else if (data.contains(Foreground.EVENT_PAUSE)) {
					HybridManager.this.onPause(id);
				} else if (data.contains(Foreground.EVENT_RESUME)) {
					HybridManager.this.onResume(id);
				} else if (data.contains(Shake.EVENT_SHAKE)) {
					onShake(id);
				} else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
					HybridManager.this.onAppIdle(id);
				} else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
					onScreenshot(id);
				} else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
					mEventMap.put(KeyBack.EVENT_KEY_BACK, id);
				} else if (data.contains(VolumeDown.EVENT_VOLUME_DOWN)) {
					mEventMap.put(VolumeDown.EVENT_VOLUME_DOWN, id);
				} else if (data.contains(VolumeUp.EVENT_VOLUME_UP)) {
					mEventMap.put(VolumeUp.EVENT_VOLUME_UP, id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_SHOW)) {
					HybridManager.this.onKeyBoardListener(Keyboard.EVENT_KEYBOARD_SHOW, id);
				} else if (data.contains(Keyboard.EVENT_KEYBOARD_HIDE)) {
					HybridManager.this.onKeyBoardListener(Keyboard.EVENT_KEYBOARD_HIDE, id);
				}
				break;
			case "openWin":
				openWin(name, id, data);
				break;
			case "closeWin":
				closeWin(name, id, data);
				break;
			case "closeToWin":
				closeToWin(name, id, data);
				break;
			case "installApp":
				installApp(name, id, data);
				break;
			case "openApp":
				openApp(name, id, data);
				break;
			case "appInstalled":
				appInstalled(name, id, data);
				break;
			default:
				break;
		}
	}

	/**
	 * 判断app是否下载
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void appInstalled(String name, int id, String data) {
		boolean isAppInstalled = false;
		mEventMap.put(name, id);
		mInstalledAppData = new Gson().fromJson(data, InstalledAppData.class);
		mInstalledAppData.setScheme("com.wya.shanda");
		if (mInstalledAppData != null && mInstalledAppData.getScheme() != null && !mInstalledAppData.getScheme().equals("")) {
			isAppInstalled = PhoneUtil.getInstance().isApkInstalled(mContext, mInstalledAppData.getScheme());
		}
		setEmitData(1, "响应成功", null);
		send(name, getEmitData());
	}

	/**
	 * 打开app
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void openApp(String name, int id, String data) {
		mEventMap.put(name, id);
		mOpenAppData = new Gson().fromJson(data, OpenAppData.class);
		mOpenAppData.setScheme("com.wya.shanda");
		if (mOpenAppData != null && mOpenAppData.getScheme() != null && !mOpenAppData.getScheme().equals("")) {
			Intent intent = mContext.getPackageManager().getLaunchIntentForPackage(mOpenAppData.getScheme());
			if (intent != null) {
				mContext.startActivity(intent);
				setEmitData(1, "响应成功", null);
				send(name, getEmitData());
			} else {
				setEmitData(0, "未安装应用", null);
				send(name, getEmitData());
			}
		}
	}

	/**
	 * 下载app
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void installApp(String name, int id, String data) {
		mEventMap.put(name, id);
		mInstallAppData = new Gson().fromJson(data, InstallAppData.class);
		mInstallAppData.setUrl("https://oss.ruishan666.com/file/xcx/190219/560100273267/apprelease(1).apk");
		mFileManagerUtil = new FileManagerUtil();
		if (mInstallAppData != null && mInstallAppData.getUrl() != null && !mInstallAppData.getUrl().equals("")) {
			String fileName = mInstallAppData.getUrl().split("/")[mInstallAppData.getUrl().split("/").length - 1];
			mFileManagerUtil.getDownloadReceiver().load(mInstallAppData.getUrl()).setFilePath(fileRootPath + "/" + fileName).start();
			mFileManagerUtil.setOnDownLoaderListener(new FileManagerUtil.OnDownLoaderListener() {
				@Override
				public void onDownloadState(int state, DownloadTask task, Exception e) {
					if (state == TASK_COMPLETE) {
						installAPK(fileRootPath + "/" + fileName);
						setEmitData(1, "响应成功", null);
						send(name, getEmitData());
					}
				}
			});
		}
	}

	/**
	 * 下载到本地后执行安装
	 */
	protected void installAPK(String filePath) {
		File apkFile = new File(filePath);
		if (!apkFile.exists()) {
			return;
		}
		Intent intent = new Intent(Intent.ACTION_VIEW);
		// 安装完成后，启动app（源码中少了这句话）
		intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		Uri uri = Uri.parse("file://" + apkFile.toString());
		intent.setDataAndType(uri, "application/vnd.android.package-archive");
		mContext.startActivity(intent);
	}

	/**
	 * 关闭到页面到某个界面
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void closeToWin(String name, int id, String data) {
		mEventMap.put(name, id);
		mCloseWinData = new Gson().fromJson(data, CloseWinData.class);
		mCloseWinData.setName("name");
		mCloseWinData.setAnimation("card");
		if (mCloseWinData != null && mCloseWinData.getName() != null && !mCloseWinData.getName().equals("")) {
			ActivityManager.getInstance().closeToWinByName(mCloseWinData.getName());
		}
		setEmitData(1, "响应成功", null);
		send(name, getEmitData());
	}

	/**
	 * 关闭页面
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void closeWin(String name, int id, String data) {
		mEventMap.put(name, id);
		mCloseWinData = new Gson().fromJson(data, CloseWinData.class);
		mCloseWinData.setName("name");
		mCloseWinData.setAnimation("card");
		if (mCloseWinData != null && mCloseWinData.getName() != null && !mCloseWinData.getName().equals("")) {
			ActivityManager.getInstance().finishActivityByName(mCloseWinData.getName());
		} else {
			ActivityManager.getInstance().finishTopActivity();
		}
		setEmitData(1, "响应成功", null);
		send(name, getEmitData());
	}

	/**
	 * 打开新页面
	 *
	 * @param name
	 * @param id
	 * @param data
	 */
	private void openWin(String name, int id, String data) {
		mEventMap.put(name, id);
		Intent intent = new Intent(mContext, OpenWinActivity.class);
		intent.putExtra("data", data);
		mContext.startActivity(intent);
		send(name, getEmitData());
	}
}
