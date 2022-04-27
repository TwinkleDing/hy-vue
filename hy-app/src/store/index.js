import { defineStore } from "pinia";
import { setStore, getStore } from "@/utils/storage.js";

const useStore = defineStore("storeId", {
    state: () => {
        return {
            showButton: getStore("showButton"),
        };
    },
    getters: {},
    actions: {
        setShowButton(button) {
            this.showButton = button;
            setStore("showButton", this.showButton);
        },
        changeShowButton(name, value) {
            this.showButton.style[name] = value;
        },
    },
});
export default useStore;
