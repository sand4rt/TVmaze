<script lang="ts" setup>
import { useShow } from './WatchService';
import { Head } from '@vueuse/head';
import Loading from '@/Components/Loading/Loading.vue';
import type { WatchPageViewProps } from './WatchPageProps';
import WatchShow from './WatchShow.vue';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	id: WatchPageViewProps['id'];
}>();

const { isLoading, data: show } = useShow(props.id);
</script>

<template>
	<Head>
		<title>{{ show?.name }} - TVmaze</title>
	</Head>
	<main class="watch-page">
		<Loading v-if="isLoading" />
		<WatchShow class="show-detail" v-else-if="show" v-bind="show" />
	</main>
</template>
