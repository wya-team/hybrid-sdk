package com.wya.hybrid.events.appidle;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import com.wya.hybrid.data.sp.ScreenSp;
import com.wya.hybrid.util.CheckUtil;
import com.wya.hybrid.util.RxTimerUtil;
import com.wya.hybrid.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

/**
 * @author :
 */
public class ScreenReceiver extends BroadcastReceiver {

    private static final int KEY_STATE_SCREEN_ON = 0;
    private static final int KEY_STATE_SCREEN_OFF = 1;
    private static final int KEY_STATE_USER_PERSENT = 2;

    @Override
    public void onReceive(Context context, Intent intent) {
        DebugLogger.logScreen(" onReceive ");
        String action = intent.getAction();
        int state = -1;
        EventAppIdleData event = null;

        if (CheckUtil.isNotEmpty(action)) {
            switch (action) {
                case Intent.ACTION_SCREEN_ON:
                    // 屏幕亮
                    DebugLogger.logScreen(" ACTION_SCREEN_ON ");
                    state = KEY_STATE_SCREEN_ON;
                    event = new EventAppIdleData();
                    event.stateScreenOn = true;
                    break;

                case Intent.ACTION_SCREEN_OFF:
                    //  屏幕锁定
                    DebugLogger.logScreen(" ACTION_SCREEN_OFF ");
                    state = KEY_STATE_SCREEN_OFF;
                    event = new EventAppIdleData();
                    event.stateScreenOff = true;
                    break;

                case Intent.ACTION_USER_PRESENT:
                    // 屏幕解锁了且可以使用
                    DebugLogger.logScreen(" ACTION_USER_PRESENT ");
                    state = KEY_STATE_USER_PERSENT;
                    event = new EventAppIdleData();
                    event.stateUserPresent = true;
                    break;

                default:
                    break;
            }
        }
        ScreenSp.get().setScreenState(state);
        if (event != null) {
            EventAppIdleData finalEvent = event;
            RxTimerUtil.timer(3000L, aLong -> EventBus.getDefault().post(finalEvent));
        }
    }
}
