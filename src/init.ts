import { initService } from "./services/serviceTelegram.ts";

export default async (config: any) => {
	try {
		const queryId = await initService();

		return { queryId: config.VITE_TELEGRAM_AUTHORIZATION || queryId };
	} catch (error) {
		console.log(error);
	}
};
