export const getThemeColor = (color) => {
    if (color.replace("#", "").length === 6) {
        return color;
    } else if (color.replace("#", "").length === 8) {
        return color = `#${color.substr(3, 8)}${color.substr(1, 2)}`;
    }
};
