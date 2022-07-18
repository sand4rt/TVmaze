<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core';
import { computed, ref } from 'vue';
import type { BrowseCategoriesProps } from './BrowseCategoriesProps';
import Show from './BrowseShow.vue';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	categories: BrowseCategoriesProps['categories'];
}>();

const INCREASE_BY_AMOUNT = 20;
const amount = ref(INCREASE_BY_AMOUNT);
const categories = computed(() => getShowsByAmount(amount.value));

function getShowsByAmount(amount = 0) {
	return props.categories.map((category) => {
		return { ...category, shows: category.shows.slice(0, amount) };
	});
}

function loadMoreData() {
	amount.value += INCREASE_BY_AMOUNT;
}

useInfiniteScroll(window, loadMoreData, {
	distance: 1500,
	// TODO: remove any type when https://github.com/vueuse/vueuse/pull/1929 is released
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	direction: 'right' as any,
});
</script>

<template>
	<section
		class="show-category"
		v-for="category in categories"
		:key="category.name"
	>
		<h2 class="show-category__name">
			<span class="show-category__text">{{ category.name }}</span>
		</h2>
		<div class="show-category__list">
			<Show v-for="show in category.shows" v-bind="show" :key="show.id" />
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.show-category {
	position: relative;
}

.show-category__name {
	color: var(--neutral1);
	font-size: calc(14px + 0.5vw);
	font-weight: 700;
	position: sticky;
	z-index: var(--show-category-zindex);
	top: var(--header-height);
	left: 0;
	background-color: rgb(20 20 20 / 75%);
	padding: 6px 0;
	cursor: default;
}

.show-category__text {
	padding: 0 var(--container-padding);
	position: sticky;
	left: 0;
	top: 0;
}

.show-category__list {
	margin: 0 var(--container-padding);
	display: flex;
	gap: 8px;
	margin-top: 34px;

	&:first-of-type {
		margin-top: 0;
	}
}
</style>
