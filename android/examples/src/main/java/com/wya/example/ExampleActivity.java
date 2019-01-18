package com.wya.example;

import android.content.Context;
import android.os.Bundle;
import android.os.Vibrator;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.wya.example.data.sp.NetSP;
import com.wya.example.data.sp.VisibleStateSP;
import com.wya.example.util.log.DebugLogger;
import com.wya.hybrid.JsCallBack;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.AppIdle;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.BatteryLow;
import com.wya.hybrid.bean.BatteryStatus;
import com.wya.hybrid.bean.NetState;
import com.wya.hybrid.bean.Shake;
import com.wya.hybrid.bean.TakeScreenshot;
import com.wya.hybrid.bean.VisibleState;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity implements Screensaver.OnTimeOutListener {
    private static final String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";
    
    private WYAWebView webView;
    private ProgressBar progressBar;
    
    private Screensaver mScreensaver;
    private EventManager mEventManager;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_example);
        mEventManager = EventManager.get();
        webView = findViewById(R.id.webView);
        progressBar = findViewById(R.id.progress_bar);
        webView.loadUrl(HTML_PATH);
        webView.register("debugger", new JsCallBack() {
            @Override
            public void response(String data, int id) {
                DebugLogger.logWebView("data = %s , id = %s", data, id);
                Toast.makeText(ExampleActivity.this, data, Toast.LENGTH_SHORT).show();
                BaseEmitData<Object> emitData = new BaseEmitData<>();
                
                if (null == emitData) {
                    emitData = new BaseEmitData<>();
                }
                emitData.setMsg("响应成功");
                int status = 0;
                
                if (null != data) {
                    emitData.setData(data);
                    status = 1;
                }
                emitData.setStatus(status);
                if (data.contains(BatteryLow.EVENT_BATTER_LOW)) {
                    emitData = mEventManager.getBatteryLow();
                } else if (data.contains(BatteryStatus.EVENT_BATTERY_STATUS)) {
                    emitData = mEventManager.getBatteryStatus();
                } else if (data.contains(NetState.EVENT_OFFLINE)) {
                    if (!NetSP.get().isOnline()) {
                        emitData = mEventManager.getOffline();
                    }
                } else if (data.contains(NetState.EVENT_ONLINE)) {
                    if (NetSP.get().isOnline()) {
                        emitData = mEventManager.getOffline();
                    }
                } else if (data.contains(VisibleState.EVENT_PAUSE)) {
                    if (VisibleStateSP.get().isPause()) {
                        emitData = mEventManager.getOffline();
                    }
                } else if (data.contains(VisibleState.EVENT_RESUME)) {
                    if (VisibleStateSP.get().isResume()) {
                        emitData = mEventManager.getOffline();
                    }
                } else if (data.contains(Shake.EVENT_SHAKE)) {
                
                } else if (data.contains(AppIdle.EVENT_APP_IDLE)) {
                
                } else if (data.contains(TakeScreenshot.EVENT_TAKE_SCREENSHOT)) {
                    
                }
                
                if (null != emitData) {
                    emitData.setStatus(1);
                }
                webView.send(id, emitData);
                
            }
        });
        
        // 定时5秒
        mScreensaver = new Screensaver(5000);
        // 监听
        mScreensaver.setOnTimeOutListener(this);
        // 开始计时
        mScreensaver.start();
        
        SensorManagerHelper sensorManagerHelper = new SensorManagerHelper(this);
        sensorManagerHelper.setOnShakeListener(new SensorManagerHelper.OnShakeListener() {
            @Override
            public void onShake() {
                Log.e("ZCQ", "onShake ");
                playVibreate(ExampleActivity.this);
            }
        });
    }
    
    private static void playVibreate(Context context) {
        try {
            Vibrator vibrator = (Vibrator) context.getSystemService(VIBRATOR_SERVICE);
            if (null != vibrator) {
                vibrator.vibrate(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    @Override
    public void onTimeOut(Screensaver screensaver) {
    
    }
    
    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        mScreensaver.resetTime();
        return super.dispatchTouchEvent(ev);
    }
    
    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        mScreensaver.resetTime();
        return super.dispatchKeyEvent(event);
    }
    
    @Override
    protected void onDestroy() {
        super.onDestroy();
        mScreensaver.stop();
    }
    
}
