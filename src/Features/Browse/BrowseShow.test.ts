import { expect, test } from '../../TestHelpers/TestingLibrary';
import Show from './BrowseShow.vue';
import type { BrowseShowProps } from './BrowseShowProps';

test.fixme('display a image of a show', async ({ mount, queries }) => {
	const props = {
		id: '1337',
		name: 'test',
		image: '/176381.jpg',
	};

	await mount<BrowseShowProps>(Show, { props });

	await expect(
		queries.getByRole('img', { name: `Show ${props.name}` })
	).toHaveAttribute('src', props.image);
});

test('display a link to the detail page', async ({ mount, queries }) => {
	await mount<BrowseShowProps>(Show, {
		props: {
			id: '7',
			name: 'test',
			image: '/176381.jpg',
		},
	});

	await expect(queries.getByRole('link')).toHaveAttribute('href', '/watch/7');
});

test.fixme('display fallback image not found', async ({ mount, queries }) => {
	await mount<BrowseShowProps>(Show, {
		props: {
			id: '7',
			name: 'test',
			image: '/image-that-does-not-exists-18dd176293633a842cd2e270175e6af6.jpg',
		},
	});

	await expect(queries.getByRole('img')).toHaveAttribute(
		'src',
		/assets\/ShowFallback/i
	);
});

test.fixme(
	'hide the show when not in viewport',
	async ({ mount, queries, page }) => {
		await mount<BrowseShowProps>(Show, {
			props: {
				id: '7',
				name: 'test',
				image: '/176381.jpg',
			},
		});

		await expect(queries.queryByRole('img')).not.toBeVisible();

		await page.evaluate(async () => window.scrollTo(500, 0));

		await expect(queries.queryByRole('img')).toBeVisible();
	}
);
