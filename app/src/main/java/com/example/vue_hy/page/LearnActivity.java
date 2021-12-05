package com.example.vue_hy.page;

import android.annotation.SuppressLint;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.annotation.NonNull;

import com.example.vue_hy.R;
import com.example.vue_hy.common.CommonActivity;

public class LearnActivity extends CommonActivity {

    private final static String LANDSCAPE = "landscape";

    private final static String PORTRAIT = "portrait";

    private WebView mWebView;

    private String mOrientation;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_learn);
        overridePendingTransition(R.anim.slide_in_from_right, R.anim.slide_out_to_left);

        Configuration configuration = this.getResources().getConfiguration(); //获取设置的配置信息
        int ori = configuration.orientation; //获取屏幕方向
        if (ori == Configuration.ORIENTATION_LANDSCAPE) {
            getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                    WindowManager.LayoutParams.FLAG_FULLSCREEN);
            mOrientation = LANDSCAPE;
        } else if (ori == Configuration.ORIENTATION_PORTRAIT) {
            mOrientation = PORTRAIT;
        }

        mWebView = findViewById(R.id.webView);
        mWebView.getSettings().setJavaScriptEnabled(true);
        // 开启DOM缓存，开启LocalStorage存储（html5的本地存储方式）
        mWebView.getSettings().setDomStorageEnabled(true);
        mWebView.getSettings().setDatabaseEnabled(true);
        mWebView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        mWebView.getSettings().setDatabasePath(LearnActivity.this.getApplicationContext().getCacheDir().getAbsolutePath());
        mWebView.addJavascriptInterface(LearnActivity.this, "androidObject");
//        mWebView.loadUrl("http://192.168.31.180:3000");
        mWebView.getSettings().setAllowFileAccessFromFileURLs(true);

        mWebView.loadUrl("file:///android_asset/index.html");
    }

    /**
     * 发送给js的事件，js得主动接收并且去调用
     *
     * @return 屏幕方向
     */
    @JavascriptInterface
    public String getOrientation() {
        return mOrientation;
    }
}