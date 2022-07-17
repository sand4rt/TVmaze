<script lang="ts" setup>
import { RouteName } from '@/Router';
</script>

<template>
	<RouterLink :to="{ name: RouteName.BROWSE }" aria-label="TVmaze">
		<img
			class="header__logo"
			src="@/Assets/Logos/Logo.svg"
			alt="TVmaze logo"
		/>
	</RouterLink>
</template>

<style lang="postcss" scoped>
.header__logo {
	margin-right: 2vw;
}
</style>
