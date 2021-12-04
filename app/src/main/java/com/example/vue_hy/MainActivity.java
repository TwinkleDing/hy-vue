package com.example.vue_hy;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.loadUrl("http://192.168.31.180:666");
        // 开启DOM缓存，开启LocalStorage存储（html5的本地存储方式）
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setDatabaseEnabled(true);


        webView.getSettings().setDatabasePath(MainActivity.this.getApplicationContext().getCacheDir().getAbsolutePath());
    }
}