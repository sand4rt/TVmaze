import { QueryClient } from 'vue-query';
import { setLogger } from 'vue-query';

setLogger({
	log: console.log,
	warn: console.warn,
	error() {
		// Suppress errors written to console when testing and mocking error requests.
	},
});

export const queryClientTest = new QueryClient({
	defaultOptions: {
		queries: { retry: false, cacheTime: Infinity },
		mutations: { retry: false },
	},
});
