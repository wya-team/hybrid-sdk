package com.wya.hybrid.events.volume;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.CheckUtil;

import java.util.Map;

/**
 * @date: 2019/3/11 15:16
 * @author: Chunjiang Mao
 * @classname: EventVolume
 * @describe:
 */
public class EventVolume extends HybridEvents {

	private Map<String, Integer> mEventRegisterMap;

	public EventVolume(Activity mContext, WYAWebView webView) {
		super(mContext, webView);
	}

	/**
	 * 注册音量监听
	 *
	 * @param eventName
	 * @param id
	 */
	public void registerVolume(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		this.mEventRegisterMap = mEventRegisterMap;
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册音量监听成功", null);
		mWebView.send(eventName, getData());
	}

	/**
	 * @param id
	 */
	public void onVolume(int id) {
		setData(1, "音量按钮debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟音量按钮", null);
		mWebView.send(Volume.EVENT_VOLUME, getData());
	}

	/**
	 * 音量按钮
	 *
	 * @param keyCode :
	 */
	public void volume(int keyCode) {
		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Volume.EVENT_VOLUME) && mEventRegisterMap.containsKey(Volume.EVENT_VOLUME)) {
			Volume volume = new Volume();
			volume.setKeyCode(keyCode);
			volume.setLongPress(false);
			setData(1, "音量", volume);
			mWebView.send(Volume.EVENT_VOLUME, getData());
		}
	}

}
