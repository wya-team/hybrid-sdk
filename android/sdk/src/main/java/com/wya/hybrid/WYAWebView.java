package com.wya.hybrid;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.AttributeSet;

import com.google.gson.Gson;
import com.tencent.smtt.sdk.WebSettings;
import com.tencent.smtt.sdk.WebView;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.InitBean;
import com.wya.utils.utils.AppUtil;
import com.wya.utils.utils.LogUtil;
import com.wya.utils.utils.NetworkUtil;
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
	private Activity mContext;

	private HybridManager mHybridManager;

	public WYAWebView(Context context) {
		super(context);
		mContext = (Activity) context;
		init();
	}

	public WYAWebView(Context context, AttributeSet attrs) {
		super(context, attrs);
		mContext = (Activity) context;
		init();
	}

	public WYAWebView(Context context, AttributeSet attrs, int defStyleAttr) {
		super(context, attrs, defStyleAttr);
		mContext = (Activity) context;
		init();
	}

	private void init() {
		mHybridManager = new HybridManager(mContext, this);
		this.setVerticalScrollBarEnabled(false);
		this.setHorizontalScrollBarEnabled(false);
		WebSettings webSetting = this.getSettings();
		webSetting.setJavaScriptEnabled(true);
		webSetting.setJavaScriptCanOpenWindowsAutomatically(true);
		webSetting.setAllowFileAccess(true);
		webSetting.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
		webSetting.setSupportZoom(true);
		webSetting.setBuiltInZoomControls(true);
		webSetting.setUseWideViewPort(true);
		webSetting.setSupportMultipleWindows(true);
		webSetting.setAppCacheEnabled(true);
		webSetting.setDomStorageEnabled(true);
		webSetting.setGeolocationEnabled(true);
		webSetting.setAppCacheMaxSize(Long.MAX_VALUE);
		webSetting.setPluginState(WebSettings.PluginState.ON_DEMAND);
		webSetting.setCacheMode(WebSettings.LOAD_NO_CACHE);

		this.setWebViewClient(wyaWebViewClient());
		initData();
	}

	public void initData() {
		baseEmitData = new BaseEmitData<>();
		InitBean initBean = new InitBean();
		initBean.setAppId(AppUtil.getPackageName(mContext));
		initBean.setAppName(AppUtil.getAppName(mContext));
		initBean.setAppVersion(AppUtil.getVersionName(mContext));
		initBean.setSystemType("android");
		initBean.setSystemVersion(PhoneUtil.getInstance().getSDKVersion());
		if (ContextCompat.checkSelfPermission(mContext, Manifest.permission.READ_PHONE_STATE) == PackageManager.PERMISSION_GRANTED) {
			initBean.setDeviceId(PhoneUtil.getInstance().getPhoneImei(mContext));
			initBean.setDeviceModel(PhoneUtil.getInstance().getPhoneModel());
			initBean.setOperatorName(PhoneUtil.getOperator(mContext));
		}
		initBean.setDeviceName(TextUtils.isEmpty(android.os.Build.DEVICE) ? "" : android.os.Build.DEVICE);
		initBean.setUiMode(PhoneUtil.getInstance().isTablet(mContext) ? "pad" : "phone");
		initBean.setConnectionType(NetworkUtil.getNetworkState(mContext));
		initBean.setScreenWidth(PhoneUtil.getInstance().getPhoneWidth(mContext));
		initBean.setScreenHeight(PhoneUtil.getInstance().getPhoneHeight(mContext));
		initBean.setDebug(true);
		initBean.setJailbreak(BridgeUtil.checkSuFile());
		baseEmitData.setData(initBean);
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
		LogUtil.e(url);
		String[] split = url.split("[?]");
		String name = split[0];
		JsCallBack callBack = taskMap.get(name);
		String id = split[1].replace("id=", BridgeUtil.EMPTY);
		if (callBack != null) {
			BridgeUtil.getParam(this, id, name, callBack);
		} else {
			BridgeUtil.getParam(this, id, name, mHybridManager);
		}
	}

	public BaseEmitData<InitBean> getBaseEmitData() {
		return baseEmitData;
	}

	public void setBaseEmitData(BaseEmitData<InitBean> baseEmitData) {
		this.baseEmitData = baseEmitData;
	}

	public HybridManager getHybridManager() {
		return mHybridManager;
	}

}
