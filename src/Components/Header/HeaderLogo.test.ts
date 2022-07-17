import { expect, test, within } from '../../TestHelpers/TestingLibrary';
import HeaderLogo from './HeaderLogo.vue';

test('display a clickable company logo', async ({ mount, queries }) => {
	await mount(HeaderLogo);

	const homeLink = queries.getByRole('link', { name: 'TVmaze' });

	await expect(homeLink).toHaveAttribute('href', '/');
	await expect(
		within(homeLink).getByRole('img', { name: 'TVmaze logo' })
	).toBeVisible();
});
