<script lang="ts" setup>
import { useShowsByCategories, useSearch } from './BrowseService';
import { Head } from '@vueuse/head';
import Loading from '@/Components/Loading/Loading.vue';
import { useDebounce } from '@vueuse/shared';
import { computed } from 'vue';
import ShowCategories from './BrowseCategories.vue';
import type { BrowsePageProps } from './BrowsePageProps';
import BrowseNotFound from './BrowseNotFound.vue';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	searchQuery: BrowsePageProps['searchQuery'];
}>();

const categories = useShowsByCategories();

const searchQueryReactive = computed(() => props.searchQuery);
const searchQueryDebounce = useDebounce(searchQueryReactive, 400);
const searchResults = useSearch(searchQueryDebounce);

const categoriesOrSearchResults = computed(() => {
	if (!searchQueryDebounce.value?.length) {
		return categories.data.value;
	}
	return searchResults.data.value;
});

const hasEmptySearchResults = computed(() => {
	return (
		!isLoading.value &&
		!!searchQueryReactive.value?.length &&
		!categoriesOrSearchResults.value?.length
	);
});

const isLoading = computed(() => {
	return categories.isLoading.value || searchResults.isLoading.value;
});
</script>

<template>
	<Head>
		<title>Home - TVmaze</title>
	</Head>
	<main class="browse-page page--spacing">
		<Loading v-if="isLoading" />
		<ShowCategories
			v-else-if="categoriesOrSearchResults"
			:categories="categoriesOrSearchResults"
		/>
		<BrowseNotFound v-if="hasEmptySearchResults">
			{{ props.searchQuery }}
		</BrowseNotFound>
	</main>
</template>
