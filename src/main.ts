import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as ROT from "rot-js/lib/index";

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$ROT = ROT;

app.mount("#app");
