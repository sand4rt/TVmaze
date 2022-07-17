<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import ShowFallback from '@/Assets/Images/ShowFallback.svg';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import type { BrowseShowProps } from './BrowseShowProps';
import Image from '@/Components/Image/Image.vue';
import { RouteName } from '@/Router';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	id: BrowseShowProps['id'];
	name: BrowseShowProps['name'];
	image?: BrowseShowProps['image'];
	rating?: BrowseShowProps['rating'];
}>();

const showElement = ref<HTMLElement>();
const isImageVisible = ref(false);

useIntersectionObserver(
	showElement,
	([{ isIntersecting }]) => {
		if (!isIntersecting) return;
		isImageVisible.value = isIntersecting;
	},
	{ rootMargin: '100%' }
);
</script>

<template>
	<RouterLink
		ref="showElement"
		class="show"
		:aria-label="`Show ${props.name}`"
		:to="{ name: RouteName.WATCH, params: { id: props.id } }"
	>
		<Image
			v-if="isImageVisible"
			class="show__image"
			:src="props.image"
			:fallback="ShowFallback"
			:alt="`Show ${props.name}`"
		/>
	</RouterLink>
</template>

<style lang="postcss" scoped>
.show {
	display: block;
	width: 12vw;
	height: 16vw;
	min-width: 150px;
	min-height: 200px;
	flex-shrink: 0;
}

.show__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.3s ease;
	text-indent: 100%;
	white-space: nowrap;
	overflow: hidden;

	&:hover {
		transform: scale(1.4);
		z-index: var(--show-zindex);
	}
}
</style>
