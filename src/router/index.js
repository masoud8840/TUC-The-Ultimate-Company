import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: () => import("../views/AboutUs.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
