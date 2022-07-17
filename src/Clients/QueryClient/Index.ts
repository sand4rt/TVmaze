import { notification } from '../../Components/Notification/Notification';
import type { DefaultOptions } from 'react-query/types/core';
import { QueryClient } from 'vue-query';

export const QueryKey = Object.freeze({
	SHOWS: 'SHOWS',
	SHOW: 'SHOW',
	SEARCH: 'SEARCH',
});

function globalErrorHandler(error: unknown): void {
	if (error instanceof Error) {
		return notification.error(error.message);
	}

	return notification.error(
		'A general error occurred, please try again later.'
	);
}

export const queryOptions = Object.freeze<DefaultOptions>({
	queries: { onError: globalErrorHandler },
	mutations: { onError: globalErrorHandler },
});

export const queryClient = new QueryClient({
	defaultOptions: queryOptions,
});
