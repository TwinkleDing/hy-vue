import { PORTRAIT, LANDSCAPE } from "./common";

export const getThemeColor = (color) => {
    if (color.replace("#", "").length === 6) {
        return color;
    } else if (color.replace("#", "").length === 8) {
        // android的透明的和web的透明度参数相反
        return (color = `#${color.substr(3, 8)}${color.substr(1, 2)}`);
    }
};

export function getOrientation() {
    return window.orientation % 180 === 0 ? PORTRAIT : LANDSCAPE;
}
