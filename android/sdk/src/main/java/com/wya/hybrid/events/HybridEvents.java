package com.wya.hybrid.events;

import android.app.Activity;
import android.content.BroadcastReceiver;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.BaseEmitData;

/**
 * @date: 2019/3/8 15:33
 * @author: Chunjiang Mao
 * @classname: HybridEvents
 * @describe:
 */
public class HybridEvents implements EventsImpl {
	public Activity mContext;
	public WYAWebView mWebView;

	private BaseEmitData<Object> mBaseEmitData;

	public HybridEvents(Activity mContext, WYAWebView webView) {
		this.mContext = mContext;
		this.mWebView = webView;
	}



	@Override
	public void setData(int status, String message, Object data) {
		mBaseEmitData = new BaseEmitData<>();
		mBaseEmitData.setStatus(status);
		mBaseEmitData.setMsg(message);
		mBaseEmitData.setData(data);
	}

	@Override
	public BaseEmitData getData() {
		return mBaseEmitData;
	}

	public void unRegisterReceiver(BroadcastReceiver receiver) {
		if (mContext == null || null == receiver) {
			return;
		}
		mContext.unregisterReceiver(receiver);
	}
}
