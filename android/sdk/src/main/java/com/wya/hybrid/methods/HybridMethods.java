package com.wya.hybrid.methods;

import android.app.Activity;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.BaseEmitData;

/**
 * @author : XuDonglin
 * @time : 2019/03/06
 * @describe :
 */
public class HybridMethods implements MethodsImpl {
    public Activity mContext;
    public WYAWebView mWebView;

    private BaseEmitData<Object> mBaseEmitData;

    public HybridMethods(Activity mContext, WYAWebView webView) {
        this.mContext = mContext;
        this.mWebView = webView;
    }

    @Override
    public void setData( int status, String message,Object data) {
        mBaseEmitData = new BaseEmitData<>();
        mBaseEmitData.setStatus(status);
        mBaseEmitData.setMsg(message);
        mBaseEmitData.setData(data);
    }

    @Override
    public BaseEmitData getData() {
        return mBaseEmitData;
    }
}
