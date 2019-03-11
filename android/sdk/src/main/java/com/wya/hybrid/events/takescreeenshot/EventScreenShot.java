package com.wya.hybrid.events.takescreeenshot;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.log.DebugLogger;

import java.util.Map;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: BatteryEvent
 * @describe: 截屏
 */
public class EventScreenShot extends HybridEvents {


	public EventScreenShot(Activity activity, WYAWebView webView) {
		super(activity, webView);
	}

	/**
	 * 注册屏幕截图事件
	 *
	 * @param eventName
	 * @param id
	 */
	private ScreenShotListenManager mScreenShotListenManager;

	public void registerScreenShot(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		mScreenShotListenManager = ScreenShotListenManager.newInstance(mContext);
		mScreenShotListenManager.setListener(this::onScreenshot);
		mScreenShotListenManager.startListen();
		mEventRegisterMap.put(eventName, id);
		setData(1, "注册屏幕截图事件成功", null);
		mWebView.send(id, getData());
	}

	/**
	 * 用户屏幕截图
	 *
	 * @param id :
	 */
	public void onScreenshot(int id) {
		TakeScreenshot screenshot = new TakeScreenshot();
		screenshot.setImage("模拟路径");
		setData(1, "截屏debugger", screenshot);
		mWebView.send(id, getData());
		setData(1, "模拟截屏", screenshot);
		mWebView.send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getData());
	}

	/**
	 * 截图
	 *
	 * @param imagePath
	 */
	private void onScreenshot(String imagePath) {
		DebugLogger.logEvent("onShot ... imagePath = %s", imagePath);
		TakeScreenshot screenshot = new TakeScreenshot();
		screenshot.setImage(imagePath);
		setData(1, "用户屏幕截图成功", screenshot);
		mWebView.send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getData());
	}

	/**
	 * 取消摇动监听
	 */
	public void unRegisterReceiver() {
		mScreenShotListenManager.stopListen();
	}
}
