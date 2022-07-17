import { createApp } from 'vue';
import App from '@/App.vue';
import { vueQuery } from '@/Plugins/VueQuery';
import { router } from '@/Router';
import { createHead } from '@vueuse/head';

const app = createApp(App);

app.use(router).use(vueQuery).use(createHead());

app.mount('#app');
