<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import HeaderSearch from './HeaderSearch.vue';
import HeaderNavigation from './HeaderNavigation.vue';
import HeaderLogo from './HeaderLogo.vue';

const { y } = useWindowScroll();
</script>

<template>
	<header :class="{ 'header--transparent': y === 0 }">
		<HeaderLogo />
		<HeaderNavigation />
		<HeaderSearch />
	</header>
</template>

<style lang="postcss" scoped>
header {
	display: flex;
	align-items: center;
	height: var(--header-height);
	width: 100%;
	top: 0;
	z-index: var(--header-zindex);
	background-color: var(--neutral7);
	background-image: linear-gradient(
		180deg,
		rgb(0 0 0 / 70%) 10%,
		transparent
	);
	padding: 0 var(--container-padding);
	position: fixed;
	transition: background-color 0.3s ease;

	&.header--transparent {
		background-color: transparent;
	}
}

.container {
	display: flex;
	padding: 0 var(--container-padding);
	margin: 0 auto;
	width: 100%;
}
</style>
