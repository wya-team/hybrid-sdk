package com.wya.example.base;

import android.app.Application;
import android.content.Context;
import android.content.IntentFilter;

import com.wya.example.control.NetworkReceiver;
import com.wya.example.util.SystemUtil;
import com.wya.example.util.log.WYALog;

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
    }
    
    private void registerNetworkReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
        filter.addAction("android.net.wifi.STATE_CHANGE");
        NetworkReceiver networkReceiver = new NetworkReceiver();
        registerReceiver(networkReceiver, filter);
    }
    
    public static BaseApp getApp() {
        return APPLICATION;
    }
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }
    
}
