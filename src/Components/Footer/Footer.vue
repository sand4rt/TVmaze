<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core';

const currentYear = useDateFormat(useNow(), 'YYYY');
</script>

<template>
	<footer>&copy; 2022-{{ currentYear }} TVmaze, Inc.</footer>
</template>

<style lang="postcss" scoped>
footer {
	padding: 8px var(--container-padding);
	color: var(--neutral4);
	font-size: 13px;
	margin-top: 30px;
}
</style>
