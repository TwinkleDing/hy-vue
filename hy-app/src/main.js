import {
    createApp
} from "vue";
import App from "./App.vue";
import "./css/index.scss";
import "./utils/webview.js";
import Vant from "vant";

createApp( App ).use( Vant ).mount( "#app" );