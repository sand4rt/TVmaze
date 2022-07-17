<script lang="ts" setup>
import { RouterView } from 'vue-router';
import DefaultLayout from '@/Layouts/Default/DefaultLayout.vue';
</script>

<template>
	<DefaultLayout>
		<RouterView />
	</DefaultLayout>
</template>

<style lang="postcss">
@import '@/Assets/Base.css';
</style>
