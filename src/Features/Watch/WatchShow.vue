<script lang="ts" setup>
import ShowFallback from '@/Assets/Images/ShowFallback.svg';
import type { WatchShowProps } from './WatchShowProps';
import WatchShowRating from './WatchShowRating.vue';
import Image from '@/Components/Image/Image.vue';
import WatchShowGenres from './WatchShowGenres.vue';
import WatchShowSummary from './WatchShowSummary.vue';

const props = defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	id: WatchShowProps['id'];
	name: WatchShowProps['name'];
	headerImage?: WatchShowProps['headerImage'];
	rating?: WatchShowProps['rating'];
	summary: WatchShowProps['summary'];
	genres: WatchShowProps['genres'];
}>();
</script>

<template>
	<figure v-bind="$attrs" class="show__heading">
		<Image
			class="heading__image"
			:src="props.headerImage"
			:fallback="ShowFallback"
			:alt="`Show ${props.name}`"
		/>
	</figure>

	<section class="show-details">
		<h1 class="show-details__name">{{ props.name }}</h1>
		<div>
			<WatchShowRating v-if="props.rating" :rating="props.rating" />
			<div class="show-details__container">
				<WatchShowSummary :summary="props.summary" />
				<WatchShowGenres :genres="props.genres" />
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.show__heading {
	&::after {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: linear-gradient(0deg, var(--neutral7), transparent 50%);
	}

	& .heading__image {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 25vw;
		min-height: 300px;
	}
}

.show-details {
	padding: 0 var(--container-padding);
	max-width: 900px;
	width: 100vw;
	margin: 30px auto 0;
}

.show-details__container {
	display: flex;
}

.show-details__name {
	margin-bottom: 8px;
}
</style>
