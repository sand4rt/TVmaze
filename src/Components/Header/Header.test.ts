import { expect, test } from '../../TestHelpers/TestingLibrary';
import Header from './Header.vue';

test('display a header', async ({ mount, queries }) => {
	await mount(Header);

	await expect(
		queries.getByRole('img', { name: 'TVmaze logo' })
	).toBeVisible();
	await expect(queries.getByRole('navigation')).toBeVisible();
	await expect(
		queries.getByPlaceholderText('Search for a show by name')
	).toBeVisible();
});
