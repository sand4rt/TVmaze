import {
	createRouter,
	createWebHistory,
	LocationQueryValue,
	RouteRecordRaw,
} from 'vue-router';
import BrowsePage from '@/Features/Browse/BrowsePage.vue';
import type { WatchPageViewProps } from '@/Features/Watch/WatchPageProps';
import type { BrowsePageProps } from '@/Features/Browse/BrowsePageProps';

function toString(
	props: string | string[] | LocationQueryValue | LocationQueryValue[]
): string | undefined {
	if (!props) return undefined;
	if (props[0] === null) return undefined;
	return Array.isArray(props) ? props[0] : props;
}

export const RouteName = Object.freeze({
	BROWSE: 'BROWSE',
	SEARCH: 'SEARCH',
	WATCH: 'WATCH',
	NOT_FOUND: 'NOT_FOUND',
});

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: RouteName.BROWSE,
		props(to): BrowsePageProps {
			return Object.freeze({ searchQuery: toString(to.query.query) });
		},
		component: BrowsePage,
	},
	{
		path: '/search',
		name: RouteName.SEARCH,
		props(to): BrowsePageProps {
			return Object.freeze({ searchQuery: toString(to.query.query) });
		},
		component: BrowsePage,
	},
	{
		path: '/watch/:id',
		name: RouteName.WATCH,
		props(to): WatchPageViewProps {
			return Object.freeze({ id: toString(to.params.id) || '' });
		},
		component: () => import('../Features/Watch/WatchPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: RouteName.NOT_FOUND,
		component: () => import('../Features/NotFound/NotFoundPage.vue'),
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
