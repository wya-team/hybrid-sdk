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
    private LocalServer mLocalServer;
    
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
    
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        mLocalServer = new LocalServer(getApplication());
        try {
            mLocalServer.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return super.onStartCommand(intent, flags, startId);
    }
    
    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mLocalServer != null) {
            mLocalServer.closeAllConnections();
            mLocalServer.stop();
        }
    }
    
}