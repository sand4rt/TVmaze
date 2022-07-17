import type { Embeds } from './Embeds';
import type { ResponseLike } from './ResponseLike';
import type { ShowDto } from './ShowDto';
import fetch from 'cross-fetch';
import type { SearchShowDto } from './SearchShowDto';

const baseUrl = new URL('https://api.tvmaze.com/');

/**
 * @docs https://www.tvmaze.com/api#show-search
 */
function searchByShowName(showName: string): ResponseLike<SearchShowDto[]> {
	return fetch(`${baseUrl}search/shows?q=${showName}`);
}

/**
 * @docs https://www.tvmaze.com/api#show-index
 */
function getShowsByPage(page: number): ResponseLike<ShowDto[]> {
	return fetch(`${baseUrl}shows?page=${page}`);
}

/**
 * @docs https://www.tvmaze.com/api#show-main-information
 */
function getShowById(id: string, embeds?: Embeds[]): ResponseLike<ShowDto> {
	const showBaseUrl = new URL(`${baseUrl}shows/${id}`);

	if (!embeds) return fetch(showBaseUrl);

	const embedsNormalized = embeds.map((embed) => ['embed[]', embed]);
	const queryString = new URLSearchParams(embedsNormalized);
	return fetch(`${showBaseUrl}?${queryString}`);
}

export const tvMaze = Object.freeze({
	baseUrl,
	searchByShowName,
	getShowsByPage,
	getShowById,
});
