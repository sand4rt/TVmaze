<script lang="ts" setup>
import type { ImageProps } from './ImageProps';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	fallback: ImageProps['fallback'];
	src?: ImageProps['src'];
	alt: ImageProps['alt'];
}>();

function onImageError(event: Event) {
	const target = event.target as HTMLImageElement;
	target.src = props.fallback;
}
</script>
<template>
	<img
		class="image"
		:src="props.src || props.fallback"
		@error="onImageError"
		:alt="props.alt"
	/>
</template>
