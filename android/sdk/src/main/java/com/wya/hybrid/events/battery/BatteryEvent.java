package com.wya.hybrid.events.battery;

import android.app.Activity;
import android.content.IntentFilter;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.data.sp.BatterySp;
import com.wya.hybrid.events.HybridEvents;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: BatteryEvent
 * @describe: 电池状态
 */
public class BatteryEvent extends HybridEvents {

	private BatteryReceiver mBatteryReceiver;

	public BatteryEvent(Activity activity, WYAWebView webView) {
		super(activity, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 电池监听注册
	 *
	 * @param eventName
	 * @param id
	 * @param mEventRegisterMap
	 */
	public void registerBatteryReceiver(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		IntentFilter filter = new IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
		if (null == mBatteryReceiver) {
			mBatteryReceiver = new BatteryReceiver();
		}
		mContext.registerReceiver(mBatteryReceiver, filter);
		mEventRegisterMap.put(eventName, id);
		Battery battery = new Battery();
		battery.setIsPlugged(BatterySp.get().isPlugged());
		battery.setLevel(BatterySp.get().getLevel());
		setData(1, "电量监听注册成功", battery);
		mWebView.send(id, getData());
	}


	/**
	 * 电池状态
	 *
	 * @param id :
	 */
	public void onBattery(int id) {
		setData(1, "电池debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟电池", null);
		mWebView.send(Battery.EVENT_BATTERY, getData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)
	public void onBatteryEvent(BatteryEventData event) {
		if (null == event) {
			return;
		}
		Battery battery = new Battery();
		battery.setIsPlugged(event.isPlugged());
		battery.setLevel(event.getLevel());

		if (event.isBatteryLow()) {
			setData(1, "低电量响应成功", battery);
			mWebView.send(Battery.EVENT_BATTERY, getData());
		} else {
			setData(1, "电池电量数据", battery);
			mWebView.send(Battery.EVENT_BATTERY, getData());
		}
	}

	/**
	 * 取消电池监听
	 */
	public void unRegisterReceiver() {
		unRegisterReceiver(mBatteryReceiver);
	}
}
