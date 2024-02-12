import type { VueElement } from "vue";
import type { AppLayoutsEnum } from "../layouts/layouts.types.ts";

declare module "vue-router" {
	interface RouteMeta {
		layout?: AppLayoutsEnum;
		layoutComponent?: VueElement;
	}
}

export enum RouteNamesEnum {
	homePage = "homePage",
}
