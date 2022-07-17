import { test, expect } from '@playwright/test';
import { tvMaze } from '../../src/Clients/TVmazeClient';

test('get all shows', async () => {
	const response = await tvMaze.getShowsByPage(0);
	const data = await response.json();

	const expected = {
		_links: {
			previousepisode: {
				href: 'https://api.tvmaze.com/episodes/185054',
			},
			self: { href: 'https://api.tvmaze.com/shows/1' },
		},
		averageRuntime: 60,
		dvdCountry: null,
		ended: '2015-09-10',
		externals: { imdb: 'tt1553656', thetvdb: 264492, tvrage: 25988 },
		genres: ['Drama', 'Science-Fiction', 'Thriller'],
		id: 1,
		image: {
			medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
			original:
				'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
		},
		language: 'English',
		name: 'Under the Dome',
		network: {
			country: {
				code: 'US',
				name: 'United States',
				timezone: 'America/New_York',
			},
			id: 2,
			name: 'CBS',
			officialSite: 'https://www.cbs.com/',
		},
		officialSite: 'http://www.cbs.com/shows/under-the-dome/',
		premiered: '2013-06-24',
		rating: { average: 6.5 },
		runtime: 60,
		schedule: { days: ['Thursday'], time: '22:00' },
		status: 'Ended',
		summary:
			"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
		type: 'Scripted',
		updated: 1631010933,
		url: 'https://www.tvmaze.com/shows/1/under-the-dome',
		webChannel: null,
		weight: 98,
	};

	expect(data[0]).toMatchObject(expected);
});
