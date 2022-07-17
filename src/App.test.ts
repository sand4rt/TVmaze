import { test } from './TestHelpers/TestingLibrary';
import App from './App.vue';

test('mount without errors', async ({ mount }) => {
	await mount(App);
});
