package com.wya.hybridexample.base;

import android.app.Application;
import android.content.Context;

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
    }
    
    public static BaseApp getApp() {
        return APPLICATION;
    }
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
    }
    
}
