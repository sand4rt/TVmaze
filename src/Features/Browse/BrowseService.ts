import { useQuery } from 'vue-query';
import type { Ref } from 'vue';
import type { BrowseCategory } from '@/Features/Browse/BrowseCategoriesProps';
import type { ShowDto } from '@/Clients/TVmazeClient/ShowDto';
import { tvMaze } from '../../Clients/TVmazeClient/Index';
import { QueryKey } from '../../Clients/QueryClient';
import type { BrowseShowProps } from './BrowseShowProps';

export function groupShowsByCategory(data: ShowDto[]): BrowseCategory[] {
	function mapper(show: ShowDto): BrowseShowProps {
		return {
			id: show.id.toString(),
			image: show.image?.medium || show.image?.original,
			name: show.name,
			rating: show.rating?.average,
		};
	}

	return data.reduce<BrowseCategory[]>((categories, show) => {
		show.genres.forEach((showGenre) => {
			const categoryIndex = categories.findIndex((category) => {
				return (
					category.name.toLowerCase().trim() ===
					showGenre.toLowerCase().trim()
				);
			});

			if (categoryIndex === -1) {
				return categories.push({
					name: showGenre.trim(),
					shows: [mapper(show)],
				});
			}

			const shows = categories[categoryIndex].shows;
			const showIndex = shows.findIndex(({ rating }) => {
				return (rating || 0) < (show.rating?.average || 0);
			});
			shows.splice(showIndex, 0, mapper(show));
		});

		return categories;
	}, []);
}

export function useShowsByCategories() {
	async function query() {
		async function recurse(page = 0): Promise<ShowDto[]> {
			const response = await tvMaze.getShowsByPage(page);

			if (!response.ok) return [];

			const current = await response.json();
			const previous = await recurse(page + 1);

			return [...previous, ...current];
		}

		const data = await recurse();

		return groupShowsByCategory(data);
	}

	const FIFTEEN_MINUTES = 900_000;
	return useQuery(QueryKey.SHOWS, query, {
		cacheTime: Infinity,
		staleTime: FIFTEEN_MINUTES,
	});
}

export function useSearch(searchQuery: Readonly<Ref<string | undefined>>) {
	async function query(): Promise<BrowseCategory[]> {
		if (!searchQuery.value) return [];
		const response = await tvMaze.searchByShowName(searchQuery.value);
		const data = await response.json();

		const shows = data.map((data) => data.show);

		return groupShowsByCategory(shows);
	}

	return useQuery([QueryKey.SEARCH, searchQuery], query);
}
