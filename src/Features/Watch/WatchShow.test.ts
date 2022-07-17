import { expect, test } from '../../TestHelpers/TestingLibrary';
import type { WatchShowProps } from './WatchShowProps';
import WatchShow from './WatchShow.vue';

test('display a show', async ({ mount, queries }) => {
	const props: WatchShowProps = {
		id: '1337',
		name: 'Under the Dome',
		rating: 42,
		summary: 'Under the Dome is a show',
		genres: ['Action', 'Adventure'],
	};

	await mount<WatchShowProps>(WatchShow, { props });

	await expect(queries.getByRole('heading', { level: 1 })).toHaveText(
		props.name
	);
	await expect(
		queries.getByRole('img', { name: `Show ${props.name}` })
	).toBeVisible();
	await expect(queries.getByLabelText('Show rating')).toHaveText(
		`${props.rating} rating`
	);
	await expect(queries.getByText(props.summary)).toBeVisible();
	await expect(queries.getByLabelText('Show genres')).toHaveText(
		props.genres.toString().replace(',', '')
	);
});

test('hide elements when props not specified', async ({ mount, queries }) => {
	await mount<WatchShowProps>(WatchShow, {
		props: {
			id: '1337',
			name: 'Under the Dome',
			summary: 'Under the Dome is a show',
			genres: [],
		},
	});

	await expect(queries.queryByLabelText('Show rating')).not.toBeVisible();
	await expect(queries.queryByLabelText('Show genres')).not.toBeVisible();
});

test('display fallback image non is specified', async ({ mount, queries }) => {
	await mount<WatchShowProps>(WatchShow, {
		props: {
			id: '1337',
			name: 'Alan Turing',
			headerImage: '',
			rating: 5,
			summary: 'Alan Mathison Turing',
			genres: ['Action', 'Adventure'],
		},
	});

	await expect(
		queries.getByRole('img', { name: 'Show Alan Turing' })
	).toHaveAttribute('src', /assets\/ShowFallback/);
});
