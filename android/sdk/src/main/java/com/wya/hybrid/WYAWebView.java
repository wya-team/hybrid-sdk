package com.wya.hybrid;

import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.wya.hybrid.bean.BaseEmitData;

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
	
	private  WYAWebChromeClient wyaWebChromeClient(){
		return new WYAWebChromeClient(this);
	}
	
	private  WYAWebViewClient wyaWebViewClient() {
		return new WYAWebViewClient(this);
	}
	
	public void send(String name,Object object) {
		name="'"+name+"'";
		BaseEmitData<Object> data = new BaseEmitData<>();
		data.setData(object);
		BridgeUtil.loadJsUrl(this,name,new Gson().toJson(data));
	}
	
	public void send(int id, Object object) {
		BaseEmitData<Object> data = new BaseEmitData<>();
		data.setData(object);
		BridgeUtil.loadJsUrl(this,String.valueOf(id),new Gson().toJson(data));
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
			BridgeUtil.getParam(this,id, callBack);
		}
	}
	
}
