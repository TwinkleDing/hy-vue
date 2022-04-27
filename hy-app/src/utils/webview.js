import { PORTRAIT, LANDSCAPE, THEME_COLOR } from "./common";
import { getThemeColor } from "./utils";

export let orientation = PORTRAIT;
export let themeColor = THEME_COLOR;
if (window.androidObject) {
    // 获取手机旋转角度
    orientation = window.androidObject.getOrientation()
        ? window.androidObject.getOrientation()
        : PORTRAIT;
    // 获取手机应用主题色
    themeColor = getThemeColor(window.androidObject.themeColor())
        ? getThemeColor(window.androidObject.themeColor())
        : THEME_COLOR;
} else {
    window.addEventListener("orientationchange", function (event) {
        orientation =
            window.orientation === 180 || window.orientation === 0
                ? PORTRAIT
                : LANDSCAPE;
    });
}

export default {
    orientation,
    themeColor,
};
