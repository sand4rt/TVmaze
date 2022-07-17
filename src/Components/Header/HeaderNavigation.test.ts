import { expect, test, within } from '../../TestHelpers/TestingLibrary';
import HeaderNavigation from './HeaderNavigation.vue';

test('display a navigation menu', async ({ mount, queries }) => {
	await mount(HeaderNavigation);

	const navigation = queries.getByRole('navigation');

	await expect(
		within(navigation).getByRole('link', { name: 'Homepage' })
	).toBeVisible();
});
