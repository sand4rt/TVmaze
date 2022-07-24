<script lang="ts" setup>
import { RouteName } from '@/Router';
import { useFocus } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const searchInput = ref<HTMLInputElement>();
useFocus(searchInput, { initialValue: true });

function onSearchInputChange(event: Event) {
	const { value } = event.target as HTMLInputElement;
	router.replace({ name: RouteName.SEARCH, query: { query: value } });
}

watch([route], () => {
	if (searchQuery.value === '' && route.name === RouteName.SEARCH) {
		router.push({ name: RouteName.BROWSE });
	}
});

const searchQuery = computed<string>(() => {
	const { query } = route.query;
	if (query === undefined) return '';
	if (query === null) return '';
	if (query[0] === null) return '';
	return Array.isArray(query) ? query[0] : query;
});
</script>

<template>
	<label for="search" class="header__search">
		<img
			class="search__icon"
			src="@/Assets/Icons/White/Search.svg"
			alt="Search shows"
		/>
		<input
			id="search"
			class="search__input"
			ref="searchInput"
			type="search"
			placeholder="Search for a show by name"
			:value="searchQuery"
			@input="onSearchInputChange"
			maxlength="80"
		/>
	</label>
</template>

<style lang="postcss" scoped>
.search__icon {
	position: absolute;
	z-index: 1;
	left: 8px;
	top: 6px;
}

.search__input {
	background-color: rgb(0 0 0 / 75%);
	border: 1px solid rgb(255 255 255 / 85%);
	width: 234px;
	height: 36px;
	font-size: 13px;
	padding: 7px 14px 7px 37px;
	caret-color: var(--primary);
	outline: 0;
	color: var(--white);
	appearance: none;
}
</style>
