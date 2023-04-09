import { createApp } from "vue";
import "./assets/Styles.scss";
import App from "./App.vue";

import router from "./router";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

createApp(App).component("Flicking", Flicking).use(router).mount("#app");
