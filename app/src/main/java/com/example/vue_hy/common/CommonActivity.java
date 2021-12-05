package com.example.vue_hy.common;

import androidx.appcompat.app.AppCompatActivity;

import com.example.vue_hy.R;

public class CommonActivity extends AppCompatActivity {

    @Override
    public void finish() {
        super.finish();
        overridePendingTransition(R.anim.slide_in_from_left, R.anim.slide_out_to_right);
    }
}
