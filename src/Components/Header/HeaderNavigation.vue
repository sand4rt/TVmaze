<script lang="ts" setup>
import { RouteName } from '@/Router';
</script>

<template>
	<nav>
		<RouterLink :to="{ name: RouteName.BROWSE }">Homepage</RouterLink>
	</nav>
</template>

<style lang="postcss" scoped>
nav {
	flex-grow: 1;

	& a {
		color: var(--white);
		text-decoration: none;
		transition: all 0.3s ease;
	}

	& a:hover {
		color: var(--neutral3);
	}
}
</style>
