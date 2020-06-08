package com.wya.hybrid.events.shake;

import android.app.Activity;
import android.content.Context;
import android.os.Vibrator;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Map;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: BatteryEvent
 * @describe: 摇晃状态
 */
public class EventShake extends HybridEvents {

	private SensorManagerHelper sensorManagerHelper;

	public EventShake(Activity activity, WYAWebView webView) {
		super(activity, webView);
		// event bus
		if (!EventBus.getDefault().isRegistered(this)) {
			EventBus.getDefault().register(this);
		}
	}

	/**
	 * 注册摇动事件
	 *
	 * @param eventName
	 * @param id
	 * @param mEventRegisterMap
	 */
	public void registerShake(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		sensorManagerHelper = new SensorManagerHelper(mContext);
		sensorManagerHelper.setOnShakeListener(() -> onShake(mContext));
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册摇动事件监听成功", new EventShakeData());
		mWebView.send(id, getData());
	}

	@Subscribe(threadMode = ThreadMode.MAIN)
	public void onShakeEvent(EventShakeData event) {
		if (event == null) {
			return;
		}
		setData(1, "响应成功", new EventShakeData());
		mWebView.send(EventShakeData.EVENT_SHAKE, getData());
	}

	/**
	 * 摇动事件
	 *
	 * @param id :
	 */
	public void onShake(int id) {
		setData(1, "摇动debugger", new EventShakeData());
		mWebView.send(id, getData());
		setData(1, "模拟摇动", new EventShakeData());
		mWebView.send(EventShakeData.EVENT_SHAKE, getData());
	}

	private void onShake(Context context) {
		playVibreate(context);
		setData(1, "摇动事件成功", new EventShakeData());
		mWebView.send(EventShakeData.EVENT_SHAKE, getData());
	}

	private static void playVibreate(Context context) {
		try {
			Vibrator vibrator = (Vibrator) context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
			if (null != vibrator) {
				vibrator.vibrate(200);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 取消摇动监听
	 */
	public void unRegisterReceiver() {
		sensorManagerHelper.stop();
	}
}
