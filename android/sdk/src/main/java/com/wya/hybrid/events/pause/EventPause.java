package com.wya.hybrid.events.pause;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.network.NetState;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.CheckUtil;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/11 15:16
 * @author: Chunjiang Mao
 * @classname: EventPause
 * @describe:
 */
public class EventPause extends HybridEvents {

	private Map<String, Integer> mEventRegisterMap;

	public EventPause(Activity mContext, WYAWebView webView) {
		super(mContext, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 应用进入后台
	 *
	 * @param eventName
	 * @param id
	 */
	public void registerPause(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		this.mEventRegisterMap = mEventRegisterMap;
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册应用进入后台监听成功", new NetState());
		mWebView.send(id, getData());
	}

	/**
	 * 应用进入后台
	 *
	 * @param id :
	 */
	public void onPause(int id) {
		setData(1, "应用进入后台debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟应用进入后台", null);
		mWebView.send(Foreground.EVENT_PAUSE, getData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onForegroundEvent(ForegroundEvent event) {
		if (event == null) {
			return;
		}
		if (event.isPause() && null != mEventRegisterMap && CheckUtil.isNotEmpty(Foreground.EVENT_PAUSE) && mEventRegisterMap.containsKey(Foreground.EVENT_PAUSE)) {
			setData(1, "Pause响应成功", new Foreground());
			mWebView.send(Foreground.EVENT_PAUSE, getData());
		}
	}

}
