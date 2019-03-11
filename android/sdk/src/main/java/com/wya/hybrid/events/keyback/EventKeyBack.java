package com.wya.hybrid.events.keyback;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.CheckUtil;

import java.util.Map;

/**
 * @date: 2019/3/11 15:16
 * @author: Chunjiang Mao
 * @classname: EventKeyBack
 * @describe:
 */
public class EventKeyBack extends HybridEvents {

	private Map<String, Integer> mEventRegisterMap;

	public EventKeyBack(Activity mContext, WYAWebView webView) {
		super(mContext, webView);
	}

	/**
	 * 注册返回按钮事件监听
	 *
	 * @param eventName
	 * @param id
	 * @param mEventRegisterMap
	 */
	public void registerKeyBack(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		this.mEventRegisterMap = mEventRegisterMap;
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册返回按钮事件监听成功", null);
		mWebView.send(id, getData());
	}

	/**
	 * 强制执行
	 *
	 * @param id
	 */
	public void onKeyBack(int id) {
		setData(1, "返回按钮debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟返回按钮", null);
		mWebView.send(KeyBack.EVENT_KEY_BACK, getData());
	}

	/**
	 * 返回按钮
	 *
	 * @param keyCode :
	 */
	public void keyBack(int keyCode) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(KeyBack.EVENT_KEY_BACK) && mEventRegisterMap.containsKey(KeyBack.EVENT_KEY_BACK)) {
			KeyBack keyBack = new KeyBack();
			keyBack.setKeyCode(keyCode);
			keyBack.setLongPress(false);
			setData(1, "响应成功", keyBack);
			mWebView.send(KeyBack.EVENT_KEY_BACK, getData());
		}
	}

}
