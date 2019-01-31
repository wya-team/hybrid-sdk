package com.wya.hybrid.localserver;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;

import com.orhanobut.logger.Logger;

import org.nanohttpd.protocols.http.IHTTPSession;
import org.nanohttpd.protocols.http.NanoHTTPD;
import org.nanohttpd.protocols.http.response.Response;
import org.nanohttpd.protocols.http.response.Status;

import java.io.InputStream;
import java.util.Map;

/**
 * @author :
 */
public class LocalServer extends NanoHTTPD {
    
    private static final String KEY_SUFFIX_HTML = ".html";
    private static final String KEY_SUFFIX_CSS = ".css";
    private static final String KEY_SUFFIX_JS = ".js";
    
    private static final String KEY_DEFAULT_DIRECTORY = "dist/";
    private static final String KEY_DEFAULT_PAGE = KEY_DEFAULT_DIRECTORY + "index.html";
    
    private AssetManager mAssetManager;
    private Context mContext;
    
    public LocalServer(Context context) {
        super();
        mContext = context;
        mAssetManager = mContext.getAssets();
    }
    
    
    
    @Override
    public Response serve(IHTTPSession session) {
        final StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, String> header : session.getHeaders().entrySet()) {
            sb.append(header.getKey()).append(" : ").append(header.getValue()).append("\n");
        }
        String fileName = session.getUri().substring(1);
        if ("".equalsIgnoreCase(fileName)) {
            fileName = KEY_DEFAULT_PAGE;
        } else {
            fileName = KEY_DEFAULT_DIRECTORY + fileName;
        }
        
        String mimeType = "";
        if (fileName.contains(KEY_SUFFIX_HTML)) {
            mimeType = MIME_HTML;
        } else if (fileName.contains(KEY_SUFFIX_CSS)) {
            mimeType = "text/css";
        } else if (fileName.contains(KEY_SUFFIX_JS)) {
            mimeType = "application/javascript";
        }
        return getResponse(mimeType, fileName);
    }
    
    private Response getResponse(String mimeType, String fileName) {
        try {
            Log.e("ZCQ", "[getResponse] .  fileName = " + fileName);
            InputStream data = mAssetManager.open(fileName);
            return Response.newFixedLengthResponse(Status.OK, mimeType, data, (long) data.available());
        } catch (Exception e) {
            e.printStackTrace();
            fileName = KEY_DEFAULT_PAGE;
            return getResponse(MIME_HTML, fileName);
        }
    }
    
    @Override
    public void onStarted() {
        super.onStarted();
        int localPort = getListeningPort();
        Logger.t("ZCQ").e("[LocalServer] [onStarted] localPort = %s", localPort);
        if (null != mListener) {
            mListener.onLocalServerStarted(localPort);
        }
    }
    
    private static LocalServerListener mListener;
    
    public static void setListener(LocalServerListener listener) {
        mListener = listener;
    }
    
    public interface LocalServerListener {
        /**
         * localServer started
         *
         * @param port :
         */
        void onLocalServerStarted(int port);
    }
}

