import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import { gsap } from "gsap";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: {
			transitionName: "slide",
		},
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
		meta: {
			transitionName: "slide",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.transitionName === "slide") {
		gsap.to("#sl", {
			duration: 0.5,
			y: "-100%",
			onComplete: () => {
				next();
				gsap.to("#sl", {
					duration: 0.5,
					y: 0,
				});
			},
		});
	} else {
		next();
	}
});

export default router;
