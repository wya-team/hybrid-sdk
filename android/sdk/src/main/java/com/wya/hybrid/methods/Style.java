package com.wya.hybrid.methods;

import android.app.Activity;
import android.graphics.Color;

import com.wya.hybrid.WYAWebView;
import com.wya.uikit.toolbar.StatusBarUtil;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Style extends HybridMethods {
    public Style(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }


    /**
     * 设置状态栏颜色
     *
     * @param data
     * @param id
     */
    public void setStatusBarStyle( int id, String data) {
        String color = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            color = jsonObject.getString("color");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        StatusBarUtil.setColor(mContext, Color.parseColor(color));
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    public void setWin() {

    }

    public void setBadge() {

    }
}
