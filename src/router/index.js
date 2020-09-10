import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/overview",
    name: "Overview",
    component: () => import("../views/Overview"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News"),
  },
  {
    path: "/e-sports",
    name: "ESports",
    component: () => import("../views/ESports"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
