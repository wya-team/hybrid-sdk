package com.wya.hybrid;

import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.gson.Gson;

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
		Log.i("tag", "shouldOverrideUrlLoading: " + url);
		if (url.startsWith(BridgeUtil.SCHEME)) {
			webView.handlerReturnData(url.replace(BridgeUtil.SCHEME, BridgeUtil.EMPTY));
			return true;
		} else {
			return super.shouldOverrideUrlLoading(view, url);
		}

	}

	// 增加shouldOverrideUrlLoading在api》=24时
	@Override
	public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {

		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
			String url = request.getUrl().toString();
			try {
				url = URLDecoder.decode(url, "UTF-8");
			} catch (UnsupportedEncodingException ex) {
				ex.printStackTrace();
			}
			if (url.startsWith(BridgeUtil.SCHEME)) {
				webView.handlerReturnData(url.replace(BridgeUtil.SCHEME, BridgeUtil.EMPTY));
				return true;
			} else {
				return super.shouldOverrideUrlLoading(view, request);
			}
		} else {
			return super.shouldOverrideUrlLoading(view, request);
		}
	}

	@Override
	public void onPageFinished(WebView view, String url) {
		super.onPageFinished(view, url);

		if (view.getProgress() == BridgeUtil.FINISH) {
			BridgeUtil.webViewLoadLocalJs(webView, BridgeUtil.WYAJSBRIDGE);
			BridgeUtil.webViewLoadLocalJs(webView, BridgeUtil.WYAMETHOD);

			BridgeUtil.loadJsUrl(view, "'_ready_'", new Gson().toJson(webView.getBaseEmitData()));
		}

	}
}
