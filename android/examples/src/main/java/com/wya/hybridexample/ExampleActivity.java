package com.wya.hybridexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ProgressBar;

import com.tencent.smtt.sdk.WebChromeClient;
import com.tencent.smtt.sdk.WebView;
import com.wya.hybrid.HybridManager;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.base.BaseApp;
import com.wya.hybrid.localserver.LocalServer;
import com.wya.hybrid.permission.PermissionCallback;
import com.wya.hybrid.permission.PermissionCheck;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity implements PermissionCallback, LocalServer.LocalServerListener {
	private static String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";
	private static final int PROGRESS_MAX = 100;

	private WYAWebView mWebView;
	private ProgressBar mProgressBar;
	private HybridManager mHybridManager;

	/**
	 * permission
	 */
	protected PermissionCheck permissionHelper;

	private static String[] REQUEST_PERMISSIONS = new String[]{
		android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
		android.Manifest.permission.RECORD_AUDIO,
		android.Manifest.permission.READ_PHONE_STATE,
		android.Manifest.permission.DISABLE_KEYGUARD,
		android.Manifest.permission.WAKE_LOCK,
		android.Manifest.permission.READ_CONTACTS,
		android.Manifest.permission.CAMERA
	};

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_example);
		checkPermission();
		initHybrid();
	}

	private void checkPermission() {
		permissionHelper = PermissionCheck.getInstance(this);
		permissionHelper.request(REQUEST_PERMISSIONS);
	}

	private void initHybrid() {
		// webView
		mWebView = findViewById(R.id.webView);
		mWebView.initData();
		mHybridManager = mWebView.getHybridManager();

		LocalServer.Companion.setListener(this);
		int port = BaseApp.getApp().getLocalServerPort();
		if (-1 != port) {
			HTML_PATH = "http://localhost:" + port;
			if (null != mWebView) {
				mWebView.loadUrl(HTML_PATH);
			}
		}
		setProgress();
	}

	/**
	 * 设置网页加载进度条
	 */
	private void setProgress() {
		mProgressBar = findViewById(R.id.progress_bar);
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
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		permissionHelper.onActivityForResult(requestCode);
		if (mHybridManager != null) {
			mHybridManager.onActivityResult(requestCode, resultCode, data);
		}
	}

	@Override
	public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
		permissionHelper.onRequestPermissionsResult(requestCode, permissions, grantResults);
	}

	@Override
	public void onPermissionGranted(PermissionCheck permissionCheck, String[] strings) {
	}

	@Override
	public void onPermissionDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
	}

	@Override
	public void onPermissionNeedExplanation(PermissionCheck permissionCheck, final String permissionName) {
	}

	@Override
	public void onPermissionReallyDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
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

	@Override
	public void onLocalServerStarted(int port) {
		if (-1 != BaseApp.getApp().getLocalServerPort()) {
			return;
		}
		BaseApp.getApp().setLocalServerPort(port);
		if (-1 != port) {
			HTML_PATH = "http://localhost:" + port;
		}
		if (null != mWebView) {
			mWebView.loadUrl(HTML_PATH);
		}
	}
}
