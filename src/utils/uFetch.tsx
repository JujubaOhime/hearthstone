type MethodType = "GET" | "POST" | "PUT" | "DELETE";

const API = "https://us.api.blizzard.com/hearthstone";
const accessToken = "&acess_token=USVIgQGVn735QUNH8246CKZC94qmKvYdQB/";
const locale = "&locale=pt_BR";

const fetchData = async ({
	endpoint,
	onComplete,
	onError,
	params,
	method = "GET",
	body = {},
}: {
	endpoint: string;
	onComplete: (data: any) => void;
	onError: (err: any) => void;
	params: string;
	method?: MethodType;
	body?: any;
}) => {
	const bodyStringfied = JSON.stringify({ ...body });

	const requestDefaultSettings: RequestInit = {
		method: method,
		mode: "cors",
		headers: new Headers({
			Authorization: `Bearer USVIgQGVn735QUNH8246CKZC94qmKvYdQB`,
			"content-type": "aplication/json",
		}),
	};

	try {
		const response = await fetch(
			`${API}${endpoint}${params}${locale}${accessToken}`,
			{
				...requestDefaultSettings,
				...(method === "POST" ? { body: bodyStringfied } : {}),
			}
		);

		const contentType = response.headers.get("content-type");

		if (contentType && contentType.indexOf("application/json") !== -1) {
			const data = await response.json();
			onComplete?.(data);
		} else {
			onComplete?.(response.ok);
		}
	} catch (e) {
		onError(e);
	}
};

export default fetchData;
