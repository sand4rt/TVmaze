<script lang="ts" setup>
const props = defineProps<{ genres: string[] }>();
</script>

<template>
	<ul
		aria-label="Show genres"
		class="show-details__genres"
		v-if="props.genres.length"
	>
		<li class="show__genre" v-for="genre in props.genres" :key="genre">
			{{ genre }}
		</li>
	</ul>
</template>

<style lang="postcss" scoped>
.show-details__summary {
	color: var(--white);
	flex-grow: 1;
}
</style>
