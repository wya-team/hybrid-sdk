package com.wya.hybridexample;

import android.annotation.SuppressLint;
import android.app.KeyguardManager;
import android.content.Context;
import android.os.PowerManager;
import android.os.Vibrator;
import android.widget.Toast;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.AppIdle;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.Battery;
import com.wya.hybrid.bean.Foreground;
import com.wya.hybrid.bean.KeyBack;
import com.wya.hybrid.bean.NetState;
import com.wya.hybrid.bean.Shake;
import com.wya.hybrid.bean.TakeScreenshot;
import com.wya.hybrid.bean.VolumeDown;
import com.wya.hybrid.bean.VolumeUp;
import com.wya.hybridexample.base.BaseApp;
import com.wya.hybridexample.control.ScreenShotListenManager;
import com.wya.hybridexample.data.event.AppIdleEvent;
import com.wya.hybridexample.data.event.BatteryEvent;
import com.wya.hybridexample.data.event.ForegroundEvent;
import com.wya.hybridexample.data.event.NetEvent;
import com.wya.hybridexample.data.event.ShakeEvent;
import com.wya.hybridexample.data.sp.BatterySP;
import com.wya.hybridexample.util.CheckUtil;
import com.wya.hybridexample.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.HashMap;
import java.util.Map;

/**
 * @author :
 */
public class EventManager {
    
    private WYAWebView mWebView;
    private BaseEmitData<Object> mEmitData = new BaseEmitData<>();
    private Map<String, Integer> mEventMap;
    private boolean mIsDebugger = true;
    
    public EventManager(Context context, WYAWebView webView) {
        if (!CheckUtil.isValidate(context)) {
            return;
        }
        this.mWebView = webView;
        this.mEventMap = new HashMap<>();
        
        // event bus
        if (!EventBus.getDefault().isRegistered(this)) {
            EventBus.getDefault().register(this);
        }
        
        handleEvent(context);
        
        // shake
        SensorManagerHelper sensorManagerHelper = new SensorManagerHelper(context);
        sensorManagerHelper.setOnShakeListener(() -> onShake(context));
        
        // take screenshot
        ScreenShotListenManager manager = ScreenShotListenManager.newInstance(context);
        manager.setListener(this::onScreenshot);
        manager.startListen();
    }
    
    private void handleEvent(Context context) {
        mWebView.register("debugger", (data, id) -> {
            DebugLogger.logEvent("data = %s , id = %s", data, id);
            Toast.makeText(context, data, Toast.LENGTH_SHORT).show();
            
            if (data.contains(Battery.EVENT_BATTERY_LOW)) {
                onBatteryLow(id);
            } else if (data.contains(Battery.EVENT_BATTERY_STATUS)) {
                onBatteryStatus(id);
            } else if (data.contains(NetState.EVENT_OFFLINE)) {
                onOffline(id);
            } else if (data.contains(NetState.EVENT_ONLINE)) {
                onOnline(id);
            } else if (data.contains(Foreground.EVENT_PAUSE)) {
                onPause(id);
            } else if (data.contains(Foreground.EVENT_RESUME)) {
                onResume(id);
            } else if (data.contains(Shake.EVENT_SHAKE)) {
                onShake(id);
            } else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
                onAppIdle(id);
            } else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
                onScreenshot(id);
            } else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
                mEventMap.put(KeyBack.EVENT_KEY_BACK, id);
            } else if (data.contains(KeyBack.EVENT_KEY_BACK)) {
                mEventMap.put(KeyBack.EVENT_KEY_BACK, id);
            }
        });
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
    
    /**
     * 低电量
     *
     * @param id :
     */
    private void onBatteryLow(int id) {
        mEventMap.put(Battery.EVENT_BATTERY_LOW, id);
        Battery battery = new Battery();
        battery.setIsPlugged(BatterySP.get().isPlugged());
        battery.setLevel(BatterySP.get().getLevel());
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
        battery.setIsPlugged(BatterySP.get().isPlugged());
        battery.setLevel(BatterySP.get().getLevel());
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
        if (null != data) {
            mEmitData.setData(data);
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
                DebugLogger.logEvent("EventManager .[debugger true] id = %s, emitData = %s", id, emitData);
            }
        } else {
            mWebView.send(event, emitData);
            DebugLogger.logEvent("EventManager .[debugger false] event = %s, emitData = %s", event, emitData);
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
        mWebView.send(VolumeDown.EVENT_VOLUME_DOWN, getEmitData());
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
        mWebView.send(VolumeUp.EVENT_VOLUME_UP, getEmitData());
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
}
