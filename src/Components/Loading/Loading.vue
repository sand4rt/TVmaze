<template>
	<div class="loading" role="alert">Loading</div>
</template>

<style lang="postcss" setup>
.loading {
	margin: auto;
	width: 74px;

	&::after {
		overflow: hidden;
		display: inline-block;
		vertical-align: bottom;
		animation: loading steps(4, end) 900ms infinite;
		content: '\2026'; /* ascii code for the ellipsis character */
		width: 0;
	}
}
@keyframes loading {
	to {
		width: 1.25em;
	}
}

@keyframes loading {
	to {
		width: 1.25em;
	}
}
</style>
