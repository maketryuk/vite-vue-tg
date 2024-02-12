import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import init from "./init";

import "./assets/css/index.css";

init(import.meta.env).then((dependency) => {
	setTimeout(() => {
		const app = createApp(App);

		app.use(router);
		app.mount("#app");

		console.log(dependency);

		// console.info("%cAPPLICATION INITIALIZED", "color: lightseagreen; font-weight: bold;", {
		// 	authorization: dependency.authorization,
		// });
	}, 100);
});
