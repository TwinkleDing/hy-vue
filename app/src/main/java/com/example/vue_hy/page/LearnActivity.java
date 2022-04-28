package com.example.vue_hy.page;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.TextView;

import com.example.vue_hy.R;
import com.example.vue_hy.common.CommonActivity;

public class LearnActivity extends CommonActivity {

    private final static String LANDSCAPE = "landscape";

    private final static String PORTRAIT = "portrait";

    private WebView mWebView;

    private String mOrientation;

    private String mRouterPage;

    private boolean isLoading = true;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_learn);
        overridePendingTransition(R.anim.slide_in_from_right, R.anim.slide_out_to_left);
        Intent intent = getIntent();
        mRouterPage = intent.getStringExtra("routerPage");

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
        mWebView.loadUrl("http://10.168.2.237:8006");
        mWebView.getSettings().setAllowFileAccessFromFileURLs(true);

//        mWebView.loadUrl("file:///android_asset/index.html");
    }


    /**
     * 发送给js的事件，js得主动接收并且去调用
     *
     * @return 是android
     */
    @JavascriptInterface
    public boolean isAndroid() {
        return true;
    }

    /**
     * @return 屏幕方向
     */
    @JavascriptInterface
    public String getOrientation() {
        return mOrientation;
    }

    /**
     * @return 主题颜色
     */
    @JavascriptInterface
    public String themeColor() {
        return getResources().getString(R.color.purple_700);
    }

    /**
     * @return 主题颜色
     */
    @JavascriptInterface
    public String setRouterPage() {
        return mRouterPage;
    }

    /**
     * @return html加载完成
     */
    @JavascriptInterface
    public void stopLoading() {
        TextView loading = findViewById(R.id.loading);
        loading.setVisibility(View.GONE);
    }
}