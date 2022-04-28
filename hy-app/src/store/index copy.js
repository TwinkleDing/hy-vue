import { defineStore } from "pinia";
import { setStore, getStore } from "@/utils/storage.js";
import {
    isAndroid,
    orientation,
    themeColor,
    routerPage,
} from "@/utils/webview.js";

const useStore = defineStore("storeId", {
    state: () => {
        return {
            isAndroid: isAndroid,
            orientation: orientation,
            themeColor: themeColor,
            routerPage: routerPage,
            showButton: getStore("showButton"),
        };
    },
    getters: {},
    actions: {
        SET_SHOW_BUTTON(button) {
            this.showButton = button;
            setStore("showButton", this.showButton);
        },
        CHANGE_SHOW_BUTTON(name, value) {
            this.showButton.style[name] = value;
        },
    },
});
export default useStore;
