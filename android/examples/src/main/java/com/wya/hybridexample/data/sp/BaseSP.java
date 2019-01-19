package com.wya.hybridexample.data.sp;

import android.content.Context;
import android.content.SharedPreferences;
import android.text.TextUtils;

import com.wya.hybridexample.base.BaseApp;
import com.wya.hybridexample.util.JsonUtil;

import java.util.Map;
import java.util.Set;

/**
 * @author :
 */
public class BaseSP {
    
    private SharedPreferences mSharedPreferences;
    
    public BaseSP(String key) {
        mSharedPreferences = BaseApp.getApp().getSharedPreferences(key, Context.MODE_PRIVATE);
    }
    
    protected void saveBeanToCache(String key, Object obj) {
        try {
            String json = obj != null ? JsonUtil.json2String(obj) : "";
            mSharedPreferences.edit().putString(key, json).apply();
        } catch (Exception e) {
            e.printStackTrace();
            String objStr = obj != null ? obj.toString() : "null";
        }
    }
    
    protected <T> T getCacheBean(String key, Class<T> clazz) {
        T obj = null;
        String json = mSharedPreferences.getString(key, "");
        try {
            if (!TextUtils.isEmpty(json)) {
                obj = JsonUtil.json2Object(json, clazz);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return obj;
    }
    
    protected SharedPreferences getSharedPreferences() {
        return mSharedPreferences;
    }
    
    protected Map<String, ?> getAll() {
        return mSharedPreferences.getAll();
    }
    
    protected void putString(String key, String value) {
        mSharedPreferences.edit().putString(key, value).apply();
    }
    
    protected String getString(String key, String defValue) {
        return mSharedPreferences.getString(key, defValue);
    }
    
    protected void putBoolean(String key, boolean value) {
        mSharedPreferences.edit().putBoolean(key, value).apply();
    }
    
    protected boolean getBoolean(String key, boolean defVaule) {
        return mSharedPreferences.getBoolean(key, defVaule);
    }
    
    protected void putInt(String key, int value) {
        mSharedPreferences.edit().putInt(key, value).apply();
    }
    
    protected int getInt(String key, int defVaule) {
        return mSharedPreferences.getInt(key, defVaule);
    }
    
    protected void putLong(String key, long value) {
        mSharedPreferences.edit().putLong(key, value).apply();
    }
    
    protected long getLong(String key, long defVaule) {
        return mSharedPreferences.getLong(key, defVaule);
    }
    
    protected void putStringSet(String key, Set<String> value) {
        mSharedPreferences.edit().putStringSet(key, value).apply();
    }
    
    protected Set<String> getStringSet(String key, Set<String> defValue) {
        return mSharedPreferences.getStringSet(key, defValue);
    }
    
    protected boolean contains(String key) {
        return mSharedPreferences.contains(key);
    }
    
    public void clear() {
        mSharedPreferences.edit().clear().apply();
    }
    
    protected void remove(String key) {
        mSharedPreferences.edit().remove(key).apply();
    }
    
}
