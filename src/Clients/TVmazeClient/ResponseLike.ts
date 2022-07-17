export type ResponseLike<T> = Promise<
	Omit<Response, 'json'> & {
		json(): Promise<T>;
	}
>;
