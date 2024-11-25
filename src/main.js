import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import NavigationBar from "./components/NavigationBar.vue";
import FooterView from "./components/FooterView.vue";
import HomeView from "./components/Home/HomeView.vue";
import ProjectsView from "./components/Projects/ProjectsView.vue";
import App from "./App.vue";
import ContactView from "./components/Contact/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/projects", component: ProjectsView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.component("navigation-bar", NavigationBar);
app.component("footer-view", FooterView);

app.mount("#app");
