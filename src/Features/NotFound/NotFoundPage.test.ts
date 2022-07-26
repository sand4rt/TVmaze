import { expect, test } from '../../TestHelpers/TestingLibrary';
import NotFoundPage from './NotFoundPage.vue';

test('redirect to the 404 page', async ({ mount, page }) => {
	await mount(NotFoundPage);

	await page.evaluate(() => {
		window.history.pushState(
			'',
			'',
			'/route-not-exsist-5b45f7cd193ecc56339c64428079706a'
		);
	});

	await expect(page).toHaveTitle('404 Page Not Found - TVmaze');
});
