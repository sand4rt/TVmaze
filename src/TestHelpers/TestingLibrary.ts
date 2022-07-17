/**
 * Playwright Test is based on the concept of test fixtures.
 * Test fixtures are used to establish environment for each test,
 * giving the test everything it needs and nothing else.
 * Test fixtures are isolated between tests. With fixtures,
 * you can group tests based on their meaning, instead of their common setup.
 * Read more: https://playwright.dev/docs/test-fixtures
 */

import { test as baseTest, expect } from '@playwright/experimental-ct-vue';
import {
	locatorFixtures as fixtures,
	LocatorFixtures as TestingLibraryFixtures,
	within,
} from '@playwright-testing-library/test/fixture';

export { expect, within };
export const test = baseTest.extend<TestingLibraryFixtures>(fixtures);
