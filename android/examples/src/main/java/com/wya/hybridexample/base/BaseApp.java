package com.wya.hybridexample.base;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import com.wya.hybridexample.control.BatteryLevelReceiver;
import com.wya.hybridexample.control.NetworkReceiver;
import com.wya.hybridexample.control.ScreenReceiver;
import com.wya.hybridexample.util.SystemUtil;
import com.wya.hybridexample.util.log.WYALog;

/**
 * @author :
 */
public class BaseApp extends Application {
    
    private static BaseApp APPLICATION;
    
    @Override
    public void onCreate() {
        super.onCreate();
        APPLICATION = this;
        if (SystemUtil.isProcess(getApp().getPackageName())) {
            init();
        }
    }
    
    private void init() {
        // log
        WYALog.init();
        
        // network
        registerNetworkReceiver();
        registerBatteryReceiver();
        registerSreenReceiver();
    }
    
    private void registerNetworkReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
        filter.addAction("android.net.wifi.STATE_CHANGE");
        NetworkReceiver networkReceiver = new NetworkReceiver();
        registerReceiver(networkReceiver, filter);
    }
    
    private void registerBatteryReceiver() {
        IntentFilter filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        BatteryLevelReceiver receiver = new BatteryLevelReceiver();
        registerReceiver(receiver, filter);
    }
    
    public void registerSreenReceiver() {
        /**
         * 注册屏幕设备开屏/锁屏的状态监听
         */
        IntentFilter filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        filter.addAction(Intent.ACTION_SCREEN_ON);
        filter.addAction(Intent.ACTION_SCREEN_OFF);
        filter.addAction(Intent.ACTION_USER_PRESENT);
        ScreenReceiver receiver = new ScreenReceiver();
        registerReceiver(receiver, filter);
        
        //initScreenState(); //可选
    }
    
    public static BaseApp getApp() {
        return APPLICATION;
    }
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }
    
}
