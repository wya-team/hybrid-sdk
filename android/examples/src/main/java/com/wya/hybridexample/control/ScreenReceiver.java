package com.wya.hybridexample.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.wya.hybridexample.util.log.DebugLogger;

/**
 * @author :
 */
public class ScreenReceiver extends BroadcastReceiver {
	
	@Override
	public void onReceive(Context context, Intent intent) {
		DebugLogger.logScreen(" onReceive ");
		
		String action = intent.getAction();
		if (Intent.ACTION_SCREEN_ON.equals(action)) {
			/**
			 * 屏幕亮
			 */
			DebugLogger.logScreen(" ACTION_SCREEN_ON ");
		} else if (Intent.ACTION_SCREEN_OFF.equals(action)) {
			/**
			 * 屏幕锁定
			 */
			DebugLogger.logScreen(" ACTION_SCREEN_OFF ");
		} else if (Intent.ACTION_USER_PRESENT.equals(action)) {
			/**
			 * 屏幕解锁了且可以使用
			 */
			DebugLogger.logScreen(" ACTION_USER_PRESENT ");
		}
	}
}
