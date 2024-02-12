import { initService } from "./services/serviceTelegram.ts";

export default async (config: any) => {
	console.log(config);
	try {
		const queryId = await initService();

		console.log(queryId);
	} catch (error) {
		console.log(error);
	}
};
