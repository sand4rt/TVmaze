import type { BrowseShowProps } from './BrowseShowProps';

export type BrowseCategory = {
	readonly name: string;
	readonly shows: BrowseShowProps[];
};

export type BrowseCategoriesProps = {
	readonly categories: BrowseCategory[];
};
