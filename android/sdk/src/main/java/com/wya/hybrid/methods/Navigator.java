package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;

import com.google.gson.Gson;
import com.wya.hybrid.R;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.methods.bean.closewin.CloseWinData;
import com.wya.hybrid.methods.bean.openwin.OpenWinActivity;
import com.wya.hybrid.methods.bean.openwin.bean.OpenWinData;

/**
 * @author : XuDonglin
 * @time : 2019/03/06
 * @describe :
 */
public class Navigator extends HybridMethods{

    /**
     * 打开window
     */
    private OpenWinData mOpenWinData;
    /**
     * 关闭window
     */
    private CloseWinData mCloseWinData;

    public Navigator(Activity activity, WYAWebView webView) {
        super(activity, webView);
    }

    /**
     * 打开新页面
     *
     * @param id
     * @param data
     */
    public void push( int id, String data) {
        mOpenWinData = new Gson().fromJson(data, OpenWinData.class);
        if (mOpenWinData != null && mOpenWinData.getName() != null && !mOpenWinData.getName().equals("")) {
            Intent intent = new Intent(mContext, OpenWinActivity.class);
            intent.putExtra("mOpenWinData", mOpenWinData);
            mContext.startActivity(intent);
            if (mOpenWinData.getAnimation() != null) {
                if (mOpenWinData.getAnimation().equals("card")) {
                    mContext.overridePendingTransition(R.anim.card_anim_enter, R.anim.card_anim_exit);
                } else if (mOpenWinData.getAnimation().equals("modal")) {
                    mContext.overridePendingTransition(R.anim.modal_anim_enter, R.anim.modal_anim_exit);
                }
            }
            if (mOpenWinData.isReplace()) {
                mContext.finish();
            }
            setData(1, "响应成功", null);
        } else {
            setData(0, "参数错误", null);
        }

        mWebView.send(id,getData());
    }

    /**
     * 关闭到页面到某个界面
     *
     * @param id
     * @param data
     */
    public void pop( int id, String data) {
        mCloseWinData = new Gson().fromJson(data, CloseWinData.class);
        boolean success;
        if (mCloseWinData != null && mCloseWinData.getName() != null && !mCloseWinData.getName().equals("")) {
            success = ActivityManager.getInstance().closeToWinByName(mCloseWinData);
        } else {
            success = ActivityManager.getInstance().finishTopActivity();
        }
        if (success) {
            setData(1, "响应成功", null);
        } else {
            setData(0, "响应失败", null);
        }
        mWebView.send(id, getData());
    }
}
