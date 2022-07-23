/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		'vue/setup-compiler-macros': true,
		node: true,
	},
	plugins: ['unused-imports', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:playwright/playwright-test',
		'plugin:vue/vue3-essential',
		'plugin:vuejs-accessibility/recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vuejs-accessibility/form-control-has-label': 'off',
		'vue/no-setup-props-destructure': 'off',
		'vuejs-accessibility/label-has-for': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'no-restricted-imports': [
			'error',
			{
				name: '@playwright/experimental-ct-vue',
				message: 'Import from @/TestHelpers/TestingLibrary instead',
			},
		],
	},
};
