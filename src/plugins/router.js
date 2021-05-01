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
		path: "/about",
		name: "About",
		component: () => import("../views/About"),
	},
	{
		path: "/blog",
		name: "Blog",
		component: () => import("../views/Blog"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("../views/Contact"),
	},
	{
		path: "/legal",
		name: "Legal",
		component: () => import("../views/Legal"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
