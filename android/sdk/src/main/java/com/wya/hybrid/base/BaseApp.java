package com.wya.hybrid.base;

import android.app.Application;
import android.content.Context;
import android.support.multidex.MultiDex;
import android.util.Log;

import com.tencent.smtt.sdk.QbSdk;
import com.wya.hybrid.util.SystemUtil;
import com.wya.hybrid.util.log.WYALog;

/**
 * @author :
 */
public class BaseApp extends Application {

    private static BaseApp APPLICATION;

    @Override
    public void onCreate() {
        super.onCreate();
        APPLICATION = this;
        if (SystemUtil.isProcess(getApp().getPackageName())) {
            init();
        }
    }

    private void init() {
        // log
        WYALog.init();

        // activity manager
        ActivityManager.init(this);

		// 初始化x5内核
		initTbs();
    }

	private void initTbs() {
		QbSdk.PreInitCallback cb = new QbSdk.PreInitCallback() {

			@Override
			public void onViewInitFinished(boolean arg0) {
				// TODO Auto-generated method stub
				//x5內核初始化完成的回调，为true表示x5内核加载成功，否则表示x5内核加载失败，会自动切换到系统内核。
				Log.d("app", " onViewInitFinished is " + arg0);
			}

			@Override
			public void onCoreInitFinished() {
				// TODO Auto-generated method stub
			}
		};
		//x5内核初始化接口
		QbSdk.initX5Environment(getApplicationContext(), cb);
	}

	public static BaseApp getApp() {
		return APPLICATION;
	}

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
		MultiDex.install(this);
    }

}
