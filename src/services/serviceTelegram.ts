export const telegram = () => (window as any).Telegram;

export const getWebApp = () => telegram()?.WebApp;

export const getQueryId = () => getWebApp()?.initData;

export const initService = async () => {
	if (telegram()) {
		return getQueryId();
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		const timeoutId = setTimeout(() => reject(), 3000);

		script.setAttribute("src", "https://telegram.org/js/telegram-web-app.js");
		script.addEventListener("load", () => {
			clearTimeout(timeoutId);
			resolve(getQueryId());
		});

		script.addEventListener("error", (error) => {
			clearTimeout(timeoutId);
			console.error("Error loading Telegram script:", error);
			reject();
		});

		document.head.appendChild(script);
	});
};
