package com.wya.hybrid;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Rect;
import android.os.Build;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.ViewTreeObserver;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.InitBean;
import com.wya.hybrid.bean.Keyboard;
import com.wya.utils.utils.AppUtil;
import com.wya.utils.utils.NetworkUtil;
import com.wya.utils.utils.PhoneUtil;
import com.wya.utils.utils.ScreenUtil;

import java.util.HashMap;
import java.util.Map;

import static com.wya.uikit.toolbar.StatusBarUtil.getStatusBarHeight;

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
	/**
	 * 软键盘的显示状态
	 */
	private boolean ShowKeyboard;

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
		this.getSettings().setDomStorageEnabled(true);
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
			WebView.setWebContentsDebuggingEnabled(true);
		}
		this.setWebViewClient(wyaWebViewClient());
		initData();
		setKeyBoardListener();
	}

	private void initData() {
		baseEmitData = new BaseEmitData<>();
		InitBean initBean = new InitBean();
		initBean.setAppId(AppUtil.getPackageName(mContext));
		initBean.setAppName(AppUtil.getAppName(mContext));
		initBean.setAppVersion(AppUtil.getVersionName(mContext));
		initBean.setSystemType("android");
		initBean.setSystemVersion(PhoneUtil.getInstance().getSDKVersion());
		initBean.setDeviceId(PhoneUtil.getInstance().getPhoneImei(mContext));
		if (ContextCompat.checkSelfPermission(mContext, Manifest.permission.READ_PHONE_STATE) == PackageManager.PERMISSION_GRANTED) {
			initBean.setDeviceModel(PhoneUtil.getInstance().getPhoneModel());
		}
		initBean.setDeviceName(TextUtils.isEmpty(android.os.Build.DEVICE) ? "" : android.os.Build.DEVICE);
		initBean.setUiMode(PhoneUtil.getInstance().isTablet(mContext) ? "pad" : "phone");
		initBean.setOperatorName(PhoneUtil.getOperator(mContext));
		initBean.setConnectionType(NetworkUtil.getNetworkState(mContext));
		initBean.setScreenWidth(PhoneUtil.getInstance().getPhoneWidth(mContext));
		initBean.setScreenHeight(PhoneUtil.getInstance().getPhoneHeight(mContext));
		initBean.setDebug(true);
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

	private void setKeyBoardListener() {
		this.getRootView().getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {

			@Override
			public void onGlobalLayout() {
				// 应用可以显示的区域。此处包括应用占用的区域，包括标题栏不包括状态栏
				Rect r = new Rect();
				WYAWebView.this.getRootView().getWindowVisibleDisplayFrame(r);
				// 键盘最小高度
				int minKeyboardHeight = 150;
				// 获取状态栏高度
				int statusBarHeight = getStatusBarHeight(mContext);
				// 屏幕高度,不含虚拟按键的高度
				int screenHeight = ScreenUtil.getScreenHeight(mContext) - statusBarHeight;
				// 在不显示软键盘时，height等于状态栏的高度
				int height = screenHeight - (r.bottom - r.top);
				Keyboard keyboard = new Keyboard();
				keyboard.setHeight(height);
				if (ShowKeyboard) {
					// 如果软键盘是弹出的状态，并且height小于等于状态栏高度，
					// 说明这时软键盘已经收起
					if (height - statusBarHeight < minKeyboardHeight) {
						ShowKeyboard = false;
						send(Keyboard.EVENT_KEYBOARD_HIDE, keyboard);
					}
				} else {
					// 如果软键盘是收起的状态，并且height大于状态栏高度，
					// 说明这时软键盘已经弹出
					if (height - statusBarHeight > minKeyboardHeight) {
						ShowKeyboard = true;
						send(Keyboard.EVENT_KEYBOARD_SHOW, keyboard);
					}
				}
			}
		});
	}

}
