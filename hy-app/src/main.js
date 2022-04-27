import { createApp } from "vue";
import App from "./App.vue";
import "./css/index.scss";
import "./utils/webview.js";
import { Button, Tab, Tabs, Slider, Icon } from "vant";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(Button);
app.use(Tab);
app.use(Tabs);
app.use(Slider);
app.use(Icon);
app.use(createPinia());
app.mount("#app");
