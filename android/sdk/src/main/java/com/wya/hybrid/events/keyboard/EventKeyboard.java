package com.wya.hybrid.events.keyboard;

import android.app.Activity;
import android.graphics.Rect;
import android.view.ViewTreeObserver;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.events.HybridEvents;
import com.wya.hybrid.util.CheckUtil;
import com.wya.utils.utils.LogUtil;
import com.wya.utils.utils.ScreenUtil;

import java.util.Map;

import static com.wya.uikit.toolbar.StatusBarUtil.getStatusBarHeight;

/**
 * @date: 2019/3/8 15:31
 * @author: Chunjiang Mao
 * @classname: BatteryEvent
 * @describe: 软件盘
 */
public class EventKeyboard extends HybridEvents {

	/**
	 * 软键盘的显示状态
	 */
	private boolean mShowKeyboard;
	private Map<String, Integer> mEventRegisterMap;

	public EventKeyboard(Activity activity, WYAWebView webView) {
		super(activity, webView);
	}

	/**
	 * 注册软件盘监听成功
	 *
	 * @param eventName
	 * @param id
	 */
	public void registerKeyboard(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
		this.mEventRegisterMap = mEventRegisterMap;
		mEventRegisterMap.put(eventName, id);
		if (eventName.equals(Keyboard.EVENT_KEYBOARD_HIDE)) {
			setData(1, "注册软件盘影藏监听成功", null);
		} else {
			setData(1, "注册软件盘显示监听成功", null);
		}
		mWebView.send(id, getData());
		mWebView.getRootView().getViewTreeObserver().addOnGlobalLayoutListener(layoutListener);
	}

	private ViewTreeObserver.OnGlobalLayoutListener layoutListener = new ViewTreeObserver.OnGlobalLayoutListener() {
		@Override
		public void onGlobalLayout() {
			// 应用可以显示的区域。此处包括应用占用的区域，包括标题栏不包括状态栏
			Rect r = new Rect();
			mWebView.getRootView().getWindowVisibleDisplayFrame(r);
			// 键盘最小高度
			int minKeyboardHeight = 150;
			// 获取状态栏高度
			int statusBarHeight = getStatusBarHeight(mContext);
			// 屏幕高度,不含虚拟按键的高度
			int screenHeight = ScreenUtil.getScreenHeight(mContext) - statusBarHeight;
			// 在不显示软键盘时，height等于状态栏的高度
			int height = screenHeight - (r.bottom - r.top);
			Keyboard keyboard = new Keyboard();
			keyboard.setHeight(height);
			setData(1, "响应成功", keyboard);
			if (mShowKeyboard) {
				// 如果软键盘是弹出的状态，并且height小于等于状态栏高度，
				// 说明这时软键盘已经收起
				if (height - statusBarHeight < minKeyboardHeight) {
					mShowKeyboard = false;
					if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Keyboard.EVENT_KEYBOARD_HIDE) && mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_HIDE)) {
						mWebView.send(Keyboard.EVENT_KEYBOARD_HIDE, getData());
					}
				}
			} else {
				// 如果软键盘是收起的状态，并且height大于状态栏高度，
				// 说明这时软键盘已经弹出
				if (height - statusBarHeight > minKeyboardHeight) {
					mShowKeyboard = true;
					if (null != mEventRegisterMap && CheckUtil.isNotEmpty(Keyboard.EVENT_KEYBOARD_SHOW) && mEventRegisterMap.containsKey(Keyboard.EVENT_KEYBOARD_SHOW)) {
						mWebView.send(Keyboard.EVENT_KEYBOARD_SHOW, getData());
					}
				}

			}
		}
	};

	public void onKeyboard(String eventName, int id) {
		setData(1, eventName + "debugger", null);
		mWebView.send(id, getData());
		setData(1, "模拟" + eventName, null);
		mWebView.send(eventName, getData());
	}

	/**
	 * 取消软件盘监听
	 */
	public void unRegisterReceiver() {
		LogUtil.e("------unRegisterReceiver-------");
		mWebView.getRootView().getViewTreeObserver().removeOnGlobalLayoutListener(layoutListener);
	}

//	/**
//	 * 注册屏幕截图事件
//	 *
//	 * @param eventName
//	 * @param id
//	 */
//	private ScreenShotListenManager mScreenShotListenManager;
//
//	public void registerScreenShot(String eventName, int id, Map<String, Integer> mEventRegisterMap) {
//		mScreenShotListenManager = ScreenShotListenManager.newInstance(mContext);
//		mScreenShotListenManager.setListener(this::onScreenshot);
//		mScreenShotListenManager.startListen();
//		mEventRegisterMap.put(eventName, id);
//		setData(1, "注册屏幕截图事件成功", null);
//		mWebView.send(id, getData());
//	}
//
//	/**
//	 * 用户屏幕截图
//	 *
//	 * @param id :
//	 */
//	public void onScreenshot(int id) {
//		TakeScreenshot screenshot = new TakeScreenshot();
//		screenshot.setImage("模拟路径");
//		setData(1, "截屏debugger", screenshot);
//		mWebView.send(id, getData());
//		setData(1, "模拟截屏", screenshot);
//		mWebView.send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getData());
//	}
//
//	/**
//	 * 截图
//	 *
//	 * @param imagePath
//	 */
//	private void onScreenshot(String imagePath) {
//		DebugLogger.logEvent("onShot ... imagePath = %s", imagePath);
//		TakeScreenshot screenshot = new TakeScreenshot();
//		screenshot.setImage(imagePath);
//		setData(1, "用户屏幕截图成功", screenshot);
//		mWebView.send(TakeScreenshot.EVENT_TAKE_SCREENSHOT, getData());
//	}

}
