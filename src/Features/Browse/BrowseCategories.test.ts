import { expect, test } from '../../TestHelpers/TestingLibrary';
import BrowseCategories from './BrowseCategories.vue';
import type { BrowseCategoriesProps } from './BrowseCategoriesProps';
import type { BrowseShowProps } from './BrowseShowProps';

function generateShows(size: number): BrowseShowProps[] {
	return [...Array(size).keys()].map((count) => {
		return { id: count.toString(), name: count.toString() };
	});
}

test('display a category', async ({ mount, queries }) => {
	const props: BrowseCategoriesProps = {
		categories: [
			{
				name: 'My shows',
				shows: [
					{ id: '1337', name: 'Mr. Robot' },
					{ id: '42', name: 'The expanse' },
				],
			},
		],
	};

	await mount<BrowseCategoriesProps>(BrowseCategories, { props });

	await expect(queries.getByRole('heading', { level: 2 })).toHaveText(
		props.categories[0].name
	);
	expect(await queries.getAllByRole('link').count()).toBe(2);
});

test('display only the shows in the viewport', async ({ mount, queries }) => {
	await mount<BrowseCategoriesProps>(BrowseCategories, {
		props: {
			categories: [
				{
					name: 'My shows',
					shows: generateShows(10000),
				},
			],
		},
	});

	expect(await queries.getAllByRole('link').count()).toBe(20);
});

test('load more shows when scrolling', async ({ mount, queries, page }) => {
	await mount<BrowseCategoriesProps>(BrowseCategories, {
		props: {
			categories: [
				{
					name: 'My shows',
					shows: generateShows(10000),
				},
			],
		},
	});

	expect(await queries.getAllByRole('link').count()).toBe(20);

	await page.evaluate(() => window.scrollTo(1500, 0));

	expect(await queries.getAllByRole('link').count()).toBe(40);
});
