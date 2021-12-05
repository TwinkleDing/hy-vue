package com.example.vue_hy;

import android.util.Log;
import android.webkit.JavascriptInterface;

public class AndroidToJs extends Object {

    @JavascriptInterface
    public void hello() {
        Log.i(",,,,", "js调用了android得方法");
    }
}
