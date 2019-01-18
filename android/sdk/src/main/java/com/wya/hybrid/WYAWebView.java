package com.wya.hybrid;

import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.webkit.WebView;

import com.google.gson.Gson;

/**
 * @date: 2019/1/17 10:05
 * @author: Chunjiang Mao
 * @classname: WYAWebView
 * @describe:
 */
public class WYAWebView extends WebView implements EventManger {
	public static final String WYA_UMD_JS = "wya.umd.js";
	public static final String WYA_JS_BRIDGE_UMD_JS = "WYAJSBridge.umd.js";
	
	private Gson gson = new Gson();
	
	public WYAWebView(Context context) {
		super(context);
		init();
	}
	
	public WYAWebView(Context context, AttributeSet attrs) {
		super(context, attrs);
		init();
	}
	
	public WYAWebView(Context context, AttributeSet attrs, int defStyleAttr) {
		super(context, attrs, defStyleAttr);
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
	}
	
	protected WYAWebChromeClient wyaWebChromeClient(){
		return new WYAWebChromeClient(this);
	}
	
	protected WYAWebViewClient wyaWebViewClient() {
		return new WYAWebViewClient(this, this);
	}
	
	
	@Override
	public void emit(String event, Object data) {
		String jsString = "";
		if(data == null){
			jsString = "WYAJSBridge.emit('" + event + "','')";
		} else {
			jsString = "WYAJSBridge.emit('" + event + "'," + gson.toJson(data) + ")";
		}
		//调用js中的函数：showInfoFromJava(msg)
		this.loadUrl("javascript:" + jsString);
	}
	
	@Override
	public void emit(String event) {
		emit(event, null);
	}
	
}
