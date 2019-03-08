package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.view.WindowManager;

import com.wya.hybrid.WYAWebView;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Screen extends HybridMethods {
    public Screen(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 保持屏幕亮度
     *
     * @param data
     * @param id
     */
    public void setKeepScreenOn(int id, String data) {
        boolean keepOn = false;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            keepOn = jsonObject.getBoolean("keepOn");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        if (keepOn) {
            mContext.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        }
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 设置屏幕旋转方向
     *
     * @param data
     * @param id
     */
    public void setScreenOrientation(int id, String data) {
        String orientation = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            orientation = jsonObject.getString("orientation");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        switch (orientation) {
            case "portraitUp":
            case "portraitDown":
                mContext.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                break;
            case "landscapeLeft":
            case "landscapeRight":
                mContext.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
                break;
            default:
                break;
        }
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 回到手机桌面
     *
     * @param data
     * @param id
     */
    public void toLauncher(int id, String data) {
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_MAIN);
        intent.addCategory(Intent.CATEGORY_HOME);
        mContext.startActivity(intent);
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }
}
