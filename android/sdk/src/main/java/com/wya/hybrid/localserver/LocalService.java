package com.wya.hybrid.localserver;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.util.Log;

import java.io.IOException;
/**
 * @author :
 */
public class LocalService extends Service {
    private static final String TAG = "ZCQ";
    private LocalServer mLocalService;
    
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.e(TAG, "LocalService . onStartCommand");
        mLocalService = new LocalServer(getApplication());
        try {
            mLocalService.start();
        } catch (IOException e) {
            e.printStackTrace();
            Log.e(TAG, "LocalService.onStartCommand e = " + e.getMessage());
        }
        return super.onStartCommand(intent, flags, startId);
    }
    
    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mLocalService != null) {
            mLocalService.closeAllConnections();
            mLocalService.stop();
        }
    }
    
}

