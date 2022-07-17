export type SelfDto = {
	readonly href: string;
};

export type LinksDto = {
	readonly self: SelfDto;
	readonly previousepisode: SelfDto;
	readonly nextepisode?: SelfDto;
};
