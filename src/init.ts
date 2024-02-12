import { EnvEnum } from "./types.global";
import serviceTelegram from "./services/serviceTelegram";

type DependencyType = {
	queryId: string;
};

export default async (config: any) => {
	const serviceTg = new serviceTelegram(config);

	try {
		const queryId = await serviceTg.init();

		return { queryId: config[EnvEnum.telegramAuth] || queryId } as DependencyType;
	} catch (error) {
		console.log(error);
	}
};
