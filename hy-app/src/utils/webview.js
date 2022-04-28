import { THEME_COLOR } from "./common";
import { getThemeColor, getOrientation } from "./utils";
import store from "../store";

export let isAndroid = false;
export let orientation = getOrientation();
export let themeColor = THEME_COLOR;
export let routerPage = "/";

if (window.androidObject) {
    const vConsole = new VConsole();
    isAndroid = window.androidObject.isAndroid();
    // 获取手机旋转角度
    orientation = window.androidObject.getOrientation();
    // 获取手机应用主题色
    themeColor = getThemeColor(window.androidObject.themeColor());
    // 获取跳转的页面
    routerPage = window.androidObject.setRouterPage();

} else {
    window.addEventListener("orientationchange", function (event) {
        orientation = getOrientation();
        store.commit("ORIENTATIONCHANGE", orientation);
    });
}
