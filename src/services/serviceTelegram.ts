type configType = {
	auth: string | null;
};

export default class serviceTelegram {
	private telegram: any | null;
	private readonly authorization: string | null;

	constructor(config: configType) {
		this.telegram = (window as any).Telegram || null;
		this.authorization = config.auth;
	}

	get webApp(): any {
		return this.telegram?.WebApp;
	}

	get queryId(): any {
		return this.authorization || this.webApp?.initData;
	}

	async init(): Promise<any> {
		if (this.telegram) {
			return this.queryId;
		}

		return new Promise((resolve, reject) => {
			const script = document.createElement("script");
			const timeoutId = setTimeout(() => reject(), 3000);

			script.setAttribute("src", "https://telegram.org/js/telegram-web-app.js");
			script.addEventListener("load", () => {
				this.telegram = (window as any).Telegram;

				clearTimeout(timeoutId);
				resolve(this.queryId);
			});

			script.addEventListener("error", (error) => {
				clearTimeout(timeoutId);
				console.error("Error loading Telegram script:", error);
				reject();
			});

			document.head.appendChild(script);
		});
	}
}
