import {
    createApp
} from "vue";
import App from "./App.vue";
import "./index.css";
import "./utils/webview.js";
import Vconsole from "vconsole";
new Vconsole();

createApp( App ).mount( "#app" );