import { tvMaze } from '../../Clients/TVmazeClient/Index';
import type { ShowDto } from '@/Clients/TVmazeClient/ShowDto';
import { expect, test } from '../../TestHelpers/TestingLibrary';
import WatchPage from './WatchPage.vue';
import type { WatchPageViewProps } from './WatchPageProps';
import type { Page } from '@playwright/test';

async function mockShowRequest(page: Page, overrides: Partial<ShowDto> = {}) {
	await page.route(`${tvMaze.baseUrl}shows/**`, async (route) => {
		await route.fulfill({
			contentType: 'application/json',
			body: JSON.stringify({
				id: 1337,
				genres: ['Drama', 'Sci-fi'],
				name: 'Mr. Robot',
				...overrides,
			}),
		});
	});
}

test('display a page title', async ({ mount, page }) => {
	await mockShowRequest(page, {
		id: 42,
		genres: ['Drama'],
		name: 'Breaking Bad',
	});

	await mount<WatchPageViewProps>(WatchPage, {
		props: { id: '1' },
	});

	await expect(page).toHaveTitle('Breaking Bad - TVmaze');
});

test.fixme(
	'display a loading state while fetching data',
	async ({ mount, queries, page }) => {
		await mockShowRequest(page);

		await mount<WatchPageViewProps>(WatchPage, {
			props: { id: '1' },
		});

		await expect(queries.getByRole('alert')).toHaveText('Loading');
	}
);

test('display a show', async ({ mount, queries, page }) => {
	const name = 'The Expanse';
	await mockShowRequest(page, { id: 777, genres: ['Sci-fi'], name });

	await mount<WatchPageViewProps>(WatchPage, {
		props: { id: '1' },
	});

	await expect(
		queries.queryByRole('alert', { name: 'Loading' })
	).not.toBeVisible();
	await expect(queries.getByRole('heading', { level: 1 })).toHaveText(name);
});
