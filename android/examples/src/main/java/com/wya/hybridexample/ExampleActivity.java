package com.wya.hybridexample;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ProgressBar;

import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebView;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.localserver.LocalServer;
import com.wya.hybrid.localserver.LocalService;
import com.wya.hybridexample.base.ActivityManager;
import com.wya.hybridexample.control.BatteryReceiver;
import com.wya.hybridexample.control.NetworkReceiver;
import com.wya.hybridexample.control.ScreenReceiver;
import com.wya.hybridexample.data.event.ForegroundEvent;
import com.wya.hybridexample.data.sp.ForegroundStateSP;
import com.wya.hybridexample.permission.PermissionCallback;
import com.wya.hybridexample.permission.PermissionCheck;
import com.wya.hybridexample.util.CheckUtil;
import com.wya.hybridexample.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity implements PermissionCallback, LocalServer.LocalServerListener {
    private static String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";
    private static final int PROGRESS_MAX = 100;
    
    private WYAWebView mWebView;
    private ProgressBar progressBar;
    private EventManager mEventManager;
    
    /**
     * permission
     */
    protected PermissionCheck permissionHelper;
    
    private static String[] REQUEST_PERMISSIONS = new String[]{
            android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
            android.Manifest.permission.READ_PHONE_STATE,
            android.Manifest.permission.DISABLE_KEYGUARD
    };
    
    private boolean mIsFromBackground = false;
    private NetworkReceiver mNetworReceiver;
    private BatteryReceiver mBatteryReceiver;
    private ScreenReceiver mScreenReceiver;
    
    private void checkPermission() {
        permissionHelper.request(REQUEST_PERMISSIONS);
    }
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_example);
        
        // local server
        Intent intent = new Intent(this, LocalService.class);
        LocalServer.setListener(this);
        startService(intent);
        
        registerNetworkReceiver();
        registerBatteryReceiver();
        registerSreenReceiver();
        permissionHelper = PermissionCheck.getInstance(this);
        checkPermission();
        
        // webView
        mWebView = findViewById(R.id.webView);
        
        // event manager
        mEventManager = new EventManager(this, mWebView);
        
        setProgress();
    }
    
    /**
     * 设置网页加载进度条
     */
    private void setProgress() {
        progressBar = findViewById(R.id.progress_bar);
        mWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress != PROGRESS_MAX) {
                    progressBar.setProgress(newProgress);
                    progressBar.setVisibility(View.VISIBLE);
                } else {
                    progressBar.setVisibility(View.GONE);
                }
            }
        });
    }
    
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        permissionHelper.onActivityForResult(requestCode);
    }
    
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        permissionHelper.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    
    @Override
    public void onPermissionGranted(PermissionCheck permissionCheck, String[] strings) {
        // TODO: 2019/1/19 ZCQ TEST
    }
    
    @Override
    public void onPermissionDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
        // TODO: 2019/1/19 ZCQ TEST
    }
    
    @Override
    public void onPermissionNeedExplanation(PermissionCheck permissionCheck, final String permissionName) {
        // TODO: 2019/1/19 ZCQ TEST
    }
    
    @Override
    public void onPermissionReallyDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
        // TODO: 2019/1/19 ZCQ TEST
    }
    
    @Override
    protected void onResume() {
        super.onResume();
        if (ActivityManager.getInstance().isForeground() && mIsFromBackground) {
            DebugLogger.logEvent("onResume ... ");
            mIsFromBackground = false;
            ForegroundStateSP.get().setIsResume(true);
            ForegroundStateSP.get().setIsPause(false);
            
            ForegroundEvent event = new ForegroundEvent();
            event.setPause(false);
            event.setResume(true);
            EventBus.getDefault().post(event);
        }
    }
    
    @Override
    public void onStop() {
        super.onStop();
        if (!ActivityManager.getInstance().isForeground()) {
            DebugLogger.logEvent("onStop ... ");
            
            mIsFromBackground = true;
            ForegroundStateSP.get().setIsPause(true);
            ForegroundStateSP.get().setIsResume(false);
            
            ForegroundEvent event = new ForegroundEvent();
            event.setPause(true);
            event.setResume(false);
            EventBus.getDefault().post(event);
        }
    }
    
    @Override
    protected void onDestroy() {
        super.onDestroy();
        // event manager
        if (null != mEventManager) {
            mEventManager.release();
        }
        
        unRegisterReceiver(this, mNetworReceiver);
        unRegisterReceiver(this, mBatteryReceiver);
        unRegisterReceiver(this, mScreenReceiver);
    }
    
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        switch (keyCode) {
            case KeyEvent.KEYCODE_BACK:
                mEventManager.keyBack(keyCode);
                return super.onKeyDown(keyCode, event);
            case KeyEvent.KEYCODE_VOLUME_UP:
                mEventManager.volumeUp(keyCode);
                return super.onKeyDown(keyCode, event);
            case KeyEvent.KEYCODE_VOLUME_DOWN:
                mEventManager.volumeDown(keyCode);
                return super.onKeyDown(keyCode, event);
            case KeyEvent.KEYCODE_MENU:
                return super.onKeyDown(keyCode, event);
            default:
                break;
        }
        return super.onKeyDown(keyCode, event);
    }
    
    private void registerNetworkReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
        filter.addAction("android.net.wifi.STATE_CHANGE");
        if (null == mNetworReceiver) {
            mNetworReceiver = new NetworkReceiver();
        }
        registerReceiver(mNetworReceiver, filter);
    }
    
    private void registerBatteryReceiver() {
        IntentFilter filter = new IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
        if (null == mBatteryReceiver) {
            mBatteryReceiver = new BatteryReceiver();
        }
        registerReceiver(mBatteryReceiver, filter);
    }
    
    public void registerSreenReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(android.content.Intent.ACTION_SCREEN_ON);
        filter.addAction(android.content.Intent.ACTION_SCREEN_OFF);
        filter.addAction(android.content.Intent.ACTION_USER_PRESENT);
        if (null == mScreenReceiver) {
            mScreenReceiver = new ScreenReceiver();
        }
        registerReceiver(mScreenReceiver, filter);
    }
    
    private void unRegisterReceiver(Context context, BroadcastReceiver receiver) {
        if (!CheckUtil.isValidate(context) || null == receiver) {
            return;
        }
        context.unregisterReceiver(receiver);
    }
    
    @Override
    public void onLocalServerStarted(int port) {
        if (-1 != port) {
            HTML_PATH = "http://localhost:" + port;
        }
        Log.e("ZCQ", "[ExampleActivity] [onLocalServerStarted] HTML_PATH = " + HTML_PATH);
        if (null != mWebView) {
            mWebView.loadUrl(HTML_PATH);
        }
    }
    
}
