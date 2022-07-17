import { QueryKey } from '@/Clients/QueryClient';
import { tvMaze } from '@/Clients/TVmazeClient';
import type { ShowDto } from '@/Clients/TVmazeClient/ShowDto';
import type { WatchShowProps } from '@/Features/Watch/WatchShowProps';
import { useQuery } from 'vue-query';

export function useShow(id: string) {
	function mapper(show: ShowDto): WatchShowProps {
		const image = show._embedded?.images.find(
			(image) => image.type === 'background'
		);

		return {
			id: show.id.toString(),
			name: show.name,
			headerImage: image?.resolutions.original.url || show.image?.medium,
			rating: show.rating?.average,
			summary: show.summary,
			genres: show.genres,
		};
	}

	async function query() {
		const response = await tvMaze.getShowById(id, ['images']);
		const data = await response.json();

		return mapper(data);
	}

	return useQuery([QueryKey.SHOW, id], query);
}
