import { tvMaze } from '../../Clients/TVmazeClient';
import type { ShowDto } from '../../Clients/TVmazeClient/ShowDto';
import type { Page } from '@playwright/test';
import { expect, test } from '../../TestHelpers/TestingLibrary';
import BrowsePage from './BrowsePage.vue';

async function mockSearchRequest(page: Page, overrides: Partial<ShowDto> = {}) {
	await page.route(`${tvMaze.baseUrl}shows?q**`, async (route) => {
		await route.fulfill({
			contentType: 'application/json',
			body: JSON.stringify({
				score: 0,
				show: {
					id: 1337,
					genres: ['Drama'],
					name: 'Mr. Robot',
					...overrides,
				},
			}),
		});
	});
}

async function mockShowRequest(page: Page, overrides: Partial<ShowDto>[] = []) {
	await page.route(`${tvMaze.baseUrl}shows?page=1`, async (route) => {
		await route.fulfill({
			contentType: 'application/json',
			body: JSON.stringify(overrides),
		});
	});
	await page.route(`${tvMaze.baseUrl}shows?page=2`, async (route) => {
		await route.fulfill({
			contentType: 'application/json',
			status: 404,
		});
	});
}

test('display a page title', async ({ mount, page }) => {
	await mockShowRequest(page);
	await mockSearchRequest(page);

	await mount(BrowsePage);

	await expect(page).toHaveTitle('Home - TVmaze');
});

test('display a loading state while fetching data', async ({
	mount,
	queries,
	page,
}) => {
	await mockShowRequest(page);
	await mockSearchRequest(page);

	await mount(BrowsePage);

	await expect(queries.getByRole('alert')).toHaveText('Loading');
});

test.fixme('display no search results', async ({ mount, queries, page }) => {
	// TODO: page.goto does not work correctly yet with playwright ct testing
	await page.goto('search?query=DOES_NOT_EXSISTS');
	await mockShowRequest(page);
	await mockSearchRequest(page);

	await mount(BrowsePage);

	await expect(queries.getByRole('alert')).toHaveText(
		`Your search for 'DOES_NOT_EXSISTS' has no delivered results.`
	);
});

test.fixme('display shows by catagory', async ({ mount, queries, page }) => {
	test.slow();
	await mockSearchRequest(page);
	await mockShowRequest(page, [
		{ id: 1, genres: ['1', '2', '8'], name: '1' },
		{ id: 2, genres: ['1', '3', '7'], name: '2' },
		{ id: 3, genres: ['1', '4', '6'], name: '3' },
		{ id: 4, genres: ['1', '5', '5'], name: '4' },
		{ id: 5, genres: ['1', '6', '4'], name: '5' },
		{ id: 6, genres: ['1', '7', '3'], name: '6' },
		{ id: 7, genres: ['1', '8', '2'], name: '7' },
	]);

	await mount(BrowsePage);

	expect(await queries.getAllByRole('heading', { level: 2 }).count()).toBe(8);
	expect(await queries.getAllByRole('link', { name: /Show/ }).count()).toBe(
		21
	);
});
