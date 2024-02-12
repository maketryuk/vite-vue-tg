import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "./middleware/loadLayout.middleware";
import { RouteNamesEnum } from "./routes.types";
import { AppLayoutsEnum } from "../layouts/layouts.types";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: RouteNamesEnum.homePage,
			component: () => import("../views/HomePage.vue"),
			meta: {
				layout: AppLayoutsEnum.default,
			},
		},
	],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
