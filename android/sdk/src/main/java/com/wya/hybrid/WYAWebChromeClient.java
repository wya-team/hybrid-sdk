package com.wya.hybrid;

import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

import com.wya.utils.utils.LogUtil;

/**
 * @date: 2019/1/17 15:31
 * @author: Chunjiang Mao
 * @classname: WYAWebChromeClient
 * @describe:
 */
public class WYAWebChromeClient extends WebChromeClient {

	private WYAWebView wyaWebView;

	public WYAWebChromeClient(WYAWebView wyaWebView) {
		this.wyaWebView = wyaWebView;
	}

	@Override
	public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, JsPromptResult result) {
		return super.onJsPrompt(view, url, message, defaultValue, result);
	}

	@Override
	public boolean onJsAlert(WebView view, String url, String message, final JsResult result) {
		LogUtil.e(message);
		result.confirm();
		return true;
	}

}
