package com.wya.hybrid.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import com.wya.hybrid.data.event.NetEvent;
import com.wya.hybrid.data.sp.NetSp;
import com.wya.hybrid.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

/**
 * @author :
 */
public class NetworkReceiver extends BroadcastReceiver {

    private static final String TAG = "NetworkState";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (ConnectivityManager.CONNECTIVITY_ACTION.equals(intent.getAction())) {
            ConnectivityManager manager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
            if (null != manager) {
                NetworkInfo activeNetwork = manager.getActiveNetworkInfo();
                boolean isOnline;
                if (activeNetwork != null) {
                    if (activeNetwork.isConnected()) {
                        if (activeNetwork.getType() == ConnectivityManager.TYPE_WIFI) {
                            DebugLogger.logNet("当前WiFi连接可用 ");
                        } else if (activeNetwork.getType() == ConnectivityManager.TYPE_MOBILE) {
                            DebugLogger.logNet("当前移动网络连接可用 ");
                        }
                        isOnline = true;
                    } else {
                        isOnline = false;
                        DebugLogger.logNet("当前没有网络连接 ");
                    }
                } else {
                    DebugLogger.logNet("当前没有网络连接 ");
                    isOnline = false;
                }

                NetSp.get().setIsOnline(isOnline);

                NetEvent event = new NetEvent();
                event.setOnline(isOnline);
                EventBus.getDefault().post(event);
            }
        }
    }
}
