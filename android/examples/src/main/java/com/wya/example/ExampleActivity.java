package com.wya.example;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ProgressBar;

import com.wya.hybrid.JsCallBack;
import com.wya.hybrid.WYAWebView;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity {
	private static final String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist";

	private WYAWebView webView;
	private ProgressBar progressBar;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_example);
		webView = findViewById(R.id.webView);
		progressBar = findViewById(R.id.progress_bar);
		webView.loadUrl(HTML_PATH);
//		webView.emit(Events.KEY_BACK);
		webView.register("debugger", new JsCallBack() {
			@Override
			public void response(String data, int id) {

			}
		});
	}
}
