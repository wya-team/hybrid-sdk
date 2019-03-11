package com.wya.hybrid.events.network;

import android.app.Activity;
import android.content.IntentFilter;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: EventNetwork
 * @describe: 网络状态
 */
public class EventNetwork extends HybridEvents {

	private NetworkReceiver mNetworkReceiver;

	public EventNetwork(Activity activity, WYAWebView webView) {
		super(activity, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 注册网络监听事件
	 *
	 * @param eventName
	 * @param id
	 * @param mEventRegisterMap
	 */
	public void registerNetworkReceiver(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		IntentFilter filter = new IntentFilter();
		filter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
		filter.addAction("android.net.wifi.WIFI_STATE_CHANGED");
		filter.addAction("android.net.wifi.STATE_CHANGE");
		if (null == mNetworkReceiver) {
			mNetworkReceiver = new NetworkReceiver();
		}
		mContext.registerReceiver(mNetworkReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册网络监听成功", new NetState());
		mWebView.send(id, getData());
	}

	/**
	 * 网络监听
	 *
	 * @param id :
	 */
	public void onNetWork(int id) {
		setData(1, "网络debugger", new NetState());
		mWebView.send(id, getData());
		setData(1, "模拟网络连接", new NetState());
		mWebView.send(NetState.EVENT_NETWORK, getData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)
	public void onNetEvent(EventNetworkData event) {
		if (event == null) {
			return;
		}
		setData(1, event.isOnline() ? "网络连接" : "网络断开", new NetState());
		mWebView.send(NetState.EVENT_NETWORK, getData());
	}

	/**
	 * 取消网络监听
	 */
	public void unRegisterReceiver() {
		unRegisterReceiver(mNetworkReceiver);
	}
}
