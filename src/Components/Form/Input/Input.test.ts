import { ref } from 'vue';
import { expect, test } from '../../../TestHelpers/TestingLibrary';
import Input from './Input.vue';

test('changing the input value updates the v-model', async ({ mount }) => {
	const modelValue = ref('');
	const component = await mount(Input, {
		on: {
			'update:modelValue'(value: string) {
				modelValue.value = value;
			},
		},
	});

	const newModelValue = 'Bjarne Stroustrup';
	await component.type(newModelValue);

	expect(modelValue.value).toBe(newModelValue);
});

test('changing the v-model updates the input value', async ({
	mount,
	queries,
}) => {
	const modelValue = 'Elon Musk';
	await mount(Input, {
		props: {
			modelValue,
		},
	});

	await expect(queries.getByRole('textbox')).toHaveValue(modelValue);
});
