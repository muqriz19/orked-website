import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bulma/css/bulma.css";
import "./assets/styles/global.less";
import "./assets/styles/customhelpers.less";

createApp(App).use(store).use(router).mount("#app");
