<script lang="ts" setup>
const props = defineProps<{ summary: string }>();
</script>

<template>
	<p class="show-details__summary" v-html="props.summary" />
</template>

<style lang="postcss" setup>
.show-details__summary {
	color: var(--white);
	flex-grow: 1;
}
</style>
