import { expect, test } from '../../TestHelpers/TestingLibrary';
import NotFoundPage from './NotFoundPage.vue';

test.fixme('redirect to the 404 page', async ({ mount, page }) => {
	await mount(NotFoundPage);

	// TODO: page.goto does not work correctly yet with playwright ct testing
	await page.goto('/route-not-exsist-5b45f7cd193ecc56339c64428079706a');

	await expect(page).toHaveURL('/not-found');
});
