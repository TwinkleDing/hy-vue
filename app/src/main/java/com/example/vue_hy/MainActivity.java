package com.example.vue_hy;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.TextView;

import com.example.vue_hy.common.CommonActivity;
import com.example.vue_hy.page.LearnActivity;

public class MainActivity extends CommonActivity {

    private Button mBaseCssButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        overridePendingTransition(R.anim.slide_in_from_left, R.anim.slide_out_to_right);
        mBaseCssButton = findViewById(R.id.learn_base_css);
        Bundle bundle = new Bundle();
        mBaseCssButton.setOnClickListener(v -> {
            bundle.putString("routerPage","baseCss");
            Intent mainIntent = new Intent(MainActivity.this, LearnActivity.class);
            mainIntent.putExtras(bundle);
            startActivity(mainIntent);
        });
    }
}