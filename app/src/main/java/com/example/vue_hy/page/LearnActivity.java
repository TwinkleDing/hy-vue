package com.example.vue_hy.page;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.widget.Toolbar;

import com.example.vue_hy.MainActivity;
import com.example.vue_hy.R;

public class LearnActivity extends AppCompatActivity {
    private WebView mWebView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_learn);
        overridePendingTransition(R.anim.slide_in_from_right, R.anim.slide_out_to_left);

        mWebView = findViewById(R.id.webView);
        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.loadUrl("http://192.168.31.180:3000");
        // 开启DOM缓存，开启LocalStorage存储（html5的本地存储方式）
        mWebView.getSettings().setDomStorageEnabled(true);
        mWebView.getSettings().setDatabaseEnabled(true);
        mWebView.getSettings().setDatabasePath(LearnActivity.this.getApplicationContext().getCacheDir().getAbsolutePath());

    }
}