package com.wya.example;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.wya.hybrid.WYAWebView;

/**
 * @date: 2019/1/16 16:18
 * @author: Chunjiang Mao
 * @classname: ExampleActivity
 * @describe:
 */
public class ExampleActivity extends AppCompatActivity {

	private WYAWebView webView;
	private static final String HTML_PATH = "https://wya-team.github.io/hybrid-sdk/html5/examples/dist";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_example);
		webView = findViewById(R.id.webView);
		webView.loadUrl(HTML_PATH);
	}
}
