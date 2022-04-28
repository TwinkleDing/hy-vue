import { PORTRAIT, LANDSCAPE, THEME_COLOR } from "./common";
import { getThemeColor } from "./utils";
import store from "../store";

export let isAndroid = false;
export let orientation =
    window.orientation === 180 || window.orientation === 0
        ? PORTRAIT
        : LANDSCAPE;
export let themeColor = THEME_COLOR;
export let routerPage = "/";

if (window.androidObject) {
    const androidIsAndroid = window.androidObject.isAndroid();
    // 获取手机旋转角度
    const androidOrientation = window.androidObject.getOrientation();
    // 获取手机应用主题色
    const androidThemeColor = window.androidObject.themeColor();
    // 获取跳转的页面
    const androidRouterPage = window.androidObject.setRouterPage();

    isAndroid = androidIsAndroid ? androidIsAndroid : isAndroid;
    orientation = androidOrientation ? androidOrientation : PORTRAIT;
    themeColor = androidThemeColor
        ? getThemeColor(androidThemeColor)
        : THEME_COLOR;
    routerPage = androidRouterPage;
} else {
    window.addEventListener("orientationchange", function (event) {
        orientation =
            window.orientation === 180 || window.orientation === 0
                ? PORTRAIT
                : LANDSCAPE;
        store.commit("ORIENTATIONCHANGE", orientation);
    });
}
