import { createApp } from "vue";
import "./css/index.scss";
import { Button, Tab, Tabs, Slider, Icon, Loading, Overlay } from "vant";
import store from "./store";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Loading);
app.use(Overlay);
app.use(Button);
app.use(Tab);
app.use(Tabs);
app.use(Slider);
app.use(Icon);
app.mount("#app");
