package com.wya.hybridexample.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

import com.wya.hybridexample.data.sp.NetSP;
import com.wya.hybridexample.util.log.DebugLogger;

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
                
                // TODO: 2019/1/17 ZCQ TEST
                //                if (!NetSP.get().isOnline()) {
                //                    NetSP.get().setIsOnline(isOnline);
                //                    if (NetSP.get().isOnline()) {
                //                        DebugLogger.logNet("NetworkReceiver ... onReceive ..=== post NetEvent === BaseInfo.isOnline() = %s", NetSP.get().isOnline());
                //                        NetEvent event = new NetEvent();
                //                        EventBus.getDefault().post(event);
                //                    }
                //                }
                NetSP.get().setIsOnline(isOnline);
            }
        }
    }
}
