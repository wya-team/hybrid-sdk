package com.wya.hybrid;

import android.graphics.Bitmap;
import android.os.Build;
import android.text.TextUtils;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.gson.Gson;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.BatteryLow;
import com.wya.hybrid.bean.KeyBack;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

/**
 * @date: 2019/1/17 10:08
 * @author: Chunjiang Mao
 * @classname: WYAWebViewClient
 * @describe: 如果要自定义WebViewClient必须要集成此类
 */
public class WYAWebViewClient extends WebViewClient {
    private WYAWebView webView;
    private Gson gson = new Gson();
    private EventManger eventManger;
    private SystemConstant systemConstant;
    
    public WYAWebViewClient(WYAWebView webView, EventManger eventManger) {
        this.webView = webView;
        this.eventManger = eventManger;
    }
    
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        try {
            url = URLDecoder.decode(url, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        if (!TextUtils.isEmpty(url) && url.startsWith(BridgeUtil.COMMAND_OVERRIDE_SCHEMA)) {
            // 假设注册了返回监听
            String id = url.split("id=")[1];
            getEvent(id, view);
            return true;
        } else {
            return this.onCustomShouldOverrideUrlLoading(url) ? true : super.shouldOverrideUrlLoading(view, url);
        }
    }
    
    /**
     * 增加shouldOverrideUrlLoading在api》=24时
     *
     * @param view
     * @param request
     * @return
     */
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            String url = request.getUrl().toString();
            try {
                url = URLDecoder.decode(url, "UTF-8");
            } catch (UnsupportedEncodingException ex) {
                ex.printStackTrace();
            }
            if (!TextUtils.isEmpty(url) && url.startsWith(BridgeUtil.COMMAND_OVERRIDE_SCHEMA)) {
                // 假设注册了返回监听
                String id = url.split("id=")[1];
                getEvent(id, view);
                return true;
            } else {
                return this.onCustomShouldOverrideUrlLoading(url) ? true : super.shouldOverrideUrlLoading(view, url);
            }
        } else {
            return super.shouldOverrideUrlLoading(view, request);
        }
    }
    
    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
    }
    
    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        BridgeUtil.webViewLoadLocalJs(view, WYAWebView.WYA_UMD_JS);
        BridgeUtil.webViewLoadLocalJs(view, WYAWebView.WYA_JS_BRIDGE_UMD_JS);
        
        systemConstant = new SystemConstant();
        systemConstant.setStatus(1);
        systemConstant.setVersion("0.1.0");
        eventManger.emit(Events.READY, systemConstant);
    }
    
    /**
     * 通过id去获取事件名
     *
     * @param id 拦截的id
     */
    private void getEvent(String id, WebView view) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            String jsString = "WYAJSBridge.getParam('" + id + "')";
            view.evaluateJavascript(jsString, new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                    if (value.contains("batteryLow")) {
                        BaseEmitData<BatteryLow> batteryLow = new BaseEmitData<>();
                        batteryLow.setData(new BatteryLow());
                        batteryLow.getData().setLevel(100);
                        batteryLow.getData().setPlugged(false);
                        eventManger.emit(Events.BATTER_LOW, batteryLow);
                    } else if (value.contains("keyBack")) {
                        BaseEmitData<KeyBack> keyBack = new BaseEmitData<>();
                        keyBack.setData(new KeyBack());
                        keyBack.getData().setKeyCode(0);
                        keyBack.getData().setLongPress(false);
                        eventManger.emit(Events.KEY_BACK, keyBack);
                    }
                }
            });
        } else {
        
        }
    }
    
    protected boolean onCustomShouldOverrideUrlLoading(String url) {
        return false;
    }
    
}
