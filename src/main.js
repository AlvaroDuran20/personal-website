import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from "vue";

import NavigationBar from "./components/NavigationBar.vue";
import App from "./App.vue";

const app = createApp(App);

app.component("navigation-bar", NavigationBar);

app.mount("#app");
