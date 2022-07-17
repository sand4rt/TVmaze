<script lang="ts" setup>
import type { Input } from './Input';

defineProps<{
	// TODO: Use type directly when this is resolved: https://github.com/vuejs/core/issues/4294
	modelValue?: Input['modelValue'];
}>();

const emit = defineEmits(['update:modelValue']);

function updateModelValue(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
}
</script>

<template>
	<input class="input" :value="modelValue" @input="updateModelValue" />
</template>

<style lang="postcss" setup>
.input {
	appearance: none;
}
</style>
