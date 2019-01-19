package com.wya.hybrid;

import android.content.Context;
import android.os.Build;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.InitBean;
import com.wya.utils.utils.AppUtil;
import com.wya.utils.utils.PhoneUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * @date: 2019/1/17 10:05
 * @author: Chunjiang Mao
 * @classname: WYAWebView
 * @describe:
 */
public class WYAWebView extends WebView {
    private Map<String, JsCallBack> taskMap = new HashMap<>();
    private BaseEmitData<InitBean> baseEmitData;
    private Context mContext;
    
    public WYAWebView(Context context) {
        super(context);
        mContext = context;
        init();
    }
    
    public WYAWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
        init();
    }
    
    public WYAWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        mContext = context;
        init();
    }
    
    private void init() {
        this.setVerticalScrollBarEnabled(false);
        this.setHorizontalScrollBarEnabled(false);
        this.getSettings().setJavaScriptEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            WebView.setWebContentsDebuggingEnabled(true);
        }
        this.setWebViewClient(wyaWebViewClient());
        this.setWebChromeClient(wyaWebChromeClient());
        initData();
    }
    
    private void initData() {
        baseEmitData = new BaseEmitData<>();
        InitBean initBean = new InitBean();
        initBean.setAppId(AppUtil.getPackageName(mContext));
        initBean.setAppName(AppUtil.getAppName(mContext));
        initBean.setAppVersion(AppUtil.getVersionName(mContext));
        initBean.setSystemType("android");
        initBean.setSystemVersion(PhoneUtil.getInstance().getSDKVersion());
        // TODO: 2019/1/19 ZCQ TEST
        //        initBean.setDeviceId(PhoneUtil.getInstance().getPhoneImei(mContext));
        initBean.setDeviceModel(PhoneUtil.getInstance().getPhoneModel());
        initBean.setDeviceName(TextUtils.isEmpty(android.os.Build.DEVICE) ? "" : android.os.Build.DEVICE);
        initBean.setUiMode(PhoneUtil.getInstance().isTablet(mContext) ? "pad" : "phone");
        initBean.setOperatorName("移动");
        initBean.setConnectionType("4g");
        initBean.setScreenWidth(PhoneUtil.getInstance().getPhoneWidth(mContext));
        initBean.setScreenHeight(PhoneUtil.getInstance().getPhoneHeight(mContext));
        baseEmitData.setData(initBean);
    }
    
    private WYAWebChromeClient wyaWebChromeClient() {
        return new WYAWebChromeClient(this);
    }
    
    private WYAWebViewClient wyaWebViewClient() {
        return new WYAWebViewClient(this);
    }
    
    public <T> void send(String name, T t) {
        name = "'" + name + "'";
        BaseEmitData<T> result = new BaseEmitData<>();
        result.setData(t);
        BridgeUtil.loadJsUrl(this, name, new Gson().toJson(result));
    }
    
    public <T> void send(int id, T t) {
        BaseEmitData<T> result = new BaseEmitData<>();
        result.setData(t);
        BridgeUtil.loadJsUrl(this, String.valueOf(id), new Gson().toJson(result));
    }
    
    public void register(String name, JsCallBack callBack) {
        taskMap.put(name, callBack);
    }
    
    public void unRegister() {
        taskMap.clear();
        taskMap = null;
    }
    
    public void handlerReturnData(String url) {
        String[] split = url.split("[?]");
        String name = split[0];
        JsCallBack callBack = taskMap.get(name);
        if (callBack != null) {
            String id = split[1].replace("id=", BridgeUtil.EMPTY);
            BridgeUtil.getParam(this, id, callBack);
        }
    }
    
    public BaseEmitData<InitBean> getBaseEmitData() {
        return baseEmitData;
    }
    
    public void setBaseEmitData(BaseEmitData<InitBean> baseEmitData) {
        this.baseEmitData = baseEmitData;
    }
}
