import type { Embedded } from './Embedded';
import type { LinksDto } from './LinksDto';

type ScheduleDto = {
	readonly time: string;
	readonly days: string[];
};

type RatingDto = {
	readonly average?: number;
};

type CountryDto = {
	readonly name: string;
	readonly code: string;
	readonly timezone: string;
};

type NetworkDto = {
	readonly id: number;
	readonly name: string;
	readonly country: CountryDto;
	readonly officialSite: string | null;
};

type WebChannelDto = {
	readonly id: number;
	readonly name: string;
	readonly country: CountryDto;
	readonly officialSite: string;
};

type ExternalsDto = {
	readonly tvrage?: number;
	readonly thetvdb?: number;
	readonly imdb: string;
};

type ImageDto = {
	readonly medium: string;
	readonly original: string;
};

export type ShowDto = {
	readonly id: number;
	readonly url: string;
	readonly name: string;
	readonly type: string;
	readonly language: string;
	readonly genres: string[];
	readonly status: string;
	readonly runtime?: number;
	readonly averageRuntime?: number;
	readonly premiered: string;
	readonly ended: string;
	readonly officialSite: string;
	readonly schedule: ScheduleDto;
	readonly rating: RatingDto | null;
	readonly weight: number;
	readonly network: NetworkDto;
	readonly webChannel: WebChannelDto | null;
	readonly dvdCountry?: unknown;
	readonly externals: ExternalsDto;
	readonly image?: ImageDto;
	readonly summary: string;
	readonly updated: number;
	readonly _links: LinksDto;
	readonly _embedded?: Embedded;
};
