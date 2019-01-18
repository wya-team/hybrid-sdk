package com.wya.example.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import com.wya.example.data.NetEvent;
import com.wya.example.data.sp.NetSP;
import com.wya.example.util.log.DebugLogger;

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
                boolean isConnected = true;
                if (activeNetwork != null) {
                    if (activeNetwork.isConnected()) {
                        if (activeNetwork.getType() == ConnectivityManager.TYPE_WIFI) {
                            DebugLogger.logNet("当前WiFi连接可用 ");
                        } else if (activeNetwork.getType() == ConnectivityManager.TYPE_MOBILE) {
                            DebugLogger.logNet("当前移动网络连接可用 ");
                        }
                    } else {
                        isConnected = false;
                        DebugLogger.logNet("当前没有网络连接 ");
                    }
                } else {
                    DebugLogger.logNet("当前没有网络连接 ");
                    isConnected = false;
                }
                
                // TODO: 2019/1/17 ZCQ TEST
                if (!NetSP.get().isNetConnected()) {
                    NetSP.get().setNetConnected(isConnected);
                    if (NetSP.get().isNetConnected()) {
                        DebugLogger.logNet("NetworkReceiver ... onReceive ..=== post NetEvent === BaseInfo.isNetConnected() = %s", NetSP.get().isNetConnected());
                        NetEvent event = new NetEvent();
                        EventBus.getDefault().post(event);
                    }
                }
                NetSP.get().setNetConnected(isConnected);
            }
        }
    }
}
