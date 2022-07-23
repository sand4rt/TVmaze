/* eslint-env node */

module.exports = {
	extends: [
		// Use the Standard config as the base
		// https://github.com/stylelint/stylelint-config-standard
		'stylelint-config-standard',
		// Override rules that would interfere with Prettier
		// https://github.com/shannonmoeller/stylelint-config-prettier
		'stylelint-config-prettier',
		// Enable stylelint for Vue files
		// https://github.com/ota-meshi/stylelint-config-html
		'stylelint-config-html/vue',
	],
	rules: {
		'color-no-invalid-hex': true,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'font-family-no-missing-generic-family-keyword': null,
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['deep', 'global'],
			},
		],
	},
};
