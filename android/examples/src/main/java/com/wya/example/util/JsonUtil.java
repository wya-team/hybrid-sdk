package com.wya.example.util;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

/**
 * @author :
 */
public class JsonUtil {
    
    private JsonUtil() {
        throw new UnsupportedOperationException("The class " + getClass().getSimpleName() + " can not be instantiated!");
    }
    
    public static String json2String(Object obj) {
        try {
            Gson gson = new Gson();
            return gson.toJson(obj);
        } catch (Exception e) {
            e.printStackTrace();
            
        }
        return "";
    }
    
    public static <T> T json2Object(String json, Class<T> cls) {
        Gson gson = new Gson();
        try {
            return gson.fromJson(json, cls);
        } catch (Exception e) {
            e.printStackTrace();
            
        }
        return null;
    }
    
    public static HashMap<String, Object> json2Map(String json) {
        Gson gson = new Gson();
        Type type = new TypeToken<HashMap<String, Object>>() {
        }.getType();
        try {
            return gson.fromJson(json, type);
        } catch (Exception e) {
            e.printStackTrace();
            
        }
        return null;
    }
    
    public static <T> List<T> json2List(String json, Class<T[]> clazz) {
        Gson gson = new Gson();
        try {
            T[] array = gson.fromJson(json, clazz);
            return Arrays.asList(array);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
    public static <T> ArrayList<T> json2ArrayList(String json, Class<T> clazz) {
        try {
            ArrayList<JsonObject> jsonObjects = new Gson().fromJson(json, new TypeToken<ArrayList<JsonObject>>() {
            }.getType());
            ArrayList<T> arrayList = new ArrayList<>();
            for (JsonObject jsonObject : jsonObjects) {
                arrayList.add(new Gson().fromJson(jsonObject, clazz));
            }
            return arrayList;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
    public static <T> String array2Json(List<T> list) {
        try {
            Type type = new TypeToken<List<T>>() {
            }.getType();
            Gson gson = new Gson();
            return gson.toJson(list, type);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    
}

