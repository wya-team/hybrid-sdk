package com.wya.hybrid.methods.openwin;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ProgressBar;

import com.google.gson.Gson;
import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebView;
import com.wya.hybrid.HybridManager;
import com.wya.hybrid.R;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.methods.openwin.bean.OpenWinData;
import com.wya.uikit.toolbar.BaseToolBarActivity;
import com.wya.utils.utils.ColorUtil;

/**
 * @date: 2019/2/18 10:15
 * @author: Chunjiang Mao
 * @classname: OpenWinActivity
 * @describe: 打开新的窗口
 */
public class OpenWinActivity extends BaseToolBarActivity {
	private String data = "";
	private static String url = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";
	private static final int PROGRESS_MAX = 100;

	private OpenWinData mOpenWinData;
	private WYAWebView mWebView;
	private ProgressBar mProgressBar;
	private HybridManager mHybridManager;

	@Override
	protected int getLayoutId() {
		return R.layout.activity_open_win;
	}
	@Override
	public void onCreate(@Nullable Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setLeftIcon(R.drawable.icon_backblue);
		setBackgroundColor(ColorUtil.hex2Int("#ffffff"), true);
		initView();
	}

	private void initView() {
		initHybrid();
		data = getIntent().getStringExtra("data");
		mOpenWinData = new Gson().fromJson(data, OpenWinData.class);
		mOpenWinData.setTitle("test");
		mOpenWinData.setName("name");
		mOpenWinData.setHideBottomBar(false);
		mOpenWinData.setHideTopBar(true);
		mOpenWinData.sethScrollBarEnabled(false);
		mOpenWinData.setvScrollBarEnabled(false);
		mOpenWinData.setUrl("https://wya-team.github.io/hybrid-sdk/html5/examples/dist/");
		mOpenWinData.setScaleEnabled(false);

		showToolBar(!mOpenWinData.isHideTopBar());
		setTitle(mOpenWinData.getTitle());

		mWebView.loadUrl(mOpenWinData.getUrl());
		ActivityManager.getInstance().addOpenWinActivity(mOpenWinData.getName(), this);
	}


	private void initHybrid(){
		// webView
		mWebView = (WYAWebView) findViewById(R.id.webView);
		mWebView.initData();
		mHybridManager = mWebView.getHybridManager();
		setProgress();
	}

	/**
	 * 设置网页加载进度条
	 */
	private void setProgress() {
		mProgressBar = (ProgressBar) findViewById(R.id.progress_bar);
		mWebView.setWebChromeClient(new WebChromeClient() {
			@Override
			public void onProgressChanged(WebView view, int newProgress) {
				if (newProgress != PROGRESS_MAX) {
					mProgressBar.setProgress(newProgress);
					mProgressBar.setVisibility(View.VISIBLE);
				} else {
					mProgressBar.setVisibility(View.GONE);
				}
			}
		});
	}

	@Override
	protected void onResume() {
		super.onResume();
		if (null != mHybridManager) {
			mHybridManager.onActivityResume();
		}
	}

	@Override
	public void onStop() {
		super.onStop();
		if (null != mHybridManager) {
			mHybridManager.onActivityStop();
		}
	}

	@Override
	protected void onPause() {
		super.onPause();
		if (null != mHybridManager) {
			mHybridManager.onActivityPause();
		}
	}

	@Override
	protected void onStart() {
		super.onStart();
		if (null != mHybridManager) {
			mHybridManager.onActivityStart();
		}
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		if (null != mHybridManager) {
			mHybridManager.release();
			mHybridManager.onActivityDestroy();
		}
	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		switch (keyCode) {
			case KeyEvent.KEYCODE_BACK:
				ActivityManager.getInstance().removeFirstActivityDataList();
				mHybridManager.keyBack(keyCode);
				return super.onKeyDown(keyCode, event);
			case KeyEvent.KEYCODE_VOLUME_UP:
				mHybridManager.volumeUp(keyCode);
				return super.onKeyDown(keyCode, event);
			case KeyEvent.KEYCODE_VOLUME_DOWN:
				mHybridManager.volumeDown(keyCode);
				return super.onKeyDown(keyCode, event);
			case KeyEvent.KEYCODE_MENU:
				return super.onKeyDown(keyCode, event);
			default:
				break;
		}
		return super.onKeyDown(keyCode, event);
	}

}
