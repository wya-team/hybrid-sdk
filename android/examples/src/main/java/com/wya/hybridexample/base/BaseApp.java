package com.wya.hybridexample.base;

import android.app.Application;
import android.content.Context;
import android.content.IntentFilter;

import com.wya.hybridexample.control.BatteryReceiver;
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
        
        // activity manager
        ActivityManager.init(this);
        
        // network
        registerNetworkReceiver();
        
        // battery
        registerBatteryReceiver();
        
        // screen
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
        IntentFilter filter = new IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
        BatteryReceiver receiver = new BatteryReceiver();
        registerReceiver(receiver, filter);
    }
    
    public void registerSreenReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(android.content.Intent.ACTION_SCREEN_ON);
        filter.addAction(android.content.Intent.ACTION_SCREEN_OFF);
        filter.addAction(android.content.Intent.ACTION_USER_PRESENT);
        ScreenReceiver receiver = new ScreenReceiver();
        registerReceiver(receiver, filter);
    }
    
    public static BaseApp getApp() {
        return APPLICATION;
    }
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }
    
}
