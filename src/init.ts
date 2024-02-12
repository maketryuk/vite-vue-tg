import { EnvEnum } from "./vite-env";
import serviceTelegram from "./services/serviceTelegram";

export default async (config: any) => {
	const serviceTg = new serviceTelegram(config);

	try {
		const queryId = await serviceTg.init();

		return { queryId: config[EnvEnum.telegramAuth] || queryId };
	} catch (error) {
		console.log(error);
	}
};
