package com.example.vue_hy.page;

import android.annotation.SuppressLint;
import android.content.pm.ActivityInfo;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;

import com.example.vue_hy.R;
import com.example.vue_hy.common.CommonActivity;

public class LearnActivity extends CommonActivity {
    private WebView mWebView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_learn);
        overridePendingTransition(R.anim.slide_in_from_right, R.anim.slide_out_to_left);
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

        mWebView = findViewById(R.id.webView);
        mWebView.getSettings().setJavaScriptEnabled(true);
        // 开启DOM缓存，开启LocalStorage存储（html5的本地存储方式）
        mWebView.getSettings().setDomStorageEnabled(true);
        mWebView.getSettings().setDatabaseEnabled(true);
        mWebView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        mWebView.getSettings().setDatabasePath(LearnActivity.this.getApplicationContext().getCacheDir().getAbsolutePath());
        mWebView.addJavascriptInterface(LearnActivity.this, "androidObject");
        mWebView.loadUrl("http://192.168.31.180:3000");
    }

    @JavascriptInterface
    public String getOrientation() {
        String orientation = "ss";
        Configuration mConfiguration = this.getResources().getConfiguration(); //获取设置的配置信息
        int ori = mConfiguration.orientation; //获取屏幕方向
        if (ori == Configuration.ORIENTATION_LANDSCAPE) {
            orientation = "landscape";
        } else if (ori == Configuration.ORIENTATION_PORTRAIT) {
            orientation = "portrait";
        }
        return orientation;
    }
}