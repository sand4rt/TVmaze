import type { ShowDto } from '@/Clients/TVmazeClient/ShowDto';
import { expect, test } from '../../TestHelpers/TestingLibrary';
import type { BrowseCategory } from './BrowseCategoriesProps';
import { groupShowsByCategory } from './BrowseService';

test('groups a single show by genre', () => {
	const data: Partial<ShowDto>[] = [
		{ id: 1, genres: ['Comedy', 'Drama'], name: 'May I Come in Madam?' },
	];

	const categories = groupShowsByCategory(data as ShowDto[]);

	expect(categories).toMatchObject([
		{ name: 'Comedy', shows: [{ id: '1' }] },
		{ name: 'Drama', shows: [{ id: '1' }] },
	] as BrowseCategory[]);
});

test('groups multiple shows by normalized genre', () => {
	const data: Partial<ShowDto>[] = [
		{ id: 1, genres: ['Sci-fi ', 'Drama'], name: 'May I Come in Madam?' },
		{ id: 1337, genres: ['DraMa ', 'ScI-FI'], name: 'Mr. Robot' },
	];

	const categories = groupShowsByCategory(data as ShowDto[]);

	expect(categories).toMatchObject([
		{ name: 'Sci-fi', shows: [{ id: '1337' }, { id: '1' }] },
		{ name: 'Drama', shows: [{ id: '1337' }, { id: '1' }] },
	] as BrowseCategory[]);
});

test.fixme('groups multiple shows by genre and rating', () => {
	//
});
