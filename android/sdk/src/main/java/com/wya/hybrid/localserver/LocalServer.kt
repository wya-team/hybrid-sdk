package com.wya.hybrid.localserver

import android.content.Context
import android.content.res.AssetManager
import android.util.Log

import com.orhanobut.logger.Logger

import org.nanohttpd.protocols.http.IHTTPSession
import org.nanohttpd.protocols.http.NanoHTTPD
import org.nanohttpd.protocols.http.response.Response
import org.nanohttpd.protocols.http.response.Status
import java.util.logging.Logger

/**
 * @author :
 */
class LocalServer(context: Context) : NanoHTTPD() {

    private val mAssetManager: AssetManager = context.assets

    override fun handle(session: IHTTPSession?): Response {
        val sb = StringBuilder()
        for ((key, value) in session!!.headers) {
            sb.append(key).append(" : ").append(value).append("\n")
        }
        var fileName = session.uri.substring(1)
        fileName = if ("".equals(fileName, ignoreCase = true)) {
            KEY_DEFAULT_PAGE
        } else {
            KEY_DEFAULT_DIRECTORY + fileName
        }

        var mimeType = ""
        when {
            fileName.contains(KEY_SUFFIX_HTML) -> mimeType = NanoHTTPD.MIME_HTML
            fileName.contains(KEY_SUFFIX_CSS) -> mimeType = "text/css"
            fileName.contains(KEY_SUFFIX_JS) -> mimeType = "application/javascript"
        }
        return getResponse(mimeType, fileName)
    }

    private fun getResponse(mimeType: String, fileName: String): Response {
        return try {
            Log.e("ZCQ", "[getResponse] .  fileName = $fileName")
            val data = mAssetManager.open(fileName)
            Response.newFixedLengthResponse(Status.OK, mimeType, data, data.available().toLong())
        } catch (e: Exception) {
            e.printStackTrace()
            getResponse(NanoHTTPD.MIME_HTML, KEY_DEFAULT_PAGE)
        }
    }

    override fun onStarted() {
        super.onStarted()
        val localPort = listeningPort
        Logger.t("ZCQ").e("[LocalServer] [onStarted] localPort = %s", localPort)
        mListener?.onLocalServerStarted(localPort)
    }

    companion object {

        private const val KEY_SUFFIX_HTML = ".html"
        private const val KEY_SUFFIX_CSS = ".css"
        private const val KEY_SUFFIX_JS = ".js"

        private const val KEY_DEFAULT_DIRECTORY = "dist/"
        private const val KEY_DEFAULT_PAGE = KEY_DEFAULT_DIRECTORY + "index.html"

        private var mListener: LocalServerListener? = null

        fun setListener(listener: LocalServerListener) {
            mListener = listener
        }
    }

    interface LocalServerListener {
        /**
         * localServer started
         *
         * @param port :
         */
        fun onLocalServerStarted(port: Int)
    }

}

