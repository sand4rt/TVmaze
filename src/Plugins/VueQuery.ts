import type { App } from 'vue';
import { VUE_QUERY_CLIENT } from 'vue-query';
import { queryClient } from '@/Clients/QueryClient';

/**
 * Plugin for testing with Vue Query
 * read: https://github.com/DamianOsipiuk/vue-query/issues/63
 * and: https://bit.ly/3ckvkZe
 */
export const vueQuery = Object.freeze({
	install(app: App, options = queryClient) {
		app.provide(VUE_QUERY_CLIENT, options);
	},
});
