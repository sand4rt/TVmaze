import { expect, test } from '../../TestHelpers/TestingLibrary';
import Footer from './Footer.vue';

test('display copyright', async ({ mount, queries }) => {
	await mount(Footer);

	// TODO: Mock Date when this issue is resolved: https://github.com/microsoft/playwright/issues/6347
	await expect(queries.getByText('© 2022-2022 TVmaze, Inc.')).toBeVisible();
});
