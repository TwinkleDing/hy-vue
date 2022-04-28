import { createStore } from "vuex";
import { setStore, getStore } from "@/utils/storage.js";
import {
    isAndroid,
    orientation,
    themeColor,
    routerPage,
} from "@/utils/webview.js";

const store = new createStore({
    state: {
        isAndroid: isAndroid,
        orientation: orientation,
        themeColor: themeColor,
        routerPage: routerPage,
        showButton: getStore("showButton"),
    },
    getters: {
        isAndroid: (state) => state.isAndroid,
        orientation: (state) => state.orientation,
        themeColor: (state) => state.themeColor,
        routerPage: (state) => state.routerPage,
        showButton: (state) => state.showButton,
    },
    mutations: {
        SET_SHOW_BUTTON(state, button) {
            this.state.showButton = button.value;
            const content = getStore("showButtonStyle") || {};
            for (let key in content) {
                this.state.showButton.style[key] = content[key];
            }
        },
        CHANGE_SHOW_BUTTON(state, button) {
            const { name, value } = button;
            this.state.showButton.style[name] = value;
            const content = getStore("showButtonStyle") || {};
            content[name] = value;
            setStore({
                name: "showButtonStyle",
                content,
            });
        },
        ORIENTATIONCHANGE(state, orientation) {
            this.state.orientation = orientation;
        },
    },
});
export default store;
