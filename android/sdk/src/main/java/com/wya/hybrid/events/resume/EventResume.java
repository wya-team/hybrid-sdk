package com.wya.hybrid.events.resume;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.pause.Foreground;
import com.wya.hybrid.events.network.NetState;
import com.wya.hybrid.events.pause.ForegroundEvent;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.CheckUtil;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/11 15:16
 * @author: Chunjiang Mao
 * @classname: EventResume
 * @describe:
 */
public class EventResume extends HybridEvents {

	private Map<String, Integer> mEventRegisterMap;

	public EventResume(Activity mContext, WYAWebView webView) {
		super(mContext, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 应用从后台回到前台
	 *
	 * @param eventName
	 * @param id
	 */
	public void registerResume(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		this.mEventRegisterMap = mEventRegisterMap;
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册应用从后台回到前台监听成功", new NetState());
		mWebView.send(id, getData());
	}

	/**
	 * 应用从后台回到前台
	 *
	 * @param id :
	 */
	public void onResume(int id) {
		setData(1, "应用从后台回到前台debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟应用从后台回到前台", null);
		mWebView.send(Foreground.EVENT_RESUME, getData());
	}


	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onForegroundEvent(ForegroundEvent event) {
		if (event == null) {
			return;
		}
		if (event.isResume() && null != mEventRegisterMap && CheckUtil.isNotEmpty(Foreground.EVENT_RESUME) && mEventRegisterMap.containsKey(Foreground.EVENT_RESUME)) {
			setData(1, "Resume响应成功", new Foreground());
			mWebView.send(Foreground.EVENT_RESUME, getData());
		}
	}

//
//
//
//
//	/**
//	 * 注册音量监听
//	 *
//	 * @param eventName
//	 * @param id
//	 */
//	public void registerVolume(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
//		this.mEventRegisterMap = mEventRegisterMap;
//		mEventRegisterMap.put(eventName, id);
//		setData(1, "注册音量监听成功", null);
//		mWebView.send(eventName, getData());
//	}
//
//	/**
//	 * @param id
//	 */
//	public void onVolume(int id) {
//		setData(1, "音量按钮debugger", null);
//		mWebView.send(id, getData());
//		setData(1, "模拟音量按钮", null);
//		mWebView.send(Volume.EVENT_VOLUME, getData());
//	}
//
//	/**
//	 * 音量按钮
//	 *
//	 * @param keyCode :
//	 */
//	public void volume(int keyCode) {
//		if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Volume.EVENT_VOLUME) && mEventRegisterMap.containsKey(Volume.EVENT_VOLUME)) {
//			Volume volume = new Volume();
//			volume.setKeyCode(keyCode);
//			volume.setLongPress(false);
//			setData(1, "音量", volume);
//			mWebView.send(Volume.EVENT_VOLUME, getData());
//		}
//	}

}
