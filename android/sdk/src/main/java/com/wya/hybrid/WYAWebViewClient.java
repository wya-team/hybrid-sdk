package com.wya.hybrid;

import android.graphics.Bitmap;
import android.os.Build;
import android.text.TextUtils;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.gson.Gson;
import com.wya.utils.utils.LogUtil;

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
	private SystemConstant systemConstant;

	public WYAWebViewClient(WYAWebView webView) {
		this.webView = webView;
	}

	@Override
	public boolean shouldOverrideUrlLoading(WebView view, String url) {
		try {
			url = URLDecoder.decode(url, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		if (!TextUtils.isEmpty(url) && url.startsWith(BridgeUtil.COMMAND_OVERRIDE_SCHEMA)) {
			// 如果是返回数据
			LogUtil.d(url);
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
				// 如果是返回数据
				LogUtil.d(url);
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

		if (WYAWebView.WYA_UMD_JS != null) {
			BridgeUtil.webViewLoadLocalJs(view, WYAWebView.WYA_UMD_JS);
		}
		if (WYAWebView.WYA_JS_BRIDGE_UMD_JS != null) {
			BridgeUtil.webViewLoadLocalJs(view, WYAWebView.WYA_JS_BRIDGE_UMD_JS);
		}
		systemConstant = new SystemConstant();
		systemConstant.setStatus(1);
		systemConstant.setVersion("0.1.0");
		emit("_ready_", systemConstant, view);
	}

	/**
	 * 提交数据
	 *
	 * @param event 事件名称
	 * @param data  数据
	 * @param view  WebView
	 */
	public void emit(String event, Object data, WebView view) {
		String jsString = "WYAJSBridge.emit('" + event + "'," + gson.toJson(data) + ")";
		//调用js中的函数：showInfoFromJava(msg)
		view.loadUrl("javascript:" + jsString);
	}

	protected boolean onCustomShouldOverrideUrlLoading(String url) {
		return false;
	}
}
