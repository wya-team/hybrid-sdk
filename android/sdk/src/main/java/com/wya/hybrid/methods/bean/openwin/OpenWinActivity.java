package com.wya.hybrid.methods.bean.openwin;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ProgressBar;

import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebView;
import com.wya.hybrid.HybridManager;
import com.wya.hybrid.R;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.base.ActivityManager;
import com.wya.hybrid.methods.bean.openwin.bean.OpenWinData;
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

	private WYAWebView mWebView;
	private ProgressBar mProgressBar;
	private HybridManager mHybridManager;
	private OpenWinData mOpenWinData;

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
		mOpenWinData = (OpenWinData) getIntent().getSerializableExtra("mOpenWinData");
		showToolBar(!mOpenWinData.isHideTopBar());
		if(mOpenWinData.getTitle() != null){
			setTitle(mOpenWinData.getTitle());
		}
		setLeftIconClickListener(new LeftIconClickListener() {
			@Override
			public void leftIconClick(View view) {
				finish();
				if(mOpenWinData.getAnimation() != null){
					if(mOpenWinData.getAnimation().equals("card")){
						overridePendingTransition(R.anim.card_anim_back_enter, R.anim.card_anim_back_exit);
					} else if(mOpenWinData.getAnimation().equals("modal")){
						overridePendingTransition(0, R.anim.modal_anim_back_exit);
					}
				}
			}
		});
		mWebView.getBaseEmitData().getData().setName(mOpenWinData.getName());
		mWebView.loadUrl(mOpenWinData.getUrl());
		ActivityManager.getInstance().addOpenWinActivity(mOpenWinData.getName(), this);
	}

	private void initHybrid() {
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
	public void onBackPressed() {
		super.onBackPressed();
		if(mOpenWinData.getAnimation() != null){
			if(mOpenWinData.getAnimation().equals("card")){
				overridePendingTransition(R.anim.card_anim_back_enter, R.anim.card_anim_back_exit);
			} else if(mOpenWinData.getAnimation().equals("modal")){
				overridePendingTransition(0, R.anim.modal_anim_back_exit);
			}
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
