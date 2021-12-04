package com.example.vue_hy;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.TextView;

import com.example.vue_hy.page.LearnActivity;

public class MainActivity extends AppCompatActivity {

    private Button mButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        overridePendingTransition(R.anim.slide_in_from_left, R.anim.slide_out_to_right);
        mButton = findViewById(R.id.start_learn);
        mButton.setOnClickListener(v -> {
            Intent mainIntent = new Intent(MainActivity.this, LearnActivity.class);
            startActivity(mainIntent);
        });
    }
}