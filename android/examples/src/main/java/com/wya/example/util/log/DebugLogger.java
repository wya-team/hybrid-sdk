package com.wya.example.util.log;

/**
 * @author :
 */
public class DebugLogger {
    
    private static final String TAG_NET = "NET";
    private static final String TAG_WEBVIEW = "WEBVIEW";
    
    public static void logNet(String message, Object... args) {
        try {
            WYALog.t(TAG_NET).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public static void logWebView(String message, Object... args) {
        try {
            WYALog.t(TAG_WEBVIEW).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
