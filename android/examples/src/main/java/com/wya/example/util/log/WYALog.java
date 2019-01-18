package com.wya.example.util.log;

import com.orhanobut.logger.AndroidLogAdapter;
import com.orhanobut.logger.Logger;
import com.orhanobut.logger.Printer;
/**
 * @author :
 */
public class WYALog {
    
    public static void init() {
        init(Logger.VERBOSE);
    }
    
    public static void init(int logLevel) {
        if (logLevel == -1) {
            logLevel = Logger.ERROR;
        }
        Logger.addLogAdapter(new AndroidLogAdapter());
    }
    
    public static Printer t(String tag) {
        return Logger.t(tag);
    }
    
    public static Printer t(String tag, int methodCount) {
        return Logger.t(tag);
    }
    
    public static void log(int priority, String tag, String message, Throwable throwable) {
        Logger.log(priority, tag, message, throwable);
    }
    
    public static void d(String message, Object... args) {
        Logger.d(message, args);
    }
    
    public static void e(String message, Object... args) {
        Logger.e(message, args);
    }
    
    public static void e(Throwable throwable, String message, Object... args) {
        Logger.e(throwable, message, args);
    }
    
    public static void i(String message, Object... args) {
        Logger.i(message, args);
    }
    
    public static void v(String message, Object... args) {
        Logger.v(message, args);
    }
    
    public static void w(String message, Object... args) {
        Logger.w(message, args);
    }
    
    public static void wtf(String message, Object... args) {
        Logger.wtf(message, args);
    }
    
    public static void json(String json) {
        Logger.json(json);
    }
    
    public static void xml(String xml) {
        Logger.xml(xml);
    }
    
    public static void d(String tag, String msg) {
        Logger.d(tag, msg);
    }
    
    public static void e(String tag, String msg) {
        Logger.e(tag, msg);
    }
    
    public static void i(String tag, String msg) {
        Logger.i(tag, msg);
    }
    
    public static void v(String tag, String msg) {
        Logger.v(tag, msg);
    }
    
    public static void w(String tag, String msg) {
        Logger.w(tag, msg);
    }
}
