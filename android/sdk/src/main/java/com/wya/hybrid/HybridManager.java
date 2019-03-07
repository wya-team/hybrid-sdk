package com.wya.hybrid;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.KeyguardManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ActivityInfo;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.Rect;
import android.media.MediaMetadataRetriever;
import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.PowerManager;
import android.os.StatFs;
import android.os.Vibrator;
import android.provider.ContactsContract;
import android.support.v4.content.FileProvider;
import android.telephony.SmsManager;
import android.text.TextUtils;
import android.text.format.Formatter;
import android.util.Log;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.WindowManager;
import android.view.animation.AccelerateInterpolator;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import android.widget.Toast;

import com.arialyy.aria.core.download.DownloadTask;
import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.google.gson.Gson;
import com.wya.hardware.camera.WYACameraView;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.base.BaseApp;
import com.wya.hybrid.bean.AppIdle;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.Battery;
import com.wya.hybrid.bean.ContactsBean;
import com.wya.hybrid.bean.Foreground;
import com.wya.hybrid.bean.KeyBack;
import com.wya.hybrid.bean.Keyboard;
import com.wya.hybrid.bean.NetState;
import com.wya.hybrid.bean.PictureBean;
import com.wya.hybrid.bean.RecordBean;
import com.wya.hybrid.bean.RegisterEvent;
import com.wya.hybrid.bean.ReturnPictureBean;
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
import com.wya.hybrid.floatwindow.FloatWindow;
import com.wya.hybrid.floatwindow.IFloatWindow;
import com.wya.hybrid.floatwindow.MoveType;
import com.wya.hybrid.floatwindow.PermissionUtil;
import com.wya.hybrid.floatwindow.Screen;
import com.wya.hybrid.methods.bean.cache.CacheData;
import com.wya.hybrid.methods.bean.cache.SpaceData;
import com.wya.hybrid.methods.bean.closewin.CloseWinData;
import com.wya.hybrid.methods.bean.installapp.InstallAppData;
import com.wya.hybrid.methods.bean.installed.InstalledData;
import com.wya.hybrid.methods.bean.notification.AlarmReceiver;
import com.wya.hybrid.methods.bean.notification.bean.NotificationData;
import com.wya.hybrid.methods.bean.notification.bean.NotificationEmit;
import com.wya.hybrid.methods.bean.notification.bean.NotificationsUtils;
import com.wya.hybrid.methods.bean.notification.bean.Notify;
import com.wya.hybrid.methods.bean.openapp.OpenAppData;
import com.wya.hybrid.methods.bean.openwin.OpenWinActivity;
import com.wya.hybrid.methods.bean.openwin.bean.OpenWinData;
import com.wya.hybrid.methods.bean.sms.Sms;
import com.wya.hybrid.nativeUI.CameraActivity;
import com.wya.hybrid.util.CheckUtil;
import com.wya.hybrid.util.log.DebugLogger;
import com.wya.uikit.dialog.WYACustomDialog;
import com.wya.uikit.imagepicker.ImagePickerCreator;
import com.wya.uikit.imagepicker.PickerConfig;
import com.wya.uikit.toolbar.StatusBarUtil;
import com.wya.utils.utils.DataCleanUtil;
import com.wya.utils.utils.FileManagerUtil;
import com.wya.utils.utils.LogUtil;
import com.wya.utils.utils.PhoneUtil;
import com.wya.utils.utils.ScreenUtil;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static android.app.Activity.RESULT_OK;
import static android.app.PendingIntent.FLAG_UPDATE_CURRENT;
import static android.content.Context.ALARM_SERVICE;
import static com.wya.uikit.toolbar.StatusBarUtil.getStatusBarHeight;
import static com.wya.utils.utils.FileManagerUtil.TASK_COMPLETE;
import static com.wya.utils.utils.FileManagerUtil.TASK_FAIL;

/**
 * @author :
 */
public class HybridManager implements JsCallBack {

    private static final int CAMERA_PIC_REQUEST = 100;
    private static final int CAMERA_VIDEO_REQUEST = 101;
    private static final int ALBUM_PIC_REQUEST = 102;
    private static final int ALBUM_VIDEO_REQUEST = 103;

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

    private CloseWinData closeWinData;
    private MediaPlayer mMediaPlayer;
    private MediaRecorder mRecorder;

    /**
     * 软键盘的显示状态
     */
    private boolean mShowKeyboard;

    /**
     * 打开window
     */
    private OpenWinData mOpenWinData;

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
    private InstalledData mInstalledAppData;

    /**
     * 打开app
     */
    private OpenAppData mOpenAppData;

    /**
     * 清理缓存
     */
    private CacheData mCacheData;

    /**
     * 通知对象
     */
    private NotificationData mNotificationData;

    /**
     * 短信对象
     */
    private Sms sms;

    /**
     * 注册事件对象
     */
    private RegisterEvent registerEvent;

    private boolean saveToPhotoAlbum;
    private String recordPath;
    private PictureBean mPictureBean;

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
        if (eventName.equals(NetState.EVENT_ONLINE)) {
            setEmitData(1, "注册网络开启监听成功", new NetState());
        } else {
            setEmitData(1, "注册网络关闭监听成功", new NetState());
        }
        send(eventName, getEmitData());
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
        if (event.isOnline()) {
            if (null != mEventRegisterMap && CheckUtil.isNotEmpty(NetState.EVENT_ONLINE) && mEventRegisterMap.containsKey(NetState.EVENT_ONLINE)) {
                setEmitData(0, NetState.EVENT_ONLINE + "响应成功", new NetState());
                send(NetState.EVENT_ONLINE, getEmitData());
            }
        } else {
            if (null != mEventRegisterMap && CheckUtil.isNotEmpty(NetState.EVENT_OFFLINE) && mEventRegisterMap.containsKey(NetState.EVENT_OFFLINE)) {
                setEmitData(0, NetState.EVENT_OFFLINE + "响应成功", new NetState());
                send(NetState.EVENT_OFFLINE, getEmitData());
            }
        }
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
        if (eventName.equals(Battery.EVENT_BATTERY_LOW)) {
            setEmitData(1, "低电量监听注册成功", battery);
        } else {
            setEmitData(1, "电量状态监听注册成功", battery);
        }
        send(eventName, getEmitData());
    }

    /**
     * 电池状态
     *
     * @param id :
     */
    private void onBatteryStatus(int id) {
        mEventMap.put(Battery.EVENT_BATTERY_STATUS, id);
    }

    /**
     * 低电量
     *
     * @param id :
     */
    private void onBatteryLow(int id) {
        mEventMap.put(Battery.EVENT_BATTERY_LOW, id);
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

    public void removeBatteryReceiver() {
//		unRegisterReceiver(mContext, mBatteryReceiver);
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
    private void registerShake(String eventName, int id) {
        SensorManagerHelper sensorManagerHelper = new SensorManagerHelper(mContext);
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
    private void registerScreenShot(String eventName, int id) {
        ScreenShotListenManager manager = ScreenShotListenManager.newInstance(mContext);
        manager.setListener(this::onScreenshot);
        manager.startListen();
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
     * 注册音量减的监听
     *
     * @param eventName
     * @param id
     */
    private void registerVolumeDown(String eventName, int id) {
        mEventRegisterMap.put(eventName, id);
        setEmitData(1, "注册音量减的监听成功", null);
        send(eventName, getEmitData());
    }

    private void onVolumeDown(int id) {
        mEventMap.put(VolumeDown.EVENT_VOLUME_DOWN, id);
    }

    /**
     * 音量加按钮
     *
     * @param keyCode :
     */
    public void volumeDown(int keyCode) {
        if (null != mEventRegisterMap && CheckUtil.isNotEmpty(VolumeDown.EVENT_VOLUME_DOWN) && mEventRegisterMap.containsKey(VolumeDown.EVENT_VOLUME_DOWN)) {
            VolumeDown volumeDown = new VolumeDown();
            volumeDown.setKeyCode(keyCode);
            volumeDown.setLongPress(false);
            setEmitData(1, "音量减", volumeDown);
            send(VolumeDown.EVENT_VOLUME_DOWN, getEmitData());
        }
    }

    /**
     * 注册音量加的监听
     *
     * @param eventName
     * @param id
     */
    private void registerVolumeUp(String eventName, int id) {
        mEventRegisterMap.put(eventName, id);
        setEmitData(1, "注册音量加的监听成功", null);
        send(eventName, getEmitData());
    }

    private void onVolumeUp(int id) {
        mEventMap.put(VolumeUp.EVENT_VOLUME_UP, id);
    }

    /**
     * 音量加按钮
     *
     * @param keyCode :
     */
    public void volumeUp(int keyCode) {
        if (null != mEventRegisterMap && CheckUtil.isNotEmpty(VolumeUp.EVENT_VOLUME_UP) && mEventRegisterMap.containsKey(VolumeUp.EVENT_VOLUME_UP)) {
            VolumeUp volumeUp = new VolumeUp();
            volumeUp.setKeyCode(keyCode);
            volumeUp.setLongPress(false);
            setEmitData(1, "音量加", volumeUp);
            send(VolumeUp.EVENT_VOLUME_UP, getEmitData());
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
                    case Battery.EVENT_BATTERY_LOW:
                        registerBatteryReceiver(registerEvent.getEventName(), id);
                        break;
                    case Battery.EVENT_BATTERY_STATUS:
                        registerBatteryReceiver(registerEvent.getEventName(), id);
                        break;
                    case NetState.EVENT_OFFLINE:
                        registerNetworkReceiver(registerEvent.getEventName(), id);
                        break;
                    case NetState.EVENT_ONLINE:
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
                    case VolumeDown.EVENT_VOLUME_DOWN:
                        registerVolumeDown(registerEvent.getEventName(), id);
                        break;
                    case VolumeUp.EVENT_VOLUME_UP:
                        registerVolumeUp(registerEvent.getEventName(), id);
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
                    HybridManager.this.onShake(id);
                } else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
                    HybridManager.this.onAppIdle(id);
                } else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
                    HybridManager.this.onScreenshot(id);
                } else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
                    HybridManager.this.onKeyBack(id);
                } else if (data.contains(VolumeDown.EVENT_VOLUME_DOWN)) {
                    HybridManager.this.onVolumeDown(id);
                } else if (data.contains(VolumeUp.EVENT_VOLUME_UP)) {
                    HybridManager.this.onVolumeUp(id);
                } else if (data.contains(Keyboard.EVENT_KEYBOARD_SHOW)) {
                    HybridManager.this.onKeyboard(Keyboard.EVENT_KEYBOARD_SHOW, id);
                } else if (data.contains(Keyboard.EVENT_KEYBOARD_HIDE)) {
                    HybridManager.this.onKeyboard(Keyboard.EVENT_KEYBOARD_HIDE, id);
                }
                debuggerEvent(registerEvent.getEventName());
                break;
            case "navigator/push":
                push(name, id, data);
                break;
            case "navigator/pop":
                pop(name, id, data);
                break;
            case "video/open":
                openVideo(data, id, name);
                break;
            case "audio/start":
                startPlay(data, id, name);
                break;
            case "audio/stop":
                stopPlay(data, id, name);
                break;
            case "audio/pause":
                break;
            case "audio/resume":
                break;
            case "audio/restart":
                break;
            case "record/start":
                startRecording(data, id, name);
                break;
            case "record/stop":
                stopRecording(data, id, name);
                break;
            case "record/pause":
                break;
            case "record/resume":
                break;
            case "record/restart":
                break;
            case "photo/save":
                savePicture(data, id, name);
                break;
            case "photo/get":
                getPicture(data, id, name);
                break;
            case "floatBall/show":
                showFloatBox(data, id, name);
                break;
            case "floatBall/hide":
                break;
            case "screen/toLauncher":
                toLauncher(data, id, name);
                break;
            case "screen/keepOn":
                setKeepScreenOn(data, id, name);
                break;
            case "screen/orientate":
                setScreenOrientation(data, id, name);
                break;
            case "style/setStatusBar":
                setStatusBarStyle(data, id, name);
                break;
            case "style/setWin":
                break;
            case "style/setBadge":
                break;
            case "app/install":
                installApp(name, id, data);
                break;
            case "app/open":
                openApp(name, id, data);
                break;
            case "app/has":
                appInstalled(name, id, data);
                break;
            case "app/uninstall":
                break;
            case "app/reboot":
                break;
            case "memory/clearCache":
                clearCache(name, id, data);
                break;
            case "memory/getCache":
                getCacheSize(name, id, data);
                break;
            case "memory/getTotal":
                getTotalSpace(name, id, data);
                break;
            case "memory/getFree":
                getFreeDiskSpace(name, id, data);
                break;
            case "notification/add":
                notification(name, id, data);
                break;
            case "notification/remove":
                cancelNotification(name, id, data);
                break;
            case "system/contacts":
                openContacts(data, id, name);
                break;
            case "system/sms":
                sms(name, id, data);
                break;
            case "system/mail":
                mail(name, id, data);
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

    private void debuggerEvent(String eventName) {
        setEmitData(1, "模拟debugger事件", null);
        send(eventName, getEmitData());
    }

    private void removeEvent(String eventName, int id) {
        if (null != mEventRegisterMap && CheckUtil.isNotEmpty(eventName) && mEventRegisterMap.containsKey(eventName)) {
            mEventRegisterMap.remove(eventName);
            setEmitData(1, eventName + "移除成功", null);
            mWebView.send(id, getEmitData());
        }
    }

    /**
     * 联系人
     *
     * @param data
     * @param id
     * @param name
     */
    private void openContacts(String data, int id, String name) {
        mEventMap.put(name, id);

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
        setEmitData(1, "响应成功", contactsBean);
        send(name, getEmitData());
    }

    private void showFloatBox(String data, int id, String name) {
        mEventMap.put(name, id);
        startFloat();
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    private void startFloat() {
        if (PermissionUtil.hasPermission(mContext)) {
            IFloatWindow old = FloatWindow.get("old");
            if (old == null) {
                IFloatWindow cancel2 = FloatWindow.get("cancel2");
                if (cancel2 == null) {
                    FloatWindow
                            .with(mContext.getApplicationContext())
                            .setTag("cancel2")
                            .setView(R.layout.layout_window)
                            .setCancelParam2(320)
                            .setMoveType(MoveType.inactive, 0, 0)
                            .setDesktopShow(false)
                            .build();
                }
                IFloatWindow cancel = FloatWindow.get("cancel");
                if (cancel == null) {
                    FloatWindow
                            .with(mContext.getApplicationContext())
                            .setTag("cancel")
                            .setView(R.layout.layout_window)
                            .setCancelParam2(300)
                            .setMoveType(MoveType.inactive, 0, 0)
                            .setDesktopShow(false)
                            .build();
                }

                ImageView imageView = new ImageView(mContext);
                RequestOptions requestOptions = RequestOptions.circleCropTransform();
                Glide.with(mContext.getApplicationContext())
                        .load("http://pic43.nipic.com/20140711/19187786_140828149528_2.jpg")
                        .apply(requestOptions).into(imageView);

                FloatWindow
                        .with(mContext.getApplicationContext())
                        .setTag("old")
                        .setView(imageView)
                        .setMoveType(MoveType.slide, 0, 0)
                        .setWidth(60)
                        .setFilter(false, mContext.getClass())
                        .setHeight(60)
                        .setX(Screen.width, 0.8f)
                        .setY(ScreenUtil.getScreenHeight(mContext) / 3)
                        .setParentHeight(ScreenUtil.getScreenHeight(mContext))
                        .setMoveStyle(300, new AccelerateInterpolator())
                        .setDesktopShow(false)
                        .build();
                imageView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        v.getContext().startActivity(new Intent(mContext.getApplicationContext(), mContext.getClass()));
                    }
                });
                mContext.finish();
            } else {
                mContext.finish();
            }
        } else {
            Toast.makeText(mContext, "没有浮窗权限！", Toast.LENGTH_SHORT).show();
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
    }

    /**
     * 保持屏幕亮度
     *
     * @param data
     * @param id
     * @param name
     */
    private void setKeepScreenOn(String data, int id, String name) {
        boolean keepOn = false;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            keepOn = jsonObject.getBoolean("keepOn");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        mEventMap.put(name, id);
        if (keepOn) {
            mContext.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        }
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    private void getPicture(String data, int id, String name) {
        mEventMap.put(name, id);
        mPictureBean = new Gson().fromJson(data.replaceAll("\\\\", ""), PictureBean.class);
//		PictureBean pictureBean = new PictureBean();
        saveToPhotoAlbum = mPictureBean.isSaveToPhotoAlbum();
        if ("camera".equals(mPictureBean.getSourceType())) {
            switch (mPictureBean.getMediaValue()) {
                case "pic":
                    Intent intent = new Intent(mContext, CameraActivity.class);
                    intent.putExtra("state", WYACameraView.BUTTON_STATE_ONLY_CAPTURE);
                    intent.putExtra("duration", 1000);
                    intent.putExtra("direction", mPictureBean.isDirection());
                    intent.putExtra("videoQuality", mPictureBean.getVideoQuality());
                    mContext.startActivityForResult(intent, CAMERA_PIC_REQUEST);
                    break;
                case "video":
                    Intent intent2 = new Intent(mContext, CameraActivity.class);
                    intent2.putExtra("state", WYACameraView.BUTTON_STATE_ONLY_RECORDER);
                    intent2.putExtra("duration", 10000);
                    intent2.putExtra("direction", mPictureBean.isDirection());
                    intent2.putExtra("videoQuality", mPictureBean.getVideoQuality());
                    mContext.startActivityForResult(intent2, CAMERA_VIDEO_REQUEST);
                    break;
                default:
                    break;
            }
        } else {

            switch (mPictureBean.getMediaValue()) {
                case "pic":
                    ImagePickerCreator
                            .create(mContext)
                            .setMediaType(PickerConfig.MEDIA_IMAGE)
                            .maxImages(1)
                            .forResult(ALBUM_PIC_REQUEST);
                    break;
                case "video":
                    ImagePickerCreator
                            .create(mContext)
                            .setMediaType(PickerConfig.MEDIA_VIDEO)
                            .maxImages(1)
                            .forResult(ALBUM_VIDEO_REQUEST);
                    break;
                default:
                    break;
            }
        }

    }

    /**
     * 保存图片或视频
     *
     * @param data
     * @param id
     * @param name
     */
    private void savePicture(String data, int id, String name) {
        //参数残缺，缺少判断是否是图片的字段
        String url = null;
        String groupName = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            url = jsonObject.getString("url");
            groupName = jsonObject.getString("groupName");
        } catch (JSONException e) {
            e.printStackTrace();
        }

//		"http://pic43.nipic.com/20140711/19187786_140828149528_2.jpg"
//		Environment.getExternalStorageDirectory().getPath() + "/Recordings/test.jpg"
        mEventMap.put(name, id);
        mFileManagerUtil = new FileManagerUtil();
        mFileManagerUtil.getDownloadReceiver().
                load(url).
                setFilePath(groupName).start();
        mFileManagerUtil.setOnDownLoaderListener(new FileManagerUtil.OnDownLoaderListener() {
            @Override
            public void onDownloadState(int state, DownloadTask task, Exception e) {
                if (state == TASK_COMPLETE) {
                    setEmitData(1, "响应成功", null);
                    send(name, getEmitData());
                } else if (state == TASK_FAIL) {
                    Toast.makeText(mContext, "无效的地址,无法保存", Toast.LENGTH_SHORT).show();
                }
            }
        });

    }

    /**
     * 设置状态栏颜色
     *
     * @param data
     * @param id
     * @param name
     */
    private void setStatusBarStyle(String data, int id, String name) {
        String color = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            color = jsonObject.getString("color");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        mEventMap.put(name, id);
        StatusBarUtil.setColor(mContext, Color.parseColor(color));
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 设置屏幕旋转方向
     *
     * @param data
     * @param id
     * @param name
     */
    private void setScreenOrientation(String data, int id, String name) {
        mEventMap.put(name, id);
        String orientation = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            orientation = jsonObject.getString("orientation");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        switch (orientation) {
            case "portraitUp":
            case "portraitDown":
                mContext.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                break;
            case "landscapeLeft":
            case "landscapeRight":
                mContext.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
                break;
            default:
                break;
        }
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 回到手机桌面
     *
     * @param data
     * @param id
     * @param name
     */
    private void toLauncher(String data, int id, String name) {
        mEventMap.put(name, id);
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_MAIN);
        intent.addCategory(Intent.CATEGORY_HOME);
        mContext.startActivity(intent);
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 打开系统视频播放器
     *
     * @param data
     * @param id
     * @param name
     */
    private void openVideo(String data, int id, String name) {
        mEventMap.put(name, id);
        String url = "";
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            url = jsonObject.getString("url");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        if (url.startsWith("http://") || url.startsWith("https://")) {

            String extension = MimeTypeMap.getFileExtensionFromUrl(url);
            String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension);
            Intent mediaIntent = new Intent(Intent.ACTION_VIEW);
            mediaIntent.setDataAndType(Uri.parse(url), mimeType);
            mContext.startActivity(mediaIntent);
        } else {
            Uri uri;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                uri = FileProvider.getUriForFile(mContext, mContext.getPackageName() + ".fileprovider", new File(url));
            } else {
                uri = Uri.fromFile(new File(url));
            }
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(uri, "video/*");
            mContext.startActivity(intent);
        }

        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 开始录音
     */
    private void startRecording(String data, int id, String name) {
        mEventMap.put(name, id);
        String path = null;
        try {
            JSONObject jsonObject = new JSONObject(data);
            path = jsonObject.getString("url");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        path = TextUtils.isEmpty(path) ? "/storage/emulated/0/Recordings/" + System.currentTimeMillis() + ".amr"
                : path + System.currentTimeMillis() + ".amr";

        mRecorder = new MediaRecorder();
        mRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);
        //设置封装格式
        mRecorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        mRecorder.setOutputFile(path);
        //设置编码格式
        mRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);

        try {
            mRecorder.prepare();
        } catch (IOException e) {
//			Log.e(TAG, "prepare() failed");
        }
        //录音
        mRecorder.start();

        recordPath = path;
        RecordBean recordBean = new RecordBean();
        recordBean.setPath(path);
        setEmitData(1, "响应成功", recordBean);
        send(name, getEmitData());
    }

    /**
     * 停止录音
     */
    private void stopRecording(String data, int id, String name) {
        if (mRecorder == null) {
            return;
        }
        mEventMap.put(name, id);
        mRecorder.stop();
        mRecorder.release();
        mRecorder = null;
        MediaPlayer mediaPlayer = new MediaPlayer();
        try {
            mediaPlayer.setDataSource(recordPath);
            mediaPlayer.prepare();
        } catch (IOException e) {
            e.printStackTrace();
        }
        int duration = mediaPlayer.getDuration();

        RecordBean recordBean = new RecordBean();
        recordBean.setPath(recordPath);
        recordBean.setDuration(duration);
        setEmitData(1, "响应成功", recordBean);
        send(name, getEmitData());
    }

    /**
     * 停止播放本地音频
     */
    private void stopPlay(String data, int id, String name) {
        if (mMediaPlayer == null) {
            return;
        }
        mEventMap.put(name, id);
        mMediaPlayer.stop();
        mMediaPlayer.release();
        mMediaPlayer = null;
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 播放本地音频
     */
    private void startPlay(String data, int id, String name) {
        mEventMap.put(name, id);
        String path = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            path = jsonObject.getString("path");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        mMediaPlayer = new MediaPlayer();
        try {
            mMediaPlayer.setDataSource(path);
            mMediaPlayer.prepareAsync();
            mMediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    mMediaPlayer.start();
                }
            });
        } catch (Exception e) {
            Toast.makeText(mContext, "无效的音频地址", Toast.LENGTH_SHORT).show();
            e.printStackTrace();
        }
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 发送邮件
     *
     * @param name
     * @param id
     * @param data
     */
    private void mail(String name, int id, String data) {
        mEventMap.put(name, id);
        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:"));
        intent.putExtra(Intent.EXTRA_SUBJECT, "");
        intent.putExtra(Intent.EXTRA_TEXT, "");
        mContext.startActivity(intent);
        setEmitData(1, "响应成功", null);
        send(name, getEmitData());
    }

    /**
     * 发送短信
     *
     * @param name
     * @param id
     * @param data
     */
    private void sms(String name, int id, String data) {
        mEventMap.put(name, id);
        sms = new Gson().fromJson(data, Sms.class);
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
            setEmitData(1, "响应成功", null);
            send(name, getEmitData());
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

    /**
     * 取消通知
     *
     * @param name
     * @param id
     * @param data
     */
    private void cancelNotification(String name, int id, String data) {
        mEventMap.put(name, id);
        Intent intent = new Intent(mContext, AlarmReceiver.class);
        PendingIntent pi = PendingIntent.getBroadcast(mContext, id, intent, FLAG_UPDATE_CURRENT);
        AlarmManager am = (AlarmManager) mContext.getSystemService(ALARM_SERVICE);
        am.cancel(pi);
        setEmitData(1, "取消通知" + id + "成功", null);
        send(name, getEmitData());
    }

    /**
     * 设置通知
     *
     * @param name
     * @param id
     * @param data
     */
    private void notification(String name, int id, String data) {
        mEventMap.put(name, id);
        mNotificationData = new Gson().fromJson(data, NotificationData.class);
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
            setEmitData(1, "响应成功", notificationEmit);
            send(name, getEmitData());
        }
    }

    /**
     * `
     * 获取剩余存储空间
     *
     * @param name
     * @param id
     * @param data
     */
    private void getFreeDiskSpace(String name, int id, String data) {
        mEventMap.put(name, id);
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getType() != null && !mCacheData.getType().equals("")) {
            long freeDiskSpace = 0;
            SpaceData freeDiskSpaceData = new SpaceData();
            switch (mCacheData.getType()) {
                case "dataDir":
                    freeDiskSpace = getAvailableInternalMemorySize(mContext);
                    freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                    freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                    setEmitData(1, "响应成功", freeDiskSpaceData);
                    send(name, getEmitData());
                    break;
                case "storageDir":
                    if (isExternalStorageAvailable()) {
                        freeDiskSpace = getAvailableExternalMemorySize(mContext);
                        freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                        freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                        setEmitData(1, "响应成功", freeDiskSpaceData);
                        send(name, getEmitData());
                    } else {
                        setEmitData(0, "SD卡异常", null);
                        send(name, getEmitData());
                    }
                    break;
                case "total":
                    freeDiskSpace = getAvailableExternalMemorySize(mContext) + getAvailableInternalMemorySize(mContext);
                    freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                    freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                    setEmitData(1, "响应成功", freeDiskSpaceData);
                    send(name, getEmitData());
                    break;
                default:
                    break;
            }
        } else {
            setEmitData(0, "路径错误", null);
            send(name, getEmitData());
        }
    }

    /**
     * 获取总存储空间大小
     *
     * @param name
     * @param id
     * @param data
     */
    private void getTotalSpace(String name, int id, String data) {
        mEventMap.put(name, id);
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getType() != null && !mCacheData.getType().equals("")) {
            long totalSpace = 0;
            SpaceData totalSpaceData = new SpaceData();
            switch (mCacheData.getType()) {
                case "dataDir":
                    totalSpace = getInternalMemorySize(mContext);
                    totalSpaceData.setSize(String.valueOf(totalSpace));
                    totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));
                    setEmitData(1, "响应成功", totalSpaceData);
                    send(name, getEmitData());
                    break;
                case "storageDir":
                    if (isExternalStorageAvailable()) {
                        totalSpace = getExternalMemorySize(mContext);
                        totalSpaceData.setSize(String.valueOf(totalSpace));
                        totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));
                        setEmitData(1, "响应成功", totalSpaceData);
                        send(name, getEmitData());
                    } else {
                        setEmitData(0, "SD卡异常", null);
                        send(name, getEmitData());
                    }
                    break;
                case "total":
                    totalSpace = getExternalMemorySize(mContext) + getInternalMemorySize(mContext);
                    totalSpaceData.setSize(String.valueOf(totalSpace));
                    totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));
                    setEmitData(1, "响应成功", totalSpaceData);
                    send(name, getEmitData());
                    break;
                default:
                    break;
            }
        } else {
            setEmitData(0, "路径错误", null);
            send(name, getEmitData());
        }
    }

    /**
     * 判断sd卡是否可用
     */
    private boolean isExternalStorageAvailable() {
        return Environment.getExternalStorageState().equals(
                Environment.MEDIA_MOUNTED);
    }

    /**
     * 获取手机内部存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    private long getInternalMemorySize(Context context) {
        File file = Environment.getDataDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long blockSizeLong = statFs.getBlockSizeLong();
        long blockCountLong = statFs.getBlockCountLong();
        long size = blockCountLong * blockSizeLong;
        return size;
    }

    /**
     * 获取手机内部可用存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    private long getAvailableInternalMemorySize(Context context) {
        File file = Environment.getDataDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long availableBlocksLong = statFs.getAvailableBlocksLong();
        long blockSizeLong = statFs.getBlockSizeLong();
        long size = availableBlocksLong * blockSizeLong;
        return size;
    }

    /**
     * 获取手机外部存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    public long getExternalMemorySize(Context context) {
        File file = Environment.getExternalStorageDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long blockSizeLong = statFs.getBlockSizeLong();
        long blockCountLong = statFs.getBlockCountLong();
        long size = blockSizeLong * blockCountLong;
        return size;
    }

    /**
     * 获取手机外部可用存储空间
     *
     * @param context
     * @return 以B单位的容量
     */
    private long getAvailableExternalMemorySize(Context context) {
        File file = Environment.getExternalStorageDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long availableBlocksLong = statFs.getAvailableBlocksLong();
        long blockSizeLong = statFs.getBlockSizeLong();
        long size = blockSizeLong * availableBlocksLong;
        return size;
    }

    /**
     * 获取缓存占用空间大小
     *
     * @param name
     * @param id
     * @param data
     */
    private void getCacheSize(String name, int id, String data) {
        mEventMap.put(name, id);
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getPath() != null && !mCacheData.getPath().equals("")) {
            File file = new File(mCacheData.getPath());
            if (file.exists()) {
                long size = DataCleanUtil.getFolderSize(file);
                setEmitData(1, "响应成功", null);
                send(name, getEmitData());
            } else {
                setEmitData(0, "文件不存在", null);
                send(name, getEmitData());
            }
        } else {
            setEmitData(0, "路径错误", null);
            send(name, getEmitData());
        }
    }

    /**
     * 清理缓存
     *
     * @param name
     * @param id
     * @param data
     */
    private void clearCache(String name, int id, String data) {
        mEventMap.put(name, id);
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getPath() != null && !mCacheData.getPath().equals("")) {
            DataCleanUtil.cleanCustomCache(mCacheData.getPath());
            setEmitData(1, "响应成功", null);
            send(name, getEmitData());
        } else {
            setEmitData(0, "路径错误", null);
            send(name, getEmitData());
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
        mInstalledAppData = new Gson().fromJson(data, InstalledData.class);
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
        } else {
            setEmitData(0, "响应失败", null);
            send(name, getEmitData());
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
        mFileManagerUtil = new FileManagerUtil();
        if (mInstallAppData != null && mInstallAppData.getUrl() != null && !mInstallAppData.getUrl().equals("") && mInstallAppData.getUrl().contains(".apk")) {
            String fileName = mInstallAppData.getUrl().split("/")[mInstallAppData.getUrl().split("/").length - 1];
            mFileManagerUtil.getDownloadReceiver().load(mInstallAppData.getUrl()).setFilePath(fileRootPath + "/" + fileName).start();
            mFileManagerUtil.setOnDownLoaderListener(new FileManagerUtil.OnDownLoaderListener() {
                @Override
                public void onDownloadState(int state, DownloadTask task, Exception e) {
                    if (state == TASK_COMPLETE) {
                        installAPK(fileRootPath + "/" + fileName);
                        setEmitData(1, "响应成功", null);
                        send(name, getEmitData());
                    } else if (state == TASK_FAIL) {
                        setEmitData(0, "下载失败", null);
                        send(name, getEmitData());
                    }
                }
            });
        } else {
            setEmitData(0, "下载地址不正确", null);
            send(name, getEmitData());
        }
    }

    /**
     * 下载到本地后执行安装
     */
    private void installAPK(String filePath) {
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
    private void pop(String name, int id, String data) {
        mEventMap.put(name, id);
        mCloseWinData = new Gson().fromJson(data, CloseWinData.class);
        boolean success;
        if (mCloseWinData != null && mCloseWinData.getName() != null && !mCloseWinData.getName().equals("")) {
            success = ActivityManager.getInstance().closeToWinByName(mCloseWinData);
        } else {
            success = ActivityManager.getInstance().finishTopActivity();
        }
        if (success) {
            setEmitData(1, "响应成功", null);
        } else {
            setEmitData(0, "响应失败", null);
        }
        send(name, getEmitData());
    }

    /**
     * 打开新页面
     *
     * @param name
     * @param id
     * @param data
     */
    private void push(String name, int id, String data) {
        mEventMap.put(name, id);
        mOpenWinData = new Gson().fromJson(data, OpenWinData.class);
        if (mOpenWinData != null && mOpenWinData.getName() != null && !mOpenWinData.getName().equals("")) {
            Intent intent = new Intent(mContext, OpenWinActivity.class);
            intent.putExtra("mOpenWinData", mOpenWinData);
            mContext.startActivity(intent);
            if (mOpenWinData.getAnimation() != null) {
                if (mOpenWinData.getAnimation().equals("card")) {
                    mContext.overridePendingTransition(R.anim.card_anim_enter, R.anim.card_anim_exit);
                } else if (mOpenWinData.getAnimation().equals("modal")) {
                    mContext.overridePendingTransition(R.anim.modal_anim_enter, R.anim.modal_anim_exit);
                }
            }
            if (mOpenWinData.isReplace()) {
                mContext.finish();
            }
            setEmitData(1, "响应成功", null);
            send(name, getEmitData());
        } else {
            setEmitData(0, "参数错误", null);
            send(name, getEmitData());
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case CAMERA_PIC_REQUEST:
                if (resultCode == RESULT_OK) {
                    String path = data.getStringExtra("path");

                    if (saveToPhotoAlbum) {
                        final File file = new File(path);
                        mContext.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
                    }

                    ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                    ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                    pictureUrl.setUrl(saveTransferImage(path));
                    List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                    list.add(pictureUrl);
                    returnPictureBean.setList(list);
                    setEmitData(1, "响应成功", returnPictureBean);
                    send("getPicture", getEmitData());
                }
                break;
            case CAMERA_VIDEO_REQUEST:
                if (resultCode == RESULT_OK) {
                    String path = data.getStringExtra("url");
                    if (saveToPhotoAlbum) {
                        final File file = new File(path);
                        mContext.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
                    }
                    ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                    ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                    pictureUrl.setUrl(path);
                    MediaMetadataRetriever metadataRetriever = new MediaMetadataRetriever();
                    metadataRetriever.setDataSource(path);
                    String duration = metadataRetriever.extractMetadata(android.media.MediaMetadataRetriever
                            .METADATA_KEY_DURATION);
                    pictureUrl.setDuration(Long.parseLong(duration));
                    metadataRetriever.release();
                    List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                    list.add(pictureUrl);
                    returnPictureBean.setList(list);
                    setEmitData(1, "响应成功", returnPictureBean);
                    send("getPicture", getEmitData());
                }
                break;
            case ALBUM_PIC_REQUEST:
                if (resultCode == RESULT_OK) {
                    if (data != null && data.hasExtra(PickerConfig.IMAGE_SELECTED)) {
                        Bundle extras = data.getExtras();
                        ArrayList<String> lists = extras.getStringArrayList(PickerConfig.IMAGE_SELECTED);

                        ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                        ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                        List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                        for (String path : lists) {
                            pictureUrl.setUrl(saveTransferImage(path));
                            list.add(pictureUrl);
                        }
                        returnPictureBean.setList(list);
                        setEmitData(1, "响应成功", returnPictureBean);
                        send("getPicture", getEmitData());
                    }
                }
                break;
            case ALBUM_VIDEO_REQUEST:
                if (resultCode == RESULT_OK) {
                    if (data != null && data.hasExtra(PickerConfig.IMAGE_SELECTED)) {
                        Bundle extras = data.getExtras();
                        ArrayList<String> lists = extras.getStringArrayList(PickerConfig.IMAGE_SELECTED);

                        ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                        ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                        List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();

                        pictureUrl.setUrl(lists.get(0));
                        list.add(pictureUrl);
                        MediaMetadataRetriever metadataRetriever = new MediaMetadataRetriever();
                        metadataRetriever.setDataSource(lists.get(0));
                        String duration = metadataRetriever.extractMetadata(android.media.MediaMetadataRetriever
                                .METADATA_KEY_DURATION);
                        pictureUrl.setDuration(Long.parseLong(duration));
                        metadataRetriever.release();
                        returnPictureBean.setList(list);
                        setEmitData(1, "响应成功", returnPictureBean);
                        send("getPicture", getEmitData());
                    }
                }
                break;
            default:
                break;
        }
    }

    private String saveTransferImage(String path) {
        String encodingType = mPictureBean.getEncodingType();
        BitmapFactory.Options newOpts = new BitmapFactory.Options();
        // 开始读入图片，此时把options.inJustDecodeBounds 设回true了
        newOpts.inJustDecodeBounds = true;
        Bitmap bitmap = BitmapFactory.decodeFile(path, newOpts);
        newOpts.inJustDecodeBounds = false;
        int w = newOpts.outWidth;
        int h = newOpts.outHeight;
        // 现在主流手机比较多是800*480分辨率，所以高和宽我们设置为
        float hh = Float.parseFloat(mPictureBean.getTargetHeight());
        float ww = Float.parseFloat(mPictureBean.getTargetWidth());
        // 缩放比。由于是固定比例缩放，只用高或者宽其中一个数据进行计算即可
        int be = 1;
        if (w > h && w > ww) {
            be = (int) (newOpts.outWidth / ww);
        } else if (w < h && h > hh) {
            be = (int) (newOpts.outHeight / hh);
        }
        if (be <= 0) {
            be = 1;
        }
        newOpts.inSampleSize = be;
        // 重新读入图片，注意此时已经把options.inJustDecodeBounds 设回false了
        bitmap = BitmapFactory.decodeFile(path, newOpts);

        String changePath = null;
        try {

            switch (encodingType) {
                case "png":
                    File file = new File(Environment.getExternalStorageDirectory().getPath() + "/Recordings/" + System.currentTimeMillis() + ".png");
                    FileOutputStream out = new FileOutputStream(file);
                    changePath = file.getPath();
                    bitmap.compress(Bitmap.CompressFormat.PNG, 100, out);
                    out.flush();
                    out.close();
                    break;
                case "jpg":
                    File file1 = new File(Environment.getExternalStorageDirectory().getPath() + "/Recordings/" + System.currentTimeMillis() + ".jpg");
                    FileOutputStream out1 = new FileOutputStream(file1);
                    changePath = file1.getPath();
                    bitmap.compress(Bitmap.CompressFormat.JPEG, mPictureBean.getQuality(), out1);
                    out1.flush();
                    out1.close();
                    break;
                default:
                    break;
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return changePath;
    }
}
