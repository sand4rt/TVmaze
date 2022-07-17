import '../src/Assets/Base.css';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import { vueQuery } from '../src/Plugins/VueQuery';
import { router } from '../src/Router';
import { createHead } from '@vueuse/head';
import { queryClientTest } from '../src/TestHelpers/VueQuery';

beforeMount(async ({ app }) => {
	app.use(router).use(vueQuery, queryClientTest).use(createHead());
});
