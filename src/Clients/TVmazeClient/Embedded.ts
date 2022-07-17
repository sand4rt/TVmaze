interface Original {
	readonly url: string;
	readonly width: number;
	readonly height: number;
}

interface Medium {
	readonly url: string;
	readonly width: number;
	readonly height: number;
}

interface Resolutions {
	readonly original: Original;
	readonly medium: Medium;
}

interface Image {
	readonly id: number;
	readonly type: string;
	readonly main: boolean;
	readonly resolutions: Resolutions;
}

export type Embedded = {
	readonly images: Image[];
};
