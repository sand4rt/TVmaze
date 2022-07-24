<script lang="ts" setup>
import Header from '@/Components/Header/Header.vue';
import Footer from '@/Components/Footer/Footer.vue';
</script>

<template>
	<div class="default-layout">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<style lang="postcss">
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	display: flex !important;
	flex-direction: column;
	flex-grow: 1;
	width: max-content;
	min-width: 100vw;

	&.page--spacing {
		margin-top: var(--header-height);
		padding-top: 30px;
	}
}
</style>
