import { expect, test } from '../../TestHelpers/TestingLibrary';
import HeaderSearch from './HeaderSearch.vue';

test.fixme(
	'display the query in the search input initially',
	async ({ mount, queries, page }) => {
		// TODO: page.goto does not work correctly yet with playwright ct testing
		await page.goto('search?query=skins');

		// TODO: add test cases for:
		// 	if (query === undefined) return '';
		// 	if (query === null) return '';
		// 	if (query[0] === null) return '';
		// 	return Array.isArray(query) ? query[0] : query;

		await mount(HeaderSearch);

		await expect(
			queries.getByPlaceholderText('Search for a show by name')
		).toHaveValue('skins');
	}
);

test('update the url when typing in the search input', async ({
	mount,
	queries,
	page,
}) => {
	await mount(HeaderSearch);

	await queries
		.getByPlaceholderText('Search for a show by name')
		.type('Mr. Robot');

	await expect(page).toHaveURL('/search?query=Mr.+Robot');
});

test('focus the search input initially', async ({ mount, queries }) => {
	await mount(HeaderSearch);

	await expect(
		queries.getByPlaceholderText('Search for a show by name')
	).toBeFocused();
});

test('navigate to the browse page when search query is cleared', async ({
	mount,
	queries,
	page,
}) => {
	await mount(HeaderSearch);

	const searchInput = queries.getByPlaceholderText(
		'Search for a show by name'
	);

	await searchInput.type('A');

	await expect(page).toHaveURL('search?query=A');

	await searchInput.press('Backspace');

	await expect(page).toHaveURL('/');
});
