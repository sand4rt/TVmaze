import { expect, test } from './TestHelpers/TestingLibrary';

// TODO: Refactor page.locator with queries / testing library
test('browsing, viewing and searching', async ({ page, queries }) => {
	await page.goto('/');

	// Wait for data to load
	await queries
		.queryByText('Drama')
		.waitFor({ state: 'visible', timeout: 40000 });

	await page.evaluate(() => window.scrollTo(4228, 2741));
	await page.locator('img[alt="Show Millennium"]').click();
	await expect(page).toHaveURL('/watch/6697');

	await expect(page.locator('h1:has-text("Millennium")')).toBeVisible();
	await expect(page.locator('text=rating')).toBeVisible();
	await expect(
		page.locator(
			'text=The Millennium TV miniseries is a compilation of the three Swedish film adaptati'
		)
	).toBeVisible();
	await expect(page.locator('text=Action')).toBeVisible();
	await expect(page.locator('text=Thriller')).toBeVisible();
	await expect(page.locator('text=Mystery')).toBeVisible();
	await expect(
		page.locator('[placeholder="Search for a show by name"]')
	).toBeVisible();
	await page
		.locator('[placeholder="Search for a show by name"]')
		.fill('mr robot');
	await expect(page).toHaveURL('/search?query=mr+robot');

	await page.locator('img[alt="Show Mr\\. Robot"]').first().click();
	await expect(page).toHaveURL('/watch/1871');

	await expect(page.locator('h1:has-text("Mr. Robot")')).toBeVisible();
	await expect(page.locator('text=rating')).toBeVisible();
	await expect(
		page.locator(
			'text=Mr. Robot follows Elliot, a young programmer who works as a cyber-security engin'
		)
	).toBeVisible();
	await expect(page.locator('text=Drama')).toBeVisible();
	await expect(page.locator('text=Crime')).toBeVisible();
	await expect(page.locator('text=Thriller')).toBeVisible();

	await page.locator('text=Homepage').click();
	await expect(page).toHaveURL('/');
});
