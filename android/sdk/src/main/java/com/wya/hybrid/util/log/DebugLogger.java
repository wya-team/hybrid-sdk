package com.wya.hybrid.util.log;

/**
 * @author :
 */
public class DebugLogger {

    private static final String TAG_NET = "NET";
    private static final String TAG_EVENT = "EVENT";
    private static final String TAG_BATTERY = "BATTERY";
    private static final String TAG_SCREEN = "SCEEN";

    public static void logNet(String message, Object... args) {
        try {
            VLog.t(TAG_NET).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void logEvent(String message, Object... args) {
        try {
            VLog.t(TAG_EVENT).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void logBattery(String message, Object... args) {
        try {
            VLog.t(TAG_BATTERY).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void logScreen(String message, Object... args) {
        try {
            VLog.t(TAG_SCREEN).e(message, args);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
