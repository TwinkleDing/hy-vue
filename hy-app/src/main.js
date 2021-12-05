import {
    createApp
} from "vue";
import App from "./App.vue";
import "./css/index.css";
import "./utils/webview.js";
import Vant from "vant";
import "vant/lib/index.css";

createApp( App ).use( Vant ).mount( "#app" );