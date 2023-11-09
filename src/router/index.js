import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/create",
		name: "Create",
		component: () => import("../views/Create.vue"),
	},
	{
		path: "/:id",
		name: "Book",
		component: () => import("../views/Book.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.VUE_APP_BASE_URL,
	routes,
});

export default router;
