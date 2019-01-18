package com.wya.example;

import android.content.Context;
import android.hardware.SensorEvent;
import android.os.Bundle;
import android.os.Vibrator;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.wya.hybrid.JsCallBack;
import com.wya.hybrid.WYAWebView;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity implements Screensaver.OnTimeOutListener, ShakeSensor.OnShakeListener {
    private static final String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist/";
    
    private WYAWebView webView;
    private ProgressBar progressBar;
    
    private Screensaver mScreensaver;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_example);
        webView = findViewById(R.id.webView);
        progressBar = findViewById(R.id.progress_bar);
        webView.loadUrl(HTML_PATH);
        webView.register("debugger", new JsCallBack() {
            @Override
            public void response(String data, int id) {
                Toast.makeText(ExampleActivity.this, data, Toast.LENGTH_SHORT).show();
            }
        });
        
        mScreensaver = new Screensaver(5000); //定时5秒
        mScreensaver.setOnTimeOutListener(this); //监听
        mScreensaver.start(); //开始计时
        
        ShakeSensor sensor = new ShakeSensor(this);
        sensor.setShakeListener(this);
        
        SensorManagerHelper sensorManagerHelper = new SensorManagerHelper(this);
        sensorManagerHelper.setOnShakeListener(new SensorManagerHelper.OnShakeListener() {
            @Override
            public void onShake() {
                Log.e("ZCQ", "onShake ");
                playNotificaionVibreate(ExampleActivity.this);
            }
        });
    }
    
    private static void playNotificaionVibreate(Context context) {
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
    
    @Override
    public void onShakeComplete(SensorEvent event) {
        Log.e("ZCQ", "onShakeComplete evnet = " + event.timestamp);
    }
}
