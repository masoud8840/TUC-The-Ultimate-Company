import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
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
  {
    path: "/contactUs",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/FAQ",
    name: "FAQs",
    component: () => import("../views/FAQs.vue"),
  },
  {
    path: "/Careers",
    name: "Careers",
    component: () => import("../views/Careers.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    props: true,
    path: "/dashboard/:tab",
    name: "Dashboard",
    // component: () => import("../views/Dashboard.vue"),
    component: Dashboard,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
