package com.wya.hybrid;

import android.content.Context;
import android.webkit.ValueCallback;
import android.webkit.WebView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * @date: 2019/1/17 11:01
 * @author: Chunjiang Mao
 * @classname: BridgeUtil
 * @describe:
 */
public class BridgeUtil {

	public static final String WYAJSBRIDGE = "WYAJSBridge.umd.js";
	public static final String WYAMETHOD = "wya.umd.js";
	public static final String SCHEME = "command://";
	public static final String EMPTY = "";
	public static final int FINISH = 100;


	/**
	 * 这里只是加载lib包中assets中的 WebViewJavascriptBridge.js
	 * @param view webview
	 * @param path 路径
	 */
	public static void webViewLoadLocalJs(WebView view, String path){
		String jsContent = assetFile2Str(view.getContext(), path);
		view.loadUrl("javascript:" + jsContent);
	}

	/**
	 * 解析assets文件夹里面的代码,去除注释,取可执行的代码
	 * @param c context
	 * @param urlStr 路径
	 * @return 可执行代码
	 */
	public static String assetFile2Str(Context c, String urlStr){
		InputStream in = null;
		try{
			in = c.getAssets().open(urlStr);
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(in));
			String line = null;
			StringBuilder sb = new StringBuilder();
			do {
				line = bufferedReader.readLine();
				// 去除注释
				if (line != null && !line.matches("^\\s*\\/\\/.*")) {
					sb.append(line);
				}
			} while (line != null);

			bufferedReader.close();
			in.close();

			return sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if(in != null) {
				try {
					in.close();
				} catch (IOException e) {
				}
			}
		}
		return null;
	}
	public static void loadJsUrl(WebView webView,String key, String value) {
		webView.loadUrl("javascript:WYAJSBridge.emit("+key+","+value+")");
	}

	public static void getParam(WebView webView, final String id, final JsCallBack callBack) {
		webView.evaluateJavascript("javascript:" + "WYAJSBridge.getParam(" + id + ")", new ValueCallback<String>() {
			@Override
			public void onReceiveValue(String value) {
				callBack.response(value,Integer.parseInt(id));
			}
		});
	}
}
