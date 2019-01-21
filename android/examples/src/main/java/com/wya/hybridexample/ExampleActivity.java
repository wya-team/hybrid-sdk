package com.wya.hybridexample;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.widget.ProgressBar;

import com.wya.hybrid.WYAWebView;
import com.wya.hybridexample.base.ActivityManager;
import com.wya.hybridexample.data.event.ForegroundEvent;
import com.wya.hybridexample.data.sp.ForegroundStateSP;
import com.wya.hybridexample.permission.PermissionCallback;
import com.wya.hybridexample.permission.PermissionCheck;
import com.wya.hybridexample.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity implements PermissionCallback {
	private static final String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";

	private WYAWebView mWebView;
	private ProgressBar progressBar;
	private EventManager mEventManager;

	/**
	 * permission
	 */
	protected PermissionCheck permissionHelper;

	private String[] REQUEST_PERMISSIONS = new String[]{
		android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
		android.Manifest.permission.READ_PHONE_STATE,
		android.Manifest.permission.DISABLE_KEYGUARD
	};

	private boolean mIsFromBackground = false;

	private void checkPermission() {
		permissionHelper.request(REQUEST_PERMISSIONS);
	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_example);

		permissionHelper = PermissionCheck.getInstance(this);
		checkPermission();

		// webView
		mWebView = findViewById(R.id.webView);
		progressBar = findViewById(R.id.progress_bar);
		mWebView.loadUrl(HTML_PATH);

		// event manager
		mEventManager = new EventManager(this, mWebView);

	}

	@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		permissionHelper.onActivityForResult(requestCode);
	}

	@Override
	public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
		permissionHelper.onRequestPermissionsResult(requestCode, permissions, grantResults);
	}

	@Override
	public void onPermissionGranted(PermissionCheck permissionCheck, String[] strings) {
		// TODO: 2019/1/19 ZCQ TEST
	}

	@Override
	public void onPermissionDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
		// TODO: 2019/1/19 ZCQ TEST
	}

	@Override
	public void onPermissionNeedExplanation(PermissionCheck permissionCheck, final String permissionName) {
		// TODO: 2019/1/19 ZCQ TEST
	}

	@Override
	public void onPermissionReallyDeclined(PermissionCheck permissionCheck, final String[] permissionName) {
		// TODO: 2019/1/19 ZCQ TEST
	}

	@Override
	protected void onResume() {
		super.onResume();
		if (ActivityManager.getInstance().isForeground() && mIsFromBackground) {
			DebugLogger.logEvent("onResume ... ");
			mIsFromBackground = false;
			ForegroundStateSP.get().setIsResume(true);
			ForegroundStateSP.get().setIsPause(false);

			ForegroundEvent event = new ForegroundEvent();
			event.setPause(false);
			event.setResume(true);
			EventBus.getDefault().post(event);
		}
	}

	@Override
	public void onStop() {
		super.onStop();
		if (!ActivityManager.getInstance().isForeground()) {
			DebugLogger.logEvent("onStop ... ");

			mIsFromBackground = true;
			ForegroundStateSP.get().setIsPause(true);
			ForegroundStateSP.get().setIsResume(false);

			ForegroundEvent event = new ForegroundEvent();
			event.setPause(true);
			event.setResume(false);
			EventBus.getDefault().post(event);
		}
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		// event manager
		if (null != mEventManager) {
			mEventManager.release();
		}
	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		switch (keyCode) {
			case KeyEvent.KEYCODE_BACK:
				mEventManager.keyBack(keyCode);
				return false;
			case KeyEvent.KEYCODE_VOLUME_UP:
				mEventManager.volumeUp(keyCode);
				return false;
			case KeyEvent.KEYCODE_VOLUME_DOWN:
				mEventManager.volumeDown(keyCode);
				return false;
			case KeyEvent.KEYCODE_MENU:

				return false;
			default:
				break;
		}
		return super.onKeyDown(keyCode, event);
	}

}
