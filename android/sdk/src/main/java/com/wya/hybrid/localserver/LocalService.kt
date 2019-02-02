package com.wya.hybrid.localserver

import android.app.Service
import android.content.Intent
import android.os.IBinder
import java.io.IOException

/**
 * @author :
 */
class LocalService : Service() {

	private lateinit  var mLocalServer: LocalServer

	override fun onBind(intent: Intent): IBinder? {
        return null
    }

	override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        mLocalServer = LocalServer(application)
        try {
            mLocalServer.start()
        } catch (e: IOException) {
            e.printStackTrace()
        }
        return super.onStartCommand(intent, flags, startId)
    }

    override fun onDestroy() {
        super.onDestroy()
            mLocalServer.closeAllConnections()
            mLocalServer.stop()
    }

}
