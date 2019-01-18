package com.wya.example.util;

import android.app.Activity;
import android.content.Context;
import android.text.TextUtils;

import java.util.Collection;

/**
 * @author :
 */
public class CheckUtil {
    
    public static boolean isNotEmpty(CharSequence str) {
        return !isEmpty(str);
    }
    
    public static boolean isEmpty(CharSequence str) {
        return TextUtils.isEmpty(str) || "null".equalsIgnoreCase(str.toString());
    }
    
    /**
     * 判断是否有空值，都不为空返回true
     *
     * @param str :
     * @return :
     */
    public static boolean isAnyNotEmpty(CharSequence... str) {
        return !isAnyEmpty(str);
    }
    
    /**
     * 判断是否有空值，任意一个为空返回true
     *
     * @param str :
     * @return :
     */
    public static boolean isAnyEmpty(CharSequence... str) {
        for (CharSequence chars : str) {
            if (isEmpty(chars)) {
                return true;
            }
        }
        return false;
    }
    
    /**
     * @param list a  collection
     * @return true if the list has more than zero elements ,false otherwise
     */
    public static boolean isValidate(Collection list) {
        return null != list && list.size() > 0;
    }
    
    public static boolean isValidate(Context context) {
        if (context == null) {
            return false;
        } else if (context instanceof Activity && ((Activity) context).isFinishing()) {
            return false;
        }
        return true;
    }
}
