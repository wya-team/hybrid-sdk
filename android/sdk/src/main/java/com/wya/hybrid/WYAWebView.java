package com.wya.hybrid;

import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.webkit.WebView;

/**
 * @date: 2019/1/17 10:05
 * @author: Chunjiang Mao
 * @classname: WYAWebView
 * @describe:
 */
public class WYAWebView extends WebView {
	public static final String WYA_UMD_JS = "wya.umd.js";
	public static final String WYA_JS_BRIDGE_UMD_JS = "WYAJSBridge.umd.js";


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
	}

	protected WYAWebViewClient wyaWebViewClient() {
		return new WYAWebViewClient(this);
	}
}
