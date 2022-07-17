import { expect, test } from '../../TestHelpers/TestingLibrary';
import Image from './Image.vue';
import type { ImageProps } from './ImageProps';

test.fixme('display a image', async ({ mount, queries }) => {
	const src = '/playwright/MockImage.svg';
	const alt = 'Alan Turing';
	await mount<ImageProps>(Image, {
		props: { src, alt, fallback: 'fallback-image' },
	});

	await expect(queries.getByRole('img', { name: alt })).toHaveAttribute(
		'src',
		'image'
	);
});

test('display a fallback image when image could not load', async ({
	mount,
	queries,
}) => {
	const fallback = '8bdca74e8534c311753783e8c141746b.svg';
	await mount<ImageProps>(Image, {
		props: { src: 'ima333ge', fallback, alt: 'Edsger Dijkstra' },
	});

	await expect(queries.getByRole('img')).toHaveAttribute('src', fallback);
});

test('display a fallback image when src not specified', async ({
	mount,
	queries,
}) => {
	const fallback = 'ea3b83b92cb12cb327fb0aaa8fbca285.png';
	await mount<ImageProps>(Image, {
		props: { fallback, alt: 'Barbara Liskov' },
	});

	await expect(queries.getByRole('img')).toHaveAttribute('src', fallback);
});
