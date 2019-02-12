package com.wya.hybrid.base;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.support.multidex.MultiDex;
import android.util.Log;

import com.tencent.smtt.sdk.QbSdk;
import com.wya.hybrid.localserver.LocalServer;
import com.wya.hybrid.localserver.LocalService;
import com.wya.hybrid.util.SystemUtil;
import com.wya.hybrid.util.log.VLog;

/**
 * @author :
 */
public class BaseApp extends Application implements LocalServer.LocalServerListener {
    
    private static BaseApp APPLICATION;
    private int mLocalServerPort = -1;
    
    @Override
    public void onCreate() {
        super.onCreate();
        APPLICATION = this;
        if (SystemUtil.isProcess(getApp().getPackageName())) {
            init();
        }
    }
    
    private void init() {
        // local server
        startLocalServer();
        
        // log
        VLog.init();
        
        // activity manager
        ActivityManager.init(this);
        
        // 初始化x5内核
        initTbs();
    }
    
    private void initTbs() {
        QbSdk.PreInitCallback cb = new QbSdk.PreInitCallback() {
            
            @Override
            public void onViewInitFinished(boolean arg0) {
                // TODO Auto-generated method stub
                //x5內核初始化完成的回调，为true表示x5内核加载成功，否则表示x5内核加载失败，会自动切换到系统内核。
                Log.d("app", " onViewInitFinished is " + arg0);
            }
            
            @Override
            public void onCoreInitFinished() {
                // TODO Auto-generated method stub
            }
        };
        //x5内核初始化接口
        QbSdk.initX5Environment(getApplicationContext(), cb);
    }
    
    public static BaseApp getApp() {
        return APPLICATION;
    }
    
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
    
    private void startLocalServer() {
        Intent intent = new Intent(this, LocalService.class);
        startService(intent);
        LocalServer.Companion.setListener(this);
    }
    
    @Override
    public void onLocalServerStarted(int port) {
        mLocalServerPort = port;
    }
    
    public int getLocalServerPort() {
        return mLocalServerPort;
    }
    
    public void setLocalServerPort(int port) {
        mLocalServerPort = port;
    }
    
}
