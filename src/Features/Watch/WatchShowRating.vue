<script lang="ts" setup>
const props = defineProps<{ rating: number }>();
</script>

<template>
	<div class="rating" aria-label="Show rating" v-if="props.rating">
		<img
			class="rating__image"
			src="../../Assets/Icons/Color/Star.svg"
			alt="Rating"
		/>
		<span class="rating__text">
			{{ props.rating }} <span>rating</span>
		</span>
	</div>
</template>

<style lang="postcss" scoped>
.rating {
	display: flex;
	margin-bottom: 4px;
}

.rating__text span {
	color: var(--neutral3);
}

.rating__image {
	margin-right: 4px;
}
</style>
