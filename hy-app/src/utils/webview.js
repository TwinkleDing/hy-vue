import { PORTRAIT, LANDSCAPE, THEME_COLOR } from "./common";
import { getThemeColor } from "./utils";

export let orientation = PORTRAIT;
export let themeColor = THEME_COLOR;
if (window.androidObject) {
    orientation = window.androidObject.getOrientation()
        ? window.androidObject.getOrientation()
        : PORTRAIT;
        console.log(window.androidObject.themeColor(),123)
        console.log(getThemeColor(window.androidObject.themeColor()),456)
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
